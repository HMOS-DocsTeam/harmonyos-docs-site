"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["637514"], {
632037(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_popup_arkts_popup_and_menu_components_popup_arkts_popup_and_menu_components_popup_md_46f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-use-popup-arkts-popup-and-menu-components-popup-arkts-popup-and-menu-components-popup-md-46f.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_popup_arkts_popup_and_menu_components_popup_arkts_popup_and_menu_components_popup_md_46f_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-popup/arkts-popup-and-menu-components-popup","title":"气泡提示（Popup）","description":"Popup属性可绑定在组件上显示气泡弹窗提示，设置弹窗内容、交互逻辑和显示状态。主要用于屏幕录制、信息弹出提醒等显示状态。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-popup/arkts-popup-and-menu-components-popup.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-popup","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-popup/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-popup/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"气泡提示（Popup）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-popup-and-menu-components-popup","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"气泡提示概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-overview/"},"next":{"title":"不依赖UI组件的全局气泡提示 (openPopup)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-uicontext-popup/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-popup/arkts-popup-and-menu-components-popup/arkts-popup-and-menu-components-popup.md


const frontMatter = {
	title: '气泡提示（Popup）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-popup-and-menu-components-popup',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '气泡提示（Popup）';

const assets = {

};



const toc = [{
  "value": "文本提示气泡",
  "id": "文本提示气泡",
  "level": 2
}, {
  "value": "添加气泡状态变化的事件",
  "id": "添加气泡状态变化的事件",
  "level": 2
}, {
  "value": "带按钮的提示气泡",
  "id": "带按钮的提示气泡",
  "level": 2
}, {
  "value": "气泡的动画",
  "id": "气泡的动画",
  "level": 2
}, {
  "value": "自定义气泡",
  "id": "自定义气泡",
  "level": 2
}, {
  "value": "气泡样式",
  "id": "气泡样式",
  "level": 2
}, {
  "value": "气泡避让软键盘",
  "id": "气泡避让软键盘",
  "level": 2
}, {
  "value": "设置气泡内的多态效果",
  "id": "设置气泡内的多态效果",
  "level": 2
}, {
  "value": "气泡支持避让中轴",
  "id": "气泡支持避让中轴",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "气泡提示popup",
        children: "气泡提示（Popup）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Popup属性可绑定在组件上显示气泡弹窗提示，设置弹窗内容、交互逻辑和显示状态。主要用于屏幕录制、信息弹出提醒等显示状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["气泡分为两种类型，一种是系统提供的气泡", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#popupoptions%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "PopupOptions"
      }), "，一种是开发者可以自定义的气泡", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#custompopupoptions8%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "CustomPopupOptions"
      }), "。其中，PopupOptions通过配置primaryButton和secondaryButton来设置带按钮的气泡；CustomPopupOptions通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "builder"
      }), "来设置自定义的气泡。其中系统提供的气泡PopupOptions，字体的最大放大倍数为2。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["气泡可以通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#popupoptions%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "mask"
      }), "来实现模态和非模态窗口，mask为true或者颜色值的时候，气泡为模态窗口，mask为false时，气泡为非模态窗口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多个气泡同时弹出时，子窗内显示的气泡比主窗内显示的气泡层级高，所处窗口相同时，后面弹出的气泡层级比先弹出的气泡层级高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文本提示气泡",
      children: "文本提示气泡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本提示气泡常用于展示带有文本的信息提示，适用于无交互的场景。Popup属性需绑定组件，当bindPopup属性的参数show为true时，会弹出气泡提示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Button组件上绑定Popup属性，每次点击Button按钮时，handlePopup会切换布尔值。当值为true时，触发bindPopup弹出气泡。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct TextPopupExample {\n  @State handlePopup: boolean = false;\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button('PopupOptions')\n          .id('PopupOptions')\n          .margin({ top: 300 })\n          .onClick(() => {\n            this.handlePopup = !this.handlePopup;\n          })\n          .bindPopup(this.handlePopup, {\n            message: 'This is a popup with PopupOptions',\n          })\n      }.width('100%').padding({ top: 5 })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(386450)/* ["default"] */.A) + "",
        width: "265",
        height: "114"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加气泡状态变化的事件",
      children: "添加气泡状态变化的事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#popupoptions%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "PopupOptions"
      }), "中的onStateChange属性为气泡添加状态变化的事件回调，可以判断气泡的当前显示状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct StatePopupExample {\n  @State handlePopup: boolean = false;\n\n  build() {\n    NavDestination() {\n        Column() {\n          Button('PopupOptions')\n            .id('PopupOptions')\n            .margin({ top: 300 })\n            .onClick(() => {\n              this.handlePopup = !this.handlePopup;\n            })\n            .bindPopup(this.handlePopup, {\n              message: 'This is a popup with PopupOptions',\n              onStateChange: (e)=> { // 返回当前的气泡状态\n                if (!e.isVisible) {\n                  this.handlePopup = false;\n                }\n              }\n            })\n        }.width('100%').padding({ top: 5 })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(15874)/* ["default"] */.A) + "",
        width: "432",
        height: "221"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "带按钮的提示气泡",
      children: "带按钮的提示气泡"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#popupoptions%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "PopupOptions"
      }), "中的primaryButton、secondaryButton属性为气泡最多设置两个Button按钮，通过此按钮进行简单的交互，开发者可以通过配置action参数来设置想要触发的操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nexport struct ButtonPopupExample {\n  @State handlePopup: boolean = false;\n\n  build() {\n    NavDestination() {\n        Column() {\n          Button('PopupOptions').margin({ top: 300 })\n            .id('PopupOptions')\n            .onClick(() => {\n              this.handlePopup = !this.handlePopup;\n            })\n            .bindPopup(this.handlePopup, {\n              message: 'This is a popup with PopupOptions',\n              primaryButton: {\n                value: 'Confirm',\n                action: () => {\n                  this.handlePopup = !this.handlePopup;\n                  hilog.info(0xFF00, 'DialogProject', 'confirm Button click');\n                }\n              },\n              secondaryButton: {\n                value: 'Cancel',\n                action: () => {\n                  this.handlePopup = !this.handlePopup;\n                }\n              },\n              onStateChange: (e) => {\n                if (!e.isVisible) {\n                  this.handlePopup = false;\n                }\n              }\n            })\n        }.width('100%').padding({ top: 5 })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(441883)/* ["default"] */.A) + "",
        width: "299",
        height: "181"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "气泡的动画",
      children: "气泡的动画"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#popupoptions%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "PopupOptions"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#custompopupoptions8%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "CustomPopupOptions"
      }), "中的transition属性，可以控制气泡的进场和出场动画效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nexport struct AnimationPopupExample {\n  @State handlePopup: boolean = false;\n  @State customPopup: boolean = false;\n\n  // popup构造器定义弹框内容\n  @Builder\n  popupBuilder() {\n    Row() {\n      Text('Custom Popup with transitionEffect').fontSize(10)\n    }.height(50).padding(5)\n  }\n\n  build() {\n    NavDestination() {\n      Flex({ direction: FlexDirection.Column }) {\n        // PopupOptions 类型设置弹框内容\n        Button('PopupOptions')\n          .id('PopupOptions')\n          .onClick(() => {\n            this.handlePopup = !this.handlePopup;\n          })\n          .bindPopup(this.handlePopup, {\n            message: 'This is a popup with transitionEffect',\n            placement: Placement.Top,\n            showInSubWindow: false,\n            onStateChange: (e) => {\n              if (!e.isVisible) {\n                this.handlePopup = false;\n              }\n            },\n            // 设置弹窗显示动效为透明度动效与平移动效的组合效果，无退出动效\n            transition: TransitionEffect.asymmetric(\n              TransitionEffect.OPACITY.animation({ duration: 1000, curve: Curve.Ease }).combine(\n                TransitionEffect.translate({ x: 50, y: 50 })),\n              TransitionEffect.IDENTITY)\n          })\n          .position({ x: 100, y: 150 })\n\n        // CustomPopupOptions 类型设置弹框内容\n        Button('CustomPopupOptions')\n          .id('CustomPopupOptions')\n          .onClick(() => {\n            this.customPopup = !this.customPopup;\n          })\n          .bindPopup(this.customPopup, {\n            builder: this.popupBuilder,\n            placement: Placement.Top,\n            showInSubWindow: false,\n            onStateChange: (e) => {\n              if (!e.isVisible) {\n                this.customPopup = false;\n              }\n            },\n            // 设置弹窗显示动效与退出动效为缩放动效\n            transition: TransitionEffect.scale({ x: 1, y: 0 }).animation({ duration: 500, curve: Curve.Ease })\n          })\n          .position({ x: 80, y: 300 })\n      }.width('100%').padding({ top: 5 })\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(811818)/* ["default"] */.A) + "",
        width: "342",
        height: "385"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义气泡",
      children: "自定义气泡"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#custompopupoptions8%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "CustomPopupOptions"
      }), "的builder创建自定义气泡，@Builder中可以放自定义的内容。除此之外，还可以通过popupColor等参数控制气泡样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 请将$r('app.media.xxx')替换为实际资源文件\n@Entry\n@Component\nexport struct CustomPopupExample {\n  @State customPopup: boolean = false;\n\n  // popup构造器定义弹框内容\n  @Builder\n  popupBuilder() {\n    Row({ space: 2 }) {\n      Image($r('app.media.app_icon')).width(24).height(24).margin({ left: 5 })\n      Text('This is Custom Popup').fontSize(15)\n    }.width(200).height(50).padding(5)\n  }\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button('CustomPopupOptions')\n          .id('CustomPopupOptions')\n          .margin({ top: 300 })\n          .onClick(() => {\n            this.customPopup = !this.customPopup;\n          })\n          .bindPopup(this.customPopup, {\n            builder: this.popupBuilder, // 气泡的内容\n            placement: Placement.Bottom, // 气泡的弹出位置\n            popupColor: Color.Pink, // 气泡的背景色\n            backgroundBlurStyle: BlurStyle.NONE,\n            onStateChange: (e) => {\n              if (!e.isVisible) {\n                this.customPopup = false\n              }\n            }\n          })\n      }\n      .height('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用者通过配置placement参数将弹出的气泡放到需要提示的位置。弹窗构造器会触发弹出提示信息，来引导使用者完成操作，也让使用者有更好的UI体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(472566)/* ["default"] */.A) + "",
        width: "292",
        height: "191"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "气泡样式",
      children: "气泡样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "气泡除了可以通过builder实现自定义气泡，还可以通过接口设置气泡的样式和显示效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "背景颜色：气泡的背景色默认为透明，但是会有一个默认的模糊效果，手机上为COMPONENT_ULTRA_THICK。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "蒙层样式：气泡默认有蒙层，且蒙层的颜色为透明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示大小：气泡大小由内部的builder大小或者message的长度决定的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["显示位置：气泡默认显示在宿主组件的下方，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#popupoptions%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "PopupOptions"
      }), "中的Placement属性来配置其显示位置以及对齐方向。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#popupoptions%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "PopupOptions"
      }), "中的popupColor（背景颜色）、mask（蒙层样式）、width（气泡宽度）、placement（显示位置）实现气泡的样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\n@Entry\n@Component\nexport struct StylePopupExample {\n  @State handlePopup: boolean = false;\n\n  build() {\n    NavDestination() {\n      Column({ space: 100 }) {\n        Button('PopupOptions')\n          .onClick(() => {\n            this.handlePopup = !this.handlePopup;\n          })\n          .bindPopup(this.handlePopup, {\n            width: 200,\n            message: 'This is a popup.',\n            popupColor: Color.Red, // 设置气泡的背景色\n            mask: {\n              color: '#33d9d9d9'\n            },\n            placement: Placement.Top,\n            backgroundBlurStyle: BlurStyle.NONE // 去除背景模糊效果需要关闭气泡的模糊背景\n          })\n      }\n      .width('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(641513)/* ["default"] */.A) + "",
        width: "347",
        height: "231"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "气泡避让软键盘",
      children: "气泡避让软键盘"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当软键盘弹出时，气泡默认不会对其避让，可能导致气泡被软键盘覆盖，从API version 15开始，可以设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#custompopupoptions8%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "CustomPopupOptions"
      }), "中keyboardAvoidMode属性的值为KeyboardAvoidMode.DEFAULT，来使气泡避让键盘。这时如果当前没有位置放下气泡时，气泡会从预设位置平移覆盖宿主组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nexport struct AvoidSoftKeyboardPopupExample {\n  @State handlePopup: boolean = false;\n\n  @Builder\n  popupBuilder() {\n    Column({ space: 2 }) {\n      Text('Custom Popup').fontSize(20)\n        .borderWidth(2)\n      TextInput()\n    }.width(200).padding(5)\n  }\n\n  build() {\n    NavDestination() {\n      Column({ space: 100 }) {\n        TextInput()\n        Button('PopupOptions')\n          .id('PopupOptions')\n          .onClick(() => {\n            this.handlePopup = !this.handlePopup;\n          })\n          .bindPopup(this.handlePopup!!, {\n            width: 200,\n            builder: this.popupBuilder(),\n            placement: Placement.Bottom,\n            mask: false,\n            autoCancel: false,\n            keyboardAvoidMode: KeyboardAvoidMode.DEFAULT\n          })\n          .position({ x: 100, y: 300 })\n      }\n      .width('100%')\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(537511)/* ["default"] */.A) + "",
        width: "406",
        height: "651"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置气泡内的多态效果",
      children: "设置气泡内的多态效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前使用@Builder自定义气泡内容时，默认不支持多态样式，可以使用@Component新建一个组件实现按下气泡中的内容时背景变色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 请将$r('app.media.xxx')替换为实际资源文件\n@Entry\n@Component\nexport struct PolymorphicEffectPopupExample {\n  // 请在resources\\base\\element\\string.json文件中配置name为'xxx'，value为非空字符串的资源\n  @State scan: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('Scan_title') as string;\n  @State createGroupChat: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('Create_group_chat') as string;\n  @State electronicWorkCard: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('Electronic_work_card') as string;\n  private menus: Array<string> = [this.scan, this.createGroupChat, this.electronicWorkCard];\n\n  // popup构造器定义弹框内容\n  @Builder\n  popupItemBuilder(name: string, action: string) {\n    PopupItemChild({ childName: name, childAction: action })\n  }\n\n  // popup构造器定义弹框内容\n  @Builder\n  popupBuilder() {\n    Column() {\n      ForEach(\n        this.menus,\n        (item: string, index) => {\n          this.popupItemBuilder(item, String(index))\n        },\n        (item: string, index) => {\n          return item\n        })\n    }\n    .padding(8)\n  }\n\n  @State customPopup: boolean = false;\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button('click me')\n          .id('click me')\n          .onClick(() => {\n            this.customPopup = !this.customPopup\n          })\n          .bindPopup(\n            this.customPopup,\n            {\n              builder: this.popupBuilder, // 气泡的内容\n              placement: Placement.Bottom, // 气泡的弹出位置\n              popupColor: Color.White, // 气泡的背景色\n              onStateChange: (event) => {\n                if (!event.isVisible) {\n                  this.customPopup = false\n                }\n              }\n            })\n      }\n      .width('100%')\n      .justifyContent(FlexAlign.Center)\n    }\n    // ...\n  }\n}\n\n@Component\nstruct PopupItemChild {\n  @Prop childName: string = '';\n  @Prop childAction: string = '';\n  @State selected: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('Selected') as string;\n\n  build() {\n    Row({ space: 8 }) {\n      Image($r('app.media.startIcon'))\n        .width(24)\n        .height(24)\n      Text(this.childName)\n        .fontSize(16)\n    }\n    .width(130)\n    .height(50)\n    .padding(8)\n    .onClick(() => {\n      this.getUIContext().getPromptAction().showToast({ message: this.selected + this.childName })\n    })\n    .stateStyles({\n      normal: {\n        .backgroundColor(Color.White)\n      },\n      pressed: {\n        .backgroundColor('#d4f1ff')\n      }\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(35759)/* ["default"] */.A) + "",
        width: "350",
        height: "741"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "气泡支持避让中轴",
      children: "气泡支持避让中轴"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18起，气泡支持中轴避让功能。从API version 20开始，在2in1设备上默认启用（仅在窗口处于瀑布模式时产生避让）。开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#popupoptions%E7%B1%BB%E5%9E%8B%E8%AF%B4%E6%98%8E",
        children: "PopupOptions"
      }), "中的enableHoverMode属性，控制气泡是否启用中轴避让。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(288659)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果气泡的点击位置在中轴区域，则气泡不会避让。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2in1设备上需同时满足窗口处于瀑布模式才会产生避让。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct SupportedAvoidAxisPopupExample {\n  // 请在resources\\base\\element\\string.json文件中配置name为'xxx'，value为非空字符串的资源\n  @State upScreen: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('Upper_half_screen') as string;\n  @State middleAxle: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('Middle_axle') as string;\n  @State lowerScreen: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('Lower_half_screen') as string;\n  @State subwindowDisplay: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('Subwindow_display') as string;\n  @State subwindow: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('Subwindow') as string;\n  @State nonSubwindow: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('Non_Subwindow') as string;\n  @State zone: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('zone') as string;\n  @State hoverModeStart: string =\n    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('hoverMode_start') as string;\n\n  @State message: string = 'Hello World';\n  @State index: number = 0;\n  @State arrayStr: Array<string> = [this.upScreen, this.middleAxle, this.lowerScreen];\n  @State enableHoverMode: boolean | undefined = true;\n  @State showInSubwindow: boolean = false;\n  @State placement: Placement | undefined = undefined;\n  @State isShow: boolean = false;\n\n  build() {\n    NavDestination() {\n      RelativeContainer() {\n        Column() {\n          Button(this.zone + this.arrayStr[this.index])\n            .onClick(() => {\n              if (this.index < 2) {\n                this.index++\n              } else {\n                this.index = 0\n              }\n            })\n\n          Button(this.subwindowDisplay + (this.showInSubwindow ? this.subwindow : this.nonSubwindow))\n            .onClick(() => {\n              this.showInSubwindow = !this.showInSubwindow\n            })\n\n          Button(this.hoverModeStart + this.enableHoverMode)\n            .onClick(() => {\n              if (this.enableHoverMode === undefined) {\n                this.enableHoverMode = true\n              } else if (this.enableHoverMode === true) {\n                this.enableHoverMode = false\n              } else {\n                this.enableHoverMode = undefined\n              }\n            })\n        }\n\n        Row() {\n          Button('Popup')\n            .id('Popup')\n            .fontWeight(FontWeight.Bold)\n            .bindPopup(this.isShow, {\n              message: 'popup',\n              enableHoverMode: this.enableHoverMode,\n              showInSubWindow: this.showInSubwindow,\n            })\n            .onClick(() => {\n              this.isShow = !this.isShow\n            })\n        }\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .margin({\n          top: this.index === 2 ? 330 : this.index === 1 ? 50 : 0,\n          bottom: this.index === 0 ? 330 : 0\n        })\n      }\n      .height('100%')\n      .width('100%')\n    }\n    // ...\n  }\n}\n"
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
15874(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437963-d36e2eebb3ee07e5959a2f10aa64e098.gif");

},
641513(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437965-d57b3b8ec5f9f654de6aec742f137d76.gif");

},
386450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798268-4598f127c0575ba54bf622a7382832cb.png");

},
35759(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477921-4bb824d2343755ef905bb0b1705966c2.gif");

},
537511(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957920-f2f8fc8a34e095573eb85236c62a3a53.gif");

},
811818(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477919-cfa3437421d39d2d291d08d56f1e9e63.gif");

},
441883(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957918-89eaf098f2d76d3f7b93f2986859b32b.jpeg");

},
472566(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798270-78723a20664abc6fce6abbbf93a5725a.jpeg");

},
288659(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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