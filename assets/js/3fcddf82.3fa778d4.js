"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["61098"], {
425169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_frequently_asked_questions_intents_frequently_asked_questions_two_intents_frequently_asked_questions_two_md_3fc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-frequently-asked-questions-intents-frequently-asked-questions-two-intents-frequently-asked-questions-two-md-3fc.json
var site_docs_intents_kit_guide_intents_frequently_asked_questions_intents_frequently_asked_questions_two_intents_frequently_asked_questions_two_md_3fc_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-two/intents-frequently-asked-questions-two","title":"inputParams报错Value should be one of: \\"intentName\\", \\"domain\\", \\"intentVersion\\", \\"srcEntry\\", \\"uiAbility\\", \\"serviceExtension\\", \\"uiExtension\\", \\"form\\"如何解决？","description":"从5.1.0(18)开始支持功能一步达接入方案，可通过升级对应版本DevEco Studio解决。","source":"@site/docs/intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-two/intents-frequently-asked-questions-two.md","sourceDirName":"intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-two","slug":"/intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-two/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-two/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"inputParams报错Value should be one of: \\"intentName\\", \\"domain\\", \\"intentVersion\\", \\"srcEntry\\", \\"uiAbility\\", \\"serviceExtension\\", \\"uiExtension\\", \\"form\\"如何解决？","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-frequently-asked-questions-two","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"intentName报错Intent \'xxxxxx\' is not included in domain \'xxxxxx\'. Select an intent from the list of suggestions.如何解决？","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-one/"},"next":{"title":"使用意图框架调试助手Agent进行联调时，小艺拉起应用后，出现闪退情况，应该如何处理？","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-three/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-frequently-asked-questions/intents-frequently-asked-questions-two/intents-frequently-asked-questions-two.md


const frontMatter = {
	title: 'inputParams报错Value should be one of: "intentName", "domain", "intentVersion", "srcEntry", "uiAbility", "serviceExtension", "uiExtension", "form"如何解决？',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-frequently-asked-questions-two',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'inputParams报错Value should be one of: "intentName", "domain", "intentVersion", "srcEntry", "uiAbility", "serviceExtension", "uiExtension", "form"如何解决？';

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
        id: "inputparams报错value-should-be-one-of-intentname-domain-intentversion-srcentry-uiability-serviceextension-uiextension-form如何解决",
        children: "inputParams报错Value should be one of: \"intentName\", \"domain\", \"intentVersion\", \"srcEntry\", \"uiAbility\", \"serviceExtension\", \"uiExtension\", \"form\"如何解决？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.0(18)开始支持功能一步达接入方案，可通过升级对应版本DevEco Studio解决。"
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