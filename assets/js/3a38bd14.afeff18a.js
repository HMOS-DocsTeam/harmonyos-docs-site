"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["389144"], {
325467(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_faq_scan_faq_16_scan_faq_16_md_3a3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-faq-scan-faq-16-scan-faq-16-md-3a3.json
var site_docs_scan_kit_guide_scan_faq_scan_faq_16_scan_faq_16_md_3a3_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-faq/scan-faq-16/scan-faq-16","title":"默认界面扫码/自定义界面扫码体验设计","description":"*问题现象*","source":"@site/docs/scan-kit-guide/scan-faq/scan-faq-16/scan-faq-16.md","sourceDirName":"scan-kit-guide/scan-faq/scan-faq-16","slug":"/scan-kit-guide/scan-faq/scan-faq-16/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-16/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"默认界面扫码/自定义界面扫码体验设计","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-16","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义界面扫码如何实现扫码框","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-15/"},"next":{"title":"自定义界面扫码如何增加重试机制","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-17/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-faq/scan-faq-16/scan-faq-16.md


const frontMatter = {
	title: '默认界面扫码/自定义界面扫码体验设计',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-16',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '默认界面扫码/自定义界面扫码体验设计';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "默认界面扫码自定义界面扫码体验设计",
        children: "默认界面扫码/自定义界面扫码体验设计"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击按钮后，无法确认是否正在拉起扫码功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击按钮拉起默认界面扫码或自定义界面扫码后，将按钮置灰，说明正在拉起扫码功能，以“默认界面扫码”按钮为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(724347)/* ["default"] */.A) + "",
        width: "1400",
        height: "954"
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
724347(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438661-53c52d17dac4eb9a31558b348ab35046.png");

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