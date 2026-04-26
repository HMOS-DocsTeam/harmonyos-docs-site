"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["182986"], {
414151(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_oh_rdb_transaction_h_capi_oh_rdb_transaction_h_md_ce9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-c-arkdata-headerfile-capi-oh-rdb-transaction-h-capi-oh-rdb-transaction-h-md-ce9.json
var site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_oh_rdb_transaction_h_capi_oh_rdb_transaction_h_md_ce9_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-transaction-h/capi-oh-rdb-transaction-h","title":"oh_rdb_transaction.h","description":"概述","source":"@site/docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-transaction-h/capi-oh-rdb-transaction-h.md","sourceDirName":"arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-transaction-h","slug":"/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-transaction-h/capi-oh-rdb-transaction-h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-transaction-h/capi-oh-rdb-transaction-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"oh_rdb_transaction.h","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-rdb-transaction-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-oh-rdb-transaction-h"},"sidebar":"ref","previous":{"title":"oh_rdb_crypto_param.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-crypto-param-h/capi-oh-rdb-crypto-param-h"},"next":{"title":"oh_rdb_types.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-types-h/capi-oh-rdb-types-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-transaction-h/capi-oh-rdb-transaction-h.md


const frontMatter = {
	title: 'oh_rdb_transaction.h',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-rdb-transaction-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-oh-rdb-transaction-h'
};
const contentTitle = 'oh_rdb_transaction.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_RDB_TransType",
  "id": "oh_rdb_transtype",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_RdbTrans_CreateOptions()",
  "id": "oh_rdbtrans_createoptions",
  "level": 3
}, {
  "value": "OH_RdbTrans_DestroyOptions()",
  "id": "oh_rdbtrans_destroyoptions",
  "level": 3
}, {
  "value": "OH_RdbTransOption_SetType()",
  "id": "oh_rdbtransoption_settype",
  "level": 3
}, {
  "value": "OH_RdbTrans_Commit()",
  "id": "oh_rdbtrans_commit",
  "level": 3
}, {
  "value": "OH_RdbTrans_Rollback()",
  "id": "oh_rdbtrans_rollback",
  "level": 3
}, {
  "value": "OH_RdbTrans_Insert()",
  "id": "oh_rdbtrans_insert",
  "level": 3
}, {
  "value": "OH_RdbTrans_InsertWithConflictResolution()",
  "id": "oh_rdbtrans_insertwithconflictresolution",
  "level": 3
}, {
  "value": "OH_RdbTrans_BatchInsert()",
  "id": "oh_rdbtrans_batchinsert",
  "level": 3
}, {
  "value": "OH_RdbTrans_Update()",
  "id": "oh_rdbtrans_update",
  "level": 3
}, {
  "value": "OH_RdbTrans_UpdateWithConflictResolution()",
  "id": "oh_rdbtrans_updatewithconflictresolution",
  "level": 3
}, {
  "value": "OH_RdbTrans_Delete()",
  "id": "oh_rdbtrans_delete",
  "level": 3
}, {
  "value": "OH_RdbTrans_Query()",
  "id": "oh_rdbtrans_query",
  "level": 3
}, {
  "value": "OH_RdbTrans_QuerySql()",
  "id": "oh_rdbtrans_querysql",
  "level": 3
}, {
  "value": "OH_RdbTrans_Execute()",
  "id": "oh_rdbtrans_execute",
  "level": 3
}, {
  "value": "OH_RdbTrans_Destroy()",
  "id": "oh_rdbtrans_destroy",
  "level": 3
}, {
  "value": "OH_RdbTrans_QueryWithoutRowCount()",
  "id": "oh_rdbtrans_querywithoutrowcount",
  "level": 3
}, {
  "value": "OH_RdbTrans_QuerySqlWithoutRowCount()",
  "id": "oh_rdbtrans_querysqlwithoutrowcount",
  "level": 3
}, {
  "value": "OH_RdbTrans_BatchInsertWithReturning()",
  "id": "oh_rdbtrans_batchinsertwithreturning",
  "level": 3
}, {
  "value": "OH_RdbTrans_UpdateWithReturning()",
  "id": "oh_rdbtrans_updatewithreturning",
  "level": 3
}, {
  "value": "OH_RdbTrans_DeleteWithReturning()",
  "id": "oh_rdbtrans_deletewithreturning",
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "oh_rdb_transactionh",
        children: "oh_rdb_transaction.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供与数据库事务相关的函数和枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <database/rdb/oh_rdb_transaction.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnative_rdb_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb",
        children: "RDB"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transoptions/capi-rdb-oh-rdb-transoptions",
              children: "OH_RDB_TransOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_RDB_TransOptions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transoptions/capi-rdb-oh-rdb-transoptions",
              children: "OH_RDB_TransOptions"
            }), "结构类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Rdb_Transaction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transoptions/capi-rdb-oh-rdb-transoptions",
              children: "OH_RDB_TransOptions"
            }), "结构类型。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdb_transtype",
              children: "OH_RDB_TransType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_RDB_TransType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示关系型数据库事务类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_createoptions",
              children: "OH_RDB_TransOptions *OH_RdbTrans_CreateOptions(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建事务配置对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_destroyoptions",
              children: "int OH_RdbTrans_DestroyOptions(OH_RDB_TransOptions *options)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁事务配置对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtransoption_settype",
              children: "int OH_RdbTransOption_SetType(OH_RDB_TransOptions *options, OH_RDB_TransType type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置关系型数据库事务类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_commit",
              children: "int OH_RdbTrans_Commit(OH_Rdb_Transaction *trans)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交事务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_rollback",
              children: "int OH_RdbTrans_Rollback(OH_Rdb_Transaction *trans)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回滚事务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_insert",
              children: "int OH_RdbTrans_Insert(OH_Rdb_Transaction *trans, const char *table, const OH_VBucket *row, int64_t *rowId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将一行数据插入到目标表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_insertwithconflictresolution",
              children: "int OH_RdbTrans_InsertWithConflictResolution(OH_Rdb_Transaction *trans, const char *table, const OH_VBucket *row,Rdb_ConflictResolution resolution, int64_t *rowId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将一行数据插入到目标表中，支持冲突解决。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_batchinsert",
              children: "int OH_RdbTrans_BatchInsert(OH_Rdb_Transaction *trans, const char *table, const OH_Data_VBuckets *rows,Rdb_ConflictResolution resolution, int64_t *changes)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将一组数据批量插入到目标表中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_update",
              children: "int OH_RdbTrans_Update(OH_Rdb_Transaction *trans, const OH_VBucket *row, const OH_Predicates *predicates,int64_t *changes)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定的条件更新数据库中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_updatewithconflictresolution",
              children: "int OH_RdbTrans_UpdateWithConflictResolution(OH_Rdb_Transaction *trans, const OH_VBucket *row,const OH_Predicates *predicates, Rdb_ConflictResolution resolution, int64_t *changes)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定条件更新数据库中的数据，并支持冲突解决。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_delete",
              children: "int OH_RdbTrans_Delete(OH_Rdb_Transaction *trans, const OH_Predicates *predicates, int64_t *changes)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定条件从数据库中删除数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_query",
              children: "OH_Cursor *OH_RdbTrans_Query(OH_Rdb_Transaction *trans, const OH_Predicates *predicates, const char *columns[],int len)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定的条件查询数据库中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_querysql",
              children: "OH_Cursor *OH_RdbTrans_QuerySql(OH_Rdb_Transaction *trans, const char *sql, const OH_Data_Values *args)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据SQL语句查询数据库中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_execute",
              children: "int OH_RdbTrans_Execute(OH_Rdb_Transaction *trans, const char *sql, const OH_Data_Values *args, OH_Data_Value **result)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行包含指定参数的SQL语句。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_destroy",
              children: "int OH_RdbTrans_Destroy(OH_Rdb_Transaction *trans)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁事务对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_querywithoutrowcount",
              children: "OH_Cursor *OH_RdbTrans_QueryWithoutRowCount(OH_Rdb_Transaction *trans, const OH_Predicates *predicates, const char * const columns[], int len)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定的条件查询数据库中的数据，不计算行数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_querysqlwithoutrowcount",
              children: "OH_Cursor *OH_RdbTrans_QuerySqlWithoutRowCount(OH_Rdb_Transaction *trans, const char *sql, const OH_Data_Values *args)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据SQL语句查询数据库中的数据，不计算行数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_batchinsertwithreturning",
              children: "int OH_RdbTrans_BatchInsertWithReturning(OH_Rdb_Transaction *trans, const char *table, const OH_Data_VBuckets *rows, Rdb_ConflictResolution resolution, OH_RDB_ReturningContext *context)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将批量数据插入目标表，并将变更信息输出到上下文中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_updatewithreturning",
              children: "int OH_RdbTrans_UpdateWithReturning(OH_Rdb_Transaction *trans, OH_VBucket *row, OH_Predicates *predicates, Rdb_ConflictResolution resolution, OH_RDB_ReturningContext *context)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定条件更新数据库中的数据并输出更改信息到上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdbtrans_deletewithreturning",
              children: "int OH_RdbTrans_DeleteWithReturning(OH_Rdb_Transaction *trans, OH_Predicates *predicates, OH_RDB_ReturningContext *context)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定条件从数据库中删除数据并输出更改信息到上下文。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdb_transtype",
      children: "OH_RDB_TransType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_RDB_TransType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示关系型数据库事务类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_TRANS_DEFERRED = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在首次访问数据库之前，事务默认设置不会启动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_TRANS_IMMEDIATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库连接立即开始新的写入，而无需等待写入语句。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_TRANS_EXCLUSIVE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与RDB_TRANS_IMMEDIATE类型相似，写事务会立即启动。  RDB_TRANS_EXCLUSIVE和RDB_TRANS_IMMEDIATE类型在WAL模式下相同，但在其他日志模式下，RDB_TRANS_EXCLUSIVE会阻止其他数据库连接在事务进行时读取数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_TRANS_BUTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDB事务类型的最大值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_createoptions",
      children: "OH_RdbTrans_CreateOptions()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_RDB_TransOptions *OH_RdbTrans_CreateOptions(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建事务配置对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transoptions/capi-rdb-oh-rdb-transoptions",
              children: "OH_RDB_TransOptions"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功时返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transoptions/capi-rdb-oh-rdb-transoptions",
              children: "OH_RDB_TransOptions"
            }), "实例的指针。否则返回nullptr。  使用完成后，必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-transaction-h/capi-oh-rdb-transaction-h#oh_rdbtrans_destroyoptions",
              children: "OH_RdbTrans_DestroyOptions"
            }), "接口释放内存。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_destroyoptions",
      children: "OH_RdbTrans_DestroyOptions()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTrans_DestroyOptions(OH_RDB_TransOptions *options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁事务配置对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transoptions/capi-rdb-oh-rdb-transoptions",
              children: "OH_RDB_TransOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transoptions/capi-rdb-oh-rdb-transoptions",
              children: "OH_RDB_TransOptions"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回错误码。  返回RDB_OK表示成功。  返回RDB_E_INVALID_ARGS表示无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtransoption_settype",
      children: "OH_RdbTransOption_SetType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTransOption_SetType(OH_RDB_TransOptions *options, OH_RDB_TransType type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置关系型数据库事务类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transoptions/capi-rdb-oh-rdb-transoptions",
              children: "OH_RDB_TransOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transoptions/capi-rdb-oh-rdb-transoptions",
              children: "OH_RDB_TransOptions"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_rdb_transtype",
              children: "OH_RDB_TransType"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示关系型数据库事务类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回错误码。  返回RDB_OK表示成功。  返回RDB_E_INVALID_ARGS表示无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_commit",
      children: "OH_RdbTrans_Commit()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTrans_Commit(OH_Rdb_Transaction *trans)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提交事务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  返回RDB_OK表示成功。  返回RDB_E_ERROR表示数据库常见错误。  返回RDB_E_INVALID_ARGS表示无效参数。  返回RDB_E_ALREADY_CLOSED表示数据库已经关闭。  返回RDB_E_SQLITE_FULL表示SQLite错误码：数据库已满。  返回RDB_E_SQLITE_CORRUPT表示数据库损坏。  返回RDB_E_SQLITE_PERM表示SQLite错误码：访问权限被拒绝。  返回RDB_E_SQLITE_BUSY表示SQLite错误码：数据库文件被锁定。  返回RDB_E_SQLITE_NOMEM表示SQLite错误码：数据库内存不足。  返回RDB_E_SQLITE_READONLY表示SQLite错误码：尝试写入只读数据库。  返回RDB_E_SQLITE_IOERR表示SQLite错误码：磁盘I/O错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_rollback",
      children: "OH_RdbTrans_Rollback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTrans_Rollback(OH_Rdb_Transaction *trans)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回滚事务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  返回RDB_OK表示成功。  返回RDB_E_ERROR表示数据库常见错误。  返回RDB_E_INVALID_ARGS表示无效参数。  返回RDB_E_ALREADY_CLOSED表示数据库已经关闭。  返回RDB_E_SQLITE_FULL表示SQLite错误码：数据库已满。  返回RDB_E_SQLITE_CORRUPT表示数据库损坏。  返回RDB_E_SQLITE_PERM表示SQLite错误码：访问权限被拒绝。  返回RDB_E_SQLITE_BUSY表示SQLite错误码：数据库文件被锁定。  返回RDB_E_SQLITE_NOMEM表示SQLite错误码：数据库内存不足。  返回RDB_E_SQLITE_READONLY表示SQLite错误码：尝试写入只读数据库。  返回RDB_E_SQLITE_IOERR表示SQLite错误码：磁盘I/O错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_insert",
      children: "OH_RdbTrans_Insert()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTrans_Insert(OH_Rdb_Transaction *trans, const char *table, const OH_VBucket *row, int64_t *rowId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将一行数据插入到目标表中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要插入的目标表名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), " *row"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要插入到表中的数据行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *rowId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，表示插入后返回的行号。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  返回RDB_OK表示成功。  返回RDB_E_ERROR表示数据库常见错误。  返回RDB_E_INVALID_ARGS表示无效参数。  返回RDB_E_ALREADY_CLOSED表示数据库已经关闭。  返回RDB_E_WAL_SIZE_OVER_LIMIT表示WAL日志文件大小超过默认值。  返回RDB_E_SQLITE_FULL表示SQLite错误码：数据库已满。  返回RDB_E_SQLITE_CORRUPT表示数据库损坏。  返回RDB_E_SQLITE_PERM表示SQLite错误码：访问权限被拒绝。  返回RDB_E_SQLITE_BUSY表示SQLite错误码：数据库文件被锁定。  返回RDB_E_SQLITE_LOCKED表示SQLite错误码：数据库中的表被锁定。  返回RDB_E_SQLITE_NOMEM表示SQLite错误码：数据库内存不足。  返回RDB_E_SQLITE_READONLY表示SQLite错误码：尝试写入只读数据库。  返回RDB_E_SQLITE_IOERR表示SQLite错误码：磁盘I/O错误。  返回RDB_E_SQLITE_TOO_BIG表示SQLite错误码：TEXT或BLOB超出大小限制。  返回RDB_E_SQLITE_MISMATCH表示SQLite错误码：数据类型不匹配。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_insertwithconflictresolution",
      children: "OH_RdbTrans_InsertWithConflictResolution()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTrans_InsertWithConflictResolution(OH_Rdb_Transaction *trans, const char *table, const OH_VBucket *row,Rdb_ConflictResolution resolution, int64_t *rowId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将一行数据插入到目标表中，支持冲突解决。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要插入的目标表名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), " *row"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要插入到表中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-types-h/capi-oh-rdb-types-h#rdb_conflictresolution",
              children: "Rdb_ConflictResolution"
            }), " resolution"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示发生冲突时的解决策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *rowId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，表示插入成功后返回的行号。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  返回RDB_OK表示成功。  返回RDB_E_ERROR表示数据库常见错误。  返回RDB_E_INVALID_ARGS表示输入参数无效。  返回RDB_E_ALREADY_CLOSED表示数据库已关闭。  返回RDB_E_WAL_SIZE_OVER_LIMIT表示WAL日志文件大小超过默认值。  返回RDB_E_SQLITE_FULL表示SQLite错误码：数据库已满。  返回RDB_E_SQLITE_CORRUPT表示数据库损坏。  返回RDB_E_SQLITE_PERM表示SQLite错误码：访问权限被拒绝。  返回RDB_E_SQLITE_BUSY表示SQLite错误码：数据库文件被锁定。  返回RDB_E_SQLITE_LOCKED表示SQLite错误码：数据库中的表被锁定。  返回RDB_E_SQLITE_NOMEM表示SQLite错误码：数据库内存不足。  返回RDB_E_SQLITE_READONLY表示SQLite错误码：尝试写入只读数据库。  返回RDB_E_SQLITE_IOERR表示SQLite错误码：磁盘I/O错误。  返回RDB_E_SQLITE_TOO_BIG表示SQLite错误码：TEXT或BLOB超出大小限制。  返回RDB_E_SQLITE_MISMATCH表示SQLite错误码：数据类型不匹配。  返回RDB_E_SQLITE_CONSTRAINT表示SQLite错误码：违反约束导致操作中止。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_batchinsert",
      children: "OH_RdbTrans_BatchInsert()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTrans_BatchInsert(OH_Rdb_Transaction *trans, const char *table, const OH_Data_VBuckets *rows, Rdb_ConflictResolution resolution, int64_t *changes)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将一组数据批量插入到目标表中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单次插入参数的最大数量限制为32766，超出上限会返回RDB_E_INVALID_ARGS错误码。参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：插入数据的所有字段的并集大小为10，则最多可以插入3276条数据（3276*10=32760）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请确保在调用接口时遵守此限制，以避免因参数数量过多而导致错误。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要插入的目标表名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "OH_Data_VBuckets"
            }), " *rows"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要插入到表中的一组数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-types-h/capi-oh-rdb-types-h#rdb_conflictresolution",
              children: "Rdb_ConflictResolution"
            }), " resolution"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示发生冲突时的解决策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，表示插入成功的次数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  返回RDB_OK表示成功。  返回RDB_E_ERROR表示数据库常见错误。  返回RDB_E_INVALID_ARGS表示无效参数。  返回RDB_E_ALREADY_CLOSED表示数据库已经关闭。  返回RDB_E_WAL_SIZE_OVER_LIMIT表示WAL日志文件大小超过默认值。  返回RDB_E_SQLITE_FULL表示SQLite错误码：数据库已满。  返回RDB_E_SQLITE_CORRUPT表示数据库损坏。  返回RDB_E_SQLITE_PERM表示SQLite错误码：访问权限被拒绝。  返回RDB_E_SQLITE_BUSY表示SQLite错误码：数据库文件被锁定。  返回RDB_E_SQLITE_LOCKED表示SQLite错误码：数据库中的表被锁定。  返回RDB_E_SQLITE_NOMEM表示SQLite错误码：数据库内存不足。  返回RDB_E_SQLITE_READONLY表示SQLite错误码：尝试写入只读数据库。  返回RDB_E_SQLITE_IOERR表示SQLite错误码：磁盘I/O错误。  返回RDB_E_SQLITE_TOO_BIG表示SQLite错误码：TEXT或BLOB超出大小限制。  返回RDB_E_SQLITE_MISMATCH表示SQLite错误码：数据类型不匹配。  返回RDB_E_SQLITE_CONSTRAINT表示SQLite错误码：SQLite约束。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_update",
      children: "OH_RdbTrans_Update()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTrans_Update(OH_Rdb_Transaction *trans, const OH_VBucket *row, const OH_Predicates *predicates, int64_t *changes)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的条件更新数据库中的数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), " *row"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要更新到表中的数据行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-predicates/capi-rdb-oh-predicates",
              children: "OH_Predicates"
            }), " *predicates"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-predicates/capi-rdb-oh-predicates",
              children: "OH_Predicates"
            }), "指定的更新条件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，表示更新成功的次数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  返回RDB_OK表示成功。  返回RDB_E_ERROR表示数据库常见错误。  返回RDB_E_INVALID_ARGS表示无效参数。  返回RDB_E_ALREADY_CLOSED表示数据库已经关闭。  返回RDB_E_WAL_SIZE_OVER_LIMIT表示WAL日志文件大小超过默认值。  返回RDB_E_SQLITE_FULL表示SQLite错误码：数据库已满。  返回RDB_E_SQLITE_CORRUPT表示数据库损坏。  返回RDB_E_SQLITE_PERM表示SQLite错误码：访问权限被拒绝。  返回RDB_E_SQLITE_BUSY表示SQLite错误码：数据库文件被锁定。  返回RDB_E_SQLITE_LOCKED表示SQLite错误码：数据库中的表被锁定。  返回RDB_E_SQLITE_NOMEM表示SQLite错误码：数据库内存不足。  返回RDB_E_SQLITE_READONLY表示SQLite错误码：尝试写入只读数据库。  返回RDB_E_SQLITE_IOERR表示SQLite错误码：磁盘I/O错误。  返回RDB_E_SQLITE_TOO_BIG表示SQLite错误码：TEXT或BLOB超出大小限制。  返回RDB_E_SQLITE_MISMATCH表示SQLite错误码：数据类型不匹配。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_updatewithconflictresolution",
      children: "OH_RdbTrans_UpdateWithConflictResolution()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTrans_UpdateWithConflictResolution(OH_Rdb_Transaction *trans, const OH_VBucket *row,const OH_Predicates *predicates, Rdb_ConflictResolution resolution, int64_t *changes)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定条件更新数据库中的数据，并支持冲突解决。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), " *row"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要更新到表中的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-predicates/capi-rdb-oh-predicates",
              children: "OH_Predicates"
            }), " *predicates"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-predicates/capi-rdb-oh-predicates",
              children: "OH_Predicates"
            }), "指定的更新条件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-types-h/capi-oh-rdb-types-h#rdb_conflictresolution",
              children: "Rdb_ConflictResolution"
            }), " resolution"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示发生冲突时的解决策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，表示更新成功的行数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  返回RDB_OK表示成功。  返回RDB_E_ERROR表示数据库常见错误。  返回RDB_E_INVALID_ARGS表示输入参数无效。  返回RDB_E_ALREADY_CLOSED表示数据库已关闭。  返回RDB_E_WAL_SIZE_OVER_LIMIT表示WAL日志文件大小超过默认值。  返回RDB_E_SQLITE_FULL表示SQLite错误码：数据库已满。  返回RDB_E_SQLITE_CORRUPT表示数据库损坏。  返回RDB_E_SQLITE_PERM表示SQLite错误码：访问权限被拒绝。  返回RDB_E_SQLITE_BUSY表示SQLite错误码：数据库文件被锁定。  返回RDB_E_SQLITE_LOCKED表示SQLite错误码：数据库中的表被锁定。  返回RDB_E_SQLITE_NOMEM表示SQLite错误码：数据库内存不足。  返回RDB_E_SQLITE_READONLY表示SQLite错误码：尝试写入只读数据库。  返回RDB_E_SQLITE_IOERR表示SQLite错误码：磁盘I/O错误。  返回RDB_E_SQLITE_TOO_BIG表示SQLite错误码：TEXT或BLOB超出大小限制。  返回RDB_E_SQLITE_MISMATCH表示SQLite错误码：数据类型不匹配。  返回RDB_E_SQLITE_CONSTRAINT表示SQLite错误码：违反约束导致操作中止。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_delete",
      children: "OH_RdbTrans_Delete()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTrans_Delete(OH_Rdb_Transaction *trans, const OH_Predicates *predicates, int64_t *changes)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定条件从数据库中删除数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-predicates/capi-rdb-oh-predicates",
              children: "OH_Predicates"
            }), " *predicates"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-predicates/capi-rdb-oh-predicates",
              children: "OH_Predicates"
            }), "指定的删除条件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示删除成功的次数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  返回RDB_OK表示成功。  返回RDB_E_ERROR表示数据库常见错误。  返回RDB_E_INVALID_ARGS表示无效参数。  返回RDB_E_ALREADY_CLOSED表示数据库已经关闭。  返回RDB_E_WAL_SIZE_OVER_LIMIT表示WAL日志文件大小超过默认值。  返回RDB_E_SQLITE_FULL表示SQLite错误码：数据库已满。  返回RDB_E_SQLITE_CORRUPT表示数据库损坏。  返回RDB_E_SQLITE_PERM表示SQLite错误码：访问权限被拒绝。  返回RDB_E_SQLITE_BUSY表示SQLite错误码：数据库文件被锁定。  返回RDB_E_SQLITE_LOCKED表示SQLite错误码：数据库中的表被锁定。  返回RDB_E_SQLITE_NOMEM表示SQLite错误码：数据库内存不足。  返回RDB_E_SQLITE_READONLY表示SQLite错误码：尝试写入只读数据库。  返回RDB_E_SQLITE_IOERR表示SQLite错误码：磁盘I/O错误。  返回RDB_E_SQLITE_TOO_BIG表示SQLite错误码：TEXT或BLOB超出大小限制。  返回RDB_E_SQLITE_MISMATCH表示SQLite错误码：数据类型不匹配。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_query",
      children: "OH_RdbTrans_Query()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Cursor *OH_RdbTrans_Query(OH_Rdb_Transaction *trans, const OH_Predicates *predicates, const char *columns[], int len)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的条件查询数据库中的数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-predicates/capi-rdb-oh-predicates",
              children: "OH_Predicates"
            }), " *predicates"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-predicates/capi-rdb-oh-predicates",
              children: "OH_Predicates"
            }), "指定的查询条件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *columns[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要查询的列，如果传入空值，则查询适用于所有列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示列中元素的个数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-cursor/capi-rdb-oh-cursor",
              children: "OH_Cursor"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果执行成功，则返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-cursor/capi-rdb-oh-cursor",
              children: "OH_Cursor"
            }), "实例的指针。如果数据库已关闭或数据库没有响应，则返回空。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_querysql",
      children: "OH_RdbTrans_QuerySql()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Cursor *OH_RdbTrans_QuerySql(OH_Rdb_Transaction *trans, const char *sql, const OH_Data_Values *args)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据SQL语句查询数据库中的数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *sql"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要执行的SQL语句。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-values/capi-rdb-oh-data-values",
              children: "OH_Data_Values"
            }), " *args"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-values/capi-rdb-oh-data-values",
              children: "OH_Data_Values"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-cursor/capi-rdb-oh-cursor",
              children: "OH_Cursor"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果执行成功，则返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-cursor/capi-rdb-oh-cursor",
              children: "OH_Cursor"
            }), "实例的指针。如果数据库已关闭或数据库没有响应，则返回空。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_execute",
      children: "OH_RdbTrans_Execute()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTrans_Execute(OH_Rdb_Transaction *trans, const char *sql, const OH_Data_Values *args, OH_Data_Value **result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行包含指定参数的SQL语句。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持开头包含注释的语句。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *sql"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示要执行的SQL语句。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-values/capi-rdb-oh-data-values",
              children: "OH_Data_Values"
            }), " *args"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL语句中包含的参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Data_Value **result"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行成功时指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-value/capi-rdb-oh-data-value",
              children: "OH_Data_Value"
            }), "实例的指针。使用完成后，必须通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-data-value-h/capi-oh-data-value-h#oh_value_destroy",
              children: "OH_Value_Destroy"
            }), "接口释放内存。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回执行结果。  返回RDB_OK表示成功。  返回RDB_E_ERROR表示数据库常见错误。  返回RDB_E_INVALID_ARGS表示无效参数。  返回RDB_E_ALREADY_CLOSED表示数据库已经关闭。  返回RDB_E_WAL_SIZE_OVER_LIMIT表示WAL日志文件大小超过默认值。  返回RDB_E_SQLITE_FULL表示SQLite错误码：数据库已满。  返回RDB_E_SQLITE_CORRUPT表示数据库损坏。  返回RDB_E_SQLITE_PERM表示SQLite错误码：访问权限被拒绝。  返回RDB_E_SQLITE_BUSY表示SQLite错误码：数据库文件被锁定。  返回RDB_E_SQLITE_LOCKED表示SQLite错误码：数据库中的表被锁定。  返回RDB_E_SQLITE_NOMEM表示SQLite错误码：数据库内存不足。  返回RDB_E_SQLITE_READONLY表示SQLite错误码：尝试写入只读数据库。  返回RDB_E_SQLITE_IOERR表示SQLite错误码：磁盘I/O错误。  返回RDB_E_SQLITE_TOO_BIG表示SQLite错误码：TEXT或BLOB超出大小限制。  返回RDB_E_SQLITE_MISMATCH表示SQLite错误码：数据类型不匹配。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_destroy",
      children: "OH_RdbTrans_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTrans_Destroy(OH_Rdb_Transaction *trans)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁事务对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回错误码。  返回RDB_OK表示成功。  返回RDB_E_INVALID_ARGS表示无效参数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_querywithoutrowcount",
      children: "OH_RdbTrans_QueryWithoutRowCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Cursor *OH_RdbTrans_QueryWithoutRowCount(OH_Rdb_Transaction *trans, const OH_Predicates *predicates, const char * const columns[], int len)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的条件查询数据库中的数据，不计算行数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-predicates/capi-rdb-oh-predicates",
              children: "const OH_Predicates"
            }), " *predicates"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-predicates/capi-rdb-oh-predicates",
              children: "OH_Predicates"
            }), "指定的查询条件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * const columns[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要查询的列，如果传入空值，则查询所有列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入的columns数组的长度。若len大于columns数组的实际长度，则会访问越界。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-cursor/capi-rdb-oh-cursor",
              children: "OH_Cursor *"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果执行成功，则返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-cursor/capi-rdb-oh-cursor",
              children: "OH_Cursor"
            }), "实例的指针。如果数据库已关闭或数据库没有响应，则返回nullptr。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_querysqlwithoutrowcount",
      children: "OH_RdbTrans_QuerySqlWithoutRowCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Cursor *OH_RdbTrans_QuerySqlWithoutRowCount(OH_Rdb_Transaction *trans, const char *sql, const OH_Data_Values *args)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据SQL语句查询数据库中的数据，不计算行数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *sql"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要执行的SQL语句。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-values/capi-rdb-oh-data-values",
              children: "const OH_Data_Values"
            }), " *args"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-values/capi-rdb-oh-data-values",
              children: "OH_Data_Values"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-cursor/capi-rdb-oh-cursor",
              children: "OH_Cursor *"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果执行成功，则返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-cursor/capi-rdb-oh-cursor",
              children: "OH_Cursor"
            }), "实例的指针。如果数据库已关闭或数据库没有响应，则返回nullptr。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_batchinsertwithreturning",
      children: "OH_RdbTrans_BatchInsertWithReturning()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTrans_BatchInsertWithReturning(OH_Rdb_Transaction *trans, const char *table, const OH_Data_VBuckets *rows, Rdb_ConflictResolution resolution, OH_RDB_ReturningContext *context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将批量数据插入目标表，并将变更信息输出到上下文中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一次最多可以插入32766个参数。如果参数数量超过上限，则返回错误代码RDB_E_INVALID_ARGS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数数量计算方式为插入数据条数乘以插入数据时所有字段的并集大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：插入数据的所有字段的并集大小为10则最多可以插入3276条数据（3276*10=32760）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请确保在调用接口时遵守此限制，以避免因参数数量过多而导致错误。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要插入的目标表名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-data-vbuckets/capi-rdb-oh-data-vbuckets",
              children: "const OH_Data_VBuckets"
            }), " *rows"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要插入到表中的行数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-types-h/capi-oh-rdb-types-h#rdb_conflictresolution",
              children: "Rdb_ConflictResolution"
            }), " resolution"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发生冲突时的解决策略", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-types-h/capi-oh-rdb-types-h#rdb_conflictresolution",
              children: "Rdb_ConflictResolution"
            }), "，不建议使用RDB_CONFLICT_FAIL，因为失败时会抛异常，  无法正常获取实际的变更数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-returningcontext/capi-rdb-oh-rdb-returningcontext",
              children: "OH_RDB_ReturningContext"
            }), " *context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-returningcontext/capi-rdb-oh-rdb-returningcontext",
              children: "OH_RDB_ReturningContext"
            }), "实例的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  返回RDB_OK表示执行成功。  返回RDB_E_INVALID_ARGS表示输入参数无效。  返回RDB_E_WAL_SIZE_OVER_LIMIT表示WAL文件大小超过默认限制。  返回RDB_E_NOT_SUPPORTED表示不支持的操作。  返回RDB_E_DATABASE_BUSY表示数据库忙。  返回RDB_E_ALREADY_CLOSED表示数据库已关闭。  返回RDB_E_SQLITE_FULL表示SQLite错误：数据库已满。  返回RDB_E_SQLITE_CORRUPT表示数据库损坏。  返回RDB_E_SQLITE_BUSY表示SQLite错误：数据库文件被锁定。  返回RDB_E_SQLITE_LOCKED表示SQLite错误：数据库中的表被锁定。  返回RDB_E_SQLITE_IOERR表示SQLite错误：发生某种磁盘I/O错误。  返回RDB_E_SQLITE_TOO_BIG表示SQLite错误：TEXT或BLOB超出大小限制。  返回RDB_E_SQLITE_MISMATCH表示SQLite错误：数据类型不匹配。  返回RDB_E_SQLITE_CONSTRAINT表示SQLite错误：由于违反约束而中止。  返回RDB_E_SQLITE_ERROR表示SQLite错误。可能原因：语法错误，例如表或列不存在。  具体错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-error-code-h/capi-relational-store-error-code-h#oh_rdb_errcode",
              children: "OH_Rdb_ErrCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_updatewithreturning",
      children: "OH_RdbTrans_UpdateWithReturning()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTrans_UpdateWithReturning(OH_Rdb_Transaction *trans, OH_VBucket *row, OH_Predicates *predicates, Rdb_ConflictResolution resolution, OH_RDB_ReturningContext *context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定条件更新数据库中的数据并输出更改信息到上下文。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-vbucket/capi-rdb-oh-vbucket",
              children: "OH_VBucket"
            }), " *row"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要更新到表中的行数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-predicates/capi-rdb-oh-predicates",
              children: "OH_Predicates"
            }), " *predicates"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-predicates/capi-rdb-oh-predicates",
              children: "OH_Predicates"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-oh-rdb-types-h/capi-oh-rdb-types-h#rdb_conflictresolution",
              children: "Rdb_ConflictResolution"
            }), " resolution"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生冲突时的解决策略Rdb_ConflictResolution，不建议使用RDB_CONFLICT_FAIL，因为失败时会抛异常，  无法正常获取实际的变更数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-returningcontext/capi-rdb-oh-rdb-returningcontext",
              children: "OH_RDB_ReturningContext"
            }), " *context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-returningcontext/capi-rdb-oh-rdb-returningcontext",
              children: "OH_RDB_ReturningContext"
            }), "实例的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  返回RDB_OK表示执行成功。  返回RDB_E_INVALID_ARGS表示输入参数无效。  返回RDB_E_WAL_SIZE_OVER_LIMIT表示WAL文件大小超过默认限制。  返回RDB_E_NOT_SUPPORTED表示不支持的操作。  返回RDB_E_EMPTY_VALUES_BUCKET表示值桶为空。  返回RDB_E_DATABASE_BUSY表示数据库忙。  返回RDB_E_ALREADY_CLOSED表示数据库已关闭。  返回RDB_E_SQLITE_FULL表示SQLite错误：数据库已满。  返回RDB_E_SQLITE_CORRUPT表示数据库损坏。  返回RDB_E_SQLITE_BUSY表示SQLite错误：数据库文件被锁定。  返回RDB_E_SQLITE_LOCKED表示SQLite错误：数据库中的表被锁定。  返回RDB_E_SQLITE_IOERR表示SQLite错误：发生某种磁盘I/O错误。  返回RDB_E_SQLITE_TOO_BIG表示SQLite错误：TEXT或BLOB超出大小限制。  返回RDB_E_SQLITE_MISMATCH表示SQLite错误：数据类型不匹配。  返回RDB_E_SQLITE_CONSTRAINT表示SQLite错误：由于违反约束而中止。  返回RDB_E_SQLITE_ERROR表示SQLite错误。可能原因：语法错误，例如表或列不存在。  具体错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-error-code-h/capi-relational-store-error-code-h#oh_rdb_errcode",
              children: "OH_Rdb_ErrCode"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdbtrans_deletewithreturning",
      children: "OH_RdbTrans_DeleteWithReturning()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int OH_RdbTrans_DeleteWithReturning(OH_Rdb_Transaction *trans, OH_Predicates *predicates, OH_RDB_ReturningContext *context)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定条件从数据库中删除数据并输出更改信息到上下文。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), " *trans"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction",
              children: "OH_Rdb_Transaction"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-predicates/capi-rdb-oh-predicates",
              children: "OH_Predicates"
            }), " *predicates"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-predicates/capi-rdb-oh-predicates",
              children: "OH_Predicates"
            }), "实例的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-returningcontext/capi-rdb-oh-rdb-returningcontext",
              children: "OH_RDB_ReturningContext"
            }), " *context"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-returningcontext/capi-rdb-oh-rdb-returningcontext",
              children: "OH_RDB_ReturningContext"
            }), "实例的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回执行结果。  返回RDB_OK表示执行成功。  返回RDB_E_INVALID_ARGS表示输入参数无效。  返回RDB_E_WAL_SIZE_OVER_LIMIT表示WAL文件大小超过默认限制。  返回RDB_E_NOT_SUPPORTED表示不支持的操作。  返回RDB_E_DATABASE_BUSY表示数据库忙。  返回RDB_E_ALREADY_CLOSED表示数据库已关闭。  返回RDB_E_SQLITE_FULL表示SQLite错误：数据库已满。  返回RDB_E_SQLITE_CORRUPT表示数据库损坏。  返回RDB_E_SQLITE_BUSY表示SQLite错误：数据库文件被锁定。  返回RDB_E_SQLITE_LOCKED表示SQLite错误：数据库中的表被锁定。  返回RDB_E_SQLITE_IOERR表示SQLite错误：发生某种磁盘I/O错误。  返回RDB_E_SQLITE_TOO_BIG表示SQLite错误：TEXT或BLOB超出大小限制。  返回RDB_E_SQLITE_MISMATCH表示SQLite错误：数据类型不匹配。  返回RDB_E_SQLITE_ERROR表示SQLite错误。可能原因：语法错误，例如表或列不存在。  具体错误码可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-error-code-h/capi-relational-store-error-code-h#oh_rdb_errcode",
              children: "OH_Rdb_ErrCode"
            }), "。"]
          })]
        })
      })]
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