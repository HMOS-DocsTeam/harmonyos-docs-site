"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["77852"], {
181019(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_user_authentication_kit_user_authentication_dev_cancel_authentication_cancel_authentication_md_c91_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-user-authentication-kit-user-authentication-dev-cancel-authentication-cancel-authentication-md-c91.json
var site_docs_system_security_user_authentication_kit_user_authentication_dev_cancel_authentication_cancel_authentication_md_c91_namespaceObject = JSON.parse('{"id":"system-security/user-authentication-kit/user-authentication-dev/cancel-authentication/cancel-authentication","title":"认证过程中取消认证","description":"统一用户认证框架提供了cancel接口，当应用在认证过程中，需要取消认证时可调用该接口。","source":"@site/docs/system-security/user-authentication-kit/user-authentication-dev/cancel-authentication/cancel-authentication.md","sourceDirName":"system-security/user-authentication-kit/user-authentication-dev/cancel-authentication","slug":"/system-security/user-authentication-kit/user-authentication-dev/cancel-authentication/","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/cancel-authentication/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"认证过程中取消认证","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cancel-authentication","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"发起认证","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/start-authentication/"},"next":{"title":"感知和调整认证过程","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/perceive-adjust-authentication-process/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/user-authentication-kit/user-authentication-dev/cancel-authentication/cancel-authentication.md


const frontMatter = {
	title: '认证过程中取消认证',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cancel-authentication',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '认证过程中取消认证';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "认证过程中取消认证",
        children: "认证过程中取消认证"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "统一用户认证框架提供了cancel接口，当应用在认证过程中，需要取消认证时可调用该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体参数、返回值、错误码等描述，请参考对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#cancel10",
        children: "cancel"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此处仅展示了取消认证操作的接口，在取消认证前，需要先发起认证，发起认证的接口列表、详细说明可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/user-authentication-kit/user-authentication-dev/start-authentication",
        children: "发起认证"
      }), "章节和API文档。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cancel(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消本次认证操作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/user-authentication-kit/user-authentication-dev/prerequisites#%E7%94%B3%E8%AF%B7%E6%9D%83%E9%99%90",
          children: "申请权限"
        }), "：ohos.permission.ACCESS_BIOMETRIC。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["指定用户认证相关参数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#authparam10",
          children: "AuthParam"
        }), "（包括挑战值、认证类型", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthtype8",
          children: "UserAuthType"
        }), "列表和认证等级", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#authtrustlevel8",
          children: "AuthTrustLevel"
        }), "），获取认证对象", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthinstance10",
          children: "UserAuthInstance"
        }), "，并调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#start10",
          children: "UserAuthInstance.start"
        }), "发起认证。此步骤详细说明可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/user-authentication-kit/user-authentication-dev/start-authentication",
          children: "发起认证"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用已经成功发起认证的UserAuthInstance对象调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#cancel10",
          children: "UserAuthInstance.cancel"
        }), "接口取消本次认证。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码为发起认证可信等级≥ATL3的人脸+锁屏口令认证后，取消认证请求："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "handleAuthResultAndCanceling(userAuthInstance: userAuth.UserAuthInstance, exampleNumber: number) {\n  // ...\n    // 启动认证\n    userAuthInstance.start();\n    Logger.info('auth start successfully');\n    // ...\n      // 取消认证\n      userAuthInstance.cancel();\n      Logger.info('auth cancel successfully');\n      // ...\n}\n\n/*\n * cancel-authentication.md\n * 发起认证可信等级≥ATL3的人脸+锁屏密码认证后，取消认证请求\n * */\ncancelingUserAuthentication() {\n  try {\n    const randData = getRandData();\n    if (!randData) {\n      return;\n    }\n    // 设置认证参数\n    const authParam: userAuth.AuthParam = {\n      challenge: randData,\n      authType: [userAuth.UserAuthType.PIN, userAuth.UserAuthType.FACE, userAuth.UserAuthType.FINGERPRINT],\n      authTrustLevel: userAuth.AuthTrustLevel.ATL3,\n    };\n    // 配置认证界面\n    const widgetParam: userAuth.WidgetParam = {\n      title: resourceToString($r('app.string.title')),\n    };\n    // 获取认证对象\n    const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);\n    Logger.info('get userAuth instance successfully');\n    this.handleAuthResultAndCanceling(userAuthInstance, ResultIndex.CANCEL);\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    Logger.error(`auth failed, code is ${err?.code as number}, message is ${err?.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/UserAuthentication",
          children: "认证过程中取消认证"
        })
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