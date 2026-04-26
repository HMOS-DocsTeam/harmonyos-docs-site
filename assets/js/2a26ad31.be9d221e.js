"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["788692"], {
155415(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_aes_sym_encrypt_decrypt_gcm_by_segment_crypto_aes_sym_encrypt_decrypt_gcm_by_segment_md_2a2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-dev-crypto-aes-sym-encrypt-decrypt-gcm-by-segment-crypto-aes-sym-encrypt-decrypt-gcm-by-segment-md-2a2.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_aes_sym_encrypt_decrypt_gcm_by_segment_crypto_aes_sym_encrypt_decrypt_gcm_by_segment_md_2a2_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm-by-segment/crypto-aes-sym-encrypt-decrypt-gcm-by-segment","title":"使用AES对称密钥（GCM模式）分段加解密(ArkTS)","description":"对应的算法规格请查看对称密钥加解密算法规格：AES。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm-by-segment/crypto-aes-sym-encrypt-decrypt-gcm-by-segment.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm-by-segment","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm-by-segment/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm-by-segment/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"使用AES对称密钥（GCM模式）分段加解密(ArkTS)","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-aes-sym-encrypt-decrypt-gcm-by-segment","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AES对称密钥（ECB模式）加解密(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-ecb-ndk/"},"next":{"title":"使用AES对称密钥（GCM模式）分段加解密(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm-by-segment-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm-by-segment/crypto-aes-sym-encrypt-decrypt-gcm-by-segment.md


const frontMatter = {
	title: '使用AES对称密钥（GCM模式）分段加解密(ArkTS)',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-aes-sym-encrypt-decrypt-gcm-by-segment',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AES对称密钥（GCM模式）分段加解密(ArkTS)';

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
        id: "使用aes对称密钥gcm模式分段加解密arkts",
        children: "使用AES对称密钥（GCM模式）分段加解密(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec#aes",
        children: "对称密钥加解密算法规格：AES"
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
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatesymkeygenerator",
            children: "cryptoFramework.createSymKeyGenerator"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatesymkey-1",
            children: "SymKeyGenerator.generateSymKey"
          }), "，生成密钥算法为AES、密钥长度为128位的对称密钥（SymKey）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何生成AES对称密钥，开发者可参考下文示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#aes",
            children: "对称密钥生成和转换规格：AES"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-sym-key-randomly",
            children: "随机生成对称密钥"
          }), "理解，参考文档与当前示例可能存在入参差异，请在阅读时注意区分。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatecipher",
            children: "cryptoFramework.createCipher"
          }), "，指定字符串参数'AES128|GCM|PKCS7'，创建对称密钥类型为AES128、分组模式为GCM、填充模式为PKCS7的Cipher实例，用于完成加密操作。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-1",
            children: "Cipher.init"
          }), "，设置模式为加密（cryptoFramework.CryptoMode.ENCRYPT_MODE），指定加密密钥（SymKey）和GCM模式对应的加密参数（GcmParamsSpec），初始化加密Cipher实例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将一次传入数据量设置为20字节，多次调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#update-1",
            children: "Cipher.update"
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
              children: "1）例如ECB和CBC模式，始终以分组作为基本单位进行加密，并输出本次更新产生的加密分组结果。即当本次更新操作凑满一个分组时就输出密文，未凑满则本次更新输出null，将未加密的数据与下次输入的数据拼接后再凑分组输出。最后在doFinal时，将未加密的数据根据指定的填充模式进行填充，再输出剩余的加密结果。解密过程中的update操作同理。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "2）对于流加密模式，如CTR和OFB模式，密文长度等于明文长度。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#dofinal-1",
            children: "Cipher.doFinal"
          }), "，获取加密后的数据。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "由于已通过update传入数据，此处传入null。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在访问doFinal输出结果前，需先判断结果是否为null，避免产生异常。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["读取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#gcmparamsspec",
            children: "GcmParamsSpec"
          }), ".authTag作为解密认证信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在GCM模式下，算法库支持16字节的authTag，用于解密时的认证初始化。示例中的authTag为16字节。"
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
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatecipher",
          children: "cryptoFramework.createCipher"
        }), "，指定字符串参数'AES128|GCM|PKCS7'，创建对称密钥类型为AES128、分组模式为GCM、填充模式为PKCS7的Cipher实例，用于完成解密操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-1",
          children: "Cipher.init"
        }), "，设置模式为解密（cryptoFramework.CryptoMode.DECRYPT_MODE），指定解密密钥（SymKey）和GCM模式对应的解密参数（GcmParamsSpec），初始化解密Cipher实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["将一次传入数据量设置为20字节，多次调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#update-1",
          children: "Cipher.update"
        }), "，更新数据（密文）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#dofinal-1",
          children: "Cipher.doFinal"
        }), "，获取解密后的数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "异步方法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction generateRandom(len: number) {\n  let rand = cryptoFramework.createRandom();\n  let generateRandSync = rand.generateRandomSync(len);\n  return generateRandSync;\n}\n\nfunction genGcmParamsSpec() {\n  let ivBlob = generateRandom(12);\n  let arr = [1, 2, 3, 4, 5, 6, 7, 8]; // 8 bytes\n  let dataAad = new Uint8Array(arr);\n  let aadBlob: cryptoFramework.DataBlob = { data: dataAad };\n  arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 16 bytes\n  let dataTag = new Uint8Array(arr);\n  let tagBlob: cryptoFramework.DataBlob = {\n    data: dataTag\n  }; // The GCM authTag is obtained by doFinal() in encryption and passed in params of init() in decryption.\n  let gcmParamsSpec: cryptoFramework.GcmParamsSpec = {\n    iv: ivBlob,\n    aad: aadBlob,\n    authTag: tagBlob,\n    algName: 'GcmParamsSpec'\n  };\n  return gcmParamsSpec;\n}\n\nlet gcmParams = genGcmParamsSpec();\n\n// 分段加密消息\nasync function encryptMessageUpdateBySegment(symKey: cryptoFramework.SymKey, plainText: cryptoFramework.DataBlob) {\n  let cipher = cryptoFramework.createCipher('AES128|GCM|PKCS7');\n  await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, symKey, gcmParams);\n  let updateLength = 20; // 假设以20字节为单位进行分段update，实际并无要求\n  let cipherText = new Uint8Array();\n  for (let i = 0; i < plainText.data.length; i += updateLength) {\n    let updateMessage = plainText.data.subarray(i, i + updateLength);\n    let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };\n    // 分段update\n    let updateOutput = await cipher.update(updateMessageBlob);\n    // 把update的结果拼接起来，得到密文（有些情况下还需拼接doFinal的结果，这取决于分组模式\n    // 和填充模式，本例中GCM模式的doFinal结果只包含authTag而不含密文，所以不需要拼接）\n    let mergeText = new Uint8Array(cipherText.length + updateOutput.data.length);\n    mergeText.set(cipherText);\n    mergeText.set(updateOutput.data, cipherText.length);\n    cipherText = mergeText;\n  }\n  gcmParams.authTag = await cipher.doFinal(null);\n  let cipherBlob: cryptoFramework.DataBlob = { data: cipherText };\n  return cipherBlob;\n}\n\n// 分段解密消息\nasync function decryptMessagePromise(symKey: cryptoFramework.SymKey, cipherText: cryptoFramework.DataBlob) {\n  let decoder = cryptoFramework.createCipher('AES128|GCM|PKCS7');\n  await decoder.init(cryptoFramework.CryptoMode.DECRYPT_MODE, symKey, gcmParams);\n  let updateLength = 20; // 假设以20字节为单位进行分段update，实际并无要求\n  let decryptText = new Uint8Array();\n  for (let i = 0; i < cipherText.data.length; i += updateLength) {\n    let updateMessage = cipherText.data.subarray(i, i + updateLength);\n    let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };\n    // 分段update\n    let updateOutput = await decoder.update(updateMessageBlob);\n    // 把update的结果拼接起来，得到明文\n    let mergeText = new Uint8Array(decryptText.length + updateOutput.data.length);\n    mergeText.set(decryptText);\n    mergeText.set(updateOutput.data, decryptText.length);\n    decryptText = mergeText;\n  }\n  let decryptData = await decoder.doFinal(null);\n  if (decryptData == null) {\n    console.info('GCM decrypt result: success, decryptData is null.');\n  }\n  let decryptBlob: cryptoFramework.DataBlob = { data: decryptText };\n  return decryptBlob;\n}\n\nasync function genSymKeyByData(symKeyData: Uint8Array) {\n  let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };\n  let aesGenerator = cryptoFramework.createSymKeyGenerator('AES128');\n  let symKey = await aesGenerator.convertKey(symKeyBlob);\n  console.info('convertKey result: success.');\n  return symKey;\n}\n\nasync function aes() {\n  let keyData = new Uint8Array([83, 217, 231, 76, 28, 113, 23, 219, 250, 71, 209, 210, 205, 97, 32, 159]);\n  let symKey = await genSymKeyByData(keyData);\n  let message = 'aaaaa.....bbbbb.....ccccc.....ddddd.....eee'; // 假设信息总共43字节，根据utf-8解码后，也是43字节\n  let plainText: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(message, 'utf-8').buffer) };\n  let encryptText = await encryptMessageUpdateBySegment(symKey, plainText);\n  let decryptText = await decryptMessagePromise(symKey, encryptText);\n  if (plainText.data.toString() === decryptText.data.toString()) {\n    console.info('decrypt ok.');\n    console.info('decrypt plainText: ' + buffer.from(decryptText.data).toString('utf-8'));\n  } else {\n    console.error('decrypt failed.');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步方法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction generateRandom(len: number) {\n  let rand = cryptoFramework.createRandom();\n  let generateRandSync = rand.generateRandomSync(len);\n  return generateRandSync;\n}\n\nfunction genGcmParamsSpec() {\n  let ivBlob = generateRandom(12);\n  let arr = [1, 2, 3, 4, 5, 6, 7, 8]; // 8 bytes\n  let dataAad = new Uint8Array(arr);\n  let aadBlob: cryptoFramework.DataBlob = { data: dataAad };\n  arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 16 bytes\n  let dataTag = new Uint8Array(arr);\n  let tagBlob: cryptoFramework.DataBlob = {\n    data: dataTag\n  }; // The GCM authTag is obtained by doFinal() in encryption and passed in params of init() in decryption.\n  let gcmParamsSpec: cryptoFramework.GcmParamsSpec = {\n    iv: ivBlob,\n    aad: aadBlob,\n    authTag: tagBlob,\n    algName: 'GcmParamsSpec'\n  };\n  return gcmParamsSpec;\n}\n\nlet gcmParams = genGcmParamsSpec();\n\n// 分段加密消息\nfunction encryptMessageUpdateBySegment(symKey: cryptoFramework.SymKey, plainText: cryptoFramework.DataBlob) {\n  let cipher = cryptoFramework.createCipher('AES128|GCM|PKCS7');\n  cipher.initSync(cryptoFramework.CryptoMode.ENCRYPT_MODE, symKey, gcmParams);\n  let updateLength = 20; // 假设以20字节为单位进行分段update，实际并无要求\n  let cipherText = new Uint8Array();\n  for (let i = 0; i < plainText.data.length; i += updateLength) {\n    let updateMessage = plainText.data.subarray(i, i + updateLength);\n    let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };\n    // 分段update\n    let updateOutput = cipher.updateSync(updateMessageBlob);\n    // 把update的结果拼接起来，得到密文（有些情况下还需拼接doFinal的结果，这取决于分组模式\n    // 和填充模式，本例中GCM模式的doFinal结果只包含authTag而不含密文，所以不需要拼接）\n    let mergeText = new Uint8Array(cipherText.length + updateOutput.data.length);\n    mergeText.set(cipherText);\n    mergeText.set(updateOutput.data, cipherText.length);\n    cipherText = mergeText;\n  }\n  gcmParams.authTag = cipher.doFinalSync(null);\n  let cipherBlob: cryptoFramework.DataBlob = { data: cipherText };\n  return cipherBlob;\n}\n\n// 分段解密消息\nfunction decryptMessage(symKey: cryptoFramework.SymKey, cipherText: cryptoFramework.DataBlob) {\n  let decoder = cryptoFramework.createCipher('AES128|GCM|PKCS7');\n  decoder.initSync(cryptoFramework.CryptoMode.DECRYPT_MODE, symKey, gcmParams);\n  let updateLength = 20; // 假设以20字节为单位进行分段update，实际并无要求\n  let decryptText = new Uint8Array();\n  for (let i = 0; i < cipherText.data.length; i += updateLength) {\n    let updateMessage = cipherText.data.subarray(i, i + updateLength);\n    let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };\n    // 分段update\n    let updateOutput = decoder.updateSync(updateMessageBlob);\n    // 把update的结果拼接起来，得到明文\n    let mergeText = new Uint8Array(decryptText.length + updateOutput.data.length);\n    mergeText.set(decryptText);\n    mergeText.set(updateOutput.data, decryptText.length);\n    decryptText = mergeText;\n  }\n  let decryptData = decoder.doFinalSync(null);\n  if (decryptData == null) {\n    console.info('GCM decrypt result: success, decryptData is null.');\n  }\n  let decryptBlob: cryptoFramework.DataBlob = { data: decryptText };\n  return decryptBlob;\n}\n\nfunction genSymKeyByData(symKeyData: Uint8Array) {\n  let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };\n  let aesGenerator = cryptoFramework.createSymKeyGenerator('AES128');\n  let symKey = aesGenerator.convertKeySync(symKeyBlob);\n  console.info('convertKeySync result: success.');\n  return symKey;\n}\n\nfunction main() {\n  let keyData = new Uint8Array([83, 217, 231, 76, 28, 113, 23, 219, 250, 71, 209, 210, 205, 97, 32, 159]);\n  let symKey = genSymKeyByData(keyData);\n  let message = 'aaaaa.....bbbbb.....ccccc.....ddddd.....eee'; // 假设信息总共43字节，根据utf-8解码后，也是43字节\n  let plainText: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(message, 'utf-8').buffer) };\n  let encryptText = encryptMessageUpdateBySegment(symKey, plainText);\n  let decryptText = decryptMessage(symKey, encryptText);\n  if (plainText.data.toString() === decryptText.data.toString()) {\n    console.info('decrypt ok.');\n    console.info('decrypt plainText: ' + buffer.from(decryptText.data).toString('utf-8'));\n  } else {\n    console.error('decrypt failed.');\n  }\n}\n"
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