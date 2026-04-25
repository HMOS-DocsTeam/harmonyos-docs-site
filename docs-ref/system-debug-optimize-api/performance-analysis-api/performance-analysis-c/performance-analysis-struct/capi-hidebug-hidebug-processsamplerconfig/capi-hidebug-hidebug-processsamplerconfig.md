---
title: "HiDebug_ProcessSamplerConfig"
sidebar_position: 19
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-processsamplerconfig
kit: 系统
last_updated: "2026-04-22"
slug: capi-hidebug-hidebug-processsamplerconfig
---

# HiDebug\_ProcessSamplerConfig

```
typedef struct HiDebug_ProcessSamplerConfig {...} HiDebug_ProcessSamplerConfig
```

## 概述

采样配置的结构定义

****起始版本：**** 22

****相关模块：**** [HiDebug](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-module/capi-hidebug/capi-hidebug)

****所在头文件：**** [hidebug\_type.h](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hidebug-type-h/capi-hidebug-type-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| uint32\_t\* tids | 待采样的线程号数组。最大支持10个线程的同时采样，数组长度超出时，将取前10个线程进行采样。 |
| uint32\_t size | tids指向的数组长度。 |
| uint32\_t frequency | 采样频率，取值范围[1-200]，单位HZ。超出取值范围时取默认值100。 |
| uint32\_t duration | 采样时长，取值范围[1000-10000]，单位ms。小于1000时，接口调用异常；大于10000时，取10000。 |
| uint32\_t reserved | 保留字段。 |
