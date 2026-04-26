"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["3235"], {
312406(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_relational_store_error_code_h_capi_relational_store_error_code_h_md_6b8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-c-arkdata-headerfile-capi-relational-store-error-code-h-capi-relational-store-error-code-h-md-6b8.json
var site_docs_ref_arkdata_api_arkdata_c_arkdata_headerfile_capi_relational_store_error_code_h_capi_relational_store_error_code_h_md_6b8_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-error-code-h/capi-relational-store-error-code-h","title":"relational_store_error_code.h","description":"概述","source":"@site/docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-error-code-h/capi-relational-store-error-code-h.md","sourceDirName":"arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-error-code-h","slug":"/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-error-code-h/capi-relational-store-error-code-h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-error-code-h/capi-relational-store-error-code-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"relational_store_error_code.h","sidebar_position":17,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-error-code-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-relational-store-error-code-h"},"sidebar":"ref","previous":{"title":"relational_store.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h"},"next":{"title":"udmf.h","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-h/capi-udmf-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-error-code-h/capi-relational-store-error-code-h.md


const frontMatter = {
	title: 'relational_store_error_code.h',
	sidebar_position: 17,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-relational-store-error-code-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-relational-store-error-code-h'
};
const contentTitle = 'relational_store_error_code.h';

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
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_Rdb_ErrCode",
  "id": "oh_rdb_errcode",
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
        id: "relational_store_error_codeh",
        children: "relational_store_error_code.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明关系型数据库（RDB）的错误码信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <database/rdb/relational_store_error_code.h>"]
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
      }), " 10"]
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
              href: "#oh_rdb_errcode",
              children: "OH_Rdb_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Rdb_ErrCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示错误码信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_rdb_errcode",
      children: "OH_Rdb_ErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_Rdb_ErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示错误码信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "RDB_ERR = -1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行出错。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_OK = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E_BASE = 14800000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异常错误代码的基础。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_NOT_SUPPORTED = 801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDB不具备该能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_ERROR = E_BASE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "常见异常的错误代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_INVALID_ARGS = (E_BASE + 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数非法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_CANNOT_UPDATE_READONLY = (E_BASE + 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新只读数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_REMOVE_FILE = (E_BASE + 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除文件失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_EMPTY_TABLE_NAME = (E_BASE + 5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表名为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_EMPTY_VALUES_BUCKET = (E_BASE + 6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键值对内容为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_EXECUTE_IN_STEP_QUERY = (E_BASE + 7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询时执行的SQL语句错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_INVALID_COLUMN_INDEX = (E_BASE + 8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列索引非法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_INVALID_COLUMN_TYPE = (E_BASE + 9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列类型非法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_EMPTY_FILE_NAME = (E_BASE + 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件名称为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_INVALID_FILE_PATH = (E_BASE + 11)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件路径非法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_TRANSACTION_IN_EXECUTE = (E_BASE + 12)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启事务执行出错。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_INVALID_STATEMENT = (E_BASE + 13)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL语句预编译出错。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_EXECUTE_WRITE_IN_READ_CONNECTION = (E_BASE + 14)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在读连接中执行写操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_BEGIN_TRANSACTION_IN_READ_CONNECTION = (E_BASE + 15)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在读连接中开启事务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_NO_TRANSACTION_IN_SESSION = (E_BASE + 16)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在数据库会话中不存在开启的事务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_MORE_STEP_QUERY_IN_ONE_SESSION = (E_BASE + 17)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在一个数据库会话中执行多次查询。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_NO_ROW_IN_QUERY = (E_BASE + 18)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询得到的结果集不存在任何记录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_INVALID_BIND_ARGS_COUNT = (E_BASE + 19)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL语句中绑定的参数个数非法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_INVALID_OBJECT_TYPE = (E_BASE + 20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象类型非法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_INVALID_CONFLICT_FLAG = (E_BASE + 21)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冲突解决类型非法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_HAVING_CLAUSE_NOT_IN_GROUP_BY = (E_BASE + 22)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAVING关键字只能用于GROUP BY之后。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_NOT_SUPPORTED_BY_STEP_RESULT_SET = (E_BASE + 23)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持step形式数据库结果集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_STEP_RESULT_SET_CROSS_THREADS = (E_BASE + 24)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结果集查询出错。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_STEP_RESULT_QUERY_NOT_EXECUTED = (E_BASE + 25)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结果集查询语句未被执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_STEP_RESULT_IS_AFTER_LAST = (E_BASE + 26)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结果集的游标已经处于最后一行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_STEP_RESULT_QUERY_EXCEEDED = (E_BASE + 27)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结果集查询次数已经超过上限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_STATEMENT_NOT_PREPARED = (E_BASE + 28)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL语句未被预编译。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_EXECUTE_RESULT_INCORRECT = (E_BASE + 29)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库执行结果异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_STEP_RESULT_CLOSED = (E_BASE + 30)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结果集已经关闭。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_RELATIVE_PATH = (E_BASE + 31)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相对路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_EMPTY_NEW_ENCRYPT_KEY = (E_BASE + 32)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新的密钥文件为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_CHANGE_UNENCRYPTED_TO_ENCRYPTED = (E_BASE + 33)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将非加密的数据库更改为加密数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_CHANGE_ENCRYPT_KEY_IN_BUSY = (E_BASE + 34)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在数据库繁忙时更新数据库密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_STEP_STATEMENT_NOT_INIT = (E_BASE + 35)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预编译的SQL语句未被初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_NOT_SUPPORTED_ATTACH_IN_WAL_MODE = (E_BASE + 36)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在WAL日志模式下不支持ATTACH操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_CREATE_FOLDER_FAIL = (E_BASE + 37)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建文件夹失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SQLITE_SQL_BUILDER_NORMALIZE_FAIL = (E_BASE + 38)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL语句构建失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_STORE_SESSION_NOT_GIVE_CONNECTION_TEMPORARILY = (E_BASE + 39)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库会话暂未提供连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_STORE_SESSION_NO_CURRENT_TRANSACTION = (E_BASE + 40)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库会话不具有当前的事务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_NOT_SUPPORT = (E_BASE + 41)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持当前操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_INVALID_PARCEL = (E_BASE + 42)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前PARCEL非法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_QUERY_IN_EXECUTE = (E_BASE + 43)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行query查询出错。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SET_PERSIST_WAL = (E_BASE + 44)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置WAL模式下数据库文件的持久化时出错。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_DB_NOT_EXIST = (E_BASE + 45)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_ARGS_READ_CON_OVERLOAD = (E_BASE + 46)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置的读连接数大于上限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_WAL_SIZE_OVER_LIMIT = (E_BASE + 47)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAL日志文件大小超过默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_CON_OVER_LIMIT = (E_BASE + 48)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据库连接数已用完。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_ALREADY_CLOSED = (E_BASE + 50)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数据库已关闭。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_DATABASE_BUSY = (E_BASE + 51)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数据库无响应。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SQLITE_CORRUPT = (E_BASE + 52)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数据库损坏。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SQLITE_PERM = (E_BASE + 53)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SQLite错误码：访问权限被拒绝。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SQLITE_BUSY = (E_BASE + 54)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SQLite错误码：数据库文件被锁定。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SQLITE_LOCKED = (E_BASE + 55)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SQLite错误码：数据库中的表被锁定。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SQLITE_NOMEM = (E_BASE + 56)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SQLite错误码：数据库内存不足。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SQLITE_READONLY = (E_BASE + 57)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SQLite错误码：尝试写入只读数据库。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SQLITE_IOERR = (E_BASE + 58)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SQLite错误码：磁盘I/O错误。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SQLITE_FULL = (E_BASE + 59)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SQLite错误码：数据库已满。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SQLITE_CANT_OPEN = (E_BASE + 60)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SQLite错误码：无法打开数据库文件。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SQLITE_TOO_BIG = (E_BASE + 61)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SQLite错误码：TEXT或BLOB超出大小限制。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SQLITE_MISMATCH = (E_BASE + 62)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SQLite错误码：数据类型不匹配。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_DATA_TYPE_NULL = (E_BASE + 63)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["存储数据为空。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_TYPE_MISMATCH = (E_BASE + 64)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数据类型不匹配。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SQLITE_CONSTRAINT = (E_BASE + 65)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SQLite错误码：SQLite约束。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 18"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SUB_LIMIT_REACHED = (E_BASE + 66)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["订阅数量超过限制。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDB_E_SQLITE_ERROR = (E_BASE + 67)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SQLite错误码。可能原因：语法错误，例如表或列不存在。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        })]
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