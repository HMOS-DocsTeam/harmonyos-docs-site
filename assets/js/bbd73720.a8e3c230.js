"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["984629"], {
740175(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_key_agreement_huks_key_agreement_ndk_huks_key_agreement_ndk_md_bbd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-key-agreement-huks-key-agreement-ndk-huks-key-agreement-ndk-md-bbd.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_key_agreement_huks_key_agreement_ndk_huks_key_agreement_ndk_md_bbd_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-ndk/huks-key-agreement-ndk","title":"密钥协商(C/C++)","description":"以X25519、DH和ECDH协商密钥类型为例，在密钥由HUKS管理的情况下，完成密钥协商。具体的场景介绍及支持的算法规格，请参考密钥协商支持的算法。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-ndk/huks-key-agreement-ndk.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-ndk","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-ndk/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"密钥协商(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-agreement-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"密钥协商(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-arkts/"},"next":{"title":"密钥派生介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-ndk/huks-key-agreement-ndk.md


const frontMatter = {
	title: '密钥协商(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-agreement-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '密钥协商(C/C++)';

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
  "value": "X25519非对称密钥协商用例",
  "id": "x25519非对称密钥协商用例",
  "level": 3
}, {
  "value": "DH密钥协商用例",
  "id": "dh密钥协商用例",
  "level": 3
}, {
  "value": "ECDH密钥协商用例",
  "id": "ecdh密钥协商用例",
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
        id: "密钥协商cc",
        children: "密钥协商(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以X25519、DH和ECDH协商密钥类型为例，在密钥由HUKS管理的情况下，完成密钥协商。具体的场景介绍及支持的算法规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-overview#%E6%94%AF%E6%8C%81%E7%9A%84%E7%AE%97%E6%B3%95",
        children: "密钥协商支持的算法"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备A、设备B各自生成一个非对称密钥，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
        children: "密钥生成"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview",
        children: "密钥导入"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥生成时，可指定参数，OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG（可选），用于标识此步骤生成的密钥是否由HUKS管理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "导出密钥"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备A、B导出非对称密钥对的公钥材料，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-export-key/huks-export-key-arkts",
        children: "密钥导出"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "密钥协商"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备A、B分别基于本端私钥和对端设备的公钥，协商出共享密钥。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥协商时，可指定参数OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG（可选），用于标识协商得到的密钥是否由HUKS管理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当TAG设置为OH_HUKS_STORAGE_ONLY_USED_IN_HUKS时，表示基于该密钥协商出的密钥，由HUKS管理，可保证协商密钥全生命周期不出安全环境。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当TAG设置为OH_HUKS_STORAGE_KEY_EXPORT_ALLOWED时，表示基于该密钥协商出的密钥，返回给调用方管理，由业务自行保证密钥安全。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若业务未设置TAG的具体值，表示基于该密钥协商出的密钥，既可由HUKS管理，也可返回给调用方管理，业务可在后续协商时再选择使用何种方式保护密钥。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "生成"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "协商"
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
      children: "注：协商时指定的TAG值，不可与生成时指定的TAG值冲突。表格中仅列举有效的指定方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "删除密钥"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当密钥废弃不用时，设备A、B均需要删除密钥，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-ndk",
        children: "密钥删除"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面分别以X25519、DH和ECDH密钥为例，进行协商。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "x25519非对称密钥协商用例",
      children: "X25519非对称密钥协商用例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "准备X25519密钥协商材料："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n#include \"file.h\"\n\n/* 初始化参数 */\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n    uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\nstatic struct OH_Huks_Blob g_keyAliasFinal1001 = {(uint32_t)strlen(\"HksECDHAgreeKeyAliasTest001_1_final\"),\n                                                  (uint8_t *)\"HksECDHAgreeKeyAliasTest001_1_final\"};\n/* 集成密钥参数集 */\nstatic struct OH_Huks_Param g_genAgreeParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_X25519},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_CURVE25519_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};\nstatic struct OH_Huks_Param g_agreeParamsInit01[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_X25519},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_CURVE25519_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};\nstatic struct OH_Huks_Param g_agreeParamsFinish01[] = {\n    {.tag = OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG, .uint32Param = OH_HUKS_STORAGE_ONLY_USED_IN_HUKS},\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_ALIAS, .blob = g_keyAliasFinal1001},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_ECB},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};\nstatic struct OH_Huks_Blob g_keyAliasFinal2001 = {(uint32_t)strlen(\"HksX25519AgreeKeyAliasTest001_2_final\"),\n                                                  (uint8_t *)\"HksX25519AgreeKeyAliasTest001_2_final\"};\nstatic struct OH_Huks_Param g_agreeParamsInit02[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_X25519},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_CURVE25519_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};\nstatic struct OH_Huks_Param g_agreeParamsFinish02[] = {\n    {.tag = OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG, .uint32Param = OH_HUKS_STORAGE_ONLY_USED_IN_HUKS},\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_ALIAS, .blob = g_keyAliasFinal2001},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_ECB},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};\nstatic const uint32_t X25519_COMMON_SIZE = 256;\nstatic struct OH_Huks_Blob g_keyAlias01001 = {(uint32_t)strlen(\"HksX25519AgreeKeyAliasTest001_1\"),\n                                              (uint8_t *)\"HksX25519AgreeKeyAliasTest001_1\"};\nstatic struct OH_Huks_Blob g_keyAlias02001 = {(uint32_t)strlen(\"HksX25519AgreeKeyAliasTest001_2\"),\n                                              (uint8_t *)\"HksX25519AgreeKeyAliasTest001_2\"};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行密钥协商："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 导出密钥 */\nOH_Huks_Result HksX25519AgreeExport(const struct OH_Huks_Blob *keyAlias1, const struct OH_Huks_Blob *keyAlias2,\n    struct OH_Huks_Blob *publicKey1, struct OH_Huks_Blob *publicKey2,\n    const struct OH_Huks_ParamSet *genParamSet)\n{\n    OH_Huks_Result ret = OH_Huks_ExportPublicKeyItem(keyAlias1, genParamSet, publicKey1);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_ExportPublicKeyItem(keyAlias2, genParamSet, publicKey2);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    return ret;\n}\nstatic const char *IN_DATA = \"Hks_X25519_Agree_Test\";\n/* 协商密钥操作 */\nOH_Huks_Result HksX25519AgreeFinish(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_Blob *publicKey,\n    const struct OH_Huks_ParamSet *initParamSet,\n    const struct OH_Huks_ParamSet *finishParamSet, struct OH_Huks_Blob *outData)\n{\n    struct OH_Huks_Blob inData = {(uint32_t)strlen(IN_DATA), (uint8_t *)IN_DATA};\n    uint8_t handleU[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handle = {sizeof(uint64_t), handleU};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, initParamSet, &handle, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    uint8_t outDataU[X25519_COMMON_SIZE] = {0};\n    struct OH_Huks_Blob outDataUpdate = {X25519_COMMON_SIZE, outDataU};\n    ret = OH_Huks_UpdateSession(&handle, initParamSet, publicKey, &outDataUpdate);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handle, finishParamSet, &inData, outData);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    return ret;\n}\n\nstatic OH_Huks_Result InitializeAgreeParamSets(struct OH_Huks_ParamSet **genParamSet,\n    struct OH_Huks_ParamSet **initParamSet01,\n    struct OH_Huks_ParamSet **finishParamSet01,\n    struct OH_Huks_ParamSet **initParamSet02,\n    struct OH_Huks_ParamSet **finishParamSet02)\n{\n    OH_Huks_Result ohResult;\n    \n    ohResult = InitParamSet(genParamSet, g_genAgreeParams,\n                            sizeof(g_genAgreeParams) / sizeof(OH_Huks_Param));\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    ohResult = InitParamSet(initParamSet01, g_agreeParamsInit01,\n                            sizeof(g_agreeParamsInit01) / sizeof(OH_Huks_Param));\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    ohResult = InitParamSet(finishParamSet01, g_agreeParamsFinish01,\n                            sizeof(g_agreeParamsFinish01) / sizeof(OH_Huks_Param));\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    ohResult = InitParamSet(initParamSet02, g_agreeParamsInit02,\n                            sizeof(g_agreeParamsInit02) / sizeof(OH_Huks_Param));\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    ohResult = InitParamSet(finishParamSet02, g_agreeParamsFinish02,\n                            sizeof(g_agreeParamsFinish02) / sizeof(OH_Huks_Param));\n    return ohResult;\n}\n\nstatic OH_Huks_Result GenerateKeyPair(struct OH_Huks_ParamSet *genParamSet)\n{\n    OH_Huks_Result ohResult;\n    \n    /* 设备A生成密钥 */\n    ohResult = OH_Huks_GenerateKeyItem(&g_keyAlias01001, genParamSet, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    \n    /* 设备B生成密钥 */\n    ohResult = OH_Huks_GenerateKeyItem(&g_keyAlias02001, genParamSet, nullptr);\n    return ohResult;\n}\n\nstatic OH_Huks_Result KeyAgreement(struct OH_Huks_Blob *g_keyAlias,\n    struct OH_Huks_Blob *publicKey,\n    struct OH_Huks_Blob *outData,\n    struct OH_Huks_ParamSet *initParamSet,\n    struct OH_Huks_ParamSet *finishParamSet)\n{\n    OH_Huks_Result ohResult;\n    \n    ohResult = MallocAndCheckBlobData(outData, outData->size);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    /* 协商密钥 */\n    ohResult = HksX25519AgreeFinish(g_keyAlias, publicKey, initParamSet, finishParamSet, outData);\n    return ohResult;\n}\n\nstatic void CleanKey(struct OH_Huks_Blob *genKeyAlias,\n    struct OH_Huks_Blob *genKeyAliasFinal,\n    struct OH_Huks_ParamSet *genParamSet,\n    struct OH_Huks_ParamSet **initParamSet,\n    struct OH_Huks_ParamSet **finishParamSet)\n{\n    OH_Huks_DeleteKeyItem(genKeyAlias, genParamSet);\n    OH_Huks_DeleteKeyItem(genKeyAliasFinal, NULL);\n    OH_Huks_FreeParamSet(initParamSet);\n    OH_Huks_FreeParamSet(finishParamSet);\n}\n\n/* 协商密钥整体流程 */\nnapi_value X25519AgreeKey(napi_env env, napi_callback_info info)\n{\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *initParamSet01 = nullptr;\n    struct OH_Huks_ParamSet *finishParamSet01 = nullptr;\n    struct OH_Huks_ParamSet *initParamSet02 = nullptr;\n    struct OH_Huks_ParamSet *finishParamSet02 = nullptr;\n    struct OH_Huks_Blob publicKey01 = {.size = OH_HUKS_AES_KEY_SIZE_256, .data = nullptr};\n    struct OH_Huks_Blob publicKey02 = {.size = OH_HUKS_AES_KEY_SIZE_256, .data = nullptr};\n    struct OH_Huks_Blob outData01 = {.size = X25519_COMMON_SIZE, .data = nullptr};\n    struct OH_Huks_Blob outData02 = {.size = X25519_COMMON_SIZE, .data = nullptr};\n    OH_Huks_Result ohResult;\n    do {\n        /* 1.确定密钥别名集成密钥参数集 */\n        ohResult = InitializeAgreeParamSets(&genParamSet, &initParamSet01, &finishParamSet01,\n                                            &initParamSet02, &finishParamSet02);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 2.设备A和设备B生成密钥 */\n        ohResult = GenerateKeyPair(genParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = MallocAndCheckBlobData(&publicKey01, publicKey01.size);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = MallocAndCheckBlobData(&publicKey02, publicKey02.size);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 3.设备A、B导出公钥 */\n        ohResult = HksX25519AgreeExport(&g_keyAlias01001, &g_keyAlias02001, &publicKey01, &publicKey02, genParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 4.设备A、B执行密钥协商 */\n        ohResult = KeyAgreement(&g_keyAlias01001, &publicKey02, &outData01, initParamSet01, finishParamSet01);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = KeyAgreement(&g_keyAlias02001, &publicKey01, &outData02, initParamSet02, finishParamSet02);\n    } while (0);\n    free(publicKey01.data);\n    free(publicKey02.data);\n    free(outData01.data);\n    free(outData02.data);\n    /* 5.设备A、B删除密钥 */\n    CleanKey(&g_keyAlias01001, &g_keyAliasFinal1001, genParamSet, &initParamSet01, &finishParamSet01);\n    CleanKey(&g_keyAlias02001, &g_keyAliasFinal2001, genParamSet, &initParamSet02, &finishParamSet02);\n    OH_Huks_FreeParamSet(&genParamSet);\n\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dh密钥协商用例",
      children: "DH密钥协商用例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "准备DH密钥协商材料："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n#include \"file.h\"\n\n/* 初始化参数 */\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n    uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\nstatic struct OH_Huks_Blob g_keyAliasFinal1001 = {(uint32_t)strlen(\"HksDHAgreeKeyAliasTest001_1_final\"),\n                                                  (uint8_t *)\"HksDHAgreeKeyAliasTest001_1_final\"};\n/* 集成密钥参数集 */\nstatic struct OH_Huks_Param g_genAgreeParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_DH},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_DH_KEY_SIZE_2048}};\nstatic struct OH_Huks_Param g_agreeParamsInit01[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_DH},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_DH_KEY_SIZE_2048}};\nstatic struct OH_Huks_Param g_agreeParamsFinish01[] = {\n    {.tag = OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG, .uint32Param = OH_HUKS_STORAGE_KEY_EXPORT_ALLOWED},\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_ALIAS, .blob = g_keyAliasFinal1001},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_ECB},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};\nstatic struct OH_Huks_Param g_agreeParamsFinish01_2[] = {\n    {.tag = OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG, .uint32Param = OH_HUKS_STORAGE_ONLY_USED_IN_HUKS},\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_ALIAS, .blob = g_keyAliasFinal1001},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_ECB},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};\nstatic struct OH_Huks_Blob g_keyAliasFinal2001 = {(uint32_t)strlen(\"HksDHAgreeKeyAliasTest001_2_final\"),\n                                                  (uint8_t *)\"HksDHAgreeKeyAliasTest001_2_final\"};\nstatic struct OH_Huks_Param g_agreeParamsInit02[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_DH},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_DH_KEY_SIZE_2048}};\nstatic struct OH_Huks_Param g_agreeParamsFinish02[] = {\n    {.tag = OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG, .uint32Param = OH_HUKS_STORAGE_KEY_EXPORT_ALLOWED},\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_ALIAS, .blob = g_keyAliasFinal2001},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_ECB},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};\nstatic struct OH_Huks_Param g_agreeParamsFinish02_2[] = {\n    {.tag = OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG, .uint32Param = OH_HUKS_STORAGE_ONLY_USED_IN_HUKS},\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_ALIAS, .blob = g_keyAliasFinal2001},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_ECB},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};\nstatic const uint32_t DH_COMMON_SIZE = 2048;\nstatic struct OH_Huks_Blob g_keyAlias01001 = {(uint32_t)strlen(\"HksDHAgreeKeyAliasTest001_1\"),\n                                              (uint8_t *)\"HksDHAgreeKeyAliasTest001_1\"};\nstatic struct OH_Huks_Blob g_keyAlias02001 = {(uint32_t)strlen(\"HksDHAgreeKeyAliasTest001_2\"),\n                                              (uint8_t *)\"HksDHAgreeKeyAliasTest001_2\"};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行密钥协商："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static OH_Huks_Result MallocAndCheckBlobData(struct OH_Huks_Blob *blob, const uint32_t blobSize)\n{\n    struct OH_Huks_Result ret;\n    ret.errorCode = OH_HUKS_SUCCESS;\n    if (blobSize == 0 || blobSize > DH_COMMON_SIZE) {\n        ret.errorCode = OH_HUKS_ERR_CODE_INTERNAL_ERROR;\n        return ret;\n    }\n    blob->data = (uint8_t *)malloc(blobSize);\n    if (blob->data == NULL) {\n        ret.errorCode = OH_HUKS_ERR_CODE_INTERNAL_ERROR;\n    }\n    return ret;\n}\n/* 导出密钥 */\nOH_Huks_Result HksDHAgreeExport(const struct OH_Huks_Blob *keyAlias1, const struct OH_Huks_Blob *keyAlias2,\n    struct OH_Huks_Blob *publicKey1, struct OH_Huks_Blob *publicKey2,\n    const struct OH_Huks_ParamSet *genParamSet)\n{\n    OH_Huks_Result ret = OH_Huks_ExportPublicKeyItem(keyAlias1, genParamSet, publicKey1);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_ExportPublicKeyItem(keyAlias2, genParamSet, publicKey2);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    return ret;\n}\nstatic const char *IN_DATA = \"Hks_DH_Agree_Test\";\n/* 协商密钥操作 */\nOH_Huks_Result HksDHAgreeFinish(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_Blob *publicKey,\n    const struct OH_Huks_ParamSet *initParamSet,\n    const struct OH_Huks_ParamSet *finishParamSet, struct OH_Huks_Blob *outData)\n{\n    struct OH_Huks_Blob inData = {(uint32_t)strlen(IN_DATA), (uint8_t *)IN_DATA};\n    uint8_t handleU[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handle = {sizeof(uint64_t), handleU};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, initParamSet, &handle, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    uint8_t outDataU[DH_COMMON_SIZE] = {0};\n    struct OH_Huks_Blob outDataUpdate = {DH_COMMON_SIZE, outDataU};\n    ret = OH_Huks_UpdateSession(&handle, initParamSet, publicKey, &outDataUpdate);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handle, finishParamSet, &inData, outData);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    return ret;\n}\n\nstatic OH_Huks_Result InitializeAgreeParamSets(struct OH_Huks_ParamSet **genParamSet,\n    struct OH_Huks_ParamSet **initParamSet01,\n    struct OH_Huks_ParamSet **finishParamSet01,\n    struct OH_Huks_ParamSet **initParamSet02,\n    struct OH_Huks_ParamSet **finishParamSet02)\n{\n    OH_Huks_Result ohResult;\n    \n    ohResult = InitParamSet(genParamSet, g_genAgreeParams,\n                            sizeof(g_genAgreeParams) / sizeof(OH_Huks_Param));\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    ohResult = InitParamSet(initParamSet01, g_agreeParamsInit01,\n                            sizeof(g_agreeParamsInit01) / sizeof(OH_Huks_Param));\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    ohResult = InitParamSet(finishParamSet01, g_agreeParamsFinish01,\n                            sizeof(g_agreeParamsFinish01) / sizeof(OH_Huks_Param));\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    ohResult = InitParamSet(initParamSet02, g_agreeParamsInit02,\n                            sizeof(g_agreeParamsInit02) / sizeof(OH_Huks_Param));\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    ohResult = InitParamSet(finishParamSet02, g_agreeParamsFinish02,\n                            sizeof(g_agreeParamsFinish02) / sizeof(OH_Huks_Param));\n    return ohResult;\n}\n\nstatic OH_Huks_Result GenerateKeyPair(struct OH_Huks_ParamSet *genParamSet)\n{\n    OH_Huks_Result ohResult;\n    \n    /* 设备A生成密钥 */\n    ohResult = OH_Huks_GenerateKeyItem(&g_keyAlias01001, genParamSet, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    \n    /* 设备B生成密钥 */\n    ohResult = OH_Huks_GenerateKeyItem(&g_keyAlias02001, genParamSet, nullptr);\n    return ohResult;\n}\n\nstatic OH_Huks_Result KeyAgreement(struct OH_Huks_Blob *g_keyAlias,\n    struct OH_Huks_Blob *publicKey,\n    struct OH_Huks_Blob *outData,\n    struct OH_Huks_ParamSet *initParamSet,\n    struct OH_Huks_ParamSet *finishParamSet)\n{\n    OH_Huks_Result ohResult;\n    \n    ohResult = MallocAndCheckBlobData(outData, outData->size);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    /* 协商密钥 */\n    ohResult = HksDHAgreeFinish(g_keyAlias, publicKey, initParamSet, finishParamSet, outData);\n    return ohResult;\n}\n\nstatic void CleanKey(struct OH_Huks_Blob *genKeyAlias,\n    struct OH_Huks_Blob *genKeyAliasFinal,\n    struct OH_Huks_ParamSet *genParamSet,\n    struct OH_Huks_ParamSet **initParamSet,\n    struct OH_Huks_ParamSet **finishParamSet)\n{\n    OH_Huks_DeleteKeyItem(genKeyAlias, genParamSet);\n    OH_Huks_DeleteKeyItem(genKeyAliasFinal, NULL);\n    OH_Huks_FreeParamSet(initParamSet);\n    OH_Huks_FreeParamSet(finishParamSet);\n}\n\n/* 协商密钥整体流程 */\nnapi_value DhAgreeKey(napi_env env, napi_callback_info info)\n{\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *initParamSet01 = nullptr;\n    struct OH_Huks_ParamSet *finishParamSet01 = nullptr;\n    struct OH_Huks_ParamSet *initParamSet02 = nullptr;\n    struct OH_Huks_ParamSet *finishParamSet02 = nullptr;\n    struct OH_Huks_Blob publicKey01 = {.size = DH_COMMON_SIZE, .data = nullptr};\n    struct OH_Huks_Blob publicKey02 = {.size = DH_COMMON_SIZE, .data = nullptr};\n    struct OH_Huks_Blob outData01 = {.size = DH_COMMON_SIZE, .data = nullptr};\n    struct OH_Huks_Blob outData02 = {.size = DH_COMMON_SIZE, .data = nullptr};\n\n    OH_Huks_Result ohResult;\n    do {\n        /* 1.确定密钥别名集成密钥参数集 */\n        ohResult = InitializeAgreeParamSets(&genParamSet, &initParamSet01, &finishParamSet01,\n                                            &initParamSet02, &finishParamSet02);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 2.设备A和设备B生成密钥 */\n        ohResult = GenerateKeyPair(genParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = MallocAndCheckBlobData(&publicKey01, publicKey01.size);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = MallocAndCheckBlobData(&publicKey02, publicKey02.size);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 3.设备A、B导出公钥 */\n        ohResult = HksDHAgreeExport(&g_keyAlias01001, &g_keyAlias02001, &publicKey01, &publicKey02, genParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 4.设备A、B执行密钥协商 */\n        ohResult = KeyAgreement(&g_keyAlias01001, &publicKey02, &outData01, initParamSet01, finishParamSet01);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = KeyAgreement(&g_keyAlias02001, &publicKey01, &outData02, initParamSet02, finishParamSet02);\n    } while (0);\n    free(publicKey01.data);\n    free(publicKey02.data);\n    free(outData01.data);\n    free(outData02.data);\n    /* 5.设备A、B删除密钥 */\n    CleanKey(&g_keyAlias01001, &g_keyAliasFinal1001, genParamSet, &initParamSet01, &finishParamSet01);\n    CleanKey(&g_keyAlias02001, &g_keyAliasFinal2001, genParamSet, &initParamSet02, &finishParamSet02);\n    OH_Huks_FreeParamSet(&genParamSet);\n\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ecdh密钥协商用例",
      children: "ECDH密钥协商用例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "准备ECDH密钥协商材料："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n#include \"file.h\"\n\n/* 初始化参数 */\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n    uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\nstatic const uint32_t IV_SIZE = 16;\nstatic uint8_t IV[IV_SIZE] = {0}; // this is a test value, for real use the iv should be different every time\nstatic struct OH_Huks_Blob g_keyAliasFinal1001 = {(uint32_t)strlen(\"HksECDHAgreeKeyAliasTest001_1_final\"),\n                                                  (uint8_t *)\"HksECDHAgreeKeyAliasTest001_1_final\"};\n/* 集成密钥参数集 */\nstatic struct OH_Huks_Param g_genAgreeParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_ECC},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_ECC_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};\nstatic struct OH_Huks_Param g_agreeParamsInit01[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_ECDH},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_ECC_KEY_SIZE_256}};\nstatic struct OH_Huks_Param g_agreeParamsFinish01[] = {\n    {.tag = OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG, .uint32Param = OH_HUKS_STORAGE_ONLY_USED_IN_HUKS},\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_ALIAS, .blob = g_keyAliasFinal1001},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_CBC}};\nstatic struct OH_Huks_Blob g_keyAliasFinal2001 = {(uint32_t)strlen(\"HksECDHAgreeKeyAliasTest001_2_final\"),\n                                                  (uint8_t *)\"HksECDHAgreeKeyAliasTest001_2_final\"};\nstatic struct OH_Huks_Param g_agreeParamsInit02[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_ECDH},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_ECC_KEY_SIZE_256}};\nstatic struct OH_Huks_Param g_agreeParamsFinish02[] = {\n    {.tag = OH_HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG, .uint32Param = OH_HUKS_STORAGE_ONLY_USED_IN_HUKS},\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},\n    {.tag = OH_HUKS_TAG_KEY_ALIAS, .blob = g_keyAliasFinal2001},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_CBC}};\nstatic const uint32_t ECDH_COMMON_SIZE = 1024;\nstatic struct OH_Huks_Blob g_keyAlias01001 = {(uint32_t)strlen(\"HksECDHAgreeKeyAliasTest001_1\"),\n                                              (uint8_t *)\"HksECDHAgreeKeyAliasTest001_1\"};\nstatic struct OH_Huks_Blob g_keyAlias02001 = {(uint32_t)strlen(\"HksECDHAgreeKeyAliasTest001_2\"),\n                                              (uint8_t *)\"HksECDHAgreeKeyAliasTest001_2\"};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECDH密钥协商的功能函数实现，包括内存分配、参数初始化、密钥生成、和资源清理等："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static OH_Huks_Result MallocAndCheckBlobData(struct OH_Huks_Blob *blob, const uint32_t blobSize)\n{\n    struct OH_Huks_Result ret;\n    ret.errorCode = OH_HUKS_SUCCESS;\n    if (blobSize == 0 || blobSize > ECDH_COMMON_SIZE) {\n        ret.errorCode = OH_HUKS_ERR_CODE_INTERNAL_ERROR;\n        return ret;\n    }\n    blob->data = (uint8_t *)malloc(blobSize);\n    if (blob->data == NULL) {\n        ret.errorCode = OH_HUKS_ERR_CODE_INTERNAL_ERROR;\n    }\n    return ret;\n}\n\n/* 导出密钥 */\nOH_Huks_Result HksEcdhAgreeExport(const struct OH_Huks_Blob *keyAlias1, const struct OH_Huks_Blob *keyAlias2,\n                                  struct OH_Huks_Blob *publicKey1, struct OH_Huks_Blob *publicKey2,\n                                  const struct OH_Huks_ParamSet *genParamSet)\n{\n    OH_Huks_Result ret = OH_Huks_ExportPublicKeyItem(keyAlias1, genParamSet, publicKey1);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_ExportPublicKeyItem(keyAlias2, genParamSet, publicKey2);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    return ret;\n}\nstatic const char *IN_DATA = \"Hks_ECDH_Agree_Test_000000000000000000000000000000000000000000000000000000000000\"\n                              \"00000000000000000000000000000000000000000000000000000000000000000000000000000000\"\n                              \"0000000000000000000000000000000000000000000000000000000000000000000000000_string\";\n/* 协商密钥操作 */\nOH_Huks_Result HksEcdhAgreeFinish(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_Blob *publicKey,\n                                  const struct OH_Huks_ParamSet *initParamSet,\n                                  const struct OH_Huks_ParamSet *finishParamSet, struct OH_Huks_Blob *outData)\n{\n    struct OH_Huks_Blob inData = {(uint32_t)strlen(IN_DATA), (uint8_t *)IN_DATA};\n    uint8_t handleU[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handle = {sizeof(uint64_t), handleU};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, initParamSet, &handle, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    uint8_t outDataU[ECDH_COMMON_SIZE] = {0};\n    struct OH_Huks_Blob outDataUpdate = {ECDH_COMMON_SIZE, outDataU};\n    ret = OH_Huks_UpdateSession(&handle, initParamSet, publicKey, &outDataUpdate);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handle, finishParamSet, &inData, outData);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    return ret;\n}\n\n\nstatic OH_Huks_Result InitializeAgreeParamSets(struct OH_Huks_ParamSet **genParamSet,\n    struct OH_Huks_ParamSet **initParamSet01,\n    struct OH_Huks_ParamSet **finishParamSet01,\n    struct OH_Huks_ParamSet **initParamSet02,\n    struct OH_Huks_ParamSet **finishParamSet02)\n{\n    OH_Huks_Result ohResult;\n    \n    ohResult = InitParamSet(genParamSet, g_genAgreeParams,\n                            sizeof(g_genAgreeParams) / sizeof(OH_Huks_Param));\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    ohResult = InitParamSet(initParamSet01, g_agreeParamsInit01,\n                            sizeof(g_agreeParamsInit01) / sizeof(OH_Huks_Param));\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    ohResult = InitParamSet(finishParamSet01, g_agreeParamsFinish01,\n                            sizeof(g_agreeParamsFinish01) / sizeof(OH_Huks_Param));\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    ohResult = InitParamSet(initParamSet02, g_agreeParamsInit02,\n                            sizeof(g_agreeParamsInit02) / sizeof(OH_Huks_Param));\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    ohResult = InitParamSet(finishParamSet02, g_agreeParamsFinish02,\n                            sizeof(g_agreeParamsFinish02) / sizeof(OH_Huks_Param));\n    return ohResult;\n}\n\nstatic OH_Huks_Result GenerateKeyPair(struct OH_Huks_ParamSet *genParamSet)\n{\n    OH_Huks_Result ohResult;\n    \n    /* 设备A生成密钥 */\n    ohResult = OH_Huks_GenerateKeyItem(&g_keyAlias01001, genParamSet, nullptr);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    \n    /* 设备B生成密钥 */\n    ohResult = OH_Huks_GenerateKeyItem(&g_keyAlias02001, genParamSet, nullptr);\n    return ohResult;\n}\n\nstatic OH_Huks_Result KeyAgreement(struct OH_Huks_Blob *g_keyAlias,\n    struct OH_Huks_Blob *publicKey,\n    struct OH_Huks_Blob *outData,\n    struct OH_Huks_ParamSet *initParamSet,\n    struct OH_Huks_ParamSet *finishParamSet)\n{\n    OH_Huks_Result ohResult;\n    \n    ohResult = MallocAndCheckBlobData(outData, outData->size);\n    if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n        return ohResult;\n    }\n    /* 协商密钥 */\n    ohResult = HksEcdhAgreeFinish(g_keyAlias, publicKey, initParamSet, finishParamSet, outData);\n    return ohResult;\n}\n\nstatic void CleanKey(struct OH_Huks_Blob *genKeyAlias,\n    struct OH_Huks_Blob *genKeyAliasFinal,\n    struct OH_Huks_ParamSet *genParamSet,\n    struct OH_Huks_ParamSet **initParamSet,\n    struct OH_Huks_ParamSet **finishParamSet)\n{\n    OH_Huks_DeleteKeyItem(genKeyAlias, genParamSet);\n    OH_Huks_DeleteKeyItem(genKeyAliasFinal, NULL);\n    OH_Huks_FreeParamSet(initParamSet);\n    OH_Huks_FreeParamSet(finishParamSet);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECDH密钥协商的完整流程实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 协商密钥整体流程 */\nnapi_value EcdhAgreeKey(napi_env env, napi_callback_info info)\n{\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *initParamSet01 = nullptr;\n    struct OH_Huks_ParamSet *finishParamSet01 = nullptr;\n    struct OH_Huks_ParamSet *initParamSet02 = nullptr;\n    struct OH_Huks_ParamSet *finishParamSet02 = nullptr;\n    struct OH_Huks_Blob publicKey01 = {.size = OH_HUKS_ECC_KEY_SIZE_256, .data = nullptr};\n    struct OH_Huks_Blob publicKey02 = {.size = OH_HUKS_ECC_KEY_SIZE_256, .data = nullptr};\n    struct OH_Huks_Blob outData01 = {.size = ECDH_COMMON_SIZE, .data = nullptr};\n    struct OH_Huks_Blob outData02 = {.size = ECDH_COMMON_SIZE, .data = nullptr};\n    OH_Huks_Result ohResult;\n    do {\n        /* 1.确定密钥别名集成密钥参数集 */\n        ohResult = InitializeAgreeParamSets(&genParamSet, &initParamSet01, &finishParamSet01,\n                                            &initParamSet02, &finishParamSet02);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 2.设备A和设备B生成密钥 */\n        ohResult = GenerateKeyPair(genParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = MallocAndCheckBlobData(&publicKey01, publicKey01.size);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = MallocAndCheckBlobData(&publicKey02, publicKey02.size);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 3.设备A、B导出公钥 */\n        ohResult = HksEcdhAgreeExport(&g_keyAlias01001, &g_keyAlias02001, &publicKey01, &publicKey02, genParamSet);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 4.设备A、B执行密钥协商 */\n        ohResult = KeyAgreement(&g_keyAlias01001, &publicKey02, &outData01, initParamSet01, finishParamSet01);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        ohResult = KeyAgreement(&g_keyAlias02001, &publicKey01, &outData02, initParamSet02, finishParamSet02);\n    } while (0);\n    free(publicKey01.data);\n    free(publicKey02.data);\n    free(outData01.data);\n    free(outData02.data);\n    /* 5.设备A、B删除密钥 */\n    CleanKey(&g_keyAlias01001, &g_keyAliasFinal1001, genParamSet, &initParamSet01, &finishParamSet01);\n    CleanKey(&g_keyAlias02001, &g_keyAliasFinal2001, genParamSet, &initParamSet02, &finishParamSet02);\n    OH_Huks_FreeParamSet(&genParamSet);\n\n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
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