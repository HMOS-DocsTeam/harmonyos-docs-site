"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["726762"], {
280581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_sm_4_sym_encrypt_decrypt_cbc_crypto_sm_4_sym_encrypt_decrypt_cbc_md_4ed_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-dev-crypto-sm-4-sym-encrypt-decrypt-cbc-crypto-sm-4-sym-encrypt-decrypt-cbc-md-4ed.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_sm_4_sym_encrypt_decrypt_cbc_crypto_sm_4_sym_encrypt_decrypt_cbc_md_4ed_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-cbc/crypto-sm4-sym-encrypt-decrypt-cbc","title":"使用SM4对称密钥（CBC模式）加解密(ArkTS)","description":"对应的算法规格请查看对称密钥加解密算法规格：SM4。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-cbc/crypto-sm4-sym-encrypt-decrypt-cbc.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-cbc","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-cbc/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-cbc/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"使用SM4对称密钥（CBC模式）加解密(ArkTS)","sidebar_position":17,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm4-sym-encrypt-decrypt-cbc","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用SM4对称密钥（ECB模式）加解密(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-ecb-ndk/"},"next":{"title":"使用SM4对称密钥（CBC模式）加解密(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-cbc-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm4-sym-encrypt-decrypt-cbc/crypto-sm4-sym-encrypt-decrypt-cbc.md


const frontMatter = {
	title: '使用SM4对称密钥（CBC模式）加解密(ArkTS)',
	sidebar_position: 17,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sm4-sym-encrypt-decrypt-cbc',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用SM4对称密钥（CBC模式）加解密(ArkTS)';

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
        id: "使用sm4对称密钥cbc模式加解密arkts",
        children: "使用SM4对称密钥（CBC模式）加解密(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec#sm4",
        children: "对称密钥加解密算法规格：SM4"
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
          }), "，生成密钥算法为SM4、密钥长度为128位的对称密钥（SymKey）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如何生成SM4对称密钥，开发者可参考下文示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#sm4",
            children: "对称密钥生成和转换规格：SM4"
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
          }), "，指定字符串参数'SM4_128|CBC|PKCS7'，创建对称密钥类型为SM4_128、分组模式为CBC、填充模式为PKCS7的Cipher实例，用于完成加密操作。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-1",
            children: "Cipher.init"
          }), "，设置模式为加密（cryptoFramework.CryptoMode.ENCRYPT_MODE），指定加密密钥（SymKey）和CBC模式对应的加密参数（IvParamsSpec），初始化加密Cipher实例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#update-1",
            children: "Cipher.update"
          }), "，更新数据（明文）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当数据量较小时，可以在init完成后直接调用doFinal。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当数据量较大时，可以多次调用update，即分段加解密。"
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
            children: "由于已使用update传入数据，此处data传入null。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "doFinal输出结果可能为null，在访问具体数据前，需要先判断结果是否为null，避免产生异常。"
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
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatecipher",
          children: "cryptoFramework.createCipher"
        }), "，指定字符串参数'SM4_128|CBC|PKCS7'，创建对称密钥类型为SM4_128、分组模式为CBC、填充模式为PKCS7的Cipher实例，用于完成解密操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-1",
          children: "Cipher.init"
        }), "，设置模式为解密（cryptoFramework.CryptoMode.DECRYPT_MODE），指定解密密钥（SymKey）和CBC模式对应的解密参数（IvParamsSpec），初始化解密Cipher实例。"]
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
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction generateRandom(len: number) {\n  let rand = cryptoFramework.createRandom();\n  let generateRandSync = rand.generateRandomSync(len);\n  return generateRandSync;\n}\n\nfunction genIvParamsSpec() {\n  let ivBlob = generateRandom(16); // 16 bytes\n  let ivParamsSpec: cryptoFramework.IvParamsSpec = {\n    algName: 'IvParamsSpec',\n    iv: ivBlob\n  };\n  return ivParamsSpec;\n}\n\nlet iv = genIvParamsSpec();\n\n// 加密消息\nasync function encryptMessagePromise(symKey: cryptoFramework.SymKey, plainText: cryptoFramework.DataBlob) {\n  let cipher = cryptoFramework.createCipher('SM4_128|CBC|PKCS7');\n  await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, symKey, iv);\n  let encryptData = await cipher.doFinal(plainText);\n  return encryptData;\n}\n\n// 解密消息\nasync function decryptMessagePromise(symKey: cryptoFramework.SymKey, cipherText: cryptoFramework.DataBlob) {\n  let decoder = cryptoFramework.createCipher('SM4_128|CBC|PKCS7');\n  await decoder.init(cryptoFramework.CryptoMode.DECRYPT_MODE, symKey, iv);\n  let decryptData = await decoder.doFinal(cipherText);\n  return decryptData;\n}\n\nasync function genSymKeyByData(symKeyData: Uint8Array) {\n  let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };\n  let symGenerator = cryptoFramework.createSymKeyGenerator('SM4_128');\n  let symKey = await symGenerator.convertKey(symKeyBlob);\n  console.info('convertKey result: success.');\n  return symKey;\n}\n\nasync function main() {\n  try {\n    let keyData = new Uint8Array([7, 154, 52, 176, 4, 236, 150, 43, 237, 9, 145, 166, 141, 174, 224, 131]);\n    let symKey = await genSymKeyByData(keyData);\n    let message = 'This is a test';\n    let plainText: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(message, 'utf-8').buffer) };\n    let encryptText = await encryptMessagePromise(symKey, plainText);\n    let decryptText = await decryptMessagePromise(symKey, encryptText);\n    if (plainText.data.toString() === decryptText.data.toString()) {\n      console.info('decrypt ok.');\n      console.info('decrypt plainText: ' + buffer.from(decryptText.data).toString('utf-8'));\n    } else {\n      console.error('decrypt failed.');\n    }\n  } catch (error) {\n    console.error(`SM4 failed: errCode: ${error.code}, message: ${error.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步方法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction generateRandom(len: number) {\n  let rand = cryptoFramework.createRandom();\n  let generateRandSync = rand.generateRandomSync(len);\n  return generateRandSync;\n}\n\nfunction genIvParamsSpec() {\n  let ivBlob = generateRandom(16); // 16 bytes\n  let ivParamsSpec: cryptoFramework.IvParamsSpec = {\n    algName: 'IvParamsSpec',\n    iv: ivBlob\n  };\n  return ivParamsSpec;\n}\n\nlet iv = genIvParamsSpec();\n\n// 加密消息\nfunction encryptMessage(symKey: cryptoFramework.SymKey, plainText: cryptoFramework.DataBlob) {\n  let cipher = cryptoFramework.createCipher('SM4_128|CBC|PKCS7');\n  cipher.initSync(cryptoFramework.CryptoMode.ENCRYPT_MODE, symKey, iv);\n  let encryptData = cipher.doFinalSync(plainText);\n  return encryptData;\n}\n\n// 解密消息\nfunction decryptMessage(symKey: cryptoFramework.SymKey, cipherText: cryptoFramework.DataBlob) {\n  let decoder = cryptoFramework.createCipher('SM4_128|CBC|PKCS7');\n  decoder.initSync(cryptoFramework.CryptoMode.DECRYPT_MODE, symKey, iv);\n  let decryptData = decoder.doFinalSync(cipherText);\n  return decryptData;\n}\n\nfunction genSymKeyByData(symKeyData: Uint8Array) {\n  let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };\n  let symGenerator = cryptoFramework.createSymKeyGenerator('SM4_128');\n  let symKey = symGenerator.convertKeySync(symKeyBlob);\n  console.info('convertKeySync result: success.');\n  return symKey;\n}\n\nfunction main() {\n  try {\n    let keyData = new Uint8Array([7, 154, 52, 176, 4, 236, 150, 43, 237, 9, 145, 166, 141, 174, 224, 131]);\n    let symKey = genSymKeyByData(keyData);\n    let message = 'This is a test';\n    let plainText: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(message, 'utf-8').buffer) };\n    let encryptText = encryptMessage(symKey, plainText);\n    let decryptText = decryptMessage(symKey, encryptText);\n    if (plainText.data.toString() === decryptText.data.toString()) {\n      console.info('decrypt ok.');\n      console.info('decrypt plainText: ' + buffer.from(decryptText.data).toString('utf-8'));\n    } else {\n      console.error('decrypt failed.');\n    }\n  } catch (error) {\n    console.error(`SM4 failed: errCode: ${error.code}, message: ${error.message}`);\n  }\n}\n"
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