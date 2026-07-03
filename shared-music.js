/**
 * Physics Sandbox Universe - Global Music Player v2
 * Floating mini-player with cross-page seamless playback via BroadcastChannel + sessionStorage.
 */

(function() {
  'use strict';

  var MUSIC_KEY = 'psu-music-v2';
  var PLAYLIST = [
    { name: 'Rain on the Glass', src: 'music/rain_on_the_glass.mp3' }
  ];

  var channel = null;
  try { channel = new BroadcastChannel('psu-music-sync'); } catch(e) {}

  // --- State ---
  var state = {
    playing: false,
    trackIdx: 0,
    volume: 0.5,
    muted: false,
    elapsed: 0,
    duration: 0,
    initialized: false
  };

  var audio = new Audio();
  audio.preload = 'auto';
  audio.loop = false;
  audio.volume = state.volume;

  // Error tracking: prevent infinite skip loop when all tracks fail
  var errorSkipCount = 0;

  // --- BroadcastChannel sync ---
  function broadcast(msg) {
    if (channel) {
      try { channel.postMessage(msg); } catch(e) {}
    }
  }

  if (channel) {
    channel.onmessage = function(e) {
      var msg = e.data;
      if (msg.type === 'state' && msg.origin !== window.location.href) {
        // Another page is playing, sync state to our UI but don't duplicate audio
        if (msg.playing !== undefined) state.playing = msg.playing;
        if (msg.trackIdx !== undefined) state.trackIdx = msg.trackIdx;
        if (msg.volume !== undefined) { state.volume = msg.volume; audio.volume = state.volume; }
        if (msg.muted !== undefined) { state.muted = msg.muted; audio.muted = state.muted; }
        if (msg.elapsed !== undefined) state.elapsed = msg.elapsed;
        if (msg.duration !== undefined) state.duration = msg.duration;
        // Pause audio on this page since another page controls playback
        audio.pause();
        state.playing = false; // We don't actually play here
        updateUI();
      }
    };
  }

  // --- Persistence (lightweight, for first-load recovery) ---
  function saveState() {
    try {
      sessionStorage.setItem(MUSIC_KEY, JSON.stringify({
        trackIdx: state.trackIdx,
        volume: state.volume,
        muted: state.muted,
        elapsed: audio.currentTime || 0,
        playing: state.playing
      }));
    } catch(e) {}
  }

  function loadState() {
    try {
      var s = JSON.parse(sessionStorage.getItem(MUSIC_KEY));
      if (s) {
        if (typeof s.trackIdx === 'number' && s.trackIdx >= 0 && s.trackIdx < PLAYLIST.length) state.trackIdx = s.trackIdx;
        if (typeof s.volume === 'number') { state.volume = Math.max(0, Math.min(1, s.volume)); audio.volume = state.volume; }
        if (typeof s.muted === 'boolean') { state.muted = s.muted; audio.muted = state.muted; }
        var wasPlaying = s.playing || false;
        var elapsed = s.elapsed || 0;
        return { wasPlaying: wasPlaying, elapsed: elapsed };
      }
    } catch(e) {}
    return { wasPlaying: false, elapsed: 0 };
  }

  // --- Audio Events ---
  audio.addEventListener('ended', function() {
    nextTrack();
  });
  audio.addEventListener('loadedmetadata', function() {
    state.duration = audio.duration;
    errorSkipCount = 0; // Reset error counter on successful load
    updateUI();
  });
  audio.addEventListener('timeupdate', function() {
    state.elapsed = audio.currentTime;
    updateTimeDisplay();
    // Broadcast position periodically for other tabs
    if (state.playing) {
      saveState();
      broadcast({
        type: 'state',
        origin: window.location.href,
        playing: true,
        trackIdx: state.trackIdx,
        volume: state.volume,
        muted: state.muted,
        elapsed: state.elapsed,
        duration: state.duration
      });
    }
  });
  audio.addEventListener('error', function() {
    console.error('Music player load error:', audio.error);
    errorSkipCount++;
    if (errorSkipCount >= 4) {
      // Too many consecutive load errors — stop trying, show paused state
      state.playing = false;
      audio.pause();
      errorSkipCount = 0;
      updateUI();
      return;
    }
    // Skip to next track (error events fire asynchronously, no re-entrancy issue)
    if (state.playing) nextTrack();
  });

  // --- Controls ---
  function loadTrack(idx, resumeTime) {
    state.trackIdx = idx;
    audio.src = PLAYLIST[idx].src;
    state.elapsed = 0;
    state.duration = 0;
    if (typeof resumeTime === 'number' && resumeTime > 0) {
      audio.addEventListener('loadedmetadata', function onMeta() {
        audio.currentTime = Math.min(resumeTime, audio.duration || 0);
        audio.removeEventListener('loadedmetadata', onMeta);
      });
    }
    updateUI();
    saveState();
  }

  function togglePlay() {
    if (!audio.src) loadTrack(state.trackIdx);
    if (state.playing) {
      audio.pause();
      state.playing = false;
      broadcast({ type: 'state', origin: window.location.href, playing: false, trackIdx: state.trackIdx });
      saveState();
      updateUI();
    } else {
      audio.play().then(function() {
        state.playing = true;
        broadcast({ type: 'state', origin: window.location.href, playing: true, trackIdx: state.trackIdx });
        saveState();
        updateUI();
      }).catch(function(err) {
        state.playing = false;
        saveState();
        updateUI();
      });
    }
  }

  function nextTrack() {
    var wasPlaying = state.playing;
    var idx = (state.trackIdx + 1) % PLAYLIST.length;
    loadTrack(idx);
    if (wasPlaying) {
      audio.play().then(function() {
        state.playing = true;
        broadcast({ type: 'state', origin: window.location.href, playing: true, trackIdx: state.trackIdx });
        saveState();
        updateUI();
      }).catch(function() {
        state.playing = false;
        saveState();
        updateUI();
      });
    } else {
      broadcast({ type: 'state', origin: window.location.href, playing: false, trackIdx: state.trackIdx });
      saveState();
      updateUI();
    }
  }

  function prevTrack() {
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }
    var wasPlaying = state.playing;
    var idx = (state.trackIdx - 1 + PLAYLIST.length) % PLAYLIST.length;
    loadTrack(idx);
    if (wasPlaying) {
      audio.play().then(function() {
        state.playing = true;
        broadcast({ type: 'state', origin: window.location.href, playing: true, trackIdx: state.trackIdx });
        saveState();
        updateUI();
      }).catch(function() {
        state.playing = false;
        saveState();
        updateUI();
      });
    } else {
      broadcast({ type: 'state', origin: window.location.href, playing: false, trackIdx: state.trackIdx });
      saveState();
      updateUI();
    }
  }

  function setVolume(v) {
    state.volume = Math.max(0, Math.min(1, v));
    audio.volume = state.volume;
    audio.muted = state.volume === 0 ? true : false;
    state.muted = state.volume === 0;
    broadcast({ type: 'state', origin: window.location.href, volume: state.volume, muted: state.muted });
    saveState();
    updateUI();
  }

  function toggleMute() {
    state.muted = !state.muted;
    audio.muted = state.muted;
    broadcast({ type: 'state', origin: window.location.href, muted: state.muted });
    saveState();
    updateUI();
  }

  function seekTo(ratio) {
    if (audio.duration) {
      audio.currentTime = ratio * audio.duration;
    }
  }

  // --- Build UI ---
  var playerEl = null;
  var trackNameEl = null;
  var playBtnEl = null;
  var prevBtnEl = null;
  var nextBtnEl = null;
  var muteBtnEl = null;
  var volumeSliderEl = null;
  var progressEl = null;
  var timeEl = null;
  var playlistEl = null;

  function buildPlayer() {
    if (document.getElementById('psu-music-player')) return;

    playerEl = document.createElement('div');
    playerEl.id = 'psu-music-player';
    playerEl.innerHTML = '\
      <div class="psu-mp-main">\
        <div class="psu-mp-controls">\
          <button class="psu-mp-btn psu-mp-prev" title="上一首">&#9198;</button>\
          <button class="psu-mp-btn psu-mp-play" title="播放/暂停">&#9654;</button>\
          <button class="psu-mp-btn psu-mp-next" title="下一首">&#9197;</button>\
        </div>\
        <div class="psu-mp-info">\
          <div class="psu-mp-track"></div>\
          <div class="psu-mp-progress">\
            <div class="psu-mp-bar"><div class="psu-mp-fill"></div></div>\
            <div class="psu-mp-time">0:00 / 0:00</div>\
          </div>\
        </div>\
        <div class="psu-mp-right">\
          <button class="psu-mp-btn psu-mp-mute" title="静音">&#9835;</button>\
          <input type="range" class="psu-mp-volume" min="0" max="100" value="50">\
        </div>\
      </div>\
      <div class="psu-mp-playlist"></div>';

    var style = document.createElement('style');
    style.id = 'psu-music-style';
    style.textContent = '\
#psu-music-player{position:fixed;bottom:20px;right:20px;z-index:9999;font-family:var(--font-main,"Segoe UI","Microsoft YaHei",system-ui,sans-serif);transition:all .3s ease;pointer-events:auto}\
.psu-mp-main{display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:12px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 4px 24px rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.1);transition:background-color .5s ease,border-color .4s ease}\
.psu-mp-controls{display:flex;gap:4px}\
.psu-mp-btn{width:32px;height:32px;border:none;border-radius:50%;background:rgba(255,255,255,0.1);color:inherit;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;transition:all .2s ease;pointer-events:auto}\
.psu-mp-btn:hover{background:rgba(255,255,255,0.2);transform:scale(1.1)}\
.psu-mp-play{width:38px;height:38px;font-size:16px}\
.psu-mp-info{flex:1;min-width:120px;max-width:200px}\
.psu-mp-track{font-size:0.78rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:4px;opacity:0.9;cursor:default}\
.psu-mp-progress{position:relative}\
.psu-mp-bar{height:4px;border-radius:2px;background:rgba(255,255,255,0.1);overflow:hidden;cursor:pointer}\
.psu-mp-fill{height:100%;width:0%;border-radius:2px;background:var(--psu-mp-accent,#74b9ff);transition:width 0.1s linear}\
.psu-mp-time{font-size:0.65rem;opacity:0.5;margin-top:2px;font-family:monospace}\
.psu-mp-right{display:flex;align-items:center;gap:6px}\
.psu-mp-volume{width:70px;height:4px;border-radius:2px;-webkit-appearance:none;appearance:none;background:rgba(255,255,255,0.15);outline:none;cursor:pointer}\
.psu-mp-volume::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;border-radius:50%;background:var(--psu-mp-accent,#74b9ff);cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,0.3)}\
.psu-mp-playlist{display:none;position:absolute;bottom:100%;right:0;margin-bottom:8px;padding:8px 0;border-radius:10px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 4px 24px rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.1);min-width:200px;max-height:240px;overflow-y:auto}\
.psu-mp-playlist.show{display:block}\
.psu-mp-pl-item{padding:8px 16px;font-size:0.78rem;cursor:pointer;display:flex;align-items:center;gap:8px;transition:background .2s}\
.psu-mp-pl-item:hover{background:rgba(255,255,255,0.08)}\
.psu-mp-pl-item.active{color:var(--psu-mp-accent,#74b9ff);font-weight:600}\
.psu-mp-pl-item .psu-mp-pl-idx{font-size:0.65rem;opacity:0.4;font-family:monospace;width:18px}\
[data-theme="glass"] .psu-mp-main,[data-theme="glass"] .psu-mp-playlist{background:rgba(10,10,20,0.85);color:#e0e6ed}\
[data-theme="cyber"] .psu-mp-main,[data-theme="cyber"] .psu-mp-playlist{background:rgba(5,0,15,0.9);color:#e0f7fa;border-color:rgba(0,243,255,0.15)}\
[data-theme="cyber"] .psu-mp-play:hover{box-shadow:0 0 12px rgba(0,243,255,0.3)}\
[data-theme="cyber"] .psu-mp-btn:hover{box-shadow:0 0 10px rgba(0,243,255,0.2)}\
[data-theme="cartoon"] .psu-mp-main,[data-theme="cartoon"] .psu-mp-playlist{background:rgba(255,248,240,0.95);color:#2d3436;border-color:rgba(0,0,0,0.08);box-shadow:0 4px 16px rgba(0,0,0,0.08)}\
[data-theme="cartoon"] .psu-mp-btn{background:rgba(255,107,107,0.15)}\
[data-theme="cartoon"] .psu-mp-btn:hover{background:rgba(255,107,107,0.3)}\
[data-theme="cartoon"] .psu-mp-bar{background:rgba(0,0,0,0.06)}\
[data-theme="cartoon"] .psu-mp-volume{background:rgba(0,0,0,0.08)}\
[data-theme="cartoon"] .psu-mp-volume::-webkit-slider-thumb{background:#ff6b6b}\
[data-theme="academic"] .psu-mp-main,[data-theme="academic"] .psu-mp-playlist{background:rgba(255,255,255,0.95);color:#1a1a2e;border-color:#e0e0e0;box-shadow:0 2px 12px rgba(0,0,0,0.08);backdrop-filter:none}\
[data-theme="academic"] .psu-mp-btn{background:rgba(0,0,0,0.04)}\
[data-theme="academic"] .psu-mp-btn:hover{background:rgba(0,0,0,0.08)}\
[data-theme="academic"] .psu-mp-bar{background:rgba(0,0,0,0.06)}\
[data-theme="academic"] .psu-mp-fill{background:#6b8cae}\
[data-theme="academic"] .psu-mp-volume{background:rgba(0,0,0,0.06)}\
[data-theme="academic"] .psu-mp-volume::-webkit-slider-thumb{background:#6b8cae;width:10px;height:10px}\
[data-theme="soviet"] .psu-mp-main,[data-theme="soviet"] .psu-mp-playlist{background:rgba(255,250,242,0.95);color:#1a1a1a;border:2px solid #c41e1e;border-radius:2px;box-shadow:0 2px 12px rgba(0,0,0,0.1);backdrop-filter:none}\
[data-theme="soviet"] .psu-mp-btn{background:rgba(196,30,30,0.1);border-radius:0}\
[data-theme="soviet"] .psu-mp-btn:hover{background:rgba(196,30,30,0.2)}\
[data-theme="soviet"] .psu-mp-play{background:#c41e1e;color:#fff}\
[data-theme="soviet"] .psu-mp-play:hover{background:#a01818}\
[data-theme="soviet"] .psu-mp-bar{background:rgba(196,30,30,0.1)}\
[data-theme="soviet"] .psu-mp-fill{background:#c41e1e}\
[data-theme="soviet"] .psu-mp-volume{background:rgba(196,30,30,0.1);border-radius:0}\
[data-theme="soviet"] .psu-mp-volume::-webkit-slider-thumb{background:#c41e1e;border-radius:0}\
[data-theme="soviet"] .psu-mp-pl-item.active{color:#c41e1e}\
@media(max-width:600px){#psu-music-player{bottom:10px;right:10px}.psu-mp-info{max-width:140px}.psu-mp-right .psu-mp-volume{width:50px}}';

    document.head.appendChild(style);
    document.body.appendChild(playerEl);

    trackNameEl = playerEl.querySelector('.psu-mp-track');
    playBtnEl = playerEl.querySelector('.psu-mp-play');
    prevBtnEl = playerEl.querySelector('.psu-mp-prev');
    nextBtnEl = playerEl.querySelector('.psu-mp-next');
    muteBtnEl = playerEl.querySelector('.psu-mp-mute');
    volumeSliderEl = playerEl.querySelector('.psu-mp-volume');
    progressEl = playerEl.querySelector('.psu-mp-bar');
    timeEl = playerEl.querySelector('.psu-mp-time');
    playlistEl = playerEl.querySelector('.psu-mp-playlist');

    PLAYLIST.forEach(function(t, i) {
      var item = document.createElement('div');
      item.className = 'psu-mp-pl-item';
      item.innerHTML = '<span class="psu-mp-pl-idx">' + (i + 1) + '</span><span>' + t.name + '</span>';
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        loadTrack(i);
        audio.play().catch(function(){});
        state.playing = true;
        playlistEl.classList.remove('show');
        broadcast({ type: 'state', origin: window.location.href, playing: true, trackIdx: i });
        saveState();
        updateUI();
      });
      playlistEl.appendChild(item);
    });

    playBtnEl.addEventListener('click', function(e) { e.stopPropagation(); togglePlay(); });
    prevBtnEl.addEventListener('click', function(e) { e.stopPropagation(); prevTrack(); });
    nextBtnEl.addEventListener('click', function(e) { e.stopPropagation(); nextTrack(); });
    muteBtnEl.addEventListener('click', function(e) { e.stopPropagation(); toggleMute(); });
    volumeSliderEl.addEventListener('input', function() { setVolume(this.value / 100); });

    progressEl.addEventListener('click', function(e) {
      e.stopPropagation();
      var rect = progressEl.getBoundingClientRect();
      var ratio = (e.clientX - rect.left) / rect.width;
      seekTo(Math.max(0, Math.min(1, ratio)));
    });

    trackNameEl.addEventListener('dblclick', function(e) {
      e.stopPropagation();
      playlistEl.classList.toggle('show');
    });

    document.addEventListener('click', function(e) {
      if (!playerEl.contains(e.target)) {
        playlistEl.classList.remove('show');
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space' && e.shiftKey) { e.preventDefault(); togglePlay(); }
      if (e.code === 'ArrowRight' && e.shiftKey) { nextTrack(); }
      if (e.code === 'ArrowLeft' && e.shiftKey) { prevTrack(); }
    });

    updateUI();
  }

  function formatTime(sec) {
    if (!sec || isNaN(sec)) return '0:00';
    var m = Math.floor(sec / 60);
    var s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function updateTimeDisplay() {
    if (timeEl) {
      timeEl.textContent = formatTime(state.elapsed) + ' / ' + formatTime(state.duration);
    }
    var pct = state.duration > 0 ? (state.elapsed / state.duration * 100) : 0;
    var fill = playerEl ? playerEl.querySelector('.psu-mp-fill') : null;
    if (fill) fill.style.width = pct + '%';
  }

  function updateUI() {
    if (!playerEl) return;
    if (trackNameEl) {
      trackNameEl.textContent = PLAYLIST[state.trackIdx].name;
      trackNameEl.title = '双击展开播放列表';
    }
    if (playBtnEl) {
      playBtnEl.innerHTML = state.playing ? '&#10074;&#10074;' : '&#9654;';
    }
    if (volumeSliderEl) {
      volumeSliderEl.value = Math.round(state.volume * 100);
    }
    if (muteBtnEl) {
      muteBtnEl.innerHTML = state.muted ? '&#9834;' : '&#9835;';
      muteBtnEl.style.opacity = state.muted ? '0.4' : '1';
    }
    var items = playlistEl.querySelectorAll('.psu-mp-pl-item');
    items.forEach(function(item, i) {
      item.classList.toggle('active', i === state.trackIdx);
    });
    updateTimeDisplay();
  }

  // --- Public API ---
  window.PSUMusic = {
    init: function() {
      if (state.initialized) return;
      state.initialized = true;
      var restored = loadState();
      buildPlayer();
      loadTrack(state.trackIdx, restored.elapsed);
      // Auto-resume playback from previous page (errors handled by error listener)
      if (restored.wasPlaying) {
        audio.play().then(function() {
          state.playing = true;
          broadcast({ type: 'state', origin: window.location.href, playing: true, trackIdx: state.trackIdx });
          updateUI();
        }).catch(function() {
          // play() failed — error listener will handle track skipping
          state.playing = false;
          updateUI();
        });
      }
    },
    togglePlay: togglePlay,
    next: nextTrack,
    prev: prevTrack
  };

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.PSUMusic.init);
  } else {
    window.PSUMusic.init();
  }

})();
