"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["573668"], {
976373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_arkts_errcode_errorcode_data_rdb_errorcode_data_rdb_md_173_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-arkts-errcode-errorcode-data-rdb-errorcode-data-rdb-md-173.json
var site_docs_ref_arkdata_api_arkdata_arkts_errcode_errorcode_data_rdb_errorcode_data_rdb_md_173_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb","title":"关系型数据库错误码","description":"以下仅介绍本模块特有错误码，通用错误码请参考通用错误码说明文档。","source":"@site/docs-ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb.md","sourceDirName":"arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb","slug":"/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"关系型数据库错误码","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-data-rdb","kit":"应用框架","last_updated":"2026-04-22","slug":"errorcode-data-rdb"},"sidebar":"ref","previous":{"title":"OH_Utd","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-utd/capi-udmf-oh-utd"},"next":{"title":"数据共享错误码","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-arkts-errcode/errorcode-datashare/errorcode-datashare"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-arkts-errcode/errorcode-data-rdb/errorcode-data-rdb.md


const frontMatter = {
	title: '关系型数据库错误码',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-data-rdb',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'errorcode-data-rdb'
};
const contentTitle = '关系型数据库错误码';

const assets = {

};



const toc = [{
  "value": "14800000 内部错误",
  "id": "14800000-内部错误",
  "level": 2
}, {
  "value": "14800001 无效的参数",
  "id": "14800001-无效的参数",
  "level": 2
}, {
  "value": "14800010 数据库路径不合法",
  "id": "14800010-数据库路径不合法",
  "level": 2
}, {
  "value": "14800011 数据库文件异常",
  "id": "14800011-数据库文件异常",
  "level": 2
}, {
  "value": "14800012 结果集为空或指定位置不合法",
  "id": "14800012-结果集为空或指定位置不合法",
  "level": 2
}, {
  "value": "14800013 列值为空或列类型与当前调用接口不兼容",
  "id": "14800013-列值为空或列类型与当前调用接口不兼容",
  "level": 2
}, {
  "value": "14800014 目标实例已关闭",
  "id": "14800014-目标实例已关闭",
  "level": 2
}, {
  "value": "14800015 数据库没有响应",
  "id": "14800015-数据库没有响应",
  "level": 2
}, {
  "value": "14800016 数据库别名已被使用",
  "id": "14800016-数据库别名已被使用",
  "level": 2
}, {
  "value": "14800017 关键配置已被更改",
  "id": "14800017-关键配置已被更改",
  "level": 2
}, {
  "value": "14800018 查询结果没有数据符合条件",
  "id": "14800018-查询结果没有数据符合条件",
  "level": 2
}, {
  "value": "14800019 SQL必须是查询语句",
  "id": "14800019-sql必须是查询语句",
  "level": 2
}, {
  "value": "14800020 密钥损坏或丢失",
  "id": "14800020-密钥损坏或丢失",
  "level": 2
}, {
  "value": "14800021 SQLite：通用错误",
  "id": "14800021-sqlite通用错误",
  "level": 2
}, {
  "value": "14800022 SQLite：异步回调请求被中止",
  "id": "14800022-sqlite异步回调请求被中止",
  "level": 2
}, {
  "value": "14800023 SQLite：访问权限被拒绝",
  "id": "14800023-sqlite访问权限被拒绝",
  "level": 2
}, {
  "value": "14800024 SQLite：数据库文件已锁定",
  "id": "14800024-sqlite数据库文件已锁定",
  "level": 2
}, {
  "value": "14800025 SQLite：数据库中的表被锁定",
  "id": "14800025-sqlite数据库中的表被锁定",
  "level": 2
}, {
  "value": "14800026 SQLite：数据库内存不足",
  "id": "14800026-sqlite数据库内存不足",
  "level": 2
}, {
  "value": "14800027 SQLite：尝试写入只读数据库",
  "id": "14800027-sqlite尝试写入只读数据库",
  "level": 2
}, {
  "value": "14800028 SQLite：发生了某种磁盘I/O错误",
  "id": "14800028-sqlite发生了某种磁盘io错误",
  "level": 2
}, {
  "value": "14800029 SQLite：数据库已满",
  "id": "14800029-sqlite数据库已满",
  "level": 2
}, {
  "value": "14800030 SQLite：无法打开数据库文件",
  "id": "14800030-sqlite无法打开数据库文件",
  "level": 2
}, {
  "value": "14800031 SQLite：TEXT或BLOB超出大小限制",
  "id": "14800031-sqlitetext或blob超出大小限制",
  "level": 2
}, {
  "value": "14800032 SQLite：由于违反约束而中止",
  "id": "14800032-sqlite由于违反约束而中止",
  "level": 2
}, {
  "value": "14800033 SQLite：数据类型不匹配",
  "id": "14800033-sqlite数据类型不匹配",
  "level": 2
}, {
  "value": "14800034 SQLite：库使用不正确",
  "id": "14800034-sqlite库使用不正确",
  "level": 2
}, {
  "value": "14800041 类型转换失败",
  "id": "14800041-类型转换失败",
  "level": 2
}, {
  "value": "14800047 WAL文件大小超过默认上限",
  "id": "14800047-wal文件大小超过默认上限",
  "level": 2
}, {
  "value": "14800050 获取订阅服务失败",
  "id": "14800050-获取订阅服务失败",
  "level": 2
}, {
  "value": "14801001 上下文环境非Stage模型",
  "id": "14801001-上下文环境非stage模型",
  "level": 2
}, {
  "value": "14801002 storeConfig中传入的dataGroupId参数非法",
  "id": "14801002-storeconfig中传入的datagroupid参数非法",
  "level": 2
}, {
  "value": "14800051 分布式表类型不匹配",
  "id": "14800051-分布式表类型不匹配",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "关系型数据库错误码",
        children: "关系型数据库错误码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(357146)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下仅介绍本模块特有错误码，通用错误码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800000-内部错误",
      children: "14800000 内部错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inner error."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内部错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优先查看错误日志，通过日志可以详细了解错误原因，主要有以下几种："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sql执行异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "内部状态异常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "错误地使用接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统错误，如空指针、内存不足、数据服务异常重启、I/O错误、IPC异常、JS引擎异常等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者排查sql语句和谓词是否正确使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者排查是否存在对象关闭后再使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者排查是否按接口文档正确使用接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "尝试重试，如果依然无法解决，可以提示用户重启应用、升级应用或升级设备版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800001-无效的参数",
      children: "14800001 无效的参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid arguments. Possible causes: 1. Parameter is out of valid range; 2. Missing GROUP BY clause."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "入参不符合接口要求，如取值范围、长度、格式等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考接口参数说明修改参数符合要求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800010-数据库路径不合法",
      children: "14800010 数据库路径不合法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to open or delete the database by an invalid database path."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库路径不合法，打开或删除数据库失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无效的数据库路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查传入数据库路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800011-数据库文件异常",
      children: "14800011 数据库文件异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The current operation failed because the database is corrupted."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库异常，当前操作失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库文件不完整、数据库fd被误操作、数据库内存被踩等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果可以接受数据库数据丢失，则可尝试删除数据库后重新创建。否则，需要备份数据库以便恢复。具体操作可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/data-reliability-security/data-backup-and-restore",
        children: "数据库备份与恢复"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800012-结果集为空或指定位置不合法",
      children: "14800012 结果集为空或指定位置不合法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ResultSet is empty or pointer index is out of bounds."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果集为空或指定位置不合法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结果集为空或结果集指定行号超出位置范围[0, m - 1]，m = ResultSet.rowCount。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查当前操作得到的结果集是否为空或指定的位置是否合法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800013-列值为空或列类型与当前调用接口不兼容",
      children: "14800013 列值为空或列类型与当前调用接口不兼容"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Column index is out of bounds."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "列值为空或列类型与当前调用接口不兼容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前列号超出范围[0, n - 1]，n = ResultSet.columnCount。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前列数据类型接口不支持。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查结果集当前列号是否超出范围。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查当前列数据类型是否支持。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800014-目标实例已关闭",
      children: "14800014 目标实例已关闭"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The target instance is already closed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目标实例已关闭。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实例未成功打开，或者所属实例已关闭（如RdbStore、ResultSet对象已调用close方法，Transaction对象已调用commit或rollback方法）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重新打开RdbStore或者重新查询获取得到ResultSet。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800015-数据库没有响应",
      children: "14800015 数据库没有响应"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The database does not respond."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库没有响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有读、写、attach、detach等操作正在执行，无法在指定的时间（默认2s）内执行当前操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重新尝试。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果是", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#attach12",
          children: "attach"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-rdbstore/arkts-apis-data-relationalstore-rdbstore#detach12",
          children: "detach"
        }), "接口，增加waitTime值来增加等待时长。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800016-数据库别名已被使用",
      children: "14800016 数据库别名已被使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The database alias already exists."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "附加后的数据库别名已被使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "附加后的数据库的别名已被使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不进行附加数据库操作或者修改附加后数据库的别名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800017-关键配置已被更改",
      children: "14800017 关键配置已被更改"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "StoreConfig is changed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库关键配置已被更改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库的area（区域），securityLevel（安全级别），数据库读写权限等关键配置发生变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保持原配置不变或者用原配置导出数据，删除旧库，用新配置创建新库，数据存入新库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查是否使用chmod修改了数据库文件的读写权限，确保当前用户有足够的权限来读写数据库文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800018-查询结果没有数据符合条件",
      children: "14800018 查询结果没有数据符合条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No data meets the condition."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQL语句有误，未查询到符合条件的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "没有编写查询正确结果集的SQL语句。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编写正确的查询语句或者添加数据库数据之后再做查询。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800019-sql必须是查询语句",
      children: "14800019 SQL必须是查询语句"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SQL must be a query statement."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQL必须是查询语句。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQL语句不符合规定，导致查询失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQL语句不符合规定导致执行失败时，编写满足规约的SQL语句。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800020-密钥损坏或丢失",
      children: "14800020 密钥损坏或丢失"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The secret key is corrupted or lost."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取密钥失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根密钥丢失、无权限读取密钥文件、密钥文件损坏等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查密钥文件权限、内容是否正常。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重建或restore恢复数据库。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800021-sqlite通用错误",
      children: "14800021 SQLite：通用错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: Generic error. Possible causes: Insert failed or the updated data does not exist."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite：通用错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行sql语句过程中出现错误，如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "插入或更新未创建的表。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "插入或更新未曾有的列。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用未定义的函数等，参见SQLITE_ERROR的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者分析错误的SQL语句，找出错误点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800022-sqlite异步回调请求被中止",
      children: "14800022 SQLite：异步回调请求被中止"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: Callback routine requested an abort."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite：异步回调请求被中止。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通常发生在使用SQLite的自定义函数机制时，回调被中止执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_ABORT的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查SQLite的钩子函数（callback）的实现，确保其正确性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800023-sqlite访问权限被拒绝",
      children: "14800023 SQLite：访问权限被拒绝"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: Access permission denied."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite访问权限被拒绝。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "操作系统级别的权限问题，意味着SQLite试图访问或修改一个文件，但是没有足够的权限去执行这个操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_PERM的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认文件没有只读属性，如果有，去掉只读属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查文件和文件夹的权限，确保当前用户有足够的权限来读写文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查文件系统是否为只读，如果是，改为可写状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认没有其他进程锁定数据库文件，如果有，关闭占用文件的进程。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在处理权限问题时，确保有足够的权限去更改相关的文件或文件夹权限。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800024-sqlite数据库文件已锁定",
      children: "14800024 SQLite：数据库文件已锁定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: The database file is locked."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite数据库文件已锁定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一应用两个进程，例如UIAbility和DataShareExtensionAbility同时打开了同一个数据库，进行增删改操作，或者不同应用的同一个group组内的进程通过group组打开同一个数据库，进行增删改操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_BUSY的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "避免进程并发操作数据库。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "等待一段时间重试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800025-sqlite数据库中的表被锁定",
      children: "14800025 SQLite：数据库中的表被锁定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: A table in the database is locked."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite：数据库中的表被锁定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在尝试写入SQLite数据库时，但数据库文件已被另一个进程锁定。这可能是因为数据库处于事务中，或者有其他的锁机制在阻止写入。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_LOCKED的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保没有其他进程或线程正在对数据库文件进行写操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果使用了事务，请确保在开始事务后及提交事务前不要进行任何写操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查是否有其他锁机制（如文件锁）可能阻止了写入。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果数据库连接对象没有正确关闭，确保在完成数据库操作后关闭连接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果在多线程环境中，确保对数据库操作加锁，防止竞争条件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800026-sqlite数据库内存不足",
      children: "14800026 SQLite：数据库内存不足"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: The database is out of memory."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite：数据库内存不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库内存不足，可能是由于数据量过大或内存分配不足导致的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "减小数据量或增加内存分配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800027-sqlite尝试写入只读数据库",
      children: "14800027 SQLite：尝试写入只读数据库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: Attempt to write a readonly database."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite：尝试写入只读数据库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "尝试写入一个以只读模式打开的SQLite数据库文件时。这可能是因为文件权限问题，文件处于只读文件系统中或者数据库被标记为只读。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_READONLY的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保有足够的权限去写入数据库文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果文件系统是只读的，需要将其改为读写模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认在打开数据库时没有使用只读模式参数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800028-sqlite发生了某种磁盘io错误",
      children: "14800028 SQLite：发生了某种磁盘I/O错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: Some kind of disk I/O error occurred."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite发生了某种磁盘I/O错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可能是由于多种原因造成的，包括但不限于："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件不存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件是只读的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "磁盘空间不足。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件损坏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_IOERR的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查文件路径是否正确，文件是否存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保文件没有设置为只读。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查磁盘空间是否足够，并清理不必要的文件释放空间。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查文件的权限，确保应用程序有足够的权限去读写文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800029-sqlite数据库已满",
      children: "14800029 SQLite：数据库已满"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: The database is full."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite数据库已满。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库已满，可能是由于数据量过大或磁盘空间不足导致的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "减小数据量或增加磁盘空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800030-sqlite无法打开数据库文件",
      children: "14800030 SQLite：无法打开数据库文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: Unable to open the database file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite：无法打开数据库文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件不存在，并且创建新数据库失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件存在，但是数据库文件损坏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件权限问题，SQLite无法读写文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "磁盘空间不足。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_CANTOPEN的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认数据库文件路径是否正确，检查文件权限，确保应用程序有足够的权限去读写文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确认磁盘空间足够。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800031-sqlitetext或blob超出大小限制",
      children: "14800031 SQLite：TEXT或BLOB超出大小限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: TEXT or BLOB exceeds size limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite：TEXT或BLOB超出大小限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查询的结果集超过了SQLite所能处理的大小限制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_TOOBIG的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将大查询分解为多个小查询，每次处理一部分数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800032-sqlite由于违反约束而中止",
      children: "14800032 SQLite：由于违反约束而中止"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: Abort due to constraint violation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite：由于违反约束而中止。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "尝试写入SQLite数据库时违反了数据库的完整性约束条件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_CONSTRAINT的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查试图插入或更新的数据是否违反了上述约束。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800033-sqlite数据类型不匹配",
      children: "14800033 SQLite：数据类型不匹配"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: Data type mismatch."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite：数据类型不匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行一个SQL语句时，其中涉及的数据类型与数据库中存储的数据类型不匹配。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_MISMATCH的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查SQL语句中涉及的列的数据类型，确保插入、更新或查询的数据类型与列的数据类型相匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800034-sqlite库使用不正确",
      children: "14800034 SQLite：库使用不正确"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite: Library used incorrectly."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite：库使用不正确。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["表示数据库操作或者使用上下文不正确。这个错误通常发生在以下几种情况：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "数据库还没有完成操作就进行下一个操作。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在一个数据库连接已经关闭后，继续对该连接进行操作。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用了已经释放或无效的数据库对象。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参见SQLITE_MISUSE的相关错误场景。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保数据库操作之间有适当的同步，比如使用锁或其他同步机制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保数据库连接在使用前是打开的，在结束操作后是关闭的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保所有数据库对象在使用完毕后都已正确释放。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800041-类型转换失败",
      children: "14800041 类型转换失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Type conversion failed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类型转换失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过resultSet的获取数据时，传入字段的数据类型不匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确保传入字段的数据类型与使用的接口匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800047-wal文件大小超过默认上限",
      children: "14800047 WAL文件大小超过默认上限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The WAL file size exceeds the default limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WAL文件大小超过默认上限（512MB）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开启读事务或者结果集未关闭的情况下，不断执行增删改操作，导致WAL文件大小超过默认上限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查结果集或者事务是否未关闭。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭所有的结果集或者事务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800050-获取订阅服务失败",
      children: "14800050 获取订阅服务失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failed to obtain the subscription service."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取订阅服务失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前平台不支持订阅服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在当前平台部署订阅服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14801001-上下文环境非stage模型",
      children: "14801001 上下文环境非Stage模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The operation is supported in the stage model only."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该操作仅支持Stage模型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前上下文环境非Stage模型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "切换当前上下文环境，使用Stage模型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14801002-storeconfig中传入的datagroupid参数非法",
      children: "14801002 storeConfig中传入的dataGroupId参数非法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Invalid data group ID."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用非法dataGroupId参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用的dataGroupId不是从应用市场正常申请的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从应用市场申请dataGroupId，并正确传入该参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14800051-分布式表类型不匹配",
      children: "14800051 分布式表类型不匹配"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The type of the distributed table does not match."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对同一数据库表设置的分布式表类型前后不一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对同一数据库表设置的分布式表类型前后不一致，分布式表类型可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore-e/arkts-apis-data-relationalstore-e#distributedtype10",
        children: "DistributedType"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对同一数据库表设置的分布式表类型保持一致，属于端端同步的分布式表不可再设置为用于端云的同步表。"
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
357146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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