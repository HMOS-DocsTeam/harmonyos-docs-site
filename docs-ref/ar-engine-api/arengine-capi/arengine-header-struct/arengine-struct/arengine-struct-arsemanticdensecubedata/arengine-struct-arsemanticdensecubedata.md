---
title: "AREngine_ARSemanticDenseCubeData"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-struct-arsemanticdensecubedata
kit: 图形
last_updated: "2026-04-22"
slug: arengine-struct-arsemanticdensecubedata
---

# AREngine\_ARSemanticDenseCubeData

## 概述

高精几何重建对象的立方体数据。

作为[HMS\_AREngine\_ARSemanticDense\_AcquireCubeData](/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirecubedata)接口输入。

****起始版本：**** 6.0.0(20)

****相关模块：**** [AR Engine](/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine)

****所在头文件：**** [ar\_engine\_core.h](/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-header/arengine-header-file/arengine-header-file)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t [id](#id) | 当前立方体的ID。 |
| int32\_t [vertexSize](#vertexsize) | 当前立方体的顶点大小。 |
| float\* [vertexData](#vertexdata) | 当前立方体的顶点数据。  对应立方体的8个顶点。索引从立方体后表面开始，按逆时针方向排列。 |
| float [confidence](#confidence) | 当前立方体的置信度。 |
| AREngine\_ARSemanticPlaneLabel [label](#label) | 当前立方体的语义标签。  参见[AREngine\_ARSemanticPlaneLabel](/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#arengine_arsemanticplanelabel)。 |

## 结构体成员变量说明

### id

```
int32_t AREngine_ARSemanticDenseCubeData::id
```

****描述****

当前立方体的ID。

### vertexSize

```
int32_t AREngine_ARSemanticDenseCubeData::vertexSize
```

****描述****

当前立方体的顶点大小。

### vertexData

```
float* AREngine_ARSemanticDenseCubeData::vertexData
```

****描述****

当前立方体的顶点数据。

### confidence

```
float AREngine_ARSemanticDenseCubeData::confidence
```

****描述****

当前立方体的置信度。

### label

```
AREngine_ARSemanticPlaneLabel AREngine_ARSemanticDenseCubeData::label
```

****描述****

当前立方体的语义标签。
