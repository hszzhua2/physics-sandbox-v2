---
id: 20260714-043
type: theory
branch: 光学/波动光学
tags:
  - 波动光学
  - 偏振
  - 琼斯矢量
  - 布儒斯特角
creator: "[[埃蒂安-路易·马吕斯]]"
prerequisites:
  - "[[电磁波]]"
  - "[[麦克斯韦方程组_Maxwell's Equations]]"
  - "[[惠更斯-菲涅耳原理_Huygens-Fresnel Principle]]"
status: unverified
---

# 偏振 (Polarization)

## 1. 核心定义

电磁波电场矢量端点随时间在垂直于传播方向的平面内描绘的轨迹所表征的横波性质，包括线偏振、圆偏振与椭圆偏振三种基本偏振态。

## 2. 数学表达

### 偏振光的琼斯矢量表示

沿 $z$ 方向传播的单色平面波电场：

$$\vec{E}(z, t) = \begin{pmatrix} E_x \\ E_y \end{pmatrix} = \begin{pmatrix} E_{0x}e^{i\delta_x} \\ E_{0y}e^{i\delta_y} \end{pmatrix}e^{i(kz-\omega t)}$$

归一化琼斯矢量 $|J\rangle = \frac{1}{\sqrt{|E_{0x}|^2+|E_{0y}|^2}}\begin{pmatrix} E_{0x}e^{i\delta_x} \\ E_{0y}e^{i\delta_y} \end{pmatrix}$。

典型偏振态：
- 水平线偏振：$\begin{pmatrix}1\\0\end{pmatrix}$
- 垂直线偏振：$\begin{pmatrix}0\\1\end{pmatrix}$
- 右旋圆偏振：$\frac{1}{\sqrt{2}}\begin{pmatrix}1\\-i\end{pmatrix}$
- 左旋圆偏振：$\frac{1}{\sqrt{2}}\begin{pmatrix}1\\+i\end{pmatrix}$

### 琼斯矩阵

偏振器件用 $2\times2$ 矩阵表示。如透光轴与 $x$ 轴成 $\theta$ 角的线偏振器：

$$P(\theta) = \begin{pmatrix}\cos^2\theta & \cos\theta\sin\theta\\\cos\theta\sin\theta & \sin^2\theta\end{pmatrix}$$

### 斯托克斯参量与部分偏振光

对一般（部分偏振）光，定义斯托克斯参量：

$$S_0 = I, \quad S_1 = I_H - I_V, \quad S_2 = I_{45} - I_{135}, \quad S_3 = I_R - I_L$$

偏振度：

$$P = \frac{\sqrt{S_1^2+S_2^2+S_3^2}}{S_0}, \quad 0 \leq P \leq 1$$

### 马吕斯定律

线偏振光透过透光轴夹角为 $\theta$ 的偏振片后光强：

$$I = I_0\cos^2\theta$$

### 布儒斯特角

当自然光以布儒斯特角 $\theta_B$ 入射到电介质界面时，反射光为完全线偏振光：

$$\tan\theta_B = \frac{n_2}{n_1}$$

### 椭圆偏振的参数

电场端点轨迹为椭圆，其椭圆度角 $\chi$ 与方位角 $\psi$ 由相位差 $\Delta\delta = \delta_y - \delta_x$ 与振幅比决定：

$$\tan 2\psi = \frac{2E_{0x}E_{0y}\cos\Delta\delta}{E_{0x}^2 - E_{0y}^2}, \quad \sin 2\chi = \frac{2E_{0x}E_{0y}\sin\Delta\delta}{E_{0x}^2+E_{0y}^2}$$

**参数说明**：
- $E_{0x}, E_{0y}$：电场分量振幅
- $\delta_x, \delta_y$：相位
- $\theta$：偏振片透光轴与偏振方向的夹角
- $\theta_B$：布儒斯特角
- $P$：偏振度
- $n_1, n_2$：界面两侧介质折射率

## 3. 物理学意义与推论

偏振是电磁波横波特性的直接体现，是光与物质相互作用（反射、折射、散射、双折射）中不可忽视的矢量效应。

**偏振的物理起源**：由[[麦克斯韦方程组_Maxwell's Equations]]，自由空间电磁波的电场 $\vec{E}$、磁场 $\vec{B}$ 与波矢 $\vec{k}$ 相互正交，构成右手正交三矢组。电场矢量的取向即为偏振方向。

**双折射**：各向异性晶体（如方解石）中寻常光（o光）与非常光（e光）传播速度不同、偏振方向正交，产生双像。利用波片（$\lambda/4$、$\lambda/2$）可实现偏振态转换。

**偏振与散射**：瑞利散射使自然光成为部分偏振光（蓝天偏振），米氏散射与喇曼散射也改变偏振态。

**旋光效应**：手性介质（如糖溶液）使线偏振光的偏振面旋转，旋转角 $\alpha = [\alpha]_0 c l$，是量糖计的原理。

**适用边界**：
- 琼斯矢量仅适用于完全相干偏振光；部分偏振光需用斯托克斯参量与缪勒矩阵。
- 经典电磁理论描述宏观偏振；光子偏振态需用量子力学[[密度矩阵]]描述（光子自旋 $S=1$ 但因横波条件仅两独立偏振态）。
- 在强场或非线性介质中，偏振与光强耦合，产生非线性光学效应（如克尔效应、光学整流）。
- 偏振纠缠光子对是[[量子信息]]的核心资源。
- 各向同性介质不产生双折射，偏振状态不改变。

## 4. 相关验证实验

- [[马吕斯定律验证实验_Malus's Law Verification Experiment]]：验证 $I=I_0\cos^2\theta$。
- [[布儒斯特角实验_Brewster's Angle Experiment]]：验证反射光完全偏振及 $\tan\theta_B=n_2/n_1$。
- [[双折射实验_Birefringence Experiment]]：观察方解石的双像与o光/e光偏振正交。
- [[偏振光干涉实验_Polarized Light Interference Experiment]]：两正交偏振片间插入波片产生偏色干涉。
- [[旋光测量实验_Optical Activity Measurement Experiment]]：用糖溶液测量旋光度。
- [[光子偏振纠缠实验_Photon Polarization Entanglement Experiment]]：验证量子非定域性（贝尔不等式实验）。

## 5. 历史上下文

1669年，[[埃拉斯谟·巴托林]]发现冰洲石（方解石）的双折射现象，首次揭示光具有"侧向性"。1808年，[[艾蒂安-路易·马吕斯]]通过方解石观察巴黎卢森堡宫窗户的反射光，发现反射光可完全消光，即反射引起偏振，并建立马吕斯定律。1811年，[[多米尼克·阿拉戈]]发现偏振光的干涉，1815年[[让-巴蒂斯特·毕奥]]与[[弗朗索瓦·阿拉戈]]发现旋光现象。

1817年，[[托马斯·杨]]提出光为横波的假说，[[奥古斯丁·菲涅耳]]据此建立完整的偏振理论，统一解释双折射与偏振干涉。1865年，[[詹姆斯·克拉克·麦克斯韦]]的[[电磁理论]]将偏振自然地纳入电磁波理论。20世纪，偏振在液晶显示、偏光显微镜、偏振天文学与[[量子信息]]中广泛应用。1935年[[乔治·汤姆逊]]等人将偏振概念扩展至电子，验证了[[量子力学]]的自旋-统计。光子偏振纠缠的贝尔实验（[[阿斯佩克特实验_Aspect Experiment]]，1982年）证实了[[量子非定域性]]。
