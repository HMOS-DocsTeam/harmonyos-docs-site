"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["428076"], {
439669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_arkdata_debug_tool_preferences_debug_tool_preferences_debug_tool_md_f9a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-arkdata-debug-tool-preferences-debug-tool-preferences-debug-tool-md-f9a.json
var site_docs_arkdata_arkdata_debug_tool_preferences_debug_tool_preferences_debug_tool_md_f9a_namespaceObject = JSON.parse('{"id":"arkdata/arkdata-debug-tool/preferences-debug-tool/preferences-debug-tool","title":"preferences数据库调试工具指导","description":"当前开发者在使用preferences数据库进行开发调试和定位问题时，无法查看数据库文件中的内容信息，如元数据和用户数据等。","source":"@site/docs/arkdata/arkdata-debug-tool/preferences-debug-tool/preferences-debug-tool.md","sourceDirName":"arkdata/arkdata-debug-tool/preferences-debug-tool","slug":"/arkdata/arkdata-debug-tool/preferences-debug-tool/","permalink":"/harmonyos-docs-site/arkdata/arkdata-debug-tool/preferences-debug-tool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"preferences数据库调试工具指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preferences-debug-tool","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用数据向量化 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/aip-data-intelligence-embedding/"},"next":{"title":"vector-store数据库调试工具指导","permalink":"/harmonyos-docs-site/arkdata/arkdata-debug-tool/vector-store-debug-tool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/arkdata-debug-tool/preferences-debug-tool/preferences-debug-tool.md


const frontMatter = {
	title: 'preferences数据库调试工具指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preferences-debug-tool',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'preferences数据库调试工具指导';

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
  "value": "插入数据",
  "id": "插入数据",
  "level": 3
}, {
  "value": "全表查询",
  "id": "全表查询",
  "level": 3
}, {
  "value": "单值查询",
  "id": "单值查询",
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
        id: "preferences数据库调试工具指导",
        children: "preferences数据库调试工具指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前开发者在使用preferences数据库进行开发调试和定位问题时，无法查看数据库文件中的内容信息，如元数据和用户数据等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了提升开发者的工作效率，数据库调试工具支持开发者查看设备中的preference_kv数据库和preference_xml数据库内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其中，preference_kv数据库对应的首选项存储模式为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/app-data-persistence/data-persistence-by-preferences#gskv%E5%AD%98%E5%82%A8",
        children: "GSKV存储模式"
      }), "；preference_xml数据库对应的首选项存储模式为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/app-data-persistence/data-persistence-by-preferences#xml%E5%AD%98%E5%82%A8",
        children: "XML存储模式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(691118)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从HarmonyOS 6.0.0版本开始，支持使用preferences数据库调试工具。"
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
          children: "在使用preferences调试工具之前，必须要先切换至目标调试应用路径下，再使用arkdata命令进入到preferences调试工具（需要使用arkdata配置相关参数打开preferences数据库，开库成功后才能使用preferences工具进行数据的增删改查）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "arkdata命令支持的参数如下表所示："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "-p"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "整型"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "数据库pagesize，数据库开库配置参数，代表存储的单页大小，默认值32，可取值为是4、8、16、32、64。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "-c"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "整型"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "数据库cacheSize，数据库开库配置参数，即bufferPoolSize，代表内存缓存池大小， 默认值2048，可取值为2048和4096。"
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
            src: (__webpack_require__(118759)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "preferences数据库调试工具-p和-c两个参数无效，数据库pagesize和cachesize，输入限定范围内的值时，直接使用默认值，默认值为32和2048，输入限定范围外的值时会报错。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "C:\\Users\\*****>hdc shell\n$ cd /data/app/el1/100/base/com.test.myapplication   // 进入到目标调试应用路径下(当前路径为示例,开发者需自己获取调试应用路径)\n$ arkdata -t preference_kv                           // 缺省-f, 没有指定数据库文件，默认新建一个名字为arkdata的数据库，路径在当前工作目录的data/preference_kv目录下.\nEnter \".help\" for usage hints.\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在非调试应用路径下，执行数据库开库操作时，缺少-f默认创建文件夹，在当前目录下创建data/preference_kv文件夹层级失败，具体报错如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "C:\\Users\\*****>hdc shell\n$ arkdata -t preference_kv\n[unsucc]Failed to create directory ./data/preference_kv : Permission denied\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在非调试应用路径下，执行数据库开库操作时，指定路径，db文件创建失败，具体报错如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "C:\\Users\\*****>hdc shell\n$ arkdata -t preference_kv -f ./preference_kv\n[GMDB SERVER] [GMERR-1013000] multi-process init init unsucc!\n[ERROR] open db fail, ret = -5000.\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "preference_xml和preference_kv数据库同名不能交叉读写操作，不能混用，preference_kv打开preference_xml数据库会报错，preference_xml打开preference_kv数据库会损坏，具体报错如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ ls ./data/preference_kv\narkdata       arkdata.ctrl.dwr  arkdata.redo  arkdata.undo\narkdata.ctrl  arkdata.map       arkdata.safe\n$ ls ./data/preference_xml/\narkdata  arkdata.lock\n$ arkdata -t preference_kv -f ./data/preference_xml/arkdata\n[GMDB SERVER] [GMERR-1019003] open-mode check init unsucc!\n[unsucc] open db fail, ret = -43000\n$ arkdata -t preference_xml -f ./data/preference_kv/arkdata\nEnter \".help\" for usage hints.\npreference_xml>>> /data/temp/./data/preference_kv/arkdata:1: parser error : Start tag expected, '<' not found\n^\n"
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
      id: "命令列表",
      children: "命令列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "preference_kv和preference_xml调试工具支持的命令如下表所示："
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
            children: "get key:{key name}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定的key查询数据库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "put key:{key name}  value:{value}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "插入指定的键值对到数据库或者更新键值对。输入需要两行，第一行输入key，使用“key:”作为关键字，第二行输入value，使用“value:”作为关键字。  例如：put key:123  value:345"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delete key:{key name}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定键值对。  例如：delete key:123"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除表内所有内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全表查询。  **说明：**preference_xml支持全表查询，preference_kv不支持全表查询。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数字默认为int类型，若以引号赋予数字值，将识别为string类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "命令行输入数据仅支持string、number和boolean类型，其他类型将被转换为string类型。"
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
      children: "打开preference_kv或者preference_xml数据库后，使用帮助命令可以查看其支持的命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "preference_kv>>> .help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "preference_xml>>> .help\n"
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
          children: "必须要先切换至目标调试应用路径下，再进入存在db文件的路径下，执行\"arkdata -t preference_kv -f perfdata\"或者\"arkdata -t preference_xml -f perfdata\"新建一个数据库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "C:\\Users\\*****>hdc shell\n$ cd /data/app/el1/100/database/com.test.myapplication   // 进入到目标调试应用路径下.(当前路径为示例,开发者需自己获取调试应用路径)\n$ cd entry/rdb/                                          // 需要进入到有db文件的路径下,保证有读写权限,才能有权限创建新数据库.\n$ arkdata -t preference_kv\nEnter \".help\" for usage hints.\npreference_kv>>>.q\n$ arkdata -t preference_xml\nEnter \".help\" for usage hints.\npreference_xml>>> put key:1                               // preference_xml需要put一条数据,内部才会触发创建数据库文件.\n ...>>> value:1\npreference_xml>>> .q\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建新的数据库时，系统会自动生成以下类型的文件， 标签debug_hap_data_file代表属于调试应用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ ls -lZ ./data/preference_kv/\ntotal 148\n-rw-rw---- 1 shell shell u:object_r:debug_hap_data_file:s0  73728 2025-08-12 20:31 arkdata\n-rw-rw---- 1 shell shell u:object_r:debug_hap_data_file:s0   4112 2025-08-12 20:31 arkdata.ctrl\n-rw-rw---- 1 shell shell u:object_r:debug_hap_data_file:s0  12304 2025-08-12 20:31 arkdata.ctrl.dwr\n-rw-rw---- 1 shell shell u:object_r:debug_hap_data_file:s0      0 2025-08-12 20:31 arkdata.map\n-rw-rw---- 1 shell shell u:object_r:debug_hap_data_file:s0    512 2025-08-12 20:31 arkdata.redo\n-rw-rw---- 1 shell shell u:object_r:debug_hap_data_file:s0      8 2025-08-12 20:31 arkdata.safe\n-rw-rw---- 1 shell shell u:object_r:debug_hap_data_file:s0  16384 2025-08-12 20:31 arkdata.undo\n\n$ ls -lZ ./data/preference_xml/\ntotal 12\n-rw-rw---- 1 root ddms u:object_r:debug_hap_data_file:s0  105 2025-09-05 15:11 arkdata\n-rw-rw---- 1 root ddms u:object_r:debug_hap_data_file:s0    0 2025-09-05 15:11 arkdata.lock\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开已有数据库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ arkdata -t preference_kv -f ./data/preference_kv/arkdata\nEnter \".help\" for usage hints.\npreference_kv>>>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "插入数据",
      children: "插入数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在preference_kv>>>提示符下，可通过put命令插入指定键值对，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "preference_kv>>> put key:name\n ...>>> value:123\npreference_kv>>> put key:id_name\n ...>>> value:'123'\npreference_kv>>> get key:name   // 不带引号结果\ntype int: 123\npreference_kv>>> get key:id_name   // 带引号结果\ntype string: 123\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "全表查询",
      children: "全表查询"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在preference_xml>>>提示符下，可通过scan命令全表查询，显示结果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "preference_xml>>> scan\n==========================PREFERENCES XML INFO============================\nDataCount:7\n==========================PREFERENCES XML DATA============================\n==========================Data Index:1==========================\nkey:\n1\nvalue:\ntype int: 1\n==========================Data Index:2==========================\nkey:\n2\nvalue:\ntype int: 2\n==========================Data Index:3==========================\nkey:\n3\nvalue:\ntype int: 3\n==========================Data Index:4==========================\nkey:\n4\nvalue:\ntype int: 4\n==========================Data Index:5==========================\nkey:\n5\nvalue:\ntype int: 5\nPress 'q' to quit, 'n' to continue: n\n==========================Data Index:6==========================\nkey:\n6\nvalue:\ntype int: 6\n==========================Data Index:7==========================\nkey:\n7\nvalue:\ntype int: 7\npreference_xml>>>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "preference_kv不支持全表扫描，显示结果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "preference_kv>>> scan\n[unsucc] Unable to parse command.\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(408372)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当显示数据条目达到5条时，为提升阅读体验，系统将提示用户是否继续显示或退出。输入q键退出显示，输入n继续显示结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "单值查询",
      children: "单值查询"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在preference_kv>>>提示符下，可通过get命令指定key查询指定键值对，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "preference_kv>>> get key:name\n No data for key = name  // 表示没有值\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "带引号与不带引号查询的值不同，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "preference_kv>>> put key:name\n ...>>> value:123\npreference_kv>>> put key:id_name\n ...>>> value:'123'\npreference_kv>>> put key:name\n ...>>> value:true\npreference_kv>>> put key:name1\n ...>>> value:'true'\npreference_kv>>> get key:name      // 数字不带引号结果\ntype int: 123\npreference_kv>>> get key:id_name   // 数字带引号结果\ntype string: 123\npreference_kv>>> get key:name      // true不带引号结果\ntype bool: 1\npreference_kv>>> get key:name1     // true带引号结果\ntype string: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "更新数据",
      children: "更新数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在preference_kv>>>提示符下，当key值存在时， 可通过put命令更新键值对，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "preference_kv>>> put key:name\n ...>>> value:x\npreference_kv>>> get key:name\ntype string: x\npreference_kv>>> put key:name\n ...>>> value:y\npreference_kv>>> get key:name\ntype string: y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "删除数据",
      children: "删除数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在preference_kv>>>提示符下，可通过delete命令删除指定键值对，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "preference_kv>>> get key:name\ntype string: y\npreference_kv>>> delete key:name\npreference_kv>>> get key:name\n No data for key = key:name\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "delete命令不指定键值对全表删除，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "preference_kv>>> get key:name\ntype int: xx\npreference_kv>>> get key:id_name\ntype int: yy\npreference_kv>>> delete\npreference_kv>>> get key:name\n No data for key = name\npreference_kv>>> get key:id_name\n No data for key = id_name\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在preference_kv>>>提示符下，可以使用 .q或者.quit命令退出数据库交互模式，显示结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "preference_kv>>>.q\n$\n"
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
691118(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
118759(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
408372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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