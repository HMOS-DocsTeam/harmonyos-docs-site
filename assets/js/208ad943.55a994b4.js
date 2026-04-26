"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["611835"], {
418362(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_data_reliability_security_data_backup_and_restore_data_backup_and_restore_md_208_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-data-reliability-security-data-backup-and-restore-data-backup-and-restore-md-208.json
var site_docs_arkdata_data_reliability_security_data_backup_and_restore_data_backup_and_restore_md_208_namespaceObject = JSON.parse('{"id":"arkdata/data-reliability-security/data-backup-and-restore/data-backup-and-restore","title":"数据库备份与恢复 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/data-reliability-security/data-backup-and-restore/data-backup-and-restore.md","sourceDirName":"arkdata/data-reliability-security/data-backup-and-restore","slug":"/arkdata/data-reliability-security/data-backup-and-restore/","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/data-backup-and-restore/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"数据库备份与恢复 (ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-backup-and-restore","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"数据可靠性与安全性概述","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/data-reliability-security-overview/"},"next":{"title":"数据库备份与恢复 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/native-backup-and-restore/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/data-reliability-security/data-backup-and-restore/data-backup-and-restore.md


const frontMatter = {
	title: '数据库备份与恢复 (ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-backup-and-restore',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '数据库备份与恢复 (ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "键值型数据库备份、恢复与删除",
  "id": "键值型数据库备份恢复与删除",
  "level": 2
}, {
  "value": "关系型数据库备份",
  "id": "关系型数据库备份",
  "level": 2
}, {
  "value": "手动备份",
  "id": "手动备份",
  "level": 3
}, {
  "value": "关系型数据库异常重建",
  "id": "关系型数据库异常重建",
  "level": 2
}, {
  "value": "关系型数据库数据恢复",
  "id": "关系型数据库数据恢复",
  "level": 2
}, {
  "value": "恢复手动备份数据",
  "id": "恢复手动备份数据",
  "level": 3
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
    h3: "h3",
    header: "header",
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
        id: "数据库备份与恢复-arkts",
        children: "数据库备份与恢复 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果操作或存储的过程中出现问题，开发者可以使用恢复功能，将数据库恢复到之前的状态，重新对数据库进行操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在数据库被篡改、删除、或者设备断电场景下，数据库可能会因为数据丢失、数据损坏、脏数据等而不可用，可以通过数据库的备份恢复能力将数据库恢复至可用状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键值型数据库和关系型数据库均支持对数据库的备份和恢复。另外，键值型数据库还支持删除数据库备份，以释放本地存储空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "键值型数据库备份恢复与删除",
      children: "键值型数据库备份、恢复与删除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["键值型数据库，通过backup接口实现数据库备份，通过restore接口实现数据库恢复，通过deletebackup接口删除数据库备份。具体接口及功能，可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-distributedkvstore/js-apis-distributedkvstore",
        children: "分布式键值数据库"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建数据库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(1) 创建kvManager。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(2) 配置数据库参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(3) 创建kvStore。"
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
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用put()方法插入数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public Put = (() => {\n  Logger.info('Put start');\n  if (kvStore === undefined) {\n    Logger.info('Put: kvStore not initialized');\n    return;\n  }\n  const KEY_TEST_STRING_ELEMENT = 'key_test_string';\n  // 如果未定义Schema则Value可以传其他符合要求的值。\n  const VALUE_TEST_STRING_ELEMENT = '{\"id\":0, \"name\":\"lisi\"}';\n  try {\n    kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT, (err) => {\n      if (err !== undefined) {\n        Logger.error(`Failed to put data. Code:${err.code},message:${err.message}`);\n        return;\n      }\n      Logger.info('Succeeded in putting data.');\n    });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用backup()方法备份数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public Backup = (() => {\n  Logger.info('Backup start');\n  if (kvStore === undefined) {\n    Logger.info('Backup: kvStore not initialized');\n    return;\n  }\n  let backupFile = 'BK001';\n  try {\n    kvStore.backup(backupFile, (err) => {\n      if (err) {\n        Logger.error(`Fail to backup data.code:${err.code},message:${err.message}`);\n      } else {\n        Logger.info('Succeeded in backing up data.');\n      }\n    });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用delete()方法删除数据（模拟意外删除、篡改场景）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public Delete = (() => {\n  Logger.info('DeleteData start');\n  if (kvStore === undefined) {\n    Logger.info('DeleteData: kvStore not initialized');\n    return;\n  }\n  const KEY_TEST_STRING_ELEMENT = 'key_test_string';\n  try {\n    kvStore.delete(KEY_TEST_STRING_ELEMENT, (err) => {\n      if (err !== undefined) {\n        Logger.error(`Failed to delete data. Code:${err.code},message:${err.message}`);\n        return;\n      }\n      Logger.info('Succeeded in deleting data.');\n    });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用restore()方法恢复数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public Restore = (() => {\n  Logger.info('Restore start');\n  if (kvStore === undefined) {\n    Logger.info('Restore: kvStore not initialized');\n    return;\n  }\n  let backupFile = 'BK001';\n  try {\n    kvStore.restore(backupFile, (err) => {\n      if (err) {\n        Logger.error(`Fail to restore data. Code:${err.code},message:${err.message}`);\n      } else {\n        Logger.info('Succeeded in restoring data.');\n      }\n    });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当本地设备存储空间有限或需要重新备份时，还可使用deleteBackup()方法删除备份，释放存储空间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public DeleteBackup = (() => {\n  Logger.info('DeleteBackup start');\n  if (kvStore === undefined) {\n    Logger.info('DeleteBackup: kvStore not initialized');\n    return;\n  }\n  let backupFile = 'BK001';\n  let files = [backupFile];\n  try {\n    kvStore.deleteBackup(files, (err: BusinessError, data: [string, number][]) => {\n      if (err) {\n        Logger.error(`Failed to delete Backup.code is ${err.code},message is ${err.message}`);\n      } else {\n        Logger.info(`Succeed in deleting Backup.data=${data}`);\n      }\n    });\n  } catch (e) {\n    let error = e as BusinessError;\n    Logger.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);\n  }\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关系型数据库备份",
      children: "关系型数据库备份"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库操作或者存储过程中，有可能会因为各种原因发生非预期的数据库异常的情况，可以根据需要使用关系型数据库的备份能力，以便在数据库异常时，可靠高效地恢复数据保证业务数据正常使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关系型数据库支持手动备份和自动备份（仅系统应用可用）两种方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "手动备份",
      children: "手动备份"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["手动备份：通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#backup",
        children: "backup"
      }), "接口实现数据库手动备份。示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { relationalStore } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit'\nimport { UIContext } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* context为应用的上下文信息，由调用方自行获取，此处仅为示例。 */\nconst context = new UIContext().getHostContext() as common.UIAbilityContext;\nlet store: relationalStore.RdbStore | undefined = undefined;\nconst STORE_CONFIG: relationalStore.StoreConfig = {\n  name: 'RdbTest.db',\n  securityLevel: relationalStore.SecurityLevel.S3\n};\ntry {\n  store = await relationalStore.getRdbStore(context, STORE_CONFIG);\n  await store.executeSql('CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB)');\n  hilog.info(DOMAIN, 'BackupAndRestore', 'Succeeded in getting RdbStore.');\n} catch (e) {\n  const err = e as BusinessError;\n  hilog.error(DOMAIN, 'BackupAndRestore', `Failed to get RdbStore. Code:${err.code},message:${err.message}`);\n}\n\nif (!store) {\n  return;\n}\n\ntry {\n  /**\n   * \"Backup.db\"为备份数据库文件名，默认在RdbStore同路径下备份。\n   * 也可指定绝对路径：\"/data/storage/el2/database/Backup.db\"，文件路径需要存在，不会自动创建目录。\n   */\n  await store.backup('Backup.db');\n  hilog.info(DOMAIN, 'BackupAndRestore', `Succeeded in backing up RdbStore.`);\n} catch (e) {\n  const err = e as BusinessError;\n  hilog.error(DOMAIN, 'BackupAndRestore', `Failed to backup RdbStore. Code:${err.code}, message:${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关系型数据库异常重建",
      children: "关系型数据库异常重建"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在创建或使用关系型数据库的过程中，抛出14800011异常错误码说明数据库出现异常，可以删除数据库后恢复数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要通过在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#storeconfig",
        children: "StoreConfig"
      }), "中配置allowRebuild参数为true以设置数据库在出现异常时自动删库。数据库重建成功后为空库，需要开发者重新建表并且使用提前备份好的数据进行数据恢复，备份操作可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E5%A4%87%E4%BB%BD",
        children: "关系型数据库备份"
      }), "，数据恢复可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E6%95%B0%E6%8D%AE%E6%81%A2%E5%A4%8D",
        children: "关系型数据库恢复"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若数据库异常前已配置StoreConfig中的allowRebuild为true，则数据库出现异常时将自动删库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若数据库异常前未配置StoreConfig中的allowRebuild或allowRebuild配置为false，则需将其配置为true再次进行开库。具体示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let store: relationalStore.RdbStore | undefined = undefined;\n/* context为应用的上下文信息，由调用方自行获取，此处仅为示例。 */\nconst context = new UIContext().getHostContext() as common.UIAbilityContext;\ntry {\n  const STORE_CONFIG: relationalStore.StoreConfig = {\n    name: 'RdbTest.db',\n    securityLevel: relationalStore.SecurityLevel.S3,\n    allowRebuild: true\n  };\n  store = await relationalStore.getRdbStore(context, STORE_CONFIG);\n  await store.executeSql('CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB)');\n  hilog.info(DOMAIN, 'BackupAndRestore', 'Succeeded in getting RdbStore.');\n} catch (e) {\n  const err = e as BusinessError;\n  hilog.error(DOMAIN, 'BackupAndRestore', `Failed to get RdbStore. Code:${err.code}, message:${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关系型数据库数据恢复",
      children: "关系型数据库数据恢复"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对数据库出现异常的情况，在数据库重建成功后，需要用提前备份好的数据进行数据恢复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "恢复方式分以下两种，手动备份恢复和自动备份恢复（仅系统应用可用）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "恢复手动备份数据",
      children: "恢复手动备份数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关系型数据库通过调用backup接口可以实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%89%8B%E5%8A%A8%E5%A4%87%E4%BB%BD",
        children: "手动备份数据库"
      }), "，通过restore接口可以实现手动恢复数据库。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体恢复过程和关键示例代码片段如下，完整示例代码请结合关系型数据库的备份、重建等上下文进行实现。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "抛出数据库异常错误码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let predicates = new relationalStore.RdbPredicates('EMPLOYEE');\nif (store != undefined) {\n  (store as relationalStore.RdbStore).query(predicates, ['ID', 'NAME', 'AGE', 'SALARY', 'CODES'])\n    .then((result: relationalStore.ResultSet) => {\n      let resultSet = result;\n      try {\n        /* ...\n           业务的增删改逻辑\n           ...\n         */\n        // 抛出异常\n        if (resultSet?.rowCount == -1) {\n          resultSet?.isColumnNull(0);\n        }\n        // todo resultSet.goToFirstRow()等其它接口也会抛异常\n        while (resultSet.goToNextRow()) {\n          hilog.info(DOMAIN, 'BackupAndRestore', JSON.stringify(resultSet.getRow()));\n        }\n        resultSet.close();\n      } catch (err) {\n        if (err.code === 14800011) {\n          // 执行下文的步骤，即关闭结果集之后进行数据的恢复\n        }\n        hilog.info(DOMAIN, 'BackupAndRestore', JSON.stringify(err));\n      }\n    })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭所有打开着的结果集。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let resultSets: relationalStore.ResultSet[] = []\n// 使用resultSet.close()方法关闭所有打开着的结果集\nfor (let resultSet of resultSets) {\n  try {\n    resultSet.close();\n  } catch (e) {\n    if (e.code !== 14800014) {\n      hilog.info(DOMAIN, 'BackupAndRestore', `Code:${e.code}, message:${e.message}`);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用restore接口恢复数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let store: relationalStore.RdbStore | undefined = undefined;\n/* context为应用的上下文信息，由调用方自行获取，此处仅为示例。 */\nconst context = new UIContext().getHostContext() as common.UIAbilityContext;\nlet STORE_CONFIG: relationalStore.StoreConfig = {\n  name: 'RdbTest.db',\n  securityLevel: relationalStore.SecurityLevel.S3,\n  allowRebuild: true\n}\ntry {\n  /**\n   * \"Backup.db\"为备份数据库文件名，默认在当前 store 所在路径下查找备份文件 Backup.db。\n   * 如在备份时指定了绝对路径：\"/data/storage/el2/database/Backup.db\", 需要传入绝对路径。\n   */\n  let backupFilePath = context.databaseDir + '/rdb/Backup.db';\n  const backupExist: boolean = await fileIo.access(backupFilePath);\n  if (!backupExist) {\n    hilog.info(DOMAIN, 'BackupAndRestore', 'Backup is not exist.');\n    // todo 开库建表\n    // todo 自行生成数据\n    return;\n  }\n} catch (e) {\n  hilog.info(DOMAIN, 'BackupAndRestore', `Code:${e.code}, message:${e.message}`);\n}\n\ntry {\n  store = await relationalStore.getRdbStore(context, STORE_CONFIG);\n  // 调用restore接口恢复数据\n  await store.restore('Backup.db');\n  hilog.info(DOMAIN, 'BackupAndRestore', 'Restore from backup success.');\n} catch (e) {\n  const err = e as BusinessError;\n  hilog.error(DOMAIN, 'BackupAndRestore', `Failed to get RdbStore. Code:${err.code}, message:${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/data-base-upgrade",
          children: "数据库的备份与恢复"
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