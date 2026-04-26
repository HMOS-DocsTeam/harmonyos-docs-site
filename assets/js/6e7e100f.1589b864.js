"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["538722"], {
16603(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_dialogs_arkts_uicontext_custom_dialog_arkts_uicontext_custom_dialog_md_6e7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-use-dialogs-arkts-uicontext-custom-dialog-arkts-uicontext-custom-dialog-md-6e7.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_dialogs_arkts_uicontext_custom_dialog_arkts_uicontext_custom_dialog_md_6e7_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-uicontext-custom-dialog/arkts-uicontext-custom-dialog","title":"不依赖UI组件的全局自定义弹出框 (openCustomDialog)","description":"在广告、中奖、警告、软件更新等与用户交互响应操作的场景下，可以使用UIContext中获取到的PromptAction对象提供的openCustomDialog接口来实现自定义弹出框。相较于CustomDialogController优势点在于页面解耦，支持动态刷新。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-uicontext-custom-dialog/arkts-uicontext-custom-dialog.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-uicontext-custom-dialog","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-uicontext-custom-dialog/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-uicontext-custom-dialog/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"不依赖UI组件的全局自定义弹出框 (openCustomDialog)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-uicontext-custom-dialog","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"弹出框概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-base-dialog-overview/"},"next":{"title":"基础自定义弹出框 (CustomDialog)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-common-components-custom-dialog/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-uicontext-custom-dialog/arkts-uicontext-custom-dialog.md


const frontMatter = {
	title: '不依赖UI组件的全局自定义弹出框 (openCustomDialog)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-uicontext-custom-dialog',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '不依赖UI组件的全局自定义弹出框 (openCustomDialog)';

const assets = {

};



const toc = [{
  "value": "生命周期",
  "id": "生命周期",
  "level": 2
}, {
  "value": "自定义弹出框的打开与关闭",
  "id": "自定义弹出框的打开与关闭",
  "level": 2
}, {
  "value": "更新自定义弹出框的内容",
  "id": "更新自定义弹出框的内容",
  "level": 2
}, {
  "value": "更新自定义弹出框的属性",
  "id": "更新自定义弹出框的属性",
  "level": 2
}, {
  "value": "为弹出框内容和蒙层设置不同的动画效果",
  "id": "为弹出框内容和蒙层设置不同的动画效果",
  "level": 2
}, {
  "value": "设置弹出框避让软键盘的距离",
  "id": "设置弹出框避让软键盘的距离",
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
        id: "不依赖ui组件的全局自定义弹出框-opencustomdialog",
        children: "不依赖UI组件的全局自定义弹出框 (openCustomDialog)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在广告、中奖、警告、软件更新等与用户交互响应操作的场景下，可以使用UIContext中获取到的PromptAction对象提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#opencustomdialog12",
        children: "openCustomDialog"
      }), "接口来实现自定义弹出框。相较于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/dialog-boxes/ts-methods-custom-dialog-box/ts-methods-custom-dialog-box#customdialogcontroller",
        children: "CustomDialogController"
      }), "优势点在于页面解耦，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent#update",
        children: "动态刷新"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(959471)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹出框（openCustomDialog）存在两种入参方式创建自定义弹出框："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "openCustomDialog（传参为ComponentContent形式）：通过ComponentContent封装内容可以与UI界面解耦，调用更加灵活，可以满足开发者的封装诉求。具有较高的灵活性，弹出框样式完全自定义，并且在弹出框打开后可以使用updateCustomDialog方法动态更新弹出框的参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "openCustomDialog（传参为builder形式）：相对于ComponentContent，builder必须要与上下文做绑定，与UI存在一定耦合。此方法有默认的弹出框样式，适合于开发者想要实现与系统弹窗默认风格一致的效果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文介绍通过入参形式为ComponentContent创建自定义弹出框，传builder形式的弹出框使用方法可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#opencustomdialog12-1",
        children: "openCustomDialog"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["弹出框（openCustomDialog）默认为模态弹窗且有蒙层，不可与蒙层下方控件进行交互（不支持点击和手势等向下透传）。可以通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#basedialogoptions11",
        children: "promptAction.BaseDialogOptions"
      }), "类型中的isModal属性来实现模态和非模态弹窗，详细说明可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-dialog-overview#%E5%BC%B9%E7%AA%97%E7%9A%84%E7%A7%8D%E7%B1%BB",
        children: "弹窗的种类"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当isModal为true时，弹出框为模态弹窗，且弹窗周围的蒙层区不支持透传。isModal为false时，弹出框为非模态弹窗，且弹窗周围的蒙层区可以透传。因此如果需要同时允许弹出框的交互和弹出框外页面的交互行为，需要将弹出框设置为非模态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期",
      children: "生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹出框提供了生命周期函数用于通知用户该弹出框的生命周期。生命周期的触发时序依次为：onWillAppear -> onDidAppear -> onWillDisappear -> onDidDisappear。"
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
            children: "onDidAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框弹出后的事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDidDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框消失后的事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框显示动效前的事件回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出框退出动效前的事件回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义弹出框的打开与关闭",
      children: "自定义弹出框的打开与关闭"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(507719)/* ["default"] */.A) + "",
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
          children: "创建ComponentContent。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ComponentContent用于定义自定义弹出框的内容。其中，wrapBuilder(buildText)封装自定义组件，new Params(this.message)是自定义组件的入参，可以缺省，也可以传入基础数据类型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private contentNode: ComponentContent<Object> =\n  new ComponentContent(this.ctx, wrapBuilder(buildText), new Params(this.message));\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开自定义弹出框。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#opencustomdialog12",
            children: "openCustomDialog"
          }), "接口打开的弹出框默认customStyle为true，即弹出框的内容样式完全按照contentNode自定义样式显示。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PromptActionClassNew.ctx.getPromptAction().openCustomDialog(PromptActionClassNew.contentNode, PromptActionClassNew.options)\n  .then(() => {\n    hilog.info(DOMAIN, 'testTag', 'testTag', 'OpenCustomDialog complete.');\n  })\n  .catch((error: BusinessError) => {\n    let message = (error as BusinessError).message;\n    let code = (error as BusinessError).code;\n    hilog.error(DOMAIN, 'testTag', 'testTag', 'OpenCustomDialog args error code is ${code}, message is ${message}');\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭自定义弹出框。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由于", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#closecustomdialog12",
            children: "closeCustomDialog"
          }), "接口需要传入待关闭弹出框对应的ComponentContent。因此，如果需要在弹出框中设置关闭方法，则可参考完整示例封装静态方法来实现。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["关闭弹出框之后若需要释放对应的ComponentContent，则需要调用ComponentContent的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent#dispose",
            children: "dispose"
          }), "方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PromptActionClassNew.ctx.getPromptAction().closeCustomDialog(PromptActionClassNew.contentNode)\n  .then(() => {\n    hilog.info(DOMAIN, 'testTag', 'testTag', 'CloseCustomDialog complete.g complete.');\n    if (this.contentNode !== null) {\n      this.contentNode.dispose();   // 释放contentNode\n    }\n  })\n  .catch((error: BusinessError) => {\n    let message = (error as BusinessError).message;\n    let code = (error as BusinessError).code;\n    hilog.error(DOMAIN, 'testTag', 'testTag', 'CloseCustomDialog args error code is ${code}, message is ${message}');\n  })\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "更新自定义弹出框的内容",
      children: "更新自定义弹出框的内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ComponentContent与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "有相同的使用限制，不支持自定义组件使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
        children: "@Reusable"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
        children: "@Link"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
        children: "@Provide"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
        children: "@Consume"
      }), "等装饰器，来同步弹出框弹出的页面与ComponentContent中自定义组件的状态。因此，若需要更新弹出框中自定义组件的内容可以通过ComponentContent提供的update方法来实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.contentNode.update(new Params('update'))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "更新自定义弹出框的属性",
      children: "更新自定义弹出框的属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过updateCustomDialog可以动态更新弹出框的属性。目前支持更新弹出框的对齐方式、基于对齐方式的偏移量、是否点击蒙层自动关闭以及蒙层颜色，对应的属性分别为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#basedialogoptions11",
        children: "BaseDialogOptions"
      }), "中的alignment、offset、autoCancel和maskColor。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "更新属性时，未设置的属性会恢复为默认值。例如，初始设置{ alignment: DialogAlignment.Top, offset: { dx: 0, dy: 50 } }，更新时设置{ alignment: DialogAlignment.Bottom }，则初始设置的offset: { dx: 0, dy: 50 }不会保留，会恢复为默认值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PromptActionClassNew.ctx.getPromptAction().updateCustomDialog(PromptActionClassNew.contentNode, options)\n  .then(() => {\n    hilog.info(DOMAIN, 'testTag', 'testTag', 'UpdateCustomDialog complete.');\n  })\n  .catch((error: BusinessError) => {\n    let message = (error as BusinessError).message;\n    let code = (error as BusinessError).code;\n    hilog.error(DOMAIN, 'testTag', 'testTag', 'UpdateCustomDialog args error code is ${code}, message is ${message}');\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "为弹出框内容和蒙层设置不同的动画效果",
      children: "为弹出框内容和蒙层设置不同的动画效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当弹出框出现时，内容与蒙层显示动效一致。若开发者希望为弹出框内容及蒙层设定不同动画效果，从API version 19开始，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#basedialogoptions11",
        children: "BaseDialogOptions"
      }), "中dialogTransition和maskTransition属性单独配置弹窗内容与蒙层的动画。具体的动画效果请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-component/ts-transition-animation-component",
        children: "组件内转场 (transition)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(416805)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当isModal为true时，蒙层将显示，此时可以设置蒙层的动画效果；否则，maskTransition将不生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nexport struct CustomDialogComponentWithTransition {\n  private customDialogComponentId: number = 0\n\n  @Builder\n  customDialogComponent() {\n    Row({ space: 50 }) {\n      // 请将$r('app.string.this_is_a_window')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一个弹窗\"\n      Button($r('app.string.this_is_a_window'))\n    }.height(200).padding(5)\n  }\n\n  build() {\n    NavDestination() {\n      Row() {\n        Row({ space: 20 }) {\n          // 请将$r('app.string.open_windows')替换为实际资源文件，在本示例中该资源文件的value值为\"打开弹窗\"\n          Text($r('app.string.open_windows'))\n            .fontSize(30)\n            .onClick(() => {\n              this.getUIContext()\n                .getPromptAction()\n                .openCustomDialog({\n                  builder: () => {\n                    this.customDialogComponent()\n                  },\n                  isModal: true,\n                  showInSubWindow: false,\n                  maskColor: Color.Pink,\n                  maskRect: {\n                    x: 20,\n                    y: 20,\n                    width: '90%',\n                    height: '90%'\n                  },\n\n                  dialogTransition: // 设置弹窗内容显示的过渡效果\n                  TransitionEffect.translate({ x: 0, y: 290, z: 0 })\n                    .animation({ duration: 4000, curve: Curve.Smooth }), // 四秒钟的偏移渐变动画\n\n                  maskTransition: // 设置蒙层显示的过渡效果\n                  TransitionEffect.opacity(0)\n                    .animation({ duration: 4000, curve: Curve.Smooth }) // 四秒钟的透明渐变动画\n\n                })\n                .then((dialogId: number) => {\n                  this.customDialogComponentId = dialogId;\n                })\n                .catch((error: BusinessError) => {\n                  hilog.error(DOMAIN, 'testTag',\n                    `openCustomDialog error code is ${error.code}, message is ${error.message}`)\n                })\n            })\n        }\n        .width('100%')\n      }\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(409971)/* ["default"] */.A) + "",
        width: "349",
        height: "740"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置弹出框避让软键盘的距离",
      children: "设置弹出框避让软键盘的距离"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为显示弹出框的独立性，弹出框弹出时会与周边进行避让，包括状态栏、导航条以及键盘等留有间距。故当软键盘弹出时，默认情况下，弹出框会自动避开软键盘，并与之保持16vp的距离。从API version 15开始，开发者可以利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#basedialogoptions11",
        children: "BaseDialogOptions"
      }), "中的keyboardAvoidMode和keyboardAvoidDistance这两个配置项，来设置弹出框在软键盘弹出时的行为，包括是否需要避开软键盘以及与软键盘之间的距离。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置软键盘间距时，需要将keyboardAvoidMode值设为KeyboardAvoidMode.DEFAULT。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { LengthMetrics } from '@kit.ArkUI'\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nexport struct CustomDialogWithKeyboardAvoidDistance {\n  @Builder\n  customDialogComponent() {\n    Column() {\n      Text('keyboardAvoidDistance: 0vp')\n        .fontSize(20)\n        .margin({ bottom: 36 })\n      TextInput({ placeholder: '' })\n    }.backgroundColor('#FFF0F0F0')\n  }\n\n  build() {\n    NavDestination() {\n      Row() {\n        Row({ space: 20 }) {\n          // 请将$r('app.string.open_windows')替换为实际资源文件，在本示例中该资源文件的value值为\"打开弹窗\"\n          Text($r('app.string.open_windows'))\n            .fontSize(30)\n            .onClick(() => {\n              this.getUIContext().getPromptAction().openCustomDialog({\n                builder: () => {\n                  this.customDialogComponent();\n                },\n                alignment: DialogAlignment.Bottom,\n                keyboardAvoidMode: KeyboardAvoidMode.DEFAULT, // 软键盘弹出时，弹出框自动避让\n                keyboardAvoidDistance: LengthMetrics.vp(0) // 软键盘弹出时与弹出框的距离为0vp\n              }).catch((error: BusinessError) => {\n                hilog.error(DOMAIN, 'testTag',\n                  `openCustomDialog error code is ${error.code}, message is ${error.message}`);\n              })\n            })\n        }\n        .width('100%')\n      }\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(280707)/* ["default"] */.A) + "",
        width: "400",
        height: "662"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PromptActionClassNew.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { ComponentContent, promptAction, UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0000;\n\nexport class PromptActionClassNew {\n  static ctx: UIContext;\n  static contentNode: ComponentContent<Object>;\n  static options: promptAction.BaseDialogOptions;\n\n  static setContext(context: UIContext) {\n    PromptActionClassNew.ctx = context;\n  }\n\n  static setContentNode(node: ComponentContent<Object>) {\n    PromptActionClassNew.contentNode = node;\n  }\n\n  static setOptions(options: promptAction.BaseDialogOptions) {\n    PromptActionClassNew.options = options;\n  }\n\n  // 打开弹窗\n  static openDialog() {\n    if (PromptActionClassNew.contentNode !== null) {\n      PromptActionClassNew.ctx.getPromptAction().openCustomDialog(PromptActionClassNew.contentNode, PromptActionClassNew.options)\n        .then(() => {\n          hilog.info(DOMAIN, 'testTag', 'testTag', 'OpenCustomDialog complete.');\n        })\n        .catch((error: BusinessError) => {\n          let message = (error as BusinessError).message;\n          let code = (error as BusinessError).code;\n          hilog.error(DOMAIN, 'testTag', 'testTag', 'OpenCustomDialog args error code is ${code}, message is ${message}');\n        })\n    }\n  }\n\n  // 关闭弹窗\n  static closeDialog() {\n    if (PromptActionClassNew.contentNode !== null) {\n      PromptActionClassNew.ctx.getPromptAction().closeCustomDialog(PromptActionClassNew.contentNode)\n        .then(() => {\n          hilog.info(DOMAIN, 'testTag', 'testTag', 'CloseCustomDialog complete.');\n        })\n        .catch((error: BusinessError) => {\n          let message = (error as BusinessError).message;\n          let code = (error as BusinessError).code;\n          hilog.error(DOMAIN, 'testTag', 'testTag', 'CloseCustomDialog args error code is ${code}, message is ${message}');\n        })\n    }\n  }\n\n  // ...\n\n  // 更新弹窗\n  static updateDialog(options: promptAction.BaseDialogOptions) {\n    if (PromptActionClassNew.contentNode !== null) {\n      PromptActionClassNew.ctx.getPromptAction().updateCustomDialog(PromptActionClassNew.contentNode, options)\n        .then(() => {\n          hilog.info(DOMAIN, 'testTag', 'testTag', 'UpdateCustomDialog complete.');\n        })\n        .catch((error: BusinessError) => {\n          let message = (error as BusinessError).message;\n          let code = (error as BusinessError).code;\n          hilog.error(DOMAIN, 'testTag', 'testTag', 'UpdateCustomDialog args error code is ${code}, message is ${message}');\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { ComponentContent } from '@kit.ArkUI';\nimport { PromptActionClassNew } from '../../common/PromptActionClassNew';\n\nclass Params {\n  public text: string = '';\n\n  constructor(text: string) {\n    this.text = text;\n  }\n}\n\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n      .margin({ bottom: 36 })\n    Button('Close')\n      .onClick(() => {\n        PromptActionClassNew.closeDialog();\n      })\n  }.backgroundColor('#FFF0F0F0')\n}\n\n@Entry\n@Component\nexport struct OpenDialogAndUpdate {\n  @State message: string = 'hello';\n  private ctx: UIContext = this.getUIContext();\n  private contentNode: ComponentContent<Object> =\n    new ComponentContent(this.ctx, wrapBuilder(buildText), new Params(this.message));\n  aboutToAppear(): void {\n    PromptActionClassNew.setContext(this.ctx);\n    PromptActionClassNew.setContentNode(this.contentNode);\n    PromptActionClassNew.setOptions({ alignment: DialogAlignment.Top, offset: { dx: 0, dy: 50 } });\n  }\n\n  build() {\n    NavDestination() {\n      Row() {\n        Column() {\n          Button('open dialog and update options')\n            .margin({ top: 50 })\n            .onClick(() => {\n              PromptActionClassNew.openDialog();\n\n              setTimeout(() => {\n                PromptActionClassNew.updateDialog({\n                  alignment: DialogAlignment.Bottom,\n                  offset: { dx: 0, dy: -50 }\n                });\n              }, 1500)\n            })\n          Button('open dialog and update content')\n            .margin({ top: 50 })\n            .onClick(() => {\n              PromptActionClassNew.openDialog();\n\n              setTimeout(() => {\n                this.contentNode.update(new Params('update'));\n              }, 1500)\n            })\n        }\n        .width('100%')\n        .height('100%')\n      }\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(401772)/* ["default"] */.A) + "",
        width: "352",
        height: "730"
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
507719(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
959471(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
401772(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477899-00865588e4f148703450b363222af104.gif");

},
409971(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437943-d495ebb1a869bff2340723b06d21a45c.gif");

},
416805(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
280707(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957898-0bb6e93590afadff5b83c3efab7209f0.gif");

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