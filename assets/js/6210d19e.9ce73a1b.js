"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["22860"], {
117385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_l_10_n_l_10_n_translation_l_10_n_translation_scene_l_10_n_translation_scene_md_621_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-l-10-n-l-10-n-translation-l-10-n-translation-scene-l-10-n-translation-scene-md-621.json
var site_docs_localization_kit_l_10_n_l_10_n_translation_l_10_n_translation_scene_l_10_n_translation_scene_md_621_namespaceObject = JSON.parse('{"id":"localization-kit/l10n/l10n-translation/l10n-translation-scene/l10n-translation-scene","title":"提供翻译场景","description":"同样的内容在不同场景和语境中，翻译结果可能存在差异。提供待翻译的界面字符串时，应提供给译员完整的场景和足够的场景信息，避免造成翻译偏差。翻译场景信息通常包括如下两种类型：","source":"@site/docs/localization-kit/l10n/l10n-translation/l10n-translation-scene/l10n-translation-scene.md","sourceDirName":"localization-kit/l10n/l10n-translation/l10n-translation-scene","slug":"/localization-kit/l10n/l10n-translation/l10n-translation-scene/","permalink":"/harmonyos-docs-site/localization-kit/l10n/l10n-translation/l10n-translation-scene/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"提供翻译场景","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/l10n-translation-scene","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"避免硬编码与拼接","permalink":"/harmonyos-docs-site/localization-kit/l10n/l10n-translation/l10n-hard-coding-concatenate/"},"next":{"title":"支持单复数","permalink":"/harmonyos-docs-site/localization-kit/l10n/l10n-translation/l10n-singular-plural/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/l10n/l10n-translation/l10n-translation-scene/l10n-translation-scene.md


const frontMatter = {
	title: '提供翻译场景',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/l10n-translation-scene',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '提供翻译场景';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "提供翻译场景",
        children: "提供翻译场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同样的内容在不同场景和语境中，翻译结果可能存在差异。提供待翻译的界面字符串时，应提供给译员完整的场景和足够的场景信息，避免造成翻译偏差。翻译场景信息通常包括如下两种类型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过字符串资源文件进行注释或标注，包括：上下文场景、词性、重点词含义、控件最大可容纳文本长度、变量含义及取值范围。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供界面截图，以展示实际界面布局和内容。"
      }), "\n"]
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