"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["29240"], {
540553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_dev_crypto_rsa_sign_sig_verify_pss_crypto_rsa_sign_sig_verify_pss_md_bf3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-sign-sig-verify-crypto-sign-sig-verify-dev-crypto-rsa-sign-sig-verify-pss-crypto-rsa-sign-sig-verify-pss-md-bf3.json
var site_docs_system_security_crypto_architecture_kit_crypto_sign_sig_verify_crypto_sign_sig_verify_dev_crypto_rsa_sign_sig_verify_pss_crypto_rsa_sign_sig_verify_pss_md_bf3_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss/crypto-rsa-sign-sig-verify-pss","title":"使用RSA密钥对签名验签（PSS模式）(ArkTS)","description":"对应的算法规格请查看签名验签算法规格：RSA。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss/crypto-rsa-sign-sig-verify-pss.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss","slug":"/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"使用RSA密钥对签名验签（PSS模式）(ArkTS)","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-sign-sig-verify-pss","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用RSA密钥对分段签名验签 (PKCS1模式)(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pkcs1-by-segment-ndk/"},"next":{"title":"使用RSA密钥对签名验签 (PSS模式)(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pss/crypto-rsa-sign-sig-verify-pss.md


const frontMatter = {
	title: '使用RSA密钥对签名验签（PSS模式）(ArkTS)',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-sign-sig-verify-pss',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用RSA密钥对签名验签（PSS模式）(ArkTS)';

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
        id: "使用rsa密钥对签名验签pss模式arkts",
        children: "使用RSA密钥对签名验签（PSS模式）(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview#rsa",
        children: "签名验签算法规格：RSA"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "签名"
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
          children: ["如何生成RSA非对称密钥，开发者可参考下文示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
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
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatesign",
            children: "cryptoFramework.createSign"
          }), "，指定字符串参数'RSA|PSS|SHA256|MGF1_SHA256'，创建非对称密钥类型为不带长度的RSA、填充模式为PSS、摘要算法为SHA256、掩码算法为MGF1_SHA256的Sign实例，用于完成签名操作。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-3",
            children: "Sign.init"
          }), "，使用私钥（PriKey）初始化Sign实例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#setsignspec10",
            children: "Sign.setSignSpec"
          }), "，设置签名参数。此处设置盐值的长度（SignSpecItem.PSS_SALT_LEN_NUM）为32字节。在验签时将校验此数据。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getsignspec10",
            children: "Sign.getSignSpec"
          }), "，获取其他签名参数。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#update-3",
            children: "Sign.update"
          }), "，传入待签名的数据。当前单次update长度没有限制，开发者可以根据数据量判断如何调用update。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#sign-1",
            children: "Sign.sign"
          }), "，生成数据签名。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "验签"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateverify",
          children: "cryptoFramework.createVerify"
        }), "，指定字符串参数'RSA2048|PSS|SHA256|MGF1_SHA256'，创建非对称密钥类型为RSA2048、填充模式为PSS、摘要算法为SHA256、掩码算法为MGF1_SHA256的Verify实例，用于完成验签操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#setverifyspec10",
          children: "Verify.setVerifySpec"
        }), "，设置签名参数。需要与签名时设置的保持一致。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-5",
          children: "Verify.init"
        }), "，使用公钥（PubKey）初始化Verify实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#update-5",
          children: "Verify.update"
        }), "，传入待验证的数据。当前单次update长度没有限制，开发者可以根据数据量判断如何调用update。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#verify-1",
          children: "Verify.verify"
        }), "，对数据进行验签。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "异步方法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\n// 根据密钥参数属性构造RSA非对称密钥对密钥参数\nfunction genRsaKeyPairSpec(nIn: bigint, eIn: bigint, dIn: bigint) {\n  let rsaCommSpec: cryptoFramework.RSACommonParamsSpec = {\n    n: nIn,\n    algName: 'RSA',\n    specType: cryptoFramework.AsyKeySpecType.COMMON_PARAMS_SPEC\n  };\n  let rsaKeyPairSpec: cryptoFramework.RSAKeyPairSpec = {\n    params: rsaCommSpec,\n    sk: dIn,\n    pk: eIn,\n    algName: 'RSA',\n    specType: cryptoFramework.AsyKeySpecType.KEY_PAIR_SPEC\n  };\n  return rsaKeyPairSpec;\n}\n\n// 生成RSA2048密钥对参数\nfunction genRsa2048KeyPairSpec(): cryptoFramework.RSAKeyPairSpec {\n  let nIn =\n    BigInt('0x9260d0750ae117eee55c3f3deaba74917521a262ee76007cdf8a56755ad73a1598a1408410a01434c3f5bc54a88b57fa19fc432' +\n      '8daea0750a4c44e88cff3b2382621b80f670464433e4336e6d003e8cd65bff211da144b88291c2259a00a72b711c116ef7686e8fee34e4' +\n      'd933c868187bdc26f7be071493c86f7a5941c3510806ad67b0f94d88f5cf5c02a092821d8626e8932b65c5bd8c92049c210932b7afa7ac' +\n      '59c0e886ae5c1edb00d8ce2c57633db26bd6639bff73cee82be9275c402b4cf2a4388da8cf8c64eefe1c5a0f5ab8057c39fa5c0589c3e2' +\n      '53f0960332300f94bea44877b588e1edbde97cf2360727a09b775262d7ee552b3319b9266f05a25');\n  let eIn = BigInt('0x010001');\n  let dIn =\n    BigInt('0x6a7df2ca63ead4dda191d614b6b385e0d9056a3d6d5cfe07db1daabee022db08212d97613d3328e0267c9dd23d787abde2afcb3' +\n      '06aeb7dfce69246cc73f5c87fdf06030179a2114b767db1f083ff841c025d7dc00cd82435b9a90f695369e94df23d2ce458bc3b3283ad8' +\n      'bba2b8fa1ba62e2dce9accff3799aae7c840016f3ba8e0048c0b6cc4339af7161003a5beb864a0164b2c1c9237b64bc87556994351b275' +\n      '06c33d4bcdfce0f9c491a7d6b0628c7c852be4f0a9c3132b2ed3a2c8881e9aab07e20e17deb074691be677776a78b5c502e05d9bdde721' +\n      '26b3738695e2dd1a0a98a14247c65d8a7ee79432a092cb0721a12df798e44f7cfce0c498147a9b1');\n  return genRsaKeyPairSpec(nIn, eIn, dIn);\n}\n\nasync function verifyMessagePSS() {\n  // 完整的明文被拆分为input1和input2\n  let plan1 = 'This is Sign test plan1';\n  let plan2 = 'This is Sign test plan2';\n  let input1: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(plan1, 'utf-8').buffer) };\n  let input2: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(plan2, 'utf-8').buffer) };\n  // 获得RSA密钥对密钥参数对象\n  let rsaKeyPairSpec = genRsa2048KeyPairSpec();\n  // 构造RSA密钥对生成器\n  let rsaGeneratorSpec = cryptoFramework.createAsyKeyGeneratorBySpec(rsaKeyPairSpec);\n  // sign和verify均支持RSA密钥带长度/不带长度的写法\n  let signer = cryptoFramework.createSign('RSA|PSS|SHA256|MGF1_SHA256');\n  let verifyer = cryptoFramework.createVerify('RSA2048|PSS|SHA256|MGF1_SHA256');\n  let keyPair = await rsaGeneratorSpec.generateKeyPair();\n  await signer.init(keyPair.priKey);\n  // 在签名初始化后，对PSS参数进行set和get操作\n  let setN = 32;\n  signer.setSignSpec(cryptoFramework.SignSpecItem.PSS_SALT_LEN_NUM, setN);\n  let saltLen = signer.getSignSpec(cryptoFramework.SignSpecItem.PSS_SALT_LEN_NUM);\n  console.info('SaltLen == ' + saltLen);\n  let tf = signer.getSignSpec(cryptoFramework.SignSpecItem.PSS_TRAILER_FIELD_NUM);\n  console.info('trailer field == ' + tf);\n  let md = signer.getSignSpec(cryptoFramework.SignSpecItem.PSS_MD_NAME_STR);\n  console.info('md == ' + md);\n  let mgf = signer.getSignSpec(cryptoFramework.SignSpecItem.PSS_MGF_NAME_STR);\n  console.info('mgf == ' + mgf);\n  let mgf1Md = signer.getSignSpec(cryptoFramework.SignSpecItem.PSS_MGF1_MD_STR);\n  console.info('mgf1Md == ' + mgf1Md);\n  await signer.update(input1);\n  let signMessageBlob = await signer.sign(input2);\n  // 在验签初始化前，对PSS参数进行set和get操作\n  verifyer.setVerifySpec(cryptoFramework.SignSpecItem.PSS_SALT_LEN_NUM, setN);\n  saltLen = verifyer.getVerifySpec(cryptoFramework.SignSpecItem.PSS_SALT_LEN_NUM);\n  console.info('SaltLen == ' + saltLen);\n  tf = verifyer.getVerifySpec(cryptoFramework.SignSpecItem.PSS_TRAILER_FIELD_NUM);\n  console.info('trailer field == ' + tf);\n  md = verifyer.getVerifySpec(cryptoFramework.SignSpecItem.PSS_MD_NAME_STR);\n  console.info('md == ' + md);\n  mgf = verifyer.getVerifySpec(cryptoFramework.SignSpecItem.PSS_MGF_NAME_STR);\n  console.info('mgf == ' + mgf);\n  mgf1Md = verifyer.getVerifySpec(cryptoFramework.SignSpecItem.PSS_MGF1_MD_STR);\n  await verifyer.init(keyPair.pubKey);\n  await verifyer.update(input1);\n  let verifyResult = await verifyer.verify(input2, signMessageBlob);\n  if (verifyResult === true) {\n    console.info('verify result: success.');\n  } else {\n    console.error('verify result: failed.');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步方法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\n// 根据密钥参数属性构造RSA非对称密钥对密钥参数\nfunction genRsaKeyPairSpec(nIn: bigint, eIn: bigint, dIn: bigint) {\n  let rsaCommSpec: cryptoFramework.RSACommonParamsSpec = {\n    n: nIn,\n    algName: 'RSA',\n    specType: cryptoFramework.AsyKeySpecType.COMMON_PARAMS_SPEC\n  };\n  let rsaKeyPairSpec: cryptoFramework.RSAKeyPairSpec = {\n    params: rsaCommSpec,\n    sk: dIn,\n    pk: eIn,\n    algName: 'RSA',\n    specType: cryptoFramework.AsyKeySpecType.KEY_PAIR_SPEC\n  };\n  return rsaKeyPairSpec;\n}\n\n// 生成RSA2048密钥对参数\nfunction genRsa2048KeyPairSpec(): cryptoFramework.RSAKeyPairSpec {\n  let nIn =\n    BigInt('0x9260d0750ae117eee55c3f3deaba74917521a262ee76007cdf8a56755ad73a1598a1408410a01434c3f5bc54a88b57fa19fc43' +\n      '28daea0750a4c44e88cff3b2382621b80f670464433e4336e6d003e8cd65bff211da144b88291c2259a00a72b711c116ef7686e8fee34' +\n      'e4d933c868187bdc26f7be071493c86f7a5941c3510806ad67b0f94d88f5cf5c02a092821d8626e8932b65c5bd8c92049c210932b7afa' +\n      '7ac59c0e886ae5c1edb00d8ce2c57633db26bd6639bff73cee82be9275c402b4cf2a4388da8cf8c64eefe1c5a0f5ab8057c39fa5c0589' +\n      'c3e253f0960332300f94bea44877b588e1edbde97cf2360727a09b775262d7ee552b3319b9266f05a25');\n  let eIn = BigInt('0x010001');\n  let dIn =\n    BigInt('0x6a7df2ca63ead4dda191d614b6b385e0d9056a3d6d5cfe07db1daabee022db08212d97613d3328e0267c9dd23d787abde2afcb' +\n      '306aeb7dfce69246cc73f5c87fdf06030179a2114b767db1f083ff841c025d7dc00cd82435b9a90f695369e94df23d2ce458bc3b3283a' +\n      'd8bba2b8fa1ba62e2dce9accff3799aae7c840016f3ba8e0048c0b6cc4339af7161003a5beb864a0164b2c1c9237b64bc87556994351b' +\n      '27506c33d4bcdfce0f9c491a7d6b0628c7c852be4f0a9c3132b2ed3a2c8881e9aab07e20e17deb074691be677776a78b5c502e05d9bdd' +\n      'e72126b3738695e2dd1a0a98a14247c65d8a7ee79432a092cb0721a12df798e44f7cfce0c498147a9b1');\n  return genRsaKeyPairSpec(nIn, eIn, dIn);\n}\n\nfunction verifyMessagePSS() {\n  // 完整的明文被拆分为input1和input2\n  let plan1 = 'This is Sign test plan1';\n  let plan2 = 'This is Sign test plan2';\n  let input1: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(plan1, 'utf-8').buffer) };\n  let input2: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(plan2, 'utf-8').buffer) };\n  // 获得RSA密钥对密钥参数对象\n  let rsaKeyPairSpec = genRsa2048KeyPairSpec();\n  // 构造RSA密钥对生成器\n  let rsaGeneratorSpec = cryptoFramework.createAsyKeyGeneratorBySpec(rsaKeyPairSpec);\n  // sign和verify均支持RSA密钥带长度/不带长度的写法\n  let signer = cryptoFramework.createSign('RSA|PSS|SHA256|MGF1_SHA256');\n  let verifyer = cryptoFramework.createVerify('RSA2048|PSS|SHA256|MGF1_SHA256');\n  let keyPair = rsaGeneratorSpec.generateKeyPairSync();\n  signer.initSync(keyPair.priKey);\n  // 在签名初始化后，对PSS参数进行set和get操作\n  let setN = 32;\n  signer.setSignSpec(cryptoFramework.SignSpecItem.PSS_SALT_LEN_NUM, setN);\n  let saltLen = signer.getSignSpec(cryptoFramework.SignSpecItem.PSS_SALT_LEN_NUM);\n  console.info('SaltLen == ' + saltLen);\n  let tf = signer.getSignSpec(cryptoFramework.SignSpecItem.PSS_TRAILER_FIELD_NUM);\n  console.info('trailer field == ' + tf);\n  let md = signer.getSignSpec(cryptoFramework.SignSpecItem.PSS_MD_NAME_STR);\n  console.info('md == ' + md);\n  let mgf = signer.getSignSpec(cryptoFramework.SignSpecItem.PSS_MGF_NAME_STR);\n  console.info('mgf == ' + mgf);\n  let mgf1Md = signer.getSignSpec(cryptoFramework.SignSpecItem.PSS_MGF1_MD_STR);\n  console.info('mgf1Md == ' + mgf1Md);\n  signer.updateSync(input1);\n  let signMessageBlob = signer.signSync(input2);\n  // 在验签初始化前，对PSS参数进行set和get操作\n  verifyer.setVerifySpec(cryptoFramework.SignSpecItem.PSS_SALT_LEN_NUM, setN);\n  saltLen = verifyer.getVerifySpec(cryptoFramework.SignSpecItem.PSS_SALT_LEN_NUM);\n  console.info('SaltLen == ' + saltLen);\n  tf = verifyer.getVerifySpec(cryptoFramework.SignSpecItem.PSS_TRAILER_FIELD_NUM);\n  console.info('trailer field == ' + tf);\n  md = verifyer.getVerifySpec(cryptoFramework.SignSpecItem.PSS_MD_NAME_STR);\n  console.info('md == ' + md);\n  mgf = verifyer.getVerifySpec(cryptoFramework.SignSpecItem.PSS_MGF_NAME_STR);\n  console.info('mgf == ' + mgf);\n  mgf1Md = verifyer.getVerifySpec(cryptoFramework.SignSpecItem.PSS_MGF1_MD_STR);\n  verifyer.initSync(keyPair.pubKey);\n  verifyer.updateSync(input1);\n  let verifyResult = verifyer.verifySync(input2, signMessageBlob);\n  if (verifyResult === true) {\n    console.info('verify result: success.');\n  } else {\n    console.error('verify result: failed.');\n  }\n}\n"
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