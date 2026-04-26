"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["291451"], {
610122(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_encryption_decryption_huks_encryption_decryption_ndk_huks_encryption_decryption_ndk_md_f8f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-encryption-decryption-huks-encryption-decryption-ndk-huks-encryption-decryption-ndk-md-f8f.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_encryption_decryption_huks_encryption_decryption_ndk_huks_encryption_decryption_ndk_md_f8f_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-ndk/huks-encryption-decryption-ndk","title":"加解密(C/C++)","description":"以AES256、RSA1024、SM2和DES64为例，完成加解密。具体的场景介绍及支持的算法规格，请参考加解密支持的算法。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-ndk/huks-encryption-decryption-ndk.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-ndk","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-ndk/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"加解密(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-encryption-decryption-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"加解密(ArkTS)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-arkts/"},"next":{"title":"签名/验签介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-ndk/huks-encryption-decryption-ndk.md


const frontMatter = {
	title: '加解密(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-encryption-decryption-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '加解密(C/C++)';

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
  "value": "AES/CBC/PKCS7",
  "id": "aescbcpkcs7",
  "level": 3
}, {
  "value": "AES/GCM/NoPadding",
  "id": "aesgcmnopadding",
  "level": 3
}, {
  "value": "AES/CCM/NoPadding",
  "id": "aesccmnopadding",
  "level": 3
}, {
  "value": "RSA/ECB/PKCS1_V1_5",
  "id": "rsaecbpkcs1_v1_5",
  "level": 3
}, {
  "value": "RSA/ECB/OAEP/SHA256",
  "id": "rsaecboaepsha256",
  "level": 3
}, {
  "value": "SM2",
  "id": "sm2",
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
        id: "加解密cc",
        children: "加解密(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以AES256、RSA1024、SM2和DES64为例，完成加解密。具体的场景介绍及支持的算法规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview#%E6%94%AF%E6%8C%81%E7%9A%84%E7%AE%97%E6%B3%95",
        children: "加解密支持的算法"
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
          children: "加密"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取密钥别名。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取待加密的数据。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-param-h/capi-native-huks-param-h#oh_huks_initparamset",
            children: "OH_Huks_InitParamSet"
          }), "指定算法参数配置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文档中提供多个示例，当使用不同算法时，请注意配置对应参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用AES算法加密，选取的分组模式为CBC、填充模式为PKCS7时，参数IV必选，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#aescbcpkcs7",
              children: "AES/CBC/PKCS7"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用AES算法加密，选取的分组模式为GCM时，参数NONCE可选，AAD可选，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#aesgcmnopadding",
              children: "AES/GCM/NoPadding"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用AES算法加密，选取的分组模式为CCM时，参数NONCE可选，AAD可选，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#aesccmnopadding",
              children: "AES/CCM/NoPadding"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用RSA算法加密，需要选择相对应的分组模式、填充模式以及摘要算法DIGEST，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rsaecbpkcs1_v1_5",
              children: "RSA/ECB/PKCS1_V1_5"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rsaecboaepsha256",
              children: "RSA/ECB/OAEP/SHA256"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用SM2算法加密，摘要算法DIGEST需要指定为SM3，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sm2",
              children: "SM2"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详细规格请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview",
            children: "加密/解密介绍及算法规格"
          }), "。"]
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
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_finishsession",
            children: "OH_Huks_FinishSession"
          }), "结束密钥会话，获取加密后的密文。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解密"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取密钥别名。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取待解密的密文。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-param-h/capi-native-huks-param-h#oh_huks_initparamset",
            children: "OH_Huks_InitParamSet"
          }), "指定算法参数配置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文档中提供多个示例，当使用不同算法时，请注意配置对应参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用AES算法解密，用例中选取的分组模式为GCM时，必须要填参数NONCE和参数AEAD，AAD可选，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#aesgcmnopadding",
              children: "AES/GCM/NoPadding"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "其余示例参数与加密要求一致。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详细规格请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview",
            children: "加密/解密介绍及算法规格"
          }), "。"]
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
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-c/universal-keystore-headerfile/capi-native-huks-api-h/capi-native-huks-api-h#oh_huks_finishsession",
            children: "OH_Huks_FinishSession"
          }), "结束密钥会话，获取解密后的数据。"]
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
      id: "aescbcpkcs7",
      children: "AES/CBC/PKCS7"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n    uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic OH_Crypto_ErrCode genRandomNumber(uint32_t randomLength, uint8_t *out)\n{\n    // 创建随机数生成器。\n    OH_CryptoRand *rand = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoRand_Create(&rand);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    Crypto_DataBlob blob = {out, randomLength};\n    // 生成指定长度的随机数。\n    ret = OH_CryptoRand_GenerateRandom(rand, randomLength, &blob);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoRand_Destroy(rand);\n        return ret;\n    }\n    OH_CryptoRand_Destroy(rand);\n\n    return CRYPTO_SUCCESS;\n}\n\nstatic const uint32_t IV_SIZE = 16;\nstatic uint8_t IV[IV_SIZE] = {0};\nstatic OH_Crypto_ErrCode ret = genRandomNumber(IV_SIZE, IV);\nstatic struct OH_Huks_Param g_genEncDecParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT | OH_HUKS_KEY_PURPOSE_DECRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_CBC}};\n\nstatic struct OH_Huks_Param g_encryptParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_CBC},\n    {.tag = OH_HUKS_TAG_IV,\n     .blob = {\n         .size = IV_SIZE,\n         .data = (uint8_t *)IV\n     }}};\n\nstatic struct OH_Huks_Param g_decryptParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_DECRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_CBC},\n    {.tag = OH_HUKS_TAG_IV,\n     .blob = {\n         .size = IV_SIZE,\n         .data = (uint8_t *)IV\n     }}};\n\nstatic const uint32_t AES_COMMON_SIZE = 1024;\nOH_Huks_Result HksAesCipherTestEncrypt(const struct OH_Huks_Blob *keyAlias,\n                                       const struct OH_Huks_ParamSet *encryptParamSet,\n                                       const struct OH_Huks_Blob *inData, struct OH_Huks_Blob *cipherText)\n{\n    uint8_t handleE[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleEncrypt = {sizeof(uint64_t), handleE};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, encryptParamSet, &handleEncrypt, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handleEncrypt, encryptParamSet, inData, cipherText);\n    return ret;\n}\n\nOH_Huks_Result HksAesCipherTestDecrypt(const struct OH_Huks_Blob *keyAlias,\n                                       const struct OH_Huks_ParamSet *decryptParamSet,\n                                       const struct OH_Huks_Blob *cipherText, struct OH_Huks_Blob *plainText,\n                                       const struct OH_Huks_Blob *inData)\n{\n    uint8_t handleD[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleDecrypt = {sizeof(uint64_t), handleD};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, decryptParamSet, &handleDecrypt, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handleDecrypt, decryptParamSet, cipherText, plainText);\n    return ret;\n}\n\nnapi_value TestAesCbc(napi_env env, napi_callback_info info)\n{\n    char tmpKeyAlias[] = \"test_enc_dec\";\n    struct OH_Huks_Blob keyAlias = {(uint32_t)strlen(tmpKeyAlias), (uint8_t *)tmpKeyAlias};\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *encryptParamSet = nullptr;\n    struct OH_Huks_ParamSet *decryptParamSet = nullptr;\n    OH_Huks_Result ohResult;\n    do {\n        /* 1. 模拟生成密钥场景 */\n        /*\n         * 1.1. 获取生成密钥算法参数配置\n         */\n        ohResult = InitParamSet(&genParamSet, g_genEncDecParams, sizeof(g_genEncDecParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /*\n         * 1.2. 调用generateKeyItem\n         */\n        ohResult = OH_Huks_GenerateKeyItem(&keyAlias, genParamSet, nullptr);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 2. 模拟加密场景 */\n        /*\n         * 2.1. 获取加密算法参数配置\n         */\n        ohResult = InitParamSet(&encryptParamSet, g_encryptParams, sizeof(g_encryptParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        char tmpInData[] = \"AES_ECB_INDATA_1\";\n        struct OH_Huks_Blob inData = {(uint32_t)strlen(tmpInData), (uint8_t *)tmpInData};\n        uint8_t cipher[AES_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob cipherText = {AES_COMMON_SIZE, cipher};\n        /*\n         * 2.2. 调用HksAesCipherTestEncrypt获取加密后的密文\n         */\n        ohResult = HksAesCipherTestEncrypt(&keyAlias, encryptParamSet, &inData, &cipherText);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 3. 模拟解密场景 */\n        /*\n         * 3.1. 获取解密算法参数配置\n         */\n        ohResult = InitParamSet(&decryptParamSet, g_decryptParams, sizeof(g_decryptParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        uint8_t plain[AES_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob plainText = {AES_COMMON_SIZE, plain};\n        /*\n         * 3.2. 调用HksAesCipherTestDecrypt获取解密后的数据\n         */\n        ohResult = HksAesCipherTestDecrypt(&keyAlias, decryptParamSet, &cipherText, &plainText, &inData);\n    } while (0);\n    /* 4. 模拟删除密钥场景 */\n    /*\n     * 4.1. 调用deleteKeyItem删除密钥\n     */\n    (void)OH_Huks_DeleteKeyItem(&keyAlias, genParamSet);\n\n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&encryptParamSet);\n    OH_Huks_FreeParamSet(&decryptParamSet);\n    \n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aesgcmnopadding",
      children: "AES/GCM/NoPadding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "准备加解密密钥材料："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n    uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic OH_Crypto_ErrCode genRandomNumber(uint32_t randomLength, uint8_t *out)\n{\n    // 创建随机数生成器。\n    OH_CryptoRand *rand = nullptr;\n    OH_Crypto_ErrCode ret = OH_CryptoRand_Create(&rand);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    Crypto_DataBlob blob = {out, randomLength};\n    // 生成指定长度的随机数。\n    ret = OH_CryptoRand_GenerateRandom(rand, randomLength, &blob);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoRand_Destroy(rand);\n        return ret;\n    }\n    OH_CryptoRand_Destroy(rand);\n \n    return CRYPTO_SUCCESS;\n}\n\nstatic const uint32_t NONCE_SIZE = 12;\nstatic const uint32_t AAD_SIZE = 16;\nstatic const uint32_t AE_TAG_SIZE = 16;\nstatic char AEAD[AE_TAG_SIZE] = {0};\nstatic char AAD[AAD_SIZE] = \"cdcdcdcdcdcdcdc\"; // this is a test value, for real use it should be different every time\nstatic uint8_t NONCE[NONCE_SIZE] = {0};\nstatic OH_Crypto_ErrCode ret = genRandomNumber(NONCE_SIZE, NONCE);\nstatic struct OH_Huks_Param g_genEncDecParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT | OH_HUKS_KEY_PURPOSE_DECRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_GCM}};\n\nstatic struct OH_Huks_Param g_encryptParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_GCM},\n    {.tag = OH_HUKS_TAG_NONCE,\n     .blob = {\n         .size = NONCE_SIZE,\n         .data = (uint8_t *)NONCE // this is a test value, for real use the iv should be different every time\n     }},\n    {.tag = OH_HUKS_TAG_ASSOCIATED_DATA,\n     .blob = {\n         .size = AAD_SIZE,\n         .data = (uint8_t *)AAD // this is a test value, for real use the iv should be different every time\n     }}};\n\nstatic struct OH_Huks_Param g_decryptParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_AES},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_DECRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_NONE},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_GCM},\n    {.tag = OH_HUKS_TAG_NONCE,\n     .blob = {\n         .size = NONCE_SIZE,\n         .data = (uint8_t *)NONCE // this is a test value, for real use the iv should be different every time\n     }},\n    {.tag = OH_HUKS_TAG_ASSOCIATED_DATA,\n     .blob = {\n         .size = AAD_SIZE,\n         .data = (uint8_t *)AAD // this is a test value, for real use the iv should be different every time\n     }},\n    {.tag = OH_HUKS_TAG_AE_TAG,\n     .blob = {\n         .size = AE_TAG_SIZE,\n         .data = (uint8_t *)AEAD // this is a test value, for real use the iv should be different every time\n     }}};\n\nstatic const uint32_t AES_GCM_SIZE = 1024;\nOH_Huks_Result HksAesGcmTestEncrypt(const struct OH_Huks_Blob *keyAlias,\n    const struct OH_Huks_ParamSet *encryptParamSet,\n    const struct OH_Huks_Blob *inData, struct OH_Huks_Blob *cipherText)\n{\n    uint8_t handleE[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleEncrypt = {sizeof(uint64_t), handleE};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, encryptParamSet, &handleEncrypt, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handleEncrypt, encryptParamSet, inData, cipherText);\n    return ret;\n}\n\nOH_Huks_Result HksAesGcmTestDecrypt(const struct OH_Huks_Blob *keyAlias,\n    const struct OH_Huks_ParamSet *decryptParamSet,\n    const struct OH_Huks_Blob *cipherText, struct OH_Huks_Blob *plainText,\n    const struct OH_Huks_Blob *inData)\n{\n    uint8_t handleD[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleDecrypt = {sizeof(uint64_t), handleD};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, decryptParamSet, &handleDecrypt, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handleDecrypt, decryptParamSet, cipherText, plainText);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行加解密流程："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_value TestAesGcm(napi_env env, napi_callback_info info)\n{\n    char tmpKeyAlias[] = \"test_enc_dec\";\n    struct OH_Huks_Blob keyAlias = {(uint32_t)strlen(tmpKeyAlias), (uint8_t *)tmpKeyAlias};\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *encryptParamSet = nullptr;\n    struct OH_Huks_ParamSet *decryptParamSet = nullptr;\n    OH_Huks_Result ohResult;\n    do {\n        /* 1. 模拟生成密钥场景 */\n        /*\n         * 1.1. 获取生成密钥算法参数配置\n         */\n        ohResult = InitParamSet(&genParamSet, g_genEncDecParams, sizeof(g_genEncDecParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /*\n         * 1.2. 调用generateKeyItem\n         */\n        ohResult = OH_Huks_GenerateKeyItem(&keyAlias, genParamSet, nullptr);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 2. 模拟加密场景 */\n        /*\n         * 2.1. 获取加密算法参数配置\n         */\n        ohResult = InitParamSet(&encryptParamSet, g_encryptParams, sizeof(g_encryptParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        char tmpInData[] = \"AES_GCM_INDATA_1\";\n        struct OH_Huks_Blob inData = {(uint32_t)strlen(tmpInData), (uint8_t *)tmpInData};\n        uint8_t cipher[AES_GCM_SIZE] = {0};\n        struct OH_Huks_Blob cipherText = {AES_GCM_SIZE, cipher};\n        /*\n         * 2.2. 调用HksAesGcmTestEncrypt获取加密后的密文\n         */\n        ohResult = HksAesGcmTestEncrypt(&keyAlias, encryptParamSet, &inData, &cipherText);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 3. 模拟解密场景 */\n        /*\n         * 3.1. 获取解密算法参数配置\n         */\n        strncpy(AEAD, (char *)cipherText.data + strlen(tmpInData), AE_TAG_SIZE);\n        cipherText.data[strlen(tmpInData)] = '\\0';\n        cipherText.size -= AE_TAG_SIZE;\n        ohResult = InitParamSet(&decryptParamSet, g_decryptParams, sizeof(g_decryptParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /*\n         * 3.2. 调用HksAesGcmTestDecrypt获取解密后的数据\n         */\n        uint8_t plainBuffer[AES_GCM_SIZE] = {0};\n        struct OH_Huks_Blob plainText = {AES_GCM_SIZE, plainBuffer};\n        ohResult = HksAesGcmTestDecrypt(&keyAlias, decryptParamSet, &cipherText, &plainText, &inData);\n    } while (0);\n    /* 4. 模拟删除密钥场景 */\n    /*\n     * 4.1. 调用deleteKeyItem删除密钥\n     */\n    (void)OH_Huks_DeleteKeyItem(&keyAlias, genParamSet);\n\n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&encryptParamSet);\n    OH_Huks_FreeParamSet(&decryptParamSet);\n    \n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aesccmnopadding",
      children: "AES/CCM/NoPadding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <string.h>\n\nstatic const uint32_t IV_SIZE = 16;\nstatic const uint32_t AEAD_TAG_LEN = 14;\nstatic char IV[IV_SIZE] = { 0 }; // this is a test value, for real use the iv should be different every time.\nstatic char AEAD[AEAD_TAG_LEN] = { 0 };\nstatic char NONCE[OH_HUKS_AE_NONCE_LEN] = { 0 };\nstatic struct OH_Huks_Param g_genEncDecParams[] = {\n    {\n        .tag = OH_HUKS_TAG_ALGORITHM,\n        .uint32Param = OH_HUKS_ALG_AES\n    }, {\n        .tag = OH_HUKS_TAG_PURPOSE,\n        .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT | OH_HUKS_KEY_PURPOSE_DECRYPT\n    }, {\n        .tag = OH_HUKS_TAG_KEY_SIZE,\n        .uint32Param = OH_HUKS_AES_KEY_SIZE_256\n    }, {\n        .tag = OH_HUKS_TAG_PADDING,\n        .uint32Param = OH_HUKS_PADDING_NONE\n    }, {\n        .tag = OH_HUKS_TAG_BLOCK_MODE,\n        .uint32Param = OH_HUKS_MODE_CCM\n    }\n};\nstatic struct OH_Huks_Param g_encryptParams[] = {\n    {\n        .tag = OH_HUKS_TAG_ALGORITHM,\n        .uint32Param = OH_HUKS_ALG_AES\n    }, {\n        .tag = OH_HUKS_TAG_PURPOSE,\n        .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT\n    }, {\n        .tag = OH_HUKS_TAG_KEY_SIZE,\n        .uint32Param = OH_HUKS_AES_KEY_SIZE_256\n    }, {\n        .tag = OH_HUKS_TAG_PADDING,\n        .uint32Param = OH_HUKS_PADDING_NONE\n    }, {\n        .tag = OH_HUKS_TAG_BLOCK_MODE,\n        .uint32Param = OH_HUKS_MODE_CCM\n    }, {\n        .tag = OH_HUKS_TAG_IV,\n        .blob = {\n            .size = IV_SIZE,\n            .data = (uint8_t *)IV // this is a test value, for real use the iv should be different every time.\n        }\n    }, {\n        .tag = OH_HUKS_TAG_NONCE,\n        .blob = {\n            .size = OH_HUKS_AE_NONCE_LEN,\n            .data = (uint8_t *)NONCE\n        }\n    }, {\n        .tag = OH_HUKS_TAG_AE_TAG_LEN,\n        .uint32Param = AEAD_TAG_LEN\n    }\n};\nstatic struct OH_Huks_Param g_decryptParams[] = {\n    {\n        .tag = OH_HUKS_TAG_ALGORITHM,\n        .uint32Param = OH_HUKS_ALG_AES\n    }, {\n        .tag = OH_HUKS_TAG_PURPOSE,\n        .uint32Param = OH_HUKS_KEY_PURPOSE_DECRYPT\n    }, {\n        .tag = OH_HUKS_TAG_KEY_SIZE,\n        .uint32Param = OH_HUKS_AES_KEY_SIZE_256\n    }, {\n        .tag = OH_HUKS_TAG_PADDING,\n        .uint32Param = OH_HUKS_PADDING_NONE\n    }, {\n        .tag = OH_HUKS_TAG_BLOCK_MODE,\n        .uint32Param = OH_HUKS_MODE_CCM\n    }, {\n        .tag = OH_HUKS_TAG_IV,\n        .blob = {\n            .size = IV_SIZE,\n            .data = (uint8_t *)IV // this is a test value, for real use the iv should be different every time.\n        }\n    }, {\n        .tag = OH_HUKS_TAG_NONCE,\n        .blob = {\n            .size = OH_HUKS_AE_NONCE_LEN,\n            .data = (uint8_t *)NONCE\n        }\n    }, {\n        .tag = OH_HUKS_TAG_AE_TAG,\n        .blob = {\n            .size = AEAD_TAG_LEN,\n            .data = (uint8_t *)AEAD\n        }\n    }, {\n        .tag = OH_HUKS_TAG_AE_TAG_LEN,\n        .uint32Param = AEAD_TAG_LEN\n    }\n};\nstatic const uint32_t AES_COMMON_SIZE = 1024;\n\nOH_Huks_Result InitParamSet(\n    struct OH_Huks_ParamSet **paramSet,\n    const struct OH_Huks_Param *params,\n    uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nOH_Huks_Result HksAesCipherTestEncrypt(\n        const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *encryptParamSet,\n        const struct OH_Huks_Blob *inData, struct OH_Huks_Blob *cipherText)\n{\n    uint8_t handleE[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleEncrypt = {sizeof(uint64_t), handleE};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, encryptParamSet, &handleEncrypt, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handleEncrypt, encryptParamSet, inData, cipherText);\n    return ret;\n}\n\nOH_Huks_Result HksAesCipherTestDecrypt(const struct OH_Huks_Blob *keyAlias,\n    const struct OH_Huks_ParamSet *decryptParamSet, const struct OH_Huks_Blob *cipherText,\n    struct OH_Huks_Blob *plainText)\n{\n    uint8_t handleD[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleDecrypt = {sizeof(uint64_t), handleD};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, decryptParamSet, &handleDecrypt, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handleDecrypt, decryptParamSet, cipherText, plainText);\n    return ret;\n}\n\nstatic napi_value EncDecKey(napi_env env, napi_callback_info info)\n{\n    char tmpKeyAlias[] = \"test_aes_ccm_enc_dec\";\n    struct OH_Huks_Blob keyAlias = { (uint32_t)strlen(tmpKeyAlias), (uint8_t *)tmpKeyAlias };\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *encryptParamSet = nullptr;\n    struct OH_Huks_ParamSet *decryptParamSet = nullptr;\n    OH_Huks_Result ohResult;\n    do {\n        /* 1. Generate Key */\n        /*\n        * 模拟生成密钥场景\n        * 1.1. 确定密钥别名\n        */\n        /*\n        * 1.2. 获取生成密钥算法参数配置\n        */\n        ohResult = InitParamSet(&genParamSet, g_genEncDecParams, sizeof(g_genEncDecParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /*\n        * 1.3. 调用generateKeyItem\n        */\n        ohResult = OH_Huks_GenerateKeyItem(&keyAlias, genParamSet, nullptr);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 2. Encrypt */\n        /*\n        * 模拟加密场景\n        * 2.1. 获取密钥别名\n        */\n        /*\n        * 2.2. 获取待加密的数据\n        */\n        /*\n        * 2.3. 获取加密算法参数配置\n        */\n        ohResult = InitParamSet(&encryptParamSet, g_encryptParams, sizeof(g_encryptParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        char tmpInData[] = \"AES_CCM_INDATA_1\";\n        uint32_t dataLen = (uint32_t)strlen(tmpInData);\n        struct OH_Huks_Blob inData = { dataLen, (uint8_t *)tmpInData };\n        uint8_t cipher[AES_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob cipherText = {AES_COMMON_SIZE, cipher};\n        /*\n        * 2.4. 调用initSession获取handle\n        */\n        /*\n        * 2.5. 调用finishSession获取加密后的密文\n        */\n        ohResult = HksAesCipherTestEncrypt(&keyAlias, encryptParamSet, &inData, &cipherText);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        strncpy(AEAD, (char *)cipherText.data + dataLen, AEAD_TAG_LEN);\n        cipherText.data[dataLen] = '\\0';\n        cipherText.size -= AEAD_TAG_LEN;\n        /* 3. Decrypt */\n        /*\n        * 模拟解密场景\n        * 3.1. 获取密钥别名\n        */\n        /*\n        * 3.2. 获取待解密的密文\n        */\n        /*\n        * 3.3. 获取解密算法参数配置\n        */\n        ohResult = InitParamSet(&decryptParamSet, g_decryptParams, sizeof(g_decryptParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        uint8_t plain[AES_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob plainText = {AES_COMMON_SIZE, plain};\n        /*\n        * 3.4. 调用initSession获取handle\n        */\n        /*\n        * 3.5. 调用finishSession获取解密后的数据\n        */\n        ohResult = HksAesCipherTestDecrypt(&keyAlias, decryptParamSet, &cipherText, &plainText);\n    } while (0);\n    /* 4. Delete Key */\n    /*\n    * 模拟删除密钥场景\n    * 4.1. 获取密钥别名\n    */\n    /*\n    * 4.2. 调用deleteKeyItem删除密钥\n    */\n    (void)OH_Huks_DeleteKeyItem(&keyAlias, genParamSet);\n        \n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&encryptParamSet);\n    OH_Huks_FreeParamSet(&decryptParamSet);\n    \n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsaecbpkcs1_v1_5",
      children: "RSA/ECB/PKCS1_V1_5"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n                                   uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic struct OH_Huks_Param g_genEncDecParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT | OH_HUKS_KEY_PURPOSE_DECRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_1024},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_ECB},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_PKCS1_V1_5},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};\n\nstatic struct OH_Huks_Param g_encryptParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_1024},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_PKCS1_V1_5},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_ECB},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};\n\nstatic struct OH_Huks_Param g_decryptParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_DECRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_1024},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_PKCS1_V1_5},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_ECB},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};\n\nstatic const uint32_t RSA_COMMON_SIZE = 1024;\nOH_Huks_Result HksRsaPkcsTestEncrypt(const struct OH_Huks_Blob *keyAlias,\n    const struct OH_Huks_ParamSet *encryptParamSet,\n    const struct OH_Huks_Blob *inData, struct OH_Huks_Blob *cipherText)\n{\n    uint8_t handleE[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleEncrypt = {sizeof(uint64_t), handleE};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, encryptParamSet, &handleEncrypt, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handleEncrypt, encryptParamSet, inData, cipherText);\n    return ret;\n}\n\nOH_Huks_Result HksRsaPkcsTestDecrypt(const struct OH_Huks_Blob *keyAlias,\n    const struct OH_Huks_ParamSet *decryptParamSet,\n    const struct OH_Huks_Blob *cipherText, struct OH_Huks_Blob *plainText,\n    const struct OH_Huks_Blob *inData)\n{\n    uint8_t handleD[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleDecrypt = {sizeof(uint64_t), handleD};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, decryptParamSet, &handleDecrypt, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handleDecrypt, decryptParamSet, cipherText, plainText);\n    return ret;\n}\n\nnapi_value TestRsaEcbPkcs(napi_env env, napi_callback_info info)\n{\n    char tmpKeyAlias[] = \"test_enc_dec\";\n    struct OH_Huks_Blob keyAlias = {(uint32_t)strlen(tmpKeyAlias), (uint8_t *)tmpKeyAlias};\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *encryptParamSet = nullptr;\n    struct OH_Huks_ParamSet *decryptParamSet = nullptr;\n    OH_Huks_Result ohResult;\n    do {\n        /* 1. 模拟生成密钥场景 */\n        /*\n         * 1.1. 获取生成密钥算法参数配置\n         */\n        ohResult = InitParamSet(&genParamSet, g_genEncDecParams, sizeof(g_genEncDecParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /*\n         * 1.2. 调用generateKeyItem\n         */\n        ohResult = OH_Huks_GenerateKeyItem(&keyAlias, genParamSet, nullptr);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 2. 模拟加密场景 */\n        /*\n         * 2.1. 获取加密算法参数配置\n         */\n        ohResult = InitParamSet(&encryptParamSet, g_encryptParams, sizeof(g_encryptParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        char tmpInData[] = \"RSA_ECB_OAEP_IN\";\n        struct OH_Huks_Blob inData = {(uint32_t)strlen(tmpInData), (uint8_t *)tmpInData};\n        uint8_t cipher[RSA_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob cipherText = {RSA_COMMON_SIZE, cipher};\n        /*\n         * 2.2. 调用HksRsaPkcsTestEncrypt获取加密后的密文\n         */\n        ohResult = HksRsaPkcsTestEncrypt(&keyAlias, encryptParamSet, &inData, &cipherText);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 3. 模拟解密场景 */\n        /*\n         * 3.1. 获取解密算法参数配置\n         */\n        ohResult = InitParamSet(&decryptParamSet, g_decryptParams, sizeof(g_decryptParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        uint8_t plain[RSA_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob plainText = {RSA_COMMON_SIZE, plain};\n        /*\n         * 3.2. 调用HksRsaPkcsTestDecrypt获取解密后的数据\n         */\n        ohResult = HksRsaPkcsTestDecrypt(&keyAlias, decryptParamSet, &cipherText, &plainText, &inData);\n    } while (0);\n    /* 4. 模拟删除密钥场景 */\n    /*\n     * 4.1. 调用deleteKeyItem删除密钥\n     */\n    (void)OH_Huks_DeleteKeyItem(&keyAlias, genParamSet);\n\n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&encryptParamSet);\n    OH_Huks_FreeParamSet(&decryptParamSet);\n    \n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsaecboaepsha256",
      children: "RSA/ECB/OAEP/SHA256"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n    uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic struct OH_Huks_Param g_genEncDecParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT | OH_HUKS_KEY_PURPOSE_DECRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_1024},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_OAEP},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_ECB},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256}};\n\nstatic struct OH_Huks_Param g_encryptParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_1024},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_OAEP},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_ECB},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256}};\n\nstatic struct OH_Huks_Param g_decryptParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_RSA},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_DECRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_RSA_KEY_SIZE_1024},\n    {.tag = OH_HUKS_TAG_PADDING, .uint32Param = OH_HUKS_PADDING_OAEP},\n    {.tag = OH_HUKS_TAG_BLOCK_MODE, .uint32Param = OH_HUKS_MODE_ECB},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA256}};\n\nstatic const uint32_t RSA_COMMON_SIZE = 1024;\nOH_Huks_Result HksRsaOaepTestEncrypt(const struct OH_Huks_Blob *keyAlias,\n    const struct OH_Huks_ParamSet *encryptParamSet,\n    const struct OH_Huks_Blob *inData, struct OH_Huks_Blob *cipherText)\n{\n    uint8_t handleE[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleEncrypt = {sizeof(uint64_t), handleE};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, encryptParamSet, &handleEncrypt, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handleEncrypt, encryptParamSet, inData, cipherText);\n    return ret;\n}\n\nOH_Huks_Result HksRsaOaepTestDecrypt(const struct OH_Huks_Blob *keyAlias,\n    const struct OH_Huks_ParamSet *decryptParamSet,\n    const struct OH_Huks_Blob *cipherText, struct OH_Huks_Blob *plainText,\n    const struct OH_Huks_Blob *inData)\n{\n    uint8_t handleD[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleDecrypt = {sizeof(uint64_t), handleD};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, decryptParamSet, &handleDecrypt, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handleDecrypt, decryptParamSet, cipherText, plainText);\n    return ret;\n}\n\nnapi_value TestRsaEcbOaep(napi_env env, napi_callback_info info)\n{\n    char tmpKeyAlias[] = \"test_enc_dec\";\n    struct OH_Huks_Blob keyAlias = {(uint32_t)strlen(tmpKeyAlias), (uint8_t *)tmpKeyAlias};\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *encryptParamSet = nullptr;\n    struct OH_Huks_ParamSet *decryptParamSet = nullptr;\n    OH_Huks_Result ohResult;\n    do {\n        /* 1. 模拟生成密钥场景 */\n        /*\n         * 1.1. 获取生成密钥算法参数配置\n         */\n        ohResult = InitParamSet(&genParamSet, g_genEncDecParams, sizeof(g_genEncDecParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /*\n         * 1.2. 调用generateKeyItem\n         */\n        ohResult = OH_Huks_GenerateKeyItem(&keyAlias, genParamSet, nullptr);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 2. 模拟加密场景 */\n        /*\n         * 2.1. 获取加密算法参数配置\n         */\n        ohResult = InitParamSet(&encryptParamSet, g_encryptParams, sizeof(g_encryptParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        char tmpInData[] = \"RSA_ECB_OAEP_IN\";\n        struct OH_Huks_Blob inData = {(uint32_t)strlen(tmpInData), (uint8_t *)tmpInData};\n        uint8_t cipher[RSA_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob cipherText = {RSA_COMMON_SIZE, cipher};\n        /*\n         * 2.2. 调用HksRsaOaepTestEncrypt获取加密后的密文\n         */\n        ohResult = HksRsaOaepTestEncrypt(&keyAlias, encryptParamSet, &inData, &cipherText);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 3. 模拟解密场景 */\n        /*\n         * 3.1. 获取解密算法参数配置\n         */\n        ohResult = InitParamSet(&decryptParamSet, g_decryptParams, sizeof(g_decryptParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        uint8_t plain[RSA_COMMON_SIZE] = {0};\n        struct OH_Huks_Blob plainText = {RSA_COMMON_SIZE, plain};\n        /*\n         * 3.2. 调用HksRsaOaepTestDecrypt获取解密后的数据\n         */\n        ohResult = HksRsaOaepTestDecrypt(&keyAlias, decryptParamSet, &cipherText, &plainText, &inData);\n    } while (0);\n    /* 4. 模拟删除密钥场景 */\n    /*\n     * 4.1. 调用deleteKeyItem删除密钥\n     */\n    (void)OH_Huks_DeleteKeyItem(&keyAlias, genParamSet);\n\n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&encryptParamSet);\n    OH_Huks_FreeParamSet(&decryptParamSet);\n    \n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sm2",
      children: "SM2"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"huks/native_huks_api.h\"\n#include \"huks/native_huks_param.h\"\n#include \"napi/native_api.h\"\n#include <cstring>\n\nstatic OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,\n    uint32_t paramCount)\n{\n    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_AddParams(*paramSet, params, paramCount);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    ret = OH_Huks_BuildParamSet(paramSet);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        OH_Huks_FreeParamSet(paramSet);\n        return ret;\n    }\n    return ret;\n}\n\nstatic struct OH_Huks_Param g_genEncDecParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_SM2},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT | OH_HUKS_KEY_PURPOSE_DECRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_SM2_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SM3}};\n\nstatic struct OH_Huks_Param g_encryptParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_SM2},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_ENCRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_SM2_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SM3}};\n\nstatic struct OH_Huks_Param g_decryptParams[] = {\n    {.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_SM2},\n    {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_DECRYPT},\n    {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_SM2_KEY_SIZE_256},\n    {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SM3}};\n\nstatic const uint32_t SM2_SIZE = 1024;\nOH_Huks_Result HksSm2TestEncrypt(const struct OH_Huks_Blob *keyAlias,\n    const struct OH_Huks_ParamSet *encryptParamSet,\n    const struct OH_Huks_Blob *inData, struct OH_Huks_Blob *cipherText)\n{\n    uint8_t handleE[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleEncrypt = {sizeof(uint64_t), handleE};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, encryptParamSet, &handleEncrypt, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handleEncrypt, encryptParamSet, inData, cipherText);\n    return ret;\n}\n\nOH_Huks_Result HksSm2TestDecrypt(const struct OH_Huks_Blob *keyAlias,\n    const struct OH_Huks_ParamSet *decryptParamSet,\n    const struct OH_Huks_Blob *cipherText, struct OH_Huks_Blob *plainText,\n    const struct OH_Huks_Blob *inData)\n{\n    uint8_t handleD[sizeof(uint64_t)] = {0};\n    struct OH_Huks_Blob handleDecrypt = {sizeof(uint64_t), handleD};\n    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, decryptParamSet, &handleDecrypt, nullptr);\n    if (ret.errorCode != OH_HUKS_SUCCESS) {\n        return ret;\n    }\n    ret = OH_Huks_FinishSession(&handleDecrypt, decryptParamSet, cipherText, plainText);\n    return ret;\n}\n\nnapi_value TestSm2(napi_env env, napi_callback_info info)\n{\n    char tmpKeyAlias[] = \"test_sm2key\";\n    struct OH_Huks_Blob keyAlias = {(uint32_t)strlen(tmpKeyAlias), (uint8_t *)tmpKeyAlias};\n    struct OH_Huks_ParamSet *genParamSet = nullptr;\n    struct OH_Huks_ParamSet *encryptParamSet = nullptr;\n    struct OH_Huks_ParamSet *decryptParamSet = nullptr;\n    OH_Huks_Result ohResult;\n    do {\n        /* 1. 模拟生成密钥场景 */\n        /*\n         * 1.1. 获取生成密钥算法参数配置\n         */\n        ohResult = InitParamSet(&genParamSet, g_genEncDecParams, sizeof(g_genEncDecParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /*\n         * 1.2. 调用generateKeyItem\n         */\n        ohResult = OH_Huks_GenerateKeyItem(&keyAlias, genParamSet, nullptr);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 2. 模拟加密场景 */\n        /*\n         * 2.1. 获取加密算法参数配置\n         */\n        ohResult = InitParamSet(&encryptParamSet, g_encryptParams, sizeof(g_encryptParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        char tmpInData[] = \"AES_ECB_INDATA_1\";\n        struct OH_Huks_Blob inData = {(uint32_t)strlen(tmpInData), (uint8_t *)tmpInData};\n        uint8_t cipher[SM2_SIZE] = {0};\n        struct OH_Huks_Blob cipherText = {SM2_SIZE, cipher};\n        /*\n         * 2.2. 调用HksSm2TestEncrypt获取加密后的密文\n         */\n        ohResult = HksSm2TestEncrypt(&keyAlias, encryptParamSet, &inData, &cipherText);\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        /* 3. 模拟解密场景 */\n        /*\n         * 3.1. 获取解密算法参数配置\n         */\n        ohResult = InitParamSet(&decryptParamSet, g_decryptParams, sizeof(g_decryptParams) / sizeof(OH_Huks_Param));\n        if (ohResult.errorCode != OH_HUKS_SUCCESS) {\n            break;\n        }\n        uint8_t plain[SM2_SIZE] = {0};\n        struct OH_Huks_Blob plainText = {SM2_SIZE, plain};\n        /*\n         * 3.2. 调用HksSm2TestDecrypt获取解密后的数据\n         */\n        ohResult = HksSm2TestDecrypt(&keyAlias, decryptParamSet, &cipherText, &plainText, &inData);\n    } while (0);\n    /* 4. 模拟删除密钥场景 */\n    /*\n     * 4.1. 调用deleteKeyItem删除密钥\n     */\n    (void)OH_Huks_DeleteKeyItem(&keyAlias, genParamSet);\n\n    OH_Huks_FreeParamSet(&genParamSet);\n    OH_Huks_FreeParamSet(&encryptParamSet);\n    OH_Huks_FreeParamSet(&decryptParamSet);\n    \n    napi_value ret;\n    napi_create_int32(env, ohResult.errorCode, &ret);\n    return ret;\n}\n"
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