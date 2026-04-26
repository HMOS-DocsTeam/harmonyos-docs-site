"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["454860"], {
221359(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_makeobserved_sendable_makeobserved_sendable_md_cdf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-multithread-develop-case-makeobserved-sendable-makeobserved-sendable-md-cdf.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_makeobserved_sendable_makeobserved_sendable_md_cdf_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/makeobserved-sendable/makeobserved-sendable","title":"ArkUI数据更新场景","description":"当需要网络下载或者本地生成的数据需要发送到UI线程进行展示时，由于ArkUI的标注和@Sendable装饰器不能同时修饰变量和对象，因此需要使用makeObserved在ArkUI中导入可观测的Sendable共享数据。","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/makeobserved-sendable/makeobserved-sendable.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/makeobserved-sendable","slug":"/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/makeobserved-sendable/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/makeobserved-sendable/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"ArkUI数据更新场景","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/makeobserved-sendable","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"全局配置项功能场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/global-configuration-guide/"},"next":{"title":"C++线程间数据共享场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/native-interthread-shared/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/makeobserved-sendable/makeobserved-sendable.md


const frontMatter = {
	title: 'ArkUI数据更新场景',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/makeobserved-sendable',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkUI数据更新场景';

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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkui数据更新场景",
        children: "ArkUI数据更新场景"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当需要网络下载或者本地生成的数据需要发送到UI线程进行展示时，由于ArkUI的标注和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable%E8%A3%85%E9%A5%B0%E5%99%A8",
        children: "@Sendable装饰器"
      }), "不能同时修饰变量和对象，因此需要使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
        children: "makeObserved"
      }), "在ArkUI中导入可观测的Sendable共享数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例说明以下场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "makeObserved在传入@Sendable类型的数据后有观测能力，且其变化可以触发UI更新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从子线程获取数据，整体替换UI线程的可观测数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从子线程获取的数据重新执行makeObserved，变为可观测数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将数据从UI主线程传递回子线程时，只传递不可观测的数据。makeObserved的返回值不能直接传给子线程。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nexport class SendableData {\n  public name: string = 'Tom';\n  public age: number = 20;\n  public gender: number = 1;\n  public likes: number = 1;\n  public follow: boolean = false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { taskpool } from '@kit.ArkTS';\nimport { SendableData } from './SendableData';\nimport { UIUtils } from '@kit.ArkUI';\n\n@Concurrent\nfunction threadGetData(param: string): SendableData {\n  // 在子线程处理数据\n  let ret = new SendableData();\n  console.info(`Concurrent threadGetData, param ${param}`);\n  ret.name = param + '-o';\n  ret.age = Math.floor(Math.random() * 40);\n  ret.likes = Math.floor(Math.random() * 100);\n  return ret;\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  // 通过makeObserved给普通对象或是Sendable对象添加可观测能力\n  @Local send: SendableData = UIUtils.makeObserved(new SendableData());\n\n  build() {\n    Column() {\n      Text(this.send.name)\n      Button('change name').onClick(() => {\n        // 可以观察到属性的改变\n        this.send.name += '0';\n      })\n        .id('change name')\n      Button('task').onClick(() => {\n        // 将待执行的函数放入taskpool内部任务队列等待，等待分发到工作线程执行。\n        // 因为数据的构建和处理可以在子线程中完成，但有观测能力的数据不能传给子线程，只有在UI主线程里才可以操作可观测的数据。\n        // 所以这里只是将`this.send`的属性`name`传给子线程操作。\n        taskpool.execute(threadGetData, this.send.name).then(val => {\n          // 和@Local一起使用，可以观察this.send的变化\n          this.send = UIUtils.makeObserved(val as SendableData);\n        })\n      })\n        .id('task')\n    }\n  }\n}\n"
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