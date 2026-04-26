"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["244946"], {
125625(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_rsa_asym_encrypt_decrypt_pkcs_1_crypto_rsa_asym_encrypt_decrypt_pkcs_1_md_69c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-dev-crypto-rsa-asym-encrypt-decrypt-pkcs-1-crypto-rsa-asym-encrypt-decrypt-pkcs-1-md-69c.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_rsa_asym_encrypt_decrypt_pkcs_1_crypto_rsa_asym_encrypt_decrypt_pkcs_1_md_69c_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1/crypto-rsa-asym-encrypt-decrypt-pkcs1","title":"使用RSA非对称密钥（PKCS1模式）加解密(ArkTS)","description":"对应的算法规格请查看非对称密钥加解密算法规格：RSA。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1/crypto-rsa-asym-encrypt-decrypt-pkcs1.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":27,"frontMatter":{"title":"使用RSA非对称密钥（PKCS1模式）加解密(ArkTS)","sidebar_position":27,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-asym-encrypt-decrypt-pkcs1","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用ChaCha20对称密钥（Poly1305模式）加解密(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-chacha20-encrypt-decrypt-poly1305-ndk/"},"next":{"title":"使用RSA非对称密钥（PKCS1模式）加解密(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1/crypto-rsa-asym-encrypt-decrypt-pkcs1.md


const frontMatter = {
	title: '使用RSA非对称密钥（PKCS1模式）加解密(ArkTS)',
	sidebar_position: 27,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-asym-encrypt-decrypt-pkcs1',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用RSA非对称密钥（PKCS1模式）加解密(ArkTS)';

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
        id: "使用rsa非对称密钥pkcs1模式加解密arkts",
        children: "使用RSA非对称密钥（PKCS1模式）加解密(ArkTS)"
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
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator",
            children: "cryptoFramework.createAsyKeyGenerator"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatekeypair-1",
            children: "AsyKeyGenerator.generateKeyPair"
          }), "，生成RSA密钥类型为RSA1024、素数个数为2的非对称密钥对（KeyPair）。KeyPair对象中包括公钥PubKey、私钥PriKey。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何生成RSA非对称密钥对，开发者可参考下文示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#rsa",
            children: "非对称密钥生成和转换规格：RSA"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly",
            children: "随机生成非对称密钥对"
          }), "理解，参考文档与当前示例可能存在入参差异，请在阅读时注意区分。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatecipher",
            children: "cryptoFramework.createCipher"
          }), "，指定字符串参数'RSA1024|PKCS1'，创建非对称密钥类型为RSA1024、填充模式为PKCS1的Cipher实例，用于完成加解密操作。"]
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
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#dofinal-1",
            children: "Cipher.doFinal"
          }), "，传入明文，获取加密后的数据。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "doFinal输出结果可能为null，在访问具体数据前，需要先判断结果是否为null，避免产生异常。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当数据量较大时，可以多次调用doFinal，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-by-segment",
              children: "分段加解密"
            }), "。"]
          }), "\n"]
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
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\n// 加密消息\nasync function encryptMessagePromise(publicKey: cryptoFramework.PubKey, plainText: cryptoFramework.DataBlob) {\n  let cipher = cryptoFramework.createCipher('RSA1024|PKCS1');\n  await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, publicKey, null);\n  let encryptData = await cipher.doFinal(plainText);\n  return encryptData;\n}\n\n// 解密消息\nasync function decryptMessagePromise(privateKey: cryptoFramework.PriKey, cipherText: cryptoFramework.DataBlob) {\n  let decoder = cryptoFramework.createCipher('RSA1024|PKCS1');\n  await decoder.init(cryptoFramework.CryptoMode.DECRYPT_MODE, privateKey, null);\n  let decryptData = await decoder.doFinal(cipherText);\n  return decryptData;\n}\n\n// 生成RSA密钥对\nasync function genKeyPairByData(pubKeyData: Uint8Array, priKeyData: Uint8Array) {\n  let pubKeyBlob: cryptoFramework.DataBlob = { data: pubKeyData };\n  let priKeyBlob: cryptoFramework.DataBlob = { data: priKeyData };\n  let rsaGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024');\n  let keyPair = await rsaGenerator.convertKey(pubKeyBlob, priKeyBlob);\n  console.info('convertKey result: success.');\n  return keyPair;\n}\n\nasync function main() {\n  let pkData =\n    new Uint8Array([48, 129, 159, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 1, 5, 0, 3, 129, 141, 0, 48, 129, 137,\n      2, 129, 129, 0, 197, 64, 10, 198, 14, 110, 65, 92, 206, 35, 28, 123, 153, 24, 134, 255, 145, 74, 42, 173, 40, 215,\n      146, 58, 143, 46, 10, 195, 154, 160, 69, 196, 220, 152, 179, 44, 111, 200, 84, 78, 215, 73, 210, 181, 12, 29, 70,\n      68, 36, 135, 153, 89, 230, 202, 130, 212, 111, 243, 234, 92, 131, 62, 145, 50, 73, 48, 104, 245, 46, 70, 45, 157,\n      147, 143, 140, 162, 156, 216, 220, 49, 121, 142, 194, 33, 223, 201, 0, 16, 163, 210, 240, 118, 92, 147, 121, 220,\n      17, 114, 24, 52, 125, 135, 176, 88, 21, 83, 86, 17, 156, 88, 250, 48, 79, 86, 128, 248, 105, 208, 133, 140, 13,\n      153, 164, 191, 136, 164, 44, 53, 2, 3, 1, 0, 1]);\n  let skData =\n    new Uint8Array([48, 130, 2, 119, 2, 1, 0, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 1, 5, 0, 4, 130, 2, 97, 48,\n      130, 2, 93, 2, 1, 0, 2, 129, 129, 0, 197, 64, 10, 198, 14, 110, 65, 92, 206, 35, 28, 123, 153, 24, 134, 255, 145,\n      74, 42, 173, 40, 215, 146, 58, 143, 46, 10, 195, 154, 160, 69, 196, 220, 152, 179, 44, 111, 200, 84, 78, 215, 73,\n      210, 181, 12, 29, 70, 68, 36, 135, 153, 89, 230, 202, 130, 212, 111, 243, 234, 92, 131, 62, 145, 50, 73, 48, 104,\n      245, 46, 70, 45, 157, 147, 143, 140, 162, 156, 216, 220, 49, 121, 142, 194, 33, 223, 201, 0, 16, 163, 210, 240,\n      118, 92, 147, 121, 220, 17, 114, 24, 52, 125, 135, 176, 88, 21, 83, 86, 17, 156, 88, 250, 48, 79, 86, 128, 248,\n      105, 208, 133, 140, 13, 153, 164, 191, 136, 164, 44, 53, 2, 3, 1, 0, 1, 2, 129, 128, 70, 75, 184, 139, 53, 1, 94,\n      17, 240, 244, 218, 101, 193, 253, 215, 190, 164, 204, 197, 192, 200, 89, 107, 39, 171, 119, 65, 38, 204, 168, 105,\n      180, 234, 217, 16, 161, 185, 132, 175, 103, 25, 154, 153, 153, 36, 36, 26, 178, 150, 66, 45, 8, 185, 19, 90, 228,\n      210, 177, 30, 200, 177, 141, 78, 184, 248, 59, 113, 154, 145, 73, 160, 24, 73, 157, 86, 207, 186, 32, 95, 200,\n      106, 252, 107, 69, 170, 193, 216, 196, 181, 142, 74, 203, 15, 18, 89, 228, 152, 19, 239, 21, 233, 98, 121, 214,\n      57, 187, 111, 239, 223, 248, 199, 70, 223, 108, 108, 113, 234, 144, 155, 95, 246, 144, 244, 122, 39, 55, 127, 81,\n      2, 65, 0, 246, 96, 188, 0, 0, 104, 221, 105, 139, 144, 63, 175, 209, 87, 179, 162, 88, 192, 99, 82, 125, 53, 54,\n      48, 70, 245, 239, 37, 15, 242, 247, 84, 115, 187, 196, 95, 156, 40, 165, 60, 64, 102, 13, 229, 243, 2, 149, 0,\n      232, 226, 221, 192, 95, 11, 12, 208, 5, 181, 98, 62, 210, 190, 141, 235, 2, 65, 0, 204, 244, 34, 10, 105, 80, 76,\n      116, 163, 35, 231, 168, 187, 206, 189, 101, 215, 103, 80, 115, 86, 11, 34, 127, 203, 114, 84, 188, 121, 174, 169,\n      31, 142, 2, 182, 27, 140, 225, 157, 227, 71, 98, 15, 203, 187, 213, 5, 190, 20, 121, 8, 30, 193, 100, 232, 101,\n      141, 8, 124, 20, 29, 78, 6, 95, 2, 65, 0, 204, 43, 225, 224, 6, 118, 224, 117, 100, 200, 199, 94, 70, 23, 109,\n      175, 173, 232, 208, 230, 61, 8, 105, 189, 156, 48, 150, 91, 154, 89, 248, 136, 173, 215, 254, 166, 84, 220, 130,\n      1, 234, 68, 40, 100, 84, 251, 224, 202, 254, 51, 115, 28, 198, 38, 124, 25, 175, 129, 94, 199, 61, 17, 216, 189,\n      2, 64, 72, 230, 129, 129, 48, 138, 134, 87, 106, 123, 231, 247, 165, 173, 216, 194, 115, 198, 228, 223, 209, 120,\n      46, 114, 68, 92, 75, 117, 170, 214, 140, 131, 147, 208, 181, 19, 193, 157, 178, 186, 87, 246, 178, 101, 166, 79,\n      20, 54, 211, 51, 101, 199, 2, 197, 48, 192, 134, 84, 193, 69, 170, 82, 201, 131, 2, 65, 0, 213, 165, 55, 166, 131,\n      210, 195, 56, 250, 147, 195, 61, 205, 208, 189, 185, 40, 52, 50, 119, 137, 23, 246, 46, 220, 108, 52, 23, 152,\n      154, 94, 32, 144, 195, 184, 249, 21, 168, 12, 57, 222, 18, 60, 117, 81, 157, 72, 30, 155, 190, 165, 242, 228, 139,\n      240, 184, 145, 170, 103, 210, 160, 161, 135, 13]);\n  let keyPair = await genKeyPairByData(pkData, skData);\n  let pubKey = keyPair.pubKey;\n  let priKey = keyPair.priKey;\n  let message = 'This is a test';\n  // 把字符串按utf-8解码为Uint8Array\n  let plainText: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(message, 'utf-8').buffer) };\n  let encryptText = await encryptMessagePromise(pubKey, plainText);\n  let decryptText = await decryptMessagePromise(priKey, encryptText);\n  if (plainText.data.toString() === decryptText.data.toString()) {\n    console.info('decrypt ok.');\n    // 把Uint8Array按utf-8编码为字符串\n    let messageDecrypted = buffer.from(decryptText.data).toString('utf-8');\n    console.info('decrypted result string:' + messageDecrypted);\n  } else {\n    console.error('decrypt failed.');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步方法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\n// 加密消息\nfunction encryptMessage(publicKey: cryptoFramework.PubKey, plainText: cryptoFramework.DataBlob) {\n  let cipher = cryptoFramework.createCipher('RSA1024|PKCS1');\n  cipher.initSync(cryptoFramework.CryptoMode.ENCRYPT_MODE, publicKey, null);\n  let encryptData = cipher.doFinalSync(plainText);\n  return encryptData;\n}\n\n// 解密消息\nfunction decryptMessage(privateKey: cryptoFramework.PriKey, cipherText: cryptoFramework.DataBlob) {\n  let decoder = cryptoFramework.createCipher('RSA1024|PKCS1');\n  decoder.initSync(cryptoFramework.CryptoMode.DECRYPT_MODE, privateKey, null);\n  let decryptData = decoder.doFinalSync(cipherText);\n  return decryptData;\n}\n\n// 生成RSA密钥对\nfunction genKeyPairByData(pubKeyData: Uint8Array, priKeyData: Uint8Array) {\n  let pubKeyBlob: cryptoFramework.DataBlob = { data: pubKeyData };\n  let priKeyBlob: cryptoFramework.DataBlob = { data: priKeyData };\n  let rsaGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024');\n  let keyPair = rsaGenerator.convertKeySync(pubKeyBlob, priKeyBlob);\n  console.info('convertKeySync result: success.');\n  return keyPair;\n}\n\nfunction main() {\n  let pkData =\n    new Uint8Array([48, 129, 159, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 1, 5, 0, 3, 129, 141, 0, 48, 129, 137,\n      2, 129, 129, 0, 197, 64, 10, 198, 14, 110, 65, 92, 206, 35, 28, 123, 153, 24, 134, 255, 145, 74, 42, 173, 40, 215,\n      146, 58, 143, 46, 10, 195, 154, 160, 69, 196, 220, 152, 179, 44, 111, 200, 84, 78, 215, 73, 210, 181, 12, 29, 70,\n      68, 36, 135, 153, 89, 230, 202, 130, 212, 111, 243, 234, 92, 131, 62, 145, 50, 73, 48, 104, 245, 46, 70, 45, 157,\n      147, 143, 140, 162, 156, 216, 220, 49, 121, 142, 194, 33, 223, 201, 0, 16, 163, 210, 240, 118, 92, 147, 121, 220,\n      17, 114, 24, 52, 125, 135, 176, 88, 21, 83, 86, 17, 156, 88, 250, 48, 79, 86, 128, 248, 105, 208, 133, 140, 13,\n      153, 164, 191, 136, 164, 44, 53, 2, 3, 1, 0, 1]);\n  let skData =\n    new Uint8Array([48, 130, 2, 119, 2, 1, 0, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 1, 5, 0, 4, 130, 2, 97, 48,\n      130, 2, 93, 2, 1, 0, 2, 129, 129, 0, 197, 64, 10, 198, 14, 110, 65, 92, 206, 35, 28, 123, 153, 24, 134, 255, 145,\n      74, 42, 173, 40, 215, 146, 58, 143, 46, 10, 195, 154, 160, 69, 196, 220, 152, 179, 44, 111, 200, 84, 78, 215, 73,\n      210, 181, 12, 29, 70, 68, 36, 135, 153, 89, 230, 202, 130, 212, 111, 243, 234, 92, 131, 62, 145, 50, 73, 48, 104,\n      245, 46, 70, 45, 157, 147, 143, 140, 162, 156, 216, 220, 49, 121, 142, 194, 33, 223, 201, 0, 16, 163, 210, 240,\n      118, 92, 147, 121, 220, 17, 114, 24, 52, 125, 135, 176, 88, 21, 83, 86, 17, 156, 88, 250, 48, 79, 86, 128, 248,\n      105, 208, 133, 140, 13, 153, 164, 191, 136, 164, 44, 53, 2, 3, 1, 0, 1, 2, 129, 128, 70, 75, 184, 139, 53, 1, 94,\n      17, 240, 244, 218, 101, 193, 253, 215, 190, 164, 204, 197, 192, 200, 89, 107, 39, 171, 119, 65, 38, 204, 168, 105,\n      180, 234, 217, 16, 161, 185, 132, 175, 103, 25, 154, 153, 153, 36, 36, 26, 178, 150, 66, 45, 8, 185, 19, 90, 228,\n      210, 177, 30, 200, 177, 141, 78, 184, 248, 59, 113, 154, 145, 73, 160, 24, 73, 157, 86, 207, 186, 32, 95, 200,\n      106, 252, 107, 69, 170, 193, 216, 196, 181, 142, 74, 203, 15, 18, 89, 228, 152, 19, 239, 21, 233, 98, 121, 214,\n      57, 187, 111, 239, 223, 248, 199, 70, 223, 108, 108, 113, 234, 144, 155, 95, 246, 144, 244, 122, 39, 55, 127, 81,\n      2, 65, 0, 246, 96, 188, 0, 0, 104, 221, 105, 139, 144, 63, 175, 209, 87, 179, 162, 88, 192, 99, 82, 125, 53, 54,\n      48, 70, 245, 239, 37, 15, 242, 247, 84, 115, 187, 196, 95, 156, 40, 165, 60, 64, 102, 13, 229, 243, 2, 149, 0,\n      232, 226, 221, 192, 95, 11, 12, 208, 5, 181, 98, 62, 210, 190, 141, 235, 2, 65, 0, 204, 244, 34, 10, 105, 80, 76,\n      116, 163, 35, 231, 168, 187, 206, 189, 101, 215, 103, 80, 115, 86, 11, 34, 127, 203, 114, 84, 188, 121, 174, 169,\n      31, 142, 2, 182, 27, 140, 225, 157, 227, 71, 98, 15, 203, 187, 213, 5, 190, 20, 121, 8, 30, 193, 100, 232, 101,\n      141, 8, 124, 20, 29, 78, 6, 95, 2, 65, 0, 204, 43, 225, 224, 6, 118, 224, 117, 100, 200, 199, 94, 70, 23, 109,\n      175, 173, 232, 208, 230, 61, 8, 105, 189, 156, 48, 150, 91, 154, 89, 248, 136, 173, 215, 254, 166, 84, 220, 130,\n      1, 234, 68, 40, 100, 84, 251, 224, 202, 254, 51, 115, 28, 198, 38, 124, 25, 175, 129, 94, 199, 61, 17, 216, 189,\n      2, 64, 72, 230, 129, 129, 48, 138, 134, 87, 106, 123, 231, 247, 165, 173, 216, 194, 115, 198, 228, 223, 209, 120,\n      46, 114, 68, 92, 75, 117, 170, 214, 140, 131, 147, 208, 181, 19, 193, 157, 178, 186, 87, 246, 178, 101, 166, 79,\n      20, 54, 211, 51, 101, 199, 2, 197, 48, 192, 134, 84, 193, 69, 170, 82, 201, 131, 2, 65, 0, 213, 165, 55, 166, 131,\n      210, 195, 56, 250, 147, 195, 61, 205, 208, 189, 185, 40, 52, 50, 119, 137, 23, 246, 46, 220, 108, 52, 23, 152,\n      154, 94, 32, 144, 195, 184, 249, 21, 168, 12, 57, 222, 18, 60, 117, 81, 157, 72, 30, 155, 190, 165, 242, 228, 139,\n      240, 184, 145, 170, 103, 210, 160, 161, 135, 13]);\n  let keyPair = genKeyPairByData(pkData, skData);\n  let pubKey = keyPair.pubKey;\n  let priKey = keyPair.priKey;\n  let message = 'This is a test';\n  // 把字符串按utf-8解码为Uint8Array\n  let plainText: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(message, 'utf-8').buffer) };\n  let encryptText = encryptMessage(pubKey, plainText);\n  let decryptText = decryptMessage(priKey, encryptText);\n  if (plainText.data.toString() === decryptText.data.toString()) {\n    console.info('decrypt ok.');\n    // 把Uint8Array按utf-8编码为字符串\n    let messageDecrypted = buffer.from(decryptText.data).toString('utf-8');\n    console.info('decrypted result string:' + messageDecrypted);\n  } else {\n    console.error('decrypt failed.');\n  }\n}\n"
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