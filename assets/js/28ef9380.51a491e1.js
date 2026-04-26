"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["823753"], {
385549(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ime_api_ime_c_ime_headerfile_capi_inputmethod_text_editor_proxy_capi_h_capi_inputmethod_text_editor_proxy_capi_h_md_28e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ime-api-ime-c-ime-headerfile-capi-inputmethod-text-editor-proxy-capi-h-capi-inputmethod-text-editor-proxy-capi-h-md-28e.json
var site_docs_ref_ime_api_ime_c_ime_headerfile_capi_inputmethod_text_editor_proxy_capi_h_capi_inputmethod_text_editor_proxy_capi_h_md_28e_namespaceObject = JSON.parse('{"id":"ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h","title":"inputmethod_text_editor_proxy_capi.h","description":"概述","source":"@site/docs-ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h.md","sourceDirName":"ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h","slug":"/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"inputmethod_text_editor_proxy_capi.h","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-text-editor-proxy-capi-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-inputmethod-text-editor-proxy-capi-h"},"sidebar":"ref","previous":{"title":"inputmethod_text_config_capi.h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-config-capi-h/capi-inputmethod-text-config-capi-h"},"next":{"title":"inputmethod_types_capi.h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h.md


const frontMatter = {
	title: 'inputmethod_text_editor_proxy_capi.h',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-text-editor-proxy-capi-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-inputmethod-text-editor-proxy-capi-h'
};
const contentTitle = 'inputmethod_text_editor_proxy_capi.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_TextEditorProxy_GetTextConfigFunc()",
  "id": "oh_texteditorproxy_gettextconfigfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_InsertTextFunc()",
  "id": "oh_texteditorproxy_inserttextfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_DeleteForwardFunc()",
  "id": "oh_texteditorproxy_deleteforwardfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_DeleteBackwardFunc()",
  "id": "oh_texteditorproxy_deletebackwardfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SendKeyboardStatusFunc()",
  "id": "oh_texteditorproxy_sendkeyboardstatusfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SendEnterKeyFunc()",
  "id": "oh_texteditorproxy_sendenterkeyfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_MoveCursorFunc()",
  "id": "oh_texteditorproxy_movecursorfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_HandleSetSelectionFunc()",
  "id": "oh_texteditorproxy_handlesetselectionfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_HandleExtendActionFunc()",
  "id": "oh_texteditorproxy_handleextendactionfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetLeftTextOfCursorFunc()",
  "id": "oh_texteditorproxy_getlefttextofcursorfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetRightTextOfCursorFunc()",
  "id": "oh_texteditorproxy_getrighttextofcursorfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetTextIndexAtCursorFunc()",
  "id": "oh_texteditorproxy_gettextindexatcursorfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_ReceivePrivateCommandFunc()",
  "id": "oh_texteditorproxy_receiveprivatecommandfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetPreviewTextFunc()",
  "id": "oh_texteditorproxy_setpreviewtextfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_FinishTextPreviewFunc()",
  "id": "oh_texteditorproxy_finishtextpreviewfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_Create()",
  "id": "oh_texteditorproxy_create",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_Destroy()",
  "id": "oh_texteditorproxy_destroy",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetGetTextConfigFunc()",
  "id": "oh_texteditorproxy_setgettextconfigfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetInsertTextFunc()",
  "id": "oh_texteditorproxy_setinserttextfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetDeleteForwardFunc()",
  "id": "oh_texteditorproxy_setdeleteforwardfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetDeleteBackwardFunc()",
  "id": "oh_texteditorproxy_setdeletebackwardfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetSendKeyboardStatusFunc()",
  "id": "oh_texteditorproxy_setsendkeyboardstatusfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetSendEnterKeyFunc()",
  "id": "oh_texteditorproxy_setsendenterkeyfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetMoveCursorFunc()",
  "id": "oh_texteditorproxy_setmovecursorfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetHandleSetSelectionFunc()",
  "id": "oh_texteditorproxy_sethandlesetselectionfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetHandleExtendActionFunc()",
  "id": "oh_texteditorproxy_sethandleextendactionfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetGetLeftTextOfCursorFunc()",
  "id": "oh_texteditorproxy_setgetlefttextofcursorfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetGetRightTextOfCursorFunc()",
  "id": "oh_texteditorproxy_setgetrighttextofcursorfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetGetTextIndexAtCursorFunc()",
  "id": "oh_texteditorproxy_setgettextindexatcursorfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetReceivePrivateCommandFunc()",
  "id": "oh_texteditorproxy_setreceiveprivatecommandfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetSetPreviewTextFunc()",
  "id": "oh_texteditorproxy_setsetpreviewtextfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetFinishTextPreviewFunc()",
  "id": "oh_texteditorproxy_setfinishtextpreviewfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetGetTextConfigFunc()",
  "id": "oh_texteditorproxy_getgettextconfigfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetInsertTextFunc()",
  "id": "oh_texteditorproxy_getinserttextfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetDeleteForwardFunc()",
  "id": "oh_texteditorproxy_getdeleteforwardfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetDeleteBackwardFunc()",
  "id": "oh_texteditorproxy_getdeletebackwardfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetSendKeyboardStatusFunc()",
  "id": "oh_texteditorproxy_getsendkeyboardstatusfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetSendEnterKeyFunc()",
  "id": "oh_texteditorproxy_getsendenterkeyfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetMoveCursorFunc()",
  "id": "oh_texteditorproxy_getmovecursorfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetHandleSetSelectionFunc()",
  "id": "oh_texteditorproxy_gethandlesetselectionfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetHandleExtendActionFunc()",
  "id": "oh_texteditorproxy_gethandleextendactionfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetGetLeftTextOfCursorFunc()",
  "id": "oh_texteditorproxy_getgetlefttextofcursorfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetGetRightTextOfCursorFunc()",
  "id": "oh_texteditorproxy_getgetrighttextofcursorfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetGetTextIndexAtCursorFunc()",
  "id": "oh_texteditorproxy_getgettextindexatcursorfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetReceivePrivateCommandFunc()",
  "id": "oh_texteditorproxy_getreceiveprivatecommandfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetSetPreviewTextFunc()",
  "id": "oh_texteditorproxy_getsetpreviewtextfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_GetFinishTextPreviewFunc()",
  "id": "oh_texteditorproxy_getfinishtextpreviewfunc",
  "level": 3
}, {
  "value": "OH_TextEditorProxy_SetCallbackInMainThread()",
  "id": "oh_texteditorproxy_setcallbackinmainthread",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "inputmethod_text_editor_proxy_capih",
        children: "inputmethod_text_editor_proxy_capi.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供一套方法支持应用开发的自绘输入框获取来自输入法应用的通知和请求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <inputmethod/inputmethod_text_editor_proxy_capi.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohinputmethod.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MiscServices.InputMethodFramework"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-module/capi-inputmethod/capi-inputmethod",
        children: "InputMethod"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputMethod_TextEditorProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框代理。提供了获取来自输入法应用的通知和请求的方法。当输入法向编辑器发送请求或通知时，这些方法将被调用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_gettextconfigfunc",
              children: "typedef void (*OH_TextEditorProxy_GetTextConfigFunc)(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_TextConfig *config)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_GetTextConfigFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法获取输入框配置时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setgettextconfigfunc",
              children: "OH_TextEditorProxy_SetGetTextConfigFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_inserttextfunc",
              children: "typedef void (*OH_TextEditorProxy_InsertTextFunc)(InputMethod_TextEditorProxy *textEditorProxy, const char16_t *text, size_t length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_InsertTextFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法应用插入文本时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setinserttextfunc",
              children: "OH_TextEditorProxy_SetInsertTextFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_deleteforwardfunc",
              children: "typedef void (*OH_TextEditorProxy_DeleteForwardFunc)(InputMethod_TextEditorProxy *textEditorProxy, int32_t length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_DeleteForwardFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法删除光标右侧文本时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setdeleteforwardfunc",
              children: "OH_TextEditorProxy_SetDeleteForwardFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_deletebackwardfunc",
              children: "typedef void (*OH_TextEditorProxy_DeleteBackwardFunc)(InputMethod_TextEditorProxy *textEditorProxy, int32_t length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_DeleteBackwardFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法删除光标左侧文本时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setdeletebackwardfunc",
              children: "OH_TextEditorProxy_SetDeleteBackwardFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_sendkeyboardstatusfunc",
              children: "typedef void (*OH_TextEditorProxy_SendKeyboardStatusFunc)(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_KeyboardStatus keyboardStatus)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_SendKeyboardStatusFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法通知键盘状态时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setsendkeyboardstatusfunc",
              children: "OH_TextEditorProxy_SetSendKeyboardStatusFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_sendenterkeyfunc",
              children: "typedef void (*OH_TextEditorProxy_SendEnterKeyFunc)(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_EnterKeyType enterKeyType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_SendEnterKeyFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法发送回车键时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setsendenterkeyfunc",
              children: "OH_TextEditorProxy_SetSendEnterKeyFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_movecursorfunc",
              children: "typedef void (*OH_TextEditorProxy_MoveCursorFunc)(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_Direction direction)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_MoveCursorFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法移动光标时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setmovecursorfunc",
              children: "OH_TextEditorProxy_SetMoveCursorFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_handlesetselectionfunc",
              children: "typedef void (*OH_TextEditorProxy_HandleSetSelectionFunc)(InputMethod_TextEditorProxy *textEditorProxy, int32_t start, int32_t end)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_HandleSetSelectionFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法请求选中文本时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sethandlesetselectionfunc",
              children: "OH_TextEditorProxy_SetHandleSetSelectionFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_handleextendactionfunc",
              children: "typedef void (*OH_TextEditorProxy_HandleExtendActionFunc)(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_ExtendAction action)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_HandleExtendActionFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法发送扩展编辑操作时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sethandleextendactionfunc",
              children: "OH_TextEditorProxy_SetHandleExtendActionFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getlefttextofcursorfunc",
              children: "typedef void (*OH_TextEditorProxy_GetLeftTextOfCursorFunc)(InputMethod_TextEditorProxy *textEditorProxy, int32_t number, char16_t text[], size_t *length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_GetLeftTextOfCursorFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法获取光标左侧文本时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setgetlefttextofcursorfunc",
              children: "OH_TextEditorProxy_SetGetLeftTextOfCursorFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getrighttextofcursorfunc",
              children: "typedef void (*OH_TextEditorProxy_GetRightTextOfCursorFunc)(InputMethod_TextEditorProxy *textEditorProxy, int32_t number, char16_t text[], size_t *length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_GetRightTextOfCursorFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法获取光标右侧文本时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setgetrighttextofcursorfunc",
              children: "OH_TextEditorProxy_SetGetRightTextOfCursorFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_gettextindexatcursorfunc",
              children: "typedef int32_t (*OH_TextEditorProxy_GetTextIndexAtCursorFunc)(InputMethod_TextEditorProxy *textEditorProxy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_GetTextIndexAtCursorFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法获取光标所在输入框文本索引时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setgettextindexatcursorfunc",
              children: "OH_TextEditorProxy_SetGetTextIndexAtCursorFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_receiveprivatecommandfunc",
              children: "typedef int32_t (*OH_TextEditorProxy_ReceivePrivateCommandFunc)(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_PrivateCommand *privateCommand[], size_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_ReceivePrivateCommandFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法应用发送私有数据命令时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setreceiveprivatecommandfunc",
              children: "OH_TextEditorProxy_SetReceivePrivateCommandFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setpreviewtextfunc",
              children: "typedef int32_t (*OH_TextEditorProxy_SetPreviewTextFunc)(InputMethod_TextEditorProxy *textEditorProxy, const char16_t text[], size_t length, int32_t start, int32_t end)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_SetPreviewTextFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法设置预上屏文本时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setsetpreviewtextfunc",
              children: "OH_TextEditorProxy_SetSetPreviewTextFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_finishtextpreviewfunc",
              children: "typedef void (*OH_TextEditorProxy_FinishTextPreviewFunc)(InputMethod_TextEditorProxy *textEditorProxy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_TextEditorProxy_FinishTextPreviewFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入法结束预上屏时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setfinishtextpreviewfunc",
              children: "OH_TextEditorProxy_SetFinishTextPreviewFunc"
            }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "完成注册。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_create",
              children: "InputMethod_TextEditorProxy *OH_TextEditorProxy_Create(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个新的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_destroy",
              children: "void OH_TextEditorProxy_Destroy(InputMethod_TextEditorProxy *proxy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setgettextconfigfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetGetTextConfigFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetTextConfigFunc getTextConfigFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextconfigfunc",
              children: "OH_TextEditorProxy_GetTextConfigFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setinserttextfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetInsertTextFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_InsertTextFunc insertTextFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_inserttextfunc",
              children: "OH_TextEditorProxy_InsertTextFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setdeleteforwardfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetDeleteForwardFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_DeleteForwardFunc deleteForwardFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deleteforwardfunc",
              children: "OH_TextEditorProxy_DeleteForwardFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setdeletebackwardfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetDeleteBackwardFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_DeleteBackwardFunc deleteBackwardFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deletebackwardfunc",
              children: "OH_TextEditorProxy_DeleteBackwardFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setsendkeyboardstatusfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetSendKeyboardStatusFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_SendKeyboardStatusFunc sendKeyboardStatusFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sendkeyboardstatusfunc",
              children: "OH_TextEditorProxy_SendKeyboardStatusFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setsendenterkeyfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetSendEnterKeyFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_SendEnterKeyFunc sendEnterKeyFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setsendenterkeyfunc",
              children: "OH_TextEditorProxy_SetSendEnterKeyFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setmovecursorfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetMoveCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_MoveCursorFunc moveCursorFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setmovecursorfunc",
              children: "OH_TextEditorProxy_SetMoveCursorFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_sethandlesetselectionfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetHandleSetSelectionFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_HandleSetSelectionFunc handleSetSelectionFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handlesetselectionfunc",
              children: "OH_TextEditorProxy_HandleSetSelectionFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_sethandleextendactionfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetHandleExtendActionFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_HandleExtendActionFunc handleExtendActionFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handleextendactionfunc",
              children: "OH_TextEditorProxy_HandleExtendActionFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setgetlefttextofcursorfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetGetLeftTextOfCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetLeftTextOfCursorFunc getLeftTextOfCursorFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getlefttextofcursorfunc",
              children: "OH_TextEditorProxy_GetLeftTextOfCursorFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setgetrighttextofcursorfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetGetRightTextOfCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetRightTextOfCursorFunc getRightTextOfCursorFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getrighttextofcursorfunc",
              children: "OH_TextEditorProxy_GetRightTextOfCursorFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setgettextindexatcursorfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetGetTextIndexAtCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetTextIndexAtCursorFunc getTextIndexAtCursorFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextindexatcursorfunc",
              children: "OH_TextEditorProxy_GetTextIndexAtCursorFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setreceiveprivatecommandfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetReceivePrivateCommandFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_ReceivePrivateCommandFunc receivePrivateCommandFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_receiveprivatecommandfunc",
              children: "OH_TextEditorProxy_ReceivePrivateCommandFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setsetpreviewtextfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetSetPreviewTextFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_SetPreviewTextFunc setPreviewTextFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setpreviewtextfunc",
              children: "OH_TextEditorProxy_SetPreviewTextFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_setfinishtextpreviewfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_SetFinishTextPreviewFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_FinishTextPreviewFunc finishTextPreviewFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_finishtextpreviewfunc",
              children: "OH_TextEditorProxy_FinishTextPreviewFunc"
            }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getgettextconfigfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetGetTextConfigFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetTextConfigFunc *getTextConfigFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextconfigfunc",
              children: "OH_TextEditorProxy_GetTextConfigFunc"
            }), "函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getinserttextfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetInsertTextFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_InsertTextFunc *insertTextFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_inserttextfunc",
              children: "OH_TextEditorProxy_InsertTextFunc"
            }), "函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getdeleteforwardfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetDeleteForwardFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_DeleteForwardFunc *deleteForwardFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deleteforwardfunc",
              children: "OH_TextEditorProxy_DeleteForwardFunc"
            }), "函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getdeletebackwardfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetDeleteBackwardFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_DeleteBackwardFunc *deleteBackwardFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deletebackwardfunc",
              children: "OH_TextEditorProxy_DeleteBackwardFunc"
            }), "函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getsendkeyboardstatusfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetSendKeyboardStatusFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_SendKeyboardStatusFunc *sendKeyboardStatusFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sendkeyboardstatusfunc",
              children: "OH_TextEditorProxy_SendKeyboardStatusFunc"
            }), "函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getsendenterkeyfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetSendEnterKeyFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_SendEnterKeyFunc *sendEnterKeyFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sendenterkeyfunc",
              children: "OH_TextEditorProxy_SendEnterKeyFunc"
            }), "函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getmovecursorfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetMoveCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_MoveCursorFunc *moveCursorFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_movecursorfunc",
              children: "OH_TextEditorProxy_MoveCursorFunc"
            }), "函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_gethandlesetselectionfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetHandleSetSelectionFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_HandleSetSelectionFunc *handleSetSelectionFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handlesetselectionfunc",
              children: "OH_TextEditorProxy_HandleSetSelectionFunc"
            }), "函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_gethandleextendactionfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetHandleExtendActionFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_HandleExtendActionFunc *handleExtendActionFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handleextendactionfunc",
              children: "OH_TextEditorProxy_HandleExtendActionFunc"
            }), "函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getgetlefttextofcursorfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetGetLeftTextOfCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetLeftTextOfCursorFunc *getLeftTextOfCursorFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getlefttextofcursorfunc",
              children: "OH_TextEditorProxy_GetLeftTextOfCursorFunc"
            }), "函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getgetrighttextofcursorfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetGetRightTextOfCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetRightTextOfCursorFunc *getRightTextOfCursorFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getrighttextofcursorfunc",
              children: "OH_TextEditorProxy_GetRightTextOfCursorFunc"
            }), "函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getgettextindexatcursorfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetGetTextIndexAtCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetTextIndexAtCursorFunc *getTextIndexAtCursorFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextindexatcursorfunc",
              children: "OH_TextEditorProxy_GetTextIndexAtCursorFunc"
            }), "函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getreceiveprivatecommandfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetReceivePrivateCommandFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_ReceivePrivateCommandFunc *receivePrivateCommandFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_receiveprivatecommandfunc",
              children: "OH_TextEditorProxy_ReceivePrivateCommandFunc"
            }), "函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getsetpreviewtextfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetSetPreviewTextFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_SetPreviewTextFunc *setPreviewTextFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setpreviewtextfunc",
              children: "OH_TextEditorProxy_SetPreviewTextFunc"
            }), "函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_texteditorproxy_getfinishtextpreviewfunc",
              children: "InputMethod_ErrorCode OH_TextEditorProxy_GetFinishTextPreviewFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_FinishTextPreviewFunc *finishTextPreviewFunc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_finishtextpreviewfunc",
              children: "OH_TextEditorProxy_FinishTextPreviewFunc"
            }), "函数。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_gettextconfigfunc",
      children: "OH_TextEditorProxy_GetTextConfigFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_TextEditorProxy_GetTextConfigFunc)(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_TextConfig *config)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法获取输入框配置时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setgettextconfigfunc",
        children: "OH_TextEditorProxy_SetGetTextConfigFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textconfig/capi-inputmethod-inputmethod-textconfig",
              children: "InputMethod_TextConfig"
            }), " *config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-textconfig/capi-inputmethod-inputmethod-textconfig",
              children: "InputMethod_TextConfig"
            }), "实例的指针。只能在此回调接口被调用时访问该指针指向的内存，当此回调接口返回后，该内存将会被释放，不能再访问。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_inserttextfunc",
      children: "OH_TextEditorProxy_InsertTextFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_TextEditorProxy_InsertTextFunc)(InputMethod_TextEditorProxy *textEditorProxy, const char16_t *text, size_t length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法应用插入文本时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setinserttextfunc",
        children: "OH_TextEditorProxy_SetInsertTextFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。in."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char16_t *text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "插入的字符。只能在此回调接口被调用时访问该指针指向的内存，当此回调接口返回后，该内存将会被释放，不能再访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "插入字符的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_deleteforwardfunc",
      children: "OH_TextEditorProxy_DeleteForwardFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_TextEditorProxy_DeleteForwardFunc)(InputMethod_TextEditorProxy *textEditorProxy, int32_t length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法删除光标右侧文本时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setdeleteforwardfunc",
        children: "OH_TextEditorProxy_SetDeleteForwardFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要删除字符的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_deletebackwardfunc",
      children: "OH_TextEditorProxy_DeleteBackwardFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_TextEditorProxy_DeleteBackwardFunc)(InputMethod_TextEditorProxy *textEditorProxy, int32_t length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法删除光标左侧文本时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setdeletebackwardfunc",
        children: "OH_TextEditorProxy_SetDeleteBackwardFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要删除字符的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_sendkeyboardstatusfunc",
      children: "OH_TextEditorProxy_SendKeyboardStatusFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_TextEditorProxy_SendKeyboardStatusFunc)(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_KeyboardStatus keyboardStatus)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法通知键盘状态时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setsendkeyboardstatusfunc",
        children: "OH_TextEditorProxy_SetSendKeyboardStatusFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_keyboardstatus",
              children: "InputMethod_KeyboardStatus"
            }), " keyboardStatus"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["键盘状态，具体定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_keyboardstatus",
              children: "InputMethod_KeyboardStatus"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_sendenterkeyfunc",
      children: "OH_TextEditorProxy_SendEnterKeyFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_TextEditorProxy_SendEnterKeyFunc)(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_EnterKeyType enterKeyType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法发送回车键时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setsendenterkeyfunc",
        children: "OH_TextEditorProxy_SetSendEnterKeyFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_enterkeytype",
              children: "InputMethod_EnterKeyType"
            }), " enterKeyType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回车键类型，具体定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_enterkeytype",
              children: "InputMethod_EnterKeyType"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_movecursorfunc",
      children: "OH_TextEditorProxy_MoveCursorFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_TextEditorProxy_MoveCursorFunc)(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_Direction direction)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法移动光标时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setmovecursorfunc",
        children: "OH_TextEditorProxy_SetMoveCursorFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_direction",
              children: "InputMethod_Direction"
            }), " direction"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["光标移动方向，具体定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_direction",
              children: "InputMethod_Direction"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_handlesetselectionfunc",
      children: "OH_TextEditorProxy_HandleSetSelectionFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_TextEditorProxy_HandleSetSelectionFunc)(InputMethod_TextEditorProxy *textEditorProxy, int32_t start, int32_t end)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法请求选中文本时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sethandlesetselectionfunc",
        children: "OH_TextEditorProxy_SetHandleSetSelectionFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示选中文本的起始位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示选中文本的结束位置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_handleextendactionfunc",
      children: "OH_TextEditorProxy_HandleExtendActionFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_TextEditorProxy_HandleExtendActionFunc)(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_ExtendAction action)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法发送扩展编辑操作时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sethandleextendactionfunc",
        children: "OH_TextEditorProxy_SetHandleExtendActionFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_extendaction",
              children: "InputMethod_ExtendAction"
            }), " action"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展编辑操作，具体定义详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_extendaction",
              children: "InputMethod_ExtendAction"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getlefttextofcursorfunc",
      children: "OH_TextEditorProxy_GetLeftTextOfCursorFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_TextEditorProxy_GetLeftTextOfCursorFunc)(InputMethod_TextEditorProxy *textEditorProxy, int32_t number, char16_t text[], size_t *length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法获取光标左侧文本时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setgetlefttextofcursorfunc",
        children: "OH_TextEditorProxy_SetGetLeftTextOfCursorFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标获取文本的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char16_t text[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标左侧指定长度的文本内容，需要在函数实现中对它赋值。只能在此回调接口被调用时访问该指针指向的内存，当此回调接口返回后，该内存将会被释放，不能再访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示游标左侧文本的长度，您需要传递此参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getrighttextofcursorfunc",
      children: "OH_TextEditorProxy_GetRightTextOfCursorFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_TextEditorProxy_GetRightTextOfCursorFunc)(InputMethod_TextEditorProxy *textEditorProxy, int32_t number, char16_t text[], size_t *length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法获取光标右侧文本时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setgetrighttextofcursorfunc",
        children: "OH_TextEditorProxy_SetGetRightTextOfCursorFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标获取文本的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char16_t text[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标右侧指定长度的文本内容，需要在函数实现中对它赋值。只能在此回调接口被调用时访问该指针指向的内存，当此回调接口返回后，该内存将会被释放，不能再访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示游标右侧文本的长度，您需要传递此参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_gettextindexatcursorfunc",
      children: "OH_TextEditorProxy_GetTextIndexAtCursorFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef int32_t (*OH_TextEditorProxy_GetTextIndexAtCursorFunc)(InputMethod_TextEditorProxy *textEditorProxy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法获取光标所在输入框文本索引时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setgettextindexatcursorfunc",
        children: "OH_TextEditorProxy_SetGetTextIndexAtCursorFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回光标所在输入框文本索引。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_receiveprivatecommandfunc",
      children: "OH_TextEditorProxy_ReceivePrivateCommandFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef int32_t (*OH_TextEditorProxy_ReceivePrivateCommandFunc)(InputMethod_TextEditorProxy *textEditorProxy, InputMethod_PrivateCommand *privateCommand[], size_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法应用发送私有数据命令时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setreceiveprivatecommandfunc",
        children: "OH_TextEditorProxy_SetReceivePrivateCommandFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), " *privateCommand[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "私有数据命令。只能在此回调接口被调用时访问该指针指向的内存，当此回调接口返回后，该内存将会被释放，不能再访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "私有数据的大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回对私有数据命令处理的处理结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setpreviewtextfunc",
      children: "OH_TextEditorProxy_SetPreviewTextFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef int32_t (*OH_TextEditorProxy_SetPreviewTextFunc)(InputMethod_TextEditorProxy *textEditorProxy, const char16_t text[], size_t length, int32_t start, int32_t end)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法设置预上屏文本时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_texteditorproxy_setsetpreviewtextfunc",
        children: "OH_TextEditorProxy_SetSetPreviewTextFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char16_t text[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求设置为预上屏样式的文本内容。只能在此回调接口被调用时访问该指针指向的内存，当此回调接口返回后，该内存将会被释放，不能再访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预上屏文本长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预上屏文本起始光标位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预上屏文本结束光标位置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回设置预上屏文本的处理结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_finishtextpreviewfunc",
      children: "OH_TextEditorProxy_FinishTextPreviewFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_TextEditorProxy_FinishTextPreviewFunc)(InputMethod_TextEditorProxy *textEditorProxy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入法结束预上屏时触发的函数。您需要实现此函数，通过 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_texteditorproxy_setfinishtextpreviewfunc",
        children: "OH_TextEditorProxy_SetFinishTextPreviewFunc"
      }), " 将它设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中， 并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "完成注册。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_create",
      children: "OH_TextEditorProxy_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_TextEditorProxy *OH_TextEditorProxy_Create(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个新的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果创建成功，返回一个指向新创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。  如果创建失败，对象返回NULL，可能的失败原因有应用地址空间满。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_destroy",
      children: "OH_TextEditorProxy_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_TextEditorProxy_Destroy(InputMethod_TextEditorProxy *proxy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向即将被销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setgettextconfigfunc",
      children: "OH_TextEditorProxy_SetGetTextConfigFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetGetTextConfigFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetTextConfigFunc getTextConfigFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextconfigfunc",
        children: "OH_TextEditorProxy_GetTextConfigFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextconfigfunc",
              children: "OH_TextEditorProxy_GetTextConfigFunc"
            }), " getTextConfigFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextconfigfunc",
              children: "OH_TextEditorProxy_GetTextConfigFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setinserttextfunc",
      children: "OH_TextEditorProxy_SetInsertTextFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetInsertTextFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_InsertTextFunc insertTextFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_inserttextfunc",
        children: "OH_TextEditorProxy_InsertTextFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_inserttextfunc",
              children: "OH_TextEditorProxy_InsertTextFunc"
            }), " insertTextFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_inserttextfunc",
              children: "OH_TextEditorProxy_InsertTextFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setdeleteforwardfunc",
      children: "OH_TextEditorProxy_SetDeleteForwardFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetDeleteForwardFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_DeleteForwardFunc deleteForwardFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deleteforwardfunc",
        children: "OH_TextEditorProxy_DeleteForwardFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deleteforwardfunc",
              children: "OH_TextEditorProxy_DeleteForwardFunc"
            }), " deleteForwardFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deleteforwardfunc",
              children: "OH_TextEditorProxy_DeleteForwardFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setdeletebackwardfunc",
      children: "OH_TextEditorProxy_SetDeleteBackwardFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetDeleteBackwardFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_DeleteBackwardFunc deleteBackwardFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deletebackwardfunc",
        children: "OH_TextEditorProxy_DeleteBackwardFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deletebackwardfunc",
              children: "OH_TextEditorProxy_DeleteBackwardFunc"
            }), " deleteBackwardFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deletebackwardfunc",
              children: "OH_TextEditorProxy_DeleteBackwardFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setsendkeyboardstatusfunc",
      children: "OH_TextEditorProxy_SetSendKeyboardStatusFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetSendKeyboardStatusFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_SendKeyboardStatusFunc sendKeyboardStatusFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sendkeyboardstatusfunc",
        children: "OH_TextEditorProxy_SendKeyboardStatusFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sendkeyboardstatusfunc",
              children: "OH_TextEditorProxy_SendKeyboardStatusFunc"
            }), " sendKeyboardStatusFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sendkeyboardstatusfunc",
              children: "OH_TextEditorProxy_SendKeyboardStatusFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setsendenterkeyfunc",
      children: "OH_TextEditorProxy_SetSendEnterKeyFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetSendEnterKeyFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_SendEnterKeyFunc sendEnterKeyFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setsendenterkeyfunc",
        children: "OH_TextEditorProxy_SetSendEnterKeyFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sendenterkeyfunc",
              children: "OH_TextEditorProxy_SendEnterKeyFunc"
            }), " sendEnterKeyFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sendenterkeyfunc",
              children: "OH_TextEditorProxy_SendEnterKeyFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setmovecursorfunc",
      children: "OH_TextEditorProxy_SetMoveCursorFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetMoveCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_MoveCursorFunc moveCursorFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setmovecursorfunc",
        children: "OH_TextEditorProxy_SetMoveCursorFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_movecursorfunc",
              children: "OH_TextEditorProxy_MoveCursorFunc"
            }), " moveCursorFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_movecursorfunc",
              children: "OH_TextEditorProxy_MoveCursorFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_sethandlesetselectionfunc",
      children: "OH_TextEditorProxy_SetHandleSetSelectionFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetHandleSetSelectionFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_HandleSetSelectionFunc handleSetSelectionFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handlesetselectionfunc",
        children: "OH_TextEditorProxy_HandleSetSelectionFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handlesetselectionfunc",
              children: "OH_TextEditorProxy_HandleSetSelectionFunc"
            }), " handleSetSelectionFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handlesetselectionfunc",
              children: "OH_TextEditorProxy_HandleSetSelectionFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_sethandleextendactionfunc",
      children: "OH_TextEditorProxy_SetHandleExtendActionFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetHandleExtendActionFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_HandleExtendActionFunc handleExtendActionFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handleextendactionfunc",
        children: "OH_TextEditorProxy_HandleExtendActionFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handleextendactionfunc",
              children: "OH_TextEditorProxy_HandleExtendActionFunc"
            }), " handleExtendActionFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handleextendactionfunc",
              children: "OH_TextEditorProxy_HandleExtendActionFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setgetlefttextofcursorfunc",
      children: "OH_TextEditorProxy_SetGetLeftTextOfCursorFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetGetLeftTextOfCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetLeftTextOfCursorFunc getLeftTextOfCursorFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getlefttextofcursorfunc",
        children: "OH_TextEditorProxy_GetLeftTextOfCursorFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getlefttextofcursorfunc",
              children: "OH_TextEditorProxy_GetLeftTextOfCursorFunc"
            }), " getLeftTextOfCursorFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getlefttextofcursorfunc",
              children: "OH_TextEditorProxy_GetLeftTextOfCursorFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setgetrighttextofcursorfunc",
      children: "OH_TextEditorProxy_SetGetRightTextOfCursorFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetGetRightTextOfCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetRightTextOfCursorFunc getRightTextOfCursorFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getrighttextofcursorfunc",
        children: "OH_TextEditorProxy_GetRightTextOfCursorFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getrighttextofcursorfunc",
              children: "OH_TextEditorProxy_GetRightTextOfCursorFunc"
            }), " getRightTextOfCursorFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getrighttextofcursorfunc",
              children: "OH_TextEditorProxy_GetRightTextOfCursorFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setgettextindexatcursorfunc",
      children: "OH_TextEditorProxy_SetGetTextIndexAtCursorFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetGetTextIndexAtCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetTextIndexAtCursorFunc getTextIndexAtCursorFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextindexatcursorfunc",
        children: "OH_TextEditorProxy_GetTextIndexAtCursorFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextindexatcursorfunc",
              children: "OH_TextEditorProxy_GetTextIndexAtCursorFunc"
            }), " getTextIndexAtCursorFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextindexatcursorfunc",
              children: "OH_TextEditorProxy_GetTextIndexAtCursorFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setreceiveprivatecommandfunc",
      children: "OH_TextEditorProxy_SetReceivePrivateCommandFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetReceivePrivateCommandFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_ReceivePrivateCommandFunc receivePrivateCommandFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_receiveprivatecommandfunc",
        children: "OH_TextEditorProxy_ReceivePrivateCommandFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_receiveprivatecommandfunc",
              children: "OH_TextEditorProxy_ReceivePrivateCommandFunc"
            }), " receivePrivateCommandFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_receiveprivatecommandfunc",
              children: "OH_TextEditorProxy_ReceivePrivateCommandFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setsetpreviewtextfunc",
      children: "OH_TextEditorProxy_SetSetPreviewTextFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetSetPreviewTextFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_SetPreviewTextFunc setPreviewTextFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setpreviewtextfunc",
        children: "OH_TextEditorProxy_SetPreviewTextFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setpreviewtextfunc",
              children: "OH_TextEditorProxy_SetPreviewTextFunc"
            }), " setPreviewTextFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setpreviewtextfunc",
              children: "OH_TextEditorProxy_SetPreviewTextFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setfinishtextpreviewfunc",
      children: "OH_TextEditorProxy_SetFinishTextPreviewFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetFinishTextPreviewFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_FinishTextPreviewFunc finishTextPreviewFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_finishtextpreviewfunc",
        children: "OH_TextEditorProxy_FinishTextPreviewFunc"
      }), "设置到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向即将被设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_finishtextpreviewfunc",
              children: "OH_TextEditorProxy_FinishTextPreviewFunc"
            }), " finishTextPreviewFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示被设置到proxy的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_finishtextpreviewfunc",
              children: "OH_TextEditorProxy_FinishTextPreviewFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getgettextconfigfunc",
      children: "OH_TextEditorProxy_GetGetTextConfigFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetGetTextConfigFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetTextConfigFunc *getTextConfigFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextconfigfunc",
        children: "OH_TextEditorProxy_GetTextConfigFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextconfigfunc",
              children: "OH_TextEditorProxy_GetTextConfigFunc"
            }), " *getTextConfigFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextconfigfunc",
              children: "OH_TextEditorProxy_GetTextConfigFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getinserttextfunc",
      children: "OH_TextEditorProxy_GetInsertTextFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetInsertTextFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_InsertTextFunc *insertTextFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_inserttextfunc",
        children: "OH_TextEditorProxy_InsertTextFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_inserttextfunc",
              children: "OH_TextEditorProxy_InsertTextFunc"
            }), " *insertTextFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_inserttextfunc",
              children: "OH_TextEditorProxy_InsertTextFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getdeleteforwardfunc",
      children: "OH_TextEditorProxy_GetDeleteForwardFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetDeleteForwardFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_DeleteForwardFunc *deleteForwardFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deleteforwardfunc",
        children: "OH_TextEditorProxy_DeleteForwardFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deleteforwardfunc",
              children: "OH_TextEditorProxy_DeleteForwardFunc"
            }), " *deleteForwardFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deleteforwardfunc",
              children: "OH_TextEditorProxy_DeleteForwardFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getdeletebackwardfunc",
      children: "OH_TextEditorProxy_GetDeleteBackwardFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetDeleteBackwardFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_DeleteBackwardFunc *deleteBackwardFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deletebackwardfunc",
        children: "OH_TextEditorProxy_DeleteBackwardFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deletebackwardfunc",
              children: "OH_TextEditorProxy_DeleteBackwardFunc"
            }), " *deleteBackwardFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_deletebackwardfunc",
              children: "OH_TextEditorProxy_DeleteBackwardFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getsendkeyboardstatusfunc",
      children: "OH_TextEditorProxy_GetSendKeyboardStatusFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetSendKeyboardStatusFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_SendKeyboardStatusFunc *sendKeyboardStatusFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sendkeyboardstatusfunc",
        children: "OH_TextEditorProxy_SendKeyboardStatusFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sendkeyboardstatusfunc",
              children: "OH_TextEditorProxy_SendKeyboardStatusFunc"
            }), " *sendKeyboardStatusFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sendkeyboardstatusfunc",
              children: "OH_TextEditorProxy_SendKeyboardStatusFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getsendenterkeyfunc",
      children: "OH_TextEditorProxy_GetSendEnterKeyFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetSendEnterKeyFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_SendEnterKeyFunc *sendEnterKeyFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sendenterkeyfunc",
        children: "OH_TextEditorProxy_SendEnterKeyFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sendenterkeyfunc",
              children: "OH_TextEditorProxy_SendEnterKeyFunc"
            }), " *sendEnterKeyFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_sendenterkeyfunc",
              children: "OH_TextEditorProxy_SendEnterKeyFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getmovecursorfunc",
      children: "OH_TextEditorProxy_GetMoveCursorFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetMoveCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_MoveCursorFunc *moveCursorFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_movecursorfunc",
        children: "OH_TextEditorProxy_MoveCursorFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_movecursorfunc",
              children: "OH_TextEditorProxy_MoveCursorFunc"
            }), " *moveCursorFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_movecursorfunc",
              children: "OH_TextEditorProxy_MoveCursorFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_gethandlesetselectionfunc",
      children: "OH_TextEditorProxy_GetHandleSetSelectionFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetHandleSetSelectionFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_HandleSetSelectionFunc *handleSetSelectionFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handlesetselectionfunc",
        children: "OH_TextEditorProxy_HandleSetSelectionFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handlesetselectionfunc",
              children: "OH_TextEditorProxy_HandleSetSelectionFunc"
            }), " *handleSetSelectionFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handlesetselectionfunc",
              children: "OH_TextEditorProxy_HandleSetSelectionFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_gethandleextendactionfunc",
      children: "OH_TextEditorProxy_GetHandleExtendActionFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetHandleExtendActionFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_HandleExtendActionFunc *handleExtendActionFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handleextendactionfunc",
        children: "OH_TextEditorProxy_HandleExtendActionFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handleextendactionfunc",
              children: "OH_TextEditorProxy_HandleExtendActionFunc"
            }), " *handleExtendActionFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_handleextendactionfunc",
              children: "OH_TextEditorProxy_HandleExtendActionFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getgetlefttextofcursorfunc",
      children: "OH_TextEditorProxy_GetGetLeftTextOfCursorFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetGetLeftTextOfCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetLeftTextOfCursorFunc *getLeftTextOfCursorFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getlefttextofcursorfunc",
        children: "OH_TextEditorProxy_GetLeftTextOfCursorFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getlefttextofcursorfunc",
              children: "OH_TextEditorProxy_GetLeftTextOfCursorFunc"
            }), " *getLeftTextOfCursorFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getlefttextofcursorfunc",
              children: "OH_TextEditorProxy_GetLeftTextOfCursorFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getgetrighttextofcursorfunc",
      children: "OH_TextEditorProxy_GetGetRightTextOfCursorFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetGetRightTextOfCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetRightTextOfCursorFunc *getRightTextOfCursorFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getrighttextofcursorfunc",
        children: "OH_TextEditorProxy_GetRightTextOfCursorFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getrighttextofcursorfunc",
              children: "OH_TextEditorProxy_GetRightTextOfCursorFunc"
            }), " *getRightTextOfCursorFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_getrighttextofcursorfunc",
              children: "OH_TextEditorProxy_GetRightTextOfCursorFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getgettextindexatcursorfunc",
      children: "OH_TextEditorProxy_GetGetTextIndexAtCursorFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetGetTextIndexAtCursorFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_GetTextIndexAtCursorFunc *getTextIndexAtCursorFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextindexatcursorfunc",
        children: "OH_TextEditorProxy_GetTextIndexAtCursorFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextindexatcursorfunc",
              children: "OH_TextEditorProxy_GetTextIndexAtCursorFunc"
            }), " *getTextIndexAtCursorFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextindexatcursorfunc",
              children: "OH_TextEditorProxy_GetTextIndexAtCursorFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getreceiveprivatecommandfunc",
      children: "OH_TextEditorProxy_GetReceivePrivateCommandFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetReceivePrivateCommandFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_ReceivePrivateCommandFunc *receivePrivateCommandFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_receiveprivatecommandfunc",
        children: "OH_TextEditorProxy_ReceivePrivateCommandFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_receiveprivatecommandfunc",
              children: "OH_TextEditorProxy_ReceivePrivateCommandFunc"
            }), " *receivePrivateCommandFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_receiveprivatecommandfunc",
              children: "OH_TextEditorProxy_ReceivePrivateCommandFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getsetpreviewtextfunc",
      children: "OH_TextEditorProxy_GetSetPreviewTextFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetSetPreviewTextFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_SetPreviewTextFunc *setPreviewTextFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setpreviewtextfunc",
        children: "OH_TextEditorProxy_SetPreviewTextFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setpreviewtextfunc",
              children: "OH_TextEditorProxy_SetPreviewTextFunc"
            }), " *setPreviewTextFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_setpreviewtextfunc",
              children: "OH_TextEditorProxy_SetPreviewTextFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_getfinishtextpreviewfunc",
      children: "OH_TextEditorProxy_GetFinishTextPreviewFunc()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_GetFinishTextPreviewFunc(InputMethod_TextEditorProxy *proxy, OH_TextEditorProxy_FinishTextPreviewFunc *finishTextPreviewFunc)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
        children: "InputMethod_TextEditorProxy"
      }), "中获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_finishtextpreviewfunc",
        children: "OH_TextEditorProxy_FinishTextPreviewFunc"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向被读取的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_finishtextpreviewfunc",
              children: "OH_TextEditorProxy_FinishTextPreviewFunc"
            }), " *finishTextPreviewFunc"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示从proxy获取到的函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_finishtextpreviewfunc",
              children: "OH_TextEditorProxy_FinishTextPreviewFunc"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回一个特定的错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 表示成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_texteditorproxy_setcallbackinmainthread",
      children: "OH_TextEditorProxy_SetCallbackInMainThread()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_TextEditorProxy_SetCallbackInMainThread(InputMethod_TextEditorProxy *proxy, bool isCallbackInMainThread)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为InputMethod_TextEditorProxy的回调函数配置执行线程（主线程/IPC线程）。本接口仅控制InputMethod_TextEditorProxy中除", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextconfigfunc",
        children: "OH_TextEditorProxy_GetTextConfigFunc"
      }), "之外的所有回调函数。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_gettextconfigfunc",
        children: "OH_TextEditorProxy_GetTextConfigFunc"
      }), "的执行线程由调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "的线程决定，不受本接口影响，若需该回调也在主线程执行，需确保", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
        children: "OH_InputMethodController_Attach"
      }), "在主线程调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向目标InputMethod_TextEditorProxy实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isCallbackInMainThread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程执行策略。- true：回调函数切换至主线程执行（用于避免多线程并发问题）。避免在回调内执行耗时操作，防止主线程阻塞。- false：回调函数在IPC线程执行（可能存在多线程并发情况）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行结果。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_OK"
            }), " - 配置成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 当proxy为NULL时返回。"]
          })]
        })
      })]
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