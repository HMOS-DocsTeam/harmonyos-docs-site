---
title: "调试场景说明"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-worker-taskpool
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# 调试场景说明

DevEco Studio支持对ArkTS代码进行调试，包括以下场景。

- 在[Worker/TaskPool代码](/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview)中添加断点进行调试。
- 对[Extension Ability](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview)生命周期函数进行调试，具体请参考[extension调试](/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-extension)。
- 部分设备上，UIAbility支持以独立进程的方式运行并调试，具体请参考[多进程调试](/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-multi-process)。
- 在Native代码中，通过[创建ArkTS运行时](/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-ark-runtime)的方式调用ArkTS方法，在ArkTS代码中添加断点即可进行调试。（设备系统版本需要升级到6.0.0.35及以上）
