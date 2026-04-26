"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["492162"], {
182721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_generate_asym_key_pair_from_key_spec_ndk_crypto_generate_asym_key_pair_from_key_spec_ndk_md_a6a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-generation-conversion-crypto-key-generation-conversion-dev-crypto-generate-asym-key-pair-from-key-spec-ndk-crypto-generate-asym-key-pair-from-key-spec-ndk-md-a6a.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_generate_asym_key_pair_from_key_spec_ndk_crypto_generate_asym_key_pair_from_key_spec_ndk_md_a6a_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec-ndk/crypto-generate-asym-key-pair-from-key-spec-ndk","title":"指定密钥参数生成非对称密钥对(C/C++)","description":"以RSA、ECC、SM2为例，根据指定的密钥参数，生成非对称密钥对（KeyPair），并获取密钥参数属性。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec-ndk/crypto-generate-asym-key-pair-from-key-spec-ndk.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec-ndk","slug":"/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec-ndk/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"指定密钥参数生成非对称密钥对(C/C++)","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-asym-key-pair-from-key-spec-ndk","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"指定密钥参数生成非对称密钥对(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec/"},"next":{"title":"使用ECC压缩/非压缩公钥格式转换(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/ypto-convert-compressed-or-uncompressed-ecc-pubkey/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec-ndk/crypto-generate-asym-key-pair-from-key-spec-ndk.md


const frontMatter = {
	title: '指定密钥参数生成非对称密钥对(C/C++)',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-asym-key-pair-from-key-spec-ndk',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '指定密钥参数生成非对称密钥对(C/C++)';

const assets = {

};



const toc = [{
  "value": "指定密钥参数生成RSA密钥对",
  "id": "指定密钥参数生成rsa密钥对",
  "level": 2
}, {
  "value": "指定密钥参数生成ECC密钥对",
  "id": "指定密钥参数生成ecc密钥对",
  "level": 2
}, {
  "value": "根据椭圆曲线名生成SM2密钥对",
  "id": "根据椭圆曲线名生成sm2密钥对",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "指定密钥参数生成非对称密钥对cc",
        children: "指定密钥参数生成非对称密钥对(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以RSA、ECC、SM2为例，根据指定的密钥参数，生成非对称密钥对（KeyPair），并获取密钥参数属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该对象可用于后续的加解密等操作。获取的密钥参数属性可用于存储或传输。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定密钥参数生成rsa密钥对",
      children: "指定密钥参数生成RSA密钥对"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#rsa",
        children: "非对称密钥生成和转换规格：RSA"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeyspec_create",
            children: "OH_CryptoAsymKeySpec_Create"
          }), "，指定算法名为\"RSA\"， 密钥参数类型为CRYPTO_ASYM_KEY_KEY_PAIR_SPEC，创建参数对象（keySpec）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["指定uint8_t类型的RSA密钥对数据（pk、sk、n），分别封装成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
            children: "Crypto_DataBlob"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeyspec_setparam",
            children: "OH_CryptoAsymKeySpec_SetParam"
          }), "，指定参数类型分别为CRYPTO_RSA_E_DATABLOB（pk）、CRYPTO_RSA_D_DATABLOB（sk）、CRYPTO_RSA_N_DATABLOB（n）, 依次传入封装后的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
            children: "Crypto_DataBlob"
          }), "，设置参数对象（keySpec）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(102541)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "pk、sk、n均要以大端模式输入，且必须为正数。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygeneratorwithspec_create",
            children: "OH_CryptoAsymKeyGeneratorWithSpec_Create"
          }), "，将参数对象（keySpec）传入，创建非对称密钥生成器（generatorSpec）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygeneratorwithspec_genkeypair",
            children: "OH_CryptoAsymKeyGeneratorWithSpec_GenKeyPair"
          }), "，生成RSA密钥对（keyPair）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["分别传入密钥对中的私钥和公钥，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoprivkey_getparam",
            children: "OH_CryptoPrivKey_GetParam"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptopubkey_getparam",
            children: "OH_CryptoPubKey_GetParam"
          }), "，获取RSA算法中私钥和公钥的各种密钥参数。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n#include <string>\n#define SPLIT_SIZE 2\n\nstatic OH_Crypto_ErrCode GetRsaKeyParams(OH_CryptoKeyPair *keyCtx, Crypto_DataBlob *pubKeyData, Crypto_DataBlob *dataN)\n{\n    OH_CryptoPubKey *pubKey = OH_CryptoKeyPair_GetPubKey(keyCtx);\n    if (pubKey == nullptr) {\n        return CRYPTO_OPERTION_ERROR;\n    }\n    OH_Crypto_ErrCode ret = OH_CryptoPubKey_GetParam(pubKey, CRYPTO_RSA_E_DATABLOB, pubKeyData);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    return OH_CryptoPubKey_GetParam(pubKey, CRYPTO_RSA_N_DATABLOB, dataN);\n}\n\nstatic void FreeRsaKeyParams(Crypto_DataBlob *pubKeyData, Crypto_DataBlob *dataN)\n{\n    OH_Crypto_FreeDataBlob(pubKeyData);\n    OH_Crypto_FreeDataBlob(dataN);\n}\n\nsize_t RsaConvertHex(uint8_t* dest, size_t count, const char* src)\n{\n    size_t i;\n    int value;\n\n    for (i = 0; i < count && sscanf(src + i * SPLIT_SIZE, \"%2x\", &value) == 1; i++) {\n        dest[i] = value;\n    }\n    return i;\n}\n\nstruct RsaParams {\n    Crypto_DataBlob nData;\n    Crypto_DataBlob eData;\n    uint8_t n[1024];\n    uint8_t e[20];\n};\n\nstatic void PrepareRsaParams(RsaParams *params)\n{\n    std::string nStr = \"9260d0750ae117eee55c3f3deaba74917521a262ee76007cdf8a56755ad73a1598a1408410a01434c3f\"\n    \"5bc54a88b57fa19fc4328daea0750a4c44e88cff3b2382621b80f670464433e4336e6d003e8cd65bff211da144b88291c2259a\"\n    \"00a72b711c116ef7686e8fee34e4d933c868187bdc26f7be071493c86f7a5941c3510806ad67b0f94d88f5cf5c02a092821d86\"\n    \"26e8932b65c5bd8c92049c210932b7afa7ac59c0e886ae5c1edb00d8ce2c57633db26bd6639bff73cee82be9275c402b4cf2a4\"\n    \"388da8cf8c64eefe1c5a0f5ab8057c39fa5c0589c3e253f0960332300f94bea44877b588e1edbde97cf2360727a09b775262d\"\n    \"7ee552b3319b9266f05a25\";\n    std::string eStr = \"010001\";\n    \n    size_t nLen = RsaConvertHex(params->n, nStr.size() / SPLIT_SIZE, nStr.c_str());\n    size_t eLen = RsaConvertHex(params->e, eStr.size() / SPLIT_SIZE, eStr.c_str());\n    \n    params->nData = {.data = params->n, .len = nLen};\n    params->eData = {.data = params->e, .len = eLen};\n}\n\nstatic OH_Crypto_ErrCode CreateRsaKeySpec(RsaParams *params, OH_CryptoAsymKeySpec **keySpec)\n{\n    OH_Crypto_ErrCode ret = OH_CryptoAsymKeySpec_Create(\"RSA\", CRYPTO_ASYM_KEY_PUBLIC_KEY_SPEC, keySpec);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    \n    ret = OH_CryptoAsymKeySpec_SetParam(*keySpec, CRYPTO_RSA_E_DATABLOB, &params->eData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(*keySpec);\n        return ret;\n    }\n    \n    ret = OH_CryptoAsymKeySpec_SetParam(*keySpec, CRYPTO_RSA_N_DATABLOB, &params->nData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(*keySpec);\n        return ret;\n    }\n    \n    return CRYPTO_SUCCESS;\n}\n\nstatic OH_Crypto_ErrCode GenerateRsaKeyPair(OH_CryptoAsymKeySpec *keySpec,\n    OH_CryptoAsymKeyGeneratorWithSpec **generatorSpec, OH_CryptoKeyPair **keyPair)\n{\n    OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGeneratorWithSpec_Create(keySpec, generatorSpec);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    \n    ret = OH_CryptoAsymKeyGeneratorWithSpec_GenKeyPair(*generatorSpec, keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGeneratorWithSpec_Destroy(*generatorSpec);\n        return ret;\n    }\n    \n    return CRYPTO_SUCCESS;\n}\n\nstatic OH_Crypto_ErrCode ValidateRsaKeyPair(OH_CryptoKeyPair *keyPair)\n{\n    Crypto_DataBlob dataE = {.data = nullptr, .len = 0};\n    Crypto_DataBlob dataN = {.data = nullptr, .len = 0};\n    OH_Crypto_ErrCode ret = GetRsaKeyParams(keyPair, &dataE, &dataN);\n    if (ret != CRYPTO_SUCCESS) {\n        FreeRsaKeyParams(&dataE, &dataN);\n        return ret;\n    }\n    FreeRsaKeyParams(&dataE, &dataN);\n    return CRYPTO_SUCCESS;\n}\n\nOH_Crypto_ErrCode doTestRsaGenKeyPairBySpec()\n{\n    RsaParams params = {};\n    PrepareRsaParams(&params);\n    \n    OH_CryptoAsymKeySpec *keySpec = nullptr;\n    OH_Crypto_ErrCode ret = CreateRsaKeySpec(&params, &keySpec);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    \n    OH_CryptoAsymKeyGeneratorWithSpec *generatorSpec = nullptr;\n    OH_CryptoKeyPair *keyPair = nullptr;\n    ret = GenerateRsaKeyPair(keySpec, &generatorSpec, &keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(keySpec);\n        return ret;\n    }\n    \n    ret = ValidateRsaKeyPair(keyPair);\n    \n    OH_CryptoKeyPair_Destroy(keyPair);\n    OH_CryptoAsymKeySpec_Destroy(keySpec);\n    OH_CryptoAsymKeyGeneratorWithSpec_Destroy(generatorSpec);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定密钥参数生成ecc密钥对",
      children: "指定密钥参数生成ECC密钥对"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#ecc",
        children: "非对称密钥生成和转换规格：ECC"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeyspec_create",
            children: "OH_CryptoAsymKeySpec_Create"
          }), "，指定算法名为\"ECC\"， 密钥参数类型为CRYPTO_ASYM_KEY_COMMON_PARAMS_SPEC，创建参数对象（keySpec）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["指定uint8_t类型的ECC公私钥包含的公共参数（p、a、b、gx、gy、n、h），分别封装成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
            children: "Crypto_DataBlob"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeyspec_setparam",
            children: "OH_CryptoAsymKeySpec_SetParam"
          }), "，指定参数类型分别为CRYPTO_ECC_FP_P_DATABLOB（p）、CRYPTO_ECC_A_DATABLOB（a）、CRYPTO_ECC_B_DATABLOB（b）、CRYPTO_ECC_G_X_DATABLOB（gx）、CRYPTO_ECC_G_Y_DATABLOB（gy）、CRYPTO_ECC_N_DATABLOB（n）、CRYPTO_ECC_H_INT（h）, 依次传入封装后的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
            children: "Crypto_DataBlob"
          }), "，设置到参数对象（keySpec）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(250755)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "p、a、b、gx、gy、n、h均要以大端模式输入，且必须为正数。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygeneratorwithspec_create",
            children: "OH_CryptoAsymKeyGeneratorWithSpec_Create"
          }), "，将参数对象（keySpec）传入，创建非对称密钥生成器（generatorSpec）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygeneratorwithspec_genkeypair",
            children: "OH_CryptoAsymKeyGeneratorWithSpec_GenKeyPair"
          }), "，生成ECC密钥对（keyPair）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["分别传入密钥对中的私钥和公钥，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoprivkey_getparam",
            children: "OH_CryptoPrivKey_GetParam"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptopubkey_getparam",
            children: "OH_CryptoPubKey_GetParam"
          }), "，获取ECC算法中私钥和公钥的各种密钥参数。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n#include <string>\n\n#define SPLIT_SIZE 2\n\nstatic OH_Crypto_ErrCode GetEccKeyParams(OH_CryptoKeyPair *keyCtx, Crypto_DataBlob *pubKeyXData,\n    Crypto_DataBlob *pubKeyYData, Crypto_DataBlob *privKeyData)\n{\n    OH_CryptoPubKey *pubKey = OH_CryptoKeyPair_GetPubKey(keyCtx);\n    if (pubKey == nullptr) {\n        return CRYPTO_OPERTION_ERROR;\n    }\n    OH_Crypto_ErrCode ret = OH_CryptoPubKey_GetParam(pubKey, CRYPTO_ECC_PK_X_DATABLOB, pubKeyXData);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    ret = OH_CryptoPubKey_GetParam(pubKey, CRYPTO_ECC_PK_Y_DATABLOB, pubKeyYData);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    OH_CryptoPrivKey *privKey = OH_CryptoKeyPair_GetPrivKey(keyCtx);\n    if (privKey == nullptr) {\n        return CRYPTO_OPERTION_ERROR;\n    }\n    ret = OH_CryptoPrivKey_GetParam(privKey, CRYPTO_ECC_SK_DATABLOB, privKeyData);\n    return ret;\n}\n\nstatic void FreeEccKeyParams(Crypto_DataBlob *pubKeyXData, Crypto_DataBlob *pubKeyYData, Crypto_DataBlob *privKeyData)\n{\n    OH_Crypto_FreeDataBlob(pubKeyXData);\n    OH_Crypto_FreeDataBlob(pubKeyYData);\n    OH_Crypto_FreeDataBlob(privKeyData);\n}\n\nstruct EccCommonParams {\n    Crypto_DataBlob pData;\n    Crypto_DataBlob aData;\n    Crypto_DataBlob bData;\n    Crypto_DataBlob gxData;\n    Crypto_DataBlob gyData;\n    Crypto_DataBlob nData;\n    Crypto_DataBlob hData;\n};\n\nstatic OH_Crypto_ErrCode GetEccCommonParams(OH_CryptoKeyPair *keyCtx, EccCommonParams *params)\n{\n    OH_CryptoPrivKey *privKey = OH_CryptoKeyPair_GetPrivKey(keyCtx);\n    if (privKey == nullptr) {\n        return CRYPTO_OPERTION_ERROR;\n    }\n    OH_Crypto_ErrCode ret = OH_CryptoPrivKey_GetParam(privKey, CRYPTO_ECC_FP_P_DATABLOB, &params->pData);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    ret = OH_CryptoPrivKey_GetParam(privKey, CRYPTO_ECC_A_DATABLOB, &params->aData);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    ret = OH_CryptoPrivKey_GetParam(privKey, CRYPTO_ECC_B_DATABLOB, &params->bData);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    ret = OH_CryptoPrivKey_GetParam(privKey, CRYPTO_ECC_G_X_DATABLOB, &params->gxData);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    ret = OH_CryptoPrivKey_GetParam(privKey, CRYPTO_ECC_G_Y_DATABLOB, &params->gyData);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    ret = OH_CryptoPrivKey_GetParam(privKey, CRYPTO_ECC_N_DATABLOB, &params->nData);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    ret = OH_CryptoPrivKey_GetParam(privKey, CRYPTO_ECC_H_INT, &params->hData);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    return ret;\n}\n\nstatic void FreeEccCommonParams(EccCommonParams *params)\n{\n    OH_Crypto_FreeDataBlob(&params->pData);\n    OH_Crypto_FreeDataBlob(&params->aData);\n    OH_Crypto_FreeDataBlob(&params->bData);\n    OH_Crypto_FreeDataBlob(&params->gxData);\n    OH_Crypto_FreeDataBlob(&params->gyData);\n    OH_Crypto_FreeDataBlob(&params->nData);\n    OH_Crypto_FreeDataBlob(&params->hData);\n}\n\nsize_t ConvertHex(uint8_t* dest, size_t count, const char* src)\n{\n    size_t i;\n    int value;\n\n    for (i = 0; i < count && sscanf(src + i * SPLIT_SIZE, \"%2x\", &value) == 1; i++) {\n        dest[i] = value;\n    }\n    return i;\n}\n\nstruct EccParams {\n    Crypto_DataBlob pData;\n    Crypto_DataBlob aData;\n    Crypto_DataBlob bData;\n    Crypto_DataBlob gxData;\n    Crypto_DataBlob gyData;\n    Crypto_DataBlob nData;\n    Crypto_DataBlob hData;\n    uint8_t p[256];\n    uint8_t gx[256];\n    uint8_t gy[256];\n    uint8_t a[256];\n    uint8_t b[256];\n    uint8_t n[256];\n    uint8_t h[4];\n};\n\nstatic void PrepareEccParams(EccParams *params)\n{\n    std::string pStr = \"ffffffffffffffffffffffffffffffff000000000000000000000001\";\n    std::string gxStr = \"b70e0cbd6bb4bf7f321390b94a03c1d356c21122343280d6115c1d21\";\n    std::string gyStr = \"bd376388b5f723fb4c22dfe6cd4375a05a07476444d5819985007e34\";\n    std::string aStr = \"fffffffffffffffffffffffffffffffefffffffffffffffffffffffe\";\n    std::string bStr = \"b4050a850c04b3abf54132565044b0b7d7bfd8ba270b39432355ffb4\";\n    std::string nStr = \"ffffffffffffffffffffffffffff16a2e0b8f03e13dd29455c5c2a3d\";\n    uint8_t h[] = {0x00, 0x00, 0x00, 0x01}; // 大端序\n\n    size_t pLen = ConvertHex(params->p, pStr.size() / SPLIT_SIZE, pStr.c_str());\n    size_t gxLen = ConvertHex(params->gx, gxStr.size() / SPLIT_SIZE, gxStr.c_str());\n    size_t gyLen = ConvertHex(params->gy, gyStr.size() / SPLIT_SIZE, gyStr.c_str());\n    size_t aLen = ConvertHex(params->a, aStr.size() / SPLIT_SIZE, aStr.c_str());\n    size_t bLen = ConvertHex(params->b, bStr.size() / SPLIT_SIZE, bStr.c_str());\n    size_t nLen = ConvertHex(params->n, nStr.size() / SPLIT_SIZE, nStr.c_str());\n\n    params->pData = {.data = params->p, .len = pLen};\n    params->aData = {.data = params->a, .len = aLen};\n    params->bData = {.data = params->b, .len = bLen};\n    params->gxData = {.data = params->gx, .len = gxLen};\n    params->gyData = {.data = params->gy, .len = gyLen};\n    params->nData = {.data = params->n, .len = nLen};\n    params->hData = {.data = h, .len = sizeof(h)};\n}\n\nstatic OH_Crypto_ErrCode CreateEccKeySpec(EccParams *params, OH_CryptoAsymKeySpec **keySpec)\n{\n    OH_Crypto_ErrCode ret = OH_CryptoAsymKeySpec_Create(\"ECC\", CRYPTO_ASYM_KEY_COMMON_PARAMS_SPEC, keySpec);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    ret = OH_CryptoAsymKeySpec_SetParam(*keySpec, CRYPTO_ECC_FP_P_DATABLOB, &params->pData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(*keySpec);\n        return ret;\n    }\n\n    ret = OH_CryptoAsymKeySpec_SetParam(*keySpec, CRYPTO_ECC_A_DATABLOB, &params->aData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(*keySpec);\n        return ret;\n    }\n\n    ret = OH_CryptoAsymKeySpec_SetParam(*keySpec, CRYPTO_ECC_B_DATABLOB, &params->bData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(*keySpec);\n        return ret;\n    }\n\n    ret = OH_CryptoAsymKeySpec_SetParam(*keySpec, CRYPTO_ECC_G_X_DATABLOB, &params->gxData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(*keySpec);\n        return ret;\n    }\n\n    ret = OH_CryptoAsymKeySpec_SetParam(*keySpec, CRYPTO_ECC_G_Y_DATABLOB, &params->gyData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(*keySpec);\n        return ret;\n    }\n\n    ret = OH_CryptoAsymKeySpec_SetParam(*keySpec, CRYPTO_ECC_N_DATABLOB, &params->nData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(*keySpec);\n        return ret;\n    }\n\n    ret = OH_CryptoAsymKeySpec_SetParam(*keySpec, CRYPTO_ECC_H_INT, &params->hData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(*keySpec);\n        return ret;\n    }\n\n    return CRYPTO_SUCCESS;\n}\n\nstatic OH_Crypto_ErrCode GenerateEccKeyPair(OH_CryptoAsymKeySpec *keySpec,\n    OH_CryptoAsymKeyGeneratorWithSpec **generatorSpec, OH_CryptoKeyPair **keyPair)\n{\n    OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGeneratorWithSpec_Create(keySpec, generatorSpec);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    ret = OH_CryptoAsymKeyGeneratorWithSpec_GenKeyPair(*generatorSpec, keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGeneratorWithSpec_Destroy(*generatorSpec);\n        return ret;\n    }\n\n    return CRYPTO_SUCCESS;\n}\n\nstatic OH_Crypto_ErrCode ValidateEccKeyPair(OH_CryptoKeyPair *keyPair)\n{\n    Crypto_DataBlob dataPkX = {.data = nullptr, .len = 0};\n    Crypto_DataBlob dataPkY = {.data = nullptr, .len = 0};\n    Crypto_DataBlob dataSk = {.data = nullptr, .len = 0};\n    OH_Crypto_ErrCode ret = GetEccKeyParams(keyPair, &dataPkX, &dataPkY, &dataSk);\n    if (ret != CRYPTO_SUCCESS) {\n        FreeEccKeyParams(&dataPkX, &dataPkY, &dataSk);\n        return ret;\n    }\n    FreeEccKeyParams(&dataPkX, &dataPkY, &dataSk);\n\n    EccCommonParams commonParams = {};\n    ret = GetEccCommonParams(keyPair, &commonParams);\n    if (ret != CRYPTO_SUCCESS) {\n        FreeEccCommonParams(&commonParams);\n        return ret;\n    }\n    FreeEccCommonParams(&commonParams);\n\n    return CRYPTO_SUCCESS;\n}\n\nOH_Crypto_ErrCode doTestEccGenKeyPairBySpec()\n{\n    EccParams params = {};\n    PrepareEccParams(&params);\n\n    OH_CryptoAsymKeySpec *keySpec = nullptr;\n    OH_Crypto_ErrCode ret = CreateEccKeySpec(&params, &keySpec);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    OH_CryptoAsymKeyGeneratorWithSpec *generatorSpec = nullptr;\n    OH_CryptoKeyPair *keyPair = nullptr;\n    ret = GenerateEccKeyPair(keySpec, &generatorSpec, &keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(keySpec);\n        return ret;\n    }\n\n    ret = ValidateEccKeyPair(keyPair);\n\n    OH_CryptoKeyPair_Destroy(keyPair);\n    OH_CryptoAsymKeySpec_Destroy(keySpec);\n    OH_CryptoAsymKeyGeneratorWithSpec_Destroy(generatorSpec);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "根据椭圆曲线名生成sm2密钥对",
      children: "根据椭圆曲线名生成SM2密钥对"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#sm2",
        children: "非对称密钥生成和转换规格：SM2"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeyspec_create",
            children: "OH_CryptoAsymKeySpec_Create"
          }), "，指定算法名为\"SM2\"， 密钥参数类型为CRYPTO_ASYM_KEY_KEY_PAIR_SPEC，创建密钥参数对象（keySpec）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeyspec_geneccommonparamsspec",
            children: "OH_CryptoAsymKeySpec_GenEcCommonParamsSpec"
          }), "，指定曲线为\"NID_sm2\"， 生成SM2公共参数对象（sm2CommonSpec）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeyspec_setcommonparamsspec",
            children: "OH_CryptoAsymKeySpec_SetCommonParamsSpec"
          }), "，将生成SM2公共参数对象（sm2CommonSpec）设置到密钥参数对象（keySpec）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["指定uint8_t类型的SM2密钥对数据（pkx、pky、sk），分别封装成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
            children: "Crypto_DataBlob"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeyspec_setparam",
            children: "OH_CryptoAsymKeySpec_SetParam"
          }), "，指定参数类型分别为CRYPTO_ECC_PK_X_DATABLOB（pkx）、CRYPTO_ECC_PK_Y_DATABLOB（pky）、CRYPTO_ECC_SK_DATABLOB（sk）, 依次传入封装后的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-struct/capi-cryptocommonapi-crypto-datablob/capi-cryptocommonapi-crypto-datablob",
            children: "Crypto_DataBlob"
          }), "，设置到参数对象（keySpec）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(530455)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "pkx、pky、sk均要以大端模式输入，且必须为正数。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygeneratorwithspec_create",
            children: "OH_CryptoAsymKeyGeneratorWithSpec_Create"
          }), "，将参数对象（keySpec）传入，创建非对称密钥生成器（generatorSpec）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoasymkeygeneratorwithspec_genkeypair",
            children: "OH_CryptoAsymKeyGeneratorWithSpec_GenKeyPair"
          }), "，生成SM2密钥对（keyPair）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["分别传入密钥对中的私钥和公钥，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptoprivkey_getparam",
            children: "OH_CryptoPrivKey_GetParam"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-c/crypto-architecture-headerfile/capi-crypto-asym-key-h/capi-crypto-asym-key-h#oh_cryptopubkey_getparam",
            children: "OH_CryptoPubKey_GetParam"
          }), "，获取SM2算法中私钥和公钥的各种密钥参数。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"CryptoArchitectureKit/crypto_architecture_kit.h\"\n#include <string>\n#define SPLIT_SIZE 2\n\nstatic OH_Crypto_ErrCode GetEccKeyParams(OH_CryptoKeyPair *keyCtx, Crypto_DataBlob *pubKeyXData,\n    Crypto_DataBlob *pubKeyYData, Crypto_DataBlob *privKeyData)\n{\n    OH_CryptoPubKey *pubKey = OH_CryptoKeyPair_GetPubKey(keyCtx);\n    if (pubKey == nullptr) {\n        return CRYPTO_OPERTION_ERROR;\n    }\n    OH_Crypto_ErrCode ret = OH_CryptoPubKey_GetParam(pubKey, CRYPTO_ECC_PK_X_DATABLOB, pubKeyXData);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    ret = OH_CryptoPubKey_GetParam(pubKey, CRYPTO_ECC_PK_Y_DATABLOB, pubKeyYData);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n\n    OH_CryptoPrivKey *privKey = OH_CryptoKeyPair_GetPrivKey(keyCtx);\n    if (privKey == nullptr) {\n        return CRYPTO_OPERTION_ERROR;\n    }\n    ret = OH_CryptoPrivKey_GetParam(privKey, CRYPTO_ECC_SK_DATABLOB, privKeyData);\n    return ret;\n}\n\nstatic void FreeEccKeyParams(Crypto_DataBlob *pubKeyXData, Crypto_DataBlob *pubKeyYData, Crypto_DataBlob *privKeyData)\n{\n    OH_Crypto_FreeDataBlob(pubKeyXData);\n    OH_Crypto_FreeDataBlob(pubKeyYData);\n    OH_Crypto_FreeDataBlob(privKeyData);\n}\n\nsize_t Sm2ConvertHex(uint8_t* dest, size_t count, const char* src)\n{\n    size_t i;\n    int value;\n\n    for (i = 0; i < count && sscanf(src + i * SPLIT_SIZE, \"%2x\", &value) == 1; i++) {\n        dest[i] = value;\n    }\n    return i;\n}\n\nstruct Sm2Params {\n    Crypto_DataBlob pkXData;\n    Crypto_DataBlob pkYData;\n    Crypto_DataBlob skData;\n    uint8_t pkX[256];\n    uint8_t pkY[256];\n    uint8_t sk[256];\n};\n\nstatic void PrepareSm2Params(Sm2Params *params)\n{\n    std::string pkXStr = \"67F3B850BDC0BA5D3A29D8A0883C4B17612AB84F87F18E28F77D824A115C02C4\";\n    std::string pkYStr = \"D48966CE754BBBEDD6501A1385E1B205C186E926ADED44287145E8897D4B2071\";\n    std::string skStr = \"6330B599ECD23ABDC74B9A5B7B5E00E553005F72743101C5FAB83AEB579B7074\";\n    \n    size_t pkXLen = Sm2ConvertHex(params->pkX, pkXStr.size() / SPLIT_SIZE, pkXStr.c_str());\n    size_t pkYLen = Sm2ConvertHex(params->pkY, pkYStr.size() / SPLIT_SIZE, pkYStr.c_str());\n    size_t skLen = Sm2ConvertHex(params->sk, skStr.size() / SPLIT_SIZE, skStr.c_str());\n    \n    params->pkXData = {.data = params->pkX, .len = pkXLen};\n    params->pkYData = {.data = params->pkY, .len = pkYLen};\n    params->skData = {.data = params->sk, .len = skLen};\n}\n\nstatic OH_Crypto_ErrCode CreateSm2KeySpec(Sm2Params *params, OH_CryptoAsymKeySpec **keySpec,\n    OH_CryptoAsymKeySpec **sm2CommonSpec)\n{\n    OH_Crypto_ErrCode ret = OH_CryptoAsymKeySpec_Create(\"SM2\", CRYPTO_ASYM_KEY_KEY_PAIR_SPEC, keySpec);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    \n    ret = OH_CryptoAsymKeySpec_GenEcCommonParamsSpec(\"NID_sm2\", sm2CommonSpec);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(*keySpec);\n        return ret;\n    }\n    \n    ret = OH_CryptoAsymKeySpec_SetCommonParamsSpec(*keySpec, *sm2CommonSpec);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(*sm2CommonSpec);\n        OH_CryptoAsymKeySpec_Destroy(*keySpec);\n        return ret;\n    }\n    \n    ret = OH_CryptoAsymKeySpec_SetParam(*keySpec, CRYPTO_ECC_PK_X_DATABLOB, &params->pkXData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(*sm2CommonSpec);\n        OH_CryptoAsymKeySpec_Destroy(*keySpec);\n        return ret;\n    }\n    \n    ret = OH_CryptoAsymKeySpec_SetParam(*keySpec, CRYPTO_ECC_PK_Y_DATABLOB, &params->pkYData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(*sm2CommonSpec);\n        OH_CryptoAsymKeySpec_Destroy(*keySpec);\n        return ret;\n    }\n    \n    ret = OH_CryptoAsymKeySpec_SetParam(*keySpec, CRYPTO_ECC_SK_DATABLOB, &params->skData);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(*sm2CommonSpec);\n        OH_CryptoAsymKeySpec_Destroy(*keySpec);\n        return ret;\n    }\n    \n    return CRYPTO_SUCCESS;\n}\n\nstatic OH_Crypto_ErrCode GenerateSm2KeyPair(OH_CryptoAsymKeySpec *keySpec,\n    OH_CryptoAsymKeyGeneratorWithSpec **generatorSpec, OH_CryptoKeyPair **keyPair)\n{\n    OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGeneratorWithSpec_Create(keySpec, generatorSpec);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    \n    ret = OH_CryptoAsymKeyGeneratorWithSpec_GenKeyPair(*generatorSpec, keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeyGeneratorWithSpec_Destroy(*generatorSpec);\n        return ret;\n    }\n    \n    return CRYPTO_SUCCESS;\n}\n\nstatic OH_Crypto_ErrCode ValidateSm2KeyPair(OH_CryptoKeyPair *keyPair)\n{\n    Crypto_DataBlob dataPkX = {.data = nullptr, .len = 0};\n    Crypto_DataBlob dataPkY = {.data = nullptr, .len = 0};\n    Crypto_DataBlob dataSk = {.data = nullptr, .len = 0};\n    OH_Crypto_ErrCode ret = GetEccKeyParams(keyPair, &dataPkX, &dataPkY, &dataSk);\n    if (ret != CRYPTO_SUCCESS) {\n        FreeEccKeyParams(&dataPkX, &dataPkY, &dataSk);\n        return ret;\n    }\n    FreeEccKeyParams(&dataPkX, &dataPkY, &dataSk);\n    return CRYPTO_SUCCESS;\n}\n\nOH_Crypto_ErrCode doTestSm2GenKeyPairBySpec()\n{\n    Sm2Params params = {};\n    PrepareSm2Params(&params);\n    \n    OH_CryptoAsymKeySpec *keySpec = nullptr;\n    OH_CryptoAsymKeySpec *sm2CommonSpec = nullptr;\n    OH_Crypto_ErrCode ret = CreateSm2KeySpec(&params, &keySpec, &sm2CommonSpec);\n    if (ret != CRYPTO_SUCCESS) {\n        return ret;\n    }\n    \n    OH_CryptoAsymKeyGeneratorWithSpec *generatorSpec = nullptr;\n    OH_CryptoKeyPair *keyPair = nullptr;\n    ret = GenerateSm2KeyPair(keySpec, &generatorSpec, &keyPair);\n    if (ret != CRYPTO_SUCCESS) {\n        OH_CryptoAsymKeySpec_Destroy(sm2CommonSpec);\n        OH_CryptoAsymKeySpec_Destroy(keySpec);\n        return ret;\n    }\n    \n    ret = ValidateSm2KeyPair(keyPair);\n    \n    OH_CryptoKeyPair_Destroy(keyPair);\n    OH_CryptoAsymKeyGeneratorWithSpec_Destroy(generatorSpec);\n    OH_CryptoAsymKeySpec_Destroy(sm2CommonSpec);\n    OH_CryptoAsymKeySpec_Destroy(keySpec);\n    return ret;\n}\n"
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
530455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
102541(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
250755(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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