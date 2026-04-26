"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["510419"], {
133177(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_l_10_n_l_10_n_translation_l_10_n_singular_plural_l_10_n_singular_plural_md_bb7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-l-10-n-l-10-n-translation-l-10-n-singular-plural-l-10-n-singular-plural-md-bb7.json
var site_docs_localization_kit_l_10_n_l_10_n_translation_l_10_n_singular_plural_l_10_n_singular_plural_md_bb7_namespaceObject = JSON.parse('{"id":"localization-kit/l10n/l10n-translation/l10n-singular-plural/l10n-singular-plural","title":"支持单复数","description":"翻译过程中，不同语言对于名词或单位表达式的单复数格式要求各不相同。有些语言不区分单复数，有些语言有两种形式，还有一些语言有多种形式。例如，在英语中，名词支持两种单复数形式；对于中文，名词不分单复数，通过量词表达数量的不同。","source":"@site/docs/localization-kit/l10n/l10n-translation/l10n-singular-plural/l10n-singular-plural.md","sourceDirName":"localization-kit/l10n/l10n-translation/l10n-singular-plural","slug":"/localization-kit/l10n/l10n-translation/l10n-singular-plural/","permalink":"/harmonyos-docs-site/localization-kit/l10n/l10n-translation/l10n-singular-plural/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"支持单复数","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/l10n-singular-plural","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"提供翻译场景","permalink":"/harmonyos-docs-site/localization-kit/l10n/l10n-translation/l10n-translation-scene/"},"next":{"title":"伪本地化测试概述","permalink":"/harmonyos-docs-site/localization-kit/l10n-testing/pseudo-i18n-testing/pseudo-i18n-testing-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/l10n/l10n-translation/l10n-singular-plural/l10n-singular-plural.md


const frontMatter = {
	title: '支持单复数',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/l10n-singular-plural',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '支持单复数';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    del: "del",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "支持单复数",
        children: "支持单复数"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "翻译过程中，不同语言对于名词或单位表达式的单复数格式要求各不相同。有些语言不区分单复数，有些语言有两种形式，还有一些语言有多种形式。例如，在英语中，名词支持两种单复数形式；对于中文，名词不分单复数，通过量词表达数量的不同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "国际上常通过如下类别区分单复数："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zero：0或者0结尾"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "one：单数或者1结尾"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "two：2结尾"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "few：数值较小的数"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "many：数值较大的数"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "other：其他情况"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，在阿拉伯语中，单复规则如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zero：0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "one：1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "two：2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["few：3", (0,jsx_runtime.jsx)(_components.del, {
          children: "10、103"
        }), "110，1003..."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "many：11~26、111，1011..."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["other：100", (0,jsx_runtime.jsx)(_components.del, {
          children: "102、200"
        }), "202、1000、10000..."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口具体使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#getintpluralstringvaluesync18",
        children: "getIntPluralStringValueSync"
      }), "的API文档。"]
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