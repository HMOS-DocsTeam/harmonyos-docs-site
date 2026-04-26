"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["348387"], {
376553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_learning_arkts_arkts_get_started_arkts_get_started_md_356_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-learning-arkts-arkts-get-started-arkts-get-started-md-356.json
var site_docs_learning_arkts_arkts_get_started_arkts_get_started_md_356_namespaceObject = JSON.parse('{"id":"learning-arkts/arkts-get-started/arkts-get-started","title":"初识ArkTS语言","description":"ArkTS是HarmonyOS应用的默认开发语言，在TypeScript（简称TS）生态基础上做了扩展，保持TS的基本风格。通过规范定义，从而强化了开发期的静态检查和分析，提升了程序执行的稳定性和性能。","source":"@site/docs/learning-arkts/arkts-get-started/arkts-get-started.md","sourceDirName":"learning-arkts/arkts-get-started","slug":"/learning-arkts/arkts-get-started/","permalink":"/harmonyos-docs-site/learning-arkts/arkts-get-started/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"初识ArkTS语言","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-get-started","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"资源分类与访问","permalink":"/harmonyos-docs-site/resource-categories-and-access/"},"next":{"title":"ArkTS语言介绍","permalink":"/harmonyos-docs-site/learning-arkts/introduction-to-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/learning-arkts/arkts-get-started/arkts-get-started.md


const frontMatter = {
	title: '初识ArkTS语言',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-get-started',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '初识ArkTS语言';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "初识arkts语言",
        children: "初识ArkTS语言"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS是HarmonyOS应用的默认开发语言，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.typescriptlang.org/",
        children: "TypeScript"
      }), "（简称TS）生态基础上做了扩展，保持TS的基本风格。通过规范定义，从而强化了开发期的静态检查和分析，提升了程序执行的稳定性和性能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(202660)/* ["default"] */.A) + "",
        width: "2560",
        height: "1236"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["深入学习请看", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/arkts/",
        children: "ArkTS学习路线"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101717496870909384?pathId=101667550095504391",
        children: "ArkTS视频课程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自API version 10起，ArkTS进一步通过规范强化静态检查和分析，其主要特性及标准TS的差异包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/learning-arkts/typescript-to-arkts-migration/typescript-to-arkts-migration-guide",
        children: "从TypeScript到ArkTS的适配规则"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "强制使用静态类型：静态类型是ArkTS最重要的特性之一。如果使用静态类型，那么程序中变量的类型就是确定的。同时，由于所有类型在程序实际运行前都是已知的，编译器可以验证代码的正确性，从而减少运行时的类型检查，有助于性能提升。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "禁止在运行时改变对象布局：为实现最优性能，ArkTS禁止在程序执行期间更改对象布局。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "限制运算符语义：为获得更好的性能并鼓励编写清晰的代码，ArkTS限制了部分运算符的语义。例如，一元加法运算符仅能作用于数字，不能用于其他类型变量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持Structural typing：对Structural typing的支持需要在语言、编译器和运行时进行大量的考虑和仔细的实现，当前ArkTS不支持该特性。根据实际场景的需求和反馈，后续会重新考虑是否支持Structural typing。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS兼容TS/JavaScript（简称JS）生态，开发者可以使用TS/JS进行开发或复用已有代码。HarmonyOS系统对TS/JS支持的详细情况见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/learning-arkts/typescript-to-arkts-migration/arkts-migration-background#%E6%96%B9%E8%88%9F%E8%BF%90%E8%A1%8C%E6%97%B6%E5%85%BC%E5%AE%B9tsjs",
        children: "兼容TS/JS的约束"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未来，ArkTS会结合应用开发/运行的需求持续演进，逐步增强并行和并发能力、扩展系统类型，以及引入分布式开发范式等更多特性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如需深入了解ArkTS语言，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-overview",
        children: "ArkTS具体指南"
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
202660(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437531-6f700af9b8e666ba0870f18ea511f477.png");

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