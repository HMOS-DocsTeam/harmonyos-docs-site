"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["762540"], {
26337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_app_test_ide_app_analyzer_appendix_ide_app_analyzer_rules_ide_peak_foreground_memory_usage_0418_ide_peak_foreground_memory_usage_0418_md_647_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-app-test-ide-app-analyzer-appendix-ide-app-analyzer-rules-ide-peak-foreground-memory-usage-0418-ide-peak-foreground-memory-usage-0418-md-647.json
var site_docs_ide_app_test_ide_app_analyzer_appendix_ide_app_analyzer_rules_ide_peak_foreground_memory_usage_0418_ide_peak_foreground_memory_usage_0418_md_647_namespaceObject = JSON.parse('{"id":"ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-foreground-memory-usage-0418/ide-peak-foreground-memory-usage-0418","title":"前台场景内存峰值占用","description":"规则详情","source":"@site/docs/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-foreground-memory-usage-0418/ide-peak-foreground-memory-usage-0418.md","sourceDirName":"ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-foreground-memory-usage-0418","slug":"/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-foreground-memory-usage-0418/","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-foreground-memory-usage-0418/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"前台场景内存峰值占用","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-peak-foreground-memory-usage-0418","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"动态内存峰值占用","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-dynamic-memory-usage-0417/"},"next":{"title":"后台CPU占用峰值","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-background-cpu-usage-0420/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-foreground-memory-usage-0418/ide-peak-foreground-memory-usage-0418.md


const frontMatter = {
	title: '前台场景内存峰值占用',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-peak-foreground-memory-usage-0418',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '前台场景内存峰值占用';

const assets = {

};



const toc = [{
  "value": "规则详情",
  "id": "规则详情",
  "level": 2
}, {
  "value": "检测逻辑",
  "id": "检测逻辑",
  "level": 2
}, {
  "value": "计算逻辑",
  "id": "计算逻辑",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
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
        id: "前台场景内存峰值占用",
        children: "前台场景内存峰值占用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则详情",
      children: "规则详情"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用/元服务前台场景峰值内存占用：应用在前台且亮屏使用规程的内存占用应≤ 1500MB。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "检测逻辑",
      children: "检测逻辑"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行hdc shell。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行hidumper --mem <进程pid>命令，获取如图Pss字段。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(833895)/* ["default"] */.A) + "",
        width: "1768",
        height: "632"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "计算逻辑",
      children: "计算逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行多轮测试，取最大Pss值为占用峰值，内存占用小于1500M。"
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
833895(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832611-1ea80fbf2a1f2505381b028ee507db80.png");

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