"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["547565"], {
912092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_app_data_persistence_data_persistence_by_kv_store_data_persistence_by_kv_store_md_16f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-app-data-persistence-data-persistence-by-kv-store-data-persistence-by-kv-store-md-16f.json
var site_docs_arkdata_app_data_persistence_data_persistence_by_kv_store_data_persistence_by_kv_store_md_16f_namespaceObject = JSON.parse('{"id":"arkdata/app-data-persistence/data-persistence-by-kv-store/data-persistence-by-kv-store","title":"通过键值型数据库实现数据持久化 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/app-data-persistence/data-persistence-by-kv-store/data-persistence-by-kv-store.md","sourceDirName":"arkdata/app-data-persistence/data-persistence-by-kv-store","slug":"/arkdata/app-data-persistence/data-persistence-by-kv-store/","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/data-persistence-by-kv-store/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"通过键值型数据库实现数据持久化 (ArkTS)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-persistence-by-kv-store","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过用户首选项实现数据持久化 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/preferences-guidelines/"},"next":{"title":"通过关系型数据库实现数据持久化 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/data-persistence-by-rdb-store/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/app-data-persistence/data-persistence-by-kv-store/data-persistence-by-kv-store.md


const frontMatter = {
	title: '通过键值型数据库实现数据持久化 (ArkTS)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-persistence-by-kv-store',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '通过键值型数据库实现数据持久化 (ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "通过键值型数据库实现数据持久化-arkts",
        children: "通过键值型数据库实现数据持久化 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键值型数据库存储键值对形式的数据，当需要存储的数据没有复杂的关系模型，比如存储商品名称及对应价格、员工工号及今日是否已出勤等，由于数据复杂度低，更容易兼容不同数据库版本和设备类型，因此推荐使用键值型数据库持久化此类数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备协同数据库，针对每条记录，Key的长度≤896 Byte，Value的长度<4 MB。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单版本数据库，针对每条记录，Key的长度≤1 KB，Value的长度<4 MB。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每个应用程序最多支持同时打开16个键值型分布式数据库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "键值型数据库事件回调方法中不允许进行阻塞操作，例如修改UI组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是键值型数据库持久化功能的相关接口，更多接口及使用方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-distributedkvstore/js-apis-distributedkvstore",
        children: "分布式键值数据库"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createKVManager(config: KVManagerConfig): KVManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个KVManager对象实例，用于管理数据库对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定options和storeId，创建并得到指定类型的KVStore数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "put(key: string, value: Uint8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "get(key: string, callback: AsyncCallback<boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delete(key: string, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从数据库中删除指定键值的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "closeKVStore(appId: string, storeId: string, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过storeId的值关闭指定的分布式键值数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过storeId的值删除指定的分布式键值数据库。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若要使用键值型数据库，首先要使用createKVManager()方法获取一个KVManager实例，用于管理数据库对象。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入模块\n// 在pages目录下新建KvStoreInterface.ets\nimport { distributedKVStore } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport EntryAbility from '../entryability/EntryAbility';\n// Logger为hilog封装后实现的打印功能\nimport Logger from '../common/Logger';\n\nlet kvManager: distributedKVStore.KVManager | undefined = undefined;\nlet kvStore: distributedKVStore.SingleKVStore | undefined = undefined;\nlet appId: string = 'com.example.kvstoresamples';\nlet storeId: string = 'storeId';\n// Stage模型context从EntryAbility.ets中获取\nconst context = EntryAbility.getContext();\n\n// FA模型获取context\nimport { featureAbility } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet context = featureAbility.getContext();\n\n// 下面所有接口的代码都实现在KvInterface中\nexport class KvInterface {\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public CreateKvManager = (() => {\n  Logger.info('CreateKvManager start');\n  if (typeof (kvManager) === 'undefined') {\n    const kvManagerConfig: distributedKVStore.KVManagerConfig = {\n      bundleName: appId,\n      context: context\n    };\n    try {\n      // 创建KVManager实例\n      kvManager = distributedKVStore.createKVManager(kvManagerConfig);\n      Logger.info('Succeeded in creating KVManager.');\n    } catch (err) {\n      Logger.error(`Failed to create KVManager. Code:${err.code},message:${err.message}`);\n    }\n  } else {\n    Logger.info ('KVManager has created');\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用getKVStore()方法创建并获取键值数据库。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public GetKvStore = (() => {\n  Logger.info('GetKvStore start');\n  if (kvManager === undefined) {\n    Logger.info('KvManager not initialized');\n    return;\n  }\n  try {\n    let child1 = new distributedKVStore.FieldNode('id');\n    child1.type = distributedKVStore.ValueType.INTEGER;\n    child1.nullable = false;\n    child1.default = '1';\n    let child2 = new distributedKVStore.FieldNode('name');\n    child2.type = distributedKVStore.ValueType.STRING;\n    child2.nullable = false;\n    child2.default = 'zhangsan';\n\n    let schema = new distributedKVStore.Schema();\n    schema.root.appendChild(child1);\n    schema.root.appendChild(child2);\n    schema.indexes = ['$.id', '$.name'];\n    // 0表示COMPATIBLE模式，1表示STRICT模式。\n    schema.mode = 1;\n    // 支持在检查Value时，跳过skip指定的字节数，且取值范围为[0,4M-2]。\n    schema.skip = 0;\n\n    const options: distributedKVStore.Options = {\n      createIfMissing: true,\n      // 设置数据库加密\n      encrypt: true,\n      backup: false,\n      autoSync: false,\n      // kvStoreType不填时，默认创建多设备协同数据库\n      kvStoreType: distributedKVStore.KVStoreType.SINGLE_VERSION,\n      // 多设备协同数据库：kvStoreType: distributedKVStore.KVStoreType.DEVICE_COLLABORATION,\n      schema: schema,\n      // schema未定义可以不填，定义方法请参考上方schema示例。\n      securityLevel: distributedKVStore.SecurityLevel.S3\n    };\n    kvManager.getKVStore<distributedKVStore.SingleKVStore>(storeId, options,\n      (err, store: distributedKVStore.SingleKVStore) => {\n        if (err) {\n          Logger.error(`Failed to get KVStore: Code:${err.code},message:${err.message}`);\n          return;\n        }\n        Logger.info('Succeeded in getting KVStore.');\n        kvStore = store;\n        // 请确保获取到键值数据库实例后，再进行相关数据操作\n      });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用on()方法订阅分布式数据变化，如需关闭订阅分布式数据变化，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-arkts/js-apis-distributedkvstore/js-apis-distributedkvstore#offdatachange",
            children: "off('dataChange')"
          }), "关闭。示例代码如下所示："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public On = (() =>{\n  Logger.info('On start');\n  if(kvStore === undefined) {\n    Logger.info('On: kvStore not initialized');\n    return;\n  }\n  try {\n    kvStore.on('dataChange', distributedKVStore.SubscribeType.SUBSCRIBE_TYPE_ALL, (data) => {\n      Logger.info(`dataChange callback call data: ${data}`);\n    });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用put()方法向键值数据库中插入数据。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public Put = (() => {\n  Logger.info('Put start');\n  if (kvStore === undefined) {\n    Logger.info('Put: kvStore not initialized');\n    return;\n  }\n  const KEY_TEST_STRING_ELEMENT = 'key_test_string';\n  // 如果未定义Schema则Value可以传其他符合要求的值。\n  const VALUE_TEST_STRING_ELEMENT = '{\"id\":0, \"name\":\"lisi\"}';\n  try {\n    kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT, (err) => {\n      if (err !== undefined) {\n        Logger.error(`Failed to put data. Code:${err.code},message:${err.message}`);\n        return;\n      }\n      Logger.info('Succeeded in putting data.');\n    });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(308730)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当Key值存在时，put()方法会修改其值，否则新增一条数据。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用get()方法获取指定键的值。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public Get = (() => {\n  Logger.info('Get start');\n  if (kvStore === undefined) {\n    Logger.info('Get: kvStore not initialized');\n    return;\n  }\n  const KEY_TEST_STRING_ELEMENT = 'key_test_string';\n  try {\n    kvStore.get(KEY_TEST_STRING_ELEMENT, (err, data) => {\n      if (err != undefined) {\n        Logger.error(`Failed to get data. Code:${err.code},message:${err.message}`);\n        return;\n      }\n      Logger.info(`Succeeded in getting data. Data:${data}`);\n    });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`Failed to get data. Code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用delete()方法删除指定键值的数据。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public Delete = (() => {\n  Logger.info('DeleteData start');\n  if (kvStore === undefined) {\n    Logger.info('DeleteData: kvStore not initialized');\n    return;\n  }\n  const KEY_TEST_STRING_ELEMENT = 'key_test_string';\n  try {\n    kvStore.delete(KEY_TEST_STRING_ELEMENT, (err) => {\n      if (err !== undefined) {\n        Logger.error(`Failed to delete data. Code:${err.code},message:${err.message}`);\n        return;\n      }\n      Logger.info('Succeeded in deleting data.');\n    });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用closeKVStore()方法通过storeId的值关闭指定的分布式键值数据库。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public CloseKVStore = (()=>{\n  Logger.info('CloseKVStore start');\n  if (kvManager === undefined) {\n    Logger.info('KvManager not initialized');\n    return;\n  }\n  try {\n    // appId为应用的bundleName\n    kvStore = undefined;\n    kvManager.closeKVStore(appId, storeId, (err: BusinessError)=> {\n      if (err) {\n        Logger.error(`Failed to close KVStore.code is ${err.code},message is ${err.message}`);\n        return;\n      }\n      Logger.info('Succeeded in closing KVStore');\n    });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用deleteKVStore()方法通过storeId的值删除指定的分布式键值数据库。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public DeleteKvStore = (()=>{\n  Logger.info('DeleteKvStore start');\n  if (kvManager === undefined) {\n    Logger.info('KvManager not initialized');\n    return;\n  }\n  try {\n    // appId为应用的bundleName\n    kvStore = undefined;\n    kvManager.deleteKVStore(appId, storeId, (err: BusinessError)=> {\n      if (err) {\n        Logger.error(`Failed to delete KVStore.code is ${err.code},message is ${err.message}`);\n        return;\n      }\n      Logger.info('Succeeded in deleting KVStore');\n    });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/KVStore",
          children: "实现键值型数据库读写功能"
        })
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
308730(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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