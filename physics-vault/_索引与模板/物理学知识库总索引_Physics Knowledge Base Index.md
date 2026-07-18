---
id: MOC-001
type: index
branch: all
tags:
  - physics/moc
  - physics/knowledge-base
date_created: 2026-07-14
date_updated: 2026-07-17
status: unverified
---

# 物理学完备知识框架 (Physics Knowledge Base Index)

> 本知识库以公理化物理学分支为底层逻辑，承载 **154个** 核心物理理论、实验与数学工具节点（含初高中物理基础50个），通过 [[双向链接]] 构建从中学到前沿的完整物理学知识图谱。

---

## 一、知识库目录结构

```
物理学知识库/
├── 00-初高中物理基础/        (50 nodes)
├── 01-经典力学/              (18 nodes)
├── 02-热力学与统计物理/      (12 nodes)
├── 03-电磁学与电动力学/      (7 nodes)
├── 04-光学/                  (4 nodes)
├── 05-量子力学/              (14 nodes)
├── 06-相对论/                (9 nodes)
├── 07-凝聚态与固体物理/      (5 nodes)
├── 08-核与粒子物理/          (7 nodes)
├── 09-天体物理与宇宙学/      (11 nodes)
├── 10-非线性动力学与复杂系统/ (10 nodes)
├── 11-数学与拓扑/            (7 nodes)
└── _索引与模板/              (1 index)
```

---

## 二、节点总览（按物理分支）

### 00-初高中物理基础 (Middle & High School Physics) — 50 nodes

> 覆盖中国初高中物理教学大纲核心知识点，每个节点在"物理学意义与推论"章节注明与大学物理的衔接关系。

#### 初中物理 — 声学 (1)

| 节点 | 核心内容 |
|------|---------|
| [[声音的产生与传播_Sound Production and Propagation]] | 声速、回声、超声波与次声波 |

#### 初中物理 — 光学 (5)

