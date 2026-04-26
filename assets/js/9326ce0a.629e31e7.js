"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["612847"], {
239829(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_dialogv_2_ohos_arkui_advanced_dialogv_2_md_932_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-system-preset-ui-component-library-ohos-arkui-advanced-dialogv-2-ohos-arkui-advanced-dialogv-2-md-932.json
var site_docs_ref_arkui_api_arkui_declarative_comp_system_preset_ui_component_library_ohos_arkui_advanced_dialogv_2_ohos_arkui_advanced_dialogv_2_md_932_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-dialogv2/ohos-arkui-advanced-dialogv2","title":"DialogV2","description":"弹出框是一种模态窗口，通常用于在保持当前的上下文环境时，临时展示用户需关注的信息或待处理的操作，用户在模态弹出框内完成上述交互任务。模态弹出框需要用户进行交互才能够退出模态模式。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-dialogv2/ohos-arkui-advanced-dialogv2.md","sourceDirName":"arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-dialogv2","slug":"/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-dialogv2/ohos-arkui-advanced-dialogv2","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-dialogv2/ohos-arkui-advanced-dialogv2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"DialogV2","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-dialogv2","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-dialogv2"},"sidebar":"ref","previous":{"title":"DownloadFileButton","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-downloadfilebutton/ohos-arkui-advanced-downloadfilebutton"},"next":{"title":"EditableTitleBar","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-editabletitlebar/ohos-arkui-advanced-editabletitlebar"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-dialogv2/ohos-arkui-advanced-dialogv2.md


const frontMatter = {
	title: 'DialogV2',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-dialogv2',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-dialogv2'
};
const contentTitle = 'DialogV2';

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
  "value": "TipsDialogV2",
  "id": "tipsdialogv2",
  "level": 2
}, {
  "value": "AdvancedDialogV2OnCheckedChange",
  "id": "advanceddialogv2oncheckedchange",
  "level": 2
}, {
  "value": "SelectDialogV2",
  "id": "selectdialogv2",
  "level": 2
}, {
  "value": "ConfirmDialogV2",
  "id": "confirmdialogv2",
  "level": 2
}, {
  "value": "AlertDialogV2",
  "id": "alertdialogv2",
  "level": 2
}, {
  "value": "LoadingDialogV2",
  "id": "loadingdialogv2",
  "level": 2
}, {
  "value": "CustomContentDialogV2",
  "id": "customcontentdialogv2",
  "level": 2
}, {
  "value": "PopoverDialogV2OnVisibleChange",
  "id": "popoverdialogv2onvisiblechange",
  "level": 2
}, {
  "value": "PopoverDialogV2",
  "id": "popoverdialogv2",
  "level": 2
}, {
  "value": "PopoverDialogV2Options",
  "id": "popoverdialogv2options",
  "level": 2
}, {
  "value": "AdvancedDialogV2ButtonAction",
  "id": "advanceddialogv2buttonaction",
  "level": 2
}, {
  "value": "AdvancedDialogV2Button",
  "id": "advanceddialogv2button",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "AdvancedDialogV2ButtonOptions",
  "id": "advanceddialogv2buttonoptions",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（上图下文弹出框）",
  "id": "示例1上图下文弹出框",
  "level": 3
}, {
  "value": "示例2（纯列表弹出框）",
  "id": "示例2纯列表弹出框",
  "level": 3
}, {
  "value": "示例3（文本与勾选弹出框）",
  "id": "示例3文本与勾选弹出框",
  "level": 3
}, {
  "value": "示例4（纯文本弹出框）",
  "id": "示例4纯文本弹出框",
  "level": 3
}, {
  "value": "示例5（进度加载类弹出框）",
  "id": "示例5进度加载类弹出框",
  "level": 3
}, {
  "value": "示例6（自定义主题风格弹出框）",
  "id": "示例6自定义主题风格弹出框",
  "level": 3
}, {
  "value": "示例7（自定义内容弹出框）",
  "id": "示例7自定义内容弹出框",
  "level": 3
}, {
  "value": "示例8（跟手弹出框）",
  "id": "示例8跟手弹出框",
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
        id: "dialogv2",
        children: "DialogV2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹出框是一种模态窗口，通常用于在保持当前的上下文环境时，临时展示用户需关注的信息或待处理的操作，用户在模态弹出框内完成上述交互任务。模态弹出框需要用户进行交互才能够退出模态模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该组件基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86v2",
        children: "状态管理（V2）"
      }), "实现，相较于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86v1",
        children: "状态管理（V1）"
      }), "，状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组件层级。借助状态管理（V2），开发者可以通过该组件更灵活地控制弹出框的数据和状态，实现更高效的用户界面刷新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(47209)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 18开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件仅可在Stage模型下使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果DialogV2设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
          children: "通用属性"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
          children: "通用事件"
        }), "，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到DialogV2本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议DialogV2设置通用属性和通用事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TipsDialogV2, SelectDialogV2, ConfirmDialogV2, AlertDialogV2, LoadingDialogV2, CustomContentDialogV2, PopoverDialogV2 } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tipsdialogv2",
      children: "TipsDialogV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TipsDialogV2({imageRes: ResourceStr | PixelMap, imageSize?: SizeOptions, imageBorderColor: ColorMetrics, imageBorderWidth: LengthMetrics, title?: ResourceStr, content?: ResourceStr, checkTips?: ResourceStr, checked?: boolean, onCheckedChange?: AdvancedDialogV2OnCheckedChange, primaryButton?: AdvancedDialogV2Button, secondaryButton?: AdvancedDialogV2Button})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提示弹出框，即为带图形确认弹出框，必要时可通过图形化方式展现确认弹出框。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "imageRes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param  @Require"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#sizeoptions",
              children: "SizeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义图片尺寸。  默认值：64*64vp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageBorderColor"
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
            children: "图片描边颜色。  默认值：Color.Black"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageBorderWidth"
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
            children: "图片描边宽度。  默认无描边效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提示弹出框标题。  默认不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 标题超过两行会显示“...”。"]
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
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提示弹出框内容。  默认不显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "checkTips"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择框的提示内容。  默认不显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "checked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "checked为true时，表示选择框已选中。checked为false时，表示选择框未选中。  默认值：false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onCheckedChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#advanceddialogv2oncheckedchange",
              children: "AdvancedDialogV2OnCheckedChange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择框的选中状态改变事件。  默认无事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primaryButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#advanceddialogv2button",
              children: "AdvancedDialogV2Button"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提示弹出框左侧按钮。  默认不显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondaryButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#advanceddialogv2button",
              children: "AdvancedDialogV2Button"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提示弹出框右侧按钮。  默认不显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advanceddialogv2oncheckedchange",
      children: "AdvancedDialogV2OnCheckedChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type AdvancedDialogV2OnCheckedChange = (checked: boolean) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择框选中状态改变事件。"
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
            children: "checked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示选择框选中状态。  checked为true时，表示选择框已选中。checked为false时，表示选择框未选中。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selectdialogv2",
      children: "SelectDialogV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SelectDialogV2({title: ResourceStr, content?: ResourceStr, selectedIndex?: number, confirm?: AdvancedDialogV2Button, radioContent: SheetInfo[]})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择类弹出框，弹框中以列表或网格的形式提供可选的内容。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param  @Require"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选择弹出框标题。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 标题超过两行会显示“...”。"]
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
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择弹出框内容。默认不显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectedIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择弹出框的选中项。  默认值：-1，没有选中项。若设置数值不在取值范围，按没有选中项处理。  取值范围：小于选择弹出框的子项内容列表长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "confirm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#advanceddialogv2button",
              children: "AdvancedDialogV2Button"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择弹出框底部按钮。  默认不显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radioContent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-action-sheet/ts-methods-action-sheet#sheetinfo%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SheetInfo"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param  @Require"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择弹出框的子项内容列表，每个选择项支持设置文本和选中的回调事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "confirmdialogv2",
      children: "ConfirmDialogV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ConfirmDialogV2({title: ResourceStr, content?: ResourceStr, checkTips?: ResourceStr, checked?: boolean, onCheckedChange: AdvancedDialogV2OnCheckedChange, primaryButton?: AdvancedDialogV2Button, secondaryButton?: AdvancedDialogV2Button})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "信息确认类弹出框，操作未正确执行（如网络错误、电池电量过低），或未正确操作时（如指纹录入），反馈的错误或提示信息。"
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
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param  @Require"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确认弹出框标题。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 标题超过两行会显示“...”。"]
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
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确认弹出框内容。  默认不显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "checkTips"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "checkbox的提示内容。  默认不显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "checked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "checked为true时，表示checkbox已选中，为false时，表示未选中。  默认值：false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onCheckedChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#advanceddialogv2oncheckedchange",
              children: "AdvancedDialogV2OnCheckedChange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "checkbox的选中状态改变事件。  默认无事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primaryButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#advanceddialogv2button",
              children: "AdvancedDialogV2Button"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确认弹出框左侧按钮。  默认不显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondaryButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#advanceddialogv2button",
              children: "AdvancedDialogV2Button"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确认弹出框右侧按钮。  默认不显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alertdialogv2",
      children: "AlertDialogV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AlertDialogV2({primaryTitle?: ResourceStr, secondaryTitle?: ResourceStr, content: ResourceStr, primaryButton?: AdvancedDialogV2Button, secondaryButton?: AdvancedDialogV2Button})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作确认类弹出框。当触发一个将产生严重后果的不可逆操作时，如删除、重置、取消编辑、停止等，会触发该类弹出框提示。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "primaryTitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确认弹出框一级标题。  默认不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 标题超过两行会显示“...”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondaryTitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确认弹出框二级标题。  默认不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 标题超过两行会显示“...”。"]
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
            children: "@Param  @Require"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确认弹出框内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primaryButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#advanceddialogv2button",
              children: "AdvancedDialogV2Button"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确认弹出框左侧按钮。  默认不显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondaryButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#advanceddialogv2button",
              children: "AdvancedDialogV2Button"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确认弹出框右侧按钮。  默认不显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "loadingdialogv2",
      children: "LoadingDialogV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LoadingDialogV2({content?: ResourceStr})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进度加载类弹出框，操作正在执行时的提示信息。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["加载弹出框内容。  默认为空。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 内容超过十行会显示“...”。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customcontentdialogv2",
      children: "CustomContentDialogV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CustomContentDialogV2({contentBuilder: () => void, primaryTitle?: ResourceStr, secondaryTitle?: ResourceStr, contentAreaPadding?: LocalizedPadding, buttons?: AdvancedDialogV2Button[]})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义内容区弹出框，同时支持定义操作区按钮样式。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "contentBuilder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@BuilderParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primaryTitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹出框标题。  默认不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 标题超过两行会显示“...”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondaryTitle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹出框辅助文本。  默认不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 辅助文本超过两行会显示“...”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentAreaPadding"
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
            children: "弹出框内容区内边距。  默认不显示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttons"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#advanceddialogv2button",
              children: "AdvancedDialogV2Button"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框操作区按钮，最多支持4个按钮。  默认不显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "popoverdialogv2onvisiblechange",
      children: "PopoverDialogV2OnVisibleChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type PopoverDialogV2OnVisibleChange = (visible: boolean) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跟手弹出框显示状态改变事件。"
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
            children: "visible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示跟手弹出框显示状态。  值为true时跟手弹出框显示，为false时隐藏。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "popoverdialogv2",
      children: "PopoverDialogV2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PopoverDialogV2({visible: boolean, $visible: PopoverDialogV2OnVisibleChange, popover: PopoverDialogV2Options, targetBuilder: CustomBuilder})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跟手弹出框，基于目标组件位置弹出，上文中的TipsDialogV2、SelectDialogV2、ConfirmDialogV2、AlertDialogV2、LoadingDialogV2、CustomContentDialogV2都可作为弹出框内容。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "visible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param  @Require"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟手弹出框的显示状态。  值为true时跟手弹出框显示，为false时隐藏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$visible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#popoverdialogv2onvisiblechange",
              children: "PopoverDialogV2OnVisibleChange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改跟手弹出框的显示状态时触发的回调函数，建议在visible后使用!!语法设置双向同步。  默认无事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "popover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#popoverdialogv2options",
              children: "PopoverDialogV2Options"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param  @Require"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置跟手弹出框的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetBuilder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@BuilderParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟手弹出框基于的目标组件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "popoverdialogv2options",
      children: "PopoverDialogV2Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跟手弹出框参数，用于设置弹出框内容、位置属性等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#custompopupoptions8%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "CustomPopupOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(759728)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "radius默认值为32vp。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advanceddialogv2buttonaction",
      children: "AdvancedDialogV2ButtonAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type AdvancedDialogV2ButtonAction = () => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹出框操作区按钮的点击事件类型。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advanceddialogv2button",
      children: "AdvancedDialogV2Button"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹出框操作区按钮。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@ObservedV2"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮的内容。  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#advanceddialogv2buttonaction",
              children: "AdvancedDialogV2ButtonAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮的点击事件。  默认无事件。  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "background"
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
            children: "按钮的背景。  默认值跟随buttonStyle。  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
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
            children: "按钮的字体颜色。  默认值跟随buttonStyle。  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#buttonstylemode11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ButtonStyleMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮的样式。  默认值：2in1设备为ButtonStyleMode.NORMAL，其他设备为ButtonStyleMode.TEXTUAL。  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "role"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#buttonrole12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ButtonRole"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮的角色。  默认值：ButtonRole.NORMAL  装饰器类型：@Trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultFocus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否为默认焦点。  true：按钮是默认焦点。  false：按钮不是默认焦点。  默认值：false  装饰器类型：@Trace"
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
            children: "是否可用。  true：按钮可用。  false：按钮不可用。  默认值：true  装饰器类型：@Trace"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(624957)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "buttonStyle和role优先级高于fontColor和background。如果buttonStyle和role设置的是默认值，那么fontColor和background可生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若同时给多个按钮设置defaultFocus，那么默认焦点为设置defaultFocus按钮显示顺序的第一个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(options: AdvancedDialogV2ButtonOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AdvancedDialogV2Button的构造函数。"
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#advanceddialogv2buttonoptions",
              children: "AdvancedDialogV2ButtonOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮配置信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advanceddialogv2buttonoptions",
      children: "AdvancedDialogV2ButtonOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于初始化AdvancedDialogV2Button对象。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮的内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#advanceddialogv2buttonaction",
              children: "AdvancedDialogV2ButtonAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮的点击事件。  默认无事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "background"
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
            children: "按钮的背景。  默认值跟随buttonStyle。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
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
            children: "按钮的字体颜色。  默认值跟随buttonStyle。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#buttonstylemode11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ButtonStyleMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮的样式。  默认值：2in1设备为ButtonStyleMode.NORMAL，其他设备为ButtonStyleMode.TEXTUAL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "role"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#buttonrole12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ButtonRole"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮的角色。  默认值：ButtonRole.NORMAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultFocus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否为默认焦点。  true：按钮是默认焦点。  false：按钮不是默认焦点。  默认值：false"
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
            children: "是否可用。  true：按钮可用。  false：按钮不可用。  默认值：true"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1上图下文弹出框",
      children: "示例1（上图下文弹出框）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上图下文弹出框，包含imageRes、content等内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TipsDialogV2, AdvancedDialogV2Button, UIContext  } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local checked: boolean = false;\n\n  @Builder\n  dialogBuilder(): void {\n    TipsDialogV2({\n      imageRes: $r('sys.media.ohos_ic_public_voice'),\n      content: '想要卸载这个APP嘛?',\n      title: 'TipsDialogV2',\n      checkTips: '不再提示',\n      checked: this.checked,\n      primaryButton: new AdvancedDialogV2Button({\n        content: '取消',\n        action: () => {\n          console.info('Callback when the first button is clicked');\n        },\n      }),\n      secondaryButton: new AdvancedDialogV2Button({\n        content: '删除',\n        role: ButtonRole.ERROR,\n        action: () => {\n          console.info('Callback when the second button is clicked');\n        }\n      }),\n      onCheckedChange: (checked: boolean) => {\n        console.info('Callback when the checkbox is clicked');\n        this.checked = checked;\n      }\n    })\n  }\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          Button(\"打开TipsDialogV2弹出框\")\n            .width(96)\n            .height(40)\n            .onClick(() => {\n              let uiContext: UIContext = this.getUIContext();\n              uiContext.getPromptAction().openCustomDialog({\n                builder: () => {\n                  this.dialogBuilder();\n                },\n              });\n            })\n        }.margin({ bottom: 300 })\n      }.align(Alignment.Bottom)\n      .width('100%').height('100%')\n    }\n    .backgroundImageSize({ width: '100%', height: '100%' })\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(101513)/* ["default"] */.A) + "",
        width: "456",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2纯列表弹出框",
      children: "示例2（纯列表弹出框）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "纯列表弹出框，包含selectedIndex、radioContent等内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SelectDialogV2, AdvancedDialogV2Button ,UIContext  } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local radioIndex: number = 0;\n  @Builder\n  dialogBuilder(): void {\n    SelectDialogV2({\n      title: '文本标题',\n      selectedIndex: this.radioIndex,\n      confirm: new AdvancedDialogV2Button({\n        content: '取消',\n        action: () => {},\n      }),\n      radioContent: [\n        {\n          title: '文本文本文本文本文本',\n          action: () => {\n            this.radioIndex = 0\n          }\n        },\n        {\n          title: '文本文本文本文本',\n          action: () => {\n            this.radioIndex = 1\n          }\n        },\n        {\n          title: '文本文本文本文本',\n          action: () => {\n            this.radioIndex = 2\n          }\n        },\n      ]\n    })\n  }\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          Button(\"纯列表弹出框\")\n            .width(96)\n            .height(40)\n            .onClick(() => {\n              let uiContext: UIContext = this.getUIContext();\n              uiContext.getPromptAction().openCustomDialog({\n                builder: () => {\n                  this.dialogBuilder();\n                }\n              })\n            })\n        }.margin({ bottom: 300 })\n      }.align(Alignment.Bottom)\n      .width('100%').height('100%')\n    }\n    .backgroundImageSize({ width: '100%', height: '100%' })\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(280214)/* ["default"] */.A) + "",
        width: "355",
        height: "269"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3文本与勾选弹出框",
      children: "示例3（文本与勾选弹出框）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本与勾选弹出框，包含content、checkTips等内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ConfirmDialogV2, AdvancedDialogV2Button, UIContext  } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local checked: boolean = false;\n\n  @Builder\n  dialogBuilder(): void {\n    ConfirmDialogV2({\n      title: '文本标题',\n      content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',\n      checked: this.checked,\n      checkTips: '禁止后不再提示',\n      primaryButton: new AdvancedDialogV2Button({\n        content: '禁止',\n        action: () => {\n          console.info('Callback when the primary button is clicked');\n        },\n      }),\n      secondaryButton: new AdvancedDialogV2Button({\n        content: '允许',\n        action: () => {\n          this.checked = false\n          console.info('Callback when the second button is clicked');\n        }\n      }),\n      onCheckedChange: (checked: boolean) => {\n        console.info('Callback when the checkbox is clicked');\n        this.checked = checked;\n      },\n    })\n  }\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          Button(\"打开ConfirmDialogV2弹出框\")\n            .width(96)\n            .height(40)\n            .onClick(() => {\n              let uiContext: UIContext = this.getUIContext();\n              uiContext.getPromptAction().openCustomDialog({\n                builder: () => {\n                  this.dialogBuilder();\n                },\n                alignment: DialogAlignment.Bottom\n              });\n            })\n        }.margin({ bottom: 300 })\n      }.align(Alignment.Bottom)\n      .width('100%').height('100%')\n    }\n    .backgroundImageSize({ width: '100%', height: '100%' })\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(474487)/* ["default"] */.A) + "",
        width: "414",
        height: "255"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4纯文本弹出框",
      children: "示例4（纯文本弹出框）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "纯文本弹出框，包含primaryTitle、secondaryTitle、content等内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AlertDialogV2, AdvancedDialogV2Button, UIContext  } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Builder\n  dialogBuilder(): void {\n    AlertDialogV2({\n      primaryTitle: '弹框一级标题',\n      secondaryTitle: '弹框二级标题',\n      content: '文本文本文本文本文本',\n      primaryButton: new AdvancedDialogV2Button({\n        content: '取消',\n        action: () => {\n          console.info('Callback when the primary button is clicked');\n        },\n      }),\n      secondaryButton: new AdvancedDialogV2Button({\n        content: '确认',\n        role: ButtonRole.ERROR,\n        action: () => {\n          console.info('Callback when the second button is clicked');\n        }\n      }),\n    })\n  }\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          Button(\"打开AlertDialogV2弹出框\")\n            .width(96)\n            .height(40)\n            .onClick(() => {\n              let uiContext: UIContext = this.getUIContext();\n              uiContext.getPromptAction().openCustomDialog({\n                builder: () => {\n                  this.dialogBuilder();\n                }\n              });\n            })\n        }.margin({ bottom: 300 })\n      }.align(Alignment.Bottom)\n      .width('100%').height('100%')\n    }\n    .backgroundImageSize({ width: '100%', height: '100%' })\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(551573)/* ["default"] */.A) + "",
        width: "480",
        height: "206"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5进度加载类弹出框",
      children: "示例5（进度加载类弹出框）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进度加载类弹出框，包含content等内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LoadingDialogV2, UIContext  } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Builder\n  dialogBuilder(): void {\n    LoadingDialogV2({\n      content: '文本文本文本文本文本...',\n    })\n  }\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          Button(\"打开LoadingDialogV2弹出框\")\n            .width(96)\n            .height(40)\n            .onClick(() => {\n              let uiContext: UIContext = this.getUIContext();\n              uiContext.getPromptAction().openCustomDialog({\n                builder: () => {\n                  this.dialogBuilder();\n                }\n              });\n            })\n        }.margin({ bottom: 300 })\n      }.align(Alignment.Bottom)\n      .width('100%').height('100%')\n    }\n    .backgroundImageSize({ width: '100%', height: '100%' })\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(822934)/* ["default"] */.A) + "",
        width: "470",
        height: "125"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6自定义主题风格弹出框",
      children: "示例6（自定义主题风格弹出框）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义主题风格弹出框，包含content、theme等内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CustomColors, CustomTheme, LoadingDialogV2, UIContext  } from '@kit.ArkUI';\n\nclass CustomThemeImpl implements CustomTheme {\n  colors?: CustomColors;\n\n  constructor(colors: CustomColors) {\n    this.colors = colors;\n  }\n}\n\nclass CustomThemeColors implements CustomColors {\n  fontPrimary = '#ffd0a300';\n  iconSecondary = '#ffd000cd';\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Builder\n  dialogBuilder(): void {\n    WithTheme({ theme: new CustomThemeImpl(new CustomThemeColors()) }) {\n      LoadingDialogV2({\n        content: '文本文本文本文本文本...',\n      })\n    }\n  }\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          Button(\"打开LoadingDialogV2弹出框\")\n            .width(96)\n            .height(40)\n            .onClick(() => {\n              let uiContext: UIContext = this.getUIContext();\n              uiContext.getPromptAction().openCustomDialog({\n                builder: () => {\n                  this.dialogBuilder();\n                }\n              });\n            })\n        }.margin({ bottom: 300 })\n      }.align(Alignment.Bottom)\n      .width('100%').height('100%')\n    }\n    .backgroundImageSize({ width: '100%', height: '100%' })\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(864522)/* ["default"] */.A) + "",
        width: "456",
        height: "141"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7自定义内容弹出框",
      children: "示例7（自定义内容弹出框）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持自定义内容弹出框，包含contentBuilder、buttons等内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CustomContentDialogV2, AdvancedDialogV2Button, UIContext  } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Builder\n  dialogBuilder(): void {\n    CustomContentDialogV2({\n      primaryTitle: '标题',\n      secondaryTitle: '辅助文本',\n      contentBuilder: () => {\n        this.buildContent();\n      },\n      buttons: [\n        new AdvancedDialogV2Button({\n          content: '按钮1', buttonStyle: ButtonStyleMode.TEXTUAL,\n          action: () => {\n            console.info('Callback when the button is clicked');\n          }\n        }),\n        new AdvancedDialogV2Button({\n          content: '按钮2', buttonStyle: ButtonStyleMode.TEXTUAL, role: ButtonRole.ERROR,\n        })\n      ],\n    })\n  }\n\n  build() {\n    Column() {\n      Button(\"打开CustomContentDialogV2弹出框\")\n        .onClick(() => {\n            let uiContext: UIContext = this.getUIContext();\n            uiContext.getPromptAction().openCustomDialog({\n            builder: () => {\n              this.dialogBuilder();\n            }\n          })\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n\n  @Builder\n  buildContent(): void {\n    Column() {\n      Text('内容区')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(800037)/* ["default"] */.A) + "",
        width: "458",
        height: "220"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8跟手弹出框",
      children: "示例8（跟手弹出框）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跟手弹出框（警告弹出框为例），包含visible、popover、targetBuilder等内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AlertDialogV2, PopoverDialogV2, PopoverDialogV2Options, AdvancedDialogV2Button} from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local isShow: boolean = false;\n  @Local popoverOptions: PopoverDialogV2Options = {\n    builder: () => {\n      this.dialogBuilder();\n    }\n  }\n\n  @Builder dialogBuilder() {\n    AlertDialogV2({\n      content: '跟手弹出框',\n      primaryButton: new AdvancedDialogV2Button({\n        content: '取消',\n        action: () => {\n          this.isShow = false;\n        },\n      }),\n      secondaryButton: new AdvancedDialogV2Button({\n        content: '确认',\n        action: () => {\n          this.isShow = false;\n        },\n      }),\n    });\n  }\n\n  @Builder buttonBuilder() {\n    Button('跟手弹出框目标组件').onClick(() => {\n      this.isShow = true;\n    });\n  }\n\n  build() {\n    Column() {\n      PopoverDialogV2({\n        visible: this.isShow!!,\n        popover: this.popoverOptions,\n        targetBuilder: () => {\n          this.buttonBuilder();\n        },\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(487705)/* ["default"] */.A) + "",
        width: "1260",
        height: "598"
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
474487(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800420-7fc1471d21b9470a0674b6a11294800b.png");

},
822934(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960070-819909a92d75a90ab793f6df1a99cf3e.gif");

},
280214(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480069-791ebcb2454ce16f95487646fbab7761.png");

},
800037(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800454-71f7b5bdd4df4412e36bd4ac2baf0b69.png");

},
551573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
487705(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440149-66d3581a45d253850c21b21f1dc5f0de.png");

},
864522(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
101513(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960102-24820630254ac09718814941312b0ea0.png");

},
624957(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
759728(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
47209(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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