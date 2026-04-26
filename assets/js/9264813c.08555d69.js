"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["822776"], {
842853(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ime_api_ime_c_ime_headerfile_capi_inputmethod_controller_capi_h_capi_inputmethod_controller_capi_h_md_926_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ime-api-ime-c-ime-headerfile-capi-inputmethod-controller-capi-h-capi-inputmethod-controller-capi-h-md-926.json
var site_docs_ref_ime_api_ime_c_ime_headerfile_capi_inputmethod_controller_capi_h_capi_inputmethod_controller_capi_h_md_926_namespaceObject = JSON.parse('{"id":"ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h","title":"inputmethod_controller_capi.h","description":"概述","source":"@site/docs-ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h.md","sourceDirName":"ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h","slug":"/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"inputmethod_controller_capi.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-controller-capi-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-inputmethod-controller-capi-h"},"sidebar":"ref","previous":{"title":"inputmethod_attach_options_capi.h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-attach-options-capi-h/capi-inputmethod-attach-options-capi-h"},"next":{"title":"inputmethod_cursor_info_capi.h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-cursor-info-capi-h/capi-inputmethod-cursor-info-capi-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-controller-capi-h/capi-inputmethod-controller-capi-h.md


const frontMatter = {
	title: 'inputmethod_controller_capi.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-controller-capi-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-inputmethod-controller-capi-h'
};
const contentTitle = 'inputmethod_controller_capi.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_InputMethodController_Attach()",
  "id": "oh_inputmethodcontroller_attach",
  "level": 3
}, {
  "value": "OH_InputMethodController_AttachWithUIContext()",
  "id": "oh_inputmethodcontroller_attachwithuicontext",
  "level": 3
}, {
  "value": "OH_InputMethodController_Detach()",
  "id": "oh_inputmethodcontroller_detach",
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
        id: "inputmethod_controller_capih",
        children: "inputmethod_controller_capi.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供绑定、解绑输入法的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <inputmethod/inputmethod_controller_capi.h>"]
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
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_inputmethodcontroller_attach",
              children: "InputMethod_ErrorCode OH_InputMethodController_Attach(InputMethod_TextEditorProxy *textEditorProxy,InputMethod_AttachOptions *options, InputMethod_InputMethodProxy **inputMethodProxy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将应用绑定到输入法服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_inputmethodcontroller_attachwithuicontext",
              children: "InputMethod_ErrorCode OH_InputMethodController_AttachWithUIContext(ArkUI_ContextHandle context, InputMethod_TextEditorProxy *textEditorProxy, InputMethod_AttachOptions *options, InputMethod_InputMethodProxy **inputMethodProxy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将应用绑定到输入法服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_inputmethodcontroller_detach",
              children: "InputMethod_ErrorCode OH_InputMethodController_Detach(InputMethod_InputMethodProxy *inputMethodProxy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将应用从输入法服务解绑。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_inputmethodcontroller_attach",
      children: "OH_InputMethodController_Attach()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_InputMethodController_Attach(InputMethod_TextEditorProxy *textEditorProxy,InputMethod_AttachOptions *options, InputMethod_InputMethodProxy **inputMethodProxy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将应用绑定到输入法服务。"
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
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。调用者需要自行管理textEditorProxy的生命周期。并且如果调用成功，调用者在下次发起绑定或解绑之前，不能将textEditorProxy释放。"]
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
            }), "实例的指针。该参数用于指定附加输入法时的选项。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), " **inputMethodProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), "实例的指针。生命周期维持到下一次绑定或解绑的调用。"]
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
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_inputmethodcontroller_attachwithuicontext",
      children: "OH_InputMethodController_AttachWithUIContext()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_InputMethodController_AttachWithUIContext(ArkUI_ContextHandle context, InputMethod_TextEditorProxy *textEditorProxy, InputMethod_AttachOptions *options, InputMethod_InputMethodProxy **inputMethodProxy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将应用绑定到输入法服务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-context8h/capi-arkui-nativemodule-arkui-context8h",
              children: "ArkUI_ContextHandle"
            }), " context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-context/capi-arkui-nativemodule-arkui-context",
              children: "ArkUI_Context"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), " *textEditorProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-texteditorproxy/capi-inputmethod-inputmethod-texteditorproxy",
              children: "InputMethod_TextEditorProxy"
            }), "实例的指针。调用者需要自行管理textEditorProxy的生命周期。并且如果调用成功，调用者在下次发起绑定或解绑之前，不能将textEditorProxy释放。"]
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
            }), "实例的指针。该参数用于指定附加输入法时的选项。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), " **inputMethodProxy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-inputmethodproxy/capi-inputmethod-inputmethod-inputmethodproxy",
              children: "InputMethod_InputMethodProxy"
            }), "实例的指针。生命周期维持到下一次绑定或解绑的调用。"]
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
              children: "IME_ERR_NULL_POINTER"
            }), " - 非预期的空指针。  具体错误码可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_inputmethodcontroller_detach",
      children: "OH_InputMethodController_Detach()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMethod_ErrorCode OH_InputMethodController_Detach(InputMethod_InputMethodProxy *inputMethodProxy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将应用从输入法服务解绑。"
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
            }), " - 表示输入法客户端错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h#inputmethod_errorcode",
              children: "IME_ERR_IMMS"
            }), " - 表示输入法服务错误。  ", (0,jsx_runtime.jsx)(_components.a, {
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