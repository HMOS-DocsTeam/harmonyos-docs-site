"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["676490"], {
278950(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_user_authentication_kit_user_authentication_dev_obtain_enrolled_state_capabilities_obtain_enrolled_state_capabilities_md_3d2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-user-authentication-kit-user-authentication-dev-obtain-enrolled-state-capabilities-obtain-enrolled-state-capabilities-md-3d2.json
var site_docs_system_security_user_authentication_kit_user_authentication_dev_obtain_enrolled_state_capabilities_obtain_enrolled_state_capabilities_md_3d2_namespaceObject = JSON.parse('{"id":"system-security/user-authentication-kit/user-authentication-dev/obtain-enrolled-state-capabilities/obtain-enrolled-state-capabilities","title":"查询用户注册凭据的状态","description":"调用者需感知用户注册凭据（人脸、指纹、口令）的变化，可使用该接口查询当前用户注册凭据的状态。","source":"@site/docs/system-security/user-authentication-kit/user-authentication-dev/obtain-enrolled-state-capabilities/obtain-enrolled-state-capabilities.md","sourceDirName":"system-security/user-authentication-kit/user-authentication-dev/obtain-enrolled-state-capabilities","slug":"/system-security/user-authentication-kit/user-authentication-dev/obtain-enrolled-state-capabilities/","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/obtain-enrolled-state-capabilities/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"查询用户注册凭据的状态","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/obtain-enrolled-state-capabilities","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"切换自定义认证","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/apply-custom-authentication/"},"next":{"title":"使用嵌入式用户身份认证控件","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/user-auth-icon/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/user-authentication-kit/user-authentication-dev/obtain-enrolled-state-capabilities/obtain-enrolled-state-capabilities.md


const frontMatter = {
	title: '查询用户注册凭据的状态',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/obtain-enrolled-state-capabilities',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '查询用户注册凭据的状态';

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
        id: "查询用户注册凭据的状态",
        children: "查询用户注册凭据的状态"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用者需感知用户注册凭据（人脸、指纹、口令）的变化，可使用该接口查询当前用户注册凭据的状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体参数、返回值、错误码等描述，请参考对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthgetenrolledstate12",
        children: "userAuth.getEnrolledState"
      }), "。"]
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
            children: "getEnrolledState(authType : UserAuthType): EnrolledState"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定的认证类型，查询用户注册凭据的状态，用于感知注册凭据变化。"
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
        children: ["指定认证类型（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthtype8",
          children: "UserAuthType"
        }), "），调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthgetenrolledstate12",
          children: "getEnrolledState"
        }), "接口查询用户注册凭据的状态。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以查询用户人脸注册凭据的状态为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "obtainingEnrolledCredentialInformation() {\n  try {\n    let enrolledState = userAuth.getEnrolledState(userAuth.UserAuthType.FACE);\n    Logger.info('get current enrolled state successfully');\n    return enrolledState.credentialDigest;\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    Logger.error(`get current enrolled state failed, Code is ${err?.code}, message is ${err?.message}`);\n    return false;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/UserAuthentication",
          children: "查询用户注册凭据的状态"
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