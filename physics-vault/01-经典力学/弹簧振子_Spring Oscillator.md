---
id: 20260714-003
type: experiment
branch: 经典力学
tags:
  - physics/experiment
  - physics/classical-mechanics
  - physics/oscillation
date_conducted: 1676
experimenter: [[罗伯特·胡克]]
target_theory: [[胡克定律]]
status: unverified
---

# 弹簧振子 (Spring Oscillator)

## 1. 实验目的与背景

弹簧振子是经典力学中最基本的振动系统，由一端固定、另一端连接质量的弹簧构成。[[罗伯特·胡克]]于1676年首次发表了弹性定律（"ceiiinosssttuv"——拉丁文变位谜语 "ut tensio sic vis"，意为"伸长量与力成正比"），后于1678年正式阐述。这一发现奠定了[[胡克定律]]的基础，使弹簧振子成为验证弹性回复力、简谐运动和能量守恒等核心力学原理的经典实验系统。

弹簧振子的研究不仅是理解周期运动的起点，更是后续分析复杂振动系统（如[[克拉尼图形_Chladni Patterns]]中的板振动、[[利萨茹曲线_Lissajous Curve]]中的二维振动合成）的基础。从弹簧振子出发，可以自然地推广到阻尼振动、受迫振动和共振现象，构成振动理论的完整框架。

## 2. 实验装置与运行机制

### 2.1 装置结构

弹簧振子由以下要素构成：

- **弹簧**：轻质弹簧，劲度系数为 $k$（单位 $\text{N/m}$），满足[[胡克定律]]。
- **振子（质量块）**：质量为 $m$，可沿竖直或水平方向运动。
- **平衡位置**：弹簧自然长度对应的位置（竖直悬挂时需考虑重力平衡）。
- **阻尼介质**（可选）：空气或液体，提供黏性阻尼。
- **外部驱动力**（可选）：施加周期性外力 $F(t) = F_0 \cos(\omega_d t)$。

### 2.2 运行机制

当质量块从平衡位置位移 $x$ 时，弹簧产生线性回复力 $F = -kx$。该力始终指向平衡位置，使振子往复运动。根据[[牛顿第二定律]]：

$$m\ddot{x} = -kx$$

这是简谐运动的基本微分方程。在无阻尼、无外力的理想条件下，系统做简谐振动，位移随时间呈正弦（或余弦）规律变化。

## 3. 观测数据与数学模型

### 3.1 简谐运动方程

无阻尼自由振动方程为：

$$m\ddot{x} + kx = 0$$

定义固有角频率 $\omega_0$：

$$\omega_0 = \sqrt{\frac{k}{m}}$$

方程的通解为：

$$x(t) = A \cos(\omega_0 t) + B \sin(\omega_0 t) = C \cos(\omega_0 t + \varphi)$$

其中振幅 $C = \sqrt{A^2 + B^2}$，初相位 $\varphi = -\arctan(B/A)$，由初始条件 $(x_0, v_0)$ 决定。

振动周期 $T$ 和频率 $f$ 为：

$$T = \frac{2\pi}{\omega_0} = 2\pi\sqrt{\frac{m}{k}}, \quad f = \frac{1}{T} = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$$

### 3.2 能量守恒

弹簧振子系统机械能守恒。动能 $K$ 和弹性势能 $U$ 分别为：

$$K = \frac{1}{2}m\dot{x}^2 = \frac{1}{2}m\omega_0^2 C^2 \sin^2(\omega_0 t + \varphi)$$

$$U = \frac{1}{2}kx^2 = \frac{1}{2}kC^2 \cos^2(\omega_0 t + \varphi)$$

总机械能为常量：

$$E = K + U = \frac{1}{2}kC^2 = \frac{1}{2}m\omega_0^2 C^2$$

动能与势能在振动过程中周期性交换，但总能量保持不变，验证了[[能量守恒定律]]。

### 3.3 阻尼振动

当存在与速度成正比的黏性阻尼力 $F_d = -c\dot{x}$（$c$ 为阻尼系数），运动方程变为：

