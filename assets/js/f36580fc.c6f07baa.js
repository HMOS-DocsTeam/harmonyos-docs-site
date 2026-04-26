"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["878121"], {
524990(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_hilog_tool_hilog_tool_md_f36_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-hilog-tool-hilog-tool-md-f36.json
var site_docs_system_debug_optimize_debugging_commands_hilog_tool_hilog_tool_md_f36_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/hilog-tool/hilog-tool","title":"hilogtool","description":"使用场景","source":"@site/docs/system-debug-optimize/debugging-commands/hilog-tool/hilog-tool.md","sourceDirName":"system-debug-optimize/debugging-commands/hilog-tool","slug":"/system-debug-optimize/debugging-commands/hilog-tool/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hilog-tool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"hilogtool","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hilog-tool","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"hilog","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hilog/"},"next":{"title":"hidumper","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hidumper-tool/hidumper/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/hilog-tool/hilog-tool.md


const frontMatter = {
	title: 'hilogtool',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hilog-tool',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'hilogtool';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "使用指导",
  "id": "使用指导",
  "level": 2
}, {
  "value": "工具获取",
  "id": "工具获取",
  "level": 3
}, {
  "value": "环境配置",
  "id": "环境配置",
  "level": 3
}, {
  "value": "使用方法",
  "id": "使用方法",
  "level": 3
}, {
  "value": "常用解析命令示例",
  "id": "常用解析命令示例",
  "level": 2
}, {
  "value": "解析当前目录下所有的hilog文件（推荐）",
  "id": "解析当前目录下所有的hilog文件推荐",
  "level": 3
}, {
  "value": "解析指定目录下的hilog文件",
  "id": "解析指定目录下的hilog文件",
  "level": 3
}, {
  "value": "解析单个hilog文件",
  "id": "解析单个hilog文件",
  "level": 3
}, {
  "value": "自动化脚本",
  "id": "自动化脚本",
  "level": 2
}, {
  "value": "windows平台脚本",
  "id": "windows平台脚本",
  "level": 3
}, {
  "value": "mac平台脚本",
  "id": "mac平台脚本",
  "level": 3
}, {
  "value": "可能有影响的场景",
  "id": "可能有影响的场景",
  "level": 2
}, {
  "value": "自动化分析日志",
  "id": "自动化分析日志",
  "level": 3
}, {
  "value": "日志转发他人",
  "id": "日志转发他人",
  "level": 3
}, {
  "value": "错误码",
  "id": "错误码",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hilogtool",
        children: "hilogtool"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前hilog日志为编码后二进制形式保存的gz格式文件，开发者从设备/data/log/hilog路径下导出后无法直接解压查看，需要使用hilogtool工具进行解析，将转换为明文hilog日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(699963)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前机制下：kmsg日志不受影响，可直接查看；hilog日志，在shell窗口直接使用hilog命令在线查看日志，不受影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用指导",
      children: "使用指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "工具获取",
      children: "工具获取"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下载HarmonyOS SDK，hilogtool解析工具默认在对应平台的 hms/toolchains目录下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境配置",
      children: "环境配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows环境变量设置方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在此电脑 > 属性 > 高级系统设置 > 高级 > 环境变量 > Path > 编辑 中，将hilogtool.exe所在路径添加到 Path，环境变量配置完成后，请重启电脑，即可在cmd 窗口执行hilogtool命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "MacOS环境变量设置方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开终端工具，执行以下命令，根据输出结果分别执行不同命令。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "echo $SHELL\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果输出结果为/bin/bash，则执行以下命令，打开.bash_profile文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "vi ~/.bash_profile\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果输出结果为/bin/zsh，则执行以下命令，打开.zshrc文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "vi ~/.zshrc\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单击字母“i”，进入Insert模式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "输入以下内容，添加PATH信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export PATH=$PATH:/path/to/your/hilogtool\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑完成后，单击Esc键，退出编辑模式，然后输入“:wq”，单击Enter键保存。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行以下命令，使配置的环境变量生效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果步骤1打开的是.bash_profile文件，请执行如下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "source ~/.bash_profile\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果步骤1打开的是.zshrc文件，请执行如下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "source ~/.zshrc\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "环境变量配置完成后，重启电脑。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用方法",
      children: "使用方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hilogtool parse -i xxx -o xxx -d xxx"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hilogtool parse --input xxx --output xxx --dict xxx"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解析命令参数列表："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "举例"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看帮助使用文档。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hilogtool -h"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i/–-input inputDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于指定输入路径，会扫描该目录下所有的hilog流水日志文件并进行解析；  缺省时，为命令行当前所在路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解析指定目录(D:\\temp\\hilog)下的所有hilog文件：  hilogtool parse -i D:\\temp\\hilog  解析当前目录下的所有hilog文件：  hilogtool parse -i .\\"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i/–-input inputFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解析指定的单个hilog文件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解析指定的hilog文件:  hilogtool parse -i D:\\temp\\data\\log\\hilog.706.20230711-071816.gz  hilogtool parse -i .\\hilog.706.20230711-071816.gz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-o/–-output outputDir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于指定输出路径，即解析后的日志文件保存路径；  缺省时，为解析的hilog原日志文件所在路径。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解析当前目录下的日志文件到D:\\temp目录:  hilogtool parse -i .\\ -o D:\\temp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d/--dict dictFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于指定数据字典的路径；  缺省时，会在命令行当前所在路径下匹配最新的数据字典文件（格式：hilog_dict.20230908-142200.zip）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解析指定目录(D:\\temp\\hilog)下的所有hilog文件，并且指定使用该目录下的数据字典：  hilogtool parse -i D:\\temp\\hilog -d D:\\temp\\hilog\\hilog_dict.20230908-142200.zip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-v/--version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看当前版本号。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hilogtool -v"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(658974)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.数据字典文件在data/log/hilog目录下，格式为：hilog_dict.2024xxxx-xxxxxx.zip，是设备启动时自动生成的，在解析日志时需要这个文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若缺少数据字典，会导致部分日志解析失败；重启设备可以重新生成该数据字典。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.落盘的hilog日志文件默认格式为hilog.\\d{3}.\\d{8}-\\d{6}.gz$，若开发过程中使用了hilog -w start -f xxx 命令自定义了落盘文件名，可能导致日志无法被正常解析，需要升级hilogtool工具至1.0.0b版本及以上，才支持解析自定义文件名的hilog日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常用解析命令示例",
      children: "常用解析命令示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "解析当前目录下所有的hilog文件推荐",
      children: "解析当前目录下所有的hilog文件（推荐）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在当前日志所在目录，通过cmd进入shell窗口，在shell窗口直接执行hilogtool parse，即可进行解析操作，如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(48962)/* ["default"] */.A) + "",
        width: "1292",
        height: "432"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "解析指定目录下的hilog文件",
      children: "解析指定目录下的hilog文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hilogtool parse -i D:\\09-temp\\dict-test -d D:\\09-temp\\dict-test"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(156186)/* ["default"] */.A) + "",
        width: "1292",
        height: "450"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "解析单个hilog文件",
      children: "解析单个hilog文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hilogtool parse -i D:\\09-temp\\dict-test\\hilog.025.20231020-154659.gz -d D:\\09-temp\\dict-test"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(551704)/* ["default"] */.A) + "",
        width: "1292",
        height: "314"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自动化脚本",
      children: "自动化脚本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自动化调试脚本，将脚本与hilogtool工具放在同一目录下，执行get_hilog.bat，脚本会导出设备中的data/log/hilog日志，并且自动解析生成明文日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "windows平台脚本",
      children: "windows平台脚本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "windows平台 get_hilog.bat 脚本内容参考："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@set Ymd=%date:~0,4%_%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%%time:~6,2%\n@set Ymd=%Ymd: =0%\n@set Dir=LOG_%YMD%\nmd %Dir%\nhdc file recv /data/log/hilog/ .\\%Dir%\\\nhilogtool parse -i .\\%Dir% -d .\\%Dir%\npause\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "脚本运行结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(597859)/* ["default"] */.A) + "",
        width: "1303",
        height: "392"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mac平台脚本",
      children: "mac平台脚本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "mac平台脚本内容参考："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ymd=$(date \"+%Y_%m%d_%H%M%S\")\nDir=LOG_$Ymd\nmkdir $Dir\nhdc file recv /data/log/hilog/ ./$Dir/\n./hilogtool parse -i ./$Dir -d ./$Dir\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "可能有影响的场景",
      children: "可能有影响的场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自动化分析日志",
      children: "自动化分析日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分领域涉及到自动化分析/data/log/hilog目录下的明文日志文件，目前hilog轻量化后，日志以二进制保存，需要使用上述解析工具适配一下自动化反编译二进制日志动作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日志转发他人",
      children: "日志转发他人"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "直接从手机/data/log/hilog目录下recv出来的日志文件为二进制日志文件，直接发送给他人，无法正常查看，建议解析后再发送，或者将二进制日志文件与数据字典一同转发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "错误码",
      children: "错误码"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "处理方法"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码成功"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码失败，存在部分领域的日志和字典不匹配"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.只有部分日志解析失败，一般不影响开发自调试，可不用关注  2、若影响自调试，可参考下方常见问题，增量生成数据字典"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解析工具版本不匹配"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新hilogtool解析工具版本"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志是明文落盘的，不需要解析"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工具解析时，显示 there is no hilog dict zip in xxx, use -d to specify ，或者 open dict xxx fail, errno is: No such file or directory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析完的日志中，显示 OpenUuidFile fail, unknown log, uuid is: xxxxxx"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析日志时，未找到对应的数据字典导致的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1、解析命令使用错误，具体参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%B8%B8%E7%94%A8%E8%A7%A3%E6%9E%90%E5%91%BD%E4%BB%A4%E7%A4%BA%E4%BE%8B",
        children: "常用解析命令示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、开发本地替换bin/so调试的场景，需要触发生成新的数据字典，才能解析，以下触发命令三选一即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）使用增量生成数据字典命令：hilog -d xxx"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如推送hilog相关测试程序bin文件hilogTest到 /system/bin/下面，想查看hilogTest打印的日志，需要执行以下命令，增量生成hilogTest的数据字典："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hdc shell hilog -d /system/bin/hilogTest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据字典生成成功后hilogTest则可以正常打印日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）重启hilogd：service_control stop hilogd && service_control start hilogd"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（3）重启设备；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、数据字典被删掉了，检查导出的日志中是否存在hilog_dict.2024xxxx-xxxxxx.zip格式的数据字典文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若不存在，则大概率是被 rm -rf data/log/hilog/* 命令删除掉了，需要重启设备生成新的数据字典，然后解析。"
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
48962(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798854-4f11ff7cccedd4de2020ad3bfe28f5ae.png");

},
156186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438549-07a7faf3ed91ad261cded3c0892f7d7b.png");

},
699963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
658974(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
597859(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478505-ab31ad55da7c12d342716c5c91493091.png");

},
551704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958504-5281bb0ca1cfaa098bea415b98fed642.png");

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