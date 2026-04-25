---
title: "调试和性能分析概述"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/debug-performance-profiling-overview
kit: ndk
last_updated: "2026-04-22"
---

# 调试和性能分析概述

通过NDK开发C/C++程序不可避免会遇到Native程序常见的异常、性能等问题，NDK随包提供了常用的调试调优工具，方便开发者定位问题。

- 已提供如下方式进行调试和性能分析：

  - [C/C++内存错误检测](/ide-log-and-fault-analysis/ide-fault-analysis/ide-asan)
  - 通过DevEco Studio调试
    - [1.C/C++反向调试](/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-reverse)
    - [2.使用真机进行调试](/ide-debug-app/ide-debug-device)

      ![](../../images/5c7025ab/caution_3.0-zh-cn.png) 

      在[使用真机进行调试](/ide-debug-app/ide-debug-device)中，如果本地编译设备so文件的源码路径和当前配置的C++源码路径不一致，可以参考[三方源码调试](/ide-debug-app/ide-code-debugging/ide-source-code-debugging)
