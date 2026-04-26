"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["296816"], {
742026(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_key_agreement_huks_key_agreement_arkts_huks_key_agreement_arkts_md_878_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-key-agreement-huks-key-agreement-arkts-huks-key-agreement-arkts-md-878.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_key_agreement_huks_key_agreement_arkts_huks_key_agreement_arkts_md_878_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-arkts/huks-key-agreement-arkts","title":"密钥协商(ArkTS)","description":"以X25519，DH和ECDH三个协商密钥类型为例，在密钥由HUKS管理的情况下，完成密钥协商。具体的场景介绍及支持的算法规格，请参考密钥协商支持的算法。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-arkts/huks-key-agreement-arkts.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-arkts","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"密钥协商(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-agreement-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"密钥协商介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-overview/"},"next":{"title":"密钥协商(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-arkts/huks-key-agreement-arkts.md


const frontMatter = {
	title: '密钥协商(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-agreement-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '密钥协商(ArkTS)';

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
  "value": "X25519非对称密钥协商用例",
  "id": "x25519非对称密钥协商用例",
  "level": 3
}, {
  "value": "DH密钥协商用例",
  "id": "dh密钥协商用例",
  "level": 3
}, {
  "value": "ECDH密钥协商用例",
  "id": "ecdh密钥协商用例",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "密钥协商arkts",
        children: "密钥协商(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以X25519，DH和ECDH三个协商密钥类型为例，在密钥由HUKS管理的情况下，完成密钥协商。具体的场景介绍及支持的算法规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-agreement/huks-key-agreement-overview#%E6%94%AF%E6%8C%81%E7%9A%84%E7%AE%97%E6%B3%95",
        children: "密钥协商支持的算法"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备A、设备B各自生成一个非对称密钥，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
        children: "密钥生成"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview",
        children: "密钥导入"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["密钥生成时，可指定参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#hukstag",
        children: "HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG"
      }), "（可选），用于标识基于该密钥协商出的密钥是否由HUKS管理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当TAG设置为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#hukskeystoragetype",
          children: "HUKS_STORAGE_ONLY_USED_IN_HUKS"
        }), "时，表示基于该密钥协商出的密钥，由HUKS管理，可保证协商密钥全生命周期不出安全环境。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当TAG设置为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#hukskeystoragetype",
          children: "HUKS_STORAGE_KEY_EXPORT_ALLOWED"
        }), "时，表示基于该密钥协商出的密钥，返回给调用方管理，由业务自行保证密钥安全。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若业务未设置TAG的具体值，表示基于该密钥协商出的密钥，可由HUKS管理，也可返回给调用方管理，业务可在后续协商时再选择使用何种方式保护密钥。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "导出密钥"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备A、B导出非对称密钥对的公钥材料，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-export-key/huks-export-key-arkts",
        children: "密钥导出"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "密钥协商"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备A、B分别基于本端私钥和对端设备的公钥，协商出共享密钥。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密钥协商时，可指定参数HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG（可选），用于标识协商得到的密钥是否由HUKS管理。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "生成"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "协商"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "规格"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HUKS_STORAGE_ONLY_USED_IN_HUKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HUKS_STORAGE_ONLY_USED_IN_HUKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥由HUKS管理"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HUKS_STORAGE_KEY_EXPORT_ALLOWED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HUKS_STORAGE_KEY_EXPORT_ALLOWED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥返回给调用方管理"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "未指定TAG具体值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HUKS_STORAGE_ONLY_USED_IN_HUKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥由HUKS管理"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "未指定TAG具体值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HUKS_STORAGE_KEY_EXPORT_ALLOWED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥返回给调用方管理"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "未指定TAG具体值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未指定TAG具体值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密钥返回给调用方管理"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注：协商时指定的TAG值，不可与生成时指定的TAG值冲突。表格中仅列举有效的指定方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "删除密钥"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当密钥废弃不用时，设备A、B均需要删除密钥，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-arkts",
        children: "密钥删除"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发案例",
      children: "开发案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面分别以X25519、DH和ECDH密钥为例，进行协商。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "x25519非对称密钥协商用例",
      children: "X25519非对称密钥协商用例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "准备X25519密钥协商材料："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 以下以X25519密钥的Promise操作使用为例\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction stringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\n/*\n * 确定密钥别名和封装密钥属性参数集\n */\nlet srcKeyAliasFirst = 'AgreeX25519KeyFirstAlias';\nlet srcKeyAliasSecond = 'AgreeX25519KeySecondAlias';\nlet agreeX25519InData = 'AgreeX25519TestIndata';\nlet finishOutData: Uint8Array;\nlet handle: number;\nlet exportKey: Uint8Array;\nlet exportKeyFirst: Uint8Array;\nlet exportKeySecond: Uint8Array;\n/* 集成生成密钥参数集 */\nlet properties: huks.HuksParam[] = [{\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_X25519,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_AGREE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n  value: huks.HuksKeySize.HUKS_CURVE25519_KEY_SIZE_256,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DIGEST,\n  value: huks.HuksKeyDigest.HUKS_DIGEST_NONE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PADDING,\n  value: huks.HuksKeyPadding.HUKS_PADDING_NONE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n  value: huks.HuksCipherMode.HUKS_MODE_CBC,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG,\n  value: huks.HuksKeyStorageType.HUKS_STORAGE_ONLY_USED_IN_HUKS,\n}\n];\nlet huksOptions: huks.HuksOptions = {\n  properties: properties,\n  inData: new Uint8Array([])\n}\n/* 集成第一个协商参数集 */\nconst finishProperties: huks.HuksParam[] = [{\n  tag: huks.HuksTag.HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG,\n  value: huks.HuksKeyStorageType.HUKS_STORAGE_ONLY_USED_IN_HUKS,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_IS_KEY_ALIAS,\n  value: true\n}, {\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_AES,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n  value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value:\n  huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |\n  huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DIGEST,\n  value: huks.HuksKeyDigest.HUKS_DIGEST_NONE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PADDING,\n  value: huks.HuksKeyPadding.HUKS_PADDING_NONE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n  value: huks.HuksCipherMode.HUKS_MODE_ECB,\n}\n];\nlet finishOptionsFirst: huks.HuksOptions = {\n  properties: [\n    ...finishProperties, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_ALIAS,\n    value: stringToUint8Array(srcKeyAliasFirst + 'final'),\n  }],\n  inData: stringToUint8Array(agreeX25519InData)\n}\n/* 集成第二个协商参数集 */\nlet finishOptionsSecond: huks.HuksOptions = {\n  properties: [\n    ...finishProperties, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_ALIAS,\n    value: stringToUint8Array(srcKeyAliasSecond + 'final'),\n  }],\n  inData: stringToUint8Array(agreeX25519InData)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行密钥协商："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 生成密钥 */\nasync function generateKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter generateKeyItem');\n  try {\n    await huks.generateKeyItem(keyAlias, huksOptions)\n      .then(() => {\n        console.info(`promise: generateKeyItem success`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: generateKeyItem failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: generateKeyItem input arg invalid`);\n  }\n}\n\n/* 初始化密钥会话接口，并获取一个句柄（必选）和挑战值（可选） */\nasync function initSession(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter initSession');\n  try {\n    await huks.initSession(keyAlias, huksOptions)\n      .then((data) => {\n        handle = data.handle;\n        console.info(`promise: initSession success`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: initSession failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: initSession input arg invalid`);\n  }\n}\n\n/* 分段添加密钥操作的数据并进行相应的密钥操作，输出处理数据 */\nasync function updateSession(handle: number, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter updateSession');\n  try {\n    await huks.updateSession(handle, huksOptions)\n      .then((data) => {\n        console.info(`promise: updateSession success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      }).catch((error: BusinessError) => {\n        console.error(`promise: updateSession failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: updateSession input arg invalid`);\n  }\n}\n\n/* 结束密钥会话并进行相应的密钥操作，输出处理数据 */\nasync function finishSession(handle: number, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter finishSession');\n  try {\n    await huks.finishSession(handle, huksOptions)\n      .then((data) => {\n        finishOutData = data.outData as Uint8Array;\n        console.info(`promise: finishSession success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      }).catch((error: BusinessError) => {\n        console.error(`promise: finishSession failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: finishSession input arg invalid`);\n  }\n}\n\n/* 导出密钥 */\nasync function exportKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter exportKeyItem');\n  try {\n    await huks.exportKeyItem(keyAlias, huksOptions)\n      .then((data) => {\n        exportKey = data.outData as Uint8Array;\n        console.info(`promise: exportKey success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      }).catch((error: BusinessError) => {\n        console.error(`promise: exportKeyItem failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: exportKeyItem input arg invalid`);\n  }\n}\n\n/* 删除密钥操作 */\nasync function deleteKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter deleteKeyItem');\n  try {\n    await huks.deleteKeyItem(keyAlias, huksOptions)\n      .then(() => {\n        console.info(`promise: deleteKeyItem success`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: deleteKeyItem failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: deleteKeyItem input arg invalid`);\n  }\n}\n\nasync function testAgree() {\n  /* 1.确定密钥别名并集成要参数集。A设备：srcKeyAliasFirst；B设备：srcKeyAliasSecond */\n  /* 2.设备A生成密钥 */\n  await generateKeyItem(srcKeyAliasFirst, huksOptions);\n  /* 3.设备B生成密钥 */\n  await generateKeyItem(srcKeyAliasSecond, huksOptions);\n  /* 4.设备A、B导出非对称密钥的公钥 */\n  await exportKeyItem(srcKeyAliasFirst, huksOptions);\n  exportKeyFirst = exportKey;\n  await exportKeyItem(srcKeyAliasSecond, huksOptions);\n  exportKeySecond = exportKey;\n  /* 5.对第一个密钥进行协商（三段式） */\n  await initSession(srcKeyAliasFirst, huksOptions);\n  huksOptions.inData = exportKeySecond;\n  await updateSession(handle, huksOptions);\n  await finishSession(handle, finishOptionsFirst);\n  /* 6.对第二个密钥进行协商（三段式） */\n  await initSession(srcKeyAliasSecond, huksOptions);\n  huksOptions.inData = exportKeyFirst;\n  await updateSession(handle, huksOptions);\n  await finishSession(handle, finishOptionsSecond);\n  /* 7.设备A、B删除密钥 */\n  await deleteKeyItem(srcKeyAliasFirst, huksOptions);\n  await deleteKeyItem(srcKeyAliasSecond, huksOptions);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dh密钥协商用例",
      children: "DH密钥协商用例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 下面以DH密钥的Promise操作使用为例\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction stringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToBigInt(arr: Uint8Array): bigint {\n  let i = 0;\n  const byteMax: bigint = BigInt('0x100');\n  let result: bigint = BigInt('0');\n  while (i < arr.length) {\n    result = result * byteMax;\n    result = result + BigInt(arr[i]);\n    i += 1;\n  }\n  return result;\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\nlet handle: number;\nlet finishOutData: Uint8Array;\nlet exportKey: Uint8Array;\nconst dhAgree: huks.HuksParam[] = [{\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_DH,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_AGREE,\n}];\nconst dh2048Agree: huks.HuksParam[] = [\n  ...dhAgree, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n  value: huks.HuksKeySize.HUKS_DH_KEY_SIZE_2048,\n}];\nconst dhGenOptions: huks.HuksOptions = {\n  properties: dh2048Agree,\n  inData: new Uint8Array([])\n};\nconst emptyOptions: huks.HuksOptions = {\n  properties: [],\n  inData: new Uint8Array([])\n};\n\n/* 生成密钥 */\nasync function generateKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter generateKeyItem');\n  try {\n    await huks.generateKeyItem(keyAlias, huksOptions)\n      .then(() => {\n        console.info(`promise: generateKeyItem success`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: generateKeyItem failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: generateKeyItem input arg invalid`);\n  }\n}\n\n/* 初始化密钥会话接口，并获取一个句柄（必选）和挑战值（可选） */\nasync function initSession(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter initSession');\n  try {\n    await huks.initSession(keyAlias, huksOptions)\n      .then((data) => {\n        handle = data.handle;\n        console.info(`promise: initSession success`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: initSession failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: initSession input arg invalid`);\n  }\n}\n\n/* 分段添加密钥操作的数据并进行相应的密钥操作，输出处理数据 */\nasync function updateSession(handle: number, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter updateSession');\n  try {\n    await huks.updateSession(handle, huksOptions)\n      .then((data) => {\n        console.info(`promise: updateSession success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      }).catch((error: BusinessError) => {\n        console.error(`promise: updateSession failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: updateSession input arg invalid`);\n  }\n}\n\n/* 查询密钥是否存在 */\nasync function isKeyItemExist(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter isKeyItemExist');\n  try {\n    await huks.isKeyItemExist(keyAlias, huksOptions)\n      .then((data) => {\n        console.info(`isKeyItemExist success`);\n      }).catch((error: BusinessError) => {\n        console.error(`isKeyItemExist failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`isKeyItemExist input arg invalid`);\n  }\n}\n\n/* 结束密钥会话并进行相应的密钥操作，输出处理数据 */\nasync function finishSession(handle: number, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter finishSession');\n  try {\n    await huks.finishSession(handle, huksOptions)\n      .then((data) => {\n        finishOutData = data.outData as Uint8Array;\n        console.info(`promise: finishSession success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      }).catch((error: BusinessError) => {\n        console.error(`promise: finishSession failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: finishSession input arg invalid`);\n  }\n}\n\n/* 导出密钥 */\nasync function exportKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter exportKeyItem');\n  try {\n    await huks.exportKeyItem(keyAlias, huksOptions)\n      .then((data) => {\n        exportKey = data.outData as Uint8Array;\n        console.info(`promise: exportKey success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      }).catch((error: BusinessError) => {\n        console.error(`promise: exportKeyItem failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: exportKeyItem input arg invalid`);\n  }\n}\n\n/* 删除密钥操作 */\nasync function deleteKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter deleteKeyItem');\n  try {\n    await huks.deleteKeyItem(keyAlias, huksOptions)\n      .then(() => {\n        console.info(`promise: deleteKeyItem success`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: deleteKeyItem failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: deleteKeyItem input arg invalid`);\n  }\n}\n\nasync function huksDhAgreeExportKey(keyAlias: string,\n  peerPubKey: Uint8Array) {\n  await initSession(keyAlias, dhGenOptions);\n  const dhAgreeUpdateBobPubKey: huks.HuksOptions = {\n    properties: [\n      ...dh2048Agree, {\n      tag: huks.HuksTag.HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG,\n      value: huks.HuksKeyStorageType.HUKS_STORAGE_KEY_EXPORT_ALLOWED,\n    }],\n    inData: peerPubKey\n  };\n  await updateSession(handle, dhAgreeUpdateBobPubKey);\n  await finishSession(handle, emptyOptions);\n}\n\nasync function huksDhAgreeInHuks(keyAlias: string, peerPubKey: Uint8Array,\n  aliasAgreedKey: string) {\n  const onlyUsedInHuks: huks.HuksParam[] = [{\n    tag: huks.HuksTag.HUKS_TAG_KEY_STORAGE_FLAG,\n    value: huks.HuksKeyStorageType.HUKS_STORAGE_ONLY_USED_IN_HUKS,\n  }, {\n    tag: huks.HuksTag.HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG,\n    value: huks.HuksKeyStorageType.HUKS_STORAGE_ONLY_USED_IN_HUKS,\n  }];\n  const dhAgreeInit: huks.HuksOptions = {\n    properties: [\n      ...dhAgree,\n      { tag: huks.HuksTag.HUKS_TAG_KEY_SIZE, value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256, },\n      ...onlyUsedInHuks],\n    inData: new Uint8Array([])\n  };\n  const dhAgreeFinishParams: huks.HuksParam[] = [\n    ...onlyUsedInHuks,\n    { tag: huks.HuksTag.HUKS_TAG_IS_KEY_ALIAS, value: true },\n    { tag: huks.HuksTag.HUKS_TAG_ALGORITHM, value: huks.HuksKeyAlg.HUKS_ALG_AES },\n    { tag: huks.HuksTag.HUKS_TAG_KEY_SIZE, value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256 },\n    {\n      tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n      value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT\n    }\n  ];\n\n  await initSession(keyAlias, dhAgreeInit);\n  const dhAgreeUpdatePubKey: huks.HuksOptions = {\n    properties: [...dhAgree, ...onlyUsedInHuks],\n    inData: peerPubKey\n  };\n  await updateSession(handle, dhAgreeUpdatePubKey);\n  const dhAgreeAliceFinish: huks.HuksOptions = {\n    properties: [...dhAgreeFinishParams, {\n      tag: huks.HuksTag.HUKS_TAG_KEY_ALIAS, value: stringToUint8Array(aliasAgreedKey)\n    }], inData: new Uint8Array([])\n  };\n  await finishSession(handle, dhAgreeAliceFinish);\n}\n\nasync function huksDhAgreeInHuksTest(\n  aliasA: string, aliasB: string,\n  pubKeyA: Uint8Array, pubKeyB: Uint8Array,\n  aliasAgreedKeyFromA: string, aliasAgreedKeyFromB: string) {\n\n  await huksDhAgreeInHuks(aliasA, pubKeyB, aliasAgreedKeyFromA);\n  const aliceAgreedExist = await isKeyItemExist(aliasAgreedKeyFromA, emptyOptions);\n  console.info(`ok! aliceAgreedExist in huks is ${aliceAgreedExist}`);\n\n  await huksDhAgreeInHuks(aliasB, pubKeyA, aliasAgreedKeyFromB);\n  const bobAgreedExist = await isKeyItemExist(aliasAgreedKeyFromB, emptyOptions);\n  console.info(`ok! bobAgreedExist in huks is ${bobAgreedExist}`);\n\n  await deleteKeyItem(aliasAgreedKeyFromA, emptyOptions);\n  await deleteKeyItem(aliasAgreedKeyFromB, emptyOptions);\n}\n\nasync function huksDhAgreeTest() {\n  const aliasAlice = 'alice';\n  const aliasBob = 'bob';\n\n  /* 调用generateKeyItem生成别名为alice与bob的两个密钥 */\n  await generateKeyItem(aliasAlice, dhGenOptions);\n  await generateKeyItem(aliasBob, dhGenOptions);\n\n  /* 导出非对称密钥alice与bob的公钥 */\n  await exportKeyItem(aliasAlice, emptyOptions);\n  const pubKeyAlice = exportKey;\n  await exportKeyItem(aliasBob, emptyOptions);\n  const pubKeyBob = exportKey;\n\n  /* 开始协商，协商生成的密钥返回给业务管理 */\n  await huksDhAgreeExportKey(aliasAlice, pubKeyBob);\n  await huksDhAgreeExportKey(aliasBob, pubKeyAlice);\n\n  /* 开始协商，协商生成的密钥由HUKS管理 */\n  await huksDhAgreeInHuksTest(aliasAlice, aliasBob, pubKeyAlice, pubKeyBob, 'agreedKeyFromAlice', 'agreedKeyFromBob');\n  /* 设备A、B删除密钥 */\n  await deleteKeyItem(aliasAlice, emptyOptions);\n  await deleteKeyItem(aliasBob, emptyOptions);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ecdh密钥协商用例",
      children: "ECDH密钥协商用例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "准备ECDH密钥协商材料："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 以下以ECDH密钥的Promise操作使用为例\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction stringToUint8Array(str: string) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nfunction uint8ArrayToString(fileData: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < fileData.length; i++) {\n    dataString += String.fromCharCode(fileData[i]);\n  }\n  return dataString;\n}\n\n/*\n * 确定密钥别名和封装密钥属性参数集\n */\nlet srcKeyAliasFirst = 'AgreeECDHKeyFirstAlias';\nlet srcKeyAliasSecond = 'AgreeECDHKeySecondAlias';\nlet agreeECDHInData = 'AgreeECDHTestIndata';\nlet finishOutData: Uint8Array;\nlet handle: number;\nlet exportKey: Uint8Array;\nlet exportKeyFirst: Uint8Array;\nlet exportKeySecond: Uint8Array;\n/* 集成生成密钥参数集 */\nlet genProperties: huks.HuksParam[] = [{\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_ECC,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_AGREE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n  value: huks.HuksKeySize.HUKS_ECC_KEY_SIZE_256,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DIGEST,\n  value: huks.HuksKeyDigest.HUKS_DIGEST_NONE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PADDING,\n  value: huks.HuksKeyPadding.HUKS_PADDING_NONE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n  value: huks.HuksCipherMode.HUKS_MODE_CBC,\n}\n]\nlet genHuksOptions: huks.HuksOptions = {\n  properties: genProperties,\n  inData: new Uint8Array([])\n}\n\nlet properties: huks.HuksParam[] = [{\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_ECDH,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_AGREE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n  value: huks.HuksKeySize.HUKS_ECC_KEY_SIZE_256,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DIGEST,\n  value: huks.HuksKeyDigest.HUKS_DIGEST_NONE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PADDING,\n  value: huks.HuksKeyPadding.HUKS_PADDING_NONE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n  value: huks.HuksCipherMode.HUKS_MODE_CBC,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG,\n  value: huks.HuksKeyStorageType.HUKS_STORAGE_ONLY_USED_IN_HUKS,\n}\n]\nlet huksOptions: huks.HuksOptions = {\n  properties: properties,\n  inData: new Uint8Array([])\n}\n/* 集成第一个协商参数集 */\nconst finishProperties: huks.HuksParam[] = [{\n  tag: huks.HuksTag.HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG,\n  value: huks.HuksKeyStorageType.HUKS_STORAGE_ONLY_USED_IN_HUKS,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_IS_KEY_ALIAS,\n  value: true\n}, {\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_AES,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n  value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value:\n  huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |\n  huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DIGEST,\n  value: huks.HuksKeyDigest.HUKS_DIGEST_NONE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PADDING,\n  value: huks.HuksKeyPadding.HUKS_PADDING_NONE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n  value: huks.HuksCipherMode.HUKS_MODE_CBC,\n}\n];\nlet finishOptionsFirst: huks.HuksOptions = {\n  properties: [\n    ...finishProperties, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_ALIAS,\n    value: stringToUint8Array(srcKeyAliasFirst + 'final'),\n  }],\n  inData: stringToUint8Array(agreeECDHInData)\n}\n/* 集成第二个协商参数集 */\nlet finishOptionsSecond: huks.HuksOptions = {\n  properties: [\n    ...finishProperties, {\n    tag: huks.HuksTag.HUKS_TAG_KEY_ALIAS,\n    value: stringToUint8Array(srcKeyAliasSecond + 'final'),\n  }],\n  inData: stringToUint8Array(agreeECDHInData)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行密钥协商："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 生成密钥 */\nasync function generateKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter generateKeyItem');\n  try {\n    await huks.generateKeyItem(keyAlias, huksOptions)\n      .then(() => {\n        console.info(`promise: generateKeyItem success`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: generateKeyItem failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: generateKeyItem input arg invalid`);\n  }\n}\n\n/* 初始化密钥会话接口，并获取一个句柄（必选）和挑战值（可选） */\nasync function initSession(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter initSession');\n  try {\n    await huks.initSession(keyAlias, huksOptions)\n      .then((data) => {\n        handle = data.handle;\n        console.info(`promise: initSession success`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: initSession failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: initSession input arg invalid`);\n  }\n}\n\n/* 分段添加密钥操作的数据并进行相应的密钥操作，输出处理数据 */\nasync function updateSession(handle: number, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter updateSession');\n  try {\n    await huks.updateSession(handle, huksOptions)\n      .then((data) => {\n        console.info(`promise: updateSession success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      }).catch((error: BusinessError) => {\n        console.error(`promise: updateSession failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: updateSession input arg invalid`);\n  }\n}\n\n/* 结束密钥会话并进行相应的密钥操作，输出处理数据 */\nasync function finishSession(handle: number, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter finishSession');\n  try {\n    await huks.finishSession(handle, huksOptions)\n      .then((data) => {\n        finishOutData = data.outData as Uint8Array;\n        console.info(`promise: finishSession success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      }).catch((error: BusinessError) => {\n        console.error(`promise: finishSession failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: finishSession input arg invalid`);\n  }\n}\n\n/* 导出密钥 */\nasync function exportKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter exportKeyItem');\n  try {\n    await huks.exportKeyItem(keyAlias, huksOptions)\n      .then((data) => {\n        exportKey = data.outData as Uint8Array;\n        console.info(`promise: exportKey success, data is ` + uint8ArrayToString(data.outData as Uint8Array));\n      }).catch((error: BusinessError) => {\n        console.error(`promise: exportKeyItem failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: exportKeyItem input arg invalid`);\n  }\n}\n\n/* 删除密钥操作 */\nasync function deleteKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info('promise: enter deleteKeyItem');\n  try {\n    await huks.deleteKeyItem(keyAlias, huksOptions)\n      .then(() => {\n        console.info(`promise: deleteKeyItem success`);\n      }).catch((error: BusinessError) => {\n        console.error(`promise: deleteKeyItem failed, errCode : ${error.code}, errMsg : ${error.message}`);\n      })\n  } catch (error) {\n    console.error(`promise: deleteKeyItem input arg invalid`);\n  }\n}\n\nasync function testAgree() {\n  /* 1.确定密钥别名并集成要参数集。A设备：srcKeyAliasFirst；B设备：srcKeyAliasSecond */\n  /* 2.设备A生成密钥 */\n  await generateKeyItem(srcKeyAliasFirst, genHuksOptions);\n  /* 3.设备B生成密钥 */\n  await generateKeyItem(srcKeyAliasSecond, genHuksOptions);\n  /* 4.设备A、B导出非对称密钥的公钥 */\n  await exportKeyItem(srcKeyAliasFirst, genHuksOptions);\n  exportKeyFirst = exportKey;\n  await exportKeyItem(srcKeyAliasSecond, genHuksOptions);\n  exportKeySecond = exportKey;\n  /* 5.对第一个密钥进行协商（三段式） */\n  await initSession(srcKeyAliasFirst, huksOptions);\n  huksOptions.inData = exportKeySecond;\n  await updateSession(handle, huksOptions);\n  await finishSession(handle, finishOptionsFirst);\n  /* 6.对第二个密钥进行协商（三段式） */\n  await initSession(srcKeyAliasSecond, huksOptions);\n  huksOptions.inData = exportKeyFirst;\n  await updateSession(handle, huksOptions);\n  await finishSession(handle, finishOptionsSecond);\n  /* 7.设备A、B删除密钥 */\n  await deleteKeyItem(srcKeyAliasFirst, huksOptions);\n  await deleteKeyItem(srcKeyAliasSecond, huksOptions);\n}\n"
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