"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["586430"], {
195343(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_app_data_persistence_data_persistence_by_rdb_store_data_persistence_by_rdb_store_md_5e6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-app-data-persistence-data-persistence-by-rdb-store-data-persistence-by-rdb-store-md-5e6.json
var site_docs_arkdata_app_data_persistence_data_persistence_by_rdb_store_data_persistence_by_rdb_store_md_5e6_namespaceObject = JSON.parse('{"id":"arkdata/app-data-persistence/data-persistence-by-rdb-store/data-persistence-by-rdb-store","title":"通过关系型数据库实现数据持久化 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/app-data-persistence/data-persistence-by-rdb-store/data-persistence-by-rdb-store.md","sourceDirName":"arkdata/app-data-persistence/data-persistence-by-rdb-store","slug":"/arkdata/app-data-persistence/data-persistence-by-rdb-store/","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/data-persistence-by-rdb-store/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"通过关系型数据库实现数据持久化 (ArkTS)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-persistence-by-rdb-store","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过键值型数据库实现数据持久化 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/data-persistence-by-kv-store/"},"next":{"title":"通过关系型数据库实现数据持久化 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/native-relational-store-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/app-data-persistence/data-persistence-by-rdb-store/data-persistence-by-rdb-store.md


const frontMatter = {
	title: '通过关系型数据库实现数据持久化 (ArkTS)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-persistence-by-rdb-store',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '通过关系型数据库实现数据持久化 (ArkTS)';

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
        id: "通过关系型数据库实现数据持久化-arkts",
        children: "通过关系型数据库实现数据持久化 (ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关系型数据库基于SQLite组件，适用于存储包含复杂关系数据的场景，比如一个班级的学生信息，需要包括姓名、学号、各科成绩等，又或者公司的雇员信息，需要包括姓名、工号、职位等，由于数据之间有较强的对应关系，复杂程度比键值型数据更高，此时需要使用关系型数据库来持久化保存数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["大数据量场景下查询数据可能会导致耗时长甚至应用卡死，如有相关操作可参考文档", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/batch-database-operations-guide",
        children: "批量数据写数据库场景"
      }), "，且有建议如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单次查询数据量不超过5000条。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool",
          children: "TaskPool"
        }), "中查询。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拼接SQL语句尽量简洁。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "合理地分批次查询。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "谓词"
          })
        }), "：数据库中用来代表数据实体的性质、特征或者数据实体之间关系的词项，主要用来定义数据库的操作条件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "结果集"
          })
        }), "：指用户查询之后的结果集合，可以对数据进行访问。结果集提供了灵活的数据访问方式，可以更方便地拿到用户想要的数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关系型数据库对应用提供通用的操作接口，底层使用SQLite作为持久化存储引擎，支持SQLite具有的数据库特性，包括但不限于事务、索引、视图、触发器、外键、参数化查询和预编译SQL语句。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 关系型数据库运作机制"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(536258)/* ["default"] */.A) + "",
        width: "385",
        height: "550"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["系统默认日志方式是", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkdata/data-terminology#wal%E6%A8%A1%E5%BC%8F",
          children: "WAL"
        }), "（Write Ahead Log）模式，系统默认落盘方式是", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkdata/data-terminology#full%E6%A8%A1%E5%BC%8F",
          children: "FULL模式"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据库中常驻有4个读连接和1个写连接。读连接会动态扩充，无可用读连接时，会创建新的读连接执行读操作。写连接不会动态扩充，无可用写连接时，会等待连接释放后执行写操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为保证数据的准确性，数据库同一时间只能支持一个写操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当应用被卸载完成后，设备上的相关数据库文件及临时文件会被自动清除。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArkTS侧支持的基本数据类型：number、string、二进制类型数据、boolean。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为保证插入并读取数据成功，建议一条数据不要超过2M。超出该大小，插入成功，读取失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是关系型数据库持久化功能的相关接口，更多接口及使用方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore/arkts-apis-data-relationalstore",
        children: "@ohos.data.relationalStore (关系型数据库)"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "getRdbStore(context: Context, config: StoreConfig, callback: AsyncCallback<RdbStore>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获得一个RdbStore，操作关系型数据库，用户可以根据自己的需求配置RdbStore的参数，然后通过RdbStore调用相关接口可以执行相关的数据操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createTransaction(options?: TransactionOptions): Promise<Transaction>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个事务对象并开始事务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "execute(sql: string, args?: Array<ValueType>):Promise<ValueType>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行包含指定参数的SQL语句。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "querySql(sql: string, bindArgs?: Array<ValueType>):Promise<ResultSet>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定SQL语句查询数据库中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "insert(table: string, values: ValuesBucket, conflict?: ConflictResolution): Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向目标表中插入一行数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "update(values: ValuesBucket, predicates: RdbPredicates, callback: AsyncCallback<number>):void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据predicates的指定实例对象更新数据库中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delete(predicates: RdbPredicates, callback: AsyncCallback<number>):void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据predicates的指定实例对象从数据库中删除数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>):void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定条件查询数据库中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deleteRdbStore(context: Context, name: string, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isTokenizerSupported(tokenizer: Tokenizer): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断当前平台是否支持传入的分词器（将文本分解为更小单元的工具，这些单元可以是单词、子词、字符或者其他语言片段）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因Stage模型、FA模型的差异，个别示例代码提供了在两种模型下的对应示例；示例代码未区分模型或没有对应注释说明时默认在两种模型下均适用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关系型数据库操作或者存储过程中，有可能会因为各种原因发生非预期的数据库异常情况（抛出14800011），此时需要对数据库进行重建并恢复数据，以保障正常的应用开发，具体可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore#%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E5%BC%82%E5%B8%B8%E9%87%8D%E5%BB%BA",
        children: "关系型数据库异常重建"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用关系型数据库实现数据持久化，需要获取一个RdbStore，其中包括建库、建表、升降级等操作。推荐使用事务接口保证数据库升级流程原子性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Stage模型示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { relationalStore } from '@kit.ArkData'; // 导入模块\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0000;\n\nlet store: relationalStore.RdbStore | undefined = undefined;\nlet tokenType = relationalStore.Tokenizer.ICU_TOKENIZER;\nlet tokenTypeSupported = relationalStore.isTokenizerSupported(tokenType);\nif (!tokenTypeSupported) {\n  tokenType = relationalStore.Tokenizer.NONE_TOKENIZER;\n  hilog.error(DOMAIN, 'rdbDataPersistence', `ICU_TOKENIZER is not supported on this platform.`);\n}\nconst STORE_CONFIG: relationalStore.StoreConfig = {\n  // 数据库文件名\n  name: 'RdbTest.db',\n  // 数据库安全级别\n  securityLevel: relationalStore.SecurityLevel.S3,\n  // 可选参数，指定数据库是否加密，默认不加密\n  encrypt: false,\n  // 可选参数，数据库自定义路径。默认在本应用沙箱目录下创建RdbStore实例。\n  customDir: 'customDir/subCustomDir',\n  // 可选参数，指定数据库是否以只读方式打开。默认为false，表示数据库可读可写。为true时，只允许从数据库读取数据，不允许对数据库进行写操作，否则会返回错误码801。\n  isReadOnly: false,\n  // 可选参数，指定用户在全文搜索场景(FTS)下使用哪种分词器。默认在FTS下仅支持英文分词，不支持其他语言分词。\n  tokenizer: tokenType,\n};\n// ...\n  // 判断数据库版本，如果不匹配则需进行升降级操作\n  // 假设当前数据库版本为3，表结构：EMPLOYEE (NAME, AGE, SALARY, CODES, IDENTITY)\n  // 建表Sql语句, IDENTITY为bigint类型，sql中指定类型为UNLIMITED INT\n  const SQL_CREATE_TABLE =\n    'CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB, ADDRESS TEXT)';\n  if (store === undefined) {\n    try {\n      store = await relationalStore.getRdbStore(context, STORE_CONFIG);\n    } catch (e) {\n      const err = e as BusinessError;\n      hilog.error(DOMAIN, 'rdbDataPersistence', `Failed to get RdbStore. Code:${err.code}, message:${err.message}`);\n      return;\n    }\n  }\n  hilog.info(DOMAIN, 'rdbDataPersistence', 'Succeeded in getting RdbStore.');\n  if (store !== undefined) {\n    let transaction = await store.createTransaction({});\n    let storeVersion = await transaction.execute('PRAGMA user_version');\n    // 当数据库创建时，数据库默认版本为0\n    // 示例应用升级流程较短，所以使用单个事务。如果实际业务中升级逻辑较多，建议拆分多个独立事务串行执行。\n    if (storeVersion === 0) {\n      try {\n        await transaction.execute(SQL_CREATE_TABLE); // 创建数据表，以便后续调用insert接口插入数据\n        storeVersion = 1;\n        hilog.info(DOMAIN, 'rdbDataPersistence', 'Upgrade store version from 0 to 1 success.');\n        // 设置数据库的版本，入参为大于0的整数\n      } catch (e) {\n        const err = e as BusinessError;\n        await transaction.rollback();\n        hilog.error(DOMAIN, 'rdbDataPersistence', `Failed to execute sql. Code:${err.code}, message:${err.message}`);\n        return;\n      }\n    }\n    // 如果数据库版本不为0且和当前数据库版本不匹配，需要进行升降级操作\n    // 当前数据库存在并且版本为1，数据库需要从1版本升级到2版本\n    if (storeVersion === 1) {\n      // version = 1：表结构：EMPLOYEE (NAME, AGE, SALARY, CODES, ADDRESS)\n      // => version = 2：表结构：EMPLOYEE (NAME, AGE, SALARY, CODES, ADDRESS, IDENTITY)\n      try {\n        await transaction.execute('ALTER TABLE EMPLOYEE ADD COLUMN IDENTITY UNLIMITED INT');\n        storeVersion = 2;\n        hilog.info(DOMAIN, 'rdbDataPersistence', 'Upgrade store version from 1 to 2 success.');\n      } catch (e) {\n        const err = e as BusinessError;\n        await transaction.rollback();\n        hilog.error(DOMAIN, 'rdbDataPersistence', `Failed to execute sql. Code:${err.code}, message:${err.message}`);\n        return;\n      }\n    }\n    // 当前数据库存在并且版本为2，数据库需要从2版本升级到3版本\n    if (storeVersion === 2) {\n      // version = 2：表结构：EMPLOYEE (NAME, AGE, SALARY, CODES, ADDRESS, IDENTITY)\n      // => version = 3：表结构：EMPLOYEE (NAME, AGE, SALARY, CODES, IDENTITY)\n      try {\n        await transaction.execute('ALTER TABLE EMPLOYEE DROP COLUMN ADDRESS');\n        storeVersion = 3;\n        await transaction.execute('PRAGMA user_version = 3');\n        hilog.info(DOMAIN, 'rdbDataPersistence', 'Upgrade store version from 2 to 3 success.')\n      } catch (e) {\n        const err = e as BusinessError;\n        await transaction.rollback();\n        hilog.error(DOMAIN, 'rdbDataPersistence', `Failed to execute sql. Code:${err.code}, message:${err.message}`);\n        return;\n      }\n    }\n    await transaction.commit();\n    // 请确保获取到RdbStore实例，完成数据表创建后，再进行数据库的增、删、改、查等操作\n  }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FA模型示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { relationalStore } from '@kit.ArkData'; // 导入模块\nimport { featureAbility } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet context = featureAbility.getContext();\n\nconst STORE_CONFIG: relationalStore.StoreConfig = {\n  name: 'RdbTest.db', // 数据库文件名\n  securityLevel: relationalStore.SecurityLevel.S3 // 数据库安全级别\n};\n\n// 假设当前数据库版本为3，表结构：EMPLOYEE (NAME, AGE, SALARY, CODES, IDENTITY)\n// 建表Sql语句，IDENTITY为bigint类型，sql中指定类型为UNLIMITED INT\nconst SQL_CREATE_TABLE =\n  'CREATE TABLE IF NOT EXISTS EMPLOYEE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER, SALARY REAL, CODES BLOB, IDENTITY UNLIMITED INT)';\n\nrelationalStore.getRdbStore(context, STORE_CONFIG, async (err, store) => {\n  if (err) {\n    console.error(`Failed to get RdbStore. Code:${err.code}, message:${err.message}`);\n    return;\n  }\n  console.info('Succeeded in getting RdbStore.');\n\n  let storeVersion = store.version;\n  // 当数据库创建时，数据库默认版本为0\n  if (storeVersion === 0) {\n    try {\n      await store.execute(SQL_CREATE_TABLE); // 创建数据表，以便后续调用insert接口插入数据\n      // 设置数据库的版本，入参为大于0的整数\n      storeVersion = 3;\n    } catch (e) {\n      const err = e as BusinessError;\n      console.error(`Failed to execute sql. Code:${err.code}, message:${err.message}`);\n    }\n  }\n\n  // 如果数据库版本不为0且和当前数据库版本不匹配，需要进行升降级操作\n  // 当前数据库存在并且版本为1，数据库需要从1版本升级到2版本\n  if (storeVersion === 1) {\n    try {\n      // version = 1：表结构：EMPLOYEE (NAME, SALARY, CODES, ADDRESS) => version = 2：表结构：EMPLOYEE (NAME, AGE, SALARY, CODES, ADDRESS)\n      await store.execute('ALTER TABLE EMPLOYEE ADD COLUMN AGE INTEGER');\n      storeVersion = 2;\n      console.info(\"Upgrade store version from 1 to 2 success.\")\n    } catch (e) {\n      const err = e as BusinessError;\n      console.error(`Failed to execute sql. Code:${err.code}, message:${err.message}`);\n    }\n  }\n\n  // 当前数据库存在并且版本为2，数据库需要从2版本升级到3版本\n  if (storeVersion === 2) {\n    try {\n      // version = 2：表结构：EMPLOYEE (NAME, AGE, SALARY, CODES, ADDRESS) => version = 3：表结构：EMPLOYEE (NAME, AGE, SALARY, CODES)\n      await store.execute('ALTER TABLE EMPLOYEE DROP COLUMN ADDRESS');\n      storeVersion = 3;\n      console.info(\"Upgrade store version from 2 to 3 success.\")\n    } catch (e) {\n      const err = e as BusinessError;\n      console.error(`Failed to execute sql. Code:${err.code}, message:${err.message}`);\n    }\n  }\n  store.version = storeVersion;\n  // 请确保获取到RdbStore实例，完成数据表创建后，再进行数据库的增、删、改、查等操作\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(687935)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用创建的数据库与其上下文（Context）有关，即使使用同样的数据库名称，但不同的应用上下文，会产生多个数据库，例如每个UIAbility都有各自的上下文。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当应用首次获取数据库（调用getRdbStore）后，在应用沙箱内会产生对应的数据库文件。使用数据库的过程中，在与数据库文件相同的目录下可能会产生以-wal和-shm结尾的临时文件。此时若开发者希望移动数据库文件到其它地方使用查看，则需要同时移动这些临时文件，当应用被卸载完成后，其在设备上产生的数据库文件及临时文件也会被移除。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal",
              children: "通用错误码"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb",
              children: "关系型数据库错误码"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取到RdbStore，完成数据表创建后，调用insert()接口插入数据。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 插入数据\nlet value1 = 'Lisa';\nlet value2 = 18;\nlet value3 = 100.5;\nlet value4 = new Uint8Array([1, 2, 3, 4, 5]);\nlet value5 = BigInt('15822401018187971961171');\nconst valueBucket: relationalStore.ValuesBucket = {\n  NAME: value1,\n  AGE: value2,\n  SALARY: value3,\n  CODES: value4,\n  IDENTITY: value5,\n};\nif (store !== undefined) {\n  try {\n    const rowId = await store.insert('EMPLOYEE', valueBucket);\n    hilog.info(DOMAIN, 'rdbDataPersistence', `Succeeded in inserting data. rowId:${rowId}`);\n  } catch (error) {\n    const err = error as BusinessError;\n    hilog.error(DOMAIN, 'rdbDataPersistence', `Failed to insert data. Code:${err.code}, message:${err.message}`);\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(507320)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关系型数据库没有显式的flush操作实现持久化，数据插入即保存在持久化文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据谓词指定的实例对象，对数据进行修改或删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用update()方法修改数据，调用delete()方法删除数据。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 修改数据、删除数据\nlet value6 = 'Rose';\nlet value7 = 22;\nlet value8 = 200.5;\nlet value9 = new Uint8Array([1, 2, 3, 4, 5]);\nlet value10 = BigInt('15822401018187971967863');\nconst valueBucket2: relationalStore.ValuesBucket = {\n  NAME: value6,\n  AGE: value7,\n  SALARY: value8,\n  CODES: value9,\n  IDENTITY: value10,\n};\n\n// 修改数据\nlet predicates1 = new relationalStore.RdbPredicates('EMPLOYEE'); // 创建表'EMPLOYEE'的predicates\npredicates1.equalTo('NAME', 'Lisa'); // 匹配表'EMPLOYEE'中'NAME'为'Lisa'的字段\nif (store !== undefined) {\n  (store as relationalStore.RdbStore).update(valueBucket2, predicates1, (err: BusinessError, rows: number) => {\n    if (err) {\n      hilog.error(DOMAIN, 'rdbDataPersistence', `Failed to update data. Code:${err.code}, message:${err.message}`);\n      return;\n    }\n    hilog.info(DOMAIN, 'rdbDataPersistence', `Succeeded in updating data. row count: ${rows}`);\n  })\n}\n\n// 删除数据\npredicates1 = new relationalStore.RdbPredicates('EMPLOYEE');\npredicates1.equalTo('NAME', 'Lisa');\nif (store !== undefined) {\n  (store as relationalStore.RdbStore).delete(predicates1, (err: BusinessError, rows: number) => {\n    if (err) {\n      hilog.error(DOMAIN, 'rdbDataPersistence', `Failed to delete data. Code:${err.code}, message:${err.message}`);\n      return;\n    }\n    hilog.info(DOMAIN, 'rdbDataPersistence', `Delete rows: ${rows}`);\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据谓词指定的查询条件查找数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用query()方法查找数据，返回一个ResultSet结果集。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 查找数据\nlet predicates2 = new relationalStore.RdbPredicates('EMPLOYEE');\npredicates2.equalTo('NAME', 'Rose');\nif (store !== undefined) {\n  (store as relationalStore.RdbStore).query(predicates2, ['ID', 'NAME', 'AGE', 'SALARY', 'CODES', 'IDENTITY'], (err: BusinessError, resultSet) => {\n    if (err) {\n      hilog.error(DOMAIN, 'rdbDataPersistence', `Failed to query data. Code:${err.code}, message:${err.message}`);\n      return;\n    }\n    hilog.info(DOMAIN, 'rdbDataPersistence', `ResultSet column names: ${resultSet.columnNames}, column count: ${resultSet.columnCount}`);\n    // resultSet是一个数据集合的游标，默认指向第-1个记录，有效的数据从0开始。\n    while (resultSet.goToNextRow()) {\n      const id = resultSet.getLong(resultSet.getColumnIndex('ID'));\n      const name = resultSet.getString(resultSet.getColumnIndex('NAME'));\n      const age = resultSet.getLong(resultSet.getColumnIndex('AGE'));\n      const salary = resultSet.getDouble(resultSet.getColumnIndex('SALARY'));\n      const identity = resultSet.getValue(resultSet.getColumnIndex('IDENTITY'));\n      hilog.info(DOMAIN, 'rdbDataPersistence', `id=${id}, name=${name}, age=${age}, salary=${salary}, identity=${identity}`);\n    }\n    // 释放数据集的内存\n    resultSet.close();\n  })\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(99460)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当应用完成查询数据操作，不再使用结果集（ResultSet）时，请及时调用close方法关闭结果集，释放系统为其分配的内存。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前RDB还支持进行FTS全文检索，可以根据中文或者英文进行文本检索，针对中文分词器支持ICU分词器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以中文关键字检索为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 中文关键字检索，查找数据\nif (store !== undefined && tokenTypeSupported) {\n  // 创建全文检索表\n  const SQL_CREATE_TABLE = 'CREATE VIRTUAL TABLE IF NOT EXISTS example USING fts4(name, content, tokenize=icu zh_CN)';\n  try {\n    await store.execute(SQL_CREATE_TABLE);\n    hilog.info(DOMAIN, 'rdbDataPersistence', 'Succeeded in creating fts table.');\n  } catch (error) {\n    const err = error as BusinessError;\n    hilog.error(DOMAIN, 'rdbDataPersistence', `Failed to creating fts table. code: ${err.code}, message: ${err.message}.`);\n  }\n}\nif (store !== undefined) {\n  try {\n    const resultSet = await store.querySql('SELECT name FROM example WHERE example MATCH ?', ['测试']);\n    while (resultSet.goToNextRow()) {\n      const name = resultSet.getValue(resultSet.getColumnIndex('name'));\n      hilog.info(DOMAIN, 'rdbDataPersistence', `name=${name}`);\n    }\n    resultSet.close();\n  } catch (error) {\n    const err = error as BusinessError;\n    hilog.error(DOMAIN, 'rdbDataPersistence', `Query failed. code: ${err.code}, message: ${err.message}.`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用事务对象执行数据的插入、删除和更新操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用createTransaction方法创建事务对象并执行相应操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持配置的事务类型有DEFERRED、IMMEDIATE和EXCLUSIVE，默认为DEFERRED。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体信息请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#createtransaction14",
            children: "关系型数据库"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 使用事务对象执行数据的插入、删除和更新操作\nif (store !== undefined) {\n  // 创建事务对象\n  try {\n    const transaction = await store.createTransaction();\n    try {\n      // 使用事务对象插入数据\n      const rowId = await transaction.insert(\n        'EMPLOYEE',\n        {\n          NAME: 'Lisa',\n          AGE: 18,\n          SALARY: 100.5,\n          CODES: new Uint8Array([1, 2, 3, 4, 5]),\n          IDENTITY: BigInt('15822401018187971967763')\n        },\n        relationalStore.ConflictResolution.ON_CONFLICT_REPLACE\n      );\n      hilog.info(DOMAIN, 'rdbDataPersistence', `Insert is successful, rowId = ${rowId}`);\n\n      const predicates = new relationalStore.RdbPredicates('EMPLOYEE');\n      predicates.equalTo('NAME', 'Lisa');\n      // 使用事务对象更新数据\n      const rows = await transaction.update(\n        {\n          NAME: 'Rose',\n          AGE: 22,\n          SALARY: 200.5,\n          CODES: new Uint8Array([1, 2, 3, 4, 5]),\n          IDENTITY: BigInt('15822401018187971967763')\n        },\n        predicates,\n        relationalStore.ConflictResolution.ON_CONFLICT_REPLACE\n      );\n      hilog.info(DOMAIN, 'rdbDataPersistence', `Updated row count: ${rows}`);\n\n      // 使用事务对象删除数据\n      await transaction.execute('DELETE FROM EMPLOYEE WHERE age = ? OR age = ?', [21, 20]);\n      hilog.info(DOMAIN, 'rdbDataPersistence', `execute delete success`);\n\n      // 提交事务\n      await transaction.commit();\n      hilog.info(DOMAIN, 'rdbDataPersistence', 'Transaction commit success.');\n    } catch (error) {\n      const err = error as BusinessError;\n      // 执行失败回滚事务\n      await transaction.rollback();\n      hilog.error(DOMAIN, 'rdbDataPersistence', `Transaction execute failed, code is ${err.code}, message is ${err.message}`);\n    }\n  } catch (error) {\n    const err = error as BusinessError;\n    hilog.error(DOMAIN, 'rdbDataPersistence', `createTransaction failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在同路径下备份数据库。关系型数据库支持手动备份和自动备份（仅系统应用可用）两种方式，具体可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkdata/data-reliability-security/data-backup-and-restore#%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E5%A4%87%E4%BB%BD",
            children: "关系型数据库备份"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此处以手动备份为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在同路径下备份数据库\nif (store !== undefined) {\n  // 'Backup.db'为备份数据库文件名，默认在RdbStore同路径下备份。也可指定路径：customDir + 'Backup.db'\n  (store as relationalStore.RdbStore).backup('Backup.db', (err: BusinessError) => {\n    if (err) {\n      hilog.error(DOMAIN, 'rdbDataPersistence', `Failed to backup RdbStore. Code:${err.code}, message:${err.message}`);\n      return;\n    }\n    hilog.info(DOMAIN, 'rdbDataPersistence', `Succeeded in backing up RdbStore.`);\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从备份数据库中恢复数据。关系型数据库支持两种方式：恢复手动备份数据和恢复自动备份数据（仅系统应用可用），具体可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkdata/data-reliability-security/data-backup-and-restore#%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E6%95%B0%E6%8D%AE%E6%81%A2%E5%A4%8D",
            children: "关系型数据库数据恢复"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此处以调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#restore",
            children: "restore"
          }), "接口恢复手动备份数据为例："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 备份数据库中恢复数据\nif (store !== undefined) {\n  (store as relationalStore.RdbStore).restore('Backup.db', (err: BusinessError) => {\n    if (err) {\n      hilog.error(DOMAIN, 'rdbDataPersistence', `Failed to restore RdbStore. Code:${err.code}, message:${err.message}`);\n      return;\n    }\n    hilog.info(DOMAIN, 'rdbDataPersistence', `Succeeded in restoring RdbStore.`);\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除数据库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用deleteRdbStore()方法，删除数据库及数据库相关文件。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Stage模型示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 删除数据库\nrelationalStore.deleteRdbStore(context, 'RdbTest.db', (err: BusinessError) => {\n  if (err) {\n    hilog.error(DOMAIN, 'rdbDataPersistence', `Failed to delete RdbStore. Code:${err.code}, message:${err.message}`);\n    return;\n  }\n  hilog.info(DOMAIN, 'rdbDataPersistence', 'Succeeded in deleting RdbStore.');\n});\n"
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
687935(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
99460(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
536258(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957522-d8285f6ab93943459980f82e3a70697a.jpg");

},
507320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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