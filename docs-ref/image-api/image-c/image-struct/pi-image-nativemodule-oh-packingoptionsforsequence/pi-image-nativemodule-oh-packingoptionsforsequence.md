---
title: "OH_PackingOptionsForSequence"
sidebar_position: 22
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pi-image-nativemodule-oh-packingoptionsforsequence
kit: 媒体
last_updated: "2026-04-22"
slug: pi-image-nativemodule-oh-packingoptionsforsequence
---

# OH\_PackingOptionsForSequence

```
typedef struct OH_PackingOptionsForSequence OH_PackingOptionsForSequence
```

## 概述

OH\_PackingOptionsForSequence是native层封装的图像序列编码选项结构体，不可直接操作，而是采用函数调用方式创建、释放结构体以及操作具体字段。

创建OH\_PackingOptionsForSequence结构体的对象使用[OH\_PackingOptionsForSequence\_Create](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptionsforsequence_create)函数。

释放OH\_PackingOptionsForSequence对象使用[OH\_PackingOptionsForSequence\_Release](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptionsforsequence_release)函数。

| 字段类型 | 字段名称 | 字段描述 | 操作函数 | 函数描述 |
| --- | --- | --- | --- | --- |
| uint32\_t | frameCount | 帧数 | [OH\_PackingOptionsForSequence\_GetFrameCount](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptionsforsequence_getframecount) | 获取编码时指定的帧数。 |
| uint32\_t | frameCount | 帧数 | [OH\_PackingOptionsForSequence\_SetFrameCount](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptionsforsequence_setframecount) | 设置编码时指定的帧数。 |
| int32\_t \* | delayTimeList | 延迟时间数组 | [OH\_PackingOptionsForSequence\_GetDelayTimeList](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptionsforsequence_getdelaytimelist) | 获取编码时图片的延迟时间数组。 |
| int32\_t \* | delayTimeList | 延迟时间数组 | [OH\_PackingOptionsForSequence\_SetDelayTimeList](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptionsforsequence_setdelaytimelist) | 设置编码时图片的延迟时间数组。 |
| uint32\_t \* | disposalTypes | 帧数 | [OH\_PackingOptionsForSequence\_GetDisposalTypes](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptionsforsequence_getdisposaltypes) | 获取编码时图片的过渡帧模式数组。 |
| uint32\_t \* | disposalTypes | 帧数 | [OH\_PackingOptionsForSequence\_SetDisposalTypes](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptionsforsequence_setdisposaltypes) | 设置编码时图片的过渡帧模式数组。 |
| uint32\_t | loopCount | 帧数 | [OH\_PackingOptionsForSequence\_GetLoopCount](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptionsforsequence_getloopcount) | 获取编码时图片循环播放次数。 |
| uint32\_t | loopCount | 帧数 | [OH\_PackingOptionsForSequence\_SetLoopCount](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_packingoptionsforsequence_setloopcount) | 设置编码时图片循环播放次数，取值范围为[0，65535]，0表示无限循环；若无此字段，则表示不循环播放。 |

****起始版本：**** 18

****相关模块：**** [Image\_NativeModule](/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule)

****所在头文件：**** [image\_packer\_native.h](/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h)
