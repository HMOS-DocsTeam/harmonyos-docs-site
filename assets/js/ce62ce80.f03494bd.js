"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["949160"], {
788091(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_encryption_decryption_huks_encryption_decryption_arkts_huks_encryption_decryption_arkts_md_ce6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-encryption-decryption-huks-encryption-decryption-arkts-huks-encryption-decryption-arkts-md-ce6.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_encryption_decryption_huks_encryption_decryption_arkts_huks_encryption_decryption_arkts_md_ce6_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-arkts/huks-encryption-decryption-arkts","title":"加解密(ArkTS)","description":"以AES128、RSA2048、SM2和DES64为例，完成加解密。具体的场景介绍及支持的算法规格，请参考加解密支持的算法。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-arkts/huks-encryption-decryption-arkts.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-arkts","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"加解密(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-encryption-decryption-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"加密/解密介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview/"},"next":{"title":"加解密(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-arkts/huks-encryption-decryption-arkts.md


const frontMatter = {
	title: '加解密(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-encryption-decryption-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '加解密(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开发案例",
  "id": "开发案例",
  "level": 2
}, {
  "value": "AES/CBC/PKCS7",
  "id": "aescbcpkcs7",
  "level": 3
}, {
  "value": "AES/GCM/NoPadding",
  "id": "aesgcmnopadding",
  "level": 3
}, {
  "value": "AES/CCM/NoPadding",
  "id": "aesccmnopadding",
  "level": 3
}, {
  "value": "RSA/ECB/PKCS1_V1_5",
  "id": "rsaecbpkcs1_v1_5",
  "level": 3
}, {
  "value": "RSA/ECB/OAEP/SHA256",
  "id": "rsaecboaepsha256",
  "level": 3
}, {
  "value": "SM2",
  "id": "sm2",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "加解密arkts",
        children: "加解密(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以AES128、RSA2048、SM2和DES64为例，完成加解密。具体的场景介绍及支持的算法规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview#%E6%94%AF%E6%8C%81%E7%9A%84%E7%AE%97%E6%B3%95",
        children: "加解密支持的算法"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "生成密钥"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["指定密钥别名，密钥别名命名规范参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
          children: "密钥生成介绍及算法规格"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "初始化密钥属性集。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksgeneratekeyitem9",
          children: "generateKeyItem"
        }), "生成密钥，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
          children: "密钥生成"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除此之外，开发者也可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview",
        children: "密钥导入"
      }), "，导入已有的密钥。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "加密"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取密钥别名。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取待加密的数据。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksparam",
            children: "HuksParam"
          }), "设置加密算法参数配置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文档中提供多个示例，当使用不同算法时，请注意配置对应参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用AES算法加密，选取的分组模式为CBC、填充模式为PKCS7时，参数IV必选，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#aescbcpkcs7",
              children: "AES/CBC/PKCS7"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用AES算法加密，选取的分组模式为GCM时，参数NONCE可选，AAD可选，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#aesgcmnopadding",
              children: "AES/GCM/NoPadding"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用AES算法加密，选取的分组模式为CCM时，参数NONCE可选，AAD可选，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#aesccmnopadding",
              children: "AES/CCM/NoPadding"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用RSA算法加密，需要选择相对应的分组模式、填充模式以及摘要算法DIGEST，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rsaecbpkcs1_v1_5",
              children: "RSA/ECB/PKCS1_V1_5"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rsaecboaepsha256",
              children: "RSA/ECB/OAEP/SHA256"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用SM2算法加密，摘要算法DIGEST需要指定为SM3，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sm2",
              children: "SM2"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详细规格请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview",
            children: "加密/解密介绍及算法规格"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksinitsession9",
            children: "initSession"
          }), "初始化密钥会话，并获取会话的句柄handle。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksfinishsession9",
            children: "finishSession"
          }), "结束密钥会话，获取加密后的密文。"]
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取密钥别名。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取待解密的密文。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksparam",
            children: "HuksParam"
          }), "设置解密算法参数配置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文档中提供多个示例，当使用不同算法时，请注意配置对应参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用AES算法解密，用例中选取的分组模式为GCM时，必须要填参数NONCE和参数AEAD，AAD可选，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#aesgcmnopadding",
              children: "AES/GCM/NoPadding"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "其余示例参数与加密要求一致。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详细规格请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview",
            children: "加密/解密介绍及算法规格"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksinitsession9",
            children: "initSession"
          }), "初始化密钥会话，并获取会话的句柄handle。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksfinishsession9",
            children: "finishSession"
          }), "结束密钥会话，获取解密后的数据。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "删除密钥"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当密钥废弃不用时，需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksdeletekeyitem9",
        children: "deleteKeyItem"
      }), "删除密钥，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-arkts",
        children: "密钥删除"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aescbcpkcs7",
      children: "AES/CBC/PKCS7"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 以下以AES/CBC/PKCS7的Promise操作使用为例\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet aesKeyAlias = 'test_aesKeyAlias';\nlet handle: number;\nlet plainText = '123456';\nlet IV = cryptoFramework.createRandom().generateRandomSync(12).data;\nlet cipherData: Uint8Array;\n\nfunction stringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction getAesGenerateProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_AES\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_128\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |\n    huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  }];\n  return properties;\n}\n\nfunction getAesEncryptProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_AES\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_128\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PKCS7\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_CBC\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_IV,\n    value: IV\n  }];\n  return properties;\n}\n\nfunction getAesDecryptProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_AES\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_128\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PKCS7\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_CBC\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_IV,\n    value: IV\n  }];\n  return properties;\n}\n\nasync function generateAesKey() {\n  /*\n   * 模拟生成密钥场景\n   */\n  /*\n   * 1. 获取生成密钥算法参数配置\n   */\n  let genProperties = getAesGenerateProperties();\n  let options: huks.HuksOptions = {\n    properties: genProperties\n  }\n  /*\n   * 2. 调用generateKeyItem\n   */\n  await huks.generateKeyItem(aesKeyAlias, options)\n    .then(() => {\n      console.info(`promise: generate AES Key success`);\n    }).catch((error: BusinessError) => {\n      console.error(`promise: generate AES Key failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function encryptData() {\n  /*\n   * 模拟加密场景\n   */\n  /*\n   * 1. 获取加密算法参数配置\n   */\n  let encryptProperties = getAesEncryptProperties();\n  let options: huks.HuksOptions = {\n    properties: encryptProperties,\n    inData: stringToUint8Array(plainText)\n  }\n  /*\n   * 2. 调用initSession获取handle\n   */\n  await huks.initSession(aesKeyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: init EncryptData failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n  /*\n   * 3. 调用finishSession获取加密后的密文\n   */\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: encrypt data success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      cipherData = data.outData as Uint8Array;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: encrypt data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function decryptData() {\n  /*\n   * 模拟解密场景\n   * 1. 获取密钥别名\n   */\n  /*\n   * 1. 获取解密算法参数配置\n   */\n  let decryptOptions = getAesDecryptProperties()\n  let options: huks.HuksOptions = {\n    properties: decryptOptions,\n    inData: cipherData\n  }\n  /*\n   * 2. 调用initSession获取handle\n   */\n  await huks.initSession(aesKeyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: init DecryptData failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n  /*\n   * 3. 调用finishSession获取解密后的数据\n   */\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: decrypt data success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((error: BusinessError) => {\n      console.error(`promise: decrypt data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function deleteKey() {\n  /*\n   * 模拟删除密钥场景\n   */\n  let emptyOptions: huks.HuksOptions = {\n    properties: []\n  }\n  /*\n   * 1. 调用deleteKeyItem删除密钥\n   */\n  await huks.deleteKeyItem(aesKeyAlias, emptyOptions)\n    .then(() => {\n      console.info(`promise: delete data success`);\n    }).catch((error: BusinessError) => {\n      console.error(`promise: delete data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aesgcmnopadding",
      children: "AES/GCM/NoPadding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 以下以AES/GCM/NoPadding的Promise操作使用为例\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet aesKeyAlias = 'test_aesKeyAlias';\nlet handle: number;\nlet plainText = '123456';\nlet cipherData: Uint8Array;\nlet AAD = '1234567890123456';\nlet NONCE = cryptoFramework.createRandom().generateRandomSync(12).data;\n\nfunction stringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction getAesGenerateProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_AES\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_128\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |\n    huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  }];\n  return properties;\n}\n\nfunction getAesGcmEncryptProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_AES\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_128\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_NONE\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_GCM\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_NONCE,\n    value: NONCE\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_ASSOCIATED_DATA,\n    value: stringToUint8Array(AAD)\n  }];\n  return properties;\n}\n\nfunction getAesGcmDecryptProperties(cipherData: Uint8Array) {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_AES\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_128\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_NONE\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_GCM\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_NONCE,\n    value: NONCE\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_ASSOCIATED_DATA,\n    value: stringToUint8Array(AAD)\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_AE_TAG,\n    value: cipherData.slice(cipherData.length - 16)\n  }];\n  return properties;\n}\n\nasync function generateAesKey() {\n  /*\n   * 模拟生成密钥场景\n   */\n  /*\n   * 1. 获取生成密钥算法参数配置\n   */\n  let genProperties = getAesGenerateProperties();\n  let options: huks.HuksOptions = {\n    properties: genProperties\n  }\n  /*\n   * 2. 调用generateKeyItem\n   */\n  await huks.generateKeyItem(aesKeyAlias, options)\n    .then(() => {\n      console.info(`promise: generate AES Key success`);\n    }).catch((error: BusinessError) => {\n      console.error(`promise: generate AES Key failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function encryptData() {\n  /*\n   * 模拟加密场景\n   */\n  /*\n   * 1. 获取加密算法参数配置\n   */\n  let encryptProperties = getAesGcmEncryptProperties();\n  let options: huks.HuksOptions = {\n    properties: encryptProperties,\n    inData: stringToUint8Array(plainText)\n  }\n  /*\n   * 2. 调用initSession获取handle\n   */\n  await huks.initSession(aesKeyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: init EncryptDataGcm failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n  /*\n   * 3. 调用finishSession获取加密后的密文\n   */\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: encrypt data success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      cipherData = data.outData as Uint8Array;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: encrypt data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function decryptData() {\n  /*\n   * 模拟解密场景\n   */\n  /*\n   * 1. 获取解密算法参数配置\n   */\n  let decryptOptions = getAesGcmDecryptProperties(cipherData)\n  let options: huks.HuksOptions = {\n    properties: decryptOptions,\n    inData: cipherData.slice(0, cipherData.length - 16)\n  }\n  /*\n   * 2. 调用initSession获取handle\n   */\n  await huks.initSession(aesKeyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: init DecryptDataGcm failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n  /*\n   * 3. 调用finishSession获取解密后的数据\n   */\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: decrypt data success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((error: BusinessError) => {\n      console.error(`promise: decrypt data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function deleteKey() {\n  /*\n   * 模拟删除密钥场景\n   */\n  let emptyOptions: huks.HuksOptions = {\n    properties: []\n  }\n  /*\n   * 1. 调用deleteKeyItem删除密钥\n   */\n  await huks.deleteKeyItem(aesKeyAlias, emptyOptions)\n    .then(() => {\n      console.info(`promise: delete data success`);\n    }).catch((error: BusinessError) => {\n      console.error(`promise: delete data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aesccmnopadding",
      children: "AES/CCM/NoPadding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 以下以AES/CCM/NoPadding的Promise操作使用为例\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { BusinessError } from \"@kit.BasicServicesKit\";\n\nlet aesKeyAlias = 'test_aesCcmKeyAlias';\nlet handle: number;\nlet plainText = '123456';\nlet cipherData: Uint8Array;\nlet AAD = '1234567890123456';\nlet NONCE = cryptoFramework.createRandom().generateRandomSync(12).data;\nlet aeadTagLen = 14;\n\nfunction StringToUint8Array(str: string) {\n  let arr: number[] = new Array();\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction Uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction GetAesGenerateProperties() {\n  let properties: Array<huks.HuksParam> = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_AES\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_128\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |\n    huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  }];\n  return properties;\n}\n\nfunction GetAesCcmEncryptProperties() {\n  let properties: Array<huks.HuksParam> = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_AES\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_128\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_NONE\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_CCM\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_NONCE,\n    value: NONCE\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_ASSOCIATED_DATA,\n    value: StringToUint8Array(AAD)\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_AE_TAG_LEN,\n    value: aeadTagLen\n  }];\n  return properties;\n}\n\nfunction GetAesCcmDecryptProperties(cipherData: Uint8Array) {\n  let properties: Array<huks.HuksParam> = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_AES\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_128\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_NONE\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_CCM\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_NONCE,\n    value: NONCE\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_ASSOCIATED_DATA,\n    value: StringToUint8Array(AAD)\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_AE_TAG,\n    value: cipherData.slice(cipherData.length - aeadTagLen)\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_AE_TAG_LEN,\n    value: aeadTagLen\n  }];\n  return properties;\n}\n\nasync function GenerateAesKey() {\n  /*\n   * 模拟生成密钥场景\n   * 1. 确定密钥别名\n   */\n  /*\n   * 2. 获取生成密钥算法参数配置\n   */\n  let genProperties = GetAesGenerateProperties();\n  let options: huks.HuksOptions = {\n    properties: genProperties\n  }\n  /*\n   * 3. 调用generateKeyItem\n   */\n  await huks.generateKeyItem(aesKeyAlias, options)\n    .then(() => {\n      console.info(`promise: generate AES Key success`);\n    }).catch((error: BusinessError) => {\n      console.error(`promise: generate AES Key failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function EncryptData() {\n  /*\n   * 模拟加密场景\n   * 1. 获取密钥别名\n   */\n  /*\n   * 2. 获取待加密的数据\n   */\n  /*\n   * 3. 获取加密算法参数配置\n   */\n  let encryptProperties = GetAesCcmEncryptProperties();\n  let options: huks.HuksOptions = {\n    properties: encryptProperties,\n    inData: StringToUint8Array(plainText)\n  }\n  /*\n   * 4. 调用initSession获取handle\n   */\n  await huks.initSession(aesKeyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: init EncryptDataCcm failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n  /*\n   * 5. 调用finishSession获取加密后的密文\n   */\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: encrypt data success, data is ` + Uint8ArrayToString(data.outData as Uint8Array));\n      cipherData = data.outData as Uint8Array;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: encrypt data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function DecryptData() {\n  /*\n   * 模拟解密场景\n   * 1. 获取密钥别名\n   */\n  /*\n   * 2. 获取待解密的密文\n   */\n  /*\n   * 3. 获取解密算法参数配置\n   */\n  let decryptOptions = GetAesCcmDecryptProperties(cipherData)\n  let options: huks.HuksOptions = {\n    properties: decryptOptions,\n    inData: cipherData.slice(0, cipherData.length - aeadTagLen)\n  }\n  /*\n   * 4. 调用initSession获取handle\n   */\n  await huks.initSession(aesKeyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: init DecryptDataCcm failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n  /*\n   * 5. 调用finishSession获取解密后的数据\n   */\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: decrypt data success, data is ` + Uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((error: BusinessError) => {\n      console.error(`promise: decrypt data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function DeleteKey() {\n  /*\n   * 模拟删除密钥场景\n   * 1. 获取密钥别名\n   */\n  let emptyOptions: huks.HuksOptions = {\n    properties: []\n  }\n  /*\n   * 2. 调用deleteKeyItem删除密钥\n   */\n  await huks.deleteKeyItem(aesKeyAlias, emptyOptions)\n    .then(() => {\n      console.info(`promise: delete data success`);\n    }).catch((error: BusinessError) => {\n      console.error(`promise: delete data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function TestEncryptDecrypt() {\n  await GenerateAesKey();\n  await EncryptData();\n  await DecryptData();\n  await DeleteKey();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsaecbpkcs1_v1_5",
      children: "RSA/ECB/PKCS1_V1_5"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 以下以RSA/ECB/PKCS1_V1_5模式的Promise操作使用为例\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet rsaKeyAlias = 'test_rsaKeyAlias';\nlet handle: number;\nlet plainText = '123456';\nlet cipherData: Uint8Array;\n\nfunction stringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction getRsaGenerateProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |\n    huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  }];\n  return properties;\n}\n\nfunction getRsaEncryptProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PKCS1_V1_5\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_ECB\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_NONE\n  }];\n  return properties;\n}\n\nfunction getRsaDecryptProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PKCS1_V1_5\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_ECB\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_NONE\n  }];\n  return properties;\n}\n\nasync function generateRsaKey() {\n  /*\n   * 模拟生成密钥场景\n   */\n  /*\n   * 1. 获取生成密钥算法参数配置\n   */\n  let genProperties = getRsaGenerateProperties();\n  let options: huks.HuksOptions = {\n    properties: genProperties\n  }\n  /*\n   * 2. 调用generateKeyItem\n   */\n  await huks.generateKeyItem(rsaKeyAlias, options)\n    .then(() => {\n      console.info(`promise: generate RSA Key success`);\n    }).catch((error: BusinessError) => {\n      console.error(`promise: generate RSA Key failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function encryptData() {\n  /*\n   * 模拟加密场景\n   */\n  /*\n   * 1. 获取加密算法参数配置\n   */\n  let encryptProperties = getRsaEncryptProperties();\n  let options: huks.HuksOptions = {\n    properties: encryptProperties,\n    inData: stringToUint8Array(plainText)\n  }\n  /*\n   * 2. 调用initSession获取handle\n   */\n  await huks.initSession(rsaKeyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: init EncryptDataRsa failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n  /*\n   * 3. 调用finishSession获取加密后的密文\n   */\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: encrypt data success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      cipherData = data.outData as Uint8Array;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: encrypt data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function decryptData() {\n  /*\n   * 模拟解密场景\n   */\n  /*\n   * 1. 获取解密算法参数配置\n   */\n  let decryptOptions = getRsaDecryptProperties()\n  let options: huks.HuksOptions = {\n    properties: decryptOptions,\n    inData: cipherData\n  }\n  /*\n   * 2. 调用initSession获取handle\n   */\n  await huks.initSession(rsaKeyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: init DecryptDataRsa failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n  /*\n   * 3. 调用finishSession获取解密后的数据\n   */\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: decrypt data success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((error: BusinessError) => {\n      console.error(`promise: decrypt data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function deleteKey() {\n  /*\n   * 模拟删除密钥场景\n   */\n  let emptyOptions: huks.HuksOptions = {\n    properties: []\n  }\n  /*\n   * 1. 调用deleteKeyItem删除密钥\n   */\n  await huks.deleteKeyItem(rsaKeyAlias, emptyOptions)\n    .then(() => {\n      console.info(`promise: delete data success`);\n    }).catch((error: BusinessError) => {\n      console.error(`promise: delete data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsaecboaepsha256",
      children: "RSA/ECB/OAEP/SHA256"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 以下以RSA/ECB/OAEP/SHA256模式的Promise操作使用为例\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet rsaKeyAlias = 'test_rsaKeyAlias';\nlet handle: number;\nlet plainText = '123456';\nlet cipherData: Uint8Array;\n\nfunction stringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction getRsaGenerateProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |\n    huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  }];\n  return properties;\n}\n\nfunction getRsaEncryptProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_OAEP\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_ECB\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }];\n  return properties;\n}\n\nfunction getRsaDecryptProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_OAEP\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n    value: huks.HuksCipherMode.HUKS_MODE_ECB\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }];\n  return properties;\n}\n\nasync function generateRsaKey() {\n  /*\n   * 模拟生成密钥场景\n   */\n  /*\n   * 1. 获取生成密钥算法参数配置\n   */\n  let genProperties = getRsaGenerateProperties();\n  let options: huks.HuksOptions = {\n    properties: genProperties\n  }\n  /*\n   * 2. 调用generateKeyItem\n   */\n  await huks.generateKeyItem(rsaKeyAlias, options)\n    .then(() => {\n      console.info(`promise: generate RSA Key success`);\n    }).catch((error: BusinessError) => {\n      console.error(`promise: generate RSA Key failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function encryptData() {\n  /*\n   * 模拟加密场景\n   */\n  /*\n   * 1. 获取加密算法参数配置\n   */\n  let encryptProperties = getRsaEncryptProperties();\n  let options: huks.HuksOptions = {\n    properties: encryptProperties,\n    inData: stringToUint8Array(plainText)\n  }\n  /*\n   * 2. 调用initSession获取handle\n   */\n  await huks.initSession(rsaKeyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: init EncryptDataRsa failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n  /*\n   * 3. 调用finishSession获取加密后的密文\n   */\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: encrypt data success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      cipherData = data.outData as Uint8Array;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: encrypt data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function decryptData() {\n  /*\n   * 模拟解密场景\n   */\n  /*\n   * 1. 获取解密算法参数配置\n   */\n  let decryptOptions = getRsaDecryptProperties()\n  let options: huks.HuksOptions = {\n    properties: decryptOptions,\n    inData: cipherData\n  }\n  /*\n   * 2. 调用initSession获取handle\n   */\n  await huks.initSession(rsaKeyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: init DecryptDataRsa failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n  /*\n   * 3. 调用finishSession获取解密后的数据\n   */\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: decrypt data success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((error: BusinessError) => {\n      console.error(`promise: decrypt data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function deleteKey() {\n  /*\n   * 模拟删除密钥场景\n   */\n  let emptyOptions: huks.HuksOptions = {\n    properties: []\n  }\n  /*\n   * 1. 调用deleteKeyItem删除密钥\n   */\n  await huks.deleteKeyItem(rsaKeyAlias, emptyOptions)\n    .then((data) => {\n      console.info(`promise: delete data success`);\n    }).catch((error: BusinessError) => {\n      console.error(`promise: delete data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sm2",
      children: "SM2"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 以下以SM2模式的Promise操作使用为例\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet sm2KeyAlias = 'test_sm2KeyAlias';\nlet handle: number;\nlet plainText = '123456';\nlet cipherData: Uint8Array;\n\nfunction stringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction getSm2GenerateProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM2\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_SM2_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |\n    huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  }];\n  return properties;\n}\n\nfunction getSm2EncryptProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM2\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_SM2_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SM3\n  }];\n  return properties;\n}\n\nfunction getSm2DecryptProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM2\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_SM2_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SM3\n  }];\n  return properties;\n}\n\nasync function generateSm2Key() {\n  /*\n   * 模拟生成密钥场景\n   */\n  /*\n   * 1. 获取生成密钥算法参数配置\n   */\n  let genProperties = getSm2GenerateProperties();\n  let options: huks.HuksOptions = {\n    properties: genProperties\n  }\n  /*\n   * 2. 调用generateKeyItem\n   */\n  await huks.generateKeyItem(sm2KeyAlias, options)\n    .then(() => {\n      console.info(`promise: generate SM2 Key success`);\n    }).catch((error: BusinessError) => {\n      console.error(`promise: generate SM2 Key failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function encryptDataSm2() {\n  /*\n   * 模拟加密场景\n   */\n  /*\n   * 1. 获取加密算法参数配置\n   */\n  let encryptProperties = getSm2EncryptProperties();\n  let options: huks.HuksOptions = {\n    properties: encryptProperties,\n    inData: stringToUint8Array(plainText)\n  }\n  /*\n   * 2. 调用initSession获取handle\n   */\n  await huks.initSession(sm2KeyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: init EncryptDataSm2 failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n  /*\n   * 3. 调用finishSession获取加密后的密文\n   */\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: encrypt data success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      cipherData = data.outData as Uint8Array;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: encrypt data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function decryptDataSm2() {\n  /*\n   * 模拟解密场景\n   */\n  /*\n   * 1. 获取解密算法参数配置\n   */\n  let decryptOptions = getSm2DecryptProperties()\n  let options: huks.HuksOptions = {\n    properties: decryptOptions,\n    inData: cipherData\n  }\n  /*\n   * 2. 调用initSession获取handle\n   */\n  await huks.initSession(sm2KeyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: init DecryptDataSm2 failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n  /*\n   * 3. 调用finishSession获取解密后的数据\n   */\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: decrypt data success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((error: BusinessError) => {\n      console.error(`promise: decrypt data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n\nasync function deleteKey() {\n  /*\n   * 模拟删除密钥场景\n   */\n  let emptyOptions: huks.HuksOptions = {\n    properties: []\n  }\n  /*\n   * 1. 调用deleteKeyItem删除密钥\n   */\n  await huks.deleteKeyItem(sm2KeyAlias, emptyOptions)\n    .then(() => {\n      console.info(`promise: delete data success`);\n    }).catch((error: BusinessError) => {\n      console.error(`promise: delete data failed, errCode : ${error.code}, errMsg : ${error.message}`);\n    })\n}\n"
      })
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