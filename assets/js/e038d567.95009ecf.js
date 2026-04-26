"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["933470"], {
954939(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_wallet_api_wallet_rest_api_wallet_rest_api_error_code_wallet_rest_api_error_code_md_e03_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-wallet-api-wallet-rest-api-wallet-rest-api-error-code-wallet-rest-api-error-code-md-e03.json
var site_docs_ref_wallet_api_wallet_rest_api_wallet_rest_api_error_code_wallet_rest_api_error_code_md_e03_namespaceObject = JSON.parse('{"id":"wallet-api/wallet-rest-api/wallet-rest-api-error-code/wallet-rest-api-error-code","title":"REST API错误码","description":"| 错误码 | 描述 | 处理建议 |","source":"@site/docs-ref/wallet-api/wallet-rest-api/wallet-rest-api-error-code/wallet-rest-api-error-code.md","sourceDirName":"wallet-api/wallet-rest-api/wallet-rest-api-error-code","slug":"/wallet-api/wallet-rest-api/wallet-rest-api-error-code/wallet-rest-api-error-code","permalink":"/harmonyos-docs-site/ref/wallet-api/wallet-rest-api/wallet-rest-api-error-code/wallet-rest-api-error-code","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"REST API错误码","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-error-code","kit":"应用服务","last_updated":"2026-04-22","slug":"wallet-rest-api-error-code"},"sidebar":"ref","previous":{"title":"数字车钥匙接口","permalink":"/harmonyos-docs-site/ref/wallet-api/wallet-rest-api/wallet-rest-api-carkey/wallet-rest-api-carkey"},"next":{"title":"weatherService（天气数据服务）","permalink":"/harmonyos-docs-site/ref/weather-service-api/weather-service-arkts/weather-service-weatherservice/weather-service-weatherservice"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/wallet-api/wallet-rest-api/wallet-rest-api-error-code/wallet-rest-api-error-code.md


const frontMatter = {
	title: 'REST API错误码',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-error-code',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'wallet-rest-api-error-code'
};
const contentTitle = 'REST API错误码';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "rest-api错误码",
        children: "REST API错误码"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "处理建议"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数错误"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请参考返回信息，检查请求参数是否正确，并且需要确认商户服务器JDK版本高于1.8.211。如果检查正确，请通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "提交问题。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "鉴权失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请重新获取Authorization参数并填写在请求头中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "404"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请检查URL拼写是否正确。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "405"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限错误"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请检查是否在AGC网站上开启了钱包服务能力，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/wallet-kit-guide/wallet-preparations",
              children: "创建Wallet Kit服务"
            }), "。并检查申请的服务号（passTypeIdentifier）对应的卡券类型是否与调用的接口相对应。如果检查正确，请通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "提交问题。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "429"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务不可用"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求接口次数超过调用量限额，请通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "提交问题。"]
          })]
        })]
      })]
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