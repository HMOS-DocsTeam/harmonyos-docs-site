"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["500812"], {
255005(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_app_data_persistence_native_vector_store_guidelines_native_vector_store_guidelines_md_f57_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-app-data-persistence-native-vector-store-guidelines-native-vector-store-guidelines-md-f57.json
var site_docs_arkdata_app_data_persistence_native_vector_store_guidelines_native_vector_store_guidelines_md_f57_namespaceObject = JSON.parse('{"id":"arkdata/app-data-persistence/native-vector-store-guidelines/native-vector-store-guidelines","title":"通过向量数据库实现数据持久化 (C/C++)","description":"场景介绍","source":"@site/docs/arkdata/app-data-persistence/native-vector-store-guidelines/native-vector-store-guidelines.md","sourceDirName":"arkdata/app-data-persistence/native-vector-store-guidelines","slug":"/arkdata/app-data-persistence/native-vector-store-guidelines/","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/native-vector-store-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"通过向量数据库实现数据持久化 (C/C++)","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-vector-store-guidelines","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过向量数据库实现数据持久化 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/data-persistence-by-vector-store/"},"next":{"title":"同应用跨设备数据同步概述","permalink":"/harmonyos-docs-site/arkdata/distributed-data-sync/sync-app-data-across-devices-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/app-data-persistence/native-vector-store-guidelines/native-vector-store-guidelines.md


const frontMatter = {
	title: '通过向量数据库实现数据持久化 (C/C++)',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-vector-store-guidelines',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '通过向量数据库实现数据持久化 (C/C++)';

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
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "规格限制",
  "id": "规格限制",
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
        id: "通过向量数据库实现数据持久化-cc",
        children: "通过向量数据库实现数据持久化 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向量数据库是一种支持存储、管理和检索向量数据的数据库，也支持标量的关系型数据处理。数据类型\"floatvector\"用来存储数据向量化的结果，从而实现对这些数据的快速检索和相似性搜索‌。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持通过向量数据库实现数据持久化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "结果集"
          })
        }), "：指用户查询之后的结果集合，可以对数据进行访问。结果集提供了灵活的数据访问方式，可以更方便地拿到用户想要的数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "floatvector"
          })
        }), "：该数据类型表示向量数据，例如[1.0, 3.0, 2.4, 5.1, 6.2, 11.7]。"]
      }), "\n"]
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
        children: "数据库中默认有4个读连接和1个写连接，线程获取到空闲读连接时，即可进行读取操作。当没有空闲读连接时，会创建新的读连接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为保证数据的准确性，数据库同一时间只能支持一个写操作，并发的写操作会串行执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当应用被卸载完成后，设备上的相关数据库文件及临时文件会被自动清除。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为保证插入并读取数据成功，建议一条数据不要超过2M。超出该大小，插入成功，读取失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规格限制",
      children: "规格限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详情见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/app-data-persistence/data-persistence-by-vector-store#%E8%A7%84%E6%A0%BC%E9%99%90%E5%88%B6",
        children: "规格限制"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb",
        children: "RDB"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "int OH_Rdb_SetDbType(OH_Rdb_ConfigV2 *config, int dbType)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置数据库类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Rdb_Store *OH_Rdb_CreateOrOpen(const OH_Rdb_ConfigV2 *config, int *errCode)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获得一个相关的OH_Rdb_Store实例(调用OH_Rdb_SetDbType设置dbType为RDB_CAYLEY)，操作向量数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_ExecuteV2(OH_Rdb_Store *store, const char *sql, const OH_Data_Values *args, OH_Data_Value **result)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行有返回值的SQL语句，用来执行写操作，支持参数绑定，语句中的各种表达式和操作符之间的关系操作符号(例如=、>、<)不超过1000个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_ExecuteByTrxId(OH_Rdb_Store *store, int64_t trxId, const char *sql)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用指定的事务ID执行无返回值的SQL语句，事务ID为0时不使用事务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Cursor *OH_Rdb_ExecuteQuery(OH_Rdb_Store *store, const char *sql)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定SQL语句查询数据库中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Cursor *OH_Rdb_ExecuteQueryV2(OH_Rdb_Store *store, const char *sql, const OH_Data_Values *args)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定SQL语句查询数据库中的数据，支持参数绑定，语句中的各种表达式和操作符之间的关系操作符号(例如=、>、<)不超过1000个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Rdb_DeleteStoreV2(const OH_Rdb_ConfigV2 *config)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Cursor_GetFloatVectorCount(OH_Cursor *cursor, int32_t columnIndex, size_t *length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前行中指定列的浮点数数组大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int OH_Cursor_GetFloatVector(OH_Cursor *cursor, int32_t columnIndex, float *val, size_t inLen, size_t *outLen)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以浮点数数组的形式获取当前行中指定列的值，其中inLen不能小于实际的数组大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加动态链接库"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CMakeLists.txt中添加以下lib。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libnative_rdb_ndk.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <hilog/log.h>\n#include <database/data/oh_data_values.h>\n#include <database/rdb/oh_cursor.h>\n#include <database/rdb/relational_store.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "判断当前系统是否支持向量数据库，若不支持，则表示当前系统不具备向量数据库能力。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int numType = 0;\n// 如果numType为2则支持向量数据库，为1则不支持向量数据库\nOH_Rdb_GetSupportedDbType(&numType);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前系统支持向量数据库时，获取OH_Rdb_Store实例。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建OH_Rdb_Config对象\nOH_Rdb_ConfigV2 *config = OH_Rdb_CreateConfig();\n// 该路径为应用沙箱路径\n// 数据库文件创建位置位于沙箱路径 /data/storage/el2/database/rdb/rdb_vector_test.db\nOH_Rdb_SetDatabaseDir(config, \"/data/storage/el2/database\");\n// 数据库文件名\nOH_Rdb_SetStoreName(config, \"rdb_vector_test.db\");\n// 应用包名\nOH_Rdb_SetBundleName(config, \"com.samples.vectorStore\");\n// 数据库是否加密\nOH_Rdb_SetEncrypted(config, false);\n// 数据库文件安全等级\nOH_Rdb_SetSecurityLevel(config, OH_Rdb_SecurityLevel::S1);\n// 数据库文件存放的安全区域\nOH_Rdb_SetArea(config, RDB_SECURITY_AREA_EL1);\n// 数据库类型\nOH_Rdb_SetDbType(config, RDB_CAYLEY);\n    \n// 获取OH_Rdb_Store实例\nint errCode = 0;\nOH_Rdb_Store *store_ = OH_Rdb_CreateOrOpen(config, &errCode);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取到OH_Rdb_Store后，建表并插入数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(591147)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "向量数据库没有显式的flush操作实现持久化，数据插入即保存在持久化文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "char createTableSql[] =\n    \"CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY AUTOINCREMENT, data1 floatvector(2));\";\n// 执行建表语句\nOH_Rdb_ExecuteByTrxId(store_, 0, createTableSql);\n    \n// 不使用参数绑定插入数据\nOH_Rdb_ExecuteV2(store_, \"INSERT INTO test (id, data1) VALUES (0, '[3.4, 4.5]');\", nullptr, nullptr);\n// 使用参数绑定插入数据\nOH_Data_Values *values = OH_Values_Create();\nOH_Values_PutInt(values, 1);\nfloat test[] = { 1.2, 2.3 };\nsize_t len = sizeof(test) / sizeof(test[0]);\nOH_Values_PutFloatVector(values, test, len);\nchar insertSql[] = \"INSERT INTO test (id, data1) VALUES (?, ?);\";\nOH_Rdb_ExecuteV2(store_, insertSql, values, nullptr);\nOH_Values_Destroy(values);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取到OH_Rdb_Store后，修改或删除数据。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 不使用参数绑定修改数据\nOH_Rdb_ExecuteV2(store_, \"update test set data1 = '[5.1, 6.1]' where id = 0;\", nullptr, nullptr);\n    \n// 使用参数绑定修改数据\nfloat test1[2] = { 5.5, 6.6 };\nOH_Data_Values *values1 = OH_Values_Create();\nsize_t len1 = sizeof(test1) / sizeof(test1[0]);\nOH_Values_PutFloatVector(values1, test1, len1);\nOH_Values_PutInt(values1, 1);\nOH_Rdb_ExecuteV2(store_, \"update test set data1 = ? where id = ?\", values1, nullptr);\nOH_Values_Destroy(values1);\n    \n// 不使用参数绑定删除数据\nOH_Rdb_ExecuteV2(store_, \"delete from test where id = 0\", nullptr, nullptr);\n    \n// 使用参数绑定删除数据\nOH_Data_Values *values2 = OH_Values_Create();\nOH_Values_PutInt(values2, 1);\nOH_Rdb_ExecuteV2(store_, \"delete from test where id = ?\", values2, nullptr);\nOH_Values_Destroy(values2);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取到OH_Rdb_Store后，查询数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(772801)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当应用完成查询数据操作，不再使用结果集（OH_Cursor）时，请及时调用destroy方法关闭结果集，释放系统为其分配的内存。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 不使用参数绑定查询数据\nOH_Cursor *cursor = OH_Rdb_ExecuteQueryV2(store_, \"select * from test where id = 1;\", nullptr);\nif (cursor == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Query failed.\");\n    return;\n}\n// getRowCount会遍历全表获取行数，存在性能开销。请根据实际场景合理使用。\nint rowCount = 0;\ncursor->getRowCount(cursor, &rowCount);\nwhile (cursor->goToNextRow(cursor) == OH_Rdb_ErrCode::RDB_OK) {\n    size_t count = 0;\n    // floatvector数组是第二列数据，1表示列下标索引\n    OH_Cursor_GetFloatVectorCount(cursor, 1, &count);\n    float test[count];\n    size_t outLen;\n    OH_Cursor_GetFloatVector(cursor, 1, test, count, &outLen);\n}\ncursor->destroy(cursor);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 使用参数绑定查询数据\nchar querySql[] = \"select * from test where id = ?;\";\nOH_Data_Values *values = OH_Values_Create();\nOH_Values_PutInt(values, 1);\nOH_Cursor *cursor = OH_Rdb_ExecuteQueryV2(store_, querySql, values);\nif (cursor == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Query failed.\");\n    return;\n}\nwhile (cursor->goToNextRow(cursor) == OH_Rdb_ErrCode::RDB_OK) {\n    size_t count = 0;\n    // floatvector数组是第二列数据，1表示列下标索引\n    OH_Cursor_GetFloatVectorCount(cursor, 1, &count);\n    float test[count];\n    size_t outLen;\n    OH_Cursor_GetFloatVector(cursor, 1, test, count, &outLen);\n}\nOH_Values_Destroy(values);\ncursor->destroy(cursor);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 子查询，创建第二张表\nOH_Rdb_ExecuteV2(store_, \"CREATE TABLE IF NOT EXISTS example(id text PRIMARY KEY);\", nullptr, nullptr);\nchar querySql[] = \"select * from test where id in (select id from example);\";\nOH_Cursor *cursor = OH_Rdb_ExecuteQueryV2(store_, querySql, nullptr);\nif (cursor == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Query failed.\");\n    return;\n}\nwhile (cursor->goToNextRow(cursor) == OH_Rdb_ErrCode::RDB_OK) {\n    size_t count = 0;\n    // floatvector数组是第二列数据，1表示列下标索引\n    OH_Cursor_GetFloatVectorCount(cursor, 1, &count);\n    float test[count];\n    size_t outLen;\n    OH_Cursor_GetFloatVector(cursor, 1, test, count, &outLen);\n}\ncursor->destroy(cursor);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 聚合查询\nOH_Cursor *cursor = OH_Rdb_ExecuteQueryV2(store_,\n    \"select * from test where data1 <-> '[1.0, 1.0]' > 0 group by id having max(data1 <=> '[1.0, 1.0]');\", nullptr);\nif (cursor == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Query failed.\");\n    return;\n}\nwhile (cursor->goToNextRow(cursor) == OH_Rdb_ErrCode::RDB_OK) {\n    size_t count = 0;\n    // floatvector数组是第二列数据，1表示列下标索引\n    OH_Cursor_GetFloatVectorCount(cursor, 1, &count);\n    float test[count];\n    size_t outLen;\n    OH_Cursor_GetFloatVector(cursor, 1, test, count, &outLen);\n}\ncursor->destroy(cursor);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 多表查询\nOH_Cursor *cursor = OH_Rdb_ExecuteQueryV2(store_, \"select id, data1 <-> '[1.5, 5.6]' as distance from test \"\n    \"union select id, data1 <-> '[1.5, 5.6]' as distance from test order by distance limit 5;\", nullptr);\nif (cursor == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Query failed.\");\n    return;\n}\nwhile (cursor->goToNextRow(cursor) == OH_Rdb_ErrCode::RDB_OK) {\n    size_t count = 0;\n    // floatvector数组是第二列数据，1表示列下标索引\n    OH_Cursor_GetFloatVectorCount(cursor, 1, &count);\n    float test[count];\n    size_t outLen;\n    OH_Cursor_GetFloatVector(cursor, 1, test, count, &outLen);\n}\ncursor->destroy(cursor);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建视图并执行查询。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Rdb_ExecuteV2(store_, \"CREATE VIEW v1 as select * from test where id > 0;\", nullptr, nullptr);\nOH_Cursor *cursor = OH_Rdb_ExecuteQueryV2(store_, \"select * from v1;\", nullptr);\nif (cursor == NULL) {\n    OH_LOG_ERROR(LOG_APP, \"Query failed.\");\n    return;\n}\ncursor->destroy(cursor);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "‌使用向量索引进行查询，提升查询效率。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "向量数据库索引‌是一种以向量作为键的索引机制，旨在提供高效且快速的搜索能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前支持的向量索引基础语法和扩展语法如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "基础语法如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// index_name为索引名称，index_type是索引类型，dist_function是索引距离度量类型\nCREATE INDEX [IF NOT EXISTS] index_name ON table_name USING index_type (column_name dist_function);\n\nDROP INDEX table_name.index_name;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "扩展语法如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CREATE INDEX [基础语法] [WITH(parameter = value [, ...])];\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表1"
            })
          }), " 索引类型(index_type)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "备注说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "gsdiskann"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适用于处理高维稠密向量数据，如文本嵌入、图像特征等。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表2"
            })
          }), " 索引距离度量类型(dist_function)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "计算符号"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "备注说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "L2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "<->"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "欧式距离。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "COSINE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "<=>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "余弦距离。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表3"
            })
          }), " 扩展语法参数(parameter)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "取值范围和约束"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "备注说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "QUEUE_SIZE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "设置范围是[10, 1000]，默认值 20。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "代表创建索引搜索近邻的时候候选队列的长度，queue_size越大，构建速度降低，召回率有略微提升。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OUT_DEGREE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "设置范围是[1, 1200] ，默认值 60。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "邻居节点出度数量。out_degree与pageSize也有关系，out_degree的数量超过pageSize的存储范围将报错GRD_INVALID_ARGS。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(664003)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "删除索引的时候需要指定表名称，即Drop Index table.index_name。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "随表一起创建的索引不能删除，如建表时创建的主键。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "向量索引的命中条件。必须是ORDER BY + LIMIT类型的查询，ORDER BY只有一个排序条件，这个条件是向量距离条件；ORDER BY与DESC连用，不会使用向量索引；查询距离度量与创建索引时的度量需要保持一致，例如创建向量索引时使用L2，在查询时使用<->进行度量才可以命中索引。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 基础用法，创建的索引名称为diskann_l2_idx，索引列为data1，类型为gsdiskann，距离度量类型为L2\nOH_Rdb_ExecuteV2(store_, \"CREATE INDEX diskann_l2_idx ON test USING GSDISKANN(data1 L2);\", nullptr, nullptr);\n\n// 删除表test中的diskann_l2_idx索引\nOH_Rdb_ExecuteV2(store_, \"DROP INDEX test.diskann_l2_idx;\", nullptr, nullptr);\n\n// 扩展语法，设置QUEUE_SIZE为20，OUT_DEGREE为50\nOH_Rdb_ExecuteV2(store_, \"CREATE INDEX diskann_l2_idx ON test USING GSDISKANN(data1 L2) WITH \"\n    \"(queue_size=20, out_degree=50);\", nullptr, nullptr);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置数据老化功能。当应用的数据需要定期清理时，可以按时间或空间配置数据老化策略，从而实现数据的自动化清理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "语法如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "CREATE TABLE table_name(column_name type [, ...]) [WITH(parameter = value [, ...])];\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，parameter为可配置的参数，value为对应取值，具体情况见下表。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表4"
            })
          }), " 数据老化策略参数(parameter)"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "取值范围和使用说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "time_col"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "列名。类型必须为整数且不为空。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "interval"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "老化任务线程的执行间隔时间，超过该时间后执行写操作，触发老化任务，删除符合老化条件的数据；若在间隔时间内执行写操作，不会触发老化任务。取值范围是[5 second, 1 year]，时间单位支持second、minute、hour、day、month、year，不区分大小写或复数形式(1 hour和1 hours均可)，默认是1 day。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ttl"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "数据保留时间。取值范围是[1 hour, 1 year]，时间单位支持second、minute、hour、day、month、year，不区分大小写或复数形式(1 hour和1 hours均可)，默认是3 month。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "max_num"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "数据量限制。取值范围是[100, 1024]，默认是1024。老化任务在执行完过期数据删除后，如剩余表内数据超过max_num行，则会找到距离过期时间最近的时间点，删除该时间点对应的所有数据，直到数据量少于max_num。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "时间相关参数会按数值换算为秒作为原子单位，取值规则如下所示："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "单位"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "向下换算为秒取值"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "year"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "365 * 24 * 60 * 60"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "month"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "30 * 24 * 60 * 60"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "day"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "24 * 60 * 60"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "hour"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "60 * 60"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "minute"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "60"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如配置ttl = '3 months'，实际ttl会被换算为3 * (30 * 24 * 60 * 60) = 7776000 seconds。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 每隔五分钟执行写操作后，会触发数据老化任务\nOH_Rdb_ExecuteV2(store_,\"CREATE TABLE test2(rec_time integer not null) WITH \"\n    \"(time_col = 'rec_time', interval = '5 minute');\", nullptr, nullptr);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置数据压缩功能。该功能在建表时配置，可以压缩数据类型为text的列数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 20开始，支持数据压缩功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "语法如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "CREATE TABLE table_name(content text [, ...]) [WITH(compress_col = 'content')];\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，compress_col为必填参数，value是类型为text的数据列名，可以与数据老化功能同时配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// content列配置了数据压缩，并且配置了数据老化。\nOH_Rdb_ExecuteV2(store_,\"CREATE TABLE IF NOT EXISTS test3 (time integer not null, content text) with \"\n    \"(time_col = 'time', interval = '5 minute', compress_col = 'content');\", nullptr, nullptr);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除数据库。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Rdb_CloseStore(store_);\nOH_Rdb_DeleteStoreV2(config);\n"
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
591147(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
772801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
664003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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