---
title: "AREngine_ARSemanticDensePointData"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-struct-arsemanticdensepointdata
kit: 图形
last_updated: "2026-04-22"
slug: arengine-struct-arsemanticdensepointdata
---

# AREngine\_ARSemanticDensePointData

## 概述

高精几何重建对象的稠密点云数据。

作为[HMS\_AREngine\_ARSemanticDense\_AcquirePointData](/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirepointdata)接口输入。

****起始版本：**** 6.0.0(20)

****相关模块：**** [AR Engine](/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine)

****所在头文件：**** [ar\_engine\_core.h](/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-header/arengine-header-file/arengine-header-file)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t [id](#id) | 当前点的ID。 |
| float [x](#x) | 当前点的X坐标。 |
| float [y](#y) | 当前点的Y坐标。 |
| float [z](#z) | 当前点的Z坐标。 |
| int32\_t [r](#r) | 当前点的颜色，RGBA表示，这里是R的值。 |
| int32\_t [g](#g) | 当前点的颜色，RGBA表示，这里是G的值。 |
| int32\_t [b](#b) | 当前点的颜色，RGBA表示，这里是B的值。 |
| int32\_t [a](#a) | 当前点的颜色，RGBA表示，这里是A的值。 |
| float [confidence](#confidence) | 当前点的置信度。 |

## 结构体成员变量说明

### id

```
int32_t AREngine_ARSemanticDensePointData::id
```

****描述****

当前点的ID。

### x

```
float AREngine_ARSemanticDensePointData::x
```

****描述****

当前点的X坐标。

### y

```
float AREngine_ARSemanticDensePointData::y
```

****描述****

当前点的Y坐标。

### z

```
float AREngine_ARSemanticDensePointData::z
```

****描述****

当前点的Z坐标。

### r

```
int32_t AREngine_ARSemanticDensePointData::r
```

****描述****

当前点的颜色，RGBA表示，这里是R的值。

### g

```
int32_t AREngine_ARSemanticDensePointData::g
```

****描述****

当前点的颜色，RGBA表示，这里是G的值。

### b

```
int32_t AREngine_ARSemanticDensePointData::b
```

****描述****

当前点的颜色，RGBA表示，这里是B的值。

### a

```
int32_t AREngine_ARSemanticDensePointData::a
```

****描述****

当前点的颜色，RGBA表示，这里是A的值。

### confidence

```
float AREngine_ARSemanticDensePointData::confidence
```

****描述****

当前点的置信度。
