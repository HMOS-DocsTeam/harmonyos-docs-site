"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["98474"], {
321745(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_pageability_window_properties_window_properties_md_5d8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-pageability-window-properties-window-properties-md-5d8.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_pageability_window_properties_window_properties_md_5d8_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/pageability/window-properties/window-properties","title":"窗口属性","description":"具体获取窗口实例、设置窗口属性的接口描述及示例见接口文档。","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/pageability/window-properties/window-properties.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/pageability/window-properties","slug":"/ability-kit/fa-model-development/fa-model-application-components/pageability/window-properties/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/window-properties/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"窗口属性","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-properties","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"启动指定页面","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/start-page/"},"next":{"title":"申请授权","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/request-permissions/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/pageability/window-properties/window-properties.md


const frontMatter = {
	title: '窗口属性',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-properties',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '窗口属性';

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
        id: "窗口属性",
        children: "窗口属性"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体获取窗口实例、设置窗口属性的接口描述及示例见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/window-manager/application-window-fa",
        children: "接口文档"
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