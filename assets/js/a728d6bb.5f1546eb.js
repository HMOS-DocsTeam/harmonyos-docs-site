"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["999592"], {
570836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_detailedrules_account_detailedrules_md_a72_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-detailedrules-account-detailedrules-md-a72.json
var site_docs_account_kit_guide_account_detailedrules_account_detailedrules_md_a72_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-detailedrules/account-detailedrules","title":"开发者使用Account Kit的登录能力的管理细则","description":"为了保护用户隐私信息，确保用户获得良好的登录体验，根据《华为开发者服务协议》、《华为APIs使用协议》、《应用审核指南》、《元服务审核指南》等相关协议条款及现行法律法规，平台制定了华为账号登录管理细则，使用华为账号登录的应用请遵照执行，具体要求如下：","source":"@site/docs/account-kit-guide/account-detailedrules/account-detailedrules.md","sourceDirName":"account-kit-guide/account-detailedrules","slug":"/account-kit-guide/account-detailedrules/","permalink":"/harmonyos-docs-site/account-kit-guide/account-detailedrules/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发者使用Account Kit的登录能力的管理细则","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-detailedrules","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Account Kit简介","permalink":"/harmonyos-docs-site/account-kit-guide/account-introduction/"},"next":{"title":"申请账号权限","permalink":"/harmonyos-docs-site/account-kit-guide/account-preparations/account-config-permissions/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-detailedrules/account-detailedrules.md


const frontMatter = {
	title: '开发者使用Account Kit的登录能力的管理细则',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-detailedrules',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '开发者使用Account Kit的登录能力的管理细则';

const assets = {

};



const toc = [{
  "value": "上架审核要求",
  "id": "上架审核要求",
  "level": 2
}, {
  "value": "登录规范",
  "id": "登录规范",
  "level": 2
}, {
  "value": "附则",
  "id": "附则",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发者使用account-kit的登录能力的管理细则",
        children: "开发者使用Account Kit的登录能力的管理细则"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了保护用户隐私信息，确保用户获得良好的登录体验，根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/start/agreement-0000001052728169",
        children: "《华为开发者服务协议》"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/20209",
        children: "《华为APIs使用协议》"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/50104",
        children: "《应用审核指南》"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/50129",
        children: "《元服务审核指南》"
      }), "等相关协议条款及现行法律法规，平台制定了华为账号登录管理细则，使用华为账号登录的应用请遵照执行，具体要求如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "上架审核要求",
      children: "上架审核要求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了帮助用户省去多次输入不同应用账号登录的繁琐过程，我们为HarmonyOS应用和元服务开发者提供了使用华为账号快捷登录的能力。提交至华为应用市场的HarmonyOS应用和元服务，需要遵循如下规范："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）如果应用支持用户使用第三方账号登录，则该应用需提供华为账号登录选项。用户可通过华为账号快捷地登录您的应用，并获得华为账号的安全配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）如果元服务内需要构建账号体系时，必须使用华为账号登录能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "登录规范",
      children: "登录规范"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["华为账号提供登录设计规范，保障HarmonyOS应用拥有简单易用、高效一致、快速安全的登录体验。帮助用户使用已有的华为账号登录所有的应用。有关设计规范，请参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/id-0000001880001344",
        children: "华为账号开放登录"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "附则",
      children: "附则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本细则是一份动态更新的文档，我们会根据相关法律法规的变化以及行业发展，不定期对细则内容进行修改或更新，请您持续关注本细则，以便获得最新信息。"
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