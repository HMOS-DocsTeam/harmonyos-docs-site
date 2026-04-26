"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["488890"], {
196207(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_account_api_account_api_rest_account_api_obtain_token_account_api_obtain_token_overview_account_api_obtain_token_overview_md_538_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-account-api-account-api-rest-account-api-obtain-token-account-api-obtain-token-overview-account-api-obtain-token-overview-md-538.json
var site_docs_ref_account_api_account_api_rest_account_api_obtain_token_account_api_obtain_token_overview_account_api_obtain_token_overview_md_538_namespaceObject = JSON.parse('{"id":"account-api/account-api-rest/account-api-obtain-token/account-api-obtain-token-overview/account-api-obtain-token-overview","title":"概述","description":"在华为账号开放接口中，凭证是调用各类接口的核心鉴权凭据，贯穿身份认证、权限校验、数据安全等关键环节。","source":"@site/docs-ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-token-overview/account-api-obtain-token-overview.md","sourceDirName":"account-api/account-api-rest/account-api-obtain-token/account-api-obtain-token-overview","slug":"/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-token-overview/account-api-obtain-token-overview","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-token-overview/account-api-obtain-token-overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-obtain-token-overview","kit":"应用服务","last_updated":"2026-04-22","slug":"account-api-obtain-token-overview"},"sidebar":"ref","previous":{"title":"公共说明","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-common/account-api-common"},"next":{"title":"获取用户级凭证","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-user-token/account-api-obtain-user-token"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-token-overview/account-api-obtain-token-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-obtain-token-overview',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'account-api-obtain-token-overview'
};
const contentTitle = '概述';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在华为账号开放接口中，凭证是调用各类接口的核心鉴权凭据，贯穿身份认证、权限校验、数据安全等关键环节。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "获取用户级凭证"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用通过用户登录、授权获取的授权码（Authorization Code），获取用户级凭证Access Token，然后通过该凭证Access Token访问账号受权限管控的接口（如", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-get-nickname-and-avatar/account-api-get-user-info-get-nickname-and-avatar",
            children: "获取华为账号用户信息-获取头像昵称"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-get-user-info/account-api-getuserrisklevel/account-api-getuserrisklevel",
            children: "获取用户风险等级"
          }), "等）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "刷新用户级凭证"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提供用户级凭证Access Token主动刷新机制，应用可通过定期刷新凭证信息避免接口调用中断。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "解析凭证"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "提供对凭证的解析能力，应用可通过该场景获取凭证携带的关键信息（如应用Client ID、用户身份、有效期）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "取消用户级凭证授权"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当用户主动解除授权或应用需要终止服务时，可通过该场景立即废弃凭证。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "获取应用级凭证"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过应用的Client ID和Client Secret获取应用级凭证Access Token，用于调用应用级权限管控接口（如", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-extend-function/account-api-get-unionid/account-api-get-unionid",
            children: "通过OpenID获取UnionID"
          }), "）。"]
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