---
id: 20260714-035
type: theory
branch: 经典力学/流体力学
tags:
  - 流体力学
  - 纳维-斯托克斯方程
  - 湍流
  - 非线性偏微分方程
creator: "[[克劳德-路易·纳维]]"
prerequisites:
  - "[[牛顿运动定律_Newton's Laws of Motion]]"
  - "[[连续性方程]]"
  - "[[粘性流体]]"
status: unverified
---

# 纳维-斯托克斯方程 (Navier-Stokes Equations)

## 1. 核心定义

描述粘性不可压缩流体动量守恒的非线性偏微分方程组，由[[牛顿运动定律_Newton's Laws of Motion]]与牛顿粘性定律导出，其解的存在性与光滑性属于千禧年大奖难题。

## 2. 数学表达

### 不可压缩纳维-斯托克斯方程

$$\rho\left(\frac{\partial \vec{u}}{\partial t} + (\vec{u} \cdot \nabla)\vec{u}\right) = -\nabla p + \mu \nabla^2 \vec{u} + \vec{f}$$

### 连续性方程（不可压缩条件）

$$\nabla \cdot \vec{u} = 0$$

### 无量纲化与雷诺数

引入特征长度 $L$、特征速度 $U$，方程化为无量纲形式：

$$\frac{\partial \vec{u}^*}{\partial t^*} + (\vec{u}^* \cdot \nabla^*)\vec{u}^* = -\nabla^* p^* + \frac{1}{Re}\nabla^{*2}\vec{u}^* + \vec{f}^*$$

其中雷诺数定义为：

$$Re = \frac{\rho U L}{\mu} = \frac{\text{惯性力}}{\text{粘性力}}$$

### 涡量形式

引入涡量 $\vec{\omega} = \nabla \times \vec{u}$：

$$\frac{\partial \vec{\omega}}{\partial t} = \nabla \times (\vec{u} \times \vec{\omega}) + \nu \nabla^2 \vec{\omega}$$

其中 $\nu = \mu/\rho$ 为运动粘度。

### 可压缩形式（含应力张量）

$$\rho\left(\frac{\partial \vec{u}}{\partial t} + (\vec{u} \cdot \nabla)\vec{u}\right) = \nabla \cdot \boldsymbol{\sigma} + \vec{f}$$

应力张量 $\sigma_{ij} = -p\delta_{ij} + \mu\left(\frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i}\right) + \lambda(\nabla \cdot \vec{u})\delta_{ij}$。

**参数说明**：
- $\vec{u}$：流体速度场（m/s）
- $p$：压力（Pa）
- $\rho$：流体密度（kg/m³）
- $\mu$：动力粘度（Pa·s）
- $\nu = \mu/\rho$：运动粘度（m²/s）
- $Re$：雷诺数（无量纲）
- $\vec{f}$：体积力（N/m³）

## 3. 物理学意义与推论

纳维-斯托克斯方程是流体力学的基本方程，描述从血液流动到大气环流、从飞机气动到星系中气体云的极广泛现象。

**层流与湍流的转捩**：当 $Re$ 增大超过临界值（圆管流约 $Re \approx 2300$），流动由规则的层流转变为混沌的混沌的湍流。湍流的能量级串过程使大涡不断碎裂为小涡，最终在粘性尺度上耗散为热。

**雷诺数的物理意义**：$Re$ 衡量惯性效应与粘性效应的相对强度。$Re \ll 1$ 时流动为蠕动流（Stokes流），可忽略惯性项；$Re \gg 1$ 时粘性仅在边界层内重要。

**千禧年难题**：三维不可压缩NS方程光滑解的存在性与唯一性尚未严格证明（属于未解决问题），这是克雷数学研究所七大千禧年难题之一。该问题的核心困难在于非线性项 $(\vec{u}\cdot\nabla)\vec{u}$ 可能导致能量向小尺度集中的"爆破"现象。

**精确解**：少数特殊情形存在解析解，如库埃特流（Couette flow）、泊肃叶流（Poiseuille flow）、斯托克斯流及驻点流等。

**适用边界**：
- 连续介质假设要求特征尺度远大于分子平均自由程。
- 牛顿流体假设（应力与应变为线性关系）；非牛顿流体（血液、聚合物）需本构关系修正。
- 不可压缩假设适用于马赫数 $Ma \ll 1$，高速流需用可压缩NS方程。
- 极稀薄气体需用[[玻尔兹曼方程]]或[[分子动力学]]方法。

## 4. 相关验证实验

- [[雷诺圆管流实验_Reynolds Pipe Flow Experiment]]：[[奥斯本·雷诺]]首次系统观察层流-湍流转捩。
- [[库埃特流实验_Couette Flow Experiment]]：验证两平板间线性速度分布精确解。
- [[泊肃叶流实验_Poiseuille Flow Experiment]]：验证圆管中抛物线速度分布与流量-压降关系。
- [[风洞实验_Wind Tunnel Experiment]]：测量机翼绕流的升力与阻力，验证NS方程的工程计算。
- 现代直接数值模拟（DNS）可完整求解所有尺度的NS方程，与实验对照验证湍流理论。

## 5. 历史上下文

1822年，[[克劳德-路易·纳维]]首次引入粘性项推导流体运动方程。1845年，[[乔治·斯托克斯]]以更严密的连续介质力学框架重新推导，确立了现代NS方程形式。[[奥斯本·雷诺]]1883年的著名实验揭示了雷诺数的关键作用与湍流转捩现象。

20世纪，[[刘易斯·弗莱·理查森]]提出湍流能量级串思想，[[安德雷·柯尔莫哥洛夫]]于1941年提出K41湍流理论，给出惯性区能谱 $E(k) \propto k^{-5/3}$ 的普适律。2000年，克雷数学研究所将NS方程解的存在性与光滑性列为千禧年大奖难题，悬赏100万美元。尽管超级计算机的DNS模拟已能部分验证方程的正确性，严格的数学理论仍是物理学与数学的重大未解决问题。
