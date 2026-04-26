"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["613909"], {
95975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_user_authentication_kit_user_authentication_dev_perceive_adjust_authentication_process_perceive_adjust_authentication_process_md_d60_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-user-authentication-kit-user-authentication-dev-perceive-adjust-authentication-process-perceive-adjust-authentication-process-md-d60.json
var site_docs_system_security_user_authentication_kit_user_authentication_dev_perceive_adjust_authentication_process_perceive_adjust_authentication_process_md_d60_namespaceObject = JSON.parse('{"id":"system-security/user-authentication-kit/user-authentication-dev/perceive-adjust-authentication-process/perceive-adjust-authentication-process","title":"感知和调整认证过程","description":"从API version 20开始，在应用发起身份认证时，可通过接口调整认证过程，以及感知认证过程。","source":"@site/docs/system-security/user-authentication-kit/user-authentication-dev/perceive-adjust-authentication-process/perceive-adjust-authentication-process.md","sourceDirName":"system-security/user-authentication-kit/user-authentication-dev/perceive-adjust-authentication-process","slug":"/system-security/user-authentication-kit/user-authentication-dev/perceive-adjust-authentication-process/","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/perceive-adjust-authentication-process/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"感知和调整认证过程","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/perceive-adjust-authentication-process","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"认证过程中取消认证","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/cancel-authentication/"},"next":{"title":"切换自定义认证","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/apply-custom-authentication/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/user-authentication-kit/user-authentication-dev/perceive-adjust-authentication-process/perceive-adjust-authentication-process.md


const frontMatter = {
	title: '感知和调整认证过程',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/perceive-adjust-authentication-process',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '感知和调整认证过程';

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
        id: "感知和调整认证过程",
        children: "感知和调整认证过程"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，在应用发起身份认证时，可通过接口调整认证过程，以及感知认证过程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调整认证过程：应用发起认证时通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#authparam10",
        children: "AuthParam"
      }), "参数的skipLockedBiometricAuth属性控制是否跳过已禁用的生物认证。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["感知认证过程：通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#onauthtip20",
        children: "on('authTip')"
      }), "接口注册回调来获取认证过程中控件的拉起和退出提示，以及认证过程中用户的每一次认证失败结果。正确的顺序为先通过on注册回调，再通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#start10",
        children: "start"
      }), "发起认证，start成功发起认证后on注册的回调才会收到信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体参数、返回值、错误码等描述，请参考对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth",
        children: "@ohos.userIAM.userAuth (用户认证)"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AuthParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户认证相关参数，包括挑战值、认证类型列表、认证等级等。  可通过skipLockedBiometricAuth参数控制是否跳过禁用的生物认证。  true表示生物认证冻结时自动跳过倒计时界面直接切换到其他方式的认证。  false表示不跳过；默认为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'authTip', callback: AuthTipCallback): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅身份认证过程中的提示信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'authTip', callback?: AuthTipCallback): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅认证过程中的提示信息。"
          })]
        })]
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
        }), "）、配置认证控件界面", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#widgetparam10",
          children: "WidgetParam"
        }), "，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthgetuserauthinstance10",
          children: "getUserAuthInstance"
        }), "获取认证对象。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#onauthtip20",
          children: "UserAuthInstance.on('authTip')"
        }), "接口订阅身份认证过程中的提示信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#start10",
          children: "UserAuthInstance.start"
        }), "接口发起认证，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#authtipcallback20",
          children: "AuthTipCallback"
        }), "回调返回认证中间状态", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#authtipinfo20",
          children: "AuthTipInfo"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["认证成功后，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#offauthtip20",
          children: "UserAuthInstance.off('authTip')"
        }), "接口取消订阅认证过程中的提示信息。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以跳过禁用的生物认证，订阅认证信息为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "perceiveAndAdjustAuthentication() {\n  try {\n    const randData = getRandData();\n    if (!randData) {\n      return;\n    }\n    // 设置认证参数\n    const authParam: userAuth.AuthParam = {\n      challenge: randData,\n      authType: [userAuth.UserAuthType.PIN, userAuth.UserAuthType.FACE, userAuth.UserAuthType.FINGERPRINT],\n      authTrustLevel: userAuth.AuthTrustLevel.ATL3,\n      skipLockedBiometricAuth: true\n    };\n    // 配置认证界面\n    const widgetParam: userAuth.WidgetParam = {\n      title: resourceToString($r('app.string.title')),\n    };\n    // 获取认证对象\n    const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);\n    Logger.info('get userAuth instance successfully');\n    // 订阅认证过程中的提示信息。\n    userAuthInstance.on('authTip', (authTipInfo: userAuth.AuthTipInfo) => {\n      try {\n        Logger.info('userAuthInstance callback');\n        this.result[ResultIndex.PERCEIVE_ADJUST] = (`${authTipInfo.tipType}`);\n        // 认证完成后取消订阅\n        userAuthInstance.off('result');\n      } catch (error) {\n        const err: BusinessError = error as BusinessError;\n        Logger.error(`onResult failed, code: ${err?.code}, Message: ${err?.message}`);\n      }\n    });\n    // 开始认证\n    userAuthInstance.start();\n    // ...\n      // 取消订阅认证过程中的提示信息。\n      userAuthInstance.off('authTip');\n      Logger.info('off authTip successfully');\n      // 取消认证\n      userAuthInstance.cancel();\n      Logger.info('auth cancel successfully');\n      // ...\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    Logger.error(`auth failed, code is ${err?.code as number}, message is ${err?.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/UserAuthentication",
          children: "感知和调整认证过程"
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