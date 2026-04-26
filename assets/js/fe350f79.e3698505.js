"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["989003"], {
478104(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_arkts_js_apis_data_relationalstore_arkts_apis_data_relationalstore_literesultset_arkts_apis_data_relationalstore_literesultset_md_fe3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-arkts-js-apis-data-relationalstore-arkts-apis-data-relationalstore-literesultset-arkts-apis-data-relationalstore-literesultset-md-fe3.json
var site_docs_ref_arkdata_api_arkdata_arkts_js_apis_data_relationalstore_arkts_apis_data_relationalstore_literesultset_arkts_apis_data_relationalstore_literesultset_md_fe3_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-literesultset/arkts-apis-data-relationalstore-literesultset","title":"Class (LiteResultSet)","description":"提供通过查询数据库生成的数据库结果集的访问方法。结果集是指用户调用关系型数据库查询接口之后返回的结果集合，提供了多种灵活的数据访问方式，以便用户获取各项数据。","source":"@site/docs-ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-literesultset/arkts-apis-data-relationalstore-literesultset.md","sourceDirName":"arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-literesultset","slug":"/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-literesultset/arkts-apis-data-relationalstore-literesultset","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-literesultset/arkts-apis-data-relationalstore-literesultset","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Class (LiteResultSet)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-literesultset","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-data-relationalstore-literesultset"},"sidebar":"ref","previous":{"title":"Interface (ResultSet)","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-resultset/arkts-apis-data-relationalstore-resultset"},"next":{"title":"Interface (Transaction)","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-transaction/arkts-apis-data-relationalstore-transaction"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-literesultset/arkts-apis-data-relationalstore-literesultset.md


const frontMatter = {
	title: 'Class (LiteResultSet)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-literesultset',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-data-relationalstore-literesultset'
};
const contentTitle = 'Class (LiteResultSet)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "getColumnNames23+",
  "id": "getcolumnnames23",
  "level": 2
}, {
  "value": "getColumnIndex23+",
  "id": "getcolumnindex23",
  "level": 2
}, {
  "value": "getColumnName23+",
  "id": "getcolumnname23",
  "level": 2
}, {
  "value": "getColumnType23+",
  "id": "getcolumntype23",
  "level": 2
}, {
  "value": "getColumnTypeSync23+",
  "id": "getcolumntypesync23",
  "level": 2
}, {
  "value": "goToNextRow23+",
  "id": "gotonextrow23",
  "level": 2
}, {
  "value": "getValue23+",
  "id": "getvalue23",
  "level": 2
}, {
  "value": "getBlob23+",
  "id": "getblob23",
  "level": 2
}, {
  "value": "getString23+",
  "id": "getstring23",
  "level": 2
}, {
  "value": "getLong23+",
  "id": "getlong23",
  "level": 2
}, {
  "value": "getDouble23+",
  "id": "getdouble23",
  "level": 2
}, {
  "value": "getAsset23+",
  "id": "getasset23",
  "level": 2
}, {
  "value": "getAssets23+",
  "id": "getassets23",
  "level": 2
}, {
  "value": "getRow23+",
  "id": "getrow23",
  "level": 2
}, {
  "value": "getCurrentRowData23+",
  "id": "getcurrentrowdata23",
  "level": 2
}, {
  "value": "getRows23+",
  "id": "getrows23",
  "level": 2
}, {
  "value": "getRowsData23+",
  "id": "getrowsdata23",
  "level": 2
}, {
  "value": "isColumnNull23+",
  "id": "iscolumnnull23",
  "level": 2
}, {
  "value": "close23+",
  "id": "close23",
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
        id: "class-literesultset",
        children: "Class (LiteResultSet)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供通过查询数据库生成的数据库结果集的访问方法。结果集是指用户调用关系型数据库查询接口之后返回的结果集合，提供了多种灵活的数据访问方式，以便用户获取各项数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LiteResultSet实例不会实时刷新。使用结果集后，如果数据库中的数据发生变化（如增删改操作），需要重新查询才能获取到最新的数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下列API示例中，都需先使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#querywithoutrowcount23",
        children: "queryWithoutRowCount"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#querysqlwithoutrowcount23",
        children: "querySqlWithoutRowCount"
      }), "等query类方法中任一方法获取到LiteResultSet实例，再通过此实例调用对应方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(429018)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本class首批接口从API version 23开始支持。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { relationalStore } from '@kit.ArkData';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getcolumnnames23",
      children: "getColumnNames23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getColumnNames(): Array<string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取结果集中所有列的名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列名以字符串数组的形式返回，数组中字符串的顺序与结果集中列的顺序一致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
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
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回结果集中所有列的名称。支持获取包含重名列的列名。"
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
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "14800019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SQL must be a query statement."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
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
            children: "14800030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Unable to open the database file."
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
        children: "async function getColumnNamesExample(store : relationalStore.RdbStore){\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    // 联表查询EMPLOYEE1和EMPLOYEE2，并获取重名的列名。store为获取到的RdbStore实例。\n    resultSet = await store.querySqlWithoutRowCount(\"SELECT e1.NAME, e2.NAME, e1.AGE, e2.AGE FROM EMPLOYEE1 e1 LEFT JOIN EMPLOYEE2 e2 ON e1.SALARY=e2.SALARY\");\n    if (resultSet != undefined) {\n      const names = resultSet.getColumnNames();\n    }\n  } catch (err) {\n    console.error(`Failed to get column names: code:${err.code}, message:${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getcolumnindex23",
      children: "getColumnIndex23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getColumnIndex(columnName: string): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的列名获取列索引。"
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
            children: "columnName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示结果集中指定列的名称。当结果集中包含重名列时，返回值会不符合预期。"
          })]
        })
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指定列的索引。"
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
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "14800019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SQL must be a query statement."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
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
            children: "14800030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Unable to open the database file."
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
        children: "async function getColumnIndexExample(store : relationalStore.RdbStore){\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      const idIndex = resultSet.getColumnIndex(\"ID\");\n      const nameIndex = resultSet.getColumnIndex(\"NAME\");\n      const ageIndex = resultSet.getColumnIndex(\"AGE\");\n      const salaryIndex = resultSet.getColumnIndex(\"SALARY\");\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getcolumnname23",
      children: "getColumnName23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getColumnName(columnIndex: number): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的列索引获取列名。"
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
            children: "columnIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示结果集中指定列的索引，从0开始。"
          })]
        })
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指定列的名称。当结果集中包含重名列时，返回值会不符合预期。"
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
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1.Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SQL must be a query statement."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
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
            children: "14800030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Unable to open the database file."
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
        children: "async function getColumnNameExample(store : relationalStore.RdbStore){\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      const id = resultSet.getColumnName(0);\n      const name = resultSet.getColumnName(1);\n      const age = resultSet.getColumnName(2);\n      const salary = resultSet.getColumnName(3);\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getcolumntype23",
      children: "getColumnType23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getColumnType(columnIdentifier: number | string): Promise<ColumnType>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的列索引或列名称获取列数据类型，使用Promise异步回调。"
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
            children: "columnIdentifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#columntype18",
              children: "ColumnType"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。返回指定列的数据类型。当结果集中包含重名列时，通过列名获取的结果会不符合预期。"
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
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
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
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1.Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SQL must be a query statement."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
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
            children: "14800030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Unable to open the database file."
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
        children: "async function getColumnTypeExample(store : relationalStore.RdbStore){\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      resultSet.goToNextRow();\n      // 方式一：通过列名获取列数据类型\n      let idType = await resultSet.getColumnType(\"ID\");\n      let nameType = await resultSet.getColumnType(\"NAME\");\n      let ageType = await resultSet.getColumnType(\"AGE\");\n      let salaryType = await resultSet.getColumnType(\"SALARY\");\n      let codesType = await resultSet.getColumnType(\"CODES\");\n      // 方式二：通过列索引获取列数据类型\n      let identityType = await resultSet.getColumnType(5);\n      let assetDataType = await resultSet.getColumnType(6);\n      let assetsDataType = await resultSet.getColumnType(7);\n      let floatArrayType = await resultSet.getColumnType(8);\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getcolumntypesync23",
      children: "getColumnTypeSync23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getColumnTypeSync(columnIdentifier: number | string): ColumnType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的列索引或列名称获取列数据类型。"
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
            children: "columnIdentifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#columntype18",
              children: "ColumnType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指定列的数据类型。当结果集中包含重名列时，通过列名获取的结果会不符合预期。"
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
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
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
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1.Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SQL must be a query statement."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
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
            children: "14800030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Unable to open the database file."
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
        children: "async function getColumnTypeSyncExample(store : relationalStore.RdbStore){\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      resultSet.goToNextRow();\n      // 方式一：通过列名获取列数据类型\n      let idType = resultSet.getColumnTypeSync(\"ID\");\n      let nameType = resultSet.getColumnTypeSync(\"NAME\");\n      let ageType = resultSet.getColumnTypeSync(\"AGE\");\n      let salaryType = resultSet.getColumnTypeSync(\"SALARY\");\n      let codesType = resultSet.getColumnTypeSync(\"CODES\");\n      // 方式二：通过列索引获取列数据类型\n      let identityType = resultSet.getColumnTypeSync(5);\n      let assetDataType = resultSet.getColumnTypeSync(6);\n      let assetsDataType = resultSet.getColumnTypeSync(7);\n      let floatArrayType = resultSet.getColumnTypeSync(8);\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gotonextrow23",
      children: "goToNextRow23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "goToNextRow(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移动结果集到下一行。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果成功移动结果集到下一行，返回true；否则返回false。"
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
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
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
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1.Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SQL must be a query statement."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
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
            children: "14800030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Unable to open the database file."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
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
        children: "async function goToNextRowExample(store : relationalStore.RdbStore) {\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      resultSet.goToNextRow();\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getvalue23",
      children: "getValue23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getValue(columnIndex: number): ValueType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前行中指定列的值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果值类型为INTEGER，值大于Number.MAX_SAFE_INTEGER或小于Number.MIN_SAFE_INTEGER时，如果不希望丢失精度，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getstring23",
        children: "getString"
      }), "接口获取。"]
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
            children: "columnIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的列索引，从0开始。"
          })]
        })
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuetype",
              children: "ValueType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许返回的数据字段类型。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column index is out of bounds."
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
        children: "async function getValueExample(store : relationalStore.RdbStore) {\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      resultSet.goToNextRow();\n      const name = resultSet.getValue(resultSet.getColumnIndex(\"NAME\"));\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getblob23",
      children: "getBlob23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBlob(columnIndex: number): Uint8Array"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字节数组的形式获取当前行中指定列的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前列的数据类型为INTEGER、DOUBLE、TEXT、BLOB类型，会转成字节数组类型返回指定值，如果该列内容为空时，会返回空字节数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前列的数据类型为ASSET、ASSETS、FLOATVECTOR、BIGINT类型，会返回14800041。"
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
            children: "columnIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的列索引，从0开始。"
          })]
        })
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
            children: "Uint8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以字节数组的形式返回指定列的值。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800041"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type conversion failed."
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
        children: "async function getBlobExample(store : relationalStore.RdbStore) {\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      resultSet.goToNextRow();\n      const name = resultSet.getBlob(resultSet.getColumnIndex(\"CODES\"));\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getstring23",
      children: "getString23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getString(columnIndex: number): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串形式获取当前行中指定列的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前列中的值为INTEGER、DOUBLE、TEXT、BLOB类型，会以字符串形式返回指定值；如果该列内容为空，则会返回空字符串\"\"。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果当前列中的值为DOUBLE类型，可能存在精度的丢失，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getdouble23",
        children: "getDouble"
      }), "接口获取。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前列的数据类型为ASSET、ASSETS、FLOATVECTOR、BIGINT类型，会返回14800041。"
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
            children: "columnIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的列索引，从0开始。"
          })]
        })
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以字符串形式返回指定列的值。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800041"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type conversion failed."
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
        children: "async function getStringExample(store : relationalStore.RdbStore) {\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      resultSet.goToNextRow();\n      const name = resultSet.getString(resultSet.getColumnIndex(\"NAME\"));\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getlong23",
      children: "getLong23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getLong(columnIndex: number): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以Long形式获取当前行中指定列的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前列的数据类型为INTEGER、DOUBLE、TEXT会转成Long类型返回指定值，非数字的TEXT、BLOB类型会返回0。如果该列内容为空时，会返回0。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果当前列的数据类型为INTEGER，值大于Number.MAX_SAFE_INTEGER 或小于Number.MIN_SAFE_INTEGER时，如果不希望丢失精度，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getstring23",
        children: "getString"
      }), "接口获取。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果当前列的数据类型为DOUBLE时，如果不希望丢失精度，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getdouble23",
        children: "getDouble"
      }), "接口获取。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前列的数据类型为ASSET、ASSETS、FLOATVECTOR、BIGINT类型，会返回14800041。"
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
            children: "columnIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的列索引，从0开始。"
          })]
        })
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
            children: "number"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以Long形式返回指定列的值。  该接口支持的精度范围是：Number.MIN_SAFE_INTEGER ~ Number.MAX_SAFE_INTEGER，若超出该范围，建议对于DOUBLE类型的值使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#getdouble23",
              children: "getDouble"
            }), "，对于INTEGER类型的值使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#getstring23",
              children: "getString"
            }), "。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800041"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type conversion failed."
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
        children: "async function getLongExample(store : relationalStore.RdbStore) {\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      resultSet.goToNextRow();\n      const age = resultSet.getLong(resultSet.getColumnIndex(\"AGE\"));\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getdouble23",
      children: "getDouble23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDouble(columnIndex: number): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以double形式获取当前行中指定列的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前列的数据类型为INTEGER、DOUBLE、TEXT会转成double类型返回指定值，非数字的TEXT、BLOB类型会返回0.0。如果该列内容为空时，会返回0.0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前列的数据类型为ASSET、ASSETS、FLOATVECTOR、BIGINT类型，会返回14800041。"
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
            children: "columnIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的列索引，从0开始。"
          })]
        })
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以double形式返回指定列的值。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800041"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type conversion failed."
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
        children: "async function getDoubleExample(store : relationalStore.RdbStore) {\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      resultSet.goToNextRow();\n      const salary = resultSet.getDouble(resultSet.getColumnIndex(\"SALARY\"));\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getasset23",
      children: "getAsset23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAsset(columnIndex: number): Asset"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#asset10",
        children: "Asset"
      }), "形式获取当前行中指定列的值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前列的数据类型为Asset类型，会以Asset类型返回指定值；如果当前列中的值为null时，会返回null；如果当前列的数据类型非Asset类型，则返回14800041。"
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
            children: "columnIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的列索引，从0开始。"
          })]
        })
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-i/arkts-apis-data-relationalstore-i#asset10",
              children: "Asset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以Asset形式返回指定列的值。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800041"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type conversion failed."
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
        children: "async function getAssetExample(store : relationalStore.RdbStore) {\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      resultSet.goToNextRow();\n      const doc = resultSet.getAsset(resultSet.getColumnIndex(\"DOC\"));\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getassets23",
      children: "getAssets23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAssets(columnIndex: number): Assets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#assets10",
        children: "Assets"
      }), "形式获取当前行中指定列的值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前列的数据类型为Assets类型，会以Assets类型返回指定值；如果当前列中的值为null时，会返回null；如果当前列的数据类型非Assets类型，则返回14800041。"
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
            children: "columnIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的列索引，从0开始。"
          })]
        })
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#assets10",
              children: "Assets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以Assets形式返回指定列的值。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800041"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type conversion failed."
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
        children: "async function getAssetsExample(store : relationalStore.RdbStore) {\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      resultSet.goToNextRow();\n      const name = resultSet.getAssets(resultSet.getColumnIndex(\"DOCS\"));\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getrow23",
      children: "getRow23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getRow(): ValuesBucket"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前行的数据。"
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket",
              children: "ValuesBucket"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回指定行的值。当结果集中包含重名列时，返回值会不符合预期，建议使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#getcurrentrowdata23",
              children: "getCurrentRowData"
            }), "接口获取。"]
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
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1.Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SQL must be a query statement."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
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
            children: "14800030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Unable to open the database file."
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
        children: "async function getRowExample(store : relationalStore.RdbStore) {\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      resultSet.goToNextRow();\n      const rowData = resultSet.getRow();\n      console.info(`rowData: ${JSON.stringify(rowData)}`);\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getcurrentrowdata23",
      children: "getCurrentRowData23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCurrentRowData(): RowData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前行所有列的值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.DistributedDataManager.RelationalStore.Core"]
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#rowdata23",
              children: "RowData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前行所有列的值。支持获取包含重名列的值。"
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
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SQL must be a query statement."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
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
            children: "14800030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Unable to open the database file."
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
        children: "async function getCurrentRowDataExample(store : relationalStore.RdbStore) {\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    // 联表查询EMPLOYEE1和EMPLOYEE2，并获取当前行包含重名列名的值。store为获取到的RdbStore实例。\n    resultSet = await store.querySqlWithoutRowCount(\"SELECT e1.NAME, e2.NAME, e1.AGE, e2.AGE FROM EMPLOYEE1 e1 LEFT JOIN EMPLOYEE2 e2 ON e1.SALARY=e2.SALARY\");\n    if (resultSet != undefined) {\n      resultSet.goToNextRow();\n      const rowData = resultSet.getCurrentRowData();\n      console.info(`rowData: ${JSON.stringify(rowData)}`);\n    }\n  } catch (err) {\n    console.error(`Failed to get row data: code:${err.code}, message:${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getrows23",
      children: "getRows23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getRows(maxCount: number, position?: number): Promise<Array<ValuesBucket>>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从结果集中获取指定数量的数据，使用Promise异步回调。禁止与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-literesultset/arkts-apis-data-relationalstore-literesultset",
        children: "LiteResultSet"
      }), "的其他接口并发调用，否则获取的数据可能非预期。"]
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
            children: "maxCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正整数，指定要从结果集中获取数据的条数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非负整数，指定从结果集中获取数据的起始位置，不填则从结果集的当前行（默认首次获取数据时为当前结果集的第一行）开始获取数据。"
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
            children: ["Promise<Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#valuesbucket",
              children: "ValuesBucket"
            }), ">>"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回maxCount条数据，剩余数据不足maxCount条则返回剩余数据，返回空数组时代表已经遍历到结果集的末尾。当结果集中包含重名列时，返回值会不符合预期，建议使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#getrowsdata23",
              children: "getRowsData"
            }), "接口获取。"]
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
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
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
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1.Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SQL must be a query statement."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
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
            children: "14800030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Unable to open the database file."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
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
        children: "async function getRowsExample(store : relationalStore.RdbStore) {\n  // 以查到100条数据为例\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    // 示例1：仅指定maxCount\n    if (resultSet != undefined) {\n      let rows: Array<relationalStore.ValuesBucket>;\n      let maxCount: number = 50;\n      // 从结果集的当前行（默认首次获取数据时为当前结果集的第一行，后续为上次获取数据结束位置的下一行）开始获取数据\n      // getRows会自动移动结果集当前行到上次getRows获取结束位置的下一行，goToNextRow等接口移动\n      while ((rows = await resultSet.getRows(maxCount)).length != 0) {\n        console.info(JSON.stringify(rows[0]));\n      }\n    }\n  \n    // 示例2：指定maxCount和起始的position\n    if (resultSet != undefined) {\n      let rows: Array<relationalStore.ValuesBucket>;\n      let maxCount: number = 50;\n      let position: number = 50;\n      while ((rows = await resultSet.getRows(maxCount, position)).length != 0) {\n        console.info(JSON.stringify(rows[0]));\n        position += rows.length;\n      }\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getrowsdata23",
      children: "getRowsData23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getRowsData(maxCount: number, position?: number): Promise<RowsData>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从指定位置position开始，最多获取maxCount行数据。使用Promise异步回调。禁止与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-literesultset/arkts-apis-data-relationalstore-literesultset",
        children: "LiteResultSet"
      }), "的其他接口并发调用，否则获取的数据可能非预期。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
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
            children: "maxCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正整数，指定从结果集中获取数据的条数。不为正整数则参数非法，抛出错误码14800001。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非负整数，指定从结果集中获取数据的起始位置，不填则从结果集的当前行（默认首次获取数据时为当前结果集的第一行）开始获取数据。不为非负整数则参数非法，抛出错误码14800001。"
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
              href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-t/arkts-apis-data-relationalstore-t#rowsdata23",
              children: "RowsData"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回maxCount条数据，剩余数据不足maxCount条则返回剩余数据，返回空数组时代表已经遍历到结果集的末尾。支持获取包含重名列的值。"
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
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
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
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SQL must be a query statement."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
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
            children: "14800030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Unable to open the database file."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: TEXT or BLOB exceeds size limit."
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
        children: "async function getRowsDataExample(store : relationalStore.RdbStore) {\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    // 联表查询EMPLOYEE1和EMPLOYEE2，并获取多行包含重名列名的值。store为获取到的RdbStore实例。\n    resultSet = await store.querySqlWithoutRowCount(\"SELECT e1.NAME, e2.NAME, e1.AGE, e2.AGE FROM EMPLOYEE1 e1 LEFT JOIN EMPLOYEE2 e2 ON e1.SALARY=e2.SALARY\");\n    // 以查到50条数据为例\n    // 示例1：仅指定maxCount\n    if (resultSet != undefined) {\n      let rowsData: relationalStore.RowsData;\n      // 从结果集的当前行（默认首次获取数据时为当前结果集的第一行，后续为上次获取数据结束位置的下一行）开始获取数据\n      // getRowsData会自动移动结果集当前行到上次getRowsData获取结束位置的下一行，无需使用goToNextRow接口移动\n      let maxCount: number = 50;\n      let rowCount: number = 0;\n      while ((rowsData = await resultSet.getRowsData(maxCount)).length != 0) {\n        rowsData.forEach((rowData, index) => {\n          // 第rowCount + index + 1行的查询结果\n          console.info(`${rowCount + index + 1}：${rowData}`);\n        });\n        rowCount += rowsData.length;\n      }\n    }\n  \n    // 示例2：指定maxCount和起始的position\n    if (resultSet != undefined) {\n      let rowsData: relationalStore.RowsData;\n      let maxCount: number = 50;\n      let position: number = 50;\n      while ((rowsData = await resultSet.getRowsData(maxCount, position)).length != 0) {\n        rowsData.forEach((rowData, index) => {\n          // 第position + index + 1行的查询结果\n          console.info(`${position + index + 1}：${rowData}`);\n        });\n        position += rowsData.length;\n      }\n    }\n  } catch (err) {\n    console.error(`Failed to get rows data: code:${err.code}, message:${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "iscolumnnull23",
      children: "isColumnNull23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isColumnNull(columnIndex: number): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查当前行中指定列的值是否为null。"
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
            children: "columnIndex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的列索引，从0开始。"
          })]
        })
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果当前行中指定列的值为null，则返回true；否则返回false。"
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
      }), "。其中，14800011错误码处理可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
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
            children: "14800001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid arguments. Possible causes: 1.Parameter is out of valid range."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The current operation failed because the database is corrupted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResultSet is empty or pointer index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column index is out of bounds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target instance is already closed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SQL must be a query statement."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14800021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Generic error."
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
            children: "14800030"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite: Unable to open the database file."
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
        children: "async function isColumnNullExample(store : relationalStore.RdbStore) {\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      resultSet.goToNextRow();\n      const name = resultSet.isColumnNull(resultSet.getColumnIndex(\"NAME\"));\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "close23",
      children: "close23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "close(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭结果集，若不关闭可能会引起fd泄露和内存泄露。"
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
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async function closeExample(store : relationalStore.RdbStore) {\n  try {\n    let resultSet: relationalStore.LiteResultSet | undefined;\n    resultSet = await store.querySqlWithoutRowCount('select * from EMPLOYEE where name = ?', [\"Rose\"]);\n    if (resultSet != undefined) {\n      resultSet.close();\n    }\n  } catch (err) {\n    console.error(`failed, code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
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
429018(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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