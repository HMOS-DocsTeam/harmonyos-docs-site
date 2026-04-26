"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["755761"], {
97039(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_waterflow_data_preload_check_ide_waterflow_data_preload_check_md_06b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-waterflow-data-preload-check-ide-waterflow-data-preload-check-md-06b.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_waterflow_data_preload_check_ide_waterflow_data_preload_check_md_06b_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-waterflow-data-preload-check/ide-waterflow-data-preload-check","title":"@performance/waterflow-data-preload-check","description":"建议对waterflow子组件进行数据预加载。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-waterflow-data-preload-check/ide-waterflow-data-preload-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-waterflow-data-preload-check","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-waterflow-data-preload-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-waterflow-data-preload-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":74,"frontMatter":{"title":"@performance/waterflow-data-preload-check","sidebar_position":74,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-waterflow-data-preload-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/web-on-active-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-web-on-active-check/"},"next":{"title":"@previewer/mandatory-default-value-for-local-initialization","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-previewer/ide_value-for-local-initialization/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-waterflow-data-preload-check/ide-waterflow-data-preload-check.md


const frontMatter = {
	title: '@performance/waterflow-data-preload-check',
	sidebar_position: 74,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-waterflow-data-preload-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/waterflow-data-preload-check';

const assets = {

};



const toc = [{
  "value": "规则配置",
  "id": "规则配置",
  "level": 2
}, {
  "value": "选项",
  "id": "选项",
  "level": 2
}, {
  "value": "正例",
  "id": "正例",
  "level": 2
}, {
  "value": "反例",
  "id": "反例",
  "level": 2
}, {
  "value": "规则集",
  "id": "规则集",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "performancewaterflow-data-preload-check",
        children: "@performance/waterflow-data-preload-check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议对waterflow子组件进行数据预加载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动丢帧场景下，建议优先修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/waterflow-data-preload-check\": \"suggestion\",\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该规则无需配置额外选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下文中WaterFlowDataSource.ets为依赖代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// WaterFlowDataSource.ets\n\n// 实现IDataSource接口的对象，用于瀑布流组件加载数据\nexport class WaterFlowDataSource implements IDataSource {\n  private dataArray: number[] = []\n  private listeners: DataChangeListener[] = []\n\n  constructor() {\n    for (let i = 0; i < 100; i++) {\n      this.dataArray.push(i)\n    }\n  }\n\n  // 获取索引对应的数据\n  public getData(index: number): number {\n    return this.dataArray[index]\n  }\n\n  // 通知控制器数据重新加载\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded()\n    })\n  }\n\n  // 通知控制器数据增加\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index)\n    })\n  }\n\n  // 通知控制器数据变化\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index)\n    })\n  }\n\n  // 通知控制器数据删除\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index)\n    })\n  }\n\n  // 通知控制器数据位置变化\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to)\n    })\n  }\n\n  // 获取数据总数\n  public totalCount(): number {\n    return this.dataArray.length\n  }\n\n  // 注册改变数据的控制器\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener)\n    }\n  }\n\n  // 注销改变数据的控制器\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener)\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1)\n    }\n  }\n\n  // 增加数据\n  public add1stItem(): void {\n    this.dataArray.splice(0, 0, this.dataArray.length)\n    this.notifyDataAdd(0)\n  }\n\n  // 在数据尾部增加一个元素\n  public addLastItem(): void {\n    this.dataArray.splice(this.dataArray.length, 0, this.dataArray.length)\n    this.notifyDataAdd(this.dataArray.length - 1)\n  }\n\n  // 在指定索引位置增加一个元素\n  public addItem(index: number): void {\n    this.dataArray.splice(index, 0, this.dataArray.length)\n    this.notifyDataAdd(index)\n  }\n\n  // 删除第一个元素\n  public delete1stItem(): void {\n    this.dataArray.splice(0, 1)\n    this.notifyDataDelete(0)\n  }\n\n  // 删除第二个元素\n  public delete2ndItem(): void {\n    this.dataArray.splice(1, 1)\n    this.notifyDataDelete(1)\n  }\n\n  // 删除最后一个元素\n  public deleteLastItem(): void {\n    this.dataArray.splice(-1, 1)\n    this.notifyDataDelete(this.dataArray.length)\n  }\n\n  // 重新加载数据\n  public reload(): void {\n    this.dataArray.splice(1, 1)\n    this.dataArray.splice(3, 2)\n    this.notifyDataReload()\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下文中Index.ets为正例测试代码，依赖上文中WaterFlowDataSource.ets："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { WaterFlowDataSource } from './WaterFlowDataSource'\n\n@Entry\n@Component\nstruct WaterFlowDemo {\n  @State minSize: number = 80\n  @State maxSize: number = 180\n  @State fontSize: number = 24\n  @State colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F]\n  scroller: Scroller = new Scroller()\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource()\n  private itemWidthArray: number[] = []\n  private itemHeightArray: number[] = []\n\n  // 计算FlowItem宽/高\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize)\n    return (ret > this.minSize ? ret : this.minSize)\n  }\n\n  // 设置FlowItem的宽/高数组\n  setItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemWidthArray.push(this.getSize())\n      this.itemHeightArray.push(this.getSize())\n    }\n  }\n\n  aboutToAppear() {\n    this.setItemSizeArray()\n  }\n\n  @Builder\n  itemFoot() {\n    Text(`Footer`)\n      .fontSize(10)\n    \n      .width(50)\n      .height(50)\n      .align(Alignment.Center)\n      .margin({ top: 2 })\n  }\n\n  build() {\n    Column({ space: 2 }) {\n      WaterFlow() {\n        LazyForEach(this.dataSource, (item: number) => {\n          FlowItem() {\n            ReusableFlowItem({ item: item })\n          }\n          .onAppear(() => {\n            // 即将触底时提前增加数据，即执行数据预加载\n            if (item + 20 == this.dataSource.totalCount()) {\n              for (let i = 0; i < 100; i++) {\n                this.dataSource.addLastItem()\n              }\n            }\n          })\n          .width('100%')\n          .height(this.itemHeightArray[item % 100])\n          .backgroundColor(this.colors[item % 5])\n        }, (item: string) => item)\n      }\n      .columnsTemplate('1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(5)\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n\n@Reusable\n@Component\nstruct ReusableFlowItem {\n  @State item: number = 0\n\n  // 从复用缓存中加入到组件树之前调用，可在此处更新组件的状态变量以展示正确的内容\n  aboutToReuse(params: Record<string, ESObject>) {\n    this.item = params.item;\n  }\n\n  build() {\n    Column() {\n      Text('N' + this.item).fontSize(12).height('16')\n      Image('res/waterFlowTest (' + this.item % 5 + ').jpg')\n        .objectFit(ImageFit.Fill)\n        .width('100%')\n        .layoutWeight(1)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下文中WaterFlowDataSource.ets为依赖代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// WaterFlowDataSource.ets\n\n// 实现IDataSource接口的对象，用于瀑布流组件加载数据\nexport class WaterFlowDataSource implements IDataSource {\n  private dataArray: number[] = []\n  private listeners: DataChangeListener[] = []\n\n  constructor() {\n    for (let i = 0; i < 100; i++) {\n      this.dataArray.push(i)\n    }\n  }\n\n  // 获取索引对应的数据\n  public getData(index: number): number {\n    return this.dataArray[index]\n  }\n\n  // 通知控制器数据重新加载\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded()\n    })\n  }\n\n  // 通知控制器数据增加\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index)\n    })\n  }\n\n  // 通知控制器数据变化\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index)\n    })\n  }\n\n  // 通知控制器数据删除\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index)\n    })\n  }\n\n  // 通知控制器数据位置变化\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to)\n    })\n  }\n\n  // 获取数据总数\n  public totalCount(): number {\n    return this.dataArray.length\n  }\n\n  // 注册改变数据的控制器\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener)\n    }\n  }\n\n  // 注销改变数据的控制器\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener)\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1)\n    }\n  }\n\n  // 增加数据\n  public add1stItem(): void {\n    this.dataArray.splice(0, 0, this.dataArray.length)\n    this.notifyDataAdd(0)\n  }\n\n  // 在数据尾部增加一个元素\n  public addLastItem(): void {\n    this.dataArray.splice(this.dataArray.length, 0, this.dataArray.length)\n    this.notifyDataAdd(this.dataArray.length - 1)\n  }\n\n  // 在指定索引位置增加一个元素\n  public addItem(index: number): void {\n    this.dataArray.splice(index, 0, this.dataArray.length)\n    this.notifyDataAdd(index)\n  }\n\n  // 删除第一个元素\n  public delete1stItem(): void {\n    this.dataArray.splice(0, 1)\n    this.notifyDataDelete(0)\n  }\n\n  // 删除第二个元素\n  public delete2ndItem(): void {\n    this.dataArray.splice(1, 1)\n    this.notifyDataDelete(1)\n  }\n\n  // 删除最后一个元素\n  public deleteLastItem(): void {\n    this.dataArray.splice(-1, 1)\n    this.notifyDataDelete(this.dataArray.length)\n  }\n\n  // 重新加载数据\n  public reload(): void {\n    this.dataArray.splice(1, 1)\n    this.dataArray.splice(3, 2)\n    this.notifyDataReload()\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下文中Index.ets为反例测试代码，依赖上文中WaterFlowDataSource.ets："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { WaterFlowDataSource } from './WaterFlowDataSource'\n\n@Entry\n@Component\nstruct WaterFlowDemo {\n  @State minSize: number = 80\n  @State maxSize: number = 180\n  @State fontSize: number = 24\n  @State colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F]\n  scroller: Scroller = new Scroller()\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource()\n  private itemWidthArray: number[] = []\n  private itemHeightArray: number[] = []\n\n  // 计算FlowItem宽/高\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize)\n    return (ret > this.minSize ? ret : this.minSize)\n  }\n\n  // 设置FlowItem的宽/高数组\n  setItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemWidthArray.push(this.getSize())\n      this.itemHeightArray.push(this.getSize())\n    }\n  }\n\n  aboutToAppear() {\n    this.setItemSizeArray()\n  }\n\n  @Builder\n  itemFoot() {\n    Text(`Footer`)\n      .fontSize(10)\n      .backgroundColor(Color.Red)\n      .width(50)\n      .height(50)\n      .align(Alignment.Center)\n      .margin({ top: 2 })\n  }\n\n  build() {\n    Column({ space: 2 }) {\n      WaterFlow() {\n        LazyForEach(this.dataSource, (item: number) => {\n          FlowItem() {\n            ReusableFlowItem({ item: item })\n          }\n          .width('100%')\n          .height(this.itemHeightArray[item % 100])\n          .backgroundColor(this.colors[item % 5])\n        }, (item: string) => item)\n      }\n      .onReachEnd(() => {\n        console.info(\"onReachEnd\")\n        setTimeout(() => {\n          for (let i = 0; i < 100; i++) {\n            this.dataSource.addLastItem()\n          }\n        }, 1000)\n      })\n      .columnsTemplate(\"1fr 1fr\")\n      .columnsGap(10)\n      .rowsGap(5)\n      .backgroundColor(0xFAEEE0)\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n\n@Reusable\n@Component\nstruct ReusableFlowItem {\n  @State item: number = 0\n\n  // 从复用缓存中加入到组件树之前调用，可在此处更新组件的状态变量以展示正确的内容\n  aboutToReuse(params: Record<string, ESObject>) {\n    this.item = params.item;\n  }\n\n  build() {\n    Column() {\n      Text(\"N\" + this.item).fontSize(12).height('16')\n      Image('res/waterFlowTest (' + this.item % 5 + ').jpg')\n        .objectFit(ImageFit.Fill)\n        .width('100%')\n        .layoutWeight(1)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@performance/recommended\nplugin:@performance/all\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code Linter代码检查规则的配置指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-check/ide-code-linter",
        children: "Code Linter代码检查"
      }), "。"]
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