"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["296407"], {
432424(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_segmentbuttonv_2_ohos_arkui_advanced_segmentbuttonv_2_md_071_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-system-preset-ui-component-library-ohos-arkui-advanced-segmentbuttonv-2-ohos-arkui-advanced-segmentbuttonv-2-md-071.json
var site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_segmentbuttonv_2_ohos_arkui_advanced_segmentbuttonv_2_md_071_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-segmentbuttonv2/ohos-arkui-advanced-segmentbuttonv2","title":"SegmentButtonV2","description":"分段按钮组件用于创建页签型、单选或多选的胶囊型分段按钮。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-segmentbuttonv2/ohos-arkui-advanced-segmentbuttonv2.md","sourceDirName":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-segmentbuttonv2","slug":"/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-segmentbuttonv2/ohos-arkui-advanced-segmentbuttonv2","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-segmentbuttonv2/ohos-arkui-advanced-segmentbuttonv2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"SegmentButtonV2","sidebar_position":19,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-segmentbuttonv2","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-segmentbuttonv2"},"sidebar":"ref","previous":{"title":"SegmentButton","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-segmentbutton/ohos-arkui-advanced-segmentbutton"},"next":{"title":"SelectTitleBar","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-selecttitlebar/ohos-arkui-advanced-selecttitlebar"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-segmentbuttonv2/ohos-arkui-advanced-segmentbuttonv2.md


const frontMatter = {
	title: 'SegmentButtonV2',
	sidebar_position: 19,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-segmentbuttonv2',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-segmentbuttonv2'
};
const contentTitle = 'SegmentButtonV2';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "TabSegmentButtonV2",
  "id": "tabsegmentbuttonv2",
  "level": 2
}, {
  "value": "CapsuleSegmentButtonV2",
  "id": "capsulesegmentbuttonv2",
  "level": 2
}, {
  "value": "MultiCapsuleSegmentButtonV2",
  "id": "multicapsulesegmentbuttonv2",
  "level": 2
}, {
  "value": "SegmentButtonV2Items",
  "id": "segmentbuttonv2items",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "hasHybrid",
  "id": "hashybrid",
  "level": 3
}, {
  "value": "SegmentButtonV2Item",
  "id": "segmentbuttonv2item",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-1",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor-1",
  "level": 3
}, {
  "value": "isHybrid",
  "id": "ishybrid",
  "level": 3
}, {
  "value": "SegmentButtonV2ItemOptions",
  "id": "segmentbuttonv2itemoptions",
  "level": 2
}, {
  "value": "OnSelectedIndexChange",
  "id": "onselectedindexchange",
  "level": 2
}, {
  "value": "OnSelectedIndexesChange",
  "id": "onselectedindexeschange",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例 1（页签型分段按钮）",
  "id": "示例-1页签型分段按钮",
  "level": 3
}, {
  "value": "示例 2（单选的胶囊型分段按钮）",
  "id": "示例-2单选的胶囊型分段按钮",
  "level": 3
}, {
  "value": "示例 3（多选的胶囊型分段按钮）",
  "id": "示例-3多选的胶囊型分段按钮",
  "level": 3
}, {
  "value": "示例4（分段按钮Modifier的基本用法）",
  "id": "示例4分段按钮modifier的基本用法",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "segmentbuttonv2",
        children: "SegmentButtonV2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分段按钮组件用于创建页签型、单选或多选的胶囊型分段按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(542971)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 18开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TabSegmentButtonV2, CapsuleSegmentButtonV2, MultiCapsuleSegmentButtonV2, SegmentButtonV2Items } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabsegmentbuttonv2",
      children: "TabSegmentButtonV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TabSegmentButtonV2({\n  items: SegmentButtonV2Items,\n  selectedIndex: number,\n  $selectedIndex?: OnSelectedIndexChange,\n  onItemClicked?: Callback<number>,\n  itemMinFontScale?: number | Resource,\n  itemMaxFontScale?: number | Resource,\n  itemSpace?: LengthMetrics,\n  itemFontSize?: LengthMetrics,\n  itemSelectedFontSize?: LengthMetrics,\n  itemFontColor?: ColorMetrics,\n  itemSelectedFontColor?: ColorMetrics,\n  itemFontWeight?: FontWeight,\n  itemSelectedFontWeight?: FontWeight,\n  itemBorderRadius?: LengthMetrics,\n  itemSelectedBackgroundColor?: ColorMetrics,\n  itemIconSize?: SizeT<LengthMetrics>,\n  itemIconFillColor?: ColorMetrics,\n  itemSelectedIconFillColor?: ColorMetrics,\n  itemSymbolFontSize?: LengthMetrics,\n  itemSymbolFontColor?: ColorMetrics,\n  itemSelectedSymbolFontColor?: ColorMetrics,\n  itemMinHeight?: LengthMetrics,\n  itemPadding?: LocalizedPadding,\n  itemShadow?: ShadowOptions | ShadowStyle,\n  buttonBackgroundColor?: ColorMetrics,\n  buttonBackgroundBlurStyle?: BlurStyle,\n  buttonBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions,\n  buttonBackgroundEffect?: BackgroundEffectOptions,\n  buttonBorderRadius?: LengthMetrics,\n  buttonMinHeight?: LengthMetrics,\n  buttonPadding?: LengthMetrics,\n  languageDirection?: Direction\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @ComponentV2"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "装饰器类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#segmentbuttonv2items",
              children: "SegmentButtonV2Items"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Require  @Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮的选项集合信息。  值为undefined时，不显示选项信息。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectedIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Require  @Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮被选中的选项下标，第一项的编号为0，之后顺序增加。  值为undefined时，不选中任何选项，其他非正数值，默认选项下标为0。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$selectedIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onselectedindexchange",
              children: "OnSelectedIndexChange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选中项变更时触发的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onItemClicked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项被单击时触发的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonBackgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮背板颜色。  默认值：$r('sys.color.segment_button_v2_tab_button_background')  值为undefined时，按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonBackgroundBlurStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#blurstyle9",
              children: "BlurStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮背板模糊材质。  默认值：undefined  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonBackgroundBlurStyleOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundblurstyleoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "BackgroundBlurStyleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮背板模糊材质配置参数。  默认值：undefined  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonBackgroundEffect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundeffectoptions11",
              children: "BackgroundEffectOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮背板模糊配置参数。  默认值：undefined  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonBorderRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮背板的圆角大小。  取值范围：[0, +∞)  默认值：$r('sys.float.segment_button_v2_background_corner_radius')  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonMinHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮最小高度。  取值范围：[0, +∞)  默认值：只有纯文本或者纯图标选项时：$r('sys.float.segment_button_v2_singleline_background_height')；有图文混合的选项时：$r('sys.float.segment_button_v2_doubleline_background_height')  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮内边距。  取值范围：[0, +∞)  默认值：$r('sys.float.padding_level1')  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedBackgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选中的选项背景颜色。  默认值：$r('sys.color.segment_button_v2_tab_selected_item_background')  值为undefined时，按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemMinHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项最小高度。  取值范围：[0, +∞)  默认值：  只有纯文本或者纯图标选项时：$r('sys.float.segment_button_v2_singleline_selected_height')；有图文混合的选项时：$r('sys.float.segment_button_v2_doubleline_selected_height')  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedpadding12",
              children: "LocalizedPadding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项内边距。  默认值：{ top: LengthMetrics.resource($r('sys.float.padding_level2')), bottom: LengthMetrics.resource($r('sys.float.padding_level2')), start: LengthMetrics.resource($r('sys.float.padding_level4')), end: LengthMetrics.resource($r('sys.float.padding_level4')) }  值为undefined时，按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemShadow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ShadowOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowstyle10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ShadowStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSpace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选项之间的间隔。  取值范围：[0, +∞)  默认值：LengthMetrics.vp(0)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不支持设置百分比类型，异常值按默认值处理。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemMinFontScale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemMaxFontScale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中选项的字体大小。  取值范围：[0, +∞)  默认值：14fp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不支持设置百分比类型，异常值按默认值处理。  items设置textModifier的fontSize属性值时，itemFontSize不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中项的字体大小。  取值范围：[0, +∞)  默认值：14fp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不支持设置百分比类型，异常值按默认值处理。  items设置textModifier的fontSize属性值时，itemSelectedFontSize不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemFontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中选项的字体颜色。  默认值：$r('sys.color.font_secondary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置textModifier的fontColor属性值时，itemFontColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedFontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中项的字体颜色。  默认值：$r('sys.color.font_primary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置textModifier的fontColor属性值时，itemSelectedFontColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemFontWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
              children: "FontWeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中选项的字体字重。  默认值：FontWeight.Medium  超出取值范围按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置textModifier的fontWeight属性值时，itemFontWeight不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedFontWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
              children: "FontWeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中项的字体字重。  默认值：FontWeight.Medium  超出取值范围按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置textModifier的fontWeight属性值时，itemSelectedFontWeight不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemBorderRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项的圆角大小。  取值范围：[0, +∞)  默认值：$r('sys.float.segment_button_v2_selected_corner_radius')  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemIconSize"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#sizett12",
              children: "SizeT"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选项中Image类型的图标大小。  取值范围：[0, +∞)  默认值：{ width: LengthMetrics.vp(24), height: LengthMetrics.vp(24) }  超出取值范围按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置iconModifier的width、height属性值时，itemIconSize不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemIconFillColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中的选项图标颜色。  默认值：$r('sys.color.font_secondary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置iconModifier的fillColor属性值时，itemIconFillColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedIconFillColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中的选项图标颜色。  默认值：$r('sys.color.font_primary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置iconModifier的fillColor属性值时，itemSelectedIconFillColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSymbolFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选项中HM Symbol类型图标大小。  取值范围：[0, +∞)  默认值：20fp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不支持设置百分比类型，异常值按默认值处理。  items设置symbolModifier的fontSize属性值时，itemSymbolFontSize不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSymbolFontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中选项HM Symbol类型图标的颜色。  默认值：$r('sys.color.font_secondary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置symbolModifier的fontColor属性值时，itemSymbolFontColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedSymbolFontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中选项的HM Symbol类型图标颜色。  默认值：$r('sys.color.font_primary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置symbolModifier的fontColor属性值时，itemSelectedSymbolFontColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "languageDirection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#direction",
              children: "Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮的布局方向。  默认值：Direction.Auto  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capsulesegmentbuttonv2",
      children: "CapsuleSegmentButtonV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CapsuleSegmentButtonV2({\n  items: SegmentButtonV2Items,\n  selectedIndex: number,\n  $selectedIndex?: OnSelectedIndexChange,\n  onItemClicked?: Callback<number>,\n  itemMinFontScale?: number | Resource,\n  itemMaxFontScale?: number | Resource,\n  itemSpace?: LengthMetrics,\n  itemFontSize?: LengthMetrics,\n  itemSelectedFontSize?: LengthMetrics,\n  itemFontColor?: ColorMetrics,\n  itemSelectedFontColor?: ColorMetrics,\n  itemFontWeight?: FontWeight,\n  itemSelectedFontWeight?: FontWeight,\n  itemBorderRadius?: LengthMetrics,\n  itemSelectedBackgroundColor?: ColorMetrics,\n  itemIconSize?: SizeT<LengthMetrics>,\n  itemIconFillColor?: ColorMetrics,\n  itemSelectedIconFillColor?: ColorMetrics,\n  itemSymbolFontSize?: LengthMetrics,\n  itemSymbolFontColor?: ColorMetrics,\n  itemSelectedSymbolFontColor?: ColorMetrics,\n  itemMinHeight?: LengthMetrics,\n  itemPadding?: LocalizedPadding,\n  itemShadow?: ShadowOptions | ShadowStyle,\n  buttonBackgroundColor?: ColorMetrics,\n  buttonBackgroundBlurStyle?: BlurStyle,\n  buttonBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions,\n  buttonBackgroundEffect?: BackgroundEffectOptions,\n  buttonBorderRadius?: LengthMetrics,\n  buttonMinHeight?: LengthMetrics,\n  buttonPadding?: LengthMetrics,\n  languageDirection?: Direction\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @ComponentV2"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "装饰器类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#segmentbuttonv2items",
              children: "SegmentButtonV2Items"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Require  @Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮的选项集合信息。  值为undefined时，不显示选项信息。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectedIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Require  @Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮被选中的选项下标，第一项的编号为0，之后顺序增加。  值为undefined时，不选中任何选项，其他非正数值，默认选项下标为0。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$selectedIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onselectedindexchange",
              children: "OnSelectedIndexChange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选中项变更时的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onItemClicked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项被单击时触发的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonBackgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮背板颜色。  默认值：$r('sys.color.segment_button_v2_tab_button_background')  值为undefined时，按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonBackgroundBlurStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#blurstyle9",
              children: "BlurStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮背板模糊材质。  默认值：undefined  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonBackgroundBlurStyleOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundblurstyleoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "BackgroundBlurStyleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮背板模糊材质配置参数。  默认值：undefined  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonBackgroundEffect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundeffectoptions11",
              children: "BackgroundEffectOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮背板模糊配置参数。  默认值：undefined  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonBorderRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮背板的圆角大小。  取值范围：[0, +∞)  默认值：$r('sys.float.segment_button_v2_background_corner_radius')  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonMinHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮最小的高度。  取值范围：[0, +∞)  默认值：只有纯文本或者纯图标选项时：$r('sys.float.segment_button_v2_singleline_background_height')；有图文混合的选项时：$r('sys.float.segment_button_v2_doubleline_background_height')  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮的内边距。  取值范围：[0, +∞)  默认值：$r('sys.float.padding_level1')  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedBackgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选中的选项背景颜色。  默认值：$r('sys.color.comp_background_emphasize')  值为undefined时，按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemMinHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项的最小高度。  取值范围：[0, +∞)  默认值：  只有纯文本或者纯图标选项时：$r('sys.float.segment_button_v2_singleline_selected_height')；有图文混合的选项时：$r('sys.float.segment_button_v2_doubleline_selected_height')  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedpadding12",
              children: "LocalizedPadding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项的内边距。  默认值：{ top: LengthMetrics.resource($r('sys.float.padding_level2')), bottom: LengthMetrics.resource($r('sys.float.padding_level2')), start: LengthMetrics.resource($r('sys.float.padding_level4')), end: LengthMetrics.resource($r('sys.float.padding_level4')) }  值为undefined时，按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemShadow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ShadowOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowstyle10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ShadowStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSpace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选项之间的间隔。  取值范围：[0, +∞)  默认值：LengthMetrics.vp(0)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不支持设置百分比类型，异常值按默认值处理。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemMinFontScale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemMaxFontScale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中的选项字体大小。  取值范围：[0, +∞)  默认值：14fp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不支持设置百分比类型，异常值按默认值处理。  items设置textModifier的fontSize属性值时，itemFontSize不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中的选项字体大小。  取值范围：[0, +∞)  默认值：14fp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不支持设置百分比类型，异常值按默认值处理。  items设置textModifier的fontSize属性值时，itemSelectedFontSize不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemFontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中的选项字体颜色。  默认值：$r('sys.color.font_secondary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置textModifier的fontColor属性值时，itemFontColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedFontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中的选项字体颜色。  默认值：$r('sys.color.font_on_primary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置textModifier的fontColor属性值时，itemSelectedFontColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemFontWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
              children: "FontWeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中的选项字体字重。  默认值：FontWeight.Medium  超出取值范围按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置textModifier的fontWeight属性值时，itemFontWeight不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedFontWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
              children: "FontWeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中的选项字体字重。  默认值：FontWeight.Medium  超出取值范围按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置textModifier的fontWeight属性值时，itemSelectedFontWeight不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemBorderRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项的圆角大小。  取值范围：[0, +∞)  默认值：$r('sys.float.segment_button_v2_selected_corner_radius')  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemIconSize"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#sizett12",
              children: "SizeT"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选项中Image类型图标大小。  取值范围：[0, +∞)  默认值：{ width: LengthMetrics.vp(24), height: LengthMetrics.vp(24) }  超出取值范围按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置iconModifier的width、height属性值时，itemIconSize不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemIconFillColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中的选项图标颜色。  默认值：$r('sys.color.font_secondary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置iconModifier的fillColor属性值时，itemIconFillColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedIconFillColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中的选项图标颜色。  默认值：$r('sys.color.font_on_primary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置iconModifier的fillColor属性值时，itemSelectedIconFillColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSymbolFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选项中HM Symbol类型图标大小。  取值范围：[0, +∞)  默认值：20fp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不支持设置百分比类型，异常值按默认值处理。  items设置symbolModifier的fontSize属性值时，itemSymbolFontSize不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSymbolFontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中的选项中HM Symbol类型图标颜色。  默认值：$r('sys.color.font_secondary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置symbolModifier的fontColor属性值时，itemSymbolFontColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedSymbolFontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中的选项中HM Symbol类型图标颜色。  默认值：$r('sys.color.font_on_primary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置symbolModifier的fontColor属性值时，itemSelectedSymbolFontColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "languageDirection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#direction",
              children: "Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮的布局方向。  默认值：Direction.Auto  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multicapsulesegmentbuttonv2",
      children: "MultiCapsuleSegmentButtonV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MultiCapsuleSegmentButtonV2({\n  items: SegmentButtonV2Items,\n  selectedIndexes: number[],\n  $selectedIndexes: OnSelectedIndexesChange,\n  onItemClicked?: Callback<number>,\n  itemMinFontScale?: number | Resource,\n  itemMaxFontScale?: number | Resource,\n  itemSpace?: LengthMetrics,\n  itemFontColor?: ColorMetrics,\n  itemSelectedFontColor?: ColorMetrics,\n  itemFontSize?: LengthMetrics,\n  itemSelectedFontSize?: LengthMetrics,\n  itemFontWeight?: FontWeight,\n  itemSelectedFontWeight?: FontWeight,\n  itemBorderRadius?: LengthMetrics,\n  itemBackgroundColor?: ColorMetrics,\n  itemBackgroundEffect?: BackgroundEffectOptions,\n  itemBackgroundBlurStyle?: BlurStyle,\n  itemBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions,\n  itemSelectedBackgroundColor?: ColorMetrics,\n  itemIconSize?: SizeT<LengthMetrics>,\n  itemIconFillColor?: ColorMetrics,\n  itemSelectedIconFillColor?: ColorMetrics,\n  itemSymbolFontSize?: LengthMetrics,\n  itemSymbolFontColor?: ColorMetrics,\n  itemSelectedSymbolFontColor?: ColorMetrics,\n  itemMinHeight?: LengthMetrics,\n  itemPadding?: LocalizedPadding,\n  languageDirection?: Direction\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @ComponentV2"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "装饰器类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#segmentbuttonv2items",
              children: "SegmentButtonV2Items"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Require  @Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮的选项集合信息。  值为undefined时，不显示选项信息。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectedIndexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Require  @Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮被选中的选项下标集合，第一项的编号为0，之后顺序增加。  值为undefined时，不选中任何选项。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  仅支持有效的按钮编号（第一个按钮编号为0，之后按顺序累加），如没有选中项可传入空数组[]。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$selectedIndexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#onselectedindexeschange",
              children: "OnSelectedIndexesChange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选中项变更时的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onItemClicked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项被单击时触发的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemBackgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮非选中的选项背板颜色。  默认值：$r('sys.color.segment_button_v2_multi_capsule_button_background')  值为undefined时，按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemBackgroundEffect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundeffectoptions11",
              children: "BackgroundEffectOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项的背板效果。  默认值：undefined  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemBackgroundBlurStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#blurstyle9",
              children: "BlurStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项的模糊材质。  默认值：undefined  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemBackgroundBlurStyleOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundblurstyleoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "BackgroundBlurStyleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项的模糊材质配置参数。  默认值：undefined  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedBackgroundColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选中的选项背景颜色。  默认值：$r('sys.color.comp_background_emphasize')  值为undefined时，按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemMinHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项的最小高度。  取值范围：[0, +∞)  默认值：  只有纯文本或者纯图标选项时：$r('sys.float.segment_button_v2_singleline_selected_height')；有图文混合的选项时：$r('sys.float.segment_button_v2_doubleline_selected_height')  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedpadding12",
              children: "LocalizedPadding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项的内边距。  默认值：{ top: LengthMetrics.resource($r('sys.float.padding_level2')), bottom: LengthMetrics.resource($r('sys.float.padding_level2')), start: LengthMetrics.resource($r('sys.float.padding_level4')), end: LengthMetrics.resource($r('sys.float.padding_level4')) }  值为undefined时，按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSpace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选项之间的间隔。  取值范围：[0, +∞)  默认值：LengthMetrics.vp(1)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不支持设置百分比类型，异常值按默认值处理。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemMinFontScale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemMaxFontScale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中的选项字体大小。  取值范围：[0, +∞)  默认值：14fp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不支持设置百分比类型，异常值按默认值处理。  items设置textModifier的fontSize属性值时，itemSelectedFontSize不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemFontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中的选项字体颜色。  默认值：$r('sys.color.font_secondary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置textModifier的fontColor属性值时，itemFontColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中的选项字体大小。  取值范围：[0, +∞)  默认值：14fp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不支持设置百分比类型，异常值按默认值处理。  items设置textModifier的fontSize属性值时，itemFontSize不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedFontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中的选项字体颜色。  默认值：$r('sys.color.font_on_primary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置textModifier的fontColor属性值时，itemSelectedFontColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemFontWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
              children: "FontWeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中的选项字体字重。  默认值：FontWeight.Medium  超出取值范围按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置textModifier的fontWeight属性值时，itemFontWeight不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedFontWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
              children: "FontWeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中的选项字体字重。  默认值：FontWeight.Medium  超出取值范围按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置textModifier的fontWeight属性值时，itemSelectedFontWeight不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemBorderRadius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮选项的圆角大小。  取值范围：[0, +∞)  默认值：$r('sys.float.segment_button_v2_multi_corner_radius')  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemIconSize"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#sizett12",
              children: "SizeT"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选项中Image类型图标大小。  取值范围：[0, +∞)  默认值：{ width: LengthMetrics.vp(24), height: LengthMetrics.vp(24) }  超出取值范围按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置iconModifier的width、height属性值时，itemIconSize不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemIconFillColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中的选项图标颜色。  默认值：$r('sys.color.font_secondary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置iconModifier的fillColor属性值时，itemIconFillColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedIconFillColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中的选项图标颜色。  默认值：$r('sys.color.font_on_primary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置iconModifier的fillColor属性值时，itemSelectedIconFillColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSymbolFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选项中HM Symbol类型图标大小。  取值范围：[0, +∞)  默认值：20fp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  不支持设置百分比类型，异常值按默认值处理。  items设置symbolModifier的fontSize属性值时，itemSymbolFontSize不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSymbolFontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮非选中的选项中HM Symbol类型图标颜色。  默认值：$r('sys.color.font_secondary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置symbolModifier的fontColor属性值时，itemSymbolFontColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itemSelectedSymbolFontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置分段按钮选中的选项中HM Symbol类型图标颜色。  默认值：$r('sys.color.font_on_primary')  值为undefined时，按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  items设置symbolModifier的fontColor属性值时，itemSelectedSymbolFontColor不生效。  该成员只读，不支持更改。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "languageDirection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#direction",
              children: "Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置分段按钮的布局方向。  默认值：Direction.Auto  超出取值范围按默认值处理。  该成员只读，不支持更改。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "segmentbuttonv2items",
      children: "SegmentButtonV2Items"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分段按钮选项集合。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自 Array<", (0,jsx_runtime.jsx)(_components.a, {
        href: "#segmentbuttonv2item",
        children: "SegmentButtonV2Item"
      }), ">"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @ObservedV2"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(items: SegmentButtonV2ItemOptions[])"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造函数。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "items"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#segmentbuttonv2itemoptions",
              children: "SegmentButtonV2ItemOptions"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项配置参数集合。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hashybrid",
      children: "hasHybrid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get hasHybrid():boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "是否支持图文混合选项。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "是否支持图文混合选项。  true：有图文混合选项；false：无图文混合选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "segmentbuttonv2item",
      children: "SegmentButtonV2Item"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @ObservedV2"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性-1",
      children: "属性"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项文本。  默认值：undefined  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项图片类型图标。  默认值：undefined  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "symbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项的HM Symbol类型图标。  默认值：undefined  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项是否可用。  默认值：true  true：可用；false：不可用。  值为undefined时，按默认值处理。  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textModifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#%E8%87%AA%E5%AE%9A%E4%B9%89modifier",
              children: "TextModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项文本属性样式修改器。  默认值：undefined  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iconModifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#%E8%87%AA%E5%AE%9A%E4%B9%89modifier",
              children: "ImageModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项图片类型图标属性的样式修改器。  默认值：undefined  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "symbolModifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier/universal-attributes-attribute-symbolglyphmodifier#symbolglyphmodifier",
              children: "SymbolGlyphModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项HM Symbol类型图标属性样式修改器。  默认值：undefined  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分段按钮选项的无障碍文本", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitytext",
              children: "accessibilityText"
            }), "。  默认值：\"\"  值为undefined时，按默认值处理。  装饰器类型：@Trace"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityDescription"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分段按钮选项的无障碍说明", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitydescription",
              children: "accessibilityDescription"
            }), "。  默认值：\"\"  值为undefined时，按默认值处理。  装饰器类型：@Trace"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分段按钮选项的无障碍重要性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitylevel",
              children: "accessibilityLevel"
            }), "。  默认值：\"auto\"  值为undefined时，按默认值处理。  装饰器类型：@Trace"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(401995)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当配置了symbol和icon 时，symbol的显示优先级更高。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当symbol和symbolModifier 同时设置HM Symbol资源时，symbolModifier设置的资源具有更高的显示优先级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor-1",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(options: SegmentButtonV2ItemOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造函数。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
              href: "#segmentbuttonv2itemoptions",
              children: "SegmentButtonV2ItemOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项配置参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ishybrid",
      children: "isHybrid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "get isHybrid():boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查分段按钮选项是否已配置文本和图标。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "选项是否有图文混合配置。  true：有图文混合配置；false：无图文混合配置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "segmentbuttonv2itemoptions",
      children: "SegmentButtonV2ItemOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置分段按钮选项参数。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项文本。  默认值：undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项图标。  默认值：undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "symbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项图标，HM Symbol类型 。  默认值：undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项是否可用。  默认值：true  true：分段按钮选项可用；false：分段按钮选项不可用。  值为undefined时，按默认值处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textModifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#%E8%87%AA%E5%AE%9A%E4%B9%89modifier",
              children: "TextModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项文本属性样式修改器。  默认值：undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iconModifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#%E8%87%AA%E5%AE%9A%E4%B9%89modifier",
              children: "ImageModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改分段按钮选项图片类型的图标属性样式。  默认值：undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "symbolModifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#%E8%87%AA%E5%AE%9A%E4%B9%89modifier",
              children: "SymbolGlyphModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项HM Symbol类型图标属性样式修改器。  默认值：undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityText"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分段按钮选项无障碍文本", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitytext",
              children: "accessibilityText"
            }), "。  默认值：\"\"  值为undefined时，按默认值处理。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityDescription"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分段按钮选项无障碍说明", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitydescription",
              children: "accessibilityDescription"
            }), "。  默认值：\"\"  值为undefined时，按默认值处理。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibilityLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["分段按钮选项无障碍重要性", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-universal-attributes-accessibility/ts-universal-attributes-accessibility#accessibilitylevel",
              children: "accessibilityLevel"
            }), "。  默认值：\"auto\"  值为undefined时，按默认值处理。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(430685)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当配置symbol和icon时，symbol的显示优先级更高。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当symbol和symbolModifier同时设置HM Symbol资源时，symbolModifier设置的资源具有更高的显示优先级。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onselectedindexchange",
      children: "OnSelectedIndexChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnSelectedIndexChange = (selectedIndex: number) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单选分段按钮选中项变更时调用的回调函数类型。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "分段按钮选项下标。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onselectedindexeschange",
      children: "OnSelectedIndexesChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type OnSelectedIndexesChange = (selectedIndexes: number[]) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多选分段按钮选中项变更时调用的回调函数类型。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Wearable设备上使用时，应用程序运行异常，异常信息中提示接口未定义，在其他设备中可正常调用。"]
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
            children: "selectedIndexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分段按钮选项下标集合。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例-1页签型分段按钮",
      children: "示例 1（页签型分段按钮）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此示例说明页签型分段按钮的基本用法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SegmentButtonV2Items, TabSegmentButtonV2 } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct TabSegmentButtonV2Example {\n  @Local textItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    { text: '手机' },\n    { text: '平板' },\n    { text: '2in1' },\n    { text: '智能穿戴' },\n  ]);\n  @Local textSelectedIndex: number = 0;\n  @Local imageItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    { icon: $r('sys.media.ohos_ic_public_device_phone') },\n    { icon: $r('sys.media.ohos_ic_public_device_pad') },\n    { icon: $r('sys.media.ohos_ic_public_device_matebook') },\n    { icon: $r('sys.media.ohos_ic_public_device_watch') },\n  ]);\n  @Local imageSelectedIndex: number = 0;\n  @Local symbolItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    { symbol: $r('sys.symbol.phone') },\n    { symbol: $r('sys.symbol.pad') },\n    { symbol: $r('sys.symbol.matebook') },\n    { symbol: $r('sys.symbol.watch') },\n  ]);\n  @Local symbolSelectedIndex: number = 0;\n  @Local hybridItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    { text: '手机', symbol: $r('sys.symbol.phone') },\n    { text: '平板', symbol: $r('sys.symbol.pad') },\n    { text: '2in1', symbol: $r('sys.symbol.matebook') },\n    { text: '智能穿戴', symbol: $r('sys.symbol.watch') },\n  ]);\n  @Local hybridSelectedIndex: number = 0;\n  @Local freeItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    { text: '年' },\n    { text: '月' },\n    { text: '周' },\n    { text: '日' },\n    { icon: $r('sys.media.ohos_ic_public_search_filled') },\n  ]);\n  @Local freeSelectedIndex: number = 0;\n\n  build() {\n    Scroll() {\n      Column({ space: 12 }) {\n        VCard({ title: '纯文本选项' }) {\n          TabSegmentButtonV2({\n            items: this.textItems,\n            selectedIndex: this.textSelectedIndex!!,\n          })\n        }\n\n        VCard({ title: '纯图标选项（Image）' }) {\n          TabSegmentButtonV2({\n            items: this.imageItems,\n            selectedIndex: this.imageSelectedIndex!!,\n          })\n        }\n\n        VCard({ title: '纯图标选项（Symbol）' }) {\n          TabSegmentButtonV2({\n            items: this.symbolItems,\n            selectedIndex: this.symbolSelectedIndex!!,\n          })\n        }\n\n        VCard({ title: '图文混合选项' }) {\n          TabSegmentButtonV2({\n            items: this.hybridItems,\n            selectedIndex: this.hybridSelectedIndex!!,\n          })\n        }\n\n        VCard({ title: '自由选项' }) {\n          TabSegmentButtonV2({\n            items: this.freeItems,\n            selectedIndex: this.freeSelectedIndex!!,\n          })\n        }\n\n        Button(`isHybrid接口用法说明，${this.textItems[0].isHybrid}`) // 纯文本选项未配置图标，显示false。\n          .width('70%')\n\n        Button(`isHybrid接口用法说明，${this.hybridItems[0].isHybrid}`) // 图文混合选项已配置文本和图标，显示true。\n          .width('70%')\n\n        Button(`hasHybrid接口用法说明，${this.textItems.hasHybrid}`) // 分段按钮无图文混合选项，显示false。\n          .width('70%')\n\n        Button(`hasHybrid接口用法说明，${this.hybridItems.hasHybrid}`) // 分段按钮有图文混合选项，显示true。\n          .width('70%')\n      }\n      .constraintSize({ minHeight: '100%' })\n      .justifyContent(FlexAlign.Start)\n      .padding(16)\n    }\n    .backgroundColor('#f1f3f5')\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@Builder\nfunction Noop() {\n}\n\n@Component\nexport struct VCard {\n  @Prop\n  title: ResourceStr;\n  @BuilderParam\n  content: () => void = Noop;\n\n  build() {\n    Column({ space: 8 }) {\n      if (this.title) {\n        Text(this.title)\n          .maxLines(1)\n          .textOverflow({ overflow: TextOverflow.Ellipsis })\n          .constraintSize({ maxWidth: '80%' })\n      }\n      this.content()\n    }\n    .backgroundColor(Color.White)\n    .borderRadius(8)\n    .padding(8)\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(115071)/* ["default"] */.A) + "",
        width: "389",
        height: "744"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例-2单选的胶囊型分段按钮",
      children: "示例 2（单选的胶囊型分段按钮）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例介绍单选胶囊型分段按钮的基本用法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CapsuleSegmentButtonV2, SegmentButtonV2Items } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct CapsuleSegmentButtonV2Example {\n  @Local textItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    // 设置分段按钮选项文本。\n    { text: '手机' },\n    { text: '平板' },\n    { text: '2in1' },\n    { text: '智能穿戴' },\n  ]);\n  @Local textSelectedIndex: number = 0;\n  @Local imageItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    // 设置分段按钮选项图标。\n    { icon: $r('sys.media.ohos_ic_public_device_phone') },\n    { icon: $r('sys.media.ohos_ic_public_device_pad') },\n    { icon: $r('sys.media.ohos_ic_public_device_matebook') },\n    { icon: $r('sys.media.ohos_ic_public_device_watch') },\n  ]);\n  @Local imageSelectedIndex: number = 0;\n  @Local symbolItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    // 分段按钮选项图标，Symbol类型。\n    { symbol: $r('sys.symbol.phone') },\n    { symbol: $r('sys.symbol.pad') },\n    { symbol: $r('sys.symbol.matebook') },\n    { symbol: $r('sys.symbol.watch') },\n  ]);\n  @Local symbolSelectedIndex: number = 0;\n  @Local hybridItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    { text: '手机', symbol: $r('sys.symbol.phone') },\n    { text: '平板', symbol: $r('sys.symbol.pad') },\n    { text: '2in1', symbol: $r('sys.symbol.matebook') },\n    { text: '智能穿戴', symbol: $r('sys.symbol.watch') },\n  ]);\n  @Local hybridSelectedIndex: number = 0;\n  @Local freeItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    { text: '年' },\n    { text: '月' },\n    { text: '周' },\n    { text: '日' },\n    { icon: $r('sys.media.ohos_ic_public_search_filled') },\n  ]);\n  @Local freeSelectedIndex: number = 0;\n\n  build() {\n    Scroll() {\n      Column({ space: 12 }) {\n        VCard({ title: '纯文本选项' }) {\n          CapsuleSegmentButtonV2({\n            items: this.textItems,\n            selectedIndex: this.textSelectedIndex!!,\n          })\n        }\n\n        VCard({ title: '纯图标选项（Image）' }) {\n          CapsuleSegmentButtonV2({\n            items: this.imageItems,\n            selectedIndex: this.imageSelectedIndex!!,\n          })\n        }\n\n        VCard({ title: '纯图标选项（Symbol）' }) {\n          CapsuleSegmentButtonV2({\n            items: this.symbolItems,\n            selectedIndex: this.symbolSelectedIndex!!,\n          })\n        }\n\n        VCard({ title: '图文混合选项' }) {\n          CapsuleSegmentButtonV2({\n            items: this.hybridItems,\n            selectedIndex: this.hybridSelectedIndex!!,\n          })\n        }\n\n        VCard({ title: '自由选项' }) {\n          CapsuleSegmentButtonV2({\n            items: this.freeItems,\n            selectedIndex: this.freeSelectedIndex!!,\n          })\n        }\n      }\n      .constraintSize({ minHeight: '100%' })\n      .justifyContent(FlexAlign.Start)\n      .padding(16)\n    }\n    .backgroundColor('#f1f3f5')\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@Builder\nfunction Noop() {\n}\n\n@Component\nexport struct VCard {\n  @Prop\n  title: ResourceStr;\n  @BuilderParam\n  content: () => void = Noop;\n\n  build() {\n    Column({ space: 8 }) {\n      // 判断title是否存在，不存在不显示。\n      if (this.title) {\n        Text(this.title)\n          .maxLines(1)\n          .textOverflow({ overflow: TextOverflow.Ellipsis })\n          .constraintSize({ maxWidth: '80%' })\n      }\n      this.content()\n    }\n    .backgroundColor(Color.White)\n    .borderRadius(8)\n    .padding(8)\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(7382)/* ["default"] */.A) + "",
        width: "352",
        height: "701"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例-3多选的胶囊型分段按钮",
      children: "示例 3（多选的胶囊型分段按钮）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例介绍多选胶囊型分段按钮的基本用法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { MultiCapsuleSegmentButtonV2, SegmentButtonV2Items } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct MultiCapsuleSegmentButtonV2Example {\n  @Local textItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    // 设置分段按钮选项文本。\n    { text: '手机' },\n    { text: '平板' },\n    { text: '2in1' },\n    { text: '智能穿戴' },\n  ]);\n  @Local textSelectedIndexes: number[] = [0];\n  @Local imageItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    // 设置分段按钮选项图标。\n    { icon: $r('sys.media.ohos_ic_public_device_phone') },\n    { icon: $r('sys.media.ohos_ic_public_device_pad') },\n    { icon: $r('sys.media.ohos_ic_public_device_matebook') },\n    { icon: $r('sys.media.ohos_ic_public_device_watch') },\n  ]);\n  @Local imageSelectedIndexes: number[] = [0];\n  @Local symbolItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    // 分段按钮选项图标，Symbol类型。\n    { symbol: $r('sys.symbol.phone') },\n    { symbol: $r('sys.symbol.pad') },\n    { symbol: $r('sys.symbol.matebook') },\n    { symbol: $r('sys.symbol.watch') },\n  ]);\n  @Local symbolSelectedIndexes: number[] = [0];\n  @Local hybridItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    { text: '手机', symbol: $r('sys.symbol.phone') },\n    { text: '平板', symbol: $r('sys.symbol.pad') },\n    { text: '2in1', symbol: $r('sys.symbol.matebook') },\n    { text: '智能穿戴', symbol: $r('sys.symbol.watch') },\n  ]);\n  @Local hybridSelectedIndexes: number[] = [0];\n  @Local freeItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    { text: '年' },\n    { text: '月' },\n    { text: '周' },\n    { text: '日' },\n    { icon: $r('sys.media.ohos_ic_public_search_filled') },\n  ]);\n  @Local freeSelectedIndexes: number[] = [0];\n\n  build() {\n    Scroll() {\n      Column({ space: 12 }) {\n        VCard({ title: '纯文本选项' }) {\n          MultiCapsuleSegmentButtonV2({\n            items: this.textItems,\n            selectedIndexes: this.textSelectedIndexes!!,\n          })\n        }\n\n        VCard({ title: '纯图标选项（Image）' }) {\n          MultiCapsuleSegmentButtonV2({\n            items: this.imageItems,\n            selectedIndexes: this.imageSelectedIndexes!!,\n          })\n        }\n\n        VCard({ title: '纯图标选项（Symbol）' }) {\n          MultiCapsuleSegmentButtonV2({\n            items: this.symbolItems,\n            selectedIndexes: this.symbolSelectedIndexes!!,\n          })\n        }\n\n        VCard({ title: '图文混合选项' }) {\n          MultiCapsuleSegmentButtonV2({\n            items: this.hybridItems,\n            selectedIndexes: this.hybridSelectedIndexes!!,\n          })\n        }\n\n        VCard({ title: '自由选项' }) {\n          MultiCapsuleSegmentButtonV2({\n            items: this.freeItems,\n            selectedIndexes: this.freeSelectedIndexes!!,\n          })\n        }\n      }\n      .constraintSize({ minHeight: '100%' })\n      .justifyContent(FlexAlign.Start)\n      .padding(16)\n    }\n    .backgroundColor('#f1f3f5')\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@Builder\nfunction Noop() {\n}\n\n@Component\nexport struct VCard {\n  @Prop\n  title: ResourceStr;\n  @BuilderParam\n  content: () => void = Noop;\n\n  build() {\n    Column({ space: 8 }) {\n      // 判断title是否存在，不存在不显示。\n      if (this.title) {\n        Text(this.title)\n          .maxLines(1)\n          .textOverflow({ overflow: TextOverflow.Ellipsis })\n          .constraintSize({ maxWidth: '80%' })\n      }\n      this.content()\n    }\n    .backgroundColor(Color.White)\n    .borderRadius(8)\n    .padding(8)\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(193538)/* ["default"] */.A) + "",
        width: "408",
        height: "562"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4分段按钮modifier的基本用法",
      children: "示例4（分段按钮Modifier的基本用法）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例介绍页签型分段按钮，单选的胶囊型分段按钮，多选的胶囊型分段按钮Modifier的基本用法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  SegmentButtonV2Items,\n  TabSegmentButtonV2,\n  CapsuleSegmentButtonV2,\n  MultiCapsuleSegmentButtonV2,\n  TextModifier,\n  ImageModifier,\n  SymbolGlyphModifier\n} from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct SegmentButtonV2Example {\n  @Local textItems: SegmentButtonV2Items = new SegmentButtonV2Items([\n    { text: '手机', textModifier: new TextModifier().fontSize(20) }, // textModifier: 分段按钮选项文本属性样式修改器。\n    { text: '平板' },\n    // iconModifier: 修改分段按钮选项图片类型的图标属性样式。\n    { icon: $r('sys.media.ohos_ic_public_device_phone'), iconModifier: new ImageModifier().height(17).width(17) },\n    { icon: $r('sys.media.ohos_ic_public_device_pad') },\n    // symbolModifier: 分段按钮选项Symbol类型图标属性样式修改器。\n    { symbol: $r('sys.symbol.phone'), symbolModifier: new SymbolGlyphModifier().fontColor([Color.Pink]) },\n    { symbolModifier: new SymbolGlyphModifier($r('sys.symbol.pad')).fontColor([Color.Orange]) },\n    { symbol: $r('sys.symbol.matebook') },\n  ]);\n  @Local textSelectedIndex: number = 0;\n  @Local freeSelectedIndex: number[] = [0];\n\n  build() {\n    Column() {\n      VCard({ title: 'TabSegmentButtonV2' }) {\n        TabSegmentButtonV2({\n          items: this.textItems,\n          selectedIndex: this.textSelectedIndex!!,\n        })\n      }\n\n      VCard({ title: 'CapsuleSegmentButtonV2' }) {\n        CapsuleSegmentButtonV2({\n          items: this.textItems,\n          selectedIndex: this.textSelectedIndex!!,\n        })\n      }\n\n      VCard({ title: 'MultiCapsuleSegmentButtonV2' }) {\n        MultiCapsuleSegmentButtonV2({\n          items: this.textItems,\n          selectedIndexes: this.freeSelectedIndex!!,\n        })\n      }\n\n    }\n    .constraintSize({ minHeight: '100%' })\n    .justifyContent(FlexAlign.Start)\n    .padding(16)\n\n  }\n}\n\n@Builder\nfunction Noop() {\n}\n\n@Component\nexport struct VCard {\n  @Prop\n  title: ResourceStr;\n  @BuilderParam\n  content: () => void = Noop;\n\n  build() {\n    Column({ space: 8 }) {\n      // 判断title是否存在，不存在不显示。\n      if (this.title) {\n        Text(this.title)\n          .maxLines(1)\n          .textOverflow({ overflow: TextOverflow.Ellipsis })\n          .constraintSize({ maxWidth: '80%' })\n      }\n      this.content()\n    }\n    .backgroundColor(Color.White)\n    .borderRadius(8)\n    .padding(8)\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(201452)/* ["default"] */.A) + "",
        width: "596",
        height: "354"
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
430685(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
193538(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440171-29ad922705c87babf8a78aa9ad1521e8.gif");

},
401995(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
7382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800476-befc6ede35131b512566ec1453192a8f.gif");

},
542971(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
115071(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480125-b88d27db72e787666ef31a2cb752ad5e.gif");

},
201452(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960126-508e9764a36bbd1e71aaa9d271babb6d.png");

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