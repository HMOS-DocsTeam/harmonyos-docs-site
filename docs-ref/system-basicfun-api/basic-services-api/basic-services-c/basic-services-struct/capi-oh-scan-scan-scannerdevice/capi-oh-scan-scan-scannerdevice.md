---
title: "Scan_ScannerDevice"
sidebar_position: 21
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-scan-scan-scannerdevice
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-scan-scan-scannerdevice
---

# Scan\_ScannerDevice

```
typedef struct {...} Scan_ScannerDevice
```

## 概述

表示扫描仪设备信息

****起始版本：**** 12

****相关模块：**** [OH\_Scan](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-oh-scan/capi-oh-scan)

****所在头文件：**** [ohscan.h](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohscan-h/capi-ohscan-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| const char\* scannerId | 扫描仪ID |
| const char\* manufacturer | 扫描仪制造商 |
| const char\* model | 扫描仪型号 |
| const char\* discoverMode | 扫描仪发现模式 |
| const char\* serialNumber | 扫描仪序列号 |
