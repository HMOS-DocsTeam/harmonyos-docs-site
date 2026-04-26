"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["692790"], {
723517(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_batch_database_operations_guide_batch_database_operations_guide_md_f7d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-develop-guide-multithread-develop-case-batch-database-operations-guide-batch-database-operations-guide-md-f7d.json
var site_docs_arkts_arkts_concurrency_multithread_develop_guide_multithread_develop_case_batch_database_operations_guide_batch_database_operations_guide_md_f7d_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/batch-database-operations-guide/batch-database-operations-guide","title":"批量数据写数据库场景","description":"使用TaskPool进行频繁数据库操作","source":"@site/docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/batch-database-operations-guide/batch-database-operations-guide.md","sourceDirName":"arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/batch-database-operations-guide","slug":"/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/batch-database-operations-guide/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/batch-database-operations-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"批量数据写数据库场景","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/batch-database-operations-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"常驻任务开发指导（Worker）","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-guide/"},"next":{"title":"业务模块并发加载场景","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/concurrent-loading-modules-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/batch-database-operations-guide/batch-database-operations-guide.md


const frontMatter = {
	title: '批量数据写数据库场景',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/batch-database-operations-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '批量数据写数据库场景';

const assets = {

};



const toc = [{
  "value": "使用TaskPool进行频繁数据库操作",
  "id": "使用taskpool进行频繁数据库操作",
  "level": 2
}, {
  "value": "使用Sendable进行大容量数据库操作",
  "id": "使用sendable进行大容量数据库操作",
  "level": 2
}, {
  "value": "复杂类实例对象使用Sendable进行大容量数据库操作",
  "id": "复杂类实例对象使用sendable进行大容量数据库操作",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "批量数据写数据库场景",
        children: "批量数据写数据库场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用taskpool进行频繁数据库操作",
      children: "使用TaskPool进行频繁数据库操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于需要频繁数据库操作的场景，由于读写数据库存在耗时，因此推荐在子线程中操作，避免阻塞UI线程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过ArkTS提供的TaskPool能力，可以将数据库操作任务移到子线程中，实现如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建多个子任务，支持数据库的创建、插入、查询和清除等操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UI主线程发起数据库操作请求，在子线程中完成数据库的增删改查等操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { relationalStore, ValuesBucket } from '@kit.ArkData';\nimport { collections, taskpool } from '@kit.ArkTS';\nimport { IValueBucket, SharedValuesBucket } from './SharedValuesBucket';\n\n@Concurrent\nasync function create(context: Context) {\n  const CONFIG: relationalStore.StoreConfig = {\n    name: 'Store.db',\n    securityLevel: relationalStore.SecurityLevel.S1,\n  };\n\n  // 默认数据库文件路径为 context.databaseDir + rdb + StoreConfig.name\n  let store: relationalStore.RdbStore = await relationalStore.getRdbStore(context, CONFIG);\n  console.info(`Create Store.db successfully!`);\n\n  // 创建表\n  const CREATE_TABLE_SQL = 'CREATE TABLE IF NOT EXISTS test (' +\n    'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +\n    'name TEXT NOT NULL, ' +\n    'age INTEGER, ' +\n    'salary REAL, ' +\n    'blobType BLOB)';\n  await store.executeSql(CREATE_TABLE_SQL);\n  console.info(`Create table test successfully!`);\n}\n\n@Concurrent\nasync function insert(context: Context, valueBucketArray: Array<relationalStore.ValuesBucket>) {\n  const CONFIG: relationalStore.StoreConfig = {\n    name: 'Store.db',\n    securityLevel: relationalStore.SecurityLevel.S1,\n  };\n\n  // 默认数据库文件路径为 context.databaseDir + rdb + StoreConfig.name\n  let store: relationalStore.RdbStore = await relationalStore.getRdbStore(context, CONFIG);\n  console.info(`Create Store.db successfully!`);\n\n  // 数据插入\n  await store.batchInsert('test', valueBucketArray as Object as Array<relationalStore.ValuesBucket>);\n}\n\n@Concurrent\nasync function query(context: Context): Promise<Array<relationalStore.ValuesBucket>> {\n  const CONFIG: relationalStore.StoreConfig = {\n    name: 'Store.db',\n    securityLevel: relationalStore.SecurityLevel.S1,\n  };\n\n  // 默认数据库文件路径为 context.databaseDir + rdb + StoreConfig.name\n  let store: relationalStore.RdbStore = await relationalStore.getRdbStore(context, CONFIG);\n  console.info(`Create Store.db successfully!`);\n\n  // 获取结果集\n  let predicates: relationalStore.RdbPredicates = new relationalStore.RdbPredicates('test');\n  let resultSet = await store.query(predicates); // 查询所有数据\n  console.info(`Query data successfully! row count:${resultSet.rowCount}`);\n  let index = 0;\n  let result = new Array<relationalStore.ValuesBucket>(resultSet.rowCount);\n  resultSet.goToFirstRow();\n  do {\n    result[index++] = resultSet.getRow();\n  } while (resultSet.goToNextRow());\n  resultSet.close();\n  return result;\n}\n\n@Concurrent\nasync function clear(context: Context) {\n  const CONFIG: relationalStore.StoreConfig = {\n    name: 'Store.db',\n    securityLevel: relationalStore.SecurityLevel.S1,\n  };\n\n  // 默认数据库文件路径为 context.databaseDir + rdb + StoreConfig.name\n  await relationalStore.deleteRdbStore(context, CONFIG);\n  console.info(`Delete Store.db successfully!`);\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(async () => {\n          let context: Context = this.getUIContext().getHostContext() as Context;\n\n          // 数据准备\n          const count = 5\n          let valueBucketArray = collections.Array.create<SharedValuesBucket | undefined>(count, undefined);\n          for (let i = 0; i < count; i++) {\n            let v: IValueBucket = {\n              id: i,\n              name: 'zhangsan' + i,\n              age: 20,\n              salary: 5000 + 50 * i\n            };\n            valueBucketArray[i] = new SharedValuesBucket(v);\n          }\n          await taskpool.execute(create, context);\n          await taskpool.execute(insert, context, valueBucketArray);\n          let index = 0;\n          let ret: collections.Array<SharedValuesBucket> =\n            await taskpool.execute(query, context) as collections.Array<SharedValuesBucket>;\n          for (let v of ret.values()) {\n            console.info(`Row[${index}].id = ${v.id}`)\n            console.info(`Row[${index}].name = ${v.name}`)\n            console.info(`Row[${index}].age = ${v.age}`)\n            console.info(`Row[${index}].salary = ${v.salary}`)\n            index++\n          };\n          await taskpool.execute(clear, context);\n          this.message = 'success';\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用sendable进行大容量数据库操作",
      children: "使用Sendable进行大容量数据库操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于数据库数据跨线程传递存在耗时，数据量较大时会占用UI主线程。推荐使用Sendable封装数据库数据，以降低跨线程开销。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义数据库中的数据格式，可以使用Sendable，以减少跨线程操作的耗时。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export interface IValueBucket {\n  id: number;\n  name: string;\n  age: number;\n  salary: number;\n}\n\n@Sendable\nexport class SharedValuesBucket implements IValueBucket {\n  public id: number = 0;\n  public name: string = '';\n  public age: number = 0;\n  public salary: number = 0;\n\n  constructor(v: IValueBucket) {\n    this.id = v.id;\n    this.name = v.name;\n    this.age = v.age;\n    this.salary = v.salary;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UI主线程发起数据库操作请求，在子线程完成数据的增删改查等操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { relationalStore, ValuesBucket } from '@kit.ArkData';\nimport { taskpool } from '@kit.ArkTS';\n\n@Concurrent\nasync function create(context: Context) {\n  const CONFIG: relationalStore.StoreConfig = {\n    name: 'Store.db',\n    securityLevel: relationalStore.SecurityLevel.S1,\n  };\n\n  // 默认数据库文件路径为 context.databaseDir + rdb + StoreConfig.name\n  let store: relationalStore.RdbStore = await relationalStore.getRdbStore(context, CONFIG);\n  console.info(`Create Store.db successfully!`);\n\n  // 创建表\n  const CREATE_TABLE_SQL = 'CREATE TABLE IF NOT EXISTS test (' +\n    'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +\n    'name TEXT NOT NULL, ' +\n    'age INTEGER, ' +\n    'salary REAL, ' +\n    'blobType BLOB)';\n  await store.executeSql(CREATE_TABLE_SQL);\n  console.info(`Create table test successfully!`);\n}\n\n@Concurrent\nasync function insert(context: Context, valueBucketArray: Array<relationalStore.ValuesBucket>) {\n  const CONFIG: relationalStore.StoreConfig = {\n    name: 'Store.db',\n    securityLevel: relationalStore.SecurityLevel.S1,\n  };\n\n  // 默认数据库文件路径为 context.databaseDir + rdb + StoreConfig.name\n  let store: relationalStore.RdbStore = await relationalStore.getRdbStore(context, CONFIG);\n  console.info(`Create Store.db successfully!`);\n\n  // 数据插入\n  await store.batchInsert('test', valueBucketArray as Object as Array<relationalStore.ValuesBucket>);\n}\n\n@Concurrent\nasync function query(context: Context): Promise<Array<relationalStore.ValuesBucket>> {\n  const CONFIG: relationalStore.StoreConfig = {\n    name: 'Store.db',\n    securityLevel: relationalStore.SecurityLevel.S1,\n  };\n\n  // 默认数据库文件路径为 context.databaseDir + rdb + StoreConfig.name\n  let store: relationalStore.RdbStore = await relationalStore.getRdbStore(context, CONFIG);\n  console.info(`Create Store.db successfully!`);\n\n  // 获取结果集\n  let predicates: relationalStore.RdbPredicates = new relationalStore.RdbPredicates('test');\n  let resultSet = await store.query(predicates); // 查询所有数据\n  console.info(`Query data successfully! row count:${resultSet.rowCount}`);\n  let index = 0;\n  let result = new Array<relationalStore.ValuesBucket>(resultSet.rowCount)\n  resultSet.goToFirstRow()\n  do {\n    result[index++] = resultSet.getRow();\n  } while (resultSet.goToNextRow());\n  resultSet.close();\n  return result;\n}\n\n@Concurrent\nasync function clear(context: Context) {\n  const CONFIG: relationalStore.StoreConfig = {\n    name: 'Store.db',\n    securityLevel: relationalStore.SecurityLevel.S1,\n  };\n\n  // 默认数据库文件路径为 context.databaseDir + rdb + StoreConfig.name\n  await relationalStore.deleteRdbStore(context, CONFIG);\n  console.info(`Delete Store.db successfully!`);\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(async () => {\n          let context: Context = this.getUIContext().getHostContext() as Context;\n\n          // 数据准备\n          const count = 5\n          let valueBucketArray = new Array<relationalStore.ValuesBucket>(count);\n          for (let i = 0; i < count; i++) {\n            let v: relationalStore.ValuesBucket = {\n              id: i,\n              name: 'zhangsan' + i,\n              age: 20,\n              salary: 5000 + 50 * i\n            };\n            valueBucketArray[i] = v;\n          }\n          await taskpool.execute(create, context);\n          await taskpool.execute(insert, context, valueBucketArray);\n          let index = 0;\n          let ret = await taskpool.execute(query, context) as Array<relationalStore.ValuesBucket>;\n          for (let v of ret) {\n            console.info(`Row[${index}].id = ${v.id}`)\n            console.info(`Row[${index}].name = ${v.name}`)\n            console.info(`Row[${index}].age = ${v.age}`)\n            console.info(`Row[${index}].salary = ${v.salary}`)\n            index++\n          };\n          await taskpool.execute(clear, context);\n          this.message = 'success';\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "复杂类实例对象使用sendable进行大容量数据库操作",
      children: "复杂类实例对象使用Sendable进行大容量数据库操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "普通类实例对象的属性可持有Sendable类实例对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于复杂的普通类实例对象，可以先将相应数据库数据字段封装为Sendable类实例对象，再由普通类实例对象持有，从而降低跨线程开销。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义数据库中的数据格式，采用Sendable，减少跨线程耗时。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// SharedValuesBucket.ets\nexport interface IValueBucket {\n  id: number;\n  name: string;\n  age: number;\n  salary: number;\n}\n\n@Sendable\nexport class SharedValuesBucket implements IValueBucket {\n  id: number = 0;\n  name: string = \"\";\n  age: number = 0;\n  salary: number = 0;\n\n  constructor(value: IValueBucket) {\n    this.id = value.id;\n    this.name = value.name;\n    this.age = value.age;\n    this.salary = value.salary;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义普通类实例对象，持有Sendable类实例对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Material.ets\nimport { SharedValuesBucket } from './SharedValuesBucket';\nimport { collections } from '@kit.ArkTS';\n\nexport class Material {\n  seq: number = 0;\n  materialName: string = \"\";\n  // ... 省略其他属性\n  buckets: collections.Array<SharedValuesBucket | undefined>;\n\n  constructor(seq: number, materialName: string, buckets: collections.Array<SharedValuesBucket | undefined>) {\n    this.seq = seq;\n    this.materialName = materialName;\n    this.buckets = buckets;\n  }\n\n  getBuckets() : collections.Array<SharedValuesBucket | undefined>{\n    return this.buckets;\n  }\n\n  setBuckets(buckets: collections.Array<SharedValuesBucket | undefined>) {\n    this.buckets = buckets;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UI主线程发起数据库操作请求，在子线程进行数据的增删改查等操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport { relationalStore, ValuesBucket } from '@kit.ArkData';\nimport { collections, taskpool } from '@kit.ArkTS';\nimport { IValueBucket, SharedValuesBucket } from './SharedValuesBucket';\nimport { Material } from './Material';\n\n@Concurrent\nasync function create(context: Context): Promise<boolean> {\n  const CONFIG: relationalStore.StoreConfig = {\n    name: \"Store.db\",\n    securityLevel: relationalStore.SecurityLevel.S1,\n  };\n\n  try {\n    // 默认数据库文件路径为 context.databaseDir + \"/rdb/\" + StoreConfig.name\n    let store: relationalStore.RdbStore = await relationalStore.getRdbStore(context, CONFIG);\n    console.info('Create Store.db successfully!');\n\n    // 创建表\n    const CREATE_TABLE_SQL = \"CREATE TABLE IF NOT EXISTS test (\" +\n      \"id INTEGER PRIMARY KEY AUTOINCREMENT, \" +\n      \"name TEXT NOT NULL, \" +\n      \"age INTEGER, \" +\n      \"salary REAL, \" +\n      \"blobType BLOB)\";\n    await store.executeSql(CREATE_TABLE_SQL);\n    console.info('Create table test successfully!');\n    return true;\n  } catch (err) {\n    console.error(`Create db failed, code: ${err.code}, message: ${err.message}`);\n    return false;\n  }\n}\n\n@Concurrent\nasync function insert(context: Context, valueBucketArray: collections.Array<SharedValuesBucket | undefined>) {\n  const CONFIG: relationalStore.StoreConfig = {\n    name: \"Store.db\",\n    securityLevel: relationalStore.SecurityLevel.S1,\n  };\n\n  // 默认数据库文件路径为 context.databaseDir + \"/rdb/\" + StoreConfig.name\n  let store: relationalStore.RdbStore = await relationalStore.getRdbStore(context, CONFIG);\n  console.info('Create Store.db successfully!');\n\n  // 数据插入\n  await store.batchInsert(\"test\", valueBucketArray as Object as Array<ValuesBucket>);\n}\n\n@Concurrent\nasync function query(context: Context): Promise<collections.Array<SharedValuesBucket | undefined>> {\n  const CONFIG: relationalStore.StoreConfig = {\n    name: \"Store.db\",\n    securityLevel: relationalStore.SecurityLevel.S1,\n  };\n\n  // 默认数据库文件路径为 context.databaseDir + \"/rdb/\" + StoreConfig.name\n  let store: relationalStore.RdbStore = await relationalStore.getRdbStore(context, CONFIG);\n  console.info('Create Store.db successfully!');\n\n  // 获取用于查询的谓词\n  let predicates: relationalStore.RdbPredicates = new relationalStore.RdbPredicates(\"test\");\n  // 查询所有数据\n  let resultSet = await store.query(predicates);\n  console.info(`Query data successfully! row count:${resultSet.rowCount}`);\n  let index = 0;\n  let result = collections.Array.create<SharedValuesBucket | undefined>(resultSet.rowCount, undefined);\n  resultSet.goToFirstRow();\n  do {\n    let value: IValueBucket = {\n      id: resultSet.getLong(resultSet.getColumnIndex(\"id\")),\n      name: resultSet.getString(resultSet.getColumnIndex(\"name\")),\n      age: resultSet.getLong(resultSet.getColumnIndex(\"age\")),\n      salary: resultSet.getLong(resultSet.getColumnIndex(\"salary\"))\n    };\n    result[index++] = new SharedValuesBucket(value);\n  } while (resultSet.goToNextRow());\n  resultSet.close();\n  return result;\n}\n\n@Concurrent\nasync function deleteStore(context: Context) {\n  const CONFIG: relationalStore.StoreConfig = {\n    name: \"Store.db\",\n    securityLevel: relationalStore.SecurityLevel.S1,\n  };\n\n  // 默认数据库文件路径为 context.databaseDir + \"/rdb/\" + StoreConfig.name\n  await relationalStore.deleteRdbStore(context, CONFIG);\n  console.info('Delete Store.db successfully!');\n}\n\nfunction initMaterial() : Material {\n  // 数据准备\n  const count = 5;\n  let valueBucketArray = collections.Array.create<SharedValuesBucket | undefined>(count, undefined);\n  for (let i = 0; i < count; i++) {\n    let value: IValueBucket = {\n      id: i,\n      name: \"zhangsan\" + i,\n      age: 20,\n      salary: 5000 + 50 * i\n    };\n    valueBucketArray[i] = new SharedValuesBucket(value);\n  }\n  let material = new Material(1, \"test\", valueBucketArray);\n  return material;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(async () => {\n          let context : Context = this.getUIContext().getHostContext() as Context;\n          let material = initMaterial();\n          let ret = await taskpool.execute(create, context);\n          if (!ret) {\n            console.error(\"Create db failed.\");\n            return;\n          }\n          await taskpool.execute(insert, context, material.getBuckets());\n          let index = 0;\n          let resultSet: collections.Array<SharedValuesBucket> =\n            await taskpool.execute(query, context) as collections.Array<SharedValuesBucket>;\n          material.setBuckets(resultSet);\n          for (let value of resultSet.values()) {\n            console.info(`Row[${index}].id = ${value.id}`);\n            console.info(`Row[${index}].name = ${value.name}`);\n            console.info(`Row[${index}].age = ${value.age}`);\n            console.info(`Row[${index}].salary = ${value.salary}`);\n            index++;\n          }\n          await taskpool.execute(deleteStore, context);\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
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