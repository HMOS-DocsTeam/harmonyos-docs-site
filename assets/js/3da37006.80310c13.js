"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["108206"], {
428157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_dialogs_arkts_common_components_custom_dialog_arkts_common_components_custom_dialog_md_3da_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-use-dialogs-arkts-common-components-custom-dialog-arkts-common-components-custom-dialog-md-3da.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_dialogs_arkts_common_components_custom_dialog_arkts_common_components_custom_dialog_md_3da_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-common-components-custom-dialog/arkts-common-components-custom-dialog","title":"基础自定义弹出框 (CustomDialog)","description":"CustomDialog是自定义弹出框，可用于广告、中奖、警告、软件更新等与用户交互响应操作。开发者可以通过CustomDialogController类显示自定义弹出框。具体用法请参考自定义弹出框。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-common-components-custom-dialog/arkts-common-components-custom-dialog.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-common-components-custom-dialog","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-common-components-custom-dialog/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-common-components-custom-dialog/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"基础自定义弹出框 (CustomDialog)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-custom-dialog","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"不依赖UI组件的全局自定义弹出框 (openCustomDialog)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-uicontext-custom-dialog/"},"next":{"title":"固定样式弹出框","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-fixes-style-dialog/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-common-components-custom-dialog/arkts-common-components-custom-dialog.md


