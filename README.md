# 砰！粒子！ — 交互式物理与数学实验平台


## 在线体验

访问 [https://hszzhua2.github.io/physics-sandbox/](https://hszzhua2.github.io/physics-sandbox/)

## 实验列表

| 实验 | 主题 | 核心概念 |
|------|------|----------|
| 泰勒-库埃特流 | 流体力学 | 层流与湍流转换 |
| 高尔顿钉板 | 大数定律 | 中心极限定理可视化 |
| 利萨茹曲线 | 简谐共振 | 频率比与相位差 |
| 克拉尼图形 | 声学驻波 | 二维振动模态 |
| 混沌N阶摆 | 蝴蝶效应 | 初始条件敏感性 |
| 刚体沙盒 | 链式反应 | 动量守恒与碰撞 |
| 双缝干涉 | 量子物理 | 波粒二象性 |
| 一维势阱 | 量子力学 | 薛定谔方程 |
| 万有引力(3D) | 三体问题 | N体引力模拟 |
| 洛伦兹吸引子(3D) | 混沌理论 | 蝴蝶效应三维可视化 |
| 多普勒效应 | 波动声学 | 波源运动致频率偏移、激波与马赫锥 |
| 抛体运动 | 经典力学 | 斜抛轨迹、速度分解与射程计算 |
| 斜面滑块 | 经典力学 | 斜面受力分析、摩擦力与临界角 |
| 弹性碰撞 | 动量守恒 | 动量与能量守恒、恢复系数 |
| 磁场圆周运动 | 电磁学 | 洛伦兹力、回旋半径与周期 |
| 电场偏转 | 电磁学 | 带电粒子在电场中的类平抛运动 |
| 自由物理画布 | 综合实验 | 交互式物理沙盒、碰撞与重力模拟 |

## 主题风格

- **学术**（默认）：Wolfram 式极简设计，浅色背景，低饱和度配色
- **卡通**：明亮活泼的配色，粗边框，适合演示
- **液态玻璃**：深色背景 + 毛玻璃面板，现代感
- **赛博**：紫色霓虹背景，发光效果，科幻感
- **苏维埃**：红色硬核工业风，复古铆钉美学

## 技术栈

- 纯 HTML5 / CSS3 / JavaScript（零构建步骤）
- Canvas 2D 渲染（首页气泡、混沌摆、势阱等）
- Three.js（3D 万有引力、洛伦兹吸引子）
- Velocity Verlet 数值积分（物理模拟）

## 本地运行

无需任何构建工具，直接在浏览器中打开 `index.html` 即可。

```bash
# 或者用任意静态服务器
npx serve .
```

## 部署到 GitHub Pages

### 方法一：GitHub Actions 自动部署（推荐）

1. 在 GitHub 创建新仓库，命名为 `physics-sandbox`
2. 将本仓库代码推送到 GitHub
3. 进入仓库 Settings -> Pages -> Source，选择 "GitHub Actions"
4. 访问 `https://你的用户名.github.io/physics-sandbox/`

### 方法二：手动部署到 gh-pages 分支

```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/你的用户名/physics-sandbox.git
git push -u origin main

# 启用 GitHub Pages
# Settings -> Pages -> Source -> Deploy from a branch -> main -> / (root)
```

## 项目结构

```
.
├── index.html              # 首页（气泡导航）
├── shared-theme.css        # 5套主题系统
├── shared-theme.js         # 主题切换与持久化
├── exp-*.html              # 44个实验子页面
└── .github/workflows/      # GitHub Actions 自动部署
```

## 开源协议

MIT
