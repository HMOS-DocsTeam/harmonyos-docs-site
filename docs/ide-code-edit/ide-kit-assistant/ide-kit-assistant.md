---
title: "快速插入场景化代码片段"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-kit-assistant
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# 快速插入场景化代码片段

DevEco Studio提供Kit Assistant能力，支持通过拖拽方式将基础的场景化的控件/代码片段插入ArkTS工程中，减少高频场景代码的编写时间。

1. 在菜单栏点击****View > Tool Windows > Kit Assistant****，或使用快捷键****Alt + K****（macOS为****O********ption + K****），进入Kit Assistant页面。

   ![](../../images/9ad623d9/zh-cn_image_0000002530913278.png)
2. 在左侧目录中支持搜索、查看不同Kit提供的场景化控件或代码片段。Kit Assistant面板右侧展示该控件的使用约束、适用场景等详细信息。

   ![](../../images/c5cbb976/zh-cn_image_0000002530913282.png)
3. 在目录中点击选中需要的控件或功能代码，并拖拽至.ets文件中适当位置，即可在当前位置插入相应的代码片段。

   ![](../../images/572b2c9b/note_3.0-zh-cn.png) 

   若当前编辑器打开的文件或所在的模块，存在某些Kit能力不支持的设备类型/API版本/工程模型，或某些Kit能力或控件不支持在元服务工程中使用，则Kit Assistant目录中该Kit能力或控件将置灰并无法成功拖拽。