const frontMatter = {
	title: '基础自定义弹出框 (CustomDialog)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-custom-dialog',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '基础自定义弹出框 (CustomDialog)';

const assets = {

};



const toc = [{
  "value": "生命周期",
  "id": "生命周期",
  "level": 2
}, {
  "value": "创建自定义弹出框",
  "id": "创建自定义弹出框",
  "level": 2
}, {
  "value": "弹出框的交互",
  "id": "弹出框的交互",
  "level": 2
}, {
  "value": "弹出框的动画",
  "id": "弹出框的动画",
  "level": 2
}, {
  "value": "弹出框的样式",
  "id": "弹出框的样式",
  "level": 2
}, {
  "value": "嵌套自定义弹出框",
  "id": "嵌套自定义弹出框",
  "level": 2
}, {
  "value": "实现弹出框的物理返回拦截",
  "id": "实现弹出框的物理返回拦截",
  "level": 2
}, {
  "value": "设置弹出框避让软键盘的距离",
  "id": "设置弹出框避让软键盘的距离",
  "level": 2
}, {
  "value": "获取弹出框的状态",
  "id": "获取弹出框的状态",
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
        id: "基础自定义弹出框-customdialog",
        children: "基础自定义弹出框 (CustomDialog)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CustomDialog是自定义弹出框，可用于广告、中奖、警告、软件更新等与用户交互响应操作。开发者可以通过CustomDialogController类显示自定义弹出框。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box",
        children: "自定义弹出框"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(760309)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前，ArkUI弹出框默认为非页面级弹出框，在页面路由跳转时，如果开发者未调用close方法将其关闭，弹出框将不会自动关闭。若需实现在跳转页面时覆盖弹出框的场景，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navdestination#%E9%A1%B5%E9%9D%A2%E6%98%BE%E7%A4%BA%E7%B1%BB%E5%9E%8B",
        children: "组件导航子页面显示类型的弹窗类型"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-embedded-dialog",
        children: "页面级弹出框"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["默认为模态弹窗且有蒙层，不可与蒙层下方控件进行交互（不支持点击和手势等向下透传）。可以通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "CustomDialogControllerOptions"
      }), "中的isModal属性来实现模态和非模态弹窗，详细说明可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-dialog-overview#%E5%BC%B9%E7%AA%97%E7%9A%84%E7%A7%8D%E7%B1%BB",
        children: "弹窗的种类"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当isModal为true时，弹出框为模态弹窗，且弹窗周围的蒙层区不支持透传。isModal为false时，弹出框为非模态弹窗，且弹窗周围的蒙层区可以透传。因此如果需要同时允许弹出框的交互和弹出框外页面的交互行为，需要将弹出框设置为非模态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期",
      children: "生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 19开始，自定义弹出框提供了生命周期函数用于通知用户该弹出框的生命周期。生命周期的触发时序依次为：onWillAppear -> onDidAppear -> onWillDisappear -> onDidDisappear。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框显示动效前的事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDidAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框弹出后的事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框退出动效前的事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDidDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框消失后的事件回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建自定义弹出框",
      children: "创建自定义弹出框"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用@CustomDialog装饰器装饰自定义弹出框，可在此装饰器内自定义弹出框内容。CustomDialogController需在@Component内定义。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@CustomDialog\nstruct CustomDialogExample {\n  controller?: CustomDialogController;\n\n  build() {\n    Column() {\n      // 请将$r('app.string.i_am_content')替换为实际资源文件，在本示例中该资源文件的value值为\"我是内容\"\n      Text($r('app.string.i_am_content'))\n        .fontSize(20)\n    }.height(60).justifyContent(FlexAlign.Center)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建构造器，与装饰器相互连接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nexport struct CreateCustomDialogNew {\n  dialogController: CustomDialogController = new CustomDialogController({\n    builder: CustomDialogExample(),\n  })\n// ···\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击与onClick事件绑定的组件使弹出框弹出。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nexport struct CreateCustomDialogNew {\n  dialogController: CustomDialogController = new CustomDialogController({\n    builder: CustomDialogExample(),\n  })\n  build() {\n    NavDestination() {\n      Column() {\n        Button('click me')\n          .onClick(() => {\n            this.dialogController.open();\n          })\n      }.width('100%').margin({ top: 5 })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(271679)/* ["default"] */.A) + "",
            width: "330",
            height: "712"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "弹出框的交互",
      children: "弹出框的交互"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹出框可用于数据交互，完成用户一系列响应操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在@CustomDialog装饰器内添加按钮和数据函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@CustomDialog\nstruct CustomDialogExample {\n  cancel: () => void = () => {\n  }\n  confirm: () => void = () => {\n  }\n  controller?: CustomDialogController;\n\n  build() {\n    Column() {\n      // 请将$r('app.string.i_am_content')替换为实际资源文件，在本示例中该资源文件的value值为\"我是内容\"\n      Text($r('app.string.i_am_content')).fontSize(20).margin({ top: 10, bottom: 10 })\n      Flex({ justifyContent: FlexAlign.SpaceAround }) {\n        Button('cancel')\n          .onClick(() => {\n            this.controller?.close();\n            if (this.cancel) {\n              this.cancel();\n            }\n          }).backgroundColor(0xffffff).fontColor(Color.Black)\n        Button('confirm')\n          .onClick(() => {\n            this.controller?.close();\n            if (this.confirm) {\n              this.confirm();\n            }\n          }).backgroundColor(0xffffff).fontColor(Color.Red)\n      }.margin({ bottom: 10 })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "页面内需要在构造器内进行接收，同时创建相应的函数操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nexport struct DialogInteractionUseConstructor {\n  dialogController: CustomDialogController = new CustomDialogController({\n    builder: CustomDialogExample({\n      cancel: ()=> { this.onCancel() },\n      confirm: ()=> { this.onAccept() },\n    }),\n  });\n\n  onCancel() {\n    hilog.info(DOMAIN, 'testTag', 'Callback when the first button is clicked');\n  }\n\n  onAccept() {\n    hilog.info(DOMAIN, 'testTag', 'Callback when the second button is clicked');\n  }\n\n  build() {\n    Column() {\n      NavDestination() {\n        Button('click me')\n          .onClick(() => {\n            this.dialogController.open();\n          })\n      }.width('100%').margin({ top: 5 })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(945775)/* ["default"] */.A) + "",
            width: "345",
            height: "530"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可通过弹出框中的按钮实现路由跳转，同时获取跳转页面向当前页传入的参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@CustomDialog\nstruct CustomDialogExample {\n  @Link textValue: string;\n  controller?: CustomDialogController;\n  cancel: () => void = () => {\n  }\n  confirm: () => void = () => {\n  }\n\n  build() {\n    Column({ space: 20 }) {\n      if (this.textValue !== '') {\n        // 请将$r('app.string.the_second_page_is')替换为实际资源文件，在本示例中该资源文件的value值为\"第二个页面的内容为\"\n        Text($r('app.string.the_second_page_is')+`：${this.textValue}`)\n          .fontSize(20)\n      } else {\n        // 请将$r('app.string.whether_to_get_the_second_page')替换为实际资源文件，在本示例中该资源文件的value值为\"是否获取第二个页面的内容\"\n        Text($r('app.string.whether_to_get_the_second_page'))\n          .fontSize(20)\n      }\n      Flex({ justifyContent: FlexAlign.SpaceAround }) {\n        Button('cancel')\n          .onClick(() => {\n            if (this.controller !== undefined) {\n              this.controller.close();\n              this.cancel();\n            }\n          }).backgroundColor(0xffffff).fontColor(Color.Black)\n        Button('confirm')\n          .onClick(() => {\n            if (this.controller !== undefined && this.textValue !== '') {\n              this.controller.close();\n            } else if (this.controller !== undefined) {\n              this.getUIContext().getRouter().pushUrl({\n                url: 'pages/Index2'\n              });\n              this.controller.close();\n            }\n          }).backgroundColor(0xffffff).fontColor(Color.Red)\n      }.margin({ bottom: 10 })\n    }.borderRadius(10).padding({ top: 20 })\n  }\n}\n\n@Entry\n@Component\nexport struct DialogInteractionUseButton {\n  @State textValue: string = '';\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample({\n      cancel: () => {\n        this.onCancel()\n      },\n      confirm: () => {\n        this.onAccept()\n      },\n      textValue: this.textValue\n    })\n  });\n\n  // 在自定义组件即将析构销毁时将dialogController置空\n  aboutToDisappear() {\n    this.dialogController = null; // 将dialogController置空\n  }\n\n  onPageShow() {\n    const params = this.getUIContext().getRouter().getParams() as Record<string, string>; // 获取传递过来的参数对象\n    if (params) {\n      this.dialogController?.open();\n      this.textValue = params.info as string; // 获取info属性的值\n    }\n  }\n\n  onCancel() {\n    hilog.info(DOMAIN, 'testTag', 'testTag', 'Callback when the first button is clicked');\n  }\n\n  onAccept() {\n    hilog.info(DOMAIN, 'testTag', 'testTag', 'Callback when the second button is clicked');\n  }\n\n  exitApp() {\n    hilog.info(DOMAIN, 'testTag', 'testTag', 'Click the callback in the blank area');\n  }\n\n  build() {\n    Column() {\n      NavDestination() {\n        Button('click me')\n          .onClick(() => {\n            if (this.dialogController !== null) {\n              this.dialogController.open();\n            }\n          }).backgroundColor(0x317aff)\n      }.width('100%').margin({ top: 5 })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct IndexNew {\n  // 请将$r('app.string.click_and_return')替换为实际资源文件，在本示例中该资源文件的value值为\"点击返回\"\n  @State message: string = $r('app.string.click_and_return');\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button(this.message)\n          .type(ButtonType.Capsule)\n          .onClick(() => {\n            this.getUIContext().getRouter().back({\n              url: 'pages/Index',\n              params: {\n                info: 'Hello World'\n              }\n            });\n          })\n      }.width('100%').height('100%').margin({ top: 20 })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(637472)/* ["default"] */.A) + "",
            width: "352",
            height: "682"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "弹出框的动画",
      children: "弹出框的动画"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["弹出框通过定义", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "CustomDialogControllerOptions"
      }), "中的openAnimation属性控制出现动画的持续时间，速度等参数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@CustomDialog\nstruct CustomDialogExample {\n  controller?: CustomDialogController;\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text('Whether to change a text?').fontSize(16).margin({ bottom: 10 })\n      }\n    }\n  }\n}\n\n@Entry\n@Component\nexport struct DialogAnimationNew {\n  @State textValue: string = '';\n  @State inputValue: string = 'click me';\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample(),\n    openAnimation: {\n      duration: 1200,\n      curve: Curve.Friction,\n      delay: 500,\n      playMode: PlayMode.Alternate,\n      onFinish: () => {\n        hilog.info(DOMAIN, 'testTag', 'play end')\n      }\n    },\n    autoCancel: true,\n    alignment: DialogAlignment.Bottom,\n    offset: { dx: 0, dy: -20 },\n    gridCount: 4,\n    customStyle: false,\n    backgroundColor: 0xd9ffffff,\n    cornerRadius: 10,\n  });\n\n  // 在自定义组件即将析构销毁时将dialogController置空\n  aboutToDisappear() {\n    this.dialogController = null; // 将dialogController置空\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button(this.inputValue)\n          .onClick(() => {\n            if (this.dialogController !== null) {\n              this.dialogController.open();\n            }\n          }).backgroundColor(0x317aff)\n      }.width('100%').margin({ top: 5 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(360795)/* ["default"] */.A) + "",
        width: "352",
        height: "779"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "弹出框的样式",
      children: "弹出框的样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过定义弹出框的宽度、高度、背景色、阴影等参数，控制其样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@CustomDialog\nstruct CustomDialogExample {\n  controller?: CustomDialogController;\n\n  build() {\n    Column() {\n      // 请将$r('app.string.i_am_content')替换为实际资源文件，在本示例中该资源文件的value值为\"我是内容\"\n      Text($r('app.string.i_am_content')).fontSize(16).margin({ bottom: 10 })\n    }\n  }\n}\n\n@Entry\n@Component\nexport struct DialogStyleNew {\n  @State textValue: string = '';\n  @State inputValue: string = 'click me';\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample(),\n    autoCancel: true,\n    alignment: DialogAlignment.Center,\n    offset: { dx: 0, dy: -20 },\n    gridCount: 4,\n    customStyle: false,\n    backgroundColor: 0xd9ffffff,\n    cornerRadius: 20,\n    width: '80%',\n    height: '100px',\n    borderWidth: 1,\n    borderStyle: BorderStyle.Dashed, //使用borderStyle属性，需要和borderWidth属性一起使用\n    borderColor: Color.Blue, //使用borderColor属性，需要和borderWidth属性一起使用\n    shadow: ({\n      radius: 20,\n      color: Color.Grey,\n      offsetX: 50,\n      offsetY: 0\n    }),\n  });\n\n  // 在自定义组件即将析构销毁时将dialogController置空\n  aboutToDisappear() {\n    this.dialogController = null; // 将dialogController置空\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button(this.inputValue)\n          .onClick(() => {\n            if (this.dialogController !== null) {\n              this.dialogController.open();\n            }\n          }).backgroundColor(0x317aff)\n      }.width('100%').margin({ top: 5 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(806722)/* ["default"] */.A) + "",
        width: "347",
        height: "455"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "嵌套自定义弹出框",
      children: "嵌套自定义弹出框"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过第一个弹出框打开第二个弹出框时，最好将第二个弹出框定义在第一个弹出框的父组件处，通过父组件传给第一个弹出框的回调来打开第二个弹出框。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@CustomDialog\nstruct CustomDialogExampleTwo {\n  controllerTwo?: CustomDialogController;\n  @State message: string = 'I am the second dialog box.';\n  @State showIf: boolean = false;\n\n  build() {\n    Column() {\n      if (this.showIf) {\n        Text('Text')\n          .fontSize(30)\n          .height(100)\n      }\n      Text(this.message)\n        .fontSize(30)\n        .height(100)\n      Button('Create Text')\n        .onClick(() => {\n          this.showIf = true;\n        })\n      Button('Close Second Dialog Box')\n        .onClick(() => {\n          if (this.controllerTwo !== undefined) {\n            this.controllerTwo.close();\n          }\n        })\n        .margin(20)\n    }\n  }\n}\n\n@CustomDialog\nstruct CustomDialogExample {\n  openSecondBox?: () => void;\n  controller?: CustomDialogController;\n\n  build() {\n    Column() {\n      Button('Open Second Dialog Box and close this box')\n        .onClick(() => {\n          this.controller!.close();\n          this.openSecondBox!();\n        })\n        .margin(20)\n    }.borderRadius(10)\n  }\n}\n\n@Entry\n@Component\nexport struct NestDialogNew {\n  @State inputValue: string = 'Click Me';\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample({\n      openSecondBox: () => {\n        if (this.dialogControllerTwo !== null) {\n          this.dialogControllerTwo.open()\n        }\n      }\n    }),\n    cancel: this.exitApp,\n    autoCancel: true,\n    alignment: DialogAlignment.Bottom,\n    offset: { dx: 0, dy: -20 },\n    gridCount: 4,\n    customStyle: false\n  });\n  dialogControllerTwo: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExampleTwo(),\n    alignment: DialogAlignment.Bottom,\n    offset: { dx: 0, dy: -25 }\n  });\n\n  aboutToDisappear() {\n    this.dialogController = null;\n    this.dialogControllerTwo = null;\n  }\n\n  onCancel() {\n    hilog.info(DOMAIN, 'testTag', 'Callback when the first button is clicked');\n  }\n\n  onAccept() {\n    hilog.info(DOMAIN, 'testTag', 'Callback when the second button is clicked');\n  }\n\n  exitApp() {\n    hilog.info(DOMAIN, 'testTag', 'Click the callback in the blank area');\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button(this.inputValue)\n          .onClick(() => {\n            if (this.dialogController !== null) {\n              this.dialogController.open();\n            }\n          }).backgroundColor(0x317aff)\n      }.width('100%').margin({ top: 5 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(935622)/* ["default"] */.A) + "",
        width: "308",
        height: "687"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于自定义弹出框在状态管理侧有父子关系，如果将第二个弹出框定义在第一个弹出框内，那么当父组件（第一个弹出框）被销毁（关闭）时，子组件（第二个弹出框）内无法再继续创建新的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现弹出框的物理返回拦截",
      children: "实现弹出框的物理返回拦截"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["执行点击遮障层关闭、侧滑（左滑或右滑）、三键Back、键盘ESC关闭等交互操作时，如果注册了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "CustomDialogControllerOptions"
      }), "中的onWillDismiss回调函数，弹出框不会立即关闭。在回调函数中，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#dismissdialogaction12",
        children: "DismissDialogAction"
      }), "中的reason属性获取阻拦关闭弹出框的操作类型，根据原因决定是否关闭弹出框。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@CustomDialog\nstruct CustomDialogExample {\n  cancel: () => void = () => {\n  }\n  confirm: () => void = () => {\n  }\n  controller?: CustomDialogController;\n\n  build() {\n    Column() {\n      Text('Are you sure?')\n        .fontSize(20)\n        .margin({\n          top: 10,\n          bottom: 10\n        })\n      Row() {\n        Button('cancel')\n          .onClick(() => {\n            if (this.controller !== undefined) {\n              this.controller.close();\n            }\n          })\n          .backgroundColor(0xffffff)\n          .fontColor(Color.Black)\n        Button('confirm')\n          .onClick(() => {\n            if (this.controller !== undefined) {\n              this.controller.close();\n            }\n          })\n          .backgroundColor(0xffffff)\n          .fontColor(Color.Red)\n      }\n      .width('100%')\n      .justifyContent(FlexAlign.SpaceAround)\n      .margin({ bottom: 10 })\n    }\n  }\n}\n\n@Entry\n@Component\nexport struct DialogWithPhysicalBack {\n  dialogController: CustomDialogController = new CustomDialogController({\n    builder: CustomDialogExample({\n      cancel: () => {\n        this.onCancel();\n      },\n      confirm: () => {\n        this.onAccept();\n      }\n    }),\n    onWillDismiss: (dismissDialogAction: DismissDialogAction) => {\n      hilog.info(DOMAIN, 'testTag', 'dialog onWillDismiss reason: ' + dismissDialogAction.reason);\n      // 1、PRESS_BACK    点击三键back、侧滑（左滑/右滑）、键盘ESC。\n      // 2、TOUCH_OUTSIDE    点击遮障层时\n      // 3、CLOSE_BUTTON    点击关闭按钮\n      if (dismissDialogAction.reason === DismissReason.PRESS_BACK) {\n        // 处理业务逻辑后通过dismiss主动关闭对话框\n        dismissDialogAction.dismiss();\n      }\n      if (dismissDialogAction.reason === DismissReason.TOUCH_OUTSIDE) {\n        dismissDialogAction.dismiss();\n      }\n    },\n    alignment: DialogAlignment.Bottom,\n    offset: { dx: 0, dy: -20 }\n  })\n\n  onCancel() {\n    hilog.info(DOMAIN, 'testTag', 'Callback when the first button is clicked');\n  }\n\n  onAccept() {\n    hilog.info(DOMAIN, 'testTag', 'Callback when the second button is clicked');\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button('click me')\n          .onClick(() => {\n            this.dialogController.open();\n          })\n      }\n      .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(654373)/* ["default"] */.A) + "",
        width: "351",
        height: "759"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置弹出框避让软键盘的距离",
      children: "设置弹出框避让软键盘的距离"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为显示弹出框的独立性，弹出框弹出时会与周边进行避让，包括状态栏、导航条以及键盘等留有间距。故当软键盘弹出时，默认情况下，弹出框会自动避开软键盘，并与之保持16vp的距离。从API version 15开始，开发者可以利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontrolleroptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "CustomDialogControllerOptions"
      }), "中的keyboardAvoidMode和keyboardAvoidDistance这两个配置项，来设置弹出框在软键盘弹出时的行为，包括是否需要避开软键盘以及与软键盘之间的距离。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置软键盘间距时，需要将keyboardAvoidMode值设为KeyboardAvoidMode.DEFAULT。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@CustomDialog\nstruct CustomDialogExample {\n  controller?: CustomDialogController;\n\n  build() {\n    Column() {\n      Column() {\n        Text('keyboardAvoidDistance: 0vp')\n          .fontSize(20)\n          .margin({ bottom: 36 })\n        TextInput({ placeholder: '' })\n      }.backgroundColor('#FFF0F0F0')\n    }\n  }\n}\n\n@Entry\n@Component\nexport struct DialogAvoidSoftKeyboard {\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample({}),\n    autoCancel: true,\n    gridCount: 4,\n    showInSubWindow: true,\n    isModal: true,\n    customStyle: false,\n    cornerRadius: 30,\n    alignment: DialogAlignment.Bottom,\n    keyboardAvoidMode: KeyboardAvoidMode.DEFAULT, // 软键盘弹出时，弹出框自动避让\n    keyboardAvoidDistance: LengthMetrics.vp(0) // 软键盘弹出时与弹出框的距离为0vp\n  })\n\n  build() {\n    NavDestination() {\n      Row() {\n        Row({ space: 20 }) {\n          // 请将$r('app.string.open_windows')替换为实际资源文件，在本示例中该资源文件的value值为\"打开弹窗\"\n          Text($r('app.string.open_windows'))\n            .fontSize(30)\n            .onClick(() => {\n              if (this.dialogController !== null) {\n                this.dialogController.open();\n              }\n            })\n        }\n        .width('100%')\n      }\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(556594)/* ["default"] */.A) + "",
        width: "400",
        height: "662"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取弹出框的状态",
      children: "获取弹出框的状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在业务模块中，页面上可能会同时出现多个弹出框。为避免重复打开相同的弹出框，建议在显示弹出框前，先通过控制器检查其当前状态。如果弹出框已处于显示状态，则不应再次打开。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，新增了getState接口，用于获取弹出框的当前状态。具体的弹出框状态信息，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#commonstate20%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "CommonState"
      }), "枚举的详细说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#getdialogcontroller18",
        children: "getDialogController"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontroller",
        children: "CustomDialogController"
      }), "两种方法，实现了获取弹出框当前状态的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@CustomDialog\nstruct CustomDialogExample {\n  controller?: CustomDialogController;\n\n  build() {\n    Column() {\n      // 请将$r('app.string.search_by_dialog')替换为实际资源文件，在本示例中该资源文件的value值为\"点我查询弹窗状态:通过自定义组件自带controller\"\n      Button($r('app.string.search_by_dialog'))\n        .onClick(() => {\n          if (this.getDialogController() !== undefined) {\n            hilog.info(DOMAIN, 'testTag', 'state:' + this.getDialogController().getState());\n          } else {\n            hilog.info(DOMAIN, 'testTag', 'state: no exist');\n          }\n        }).margin(20)\n      // 请将$r('app.string.search_by_dialog_controller')替换为实际资源文件，在本示例中该资源文件的value值为\"点我查询弹窗状态:通过CustomDialogController\"\n      Button($r('app.string.search_by_dialog_controller'))\n        .onClick(() => {\n          hilog.info(DOMAIN, 'testTag', 'state:' + this.controller?.getState());\n        }).margin(20)\n      // 请将$r('app.string.close_widows')替换为实际资源文件，在本示例中该资源文件的value值为\"点我关闭弹窗\"\n      Button($r('app.string.close_widows'))\n        .onClick(() => {\n          if (this.getDialogController() !== undefined) {\n            this.getDialogController().close()\n          }\n        }).margin(20)\n\n    }\n  }\n}\n\n@Entry\n@Component\nexport struct GetDialogStatus {\n  dialogController: CustomDialogController | null = new CustomDialogController({\n    builder: CustomDialogExample({\n    }),\n    autoCancel: false\n  })\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button('click me')\n          .onClick(() => {\n            if (this.dialogController !== null) {\n              this.dialogController.open()\n            }\n          })\n      }.width('100%').margin({ top: 5 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(107787)/* ["default"] */.A) + "",
        width: "350",
        height: "513"
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
654373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957902-3d38ce9deaac1d203041b117bc0fe780.gif");

},
107787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477903-35992e68744923d2d9c092aaf5b6553f.gif");

},
637472(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957900-6bfaafd637b796e4ef620fa0bc060a7f.gif");

},
760309(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
271679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798250-4716aaa5f6b512e290c68b9dbdd7b456.png");

},
360795(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477901-973086e173c98c64d53167155cb7526f.gif");

},
945775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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EZEFAEdEFgAcEVkAcERkAcARkQUAR0QWABwRWQBwRGQBwBGRBQBHRBYAHBFZAHBEZAHAEZEFAEdEFgAcEVkAcERkAcARkQUAR0QWABwRWQBwRGQBwBGRBQBHRBYAHBFZAHBEZAHAEZEFAEdEFgAcEVkAcERkAcARkQUAR0QWABwRWQBwRGQBwBGRBQBHRBYAHBFZAHBEZAHAEZEFAEdEFgAcEVkAcERkAcARkQUAR0QWABwRWQBwRGQBwBGRBQBHRBYAHBFZAHBEZAHAEZEFAEdEFgAc9YrIzpkzx5566il78cUX7fXXX7e33nrL3n33XXv//fcBoCJqxttvv23z58+3l156yebNm2d/+9vfMr1Z0pZaZJ955pnwZHz66af297//HQBcLFiwILTm2WefzXRoSViikX388cfDSPWzzz7LPBEA4E3tUXDVorhPXpZIZJ944okwlP/8888zDxoAljS16L333gttintVa66R1XyI5kjiBwgAvYUa5Tl36xbZ559/nmkBALmgke0LL7yQ6Vgt1DyyDz/8sL3zzjuZBwEAvZ2mNR955JFM16pR08jOnTvXPv7448wdB4C8+OSTT0LL4r71VM0i+9hjj4VdJeI7DAB5s3DhwprtgVCTyCqwulPxHQWAvKpVaKuOrIbVjGAB1COFttqpg6oiq41czMHimmuusebm5szpS8tzzz1nl112WdgHMj6vu2688UY76KCDMqejcWiOtpqNYVVFlr0IGssbb7wRYnrTTTfZSSedZKNGjQqnb7vttnbhhRfahx9+aIcccojdd999mesWu+iii2yPPfaoWKFQyKyjK/fee6+tu+66NnXq1Mx53XX99deHdXX3PqC+aK+DuH+V6nFktR9sfEdQf66++mrbZZdd7Fe/+lWIjay//vrWt29fO/nkk8NlBg4caKecckp4VzN8+PBwmSlTpmTWlTruuOPCOi655BK79NJLO3XaaaeFdd11112ZdXSlu5F98803wy+Mco488siwLj3G+LzUK6+8klkn6k9P96PtUWT16Qg+aNAYbr/9drvgggtCEI899tgQnJdffrnkMoMGDbIjjjgi/F1zWAcffHC43OTJkzPrE0W2T58+i30N6e1+V5GdMGGCnXvuuRm6L7qe3ubH58n48eNL1qP/PLq8fnHsuuuuFdMIXtfTxpH4vqH+6AMLjz76aKaH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");

},
556594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957898-0bb6e93590afadff5b83c3efab7209f0.gif");

},
935622(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437947-47d1e5606bdf8eabba60c27fbc2048a9.gif");

},
806722(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798252-374b5003cb8fe98e113bb226f159d03c.gif");

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