"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["703085"], {
751200(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_arkdata_debug_tool_vector_store_debug_tool_vector_store_debug_tool_md_8f1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-arkdata-debug-tool-vector-store-debug-tool-vector-store-debug-tool-md-8f1.json
var site_docs_arkdata_arkdata_debug_tool_vector_store_debug_tool_vector_store_debug_tool_md_8f1_namespaceObject = JSON.parse('{"id":"arkdata/arkdata-debug-tool/vector-store-debug-tool/vector-store-debug-tool","title":"vector-store数据库调试工具指导","description":"当前开发者在使用vector-store数据库进行开发调试和定位问题时，无法查看数据库文件中的内容信息，如元数据和用户数据等。","source":"@site/docs/arkdata/arkdata-debug-tool/vector-store-debug-tool/vector-store-debug-tool.md","sourceDirName":"arkdata/arkdata-debug-tool/vector-store-debug-tool","slug":"/arkdata/arkdata-debug-tool/vector-store-debug-tool/","permalink":"/harmonyos-docs-site/arkdata/arkdata-debug-tool/vector-store-debug-tool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"vector-store数据库调试工具指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vector-store-debug-tool","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"preferences数据库调试工具指导","permalink":"/harmonyos-docs-site/arkdata/arkdata-debug-tool/preferences-debug-tool/"},"next":{"title":"SQLite调试工具指导","permalink":"/harmonyos-docs-site/arkdata/sqlite-database-debug-tool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/arkdata-debug-tool/vector-store-debug-tool/vector-store-debug-tool.md


const frontMatter = {
	title: 'vector-store数据库调试工具指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vector-store-debug-tool',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'vector-store数据库调试工具指导';

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
  "value": "命令参考",
  "id": "命令参考",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
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
  "value": "重命名表名",
  "id": "重命名表名",
  "level": 3
}, {
  "value": "增加表字段",
  "id": "增加表字段",
  "level": 3
}, {
  "value": "重命名表字段",
  "id": "重命名表字段",
  "level": 3
}, {
  "value": "删除表字段",
  "id": "删除表字段",
  "level": 3
}, {
  "value": "删除表",
  "id": "删除表",
  "level": 3
}, {
  "value": "添加表索引",
  "id": "添加表索引",
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
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
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
    ol: "ol",
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
        id: "vector-store数据库调试工具指导",
        children: "vector-store数据库调试工具指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前开发者在使用vector-store数据库进行开发调试和定位问题时，无法查看数据库文件中的内容信息，如元数据和用户数据等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了提升开发者的工作效率，数据库调试工具支持开发者查看设备中的vector-store数据库内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(927508)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从HarmonyOS 6.0.0版本开始，支持使用vector-store数据库调试工具。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在使用本工具前，开发者需要先获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hdc#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
          children: "hdc工具"
        }), "，开启", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-debug-app/ide-developer-mode#section530763213432",
          children: "开发者选项"
        }), "，执行hdc shell。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["此调试工具仅支持调试应用使用，配置调试应用具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-debug-app/ide-run-debug-configurations",
          children: "配置应用可调试"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "正常连接设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作准备",
      children: "操作准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用vector-store调试工具之前，必须要先切换至目标调试应用路径下，再使用arkdata命令进入到vector-store调试工具（需要使用arkdata配置相关参数打开vector-store数据库，开库成功后才能使用vector-store工具进行数据的增删改查）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "arkdata命令支持的参数如下表所示："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "参数值类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "-t"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "数据库类型，进入到对应的数据库调试工具， 取值范围：{preference_kv, preference_xml, vector}。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "-f"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "字符串"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "数据库文件全路径，包含文件名， 路径不能以‘/’结尾。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "-h"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不涉及"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "打印程序帮助信息。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(102507)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "vector-store数据库调试工具，不涉及-p和-c参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "C:\\Users\\*****>hdc shell\n$ cd /data/app/el1/100/base/com.test.myapplication   // 进入到目标调试应用路径下(当前路径为示例,开发者需自己获取调试应用路径)\n$ arkdata -t vector                                  // 缺省-f, 没有指定数据库文件，默认新建一个名字为arkdata的数据库，路径在当前工作目录的data/vector目录下.\nEnter \".help\" for usage hints.\nvector>>> .q\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在非调试应用路径下，执行数据库开库操作时，缺少-f默认创建文件夹，在当前目录下创建data/vector文件夹层级失败，具体报错如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "C:\\Users\\*****>hdc shell\n$ arkdata -t vector\n[unsucc]Failed to create directory ./data/vector : Permission denied\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在非调试应用路径下，执行数据库开库操作时，指定路径，db文件创建失败，具体报错如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "C:\\Users\\*****>hdc shell\n$ arkdata -t vector -f ./vector\n[GMDB SERVER] [GMERR-1013000] multi-process init init unsucc!\n[ERROR] open db fail, ret = -5000.\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可使用arkdata --help查看整个数据库的相关参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "C:\\Users\\*****>hdc shell\n$ arkdata --help\nUSAGE\n  arkdata [option]\nOPTION\n  -t|--type      <preference_kv | preference_xml | vector>, it is mandatory\n  -f|--file      <database file path> \n  -p|--pageSize  <database pageSize>  \n  -c|--cacheSize <database cacheSize>\n  -h|--help\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令参考",
      children: "命令参考"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vector-store调试工具支持的命令如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "命令描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".quit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".mode <table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "print>"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列出所有表名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列出所有索引名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列出表的schemas。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ".count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "列出所有表的记录总数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vector-store调试工具操作用例如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "快捷操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%88%9B%E5%BB%BA%E8%A1%A8",
              children: "创建表"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "create table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E8%A1%A8",
              children: "查询表"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".table或者.schema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%87%8D%E5%91%BD%E5%90%8D%E8%A1%A8%E5%90%8D",
              children: "重命名表名"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alter table t1 rename to new_t1;"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%A2%9E%E5%8A%A0%E8%A1%A8%E5%AD%97%E6%AE%B5",
              children: "增加表字段"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alter table t1 add column c text;"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E9%87%8D%E5%91%BD%E5%90%8D%E8%A1%A8%E5%AD%97%E6%AE%B5",
              children: "重命名表字段"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alter table t1 rename b to new_b;"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%88%A0%E9%99%A4%E8%A1%A8%E5%AD%97%E6%AE%B5",
              children: "删除表字段"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alter table t1 drop column c;"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%88%A0%E9%99%A4%E8%A1%A8",
              children: "删除表"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "drop table t1;"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%B7%BB%E5%8A%A0%E8%A1%A8%E7%B4%A2%E5%BC%95",
              children: "添加表索引"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "create index idx_1 on t3(a);"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%8F%92%E5%85%A5%E6%95%B0%E6%8D%AE",
              children: "插入数据"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insert into t2 values(1,'xx'),(2,'yy');"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E8%AF%A2%E6%95%B0%E6%8D%AE",
              children: "查询数据"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "select * from t1;"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9B%B4%E6%96%B0%E6%95%B0%E6%8D%AE",
              children: "更新数据"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "update t1 set b = 'z' where a =3;"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%88%A0%E9%99%A4%E6%95%B0%E6%8D%AE",
              children: "删除数据"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "delete from t1 where b = 'z';"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vector-store数据库调试工具，命令语句最大的长度为1024*1024-1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于hdc使用中文会显示乱码，因此数据库调试工具不支持中文。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持的设备：Phone、PC/2in1。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令的具体使用及示例",
      children: "命令的具体使用及示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "帮助命令help",
      children: "帮助命令（.help）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开vector-store数据库后，使用帮助命令可以查看其支持的命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vector>>> .help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建或打开已有的数据库",
      children: "创建或打开已有的数据库"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行hdc shell命令进入shell交互模式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "必须要先切换至目标调试应用路径下, 再进入已有db文件层级，执行\"arkdata -t vector\"新建一个数据库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "C:\\Users\\*****>hdc shell\n$ cd /data/app/el1/100/database/com.test.myapplication   // 进入到目标调试应用路径下(当前路径为示例,开发者需自己获取调试应用路径)\n$ cd entry/rdb/                                          // 需要进入到有db文件的路径下,保证有读写权限,才能有权限创建新数据库.\n$ arkdata -t vector\nEnter \".help\" for usage hints.\nvector>>>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建新的数据库时，系统会自动生成以下类型的文件， 标签debug_hap_data_file代表属于调试应用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ ls -lZ ./data/vector/\ntotal 176\n-rw------- 1 shell shell u:object_r:debug_hap_data_file:s0  77824 2025-08-12 20:12 arkdata\n-rw------- 1 shell shell u:object_r:debug_hap_data_file:s0   8208 2025-08-12 20:13 arkdata.ctrl\n-rw------- 1 shell shell u:object_r:debug_hap_data_file:s0  24592 2025-08-12 20:13 arkdata.ctrl.dwr\n-rw------- 1 shell shell u:object_r:debug_hap_data_file:s0    512 2025-08-12 20:13 arkdata.redo\n-rw------- 1 shell shell u:object_r:debug_hap_data_file:s0      8 2025-08-12 20:13 arkdata.safe\n-rw------- 1 shell shell u:object_r:debug_hap_data_file:s0  28672 2025-08-12 20:12 arkdata.undo\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开已有数据库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ arkdata -t vector -f ./data/vector/arkdata\nEnter \".help\" for usage hints.\nvector>>>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建表",
      children: "创建表"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在vector>>>提示符下，通过create table命令创建单个表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 单条单行创建表\nvector>>> create table t1(a int unique, b text);\nvector>>> .schema\n+-------+------+----------+----------------------------------------+\n| type  | name | tbl_name | sql                                    |\n+-------+------+----------+----------------------------------------+\n| TABLE | T1   | T1       | create table t1(a int unique, b text); |\n+-------+------+----------+----------------------------------------+\n// 单条多行创建表\nvector>>> create table t7(\na int unique,\nb text);\nvector>>> .schema\n+-------+------+----------+---------------------------------------+\n| type  | name | tbl_name | sql                                   |\n+-------+------+----------+---------------------------------------+\n| TABLE | t7   | t7       | create table t7(a int unique,b text); |\n+-------+------+----------+---------------------------------------+\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在vector>>>提示符下，通过以下对应命令创建多个表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 单行多条创建表\nvector>>> create table t7(a int unique, b text); create table t8(a int unique, b text);\nvector>>> .schema\n+-------+------+----------+-----------------------------------------+\n| type  | name | tbl_name | sql                                     |\n+-------+------+----------+-----------------------------------------+\n| TABLE | t7   | t7       | create table t7(a int unique, b text);  |\n| TABLE | t8   | t8       |  create table t8(a int unique, b text); |\n+-------+------+----------+-----------------------------------------+\n// 多行多条创建表\nvector>>> create table t7(\na int unique,\nb text);\ncreate table t8(\na int unique,\nb text);\nvector>>> .schema\n+-------+------+----------+---------------------------------------+\n| type  | name | tbl_name | sql                                   |\n+-------+------+----------+---------------------------------------+\n| TABLE | t7   | t7       | create table t7(a int unique,b text); |\n| TABLE | t8   | t8       | create table t8(a int unique,b text); |\n+-------+------+----------+---------------------------------------+\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询表",
      children: "查询表"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在vector>>>提示符下，通过.table命令，列出数据库中所有表的名字，显示结果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "vector>>>.table\n+------+\n| name |\n+------+\n| T1   |\n| T2   |\n| T3   |\n+------+\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过.schema命令，显示数据库中所有表的结构信息，显示结果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "vector>>>.schema\n+-------+-------+----------+----------------------------------------+\n| type  | name  | tbl_name | sql                                    |\n+-------+-------+----------+----------------------------------------+\n| TABLE | T1    | T1       | create table t1(a int unique, b text); |\n| TABLE | T2    | T2       | create table t2(a int unique, b text); |\n| TABLE | T3    | T3       | create table t3(a int, b text);        |\n| TABLE | t7    | t7       | create table t7(a int unique,b text);  |\n| TABLE | t8    | t8       | create table t8(a int unique,b text);  |\nPress 'q' to quit, 'n' to continue: i\nInvalid input. Press 'q' to quit, 'n' to continue: n\n| TABLE | T9   | T9       | create table t9(a int unique,b text);  |\n+-------+-------+----------+----------------------------------------+\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(129396)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当显示数据条目达到5条时，为提升阅读体验，系统将提示用户是否继续显示或退出。输入q键退出显示，输入n继续显示结果。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "重命名表名",
      children: "重命名表名"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在vector>>>提示符下，通过\"alter table t1 rename to new_t1;\"命令重命名对应的表名，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vector>>> .schema\n+-------+------+----------+--------------------------------------+\n| type  | name | tbl_name | sql                                  |\n+-------+------+----------+--------------------------------------+\n| TABLE | T1   | T1       | create table t1( a int, new_b text); |\n+-------+------+----------+--------------------------------------+\nvector>>> alter table t1 rename to new_t1;  // 更改t1的表名为new_t1\nvector>>> .schema\n+-------+--------+----------+------------------------------------------+\n| type  | name   | tbl_name | sql                                      |\n+-------+--------+----------+------------------------------------------+\n| TABLE | NEW_T1 | NEW_T1   | create table NEW_T1( a int, new_b text); |\n+-------+--------+----------+------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "增加表字段",
      children: "增加表字段"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在vector>>>提示符下，通过\"alter table t1 add column c text;\"命令进行增加表字段，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vector>>> create table t1( a int, b text);\nvector>>> .schema\n+-------+------+----------+----------------------------------+\n| type  | name | tbl_name | sql                              |\n+-------+------+----------+----------------------------------+\n| TABLE | T1   | T1       | create table t1( a int, b text); |\n+-------+------+----------+----------------------------------+\nvector>>> alter table t1 add column c text;  // 在t1的表中，增加一个名为c，内容类型为text的字段\nvector>>> .schema\n+-------+------+----------+------------------------------------------+\n| type  | name | tbl_name | sql                                      |\n+-------+------+----------+------------------------------------------+\n| TABLE | T1   | T1       | create table t1( a int, b text, c text); |\n+-------+------+----------+------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "重命名表字段",
      children: "重命名表字段"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在vector>>>提示符下，通过\"alter table t1 rename b to new_b;\"命令重命名对应的表字段，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vector>>> .schema\n+-------+------+----------+----------------------------------+\n| type  | name | tbl_name | sql                              |\n+-------+------+----------+----------------------------------+\n| TABLE | T1   | T1       | create table t1( a int, b text); |\n+-------+------+----------+----------------------------------+\nvector>>> alter table t1 rename b to new_b; // 重命名t1表b字段为new_b\nvector>>> .schema\n+-------+------+----------+--------------------------------------+\n| type  | name | tbl_name | sql                                  |\n+-------+------+----------+--------------------------------------+\n| TABLE | T1   | T1       | create table t1( a int, new_b text); |\n+-------+------+----------+--------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除表字段",
      children: "删除表字段"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在vector>>>提示符下，通过\"alter table t1 drop column c;\"命令删除指表中指定字段，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vector>>> .schema\n+-------+------+----------+------------------------------------------+\n| type  | name | tbl_name | sql                                      |\n+-------+------+----------+------------------------------------------+\n| TABLE | T1   | T1       | create table t1( a int, b text, c text); |\n+-------+------+----------+------------------------------------------+\nvector>>> alter table t1 drop column c;  // 删除t1表中名为c的字段\nvector>>> .schema\n+-------+------+----------+----------------------------------+\n| type  | name | tbl_name | sql                              |\n+-------+------+----------+----------------------------------+\n| TABLE | T1   | T1       | create table t1( a int, b text); |\n+-------+------+----------+----------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除表",
      children: "删除表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在vector>>>提示符下，通过\"drop table t1;\"命令，删除数据库中的名为t1的表，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vector>>>drop table t1;  // 删除表t1\nvector>>>.table\n+------+\n| name |\n+------+\n| T2   |\n+------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加表索引",
      children: "添加表索引"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在vector>>>提示符下，通过\"create index idx_1 on t3(a);\"命令给该表对应字段，添加索引，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vector>>> create table t3(a int, b text);  // 仅在表内未添加数据的情况下才能创建索引。\nvector>>> create index idx_1 on t3(a);     // 给该表对应字段，添加索引为idx_1\nvector>>> .index\n+-------+\n| name  |\n+-------+\n| idx_1 |\n+-------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "插入数据",
      children: "插入数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在vector>>>提示符下，通过\"insert into t2 values(1,'xx'),(2,'yy');\"命令插入指定键值对，显示结果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "vector>>> insert into t2 values(1,'xx'),(2,'yy');\nvector>>> select * from t2;\n+----+----+\n| a  | b  |\n+----+----+\n| 1  | xx |\n| 2  | yy |\n+----+----+\nvector>>> create table t1(a int unique, b text);\nvector>>> insert into t1 values(1,'x'),(2,'y');\nvector>>> select * from t1;\n+----+----+\n| a  | b  |\n+----+----+\n| 1  | x  |\n| 2  | y  |\n+----+----+\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在vector>>>提示符下，通过以下对应命令插入多条数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 单条多行插入数据\nvector>>> insert into t7 values(1,'x'),\n(2,'y');\nvector>>> select * from t7;\n+----+---+\n| a  | b |\n+----+---+\n| 1  | x |\n| 2  | y |\n+----+---+\n// 单行多条插入数据\nvector>>> insert into t7 values(1,'x');insert into t7 values(2,'y');\nvector>>> select * from t7;\n+----+---+\n| a  | b |\n+----+---+\n| 1  | x |\n| 2  | y |\n+----+---+\n// 多行多条插入数据\nvector>>> insert into t7 values(1,'x'),\n(2,'y');\ninsert into t8 values(1,'xx'),\n(2,'yy');\nvector>>> select * from t7;\n+----+---+\n| a  | b |\n+----+---+\n| 1  | x |\n| 2  | y |\n+----+---+\nvector>>> select * from t8;\n+----+----+\n| a  | b  |\n+----+----+\n| 1  | xx |\n| 2  | yy |\n+----+----+\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询数据",
      children: "查询数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全表查询。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在vector>>>提示符下，通过\".mode print\"和\"select * from 表名;\"命令查询指定表所有内容，显示结果如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "vector>>> .mode print\nvector>>> select * from t1;\n[row-0]\na            = 1\nb            = x\n[row-1]\na            = 2\nb            = y\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过\".mode table\"和\"select * from 表名;\"命令查询指定表所有内容，显示结果如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "vector>>> .mode table\nvector>>> select * from t1;\n+----+---+\n| a  | b |\n+----+---+\n| 1  | x |\n| 2  | y |\n+----+---+\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在vector>>>提示符下，通过\"select * from 表名 where 筛选条件\"命令查询指定key的键值对，显示结果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "vector>>> select * from t1 where a =1;\n+----+---+\n| a  | b |\n+----+---+\n| 1  | x |\n+----+---+\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在vector>>>提示符下，通过.count命令列出所有表的记录总数，显示结果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "vector>>> .count\n+------------+--------------+\n| table_name | record_count |\n+------------+--------------+\n| T1         | 2            |\n| T2         | 2            |\n| T3         | 0            |\n+------------+--------------+\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "更新数据",
      children: "更新数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在vector>>>提示符下，通过\"update t1 set b = 'z' where a =3;\"命令更新键值对，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vector>>> select * from t1;\n+----+----+\n| a  | b  |\n+----+----+\n| 1  | x  |\n| 2  | y  |\n| 3  | xx |\n+----+----+\nvector>>> update t1 set b = 'z' where a =3;\nvector>>> select * from t1;\n+----+---+\n| a  | b |\n+----+---+\n| 1  | x |\n| 2  | y |\n| 3  | z |\n+----+---+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除数据",
      children: "删除数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在vector>>>提示符下，通过\"delete from t1 where b = 'z';\"命令删除表中指定键值对，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vector>>> select * from t1;\n+----+---+\n| a  | b |\n+----+---+\n| 1  | x |\n| 2  | y |\n| 3  | z |\n+----+---+\nvector>>> delete from t1 where b = 'z';// 删除t1表中的z\nvector>>> select * from t1;\n+----+---+\n| a  | b |\n+----+---+\n| 1  | x |\n| 2  | y |\n+----+---+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在vector>>>提示符下，可以使用 .q或者.quit命令退出数据库交互模式，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vector>>>.q\n$\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前工具支持模拟器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
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
129396(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
927508(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
102507(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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