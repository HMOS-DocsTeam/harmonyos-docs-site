"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["642708"], {
447829(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_attribute_modifier_property_ts_universal_attributes_attribute_modifier_ts_universal_attributes_attribute_modifier_md_702_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-attribute-modifier-property-ts-universal-attributes-attribute-modifier-ts-universal-attributes-attribute-modifier-md-702.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_attribute_modifier_property_ts_universal_attributes_attribute_modifier_ts_universal_attributes_attribute_modifier_md_702_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier","title":"动态属性设置","description":"动态设置组件的属性，支持开发者在属性设置时使用if/else语法，且根据需要使用多态样式设置属性。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"动态属性设置","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-attribute-modifier"},"sidebar":"ref","previous":{"title":"半模态转场","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition"},"next":{"title":"动态手势设置","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-gesture-modifier/ts-universal-attributes-gesture-modifier"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier.md


const frontMatter = {
	title: '动态属性设置',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-attribute-modifier'
};
const contentTitle = '动态属性设置';

const assets = {

};



const toc = [{
  "value": "attributeModifier",
  "id": "attributemodifier",
  "level": 2
}, {
  "value": "AttributeModifier&lt;T&gt;",
  "id": "attributemodifiert",
  "level": 2
}, {
  "value": "applyNormalAttribute",
  "id": "applynormalattribute",
  "level": 3
}, {
  "value": "applyPressedAttribute",
  "id": "applypressedattribute",
  "level": 3
}, {
  "value": "applyFocusedAttribute",
  "id": "applyfocusedattribute",
  "level": 3
}, {
  "value": "applyDisabledAttribute",
  "id": "applydisabledattribute",
  "level": 3
}, {
  "value": "applySelectedAttribute",
  "id": "applyselectedattribute",
  "level": 3
}, {
  "value": "自定义Modifier",
  "id": "自定义modifier",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（组件绑定Modifier切换背景颜色）",
  "id": "示例1组件绑定modifier切换背景颜色",
  "level": 3
}, {
  "value": "示例2（组件绑定Modifier实现按压态效果）",
  "id": "示例2组件绑定modifier实现按压态效果",
  "level": 3
}, {
  "value": "示例3（自定义Modifier不支持感知@State装饰的状态数据变化）",
  "id": "示例3自定义modifier不支持感知state装饰的状态数据变化",
  "level": 3
}, {
  "value": "示例4（Modifier和自定义Modifier的属性同时生效）",
  "id": "示例4modifier和自定义modifier的属性同时生效",
  "level": 3
}, {
  "value": "示例5（组件绑定Modifier获焦样式）",
  "id": "示例5组件绑定modifier获焦样式",
  "level": 3
}, {
  "value": "示例6（组件绑定Modifier禁用状态的样式）",
  "id": "示例6组件绑定modifier禁用状态的样式",
  "level": 3
}, {
  "value": "示例7（组件绑定Modifier选中状态样式）",
  "id": "示例7组件绑定modifier选中状态样式",
  "level": 3
}, {
  "value": "示例8（自定义组件绑定Modifier实现按压态效果）",
  "id": "示例8自定义组件绑定modifier实现按压态效果",
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
    ol: "ol",
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
        id: "动态属性设置",
        children: "动态属性设置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态设置组件的属性，支持开发者在属性设置时使用if/else语法，且根据需要使用多态样式设置属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(398384)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 11开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在attributeModifier中设置的属性尽量不要与其他方法设置的属性相同，避免在页面刷新时attributeModifier不生效。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["对于仅需根据条件设置组件单一属性的简单场景，可以使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-declarative-ui-description#%E9%85%8D%E7%BD%AE%E5%B1%9E%E6%80%A7",
          children: "三目表达式"
        }), "（如.width(isFullScreen ? 200 : 100)）。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 20开始，attributeModifier支持自定义组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attributemodifier",
      children: "attributeModifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "attributeModifier(modifier: AttributeModifier<T>): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态设置组件的属性方法。"
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
            children: "modifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#attributemodifiert",
              children: "AttributeModifier<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前组件上，动态设置属性方法，支持使用if/else语法。  modifier：属性修改器，开发者需要自定义class实现AttributeModifier接口。"
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
      id: "attributemodifiert",
      children: "AttributeModifier<T>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要自定义class实现AttributeModifier接口。"
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
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(355453)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以下回调函数中，当对instance对象的同一个属性重复设置相同的值或对象时，不会触发该属性的更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applynormalattribute",
      children: "applyNormalAttribute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "applyNormalAttribute?(instance: T): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件普通状态时的样式。"
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
            children: "instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件的属性类，用来标识进行属性设置的组件的类型，比如", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
              children: "Button"
            }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#%E5%B1%9E%E6%80%A7",
              children: "ButtonAttribute"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
              children: "Text"
            }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#%E5%B1%9E%E6%80%A7",
              children: "TextAttribute"
            }), "等。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applypressedattribute",
      children: "applyPressedAttribute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "applyPressedAttribute?(instance: T): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件按压状态的样式。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E7%BB%84%E4%BB%B6%E7%BB%91%E5%AE%9Amodifier%E5%AE%9E%E7%8E%B0%E6%8C%89%E5%8E%8B%E6%80%81%E6%95%88%E6%9E%9C",
        children: "示例2（组件绑定Modifier实现按压态效果）"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B8%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%BB%91%E5%AE%9Amodifier%E5%AE%9E%E7%8E%B0%E6%8C%89%E5%8E%8B%E6%80%81%E6%95%88%E6%9E%9C",
        children: "示例8（自定义组件绑定Modifier实现按压态效果）"
      }), "。"]
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
            children: "instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件的属性类，用来标识进行属性设置的组件的类型，比如", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
              children: "Button"
            }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#%E5%B1%9E%E6%80%A7",
              children: "ButtonAttribute"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
              children: "Text"
            }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#%E5%B1%9E%E6%80%A7",
              children: "TextAttribute"
            }), "等。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applyfocusedattribute",
      children: "applyFocusedAttribute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "applyFocusedAttribute?(instance: T): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件获焦状态的样式。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B5%E7%BB%84%E4%BB%B6%E7%BB%91%E5%AE%9Amodifier%E8%8E%B7%E7%84%A6%E6%A0%B7%E5%BC%8F",
        children: "示例5（组件绑定Modifier获焦样式）"
      }), "。"]
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
            children: "instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件的属性类，用来标识进行属性设置的组件的类型，比如", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
              children: "Button"
            }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#%E5%B1%9E%E6%80%A7",
              children: "ButtonAttribute"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
              children: "Text"
            }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#%E5%B1%9E%E6%80%A7",
              children: "TextAttribute"
            }), "等。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applydisabledattribute",
      children: "applyDisabledAttribute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "applyDisabledAttribute?(instance: T): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件禁用状态的样式。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B6%E7%BB%84%E4%BB%B6%E7%BB%91%E5%AE%9Amodifier%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81%E7%9A%84%E6%A0%B7%E5%BC%8F",
        children: "示例6（组件绑定modifier禁用状态的样式）"
      }), "。"]
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
            children: "instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件的属性类，用来标识进行属性设置的组件的类型，比如", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
              children: "Button"
            }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#%E5%B1%9E%E6%80%A7",
              children: "ButtonAttribute"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
              children: "Text"
            }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#%E5%B1%9E%E6%80%A7",
              children: "TextAttribute"
            }), "等。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applyselectedattribute",
      children: "applySelectedAttribute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "applySelectedAttribute?(instance: T): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件选中状态的样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可根据需要自定义实现这些方法，通过传入的参数识别组件类型，对instance设置属性，支持使用if/else语法进行动态设置。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B7%E7%BB%84%E4%BB%B6%E7%BB%91%E5%AE%9Amodifier%E9%80%89%E4%B8%AD%E7%8A%B6%E6%80%81%E6%A0%B7%E5%BC%8F",
        children: "示例7（组件绑定modifier选中状态样式）"
      }), "。"]
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
            children: "instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件的属性类，用来标识进行属性设置的组件的类型，比如", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
              children: "Button"
            }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#%E5%B1%9E%E6%80%A7",
              children: "ButtonAttribute"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
              children: "Text"
            }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#%E5%B1%9E%E6%80%A7",
              children: "TextAttribute"
            }), "等。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "instance参数支持范围："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-alphabet-indexer/ts-container-alphabet-indexer#%E5%B1%9E%E6%80%A7",
        children: "AlphabetIndexerAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-badge/ts-container-badge#%E5%B1%9E%E6%80%A7",
        children: "BadgeAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-blank/ts-basic-components-blank#%E5%B1%9E%E6%80%A7",
        children: "BlankAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#%E5%B1%9E%E6%80%A7",
        children: "ButtonAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-calendarpicker/ts-basic-components-calendarpicker#%E5%B1%9E%E6%80%A7",
        children: "CalendarPickerAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas#%E5%B1%9E%E6%80%A7",
        children: "CanvasAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox#%E5%B1%9E%E6%80%A7",
        children: "CheckboxAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup#%E5%B1%9E%E6%80%A7",
        children: "CheckboxGroupAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-circle/ts-drawing-components-circle#%E5%B1%9E%E6%80%A7",
        children: "CircleAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column#%E5%B1%9E%E6%80%A7",
        children: "ColumnAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-columnsplit/ts-container-columnsplit#%E5%B1%9E%E6%80%A7",
        children: "ColumnSplitAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "CommonAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-counter/ts-container-counter#%E5%B1%9E%E6%80%A7",
        children: "CounterAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-datapanel/ts-basic-components-datapanel#%E5%B1%9E%E6%80%A7",
        children: "DataPanelAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-datepicker/ts-basic-components-datepicker#%E5%B1%9E%E6%80%A7",
        children: "DatePickerAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-divider/ts-basic-components-divider#%E5%B1%9E%E6%80%A7",
        children: "DividerAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-ellipse/ts-drawing-components-ellipse#%E5%B1%9E%E6%80%A7",
        children: "EllipseAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex#%E5%B1%9E%E6%80%A7",
        children: "FlexAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-flowitem/ts-container-flowitem#%E5%B1%9E%E6%80%A7",
        children: "FlowItemAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/service-widgets/ts-container-formlink/ts-container-formlink#%E5%B1%9E%E6%80%A7",
        children: "FormLinkAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-gauge/ts-basic-components-gauge#%E5%B1%9E%E6%80%A7",
        children: "GaugeAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid#%E5%B1%9E%E6%80%A7",
        children: "GridAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridcol/ts-container-gridcol#%E5%B1%9E%E6%80%A7",
        children: "GridColAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-griditem/ts-container-griditem#%E5%B1%9E%E6%80%A7",
        children: "GridItemAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-gridrow/ts-container-gridrow#%E5%B1%9E%E6%80%A7",
        children: "GridRowAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-container-hyperlink/ts-container-hyperlink#%E5%B1%9E%E6%80%A7",
        children: "HyperlinkAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-swiper-components-indicator/ts-swiper-components-indicator#%E5%B1%9E%E6%80%A7",
        children: "IndicatorComponentAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#%E5%B1%9E%E6%80%A7",
        children: "ImageAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-imageanimator/ts-basic-components-imageanimator#%E5%B1%9E%E6%80%A7",
        children: "ImageAnimatorAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-imagespan/ts-basic-components-imagespan#%E5%B1%9E%E6%80%A7",
        children: "ImageSpanAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-containerspan/ts-basic-components-containerspan#%E5%B1%9E%E6%80%A7",
        children: "ContainerSpanAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-line/ts-drawing-components-line#%E5%B1%9E%E6%80%A7",
        children: "LineAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#%E5%B1%9E%E6%80%A7",
        children: "ListAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem#%E5%B1%9E%E6%80%A7",
        children: "ListItemAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup#%E5%B1%9E%E6%80%A7",
        children: "ListItemGroupAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-loadingprogress/ts-basic-components-loadingprogress#%E5%B1%9E%E6%80%A7",
        children: "LoadingProgressAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-marquee/ts-basic-components-marquee#%E5%B1%9E%E6%80%A7",
        children: "MarqueeAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu#%E5%B1%9E%E6%80%A7",
        children: "MenuAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitem/ts-basic-components-menuitem#%E5%B1%9E%E6%80%A7",
        children: "MenuItemAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitemgroup/ts-basic-components-menuitemgroup",
        children: "MenuItemGroupAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination#%E5%B1%9E%E6%80%A7",
        children: "NavDestinationAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#%E5%B1%9E%E6%80%A7",
        children: "NavigationAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-container-navigator/ts-container-navigator#%E5%B1%9E%E6%80%A7",
        children: "NavigatorAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-navrouter/ts-basic-components-navrouter#%E5%B1%9E%E6%80%A7",
        children: "NavRouterAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-container-panel/ts-container-panel#%E5%B1%9E%E6%80%A7",
        children: "PanelAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-path/ts-drawing-components-path#%E5%B1%9E%E6%80%A7",
        children: "PathAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-patternlock/ts-basic-components-patternlock#%E5%B1%9E%E6%80%A7",
        children: "PatternLockAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-polygon/ts-drawing-components-polygon#%E5%B1%9E%E6%80%A7",
        children: "PolygonAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-polyline/ts-drawing-components-polyline#%E5%B1%9E%E6%80%A7",
        children: "PolylineAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress#%E5%B1%9E%E6%80%A7",
        children: "ProgressAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-qrcode/ts-basic-components-qrcode#%E5%B1%9E%E6%80%A7",
        children: "QRCodeAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio#%E5%B1%9E%E6%80%A7",
        children: "RadioAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-rating/ts-basic-components-rating#%E5%B1%9E%E6%80%A7",
        children: "RatingAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-rect/ts-drawing-components-rect#%E5%B1%9E%E6%80%A7",
        children: "RectAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-refresh/ts-container-refresh#%E5%B1%9E%E6%80%A7",
        children: "RefreshAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer#%E5%B1%9E%E6%80%A7",
        children: "RelativeContainerAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#%E5%B1%9E%E6%80%A7",
        children: "RichEditorAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richtext/ts-basic-components-richtext#%E5%B1%9E%E6%80%A7",
        children: "RichTextAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row#%E5%B1%9E%E6%80%A7",
        children: "RowAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-rowsplit/ts-container-rowsplit#%E5%B1%9E%E6%80%A7",
        children: "RowSplitAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#%E5%B1%9E%E6%80%A7",
        children: "ScrollAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-scrollbar/ts-basic-components-scrollbar#%E5%B1%9E%E6%80%A7",
        children: "ScrollBarAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search#%E5%B1%9E%E6%80%A7",
        children: "SearchAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select#%E5%B1%9E%E6%80%A7",
        children: "SelectAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-shape/ts-drawing-components-shape#%E5%B1%9E%E6%80%A7",
        children: "ShapeAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-sidebarcontainer/ts-container-sidebarcontainer#%E5%B1%9E%E6%80%A7",
        children: "SideBarContainerAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider#%E5%B1%9E%E6%80%A7",
        children: "SliderAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span#%E5%B1%9E%E6%80%A7",
        children: "SpanAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolspan/ts-basic-components-symbolspan#%E5%B1%9E%E6%80%A7",
        children: "SymbolSpanAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack#%E5%B1%9E%E6%80%A7",
        children: "StackAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-stepper/ts-basic-components-stepper#%E5%B1%9E%E6%80%A7",
        children: "StepperAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-stepperitem/ts-basic-components-stepperitem#%E5%B1%9E%E6%80%A7",
        children: "StepperItemAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#%E5%B1%9E%E6%80%A7",
        children: "SwiperAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#%E5%B1%9E%E6%80%A7",
        children: "SymbolGlyphAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent#%E5%B1%9E%E6%80%A7",
        children: "TabContentAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs#%E5%B1%9E%E6%80%A7",
        children: "TabsAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#%E5%B1%9E%E6%80%A7",
        children: "TextAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#%E5%B1%9E%E6%80%A7",
        children: "TextAreaAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-textclock/ts-basic-components-textclock#%E5%B1%9E%E6%80%A7",
        children: "TextClockAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#%E5%B1%9E%E6%80%A7",
        children: "TextInputAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-textpicker/ts-basic-components-textpicker#%E5%B1%9E%E6%80%A7",
        children: "TextPickerAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-texttimer/ts-basic-components-texttimer#%E5%B1%9E%E6%80%A7",
        children: "TextTimerAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker#%E5%B1%9E%E6%80%A7",
        children: "TimePickerAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle#%E5%B1%9E%E6%80%A7",
        children: "ToggleAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-media-components-video/ts-media-components-video#%E5%B1%9E%E6%80%A7",
        children: "VideoAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#%E5%B1%9E%E6%80%A7",
        children: "WaterFlowAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent#%E5%B1%9E%E6%80%A7",
        children: "XComponentAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-particle-animation/ts-particle-animation#%E5%B1%9E%E6%80%A7",
        children: "ParticleAttribute"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-container-ui-picker-component/ts-container-ui-picker-component#%E5%B1%9E%E6%80%A7",
        children: "UIPickerComponentAttribute"
      }), "22+。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(852300)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "StepperAttribute从API version 22开始废弃，建议使用SwiperAttribute替代。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "StepperItemAttribute从API version 22开始废弃，建议使用SwiperAttribute替代。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NavigatorAttribute从API version 20开始废弃，建议使用NavigationAttribute替代。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NavRouterAttribute从API version 20开始废弃，建议使用NavigationAttribute替代。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PanelAttribute从API version 20开始废弃，推荐使用通用属性bindSheet。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "属性支持范围："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持入参或者返回值为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
          children: "CustomBuilder"
        }), "的属性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持入参为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-modifier",
          children: "modifier"
        }), "类型的属性，具体为以下属性方法：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#attributemodifier",
          children: "attributeModifier"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-draw-modifier/ts-universal-attributes-draw-modifier",
          children: "drawModifier"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-gesture-modifier/ts-universal-attributes-gesture-modifier",
          children: "gestureModifier"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-animatorproperty/ts-animatorproperty",
          children: "animation"
        }), "属性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-binding",
          children: "gesture"
        }), "类型的属性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-polymorphic-style/ts-universal-attributes-polymorphic-style",
          children: "stateStyles"
        }), "属性。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持已废弃属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持或者未实现的属性在使用时会抛出\"Method not implemented.\"、\"is not callable\"、\"Builder is not supported.\"等异常信息。具体Modifier支持范围可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributemodifier#%E5%B1%9E%E6%80%A7%E6%88%96%E4%BA%8B%E4%BB%B6%E5%AF%B9attributemodifier%E7%9A%84%E6%94%AF%E6%8C%81%E6%83%85%E5%86%B5",
        children: "属性或事件对attributemodifier的支持情况"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义modifier",
      children: "自定义Modifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，开发者可使用自定义Modifier构建组件并配置属性，通过此自定义的Modifier可调用所封装组件的属性和样式接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "自定义Modifier支持范围："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CommonModifier、ColumnModifier、ColumnSplitModifier、RowModifier、RowSplitModifier、SideBarContainerModifier、BlankModifier、DividerModifier、GridColModifier、GridRowModifier、NavDestinationModifier、NavigatorModifier、StackModifier、NavigationModifier、NavRouterModifier、StepperItemModifier、StepperModifier20+、TabsModifier、GridModifier、GridItemModifier、ListModifier、ListItemModifier、ListItemGroupModifier、ScrollModifier、SwiperModifier、WaterFlowModifier、ButtonModifier、CounterModifier、TextPickerModifier、TimePickerModifier、ToggleModifier、CalendarPickerModifier、CheckboxModifier、CheckboxGroupModifier、DatePickerModifier、RadioModifier、RatingModifier、SelectModifier、SliderModifier、PatternLockModifier、SpanModifier、SymbolSpanModifier、ContainerSpanModifier、RichEditorModifier、RefreshModifier、SearchModifier、TextAreaModifier、TextModifier、TextInputModifier、ImageSpanModifier、ImageAnimatorModifier、ImageModifier、VideoModifier、DataPanelModifier、GaugeModifier、LoadingProgressModifier、MarqueeModifier、ProgressModifier、QRCodeModifier、TextClockModifier、TextTimerModifier、LineModifier、PathModifier、PolygonModifier、PolylineModifier、RectModifier、ShapeModifier、AlphabetIndexerModifier、FormComponentModifier、HyperlinkModifier、MenuModifier、MenuItemModifier、PanelModifier、SymbolGlyphModifier、ParticleModifier、UIPickerComponentModifier22+。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未暴露的组件Modifier可以使用CommonModifier。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(934796)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "StepperModifier从API version 22开始废弃，建议使用SwiperModifier替代。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "StepperItemModifier从API version 22开始废弃，建议使用SwiperModifier替代。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NavigatorModifier从API version 20开始废弃，建议使用NavigationModifier替代。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NavRouterModifier从API version 20开始废弃，建议使用NavigationModifier替代。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PanelModifier从API version 20开始废弃，推荐使用通用属性bindSheet。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意事项"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置自定义Modifier给一个组件，该组件对应属性生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义Modifier属性值变化，组件对应属性也会变化。自定义Modifier类型为基类，构造的对象为子类对象，使用时要通过as进行类型断言为子类。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一个自定义Modifier设置给两个组件，Modifier属性变化的时候对两个组件同时生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一个Modifier设置了属性A和属性B，再设置属性C和属性D，4个属性同时在组件上生效。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自定义Modifier不支持@State标注的状态数据的变化感知，见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%A4%BA%E4%BE%8B3%E8%87%AA%E5%AE%9A%E4%B9%89modifier%E4%B8%8D%E6%94%AF%E6%8C%81%E6%84%9F%E7%9F%A5state%E8%A3%85%E9%A5%B0%E7%9A%84%E7%8A%B6%E6%80%81%E6%95%B0%E6%8D%AE%E5%8F%98%E5%8C%96",
          children: "示例3（自定义Modifier不支持感知@State装饰的状态数据变化）"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多次通过attributeModifier设置属性时，生效的属性为所有属性的并集，相同属性按照设置顺序生效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1组件绑定modifier切换背景颜色",
      children: "示例1（组件绑定Modifier切换背景颜色）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过Button绑定Modifier实现了点击切换背景颜色的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n// 设置Button组件属性的自定义AttributeModifier\nclass MyButtonModifier implements AttributeModifier<ButtonAttribute> {\n  public isDark: boolean = false;\n\n  applyNormalAttribute(instance: ButtonAttribute): void {\n    if (this.isDark) {\n      instance.backgroundColor(Color.Black);\n    } else {\n      instance.backgroundColor(Color.Red);\n    }\n  }\n}\n\n@Entry\n@Component\nstruct attributeDemo {\n  @State modifier: MyButtonModifier = new MyButtonModifier();\n\n  build() {\n    Row() {\n      Column() {\n        Button(\"Button\")\n          .attributeModifier(this.modifier)\n          .onClick(() => {\n            this.modifier.isDark = !this.modifier.isDark;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(242567)/* ["default"] */.A) + "",
        width: "672",
        height: "504"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2组件绑定modifier实现按压态效果",
      children: "示例2（组件绑定Modifier实现按压态效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过Button绑定Modifier实现了按压态的效果。如果配合状态管理V2使用，详情见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-object#modifier",
        children: "Modifier与makeObserved"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n// 设置Button组件属性的自定义AttributeModifier\nclass MyButtonModifier implements AttributeModifier<ButtonAttribute> {\n  applyNormalAttribute(instance: ButtonAttribute): void {\n    instance.backgroundColor(Color.Black);\n  }\n\n  applyPressedAttribute(instance: ButtonAttribute): void {\n    instance.backgroundColor(Color.Red);\n  }\n}\n\n@Entry\n@Component\nstruct attributePressedDemo {\n  @State modifier: MyButtonModifier = new MyButtonModifier();\n\n  build() {\n    Row() {\n      Column() {\n        Button(\"Button\")\n          .attributeModifier(this.modifier)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(80964)/* ["default"] */.A) + "",
        width: "672",
        height: "504"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3自定义modifier不支持感知state装饰的状态数据变化",
      children: "示例3（自定义Modifier不支持感知@State装饰的状态数据变化）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过状态数据设置自定义Modifier的宽度，自定义Modifier不支持感知@State装饰的状态数据变化，点击按钮后宽度不发生改变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CommonModifier } from \"@kit.ArkUI\";\n\nconst TEST_TAG: string = \"AttributeModifier\";\n\n// 设置通用组件属性的自定义AttributeModifier\nclass MyModifier extends CommonModifier {\n  applyNormalAttribute(instance: CommonAttribute): void {\n    super.applyNormalAttribute?.(instance);\n  }\n}\n\n@Component\nstruct MyImage1 {\n  @Link modifier: CommonModifier;\n\n  build() {\n    Image($r(\"app.media.startIcon\")).attributeModifier(this.modifier as MyModifier)\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  index: number = 0;\n  @State width1: number = 100;\n  @State height1: number = 100;\n  @State myModifier: CommonModifier = new MyModifier().width(this.width1).height(this.height1).margin(10);\n\n  build() {\n    Column() {\n      Button($r(\"app.string.EntryAbility_label\"))\n        .margin(10)\n        .onClick(() => {\n          console.info(TEST_TAG, \"onClick\");\n          this.index++;\n          if (this.index % 2 === 1) {\n            this.width1 = 10;\n            console.info(TEST_TAG, \"setGroup1\");\n          } else {\n            this.height1 = 10;\n            console.info(TEST_TAG, \"setGroup2\");\n          }\n        })\n      MyImage1({ modifier: this.myModifier })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(157915)/* ["default"] */.A) + "",
        width: "318",
        height: "381"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4modifier和自定义modifier的属性同时生效",
      children: "示例4（Modifier和自定义Modifier的属性同时生效）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过自定义Modifier设置了width和height，点击按钮时设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#borderstyle",
        children: "borderStyle"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#borderwidth",
        children: "borderWidth"
      }), "，点击后4个属性同时生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CommonModifier } from \"@kit.ArkUI\";\n\nconst TEST_TAG: string = \"AttributeModifier\";\n\n// 设置通用组件属性的自定义AttributeModifier\nclass MyModifier extends CommonModifier {\n  applyNormalAttribute(instance: CommonAttribute): void {\n    super.applyNormalAttribute?.(instance);\n  }\n\n  public setGroup1(): void {\n    this.borderStyle(BorderStyle.Dotted);\n    this.borderWidth(8);\n  }\n\n  public setGroup2(): void {\n    this.borderStyle(BorderStyle.Dashed);\n    this.borderWidth(8);\n  }\n}\n\n@Component\nstruct MyImage1 {\n  @Link modifier: CommonModifier;\n\n  build() {\n    Image($r(\"app.media.startIcon\")).attributeModifier(this.modifier as MyModifier)\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State myModifier: CommonModifier = new MyModifier().width(100).height(100).margin(10);\n  index: number = 0;\n\n  build() {\n    Column() {\n      Button($r(\"app.string.EntryAbility_label\"))\n        .margin(10)\n        .onClick(() => {\n          console.info(TEST_TAG, \"onClick\");\n          this.index++;\n          if (this.index % 2 === 1) {\n            (this.myModifier as MyModifier).setGroup1();\n            console.info(TEST_TAG, \"setGroup1\");\n          } else {\n            (this.myModifier as MyModifier).setGroup2();\n            console.info(TEST_TAG, \"setGroup2\");\n          }\n        })\n      MyImage1({ modifier: this.myModifier })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(92516)/* ["default"] */.A) + "",
        width: "318",
        height: "381"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5组件绑定modifier获焦样式",
      children: "示例5（组件绑定Modifier获焦样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过Button绑定Modifier实现了组件在获得焦点时的样式效果。点击Button2后，Button会显示获得焦点后的样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置Button组件属性的自定义AttributeModifier\nclass MyButtonModifier implements AttributeModifier<ButtonAttribute> {\n\n  applyNormalAttribute(instance: ButtonAttribute): void {\n    instance.backgroundColor(Color.Blue);\n  }\n  applyFocusedAttribute(instance: ButtonAttribute): void {\n    instance.backgroundColor(Color.Green);\n  }\n}\n\n@Entry\n@Component\nstruct attributeDemo {\n  @State modifier: MyButtonModifier = new MyButtonModifier();\n  @State isDisable: boolean = true;\n\n  build() {\n    Row() {\n      Column() {\n        Button(\"Button\")\n          .attributeModifier(this.modifier)\n          .enabled(this.isDisable)\n          .id(\"app\")\n        Divider().vertical(false).strokeWidth(15).color(Color.Transparent)\n        Button(\"Button2\")\n          .onClick(() => {\n            this.getUIContext().getFocusController().activate(true);\n            this.getUIContext().getFocusController().requestFocus(\"app\");\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(726735)/* ["default"] */.A) + "",
        width: "294",
        height: "235"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6组件绑定modifier禁用状态的样式",
      children: "示例6（组件绑定Modifier禁用状态的样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过Button绑定Modifier实现了组件禁用时的样式效果。点击Button2后，Button会显示禁用状态的样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置Button组件属性的自定义AttributeModifier\nclass MyButtonModifier implements AttributeModifier<ButtonAttribute> {\n  applyDisabledAttribute(instance: ButtonAttribute): void {\n    instance.width(200);\n  }\n}\n\n@Entry\n@Component\nstruct attributeDemo {\n  @State modifier: MyButtonModifier = new MyButtonModifier();\n  @State isDisable: boolean = true;\n\n  build() {\n    Row() {\n      Column() {\n        Button(\"Button\")\n          .attributeModifier(this.modifier)\n          .enabled(this.isDisable)\n        Divider().vertical(false).strokeWidth(15).color(Color.Transparent)\n        Button(\"Button2\")\n          .onClick(() => {\n            this.isDisable = !this.isDisable;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(500163)/* ["default"] */.A) + "",
        width: "294",
        height: "235"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7组件绑定modifier选中状态样式",
      children: "示例7（组件绑定Modifier选中状态样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过Radio绑定Modifier实现了展示组件选中时样式的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置Radio组件属性的自定义AttributeModifier\nclass MyRadioModifier implements AttributeModifier<RadioAttribute> {\n  applyNormalAttribute(instance: RadioAttribute): void {\n    instance.backgroundColor(Color.Blue);\n  }\n\n  applySelectedAttribute(instance: RadioAttribute): void {\n    instance.backgroundColor(Color.Red);\n    instance.borderWidth(2);\n  }\n}\n\n@Entry\n@Component\nstruct attributeDemo {\n  @State modifier: MyRadioModifier = new MyRadioModifier();\n  @State value: boolean = false;\n  @State value2: boolean = false;\n\n  build() {\n    Row() {\n      Column() {\n        Radio({ value: 'Radio1', group: 'radioGroup1' })\n          .checked(this.value)\n          .height(50)\n          .width(50)\n          .borderWidth(0)\n          .borderRadius(30)\n          .onClick(() => {\n            this.value = !this.value;\n          })\n          .attributeModifier(this.modifier)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(951450)/* ["default"] */.A) + "",
        width: "294",
        height: "235"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8自定义组件绑定modifier实现按压态效果",
      children: "示例8（自定义组件绑定Modifier实现按压态效果）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过Common（自定义）绑定Modifier实现了按压态的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n// 设置自定义组件属性的自定义AttributeModifier\nclass CustomModifier implements AttributeModifier<CommonAttribute> {\n  applyNormalAttribute(instance: CommonAttribute): void {\n    instance.backgroundColor(Color.Blue)\n  }\n\n  applyPressedAttribute(instance: CommonAttribute): void {\n    instance.backgroundColor(Color.Gray)\n  }\n}\n\n@Entry\n@Component\nstruct attributePressedDemo {\n  @State modifier: CustomModifier = new CustomModifier()\n\n  build() {\n    Row() {\n      Column() {\n        ChildComponent()\n          .attributeModifier(this.modifier)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\n// 自定义组件\n@Component\nstruct ChildComponent {\n  build() {\n    Text(\"common\")\n      .fontColor(Color.White)\n      .fontSize(28)\n      .textAlign(TextAlign.Center)\n      .width('35%')\n      .height('10%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(676902)/* ["default"] */.A) + "",
        width: "209",
        height: "329"
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
951450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479575-cfe8553c9033516a4a323af9da8c40a4.gif");

},
92516(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799924-791b8953221aa41a2749fb3fbafb08b1.gif");

},
398384(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
157915(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479573-5cc962a2b7b2bd5deb511c22f0a6df85.gif");

},
80964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959572-0923daea6a75b44ebf1c8d69cc87c159.gif");

},
852300(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
676902(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
934796(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
726735(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
355453(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
242567(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959572-0923daea6a75b44ebf1c8d69cc87c159.gif");

},
500163(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959574-028ad617dde410b1003358ea7dd5323b.gif");

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