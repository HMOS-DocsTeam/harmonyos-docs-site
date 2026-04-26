"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["408122"], {
307230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_external_key_management_huks_resource_management_huks_open_close_resource_ndk_huks_open_close_resource_ndk_md_9ea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-external-key-management-huks-resource-management-huks-open-close-resource-ndk-huks-open-close-resource-ndk-md-9ea.json
var site_docs_system_security_huks_kit_huks_external_key_management_huks_resource_management_huks_open_close_resource_ndk_huks_open_close_resource_ndk_md_9ea_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-external-key-management/huks-resource-management/huks-open-close-resource-ndk/huks-open-close-resource-ndk","title":"打开资源/关闭资源(C/C++)","description":"打开资源","source":"@site/docs/system-security/huks-kit/huks-external-key-management/huks-resource-management/huks-open-close-resource-ndk/huks-open-close-resource-ndk.md","sourceDirName":"system-security/huks-kit/huks-external-key-management/huks-resource-management/huks-open-close-resource-ndk","slug":"/system-security/huks-kit/huks-external-key-management/huks-resource-management/huks-open-close-resource-ndk/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-resource-management/huks-open-close-resource-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"打开资源/关闭资源(C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-open-close-resource-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"资源管理介绍及规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-resource-management/huks-resource-management-overview/"},"next":{"title":"Ukey PIN码认证介绍及规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-ukey-pin-authentication-management-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-external-key-management/huks-resource-management/huks-open-close-resource-ndk/huks-open-close-resource-ndk.md


