"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["271248"], {
96093(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ime_kit_use_inputmethod_in_custom_edit_box_ndk_use_inputmethod_in_custom_edit_box_ndk_md_89f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ime-kit-use-inputmethod-in-custom-edit-box-ndk-use-inputmethod-in-custom-edit-box-ndk-md-89f.json
var site_docs_ime_kit_use_inputmethod_in_custom_edit_box_ndk_use_inputmethod_in_custom_edit_box_ndk_md_89f_namespaceObject = JSON.parse('{"id":"ime-kit/use-inputmethod-in-custom-edit-box-ndk/use-inputmethod-in-custom-edit-box-ndk","title":"在自绘编辑框中使用输入法开发指导 (C/C++)","description":"场景介绍","source":"@site/docs/ime-kit/use-inputmethod-in-custom-edit-box-ndk/use-inputmethod-in-custom-edit-box-ndk.md","sourceDirName":"ime-kit/use-inputmethod-in-custom-edit-box-ndk","slug":"/ime-kit/use-inputmethod-in-custom-edit-box-ndk/","permalink":"/harmonyos-docs-site/ime-kit/use-inputmethod-in-custom-edit-box-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"在自绘编辑框中使用输入法开发指导 (C/C++)","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-inputmethod-in-custom-edit-box-ndk","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"输入法安全模式介绍","permalink":"/harmonyos-docs-site/ime-kit/ime-kit-security/"},"next":{"title":"输入法应用沉浸模式","permalink":"/harmonyos-docs-site/ime-kit/inputmethod-immersive-mode-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ime-kit/use-inputmethod-in-custom-edit-box-ndk/use-inputmethod-in-custom-edit-box-ndk.md


const frontMatter = {
	title: '在自绘编辑框中使用输入法开发指导 (C/C++)',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-inputmethod-in-custom-edit-box-ndk',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '在自绘编辑框中使用输入法开发指导 (C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "添加动态链接库",
  "id": "添加动态链接库",
  "level": 2
}, {
  "value": "引用头文件",
  "id": "引用头文件",
  "level": 2
}, {
  "value": "绑定输入法",
  "id": "绑定输入法",
  "level": 2
}, {
  "value": "显示/隐藏面板功能",
  "id": "显示隐藏面板功能",
  "level": 2
}, {
  "value": "监听输入法应用的请求/通知",
  "id": "监听输入法应用的请求通知",
  "level": 2
}, {
  "value": "解绑输入法",
  "id": "解绑输入法",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "在自绘编辑框中使用输入法开发指导-cc",
        children: "在自绘编辑框中使用输入法开发指导 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IME Kit支持开发者在自绘编辑框中使用输入法，与输入法应用交互，包括显示、隐藏输入法，接收来自输入法应用的文本编辑操作通知等，本文档介绍开发者如何使用C/C++完成此功能开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-module/capi-inputmethod/capi-inputmethod",
        children: "InputMethod接口文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加动态链接库",
      children: "添加动态链接库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下lib。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libohinputmethod.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引用头文件",
      children: "引用头文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <inputmethod/inputmethod_controller_capi.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绑定输入法",
      children: "绑定输入法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要在输入框获焦时，通过调用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "绑定输入法，绑定成功后用户可以通过输入法输入文字。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建InputMethod_TextEditorProxy实例，示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建InputMethod_TextEditorProxy实例\ntextEditorProxy = OH_TextEditorProxy_Create();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建InputMethod_AttachOptions实例，设置绑定输入法时的选项。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建InputMethod_AttachOptions实例，选项showKeyboard用于指定此次绑定成功后是否显示键盘，此处以目标显示键盘为例\nbool showKeyboard = true;\nattachOptions = OH_AttachOptions_Create(showKeyboard);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_InputMethodController_Attach发起绑定输入法服务，调用成功后，可以获取到用于和输入法交互的InputMethod_InputMethodProxy。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 发起绑定请求\nauto ret = OH_InputMethodController_Attach(textEditorProxy, attachOptions, &inputMethodProxy);\nif (ret != IME_ERR_OK) {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, 0, \"testTag\", \"Attach failed, ret=%{public}d.\", ret);\n    OH_TextEditorProxy_Destroy(textEditorProxy);\n    OH_AttachOptions_Destroy(attachOptions);\n    return;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "显示隐藏面板功能",
      children: "显示/隐藏面板功能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["绑定成功后，可以使用获取到的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
        children: "InputMethod_InputMethodProxy"
      }), "对象向输入法发送消息。示例代码如下所示："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 显示键盘\nif (OH_InputMethodProxy_ShowKeyboard(inputMethodProxy) != InputMethod_ErrorCode::IME_ERR_OK) {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, 0, \"testTag\", \"ShowKeyboard failed!\");\n}\n// 隐藏键盘\nif (OH_InputMethodProxy_HideKeyboard(inputMethodProxy) != InputMethod_ErrorCode::IME_ERR_OK) {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, 0, \"testTag\", \"HideKeyboard failed!\");\n}\n// 通知输入框配置信息变化\nif (OH_InputMethodProxy_NotifyConfigurationChange(inputMethodProxy, InputMethod_EnterKeyType::IME_ENTER_KEY_GO, InputMethod_TextInputType::IME_TEXT_INPUT_TYPE_TEXT) != InputMethod_ErrorCode::IME_ERR_OK) {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, 0, \"testTag\", \"NotifyConfigurationChange failed!\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听输入法应用的请求通知",
      children: "监听输入法应用的请求/通知"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要先实现对输入法应用发送的请求或通知的响应处理函数，示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 实现InputMethod_TextEditorProxy中的输入法应用事件响应函数\nvoid GetTextConfig(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_TextConfig *config)\n{\n    // 处理输入法发送的获取输入框配置请求\n}\nvoid InsertText(InputMethod_TextEditorProxy *textEditorProxy, const char16_t *text, size_t length)\n{\n    // 处理输入法发送的插入文本请求\n}\nvoid DeleteForward(InputMethod_TextEditorProxy *textEditorProxy, int32_t length)\n{\n    // 处理输入法发送的删除文本请求\n}\n// ......\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将实现后的响应函数，设置到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
            children: "InputMethod_TextEditorProxy"
          }), "中，再通过绑定输入法时调用的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
            children: "OH_InputMethodController_Attach"
          }), "将其设置到输入法框架中，完成监听注册。示例代码如下所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_TextEditorProxy_SetGetTextConfigFunc(textEditorProxy, GetTextConfigFunc);\nOH_TextEditorProxy_SetInsertTextFunc(textEditorProxy, InsertTextFunc);\nOH_TextEditorProxy_SetDeleteForwardFunc(textEditorProxy, DeleteForwardFunc);\nOH_TextEditorProxy_SetDeleteBackwardFunc(textEditorProxy, DeleteBackwardFunc);\nOH_TextEditorProxy_SetSendKeyboardStatusFunc(textEditorProxy, SendKeyboardStatusFunc);\nOH_TextEditorProxy_SetSendEnterKeyFunc(textEditorProxy, SendEnterKeyFunc);\nOH_TextEditorProxy_SetMoveCursorFunc(textEditorProxy, MoveCursorFunc);\nOH_TextEditorProxy_SetHandleSetSelectionFunc(textEditorProxy, HandleSetSelectionFunc);\nOH_TextEditorProxy_SetHandleExtendActionFunc(textEditorProxy, HandleExtendActionFunc);\nOH_TextEditorProxy_SetGetLeftTextOfCursorFunc(textEditorProxy, GetLeftTextOfCursorFunc);\nOH_TextEditorProxy_SetGetRightTextOfCursorFunc(textEditorProxy, GetRightTextOfCursorFunc);\nOH_TextEditorProxy_SetGetTextIndexAtCursorFunc(textEditorProxy, GetTextIndexAtCursorFunc);\nOH_TextEditorProxy_SetReceivePrivateCommandFunc(textEditorProxy, ReceivePrivateCommandFunc);\nOH_TextEditorProxy_SetSetPreviewTextFunc(textEditorProxy, SetPreviewTextFunc);\nOH_TextEditorProxy_SetFinishTextPreviewFunc(textEditorProxy, FinishTextPreviewFunc);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "解绑输入法",
      children: "解绑输入法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当编辑框失焦，需要结束使用输入法，通过接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_detach",
        children: "OH_InputMethodController_Detach"
      }), "与输入法框架解绑。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 发起解绑请求\nOH_InputMethodController_Detach(inputMethodProxy);\nOH_TextEditorProxy_Destroy(textEditorProxy);\nOH_AttachOptions_Destroy(attachOptions);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码展示了绑定输入法、隐藏输入法、解绑输入法的完整流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码总入口为InputMethodNdkDemo函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "说明："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在CMakeList.txt中添加libohinputmethod.so libhilog_ndk.z.so依赖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include <codecvt>\n#include <locale>\n#include <thread>\n\n#include \"hilog/log.h\"\n#include \"inputmethod/inputmethod_controller_capi.h\"\n\n constexpr int32_t TEXTSIZE = 1024;\n\nstatic std::string g_strText;\nchar g_strTextChar[TEXTSIZE];\nint32_t g_strTextCharLen = 0;\nbool g_flagShow = false;\nstd::mutex g_textMutex;\nInputMethod_TextEditorProxy *textEditorProxy = nullptr;\nInputMethod_AttachOptions *attachOptions = nullptr;\nInputMethod_InputMethodProxy *inputMethodProxy = nullptr;\n\nvoid InputMethodDestroy();\n\nvoid InitText()\n{\n    std::lock_guard<std::mutex> lock(g_textMutex);\n    if (g_flagShow) {\n        memset(g_strTextChar, 0x00, sizeof(g_strTextChar));\n        g_strTextCharLen = 0;\n        g_flagShow = false;\n    }\n}\n\nvoid SetText(const char* input)\n{\n    std::lock_guard<std::mutex> lock(g_textMutex);\n    g_strTextCharLen = strlen(input);\n    if (g_strTextCharLen > TEXTSIZE) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 0, \"testTag\", \"Length greater than 1024 , ret=%{public}d\", g_strTextCharLen);\n    }\n    strncpy(g_strTextChar, input, g_strTextCharLen);\n}\n\nvoid GetTextConfigFunc(InputMethod_TextEditorProxy *proxy, InputMethod_TextConfig *config)\n{ // 处理获取输入框配置请求\n    auto ret = OH_TextConfig_SetEnterKeyType(config, InputMethod_EnterKeyType::IME_ENTER_KEY_SEND);\n    if (ret != IME_ERR_OK) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 0, \"testTag\", \"SetEnterKeyType failed, ret=%{public}d\", ret);\n        return;\n    }\n\n    ret = OH_TextConfig_SetInputType(config, InputMethod_TextInputType::IME_TEXT_INPUT_TYPE_PHONE);\n    if (ret != IME_ERR_OK) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 0, \"testTag\", \"SetInputType failed, ret=%{public}d\", ret);\n        return;\n    }\n}\n\nvoid InsertTextFunc(InputMethod_TextEditorProxy *proxy, const char16_t *text, size_t length)\n{\n    InitText();\n\n    // 处理插入文本请求\n    // 将char16_t类型的字符串转换为u16string\n    std::u16string u16Str(text, length + 1);\n\n    // 转换为UTF-8编码的string\n    std::wstring_convert<std::codecvt_utf8_utf16<char16_t>, char16_t> converter;\n    std::string utf8Str = converter.to_bytes(u16Str);\n    for (size_t i = 0; i < utf8Str.size(); ++i) {\n        unsigned char c = static_cast<unsigned char>(utf8Str[i]);\n        if (c != 0x00) {\n            std::lock_guard<std::mutex> lock(g_textMutex);\n            g_strTextChar[g_strTextCharLen] = c;\n            g_strTextCharLen += 1;\n        }\n    }\n}\n\nvoid DeleteForwardFunc(InputMethod_TextEditorProxy *proxy, int32_t length)\n{\n    std::lock_guard<std::mutex> lock(g_textMutex);\n    if (g_strTextCharLen > 0) {\n        strncpy(g_strTextChar, g_strTextChar + 1, g_strTextCharLen - 1);\n        g_strTextCharLen = (g_strTextCharLen > 0) ? g_strTextCharLen - 1 : g_strTextCharLen;\n    }\n}\n\nvoid DeleteBackwardFunc(InputMethod_TextEditorProxy *proxy, int32_t length)\n{\n    std::lock_guard<std::mutex> lock(g_textMutex);\n    g_strTextCharLen = (g_strTextCharLen > 0) ? g_strTextCharLen - 1 : g_strTextCharLen;\n    g_strTextChar[g_strTextCharLen] = '\\0';\n}\n\nvoid SendKeyboardStatusFunc(InputMethod_TextEditorProxy *proxy, InputMethod_KeyboardStatus status)\n{\n    if (status == InputMethod_KeyboardStatus::IME_KEYBOARD_STATUS_HIDE) {\n        g_flagShow = false;\n        SetText(\"键盘已经被隐藏\");\n    } else if (status == InputMethod_KeyboardStatus::IME_KEYBOARD_STATUS_SHOW && g_flagShow != true) {\n        g_flagShow = true;\n        SetText(\"键盘已经被拉起\");\n    }\n}\n\nvoid SendEnterKeyFunc(InputMethod_TextEditorProxy *proxy, InputMethod_EnterKeyType type)\n{\n    SetText(\"处理回车键请求事件\");\n    g_flagShow = true;\n}\n\nvoid MoveCursorFunc(InputMethod_TextEditorProxy *proxy, InputMethod_Direction direction)\n{\n    if (direction == InputMethod_Direction::IME_DIRECTION_UP) {\n        SetText(\"光标正在向 上 移动\");\n    } else if (direction == InputMethod_Direction::IME_DIRECTION_DOWN) {\n        SetText(\"光标正在向 下 移动\");\n    } else if (direction == InputMethod_Direction::IME_DIRECTION_LEFT) {\n        SetText(\"光标正在向 左 移动\");\n    } else if (direction == InputMethod_Direction::IME_DIRECTION_RIGHT) {\n        SetText(\"光标正在向 右  移动\");\n    } else {\n        SetText(\"光标移动 出现错误\");\n    }\n}\n\nvoid HandleSetSelectionFunc(InputMethod_TextEditorProxy *proxy, int32_t start, int32_t end)\n{\n    SetText(\"处理选中文本请求\");\n}\n\nvoid HandleExtendActionFunc(InputMethod_TextEditorProxy *proxy, InputMethod_ExtendAction action)\n{\n    SetText(\"处理扩展编辑请求\");\n}\n\nvoid GetLeftTextOfCursorFunc(InputMethod_TextEditorProxy *proxy, int32_t number, char16_t text[], size_t *length)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0, \"testTag\", \"处理获取光标左侧文本请求  ...\");\n}\n\nvoid GetRightTextOfCursorFunc(InputMethod_TextEditorProxy *proxy, int32_t number, char16_t text[], size_t *length)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0, \"testTag\", \"处理获取光标右侧文本请求  ...\");\n}\n\nint32_t GetTextIndexAtCursorFunc(InputMethod_TextEditorProxy *proxy)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0, \"testTag\", \"处理获取光标所在输入框文本索引请求  ...\");\n    return 0;\n}\nint32_t ReceivePrivateCommandFunc(InputMethod_TextEditorProxy *proxy, InputMethod_PrivateCommand *privateCommand[],\n    size_t size)\n{\n    SetText(\"处理扩展编辑请求\");\n    return 0;\n}\n\nint32_t SetPreviewTextFunc(InputMethod_TextEditorProxy *proxy, const char16_t *text, size_t length, int32_t start,\n    int32_t end)\n{\n    SetText(\"处理设置预上屏文本请求\");\n    return 0;\n}\n\nvoid FinishTextPreviewFunc(InputMethod_TextEditorProxy *proxy)\n{\n    SetText(\"处理结束预上屏请求\");\n}\n\nvoid ConstructTextEditorProxy(InputMethod_TextEditorProxy *textEditorProxy)\n{\n    OH_TextEditorProxy_SetGetTextConfigFunc(textEditorProxy, GetTextConfigFunc);\n    OH_TextEditorProxy_SetInsertTextFunc(textEditorProxy, InsertTextFunc);\n    OH_TextEditorProxy_SetDeleteForwardFunc(textEditorProxy, DeleteForwardFunc);\n    OH_TextEditorProxy_SetDeleteBackwardFunc(textEditorProxy, DeleteBackwardFunc);\n    OH_TextEditorProxy_SetSendKeyboardStatusFunc(textEditorProxy, SendKeyboardStatusFunc);\n    OH_TextEditorProxy_SetSendEnterKeyFunc(textEditorProxy, SendEnterKeyFunc);\n    OH_TextEditorProxy_SetMoveCursorFunc(textEditorProxy, MoveCursorFunc);\n    OH_TextEditorProxy_SetHandleSetSelectionFunc(textEditorProxy, HandleSetSelectionFunc);\n    OH_TextEditorProxy_SetHandleExtendActionFunc(textEditorProxy, HandleExtendActionFunc);\n    OH_TextEditorProxy_SetGetLeftTextOfCursorFunc(textEditorProxy, GetLeftTextOfCursorFunc);\n    OH_TextEditorProxy_SetGetRightTextOfCursorFunc(textEditorProxy, GetRightTextOfCursorFunc);\n    OH_TextEditorProxy_SetGetTextIndexAtCursorFunc(textEditorProxy, GetTextIndexAtCursorFunc);\n    OH_TextEditorProxy_SetReceivePrivateCommandFunc(textEditorProxy, ReceivePrivateCommandFunc);\n    OH_TextEditorProxy_SetSetPreviewTextFunc(textEditorProxy, SetPreviewTextFunc);\n    OH_TextEditorProxy_SetFinishTextPreviewFunc(textEditorProxy, FinishTextPreviewFunc);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void InputMethodNdkDemo()\n{\n    // 创建InputMethod_TextEditorProxy实例\n    textEditorProxy = OH_TextEditorProxy_Create();\n    if (textEditorProxy == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 0, \"testTag\", \"Create TextEditorProxy failed.\");\n        return;\n    }\n\n    // 将实现好的响应处理函数设置到InputMethod_TextEditorProxy中\n    ConstructTextEditorProxy(textEditorProxy);\n\n    // 创建InputMethod_AttachOptions实例，选项showKeyboard用于指定此次绑定成功后是否显示键盘，此处以目标显示键盘为例\n    bool showKeyboard = true;\n    attachOptions = OH_AttachOptions_Create(showKeyboard);\n    if (attachOptions == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 0, \"testTag\", \"Create AttachOptions failed.\");\n        OH_TextEditorProxy_Destroy(textEditorProxy);\n        return;\n    }\n\n    // 发起绑定请求\n    auto ret = OH_InputMethodController_Attach(textEditorProxy, attachOptions, &inputMethodProxy);\n    if (ret != IME_ERR_OK) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 0, \"testTag\", \"Attach failed, ret=%{public}d.\", ret);\n        OH_TextEditorProxy_Destroy(textEditorProxy);\n        OH_AttachOptions_Destroy(attachOptions);\n        return;\n    }\n}\n\nstatic napi_value InputMethodDestroy(napi_env env, napi_callback_info info)\n{\n   // 隐藏键盘\n    int ret = OH_InputMethodProxy_HideKeyboard(inputMethodProxy);\n    if (ret != IME_ERR_OK) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, 0, \"testTag\", \"HideKeyboard failed, ret=%{public}d.\", ret);\n        OH_TextEditorProxy_Destroy(textEditorProxy);\n        OH_AttachOptions_Destroy(attachOptions);\n        return nullptr;\n    }\n\n    // 发起解绑请求\n    OH_InputMethodController_Detach(inputMethodProxy);\n    OH_TextEditorProxy_Destroy(textEditorProxy);\n    OH_AttachOptions_Destroy(attachOptions);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0, \"testTag\", \"Finished.\");\n    return nullptr;\n}\n\n\nstatic napi_value AttachInputMethod(napi_env env, napi_callback_info info)\n{\n    InputMethodNdkDemo();\n\n    napi_value result;\n    napi_create_string_utf8(env,  g_strText.c_str(),  g_strText.length(),  &result);\n    return result;\n}\n\nstatic napi_value GetText(napi_env env, napi_callback_info info)\n{\n    napi_value result;\n    napi_create_string_utf8(env, g_strTextChar, g_strTextCharLen,  &result);\n    return result;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"attachInputMethod\", nullptr, AttachInputMethod, nullptr, nullptr, nullptr, napi_default, nullptr },\n        { \"getText\", nullptr, GetText, nullptr, nullptr, nullptr, napi_default, nullptr },\n        { \"inputMethodDestroy\", nullptr, InputMethodDestroy, nullptr, nullptr, nullptr, napi_default, nullptr },\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);