"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["856723"], {
64251(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_c_arkui_headerfile_capi_native_key_event_h_capi_native_key_event_h_md_0f0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-c-arkui-headerfile-capi-native-key-event-h-capi-native-key-event-h-md-0f0.json
var site_docs_ref_arkui_api_arkui_c_arkui_headerfile_capi_native_key_event_h_capi_native_key_event_h_md_0f0_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-c/arkui-headerfile/capi-native-key-event-h/capi-native-key-event-h","title":"native_key_event.h","description":"概述","source":"@site/docs-ref/arkui-api/arkui-c/arkui-headerfile/capi-native-key-event-h/capi-native-key-event-h.md","sourceDirName":"arkui-api/arkui-c/arkui-headerfile/capi-native-key-event-h","slug":"/arkui-api/arkui-c/arkui-headerfile/capi-native-key-event-h/capi-native-key-event-h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-key-event-h/capi-native-key-event-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"native_key_event.h","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-key-event-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-native-key-event-h"},"sidebar":"ref","previous":{"title":"native_interface_xcomponent.h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h"},"next":{"title":"native_node.h","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-c/arkui-headerfile/capi-native-key-event-h/capi-native-key-event-h.md


const frontMatter = {
	title: 'native_key_event.h',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-key-event-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-native-key-event-h'
};
const contentTitle = 'native_key_event.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "ArkUI_KeyCode",
  "id": "arkui_keycode",
  "level": 3
}, {
  "value": "ArkUI_KeyEventType",
  "id": "arkui_keyeventtype",
  "level": 3
}, {
  "value": "ArkUI_KeySourceType",
  "id": "arkui_keysourcetype",
  "level": 3
}, {
  "value": "ArkUI_KeyIntension",
  "id": "arkui_keyintension",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_ArkUI_KeyEvent_GetType()",
  "id": "oh_arkui_keyevent_gettype",
  "level": 3
}, {
  "value": "OH_ArkUI_KeyEvent_GetKeyCode()",
  "id": "oh_arkui_keyevent_getkeycode",
  "level": 3
}, {
  "value": "OH_ArkUI_KeyEvent_GetKeyText()",
  "id": "oh_arkui_keyevent_getkeytext",
  "level": 3
}, {
  "value": "OH_ArkUI_KeyEvent_GetKeySource()",
  "id": "oh_arkui_keyevent_getkeysource",
  "level": 3
}, {
  "value": "OH_ArkUI_KeyEvent_StopPropagation()",
  "id": "oh_arkui_keyevent_stoppropagation",
  "level": 3
}, {
  "value": "OH_ArkUI_KeyEvent_GetKeyIntensionCode()",
  "id": "oh_arkui_keyevent_getkeyintensioncode",
  "level": 3
}, {
  "value": "OH_ArkUI_KeyEvent_GetUnicode()",
  "id": "oh_arkui_keyevent_getunicode",
  "level": 3
}, {
  "value": "OH_ArkUI_KeyEvent_SetConsumed()",
  "id": "oh_arkui_keyevent_setconsumed",
  "level": 3
}, {
  "value": "OH_ArkUI_KeyEvent_Dispatch()",
  "id": "oh_arkui_keyevent_dispatch",
  "level": 3
}, {
  "value": "OH_ArkUI_KeyEvent_IsNumLockOn()",
  "id": "oh_arkui_keyevent_isnumlockon",
  "level": 3
}, {
  "value": "OH_ArkUI_KeyEvent_IsCapsLockOn()",
  "id": "oh_arkui_keyevent_iscapslockon",
  "level": 3
}, {
  "value": "OH_ArkUI_KeyEvent_IsScrollLockOn()",
  "id": "oh_arkui_keyevent_isscrolllockon",
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
        id: "native_key_eventh",
        children: "native_key_event.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供NativeKeyEvent相关接口定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <arkui/native_key_event.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libace_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-arkui-nativemodule/capi-arkui-nativemodule",
        children: "ArkUI_NativeModule"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关示例："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NdkKeyEvent",
        children: "NdkKeyEvent"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#arkui_keycode",
              children: "ArkUI_KeyCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_KeyCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件的键码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_keyeventtype",
              children: "ArkUI_KeyEventType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_KeyEventType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_keysourcetype",
              children: "ArkUI_KeySourceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_KeySourceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发当前按键的输入设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkui_keyintension",
              children: "ArkUI_KeyIntension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_KeyIntension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键对应的意图。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_arkui_keyevent_gettype",
              children: "ArkUI_KeyEventType OH_ArkUI_KeyEvent_GetType(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_keyevent_getkeycode",
              children: "int32_t OH_ArkUI_KeyEvent_GetKeyCode(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键的键码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_keyevent_getkeytext",
              children: "const char OH_ArkUI_KeyEvent_GetKeyText(const ArkUI_UIInputEvent event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键的键值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_keyevent_getkeysource",
              children: "ArkUI_KeySourceType OH_ArkUI_KeyEvent_GetKeySource(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前按键的输入设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_keyevent_stoppropagation",
              children: "void OH_ArkUI_KeyEvent_StopPropagation(const ArkUI_UIInputEvent* event, bool stopPropagation)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阻塞事件冒泡传递。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_keyevent_getkeyintensioncode",
              children: "ArkUI_KeyIntension OH_ArkUI_KeyEvent_GetKeyIntensionCode(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键对应的意图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_keyevent_getunicode",
              children: "uint32_t OH_ArkUI_KeyEvent_GetUnicode(const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键的Unicode码值。支持范围为非空格的基本拉丁字符：0x0021-0x007E，不支持字符为0。组合键场景下，返回当前keyEvent对应按键的Unicode码值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_keyevent_setconsumed",
              children: "void OH_ArkUI_KeyEvent_SetConsumed(const ArkUI_UIInputEvent* event, bool isConsumed)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在按键事件回调中，设置事件是否被该回调消费。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_keyevent_dispatch",
              children: "void OH_ArkUI_KeyEvent_Dispatch(ArkUI_NodeHandle node, const ArkUI_UIInputEvent* event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将按键事件分发到特定组件节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_keyevent_isnumlockon",
              children: "ArkUI_ErrorCode OH_ArkUI_KeyEvent_IsNumLockOn(const ArkUI_UIInputEvent* event, bool* state)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键事件发生时NumLock的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_keyevent_iscapslockon",
              children: "ArkUI_ErrorCode OH_ArkUI_KeyEvent_IsCapsLockOn(const ArkUI_UIInputEvent* event, bool* state)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键事件发生时CapsLock的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_arkui_keyevent_isscrolllockon",
              children: "ArkUI_ErrorCode OH_ArkUI_KeyEvent_IsScrollLockOn(const ArkUI_UIInputEvent* event, bool* state)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取按键事件发生时ScrollLock的状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_keycode",
      children: "ArkUI_KeyCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_KeyCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按键事件的键码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ARKUI_KEYCODE_UNKNOWN = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_FN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能（Fn）键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_VOLUME_UP = 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音量增加键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_VOLUME_DOWN = 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音量减小键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_POWER = 18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电源键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_CAMERA = 19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拍照键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_VOLUME_MUTE = 22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扬声器静音键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_MUTE = 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "话筒静音键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BRIGHTNESS_UP = 40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亮度调节按键，调亮。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BRIGHTNESS_DOWN = 41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亮度调节按键，调暗。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_0 = 2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'0'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_1 = 2001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'1'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_2 = 2002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'2'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_3 = 2003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'3'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_4 = 2004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'4'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_5 = 2005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'5'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_6 = 2006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'6'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_7 = 2007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'7'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_8 = 2008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'8'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_9 = 2009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'9'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_STAR = 2010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'*'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_POUND = 2011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'#'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_DPAD_UP = 2012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键，向上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_DPAD_DOWN = 2013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键，向下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_DPAD_LEFT = 2014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键，向左。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_DPAD_RIGHT = 2015"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键，向右。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_DPAD_CENTER = 2016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航键，确定键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_A = 2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'A'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_B = 2018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'B'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_C = 2019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'C'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_D = 2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'D'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_E = 2021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'E'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_F = 2022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_G = 2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'G'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_H = 2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'H'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_I = 2025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'I'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_J = 2026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'J'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_K = 2027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'K'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_L = 2028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'L'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_M = 2029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'M'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_N = 2030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'N'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_O = 2031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'O'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_P = 2032"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'P'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_Q = 2033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'Q'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_R = 2034"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'R'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_S = 2035"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'S'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_T = 2036"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'T'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_U = 2037"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'U'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_V = 2038"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'V'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_W = 2039"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'W'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_X = 2040"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'X'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_Y = 2041"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'Y'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_Z = 2042"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'Z'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_COMMA = 2043"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键','。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_PERIOD = 2044"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'.'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_ALT_LEFT = 2045"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左Alt键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_ALT_RIGHT = 2046"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右Alt键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_SHIFT_LEFT = 2047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左Shift键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_SHIFT_RIGHT = 2048"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右Shift键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_TAB = 2049"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tab键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_SPACE = 2050"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空格键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_SYM = 2051"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "符号修改器按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_EXPLORER = 2052"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浏览器功能键，此键用于启动浏览器应用程序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_ENVELOPE = 2053"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电子邮件功能键，此键用于启动电子邮件应用程序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_ENTER = 2054"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回车键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_DEL = 2055"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "退格键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_GRAVE = 2056"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'`'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_MINUS = 2057"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'-'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_EQUALS = 2058"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'='。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_LEFT_BRACKET = 2059"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'['。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_RIGHT_BRACKET = 2060"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键']'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BACKSLASH = 2061"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键''。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_SEMICOLON = 2062"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键';'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_APOSTROPHE = 2063"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键''' (单引号)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_SLASH = 2064"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'/'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_AT = 2065"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'@'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_PLUS = 2066"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'+'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_MENU = 2067"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_PAGE_UP = 2068"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向上翻页键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_PAGE_DOWN = 2069"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向下翻页键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_ESCAPE = 2070"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESC键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_FORWARD_DEL = 2071"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_CTRL_LEFT = 2072"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左Ctrl键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_CTRL_RIGHT = 2073"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右Ctrl键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_CAPS_LOCK = 2074"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大写锁定键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_SCROLL_LOCK = 2075"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滚动锁定键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_META_LEFT = 2076"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "左元修改器键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_META_RIGHT = 2077"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右元修改器键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_FUNCTION = 2078"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "功能键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_SYSRQ = 2079"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统请求/打印屏幕键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BREAK = 2080"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Break/Pause键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_MOVE_HOME = 2081"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标移动到开始键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_MOVE_END = 2082"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标移动到末尾键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_INSERT = 2083"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "插入键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_FORWARD = 2084"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "前进键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_MEDIA_PLAY = 2085"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_MEDIA_PAUSE = 2086"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，暂停。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_MEDIA_CLOSE = 2087"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，关闭。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_MEDIA_EJECT = 2088"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，弹出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_MEDIA_RECORD = 2089"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多媒体键，录音。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_F1 = 2090"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F1'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_F2 = 2091"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F2'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_F3 = 2092"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F3'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_F4 = 2093"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F4'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_F5 = 2094"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F5'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_F6 = 2095"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F6'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_F7 = 2096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F7'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_F8 = 2097"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F8'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_F9 = 2098"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F9'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_F10 = 2099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F10'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_F11 = 2100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F11'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_F12 = 2101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键'F12'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUM_LOCK = 2102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘锁。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_0 = 2103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'0'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_1 = 2104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'1'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_2 = 2105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'2'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_3 = 2106"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'3'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_4 = 2107"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'4'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_5 = 2108"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'5'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_6 = 2109"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'6'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_7 = 2110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'7'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_8 = 2111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'8'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_9 = 2112"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'9'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_DIVIDE = 2113"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'/'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_MULTIPLY = 2114"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'*'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_SUBTRACT = 2115"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'-'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_ADD = 2116"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'+'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_DOT = 2117"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'.'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_COMMA = 2118"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键','。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_ENTER = 2119"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键回车。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_EQUALS = 2120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'='。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_LEFT_PAREN = 2121"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键'('。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_NUMPAD_RIGHT_PAREN = 2122"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "小键盘按键')'。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BUTTON_A = 2301"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'A'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BUTTON_B = 2302"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'B'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BUTTON_X = 2304"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'X'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BUTTON_Y = 2305"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'Y'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BUTTON_L1 = 2307"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'L1'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BUTTON_R1 = 2308"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'R1'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BUTTON_L2 = 2309"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'L2'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BUTTON_R2 = 2310"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'R2'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BUTTON_SELECT = 2311"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'Select'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BUTTON_START = 2312"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'Start'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BUTTON_MODE = 2313"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'Mode'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BUTTON_THUMBL = 2314"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'THUMBL'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEYCODE_BUTTON_THUMBR = 2315"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄按键'THUMBR'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_keyeventtype",
      children: "ArkUI_KeyEventType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_KeyEventType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按键的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
            children: "ARKUI_KEY_EVENT_UNKNOWN = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_EVENT_DOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键按下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_EVENT_UP = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键松开。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_EVENT_LONG_PRESS = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键长按。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_EVENT_CLICK = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键点击。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_keysourcetype",
      children: "ArkUI_KeySourceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_KeySourceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发当前按键的输入设备类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
            children: "ARKUI_KEY_SOURCE_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_SOURCE_TYPE_MOUSE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鼠标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_SOURCE_TYPE_KEYBOARD = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_SOURCE_TYPE_JOYSTICK = 5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏手柄。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkui_keyintension",
      children: "ArkUI_KeyIntension"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkUI_KeyIntension\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按键对应的意图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ARKUI_KEY_INTENSION_UNKNOWN = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知意图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENSION_UP = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENSION_DOWN = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENSION_LEFT = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向左。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENSION_RIGHT = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向右。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENSION_SELECT = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENSION_ESCAPE = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENSION_BACK = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后退。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENSION_FORWARD = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "前进。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENSION_MENU = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENSION_HOME = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主页。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENSION_PAGE_UP = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上一页。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENSION_PAGE_DOWN = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下一页。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENSION_ZOOM_OUT = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENSION_ZOOM_IN = 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "放大。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENTION_MEDIA_PLAY_PAUSE = 100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENTION_MEDIA_FAST_FORWARD = 101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快进。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENTION_MEDIA_FAST_PLAYBACK = 103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "快速播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENTION_MEDIA_NEXT = 104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下一首。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENTION_MEDIA_PREVIOUS = 105"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上一首。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENTION_MEDIA_MUTE = 106"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "静音。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENTION_VOLUME_UP = 107"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音量增加。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENTION_VOLUME_DOWN = 108"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音量降低。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENTION_CALL = 200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接听电话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_KEY_INTENTION_CAMERA = 300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拍照。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_keyevent_gettype",
      children: "OH_ArkUI_KeyEvent_GetType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_KeyEventType OH_ArkUI_KeyEvent_GetType(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-key-event-h/capi-native-key-event-h#arkui_keyeventtype",
              children: "ArkUI_KeyEventType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_KeyEventType 按键的类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_keyevent_getkeycode",
      children: "OH_ArkUI_KeyEvent_GetKeyCode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ArkUI_KeyEvent_GetKeyCode(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键的键码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
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
            children: "按键的键码。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_keyevent_getkeytext",
      children: "OH_ArkUI_KeyEvent_GetKeyText()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *OH_ArkUI_KeyEvent_GetKeyText(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键的键值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
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
            children: "const char *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键的键值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_keyevent_getkeysource",
      children: "OH_ArkUI_KeyEvent_GetKeySource()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_KeySourceType OH_ArkUI_KeyEvent_GetKeySource(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前按键的输入设备类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-key-event-h/capi-native-key-event-h#arkui_keysourcetype",
              children: "ArkUI_KeySourceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_KeySourceType 当前按键的输入设备类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_keyevent_stoppropagation",
      children: "OH_ArkUI_KeyEvent_StopPropagation()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_KeyEvent_StopPropagation(const ArkUI_UIInputEvent* event, bool stopPropagation)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "阻塞事件冒泡传递。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool stopPropagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否阻止事件冒泡。true表示阻止事件冒泡，false表示不阻止事件冒泡。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_keyevent_getkeyintensioncode",
      children: "OH_ArkUI_KeyEvent_GetKeyIntensionCode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_KeyIntension OH_ArkUI_KeyEvent_GetKeyIntensionCode(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键对应的意图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-key-event-h/capi-native-key-event-h#arkui_keyintension",
              children: "ArkUI_KeyIntension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_KeyIntension 按键对应的意图。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_keyevent_getunicode",
      children: "OH_ArkUI_KeyEvent_GetUnicode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t OH_ArkUI_KeyEvent_GetUnicode(const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键的Unicode码值。支持范围为非空格的基本拉丁字符：0x0021-0x007E，不支持字符为0。组合键场景下，返回当前keyEvent对应按键的Unicode码值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
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
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unicode码值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_keyevent_setconsumed",
      children: "OH_ArkUI_KeyEvent_SetConsumed()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_KeyEvent_SetConsumed(const ArkUI_UIInputEvent* event, bool isConsumed)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在按键事件回调中，设置事件是否被该回调消费。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool isConsumed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件是否被该回调消费。true表示事件被消费，false表示事件未被消费。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_keyevent_dispatch",
      children: "OH_ArkUI_KeyEvent_Dispatch()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OH_ArkUI_KeyEvent_Dispatch(ArkUI_NodeHandle node, const ArkUI_UIInputEvent* event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将按键事件分发到特定组件节点。"
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
              children: "ArkUI_NodeHandle"
            }), " node"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的节点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_keyevent_isnumlockon",
      children: "OH_ArkUI_KeyEvent_IsNumLockOn()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_ErrorCode OH_ArkUI_KeyEvent_IsNumLockOn(const ArkUI_UIInputEvent* event, bool* state)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键事件发生时NumLock的状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，返回NumLock的状态。true表示处于激活状态，false表示处于未激活状态。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ArkUI_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " 函数参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_keyevent_iscapslockon",
      children: "OH_ArkUI_KeyEvent_IsCapsLockOn()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_ErrorCode OH_ArkUI_KeyEvent_IsCapsLockOn(const ArkUI_UIInputEvent* event, bool* state)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键事件发生时CapsLock的状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，返回CapsLock的状态。true表示处于激活状态，false表示处于未激活状态。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ArkUI_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " 函数参数异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_arkui_keyevent_isscrolllockon",
      children: "OH_ArkUI_KeyEvent_IsScrollLockOn()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_ErrorCode OH_ArkUI_KeyEvent_IsScrollLockOn(const ArkUI_UIInputEvent* event, bool* state)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取按键事件发生时ScrollLock的状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-eventmodule-arkui-uiinputevent/capi-arkui-eventmodule-arkui-uiinputevent",
              children: "const ArkUI_UIInputEvent"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkUI_UIInputEvent事件指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool* state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，返回ScrollLock的状态。true表示处于激活状态，false表示处于未激活状态。"
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
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ArkUI_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_NO_ERROR"
            }), " 成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_errorcode",
              children: "ARKUI_ERROR_CODE_PARAM_INVALID"
            }), " 函数参数异常。"]
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