"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["165049"], {
59006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_sqlite_database_debug_tool_sqlite_database_debug_tool_md_9d2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-sqlite-database-debug-tool-sqlite-database-debug-tool-md-9d2.json
var site_docs_arkdata_sqlite_database_debug_tool_sqlite_database_debug_tool_md_9d2_namespaceObject = JSON.parse('{"id":"arkdata/sqlite-database-debug-tool/sqlite-database-debug-tool","title":"SQLite调试工具指导","description":"SQLite是一款轻量级、嵌入式、无服务器的关系型数据库管理系统，其核心优势在于将整个数据库存储于单一文件中，无需独立服务器进程，支持跨平台运行，被广泛应用于移动应用、嵌入式设备和桌面软件等场景。","source":"@site/docs/arkdata/sqlite-database-debug-tool/sqlite-database-debug-tool.md","sourceDirName":"arkdata/sqlite-database-debug-tool","slug":"/arkdata/sqlite-database-debug-tool/","permalink":"/harmonyos-docs-site/arkdata/sqlite-database-debug-tool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"SQLite调试工具指导","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sqlite-database-debug-tool","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"vector-store数据库调试工具指导","permalink":"/harmonyos-docs-site/arkdata/arkdata-debug-tool/vector-store-debug-tool/"},"next":{"title":"ArkData术语","permalink":"/harmonyos-docs-site/arkdata/data-terminology/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/sqlite-database-debug-tool/sqlite-database-debug-tool.md


const frontMatter = {
	title: 'SQLite调试工具指导',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sqlite-database-debug-tool',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'SQLite调试工具指导';

const assets = {

};



const toc = [{
  "value": "环境要求",
  "id": "环境要求",
  "level": 2
}, {
  "value": "操作准备",
  "id": "操作准备",
  "level": 2
}, {
  "value": "命令列表",
  "id": "命令列表",
  "level": 2
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
}, {
  "value": "命令的具体使用及示例",
  "id": "命令的具体使用及示例",
  "level": 2
}, {
  "value": "帮助命令（.help）",
  "id": "帮助命令help",
  "level": 3
}, {
  "value": "创建或打开已有的数据库",
  "id": "创建或打开已有的数据库",
  "level": 3
}, {
  "value": "创建表",
  "id": "创建表",
  "level": 3
}, {
  "value": "查询表",
  "id": "查询表",
  "level": 3
}, {
  "value": "删除表",
  "id": "删除表",
  "level": 3
}, {
  "value": "插入数据",
  "id": "插入数据",
  "level": 3
}, {
  "value": "查询数据",
  "id": "查询数据",
  "level": 3
}, {
  "value": "更新数据",
  "id": "更新数据",
  "level": 3
}, {
  "value": "删除数据",
  "id": "删除数据",
  "level": 3
}, {
  "value": "相关参考",
  "id": "相关参考",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "查询结果为空时的问题处理",
  "id": "查询结果为空时的问题处理",
  "level": 3
}, {
  "value": "如何删除字符",
  "id": "如何删除字符",
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
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "sqlite调试工具指导",
        children: "SQLite调试工具指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite是一款轻量级、嵌入式、无服务器的关系型数据库管理系统，其核心优势在于将整个数据库存储于单一文件中，无需独立服务器进程，支持跨平台运行，被广泛应用于移动应用、嵌入式设备和桌面软件等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本调试工具基于hdc命令实现对SQLite数据库的操作，提供一种通过命令行接口高效管理SQLite数据库的方式，适用于开发、调试和运维阶段对数据库的快速操作与验证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(567121)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从HarmonyOS 6.0.0开始，支持使用SQLite调试工具。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者也可以通过DevEco Studio调试数据库，具体操作方式请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-debug-app/ide-database-inspector",
          children: "访问应用数据库"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者在使用本工具前需开启", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-debug-app/ide-developer-mode#section530763213432",
          children: "开发者模式"
        }), "，且需要获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hdc",
          children: "hdc工具"
        }), "，执行hdc shell。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "连接设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作准备",
      children: "操作准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用SQLite之前需先切换至目标调试应用路径下，再使用命令进入到SQLite调试工具。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 打开 hdc 命令行\nc:/users/zzz>hdc shell\n$ cd /data/app/el1/100/base/com.test.myapplication   // 进入到目标调试应用路径下（当前路径为示例，开发者需自己获取调试应用路径）。\n$ ls -lZ                                             // 查看路径下的数据库文件，有debug_hap_data_file标签，则确认为调试应用的文件。\ntotal 9531\ndrwxrwsr-x 2 20020197 ddms o:object_r:debug_hap_data_file:s0:x229,x334,x512,x868,x1024     3440 2025-08-08 16:54 lock\n-rw-rw---- 1 20020197 ddms o:object_r:debug_hap_data_file:s0:x229,x334,x512,x868,x1024  9228288 2025-08-08 16:55 rdbPerfTest.db\n-rw-rw---- 1 20020197 ddms o:object_r:debug_hap_data_file:s0:x229,x334,x512,x868,x1024      343 2025-08-08 16:54 rdbPerfTest.db-compare\n-rw-rw---- 1 20020197 ddms o:object_r:debug_hap_data_file:s0:x229,x334,x512,x868,x1024    12288 2025-08-08 16:55 rdbPerfTest.db-dwr\n-rw-rw---- 1 20020197 ddms o:object_r:debug_hap_data_file:s0:x229,x334,x512,x868,x1024    32768 2025-08-08 16:55 rdbPerfTest.db-shm\n-rw-rw---- 1 20020197 ddms o:object_r:debug_hap_data_file:s0:x229,x334,x512,x868,x1024   444992 2025-08-08 16:55 rdbPerfTest.db-wal\n$ sqlite3 rdbPerfTest.db                             // 打开数据库文件。\nSQLite version 3.44.4 2025-02-19 00:18:53\nEnter \".help\" for usage hints.\nsqlite>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在非调试应用路径下，尝试执行数据库和表的创建操作时，系统将抛出权限错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用SQL语句中的CREATE TABLE命令创建表，具体如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 打开 hdc 命令行\nc:/users/zzz>hdc shell\n# 尝试打开或创建新的数据库\n$ sqlite3 a.db\nSQLite version 3.44.4 2025-02-19 00:18:53\nEnter \".help\" for usage hints.\n# 创建表\nsqlite>create table t1(a int);\nError: unable to open database \"a.db\": unable to open database file\n# 打开asd.db数据库\nsqlite> .open asd.db\nError: unable to open database \"asd.db\": unable to open database file\nNotice: using substitute in-memory database instead of \"asd.db\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行上述命令时，SQLite尝试打开或创建表与asd.db数据库，但由于没有权限，会出现以下的错误信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 创建表\nsqlite>create table t1(a int);\nError: unable to open database \"a.db\": unable to open database file\n# 打开asd.db数据库\nsqlite> .open asd.db\nError: unable to open database \"asd.db\": unable to open database file\nNotice: using substitute in-memory database instead of \"asd.db\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLite访问加密数据库后，查询会出现以下报错："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# sqlite3 ./wallet_personal_info_data_relational_store\nSQLite version 3.44.4 2025-02-19 00:18:53\nEnter \".help\" for usage hints.\nsqlite> select * from sqlite_master;\nParse error: file is not a database (26)\nsqlite> .table\nError: file is not a database\nsqlite> .q\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令列表",
      children: "命令列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前SQLite调试工具支持的命令如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示所有可用的SQLite命令及简要说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".open 数据库名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开或创建一个数据库文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列出当前连接的所有数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列出当前数据库中的所有表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".show"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看SQLite命令提示符的默认设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取表的完整信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".quit 或 .exit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "退出SQLite命令行界面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".schema [TABLE]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示表的创建SQL语句（或所有表的结构）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQLite命令不需要分号：与SQL语句不同，SQLite命令直接回车执行，无需添加分号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需确保sqlite>提示符与命令之间不存在空格，否则将导致命令无法正常执行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令的具体使用及示例",
      children: "命令的具体使用及示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "帮助命令help",
      children: "帮助命令（.help）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sqlite>.help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建或打开已有的数据库",
      children: "创建或打开已有的数据库"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开已有数据库"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若数据库文件已存在，可通过.open打开："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sqlite3                                                        # 进入SQLite交互式Shell\n.open /data/app/el1/100/base/com.test.myapplication/mydb.db    # 在Shell内打开已有数据库\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "或直接在命令行指定文件路径："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sqlite3 /data/app/el1/100/base/com.test.myapplication/mydb.db  # 直接打开数据库（跳过进入Shell步骤）\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建并打开新数据库"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若指定的数据库文件不存在，SQLite将自动创建该文件："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sqlite3                                                        # 进入SQLite Shell\n.open /data/app/el1/100/base/com.test.myapplication/newdb.db   # 在Shell内创建并打开新数据库\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "或直接通过命令行创建："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sqlite3 /data/app/el1/100/base/com.test.myapplication/newdb.db  # 直接创建并打开新数据库\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建表",
      children: "创建表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可通过SQL语句create table创建COMPANY表，将ID设置为主键，NOT NULL约束表示在表中创建记录时这些字段不可为空："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sqlite>create table COMPANY(\n   ID INT PRIMARY KEY     NOT NULL,\n   NAME           TEXT    NOT NULL,\n   AGE            INT     NOT NULL,\n   ADDRESS        CHAR(50),\n   SALARY         REAL\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询表",
      children: "查询表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过SQLite命令.tables命令验证表是否创建成功，该命令用于列出附加数据库中的所有表。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sqlite>.tables\nCOMPANY\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在此处可查看到刚创建的表COMPANY。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过SQLite命令.schema命令可获取表的完整信息，具体如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sqlite>.schema COMPANY\nCREATE TABLE COMPANY(\n   ID INT PRIMARY KEY     NOT NULL,\n   NAME           TEXT    NOT NULL,\n   AGE            INT     NOT NULL,\n   ADDRESS        CHAR(50),\n   SALARY         REAL\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除表",
      children: "删除表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQL语句DROP TABLE语句用于删除表定义及其关联的所有数据、索引、触发器、约束和权限规范。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例：若数据库中已存在 COMPANY 表，可通过以下操作将其删除："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sqlite>DROP TABLE COMPANY;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行后，使用 .tables 命令将无法查询到 COMPANY 表，显示结果为空即表示删除成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sqlite>.tables\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "插入数据",
      children: "插入数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 sqlite> 提示符下，输入以下SQL语句插入单条数据："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSERT INTO COMPANY (ID, NAME, AGE, ADDRESS, SALARY) VALUES (1, '张三', 28, '北京市朝阳区', 20000.5);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过SQL语句SELECT * FROM 表的名称可获取表的完整信息，具体如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sqlite> SELECT * FROM COMPANY;\n1|张三|28|北京市朝阳区|20000.5\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入以下SQL语句INSERT INTO COMPANY(字段)values()语句插入多条数据："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sqlite> INSERT INTO COMPANY(ID, NAME, AGE, ADDRESS, SALARY)\n   ...> VALUES\n   ...> (3, '王五', 25, '广州市天河区', 18000.75),\n   ...> (4, '赵六', 40, '深圳市南山区', 30000.25);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过SQL语句SELECT * FROM 表的名称查询所有数据，具体如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sqlite> SELECT * FROM COMPANY;\n1|张三|28|北京市朝阳区|20000.5\n3|王五|25|广州市天河区|18000.75\n4|赵六|40|深圳市南山区|30000.25\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询数据",
      children: "查询数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在sqlite>提示符下,可通过 SELECT查询数据，支持以下几种数据查询："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可通过SQL语句SELECT * FROM 表的名称查询所有数据"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sqlite> SELECT * FROM COMPANY;\n1|张三|28|北京市朝阳区|20000.5\n3|王五|25|广州市天河区|18000.75\n4|赵六|40|深圳市南山区|30000.25\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可通过SQL语句SELECT 指定字段, 指定字段 FROM 表的名称查询指定字段的数据"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sqlite> SELECT name, age FROM COMPANY;\n张三|28\n王五|25\n赵六|40\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可通过SQL语句SELECT * FROM 表的名称 WHERE 指定字段 > 30;指定条件查询"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sqlite> SELECT * FROM COMPANY WHERE age > 30;\n4|赵六|40|深圳市南山区|30000.25\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可通过SQL语句SELECT * FROM 表的名称 ORDER BY 指定字段 ASC;指定字段排序查询"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sqlite>SELECT * FROM COMPANY ORDER BY age ASC;\n3|王五|25|广州市天河区|18000.75\n1|张三|28|北京市朝阳区|20000.5\n4|赵六|40|深圳市南山区|30000.25\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "更新数据",
      children: "更新数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在sqlite>提示符下，可通过SQL语句UPDATE 表名称 SET age = 31 WHERE name = '张三';语句插入单条数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sqlite>UPDATE COMPANY SET age = 31 WHERE name = '张三';\nsqlite>SELECT * FROM COMPANY;\n1|张三|31|北京市朝阳区|20000.5\n3|王五|25|广州市天河区|18000.75\n4|赵六|40|深圳市南山区|30000.25\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除数据",
      children: "删除数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在sqlite>提示符下，可通过SQL语句DELETE FROM 表名称 WHERE name = '王五';语句删除数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sqlite> DELETE FROM COMPANY WHERE name = '王五';\nsqlite> SELECT * FROM COMPANY;\n1|张三|28|北京市朝阳区|20000.5\n4|赵六|40|深圳市南山区|30000.25\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "相关参考",
      children: "相关参考"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://SQLite.org/docs.html",
        children: "SQLite官方网站"
      }), "提供了丰富的示例代码，包括创建数据库、创建表、插入数据和查询数据等操作，开发者可以进行参考和查看。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询结果为空时的问题处理",
      children: "查询结果为空时的问题处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在实际的数据库操作中，有时会遇到查询结果为空的情况，这是因为表中没有数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了避免这种情况，需确保已在表中插入相关数据，再进行查询操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何删除字符",
      children: "如何删除字符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Ctrl+BackSpace删除单个字符，使用Ctrl+U删除全部字符。"
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
567121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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