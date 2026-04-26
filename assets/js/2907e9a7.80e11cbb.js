"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["294662"], {
670958(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_concurrent_loading_modules_guide_concurrent_loading_modules_guide_md_290_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-multithread-develop-case-concurrent-loading-modules-guide-concurrent-loading-modules-guide-md-290.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_concurrent_loading_modules_guide_concurrent_loading_modules_guide_md_290_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/concurrent-loading-modules-guide/concurrent-loading-modules-guide","title":"业务模块并发加载场景","description":"在应用启动时，多个业务模块需要加载，例如地图应用中的定位、打车、导航等模块。如果全部在UI主线程初始化，会严重影响应用冷启动时间。此时，应在不同子线程中并行加载这些模块，以降低启动耗时。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/concurrent-loading-modules-guide/concurrent-loading-modules-guide.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/concurrent-loading-modules-guide","slug":"/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/concurrent-loading-modules-guide/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/concurrent-loading-modules-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"业务模块并发加载场景","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/concurrent-loading-modules-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"批量数据写数据库场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/batch-database-operations-guide/"},"next":{"title":"全局配置项功能场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/global-configuration-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/concurrent-loading-modules-guide/concurrent-loading-modules-guide.md


const frontMatter = {
	title: '业务模块并发加载场景',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/concurrent-loading-modules-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '业务模块并发加载场景';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "业务模块并发加载场景",
        children: "业务模块并发加载场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用启动时，多个业务模块需要加载，例如地图应用中的定位、打车、导航等模块。如果全部在UI主线程初始化，会严重影响应用冷启动时间。此时，应在不同子线程中并行加载这些模块，以降低启动耗时。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过使用ArkTS提供的TaskPool能力，可以将不同的业务初始化任务移到子线程中。业务模块可通过下沉C++实现为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/transferabled-object",
        children: "NativeBinding对象"
      }), "或在ArkTS层定义为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
        children: "Sendable对象"
      }), "，从而将初始化的模块返回给UI主线程调用，实现如下。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各业务功能（SDK）模块定义（这里以使用Sendable对象为例）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "计算器业务模块定义如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { collections } from '@kit.ArkTS';\n\n@Sendable\nexport class Calculator {\n  public history?: collections.Array<collections.Array<string>>;\n  public totalCount: number = 0;\n\n  // 初始化\n  static init(): Calculator {\n    let calc = new Calculator();\n    calc.totalCount = 0;\n    calc.history = collections.Array.create(calc.totalCount, collections.Array.create(2, ''));\n    return calc;\n  }\n\n  // 加法运算\n  add(a: number, b: number) {\n    let result = a + b;\n    this.newCalc(`${a} + ${b}`, `${result}`);\n    return result;\n  }\n\n  // 减法运算\n  sub(a: number, b: number) {\n    let result = a - b;\n    this.newCalc(`${a} - ${b}`, `${result}`);\n    return result;\n  }\n\n  // 乘法运算\n  mul(a: number, b: number) {\n    let result = a * b;\n    this.newCalc(`${a} * ${b}`, `${result}`);\n    return result;\n  }\n\n  // 除法运算\n  div(a: number, b: number) {\n    let result = a / b;\n    this.newCalc(`${a} / ${b}`, `${result}`);\n    return result;\n  }\n\n  // 获取历史记录\n  getHistory(): collections.Array<collections.Array<string>> {\n    return this.history!;\n  }\n\n  // 打印历史记录\n  showHistory() {\n    for (let i = 0; i < this.totalCount; i++) {\n      console.info(`${i}: ${this.history![i][0]} = ${this.history![i][1]}`);\n    }\n  }\n\n  // 添加新计算记录\n  private newCalc(opt: string, ret: string) {\n    let newRecord = new collections.Array<string>(opt, ret);\n    this.totalCount = this.history!.unshift(newRecord);\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定时器业务模块的定义如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Sendable\nexport class TimerSdk {\n\n  // 初始化\n  static init(): TimerSdk {\n    let timer = new TimerSdk();\n    return timer;\n  }\n\n  // 倒计时\n  async Countdown(time: number) {\n    return new Promise((resolve: (value: boolean) => void) => {\n      setTimeout(() => {\n        resolve(true);\n      }, time);\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在UI主线程触发各业务模块分发到子线程，加载完成后在UI主线程使用，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { Calculator } from '../sdk/Calculator';\nimport { TimerSdk } from '../sdk/TimerSdk';\nimport { taskpool } from '@kit.ArkTS';\n\n// 初始化Calculator\n@Concurrent\nfunction initCalculator(): Calculator {\n  return Calculator.init();\n}\n\n// 初始化TimerSdk\n@Concurrent\nfunction initTimerSdk(): TimerSdk {\n  return TimerSdk.init();\n}\n\n@Entry\n@Component\nstruct Index {\n  @State calculateAdd: string = 'calculate add';\n  @State showHistory: string = 'show history';\n  @State countdown: string = 'countdown';\n  calc?: Calculator;\n  timer?: TimerSdk;\n\n  aboutToAppear(): void {\n    taskpool.execute(initCalculator).then((ret) => {\n      this.calc = ret as Calculator;\n    })\n    taskpool.execute(initTimerSdk).then((ret) => {\n      this.timer = ret as TimerSdk;\n    })\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.calculateAdd)\n          .id('add')\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n          .onClick(async () => {\n            let result = this.calc?.add(1, 2)\n            console.info(`Result is ${result}`)\n            this.calculateAdd = 'success';\n          })\n        Text(this.showHistory)\n          .id('show')\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n          .onClick(async () => {\n            this.calc?.showHistory();\n            this.showHistory = 'success';\n          })\n        Text(this.countdown)\n          .id('get')\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .alignRules({\n            center: { anchor: '__container__', align: VerticalAlign.Center },\n            middle: { anchor: '__container__', align: HorizontalAlign.Center }\n          })\n          .onClick(async () => {\n            console.info(`Timer start`);\n            await this.timer?.Countdown(1000);\n            console.info(`Timer end`);\n            this.countdown = 'success';\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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