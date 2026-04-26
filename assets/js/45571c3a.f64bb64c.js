"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["556863"], {
566796(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_list_item_card_ui_design_set_hds_slide_horizon_listitem_ui_design_set_hds_slide_horizon_listitem_md_455_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-list-item-card-ui-design-set-hds-slide-horizon-listitem-ui-design-set-hds-slide-horizon-listitem-md-455.json
var site_docs_ui_design_kit_guide_ui_design_list_item_card_ui_design_set_hds_slide_horizon_listitem_ui_design_set_hds_slide_horizon_listitem_md_455_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-list-item-card/ui-design-set-hds-slide-horizon-listitem/ui-design-set-hds-slide-horizon-listitem","title":"设置附带横滑的列表样式","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-hds-slide-horizon-listitem/ui-design-set-hds-slide-horizon-listitem.md","sourceDirName":"ui-design-kit-guide/ui-design-list-item-card/ui-design-set-hds-slide-horizon-listitem","slug":"/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-hds-slide-horizon-listitem/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-hds-slide-horizon-listitem/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"设置附带横滑的列表样式","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-set-hds-slide-horizon-listitem","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置无主按钮的组件","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-without-master-button/"},"next":{"title":"设置列表卡片样式","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-listitem-style/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-hds-slide-horizon-listitem/ui-design-set-hds-slide-horizon-listitem.md


const frontMatter = {
	title: '设置附带横滑的列表样式',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-set-hds-slide-horizon-listitem',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置附带横滑的列表样式';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "设置附带横滑的列表样式",
        children: "设置附带横滑的列表样式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) Beta1版本开始，新增支持设置附带横滑的列表样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdslistitem/ui-design-hdslistitem",
        children: "HdsListItem"
      }), "组件实现多设备上的系统列表的横滑动效按钮的内容和样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(959515)/* ["default"] */.A) + "",
        width: "437",
        height: "168"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { promptAction, SymbolGlyphModifier, TextModifier } from '@kit.ArkUI';\nimport { HdsListItem } from '@kit.UIDesignKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "简单配置页面的布局，调用HdsListItem的接口绘制列表的横滑动效按钮的内容和样式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct HdsListItemExample {\n  @State dataSource: LazyDataSource<Item> = new LazyDataSource();\n  @State dataArr: Array<Item> = [];\n  @State EndOffset: number = 0;\n  private scroller: Scroller = new Scroller();\n\n  build() {\n    Column() {\n      List({ space: 10, scroller: this.scroller }) {\n        LazyForEach(this.dataSource, (item: Item) => {\n          HdsListItem({\n            hdsListItemCard: {\n              textItem: {\n                primaryText: {\n                  text: 'Primary Text',\n                  modifier: new TextModifier().fontColor(Color.Orange).fontSize(16),\n                }\n              }\n            },\n            swipeActionOptions: {\n              icons: [\n                {\n                  icon: new SymbolGlyphModifier($r('sys.symbol.share')).fontColor([Color.Red]).fontSize(16),\n                  backgroundColor: Color.Green,\n                  onAction: () => {\n                    promptAction.openToast({ message: '点击share按钮', duration: 100 });\n                  },\n                },\n                {\n                  icon: new SymbolGlyphModifier($r('sys.symbol.plus_square_on_square')),\n                  backgroundColor: Color.Orange,\n                  onAction: () => {\n                    promptAction.openToast({ message: '点击copy按钮', duration: 100 });\n                  },\n                },\n                {\n                  icon: new SymbolGlyphModifier($r('sys.symbol.plus_square_dashed_on_square'))\n                          .symbolEffect(new BounceSymbolEffect(), true),\n                  onAction: () => {\n                    promptAction.openToast({ message: '点击paste按钮', duration: 100 });\n                  },\n                },\n              ],\n              deleteIconOptions: {\n                backgroundColor: Color.Red, //  ---修改背景色\n                iconColor: Color.Gray, //  ---- 修改垃圾桶的颜色\n                onAction: () => {\n                  promptAction.openToast({ message: '点击删除按钮', duration: 100 });\n                }, //   --点击回调\n              },\n              fullDeleteOptions: {\n                isFullDelete: true, // --- 划动距离超过划出组件大小后自动触发删除，默认是false\n                onFullDeleteAction: () => {\n                  promptAction.openToast({ message: '触发自动删除', duration: 100 });\n                  this.getUIContext()?.animateTo({\n                    duration: 350,\n                  }, () => {\n                    this.dataSource.deleteItem(item)\n                  });\n                }, //   -- 触发删除时的回调\n              },\n            }\n          })\n        }, (item: Item) => item.data)\n      }\n      .scrollBar(BarState.Off)\n      .onDidScroll((scrollOffset: number) => {\n        this.EndOffset = scrollOffset\n      })\n      .margin(10)\n      .width('100%')\n      .height('100%')\n    }\n    .backgroundColor('#0D182431')\n    .width('100%')\n    .height('100%')\n  }\n\n  aboutToAppear() {\n    for (let i = 0; i < 2; i++) {\n      this.dataSource.pushItem(new Item(i + ''));\n      this.dataArr.push(new Item(i + ''));\n    }\n  }\n}\n\nclass Item {\n  constructor(data: string) {\n    this.data = data;\n  }\n\n  public data: string = '';\n}\n\nexport class LazyDataSource<T> implements IDataSource {\n  private elements: T[];\n  private listeners: Set<DataChangeListener>;\n\n  constructor(elements: T[] = []) {\n    this.elements = elements;\n    this.listeners = new Set();\n  }\n\n  public totalCount(): number {\n    return this.elements.length;\n  }\n\n  public getData(index: number): T {\n    return this.elements[index];\n  }\n\n  public indexOf(item: T): number {\n    return this.elements.indexOf(item);\n  }\n\n  public pinItem(item: T, index: number): void {\n    this.elements.splice(index, 1);\n    this.elements.unshift(item);\n    this.listeners.forEach(listener => listener.onDataReloaded());\n  }\n\n  public pushItem(item: T) {\n    this.elements.push(item);\n    this.listeners.forEach(listener => listener.onDataAdd(this.elements.length - 1));\n  }\n\n  public deleteItem(item: T): void {\n    const index = this.elements.indexOf(item);\n    if (index < 0) {\n      return;\n    }\n    this.elements.splice(index, 1);\n    this.listeners.forEach(listener => listener.onDataDelete(index));\n  }\n\n  public deleteItemByIndex(index: number): void {\n    this.elements.splice(index, 1);\n    this.listeners.forEach(listener => listener.onDataDelete(index));\n  }\n\n  public registerDataChangeListener(listener: DataChangeListener): void {\n    this.listeners.add(listener);\n  }\n\n  public unregisterDataChangeListener(listener: DataChangeListener): void {\n    this.listeners.delete(listener);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
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
959515(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478349-c79ec48f28a9c6c8dd052ff1a49ac33f.gif");

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