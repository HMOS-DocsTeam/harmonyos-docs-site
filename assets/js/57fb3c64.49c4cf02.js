"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["141532"], {
810505(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_debug_optimize_arkts_layout_debug_arkts_layout_debug_md_57f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-debug-optimize-arkts-layout-debug-arkts-layout-debug-md-57f.json
var site_docs_arkui_ui_debug_optimize_arkts_layout_debug_arkts_layout_debug_md_57f_namespaceObject = JSON.parse('{"id":"arkui/ui-debug-optimize/arkts-layout-debug/arkts-layout-debug","title":"UI显示异常调试","description":"本章节主要介绍UI显示异常问题的调试方法，并结合案例讲解具体的解决步骤。","source":"@site/docs/arkui/ui-debug-optimize/arkts-layout-debug/arkts-layout-debug.md","sourceDirName":"arkui/ui-debug-optimize/arkts-layout-debug","slug":"/arkui/ui-debug-optimize/arkts-layout-debug/","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/arkts-layout-debug/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"UI显示异常调试","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-debug","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UI相关应用无响应常见问题","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-stability/arkts-stability-freeze-issues/"},"next":{"title":"UI上下文异常调试","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/arkts-wrong-uicontext-debug/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-debug-optimize/arkts-layout-debug/arkts-layout-debug.md


const frontMatter = {
	title: 'UI显示异常调试',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-debug',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'UI显示异常调试';

const assets = {

};



const toc = [{
  "value": "定位UI显示异常问题",
  "id": "定位ui显示异常问题",
  "level": 2
}, {
  "value": "解决UI显示异常问题",
  "id": "解决ui显示异常问题",
  "level": 2
}, {
  "value": "通过ComponentUtils.getRectangleById获取的tabBar组件坐标尺寸异常",
  "id": "通过componentutilsgetrectanglebyid获取的tabbar组件坐标尺寸异常",
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
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ui显示异常调试",
        children: "UI显示异常调试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节主要介绍UI显示异常问题的调试方法，并结合案例讲解具体的解决步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定位ui显示异常问题",
      children: "定位UI显示异常问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UI显示异常问题主要是通过分析UI布局信息来定位。当前分析UI布局主要通过getInspectorTree接口获取组件树信息，或者通过getRectangleById接口获取单个节点的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "组件树"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 9开始，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id#getinspectortree9",
        children: "getInspectorTree"
      }), "接口获取组件树及其属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "单个节点"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 10开始，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-componentutils/arkts-apis-uicontext-componentutils#getrectanglebyid",
        children: "getRectangleById"
      }), "接口获取组件的大小、位置、平移、缩放、旋转及仿射矩阵等属性信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "解决ui显示异常问题",
      children: "解决UI显示异常问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面通过具体案例，介绍如何解决UI显示异常问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过componentutilsgetrectanglebyid获取的tabbar组件坐标尺寸异常",
      children: "通过ComponentUtils.getRectangleById获取的tabBar组件坐标尺寸异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在动态控制tabBar显示或隐藏的场景下，通过ComponentUtils.getRectangleById获取的tabBar组件坐标或尺寸可能与预期不符。例如，当tabBar隐藏时（宽度设为0），获取的坐标位于屏幕中央，恢复显示后，该错误坐标仍被沿用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用同步接口查询布局信息时，目标节点的宽度临时设置为0，节点布局默认居中显示，导致获取的坐标位于屏幕中央。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用接口时，如果当前布局尚未完成渲染（例如，组件刚被隐藏或显示，布局计算未结束），查询到的将是未更新的旧布局信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "选择合适的调用时机：在组件完成布局渲染后调用接口。例如，tabBar恢复显示后，使用延迟函数等待布局更新完成，再获取坐标。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "监听布局变化事件：利用组件的onAreaChange回调，在布局变化并稳定后，触发坐标获取逻辑。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "增加有效性校验：获取坐标后，校验组件尺寸，过滤无效数据。宽度或高度为0的组件被视为无效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "代码示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ComponentUtils } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Page {\n  @State currentIndex: number = 0;\n  @State msg: string = 'info';\n  @State pivotX: number = 0;\n  @State pivotY: number = 0;\n  @State pivotShow: boolean = false;\n  @State tabBarShow: boolean = true;\n\n  private controller : TabsController = new TabsController();\n  private uiContext : UIContext | undefined = undefined;\n  private componentUtils : ComponentUtils | undefined = undefined;\n  private componentId : string = 'tab-pink';\n  private flag : boolean = false;\n  private baseX : number = 0;\n  private baseY : number = 0;\n\n  @Builder\n  tabBuilder(index: number, name: string) {\n    Column() {\n      Text(name)\n        .fontSize(16)\n        .fontWeight(this.currentIndex === index ? 500 : 400)\n        .fontColor(this.currentIndex === index ? '#007DFF': '#182431')\n        .lineHeight(22)\n    }\n    .id(`tab-${name}`)\n    .width('100%')\n    .height('100%')\n    .borderStyle(BorderStyle.Solid)\n    .borderWidth(1)\n  }\n\n  aboutToAppear(): void {\n    this.uiContext = this.getUIContext();\n    this.componentUtils = this.getUIContext().getComponentUtils();\n  }\n\n  getRectInfo(id?: string) : string {\n    let componentId : string = id??this.componentId;\n    let info = this.componentUtils?.getRectangleById(componentId);\n    let infoStr : string = '';\n    if (info) {\n      infoStr = 'Size: ' + JSON.stringify(info.size) + ', WindowOffset: ' + JSON.stringify(info.windowOffset);\n    }\n    return infoStr;\n  }\n\n  getBasePosition() : void {\n    if (this.flag) {\n      return;\n    }\n    let info = this.componentUtils?.getRectangleById('root-stack');\n    if (info) {\n      this.baseX = info.windowOffset.x;\n      this.baseY = info.windowOffset.y;\n      this.msg = `${this.componentId}: ` + this.getRectInfo(this.componentId) + `, pivot: {x: ${this.pivotX}, y: ${this.pivotY}}`;\n      this.flag = true;\n    }\n  }\n\n  onDidBuild(): void {\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        Text(this.msg)\n          .fontSize(20)\n          .border({ width: 5, color: Color.Brown })\n          .width('100%')\n          .height('30%')\n          .margin({ top: 50 })\n        Row() {\n          Button('Rect')\n            .onClick(() => {\n              this.msg = JSON.stringify(this.componentUtils?.getRectangleById('tab-pink'))\n            })\n            .width('33%')\n          Button('replay')\n            .onClick(() => {\n              this.pivotShow = false;\n              this.tabBarShow = false;\n              this.pivotShow = true;\n              setTimeout(() => {\n                this.tabBarShow = true\n              }, 100)\n            })\n            .width('33%')\n          Button('pivot')\n            .onClick(() => {\n              this.pivotShow = !this.pivotShow;\n            })\n            .width('33%')\n        }\n        .width('100%')\n        .height('10%')\n        .justifyContent(FlexAlign.SpaceEvenly)\n        Tabs({ barPosition: BarPosition.End, index: this.currentIndex, controller: this.controller }) {\n          TabContent() {\n            Column()\n              .width('100%')\n              .height('100%')\n              .backgroundColor('#00CB87')\n          }\n          .tabBar(this.tabBuilder(0, 'green'))\n          TabContent() {\n            Column()\n              .width('100%')\n              .height('100%')\n              .backgroundColor('#007DFF')\n          }\n          .tabBar(this.tabBuilder(1, 'blue'))\n          TabContent() {\n            Column()\n              .width('100%')\n              .height('100%')\n              .backgroundColor('#FFBF00')\n          }\n          .tabBar(this.tabBuilder(2, 'yellow'))\n          .width('25%')\n          TabContent() {\n            Column()\n              .width('100%')\n              .height('100%')\n              .backgroundColor('#E67C92')\n          }\n          .tabBar(this.tabBuilder(3, 'pink'))\n        }\n        .expandSafeArea([SafeAreaType.CUTOUT, SafeAreaType.SYSTEM, SafeAreaType.KEYBOARD],\n          [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])\n        .barWidth(this.tabBarShow ? '100%' : 0)\n        .width('100%')\n        .height('40%')\n        .barHeight(44)\n        .vertical(false)\n        .barMode(BarMode.Fixed)\n        .backgroundColor('#F1F2F3')\n        .onChange((index: number) => {\n          this.currentIndex = index;\n          if (index == 3) {\n            this.pivotShow = false;\n          }\n        })\n        .animation({ duration: 100, curve: Curve.Linear })\n      }\n      .id('col')\n      .width('100%')\n      .height('100%')\n      .justifyContent(FlexAlign.SpaceBetween)\n      if (this.pivotShow) {\n        Text('X')\n          .width(18)\n          .height(18)\n          .textAlign(TextAlign.Center)\n          .borderRadius(9)\n          .fontColor(Color.White)\n          .backgroundColor(Color.Red)\n          .position({ x: this.uiContext?.px2vp(this.pivotX), y: this.uiContext?.px2vp(this.pivotY) })\n          .onAreaChange(() => {\n            let info = this.componentUtils?.getRectangleById(this.componentId);\n            if (info) {\n              this.getBasePosition();\n              this.pivotX = info.windowOffset.x - this.baseX;\n              this.pivotY = info.windowOffset.y - this.baseY;\n              this.msg = `${this.componentId}: ` + this.getRectInfo(this.componentId) + `, pivot: {x: ${this.pivotX}, y: ${this.pivotY}}`;\n            }\n          })\n      }\n    }\n    .id('root-stack')\n  }\n}\n"
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