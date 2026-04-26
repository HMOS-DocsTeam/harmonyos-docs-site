"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["594041"], {
14395(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_popup_arkts_popup_and_menu_components_uicontext_popup_arkts_popup_and_menu_components_uicontext_popup_md_10b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-use-popup-arkts-popup-and-menu-components-uicontext-popup-arkts-popup-and-menu-components-uicontext-popup-md-10b.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_popup_arkts_popup_and_menu_components_uicontext_popup_arkts_popup_and_menu_components_uicontext_popup_md_10b_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-uicontext-popup/arkts-popup-and-menu-components-uicontext-popup","title":"不依赖UI组件的全局气泡提示 (openPopup)","description":"气泡提示（Popup）在使用时依赖绑定UI组件，否则无法使用。从API version 18开始，可以通过使用全局接口openPopup的方式，在无UI组件的场景下直接或封装使用，例如在事件回调中使用或封装后对外提供能力。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-uicontext-popup/arkts-popup-and-menu-components-uicontext-popup.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-uicontext-popup","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-uicontext-popup/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-uicontext-popup/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"不依赖UI组件的全局气泡提示 (openPopup)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-popup-and-menu-components-uicontext-popup","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"气泡提示（Popup）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-popup/"},"next":{"title":"绑定模态页面概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-modal-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-uicontext-popup/arkts-popup-and-menu-components-uicontext-popup.md


const frontMatter = {
	title: '不依赖UI组件的全局气泡提示 (openPopup)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-popup-and-menu-components-uicontext-popup',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '不依赖UI组件的全局气泡提示 (openPopup)';

const assets = {

};



const toc = [{
  "value": "弹出气泡",
  "id": "弹出气泡",
  "level": 2
}, {
  "value": "创建ComponentContent",
  "id": "创建componentcontent",
  "level": 3
}, {
  "value": "绑定组件信息",
  "id": "绑定组件信息",
  "level": 3
}, {
  "value": "设置弹出气泡样式",
  "id": "设置弹出气泡样式",
  "level": 3
}, {
  "value": "更新气泡样式",
  "id": "更新气泡样式",
  "level": 2
}, {
  "value": "关闭气泡",
  "id": "关闭气泡",
  "level": 2
}, {
  "value": "在HAR包中使用全局气泡提示",
  "id": "在har包中使用全局气泡提示",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "不依赖ui组件的全局气泡提示-openpopup",
        children: "不依赖UI组件的全局气泡提示 (openPopup)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-popup",
        children: "气泡提示（Popup）"
      }), "在使用时依赖绑定UI组件，否则无法使用。从API version 18开始，可以通过使用全局接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#openpopup18",
        children: "openPopup"
      }), "的方式，在无UI组件的场景下直接或封装使用，例如在事件回调中使用或封装后对外提供能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "弹出气泡",
      children: "弹出气泡"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#openpopup18",
        children: "openPopup"
      }), "可以弹出气泡。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.promptAction.openPopup(this.contentNode, { id: targetId }, {\n  enableArrow: true\n})\n  .then(() => {\n    hilog.info(0xFF00, 'popupBuildText', 'openPopup success');\n  })\n  .catch((err: BusinessError) => {\n    hilog.error(0xFF00, 'popupBuildText', 'openPopup error: ' + err.code + ' ' + err.message);\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建componentcontent",
      children: "创建ComponentContent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过调用openPopup接口弹出气泡，需要定义ComponentContent，以提供自定义弹出框的内容。详细规格可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
        children: "ComponentContent"
      }), "说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "private contentNode: ComponentContent<Object> =\n  new ComponentContent(this.uiContext, wrapBuilder(buildText), this.message);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果在wrapBuilder中包含其他组件（例如：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-popup/ohos-arkui-advanced-popup",
        children: "Popup"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/system-preset-ui-component-library/ohos-arkui-advanced-chip/ohos-arkui-advanced-chip",
        children: "Chip"
      }), "组件），则应在创建ComponentContent时设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#buildoptions12",
        children: "nestingBuilderSupported"
      }), "属性为true。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nexport function buildText(params: Params) {\n  Popup({\n    // 类型设置图标内容。\n    icon: {\n      // 请将$r('app.media.app_icon')替换为实际资源文件\n      image: $r('app.media.app_icon'),\n      width: 32,\n      height: 32,\n      fillColor: Color.White,\n      borderRadius: 10\n    } as PopupIconOptions,\n    // 设置文字内容。\n    title: {\n      text: `This is a Popup title 1`,\n      fontSize: 20,\n      fontColor: Color.Black,\n      fontWeight: FontWeight.Normal\n    } as PopupTextOptions,\n    // 设置文字内容。\n    message: {\n      text: `This is a Popup message 1`,\n      fontSize: 15,\n      fontColor: Color.Black\n    } as PopupTextOptions,\n    // 设置按钮内容。\n    buttons: [{\n      text: 'confirm',\n      action: () => {\n        hilog.info(0xFF00, 'popupBuildText', 'confirm button click');\n      },\n      fontSize: 15,\n      fontColor: Color.Black,\n    },\n      {\n        text: 'cancel',\n        action: () => {\n          hilog.info(0xFF00, 'popupBuildText', 'cancel button click');\n        },\n        fontSize: 15,\n        fontColor: Color.Black\n      },] as [PopupButtonOptions?, PopupButtonOptions?]\n  });\n}\n\nlet contentNode: ComponentContent<Object> =\n  new ComponentContent(uiContext, wrapBuilder(buildText), message, { nestingBuilderSupported: true });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "绑定组件信息",
      children: "绑定组件信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过调用openPopup接口弹出气泡，需要提供绑定组件的信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-i/arkts-apis-uicontext-i#targetinfo18",
        children: "TargetInfo"
      }), "。若未传入有效的target，气泡将无法弹出。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前有两种设置target的方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "target的id属性设置为number类型，此时需要将id设置为对应组件的UniqueID，组件的UniqueID由系统保证唯一性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let frameNode: FrameNode | null = this.uiContext.getFrameNodeByUniqueId(this.getUniqueId());\nlet targetId = frameNode?.getChild(0)?.getUniqueId();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["target的id属性设置为string类型，此时需要将id设置为对应组件的通用属性", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id#id",
            children: "id"
          }), "值。当无法保证id的唯一性时，如多团队开发或者复用自定义组件，可以通过设置componentId属性明确指定此id的范围来精确指定target，此时componentId属性可以设置为对应组件的父组件或者所在自定义组件的UniqueID。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "build() {\n  NavDestination() {\n    Column() {\n      Row() {\n        Button('button1')\n          .id(this.targetIdString)\n      }\n\n      Row() {\n        Button('button2')\n          .id(this.targetIdString)\n      }\n\n      Button('openPopup')\n        .onClick(() => {\n          let frameNode: FrameNode | null = this.uiContext.getFrameNodeByUniqueId(this.getUniqueId());\n          let componentId = frameNode?.getChild(1)?.getChild(0)?.getChild(1)?.getUniqueId();\n          if (componentId == undefined) {\n            this.componentId = 0;\n          } else {\n            this.componentId = componentId;\n          }\n          this.promptActionClass.setPromptAction(this.promptAction);\n          this.promptActionClass.setContentNode(this.contentNode);\n          this.promptActionClass.setOptions(this.options);\n          this.promptActionClass.setIsPartialUpdate(false);\n          this.promptActionClass.setTarget({ id: this.targetIdString, componentId: this.componentId });\n          this.promptActionClass.openPopup();\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置弹出气泡样式",
      children: "设置弹出气泡样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过调用openPopup接口弹出气泡，可以设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#popupcommonoptions18%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "PopupCommonOptions"
      }), "属性调整气泡样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "private options: PopupCommonOptions = { enableArrow: true };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "更新气泡样式",
      children: "更新气泡样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#updatepopup18",
        children: "updatePopup"
      }), "可以更新气泡的样式。支持全量更新和增量更新其气泡样式，不支持更新", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#popupcommonoptions18%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "PopupCommonOptions"
      }), "中的showInSubWindow、focusable、onStateChange、onWillDismiss和transition属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.promptAction.updatePopup(this.contentNode, {\n  enableArrow: false\n}, true)\n  .then(() => {\n    hilog.info(0xFF00, 'popupBuildText', 'updatePopup success');\n  })\n  .catch((err: BusinessError) => {\n    hilog.error(0xFF00, 'popupBuildText', 'updatePopup error: ' + err.code + ' ' + err.message);\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关闭气泡",
      children: "关闭气泡"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#closepopup18",
        children: "closePopup"
      }), "可以关闭气泡。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.promptAction.closePopup(this.contentNode)\n  .then(() => {\n    hilog.info(0xFF00, 'popupBuildText', 'closePopup success');\n  })\n  .catch((err: BusinessError) => {\n    hilog.error(0xFF00, 'popupBuildText', 'closePopup error: ' + err.code + ' ' + err.message);\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(926099)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#updatepopup18",
        children: "updatePopup"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#closepopup18",
        children: "closePopup"
      }), "依赖content来更新或者关闭指定的气泡，开发者需自行维护传入的content。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在har包中使用全局气泡提示",
      children: "在HAR包中使用全局气泡提示"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
        children: "HAR"
      }), "包封装一个Popup，从而对外提供气泡的弹出、更新和关闭能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { ComponentContent, TargetInfo, PromptAction } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nexport class PromptActionClass {\n  private promptAction: PromptAction | null = null;\n  private contentNode: ComponentContent<Object> | null = null;\n  private options: PopupCommonOptions | null = null;\n  private target: TargetInfo | null = null;\n  private isPartialUpdate: boolean = false;\n\n  public setPromptAction(promptAction: PromptAction) {\n    this.promptAction = promptAction;\n  }\n\n  public setContentNode(node: ComponentContent<Object>) {\n    this.contentNode = node;\n  }\n\n  public setTarget(target: TargetInfo) {\n    this.target = target;\n  }\n\n  public setOptions(options: PopupCommonOptions) {\n    this.options = options;\n  }\n\n  public setIsPartialUpdate(isPartialUpdate: boolean) {\n    this.isPartialUpdate = isPartialUpdate;\n  }\n\n  public openPopup() {\n    if (this.promptAction != null) {\n      this.promptAction.openPopup(this.contentNode, this.target, this.options)\n        .then(() => {\n          hilog.info(0xFF00, 'popupMainPage', 'openPopup success');\n        })\n        .catch((err: BusinessError) => {\n          hilog.error(0xFF00, 'popupMainPage', 'openPopup error: ' + err.code + ' ' + err.message);\n        });\n    }\n  }\n\n  public closePopup() {\n    if (this.promptAction != null) {\n      this.promptAction.closePopup(this.contentNode)\n        .then(() => {\n          hilog.info(0xFF00, 'popupMainPage', 'closePopup success');\n        })\n        .catch((err: BusinessError) => {\n          hilog.error(0xFF00, 'popupMainPage', 'closePopup error: ' + err.code + ' ' + err.message);\n        });\n    }\n  }\n\n  public updatePopup(options: PopupCommonOptions) {\n    if (this.promptAction != null) {\n      this.promptAction.updatePopup(this.contentNode, options, this.isPartialUpdate)\n        .then(() => {\n          hilog.info(0xFF00, 'popupMainPage', 'updatePopup success');\n        })\n        .catch((err: BusinessError) => {\n          hilog.error(0xFF00, 'popupMainPage', 'updatePopup error: ' + err.code + ' ' + err.message);\n        });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PromptActionClass } from './PopupMainPage';\nimport { ComponentContent, PromptAction } from '@kit.ArkUI';\n\nconst ID: number = 0;\n\nclass Params {\n  public text: string = '';\n  public promptActionClass: PromptActionClass = new PromptActionClass();\n\n  constructor(text: string, promptActionClass: PromptActionClass) {\n    this.text = text;\n    this.promptActionClass = promptActionClass;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(20)\n      .margin({ top: 10 })\n    Button('Update')\n      .margin({ top: 10 })\n      .width(100)\n      .onClick(() => {\n        params.promptActionClass.updatePopup({\n          enableArrow: false,\n        });\n      })\n    Button('Close')\n      .margin({ top: 10 })\n      .width(100)\n      .onClick(() => {\n        params.promptActionClass.closePopup();\n      })\n  }.width(130).height(150)\n}\n\n@Entry\n@Component\nexport struct OpenPopup {\n  @State message: string = 'hello';\n  private uiContext: UIContext = this.getUIContext();\n  private promptAction: PromptAction = this.uiContext.getPromptAction();\n  private promptActionClass: PromptActionClass = new PromptActionClass();\n  private targetId: number = ID;\n  private contentNode: ComponentContent<Object> =\n    new ComponentContent(this.uiContext, wrapBuilder(buildText), this.message);\n  private options: PopupCommonOptions = { enableArrow: true };\n\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button('openPopup')\n          .margin({ top: 50, left: 100 })\n          .onClick(() => {\n            let frameNode: FrameNode | null = this.uiContext.getFrameNodeByUniqueId(this.getUniqueId());\n            let targetId = frameNode?.getChild(0)?.getUniqueId();\n            if (targetId == undefined) {\n              this.targetId = 0;\n            } else {\n              this.targetId = targetId;\n            }\n            this.promptActionClass.setPromptAction(this.promptAction);\n            this.promptActionClass.setContentNode(this.contentNode);\n            this.promptActionClass.setOptions(this.options);\n            this.promptActionClass.setIsPartialUpdate(false);\n            this.promptActionClass.setTarget({ id: this.targetId });\n            this.promptActionClass.openPopup();\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(387946)/* ["default"] */.A) + "",
        width: "340",
        height: "492"
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
387946(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798272-87aef5efce80da349669e66c799f106f.gif");

},
926099(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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