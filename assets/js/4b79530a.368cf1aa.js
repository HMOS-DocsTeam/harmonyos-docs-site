"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["363941"], {
671479(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_experience_suggestions_compatibility_compatibility_overview_compatibility_overview_md_4b7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-experience-suggestions-compatibility-compatibility-overview-compatibility-overview-md-4b7.json
var site_docs_experience_suggestions_compatibility_compatibility_overview_compatibility_overview_md_4b7_namespaceObject = JSON.parse('{"id":"experience-suggestions-compatibility/compatibility-overview/compatibility-overview","title":"概述","description":"背景及目的","source":"@site/docs/experience-suggestions-compatibility/compatibility-overview/compatibility-overview.md","sourceDirName":"experience-suggestions-compatibility/compatibility-overview","slug":"/experience-suggestions-compatibility/compatibility-overview/","permalink":"/harmonyos-docs-site/experience-suggestions-compatibility/compatibility-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/compatibility-overview","kit":"experience","last_updated":"2026-04-16"},"sidebar":"docs","previous":{"title":"体验建议概述","permalink":"/harmonyos-docs-site/experience-suggestions-overview/"},"next":{"title":"通用规格","permalink":"/harmonyos-docs-site/experience-suggestions-compatibility/system-features-functions/general-specifications/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/experience-suggestions-compatibility/compatibility-overview/compatibility-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/compatibility-overview',
	kit: 'experience',
	last_updated: '2026-04-16'
};
const contentTitle = '概述';

const assets = {

};



const toc = [{
  "value": "背景及目的",
  "id": "背景及目的",
  "level": 2
}, {
  "value": "适用范围",
  "id": "适用范围",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "背景及目的",
      children: "背景及目的"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用的基础功能和兼容性约束，一般是指某个软件能稳定地工作在若干个操作系统及操作系统版本之上，而不会出现意外退出等问题。对应用而言，是指其能够稳定工作在其安装的不同OS版本上、不同的设备形态上，且由于应用版本更新周期较为频繁，应用也需要保证在安装运行的OS版本不变的情况下，应用自身升级后可以稳定地工作。本章节声明了HarmonyOS NEXT应用、元服务和卡片的基础功能和兼容性约束，牵引应用的稳定性改进，构建稳定和体验良好的应用生态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用范围",
      children: "适用范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节适用于应用、元服务和卡片的基础功能和兼容性设计、开发及检测。"
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