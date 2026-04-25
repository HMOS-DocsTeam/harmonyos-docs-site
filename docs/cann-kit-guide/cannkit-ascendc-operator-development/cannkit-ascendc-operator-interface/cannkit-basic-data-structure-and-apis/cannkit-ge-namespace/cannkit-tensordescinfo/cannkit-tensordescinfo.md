---
title: "TensorDescInfo"
sidebar_position: 20
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensordescinfo
kit: ai
last_updated: "2026-04-22"
---

# TensorDescInfo

```
struct TensorDescInfo {
    Format format_ = FORMAT_RESERVED;        /* tbe op register support format */
    DataType dataType_ = DT_UNDEFINED;       /* tbe op register support datatype */
    };
```

Format为枚举类型，定义请参考[Format](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format)。

DataType为枚举类型，定义请参考[DataType](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype)。
