---
id: 20260714-044
type: theory
branch: 数学/张量分析
tags:
  - 张量
  - 协变微商
  - 度规张量
  - 微分几何
creator: "[[格雷戈里奥·里奇-库尔巴斯特罗]]"
prerequisites:
  - "[[线性代数]]"
  - "[[微分几何_Differential Geometry]]"
  - "[[矢量分析]]"
status: unverified
---

# 张量分析 (Tensor Analysis)

## 1. 核心定义

研究在坐标变换下按特定规则变换的多线性映射（张量）的代数与微积分运算的数学分支，是表达物理定律坐标无关性的核心工具。

## 2. 数学表达

### 张量的定义

$(r, s)$ 阶张量（$r$ 阶逆变、$s$ 阶协变）是多重线性映射：

$$T: \underbrace{V^* \times \cdots \times V^*}_{r} \times \underbrace{V \times \cdots \times V}_{s} \to \mathbb{R}$$

在基 $\{e_i\}$ 下分量 $T^{i_1\ldots i_r}{}_{j_1\ldots j_s}$。

### 坐标变换规则

在坐标变换 $x^{\mu'} = x^{\mu'}(x^\nu)$ 下：

$$T^{\mu'_1\ldots\mu'_r}{}_{\nu'_1\ldots\nu'_s} = \frac{\partial x^{\mu'_1}}{\partial x^{\alpha_1}}\cdots\frac{\partial x^{\mu'_r}}{\partial x^{\alpha_r}} \frac{\partial x^{\beta_1}}{\partial x^{\nu'_1}}\cdots\frac{\partial x^{\beta_s}}{\partial x^{\nu'_s}} T^{\alpha_1\ldots\alpha_r}{}_{\beta_1\ldots\beta_s}$$

### 度规张量

$$ds^2 = g_{\mu\nu} dx^\mu dx^\nu$$

度规的逆 $g^{\mu\nu}$ 满足 $g^{\mu\alpha}g_{\alpha\nu} = \delta^\mu_\nu$。指标的升降：

$$V^\mu = g^{\mu\nu}V_\nu, \quad V_\mu = g_{\mu\nu}V^\nu$$

### 协变微商

$$\nabla_\lambda T^{\mu}{}_{\nu} = \partial_\lambda T^{\mu}{}_{\nu} + \Gamma^{\mu}_{\lambda\alpha}T^{\alpha}{}_{\nu} - \Gamma^{\alpha}_{\lambda\nu}T^{\mu}{}_{\alpha}$$

一般张量的协变微商为每个上指标加联络项、每个下指标减联络项。

联络系数（克里斯托弗符号，对度规 compatible 且 torsion-free）：

$$\Gamma^{\lambda}_{\mu\nu} = \frac{1}{2}g^{\lambda\sigma}(\partial_\mu g_{\nu\sigma} + \partial_\nu g_{\mu\sigma} - \partial_\sigma g_{\mu\nu})$$

### 张量运算

- 缩并：$T^{\mu}{}_{\mu}$
- 张量积：$(A \otimes B)^{\mu\nu}{}_{\alpha} = A^{\mu}{}_{\alpha} B^{\nu}$
- 对称化与反对称化：$T_{(\mu\nu)} = \frac{1}{2}(T_{\mu\nu}+T_{\nu\mu})$，$T_{[\mu\nu]} = \frac{1}{2}(T_{\mu\nu}-T_{\nu\mu})$

### 列维-奇维塔符号

$$\epsilon_{\mu_1\mu_2\cdots\mu_n} = \begin{cases} +1 & \text{偶排列} \\ -1 & \text{奇排列} \\ 0 & \text{有重复} \end{cases}$$

**参数说明**：
- $V$：切空间
- $g_{\mu\nu}$：度规张量分量
- $\Gamma^{\lambda}_{\mu\nu}$：克里斯托弗符号（联络系数）
- $\nabla_\lambda$：协变微商算子
- $\epsilon_{\mu_1\cdots\mu_n}$：列维-奇维塔符号

