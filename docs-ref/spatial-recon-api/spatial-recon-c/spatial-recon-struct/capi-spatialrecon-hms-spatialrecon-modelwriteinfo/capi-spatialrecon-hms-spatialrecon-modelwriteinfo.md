---
title: "HMS_SpatialRecon_ModelWriteInfo"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-spatialrecon-hms-spatialrecon-modelwriteinfo
kit: 图形
last_updated: "2026-04-22"
slug: capi-spatialrecon-hms-spatialrecon-modelwriteinfo
---

# HMS\_SpatialRecon\_ModelWriteInfo

```
typedef struct HMS_SpatialRecon_ModelWriteInfo {...} HMS_SpatialRecon_ModelWriteInfo
```

## 概述

空间重建模型写入的结构体。

****起始版本：**** 6.1.0(23)

****相关模块：**** [SpatialRecon](/ref/spatial-recon-api/spatial-recon-c/spatial-recon-module/capi-spatialrecon/capi-spatialrecon)

****所在头文件：**** [spatial\_recon\_interface.h](/ref/spatial-recon-api/spatial-recon-c/spatial-recon-headerfile/capi-spatial-recon-interface-h/capi-spatial-recon-interface-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| float longitude = 0.0 | 用于地理定位参考的经度坐标（十进制度）。正值表示东经，负值表示西经。 |
| float latitude = 0.0 | 用于地理定位参考的纬度坐标（十进制度）。正值表示北纬，负值表示南纬。 |
| const char \*audioFile = 0 | 与空间重建关联的可选音频文件路径，需要以.mp3 结尾。如果没有可用的音频数据或不需要音频数据，可以为nullptr。 |
| const char\* modelFile | 存储空间重建模型的输出文件名。为必填字段。 |
| HMS\_SpatialReconOutputFormat modelFormat | 空间重建模型的输出格式。指定生成模型的文件格式和结构。 |
