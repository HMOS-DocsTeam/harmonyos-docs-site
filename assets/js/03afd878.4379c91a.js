"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["335497"], {
159507(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_taskpool_waterflow_taskpool_waterflow_md_03a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-multithread-develop-case-taskpool-waterflow-taskpool-waterflow-md-03a.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_taskpool_waterflow_taskpool_waterflow_md_03a_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-waterflow/taskpool-waterflow","title":"ArkUI瀑布流渲染场景","description":"此处提供使用任务池TaskPool提升WaterFlow瀑布流渲染性能的开发指导。UI线程查询数据库数据，并将数据渲染到瀑布流组件，数据过大时会导致UI线程长时间等待，影响用户体验。因此，我们可以将数据查询操作放到子线程中，并通过TaskPool的接口返回数据给UI线程。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-waterflow/taskpool-waterflow.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-waterflow","slug":"/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-waterflow/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-waterflow/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"ArkUI瀑布流渲染场景","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/taskpool-waterflow","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"TaskPool指定任务并发度场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-async-task-guide/"},"next":{"title":"获取最近访问列表场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/sendablelrucache-recent-list/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/taskpool-waterflow/taskpool-waterflow.md


const frontMatter = {
	title: 'ArkUI瀑布流渲染场景',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/taskpool-waterflow',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkUI瀑布流渲染场景';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkui瀑布流渲染场景",
        children: "ArkUI瀑布流渲染场景"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此处提供使用任务池", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool",
        children: "TaskPool"
      }), "提升", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
        children: "WaterFlow瀑布流"
      }), "渲染性能的开发指导。UI线程查询数据库数据，并将数据渲染到瀑布流组件，数据过大时会导致UI线程长时间等待，影响用户体验。因此，我们可以将数据查询操作放到子线程中，并通过TaskPool的接口返回数据给UI线程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例说明以下场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["模拟子线程", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/batch-database-operations-guide",
          children: "读取数据库数据"
        }), "并返回给UI线程。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UI线程感知到数据更新，将子线程返回的数据渲染到瀑布流组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义一个接口，用于子线程查询数据库并将数据返回给UI线程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { taskpool } from '@kit.ArkTS';\nimport { fillImg } from './WaterfallRendering';\n\n@Concurrent\nfunction query() {\n  console.info('TaskPoolTest-this is query');\n  let result = new Array<string>(33);\n  for (let i = 0; i < 33; i++) {\n    result[i] = 'Image' + i;\n  }\n  taskpool.Task.sendData(result);\n}\n\nexport function getImgFromDB() {\n  // 此处模拟查询数据库，并返回数据\n  let task = new taskpool.Task(query);\n  task.onReceiveData(fillImg);\n  taskpool.execute(task);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "封装一个瀑布流组件数据源，用于瀑布流组件加载数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 实现IDataSource接口的对象，用于瀑布流组件加载数据\nexport class WaterFlowDataSource implements IDataSource {\n  private dataArray: number[] = [];\n  private listeners: DataChangeListener[] = [];\n\n  constructor() {\n    for (let i = 0; i < 100; i++) {\n      this.dataArray.push(i);\n    }\n  }\n\n  // 获取索引对应的数据\n  public getData(index: number): number {\n    return this.dataArray[index];\n  }\n\n  // 通知控制器数据重新加载\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    })\n  }\n\n  // 通知控制器数据增加\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    })\n  }\n\n  // 通知控制器数据变化\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    })\n  }\n\n  // 通知控制器数据删除\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    })\n  }\n\n  // 通知控制器数据位置变化\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    })\n  }\n\n  // 通知控制器数据批量修改\n  notifyDatasetChange(operations: DataOperation[]): void {\n    this.listeners.forEach(listener => {\n      listener.onDatasetChange(operations);\n    })\n  }\n\n  // 获取数据总数\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  // 注册改变数据的控制器\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  // 注销改变数据的控制器\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 增加数据\n  public add1stItem(): void {\n    this.dataArray.splice(0, 0, this.dataArray.length);\n    this.notifyDataAdd(0);\n  }\n\n  // 在数据尾部增加一个元素\n  public addLastItem(): void {\n    this.dataArray.splice(this.dataArray.length, 0, this.dataArray.length);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n\n  // 在指定索引位置增加一个元素\n  public addItem(index: number): void {\n    this.dataArray.splice(index, 0, this.dataArray.length);\n    this.notifyDataAdd(index);\n  }\n\n  // 删除第一个元素\n  public delete1stItem(): void {\n    this.dataArray.splice(0, 1);\n    this.notifyDataDelete(0);\n  }\n\n  // 删除第二个元素\n  public delete2ndItem(): void {\n    this.dataArray.splice(1, 1);\n    this.notifyDataDelete(1);\n  }\n\n  // 删除最后一个元素\n  public deleteLastItem(): void {\n    this.dataArray.splice(-1, 1);\n    this.notifyDataDelete(this.dataArray.length);\n  }\n\n  // 在指定索引位置删除一个元素\n  public deleteItem(index: number): void {\n    this.dataArray.splice(index, 1);\n    this.notifyDataDelete(index);\n  }\n\n  // 重新加载数据\n  public reload(): void {\n    this.dataArray.splice(3, 2);\n    this.dataArray.splice(1, 1);\n    this.notifyDataReload();\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用冷启动阶段，调用getImgFromDB()接口，将数据查询操作放到子线程中。在img接收到子线程返回的数据后，将数据渲染到瀑布流组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { WaterFlowDataSource } from './WaterFlowDataSource';\nimport { getImgFromDB } from './Mock';\n\n// 模拟图片数组\nlet img = new Array<string>(33);\n\nexport function fillImg(imgArr: Array<string>) {\n  img = imgArr;\n}\n\n@Entry\n@Component\nstruct WaterFlowDemo {\n  @State minSize: number = 80;\n  @State maxSize: number = 180;\n  @State fontSize: number = 24;\n  @State colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F];\n  scroller: Scroller = new Scroller();\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource();\n  private itemWidthArray: number[] = [];\n  private itemHeightArray: number[] = [];\n\n  // 计算FlowItem宽/高\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize);\n    return (ret > this.minSize ? ret : this.minSize);\n  }\n\n  // 设置FlowItem的宽/高数组\n  setItemSizeArray() {\n    for (let i = 0; i < 100; i++) {\n      this.itemWidthArray.push(this.getSize());\n      this.itemHeightArray.push(this.getSize());\n    }\n  }\n\n  aboutToAppear() {\n    this.setItemSizeArray();\n  }\n\n  @Builder\n  itemFoot() {\n    Column() {\n      Text(`Footer`)\n        .fontSize(10)\n        .backgroundColor(Color.Red)\n        .width(50)\n        .height(50)\n        .align(Alignment.Center)\n        .margin({ top: 2 });\n    }\n  }\n\n  build() {\n    Column({ space: 2 }) {\n      Text('ArkUI WaterFlow Demo')\n        .onAppear(() => {\n          getImgFromDB();\n        })\n      WaterFlow() {\n        LazyForEach(this.dataSource, (item: number) => {\n          FlowItem() {\n            Column() {\n              Text('N' + item)\n                .fontSize(12)\n                .height('16')\n                .onClick(() => {\n                });\n              // 为了模拟图片加载，使用Text组件显示，正常加载jpg文件时，可以直接使用Image组件\n              // 参考 Image(this.img[item % 33]).objectFit(ImageFit.Contain).width('100%').layoutWeight(1)\n              if (img[item % 33] == null) {\n                Text($r('app.string.Image_loading')) // 加载资源，可根据项目实际资源自定义\n                  .width('100%')\n                  .layoutWeight(1);\n              }\n              Text(img[item % 33])\n                .width('100%')\n                .layoutWeight(1);\n            }\n          }\n          .onAppear(() => {\n            // 即将触底时提前增加数据\n            if (item + 20 == this.dataSource.totalCount()) {\n              for (let i = 0; i < 100; i++) {\n                this.dataSource.addLastItem();\n              }\n            }\n          })\n          .width('100%')\n          .height(this.itemHeightArray[item % 100])\n          .backgroundColor(this.colors[item % 5])\n        }, (item: string) => item)\n      }\n      .columnsTemplate('1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(5)\n      .backgroundColor(0xFAEEE0)\n      .width('100%')\n      .height('100%')\n      .onReachStart(() => {\n        console.info('TaskPoolTest-waterFlow reach start');\n      })\n      .onScrollStart(() => {\n        console.info('TaskPoolTest-waterFlow scroll start');\n      })\n      .onScrollStop(() => {\n        console.info('TaskPoolTest-waterFlow scroll stop');\n      })\n      .onScrollFrameBegin((offset: number, state: ScrollState) => {\n        console.info('TaskPoolTest-waterFlow scrollFrameBegin offset: ' + offset + ' state: ' + state.toString());\n        return { offsetRemain: offset };\n      })\n    }\n  }\n}\n"
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