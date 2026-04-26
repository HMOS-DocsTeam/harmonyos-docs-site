"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["124822"], {
876514(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_external_key_management_huks_ukey_pin_authentication_management_huks_query_authentication_status_ndk_huks_query_authentication_status_ndk_md_02d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-external-key-management-huks-ukey-pin-authentication-management-huks-query-authentication-status-ndk-huks-query-authentication-status-ndk-md-02d.json
var site_docs_system_security_huks_kit_huks_external_key_management_huks_ukey_pin_authentication_management_huks_query_authentication_status_ndk_huks_query_authentication_status_ndk_md_02d_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-ndk/huks-query-authentication-status-ndk","title":"查询认证状态(C/C++)","description":"从API 22开始，huksExternalCrypto提供PIN码认证状态查询功能接口。应用可以通过该接口查询PIN码是否认证通过。具体的场景介绍及规格，请参考Ukey PIN码认证介绍及规格。","source":"@site/docs/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-ndk/huks-query-authentication-status-ndk.md","sourceDirName":"system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-ndk","slug":"/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-ndk/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"查询认证状态(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-query-authentication-status-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查询认证状态(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-arkts/"},"next":{"title":"签名/验签介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-ndk/huks-query-authentication-status-ndk.md


const frontMatter = {
	title: '查询认证状态(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-query-authentication-status-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '查询认证状态(C/C++)';

const assets = {

};



const toc = [{
  "value": "在CMake脚本中链接相关动态库",
  "id": "在cmake脚本中链接相关动态库",
  "level": 2
}, {
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
        id: "查询认证状态cc",
        children: "查询认证状态(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 22开始，huksExternalCrypto提供PIN码认证状态查询功能接口。应用可以通过该接口查询PIN码是否认证通过。具体的场景介绍及规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-ukey-pin-authentication-management-overview",
        children: "Ukey PIN码认证介绍及规格"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在cmake脚本中链接相关动态库",
      children: "在CMake脚本中链接相关动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libhuks_ndk.z.so libhuks_external_crypto.z.so)\n"
      })
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
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_initexternalcryptoparamset",
          children: "OH_Huks_InitExternalCryptoParamSet"
        }), "指定参数配置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_getukeypinauthstate",
          children: "OH_Huks_GetUkeyPinAuthState"
        }), "获取PIN码认证状态。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_external_crypto_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <string.h>\n\nOH_Huks_Result InitParamSet(\n    struct OH_Huks_ExternalCryptoParamSet **paramSet,\n    const struct OH_Huks_ExternalCryptoParam *params,\n    uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitExternalCryptoParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddExternalCryptoParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeExternalCryptoParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildExternalCryptoParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeExternalCryptoParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic const char *resourceId = \"{\\\"providerName\\\":\\\"testProviderName\\\",\\\"abilityName\\\":\\\"CryptoExtension\\\",\\\"bundleName\\\":\\\"com.example.cryptoapplication\\\",\\\"index\\\":{\\\"key\\\":\\\"testKey\\\"}}\";\n\nstatic struct OH_Huks_ExternalCryptoParam g_getPinStateParamsTest[] = {};\n\nstatic napi_value GetUkeyPinAuthState(napi_env env, napi_callback_info info)\n{\n    struct OH_Huks_Blob g_resourceId = {\n        (uint32_t)strlen(resourceId),\n        (uint8_t *)resourceId\n    };\n    struct OH_Huks_ExternalCryptoParamSet *pinStateParamSet = nullptr;\n    OH_Huks_ExternalPinAuthState authState = OH_HUKS_EXT_CRYPTO_PIN_NO_AUTH;\n    OH_Huks_Result ohResult;\n    do {\n        ohResult = InitParamSet(&pinStateParamSet, g_getPinStateParamsTest,\n            sizeof(g_getPinStateParamsTest) / sizeof(OH_Huks_ExternalCryptoParam));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = OH_Huks_GetUkeyPinAuthState(&g_resourceId, pinStateParamSet, &authState);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n    } while (0);\n    OH_Huks_FreeExternalCryptoParamSet(&pinStateParamSet);\n    \n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
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