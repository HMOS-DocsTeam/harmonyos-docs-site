"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["512705"], {
47053(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ime_api_ime_c_ime_headerfile_capi_inputmethod_types_capi_h_capi_inputmethod_types_capi_h_md_8fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ime-api-ime-c-ime-headerfile-capi-inputmethod-types-capi-h-capi-inputmethod-types-capi-h-md-8fb.json
var site_docs_ref_ime_api_ime_c_ime_headerfile_capi_inputmethod_types_capi_h_capi_inputmethod_types_capi_h_md_8fb_namespaceObject = JSON.parse('{"id":"ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h","title":"inputmethod_types_capi.h","description":"概述","source":"@site/docs-ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h.md","sourceDirName":"ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h","slug":"/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"inputmethod_types_capi.h","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-inputmethod-types-capi-h"},"sidebar":"ref","previous":{"title":"inputmethod_text_editor_proxy_capi.h","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-text-editor-proxy-capi-h/capi-inputmethod-text-editor-proxy-capi-h"},"next":{"title":"InputMethod_AttachOptions","permalink":"/harmonyos-docs-site/ref/ime-api/ime-c/ime-struct/capi-inputmethod-inputmethod-attachoptions/capi-inputmethod-inputmethod-attachoptions"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ime-api/ime-c/ime-headerfile/capi-inputmethod-types-capi-h/capi-inputmethod-types-capi-h.md


const frontMatter = {
	title: 'inputmethod_types_capi.h',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-inputmethod-types-capi-h'
};
const contentTitle = 'inputmethod_types_capi.h';

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
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "InputMethod_KeyboardStatus",
  "id": "inputmethod_keyboardstatus",
  "level": 3
}, {
  "value": "InputMethod_EnterKeyType",
  "id": "inputmethod_enterkeytype",
  "level": 3
}, {
  "value": "InputMethod_Direction",
  "id": "inputmethod_direction",
  "level": 3
}, {
  "value": "InputMethod_ExtendAction",
  "id": "inputmethod_extendaction",
  "level": 3
}, {
  "value": "InputMethod_TextInputType",
  "id": "inputmethod_textinputtype",
  "level": 3
}, {
  "value": "InputMethod_CommandValueType",
  "id": "inputmethod_commandvaluetype",
  "level": 3
}, {
  "value": "InputMethod_ErrorCode",
  "id": "inputmethod_errorcode",
  "level": 3
}, {
  "value": "InputMethod_RequestKeyboardReason",
  "id": "inputmethod_requestkeyboardreason",
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
        id: "inputmethod_types_capih",
        children: "inputmethod_types_capi.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供了输入法相关的类型定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <inputmethod/inputmethod_types_capi.h>"]
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
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#inputmethod_keyboardstatus",
              children: "InputMethod_KeyboardStatus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputMethod_KeyboardStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputmethod_enterkeytype",
              children: "InputMethod_EnterKeyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputMethod_EnterKeyType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回车键功能类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputmethod_direction",
              children: "InputMethod_Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputMethod_Direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputmethod_extendaction",
              children: "InputMethod_ExtendAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputMethod_ExtendAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编辑框中文本的扩展编辑操作类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputmethod_textinputtype",
              children: "InputMethod_TextInputType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputMethod_TextInputType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本输入类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputmethod_commandvaluetype",
              children: "InputMethod_CommandValueType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputMethod_CommandValueType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "私有数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputmethod_errorcode",
              children: "InputMethod_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputMethod_ErrorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入法错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#inputmethod_requestkeyboardreason",
              children: "InputMethod_RequestKeyboardReason"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputMethod_RequestKeyboardReason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示请求键盘输入的原因。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputmethod_keyboardstatus",
      children: "InputMethod_KeyboardStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum InputMethod_KeyboardStatus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键盘状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_KEYBOARD_STATUS_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘状态为NONE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_KEYBOARD_STATUS_HIDE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘状态为隐藏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_KEYBOARD_STATUS_SHOW = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘状态为显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputmethod_enterkeytype",
      children: "InputMethod_EnterKeyType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum InputMethod_EnterKeyType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回车键功能类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ENTER_KEY_UNSPECIFIED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未指定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ENTER_KEY_NONE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回车键功能类型为NONE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ENTER_KEY_GO = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "前往。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ENTER_KEY_SEARCH = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "搜索。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ENTER_KEY_SEND = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ENTER_KEY_NEXT = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下一步。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ENTER_KEY_DONE = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "完成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ENTER_KEY_PREVIOUS = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上一步。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ENTER_KEY_NEWLINE = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "换行。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputmethod_direction",
      children: "InputMethod_Direction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum InputMethod_Direction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移动方向。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_DIRECTION_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移动方向为NONE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_DIRECTION_UP = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_DIRECTION_DOWN = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_DIRECTION_LEFT = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向左。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_DIRECTION_RIGHT = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向右。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputmethod_extendaction",
      children: "InputMethod_ExtendAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum InputMethod_ExtendAction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编辑框中文本的扩展编辑操作类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_EXTEND_ACTION_SELECT_ALL = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全选。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_EXTEND_ACTION_CUT = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "剪切。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_EXTEND_ACTION_COPY = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_EXTEND_ACTION_PASTE = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粘贴。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputmethod_textinputtype",
      children: "InputMethod_TextInputType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum InputMethod_TextInputType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本输入类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_NONE = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本输入类型为NONE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_TEXT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_MULTILINE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多行类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_NUMBER = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_PHONE = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电话号码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_DATETIME = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日期类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_EMAIL_ADDRESS = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "邮箱地址类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_URL = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "链接类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_VISIBLE_PASSWORD = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_NUMBER_PASSWORD = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字密码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_SCREEN_LOCK_PASSWORD = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "锁屏密码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_USER_NAME = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户名类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_NEW_PASSWORD = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新密码类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_NUMBER_DECIMAL = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字小数类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_TEXT_INPUT_TYPE_ONE_TIME_CODE = 13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["验证码类型。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputmethod_commandvaluetype",
      children: "InputMethod_CommandValueType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum InputMethod_CommandValueType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "私有数据类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_COMMAND_VALUE_TYPE_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "私有数据类型为NONE。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_COMMAND_VALUE_TYPE_STRING = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_COMMAND_VALUE_TYPE_BOOL = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_COMMAND_VALUE_TYPE_INT32 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32位带符号整数类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputmethod_errorcode",
      children: "InputMethod_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum InputMethod_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入法错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ERR_OK = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ERR_UNDEFINED = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未定义错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ERR_PARAMCHECK = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数检查失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ERR_PACKAGEMANAGER = 12800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "包管理异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ERR_IMENGINE = 12800002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入法应用异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ERR_IMCLIENT = 12800003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框客户端异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ERR_CONFIG_PERSIST = 12800005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置固化失败。当保存配置失败时，会报此错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ERR_CONTROLLER = 12800006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入法控制器异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ERR_SETTINGS = 12800007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入法设置器异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ERR_IMMS = 12800008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入法管理服务异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ERR_DETACHED = 12800009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框未绑定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ERR_NULL_POINTER = 12802000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空指针异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_ERR_QUERY_FAILED = 12802001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询失败。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputmethod_requestkeyboardreason",
      children: "InputMethod_RequestKeyboardReason"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum InputMethod_RequestKeyboardReason\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示请求键盘输入的原因。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_REQUEST_REASON_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示没有特定的原因触发键盘请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_REQUEST_REASON_MOUSE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示键盘请求是由鼠标操作触发的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_REQUEST_REASON_TOUCH = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示键盘请求是由触摸操作触发的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IME_REQUEST_REASON_OTHER = 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示键盘请求是由其他原因触发的。"
          })]
        })]
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