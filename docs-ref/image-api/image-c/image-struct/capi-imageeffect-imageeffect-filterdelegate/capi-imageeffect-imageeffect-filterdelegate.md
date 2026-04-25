---
title: "ImageEffect_FilterDelegate"
sidebar_position: 58
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-imageeffect-imageeffect-filterdelegate
kit: 媒体
last_updated: "2026-04-22"
slug: capi-imageeffect-imageeffect-filterdelegate
---

# ImageEffect\_FilterDelegate

```
typedef struct ImageEffect_FilterDelegate {...} ImageEffect_FilterDelegate
```

## 概述

自定义滤镜回调函数结构体。

****起始版本：**** 12

****相关模块：**** [ImageEffect](/ref/image-api/image-c/image-module/capi-imageeffect/capi-imageeffect)

****所在头文件：**** [image\_effect\_filter.h](/ref/image-api/image-c/image-headerfile/capi-image-effect-filter-h/capi-image-effect-filter-h)

## 汇总

### 成员变量

| 名称 | 描述 |
| --- | --- |
| [OH\_EffectFilterDelegate\_SetValue](/ref/image-api/image-c/image-headerfile/capi-image-effect-filter-h/capi-image-effect-filter-h#oh_effectfilterdelegate_setvalue) setValue | 参数设置函数指针。 |
| [OH\_EffectFilterDelegate\_Render](/ref/image-api/image-c/image-headerfile/capi-image-effect-filter-h/capi-image-effect-filter-h#oh_effectfilterdelegate_render) render | 滤镜渲染函数指针。 |
| [OH\_EffectFilterDelegate\_Save](/ref/image-api/image-c/image-headerfile/capi-image-effect-filter-h/capi-image-effect-filter-h#oh_effectfilterdelegate_save) save | 序列化效果器函数指针。 |
| [OH\_EffectFilterDelegate\_Restore](/ref/image-api/image-c/image-headerfile/capi-image-effect-filter-h/capi-image-effect-filter-h#oh_effectfilterdelegate_restore) restore | 反序列化效果器函数指针。 |
