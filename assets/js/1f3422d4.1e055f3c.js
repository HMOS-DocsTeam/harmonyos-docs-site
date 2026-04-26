"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["474936"], {
592499(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_layout_property_ts_universal_attributes_location_ts_universal_attributes_location_md_1f3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-layout-property-ts-universal-attributes-location-ts-universal-attributes-location-md-1f3.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_layout_property_ts_universal_attributes_location_ts_universal_attributes_location_md_1f3_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location","title":"位置设置","description":"设置组件对齐方式、布局方向及显示位置。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"位置设置","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-location","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-location"},"sidebar":"ref","previous":{"title":"尺寸设置","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size"},"next":{"title":"布局约束","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-layout-constraints/ts-universal-attributes-layout-constraints"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location.md


const frontMatter = {
	title: '位置设置',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-location',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-location'
};
const contentTitle = '位置设置';

const assets = {

};



const toc = [{
  "value": "align",
  "id": "align",
  "level": 2
}, {
  "value": "align20+",
  "id": "align20",
  "level": 2
}, {
  "value": "direction",
  "id": "direction",
  "level": 2
}, {
  "value": "position",
  "id": "position",
  "level": 2
}, {
  "value": "markAnchor",
  "id": "markanchor",
  "level": 2
}, {
  "value": "offset",
  "id": "offset",
  "level": 2
}, {
  "value": "alignRules9+",
  "id": "alignrules9",
  "level": 2
}, {
  "value": "alignRules12+",
  "id": "alignrules12",
  "level": 2
}, {
  "value": "layoutGravity20+",
  "id": "layoutgravity20",
  "level": 2
}, {
  "value": "AlignRuleOption9+对象说明",
  "id": "alignruleoption9对象说明",
  "level": 2
}, {
  "value": "HorizontalAlignParam23+对象说明",
  "id": "horizontalalignparam23对象说明",
  "level": 2
}, {
  "value": "VerticalAlignParam23+对象说明",
  "id": "verticalalignparam23对象说明",
  "level": 2
}, {
  "value": "LocalizedAlignRuleOptions12+对象说明",
  "id": "localizedalignruleoptions12对象说明",
  "level": 2
}, {
  "value": "LocalizedHorizontalAlignParam12+对象说明",
  "id": "localizedhorizontalalignparam12对象说明",
  "level": 2
}, {
  "value": "LocalizedVerticalAlignParam12+对象说明",
  "id": "localizedverticalalignparam12对象说明",
  "level": 2
}, {
  "value": "chainMode12+",
  "id": "chainmode12",
  "level": 2
}, {
  "value": "ChainStyle12+",
  "id": "chainstyle12",
  "level": 2
}, {
  "value": "chainWeight14+",
  "id": "chainweight14",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（对齐方式和主轴方向上的布局）",
  "id": "示例1对齐方式和主轴方向上的布局",
  "level": 3
}, {
  "value": "示例2（位置偏移）",
  "id": "示例2位置偏移",
  "level": 3
}, {
  "value": "示例3（绝对定位和相对偏移）",
  "id": "示例3绝对定位和相对偏移",
  "level": 3
}, {
  "value": "示例4（镜像效果）",
  "id": "示例4镜像效果",
  "level": 3
}, {
  "value": "示例5（align属性适配镜像特性）",
  "id": "示例5align属性适配镜像特性",
  "level": 3
}, {
  "value": "示例6（layoutGravity属性单独设置Stack组件中子组件的对齐规则）",
  "id": "示例6layoutgravity属性单独设置stack组件中子组件的对齐规则",
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
        id: "位置设置",
        children: "位置设置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件对齐方式、布局方向及显示位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(103784)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "align",
      children: "align"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "align(value: Alignment): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置当前组件绘制区域内的子组件的对齐方式，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#alignment",
              children: "Alignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前组件绘制区域内的子组件的对齐方式。  只在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
              children: "Stack"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ts-container-folderstack/ts-container-folderstack",
              children: "FolderStack"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/graphic-drawing/ts-drawing-components-shape/ts-drawing-components-shape",
              children: "Shape"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
              children: "Button"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-marquee/ts-basic-components-marquee",
              children: "Marquee"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/arkui-declarative-comp-dep/ts-basic-components-stepperitem/ts-basic-components-stepperitem",
              children: "StepperItem"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
              children: "Text"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
              children: "TextArea"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
              children: "TextInput"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
              children: "RichEditor"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-container-hyperlink/ts-container-hyperlink",
              children: "Hyperlink"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph",
              children: "SymbolGlyph"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
              children: "ListItem"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-griditem/ts-container-griditem",
              children: "GridItem"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
              children: "Scroll"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-flowitem/ts-container-flowitem",
              children: "FlowItem"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-imageanimator/ts-basic-components-imageanimator",
              children: "ImageAnimator"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-loadingprogress/ts-basic-components-loadingprogress",
              children: "LoadingProgress"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-patternlock/ts-basic-components-patternlock",
              children: "PatternLock"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress",
              children: "Progress"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-qrcode/ts-basic-components-qrcode",
              children: "QRCode"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-textclock/ts-basic-components-textclock",
              children: "TextClock"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-texttimer/ts-basic-components-texttimer",
              children: "TextTimer"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitem/ts-basic-components-menuitem",
              children: "MenuItem"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle",
              children: "Toggle"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox",
              children: "Checkbox"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-basic-components-nodecontainer/ts-basic-components-nodecontainer",
              children: "NodeContainer"
            }), "中生效，其中和文本相关的组件Marquee、Text、TextArea、TextInput、RichEditor、Hyperlink的align结果参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textalign",
              children: "textAlign"
            }), "。  不支持textAlign属性的组件则无法设置水平方向的文字对齐。  默认值：Alignment.Center  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  该属性在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-stack/ts-container-stack",
              children: "Stack"
            }), "组件上支持镜像能力，在其他组件上不支持镜像能力。  在Stack中该属性与alignContent效果一致，只能设置子组件在当前组件内的对齐方式。"]
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
      id: "align20",
      children: "align20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "align(alignment: Alignment | LocalizedAlignment): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置当前组件绘制区域内的子组件的对齐方式，增加支持镜像的能力，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 20开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#alignment",
              children: "Alignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#localizedalignment20",
              children: "LocalizedAlignment"
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
      id: "direction",
      children: "direction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "direction(value: Direction): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置当前组件绘制区域内主轴方向上的布局，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#direction",
              children: "Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置当前组件绘制区域内主轴方向上的布局。  属性配置为auto的时候，按照系统语言方向进行布局。  该属性在Column组件上不生效。  默认值：Direction.Auto  direction取undefined或null时按默认值处理。"
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
      id: "position",
      children: "position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "position(value: Position | Edges | LocalizedEdges): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["绝对定位，确定子组件相对父组件内容区的位置，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(108636)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "position对位置的影响作用在组件的尺寸测量完成之后。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当父组件为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
          children: "Row"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-column/ts-container-column",
          children: "Column"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-flex/ts-container-flex",
          children: "Flex"
        }), "时，设置position的子组件不占位。在上述场景中，如果父组件包含的所有子组件均设置了position，此时父组件尺寸无法通过其他子组件确定，将基于尺寸(0, 0)进行布局测算。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Position类型基于父组件内容区左上角确定位置；Edges类型基于父组件内容区四边确定位置，top/left/right/bottom分别为组件各边距离父组件内容区相应边的边距，通过边距来确定组件相对于父组件内容区的位置；LocalizedEdges类型基于父组件内容区四边确定位置，支持镜像模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本属性适用于置顶显示、悬浮按钮等组件在父组件中位置固定的场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本属性不支持在宽高为零的布局组件上设置。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当父组件为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer",
          children: "RelativeContainer"
        }), "，且子组件设置了alignRules属性时，子组件的position属性不生效。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若本属性所在组件的父组件未设置固定宽高，那么本组件会参考第一个设置固定宽高的祖先组件进行绝对定位。"
      }), "\n"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#edges12",
              children: "Edges12+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizededges12",
              children: "LocalizedEdges12+"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "markanchor",
      children: "markAnchor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "markAnchor(value: Position | LocalizedPosition): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置元素在位置定位时的锚点，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedposition12",
              children: "LocalizedPosition12+"
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
      id: "offset",
      children: "offset"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "offset(value: Position | Edges | LocalizedEdges): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相对偏移，组件相对原本的布局位置进行偏移。和position一起使用时，position生效，offset不生效，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#position",
              children: "Position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#edges12",
              children: "Edges12+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizededges12",
              children: "LocalizedEdges12+"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alignrules9",
      children: "alignRules9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "alignRules(value: AlignRuleOption): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指定设置在相对布局组件中子组件的对齐规则，仅当父组件为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer",
        children: "RelativeContainer"
      }), "时生效，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
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
              href: "#alignruleoption9%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "AlignRuleOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定设置在相对布局组件中子组件的对齐规则。"
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
      id: "alignrules12",
      children: "alignRules12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "alignRules(alignRule: LocalizedAlignRuleOptions): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指定设置在相对布局组件中子组件的对齐规则，仅当父组件为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer",
        children: "RelativeContainer"
      }), "时生效。该方法水平方向上以start和end分别替代原方法的left和right，以便在RTL模式下能镜像显示，建议使用该方法指定设置在相对布局组件中子组件的对齐规则，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "alignRule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#localizedalignruleoptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "LocalizedAlignRuleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定设置在相对布局组件中子组件的对齐规则。"
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
      id: "layoutgravity20",
      children: "layoutGravity20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "layoutGravity(alignment: LocalizedAlignment): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单独设置Stack组件中子组件的对齐规则，仅当父组件为Stack时生效。与align属性同时使用时，layoutGravity优先级更高，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 20开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#localizedalignment20",
              children: "LocalizedAlignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定设置在Stack组件中子组件的对齐规则。  默认值：LocalizedAlignment.CENTER 。说明：当传入异常值时，按默认值处理。"
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
      id: "alignruleoption9对象说明",
      children: "AlignRuleOption9+对象说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#horizontalalignparam23%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "HorizontalAlignParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置左对齐参数。  API version 23之前，入参类型为{ anchor: string, align: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#horizontalalign",
              children: "HorizontalAlign"
            }), " }。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#horizontalalignparam23%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "HorizontalAlignParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置右对齐参数。  API version 23之前，入参类型为{ anchor: string, align: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#horizontalalign",
              children: "HorizontalAlign"
            }), " }。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#horizontalalignparam23%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "HorizontalAlignParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置横向居中对齐方式的参数。  API version 23之前，入参类型为{ anchor: string, align: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#horizontalalign",
              children: "HorizontalAlign"
            }), " }。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#verticalalignparam23%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "VerticalAlignParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置顶部对齐的参数。  API version 23之前，入参类型为{ anchor: string, align: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#verticalalign",
              children: "VerticalAlign"
            }), " }。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bottom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#verticalalignparam23%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "VerticalAlignParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置底部对齐的参数。  API version 23之前，入参类型为{ anchor: string, align: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#verticalalign",
              children: "VerticalAlign"
            }), " }。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "center"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#verticalalignparam23%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "VerticalAlignParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置纵向居中对齐方式的参数。  API version 23，之前入参类型为{ anchor: string, align: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#verticalalign",
              children: "VerticalAlign"
            }), " }。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bias11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#bias%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置组件在锚点约束下的偏移参数，其值为到左/上侧锚点的距离与锚点间总距离的比值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 11开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "horizontalalignparam23对象说明",
      children: "HorizontalAlignParam23+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义在相对布局组件中子组件在水平方向上的对齐规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(997277)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，从API version 23开始，修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 23开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "anchor9+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置作为锚点的组件的id值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "align9+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#horizontalalign",
              children: "HorizontalAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置相对于锚点组件的横向对齐方式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verticalalignparam23对象说明",
      children: "VerticalAlignParam23+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义在相对布局组件中子组件在垂直方向上的对齐规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(981052)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，从API version 23开始，修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 23开始，该接口支持在ArkTS卡片中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "anchor9+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置作为锚点的组件的id值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "align9+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#verticalalign",
              children: "VerticalAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置相对于锚点组件的纵向对齐方式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "localizedalignruleoptions12对象说明",
      children: "LocalizedAlignRuleOptions12+对象说明"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#localizedhorizontalalignparam12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "LocalizedHorizontalAlignParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置横向对齐方式的参数，LTR模式时为左对齐，RTL模式时为右对齐。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#localizedhorizontalalignparam12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "LocalizedHorizontalAlignParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置横向对齐方式的参数，LTR模式时为右对齐，RTL模式时为左对齐。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#localizedhorizontalalignparam12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "LocalizedHorizontalAlignParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置横向居中对齐方式的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#localizedverticalalignparam12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "LocalizedVerticalAlignParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置纵向顶部对齐的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bottom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#localizedverticalalignparam12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "LocalizedVerticalAlignParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置纵向底部对齐的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "center"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#localizedverticalalignparam12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "LocalizedVerticalAlignParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置纵向居中对齐方式的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#bias%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "Bias"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置组件在锚点约束下的偏移参数，其值为到左/上侧锚点的距离与锚点间总距离的比值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "localizedhorizontalalignparam12对象说明",
      children: "LocalizedHorizontalAlignParam12+对象说明"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "anchor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置作为锚点的组件的id值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "align"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#horizontalalign",
              children: "HorizontalAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置相对于锚点组件的横向对齐方式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "localizedverticalalignparam12对象说明",
      children: "LocalizedVerticalAlignParam12+对象说明"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "anchor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置作为锚点的组件的id值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "align"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#verticalalign",
              children: "VerticalAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置相对于锚点组件的纵向对齐方式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chainmode12",
      children: "chainMode12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "chainMode(direction: Axis, style: ChainStyle): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指定以该组件为链头所构成的链的参数，仅当父组件为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer",
        children: "RelativeContainer"
      }), "时生效。链头指满足成链规则时链的第一个组件（水平方向从左边起始，镜像语言下从右边起始；竖直方向从上边起始）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer#%E7%A4%BA%E4%BE%8B7%E8%AE%BE%E7%BD%AE%E9%93%BE",
        children: "RelativeContainer示例7（设置链）"
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
            children: "direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#axis",
              children: "Axis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "链的方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#chainstyle12",
              children: "ChainStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "链的样式。"
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
      id: "chainstyle12",
      children: "ChainStyle12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义链的风格，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPREAD"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["组件在约束锚点间均匀分布。详细用法请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer#%E7%A4%BA%E4%BE%8B7%E8%AE%BE%E7%BD%AE%E9%93%BE",
              children: "RelativeContainer示例7（设置链）"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPREAD_INSIDE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["除首尾2个子组件的其他组件在约束锚点间均匀分布。详细用法请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer#%E7%A4%BA%E4%BE%8B7%E8%AE%BE%E7%BD%AE%E9%93%BE",
              children: "RelativeContainer示例7（设置链）"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PACKED"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["链内子组件无间隙。详细用法请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer#%E7%A4%BA%E4%BE%8B7%E8%AE%BE%E7%BD%AE%E9%93%BE",
              children: "RelativeContainer示例7（设置链）"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(758925)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用链时，RelativeContainer会为链中的相互依赖的组件定义一个大小计算顺序，大小计算完成后再确定使用ChainStyle的位置。因此使用SPREAD或PACKED风格时，只以链头组件为锚点进行布局的非链组件A和链中其他节点有相同布局优先级，当组件A的id的字典排序靠前时，此时组件A的alignRules先于链的ChainStyle生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chainweight14",
      children: "chainWeight14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "chainWeight(chainWeight: ChainWeightOptions): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对形成链的组件进行重新布局。仅当父组件为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer",
        children: "RelativeContainer"
      }), "时生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(421609)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置属性方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
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
            children: "chainWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#chainweightoptions14%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ChainWeightOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置了chainWeight属性的组件与同一条链上的兄弟组件在水平或竖直方向的尺寸会按照设置的权重进行分配，分配时会忽略组件本身尺寸设置，按分配的权重自适应占满剩余空间。"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-relativecontainer/ts-container-relativecontainer#%E7%A4%BA%E4%BE%8B10%E8%AE%BE%E7%BD%AE%E9%93%BE%E4%B8%AD%E8%8A%82%E7%82%B9%E6%9D%83%E9%87%8D",
        children: "示例10（设置链中节点权重）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1对齐方式和主轴方向上的布局",
      children: "示例1（对齐方式和主轴方向上的布局）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置内容在元素内的对齐方式和子元素在父组件主轴方向上的布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct PositionExample1 {\n  build() {\n    Column() {\n      Column({ space: 10 }) {\n        // 元素内容<元素宽高，设置内容在与元素内的对齐方式\n        Text('align').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Stack() {\n          Text('First show in bottom end').height('65%').backgroundColor(0xD2B48C)\n          Text('Second show in bottom end').backgroundColor(0xF5DEB3).opacity(0.9)\n        }.width('90%').height(50).margin({ top: 5 }).backgroundColor(0xFFE4C4)\n        .align(Alignment.BottomEnd)\n        Stack() {\n          Text('top start')\n        }.width('90%').height(50).margin({ top: 5 }).backgroundColor(0xFFE4C4)\n        .align(Alignment.TopStart)\n\n        // 父组件设置direction为Direction.Ltr，子元素从左到右排列\n        Text('direction').fontSize(9).fontColor(0xCCCCCC).width('90%')\n        Row() {\n          Text('1').height(50).width('25%').fontSize(16).backgroundColor(0xF5DEB3)\n          Text('2').height(50).width('25%').fontSize(16).backgroundColor(0xD2B48C)\n          Text('3').height(50).width('25%').fontSize(16).backgroundColor(0xF5DEB3)\n          Text('4').height(50).width('25%').fontSize(16).backgroundColor(0xD2B48C)\n        }\n        .width('90%')\n        .direction(Direction.Ltr)\n        // 父组件设置direction为Direction.Rtl，子元素从右到左排列\n        Row() {\n          Text('1').height(50).width('25%').fontSize(16).backgroundColor(0xF5DEB3).textAlign(TextAlign.End)\n          Text('2').height(50).width('25%').fontSize(16).backgroundColor(0xD2B48C).textAlign(TextAlign.End)\n          Text('3').height(50).width('25%').fontSize(16).backgroundColor(0xF5DEB3).textAlign(TextAlign.End)\n          Text('4').height(50).width('25%').fontSize(16).backgroundColor(0xD2B48C).textAlign(TextAlign.End)\n        }\n        .width('90%')\n        .direction(Direction.Rtl)\n      }\n    }\n    .width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(876269)/* ["default"] */.A) + "",
        width: "514",
        height: "454"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2位置偏移",
      children: "示例2（位置偏移）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于父组件、相对定位、锚点作出位置偏移。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct PositionExample2 {\n  build() {\n    Column({ space: 20 }) {\n      // 设置子组件左上角相对于父组件左上角的偏移位置\n      Text('position').fontSize(12).fontColor(0xCCCCCC).width('90%')\n      Row() {\n        Text('1').size({ width: '30%', height: '50' }).backgroundColor(0xdeb887).border({ width: 1 }).fontSize(16)\n          .textAlign(TextAlign.Center)\n        Text('2 position(30, 10)')\n          .size({ width: '60%', height: '30' })\n          .backgroundColor(0xbbb2cb)\n          .border({ width: 1 })\n          .fontSize(16)\n          .align(Alignment.Start)\n          .position({ x: 30, y: 10 })\n        Text('3').size({ width: '45%', height: '50' }).backgroundColor(0xdeb887).border({ width: 1 }).fontSize(16)\n          .textAlign(TextAlign.Center)\n        Text('4 position(50%, 70%)')\n          .size({ width: '50%', height: '50' })\n          .backgroundColor(0xbbb2cb)\n          .border({ width: 1 })\n          .fontSize(16)\n          .position({ x: '50%', y: '70%' })\n      }.width('90%').height(100).border({ width: 1, style: BorderStyle.Dashed })\n\n      // 相对于起点偏移，其中x为最终定位点距离起点水平方向间距，x>0往左，反之向右。\n      // y为最终定位点距离起点垂直方向间距，y>0向上，反之向下\n      Text('markAnchor').fontSize(12).fontColor(0xCCCCCC).width('90%')\n      Stack({ alignContent: Alignment.TopStart }) {\n        Row()\n          .size({ width: '100', height: '100' })\n          .backgroundColor(0xdeb887)\n        Text('text')\n          .fontSize('30px')\n          .textAlign(TextAlign.Center)\n          .size({ width: 25, height: 25 })\n          .backgroundColor(Color.Green)\n          .markAnchor({ x: 25, y: 25 })\n        Text('text')\n          .fontSize('30px')\n          .textAlign(TextAlign.Center)\n          .size({ width: 25, height: 25 })\n          .backgroundColor(Color.Green)\n          .markAnchor({ x: -100, y: -25 })\n        Text('text')\n          .fontSize('30px')\n          .textAlign(TextAlign.Center)\n          .size({ width: 25, height: 25 })\n          .backgroundColor(Color.Green)\n          .markAnchor({ x: 25, y: -25 })\n      }.margin({ top: 25 }).border({ width: 1, style: BorderStyle.Dashed })\n\n      // 相对定位，x>0向右偏移，反之向左，y>0向下偏移，反之向上\n      Text('offset').fontSize(12).fontColor(0xCCCCCC).width('90%')\n      Row() {\n        Text('1').size({ width: '15%', height: '50' }).backgroundColor(0xdeb887).border({ width: 1 }).fontSize(16)\n          .textAlign(TextAlign.Center)\n        Text('2  offset(15, 30)')\n          .size({ width: 120, height: '50' })\n          .backgroundColor(0xbbb2cb)\n          .border({ width: 1 })\n          .fontSize(16)\n          .align(Alignment.Start)\n          .offset({ x: 15, y: 30 })\n        Text('3').size({ width: '15%', height: '50' }).backgroundColor(0xdeb887).border({ width: 1 }).fontSize(16)\n          .textAlign(TextAlign.Center)\n        Text('4 offset(-5%, 20%)')\n          .size({ width: 100, height: '50' })\n          .backgroundColor(0xbbb2cb)\n          .border({ width: 1 })\n          .fontSize(16)\n          .offset({ x: '-5%', y: '20%' })\n      }.width('90%').height(100).border({ width: 1, style: BorderStyle.Dashed })\n    }\n    .width('100%').margin({ top: 25 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(651892)/* ["default"] */.A) + "",
        width: "367",
        height: "520"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3绝对定位和相对偏移",
      children: "示例3（绝对定位和相对偏移）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用position设置绝对定位，确定子组件相对父组件的位置。使用offset设置相对偏移，组件相对原本的布局位置进行偏移。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Example3 {\n  build() {\n    Column({ space: 20 }) {\n      Text('position use Edges').fontSize(12).fontColor(0xCCCCCC).width('90%')\n      Row() {\n        Text('bottom:0, right:0')\n          .size({ width: '30%', height: '50' })\n          .backgroundColor(0xdeb887)\n          .border({ width: 1 })\n          .fontSize(16)\n          .textAlign(TextAlign.Center)\n          .position({ bottom: 0, right: 0 })\n        Text('top:0, left:0')\n          .size({ width: '30%', height: '50' })\n          .backgroundColor(0xdeb887)\n          .border({ width: 1 })\n          .fontSize(16)\n          .textAlign(TextAlign.Center)\n          .position({ top: 0, left: 0 })\n        Text('top:10%, left:50%')\n          .size({ width: '50%', height: '30' })\n          .backgroundColor(0xbbb2cb)\n          .border({ width: 1 })\n          .fontSize(16)\n          .textAlign(TextAlign.Center)\n          .position({ top: '10%', left: '50%' })\n        Text('bottom:0, left:30')\n          .size({ width: '50%', height: '30' })\n          .backgroundColor(0xbbb2cb)\n          .border({ width: 1 })\n          .fontSize(16)\n          .textAlign(TextAlign.Center)\n          .position({ bottom: 0, left: 30 })\n      }.width('90%').height(100).border({ width: 1, style: BorderStyle.Dashed })\n\n\n      Text('offset use Edges').fontSize(12).fontColor(0xCCCCCC).width('90%')\n      Row() {\n        Text('1')\n          .size({ width: '25%', height: 50 })\n          .backgroundColor(0xdeb887)\n          .border({ width: 1 })\n          .fontSize(16)\n          .textAlign(TextAlign.Center)\n        Text('2 top:30, left:0')\n          .size({ width: '25%', height: 50 })\n          .backgroundColor(0xbbb2cb)\n          .border({ width: 1 })\n          .fontSize(16)\n          .textAlign(TextAlign.Center)\n          .offset({ top: 30, left: 0 })\n        Text('3')\n          .size({ width: '25%', height: 50 })\n          .backgroundColor(0xdeb887)\n          .border({ width: 1 })\n          .fontSize(16)\n          .textAlign(TextAlign.Center)\n        Text('4 bottom:10, right:30')\n          .size({ width: '25%', height: 50 })\n          .backgroundColor(0xbbb2cb)\n          .border({ width: 1 })\n          .fontSize(12)\n          .textAlign(TextAlign.Center)\n          .offset({ bottom: 10, right: 30 })\n      }.width('90%').height(150).border({ width: 1, style: BorderStyle.Dashed })\n    }.width('100%').margin({ top: 25 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(360399)/* ["default"] */.A) + "",
        width: "720",
        height: "607"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4镜像效果",
      children: "示例4（镜像效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通用布局属性支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-internationalization#%E4%BD%BF%E7%94%A8%E9%95%9C%E5%83%8F%E8%83%BD%E5%8A%9B",
        children: "使用镜像能力"
      }), "。下述示例从上到下依次通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#position",
        children: "position"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#offset",
        children: "offset"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#markanchor",
        children: "markAnchor"
      }), "实现镜像效果，为对比镜像前后的差异，浅蓝色对应镜像前效果，深蓝色对应镜像后效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Example4 {\n  private scroller: Scroller = new Scroller()\n\n  build() {\n    Column() {\n      Stack({ alignContent: Alignment.End }) {\n        Scroll(this.scroller) {\n          Flex({ direction: FlexDirection.Column }) {\n            RelativeContainer() {\n              Row() {\n              }\n              .position({ start: LengthMetrics.px(200), top: LengthMetrics.px(100) }) // position接口中的参数使用LocalizedEdges类型，支持镜像翻转效果\n              .width(\"30%\")\n              .height(\"20%\")\n              .backgroundColor('rgb(0, 74, 175)')\n              .padding(50)\n              .margin(50)\n\n              Row() {\n              }\n              .position({ left: '200px', top: '100px' }) // position接口中的参数使用Edges类型，不支持镜像翻转效果\n              .width(\"30%\")\n              .height(\"20%\")\n              .backgroundColor('rgb(39, 135, 217)')\n              .padding(50)\n              .margin(50)\n\n              Row() {\n              }\n              .offset({ start: LengthMetrics.vp(100), top: LengthMetrics.vp(200) }) // offset接口中的参数使用LocalizedEdges类型，支持镜像翻转效果\n              .width(\"30%\")\n              .height(\"20%\")\n              .backgroundColor('rgb(0, 74, 175)')\n              .padding(50)\n              .margin(50)\n\n              Row() {\n              }\n              .offset({ left: 100, top: 200 }) // offset接口中的参数使用Edges类型，不支持镜像翻转效果\n              .width(\"30%\")\n              .height(\"20%\")\n              .backgroundColor('rgb(39, 135, 217)')\n              .padding(50)\n              .margin(50)\n\n              Row() {\n              }\n              .markAnchor({\n                start: LengthMetrics.fp(100),\n                top: LengthMetrics.fp(-350)\n              }) // markAnchor接口中的参数使用LocalizedPosition类型，支持镜像翻转效果\n              .width(\"30%\")\n              .height(\"20%\")\n              .backgroundColor('rgb(0, 74, 175)')\n              .padding(50)\n              .margin(50)\n\n              Row() {\n              }\n              .markAnchor({ x: '100fp', y: '-350fp' }) // markAnchor接口中的参数使用Position类型，不支持镜像翻转效果\n              .width(\"30%\")\n              .height(\"20%\")\n              .backgroundColor('rgb(39, 135, 217)')\n              .padding(50)\n              .margin(50)\n            }\n            .backgroundColor(Color.White)\n            .padding(50)\n            .margin(50)\n          }\n        }\n        .width('100%')\n        .scrollBar(BarState.Off)\n        .scrollable(ScrollDirection.Vertical)\n\n        ScrollBar({ scroller: this.scroller, direction: ScrollBarDirection.Vertical, state: BarState.Auto }) {\n          Text()\n            .width(20)\n            .height(100)\n            .borderRadius(10)\n            .backgroundColor('#C0C0C0')\n        }.width(20).backgroundColor('#ededed')\n      }\n    }.height('90%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "镜像前效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(619341)/* ["default"] */.A) + "",
        width: "312",
        height: "441"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["镜像后效果如下，镜像生效条件请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-internationalization#%E4%BD%BF%E7%94%A8%E9%95%9C%E5%83%8F%E8%83%BD%E5%8A%9B",
        children: "使用镜像能力"
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(37943)/* ["default"] */.A) + "",
        width: "312",
        height: "465"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5align属性适配镜像特性",
      children: "示例5（align属性适配镜像特性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置内容在元素内的对齐方式和子元素在父组件主轴方向上的布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct buttonTestDemo {\n  @State isLocalizedAlignment: LocalizedAlignment[] =\n    [LocalizedAlignment.TOP_START, LocalizedAlignment.TOP, LocalizedAlignment.TOP_END, LocalizedAlignment.START,\n      LocalizedAlignment.CENTER, LocalizedAlignment.END, LocalizedAlignment.BOTTOM_START, LocalizedAlignment.BOTTOM,\n      LocalizedAlignment.BOTTOM_END]\n  @State isLocalizedAlignmentIndex: number = 4\n  @State isDirection: Direction[] = [Direction.Ltr, Direction.Rtl, Direction.Auto]\n  @State isDirectionIndex: number = 0\n\n  build() {\n    Row() {\n      Column() {\n\n        Row({ space: 5 }) {\n          Button('START')\n            .onClick(() => {\n              this.isLocalizedAlignmentIndex = 3\n            })\n          Button('CENTER')\n            .onClick(() => {\n              this.isLocalizedAlignmentIndex = 4\n            })\n          Button('END')\n            .onClick(() => {\n              this.isLocalizedAlignmentIndex = 5\n            })\n        }.margin(20)\n\n        Row({ space: 5 }) {\n          Button('Ltr')\n            .onClick(() => {\n              this.isDirectionIndex = 0\n            })\n          Button('Rtl')\n            .onClick(() => {\n              this.isDirectionIndex = 1\n            })\n          Button('Auto')\n            .onClick(() => {\n              this.isDirectionIndex = 2\n            })\n        }.margin(20)\n\n        Row() {\n          Button('OK', { type: ButtonType.Capsule, stateEffect: true })\n            .backgroundColor(0x317aff)\n            .width(200)\n            .height(100)\n            .direction(this.isDirection[this.isDirectionIndex])\n            .align(this.isLocalizedAlignment[this.isLocalizedAlignmentIndex])\n        }.margin(20)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(67231)/* ["default"] */.A) + "",
        width: "417",
        height: "318"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6layoutgravity属性单独设置stack组件中子组件的对齐规则",
      children: "示例6（layoutGravity属性单独设置Stack组件中子组件的对齐规则）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更改Stack中Text的位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index5 {\n  private layoutGravityArr: LocalizedAlignment[] = [\n    LocalizedAlignment.TOP_START, LocalizedAlignment.TOP, LocalizedAlignment.TOP_END,\n    LocalizedAlignment.START, LocalizedAlignment.CENTER, LocalizedAlignment.END,\n    LocalizedAlignment.BOTTOM_START, LocalizedAlignment.BOTTOM, LocalizedAlignment.BOTTOM_END];\n  @State layoutGravityIndex: number = 0;\n  private directionArr: Direction[] = [Direction.Ltr, Direction.Rtl, Direction.Auto];\n  @State directionIndex: number = 0;\n\n  build() {\n    Row() {\n      Column() {\n        Stack({\n          alignContent: Alignment.TopStart\n        }) {\n          Text('StackChildAlign_TopStart').fontSize(15)\n          Text('Child Text')\n            .width(150)\n            .height(150)\n            .backgroundColor(Color.Yellow)\n            .fontSize(15)\n            .layoutGravity(this.layoutGravityArr[this.layoutGravityIndex])\n        }\n        .width('100%')\n        .height(400)\n        .backgroundColor(Color.Grey)\n        .margin({ top: 10, bottom: 10 })\n        .direction(this.directionArr[this.directionIndex])\n\n        Button(\"LayoutGravity: \" + this.layoutGravityArr[this.layoutGravityIndex])\n          .width(300)\n          .fontSize(16)\n          .onClick(() => {\n            this.layoutGravityIndex = ++this.layoutGravityIndex % this.layoutGravityArr.length;\n          })\n          .margin({ bottom: 10 })\n\n        Button(\"Direction: \" + this.directionArr[this.directionIndex])\n          .width(150)\n          .fontSize(16)\n          .onClick(() => {\n            this.directionIndex = ++this.directionIndex % this.directionArr.length;\n          })\n          .margin({ bottom: 10 })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(872008)/* ["default"] */.A) + "",
        width: "608",
        height: "660"
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
619341(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAG5ATgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiignAoAKKTePUUbx6j86AFopN49R+dG8eo/OgBaKTePUfnRvHqPzoAWik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/P8AfHD/AJLV4w/7Dd7/AOj3rl66j44f8lq8Yf8AYbvf/R71y9f23gf92p/4V+R/FmM/jz9X+YUUUV1HOFFFFABRRRQAUj/dNLSP9000B+6P7BH/ACZh8M/+xftf/QK9cryP9gj/AJMw+Gf/AGL9r/6BXrlfxXm/+/1/8cv/AEpn9lZP/uFD/BH/ANJQUUUV5x6QUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUyf7g+tPpk/3B9aT2Ez+f744f8lq8Yf9hu9/9HvXL11Hxw/5LV4w/wCw3e/+j3rl6/tvA/7tT/wr8j+LMZ/Hn6v8wooorqOcKKKKACiiigApH+6aWkf7ppoD90f2CP8AkzD4Z/8AYv2v/oFeuV5H+wR/yZh8M/8AsX7X/wBAr1yv4rzf/f6/+OX/AKUz+ysn/wBwof4I/wDpKCiiivOPSCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACmT/cH1p9Mn+59KT2Bn8/3xw/5LV4w/7Dd7/wCj3rl67/41/D/X5/jL4uePQ9YkR9avGVlspCGBnfBBx0rmP+FdeIf+gBrf/gDL/wDE1/auCxFL6vT95fCuvkj+MMZQqe3n7r3fR9zHorY/4V14h/6AGt/+AMv/AMTR/wAK68Q/9ADW/wDwBl/+Jrq+s0f5l96Of2FX+V/czHorY/4V14h/6AGt/wDgDL/8TR/wrrxD/wBADW//AABl/wDiaPrNH+Zfeg9hV/lf3Mx6K2P+FdeIf+gBrf8A4Ay//E0f8K68Q/8AQA1v/wAAZf8A4mj6zR/mX3oPYVf5X9zMekf7prZ/4V14h/6AGt/+AMv/AMTQ3w68Qkf8gDWv/AGX/wCJoWJo/wAy+9B7Cr/K/uZ+3H7BH/JmHwz/AOxftf8A0CvXK8m/YStJbD9jn4bwTxSQzRaDbK8cilWQ7OhB5Br1mv4xzf8A36v/AI5f+lM/sbJ1bAUE/wCSP/pKCiiivPPRCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACgjcOaKKAG+So7UeUvpTqKBWQ3yl9KPKX0p1FAWQ3yl9KPKX0p1FAWQ3yl9KPKX0p1FAWQ3yl9KPKX0p1FAWQiqF6UtFFAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z");

},
67231(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799844-137c83eb596fe54b2951b998cf63548f.gif");

},
651892(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799842-040b17a542eedf17fa52c6d54610573c.png");

},
981052(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
872008(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439539-73d929b1eb2b043421d5361db3418c2b.gif");

},
37943(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479493-57a644ebab102143336ebbcd0b96acd7.png");

},
758925(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
103784(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
360399(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439537-f53590355c0fd0371a6982a803c06a9f.jpeg");

},
997277(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
108636(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
876269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479491-733ef210c85a2a9ecc3446d6b6e5e757.png");

},
421609(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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