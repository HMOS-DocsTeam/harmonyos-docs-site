"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["282209"], {
679768(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_data_reliability_security_data_encryption_data_encryption_md_090_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-data-reliability-security-data-encryption-data-encryption-md-090.json
var site_docs_arkdata_data_reliability_security_data_encryption_data_encryption_md_090_namespaceObject = JSON.parse('{"id":"arkdata/data-reliability-security/data-encryption/data-encryption","title":"数据库加密 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/data-reliability-security/data-encryption/data-encryption.md","sourceDirName":"arkdata/data-reliability-security/data-encryption","slug":"/arkdata/data-reliability-security/data-encryption/","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/data-encryption/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"数据库加密 (ArkTS)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-encryption","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数据库备份与恢复 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/native-backup-and-restore/"},"next":{"title":"数据库加密 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/native-data-encryption/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/data-reliability-security/data-encryption/data-encryption.md


const frontMatter = {
	title: '数据库加密 (ArkTS)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-encryption',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '数据库加密 (ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "键值型数据库加密",
  "id": "键值型数据库加密",
  "level": 2
}, {
  "value": "关系型数据库加密",
  "id": "关系型数据库加密",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "数据库加密-arkts",
        children: "数据库加密 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了增强数据库的安全性，数据库提供了一个安全适用的数据库加密能力，从而对数据库存储的内容实施有效保护。通过数据库加密等安全方法实现了数据库数据存储的保密性和完整性要求，使得数据库以密文方式存储并在密态方式下工作，确保了数据安全。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["键值型数据库的加密属性在创建时确定，不可修改；关系型数据库从API version 22开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#rekeyex22",
        children: "rekeyEx"
      }), "接口调整其加密属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键值型数据库和关系型数据库均支持数据库加密操作，其中关系型数据库支持自定义加密/解密的密钥和其他参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "键值型数据库加密",
      children: "键值型数据库加密"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键值型数据库，通过options中encrypt参数来设置是否加密，默认为false，表示不加密。encrypt参数为true时表示加密。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体接口及功能，可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-distributedkvstore/js-apis-distributedkvstore",
        children: "分布式键值数据库"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 导入模块\n// 在pages目录下新建KvStoreInterface.ets\nimport { distributedKVStore } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport EntryAbility from '../entryability/EntryAbility';\n// Logger为hilog封装后实现的打印功能\nimport Logger from '../common/Logger';\n\nlet kvManager: distributedKVStore.KVManager | undefined = undefined;\nlet kvStore: distributedKVStore.SingleKVStore | undefined = undefined;\nlet appId: string = 'com.example.kvstoresamples';\nlet storeId: string = 'storeId';\nconst context = EntryAbility.getContext();\n\n// 下面所有接口的代码都实现在KvInterface中\nexport class KvInterface {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "public CreateKvManager = (() => {\n  Logger.info('CreateKvManager start');\n  if (typeof (kvManager) === 'undefined') {\n    const kvManagerConfig: distributedKVStore.KVManagerConfig = {\n      bundleName: appId,\n      context: context\n    };\n    try {\n      // 创建KVManager实例\n      kvManager = distributedKVStore.createKVManager(kvManagerConfig);\n      Logger.info('Succeeded in creating KVManager.');\n    } catch (err) {\n      Logger.error(`Failed to create KVManager. Code:${err.code},message:${err.message}`);\n    }\n  } else {\n    Logger.info ('KVManager has created');\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "public GetKvStore = (() => {\n  Logger.info('GetKvStore start');\n  if (kvManager === undefined) {\n    Logger.info('KvManager not initialized');\n    return;\n  }\n  try {\n    let child1 = new distributedKVStore.FieldNode('id');\n    child1.type = distributedKVStore.ValueType.INTEGER;\n    child1.nullable = false;\n    child1.default = '1';\n    let child2 = new distributedKVStore.FieldNode('name');\n    child2.type = distributedKVStore.ValueType.STRING;\n    child2.nullable = false;\n    child2.default = 'zhangsan';\n\n    let schema = new distributedKVStore.Schema();\n    schema.root.appendChild(child1);\n    schema.root.appendChild(child2);\n    schema.indexes = ['$.id', '$.name'];\n    // 0表示COMPATIBLE模式，1表示STRICT模式。\n    schema.mode = 1;\n    // 支持在检查Value时，跳过skip指定的字节数，且取值范围为[0,4M-2]。\n    schema.skip = 0;\n\n    const options: distributedKVStore.Options = {\n      createIfMissing: true,\n      // 设置数据库加密\n      encrypt: true,\n      backup: false,\n      autoSync: false,\n      // kvStoreType不填时，默认创建多设备协同数据库\n      kvStoreType: distributedKVStore.KVStoreType.SINGLE_VERSION,\n      // 多设备协同数据库：kvStoreType: distributedKVStore.KVStoreType.DEVICE_COLLABORATION,\n      schema: schema,\n      // schema未定义可以不填，定义方法请参考上方schema示例。\n      securityLevel: distributedKVStore.SecurityLevel.S3\n    };\n    kvManager.getKVStore<distributedKVStore.SingleKVStore>(storeId, options,\n      (err, store: distributedKVStore.SingleKVStore) => {\n        if (err) {\n          Logger.error(`Failed to get KVStore: Code:${err.code},message:${err.message}`);\n          return;\n        }\n        Logger.info('Succeeded in getting KVStore.');\n        kvStore = store;\n        // 请确保获取到键值数据库实例后，再进行相关数据操作\n      });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关系型数据库加密",
      children: "关系型数据库加密"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关系型数据库，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#storeconfig",
        children: "StoreConfig"
      }), "中encrypt属性来设置是否加密。encrypt参数为true时表示加密；为false时表示不加密；默认值为false。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当encrypt为true时，支持开发者通过ArkTS API中的可选属性cryptoParam设置自定义的加密/解密密钥和算法等参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对cryptoParam的配置与否，有如下两种场景："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景1：不配置cryptoParam属性，此时会使用默认的加密配置进行数据库的加密/解密。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { relationalStore } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit'\nimport { UIContext } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let store: relationalStore.RdbStore | undefined = undefined;\n\n/* context为应用的上下文信息，由调用方自行获取，此处仅为示例。 */\nconst context = new UIContext().getHostContext() as common.UIAbilityContext;\ntry {\n  const STORE_CONFIG: relationalStore.StoreConfig = {\n    name: 'RdbTest.db',\n    securityLevel: relationalStore.SecurityLevel.S3,\n    encrypt: true\n  };\n  store = await relationalStore.getRdbStore(context, STORE_CONFIG);\n  hilog.info(DOMAIN, 'Encryption', 'Succeeded in getting RdbStore.');\n} catch (e) {\n  const err = e as BusinessError;\n  hilog.error(DOMAIN, 'Encryption', `Failed to get RdbStore. Code:${err.code}, message:${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景2：配置cryptoParam属性，此时会使用开发者自定义的密钥和算法参数进行数据库的加密/解密。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let store: relationalStore.RdbStore | undefined = undefined;\n// 初始化需要使用的密钥，示例中使用硬编码密钥仅用于演示目的， 实际应用中应使用安全的密钥管理服务\nlet key = new Uint8Array(32);\nfor (let i = 0; i < 32; i++) {\n  key[i] = i;\n}\n\n// 初始化加密算法\nconst CRYPTO_PARAM: relationalStore.CryptoParam = {\n  encryptionKey: key, // 必选参数，使用指定的密钥打开加密数据库。为空则由数据库负责生成并保存密钥，并使用生成的密钥打开数据库文件。\n  iterationCount: 25000, // 可选参数，迭代次数。迭代次数必须大于零。不指定或等于零则使用默认值10000和默认加密算法。\n  encryptionAlgo: relationalStore.EncryptionAlgo.AES_256_CBC, // 可选参数，加密/解密算法。如不指定，默认算法为AES_256_GCM。\n  hmacAlgo: relationalStore.HmacAlgo.SHA256, // 可选参数，HMAC算法。如不指定，默认值为SHA256。\n  kdfAlgo: relationalStore.KdfAlgo.KDF_SHA512, // 可选参数，KDF算法。如不指定，默认值和HMAC算法相等。\n  cryptoPageSize: 2048 // 可选参数，加密/解密时使用的页大小。必须为1024到65536范围内的整数并且为2的幂。如不指定，默认值为1024。\n}\n\nconst STORE_CONFIG: relationalStore.StoreConfig = {\n  name: 'encrypted.db',\n  securityLevel: relationalStore.SecurityLevel.S3,\n  encrypt: true,\n  cryptoParam: CRYPTO_PARAM\n}\n\n/* context为应用的上下文信息，由调用方自行获取，此处仅为示例。 */\nconst context = new UIContext().getHostContext() as common.UIAbilityContext;\ntry {\n  store = await relationalStore.getRdbStore(context, STORE_CONFIG);\n  if (store == null) {\n    hilog.error(DOMAIN, 'Encryption', 'Failed to get RdbStore.');\n  } else {\n    hilog.info(DOMAIN, 'Encryption', 'Succeeded in getting RdbStore.');\n  }\n  // 调用完后需要将密钥清零\n  CRYPTO_PARAM.encryptionKey.fill(0);\n  key.fill(0);\n} catch (e) {\n  const err = e as BusinessError;\n  hilog.error(DOMAIN, 'Encryption', `Failed to get RdbStore. Code:${err.code}, message:${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者不关心加密使用的算法及参数，则无需配置cryptoParam属性，使用默认加密配置即可。当开发者需要自定义加密配置，或需要打开非默认配置的加密数据库时，则需要配置cryptoParam属性。"
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