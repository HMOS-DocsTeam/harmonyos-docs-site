"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["762663"], {
767972(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_sendable_object_arkts_condition_variable_introduction_arkts_condition_variable_introduction_md_44f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-object-sendable-object-arkts-condition-variable-introduction-arkts-condition-variable-introduction-md-44f.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_sendable_object_arkts_condition_variable_introduction_arkts_condition_variable_introduction_md_44f_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-condition-variable-introduction/arkts-condition-variable-introduction","title":"异步等待","description":"ArkTS引入了异步任务的等待和唤醒能力，以解决多线程任务时序控制问题。异步任务通过ConditionVariable对象实现等待和唤醒机制，该对象支持跨线程引用传递。","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-condition-variable-introduction/arkts-condition-variable-introduction.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-condition-variable-introduction","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-condition-variable-introduction/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-condition-variable-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"异步等待","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-condition-variable-introduction","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"异步锁","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-async-lock-introduction/"},"next":{"title":"ASON解析与生成","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/ason-parsing-generation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-condition-variable-introduction/arkts-condition-variable-introduction.md


const frontMatter = {
	title: '异步等待',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-condition-variable-introduction',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '异步等待';

const assets = {

};



const toc = [{
  "value": "使用示例",
  "id": "使用示例",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "异步等待",
        children: "异步等待"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS引入了异步任务的等待和唤醒能力，以解决多线程任务时序控制问题。异步任务通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils-locks/arkts-apis-arkts-utils-locks#conditionvariable18",
        children: "ConditionVariable"
      }), "对象实现等待和唤醒机制，该对象支持跨线程引用传递。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS语言支持异步操作，现已增加异步任务的等待和唤醒功能。当异步任务收到唤醒通知或等待超时后，将继续执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(381885)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用异步方法需标记为async，调用时需用await修饰，确保时序正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
        children: "Sendable"
      }), "共享对象在不同线程控制异步任务等待和唤醒的示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ArkTSUtils, taskpool } from '@kit.ArkTS';\n\n@Concurrent\nfunction notifyAll(conditionVariable: ArkTSUtils.locks.ConditionVariable) {\n  console.info(`TaskPool Thread notifyAll`);\n  conditionVariable.notifyAll();\n}\n\n@Concurrent\nfunction notifyOne(conditionVariable: ArkTSUtils.locks.ConditionVariable) {\n  console.info(`TaskPool Thread notifyOne`);\n  conditionVariable.notifyOne();\n}\n\n@Concurrent\nasync function wait(conditionVariable: ArkTSUtils.locks.ConditionVariable) {\n  await conditionVariable.wait();\n  console.info(`TaskPool Thread Wait: success`);\n}\n\n@Concurrent\nasync function waitFor(conditionVariable: ArkTSUtils.locks.ConditionVariable) {\n  await conditionVariable.waitFor(3000);\n  console.info(`TaskPool Thread WaitFor: success`);\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string | ResourceStr = $r('app.string.AsyncButton');\n\n  build() {\n    Row() {\n      Column() {\n        Button(this.message)\n          .fontSize(25)\n          .fontWeight(FontWeight.Bold)\n          .onClick(async () => {\n            // 创建conditionVariable对象。\n            const conditionVariable: ArkTSUtils.locks.ConditionVariable = new ArkTSUtils.locks.ConditionVariable();\n            // 将实例conditionVariable传递给wait线程。\n            await taskpool.execute(wait, conditionVariable);\n            // 将实例conditionVariable传递给notifyAll线程，唤醒wait线程，日志输出\"TaskPool Thread Wait: success\"。\n            await taskpool.execute(notifyAll, conditionVariable);\n            // 将实例conditionVariable传递给waitFor线程。\n            await taskpool.execute(waitFor, conditionVariable);\n            // 将实例conditionVariable传递给notifyOne线程，唤醒waitFor线程，日志输出\"TaskPool Thread WaitFor: success\"。\n            await taskpool.execute(notifyOne, conditionVariable);\n\n            // 创建有name的conditionVariable对象。\n            const conditionVariableRequest: ArkTSUtils.locks.ConditionVariable =\n              ArkTSUtils.locks.ConditionVariable.request('Request1');\n            // 将实例conditionVariableRequest传递给wait线程。\n            await taskpool.execute(wait, conditionVariableRequest);\n            // 将实例conditionVariableRequest传递给notifyAll线程，唤醒wait线程，日志输出\"TaskPool Thread Wait: success\"。\n            await taskpool.execute(notifyAll, conditionVariableRequest);\n            // 将实例conditionVariableRequest传递给waitFor线程。\n            await taskpool.execute(waitFor, conditionVariableRequest);\n            // 将实例conditionVariableRequest传递给notifyOne线程，唤醒waitFor线程，日志输出\"TaskPool Thread WaitFor: success\"。\n            await taskpool.execute(notifyOne, conditionVariableRequest);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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
381885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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