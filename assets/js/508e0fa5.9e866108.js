"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["318262"], {
751194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_data_guard_kit_guide_dataguard_enterprise_recoverykey_recoverykey_update_recoverykey_update_md_508_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-data-guard-kit-guide-dataguard-enterprise-recoverykey-recoverykey-update-recoverykey-update-md-508.json
var site_docs_system_security_data_guard_kit_guide_dataguard_enterprise_recoverykey_recoverykey_update_recoverykey_update_md_508_namespaceObject = JSON.parse('{"id":"system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-update/recoverykey-update","title":"更新企业公钥证书","description":"场景介绍","source":"@site/docs/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-update/recoverykey-update.md","sourceDirName":"system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-update","slug":"/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-update/","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-update/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"更新企业公钥证书","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/recoverykey-update","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"挑战值签名","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-signature/"},"next":{"title":"删除企业恢复密钥","permalink":"/harmonyos-docs-site/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-delete/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-update/recoverykey-update.md


const frontMatter = {
	title: '更新企业公钥证书',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/recoverykey-update',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '更新企业公钥证书';

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
        id: "更新企业公钥证书",
        children: "更新企业公钥证书"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为应用提供更新企业公钥证书的能力，用于在证书泄漏、证书失效等场景及时更新企业公钥证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细接口说明可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-recoverykey/dataguard-recoverykey",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-recoverykey/dataguard-recoverykey#updateenterprisecertificate",
              children: "updateEnterpriseCertificate"
            }), "(signature: Uint8Array, cert: Uint8Array): Promise<number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用Promise方式更新证书。"
          })]
        })
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
            children: "import { recoveryKey } from '@kit.EnterpriseDataGuardKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["先调用接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-recoverykey/dataguard-recoverykey#getauthchallenge",
            children: "getAuthChallenge"
          }), "，获取挑战值并", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-signature",
            children: "签名"
          }), "，传入挑战值的签名和企业公钥证书，再调用接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/data-guard-api/data-guard-arkts/dataguard-recoverykey/dataguard-recoverykey#updateenterprisecertificate",
            children: "updateEnterpriseCertificate"
          }), "，更新企业公钥证书。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function testUpdateEnterpriseCertificate() {\n  // 在实际应用中，signature 应替换为由企业的公钥、私钥和挑战值生成的签名。\n  let signature: Uint8Array = new Uint8Array([0]);\n  // 在实际应用中，cert 应需替换为企业证书数据。\n  let cert: Uint8Array = new Uint8Array([0]);\n  recoveryKey.updateEnterpriseCertificate(signature, cert).then((ret: number) => {\n    console.info(`Succeeded in updating certificate.`);\n  }).catch((error: BusinessError) => {\n    console.error(`Failed to update certificate. Code: ${error.code}, message: ${error.message}`);\n  });\n}\n"
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