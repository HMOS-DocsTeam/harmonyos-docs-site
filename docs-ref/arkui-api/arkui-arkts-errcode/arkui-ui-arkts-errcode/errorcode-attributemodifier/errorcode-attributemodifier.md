---
title: "动态属性设置错误码"
sidebar_position: 18
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-attributemodifier
kit: 应用框架
last_updated: "2026-04-22"
slug: errorcode-attributemodifier
---

# 动态属性设置错误码

![](../../../../images/61dda692/note_3.0-zh-cn.png) 

以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](/ref/errorcode-universal/errorcode-universal)。

## 100201 attributeModifier不支持部分接口的使用

****错误信息****

Something not supported in attributeModifier scenario.

****错误描述****

部分接口不支持通过[attributeModifier](/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier)设置，具体请参考[属性或事件对attributeModifier的支持情况](/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributemodifier#属性或事件对attributemodifier的支持情况)。

****可能原因****

部分接口不支持通过attributeModifier设置。

****处理步骤****

根据错误码对应的具体信息，停止使用该部分接口，请参考[用attributemodifier设置组件动态属性出现jscrash](/arkui/ui-debug-optimize/ui-development-faq/arkts-attribute-modifier-faq#使用attributemodifier设置组件动态属性出现jscrash)。
