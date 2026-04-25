---
title: "SuperPrivacyMode（超级隐私模式）"
sidebar_position: 9
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-arktsapi-errcode-superprivacy
kit: 系统
last_updated: "2026-04-20"
slug: devicesecurity-arktsapi-errcode-superprivacy
---

# SuperPrivacyMode（超级隐私模式）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/yezmVANTRpS6ak09_euUSg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260423T145402Z&HW-CC-Expire=86400&HW-CC-Sign=3A0F4EA0CC9CB2C985F3E571BE05D15BE04570205A32EC92E98237964CF07E5E) 

以下仅介绍本模块特有错误码，通用错误码请参见[通用错误码](/ref/errorcode-universal/errorcode-universal)。

## 1006200001 通用错误

****错误信息****

general error.

****错误描述****

超级隐私接口通用错误。

****可能原因****

接口执行流程中调用其它系统接口出现异常。

****处理步骤****

请优先重试，若重试不成功，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)申请帮助。

## 1006200002 内部错误

****错误信息****

internal error.

****错误描述****

超级隐私接口内部错误。

****可能原因****

超级隐私模式出现内部错误，数据读取失败。

****处理步骤****

请优先重试，若重试不成功，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)申请帮助。

## 1006200005 该设备不支持超级隐私模式

****错误信息****

not support super privacy.

****错误描述****

当前设备不支持超级隐私模式。

****可能原因****

当前设备不具备该功能。

****处理步骤****

在支持的设备上运行，具体支持情况请参见开发指南中的[约束与限制](/system-security/device-security-kit-guide/devicesecurity-superprivacymode/devicesecurity-getsuperprivacymode#约束与限制)。
