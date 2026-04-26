"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["848319"], {
790785(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_knock_share_knock_share_pc_phones_knock_share_pc_phones_mutually_knock_share_pc_phones_mutually_md_523_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-knock-share-knock-share-pc-phones-knock-share-pc-phones-mutually-knock-share-pc-phones-mutually-md-523.json
var site_docs_share_kit_guide_knock_share_knock_share_pc_phones_knock_share_pc_phones_mutually_knock_share_pc_phones_mutually_md_523_namespaceObject = JSON.parse('{"id":"share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-mutually/knock-share-pc-phones-mutually","title":"手机与PC/2in1间相互分享","description":"Phone与PC/2in1设置间相互分享，可参考：手机间内容分享。","source":"@site/docs/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-mutually/knock-share-pc-phones-mutually.md","sourceDirName":"share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-mutually","slug":"/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-mutually/","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-mutually/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"手机与PC/2in1间相互分享","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/knock-share-pc-phones-mutually","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"分享内容直达应用界面","permalink":"/harmonyos-docs-site/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-sandbox/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/share-kit-guide/gestures-share/gestures-share-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/knock-share/knock-share-pc-phones/knock-share-pc-phones-mutually/knock-share-pc-phones-mutually.md


const frontMatter = {
	title: '手机与PC/2in1间相互分享',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/knock-share-pc-phones-mutually',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '手机与PC/2in1间相互分享';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "手机与pc2in1间相互分享",
        children: "手机与PC/2in1间相互分享"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Phone与PC/2in1设置间相互分享，可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-content",
        children: "手机间内容分享"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从6.1.0(23)版本开始，Phone与Tablet设备间相互分享，可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/share-kit-guide/knock-share/knock-share-between-phones/knock-share-between-phones-content",
        children: "手机间内容分享"
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