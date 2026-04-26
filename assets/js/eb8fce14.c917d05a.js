"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["296004"], {
319383(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_aes_sym_encrypt_decrypt_gcm_crypto_aes_sym_encrypt_decrypt_gcm_md_eb8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-dev-crypto-aes-sym-encrypt-decrypt-gcm-crypto-aes-sym-encrypt-decrypt-gcm-md-eb8.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_aes_sym_encrypt_decrypt_gcm_crypto_aes_sym_encrypt_decrypt_gcm_md_eb8_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm/crypto-aes-sym-encrypt-decrypt-gcm","title":"使用AES对称密钥（GCM模式）加解密(ArkTS)","description":"对应的算法规格请查看对称密钥加解密算法规格：AES。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm/crypto-aes-sym-encrypt-decrypt-gcm.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用AES对称密钥（GCM模式）加解密(ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-aes-sym-encrypt-decrypt-gcm","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"分段加解密说明","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-encrypt-decrypt-by-segment/"},"next":{"title":"使用AES对称密钥（GCM模式）加解密(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm/crypto-aes-sym-encrypt-decrypt-gcm.md


const frontMatter = {
	title: '使用AES对称密钥（GCM模式）加解密(ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-aes-sym-encrypt-decrypt-gcm',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AES对称密钥（GCM模式）加解密(ArkTS)';

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
        id: "使用aes对称密钥gcm模式加解密arkts",
        children: "使用AES对称密钥（GCM模式）加解密(ArkTS)"
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
          }), "，生成密钥算法为AES、密钥长度为128位的对称密钥（SymKey）。然后调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatesymkey-1",
            children: "SymKeyGenerator.generateSymKey"
          }), "生成对称密钥。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何生成AES对称密钥，开发者可以参考以下示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
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
          }), "，设置模式为加密（cryptoFramework.CryptoMode.ENCRYPT_MODE），指定加密密钥（SymKey）和GCM模式对应的加密参数（GcmParamsSpec），以初始化加密Cipher实例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#update-1",
            children: "Cipher.update"
          }), "，更新数据（明文）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前单次update无长度限制，开发者可根据数据量调用update。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当数据量较小时，可以在init完成后直接调用doFinal。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当数据量较大时，可以多次调用update，即", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-aes-sym-encrypt-decrypt-gcm-by-segment",
              children: "分段加解密"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#dofinal-1",
            children: "Cipher.doFinal"
          }), "，获取加密后的数据。注意，由于已使用update传入数据，此处data传入null。doFinal输出结果可能为null，在访问具体数据前，需要先判断结果是否为null，避免产生异常。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "已使用update传入数据，data传入null。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "doFinal输出可能为null，访问数据前先判断结果。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["读取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#gcmparamsspec",
            children: "GcmParamsSpec"
          }), ".authTag作为解密的认证信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在GCM模式下，算法库目前仅支持16字节的authTag，用于解密时的初始化认证。示例中的authTag恰好为16字节。"
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
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction generateRandom(len: number) {\n  let rand = cryptoFramework.createRandom();\n  let generateRandSync = rand.generateRandomSync(len);\n  return generateRandSync;\n}\n\nfunction genGcmParamsSpec() {\n  let ivBlob = generateRandom(12);\n  let arr = [1, 2, 3, 4, 5, 6, 7, 8]; // 8 bytes\n  let dataAad = new Uint8Array(arr);\n  let aadBlob: cryptoFramework.DataBlob = { data: dataAad };\n  arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 16 bytes\n  let dataTag = new Uint8Array(arr);\n  let tagBlob: cryptoFramework.DataBlob = {\n    data: dataTag\n  };\n  // GCM的authTag在加密时从doFinal结果中获取，在解密时填入init函数的params参数中\n  let gcmParamsSpec: cryptoFramework.GcmParamsSpec = {\n    iv: ivBlob,\n    aad: aadBlob,\n    authTag: tagBlob,\n    algName: 'GcmParamsSpec'\n  };\n  return gcmParamsSpec;\n}\n\nlet gcmParams = genGcmParamsSpec();\n\n// 加密消息\nasync function encryptMessagePromise(symKey: cryptoFramework.SymKey, plainText: cryptoFramework.DataBlob) {\n  let cipher = cryptoFramework.createCipher('AES128|GCM|PKCS7');\n  await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, symKey, gcmParams);\n  let encryptUpdate = await cipher.update(plainText);\n  // gcm模式加密doFinal时传入空，获得tag数据，并更新至gcmParams对象中。\n  gcmParams.authTag = await cipher.doFinal(null);\n  return encryptUpdate;\n}\n\n// 解密消息\nasync function decryptMessagePromise(symKey: cryptoFramework.SymKey, cipherText: cryptoFramework.DataBlob) {\n  let decoder = cryptoFramework.createCipher('AES128|GCM|PKCS7');\n  await decoder.init(cryptoFramework.CryptoMode.DECRYPT_MODE, symKey, gcmParams);\n  let decryptUpdate = await decoder.update(cipherText);\n  // gcm模式解密doFinal时传入空，验证init时传入的tag数据，如果验证失败会抛出异常。\n  let decryptData = await decoder.doFinal(null);\n  if (decryptData == null) {\n    console.info('GCM decrypt result: success, decryptData is null.');\n  }\n  return decryptUpdate;\n}\n\nasync function genSymKeyByData(symKeyData: Uint8Array) {\n  let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };\n  let aesGenerator = cryptoFramework.createSymKeyGenerator('AES128');\n  let symKey = await aesGenerator.convertKey(symKeyBlob);\n  console.info('convertKey result: success.');\n  return symKey;\n}\n\nasync function main() {\n  let keyData = new Uint8Array([83, 217, 231, 76, 28, 113, 23, 219, 250, 71, 209, 210, 205, 97, 32, 159]);\n  let symKey = await genSymKeyByData(keyData);\n  let message = 'This is a test';\n  let plainText: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(message, 'utf-8').buffer) };\n  let encryptText = await encryptMessagePromise(symKey, plainText);\n  let decryptText = await decryptMessagePromise(symKey, encryptText);\n  if (plainText.data.toString() === decryptText.data.toString()) {\n    console.info('decrypt ok.');\n    console.info('decrypt plainText: ' + buffer.from(decryptText.data).toString('utf-8'));\n  } else {\n    console.error('decrypt failed.');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步方法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction generateRandom(len: number) {\n  let rand = cryptoFramework.createRandom();\n  let generateRandSync = rand.generateRandomSync(len);\n  return generateRandSync;\n}\n\nfunction genGcmParamsSpec() {\n  let ivBlob = generateRandom(12);\n  let arr = [1, 2, 3, 4, 5, 6, 7, 8]; // 8 bytes\n  let dataAad = new Uint8Array(arr);\n  let aadBlob: cryptoFramework.DataBlob = { data: dataAad };\n  arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 16 bytes\n  let dataTag = new Uint8Array(arr);\n  let tagBlob: cryptoFramework.DataBlob = {\n    data: dataTag\n  };\n  // GCM的authTag在加密时从doFinal结果中获取，在解密时填入init函数的params参数中\n  let gcmParamsSpec: cryptoFramework.GcmParamsSpec = {\n    iv: ivBlob,\n    aad: aadBlob,\n    authTag: tagBlob,\n    algName: 'GcmParamsSpec'\n  };\n  return gcmParamsSpec;\n}\n\nlet gcmParams = genGcmParamsSpec();\n\n// 加密消息\nfunction encryptMessage(symKey: cryptoFramework.SymKey, plainText: cryptoFramework.DataBlob) {\n  let cipher = cryptoFramework.createCipher('AES128|GCM|PKCS7');\n  cipher.initSync(cryptoFramework.CryptoMode.ENCRYPT_MODE, symKey, gcmParams);\n  let encryptUpdate = cipher.updateSync(plainText);\n  // gcm模式加密doFinal时传入空，获得tag数据，并更新至gcmParams对象中。\n  gcmParams.authTag = cipher.doFinalSync(null);\n  return encryptUpdate;\n}\n\n// 解密消息\nfunction decryptMessage(symKey: cryptoFramework.SymKey, cipherText: cryptoFramework.DataBlob) {\n  let decoder = cryptoFramework.createCipher('AES128|GCM|PKCS7');\n  decoder.initSync(cryptoFramework.CryptoMode.DECRYPT_MODE, symKey, gcmParams);\n  let decryptUpdate = decoder.updateSync(cipherText);\n  // gcm模式解密doFinal时传入空，验证init时传入的tag数据，如果验证失败会抛出异常。\n  let decryptData = decoder.doFinalSync(null);\n  if (decryptData == null) {\n    console.info('GCM decrypt result: success, decryptData is null.');\n  }\n  return decryptUpdate;\n}\n\nfunction genSymKeyByData(symKeyData: Uint8Array) {\n  let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };\n  let aesGenerator = cryptoFramework.createSymKeyGenerator('AES128');\n  let symKey = aesGenerator.convertKeySync(symKeyBlob);\n  console.info('convertKeySync result: success.');\n  return symKey;\n}\n\nfunction main() {\n  let keyData = new Uint8Array([83, 217, 231, 76, 28, 113, 23, 219, 250, 71, 209, 210, 205, 97, 32, 159]);\n  let symKey = genSymKeyByData(keyData);\n  let message = 'This is a test';\n  let plainText: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(message, 'utf-8').buffer) };\n  let encryptText = encryptMessage(symKey, plainText);\n  let decryptText = decryptMessage(symKey, encryptText);\n  if (plainText.data.toString() === decryptText.data.toString()) {\n    console.info('decrypt ok.');\n    console.info('decrypt plainText: ' + buffer.from(decryptText.data).toString('utf-8'));\n  } else {\n    console.error('decrypt failed.');\n  }\n}\n"
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