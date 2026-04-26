"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["89344"], {
87506(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_l_10_n_testing_linguistic_testing_linguistic_testing_md_808_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-l-10-n-testing-linguistic-testing-linguistic-testing-md-808.json
var site_docs_localization_kit_l_10_n_testing_linguistic_testing_linguistic_testing_md_808_namespaceObject = JSON.parse('{"id":"localization-kit/l10n-testing/linguistic-testing/linguistic-testing","title":"语言测试","description":"语言测试是指应用国际化和本地化完成后，在正式发布和上市前，需要本地用户专家进行巡检，查看界面显示等是否符合当地应用习惯。","source":"@site/docs/localization-kit/l10n-testing/linguistic-testing/linguistic-testing.md","sourceDirName":"localization-kit/l10n-testing/linguistic-testing","slug":"/localization-kit/l10n-testing/linguistic-testing/","permalink":"/harmonyos-docs-site/localization-kit/l10n-testing/linguistic-testing/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"语言测试","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/linguistic-testing","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"界面镜像伪本地化测试","permalink":"/harmonyos-docs-site/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-mirror/"},"next":{"title":"UI Design Kit简介","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/l10n-testing/linguistic-testing/linguistic-testing.md


const frontMatter = {
	title: '语言测试',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/linguistic-testing',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '语言测试';

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
        id: "语言测试",
        children: "语言测试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "语言测试是指应用国际化和本地化完成后，在正式发布和上市前，需要本地用户专家进行巡检，查看界面显示等是否符合当地应用习惯。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在多语言环境下，应用本地化的质量对产品的接受度至关重要。界面内容的专业度、译文的一致性、用词风格和界面显示都会影响使用体验，任何细微的错误都可能造成用户流失的风险。因此，在APP应用全球化发布前，通过语言测试识别并修复潜在问题，能够有效提升全球终端用户的使用体验。同时，需要关注敏感禁忌，任何地缘政治相关的敏感词、禁用词和慎用词都有可能给企业带来重大业务影响。拥有一套完善的敏感词解决方案，可以确保产品出海安全。"
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