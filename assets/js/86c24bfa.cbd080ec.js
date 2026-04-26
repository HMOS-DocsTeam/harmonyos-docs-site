"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["843756"], {
226501(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_data_reliability_security_encrypted_estore_guidelines_encrypted_estore_guidelines_md_86c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-data-reliability-security-encrypted-estore-guidelines-encrypted-estore-guidelines-md-86c.json
var site_docs_arkdata_data_reliability_security_encrypted_estore_guidelines_encrypted_estore_guidelines_md_86c_namespaceObject = JSON.parse('{"id":"arkdata/data-reliability-security/encrypted-estore-guidelines/encrypted-estore-guidelines","title":"E类加密数据库的使用 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/data-reliability-security/encrypted-estore-guidelines/encrypted-estore-guidelines.md","sourceDirName":"arkdata/data-reliability-security/encrypted-estore-guidelines","slug":"/arkdata/data-reliability-security/encrypted-estore-guidelines/","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/encrypted-estore-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"E类加密数据库的使用 (ArkTS)","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/encrypted-estore-guidelines","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基于设备分类和数据分级的访问控制 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/data-reliability-security/native-access-control-by-device-and-data-level/"},"next":{"title":"跨应用数据共享概述","permalink":"/harmonyos-docs-site/arkdata/cross-app-data-share/data-share-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/data-reliability-security/encrypted-estore-guidelines/encrypted-estore-guidelines.md


const frontMatter = {
	title: 'E类加密数据库的使用 (ArkTS)',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/encrypted-estore-guidelines',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'E类加密数据库的使用 (ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "实现机制",
  "id": "实现机制",
  "level": 2
}, {
  "value": "配置权限",
  "id": "配置权限",
  "level": 2
}, {
  "value": "键值型数据库E类加密",
  "id": "键值型数据库e类加密",
  "level": 2
}, {
  "value": "Mover",
  "id": "mover",
  "level": 3
}, {
  "value": "Store",
  "id": "store",
  "level": 3
}, {
  "value": "SecretKeyObserver",
  "id": "secretkeyobserver",
  "level": 3
}, {
  "value": "ECStoreManager",
  "id": "ecstoremanager",
  "level": 3
}, {
  "value": "EntryAbility",
  "id": "entryability",
  "level": 3
}, {
  "value": "Index按键事件",
  "id": "index按键事件",
  "level": 3
}, {
  "value": "关系型数据库E类加密",
  "id": "关系型数据库e类加密",
  "level": 2
}, {
  "value": "Mover",
  "id": "mover-1",
  "level": 3
}, {
  "value": "Store",
  "id": "store-1",
  "level": 3
}, {
  "value": "SecretKeyObserver",
  "id": "secretkeyobserver-1",
  "level": 3
}, {
  "value": "ECStoreManager",
  "id": "ecstoremanager-1",
  "level": 3
}, {
  "value": "EntryAbility",
  "id": "entryability-1",
  "level": 3
}, {
  "value": "Index按键事件",
  "id": "index按键事件-1",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "e类加密数据库的使用-arkts",
        children: "E类加密数据库的使用 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从安全角度考虑，为满足部分敏感数据的安全特性，提供了E类加密数据库的方案以提高锁屏下数据的安全性。存有敏感信息的应用在申请ohos.permission.PROTECT_SCREEN_LOCK_DATA权限后会在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-contextconstant/js-apis-app-ability-contextconstant#areamode",
        children: "EL5"
      }), "路径下创建一个E类数据库。在锁屏的情况下（未调用Access接口获取保留文件密钥）会触发文件密钥的销毁，此时E类数据库不可读写。当锁屏解锁后，密钥会恢复，E类数据库恢复正常读写操作。这样的设计可以有效防止用户数据的泄露。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在锁屏的情况下，应用程序仍然可以继续写入数据。由于此时E类数据库不可读写，这可能会导致数据丢失。为了解决这个问题，当前提供了一种方案：在锁屏的情况下，将数据存储在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-contextconstant/js-apis-app-ability-contextconstant#areamode",
        children: "EL2"
      }), "路径下的C类数据库中。当解锁后，再将数据迁移到E类数据库中。这样可以确保数据在锁屏期间的安全性和完整性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键值型数据库和关系型数据库均支持E类加密数据库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现机制",
      children: "实现机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过封装Mover类、Store类、SecretKeyObserver类和ECStoreManager类实现应用数据库密钥加锁和解锁状态下E类数据库和C类数据库的切换和操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mover类：提供数据库数据迁移接口，在锁屏解锁后，若C类数据库中有数据，使用该接口将数据迁移到E类数据库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Store类：提供了获取数据库，在数据库中插入数据、删除数据、更新数据和获取当前数据数量的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SecretKeyObserver类：提供了获取当前密钥状态的接口，在密钥销毁后，关闭E类数据库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECStoreManager类：用于管理应用的E类数据库和C类数据库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置权限",
      children: "配置权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用EL5路径下的数据库，需要配置ohos.permission.PROTECT_SCREEN_LOCK_DATA权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// module.json5\n\"requestPermissions\": [\n      {\n        \"name\": \"ohos.permission.PROTECT_SCREEN_LOCK_DATA\"\n      }\n    ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "键值型数据库e类加密",
      children: "键值型数据库E类加密"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本章节提供键值型数据库的E类加密数据库使用方式，提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "#mover",
        children: "Mover"
      }), "类、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#store",
        children: "Store"
      }), "类、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#secretkeyobserver",
        children: "SecretKeyObserver"
      }), "类和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ecstoremanager",
        children: "ECStoreManager"
      }), "类的具体实现，并在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#entryability",
        children: "EntryAbility"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#index%E6%8C%89%E9%94%AE%E4%BA%8B%E4%BB%B6",
        children: "index按键事件"
      }), "中展示这几个类的使用方式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mover",
      children: "Mover"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供数据库数据迁移接口，在锁屏解锁后，若C类数据库中存在数据，使用该接口将数据迁移到E类数据库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { distributedKVStore } from '@kit.ArkData';\n// Logger为hilog封装后实现的打印功能\nimport Logger from '../common/Logger';\n\nexport class Mover {\n  async move(eStore: distributedKVStore.SingleKVStore, cStore: distributedKVStore.SingleKVStore): Promise<void> {\n    if (eStore != null && cStore != null) {\n      let entries: distributedKVStore.Entry[] = await cStore.getEntries('key_test_string');\n      await eStore.putBatch(entries);\n      Logger.info(`ECDB_Encry move success`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "store",
      children: "Store"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供了获取数据库，在数据库中插入数据、删除数据、更新数据和获取当前数据数量的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { distributedKVStore } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// Logger为hilog封装后实现的打印功能\nimport Logger from '../common/Logger';\n\nlet kvManager: distributedKVStore.KVManager;\n\nexport class StoreInfo {\n  kvManagerConfig: distributedKVStore.KVManagerConfig;\n  storeId: string;\n  option: distributedKVStore.Options;\n}\n\nexport class Store {\n  async getECStore(storeInfo: StoreInfo): Promise<distributedKVStore.SingleKVStore> {\n    try {\n      kvManager = distributedKVStore.createKVManager(storeInfo.kvManagerConfig);\n      Logger.info('Succeeded in creating KVManager');\n    } catch (e) {\n      let error = e as BusinessError;\n      Logger.error(`Failed to create KVManager.code is ${error.code},message is ${error.message}`);\n    }\n    if (kvManager !== undefined) {\n      let kvStore: distributedKVStore.SingleKVStore | null;\n      try {\n        kvStore = await kvManager.getKVStore<distributedKVStore.SingleKVStore>(storeInfo.storeId, storeInfo.option);\n        if (kvStore != undefined) {\n          Logger.info(`ECDB_Encry succeeded in getting store : ${storeInfo.storeId}`);\n          return kvStore;\n        }\n      } catch (e) {\n        let error = e as BusinessError;\n        Logger.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);\n      }\n    }\n  }\n\n  putOnedata(kvStore: distributedKVStore.SingleKVStore): void {\n    if (kvStore != undefined) {\n      const KEY_TEST_STRING_ELEMENT = 'key_test_string' + String(Date.now());\n      const VALUE_TEST_STRING_ELEMENT = 'value_test_string' + String(Date.now());\n      try {\n        kvStore.put(KEY_TEST_STRING_ELEMENT, VALUE_TEST_STRING_ELEMENT, (err) => {\n          if (err !== undefined) {\n            Logger.error(`Failed to put data. Code:${err.code},message:${err.message}`);\n            return;\n          }\n          Logger.info(`ECDB_Encry Succeeded in putting data.${KEY_TEST_STRING_ELEMENT}`);\n        });\n      } catch (e) {\n        let error = e as BusinessError;\n        Logger.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n      }\n    }\n  }\n\n  getDataNum(kvStore: distributedKVStore.SingleKVStore): void {\n    if (kvStore != undefined) {\n      let resultSet: distributedKVStore.KVStoreResultSet;\n      kvStore.getResultSet('key_test_string').then((result: distributedKVStore.KVStoreResultSet) => {\n        Logger.info(`ECDB_Encry Succeeded in getting result set num ${result.getCount()}`);\n        resultSet = result;\n        if (kvStore != null) {\n          kvStore.closeResultSet(resultSet).then(() => {\n            Logger.info('Succeeded in closing result set');\n          }).catch((err: BusinessError) => {\n            Logger.error(`Failed to close resultset.code is ${err.code},message is ${err.message}`);\n          });\n        }\n      }).catch((err: BusinessError) => {\n        Logger.error(`Failed to get resultset.code is ${err.code},message is ${err.message}`);\n      });\n    }\n  }\n\n  deleteOnedata(kvStore: distributedKVStore.SingleKVStore): void {\n    if (kvStore != undefined) {\n      kvStore.getEntries('key_test_string', (err: BusinessError, entries: distributedKVStore.Entry[]) => {\n        if (err != undefined) {\n          Logger.error(`Failed to get Entries.code is ${err.code},message is ${err.message}`);\n          return;\n        }\n        if (kvStore != null && entries.length != 0) {\n          kvStore.delete(entries[0].key, (err: BusinessError) => {\n            if (err != undefined) {\n              Logger.error(`Failed to delete.code is ${err.code},message is ${err.message}`);\n              return;\n            }\n            Logger.info('ECDB_Encry Succeeded in deleting');\n          });\n        }\n      });\n    }\n  }\n\n  updateOnedata(kvStore: distributedKVStore.SingleKVStore): void {\n    if (kvStore != undefined) {\n      kvStore.getEntries('key_test_string', async (err: BusinessError, entries: distributedKVStore.Entry[]) => {\n        if (err != undefined) {\n          Logger.error(`Failed to get Entries.code is ${err.code},message is ${err.message}`);\n          return;\n        }\n        if (kvStore != null && entries.length != 0) {\n          Logger.info(`ECDB_Encry old data:${entries[0].key},value :${entries[0].value.value.toString()}`);\n          await kvStore.put(entries[0].key, 'new value_test_string' + String(Date.now()) + 'new').then(() => {\n          }).catch((err: BusinessError) => {\n            Logger.error(`Failed to put.code is ${err.code},message is ${err.message}`);\n          });\n          Logger.info(`ECDB_Encry update success`);\n        }\n      });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "secretkeyobserver",
      children: "SecretKeyObserver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类提供了获取当前密钥状态的接口，在密钥销毁后，关闭E类数据库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ECStoreManager } from './ECStoreManager';\n\nexport enum SecretStatus {\n  Lock,\n  UnLock\n}\n\nexport class SecretKeyObserver {\n  onLock(): void {\n    this.lockStatus = SecretStatus.Lock;\n    this.storeManager.closeEStore();\n  }\n\n  onUnLock(): void {\n    this.lockStatus = SecretStatus.UnLock;\n  }\n\n  getCurrentStatus(): number {\n    return this.lockStatus;\n  }\n\n  initialize(storeManager: ECStoreManager): void {\n    this.storeManager = storeManager;\n  }\n\n  updateLockStatus(code: number) {\n    if (code === SecretStatus.Lock) {\n      this.onLock();\n    } else {\n      this.lockStatus = code;\n    }\n  }\n\n  // 初始获取锁屏状态\n  private lockStatus: number = SecretStatus.UnLock;\n  private storeManager: ECStoreManager;\n}\n\nexport let lockObserve = new SecretKeyObserver();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ecstoremanager",
      children: "ECStoreManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECStoreManager类用于管理应用的E类数据库和C类数据库。支持配置数据库信息、配置迁移函数的信息，可根据密钥状态为应用提供相应的数据库句柄，并提供了关闭E类数据库、数据迁移完成后销毁C类数据库等接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { distributedKVStore } from '@kit.ArkData';\nimport { Mover } from './Mover';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { StoreInfo, Store } from './Store';\nimport { SecretStatus } from './SecretKeyObserver';\n// Logger为hilog封装后实现的打印功能\nimport Logger from '../common/Logger';\n\nlet store = new Store();\n\nexport class ECStoreManager {\n  config(cInfo: StoreInfo, other: StoreInfo): void {\n    this.cInfo = cInfo;\n    this.eInfo = other;\n  }\n\n  configDataMover(mover: Mover): void {\n    this.mover = mover;\n  }\n\n  async getCurrentStore(screenStatus: number): Promise<distributedKVStore.SingleKVStore> {\n    Logger.info(`ECDB_Encry GetCurrentStore start screenStatus: ${screenStatus}`);\n    if (screenStatus === SecretStatus.UnLock) {\n      try {\n        this.eStore = await store.getECStore(this.eInfo);\n      } catch (e) {\n        let error = e as BusinessError;\n        Logger.error(`Failed to GetECStore.code is ${error.code},message is ${error.message}`);\n      }\n      // 解锁状态 获取e类库\n      if (this.needMove) {\n        if (this.eStore != undefined && this.cStore != undefined) {\n          await this.mover.move(this.eStore, this.cStore);\n        }\n        this.deleteCStore();\n        Logger.info(`ECDB_Encry Data migration is complete. Destroy cstore`);\n        this.needMove = false;\n      }\n      return this.eStore;\n    } else {\n      // 加锁状态 获取c类库\n      this.needMove = true;\n      try {\n        this.cStore = await store.getECStore(this.cInfo);\n      } catch (e) {\n        let error = e as BusinessError;\n        Logger.error(`Failed to GetECStore.code is ${error.code},message is ${error.message}`);\n      }\n      return this.cStore;\n    }\n  }\n\n  closeEStore(): void {\n    try {\n      let kvManager = distributedKVStore.createKVManager(this.eInfo.kvManagerConfig);\n      Logger.info('Succeeded in creating KVManager');\n      if (kvManager != undefined) {\n        kvManager.closeKVStore(this.eInfo.kvManagerConfig.bundleName, this.eInfo.storeId);\n        this.eStore = null;\n        Logger.info(`ECDB_Encry close EStore success`);\n      }\n    } catch (e) {\n      let error = e as BusinessError;\n      Logger.error(`Failed to create KVManager.code is ${error.code},message is ${error.message}`);\n    }\n  }\n\n  deleteCStore(): void {\n    try {\n      let kvManager = distributedKVStore.createKVManager(this.cInfo.kvManagerConfig);\n      Logger.info('Succeeded in creating KVManager');\n      if (kvManager != undefined) {\n        kvManager.deleteKVStore(this.cInfo.kvManagerConfig.bundleName, this.cInfo.storeId);\n        this.cStore = null;\n        Logger.info('ECDB_Encry delete cStore success');\n      }\n    } catch (e) {\n      let error = e as BusinessError;\n      Logger.error(`Failed to create KVManager.code is ${error.code},message is ${error.message}`);\n    }\n  }\n\n  private eStore: distributedKVStore.SingleKVStore = null;\n  private cStore: distributedKVStore.SingleKVStore = null;\n  private cInfo: StoreInfo | null = null;\n  private eInfo: StoreInfo | null = null;\n  private needMove: boolean = false;\n  private mover: Mover | null = null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "entryability",
      children: "EntryAbility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟应用启动期间，注册对COMMON_EVENT_SCREEN_LOCK_FILE_ACCESS_STATE_CHANGED公共事件的监听，并配置相应的数据库信息、密钥状态信息等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, application, contextConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { distributedKVStore } from '@kit.ArkData';\nimport { ECStoreManager } from './ECStoreManager';\nimport { StoreInfo } from './Store';\nimport { Mover } from './Mover';\nimport { SecretKeyObserver } from './SecretKeyObserver';\nimport { commonEventManager } from '@kit.BasicServicesKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// Logger为hilog封装后实现的打印功能\nimport Logger from '../common/Logger';\n\nexport let storeManager = new ECStoreManager();\nexport let e_secretKeyObserver = new SecretKeyObserver();\nlet mover = new Mover();\nlet subscriber: commonEventManager.CommonEventSubscriber;\n\nexport function createCB(err: BusinessError, commonEventSubscriber: commonEventManager.CommonEventSubscriber) {\n  if (!err) {\n    Logger.info('ECDB_Encry createSubscriber');\n    subscriber = commonEventSubscriber;\n    try {\n      commonEventManager.subscribe(subscriber, (err: BusinessError, data: commonEventManager.CommonEventData) => {\n        if (err) {\n          Logger.error(`subscribe failed, code is ${err.code}, message is ${err.message}`);\n        } else {\n          Logger.info(`ECDB_Encry SubscribeCB ${data.code}`);\n          e_secretKeyObserver.updateLockStatus(data.code);\n        }\n      });\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      Logger.error(`subscribe failed, code is ${err.code}, message is ${err.message}`);\n    }\n  } else {\n    Logger.error(`createSubscriber failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n\nlet cInfo: StoreInfo | null = null;\nlet eInfo: StoreInfo | null = null;\n\nexport default class EntryAbility extends UIAbility {\n  async onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): Promise<void> {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n    let cContext = this.context;\n    cInfo = {\n      'kvManagerConfig': {\n        context: cContext,\n        bundleName: 'com.example.ecstoresamples'\n      },\n      'storeId': 'cstore',\n      'option': {\n        createIfMissing: true,\n        encrypt: false,\n        backup: false,\n        autoSync: false,\n        // kvStoreType不填时，默认创建多设备协同数据库\n        kvStoreType: distributedKVStore.KVStoreType.SINGLE_VERSION,\n        // 多设备协同数据库：kvStoreType: distributedKVStore.KVStoreType.DEVICE_COLLABORATION\n        securityLevel: distributedKVStore.SecurityLevel.S3\n      }\n    }\n    let eContext = await application.createModuleContext(this.context,'entry');\n    eContext.area = contextConstant.AreaMode.EL5;\n    eInfo = {\n      'kvManagerConfig': {\n        context: eContext,\n        bundleName: 'com.example.ecstoresamples'\n      },\n      'storeId': 'estore',\n      'option': {\n        createIfMissing: true,\n        encrypt: false,\n        backup: false,\n        autoSync: false,\n        // kvStoreType不填时，默认创建多设备协同数据库\n        kvStoreType: distributedKVStore.KVStoreType.SINGLE_VERSION,\n        // 多设备协同数据库：kvStoreType: distributedKVStore.KVStoreType.DEVICE_COLLABORATION\n        securityLevel: distributedKVStore.SecurityLevel.S3\n      }\n    }\n    Logger.info(`ECDB_Encry store area : estore:${eContext.area},cstore${cContext.area}`);\n    // 监听COMMON_EVENT_SCREEN_LOCK_FILE_ACCESS_STATE_CHANGED事件 code == 1解锁状态，code==0加锁状态\n    try {\n      commonEventManager.createSubscriber({\n        events: [ 'COMMON_EVENT_SCREEN_LOCK_FILE_ACCESS_STATE_CHANGED' ]\n      }, createCB);\n      Logger.info(`ECDB_Encry success subscribe`);\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      Logger.error(`createSubscriber failed, code is ${err.code}, message is ${err.message}`);\n    }\n    storeManager.config(cInfo, eInfo);\n    storeManager.configDataMover(mover);\n    e_secretKeyObserver.initialize(storeManager);\n  }\n\n  onDestroy(): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content.');\n    });\n  }\n\n  onWindowStageDestroy(): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');\n  }\n\n  onForeground(): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');\n  }\n\n  onBackground(): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "index按键事件",
      children: "Index按键事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Button按钮，通过点击按钮来模拟应用操作数据库，如插入数据、删除数据、更新数据和获取数据数量的操作等，展示数据库基本的增删改查能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { storeManager, e_secretKeyObserver } from '../entryability/EntryAbility';\nimport { distributedKVStore } from '@kit.ArkData';\nimport { Store } from '../entryability/Store';\n\nlet storeOption = new Store();\nlet lockStatus: number = 1;\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    Row() {\n      Column() {\n        Button('加锁/解锁').onClick((event: ClickEvent) => {\n          if (lockStatus) {\n            e_secretKeyObserver.onLock();\n            lockStatus = 0;\n          } else {\n            e_secretKeyObserver.onUnLock();\n            lockStatus = 1;\n          }\n          lockStatus ? this.message = '解锁' : this.message = '加锁';\n        }).margin(5)\n          .width(100) // 宽度，单位默认vp（可视像素）\n          .height(40) // 高度\n\n        Button('StoreType').onClick(async (event: ClickEvent) => {\n          e_secretKeyObserver.getCurrentStatus() ? this.message = 'estore' : this.message = 'cstore';\n        }).margin(5)\n          .width(100) // 宽度，单位默认vp（可视像素）\n          .height(40) // 高度\n\n        Button('Put').onClick(async (event: ClickEvent) => {\n          let store: distributedKVStore.SingleKVStore = await storeManager.getCurrentStore(e_secretKeyObserver.getCurrentStatus());\n          storeOption.putOnedata(store);\n        }).margin(5)\n          .width(100) // 宽度，单位默认vp（可视像素）\n          .height(40) // 高度\n\n        Button('Get').onClick(async (event: ClickEvent) => {\n          let store: distributedKVStore.SingleKVStore = await storeManager.getCurrentStore(e_secretKeyObserver.getCurrentStatus());\n          storeOption.getDataNum(store);\n        }).margin(5)\n          .width(100) // 宽度，单位默认vp（可视像素）\n          .height(40) // 高度\n\n        Button('Delete').onClick(async (event: ClickEvent) => {\n          let store: distributedKVStore.SingleKVStore = await storeManager.getCurrentStore(e_secretKeyObserver.getCurrentStatus());\n          storeOption.deleteOnedata(store);\n        }).margin(5)\n          .width(100) // 宽度，单位默认vp（可视像素）\n          .height(40) // 高度\n\n        Button('Update').onClick(async (event: ClickEvent) => {\n          let store: distributedKVStore.SingleKVStore = await storeManager.getCurrentStore(e_secretKeyObserver.getCurrentStatus());\n          storeOption.updateOnedata(store);\n        }).margin(5)\n          .width(100) // 宽度，单位默认vp（可视像素）\n          .height(40) // 高度\n\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "关系型数据库e类加密",
      children: "关系型数据库E类加密"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本章节提供关系型数据库的E类加密数据库使用方式，提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "#mover-1",
        children: "Mover"
      }), "类，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#store-1",
        children: "Store"
      }), "类，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#secretkeyobserver-1",
        children: "SecretKeyObserver"
      }), "类和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ecstoremanager-1",
        children: "ECStoreManager"
      }), "类的具体实现，并在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#entryability-1",
        children: "EntryAbility"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#index%E6%8C%89%E9%94%AE%E4%BA%8B%E4%BB%B6-1",
        children: "index按键事件"
      }), "中展示这几个类的使用方式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mover-1",
      children: "Mover"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供数据库数据迁移接口，在锁屏解锁后，若C类数据库中有数据，使用该接口将数据迁移到E类数据库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { relationalStore } from '@kit.ArkData';\n\nexport class Mover {\n  async move(eStore: relationalStore.RdbStore, cStore: relationalStore.RdbStore) {\n    if (eStore != null && cStore != null) {\n      let predicates = new relationalStore.RdbPredicates('employee');\n      let resultSet = await cStore.query(predicates);\n      while (resultSet.goToNextRow()) {\n        let bucket = resultSet.getRow();\n        await eStore.insert('employee', bucket);\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "store-1",
      children: "Store"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供了获取数据库，在数据库中插入数据、删除数据、更新数据和获取当前数据数量的接口。其中StoreInfo类用于存储获取数据库相关信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { relationalStore } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { Context } from '@kit.AbilityKit';\n\nexport class StoreInfo {\n  context: Context;\n  config: relationalStore.StoreConfig;\n  storeId: string;\n}\n\nlet id = 1;\nconst SQL_CREATE_TABLE = 'CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB)';\n\n\nexport class Store {\n  async getECStore(storeInfo: StoreInfo): Promise<relationalStore.RdbStore> {\n    let rdbStore: relationalStore.RdbStore | null;\n    try {\n      rdbStore = await relationalStore.getRdbStore(storeInfo.context, storeInfo.config);\n      if (rdbStore.version == 0) {\n        await rdbStore.executeSql(SQL_CREATE_TABLE);\n        console.info(`ECDB_Encry succeeded in getting Store ：${storeInfo.storeId}`);\n        rdbStore.version = 1;\n      }\n    } catch (e) {\n      let error = e as BusinessError;\n      console.error(`An unexpected error occurred.code is ${error.code},message is ${error.message}`);\n    }\n    return rdbStore;\n  }\n\n  async putOnedata(rdbStore: relationalStore.RdbStore) {\n    if (rdbStore != undefined) {\n      const valueBucket: relationalStore.ValuesBucket = {\n        ID: id++,\n        NAME: 'Lisa',\n        AGE: 18,\n        SALARY: 100.5,\n        CODES: new Uint8Array([1, 2, 3, 4, 5]),\n      };\n      try {\n        await rdbStore.insert('EMPLOYEE', valueBucket);\n        console.info(`ECDB_Encry insert success`);\n      } catch (e) {\n        let error = e as BusinessError;\n        console.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n      }\n    }\n  }\n\n  async getDataNum(rdbStore: relationalStore.RdbStore) {\n    if (rdbStore != undefined) {\n      try {\n        let predicates = new relationalStore.RdbPredicates('EMPLOYEE');\n        let resultSet = await rdbStore.query(predicates);\n        let count = resultSet.rowCount;\n        console.info(`ECDB_Encry getdatanum success count : ${count}`);\n      } catch (e) {\n        let error = e as BusinessError;\n        console.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n      }\n    }\n  }\n\n  async deleteAlldata(rdbStore: relationalStore.RdbStore) {\n    if (rdbStore != undefined) {\n      try {\n        let predicates = new relationalStore.RdbPredicates('EMPLOYEE');\n        predicates.equalTo('AGE', 18);\n        await rdbStore.delete(predicates);\n        console.info(`ECDB_Encry delete Success`);\n      } catch (e) {\n        let error = e as BusinessError;\n        console.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n      }\n    }\n  }\n\n  async updateOnedata(rdbStore: relationalStore.RdbStore) {\n    if (rdbStore != undefined) {\n      try {\n        let predicates = new relationalStore.RdbPredicates('EMPLOYEE');\n        predicates.equalTo('NAME', 'Lisa');\n        const valueBucket: relationalStore.ValuesBucket = {\n          NAME: 'Anna',\n          SALARY: 100.5,\n          CODES: new Uint8Array([1, 2, 3, 4, 5]),\n        };\n        await rdbStore.update(valueBucket, predicates);\n        console.info(`ECDB_Encry update success`);\n      } catch (e) {\n        let error = e as BusinessError;\n        console.error(`An unexpected error occurred. Code:${error.code},message:${error.message}`);\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "secretkeyobserver-1",
      children: "SecretKeyObserver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类提供了获取当前密钥状态的接口，在密钥销毁后，关闭E类数据库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ECStoreManager } from './ECStoreManager';\n\nexport enum SecretStatus {\n  Lock,\n  UnLock\n}\n\nexport class SecretKeyObserver {\n  onLock(): void {\n    this.lockStatus = SecretStatus.Lock;\n    this.storeManager.closeEStore();\n  }\n\n  onUnLock(): void {\n    this.lockStatus = SecretStatus.UnLock;\n  }\n\n  getCurrentStatus(): number {\n    return this.lockStatus;\n  }\n\n  initialize(storeManager: ECStoreManager): void {\n    this.storeManager = storeManager;\n  }\n\n  updateLockStatus(code: number) {\n    if (this.lockStatus === SecretStatus.Lock) {\n      this.onLock();\n    } else {\n      this.lockStatus = code;\n    }\n  }\n\n  private lockStatus: number = SecretStatus.UnLock;\n  private storeManager: ECStoreManager;\n}\n\nexport let lockObserve = new SecretKeyObserver();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ecstoremanager-1",
      children: "ECStoreManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ECStoreManager类用于管理应用的E类数据库和C类数据库。支持配置数据库信息、配置迁移函数的信息，可根据密钥状态为应用提供相应的数据库句柄，并提供了关闭E类数据库、数据迁移完成后销毁C类数据库等接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { relationalStore } from '@kit.ArkData';\nimport { Mover } from './Mover';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { StoreInfo, Store } from './Store';\nimport { SecretStatus } from './SecretKeyObserver';\n\nlet store = new Store();\n\nexport class ECStoreManager {\n  config(cInfo: StoreInfo, other: StoreInfo): void {\n    this.cInfo = cInfo;\n    this.eInfo = other;\n  }\n\n  configDataMover(mover: Mover): void {\n    this.mover = mover;\n  }\n\n  async getCurrentStore(screenStatus: number): Promise<relationalStore.RdbStore> {\n    if (screenStatus === SecretStatus.UnLock) {\n      try {\n        this.eStore = await store.getECStore(this.eInfo);\n      } catch (e) {\n        let error = e as BusinessError;\n        console.error(`Failed to GetECStore.code is ${error.code},message is ${error.message}`);\n      }\n      // 解锁状态 获取e类库\n      if (this.needMove) {\n        if (this.eStore != undefined && this.cStore != undefined) {\n          await this.mover.move(this.eStore, this.cStore);\n          console.info(`ECDB_Encry cstore data move to estore success`);\n        }\n        this.deleteCStore();\n        this.needMove = false;\n      }\n      return this.eStore;\n    } else {\n      // 加锁状态 获取c类库\n      this.needMove = true;\n      try {\n        this.cStore = await store.getECStore(this.cInfo);\n      } catch (e) {\n        let error = e as BusinessError;\n        console.error(`Failed to GetECStore.code is ${error.code},message is ${error.message}`);\n      }\n      return this.cStore;\n    }\n  }\n\n  closeEStore(): void {\n    this.eStore = undefined;\n  }\n\n  async deleteCStore() {\n    try {\n      await relationalStore.deleteRdbStore(this.cInfo.context, this.cInfo.storeId)\n    } catch (e) {\n      let error = e as BusinessError;\n      console.error(`Failed to create KVManager.code is ${error.code},message is ${error.message}`);\n    }\n  }\n\n  private eStore: relationalStore.RdbStore = null;\n  private cStore: relationalStore.RdbStore = null;\n  private cInfo: StoreInfo | null = null;\n  private eInfo: StoreInfo | null = null;\n  private needMove: boolean = false;\n  private mover: Mover | null = null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "entryability-1",
      children: "EntryAbility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟在应用启动期间，注册对COMMON_EVENT_SCREEN_LOCK_FILE_ACCESS_STATE_CHANGED公共事件的监听，并配置相应的数据库信息、密钥状态信息等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, contextConstant, UIAbility, Want, application } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { relationalStore } from '@kit.ArkData';\nimport { ECStoreManager } from '../encryptedEStoreGuidelines/ECStoreManager';\nimport { StoreInfo } from '../encryptedEStoreGuidelines/Store';\nimport { Mover } from '../encryptedEStoreGuidelines/Mover';\nimport { SecretKeyObserver } from '../encryptedEStoreGuidelines/SecretKeyObserver';\nimport { commonEventManager } from '@kit.BasicServicesKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport let storeManager = new ECStoreManager();\nexport let e_secretKeyObserver = new SecretKeyObserver();\nlet mover = new Mover();\nlet subscriber: commonEventManager.CommonEventSubscriber;\n\nexport function createCB(err: BusinessError, commonEventSubscriber: commonEventManager.CommonEventSubscriber) {\n  if (!err) {\n    console.info('ECDB_Encrypt createSubscriber');\n    subscriber = commonEventSubscriber;\n    try {\n      commonEventManager.subscribe(subscriber, (err: BusinessError, data: commonEventManager.CommonEventData) => {\n        if (err) {\n          console.error(`subscribe failed, code is ${err.code}, message is ${err.message}`);\n        } else {\n          console.info(`ECDB_Encrypt SubscribeCB ${data.code}`);\n          e_secretKeyObserver.updateLockStatus(data.code);\n        }\n      });\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`subscribe failed, code is ${err.code}, message is ${err.message}`);\n    }\n  } else {\n    console.error(`createSubscriber failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n\nlet cInfo: StoreInfo | null = null;\nlet eInfo: StoreInfo | null = null;\n\nexport default class EntryAbility extends UIAbility {\n  async onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): Promise<void> {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n    let cContext = this.context;\n    cInfo = {\n      context: cContext,\n      config: {\n        name: 'cstore.db',\n        securityLevel: relationalStore.SecurityLevel.S3,\n      },\n      storeId: 'cstore.db'\n    };\n    let eContext = await application.createModuleContext(this.context, 'entry');\n    eContext.area = contextConstant.AreaMode.EL5;\n    eInfo = {\n      context: eContext,\n      config: {\n        name: 'estore.db',\n        securityLevel: relationalStore.SecurityLevel.S3,\n      },\n      storeId: 'estore.db',\n    };\n    // 监听COMMON_EVENT_SCREEN_LOCK_FILE_ACCESS_STATE_CHANGED事件 code == 1解锁状态，code==0加锁状态\n    console.info(`ECDB_Encry store area : estore:${eContext.area},cstore${cContext.area}`)\n    try {\n      commonEventManager.createSubscriber({\n        events: ['COMMON_EVENT_SCREEN_LOCK_FILE_ACCESS_STATE_CHANGED']\n      }, createCB);\n      console.info(`ECDB_Encry success subscribe`);\n    } catch (error) {\n      const err: BusinessError = error as BusinessError;\n      console.error(`createSubscriber failed, code is ${err.code}, message is ${err.message}`);\n    }\n    storeManager.config(cInfo, eInfo);\n    storeManager.configDataMover(mover);\n    e_secretKeyObserver.initialize(storeManager);\n  }\n\n  onDestroy(): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content.');\n    });\n  }\n\n  onWindowStageDestroy(): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');\n  }\n\n  onForeground(): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');\n  }\n\n  onBackground(): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "index按键事件-1",
      children: "Index按键事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Button按钮，通过点击按钮来模拟应用操作数据库，如插入数据、删除数据、更新数据和获取数据数量的操作等，展示数据库基本的增删改查能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { storeManager, e_secretKeyObserver } from '../entryability/EntryAbility';\nimport { relationalStore } from '@kit.ArkData';\nimport { Store } from './Store';\n\nlet storeOption = new Store();\n\nlet lockStatus: number = 1;\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '';\n\n  build() {\n    Row() {\n      Column() {\n        Button('加锁/解锁')\n          .onClick((event: ClickEvent) => {\n            if (lockStatus) {\n              e_secretKeyObserver.onLock();\n              lockStatus = 0;\n            } else {\n              e_secretKeyObserver.onUnLock();\n              lockStatus = 1;\n            }\n            lockStatus ? this.message = '解锁' : this.message = '加锁';\n          })\n          .margin('5')\n          .backgroundColor('#0D9FFB')\n          .width('50%')\n          .height('5%')\n          .type(ButtonType.Capsule)\n\n        Button('store type')\n          .onClick(async (event: ClickEvent) => {\n            e_secretKeyObserver.getCurrentStatus() ? this.message = 'estore' : this.message = 'cstore';\n            console.info(`ECDB_Encry current store : ${this.message}`);\n          })\n          .margin('5')\n          .backgroundColor('#0D9FFB')\n          .width('50%')\n          .height('5%')\n          .type(ButtonType.Capsule)\n\n        Button('put')\n          .onClick(async (event: ClickEvent) => {\n            let store: relationalStore.RdbStore = await storeManager.getCurrentStore(e_secretKeyObserver.getCurrentStatus());\n            storeOption.putOnedata(store);\n          })\n          .margin(5)\n          .backgroundColor('#0D9FFB')\n          .width('50%')\n          .height('5%')\n          .type(ButtonType.Capsule)\n\n        Button('Get')\n          .onClick(async (event: ClickEvent) => {\n            let store: relationalStore.RdbStore = await storeManager.getCurrentStore(e_secretKeyObserver.getCurrentStatus());\n            storeOption.getDataNum(store);\n          })\n          .margin(5)\n          .backgroundColor('#0D9FFB')\n          .width('50%')\n          .height('5%')\n          .type(ButtonType.Capsule)\n\n        Button('delete')\n          .onClick(async (event: ClickEvent) => {\n            let store: relationalStore.RdbStore = await storeManager.getCurrentStore(e_secretKeyObserver.getCurrentStatus());\n            storeOption.deleteAlldata(store);\n          })\n          .margin(5)\n          .backgroundColor('#0D9FFB')\n          .width('50%')\n          .height('5%')\n          .type(ButtonType.Capsule)\n\n        Button('update')\n          .onClick(async (event: ClickEvent) => {\n            let store: relationalStore.RdbStore = await storeManager.getCurrentStore(e_secretKeyObserver.getCurrentStatus());\n            storeOption.updateOnedata(store);\n          })\n          .margin(5)\n          .backgroundColor('#0D9FFB')\n          .width('50%')\n          .height('5%')\n          .type(ButtonType.Capsule)\n\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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