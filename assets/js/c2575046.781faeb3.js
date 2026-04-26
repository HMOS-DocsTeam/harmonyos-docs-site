"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["246798"], {
652897(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_data_guard_kit_guide_dataguard_enterprise_recoverykey_recoverykey_getkeyforresetpin_recoverykey_getkeyforresetpin_md_c25_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-data-guard-kit-guide-dataguard-enterprise-recoverykey-recoverykey-getkeyforresetpin-recoverykey-getkeyforresetpin-md-c25.json
var site_docs_system_security_data_guard_kit_guide_dataguard_enterprise_recoverykey_recoverykey_getkeyforresetpin_recoverykey_getkeyforresetpin_md_c25_namespaceObject = JSON.parse('{"id":"system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-getkeyforresetpin/recoverykey-getkeyforresetpin","title":"获取重置锁屏密码的企业恢复密钥","description":"场景介绍","source":"@site/docs/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-getkeyforresetpin/recoverykey-getkeyforresetpin.md","sourceDirName":"system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-getkeyforresetpin","slug":"/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-getkeyforresetpin/","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-getkeyforresetpin/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"获取重置锁屏密码的企业恢复密钥","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/recoverykey-getkeyforresetpin","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取解密硬盘数据的企业恢复密钥","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-getkeyfordecryptdata/"},"next":{"title":"获取挑战值","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-get-authchallenge/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-getkeyforresetpin/recoverykey-getkeyforresetpin.md


const frontMatter = {
	title: '获取重置锁屏密码的企业恢复密钥',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/recoverykey-getkeyforresetpin',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '获取重置锁屏密码的企业恢复密钥';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
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
        id: "获取重置锁屏密码的企业恢复密钥",
        children: "获取重置锁屏密码的企业恢复密钥"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为企业用户提供获取企业恢复密钥的能力，可以在用户忘记锁屏密码时，使用该企业恢复密钥重置用户的锁屏密码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细接口说明可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-recoverykey/dataguard-recoverykey",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-recoverykey/dataguard-recoverykey#verifyuseridentityenterprise",
              children: "verifyUserIdentityEnterprise"
            }), "(userId: number, userType: number, pinCode: string): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Promise方式验证用户锁屏密码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-recoverykey/dataguard-recoverykey#getenterpriserecoverykeyforresettingpin",
              children: "getEnterpriseRecoveryKeyForResettingPin"
            }), "(userId: number, userType: number): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-recoverykey/dataguard-recoverykey#enterpriserecoverykeyinfo",
              children: "EnterpriseRecoveryKeyInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Promise方式获取用于重置锁屏密码的企业恢复密钥。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { buffer } from '@kit.ArkTS';\nimport { BusinessError, osAccount } from '@kit.BasicServicesKit';\nimport { recoveryKey } from '@kit.EnterpriseDataGuardKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["先调用接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-recoverykey/dataguard-recoverykey#verifyuseridentityenterprise",
            children: "verifyUserIdentityEnterprise"
          }), "验证用户的锁屏密码，需提供用户ID、用户类型及用户锁屏密码，并在30秒内调用接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-recoverykey/dataguard-recoverykey#getenterpriserecoverykeyforresettingpin",
            children: "getEnterpriseRecoveryKeyForResettingPin"
          }), "以获取用于重置锁屏密码的企业恢复密钥。若超时后调用，系统会返回异常代码", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-error-code/dataguard-error-code#section1014400001-%E7%B3%BB%E7%BB%9F%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
            children: "1014400001"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * @param pinCode 用户输入的锁屏密码\n */\nasync function testGetEnterpriseRecoveryKeyForPin(pinCode: string) {\n  try {\n    let accountManager: osAccount.AccountManager = osAccount.getAccountManager();\n    let userId: number = await accountManager.getOsAccountLocalId();\n    let accountType: osAccount.OsAccountType = await accountManager.getOsAccountType();\n    console.info(`getOsAccountType,userId: ${userId}, accountType: ${accountType}`);\n\n    let userType: number = accountType.valueOf();\n    recoveryKey.verifyUserIdentityEnterprise(userId, userType, pinCode).then(() => {\n      console.info(`Succeeded in verifying user identity.`);\n      recoveryKey.getEnterpriseRecoveryKeyForResettingPin(userId, userType)\n        .then((info: recoveryKey.EnterpriseRecoveryKeyInfo) => {\n          console.info(`Succeeded in getting enterprise recovery key for resetting pin.`);\n          console.info(`EnterpriseRecoveryKeyInfo enterpriseRecoveryKey: ${buffer.from(info.enterpriseRecoveryKey)\n            .toString('hex')}`);\n          console.info(`EnterpriseRecoveryKeyInfo exportPublicKey: ${buffer.from(info.exportPublicKey)\n            .toString('hex')}`);\n          console.info(`EnterpriseRecoveryKeyInfo iv: ${buffer.from(info.iv).toString('hex')}`);\n          console.info(`EnterpriseRecoveryKeyInfo tag: ${buffer.from(info.tag).toString('hex')}`);\n        })\n        .catch((err: BusinessError) => {\n          console.error(`Failed to get enterprise recovery key for resetting pin. Code: ${err.code}, message: ${err.message}`);\n        })\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to verified user identity. Code: ${error.code}, message: ${error.message}`);\n    })\n  } catch (e) {\n    console.error(`Failed to testGetEnterpriseRecoveryKeyForPin. Code: ${e.code}, message: ${e.message}`);\n  }\n}\n"
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