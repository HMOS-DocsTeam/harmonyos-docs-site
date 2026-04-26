"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["135662"], {
929163(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_interaction_property_ts_universal_attributes_drag_drop_ts_universal_attributes_drag_drop_md_277_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-interaction-property-ts-universal-attributes-drag-drop-ts-universal-attributes-drag-drop-md-277.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_interaction_property_ts_universal_attributes_drag_drop_ts_universal_attributes_drag_drop_md_277_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop","title":"拖拽控制","description":"组件提供了一些属性和接口，可用于配置组件对拖拽事件的响应行为，或影响系统对拖拽事件的处理方式，包括是否允许被拖拽，自定义拖拽预览图的外观等。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"拖拽控制","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-drag-drop","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-drag-drop"},"sidebar":"ref","previous":{"title":"焦点控制","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus"},"next":{"title":"拖拽排序","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-sorting/ts-universal-attributes-drag-sorting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop.md


const frontMatter = {
	title: '拖拽控制',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-drag-drop',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-drag-drop'
};
const contentTitle = '拖拽控制';

const assets = {

};



const toc = [{
  "value": "allowDrop",
  "id": "allowdrop",
  "level": 2
}, {
  "value": "draggable",
  "id": "draggable",
  "level": 2
}, {
  "value": "dragPreview11+",
  "id": "dragpreview11",
  "level": 2
}, {
  "value": "dragPreview15+",
  "id": "dragpreview15",
  "level": 2
}, {
  "value": "dragPreviewOptions11+",
  "id": "dragpreviewoptions11",
  "level": 2
}, {
  "value": "DragPreviewOptions11+",
  "id": "dragpreviewoptions11-1",
  "level": 2
}, {
  "value": "DragPreviewMode11+枚举说明",
  "id": "dragpreviewmode11枚举说明",
  "level": 2
}, {
  "value": "DraggingSizeChangeEffect19+枚举说明",
  "id": "draggingsizechangeeffect19枚举说明",
  "level": 2
}, {
  "value": "DragInteractionOptions12+",
  "id": "draginteractionoptions12",
  "level": 2
}, {
  "value": "UniformDataType",
  "id": "uniformdatatype",
  "level": 2
}, {
  "value": "ImageModifier12+",
  "id": "imagemodifier12",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（允许拖拽和落入）",
  "id": "示例1允许拖拽和落入",
  "level": 3
}, {
  "value": "示例2（设置预览图）",
  "id": "示例2设置预览图",
  "level": 3
}, {
  "value": "示例3（设置背板图样式）",
  "id": "示例3设置背板图样式",
  "level": 3
}, {
  "value": "示例4（设置多选拖拽）",
  "id": "示例4设置多选拖拽",
  "level": 3
}, {
  "value": "示例5（设置默认点按效果）",
  "id": "示例5设置默认点按效果",
  "level": 3
}, {
  "value": "示例6（自定义背板图样式）",
  "id": "示例6自定义背板图样式",
  "level": 3
}, {
  "value": "示例7（图片拖拽设置）",
  "id": "示例7图片拖拽设置",
  "level": 3
}, {
  "value": "示例8（设置图片拖拽震动）",
  "id": "示例8设置图片拖拽震动",
  "level": 3
}, {
  "value": "示例9（自定义预览图）",
  "id": "示例9自定义预览图",
  "level": 3
}, {
  "value": "示例10（以拖拽预览图初始尺寸计算跟手点位置）",
  "id": "示例10以拖拽预览图初始尺寸计算跟手点位置",
  "level": 3
}, {
  "value": "示例11（长按浮起预览图与拖拽预览图过渡动效）",
  "id": "示例11长按浮起预览图与拖拽预览图过渡动效",
  "level": 3
}, {
  "value": "示例12（设置自定义组件落入）",
  "id": "示例12设置自定义组件落入",
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
        id: "拖拽控制",
        children: "拖拽控制"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件提供了一些属性和接口，可用于配置组件对拖拽事件的响应行为，或影响系统对拖拽事件的处理方式，包括是否允许被拖拽，自定义拖拽预览图的外观等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(620809)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI框架对以下组件实现了默认的拖拽能力，支持对数据的拖出或拖入响应。开发者也可以通过实现通用拖拽事件来自定义拖拽响应。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["默认支持拖出能力的组件（可从组件上拖出数据）：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search",
          children: "Search"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
          children: "TextInput"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
          children: "TextArea"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
          children: "RichEditor"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
          children: "Text"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
          children: "Image"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-container-hyperlink/ts-container-hyperlink",
          children: "Hyperlink"
        }), "，开发者可通过设置这些组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop#draggable",
          children: "draggable"
        }), "属性来控制对默认拖拽能力的使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["默认支持拖入能力的组件（目标组件可响应拖入数据）：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search",
          children: "Search"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
          children: "TextInput"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
          children: "TextArea"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
          children: "RichEditor"
        }), "，开发者可通过设置这些组件的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-drop/ts-universal-attributes-drag-drop#allowdrop",
          children: "allowDrop"
        }), "属性为null来禁用对默认拖入能力的支持。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持拖出能力的组件（不可从组件上拖出数据）：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-arcscrollbar/ts-basic-components-arcscrollbar",
          children: "ArcScrollBar"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ohos-arkui-advanced-multinavigation/ohos-arkui-advanced-multinavigation",
          children: "MultiNavigation"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-toolbaritem/ts-basic-components-toolbaritem",
          children: "ToolBarItem"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ohos-arkui-advanced-arcslider/ohos-arkui-advanced-arcslider",
          children: "ArcSlider"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
          children: "Span"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-imagespan/ts-basic-components-imagespan",
          children: "ImageSpan"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-containerspan/ts-basic-components-containerspan",
          children: "ContainerSpan"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolspan/ts-basic-components-symbolspan",
          children: "SymbolSpan"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-arc-alphabet-indexer/ts-container-arc-alphabet-indexer",
          children: "ArcAlphabetIndexer"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-offscreencanvas/ts-components-offscreencanvas",
          children: "OffscreenCanvas"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
          children: "Menu"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitem/ts-basic-components-menuitem",
          children: "MenuItem"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menuitemgroup/ts-basic-components-menuitemgroup",
          children: "MenuItemGroup"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/arkui-security/ts-security-components-pastebutton/ts-security-components-pastebutton",
          children: "PasteButton"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/arkui-security/ts-security-components-savebutton/ts-security-components-savebutton",
          children: "SaveButton"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/themes/ts-container-with-theme/ts-container-with-theme",
          children: "WithTheme"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-navpushpathhelper/ohos-atomicservice-navpushpathhelper",
          children: "NavPushPathHelper"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-placeholder-comp/ts-components-contentslot/ts-components-contentslot",
          children: "ContentSlot"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-chip/ohos-arkui-advanced-chip",
          children: "Chip"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-exceptionprompt/ohos-arkui-advanced-exceptionprompt",
          children: "ExceptionPrompt"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-filter/ohos-arkui-advanced-filter",
          children: "Filter"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-formmenu/ohos-arkui-advanced-formmenu",
          children: "FormMenu"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-popup/ohos-arkui-advanced-popup",
          children: "Popup"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-selectionmenu/ohos-arkui-advanced-selectionmenu",
          children: "SelectionMenu"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-splitlayout/ohos-arkui-advanced-splitlayout",
          children: "SplitLayout"
        }), "以及所有弹窗类组件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text、TextInput、TextArea、Hyperlink、Image、RichEditor和Web组件的draggable属性默认为true，默认支持拖出能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其他支持拖出能力的组件需要开发者将draggable属性设置为true，并在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragstart",
        children: "onDragStart"
      }), "等接口中实现数据传输相关内容，才能正确处理拖拽。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(396149)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Text组件需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#copyoption9",
        children: "copyOption"
      }), "一起使用，设置copyOptions为CopyOptions.InApp或者CopyOptions.LocalDevice。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "allowdrop",
      children: "allowDrop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "allowDrop(value: Array<UniformDataType> | null | Array<string>): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置该组件上允许落入的数据类型。如果未设置allowDrop，组件将默认接受所有数据类型。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#uniformdatatype",
              children: "UniformDataType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>23+"
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
      id: "draggable",
      children: "draggable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "draggable(value: boolean): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置该组件是否允许拖拽。默认情况下，组件不允许拖拽。"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置该组件是否允许进行拖拽。true表示允许拖拽，false表示不允许拖拽。"
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
      id: "dragpreview11",
      children: "dragPreview11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dragPreview(value: CustomBuilder | DragItemInfo | string): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件浮起和拖拽过程中的预览图。"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragiteminfo",
              children: "DragItemInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string12+"
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
      id: "dragpreview15",
      children: "dragPreview15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dragPreview(preview: CustomBuilder | DragItemInfo | string, config?: PreviewConfiguration):T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组件拖拽过程中的预览图，仅用于设置浮起效果或者禁用浮起效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(127458)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口不支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
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
            children: "preview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#dragiteminfo",
              children: "DragItemInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#previewconfiguration15",
              children: "PreviewConfiguration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对自定义拖拽过程中的预览图进行配置。  只对", (0,jsx_runtime.jsx)(_components.a, {
              href: "#dragpreview11",
              children: "dragPreview"
            }), "中的预览生效。"]
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
      id: "dragpreviewoptions11",
      children: "dragPreviewOptions11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dragPreviewOptions(value: DragPreviewOptions, options?: DragInteractionOptions): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置拖拽过程中预览图处理模式，数量角标的显示以及预览图浮起的交互模式。不支持onItemDragStart拖拽方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(288117)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#dragpreviewoptions11-1",
              children: "DragPreviewOptions"
            }), "11+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置拖拽过程中预览图处理模式及数量角标的显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options12+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#draginteractionoptions12",
              children: "DragInteractionOptions"
            }), "12+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置拖拽过程中预览图浮起的交互模式。  默认值：空"
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
      id: "dragpreviewoptions11-1",
      children: "DragPreviewOptions11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置拖拽过程中预览图处理模式及数量角标的显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#dragpreviewmode11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "DragPreviewMode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#dragpreviewmode11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "DragPreviewMode"
            }), ">12+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "numberBadge12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "modifier12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#imagemodifier12",
              children: "ImageModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于配置拖拽背板图的样式Modifier对象，可使用图片组件所支持的属性和样式来配置背板图样式(参考示例6)，当前支持透明度，阴影，背景模糊度，圆角。文本拖拽只支持默认效果，不支持通过modifier进行自定义。  1.透明度  通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-opacity/ts-universal-attributes-opacity#opacity",
              children: "opacity"
            }), "设置不透明度，不透明度的取值范围为0-1。设置0或不设置时采用背板图透明度的默认值0.95，设置1或异常值时不透明。  2.阴影  通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadow",
              children: "shadow"
            }), "设置阴影。  3.背景模糊度  通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundeffect11",
              children: "backgroundEffect"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundblurstyle9",
              children: "backgroundBlurStyle"
            }), "设置背景模糊度，如果两者同时设置，以后设置的属性为准。  4.圆角  通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#border",
              children: "border"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-border/ts-universal-attributes-border#borderradius",
              children: "borderRadius"
            }), "设置圆角，当同时在mode和modifier中设置圆角，mode设置的圆角显示优先级低于modifier设置。  默认值：空，无法修改属性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sizeChangeEffect19+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#draggingsizechangeeffect19%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "DraggingSizeChangeEffect"
            }), "19+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于选择长按浮起图与拖拽预览图过渡效果。  默认值：DraggingSizeChangeEffect.DEFAULT。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 19开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dragpreviewmode11枚举说明",
      children: "DragPreviewMode11+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置拖拽预览图的显示模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统根据拖拽场景自动改变跟手点位置，根据规则自动对拖拽背板图进行缩放变换等。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISABLE_SCALE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["禁用系统对拖拽背板图的缩放行为。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENABLE_DEFAULT_SHADOW12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启用非文本类组件默认阴影效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENABLE_DEFAULT_RADIUS12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启用非文本类组件统一圆角效果，默认值12vp。当应用自身设置的圆角值大于默认值或modifier设置的圆角时，则显示应用自定义圆角效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENABLE_DRAG_ITEM_GRAY_EFFECT18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启用支持原拖拽对象灰显（透明度）效果，对文本内容拖拽不生效。用户拖起时原对象显示灰显效果，释放时原对象恢复原有效果。开启默认灰显效果后，不建议在拖拽开始后自行修改透明度，如果开发者在拖拽发起后自行修改应用透明度，则灰显效果将被覆盖，且在结束拖拽时无法正确恢复原始透明度效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENABLE_MULTI_TILE_EFFECT18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启用支持多选对象鼠标拖拽不聚拢效果，各拖拽图显示在其原始位置的相对位置，当满足多选的情况下且isMultiSelectionEnabled为true时该参数才生效。不聚拢效果优先级高于", (0,jsx_runtime.jsx)(_components.a, {
              href: "#dragpreview11",
              children: "dragPreview"
            }), "。不支持二次拖拽、圆角和缩放设置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启用支持以拖拽预览图初始尺寸计算跟手点位置，长按浮起图和拖拽图不一致时使用。鼠标拖拽，设置DragPreviewMode.ENABLE_MULTI_TILE_EFFECT时不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 19开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "draggingsizechangeeffect19枚举说明",
      children: "DraggingSizeChangeEffect19+枚举说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当一个节点上同时设置长按浮起预览（参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu12",
        children: "bindContextMenu"
      }), "）与拖拽时，使用该字段设置长按浮起预览图与拖拽预览图过渡动效方式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 19开始，该接口支持在元服务中使用。"]
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
            children: "DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发起拖拽时直接从菜单预览图切换为最终尺寸的拖拽预览图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIZE_TRANSITION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发起拖拽时，由菜单预览图直接切换为拖拽预览图，尺寸逐步从菜单预览图尺寸过渡到最终预览图尺寸，设置了", (0,jsx_runtime.jsx)(_components.a, {
              href: "#dragpreviewmode11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "DragPreviewMode"
            }), "中的DISABLE_SCALE枚举值时尺寸过渡不生效。这在长按浮起预览图与拖拽预览图相同时使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIZE_CONTENT_TRANSITION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发起拖拽时，由菜单预览图逐步过渡切换为最终拖拽预览图，设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#dragpreviewmode11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "DragPreviewMode"
            }), "中的DISABLE_SCALE时尺寸过渡不生效。这常用于菜单预览图与拖拽预览图差异较大时使用，过渡效果包含内容透明度及尺寸变化。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "draginteractionoptions12",
      children: "DragInteractionOptions12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "isMultiSelectionEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示拖拽过程中背板图是否支持多选聚拢效果。true表示支持多选聚拢效果，false表示不支持多选聚拢效果。该参数只在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
              children: "Grid"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
              children: "List"
            }), "组件中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-griditem/ts-container-griditem",
              children: "GridItem"
            }), "组件和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
              children: "ListItem"
            }), "组件生效。  当一个item组件设置为多选拖拽时，该组件的子组件不可拖拽。聚拢组件预览图设置的优先级为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#dragpreview11",
              children: "dragPreview"
            }), "中的string，dragPreview中的PixelMap，组件自截图，不支持dragPreview中的Builder形式。  不支持组件绑定", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu12",
              children: "bindContextMenu"
            }), "中参数存在isShown的模式。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultAnimationBeforeLifting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示是否启用长按浮起阶段组件自身的默认点按效果（缩小）。true表示启用默认点按效果，false表示不启用默认点按效果。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isLiftingDisabled15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示长按拖拽时，是否禁用浮起效果。true表示禁用浮起效果，false表示不禁用浮起效果。  如果设置为true，当组件支持拖拽并同时设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu8",
              children: "bindContextMenu"
            }), "时，仅弹出配置的自定义菜单预览。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableEdgeAutoScroll18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置在拖拽至可滚动组件边缘时是否触发自动滚屏。true表示触发自动滚屏，false表示不触发自动滚屏。  默认值：true  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableHapticFeedback18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示拖拽时是否启用震动。true表示启用震动，false表示不启用震动。仅在存在蒙层的预览（通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu12",
              children: "bindContextMenu"
            }), "）场景生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "注意："
              })
            }), " 仅当应用具备 ohos.permission.VIBRATE 权限，且用户启用了触感反馈时才会生效。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uniformdatatype",
      children: "UniformDataType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type UniformDataType = UniformDataType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标准化数据类型。"
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-uniformtypedescriptor/js-apis-data-uniformtypedescriptor#uniformdatatype",
              children: "UniformDataType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标准化数据类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "imagemodifier12",
      children: "ImageModifier12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ImageModifier = ImageModifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片组件modifier对象。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#%E8%87%AA%E5%AE%9A%E4%B9%89modifier",
              children: "ImageModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片组件modifier对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1允许拖拽和落入",
      children: "示例1（允许拖拽和落入）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例1通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#allowdrop",
        children: "allowDrop"
      }), "设置组件是否可落入，通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#draggable",
        children: "draggable"
      }), "设置组件是否可拖拽。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { unifiedDataChannel, uniformTypeDescriptor } from '@kit.ArkData';\n\n@Entry\n@Component\nstruct ImageExample {\n  @State uri: string = \"\";\n  @State aBlockArr: string[] = [];\n  @State bBlockArr: string[] = [];\n  @State AVisible: Visibility = Visibility.Visible;\n  @State dragSuccess: Boolean = false;\n\n  build() {\n    Column() {\n      Text('Image拖拽')\n        .fontSize('30dp')\n      Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceAround }) {\n        // $r('app.media.icon')需要替换为开发者所需的图像资源文件\n        Image($r('app.media.icon'))\n          .width(100)\n          .height(100)\n          .border({ width: 1 })\n          .visibility(this.AVisible)\n          .draggable(true)\n          .onDragEnd((event: DragEvent) => {\n            let ret = event.getResult();\n            if (ret == 0) {\n              console.info(\"enter ret == 0\")\n              this.AVisible = Visibility.Hidden;\n            } else {\n              console.info(\"enter ret != 0\")\n              this.AVisible = Visibility.Visible;\n            }\n          })\n      }\n      .margin({ bottom: 20 })\n\n      Row() {\n        Column() {\n          Text('不允许释放区域')\n            .fontSize('15dp')\n            .height('10%')\n          List() {\n            ForEach(this.aBlockArr, (item: string, index) => {\n              ListItem() {\n                Image(item)\n                  .width(100)\n                  .height(100)\n                  .border({ width: 1 })\n              }\n              .margin({ left: 30, top: 30 })\n            }, (item: string) => item)\n          }\n          .height('90%')\n          .width('100%')\n          .allowDrop([uniformTypeDescriptor.UniformDataType.TEXT])\n          .onDrop((event?: DragEvent, extraParams?: string) => {\n            this.uri = JSON.parse(extraParams as string)?.extraInfo;\n            this.aBlockArr.splice(JSON.parse(extraParams as string)?.insertIndex, 0, this.uri);\n            console.info(\"ondrop not udmf data\");\n          })\n          .border({ width: 1 })\n        }\n        .height(\"50%\")\n        .width(\"45%\")\n        .border({ width: 1 })\n        .margin({ left: 12 })\n\n        Column() {\n          Text('可释放区域')\n            .fontSize('15dp')\n            .height('10%')\n          List() {\n            ForEach(this.bBlockArr, (item: string, index) => {\n              ListItem() {\n                Image(item)\n                  .width(100)\n                  .height(100)\n                  .border({ width: 1 })\n              }\n              .margin({ left: 30, top: 30 })\n            }, (item: string) => item)\n          }\n          .border({ width: 1 })\n          .height('90%')\n          .width('100%')\n          .allowDrop([uniformTypeDescriptor.UniformDataType.IMAGE])\n          .onDrop((event?: DragEvent, extraParams?: string) => {\n            console.info(\"enter onDrop\")\n            let dragData: UnifiedData = (event as DragEvent).getData() as UnifiedData;\n            if (dragData != undefined) {\n              let arr: Array<unifiedDataChannel.UnifiedRecord> = dragData.getRecords();\n              if (arr.length > 0) {\n                let image = arr[0] as unifiedDataChannel.Image;\n                this.uri = image.imageUri;\n                this.bBlockArr.splice(JSON.parse(extraParams as string)?.insertIndex, 0, this.uri);\n              } else {\n                console.info(`dragData arr is null`)\n              }\n            } else {\n              console.info(`dragData  is undefined`)\n            }\n            console.info(\"ondrop udmf data\");\n            this.dragSuccess = true\n          })\n        }\n        .height(\"50%\")\n        .width(\"45%\")\n        .border({ width: 1 })\n        .margin({ left: 12 })\n      }\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(238885)/* ["default"] */.A) + "",
        width: "392",
        height: "448"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置预览图",
      children: "示例2（设置预览图）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例2通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#dragpreview11",
        children: "dragPreview"
      }), "设置拖拽过程的预览图。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct DragPreviewDemo {\n  @Builder\n  dragPreviewBuilder() {\n    Column() {\n      Text(\"dragPreview\")\n        .width(150)\n        .height(50)\n        .fontSize(20)\n        .borderRadius(10)\n        .textAlign(TextAlign.Center)\n        .fontColor(Color.Black)\n        .backgroundColor(Color.Pink)\n    }\n  }\n\n  @Builder\n  MenuBuilder() {\n    Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n      Text(\"menu item 1\")\n        .fontSize(15)\n        .width(100)\n        .height(40)\n        .textAlign(TextAlign.Center)\n        .fontColor(Color.Black)\n        .backgroundColor(Color.Pink)\n      Divider()\n        .height(5)\n      Text(\"menu item 2\")\n        .fontSize(15)\n        .width(100)\n        .height(40)\n        .textAlign(TextAlign.Center)\n        .fontColor(Color.Black)\n        .backgroundColor(Color.Pink)\n    }\n    .width(100)\n  }\n\n  build() {\n    Row() {\n      Column() {\n        // $r('app.media.image')需要替换为开发者所需的图像资源文件\n        Image($r('app.media.image'))\n          .width(\"30%\")\n          .draggable(true)\n          .bindContextMenu(this.MenuBuilder, ResponseType.LongPress)\n          .onDragStart(() => {\n            console.info(\"Image onDragStart\")\n          })\n          .dragPreview(this.dragPreviewBuilder)\n      }\n      .width(\"100%\")\n    }\n    .height(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(965225)/* ["default"] */.A) + "",
        width: "400",
        height: "400"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置背板图样式",
      children: "示例3（设置背板图样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例3通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#dragpreviewoptions11",
        children: "dragPreviewOptions"
      }), "为ENABLE_DEFAULT_SHADOW、ENABLE_DEFAULT_RADIUS设置默认阴影和统一圆角效果。从API version 18开始，通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#dragpreviewoptions11",
        children: "dragPreviewOptions"
      }), "为ENABLE_DRAG_ITEM_GRAY_EFFECT设置灰显效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct dragPreviewOptionsDemo {\n  build() {\n    Row() {\n      Column() {\n        // $r('app.media.image')需要替换为开发者所需的图像资源文件\n        Image($r('app.media.image'))\n          .margin({ top: 10 })\n          .width(\"30%\")\n          .draggable(true)\n          .dragPreviewOptions({ mode: DragPreviewMode.AUTO })\n        // $r('app.media.image')需要替换为开发者所需的图像资源文件\n        Image($r('app.media.image'))\n          .margin({ top: 10 })\n          .width(\"30%\")\n          .border({\n            radius: {\n              topLeft: 1,\n              topRight: 2,\n              bottomLeft: 4,\n              bottomRight: 8\n            }\n          })\n          .draggable(true)\n          .onDragStart(() => {\n            console.info(\"Image onDragStart\")\n          })\n          .dragPreviewOptions({\n            mode: [DragPreviewMode.ENABLE_DEFAULT_SHADOW, DragPreviewMode.ENABLE_DEFAULT_RADIUS,\n              DragPreviewMode.ENABLE_DRAG_ITEM_GRAY_EFFECT]\n          })\n      }\n      .width(\"100%\")\n      .height(\"100%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(858630)/* ["default"] */.A) + "",
        width: "294",
        height: "338"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置多选拖拽",
      children: "示例4（设置多选拖拽）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例4通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#draginteractionoptions12",
        children: "isMultiSelectionEnabled"
      }), "实现Grid组件的多选拖拽效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Example {\n  @State numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8]\n\n  build() {\n    Column({ space: 5 }) {\n      Grid() {\n        ForEach(this.numbers, (item: number) => {\n          GridItem() {\n            Column()\n              .backgroundColor(Color.Blue)\n              .width('100%')\n              .height('100%')\n          }\n          .width(90)\n          .height(90)\n          .selectable(true)\n          .selected(true)\n          .dragPreviewOptions({}, { isMultiSelectionEnabled: true })\n          .onDragStart(() => {\n\n          })\n        }, (item: string) => item)\n      }\n      .columnsTemplate('1fr 1fr 1fr')\n      .rowsTemplate('1fr 1fr 1fr')\n      .height(300)\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(78709)/* ["default"] */.A) + "",
        width: "416",
        height: "337"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置默认点按效果",
      children: "示例5（设置默认点按效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例5通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#draginteractionoptions12",
        children: "defaultAnimationBeforeLifting"
      }), "实现Grid组件的默认点按效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Example {\n  @State numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8]\n\n  build() {\n    Column({ space: 5 }) {\n      Grid() {\n        ForEach(this.numbers, (item: number) => {\n          GridItem() {\n            Column()\n              .backgroundColor(Color.Blue)\n              .width('100%')\n              .height('100%')\n          }\n          .width(90)\n          .height(90)\n          .selectable(true)\n          .selected(true)\n          .dragPreviewOptions({}, { isMultiSelectionEnabled: true, defaultAnimationBeforeLifting: true })\n          .onDragStart(() => {\n\n          })\n        }, (item: string) => item)\n      }\n      .columnsTemplate('1fr 1fr 1fr')\n      .rowsTemplate('1fr 1fr 1fr')\n      .height(300)\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(487161)/* ["default"] */.A) + "",
        width: "416",
        height: "337"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6自定义背板图样式",
      children: "示例6（自定义背板图样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例6通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#imagemodifier12",
        children: "ImageModifier"
      }), "实现Image组件的自定义背板图样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ImageModifier } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct dragPreviewOptionsDemo {\n  @State myModifier: ImageAttribute = new ImageModifier().opacity(0.5)\n  @State vis: boolean = true\n  @State changeValue: string = ''\n  @State submitValue: string = ''\n  @State positionInfo: CaretOffset = { index: 0, x: 0, y: 0 }\n  controller: SearchController = new SearchController()\n  @State OpacityIndex: number = 0\n  @State OpacityList: (number | undefined | null)[] = [\n    0.3, 0.5, 0.7, 1, -50, 0, 10, undefined, null\n  ]\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.OpacityList[this.OpacityIndex] + \"\")\n        Button(\"Opacity\")\n          .onClick(() => {\n            this.OpacityIndex++\n            if (this.OpacityIndex > this.OpacityList.length - 1) {\n              this.OpacityIndex = 0\n            }\n          })\n        // $r('app.media.image')需要替换为开发者所需的图像资源文件\n        Image($r('app.media.image'))\n          .margin({ top: 10 })\n          .width(\"100%\")\n          .draggable(true)\n          .dragPreviewOptions({\n            modifier: this.myModifier.opacity(this.OpacityList[this.OpacityIndex]) as ImageModifier\n          })\n      }\n      .width(\"50%\")\n      .height(\"50%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(22518)/* ["default"] */.A) + "",
        width: "411",
        height: "392"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7图片拖拽设置",
      children: "示例7（图片拖拽设置）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例7展示了不同图片（在线图片资源、本地图片资源和PixelMap）在拖拽时组件的设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用网络图片时，需要申请权限ohos.permission.INTERNET。具体申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { uniformTypeDescriptor, unifiedDataChannel } from '@kit.ArkData';\nimport { image } from '@kit.ImageKit';\nimport { request } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { buffer } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct ImageDrag {\n  @State targetImage1: string | PixelMap | null = null;\n  @State targetImage2: string | PixelMap | null = null;\n  @State targetImage3: string | PixelMap | null = null;\n  context: Context | undefined = this.getUIContext().getHostContext();\n  filesDir = this.context?.filesDir;\n\n  public async createPixelMap(pixelMap: unifiedDataChannel.SystemDefinedPixelMap): Promise<image.PixelMap | null> {\n    let mWidth: number = (pixelMap.details?.width ?? -1) as number;\n    let mHeight: number = (pixelMap.details?.height ?? -1) as number;\n    let mPixelFormat: image.PixelMapFormat =\n      (pixelMap.details?.['pixel-format'] ?? image.PixelMapFormat.UNKNOWN) as image.PixelMapFormat;\n    let mItemPixelMapData: Uint8Array = pixelMap.rawData;\n    const opts: image.InitializationOptions = {\n      editable: false, pixelFormat: mPixelFormat, size: {\n        height: mHeight,\n        width: mWidth\n      }\n    };\n    const buffer: ArrayBuffer = mItemPixelMapData.buffer.slice(mItemPixelMapData.byteOffset,\n      mItemPixelMapData.byteLength + mItemPixelMapData.byteOffset);\n    try {\n      let pixelMap: image.PixelMap = await image.createPixelMap(buffer, opts);\n      return pixelMap;\n    } catch (err) {\n      console.error('dragtest--> getPixelMap', err);\n      return null;\n    }\n  }\n\n  build() {\n    Column() {\n      Flex({ direction: FlexDirection.Row, justifyContent: FlexAlign.Center }) {\n        // 在线图片资源拖出\n        Column() {\n          Text('Online Image').fontSize(14)\n          Image('https://www.example.com/xxx.png')// 请填写一个具体的网络图片地址\n            .objectFit(ImageFit.Contain)\n            .draggable(true)\n            .onDragStart(() => {\n            })\n            .width(100)\n            .height(100)\n        }\n        .border({\n          width: 2,\n          color: Color.Gray,\n          radius: 5,\n          style: BorderStyle.Dotted\n        })\n        .alignItems(HorizontalAlign.Center).justifyContent(FlexAlign.Center)\n\n        // 本地图片资源拖出\n        Column() {\n          Text('Local Image').fontSize(14)\n          // $r('app.media.example')需要替换为开发者所需的图像资源文件\n          Image($r('app.media.example'))\n            .objectFit(ImageFit.Contain)\n            .draggable(true)\n            .onDragStart(() => {\n            })\n            .width(100)\n            .height(100)\n        }\n        .border({\n          width: 2,\n          color: Color.Gray,\n          radius: 5,\n          style: BorderStyle.Dotted\n        })\n        .alignItems(HorizontalAlign.Center).justifyContent(FlexAlign.Center)\n\n        // PixelMap拖出\n        Column() {\n          Text('PixelMap').fontSize(14)\n          // $r('app.media.example')需要替换为开发者所需的图像资源文件\n          Image(this.context?.resourceManager.getDrawableDescriptor($r('app.media.example').id).getPixelMap())\n            .objectFit(ImageFit.Contain)\n            .draggable(true)\n            .onDragStart(() => {\n            })\n            .width(100)\n            .height(100)\n        }\n        .border({\n          width: 2,\n          color: Color.Gray,\n          radius: 5,\n          style: BorderStyle.Dotted\n        })\n        .alignItems(HorizontalAlign.Center).justifyContent(FlexAlign.Center)\n      }\n\n      // 落入数据类型为Image\n      Text('Data type is Image').fontSize(14).margin({ top: 10 })\n      Column() {\n        Image(this.targetImage1)\n          .objectFit(ImageFit.Contain)\n          .width('70%')\n          .height('70%')\n          .allowDrop([uniformTypeDescriptor.UniformDataType.IMAGE])\n          .onDrop((event: DragEvent, extraParams: string) => {\n            if (extraParams === null || extraParams === undefined) {\n              return;\n            }\n            // 通过extraParams获取图片\n            let arr: Record<string, object> = JSON.parse(extraParams) as Record<string, object>;\n            let uri = arr['extraInfo'];\n            if (typeof uri == 'string') {\n              this.targetImage1 = uri;\n              try {\n                request.downloadFile(this.context, {\n                  url: uri,\n                  filePath: this.filesDir + '/example.png'\n                }).then((downloadTask: request.DownloadTask) => {\n                  let file = fileIo.openSync(this.filesDir + '/example.png', fileIo.OpenMode.READ_WRITE);\n                  let arrayBuffer = new ArrayBuffer(1024);\n                  let readLen = fileIo.readSync(file.fd, arrayBuffer);\n                  let buf = buffer.from(arrayBuffer, 0, readLen);\n                  console.info(`The content of file: ${buf.toString()}`);\n                  fileIo.closeSync(file);\n                })\n              } catch (error) {\n              }\n            }\n          })\n      }\n      .width('70%')\n      .height('25%')\n      .border({\n        width: 2,\n        color: Color.Gray,\n        radius: 5,\n        style: BorderStyle.Dotted\n      })\n      .alignItems(HorizontalAlign.Center)\n      .justifyContent(FlexAlign.Center)\n\n      Column() {\n        Image(this.targetImage2)\n          .objectFit(ImageFit.Contain)\n          .width('70%')\n          .height('70%')\n          .allowDrop([uniformTypeDescriptor.UniformDataType.IMAGE])\n          .onDrop((event: DragEvent, extraParams: string) => {\n            // 通过uniformTypeDescriptor获取图片\n            let data: UnifiedData = event.getData();\n            let records: Array<unifiedDataChannel.UnifiedRecord> = data.getRecords();\n            if (records[0].getType() === uniformTypeDescriptor.UniformDataType.IMAGE) {\n              let image: unifiedDataChannel.Image = records[0] as unifiedDataChannel.Image;\n              this.targetImage2 = image.imageUri;\n            }\n          })\n      }\n      .width('70%')\n      .height('25%')\n      .border({\n        width: 2,\n        color: Color.Gray,\n        radius: 5,\n        style: BorderStyle.Dotted\n      })\n      .alignItems(HorizontalAlign.Center)\n      .justifyContent(FlexAlign.Center)\n\n      // 落入数据类型为PixelMap\n      Text('Data type is PixelMap').fontSize(14).margin({ top: 10 })\n      Column() {\n        Image(this.targetImage3)\n          .objectFit(ImageFit.Contain)\n          .width('70%')\n          .height('70%')\n          .allowDrop([uniformTypeDescriptor.UniformDataType.OPENHARMONY_PIXEL_MAP])\n          .onDrop(async (event: DragEvent, extraParams: string) => {\n            // 通过uniformTypeDescriptor获取图片\n            let data: UnifiedData = event.getData();\n            let records: Array<unifiedDataChannel.UnifiedRecord> = data.getRecords();\n            if (records[0].getType() === uniformTypeDescriptor.UniformDataType.OPENHARMONY_PIXEL_MAP) {\n              let record: unifiedDataChannel.SystemDefinedPixelMap =\n                records[0] as unifiedDataChannel.SystemDefinedPixelMap;\n              this.targetImage3 = await this.createPixelMap(record);\n\n              // 落盘到本地\n              const imagePackerApi = image.createImagePacker();\n              let packOpts: image.PackingOption = { format: \"image/jpeg\", quality: 98 };\n              const path: string = this.context?.cacheDir + \"/pixel_map.jpg\";\n              let file = fileIo.openSync(path, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);\n              imagePackerApi.packToFile(this.targetImage3, file.fd, packOpts).then(() => {\n                // 直接打包进文件\n              }).catch((error: BusinessError) => {\n                console.error('Failed to pack the image. And the error is: ' + error);\n              })\n            }\n          })\n      }\n      .width('70%')\n      .height('25%')\n      .border({\n        width: 2,\n        color: Color.Gray,\n        radius: 5,\n        style: BorderStyle.Dotted\n      })\n      .alignItems(HorizontalAlign.Center)\n      .justifyContent(FlexAlign.Center)\n\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(743532)/* ["default"] */.A) + "",
        width: "310",
        height: "626"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8设置图片拖拽震动",
      children: "示例8（设置图片拖拽震动）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，示例8通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#draginteractionoptions12",
        children: "enableHapticFeedback"
      }), "实现图片拖拽的震动效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct DragPreviewDemo {\n  @Builder\n  MenuBuilder() {\n    Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n      Text(\"menu item 1\")\n        .fontSize(15)\n        .width(100)\n        .height(40)\n        .textAlign(TextAlign.Center)\n        .fontColor(Color.Black)\n        .backgroundColor(Color.Pink)\n      Divider()\n        .height(5)\n      Text(\"menu item 2\")\n        .fontSize(15)\n        .width(100)\n        .height(40)\n        .textAlign(TextAlign.Center)\n        .fontColor(Color.Black)\n        .backgroundColor(Color.Pink)\n    }\n    .width(100)\n  }\n\n  build() {\n    Row() {\n      Column() {\n        // $r('app.media.app_icon')需要替换为开发者所需的图像资源文件\n        Image($r('app.media.app_icon'))\n          .width(\"30%\")\n          .draggable(true)\n          .dragPreviewOptions({},\n            { isMultiSelectionEnabled: true, defaultAnimationBeforeLifting: true, enableHapticFeedback: true })\n          .bindContextMenu(this.MenuBuilder, ResponseType.LongPress)\n          .onDragStart(() => {\n            console.info(\"Image onDragStart\")\n          })\n      }\n      .width(\"100%\")\n    }\n    .height(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9自定义预览图",
      children: "示例9（自定义预览图）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 15开始，示例9通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#previewconfiguration15",
        children: "onlyForLifting"
      }), "实现自定义预览图，仅用于浮起效果以及配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#draginteractionoptions12",
        children: "isLiftingDisabled"
      }), "实现禁用浮起效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct LiftingExampleDemo {\n  @Builder\n  dragPreviewBuilder() {\n    Column() {\n      Text(\"dragPreview builder\")\n        .width(150)\n        .height(50)\n        .fontSize(20)\n        .borderRadius(10)\n        .textAlign(TextAlign.Center)\n        .fontColor(Color.Black)\n        .backgroundColor(Color.Green)\n    }\n  }\n\n  @Builder\n  MenuBuilder() {\n    Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {\n      Text(\"menu 1\")\n        .fontSize(25)\n        .width(200)\n        .height(60)\n        .textAlign(TextAlign.Center)\n        .fontColor(Color.Black)\n        .backgroundColor(Color.Green)\n      Divider()\n        .height(5)\n      Text(\"menu 2\")\n        .fontSize(25)\n        .width(200)\n        .height(60)\n        .textAlign(TextAlign.Center)\n        .fontColor(Color.Black)\n        .backgroundColor(Color.Green)\n    }\n    .width(100)\n  }\n\n  build() {\n    Column() {\n      Column() {\n        Text(\"禁用浮起效果\")\n          .fontSize(30)\n          .height(30)\n          .backgroundColor('#FFFFFF')\n          .margin({ top: 30 })\n        // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件\n        Image($r('app.media.startIcon'))\n          .width(\"40%\")\n          .draggable(true)\n          .margin({ top: 15 })\n          .bindContextMenu(this.MenuBuilder, ResponseType.LongPress)\n          .onDragStart(() => {\n          })\n          .dragPreviewOptions({}, {\n            isLiftingDisabled: true\n          })\n          .dragPreview(this.dragPreviewBuilder, {\n            onlyForLifting: true,\n            delayCreating: true\n          })\n      }.width(\"100%\")\n\n      Column() {\n        Text(\"仅用于浮起效果\")\n          .fontSize(30)\n          .height(30)\n          .backgroundColor('#FFFFFF')\n          .margin({ top: 80 })\n        // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件\n        Image($r('app.media.startIcon'))\n          .width(\"40%\")\n          .draggable(true)\n          .margin({ top: 15 })\n          .onDragStart(() => {\n          })\n          .dragPreviewOptions({}, {\n            isLiftingDisabled: false\n          })\n          .dragPreview(this.dragPreviewBuilder, {\n            onlyForLifting: true,\n            delayCreating: true\n          })\n      }.width(\"100%\")\n    }.height(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义预览图用于浮起效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(434644)/* ["default"] */.A) + "",
        width: "345",
        height: "542"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义预览图禁用浮起效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(520180)/* ["default"] */.A) + "",
        width: "342",
        height: "520"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10以拖拽预览图初始尺寸计算跟手点位置",
      children: "示例10（以拖拽预览图初始尺寸计算跟手点位置）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 19开始，示例10通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#dragpreviewmode11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "DragPreviewMode"
      }), "为ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW实现根据拖拽预览图的初始尺寸来计算拖拽过程中跟手点位置。当设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#dragpreviewmode11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "DragPreviewMode"
      }), "为ENABLE_MULTI_TILE_EFFECT时，该属性不生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  // $r('app.media.app_icon')需要替换为开发者所需的图像资源文件\n  private iconStr: ResourceStr = $r(\"app.media.app_icon\")\n\n  @Builder\n  MyPreview() {\n    // $r('app.media.image')需要替换为开发者所需的图像资源文件\n    Image($r('app.media.image'))\n      .width(100)\n      .height(100)\n  }\n\n  @Builder\n  MyMenuPreview() {\n    Column() {\n      // $r('app.media.image')需要替换为开发者所需的图像资源文件\n      Image($r('app.media.image'))\n        .width(100)\n        .height(100)\n    }\n    .backgroundColor(Color.Green)\n    .width(300)\n    .height(300)\n  }\n\n  @Builder\n  MyMenu() {\n    Menu() {\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n    }\n  }\n\n  @Builder\n  SubMenu() {\n    Menu() {\n      MenuItem({ content: \"复制\", labelInfo: \"Ctrl+C\" })\n      MenuItem({ content: \"粘贴\", labelInfo: \"Ctrl+V\" })\n    }\n  }\n\n  build() {\n    NavDestination() {\n      Scroll() {\n        Column() {\n          Text(\"no ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW\")\n          // $r('app.media.image')需要替换为开发者所需的图像资源文件\n          Image($r('app.media.image'))\n            .width(200)\n            .height(200)\n            .bindContextMenu(this.MyMenu, ResponseType.LongPress, {\n              preview: this.MyPreview\n            })\n            .dragPreview(this.MyMenuPreview)\n            .draggable(true)\n\n          Text(\"ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW\")\n          // $r('app.media.image')需要替换为开发者所需的图像资源文件\n          Image($r('app.media.image'))\n            .width(200)\n            .height(200)\n            .bindContextMenu(this.MyMenu, ResponseType.LongPress, {\n              preview: this.MyPreview\n            })\n            .dragPreview(this.MyMenuPreview)\n            .draggable(true)\n            .dragPreviewOptions({\n              mode: [DragPreviewMode.ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW]\n            })\n        }.width('100%')\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(113616)/* ["default"] */.A) + "",
        width: "356",
        height: "633"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例11长按浮起预览图与拖拽预览图过渡动效",
      children: "示例11（长按浮起预览图与拖拽预览图过渡动效）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 19开始，示例11通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#draggingsizechangeeffect19%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "DraggingSizeChangeEffect"
      }), "实现不同拖拽过渡效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  // $r('app.media.app_icon')需要替换为开发者所需的图像资源文件\n  private iconStr: ResourceStr = $r(\"app.media.app_icon\")\n\n  @Builder\n  MyPreview() {\n    // $r('app.media.image')需要替换为开发者所需的图像资源文件\n    Image($r('app.media.image'))\n      .width(200)\n      .height(200)\n  }\n\n  @Builder\n  MyMenuPreviewSame() {\n    Column() {\n      // $r('app.media.image')需要替换为开发者所需的图像资源文件\n      Image($r('app.media.image'))\n        .width(300)\n        .height(300)\n    }\n  }\n\n  @Builder\n  MyMenuPreview() {\n    Column() {\n      // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件\n      Image($r('app.media.startIcon'))\n        .width(300)\n        .height(300)\n    }\n  }\n\n  @Builder\n  MyMenu() {\n    Menu() {\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n      MenuItem({ startIcon: this.iconStr, content: \"菜单选项\" })\n    }\n  }\n\n  @Builder\n  SubMenu() {\n    Menu() {\n      MenuItem({ content: \"复制\", labelInfo: \"Ctrl+C\" })\n      MenuItem({ content: \"粘贴\", labelInfo: \"Ctrl+V\" })\n    }\n  }\n\n  build() {\n    Column() {\n      Text(\"sizeChangeEffect: SIZE_TRANSITION，长按弹出菜单，拖拽移动后菜单预览图过渡到预览图，有缩放无叠加效果\")\n        .margin({ top: 10 })\n      // $r('app.media.image')需要替换为开发者所需的图像资源文件\n      Image($r('app.media.image'))\n        .width(200)\n        .height(200)\n        .bindContextMenu(this.MyMenu, ResponseType.LongPress, {\n          preview: this.MyMenuPreviewSame\n        })\n        .dragPreview(this.MyPreview)\n        .dragPreviewOptions({\n          sizeChangeEffect: DraggingSizeChangeEffect.SIZE_TRANSITION\n        })\n        .draggable(true)\n\n      Text(\"sizeChangeEffect: SIZE_CONTENT_TRANSITION，长按弹出菜单，拖拽移动后菜单预览图和拖拽预览图两层叠加过渡\")\n        .margin({ top: 10 })\n      // $r('app.media.image')需要替换为开发者所需的图像资源文件\n      Image($r('app.media.image'))\n        .width(200)\n        .height(200)\n        .bindContextMenu(this.MyMenu, ResponseType.LongPress, {\n          preview: this.MyMenuPreview\n        })\n        .dragPreview(this.MyPreview)\n        .dragPreviewOptions({\n          sizeChangeEffect: DraggingSizeChangeEffect.SIZE_CONTENT_TRANSITION\n        })\n        .draggable(true)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(617750)/* ["default"] */.A) + "",
        width: "430",
        height: "754"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例12设置自定义组件落入",
      children: "示例12（设置自定义组件落入）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，示例12通过组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragstart",
        children: "onDragStart"
      }), "接口传递其类型，并在目标组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#allowdrop",
        children: "allowDrop"
      }), "属性中设置允许该类型落入，即可实现自定义组件的拖拽落入功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { unifiedDataChannel } from '@kit.ArkData';\n\n@Entry\n@Component\nstruct CustomExample {\n  // 用于存储已放置的组件信息\n  @State droppedItems: Array<string> = []\n\n  build() {\n    Column() {\n      // 标题\n      Text('自定义组件拖拽落入')\n        .fontSize(25)\n        .fontWeight(FontWeight.Bold)\n        .margin(10)\n\n      // 拖拽区域和放置区域的容器\n      Row() {\n        // 左侧 - 拖拽起始区域\n        Column() {\n          Text('拖拽源区域')\n            .fontSize(18)\n            .fontWeight(FontWeight.Medium)\n            .margin(10)\n\n          // 自定义组件 - 可拖拽\n          CustomCard({ title: '自定义卡片', color: Color.Blue })\n            .draggable(true)\n            .onDragStart((event: DragEvent) => {\n              // 构造符合UnifiedData类型的数据\n              let customCardData: Record<string, string> = {\n                'uniformDataType': 'custom.card',\n                'value': '自定义卡片'\n              }\n              let unifiedRecord = new unifiedDataChannel.UnifiedRecord('custom.card', customCardData);\n              let unifiedData = new unifiedDataChannel.UnifiedData(unifiedRecord);\n              event.setData(unifiedData);\n            })\n        }\n        .backgroundColor(Color.White)\n        .border({ color: '#ff0e0303', width: 1 })\n        .width('40%')\n        .height(300)\n\n        // 右侧 - 放置区域\n        Column() {\n          Text('放置区域')\n            .fontSize(18)\n            .fontWeight(FontWeight.Medium)\n            .margin(10)\n\n          // 放置区域内容\n          if (this.droppedItems.length === 0) {\n            Text('将组件拖到此处')\n              .fontSize(16)\n              .opacity(0.6)\n          } else {\n            // 显示已放置的组件\n            ForEach(this.droppedItems, (item: string) => {\n              CustomCard({ title: item, color: Color.Blue })\n            }, (item: string) => item)\n          }\n        }\n        .backgroundColor(Color.White)\n        .border({ color: '#ff0e0303', width: 1 })\n        .width('40%')\n        .height(300)\n        // 允许放置的类型 - 字符串数组形式\n        .allowDrop(['custom.card'])\n        .onDrop((event: DragEvent) => {\n          console.info('setData onDrop success');\n          let data = event.getData()\n          let arr: Array<unifiedDataChannel.UnifiedRecord> = data.getRecords();\n          if (arr.length > 0) {\n            if (arr[0].getTypes()[0] === 'custom.card') {\n              let customCardData = arr[0].getValue() as Record<string, string>;\n              this.droppedItems.push(customCardData.value)\n            }\n          }\n        })\n      }\n      .justifyContent(FlexAlign.SpaceAround)\n      .width('100%')\n      .height('70%')\n\n      // 操作说明\n      Text('操作说明：长按左侧卡片并拖拽到右侧区域')\n        .fontSize(14)\n        .opacity(0.7)\n        .margin(10)\n    }\n    .width('100%')\n    .height('65%')\n    .backgroundColor('#f8f9fa')\n  }\n}\n\n// 自定义卡片组件\n@Component\nstruct CustomCard {\n  title: string = '默认标题'\n  color: Color = Color.Gray\n\n  build() {\n    Column() {\n      Text(this.title)\n        .fontSize(16)\n        .fontColor(Color.White)\n        .fontWeight(FontWeight.Medium)\n        .margin(5)\n\n      Text('这是一个自定义组件')\n        .fontColor(Color.White)\n        .fontSize(14)\n        .opacity(0.7)\n    }\n    .backgroundColor(this.color)\n    .borderRadius(12)\n    .width(120)\n    .height(100)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(846444)/* ["default"] */.A) + "",
        width: "492",
        height: "471"
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
22518(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479539-27af70b2c426214423278c66ae73d5c0.gif");

},
396149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
743532(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799890-31c1eb2b2df21695c7957a337c15df38.gif");

},
620809(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
238885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959536-70102235d09f2ea00c63979600405c84.gif");

},
288117(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
113616(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479541-b7be8519317c8f3cf015cf55bc095be5.gif");

},
78709(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439583-6cdf4a95d03e8a31d8a50cf053ddf9c5.gif");

},
858630(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799888-8fd41b0157b31d5abb3f4e373eebe1e0.gif");

},
434644(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439585-3ae7c0edb8525ae322dadb3b18674150.gif");

},
617750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799892-b3691e776eed23855f0917c28ea6eb0c.gif");

},
520180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959540-24a01d235e2f7ead3a37d2c053b4fec4.gif");

},
846444(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439587-0f3aca0956f7365de027d0332f551178.gif");

},
127458(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
487161(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959538-eddfaafc43225551c25ec89e24a64928.gif");

},
965225(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479537-308d071f4f25b58187cb1dc55917d93c.gif");

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