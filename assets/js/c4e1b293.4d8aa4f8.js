"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["848953"], {
298036(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_key_derivation_huks_key_derivation_arkts_huks_key_derivation_arkts_md_c4e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-huks-kit-huks-local-key-management-huks-key-use-huks-key-derivation-huks-key-derivation-arkts-huks-key-derivation-arkts-md-c4e.json
var site_docs_system_security_huks_kit_huks_local_key_management_huks_key_use_huks_key_derivation_huks_key_derivation_arkts_huks_key_derivation_arkts_md_c4e_namespaceObject = JSON.parse('{"id":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-arkts/huks-key-derivation-arkts","title":"密钥派生(ArkTS)","description":"以PBKDF2和HKDF256密钥为例，完成密钥派生。具体的场景介绍及支持的算法规格，请参考密钥派生支持的算法。","source":"@site/docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-arkts/huks-key-derivation-arkts.md","sourceDirName":"system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-arkts","slug":"/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-arkts/","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"密钥派生(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-derivation-arkts","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"密钥派生介绍及算法规格","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-overview/"},"next":{"title":"密钥派生(C/C++)","permalink":"/harmonyos-docs-site/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-arkts/huks-key-derivation-arkts.md


const frontMatter = {
	title: '密钥派生(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-key-derivation-arkts',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '密钥派生(ArkTS)';

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
  "value": "HKDF",
  "id": "hkdf",
  "level": 3
}, {
  "value": "PBKDF2",
  "id": "pbkdf2",
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
        id: "密钥派生arkts",
        children: "密钥派生(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以PBKDF2和HKDF256密钥为例，完成密钥派生。具体的场景介绍及支持的算法规格，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-key-derivation/huks-key-derivation-overview#%E6%94%AF%E6%8C%81%E7%9A%84%E7%AE%97%E6%B3%95",
        children: "密钥派生支持的算法"
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["指定密钥别名，密钥别名命名规范参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
            children: "密钥生成介绍及算法规格"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化密钥属性集，可指定参数HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG（可选），用于标识基于该密钥派生出的密钥是否由HUKS管理。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当TAG设置为HUKS_STORAGE_ONLY_USED_IN_HUKS时，表示基于该密钥派生出的密钥，由HUKS管理，可保证派生密钥全生命周期不出安全环境。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当TAG设置为HUKS_STORAGE_KEY_EXPORT_ALLOWED时，表示基于该密钥派生出的密钥，返回给调用方管理，由业务自行保证密钥安全。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若业务未设置TAG的具体值，表示基于该密钥派生出的密钥，即可由HUKS管理，也可返回给调用方管理，业务可在后续派生时再选择使用何种方式保护密钥。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksgeneratekeyitem9",
            children: "generateKeyItem"
          }), "生成密钥，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview",
            children: "密钥生成"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除此之外，开发者也可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview",
        children: "密钥导入"
      }), "，导入已有的密钥。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "密钥派生"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取密钥别名，指定对应的属性参数HuksOptions。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可指定参数HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG（可选），用于标识派生得到的密钥是否由HUKS管理。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "生成"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "派生"
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
          children: "注：派生时指定的TAG值，不可与生成时指定的TAG值冲突。表格中仅列举有效的指定方式。"
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
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksupdatesession9",
            children: "updateSession"
          }), "更新密钥会话。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-security-api/universal-keystore-api/universal-keystore-arkts/js-apis-huks/js-apis-huks#huksfinishsession9",
            children: "finishSession"
          }), "结束密钥会话，完成派生。"]
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
      id: "hkdf",
      children: "HKDF"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "准备HKDF密钥派生材料"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 以下以HKDF密钥的Promise操作使用为例\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\n\n/*\n * 确定密钥别名和封装密钥属性参数集\n */\nlet srcKeyAlias = 'hkdf_Key';\nlet deriveHkdfInData = 'deriveHkdfTestIndata';\nlet handle: number;\nlet finishOutData: Uint8Array;\nlet huksKeyDeriveKeySize = 32;\n/* 集成生成密钥参数集 */\nlet properties: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_AES,\n  }, {\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DERIVE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DIGEST,\n  value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n  value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_128,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG,\n  value: huks.HuksKeyStorageType.HUKS_STORAGE_ONLY_USED_IN_HUKS,\n}];\n\nlet huksOptions: huks.HuksOptions = {\n  properties: properties,\n  inData: new Uint8Array([])\n}\n/* 集成init时密钥参数集 */\nlet initProperties: huks.HuksParam[] = [{\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_HKDF,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DERIVE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DIGEST,\n  value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DERIVE_KEY_SIZE,\n  value: huksKeyDeriveKeySize,\n}];\n\nlet initOptions: huks.HuksOptions = {\n  properties: initProperties,\n  inData: new Uint8Array([])\n}\n/* 集成finish时密钥参数集 */\nlet finishProperties: huks.HuksParam[] = [{\n  tag: huks.HuksTag.HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG,\n  value: huks.HuksKeyStorageType.HUKS_STORAGE_ONLY_USED_IN_HUKS,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_IS_KEY_ALIAS,\n  value: true,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_AES,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n  value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value:\n  huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |\n  huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DIGEST,\n  value: huks.HuksKeyDigest.HUKS_DIGEST_NONE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_ALIAS,\n  value: stringToUint8Array(srcKeyAlias),\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PADDING,\n  value: huks.HuksKeyPadding.HUKS_PADDING_NONE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n  value: huks.HuksCipherMode.HUKS_MODE_ECB,\n}];\nlet finishOptions: huks.HuksOptions = {\n  properties: finishProperties,\n  inData: new Uint8Array([])\n}\n\nfunction stringToUint8Array(str: String) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nclass ThrowObject {\n  public isThrow = false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行密钥派生"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function generateKeyItem(keyAlias: string, huksOptions: huks.HuksOptions, throwObject: ThrowObject) {\n  return new Promise<void>((resolve, reject) => {\n    try {\n      huks.generateKeyItem(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      throw (error as Error);\n    }\n  });\n}\n\nasync function publicGenKeyFunc(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise generateKeyItem`);\n  let throwObject: ThrowObject = { isThrow: false };\n  try {\n    await generateKeyItem(keyAlias, huksOptions, throwObject)\n      .then((data) => {\n        console.info(`promise: generateKeyItem success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          throw (error as Error);\n        } else {\n          console.error(`promise: generateKeyItem failed, ${JSON.stringify(error)}`);\n          throw (error as Error);\n        }\n      });\n  } catch (error) {\n    console.error(`promise: generateKeyItem input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n}\n\nfunction initSession(keyAlias: string, huksOptions: huks.HuksOptions, throwObject: ThrowObject) {\n  return new Promise<huks.HuksSessionHandle>((resolve, reject) => {\n    try {\n      huks.initSession(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      throw (error as Error);\n    }\n  });\n}\n\nasync function publicInitFunc(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise doInit`);\n  let throwObject: ThrowObject = { isThrow: false };\n  try {\n    await initSession(keyAlias, huksOptions, throwObject)\n      .then((data) => {\n        console.info(`promise: doInit success, data = ${JSON.stringify(data)}`);\n        handle = data.handle;\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          throw (error as Error);\n        } else {\n          console.error(`promise: doInit failed, ${JSON.stringify(error)}`);\n          throw (error as Error);\n        }\n      });\n  } catch (error) {\n    console.error(`promise: doInit input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n}\n\nfunction updateSession(handle: number, huksOptions: huks.HuksOptions, throwObject: ThrowObject) {\n  return new Promise<huks.HuksOptions>((resolve, reject) => {\n    try {\n      huks.updateSession(handle, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      throw (error as Error);\n    }\n  });\n}\n\nasync function publicUpdateFunc(handle: number, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise doUpdate`);\n  let throwObject: ThrowObject = { isThrow: false };\n  try {\n    await updateSession(handle, huksOptions, throwObject)\n      .then((data) => {\n        console.info(`promise: doUpdate success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          throw (error as Error);\n        } else {\n          console.error(`promise: doUpdate failed, ${JSON.stringify(error)}`);\n          throw (error as Error);\n        }\n      });\n  } catch (error) {\n    console.error(`promise: doUpdate input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n}\n\nfunction finishSession(handle: number, huksOptions: huks.HuksOptions, throwObject: ThrowObject) {\n  return new Promise<huks.HuksReturnResult>((resolve, reject) => {\n    try {\n      huks.finishSession(handle, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      throw (error as Error);\n    }\n  });\n}\n\nasync function publicFinishFunc(handle: number, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise doFinish`);\n  let throwObject: ThrowObject = { isThrow: false };\n  try {\n    await finishSession(handle, huksOptions, throwObject)\n      .then((data) => {\n        finishOutData = data.outData as Uint8Array;\n        console.info(`promise: doFinish success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          throw (error as Error);\n        } else {\n          console.error(`promise: doFinish failed, ${JSON.stringify(error)}`);\n          throw (error as Error);\n        }\n      });\n  } catch (error) {\n    console.error(`promise: doFinish input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n}\n\nfunction deleteKeyItem(keyAlias: string, huksOptions: huks.HuksOptions, throwObject: ThrowObject) {\n  return new Promise<void>((resolve, reject) => {\n    try {\n      huks.deleteKeyItem(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      throw (error as Error);\n    }\n  });\n}\n\nasync function publicDeleteKeyFunc(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise deleteKeyItem`);\n  let throwObject: ThrowObject = { isThrow: false };\n  try {\n    await deleteKeyItem(keyAlias, huksOptions, throwObject)\n      .then((data) => {\n        console.info(`promise: deleteKeyItem key success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          throw (error as Error);\n        } else {\n          console.error(`promise: deleteKeyItem failed, ${JSON.stringify(error)}`);\n          throw (error as Error);\n        }\n      });\n  } catch (error) {\n    console.error(`promise: deleteKeyItem input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n}\n\nasync function testDerive() {\n  /* 生成密钥 */\n  await publicGenKeyFunc(srcKeyAlias, huksOptions);\n  /* 进行派生操作 */\n  await publicInitFunc(srcKeyAlias, initOptions);\n  initOptions.inData = stringToUint8Array(deriveHkdfInData);\n  await publicUpdateFunc(handle, initOptions);\n  await publicFinishFunc(handle, finishOptions);\n  await publicDeleteKeyFunc(srcKeyAlias, huksOptions);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pbkdf2",
      children: "PBKDF2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "准备PBKDF2密钥派生材料"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/*\n * 以下以PBKDF2密钥的Promise操作使用为例\n */\nimport { huks } from '@kit.UniversalKeystoreKit';\n\n/*\n * 确定密钥别名和封装密钥属性参数集\n */\nlet srcKeyAlias = 'pbkdf2_Key';\nlet salt = 'mySalt';\nlet iterationCount = 10000;\nlet derivedKeySize = 32;\nlet handle: number;\nlet finishOutData: Uint8Array;\n\n/* 集成生成密钥参数集 */\nlet properties: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_AES,\n  }, {\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DERIVE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DIGEST,\n  value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n  value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG,\n  value: huks.HuksKeyStorageType.HUKS_STORAGE_ONLY_USED_IN_HUKS,\n}\n];\n\nlet huksOptions: huks.HuksOptions = {\n  properties: properties,\n  inData: new Uint8Array([])\n}\n\n/* 集成init时密钥参数集 */\nlet initProperties: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n    value: huks.HuksKeyAlg.HUKS_ALG_PBKDF2,\n  }, {\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DERIVE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DIGEST,\n  value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DERIVE_KEY_SIZE,\n  value: derivedKeySize,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_ITERATION,\n  value: iterationCount,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_SALT,\n  value: stringToUint8Array(salt),\n}\n];\n\nlet initOptions: huks.HuksOptions = {\n  properties: initProperties,\n  inData: new Uint8Array([])\n}\n\n/* 集成finish时密钥参数集 */\nlet finishProperties: huks.HuksParam[] = [\n  {\n    tag: huks.HuksTag.HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG,\n    value: huks.HuksKeyStorageType.HUKS_STORAGE_ONLY_USED_IN_HUKS,\n  }, {\n  tag: huks.HuksTag.HUKS_TAG_IS_KEY_ALIAS,\n  value: true,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,\n  value: huks.HuksKeyAlg.HUKS_ALG_AES,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,\n  value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PURPOSE,\n  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_DIGEST,\n  value: huks.HuksKeyDigest.HUKS_DIGEST_NONE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_KEY_ALIAS,\n  value: stringToUint8Array(srcKeyAlias),\n}, {\n  tag: huks.HuksTag.HUKS_TAG_PADDING,\n  value: huks.HuksKeyPadding.HUKS_PADDING_NONE,\n}, {\n  tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,\n  value: huks.HuksCipherMode.HUKS_MODE_ECB,\n}\n];\n\nlet finishOptions: huks.HuksOptions = {\n  properties: finishProperties,\n  inData: new Uint8Array([])\n}\n\nfunction stringToUint8Array(str: String) {\n  let arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  return new Uint8Array(arr);\n}\n\nclass ThrowObject {\n  public isThrow = false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行密钥派生"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function generateKeyItem(keyAlias: string, huksOptions: huks.HuksOptions, throwObject: ThrowObject) {\n  return new Promise<void>((resolve, reject) => {\n    try {\n      huks.generateKeyItem(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      throw (error as Error);\n    }\n  });\n}\n\nasync function publicGenKeyFunc(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise generateKeyItem`);\n  let throwObject: ThrowObject = { isThrow: false };\n  try {\n    await generateKeyItem(keyAlias, huksOptions, throwObject)\n      .then((data) => {\n        console.info(`promise: generateKeyItem success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          throw (error as Error);\n        } else {\n          console.error(`promise: generateKeyItem failed, ${JSON.stringify(error)}`);\n          throw (error as Error);\n        }\n      });\n  } catch (error) {\n    console.error(`promise: generateKeyItem input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n}\n\nfunction initSession(keyAlias: string, huksOptions: huks.HuksOptions, throwObject: ThrowObject) {\n  return new Promise<huks.HuksSessionHandle>((resolve, reject) => {\n    try {\n      huks.initSession(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      throw (error as Error);\n    }\n  });\n}\n\nasync function publicInitFunc(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise doInit`);\n  let throwObject: ThrowObject = { isThrow: false };\n  try {\n    await initSession(keyAlias, huksOptions, throwObject)\n      .then((data) => {\n        console.info(`promise: doInit success, data = ${JSON.stringify(data)}`);\n        handle = data.handle;\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          throw (error as Error);\n        } else {\n          console.error(`promise: doInit failed, ${JSON.stringify(error)}`);\n          throw (error as Error);\n        }\n      });\n  } catch (error) {\n    console.error(`promise: doInit input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n}\n\nfunction updateSession(handle: number, huksOptions: huks.HuksOptions, throwObject: ThrowObject) {\n  return new Promise<huks.HuksOptions>((resolve, reject) => {\n    try {\n      huks.updateSession(handle, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      throw (error as Error);\n    }\n  });\n}\n\nasync function publicUpdateFunc(handle: number, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise doUpdate`);\n  let throwObject: ThrowObject = { isThrow: false };\n  try {\n    await updateSession(handle, huksOptions, throwObject)\n      .then((data) => {\n        console.info(`promise: doUpdate success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          throw (error as Error);\n        } else {\n          console.error(`promise: doUpdate failed, ${JSON.stringify(error)}`);\n          throw (error as Error);\n        }\n      });\n  } catch (error) {\n    console.error(`promise: doUpdate input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n}\n\nfunction finishSession(handle: number, huksOptions: huks.HuksOptions, throwObject: ThrowObject) {\n  return new Promise<huks.HuksReturnResult>((resolve, reject) => {\n    try {\n      huks.finishSession(handle, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      throw (error as Error);\n    }\n  });\n}\n\nasync function publicFinishFunc(handle: number, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise doFinish`);\n  let throwObject: ThrowObject = { isThrow: false };\n  try {\n    await finishSession(handle, huksOptions, throwObject)\n      .then((data) => {\n        finishOutData = data.outData as Uint8Array;\n        console.info(`promise: doFinish success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          throw (error as Error);\n        } else {\n          console.error(`promise: doFinish failed, ${JSON.stringify(error)}`);\n          throw (error as Error);\n        }\n      });\n  } catch (error) {\n    console.error(`promise: doFinish input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n}\n\nfunction deleteKeyItem(keyAlias: string, huksOptions: huks.HuksOptions, throwObject: ThrowObject) {\n  return new Promise<void>((resolve, reject) => {\n    try {\n      huks.deleteKeyItem(keyAlias, huksOptions, (error, data) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(data);\n        }\n      });\n    } catch (error) {\n      throwObject.isThrow = true;\n      throw (error as Error);\n    }\n  });\n}\n\nasync function publicDeleteKeyFunc(keyAlias: string, huksOptions: huks.HuksOptions) {\n  console.info(`enter promise deleteKeyItem`);\n  let throwObject: ThrowObject = { isThrow: false };\n  try {\n    await deleteKeyItem(keyAlias, huksOptions, throwObject)\n      .then((data) => {\n        console.info(`promise: deleteKeyItem key success, data = ${JSON.stringify(data)}`);\n      })\n      .catch((error: Error) => {\n        if (throwObject.isThrow) {\n          throw (error as Error);\n        } else {\n          console.error(`promise: deleteKeyItem failed, ${JSON.stringify(error)}`);\n          throw (error as Error);\n        }\n      });\n  } catch (error) {\n    console.error(`promise: deleteKeyItem input arg invalid, ${JSON.stringify(error)}`);\n    throw (error as Error);\n  }\n}\n\nasync function testDerive() {\n  /* 生成密钥 */\n  await publicGenKeyFunc(srcKeyAlias, huksOptions);\n  /* 进行派生操作 */\n  await publicInitFunc(srcKeyAlias, initOptions);\n  await publicUpdateFunc(handle, initOptions);\n  await publicFinishFunc(handle, finishOptions);\n  await publicDeleteKeyFunc(srcKeyAlias, huksOptions);\n}\n"
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