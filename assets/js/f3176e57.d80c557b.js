"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["116290"], {
989303(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_project_ide_module_management_agc_harmonyos_clouddevguide_agc_harmonyos_clouddev_release_agc_harmonyos_clouddev_release_md_f31_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-project-ide-module-management-agc-harmonyos-clouddevguide-agc-harmonyos-clouddev-release-agc-harmonyos-clouddev-release-md-f31.json
var site_docs_ide_project_ide_module_management_agc_harmonyos_clouddevguide_agc_harmonyos_clouddev_release_agc_harmonyos_clouddev_release_md_f31_namespaceObject = JSON.parse('{"id":"ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-release/agc-harmonyos-clouddev-release","title":"发布上架","description":"调试完毕后，将工程打包成APP，提交至AGC申请上架。具体请参见HarmonyOS应用/服务发布。","source":"@site/docs/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-release/agc-harmonyos-clouddev-release.md","sourceDirName":"ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-release","slug":"/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-release/","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-release/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"发布上架","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-release","kit":"devtools/setup","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"打包测试","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-compile/"},"next":{"title":"FAQ","permalink":"/harmonyos-docs-site/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-release/agc-harmonyos-clouddev-release.md


const frontMatter = {
	title: '发布上架',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/agc-harmonyos-clouddev-release',
	kit: 'devtools/setup',
	last_updated: '2026-04-24'
};
const contentTitle = '发布上架';

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
        id: "发布上架",
        children: "发布上架"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调试完毕后，将工程打包成APP，提交至AGC申请上架。具体请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-publish-app",
        children: "HarmonyOS应用/服务发布"
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