"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["276772"], {
409792(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_online_authentication_kit_guide_onlineauthentication_website_disclaimer_onlineauthentication_website_disclaimer_md_d43_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-online-authentication-kit-guide-onlineauthentication-website-disclaimer-onlineauthentication-website-disclaimer-md-d43.json
var site_docs_system_security_online_authentication_kit_guide_onlineauthentication_website_disclaimer_onlineauthentication_website_disclaimer_md_d43_namespaceObject = JSON.parse('{"id":"system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer/onlineauthentication-website-disclaimer","title":"网站链接免责声明","description":"本网站可能含有其他独立第三方网站的链接，该类链接仅为方便本网站的访问者而提供。华为不对链接网站的内容、服务、信息等提供任何明示和暗示的保证，此类链接也不视为华为对链接网站的推荐或授权。您需自行独立判断您与链接网站的互动行为，华为对此不承担任何责任。","source":"@site/docs/system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer/onlineauthentication-website-disclaimer.md","sourceDirName":"system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer","slug":"/system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer/","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"网站链接免责声明","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-website-disclaimer","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通行密钥身份认证（C/C++）","permalink":"/harmonyos-docs-site/system-security/online-authentication-kit-guide/onlineauthentication-passkey/onlineauthentication-passkey-cpp/"},"next":{"title":"Universal Keystore Kit简介","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/online-authentication-kit-guide/onlineauthentication-website-disclaimer/onlineauthentication-website-disclaimer.md


const frontMatter = {
	title: '网站链接免责声明',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/onlineauthentication-website-disclaimer',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '网站链接免责声明';

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
        id: "网站链接免责声明",
        children: "网站链接免责声明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本网站可能含有其他独立第三方网站的链接，该类链接仅为方便本网站的访问者而提供。华为不对链接网站的内容、服务、信息等提供任何明示和暗示的保证，此类链接也不视为华为对链接网站的推荐或授权。您需自行独立判断您与链接网站的互动行为，华为对此不承担任何责任。"
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