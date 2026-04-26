"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["528957"], {
103874(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_sm_4_sym_encrypt_decrypt_gcm_by_segment_ndk_crypto_sm_4_sym_encrypt_decrypt_gcm_by_segment_ndk_md_325_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-dev-crypto-sm-4-sym-encrypt-decrypt-gcm-by-segment-ndk-crypto-sm-4-sym-encrypt-decrypt-gcm-by-segment-ndk-md-325.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_sm_4_sym_encrypt_decrypt_gcm_by_segment_ndk_crypto_sm_4_sym_encrypt_decrypt_gcm_by_segment_ndk_md_325_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment-ndk/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment-ndk","title":"使用SM4对称密钥（GCM模式）分段加解密(C/C++)","description":"对应的算法规格请查看对称密钥加解密算法规格：SM4。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment-ndk/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment-ndk","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"title":"使用SM4对称密钥（GCM模式）分段加解密(C/C++)","sidebar_position":22,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用SM4对称密钥（GCM模式）分段加解密(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment/"},"next":{"title":"使用ChaCha20对称密钥加解密(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-chacha20-encrypt-decrypt/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment-ndk/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment-ndk.md


const frontMatter = {
	title: '使用SM4对称密钥（GCM模式）分段加解密(C/C++)',
	sidebar_position: 22,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm4-sym-encrypt-decrypt-gcm-by-segment-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用SM4对称密钥（GCM模式）分段加解密(C/C++)';

const assets = {

};



const toc = [{
  "value": "在CMake脚本中链接相关动态库",
  "id": "在cmake脚本中链接相关动态库",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用sm4对称密钥gcm模式分段加解密cc",
        children: "使用SM4对称密钥（GCM模式）分段加解密(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec#sm4",
        children: "对称密钥加解密算法规格：SM4"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在cmake脚本中链接相关动态库",
      children: "在CMake脚本中链接相关动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libohcrypto.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "加密"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_create",
            children: "OH_CryptoSymKeyGenerator_Create"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_generate",
            children: "OH_CryptoSymKeyGenerator_Generate"
          }), "，生成密钥算法为SM4、密钥长度为128位的对称密钥（OH_CryptoSymKey）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何生成SM4对称密钥，开发者可参考下文示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#sm4",
            children: "对称密钥生成和转换规格：SM4"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-sym-key-randomly-ndk",
            children: "随机生成对称密钥"
          }), "理解，参考文档与当前示例可能存在入参差异，请在阅读时注意区分。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_create",
            children: "OH_CryptoSymCipher_Create"
          }), "，指定字符串参数'SM4_128|GCM|PKCS7'，创建对称密钥类型为SM4_128、分组模式为GCM、填充模式为PKCS7的Cipher实例，用于完成加密操作。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipherparams_create",
            children: "OH_CryptoSymCipherParams_Create"
          }), "创建参数对象，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipherparams_setparam",
            children: "OH_CryptoSymCipherParams_SetParam"
          }), "设置对应的加密参数。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_init",
            children: "OH_CryptoSymCipher_Init"
          }), "，设置模式为加密（CRYPTO_ENCRYPT_MODE），指定加密密钥（OH_CryptoSymKey）和GCM模式对应的加密参数（OH_CryptoSymCipherParams），初始化加密Cipher实例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将一次传入数据量设置为20字节，多次调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_update",
            children: "OH_CryptoSymCipher_Update"
          }), "，更新数据（明文）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "当前单次update长度没有限制，开发者可以根据数据量判断如何调用update。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "建议开发者对每次update的结果都判断是否为null，并在结果不为null时取出其中的数据进行拼接，形成完整的密文。因为在不同的模式下，update的结果可能会受到不同影响。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "1）比如ECB和CBC模式，始终以分组作为基本单位来加密，并输出本次update产生的加密分组结果。即当本次update操作凑满一个分组就输出密文，没有凑满则此次update输出null，将未加密的数据与下次输入的数据拼接凑分组再输出。等到最后doFinal的时候，将未加密的数据，根据指定的填充模式进行填充，再输出剩余加密结果。解密过程中的update同理。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "2）对于流加密模式（比如CTR和OFB模式），通常密文长度和明文长度相等。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_final",
            children: "OH_CryptoSymCipher_Final"
          }), "，获取加密后的数据。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "由于已使用update传入数据，此处data传入null。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "doFinal输出结果可能为null，在访问具体数据前，需要先判断结果是否为null，避免产生异常。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipherparams_create",
            children: "OH_CryptoSymCipherParams_Create"
          }), "创建Params，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipherparams_setparam",
            children: "OH_CryptoSymCipherParams_SetParam"
          }), "设置authTag，作为解密的认证信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在GCM模式下，需要从加密后的数据中取出末尾16字节，作为解密时初始化的认证信息。示例中authTag恰好为16字节。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-key-h/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_destroy",
            children: "OH_CryptoSymKeyGenerator_Destroy"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_destroy",
            children: "OH_CryptoSymCipher_Destroy"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipherparams_destroy",
            children: "OH_CryptoSymCipherParams_Destroy"
          }), "销毁各对象。"]
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
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_create",
          children: "OH_CryptoSymCipher_Create"
        }), "，指定字符串参数'SM4_128|GCM|PKCS7'，创建对称密钥类型为SM4_128、分组模式为GCM、填充模式为PKCS7的Cipher实例，用于完成解密操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_init",
          children: "OH_CryptoSymCipher_Init"
        }), "，设置模式为解密（CRYPTO_DECRYPT_MODE），指定解密密钥（OH_CryptoSymKey）和GCM模式对应的解密参数（OH_CryptoSymCipherParams），初始化解密Cipher实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["将一次传入数据量设置为20字节，多次调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_update",
          children: "OH_CryptoSymCipher_Update"
        }), "，更新数据（密文）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-sym-cipher-h/capi-crypto-sym-cipher-h#oh_cryptosymcipher_final",
          children: "OH_CryptoSymCipher_Final"
        }), "，获取解密后的数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <cstring>\n#include \"CryptoArchitectureKit/crypto_common.h\"\n#include \"CryptoArchitectureKit/crypto_sym_cipher.h\"\n\n#define OH_CRYPTO_GCM_TAG_LEN 16\n#define OH_CRYPTO_MAX_TEST_DATA_LEN 128\n\nOH_Crypto_ErrCode doTestSm4GcmSeg()\n{\n    OH_CryptoSymKeyGenerator *genCtx = nullptr;\n    OH_CryptoSymCipher *encCtx = nullptr;\n    OH_CryptoSymCipher *decCtx = nullptr;\n    OH_CryptoSymKey *keyCtx = nullptr;\n    OH_CryptoSymCipherParams *params = nullptr;\n\n    char *plainText = const_cast<char *>(\"aaaaa.....bbbbb.....ccccc.....ddddd.....eee\");\n    Crypto_DataBlob msgBlob = {.data = (uint8_t *)(plainText), .len = strlen(plainText)};\n    uint8_t aad[8] = {1, 2, 3, 4, 5, 6, 7, 8};\n    uint8_t tagArr[16] = {0};\n    uint8_t iv[12] = {1, 2, 4, 12, 3, 4, 2, 3, 3, 2, 0, 4}; // iv使用安全随机数生成\n    Crypto_DataBlob tag = {.data = nullptr, .len = 0};\n    Crypto_DataBlob ivBlob = {.data = iv, .len = sizeof(iv)};\n    Crypto_DataBlob aadBlob = {.data = aad, .len = sizeof(aad)};\n    Crypto_DataBlob outUpdate = {.data = nullptr, .len = 0};\n    Crypto_DataBlob decUpdate = {.data = nullptr, .len = 0};\n    Crypto_DataBlob tagInit = {.data = tagArr, .len = sizeof(tagArr)};\n    int32_t cipherLen = 0;\n    int blockSize = 20;\n    int32_t randomLen = strlen(plainText);\n    int cnt = randomLen / blockSize;\n    int rem = randomLen % blockSize;\n    uint8_t cipherText[OH_CRYPTO_MAX_TEST_DATA_LEN] = {0};\n    Crypto_DataBlob cipherBlob;\n\n    // 生成密钥\n    OH_Crypto_ErrCode ret = OH_CryptoSymKeyGenerator_Create(\"SM4_128\", &genCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoSymKeyGenerator_Generate(genCtx, &keyCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n\n    // 设置参数\n    ret = OH_CryptoSymCipherParams_Create(&params);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoSymCipherParams_SetParam(params, CRYPTO_IV_DATABLOB, &ivBlob);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoSymCipherParams_SetParam(params, CRYPTO_AAD_DATABLOB, &aadBlob);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoSymCipherParams_SetParam(params, CRYPTO_TAG_DATABLOB, &tagInit);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n\n    // 加密\n    ret = OH_CryptoSymCipher_Create(\"SM4_128|GCM|PKCS7\", &encCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoSymCipher_Init(encCtx, CRYPTO_ENCRYPT_MODE, keyCtx, params);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n\n    for (int i = 0; i < cnt; i++) {\n        msgBlob.len = blockSize;\n        ret = OH_CryptoSymCipher_Update(encCtx, &msgBlob, &outUpdate);\n        if (ret != CRYPTO_SUCCESS) {\n            goto end;\n        }\n        msgBlob.data += blockSize;\n        memcpy(&cipherText[cipherLen], outUpdate.data, outUpdate.len);\n        cipherLen += outUpdate.len;\n        OH_Crypto_FreeDataBlob(&outUpdate);\n    }\n    if (rem > 0) {\n        msgBlob.len = rem;\n        ret = OH_CryptoSymCipher_Update(encCtx, (Crypto_DataBlob *)&msgBlob, &outUpdate);\n        if (ret != CRYPTO_SUCCESS) {\n            goto end;\n        }\n        memcpy(&cipherText[cipherLen], outUpdate.data, outUpdate.len);\n        cipherLen += outUpdate.len;\n        OH_Crypto_FreeDataBlob(&outUpdate);\n    }\n    ret = OH_CryptoSymCipher_Final(encCtx, nullptr, &tag);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n\n    // 解密\n    cipherBlob = {.data = reinterpret_cast<uint8_t *>(cipherText), .len = (size_t)cipherLen};\n    msgBlob.data -= strlen(plainText) - rem;\n    msgBlob.len = strlen(plainText);\n    ret = OH_CryptoSymCipher_Create(\"SM4_128|GCM|PKCS7\", &decCtx);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoSymCipherParams_SetParam(params, CRYPTO_TAG_DATABLOB, &tag);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoSymCipher_Init(decCtx, CRYPTO_DECRYPT_MODE, keyCtx, params);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\n    ret = OH_CryptoSymCipher_Final(decCtx, &cipherBlob, &decUpdate);\n    if (ret != CRYPTO_SUCCESS) {\n        goto end;\n    }\nend:\n    OH_CryptoSymCipherParams_Destroy(params);\n    OH_CryptoSymCipher_Destroy(encCtx);\n    OH_CryptoSymCipher_Destroy(decCtx);\n    OH_CryptoSymKeyGenerator_Destroy(genCtx);\n    OH_CryptoSymKey_Destroy(keyCtx);\n    OH_Crypto_FreeDataBlob(&outUpdate);\n    OH_Crypto_FreeDataBlob(&tag);\n    OH_Crypto_FreeDataBlob(&decUpdate);\n    return ret;\n}\n"
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