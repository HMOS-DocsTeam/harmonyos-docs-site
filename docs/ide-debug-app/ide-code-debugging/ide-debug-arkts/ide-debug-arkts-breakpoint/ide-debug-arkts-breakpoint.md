---
title: "使用断点"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-breakpoint
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# 使用断点

DevEco Studio ArkTS支持行断点、日志断点等多种不同类型的断点，这些断点可以触发不同的操作。

## 行断点

行断点是最常见的类型，用于在指定的代码行暂停应用的执行，在暂停时，您可以检查变量，对表达式求值，然后逐行执行，以确定运行时错误的原因。

如需添加行断点，请按以下步骤操作：

1. 找到您要暂停执行的代码行。
2. 点击该代码行的左侧边线，或将光标置于该行上并按****Ctrl + F8****（macOS为****Command+F8****）。

   当您设置断点时，相应的代码行旁边会出现一个红点，如图。

   ![](../../../../images/19c6276f/zh-cn_image_0000002530913040.png)

   在设置的断点红点处，单击鼠标右键，在Condition中可以设置条件断点，此类断点仅会在满足特定条件时才会暂停应用。

   ![](../../../../images/19454946/zh-cn_image_0000002561832977.png)
3. 点击Debug图标![](../../../../images/fb4253e8/zh-cn_image_0000002561832959.png)，开始调试。如果您的应用已经在运行，请点击Attach Debugger to Process图标![](../../../../images/3dabc3cf/zh-cn_image_0000002530913032.png)。

   当应用运行到代码处，会在代码处停住，并高亮显示。

   ![](../../../../images/c4fffa04/zh-cn_image_0000002530913048.png)

## 日志断点

在[BreakPoints](#section168791742202819)某个断点的配置中，勾选以下类型的Log，可以使进程运行到断点时在Console窗口打印相应日志。

- 勾选****"Breakpoint hit"message****，程序运行到断点时，打印“Breakpoint reached”。
- 勾选****Stack trace****，程序运行到断点时，打印当前线程的堆栈。
- 勾选****Evaluate and log****，并添加表达式，程序运行到断点时，打印表达式的值。

![](../../../../images/3c6ea058/note_3.0-zh-cn.png) 

未勾选Enable的断点不会打印日志，未勾选Suspend execution的断点会打印日志，不满足所设置的Condition的断点不会打印日志。

## 临时断点

在[BreakPoints](#section168791742202819)某个断点的配置中，勾选****Remove once hit****，该断点只生效一次，生效后该断点会被删除。

## 函数断点

从DevEco Studio 6.0.0 Beta2版本开始，支持在ArkTS代码中设置函数断点。

函数断点也叫方法断点或符号断点，使用函数名设置断点，当程序运行到对应函数时，中断进程。

在[BreakPoints](#section168791742202819)中，点击****+ > ArkTS Symbolic Breakpoints****，在弹出窗口中填写函数名，添加函数断点。

![](../../../../images/89a99f3f/zh-cn_image_0000002530753034.png) ![](../../../../images/2a8ce61e/zh-cn_image_0000002530913028.png)

![](../../../../images/79907047/note_3.0-zh-cn.png) 

DevEco Studio 6.0.1 Release及以下版本，调试过程中如果命中在C++断点，则无法添加和移除ArkTS函数断点，6.0.2 Beta1及以上版本，支持添加和移除。

## 异常断点

异常断点会在应用执行时发生异常的地方暂停应用。

在[BreakPoints](#section168791742202819)中，勾选****ArkTS/Js Exception Breakpoints****，开启异常断点。

![](../../../../images/65879be4/zh-cn_image_0000002561752997.png)

当调试应用程序中出现异常时，会在异常处高亮，并且代码左侧有![](../../../../images/49aaed32/zh-cn_image_0000002530753044.png)标志，并展示当前Frames和Variable，以及错误信息。

![](../../../../images/a684fc81/zh-cn_image_0000002561832951.png)

## 断点管理

在设置的程序断点红点处，单击鼠标右键。然后单击****More****或按快捷键****Ctrl+Shift+F8****（macOS为****Shift+Command+F8****），可以管理断点。

或者在“Debug”窗口中点击****View Breakpoints**** 图标![](../../../../images/a0992631/zh-cn_image_0000002530913050.png)。

![](../../../../images/ab04028a/zh-cn_image_0000002561832969.png)
