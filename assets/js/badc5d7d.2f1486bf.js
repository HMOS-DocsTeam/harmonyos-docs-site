"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["929050"], {
600762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_app_test_ide_app_analyzer_appendix_ide_app_analyzer_rules_ide_peak_background_cpu_usage_0420_ide_peak_background_cpu_usage_0420_md_bad_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-app-test-ide-app-analyzer-appendix-ide-app-analyzer-rules-ide-peak-background-cpu-usage-0420-ide-peak-background-cpu-usage-0420-md-bad.json
var site_docs_ide_app_test_ide_app_analyzer_appendix_ide_app_analyzer_rules_ide_peak_background_cpu_usage_0420_ide_peak_background_cpu_usage_0420_md_bad_namespaceObject = JSON.parse('{"id":"ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-background-cpu-usage-0420/ide-peak-background-cpu-usage-0420","title":"后台CPU占用峰值","description":"规则详情","source":"@site/docs/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-background-cpu-usage-0420/ide-peak-background-cpu-usage-0420.md","sourceDirName":"ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-background-cpu-usage-0420","slug":"/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-background-cpu-usage-0420/","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-background-cpu-usage-0420/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"后台CPU占用峰值","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-peak-background-cpu-usage-0420","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"前台场景内存峰值占用","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-foreground-memory-usage-0418/"},"next":{"title":"节点数超过500过多","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-render-node-limit-0430/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-background-cpu-usage-0420/ide-peak-background-cpu-usage-0420.md


const frontMatter = {
	title: '后台CPU占用峰值',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-peak-background-cpu-usage-0420',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '后台CPU占用峰值';

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
        id: "后台cpu占用峰值",
        children: "后台CPU占用峰值"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则详情",
      children: "规则详情"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用/元服务后台CPU占用峰值：应用/元服务切换到后台等待3min后，开始采集3min内CPU Load < 5%。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "检测逻辑",
      children: "检测逻辑"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行hdc shell。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行hidumper --cpuusage <进程pid>命令，获取总的cpu使用率。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(900956)/* ["default"] */.A) + "",
        width: "1323",
        height: "253"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "计算逻辑",
      children: "计算逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行多轮测试，取最大值为cpu占用峰值，cpu占用率须小于5%。"
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
900956(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753024-8af8f4f0b0bee974d3e733b122e324dd.png");

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