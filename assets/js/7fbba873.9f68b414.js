"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["33622"], {
149536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_buttons_and_selections_ts_container_ui_picker_component_ts_container_ui_picker_component_md_7fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-buttons-and-selections-ts-container-ui-picker-component-ts-container-ui-picker-component-md-7fb.json
var site_docs_ref_arkui_api_arkui_declarative_comp_buttons_and_selections_ts_container_ui_picker_component_ts_container_ui_picker_component_md_7fb_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/buttons-and-selections/ts-container-ui-picker-component/ts-container-ui-picker-component","title":"UIPickerComponent","description":"UIPickerComponent容器是用于实现用户选择操作的组件。它支持从一组有限的选项中让用户进行单选，可应用于时间选择、日期选择、地区选择、状态选择等多种场景。UIPickerComponent容器的显示效果为立体滚轮样式，支持选项按需定制，包括文本类型、图片类型和图文组合类型。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-container-ui-picker-component/ts-container-ui-picker-component.md","sourceDirName":"arkui-api/arkui-declarative-comp/buttons-and-selections/ts-container-ui-picker-component","slug":"/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-container-ui-picker-component/ts-container-ui-picker-component","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-container-ui-picker-component/ts-container-ui-picker-component","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"UIPickerComponent","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-ui-picker-component","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-container-ui-picker-component"},"sidebar":"ref","previous":{"title":"CheckboxGroup","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup"},"next":{"title":"CalendarPicker","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-calendarpicker/ts-basic-components-calendarpicker"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-container-ui-picker-component/ts-container-ui-picker-component.md


const frontMatter = {
	title: 'UIPickerComponent',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-ui-picker-component',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-container-ui-picker-component'
};
const contentTitle = 'UIPickerComponent';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "UIPickerComponentOptions对象说明",
  "id": "uipickercomponentoptions对象说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "canLoop",
  "id": "canloop",
  "level": 3
}, {
  "value": "enableHapticFeedback",
  "id": "enablehapticfeedback",
  "level": 3
}, {
  "value": "selectionIndicator",
  "id": "selectionindicator",
  "level": 3
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onChange",
  "id": "onchange",
  "level": 3
}, {
  "value": "onScrollStop",
  "id": "onscrollstop",
  "level": 3
}, {
  "value": "PickerIndicatorStyle对象说明",
  "id": "pickerindicatorstyle对象说明",
  "level": 2
}, {
  "value": "PickerIndicatorType枚举说明",
  "id": "pickerindicatortype枚举说明",
  "level": 2
}, {
  "value": "OnUIPickerComponentCallback",
  "id": "onuipickercomponentcallback",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（切换循环滚动和开关触控反馈）",
  "id": "示例1切换循环滚动和开关触控反馈",
  "level": 3
}, {
  "value": "示例2（设置事件回调）",
  "id": "示例2设置事件回调",
  "level": 3
}, {
  "value": "示例3（设置选中项索引值）",
  "id": "示例3设置选中项索引值",
  "level": 3
}, {
  "value": "示例4（设置选中项指示器）",
  "id": "示例4设置选中项指示器",
  "level": 3
}, {
  "value": "示例5（自定义月份选择器）",
  "id": "示例5自定义月份选择器",
  "level": 3
}, {
  "value": "示例6（自定义地区选择器）",
  "id": "示例6自定义地区选择器",
  "level": 3
}, {
  "value": "示例7（自定义选项类型）",
  "id": "示例7自定义选项类型",
  "level": 3
}, {
  "value": "示例8（自定义时间选择器）",
  "id": "示例8自定义时间选择器",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    boolean: "boolean",
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
        id: "uipickercomponent",
        children: "UIPickerComponent"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UIPickerComponent容器是用于实现用户选择操作的组件。它支持从一组有限的选项中让用户进行单选，可应用于时间选择、日期选择、地区选择、状态选择等多种场景。UIPickerComponent容器的显示效果为立体滚轮样式，支持选项按需定制，包括文本类型、图片类型和图文组合类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(228583)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 22开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UIPickerComponent容器的选项行高固定为40vp，最多可显示7个选项。由于显示效果为立体滚轮样式，因此除选中项外的其他选项会进行不同角度的旋转，实际的可视高度会小于40vp。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UIPickerComponent容器的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#height",
          children: "height"
        }), "建议设置为200vp。当设置的高度大于等于该建议值时，可完全显示7个选项；小于该建议值时，显示范围会从上下边缘向中间裁剪，可显示的选项数量也会相应减少，始终保持选中项垂直居中。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当UIPickerComponent容器未设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#width",
          children: "width"
        }), "时，取当前视图中可见子组件的最大宽度作为容器宽度。建议为UIPickerComponent容器设置宽度，或为每个子组件设置相同宽度，以避免滑动过程中容器宽度动态发生变化，影响显示效果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UIPickerComponent容器的子组件的对齐方式固定为居中对齐，不支持通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#align",
          children: "align"
        }), "属性改变子组件的对齐方式。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UIPickerComponent容器当前不支持智能手表设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持多个子组件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持子组件类型：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
          children: "Text"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image",
          children: "Image"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
          children: "Row"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph",
          children: "SymbolGlyph"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持渲染控制类型：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse",
          children: "if/else"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
          children: "ForEach"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(962800)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者在使用Row容器作为子组件时，Row容器中仅支持包含Text、Image、SymbolGlyph基础组件，包含其他容器组件可能会影响显示效果或滑动功能异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "统计子组件的个数时，不包含Row容器内的子组件，Row容器及其子组件共同视为1个子组件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["子组件为Text、Image、SymbolGlyph时，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#height",
          children: "height"
        }), "属性不生效，固定为40vp。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["子组件为Row容器时，Row容器的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#height",
          children: "height"
        }), "属性不生效，固定为40vp，Row容器内的子组件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#height",
          children: "height"
        }), "属性能正常生效，最终显示效果由Row容器决定。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["图文组合类型选项需要使用Row容器包含图片和文本组件。使用图文组合类型选项时，建议将图片的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#height",
          children: "height"
        }), "设置为40vp及以下，避免图片较大时被裁剪。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UIPickerComponent容器内所有文本组件（包括Row容器内的文本组件）的fontSize属性默认为20fp。用户设置将覆盖默认值，设置异常值时以文本组件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#fontsize",
          children: "fontSize"
        }), "处理的结果为准。建议统一设置或不设置fontSize以保证良好的显示效果。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UIPickerComponent(options?: UIPickerComponentOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建UIPickerComponent容器，其选中项由options参数中的selectedIndex属性值决定。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#uipickercomponentoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "UIPickerComponentOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置UIPickerComponent容器的参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uipickercomponentoptions对象说明",
      children: "UIPickerComponentOptions对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UIPickerComponent容器的参数说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
            children: "selectedIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选中项的索引值。  取值范围：[0, 子组件的个数-1]内的整数。不在取值范围内时，使用默认值；设置小数时，使用向下取整后的整数。  默认值：0  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  统计子组件的个数时，不包含Row容器内的子组件，Row容器及其子组件共同视为1个子组件。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canloop",
      children: "canLoop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "canLoop(isLoop: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置选项列是否可循环滚动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "isLoop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否可循环滚动。  - true：可循环滚动。  - false：不可循环滚动。  默认值：true  当isLoop的值为undefined时，使用默认值。  如果子组件的个数小于8个，无论isLoop设置为true还是false，都不会循环滚动。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablehapticfeedback",
      children: "enableHapticFeedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableHapticFeedback(enable: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否开启触控反馈。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启触控反馈时，需要在工程的src/main/module.json5文件的\"module\"内配置requestPermissions字段开启振动权限，配置如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\": [\n   {\n      \"name\": \"ohos.permission.VIBRATE\",\n   }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "enable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否开启触控反馈。  - true：开启触控反馈。  - false：不开启触控反馈。  默认值：true  当enable的值为undefined时，使用默认值。  开启后，是否存在触控反馈取决于系统硬件支持情况。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectionindicator",
      children: "selectionIndicator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectionIndicator(style: Optional<PickerIndicatorStyle>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置选中项指示器的样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-container-ui-picker-component/ts-container-ui-picker-component#pickerindicatorstyle%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "PickerIndicatorStyle"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中项指示器的样式。  默认值：  {  type: PickerIndicatorType.BACKGROUND,  borderRadius: {  value:12,  unit:LengthUnit.vp  },  backgroundColor: 'sys.color.comp_background_tertiary'  }  当style的值为undefined时，使用默认值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "外，还支持以下事件："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onchange",
      children: "onChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onChange(callback: Optional<OnUIPickerComponentCallback>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动选择器选项时，若选中项发生变化，触发该事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(491367)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果某个选项有一半以上的区域进入选中项区域内，则该选项成为选中项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["选中项区域可通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#selectionindicator",
        children: "selectionIndicator"
      }), "进行标识。如果设置选中项指示器为背景，则背景区域即为选中项区域。如果设置选中项指示器为分割线，则上下分割线的中心线内的区域为选中项区域。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#onuipickercomponentcallback",
              children: "OnUIPickerComponentCallback"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当选中项发生变化时触发的回调函数。  当callback的值为undefined时，不使用回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onscrollstop",
      children: "onScrollStop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScrollStop(callback: Optional<OnUIPickerComponentCallback>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择器滑动停止时，触发该事件。选择器滑动停止指某次行为触发的滑动动画完全结束。如果某次滑动动画还未结束时又触发了新的滑动动画，则不属于滑动停止。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#onuipickercomponentcallback",
              children: "OnUIPickerComponentCallback"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当选择器滑动停止时触发的回调函数。  当callback的值为undefined时，不使用回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pickerindicatorstyle对象说明",
      children: "PickerIndicatorStyle对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选中项指示器样式的参数说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pickerindicatortype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "PickerIndicatorType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中项指示器的类型。  默认值：PickerIndicatorType.BACKGROUND  当type的值为小数时，使用向下取整后的整数；当type的值不在PickerIndicatorType枚举范围内时，使用默认值。"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分割线的线宽。  默认值：2.0px  单位：与LengthMetrics一致。  取值范围：[0, 选中项高度的一半（即20vp）]。strokeWidth小于0或大于选中项高度的一半时使用默认值。不支持“百分比”类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 当type为PickerIndicatorType.DIVIDER时生效。  2. 通过LengthMetrics.resource方式设置时，使用非长度属性的值会按照0vp处理。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dividerColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分割线的颜色。  默认值：'sys.color.comp_divider'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当type为PickerIndicatorType.DIVIDER时生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startMargin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分割线与UIPickerComponent容器侧边起始端的距离。  默认值：0  单位：与LengthMetrics一致。  取值范围：startMargin与endMargin之和不得超过UIPickerComponent容器的宽度。设置小于0或startMargin与endMargin之和超过UIPickerComponent容器的宽度时，使用默认值。不支持“百分比”类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当type为PickerIndicatorType.DIVIDER时生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "endMargin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分割线与UIPickerComponent容器侧边结束端的距离。  默认值：0  单位：与LengthMetrics一致。  取值范围：startMargin与endMargin之和不得超过UIPickerComponent容器的宽度。设置小于0或startMargin与endMargin之和超过UIPickerComponent容器的宽度时，使用默认值。不支持“百分比”类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当type为PickerIndicatorType.DIVIDER时生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选中项背景的颜色。  默认值：'sys.color.comp_background_tertiary'  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当type为PickerIndicatorType.BACKGROUND时生效。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#borderradiuses9",
              children: "BorderRadiuses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedborderradiuses12",
              children: "LocalizedBorderRadiuses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pickerindicatortype枚举说明",
      children: "PickerIndicatorType枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置选中项指示器的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该类型支持在元服务中使用。"]
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
            children: "BACKGROUND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过给选中项添加背景，标识选中项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DIVIDER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过在选中项的上下边缘添加分割线，标识选中项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onuipickercomponentcallback",
      children: "OnUIPickerComponentCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnUIPickerComponentCallback = (selectedIndex: number) => void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onchange",
        children: "onChange"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onscrollstop",
        children: "onScrollStop"
      }), "事件的回调类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "selectedIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前选中项的索引值。  取值范围：[0, 子组件的个数-1]内的整数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1切换循环滚动和开关触控反馈",
      children: "示例1（切换循环滚动和开关触控反馈）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，该示例通过点击按钮的方式实现切换UIPickerComponent容器的循环滚动和开启/关闭触控反馈功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct UIPickerComponentAttrsExample {\n  private dataArray: string[] = [];\n  @State loop: boolean = true;\n  @State hapticFeedback: boolean = true;\n\n  aboutToAppear(): void {\n    // 构造选项数据\n    for (let i = 1; i <= 10; i++) {\n      this.dataArray.push(i.toString())\n    }\n  }\n\n  build() {\n    Column() {\n      Row() {\n        UIPickerComponent() {\n          ForEach(this.dataArray, (item: string) => {\n            Text(item)\n          })\n        }\n        // 配置选项列表循环\n        .canLoop(this.loop)\n        // 配置触控音振反馈\n        .enableHapticFeedback(this.hapticFeedback)\n        .width('70%')\n      }\n\n      Column() {\n        Row() {\n          Toggle({ type: ToggleType.Switch, isOn: true })\n            .onChange((isOn: boolean) => {\n              this.loop = isOn;\n            })\n          Text('canLoop').fontSize(20)\n        }\n        .width('70%')\n\n        Row() {\n          Toggle({ type: ToggleType.Switch, isOn: true })\n            .onChange((isOn: boolean) => {\n              this.hapticFeedback = isOn;\n            })\n          Text('enableHapticFeedback').fontSize(20)\n        }\n        .width('70%')\n      }\n\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(944121)/* ["default"] */.A) + "",
        width: "640",
        height: "438"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置事件回调",
      children: "示例2（设置事件回调）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，该示例基于状态选择，实现了UIPickerComponent容器的onChange和onScrollStop事件回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct UIPickerComponentEventsExample {\n  // 构造状态选项数据\n  private dataArray: string[] = ['待办', '进行中', '已完成'];\n  @State onChangeDesc: string = '';\n  @State onScrollStopDesc: string = '';\n\n  build() {\n    Column() {\n      Row() {\n        UIPickerComponent() {\n          ForEach(this.dataArray, (item: string) => {\n            Text(item)\n          })\n        }\n        // 配置onChange事件回调\n        .onChange((selectedIndex: number) => {\n          this.onChangeDesc = 'on change: ' + selectedIndex\n        })\n        // 配置onScrollStop事件回调\n        .onScrollStop((selectedIndex: number) => {\n          this.onScrollStopDesc = 'on scroll stop: ' + selectedIndex\n        })\n        .width('70%')\n      }\n\n      Column() {\n        Text(this.onChangeDesc)\n        Text(this.onScrollStopDesc)\n      }\n\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(838462)/* ["default"] */.A) + "",
        width: "429",
        height: "267"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置选中项索引值",
      children: "示例3（设置选中项索引值）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，该示例实现了设置UIPickerComponent容器的选中项索引值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct UIPickerComponentSelectedIndexExample {\n  private dataArray: string[] = [];\n  @State selectedIndex: number = 0;\n\n  aboutToAppear(): void {\n    // 构造选项数据\n    for (let i = 1; i <= 10; i++) {\n      this.dataArray.push(i.toString())\n    }\n  }\n\n  build() {\n    Column() {\n      Row() {\n        UIPickerComponent({\n          // 配置选中项索引值\n          selectedIndex: this.selectedIndex\n        }) {\n          ForEach(this.dataArray, (item: string) => {\n            Text(item)\n          })\n        }\n        .onChange((selectedIndex: number) => {\n          this.selectedIndex = selectedIndex\n        })\n        .onScrollStop((selectedIndex: number) => {\n          this.selectedIndex = selectedIndex\n        })\n        .width('70%')\n      }\n\n      Column() {\n        Text('selectedIndex: ' + this.selectedIndex)\n      }\n\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(410561)/* ["default"] */.A) + "",
        width: "638",
        height: "363"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置选中项指示器",
      children: "示例4（设置选中项指示器）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，该示例实现了设置UIPickerComponent容器的选中项指示器。具体包括：在使用背景指示器时，设置背景颜色、背景圆角；在使用分割线指示器时，设置分割线颜色、分割线宽度、起始侧边距、结束侧边距。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct UIPickerComponentIndicatorExample {\n  private dataArray: string[] = [];\n  @State indicatorType: PickerIndicatorType | undefined = undefined;\n  @State bgColor: Color | undefined = undefined;\n  @State dividerColor: Color | undefined = undefined;\n  @State strokeWidth: LengthMetrics = LengthMetrics.px(2);\n  @State startMargin: LengthMetrics = LengthMetrics.px(2);\n  @State endMargin: LengthMetrics = LengthMetrics.px(2);\n  @State selectIndicator: PickerIndicatorStyle | undefined = undefined;\n  @State bgBorderRadius: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses | undefined = undefined\n  bgBorderRadiuses1: LengthMetrics = LengthMetrics.vp(10)\n  bgBorderRadiuses2: BorderRadiuses = {\n    topLeft: 10,\n    bottomLeft: 0,\n    topRight: 10,\n    bottomRight: 0,\n  }\n  bgBorderRadiuses3: LocalizedBorderRadiuses = {\n    topStart: LengthMetrics.vp(0),\n    bottomStart: LengthMetrics.vp(10),\n    topEnd: LengthMetrics.vp(0),\n    bottomEnd: LengthMetrics.vp(10)\n  }\n  private controller: TabsController = new TabsController();\n  @State curTabIndex: number = 0;\n\n  @Builder\n  dividerBuilder() {\n    Column() {\n      Row() {\n        Text('分割线线宽')\n      }.margin(2)\n\n      Row() {\n        Button('0')\n          .onClick(() => {\n            this.strokeWidth = LengthMetrics.px(0)\n          })\n          .fontSize(12)\n          .height(30)\n          .width(100)\n          .margin(2)\n        Button('10px')\n          .onClick(() => {\n            this.strokeWidth = LengthMetrics.px(10)\n          })\n          .fontSize(12)\n          .height(30)\n          .width(100)\n          .margin(2)\n        Button('10vp')\n          .onClick(() => {\n            this.strokeWidth = LengthMetrics.vp(10)\n          })\n          .fontSize(12)\n          .height(30)\n          .width(100)\n          .margin(2)\n      }\n\n      Row() {\n        Text('起始侧边距')\n      }.margin(2)\n\n      Row() {\n        Button('0')\n          .onClick(() => {\n            this.startMargin = LengthMetrics.px(0)\n          })\n          .fontSize(12)\n          .height(30)\n          .width(100)\n          .margin(2)\n        Button('10px')\n          .onClick(() => {\n            this.startMargin = LengthMetrics.px(10)\n          })\n          .fontSize(12)\n          .height(30)\n          .width(100)\n          .margin(2)\n        Button('10vp')\n          .onClick(() => {\n            this.startMargin = LengthMetrics.vp(10)\n          })\n          .fontSize(12)\n          .height(30)\n          .width(100)\n          .margin(2)\n      }\n\n      Row() {\n        Text('结束侧边距')\n      }.margin(2)\n\n      Row() {\n        Button('0')\n          .onClick(() => {\n            this.endMargin = LengthMetrics.px(0)\n          })\n          .fontSize(12)\n          .height(30)\n          .width(100)\n          .margin(2)\n        Button('10px')\n          .onClick(() => {\n            this.endMargin = LengthMetrics.px(10)\n          })\n          .fontSize(12)\n          .height(30)\n          .width(100)\n          .margin(2)\n        Button('10vp')\n          .onClick(() => {\n            this.endMargin = LengthMetrics.vp(10)\n          })\n          .fontSize(12)\n          .height(30)\n          .width(100)\n          .margin(2)\n      }\n\n      Row() {\n        Text('分割线颜色')\n      }\n\n      Row() {\n        Button('蓝色')\n          .onClick(() => {\n            this.dividerColor = Color.Blue\n          })\n          .fontSize(12)\n          .height(30)\n          .width(73)\n          .margin(2)\n        Button('黑色')\n          .onClick(() => {\n            this.dividerColor = Color.Black\n          })\n          .fontSize(12)\n          .height(30)\n          .width(73)\n          .margin(2)\n      }\n\n      Row() {\n        Button('不使用自定义设置')\n          .onClick(() => {\n            this.dividerColor = undefined\n          })\n          .fontSize(12)\n          .height(30)\n          .width(150)\n          .margin(2)\n      }\n    }\n  }\n\n  @Builder\n  backgroundBuilder() {\n    Column() {\n      Row() {\n        Text('圆角设置')\n      }.margin(2)\n\n      Column() {\n        Button('使用LengthMetrics，实现统一圆角')\n          .onClick(() => {\n            this.bgBorderRadius = this.bgBorderRadiuses1\n          })\n          .fontSize(12)\n          .height(30)\n          .width(300)\n          .margin(2)\n        Button('使用BorderRadiuses，实现上圆下方')\n          .onClick(() => {\n            this.bgBorderRadius = this.bgBorderRadiuses2\n          })\n          .fontSize(12)\n          .height(30)\n          .width(300)\n          .margin(2)\n        Button('使用LocalizedBorderRadiuses，实现上方下圆')\n          .onClick(() => {\n            this.bgBorderRadius = this.bgBorderRadiuses3\n          })\n          .fontSize(12)\n          .height(30)\n          .width(300)\n          .margin(2)\n      }.margin(2)\n\n      Row() {\n        Text('背景色设置')\n      }.margin(2)\n\n      Row() {\n        Button('蓝色')\n          .onClick(() => {\n            this.bgColor = Color.Blue\n          })\n          .fontSize(12)\n          .height(30)\n          .width(73)\n          .margin(2)\n        Button('绿色')\n          .onClick(() => {\n            this.bgColor = Color.Green\n          })\n          .fontSize(12)\n          .height(30)\n          .width(73)\n          .margin(2)\n      }\n\n      Row() {\n        Button('不使用自定义设置')\n          .onClick(() => {\n            this.bgColor = undefined\n          })\n          .fontSize(12)\n          .height(30)\n          .width(150)\n          .margin(2)\n      }\n    }\n  }\n\n  aboutToAppear(): void {\n    // 构造选项数据\n    for (let i = 1; i <= 10; i++) {\n      this.dataArray.push(i.toString())\n    }\n  }\n\n  build() {\n    Column() {\n      Row() {\n        UIPickerComponent() {\n          ForEach(this.dataArray, (item: string) => {\n            Text(item)\n          })\n        }\n        // 配置选中项指示器\n        .selectionIndicator({\n          type: this.indicatorType,\n          strokeWidth: this.strokeWidth,\n          dividerColor: this.dividerColor,\n          startMargin: this.startMargin,\n          endMargin: this.endMargin,\n          backgroundColor: this.bgColor,\n          borderRadius: this.bgBorderRadius\n        })\n        .width('70%')\n      }\n      Tabs({ barPosition: BarPosition.Start, index: this.curTabIndex, controller: this.controller }) {\n        TabContent() {\n          this.backgroundBuilder()\n        }.tabBar('背景指示器')\n\n        TabContent() {\n          this.dividerBuilder()\n        }.tabBar('分割线指示器')\n      }\n      .vertical(false)\n      .barMode(BarMode.Fixed)\n      .barWidth(360)\n      .barHeight(56)\n      .animationDuration(400)\n      .onChange((index: number) => {\n        this.curTabIndex = index\n        if (this.curTabIndex == 1) {\n          this.indicatorType = PickerIndicatorType.DIVIDER\n        } else {\n          this.indicatorType = PickerIndicatorType.BACKGROUND\n        }\n      })\n      .height(LayoutPolicy.wrapContent)\n      .divider({ strokeWidth: 2 })\n      .margin({ top: 20 })\n      .backgroundColor('#F1F3F5')\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(291350)/* ["default"] */.A) + "",
        width: "428",
        height: "591"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5自定义月份选择器",
      children: "示例5（自定义月份选择器）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，该示例使用UIPickerComponent容器嵌套文本子组件的方式实现月份选择器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct MonthUIPickerComponentExample {\n  private fontSize: number | string | Resource = '20vp';\n  private monthArray: string[] = [];\n\n  aboutToAppear(): void {\n    // 构造选项数据\n    for (let i = 1; i <= 12; i++) {\n      this.monthArray.push(i + '月')\n    }\n  }\n\n  build() {\n    Column() {\n      UIPickerComponent() {\n        ForEach(this.monthArray, (item: string) => {\n          Text(item)\n            .fontSize(this.fontSize)\n            .textAlign(TextAlign.Center)\n            .fontColor(Color.Black)\n        })\n      }\n      .width('70%')\n      // 配置选项列表循环\n      .canLoop(true)\n      // 配置触控音振反馈为关闭\n      .enableHapticFeedback(false)\n      // 配置选中项的指示器标识为分割线\n      .selectionIndicator({ type: PickerIndicatorType.DIVIDER })\n      // 订阅选中项改变事件\n      .onChange((idx: number) => {\n        console.info('UIPickerComponent item changed: ' + this.monthArray[idx])\n      })\n      // 订阅滑动停止事件\n      .onScrollStop((idx: number) => {\n        console.info('UIPickerComponent scroll stopped: ' + this.monthArray[idx])\n      })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(358605)/* ["default"] */.A) + "",
        width: "635",
        height: "320"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6自定义地区选择器",
      children: "示例6（自定义地区选择器）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，该示例使用多列UIPickerComponent容器组合实现地区选择器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\ntype RegionDict = Record<string, Record<string, Array<string>>>;\n// 定义地区字典\nlet regionData: RegionDict = {\n  '辽宁省': {\n    '沈阳市': ['沈河区', '和平区', '浑南区'],\n    '大连市': ['中山区', '金州区', '长海县']\n  },\n  '吉林省': {\n    '长春市': ['南关区', '宽城区', '朝阳区'],\n    '四平市': ['铁西区', '铁东区', '梨树县']\n  },\n  '黑龙江省': {\n    '哈尔滨市': ['道里区', '道外区', '南岗区'],\n    '牡丹江市': ['东安区', '西安区', '爱民区']\n  },\n};\n\n@Entry\n@Component\nstruct RegionUIPickerComponentExample {\n  @State provinceIndex: number = 0;\n  @State cityIndex: number = 0;\n  @State countyIndex: number = 0;\n  @State provinces: Array<string> = [];\n  @State cities: Array<string> = [];\n  @State counties: Array<string> = [];\n\n  aboutToAppear(): void {\n    this.provinces = Object.keys(regionData);\n    this.flushCityColumn()\n  }\n\n  flushCityColumn() {\n    let currentProvince = this.provinces[this.provinceIndex]\n    this.cities = Object.keys(regionData[currentProvince])\n    this.cityIndex = 0\n    this.flushCountyColumn()\n  }\n\n  flushCountyColumn() {\n    let currentProvince = this.provinces[this.provinceIndex]\n    let currentCity = this.cities[this.cityIndex]\n    this.counties = regionData[currentProvince][currentCity]\n    this.countyIndex = 0\n  }\n\n  build() {\n    Column() {\n      Row() {\n        // 省级\n        UIPickerComponent({\n          selectedIndex: this.provinceIndex\n        }) {\n          ForEach(this.provinces, (province: string) => {\n            Text(province)\n          })\n        }\n        .onChange((selectedIndex: number) => {\n          this.provinceIndex = selectedIndex\n          this.flushCityColumn()\n\n        })\n        .onScrollStop((selectedIndex: number) => {\n          this.provinceIndex = selectedIndex\n        })\n        .selectionIndicator({ type: PickerIndicatorType.DIVIDER })\n        .width('25%')\n\n        // 地级\n        UIPickerComponent({\n          selectedIndex: this.cityIndex\n        }) {\n          ForEach(this.cities, (city: string) => {\n            Text(city)\n          })\n        }\n        .onChange((selectedIndex: number) => {\n          this.cityIndex = selectedIndex\n          this.flushCountyColumn()\n        })\n        .onScrollStop((selectedIndex: number) => {\n          this.cityIndex = selectedIndex\n        })\n        .selectionIndicator({ type: PickerIndicatorType.DIVIDER })\n        .width('25%')\n\n        // 县级\n        UIPickerComponent({\n          selectedIndex: this.countyIndex\n        }) {\n          ForEach(this.counties, (county: string) => {\n            Text(county)\n          })\n        }\n        .onChange((selectedIndex: number) => {\n          this.countyIndex = selectedIndex\n        })\n        .onScrollStop((selectedIndex: number) => {\n          this.countyIndex = selectedIndex\n        })\n        .selectionIndicator({ type: PickerIndicatorType.DIVIDER })\n        .width('25%')\n      }\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(443068)/* ["default"] */.A) + "",
        width: "429",
        height: "194"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7自定义选项类型",
      children: "示例7（自定义选项类型）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，该示例使用UIPickerComponent容器实现不同选项类型的选择器，包含文本选择器、图片选择器、图文组合选择器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct UIPickerComponentExample {\n  @State textList: string[] =\n    ['text1', 'text2', 'text3', 'text4', 'text5', 'text6', 'text7', 'text8'];\n  // 以下$r('sys.media.*')资源文件需要替换为开发者所需的图像资源文件。\n  @State imageList: Resource[] =\n    [$r('sys.media.ohos_ic_normal_white_grid_audio'), $r('sys.media.ohos_ic_normal_white_grid_calendar'),\n      $r('sys.media.ohos_ic_normal_white_grid_compress'), $r('sys.media.ohos_ic_normal_white_grid_doc'),\n      $r('sys.media.ohos_ic_normal_white_grid_flac'), $r('sys.media.ohos_ic_normal_white_grid_folder'),\n      $r('sys.media.ohos_ic_normal_white_grid_html'), $r('sys.media.ohos_ic_normal_white_grid_image')];\n  // 以下$r('sys.symbol.*')资源文件需要替换为开发者所需的图像资源文件。\n  @State symbolList: Resource[] =\n    [$r('sys.symbol.calendar_01'), $r('sys.symbol.calendar_02'), $r('sys.symbol.calendar_03'),\n      $r('sys.symbol.calendar_04'), $r('sys.symbol.calendar_05'), $r('sys.symbol.calendar_06'),\n      $r('sys.symbol.calendar_07'), $r('sys.symbol.calendar_08')];\n  private controller: TabsController = new TabsController();\n  @State curTabIndex: number = 0;\n\n  @Builder\n  ImagePicker() {\n    Column() {\n      UIPickerComponent() {\n        ForEach(this.imageList, (item: Resource) => {\n          Image(item)\n        })\n      }\n      .margin(20)\n      .width(200)\n    }\n  }\n\n  @Builder\n  TextPicker() {\n    Column() {\n      UIPickerComponent() {\n        ForEach(this.textList, (item: string) => {\n          Text(item)\n        })\n      }\n      .margin(20)\n      .width(200)\n    }\n  }\n\n  @Builder\n  HybridPicker() {\n    Column() {\n      UIPickerComponent() {\n        ForEach(this.symbolList, (item: Resource, index: number) => {\n          Row() {\n            SymbolGlyph(item)\n              .height('20vp')\n            Text(this.textList[index])\n          }\n        })\n      }\n      .margin(20)\n      .width(200)\n    }\n  }\n\n  build() {\n    Column() {\n      Tabs({ barPosition: BarPosition.Start, index: this.curTabIndex, controller: this.controller }) {\n        TabContent() {\n          this.TextPicker()\n        }.tabBar('文本选择器')\n\n        TabContent() {\n          this.ImagePicker()\n        }.tabBar('图片选择器')\n\n        TabContent() {\n          this.HybridPicker()\n        }.tabBar('图文组合选择器')\n      }\n      .vertical(true)\n      .divider({ strokeWidth: 1 })\n      .barMode(BarMode.Fixed)\n      .barWidth(140)\n      .barHeight(230)\n      .height(230)\n      .animationDuration(400)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(876462)/* ["default"] */.A) + "",
        width: "429",
        height: "252"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8自定义时间选择器",
      children: "示例8（自定义时间选择器）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，该示例实现了一个时间选择器，功能包含设置切换是否循环滚动、切换是否显示秒数、切换是否使用24小时制、切换是否显示前导0，还可按照当前系统语言显示对应语言的内容，并根据语言习惯调整各列的显示顺序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(229151)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该示例中，时间选择器的各列内容根据系统语言显示对应语言的内容，例如：英文系统显示AM/PM，中文系统显示上午/下午。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该示例中，时间选择器的各列根据系统语言调整显示顺序，例如：英文系统显示时/分/秒/AMPM，中文系统显示上下午/时/分/秒。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为实现\"上下午\"随系统语言切换，需要在工程的resource目录下添加对应语言的翻译，例如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "中文（默认）：在resource目录下创建base目录，在base目录下创建element目录，在element目录添加string.json文件（若文件已存在，请在文件中追加以下\"name\"-\"value\"键值对，请勿直接覆盖原文件）。文件内容如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"string\": [\n    {\n      \"name\": \"app_name\",\n      \"value\": \"timePicker\"\n    },\n    {\n      \"name\": \"am\",\n      \"value\": \"上午\"\n    },\n    {\n      \"name\": \"pm\",\n      \"value\": \"下午\"\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "英文：在resource目录下创建en目录，在en目录下创建element目录，在element目录添加string.json文件（若文件已存在，请在文件中追加以下\"name\"-\"value\"键值对，请勿直接覆盖原文件）。文件内容如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"string\": [\n    {\n      \"name\": \"app_name\",\n      \"value\": \"timePicker\"\n    },\n    {\n      \"name\": \"am\",\n      \"value\": \"AM\"\n    },\n    {\n      \"name\": \"pm\",\n      \"value\": \"PM\"\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "阿拉伯语：在resource目录下创建ar目录，在ar目录下创建element目录，在element目录下添加string.json文件（若文件已存在，请在文件中追加以下\"name\"-\"value\"键值对，请勿直接覆盖原文件）。文件内容如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"string\": [\n    {\n      \"name\": \"app_name\",\n      \"value\": \"timePicker\"\n    },\n    {\n      \"name\": \"am\",\n      \"value\": \"ص\"\n    },\n    {\n      \"name\": \"pm\",\n      \"value\": \"م\"\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其他语言依此类推。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI';\nimport { i18n, intl } from '@kit.LocalizationKit';\nimport { commonEventManager } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct TimeUIPickerComponentExample {\n  @State showSecond: boolean = false;\n  @State useMilitary: boolean = false;\n  @State zeroPrefix: boolean = true;\n  @State loop: boolean = true;\n  @State amPmAtLast: boolean = false\n  @State isRtl: boolean = false;\n\n  startBorderStyle: LocalizedBorderRadiuses = {\n    topStart: LengthMetrics.px(40),\n    bottomStart: LengthMetrics.px(40),\n    topEnd: LengthMetrics.px(0),\n    bottomEnd: LengthMetrics.px(0)\n  }\n  centerBorderStyle: LengthMetrics = LengthMetrics.px(0)\n  endBorderStyle: LocalizedBorderRadiuses = {\n    topStart: LengthMetrics.px(0),\n    bottomStart: LengthMetrics.px(0),\n    topEnd: LengthMetrics.px(40),\n    bottomEnd: LengthMetrics.px(40)\n  }\n  @State amPmBorder: LengthMetrics | LocalizedBorderRadiuses = this.startBorderStyle;\n  @State hourBorder: LengthMetrics | LocalizedBorderRadiuses = this.startBorderStyle;\n  @State minBorder: LengthMetrics | LocalizedBorderRadiuses = this.endBorderStyle;\n  @State secBorder: LengthMetrics | LocalizedBorderRadiuses = this.endBorderStyle;\n\n  @State amPmIndex: number = 0;\n  @State hourIndex: number = 0;\n  @State minIndex: number = 0;\n  @State secIndex: number = 0;\n\n  @State amPmArr: Array<string| undefined> = []\n  @State hourArr: Array<string> = []\n  @State minSecArr: Array<string> = []\n\n  @State currentTime: string = '';\n\n  sysLanguageChanged: boolean = false\n  zero: string = '0'\n  systemLanguage: string = i18n.System.getSystemLanguage();\n  // 使用系统当前区域ID创建NumberFormat对象\n  formatter: intl.NumberFormat = new intl.NumberFormat();\n\n  aboutToAppear(): void {\n    this.zero = this.formatter.format(0)\n    this.flushAmPmColumn()\n    this.flushHourColumn()\n    this.flushMinSecColumn()\n    this.flushCurrentTime()\n    this.flushBorderStyle()\n    let subscriber: commonEventManager.CommonEventSubscriber;\n    let subscribeInfo: commonEventManager.CommonEventSubscribeInfo = {\n      events: [commonEventManager.Support.COMMON_EVENT_LOCALE_CHANGED]\n    };\n    // 创建订阅者，监听系统语言变化\n    commonEventManager.createSubscriber(subscribeInfo)\n      .then((commonEventSubscriber: commonEventManager.CommonEventSubscriber) => {\n        console.info(\"CreateSubscriber\");\n        subscriber = commonEventSubscriber;\n        commonEventManager.subscribe(subscriber, (err, data) => {\n          if (err) {\n            console.error(`Failed to subscribe common event. error code: ${err.code}, message: ${err.message}.`);\n            return;\n          }\n          this.formatter = new intl.NumberFormat();\n          this.zero = this.formatter.format(0)\n          this.sysLanguageChanged = true\n          this.systemLanguage = i18n.System.getSystemLanguage();\n          this.flushAmPmColumn()\n          this.flushHourColumn()\n          this.flushMinSecColumn()\n          this.flushCurrentTime()\n          this.flushBorderStyle()\n        })\n      })\n      .catch((err: BusinessError) => {\n        console.error(`CreateSubscriber failed, code is ${err.code}, message is ${err.message}`);\n      });\n  }\n\n  onPageShow(): void {\n    if (this.sysLanguageChanged) {\n      this.flushAmPmColumn()\n      this.flushCurrentTime()\n      this.flushBorderStyle()\n      this.sysLanguageChanged = false\n    }\n  }\n\n  buildColumnOptions(start: number, end: number, isHour: boolean = false) : string[] {\n    let newOptions: string[] = []\n    for (let i = start; i <= end; i++) {\n      if (isHour && i == 0 && !this.useMilitary) {\n        newOptions.push(this.formatter.format(12))\n        continue\n      }\n      if (this.zeroPrefix) {\n        newOptions.push(this.formatTime(i))\n      } else {\n        newOptions.push(this.formatter.format(i))\n      }\n    }\n    return newOptions\n  }\n\n  flushAmPmColumn() {\n    // 根据语言习惯设置amPm列是否放在最后\n    if (this.systemLanguage.startsWith('en') || this.systemLanguage == 'ug') {\n      this.amPmAtLast = true\n    } else {\n      this.amPmAtLast = false\n    }\n    this.amPmArr[0] = this.getUIContext().getHostContext()?.resourceManager.getStringSync($r('app.string.am').id)\n    this.amPmArr[1] = this.getUIContext().getHostContext()?.resourceManager.getStringSync($r('app.string.pm').id)\n  }\n\n  flushHourColumn() {\n    if (this.useMilitary) {\n      this.hourArr = this.buildColumnOptions(0, 23)\n    } else {\n      this.hourArr = this.buildColumnOptions(0, 11, true)\n    }\n  }\n\n  flushMinSecColumn() {\n    this.minSecArr = this.buildColumnOptions(0, 59)\n  }\n\n  flushBorderStyle() {\n    let realStartBorder = this.startBorderStyle\n    let realEndBorder = this.endBorderStyle\n    // 根据语言习惯设置镜像语言的时间顺序\n    if (this.systemLanguage == 'ar' || this.systemLanguage == 'ug') {\n      this.isRtl = true\n      realStartBorder = this.endBorderStyle\n      realEndBorder = this.startBorderStyle\n    } else {\n      this.isRtl = false\n    }\n    if (!this.useMilitary) {\n      if (this.amPmAtLast) {\n        this.amPmBorder = realEndBorder\n        this.hourBorder = realStartBorder\n        this.minBorder = this.centerBorderStyle\n        this.secBorder = this.centerBorderStyle\n      } else {\n        this.amPmBorder = realStartBorder\n        this.hourBorder = this.centerBorderStyle\n        if (this.showSecond) {\n          this.minBorder = this.centerBorderStyle\n        } else {\n          this.minBorder = realEndBorder\n        }\n        this.secBorder = realEndBorder\n      }\n    } else {\n      this.hourBorder = realStartBorder\n      if (this.showSecond) {\n        this.minBorder = this.centerBorderStyle\n      } else {\n        this.minBorder = realEndBorder\n      }\n      this.secBorder = realEndBorder\n    }\n  }\n\n  formatTime(time: number): string {\n    if (time < 10) {\n      return this.zero + this.formatter.format(time)\n    }\n    return this.formatter.format(time)\n  }\n\n  @Builder\n  buildAmPmColumn() {\n    UIPickerComponent({ selectedIndex: this.amPmIndex }) {\n      ForEach(this.amPmArr, (amPm: string) => {\n        Text(amPm)\n      })\n    }\n    .width('200px')\n    .canLoop(this.loop)\n    .selectionIndicator({\n      type: PickerIndicatorType.BACKGROUND,\n      borderRadius: this.amPmBorder\n    })\n    .onChange((selectedIndex: number) => {\n      this.amPmIndex = selectedIndex\n      this.flushCurrentTime()\n    })\n    .onScrollStop((selectedIndex: number) => {\n      this.amPmIndex = selectedIndex\n      this.flushCurrentTime()\n    })\n  }\n\n  @Builder\n  buildHourColumn() {\n    UIPickerComponent({ selectedIndex: this.hourIndex }) {\n      ForEach(this.hourArr, (hour: string) => {\n        Text(hour)\n      })\n    }\n    .width('200px')\n    .canLoop(this.loop)\n    .selectionIndicator({\n      type: PickerIndicatorType.BACKGROUND,\n      borderRadius: this.hourBorder\n    })\n    .onChange((selectedIndex: number) => {\n      this.hourIndex = selectedIndex\n      this.flushCurrentTime()\n    })\n    .onScrollStop((selectedIndex: number) => {\n      this.hourIndex = selectedIndex\n      this.flushCurrentTime()\n    })\n  }\n\n  @Builder\n  buildMinColumn() {\n    UIPickerComponent({ selectedIndex: this.minIndex }) {\n      ForEach(this.minSecArr, (min: string) => {\n        Text(min)\n      })\n    }\n    .width('200px')\n    .canLoop(this.loop)\n    .selectionIndicator({\n      type: PickerIndicatorType.BACKGROUND,\n      borderRadius: this.minBorder\n    })\n    .onChange((selectedIndex: number) => {\n      this.minIndex = selectedIndex\n      this.flushCurrentTime()\n    })\n    .onScrollStop((selectedIndex: number) => {\n      this.minIndex = selectedIndex\n      this.flushCurrentTime()\n    })\n  }\n\n  @Builder\n  buildSecColumn() {\n    UIPickerComponent({ selectedIndex: this.secIndex }) {\n      ForEach(this.minSecArr, (sec: string) => {\n        Text(sec)\n      })\n    }\n    .width('200px')\n    .canLoop(this.loop)\n    .selectionIndicator({\n      type: PickerIndicatorType.BACKGROUND,\n      borderRadius: this.secBorder\n    })\n    .onChange((selectedIndex: number) => {\n      this.secIndex = selectedIndex\n      this.flushCurrentTime()\n    })\n    .onScrollStop((selectedIndex: number) => {\n      this.secIndex = selectedIndex\n      this.flushCurrentTime()\n    })\n  }\n\n  flushCurrentTime() {\n    this.currentTime = ''\n    if (!this.useMilitary) {\n      this.currentTime += this.amPmArr[this.amPmIndex] + ' '\n    }\n    this.currentTime += this.hourArr[this.hourIndex] + ':' + this.minSecArr[this.minIndex]\n    if (this.showSecond) {\n      this.currentTime += ':' + this.minSecArr[this.secIndex]\n    }\n  }\n\n  build() {\n    Column() {\n      Row() {\n        // 根据镜像语言显示顺序创建column\n        if (!this.isRtl) {\n          if (!this.useMilitary && !this.amPmAtLast) {\n            this.buildAmPmColumn()\n            this.buildHourColumn()\n          } else {\n            this.buildHourColumn()\n          }\n          this.buildMinColumn()\n          if (this.showSecond) {\n            this.buildSecColumn()\n          }\n          if (!this.useMilitary && this.amPmAtLast) {\n            this.buildAmPmColumn()\n          }\n        } else {\n          if (!this.useMilitary && this.amPmAtLast) {\n            this.buildAmPmColumn()\n          }\n          if (this.showSecond) {\n            this.buildSecColumn()\n          }\n          this.buildMinColumn()\n          if (!this.useMilitary && !this.amPmAtLast) {\n            this.buildHourColumn()\n            this.buildAmPmColumn()\n          } else {\n            this.buildHourColumn()\n          }\n        }\n      }\n\n      Row() {\n        Text('selected time: ' + this.currentTime)\n          .margin(5)\n          .width(\"80%\")\n          .textAlign(TextAlign.Center)\n      }\n      .border({ width: 1 })\n      .margin(5)\n\n      Column() {\n        Row() {\n          Toggle({ type: ToggleType.Switch, isOn: true })\n            .onChange((isOn: boolean) => {\n              this.loop = isOn;\n            })\n          Text('loop').fontSize(20)\n        }.width(200).margin(5)\n        Row() {\n          Toggle({ type: ToggleType.Switch, isOn: false })\n            .onChange((isOn: boolean) => {\n              this.showSecond = isOn\n              this.flushCurrentTime()\n              this.flushBorderStyle()\n            })\n          Text('show second').fontSize(20)\n        }.width(200).margin(5)\n        Row() {\n          Toggle({ type: ToggleType.Switch, isOn: false })\n            .onChange((isOn: boolean) => {\n              this.useMilitary = isOn\n              if (this.useMilitary) {\n                if (this.amPmIndex) {\n                  this.hourIndex += 12\n                }\n              } else {\n                if (this.hourIndex >= 12) {\n                  this.amPmIndex = 1\n                  this.hourIndex -= 12\n                } else {\n                  this.amPmIndex = 0\n                }\n              }\n              this.flushBorderStyle()\n              this.flushHourColumn()\n              this.flushCurrentTime()\n            })\n          Text('use military').fontSize(20)\n        }.width(200).margin(5)\n        Row() {\n          Toggle({ type: ToggleType.Switch, isOn: true })\n            .onChange((isOn: boolean) => {\n              this.zeroPrefix = isOn\n              this.flushHourColumn()\n              this.flushMinSecColumn()\n              this.flushCurrentTime()\n            })\n          Text('2-digits').fontSize(20)\n        }.width(200).margin(5)\n      }\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(247276)/* ["default"] */.A) + "",
        width: "429",
        height: "423"
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
443068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800056-18df1788fbad445201f397c474e91401.gif");

},
962800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
491367(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
876462(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439751-bcb2c41770d9424dc406f10c9403a8a1.gif");

},
944121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479703-43162feca5b4499c1e57df61e7869d52.gif");

},
228583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
291350(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959704-2355f073909323a999adda25f74ee3d1.gif");

},
247276(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959706-bb75052305840587fd33a526d47930d7.gif");

},
229151(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
410561(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439749-3f8a7495af31f6df8c00e6d56d543f0b.gif");

},
838462(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800054-6a13e89062d4f26b4712d5548e0c90a3.gif");

},
358605(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479705-5ba5de7c224be3b350e30657f9743d57.gif");

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