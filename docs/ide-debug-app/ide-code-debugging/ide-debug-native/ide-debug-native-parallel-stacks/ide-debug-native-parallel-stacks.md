---
title: "堆栈可视化"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-parallel-stacks
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# 堆栈可视化

在native调试窗口中，点击****Layout Settings****![](../../../../images/1d64463e/zh-cn_image_0000002530753170.png)，勾选****Parallel Stacks****，打开并行栈视图。

![](../../../../images/6a48e2a8/zh-cn_image_0000002561753109.png)

在程序停下时，并行栈视图可以同时展示多个线程的调用栈信息，合并重复调用栈，帮助您更好地理解程序的并发执行情况，以及发现潜在的多线程问题。

![](../../../../images/910aa534/zh-cn_image_0000002530753168.png)

## 调用栈跳转

您可以在视图上对某一个调用栈双击来跳转到对应堆栈，Frames页签中会随之跳转，此时可以查看该堆栈的变量等信息。

## 线程信息查看

在多个线程合并的位置处悬停鼠标，可以显示这些线程的具体信息。

![](../../../../images/03e887b3/zh-cn_image_0000002530753174.png)
