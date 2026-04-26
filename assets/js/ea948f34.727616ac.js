"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["98810"], {
317274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_external_key_management_huks_ukey_pin_authentication_management_huks_query_authentication_status_arkts_huks_query_authentication_status_arkts_md_ea9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-external-key-management-huks-ukey-pin-authentication-management-huks-query-authentication-status-arkts-huks-query-authentication-status-arkts-md-ea9.json
var site_docs_system_security_huks_kit_huks_external_key_management_huks_ukey_pin_authentication_management_huks_query_authentication_status_arkts_huks_query_authentication_status_arkts_md_ea9_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-arkts/huks-query-authentication-status-arkts","title":"查询认证状态(ArkTS)","description":"从API 22开始，huksExternalCrypto提供PIN码认证状态查询功能接口。应用可以通过该接口查询PIN码是否认证通过。具体的场景介绍及规格，请参考Ukey PIN码认证介绍及规格。","source":"@site/docs/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-arkts/huks-query-authentication-status-arkts.md","sourceDirName":"system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-arkts","slug":"/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"查询认证状态(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-query-authentication-status-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Ukey PIN码认证介绍及规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-ukey-pin-authentication-management-overview/"},"next":{"title":"查询认证状态(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-arkts/huks-query-authentication-status-arkts.md


const frontMatter = {
	title: '查询认证状态(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-query-authentication-status-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '查询认证状态(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开发案例",
  "id": "开发案例",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "查询认证状态arkts",
        children: "查询认证状态(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 22开始，huksExternalCrypto提供PIN码认证状态查询功能接口。应用可以通过该接口查询PIN码是否认证通过。具体的场景介绍及规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-ukey-pin-authentication-management-overview",
        children: "Ukey PIN码认证介绍及规格"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过证书管理系统能力提供的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certificatemanagerdialogopenauthorizedialog22",
          children: "证书选择接口"
        }), "获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certreference22",
          children: "keyUri"
        }), "，并将其作为resourceId。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用查询认证状态接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huksexternalcrypto/js-apis-huksexternalcrypto#huksexternalcryptogetukeypinauthstate",
          children: "getUkeyPinAuthState"
        }), "验证PIN码。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nasync function getUkeyPinAuthState(): Promise<huksExternalCrypto.HuksExternalPinAuthState> {\n  let ret: huksExternalCrypto.HuksExternalPinAuthState = huksExternalCrypto.HuksExternalPinAuthState.HUKS_EXT_CRYPTO_PIN_NO_AUTH;\n  try {\n    /* 1.构造查询PIN码状态参数 */\n    const testResourceId = JSON.stringify({\n      providerName: \"testProviderName\",\n      bundleName: \"com.example.cryptoapplication\",\n      abilityName: \"CryptoExtension\",\n      index: {\n        key: \"testKey\"\n      } as ESObject\n    });\n    const extProperties: Array<huksExternalCrypto.HuksExternalCryptoParam> = [];\n\n    /* 2.调用getUkeyPinAuthState */\n    await huksExternalCrypto.getUkeyPinAuthState(testResourceId, extProperties)\n      .then((data) => {\n        console.info(`promise: getUkeyPinAuthState success , data : ${data}`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: getUkeyPinAuthState failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      });\n  } catch (error) {\n    console.error(`promise: getUkeyPinAuthState input arg invalid`);\n  }\n  return ret;\n}\n\nasync function testGetUkeyPinAuthState() {\n  let ret: huksExternalCrypto.HuksExternalPinAuthState = await getUkeyPinAuthState();\n  if (ret != huksExternalCrypto.HuksExternalPinAuthState.HUKS_EXT_CRYPTO_PIN_AUTH_SUCCEEDED) {\n    console.error(`getUkeyPinAuthState failed`);\n    return;\n  }\n\n  console.info(`getUkeyPinAuthState success`);\n}\n"
      })
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