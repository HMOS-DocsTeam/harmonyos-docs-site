"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["445467"], {
541411(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_multi_thread_cancel_task_multi_thread_cancel_task_md_50b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-multithread-develop-case-multi-thread-cancel-task-multi-thread-cancel-task-md-50b.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_multi_thread_cancel_task_multi_thread_cancel_task_md_50b_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/multi-thread-cancel-task/multi-thread-cancel-task","title":"多线程取消TaskPool任务场景","description":"由于任务池TaskPool的任务对象Task不支持跨线程传递，无法在子线程中直接取消任务。从 API version 18 开始，Task新增了任务ID属性，支持通过任务ID在子线程中取消任务。开发者可将已创建任务的任务ID存储在Sendable对象中，需要取消任务时，通过Sendable对象在子线程中取消任务。详情可参考以下示例。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/multi-thread-cancel-task/multi-thread-cancel-task.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/multi-thread-cancel-task","slug":"/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/multi-thread-cancel-task/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/multi-thread-cancel-task/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"多线程取消TaskPool任务场景","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-thread-cancel-task","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取最近访问列表场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/sendablelrucache-recent-list/"},"next":{"title":"自定义Native Transferable对象的多线程操作场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/napi-coerce-to-native-binding-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/multi-thread-cancel-task/multi-thread-cancel-task.md


const frontMatter = {
	title: '多线程取消TaskPool任务场景',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-thread-cancel-task',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '多线程取消TaskPool任务场景';

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
        id: "多线程取消taskpool任务场景",
        children: "多线程取消TaskPool任务场景"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于任务池", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool",
        children: "TaskPool"
      }), "的任务对象", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#task",
        children: "Task"
      }), "不支持跨线程传递，无法在子线程中直接取消任务。从 API version 18 开始，Task新增了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#%E5%B1%9E%E6%80%A7",
        children: "任务ID"
      }), "属性，支持通过任务ID在子线程中取消任务。开发者可将已创建任务的任务ID存储在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
        children: "Sendable对象"
      }), "中，需要取消任务时，通过Sendable对象在子线程中取消任务。详情可参考以下示例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义一个Sendable类，在类属性中存储任务ID。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// sendable.ets\n@Sendable\nexport class SendableTest {\n  // 存储任务ID\n  private taskId: number = 0;\n\n  constructor(id: number) {\n    this.taskId = id;\n  }\n\n  public getTaskId(): number {\n    return this.taskId;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在UI主线程向TaskPool提交一个延时任务，并在子线程取消该任务。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// TaskpoolCancel.ets\nimport { taskpool } from '@kit.ArkTS';\nimport { SendableTest } from '../utils/Sendable';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { PromptAction } from '@kit.ArkUI';\n\n@Concurrent\nfunction cancel(send: SendableTest) {\n  // 在多线程中通过任务ID取消任务\n  taskpool.cancel(send.getTaskId());\n  console.info('cancel task finished');\n}\n\n@Concurrent\nfunction delayed() {\n  console.info('delayed task finished');\n}\n\n@Entry\n@Component\nstruct TaskpoolCancel {\n  @State message: string = 'CancelTaskpool';\n  @State returnMessage: string = 'return...';\n  @State promptAction: PromptAction = this.getUIContext().getPromptAction();\n\n  build() {\n    Row() {\n      Column() {\n        Button(this.message)\n          .fontSize(25)\n          .fontWeight(FontWeight.Bold)\n          .onClick(async () => {\n            let task = new taskpool.Task(delayed);\n            taskpool.executeDelayed(2000, task).catch((e: BusinessError) => {\n              console.error(`taskpool execute error, message is: ${e.message}`);\n              // taskpool execute error, message is: taskpool:: task has been canceled.\n            });\n            let send = new SendableTest(task.taskId);\n            taskpool.execute(cancel, send);\n            this.returnMessage = 'Taskpool canceled!';\n            this.promptAction.showToast({ message: this.returnMessage });\n          })\n        // ...\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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