"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["786444"], {
775361(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_key_derivation_huks_key_derivation_ndk_huks_key_derivation_ndk_md_0f9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-key-derivation-huks-key-derivation-ndk-huks-key-derivation-ndk-md-0f9.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_key_derivation_huks_key_derivation_ndk_huks_key_derivation_ndk_md_0f9_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-ndk/huks-key-derivation-ndk","title":"密钥派生(C/C++)","description":"以HKDF256和PBKDF2密钥为例，完成密钥派生。具体的场景介绍及支持的算法规格，请参考密钥派生支持的算法。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-ndk/huks-key-derivation-ndk.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-ndk","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-ndk/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"密钥派生(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-derivation-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"密钥派生(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-arkts/"},"next":{"title":"用户身份认证访问控制简介","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-identity-authentication-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-ndk/huks-key-derivation-ndk.md


const frontMatter = {
	title: '密钥派生(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-derivation-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '密钥派生(C/C++)';

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
  "value": "HKDF",
  "id": "hkdf",
  "level": 3
}, {
  "value": "PBKDF2",
  "id": "pbkdf2",
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
        id: "密钥派生cc",
        children: "密钥派生(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以HKDF256和PBKDF2密钥为例，完成密钥派生。具体的场景介绍及支持的算法规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-overview#%E6%94%AF%E6%8C%81%E7%9A%84%E7%AE%97%E6%B3%95",
        children: "密钥派生支持的算法"
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["指定密钥别名，密钥别名命名规范参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
            children: "密钥生成介绍及算法规格"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化密钥属性集，可指定参数，OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG（可选），用于标识基于该密钥派生出的密钥是否由HUKS管理。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当TAG设置为OH_HUKS_STORAGE_ONLY_USED_IN_HUKS时，表示基于该密钥派生出的密钥，由HUKS管理，可保证派生密钥全生命周期不出安全环境。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当TAG设置为OH_HUKS_STORAGE_KEY_EXPORT_ALLOWED时，表示基于该密钥派生出的密钥，返回给调用方管理，由业务自行保证密钥安全。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若业务未设置TAG的具体值，表示基于该密钥派生出的密钥，即可由HUKS管理，也可返回给调用方管理，业务可在后续派生时再选择使用何种方式保护密钥。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_generatekeyitem",
            children: "OH_Huks_GenerateKeyItem"
          }), "生成密钥，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
            children: "密钥生成"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除此之外，开发者也可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview",
        children: "密钥导入"
      }), "，导入已有的密钥。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "密钥派生"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取密钥别名，指定对应的属性参数HuksOptions。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可指定参数OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG（可选），用于标识派生得到的密钥是否由HUKS管理。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "生成"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "派生"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "规格"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_HUKS_STORAGE_ONLY_USED_IN_HUKS"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_HUKS_STORAGE_ONLY_USED_IN_HUKS"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "密钥由HUKS管理"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_HUKS_STORAGE_KEY_EXPORT_ALLOWED"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_HUKS_STORAGE_KEY_EXPORT_ALLOWED"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "密钥返回给调用方管理"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "未指定TAG具体值"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_HUKS_STORAGE_ONLY_USED_IN_HUKS"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "密钥由HUKS管理"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "未指定TAG具体值"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OH_HUKS_STORAGE_KEY_EXPORT_ALLOWED"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "密钥返回给调用方管理"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "未指定TAG具体值"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "未指定TAG具体值"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "密钥返回给调用方管理"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注：派生时指定的TAG值，不可与生成时指定的TAG值冲突。表格中仅列举有效的指定方式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_initsession",
            children: "OH_Huks_InitSession"
          }), "初始化密钥会话，并获取会话的句柄handle。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_updatesession",
            children: "OH_Huks_UpdateSession"
          }), "更新密钥会话。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_finishsession",
            children: "OH_Huks_FinishSession"
          }), "结束密钥会话，完成派生。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "删除密钥"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当密钥废弃不用时，需要调用OH_Huks_DeleteKeyItem删除密钥，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-ndk",
        children: "密钥删除"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hkdf",
      children: "HKDF"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n    uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic const uint32_t DERIVE_KEY_SIZE_32 = 32;\nstatic const uint32_t DERIVE_KEY_SIZE_256 = 256;\nstatic struct OH_Huks_Blob g_deriveKeyAlias = {(uint32_t)strlen(\"test_derive\"), (uint8_t *)\"test_derive\"};\nstatic struct OH_Huks_Param g_genDeriveParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_DERIVE},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256}};\nstatic struct OH_Huks_Param g_hkdfParams[] = {{.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_HKDF},\n                                              {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_DERIVE},\n                                              {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256},\n                                              {.tag = OH_HUKS_TAG_DERIVE_KEY_SIZE, .uint32Param = DERIVE_KEY_SIZE_32}};\nstatic struct OH_Huks_Param g_hkdfFinishParams[] = {\n    {.tag = OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG, .uint32Param = OH_HUKS_STORAGE_ONLY_USED_IN_HUKS},\n    {.tag = OH_HUKS_TAG_KEY_ALIAS, .blob = g_deriveKeyAlias},\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = DERIVE_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_DERIVE},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256}};\nstatic const uint32_t COMMON_SIZE = 2048;\nstatic const char *G_DERIVE_IN_DATA = \"Hks_HKDF_Derive_Test_0_string\";\nstatic OH_Huks_Result PerformHkdfDerivation(const struct OH_Huks_Blob *genAlias,\n    struct OH_Huks_ParamSet *hkdfParamSet,\n    struct OH_Huks_ParamSet *hkdfFinishParamSet,\n    const struct OH_Huks_Blob &inData)\n{\n    OH_Huks_Result ohResult;\n    // Init\n    uint8_t handleD[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleDerive = {sizeof(uint64_t), handleD};\n    ohResult = OH_Huks_InitSession(genAlias, hkdfParamSet, &handleDerive, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    // Update\n    uint8_t tmpOut[COMMON_SIZE] = {0};\n    struct OH_Huks_Blob outData = {COMMON_SIZE, tmpOut};\n    ohResult = OH_Huks_UpdateSession(&handleDerive, hkdfParamSet, &inData, &outData);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    // Finish\n    uint8_t outDataD[COMMON_SIZE] = {0};\n    struct OH_Huks_Blob outDataDerive = {COMMON_SIZE, outDataD};\n    ohResult = OH_Huks_FinishSession(&handleDerive, hkdfFinishParamSet, &inData, &outDataDerive);\n    return ohResult;\n}\n\nnapi_value HkdfDeriveKey(napi_env env, napi_callback_info info)\n{\n    struct OH_Huks_Blob genAlias = {(uint32_t)strlen(\"test_signVerify\"), (uint8_t *)\"test_signVerify\"};\n    struct OH_Huks_Blob inData = {(uint32_t)strlen(G_DERIVE_IN_DATA), (uint8_t *)G_DERIVE_IN_DATA};\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *hkdfParamSet = nullptr;\n    struct OH_Huks_ParamSet *hkdfFinishParamSet = nullptr;\n    OH_Huks_Result ohResult;\n    do {\n        ohResult = InitParamSet(&genParamSet, g_genDeriveParams, sizeof(g_genDeriveParams) /\n                     sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n\n        ohResult = InitParamSet(&hkdfParamSet, g_hkdfParams, sizeof(g_hkdfParams) /\n                     sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        // finish paramset\n        ohResult =\n            InitParamSet(&hkdfFinishParamSet, g_hkdfFinishParams, sizeof(g_hkdfFinishParams) /\n              sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 1. 生成密钥 */\n        ohResult = OH_Huks_GenerateKeyItem(&genAlias, genParamSet, nullptr);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 2. 派生密钥 */\n        ohResult = PerformHkdfDerivation(&genAlias, hkdfParamSet, hkdfFinishParamSet, inData);\n    } while (0);\n    (void)OH_Huks_DeleteKeyItem(&genAlias, nullptr);\n    (void)OH_Huks_DeleteKeyItem(&g_deriveKeyAlias, nullptr);\n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&hkdfParamSet);\n    OH_Huks_FreeParamSet(&hkdfFinishParamSet);\n\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pbkdf2",
      children: "PBKDF2"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n#include \"file.h\"\n\nOH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n                            uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\nstatic const uint32_t DERIVE_KEY_SIZE_32 = 32;\nstatic const uint32_t DERIVE_KEY_SIZE_256 = 256;\nstatic const uint32_t DERIVE_KEY_ITERATION = 10000;\nstatic const uint32_t SALT_SIZE = 8;\nstatic const char DERIVE_KEY_SALT[SALT_SIZE] = \"mysalt1\";\nstatic struct OH_Huks_Blob g_deriveKeyAlias = {(uint32_t)strlen(\"test_derive\"), (uint8_t *)\"test_derive\"};\nstatic struct OH_Huks_Param g_genDeriveParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_DERIVE},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256}};\nstatic struct OH_Huks_Param g_hkdfParams[] = {{.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_PBKDF2},\n                                              {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_DERIVE},\n                                              {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256},\n                                              {.tag = OH_HUKS_TAG_DERIVE_KEY_SIZE, .uint32Param = DERIVE_KEY_SIZE_32},\n                                              {.tag = OH_HUKS_TAG_ITERATION, .uint32Param = DERIVE_KEY_ITERATION},\n                                              {.tag = OH_HUKS_TAG_SALT,\n                                               .blob = {\n                                                   .size = SALT_SIZE,\n                                                   .data = (uint8_t *) DERIVE_KEY_SALT\n                                               }}};\nstatic struct OH_Huks_Param g_hkdfFinishParams[] = {\n    {.tag = OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG, .uint32Param = OH_HUKS_STORAGE_ONLY_USED_IN_HUKS},\n    {.tag = OH_HUKS_TAG_KEY_ALIAS, .blob = g_deriveKeyAlias},\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = DERIVE_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_DERIVE},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_ECB}};\nstatic const uint32_t COMMON_SIZE = 1024;\nstatic const char *G_DERIVE_IN_DATA = \"Hks_PBKDF2_Derive_Test_0_string\";\nstatic OH_Huks_Result PerformPbkdfDerivation(const struct OH_Huks_Blob *genAlias,\n    struct OH_Huks_ParamSet *hkdfParamSet,\n    struct OH_Huks_ParamSet *hkdfFinishParamSet,\n    const struct OH_Huks_Blob &inData)\n{\n    OH_Huks_Result ohResult;\n    // Init\n    uint8_t handleD[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleDerive = {sizeof(uint64_t), handleD};\n    ohResult = OH_Huks_InitSession(genAlias, hkdfParamSet, &handleDerive, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    // Update\n    uint8_t tmpOut[COMMON_SIZE] = {0};\n    struct OH_Huks_Blob outData = {COMMON_SIZE, tmpOut};\n    ohResult = OH_Huks_UpdateSession(&handleDerive, hkdfParamSet, &inData, &outData);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    // Finish\n    uint8_t outDataD[COMMON_SIZE] = {0};\n    struct OH_Huks_Blob outDataDerive = {COMMON_SIZE, outDataD};\n    ohResult = OH_Huks_FinishSession(&handleDerive, hkdfFinishParamSet, &inData, &outDataDerive);\n    return ohResult;\n}\n\nnapi_value PbkdfDeriveKey(napi_env env, napi_callback_info info)\n{\n    struct OH_Huks_Blob genAlias = {(uint32_t)strlen(\"test_signVerify\"), (uint8_t *)\"test_signVerify\"};\n    struct OH_Huks_Blob inData = {(uint32_t)strlen(G_DERIVE_IN_DATA), (uint8_t *)G_DERIVE_IN_DATA};\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *hkdfParamSet = nullptr;\n    struct OH_Huks_ParamSet *hkdfFinishParamSet = nullptr;\n    OH_Huks_Result ohResult;\n    do {\n        ohResult = InitParamSet(&genParamSet, g_genDeriveParams, sizeof(g_genDeriveParams) /\n                     sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = InitParamSet(&hkdfParamSet, g_hkdfParams, sizeof(g_hkdfParams) /\n                     sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult =InitParamSet(&hkdfFinishParamSet, g_hkdfFinishParams, sizeof(g_hkdfFinishParams) /\n              sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 1. 生成密钥 */\n        ohResult = OH_Huks_GenerateKeyItem(&genAlias, genParamSet, nullptr);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 2. 派生密钥 */\n        ohResult = PerformPbkdfDerivation(&genAlias, hkdfParamSet, hkdfFinishParamSet, inData);\n    } while (0);\n    (void)OH_Huks_DeleteKeyItem(&genAlias, nullptr);\n    (void)OH_Huks_DeleteKeyItem(&g_deriveKeyAlias, nullptr);\n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&hkdfParamSet);\n    OH_Huks_FreeParamSet(&hkdfFinishParamSet);\n\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
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