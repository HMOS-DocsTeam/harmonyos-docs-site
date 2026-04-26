"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["286767"], {
145248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_interaction_property_ts_universal_attributes_focus_ts_universal_attributes_focus_md_065_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-interaction-property-ts-universal-attributes-focus-ts-universal-attributes-focus-md-065.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_interaction_property_ts_universal_attributes_focus_ts_universal_attributes_focus_md_065_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus","title":"焦点控制","description":"自定义组件的走焦效果，可设置组件是否走焦和具体的走焦顺序，使用TAB键或方向键切换焦点。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"焦点控制","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-focus","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-focus"},"sidebar":"ref","previous":{"title":"禁用控制","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-enable/ts-universal-attributes-enable"},"next":{"title":"拖拽控制","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus.md


const frontMatter = {
	title: '焦点控制',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-focus',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-focus'
};
const contentTitle = '焦点控制';

const assets = {

};



const toc = [{
  "value": "focusable",
  "id": "focusable",
  "level": 2
}, {
  "value": "tabIndex9+",
  "id": "tabindex9",
  "level": 2
}, {
  "value": "defaultFocus9+",
  "id": "defaultfocus9",
  "level": 2
}, {
  "value": "groupDefaultFocus9+",
  "id": "groupdefaultfocus9",
  "level": 2
}, {
  "value": "focusOnTouch9+",
  "id": "focusontouch9",
  "level": 2
}, {
  "value": "focusBox12+",
  "id": "focusbox12",
  "level": 2
}, {
  "value": "focusControl9+",
  "id": "focuscontrol9",
  "level": 2
}, {
  "value": "requestFocus9+",
  "id": "requestfocus9",
  "level": 3
}, {
  "value": "FocusBoxStyle12+对象说明",
  "id": "focusboxstyle12对象说明",
  "level": 2
}, {
  "value": "focusScopePriority12+",
  "id": "focusscopepriority12",
  "level": 2
}, {
  "value": "FocusPriority12+",
  "id": "focuspriority12",
  "level": 3
}, {
  "value": "KeyProcessingMode15+",
  "id": "keyprocessingmode15",
  "level": 3
}, {
  "value": "focusScopeId12+",
  "id": "focusscopeid12",
  "level": 2
}, {
  "value": "focusScopeId14+",
  "id": "focusscopeid14",
  "level": 2
}, {
  "value": "tabStop14+",
  "id": "tabstop14",
  "level": 2
}, {
  "value": "nextFocus18+",
  "id": "nextfocus18",
  "level": 2
}, {
  "value": "FocusMovement18+对象说明",
  "id": "focusmovement18对象说明",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置组件获焦和走焦的效果）",
  "id": "示例1设置组件获焦和走焦的效果",
  "level": 3
}, {
  "value": "示例2（设置指定组件获焦）",
  "id": "示例2设置指定组件获焦",
  "level": 3
}, {
  "value": "示例3（设置焦点框样式）",
  "id": "示例3设置焦点框样式",
  "level": 3
}, {
  "value": "示例4（设置焦点组走焦）",
  "id": "示例4设置焦点组走焦",
  "level": 3
}, {
  "value": "示例5（设置tab走焦停留）",
  "id": "示例5设置tab走焦停留",
  "level": 3
}, {
  "value": "示例6（设置自定义走焦）",
  "id": "示例6设置自定义走焦",
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
        id: "焦点控制",
        children: "焦点控制"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组件的走焦效果，可设置组件是否走焦和具体的走焦顺序，使用TAB键或方向键切换焦点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(690402)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自定义组件无获焦能力，当设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "#focusable",
          children: "focusable"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-enable/ts-universal-attributes-enable#enabled",
          children: "enabled"
        }), "等属性为false，或者设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-visibility/ts-universal-attributes-visibility#visibility",
          children: "visibility"
        }), "属性为Hidden、None时，也不影响其子组件的获焦。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件主动获取焦点不受窗口焦点的控制。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["焦点开发参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event",
          children: "支持焦点处理"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "focusable",
      children: "focusable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "focusable(value: boolean): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前组件是否可以获焦。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前组件是否可以获焦，true表示组件可以获焦，false表示组件不可获焦。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  存在默认交互逻辑的组件例如", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
              children: "Button"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
              children: "TextInput"
            }), "等，默认即为可获焦，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
              children: "Text"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
              children: "Image"
            }), "等组件则默认状态为不可获焦。不可获焦状态下，无法触发", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-focus-event/ts-universal-focus-event",
              children: "焦点事件"
            }), "。"]
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabindex9",
      children: "tabIndex9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tabIndex(index: number): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组件tab键走焦能力。当组件未设置tabIndex时，默认按照预设的焦点移动规则进行焦点移动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(863455)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["tabIndex只能够自定义Tab键走焦，若想同时自定义方向键等走焦能力，建议使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#nextfocus18",
          children: "nextFocus"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义组件tab键走焦能力。若有配置了tabIndex大于0的组件，则tab键走焦只会在tabIndex大于0的组件内按照tabIndex的值从小到大并循环依次走焦。若没有配置tabIndex大于0的组件，则tabIndex等于0的组件按照组件预设的走焦规则走焦。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uiextension/js-apis-arkui-uiextension",
              children: "UiExtension"
            }), "组件未适配tabIndex，在含有", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uiextension/js-apis-arkui-uiextension",
              children: "UiExtension"
            }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
              children: "层级页面"
            }), "使用tabIndex会导致走焦错乱。  - tabIndex >= 0：表示元素是可聚焦的，并且可以通过tab键走焦来访问到该元素。  - tabIndex < 0（通常是tabIndex = -1）：表示元素是可聚焦的，但是不能通过tab键走焦来访问到该元素。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  tabIndex与focusScopeId不能混用。"]
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "defaultfocus9",
      children: "defaultFocus9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "defaultFocus(value: boolean): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置当前组件是否为当前", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "上的默认焦点。当未设置defaultFocus时，组件默认不为当前层级页面的默认焦点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(783814)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以设置默认焦点的页面指的是支持页面路由或是弹窗类的容器组件，例如Page、NaviDestination、NavBar、PopUp、Dialog等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前组件是否为当前", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
              children: "层级页面"
            }), "上的默认焦点，仅在初次创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
              children: "层级页面"
            }), "第一次进入时生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  值为true则表示为默认焦点，值为false时无效。  若", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
              children: "层级页面"
            }), "内无任何组件设置defaultFocus(true)，API version 11及之前，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
              children: "层级页面"
            }), "的默认焦点是当前", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
              children: "层级页面"
            }), "上首个可获焦的非容器组件，API version 11之后，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
              children: "层级页面"
            }), "的默认焦点就是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
              children: "层级页面"
            }), "的根容器。  若某", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
              children: "层级页面"
            }), "内有多个组件设置了defaultFocus(true)，则以组件树深度遍历找到的第一个组件为默认焦点。"]
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "groupdefaultfocus9",
      children: "groupDefaultFocus9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "groupDefaultFocus(value: boolean): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前组件是否为当前组件所在容器获焦时的默认焦点。当组件未设置groupDefaultFocus时，组件默认不为当前组件所在容器获焦时的默认焦点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前组件是否为当前组件所在容器获焦时的默认焦点，仅在初次创建容器节点第一次获焦时生效。true表示当前组件为所在容器获焦时的默认焦点，false表示当前组件不是所在容器获焦时的默认焦点。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  必须与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tabindex9",
              children: "tabIndex"
            }), "联合使用，当某个容器设置了tabIndex，且容器内某子组件或容器自身设置了groupDefaultFocus(true)，当该容器首次TAB键获焦时，会自动将焦点转移至该指定的组件上。若容器内（包含容器本身）有多个组件设置了groupDefaultFocus(true)，则以组件树深度遍历找到的第一个组件为最终结果。"]
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "focusontouch9",
      children: "focusOnTouch9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "focusOnTouch(value: boolean): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前组件是否支持点击获焦能力。当组件未设置focusOnTouch时，组件默认不支持点击获焦能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前组件是否支持点击获焦能力。true表示组件支持点击获焦，false表示不支持点击获焦。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅在组件可点击时才能正常获取焦点。"]
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "focusbox12",
      children: "focusBox12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "focusBox(style: FocusBoxStyle): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前组件系统焦点框样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#focusboxstyle12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "FocusBoxStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前组件系统焦点框样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅影响走焦状态下展示了系统焦点框的组件。"]
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "focuscontrol9",
      children: "focusControl9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "焦点控制模块。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requestfocus9",
      children: "requestFocus9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "requestFocus(value: string): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法语句中可使用的全局接口，调用此接口可以主动让焦点在下一帧渲染时转移至参数指定的组件上。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果需要指定组件立刻获焦，推荐使用FocusController中的焦点同步转移接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller#requestfocus12",
        children: "requestFocus"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标组件使用接口key(value: string)或id(value: string)绑定的字符串。"
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
            children: "返回值表示是否成功给目标组件申请到焦点。若参数指向的目标组件存在且已挂载组件树，并具备获焦能力，则返回true，否则返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(102620)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持焦点控制的组件：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
        children: "TextInput"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
        children: "TextArea"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search",
        children: "Search"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
        children: "Button"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
        children: "Image"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "。焦点事件当前仅支持在真机上显示运行效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "focusboxstyle12对象说明",
      children: "FocusBoxStyle12+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前组件系统焦点框样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "margin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点框相对组件边缘的距离。  正数代表外侧，负数代表内侧。不支持百分比。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "strokeColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点框颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "strokeWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "焦点框宽度。  不支持负数与百分比。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "focusscopepriority12",
      children: "focusScopePriority12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "focusScopePriority(scopeId: string, priority?: FocusPriority): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置当前组件在指定容器内获焦的优先级。需要配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "#focusscopeid12",
        children: "focusScopeId"
      }), "一起使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scopeId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前组件设置的获焦优先级生效的容器组件的id标识。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1.当前组件必须在scopeId所标识的容器内，或其所属容器在scopeId所标识的容器内。  2.组件不可重复设置多个优先级。  3.设置了focusScopeId的容器组件不可设置优先级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#focuspriority12",
              children: "FocusPriority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获焦优先级。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  未设置priority时，默认为AUTO优先级。  优先级对走焦以及获焦组件的影响：  1.容器整体获焦（", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
              children: "层级页面"
            }), "切换/焦点切换到焦点组/容器组件使用requestFocus申请焦点）时，若容器内存在优先级为PREVIOUS的组件，则优先级为PREVIOUS的组件获焦，否则，由容器内上次获焦的组件获焦。  2.容器非整体获焦（非焦点组场景下使用tab键/方向键走焦）时，若容器为首次获焦，则容器内优先级最高的组件获焦，若容器非首次获焦，不考虑优先级按照位置顺序走焦。"]
          })]
        })]
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "focuspriority12",
      children: "FocusPriority12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件焦点的优先级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认的优先级，缺省时组件的获焦优先级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRIOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "容器内优先获焦的优先级。优先级高于AUTO。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREVIOUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上一次容器整体失焦时获焦节点的优先级。优先级高于PRIOR。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "keyprocessingmode15",
      children: "KeyProcessingMode15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置按键事件处理的优先级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOCUS_NAVIGATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值，当前组件不消费按键时，tab/方向键优先在当前容器内走焦。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ANCESTOR_EVENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前组件不消费按键时，tab/方向键优先冒泡给父组件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "focusscopeid12",
      children: "focusScopeId12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "focusScopeId(id: string, isGroup?: boolean): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前容器组件的id标识，以及是否为焦点组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前容器组件的id标识。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  单个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
              children: "层级页面"
            }), "下，id标识全局唯一，不可重复。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isGroup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前容器组件是否为焦点组。true表示容器组件为焦点组，false表示容器组件不是焦点组。默认值为false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  焦点组不可嵌套，不可重复配置。  焦点组不能和tabIndex混用。  配置焦点组的目的是使得容器及容器内的元素可以按照焦点组规则走焦。焦点组走焦规则：  1.焦点组容器内只能通过方向键走焦，tab键会使焦点跳出焦点组容器。  2.通过方向键使焦点从焦点组容器外切换到焦点组容器内时，若焦点组容器内存在优先级为PREVIOUS的组件，则优先级为PREVIOUS的组件获焦，否则，由焦点组容器内上次获焦的组件获焦。"]
          })]
        })]
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "focusscopeid14",
      children: "focusScopeId14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "focusScopeId(id: string, isGroup?: boolean, arrowStepOut?: boolean): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前容器组件的id标识，以及是否为焦点组。新增参数arrowStepOut，用于设置能否使用方向键走焦出当前焦点组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前容器组件的id标识。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  单个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
              children: "层级页面"
            }), "下，id标识全局唯一，不可重复。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isGroup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前容器组件是否为焦点组。true表示容器组件为焦点组，false表示容器组件不是焦点组。默认值为false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  焦点组不可嵌套，不可重复配置。  焦点组不能和tabIndex混用。  配置焦点组的目的是使得容器及容器内的元素可以按照焦点组规则走焦。焦点组走焦规则：  1.焦点组容器内只能通过方向键走焦，tab键会使焦点跳出焦点组容器。  2.通过方向键使焦点从焦点组容器外切换到焦点组容器内时，若焦点组容器内存在优先级为PREVIOUS的组件，则优先级为PREVIOUS的组件获焦，否则，由焦点组容器内上次获焦的组件获焦。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "arrowStepOut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置能否使用方向键走焦出当前焦点组。true表示可以使用方向键走焦出当前焦点组，false表示不能使用方向键走焦出当前焦点组。默认值为true。"
          })]
        })]
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabstop14",
      children: "tabStop14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tabStop(isTabStop: boolean): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置当前容器组件的tabStop，可决定焦点在走焦时是否会停留在当前容器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "isTabStop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前容器组件是否为走焦可停留容器。true表示当前容器组件为走焦可停留容器，false表示当前容器组件不是走焦可停留容器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1.配置tabStop需要确保是容器组件且有可获焦的孩子组件，默认容器组件不能直接获焦。  2.通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller#requestfocus12",
              children: "requestFocus"
            }), "请求焦点，如果是容器组件且配置tabStop，焦点能够停留在容器组件，如果未配置tabStop，即使整条焦点链上有配置了tabStop的组件，该组件依然能获取到焦点。  3.配置tabStop的容器不允许嵌套超过2层。  tabStop走焦规则：  1.通过tab键和方向键走焦，焦点会停留在配置了tabStop的组件上，如果焦点停留在配置了tabStop的容器内部时，可以走焦到容器内部的下一个可获焦组件，如果焦点停留在配置了tabStop的容器外部时，可以走焦到容器外的下一个可获焦组件。  2.当焦点停留在tabStop上时，按Enter键可以走焦到内部第一个可获焦组件，按ESC能够将焦点退回到不超过当前", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
              children: "层级页面"
            }), "根容器的上一个配置了tabStop的组件，按空格键可以响应该容器的onClick事件。  3.不建议根容器配置tabStop。如果根容器配置了tabStop，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-focuscontroller/arkts-apis-uicontext-focuscontroller#clearfocus12",
              children: "clearFocus"
            }), "将焦点清理到根容器，再按Enter键会重新走回内部上一次获焦组件，通过ESC键将焦点清理到根容器，再按Enter键会走焦到内部第一个可获焦组件。"]
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述走焦的时候的按键以及获焦组件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(459722)/* ["default"] */.A) + "",
        width: "354",
        height: "406"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前焦点停留在button2上，按下tab键将会走焦到Column3，再按下tab键会循环走焦到button1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nextfocus18",
      children: "nextFocus18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "nextFocus(nextStep: Optional<FocusMovement>): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的自定义焦点走焦逻辑。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "nextStep"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#focusmovement18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "FocusMovement"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前容器组件的自定义走焦规则。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  默认值为重置nextStep为空。  没设置自定义走焦或者设置自定义组件容器不存在，仍进行默认走焦规则。"]
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "focusmovement18对象说明",
      children: "FocusMovement18+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置对应的按键对应的走焦目的组件，缺省则遵循默认走焦规则。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过tab键走焦到组件的id。  默认值为重置forward为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过shift+tab键走焦到组件的id。  默认值为重置backward为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "up"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过方向键上键走焦到组件的id。  默认值为重置up为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过方向键下键走焦到组件的id。  默认值为重置down为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过方向键左键走焦到组件的id。  默认值为重置left为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过方向键右键走焦到组件的id。  默认值为重置right为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(111641)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["直接使用focusControl可能导致", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface#ui%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8D%E6%98%8E%E7%A1%AE",
        children: "UI上下文不明确"
      }), "的问题，建议使用getUIContext()获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "实例，并使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getfocuscontroller12",
        children: "getFocusController"
      }), "获取绑定实例的focusControl。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置组件获焦和走焦的效果",
      children: "示例1（设置组件获焦和走焦的效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#defaultfocus9",
        children: "defaultFocus"
      }), "可以使绑定的组件成为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5",
        children: "层级页面"
      }), "创建后首次获焦的焦点，配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#groupdefaultfocus9",
        children: "groupDefaultFocus"
      }), "可以使绑定的组件成为tabIndex容器创建后首次获焦的焦点，配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#focusontouch9",
        children: "focusOnTouch"
      }), "可以使绑定的组件点击后立即获焦。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// focusTest.ets\n@Entry\n@Component\nstruct FocusableExample {\n  @State inputValue: string = '';\n\n  build() {\n    Scroll() {\n      Row({ space: 20 }) {\n        Column({ space: 20 }) {\n          Column({ space: 5 }) {\n            Button('Group1')\n              .width(165)\n              .height(40)\n              .fontColor(Color.White)\n              .focusOnTouch(true) // 该Button组件点击后可获焦\n            Row({ space: 5 }) {\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n                .focusOnTouch(true) // 该Button组件点击后可获焦\n            }\n\n            Row({ space: 5 }) {\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n            }\n          }.borderWidth(2).borderColor(Color.Red).borderStyle(BorderStyle.Dashed)\n          .tabIndex(1) // 该Column组件为按TAB键走焦的第一个获焦的组件\n          Column({ space: 5 }) {\n            Button('Group2')\n              .width(165)\n              .height(40)\n              .fontColor(Color.White)\n            Row({ space: 5 }) {\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n                .groupDefaultFocus(true) // 该Button组件上级Column组件获焦时获焦\n            }\n\n            Row({ space: 5 }) {\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n            }\n          }.borderWidth(2).borderColor(Color.Green).borderStyle(BorderStyle.Dashed)\n          .tabIndex(2) // 该Column组件为按TAB键走焦的第二个获焦的组件\n        }\n\n        Column({ space: 5 }) {\n          TextInput({ placeholder: 'input', text: this.inputValue })\n            .onChange((value: string) => {\n              this.inputValue = value\n            })\n            .width(156)\n            .defaultFocus(true) // 该TextInput组件为层级页面的初始默认焦点\n          Button('Group3')\n            .width(165)\n            .height(40)\n            .fontColor(Color.White)\n          Row({ space: 5 }) {\n            Button()\n              .width(80)\n              .height(40)\n              .fontColor(Color.White)\n            Button()\n              .width(80)\n              .height(40)\n              .fontColor(Color.White)\n          }\n\n          Button()\n            .width(165)\n            .height(40)\n            .fontColor(Color.White)\n          Row({ space: 5 }) {\n            Button()\n              .width(80)\n              .height(40)\n              .fontColor(Color.White)\n            Button()\n              .width(80)\n              .height(40)\n              .fontColor(Color.White)\n          }\n\n          Button()\n            .width(165)\n            .height(40)\n            .fontColor(Color.White)\n          Row({ space: 5 }) {\n            Button()\n              .width(80)\n              .height(40)\n              .fontColor(Color.White)\n            Button()\n              .width(80)\n              .height(40)\n              .fontColor(Color.White)\n          }\n        }.borderWidth(2).borderColor(Color.Orange).borderStyle(BorderStyle.Dashed)\n        .tabIndex(3) // 该Column组件为按TAB键走焦的第三个获焦的组件\n      }.alignItems(VerticalAlign.Top)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示意图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首次进入时，焦点默认在defaultFocus绑定的TextInput组件上："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(568833)/* ["default"] */.A) + "",
        width: "362",
        height: "311"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首次按TAB键，焦点切换到tabIndex(1)的容器上，且自动走焦到内部第一个可获焦组件上："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(461915)/* ["default"] */.A) + "",
        width: "360",
        height: "313"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "第二次按TAB键，焦点切换到tabIndex(2)的容器上，且自动走到其内部的groupDefaultFocus绑定的组件上："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(830920)/* ["default"] */.A) + "",
        width: "358",
        height: "312"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "第三次按TAB键，焦点切换到tabIndex(3)的容器上，且自动走焦到内部配置了DefaultFocus的组件上："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(462101)/* ["default"] */.A) + "",
        width: "360",
        height: "310"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击绑定了focusOnTouch的组件，组件自身获焦，焦点框被清除，再按下TAB键后，显示焦点框："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(176102)/* ["default"] */.A) + "",
        width: "358",
        height: "312"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置指定组件获焦",
      children: "示例2（设置指定组件获焦）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#requestfocus9",
        children: "focusControl.requestFocus"
      }), "使指定组件获取焦点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// requestFocus.ets\n@Entry\n@Component\nstruct RequestFocusExample {\n  @State idList: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'LastPageId'];\n  @State selectId: string = 'LastPageId';\n\n  build() {\n    Column({ space: 20 }) {\n      Row({ space: 5 }) {\n        Button(\"id: \" + this.idList[0] + \" focusable(false)\")\n          .width(180)\n          .height(70)\n          .fontColor(Color.White)\n          .id(this.idList[0])\n          .focusable(false)\n        Button(\"id: \" + this.idList[1])\n          .width(180).height(70).fontColor(Color.White)\n          .id(this.idList[1])\n      }\n\n      Row({ space: 5 }) {\n        Button(\"id: \" + this.idList[2])\n          .width(180).height(70).fontColor(Color.White)\n          .id(this.idList[2])\n        Button(\"id: \" + this.idList[3])\n          .width(180).height(70).fontColor(Color.White)\n          .id(this.idList[3])\n      }\n\n      Row({ space: 5 }) {\n        Button(\"id: \" + this.idList[4])\n          .width(180).height(70).fontColor(Color.White)\n          .id(this.idList[4])\n        Button(\"id: \" + this.idList[5])\n          .width(180).height(70).fontColor(Color.White)\n          .id(this.idList[5])\n      }\n\n      Row({ space: 5 }) {\n        Select([{ value: this.idList[0] },\n          { value: this.idList[1] },\n          { value: this.idList[2] },\n          { value: this.idList[3] },\n          { value: this.idList[4] },\n          { value: this.idList[5] },\n          { value: this.idList[6] }])\n          .value(this.selectId)\n          .onSelect((index: number) => {\n            this.selectId = this.idList[index]\n          })\n        Button(\"RequestFocus\")\n          .width(180).height(70).fontColor(Color.White)\n          .onClick(() => {\n            // 建议使用this.getUIContext().getFocusController().requestFocus()\n            let res = focusControl.requestFocus(this.selectId) // 使选中的this.selectId的组件获焦\n            if (res) {\n              this.getUIContext().getPromptAction().showToast({ message: 'Request success' })\n            } else {\n              this.getUIContext().getPromptAction().showToast({ message: 'Request failed' })\n            }\n          })\n      }\n    }.width('100%').margin({ top: 20 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示意图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按下TAB键，激活焦点态显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "申请不存在的组件获焦："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(821174)/* ["default"] */.A) + "",
        width: "398",
        height: "704"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "申请不可获焦的组件获焦："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(531612)/* ["default"] */.A) + "",
        width: "397",
        height: "701"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "申请存在且可获焦的组件获焦："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(862394)/* ["default"] */.A) + "",
        width: "397",
        height: "703"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置焦点框样式",
      children: "示例3（设置焦点框样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#focusbox12",
        children: "focusBox"
      }), "修改组件的焦点框样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ColorMetrics, LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct RequestFocusExample {\n  build() {\n    Column({ space: 30 }) {\n      Button(\"small black focus box\")\n        .focusBox({\n          margin: new LengthMetrics(0),\n          strokeColor: ColorMetrics.rgba(0, 0, 0),\n        })\n      Button(\"large red focus box\")\n        .focusBox({\n          margin: LengthMetrics.px(20),\n          strokeColor: ColorMetrics.rgba(255, 0, 0),\n          strokeWidth: LengthMetrics.px(10)\n        })\n    }\n    .alignItems(HorizontalAlign.Center)\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(562126)/* ["default"] */.A) + "",
        width: "405",
        height: "139"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置焦点组走焦",
      children: "示例4（设置焦点组走焦）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#focusscopepriority12",
        children: "focusScopePriority"
      }), "，可以使绑定的组件在所属容器首次获焦时成为焦点，配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#focusscopeid12",
        children: "focusScopeId"
      }), "，可以使绑定的容器组件成为焦点组。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// focusTest.ets\n@Entry\n@Component\nstruct FocusableExample {\n  @State inputValue: string = '';\n\n  build() {\n    Scroll() {\n      Row({ space: 20 }) {\n        Column({ space: 20 }) { // 标记为Column1\n          Column({ space: 5 }) {\n            Button('Group1')\n              .width(165)\n              .height(40)\n              .fontColor(Color.White)\n            Row({ space: 5 }) {\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n            }\n\n            Row({ space: 5 }) {\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n            }\n          }.borderWidth(2).borderColor(Color.Red).borderStyle(BorderStyle.Dashed)\n\n          Column({ space: 5 }) {\n            Button('Group2')\n              .width(165)\n              .height(40)\n              .fontColor(Color.White)\n            Row({ space: 5 }) {\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n                .focusScopePriority('ColumnScope1', FocusPriority.PRIOR) // Column1首次获焦时获焦\n            }\n\n            Row({ space: 5 }) {\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n              Button()\n                .width(80)\n                .height(40)\n                .fontColor(Color.White)\n            }\n          }.borderWidth(2).borderColor(Color.Green).borderStyle(BorderStyle.Dashed)\n        }\n        .focusScopeId('ColumnScope1')\n\n        Column({ space: 5 }) { // 标记为Column2\n          TextInput({ placeholder: 'input', text: this.inputValue })\n            .onChange((value: string) => {\n              this.inputValue = value\n            })\n            .width(156)\n          Button('Group3')\n            .width(165)\n            .height(40)\n            .fontColor(Color.White)\n          Row({ space: 5 }) {\n            Button()\n              .width(80)\n              .height(40)\n              .fontColor(Color.White)\n            Button()\n              .width(80)\n              .height(40)\n              .fontColor(Color.White)\n          }\n\n          Button()\n            .width(165)\n            .height(40)\n            .fontColor(Color.White)\n            .focusScopePriority('ColumnScope2', FocusPriority.PREVIOUS) // Column2获焦时获焦\n          Row({ space: 5 }) {\n            Button()\n              .width(80)\n              .height(40)\n              .fontColor(Color.White)\n            Button()\n              .width(80)\n              .height(40)\n              .fontColor(Color.White)\n          }\n\n          Button()\n            .width(165)\n            .height(40)\n            .fontColor(Color.White)\n          Row({ space: 5 }) {\n            Button()\n              .width(80)\n              .height(40)\n              .fontColor(Color.White)\n            Button()\n              .width(80)\n              .height(40)\n              .fontColor(Color.White)\n          }\n        }.borderWidth(2).borderColor(Color.Orange).borderStyle(BorderStyle.Dashed)\n        .focusScopeId('ColumnScope2', true) // Column2为焦点组\n      }.alignItems(VerticalAlign.Top)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示意图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首次按下TAB键时，焦点转移到容器1中绑定focusScopePriority的组件上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(228388)/* ["default"] */.A) + "",
        width: "329",
        height: "251"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "继续按下TAB键，焦点转移到容器1下一个组件上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(956659)/* ["default"] */.A) + "",
        width: "296",
        height: "252"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "再次按下TAB键，焦点转移到容器1下一个组件上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(309245)/* ["default"] */.A) + "",
        width: "293",
        height: "256"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "继续按下TAB键，焦点转移到容器2中配置了focusScopePriority的组件上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(905265)/* ["default"] */.A) + "",
        width: "290",
        height: "253"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "继续按下TAB键，焦点转移到容器1中名为Group1的组件上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(579129)/* ["default"] */.A) + "",
        width: "283",
        height: "432"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置tab走焦停留",
      children: "示例5（设置tab走焦停留）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#tabstop14",
        children: "tabStop"
      }), "实现使用tab走焦停留在组件上。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ColorMetrics, LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct TabStop {\n  build() {\n    Column({ space: 20 }) {\n      Column({ space: 20 }) {\n        Column({ space: 20 }) {\n          Row({ space: 5 }) {\n            Button(\"button 1\")\n              .width(200).height(70).fontColor(Color.White)\n              .focusBox({\n                margin: LengthMetrics.px(20),\n                strokeColor: ColorMetrics.rgba(23, 169, 141),\n                strokeWidth: LengthMetrics.px(10)\n              })\n          }\n\n          Row({ space: 5 }) {\n            Button(\"button 2\")\n              .width(200).height(70).fontColor(Color.White)\n              .focusBox({\n                margin: LengthMetrics.px(20),\n                strokeColor: ColorMetrics.rgba(23, 169, 141),\n                strokeWidth: LengthMetrics.px(10)\n              })\n          }\n        }.width('80%').margin({ top: 30 }).borderColor(Color.Black)\n      }.width('95%').margin({ top: 60 }).borderColor(Color.Black)\n\n      Column({ space: 20 }) {\n        Column({ space: 20 }) {\n          Row({ space: 5 }) {\n            Button(\"button 3\")\n              .width(200)\n              .height('70%')\n              .fontColor(Color.White)\n              .focusBox({\n                margin: LengthMetrics.px(20),\n                strokeColor: ColorMetrics.rgba(23, 169, 141),\n                strokeWidth: LengthMetrics.px(10)\n              })\n              .margin({ top: 15 })\n          }\n        }\n        .width('80%')\n        .height('120')\n        .borderColor(Color.Black)\n        .margin({ top: 10 })\n        .tabStop(true)\n        .focusBox({\n          margin: LengthMetrics.px(20),\n          strokeColor: ColorMetrics.rgba(23, 169, 141),\n          strokeWidth: LengthMetrics.px(10)\n        })\n        .borderWidth(1)\n      }.width('95%').margin({ top: 50 }).borderColor(Color.Black)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示意图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连续按下两次TAB键，焦点转移到button2上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(556910)/* ["default"] */.A) + "",
        width: "338",
        height: "410"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接着按下TAB键，焦点转移到配置了tabStop的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(76617)/* ["default"] */.A) + "",
        width: "346",
        height: "413"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "再按下Enter键，焦点转移至内部button3上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(920881)/* ["default"] */.A) + "",
        width: "326",
        height: "407"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "再按下ESC键，焦点转移到配置了tabStop的组件上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(223984)/* ["default"] */.A) + "",
        width: "346",
        height: "413"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "再按下TAB键，焦点循环走焦到button1上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(563698)/* ["default"] */.A) + "",
        width: "328",
        height: "424"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6设置自定义走焦",
      children: "示例6（设置自定义走焦）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该示例通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#nextfocus18",
        children: "nextFocus"
      }), "实现自定义走焦规则。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果不配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#nextfocus18",
        children: "nextFocus"
      }), "，默认的点击tab的走焦顺序为：M->A->B->C；配置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "#nextfocus18",
        children: "nextFocus"
      }), "以后，走焦顺序变更为：M->D->F->B。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class MyButtonModifier implements AttributeModifier<ButtonAttribute> {\n  applyNormalAttribute(instance: ButtonAttribute): void {\n    instance.id('M')\n    instance.nextFocus({ forward: 'D', up: 'C', down: 'D' })\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State modifier: MyButtonModifier = new MyButtonModifier();\n  @State idList: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];\n\n  build() {\n    Column({ space: 10 }) {\n      Row({ space: 10 }) {\n        Button(\"id: M\")\n          .attributeModifier(this.modifier)\n        Button(\"id: \" + this.idList[0])\n          .id(this.idList[0])\n          .nextFocus({\n            forward: 'C',\n            backward: 'M',\n            up: 'E',\n            right: 'F',\n            down: 'B',\n            left: 'D'\n          });\n        Button(\"id: \" + this.idList[1])\n          .id(this.idList[1])\n      }\n\n      Column({ space: 10 }) {\n        Button(\"id: \" + this.idList[2])\n          .id(this.idList[2]);\n        Button(\"id: \" + this.idList[3])\n          .id(this.idList[3])\n          .nextFocus({ forward: 'F' });\n      }\n\n      Row({ space: 10 }) {\n        Button(\"id: \" + this.idList[4])\n          .id(this.idList[4]);\n        Button(\"id: \" + this.idList[5])\n          .id(this.idList[5])\n          .nextFocus({ forward: 'B' });\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(101626)/* ["default"] */.A) + "",
        width: "238",
        height: "217"
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
556910(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439579-e076c4af69e8b849e06f483ee9888b86.png");

},
111641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
862394(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959530-847876c5d6fdadc5f6b6b8265562a030.png");

},
821174(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799880-b673e30359902b4f812efb231a7f7a95.png");

},
579129(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799884-375391c298b22dc63ccabf4937921098.png");

},
830920(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439573-09f33835946cd755bba5ca5e5cb76f4c.png");

},
920881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479535-ff6f071cba1e616ac8821c1e9a2956ce.png");

},
76617(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959534-0f0277c5d146ae7f1fcef78f0c886662.png");

},
223984(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959534-0f0277c5d146ae7f1fcef78f0c886662.png");

},
461915(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799878-fc0048c8bc84f41ab9a4bc9bb4d07676.png");

},
176102(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479529-3247e3e099934374d24026fb76b26aeb.png");

},
309245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959532-04accd2d7bf7dbc20febfa6b09aaa76e.png");

},
459722(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959526-014c0d6ad73ce2410fbf6de56e12f6a9.png");

},
905265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479533-85f33864cb4c178e3f9762edccc51aeb.png");

},
563698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799886-83d6b8e2bb1ae2d16eaad47a3ec2e98f.png");

},
783814(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
462101(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959528-e21807398c28b072ee2bd60f0174fee8.png");

},
531612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439575-b5f2cfb4a132e63623cc1e547e5f868c.png");

},
863455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
690402(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
228388(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799882-f92e0d72fad1e8cf2e201b3ccf333e5e.png");

},
956659(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439577-5e8755b5235d21dfa197e19c2f2e00ac.png");

},
562126(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479531-aa60de0c1725558b96a6b5ddb53c0a81.gif");

},
101626(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439581-fef2926fac787549b8d6408d9a57b168.gif");

},
568833(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479527-a63a654211ac3961c75b8a39ca112ed0.png");

},
102620(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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