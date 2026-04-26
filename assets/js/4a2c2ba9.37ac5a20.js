"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["686374"], {
321021(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_external_key_management_huks_ukey_signing_signature_verification_huks_ukey_signing_signature_verification_ndk_huks_ukey_signing_signature_verification_ndk_md_4a2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-external-key-management-huks-ukey-signing-signature-verification-huks-ukey-signing-signature-verification-ndk-huks-ukey-signing-signature-verification-ndk-md-4a2.json
var site_docs_system_security_huks_kit_huks_external_key_management_huks_ukey_signing_signature_verification_huks_ukey_signing_signature_verification_ndk_huks_ukey_signing_signature_verification_ndk_md_4a2_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-ndk/huks-ukey-signing-signature-verification-ndk","title":"签名/验签(C/C++)","description":"以密钥算法为RSA、摘要算法为SHA384、填充模式为PSS的密钥为例，完成签名、验签：","source":"@site/docs/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-ndk/huks-ukey-signing-signature-verification-ndk.md","sourceDirName":"system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-ndk","slug":"/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-ndk/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"签名/验签(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-ukey-signing-signature-verification-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"签名/验签(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-arkts/"},"next":{"title":"通用查询介绍及规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-external-key-management/huks-ukey-general-operation/huks-ukey-general-query-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-ndk/huks-ukey-signing-signature-verification-ndk.md


const frontMatter = {
	title: '签名/验签(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-ukey-signing-signature-verification-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '签名/验签(C/C++)';

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
}, {
  "value": "RSA/SHA384/PSS",
  "id": "rsasha384pss",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "签名验签cc",
        children: "签名/验签(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以密钥算法为RSA、摘要算法为SHA384、填充模式为PSS的密钥为例，完成签名、验签："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#rsasha384pss",
          children: "密钥算法为RSA、摘要算法为SHA384、填充模式为PSS"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体的场景介绍及支持的算法规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-external-key-management/huks-ukey-signing-signature-verification/huks-ukey-signing-signature-verification-overview",
        children: "签名/验签介绍及算法规格"
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
          children: "签名"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过证书管理系统能力提供的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certificatemanagerdialogopenauthorizedialog22",
          children: "证书选择接口"
        }), "获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certreference22",
          children: "keyUri"
        }), "作为resourceId，并作为密钥别名，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-external-key-management/huks-resource-management/huks-open-close-resource-ndk#%E6%89%93%E5%BC%80%E8%B5%84%E6%BA%90",
          children: "打开资源"
        }), "后完成PIN码认证。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指定待签名的明文数据。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-param-h/capi-native-huks-param-h#oh_huks_initparamset",
          children: "OH_Huks_InitParamSet"
        }), "指定算法参数配置，并指定KeyClass参数，tag为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h#oh_huks_tag",
          children: "OH_HUKS_TAG_KEY_CLASS"
        }), "，值为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h#oh_huks_keyclasstype",
          children: "OH_HUKS_KEY_CLASS_EXTENSION"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_initsession",
          children: "OH_Huks_InitSession"
        }), "初始化密钥会话，并获取会话的句柄handle。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_finishsession",
          children: "OH_Huks_FinishSession"
        }), "结束密钥会话，获取签名signature。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "验签"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过证书管理系统能力提供的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certificatemanagerdialogopenauthorizedialog22",
          children: "证书选择接口"
        }), "获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/device-certificate-api/device-certificate-arkts/js-apis-certmanagerdialog/js-apis-certmanagerdialog#certreference22",
          children: "keyUri"
        }), "作为resourceId，并作为密钥别名，然后", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-external-key-management/huks-resource-management/huks-open-close-resource-ndk#%E6%89%93%E5%BC%80%E8%B5%84%E6%BA%90",
          children: "打开资源"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取待验证的签名。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-param-h/capi-native-huks-param-h#oh_huks_initparamset",
          children: "OH_Huks_InitParamSet"
        }), "指定算法参数配置，并指定KeyClass参数，tag为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h#oh_huks_tag",
          children: "OH_HUKS_TAG_KEY_CLASS"
        }), "，值为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-type-h/capi-native-huks-type-h#oh_huks_keyclasstype",
          children: "OH_HUKS_KEY_CLASS_EXTENSION"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_initsession",
          children: "OH_Huks_InitSession"
        }), "初始化密钥会话，并获取会话的句柄handle。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_updatesession",
          children: "OH_Huks_UpdateSession"
        }), "更新密钥会话。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_finishsession",
          children: "OH_Huks_FinishSession"
        }), "结束密钥会话，验证签名。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsasha384pss",
      children: "RSA/SHA384/PSS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <string.h>\n\nOH_Huks_Result InitParamSet(\n    struct OH_Huks_ParamSet **paramSet,\n    const struct OH_Huks_Param *params,\n    uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic struct OH_Huks_Param g_signParamsTest[] = {\n    {\n        .tag = OH_HUKS_TAG_ALGORITHM,\n        .uint32Param = OH_HUKS_ALG_RSA\n    }, {\n        .tag = OH_HUKS_TAG_PURPOSE,\n        .uint32Param = OH_HUKS_KEY_PURPOSE_SIGN\n    }, {\n        .tag = OH_HUKS_TAG_KEY_SIZE,\n        .uint32Param = OH_HUKS_RSA_KEY_SIZE_2048\n    }, {\n        .tag = OH_HUKS_TAG_PADDING,\n        .uint32Param = OH_HUKS_PADDING_PSS\n    }, {\n        .tag = OH_HUKS_TAG_DIGEST,\n        .uint32Param = OH_HUKS_DIGEST_SHA384\n    }, {\n        .tag = OH_HUKS_TAG_KEY_CLASS,\n        .uint32Param = OH_HUKS_KEY_CLASS_EXTENSION\n    }\n};\n\nstatic struct OH_Huks_Param g_verifyParamsTest[] = {\n    {\n        .tag = OH_HUKS_TAG_ALGORITHM,\n        .uint32Param = OH_HUKS_ALG_RSA\n    }, {\n        .tag = OH_HUKS_TAG_PURPOSE,\n        .uint32Param = OH_HUKS_KEY_PURPOSE_VERIFY\n    }, {\n        .tag = OH_HUKS_TAG_KEY_SIZE,\n        .uint32Param = OH_HUKS_RSA_KEY_SIZE_2048\n    }, {\n        .tag = OH_HUKS_TAG_PADDING,\n        .uint32Param = OH_HUKS_PADDING_PSS\n    }, {\n        .tag = OH_HUKS_TAG_DIGEST,\n        .uint32Param = OH_HUKS_DIGEST_SHA384\n    }, {\n        .tag = OH_HUKS_TAG_KEY_CLASS,\n        .uint32Param = OH_HUKS_KEY_CLASS_EXTENSION\n    }\n};\n\nstatic const uint32_t RSA_COMMON_SIZE = 1024;\nstatic const char *DATA_TO_SIGN = \"Hks_RSA_Sign_Verify_Test_0000000000000000000000000000000000000000000000000000000\"\n                                  \"00000000000000000000000000000000000000000000000000000000000000000000000000000000\"\n                                  \"0000000000000000000000000000000000000000000000000000000000000000000000000_string\";\nstatic const char *KEY_ALIAS = \"{\\\"providerName\\\":\\\"testProviderName\\\",\\\"abilityName\\\":\\\"CryptoExtension\\\",\"\n                              \"\\\"bundleName\\\":\\\"com.example.cryptoapplication\\\",\\\"index\\\":{\\\"key\\\":\\\"testKey\\\"}}\";\n\nstatic napi_value SignVerifyKey(napi_env env, napi_callback_info info)\n{\n    // 假设keyAlias是获取的resourceId\n    struct OH_Huks_Blob keyAlias = {\n        (uint32_t)strlen(KEY_ALIAS),\n        (uint8_t *)KEY_ALIAS\n    };\n    struct OH_Huks_Blob inData = {\n        (uint32_t)strlen(DATA_TO_SIGN),\n        (uint8_t *)DATA_TO_SIGN\n    };\n    struct OH_Huks_ParamSet *signParamSet = nullptr;\n    struct OH_Huks_ParamSet *verifyParamSet = nullptr;\n    OH_Huks_Result ohResult;\n    do {\n        ohResult = InitParamSet(&signParamSet, g_signParamsTest, sizeof(g_signParamsTest) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = InitParamSet(&verifyParamSet, g_verifyParamsTest,\n            sizeof(g_verifyParamsTest) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 1. Sign */\n        // Init\n        uint8_t handleS[sizeof(uint64_t)] = {0};\n        struct OH_Huks_Blob handleSign = { (uint32_t)sizeof(uint64_t), handleS };\n        ohResult = OH_Huks_InitSession(&keyAlias, signParamSet, &handleSign, nullptr);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        // Finish\n        uint8_t outDataS[RSA_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob outDataSign = { RSA_COMMON_SIZE, outDataS };\n        ohResult = OH_Huks_FinishSession(&handleSign, signParamSet,  &inData, &outDataSign);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        \n        /* 2. Verify */\n        // Init\n        uint8_t handleV[sizeof(uint64_t)] = {0};\n        struct OH_Huks_Blob handleVerify = { (uint32_t)sizeof(uint64_t), handleV };\n        ohResult = OH_Huks_InitSession(&keyAlias, verifyParamSet, &handleVerify, nullptr);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        // Update loop\n        uint8_t temp[] = \"out\";\n        struct OH_Huks_Blob verifyOut = { (uint32_t)sizeof(temp), temp };\n        ohResult = OH_Huks_UpdateSession(&handleVerify, verifyParamSet, &inData, &verifyOut);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        // Finish\n        ohResult = OH_Huks_FinishSession(&handleVerify, verifyParamSet, &outDataSign, &verifyOut);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n    } while (0);\n    OH_Huks_FreeParamSet(&signParamSet);\n    OH_Huks_FreeParamSet(&verifyParamSet);\n    \n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
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