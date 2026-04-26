"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["128157"], {
275373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_faq_scan_faq_3_scan_faq_3_md_b95_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-faq-scan-faq-3-scan-faq-3-md-b95.json
var site_docs_scan_kit_guide_scan_faq_scan_faq_3_scan_faq_3_md_b95_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-faq/scan-faq-3/scan-faq-3","title":"Scan Kit无法识别多个码图","description":"*问题现象*","source":"@site/docs/scan-kit-guide/scan-faq/scan-faq-3/scan-faq-3.md","sourceDirName":"scan-kit-guide/scan-faq/scan-faq-3","slug":"/scan-kit-guide/scan-faq/scan-faq-3/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-3/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Scan Kit无法识别多个码图","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-3","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"扫码直达跳转失败","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-2/"},"next":{"title":"上传软件包时提示“上传的软件包与声明支持设备不一致”","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-4/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-faq/scan-faq-3/scan-faq-3.md


const frontMatter = {
	title: 'Scan Kit无法识别多个码图',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-3',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'Scan Kit无法识别多个码图';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "scan-kit无法识别多个码图",
        children: "Scan Kit无法识别多个码图"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实时扫描多个码图时，只返回一个码图结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#scanoptions",
          children: "ScanOptions"
        }), "的enableMultiMode参数是否设置为true，开启多码扫描。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查ScanOptions的scanTypes参数是否已设置相应的码类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查码图类型是否在Scan Kit所定义支持的码图类型内。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目前实时扫描多个码图时，最多仅支持返回4个码图。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如还未解决，请通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
          children: "在线提单"
        }), "提交问题，华为支持人员会及时处理。"]
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