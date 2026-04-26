"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["860311"], {
305473(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_account_api_account_api_rest_account_api_get_user_info_account_api_get_user_info_overview_account_api_get_user_info_overview_md_74e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-account-api-account-api-rest-account-api-get-user-info-account-api-get-user-info-overview-account-api-get-user-info-overview-md-74e.json
var site_docs_ref_account_api_account_api_rest_account_api_get_user_info_account_api_get_user_info_overview_account_api_get_user_info_overview_md_74e_namespaceObject = JSON.parse('{"id":"account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-overview/account-api-get-user-info-overview","title":"概述","description":"华为账号为开发者提供了便捷的用户身份验证和用户信息获取能力，开发者可以通过Account Kit提供的相关能力，引导用户填写、管理相关信息完成授权，再获取凭证并调用华为账号服务器获取相关信息。","source":"@site/docs-ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-overview/account-api-get-user-info-overview.md","sourceDirName":"account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-overview","slug":"/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-overview/account-api-get-user-info-overview","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-overview/account-api-get-user-info-overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-user-info-overview","kit":"应用服务","last_updated":"2026-04-22","slug":"account-api-get-user-info-overview"},"sidebar":"ref","previous":{"title":"获取应用级凭证","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-app-token/account-api-obtain-app-token"},"next":{"title":"一键登录获取华为账号绑定号码和UnionID/OpenID","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-quicklogin-by-code/account-api-get-user-info-quicklogin-by-code"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-overview/account-api-get-user-info-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-user-info-overview',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'account-api-get-user-info-overview'
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
      children: "华为账号为开发者提供了便捷的用户身份验证和用户信息获取能力，开发者可以通过Account Kit提供的相关能力，引导用户填写、管理相关信息完成授权，再获取凭证并调用华为账号服务器获取相关信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "一键登录获取华为账号绑定号码和UnionID/OpenID"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过华为账号快速获取用户UnionID/OpenID和手机号；实现极简登录体验，", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "同时关联应用原有账号体系"
            })
          }), "，参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-quicklogin-by-code/account-api-get-user-info-quicklogin-by-code",
            children: "一键登录获取华为账号绑定号码和UnionID/OpenID"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "获取华为账号用户信息-获取头像昵称"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用户选择授权给应用特定的头像昵称后，应用服务器调用华为账号服务器快速完善个人信息，参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-get-nickname-and-avatar/account-api-get-user-info-get-nickname-and-avatar",
            children: "获取华为账号用户信息-获取头像昵称"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "获取华为账号用户信息-获取手机号"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["用户选择授权给应用特定的手机号码后，应用服务器调用华为账号服务器快速完善个人信息，参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-get-user-info/account-api-get-user-info-get-phone/account-api-get-user-info-get-phone",
            children: "获取华为账号用户信息-获取手机号"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "获取用户风险等级"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当应用登录后需要获取用户风险等级时，应用服务器调用华为账号服务器获取用户风险等级，参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/account-api/account-api-rest/account-api-get-user-info/account-api-getuserrisklevel/account-api-getuserrisklevel",
            children: "获取用户风险等级"
          }), "。"]
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