"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["1652"], {
640801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_sm_2_asym_encrypt_decrypt_crypto_sm_2_asym_encrypt_decrypt_md_98b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-dev-crypto-sm-2-asym-encrypt-decrypt-crypto-sm-2-asym-encrypt-decrypt-md-98b.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_sm_2_asym_encrypt_decrypt_crypto_sm_2_asym_encrypt_decrypt_md_98b_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt/crypto-sm2-asym-encrypt-decrypt","title":"使用SM2非对称密钥加解密(ArkTS)","description":"对应的算法规格请查看非对称密钥加解密算法规格：SM2。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt/crypto-sm2-asym-encrypt-decrypt.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":32,"frontMatter":{"title":"使用SM2非对称密钥加解密(ArkTS)","sidebar_position":32,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm2-asym-encrypt-decrypt","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用RSA非对称密钥（PKCS1_OAEP模式）加解密","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-rsa-asym-encrypt-decrypt-pkcs1_oaep/"},"next":{"title":"使用SM2非对称密钥加解密(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-asym-encrypt-decrypt/crypto-sm2-asym-encrypt-decrypt.md


const frontMatter = {
	title: '使用SM2非对称密钥加解密(ArkTS)',
	sidebar_position: 32,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm2-asym-encrypt-decrypt',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用SM2非对称密钥加解密(ArkTS)';

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
        id: "使用sm2非对称密钥加解密arkts",
        children: "使用SM2非对称密钥加解密(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec#sm2",
        children: "非对称密钥加解密算法规格：SM2"
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
          }), "，生成SM2密钥类型为SM2_256的非对称密钥对（KeyPair）。KeyPair对象中包括公钥PubKey、私钥PriKey。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何生成SM2非对称密钥对，开发者可参考下文示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#sm2",
            children: "非对称密钥生成和转换规格：SM2"
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
          }), "，指定字符串参数'SM2_256|SM3'，创建非对称密钥类型为SM2_256、摘要算法为SM3的Cipher实例，用于完成加解密操作。"]
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
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "doFinal输出结果可能为null，在访问具体数据前，需要先判断结果是否为null，避免产生异常。"
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
        children: ["由于SM2算法的Cipher实例不支持重复init操作，需要调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatecipher",
          children: "cryptoFramework.createCipher"
        }), "，重新生成Cipher实例。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-1",
          children: "Cipher.init"
        }), "，设置模式为解密（cryptoFramework.CryptoMode.DECRYPT_MODE），指定解密密钥（KeyPair.PriKey）初始化解密Cipher实例。SM2无加密参数，直接传入null。"]
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
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\n// 加密消息\nasync function encryptMessagePromise(publicKey: cryptoFramework.PubKey, plainText: cryptoFramework.DataBlob) {\n  let cipher = cryptoFramework.createCipher('SM2_256|SM3');\n  await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, publicKey, null);\n  let encryptData = await cipher.doFinal(plainText);\n  return encryptData;\n}\n\n// 解密消息\nasync function decryptMessagePromise(privateKey: cryptoFramework.PriKey, cipherText: cryptoFramework.DataBlob) {\n  let decoder = cryptoFramework.createCipher('SM2_256|SM3');\n  await decoder.init(cryptoFramework.CryptoMode.DECRYPT_MODE, privateKey, null);\n  let decryptData = await decoder.doFinal(cipherText);\n  return decryptData;\n}\n\n// 生成SM2密钥对\nasync function genKeyPairByData(pubKeyData: Uint8Array, priKeyData: Uint8Array) {\n  let pubKeyBlob: cryptoFramework.DataBlob = { data: pubKeyData };\n  let priKeyBlob: cryptoFramework.DataBlob = { data: priKeyData };\n  let sm2Generator = cryptoFramework.createAsyKeyGenerator('SM2_256');\n  let keyPair = await sm2Generator.convertKey(pubKeyBlob, priKeyBlob);\n  console.info('convertKey result: success.');\n  return keyPair;\n}\n\nasync function main() {\n  let pkData =\n    new Uint8Array([48, 89, 48, 19, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 8, 42, 129, 28, 207, 85, 1, 130, 45, 3, 66, 0,\n      4, 90, 3, 58, 157, 190, 248, 76, 7, 132, 200, 151, 208, 112, 230, 96, 140, 90, 238, 211, 155, 128, 109, 248, 40,\n      83, 214, 78, 42, 104, 106, 55, 148, 249, 35, 61, 32, 221, 135, 143, 100, 45, 97, 194, 176, 52, 73, 136, 174, 40,\n      70, 70, 34, 103, 103, 161, 99, 27, 187, 13, 187, 109, 244, 13, 7]);\n  let skData =\n    new Uint8Array([48, 49, 2, 1, 1, 4, 32, 54, 41, 239, 240, 63, 188, 134, 113, 31, 102, 149, 203, 245, 89, 15, 15, 47,\n      202, 170, 60, 38, 154, 28, 169, 189, 100, 251, 76, 112, 223, 156, 159, 160, 10, 6, 8, 42, 129, 28, 207, 85, 1,\n      130, 45]);\n  let keyPair = await genKeyPairByData(pkData, skData);\n  let pubKey = keyPair.pubKey;\n  let priKey = keyPair.priKey;\n  let message = 'This is a test';\n  // 把字符串按utf-8解码为Uint8Array\n  let plainText: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(message, 'utf-8').buffer) };\n  let encryptText = await encryptMessagePromise(pubKey, plainText);\n  let decryptText = await decryptMessagePromise(priKey, encryptText);\n  if (plainText.data.toString() === decryptText.data.toString()) {\n    console.info('decrypt ok.');\n    // 把Uint8Array按utf-8编码为字符串\n    let messageDecrypted = buffer.from(decryptText.data).toString('utf-8');\n    console.info('decrypted result string:' + messageDecrypted);\n  } else {\n    console.error('decrypt failed.');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步方法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\n// 加密消息\nfunction encryptMessage(publicKey: cryptoFramework.PubKey, plainText: cryptoFramework.DataBlob) {\n  let cipher = cryptoFramework.createCipher('SM2_256|SM3');\n  cipher.initSync(cryptoFramework.CryptoMode.ENCRYPT_MODE, publicKey, null);\n  let encryptData = cipher.doFinalSync(plainText);\n  return encryptData;\n}\n\n// 解密消息\nfunction decryptMessage(privateKey: cryptoFramework.PriKey, cipherText: cryptoFramework.DataBlob) {\n  let decoder = cryptoFramework.createCipher('SM2_256|SM3');\n  decoder.initSync(cryptoFramework.CryptoMode.DECRYPT_MODE, privateKey, null);\n  let decryptData = decoder.doFinalSync(cipherText);\n  return decryptData;\n}\n\n// 生成SM2密钥对\nfunction genKeyPairByData(pubKeyData: Uint8Array, priKeyData: Uint8Array) {\n  let pubKeyBlob: cryptoFramework.DataBlob = { data: pubKeyData };\n  let priKeyBlob: cryptoFramework.DataBlob = { data: priKeyData };\n  let sm2Generator = cryptoFramework.createAsyKeyGenerator('SM2_256');\n  let keyPair = sm2Generator.convertKeySync(pubKeyBlob, priKeyBlob);\n  console.info('convertKeySync result: success.');\n  return keyPair;\n}\n\nfunction main() {\n  let pkData =\n    new Uint8Array([48, 89, 48, 19, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 8, 42, 129, 28, 207, 85, 1, 130, 45, 3, 66, 0,\n      4, 90, 3, 58, 157, 190, 248, 76, 7, 132, 200, 151, 208, 112, 230, 96, 140, 90, 238, 211, 155, 128, 109, 248, 40,\n      83, 214, 78, 42, 104, 106, 55, 148, 249, 35, 61, 32, 221, 135, 143, 100, 45, 97, 194, 176, 52, 73, 136, 174, 40,\n      70, 70, 34, 103, 103, 161, 99, 27, 187, 13, 187, 109, 244, 13, 7]);\n  let skData =\n    new Uint8Array([48, 49, 2, 1, 1, 4, 32, 54, 41, 239, 240, 63, 188, 134, 113, 31, 102, 149, 203, 245, 89, 15, 15, 47,\n      202, 170, 60, 38, 154, 28, 169, 189, 100, 251, 76, 112, 223, 156, 159, 160, 10, 6, 8, 42, 129, 28, 207, 85, 1,\n      130, 45]);\n  let keyPair = genKeyPairByData(pkData, skData);\n  let pubKey = keyPair.pubKey;\n  let priKey = keyPair.priKey;\n  let message = 'This is a test';\n  // 把字符串按utf-8解码为Uint8Array\n  let plainText: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(message, 'utf-8').buffer) };\n  let encryptText = encryptMessage(pubKey, plainText);\n  let decryptText = decryptMessage(priKey, encryptText);\n  if (plainText.data.toString() === decryptText.data.toString()) {\n    console.info('decrypt ok.');\n    // 把Uint8Array按utf-8编码为字符串\n    let messageDecrypted = buffer.from(decryptText.data).toString('utf-8');\n    console.info('decrypted result string:' + messageDecrypted);\n  } else {\n    console.error('decrypt failed.');\n  }\n}\n"
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