"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["218244"], {
701196(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_profiler_introduction_ide_profiler_process_ide_profiler_process_md_b3d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-profiler-introduction-ide-profiler-process-ide-profiler-process-md-b3d.json
var site_docs_ide_profiler_introduction_ide_profiler_process_ide_profiler_process_md_b3d_namespaceObject = JSON.parse('{"id":"ide-profiler-introduction/ide-profiler-process/ide-profiler-process","title":"性能优化过程简介","description":"在开发应用时，开发者会对应用的运行情况有一个预期的指标，当应用在某些方面不能满足预期的指标或者表现不佳时，意味着您的应用可能存在性能问题，需要对应用进行性能优化以达到您的预期。应用的性能优化是一个不断持续的周期性的过程，您需要在应用开发过程中观察应用的运行表现来识别性能瓶颈，通过运行时数据定位性能问题，定位根因后修复代码并验证优化措施的可行性，循环往复直到应用满足您的性能指标。","source":"@site/docs/ide-profiler-introduction/ide-profiler-process/ide-profiler-process.md","sourceDirName":"ide-profiler-introduction/ide-profiler-process","slug":"/ide-profiler-introduction/ide-profiler-process/","permalink":"/harmonyos-docs-site/ide-profiler-introduction/ide-profiler-process/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"性能优化过程简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-process","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"数据区","permalink":"/harmonyos-docs-site/ide-profiler/ide-profiler-data/"},"next":{"title":"性能问题定界：实时监控","permalink":"/harmonyos-docs-site/ide-profiler-introduction/realtime-monitor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-profiler-introduction/ide-profiler-process/ide-profiler-process.md


const frontMatter = {
	title: '性能优化过程简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-process',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = '性能优化过程简介';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "性能优化过程简介",
        children: "性能优化过程简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发应用时，开发者会对应用的运行情况有一个预期的指标，当应用在某些方面不能满足预期的指标或者表现不佳时，意味着您的应用可能存在性能问题，需要对应用进行性能优化以达到您的预期。应用的性能优化是一个不断持续的周期性的过程，您需要在应用开发过程中观察应用的运行表现来识别性能瓶颈，通过运行时数据定位性能问题，定位根因后修复代码并验证优化措施的可行性，循环往复直到应用满足您的性能指标。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Profiler也遵循以上流程，在使用DevEco Profiler进行性能优化时，您可以参考以下过程："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用“Realtime Monitor”监控设备的各项资源使用情况，识别并定界潜在的性能瓶颈及热点区域，例如CPU占用超过预期、内存异常增大等；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建深度分析任务，通过详细的应用运行时数据，例如函数调用、内存对象等信息，来分析并定位性能问题出现的根因；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据性能分析的结果优化代码；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "再次使用“Realtime Monitor”查看各项资源的使用情况是否符合预期，来验证代码修改的可行性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(125335)/* ["default"] */.A) + "",
        width: "1154",
        height: "269"
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
125335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753019-9d4d9f4913bb7e98497e928f012a9e1b.png");

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