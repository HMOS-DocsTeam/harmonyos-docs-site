"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["428487"], {
962658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_c_arkui_struct_y_arkui_accessibilityprovidercallbackswithinstance_y_arkui_accessibilityprovidercallbackswithinstance_md_832_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-c-arkui-struct-y-arkui-accessibilityprovidercallbackswithinstance-y-arkui-accessibilityprovidercallbackswithinstance-md-832.json
var site_docs_ref_arkui_api_arkui_c_arkui_struct_y_arkui_accessibilityprovidercallbackswithinstance_y_arkui_accessibilityprovidercallbackswithinstance_md_832_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-c/arkui-struct/y-arkui-accessibilityprovidercallbackswithinstance/y-arkui-accessibilityprovidercallbackswithinstance","title":"ArkUI_AccessibilityProviderCallbacksWithInstance","description":"概述","source":"@site/docs-ref/arkui-api/arkui-c/arkui-struct/y-arkui-accessibilityprovidercallbackswithinstance/y-arkui-accessibilityprovidercallbackswithinstance.md","sourceDirName":"arkui-api/arkui-c/arkui-struct/y-arkui-accessibilityprovidercallbackswithinstance","slug":"/arkui-api/arkui-c/arkui-struct/y-arkui-accessibilityprovidercallbackswithinstance/y-arkui-accessibilityprovidercallbackswithinstance","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-struct/y-arkui-accessibilityprovidercallbackswithinstance/y-arkui-accessibilityprovidercallbackswithinstance","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":46,"frontMatter":{"title":"ArkUI_AccessibilityProviderCallbacksWithInstance","sidebar_position":46,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/y-arkui-accessibilityprovidercallbackswithinstance","kit":"应用框架","last_updated":"2026-04-22","slug":"y-arkui-accessibilityprovidercallbackswithinstance"},"sidebar":"ref","previous":{"title":"ArkUI_AccessibilityProviderCallbacks","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-struct/accessibility-arkui-accessibilityprovidercallbacks/accessibility-arkui-accessibilityprovidercallbacks"},"next":{"title":"ArkUI_AccessibilityElementInfo","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-c/arkui-struct/y-arkui-accessibilityprovidercallbackswithinstance/y-arkui-accessibilityprovidercallbackswithinstance.md


const frontMatter = {
	title: 'ArkUI_AccessibilityProviderCallbacksWithInstance',
	sidebar_position: 46,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/y-arkui-accessibilityprovidercallbackswithinstance',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'y-arkui-accessibilityprovidercallbackswithinstance'
};
const contentTitle = 'ArkUI_AccessibilityProviderCallbacksWithInstance';

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
  "value": "成员函数",
  "id": "成员函数",
  "level": 3
}, {
  "value": "成员函数说明",
  "id": "成员函数说明",
  "level": 2
}, {
  "value": "findAccessibilityNodeInfosById()",
  "id": "findaccessibilitynodeinfosbyid",
  "level": 3
}, {
  "value": "findAccessibilityNodeInfosByText()",
  "id": "findaccessibilitynodeinfosbytext",
  "level": 3
}, {
  "value": "findFocusedAccessibilityNode()",
  "id": "findfocusedaccessibilitynode",
  "level": 3
}, {
  "value": "findNextFocusAccessibilityNode()",
  "id": "findnextfocusaccessibilitynode",
  "level": 3
}, {
  "value": "executeAccessibilityAction()",
  "id": "executeaccessibilityaction",
  "level": 3
}, {
  "value": "clearFocusedFocusAccessibilityNode()",
  "id": "clearfocusedfocusaccessibilitynode",
  "level": 3
}, {
  "value": "getAccessibilityNodeCursorPosition()",
  "id": "getaccessibilitynodecursorposition",
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
        id: "arkui_accessibilityprovidercallbackswithinstance",
        children: "ArkUI_AccessibilityProviderCallbacksWithInstance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct {...} ArkUI_AccessibilityProviderCallbacksWithInstance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["适配多实例场景第三方操作", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
        children: "provider"
      }), "回调函数结构定义，需要第三方平台实现的相关函数，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_accessibilityproviderregistercallbackwithinstance",
        children: "OH_ArkUI_AccessibilityProviderRegisterCallbackWithInstance"
      }), "注册到系统侧。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-arkui-accessibility/capi-arkui-accessibility",
        children: "ArkUI_Accessibility"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h",
        children: "native_interface_accessibility.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员函数",
      children: "成员函数"
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
              href: "#findaccessibilitynodeinfosbyid",
              children: "int32_t (*findAccessibilityNodeInfosById)(const char* instanceId, int64_t elementId,ArkUI_AccessibilitySearchMode mode, int32_t requestId, ArkUI_AccessibilityElementInfoList* elementList)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于指定的节点，查询所需的节点信息。支持多实例场景。由接入方平台实现的回调函数，注册给系统侧调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#findaccessibilitynodeinfosbytext",
              children: "int32_t (*findAccessibilityNodeInfosByText)(const char* instanceId, int64_t elementId, const char* text,int32_t requestId, ArkUI_AccessibilityElementInfoList* elementList)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于指定的节点，查询满足指定组件文本内容的节点信息。支持多实例场景。由接入方平台实现的回调函数，注册给系统侧调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#findfocusedaccessibilitynode",
              children: "int32_t (*findFocusedAccessibilityNode)(const char* instanceId, int64_t elementId,ArkUI_AccessibilityFocusType focusType, int32_t requestId, ArkUI_AccessibilityElementInfo* elementInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指定节点查找已经聚焦的节点。由接入方平台实现的回调函数，注册给系统侧调用。支持多实例场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#findnextfocusaccessibilitynode",
              children: "int32_t (*findNextFocusAccessibilityNode)(const char* instanceId, int64_t elementId, ArkUI_AccessibilityFocusMoveDirection direction,int32_t requestId, ArkUI_AccessibilityElementInfo* elementInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从指定节点查询指定方向的节点。由接入方平台实现的回调函数，注册给系统侧调用。支持多实例场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#executeaccessibilityaction",
              children: "int32_t (*executeAccessibilityAction)(const char* instanceId, int64_t elementId,ArkUI_Accessibility_ActionType action, ArkUI_AccessibilityActionArguments *actionArguments, int32_t requestId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对指定节点执行指定的操作。由接入方平台实现的回调函数，注册给系统侧调用。支持多实例场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#clearfocusedfocusaccessibilitynode",
              children: "int32_t (*clearFocusedFocusAccessibilityNode)(const char* instanceId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除当前获焦的节点。由接入方平台实现的回调函数，注册给系统侧调用。支持多实例场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#getaccessibilitynodecursorposition",
              children: "int32_t (*getAccessibilityNodeCursorPosition)(const char* instanceId, int64_t elementId,int32_t requestId, int32_t* index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前组件中（文本组件）光标位置。由接入方平台实现的回调函数，注册给系统侧调用。支持多实例场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "成员函数说明",
      children: "成员函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "findaccessibilitynodeinfosbyid",
      children: "findAccessibilityNodeInfosById()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t (*findAccessibilityNodeInfosById)(const char* instanceId, int64_t elementId,ArkUI_AccessibilitySearchMode mode, int32_t requestId, ArkUI_AccessibilityElementInfoList* elementList)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于指定的节点，查询所需的节点信息。由接入方平台实现的回调函数，注册给系统侧调用。支持多实例场景。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* instanceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方框架的实例编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t elementId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍元素的唯一编号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_accessibilitysearchmode",
              children: "ArkUI_AccessibilitySearchMode"
            }), " mode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍服务的搜索模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t requestId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求id，用于关联请求过程，建议日志打印时附带输出该信息，方便问题定位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-accessibility-arkui-accessibilityelementinfolist/i-accessibility-arkui-accessibilityelementinfolist",
              children: "ArkUI_AccessibilityElementInfoList"
            }), "* elementList"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本次查询到的所有无障碍元素列表。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "findaccessibilitynodeinfosbytext",
      children: "findAccessibilityNodeInfosByText()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t (*findAccessibilityNodeInfosByText)(const char* instanceId, int64_t elementId, const char* text,int32_t requestId, ArkUI_AccessibilityElementInfoList* elementList)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于指定的节点，查询满足指定组件文本内容的节点信息。由接入方平台实现的回调函数，注册给系统侧调用。支持多实例场景。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* instanceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方框架的实例编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t elementId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍元素的唯一编号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件需要匹配的文本内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t requestId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求id，用于关联请求过程，方便问题定位。建议日志打印时附带输出该信息，方便定位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-accessibility-arkui-accessibilityelementinfolist/i-accessibility-arkui-accessibilityelementinfolist",
              children: "ArkUI_AccessibilityElementInfoList"
            }), "* elementList"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本次查询到的所有无障碍元素列表。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "findfocusedaccessibilitynode",
      children: "findFocusedAccessibilityNode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t (*findFocusedAccessibilityNode)(const char* instanceId, int64_t elementId,ArkUI_AccessibilityFocusType focusType, int32_t requestId, ArkUI_AccessibilityElementInfo* elementInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指定节点查找已经聚焦的节点。由接入方平台实现的回调函数，注册给系统侧调用。支持多实例场景。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* instanceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方框架的实例编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t elementId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍元素的唯一编号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_accessibilityfocustype",
              children: "ArkUI_AccessibilityFocusType"
            }), " focusType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t requestId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求id，用于关联请求过程，建议日志打印时附带输出该信息，方便问题定位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本次查询到的无障碍元素。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "findnextfocusaccessibilitynode",
      children: "findNextFocusAccessibilityNode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t (*findNextFocusAccessibilityNode)(const char* instanceId, int64_t elementId, ArkUI_AccessibilityFocusMoveDirection direction,int32_t requestId, ArkUI_AccessibilityElementInfo* elementInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从指定节点查询指定方向的节点。由接入方平台实现的回调函数，注册给系统侧调用。支持多实例场景。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* instanceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方框架的实例编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t elementId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍元素的唯一编号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_accessibilityfocusmovedirection",
              children: "ArkUI_AccessibilityFocusMoveDirection"
            }), " direction"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "搜索方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t requestId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求id，用于关联请求过程，方便问题定位。建议日志打印时附带输出该信息，方便定位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
              children: "ArkUI_AccessibilityElementInfo"
            }), "* elementInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本次查询到的无障碍元素。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "executeaccessibilityaction",
      children: "executeAccessibilityAction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t (*executeAccessibilityAction)(const char* instanceId, int64_t elementId,ArkUI_Accessibility_ActionType action, ArkUI_AccessibilityActionArguments *actionArguments, int32_t requestId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对指定节点执行指定的操作。由接入方平台实现的回调函数，注册给系统侧调用。支持多实例场景。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* instanceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方框架的实例编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t elementId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍元素的唯一编号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_accessibility_actiontype",
              children: "ArkUI_Accessibility_ActionType"
            }), " action"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要执行的操作，比如聚焦、点击和长按等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/i-accessibility-arkui-accessibilityactionarguments/i-accessibility-arkui-accessibilityactionarguments",
              children: "ArkUI_AccessibilityActionArguments"
            }), " *actionArguments"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制操作的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t requestId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求id，用于关联请求过程，方便问题定位。建议日志打印时附带输出该信息，方便定位。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clearfocusedfocusaccessibilitynode",
      children: "clearFocusedFocusAccessibilityNode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t (*clearFocusedFocusAccessibilityNode)(const char* instanceId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清除当前获焦的节点。由接入方平台实现的回调函数，注册给系统侧调用。支持多实例场景。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* instanceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方框架的实例编码。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getaccessibilitynodecursorposition",
      children: "getAccessibilityNodeCursorPosition()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t (*getAccessibilityNodeCursorPosition)(const char* instanceId, int64_t elementId,int32_t requestId, int32_t* index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前组件中（文本组件）光标位置。由接入方平台实现的回调函数，注册给系统侧调用。支持多实例场景。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* instanceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三方框架的实例编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t elementId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍元素的唯一编号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t requestId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求id，用于关联请求过程，方便问题定位。建议日志打印时附带输出该信息，方便定位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标的位置结果。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_SUCCESSFUL"
            }), "。  参数错误返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_acessbilityerrorcode",
              children: "ARKUI_ACCESSIBILITY_NATIVE_RESULT_BAD_PARAMETER"
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