const frontMatter = {
	title: '打开资源/关闭资源(C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-open-close-resource-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '打开资源/关闭资源(C/C++)';

const assets = {

};



const toc = [{
  "value": "打开资源",
  "id": "打开资源",
  "level": 2
}, {
  "value": "在CMake脚本中链接相关动态库",
  "id": "在cmake脚本中链接相关动态库",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "开发案例",
  "id": "开发案例",
  "level": 3
}, {
  "value": "关闭资源",
  "id": "关闭资源",
  "level": 2
}, {
  "value": "在CMake脚本中链接相关动态库",
  "id": "在cmake脚本中链接相关动态库-1",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
  "level": 3
}, {
  "value": "开发案例",
  "id": "开发案例-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "打开资源关闭资源cc",
        children: "打开资源/关闭资源(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "打开资源",
      children: "打开资源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 22开始，huksExternalCrypto提供打开/关闭资源功能接口。应用在密钥操作之前（密钥操作、通用操作、PIN码认证等），需要先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_openresource",
        children: "OH_Huks_OpenResource"
      }), "打开资源。打开资源需要获取resourceId，resourceId通过调用证书管理系统能力提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certificatemanagerdialogopenauthorizedialog22",
        children: "证书选择接口"
      }), "获取。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在cmake脚本中链接相关动态库",
      children: "在CMake脚本中链接相关动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libhuks_ndk.z.so libhuks_external_crypto.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
        children: ["初始化参数集：通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_initexternalcryptoparamset",
          children: "OH_Huks_InitExternalCryptoParamSet"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_addexternalcryptoparams",
          children: "OH_Huks_AddExternalCryptoParams"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_buildexternalcryptoparamset",
          children: "OH_Huks_BuildExternalCryptoParamSet"
        }), "构造参数集paramSet。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_openresource",
          children: "OH_Huks_OpenResource"
        }), "打开资源。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_external_crypto_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <string.h>\n\nOH_Huks_Result InitParamSet(\n    struct OH_Huks_ExternalCryptoParamSet **paramSet,\n    const struct OH_Huks_ExternalCryptoParam *params,\n    uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitExternalCryptoParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddExternalCryptoParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeExternalCryptoParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildExternalCryptoParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeExternalCryptoParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic const char *g_resourceId = \"{\\\"providerName\\\":\\\"testProviderName\\\",\\\"abilityName\\\":\\\"CryptoExtension\\\",\\\"bundleName\\\":\\\"com.example.cryptoapplication\\\",\\\"index\\\":{\\\"key\\\":\\\"testKey\\\"}}\";\n\nstatic struct OH_Huks_ExternalCryptoParam g_openResourceParamsTest[] = {};\n\nstatic napi_value OpenResource(napi_env env, napi_callback_info info)\n{\n    struct OH_Huks_Blob resourceId = {\n        (uint32_t)strlen(g_resourceId),\n        (uint8_t *)g_resourceId\n    };\n    struct OH_Huks_ExternalCryptoParamSet *openResourceParamSet = nullptr;\n    OH_Huks_Result ohResult;\n    do {\n        ohResult = InitParamSet(&openResourceParamSet, g_openResourceParamsTest,\n            sizeof(g_openResourceParamsTest) / sizeof(OH_Huks_ExternalCryptoParam));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = OH_Huks_OpenResource(&resourceId, openResourceParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n    } while (0);\n    OH_Huks_FreeExternalCryptoParamSet(&openResourceParamSet);\n    \n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关闭资源",
      children: "关闭资源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["生态应用调用证书HAP界面，展示证书列表，用户选择证书，生态应用拿到对应的resourceId，关闭资源依赖于对应的resourceId。具体的场景介绍及规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-external-key-management/huks-resource-management/huks-resource-management-overview",
        children: "资源管理介绍及规格"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在cmake脚本中链接相关动态库-1",
      children: "在CMake脚本中链接相关动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libhuks_ndk.z.so libhuks_external_crypto.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过证书管理系统能力提供的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certificatemanagerdialogopenauthorizedialog22",
          children: "证书选择接口"
        }), "获取resourceId。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["初始化参数集：通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_initexternalcryptoparamset",
          children: "OH_Huks_InitExternalCryptoParamSet"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_addexternalcryptoparams",
          children: "OH_Huks_AddExternalCryptoParams"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_buildexternalcryptoparamset",
          children: "OH_Huks_BuildExternalCryptoParamSet"
        }), "构造参数集paramSet。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_closeresource",
          children: "OH_Huks_CloseResource"
        }), "关闭资源。该接口会回调", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-cryptoextensionability/js-apis-cryptoextensionability#cryptoextensionabilityonclearukeypinauthstate",
          children: "onClearUkeyPinAuthState"
        }), "清理该资源关联的PIN认证状态，以及会回调", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-cryptoextensionability/js-apis-cryptoextensionability#cryptoextensionabilityonfinishsession",
          children: "onFinishSession"
        }), "清理该资源关联的会话handle。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发案例-1",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_external_crypto_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"huks/native_huks_type.h\"\n#include \"huks/native_huks_api.h\"\n#include \"napi/native_api.h\"\n#include <string.h>\n\nOH_Huks_Result InitParamSet(\n    struct OH_Huks_ExternalCryptoParamSet **paramSet,\n    const struct OH_Huks_ExternalCryptoParam *params,\n    uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitExternalCryptoParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddExternalCryptoParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeExternalCryptoParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildExternalCryptoParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeExternalCryptoParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic const char *g_resourceId = \"{\\\"providerName\\\":\\\"testProviderName\\\",\\\"abilityName\\\":\\\"CryptoExtension\\\",\\\"bundleName\\\":\\\"com.example.cryptoapplication\\\",\\\"userid\\\":100,\\\"index\\\":{\\\"key\\\":\\\"testKey\\\"}}\";\n\nstatic struct OH_Huks_ExternalCryptoParam g_closeResourceParamsTest[] = {};\n\nstatic napi_value CloseResource(napi_env env, napi_callback_info info)\n{\n    struct OH_Huks_Blob resourceId = {\n        (uint32_t)strlen(g_resourceId),\n        (uint8_t *)g_resourceId\n    };\n    struct OH_Huks_ExternalCryptoParamSet *closeResourceParamSet = nullptr;\n    OH_Huks_Result ohResult;\n    do {\n        ohResult = InitParamSet(&closeResourceParamSet, g_closeResourceParamsTest,\n            sizeof(g_closeResourceParamsTest) / sizeof(OH_Huks_ExternalCryptoParam));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = OH_Huks_CloseResource(&resourceId, closeResourceParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n    } while (0);\n    OH_Huks_FreeExternalCryptoParamSet(&closeResourceParamSet);\n    \n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
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