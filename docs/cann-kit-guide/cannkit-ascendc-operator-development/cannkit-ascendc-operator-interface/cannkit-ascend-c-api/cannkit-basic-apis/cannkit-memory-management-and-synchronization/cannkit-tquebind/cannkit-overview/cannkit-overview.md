---
title: "简介"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-overview
kit: ai
last_updated: "2026-04-22"
---

# 简介

TQueBind绑定源逻辑位置和目的逻辑位置，根据源位置和目的位置，来确定内存分配的位置、插入对应的同步事件，帮助开发者解决内存分配和管理、同步等问题。TQue是TQueBind的简化模式。通常情况下开发者使用TQue进行编程，TQueBind对外提供一些特殊数据通路的内存管理和同步控制，涉及这些通路时可以直接使用TQueBind。

如下图的数据通路示意图所示，红色线条和蓝色线条的通路可通过TQueBind定义表达，蓝色线条的通路可通过TQue进行简化表达。

![](../../../../../../../../images/17c37f71/zh-cn_image_0000002583479283.png)l

****表1**** TQueBind和TQue对于数据通路的表达

| 数据通路 | TQueBind定义 | TQue定义 |
| --- | --- | --- |
| GM->VECIN | TQueBind&lt;TPosition::GM, TPosition::VECIN, 1&gt; | TQue&lt;TPosition::VECIN, 1&gt; |
| VECOUT->GM | TQueBind&lt;TPosition::VECOUT, TPosition::GM, 1&gt; | TQue&lt;TPosition::VECOUT, 1&gt; |
| VECIN->VECOUT | TQueBind&lt;TPosition::VECIN, TPosition::VECOUT, 1&gt; | - |
| GM->A1 | TQueBind&lt;TPosition::GM, TPosition::A1, 1&gt; | TQue&lt;TPosition::A1, 1&gt; |
| GM->B1 | TQueBind&lt;TPosition::GM, TPosition::B1, 1&gt; | TQue&lt;TPosition::B1, 1&gt; |
| GM->C1 | TQueBind&lt;TPosition::GM, TPosition::C1, 1&gt; | TQue&lt;TPosition::C1, 1&gt; |
| A1->A2 | TQueBind&lt;TPosition::A1, TPosition::A2, 1&gt; | TQue&lt;TPosition::A2, 1&gt; |
| B1->B2 | TQueBind&lt;TPosition::B1, TPosition::B2, 1&gt; | TQue&lt;TPosition::B2, 1&gt; |
| C1->C2 | TQueBind&lt;TPosition::C1, TPosition::C2, 1&gt; | TQue&lt;TPosition::C2, 1&gt; |
| CO1->CO2 | TQueBind&lt;TPosition::CO1, TPosition::CO2, 1&gt; | TQue&lt;TPosition::CO1, 1&gt; |
| CO2->GM | TQueBind&lt;TPosition::CO2, TPosition::GM, 1&gt; | TQue&lt;TPosition::CO2, 1&gt; |
| VECOUT->A1/B1/C1 | TQueBind&lt;TPosition::VECOUT, TPosition::A1, 1&gt;;  TQueBind&lt;TPosition::VECOUT, TPosition::B1, 1&gt;;  TQueBind&lt;TPosition::VECOUT, TPosition::C1, 1&gt; | - |
| CO2->VECIN | TQueBind&lt;TPosition::CO2, TPosition::VECIN, 1&gt; | - |

![](../../../../../../../../images/d61bfe19/note_3.0-zh-cn.png) 

上述表格中的Cube相关数据通路建议使用Cube高阶API（如Matmul）实现，直接使用TQueBind控制会相对复杂。

下面通过两个具体的示例展示了矢量编程场景下TQueBind的使用方法：

- 如下的编程范式示例，图中的两个队列分别绑定的是GM VECIN和VECOUT GM。

  ![](../../../../../../../../images/e1a125e2/zh-cn_image_0000002552799634.png)
- 如果不需要进行Vector计算，比如仅需要做格式随路转换等场景，可对上述流程进行优化，对VECIN和VECOUT进行绑定，绑定的效果可以实现输入输出使用相同buffer，实现double buffer。

  ![](../../../../../../../../images/60a835a2/zh-cn_image_0000002583439329.png)
