"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["38403"], {
599758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_accessibility_api_accessibility_arkts_js_apis_application_accessibilityextensionability_js_apis_application_accessibilityextensionability_md_7fd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-accessibility-api-accessibility-arkts-js-apis-application-accessibilityextensionability-js-apis-application-accessibilityextensionability-md-7fd.json
var site_docs_ref_accessibility_api_accessibility_arkts_js_apis_application_accessibilityextensionability_js_apis_application_accessibilityextensionability_md_7fd_namespaceObject = JSON.parse('{"id":"accessibility-api/accessibility-arkts/js-apis-application-accessibilityextensionability/js-apis-application-accessibilityextensionability","title":"@ohos.application.AccessibilityExtensionAbility (辅助功能扩展能力)","description":"AccessibilityExtensionAbility基于ExtensionAbility框架，提供辅助功能业务的能力。","source":"@site/docs-ref/accessibility-api/accessibility-arkts/js-apis-application-accessibilityextensionability/js-apis-application-accessibilityextensionability.md","sourceDirName":"accessibility-api/accessibility-arkts/js-apis-application-accessibilityextensionability","slug":"/accessibility-api/accessibility-arkts/js-apis-application-accessibilityextensionability/js-apis-application-accessibilityextensionability","permalink":"/harmonyos-docs-site/ref/accessibility-api/accessibility-arkts/js-apis-application-accessibilityextensionability/js-apis-application-accessibilityextensionability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"@ohos.application.AccessibilityExtensionAbility (辅助功能扩展能力)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-application-accessibilityextensionability","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-application-accessibilityextensionability"},"sidebar":"ref","previous":{"title":"@ohos.accessibility.GesturePoint (手势触摸点)","permalink":"/harmonyos-docs-site/ref/accessibility-api/accessibility-arkts/js-apis-accessibility-gesturepoint/js-apis-accessibility-gesturepoint"},"next":{"title":"AccessibilityExtensionContext (辅助功能扩展上下文)","permalink":"/harmonyos-docs-site/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/accessibility-api/accessibility-arkts/js-apis-application-accessibilityextensionability/js-apis-application-accessibilityextensionability.md


const frontMatter = {
	title: '@ohos.application.AccessibilityExtensionAbility (辅助功能扩展能力)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-application-accessibilityextensionability',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-application-accessibilityextensionability'
};
const contentTitle = '@ohos.application.AccessibilityExtensionAbility (辅助功能扩展能力)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "AccessibilityExtensionAbility",
  "id": "accessibilityextensionability",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "AccessibilityEvent",
  "id": "accessibilityevent",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-1",
  "level": 3
}, {
  "value": "AccessibilityElement10+",
  "id": "accessibilityelement10",
  "level": 2
}, {
  "value": "ElementAttributeValues10+",
  "id": "elementattributevalues10",
  "level": 2
}, {
  "value": "FocusDirection10+",
  "id": "focusdirection10",
  "level": 2
}, {
  "value": "ElementAttributeKeys10+",
  "id": "elementattributekeys10",
  "level": 2
}, {
  "value": "FocusType10+",
  "id": "focustype10",
  "level": 2
}, {
  "value": "WindowType 10+",
  "id": "windowtype-10",
  "level": 2
}, {
  "value": "Rect10+",
  "id": "rect10",
  "level": 2
}, {
  "value": "AccessibilityExtensionContext10+",
  "id": "accessibilityextensioncontext10",
  "level": 2
}, {
  "value": "GestureType",
  "id": "gesturetype",
  "level": 2
}, {
  "value": "PageUpdateType",
  "id": "pageupdatetype",
  "level": 2
}, {
  "value": "TouchGuideType",
  "id": "touchguidetype",
  "level": 2
}, {
  "value": "AccessibilityExtensionAbility.onConnect(deprecated)",
  "id": "accessibilityextensionabilityonconnectdeprecated",
  "level": 2
}, {
  "value": "AccessibilityExtensionAbility.onDisconnect(deprecated)",
  "id": "accessibilityextensionabilityondisconnectdeprecated",
  "level": 2
}, {
  "value": "AccessibilityExtensionAbility.onAccessibilityEvent(deprecated)",
  "id": "accessibilityextensionabilityonaccessibilityeventdeprecated",
  "level": 2
}, {
  "value": "AccessibilityExtensionAbility.onKeyEvent(deprecated)",
  "id": "accessibilityextensionabilityonkeyeventdeprecated",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ohosapplicationaccessibilityextensionability-辅助功能扩展能力",
        children: "@ohos.application.AccessibilityExtensionAbility (辅助功能扩展能力)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AccessibilityExtensionAbility基于ExtensionAbility框架，提供辅助功能业务的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(915199)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 9开始支持，后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessibilityextensionability",
      children: "AccessibilityExtensionAbility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AccessibilityExtensionAbility基于ExtensionAbility框架，提供辅助功能业务的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext",
              children: "AccessibilityExtensionContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示辅助扩展能力上下文。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessibilityevent",
      children: "AccessibilityEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "辅助事件信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性-1",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "eventType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#eventtype",
              children: "accessibility.EventType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/js-apis-accessibility/js-apis-accessibility#windowupdatetype",
              children: "accessibility.WindowUpdateType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#touchguidetype",
              children: "TouchGuideType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#gesturetype",
              children: "GestureType"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#accessibilityelement",
              children: "AccessibilityElement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生事件的目标组件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timeStamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件时间戳，单位是毫秒。默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "elementId12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主动聚焦的组件ID。默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textAnnouncedForAccessibility12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主动播报的内容。当应用需要主动播报时根据实际场景设置播报内容，无特殊限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraInfo20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "针对TextArea、TextInput、SearchField、RichEdit组件，当文本内容有新增或删除时，携带的文本内容。根据实际场景设置，无特殊限制。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessibilityelement10",
      children: "AccessibilityElement10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type AccessibilityElement = _AccessibilityElement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示无障碍节点元素，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#accessibilityelement",
        children: "AccessibilityElement"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
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
            children: "_AccessibilityElement"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示无障碍节点元素，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#accessibilityelement",
              children: "AccessibilityElement"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AccessibilityElement } from '@kit.AccessibilityKit';\n\nlet accessibilityElement: AccessibilityElement;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "elementattributevalues10",
      children: "ElementAttributeValues10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ElementAttributeValues = _ElementAttributeValues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示节点元素具备的属性名称及属性值类型信息，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#elementattributevalues",
        children: "ElementAttributeValues"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
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
            children: "_ElementAttributeValues"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示节点元素具备的属性名称及属性值类型信息，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#elementattributevalues",
              children: "ElementAttributeValues"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ElementAttributeValues } from '@kit.AccessibilityKit';\n\nlet elementAttributeValues: ElementAttributeValues;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "focusdirection10",
      children: "FocusDirection10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type FocusDirection = _FocusDirection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示查询下一焦点元素的方向，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#focusdirection",
        children: "FocusDirection"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
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
            children: "_FocusDirection"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示查询下一焦点元素的方向，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#focusdirection",
              children: "FocusDirection"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FocusDirection } from '@kit.AccessibilityKit';\n\nlet focusDirection: FocusDirection;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "elementattributekeys10",
      children: "ElementAttributeKeys10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ElementAttributeKeys = keyof ElementAttributeValues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#elementattributevalues",
        children: "ElementAttributeValues"
      }), "的属性名称。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
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
            children: ["keyof ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#elementattributevalues",
              children: "ElementAttributeValues"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#elementattributevalues",
              children: "ElementAttributeValues"
            }), "中所有属性名组成的联合类型。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ElementAttributeKeys } from '@kit.AccessibilityKit';\n\nlet elementAttributeKeys: ElementAttributeKeys;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "focustype10",
      children: "FocusType10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type FocusType = _FocusType"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示查询焦点元素的类型，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#focustype",
        children: "FocusType"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
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
            children: "_FocusType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示查询焦点元素的类型，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#focustype",
              children: "FocusType"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FocusType } from '@kit.AccessibilityKit';\n\nlet focusType: FocusType;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "windowtype-10",
      children: "WindowType 10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type WindowType = _WindowType"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示窗口的类型，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#windowtype",
        children: "WindowType"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
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
            children: "_WindowType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示窗口的类型，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#windowtype",
              children: "WindowType"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { WindowType } from '@kit.AccessibilityKit';\n\nlet windowType: WindowType;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rect10",
      children: "Rect10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Rect = _Rect"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示矩形区域，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#rect",
        children: "Rect"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
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
            children: "_Rect"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示矩形区域，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext#rect",
              children: "Rect"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Rect } from '@kit.AccessibilityKit';\n\nlet rect: Rect;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessibilityextensioncontext10",
      children: "AccessibilityExtensionContext10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type AccessibilityExtensionContext = _AccessibilityExtensionContext.default"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示辅助功能扩展的上下文环境，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext",
        children: "AccessibilityExtensionContext"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
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
            children: "_AccessibilityExtensionContext.default"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示辅助功能扩展的上下文环境，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/accessibility-api/accessibility-arkts/is-inner-application-accessibilityextensioncontext/is-inner-application-accessibilityextensioncontext",
              children: "AccessibilityExtensionContext"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';\n\nclass EntryAbility extends AccessibilityExtensionAbility {\n  onConnect(): void {\n    let axContext = this.context;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gesturetype",
      children: "GestureType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type GestureType = 'left' | 'leftThenRight' | 'leftThenUp' | 'leftThenDown' | 'right' | 'rightThenLeft' | 'rightThenUp' | 'rightThenDown' | 'up' | 'upThenLeft' | 'upThenRight' | 'upThenDown' | 'down' | 'downThenLeft' | 'downThenRight' | 'downThenUp' | 'twoFingerSingleTap' | 'twoFingerDoubleTap' | 'twoFingerDoubleTapAndHold' | 'twoFingerTripleTap' | 'twoFingerTripleTapAndHold' | 'threeFingerSingleTap' | 'threeFingerDoubleTap' | 'threeFingerDoubleTapAndHold' | 'threeFingerTripleTap' | 'threeFingerTripleTapAndHold' | 'fourFingerSingleTap' | 'fourFingerDoubleTap' | 'fourFingerDoubleTapAndHold' | 'fourFingerTripleTap' | 'fourFingerTripleTapAndHold' | 'threeFingerSwipeUp' | 'threeFingerSwipeDown' | 'threeFingerSwipeLeft' | 'threeFingerSwipeRight' | 'fourFingerSwipeUp' | 'fourFingerSwipeDown' | 'fourFingerSwipeLeft' | 'fourFingerSwipeRight'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手势事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'left'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示向左的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'leftThenRight'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示先向左再向右的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'leftThenUp'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示先向左再向上的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'leftThenDown'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示先向左再向下的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'right'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示向右的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'rightThenLeft'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示先向右再向左的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'rightThenUp'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示先向右再向上的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'rightThenDown'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示先向右再向下的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'up'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示向上的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'upThenLeft'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示先向上再向左的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'upThenRight'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示先向上再向右的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'upThenDown'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示先向上再向下的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'down'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示向下的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'downThenLeft'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示先向下再向左的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'downThenRight'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示先向下再向右的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'downThenUp'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示先向下再向上的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'twoFingerSingleTap'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示双指单击的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'twoFingerDoubleTap'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示双指双击的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'twoFingerDoubleTapAndHold'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示双指双击长按的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'twoFingerTripleTap'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示双指三击的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'twoFingerTripleTapAndHold'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示双指三击长按的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'threeFingerSingleTap'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示三指单击的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'threeFingerDoubleTap'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示三指双击的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'threeFingerDoubleTapAndHold'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示三指双击长按的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'threeFingerTripleTap'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示三指三击的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'threeFingerTripleTapAndHold'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示三指三击长按的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'fourFingerSingleTap'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示四指单击的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'fourFingerDoubleTap'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示四指双击的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'fourFingerDoubleTapAndHold'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示四指双击长按的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'fourFingerTripleTap'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示四指三击的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'fourFingerTripleTapAndHold'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示四指三击长按的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'threeFingerSwipeUp'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示三指向上滑动的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'threeFingerSwipeDown'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示三指向下滑动的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'threeFingerSwipeLeft'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示三指向左滑动的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'threeFingerSwipeRight'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示三指向右滑动的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'fourFingerSwipeUp'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示四指向上滑动的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'fourFingerSwipeDown'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示四指向下滑动的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'fourFingerSwipeLeft'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示四指向左滑动的手势。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'fourFingerSwipeRight'11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示四指向右滑动的手势。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pageupdatetype",
      children: "PageUpdateType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type PageUpdateType = 'pageContentUpdate' | 'pageStateUpdate'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面刷新类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'pageContentUpdate'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示页面内容刷新。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'pageStateUpdate'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示页面状态刷新。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "touchguidetype",
      children: "TouchGuideType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type TouchGuideType = 'touchBegin' | 'touchEnd'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触摸浏览事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'touchBegin'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸浏览时开始触摸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'touchEnd'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触摸浏览时结束触摸。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessibilityextensionabilityonconnectdeprecated",
      children: "AccessibilityExtensionAbility.onConnect(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onConnect(): void;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户启用AccessibilityExtensionAbility时，系统服务完成连接后，回调此接口，可以该方法中执行初始化业务逻辑操作。该方法可以选择性重写。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(32897)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始支持，从API version 12开始废弃，系统不再开放相关能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';\n\nclass MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {\n  onConnect(): void {\n    console.info('AxExtensionAbility onConnect');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessibilityextensionabilityondisconnectdeprecated",
      children: "AccessibilityExtensionAbility.onDisconnect(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDisconnect(): void;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户停用AccessibilityExtensionAbility时，系统服务完成断开连接后，回调此接口，可以该方法中执行资源回收退出业务逻辑操作。该方法可以选择性重写。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(941835)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始支持，从API version 12开始废弃，系统不再开放相关能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';\n\nclass MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {\n  onDisconnect(): void {\n    console.info('AxExtensionAbility onDisconnect');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessibilityextensionabilityonaccessibilityeventdeprecated",
      children: "AccessibilityExtensionAbility.onAccessibilityEvent(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAccessibilityEvent(event: AccessibilityEvent): void;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在关注的应用及事件类型对应的事件发生时回调此接口，可以在该方法中根据事件信息进行业务逻辑处理。一般情况下需要重写该方法完成业务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(541646)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始支持，从API version 12开始废弃，系统不再开放相关能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#accessibilityevent",
              children: "AccessibilityEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无障碍事件。无返回值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AccessibilityExtensionAbility, AccessibilityEvent } from '@kit.AccessibilityKit';\n\nclass MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {\n  onAccessibilityEvent(event: AccessibilityEvent): void {\n    console.info('AxExtensionAbility onAccessibilityEvent');\n    if (event.eventType === 'click') {\n      console.info('AxExtensionAbility onAccessibilityEvent: click');\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessibilityextensionabilityonkeyeventdeprecated",
      children: "AccessibilityExtensionAbility.onKeyEvent(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onKeyEvent(keyEvent: KeyEvent): boolean;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在物理按键按下时回调此方法，可以在该方法中根据业务判断是否对事件进行拦截。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(797734)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始支持，从API version 12开始废弃，系统不再开放相关能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.BarrierFree.Accessibility.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyEvent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/input-api/input-arkts/js-apis-keyevent/js-apis-keyevent#keyevent",
              children: "KeyEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键事件回调函数。返回true表示拦截此按键。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回true表示此事件被消费，不会继续传递。  返回false表示此事件未被消费，会继续传递。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';\nimport { KeyEvent } from '@kit.InputKit';\n\nclass MyAccessibilityExtensionAbility extends AccessibilityExtensionAbility {\n  onKeyEvent(keyEvent: KeyEvent): boolean {\n    console.info('AxExtensionAbility onKeyEvent');\n    if (keyEvent.key.code === 16) {\n      console.info('AxExtensionAbility onKeyEvent: intercept 16');\n      return true;\n    }\n    return false;\n  }\n}\n"
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
941835(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
32897(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
797734(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
541646(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
915199(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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