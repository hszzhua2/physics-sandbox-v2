---
id: 20260714-080
type: theory
branch: 狭义相对论
tags:
  - 相对论
  - 坐标变换
  - 洛伦兹群
  - 狭义相对论
creator: "[[亨德里克·洛伦兹]]"
prerequisites:
  - "[[光速不变原理]]"
  - "[[伽利略变换]]"
  - "[[麦克斯韦方程组_Maxwell's Equations]]"
status: unverified
---

# 洛伦兹变换 (Lorentz Transformation)

## 1. 核心定义

洛伦兹变换是保持[[光速不变原理|光速不变]]的惯性参考系之间的线性坐标变换，构成洛伦兹群，是[[狭义相对论_Special Relativity]]的数学基础。

## 2. 数学表达

设惯性系 $S'$ 相对惯性系 $S$ 沿 $x$ 轴以速度 $v$ 运动，两参考系在 $t=t'=0$ 时原点重合，则洛伦兹变换为：

$$
t' = \gamma\left(t - \frac{vx}{c^2}\right), \quad x' = \gamma(x - vt), \quad y' = y, \quad z' = z
$$

其中**洛伦兹因子**为：

$$
\gamma = \frac{1}{\sqrt{1 - \dfrac{v^2}{c^2}}}
$$

**参数说明：**
- $c$：真空光速，$c \approx 2.998 \times 10^8 \, \text{m/s}$
- $v$：两惯性系之间的相对速度
- $\gamma$：洛伦兹因子，当 $v \to c$ 时 $\gamma \to \infty$
- $(t, x, y, z)$ 与 $(t', x', y', z')$：分别为 $S$ 系与 $S'$ 系的时空坐标

**逆变换**为（将 $v \to -v$）：

$$
t = \gamma\left(t' + \frac{vx'}{c^2}\right), \quad x = \gamma(x' + vt')
$$

**速度合成公式**（沿 $x$ 方向）：

$$
u' = \frac{u - v}{1 - \dfrac{uv}{c^2}}
$$

当 $u = c$ 时，$u' = c$，光速在所有惯性系中不变。

**长度收缩**（沿运动方向）：

$$
L = L_0 \sqrt{1 - \frac{v^2}{c^2}} = \frac{L_0}{\gamma}
$$

其中 $L_0$ 为固有长度（静止长度）。

**时间膨胀**：

$$
\Delta t = \gamma \, \Delta \tau
$$

其中 $\Delta \tau$ 为固有时（静止时钟测得的时间间隔）。

## 3. 物理学意义与推论

### 3.1 同时性的相对性

在 $S$ 系中同时（$\Delta t = 0$）但不同地（$\Delta x \neq 0$）发生的两个事件，在 $S'$ 系中不再同时：

$$
\Delta t' = \gamma\left(\Delta t - \frac{v\,\Delta x}{c^2}\right) = -\frac{\gamma v\,\Delta x}{c^2} \neq 0
$$

这一推论彻底颠覆了[[伽利略变换]]中绝对时间的概念。

### 3.2 因果性的保持

洛伦兹变换保证了因果关系的传递速度不超过光速。对于类时分离的事件（$\Delta s^2 = c^2\Delta t^2 - \Delta x^2 > 0$），在所有惯性系中时间顺序不变。

### 3.3 四维矢量与[[闵可夫斯基时空_Minkowski Spacetime]]

将洛伦兹变换写成矩阵形式：

$$
\begin{pmatrix} ct' \\ x' \\ y' \\ z' \end{pmatrix} =
\begin{pmatrix}
\gamma & -\gamma\beta & 0 & 0 \\
-\gamma\beta & \gamma & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix} ct \\ x \\ y \\ z \end{pmatrix}
$$

其中 $\beta = v/c$。该变换保持**时空间隔**不变：

$$
ds^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2 = \text{不变量}
$$

这正是[[闵可夫斯基时空_Minkowski Spacetime]]中的赝正交变换。洛伦兹变换与空间旋转共同构成**洛伦兹群** $O(1,3)$，其限制子群 $SO^+(1,3)$ 是[[狭义相对论_Special Relativity]]的基本对称群。

### 3.4 极限情形

当 $v \ll c$（即 $\gamma \to 1$）时，洛伦兹变换退化为[[伽利略变换]]：

$$
t' \approx t, \quad x' \approx x - vt
$$

这保证了洛伦兹变换在低速极限下与[[牛顿力学]]一致。

## 4. 相关验证实验

- **[[迈克尔逊-莫雷实验_Michelson-Morley Experiment]]（1887）**：通过干涉仪探测以太漂移的零结果，间接支持了光速不变假设，为洛伦兹变换提供了实验动机。
- ** Kennedy-Thorndike 实验（1932）**：验证了时间膨胀效应在不同惯性系中的普适性。
- **μ子寿命实验**：宇宙线μ子的衰变寿命延长现象直接验证了时间膨胀公式 $\Delta t = \gamma\Delta\tau$。
- **Hafele-Keating 原子钟实验（1971）**：将铯原子钟放置于飞机上绕地球飞行，实测时间差与洛伦兹变换预测一致。
- **粒子加速器实验**：在大型强子对撞机（LHC）等设施中，粒子被加速至 $\gamma \sim 10^4$ 量级，其动力学行为完全遵循洛伦兹变换。

## 5. 历史上下文

洛伦兹变换最初由[[亨德里克·洛伦兹]]在1892年至1904年间提出，其目的是为了解释[[迈克尔逊-莫雷实验_Michelson-Morley Experiment]]的零结果。洛伦兹引入了"局部时间"的概念和长度收缩假说（当时称为"洛伦兹-菲茨杰拉德收缩"），试图在以太框架内协调[[麦克斯韦方程组_Maxwell's Equations]]与运动参考系。

1905年，[[亨利·庞加莱]]（Henri Poincaré）证明了洛伦兹变换构成一个群，并首次将其命名为"洛伦兹变换"。庞加莱还认识到该变换代表四维时空中的旋转。

同年，[[阿尔伯特·爱因斯坦]]在论文《论动体的电动力学》中，从[[光速不变原理]]和[[相对性原理]]两条基本假设出发，独立推导出完整的洛伦兹变换，赋予了其全新的物理诠释——不再依赖以太假说，而是时空本身的性质。这一诠释奠定了[[狭义相对论_Special Relativity]]的基础。1907年，[[赫尔曼·闵可夫斯基]]（Hermann Minkowski）进一步将其几何化为四维时空的对称性，即[[闵可夫斯基时空_Minkowski Spacetime]]。
