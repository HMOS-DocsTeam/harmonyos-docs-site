---
title: "inputmethod_controller_capi.h"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-controller-capi-h
kit: 应用框架
last_updated: "2026-04-22"
slug: capi-inputmethod-controller-capi-h
---

# inputmethod\_controller\_capi.h

## 概述

提供绑定、解绑输入法的方法。

****引用文件：**** &lt;inputmethod/inputmethod\_controller\_capi.h&gt;

****库：**** libohinputmethod.so

****系统能力：**** SystemCapability.MiscServices.InputMethodFramework

****起始版本：**** 12

****相关模块：**** [InputMethod](/ref/ime-api/ime-c/ime-module/capi-inputmethod/capi-inputmethod)

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [InputMethod\_ErrorCode OH\_InputMethodController\_Attach(InputMethod\_TextEditorProxy \*textEditorProxy,InputMethod\_AttachOptions \*options, InputMethod\_InputMethodProxy \*\*inputMethodProxy)](#oh_inputmethodcontroller_attach) | 将应用绑定到输入法服务。 |
| [InputMethod\_ErrorCode OH\_InputMethodController\_AttachWithUIContext(ArkUI\_ContextHandle context, InputMethod\_TextEditorProxy \*textEditorProxy, InputMethod\_AttachOptions \*options, InputMethod\_InputMethodProxy \*\*inputMethodProxy)](#oh_inputmethodcontroller_attachwithuicontext) | 将应用绑定到输入法服务。 |
| [InputMethod\_ErrorCode OH\_InputMethodController\_Detach(InputMethod\_InputMethodProxy \*inputMethodProxy)](#oh_inputmethodcontroller_detach) | 将应用从输入法服务解绑。 |

## 函数说明

### OH\_InputMethodController\_Attach()

```
InputMethod_ErrorCode OH_InputMethodController_Attach(InputMethod_TextEditorProxy *textEditorProxy,InputMethod_AttachOptions *options, InputMethod_InputMethodProxy **inputMethodProxy)
```

****描述****

将应用绑定到输入法服务。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [InputMethod\_TextEditorProxy](/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy) \*textEditorProxy | 表示指向[InputMethod\_TextEditorProxy](/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy)实例的指针。调用者需要自行管理textEditorProxy的生命周期。并且如果调用成功，调用者在下次发起绑定或解绑之前，不能将textEditorProxy释放。 |
| [InputMethod\_AttachOptions](/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-attachoptions/capi-inputmethod-inputmethod-attachoptions) \*options | 表示指向[InputMethod\_AttachOptions](/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-attachoptions/capi-inputmethod-inputmethod-attachoptions)实例的指针。该参数用于指定附加输入法时的选项。 |
| [InputMethod\_InputMethodProxy](/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy) \*\*inputMethodProxy | 表示指向[InputMethod\_InputMethodProxy](/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy)实例的指针。生命周期维持到下一次绑定或解绑的调用。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [InputMethod\_ErrorCode](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) | 返回一个特定的错误码。  [IME\_ERR\_OK](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。  [IME\_ERR\_PARAMCHECK](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示参数错误。  [IME\_ERR\_IMCLIENT](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 输入法客户端错误。  [IME\_ERR\_IMMS](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 输入法服务错误。  [IME\_ERR\_NULL\_POINTER](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。  具体错误码可以参考[InputMethod\_ErrorCode](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode)。 |

### OH\_InputMethodController\_AttachWithUIContext()

```
InputMethod_ErrorCode OH_InputMethodController_AttachWithUIContext(ArkUI_ContextHandle context, InputMethod_TextEditorProxy *textEditorProxy, InputMethod_AttachOptions *options, InputMethod_InputMethodProxy **inputMethodProxy)
```

****描述****

将应用绑定到输入法服务。

****起始版本：**** 23

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [ArkUI\_ContextHandle](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-context8h/capi-arkui-nativemodule-arkui-context8h) context | 表示指向[ArkUI\_Context](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-context/capi-arkui-nativemodule-arkui-context)实例的指针。 |
| [InputMethod\_TextEditorProxy](/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy) \*textEditorProxy | 表示指向[InputMethod\_TextEditorProxy](/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy)实例的指针。调用者需要自行管理textEditorProxy的生命周期。并且如果调用成功，调用者在下次发起绑定或解绑之前，不能将textEditorProxy释放。 |
| [InputMethod\_AttachOptions](/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-attachoptions/capi-inputmethod-inputmethod-attachoptions) \*options | 表示指向[InputMethod\_AttachOptions](/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-attachoptions/capi-inputmethod-inputmethod-attachoptions)实例的指针。该参数用于指定附加输入法时的选项。 |
| [InputMethod\_InputMethodProxy](/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy) \*\*inputMethodProxy | 表示指向[InputMethod\_InputMethodProxy](/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy)实例的指针。生命周期维持到下一次绑定或解绑的调用。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [InputMethod\_ErrorCode](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) | 返回一个特定的错误码。  [IME\_ERR\_OK](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。  [IME\_ERR\_PARAMCHECK](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示参数错误。  [IME\_ERR\_IMCLIENT](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 输入法客户端错误。  [IME\_ERR\_IMMS](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 输入法服务错误。  [IME\_ERR\_NULL\_POINTER](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。  具体错误码可以参考[InputMethod\_ErrorCode](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode)。 |

### OH\_InputMethodController\_Detach()

```
InputMethod_ErrorCode OH_InputMethodController_Detach(InputMethod_InputMethodProxy *inputMethodProxy)
```

****描述****

将应用从输入法服务解绑。

****起始版本：**** 12

****参数：****

| 参数项 | 描述 |
| --- | --- |
| [InputMethod\_InputMethodProxy](/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy) \*inputMethodProxy | 表示指向[InputMethod\_InputMethodProxy](/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy)实例的指针。inputMethodProxy由调用[OH\_InputMethodController\_Attach](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach)获取。 |

****返回：****

| 类型 | 说明 |
| --- | --- |
| [InputMethod\_ErrorCode](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) | 返回一个特定的错误码。  [IME\_ERR\_OK](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。  [IME\_ERR\_IMCLIENT](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示输入法客户端错误。  [IME\_ERR\_IMMS](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示输入法服务错误。  [IME\_ERR\_NULL\_POINTER](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。  具体错误码可以参考[InputMethod\_ErrorCode](/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode)。 |
