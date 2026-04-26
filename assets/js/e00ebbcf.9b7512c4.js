"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["360399"], {
476447(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_guide_worker_invoke_mainthread_interface_worker_invoke_mainthread_interface_md_e00_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-guide-worker-invoke-mainthread-interface-worker-invoke-mainthread-interface-md-e00.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_guide_worker_invoke_mainthread_interface_worker_invoke_mainthread_interface_md_e00_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-invoke-mainthread-interface/worker-invoke-mainthread-interface","title":"Worker同步调用宿主线程的接口","description":"如果一个接口已在宿主线程中实现，Worker可以通过以下方式调用该接口。","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-invoke-mainthread-interface/worker-invoke-mainthread-interface.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-invoke-mainthread-interface","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-invoke-mainthread-interface/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-invoke-mainthread-interface/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Worker同步调用宿主线程的接口","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-invoke-mainthread-interface","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Worker和宿主线程的即时消息通信","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-communicates-with-mainthread/"},"next":{"title":"多级Worker间高性能消息通信","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-postmessage-sendable/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-invoke-mainthread-interface/worker-invoke-mainthread-interface.md


const frontMatter = {
	title: 'Worker同步调用宿主线程的接口',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-invoke-mainthread-interface',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Worker同步调用宿主线程的接口';

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
        id: "worker同步调用宿主线程的接口",
        children: "Worker同步调用宿主线程的接口"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果一个接口已在宿主线程中实现，Worker可以通过以下方式调用该接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例展示了Worker同步调用宿主线程接口的方法，创建worker的方法可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction#%E5%88%9B%E5%BB%BAworker%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",
        children: "创建worker的注意事项"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "首先，在宿主线程实现需要调用的接口，并创建Worker对象，在Worker对象上注册需要调用的对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import worker from '@ohos.worker';\nimport { IconItemSource } from './IconItemSource';\n\n// 创建Worker对象\nconst workerInstance: worker.ThreadWorker = new worker.ThreadWorker('../workers/Worker');\n\nclass PicData {\n  public iconItemSourceList: IconItemSource[] = [];\n\n  public setUp(): string {\n    for (let index = 0; index < 20; index++) {\n      const numStart: number = index * 6;\n      // 此处循环使用6张图片资源\n      this.iconItemSourceList.push(new IconItemSource('$media:startIcon', `item${numStart + 1}`));\n      this.iconItemSourceList.push(new IconItemSource('$media:background', `item${numStart + 2}`));\n      this.iconItemSourceList.push(new IconItemSource('$media:foreground', `item${numStart + 3}`));\n      this.iconItemSourceList.push(new IconItemSource('$media:startIcon', `item${numStart + 4}`));\n      this.iconItemSourceList.push(new IconItemSource('$media:background', `item${numStart + 5}`));\n      this.iconItemSourceList.push(new IconItemSource('$media:foreground', `item${numStart + 6}`));\n\n    }\n    return 'setUpIconItemSourceList success!';\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          let picData = new PicData();\n          // 在Worker上注册需要调用的对象\n          workerInstance.registerGlobalCallObject('picData', picData);\n          workerInstance.postMessage('run setUp in picData');\n          this.message = 'success';\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "然后，在Worker中通过callGlobalCallObjectMethod接口可以调用宿主线程中的getMessage()方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { CopyEntry } from '../Sendable/CopyEntry';\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\ntry {\n  // 调用方法无入参\n  let res: string = workerPort.callGlobalCallObjectMethod('picData', 'setUp', 0) as string;\n  console.error('worker: ', res);\n} catch (error) {\n  // 异常处理\n  console.error('worker: error code is ' + error.code + ' error message is ' + error.message);\n}\n"
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