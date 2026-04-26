"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["780040"], {
672960(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_signing_signature_verification_huks_signing_signature_verification_arkts_huks_signing_signature_verification_arkts_md_d6e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-signing-signature-verification-huks-signing-signature-verification-arkts-huks-signing-signature-verification-arkts-md-d6e.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_signing_signature_verification_huks_signing_signature_verification_arkts_huks_signing_signature_verification_arkts_md_d6e_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-arkts/huks-signing-signature-verification-arkts","title":"签名/验签(ArkTS)","description":"当前指导提供以下示例，供开发者参考完成签名、验签开发：","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-arkts/huks-signing-signature-verification-arkts.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-arkts","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"签名/验签(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-signing-signature-verification-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"签名/验签介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-overview/"},"next":{"title":"签名/验签(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-arkts/huks-signing-signature-verification-arkts.md


const frontMatter = {
	title: '签名/验签(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-signing-signature-verification-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '签名/验签(ArkTS)';

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
  "value": "ECC256/SHA256",
  "id": "ecc256sha256",
  "level": 3
}, {
  "value": "SM2/SM3",
  "id": "sm2sm3",
  "level": 3
}, {
  "value": "SM2/NoDigest",
  "id": "sm2nodigest",
  "level": 3
}, {
  "value": "RSA/SHA256/PSS",
  "id": "rsasha256pss",
  "level": 3
}, {
  "value": "RSA/SHA256/PKCS1_V1_5",
  "id": "rsasha256pkcs1_v1_5",
  "level": 3
}, {
  "value": "RSA2048/SHA384/PSS",
  "id": "rsa2048sha384pss",
  "level": 3
}, {
  "value": "ECC/SHA256/携带认证信息的签名类型",
  "id": "eccsha256携带认证信息的签名类型",
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
        id: "签名验签arkts",
        children: "签名/验签(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前指导提供以下示例，供开发者参考完成签名、验签开发："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["密钥算法为ECC256、摘要算法为SHA256，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#ecc256sha256",
          children: "ECC256/SHA256"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["密钥算法为SM2、摘要算法为SM3，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#sm2sm3",
          children: "SM2/SM3"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["密钥算法为SM2、摘要算法为NoDigest，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#sm2nodigest",
          children: "SM2/NoDigest"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["密钥算法为RSA、摘要算法为SHA256、填充模式为PSS，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#rsasha256pss",
          children: "RSA/SHA256/PSS"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["密钥算法为RSA、摘要算法为SHA256、填充模式为PKCS1_V1_5，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#rsasha256pkcs1_v1_5",
          children: "RSA/SHA256/PKCS1_V1_5"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["密钥算法为RSA、摘要算法为SHA384、填充模式为PSS，请见开发案例：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#rsa2048sha384pss",
          children: "RSA2048/SHA384/PSS"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#eccsha256%E6%90%BA%E5%B8%A6%E8%AE%A4%E8%AF%81%E4%BF%A1%E6%81%AF%E7%9A%84%E7%AD%BE%E5%90%8D%E7%B1%BB%E5%9E%8B",
          children: "密钥算法为ECC、摘要算法为SHA256、用户认证类型包含TUI PIN、携带认证信息的签名类型"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体的场景介绍及支持的算法规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-overview#%E6%94%AF%E6%8C%81%E7%9A%84%E7%AE%97%E6%B3%95",
        children: "签名/验签支持的算法"
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
          children: "签名"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取密钥别名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指定待签名的明文数据。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["获取属性参数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksoptions",
          children: "HuksOptions"
        }), "，包括两个字段properties和inData。inData传入明文数据，properties使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksparam",
          children: "HuksParam"
        }), "设置算法参数配置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksinitsession9",
          children: "initSession"
        }), "初始化密钥会话，并获取会话的句柄handle。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksfinishsession9",
          children: "finishSession"
        }), "结束密钥会话，获取签名signature。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "验签"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取密钥别名。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取待验证的签名signature。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["获取属性参数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksoptions",
          children: "HuksOptions"
        }), "，包括两个字段properties和inData。inData传入签名signature，properties使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksparam",
          children: "HuksParam"
        }), "设置算法参数配置。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksinitsession9",
          children: "initSession"
        }), "初始化密钥会话，并获取会话的句柄handle。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksupdatesession9",
          children: "updateSession"
        }), "更新密钥会话。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksfinishsession9",
          children: "finishSession"
        }), "结束密钥会话，验证签名。"]
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
      id: "ecc256sha256",
      children: "ECC256/SHA256"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 密钥算法为ECC256、摘要算法为SHA256\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\n\nlet keyAlias = 'test_eccKeyAlias';\nlet handle: number;\nlet plaintext = '123456';\nlet signature: Uint8Array;\n\nfunction stringToUint8Array(str: String) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction getEccGenerateProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_ECC\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN |\n    huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }];\n  return properties;\n}\n\nfunction getEccSignProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_ECC\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }];\n  return properties;\n}\n\nfunction getEccVerifyProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_ECC\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }];\n  return properties;\n}\n\nasync function generateEccKey(keyAlias: string) {\n  let genProperties = getEccGenerateProperties();\n  let options: huks.HuksOptions = {\n    properties: genProperties\n  }\n  await huks.generateKeyItem(keyAlias, options)\n    .then((data) => {\n      console.info(`promise: generate ECC Key success, data = ${JSON.stringify(data)}`);\n    }).catch((err: Error) => {\n      console.error(`promise: generate ECC Key failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n}\n\nasync function sign(keyAlias: string, plaintext: string) {\n  let signProperties = getEccSignProperties();\n  let options: huks.HuksOptions = {\n    properties: signProperties,\n    inData: stringToUint8Array(plaintext)\n  }\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((err: Error) => {\n      console.error(`promise: init sign failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: sign success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      signature = data.outData as Uint8Array;\n    }).catch((err: Error) => {\n      console.error(`promise: sign failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n}\n\nasync function verify(keyAlias: string, plaintext: string, signature: Uint8Array) {\n  let verifyProperties = getEccVerifyProperties()\n  let options: huks.HuksOptions = {\n    properties: verifyProperties,\n    inData: stringToUint8Array(plaintext)\n  }\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((err: Error) => {\n      console.error(`promise: init verify failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n  await huks.updateSession(handle, options)\n    .then((data) => {\n      console.info(`promise: update verify success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((err: Error) => {\n      console.error(`promise: update verify failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n  options.inData = signature;\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: verify success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((err: Error) => {\n      console.error(`promise: verify failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n}\n\nasync function deleteEccKey(keyAlias: string) {\n  let emptyOptions: huks.HuksOptions = {\n    properties: []\n  }\n  await huks.deleteKeyItem(keyAlias, emptyOptions)\n    .then((data) => {\n      console.info(`promise: delete data success`);\n    }).catch((err: Error) => {\n      console.error(`promise: delete data failed`);\n      throw (err as Error);\n    })\n}\n\nasync function testSignVerify() {\n  await generateEccKey(keyAlias);\n  await sign(keyAlias, plaintext);\n  await verify(keyAlias, plaintext, signature);\n  await deleteEccKey(keyAlias);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sm2sm3",
      children: "SM2/SM3"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 密钥算法为SM2、摘要算法为SM3\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\n\nlet keyAlias = 'test_sm2KeyAlias';\nlet handle: number;\nlet plaintext = '123456';\nlet signature: Uint8Array;\n\nfunction stringToUint8Array(str: String) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction getSm2GenerateProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM2\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN |\n    huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SM3\n  }];\n  return properties;\n}\n\nfunction getSm2SignProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM2\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SM3\n  }];\n  return properties;\n}\n\nfunction getSm2VerifyProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM2\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SM3\n  }];\n  return properties;\n}\n\nasync function generateSm2Key(keyAlias: string) {\n  let genProperties = getSm2GenerateProperties();\n  let options: huks.HuksOptions = {\n    properties: genProperties\n  }\n  await huks.generateKeyItem(keyAlias, options)\n    .then((data) => {\n      console.info(`promise: generate Sm2 Key success, data = ${JSON.stringify(data)}`);\n    }).catch((err: Error) => {\n      console.error(`promise: generate Sm2 Key failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n}\n\nasync function sign(keyAlias: string, plaintext: string) {\n  let signProperties = getSm2SignProperties();\n  let options: huks.HuksOptions = {\n    properties: signProperties,\n    inData: stringToUint8Array(plaintext)\n  }\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((err: Error) => {\n      console.error(`promise: init sign failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: sign success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      signature = data.outData as Uint8Array;\n    }).catch((err: Error) => {\n      console.error(`promise: sign failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n}\n\nasync function verify(keyAlias: string, plaintext: string, signature: Uint8Array) {\n  let verifyProperties = getSm2VerifyProperties()\n  let options: huks.HuksOptions = {\n    properties: verifyProperties,\n    inData: stringToUint8Array(plaintext)\n  }\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((err: Error) => {\n      console.error(`promise: init verify failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n  await huks.updateSession(handle, options)\n    .then((data) => {\n      console.info(`promise: update verify success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((err: Error) => {\n      console.error(`promise: update verify failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n  options.inData = signature;\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: verify success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((err: Error) => {\n      console.error(`promise: verify failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n}\n\nasync function deleteSm2Key(keyAlias: string) {\n  let emptyOptions: huks.HuksOptions = {\n    properties: []\n  }\n  await huks.deleteKeyItem(keyAlias, emptyOptions)\n    .then((data) => {\n      console.info(`promise: delete data success`);\n    }).catch((err: Error) => {\n      console.error(`promise: delete data failed`);\n      throw (err as Error);\n    })\n}\n\nexport async function testSignVerify() {\n  await generateSm2Key(keyAlias);\n  await sign(keyAlias, plaintext);\n  await verify(keyAlias, plaintext, signature);\n  await deleteSm2Key(keyAlias);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sm2nodigest",
      children: "SM2/NoDigest"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 密钥算法为SM2、摘要算法为NoDigest，由业务自己做SM3摘要\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet keyAlias = 'test_sm2KeyAlias';\nlet handle: number;\nlet hash = '12345678901234567890123456789012';\nlet signature: Uint8Array;\n\nfunction stringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction getSm2GenerateProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM2\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_SM2_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN |\n    huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_NONE\n  }];\n  return properties;\n}\n\nfunction getSm2SignProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM2\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_SM2_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_NONE\n  }];\n  return properties;\n}\n\nfunction getSm2VerifyProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_SM2\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_SM2_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_NONE\n  }];\n  return properties;\n}\n\nasync function generateSm2Key(keyAlias: string) {\n  console.info(`enter generateSm2Key`);\n  let genProperties = getSm2GenerateProperties();\n  let options: huks.HuksOptions = {\n    properties: genProperties\n  };\n  await huks.generateKeyItem(keyAlias, options)\n    .then(() => {\n      console.info(`promise: generateSm2Key success`);\n    }).catch((error: BusinessError) => {\n      console.error(`promise: generateSm2Key failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      throw (error as Error);\n    })\n}\n\nasync function sign(keyAlias: string, plaintext: string) {\n  let signProperties = getSm2SignProperties();\n  let options: huks.HuksOptions = {\n    properties: signProperties,\n    inData: stringToUint8Array(plaintext)\n  };\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: init sign failed, error: ` + JSON.stringify(error));\n      throw (error as Error);\n    })\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      signature = data.outData as Uint8Array;\n      console.info(`promise: sign success, data is ` + uint8ArrayToString(signature));\n    }).catch((error: BusinessError) => {\n      console.error(`promise: sign failed, error: ` + JSON.stringify(error));\n      throw (error as Error);\n    })\n}\n\nasync function verify(keyAlias: string, plaintext: string, signature: Uint8Array) {\n  let verifyProperties = getSm2VerifyProperties();\n  let options: huks.HuksOptions = {\n    properties: verifyProperties,\n    inData: stringToUint8Array(plaintext)\n  };\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((error: BusinessError) => {\n      console.error(`promise: init verify failed, error: ` + JSON.stringify(error));\n      throw (error as Error);\n    })\n  await huks.updateSession(handle, options)\n    .then((data) => {\n      console.info(`promise: update verify success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((error: BusinessError) => {\n      console.error(`promise: update verify failed, error: ` + JSON.stringify(error));\n      throw (error as Error);\n    })\n  options.inData = signature;\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: verify success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((error: BusinessError) => {\n      console.error(`promise: verify failed, error: ` + JSON.stringify(error));\n      throw (error as Error);\n    })\n}\n\nasync function deleteSm2Key(keyAlias: string) {\n  console.info(`enter deleteSm2Key`);\n  let emptyOptions: huks.HuksOptions = {\n    properties: []\n  };\n  await huks.deleteKeyItem(keyAlias, emptyOptions)\n    .then((data) => {\n      console.info(`promise: delete data success`);\n    }).catch((error: Error) => {\n      console.error(`promise: delete data failed`);\n      throw (error as Error);\n    })\n}\n\nasync function testSignVerify() {\n  await generateSm2Key(keyAlias);\n  await sign(keyAlias, hash);\n  await verify(keyAlias, hash, signature);\n  await deleteSm2Key(keyAlias);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsasha256pss",
      children: "RSA/SHA256/PSS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 密钥算法为RSA，摘要算法为SHA256，填充模式为PSS\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\n\nlet keyAlias = 'test_rsaKeyAlias';\nlet handle: number;\nlet plaintext = '123456';\nlet signature: Uint8Array;\n\nfunction stringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction getRsaGenerateProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN |\n    huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PSS\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }];\n  return properties;\n}\n\nfunction getRsaSignProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PSS\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN\n  }];\n  return properties;\n}\n\nfunction getRsaVerifyProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PSS\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  }];\n  return properties;\n}\n\nasync function generateRsaKey(keyAlias: string) {\n  let genProperties = getRsaGenerateProperties();\n  let options: huks.HuksOptions = {\n    properties: genProperties\n  };\n  await huks.generateKeyItem(keyAlias, options)\n    .then((data) => {\n      console.info(`promise: generate RSA Key success, data = ${JSON.stringify(data)}`);\n    }).catch((err: Error) => {\n      console.error(`promise: generate RSA Key failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    });\n}\n\nasync function sign(keyAlias: string, plaintext: string) {\n  let signProperties = getRsaSignProperties();\n  let options: huks.HuksOptions = {\n    properties: signProperties,\n    inData: stringToUint8Array(plaintext)\n  }\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((err: Error) => {\n      console.error(`promise: init sign failed, error: ` + JSON.stringify(err));\n      return;\n    });\n\n  if (handle !== undefined) {\n    await huks.finishSession(handle, options)\n      .then((data) => {\n        console.info(`promise: sign success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n        signature = data.outData as Uint8Array;\n      }).catch((err: Error) => {\n        console.error(`promise: sign failed, error: ` + JSON.stringify(err));\n        throw (err as Error);\n      });\n  }\n}\n\nasync function verify(keyAlias: string, plaintext: string, signature: Uint8Array) {\n  let verifyProperties = getRsaVerifyProperties();\n  let options: huks.HuksOptions = {\n    properties: verifyProperties,\n    inData: stringToUint8Array(plaintext)\n  }\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((err: Error) => {\n      console.error(`promise: init verify failed, error: ` + JSON.stringify(err));\n      return;\n    });\n\n  if (handle !== undefined) {\n    await huks.updateSession(handle, options)\n      .then((data) => {\n        console.info(`promise: update verify success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      }).catch((err: Error) => {\n        console.error(`promise: update verify failed, error: ` + JSON.stringify(err));\n        throw (err as Error);\n      });\n\n    options.inData = signature;\n    await huks.finishSession(handle, options)\n      .then((data) => {\n        console.info(`promise: verify success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      }).catch((err: Error) => {\n        console.error(`promise: verify failed, error: ` + JSON.stringify(err));\n        throw (err as Error);\n      });\n  }\n}\n\nasync function deleteRsaKey(keyAlias: string) {\n  let emptyOptions: huks.HuksOptions = {\n    properties: []\n  }\n  await huks.deleteKeyItem(keyAlias, emptyOptions)\n    .then((data) => {\n      console.info(`promise: delete data success`);\n    }).catch((err: Error) => {\n      console.error(`promise: delete data failed`);\n      throw (err as Error);\n    });\n}\n\nexport async function testSignVerify() {\n  await generateRsaKey(keyAlias);\n  await sign(keyAlias, plaintext);\n  await verify(keyAlias, plaintext, signature);\n  await deleteRsaKey(keyAlias);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsasha256pkcs1_v1_5",
      children: "RSA/SHA256/PKCS1_V1_5"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 密钥算法为RSA，摘要算法为SHA256，填充模式为PKCS1_V1_5\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\n\nlet keyAlias = 'test_rsaKeyAlias';\nlet handle: number;\nlet plaintext = '123456';\nlet signature: Uint8Array;\n\nfunction stringToUint8Array(str: String) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction getRsaGenerateProperties() {\n  let properties: huks.HuksParam[] = [\n    { tag: huks.HuksTag.HUKS_TAG_ALGORITHM, value: huks.HuksKeyAlg.HUKS_ALG_RSA },\n    { tag: huks.HuksTag.HUKS_TAG_KEY_SIZE, value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048 },\n    {\n      tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n      value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n    },\n    { tag: huks.HuksTag.HUKS_TAG_PADDING, value: huks.HuksKeyPadding.HUKS_PADDING_PKCS1_V1_5 },\n    { tag: huks.HuksTag.HUKS_TAG_DIGEST, value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256 }\n  ];\n  return properties;\n}\n\nfunction getRsaSignProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PKCS1_V1_5\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }];\n  return properties;\n}\n\nfunction getRsaVerifyProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PKCS1_V1_5\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }];\n  return properties;\n}\n\nasync function generateRsaKey(keyAlias: string) {\n  let genProperties = getRsaGenerateProperties();\n  let options: huks.HuksOptions = {\n    properties: genProperties\n  }\n  await huks.generateKeyItem(keyAlias, options)\n    .then((data) => {\n      console.info(`promise: generate RSA Key success, data = ${JSON.stringify(data)}`);\n    }).catch((err: Error) => {\n      console.error(`promise: generate RSA Key failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n}\n\nasync function sign(keyAlias: string, plaintext: string) {\n  let signProperties = getRsaSignProperties();\n  let options: huks.HuksOptions = {\n    properties: signProperties,\n    inData: stringToUint8Array(plaintext)\n  }\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((err: Error) => {\n      console.error(`promise: init sign failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: sign success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      signature = data.outData as Uint8Array;\n    }).catch((err: Error) => {\n      console.error(`promise: sign failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n}\n\nasync function verify(keyAlias: string, plaintext: string, signature: Uint8Array) {\n  let verifyProperties = getRsaVerifyProperties()\n  let options: huks.HuksOptions = {\n    properties: verifyProperties,\n    inData: stringToUint8Array(plaintext)\n  }\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((err: Error) => {\n      console.error(`promise: init verify failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n  await huks.updateSession(handle, options)\n    .then((data) => {\n      console.info(`promise: update verify success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((err: Error) => {\n      console.error(`promise: update verify failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n  options.inData = signature;\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: verify success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((err: Error) => {\n      console.error(`promise: verify failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n}\n\nasync function deleteRsaKey(keyAlias: string) {\n  let emptyOptions: huks.HuksOptions = {\n    properties: []\n  }\n  await huks.deleteKeyItem(keyAlias, emptyOptions)\n    .then((data) => {\n      console.info(`promise: delete data success`);\n    }).catch((err: Error) => {\n      console.error(`promise: delete data failed`);\n      throw (err as Error);\n    })\n}\n\nexport async function testSignVerify() {\n  await generateRsaKey(keyAlias);\n  await sign(keyAlias, plaintext);\n  await verify(keyAlias, plaintext, signature);\n  await deleteRsaKey(keyAlias);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsa2048sha384pss",
      children: "RSA2048/SHA384/PSS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 密钥算法为RSA2048、摘要算法为SHA384、填充模式为PSS\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\n\nlet keyAlias = 'test_rsaSha384PssKeyAlias';\nlet handle: number;\nlet plaintext = '123456';\nlet signature: Uint8Array;\n\nfunction stringToUint8Array(str: String) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction getRsaGenerateProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN |\n    huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PSS\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA384\n  }];\n  return properties;\n}\n\nfunction getRsaSignProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PSS\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA384\n  }];\n  return properties;\n}\n\nfunction getRsaVerifyProperties() {\n  let properties: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_RSA\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PADDING,\n    value: huks.HuksKeyPadding.HUKS_PADDING_PSS\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA384\n  }];\n  return properties;\n}\n\nasync function generateRsaKey(keyAlias: string) {\n  let genProperties = getRsaGenerateProperties();\n  let options: huks.HuksOptions = {\n    properties: genProperties\n  }\n  await huks.generateKeyItem(keyAlias, options)\n    .then((data) => {\n      console.info(`promise: generate RSA Key success, data = ${JSON.stringify(data)}`);\n    }).catch((err: Error) => {\n      console.error(`promise: generate RSA Key failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n}\n\nasync function sign(keyAlias: string, plaintext: string) {\n  let signProperties = getRsaSignProperties();\n  let options: huks.HuksOptions = {\n    properties: signProperties,\n    inData: stringToUint8Array(plaintext)\n  };\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((err: Error) => {\n      console.error(`promise: init sign failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: sign success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      signature = data.outData as Uint8Array;\n    }).catch((err: Error) => {\n      console.error(`promise: sign failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n}\n\nasync function verify(keyAlias: string, plaintext: string, signature: Uint8Array) {\n  let verifyProperties = getRsaVerifyProperties()\n  let options: huks.HuksOptions = {\n    properties: verifyProperties,\n    inData: stringToUint8Array(plaintext)\n  };\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((err: Error) => {\n      console.error(`promise: init verify failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n  await huks.updateSession(handle, options)\n    .then((data) => {\n      console.info(`promise: update verify success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((err: Error) => {\n      console.error(`promise: update verify failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n  options.inData = signature;\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: verify success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((err: Error) => {\n      console.error(`promise: verify failed, error: ` + JSON.stringify(err));\n      throw (err as Error);\n    })\n}\n\nasync function deleteRsaKey(keyAlias: string) {\n  let emptyOptions: huks.HuksOptions = {\n    properties: []\n  };\n  await huks.deleteKeyItem(keyAlias, emptyOptions)\n    .then((data) => {\n      console.info(`promise: delete data success`);\n    }).catch((err: Error) => {\n      console.error(`promise: delete data failed`);\n      throw (err as Error);\n    })\n}\n\nasync function testSignVerify() {\n  await generateRsaKey(keyAlias);\n  await sign(keyAlias, plaintext);\n  await verify(keyAlias, plaintext, signature);\n  await deleteRsaKey(keyAlias);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eccsha256携带认证信息的签名类型",
      children: "ECC/SHA256/携带认证信息的签名类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["前提条件：此功能的示例代码依赖数字盾服务的设置数字盾密码和验证数字盾密码，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-trustedauth-service",
        children: "数字盾服务"
      }), "的数字盾密码管理和交易信息密码认证。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 密钥算法为ECC，摘要算法为SHA256，用户认证类型包含TUI PIN，携带认证信息的签名类型\n * 在签名参数中加上HUKS_TAG_KEY_SECURE_SIGN_TYPE，值为HUKS_SECURE_SIGN_WITH_AUTHINFO即可使用携带认证信息的签名类型\n * 在验签时，把携带认证信息的签名的前41位数据拆出来，剩下的是签名，然后把携带的认证信息拼在原数据的前面。\n * 设置数字盾密码和验证数字盾密码请参考数字盾服务\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\n\nlet keyAlias = 'test_eccKeyAlias';\nlet handle: number;\nlet challenge: Uint8Array;\nlet plaintext = '123456';\nlet signature: Uint8Array;\n\nfunction stringToUint8Array(str: String) {\n  let arr: number[] = new Array();\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nfunction GetEccGenerateProperties() {\n  let properties: Array<huks.HuksParam> = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_ECC\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_ECC_KEY_SIZE_256,\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,\n    value: huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_TUI_PIN | huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FINGERPRINT | huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FACE\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,\n    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_ALWAYS_VALID\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,\n    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_NORMAL\n  }];\n\n  return properties;\n}\n\nfunction GetEccSignProperties() {\n  let properties: Array<huks.HuksParam> = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_ECC\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SECURE_SIGN_TYPE,\n    value: huks.HuksSecureSignType.HUKS_SECURE_SIGN_WITH_AUTHINFO\n  }];\n  return properties;\n}\n\nfunction GetEccVerifyProperties() {\n  let properties: Array<huks.HuksParam> = [{\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_ECC\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DIGEST,\n    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256\n  }];\n  return properties;\n}\n\nasync function GenerateEccKey(keyAlias: string) {\n  let genProperties = GetEccGenerateProperties();\n  let options: huks.HuksOptions = {\n    properties: genProperties\n  }\n  await huks.generateKeyItem(keyAlias, options)\n    .then((data) => {\n      console.info(`promise: generate ECC Key success, data = ${JSON.stringify(data)}`);\n    }).catch((err: Error) => {\n      console.error(`promise: generate ECC Key failed, error: ` + JSON.stringify(err));\n    })\n}\n\nasync function sign(keyAlias: string, plaintext: string) {\n  let signProperties = GetEccSignProperties();\n  let options: huks.HuksOptions = {\n    properties: signProperties,\n    inData: stringToUint8Array(plaintext)\n  }\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n      challenge = data.challenge as Uint8Array;\n    }).catch((err: Error) => {\n      console.error(`promise: init sign failed, error: ` + JSON.stringify(err));\n    })\n\n  let TuiAuthToken :trustedAuthentication.AuthToken;\n  // 验证TUI PIN并获取Authtoken请参考数字盾服务\n\n  await huks.finishSession(handle, options, TuiAuthToken.authToken)\n    .then((data) => {\n      console.info(`promise: sign success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      signature = data.outData as Uint8Array;\n    }).catch((err: Error) => {\n      console.error(`promise: sign failed, error: ` + JSON.stringify(err));\n    })\n}\n\nasync function verify(keyAlias: string, plaintext: string, signature: Uint8Array) {\n  let verifyProperties = GetEccVerifyProperties();\n  // 在验签时，把携带认证信息的签名的前41位数据拆出来，剩下的是签名，然后把携带的认证信息拼在原数据的前面。\n  let appendInfo = signature.subarray(0, 41);\n  let newSignature = signature.subarray(41);\n  let newIndata = new Uint8Array(appendInfo.length + indataArray.length);\n  newIndata.set(appendInfo, 0);\n  newIndata.set(stringToUint8Array(plaintext), appendInfo.length);\n  let options: huks.HuksOptions = {\n    properties: verifyProperties,\n    inData: newIndata\n  }\n  await huks.initSession(keyAlias, options)\n    .then((data) => {\n      handle = data.handle;\n    }).catch((err: Error) => {\n      console.error(`promise: init verify failed, error: ` + JSON.stringify(err));\n    })\n  await huks.updateSession(handle, options)\n    .then((data) => {\n      console.info(`promise: update verify success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((err: Error) => {\n      console.error(`promise: update verify failed, error: ` + JSON.stringify(err));\n    })\n  options.inData = newSignature;\n  await huks.finishSession(handle, options)\n    .then((data) => {\n      console.info(`promise: verify success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n    }).catch((err: Error) => {\n      console.error(`promise: verify failed, error: ` + JSON.stringify(err));\n    })\n}\n\nasync function DeleteEccKey(keyAlias: string) {\n  let emptyOptions: huks.HuksOptions = {\n    properties: []\n  }\n  await huks.deleteKeyItem(keyAlias, emptyOptions)\n    .then((data) => {\n      console.info(`promise: delete data success`);\n    }).catch((err: Error) => {\n      console.error(`promise: delete data failed`);\n    })\n}\n\nasync function testSignVerify() {\n  await GenerateEccKey(keyAlias);\n  await sign(keyAlias, plaintext);\n  await verify(keyAlias, plaintext, signature);\n  await DeleteEccKey(keyAlias);\n}\n"
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