## 3. 物理学意义与推论

张量分析的核心价值在于保证物理方程的坐标无关性（广义协变原理）。一个方程若两端为同阶张量，则在任意坐标变换下保持形式不变，这是[[广义相对论]]的基本要求。

**广义协变原理**：物理定律在任意坐标变换下应保持形式不变，因此必须以张量方程表述。

**度规与几何**：度规张量 $g_{\mu\nu}$ 编码了时空的度规结构，决定了距离、角度与体积。在[[广义相对论]]中，度规本身是动力学变量，满足爱因斯坦场方程。

**曲率张量**：由联络的交换子构造黎曼曲率张量 $R^{\lambda}{}_{\mu\alpha\beta}$，表征时空弯曲程度。缩并得到里奇张量 $R_{\mu\nu}$ 与标量曲率 $R$。

**麦克斯韦方程的张量形式**：电磁场张量 $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$ 使[[麦克斯韦方程组_Maxwell's Equations]]协变化为：

$$\nabla_\nu F^{\mu\nu} = \mu_0 J^\mu, \quad \nabla_{[\lambda}F_{\mu\nu]} = 0$$

**能动张量**：$T^{\mu\nu}$ 描述物质能量-动量分布，是爱因斯坦场方程的源项。

**适用边界**：
- 张量分析是纯数学框架，适用于任何可定义度规与联络的[[流形_Manifold]]。
- 在[[狭义相对论]]中采用闵可夫斯基度规 $\eta_{\mu\nu} = \text{diag}(-1,1,1,1)$（或相反约定），联络为零。
- 在弯曲时空（[[广义相对论]]）中联络非零，需用完整协变微商。
- 在量子场论中，张量分析被扩展至旋量与纤维丛语言。
- 在离散格点或非光滑流形上，标准张量微积分需修正。

## 4. 相关验证实验

张量分析作为数学工具，其"验证"体现在以之为语言表述的物理理论的实验检验：
- [[水星近日点进动观测_Mercury Perihelion Precession Observation]]：验证以度规张量表述的[[广义相对论]]。
- [[引力透镜实验_Gravitational Lensing Experiment]]：验证光线在弯曲时空度规下的偏折。
- [[光线偏折实验_Light Deflection Experiment]]：[[爱丁顿]]1919年日食观测验证 Schwarzschild 度规。
- [[引力波探测实验_Gravitational Wave Detection Experiment]]：验证度规扰动 $h_{\mu\nu}$ 的传播。
- [[电磁场张量验证实验_Electromagnetic Tensor Verification Experiment]]：相对论性电磁现象（如磁通量不变性）验证 $F_{\mu\nu}$ 的协变性。

## 5. 历史上下文

张量概念可追溯至[[卡尔·弗里德里希·高斯]]与[[伯恩哈德·黎曼]]的[[微分几何_Differential Geometry]]工作。1887—1900年间，[[格雷戈里奥·里奇-库尔巴斯特罗]]及其学生[[图利奥·列维-奇维塔]]在帕多瓦大学发展了"绝对微分学"，即张量分析的完整体系，1900年发表综述论文。

起初张量分析仅被少数数学家关注。1901年[[马塞尔·格罗斯曼]]向[[阿尔伯特·爱因斯坦]]介绍这一工具后，爱因斯坦于1913—1915年间借助张量分析完成[[广义相对论]]的表述，张量分析由此成为理论物理的核心语言。20世纪中叶，张量分析在连续介质力学、[[量子场论]]规范理论（如[[标准模型]]的规范场强张量）及[[弦论]]的额外维紧致化中持续发挥关键作用。现代[[微分几何_Differential Geometry]]与[[拓扑学_Topology]]进一步将张量概念提升为纤维丛上的截面，成为统一数学物理的基础。
