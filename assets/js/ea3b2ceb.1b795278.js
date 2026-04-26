"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["301703"], {
982143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_progressbutton_ohos_arkui_advanced_progressbutton_md_ea3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-system-preset-ui-component-library-ohos-arkui-advanced-progressbutton-ohos-arkui-advanced-progressbutton-md-ea3.json
var site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_progressbutton_ohos_arkui_advanced_progressbutton_md_ea3_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbutton/ohos-arkui-advanced-progressbutton","title":"ProgressButton","description":"文本下载按钮，可显示具体下载进度。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbutton/ohos-arkui-advanced-progressbutton.md","sourceDirName":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbutton","slug":"/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbutton/ohos-arkui-advanced-progressbutton","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbutton/ohos-arkui-advanced-progressbutton","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"ProgressButton","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-progressbutton","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-progressbutton"},"sidebar":"ref","previous":{"title":"Popup","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-popup/ohos-arkui-advanced-popup"},"next":{"title":"ProgressButtonV2","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbuttonv2/ohos-arkui-advanced-progressbuttonv2"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-progressbutton/ohos-arkui-advanced-progressbutton.md


const frontMatter = {
	title: 'ProgressButton',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-progressbutton',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-progressbutton'
};
const contentTitle = 'ProgressButton';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "ProgressButton",
  "id": "progressbutton-1",
  "level": 2
}, {
  "value": "ProgressButtonColorOptions18+",
  "id": "progressbuttoncoloroptions18",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（进度条下载按钮）",
  "id": "示例1进度条下载按钮",
  "level": 3
}, {
  "value": "示例2（自定义颜色按钮）",
  "id": "示例2自定义颜色按钮",
  "level": 3
}, {
  "value": "示例3（自定义圆角按钮）",
  "id": "示例3自定义圆角按钮",
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
        id: "progressbutton",
        children: "ProgressButton"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本下载按钮，可显示具体下载进度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(258337)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件仅可在Stage模型下使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果ProgressButton设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
          children: "通用属性"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
          children: "通用事件"
        }), "，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到ProgressButton本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议ProgressButton设置通用属性和通用事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ProgressButton } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progressbutton-1",
      children: "ProgressButton"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ProgressButton({progress: number, content: ResourceStr, progressButtonWidth?: Length, clickCallback: () => void, enable: boolean, colorOptions?: ProgressButtonColorOptions, progressButtonRadius?: LengthMetrics})"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@Component"]
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
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下载按钮的当前进度值。  取值范围：[0,100]。设置小于0的数值时置为0，设置大于100的数值时置为100。  默认值：0  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下载按钮的文本。  默认值：空字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：最长显示组件宽度，超出部分用省略号代替。从API version 20开始，支持Resource类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "progressButtonWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下载按钮的宽度，单位vp。  取值范围：大于等于44vp。  默认值：44vp。当取值为非Resource类型且小于默认值或取值为非法值时，识别值为默认值。当取值为Resource类型且小于默认值时识别为默认值，为非法值时下载按钮的宽度显示为容器宽度的100%。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clickCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下载按钮的点击回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下载按钮是否可以点击。  true：可以点击。  false：不可点击。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "colorOptions18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#progressbuttoncoloroptions18",
              children: "ProgressButtonColorOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下载按钮颜色。用于自定义按钮各部分的颜色（进度条、描边、文本、背景）。需要自定义颜色时传入此参数，不传入时使用系统默认配色方案。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下载按钮的圆角（不支持百分比百分比设置）。  取值范围：[0, height/2]  默认值：height/2  设置值小于0时按照0处理，设置其他非法数值时，按照默认值处理。当直接入参为undefined时，按照默认值处理，入参为LengthMetrics.vp时，建议传入具体数值，传入null/undefined会导致显示异常。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "progressbuttoncoloroptions18",
      children: "ProgressButtonColorOptions18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载按钮颜色选项"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮文本颜色。  默认值：系统默认值（#CE000000）"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮背景色。  默认值：$r('sys.color.ohos_id_color_foreground_contrary')"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1进度条下载按钮",
      children: "示例1（进度条下载按钮）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了一个简单的带加载进度的文本下载按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ProgressButton } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State progressIndex: number = 0;\n  @State textState: string = '下载';\n  @State buttonWidth: number = 200;\n  @State isRunning: boolean = false;\n  @State enableState: boolean = true;\n\n  build() {\n    Column() {\n      Scroll() {\n        Column({ space: 20 }) {\n          ProgressButton({\n            progress: this.progressIndex,\n            progressButtonWidth: this.buttonWidth,\n            content: this.textState,\n            enable: this.enableState,\n            clickCallback: () => {\n              if (this.textState && !this.isRunning && this.progressIndex < 100) {\n                this.textState = '继续';\n              }\n              this.isRunning = !this.isRunning;\n              let timer = setInterval(() => {\n                if (this.isRunning) {\n                  if (this.progressIndex === 100) {\n                    clearInterval(timer);\n                  } else {\n                    this.progressIndex++;\n                    if (this.progressIndex === 100) {\n                      this.textState = '已完成';\n                      this.enableState = false;\n                    }\n                  }\n                } else {\n                  clearInterval(timer);\n                }\n              }, 20)\n            }\n          })\n        }.alignItems(HorizontalAlign.Center).width('100%').margin({ top: 20 })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(138425)/* ["default"] */.A) + "",
        width: "411",
        height: "130"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2自定义颜色按钮",
      children: "示例2（自定义颜色按钮）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了一个简单的自定义颜色的文本下载按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ProgressButton } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State progressIndex: number = 0;\n  @State textState: string = '下载';\n  @State buttonWidth: number = 200;\n  @State isRunning: boolean = false;\n  @State enableState: boolean = true;\n\n  build() {\n    Column() {\n      Scroll() {\n        Column({ space: 20 }) {\n          ProgressButton({\n            // 设置下载按钮颜色\n            colorOptions: {\n              progressColor: Color.Orange,\n              borderColor: Color.Black,\n              textColor: Color.Blue,\n              backgroundColor: Color.Pink\n            },\n            progress: this.progressIndex,\n            progressButtonWidth: this.buttonWidth,\n            content: this.textState,\n            enable: this.enableState,\n            clickCallback: () => {\n              if (this.textState && !this.isRunning && this.progressIndex < 100) {\n                this.textState = '继续';\n              }\n              this.isRunning = !this.isRunning;\n              let timer = setInterval(() => {\n                if (this.isRunning) {\n                  if (this.progressIndex === 100) {\n                    clearInterval(timer);\n                  } else {\n                    this.progressIndex++;\n                    if (this.progressIndex === 100) {\n                      this.textState = '已完成';\n                      this.enableState = false;\n                    }\n                  }\n                } else {\n                  clearInterval(timer);\n                }\n              }, 20)\n            }\n          })\n        }.alignItems(HorizontalAlign.Center).width('100%').margin({ top: 20 })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(455936)/* ["default"] */.A) + "",
        width: "354",
        height: "80"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3自定义圆角按钮",
      children: "示例3（自定义圆角按钮）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了一个简单的自定义圆角的文本下载按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ProgressButton, LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State progressIndex: number = 0;\n  @State textState: string = '下载';\n  @State buttonWidth: number = 200;\n  @State isRunning: boolean = false;\n  @State enableState: boolean = true;\n\n  build() {\n    Column() {\n      Scroll() {\n        Column({ space: 20 }) {\n          ProgressButton({\n            progressButtonRadius: LengthMetrics.vp(8), // 自定义圆角值为8vp\n            progress: this.progressIndex,\n            progressButtonWidth: this.buttonWidth,\n            content: this.textState,\n            enable: this.enableState,\n            clickCallback: () => {\n              if (this.textState && !this.isRunning && this.progressIndex < 100) {\n                this.textState = '继续';\n              }\n              this.isRunning = !this.isRunning;\n              let timer = setInterval(() => {\n                if (this.isRunning) {\n                  if (this.progressIndex === 100) {\n                    clearInterval(timer);\n                  } else {\n                    this.progressIndex++;\n                    if (this.progressIndex === 100) {\n                      this.textState = '已完成';\n                      this.enableState = false;\n                    }\n                  }\n                } else {\n                  clearInterval(timer);\n                }\n              }, 20)\n            }\n          })\n        }.alignItems(HorizontalAlign.Center).width('100%').margin({ top: 20 })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(109720)/* ["default"] */.A) + "",
        width: "355",
        height: "68"
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
455936(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
109720(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
258337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
138425(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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