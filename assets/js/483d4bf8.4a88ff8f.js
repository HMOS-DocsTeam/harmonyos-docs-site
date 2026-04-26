"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["735211"], {
927956(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_app_data_persistence_data_persistence_by_vector_store_data_persistence_by_vector_store_md_483_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-app-data-persistence-data-persistence-by-vector-store-data-persistence-by-vector-store-md-483.json
var site_docs_arkdata_app_data_persistence_data_persistence_by_vector_store_data_persistence_by_vector_store_md_483_namespaceObject = JSON.parse('{"id":"arkdata/app-data-persistence/data-persistence-by-vector-store/data-persistence-by-vector-store","title":"通过向量数据库实现数据持久化 (ArkTS)","description":"场景介绍","source":"@site/docs/arkdata/app-data-persistence/data-persistence-by-vector-store/data-persistence-by-vector-store.md","sourceDirName":"arkdata/app-data-persistence/data-persistence-by-vector-store","slug":"/arkdata/app-data-persistence/data-persistence-by-vector-store/","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/data-persistence-by-vector-store/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"通过向量数据库实现数据持久化 (ArkTS)","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-persistence-by-vector-store","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过关系型数据库实现数据持久化 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/native-relational-store-guidelines/"},"next":{"title":"通过向量数据库实现数据持久化 (C/C++)","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/native-vector-store-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/app-data-persistence/data-persistence-by-vector-store/data-persistence-by-vector-store.md


const frontMatter = {
	title: '通过向量数据库实现数据持久化 (ArkTS)',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-persistence-by-vector-store',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '通过向量数据库实现数据持久化 (ArkTS)';

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
  "value": "数据类型",
  "id": "数据类型",
  "level": 3
}, {
  "value": "字段约束",
  "id": "字段约束",
  "level": 3
}, {
  "value": "子句",
  "id": "子句",
  "level": 3
}, {
  "value": "集合",
  "id": "集合",
  "level": 3
}, {
  "value": "运算符",
  "id": "运算符",
  "level": 3
}, {
  "value": "时间&amp;日期",
  "id": "时间日期",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
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
    h3: "h3",
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
        id: "通过向量数据库实现数据持久化-arkts",
        children: "通过向量数据库实现数据持久化 (ArkTS)"
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
        children: "ArkTS侧支持的基本数据类型：number、string、二进制类型数据、boolean；特殊数据类型：ValueType。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为保证插入并读取数据成功，建议一条数据不要超过2M。单条数据超出该大小时，即使插入成功，也会出现读取失败的情况。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规格限制",
      children: "规格限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据类型",
      children: "数据类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库表字段的类型，如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否支持"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整形"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOUBLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浮点类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLOB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二进制类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FLOATVECTOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向量数据类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "字段约束",
      children: "字段约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据库表字段的约束，如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL语法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否支持"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不可为NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "唯一索引"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNIQUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "主键索引"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRIMARY KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "外键索引"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOREIGN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK约束"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CHECK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "子句",
      children: "子句"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询语句中的子句，如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否支持"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WHERE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从一个或多个表中获取数据的条件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LIMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回数据的限制。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ORDER BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于一列或多列排序。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ORDER BY 向量距离"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<->是L2距离，<=>是余弦距离。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GROUP BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对相同的数据进行分组。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAVING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过滤聚合函数的结果。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INDEXED BY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询时必须使用特定索引。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DISTINCT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "消除重复记录。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "集合",
      children: "集合"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询语句中的集合语句，如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否支持"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "合并两个或多个查询语句的结果并去重。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNION ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "合并两个或多个查询语句的结果。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "运算符",
      children: "运算符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对某个条件做筛选时，可以使用运算符，一般在查询语句中使用。运算符如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "运算类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "符号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否支持"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "算术运算"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+、-、*、/、%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "比较运算"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "==、=、!=、>、>=、<、<="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "逻辑运算"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AND、BETWEEN、EXISTS、IN、NOT IN、NOT、OR、IS NULL、IS、IS NOT、LIKE、GLOB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "字符串拼接运算"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "位运算"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "&、"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "、~、<<、>>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "向量距离运算"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<->、<=>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是，支持在聚合函数max和min中使用"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "时间日期",
      children: "时间&日期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据不同的时间函数返回不同格式的日期，一般在查询语句中使用。时间&日期函数如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否支持"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以\"YYYY-MM-DD\"格式返回日期。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以\"HH:MM:SS\"格式返回时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DATETIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以\"YYYY-MM-DD HH:MM:SS\"格式返回。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JULIANDAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回从格林尼治时间的公元前4714年11月24日正午算起的天数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STRFTIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据第一个参数指定的格式字符串返回格式化的日期。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQL语句中的函数，如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否支持"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算查询返回的行数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAX/MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择某列的最大值/最小值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算某列的平均值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算某列的总和。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RANDOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个'-9223372036854775808'到'9223372036854775807'之间的伪随机整数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算绝对值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPPER/LOWER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将字符串转换为大/小写字母。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LENGTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回字符串的长度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是向量数据库持久化功能的相关接口，更多接口及使用方式请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-arkts/js-apis-data-relationalstore/arkts-apis-data-relationalstore/arkts-apis-data-relationalstore",
        children: "@ohos.data.relationalStore (关系型数据库)"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "getRdbStore(context: Context, config: StoreConfig): Promise<RdbStore>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户可以根据自己的需求配置StoreConfig参数获得RdbStore对象，通过调用RdbStore接口执行数据操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "execute(sql: string, txId: number, args?: Array<ValueType>): Promise<ValueType>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行包含指定参数的SQL语句，语句中的各种表达式和操作符之间的关系操作符号(例如=、>、<)不超过1000个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "querySql(sql: string, bindArgs?: Array<ValueType>):Promise<ResultSet>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定SQL语句查询数据库中的数据，语句中的各种表达式和操作符之间的关系操作符号(例如=、>、<)不超过1000个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "beginTrans(): Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在开始执行SQL语句之前，开始事务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commit(txId : number):Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交已经执行的SQL语句，跟beginTrans配合使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rollback(txId : number):Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回滚已经执行的SQL语句，跟beginTrans配合使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deleteRdbStore(context: Context, config: StoreConfig): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isVectorSupported(): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断系统是否提供向量数据库能力。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "判断当前系统是否支持向量数据库，若不支持，则表示当前系统不具备向量数据库能力。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { relationalStore } from '@kit.ArkData'; // 导入模块\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\nimport { UIContext } from '@kit.ArkUI';\n// ...\n  // 判断当前系统是否支持向量数据库\n  let ret = relationalStore.isVectorSupported();\n  if (!ret) {\n    console.error(`vectorDB is not supported.`);\n    return;\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若支持向量数据库则需要获取一个RdbStore。通过getRdbStore接口创建数据库，并执行建表操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(124741)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用创建的数据库与其上下文（Context）有关，即使使用同样的数据库名称，不同的应用上下文也会产生多个数据库，例如每个UIAbility都有各自的上下文。"
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
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let store: relationalStore.RdbStore | undefined = undefined;\n/* context为应用的上下文信息，此处获取方式仅为示例。 */\nlet context: Context = new UIContext().getHostContext() as common.UIAbilityContext;\nconst STORE_CONFIG: relationalStore.StoreConfig = {\n  name: 'VectorTest.db', // 数据库文件名\n  securityLevel: relationalStore.SecurityLevel.S1, // 数据库安全级别\n  vector: true // 可选参数，该参数为true时才可以使用向量数据库。\n};\n// ...\n  try {\n    store = await relationalStore.getRdbStore(context, STORE_CONFIG);\n    // 建表语句，floatvector(2)代表repr的维度是2\n    const SQL_CREATE_TABLE = 'CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY, repr floatvector(2));';\n    // 第二个入参表示不开启显示事务，第三个参数undefined表示未使用参数绑定\n    await store!.execute(SQL_CREATE_TABLE, 0, undefined);\n  } catch(err) {\n    console.error(`Get RdbStore failed, code is ${err.code}, message is ${err.message}`);\n  };\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取到RdbStore后，调用execute接口插入数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(387891)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "向量数据库没有显式的flush操作实现持久化，数据插入即保存在持久化文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 使用参数绑定\n  const vectorValue: Float32Array = Float32Array.from([1.2, 2.3]);\n  await store!.execute('insert into test VALUES(?, ?);', 0, [0, vectorValue]);\n  // 不使用参数绑定\n  await store!.execute(\"insert into test VALUES(1, '[1.3, 2.4]');\", 0, undefined);\n} catch (err) {\n  console.error(`execute insert failed, code is ${err.code}, message is ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取到RdbStore后，调用execute接口修改或删除数据。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 修改数据\ntry {\n  // 使用参数绑定\n  const vectorValue1: Float32Array = Float32Array.from([2.1, 3.2]);\n  await store!.execute('update test set repr = ? where id = ?', 0, [vectorValue1, 0]);\n  // 不使用参数绑定\n  await store!.execute(\"update test set repr = '[5.1, 6.1]' where id = 0\", 0, undefined);\n} catch (err) {\n  console.error(`execute update failed, code is ${err.code}, message is ${err.message}`);\n}\n\n// 删除数据\ntry {\n  // 使用参数绑定\n  await store!.execute('delete from test where id = ?', 0, [0]);\n  // 不使用参数绑定\n  await store!.execute('delete from test where id = 0', 0, undefined);\n} catch (err) {\n  console.error(`execute delete failed, code is ${err.code}, message is ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取到RdbStore后，调用querySql方法查找数据，返回一个ResultSet结果集。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(286379)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当应用完成查询数据操作，不再使用结果集（ResultSet）时，请及时调用close方法关闭结果集，释放系统为其分配的内存。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 单表查询\ntry {\n  // 使用参数绑定\n  const QUERY_SQL = 'select id, repr <-> ? as distance from test where id > ? order by repr <-> ? limit 5;';\n  const vectorValue2: Float32Array = Float32Array.from([6.2, 7.3]);\n  let resultSet = await store!.querySql(QUERY_SQL, [vectorValue2, 0, vectorValue2]);\n  while (resultSet!.goToNextRow()) {\n    let id = resultSet.getValue(0);\n    let dis = resultSet.getValue(1);\n  }\n  resultSet!.close();\n\n  // 不使用参数绑定\n  const QUERY_SQL1 = \"select id, repr <-> '[6.2, 7.3]' as distance from test where id > 0 order by repr <-> '[6.2, 7.3]' limit 5;\";\n  resultSet = await store!.querySql(QUERY_SQL1);\n  resultSet!.close();\n} catch (err) {\n  console.error(`query failed, code is ${err.code}, message is ${err.message}`);\n}\n\n// 子查询\ntry {\n  // 创建第二张表\n  let CREATE_SQL = 'CREATE TABLE IF NOT EXISTS test1(id text PRIMARY KEY);';\n  await store!.execute(CREATE_SQL);\n  let resultSet = await store!.querySql('select * from test where id in (select id from test1);');\n  resultSet!.close();\n} catch (err) {\n  console.error(`query failed, code is ${err.code}, message is ${err.message}`);\n}\n\n// 聚合查询\ntry {\n  let resultSet = await store!.querySql(\"select * from test where repr <-> '[1.0, 1.0]' > 0 group by id having max(repr <=> '[1.0, 1.0]');\");\n  resultSet!.close();\n} catch (err) {\n  console.error(`query failed, code is ${err.code}, message is ${err.message}`);\n}\n\n// 多表查询\ntry {\n  // union all与union的区别在于union会将数据去重\n  let resultSet = await store!.querySql(\"select id, repr <-> '[1.5, 5.6]' as distance from test union select id, repr <-> '[1.5, 5.6]' as distance from test order by distance limit 5;\");\n  resultSet!.close();\n} catch (err) {\n  console.error(`query failed, code is ${err.code}, message is ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建视图并执行查询。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 视图查询\ntry {\n  // 创建视图\n  await store!.execute('CREATE VIEW v1 as select * from test where id > 0;');\n  let resultSet = await store!.querySql('select * from v1;');\n  resultSet!.close();\n} catch (err) {\n  console.error(`query failed, code is ${err.code}, message is ${err.message}`);\n}\n"
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
            src: (__webpack_require__(581612)/* ["default"] */.A) + "",
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
            children: "// 基础用法\ntry {\n  // 创建的索引名称为diskann_l2_idx，索引列为repr，类型为gsdiskann，距离度量类型为L2\n  await store!.execute('CREATE INDEX diskann_l2_idx ON test USING GSDISKANN(repr L2);');\n  // 删除表test中的diskann_l2_idx索引\n  await store!.execute('DROP INDEX test.diskann_l2_idx;');\n} catch (err) {\n  console.error(`create index failed, code is ${err.code}, message is ${err.message}`);\n}\n\n// 扩展语法\ntry {\n  // 设置QUEUE_SIZE为20，OUT_DEGREE为50\n  await store!.execute('CREATE INDEX diskann_l2_idx ON test USING GSDISKANN(repr L2) WITH (queue_size=20, out_degree=50);');\n} catch (err) {\n  console.error(`create ext index failed, code is ${err.code}, message is ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "手动回收索引删除产生的磁盘碎片。从API version 20 开始支持此功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "向量数据库对已创建gsdiskann索引的表执行向量删除操作后，会自动执行磁盘碎片回收，但在以下两个场景下自动回收可能会无法触发："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "删除gsdiskann索引下的向量后，立刻关闭数据库。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "批量删除gsdiskann索引下的向量后，后续不对该表进行任何操作。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "因此提供手动触发gsdiskann索引磁盘碎片回收的语句，语法如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PRAGMA DISKANN_ASYNC_COLLECTING;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(901936)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "一次触发对向量数据库中所有表下的全部gsdiskann索引执行回收。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "磁盘碎片回收任务为后台任务，不会阻塞后续其他语句的执行。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "磁盘碎片回收任务由后台基于负载自动调度，通常仅在低负载场景下执行，成功所需时间依赖负载情况。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 手动触发异步删除整理，对向量数据库下所有gsdiskann执行磁盘碎片回收\n  await store!.execute('PRAGMA DISKANN_ASYNC_COLLECTING;');\n} catch (err) {\n  console.error(`diskann async collecting failed, code is ${err.code}, message is ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置数据老化功能。当应用的数据需要经常清理时，可以按时间或空间配置数据老化策略，从而实现数据的自动化清理。"
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
                children: "向下换算成秒取值"
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
            children: "try {\n   // 每隔五分钟执行写操作后，会触发数据老化任务\n   await store!.execute(\"CREATE TABLE test2(rec_time integer not null) WITH (time_col = 'rec_time', interval = '5 minute');\");\n } catch (err) {\n   console.error(`configure data aging failed, code is ${err.code}, message is ${err.message}`);\n }\n"
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
            children: "try {\n  // content列配置了数据压缩，并且配置了数据老化。\n  await store!.execute(\"CREATE TABLE IF NOT EXISTS test3 (time integer not null, content text) with (time_col = 'time', interval = '5 minute', compress_col = 'content');\");\n} catch (err) {\n  console.error(`configure data compress failed, code is ${err.code}, message is ${err.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "删除数据库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用deleteRdbStore方法，删除数据库及数据库相关文件。示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 删除数据库前，需要先将store对象关闭，否则会导致下一次调用getRdbStore接口创建数据库失败\n  await store!.close();\n  await relationalStore.deleteRdbStore(context, STORE_CONFIG);\n} catch (err) {\n  console.error(`delete rdbStore failed, code is ${err.code},message is ${err.message}`);\n}\n"
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
124741(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
286379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
387891(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
581612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
901936(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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