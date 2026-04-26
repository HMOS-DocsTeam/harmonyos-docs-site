"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["986351"], {
658329(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_l_10_n_testing_pseudo_i_18_n_testing_pseudo_i_18_n_testing_overview_pseudo_i_18_n_testing_overview_md_e2f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-l-10-n-testing-pseudo-i-18-n-testing-pseudo-i-18-n-testing-overview-pseudo-i-18-n-testing-overview-md-e2f.json
var site_docs_localization_kit_l_10_n_testing_pseudo_i_18_n_testing_pseudo_i_18_n_testing_overview_pseudo_i_18_n_testing_overview_md_e2f_namespaceObject = JSON.parse('{"id":"localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-overview/pseudo-i18n-testing-overview","title":"伪本地化测试概述","description":"伪本地化（pseudo-localization）又称伪翻译，是在正式的本地化之前，通过模拟本地化过程帮助发现潜在问题，避免功能缺陷。这是软件测试中用来测试软件是否符合本地化与国际化的方法之一。伪翻译不是将软件的文本翻译成外语，而是在源语言软件的基础上，按规则将需要本地化的文本使用本地化文字替换，模拟本地化过程。","source":"@site/docs/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-overview/pseudo-i18n-testing-overview.md","sourceDirName":"localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-overview","slug":"/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-overview/","permalink":"/harmonyos-docs-site/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"伪本地化测试概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pseudo-i18n-testing-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"支持单复数","permalink":"/harmonyos-docs-site/localization-kit/l10n/l10n-translation/l10n-singular-plural/"},"next":{"title":"翻译伪本地化测试","permalink":"/harmonyos-docs-site/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-translation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-overview/pseudo-i18n-testing-overview.md


const frontMatter = {
	title: '伪本地化测试概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pseudo-i18n-testing-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '伪本地化测试概述';

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
        id: "伪本地化测试概述",
        children: "伪本地化测试概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "伪本地化（pseudo-localization）又称伪翻译，是在正式的本地化之前，通过模拟本地化过程帮助发现潜在问题，避免功能缺陷。这是软件测试中用来测试软件是否符合本地化与国际化的方法之一。伪翻译不是将软件的文本翻译成外语，而是在源语言软件的基础上，按规则将需要本地化的文本使用本地化文字替换，模拟本地化过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于新开发的软件或界面变更较大的软件，若等待翻译完成后再进行界面测试，可能会延误整个交付周期。此外，软件开发初期，界面随时可能调整，通常会在产品成熟后再开始界面翻译和翻译测试，这可能会导致产品发布延误。采用伪本地化测试可以避免延误开发进程，确保产品正常发布。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["伪本地化测试包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-translation",
        children: "翻译伪本地化"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-mirror",
        children: "界面镜像伪本地化"
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