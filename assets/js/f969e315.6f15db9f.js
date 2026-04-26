"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["792386"], {
535785(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_quick_login_account_login_state_account_login_state_md_f96_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-quick-login-account-login-state-account-login-state-md-f96.json
var site_docs_account_kit_guide_account_quick_login_account_login_state_account_login_state_md_f96_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-quick-login/account-login-state/account-login-state","title":"订阅华为账号的登录/登出事件","description":"场景介绍","source":"@site/docs/account-kit-guide/account-quick-login/account-login-state/account-login-state.md","sourceDirName":"account-kit-guide/account-quick-login/account-login-state","slug":"/account-kit-guide/account-quick-login/account-login-state/","permalink":"/harmonyos-docs-site/account-kit-guide/account-quick-login/account-login-state/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"订阅华为账号的登录/登出事件","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-login-state","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"静默登录","permalink":"/harmonyos-docs-site/account-kit-guide/account-quick-login/account-silent-login/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/account-kit-guide/account-get-user-info/account-get-user-info-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-quick-login/account-login-state/account-login-state.md


const frontMatter = {
	title: '订阅华为账号的登录/登出事件',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-login-state',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅华为账号的登录/登出事件';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "事件说明",
  "id": "事件说明",
  "level": 2
}, {
  "value": "开发前提",
  "id": "开发前提",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "订阅华为账号的登录登出事件",
        children: "订阅华为账号的登录/登出事件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用在前台时可以订阅Account Kit提供的华为账号登录/登出广播事件，来感知华为账号的登录状态，实现用户登录/登出应用的逻辑。应用也可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#gethuaweiidstate",
        children: "getHuaweiIDState"
      }), "实时查询华为账号登录状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件说明",
      children: "事件说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是华为账号登录/登出发送的广播事件。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "事件名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_distributed_account_login",
              children: "COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示分布式账号登录成功的动作。华为账号登录成功也会发这个广播事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/commoneventmanager-definitions/commoneventmanager-definitions#common_event_distributed_account_logout",
              children: "COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGOUT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示分布式账号登出成功的动作。华为账号登出成功也会发这个广播事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发前提",
      children: "开发前提"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行代码开发前，请确保已按照“开发准备”章节中的指导完成", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-preparations/account-sign-fingerprints",
        children: "配置签名和指纹"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-preparations/account-client-id",
        children: "配置Client ID"
      }), "。此场景无需申请账号权限。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/js-apis-commoneventmanager/js-apis-commoneventmanager",
            children: "commonEventManager"
          }), "模块及相关公共模块。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError, commonEventManager } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建订阅者，并处理订阅结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 订阅者信息\nconst subscribeInfo: commonEventManager.CommonEventSubscribeInfo = {\n  events: [commonEventManager.Support.COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGIN,\n    commonEventManager.Support.COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGOUT]\n};\nlet subscriber: commonEventManager.CommonEventSubscriber;\n\n// 创建订阅者\ncommonEventManager.createSubscriber(subscribeInfo)\n  .then((commonEventSubscriber: commonEventManager.CommonEventSubscriber) => {\n    subscriber = commonEventSubscriber;\n    // 订阅公共事件\n    commonEventManager.subscribe(subscriber,\n      (error: BusinessError, data: commonEventManager.CommonEventData) => {\n        if (error) {\n          hilog.error(0x0000, 'testTag',\n            `Failed to subscribe , code is ${error.code}, message is ${error.message}`);\n        } else {\n          if (data.event === commonEventManager.Support.COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGIN) {\n            // 订阅到华为账号登录事件\n          }\n          if (data.event === commonEventManager.Support.COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGOUT) {\n            // 订阅到华为账号登出事件\n          }\n        }\n      });\n  })\n  .catch((err: BusinessError) => {\n    hilog.error(0x0000, 'testTag', `Failed to createSubscriber. Code: ${err.code}, message: ${err.message}`);\n  });\n"
          })
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