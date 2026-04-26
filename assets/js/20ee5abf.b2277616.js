"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["545754"], {
524682(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_generate_asym_key_pair_from_key_spec_crypto_generate_asym_key_pair_from_key_spec_md_20e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-generation-conversion-crypto-key-generation-conversion-dev-crypto-generate-asym-key-pair-from-key-spec-crypto-generate-asym-key-pair-from-key-spec-md-20e.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_generate_asym_key_pair_from_key_spec_crypto_generate_asym_key_pair_from_key_spec_md_20e_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec/crypto-generate-asym-key-pair-from-key-spec","title":"指定密钥参数生成非对称密钥对(ArkTS)","description":"以RSA、ECC、SM2为例，根据指定的密钥参数，生成非对称密钥对（KeyPair），并获取密钥参数属性。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec/crypto-generate-asym-key-pair-from-key-spec.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec","slug":"/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"指定密钥参数生成非对称密钥对(ArkTS)","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-asym-key-pair-from-key-spec","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"指定二进制数据转换非对称密钥对(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-asym-key-pair-ndk/"},"next":{"title":"指定密钥参数生成非对称密钥对(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec/crypto-generate-asym-key-pair-from-key-spec.md


const frontMatter = {
	title: '指定密钥参数生成非对称密钥对(ArkTS)',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-asym-key-pair-from-key-spec',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '指定密钥参数生成非对称密钥对(ArkTS)';

const assets = {

};



const toc = [{
  "value": "指定密钥参数生成RSA公钥",
  "id": "指定密钥参数生成rsa公钥",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "指定密钥参数生成非对称密钥对arkts",
        children: "指定密钥参数生成非对称密钥对(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以RSA、ECC、SM2为例，根据指定的密钥参数，生成非对称密钥对（KeyPair），并获取密钥参数属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该对象可用于后续的加解密等操作。获取的密钥参数属性可用于存储或传输。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定密钥参数生成rsa公钥",
      children: "指定密钥参数生成RSA公钥"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#rsa",
        children: "非对称密钥生成和转换规格：RSA"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#rsacommonparamsspec10",
            children: "RSACommonParamsSpec"
          }), "对象，用于指定RSA算法中公私钥包含的公共参数（n）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RSACommonParamsSpec是AsyKeySpec的子类。需要通过参数algName指定算法'RSA'；指定密钥参数类型AsyKeySpecType.COMMON_PARAMS_SPEC，表示是公私钥中包含的公共参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用密钥参数生成密钥时，bigint类型参数需采用大端字节序输入，且值应为正数以满足数学运算要求。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#rsapubkeyspec10",
            children: "RSAPubKeySpec"
          }), "对象，用于指定RSA算法中公钥包含的参数（n, pk）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RSAPubKeySpec是AsyKeySpec的子类。通过参数algName指定算法'RSA'；指定密钥参数类型AsyKeySpecType.PUBLIC_KEY_SPEC，表示是公钥中包含的参数。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygeneratorbyspec10",
            children: "cryptoFramework.createAsyKeyGeneratorBySpec"
          }), "，将RSAPubKeySpec对象传入，创建非对称密钥生成器（AsyKeyGeneratorBySpec）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatepubkey10",
            children: "AsyKeyGeneratorBySpec.generatePubKey"
          }), "，获得指定的公钥（PubKey）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getasykeyspec10",
            children: "PubKey.getAsyKeySpec"
          }), "，获取模数n和公钥pk（即公钥指数e）。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用callback方式根据密钥参数生成RSA公钥为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\n// RSA公钥密钥参数生成函数\nfunction genRsaPubKeySpec(nIn: bigint, eIn: bigint): cryptoFramework.RSAPubKeySpec {\n  let rsaCommSpec: cryptoFramework.RSACommonParamsSpec = {\n    n: nIn,\n    algName: 'RSA',\n    specType: cryptoFramework.AsyKeySpecType.COMMON_PARAMS_SPEC\n  };\n  let rsaPubKeySpec: cryptoFramework.RSAPubKeySpec = {\n    params: rsaCommSpec,\n    pk: eIn,\n    algName: 'RSA',\n    specType: cryptoFramework.AsyKeySpecType.PUBLIC_KEY_SPEC\n  };\n  return rsaPubKeySpec;\n}\n\n// 根据密钥参数构造RSA公钥规范对象\nfunction genRsa2048PubKeySpec() {\n  let nIn =\n    BigInt('0x9260d0750ae117eee55c3f3deaba74917521a262ee76007cdf8a56755ad73a1598a1408410a01434c3f5bc54a88b57fa19fc4' +\n      '328daea0750a4c44e88cff3b2382621b80f670464433e4336e6d003e8cd65bff211da144b88291c2259a00a72b711c116ef7686e8fee' +\n      '34e4d933c868187bdc26f7be071493c86f7a5941c3510806ad67b0f94d88f5cf5c02a092821d8626e8932b65c5bd8c92049c210932b7' +\n      'afa7ac59c0e886ae5c1edb00d8ce2c57633db26bd6639bff73cee82be9275c402b4cf2a4388da8cf8c64eefe1c5a0f5ab8057c39fa5c' +\n      '0589c3e253f0960332300f94bea44877b588e1edbde97cf2360727a09b775262d7ee552b3319b9266f05a25');\n  let eIn = BigInt('0x010001');\n  return genRsaPubKeySpec(nIn, eIn);\n}\n\n// 将RSA公钥规格与预期值进行比较\nfunction compareRsaPubKeyBySpec(rsaKeySpec: cryptoFramework.RSAPubKeySpec, n: bigint | string | number,\n  e: bigint | string | number) {\n  if (typeof n === 'string' || typeof e === 'string') {\n    console.error('type: string');\n    return false;\n  }\n  if (typeof n === 'number' || typeof e === 'number') {\n    console.error('type: number');\n    return false;\n  }\n  if (rsaKeySpec.params.n != n) {\n    return false;\n  }\n  if (rsaKeySpec.pk != e) {\n    return false;\n  }\n  return true;\n}\n\n// 根据RSA公钥规格生成RSA公钥，获取密钥规格，并与预期值进行比较\nfunction rsaUsePubKeySpecGetCallback() {\n  let rsaPubKeySpec = genRsa2048PubKeySpec();\n  let rsaGeneratorSpec = cryptoFramework.createAsyKeyGeneratorBySpec(rsaPubKeySpec);\n  rsaGeneratorSpec.generatePubKey((error, key) => {\n    if (error) {\n      console.error('generate pubKey failed, ' + 'error code: ' + error.code + 'error message' + error.message);\n    }\n    let pubKey = key;\n    let nBN = pubKey.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.RSA_N_BN);\n    let eBN = pubKey.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.RSA_PK_BN);\n    if (compareRsaPubKeyBySpec(rsaPubKeySpec, nBN, eBN) != true) {\n      console.error('error pub key big number');\n    } else {\n      console.info('n, e in the pubKey are same as the spec.');\n    }\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["同步返回结果（调用方法", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatepubkeysync12",
            children: "generatePubKeySync"
          }), "）："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\n// RSA公钥密钥参数生成函数\nfunction genRsaPubKeySpec(nIn: bigint, eIn: bigint): cryptoFramework.RSAPubKeySpec {\n  let rsaCommSpec: cryptoFramework.RSACommonParamsSpec = {\n    n: nIn,\n    algName: 'RSA',\n    specType: cryptoFramework.AsyKeySpecType.COMMON_PARAMS_SPEC\n  };\n  let rsaPubKeySpec: cryptoFramework.RSAPubKeySpec = {\n    params: rsaCommSpec,\n    pk: eIn,\n    algName: 'RSA',\n    specType: cryptoFramework.AsyKeySpecType.PUBLIC_KEY_SPEC\n  };\n  return rsaPubKeySpec;\n}\n\n// 根据密钥参数构造RSA公钥规范对象\nfunction genRsa2048PubKeySpec() {\n  let nIn =\n    BigInt('0x9260d0750ae117eee55c3f3deaba74917521a262ee76007cdf8a56755ad73a1598a1408410a01434c3f5bc54a88b57fa19fc43' +\n      '28daea0750a4c44e88cff3b2382621b80f670464433e4336e6d003e8cd65bff211da144b88291c2259a00a72b711c116ef7686e8fee34' +\n      'e4d933c868187bdc26f7be071493c86f7a5941c3510806ad67b0f94d88f5cf5c02a092821d8626e8932b65c5bd8c92049c210932b7afa' +\n      '7ac59c0e886ae5c1edb00d8ce2c57633db26bd6639bff73cee82be9275c402b4cf2a4388da8cf8c64eefe1c5a0f5ab8057c39fa5c0589' +\n      'c3e253f0960332300f94bea44877b588e1edbde97cf2360727a09b775262d7ee552b3319b9266f05a25');\n  let eIn = BigInt('0x010001');\n  return genRsaPubKeySpec(nIn, eIn);\n}\n\n// 将RSA公钥规格与预期值进行比较\nfunction compareRsaPubKeyBySpec(rsaKeySpec: cryptoFramework.RSAPubKeySpec, n: bigint | string | number,\n  e: bigint | string | number) {\n  if (typeof n === 'string' || typeof e === 'string') {\n    console.error('type: string');\n    return false;\n  }\n  if (typeof n === 'number' || typeof e === 'number') {\n    console.error('type: number');\n    return false;\n  }\n  if (rsaKeySpec.params.n != n) {\n    return false;\n  }\n  if (rsaKeySpec.pk != e) {\n    return false;\n  }\n  return true;\n}\n\n// 根据RSA公钥规格生成RSA公钥，获取密钥规格，并与预期值进行比较\nfunction rsaUsePubKeySpecGetSync() {\n  let rsaPubKeySpec = genRsa2048PubKeySpec();\n  let rsaGeneratorSpec = cryptoFramework.createAsyKeyGeneratorBySpec(rsaPubKeySpec);\n  try {\n    let pubKey = rsaGeneratorSpec.generatePubKeySync();\n    if (pubKey != null) {\n      let nBN = pubKey.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.RSA_N_BN);\n      let eBN = pubKey.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.RSA_PK_BN);\n      if (compareRsaPubKeyBySpec(rsaPubKeySpec, nBN, eBN) != true) {\n        console.error('error pub key big number');\n      } else {\n        console.info('n, e in the pubKey are same as the spec.');\n      }\n    } else {\n      console.error('get pub key result: fail!');\n    }\n  } catch (e) {\n    console.error(`get pub key result failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
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
          children: ["构造", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#ecccommonparamsspec10",
            children: "ECCCommonParamsSpec"
          }), "对象，用于指定ECC算法中公私钥包含的公共参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ECCCommonParamsSpec是AsyKeySpec的子类。需要通过参数algName指定算法'ECC'；指定密钥参数类型AsyKeySpecType.COMMON_PARAMS_SPEC，表示是公私钥中包含的公共参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用密钥参数生成密钥时，bigint类型参数需采用大端字节序输入，且值应为正数以满足数学运算要求。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygeneratorbyspec10",
            children: "cryptoFramework.createAsyKeyGeneratorBySpec"
          }), "，将ECCCommonParamsSpec对象传入，创建非对称密钥生成器（AsyKeyGeneratorBySpec）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatekeypair10",
            children: "AsyKeyGeneratorBySpec.generateKeyPair"
          }), "，得到随机生成的密钥对（KeyPair）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["分别传入密钥对中的私钥和公钥，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getasykeyspec10-1",
            children: "PriKey.getAsyKeySpec"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getasykeyspec10",
            children: "PubKey.getAsyKeySpec"
          }), "，获取ECC算法中私钥和公钥的各种密钥参数。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用Promise方式根据密钥参数生成ECC密钥为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 打印bigint信息\nfunction showBigIntInfo(bnName: string, bnValue: bigint | string | number) {\n  if (typeof bnValue === 'string') {\n    console.error('type: string');\n    return;\n  }\n  if (typeof bnValue === 'number') {\n    console.error('type: number');\n    return;\n  }\n  console.info(bnName + ':');\n  console.info('. Decimal: ' + bnValue.toString());\n  console.info('. Hexadecimal: ' + bnValue.toString(16));\n  console.info('. Length (bits): ' + bnValue.toString(2).length);\n}\n\n// 根据密钥规格构造ECCCommonParamsSpec结构体。ECCCommonParamsSpec结构体定义了ECC私钥和公钥的公共参数\nfunction genEccCommonSpec(): cryptoFramework.ECCCommonParamsSpec {\n  let fieldFp: cryptoFramework.ECFieldFp = {\n    fieldType: 'Fp',\n    p: BigInt('0xffffffffffffffffffffffffffffffff000000000000000000000001')\n  }\n  let G: cryptoFramework.Point = {\n    x: BigInt('0xb70e0cbd6bb4bf7f321390b94a03c1d356c21122343280d6115c1d21'),\n    y: BigInt('0xbd376388b5f723fb4c22dfe6cd4375a05a07476444d5819985007e34')\n  }\n  let eccCommonSpec: cryptoFramework.ECCCommonParamsSpec = {\n    algName: 'ECC',\n    specType: cryptoFramework.AsyKeySpecType.COMMON_PARAMS_SPEC,\n    field: fieldFp,\n    a: BigInt('0xfffffffffffffffffffffffffffffffefffffffffffffffffffffffe'),\n    b: BigInt('0xb4050a850c04b3abf54132565044b0b7d7bfd8ba270b39432355ffb4'),\n    g: G,\n    n: BigInt('0xffffffffffffffffffffffffffff16a2e0b8f03e13dd29455c5c2a3d'),\n    h: 1\n  }\n  return eccCommonSpec;\n}\n\n// 打印ECC密钥规格\nfunction showEccSpecDetailInfo(key: cryptoFramework.PubKey | cryptoFramework.PriKey, keyType: string) {\n  console.info('show detail of ' + keyType + ':');\n  try {\n    let p = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_FP_P_BN);\n    showBigIntInfo('--- p', p); // length is 224, hex : ffffffffffffffffffffffffffffffff000000000000000000000001\n    let a = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_A_BN);\n    showBigIntInfo('--- a', a); // length is 224, hex : fffffffffffffffffffffffffffffffefffffffffffffffffffffffe\n    let b = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_B_BN);\n    showBigIntInfo('--- b', b); // length is 224, hex : b4050a850c04b3abf54132565044b0b7d7bfd8ba270b39432355ffb4\n    let gX = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_G_X_BN);\n    showBigIntInfo('--- gX', gX); // length is 224, hex : b70e0cbd6bb4bf7f321390b94a03c1d356c21122343280d6115c1d21\n    let gY = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_G_Y_BN);\n    showBigIntInfo('--- gY', gY); // length is 224, hex : bd376388b5f723fb4c22dfe6cd4375a05a07476444d5819985007e34\n    let n = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_N_BN);\n    showBigIntInfo('--- n', n); // length is 224, hex : ffffffffffffffffffffffffffff16a2e0b8f03e13dd29455c5c2a3d\n    let h = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_H_NUM);\n    console.warn('--- h: ' + h); // key h: 1\n    let fieldType = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_FIELD_TYPE_STR);\n    console.warn('--- field type: ' + fieldType); // key field type: Fp\n    let fieldSize = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_FIELD_SIZE_NUM);\n    console.warn('--- field size: ' + fieldSize); // key field size: 224\n    let curveName = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_CURVE_NAME_STR);\n    console.warn('--- curve name: ' + curveName); // key curve name: NID_secp224r1\n    if (keyType == 'priKey') {\n      let sk = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_SK_BN);\n      showBigIntInfo('--- sk', sk);\n    } else if (keyType == 'pubKey') {\n      let pkX = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_PK_X_BN);\n      showBigIntInfo('--- pkX', pkX);\n      let pkY = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_PK_Y_BN);\n      showBigIntInfo('--- pkY', pkY);\n    }\n  } catch (error) {\n    let e: BusinessError = error as BusinessError;\n    console.error(`getAsyKeySpec failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n}\n\n// 根据EccCommonSpec实例生成ECC密钥对，获取密钥规格\nfunction testEccUseCommKeySpecGet() {\n  try {\n    let commKeySpec = genEccCommonSpec(); // 使用参数属性，构造ECC公私钥公共密钥参数对象\n    let generatorBySpec = cryptoFramework.createAsyKeyGeneratorBySpec(commKeySpec); // 使用密钥参数对象创建生成器\n    let keyPairPromise = generatorBySpec.generateKeyPair(); // Generate an ECC key pair.\n    keyPairPromise.then(keyPair => { // 使用生成器创建ECC密钥对\n      showEccSpecDetailInfo(keyPair.priKey, 'priKey'); // 对私钥获取相关密钥参数属性\n      showEccSpecDetailInfo(keyPair.pubKey, 'pubKey'); // 对公钥获取相关密钥参数属性\n    }).catch((error: BusinessError) => {\n      // 逻辑错误等异步异常在此捕获\n      console.error(`generateComm failed: errCode: ${error.code}, message: ${error.message}`);\n    })\n  } catch (error) {\n    // 参数错误等同步异常在此捕获\n    let e: BusinessError = error as BusinessError;\n    console.error(`ecc comm spec failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["同步返回结果（调用方法", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatekeypairsync12",
            children: "generateKeyPairSync"
          }), "）："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction showBigIntInfo(bnName: string, bnValue: bigint | string | number) {\n  if (typeof bnValue === 'string') {\n    console.error('type: string');\n    return;\n  }\n  if (typeof bnValue === 'number') {\n    console.error('type: number');\n    return;\n  }\n  console.info(bnName + ':');\n  console.info('. Decimal: ' + bnValue.toString());\n  console.info('. Hexadecimal: ' + bnValue.toString(16));\n  console.info('. Length (bits): ' + bnValue.toString(2).length);\n}\n\n// 根据密钥规格构造ECCCommonParamsSpec结构体。ECCCommonParamsSpec结构体定义了ECC私钥和公钥的公共参数\nfunction genEccCommonSpec(): cryptoFramework.ECCCommonParamsSpec {\n  let fieldFp: cryptoFramework.ECFieldFp = {\n    fieldType: 'Fp',\n    p: BigInt('0xffffffffffffffffffffffffffffffff000000000000000000000001')\n  }\n  let G: cryptoFramework.Point = {\n    x: BigInt('0xb70e0cbd6bb4bf7f321390b94a03c1d356c21122343280d6115c1d21'),\n    y: BigInt('0xbd376388b5f723fb4c22dfe6cd4375a05a07476444d5819985007e34')\n  }\n  let eccCommonSpec: cryptoFramework.ECCCommonParamsSpec = {\n    algName: 'ECC',\n    specType: cryptoFramework.AsyKeySpecType.COMMON_PARAMS_SPEC,\n    field: fieldFp,\n    a: BigInt('0xfffffffffffffffffffffffffffffffefffffffffffffffffffffffe'),\n    b: BigInt('0xb4050a850c04b3abf54132565044b0b7d7bfd8ba270b39432355ffb4'),\n    g: G,\n    n: BigInt('0xffffffffffffffffffffffffffff16a2e0b8f03e13dd29455c5c2a3d'),\n    h: 1\n  }\n  return eccCommonSpec;\n}\n\n// 打印ECC密钥规格\nfunction showEccSpecDetailInfo(key: cryptoFramework.PubKey | cryptoFramework.PriKey, keyType: string) {\n  console.info('show detail of ' + keyType + ':');\n  try {\n    let p = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_FP_P_BN);\n    showBigIntInfo('--- p', p); // length is 224, hex : ffffffffffffffffffffffffffffffff000000000000000000000001\n    let a = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_A_BN);\n    showBigIntInfo('--- a', a); // length is 224, hex : fffffffffffffffffffffffffffffffefffffffffffffffffffffffe\n    let b = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_B_BN);\n    showBigIntInfo('--- b', b); // length is 224, hex : b4050a850c04b3abf54132565044b0b7d7bfd8ba270b39432355ffb4\n    let gX = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_G_X_BN);\n    showBigIntInfo('--- gX', gX); // length is 224, hex : b70e0cbd6bb4bf7f321390b94a03c1d356c21122343280d6115c1d21\n    let gY = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_G_Y_BN);\n    showBigIntInfo('--- gY', gY); // length is 224, hex : bd376388b5f723fb4c22dfe6cd4375a05a07476444d5819985007e34\n    let n = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_N_BN);\n    showBigIntInfo('--- n', n); // length is 224, hex : ffffffffffffffffffffffffffff16a2e0b8f03e13dd29455c5c2a3d\n    let h = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_H_NUM);\n    console.warn('--- h: ' + h); // key h: 1\n    let fieldType = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_FIELD_TYPE_STR);\n    console.warn('--- field type: ' + fieldType); // key field type: Fp\n    let fieldSize = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_FIELD_SIZE_NUM);\n    console.warn('--- field size: ' + fieldSize); // key field size: 224\n    let curveName = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_CURVE_NAME_STR);\n    console.warn('--- curve name: ' + curveName); // key curve name: NID_secp224r1\n    if (keyType == 'priKey') {\n      let sk = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_SK_BN);\n      showBigIntInfo('--- sk', sk);\n    } else if (keyType == 'pubKey') {\n      let pkX = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_PK_X_BN);\n      showBigIntInfo('--- pkX', pkX);\n      let pkY = key.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_PK_Y_BN);\n      showBigIntInfo('--- pkY', pkY);\n    }\n  } catch (e) {\n    console.error(`getAsyKeySpec failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n}\n\n// 根据EccCommonSpec实例生成ECC密钥对，获取密钥规格\nfunction testEccUseCommKeySpecGetSync() {\n  try {\n    let commKeySpec = genEccCommonSpec(); // 使用参数属性，构造ECC公私钥公共密钥参数对象\n    let generatorBySpec = cryptoFramework.createAsyKeyGeneratorBySpec(commKeySpec); // 使用密钥参数对象创建生成器\n    let keyPair = generatorBySpec.generateKeyPairSync(); // Generate an ECC key pair.\n    if (keyPair != null) {\n      showEccSpecDetailInfo(keyPair.priKey, 'priKey'); // 对私钥获取相关密钥参数属性\n      showEccSpecDetailInfo(keyPair.pubKey, 'pubKey'); // 对公钥获取相关密钥参数属性\n    } else {\n      console.error('get key pair result: fail!');\n    }\n  } catch (e) {\n    // 逻辑错误等异常在此捕获\n    console.error(`get key pair failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
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
          children: ["构造", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#ecccommonparamsspec10",
            children: "ECCCommonParamsSpec"
          }), "对象，用于指定非对称公共密钥参数。根据", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#genecccommonparamsspec11",
            children: "genECCCommonParamsSpec"
          }), "接口传入相应的NID字符串名称生成相应的非对称公共密钥参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用密钥参数生成密钥时，bigint类型参数需采用大端字节序输入，且值应为正数以满足数学运算要求。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#ecckeypairspec10",
            children: "ECCKeyPairSpec"
          }), "对象，并且algName设置为SM2，用于指定SM2算法中密钥对包含的参数。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygeneratorbyspec10",
            children: "cryptoFramework.createAsyKeyGeneratorBySpec"
          }), "，将ECCKeyPairSpec对象传入，创建非对称密钥生成器。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatekeypair10",
            children: "AsyKeyGeneratorBySpec.generateKeyPair"
          }), "，得到各项数据与密钥参数一致的密钥对（KeyPair）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getasykeyspec10-1",
            children: "PriKey.getAsyKeySpec"
          }), "，获取SM2算法中椭圆曲线参数。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用Promise方式根据椭圆曲线名生成SM2密钥为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction genSM2KeyPairSpec() {\n  let sm2CommonParamsSpec = cryptoFramework.ECCKeyUtil.genECCCommonParamsSpec('NID_sm2');\n  let sm2KeyPairSpec: cryptoFramework.ECCKeyPairSpec = {\n    algName: 'SM2',\n    specType: cryptoFramework.AsyKeySpecType.KEY_PAIR_SPEC,\n    params: sm2CommonParamsSpec,\n    sk: BigInt('0x6330B599ECD23ABDC74B9A5B7B5E00E553005F72743101C5FAB83AEB579B7074'),\n    pk: {\n      x: BigInt('0x67F3B850BDC0BA5D3A29D8A0883C4B17612AB84F87F18E28F77D824A115C02C4'),\n      y: BigInt('0xD48966CE754BBBEDD6501A1385E1B205C186E926ADED44287145E8897D4B2071')\n    },\n  };\n  return sm2KeyPairSpec;\n}\n\nasync function sm2Test() {\n  let sm2KeyPairSpec = genSM2KeyPairSpec();\n  let generatorBySpec = cryptoFramework.createAsyKeyGeneratorBySpec(sm2KeyPairSpec);\n  let keyPair = await generatorBySpec.generateKeyPair();\n  let sm2CurveName = keyPair.priKey.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_CURVE_NAME_STR);\n  console.info('ECC_CURVE_NAME_STR: ' + sm2CurveName); // NID_sm2\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["同步返回结果（调用方法", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatekeypairsync12",
            children: "generateKeyPairSync"
          }), "）："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction genSM2KeyPairSpec() {\n  let sm2CommonParamsSpec = cryptoFramework.ECCKeyUtil.genECCCommonParamsSpec('NID_sm2');\n  let sm2KeyPairSpec: cryptoFramework.ECCKeyPairSpec = {\n    algName: 'SM2',\n    specType: cryptoFramework.AsyKeySpecType.KEY_PAIR_SPEC,\n    params: sm2CommonParamsSpec,\n    sk: BigInt('0x6330B599ECD23ABDC74B9A5B7B5E00E553005F72743101C5FAB83AEB579B7074'),\n    pk: {\n      x: BigInt('0x67F3B850BDC0BA5D3A29D8A0883C4B17612AB84F87F18E28F77D824A115C02C4'),\n      y: BigInt('0xD48966CE754BBBEDD6501A1385E1B205C186E926ADED44287145E8897D4B2071')\n    },\n  };\n  return sm2KeyPairSpec;\n}\n\nfunction sm2TestSync() {\n  let sm2KeyPairSpec = genSM2KeyPairSpec();\n  let generatorBySpec = cryptoFramework.createAsyKeyGeneratorBySpec(sm2KeyPairSpec);\n  try {\n    let keyPair = generatorBySpec.generateKeyPairSync();\n    if (keyPair != null) {\n      let sm2CurveName = keyPair.priKey.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_CURVE_NAME_STR);\n      console.info('ECC_CURVE_NAME_STR: ' + sm2CurveName); // NID_sm2\n    } else {\n      console.error('get key pair result: fail!');\n    }\n  } catch (e) {\n    console.error(`get key pair failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
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