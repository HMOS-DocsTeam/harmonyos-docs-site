"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["150231"], {
612578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_layout_property_ts_universal_attributes_size_ts_universal_attributes_size_md_6a6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-layout-property-ts-universal-attributes-size-ts-universal-attributes-size-md-6a6.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_layout_property_ts_universal_attributes_size_ts_universal_attributes_size_md_6a6_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size","title":"尺寸设置","description":"设置组件的宽高、边距。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"尺寸设置","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-size","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-size"},"sidebar":"ref","previous":{"title":"禁用反色能力","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-allow-force-dark/ts-allow-force-dark"},"next":{"title":"位置设置","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size.md


const frontMatter = {
	title: '尺寸设置',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-size',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-size'
};
const contentTitle = '尺寸设置';

const assets = {

};



const toc = [{
  "value": "width",
  "id": "width",
  "level": 2
}, {
  "value": "height",
  "id": "height",
  "level": 2
}, {
  "value": "width15+",
  "id": "width15",
  "level": 2
}, {
  "value": "height15+",
  "id": "height15",
  "level": 2
}, {
  "value": "size",
  "id": "size",
  "level": 2
}, {
  "value": "padding",
  "id": "padding",
  "level": 2
}, {
  "value": "margin",
  "id": "margin",
  "level": 2
}, {
  "value": "safeAreaPadding14+",
  "id": "safeareapadding14",
  "level": 2
}, {
  "value": "layoutWeight",
  "id": "layoutweight",
  "level": 2
}, {
  "value": "constraintSize",
  "id": "constraintsize",
  "level": 2
}, {
  "value": "LayoutPolicy15+",
  "id": "layoutpolicy15",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置组件的宽高和边距）",
  "id": "示例1设置组件的宽高和边距",
  "level": 3
}, {
  "value": "示例2（LocalizedPadding和LocalizedMargin类型的使用）",
  "id": "示例2localizedpadding和localizedmargin类型的使用",
  "level": 3
}, {
  "value": "示例3（设置组件级安全区）",
  "id": "示例3设置组件级安全区",
  "level": 3
}, {
  "value": "示例4（使用attributeModifier动态设置安全区）",
  "id": "示例4使用attributemodifier动态设置安全区",
  "level": 3
}, {
  "value": "示例5（设置布局策略）",
  "id": "示例5设置布局策略",
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
        id: "尺寸设置",
        children: "尺寸设置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的宽高、边距。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(46839)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果组件的尺寸通过百分比进行设置， 在计算组件尺寸的百分比大小时，参考最近设置了固定大小的祖先节点的尺寸。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 10开始，尺寸设置内部分属性支持使用calc计算特性，具体支持属性请参考对应的属性说明。calc计算特性是一种动态计算长度值的函数，常用于灵活设置布局尺寸（如宽度、高度、边距等）。它允许通过数学表达式组合不同单位和数值，支持通过加减乘除括号运算符组成计算表达式，实现动态响应式设计。注意，在使用calc时，运算符与数值之间需要使用空格隔开。具体使用场景可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%A4%BA%E4%BE%8B1%E8%AE%BE%E7%BD%AE%E7%BB%84%E4%BB%B6%E7%9A%84%E5%AE%BD%E9%AB%98%E5%92%8C%E8%BE%B9%E8%B7%9D",
          children: "示例1"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "width",
      children: "width"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "width(value: Length): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件自身的宽度，缺省时使用元素自身内容需要的宽度。若子组件的宽大于父组件的宽，则会超出父组件的范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始，该接口支持calc计算特性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要设置的组件宽度。  单位：vp"
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
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(663553)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
          children: "TextInput"
        }), "组件中，width设置auto表示自适应文本宽度。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-alphabet-indexer/ts-container-alphabet-indexer",
          children: "AlphabetIndexer"
        }), "组件中，width设置auto表示自适应宽度最大索引项的宽度。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "height",
      children: "height"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "height(value: Length): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件自身的高度，缺省时使用元素自身内容需要的高度。若子组件的高大于父组件的高，则会超出父组件的范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始，该接口支持calc计算特性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要设置的组件高度。  单位：vp"
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
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(424468)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
        children: "Row"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
        children: "Column"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer",
        children: "RelativeContainer"
      }), "组件中，width、height设置auto表示自适应子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "width15",
      children: "width15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "width(widthValue: Length | LayoutPolicy): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件自身的宽度或水平方向布局策略，缺省时使用元素自身内容需要的宽度。若子组件的宽大于父组件的宽，则会超出父组件的范围。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 15开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "widthValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#layoutpolicy15",
              children: "LayoutPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
      id: "height15",
      children: "height15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "height(heightValue: Length | LayoutPolicy): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件自身的高度或垂直方向布局策略，缺省时使用元素自身内容需要的高度。若子组件的高大于父组件的高，则会超出父组件的范围。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 15开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "heightValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#layoutpolicy15",
              children: "LayoutPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
      id: "size",
      children: "size"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "size(value: SizeOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件自身的宽高尺寸。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始，该接口支持calc计算特性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#sizeoptions",
              children: "SizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置宽高尺寸。  异常值：参数为undefined时，属性设置不生效；其它异常值时，size属性恢复到不配置时的默认行为。  单位：vp"
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
      id: "padding",
      children: "padding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "padding(value: Padding | Length | LocalizedPadding): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的内边距属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始，该接口支持calc计算特性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#padding",
              children: "Padding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedpadding12",
              children: "LocalizedPadding"
            }), "12+"]
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
      id: "margin",
      children: "margin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "margin(value: Margin | Length | LocalizedMargin): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的外边距属性。在计算位置时外边距视为组件大小的一部分，从而影响组件位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始，该接口支持calc计算特性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#margin",
              children: "Margin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedmargin12",
              children: "LocalizedMargin"
            }), "12+"]
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
      id: "safeareapadding14",
      children: "safeAreaPadding14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "safeAreaPadding(paddingValue: Padding | LengthMetrics | LocalizedPadding): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置安全区边距属性。允许容器向自身添加组件级安全区域，供子组件延伸，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(950948)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 14开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "paddingValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#padding",
              children: "Padding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedpadding12",
              children: "LocalizedPadding"
            })
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
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(813162)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当父辈和祖先容器设置了组件级安全区域时，子组件可以感知并利用该区域，称该区域为累计安全区延伸（accumulatedSafeAreaExpand，下文简称SAE），表示子组件在四个方向上各可延伸的长度。当祖辈与更上一级祖辈的safeAreaPadding相邻接（即未被margin、border、padding分隔）时，SAE将递归地向外累积，直至不存在相邻的更外层safeAreaPadding或递归至页面容器外。系统级避让区域（如状态栏、导航条、挖孔区等，详情参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area",
        children: "安全区域"
      }), "中的说明）可视为页面容器特有的safeAreaPadding，同样参与该延伸范围的计算。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过与其他属性配合使用，可对上述计算得到的组件级安全区区域加以利用。例如，对子组件设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area#ignorelayoutsafearea20",
        children: "ignoreLayoutSafeArea"
      }), "属性，即可利用SAE延伸组件的布局范围。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layoutweight",
      children: "layoutWeight"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "layoutWeight(value: number | string): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置组件的布局权重，使组件在父容器（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
        children: "Row"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
        children: "Column"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex",
        children: "Flex"
      }), "）的主轴方向按照权重分配尺寸。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
      id: "constraintsize",
      children: "constraintSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constraintSize(value: ConstraintSizeOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置约束尺寸，组件布局时，进行尺寸范围限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始，该接口支持calc计算特性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#constraintsizeoptions",
              children: "ConstraintSizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置约束尺寸。constraintSize的优先级高于Width和Height。取值结果参考constraintSize取值对width/height影响。  默认值：  {  minWidth: 0,  maxWidth: Infinity,  minHeight: 0,  maxHeight: Infinity  }  异常值：数值开头的字符串仅解析出数字部分，非数值开头的字符串解析为0；其它异常值时，constraintSize属性恢复到不配置时的默认行为。  单位：vp"
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
          children: "constraintSize(minWidth/maxWidth/minHeight/maxHeight)取值对width/height影响："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "缺省值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "结果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\\"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "width=MAX(minWidth,MIN(maxWidth,width))  height=MAX(minHeight,MIN(maxHeight,height))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxWidth、maxHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "width=MAX(minWidth,width)  height=MAX(minHeight,height)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minWidth、minHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "width=MIN(maxWidth,width)  height=MIN(maxHeight,height)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width、height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若minWidth<maxWidth，组件自身布局逻辑生效，width取值范围为[minWidth,maxWidth]；否则，width=MAX(minWidth,maxWidth)。  若minHeight<maxHeight，组件自身布局逻辑生效，height取值范围为[minHeight,maxHeight]；否则，height=MAX(minHeight,maxHeight)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width与maxWidth、height与maxHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "width=minWidth  height=minHeight"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width与minWidth、height与minHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件自身布局逻辑生效，width取值约束为不大于maxWidth。  组件自身布局逻辑生效，height取值约束为不大于maxHeight。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minWidth与maxWidth、minHeight与maxHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "width以所设值为基础，根据其他布局属性发生可能的拉伸或者压缩。  height以所设值为基础，根据其他布局属性发生可能的拉伸或者压缩。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width与minWidth与maxWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用父容器传递的布局限制进行布局。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height与minHeight与maxHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用父容器传递的布局限制进行布局。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layoutpolicy15",
      children: "LayoutPolicy15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于组件宽度和高度的布局策略。"
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
            children: "matchParent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#layoutpolicy15",
              children: "LayoutPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前组件自适应父组件布局时，其大小与父组件内容区相等，不包括padding，border和safeAreaPadding。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 15开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wrapContent20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#layoutpolicy15",
              children: "LayoutPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前组件自适应子组件（内容）时，其大小与子组件（内容）相等，并且其大小受父组件内容区大小约束。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 20开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fixAtIdealSize20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#layoutpolicy15",
              children: "LayoutPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前组件自适应子组件（内容）时，其大小与子组件（内容）相等，并且其大小不受父组件内容区大小约束。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 20开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(718662)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LayoutPolicy支持设置三种布局策略：matchParent（自适应父组件布局）、wrapContent（根据内容自适应但不超过父组件尺寸的布局）和fixAtIdealSize（根据内容自适应，可能超过父组件尺寸的布局）。具体示例代码参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#%E7%A4%BA%E4%BE%8B5%E8%AE%BE%E7%BD%AE%E5%B8%83%E5%B1%80%E7%AD%96%E7%95%A5",
          children: "设置布局策略"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "wrapContent和fixAtIdealSize场景，组件无法通过内容确定大小时，如果组件大小有默认值，则按照默认值进行测算；如果没有默认值，则按照宽高(0,0)进行测算。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "容器设置wrapContent，并且有子组件设置matchParent时（包括仅一边设置matchParent），容器先由确定大小的子组件撑大，设置matchParent的子组件再匹配容器大小；如果没有确定大小的子组件，容器和子组件大小均为0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LayoutPolicy优先级低于constraintSize。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 15开始，仅Row和Column组件的width和height属性支持设置LayoutPolicy类型参数，其他组件设置LayoutPolicy类型参数后与不设置宽度或高度表现一致；从API version 20开始，所有基础组件均支持设置LayoutPolicy类型参数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置组件的宽高和边距",
      children: "示例1（设置组件的宽高和边距）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的宽度、高度、内边距及外边距。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SizeExample {\n  build() {\n    Column({ space: 10 }) {\n      Text('margin and padding:').fontSize(12).fontColor(0xCCCCCC).width('90%')\n      Row() {\n        // 宽度80 ,高度80 ,外边距20(蓝色区域），上下左右的内边距分别为5、15、10、20（白色区域）\n        Row() {\n          Row()\n            .size({ width: '100%', height: '100%' })\n            .backgroundColor(Color.Yellow)\n        }\n        .width(80)\n        .height(80)\n        .padding({\n          top: 5,\n          left: 10,\n          bottom: 15,\n          right: 20\n        })\n        .margin(20)\n        .backgroundColor(Color.White)\n      }.backgroundColor(Color.Blue)\n\n      Text('constraintSize')\n        .fontSize(12)\n        .fontColor(0xCCCCCC)\n        .width('90%')\n      Text('this is a Text.this is a Text.this is a Text.this is a Text.this is a Text.this is a Text.this is a Text.this is a Text.this is a Text.this is a Text.this is a Text.this is a Text.this is a Text.this is a Text.this is a Text')\n        .width('90%')\n        .constraintSize({ maxWidth: 200 })\n\n      Text('layoutWeight')\n        .fontSize(12)\n        .fontColor(0xCCCCCC)\n        .width('90%')\n      // 父容器尺寸确定时，设置了layoutWeight的子元素在主轴布局尺寸按照权重进行分配，忽略本身尺寸设置。\n      Row() {\n        // 权重1，占主轴剩余空间1/3\n        Text('layoutWeight(1)')\n          .size({ width: '30%', height: 110 }).backgroundColor(0xFFEFD5).textAlign(TextAlign.Center)\n          .layoutWeight(1)\n        // 权重2，占主轴剩余空间2/3\n        Text('layoutWeight(2)')\n          .size({ width: '30%', height: 110 }).backgroundColor(0xF5DEB3).textAlign(TextAlign.Center)\n          .layoutWeight(2)\n        // 未设置layoutWeight属性，组件按照自身尺寸渲染\n        Text('no layoutWeight')\n          .size({ width: '30%', height: 110 }).backgroundColor(0xD2B48C).textAlign(TextAlign.Center)\n      }\n      .size({ width: '90%', height: 140 })\n      .backgroundColor(0xAFEEEE)\n\n      // calc计算特性\n      Text('calc:')\n        .fontSize(12)\n        .fontColor(0xCCCCCC)\n        .width('90%')\n      Column() {\n        Row() {\n          Text('width 50%')\n            .fontSize(14)\n            .borderWidth(1)\n            .textAlign(TextAlign.Center)\n            .size({ width: '50%', height: 50 })\n          Text('width 50vp')\n            .fontSize(14)\n            .borderWidth(1)\n            .textAlign(TextAlign.Center)\n            .size({ width: '50vp', height: 50 })\n        }\n        .width('100%')\n        .justifyContent(FlexAlign.Center)\n\n        Text('width:calc(50% + 50vp), height:calc(50%)')\n          .fontSize(14)\n          .borderWidth(1)\n          .fontWeight(FontWeight.Bold)\n          .backgroundColor(0xFFFAF0)\n          .textAlign(TextAlign.Center)\n          .size({ width: 'calc(50% + 50vp)', height: 'calc(50%)' })\n          // width和height设置百分比时，以父容器的width和height作为基础值。calc的宽度计算结果与上方的两个text宽度之和相等。\n      }.width('100%').height(100)\n    }\n    .width('100%')\n    .margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(789758)/* ["default"] */.A) + "",
        width: "597",
        height: "1003"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2localizedpadding和localizedmargin类型的使用",
      children: "示例2（LocalizedPadding和LocalizedMargin类型的使用）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用LocalizedPadding类型和LocalizedMargin类型定义padding和margin属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI'\n\n@Entry\n@Component\nstruct SizeExample {\n  build() {\n    Column({ space: 10 }) {\n      Text('margin and padding:')\n        .fontSize(12)\n        .fontColor(0xCCCCCC)\n        .width('90%')\n      Row() {\n        // 宽度80 ,高度80 ,上下开始结束的外边距40、20、30、10(蓝色区域），上下开始结束的内边距分别为5、15、10、20（白色区域）\n        Row() {\n          Row()\n            .size({ width: '100%', height: '100%' })\n            .backgroundColor(Color.Yellow)\n        }\n        .width(80)\n        .height(80)\n        .padding({\n          top: LengthMetrics.vp(5),\n          bottom: LengthMetrics.vp(15),\n          start: LengthMetrics.vp(10),\n          end: LengthMetrics.vp(20)\n        })\n        .margin({\n          top: LengthMetrics.vp(40),\n          bottom: LengthMetrics.vp(20),\n          start: LengthMetrics.vp(30),\n          end: LengthMetrics.vp(10)\n        })\n        .backgroundColor(Color.White)\n      }\n      .backgroundColor(Color.Blue)\n    }\n    .width('100%')\n    .margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从左至右显示语言示例图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(479735)/* ["default"] */.A) + "",
        width: "300",
        height: "168"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从右至左显示语言示例图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(432852)/* ["default"] */.A) + "",
        width: "300",
        height: "168"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置组件级安全区",
      children: "示例3（设置组件级安全区）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对容器设置组件级安全区。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SafeAreaPaddingExample {\n  build() {\n    Column() {\n      Column() {\n        Column()\n          .width('100%')\n          .height('100%')\n          .backgroundColor(Color.Pink)\n      }\n      .width(200)\n      .height(200)\n      .backgroundColor(Color.Yellow)\n      .borderWidth(10)\n      .padding(10)\n      .safeAreaPadding(LengthMetrics.vp(40))\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(835572)/* ["default"] */.A) + "",
        width: "161",
        height: "160"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4使用attributemodifier动态设置安全区",
      children: "示例4（使用attributeModifier动态设置安全区）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用attributeModifier对容器设置组件级安全区。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nclass MyModifier implements AttributeModifier<CommonAttribute> {\n  applyNormalAttribute(instance: CommonAttribute): void {\n    instance.safeAreaPadding({\n      left: 10,\n      top: 20,\n      right: 30,\n      bottom: 40\n    })\n  }\n}\n\n@Entry\n@Component\nstruct SafeAreaPaddingExample {\n  @State modifier: MyModifier = new MyModifier()\n\n  build() {\n    Column() {\n      Column() {\n        Column()\n          .width('100%')\n          .height('100%')\n          .backgroundColor(Color.Pink)\n      }\n      .width(200)\n      .height(200)\n      .backgroundColor(Color.Yellow)\n      .borderWidth(10)\n      .padding(10)\n      .attributeModifier(this.modifier)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(782548)/* ["default"] */.A) + "",
        width: "280",
        height: "245"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置布局策略",
      children: "示例5（设置布局策略）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对容器大小设置布局策略。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct LayoutPolicyExample {\n  build() {\n    Column() {\n      Column() {\n        // matchParent生效时，当前组件会与其父组件内容区大小（180vp * 180vp）相等，同时依旧受自身constraintSize（150vp * 150vp）约束，因此当前组件大小为150vp * 150vp\n        Text('matchParent')\n        Flex()\n          .backgroundColor('rgb(0, 74, 175)')\n          .width(LayoutPolicy.matchParent)\n          .height(LayoutPolicy.matchParent)\n          .constraintSize({ maxWidth: 150, maxHeight: 150 })\n\n        // wrapContent生效时，当前组件会与其子组件大小（300vp * 300vp）相等，但不能超过父组件内容大小（180vp * 180vp）且会受自身constraintSize（250vp * 250vp）约束，因此当前组件大小为180vp * 180vp\n        Text('wrapContent')\n        Row() {\n          Flex()\n            .width(300)\n            .height(300)\n        }\n        .backgroundColor('rgb(39, 135, 217)')\n        .width(LayoutPolicy.wrapContent)\n        .height(LayoutPolicy.wrapContent)\n        .constraintSize({ maxWidth: 250, maxHeight: 250 })\n\n        // 从API version 20开始，layoutPolicy支持wrapContent和fixAtIdealSize。fixAtIdealSize生效时，当前组件会与其子组件大小（300vp * 300vp）相等，可以超过父组件内容大小（180vp * 180vp）但会受自身constraintSize（250vp * 250vp）约束，因此当前组件大小为250vp * 250vp\n        Text('fixAtIdealSize')\n\n        Row() {\n          Flex()\n            .width(300)\n            .height(300)\n        }\n        .backgroundColor('rgb(240, 250, 255)')\n        .width(LayoutPolicy.fixAtIdealSize)\n        .height(LayoutPolicy.fixAtIdealSize)\n        .constraintSize({ maxWidth: 250, maxHeight: 250 })\n      }\n      .width(200)\n      .height(200)\n      .padding(10)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(240410)/* ["default"] */.A) + "",
        width: "319",
        height: "597"
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
718662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
424468(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
479735(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
46839(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
835572(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACgCAYAAABkDQwTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAU0SURBVHhe7d3PbhtlFIbxmbHzr24E7YoFC1ZIrECoUNhyBVwDQkIgAStug0XZcC1IbaEIuiABFbECKdnBngBSlJk5nG9sq7EzlOMvc3Ic63mln8Z2J00sP7GtLtxCGAseEbLwESELHxGy8BEhCx8RsvARIQsfEbLwESELHxGy8BEhCx8RsvCtHGFZlkCv3K0cYVEUQK/cESEGkzsixGByR4QYTO6IEIPJ3SUjrKSq0vGW7Ixe6K5jU03UWMZbeuwe84tyd8kIt6Qqyu6H2h4VctbelrPmttQz6fL56323cc71OOdMJnJavyj7ZSGjYrTUwVTuLhlhoRGOpdAAJ+WuSDtWWyJNsj29nG6bX09Hzrme57S70spI9vSxLrYXG5jL3aUjLNNvhf5gz+tviEj6B8t0fKpdut6Hc55tHc5pperCvJleilOISx0kuVv5Kxe+sYZXFbvdy/GNapT+FJsqPSvqk8yk3CZCBCFChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCNChCPCVVU9t11nFz9o6soRoZU+WOmjzLrLmxai6j6+LShIIlzBPy+JnLwi8ucdkb9enTqZmV+f37Z8fV3POXlN5O+Xu88IJELdwjdetwj1WbA9/kTk/i/Sfv2zyDffb4ZHj/R+fSxN90yfnuEDQiRCq1Lq449EHvygD95jPf60GR4eSnP0wTTC9JLce9+dEaFdffyhPnApwm+7B28jaIjN8XvTT1Ft9CV56T5fCSK0I0InRGhHhE6I0I4InRChHRE6IUI7InRChHZE6IQI7YjQCRHaEaETIrQjQidEaEeETojQjgidEKEdETohQjsidEKEdkTohAjtiNAJEdoRoRMitCNCJ0RoR4ROiNCOCJ0QoR0ROiFCOyJ0QoR2ROiECO2I0AkR2hGhEyK0I0InRGhHhE6I0I4InRChHRE6IUI7InRChHZE6IQI7YjQCRHaEaETIrQjQidEaEeETojQjgidEKEdETohQjsidEKEdkTohAjtiNAJEdoRoRMitCNCJ0RoR4ROiNCOCJ0QoR0ROiFCOyJ0QoR2ROiECO2I0AkR2hGhEyK0mv3P7w8fa4Tf6fFgYzTH70sjlcaw03O/rwAR2rQpwqNPRb46Ern/qz546b/u3wAPnkjz22caYbqfGqLez77774oIjdpKzn5/V04PvpTTH7+Q+vCe1Af3pJlJl89f77ttLc85/FyaP97RX7KgABMitGs0xO5yOqb3T5ui1vj0OA3x4v12R4TD6d7c/491O2ctECHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCESHCrW2ERaURpuMNjVD/qjZ9clT6gbF5RtI0+7KXAqx2ljqYyt3KX7n4jWcRluMuwkYqSR9d1spoJl0ue27jnOt2jjRjdVP29XFOr4CLHUzlbrAIJ/obIq2+JKfPBeyO88vnr/fdxjnX4Zxag6xlIvvdS/GaPROW6ahPz3v6XuHum8/J3Tf+w52e25ZxzrMFnvPW67fkbb1tp9zT94T6vnChg6ncXTJC4KncESEGkzsixGByR4QYTO6IEIPJHRFiMLlb+SvrugZ65S4/X8YGGhGy8BEhCx8RsvARIQsfEbLwESELHxGy8BEhCx8RsvARIQsfEbLgifwLnOjNDsIqs8EAAAAASUVORK5CYII=");

},
432852(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
663553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
240410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAJVAT8DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6pooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKrapexabp1ze3JYQW8TTSFRk7VBJ4/CgCzRXHJ4/02RtkVpqzzPELiGJbNt08X/PRB/dHvjqPUZv3Hi2yXT7K8tIb6+iu4vtEf2S3aQiMYyx6Y69OvoDQB0VFcfH4yWfxPp1hZ2lxc2F7Zfa0uY4iQcsgBzn7uH54yDip28XWty1xDYxXzAebHHeLbMYDIgOQH9ip5xjjGaAOporifBHjOLVdN0K3vFvFvryzSRbia3McdzIEBk2HpwcnoMjkZFYui+J9aTRfD+rXerWt6dSnihksPIVH+dsZQqc5X7xBB4B6U7CueoUVztn4rsrjUksmhvoHmD/AGeSe3MaT7MlthPJ4BPIGRyM1UtfHemXWnxXsEOoPBcMsdti3O65cgnbGOpxtOTwBjrjmkM62iuWfxtpiWMM7LeiSS6Nj9n+zMZlnCF9hQd8D6cg5xWdqvj6OG0sZrCwvZXk1FbC5geAiSFsAlSM/eIZSvUHNFgO6oqO2k86BJCjpvUNscYZc9iPWpKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKADNJmvEf2lb68sLbQDZXdxbF3nDGGVk3YCYzg14Z/wkGs/wDQX1H/AMCX/wAa9PC5ZPEU1UUrHJVxapy5Wj7hzWb4mspdT8O6nY27Is11bSQoXJChmUgZxk4ya+MP+Eg1n/oL6j/4Ev8A40f8JBrP/QX1H/wJf/Gun+xJ/wA6M/r8ex9dWOhXEOtaVeM0HlWmmNZOAxyXLRnI4+78h/Tiuai8G6zbafpFs7WN9DbWZtntpbqWKKOTeT5q7V+c4OMHGMcHmvmr/hINZ/6C+o/+BL/40f2/rP8A0F9R/wDAl/8AGj+xZ/zoX16PY+pNE8NaxoreGJIPsFw9jpx027V5nQYLRsXjO05I2Hg4znqKsaNpGvaXYjRo/wCy30mMSqlw0j+cyNuKqU24BBIy248Dpk8fKf8Ab+s/9BfUf/Al/wDGj+39Z/6C+o/+BL/40f2LP+dfiH16PY+sbDw5dwWng2J5LfdosapcEMcORbmL5OOeTnnHH5U7wP4Qs/Dui2McllYLq0UWyW6giBZiTyQxAJ/Gvkz+39Z/6C+o/wDgS/8AjR/wkGs/9BfUf/Al/wDGj+xJ/wA6/EPr0ex9K6P4N1eHWdEu777AW095TcXf2qWSa8LQugcqy4XlgSuTjJwRjBtXHgu6fwn4asj9jnvtHClopHdYZ/kKMNwG4dcg4PI6V8wf2/rP/QX1H/wJf/Gj/hINZ/6C+o/+BL/40f2LU/nX4h9ej2PqrTfDFxDJpM32XTbJrfUnvZ4reR3BU27xD5mGWb5l5wowPbmPVfC+oyzaldWb2jTtq1vqdvHK7KrCOKNCrkKdpO1ugPavln/hINZ/6C+o/wDgS/8AjR/wkGs/9BfUf/Al/wDGj+xan86/EPr0ex9t2bTNaxG6SOO4KgyJG5ZVbHIBIBIz3wPpU2a+Hv8AhINZ/wCgvqP/AIEv/jR/wkGs/wDQX1H/AMCX/wAaP7En/Oh/X49j7hzS5r4d/wCEg1n/AKC+o/8AgS/+NfQH7Nt7d32gau17dT3DLdKAZpC5A2DpmubFZZPDU/aOVzSli1UlypHsVFFFeYdYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAeEftR/8e3h3/fn/AJJXgNe/ftR/8e3h3/fn/kleA19blP8Auy+Z42L/AIrCiiivSOYKKKKACiiigAooooAKKKKACiiigAooooAK+i/2Yf8AkXdZ/wCvpf8A0AV86V9F/sw/8i7rP/X0v/oAry83/wB2fqjqwf8AFR7VRRRXyh7AUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAeEftR/8e3h3/fn/AJJXgNe/ftR/8e3h3/fn/kleA19blP8Auy+Z42L/AIrCiiivSOYKKKKACiiigAooooAKKKKACiiigAooooAK+i/2Yf8AkXdZ/wCvpf8A0AV86V9F/sw/8i7rP/X0v/oAry83/wB2fqjqwf8AFR7VRRRXyh7AUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAeEftR/8e3h3/fn/AJJXgNe/ftR/8e3h3/fn/kleA19blP8Auy+Z42L/AIrCiiivSOYKKKKACiiigAooooAKKKKACiiigAooooAK+i/2Yf8AkXdZ/wCvpf8A0AV86V9F/sw/8i7rP/X0v/oAry83/wB2fqjqwf8AFR7VRRRXyh7AUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAeEftR/8e3h3/fn/AJJXgNe/ftR/8e3h3/fn/kleA19blP8Auy+Z42L/AIrCiiivSOYKKKKACiiigAooooAKKKKACiiigAooooAK+i/2Yf8AkXdZ/wCvpf8A0AV86V9F/sw/8i7rP/X0v/oAry83/wB2fqjqwf8AFR7VRRRXyh7AUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAeEftR/8e3h3/fn/AJJXgNe/ftR/8e3h3/fn/kleA19blP8Auy+Z42L/AIrCiiivSOYKKKKACiiigAooooAKKKKACiiigAooooAK+i/2Yf8AkXdZ/wCvpf8A0AV86V9F/sw/8i7rP/X0v/oAry83/wB2fqjqwf8AFR7VRRRXyh7AUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAeEftR/8e3h3/fn/AJJXgNe/ftR/8e3h3/fn/kleA19blP8Auy+Z42L/AIrCiiivSOYKKKKACiiigAooooAKKKKACiiigAooooAK+i/2Yf8AkXdZ/wCvpf8A0AV86V9F/sw/8i7rP/X0v/oAry83/wB2fqjqwf8AFR7VRRRXyh7AUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAeEftR/8e3h3/fn/AJJXgNe/ftR/8e3h3/fn/kleA19blP8Auy+Z42L/AIrCiiivSOYKKKKACiiigAooooAKKKKACiiigAooooAK+i/2Yf8AkXdZ/wCvpf8A0AV86V9F/sw/8i7rP/X0v/oAry83/wB2fqjqwf8AFR7VRRRXyh7AUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAeEftR/8e3h3/fn/AJJXgNfQH7UILW3h3aCfnn6D2SvAvLf+435V9ZlMl9WV/M8fFp+1Yyin+W/9xvyo8t/7jflXpc0e5zWfYZRT/Lf+435UeW/9xvyo5o9ws+wyin+W/wDcb8qPLf8AuN+VLmj3Cz7DKKd5b/3G/Kl8t/7jflRzLuFn2GUU/wAt/wC435UeW/8Acb8qfNHuFn2GUU/y3/uN+VHlv/cb8qOaPcLPsMop/lv/AHG/Kjy3/uN+VHNHuFn2GV9F/sw/8i7rP/X0v/oAr538t/7jflX0T+zErL4d1ncCP9KXqP8AYFeXm8l9XaT6o6sGn7VHtNFFFfKnrhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRmgBuwd+aXaKM0ZoFoG0VS1TUbbTEt3uyVSedLdWAyA7nC59ATx9SKu5rL8UaZ/bOg3lgriOWVP3Uh/5ZyDlG/BgD+FAWRWfxRpSjVcTFm0yRIbhVQkhmxtA9ck4475FQDxfprTXyJFeyLYs0c8iWrsiupA2AgcscjAGetYll4Iu4tQ0S5lu4SqjzdWRQf8ASpg5lQrx0Eruee2Kt3HhvVF0DWbWyuoobq81F7xCkroGjMisYy4G5SygqSM4zT0AuN410mLT7u7uxdWgtJI4p4Z4GWSMyEBCV7g56jPf0qC+8b2UGkapci1uo7uxhEv2S6iaGSQMdqEZH3S3GR0781x2t+G9R0nT9Uu/KsrQ3t5pi28KTyXAjZJx99mAJBLDp/8AXPTXnhbUPEdxqM3iD7LZ+dYmxgS0laUplw5kLMq87lXC47HPWmI0tMtfE0F1bXGoalYXMEh/0m2Fv5YhGP8Alm+STg4HzdRzxUmn+MNKv72CCH7SI7hzHbXMkDLBcMASQjkYJwDj1wcZqKzi8UXDwWuqJpUNoqstxPBK7vcDaQNqFQI+Tk/M2MY96zNO8N619m0PSb82A0zSJo5VuIZHMtwIgfLGwqAnbd8xzjjrwrhY0rPxxpF3dW8MS3YS4la3iuHtnWJpRnMe7GN3yn27ZzxVfRfHFtdWOqXWpWlzYw2VxLEXkhYBgsmxQO5c8DaOc8VHB4VvY/Dei6eZLbzrLUxeyEMdpQTO+Bx1ww9Oe9VNQ8J6pe6XrWlP9iFrPfHUbWcyvkv5qyiORAowMgjcGPGOKNAsbDeNtJis7qe8W7s2tmiWaGe3ZZFEjbUbbjJUnuM9D34qlrHj22tdA1e8tLG9N7p6Bntbi3aNgGBKsR/cODz7VRXwddzWk/8AoGmWFy89owMd1LOzJFMJGy7KPQ4AHXqeeNXxN4ZutWn8QtDLAi6jpUNlFuJysiPMxLcfd/eL0568epoB0umXQv7KO4EE0AfPyToUcc45B6Va2iqekvePYxnU4IILr+KOCUyoPTDFVP6VczSuOyDaKAuKM0ZoCyFopM0oORQMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoNFFAHP8Aj+aSDwfqkkEjxyLFlXRsEcjoa+f/AO29V/6Cd9/4EP8A41758Rf+RK1X/rl/UV8517+UQjKnLmXU8fMZNTVmaH9t6r/0E77/AL/v/jR/beq/9BO+/wC/7/41n0V63sofyr7jzueXc0P7b1X/AKCd9/3/AH/xo/tvVf8AoJ33/f8Af/Gs+ij2UP5V9wc8u5of21qv/QTvv+/7/wCNH9t6r/0E77/v+/8AjWfRR7KH8q+4OeXcvSavqUi4k1C8YZBw07HkdD1p39t6r/0E77/v+/8AjWfRR7KHZfcHPLuaH9tar/0E73/v+/8AjR/bWq/9BO+/8CH/AMaz6KPZQ/lX3Bzy7mh/bWq/9BO+/wDAh/8AGj+29V/6Cd9/3/f/ABrPoo9lD+VfcHPLuaH9t6r/ANBO+/7/AL/40f21qv8A0E77/wACH/xrPoo9lD+VfcHPLuaH9t6r/wBBO+/7/v8A40f23qv/AEE77/v+/wDjWfRR7KH8q+4OeXc0P7b1X/oJ33/f9/8AGj+29V/6Cd9/3/f/ABrPoo9lD+VfcHPLuaH9t6r/ANBO+/7/ALf419IeH2Z9B05nYszW8ZJJySdor5fNfT/hv/kX9M/69o//AEEV42cQjFQ5V3PTy2Tblc0aKKK8M9YKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDm/iL/yJWq/9cv6ivnOvoz4i/8AIlar/wBcv6ivnOvocn/hy9Txcy/iIKKKK9g84KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigANfT/AIb/AORf0z/r2j/9BFfMBr6f8Of8i/pv/XtH/wCgivEznaHz/Q9TLN5GjRRRXgnrhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAc38Rf+RK1X/rl/UV8519GfEX/AJErVf8Arl/UV8519Dk/8OXqeLmX8RBRRRXsHnBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUABr6f8N/8i/pn/XtH/6CK+YDX0/4b/5F/TP+vaP/ANBFeJnO0Pn+h6mWbyNGiiivBPXCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA5v4i/8iVqv/XL+or5zr6M+Iv8AyJWq/wDXL+or5zr6HJ/4cvU8XMv4iCiiivYPOCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooADX0/4c/5F/Tf+vaP/wBBFfMBr6f8N/8AIv6Z/wBe0f8A6CK8TOdofP8AQ9TLN5GjRRRXgnrhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAc38Rf+RK1X/rl/UV8519GfEX/kStV/65f1FfOdfQ5P/Dl6ni5l/EQUUUV7B5wUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAAa+n/Df/Iv6Z/17R/8AoIr5gNfT/hz/AJF/Tf8Ar2j/APQRXiZztD5/oeplm8jRooorwT1wooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAOb+Iv/ACJWq/8AXL+or5zr6M+Iv/Ilar/1y/qK+c6+hyf+HL1PFzL+Igooor2DzgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAA19P+G/+Rf0z/r2j/wDQRXzAa+n/AA3/AMi/pn/XtH/6CK8TOdofP9D1Ms3kaNFFFeCeuFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBzfxF/wCRK1X/AK5f1FfOdfRnxF/5ErVf+uX9RXznX0OT/wAOXqeLmX8RBRRRXsHnBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUABr6f8Of8AIv6b/wBe0f8A6CK+YDX0/wCG/wDkX9M/69o//QRXiZztD5/oeplm8jRooorwT1wooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAOb+Iv8AyJWq/wDXL+or5zr6M+Iv/Ilar/1y/qK+c6+hyf8Ahy9Txcy/iIKKKK9g84KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigANfT/hv/AJF/TP8Ar2j/APQRXzAa+n/Dn/Iv6b/17R/+givEznaHz/Q9TLN5GjRRRXgnrhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAc38Rf+RK1X/rl/UV8519GfEX/kStV/65f1FfOdfQ5P8Aw5ep4uZfxEFFFFewecFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAGvp/wAN/wDIv6Z/17R/+givmA19P+G/+Rf0z/r2j/8AQRXiZztD5/oeplm8jRooorwT1wooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAOb+Iv/Ilar/1y/qK+c6+jPiL/wAiVqv/AFy/qK+c6+hyf+HL1PFzL+Igooor2DzgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAA19P8Ahz/kX9N/69o//QRXzAa+n/Df/Iv6Z/17R/8AoIrxM52h8/0PUyzeRo0UUV4J64UUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAFLWtNi1fS7iwuGdIp12sYyAw+mQa4j/hU+i/8/epf99p/wDEV6JRitaeIq0laErGU6MKjvNXPPP+FT6J/wA/epf99p/8RR/wqfRP+fvUv++0/wDiK9DxRitfruI/nZH1Wj/Keef8Kn0T/n71L/vtP/iKy9f8AeHdFskuJ59YmaSVYIoYTGzyuxwFA2j9TXq+K4n4laXa6hJ4b+1CU/8AE0ij+SZ04IbP3SOeBz1oWNxH87D6rR/lMXTfhvoF+kpjuNZjaJ/LdJgqENtDYGUwfvDkZGc88UuqfDfw5pmnXN9e3+ox21tG0sjb0OFAyf4Oar6hc3NvDq76ddXDaxba75Wm2/mMwm/cRZiYE/6vaWJJ+797r1FuZ9W0XQdM03/iZ39zO1/qUd7MYSDE4Lo+A2zEpRQuCMKR70/ruI/nYvqtH+UfH8P/AAq+kwan/al8tjOsbRyvIighyAvVO5YD6mpP+FdeG/7X/sz7bqf2vyPtG3cmNm7bnOz1rF1OF4fBmt6HrcC2z6XfW99FHb3DMkdrJODw4CkhR5o6ADaPQY1tcnFre6jN4XnM/leHHNvLDKZzxOclWydxHPc8ij67iP52H1Wj/KPufhz4dt9UsrB7vVfPu1kePDx4wm3Ofl/2hV3/AIVRof8Az96l/wB9p/8AEVio+mQ+KNMbwfqMmoz/ANm3kpQ3TXK+bsTYSSTtZjnI746VW8G3s8dxZX6apbzyCxmmvrWG/lubi4ITPzRsMRuH47dxR9cxH87F9Wo/ym3qHwy0Cxsbm7mu9TMUETSvtePO1Rk4+T2rCu/DXhG3aJEn8QXMrwJcvHaw+cYY3GVZ9qcZweOvBqtp+os1xMlpcwtBfaFeXE0SanJePuCoVMu4AK/zN933HatpLjS7VoJ4PEJ8Pawum2vmG6CeRdoI8qdr/exkqSpBHI9KPruI/nY/qtH+Uk074f8AhfUXQWV/qsqvAlykg27GRicYby8Z46dRWh/wqjQ/+fvUv++0/wDiKybfxDFcRXeo+JxLZ2TaDaXMtvFK8YVjLLjZgggthQO/QGs6Rza+FrR7PV4ZFv8AUVbUgNTd4rOJkcpC0qlmRchVLdyT2PB9dxH87D6rR/lOnHwn0T/n71L/AL+J/wDEUv8AwqfRP+fvUv8AvtP/AIitL4arKtjqIN/a3loLrFuttcvcLCNq7kEjjJ+bJ74zjtXY4pfXcR/Ox/VaP8p55/wqfRP+fvUv++0/+IpP+FT6J/z96l/32n/xFeiYoo+u4j+dh9Vo/wAp53/wqfRD/wAvepf9/E/+IrvbG3W0s4LaMkpCixqT1IAxU9FZVK9Sr8crmkKUKfwKwUUUVkaBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACE4FR+b7frUjdD9Kr1SRMmyTzfb9aPN9v1qOinZE3ZJ5vt+tHm+361HRRZBdknm+360eb7frUdFFkF2Seb7frSM4bGVBwcimUUWQXYvy7s7FznOcUKEViyooY9SOtJRRZDuxTtOcoDkYOe49KRBHGAEjVQBgADGBRRRZBcREjj/1cSJyT8oxyaESJHZ0iRXb7zAAE0tFFguxqRRJnZEi5OTtUDPrSyRxSbfMiR9pyu4A4+lLRRZBdgwR8741bPXIzSKkSqVESbW6jHWlooshXY6LZCgSKNUQdFUYAp3m+361HRRZBdknm+360eb7frUdFFkF2Seb7frR5vt+tR0UWQXZJ5vt+tHm+361HRRZBdknm+361KDmq1WF6fhUsqLYtFFFIoKKKKACiiigAooooAKKKKAEbofpVerDdD9Kr1SIkFFFFMkKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKsL0/Cq9WF6fhUyKiLRRRSLCiiigAooooAKKKKACiiigBG6H6VXqw3Q/Sq9UiJBRRRTJCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACrC9PwqvVhen4VMioi0UUUiwooooAKKKKACiiigAooooARuh+lV6sN0P0qvVIiQUUUUyQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqwvT8Kr1YXp+FTIqItFFFIsKKKKACiiigAooooAKKKKAEbofpVerDdD9Kr1SIkFFFFMkKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKsL0/Cq9WF6fhUyKiLRRRSLCiiigAooooAKKKKACiiigBG6H6VXqw3Q/Sq9UiJBRRRTJCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACrC9PwqvVhen4VMioi0UUUiwooooAKKKKACiiigAooooARuh+lV6sN0P0qvVIiQUUUUyQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqwvT8Kr1YXp+FTIqItFFFIsKKKKACiiigAooooAKKKKAEbofpVerDdD9Kr1SIkFFFFMkKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKsL0/Cq9WF6fhUyKiLRRRSLCiiigAooooAKKKKACiiigBG6H6VXqw3Q/Sq9UiJBRRRTJCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACrC9PwqvVhen4VMioi0UUUiwooooAKKKKACiiigAooooARuh+lV6sN0P0qvVIiQUUUUyQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqwvT8Kr1YXp+FTIqItFFFIsKKKKACiiigAooooAKKKKAEbofpVerDdD9Kr1SIkFFFFMkKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKsL0/Cq9WF6fhUyKiLRRRSLCiiigAooooAKKKKACiiigBG6H6VXqw3Q/Sq9UiJBRRRTJCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACrC9PwqvVhen4VMioi0UUUiwooooAKKKKACiiigAooooARuh+lV6sN0P0qvVIiQUUUUyQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqwvT8Kr1YXp+FTIqItFFFIsKKKKACiiigAooooAKKKKAEbofpVerDdD9Kr1SIkFFFFMkKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKsL0/Cq9WF6fhUyKiLRRRSLCiiigAooooAKKKKACiiigBOoNReWamoouJq5D5Zo8s1NRTuLlRD5Zo8s1NRRcOVEPlmjyzU1FFw5UQ+WaPLNTUUXDlRD5Zo8s1NRRcOVEPlmjyzU1FFw5UQ+WaPLNTUUXDlRD5Zo8s1NRRcOVEPlmjyzU1FFw5UQ+WaPLNTUUXDlRD5Zo8s1NRRcOVEPlmjyzU1FFw5UQ+WaPLNTUUXDlRD5ZqYUUUrjSsFFFFAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z");

},
813162(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
789758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439533-c3666d1c60f9df8a303b7e2cafd21cfd.png");

},
950948(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
782548(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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