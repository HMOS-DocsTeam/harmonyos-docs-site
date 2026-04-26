"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["883507"], {
935114(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_frequently_asked_questions_intents_frequently_asked_questions_one_intents_frequently_asked_questions_one_md_b06_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-frequently-asked-questions-intents-frequently-asked-questions-one-intents-frequently-asked-questions-one-md-b06.json
var site_docs_intents_kit_guide_intents_frequently_asked_questions_intents_frequently_asked_questions_one_intents_frequently_asked_questions_one_md_b06_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-one/intents-frequently-asked-questions-one","title":"intentName报错Intent \'xxxxxx\' is not included in domain \'xxxxxx\'. Select an intent from the list of suggestions.如何解决？","description":"低于DevEco Studio 6.0.0 Release版本存在以上报错，不影响编译和运行，可通过升级DevEco Studio 6.0.0 Release及以上版本解决。","source":"@site/docs/intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-one/intents-frequently-asked-questions-one.md","sourceDirName":"intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-one","slug":"/intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-one/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-one/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"intentName报错Intent \'xxxxxx\' is not included in domain \'xxxxxx\'. Select an intent from the list of suggestions.如何解决？","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-frequently-asked-questions-one","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"MCP协议上架指导","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-kit-listing-configuration/intents-kit-listing-mcp-protocol/"},"next":{"title":"inputParams报错Value should be one of: \\"intentName\\", \\"domain\\", \\"intentVersion\\", \\"srcEntry\\", \\"uiAbility\\", \\"serviceExtension\\", \\"uiExtension\\", \\"form\\"如何解决？","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-two/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-one/intents-frequently-asked-questions-one.md


const frontMatter = {
	title: 'intentName报错Intent \'xxxxxx\' is not included in domain \'xxxxxx\'. Select an intent from the list of suggestions.如何解决？',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-frequently-asked-questions-one',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'intentName报错Intent \'xxxxxx\' is not included in domain \'xxxxxx\'. Select an intent from the list of suggestions.如何解决？';

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
        id: "intentname报错intent-xxxxxx-is-not-included-in-domain-xxxxxx-select-an-intent-from-the-list-of-suggestions如何解决",
        children: "intentName报错Intent 'xxxxxx' is not included in domain 'xxxxxx'. Select an intent from the list of suggestions.如何解决？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "低于DevEco Studio 6.0.0 Release版本存在以上报错，不影响编译和运行，可通过升级DevEco Studio 6.0.0 Release及以上版本解决。"
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