"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["775404"], {
763514(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_hvigor_commandline_ide_hvigor_commandline_md_702_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-hvigor-commandline-ide-hvigor-commandline-md-702.json
var site_docs_ide_hvigor_commandline_ide_hvigor_commandline_md_702_namespaceObject = JSON.parse('{"id":"ide-hvigor-commandline/ide-hvigor-commandline","title":"命令行构建工具（hvigorw）","description":"hvigorw作为Hvigor的wrapper包装工具，支持自动安装Hvigor构建工具和相关插件依赖，以及执行Hvigor构建命令。","source":"@site/docs/ide-hvigor-commandline/ide-hvigor-commandline.md","sourceDirName":"ide-hvigor-commandline","slug":"/ide-hvigor-commandline/","permalink":"/harmonyos-docs-site/ide-hvigor-commandline/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"命令行构建工具（hvigorw）","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-commandline","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"堆栈解析工具（hstack）","permalink":"/harmonyos-docs-site/ide-command-line-hstack/"},"next":{"title":"系统平台要求","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-system-platform/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-hvigor-commandline/ide-hvigor-commandline.md


const frontMatter = {
	title: '命令行构建工具（hvigorw）',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-commandline',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = '命令行构建工具（hvigorw）';

const assets = {

};



const toc = [{
  "value": "命令行使用方式",
  "id": "命令行使用方式",
  "level": 2
}, {
  "value": "常用命令",
  "id": "常用命令",
  "level": 2
}, {
  "value": "查询",
  "id": "查询",
  "level": 3
}, {
  "value": "编译构建",
  "id": "编译构建",
  "level": 3
}, {
  "value": "日志",
  "id": "日志",
  "level": 3
}, {
  "value": "可视化",
  "id": "可视化",
  "level": 3
}, {
  "value": "daemon",
  "id": "daemon",
  "level": 3
}, {
  "value": "性能/内存",
  "id": "性能内存",
  "level": 3
}, {
  "value": "公共命令",
  "id": "公共命令",
  "level": 3
}, {
  "value": "其他命令",
  "id": "其他命令",
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
    string: "string",
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
        id: "命令行构建工具hvigorw",
        children: "命令行构建工具（hvigorw）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hvigorw作为Hvigor的wrapper包装工具，支持自动安装Hvigor构建工具和相关插件依赖，以及执行Hvigor构建命令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["执行命令前，需要先配置JDK，配置Node.js、hvigor等环境变量，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-command-line-building-app",
        children: "搭建流水线"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令行使用方式",
      children: "命令行使用方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hvigorw命令行格式为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hvigorw [taskNames...] <options>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其中taskNames是任务，可同时执行多个任务，options是可选参数，具体的任务和可选参数请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section16300629103",
        children: "常用命令"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(573877)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从hvigorw 5.18.4版本开始，以下命令支持在任意路径下执行，其他hvigorw命令需要在工程根目录下执行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hvigorw -v"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hvigorw --version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hvigorw version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hvigorw -h"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hvigorw --help"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常用命令",
      children: "常用命令"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["常见的任务和参数如下，更多任务请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor/ide-hvigor-task-process#section196919100414",
        children: "任务详细说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询",
      children: "查询"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h, --help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印hvigorw的命令帮助信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-v, --version, version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印hvigorw版本信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编译构建",
      children: "编译构建"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "任务"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清理构建产物build目录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "collectCoverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于打点数据生成覆盖率统计报表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assembleHap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建Hap应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assembleApp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建App应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assembleHsp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建Hsp包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assembleHar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建Har包。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译构建命令行常用扩展参数："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p buildMode={debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "release}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p debuggable=true/false"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该配置会覆盖构建模式中对应的buildOption中的debuggable配置。  关于debuggable的合并优先级，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section1727865610255",
              children: "合并编译选项规则"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p product={ProductName}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定product进行编译, 编译product下配置的module target。  缺省时：默认为default。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p module={ModuleName}@{TargetName}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定模块及target进行编译，可指定多个相同类型的模块进行编译，以逗号隔开；TargetName不指定时默认为default。  限制：此参数需要与--mode module参数搭配使用。  缺省时：执行AssembleHap任务会编译工程下所有模块，默认指定target为default。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p ohos-test-coverage={true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p coverage={true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p parameterFile=param.json/json5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置oh-package.json5文件的参数配置文件，其中\"param\"可自行修改为对应配置文件名称。详细使用请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-ohpm-cli/ide-oh-package-json5#section122411462820",
              children: "parameterFile"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p buildVersion=1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置构建版本号为1，详细使用请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "app.json5的buildVersion"
            }), "。  该参数从hvigorw 6.23.3版本开始支持。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试相关的命令行："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令行"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hvigorw onDeviceTest -p module={moduleName} -p coverage={true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false} -p scope={suiteName}#{methodName} -p ohos-debug-asan={true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hvigorw test -p module={moduleName} -p coverage={true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false} -p scope={suiteName}#{methodName}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志",
      children: "日志"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e, --error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置hvigor的日志级别为error。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-w, --warn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Hvigor的日志级别为warn。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i, --info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Hvigor的日志级别为info。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d, --debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置Hvigor的日志级别为debug。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--stacktrace，--no-stacktrace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hvigor默认关闭打印所有异常的堆栈信息，如需开启在命令行后添加--stacktrace。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可视化",
      children: "可视化"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--analyze=normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在DevEco Studio中开启Build Analyzer构建分析，设置为普通模式，通过简单打点数据进行分析。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--config properties.hvigor.analyzeHtml=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在工程的.hvigor/report目录下生成构建可视化html文件，该文件可直接在浏览器中打开。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--analyze=false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不启用Build Analyzer构建分析。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--analyze=advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用Build Analyzer构建分析，并设置为进阶模式，通过更加详细的打点数据进行分析。如果需要更详细的任务耗时数据，请选择该模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--analyze=ultrafine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用Build Analyzer构建分析，并设置为超精细化模式，与advanced模式相比，在ArkTS编译阶段记录更详细的打点数据，但开启后可能导致编译构建时间更长。  从hvigorw 6.0.0版本开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--analyze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同--analyze=normal命令。  从hvigorw 4.3.0开始废弃，请使用--analyze=normal替换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--no-analyze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同--analyze=false命令。  从hvigorw 4.3.0开始废弃，请使用--analyze=false替换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--verbose-analyze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同--analyze=advanced命令。  从hvigorw 4.3.0开始废弃，请使用--analyze=advanced替换。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "daemon",
      children: "daemon"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--daemon"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-optimized/ide-hvigor-daemon",
              children: "守护进程"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--no-daemon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hvigor默认启用守护进程，如需关闭，可在命令行后添加该选项。  命令行模式下推荐使用此参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--stop-daemon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭当前工程的守护进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--stop-daemon-all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭所有工程的守护进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--status-daemon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询当前环境中所有的Hvigor守护进程信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--max-old-space-size=12345"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置守护进程最大的老生代内存大小为12345MB。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--max-semi-space-size=32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置守护进程新生代内存最大的半空间大小为32MB。  该参数从hvigorw 5.18.4版本开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "性能内存",
      children: "性能/内存"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--parallel, --no-parallel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Hvigor默认开启", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-optimized/ide-hvigor-improve-performance",
              children: "并行构建"
            }), "能力，如需关闭在命令行后添加--no-parallel。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--incremental, --no-incremental"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Hvigor默认开启", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-optimized/ide-hvigor-incremental-build",
              children: "增量构建"
            }), "能力，如需关闭在命令行后添加--no-incremental。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--optimization-strategy=performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置构建模式为性能优先模式，可加快构建速度，但会占用更多内存。  从hvigorw 5.19.2版本开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--optimization-strategy=memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置构建模式为内存优先模式，可以减少编译内存占用，默认使用memory。  从hvigorw 5.19.2版本开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "公共命令",
      children: "公共命令"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "任务"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印工程各模块包含的任务信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "taskTree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印工程各模块的任务依赖关系信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "prune"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除30天内未使用的Hvigor缓存文件并从pnpm存储中删除未引用的包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印工程级或模块级build-profile.json5中的配置信息，包含product、module、target、buildMode、buildOption，以树状结构输出。  该功能从hvigorw 5.18.4版本开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "buildInfo命令扩展参数："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p module={ModuleName}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定需要打印配置信息的模块名，不指定时会打印工程级的配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p buildOption"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["命令包含此参数时会打印buildOption配置，不含此参数时将不会展示buildOption配置，输出的buildOption优先级请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section1727865610255",
              children: "合并编译选项规则"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p json"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将输出结果以json格式展示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "其他命令",
      children: "其他命令"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s,--sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理并持久化Hvigor部分工程信息到工程./hvigor/outputs/sync/output.json中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m,--mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在对应的目录执行相应的task，例hvigorw clean -m project在工程目录下执行build目录清理（即清理工程级别的build文件夹）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--enable-build-script-type-check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启工程中hvigorfile.ts的类型检查，该字段已废弃，请使用--type-check替换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--type-check, --no-type-check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hvigor默认关闭工程中hvigorfile.ts的类型检查，如需开启，可在命令行后添加--type-check。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--no-pnpm-frozen-lockfile，--pnpm-frozen-lockfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hvigor默认不忽略pnpm-lock.yaml文件，如需忽略，可在命令行后添加--pnpm-frozen-lockfile。  忽略pnpm-lock.yaml文件，按照hvigor-config.json5的配置安装Hvigor插件的依赖（如果不忽略pnpm-lock.yaml文件，在使用Hvigor 2.0.0及以上版本的CI场景下安装Hvigor插件依赖时将报错）。  说明：  该命令在4.1 Release及以上版本中已废弃。在CI场景中将自动配置，无需开发者手动配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--config, -c"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定hvigor-config.json5配置文件中的参数。  当前仅支持设置properties里的参数，具体支持的参数请查看", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration-file/ide-hvigor-set-options",
              children: "hvigor-config.json5文件"
            }), "中properties支持的参数。  --config properties.key=value 同 -c properties.key=value"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--watch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启观察模式，主要用于预览和热加载场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--generate-build-profile, --no-generate-build-profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已废弃。生成BuildProfile.ets文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["--node-home ", (0,jsx_runtime.jsx)(_components.string, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定nodejs路径。"
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
573877(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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