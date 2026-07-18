---
id: 20260714-088
type: theory
branch: 凝聚态物理/超导
tags:
  - 凝聚态物理
  - 超导电性
  - 库珀对
  - 能隙
  - 声子
creator:
  - "[[约翰·巴丁]]"
  - "[[利昂·库珀]]"
  - "[[罗伯特·施里弗]]"
prerequisites:
  - "[[费米-狄拉克统计_Fermi-Dirac Statistics]]"
  - "[[声子]]"
  - "[[能隙]]"
status: unverified
---

# BCS理论 (BCS Theory)

## 1. 核心定义

BCS理论是描述常规超导电性的微观量子理论，以电子通过[[声子]]媒介配对形成[[库珀对]]为核心机制，解释了零电阻和迈斯纳效应。

## 2. 数学表达

### 2.1 库珀对

在费米面附近，两个动量相反、自旋反平行的电子（$(\mathbf{k}\uparrow, -\mathbf{k}\downarrow)$）通过交换虚[[声子]]产生有效吸引力。当此吸引力超过屏蔽库仑斥力时，电子形成束缚态——**库珀对**。库珀对的束缚能即为超导能隙 $\Delta$。

### 2.2 BCS哈密顿量（约化哈密顿量）

BCS理论的核心是将电子-声子相互作用简化为费米面附近库珀对之间的有效吸引相互作用：

