---
title: "Scan_ScannerOptions"
sidebar_position: 23
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-scan-scan-scanneroptions
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-scan-scan-scanneroptions
---

# Scan\_ScannerOptions

```
typedef struct {...} Scan_ScannerOptions
```

## 概述

表示一个扫描仪的所有参数选项

****起始版本：**** 12

****相关模块：**** [OH\_Scan](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-oh-scan/capi-oh-scan)

****所在头文件：**** [ohscan.h](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohscan-h/capi-ohscan-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| char\*\* titles | 选项标题 |
| char\*\* descriptions | 选项描述 |
| char\*\* ranges | 选项可设置的范围 |
| int32\_t optionCount | 可设置的参数选项数量 |
