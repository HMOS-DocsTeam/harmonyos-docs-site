"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["414049"], {
415363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_chacha_20_encrypt_decrypt_poly_1305_crypto_chacha_20_encrypt_decrypt_poly_1305_md_925_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-encryption-decryption-crypto-encrypt-decrypt-dev-crypto-chacha-20-encrypt-decrypt-poly-1305-crypto-chacha-20-encrypt-decrypt-poly-1305-md-925.json
var site_docs_system_security_crypto_architecture_kit_crypto_encryption_decryption_crypto_encrypt_decrypt_dev_crypto_chacha_20_encrypt_decrypt_poly_1305_crypto_chacha_20_encrypt_decrypt_poly_1305_md_925_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-chacha20-encrypt-decrypt-poly1305/crypto-chacha20-encrypt-decrypt-poly1305","title":"使用ChaCha20对称密钥（Poly1305模式）加解密(ArkTS)","description":"从API22开始，算法库支持该算法。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-chacha20-encrypt-decrypt-poly1305/crypto-chacha20-encrypt-decrypt-poly1305.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-chacha20-encrypt-decrypt-poly1305","slug":"/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-chacha20-encrypt-decrypt-poly1305/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-chacha20-encrypt-decrypt-poly1305/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":25,"frontMatter":{"title":"使用ChaCha20对称密钥（Poly1305模式）加解密(ArkTS)","sidebar_position":25,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-chacha20-encrypt-decrypt-poly1305","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用ChaCha20对称密钥加解密(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-chacha20-encrypt-decrypt-ndk/"},"next":{"title":"使用ChaCha20对称密钥（Poly1305模式）加解密(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-chacha20-encrypt-decrypt-poly1305-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-chacha20-encrypt-decrypt-poly1305/crypto-chacha20-encrypt-decrypt-poly1305.md


const frontMatter = {
	title: '使用ChaCha20对称密钥（Poly1305模式）加解密(ArkTS)',
	sidebar_position: 25,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-chacha20-encrypt-decrypt-poly1305',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '使用ChaCha20对称密钥（Poly1305模式）加解密(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用chacha20对称密钥poly1305模式加解密arkts",
        children: "使用ChaCha20对称密钥（Poly1305模式）加解密(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API22开始，算法库支持该算法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec#chacha20",
        children: "对称密钥加解密算法规格：ChaCha20"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "创建对象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatesymkeygenerator",
        children: "cryptoFramework.createSymKeyGenerator"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#generatesymkey-1",
        children: "SymKeyGenerator.generateSymKey"
      }), "，生成密钥算法为ChaCha20的对称密钥（SymKey）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如何生成ChaCha20对称密钥，开发者可参考下文示例，并结合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#chacha20",
        children: "对称密钥生成和转换规格：ChaCha20"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-sym-key-randomly",
        children: "随机生成对称密钥"
      }), "理解。参考文档与示例可能存在入参差异，请注意区分。"]
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
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreatecipher",
            children: "cryptoFramework.createCipher"
          }), "，指定字符串参数'ChaCha20|Poly1305'，创建对称密钥类型为ChaCha20、模式为Poly1305的Cipher实例，用于完成加密操作。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-1",
            children: "Cipher.init"
          }), "，设置模式为加密（cryptoFramework.CryptoMode.ENCRYPT_MODE），指定加密密钥（SymKey）和Poly1305模式对应的加密参数（Poly1305ParamsSpec），初始化加密Cipher实例。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#update-1",
            children: "Cipher.update"
          }), "，更新数据（明文）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#dofinal-1",
            children: "Cipher.doFinal"
          }), "，获取加密后的数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(699954)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于已使用update传入数据，此处data传入null。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "doFinal输出结果可能为null，在访问具体数据前，需要先判断结果是否为null，避免产生异常。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["读取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#poly1305paramsspec22",
            children: "Poly1305ParamsSpec"
          }), ".authTag作为解密的认证信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Poly1305模式下，需要从加密后的数据中取出末尾16字节，作为解密时初始化的认证信息。"
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
        }), "，指定字符串参数'ChaCha20|Poly1305'，创建对称密钥类型为ChaCha20、模式为Poly1305的Cipher实例，用于完成解密操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#init-1",
          children: "Cipher.init"
        }), "，设置模式为解密（cryptoFramework.CryptoMode.DECRYPT_MODE），指定解密密钥（SymKey）和Poly1305模式对应的解密参数（Poly1305ParamsSpec），初始化解密Cipher实例。"]
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
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction generateRandom(len: number) {\n  let rand = cryptoFramework.createRandom();\n  let generateRandSync = rand.generateRandomSync(len);\n  return generateRandSync;\n}\n\nfunction genPoly1305ParamsSpec() {\n  let ivBlob = generateRandom(12); // 12 bytes\n  let arr = [1, 2, 3, 4, 5, 6, 7, 8]; // 8 bytes\n  let dataAad = new Uint8Array(arr);\n  let aadBlob: cryptoFramework.DataBlob = { data: dataAad };\n  arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 16 bytes\n  let dataTag = new Uint8Array(arr);\n  let tagBlob: cryptoFramework.DataBlob = {\n    data: dataTag\n  };\n  // Poly1305的authTag在加密时从doFinal结果中获取，在解密时填入init函数的params参数中。\n  let poly1305ParamsSpec: cryptoFramework.Poly1305ParamsSpec = {\n    iv: ivBlob,\n    aad: aadBlob,\n    authTag: tagBlob,\n    algName: 'Poly1305ParamsSpec'\n  };\n  return poly1305ParamsSpec;\n}\n\nlet poly1305Params = genPoly1305ParamsSpec();\n\n// 加密消息。\nasync function encryptMessagePromise(symKey: cryptoFramework.SymKey, plainText: cryptoFramework.DataBlob) {\n  let cipher = cryptoFramework.createCipher('ChaCha20|Poly1305');\n  await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, symKey, poly1305Params);\n  let encryptUpdate = await cipher.update(plainText);\n  // poly1305模式加密doFinal时传入空，获得tag数据，并更新至poly1305Params对象中。\n  poly1305Params.authTag = await cipher.doFinal(null);\n  return encryptUpdate;\n}\n// 解密消息。\nasync function decryptMessagePromise(symKey: cryptoFramework.SymKey, cipherText: cryptoFramework.DataBlob) {\n  let decoder = cryptoFramework.createCipher('ChaCha20|Poly1305');\n  await decoder.init(cryptoFramework.CryptoMode.DECRYPT_MODE, symKey, poly1305Params);\n  let decryptData = await decoder.update(cipherText);\n  // poly1305模式解密doFinal时传入空，验证init时传入的tag数据，如果验证失败会抛出异常。\n  let decryptData = await decoder.doFinal(null);\n  if (decryptData === null) {\n    console.info('poly1305 decrypt result: success, decryptData is null.');\n  }\n  return decryptData;\n}\nasync function genSymKeyByData(symKeyData: Uint8Array) {\n  let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };\n  let chacha20Generator = cryptoFramework.createSymKeyGenerator('ChaCha20');\n  let symKey = await chacha20Generator.convertKey(symKeyBlob);\n  console.info('convertKey result: success.');\n  return symKey;\n}\nasync function main() {\n  try {\n    let keyData = new Uint8Array([83, 217, 231, 76, 28, 113, 23, 219, 250, 71, 209, 210, 205, 97, 32, 159,\n      83, 217, 231, 76, 28, 113, 23, 219, 250, 71, 209, 210, 205, 97, 32, 159]);\n    let symKey = await genSymKeyByData(keyData);\n    let message = 'This is a test';\n    let plainText: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(message, 'utf-8').buffer) };\n    let encryptText = await encryptMessagePromise(symKey, plainText);\n    let decryptText = await decryptMessagePromise(symKey, encryptText);\n    if (plainText.data.toString() === decryptText.data.toString()) {\n      console.info('decrypt ok.');\n      console.info('decrypt plainText: ' + buffer.from(decryptText.data).toString('utf-8'));\n    } else {\n      console.error('decrypt failed.');\n    }\n  } catch (error) {\n    console.error(`decrypt failed: errCode: ${error.code}, message: ${error.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步方法示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { buffer } from '@kit.ArkTS';\n\nfunction generateRandom(len: number) {\n  let rand = cryptoFramework.createRandom();\n  let generateRandSync = rand.generateRandomSync(len);\n  return generateRandSync;\n}\n\nfunction genPoly1305ParamsSpec() {\n  let ivBlob = generateRandom(12); // 12 bytes\n  let arr = [1, 2, 3, 4, 5, 6, 7, 8]; // 8 bytes\n  let dataAad = new Uint8Array(arr);\n  let aadBlob: cryptoFramework.DataBlob = { data: dataAad };\n  arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 16 bytes\n  let dataTag = new Uint8Array(arr);\n  let tagBlob: cryptoFramework.DataBlob = {\n    data: dataTag\n  };\n  // Poly1305的authTag在加密时从doFinal结果中获取，在解密时填入init函数的params参数中。\n  let poly1305ParamsSpec: cryptoFramework.Poly1305ParamsSpec = {\n    iv: ivBlob,\n    aad: aadBlob,\n    authTag: tagBlob,\n    algName: 'Poly1305ParamsSpec'\n  };\n  return poly1305ParamsSpec;\n}\n\nlet poly1305Params = genPoly1305ParamsSpec();\n\n// 加密消息。\nfunction encryptMessage(symKey: cryptoFramework.SymKey, plainText: cryptoFramework.DataBlob) {\n  let cipher = cryptoFramework.createCipher('ChaCha20|Poly1305');\n  cipher.initSync(cryptoFramework.CryptoMode.ENCRYPT_MODE, symKey, poly1305Params);\n  let encryptUpdate = cipher.updateSync(plainText);\n  // poly1305模式加密doFinal时传入空，获得tag数据，并更新至poly1305Params对象中。\n  poly1305Params.authTag = cipher.doFinalSync(null);\n  return encryptUpdate;\n}\n// 解密消息。\nfunction decryptMessage(symKey: cryptoFramework.SymKey, cipherText: cryptoFramework.DataBlob) {\n  let decoder = cryptoFramework.createCipher('ChaCha20|Poly1305');\n  decoder.initSync(cryptoFramework.CryptoMode.DECRYPT_MODE, symKey, poly1305Params);\n  let decryptData = decoder.updateSync(cipherText);\n  // poly1305模式解密doFinal时传入空，验证init时传入的tag数据，如果验证失败会抛出异常。\n  let decryptData = decoder.doFinalSync(null);\n  if (decryptData === null) {\n    console.info('poly1305 decrypt result: success, decryptData is null.');\n  }\n  return decryptData;\n}\nfunction genSymKeyByData(symKeyData: Uint8Array) {\n  let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };\n  let chacha20Generator = cryptoFramework.createSymKeyGenerator('ChaCha20');\n  let symKey = chacha20Generator.convertKeySync(symKeyBlob);\n  console.info('convertKeySync result: success.');\n  return symKey;\n}\nfunction main() {\n  try {\n    let keyData = new Uint8Array([83, 217, 231, 76, 28, 113, 23, 219, 250, 71, 209, 210, 205, 97, 32, 159,\n      83, 217, 231, 76, 28, 113, 23, 219, 250, 71, 209, 210, 205, 97, 32, 159]);\n    let symKey = genSymKeyByData(keyData);\n    let message = 'This is a test';\n    let plainText: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(message, 'utf-8').buffer) };\n    let encryptText = encryptMessage(symKey, plainText);\n    let decryptText = decryptMessage(symKey, encryptText);\n    if (plainText.data.toString() === decryptText.data.toString()) {\n      console.info('decrypt ok.');\n      console.info('decrypt plainText: ' + buffer.from(decryptText.data).toString('utf-8'));\n    } else {\n      console.error('decrypt failed.');\n    }\n  } catch (error) {\n    console.error(`decrypt failed: errCode: ${error.code}, message: ${error.message}`);\n  }\n}\n"
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
699954(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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