"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["351766"], {
458126(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_sendable_object_arkts_async_lock_introduction_arkts_async_lock_introduction_md_2a0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-interthread-communication-interthread-communication-object-sendable-object-arkts-async-lock-introduction-arkts-async-lock-introduction-md-2a0.json
var site_docs_arkts_arkts_concurrency_interthread_communication_interthread_communication_object_sendable_object_arkts_async_lock_introduction_arkts_async_lock_introduction_md_2a0_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-async-lock-introduction/arkts-async-lock-introduction","title":"异步锁","description":"为了解决多线程并发实例间的数据竞争问题，ArkTS引入了异步锁能力。异步锁可能会被类对象持有，因此为了更方便地在并发实例间获取同一个异步锁对象，AsyncLock对象支持跨线程引用传递。","source":"@site/docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-async-lock-introduction/arkts-async-lock-introduction.md","sourceDirName":"arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-async-lock-introduction","slug":"/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-async-lock-introduction/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-async-lock-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"异步锁","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-async-lock-introduction","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Sendable使用规则与约束","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/sendable-constraints/"},"next":{"title":"异步等待","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-condition-variable-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-async-lock-introduction/arkts-async-lock-introduction.md


const frontMatter = {
	title: '异步锁',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-async-lock-introduction',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '异步锁';

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
        id: "异步锁",
        children: "异步锁"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了解决多线程并发实例间的数据竞争问题，ArkTS引入了异步锁能力。异步锁可能会被类对象持有，因此为了更方便地在并发实例间获取同一个异步锁对象，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils-locks/arkts-apis-arkts-utils-locks#asynclock",
        children: "AsyncLock对象"
      }), "支持跨线程引用传递。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于ArkTS语言支持异步操作，阻塞锁容易产生死锁问题，因此在ArkTS中仅支持异步锁（非阻塞式锁）。同时，异步锁还可以用于保证单线程内的异步任务时序一致性，防止因异步任务执行顺序不确定而导致的数据竞争问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多异步锁相关接口，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-utils/arkts-apis-arkts-utils-locks/arkts-apis-arkts-utils-locks",
        children: "异步锁ArkTSUtils.locks"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(802195)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用异步锁的方法需标记为async，调用时需用await修饰，以确保时序正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了防止", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
        children: "@Sendable共享对象"
      }), "在不同线程中修改共享变量导致的竞争问题，可以使用异步锁保护数据。示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ArkTSUtils, taskpool } from '@kit.ArkTS';\n\n@Sendable\nexport class A {\n  private count_: number = 0;\n  lock_: ArkTSUtils.locks.AsyncLock = new ArkTSUtils.locks.AsyncLock();\n\n  public getCount(): Promise<number> {\n    // 对需要保护的数据加异步锁\n    return this.lock_.lockAsync(() => {\n      return this.count_;\n    })\n  }\n\n  public async increaseCount() {\n    // 对需要保护的数据加异步锁\n    await this.lock_.lockAsync(() => {\n      this.count_++;\n    })\n  }\n}\n\n@Concurrent\nasync function printCount(a: A) {\n  a.increaseCount();\n  console.info(\"InputModule: count is:\" + await a.getCount());\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(async () => {\n          // 创建sendable对象a\n          let a: A = new A();\n          // 将实例a传递给子线程\n          await taskpool.execute(printCount, a);\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
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
802195(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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