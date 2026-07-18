---
id: 20260714-039
type: theory
branch: 经典力学/刚体动力学
tags:
  - 刚体动力学
  - 欧拉方程
  - 转动惯量
  - 进动
creator: "[[莱昂哈德·欧拉]]"
prerequisites:
  - "[[角动量]]"
  - "[[转动惯量张量]]"
  - "[[牛顿运动定律_Newton's Laws of Motion]]"
status: unverified
---

# 欧拉动力学方程 (Euler's Equations of Motion)

## 1. 核心定义

描述刚体在不受约束时绕定点转动的动力学方程组，在随刚体固连的本体坐标系中表述角动量变化率与外力矩的关系，是刚体动力学的核心。

## 2. 数学表达

### 欧拉动力学方程

在本体主轴坐标系（主转动惯量 $I_1, I_2, I_3$）中，角速度分量 $\omega_1, \omega_2, \omega_3$ 满足：

$$I_1\dot{\omega}_1 - (I_2 - I_3)\omega_2\omega_3 = M_1$$

$$I_2\dot{\omega}_2 - (I_3 - I_1)\omega_3\omega_1 = M_2$$

$$I_3\dot{\omega}_3 - (I_1 - I_2)\omega_1\omega_2 = M_3$$

其中 $M_1, M_2, M_3$ 为外力矩在本体坐标系中的分量。

### 角动量与转动惯量张量

角动量：

$$\vec{L} = \mathbf{I}\vec{\omega}$$

在主轴系中：

$$\vec{L} = (I_1\omega_1, \, I_2\omega_2, \, I_3\omega_3)$$

### 转动动能

$$T_{\text{rot}} = \frac{1}{2}\vec{\omega}\cdot\vec{L} = \frac{1}{2}(I_1\omega_1^2 + I_2\omega_2^2 + I_3\omega_3^2)$$

### 欧拉角

采用 $z$-$x'$-$z''$ 约定（3-1-3），用进动角 $\phi$、章动角 $\theta$、自转角 $\psi$ 描述刚体方位：

$$\vec{\omega} = \dot{\phi}\hat{z} + \dot{\theta}\hat{x'} + \dot{\psi}\hat{z''}$$

本体坐标系中角速度分量：

$$\begin{cases}
\omega_1 = \dot{\phi}\sin\theta\sin\psi + \dot{\theta}\cos\psi \\
\omega_2 = \dot{\phi}\sin\theta\cos\psi - \dot{\theta}\sin\psi \\
\omega_3 = \dot{\phi}\cos\theta + \dot{\psi}
\end{cases}$$

**参数说明**：
- $I_1, I_2, I_3$：主转动惯量（kg·m²）
- $\omega_1, \omega_2, \omega_3$：本体坐标系下角速度分量（rad/s）
- $M_1, M_2, M_3$：外力矩分量（N·m）
- $\phi, \theta, \psi$：欧拉角（rad）

## 3. 物理学意义与推论

欧拉动力学方程的核心在于本体坐标系是非惯性（旋转）坐标系，角动量变化率需附加 $\vec{\omega}\times\vec{L}$ 项：

$$\left(\frac{d\vec{L}}{dt}\right)_{\text{惯性系}} = \left(\frac{d\vec{L}}{dt}\right)_{\text{本体系}} + \vec{\omega}\times\vec{L} = \vec{M}$$

这一几何结构正是欧拉方程中非线性耦合项的来源。

**自由刚体的稳定性判据**：当 $M_i = 0$，绕最大或最小主惯量轴的匀角速度转动稳定，绕中间惯量轴（$I_{\text{中间}}$）的转动不稳定——即"网球拍定理"（Dzhanibekov效应）。

**自由刚体进动**：对称陀螺（$I_1 = I_2 \neq I_3$）自由转动时，本体坐标系中 $\omega_3$ 守恒，$\omega_1, \omega_2$ 以频率 $\Omega = \frac{I_3 - I_1}{I_1}\omega_3$ 进动。

**重陀螺（拉格朗日陀螺）**：受重力矩的对称陀螺展示章动与进动，可用[[拉格朗日力学_Lagrangian Mechanics]]求解。

**适用边界**：
- 要求刚体假设（无形变），实际物体总有弹性形变。
- 经典适用：宏观、低速；高速转动需考虑相对论修正。
- 欧拉角在 $\theta = 0$ 或 $\pi$ 时存在奇异性（万向节锁），需用四元数或凯莱-克莱因参数替代。
- 含能量耗散（如内部摩擦）的准刚体会趋向绕最大惯量轴转动，[[探险者1号]]卫星的翻滚现象即此效应的实例。

## 4. 相关验证实验

- [[网球拍定理实验_Tennis Racket Theorem Experiment]]：验证中间轴转动的不稳定性（Dzhanibekov效应）。
- [[陀螺仪进动实验_Gyroscope Precession Experiment]]：验证重陀螺进动频率。
- [[刚体定点转动实验_Rigid Body Rotation Experiment]]：验证欧拉方程的解析解。
- [[探险者1号卫星翻滚事件_Explorer 1 Tumble Event]]：能量耗散导致卫星趋向最大惯量轴转动的经典案例。
- 现代MEMS陀螺仪与光纤陀螺仪的设计以欧拉刚体动力学为基础。

## 5. 历史上下文

1765年，[[莱昂哈德·欧拉]]在《刚体运动论》（*Theoria motus corporum solidorum seu rigidorum*）中系统建立了刚体动力学，引入欧拉角与本体坐标系，推导出欧拉动力学方程，填补了[[牛顿运动定律_Newton's Laws of Motion]]对转动描述的空白。

19世纪，[[约瑟夫·拉格朗日]]与[[卡尔·雅可比]]进一步发展了重陀螺的解析解。[[索菲娅·科瓦列夫斯卡娅]]1888年发现第三个可积情形（科瓦列夫斯卡娅陀螺），与欧拉-泊松陀螺、拉格朗日陀螺并列三大经典可积刚体问题。20世纪，刚体动力学广泛应用于航天器姿态控制、陀螺导航与地球自转（[[钱德勒摆动]]）研究。Dzhanibekov效应在1985年由苏联宇航员[[弗拉基米尔·贾尼别科夫]]在太空实验中直观观测，引发了对自由刚体不稳定性的广泛重新关注。
