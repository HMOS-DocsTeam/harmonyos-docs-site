"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["450653"], {
107714(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_faq_account_faq_20_account_faq_20_md_272_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-faq-account-faq-20-account-faq-20-md-272.json
var site_docs_account_kit_guide_account_faq_account_faq_20_account_faq_20_md_272_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-faq/account-faq-20/account-faq-20","title":"401 参数检查失败的可能原因和解决办法","description":"*问题现象*","source":"@site/docs/account-kit-guide/account-faq/account-faq-20/account-faq-20.md","sourceDirName":"account-kit-guide/account-faq/account-faq-20","slug":"/account-kit-guide/account-faq/account-faq-20/","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-20/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"401 参数检查失败的可能原因和解决办法","sidebar_position":17,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-20","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"不同开发者的应用之间如何实现用户数据互通","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-19/"},"next":{"title":"60180007 服务端通过Authorization Code无法获取到华为账号一键登录手机号如何解决","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-21/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-faq/account-faq-20/account-faq-20.md


const frontMatter = {
	title: '401 参数检查失败的可能原因和解决办法',
	sidebar_position: 17,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-20',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '401 参数检查失败的可能原因和解决办法';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "401-参数检查失败的可能原因和解决办法",
        children: "401 参数检查失败的可能原因和解决办法"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用接口报错401 参数检查失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "必选参数没有传入。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数类型错误 (Type Error)。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数数量错误 (Argument Count Error)。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "空参数错误 (Null Argument Error)。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数格式错误 (Format Error)。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数值范围错误 (Value Range Error)。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "client_id配置错误。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未使用手动签名。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请检查必选参数是否传入，传入的参数类型是否错误，以及传入的参数是否符合规格约束。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查module type为entry的模块下module.json5中的client_id配置的值是否正确，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-preparations/account-client-id",
          children: "配置Client ID"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请使用手动签名方式配置签名，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-preparations/account-sign-fingerprints",
          children: "配置签名和指纹"
        }), "。"]
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