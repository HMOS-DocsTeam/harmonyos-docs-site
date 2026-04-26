"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["535639"], {
123396(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_progressbuttonv_2_ohos_arkui_advanced_progressbuttonv_2_md_83a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-system-preset-ui-component-library-ohos-arkui-advanced-progressbuttonv-2-ohos-arkui-advanced-progressbuttonv-2-md-83a.json
var site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_progressbuttonv_2_ohos_arkui_advanced_progressbuttonv_2_md_83a_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbuttonv2/ohos-arkui-advanced-progressbuttonv2","title":"ProgressButtonV2","description":"文本下载按钮，可显示具体的下载进度。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbuttonv2/ohos-arkui-advanced-progressbuttonv2.md","sourceDirName":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbuttonv2","slug":"/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbuttonv2/ohos-arkui-advanced-progressbuttonv2","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbuttonv2/ohos-arkui-advanced-progressbuttonv2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"ProgressButtonV2","sidebar_position":17,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-progressbuttonv2","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-progressbuttonv2"},"sidebar":"ref","previous":{"title":"ProgressButton","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbutton/ohos-arkui-advanced-progressbutton"},"next":{"title":"SegmentButton","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-segmentbutton/ohos-arkui-advanced-segmentbutton"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbuttonv2/ohos-arkui-advanced-progressbuttonv2.md


const frontMatter = {
	title: 'ProgressButtonV2',
	sidebar_position: 17,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-progressbuttonv2',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-progressbuttonv2'
};
const contentTitle = 'ProgressButtonV2';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "ProgressButtonV2",
  "id": "progressbuttonv2-1",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "ClickCallback",
  "id": "clickcallback",
  "level": 2
}, {
  "value": "ProgressButtonV2Color",
  "id": "progressbuttonv2color",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-1",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "ProgressButtonV2ColorOptions",
  "id": "progressbuttonv2coloroptions",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
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
        id: "progressbuttonv2",
        children: "ProgressButtonV2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本下载按钮，可显示具体的下载进度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该组件基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86v2",
        children: "状态管理（V2）"
      }), "实现，相较于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86v1",
        children: "状态管理（V1）"
      }), "，状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组件层级。借助状态管理（V2），开发者可以通过该组件更灵活地控制文本下载按钮的数据和状态，实现更高效的用户界面刷新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(619545)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 18开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件仅可在Stage模型下使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果ProgressButtonV2设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
          children: "通用属性"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
          children: "通用事件"
        }), "，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到ProgressButtonV2本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议ProgressButtonV2设置通用属性和通用事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ColorMetrics, LengthMetrics, ProgressButtonV2,  ProgressButtonV2Color } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progressbuttonv2-1",
      children: "ProgressButtonV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ProgressButtonV2({progress: number, content: ResourceStr, progressButtonWidth?: LengthMetrics, onClicked: ClickCallback, isEnabled: boolean, colorOptions?: ProgressButtonColorOptions, progressButtonRadius?: LengthMetrics})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本下载按钮，可显示具体下载进度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@ComponentV2"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "progress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Require  @Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮的当前进度值。  取值范围：[0,100]。设置小于0的数值时置为0，设置大于100的数值置为100。  默认值：0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Require  @Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮的文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "progressButtonWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param  @Once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮的宽度。  默认值：44vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onClicked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#clickcallback",
              children: "ClickCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮的点击回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮是否可以点击。  true：可以点击。  false：不可点击。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "colorOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#progressbuttonv2color",
              children: "ProgressButtonV2Color"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载按钮颜色选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "progressButtonRadius18+"
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
            children: "下载按钮的圆角（不支持百分比设置）。  取值范围：[0, height/2]  默认值：height/2  设置非法数值时，按照默认值处理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "clickcallback",
      children: "ClickCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ClickCallback = () => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载按钮的点击回调。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progressbuttonv2color",
      children: "ProgressButtonV2Color"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载按钮颜色选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@ObservedV2"]
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
            children: "progressColor"
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
            children: "进度条颜色。  默认值：#330A59F7  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderColor"
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
            children: "按钮描边颜色。  默认值：#330A59F7  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textColor"
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
            children: "按钮文本颜色。  默认值：系统默认值，#CE000000  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundColor"
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
            children: "按钮背景颜色。  默认值：$r('sys.color.ohos_id_color_foreground_contrary')  装饰器类型：@Trace"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(options: ProgressButtonV2ColorOptions);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载按钮颜色选项构造函数。"
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
              href: "#progressbuttonv2coloroptions",
              children: "ProgressButtonV2ColorOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色彩信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progressbuttonv2coloroptions",
      children: "ProgressButtonV2ColorOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载按钮色彩信息选项。"
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
            children: "progressColor"
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
            children: "进度条颜色。  默认值：#330A59F7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderColor"
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
            children: "按钮描边颜色。  默认值：#330A59F7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textColor"
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
            children: "按钮文本颜色。  默认值：系统默认值(#CE000000)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundColor"
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
            children: "按钮背景颜色。  默认值：$r('sys.color.ohos_id_color_foreground_contrary')"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了一个简单的带加载进度的文本下载按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics, ProgressButtonV2 } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local progressIndex: number = 0;\n  @Local textState: string = '下载';\n  @Local buttonWidth: LengthMetrics = LengthMetrics.vp(200);\n  @Local isRunning: boolean = false;\n  @Local enableState: boolean = true;\n\n  build() {\n    Column() {\n      Scroll() {\n        Column({ space: 20 }) {\n          ProgressButtonV2({\n            progress: this.progressIndex,\n            progressButtonWidth: this.buttonWidth,\n            content: this.textState,\n            isEnabled: this.enableState,\n            onClicked: () => {\n              if (this.textState && !this.isRunning && this.progressIndex < 100) {\n                this.textState = '继续';\n              }\n              this.isRunning = !this.isRunning;\n              let timer = setInterval(() => {\n                if (this.isRunning) {\n                  if (this.progressIndex === 100) {\n                    clearInterval(timer);\n                  } else {\n                    this.progressIndex++;\n                    if (this.progressIndex === 100) {\n                      this.textState = '已完成';\n                      this.enableState = false;\n                    }\n                  }\n                } else {\n                  clearInterval(timer);\n                }\n              }, 20);\n            }\n          })\n        }.alignItems(HorizontalAlign.Center).width('100%').margin({ top: 20 });\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(261700)/* ["default"] */.A) + "",
        width: "411",
        height: "130"
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
261700(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
619545(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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