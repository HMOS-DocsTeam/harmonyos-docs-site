"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["187997"], {
945892(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_localization_kit_i_18_n_l_10_n_i_18_n_l_10_n_md_821_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-localization-kit-i-18-n-l-10-n-i-18-n-l-10-n-md-821.json
var site_docs_localization_kit_i_18_n_l_10_n_i_18_n_l_10_n_md_821_namespaceObject = JSON.parse('{"id":"localization-kit/i18n-l10n/i18n-l10n","title":"国际化和本地化概述","description":"功能介绍","source":"@site/docs/localization-kit/i18n-l10n/i18n-l10n.md","sourceDirName":"localization-kit/i18n-l10n","slug":"/localization-kit/i18n-l10n/","permalink":"/harmonyos-docs-site/localization-kit/i18n-l10n/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"国际化和本地化概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-l10n","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"远端状态订阅开发实例","permalink":"/harmonyos-docs-site/ipc-kit/subscribe-remote-state/"},"next":{"title":"国际化界面设计","permalink":"/harmonyos-docs-site/localization-kit/i18n/i18n-ui-design/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/localization-kit/i18n-l10n/i18n-l10n.md


const frontMatter = {
	title: '国际化和本地化概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-l10n',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '国际化和本地化概述';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "国际化和本地化概述",
        children: "国际化和本地化概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同地区用户的语言、文化背景各不相同，且某些用户可能使用多种语言。因此，应用发布面向不同地区版本时，需要充分识别语言、地区和文化的差异。通过国际化和本地化过程，可使应用界面显示符合当地用户的使用习惯，扩大应用潜在市场。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "国际化（Internationalization，I18n）是系统提供的一套能力集，支持设置区域特性、时区和夏令时等，满足应用多语言多文化的设计需求。其中，区域特性能力包括设置不同地区的时间日期、数字与度量衡、电话号码、日历和历法、语言等，时区和夏令时能力包括获取时区、夏令时跳变等。国际化通常在应用设计开发阶段，设计和开发过程中不设定用户使用的语言，采用通用设计。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为使应用在不同市场可以运行，国际化为应用开发提供了一些准则，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不可对用户的文化和习惯进行假设，例如不能假设所有地区均以逗号作为数字分组分隔符，然后在代码里面将数字分组分隔符硬编码为逗号等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UI元素（如图片、字符串）应作为应用资源从代码逻辑中分离出来。当需要提供其他地区用户版本时，仅需翻译对应资源，避免修改代码逻辑甚至重新设计开发应用，提高效率。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本地化（Localization，L10n）在应用定制阶段，是开发者为满足不同地区用户在语言和文化方面的需求，针对具体的目标语言对应用进行翻译和定制，过程包括配置多语言等资源翻译、敏感禁忌检查和语言测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为保证应用界面加载显示符合所在区域使用习惯的内容，需要配置不同语言或方言的资源。资源翻译是本地化过程的一个基本步骤，资源经翻译后才能形成多语言资源，主要是UI元素翻译。翻译时遵守UI元素与代码逻辑分离的原则，降低翻译难度。翻译后，UI元素按类型（如图片、音视频）加载至相应语言的应用资源文件中。界面加载资源时，根据系统当前语言或应用偏好语言加载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本地化过程还包括敏感禁忌检查和语言测试。敏感禁忌是开发者对用户界面显示的内容进行检查，界面中不允许显示可能导致舆情的内容，包括政治、宗教、文化等方面。语言测试是指开发者使用系统本地化测试能力检查应用是否存在未翻译字符串、翻译是否准确、应用界面排版、界面显示是否符合本地用户习惯等问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification",
        children: "模拟器与真机的差异"
      }), "”。"]
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