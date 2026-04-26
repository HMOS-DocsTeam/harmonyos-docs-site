"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["174266"], {
693925(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_application_components_want_ability_startup_with_explicit_want_ability_startup_with_explicit_want_md_ced_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-application-components-want-ability-startup-with-explicit-want-ability-startup-with-explicit-want-md-ced.json
var site_docs_ability_kit_stage_model_development_stage_model_application_components_want_ability_startup_with_explicit_want_ability_startup_with_explicit_want_md_ced_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-application-components/want/ability-startup-with-explicit-want/ability-startup-with-explicit-want","title":"使用显式Want启动应用组件","description":"在应用使用场景中，当用户在应用内点击某个按钮时，经常需要拉起指定UIAbility组件来完成某些特定任务。在启动UIAbility时，指定了abilityName和bundleName参数，可以使用显式Want方式启动UIAbility。","source":"@site/docs/ability-kit/stage-model-development/stage-model-application-components/want/ability-startup-with-explicit-want/ability-startup-with-explicit-want.md","sourceDirName":"ability-kit/stage-model-development/stage-model-application-components/want/ability-startup-with-explicit-want","slug":"/ability-kit/stage-model-development/stage-model-application-components/want/ability-startup-with-explicit-want/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/want/ability-startup-with-explicit-want/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用显式Want启动应用组件","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ability-startup-with-explicit-want","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"显式Want与隐式Want匹配规则","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/want/explicit-implicit-want-mappings/"},"next":{"title":"常见action与entities（不推荐使用）","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/want/actions-entities/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-application-components/want/ability-startup-with-explicit-want/ability-startup-with-explicit-want.md


const frontMatter = {
	title: '使用显式Want启动应用组件',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ability-startup-with-explicit-want',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用显式Want启动应用组件';

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
        id: "使用显式want启动应用组件",
        children: "使用显式Want启动应用组件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用使用场景中，当用户在应用内点击某个按钮时，经常需要拉起指定UIAbility组件来完成某些特定任务。在启动UIAbility时，指定了abilityName和bundleName参数，可以使用显式Want方式启动UIAbility。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对应用的特定任务，用户需要通过点击应用内的按钮来启动指定的UIAbility组件。在启动UIAbility时，需要提供abilityName和bundleName参数，并使用显式Want方式来启动。关于如何使用显式Want方式启动应用内的UIAbility，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction",
        children: "启动应用内的UIAbility"
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