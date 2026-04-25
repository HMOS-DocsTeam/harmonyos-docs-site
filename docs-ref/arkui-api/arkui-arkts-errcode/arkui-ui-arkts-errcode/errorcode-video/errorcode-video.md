---
title: "Video组件错误码"
sidebar_position: 24
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-video
kit: 应用框架
last_updated: "2026-04-22"
slug: errorcode-video
---

# Video组件错误码

![](../../../../images/106a3492/note_3.0-zh-cn.png) 

以下仅介绍本模块特有错误码，媒体错误码请参考[Media错误码](/ref/media-api/media-arkts-errcode/errorcode-media/errorcode-media)，通用错误码请参考[通用错误码](/ref/errorcode-universal/errorcode-universal)。

## 103601 播放器创建失败

****错误信息****

Failed to create the media player.

****错误描述****

播放器创建失败。

****可能原因****

媒体服务不存在，或因内存不足导致创建失败。

****处理步骤****

销毁当前实例，并重新创建，如果重新创建失败，则停止相关操作。

## 103602 视频资源设置无效

****错误信息****

Not a valid source.

****错误描述****

视频资源设置无效。

****可能原因****

系统找不到资源文件，或资源文件异常。

****处理步骤****

确保资源文件存在且正常，再重新设置Video组件的视频源。
