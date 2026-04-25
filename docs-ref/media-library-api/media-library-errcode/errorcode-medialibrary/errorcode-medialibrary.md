---
title: "媒体库错误码"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-medialibrary
kit: 媒体
last_updated: "2026-04-22"
slug: errorcode-medialibrary
---

# 媒体库错误码

![](../../../images/7d40fc57/note_3.0-zh-cn.png) 

以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

## 23800301 系统内部错误

****错误信息****

System inner fail.

****错误描述****

媒体库内部错误。

****可能原因****

1. 数据库异常。
2. 文件系统异常。
3. IPC消息超时。

****处理步骤****

清理后台或重启设备。

## 23800151 场景参数校验不通过

****错误信息****

Scene parameter validation failed.

****错误描述****

参数异常。

****可能原因****

1. 必选参数范围不满足要求。
2. 传入的记录已存在。
3. 传入的记录数量超过最大数量。

****处理步骤****

检查参数赋值或者参数长度。

## 23800104 传入参数校验不通过

****错误信息****

The provided member must be a property name of PhotoKey.

****错误描述****

参数异常。

****可能原因****

参数不在[PhotoKeys](/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-e/arkts-apis-photoaccesshelper-e#photokeys)枚举范围之内。

****处理步骤****

检查传入参数是否在PhotoKeys枚举范围之内。

## 23800202 非法场景调用错误

****错误信息****

Invalid call context. Possible causes: 1. The API is called outside the photo browsing scenario. 2. The API is called when isMovingPhotoBadgeShown is already set to true.

****错误描述****

非法场景调用错误。

****可能原因****

1. 在非全图浏览场景下调用该接口。
2. 在已经配置[BaseSelectOptions.isMovingPhotoBadgeShown](/ref/media-library-api/media-library-arkts/js-apis-photoaccesshelper/arkts-apis-photoaccesshelper-class/arkts-apis-photoaccesshelper-class#baseselectoptions)为true的情况下调用该接口。

****处理步骤****

检查接口[setMovingPhotoState](/ref/media-library-api/media-library-comp/ohos-file-photopickercomponent/ohos-file-photopickercomponent#setmovingphotostate23)的使用场景。
