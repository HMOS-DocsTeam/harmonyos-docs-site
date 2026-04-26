"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["119129"], {
262825(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_external_key_management_huks_ukey_general_operation_huks_ukey_general_query_ndk_huks_ukey_general_query_ndk_md_9ac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-external-key-management-huks-ukey-general-operation-huks-ukey-general-query-ndk-huks-ukey-general-query-ndk-md-9ac.json
var site_docs_system_security_huks_kit_huks_external_key_management_huks_ukey_general_operation_huks_ukey_general_query_ndk_huks_ukey_general_query_ndk_md_9ac_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-ndk/huks-ukey-general-query-ndk","title":"通用查询(C/C++)","description":"从API 22开始，huksExternalCrypto提供通用查询功能接口。从Ukey获取通用属性信息，完成属性查询操作。具体的场景介绍请参考获取属性介绍及规格。","source":"@site/docs/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-ndk/huks-ukey-general-query-ndk.md","sourceDirName":"system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-ndk","slug":"/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-ndk/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"通用查询(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-ukey-general-query-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通用查询(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-arkts/"},"next":{"title":"CryptoExtensionAbility扩展能力介绍","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-extension-ability-support/huks-extension-ability-support-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-ndk/huks-ukey-general-query-ndk.md


const frontMatter = {
	title: '通用查询(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-ukey-general-query-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '通用查询(C/C++)';

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
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "通用查询cc",
        children: "通用查询(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API 22开始，huksExternalCrypto提供通用查询功能接口。从Ukey获取通用属性信息，完成属性查询操作。具体的场景介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-overview",
        children: "获取属性介绍及规格"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "获取属性"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["构造resourceId和propertyId，先调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_openresource",
          children: "OH_Huks_OpenResource"
        }), "打开资源。"]
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
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_getproperty",
          children: "OH_Huks_GetProperty"
        }), "获取属性信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_getexternalcryptoparam",
          children: "OH_Huks_GetExternalCryptoParam"
        }), "从输出参数集中提取结果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-external-crypto-api-h/capi-native-huks-external-crypto-api-h#oh_huks_freeexternalcryptoparamset",
          children: "OH_Huks_FreeExternalCryptoParamSet"
        }), "释放参数集资源。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_external_crypto_api.h\"\n#include \"huks/native_huks_external_crypto_type.h\"\n#include \"napi/native_api.h\"\n#include <string.h>\n\nOH_Huks_Result InitExternalCryptoParamSet(\n    OH_Huks_ExternalCryptoParamSet **paramSet,\n    const OH_Huks_ExternalCryptoParam *params,\n    uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitExternalCryptoParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddExternalCryptoParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeExternalCryptoParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildExternalCryptoParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeExternalCryptoParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic napi_value GetProperty(napi_env env, napi_callback_info info)\n{\n    /* 1.假设已经打开了resourceId */\n    const char *resourceIdStr = \"{\\\"providerName\\\":\\\"testProviderName\\\",\\\"abilityName\\\":\\\"CryptoExtension\\\",\"\n                              \"\\\"bundleName\\\":\\\"com.example.cryptoapplication\\\",\\\"index\\\":{\\\"key\\\":\\\"testKey\\\"}}\";\n    const char *propertyIdStr = \"SKF_GetDevInfo\"; // 定义在GMT 0016-2023标准中的属性函数名称\n    \n    struct OH_Huks_Blob resourceId = {\n        (uint32_t)strlen(resourceIdStr),\n        (uint8_t *)resourceIdStr\n    };\n    struct OH_Huks_Blob propertyId = {\n        (uint32_t)strlen(propertyIdStr),\n        (uint8_t *)propertyIdStr\n    };\n    \n    /* 2.构造输入参数 */\n    OH_Huks_ExternalCryptoParam params[] = {};\n    OH_Huks_ExternalCryptoParamSet *paramSetIn = nullptr;\n    OH_Huks_ExternalCryptoParamSet *paramSetOut = nullptr;\n    OH_Huks_Result ohResult;\n    \n    do {\n        /* 3.初始化并构建输入参数集 */\n        ohResult = InitExternalCryptoParamSet(&paramSetIn, params,\n            sizeof(params) / sizeof(OH_Huks_ExternalCryptoParam));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        \n        /* 4.调用OH_Huks_GetProperty获取属性 */\n        ohResult = OH_Huks_GetProperty(&resourceId, &propertyId, paramSetIn, &paramSetOut);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        \n        /* 5.从输出参数集中提取结果\n         * 输出参数集由函数内部分配，查询到的属性数据放在 OH_HUKS_EXT_CRYPTO_TAG_EXTRA_DATA TAG 中。\n         * 下面展示如何遍历返回的 params 并安全提取返回的属性字符串（示例）。\n         */\n        if (paramSetOut != nullptr && paramSetOut->paramsCnt > 0) {\n            for (uint32_t i = 0; i < paramSetOut->paramsCnt; i++) {\n                OH_Huks_ExternalCryptoParam *param = &paramSetOut->params[i];\n                /* 返回数据约定：GetProperty 的结果放在 OH_HUKS_EXT_CRYPTO_TAG_EXTRA_DATA TAG 中（示例使用 JSON 文本） */\n                if (param->tag == OH_HUKS_EXT_CRYPTO_TAG_EXTRA_DATA) {\n                    /* 注意：param->blob.data 可能不是以 '\\0' 结尾，需拷贝并手动添加终止符 */\n                    char *outStr = (char *)malloc(param->blob.size + 1);\n                    if (outStr != NULL) {\n                        memcpy(outStr, param->blob.data, param->blob.size);\n                        outStr[param->blob.size] = '\\0';\n                        // 解析 outStr（例如使用 JSON 解析库），示例：\n                        // parse_json(outStr);\n                        free(outStr);\n                    }\n                }\n            }\n        }\n    } while (0);\n    \n    /* 6.释放资源 */\n    OH_Huks_FreeExternalCryptoParamSet(&paramSetIn);\n    OH_Huks_FreeExternalCryptoParamSet(&paramSetOut);\n    \n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
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