$$
\hat{H}_{\text{BCS}} = \sum_{\mathbf{k}\sigma}\epsilon_{\mathbf{k}}\,c^\dagger_{\mathbf{k}\sigma}c_{\mathbf{k}\sigma} - g\sum_{\mathbf{k}\mathbf{k}'}c^\dagger_{\mathbf{k}\uparrow}c^\dagger_{-\mathbf{k}\downarrow}c_{-\mathbf{k}'\downarrow}c_{\mathbf{k}'\uparrow}
$$

**参数说明：**
- $\epsilon_{\mathbf{k}}$：单电子色散（相对于费米能 $E_F$ 的能量）
- $g > 0$：有效吸引耦合常数（仅在德拜频率 $\omega_D$ 以内的能量范围有效）
- $c^\dagger_{\mathbf{k}\sigma}$、$c_{\mathbf{k}\sigma}$：电子产生和湮灭算符
- $\sigma = \uparrow, \downarrow$：自旋指标

### 2.3 超导能隙方程（BCS能隙方程）

BCS基态中库珀对的凝聚产生能隙 $\Delta$，满足自洽方程：

$$
\Delta = g \sum_{\mathbf{k}} \langle c_{-\mathbf{k}\downarrow}c_{\mathbf{k}\uparrow}\rangle
$$

在有限温度下，**BCS能隙方程**为：

$$
1 = \frac{g}{2}\sum_{\mathbf{k}}\frac{1 - 2f(E_{\mathbf{k}})}{E_{\mathbf{k}}}
$$

其中 $E_{\mathbf{k}} = \sqrt{\epsilon_{\mathbf{k}}^2 + \Delta^2}$ 为准粒子能量，$f(E)$ 为[[费米-狄拉克统计_Fermi-Dirac Statistics|费米-狄拉克分布]]。

### 2.4 关键物理量

**$T = 0$ 时的能隙：**

$$
\Delta(0) = 2\hbar\omega_D \, e^{-1/(N(0)g)}
$$

其中 $N(0)$ 为费米面处的态密度。

**临界温度：**

$$
k_B T_c = 1.13 \, \hbar\omega_D \, e^{-1/(N(0)g)}
$$

**能隙与临界温度的关系（BCS普适关系）：**

$$
\frac{2\Delta(0)}{k_B T_c} = 3.53
$$

这一普适关系在常规超导体中得到了精确验证。

**相干长度：**

$$
\xi_0 = \frac{\hbar v_F}{\pi \Delta(0)}
$$

其中 $v_F$ 为费米速度。相干长度是库珀对的空间尺度，典型值为 $10^2$–$10^3 \, \text{nm}$。

### 2.5 BCS基态

BCS基态为库珀对的相干叠加：

$$
|\Psi_{\text{BCS}}\rangle = \prod_{\mathbf{k}}\left(u_{\mathbf{k}} + v_{\mathbf{k}}\,c^\dagger_{\mathbf{k}\uparrow}c^\dagger_{-\mathbf{k}\downarrow}\right)|0\rangle
$$

其中 $|u_{\mathbf{k}}|^2 + |v_{\mathbf{k}}|^2 = 1$，$v_{\mathbf{k}}^2$ 为态 $(\mathbf{k}\uparrow, -\mathbf{k}\downarrow)$ 被占据的概率。$u_{\mathbf{k}}$ 和 $v_{\mathbf{k}}$ 由变分法确定：

$$
u_{\mathbf{k}}^2 = \frac{1}{2}\left(1 + \frac{\epsilon_{\mathbf{k}}}{E_{\mathbf{k}}}\right), \quad v_{\mathbf{k}}^2 = \frac{1}{2}\left(1 - \frac{\epsilon_{\mathbf{k}}}{E_{\mathbf{k}}}\right)
$$

## 3. 物理学意义与推论

### 3.1 零电阻效应

库珀对凝聚为宏观相干态后，所有库珀对共享同一个量子相位。电流由库珀对携带，要散射一个库珀对需要拆散其束缚（需能量 $\geq 2\Delta$），在低温低电场下无法实现，因此电阻为零。

### 3.2 迈斯纳效应

BCS理论结合[[伦敦方程]]可推导出完全抗磁性（迈斯纳效应）。超导电流在表面薄层（伦敦穿透深度 $\lambda_L$ 内）流动，屏蔽外磁场。

### 3.3 同位素效应

BCS理论预言临界温度 $T_c \propto M^{-1/2}$（$M$ 为离子质量），因为 $\omega_D \propto M^{-1/2}$。这一**同位素效应**直接证实了电子-[[声子]]耦合机制。实验于1950年发现同位素效应，为BCS理论提供了关键支持。

### 3.4 超导能隙的实验表现

能隙 $\Delta$ 导致超导体在 $T < T_c$ 时出现多种特征现象：
- **红外吸收阈值**：光子能量 $\hbar\omega < 2\Delta$ 时吸收极弱
- **超声衰减**：衰减系数在 $T_c$ 以下急剧下降
- **电子比热**：呈指数抑制 $C_e \propto e^{-\Delta/k_BT}$

### 3.5 与[[伊辛模型_Ising Model]]相变理论的联系

BCS超导相变是**二级相变**，序参量为能隙 $\Delta$（或库珀对凝聚密度 $\langle c_{-\mathbf{k}\downarrow}c_{\mathbf{k}\uparrow}\rangle$）。在 $T_c$ 附近，$\Delta \propto (T_c - T)^{1/2}$，临界指数 $\beta = 1/2$，与[[伊辛模型_Ising Model|平均场理论]]一致。这一联系反映了BCS理论本质上是一种平均场理论。

更一般地，超导相变属于[[自发对称性破缺]]的范例：$U(1)$ 规范对称性自发破缺，与[[铁磁相变_Ferromagnetic Phase Transition]]中的对称性破缺在数学结构上具有平行性。然而，由于[[安德森-希格斯机制]]，电磁场（规范场）使超导体的Goldstone模式被"吃掉"，转化为等离子体激元。

### 3.6 BCS理论的局限性

BCS理论成功解释了常规（低温）超导体，但对高温铜氧化物超导体（$T_c > 30 \, \text{K}$）和铁基超导体不适用。这些非常规超导体的配对机制可能涉及磁涨落而非[[声子]]，属于活跃研究领域。

## 4. 相关验证实验

- **同位素效应（1950）**：Reynolds、Serin 等人发现汞的超导转变温度随同位素质量变化 $T_c \propto M^{-1/2}$，证实了电子-声子机制。
- **超导能隙测量**：隧道实验（Giaever, 1960）、红外吸收、超声衰减等直接测量了能隙 $\Delta$，验证了 $2\Delta(0)/k_BT_c = 3.53$ 的BCS普适关系。
- **临界温度预测**：BCS理论定量预测的 $T_c$ 与常规超导体（铝、铅、锡等）实验值吻合。
- **磁通量子化**：超导环中磁通量子化为 $\Phi_0 = h/(2e)$（因子2来自库珀对的电荷 $2e$），直接证实了库珀对的存在。
- **约瑟夫森效应（1962）**：[[布莱恩·约瑟夫森]]预言并实验验证了超导隧道结中的直流和交流约瑟夫森效应，进一步证实了BCS宏观相干态。
- **中子散射**：直接观测超导态中声子谱的变化，与BCS理论预言一致。

## 5. 历史上下文

超导电性由[[海克·卡末林·昂内斯]]（Heike Kamerlingh Onnes）于1911年在莱顿大学发现：汞在4.2K时电阻突然降为零。此后数十年，超导的微观机制成为物理学最大谜题之一。

1933年，[[瓦尔特·迈斯纳]]（Walther Meissner）发现迈斯纳效应，证明超导不仅是零电阻，更是完全抗磁性。1935年，[[弗里茨·伦敦]]（Fritz London）和[[海因茨·伦敦]]（Heinz London）提出伦敦方程唯象描述。1950年，[[维塔利·金茨堡]]（Vitaly Ginzburg）和[[列夫·朗道]]（Lev Landau）提出Ginzburg-Landau理论，以序参量描述超导相变。同年，同位素效应的发现指向了电子-声子耦合。

1956年，[[利昂·库珀]]（Leon Cooper）证明了费米面附近任意微弱吸引力都可使两个电子形成束缚态——库珀对。1957年，[[约翰·巴丁]]（John Bardeen）、[[利昂·库珀]]和[[罗伯特·施里弗]]（Robert Schrieffer）在伊利诺伊大学完成了完整的微观理论——BCS理论。[[约翰·巴丁]]由此成为唯一两次获得诺贝尔物理学奖的人（1956年晶体管，1972年BCS理论）。

1986年，[[乔治·贝德诺尔茨]]（Georg Bednorz）和[[亚历山大·缪勒]]（K. Alex Müller）发现铜氧化物高温超导体（$T_c > 30 \, \text{K}$），打破了BCS理论预言的 $T_c$ 上限（McMillan 极限约40K），开启了非常规超导研究的新时代。高温超导的配对机制至今仍是凝聚态物理最重要的未解决问题之一。
