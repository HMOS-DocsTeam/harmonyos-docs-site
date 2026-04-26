"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["831068"], {
612483(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_create_overlaymanager_arkts_create_overlaymanager_md_e3b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-create-overlaymanager-arkts-create-overlaymanager-md-e3b.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_create_overlaymanager_arkts_create_overlaymanager_md_e3b_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-create-overlaymanager/arkts-create-overlaymanager","title":"设置浮层（OverlayManager）","description":"浮层（OverlayManager）用于在页面（Page）之上展示自定义的UI内容，位于Dialog、Popup、Menu、BindSheet、BindContentCover和Toast等组件之下，展示范围为当前窗口的安全区内，适用于常驻悬浮等场景。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-overlaymanager/arkts-create-overlaymanager.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-create-overlaymanager","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-overlaymanager/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-overlaymanager/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"设置浮层（OverlayManager）","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-create-overlaymanager","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"即时反馈（Toast）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-toast/"},"next":{"title":"几何图形绘制概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-draw-graphics/arkts-shape-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-overlaymanager/arkts-create-overlaymanager.md


const frontMatter = {
	title: '设置浮层（OverlayManager）',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-create-overlaymanager',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置浮层（OverlayManager）';

const assets = {

};



const toc = [{
  "value": "规格约束",
  "id": "规格约束",
  "level": 2
}, {
  "value": "设置浮层",
  "id": "设置浮层",
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
        id: "设置浮层overlaymanager",
        children: "设置浮层（OverlayManager）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "浮层（OverlayManager）用于在页面（Page）之上展示自定义的UI内容，位于Dialog、Popup、Menu、BindSheet、BindContentCover和Toast等组件之下，展示范围为当前窗口的安全区内，适用于常驻悬浮等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(94352)/* ["default"] */.A) + "",
        width: "391",
        height: "398"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getoverlaymanager12",
        children: "getOverlayManager"
      }), "方法获取当前UI上下文关联的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-overlaymanager/arkts-apis-uicontext-overlaymanager",
        children: "OverlayManager"
      }), "对象，再通过该对象调用对应方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规格约束",
      children: "规格约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OverlayManager上节点的层级在Page页面层级之上，在Dialog、Popup、Menu、BindSheet、BindContentCover和Toast等组件之下。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OverlayManager添加的节点显示和消失时没有默认动画。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OverlayManager上节点安全区域内外的绘制方式与Page一致，键盘避让方式与Page一致。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "推荐使用AppStorage存储与OverlayManager相关的属性，以避免页面切换时属性值变化导致业务错误。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当使用API version 19以下版本时，OverlayManager不支持侧滑（左滑/右滑）关闭，需在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#onbackpress",
          children: "onBackPress"
        }), "中添加OverlayManager关闭的逻辑。API 19及以上版本可通过配置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-i/arkts-apis-uicontext-i#overlaymanageroptions15",
          children: "OverlayManagerOptions"
        }), "中的enableBackPressedEvent属性设置OverlayManager是否响应侧滑手势。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OverlayManager中的事件机制优先被", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
          children: "WrappedBuilder"
        }), "装饰的组件接收。若需实现浮层底部接收事件，可通过设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/touch-interactions/ts-universal-attributes-hit-test-behavior/ts-universal-attributes-hit-test-behavior#hittestbehavior",
          children: "hitTestBehavior"
        }), "为HitTestMode.Transparent将事件传递至底层。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置浮层",
      children: "设置浮层"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在OverlayManager上", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-overlaymanager/arkts-apis-uicontext-overlaymanager#addcomponentcontent12",
        children: "新增指定节点（addComponentContent）"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-overlaymanager/arkts-apis-uicontext-overlaymanager#removecomponentcontent12",
        children: "删除指定节点（removeComponentContent）"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-overlaymanager/arkts-apis-uicontext-overlaymanager#showallcomponentcontents12",
        children: "显示所有节点（showAllComponentContents）"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-overlaymanager/arkts-apis-uicontext-overlaymanager#hideallcomponentcontents12",
        children: "隐藏所有节点（hideAllComponentContents）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ComponentContent, OverlayManager } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[Sample_dialogproject]';\nconst DOMAIN: number = 0xFF00;\n\nclass Params {\n  public text: string = '';\n  public offset: Position;\n\n  constructor(text: string, offset: Position) {\n    this.text = text;\n    this.offset = offset;\n  }\n}\n\n@Builder\nfunction builderText(params: Params) {\n  Column() {\n    Text(params.text)\n      .fontSize(30)\n      .fontWeight(FontWeight.Bold)\n  }.offset(params.offset)\n}\n\n@Entry\n@Component\nexport struct OverlayManagerComponent {\n  @State message: string = 'ComponentContent';\n  private uiContext: UIContext = this.getUIContext();\n  private overlayNode: OverlayManager = this.uiContext.getOverlayManager();\n  @StorageLink('contentArray') contentArray: ComponentContent<Params>[] = [];\n  @StorageLink('componentContentIndex') componentContentIndex: number = 0;\n  @StorageLink('arrayIndex') arrayIndex: number = 0;\n  @StorageLink('componentOffset') componentOffset: Position = { x: 0, y: 30 };\n\n  build() {\n    // ...\n      Column({ space: 10 }) {\n        Button('Increment componentContentIndex:' + this.componentContentIndex)\n          .onClick(() => {\n            ++this.componentContentIndex;\n          })\n        Button('Decrement componentContentIndex:' + this.componentContentIndex)\n          .onClick(() => {\n            --this.componentContentIndex;\n          })\n        Button('Add ComponentContent:' + this.contentArray.length)\n          .onClick(() => {\n            let componentContent = new ComponentContent(\n              this.uiContext, wrapBuilder<[Params]>(builderText),\n              new Params(this.message + (this.contentArray.length), this.componentOffset)\n            )\n            this.contentArray.push(componentContent);\n            this.overlayNode.addComponentContent(componentContent, this.componentContentIndex);\n          })\n        Button('Increment arrayIndex:' + this.arrayIndex)\n          .onClick(() => {\n            ++this.arrayIndex;\n          })\n        Button('Decrement arrayIndex:' + this.arrayIndex)\n          .onClick(() => {\n            --this.arrayIndex;\n          })\n        Button('Delete ComponentContent:' + this.arrayIndex)\n          .onClick(() => {\n            if (this.arrayIndex >= 0 && this.arrayIndex < this.contentArray.length) {\n              let componentContent = this.contentArray.splice(this.arrayIndex, 1);\n              this.overlayNode.removeComponentContent(componentContent.pop());\n            } else {\n              hilog.info(DOMAIN, TAG, '%{public}s', 'arrayIndex error');\n            }\n          })\n        Button('Show ComponentContent:' + this.arrayIndex)\n          .onClick(() => {\n            if (this.arrayIndex >= 0 && this.arrayIndex < this.contentArray.length) {\n              let componentContent = this.contentArray[this.arrayIndex];\n              this.overlayNode.showComponentContent(componentContent);\n            } else {\n              hilog.info(DOMAIN, TAG, '%{public}s', 'arrayIndex error');\n            }\n          })\n        Button('Hide ComponentContent:' + this.arrayIndex)\n          .onClick(() => {\n            if (this.arrayIndex >= 0 && this.arrayIndex < this.contentArray.length) {\n              let componentContent = this.contentArray[this.arrayIndex];\n              this.overlayNode.hideComponentContent(componentContent);\n            } else {\n              hilog.info(DOMAIN, TAG, '%{public}s', 'arrayIndex error');\n            }\n          })\n        Button('Show All ComponentContent')\n          .onClick(() => {\n            this.overlayNode.showAllComponentContents();\n          })\n        Button('Hide All ComponentContent')\n          .onClick(() => {\n            this.overlayNode.hideAllComponentContents();\n          })\n\n        Button('Go')\n          .onClick(() => {\n            this.getUIContext().getRouter().pushUrl({\n              url: 'pages/Second'\n            })\n          })\n      }\n      .width('100%')\n      .height('100%')\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(47494)/* ["default"] */.A) + "",
        width: "337",
        height: "605"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示一个始终在屏幕左侧的悬浮球，点击可以弹出alertDialog弹窗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ComponentContent, OverlayManager } from '@kit.ArkUI';\n\nclass Params {\n  public context: UIContext;\n  public offset: Position;\n  constructor(context: UIContext, offset: Position) {\n    this.context = context;\n    this.offset = offset;\n  }\n}\n@Builder\nfunction builderOverlay(params: Params) {\n  Column() {\n    Stack(){\n    }.width(50).height(50).backgroundColor(Color.Yellow).position(params.offset).borderRadius(50)\n    .onClick(() => {\n      params.context.showAlertDialog(\n        {\n          title: 'title',\n          message: 'Text',\n          autoCancel: true,\n          alignment: DialogAlignment.Center,\n          gridCount: 3,\n          confirm: {\n            value: 'Button',\n            action: () => {}\n          },\n          cancel: () => {}\n        }\n      )\n    })\n  }.focusable(false).width('100%').height('100%').hitTestBehavior(HitTestMode.Transparent)\n}\n\n@Entry\n@Component\nexport struct OverlayManagerAlertDialog {\n  private uiContext: UIContext = this.getUIContext();\n  private overlayNode: OverlayManager = this.uiContext.getOverlayManager();\n  private overlayContent:ComponentContent<Params>[] = [];\n  controller: TextInputController = new TextInputController();\n\n  aboutToAppear(): void {\n    let uiContext = this.getUIContext();\n    let componentContent = new ComponentContent(\n      this.uiContext, wrapBuilder<[Params]>(builderOverlay),\n      new Params(uiContext, {x:0, y: 100})\n    );\n    this.overlayNode.addComponentContent(componentContent, 0);\n    this.overlayContent.push(componentContent);\n  }\n\n  aboutToDisappear(): void {\n    let componentContent = this.overlayContent.pop();\n    this.overlayNode.removeComponentContent(componentContent);\n  }\n\n  build() {\n    // ...\n      Column() {\n\n      }\n      .width('100%')\n      .height('100%')\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(701953)/* ["default"] */.A) + "",
        width: "350",
        height: "664"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，可以通过调用UIContext中getOverlayManager方法获取OverlayManager对象，并利用该对象在指定层级上新增指定节点（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-overlaymanager/arkts-apis-uicontext-overlaymanager#addcomponentcontentwithorder18",
        children: "addComponentContentWithOrder"
      }), "），层次高的浮层会覆盖在层级低的浮层之上。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ComponentContent, LevelOrder, OverlayManager } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[Sample_dialogproject]';\nconst DOMAIN: number = 0xFF00;\n\nclass Params {\n  public text: string = '';\n  public offset: Position;\n\n  constructor(text: string, offset: Position) {\n    this.text = text;\n    this.offset = offset;\n  }\n}\n\n@Builder\nfunction builderTopText(params: Params) {\n  Column() {\n    Stack() {\n      Text(params.text)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n    }\n    .width(300)\n    .height(200)\n    .padding(5)\n    .backgroundColor('#F7F7F7')\n    .alignContent(Alignment.Top)\n  }.offset(params.offset)\n}\n\n@Builder\nfunction builderNormalText(params: Params) {\n  Column() {\n    Stack() {\n      Text(params.text)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n    }\n    .width(300)\n    .height(400)\n    .padding(5)\n    .backgroundColor('#D5D5D5')\n    .alignContent(Alignment.Top)\n  }.offset(params.offset)\n}\n\n@Entry\n@Component\nexport struct OverlayManagerWithOrder {\n  private ctx: UIContext = this.getUIContext();\n  private overlayManager: OverlayManager = this.ctx.getOverlayManager();\n  @StorageLink('contentArray') contentArray: ComponentContent<Params>[] = [];\n  @StorageLink('componentContentIndex') componentContentIndex: number = 0;\n  @StorageLink('arrayIndex') arrayIndex: number = 0;\n  @StorageLink('componentOffset') componentOffset: Position = { x: 0, y: 80 };\n\n  build() {\n    // ...\n      Row() {\n        Column({ space: 5 }) {\n          Button('Open Top-Level Dialog Box')\n            .onClick(() => {\n              let componentContent = new ComponentContent(\n                this.ctx, wrapBuilder<[Params]>(builderTopText),\n                new Params('I am a top-level dialog box', this.componentOffset)\n              );\n              this.contentArray.push(componentContent);\n              this.overlayManager.addComponentContentWithOrder(componentContent, LevelOrder.clamp(100000));\n            })\n          Button('Open Normal Dialog Box')\n            .onClick(() => {\n              let componentContent = new ComponentContent(\n                this.ctx, wrapBuilder<[Params]>(builderNormalText),\n                new Params('I am a normal dialog box', this.componentOffset)\n              );\n              this.contentArray.push(componentContent);\n              this.overlayManager.addComponentContentWithOrder(componentContent, LevelOrder.clamp(0));\n            })\n          Button('Remove Dialog Box').onClick(() => {\n            if (this.arrayIndex >= 0 && this.arrayIndex < this.contentArray.length) {\n              let componentContent = this.contentArray.splice(this.arrayIndex, 1);\n              this.overlayManager.removeComponentContent(componentContent.pop());\n            } else {\n              hilog.info(DOMAIN, TAG, '%{public}s', 'arrayIndex error');\n            }\n          })\n        }.width('100%')\n      }\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(672779)/* ["default"] */.A) + "",
        width: "337",
        height: "605"
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
672779(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437973-4cb1658da1b9f38dd1a4ec8343f36c8a.gif");

},
94352(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957926-83ba16a78fa43f3b5226619cd3a61e8e.png");

},
701953(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798278-8d7a0a3e6ce4cb8802b8064f6e26b5b3.gif");

},
47494(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477927-5bea256d43f7b75177978290ef6ac7fe.gif");

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