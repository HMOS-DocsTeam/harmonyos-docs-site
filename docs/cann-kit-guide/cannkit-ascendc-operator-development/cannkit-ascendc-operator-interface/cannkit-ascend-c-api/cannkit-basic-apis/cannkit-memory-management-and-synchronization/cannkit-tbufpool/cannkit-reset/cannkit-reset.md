---
title: "Reset"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-reset
kit: ai
last_updated: "2026-04-22"
---

# Reset

## 功能说明

完成TbufPool资源的释放与eventId等变量的初始化操作。

## 函数原型

```
__aicore__ inline void Reset()
```

## 支持的型号

Kirin9020系列处理器

KirinX90系列处理器

## 注意事项

切换TBufPool资源池时调用该接口，调用后对应资源池及资源池分配的Buffer不能继续使用。

## 返回值

无

## 调用示例

参考[InitBufPool](/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tbufpool/cannkit-initbufpool)。
