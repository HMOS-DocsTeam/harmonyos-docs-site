"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["251209"], {
225204(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_serviceability_serviceability_overview_serviceability_overview_md_66d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-serviceability-serviceability-overview-serviceability-overview-md-66d.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_serviceability_serviceability_overview_serviceability_overview_md_66d_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-overview/serviceability-overview","title":"ServiceAbility组件概述","description":"ServiceAbility，即\\"基于Service模板的Ability\\"，主要用于后台运行任务（如执行音乐播放、文件下载等），不提供用户交互界面。ServiceAbility可由其他应用或PageAbility启动，即使用户切换到其他应用，ServiceAbility仍将在后台继续运行。","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-overview/serviceability-overview.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-overview","slug":"/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-overview/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ServiceAbility组件概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/serviceability-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"跳转规则","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/redirection-rules/"},"next":{"title":"ServiceAbility组件配置","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-configuration/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-overview/serviceability-overview.md


const frontMatter = {
	title: 'ServiceAbility组件概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/serviceability-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ServiceAbility组件概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "serviceability组件概述",
        children: "ServiceAbility组件概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ServiceAbility，即\"基于Service模板的Ability\"，主要用于后台运行任务（如执行音乐播放、文件下载等），不提供用户交互界面。ServiceAbility可由其他应用或PageAbility启动，即使用户切换到其他应用，ServiceAbility仍将在后台继续运行。"
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