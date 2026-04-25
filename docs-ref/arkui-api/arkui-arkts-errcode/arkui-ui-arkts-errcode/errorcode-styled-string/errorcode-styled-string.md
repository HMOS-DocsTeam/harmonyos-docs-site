---
title: "属性字符串错误码"
sidebar_position: 12
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-styled-string
kit: 应用框架
last_updated: "2026-04-22"
slug: errorcode-styled-string
---

# 属性字符串错误码

![](../../../../images/d4eb2b65/note_3.0-zh-cn.png) 

以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

## 170001 转换错误

****错误信息****

Convert Error.

****错误描述****

fromHtml无法将传入的字符串转换出对应的属性字符串。

****可能原因****

字符串为空或字符串不符合HTML格式。

****处理步骤****

NA

## 180101 无效的属性字符串

****错误信息****

invalid styled string.

****错误描述****

属性字符串序列化CAPI中，ArkUI\_StyledString\_Descriptor的属性字符串对象为空。

****可能原因****

参数中传递属性字符串有误。

****处理步骤****

检查参数中是否正确传递属性字符串。
