---
title: "注册节点渲染状态监听错误码"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-node-render-monitor
kit: 应用框架
last_updated: "2026-04-22"
slug: errorcode-node-render-monitor
---

# 注册节点渲染状态监听错误码

![](../../../../images/465a9b6f/note_3.0-zh-cn.png) 

以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码](/ref/errorcode-universal/errorcode-universal)。

## 161001 监视渲染状态的节点数超过限制

****错误信息****

The count of nodes monitoring render state is over the limitation.

****错误描述****

当注册的监视渲染状态的节点数超过限制时，系统会产生此错误码。

****可能原因****

监视渲染状态的节点数超过限制。

****处理步骤****

请确保注册的监视渲染状态的节点数小于64。