$$m\ddot{x} + c\dot{x} + kx = 0$$

定义阻尼比 $\zeta$ 和阻尼固有频率 $\omega_d$：

$$\zeta = \frac{c}{2\sqrt{mk}} = \frac{c}{2m\omega_0}$$

根据 $\zeta$ 的大小，系统呈现三种运动形态：

| 阻尼比 | 运动类型 | 位移解 |
|--------|---------|--------|
| $\zeta < 1$ | 欠阻尼（衰减振荡） | $x(t) = C e^{-\zeta\omega_0 t} \cos(\omega_d t + \varphi)$，其中 $\omega_d = \omega_0\sqrt{1-\zeta^2}$ |
| $\zeta = 1$ | 临界阻尼（最快回到平衡，无振荡） | $x(t) = (A + Bt)e^{-\omega_0 t}$ |
| $\zeta > 1$ | 过阻尼（缓慢回到平衡，无振荡） | $x(t) = A e^{(-\zeta + \sqrt{\zeta^2-1})\omega_0 t} + B e^{(-\zeta - \sqrt{\zeta^2-1})\omega_0 t}$ |

### 3.4 受迫振动与共振

当施加周期性外力 $F(t) = F_0 \cos(\omega_d t)$ 时，运动方程为：

$$m\ddot{x} + c\dot{x} + kx = F_0 \cos(\omega_d t)$$

稳态解为：

$$x(t) = X \cos(\omega_d t - \delta)$$

稳态振幅 $X$ 和相位差 $\delta$ 为：

$$X = \frac{F_0}{\sqrt{(k - m\omega_d^2)^2 + (c\omega_d)^2}} = \frac{F_0/m}{\sqrt{(\omega_0^2 - \omega_d^2)^2 + (2\zeta\omega_0\omega_d)^2}}$$

$$\tan\delta = \frac{c\omega_d}{k - m\omega_d^2} = \frac{2\zeta\omega_0\omega_d}{\omega_0^2 - \omega_d^2}$$

当驱动频率接近固有频率（$\omega_d \approx \omega_0$）且阻尼较小时，振幅急剧增大——此即**共振**现象。共振振幅为：

$$X_{\max} = \frac{F_0}{c\omega_0\sqrt{1 - \zeta^2}} \approx \frac{F_0}{c\omega_0} \quad (\zeta \ll 1)$$

### 3.5 品质因数

品质因数 $Q$ 衡量共振峰的锐利程度：

$$Q = \frac{1}{2\zeta} = \frac{\omega_0}{\Delta\omega}$$

其中 $\Delta\omega$ 为共振峰半高全宽（FWHM）。$Q$ 值越大，共振越尖锐，系统保持振动的能力越强。

## 4. 实验结论与影响

### 4.1 核心结论

1. **胡克定律在弹性限度内精确成立**：在弹性变形范围内，回复力 $F = -kx$ 与位移严格线性，简谐运动方程的解与实验数据高度吻合。
2. **能量守恒是振动系统的普适规律**：在无阻尼条件下，动能与势能周期性交换但总能量守恒；阻尼条件下机械能耗散为热能。
3. **共振是受迫振动的核心现象**：当驱动频率等于固有频率时，微小驱动力可产生巨大振幅，这一原理在建筑抗震、声学设计和精密仪器隔振中具有关键工程意义。

### 4.2 科学影响

弹簧振子作为最基本的振动模型，其理论框架被推广到众多领域。在电路学中，LC振荡电路的方程与弹簧振子完全同构（$L \leftrightarrow m$，$C \leftrightarrow 1/k$）；在量子力学中，[[量子谐振子]]是最早被精确求解的量子系统之一。弹簧振子的简谐振动也是[[利萨茹曲线_Lissajous Curve]]的理论基础——两个正交方向的简谐振动合成产生丰富的几何图形。此外，弹簧振子的非线性和耦合推广直接关联到[[混沌双摆_Chaotic Double Pendulum]]所代表的复杂动力学系统，展示了从简谐到混沌的完整力学谱系。
