"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["818038"], {
213855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_convert_binary_data_to_asym_key_pair_crypto_convert_binary_data_to_asym_key_pair_md_d25_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-crypto-architecture-kit-crypto-key-generation-conversion-crypto-key-generation-conversion-dev-crypto-convert-binary-data-to-asym-key-pair-crypto-convert-binary-data-to-asym-key-pair-md-d25.json
var site_docs_system_security_crypto_architecture_kit_crypto_key_generation_conversion_crypto_key_generation_conversion_dev_crypto_convert_binary_data_to_asym_key_pair_crypto_convert_binary_data_to_asym_key_pair_md_d25_namespaceObject = JSON.parse('{"id":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-asym-key-pair/crypto-convert-binary-data-to-asym-key-pair","title":"指定二进制数据转换非对称密钥对(ArkTS)","description":"以RSA、ECC、SM2为例，根据指定的非对称密钥二进制数据，生成非对称密钥对（KeyPair），即将外部或存储的二进制数据转换为算法库的密钥对象，该对象可用于后续的加解密等操作。","source":"@site/docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-asym-key-pair/crypto-convert-binary-data-to-asym-key-pair.md","sourceDirName":"system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-asym-key-pair","slug":"/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-asym-key-pair/","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-asym-key-pair/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"指定二进制数据转换非对称密钥对(ArkTS)","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-convert-binary-data-to-asym-key-pair","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"随机生成非对称密钥对(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly-ndk/"},"next":{"title":"指定二进制数据转换非对称密钥对(C/C++)","permalink":"/harmonyos-docs-site/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-asym-key-pair-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-asym-key-pair/crypto-convert-binary-data-to-asym-key-pair.md


const frontMatter = {
	title: '指定二进制数据转换非对称密钥对(ArkTS)',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-convert-binary-data-to-asym-key-pair',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '指定二进制数据转换非对称密钥对(ArkTS)';

const assets = {

};



const toc = [{
  "value": "指定二进制数据转换RSA密钥对",
  "id": "指定二进制数据转换rsa密钥对",
  "level": 2
}, {
  "value": "指定二进制数据转换ECC密钥对",
  "id": "指定二进制数据转换ecc密钥对",
  "level": 2
}, {
  "value": "指定PKCS8二进制数据转换ECC私钥",
  "id": "指定pkcs8二进制数据转换ecc私钥",
  "level": 2
}, {
  "value": "指定二进制数据转换SM2密钥对",
  "id": "指定二进制数据转换sm2密钥对",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "指定二进制数据转换非对称密钥对arkts",
        children: "指定二进制数据转换非对称密钥对(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以RSA、ECC、SM2为例，根据指定的非对称密钥二进制数据，生成非对称密钥对（KeyPair），即将外部或存储的二进制数据转换为算法库的密钥对象，该对象可用于后续的加解密等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(834312)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对非对称密钥的convertKey操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "公钥需满足：ASN.1语法、X.509规范、DER编码格式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "私钥需满足：ASN.1语法、PKCS#8规范、DER编码格式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定二进制数据转换rsa密钥对",
      children: "指定二进制数据转换RSA密钥对"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应的算法规格请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#rsa",
        children: "非对称密钥生成和转换规格：RSA"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取RSA公钥或私钥二进制数据，封装成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#datablob",
            children: "DataBlob"
          }), "对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "公钥和私钥可单独传入，此处示例传入公钥。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator",
            children: "cryptoFramework.createAsyKeyGenerator"
          }), "，指定字符串参数'RSA1024'，创建RSA密钥类型为RSA1024、素数个数为2的非对称密钥生成器（AsyKeyGenerator）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成RSA非对称密钥时，默认素数为2，此处省略了参数PRIMES_2。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertkey-3",
            children: "AsyKeyGenerator.convertKey"
          }), "，传入二进制密钥数据，生成非对称密钥对象（KeyPair）。即将外部或存储的二进制数据转换为算法库的密钥对象，该对象可用于后续的加解密等操作。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用callback方式生成RSA密钥对为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction convertAsyKey() {\n  let rsaGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024');\n  let pkVal =\n    new Uint8Array([48, 129, 159, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 1, 5, 0, 3, 129, 141, 0, 48, 129, 137,\n      2, 129, 129, 0, 174, 203, 113, 83, 113, 3, 143, 213, 194, 79, 91, 9, 51, 142, 87, 45, 97, 65, 136, 24, 166, 35, 5,\n      179, 42, 47, 212, 79, 111, 74, 134, 120, 73, 67, 21, 19, 235, 80, 46, 152, 209, 133, 232, 87, 192, 140, 18, 206,\n      27, 106, 106, 169, 106, 46, 135, 111, 118, 32, 129, 27, 89, 255, 183, 116, 247, 38, 12, 7, 238, 77, 151, 167, 6,\n      102, 153, 126, 66, 28, 253, 253, 216, 64, 20, 138, 117, 72, 15, 216, 178, 37, 208, 179, 63, 204, 39, 94, 244, 170,\n      48, 190, 21, 11, 73, 169, 156, 104, 193, 3, 17, 100, 28, 60, 50, 92, 235, 218, 57, 73, 119, 19, 101, 164, 192,\n      161, 197, 106, 105, 73, 2, 3, 1, 0, 1]);\n  let pkBlob: cryptoFramework.DataBlob = { data: pkVal };\n  rsaGenerator.convertKey(pkBlob, null, (err, keyPair) => {\n    if (err) {\n      console.error(`convertKey failed: errCode: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    console.info('convertKey result: success.');\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["同步返回结果（调用方法", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertkeysync12",
            children: "convertKeySync"
          }), "）："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction convertAsyKeySync() {\n  let rsaGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024');\n  let pkVal =\n    new Uint8Array([48, 129, 159, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 1, 5, 0, 3, 129, 141, 0, 48, 129, 137,\n      2, 129, 129, 0, 174, 203, 113, 83, 113, 3, 143, 213, 194, 79, 91, 9, 51, 142, 87, 45, 97, 65, 136, 24, 166, 35, 5,\n      179, 42, 47, 212, 79, 111, 74, 134, 120, 73, 67, 21, 19, 235, 80, 46, 152, 209, 133, 232, 87, 192, 140, 18, 206,\n      27, 106, 106, 169, 106, 46, 135, 111, 118, 32, 129, 27, 89, 255, 183, 116, 247, 38, 12, 7, 238, 77, 151, 167, 6,\n      102, 153, 126, 66, 28, 253, 253, 216, 64, 20, 138, 117, 72, 15, 216, 178, 37, 208, 179, 63, 204, 39, 94, 244, 170,\n      48, 190, 21, 11, 73, 169, 156, 104, 193, 3, 17, 100, 28, 60, 50, 92, 235, 218, 57, 73, 119, 19, 101, 164, 192,\n      161, 197, 106, 105, 73, 2, 3, 1, 0, 1]);\n  let pkBlob: cryptoFramework.DataBlob = { data: pkVal };\n  try {\n    let keyPair = rsaGenerator.convertKeySync(pkBlob, null);\n    if (keyPair != null) {\n      console.info('convertKeySync result: success.');\n    }\n  } catch (e) {\n    console.error(`get key pair failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定二进制数据转换ecc密钥对",
      children: "指定二进制数据转换ECC密钥对"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#ecc",
        children: "非对称密钥生成和转换规格：ECC"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取ECC公钥或私钥二进制数据，封装成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#datablob",
            children: "DataBlob"
          }), "对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "公钥和私钥可以只传入其中一个，此处示例以传入公钥和私钥为例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator",
            children: "cryptoFramework.createAsyKeyGenerator"
          }), "，指定字符串参数'ECC256'，创建密钥算法为ECC、密钥长度为256位的非对称密钥生成器（AsyKeyGenerator）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertkey-3",
            children: "AsyKeyGenerator.convertKey"
          }), "，传入公钥二进制和私钥二进制，生成非对称密钥对象（KeyPair）。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用callback方式生成ECC密钥对："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction convertEccAsyKey() {\n  let pubKeyArray =\n    new Uint8Array([48, 89, 48, 19, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 8, 42, 134, 72, 206, 61, 3, 1, 7, 3, 66, 0, 4,\n      83, 96, 142, 9, 86, 214, 126, 106, 247, 233, 92, 125, 4, 128, 138, 105, 246, 162, 215, 71, 81, 58, 202, 121, 26,\n      105, 211, 55, 130, 45, 236, 143, 55, 16, 248, 75, 167, 160, 167, 106, 2, 152, 243, 44, 68, 66, 0, 167, 99, 92,\n      235, 215, 159, 239, 28, 106, 124, 171, 34, 145, 124, 174, 57, 92]);\n  let priKeyArray =\n    new Uint8Array([48, 49, 2, 1, 1, 4, 32, 115, 56, 137, 35, 207, 0, 60, 191, 90, 61, 136, 105, 210, 16, 27, 4, 171,\n      57, 10, 61, 123, 40, 189, 28, 34, 207, 236, 22, 45, 223, 10, 189, 160, 10, 6, 8, 42, 134, 72, 206, 61, 3, 1, 7]);\n  let pubKeyBlob: cryptoFramework.DataBlob = { data: pubKeyArray };\n  let priKeyBlob: cryptoFramework.DataBlob = { data: priKeyArray };\n  let generator = cryptoFramework.createAsyKeyGenerator('ECC256');\n  generator.convertKey(pubKeyBlob, priKeyBlob, (error, data) => {\n    if (error) {\n      console.error(`convertKey failed: errCode: ${error.code}, message: ${error.message}`);\n      return;\n    }\n    console.info('convertKey result: success.');\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["同步返回结果（调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertkeysync12",
            children: "convertKeySync"
          }), "）："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction convertECCAsyKeySync() {\n  let pubKeyArray =\n    new Uint8Array([48, 89, 48, 19, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 8, 42, 134, 72, 206, 61, 3, 1, 7, 3, 66, 0, 4,\n      83, 96, 142, 9, 86, 214, 126, 106, 247, 233, 92, 125, 4, 128, 138, 105, 246, 162, 215, 71, 81, 58, 202, 121, 26,\n      105, 211, 55, 130, 45, 236, 143, 55, 16, 248, 75, 167, 160, 167, 106, 2, 152, 243, 44, 68, 66, 0, 167, 99, 92,\n      235, 215, 159, 239, 28, 106, 124, 171, 34, 145, 124, 174, 57, 92]);\n  let priKeyArray =\n    new Uint8Array([48, 49, 2, 1, 1, 4, 32, 115, 56, 137, 35, 207, 0, 60, 191, 90, 61, 136, 105, 210, 16, 27, 4, 171,\n      57, 10, 61, 123, 40, 189, 28, 34, 207, 236, 22, 45, 223, 10, 189, 160, 10, 6, 8, 42, 134, 72, 206, 61, 3, 1, 7]);\n  let pubKeyBlob: cryptoFramework.DataBlob = { data: pubKeyArray };\n  let priKeyBlob: cryptoFramework.DataBlob = { data: priKeyArray };\n  let generator = cryptoFramework.createAsyKeyGenerator('ECC256');\n  try {\n    let keyPair = generator.convertKeySync(pubKeyBlob, priKeyBlob);\n    if (keyPair != null) {\n      console.info('convertKeySync result: success.');\n    }\n  } catch (e) {\n    console.error(`get key pair failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定pkcs8二进制数据转换ecc私钥",
      children: "指定PKCS8二进制数据转换ECC私钥"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#ecc",
        children: "非对称密钥生成和转换规格：ECC"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取ECC公钥或私钥二进制数据，封装成", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#datablob",
        children: "DataBlob"
      }), "对象再转为ECC密钥格式。示例如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator",
          children: "cryptoFramework.createAsyKeyGenerator"
        }), "，指定字符串参数'ECC256'，创建密钥算法为ECC、密钥长度为256位的非对称密钥生成器（AsyKeyGenerator）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getencoded",
          children: "PubKey.getEncoded"
        }), "获取公钥数据字节流，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#getencodedder12-1",
          children: "PriKey.getEncodedDer"
        }), " 并设置参数为'PKCS8'，获取私钥数据的字节流。由此分别获取密钥对象的二进制数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertkey-3",
          children: "AsyKeyGenerator.convertKey"
        }), "，将生成的二进制密钥数据转为非对称密钥对象（KeyPair）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nasync function main() {\n  // 创建一个AsyKeyGenerator实例\n  let eccGenerator = cryptoFramework.createAsyKeyGenerator('ECC256');\n  // 使用密钥生成器随机生成非对称密钥对\n  let keyGenPromise = eccGenerator.generateKeyPair();\n  keyGenPromise.then(keyPair => {\n    let pubKey = keyPair.pubKey;\n    let priKey = keyPair.priKey;\n    // 获取非对称密钥对ECC的二进制数据\n    let pubBlob = pubKey.getEncoded();\n    let skBlob = priKey.getEncodedDer('PKCS8');\n    let generator = cryptoFramework.createAsyKeyGenerator('ECC256');\n    generator.convertKey(pubBlob, skBlob, (error, data) => {\n      if (error) {\n        console.error(`convertKey failed: errCode: ${error.code}, message: ${error.message}`);\n        return;\n      }\n      console.info('convertKey result: success.');\n    });\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定二进制数据转换sm2密钥对",
      children: "指定二进制数据转换SM2密钥对"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#sm2",
        children: "非对称密钥生成和转换规格：SM2"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取SM2公钥或私钥的二进制数据，封装成", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#datablob",
            children: "DataBlob"
          }), "对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "公钥和私钥可以只传入其中一个，示例以传入公钥和私钥为例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator",
            children: "cryptoFramework.createAsyKeyGenerator"
          }), "，指定字符串参数'SM2_256'，创建密钥算法为SM2、密钥长度为256位的非对称密钥生成器（AsyKeyGenerator）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertkey-3",
            children: "AsyKeyGenerator.convertKey"
          }), "，传入公钥和私钥的二进制数据，生成非对称密钥对象（KeyPair）。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以使用callback方式生成SM2密钥对为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction convertSM2AsyKey() {\n  let pubKeyArray =\n    new Uint8Array([48, 89, 48, 19, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 8, 42, 129, 28, 207, 85, 1, 130, 45, 3, 66, 0,\n      4, 90, 3, 58, 157, 190, 248, 76, 7, 132, 200, 151, 208, 112, 230, 96, 140, 90, 238, 211, 155, 128, 109, 248, 40,\n      83, 214, 78, 42, 104, 106, 55, 148, 249, 35, 61, 32, 221, 135, 143, 100, 45, 97, 194, 176, 52, 73, 136, 174, 40,\n      70, 70, 34, 103, 103, 161, 99, 27, 187, 13, 187, 109, 244, 13, 7]);\n  let priKeyArray =\n    new Uint8Array([48, 49, 2, 1, 1, 4, 32, 54, 41, 239, 240, 63, 188, 134, 113, 31, 102, 149, 203, 245, 89, 15, 15, 47,\n      202, 170, 60, 38, 154, 28, 169, 189, 100, 251, 76, 112, 223, 156, 159, 160, 10, 6, 8, 42, 129, 28, 207, 85, 1,\n      130, 45]);\n  let pubKeyBlob: cryptoFramework.DataBlob = { data: pubKeyArray };\n  let priKeyBlob: cryptoFramework.DataBlob = { data: priKeyArray };\n  let generator = cryptoFramework.createAsyKeyGenerator('SM2_256');\n  generator.convertKey(pubKeyBlob, priKeyBlob, (error, data) => {\n    if (error) {\n      console.error(`convertKey failed: errCode: ${error.code}, message: ${error.message}`);\n      return;\n    }\n    console.info('convertKey result: success.');\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["同步返回结果（调用方法", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/crypto-architecture-api/crypto-architecture-arkts/js-apis-cryptoframework/js-apis-cryptoframework#convertkeysync12",
            children: "convertKeySync"
          }), "）："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cryptoFramework } from '@kit.CryptoArchitectureKit';\n\nfunction convertSM2AsyKeySync() {\n  let pubKeyArray =\n    new Uint8Array([48, 89, 48, 19, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 8, 42, 129, 28, 207, 85, 1, 130, 45, 3, 66, 0,\n      4, 90, 3, 58, 157, 190, 248, 76, 7, 132, 200, 151, 208, 112, 230, 96, 140, 90, 238, 211, 155, 128, 109, 248, 40,\n      83, 214, 78, 42, 104, 106, 55, 148, 249, 35, 61, 32, 221, 135, 143, 100, 45, 97, 194, 176, 52, 73, 136, 174, 40,\n      70, 70, 34, 103, 103, 161, 99, 27, 187, 13, 187, 109, 244, 13, 7]);\n  let priKeyArray =\n    new Uint8Array([48, 49, 2, 1, 1, 4, 32, 54, 41, 239, 240, 63, 188, 134, 113, 31, 102, 149, 203, 245, 89, 15, 15, 47,\n      202, 170, 60, 38, 154, 28, 169, 189, 100, 251, 76, 112, 223, 156, 159, 160, 10, 6, 8, 42, 129, 28, 207, 85, 1,\n      130, 45]);\n  let pubKeyBlob: cryptoFramework.DataBlob = { data: pubKeyArray };\n  let priKeyBlob: cryptoFramework.DataBlob = { data: priKeyArray };\n  let generator = cryptoFramework.createAsyKeyGenerator('SM2_256');\n  try {\n    let keyPair = generator.convertKeySync(pubKeyBlob, priKeyBlob);\n    if (keyPair != null) {\n      console.info('convertKeySync result: success.');\n    }\n  } catch (e) {\n    console.error(`get key pair failed: errCode: ${e.code}, message: ${e.message}`);\n  }\n}\n"
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
834312(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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