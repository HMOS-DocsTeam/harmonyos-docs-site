"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["930178"], {
818259(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_dialog_boxes_ts_methods_custom_dialog_box_ts_methods_custom_dialog_box_md_c07_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-dialog-boxes-ts-methods-custom-dialog-box-ts-methods-custom-dialog-box-md-c07.json
var site_docs_ref_arkui_api_arkui_declarative_comp_dialog_boxes_ts_methods_custom_dialog_box_ts_methods_custom_dialog_box_md_c07_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box","title":"自定义弹窗 (CustomDialog)","description":"通过CustomDialogController类显示自定义弹窗。使用弹窗组件时，优先考虑自定义弹窗，便于弹窗样式与内容的自定义。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box.md","sourceDirName":"arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box","slug":"/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"自定义弹窗 (CustomDialog)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-custom-dialog-box","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-methods-custom-dialog-box"},"sidebar":"ref","previous":{"title":"列表选择弹窗 (ActionSheet)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-action-sheet/ts-methods-action-sheet"},"next":{"title":"日历选择器弹窗 (CalendarPickerDialog)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-calendarpicker-dialog/ts-methods-calendarpicker-dialog"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box.md


const frontMatter = {
	title: '自定义弹窗 (CustomDialog)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-custom-dialog-box',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-methods-custom-dialog-box'
};
const contentTitle = '自定义弹窗 (CustomDialog)';

const assets = {

};



const toc = [{
  "value": "CustomDialogController",
  "id": "customdialogcontroller",
  "level": 2
}, {
  "value": "导入对象",
  "id": "导入对象",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "open",
  "id": "open",
  "level": 3
}, {
  "value": "close",
  "id": "close",
  "level": 3
}, {
  "value": "getState20+",
  "id": "getstate20",
  "level": 3
}, {
  "value": "PromptActionCommonState20+",
  "id": "promptactioncommonstate20",
  "level": 2
}, {
  "value": "CustomDialogControllerOptions对象说明",
  "id": "customdialogcontrolleroptions对象说明",
  "level": 2
}, {
  "value": "DismissDialogAction12+",
  "id": "dismissdialogaction12",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（弹出嵌套弹窗）",
  "id": "示例1弹出嵌套弹窗",
  "level": 3
}, {
  "value": "示例2（可在主窗外弹出的弹窗）",
  "id": "示例2可在主窗外弹出的弹窗",
  "level": 3
}, {
  "value": "示例3（设置弹窗的样式）",
  "id": "示例3设置弹窗的样式",
  "level": 3
}, {
  "value": "示例4（悬停态弹窗）",
  "id": "示例4悬停态弹窗",
  "level": 3
}, {
  "value": "示例5（获取弹窗的状态）",
  "id": "示例5获取弹窗的状态",
  "level": 3
}, {
  "value": "示例6（使用@Link和@Consume监听数据变化）",
  "id": "示例6使用link和consume监听数据变化",
  "level": 3
}, {
  "value": "示例7（自定义带loading的弹窗）",
  "id": "示例7自定义带loading的弹窗",
  "level": 3
}, {
  "value": "示例8（不使用keyboardAvoidDistance调整弹窗与软键盘的间距）",
  "id": "示例8不使用keyboardavoiddistance调整弹窗与软键盘的间距",
  "level": 3
}, {
  "value": "示例9（弹窗生命周期）",
  "id": "示例9弹窗生命周期",
  "level": 3
}, {
  "value": "示例10（不同customStyle下的弹窗示例）",
  "id": "示例10不同customstyle下的弹窗示例",
  "level": 3
}, {
  "value": "示例11（自定义背景模糊效果参数）",
  "id": "示例11自定义背景模糊效果参数",
  "level": 3
}, {
  "value": "示例12（自定义背景效果参数）",
  "id": "示例12自定义背景效果参数",
  "level": 3
}, {
  "value": "示例13（自定义弹窗动态刷新宽度）",
  "id": "示例13自定义弹窗动态刷新宽度",
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
        id: "自定义弹窗-customdialog",
        children: "自定义弹窗 (CustomDialog)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过CustomDialogController类显示自定义弹窗。使用弹窗组件时，优先考虑自定义弹窗，便于弹窗样式与内容的自定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(537807)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customdialogcontroller",
      children: "CustomDialogController"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义弹窗的控制器。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入对象",
      children: "导入对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "dialogController : CustomDialogController | null = new CustomDialogController(CustomDialogControllerOptions)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(821935)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CustomDialogController仅在作为@CustomDialog和@Component struct成员变量，且在@Component struct内部定义时赋值才有效，具体用法可参考下方示例。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若尝试在CustomDialog中传入多个其他的Controller，以实现在CustomDialog中打开另一个或另一些CustomDialog，那么此处需要将指向自己的controller放在所有controller的后面。详细用法可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%A4%BA%E4%BE%8B1%E5%BC%B9%E5%87%BA%E5%B5%8C%E5%A5%97%E5%BC%B9%E7%AA%97",
          children: "示例1弹出嵌套弹窗"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(value: CustomDialogControllerOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义弹窗的构造器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(261894)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义弹窗的所有参数，不支持动态刷新，但可以通过设置customStyle为true，并在自定义组件上设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundcolor",
        children: "背景色"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundblurstyle9",
        children: "背景模糊"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size",
        children: "宽高"
      }), "等属性，通过属性绑定的状态变量来实现动态刷新的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在CustomDialogController作为全局变量以实现全局自定义弹窗的场景下，若对controller重新赋值，则无法通过其关闭之前的弹窗。建议在重新赋值前先关闭弹窗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在自定义弹窗内拉起另一个自定义弹窗时，不建议直接关闭拉起方。"
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
              href: "#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "CustomDialogControllerOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置自定义弹窗的参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "open",
      children: "open"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "open()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示自定义弹窗内容，允许多次使用，但如果弹框为SubWindow模式，则该弹框不允许再弹出SubWindow弹框。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(900015)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持在输入法类型窗口中使用子窗（showInSubwindow为true）的CustomDialog，详情见输入法框架的约束与限制说明", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-arkts/js-apis-inputmethodengine/js-apis-inputmethodengine#createpanel10-1",
        children: "createPanel"
      }), "。"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "close",
      children: "close"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "close()"
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
      children: "关闭显示的自定义弹窗，若已关闭，则不生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getstate20",
      children: "getState20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getState(): PromptActionCommonState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取自定义弹窗的状态。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#promptactioncommonstate20",
              children: "PromptActionCommonState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回对应的弹窗状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "promptactioncommonstate20",
      children: "PromptActionCommonState20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type PromptActionCommonState = promptAction.CommonState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义弹窗的状态。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#commonstate20%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "promptAction.CommonState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回对应的弹窗状态。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customdialogcontrolleroptions对象说明",
      children: "CustomDialogControllerOptions对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义弹窗的样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-common-components-custom-dialog",
              children: "CustomDialog"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义弹窗内容构造器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  若builder构造器使用回调函数作为入参，请注意使用this绑定问题，如builder: custombuilder({ callback: ()=> {...}})。  若在builder中监听数据变化可以使用@Link或@Consume，而其他方式如@Prop、@ObjectLink不适用此场景。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cancel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回、ESC键和点击遮障层弹窗退出时的回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "autoCancel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否允许点击遮障层退出，true表示关闭弹窗。false表示不关闭弹窗。  默认值：true  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-alert-dialog-box/ts-methods-alert-dialog-box#dialogalignment%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "DialogAlignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹窗在竖直方向上的对齐方式。  默认值：DialogAlignment.Default  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#offset",
              children: "Offset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹窗相对alignment所在位置的偏移量。  默认值：{ dx: 0, dy: 0 }  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "customStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹窗容器样式是否自定义。值为true表示弹窗容器样式不能自定义，值为false表示弹窗容器样式能自定义。  默认值：false  设置为false时：  1. 默认圆角为32vp。  2. 未设置弹窗宽度高度：弹窗容器的宽度根据栅格系统自适应。高度自适应自定义的内容节点。  3. 设置弹窗宽度高度：弹窗容器的宽度不超过默认样式下的最大宽度（自定义节点设置100%的宽度），弹窗容器的高度不超过默认样式下的最大高度（自定义节点设置100%的高度）。  4. 受安全区域的影响，弹窗显示区域将排除安全区域。例如在PC/2in1设备上避让屏幕边缘以及窗口标题栏。  设置为true时：  1. 圆角为0，弹窗背景色为透明色。  2. 不支持设置弹窗宽度、高度、边框宽度、边框样式、边框颜色以及阴影宽度。  3. 弹窗显示区域为屏幕。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gridCount8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹窗宽度占", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-build-layout/arkts-layout-development-grid-layout",
              children: "栅格宽度"
            }), "的个数。  默认为按照窗口大小自适应，异常值按默认值处理，最大栅格数为系统最大栅格数。  取值范围：大于等于0的整数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maskColor10+"
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
            children: ["自定义蒙层颜色。  默认值：0x33000000  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maskRect10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-alert-dialog-box/ts-methods-alert-dialog-box#rectangle8%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
              children: "Rectangle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹窗遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。  默认值：{ x: 0, y: 0, width: '100%', height: '100%' }  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  showInSubWindow为true时，maskRect不生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openAnimation10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animation/ts-explicit-animation#animateparam%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "AnimateParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义设置弹窗弹出的动画效果相关参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  tempo默认值为1，当设置小于等于0的值时按默认值处理。  iterations默认值为1，默认播放一次，设置为其他数值时按默认值处理。  playMode控制动画播放模式，默认值为PlayMode.Normal，设置为其他数值时按照默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "closeAnimation10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animation/ts-explicit-animation#animateparam%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "AnimateParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义设置弹窗关闭的动画效果相关参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  tempo默认值为1，当设置小于等于0的值时按默认值处理。  iterations默认值为1，默认播放一次，设置为其他数值时按默认值处理。  playMode控制动画播放模式，默认值为PlayMode.Normal，设置为其他数值时按照默认值处理。  页面转场切换时，建议使用默认关闭动效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "showInSubWindow10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["某弹框需要显示在主窗口之外时，是否在子窗口显示此弹窗。值为true表示在子窗口显示弹窗。  默认值：false，弹窗显示在应用内，而非独立子窗口。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：showInSubWindow为true的弹窗无法触发显示另一个showInSubWindow为true的弹窗。不建议在showInSubWindow为true的弹窗中使用CalendarPicker、CalendarPickerDialog、DatePickerDialog、TextPickerDialog、TimePickerDialog、Toast组件，弹窗会影响上述组件行为。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundColor10+"
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
            children: ["设置弹窗背板填充。  默认值：Color.Transparent  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 如果同时设置了内容构造器的背景色，则backgroundColor会被内容构造器的背景色覆盖。  backgroundColor会与模糊属性backgroundBlurStyle叠加产生效果，如果不符合预期，可将backgroundBlurStyle设置为BlurStyle.NONE，即可取消模糊。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cornerRadius10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#borderradiuses9",
              children: "BorderRadiuses"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isModal11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹窗是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与弹窗周围其他控件进行交互，即蒙层区域无法事件透传。值为false表示为非模态窗口且无蒙层，可以与弹窗周围其他控件进行交互。  默认值：true  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillDismiss12+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#dismissdialogaction12",
              children: "DismissDialogAction"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["交互式关闭回调函数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1.当用户执行点击遮障层关闭、侧滑（左滑/右滑）、三键back、键盘ESC关闭交互操作时，如果注册该回调函数，则不会立刻关闭弹窗。在回调函数中可以通过reason得到阻拦关闭弹窗的操作类型，从而根据原因选择是否能关闭弹窗。当前组件返回的reason中，暂不支持CLOSE_BUTTON的枚举值。  2.在onWillDismiss回调中，不能再做onWillDismiss拦截。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderWidth12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#edgewidths9",
              children: "EdgeWidths"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderColor12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#edgecolors9",
              children: "EdgeColors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "borderStyle12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#borderstyle",
              children: "BorderStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#edgestyles9",
              children: "EdgeStyles"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "width12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置弹窗背板的宽度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 弹窗宽度默认最大值：400vp。  - 百分比参数方式：弹窗参考宽度为所在窗口的宽度，在此基础上调小或调大。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "height12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置弹窗背板的高度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 弹窗高度默认最大值：0.9 *（窗口高度 - 安全区域）。  - 百分比参数方式：弹窗参考高度为（窗口高度 - 安全区域），在此基础上调小或调大。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shadow12+"
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
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundBlurStyle12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#blurstyle9",
              children: "BlurStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹窗背板模糊材质。  默认值：BlurStyle.COMPONENT_ULTRA_THICK  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则颜色显示将不符合预期效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundBlurStyleOptions19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundblurstyleoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "BackgroundBlurStyleOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["背景模糊效果。默认值请参考BackgroundBlurStyleOptions类型说明。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 19开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "backgroundEffect19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundeffectoptions11",
              children: "BackgroundEffectOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["背景效果参数。默认值请参考BackgroundEffectOptions类型说明。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 19开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyboardAvoidMode12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#keyboardavoidmode12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "KeyboardAvoidMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于设置弹窗是否在拉起软键盘时进行自动避让。  默认值：KeyboardAvoidMode.DEFAULT  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableHoverMode14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否响应悬停态，值为true时，响应悬停态。  默认值：false，默认不响应。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  PC/2in1设备弹窗默认显示在上半屏，在enableHoverMode设置为true时，可以通过设置hoverModeArea参数显示在下半屏。其他设备弹窗在enableHoverMode设置为true时默认显示在下半屏，可以通过设置hoverModeArea参数显示在上半屏。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hoverModeArea14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#hovermodeareatype14",
              children: "HoverModeAreaType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["悬停态下弹窗默认展示区域。  默认值：HoverModeAreaType.BOTTOM_SCREEN。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 14开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillAppear19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹窗显示动效前的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。  2.在onWillAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 19开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDidAppear19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹窗弹出后的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。  2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。  3.快速点击弹出，关闭弹窗时，onWillDisappear在onDidAppear前生效。  4.弹窗入场动效未完成时彻底关闭弹窗，动效打断，onDidAppear不会触发。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 19开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillDisappear19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹窗退出动效前的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 19开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDidDisappear19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["弹窗消失后的事件回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 19开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyboardAvoidDistance15+"
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
            children: ["弹窗避让键盘后，和键盘之间的距离。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 默认值：16vp。  - 默认单位：vp。  - 当且仅当keyboardAvoidMode属性设置为DEFAULT时生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "levelMode15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#levelmode15%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "LevelMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置弹窗显示层级。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 默认值：LevelMode.OVERLAY。  - 当且仅当showInSubWindow属性设置为false时生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "levelUniqueId15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置页面级弹窗需要显示的层级下的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getuniqueid12",
              children: "节点UniqueID"
            }), "。  取值范围：大于等于0的数字。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "immersiveMode15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#immersivemode15%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ImmersiveMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置页面内弹窗蒙层效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 默认值：ImmersiveMode.DEFAULT  - 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "levelOrder18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#levelorder18",
              children: "LevelOrder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置弹窗显示的顺序。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 默认值：LevelOrder.clamp(0)  - 不支持动态刷新顺序。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "focusable19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置弹窗是否获取焦点。值为true表示获取焦点，值为false表示不获取焦点。  默认值：true  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  只有弹出覆盖在当前窗口之上的弹窗才可以获取焦点。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 19开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(608069)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按下返回键和ESC键时会让弹窗退出。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "弹窗在避让软键盘时到达极限高度之后会压缩高度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要注意：高度压缩生效在外层容器上，如果容器根节点中的子组件设置了较大的固定高度，由于容器默认不裁剪，依然可能存在超出屏幕显示的情况。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义弹窗仅适用于简单提示场景，不能替代页面使用。弹窗避让软键盘时，与软键盘之间存在16vp的安全间距。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为了达成良好的视觉体验，弹窗的显示和关闭存在默认动画，动画时长不同设备间可能存在差异。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要注意：在动画播放过程中，页面不响应触摸、滑动、点击操作。关闭默认弹窗动画效果可设置openAnimation和closeAnimation的duration为0。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当前，ArkUI弹出框默认为非页面级弹出框，在页面路由跳转时，如果开发者未调用close方法将其关闭，弹出框将不会自动关闭。若需实现在跳转页面时覆盖弹出框的场景，可以使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navdestination#%E9%A1%B5%E9%9D%A2%E6%98%BE%E7%A4%BA%E7%B1%BB%E5%9E%8B",
            children: "组件导航子页面显示类型的弹窗类型"
          }), "或者", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-embedded-dialog",
            children: "页面级弹出框"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dismissdialogaction12",
      children: "DismissDialogAction12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dialog关闭的信息。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
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
            children: "dismiss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dialog关闭回调函数。开发者需要退出时调用，不需要退出时无需调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#dismissreason12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "DismissReason"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dialog无法关闭原因。根据开发者需要选择不同操作下，Dialog是否需要关闭。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1弹出嵌套弹窗",
      children: "示例1（弹出嵌套弹窗）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例实现了在CustomDialog中打开另一个或另一些CustomDialog。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@CustomDialog\nstruct CustomDialogExampleTwo {\n  controllerTwo?: CustomDialogController;\n  build() {\n    Column() {\n      Text('我是第二个弹窗')\n        .fontSize(30)\n        .height(100)\n      Button('点我关闭第二个弹窗')\n        .onClick(() => {\n          if (this.controllerTwo != undefined) {\n            this.controllerTwo.close();\n          }\n        })\n        .margin(20)\n    }\n  }\n}\n@CustomDialog\n@Component\nstruct CustomDialogExample {\n  @Link textValue: string;\n  @Link inputValue: string;\n  dialogControllerTwo: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExampleTwo(),\n    alignment: DialogAlignment.Bottom,\n    onWillDismiss:(dismissDialogAction: DismissDialogAction)=> {\n      console.info(`reason= ${dismissDialogAction.reason}`);\n      console.info('dialog onWillDismiss');\n      if (dismissDialogAction.reason == DismissReason.PRESS_BACK) {\n        dismissDialogAction.dismiss();\n      }\n      if (dismissDialogAction.reason == DismissReason.TOUCH_OUTSIDE) {\n        dismissDialogAction.dismiss();\n      }\n    },\n    offset: { dx: 0, dy: -25 } })\n  controller?: CustomDialogController;\n  // 若尝试在CustomDialog中传入多个其他的Controller，以实现在CustomDialog中打开另一个或另一些CustomDialog，那么此处需要将指向自己的controller放在所有controller的后面\n  cancel: () => void = () => {\n  }\n  confirm: () => void = () => {\n  }\n\n  build() {\n    Column() {\n      Text('Change text').fontSize(20).margin({ top: 10, bottom: 10 })\n      TextInput({ placeholder: '', text: this.textValue }).height(60).width('90%')\n        .onChange((value: string) => {\n          this.textValue = value;\n        })\n      Text('Whether to change a text?').fontSize(16).margin({ bottom: 10 })\n      Flex({ justifyContent: FlexAlign.SpaceAround }) {\n        Button('cancel')\n          .onClick(() => {\n            if (this.controller != undefined) {\n              this.controller.close();\n              this.cancel();\n            }\n          }).backgroundColor(0xffffff).fontColor(Color.Black)\n        Button('confirm')\n          .onClick(() => {\n            if (this.controller != undefined) {\n              this.inputValue = this.textValue;\n              this.controller.close();\n              this.confirm();\n            }\n          }).backgroundColor(0xffffff).fontColor(Color.Red)\n      }.margin({ bottom: 10 })\n\n      Button('点我打开第二个弹窗')\n        .onClick(() => {\n          if (this.dialogControllerTwo != null) {\n            this.dialogControllerTwo.open();\n          }\n        })\n        .margin(20)\n    }.borderRadius(10)\n    // 如果需要使用border属性或cornerRadius属性，请和borderRadius属性一起使用。\n  }\n}\n@Entry\n@Component\nstruct CustomDialogUser {\n  @State textValue: string = ''\n  @State inputValue: string = 'click me'\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample({\n      cancel: ()=> { this.onCancel(); },\n      confirm: ()=> { this.onAccept(); },\n      textValue: this.textValue,\n      inputValue: this.inputValue\n    }),\n    cancel: this.exitApp,\n    autoCancel: true,\n    onWillDismiss:(dismissDialogAction: DismissDialogAction)=> {\n      console.info(`reason= ${dismissDialogAction.reason}`);\n      console.info('dialog onWillDismiss');\n      if (dismissDialogAction.reason == DismissReason.PRESS_BACK) {\n        dismissDialogAction.dismiss();\n      }\n      if (dismissDialogAction.reason == DismissReason.TOUCH_OUTSIDE) {\n        dismissDialogAction.dismiss();\n      }\n    },\n    alignment: DialogAlignment.Bottom,\n    offset: { dx: 0, dy: -20 },\n    gridCount: 4,\n    customStyle: false,\n    cornerRadius: 10,\n  })\n\n  // 在自定义组件即将析构销毁时将dialogController置空\n  aboutToDisappear() {\n    this.dialogController = null; // 将dialogController置空\n  }\n\n  onCancel() {\n    console.info('Callback when the first button is clicked');\n  }\n\n  onAccept() {\n    console.info('Callback when the second button is clicked');\n  }\n\n  exitApp() {\n    console.info('Click the callback in the blank area');\n  }\n  build() {\n    Column() {\n      Button(this.inputValue)\n        .onClick(() => {\n          if (this.dialogController != null) {\n            this.dialogController.open();\n          }\n        }).backgroundColor(0x317aff)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(664966)/* ["default"] */.A) + "",
        width: "332",
        height: "729"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2可在主窗外弹出的弹窗",
      children: "示例2（可在主窗外弹出的弹窗）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在2in1设备上设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "showInSubWindow"
      }), "为true时，可以弹出在主窗外显示的弹窗。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@CustomDialog\nstruct CustomDialogExample {\n  controller?: CustomDialogController;\n  cancel: () => void = () => {\n  }\n  confirm: () => void = () => {\n  }\n  build() {\n    Column() {\n      Text('可展示在主窗口外的弹窗')\n        .fontSize(30)\n        .height(100)\n      Button('点我关闭弹窗')\n        .onClick(() => {\n          if (this.controller != undefined) {\n            this.controller.close();\n          }\n        })\n        .margin(20)\n    }\n  }\n}\n@Entry\n@Component\nstruct CustomDialogUser {\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample({\n      cancel: ()=> { this.onCancel(); },\n      confirm: ()=> { this.onAccept(); }\n    }),\n    cancel: this.existApp,\n    autoCancel: true,\n    onWillDismiss:(dismissDialogAction: DismissDialogAction)=> {\n      console.info(`reason= ${dismissDialogAction.reason}`);\n      console.info('dialog onWillDismiss');\n      if (dismissDialogAction.reason == DismissReason.PRESS_BACK) {\n        dismissDialogAction.dismiss();\n      }\n      if (dismissDialogAction.reason == DismissReason.TOUCH_OUTSIDE) {\n        dismissDialogAction.dismiss();\n      }\n    },\n    alignment: DialogAlignment.Center,\n    offset: { dx: 0, dy: -20 },\n    gridCount: 4,\n    showInSubWindow: true,\n    isModal: true,\n    customStyle: false,\n    cornerRadius: 10,\n    focusable: true\n  })\n  // 在自定义组件即将析构销毁时将dialogController置空\n  aboutToDisappear() {\n    this.dialogController = null; // 将dialogController置空\n  }\n\n  onCancel() {\n    console.info('Callback when the first button is clicked');\n  }\n\n  onAccept() {\n    console.info('Callback when the second button is clicked');\n  }\n\n  existApp() {\n    console.info('Click the callback in the blank area');\n  }\n\n  build() {\n    Column() {\n      Button('click me')\n        .onClick(() => {\n          if (this.dialogController != null) {\n            this.dialogController.open();\n          }\n        }).backgroundColor(0x317aff)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(141376)/* ["default"] */.A) + "",
        width: "382",
        height: "550"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置弹窗的样式",
      children: "示例3（设置弹窗的样式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例定义了CustomDialog的样式，包括宽度、高度、背景色、阴影等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@CustomDialog\nstruct CustomDialogExample {\n  controller?: CustomDialogController;\n  cancel: () => void = () => {\n  }\n  confirm: () => void = () => {\n  }\n  build() {\n    Column() {\n      Text('这是自定义弹窗')\n        .fontSize(30)\n        .height(100)\n      Button('点我关闭弹窗')\n        .onClick(() => {\n          if (this.controller != undefined) {\n            this.controller.close();\n          }\n        })\n        .margin(20)\n    }\n  }\n}\n@Entry\n@Component\nstruct CustomDialogUser {\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample({\n      cancel: ()=> { this.onCancel(); },\n      confirm: ()=> { this.onAccept(); }\n    }),\n    cancel: this.existApp,\n    autoCancel: true,\n    onWillDismiss:(dismissDialogAction: DismissDialogAction)=> {\n      console.info(`reason= ${dismissDialogAction.reason}`);\n      console.info('dialog onWillDismiss')\n      if (dismissDialogAction.reason == DismissReason.PRESS_BACK) {\n        dismissDialogAction.dismiss();\n      }\n      if (dismissDialogAction.reason == DismissReason.TOUCH_OUTSIDE) {\n        dismissDialogAction.dismiss();\n      }\n    },\n    alignment: DialogAlignment.Center,\n    offset: { dx: 0, dy: -20 },\n    customStyle: false,\n    cornerRadius: 20,\n    width: 300,\n    height: 200,\n    borderWidth: 1,\n    borderStyle: BorderStyle.Dashed,// 使用borderStyle属性，需要和borderWidth属性一起使用\n    borderColor: Color.Blue,// 使用borderColor属性，需要和borderWidth属性一起使用\n    backgroundColor: Color.White,\n    shadow: ({ radius: 20, color: Color.Grey, offsetX: 50, offsetY: 0}),\n  })\n  // 在自定义组件即将析构销毁时将dialogController置空\n  aboutToDisappear() {\n    this.dialogController = null; // 将dialogController置空\n  }\n\n  onCancel() {\n    console.info('Callback when the first button is clicked');\n  }\n\n  onAccept() {\n    console.info('Callback when the second button is clicked');\n  }\n\n  existApp() {\n    console.info('Click the callback in the blank area');\n  }\n\n  build() {\n    Column() {\n      Button('click me')\n        .onClick(() => {\n          if (this.dialogController != null) {\n            this.dialogController.open();\n          }\n        }).backgroundColor(0x317aff)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(397790)/* ["default"] */.A) + "",
        width: "348",
        height: "500"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4悬停态弹窗",
      children: "示例4（悬停态弹窗）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例展示了在折叠屏悬停态下设置dialog布局区域的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@CustomDialog\n@Component\nstruct CustomDialogExample {\n  @Link textValue: string;\n  @Link inputValue: string;\n  controller?: CustomDialogController;\n\n  build() {\n    Column() {\n      Text('Change text').fontSize(20).margin({ top: 10, bottom: 10 })\n      TextInput({ placeholder: '', text: this.textValue }).height(60).width('90%')\n        .onChange((value: string) => {\n          this.textValue = value;\n        })\n      Text('Whether to change a text?').fontSize(16).margin({ bottom: 10 })\n      Flex({ justifyContent: FlexAlign.SpaceAround }) {\n        Button('cancel')\n          .onClick(() => {\n            if (this.controller != undefined) {\n              this.controller.close();\n            }\n          }).backgroundColor(0xffffff).fontColor(Color.Black)\n        Button('confirm')\n          .onClick(() => {\n            if (this.controller != undefined) {\n              this.inputValue = this.textValue;\n              this.controller.close();\n            }\n          }).backgroundColor(0xffffff).fontColor(Color.Red)\n      }.margin({ bottom: 10 })\n    }.borderRadius(10)\n    // 如果需要使用border属性或cornerRadius属性，请和borderRadius属性一起使用。\n  }\n}\n@Entry\n@Component\nstruct CustomDialogUser {\n  @State textValue: string = '';\n  @State inputValue: string = 'click me';\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample({\n      textValue: this.textValue,\n      inputValue: this.inputValue\n    }),\n    cancel: this.exitApp,\n    autoCancel: true,\n    onWillDismiss: (dismissDialogAction: DismissDialogAction)=> {\n      console.info(`reason= ${dismissDialogAction.reason}`);\n      console.info('dialog onWillDismiss');\n      if (dismissDialogAction.reason == DismissReason.PRESS_BACK) {\n        dismissDialogAction.dismiss();\n      }\n      if (dismissDialogAction.reason == DismissReason.TOUCH_OUTSIDE) {\n        dismissDialogAction.dismiss();\n      }\n    },\n    alignment: DialogAlignment.Bottom,\n    offset: { dx: 0, dy: -20 },\n    gridCount: 4,\n    customStyle: false,\n    cornerRadius: 10,\n    enableHoverMode: true,\n    hoverModeArea: HoverModeAreaType.TOP_SCREEN\n  })\n\n  // 在自定义组件即将析构销毁时将dialogController置空\n  aboutToDisappear() {\n    this.dialogController = null; // 将dialogController置空\n  }\n\n  exitApp() {\n    console.info('Click the callback in the blank area');\n  }\n\n  build() {\n    Column() {\n      Button(this.inputValue)\n        .onClick(() => {\n          if (this.dialogController != null) {\n            this.dialogController.open();\n          }\n        }).backgroundColor(0x317aff)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(45604)/* ["default"] */.A) + "",
        width: "1210",
        height: "1019"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5获取弹窗的状态",
      children: "示例5（获取弹窗的状态）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例实现了在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customdialogcontroller",
        children: "CustomDialogController"
      }), "中调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getstate20",
        children: "getState"
      }), "获取弹窗当前状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，在CustomDialogController中新增了getState接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@CustomDialog\nstruct CustomDialogExample {\n  controller?: CustomDialogController\n\n  build() {\n    Column() {\n      Button(\"点我查询弹窗状态:通过自定义组件自带controller\")\n        .onClick(() => {\n          if (this.getDialogController() != undefined) {\n            console.info('state:' + this.getDialogController().getState())\n          } else {\n            console.info('state: no exist')\n          }\n        }).margin(20)\n      Button('点我查询弹窗状态:通过CustomDialogController ')\n        .onClick(() => {\n          console.info('state:' + this.controller?.getState())\n        }).margin(20)\n      Button('点我关闭弹窗')\n        .onClick(() => {\n          if (this.getDialogController() != undefined) {\n            this.getDialogController().close()\n          }\n        }).margin(20)\n      \n    }\n  }\n}\n\n@Entry\n@Component\nstruct CustomDialogUser {\n  @State bg: ResourceColor = Color.Green\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample({\n    }),\n    autoCancel: false\n  })\n\n  build() {\n    Column() {\n      Button('click me')\n        .onClick(() => {\n          if (this.dialogController != null) {\n            this.dialogController.open()\n          }\n        }).backgroundColor(0x317aff)\n    }.width('100%').margin({ top: 5 })\n    .backgroundColor(this.bg)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6使用link和consume监听数据变化",
      children: "示例6（使用@Link和@Consume监听数据变化）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
        children: "@Link"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
        children: "@Consume"
      }), "实现页面与弹窗内数据的双向绑定。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@CustomDialog\n@Component\nstruct CustomDialogExample {\n  @Link textValue: string;\n  @Consume inputValue: string;\n  controller?: CustomDialogController;\n\n  cancel: () => void = () => {\n  }\n  confirm: () => void = () => {\n  }\n\n  build() {\n    Column() {\n      Text('Change text').fontSize(20).margin({ top: 10, bottom: 10 })\n      TextInput({ placeholder: '', text: this.textValue }).height(60).width('90%')\n        .onChange((value: string) => {\n          this.textValue = value;\n        })\n      Text('Whether to change a text?').fontSize(16).margin({ bottom: 10 })\n      Flex({ justifyContent: FlexAlign.SpaceAround }) {\n        Button('cancel')\n          .onClick(() => {\n            if (this.controller != undefined) {\n              this.controller.close();\n              this.cancel();\n            }\n          }).backgroundColor(0xffffff).fontColor(Color.Black)\n        Button('confirm')\n          .onClick(() => {\n            if (this.controller != undefined) {\n              this.inputValue = this.textValue;\n              this.controller.close();\n              this.confirm();\n            }\n          }).backgroundColor(0xffffff).fontColor(Color.Red)\n      }.margin({ bottom: 10 })\n    }.borderRadius(10)\n  }\n}\n@Entry\n@Component\nstruct CustomDialogUser {\n  @State textValue: string = ''\n  @Provide inputValue: string = 'click me'\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample({\n      cancel: ()=> { this.onCancel(); },\n      confirm: ()=> { this.onAccept(); },\n      textValue: this.textValue\n    }),\n    cancel: this.exitApp,\n    autoCancel: true,\n    onWillDismiss:(dismissDialogAction: DismissDialogAction)=> {\n      if (dismissDialogAction.reason == DismissReason.PRESS_BACK) {\n        dismissDialogAction.dismiss();\n      }\n      if (dismissDialogAction.reason == DismissReason.TOUCH_OUTSIDE) {\n        dismissDialogAction.dismiss();\n      }\n    },\n    alignment: DialogAlignment.Center,\n    offset: { dx: 0, dy: -20 },\n    gridCount: 4,\n    customStyle: false,\n    cornerRadius: 10,\n  })\n\n  // 在自定义组件即将析构销毁时将dialogController置空\n  aboutToDisappear() {\n    this.dialogController = null; // 将dialogController置空\n  }\n\n  onCancel() {\n    console.info('Callback when the first button is clicked');\n  }\n\n  onAccept() {\n    console.info('Callback when the second button is clicked');\n  }\n\n  exitApp() {\n    console.info('Click the callback in the blank area');\n  }\n  build() {\n    Column() {\n      Button(this.inputValue)\n        .onClick(() => {\n          if (this.dialogController != null) {\n            this.dialogController.open();\n          }\n        }).backgroundColor(0x317aff)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(936431)/* ["default"] */.A) + "",
        width: "323",
        height: "522"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7自定义带loading的弹窗",
      children: "示例7（自定义带loading的弹窗）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "maskColor"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "maskRect"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-loadingprogress/ts-basic-components-loadingprogress",
        children: "LoadingProgress"
      }), "，实现带loading的弹窗，并展示不在maskRect区域的事件透传效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { window } from '@kit.ArkUI';\n\n@CustomDialog\n@Component\nstruct LoadingDialogExample {\n  controller?: CustomDialogController;\n  cancel: () => void = () => {\n  }\n  confirm: () => void = () => {\n  }\n\n  build() {\n    Column() {\n      LoadingProgress().color(Color.Blue).layoutWeight(1)\n    }.borderRadius(10).width(100).height(100)\n  }\n}\n\n@Entry\n@Component\nstruct CustomDialogUser {\n  @State number: number = 0;\n  dialogController: CustomDialogController | null = null;\n\n  // 在自定义组件即将析构销毁时将dialogController置空\n  aboutToDisappear() {\n    this.dialogController = null; // 将dialogController置空\n  }\n\n  onCancel() {\n    console.info('Callback when the first button is clicked');\n  }\n\n  onAccept() {\n    console.info('Callback when the second button is clicked');\n  }\n\n  exitApp() {\n    console.info('Click the callback in the blank area');\n  }\n\n  build() {\n    Column() {\n      Button(\"click \" + this.number).onClick(() => {\n        this.number++;\n      })\n      Button(\"show loading dialog\").onClick(() => {\n        // 获取窗口对象\n        let windowClass = window.getLastWindow(this.getUIContext().getHostContext());\n        windowClass.then(window => {\n          // 获取窗口信息，设置maskRect\n          let properties = window.getWindowProperties();\n          let maskRect = {\n            x: this.getUIContext().px2vp(properties.windowRect.left + 150),\n            y: this.getUIContext().px2vp(properties.windowRect.top + 350),\n            width: this.getUIContext().px2vp(properties.windowRect.width - 300),\n            height: this.getUIContext().px2vp(properties.windowRect.height - 700)\n          } as Rectangle\n          if (this.dialogController == null) {\n            this.dialogController = new CustomDialogController({\n              builder: LoadingDialogExample({\n                cancel: () => {\n                  this.onCancel();\n                },\n                confirm: () => {\n                  this.onAccept();\n                },\n              }),\n              cancel: this.exitApp,\n              maskRect: maskRect,\n              autoCancel: false,\n              maskColor: \"#33AA0000\",\n              showInSubWindow: false,\n              backgroundBlurStyle: BlurStyle.NONE,\n              onWillDismiss: (dismissDialogAction: DismissDialogAction) => {\n                if (dismissDialogAction.reason == DismissReason.PRESS_BACK) {\n                  dismissDialogAction.dismiss();\n                }\n                if (dismissDialogAction.reason == DismissReason.TOUCH_OUTSIDE) {\n                  dismissDialogAction.dismiss();\n                }\n              },\n              alignment: DialogAlignment.Center,\n              customStyle: false,\n              cornerRadius: 10,\n              openAnimation: { duration: 0, tempo: 0 },\n              closeAnimation: { duration: 0, tempo: 0 }\n            })\n          }\n          this.dialogController.close();\n          this.dialogController.open();\n        })\n      }).backgroundColor(0x317aff)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(967998)/* ["default"] */.A) + "",
        width: "297",
        height: "652"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8不使用keyboardavoiddistance调整弹窗与软键盘的间距",
      children: "示例8（不使用keyboardAvoidDistance调整弹窗与软键盘的间距）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过监听键盘变化，调整布局", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#margin",
        children: "margin"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#margin",
        children: "bottom"
      }), "，实现与使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "keyboardAvoidDistance"
      }), "调整弹窗与软键盘的间距一样的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 15开始，在CustomDialogControllerOptions中新增了keyboardAvoidDistance属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { window } from '@kit.ArkUI';\n\n@CustomDialog\n@Component\nstruct CustomDialogExample {\n  @Link textValue: string;\n  @Link inputValue: string;\n  @Link isKeyboardShow: boolean\n  @Link navigationBarHeight: number\n  controller?: CustomDialogController;\n  cancel: () => void = () => {\n  }\n  confirm: () => void = () => {\n  }\n\n  build() {\n    Column() {\n      Text('Change text').fontSize(20).margin({ top: 10, bottom: 10 })\n      TextInput({ placeholder: '', text: this.textValue }).height(60).width('90%')\n        .onChange((value: string) => {\n          this.textValue = value;\n        })\n      Text('Whether to change a text?').fontSize(16).margin({ bottom: 10 })\n      Flex({ justifyContent: FlexAlign.SpaceAround }) {\n        Button('cancel')\n          .onClick(() => {\n            if (this.controller != undefined) {\n              this.controller.close();\n              this.cancel();\n            }\n          }).backgroundColor(0xffffff).fontColor(Color.Black)\n        Button('confirm')\n          .onClick(() => {\n            if (this.controller != undefined) {\n              this.inputValue = this.textValue;\n              this.controller.close();\n              this.confirm();\n            }\n          }).backgroundColor(0xffffff).fontColor(Color.Red)\n      }.margin({ bottom: 10 })\n    }.borderRadius(10)\n    .margin({\n      // 通过键盘显隐调整间距（键盘与弹窗间距为16vp）\n      bottom: this.isKeyboardShow ? -16 : this.navigationBarHeight\n    }).backgroundColor(Color.White)\n  }\n}\n\n@Entry\n@Component\nstruct CustomDialogUser {\n  @State textValue: string = ''\n  @State inputValue: string = 'click me'\n  @State isKeyboardShow: boolean = false\n  @State navigationBarHeight: number = 0\n  windowClass: window.Window | null = null\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample({\n      cancel: () => {\n        this.onCancel();\n      },\n      confirm: () => {\n        this.onAccept();\n      },\n      textValue: this.textValue,\n      inputValue: this.inputValue,\n      isKeyboardShow: this.isKeyboardShow,\n      navigationBarHeight: this.navigationBarHeight\n    }),\n    cancel: this.exitApp,\n    autoCancel: true,\n    onWillDismiss: (dismissDialogAction: DismissDialogAction) => {\n      if (dismissDialogAction.reason == DismissReason.PRESS_BACK) {\n        dismissDialogAction.dismiss();\n      }\n      if (dismissDialogAction.reason == DismissReason.TOUCH_OUTSIDE) {\n        dismissDialogAction.dismiss();\n      }\n    },\n    alignment: DialogAlignment.Bottom,\n    customStyle: true,\n    cornerRadius: 10,\n  })\n\n  aboutToAppear(): void {\n    let windowClass = window.getLastWindow(this.getUIContext().getHostContext());\n    windowClass.then(win => {\n      this.windowClass = win;\n      // 获取底部导航栏高度\n      let navigationArea = this.windowClass?.getWindowAvoidArea(window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR);\n      this.navigationBarHeight = navigationArea.bottomRect.height;\n      this.windowClass?.on('avoidAreaChange', (data) => {\n        if (data.type == window.AvoidAreaType.TYPE_KEYBOARD) {\n          this.isKeyboardShow = data.area.bottomRect.height > 0;\n        }\n      })\n    });\n  }\n\n  // 在自定义组件即将析构销毁时将dialogController置空\n  aboutToDisappear() {\n    this.dialogController = null; // 将dialogController置空\n    this.windowClass?.off('avoidAreaChange')\n  }\n\n  onCancel() {\n    console.info('Callback when the first button is clicked');\n  }\n\n  onAccept() {\n    console.info('Callback when the second button is clicked');\n  }\n\n  exitApp() {\n    console.info('Click the callback in the blank area');\n  }\n\n  build() {\n    Column() {\n      Button(this.inputValue)\n        .onClick(() => {\n          if (this.dialogController != null) {\n            this.dialogController.open();\n          }\n        }).backgroundColor(0x317aff)\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(282922)/* ["default"] */.A) + "",
        width: "336",
        height: "683"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9弹窗生命周期",
      children: "示例9（弹窗生命周期）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例为弹窗配置生命周期回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 19开始，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "CustomDialogControllerOptions"
      }), "中新增了onDidAppear、onDidDisappear、onWillAppear和onWillDisappear属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@CustomDialog\nstruct CustomDialogExample1 {\n  controller?: CustomDialogController\n  cancel: () => void = () => {\n  }\n  confirm: () => void = () => {\n  }\n  build() {\n    Column() {\n      Text('允许访问相机？')\n        .fontSize(30)\n        .height(100)\n      Button('点我关闭弹窗')\n        .onClick(() => {\n          if (this.controller != undefined) {\n            this.controller.close();\n          }\n        })\n        .margin(20)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Example3 {\n  @State log: string = 'Log information:';\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample1({\n      cancel: ()=> { this.onCancel(); },\n      confirm: ()=> { this.onAccept(); }\n    }),\n    cancel: this.existApp,\n    autoCancel: true,\n    alignment: DialogAlignment.Bottom,\n    onWillDismiss:(dismissDialogAction: DismissDialogAction)=> {\n      console.info(`reason= ${dismissDialogAction.reason}`);\n      console.info('dialog onWillDismiss');\n      if (dismissDialogAction.reason == DismissReason.PRESS_BACK) {\n        dismissDialogAction.dismiss();\n      }\n      if (dismissDialogAction.reason == DismissReason.TOUCH_OUTSIDE) {\n        dismissDialogAction.dismiss();\n      }\n    },\n    onDidAppear: () => {\n      this.log += '# onDidAppear';\n      console.info('CustomDialog,is onDidAppear!');\n    },\n    onDidDisappear: () => {\n      this.log += '# onDidDisappear';\n      console.info('CustomDialog,is onDidDisappear!');\n    },\n    onWillAppear: () => {\n      this.log = 'Log information:onWillAppear';\n      console.info('CustomDialog,is onWillAppear!');\n    },\n    onWillDisappear: () => {\n      this.log += '# onWillDisappear';\n      console.info('CustomDialog,is onWillDisappear!');\n    },\n    offset: { dx: 0, dy: -20 },\n    customStyle: false,\n  })\n  onCancel() {\n    console.info('CustomDialog Callback when the first button is clicked');\n  }\n\n  onAccept() {\n    console.info('CustomDialog Callback when the second button is clicked');\n  }\n\n  existApp() {\n    console.info('CustomDialog Click the callback in the blank area');\n  }\n  build() {\n    Column({ space: 5 }) {\n      Button('CustomDialog')\n        .onClick(() => {\n          this.dialogController?.open();\n        })\n      Text(this.log).fontSize(30).margin({ top: 200 })\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(244815)/* ["default"] */.A) + "",
        width: "404",
        height: "668"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10不同customstyle下的弹窗示例",
      children: "示例10（不同customStyle下的弹窗示例）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例是在对齐方式为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "DialogAlignment.Bottom"
      }), "时，展示", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "customStyle"
      }), "不同值下，弹窗内容与安全区域的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@CustomDialog\n@Component\nstruct CustomStyleDialogExample {\n  controller?: CustomDialogController;\n  cancel: () => void = () => {\n  }\n  confirm: () => void = () => {\n  }\n\n  build() {\n    Column().borderRadius(10).width(110).height(110).backgroundColor(\"#2787d9\")\n  }\n}\n\n@Entry\n@Component\nstruct CustomDialogUser {\n  @State customStyle: boolean = false;\n  dialogController: CustomDialogController | null = null;\n\n  // 在自定义组件即将析构销毁时将dialogController置空\n  aboutToDisappear() {\n    this.dialogController = null; // 将dialogController置空\n  }\n\n  onCancel() {\n    console.info('Callback when the first button is clicked');\n  }\n\n  onAccept() {\n    console.info('Callback when the second button is clicked');\n  }\n\n  exitApp() {\n    console.info('Click the callback in the blank area');\n  }\n\n  build() {\n    Column() {\n      Button('change  customStyle:' + this.customStyle).onClick(() => {\n        this.customStyle = !this.customStyle;\n      })\n      Button('show dialog').onClick(() => {\n        if (this.dialogController != null) {\n          this.dialogController.close();\n        }\n        this.dialogController = new CustomDialogController({\n          builder: CustomStyleDialogExample({\n            cancel: () => {\n              this.onCancel();\n            },\n            confirm: () => {\n              this.onAccept();\n            },\n          }),\n          cancel: this.exitApp,\n          autoCancel: true,\n          showInSubWindow: false,\n          onWillDismiss: (dismissDialogAction: DismissDialogAction) => {\n            if (dismissDialogAction.reason == DismissReason.PRESS_BACK) {\n              dismissDialogAction.dismiss();\n            }\n            if (dismissDialogAction.reason == DismissReason.TOUCH_OUTSIDE) {\n              dismissDialogAction.dismiss();\n            }\n          },\n          alignment: DialogAlignment.Bottom,\n          customStyle: this.customStyle,\n          cornerRadius: 10,\n          openAnimation: { duration: 0, tempo: 0 },\n          closeAnimation: { duration: 0, tempo: 0 }\n        })\n        this.dialogController.open();\n      }).margin({ top: 5 })\n    }.width('100%').margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(518465)/* ["default"] */.A) + "",
        width: "289",
        height: "657"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例11自定义背景模糊效果参数",
      children: "示例11（自定义背景模糊效果参数）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "backgroundBlurStyleOptions"
      }), "，实现自定义背景模糊效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 19开始，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "CustomDialogControllerOptions"
      }), "中新增了backgroundBlurStyleOptions属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@CustomDialog\nstruct CustomDialogExample {\n  controller?: CustomDialogController;\n\n  build() {\n    Column() {\n      Text('这是自定义弹窗')\n        .fontSize(30)\n        .height(100)\n      Button('点我关闭弹窗')\n        .onClick(() => {\n          if (this.controller != undefined) {\n            this.controller.close();\n          }\n        })\n        .margin(20)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct CustomDialogUser {\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample(),\n    backgroundColor: undefined,\n    backgroundBlurStyle: BlurStyle.Thin,\n    backgroundBlurStyleOptions: {\n      colorMode: ThemeColorMode.LIGHT,\n      adaptiveColor: AdaptiveColor.AVERAGE,\n      scale: 1,\n      blurOptions: { grayscale: [20, 20] },\n    },\n  })\n\n  build() {\n    Stack({ alignContent: Alignment.Top }) {\n      // $r('app.media.bg')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.bg'))\n      Column() {\n        Button('CustomDialog')\n          .margin(20)\n          .onClick(() => {\n            if (this.dialogController != null) {\n              this.dialogController.open();\n            }\n          })\n      }.width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(204164)/* ["default"] */.A) + "",
        width: "315",
        height: "680"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例12自定义背景效果参数",
      children: "示例12（自定义背景效果参数）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "backgroundEffect"
      }), "，实现自定义背景效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 19开始，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "CustomDialogControllerOptions"
      }), "中新增了backgroundEffect属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@CustomDialog\nstruct CustomDialogExample {\n  controller?: CustomDialogController;\n\n  build() {\n    Column() {\n      Text('这是自定义弹窗')\n        .fontSize(30)\n        .height(100)\n      Button('点我关闭弹窗')\n        .onClick(() => {\n          if (this.controller != undefined) {\n            this.controller.close();\n          }\n        })\n        .margin(20)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct CustomDialogUser {\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample(),\n    backgroundColor: undefined,\n    backgroundBlurStyle: BlurStyle.Thin,\n    backgroundEffect: {\n      radius: 60,\n      saturation: 0,\n      brightness: 1,\n      color: Color.White,\n      blurOptions: { grayscale: [20, 20] }\n    },\n  })\n\n  build() {\n    Stack({ alignContent: Alignment.Top }) {\n      // $r('app.media.bg')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.bg'))\n      Column() {\n        Button('CustomDialog')\n          .margin(20)\n          .onClick(() => {\n            if (this.dialogController != null) {\n              this.dialogController.open();\n            }\n          })\n      }.width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(998537)/* ["default"] */.A) + "",
        width: "315",
        height: "680"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例13自定义弹窗动态刷新宽度",
      children: "示例13（自定义弹窗动态刷新宽度）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过状态变量同步自定义组件的宽度，实现自定义弹窗宽度动态切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@CustomDialog\nstruct CustomDialogExample {\n  controller?: CustomDialogController;\n  @Link currentWidth: number;\n\n  build() {\n    Column() {\n      Text('这是自定义弹窗')\n        .fontSize(30)\n        .height(100)\n      Button('点我关闭弹窗')\n        .onClick(() => {\n          if (this.controller != undefined) {\n            this.controller.close();\n          }\n        })\n        .margin(20)\n    }\n    .borderRadius(32)\n    .backgroundColor(Color.White)\n    .shadow(ShadowStyle.OUTER_DEFAULT_SM)\n    .width(this.currentWidth + \"%\")\n  }\n}\n\n@Entry\n@Component\nstruct CustomDialogUser {\n  @State currentWidth: number = 0\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample({ currentWidth: this.currentWidth }),\n    customStyle: true,\n    isModal: false,\n  })\n\n  build() {\n    Column() {\n\n      Row() {\n        Text(\"宽度设置：\")\n          .height(50)\n        Slider({ min: 60, max: 100, step: 5 })\n          .showTips(true, this.currentWidth + '%')\n          .onChange((value: number, mode: SliderChangeMode) => {\n            this.currentWidth = value;\n          }).width(200)\n      }\n\n      Button('CustomDialog')\n        .margin(20)\n        .onClick(() => {\n          if (this.dialogController != null) {\n            this.dialogController.open();\n          }\n        })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(593344)/* ["default"] */.A) + "",
        width: "384",
        height: "620"
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
664966(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960042-63fb19d73d91be294a3bf8a69ef9bbd7.gif");

},
518465(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960046-813134f84f41a04c233438d27c74f07f.gif");

},
397790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800394-6ad5315322ba932157077779ae7bf1e4.gif");

},
998537(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800398-59ef532102bb434eaf629b34e2e0cb8e.png");

},
593344(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440093-2f085d99237e7118fa461b35a934fb04.gif");

},
537807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
282922(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800396-d0b58b18eb784f8bfcf712545d59aceb.gif");

},
900015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
244815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440091-8bcd32c02f85b2e48df2fa8d4fd94dfa.gif");

},
261894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
821935(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
204164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480047-31f7b359de3d1ca237a8657437879298.png");

},
141376(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480043-6aea7f7fe19f16f3338edded00e632ff.jpg");

},
967998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583480045-d26a729635d90550fcff68d009c25de0.gif");

},
608069(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
936431(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960044-287863217af2ecaa899b09721d26f743.gif");

},
45604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440089-5d7601d39382fde8b6c9ee36b5556beb.gif");

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