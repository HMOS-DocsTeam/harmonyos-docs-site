"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["803568"], {
450306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_distributed_data_sync_data_sync_of_rdb_store_data_sync_of_rdb_store_md_8cf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-distributed-data-sync-data-sync-of-rdb-store-data-sync-of-rdb-store-md-8cf.json
var site_docs_arkdata_distributed_data_sync_data_sync_of_rdb_store_data_sync_of_rdb_store_md_8cf_namespaceObject = JSON.parse('{"id":"arkdata/distributed-data-sync/data-sync-of-rdb-store/data-sync-of-rdb-store","title":"关系型数据库跨设备数据同步 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/distributed-data-sync/data-sync-of-rdb-store/data-sync-of-rdb-store.md","sourceDirName":"arkdata/distributed-data-sync/data-sync-of-rdb-store","slug":"/arkdata/distributed-data-sync/data-sync-of-rdb-store/","permalink":"/harmonyos-docs-site/arkdata/distributed-data-sync/data-sync-of-rdb-store/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"关系型数据库跨设备数据同步 (ArkTS)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-sync-of-rdb-store","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"键值型数据库跨设备数据同步 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/distributed-data-sync/data-sync-of-kv-store/"},"next":{"title":"分布式数据对象跨设备数据同步 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/distributed-data-sync/data-sync-of-distributed-data-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/distributed-data-sync/data-sync-of-rdb-store/data-sync-of-rdb-store.md


const frontMatter = {
	title: '关系型数据库跨设备数据同步 (ArkTS)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-sync-of-rdb-store',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '关系型数据库跨设备数据同步 (ArkTS)';

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
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "数据跨设备同步机制",
  "id": "数据跨设备同步机制",
  "level": 3
}, {
  "value": "数据变化通知机制",
  "id": "数据变化通知机制",
  "level": 3
}, {
  "value": "数据同步存储机制",
  "id": "数据同步存储机制",
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
  "value": "使用多设备协同表模式进行数据同步",
  "id": "使用多设备协同表模式进行数据同步",
  "level": 2
}, {
  "value": "使用单版本表模式进行数据同步",
  "id": "使用单版本表模式进行数据同步",
  "level": 2
}, {
  "value": "配置schema文件",
  "id": "配置schema文件",
  "level": 2
}, {
  "value": "schema文件名及路径要求",
  "id": "schema文件名及路径要求",
  "level": 3
}, {
  "value": "schema文件内容层级及目录结构",
  "id": "schema文件内容层级及目录结构",
  "level": 3
}, {
  "value": "schema示例",
  "id": "schema示例",
  "level": 3
}, {
  "value": "schema约束与示意",
  "id": "schema约束与示意",
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
        id: "关系型数据库跨设备数据同步-arkts",
        children: "关系型数据库跨设备数据同步 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用程序本地存储的关系型数据存在跨设备同步的需求时，可以将需要同步的表数据迁移到新的支持跨设备的表中，当然也可以在刚完成表创建时设置其支持跨设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关系型数据库跨设备数据同步，支持应用在多设备间同步存储的关系型数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分布式表：支持组网内多设备间数据同步的数据库表。来自其他设备的数据将同步至本地，API version 23之前，仅支持通过与设备ID关联的表名进行存储，默认为多设备协同表模式；从API version 23开始，支持单版本表模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据同步：将设备上数据库中分布式表发生的变更，同步至组网内其他设备。有推送数据和拉取数据两种方式触发同步。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据变化通知：组网内其他设备数据发生的变化同步至当前设备时，会执行已注册的回调函数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "底层通信组件完成设备发现和认证，会通知上层应用程序设备上线。收到设备上线的消息后数据管理服务可以在两个设备之间建立加密的数据传输通道，利用该通道在两个设备之间进行数据同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据跨设备同步机制",
      children: "数据跨设备同步机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(668996)/* ["default"] */.A) + "",
        width: "880",
        height: "556"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "业务将数据写入关系型数据库后，向数据管理服务发起同步请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据管理服务从应用沙箱内读取待同步数据，根据对端设备的deviceId将数据发送到其他设备的数据管理服务。再由数据管理服务将数据写入同应用的数据库内。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据变化通知机制",
      children: "数据变化通知机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "增、删、改数据库时，会给订阅者发送数据变化的通知。主要分为本地数据变化通知和分布式数据变化通知。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据同步存储机制",
      children: "数据同步存储机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跨设备数据同步默认采用多设备协同表模式进行管理；从API version 23开始，支持使用单版本表模式进行数据存储。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "多设备协同表模式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在该模式下，各设备的数据将被隔离存储在独立的分布式表中，而非写入本地表，分布式表名为在原来表名前拼接对端设备的DeviceID标识符，如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当某一设备接收到其他设备同步过来的数据时，这些数据将自动写入对应的分布式表中，可通过obtainDistributedTableName获取对应表名并进行查询。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，该模式下不支持对其他设备同步过来的数据进行修改。这一限制旨在保障数据一致性与同步逻辑的稳定性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(401555)/* ["default"] */.A) + "",
        width: "549",
        height: "323"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "单版本表模式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在该模式下，同步数据会直接写入本地表中，如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用单版本表模式跨设备同步，需要配置schema文件，指定所需同步列以及解冲突列；单版本表模式同步数据支持修改对端设备同步过来的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(720678)/* ["default"] */.A) + "",
        width: "545",
        height: "334"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每个应用程序最多支持同时打开16个关系型分布式数据库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单个数据库最多支持注册8个订阅数据变化的回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持将含有复合键的表设置为分布式表。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["单版本表模式使用需要配置schema文件，用以指定同步列以及指定解冲突列，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BD%BF%E7%94%A8%E5%8D%95%E7%89%88%E6%9C%AC%E8%A1%A8%E6%A8%A1%E5%BC%8F%E8%BF%9B%E8%A1%8C%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5",
          children: "使用单版本表模式进行数据同步"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一张表不能同时配置为端端分布式表和端云分布式表，且不支持切换。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一数据库下所有端端分布式表必须为一种数据同步存储机制，且不支持切换。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多设备协同表模式下不支持设置schema，默认不读取schema文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是关系型设备协同分布式数据库跨设备数据同步功能的相关接口，更多接口及使用方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore/arkts-apis-data-relationalstore",
        children: "@ohos.data.relationalStore (关系型数据库)"
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
            children: "setDistributedTables(tables: Array<string>, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置分布式同步表。只支持多设备协同表模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setDistributedTables(tables: Array<string>, type: DistributedType, config: DistributedConfig, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置分布式同步表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sync(mode: SyncMode, predicates: RdbPredicates, callback: AsyncCallback<Array<[string, number]>>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分布式数据同步。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅分布式数据变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(event:'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅分布式数据变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "obtainDistributedTableName(device: string, table: string, callback: AsyncCallback<string>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据本地数据库表名获取指定设备上的表名。只支持多设备协同表模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remoteQuery(device: string, table: string, predicates: RdbPredicates, columns: Array<string> , callback: AsyncCallback<ResultSet>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定条件查询远程设备数据库中的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用多设备协同表模式进行数据同步",
      children: "使用多设备协同表模式进行数据同步"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(140226)/* ["default"] */.A) + "",
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
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { relationalStore } from '@kit.ArkData'; // 导入模块\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { distributedDeviceManager } from '@kit.DistributedServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { common } from '@kit.AbilityKit';\nimport { UIContext } from '@kit.ArkUI';\nconst DOMAIN = 0x0000;\n"
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
          children: "创建关系型数据库，创建数据表，并将需要进行跨设备同步的数据表设置为分布式表，默认采用多设备协同表模式进行数据存储和管理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const context = new UIContext().getHostContext() as common.UIAbilityContext;\nlet store: relationalStore.RdbStore | undefined = undefined;\n// ...\n  const STORE_CONFIG: relationalStore.StoreConfig = {\n    name: 'RdbTest.db', // 数据库文件名\n    securityLevel: relationalStore.SecurityLevel.S3 // 数据库安全级别\n  };\n  // 打开数据库并设置分布式表\n  relationalStore.getRdbStore(context, STORE_CONFIG).then(async (rdbStore: relationalStore.RdbStore) => {\n    store = rdbStore;\n    await store.executeSql('CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB)');\n    // 将已创建的表设置分布式表。\n    await store.setDistributedTables(['EMPLOYEE']);\n  }).catch((err: BusinessError) => {\n    hilog.error(DOMAIN, 'rdbDataSync', `Get RdbStore failed, code is ${err.code}, message is ${err.message}`);\n  });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅组网内其他设备的数据变化消息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#ondatachange",
              children: "on('dataChange')"
            }), "接口监听其他设备的数据变化，当数据变化同步至当前设备时，将执行订阅的回调方法，入参为数据发生变化的设备ID列表。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过设备ID获取与设备对应的分布式表表名，查询对应设备分布式表中的数据。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 订阅组网内其他设备的数据变化消息\nif (store) {\n  try {\n    // 查询组网内的设备列表\n    const deviceManager = distributedDeviceManager.createDeviceManager('com.example.rdbDataSync');\n    const deviceList = deviceManager.getAvailableDeviceListSync();\n    const devices: string[] = [];\n    deviceList.forEach(item => {\n      if (item.networkId) {\n        devices.push(item.networkId);\n      }\n    });\n    // 调用分布式数据订阅接口，注册数据库的观察者\n    // 当分布式数据库中的数据发生更改时，将调用回调\n    store.on('dataChange', relationalStore.SubscribeType.SUBSCRIBE_TYPE_REMOTE, async (devices) => {\n      for (let i = 0; i < devices.length; i++) {\n        let device = devices[i];\n        if (!store) {\n          return;\n        }\n        hilog.info(DOMAIN, 'rdbDataSync', `The data of device:${device} has been changed.`);\n        // 获取device对应的分布式表名。\n        const distributedTableName = await store.obtainDistributedTableName(device, 'EMPLOYEE');\n        // 创建查询谓词，查询组网内设备分布式表的数据\n        const predicates = new relationalStore.RdbPredicates(distributedTableName);\n        const resultSet = await store.query(predicates);\n        hilog.info(DOMAIN, 'rdbDataSync', `device ${device}, table EMPLOYEE rowCount is: ${resultSet.rowCount}`);\n      }\n    });\n  } catch (err) {\n    hilog.error(DOMAIN, 'rdbDataSync', `Failed to register observer. Code:${err.code},message:${err.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步当前设备数据变化至组网内其他设备。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当前设备分布式表中的数据发生变化后，调用RdbStore的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#sync-1",
              children: "sync"
            }), "接口传入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#syncmode",
              children: "SYNC_MODE_PUSH"
            }), "参数推送数据变化至其他设备。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过谓词的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates#indevices",
              children: "inDevices"
            }), "方法指定推送的目标设备。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 同步当前设备数据变化至组网内其他设备\nif (store) {\n  // 当前设备分布式数据表中插入新数据\n  const ret = store.insertSync('EMPLOYEE', {\n    name: 'sync_me',\n    age: 18,\n    salary: 666\n  });\n  hilog.info(DOMAIN, 'rdbDataSync', 'Insert to distributed table EMPLOYEE, result: ' + ret);\n  // 查询组网内的设备列表\n  const deviceManager = distributedDeviceManager.createDeviceManager('com.example.rdbDataSync');\n  const deviceList = deviceManager.getAvailableDeviceListSync();\n  const syncTarget: string[] = [];\n  deviceList.forEach(item => {\n    if (item.networkId) {\n      syncTarget.push(item.networkId);\n    }\n  });\n  if (syncTarget.length === 0) {\n    hilog.error(DOMAIN, 'rdbDataSync', 'no device to sync');\n  } else {\n    // 构造用于同步分布式表的谓词对象\n    const predicates = new relationalStore.RdbPredicates('EMPLOYEE');\n    // 指定要同步的设备列表\n    predicates.inDevices(syncTarget);\n    try {\n      // 调用同步数据的接口推送当前设备数据变化至组网内其他设备\n      const result = await store.sync(relationalStore.SyncMode.SYNC_MODE_PUSH, predicates);\n      hilog.info(DOMAIN, 'rdbDataSync', 'Push data success.');\n      // 获取同步结果\n      for (let i = 0; i < result.length; i++) {\n        const deviceId = result[i][0];\n        const syncResult = result[i][1];\n        if (syncResult === 0) {\n          hilog.info(DOMAIN, 'rdbDataSync', `device:${deviceId} sync success`);\n        } else {\n          hilog.error(DOMAIN, 'rdbDataSync', `device:${deviceId} sync failed, status:${syncResult}`);\n        }\n      }\n    } catch (e) {\n      hilog.error(DOMAIN, 'rdbDataSync', 'Push data failed, code: ' + e.code + ', message: ' + e.message);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拉取组网内其他设备的数据变化。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当前设备可调用RdbStore的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#sync-1",
              children: "sync"
            }), "接口传入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#syncmode",
              children: "SYNC_MODE_PULL"
            }), "参数拉取组网内其他设备的数据变化。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过谓词的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates#indevices",
              children: "inDevices"
            }), "方法指定拉取的目标设备。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 拉取组网内其他设备的数据变化\nif (store) {\n  // 查询组网内的设备列表\n  const deviceManager = distributedDeviceManager.createDeviceManager('com.example.rdbDataSync');\n  const deviceList = deviceManager.getAvailableDeviceListSync();\n  const syncTarget: string[] = [];\n  deviceList.forEach(item => {\n    if (item.networkId) {\n      syncTarget.push(item.networkId);\n    }\n  });\n  if (syncTarget.length === 0) {\n    hilog.error(DOMAIN, 'rdbDataSync', 'no device to pull data');\n  } else {\n    // 构造用于同步分布式表的谓词对象\n    const predicates = new relationalStore.RdbPredicates('EMPLOYEE');\n    // 指定要同步的设备列表\n    predicates.inDevices(syncTarget);\n    try {\n      // 调用同步数据的接口拉取其他设备数据变化至当前设备\n      const result = await store.sync(relationalStore.SyncMode.SYNC_MODE_PULL, predicates);\n      hilog.info(DOMAIN, 'rdbDataSync', 'Pull data success.');\n      // 获取同步结果\n      for (let i = 0; i < result.length; i++) {\n        const deviceId = result[i][0];\n        const syncResult = result[i][1];\n        if (syncResult === 0) {\n          hilog.info(DOMAIN, 'rdbDataSync', `device:${deviceId} sync success`);\n        } else {\n          hilog.error(DOMAIN, 'rdbDataSync', `device:${deviceId} sync failed, status:${syncResult}`);\n        }\n      }\n    } catch (e) {\n      hilog.error(DOMAIN, 'rdbDataSync', 'Pull data failed, code: ' + e.code + ', message: ' + e.message);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当数据未完成同步，或未触发数据同步时，可使用RdbStore的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#remotequery-1",
            children: "remoteQuery"
          }), "方法查询组网内指定设备上分布式表中的数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 查询组网内指定设备上分布式表中的数据\nif (store) {\n  // 查询组网内的设备列表\n  const deviceManager = distributedDeviceManager.createDeviceManager('com.example.rdbDataSync');\n  const deviceList = deviceManager.getAvailableDeviceListSync();\n  const devices: string[] = [];\n  deviceList.forEach(item => {\n    if (item.networkId) {\n      devices.push(item.networkId);\n    }\n  });\n  if (devices.length === 0) {\n    hilog.error(DOMAIN, 'rdbDataSync', 'no device to query data');\n    return;\n  }\n  // 构造用于查询分布式表的谓词对象\n  const predicates = new relationalStore.RdbPredicates('EMPLOYEE');\n  try {\n    // 查询组网内设备上的分布式表\n    const resultSet = await store.remoteQuery(devices[0], 'EMPLOYEE', predicates, ['ID', 'NAME', 'AGE', 'SALARY', 'CODES']);\n    hilog.info(DOMAIN, 'rdbDataSync', `ResultSet column names: ${resultSet.columnNames}, column count: ${resultSet.columnCount}`);\n  } catch (e) {\n    hilog.error(DOMAIN, 'rdbDataSync', 'Remote query failed, code: ' + e.code + ', message: ' + e.message);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用单版本表模式进行数据同步",
      children: "使用单版本表模式进行数据同步"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用单版本表模式进行数据同步，基本开发步骤与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BD%BF%E7%94%A8%E5%A4%9A%E8%AE%BE%E5%A4%87%E5%8D%8F%E5%90%8C%E8%A1%A8%E6%A8%A1%E5%BC%8F%E8%BF%9B%E8%A1%8C%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5",
        children: "使用多设备协同表模式进行数据同步"
      }), "相似。不过在创建数据表时（即使用多设备协同表模式进行数据同步中的步骤3），需要将进行跨设备同步的数据表设置为SINGLE_VERSION单版本类型。示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const context = new UIContext().getHostContext() as common.UIAbilityContext;\nlet store: relationalStore.RdbStore | undefined = undefined;\n// ...\n  const STORE_CONFIG: relationalStore.StoreConfig = {\n    name: 'RdbTest.db', // 数据库文件名\n    securityLevel: relationalStore.SecurityLevel.S3 // 数据库安全级别\n  };\n  // 打开数据库并设置分布式表\n  const DISTRIBUTED_CONFIG: relationalStore.DistributedConfig = {\n    autoSync: false,\n    asyncDownloadAsset: false,\n    enableCloud: false,\n    tableType: relationalStore.DistributedTableType.SINGLE_VERSION\n  }\n  relationalStore.getRdbStore(context, STORE_CONFIG).then(async (rdbStore: relationalStore.RdbStore) => {\n    store = rdbStore;\n    await store.executeSql('CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL UNIQUE, AGE INTEGER, SALARY REAL, CODES BLOB)');\n    await store.executeSql('CREATE TABLE IF NOT EXISTS EMPLOYEE2 (NAME TEXT NOT NULL UNIQUE, AGE INTEGER, SALARY REAL, CODES BLOB, PRIMARY KEY (NAME))');\n    // 将已创建的表设置分布式表。\n    await store.setDistributedTables(['EMPLOYEE', 'EMPLOYEE2'], relationalStore.DistributedType.DISTRIBUTED_DEVICE, DISTRIBUTED_CONFIG);\n  }).catch((err: BusinessError) => {\n    hilog.error(DOMAIN, 'rdbDataSync', `Get RdbStore failed, code is ${err.code}, message is ${err.message}`);\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "另外，在使用单版本表模式进行数据同步时，还需要配置schema文件，以指定需要同步的列及解决冲突的列。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体配置及格式要求可见下文的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%85%8D%E7%BD%AEschema%E6%96%87%E4%BB%B6",
        children: "配置schema文件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置schema文件",
      children: "配置schema文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用单版本表模式进行数据同步时，需要配置schema文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "schema文件名及路径要求",
      children: "schema文件名及路径要求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "schema文件名及路径不支持自定义，否则使用单版本表模式进行数据同步将读取不到对应文件，设置分布表也会失败。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件名：sync_schema.json"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件路径：../entry/src/main/resources/rawfile/arkdata/schema/sync_schema.json"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "schema文件内容层级及目录结构",
      children: "schema文件内容层级及目录结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "schema文件为json格式，文件主要为在dbSchema字段下进行多项配置，可以配置多个数据库。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["dbSchema：schema名称，array[db]，必填字段。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "version：当前schema版本，int类型，必填字段。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "bundleName：应用包名，string类型，必填字段。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "dbName：数据库名称，string类型，必填字段。如示例中数据库名为\"RdbTest.db\"，则此处配置为：\"RdbTest\"。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["tables：数据库中表信息，array[table]。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "tableName：表名，string，必填字段。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "deviceSyncFields：指定端端同步对应的列，array[string]，其中字段必须在fields中，且必须在数据库表中，否则不会同步；该字段为必填字段，否则设置分布式表失败。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["fields：数据库表字段详细信息，array[field]。\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "columnName：字段名，string类型，必填字段。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "type：字段类型，string类型，必填字段，可选参数范围为：[\"Text\", \"Integer\", \"Long\", \"Float\", \"Double\", \"Blob\" ]。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "primaryKey：该字段表示是否为指定解冲突列，与表中是否为主键无关，bool类型。若是自增表，该字段为必填字段。其中：true表示为解冲突列，false表示非解冲突列，默认为false。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "autoIncrement：是否自增属性，必须与表结构中对应，bool类型。关系型数据库跨设备数据同步不支持同步自增主键。其中：true表示自增主键，false表示非自增主，键默认为false。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "notNull：是否非空，bool类型，非必填字段。其中：true表示非空字段，false表示可以为空字段，默认为false。"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "schema示例",
      children: "schema示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"dbSchema\": [\n      {\n        \"version\": 0,\n        \"bundleName\": \"com.example.rdbDataSync\",\n        \"dbName\": \"RdbTest\",\n        \"tables\": [\n          {\n            \"tableName\": \"EMPLOYEE\",\n            \"deviceSyncFields\": [\"NAME\", \"AGE\", \"SALARY\", \"CODES\"],\n            \"fields\": [\n              {\n                \"columnName\": \"ID\",\n                \"type\": \"Integer\",\n                \"primaryKey\": false,\n                \"notNull\": false,\n                \"autoIncrement\": true\n              },\n              {\n                \"columnName\": \"NAME\",\n                \"type\": \"Text\",\n                \"primaryKey\": true,\n                \"notNull\": true,\n                \"autoIncrement\": false\n              },\n              {\n                \"columnName\": \"AGE\",\n                \"type\": \"Integer\",\n                \"primaryKey\": false,\n                \"notNull\": false,\n                \"autoIncrement\": false\n              },\n              {\n                \"columnName\": \"SALARY\",\n                \"type\": \"Float\",\n                \"primaryKey\": false,\n                \"notNull\": false,\n                \"autoIncrement\": false\n              },\n              {\n                \"columnName\": \"CODES\",\n                \"type\": \"Blob\",\n                \"primaryKey\": false,\n                \"notNull\": false,\n                \"autoIncrement\": false\n              }\n            ]\n          },\n          {\n            \"tableName\": \"EMPLOYEE2\",\n            \"deviceSyncFields\": [\"NAME\", \"AGE\", \"SALARY\", \"CODES\"],\n            \"fields\": [\n              {\n                \"columnName\": \"NAME\",\n                \"type\": \"Text\",\n                \"primaryKey\": true,\n                \"notNull\": true,\n                \"autoIncrement\": false\n              },\n              {\n                \"columnName\": \"AGE\",\n                \"type\": \"Integer\",\n                \"primaryKey\": false,\n                \"notNull\": false,\n                \"autoIncrement\": false\n              },\n              {\n                \"columnName\": \"SALARY\",\n                \"type\": \"Float\",\n                \"primaryKey\": false,\n                \"notNull\": false,\n                \"autoIncrement\": false\n              },\n              {\n                \"columnName\": \"CODES\",\n                \"type\": \"Blob\",\n                \"primaryKey\": false,\n                \"notNull\": false,\n                \"autoIncrement\": false\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "schema约束与示意",
      children: "schema约束与示意"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不支持解冲突列变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：schema版本升级后，指定解冲突列由\"NAME\"改为\"AGE\"。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "旧版本schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"NAME\", \"AGE\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": true,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            },\n            {\n              \"columnName\": \"AGE\",\n              \"type\": \"Integer\",\n              \"primaryKey\": false,\n              \"notNull\": false,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "升级版本schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 1,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"NAME\", \"AGE\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": false,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            },\n            {\n              \"columnName\": \"AGE\",\n              \"type\": \"Integer\",\n              \"primaryKey\": true,\n              \"notNull\": false,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解冲突列只能有一个。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：schema中指定字段\"NAME\"和\"AGE\"两个解冲突列。schema示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"NAME\", \"AGE\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": true,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            },\n            {\n              \"columnName\": \"AGE\",\n              \"type\": \"Integer\",\n              \"primaryKey\": true,\n              \"notNull\": false,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步列必须存在表中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：schema指定字段\"NAMe\"，与表中字段\"NAME\"大小写不一致。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "建表语句：'CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB)'"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"NAMe\", \"AGE\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": true,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            },\n            {\n              \"columnName\": \"AGE\",\n              \"type\": \"Integer\",\n              \"primaryKey\": false,\n              \"notNull\": false,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步列变化时，存量数据会重新同步。若schema中有新增指定同步列，已有指定同步列以及新增指定列数据会重新触发同步。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "schema有变化时，version需要增加。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：schema中新增同步字段\"AGE\"，但是version未增加。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "旧版本schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"NAME\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": true,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            },\n            {\n              \"columnName\": \"AGE\",\n              \"type\": \"Integer\",\n              \"primaryKey\": false,\n              \"notNull\": false,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "升级版本schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"NAME\", \"AGE\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": true,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            },\n            {\n              \"columnName\": \"AGE\",\n              \"type\": \"Integer\",\n              \"primaryKey\": false,\n              \"notNull\": false,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单版本表模式下，表中所有UNIQUE列必须同步。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：\"AGE\"为UNIQUE列，但是未指定该字段同步"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "建表语句：'CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL UNIQUE, AGE INTEGER UNIQUE, SALARY REAL, CODES BLOB)'。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"NAME\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": true,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            },\n            {\n              \"columnName\": \"AGE\",\n              \"type\": \"Integer\",\n              \"primaryKey\": false,\n              \"notNull\": false,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自增表下，不支持指定非主键列解冲突又同步主键。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：自增表下，指定\"NAME\"为解冲突列，但是又同步字段\"ID\"。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "建表语句：'CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL UNIQUE, AGE INTEGER, SALARY REAL, CODES BLOB)'。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"ID\", \"NAME\" ],\n          \"fields\": [\n            {\n              \"columnName\": \"ID\",\n              \"type\": \"Integer\",\n              \"primaryKey\": false,\n              \"notNull\": false,\n              \"autoIncrement\": true\n            },\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": true,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "schema版本升级时，指定同步列只能新增不能减少。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：schema版本由0升级为1，指定同步列\"AGE\"被删除。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "旧版本schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"NAME\", \"AGE\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": true,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            },\n            {\n              \"columnName\": \"AGE\",\n              \"type\": \"Integer\",\n              \"primaryKey\": false,\n              \"notNull\": false,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "升级版本schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 1,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"NAME\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": true,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            },\n            {\n              \"columnName\": \"AGE\",\n              \"type\": \"Integer\",\n              \"primaryKey\": false,\n              \"notNull\": false,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步列不能为空，deviceSyncFields长度至少为1，若schema中未配置字段deviceSyncFields，默认为空。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：schema中没有配置deviceSyncFields，设置单版本模式分布式表失败。schema示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": true,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            },\n            {\n              \"columnName\": \"AGE\",\n              \"type\": \"Integer\",\n              \"primaryKey\": false,\n              \"notNull\": false,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "表中not null字段必须有默认值，否则要指定同步。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：字段\"AGE\"为not null值，没有默认值，同步schema中没有指定\"AGE\"同步。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "建表语句：'CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL UNIQUE, AGE INTEGER NOT NULL, SALARY REAL, CODES BLOB)'。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"NAME\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": true,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            },\n            {\n              \"columnName\": \"AGE\",\n              \"type\": \"Integer\",\n              \"primaryKey\": false,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "无主键表不支持指定列同步，不支持配置单版本表模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：\"EMPLOYEE\"是无主键表，设置单版本模式分布式表时会失败。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "建表语句：'CREATE TABLE IF NOT EXISTS EMPLOYEE (NAME TEXT NOT NULL UNIQUE, AGE INTEGER, SALARY REAL, CODES BLOB)'。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"NAME\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": true,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            },\n            {\n              \"columnName\": \"AGE\",\n              \"type\": \"Integer\",\n              \"primaryKey\": false,\n              \"notNull\": false,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主键为非自增，主键必须同步，且解冲突列必须为主键。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：\"NAME\"为非自增主键，但是指定\"AGE\"为解冲突列。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "建表语句：'CREATE TABLE IF NOT EXISTS EMPLOYEE (NAME TEXT NOT NULL PRIMARY KEY, AGE INTEGER NOT NULL UNIQUE, SALARY REAL, CODES BLOB)'。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"AGE\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": false,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            },\n            {\n              \"columnName\": \"AGE\",\n              \"type\": \"Integer\",\n              \"primaryKey\": true,\n              \"notNull\": false,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置解冲突列必须为UNIQUE属性，且为类似uuid等全局唯一字段。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：指定解冲突列\"NAME\"没有UNIQUE属性。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "建表语句：'CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB)'。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"NAME\", \"AGE\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": true,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            },\n            {\n              \"columnName\": \"AGE\",\n              \"type\": \"Integer\",\n              \"primaryKey\": false,\n              \"notNull\": false,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "deviceSyncFields中字段必须在fields中，否则该字段将不会同步。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：字段\"AGE\"未出现在fields中，该字段将不会同步。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "建表语句：'CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL UNIQUE, AGE INTEGER, SALARY REAL, CODES BLOB)'。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"NAME\", \"AGE\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": true,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "必须同步uuid等全局唯一的主键，自增主键不允许同步，若主键为自增，必须配置一个非主键列解冲突。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：schema中指定了\"ID\"同步，该字段为自增主键。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "建表语句：'CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL UNIQUE, AGE INTEGER, SALARY REAL, CODES BLOB)'。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"ID\", \"NAME\"],\n          \"fields\": [\n            {\n              \"columnName\": \"ID\",\n              \"type\": \"Integer\",\n              \"primaryKey\": true,\n              \"notNull\": false,\n              \"autoIncrement\": true\n            },\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": false,\n              \"notNull\": true,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定解冲突列中的值不能出现null值。若指定解冲突列存量数据有null值，设置分布式表会失败；若指定解冲突列增量数据为null值，写入会失败。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "错误示例：若先执行写入语句，执行设置分布式表语句会失败；若先执行设置分布式表语句，执行写入语句会失败。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "建表语句：'CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT UNIQUE, AGE INTEGER, SALARY REAL, CODES BLOB)'。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "写入语句："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let valueBucket: ValueBucket = {};\nvalueBucket[\"NAME\"] = null;\nvalueBucket[\"AGE\"] = 25;\nvalueBucket[\"SALARY\"] = 23456.7;\nlet value = new Uint8Array([1, 2, 3, 4, 5]);\nvalueBucket[\"CODES\"] = value;\nawait rdbstore.insert(\"EMPLOYEE\", valueBucket);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设置分布式表语句："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "const DISTRIBUTED_CONFIG: relationalStore.DistributedConfig = {\n  autoSync: false,\n  asyncDownloadAsset: false,\n  enableCloud: false,\n  tableType: relationalStore.DistributedTableType.SINGLE_VERSION\n}\nawait store.setDistributedTables(['EMPLOYEE'], relationalStore.DistributedType.DISTRIBUTED_DEVICE, DISTRIBUTED_CONFIG);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "schema："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"dbSchema\": [\n    {\n      \"version\": 0,\n      \"bundleName\": \"com.example.rdbDataSync\",\n      \"dbName\": \"RdbTest\",\n      \"tables\": [\n        {\n          \"tableName\": \"EMPLOYEE\",\n          \"deviceSyncFields\": [\"NAME\"],\n          \"fields\": [\n            {\n              \"columnName\": \"NAME\",\n              \"type\": \"Text\",\n              \"primaryKey\": false,\n              \"notNull\": false,\n              \"autoIncrement\": false\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n"]
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
668996(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477525-8ff2342290507063c1b406fc1881380a.jpg");

},
401555(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797876-fc004e9308844de76851614754810139.jpg");

},
720678(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437571-3a7c16d01a0d5e600a4bf47bdb738f26.jpg");

},
140226(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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