---
title: "统一数据管理框架错误码"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-udmf
kit: 应用框架
last_updated: "2026-04-22"
slug: errorcode-udmf
---

# 统一数据管理框架错误码

![](../../../images/0780ff8e/note_3.0-zh-cn.png) 

以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

## 20400001 设置已存在，若要重新配置请删除现有的共享选项

****错误信息****

Settings already exist. To reconfigure, remove the existing sharing options.

****错误描述****

应用程序设置拖拽通道数据可使用的范围时，将要设置的信息在数据库中已存在。

****可能原因****

调用[setAppShareOptions](/ref/arkdata-api/arkdata-arkts/js-apis-data-unifieddatachannel/js-apis-data-unifieddatachannel#unifieddatachannelsetappshareoptions14)重复设置拖拽通道数据可使用的范围时，系统会产生此错误码。

****处理步骤****

先调用[removeAppShareOptions](/ref/arkdata-api/arkdata-arkts/js-apis-data-unifieddatachannel/js-apis-data-unifieddatachannel#unifieddatachannelremoveappshareoptions14)清除当前拖拽通道数据可使用的范围后，再调用[setAppShareOptions](/ref/arkdata-api/arkdata-arkts/js-apis-data-unifieddatachannel/js-apis-data-unifieddatachannel#unifieddatachannelsetappshareoptions14)重新设置。
