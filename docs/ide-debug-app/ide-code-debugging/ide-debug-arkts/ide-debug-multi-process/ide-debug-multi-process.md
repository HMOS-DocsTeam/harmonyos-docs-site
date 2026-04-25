---
title: "多进程调试"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-multi-process
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# 多进程调试

部分设备上，UIAbility支持以独立进程的方式运行并调试，详细请参考[进程模型](/ability-kit/stage-model-development/process-model-stage#其他进程类型)，可按照以下步骤对UIAbility进行调试。

## 编译构建配置

1. 新建一个Ability，该Ability继承AbilityStage，作为独立进程的入口。

   ![](../../../../images/a559407c/zh-cn_image_0000002561832779.png)
2. 右键ets目录，新建其它需要作为独立进程启动的UIAbility。

   ![](../../../../images/bb91554c/zh-cn_image_0000002530912852.png "点击放大")
3. 修改module.json5配置文件，增加独立进程入口及isolationProcess配置项。

   ![](../../../../images/bd75474f/zh-cn_image_0000002561752793.png)

## 调试

1. 编写跳转UIAbility的代码。

   ![](../../../../images/c879efc3/zh-cn_image_0000002561832771.png)
2. 在跳转的UIAbility中或独立进程入口处设置断点，启动调试。

   ![](../../../../images/16712240/zh-cn_image_0000002561752791.png)

   跳转到以独立进程启动的UIAbility时将会新启动一个调试会话窗口。

   ![](../../../../images/c9f633e0/zh-cn_image_0000002530752862.png)
