---
title: "智能步入"
sidebar_position: 11
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-smart-step-into
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# 智能步入

进行C++调试时，当前代码行有多个函数调用时，开发者可以使用Smart Step Into功能![](../../../../images/82e8313f/zh-cn_image_0000002530752758.png)直接Step Into到其中某一个函数的实现中。

## 操作步骤

通过点击调试窗口“entry-Native”调试器下的Debugger窗格中的按钮![](../../../../images/4c1b3ae5/zh-cn_image_0000002530912756.png)（或使用快捷键****Shift+F7****）触发Smart Step Into功能后，DevEco Studio会将当前代码中可以进行跳转的函数进行高亮显示。

![](../../../../images/da6d9a08/zh-cn_image_0000002561752699.png "点击放大")

开发者点击需要跳转的函数，程序会运行到目标函数的实现内。

![](../../../../images/6ba865b6/note_3.0-zh-cn.png) 

已经执行完毕的函数不会高亮显示。
