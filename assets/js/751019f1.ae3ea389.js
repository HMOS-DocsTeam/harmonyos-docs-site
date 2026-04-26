"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["215906"], {
935653(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_signing_signature_verification_huks_signing_signature_verification_ndk_huks_signing_signature_verification_ndk_md_751_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-signing-signature-verification-huks-signing-signature-verification-ndk-huks-signing-signature-verification-ndk-md-751.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_signing_signature_verification_huks_signing_signature_verification_ndk_huks_signing_signature_verification_ndk_md_751_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-ndk/huks-signing-signature-verification-ndk","title":"签名/验签(C/C++)","description":"当前指导提供以下示例，供开发者参考完成签名、验签开发：","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-ndk/huks-signing-signature-verification-ndk.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-ndk","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-ndk/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"签名/验签(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-signing-signature-verification-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"签名/验签(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-arkts/"},"next":{"title":"密钥协商介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-ndk/huks-signing-signature-verification-ndk.md


const frontMatter = {
	title: '签名/验签(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-signing-signature-verification-ndk',
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
  "value": "ECC256/SHA256",
  "id": "ecc256sha256",
  "level": 3
}, {
  "value": "SM2/SM3",
  "id": "sm2sm3",
  "level": 3
}, {
  "value": "SM2/NoDigest",
  "id": "sm2nodigest",
  "level": 3
}, {
  "value": "RSA/SHA256/PSS",
  "id": "rsasha256pss",
  "level": 3
}, {
  "value": "RSA/SHA256/PKCS1_V1_5",
  "id": "rsasha256pkcs1_v1_5",
  "level": 3
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
      children: "当前指导提供以下示例，供开发者参考完成签名、验签开发："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["密钥算法为ECC256、摘要算法为SHA256，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#ecc256sha256",
          children: "ECC256/SHA256"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["密钥算法为SM2、摘要算法为SM3，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#sm2sm3",
          children: "SM2/SM3"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["密钥算法为SM2、摘要算法为NoDigest，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#sm2nodigest",
          children: "SM2/NoDigest"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["密钥算法为RSA、摘要算法为SHA256、填充模式为PSS，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#rsasha256pss",
          children: "RSA/SHA256/PSS"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["密钥算法为RSA、摘要算法为SHA256、填充模式为PKCS1_V1_5，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#rsasha256pkcs1_v1_5",
          children: "RSA/SHA256/PKCS1_V1_5"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["密钥算法为RSA、摘要算法为SHA384、填充模式为PSS，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#rsasha384pss",
          children: "RSA/SHA384/PSS"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体的场景介绍及支持的算法规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-overview#%E6%94%AF%E6%8C%81%E7%9A%84%E7%AE%97%E6%B3%95",
        children: "签名/验签支持的算法"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在cmake脚本中链接相关动态库",
      children: "在CMake脚本中链接相关动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libhuks_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "生成密钥"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["指定密钥别名，密钥别名命名规范参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
          children: "密钥生成介绍及算法规格"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化密钥属性集。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_generatekeyitem",
          children: "OH_Huks_GenerateKeyItem"
        }), "生成密钥，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
          children: "密钥生成"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除此之外，开发者也可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview",
        children: "密钥导入"
      }), "，导入已有的密钥。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "签名"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取密钥别名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指定待签名的明文数据。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-param-h/capi-native-huks-param-h#oh_huks_initparamset",
          children: "OH_Huks_InitParamSet"
        }), "指定算法参数配置。"]
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取密钥别名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取待验证的签名signature。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-param-h/capi-native-huks-param-h#oh_huks_initparamset",
          children: "OH_Huks_InitParamSet"
        }), "指定算法参数配置。"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "删除密钥"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当密钥废弃不用时，需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_deletekeyitem",
        children: "OH_Huks_DeleteKeyItem"
      }), "删除密钥，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-ndk",
        children: "密钥删除"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ecc256sha256",
      children: "ECC256/SHA256"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n                                   uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic struct OH_Huks_Param g_genSignVerifyParamsTestECC[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_ECC},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_SIGN | OH_HUKS_KEY_PURPOSE_VERIFY},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_ECC_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256},\n};\n\nstatic struct OH_Huks_Param g_signParamsTestECC[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_ECC},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_SIGN},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_ECC_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256}};\n\nstatic struct OH_Huks_Param g_verifyParamsTestECC[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_ECC},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_VERIFY},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_ECC_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256}};\n\nstatic const uint32_t ECC_COMMON_SIZE = 256;\nstatic const char *DATA_TO_SIGN_ECC = \"Hks_ECC_Sign_Verify_Test_0000000000000000000000000000000000000000000000000000000\"\n                                      \"00000000000000000000000000000000000000000000000000000000000000000000000000000000\"\n                                      \"00000000000000000000000000000000000000000000000000\"\n                                      \"00000000000000000000000_string\";\n\n/* 1. 生成密钥 */\nstatic OH_Huks_Result GenerateKeyECC(const struct OH_Huks_Blob *keyAlias,\n                                     const struct OH_Huks_ParamSet *genParamSet)\n{\n    return OH_Huks_GenerateKeyItem(keyAlias, genParamSet, nullptr);\n}\n\n/* 2. 签名 */\nstatic OH_Huks_Result SignDataECC(const struct OH_Huks_Blob *keyAlias,\n                                  const struct OH_Huks_ParamSet *signParamSet,\n                                  const struct OH_Huks_Blob *inData,\n                                  struct OH_Huks_Blob *outDataSign)\n{\n    uint8_t handleS[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleSign = {(uint32_t)sizeof(uint64_t), handleS};\n    \n    OH_Huks_Result ohResult = OH_Huks_InitSession(keyAlias, signParamSet, &handleSign, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    ohResult = OH_Huks_UpdateSession(&handleSign, signParamSet, inData, outDataSign);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    struct OH_Huks_Blob finishInData = {0, NULL};\n    ohResult = OH_Huks_FinishSession(&handleSign, signParamSet, &finishInData, outDataSign);\n    \n    return ohResult;\n}\n\n/* 3. 验签 */\nstatic OH_Huks_Result VerifySignatureECC(const struct OH_Huks_Blob *keyAlias,\n                                         const struct OH_Huks_ParamSet *verifyParamSet,\n                                         const struct OH_Huks_Blob *inData,\n                                         const struct OH_Huks_Blob *signature)\n{\n    uint8_t handleV[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleVerify = {(uint32_t)sizeof(uint64_t), handleV};\n    \n    OH_Huks_Result ohResult = OH_Huks_InitSession(keyAlias, verifyParamSet, &handleVerify, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    uint8_t temp[] = \"out\";\n    struct OH_Huks_Blob verifyOut = {(uint32_t)sizeof(temp), temp};\n    ohResult = OH_Huks_UpdateSession(&handleVerify, verifyParamSet, inData, &verifyOut);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    \n    ohResult = OH_Huks_FinishSession(&handleVerify, verifyParamSet, signature, &verifyOut);\n    \n    return ohResult;\n}\n\nnapi_value SignVerifyKeyECC(napi_env env, napi_callback_info info)\n{\n    struct OH_Huks_Blob g_keyAlias = {(uint32_t)strlen(\"test_signVerify_ECC\"), (uint8_t *)\"test_signVerify_ECC\"};\n    struct OH_Huks_Blob inData = {(uint32_t)strlen(DATA_TO_SIGN_ECC), (uint8_t *)DATA_TO_SIGN_ECC};\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *signParamSet = nullptr;\n    struct OH_Huks_ParamSet *verifyParamSet = nullptr;\n    OH_Huks_Result ohResult;\n    \n    do {\n        ohResult = InitParamSet(&genParamSet, g_genSignVerifyParamsTestECC,\n                                sizeof(g_genSignVerifyParamsTestECC) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        \n        ohResult = InitParamSet(&signParamSet, g_signParamsTestECC,\n                                sizeof(g_signParamsTestECC) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        \n        ohResult = InitParamSet(&verifyParamSet, g_verifyParamsTestECC,\n                                sizeof(g_verifyParamsTestECC) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        /* 1. 生成密钥 */\n        ohResult = GenerateKeyECC(&g_keyAlias, genParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        /* 2. 签名 */\n        uint8_t outDataS[ECC_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob outDataSign = {ECC_COMMON_SIZE, outDataS};\n        ohResult = SignDataECC(&g_keyAlias, signParamSet, &inData, &outDataSign);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        /* 3. 验签 */\n        ohResult = VerifySignatureECC(&g_keyAlias, verifyParamSet, &inData, &outDataSign);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n    } while (0);\n    \n    (void)OH_Huks_DeleteKeyItem(&g_keyAlias, genParamSet);\n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&signParamSet);\n    OH_Huks_FreeParamSet(&verifyParamSet);\n\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sm2sm3",
      children: "SM2/SM3"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n                                   uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic struct OH_Huks_Param g_genSignVerifyParamsSM2[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_SM2},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_SM2_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_SIGN | OH_HUKS_KEY_PURPOSE_VERIFY},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SM3},\n};\n\nstatic struct OH_Huks_Param g_signParamsSM2[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_SM2},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_SM2_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_SIGN},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SM3}\n};\n\nstatic struct OH_Huks_Param g_verifyParamsSM2[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_SM2},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_SM2_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_VERIFY},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SM3}\n};\n\nstatic const uint32_t SM2_COMMON_SIZE = 256;\nstatic const char *DATA_TO_SIGN_SM2 = \"Hks_SM2_Sign_Verify_Test_0000000000000000000000000000000000000000000000000000000\"\n                                      \"00000000000000000000000000000000000000000000000000000000000000000000000000000000\"\n                                      \"0000000000000000000000000000000000000000000000000\"\n                                      \"000000000000000000000000_string\";\n\n/* 1. 生成密钥 */\nstatic OH_Huks_Result GenerateKeySM2(const struct OH_Huks_Blob *keyAlias,\n                                     const struct OH_Huks_ParamSet *genParamSet)\n{\n    return OH_Huks_GenerateKeyItem(keyAlias, genParamSet, nullptr);\n}\n\n/* 2. 签名 */\nstatic OH_Huks_Result SignDataSM2(const struct OH_Huks_Blob *keyAlias,\n                                  const struct OH_Huks_ParamSet *signParamSet,\n                                  const struct OH_Huks_Blob *inData,\n                                  struct OH_Huks_Blob *outDataSign)\n{\n    uint8_t handleS[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleSign = {(uint32_t)sizeof(uint64_t), handleS};\n    \n    OH_Huks_Result ohResult = OH_Huks_InitSession(keyAlias, signParamSet, &handleSign, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    ohResult = OH_Huks_UpdateSession(&handleSign, signParamSet, inData, outDataSign);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    struct OH_Huks_Blob finishInData = {0, NULL};\n    ohResult = OH_Huks_FinishSession(&handleSign, signParamSet, &finishInData, outDataSign);\n    \n    return ohResult;\n}\n\n/* 3. 验签 */\nstatic OH_Huks_Result VerifySignatureSM2(const struct OH_Huks_Blob *keyAlias,\n                                         const struct OH_Huks_ParamSet *verifyParamSet,\n                                         const struct OH_Huks_Blob *inData,\n                                         const struct OH_Huks_Blob *signature)\n{\n    uint8_t handleV[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleVerify = {(uint32_t)sizeof(uint64_t), handleV};\n    \n    OH_Huks_Result ohResult = OH_Huks_InitSession(keyAlias, verifyParamSet, &handleVerify, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    uint8_t temp[] = \"out\";\n    struct OH_Huks_Blob verifyOut = {(uint32_t)sizeof(temp), temp};\n    ohResult = OH_Huks_UpdateSession(&handleVerify, verifyParamSet, inData, &verifyOut);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    \n    ohResult = OH_Huks_FinishSession(&handleVerify, verifyParamSet, signature, &verifyOut);\n    \n    return ohResult;\n}\n\nnapi_value SignVerifyKeySM2SM3(napi_env env, napi_callback_info info)\n{\n    struct OH_Huks_Blob g_keyAlias = {(uint32_t)strlen(\"test_signVerify_SM2_SM3\"),\n        (uint8_t *)\"test_signVerify_SM2_SM3\"};\n    struct OH_Huks_Blob inData = {(uint32_t)strlen(DATA_TO_SIGN_SM2), (uint8_t *)DATA_TO_SIGN_SM2};\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *signParamSet = nullptr;\n    struct OH_Huks_ParamSet *verifyParamSet = nullptr;\n    OH_Huks_Result ohResult;\n    \n    do {\n        ohResult = InitParamSet(&genParamSet, g_genSignVerifyParamsSM2,\n                                sizeof(g_genSignVerifyParamsSM2) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        \n        ohResult = InitParamSet(&signParamSet, g_signParamsSM2,\n                                sizeof(g_signParamsSM2) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        \n        ohResult = InitParamSet(&verifyParamSet, g_verifyParamsSM2,\n                                sizeof(g_verifyParamsSM2) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        /* 1. 生成密钥 */\n        ohResult = GenerateKeySM2(&g_keyAlias, genParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        /* 2. 签名 */\n        uint8_t outDataS[SM2_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob outDataSign = {SM2_COMMON_SIZE, outDataS};\n        ohResult = SignDataSM2(&g_keyAlias, signParamSet, &inData, &outDataSign);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        /* 3. 验签 */\n        ohResult = VerifySignatureSM2(&g_keyAlias, verifyParamSet, &inData, &outDataSign);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n    } while (0);\n    \n    (void)OH_Huks_DeleteKeyItem(&g_keyAlias, genParamSet);\n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&signParamSet);\n    OH_Huks_FreeParamSet(&verifyParamSet);\n\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sm2nodigest",
      children: "SM2/NoDigest"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n                                   uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic struct OH_Huks_Param g_genSignVerifyParamsSM2NoDigest[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_SM2},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_SM2_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_SIGN | OH_HUKS_KEY_PURPOSE_VERIFY},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE},\n};\n\nstatic struct OH_Huks_Param g_signParamsSM2NoDigest[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_SM2},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_SM2_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_SIGN},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}\n};\n\nstatic struct OH_Huks_Param g_verifyParamsSM2NoDigest[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_SM2},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_SM2_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_VERIFY},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}\n};\n\nstatic const uint32_t SM2_COMMON_SIZE = 256;\nstatic const char *DATA_TO_SIGN_SM2_NODIGEST = \"12345678901234567890123456789012\";\n\n/* 1. 生成密钥 */\nstatic OH_Huks_Result GenerateKeySM2(const struct OH_Huks_Blob *keyAlias,\n                                     const struct OH_Huks_ParamSet *genParamSet)\n{\n    return OH_Huks_GenerateKeyItem(keyAlias, genParamSet, nullptr);\n}\n\n/* 2. 签名 */\nstatic OH_Huks_Result SignDataSM2NoDigest(const struct OH_Huks_Blob *keyAlias,\n                                          const struct OH_Huks_ParamSet *signParamSet,\n                                          const struct OH_Huks_Blob *inData,\n                                          struct OH_Huks_Blob *outDataSign)\n{\n    uint8_t handleS[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleSign = {(uint32_t)sizeof(uint64_t), handleS};\n\n    OH_Huks_Result ohResult = OH_Huks_InitSession(keyAlias, signParamSet, &handleSign, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    ohResult = OH_Huks_FinishSession(&handleSign, signParamSet, inData, outDataSign);\n\n    return ohResult;\n}\n\n/* 3. 验签  */\nstatic OH_Huks_Result VerifySignatureSM2NoDigest(const struct OH_Huks_Blob *keyAlias,\n                                                 const struct OH_Huks_ParamSet *verifyParamSet,\n                                                 const struct OH_Huks_Blob *inData,\n                                                 const struct OH_Huks_Blob *signature)\n{\n    uint8_t handleV[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleVerify = {(uint32_t)sizeof(uint64_t), handleV};\n    \n    OH_Huks_Result ohResult = OH_Huks_InitSession(keyAlias, verifyParamSet, &handleVerify, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    uint8_t temp[] = \"out\";\n    struct OH_Huks_Blob verifyOut = {(uint32_t)sizeof(temp), temp};\n    ohResult = OH_Huks_UpdateSession(&handleVerify, verifyParamSet, inData, &verifyOut);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    \n    ohResult = OH_Huks_FinishSession(&handleVerify, verifyParamSet, signature, &verifyOut);\n    \n    return ohResult;\n}\n\nnapi_value SignVerifyKeySM2NoDigest(napi_env env, napi_callback_info info)\n{\n    struct OH_Huks_Blob g_keyAlias = {(uint32_t)strlen(\"test_signVerify_SM2_NoDigest\"),\n        (uint8_t *)\"test_signVerify_SM2_NoDigest\"};\n    struct OH_Huks_Blob inData = {(uint32_t)strlen(DATA_TO_SIGN_SM2_NODIGEST), (uint8_t *)DATA_TO_SIGN_SM2_NODIGEST};\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *signParamSet = nullptr;\n    struct OH_Huks_ParamSet *verifyParamSet = nullptr;\n    OH_Huks_Result ohResult;\n\n    do {\n        ohResult = InitParamSet(&genParamSet, g_genSignVerifyParamsSM2NoDigest,\n                                sizeof(g_genSignVerifyParamsSM2NoDigest) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        ohResult = InitParamSet(&signParamSet, g_signParamsSM2NoDigest,\n                                sizeof(g_signParamsSM2NoDigest) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        ohResult = InitParamSet(&verifyParamSet, g_verifyParamsSM2NoDigest,\n                                sizeof(g_verifyParamsSM2NoDigest) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        /* 1. 生成密钥 */\n        ohResult = GenerateKeySM2(&g_keyAlias, genParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        /* 2. 签名 */\n        uint8_t outDataS[SM2_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob outDataSign = {SM2_COMMON_SIZE, outDataS};\n        ohResult = SignDataSM2NoDigest(&g_keyAlias, signParamSet, &inData, &outDataSign);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        /* 3. 验签 */\n        ohResult = VerifySignatureSM2NoDigest(&g_keyAlias, verifyParamSet, &inData, &outDataSign);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n    } while (0);\n\n    (void)OH_Huks_DeleteKeyItem(&g_keyAlias, genParamSet);\n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&signParamSet);\n    OH_Huks_FreeParamSet(&verifyParamSet);\n\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsasha256pss",
      children: "RSA/SHA256/PSS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n                                   uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic struct OH_Huks_Param g_genSignVerifyParamsRsaPss[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_2048},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_SIGN | OH_HUKS_KEY_PURPOSE_VERIFY},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_PSS},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256},\n};\n\nstatic struct OH_Huks_Param g_signParamsRsaPss[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_2048},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_PSS},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_SIGN}\n};\n\nstatic struct OH_Huks_Param g_verifyParamsRsaPss[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_2048},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_PSS},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_VERIFY}\n};\n\nstatic const uint32_t RSA_COMMON_SIZE = 1024;\nstatic const char *DATA_TO_SIGN_RSA_PSS = \"Hks_RSA_PSS_Sign_Verify_Test_0000000000000000000000000000000000000000000\"\n                                          \"000000000000000000000000000000000000000000000000000000000000000000000000\"\n                                          \"000000000000000000000000000000000000000000000000000000000000000_string\";\n\n/* 1. 生成密钥 */\nstatic OH_Huks_Result GenerateKey(const struct OH_Huks_Blob *keyAlias,\n                                  const struct OH_Huks_ParamSet *genParamSet)\n{\n    return OH_Huks_GenerateKeyItem(keyAlias, genParamSet, nullptr);\n}\n\n/* 2. 签名 */\nstatic OH_Huks_Result SignData(const struct OH_Huks_Blob *keyAlias,\n                               const struct OH_Huks_ParamSet *signParamSet,\n                               const struct OH_Huks_Blob *inData,\n                               struct OH_Huks_Blob *outDataSign)\n{\n    uint8_t handleS[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleSign = {(uint32_t)sizeof(uint64_t), handleS};\n    \n    OH_Huks_Result ohResult = OH_Huks_InitSession(keyAlias, signParamSet, &handleSign, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    ohResult = OH_Huks_UpdateSession(&handleSign, signParamSet, inData, outDataSign);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    struct OH_Huks_Blob finishInData = {0, nullptr};\n    ohResult = OH_Huks_FinishSession(&handleSign, signParamSet, &finishInData, outDataSign);\n    \n    return ohResult;\n}\n\n/* 3. 验签 */\nstatic OH_Huks_Result VerifySignature(const struct OH_Huks_Blob *keyAlias,\n                                      const struct OH_Huks_ParamSet *verifyParamSet,\n                                      const struct OH_Huks_Blob *inData,\n                                      const struct OH_Huks_Blob *signature)\n{\n    uint8_t handleV[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleVerify = {(uint32_t)sizeof(uint64_t), handleV};\n    \n    OH_Huks_Result ohResult = OH_Huks_InitSession(keyAlias, verifyParamSet, &handleVerify, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    uint8_t temp[] = \"out\";\n    struct OH_Huks_Blob verifyOut = {(uint32_t)sizeof(temp), temp};\n    ohResult = OH_Huks_UpdateSession(&handleVerify, verifyParamSet, inData, &verifyOut);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    \n    ohResult = OH_Huks_FinishSession(&handleVerify, verifyParamSet, signature, &verifyOut);\n    \n    return ohResult;\n}\n\nnapi_value SignVerifyKeyRsaSha256Pss(napi_env env, napi_callback_info info)\n{\n    struct OH_Huks_Blob g_keyAlias = {(uint32_t)strlen(\"test_signVerify_RSA_SHA256_PSS\"),\n        (uint8_t *)\"test_signVerify_RSA_SHA256_PSS\"};\n    struct OH_Huks_Blob inData = {(uint32_t)strlen(DATA_TO_SIGN_RSA_PSS), (uint8_t *)DATA_TO_SIGN_RSA_PSS};\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *signParamSet = nullptr;\n    struct OH_Huks_ParamSet *verifyParamSet = nullptr;\n    OH_Huks_Result ohResult;\n\n    do {\n        ohResult = InitParamSet(&genParamSet, g_genSignVerifyParamsRsaPss,\n                                sizeof(g_genSignVerifyParamsRsaPss) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        ohResult = InitParamSet(&signParamSet, g_signParamsRsaPss, sizeof(g_signParamsRsaPss) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        ohResult = InitParamSet(&verifyParamSet, g_verifyParamsRsaPss,\n                                sizeof(g_verifyParamsRsaPss) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        ohResult = GenerateKey(&g_keyAlias, genParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        uint8_t outDataS[RSA_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob outDataSign = {RSA_COMMON_SIZE, outDataS};\n        ohResult = SignData(&g_keyAlias, signParamSet, &inData, &outDataSign);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        ohResult = VerifySignature(&g_keyAlias, verifyParamSet, &inData, &outDataSign);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n    } while (0);\n\n    (void)OH_Huks_DeleteKeyItem(&g_keyAlias, genParamSet);\n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&signParamSet);\n    OH_Huks_FreeParamSet(&verifyParamSet);\n\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsasha256pkcs1_v1_5",
      children: "RSA/SHA256/PKCS1_V1_5"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n                                   uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic struct OH_Huks_Param g_genSignVerifyParamsRsaPkcs1[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_2048},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_SIGN | OH_HUKS_KEY_PURPOSE_VERIFY},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_PKCS1_V1_5},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256},\n};\n\nstatic struct OH_Huks_Param g_signParamsRsaPkcs1[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_2048},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_SIGN},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_PKCS1_V1_5},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256}\n};\n\nstatic struct OH_Huks_Param g_verifyParamsRsaPkcs1[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_2048},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_VERIFY},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_PKCS1_V1_5},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256}\n};\n\nstatic const uint32_t RSA_COMMON_SIZE = 1024;\nstatic const char *DATA_TO_SIGN_RSA_PKCS1 = \"Hks_RSA_PKCS1_V1_5_Sign_Verify_Test_000000000000000000000000000000\"\n                                            \"000000000000000000000000000000000000000000000000000000000000000000\"\n                                            \"000000000000000000000000000000000000000000000000000000000000_string\";\n\n/* 1. 生成密钥 */\nstatic OH_Huks_Result GenerateKey(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *genParamSet)\n{\n    return OH_Huks_GenerateKeyItem(keyAlias, genParamSet, nullptr);\n}\n\n/* 2. 验签 */\nstatic OH_Huks_Result SignData(const struct OH_Huks_Blob *keyAlias,\n                               const struct OH_Huks_ParamSet *signParamSet,\n                               const struct OH_Huks_Blob *inData,\n                               struct OH_Huks_Blob *outDataSign)\n{\n    uint8_t handleS[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleSign = {(uint32_t)sizeof(uint64_t), handleS};\n    \n    OH_Huks_Result ohResult = OH_Huks_InitSession(keyAlias, signParamSet, &handleSign, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    ohResult = OH_Huks_UpdateSession(&handleSign, signParamSet, inData, outDataSign);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    struct OH_Huks_Blob finishInData = {0, nullptr};\n    ohResult = OH_Huks_FinishSession(&handleSign, signParamSet, &finishInData, outDataSign);\n    \n    return ohResult;\n}\n\n/* 3. 验签 */\nstatic OH_Huks_Result VerifySignature(const struct OH_Huks_Blob *keyAlias,\n                                      const struct OH_Huks_ParamSet *verifyParamSet,\n                                      const struct OH_Huks_Blob *inData,\n                                      const struct OH_Huks_Blob *signature)\n{\n    uint8_t handleV[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleVerify = {(uint32_t)sizeof(uint64_t), handleV};\n    \n    OH_Huks_Result ohResult = OH_Huks_InitSession(keyAlias, verifyParamSet, &handleVerify, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    uint8_t temp[] = \"out\";\n    struct OH_Huks_Blob verifyOut = {(uint32_t)sizeof(temp), temp};\n    ohResult = OH_Huks_UpdateSession(&handleVerify, verifyParamSet, inData, &verifyOut);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    \n    ohResult = OH_Huks_FinishSession(&handleVerify, verifyParamSet, signature, &verifyOut);\n    \n    return ohResult;\n}\n\nnapi_value SignVerifyKeyRsaSha256Pkcs1V15(napi_env env, napi_callback_info info)\n{\n    struct OH_Huks_Blob g_keyAlias = {(uint32_t)strlen(\"test_signVerify_RSA_SHA256_PKCS1\"),\n        (uint8_t *)\"test_signVerify_RSA_SHA256_PKCS1\"};\n    struct OH_Huks_Blob inData = {(uint32_t)strlen(DATA_TO_SIGN_RSA_PKCS1), (uint8_t *)DATA_TO_SIGN_RSA_PKCS1};\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *signParamSet = nullptr;\n    struct OH_Huks_ParamSet *verifyParamSet = nullptr;\n    OH_Huks_Result ohResult;\n\n    do {\n        ohResult = InitParamSet(&genParamSet, g_genSignVerifyParamsRsaPkcs1,\n                                sizeof(g_genSignVerifyParamsRsaPkcs1) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        ohResult = InitParamSet(&signParamSet, g_signParamsRsaPkcs1,\n                                sizeof(g_signParamsRsaPkcs1) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        ohResult = InitParamSet(&verifyParamSet, g_verifyParamsRsaPkcs1,\n                                sizeof(g_verifyParamsRsaPkcs1) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        \n        ohResult = GenerateKey(&g_keyAlias, genParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        \n        uint8_t outDataS[RSA_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob outDataSign = {RSA_COMMON_SIZE, outDataS};\n        ohResult = SignData(&g_keyAlias, signParamSet, &inData, &outDataSign);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        \n        ohResult = VerifySignature(&g_keyAlias, verifyParamSet, &inData, &outDataSign);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n    } while (0);\n\n    (void)OH_Huks_DeleteKeyItem(&g_keyAlias, genParamSet);\n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&signParamSet);\n    OH_Huks_FreeParamSet(&verifyParamSet);\n\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsasha384pss",
      children: "RSA/SHA384/PSS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n                                   uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic struct OH_Huks_Param g_genSignVerifyParamsRsaSha384Pss[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_2048},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_SIGN | OH_HUKS_KEY_PURPOSE_VERIFY},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_PSS},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA384},\n};\n\nstatic struct OH_Huks_Param g_signParamsRsaSha384Pss[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_2048},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_PSS},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA384},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_SIGN}\n};\n\nstatic struct OH_Huks_Param g_verifyParamsRsaSha384Pss[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_2048},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_PSS},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA384},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_VERIFY}\n};\n\nstatic const uint32_t RSA_COMMON_SIZE = 1024;\nstatic const char *DATA_TO_SIGN_RSA_SHA384_PSS = \"Hks_RSA_SHA384_PSS_Sign_Verify_Test_000000000000000000000000000\"\n                                                  \"000000000000000000000000000000000000000000000000000000000000\"\n                                                  \"000000000000000000000000000000000000000000000000000000_string\";\n\n/* 1. 生成密钥 */\nstatic OH_Huks_Result GenerateKeyRSA(const struct OH_Huks_Blob *keyAlias,\n                                     const struct OH_Huks_ParamSet *genParamSet)\n{\n    return OH_Huks_GenerateKeyItem(keyAlias, genParamSet, nullptr);\n}\n\n/* 2. 签名 */\nstatic OH_Huks_Result SignDataRSA(const struct OH_Huks_Blob *keyAlias,\n                                  const struct OH_Huks_ParamSet *signParamSet,\n                                  const struct OH_Huks_Blob *inData,\n                                  struct OH_Huks_Blob *outDataSign)\n{\n    uint8_t handleS[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleSign = {(uint32_t)sizeof(uint64_t), handleS};\n\n    OH_Huks_Result ohResult = OH_Huks_InitSession(keyAlias, signParamSet, &handleSign, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    ohResult = OH_Huks_UpdateSession(&handleSign, signParamSet, inData, outDataSign);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    struct OH_Huks_Blob finishInData = {0, NULL};\n    ohResult = OH_Huks_FinishSession(&handleSign, signParamSet, &finishInData, outDataSign);\n    \n    return ohResult;\n}\n\n/* 3. 验签  */\nstatic OH_Huks_Result VerifySignatureRSA(const struct OH_Huks_Blob *keyAlias,\n                                         const struct OH_Huks_ParamSet *verifyParamSet,\n                                         const struct OH_Huks_Blob *inData,\n                                         const struct OH_Huks_Blob *signature)\n{\n    uint8_t handleV[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleVerify = {(uint32_t)sizeof(uint64_t), handleV};\n\n    OH_Huks_Result ohResult = OH_Huks_InitSession(keyAlias, verifyParamSet, &handleVerify, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    uint8_t temp[] = \"out\";\n    struct OH_Huks_Blob verifyOut = {(uint32_t)sizeof(temp), temp};\n    ohResult = OH_Huks_UpdateSession(&handleVerify, verifyParamSet, inData, &verifyOut);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n\n    ohResult = OH_Huks_FinishSession(&handleVerify, verifyParamSet, signature, &verifyOut);\n\n    return ohResult;\n}\n\nnapi_value SignVerifyKey(napi_env env, napi_callback_info info)\n{\n    struct OH_Huks_Blob g_keyAlias = {(uint32_t)strlen(\"test_signVerify_RSA_SHA384_PSS\"),\n        (uint8_t *)\"test_signVerify_RSA_SHA384_PSS\"};\n    struct OH_Huks_Blob inData = {(uint32_t)strlen(DATA_TO_SIGN_RSA_SHA384_PSS),\n        (uint8_t *)DATA_TO_SIGN_RSA_SHA384_PSS};\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *signParamSet = nullptr;\n    struct OH_Huks_ParamSet *verifyParamSet = nullptr;\n    OH_Huks_Result ohResult;\n\n    do {\n        ohResult = InitParamSet(&genParamSet, g_genSignVerifyParamsRsaSha384Pss,\n                                sizeof(g_genSignVerifyParamsRsaSha384Pss) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        ohResult = InitParamSet(&signParamSet, g_signParamsRsaSha384Pss,\n                                sizeof(g_signParamsRsaSha384Pss) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        ohResult = InitParamSet(&verifyParamSet, g_verifyParamsRsaSha384Pss,\n                                sizeof(g_verifyParamsRsaSha384Pss) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        /* 1. 生成密钥 */\n        ohResult = GenerateKeyRSA(&g_keyAlias, genParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        /* 2. 签名 */\n        uint8_t outDataS[RSA_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob outDataSign = {RSA_COMMON_SIZE, outDataS};\n        ohResult = SignDataRSA(&g_keyAlias, signParamSet, &inData, &outDataSign);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        /* 3. 验签 */\n        ohResult = VerifySignatureRSA(&g_keyAlias, verifyParamSet, &inData, &outDataSign);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n    } while (0);\n\n    (void)OH_Huks_DeleteKeyItem(&g_keyAlias, genParamSet);\n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&signParamSet);\n    OH_Huks_FreeParamSet(&verifyParamSet);\n\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
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