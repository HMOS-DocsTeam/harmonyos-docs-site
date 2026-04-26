"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["76911"], {
313476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_dialog_boxes_ohos_arkui_advanced_dialog_ohos_arkui_advanced_dialog_md_17e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-dialog-boxes-ohos-arkui-advanced-dialog-ohos-arkui-advanced-dialog-md-17e.json
var site_docs_ref_arkui_api_arkui_declarative_comp_dialog_boxes_ohos_arkui_advanced_dialog_ohos_arkui_advanced_dialog_md_17e_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/dialog-boxes/ohos-arkui-advanced-dialog/ohos-arkui-advanced-dialog","title":"弹出框 (Dialog)","description":"弹出框是一种模态窗口，用于临时展示用户需关注的信息或待处理的操作，同时保持当前上下文环境。用户必须完成交互才能退出该模式。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/dialog-boxes/ohos-arkui-advanced-dialog/ohos-arkui-advanced-dialog.md","sourceDirName":"arkui-api/arkui-declarative-comp/dialog-boxes/ohos-arkui-advanced-dialog","slug":"/arkui-api/arkui-declarative-comp/dialog-boxes/ohos-arkui-advanced-dialog/ohos-arkui-advanced-dialog","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ohos-arkui-advanced-dialog/ohos-arkui-advanced-dialog","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"弹出框 (Dialog)","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-dialog","kit":"应用框架","last_updated":"2026-04-22","slug":"ohos-arkui-advanced-dialog"},"sidebar":"ref","previous":{"title":"文本滑动选择器弹窗 (TextPickerDialog)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-textpicker-dialog/ts-methods-textpicker-dialog"},"next":{"title":"FormLink","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/service-widgets/ts-container-formlink/ts-container-formlink"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/dialog-boxes/ohos-arkui-advanced-dialog/ohos-arkui-advanced-dialog.md


const frontMatter = {
	title: '弹出框 (Dialog)',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-dialog',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ohos-arkui-advanced-dialog'
};
const contentTitle = '弹出框 (Dialog)';

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
  "value": "TipsDialog",
  "id": "tipsdialog",
  "level": 2
}, {
  "value": "SelectDialog",
  "id": "selectdialog",
  "level": 2
}, {
  "value": "ConfirmDialog",
  "id": "confirmdialog",
  "level": 2
}, {
  "value": "AlertDialog",
  "id": "alertdialog",
  "level": 2
}, {
  "value": "LoadingDialog",
  "id": "loadingdialog",
  "level": 2
}, {
  "value": "CustomContentDialog12+",
  "id": "customcontentdialog12",
  "level": 2
}, {
  "value": "PopoverDialog14+",
  "id": "popoverdialog14",
  "level": 2
}, {
  "value": "ButtonOptions",
  "id": "buttonoptions",
  "level": 2
}, {
  "value": "PopoverOptions14+",
  "id": "popoveroptions14",
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
  "value": "示例7（自定义深浅色模式弹出框）",
  "id": "示例7自定义深浅色模式弹出框",
  "level": 3
}, {
  "value": "示例8（自定义内容弹出框）",
  "id": "示例8自定义内容弹出框",
  "level": 3
}, {
  "value": "示例9（跟手弹出框）",
  "id": "示例9跟手弹出框",
  "level": 3
}, {
  "value": "示例10（弹出框按钮设置默认获焦）",
  "id": "示例10弹出框按钮设置默认获焦",
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
    void: "void",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "弹出框-dialog",
        children: "弹出框 (Dialog)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹出框是一种模态窗口，用于临时展示用户需关注的信息或待处理的操作，同时保持当前上下文环境。用户必须完成交互才能退出该模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(998884)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件仅可在Stage模型下使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果Dialog设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
          children: "通用属性"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
          children: "通用事件"
        }), "，编译工具链会额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到Dialog本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议Dialog设置通用属性和通用事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TipsDialog, SelectDialog, ConfirmDialog, AlertDialog, LoadingDialog, CustomContentDialog } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tipsdialog",
      children: "TipsDialog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TipsDialog({controller: CustomDialogController, imageRes: ResourceStr | PixelMap, imageSize?: SizeOptions, title?: ResourceStr, content?: ResourceStr, checkTips?: ResourceStr, isChecked?: boolean, checkAction?: (isChecked: boolean) => void, onCheckedChange?: Callback<boolean>, primaryButton?: ButtonOptions, secondaryButton?: ButtonOptions, theme?: Theme | CustomTheme, themeColorMode?: ThemeColorMode})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提示弹出框，即为带图形确认弹出框，必要时可通过图形化方式展现确认弹出框。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@CustomDialog"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontroller",
              children: "CustomDialogController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提示弹出框控制器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 未使用@Require装饰，构造时不强制校验参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "imageRes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr12+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap12+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
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
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义图片尺寸。  默认值：64*64vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提示弹出框标题。  默认不设置或设置为undefined，弹出框标题不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 标题超过两行会显示“...”。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提示弹出框内容。  默认不设置或设置为undefined，弹出框内容不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["checkbox的提示内容。  默认不设置或设置为undefined，提示内容不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isChecked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["value为true时，表示checkbox已选中，value为false时，表示未选中。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "checkAction12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(isChecked: boolean) => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["checkbox的选中状态改变事件。isChecked为true时，表示checkbox已选中，isChecked为false时，表示checkbox未选中。现推荐使用onCheckedChange12+。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onCheckedChange12+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["checkbox的选中状态改变事件回调。回调参数类型为boolean，true表示checkbox已选中，false表示checkbox未选中。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primaryButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#buttonoptions",
              children: "ButtonOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提示弹出框左侧按钮。  默认不设置或设置为undefined，左侧按钮不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondaryButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#buttonoptions",
              children: "ButtonOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提示弹出框右侧按钮。  默认不设置或设置为undefined，右侧按钮不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#theme",
              children: "Theme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#customtheme",
              children: "CustomTheme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "themeColorMode12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-blur-style/ts-universal-attributes-foreground-blur-style#themecolormode%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ThemeColorMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义弹出框深浅色模式。  默认值：ThemeColorMode.SYSTEM  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selectdialog",
      children: "SelectDialog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SelectDialog({controller: CustomDialogController, title: ResourceStr, content?: ResourceStr, selectedIndex?: number, confirm?: ButtonOptions, radioContent: Array<SheetInfo>, theme?: Theme | CustomTheme, themeColorMode?: ThemeColorMode})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择类弹出框，弹框中以列表或网格的形式提供可选的内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@CustomDialog"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
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
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontroller",
              children: "CustomDialogController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选择弹出框控制器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 未使用@Require装饰，构造时不强制校验参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选择弹出框标题。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 标题超过两行会显示“...”。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选择弹出框内容。  默认不设置或设置为undefined，弹出框内容不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectedIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选择弹出框的选中项。  取值范围：大于等于-1的整数。  默认值：-1，没有选中项。若设置数值小于-1，按没有选中项处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "confirm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#buttonoptions",
              children: "ButtonOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选择弹出框底部按钮。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "radioContent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-action-sheet/ts-methods-action-sheet#sheetinfo%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SheetInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["选择弹出框的子项内容列表，每个选择项支持设置文本和选中的回调事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#theme",
              children: "Theme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#customtheme",
              children: "CustomTheme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "themeColorMode12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-blur-style/ts-universal-attributes-foreground-blur-style#themecolormode%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ThemeColorMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义弹出框深浅色模式。  默认值：ThemeColorMode.SYSTEM  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "confirmdialog",
      children: "ConfirmDialog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ConfirmDialog({controller: CustomDialogController, title: ResourceStr, content?: ResourceStr, checkTips?: ResourceStr, isChecked?: boolean, primaryButton?: ButtonOptions, secondaryButton?: ButtonOptions, theme?: Theme | CustomTheme, themeColorMode?: ThemeColorMode})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "信息确认类弹出框，操作未正确执行（如网络错误、电池电量过低），或未正确操作时（如指纹录入），反馈的错误或提示信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@CustomDialog"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontroller",
              children: "CustomDialogController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确认弹出框控制器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 未使用@Require装饰，构造时不强制校验参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确认弹出框标题。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 标题超过两行会显示“...”。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确认弹出框内容。  默认不设置或设置为undefined，确认弹出框内容不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["checkbox的提示内容。  默认不设置或设置为undefined，checkbox的提示内容不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isChecked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["value为true时，表示checkbox已选中，value为false时，表示未选中。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onCheckedChange12+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["checkbox的选中状态改变事件回调。回调参数类型为boolean，true表示checkbox已选中，false表示checkbox未选中。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primaryButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#buttonoptions",
              children: "ButtonOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确认弹出框左侧按钮。  默认不设置或设置为undefined，确认弹出框左侧按钮不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondaryButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#buttonoptions",
              children: "ButtonOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确认弹出框右侧按钮。  默认不设置或设置为undefined，确认弹出框右侧按钮不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#theme",
              children: "Theme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#customtheme",
              children: "CustomTheme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "themeColorMode12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-blur-style/ts-universal-attributes-foreground-blur-style#themecolormode%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ThemeColorMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义弹出框深浅色模式。  默认值：ThemeColorMode.SYSTEM  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alertdialog",
      children: "AlertDialog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AlertDialog({controller: CustomDialogController, primaryTitle?: ResourceStr, secondaryTitle?: ResourceStr, content: ResourceStr, primaryButton?: ButtonOptions, secondaryButton?: ButtonOptions, theme?: Theme | CustomTheme, themeColorMode?: ThemeColorMode})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作确认类弹出框，触发一个将产生严重后果的不可逆操作时，如删除、重置、取消编辑、停止等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@CustomDialog"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
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
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontroller",
              children: "CustomDialogController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确认弹出框控制器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 未使用@Require装饰，构造时不强制校验参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primaryTitle12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确认弹出框一级标题。  默认不设置或设置为undefined，确认弹出框一级标题不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 标题超过两行会显示“...”。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondaryTitle12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确认弹出框二级标题。  默认不设置或设置为undefined，确认弹出框二级标题不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 标题超过两行会显示“...”。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确认弹出框内容。  默认不设置或设置为undefined，确认弹出框内容不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "primaryButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#buttonoptions",
              children: "ButtonOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确认弹出框左侧按钮。  默认不设置或设置为undefined，确认弹出框左侧按钮不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "secondaryButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#buttonoptions",
              children: "ButtonOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["确认弹出框右侧按钮。  默认不设置或设置为undefined，确认弹出框右侧按钮不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#theme",
              children: "Theme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#customtheme",
              children: "CustomTheme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "themeColorMode12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-blur-style/ts-universal-attributes-foreground-blur-style#themecolormode%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ThemeColorMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义弹出框深浅色模式。  默认值：ThemeColorMode.SYSTEM  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "loadingdialog",
      children: "LoadingDialog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LoadingDialog({Controller: CustomDialogController, content?: ResourceStr, theme?: Theme | CustomTheme, themeColorMode?: ThemeColorMode})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进度加载类弹出框，用于显示操作执行中的提示信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@CustomDialog"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
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
            children: "Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontroller",
              children: "CustomDialogController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["加载弹出框控制器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 未使用@Require装饰，构造时不强制校验参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["加载弹出框内容。  默认不设置或设置为undefined，加载弹出框内容不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#theme",
              children: "Theme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#customtheme",
              children: "CustomTheme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "themeColorMode12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-blur-style/ts-universal-attributes-foreground-blur-style#themecolormode%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ThemeColorMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义弹出框深浅色模式。  默认值：ThemeColorMode.SYSTEM  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customcontentdialog12",
      children: "CustomContentDialog12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CustomContentDialog({controller: CustomDialogController, contentBuilder: () => void, primaryTitle?: ResourceStr, secondaryTitle?: ResourceStr, contentAreaPadding?: Padding, buttons?: ButtonOptions[], theme?: Theme | CustomTheme, themeColorMode?: ThemeColorMode})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义内容区弹出框，同时支持定义操作区按钮样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@CustomDialog"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontroller",
              children: "CustomDialogController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹出框控制器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 未使用@Require装饰，构造时不强制校验参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentBuilder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
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
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹出框标题。  默认不设置或设置为undefined，弹出框标题不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹出框辅助文本。  默认不设置或设置为undefined，弹出框辅助文本不显示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 辅助文本超过两行会显示“...”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "localizedContentAreaPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#localizedpadding12",
              children: "LocalizedPadding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框内容区内边距。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentAreaPadding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#padding",
              children: "Padding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框内容区内边距。设置了localizedContentAreaPadding属性时该属性不生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttons"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#buttonoptions",
              children: "ButtonOptions"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框操作区按钮，最多支持4个按钮。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#theme",
              children: "Theme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#customtheme",
              children: "CustomTheme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "themeColorMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-blur-style/ts-universal-attributes-foreground-blur-style#themecolormode%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ThemeColorMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义弹出框深浅色模式。  默认值：ThemeColorMode.SYSTEM"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(226889)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当弹框高度不足时，触发全局滚动的规格为contentBuilder被压缩，压缩至小于100vp时启动全局滚动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CustomContentDialog内容区的滚动需由开发者自定义，内容区自定义滚动必须配合属性nestedScroll，nestedScroll({ scrollForward: NestedScrollMode.PARALLEL, scrollBackward: NestedScrollMode.PARALLEL })"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "popoverdialog14",
      children: "PopoverDialog14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PopoverDialog({visible: boolean, popover: PopoverOptions, targetBuilder: Callback<void>})"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跟手弹出框，基于目标组件位置弹出，上文中的TipsDialog、SelectDialog、ConfirmDialog、AlertDialog、LoadingDialog、CustomContentDialog都可作为弹出框内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), "@Component"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "@Link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟手弹出框显示状态。value为true时，表示显示弹出框，value为false时，表示隐藏弹出框。  默认值为false，隐藏弹出框。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "popover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#popoveroptions14",
              children: "PopoverOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop  @Require"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置跟手弹出框的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targetBuilder"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#callback12",
              children: "Callback"
            }), (0,jsx_runtime.jsx)(_components.void, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Require  @BuilderParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟手弹出框基于的目标组件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buttonoptions",
      children: "ButtonOptions"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按钮的内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按钮的点击事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "background"
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
            children: ["按钮的背景色。  默认值跟随buttonStyle。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
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
            children: ["按钮的字体颜色。  默认值跟随buttonStyle。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonStyle12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#buttonstylemode11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ButtonStyleMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按钮的样式。  默认值：2in1设备为ButtonStyleMode.NORMAL，其他设备为ButtonStyleMode.TEXTUAL。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "role12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button#buttonrole12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ButtonRole"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按钮的角色。  默认值：ButtonRole.NORMAL  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "defaultFocus18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按钮是否设置默认焦点。  true：按钮是默认焦点。  false：按钮不是默认焦点。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(699381)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "buttonStyle和role优先级高于fontColor和background。当buttonStyle和role设置的是默认值时，fontColor和background生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若同时给多个按钮设置defaultFocus，则默认焦点为设置defaultFocus按钮中显示顺序的第一个按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "popoveroptions14",
      children: "PopoverOptions14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跟手弹出框参数，用于设置弹出框内容、位置属性等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#custompopupoptions8%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "CustomPopupOptions"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(966295)/* ["default"] */.A) + "",
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
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
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
      id: "示例1上图下文弹出框",
      children: "示例1（上图下文弹出框）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上图下文弹出框，包含imageRes、content等内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TipsDialog } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  dialogControllerImage: CustomDialogController = new CustomDialogController({\n    builder: TipsDialog({\n      imageRes: $r('sys.media.ohos_ic_public_voice'),\n      content: '想要卸载这个APP嘛?',\n      primaryButton: {\n        value: '取消',\n        action: () => {\n          console.info('Callback when the first button is clicked')\n        },\n      },\n      secondaryButton: {\n        value: '删除',\n        role: ButtonRole.ERROR,\n        action: () => {\n          console.info('Callback when the second button is clicked')\n        }\n      },\n      onCheckedChange: () => {\n        console.info('Callback when the checkbox is clicked')\n      }\n    }),\n  })\n\n  build() {\n    Row() {\n      Stack() {\n        Column(){\n          Button(\"上图下文弹出框\")\n            .width(96)\n            .height(40)\n            .onClick(() => {\n              this.dialogControllerImage.open()\n            })\n        }.margin({bottom: 300})\n      }.align(Alignment.Bottom)\n      .width('100%').height('100%')\n    }\n    .backgroundImageSize({ width: '100%', height: '100%' })\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(37071)/* ["default"] */.A) + "",
        width: "396",
        height: "216"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2纯列表弹出框",
      children: "示例2（纯列表弹出框）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "纯列表弹出框，包含selectedIndex、radioContent等内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SelectDialog } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  // 设置默认选中radio的index\n  radioIndex: number = 0;\n  dialogControllerList: CustomDialogController = new CustomDialogController({\n    builder: SelectDialog({\n      title: '文本标题',\n      selectedIndex: this.radioIndex,\n      confirm: {\n        value: '取消',\n        action: () => {},\n      },\n      radioContent: [\n        {\n          title: '文本文本文本文本文本',\n          action: () => {\n            this.radioIndex = 0\n          }\n        },\n        {\n          title: '文本文本文本文本',\n          action: () => {\n            this.radioIndex = 1\n          }\n        },\n        {\n          title: '文本文本文本文本',\n          action: () => {\n            this.radioIndex = 2\n          }\n        },\n      ]\n    }),\n  })\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          Button(\"纯列表弹出框\")\n            .width(96)\n            .height(40)\n            .onClick(() => {\n              this.dialogControllerList.open()\n            })\n        }.margin({ bottom: 300 })\n      }\n      .align(Alignment.Bottom)\n      .width('100%')\n      .height('100%')\n    }\n    .backgroundImageSize({ width: '100%', height: '100%' })\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(756516)/* ["default"] */.A) + "",
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
        children: "import { ConfirmDialog } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  isChecked: boolean = false;\n  dialogControllerCheckBox: CustomDialogController = new CustomDialogController({\n    builder: ConfirmDialog({\n      title: '文本标题',\n      content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',\n      // 勾选框选中状态\n      isChecked: this.isChecked,\n      // 勾选框说明文本\n      checkTips: '禁止后不再提示',\n      primaryButton: {\n        value: '禁止',\n        action: () => {},\n      },\n      secondaryButton: {\n        value: '允许',\n        action: () => {\n          this.isChecked = false\n          console.info('Callback when the second button is clicked')\n        }\n      },\n      onCheckedChange: () => {\n        console.info('Callback when the checkbox is clicked')\n      },\n    }),\n    autoCancel: true,\n    alignment: DialogAlignment.Bottom\n  })\n\n  build() {\n    Row() {\n      Stack() {\n        Column(){\n          Button(\"文本+勾选弹出框\")\n            .width(96)\n            .height(40)\n            .onClick(() => {\n              this.dialogControllerCheckBox.open()\n            })\n        }\n        .margin({bottom: 300})\n      }\n      .align(Alignment.Bottom)\n      .width('100%')\n      .height('100%')\n    }\n    .backgroundImageSize({ width: '100%', height: '100%' })\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(854255)/* ["default"] */.A) + "",
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
        children: "import { AlertDialog } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  dialogControllerConfirm: CustomDialogController = new CustomDialogController({\n    builder: AlertDialog({\n      primaryTitle: '弹框一级标题',\n      secondaryTitle: '弹框二级标题',\n      content: '文本文本文本文本文本',\n      primaryButton: {\n        value: '取消',\n        action: () => {\n        },\n      },\n      secondaryButton: {\n        value: '确认',\n        role: ButtonRole.ERROR,\n        action: () => {\n          console.info('Callback when the second button is clicked')\n        }\n      },\n    }),\n  })\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          Button(\"纯文本弹出框\")\n            .width(96)\n            .height(40)\n            .onClick(() => {\n              this.dialogControllerConfirm.open()\n            })\n        }\n        .margin({ bottom: 300 })\n      }\n      .align(Alignment.Bottom)\n      .width('100%')\n      .height('100%')\n    }\n    .backgroundImageSize({ width: '100%', height: '100%' })\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(373880)/* ["default"] */.A) + "",
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
        children: "import { LoadingDialog } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  dialogControllerProgress: CustomDialogController = new CustomDialogController({\n    builder: LoadingDialog({\n      content: '文本文本文本文本文本...',\n    }),\n  })\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          Button(\"进度加载类弹出框\")\n            .width(96)\n            .height(40)\n            .onClick(() => {\n              this.dialogControllerProgress.open()\n            })\n        }\n        .margin({ bottom: 300 })\n      }\n      .align(Alignment.Bottom)\n      .width('100%')\n      .height('100%')\n    }\n    .backgroundImageSize({ width: '100%', height: '100%' })\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(675922)/* ["default"] */.A) + "",
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
        children: "import { CustomColors, CustomTheme, LoadingDialog } from '@kit.ArkUI';\n\nclass CustomThemeImpl implements CustomTheme {\n  colors?: CustomColors;\n\n  constructor(colors: CustomColors) {\n    this.colors = colors;\n  }\n}\n\n// 自定义内容文字及loading组件主题颜色\nclass CustomThemeColors implements CustomColors {\n  fontPrimary = '#ffd0a300';\n  iconSecondary = '#ffd000cd';\n}\n\n@Entry\n@Component\nstruct Index {\n  @State customTheme: CustomTheme = new CustomThemeImpl(new CustomThemeColors());\n  dialogController: CustomDialogController = new CustomDialogController({\n    builder: LoadingDialog({\n      content: 'text',\n      theme: this.customTheme,\n    })\n  });\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          Button('dialog')\n            .width(96)\n            .height(40)\n            .onClick(() => {\n              this.dialogController.open();\n            })\n        }\n        .margin({ bottom: 300 })\n      }\n      .align(Alignment.Bottom)\n      .width('100%')\n      .height('100%')\n    }\n    .backgroundImageSize({ width: '100%', height: '100%' })\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(398292)/* ["default"] */.A) + "",
        width: "568",
        height: "195"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7自定义深浅色模式弹出框",
      children: "示例7（自定义深浅色模式弹出框）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义深浅色模式弹出框，包含content、themeColorMode等内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LoadingDialog } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  dialogController: CustomDialogController = new CustomDialogController({\n    builder: LoadingDialog({\n      content: 'Text',\n      themeColorMode: ThemeColorMode.DARK, // 设置弹出框深浅色模式为深色模式\n    })\n  });\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          Button('Dialog')\n            .width(96)\n            .height(40)\n            .onClick(() => {\n              this.dialogController.open();\n            })\n        }\n        .margin({ bottom: 300 })\n      }\n      .align(Alignment.Bottom)\n      .width('100%')\n      .height('100%')\n    }\n    .backgroundImageSize({ width: '100%', height: '100%' })\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(973495)/* ["default"] */.A) + "",
        width: "348",
        height: "130"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8自定义内容弹出框",
      children: "示例8（自定义内容弹出框）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持自定义内容弹出框，包含contentBuilder、buttons等内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CustomContentDialog } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  dialogController: CustomDialogController = new CustomDialogController({\n    builder: CustomContentDialog({\n      primaryTitle: '标题',\n      secondaryTitle: '辅助文本',\n      contentBuilder: () => {\n        this.buildContent();\n      },\n      buttons: [\n        {\n          value: '按钮1',\n          buttonStyle: ButtonStyleMode.TEXTUAL,\n          action: () => {\n            console.info('Callback when the button is clicked')\n          }\n        },\n        {\n          value: '按钮2',\n          buttonStyle: ButtonStyleMode.TEXTUAL,\n          role: ButtonRole.ERROR\n        }\n      ],\n    }),\n  });\n\n  build() {\n    Column() {\n      Button(\"支持自定义内容弹出框\")\n        .onClick(() => {\n          this.dialogController.open()\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n  \n  // 自定义弹出框的内容区\n  @Builder\n  buildContent(): void {\n    Column() {\n      Text('内容区')\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(520865)/* ["default"] */.A) + "",
        width: "470",
        height: "195"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9跟手弹出框",
      children: "示例9（跟手弹出框）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 14开始，该示例展示了设置跟手弹出框（警告弹出框为例），包含visible、popover、targetBuilder等内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AlertDialog, PopoverDialog, PopoverOptions } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State isShow: boolean = false;\n  @State popoverOptions: PopoverOptions = {\n    builder: () => {\n      this.dialogBuilder();\n    },\n    width: 320,\n  }\n  \n  // 跟手弹出框内容\n  @Builder dialogBuilder() {\n    AlertDialog({\n      content: '跟手弹出框',\n      primaryButton: {\n        value: '取消',\n        action: () => {\n          this.isShow = false;\n        },\n      },\n      secondaryButton: {\n        value: '确认',\n        action: () => {\n          this.isShow = false;\n        },\n      },\n    });\n  }\n  \n  // 跟手弹出框绑定的builder\n  @Builder buttonBuilder() {\n    Button('跟手弹出框目标组件')\n    .onClick(() => {\n      this.isShow = true;\n    });\n  }\n\n  build() {\n    Column() {\n      PopoverDialog({\n        visible: this.isShow,\n        popover: this.popoverOptions,\n        targetBuilder: () => {\n          this.buttonBuilder();\n        },\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(49852)/* ["default"] */.A) + "",
        width: "315",
        height: "156"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10弹出框按钮设置默认获焦",
      children: "示例10（弹出框按钮设置默认获焦）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，该示例展示了设置默认获焦按钮弹出框（以AlertDialog为例），包含defaultFocus等内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AlertDialog } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  dialogController: CustomDialogController = new CustomDialogController({\n    builder: AlertDialog({\n      primaryTitle: 'AlertDialog',\n      secondaryTitle: '副标题',\n      content: '第二个按钮设置为默认',\n      primaryButton: {\n        value: 'DEFAULT',\n        action: () => {}\n      },\n      secondaryButton: {\n        value: 'TRUE',\n        defaultFocus: true, // 设置该按钮为默认获焦按钮。\n        action: () => {}\n      },\n    })\n  });\n\n  build() {\n    Row() {\n      Stack() {\n        Column() {\n          Button(\"AlertDialog\")\n            .width(96)\n            .height(40)\n            .onClick(() => {\n              this.dialogController.open()\n            })\n        }\n        .margin({ bottom: 300 })\n      }\n      .align(Alignment.Bottom)\n      .width('100%')\n      .height('100%')\n    }\n    .backgroundImageSize({ width: '100%', height: '100%' })\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(825711)/* ["default"] */.A) + "",
        width: "446",
        height: "195"
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
699381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
373880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
966295(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
998884(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
398292(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480071-f3c91972c7bc587ae7de0c162410092f.png");

},
49852(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960072-db2a22e65752731686001f38a67e0cc5.png");

},
37071(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960068-0238494f62c841d61bee46e0303f7add.png");

},
226889(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
973495(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800422-985447d4835abbaf4f149a1cf9dcdbe6.png");

},
520865(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
756516(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480069-791ebcb2454ce16f95487646fbab7761.png");

},
854255(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800420-7fc1471d21b9470a0674b6a11294800b.png");

},
675922(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960070-819909a92d75a90ab793f6df1a99cf3e.gif");

},
825711(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480073-9342c54dc5436ef3bd7be0b7655f2d34.png");

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