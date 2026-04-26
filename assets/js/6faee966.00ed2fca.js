"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["142824"], {
678516(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_guide_taskpool_communicates_with_mainthread_taskpool_communicates_with_mainthread_md_6fa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-guide-taskpool-communicates-with-mainthread-taskpool-communicates-with-mainthread-md-6fa.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_guide_taskpool_communicates_with_mainthread_taskpool_communicates_with_mainthread_md_6fa_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/taskpool-communicates-with-mainthread/taskpool-communicates-with-mainthread","title":"TaskPool任务与宿主线程通信","description":"如果Task不仅需要返回最终执行结果，还需定时通知宿主线程状态和数据变化，或分段返回大量数据（如从数据库读取大量数据），可按以下方式实现。","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/taskpool-communicates-with-mainthread/taskpool-communicates-with-mainthread.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/taskpool-communicates-with-mainthread","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/taskpool-communicates-with-mainthread/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/taskpool-communicates-with-mainthread/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"TaskPool任务与宿主线程通信","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/taskpool-communicates-with-mainthread","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用TaskPool执行多个耗时任务","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/multi-time-consuming-tasks/"},"next":{"title":"Worker和宿主线程的即时消息通信","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/worker-communicates-with-mainthread/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-guide/taskpool-communicates-with-mainthread/taskpool-communicates-with-mainthread.md


const frontMatter = {
	title: 'TaskPool任务与宿主线程通信',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/taskpool-communicates-with-mainthread',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'TaskPool任务与宿主线程通信';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
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
        id: "taskpool任务与宿主线程通信",
        children: "TaskPool任务与宿主线程通信"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果Task不仅需要返回最终执行结果，还需定时通知宿主线程状态和数据变化，或分段返回大量数据（如从数据库读取大量数据），可按以下方式实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面以多个图片加载任务结果实时返回为例说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现接收Task消息的方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { taskpool } from '@kit.ArkTS';\nimport { IconItemSource } from './IconItemSource';\n\nfunction notice(data: number): void {\n  console.info('子线程任务已执行完，共加载图片: ', data);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在需要执行的Task中，添加sendData()接口将消息发送给宿主线程。在宿主线程通过onReceiveData()接口接收消息。这样宿主线程就可以通过notice()接口接收到Task发送的数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export class IconItemSource {\n  image: string | Resource = '';\n  text: string | Resource = '';\n\n  constructor(image: string | Resource = '', text: string | Resource = '') {\n    this.image = image;\n    this.text = text;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { taskpool } from '@kit.ArkTS';\nimport { IconItemSource } from './IconItemSource';\n\nfunction notice(data: number): void {\n  console.info('子线程任务已执行完，共加载图片: ', data);\n}\n\n// 通过Task的sendData方法，即时通知宿主线程信息\n@Concurrent\nexport function loadPictureSendData(count: number): IconItemSource[] {\n  let iconItemSourceList: IconItemSource[] = [];\n  // 遍历添加6*count个IconItem的数据\n  for (let index = 0; index < count; index++) {\n    const numStart: number = index * 6;\n    // 此处循环使用6张图片资源\n    iconItemSourceList.push(new IconItemSource('$media:startIcon', `item${numStart + 1}`));\n    iconItemSourceList.push(new IconItemSource('$media:background', `item${numStart + 2}`));\n    iconItemSourceList.push(new IconItemSource('$media:foreground', `item${numStart + 3}`));\n    iconItemSourceList.push(new IconItemSource('$media:startIcon', `item${numStart + 4}`));\n    iconItemSourceList.push(new IconItemSource('$media:background', `item${numStart + 5}`));\n    iconItemSourceList.push(new IconItemSource('$media:foreground', `item${numStart + 6}`));\n\n    taskpool.Task.sendData(iconItemSourceList.length);\n  }\n  return iconItemSourceList;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            let iconItemSourceList: IconItemSource[];\n            let lodePictureTask: taskpool.Task = new taskpool.Task(loadPictureSendData, 30);\n            // 设置notice方法接收Task发送的消息\n            lodePictureTask.onReceiveData(notice);\n            taskpool.execute(lodePictureTask).then((res: object) => {\n              iconItemSourceList = res as IconItemSource[];\n            })\n            this.message = 'success';\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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