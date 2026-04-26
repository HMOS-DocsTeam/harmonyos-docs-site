"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["212440"], {
71430(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_distributed_data_sync_data_sync_of_kv_store_data_sync_of_kv_store_md_75f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-distributed-data-sync-data-sync-of-kv-store-data-sync-of-kv-store-md-75f.json
var site_docs_arkdata_distributed_data_sync_data_sync_of_kv_store_data_sync_of_kv_store_md_75f_namespaceObject = JSON.parse('{"id":"arkdata/distributed-data-sync/data-sync-of-kv-store/data-sync-of-kv-store","title":"键值型数据库跨设备数据同步 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/distributed-data-sync/data-sync-of-kv-store/data-sync-of-kv-store.md","sourceDirName":"arkdata/distributed-data-sync/data-sync-of-kv-store","slug":"/arkdata/distributed-data-sync/data-sync-of-kv-store/","permalink":"/harmonyos-docs-site/arkdata/distributed-data-sync/data-sync-of-kv-store/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"键值型数据库跨设备数据同步 (ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-sync-of-kv-store","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"同应用跨设备数据同步概述","permalink":"/harmonyos-docs-site/arkdata/distributed-data-sync/sync-app-data-across-devices-overview/"},"next":{"title":"关系型数据库跨设备数据同步 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/distributed-data-sync/data-sync-of-rdb-store/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/distributed-data-sync/data-sync-of-kv-store/data-sync-of-kv-store.md


const frontMatter = {
	title: '键值型数据库跨设备数据同步 (ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-sync-of-kv-store',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '键值型数据库跨设备数据同步 (ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "单版本数据库",
  "id": "单版本数据库",
  "level": 3
}, {
  "value": "多设备协同数据库",
  "id": "多设备协同数据库",
  "level": 3
}, {
  "value": "端端同步方式",
  "id": "端端同步方式",
  "level": 2
}, {
  "value": "手动同步",
  "id": "手动同步",
  "level": 3
}, {
  "value": "自动同步",
  "id": "自动同步",
  "level": 3
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "数据跨设备端端同步机制",
  "id": "数据跨设备端端同步机制",
  "level": 3
}, {
  "value": "数据变化通知机制",
  "id": "数据变化通知机制",
  "level": 3
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "键值型数据库跨设备数据同步-arkts",
        children: "键值型数据库跨设备数据同步 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键值型数据库适合不涉及过多数据关系和业务关系的业务数据存储，比SQL数据库存储拥有更好的读写性能，同时因其在分布式场景中降低了解决数据库版本兼容问题的复杂度，和数据端端同步过程中冲突解决的复杂度而被广泛使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用键值型数据库跨设备数据端端同步前，请先了解以下概念。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "单版本数据库",
      children: "单版本数据库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单版本是指数据在本地是以单个条目为单位的方式保存，当用户修改时，直接在这个条目上进行修改。在数据端端同步后多个设备全局只保留一份数据，多个设备的相同记录（主码相同）会按时间最新保留一条记录，数据不分设备，设备之间修改相同的key会覆盖。端端同步也以此为基础，按照它在本地被写入或更改的顺序将当前最新一次修改逐条同步至远端设备，常用于联系人、天气等应用存储场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(573882)/* ["default"] */.A) + "",
        width: "731",
        height: "335"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多设备协同数据库",
      children: "多设备协同数据库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多设备协同分布式数据库建立在单版本数据库之上，对应用程序存入的键值型数据中的Key前面拼接了本设备的DeviceID标识符，这样能保证每个设备产生的数据严格隔离。数据以设备的维度管理，不存在冲突；支持按照设备的维度查询数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "底层按照设备的维度管理这些数据，多设备协同数据库支持以设备的维度查询分布式数据，但是不支持修改远端设备同步过来的数据。需要分开查询各设备数据的可以使用设备协同版本数据库。常用于图库缩略图存储场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(867521)/* ["default"] */.A) + "",
        width: "816",
        height: "445"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "端端同步方式",
      children: "端端同步方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据管理服务提供了两种同步方式：手动同步和自动同步。键值型数据库可选择其中一种方式实现同应用跨设备数据端端同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "手动同步",
      children: "手动同步"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由应用程序调用sync接口来触发，需要指定端端同步的设备列表和同步模式。同步模式分为PULL_ONLY（将远端数据拉取到本端）、PUSH_ONLY（将本端数据推送到远端）和PUSH_PULL（将本端数据推送到远端同时也将远端数据拉取到本端）。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-distributedkvstore/js-apis-distributedkvstore#sync-1",
        children: "带有Query参数的端端同步接口"
      }), "，支持按条件过滤的方法进行端端同步，将符合条件的数据同步到远端。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自动同步",
      children: "自动同步"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在跨设备Call调用实现的多端协同场景中，在应用程序更新数据后，由分布式数据库自动将本端数据推送到远端，同时也将远端数据拉取到本端来完成数据同步，应用不需要主动调用sync接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "底层通信组件完成设备发现和认证，会通知上层应用程序设备上线。收到设备上线的消息后数据管理服务可以在两个设备之间建立加密的数据传输通道，利用该通道在两个设备之间进行数据端端同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据跨设备端端同步机制",
      children: "数据跨设备端端同步机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(315195)/* ["default"] */.A) + "",
        width: "775",
        height: "406"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如图所示，通过put、delete接口触发自动端端同步，将分布式数据通过通信适配层发送给对端设备，实现分布式数据的自动端端同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手动同步则是手动调用sync接口触发端端同步，将分布式数据通过通信适配层发送给对端设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据变化通知机制",
      children: "数据变化通知机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增、删、改数据时，会给订阅者发送数据变化的通知。主要分为本地数据变化通知和分布式数据变化通知。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "本地数据变化通知"
          })
        }), "：本地设备的应用内订阅数据变化通知，数据库增删改数据时，会收到通知。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "分布式数据变化通知"
          })
        }), "：同一应用订阅组网内其他设备数据变化的通知，其他设备增删改数据时，本设备会收到通知。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备协同数据库，针对每条记录，Key的长度≤896 Byte，Value的长度<4 MB。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单版本数据库，针对每条记录，Key的长度≤1 KB，Value的长度<4 MB。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "键值型数据库不支持应用程序自定义冲突解决策略。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每个应用程序可以同时打开最多16个键值型分布式数据库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单个数据库可以注册最多8个订阅数据变化的回调。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是单版本键值型分布式数据库跨设备数据端端同步功能的相关接口，更多接口及使用方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-distributedkvstore/js-apis-distributedkvstore",
        children: "分布式键值数据库"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅数据库中数据的变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "get(key: string, callback: AsyncCallback<boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sync(deviceIds: string[], mode: SyncMode, delayMs?: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在手动模式下，触发数据库端端同步。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以单版本键值型数据库跨设备数据端端同步的开发为例。以下是具体的开发流程和开发步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(688914)/* ["default"] */.A) + "",
        width: "542",
        height: "702"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(957219)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["数据只允许向数据安全标签不高于对端设备安全等级的设备同步数据，具体规则可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/access-control-by-device-and-data-level#%E8%B7%A8%E8%AE%BE%E5%A4%87%E5%90%8C%E6%AD%A5%E8%AE%BF%E9%97%AE%E6%8E%A7%E5%88%B6%E6%9C%BA%E5%88%B6",
        children: "跨设备同步访问控制机制"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块获取context。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入模块\n// 在pages目录下新建KvStoreInterface.ets\nimport { distributedKVStore } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { distributedDeviceManager } from '@kit.DistributedServiceKit';\nimport EntryAbility from '../entryability/EntryAbility';\n// Logger为hilog封装后实现的打印功能\nimport Logger from '../common/Logger';\n\nlet kvManager: distributedKVStore.KVManager | undefined = undefined;\nlet kvStore: distributedKVStore.SingleKVStore | undefined = undefined;\nlet appId: string = 'com.example.kvstoresamples';\nlet storeId: string = 'storeId';\n// Stage模型context从EntryAbility.ets中获取\nconst context = EntryAbility.getContext();\n\n// FA模型获取context\nimport { featureAbility } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet context = featureAbility.getContext();\n\n// 下面所有接口的代码都实现在KvInterface中\nexport class KvInterface {\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求权限。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["需要申请ohos.permission.DISTRIBUTED_DATASYNC权限，配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
              children: "声明权限"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["同时需要在应用首次启动时弹窗向用户申请授权，使用方式请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
              children: "向用户申请授权"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据配置调用createKVManager()方法构造分布式数据库管理类实例。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "根据应用上下文创建kvManagerConfig对象。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "创建分布式数据库管理器实例。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public CreateKvManager = (() => {\n  Logger.info('CreateKvManager start');\n  if (typeof (kvManager) === 'undefined') {\n    const kvManagerConfig: distributedKVStore.KVManagerConfig = {\n      bundleName: appId,\n      context: context\n    };\n    try {\n      // 创建KVManager实例\n      kvManager = distributedKVStore.createKVManager(kvManagerConfig);\n      Logger.info('Succeeded in creating KVManager.');\n    } catch (err) {\n      Logger.error(`Failed to create KVManager. Code:${err.code},message:${err.message}`);\n    }\n  } else {\n    Logger.info ('KVManager has created');\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用getKVStore()方法获取并得到指定类型的键值型数据库。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "声明需要创建的分布式数据库ID描述（例如示例代码中的'storeId'）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "创建分布式数据库，建议关闭自动端端同步功能（autoSync:false），方便后续对端端同步功能进行验证，需要端端同步时主动调用sync接口。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public GetKvStore = (() => {\n  Logger.info('GetKvStore start');\n  if (kvManager === undefined) {\n    Logger.info('KvManager not initialized');\n    return;\n  }\n  try {\n    let child1 = new distributedKVStore.FieldNode('id');\n    child1.type = distributedKVStore.ValueType.INTEGER;\n    child1.nullable = false;\n    child1.default = '1';\n    let child2 = new distributedKVStore.FieldNode('name');\n    child2.type = distributedKVStore.ValueType.STRING;\n    child2.nullable = false;\n    child2.default = 'zhangsan';\n\n    let schema = new distributedKVStore.Schema();\n    schema.root.appendChild(child1);\n    schema.root.appendChild(child2);\n    schema.indexes = ['$.id', '$.name'];\n    // 0表示COMPATIBLE模式，1表示STRICT模式。\n    schema.mode = 1;\n    // 支持在检查Value时，跳过skip指定的字节数，且取值范围为[0,4M-2]。\n    schema.skip = 0;\n\n    const options: distributedKVStore.Options = {\n      createIfMissing: true,\n      // 设置数据库加密\n      encrypt: true,\n      backup: false,\n      autoSync: false,\n      // kvStoreType不填时，默认创建多设备协同数据库\n      kvStoreType: distributedKVStore.KVStoreType.SINGLE_VERSION,\n      // 多设备协同数据库：kvStoreType: distributedKVStore.KVStoreType.DEVICE_COLLABORATION,\n      schema: schema,\n      // schema未定义可以不填，定义方法请参考上方schema示例。\n      securityLevel: distributedKVStore.SecurityLevel.S3\n    };\n    kvManager.getKVStore<distributedKVStore.SingleKVStore>(storeId, options,\n      (err, store: distributedKVStore.SingleKVStore) => {\n        if (err) {\n          Logger.error(`Failed to get KVStore: Code:${err.code},message:${err.message}`);\n          return;\n        }\n        Logger.info('Succeeded in getting KVStore.');\n        kvStore = store;\n        // 请确保获取到键值数据库实例后，再进行相关数据操作\n      });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用on()方法订阅分布式数据变化，如需关闭订阅分布式数据变化，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-arkts/js-apis-distributedkvstore/js-apis-distributedkvstore#offdatachange",
            children: "off('dataChange')"
          }), "关闭。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public On = (() =>{\n  Logger.info('On start');\n  if(kvStore === undefined) {\n    Logger.info('On: kvStore not initialized');\n    return;\n  }\n  try {\n    kvStore.on('dataChange', distributedKVStore.SubscribeType.SUBSCRIBE_TYPE_ALL, (data) => {\n      Logger.info(`dataChange callback call data: ${data}`);\n    });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用put()方法将数据写入分布式数据库。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "构造需要写入分布式数据库的Key（键）和Value（值）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "将键值数据写入分布式数据库。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public Put = (() => {\n  Logger.info('Put start');\n  if (kvStore === undefined) {\n    Logger.info('Put: kvStore not initialized');\n    return;\n  }\n  const KEY_TEST_STRING_ELEMENT = 'key_test_string';\n  // 如果未定义Schema则Value可以传其他符合要求的值。\n  const VALUE_TEST_STRING_ELEMENT = '{\"id\":0, \"name\":\"lisi\"}';\n  try {\n    kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT, (err) => {\n      if (err !== undefined) {\n        Logger.error(`Failed to put data. Code:${err.code},message:${err.message}`);\n        return;\n      }\n      Logger.info('Succeeded in putting data.');\n    });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用get()方法查询分布式数据库数据。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "构造需要从单版本分布式数据库中查询的Key（键）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "从单版本分布式数据库中获取数据。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public Get = (() => {\n  Logger.info('Get start');\n  if (kvStore === undefined) {\n    Logger.info('Get: kvStore not initialized');\n    return;\n  }\n  const KEY_TEST_STRING_ELEMENT = 'key_test_string';\n  try {\n    kvStore.get(KEY_TEST_STRING_ELEMENT, (err, data) => {\n      if (err != undefined) {\n        Logger.error(`Failed to get data. Code:${err.code},message:${err.message}`);\n        return;\n      }\n      Logger.info(`Succeeded in getting data. Data:${data}`);\n    });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`Failed to get data. Code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用sync()方法同步数据到其他设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择同一组网环境下的设备以及同步模式（需用户在应用首次启动的弹窗中确认选择同步模式），进行数据端端同步。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(255504)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在手动端端同步的方式下，其中的deviceIds通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-distributeddevicemanager/js-apis-distributeddevicemanager#getavailabledevicelistsync",
            children: "devManager.getAvailableDeviceListSync"
          }), "方法得到。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public Sync = (() =>{\n  Logger.info('Sync start');\n  if(kvStore === undefined) {\n    Logger.info('Sync: kvStore not initialized');\n    return;\n  }\n  let devManager: distributedDeviceManager.DeviceManager;\n  try {\n    // create deviceManager\n    devManager = distributedDeviceManager.createDeviceManager(context.applicationInfo.name);\n    // deviceIds由deviceManager调用getAvailableDeviceListSync方法得到\n    let deviceIds: string[] = [];\n    if (devManager != null) {\n      let devices = devManager.getAvailableDeviceListSync();\n      for (let i = 0; i < devices.length; i++) {\n        deviceIds[i] = devices[i].networkId as string;\n      }\n    }\n    if (deviceIds.length === 0) {\n      Logger.info('Sync failed networkId is empty.');\n      return;\n    }\n    try {\n      // 1000表示最大延迟时间为1000ms\n      kvStore.sync(deviceIds, distributedKVStore.SyncMode.PUSH_PULL, 1000);\n    } catch (e) {\n      let error = e as BusinessError;\n      Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n    }\n  } catch (err) {\n    let error = err as BusinessError;\n    Logger.error('createDeviceManager errCode:' + error.code + ',errMessage:' + error.message);\n  }\n})\n"
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
957219(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
867521(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797874-126012e2e02f5c57218025355b77b7b6.jpg");

},
315195(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437569-82342254173503ff579637e63686efdc.jpg");

},
255504(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
573882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477523-db4184e5ecb0db408ff775a6e91e3d02.jpg");

},
688914(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957524-ec47c2c365fc2e67d15cf20a929eb218.png");

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