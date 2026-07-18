---
id: 20260714-032
type: theory
branch: 经典力学/分析力学
tags:
  - 分析力学
  - 拉格朗日量
  - 广义坐标
  - 变分法
creator: "[[约瑟夫·拉格朗日]]"
prerequisites:
  - "[[牛顿运动定律_Newton's Laws of Motion]]"
  - "[[广义坐标]]"
  - "[[变分法]]"
status: unverified
---

# 拉格朗日力学 (Lagrangian Mechanics)

## 1. 核心定义

以拉格朗日量 $L=T-V$ 和最小作用量原理为基础的力学体系，通过广义坐标描述受约束系统的运动，与[[牛顿运动定律_Newton's Laws of Motion]]等价但更具普适性。

## 2. 数学表达

### 拉格朗日量

对于保守系统，拉格朗日量定义为动能 $T$ 与势能 $V$ 之差：

$$L(q, \dot{q}, t) = T(\dot{q}) - V(q, t)$$

其中 $q = (q_1, q_2, \ldots, q_n)$ 为广义坐标，$\dot{q}$ 为广义速度，$n$ 为自由度数。

### 欧拉-拉格朗日方程

由[[最小作用量原理_Principle of Least Action]] $\delta S = 0$ 导出：

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = 0, \quad i = 1, 2, \ldots, n$$

### 广义动量

$$p_i = \frac{\partial L}{\partial \dot{q}_i}$$

### 非保守力与约束

对于存在非保守广义力 $Q_i$ 的系统，方程修正为：

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = Q_i$$

对于完整约束 $f(q, t) = 0$，可引入拉格朗日乘子 $\lambda$ 处理：

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = \lambda \frac{\partial f}{\partial q_i}$$

**参数说明**：
- $L$：拉格朗日量（J）
- $q_i$：第 $i$ 个广义坐标
- $\dot{q}_i$：第 $i$ 个广义速度
- $p_i$：第 $i$ 个广义动量
- $Q_i$：非保守广义力
- $\lambda$：拉格朗日乘子

## 3. 物理学意义与推论

拉格朗日力学的核心优势在于其坐标无关性——拉格朗日方程在任意广义坐标变换下保持形式不变。这使其特别适合处理含约束的复杂系统，因为约束力可通过选择合适的广义坐标自动消去，无需显式求解约束力。

**守恒量与对称性**：根据诺特定理，拉格朗日量的连续对称性对应守恒定律：
- 时间平移不变性 $\Rightarrow$ 能量守恒
- 空间平移不变性 $\Rightarrow$ 动量守恒
- 空间旋转不变性 $\Rightarrow$ [[角动量]]守恒

**适用边界**：
- 拉格朗日形式是牛顿力学的重新表述，经典适用范围一致（宏观、低速）。
- 但拉格朗日方法可自然推广至[[狭义相对论]]、[[广义相对论]]与[[量子场论]]，其中拉格朗日密度 $\mathcal{L}$ 取代了 $L$。
- 对于耗散系统（如摩擦力），标准拉格朗日形式需引入耗散函数或非保守广义力修正。
- 对非完整约束系统，欧拉-拉格朗日方程需谨慎处理。

## 4. 相关验证实验

- [[双摆实验_Double Pendulum Experiment]]：拉格朗日方程求解多自由度耦合系统的经典范例。
- [[斜面加速度实验_Inclined Plane Experiment]]：用广义坐标选取处理约束的典型演示。
- [[刚体定点转动实验_Rigid Body Rotation Experiment]]：用拉格朗日方法处理刚体动力学。
- 在经典力学课程中，阿特伍德机、弹簧振子耦合等实验均可通过拉格朗日方程精确求解并与实验对照。

## 5. 历史上下文

1788年，[[约瑟夫·拉格朗日]]出版《分析力学》（*Mécanique analytique*），开创了不含任何几何图示、纯粹以代数与分析方法表述力学的体系。拉格朗日继承了[[皮埃尔·莫佩尔蒂]]的[[最小作用量原理_Principle of Least Action]]思想与[[莱昂哈德·欧拉]]的变分方法，将力学问题统一化为求解微分方程。

拉格朗日力学的建立为[[哈密顿力学_Hamiltonian Mechanics]]的发展铺平了道路，并为19世纪末至20世纪的理论物理（特别是[[量子力学]]路径积分表述与[[量子场论]]）提供了核心数学语言。诺特定理将对称性与守恒律的深刻联系由[[埃米·诺特]]在1918年证明，进一步提升了拉格朗日框架的理论地位。
