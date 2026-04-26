"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["378026"], {
509370(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ime_api_ime_c_ime_headerfile_capi_inputmethod_inputmethod_proxy_capi_h_capi_inputmethod_inputmethod_proxy_capi_h_md_593_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ime-api-ime-c-ime-headerfile-capi-inputmethod-inputmethod-proxy-capi-h-capi-inputmethod-inputmethod-proxy-capi-h-md-593.json
var site_docs_ref_ime_api_ime_c_ime_headerfile_capi_inputmethod_inputmethod_proxy_capi_h_capi_inputmethod_inputmethod_proxy_capi_h_md_593_namespaceObject = JSON.parse('{"id":"ime-api/ime-c/ime-headerfile/capi-inputmethod-inputmethod-proxy-capi-h/capi-inputmethod-inputmethod-proxy-capi-h","title":"inputmethod_inputmethod_proxy_capi.h","description":"概述","source":"@site/docs-ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-inputmethod-proxy-capi-h/capi-inputmethod-inputmethod-proxy-capi-h.md","sourceDirName":"ime-api/ime-c/ime-headerfile/capi-inputmethod-inputmethod-proxy-capi-h","slug":"/ime-api/ime-c/ime-headerfile/capi-inputmethod-inputmethod-proxy-capi-h/capi-inputmethod-inputmethod-proxy-capi-h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-inputmethod-proxy-capi-h/capi-inputmethod-inputmethod-proxy-capi-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"inputmethod_inputmethod_proxy_capi.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-proxy-capi-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-inputmethod-inputmethod-proxy-capi-h"},"sidebar":"ref","previous":{"title":"inputmethod_cursor_info_capi.h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-cursor-info-capi-h/capi-inputmethod-cursor-info-capi-h"},"next":{"title":"inputmethod_private_command_capi.h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-private-command-capi-h/capi-inputmethod-private-command-capi-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-inputmethod-proxy-capi-h/capi-inputmethod-inputmethod-proxy-capi-h.md


const frontMatter = {
	title: 'inputmethod_inputmethod_proxy_capi.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-proxy-capi-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-inputmethod-inputmethod-proxy-capi-h'
};
const contentTitle = 'inputmethod_inputmethod_proxy_capi.h';

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
  "value": "OH_InputMethodProxy_ShowKeyboard()",
  "id": "oh_inputmethodproxy_showkeyboard",
  "level": 3
}, {
  "value": "OH_InputMethodProxy_ShowTextInput()",
  "id": "oh_inputmethodproxy_showtextinput",
  "level": 3
}, {
  "value": "OH_InputMethodProxy_HideKeyboard()",
  "id": "oh_inputmethodproxy_hidekeyboard",
  "level": 3
}, {
  "value": "OH_InputMethodProxy_NotifySelectionChange()",
  "id": "oh_inputmethodproxy_notifyselectionchange",
  "level": 3
}, {
  "value": "OH_InputMethodProxy_NotifyConfigurationChange()",
  "id": "oh_inputmethodproxy_notifyconfigurationchange",
  "level": 3
}, {
  "value": "OH_InputMethodProxy_NotifyCursorUpdate()",
  "id": "oh_inputmethodproxy_notifycursorupdate",
  "level": 3
}, {
  "value": "OH_InputMethodProxy_SendPrivateCommand()",
  "id": "oh_inputmethodproxy_sendprivatecommand",
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
        id: "inputmethod_inputmethod_proxy_capih",
        children: "inputmethod_inputmethod_proxy_capi.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供使用输入法的方法，可以向输入法应用发送请求和通知。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <inputmethod/inputmethod_inputmethod_proxy_capi.h>"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputMethod_InputMethodProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入法代理对象。使用此对象可以用于调用使用输入法的方法。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_inputmethodproxy_showkeyboard",
              children: "InputMethod_ErrorCode OH_InputMethodProxy_ShowKeyboard(InputMethod_InputMethodProxy *inputMethodProxy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示键盘。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_inputmethodproxy_showtextinput",
              children: "InputMethod_ErrorCode OH_InputMethodProxy_ShowTextInput(InputMethod_InputMethodProxy *inputMethodProxy, InputMethod_AttachOptions *options)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示文本输入框。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_inputmethodproxy_hidekeyboard",
              children: "InputMethod_ErrorCode OH_InputMethodProxy_HideKeyboard(InputMethod_InputMethodProxy *inputMethodProxy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "隐藏键盘。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_inputmethodproxy_notifyselectionchange",
              children: "InputMethod_ErrorCode OH_InputMethodProxy_NotifySelectionChange(InputMethod_InputMethodProxy *inputMethodProxy, char16_t text[], size_t length, int start, int end)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知文本框选区变化。当输入框内文本内容、光标位置或选中文本发生变化时，通过此接口将信息通知给输入法应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_inputmethodproxy_notifyconfigurationchange",
              children: "InputMethod_ErrorCode OH_InputMethodProxy_NotifyConfigurationChange(InputMethod_InputMethodProxy *inputMethodProxy,InputMethod_EnterKeyType enterKey, InputMethod_TextInputType textType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知输入框配置变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_inputmethodproxy_notifycursorupdate",
              children: "InputMethod_ErrorCode OH_InputMethodProxy_NotifyCursorUpdate(InputMethod_InputMethodProxy *inputMethodProxy, InputMethod_CursorInfo *cursorInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知光标位置变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_inputmethodproxy_sendprivatecommand",
              children: "InputMethod_ErrorCode OH_InputMethodProxy_SendPrivateCommand(InputMethod_InputMethodProxy *inputMethodProxy, InputMethod_PrivateCommand *privateCommand[], size_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送私有数据命令。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_inputmethodproxy_showkeyboard",
      children: "OH_InputMethodProxy_ShowKeyboard()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_InputMethodProxy_ShowKeyboard(InputMethod_InputMethodProxy *inputMethodProxy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示键盘。"
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), " *inputMethodProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), "实例的指针。inputMethodProxy由调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "获取。"]
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
              children: "IME_ERR_IMCLIENT"
            }), " - 输入法客户端错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_IMMS"
            }), " - 输入法服务错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_DETACHED"
            }), " - 未绑定输入法。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_inputmethodproxy_showtextinput",
      children: "OH_InputMethodProxy_ShowTextInput()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_InputMethodProxy_ShowTextInput(InputMethod_InputMethodProxy *inputMethodProxy, InputMethod_AttachOptions *options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示文本输入框。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), " *inputMethodProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), "实例的指针。inputMethodProxy由调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-attachoptions/capi-inputmethod-inputmethod-attachoptions",
              children: "InputMethod_AttachOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-attachoptions/capi-inputmethod-inputmethod-attachoptions",
              children: "InputMethod_AttachOptions"
            }), "实例的指针，用于获取配置选项。  此接口中只需关注", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_requestkeyboardreason",
              children: "InputMethod_RequestKeyboardReason"
            }), " - 表示请求键盘输入的原因。"]
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
              children: "IME_ERR_IMCLIENT"
            }), " - 输入法客户端错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_IMMS"
            }), " - 输入法服务错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_DETACHED"
            }), " - 未绑定输入法。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_inputmethodproxy_hidekeyboard",
      children: "OH_InputMethodProxy_HideKeyboard()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_InputMethodProxy_HideKeyboard(InputMethod_InputMethodProxy *inputMethodProxy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "隐藏键盘。"
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), " *inputMethodProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), "实例的指针。inputMethodProxy由调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "获取。"]
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
              children: "IME_ERR_IMCLIENT"
            }), " - 输入法客户端错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_IMMS"
            }), " - 输入法服务错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_DETACHED"
            }), " - 未绑定输入法。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_inputmethodproxy_notifyselectionchange",
      children: "OH_InputMethodProxy_NotifySelectionChange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_InputMethodProxy_NotifySelectionChange(InputMethod_InputMethodProxy *inputMethodProxy, char16_t text[], size_t length, int start, int end)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知文本框选区变化。当输入框内文本内容、光标位置或选中文本发生变化时，通过此接口将信息通知给输入法应用。"
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), " *inputMethodProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), "实例的指针。inputMethodProxy由调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整个输入文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text参数的长度。最大长度为8K。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所选文本的起始位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所选文本的结束位置。"
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
              children: "IME_ERR_PARAMCHECK"
            }), " - 表示参数错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_IMCLIENT"
            }), " - 输入法客户端错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_IMMS"
            }), " - 输入法服务错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_DETACHED"
            }), " - 未绑定输入法。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_inputmethodproxy_notifyconfigurationchange",
      children: "OH_InputMethodProxy_NotifyConfigurationChange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_InputMethodProxy_NotifyConfigurationChange(InputMethod_InputMethodProxy *inputMethodProxy,InputMethod_EnterKeyType enterKey, InputMethod_TextInputType textType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知输入框配置变化。"
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), " *inputMethodProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), "实例的指针。inputMethodProxy由调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_enterkeytype",
              children: "InputMethod_EnterKeyType"
            }), " enterKey"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回车键类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_textinputtype",
              children: "InputMethod_TextInputType"
            }), " textType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框类型。"
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
              children: "IME_ERR_PARAMCHECK"
            }), " - 表示参数错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_IMCLIENT"
            }), " - 输入法客户端错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_IMMS"
            }), " - 输入法服务错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_DETACHED"
            }), " - 未绑定输入法。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_inputmethodproxy_notifycursorupdate",
      children: "OH_InputMethodProxy_NotifyCursorUpdate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_InputMethodProxy_NotifyCursorUpdate(InputMethod_InputMethodProxy *inputMethodProxy, InputMethod_CursorInfo *cursorInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知光标位置变化。"
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), " *inputMethodProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), "实例的指针。inputMethodProxy由调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-cursorinfo/capi-inputmethod-inputmethod-cursorinfo",
              children: "InputMethod_CursorInfo"
            }), " *cursorInfo"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-cursorinfo/capi-inputmethod-inputmethod-cursorinfo",
              children: "InputMethod_CursorInfo"
            }), "实例的指针。表示光标信息。"]
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
              children: "IME_ERR_PARAMCHECK"
            }), " - 表示参数错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_IMCLIENT"
            }), " - 输入法客户端错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_IMMS"
            }), " - 输入法服务错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_DETACHED"
            }), " - 未绑定输入法。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_inputmethodproxy_sendprivatecommand",
      children: "OH_InputMethodProxy_SendPrivateCommand()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_InputMethodProxy_SendPrivateCommand(InputMethod_InputMethodProxy *inputMethodProxy, InputMethod_PrivateCommand *privateCommand[], size_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送私有数据命令。"
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
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), " *inputMethodProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), "实例的指针。inputMethodProxy由调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach",
              children: "OH_InputMethodController_Attach"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), " *privateCommand[]"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["私有命令, 定义在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-privatecommand/capi-inputmethod-inputmethod-privatecommand",
              children: "InputMethod_PrivateCommand"
            }), "，最大大小为32KB。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "私有命令数组的大小，最大为5。"
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
              children: "IME_ERR_PARAMCHECK"
            }), " - 表示参数错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_IMCLIENT"
            }), " - 输入法客户端错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_IMMS"
            }), " - 输入法服务错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_DETACHED"
            }), " - 未绑定输入法。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
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