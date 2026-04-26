"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["501482"], {
396547(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_arkts_js_apis_data_relationalstore_arkts_apis_data_relationalstore_transaction_arkts_apis_data_relationalstore_transaction_md_ff9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-arkts-js-apis-data-relationalstore-arkts-apis-data-relationalstore-transaction-arkts-apis-data-relationalstore-transaction-md-ff9.json
var site_docs_ref_arkdata_api_arkdata_arkts_js_apis_data_relationalstore_arkts_apis_data_relationalstore_transaction_arkts_apis_data_relationalstore_transaction_md_ff9_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-transaction/arkts-apis-data-relationalstore-transaction","title":"Interface (Transaction)","description":"提供以事务方式管理数据库的方法。事务对象是通过createTransaction接口创建的，不同事务对象之间的操作是隔离的，不同类型事务的区别见TransactionType 。","source":"@site/docs-ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-transaction/arkts-apis-data-relationalstore-transaction.md","sourceDirName":"arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-transaction","slug":"/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-transaction/arkts-apis-data-relationalstore-transaction","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-transaction/arkts-apis-data-relationalstore-transaction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Interface (Transaction)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-transaction","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-data-relationalstore-transaction"},"sidebar":"ref","previous":{"title":"Class (LiteResultSet)","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-literesultset/arkts-apis-data-relationalstore-literesultset"},"next":{"title":"Interfaces (其他)","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-transaction/arkts-apis-data-relationalstore-transaction.md


const frontMatter = {
	title: 'Interface (Transaction)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-transaction',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-data-relationalstore-transaction'
};
const contentTitle = 'Interface (Transaction)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "commit14+",
  "id": "commit14",
  "level": 2
}, {
  "value": "rollback14+",
  "id": "rollback14",
  "level": 2
}, {
  "value": "insert14+",
  "id": "insert14",
  "level": 2
}, {
  "value": "insertSync14+",
  "id": "insertsync14",
  "level": 2
}, {
  "value": "batchInsert14+",
  "id": "batchinsert14",
  "level": 2
}, {
  "value": "batchInsertSync14+",
  "id": "batchinsertsync14",
  "level": 2
}, {
  "value": "batchInsertWithConflictResolution18+",
  "id": "batchinsertwithconflictresolution18",
  "level": 2
}, {
  "value": "batchInsertWithConflictResolutionSync18+",
  "id": "batchinsertwithconflictresolutionsync18",
  "level": 2
}, {
  "value": "batchInsertWithReturning23+",
  "id": "batchinsertwithreturning23",
  "level": 2
}, {
  "value": "batchInsertWithReturningSync23+",
  "id": "batchinsertwithreturningsync23",
  "level": 2
}, {
  "value": "update14+",
  "id": "update14",
  "level": 2
}, {
  "value": "updateSync14+",
  "id": "updatesync14",
  "level": 2
}, {
  "value": "updateWithReturning23+",
  "id": "updatewithreturning23",
  "level": 2
}, {
  "value": "updateWithReturningSync23+",
  "id": "updatewithreturningsync23",
  "level": 2
}, {
  "value": "delete14+",
  "id": "delete14",
  "level": 2
}, {
  "value": "deleteSync14+",
  "id": "deletesync14",
  "level": 2
}, {
  "value": "deleteWithReturning23+",
  "id": "deletewithreturning23",
  "level": 2
}, {
  "value": "deleteWithReturningSync23+",
  "id": "deletewithreturningsync23",
  "level": 2
}, {
  "value": "query14+",
  "id": "query14",
  "level": 2
}, {
  "value": "querySync14+",
  "id": "querysync14",
  "level": 2
}, {
  "value": "querySql14+",
  "id": "querysql14",
  "level": 2
}, {
  "value": "querySqlSync14+",
  "id": "querysqlsync14",
  "level": 2
}, {
  "value": "queryWithoutRowCount23+",
  "id": "querywithoutrowcount23",
  "level": 2
}, {
  "value": "queryWithoutRowCountSync23+",
  "id": "querywithoutrowcountsync23",
  "level": 2
}, {
  "value": "querySqlWithoutRowCount23+",
  "id": "querysqlwithoutrowcount23",
  "level": 2
}, {
  "value": "querySqlWithoutRowCountSync23+",
  "id": "querysqlwithoutrowcountsync23",
  "level": 2
}, {
  "value": "execute14+",
  "id": "execute14",
  "level": 2
}, {
  "value": "executeSync14+",
  "id": "executesync14",
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
        id: "interface-transaction",
        children: "Interface (Transaction)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供以事务方式管理数据库的方法。事务对象是通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#createtransaction14",
        children: "createTransaction"
      }), "接口创建的，不同事务对象之间的操作是隔离的，不同类型事务的区别见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#transactiontype14",
        children: "TransactionType"
      }), " 。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前关系型数据库同一时刻仅支持一个写事务，所以如果当前", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore",
        children: "RdbStore"
      }), "存在写事务未释放，创建IMMEDIATE或EXCLUSIVE事务会返回14800024错误码。如果是创建的DEFERRED事务，则可能在首次使用DEFERRED事务调用写操作时返回14800024错误码。通过IMMEDIATE或EXCLUSIVE创建写事务或者DEFERRED事务升级到写事务之后，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore",
        children: "RdbStore"
      }), "的写操作也会返回14800024错误码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当事务并发量较高且写事务持续时间较长时，返回14800024错误码的次数可能会变多，开发者可以通过减少事务占用时长减少14800024出现的次数，也可以通过重试的方式处理14800024错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用以下API前，请先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#createtransaction14",
        children: "createTransaction"
      }), "方法获取Transaction实例，再通过此实例调用对应方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(894845)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本Interface首批接口从API version 14开始支持。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例代码中this.context定义见Stage模型的应用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
        children: "Context"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { window } from '@kit.ArkUI';\n\nlet store: relationalStore.RdbStore | undefined = undefined;\n\nexport default class EntryAbility extends UIAbility {\n  async onWindowStageCreate(windowStage: window.WindowStage) {\n    const STORE_CONFIG: relationalStore.StoreConfig = {\n      name: 'RdbTest.db',\n      securityLevel: relationalStore.SecurityLevel.S3\n    };\n\n    try {\n      const rdbStore = await relationalStore.getRdbStore(this.context, STORE_CONFIG);\n      store = rdbStore;\n      console.info('Get RdbStore successfully.');\n    } catch (error) {\n      const err = error as BusinessError;\n      console.error(`Get RdbStore failed, code is ${err.code},message is ${err.message}`);\n    }\n\n    if (store != undefined) {\n      await store.executeSql('CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB, IDENTITY UNLIMITED INT, ASSETDATA ASSET, ASSETSDATA ASSETS, FLOATARRAY floatvector(128))');\n      store.createTransaction().then(async (transaction: relationalStore.Transaction) => {\n        console.info(`createTransaction success`);\n        // 成功获取到事务对象后执行后续操作\n      }).catch((err: BusinessError) => {\n        console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n      });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { relationalStore } from '@kit.ArkData';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "commit14",
      children: "commit14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "commit(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提交已执行的SQL语句，使用Promise异步回调。如果是使用异步接口执行sql语句，请确保异步接口执行完成之后再调用commit接口，否则可能会丢失SQL操作。调用commit接口之后，该Transaction对象及创建的ResultSet对象都将被关闭。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无返回结果的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Attempt to write a readonly database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      await transaction.execute('CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, age INTEGER, salary REAL)');\n      await transaction.commit();\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`execute sql failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rollback14",
      children: "rollback14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rollback(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回滚已经执行的SQL语句，使用Promise异步回调。调用rollback接口之后，该Transaction对象及创建的ResultSet对象都会被关闭。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无返回结果的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Attempt to write a readonly database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      await transaction.execute('DELETE FROM TEST WHERE age = ? OR age = ?', ['18', '20']);\n      await transaction.commit();\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`execute sql failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insert14",
      children: "insert14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "insert(table: string, values: ValuesBucket, conflict?: ConflictResolution): Promise<number>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["向目标表中插入一行数据，使用Promise异步回调。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。如果单条数据超过此限制，在后续通过RdbStore的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#query",
        children: "query"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#querysql",
        children: "querySql"
      }), "接口获取ResultSet后，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-resultset/arkts-apis-data-relationalstore-resultset#getvalue12",
        children: "getValue"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-resultset/arkts-apis-data-relationalstore-resultset#getstring",
        children: "getString"
      }), "等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的目标表名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket",
              children: "ValuesBucket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要插入到表中的数据行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
              children: "ConflictResolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定冲突解决模式。默认值是relationalStore.ConflictResolution.ON_CONFLICT_NONE。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。如果操作成功，返回行ID；否则返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Attempt to write a readonly database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const valueBucket1: relationalStore.ValuesBucket = {\n  NAME: 'Lisa',\n  AGE: 18,\n  SALARY: 100.5,\n  CODES: new Uint8Array([1, 2, 3, 4, 5])\n};\n\nif (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      const rowId = await transaction.insert('EMPLOYEE', valueBucket1, relationalStore.ConflictResolution.ON_CONFLICT_REPLACE);\n      await transaction.commit();\n      console.info(`Insert is successful, rowId = ${rowId}`);\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`Insert is failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "insertsync14",
      children: "insertSync14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "insertSync(table: string, values: ValuesBucket | sendableRelationalStore.ValuesBucket, conflict?: ConflictResolution): number"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["向目标表中插入一行数据。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。如果单条数据超过此限制，在后续通过RdbStore的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#query",
        children: "query"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#querysql",
        children: "querySql"
      }), "接口获取ResultSet后，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-resultset/arkts-apis-data-relationalstore-resultset#getvalue12",
        children: "getValue"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-resultset/arkts-apis-data-relationalstore-resultset#getstring",
        children: "getString"
      }), "等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的目标表名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket",
              children: "ValuesBucket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-sendablerelationalstore/js-apis-data-sendablerelationalstore#valuesbucket",
              children: "sendableRelationalStore.ValuesBucket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
              children: "ConflictResolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定冲突解决模式。默认值是relationalStore.ConflictResolution.ON_CONFLICT_NONE。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果操作成功，返回行ID；否则返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Attempt to write a readonly database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let value5 = 'Lisa';\nlet value6 = 18;\nlet value7 = 100.5;\nlet value8 = new Uint8Array([1, 2, 3, 4, 5]);\n\nconst valueBucket2: relationalStore.ValuesBucket = {\n  NAME: value5,\n  AGE: value6,\n  SALARY: value7,\n  CODES: value8\n};\nif (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      let rowId: number = transaction.insertSync(\n        'EMPLOYEE',\n        valueBucket2,\n        relationalStore.ConflictResolution.ON_CONFLICT_REPLACE\n      );\n      await transaction.commit();\n      console.info(`Insert is successful, rowId = ${rowId}`);\n    } catch (e) {\n      await transaction.rollback();\n      console.error(`Insert is failed, code is ${e.code},message is ${e.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "batchinsert14",
      children: "batchInsert14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "batchInsert(table: string, values: Array<ValuesBucket>): Promise<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向目标表中插入一组数据，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["按每批32766个参数，分批以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
        children: "ConflictResolution.ON_CONFLICT_REPLACE"
      }), "策略写入，参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小，中途失败则立即返回。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的目标表名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket",
              children: "ValuesBucket"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要插入到表中的一组数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。如果操作成功，返回插入的数据个数，否则返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Attempt to write a readonly database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const valueBucket3: relationalStore.ValuesBucket = {\n  NAME: 'Lisa',\n  AGE: 18,\n  SALARY: 100.5,\n  CODES: new Uint8Array([1, 2, 3, 4, 5])\n};\nconst valueBucket4: relationalStore.ValuesBucket = {\n  NAME: 'Jack',\n  AGE: 19,\n  SALARY: 101.5,\n  CODES: new Uint8Array([6, 7, 8, 9, 10])\n};\nconst valueBucket5: relationalStore.ValuesBucket = {\n  NAME: 'Tom',\n  AGE: 20,\n  SALARY: 102.5,\n  CODES: new Uint8Array([11, 12, 13, 14, 15])\n};\n\nlet valueBuckets = new Array(valueBucket3, valueBucket4, valueBucket5);\nif (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      const insertNum = await transaction.batchInsert('EMPLOYEE', valueBuckets);\n      await transaction.commit();\n      console.info(`batchInsert is successful, the number of values that were inserted = ${insertNum}`);\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`batchInsert is failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "batchinsertsync14",
      children: "batchInsertSync14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "batchInsertSync(table: string, values: Array<ValuesBucket>): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向目标表中插入一组数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["按每批32766个参数，分批以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
        children: "ConflictResolution.ON_CONFLICT_REPLACE"
      }), "策略写入，参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小，中途失败则立即返回。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的目标表名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket",
              children: "ValuesBucket"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要插入到表中的一组数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果操作成功，返回插入的数据个数，否则返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Attempt to write a readonly database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const valueBucket6: relationalStore.ValuesBucket = {\n  NAME: 'Lisa',\n  AGE: 18,\n  SALARY: 100.5,\n  CODES: new Uint8Array([1, 2, 3, 4, 5])\n};\nconst valueBucket7: relationalStore.ValuesBucket = {\n  NAME: 'Jack',\n  AGE: 19,\n  SALARY: 101.5,\n  CODES: new Uint8Array([6, 7, 8, 9, 10])\n};\nconst valueBucket8: relationalStore.ValuesBucket = {\n  NAME: 'Tom',\n  AGE: 20,\n  SALARY: 102.5,\n  CODES: new Uint8Array([11, 12, 13, 14, 15])\n};\n\nlet valueBuckets2 = new Array(valueBucket6, valueBucket7, valueBucket8);\nif (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      let insertNum: number = (transaction as relationalStore.Transaction).batchInsertSync('EMPLOYEE', valueBuckets2);\n      await transaction.commit();\n      console.info(`batchInsert is successful, the number of values that were inserted = ${insertNum}`);\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`batchInsert is failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "batchinsertwithconflictresolution18",
      children: "batchInsertWithConflictResolution18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "batchInsertWithConflictResolution(table: string, values: Array<ValuesBucket>, conflict: ConflictResolution): Promise<number>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["向目标表中插入一组数据，可以通过conflict参数指定冲突解决模式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
        children: "ConflictResolution"
      }), "，使用Promise异步回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单次插入参数的最大数量限制为32766，超出上限会返回14800000错误码。参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：插入数据的所有字段的并集大小为10，则最多可以插入3276条数据（3276*10=32760）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请确保在调用接口时遵守此限制，以避免因参数数量过多而导致错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的目标表名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket",
              children: "ValuesBucket"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要插入到表中的一组数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
              children: "ConflictResolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定冲突解决模式。如果是ON_CONFLICT_ROLLBACK模式，当发生冲突时会回滚整个事务。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。如果操作成功，返回插入的数据个数，否则返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Callback routine requested an abort."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Attempt to write a readonly database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800032"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Abort due to constraint violation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800034"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Library used incorrectly."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const valueBucket9: relationalStore.ValuesBucket = {\n  NAME: 'Lisa',\n  AGE: 18,\n  SALARY: 100.5,\n  CODES: new Uint8Array([1, 2, 3, 4, 5])\n};\nconst valueBucketA: relationalStore.ValuesBucket = {\n  NAME: 'Jack',\n  AGE: 19,\n  SALARY: 101.5,\n  CODES: new Uint8Array([6, 7, 8, 9, 10])\n};\nconst valueBucketB: relationalStore.ValuesBucket = {\n  NAME: 'Tom',\n  AGE: 20,\n  SALARY: 102.5,\n  CODES: new Uint8Array([11, 12, 13, 14, 15])\n};\n\nlet valueBuckets3 = new Array(valueBucket9, valueBucketA, valueBucketB);\n\nif (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      const insertNum = await transaction.batchInsertWithConflictResolution(\n        'EMPLOYEE',\n        valueBuckets3,\n        relationalStore.ConflictResolution.ON_CONFLICT_REPLACE\n      );\n      await transaction.commit();\n      console.info(`batchInsert is successful, the number of values that were inserted = ${insertNum}`);\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`batchInsert is failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "batchinsertwithconflictresolutionsync18",
      children: "batchInsertWithConflictResolutionSync18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "batchInsertWithConflictResolutionSync(table: string, values: Array<ValuesBucket>, conflict: ConflictResolution): number"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["向目标表中插入一组数据，可以通过conflict参数指定冲突解决模式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
        children: "ConflictResolution"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单次插入参数的最大数量限制为32766，超出上限会返回14800000错误码。参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：插入数据的所有字段的并集大小为10，则最多可以插入3276条数据（3276*10=32760）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请确保在调用接口时遵守此限制，以避免因参数数量过多而导致错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的目标表名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket",
              children: "ValuesBucket"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要插入到表中的一组数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
              children: "ConflictResolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定冲突解决模式。如果是ON_CONFLICT_ROLLBACK模式，当发生冲突时会回滚整个事务。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果操作成功，返回插入的数据个数，否则返回-1。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Callback routine requested an abort."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Attempt to write a readonly database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800032"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Abort due to constraint violation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800034"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Library used incorrectly."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const valueBucketC: relationalStore.ValuesBucket = {\n  NAME: 'Lisa',\n  AGE: 18,\n  SALARY: 100.5,\n  CODES: new Uint8Array([1, 2, 3, 4, 5])\n};\nconst valueBucketD: relationalStore.ValuesBucket = {\n  NAME: 'Jack',\n  AGE: 19,\n  SALARY: 101.5,\n  CODES: new Uint8Array([6, 7, 8, 9, 10])\n};\nconst valueBucketE: relationalStore.ValuesBucket = {\n  NAME: 'Tom',\n  AGE: 20,\n  SALARY: 102.5,\n  CODES: new Uint8Array([11, 12, 13, 14, 15])\n};\n\nlet valueBuckets4 = new Array(valueBucketC, valueBucketD, valueBucketE);\nif (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      const insertNum = transaction.batchInsertWithConflictResolutionSync(\n        'EMPLOYEE',\n        valueBuckets4,\n        relationalStore.ConflictResolution.ON_CONFLICT_REPLACE\n      );\n      await transaction.commit();\n      console.info(`batchInsert is successful, the number of values that were inserted = ${insertNum}`);\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`batchInsert is failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "batchinsertwithreturning23",
      children: "batchInsertWithReturning23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "batchInsertWithReturning(table: string, values: Array<ValuesBucket>, config: ReturningConfig, conflict?: ConflictResolution): Promise<Result>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["向目标表中插入一组数据，可以通过conflict参数指定当发生数据冲突时的解决模式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
        children: "ConflictResolution"
      }), "，返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#result23",
        children: "Result"
      }), "。使用Promise异步回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单次插入参数的最大数量限制为32766，超出上限会返回14800001错误码。参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：插入数据的所有字段的并集大小为10，则最多可以插入3276条数据（3276*10=32760）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请确保在调用接口时遵守此限制，以避免因参数数量过多而导致错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "conflict参数不建议使用ON_CONFLICT_FAIL策略，可能无法返回正确的结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅在Stage模型下可用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要插入的目标表名。注意：正确的表名不应包含空格、逗号和星号，不能以点开头和结尾等，否则会抛出参数错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket",
              children: "ValuesBucket"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要插入到表中的一组数据。注意：空数组、含有重复资产数据会抛出参数错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#returningconfig23",
              children: "ReturningConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定返回值的配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
              children: "ConflictResolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定冲突解决模式。默认为ON_CONFLICT_NONE。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#result23",
              children: "Result"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。如果操作成功，返回受影响的数据集。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1. Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800032"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Abort due to constraint violation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function transBatchInsertWithReturningExample(trans: relationalStore.Transaction)\n{\n  const valueBucket1: relationalStore.ValuesBucket = { 'NAME': 'zhangsan', 'AGE': 18 };\n  const valueBucket2: relationalStore.ValuesBucket = { 'NAME': 'lisi', 'AGE': 20 };\n  const config: relationalStore.ReturningConfig = { columns: ['NAME', 'AGE'] };\n  const valueBuckets = new Array(valueBucket1, valueBucket2);\n  try {\n    let results = await trans.batchInsertWithReturning(\"EMPLOYEE\", valueBuckets, config);\n    console.info(`transBatchInsertWithReturningExample is successful, changed is ${results.changed}`);\n    while(results.resultSet.goToNextRow()) {\n      const row = results.resultSet.getRow();\n      console.info(`transBatchInsertWithReturningExample, name is ${row['NAME']}, age is ${row['AGE']}`);\n    }\n  } catch (e) {\n    console.error(`transBatchInsertWithReturningExample failed. code is ${e.code}, message is ${e.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "batchinsertwithreturningsync23",
      children: "batchInsertWithReturningSync23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "batchInsertWithReturningSync(table: string, values: Array<ValuesBucket>, config: ReturningConfig, conflict?: ConflictResolution): Result"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["向目标表中插入一组数据，可以通过conflict参数指定当发生数据冲突时的解决模式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
        children: "ConflictResolution"
      }), "，返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#result23",
        children: "Result"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单次插入参数的最大数量限制为32766，超出上限会返回14800001错误码。参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：插入数据的所有字段的并集大小为10，则最多可以插入3276条数据（3276*10=32760）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请确保在调用接口时遵守此限制，以避免因参数数量过多而导致错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "conflict参数不建议使用ON_CONFLICT_FAIL策略，可能无法返回正确的结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅在Stage模型下可用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要插入的目标表名。注意：正确的表名不应包含空格、逗号和星号，不能以点开头和结尾等，否则会抛出参数错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket",
              children: "ValuesBucket"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要插入到表中的一组数据。注意：空数组、含有重复资产数据会抛出参数错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#returningconfig23",
              children: "ReturningConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定返回值的配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
              children: "ConflictResolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定冲突解决模式。默认为ON_CONFLICT_NONE。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#result23",
              children: "Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果操作成功，返回受影响的数据集。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1. Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800032"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Abort due to constraint violation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function transBatchInsertWithReturningSyncExample(trans: relationalStore.Transaction)\n{\n  const valueBucket1: relationalStore.ValuesBucket = { 'NAME': 'zhangsan', 'AGE': 18 };\n  const valueBucket2: relationalStore.ValuesBucket = { 'NAME': 'lisi', 'AGE': 20 };\n  const config: relationalStore.ReturningConfig = { columns: ['NAME', 'AGE'] };\n  const valueBuckets = new Array(valueBucket1, valueBucket2);\n  try {\n    let results = trans.batchInsertWithReturningSync(\"EMPLOYEE\", valueBuckets, config);\n    console.info(`transBatchInsertWithReturningSyncExample is successful, changed is ${results.changed}`);\n    while(results.resultSet.goToNextRow()) {\n      const row = results.resultSet.getRow();\n      console.info(`transBatchInsertWithReturningSyncExample, name is ${row['NAME']}, age is ${row['AGE']}`);\n    }\n  } catch (e) {\n    console.error(`transBatchInsertWithReturningSyncExample failed. code is ${e.code}, message is ${e.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update14",
      children: "update14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "update(values: ValuesBucket, predicates: RdbPredicates, conflict?: ConflictResolution): Promise<number>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据RdbPredicates的指定实例对象更新数据库中的数据，使用Promise异步回调。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。如果单条数据超过此限制，在后续通过RdbStore的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#query",
        children: "query"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#querysql",
        children: "querySql"
      }), "接口获取ResultSet后，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-resultset/arkts-apis-data-relationalstore-resultset#getvalue12",
        children: "getValue"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-resultset/arkts-apis-data-relationalstore-resultset#getstring",
        children: "getString"
      }), "等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket",
              children: "ValuesBucket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates",
              children: "RdbPredicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RdbPredicates的实例对象指定的更新条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
              children: "ConflictResolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定冲突解决模式。默认值是relationalStore.ConflictResolution.ON_CONFLICT_NONE。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的Promise回调方法。返回受影响的行数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Attempt to write a readonly database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const valueBucketF: relationalStore.ValuesBucket = {\n  NAME: 'Rose',\n  AGE: 22,\n  SALARY: 200.5,\n  CODES: new Uint8Array([1, 2, 3, 4, 5])\n};\nlet predicates = new relationalStore.RdbPredicates('EMPLOYEE');\npredicates.equalTo('NAME', 'Lisa');\n\nif (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      const rows = await transaction.update(valueBucketF, predicates, relationalStore.ConflictResolution.ON_CONFLICT_REPLACE);\n      await transaction.commit();\n      console.info(`Updated row count: ${rows}`);\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`Updated failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "updatesync14",
      children: "updateSync14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateSync(values: ValuesBucket, predicates: RdbPredicates, conflict?: ConflictResolution): number"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据RdbPredicates的指定实例对象更新数据库中的数据。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。如果单条数据超过此限制，在后续通过RdbStore的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#query",
        children: "query"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#querysql",
        children: "querySql"
      }), "接口获取ResultSet后，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-resultset/arkts-apis-data-relationalstore-resultset#getvalue12",
        children: "getValue"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-resultset/arkts-apis-data-relationalstore-resultset#getstring",
        children: "getString"
      }), "等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket",
              children: "ValuesBucket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates",
              children: "RdbPredicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RdbPredicates的实例对象指定的更新条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
              children: "ConflictResolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定冲突解决模式。默认值是relationalStore.ConflictResolution.ON_CONFLICT_NONE。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回受影响的行数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Attempt to write a readonly database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const valueBucketG: relationalStore.ValuesBucket = {\n  NAME: 'Rose',\n  AGE: 22,\n  SALARY: 200.5,\n  CODES: new Uint8Array([1, 2, 3, 4, 5])\n};\nlet predicates1 = new relationalStore.RdbPredicates('EMPLOYEE');\npredicates1.equalTo('NAME', 'Lisa');\n\nif (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      let rows = transaction.updateSync(valueBucketG, predicates1, relationalStore.ConflictResolution.ON_CONFLICT_REPLACE);\n      await transaction.commit();\n      console.info(`Updated row count: ${rows}`);\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`Updated failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "updatewithreturning23",
      children: "updateWithReturning23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateWithReturning(values: ValuesBucket, predicates: RdbPredicates, config: ReturningConfig, conflict?: ConflictResolution): Promise<Result>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据RdbPredicates的指定实例对象更新数据库中的数据，可以通过conflict参数指定当发生数据冲突时的解决模式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
        children: "ConflictResolution"
      }), "，返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#result23",
        children: "Result"
      }), "，使用Promise异步回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "conflict参数不建议使用ON_CONFLICT_FAIL策略，可能无法返回正确的结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅在Stage模型下可用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket",
              children: "ValuesBucket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates",
              children: "RdbPredicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RdbPredicates的实例对象指定的更新条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#returningconfig23",
              children: "ReturningConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定返回值的配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
              children: "ConflictResolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定冲突解决模式。默认为ON_CONFLICT_NONE。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#result23",
              children: "Result"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。如果操作成功，返回受影响的数据集。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1. Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800032"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Abort due to constraint violation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function transUpdateWithReturningExample(trans: relationalStore.Transaction)\n{\n  const valueBucket1: relationalStore.ValuesBucket = { 'NAME': 'lisi', 'AGE': 21 };\n  const valueBucket2: relationalStore.ValuesBucket = { 'NAME': 'lisi', 'AGE': 18 };\n  let predicates = new relationalStore.RdbPredicates(\"EMPLOYEE\");\n  predicates.equalTo('NAME', 'lisi');\n  const config: relationalStore.ReturningConfig = { columns: ['NAME', 'AGE'] };\n  try {\n    trans.batchInsertWithReturningSync(\"EMPLOYEE\", [valueBucket1, valueBucket2], config);\n    valueBucket1['NAME'] = \"zhangsan\";\n    valueBucket1['AGE'] = 18;\n    let results = await trans.updateWithReturning(valueBucket1, predicates, config);\n    console.info(`transUpdateWithReturningExample is successful, changed is ${results.changed}`);\n    while(results.resultSet.goToNextRow()) {\n      const row = results.resultSet.getRow();\n      console.info(`transUpdateWithReturningExample, name is ${row['NAME']}, age is ${row['AGE']}`);\n    }\n  } catch (e) {\n    console.error(`transUpdateWithReturningExample failed. code is ${e.code}, message is ${e.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "updatewithreturningsync23",
      children: "updateWithReturningSync23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "updateWithReturningSync(values: ValuesBucket, predicates: RdbPredicates, config: ReturningConfig, conflict?: ConflictResolution): Result"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据RdbPredicates的指定实例对象更新数据库中的数据，可以通过conflict参数指定当发生数据冲突时的解决模式", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
        children: "ConflictResolution"
      }), "，返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#result23",
        children: "Result"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "conflict参数不建议使用ON_CONFLICT_FAIL策略，可能无法返回正确的结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅在Stage模型下可用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket",
              children: "ValuesBucket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates",
              children: "RdbPredicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RdbPredicates的实例对象指定的更新条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#returningconfig23",
              children: "ReturningConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定返回值的配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#conflictresolution10",
              children: "ConflictResolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定冲突解决模式。默认为ON_CONFLICT_NONE。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#result23",
              children: "Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果操作成功，返回受影响的数据集。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1. Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800032"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Abort due to constraint violation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function transUpdateWithReturningSyncExample(trans: relationalStore.Transaction)\n{\n  const valueBucket1: relationalStore.ValuesBucket = { 'NAME': 'lisi', 'AGE': 21 };\n  const valueBucket2: relationalStore.ValuesBucket = { 'NAME': 'lisi', 'AGE': 18 };\n  let predicates = new relationalStore.RdbPredicates(\"EMPLOYEE\");\n  predicates.equalTo('NAME', 'lisi');\n  const config: relationalStore.ReturningConfig = { columns: ['NAME', 'AGE'] };\n  try {\n    trans.batchInsertWithReturningSync(\"EMPLOYEE\", [valueBucket1, valueBucket2], config);\n    valueBucket1['NAME'] = \"zhangsan\";\n    valueBucket1['AGE'] = 18;\n    let results = trans.updateWithReturningSync(valueBucket1, predicates, config);\n    console.info(`transUpdateWithReturningSyncExample is successful, changed is ${results.changed}`);\n    while(results.resultSet.goToNextRow()) {\n      const row = results.resultSet.getRow();\n      console.info(`transUpdateWithReturningSyncExample, name is ${row['NAME']}, age is ${row['AGE']}`);\n    }\n  } catch (e) {\n    console.error(`transUpdateWithReturningSyncExample failed. code is ${e.code}, message is ${e.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete14",
      children: "delete14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "delete(predicates: RdbPredicates):Promise<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据RdbPredicates的指定实例对象从数据库中删除数据，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates",
              children: "RdbPredicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RdbPredicates的实例对象指定的删除条件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。返回受影响的行数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Attempt to write a readonly database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let predicates2 = new relationalStore.RdbPredicates('EMPLOYEE');\npredicates2.equalTo('NAME', 'Lisa');\n\nif (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      const rows = await transaction.delete(predicates2);\n      await transaction.commit();\n      console.info(`Delete rows: ${rows}`);\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`Delete failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deletesync14",
      children: "deleteSync14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "deleteSync(predicates: RdbPredicates): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据RdbPredicates的指定实例对象从数据库中删除数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates",
              children: "RdbPredicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RdbPredicates的实例对象指定的删除条件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回受影响的行数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Attempt to write a readonly database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let predicates3 = new relationalStore.RdbPredicates('EMPLOYEE');\npredicates3.equalTo('NAME', 'Lisa');\nif (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      let rows = transaction.deleteSync(predicates3);\n      await transaction.commit();\n      console.info(`Delete rows: ${rows}`);\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`Delete failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deletewithreturning23",
      children: "deleteWithReturning23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "deleteWithReturning(predicates: RdbPredicates, config: ReturningConfig): Promise<Result>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据RdbPredicates的实例对象从数据库中删除数据，返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#result23",
        children: "Result"
      }), "，使用Promise异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅在Stage模型下可用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates",
              children: "RdbPredicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RdbPredicates的实例对象指定的删除条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#returningconfig23",
              children: "ReturningConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定返回值的配置信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#result23",
              children: "Result"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。如果操作成功，返回受影响的数据集。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1. Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800032"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Abort due to constraint violation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function transDeleteWithReturningExample(trans: relationalStore.Transaction)\n{\n  const valueBucket1: relationalStore.ValuesBucket = { 'NAME': 'lisi', 'AGE': 21 };\n  const valueBucket2: relationalStore.ValuesBucket = { 'NAME': 'zhangsan', 'AGE': 18 };\n  let predicates = new relationalStore.RdbPredicates(\"EMPLOYEE\");\n  const config: relationalStore.ReturningConfig = { columns: ['NAME', 'AGE'] };\n  try {\n    trans.batchInsertWithReturningSync(\"EMPLOYEE\", [valueBucket1, valueBucket2], config);\n    let results = await trans.deleteWithReturning(predicates, config);\n    console.info(`transDeleteWithReturningExample is successful, changed is ${results.changed}`);\n    while(results.resultSet.goToNextRow()) {\n      const row = results.resultSet.getRow();\n      console.info(`transDeleteWithReturningExample, name is ${row['NAME']}, age is ${row['AGE']}`);\n    }\n  } catch (e) {\n    console.error(`transDeleteWithReturningExample failed. code is ${e.code}, message is ${e.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deletewithreturningsync23",
      children: "deleteWithReturningSync23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "deleteWithReturningSync(predicates: RdbPredicates, config: ReturningConfig): Result"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据RdbPredicates的实例对象从数据库中删除数据，返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#result23",
        children: "Result"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅在Stage模型下可用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates",
              children: "RdbPredicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RdbPredicates的实例对象指定的删除条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#returningconfig23",
              children: "ReturningConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定返回值的配置信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#result23",
              children: "Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果操作成功，返回受影响的数据集。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1. Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800032"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Abort due to constraint violation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function transDeleteWithReturningSyncExample(trans: relationalStore.Transaction)\n{\n  const valueBucket1: relationalStore.ValuesBucket = { 'NAME': 'lisi', 'AGE': 21 };\n  const valueBucket2: relationalStore.ValuesBucket = { 'NAME': 'zhangsan', 'AGE': 18 };\n  let predicates = new relationalStore.RdbPredicates(\"EMPLOYEE\");\n  const config: relationalStore.ReturningConfig = { columns: ['NAME', 'AGE'] };\n  try {\n    trans.batchInsertWithReturningSync(\"EMPLOYEE\", [valueBucket1, valueBucket2], config);\n    let results = trans.deleteWithReturningSync(predicates, config);\n    console.info(`transDeleteWithReturningSyncExample is successful, changed is ${results.changed}`);\n    while(results.resultSet.goToNextRow()) {\n      const row = results.resultSet.getRow();\n      console.info(`transDeleteWithReturningSyncExample, name is ${row['NAME']}, age is ${row['AGE']}`);\n    }\n  } catch (e) {\n    console.error(`transDeleteWithReturningSyncExample failed. code is ${e.code}, message is ${e.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "query14",
      children: "query14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "query(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定条件查询数据库中的数据，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates",
              children: "RdbPredicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RdbPredicates的实例对象指定的查询条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要查询的列。如果值为空，则查询应用于所有列。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-resultset/arkts-apis-data-relationalstore-resultset",
              children: "ResultSet"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。如果操作成功，则返回ResultSet对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let predicates4 = new relationalStore.RdbPredicates('EMPLOYEE');\npredicates4.equalTo('NAME', 'Rose');\n\nif (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      const resultSet = await transaction.query(predicates4, ['ID', 'NAME', 'AGE', 'SALARY', 'CODES']);\n      console.info(`ResultSet column names: ${resultSet.columnNames}, column count: ${resultSet.columnCount}`);\n      // resultSet是一个数据集合的游标，默认指向第-1个记录，有效的数据从0开始。\n      while (resultSet.goToNextRow()) {\n        const id = resultSet.getLong(resultSet.getColumnIndex('ID'));\n        const name = resultSet.getString(resultSet.getColumnIndex('NAME'));\n        const age = resultSet.getLong(resultSet.getColumnIndex('AGE'));\n        const salary = resultSet.getDouble(resultSet.getColumnIndex('SALARY'));\n        console.info(`id=${id}, name=${name}, age=${age}, salary=${salary}`);\n      }\n      // 释放数据集的内存，若不释放可能会引起fd泄露与内存泄露\n      resultSet.close();\n      await transaction.commit();\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`Query failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "querysync14",
      children: "querySync14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "querySync(predicates: RdbPredicates, columns?: Array<string>): ResultSet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据指定条件查询数据库中的数据。对query同步接口获得的resultSet进行操作时，若逻辑复杂且循环次数过多，可能造成freeze问题，建议将此步骤放到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool",
        children: "taskpool"
      }), "线程中执行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates",
              children: "RdbPredicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RdbPredicates的实例对象指定的查询条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要查询的列。如果值为空，则查询应用于所有列。默认值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-resultset/arkts-apis-data-relationalstore-resultset",
              children: "ResultSet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果操作成功，则返回ResultSet对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let predicates5 = new relationalStore.RdbPredicates('EMPLOYEE');\npredicates5.equalTo('NAME', 'Rose');\n\nif (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      let resultSet = transaction.querySync(predicates5, ['ID', 'NAME', 'AGE', 'SALARY', 'CODES']);\n      console.info(`ResultSet column names: ${resultSet.columnNames}, column count: ${resultSet.columnCount}`);\n      // resultSet是一个数据集合的游标，默认指向第-1个记录，有效的数据从0开始。\n      while (resultSet.goToNextRow()) {\n        const id = resultSet.getLong(resultSet.getColumnIndex('ID'));\n        const name = resultSet.getString(resultSet.getColumnIndex('NAME'));\n        const age = resultSet.getLong(resultSet.getColumnIndex('AGE'));\n        const salary = resultSet.getDouble(resultSet.getColumnIndex('SALARY'));\n        console.info(`id=${id}, name=${name}, age=${age}, salary=${salary}`);\n      }\n      // 释放数据集的内存，若不释放可能会引起fd泄露与内存泄露\n      resultSet.close();\n      await transaction.commit();\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`Query failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "querysql14",
      children: "querySql14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "querySql(sql: string, args?: Array<ValueType>): Promise<ResultSet>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定SQL语句查询数据库中的数据，SQL语句中的各种表达式和操作符之间的关系操作符号不超过1000个，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sql"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要执行的SQL语句。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "args"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuetype",
              children: "ValueType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-resultset/arkts-apis-data-relationalstore-resultset",
              children: "ResultSet"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。如果操作成功，则返回ResultSet对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      const resultSet = await transaction.querySql(\"SELECT * FROM EMPLOYEE CROSS JOIN BOOK WHERE BOOK.NAME = 'sanguo'\");\n      console.info(`ResultSet column names: ${resultSet.columnNames}, column count: ${resultSet.columnCount}`);\n      // resultSet是一个数据集合的游标，默认指向第-1个记录，有效的数据从0开始。\n      while (resultSet.goToNextRow()) {\n        const id = resultSet.getLong(resultSet.getColumnIndex('ID'));\n        const name = resultSet.getString(resultSet.getColumnIndex('NAME'));\n        const age = resultSet.getLong(resultSet.getColumnIndex('AGE'));\n        const salary = resultSet.getDouble(resultSet.getColumnIndex('SALARY'));\n        console.info(`id=${id}, name=${name}, age=${age}, salary=${salary}`);\n      }\n      // 释放数据集的内存，若不释放可能会引起fd泄露与内存泄露\n      resultSet.close();\n      await transaction.commit();\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`Query failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "querysqlsync14",
      children: "querySqlSync14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "querySqlSync(sql: string, args?: Array<ValueType>): ResultSet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据指定SQL语句查询数据库中的数据，SQL语句中的各种表达式和操作符之间的关系操作符号不超过1000个。对query同步接口获得的resultSet进行操作时，若逻辑复杂且循环次数过多，可能造成freeze问题，建议将此步骤放到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool",
        children: "taskpool"
      }), "线程中执行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sql"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要执行的SQL语句。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "args"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuetype",
              children: "ValueType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-resultset/arkts-apis-data-relationalstore-resultset",
              children: "ResultSet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果操作成功，则返回ResultSet对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      let resultSet = transaction.querySqlSync(\"SELECT * FROM EMPLOYEE CROSS JOIN BOOK WHERE BOOK.NAME = 'sanguo'\");\n      console.info(`ResultSet column names: ${resultSet.columnNames}, column count: ${resultSet.columnCount}`);\n      // resultSet是一个数据集合的游标，默认指向第-1个记录，有效的数据从0开始。\n      while (resultSet.goToNextRow()) {\n        const id = resultSet.getLong(resultSet.getColumnIndex('ID'));\n        const name = resultSet.getString(resultSet.getColumnIndex('NAME'));\n        const age = resultSet.getLong(resultSet.getColumnIndex('AGE'));\n        const salary = resultSet.getDouble(resultSet.getColumnIndex('SALARY'));\n        console.info(`id=${id}, name=${name}, age=${age}, salary=${salary}`);\n      }\n      // 释放数据集的内存，若不释放可能会引起fd泄露与内存泄露\n      resultSet.close();\n      await transaction.commit();\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`Query failed, code is ${err.code},message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "querywithoutrowcount23",
      children: "queryWithoutRowCount23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "queryWithoutRowCount(predicates: RdbPredicates, columns?: Array<string>): Promise<LiteResultSet>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据指定条件查询数据库中的数据，查询时不计算行数，性能优于", (0,jsx_runtime.jsx)(_components.a, {
        href: "#query14",
        children: "query"
      }), "接口。使用Promise异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅在Stage模型下可用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates",
              children: "RdbPredicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RdbPredicates的实例对象指定的查询条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要查询的列。如果值为空，则查询应用于所有列。默认值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-literesultset/arkts-apis-data-relationalstore-literesultset",
              children: "LiteResultSet"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果操作成功，则返回LiteResultSet对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function queryWithoutRowCountExample(store : relationalStore.RdbStore) {\n  let predicates = new relationalStore.RdbPredicates(\"EMPLOYEE\");\n  predicates.equalTo(\"NAME\", \"Rose\");\n  if (store != undefined) {\n    try {\n      const transaction = await store.createTransaction();\n      let resultSet: relationalStore.LiteResultSet | undefined;\n      try {\n        resultSet = await transaction.queryWithoutRowCount(predicates, [\"ID\", \"NAME\", \"AGE\", \"SALARY\", \"CODES\"]);\n        if (resultSet != undefined) {\n          // resultSet是一个数据集合的游标，默认指向第-1个记录，有效的数据从0开始。\n          while (resultSet.goToNextRow()) {\n            const id = resultSet.getLong(resultSet.getColumnIndex(\"ID\"));\n            const name = resultSet.getString(resultSet.getColumnIndex(\"NAME\"));\n            const age = resultSet.getLong(resultSet.getColumnIndex(\"AGE\"));\n            const salary = resultSet.getDouble(resultSet.getColumnIndex(\"SALARY\"));\n            console.info(`id=${id}, name=${name}, age=${age}, salary=${salary}`);\n          }\n          // 释放数据集的内存，若不释放可能会引起fd泄露与内存泄露\n          resultSet.close();\n        }\n        await transaction.commit();\n      } catch (err) {\n        console.error(`Query failed, code is ${err.code}, message is ${err.message}`);\n        // 释放数据集的内存，若不释放可能会引起fd泄露与内存泄露\n        if (resultSet != undefined) {\n          resultSet.close();\n        }\n        await transaction.rollback();\n      }\n    } catch (err) {\n      console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "querywithoutrowcountsync23",
      children: "queryWithoutRowCountSync23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "queryWithoutRowCountSync(predicates: RdbPredicates, columns?: Array<string>): LiteResultSet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据指定条件查询数据库中的数据，查询时不计算行数。对queryWithoutRowCountSync同步接口获得的LiteResultSet进行操作时，若逻辑复杂且循环次数过多，可能造成freeze问题，建议将此步骤放到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool",
        children: "taskpool"
      }), "线程中执行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅在Stage模型下可用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "predicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbpredicates/arkts-apis-data-relationalstore-rdbpredicates",
              children: "RdbPredicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RdbPredicates的实例对象指定的查询条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要查询的列。如果值为空，则查询应用于所有列。默认值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-literesultset/arkts-apis-data-relationalstore-literesultset",
              children: "LiteResultSet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果操作成功，则返回LiteResultSet对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function queryWithoutRowCountSyncExample(store : relationalStore.RdbStore) {\n  let predicates = new relationalStore.RdbPredicates(\"EMPLOYEE\");\n  predicates.equalTo(\"NAME\", \"Rose\");\n  if (store != undefined) {\n    try {\n      const transaction = await store.createTransaction();\n      let resultSet: relationalStore.LiteResultSet | undefined;\n      try {\n        resultSet = transaction.queryWithoutRowCountSync(predicates, [\"ID\", \"NAME\", \"AGE\", \"SALARY\", \"CODES\"]);\n        if (resultSet != undefined) {\n          // resultSet是一个数据集合的游标，默认指向第-1个记录，有效的数据从0开始。\n          while (resultSet.goToNextRow()) {\n            const id = resultSet.getLong(resultSet.getColumnIndex(\"ID\"));\n            const name = resultSet.getString(resultSet.getColumnIndex(\"NAME\"));\n            const age = resultSet.getLong(resultSet.getColumnIndex(\"AGE\"));\n            const salary = resultSet.getDouble(resultSet.getColumnIndex(\"SALARY\"));\n            console.info(`id=${id}, name=${name}, age=${age}, salary=${salary}`);\n          }\n          // 释放数据集的内存，若不释放可能会引起fd泄露与内存泄露\n          resultSet.close();\n        }\n        await transaction.commit();\n      } catch (err) {\n        console.error(`Query failed, code is ${err.code}, message is ${err.message}`);\n        // 释放数据集的内存，若不释放可能会引起fd泄露与内存泄露\n        if (resultSet != undefined) {\n          resultSet.close();\n        }\n        await transaction.rollback();\n      }\n    } catch (err) {\n      console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "querysqlwithoutrowcount23",
      children: "querySqlWithoutRowCount23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "querySqlWithoutRowCount(sql: string, bindArgs?: Array<ValueType>): Promise<LiteResultSet>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据指定条件查询数据库中的数据，查询时不计算行数。使用Promise异步回调。性能优于", (0,jsx_runtime.jsx)(_components.a, {
        href: "#querysql14",
        children: "querySql"
      }), "接口。SQL语句中的各种表达式和操作符之间的关系操作符号不超过1000个。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅在Stage模型下可用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sql"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要执行的SQL语句。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bindArgs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuetype",
              children: "ValueType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-literesultset/arkts-apis-data-relationalstore-literesultset",
              children: "LiteResultSet"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。如果操作成功，则返回LiteResultSet对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1.Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function querySqlWithoutRowCountExample(store : relationalStore.RdbStore) {\n  if (store != undefined) {\n    try {\n    const transaction = await store.createTransaction();\n    let resultSet: relationalStore.LiteResultSet | undefined;\n      try {\n        resultSet = await transaction.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n        if (resultSet != undefined) {\n          // resultSet是一个数据集合的游标，默认指向第-1个记录，有效的数据从0开始。\n          while (resultSet.goToNextRow()) {\n            const id = resultSet.getLong(resultSet.getColumnIndex(\"ID\"));\n            const name = resultSet.getString(resultSet.getColumnIndex(\"NAME\"));\n            const age = resultSet.getLong(resultSet.getColumnIndex(\"AGE\"));\n            const salary = resultSet.getDouble(resultSet.getColumnIndex(\"SALARY\"));\n            console.info(`id=${id}, name=${name}, age=${age}, salary=${salary}`);\n          }\n          // 释放数据集的内存，若不释放可能会引起fd泄露与内存泄露\n          resultSet.close();\n        }\n        await transaction.commit();\n      } catch (err) {\n        console.error(`Query failed, code is ${err.code}, message is ${err.message}`);\n        // 释放数据集的内存，若不释放可能会引起fd泄露与内存泄露\n        if (resultSet != undefined) {\n          resultSet.close();\n        }\n        await transaction.rollback();\n      }\n    } catch (err) {\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "querysqlwithoutrowcountsync23",
      children: "querySqlWithoutRowCountSync23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "querySqlWithoutRowCountSync(sql: string, bindArgs?: Array<ValueType>):LiteResultSet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据指定SQL语句查询数据库中的数据，查询时不计算行数。SQL语句中的各种表达式和操作符之间的关系操作符号不超过1000个。对querySqlWithoutRowCountSync同步接口获得的LiteResultSet进行操作时，若逻辑复杂且循环次数过多，可能造成freeze问题，建议将此步骤放到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool",
        children: "taskpool"
      }), "线程中执行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅在Stage模型下可用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sql"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要执行的SQL语句。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bindArgs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuetype",
              children: "ValueType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-literesultset/arkts-apis-data-relationalstore-literesultset",
              children: "LiteResultSet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果操作成功，则返回LiteResultSet对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1.Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function querySqlWithoutRowCountSyncExample(store : relationalStore.RdbStore) {\n  if (store != undefined) {\n    try {\n    const transaction = await store.createTransaction();\n    let resultSet: relationalStore.LiteResultSet | undefined;\n      try {\n        resultSet = transaction.querySqlWithoutRowCountSync('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n        if (resultSet != undefined) {\n          // resultSet是一个数据集合的游标，默认指向第-1个记录，有效的数据从0开始。\n          while (resultSet.goToNextRow()) {\n            const id = resultSet.getLong(resultSet.getColumnIndex(\"ID\"));\n            const name = resultSet.getString(resultSet.getColumnIndex(\"NAME\"));\n            const age = resultSet.getLong(resultSet.getColumnIndex(\"AGE\"));\n            const salary = resultSet.getDouble(resultSet.getColumnIndex(\"SALARY\"));\n            console.info(`id=${id}, name=${name}, age=${age}, salary=${salary}`);\n          }\n          // 释放数据集的内存，若不释放可能会引起fd泄露与内存泄露\n          resultSet.close();\n        }\n        await transaction.commit();\n      } catch (err) {\n        console.error(`Query failed, code is ${err.code}, message is ${err.message}`);\n        // 释放数据集的内存，若不释放可能会引起fd泄露与内存泄露\n        if (resultSet != undefined) {\n          resultSet.close();\n        }\n        await transaction.rollback();\n      }\n    } catch (err) {\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "execute14",
      children: "execute14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "execute(sql: string, args?: Array<ValueType>): Promise<ValueType>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行包含指定参数的SQL语句，语句中的各种表达式和操作符之间的关系操作符号不超过1000个，返回值类型为ValueType，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口支持执行增删改操作，支持执行PRAGMA语法的sql，支持对表的操作（建表、删表、修改表），返回结果类型由执行具体sql的结果决定。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此接口不支持执行查询、附加数据库和事务操作，查询可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#querysql14",
        children: "querySql"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#query14",
        children: "query"
      }), "接口代替、附加数据库可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#attach12",
        children: "attach"
      }), "接口代替。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持分号分隔的多条语句。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持开头包含注释的语句。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sql"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要执行的SQL语句。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "args"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuetype",
              children: "ValueType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuetype",
              children: "ValueType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回sql执行后的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported the sql(attach,begin,commit,rollback etc.)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Attempt to write a readonly database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      // 删除表中所有数据\n      const SQL_DELETE_TABLE = 'DELETE FROM EMPLOYEE';\n      const data = await transaction.execute(SQL_DELETE_TABLE);\n      await transaction.commit();\n      console.info(`delete result: ${data}`);\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`delete failed, code is ${err.code}, message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executesync14",
      children: "executeSync14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "executeSync(sql: string, args?: Array<ValueType>): ValueType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行包含指定参数的SQL语句，语句中的各种表达式和操作符之间的关系操作符号不超过1000个，返回值类型为ValueType。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口支持执行增删改操作，支持执行PRAGMA语法的sql，支持对表的操作（建表、删表、修改表），返回结果类型由执行具体sql的结果决定。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此接口不支持执行查询、附加数据库和事务操作，查询可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#querysql14",
        children: "querySql"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#query14",
        children: "query"
      }), "接口代替、附加数据库可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#attach12",
        children: "attach"
      }), "接口代替。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持分号分隔的多条语句。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持开头包含注释的语句。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sql"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要执行的SQL语句。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "args"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuetype",
              children: "ValueType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL语句中参数的值。该值与sql参数语句中的占位符相对应。该参数不填，或者填null或undefined，都认为是sql参数语句完整。默认值为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuetype",
              children: "ValueType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回sql执行后的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
        children: "关系型数据库错误码"
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误码ID"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "错误信息"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported the sql(attach,begin,commit,rollback etc.)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Access permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database file is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: A table in the database is locked."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Attempt to write a readonly database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Some kind of disk I/O error occurred."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800029"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: The database is full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800033"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Data type mismatch."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The WAL file size exceeds the default limit."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 删除表中所有数据\nif (store != undefined) {\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      const SQL_DELETE_TABLE = 'DELETE FROM EMPLOYEE';\n      let data = transaction.executeSync(SQL_DELETE_TABLE);\n      await transaction.commit();\n      console.info(`delete result: ${data}`);\n    } catch (error) {\n      const err = error as BusinessError;\n      await transaction.rollback();\n      console.error(`delete failed, code is ${err.code}, message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    console.error(`createTransaction failed, code is ${err.code},message is ${err.message}`);\n  }\n}\n"
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
894845(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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