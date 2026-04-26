"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["916778"], {
826815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_faq_account_faq_8_account_faq_8_md_6b4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-faq-account-faq-8-account-faq-8-md-6b4.json
var site_docs_account_kit_guide_account_faq_account_faq_8_account_faq_8_md_6b4_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-faq/account-faq-8/account-faq-8","title":"无法获取到头像昵称如何解决","description":"1. 确认获取authorizationCode时，调用AuthorizationWithHuaweiIDRequest接口是否传入正确的scope：\'profile\'。","source":"@site/docs/account-kit-guide/account-faq/account-faq-8/account-faq-8.md","sourceDirName":"account-kit-guide/account-faq/account-faq-8","slug":"/account-kit-guide/account-faq/account-faq-8/","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-8/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"无法获取到头像昵称如何解决","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-8","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HarmonyOS APK应用和HarmonyOS应用在一键登录场景下的用户数据如何互通","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-7/"},"next":{"title":"OpenID和UnionID的格式说明","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-9/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-faq/account-faq-8/account-faq-8.md


const frontMatter = {
	title: '无法获取到头像昵称如何解决',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-8',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '无法获取到头像昵称如何解决';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "无法获取到头像昵称如何解决",
        children: "无法获取到头像昵称如何解决"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["确认获取authorizationCode时，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest",
            children: "AuthorizationWithHuaweiIDRequest"
          }), "接口是否传入正确的scope：'profile'。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { authentication } from '@kit.AccountKit';\n\n// 创建授权请求，并设置参数\nconst authRequest = new authentication.HuaweiIDProvider().createAuthorizationWithHuaweiIDRequest();\n// 获取头像昵称需要传如下scope\nauthRequest.scopes = ['profile'];\n// 若开发者需要进行服务端开发，则需传如下permission获取authorizationCode\nauthRequest.permissions = ['serviceauthcode'];\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["确保", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest",
            children: "AuthorizationWithHuaweiIDRequest"
          }), "接口传入正确scope后获取到的authorizationCode/IdToken是否在有效期内。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["确认调用的是华为账号服务器", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-get-nickname-and-avatar/account-api-get-user-info-get-nickname-and-avatar",
            children: "获取头像昵称"
          }), "接口。"]
        }), "\n"]
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