| 节点 | 核心内容 |
|------|---------|
| [[光的直线传播_Rectilinear Propagation of Light]] | 小孔成像、日食月食 |
| [[光的反射定律_Law of Reflection]] | 平面镜成像、镜面与漫反射 |
| [[光的折射与斯涅尔定律_Refraction and Snell's Law]] | $n_1\sin\theta_1=n_2\sin\theta_2$、全反射 |
| [[透镜成像_Lens Imaging]] | 薄透镜公式 $\frac{1}{u}+\frac{1}{v}=\frac{1}{f}$、放大率 |
| [[光的色散_Dispersion of Light]] | 棱镜分光、七色光谱 |

#### 初中物理 — 力学 (6)

| 节点 | 核心内容 |
|------|---------|
| [[质量与密度_Mass and Density]] | $\rho=m/V$、浮沉条件 |
| [[压强_Pressure]] | $p=F/S$、液体压强、大气压强 |
| [[浮力与阿基米德原理_Buoyancy and Archimedes' Principle]] | $F_{浮}=\rho g V_{排}$ |
| [[杠杆原理_Lever Principle]] | $F_1 L_1=F_2 L_2$ |
| [[滑轮与滑轮组_Pulley Systems]] | 定/动滑轮、机械效率 |
| [[功和机械能_Work and Mechanical Energy]] | $W=Fs$、$E_k=\frac{1}{2}mv^2$、$E_p=mgh$ |

#### 初中物理 — 热学 (2)

| 节点 | 核心内容 |
|------|---------|
| [[物态变化_Phase Change]] | 六种物态变化、熔化热 |
| [[比热容_Specific Heat Capacity]] | $Q=cm\Delta T$ |

#### 初中物理 — 电学 (4)

| 节点 | 核心内容 |
|------|---------|
| [[电流与电路_Current and Circuits]] | $I=Q/t$、串并联电路 |
| [[欧姆定律_Ohm's Law]] | $I=U/R$、电阻串并联 |
| [[电功与电功率_Electric Work and Power]] | $W=UIt$、$P=UI$、焦耳定律 |
| [[电流的磁效应_Magnetic Effect of Current]] | 奥斯特实验、右手螺旋定则 |

#### 高中物理 — 运动学 (4)

| 节点 | 核心内容 |
|------|---------|
| [[匀变速直线运动_Uniformly Accelerated Linear Motion]] | $v=v_0+at$、$x=v_0t+\frac{1}{2}at^2$ |
| [[自由落体运动_Free Fall Motion]] | $g\approx9.8\text{m/s}^2$、$h=\frac{1}{2}gt^2$ |
| [[平抛运动_Projectile Motion]] | 水平匀速+竖直自由落体合成 |
| [[匀速圆周运动_Uniform Circular Motion]] | $a=\frac{v^2}{r}=\omega^2 r$、向心力 |

#### 高中物理 — 力学 (5)

| 节点 | 核心内容 |
|------|---------|
| [[力的合成与分解_Composition and Decomposition of Forces]] | 平行四边形定则、正交分解 |
| [[重力_Gravity]] | $G=mg$、重心、$g$的变化 |
| [[摩擦力_Friction Force]] | $f=\mu N$、静/滑动/滚动摩擦 |
| [[弹力_Elastic Force]] | $F=kx$、弹簧串并联 |
| [[共点力平衡_Equilibrium of Concurrent Forces]] | $\Sigma F=0$、拉密定理 |

#### 高中物理 — 动量与能量 (4)

| 节点 | 核心内容 |
|------|---------|
| [[动量与冲量_Momentum and Impulse]] | $p=mv$、$I=F\Delta t=\Delta p$ |
| [[动量守恒定律_Conservation of Momentum]] | $\Sigma p_{前}=\Sigma p_{后}$、碰撞类型 |
| [[动能定理_Kinetic Energy Theorem]] | $W_{总}=\Delta E_k$ |
| [[机械能守恒定律_Conservation of Mechanical Energy]] | $E_k+E_p=\text{const}$ |

#### 高中物理 — 振动与波 (2)

| 节点 | 核心内容 |
|------|---------|
| [[简谐运动_Simple Harmonic Motion]] | $F=-kx$、$T=2\pi\sqrt{m/k}$、单摆 |
| [[机械波_Mechanical Waves]] | $v=\lambda f$、干涉衍射、多普勒效应 |

#### 高中物理 — 热学 (3)

| 节点 | 核心内容 |
|------|---------|
| [[理想气体状态方程_Ideal Gas Equation]] | $PV=nRT$、气体实验定律 |
| [[分子动理论_Kinetic Theory of Matter]] | 分子热运动、$PV=\frac{1}{3}Nm\overline{v^2}$ |
| [[热传递_Heat Transfer]] | 传导/对流/辐射、傅里叶定律 |

#### 高中物理 — 电磁深化 (5)

| 节点 | 核心内容 |
|------|---------|
| [[闭合电路欧姆定律_Ohm's Law for Complete Circuit]] | $I=\frac{\varepsilon}{R+r}$、路端电压 |
| [[安培力_Ampère's Force]] | $F=BIL\sin\theta$、左手定则 |
| [[电磁感应现象_Electromagnetic Induction]] | $\varepsilon=-N\frac{d\Phi}{dt}$、楞次定律 |
| [[交变电流_Alternating Current]] | $u=U_m\sin(\omega t)$、有效值、感抗容抗 |
| [[变压器_Transformer]] | $\frac{U_1}{U_2}=\frac{N_1}{N_2}$、远距离输电 |

#### 高中物理 — 光学深化 (2)

| 节点 | 核心内容 |
|------|---------|
| [[全反射_Total Internal Reflection]] | 临界角 $\sin C=\frac{1}{n}$、光纤通信 |
| [[光的衍射_Diffraction of Light]] | 单缝衍射、光栅、瑞利判据 |

#### 高中物理 — 现代物理 (7)

| 节点 | 核心内容 |
|------|---------|
| [[波粒二象性_Wave-Particle Duality]] | 德布罗意波长 $\lambda=\frac{h}{p}$ |
| [[原子结构模型_Atomic Structure Models]] | 汤姆逊→卢瑟福→玻尔模型演进 |
| [[玻尔模型_Bohr Model]] | 轨道量子化、$E_n=-\frac{13.6}{n^2}$ eV |
| [[原子核的组成_Composition of Nucleus]] | 质子+中子、结合能、$E=mc^2$ |
| [[放射性衰变_Radioactive Decay]] | $\alpha/\beta/\gamma$衰变、$N=N_0 e^{-\lambda t}$ |
| [[核裂变与核聚变_Nuclear Fission and Fusion]] | 链式反应、聚变能量释放 |
| [[原子光谱_Atomic Spectra]] | 巴尔末系、$\frac{1}{\lambda}=R(\frac{1}{2^2}-\frac{1}{n^2})$ |

---

### 01-经典力学 (Classical Mechanics) — 18 nodes

#### 核心理论 (10)

| 节点 | 关键贡献者 |
|------|-----------|
| [[牛顿运动定律_Newton's Laws of Motion]] | [[艾萨克·牛顿]] |
| [[拉格朗日力学_Lagrangian Mechanics]] | [[约瑟夫·拉格朗日]] |
| [[哈密顿力学_Hamiltonian Mechanics]] | [[威廉·哈密顿]] |
| [[最小作用量原理_Principle of Least Action]] | [[皮埃尔·莫佩尔蒂]] |
| [[纳维-斯托克斯方程_Navier-Stokes Equations]] | [[克劳德-路易·纳维]]、[[乔治·斯托克斯]] |
| [[胡克定律_Hooke's Law]] | [[罗伯特·胡克]] |
| [[开普勒定律_Kepler's Laws]] | [[约翰内斯·开普勒]] |
| [[牛顿万有引力定律_Newton's Law of Universal Gravitation]] | [[艾萨克·牛顿]] |
| [[欧拉动力学方程_Euler's Equations of Motion]] | [[莱昂哈德·欧拉]] |
| [[欧拉-伯努利梁方程_Euler-Bernoulli Beam Equation]] | [[莱昂哈德·欧拉]]、[[丹尼尔·伯努利]] |

#### 实验与应用 (8)

| 节点 | 核心理论 |
|------|---------|
| [[齿轮与自行车_Gears and Bicycle]] | 经典力学传动理论 |
| [[泰勒-库埃特流_Taylor-Couette Flow]] | [[纳维-斯托克斯方程_Navier-Stokes Equations]] |
| [[弹簧振子_Spring Oscillator]] | [[胡克定律_Hooke's Law]] |
| [[伯努利原理_Bernoulli Principle]] | 流体能量守恒 |
| [[刚体沙盒_Rigid Body Sandbox]] | [[欧拉动力学方程_Euler's Equations of Motion]] |
| [[悬臂梁分析_Cantilever Beam Analysis]] | [[欧拉-伯努利梁方程_Euler-Bernoulli Beam Equation]] |
| [[克拉尼图形_Chladni Patterns]] | 二维弹性板驻波方程 |
| [[利萨茹曲线_Lissajous Curve]] | 简谐振动的正交合成 |

---

### 02-热力学与统计物理 (Thermodynamics & Statistical Physics) — 12 nodes

#### 核心理论 (8)

| 节点 | 关键贡献者 |
|------|-----------|
| [[热力学四大定律_Four Laws of Thermodynamics]] | [[开尔文勋爵]]、[[克劳修斯]] |
| [[麦克斯韦-玻尔兹曼分布_Maxwell-Boltzmann Distribution]] | [[詹姆斯·麦克斯韦]]、[[路德维希·玻尔兹曼]] |
| [[系综理论_Ensemble Theory]] | [[J.威拉德·吉布斯]] |
| [[费米-狄拉克统计_Fermi-Dirac Statistics]] | [[恩里科·费米]]、[[保罗·狄拉克]] |
| [[玻色-爱因斯坦统计_Bose-Einstein Statistics]] | [[萨蒂延德拉·玻色]]、[[阿尔伯特·爱因斯坦]] |
| [[涨落耗散定理_Fluctuation-Dissipation Theorem]] | [[赫伯特·卡伦]]、[[中野藤男]] |
| [[朗之万方程_Langevin Equation]] | [[保罗·朗之万]] |
| [[配分函数_Partition Function]] | [[J.威拉德·吉布斯]] |

#### 实验与应用 (4)

| 节点 | 核心理论 |
|------|---------|
| [[布朗运动_Brownian Motion]] | [[涨落耗散定理_Fluctuation-Dissipation Theorem]] |
| [[伊辛模型_Ising Model]] | 相变理论、自发对称性破缺 |
| [[帕隆多悖论_Parrondo Paradox]] | [[马尔可夫链]]、[[博弈论]] |
| [[高尔顿钉板_Galton Board]] | [[中心极限定理]] |

---

### 03-电磁学与电动力学 (Electromagnetism & Electrodynamics) — 7 nodes

#### 核心理论 (5)

| 节点 | 关键贡献者 |
|------|-----------|
| [[库仑定律_Coulomb's Law]] | [[夏尔·奥古斯丁·库仑]] |
| [[麦克斯韦方程组_Maxwell's Equations]] | [[詹姆斯·麦克斯韦]] |
| [[洛伦兹力_Lorentz Force]] | [[亨德里克·洛伦兹]] |
| [[电磁感应定律_Electromagnetic Induction Law]] | [[迈克尔·法拉第]] |
| [[RLC谐振_RLC Resonance]] | [[亥姆霍兹]] |

#### 实验 (2)

| 节点 | 核心理论 |
|------|---------|
| [[点电荷群_Point Charges]] | [[库仑定律_Coulomb's Law]] |
| [[特斯拉线圈_Tesla Coil]] | [[RLC谐振_RLC Resonance]] |

---

### 04-光学 (Optics) — 4 nodes

#### 核心理论 (3)

| 节点 | 关键贡献者 |
|------|-----------|
| [[惠更斯-菲涅耳原理_Huygens-Fresnel Principle]] | [[克里斯蒂安·惠更斯]]、[[奥古斯丁·菲涅耳]] |
| [[费马原理_Fermat's Principle]] | [[皮埃尔·德·费马]] |
| [[偏振_Polarization]] | [[埃蒂安-路易·马吕斯]] |

#### 实验 (1)

| 节点 | 核心理论 |
|------|---------|
| [[波的干涉_Wave Interference]] | [[惠更斯-菲涅耳原理_Huygens-Fresnel Principle]] |

---

### 05-量子力学 (Quantum Mechanics) — 14 nodes

#### 核心理论 (8)

| 节点 | 关键贡献者 |
|------|-----------|
| [[薛定谔方程_Schrödinger Equation]] | [[埃尔温·薛定谔]] |
| [[态叠加原理_Superposition Principle]] | [[保罗·狄拉克]] |
| [[玻恩概率解释_Born Rule]] | [[马克斯·玻恩]] |
| [[不确定性原理_Uncertainty Principle]] | [[维尔纳·海森堡]] |
| [[自旋_Spin]] | [[乔治·乌伦贝克]]、[[塞缪尔·古德斯密特]] |
| [[泡利不相容原理_Pauli Exclusion Principle]] | [[沃尔夫冈·泡利]] |
| [[微扰理论_Perturbation Theory]] | [[埃尔温·薛定谔]] |
| [[量子隧穿效应_Quantum Tunneling]] | [[乔治·伽莫夫]] |

#### 实验 (6)

| 节点 | 核心理论 |
|------|---------|
| [[双缝干涉_Double-Slit Interference]] | [[态叠加原理_Superposition Principle]] |
| [[一维势阱_1D Potential Well]] | [[薛定谔方程_Schrödinger Equation]] |
| [[光电效应_Photoelectric Effect]] | 光量子假说 |
| [[斯特恩-盖拉赫实验_Stern-Gerlach Experiment]] | [[自旋_Spin]] |
| [[黑体辐射_Black Body Radiation]] | 普朗克辐射定律 |
| [[康普顿散射_Compton Scattering]] | 光子粒子性 |

---

### 06-相对论 (Relativity) — 9 nodes

#### 核心理论 (6)

| 节点 | 关键贡献者 |
|------|-----------|
| [[洛伦兹变换_Lorentz Transformation]] | [[亨德里克·洛伦兹]] |
| [[狭义相对论_Special Relativity]] | [[阿尔伯特·爱因斯坦]] |
| [[广义相对论_General Relativity]] | [[阿尔伯特·爱因斯坦]] |
| [[爱因斯坦场方程_Einstein Field Equations]] | [[阿尔伯特·爱因斯坦]] |
| [[史瓦西度规_Schwarzschild Metric]] | [[卡尔·史瓦西]] |
| [[等效原理_Equivalence Principle]] | [[阿尔伯特·爱因斯坦]] |

#### 实验 (3)

| 节点 | 核心理论 |
|------|---------|
| [[闵可夫斯基时空_Minkowski Spacetime]] | [[洛伦兹变换_Lorentz Transformation]] |
| [[引力波探测_Gravitational Wave Detection]] | [[爱因斯坦场方程_Einstein Field Equations]] |
| [[迈克尔逊-莫雷实验_Michelson-Morley Experiment]] | [[狭义相对论_Special Relativity]] |

---

### 07-凝聚态与固体物理 (Condensed Matter Physics) — 5 nodes

#### 核心理论 (5)

| 节点 | 关键贡献者 |
|------|-----------|
| [[布洛赫定理_Bloch's Theorem]] | [[费利克斯·布洛赫]] |
| [[能带理论_Band Theory]] | [[阿兰·威尔逊]] |
| [[BCS理论_BCS Theory]] | [[约翰·巴丁]]、[[利昂·库珀]]、[[罗伯特·施里弗]] |
| [[超流_Superfluidity]] | [[彼得·卡皮查]]、[[列夫·朗道]] |
| [[铁磁相变_Ferromagnetic Phase Transition]] | [[皮埃尔·居里]] |

---

### 08-核与粒子物理 (Nuclear & Particle Physics) — 7 nodes

#### 核心理论 (6)

| 节点 | 关键贡献者 |
|------|-----------|
| [[标准模型_Standard Model]] | [[谢尔登·格拉肖]]、[[史蒂文·温伯格]]、[[阿卜杜勒·萨拉姆]] |
| [[夸克模型_Quark Model]] | [[默里·盖尔曼]] |
| [[希格斯机制_Higgs Mechanism]] | [[彼得·希格斯]]、[[弗朗索瓦·恩格勒]] |
| [[弱相互作用_Weak Interaction]] | [[恩里科·费米]]、[[谢尔登·格拉肖]] |
| [[强相互作用_Strong Interaction]] | [[默里·盖尔曼]] |
| [[磁约束聚变_Magnetic Confinement Fusion]] | [[伊戈尔·塔姆]]、[[安德烈·萨哈罗夫]] |

#### 实验 (1)

| 节点 | 核心理论 |
|------|---------|
| [[托卡马克_Tokamak]] | [[磁约束聚变_Magnetic Confinement Fusion]] |

---

### 09-天体物理与宇宙学 (Astrophysics & Cosmology) — 11 nodes

#### 核心理论 (7)

| 节点 | 关键贡献者 |
|------|-----------|
| [[恒星结构方程_Stellar Structure Equations]] | [[亚瑟·爱丁顿]] |
| [[中子星_Neutron Star]] | [[罗伯特·奥本海默]] |
| [[大爆炸理论_Big Bang Theory]] | [[乔治·勒梅特]]、[[乔治·伽莫夫]] |
| [[暗物质_Dark Matter]] | [[弗里茨·兹威基]]、[[薇拉·鲁宾]] |
| [[宇宙学微扰理论_Cosmological Perturbation Theory]] | [[E.拉尔夫·哈里森]]、[[雅科夫·泽尔多维奇]] |

#### 实验 (6)

| 节点 | 核心理论 |
|------|---------|
| [[太阳系沙盒_Solar System Sandbox]] | [[开普勒定律_Kepler's Laws]] |
| [[黑洞吸积盘_Black Hole Accretion Disk]] | [[广义相对论_General Relativity]] |
| [[黑洞吸积盘喷流_Black Hole Jet]] | [[磁流体力学_Magnetohydrodynamics]] |
| [[星系的诞生_Galaxy Formation]] | [[宇宙学微扰理论_Cosmological Perturbation Theory]] |
| [[赫罗图_Hertzsprung-Russell Diagram]] | [[恒星结构方程_Stellar Structure Equations]] |
| [[宇宙微波背景辐射_Cosmic Microwave Background]] | [[大爆炸理论_Big Bang Theory]] |

---

### 10-非线性动力学与复杂系统 (Nonlinear Dynamics & Complex Systems) — 10 nodes

#### 核心理论 (5)

| 节点 | 关键贡献者 |
|------|-----------|
| [[李雅普诺夫指数_Lyapunov Exponent]] | [[亚历山大·李雅普诺夫]] |
| [[分形维数_Fractal Dimension]] | [[本华·曼德博]] |
| [[耗散结构_Dissipative Structure]] | [[伊利亚·普里高津]] |
| [[复杂性理论_Complexity Theory]] | [[约翰·冯·诺依曼]] |
| [[磁流体力学_Magnetohydrodynamics]] | [[汉内斯·阿尔文]] |

#### 实验 (5)

| 节点 | 核心理论 |
|------|---------|
| [[三体问题_Three-Body Problem]] | 非线性动力学混沌 |
| [[混沌双摆_Chaotic Double Pendulum]] | [[拉格朗日力学_Lagrangian Mechanics]] |
| [[洛伦兹吸引子_Lorenz Attractor]] | 确定性混沌 |
| [[胞元自动机_Cellular Automata]] | [[复杂性理论_Complexity Theory]] |
| [[社会力模型_Social Force Model]] | 多智能体自驱动粒子动力学 |

---

### 11-数学与拓扑 (Mathematics & Topology) — 7 nodes

#### 核心理论 (6)

| 节点 | 关键贡献者 |
|------|-----------|
| [[张量分析_Tensor Analysis]] | [[格雷戈里奥·里奇-库尔巴斯特罗]] |
| [[群论_Group Theory]] | [[埃瓦里斯特·伽罗瓦]] |
| [[微分几何_Differential Geometry]] | [[卡尔·弗里德里希·高斯]]、[[伯恩哈德·黎曼]] |
| [[拓扑学_Topology]] | [[亨利·庞加莱]] |
| [[欧拉示性数_Euler Characteristic]] | [[莱昂哈德·欧拉]] |
| [[流形_Manifold]] | [[伯恩哈德·黎曼]] |

#### 应用 (1)

| 节点 | 核心理论 |
|------|---------|
| [[克莱因瓶_Klein Bottle]] | 非定向曲面流形 |

---

## 三、节点类型定义 (Node Typology)

| 类型 | 说明 | 数量 | 标识 |
|------|------|------|------|
| `theory` | 核心物理定律、定理、假说 | 121 | `type: theory` |
| `experiment` | 验证理论的实验装置与过程 | 33 | `type: experiment` |
| `curriculum` | 初高中物理教学大纲节点 | 50 | `tags: physics/curriculum/*` |
| `[[Scientist]]` | 历史人物档案（通过链接引用） | — | `creator` / `experimenter` 字段 |
| `[[Math]]` | 数学工具节点 | 7 | `branch: 数学` |

---

## 四、双向链接拓扑逻辑

1. **实验→理论**：实验文档的 `target_theory` 字段及"实验结论与影响"章节使用 `[[ ]]` 链接到核心理论节点。
2. **理论→实验**：理论文档的"相关验证实验"章节使用 `[[ ]]` 链接到对应实验节点。
3. **理论→数学**：理论文档的"数学表达"章节中数学工具链接为 `[[数学工具_English]]`。
4. **前置依赖**：`prerequisites` 字段列出前置知识节点，缺失节点暴露为断链（灰色）。
5. **跨分支链接**：不同物理分支之间通过共同概念（如 [[张量分析_Tensor Analysis]] 连接广义相对论与电磁学）建立桥接。

---

## 五、物理学完备分支框架

1. **经典力学** — 牛顿力学 / 分析力学（[[拉格朗日力学_Lagrangian Mechanics]]、[[哈密顿力学_Hamiltonian Mechanics]]）/ 连续介质力学
2. **热力学与统计物理** — 热力学四大定律 / 经典统计（[[系综理论_Ensemble Theory]]）/ 量子统计（[[费米-狄拉克统计_Fermi-Dirac Statistics]]、[[玻色-爱因斯坦统计_Bose-Einstein Statistics]]）
3. **电磁学与电动力学** — 静电学 / [[麦克斯韦方程组_Maxwell's Equations]] / 狭义相对论电动力学
4. **光学** — [[费马原理_Fermat's Principle]]（几何光学）/ [[惠更斯-菲涅耳原理_Huygens-Fresnel Principle]]（波动光学）/ [[偏振_Polarization]]
5. **量子力学** — [[薛定谔方程_Schrödinger Equation]] / [[态叠加原理_Superposition Principle]] / [[微扰理论_Perturbation Theory]] / [[自旋_Spin]]
6. **相对论** — [[狭义相对论_Special Relativity]] / [[广义相对论_General Relativity]] / [[爱因斯坦场方程_Einstein Field Equations]]
7. **凝聚态与固体物理** — [[布洛赫定理_Bloch's Theorem]]、[[能带理论_Band Theory]] / [[BCS理论_BCS Theory]]、[[超流_Superfluidity]] / [[铁磁相变_Ferromagnetic Phase Transition]]
8. **核与粒子物理** — [[标准模型_Standard Model]] / [[夸克模型_Quark Model]]、[[希格斯机制_Higgs Mechanism]] / [[强相互作用_Strong Interaction]]、[[弱相互作用_Weak Interaction]]
9. **天体物理与宇宙学** — [[恒星结构方程_Stellar Structure Equations]] / [[中子星_Neutron Star]] / [[大爆炸理论_Big Bang Theory]]、[[宇宙微波背景辐射_Cosmic Microwave Background]]
10. **非线性动力学与复杂系统** — [[李雅普诺夫指数_Lyapunov Exponent]] / [[耗散结构_Dissipative Structure]] / [[复杂性理论_Complexity Theory]]、[[磁流体力学_Magnetohydrodynamics]]
11. **数学与拓扑** — [[张量分析_Tensor Analysis]] / [[群论_Group Theory]] / [[微分几何_Differential Geometry]] / [[拓扑学_Topology]]、[[流形_Manifold]]

---

## 六、核心知识脉络（学习路径推荐）

### 路径0：中学物理入门（初中→高中→大学衔接）
[[质量与密度_Mass and Density]] → [[匀变速直线运动_Uniformly Accelerated Linear Motion]] → [[牛顿运动定律_Newton's Laws of Motion]] → [[功和机械能_Work and Mechanical Energy]] → [[动能定理_Kinetic Energy Theorem]] → [[机械能守恒定律_Conservation of Mechanical Energy]] → [[动量守恒定律_Conservation of Momentum]] → [[拉格朗日力学_Lagrangian Mechanics]] → [[哈密顿力学_Hamiltonian Mechanics]]

### 路径0b：电磁学（初中→高中→大学衔接）
[[电流与电路_Current and Circuits]] → [[欧姆定律_Ohm's Law]] → [[闭合电路欧姆定律_Ohm's Law for Complete Circuit]] → [[电流的磁效应_Magnetic Effect of Current]] → [[安培力_Ampère's Force]] → [[电磁感应现象_Electromagnetic Induction]] → [[交变电流_Alternating Current]] → [[麦克斯韦方程组_Maxwell's Equations]]

### 路径0c：光学（初中→大学衔接）
[[光的直线传播_Rectilinear Propagation of Light]] → [[光的反射定律_Law of Reflection]] → [[光的折射与斯涅尔定律_Refraction and Snell's Law]] → [[透镜成像_Lens Imaging]] → [[费马原理_Fermat's Principle]] → [[惠更斯-菲涅耳原理_Huygens-Fresnel Principle]] → [[波的干涉_Wave Interference]] → [[光的衍射_Diffraction of Light]] → [[偏振_Polarization]]

### 路径0d：现代物理（高中→大学衔接）
[[波粒二象性_Wave-Particle Duality]] → [[原子结构模型_Atomic Structure Models]] → [[玻尔模型_Bohr Model]] → [[原子光谱_Atomic Spectra]] → [[薛定谔方程_Schrödinger Equation]] → [[不确定性原理_Uncertainty Principle]] / [[自旋_Spin]] → [[原子核的组成_Composition of Nucleus]] → [[放射性衰变_Radioactive Decay]] → [[核裂变与核聚变_Nuclear Fission and Fusion]] → [[磁约束聚变_Magnetic Confinement Fusion]]

### 路径1：经典物理基础
[[牛顿运动定律_Newton's Laws of Motion]] → [[牛顿万有引力定律_Newton's Law of Universal Gravitation]] → [[开普勒定律_Kepler's Laws]] → [[拉格朗日力学_Lagrangian Mechanics]] → [[哈密顿力学_Hamiltonian Mechanics]] → [[最小作用量原理_Principle of Least Action]]

### 路径2：电磁学统一
[[库仑定律_Coulomb's Law]] → [[电磁感应定律_Electromagnetic Induction Law]] → [[麦克斯韦方程组_Maxwell's Equations]] → [[洛伦兹力_Lorentz Force]] → [[狭义相对论_Special Relativity]]

### 路径3：量子力学诞生
[[黑体辐射_Black Body Radiation]] → [[光电效应_Photoelectric Effect]] → [[康普顿散射_Compton Scattering]] → [[薛定谔方程_Schrödinger Equation]] → [[不确定性原理_Uncertainty Principle]] → [[自旋_Spin]] → [[泡利不相容原理_Pauli Exclusion Principle]]

### 路径4：统计物理
[[热力学四大定律_Four Laws of Thermodynamics]] → [[系综理论_Ensemble Theory]] → [[配分函数_Partition Function]] → [[麦克斯韦-玻尔兹曼分布_Maxwell-Boltzmann Distribution]] → [[费米-狄拉克统计_Fermi-Dirac Statistics]] / [[玻色-爱因斯坦统计_Bose-Einstein Statistics]]

### 路径5：相对论与引力
[[迈克尔逊-莫雷实验_Michelson-Morley Experiment]] → [[洛伦兹变换_Lorentz Transformation]] → [[狭义相对论_Special Relativity]] → [[闵可夫斯基时空_Minkowski Spacetime]] → [[等效原理_Equivalence Principle]] → [[广义相对论_General Relativity]] → [[爱因斯坦场方程_Einstein Field Equations]] → [[史瓦西度规_Schwarzschild Metric]] → [[引力波探测_Gravitational Wave Detection]]

### 路径6：粒子物理标准模型
[[强相互作用_Strong Interaction]] → [[夸克模型_Quark Model]] → [[弱相互作用_Weak Interaction]] → [[希格斯机制_Higgs Mechanism]] → [[标准模型_Standard Model]]

### 路径7：宇宙学
[[大爆炸理论_Big Bang Theory]] → [[宇宙微波背景辐射_Cosmic Microwave Background]] → [[宇宙学微扰理论_Cosmological Perturbation Theory]] → [[暗物质_Dark Matter]] → [[星系的诞生_Galaxy Formation]]

### 路径8：凝聚态物理
[[布洛赫定理_Bloch's Theorem]] → [[能带理论_Band Theory]] → [[费米-狄拉克统计_Fermi-Dirac Statistics]] → [[BCS理论_BCS Theory]] / [[超流_Superfluidity]] → [[铁磁相变_Ferromagnetic Phase Transition]] → [[伊辛模型_Ising Model]]

### 路径9：非线性与混沌
[[三体问题_Three-Body Problem]] → [[洛伦兹吸引子_Lorenz Attractor]] → [[李雅普诺夫指数_Lyapunov Exponent]] → [[分形维数_Fractal Dimension]] → [[耗散结构_Dissipative Structure]] → [[复杂性理论_Complexity Theory]]

---

## 七、统计信息

- **节点总数**：154
- **理论节点**：121
- **实验节点**：33
- **初高中物理基础节点**：50（初中18 + 高中32）
- **覆盖分支**：11/11（全覆盖）+ 初高中基础层
- **命名格式**：全部采用"中文_英文"双语命名
- **双向链接**：跨节点引用网络，覆盖理论→实验、理论→数学、中学→大学衔接、跨分支桥接
- **学习路径**：13条推荐路径（4条中学→大学衔接路径 + 9条大学/前沿路径）
- **日期创建**：2026-07-14
- **日期更新**：2026-07-17
