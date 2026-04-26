"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["734223"], {
238620(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_dialogs_arkts_dialog_controller_arkts_dialog_controller_md_f5a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-use-dialogs-arkts-dialog-controller-arkts-dialog-controller-md-f5a.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_dialogs_arkts_dialog_controller_arkts_dialog_controller_md_f5a_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-controller/arkts-dialog-controller","title":"弹出框控制器","description":"ArkUI的弹出框控制器在绑定弹出框后，可提供对弹出框的操作能力，当前支持关闭功能。可以将控制器传入弹出框内容区域后进行操作。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-controller/arkts-dialog-controller.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-controller","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-controller/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-controller/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"弹出框控制器","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-dialog-controller","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"弹出框层级管理","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-levelorder/"},"next":{"title":"弹出框焦点策略","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-focusable/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-controller/arkts-dialog-controller.md


const frontMatter = {
	title: '弹出框控制器',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-dialog-controller',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '弹出框控制器';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "创建自定义内容为ComponentContent的弹出框控制器",
  "id": "创建自定义内容为componentcontent的弹出框控制器",
  "level": 2
}, {
  "value": "创建自定义内容为CustomBuilder的弹出框控制器",
  "id": "创建自定义内容为custombuilder的弹出框控制器",
  "level": 2
}, {
  "value": "创建自定义内容为CustomBuilderWithId的弹出框控制器",
  "id": "创建自定义内容为custombuilderwithid的弹出框控制器",
  "level": 2
}, {
  "value": "在CustomDialogController内容区直接获取弹出框控制器",
  "id": "在customdialogcontroller内容区直接获取弹出框控制器",
  "level": 2
}, {
  "value": "使用控制器获取弹出框的状态",
  "id": "使用控制器获取弹出框的状态",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "弹出框控制器",
        children: "弹出框控制器"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI的弹出框控制器在绑定弹出框后，可提供对弹出框的操作能力，当前支持关闭功能。可以将控制器传入弹出框内容区域后进行操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，可设置controller参数以绑定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#dialogcontroller18",
        children: "DialogController"
      }), "控制器，通过控制器能够操作弹出框。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#opencustomdialogwithcontroller18",
        children: "openCustomDialogWithController"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#presentcustomdialog18",
        children: "presentCustomDialog"
      }), "支持通过controller参数来绑定弹出框进行操作，目前", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#getdialogcontroller18",
        children: "getDialogController"
      }), "支持获取自定义组件所在的弹出框的控制器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(767127)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个弹出框控制器只能绑定一个弹出框，且操作只对该弹出框生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#getdialogcontroller18",
        children: "getDialogController"
      }), "获取弹出框控制器时，如果当前自定义组件不在弹出框中显示则获取为undefined。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建自定义内容为componentcontent的弹出框控制器",
      children: "创建自定义内容为ComponentContent的弹出框控制器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(792073)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细变量定义请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化一个自定义弹出框内容区的入参类，内部包含弹出框控制器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class Params {\n  public text: string = '';\n  public dialogController: promptAction.CommonController = new promptAction.DialogController();\n\n  constructor(text: string, dialogController: promptAction.CommonController) {\n    this.text = text;\n    this.dialogController = dialogController;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化一个自定义的弹出框内容区，内部包含一个按钮，该按钮通过该自定义组件自带的弹出框控制器实现关闭功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Component\nstruct MyComponent {\n  build() {\n    Column({ space: 5 }) {\n      Button('Close Dialog(Built-in Controller)')\n        .onClick(() => {\n          let dialogController: promptAction.DialogController = this.getDialogController();\n          if (dialogController !== undefined) {\n            dialogController.close();\n          }\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化另一自定义弹出框内容区，其中包含一个Text组件和一个按钮，该按钮通过外部传递的弹出框控制器用于关闭弹出框，并且该内容区还包含前一个自定义弹出框内容区。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Builder\nfunction buildText(params: Params) {\n  Column({ space: 5 }) {\n    Text(params.text)\n      .fontSize(30)\n    if (params.dialogController !== undefined) {\n      Button('Close Dialog(External Controller)')\n        .onClick(() => {\n          params.dialogController.close();\n        })\n    }\n    MyComponent()\n  }\n  .width(300)\n  .height(200)\n  .backgroundColor('#FFF0F0F0')\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["初始化一个弹出框控制器，并通过设置控制器参数来初始化一个弹出框内容实体对象。最后，通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
            children: "UIContext"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getpromptaction",
            children: "getPromptAction"
          }), "方法获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction",
            children: "PromptAction"
          }), "对象，再通过该对象调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#opencustomdialogwithcontroller18",
            children: "openCustomDialogWithController"
          }), "接口，并且设置初始化的内容实体对象和控制器参数以创建弹出框。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let dialogController: promptAction.CommonController = new promptAction.DialogController();\nlet contentNode: ComponentContent<Object> =\n  new ComponentContent(this.getUIContext(), wrapBuilder(buildText),\n    new Params(this.message, dialogController));\nthis.getUIContext().getPromptAction().openCustomDialogWithController(\n  contentNode, dialogController, this.baseDialogOptions).catch((err: BusinessError) => {\n  hilog.error(0x0000, 'dialogController',\n    'openCustomDialogWithController error: ' + err.code + ' ' + err.message);\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建自定义内容为custombuilder的弹出框控制器",
      children: "创建自定义内容为CustomBuilder的弹出框控制器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(842130)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细变量定义请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化一个自定义弹出框内容区，内部包含一个Text组件和一个按钮，该按钮通过外部传递的弹出框控制器实现关闭功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Builder\ncustomDialogComponent(dialogController: promptAction.DialogController) {\n  Column({ space: 5 }) {\n    Text(this.message)\n      .fontSize(30)\n    if (dialogController !== undefined) {\n      Button('Close Dialog(External Controller)')\n        .onClick(() => {\n          dialogController.close();\n        })\n    }\n  }\n  .height(200)\n  .padding(5)\n  .justifyContent(FlexAlign.SpaceBetween)\n  .backgroundColor('#FFF0F0F0')\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["初始化一个弹出框控制器，并通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
            children: "UIContext"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getpromptaction",
            children: "getPromptAction"
          }), "方法获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction",
            children: "PromptAction"
          }), "对象，再通过该对象调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#presentcustomdialog18",
            children: "presentCustomDialog"
          }), "接口，设置初始化的内容实体对象和控制器参数以创建弹出框。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let dialogController: promptAction.CommonController = new promptAction.DialogController();\nthis.getUIContext().getPromptAction().presentCustomDialog(() => {\n  this.customDialogComponent(dialogController);\n}, dialogController, this.dialogOptions).catch((err: BusinessError) => {\n  hilog.error(0x0000, 'dialogController', 'presentCustomDialog error: ' + err.code + ' ' + err.message);\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建自定义内容为custombuilderwithid的弹出框控制器",
      children: "创建自定义内容为CustomBuilderWithId的弹出框控制器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(363062)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细变量定义请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化一个弹出框内容区，内部包含一个Text组件、一个通过外部传递的弹出框ID用于关闭弹出框的按钮和一个通过外部传递的弹出框控制器用于关闭弹出框的按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Builder\ncustomDialogComponentWithId(dialogId: number, dialogController: promptAction.DialogController) {\n  Column({ space: 5 }) {\n    Text(this.message)\n      .fontSize(30)\n    if (dialogId !== undefined) {\n      Button('Close Dialog(DialogID)')\n        .onClick(() => {\n          this.getUIContext().getPromptAction().closeCustomDialog(dialogId);\n        })\n    }\n    if (dialogController !== undefined) {\n      Button('Close Dialog(External Controller)')\n        .onClick(() => {\n          dialogController.close();\n        })\n    }\n  }\n  .height(200)\n  .padding(5)\n  .justifyContent(FlexAlign.SpaceBetween)\n  .backgroundColor('#FFF0F0F0')\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["初始化一个弹出框控制器，并通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
            children: "UIContext"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getpromptaction",
            children: "getPromptAction"
          }), "方法获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction",
            children: "PromptAction"
          }), "对象，再通过该对象调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#presentcustomdialog18",
            children: "presentCustomDialog"
          }), "接口，设置初始化的内容实体对象和控制器参数以创建弹出框。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let dialogController: promptAction.CommonController = new promptAction.DialogController();\nthis.getUIContext().getPromptAction().presentCustomDialog((dialogId: number) => {\n  this.customDialogComponentWithId(dialogId, dialogController);\n}, dialogController, this.dialogOptions).catch((err: BusinessError) => {\n  hilog.error(0x0000, 'dialogController', 'presentCustomDialog error: ' + err.code + ' ' + err.message);\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在customdialogcontroller内容区直接获取弹出框控制器",
      children: "在CustomDialogController内容区直接获取弹出框控制器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(869846)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细变量定义请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化一个自定义弹出框内容区，内部包含一个Text组件和一个按钮，该按钮通过弹出框控制器关闭弹出框。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@CustomDialog\n@Component\nstruct CustomDialogExample {\n  controller?: CustomDialogController;\n\n  build() {\n    Column({ space: 5 }) {\n      Text('I am content')\n        .fontSize(30)\n      Button('Close Dialog(Built-in Controller)')\n        .onClick(() => {\n          let dialogController: PromptActionDialogController = this.getDialogController();\n          if (dialogController !== undefined) {\n            dialogController.close();\n          }\n        })\n    }\n    .height(200)\n    .backgroundColor('#FFF0F0F0')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化一个自定义弹出框构造器，关联自定义弹出框内容区。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let customDialogController: CustomDialogController = new CustomDialogController({\n  builder: CustomDialogExample(),\n  offset: {\n    dx: 0,\n    dy: 50\n  }\n});\ncustomDialogController.open();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用控制器获取弹出框的状态",
      children: "使用控制器获取弹出框的状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在自定义弹出框场景中，从API version 20 开始，可以通过控制器调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#getstate20",
        children: "getState"
      }), "接口获取弹出框状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(295237)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细变量定义请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化一个自定义弹出框内容区，内部包含一个Text组件和一个按钮，该按钮通过调用getState获取当前弹出框状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\ncustomDialogComponentGetState(dialogController: promptAction.DialogController) {\n  Column({ space: 5 }) {\n    Text(this.message)\n      .fontSize(30)\n    if (dialogController !== undefined) {\n      Button('Check Status:' + this.dialogState)\n        .onClick(() => {\n          this.dialogState = dialogController.getState();\n        })\n      Button('Close Dialog(External Controller)')\n        .onClick(() => {\n          dialogController.close();\n        })\n    }\n  }\n  .height(200)\n  .padding(5)\n  .justifyContent(FlexAlign.SpaceBetween)\n  .backgroundColor('#FFF0F0F0')\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过外部传递的弹出框控制器和自定义组件自带的弹出框控制器，在自定义弹出框内容区域内实现关闭功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ComponentContent, promptAction } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nclass Params {\n  public text: string = '';\n  public dialogController: promptAction.CommonController = new promptAction.DialogController();\n\n  constructor(text: string, dialogController: promptAction.CommonController) {\n    this.text = text;\n    this.dialogController = dialogController;\n  }\n}\n\n\n@Component\nstruct MyComponent {\n  build() {\n    Column({ space: 5 }) {\n      Button('Close Dialog(Built-in Controller)')\n        .onClick(() => {\n          let dialogController: promptAction.DialogController = this.getDialogController();\n          if (dialogController !== undefined) {\n            dialogController.close();\n          }\n        })\n    }\n  }\n}\n\n\n@Builder\nfunction buildText(params: Params) {\n  Column({ space: 5 }) {\n    Text(params.text)\n      .fontSize(30)\n    if (params.dialogController !== undefined) {\n      Button('Close Dialog(External Controller)')\n        .onClick(() => {\n          params.dialogController.close();\n        })\n    }\n    MyComponent()\n  }\n  .width(300)\n  .height(200)\n  .backgroundColor('#FFF0F0F0')\n}\n\n\n@CustomDialog\n@Component\nstruct CustomDialogExample {\n  controller?: CustomDialogController;\n\n  build() {\n    Column({ space: 5 }) {\n      Text('I am content')\n        .fontSize(30)\n      Button('Close Dialog(Built-in Controller)')\n        .onClick(() => {\n          let dialogController: PromptActionDialogController = this.getDialogController();\n          if (dialogController !== undefined) {\n            dialogController.close();\n          }\n        })\n    }\n    .height(200)\n    .backgroundColor('#FFF0F0F0')\n  }\n}\n\n\n@Entry\n@Component\nexport struct DialogController {\n  @State dialogState: promptAction.CommonState = 0;\n  private message = 'dialog';\n  private baseDialogOptions: promptAction.BaseDialogOptions = {\n    isModal: false,\n    autoCancel: false,\n    offset: {\n      dx: 0,\n      dy: 50\n    }\n  };\n  private dialogOptions: promptAction.DialogOptions = {\n    isModal: false,\n    autoCancel: false,\n    offset: {\n      dx: 0,\n      dy: 50\n    }\n  };\n\n  @Builder\n  customDialogComponent(dialogController: promptAction.DialogController) {\n    Column({ space: 5 }) {\n      Text(this.message)\n        .fontSize(30)\n      if (dialogController !== undefined) {\n        Button('Close Dialog(External Controller)')\n          .onClick(() => {\n            dialogController.close();\n          })\n      }\n    }\n    .height(200)\n    .padding(5)\n    .justifyContent(FlexAlign.SpaceBetween)\n    .backgroundColor('#FFF0F0F0')\n  }\n\n\n  @Builder\n  customDialogComponentWithId(dialogId: number, dialogController: promptAction.DialogController) {\n    Column({ space: 5 }) {\n      Text(this.message)\n        .fontSize(30)\n      if (dialogId !== undefined) {\n        Button('Close Dialog(DialogID)')\n          .onClick(() => {\n            this.getUIContext().getPromptAction().closeCustomDialog(dialogId);\n          })\n      }\n      if (dialogController !== undefined) {\n        Button('Close Dialog(External Controller)')\n          .onClick(() => {\n            dialogController.close();\n          })\n      }\n    }\n    .height(200)\n    .padding(5)\n    .justifyContent(FlexAlign.SpaceBetween)\n    .backgroundColor('#FFF0F0F0')\n  }\n\n\n  @Builder\n  customDialogComponentGetState(dialogController: promptAction.DialogController) {\n    Column({ space: 5 }) {\n      Text(this.message)\n        .fontSize(30)\n      if (dialogController !== undefined) {\n        Button('Check Status:' + this.dialogState)\n          .onClick(() => {\n            this.dialogState = dialogController.getState();\n          })\n        Button('Close Dialog(External Controller)')\n          .onClick(() => {\n            dialogController.close();\n          })\n      }\n    }\n    .height(200)\n    .padding(5)\n    .justifyContent(FlexAlign.SpaceBetween)\n    .backgroundColor('#FFF0F0F0')\n  }\n\n\n  build() {\n    NavDestination() {\n      Column({ space: 5 }) {\n        Button('OpenCustomDialogWithController')\n          .onClick(() => {\n            let dialogController: promptAction.CommonController = new promptAction.DialogController();\n            let contentNode: ComponentContent<Object> =\n              new ComponentContent(this.getUIContext(), wrapBuilder(buildText),\n                new Params(this.message, dialogController));\n            this.getUIContext().getPromptAction().openCustomDialogWithController(\n              contentNode, dialogController, this.baseDialogOptions).catch((err: BusinessError) => {\n              hilog.error(DOMAIN, 'dialogController',\n                'openCustomDialogWithController error: ' + err.code + ' ' + err.message);\n            });\n          })\n        Button('PresentCustomDialog+CustomBuilder')\n          .onClick(() => {\n            let dialogController: promptAction.CommonController = new promptAction.DialogController();\n            this.getUIContext().getPromptAction().presentCustomDialog(() => {\n              this.customDialogComponent(dialogController);\n            }, dialogController, this.dialogOptions).catch((err: BusinessError) => {\n              hilog.error(DOMAIN, 'dialogController', 'presentCustomDialog error: ' + err.code + ' ' + err.message);\n            });\n          })\n        Button('PresentCustomDialog+CustomBuilderWithId')\n          .onClick(() => {\n            let dialogController: promptAction.CommonController = new promptAction.DialogController();\n            this.getUIContext().getPromptAction().presentCustomDialog((dialogId: number) => {\n              this.customDialogComponentWithId(dialogId, dialogController);\n            }, dialogController, this.dialogOptions).catch((err: BusinessError) => {\n              hilog.error(DOMAIN, 'dialogController', 'presentCustomDialog error: ' + err.code + ' ' + err.message);\n            });\n          })\n        Button('PresentCustomDialog+CustomBuilderGetState')\n          .onClick(() => {\n            let dialogController: promptAction.CommonController = new promptAction.DialogController();\n            this.getUIContext().getPromptAction().presentCustomDialog(() => {\n              this.customDialogComponentGetState(dialogController);\n            }, dialogController, this.dialogOptions).catch((err: BusinessError) => {\n              hilog.error(DOMAIN, 'dialogController', 'presentCustomDialog error: ' + err.code + ' ' + err.message);\n            });\n          })\n        Button('CustomDialogController')\n          .onClick(() => {\n            let customDialogController: CustomDialogController = new CustomDialogController({\n              builder: CustomDialogExample(),\n              offset: {\n                dx: 0,\n                dy: 50\n              }\n            });\n            customDialogController.open();\n          })\n      }.width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(847208)/* ["default"] */.A) + "",
        width: "350",
        height: "475"
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
767127(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
847208(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798260-f734bfd1e4c034d06b11d898904341a8.gif");

},
842130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
792073(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
295237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
869846(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
363062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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