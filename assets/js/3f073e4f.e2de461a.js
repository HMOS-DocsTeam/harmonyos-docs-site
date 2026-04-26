"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["907994"], {
766333(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_i_18_n_i_18_n_time_date_i_18_n_time_date_md_3f0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-i-18-n-i-18-n-time-date-i-18-n-time-date-md-3f0.json
var site_docs_localization_kit_i_18_n_i_18_n_time_date_i_18_n_time_date_md_3f0_namespaceObject = JSON.parse('{"id":"localization-kit/i18n/i18n-time-date/i18n-time-date","title":"时间日期国际化","description":"使用场景","source":"@site/docs/localization-kit/i18n/i18n-time-date/i18n-time-date.md","sourceDirName":"localization-kit/i18n/i18n-time-date","slug":"/localization-kit/i18n/i18n-time-date/","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-time-date/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"时间日期国际化","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-time-date","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"用户偏好","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-language-user-preferences/i18n-user-preferences/"},"next":{"title":"数字与度量衡国际化","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-numbers-weights-measures/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/i18n/i18n-time-date/i18n-time-date.md


const frontMatter = {
	title: '时间日期国际化',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-time-date',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '时间日期国际化';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "时间日期格式化",
  "id": "时间日期格式化",
  "level": 3
}, {
  "value": "相对时间格式化",
  "id": "相对时间格式化",
  "level": 3
}, {
  "value": "时间段格式化",
  "id": "时间段格式化",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "时间日期国际化",
        children: "时间日期国际化"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在不同国家和文化中，时间和日期的表示方法存在差异，主要体现在年月日的顺序以及时分秒的分隔符。若应用中需展示时间日期，要确保界面以合适的方式显示，以便用户能够理解。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "时间日期国际化包括时间日期格式化、相对时间格式化和时间段格式化。时间日期格式化是指将时间和日期转换为指定格式的字符串。相对时间格式化是指将一个时间点与另一个时间点之间的时间差转换为指定格式，例如“30秒前”、“1天后”。时间段格式化是指将一段时间转换为指定格式，例如“星期三”、“8:00 - 11:30”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "时间日期格式化",
      children: "时间日期格式化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["时间日期格式化请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat",
        children: "Intl.DateTimeFormat"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "相对时间格式化",
      children: "相对时间格式化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相对时间格式化请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format",
        children: "format"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "时间段格式化",
      children: "时间段格式化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["时间段格式化请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange",
        children: "formatRange"
      }), "接口。"]
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