---
title: "Scan_PictureScanProgress"
sidebar_position: 22
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-scan-scan-picturescanprogress
kit: 系统
last_updated: "2026-04-22"
slug: capi-oh-scan-scan-picturescanprogress
---

# Scan\_PictureScanProgress

```
typedef struct {...} Scan_PictureScanProgress
```

## 概述

表示扫描仪扫描图片的进度

****起始版本：**** 12

****相关模块：**** [OH\_Scan](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-oh-scan/capi-oh-scan)

****所在头文件：**** [ohscan.h](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-ohscan-h/capi-ohscan-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| int32\_t progress | 图片的扫描进度，从0到100，单位：百分比。 |
| int32\_t fd | 扫描仪文件句柄 |
| bool isFinal | 指示该图像是否为最后扫描的图像。true表示该图像是最后扫描的图像，false表示该图像不是最后扫描的图像。 |
