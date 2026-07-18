---
id: 20260714-033
type: theory
branch: 经典力学/分析力学
tags:
  - 分析力学
  - 哈密顿量
  - 相空间
  - 正则变换
creator: "[[威廉·哈密顿]]"
prerequisites:
  - "[[拉格朗日力学_Lagrangian Mechanics]]"
  - "[[勒让德变换]]"
  - "[[相空间]]"
status: unverified
---

# 哈密顿力学 (Hamiltonian Mechanics)

## 1. 核心定义

以哈密顿量 $H$ 与正则变量（广义坐标与广义动量）为基础的分析力学体系，将运动方程表述为相空间中的一阶偏微分方程组，是通往统计力学与量子力学的桥梁。

## 2. 数学表达

### 勒让德变换与哈密顿量

由拉格朗日量经[[勒让德变换]]得到哈密顿量：

$$H(q, p, t) = \sum_{i=1}^{n} p_i \dot{q}_i - L(q, \dot{q}, t)$$

其中广义动量 $p_i = \frac{\partial L}{\partial \dot{q}_i}$，且需将 $\dot{q}$ 表示为 $(q, p, t)$ 的函数。

对于保守系统，$H$ 等于总机械能：

$$H = T + V$$

### 哈密顿正则方程

$$\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}, \quad \frac{\partial H}{\partial t} = -\frac{dH}{dt}\bigg|_{\text{显式}}$$

对于 $n$ 个自由度，给出 $2n$ 个一阶常微分方程。

### 泊松括号

对任意两个力学量 $A, B$：

$$\{A, B\} = \sum_{i=1}^{n}\left(\frac{\partial A}{\partial q_i}\frac{\partial B}{\partial p_i} - \frac{\partial A}{\partial p_i}\frac{\partial B}{\partial q_i}\right)$$

重要性质：
$$\{q_i, p_j\} = \delta_{ij}, \quad \{q_i, q_j\} = \{p_i, p_j\} = 0$$

力学量时间演化：
$$\frac{dA}{dt} = \{A, H\} + \frac{\partial A}{\partial t}$$

### 刘维尔定理

相空间中代表点的密度在哈密顿流下守恒：

$$\frac{d\rho}{dt} = \frac{\partial \rho}{\partial t} + \{\rho, H\} = 0$$

等价表述为相体积不变：

$$\oint_{\Gamma} \prod_{i=1}^{n} dq_i \, dp_i = \text{const}$$

### 正则变换

保持正则方程形式不变的变量变换 $(q, p) \to (Q, P)$，可通过生成函数 $F$ 实现：

$$p_i = \frac{\partial F}{\partial q_i}, \quad P_i = -\frac{\partial F}{\partial Q_i}, \quad K = H + \frac{\partial F}{\partial t}$$

**参数说明**：
- $H$：哈密顿量（J）
- $q_i, p_i$：正则坐标与正则动量
- $\{A, B\}$：泊松括号
- $\rho$：相空间概率密度
- $K$：新哈密顿量

## 3. 物理学意义与推论

哈密顿力学将二阶的拉格朗日方程拆解为对称的一阶方程组，揭示了坐标与动量的对偶结构。这一结构在以下方面具有深远意义：

**对称性与泊松括号**：泊松括号编码了力学量的代数结构，是经典力学对应量子力学对易子的核心桥梁（$[\hat{A}, \hat{B}] = i\hbar\widehat{\{A,B\}}$）。

**统计力学基础**：[[刘维尔定理]]保证相空间密度守恒，为[[统计力学]]的系综理论提供了根本依据。

**作用量-角变量**：对于可积系统，可通过正则变换引入作用量-角变量 $(J, \theta)$，使 $H$ 仅依赖于 $J$，是研究周期运动与摄动理论的有力工具。

**适用边界**：
- 与[[拉格朗日力学_Lagrangian Mechanics]]、[[牛顿运动定律_Newton's Laws of Motion]]经典范围内完全等价。
- 哈密顿形式可直接量子化为[[量子力学]]的正则量子化程序。
- 对于含耗散的开放系统，哈密顿结构被破坏，需推广为非厄米或主方程形式。
- 正则变换要求变换为辛结构保持的，不可随意选取。

## 4. 相关验证实验

- [[谐振子相空间实验_Harmonic Oscillator Phase Space Experiment]]：验证椭圆相轨迹与刘维尔定理。
- [[双摆实验_Double Pendulum Experiment]]：相空间中展示混沌行为的经典系统。
- [[扭摆实验_Torsion Pendulum Experiment]]：验证周期运动与正则变量描述。
- 现代冷原子实验可实现对相空间分布的直接成像，验证刘维尔定理在量子相空间中的对应（Wigner函数）。

## 5. 历史上下文

1834—1835年，[[威廉·哈密顿]]发表两篇论文，将力学重新表述为"主函数"与正则方程体系，统一了几何光学中的[[费马原理_Fermat's Principle]]与力学中的[[最小作用量原理_Principle of Least Action]]。哈密顿最初受光学-力学类比的启发，试图建立统一的"波动力学"图景。

19世纪中叶，[[卡尔·雅可比]]进一步发展了哈密顿-雅可比理论，为求解力学问题提供了强大的偏微分方程方法。泊松括号与刘维尔定理的引入使哈密顿力学成为[[统计力学]]的天然语言。20世纪初，[[保罗·狄拉克]]与[[维尔纳·海森堡]]发现量子对易子与经典泊松括号的对应关系，使哈密顿力学成为[[量子力学]]正则量子化的直接前驱。
