"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["162074"], {
855917(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_rsa_asym_encrypt_decrypt_pkcs_1_oaep_crypto_rsa_asym_encrypt_decrypt_pkcs_1_oaep_md_cf2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-dev-crypto-rsa-asym-encrypt-decrypt-pkcs-1-oaep-crypto-rsa-asym-encrypt-decrypt-pkcs-1-oaep-md-cf2.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_rsa_asym_encrypt_decrypt_pkcs_1_oaep_crypto_rsa_asym_encrypt_decrypt_pkcs_1_oaep_md_cf2_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep/crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep","title":"使用RSA非对称密钥（PKCS1_OAEP模式）加解密","description":"对应的算法规格请查看非对称密钥加解密算法规格：RSA。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep/crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":31,"frontMatter":{"title":"使用RSA非对称密钥（PKCS1_OAEP模式）加解密","sidebar_position":31,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用RSA非对称密钥分段加解密(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-by-segment-ndk/"},"next":{"title":"使用SM2非对称密钥加解密(ArkTS)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep/crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep.md


const frontMatter = {
	title: '使用RSA非对称密钥（PKCS1_OAEP模式）加解密',
	sidebar_position: 31,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用RSA非对称密钥（PKCS1_OAEP模式）加解密';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "使用rsa非对称密钥pkcs1_oaep模式加解密",
        children: "使用RSA非对称密钥（PKCS1_OAEP模式）加解密"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec#rsa",
        children: "非对称密钥加解密算法规格：RSA"
      }), "。"]
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
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygeneratorbyspec10",
            children: "cryptoFramework.createAsyKeyGeneratorBySpec"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatekeypair10",
            children: "AsyKeyGeneratorBySpec.generateKeyPair"
          }), "，指定密钥参数，生成RSA非对称密钥对（KeyPair）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何生成RSA非对称密钥对，开发者可参考下文示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#rsa",
            children: "非对称密钥生成和转换规格：RSA"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-from-key-spec",
            children: "指定密钥参数生成非对称密钥对"
          }), "理解，参考文档与当前示例可能存在入参差异，请在阅读时注意区分。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatecipher",
            children: "cryptoFramework.createCipher"
          }), "，指定字符串参数'RSA2048|PKCS1_OAEP|SHA256|MGF1_SHA1'，创建非对称密钥类型为RSA2048、填充模式为PKCS1_OAEP、摘要算法为SHA256、掩码摘要为MGF1_SHA1的RSA密钥的Cipher实例，用于完成加解密操作。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-1",
            children: "Cipher.init"
          }), "，设置模式为加密（cryptoFramework.CryptoMode.ENCRYPT_MODE），指定加密密钥（KeyPair.PubKey），初始化加密Cipher实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "非对称密钥无加密参数，直接传入null。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在调用Cipher.doFinal前，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#setcipherspec10",
            children: "Cipher.setCipherSpec"
          }), "设置PKCS1_OAEP填充参数pSource。调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getcipherspec10",
            children: "Cipher.getCipherSpec"
          }), "可获得OAEP相关参数。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#dofinal-1",
            children: "Cipher.doFinal"
          }), "，传入明文，获取加密后的数据。"]
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
        children: ["由于RSA算法的Cipher实例不支持重复init操作，需要调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatecipher",
          children: "cryptoFramework.createCipher"
        }), "，重新生成Cipher实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-1",
          children: "Cipher.init"
        }), "，设置模式为解密（cryptoFramework.CryptoMode.DECRYPT_MODE），指定解密密钥（KeyPair.PriKey）初始化解密Cipher实例。PKCS1模式无加密参数，直接传入null。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在调用Cipher.doFinal前，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#setcipherspec10",
          children: "Cipher.setCipherSpec"
        }), "设置PKCS1_OAEP填充参数pSource，此处需要和加密时设置的保持一致。调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getcipherspec10",
          children: "Cipher.getCipherSpec"
        }), "可获得OAEP相关参数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#dofinal-1",
          children: "Cipher.doFinal"
        }), "，传入密文，获取解密后的数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "异步方法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\n// 根据密钥参数属性构造RSA非对称密钥对密钥参数\nfunction genRsaKeyPairSpec(nIn: bigint, eIn: bigint, dIn: bigint) {\n  let rsaCommSpec: cryptoFramework.RSACommonParamsSpec = {\n    n: nIn,\n    algName: 'RSA',\n    specType: cryptoFramework.AsyKeySpecType.COMMON_PARAMS_SPEC\n  };\n  let rsaKeyPairSpec: cryptoFramework.RSAKeyPairSpec = {\n    params: rsaCommSpec,\n    sk: dIn,\n    pk: eIn,\n    algName: 'RSA',\n    specType: cryptoFramework.AsyKeySpecType.KEY_PAIR_SPEC\n  };\n  return rsaKeyPairSpec;\n}\n\n// 生成RSA2048密钥对参数\nfunction genRsa2048KeyPairSpec(): cryptoFramework.RSAKeyPairSpec {\n  let nIn =\n    BigInt('0x9260d0750ae117eee55c3f3deaba74917521a262ee76007cdf8a56755ad73a1598a1408410a01434c3f5bc54a88b57fa19fc4328daea0750a4c44e88cff3b2382621b80f670464433e4336e6d003e8cd65bff211da144b88291c2259a00a72b711c116ef7686e8fee34e4d933c868187bdc26f7be071493c86f7a5941c3510806ad67b0f94d88f5cf5c02a092821d8626e8932b65c5bd8c92049c210932b7afa7ac59c0e886ae5c1edb00d8ce2c57633db26bd6639bff73cee82be9275c402b4cf2a4388da8cf8c64eefe1c5a0f5ab8057c39fa5c0589c3e253f0960332300f94bea44877b588e1edbde97cf2360727a09b775262d7ee552b3319b9266f05a25');\n  let eIn = BigInt('0x010001');\n  let dIn =\n    BigInt('0x6a7df2ca63ead4dda191d614b6b385e0d9056a3d6d5cfe07db1daabee022db08212d97613d3328e0267c9dd23d787abde2afcb306aeb7dfce69246cc73f5c87fdf06030179a2114b767db1f083ff841c025d7dc00cd82435b9a90f695369e94df23d2ce458bc3b3283ad8bba2b8fa1ba62e2dce9accff3799aae7c840016f3ba8e0048c0b6cc4339af7161003a5beb864a0164b2c1c9237b64bc87556994351b27506c33d4bcdfce0f9c491a7d6b0628c7c852be4f0a9c3132b2ed3a2c8881e9aab07e20e17deb074691be677776a78b5c502e05d9bdde72126b3738695e2dd1a0a98a14247c65d8a7ee79432a092cb0721a12df798e44f7cfce0c498147a9b1');\n  return genRsaKeyPairSpec(nIn, eIn, dIn);\n}\n\nasync function rsaUseSpecDecryptOAEPPromise() {\n  let plan = 'This is a test';\n  // 获得RSA密钥对密钥参数对象\n  let rsaKeyPairSpec = genRsa2048KeyPairSpec();\n  // 根据RSA密钥对参数生成RSA密钥对\n  let rsaGeneratorSpec = cryptoFramework.createAsyKeyGeneratorBySpec(rsaKeyPairSpec);\n  let cipher = cryptoFramework.createCipher('RSA2048|PKCS1_OAEP|SHA256|MGF1_SHA1');\n  let decoder = cryptoFramework.createCipher('RSA2048|PKCS1_OAEP|SHA256|MGF1_SHA1');\n  // RSA加解密PKCS1-OAEP模式填充字节流P\n  let pSource = new Uint8Array([1, 2, 3, 4]);\n  let input: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(plan, 'utf-8').buffer) };\n  // 生成密钥对\n  let keyPair = await rsaGeneratorSpec.generateKeyPair();\n  // 进行加密操作初始化\n  await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, keyPair.pubKey, null);\n  // get和set操作可以放在Cipher对象init之后，此处对cipher进行set和get操作\n  cipher.setCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF1_PSRC_UINT8ARR, pSource);\n  let retP = cipher.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF1_PSRC_UINT8ARR);\n  // 比较get出来的P字节流与set进去的P字节流是否一致\n  if (retP.toString() != pSource.toString()) {\n    console.error('error init pSource ' + retP);\n  } else {\n    console.info('pSource changed == ' + retP);\n  }\n  // 进行OAEP其他参数的get操作\n  let md = cipher.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MD_NAME_STR);\n  console.info('md == ' + md);\n  let mgf = cipher.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF_NAME_STR);\n  console.info('mgf == ' + mgf);\n  let mgf1Md = cipher.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF1_MD_STR);\n  console.info('mgf1Md == ' + mgf1Md);\n  let cipherDataBlob = await cipher.doFinal(input);\n  // get和set操作可以放在Cipher对象init之前，且与init之后等价，此处对decoder进行set和get操作\n  decoder.setCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF1_PSRC_UINT8ARR, pSource);\n  retP = decoder.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF1_PSRC_UINT8ARR);\n  // 比较get出来的P字节流与set进去的P字节流是否一致\n  if (retP.toString() != pSource.toString()) {\n    console.error('error init pSource ' + retP);\n  } else {\n    console.info('pSource changed == ' + retP);\n  }\n  // 进行OAEP其他参数的get操作\n  md = decoder.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MD_NAME_STR);\n  console.info('md == ' + md);\n  mgf = decoder.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF_NAME_STR);\n  console.info('mgf == ' + mgf);\n  mgf1Md = decoder.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF1_MD_STR);\n  console.info('mgf1Md == ' + mgf1Md);\n  // 初始化解密操作\n  await decoder.init(cryptoFramework.CryptoMode.DECRYPT_MODE, keyPair.priKey, null);\n  let decodeData = await decoder.doFinal(cipherDataBlob);\n  // 解密成功\n  if (decodeData.data.toString() === input.data.toString()) {\n    console.info('oaep decrypt result: success.');\n  } else {\n    console.error('oaep decrypt result: fail.');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步方法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n// 根据密钥参数属性构造RSA非对称密钥对密钥参数\nfunction genRsaKeyPairSpec(nIn: bigint, eIn: bigint, dIn: bigint) {\n  let rsaCommSpec: cryptoFramework.RSACommonParamsSpec = {\n    n: nIn,\n    algName: 'RSA',\n    specType: cryptoFramework.AsyKeySpecType.COMMON_PARAMS_SPEC\n  };\n  let rsaKeyPairSpec: cryptoFramework.RSAKeyPairSpec = {\n    params: rsaCommSpec,\n    sk: dIn,\n    pk: eIn,\n    algName: 'RSA',\n    specType: cryptoFramework.AsyKeySpecType.KEY_PAIR_SPEC\n  };\n  return rsaKeyPairSpec;\n}\n// 生成RSA2048密钥对参数\nfunction genRsa2048KeyPairSpec(): cryptoFramework.RSAKeyPairSpec {\n  let nIn = BigInt('0x9260d0750ae117eee55c3f3deaba74917521a262ee76007cdf8a56755ad73a1598a1408410a01434c3f5bc54a88b57fa19fc4328daea0750a4c44e88cff3b2382621b80f670464433e4336e6d003e8cd65bff211da144b88291c2259a00a72b711c116ef7686e8fee34e4d933c868187bdc26f7be071493c86f7a5941c3510806ad67b0f94d88f5cf5c02a092821d8626e8932b65c5bd8c92049c210932b7afa7ac59c0e886ae5c1edb00d8ce2c57633db26bd6639bff73cee82be9275c402b4cf2a4388da8cf8c64eefe1c5a0f5ab8057c39fa5c0589c3e253f0960332300f94bea44877b588e1edbde97cf2360727a09b775262d7ee552b3319b9266f05a25');\n  let eIn = BigInt('0x010001');\n  let dIn = BigInt('0x6a7df2ca63ead4dda191d614b6b385e0d9056a3d6d5cfe07db1daabee022db08212d97613d3328e0267c9dd23d787abde2afcb306aeb7dfce69246cc73f5c87fdf06030179a2114b767db1f083ff841c025d7dc00cd82435b9a90f695369e94df23d2ce458bc3b3283ad8bba2b8fa1ba62e2dce9accff3799aae7c840016f3ba8e0048c0b6cc4339af7161003a5beb864a0164b2c1c9237b64bc87556994351b27506c33d4bcdfce0f9c491a7d6b0628c7c852be4f0a9c3132b2ed3a2c8881e9aab07e20e17deb074691be677776a78b5c502e05d9bdde72126b3738695e2dd1a0a98a14247c65d8a7ee79432a092cb0721a12df798e44f7cfce0c498147a9b1');\n  return genRsaKeyPairSpec(nIn, eIn, dIn);\n}\nfunction main() {\n  let plan = 'This is a test';\n  // 获得RSA密钥对密钥参数对象\n  let rsaKeyPairSpec = genRsa2048KeyPairSpec();\n  // 根据RSA密钥对参数生成RSA密钥对\n  let rsaGeneratorSpec = cryptoFramework.createAsyKeyGeneratorBySpec(rsaKeyPairSpec);\n  let cipher = cryptoFramework.createCipher('RSA2048|PKCS1_OAEP|SHA256|MGF1_SHA1');\n  let decoder = cryptoFramework.createCipher('RSA2048|PKCS1_OAEP|SHA256|MGF1_SHA1');\n  // RSA加解密PKCS1-OAEP模式填充字节流P\n  let pSource = new Uint8Array([1, 2, 3, 4]);\n  let input: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(plan, 'utf-8').buffer) };\n  // 生成密钥对\n  let keyPair = rsaGeneratorSpec.generateKeyPairSync();\n  // 进行加密操作初始化\n  cipher.initSync(cryptoFramework.CryptoMode.ENCRYPT_MODE, keyPair.pubKey, null);\n  // get和set操作可以放在Cipher对象init之后，此处对cipher进行set和get操作\n  cipher.setCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF1_PSRC_UINT8ARR, pSource);\n  let retP = cipher.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF1_PSRC_UINT8ARR);\n  // 比较get出来的P字节流与set进去的P字节流是否一致\n  if (retP.toString() != pSource.toString()) {\n    console.error('error init pSource ' + retP);\n  } else {\n    console.info('pSource changed == ' + retP);\n  }\n  // 进行OAEP其他参数的get操作\n  let md = cipher.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MD_NAME_STR);\n  console.info('md == ' + md);\n  let mgf = cipher.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF_NAME_STR);\n  console.info('mgf == ' + mgf);\n  let mgf1Md = cipher.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF1_MD_STR);\n  console.info('mgf1Md == ' + mgf1Md);\n  let cipherDataBlob = cipher.doFinalSync(input);\n  // get和set操作可以放在Cipher对象init之前，且与init之后等价，此处对decoder进行set和get操作\n  decoder.setCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF1_PSRC_UINT8ARR, pSource);\n  retP = decoder.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF1_PSRC_UINT8ARR);\n  // 比较get出来的P字节流与set进去的P字节流是否一致\n  if (retP.toString() != pSource.toString()) {\n    console.error('error init pSource ' + retP);\n  } else {\n    console.info('pSource changed == ' + retP);\n  }\n  // 进行OAEP其他参数的get操作\n  md = decoder.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MD_NAME_STR);\n  console.info('md == ' + md);\n  mgf = decoder.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF_NAME_STR);\n  console.info('mgf == ' + mgf);\n  mgf1Md = decoder.getCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF1_MD_STR);\n  console.info('mgf1Md == ' + mgf1Md);\n  // 初始化解密操作\n  decoder.initSync(cryptoFramework.CryptoMode.DECRYPT_MODE, keyPair.priKey, null);\n  let decodeData = decoder.doFinalSync(cipherDataBlob);\n  // 解密成功\n  if (decodeData.data.toString() === input.data.toString()) {\n    console.info('oaep decrypt result: success.');\n  } else {\n    console.error('oaep decrypt result: fail.');\n  }\n}\n"
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