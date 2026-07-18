---
id: 20260714-046
type: theory
branch: 数学/微分几何
tags:
  - 微分几何
  - 曲率
  - 流形
  - 测地线
creator: "[[卡尔·弗里德里希·高斯]]"
prerequisites:
  - "[[微积分]]"
  - "[[张量分析_Tensor Analysis]]"
  - "[[流形_Manifold]]"
status: unverified
---

# 微分几何 (Differential Geometry)

## 1. 核心定义

运用微积分与张量分析研究光滑流形上几何结构（度规、联络、曲率）的数学分支，是[[广义相对论]]与规范场论的数学基础。

## 2. 数学表达

### 曲线与曲面

曲面上曲线弧长：

$$ds^2 = E\,du^2 + 2F\,du\,dv + G\,dv^2$$

其中 $E, F, G$ 为第一基本形式的系数。

### 第一与第二基本形式

第一基本形式（度量）：

$$\mathrm{I} = g_{ij}dx^i dx^j$$

第二基本形式（曲率信息）：

$$\mathrm{II} = b_{ij}dx^i dx^j = -d\vec{n}\cdot d\vec{r}$$

主曲率 $\kappa_1, \kappa_2$ 为形状算子的本征值。

### 高斯曲率与平均曲率

高斯曲率：

$$K = \kappa_1\kappa_2 = \frac{LN-M^2}{EG-F^2}$$

平均曲率：

$$H = \frac{\kappa_1+\kappa_2}{2}$$

### 绝妙定理（高斯）

高斯曲率是内蕴量，仅依赖第一基本形式，与嵌入无关：

$$K = \text{function of } E, F, G \text{ only}$$

### 联络与协变微商

Levi-Civita 联络（度规相容且无挠）：

$$\nabla g = 0, \quad \Gamma^{\lambda}_{\mu\nu} = \Gamma^{\lambda}_{\nu\mu}$$

### 黎曼曲率张量

$$R^{\lambda}{}_{\mu\alpha\beta} = \partial_\alpha \Gamma^{\lambda}_{\mu\beta} - \partial_\beta \Gamma^{\lambda}_{\mu\alpha} + \Gamma^{\lambda}_{\alpha\sigma}\Gamma^{\sigma}_{\mu\beta} - \Gamma^{\lambda}_{\beta\sigma}\Gamma^{\sigma}_{\mu\alpha}$$

缩并得到：
- 里奇张量：$R_{\mu\nu} = R^{\lambda}{}_{\mu\lambda\nu}$
- 标量曲率：$R = g^{\mu\nu}R_{\mu\nu}$

### 测地线方程

$$\frac{d^2 x^\lambda}{d\tau^2} + \Gamma^{\lambda}_{\mu\nu}\frac{dx^\mu}{d\tau}\frac{dx^\nu}{d\tau} = 0$$

### 高斯-博内定理

$$\int_M K\, dA = 2\pi\chi(M)$$

其中 $\chi(M)$ 为[[欧拉示性数_Euler Characteristic]]。

**参数说明**：
- $g_{ij}, b_{ij}$：第一、二基本形式系数
- $K$：高斯曲率
- $\Gamma^{\lambda}_{\mu\nu}$：克里斯托弗符号（联络系数）
- $R^{\lambda}{}_{\mu\alpha\beta}$：黎曼曲率张量
- $R_{\mu\nu}$：里奇张量
- $R$：标量曲率
- $\chi(M)$：欧拉示性数

## 3. 物理学意义与推论

微分几何是现代物理的几何语言，其核心思想是"几何即物理"——时空的度规与曲率直接编码引力与相互作用。

**广义相对论**：[[阿尔伯特·爱因斯坦]]将引力解释为四维时空[[流形_Manifold]]的弯曲，度规 $g_{\mu\nu}$ 满足爱因斯坦场方程：

$$R_{\mu\nu} - \frac{1}{2}Rg_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}$$

自由粒子沿测地线运动，即"弯曲时空中的直线"。

**规范场论的几何化**：杨-米尔斯规范场可理解为内部对称空间（纤维丛）上的联络，场强对应曲率。这一统一表述由[[陈省身]]、[[杨振宁]]等建立，使规范理论与微分几何融为一体。

**高斯曲率与内蕴几何**：绝妙定理表明高斯曲率是内蕴量，启发[[伯恩哈德·黎曼]]将几何推广至高维内蕴流形，为爱因斯坦铺路。

**热力学几何**：统计力学参数空间的度规（Fisher信息度规）将热力学相变与曲率奇异性联系起来。

**适用边界**：
- 标准微分几何要求光滑（$C^\infty$）流形；不光滑或奇异结构（如视界、奇点）需用广义微分几何或分布理论。
- 经典黎曼几何为正定度规；相对论用伪黎曼（洛伦兹）度规。
- 量子引力候选（[[弦论]]、[[圈量子引力]]）需推广至非交换几何或自旋网络。
- 高维与额外维（如弦论的Calabi-Yau流形）涉及复流形与Kähler几何。
- 在离散或格点近似下，连续微分几何概念需谨慎定义。

## 4. 相关验证实验

- [[水星近日点进动观测_Mercury Perihelion Precession Observation]]：验证Schwarzschild度规测地线。
- [[光线偏折实验_Light Deflection Experiment]]：验证时空弯曲对光路径的影响。
- [[引力波探测实验_Gravitational Wave Detection Experiment]]：验证度规扰动的传播。
- [[GPS定位实验_GPS Positioning Experiment]]：需考虑弯曲时空的度规修正，是广义相对论的日常工程应用。
- [[引力时间膨胀实验_Gravitational Time Dilation Experiment]]：[[庞德-雷布卡实验_Pound-Rebka Experiment]]验证度规的时间分量。
- [[规范场论验证实验_Gauge Field Verification Experiment]]：粒子对撞机中规范玻色子的相互作用结构。

## 5. 历史上下文

微分几何由[[卡尔·弗里德里希·高斯]]奠基。1827年其《关于曲面的一般研究》证明绝妙定理，首次指出曲率的内蕴性。1854年，[[伯恩哈德·黎曼]]在就职演讲《论作为几何学基础的假设》中将几何推广至任意维度的[[流形_Manifold]]，创立黎曼几何。

19世纪末，[[格雷戈里奥·里奇-库尔巴斯特罗]]与[[图利奥·列维-奇维塔]]发展[[张量分析_Tensor Analysis]]，为黎曼几何提供计算工具。1915年，[[阿尔伯特·爱因斯坦]]与[[马塞尔·格罗斯曼]]合作，以黎曼几何表述[[广义相对论]]，完成微分几何与物理的伟大结合。

20世纪中叶，[[陈省身]]将微分几何与[[拓扑学_Topology]]融合（陈氏示性类），[[杨振宁]]发现规范场与联络的等价，开创几何物理新纪元。20世纪末，[[爱德华·威滕]]等将微分几何推广至[[弦论]]的Calabi-Yau紧致化与镜像对称，微分几何与代数几何、拓扑物理深度融合，成为当代理论物理的核心数学。
