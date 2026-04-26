"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["878714"], {
569905(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_faq_account_faq_5_account_faq_5_md_9ea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-faq-account-faq-5-account-faq-5-md-9ea.json
var site_docs_account_kit_guide_account_faq_account_faq_5_account_faq_5_md_9ea_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-faq/account-faq-5/account-faq-5","title":"使用华为账号一键登录功能时，是以华为账号的UnionID/OpenID还是以手机号作为用户的主要标识","description":"推荐使用华为账号的UnionID/OpenID作为用户的主要标识，并将应用与华为账号绑定的手机号关联。华为账号的UnionID/OpenID不会发生变化，即使换绑手机号，仍然可以使用华为账号登录原来绑定的应用账号。该方式可以保障应用账号在多设备、多场景和多应用服务类型间（如应用、元服务等）的互联互通，保证应用的统一体验。若应用使用手机号作为用户的主要标识，如果华为账号换绑了手机号，再登录应用，就是新手机号对应的账号。华为账号一键登录详细流程请参考用户场景设计。","source":"@site/docs/account-kit-guide/account-faq/account-faq-5/account-faq-5.md","sourceDirName":"account-kit-guide/account-faq/account-faq-5","slug":"/account-kit-guide/account-faq/account-faq-5/","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-5/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用华为账号一键登录功能时，是以华为账号的UnionID/OpenID还是以手机号作为用户的主要标识","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-5","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"一键登录场景下，应用已展示一键登录页，此时用户退出、切换或注销华为账号应该如何处理","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-17/"},"next":{"title":"HarmonyOS APK应用和HarmonyOS应用在一键登录场景下的用户数据如何互通","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-7/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-faq/account-faq-5/account-faq-5.md


const frontMatter = {
	title: '使用华为账号一键登录功能时，是以华为账号的UnionID/OpenID还是以手机号作为用户的主要标识',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-5',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '使用华为账号一键登录功能时，是以华为账号的UnionID/OpenID还是以手机号作为用户的主要标识';

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
        id: "使用华为账号一键登录功能时是以华为账号的unionidopenid还是以手机号作为用户的主要标识",
        children: "使用华为账号一键登录功能时，是以华为账号的UnionID/OpenID还是以手机号作为用户的主要标识"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推荐使用华为账号的UnionID/OpenID作为用户的主要标识，并将应用与华为账号绑定的手机号关联。华为账号的UnionID/OpenID不会发生变化，即使换绑手机号，仍然可以使用华为账号登录原来绑定的应用账号。该方式可以保障应用账号在多设备、多场景和多应用服务类型间（如应用、元服务等）的互联互通，保证应用的统一体验。若应用使用手机号作为用户的主要标识，如果华为账号换绑了手机号，再登录应用，就是新手机号对应的账号。华为账号一键登录详细流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-quick-login/account-phone-unionid-login#%E7%94%A8%E6%88%B7%E5%9C%BA%E6%99%AF%E8%AE%BE%E8%AE%A1",
        children: "用户场景设计"
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