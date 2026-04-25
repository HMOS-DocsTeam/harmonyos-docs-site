---
title: "OH_NativeBuffer_Smpte2086"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer-oh-nativebuffer-smpte2086
kit: 图形
last_updated: "2026-04-22"
slug: capi-oh-nativebuffer-oh-nativebuffer-smpte2086
---

# OH\_NativeBuffer\_Smpte2086

```
typedef struct OH_NativeBuffer_Smpte2086 {...} OH_NativeBuffer_Smpte2086
```

## 概述

表示smpte2086静态元数据。

****起始版本：**** 12

****相关模块：**** [OH\_NativeBuffer](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-oh-nativebuffer/capi-oh-nativebuffer)

****所在头文件：**** [buffer\_common.h](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_NativeBuffer\_ColorXY](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-colorxy/capi-oh-nativebuffer-oh-nativebuffer-colorxy) displayPrimaryRed | 红基色。 |
| [OH\_NativeBuffer\_ColorXY](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-colorxy/capi-oh-nativebuffer-oh-nativebuffer-colorxy) displayPrimaryGreen | 绿基色。 |
| [OH\_NativeBuffer\_ColorXY](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-colorxy/capi-oh-nativebuffer-oh-nativebuffer-colorxy) displayPrimaryBlue | 蓝基色。 |
| [OH\_NativeBuffer\_ColorXY](/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-oh-nativebuffer-oh-nativebuffer-colorxy/capi-oh-nativebuffer-oh-nativebuffer-colorxy) whitePoint | 白点。 |
| float maxLuminance | 最大的光亮度。 |
| float minLuminance | 最小的光亮度。 |
