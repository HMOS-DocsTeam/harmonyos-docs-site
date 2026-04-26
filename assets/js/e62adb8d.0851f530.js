"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["5080"], {
562210(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_hilog_hilog_md_e62_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-hilog-hilog-md-e62.json
var site_docs_system_debug_optimize_debugging_commands_hilog_hilog_md_e62_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/hilog/hilog","title":"hilog","description":"HiLog日志系统，提供给系统框架、服务、以及应用，用于打印日志，记录用户操作、系统运行状态等。开发者可以通过hilog命令行查询相关日志信息。","source":"@site/docs/system-debug-optimize/debugging-commands/hilog/hilog.md","sourceDirName":"system-debug-optimize/debugging-commands/hilog","slug":"/system-debug-optimize/debugging-commands/hilog/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hilog/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"hilog","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hilog","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"network-cfg工具","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/network-cfg/"},"next":{"title":"hilogtool","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hilog-tool/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/hilog/hilog.md


const frontMatter = {
	title: 'hilog',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hilog',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'hilog';

const assets = {

};



const toc = [{
  "value": "环境要求",
  "id": "环境要求",
  "level": 2
}, {
  "value": "hilog概述",
  "id": "hilog概述",
  "level": 2
}, {
  "value": "hilog日志生成",
  "id": "hilog日志生成",
  "level": 3
}, {
  "value": "hilog日志查看",
  "id": "hilog日志查看",
  "level": 3
}, {
  "value": "hilog日志格式说明",
  "id": "hilog日志格式说明",
  "level": 3
}, {
  "value": "查看log版本信息",
  "id": "查看log版本信息",
  "level": 3
}, {
  "value": "命令行说明",
  "id": "命令行说明",
  "level": 2
}, {
  "value": "查看帮助命令",
  "id": "查看帮助命令",
  "level": 2
}, {
  "value": "<strong><strong>非阻塞读日志</strong></strong>",
  "id": "非阻塞读日志",
  "level": 2
}, {
  "value": "<strong><strong>查看指定级别日志</strong></strong>",
  "id": "查看指定级别日志",
  "level": 2
}, {
  "value": "<strong><strong>查看指定类型日志</strong></strong>",
  "id": "查看指定类型日志",
  "level": 2
}, {
  "value": "<strong><strong>查看指定domain日志</strong></strong>",
  "id": "查看指定domain日志",
  "level": 2
}, {
  "value": "<strong><strong>查看指定TAG日志</strong></strong>",
  "id": "查看指定tag日志",
  "level": 2
}, {
  "value": "<strong><strong>查看缓冲区前n行日志</strong></strong>",
  "id": "查看缓冲区前n行日志",
  "level": 2
}, {
  "value": "<strong><strong>查看缓冲区后n行日志</strong></strong>",
  "id": "查看缓冲区后n行日志",
  "level": 2
}, {
  "value": "<strong><strong>查看指定进程日志</strong></strong>",
  "id": "查看指定进程日志",
  "level": 2
}, {
  "value": "<strong><strong>查看符合正则匹配关键字的日志</strong></strong>",
  "id": "查看符合正则匹配关键字的日志",
  "level": 2
}, {
  "value": "<strong><strong>查看不同显示格式的日志</strong></strong>",
  "id": "查看不同显示格式的日志",
  "level": 2
}, {
  "value": "查看和设置落盘任务",
  "id": "查看和设置落盘任务",
  "level": 2
}, {
  "value": "查看和设置日志级别",
  "id": "查看和设置日志级别",
  "level": 2
}, {
  "value": "其他常用命令",
  "id": "其他常用命令",
  "level": 2
}, {
  "value": "查看日志缓冲区大小",
  "id": "查看日志缓冲区大小",
  "level": 3
}, {
  "value": "修改日志缓冲区大小",
  "id": "修改日志缓冲区大小",
  "level": 3
}, {
  "value": "清除缓冲区日志",
  "id": "清除缓冲区日志",
  "level": 3
}, {
  "value": "内核日志读取开关控制",
  "id": "内核日志读取开关控制",
  "level": 3
}, {
  "value": "查询统计信息",
  "id": "查询统计信息",
  "level": 3
}, {
  "value": "清除统计信息",
  "id": "清除统计信息",
  "level": 3
}, {
  "value": "进程超限开关",
  "id": "进程超限开关",
  "level": 3
}, {
  "value": "domain超限开关",
  "id": "domain超限开关",
  "level": 3
}, {
  "value": "hilog超限机制介绍",
  "id": "hilog超限机制介绍",
  "level": 2
}, {
  "value": "应用日志",
  "id": "应用日志",
  "level": 3
}, {
  "value": "系统日志",
  "id": "系统日志",
  "level": 3
}, {
  "value": "日志丢失处理方法",
  "id": "日志丢失处理方法",
  "level": 2
}, {
  "value": "LOGLIMIT",
  "id": "loglimit",
  "level": 3
}, {
  "value": "Slow reader missed",
  "id": "slow-reader-missed",
  "level": 3
}, {
  "value": "write socket failed",
  "id": "write-socket-failed",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    algorithm: "algorithm",
    code: "code",
    control: "control",
    "control-type": "control-type",
    domain: "domain",
    expr: "expr",
    filename: "filename",
    format: "format",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    jobid: "jobid",
    length: "length",
    level: "level",
    li: "li",
    loglevel: "loglevel",
    n: "n",
    number: "number",
    p: "p",
    path: "path",
    pid: "pid",
    pre: "pre",
    size: "size",
    strong: "strong",
    table: "table",
    tag: "tag",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    type: "type",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, _component0 = _components["control-type"];
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hilog",
        children: "hilog"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiLog日志系统，提供给系统框架、服务、以及应用，用于打印日志，记录用户操作、系统运行状态等。开发者可以通过hilog命令行查询相关日志信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据hdc命令行工具指导，完成", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hdc#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
          children: "环境准备"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保设备已正常连接，并执行hdc shell。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hilog概述",
      children: "hilog概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hilog日志生成",
      children: "hilog日志生成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "业务代码中，如果调用了HiLog接口，那么业务运行时就会生成对应的hilog日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hilog日志查看",
      children: "hilog日志查看"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "在线查看"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用hdc shell hilog命令在线查看日志。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用DevEco Studio工具在线查看日志，参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-log-and-fault-analysis/ide-setup-hilog",
          children: "日志分析"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看落盘的文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%9F%A5%E7%9C%8Blog%E7%89%88%E6%9C%AC%E4%BF%A1%E6%81%AF",
          children: "log版本"
        }), "：hilog日志默认开启落盘，不同产品之间落盘数量可能存在差异，具体可以使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%9F%A5%E7%9C%8B%E5%92%8C%E8%AE%BE%E7%BD%AE%E8%90%BD%E7%9B%98%E4%BB%BB%E5%8A%A1",
          children: "查看和设置落盘任务"
        }), "命令进行查询。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%9F%A5%E7%9C%8Blog%E7%89%88%E6%9C%AC%E4%BF%A1%E6%81%AF",
          children: "nolog版本"
        }), "：hilog日志默认不落盘，需要手动开启落盘，参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%9F%A5%E7%9C%8B%E5%92%8C%E8%AE%BE%E7%BD%AE%E8%90%BD%E7%9B%98%E4%BB%BB%E5%8A%A1",
          children: "查看和设置落盘任务"
        }), "；设备打开开发者模式后自动开启落盘。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["日志保存位置：设备data/log/hilog目录下，可以导出日志进行查看。导出及解析工具参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hilog-tool",
          children: "hilogtool"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hilog日志格式说明",
      children: "hilog日志格式说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "第一列"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "第二列"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "第三列"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "第四列"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "第五列"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "第六列"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "第七列"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "日期"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间戳"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志级别"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "domainID/进程名/日志tag:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志内容"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "04-19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17:02:14.735"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5394"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5394"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A03200/test_server/testTag:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "this is a info level hilog"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(813978)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["日志级别：I表示Info级别，其余级别参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-log-h/capi-log-h#loglevel",
        children: "日志等级"
      }), "首字母。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "domainID：A03200中A表示应用日志（LOG_APP），3200表示domainID为0x3200，domainID具体定义详见接口指导。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进程名：最大长度为30字节，超出后会从开头开始截断，保留尾部完整内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日志tag：最大长度为31字节，超出后会从末尾开始截断，保留前部完整内容，不建议使用中文字符，可能出现乱码或者对齐问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看log版本信息",
      children: "查看log版本信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备中， 点击 “设置”->搜索关键字“关于本机”->“软件版本”进行查看，log版本会以“log”结尾。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如：BRA-AL00 5.0.0.36(xxxlog)是log版本，BRA-AL00 5.0.0.36(xxxR4P1)是nolog版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令行说明",
      children: "命令行说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "短选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "长选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阻塞读日志，不退出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--exit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非阻塞读日志，读完退出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.n, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只显示前<n>行日志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--tail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.n, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只显示后<n>行日志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.type, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看指定类型的日志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看应用日志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看系统日志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看启动日志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kmsg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看内核日志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "only_prerelease"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看仅在系统release版本前打印的日志，应用开发者无需关注。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.level, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定级别的日志，示例：-L D/I/W/E/F。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.domain, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定domain。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.tag, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定tag。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.pid, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识不同的pid。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--regex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.expr, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只打印日志消息与<expr>匹配的行，其中<expr>是一个正则表达式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.format, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示格式控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "color/colour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不同级别显示不同颜色，缺省时按照黑白颜色模式处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示本地时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epoch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示相对1970时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "monotonic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示相对启动时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "msec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示毫秒精度时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "usec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示微秒精度时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nsec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示纳秒精度时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "year"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示将年份添加到显示的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示将本地时区添加到显示的时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志换行显示时，新行不增加时间戳等前缀。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示所有数据字段，用空格分隔信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除buffer日志，配合-t指定某一类型使用，默认app和core。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-g"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询buffer的大小，配合-t指定某一类型使用，默认app和core。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--buffer-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.size, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指定<type>日志类型缓冲区的大小，配合-t指定某一类型使用，默认app和core， 可使用B/K/M为单位，范围为64K-16M。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--statistics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询统计信息，需配合-t或-D使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除统计信息，需配合-t或-D使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.control, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "落盘任务控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "落盘任务查询。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "落盘任务开始，命令行参数为文件名、单文件大小、落盘算法、rotate文件数目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "落盘任务停止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "refresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刷新缓冲区的日志到落盘文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除已经落盘的日志文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--filename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.filename, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置落盘的文件名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-l"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.length, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置落盘的文件大小，需要大于等于64K。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.number, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置落盘文件的个数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.algorithm, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "落盘方式控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无压缩方式落盘。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zlib"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zlib压缩算法落盘，落盘文件为.gz。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-j"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--jobid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.jobid, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置落盘任务的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<on/off>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel日志读取开关控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "on"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开读取kernel日志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭读取kernel日志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_component0, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超限缺省配额开关控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pidon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开进程超限管控开关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pidoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭进程超限管控开关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "domainon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开domain超限管控开关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "domainoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭domain超限管控开关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "domainverifyon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启domain白名单校验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "domainverifyoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭domain白名单校验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--baselevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.loglevel, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置可打印日志的最低等级：D(DEBUG)/I(INFO)/W(WARN)/E(ERROR)/F(FATAL)。可以和-D、-T结合使用，设置指定日志可打印的最低等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--persist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置日志级别设置命令持久化（重启设置不会丢失）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "--dictionary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.path, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扫描elf文件生成对应的数据字典。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看帮助命令",
      children: "查看帮助命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -h\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " $ hilog -h\n Usage:\n -h --help\n   Show all help information.\n   Show single help information with option:\n   query/clear/buffer/stats/persist/private/kmsg/flowcontrol/baselevel/domain/combo\n Querying logs options:\n   No option performs a blocking read and keeps printing.\n   -x --exit\n     Performs a non-blocking read and exits when all logs in buffer are printed.\n   -a <n>, --head=<n>\n     Show n lines logs on head of buffer.\n   -z <n>, --tail=<n>\n     Show n lines logs on tail of buffer.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "非阻塞读日志",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "非阻塞读日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -x\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   $ hilog -x\n   11-15 15:51:02.087  2823  2823 I A01B05/com.ohos.sceneboard/AOD: AodClockFullScreen --> timeTextLineHeight:313.3333333333333 clockMarginTop:99\n   11-15 15:51:02.087  2823  2823 I A01B05/com.ohos.sceneboard/AOD: AodClockFullScreen --> timeFontSize:114.48717948717947\n   11-15 15:51:02.090  2823  2823 I A01B05/com.ohos.sceneboard/AOD: AodClockFullScreen --> timeTextWidth:202,timeTextHeight:292\n   11-15 15:51:02.100  2823  2823 I A01B05/com.ohos.sceneboard/AOD: ComponentUtil --> Component(ComponentId-AodClockNumber) draw complete.\n   11-15 15:51:02.110  1197  1197 E C01406/render_service/OHOS::RS: [LoadImgsbyResolution] Can't find resolution (1084 x 2412) in config file\n   11-15 15:51:02.127  1197  1197 E C01406/render_service/OHOS::RS: [LoadImgsbyResolution] Can't find resolution (1084 x 2412) in config file\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看指定级别日志",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看指定级别日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -L D/I/W/E/F\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   $ hilog -L E\n   08-28 09:01:25.730  2678  2678 E A00F00/com.aidataservice/AiDataService_5.10.7.320: DataChangeNotifyManager: notifyDataChange CommonEntity no valid entity to notify\n   08-28 09:01:56.058  8560  8560 E A00500/com.ohos.settingsdata/SettingsData: DB not ready request = datashare:///com.ohos.settingsdata/entry/settingsdata/SETTINGSDATA?Proxy=true&key=analysis_service_switch_on , retry after DB startup\n   08-28 09:01:56.082  8560  8560 E A00500/com.ohos.settingsdata/SettingsData: decoder failure: /data/migrate/settings_global.xml , error code:-1\n   08-28 09:01:56.082  8560  8560 E A00500/com.ohos.settingsdata/SettingsData: clearXml failed:No such file or directory, error code:13900002\n   08-28 09:01:56.083  8560  8560 E A00500/com.ohos.settingsdata/SettingsData: readText failed:No such file or directory, error code:13900002\n   08-28 09:01:56.371  8586  8586 E A00500/com.ohos.settingsdata/SettingsData: DB not ready request =    datashare:///com.ohos.settingsdata/entry/settingsdata/SETTINGSDATA?Proxy=true&key=photo_network_connection_status , retry after DB startup\n   08-28 09:01:56.408  8586  8586 E A00500/com.ohos.settingsdata/SettingsData: decoder failure: /data/migrate/settings_global.xml , error code:-1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看指定类型日志",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看指定类型日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -t app\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   $ hilog -t app\n   11-15 16:04:45.903  5630  5630 I A0A5A5/os.hiviewcare:staticSubscriber/Diagnosis: [DetectionFilter]820001084: switch off\n   11-15 16:04:45.905  5630  5630 I A0A5A5/os.hiviewcare:staticSubscriber/Diagnosis: [DetectionFilter]847005050: frequency limit\n   11-15 16:04:45.905  5630  5630 I A0A5A5/os.hiviewcare:staticSubscriber/Diagnosis: [SmartNotifyHandler]detections after filter: []\n   11-15 16:04:45.905  5630  5630 I A0A5A5/os.hiviewcare:staticSubscriber/Diagnosis: [SmartNotifyHandler]no detections to detect\n   11-15 16:04:45.924  5687  5687 I A01B06/common/KG: MetaBalls-SystemTopPanelController --> init charging status = 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看指定domain日志",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看指定domain日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -D 01B06\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   $ hilog -D 01B06\n   11-15 16:04:54.981  5687  5687 I A01B06/common/KG: MetaBalls-MetaBallRenderer --> pressTime = 0 appearTime = 1731657885972\n   11-15 16:04:54.981  5687  5687 I A01B06/common/KG: MetaBalls-MetaBallRenderer --> backAnimator on finish\n   11-15 16:04:54.982  5687  5687 I A01B06/common/KG: MetaBalls-MetaBallRenderer --> setTimeout over 9s and begin animate on finish\n   11-15 16:04:55.297  5687  5687 I A01B06/common/KG: MetaBalls-MetaBallRenderer --> chargingTextExitAnimation onFinish\n   11-15 16:04:55.494  5687  5687 I A01B06/common/KG: MetaBalls-MetaBallRenderer --> uiExtension session send data success,type: exitAnimationFinish\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看指定tag日志",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看指定TAG日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -T tag\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   $ hilog -T SAMGR\n   08-28 09:27:59.581   610 11504 I C01800/samgr/SAMGR: CommonEventCollect save extraData 1661\n   08-28 09:27:59.581   610 11504 I C01800/samgr/SAMGR: OnReceiveEvent get action: usual.event.BATTERY_CHANGED code: 0, extraDataId 1661\n   08-28 09:27:59.582   610 11504 I C01800/samgr/SAMGR: DoEvent:4 name:usual.event.BATTERY_CHANGED value:0\n   08-28 09:27:59.582   610 11504 W C01800/samgr/SAMGR: LoadSa SA:10120 AddDeath fail,cnt:1,callpid:610\n   08-28 09:27:59.583   610 11504 I C01800/samgr/SAMGR: LoadSa SA:10120 size:1,count:1\n   08-28 09:27:59.601   610 11504 I C01800/samgr/SAMGR: Scheduler SA:10120 loading\n   08-28 09:27:59.965 11518 11518 I C01800/media_analysis_service/SAMGR: SA:10120 OpenSo spend 315ms\n   08-28 09:27:59.965   610  4064 I C01800/samgr/SAMGR: AddProc:media_analysis_service. size:75\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看缓冲区前n行日志",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看缓冲区前n行日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -a 8\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   $ hilog -a 8\n   11-15 16:04:08.628     0     0 I I00000/HiLog: ========Zeroth log of type: init\n   11-15 16:04:08.603   506   506 I I02C01/cust_carrier_mount/CustCarrierMount: MountCarrierToShared start\n   11-15 16:04:08.604   506   506 I I02C01/cust_carrier_mount/CustCarrierMount: success to mount carrier to shared\n   11-15 16:04:15.394   972   972 I I02C01/cust_carrier_mount/CustCarrierMount: UpdateCotaOpkeyLink start\n   11-15 16:04:15.396   972   972 W I02C01/cust_carrier_mount/CustCarrierMount: not exist CUST_GLOBAL_CARRIER_DIR or COTA_PARAM_CARRIER_DIR\n   11-15 16:04:15.887   972   972 I I02C01/cust_carrier_mount/CustCarrierMount: success to update cota carrier\n   11-15 16:04:48.749  5777  5901 I A00001/com.hiai.core/HiAI_Metadata: metadata is null\n   11-15 16:04:48.749  5777  5901 I A00001/com.hiai.core/HiAI_PluginAbilityInfo: abilityInfo is null\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看缓冲区后n行日志",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看缓冲区后n行日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -z 8\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   $ hilog -z 8\n   11-15 16:12:19.015  1899  7867 W C01719/wifi_manager_service/ffrt: 423:FFRTQosApplyForOther:244 tid 7867, Operation not permitted, ret:-1, eno:1\n   11-15 16:12:19.125  1043  1072 I C01C42/time_service/TimeService: uid: 1010 id:428551571 name:wifi_manager_service wk:0\n   11-15 16:12:19.125  1043  1072 I C01C42/time_service/TimeService: bat: -1 id:428551571 we:505225000000 mwe:512725000000\n   11-15 16:12:19.125  1043  1072 I C01C42/time_service/TimeService: typ:3 trig: 505 225000000, bt: 495230369193\n   11-15 16:12:19.125  1043  1072 I C01C42/time_service/TimeService: cb: 428551571 ret: 0\n   11-15 16:12:19.435  3086  7813 I C01719/com.ohos.contactsdataability/ffrt: 45:~WorkerThread:72 to exit, qos[3]\n   11-15 16:12:19.691   800  1404 I C01713/resource_schedule_service/SUSPEND_MANAGER: [(HasSpecialStateFromBgtask):759] 20020107_com.ohos.medialibrary.medialibrarydata\n   11-15 16:12:19.691   800  1404 I C01713/resource_schedule_service/SUSPEND_MANAGER: [(DozeFreezeUnit):890] Doze has special:ERR_HAS_PID_EFFICIENCY_RESOURCE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看指定进程日志",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看指定进程日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -P pid\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   $ hilog -P 618\n   08-28 10:19:16.872   618 17729 I C02D15/hiview/XPower: [task_52]#current system load is: 0.028767\n   08-28 10:19:23.997   618 17580 I C02D10/hiview/CpuCollector: CalculateProcessCpuStatInfos: startTime=1724811553746, endTime=1724811563996, startBootTime=47001084, endBootTime=47011335, period=10251\n   08-28 10:19:23.999   618 17580 I C02D10/hiview/CpuCollector: CollectProcessCpuStatInfos: collect process cpu statistics information size=234, isNeedUpdate=1\n   08-28 10:19:24.002   618 17580 W C01650/hiview/Rdb:  DB :\n   08-28 10:19:24.002   618 17580 W C01650/hiview/Rdb:  device: 12583051 inode: 40230 mode: 432 size: 569344 natime: Wed Aug 28 00:00:06 2024\n   08-28 10:19:24.002   618 17580 W C01650/hiview/Rdb:  smtime: Wed Aug 28 00:34:30 2024\n   08-28 10:19:24.002   618 17580 W C01650/hiview/Rdb:  sctime: Wed Aug 28 00:34:30 2024\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看符合正则匹配关键字的日志",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看符合正则匹配关键字的日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -e start\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   $ hilog -e start\n   11-15 16:17:17.578   547  4504 I C01800/SAMGR: AddProc start proc:media_analysis_service spend 223ms\n   11-15 16:17:17.578   547  4504 I C01800/SAMGR: Scheduler proc:media_analysis_service handle started event\n   11-15 16:17:17.578   547  4504 I C01800/SAMGR: Scheduler proc:media_analysis_service started\n   11-15 16:17:17.580  8877  8877 I C01810/media_analysis_service/SAFWK: start tasks proc:media_analysis_service end,spend 1ms\n   11-15 16:17:17.582  8877  8877 I C01651/media_analysis_service/DataShare: [operator()()-data_share_manager_impl.cpp:134]: RecoverObs start\n   11-15 16:17:17.589  8877  8893 I C01651/media_analysis_service/DataShare: [Connect()-ams_mgr_proxy.cpp:67]: connect start, uri = ******/media\n   11-15 16:17:18.225  1155  1633 I C02943/power_host/ThermalHdi: CreateLogFile start\n   11-15 16:17:18.264  1155  1633 I C02943/power_host/ThermalHdi: CompressFile start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看不同显示格式的日志",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看不同显示格式的日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -v time/color/epoch/monotonic/usec/nsec/year/zone/wrap\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示本地时间，以毫秒为单位显示时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   $ hilog -v time\n   11-15 16:36:21.027  1134  1723 I C02B01/riladapter_host/HrilExt: [NotifyToBoosterTel-(hril_manager_ext.cpp:440)] RilExt:Notify to booster tel finish\n   11-15 16:36:21.027  1134  1723 I C02B01/riladapter_host/HrilExt: [NotifyToBoosterNet-(hril_manager_ext.cpp:450)] RilExt: HNOTI_BOOSTER_NET_IND report to booster net\n   11-15 16:36:21.027  1134  1723 I C02B01/riladapter_host/HrilExt: [NotifyToBoosterNet-(hril_manager_ext.cpp:454)] RilExt: HNOTI_BOOSTER_NET_IND report to booster net finish\n   11-15 16:36:21.027  1134  1723 I P01FFF/riladapter_host/Rilvendor: CHAN [HandleUnsolicited] HandleUnsolicited done for modem:0, index:0, atResponse:^BOOSTERNTF: 3, 20,\"0600100001000004000000000102A4FF0202F6FF\"\n   11-15 16:36:21.802  2809  2831 E C02D06/com.ohos.sceneboard/XCollie: Send kick,foundation to hungtask Successful\n   11-15 16:36:21.911   882  3016 I C01F0B/telephony/TelephonyVSim: state machine ProcessEvent Id: 125\n   11-15 16:36:21.911   882  3016 I C01F0B/telephony/TelephonyVSim: StateProcess\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以纳秒为单位显示时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -v nsec\n11-15 16:37:09.010658555  1134  1723 I C02B01/riladapter_host/HrilExt: [BoosterRawInd-(hril_booster.cpp:296)] RilExt: BoosterRawInd\n11-15 16:37:09.010676263  1134  1723 I C02B01/riladapter_host/HrilExt: [BoosterRawInd-(hril_booster.cpp:328)] check need notify to satellite:indType 6\n11-15 16:37:09.010800221  1134  1723 I C02B01/riladapter_host/HrilExt: [NotifyToBoosterTel-(hril_manager_ext.cpp:436)] RilExt: report to telephony ext, requestNum: 4201\n11-15 16:37:09.011011680  1134  1723 I C02B01/riladapter_host/HrilExt: [NotifyToBoosterTel-(hril_manager_ext.cpp:440)] RilExt:Notify to booster tel finish\n11-15 16:37:09.011064805  1134  1723 I C02B01/riladapter_host/HrilExt: [NotifyToBoosterNet-(hril_manager_ext.cpp:450)] RilExt: HNOTI_BOOSTER_NET_IND report to booster net\n11-15 16:37:09.011200742  1134  1723 I C02B01/riladapter_host/HrilExt: [NotifyToBoosterNet-(hril_manager_ext.cpp:454)] RilExt: HNOTI_BOOSTER_NET_IND report to booster net finish\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看和设置落盘任务",
      children: "查看和设置落盘任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看落盘任务"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -w query\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前不存在落盘任务："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -w query\nPersist task query failed\nNo running persistent task [CODE: -63]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前存在落盘任务："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -w query\n1 init,core,app,only_prerelease zlib /data/log/hilog/hilog 4.0M 1000\n2 kmsg zlib /data/log/hilog/hilog_kmsg 4.0M 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设置落盘任务"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(762480)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前没有落盘任务时，才能开启落盘任务，如果已经存在落盘任务，需要先停止落盘任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启hilog落盘任务，并且设置落盘文件数量为1000个："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -w start -n 1000\nPersist task [jobid:1][fileNum:1000][fileSize:4194304] start successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启kmsglog落盘任务，并且设置落盘文件数量为100个："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -w start -n 100 -t kmsg\nPersist task [jobid:2][fileNum:100][fileSize:4194304] start successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启落盘任务时可以自定义落盘规则，其中压缩方式可以为zlib、zstd、none。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以设置落盘文件名为kmsglog，大小为2M，数量为100个，其压缩方式为zlib压缩为例，命令行为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -w start -t kmsg -f kmsglog -l 2M -n 100 -m zlib\nPersist task [jobid:2][fileNum:100][fileSize:2097152] start successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "关闭落盘任务"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止当前落盘任务："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -w stop\nPersist task [jobid:1] stop successfully\nPersist task [jobid:2] stop successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看和设置日志级别",
      children: "查看和设置日志级别"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "查看全局日志级别"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ param get hilog.loggable.global\nI\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%9F%A5%E7%9C%8Blog%E7%89%88%E6%9C%AC%E4%BF%A1%E6%81%AF",
        children: "log版本"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "全局日志级别默认为INFO；"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%9F%A5%E7%9C%8Blog%E7%89%88%E6%9C%AC%E4%BF%A1%E6%81%AF",
        children: "nolog版本"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认不打印日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开启开发者模式后，API versoin 15及之后版本，全局日志级别为WARN，API version 14及之前版本，全局日志级别为INFO；关闭开发者模式后，默认不打印日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "连接DevEco Studio 5.0.4 Release（5.0.11.100）及之后版本时，全局日志级别为INFO；断开DevEco Studio状态下重启设备，全局日志级别恢复为WARN。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设置日志级别"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置全局日志级别，重启后失效\nhilog -b D/I/W/E/F\n\n// 设置全局日志级别，重启仍生效\nhilog -b D/I/W/E/F --persist\n\n// 设置LOG_APP类型[DOMAINID]可打印的日志级别\nhilog -b D/I/W/E/F -D 0x[DOMAINID]\n\n// 设置LOG_CORE类型[DOMAINID]可打印的日志级别\nhilog -b D/I/W/E/F -D d0[DOMAINID]\n\n// 设置[TAG]可打印的日志级别\nhilog -b D/I/W/E/F -T [TAG]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -b E\nSet global log level to E successfully\n\n$ hilog -b E --persist\nSet global log level to E successfully\nSet persist global log level to E successfully\n\n$ hilog -b D -D 0x2d00\nSet domain 0x2d00 log level to D successfully\n\n$ hilog -b D -D d001719\nSet domain 0xd001719 log level to D successfully\n\n$ hilog -b E -T testTag\nSet tag testTag log level to E successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "其他常用命令",
      children: "其他常用命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看日志缓冲区大小",
      children: "查看日志缓冲区大小"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -g\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -g\nLog type app buffer size is 16.0M\nLog type init buffer size is 16.0M\nLog type core buffer size is 16.0M\nLog type only_prerelease buffer size is 16.0M\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改日志缓冲区大小",
      children: "修改日志缓冲区大小"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -G size\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -G 16M\nSet log type app buffer size to 16.0M successfully\nSet log type init buffer size to 16.0M successfully\nSet log type core buffer size to 16.0M successfully\nSet log type only_prerelease buffer size to 16.0M successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "清除缓冲区日志",
      children: "清除缓冲区日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -r\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -r\nLog type core,app,only_prerelease buffer clear successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内核日志读取开关控制",
      children: "内核日志读取开关控制"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -k on/off\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -k on\nSet hilogd storing kmsg log on successfully\n\n$ hilog -k off\nSet hilogd storing kmsg log off successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询统计信息",
      children: "查询统计信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(311384)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要先执行 param set persist.sys.hilog.stats true 设置该属性开启统计功能，并且重启后，才能正式开始统计。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ param set persist.sys.hilog.stats true\nSet parameter persist.sys.hilog.stats true success\n$ reboot\n$ hilog -s\nLog statistic report (Duration: 0h0m32s.564, From: 11-15 16:04:08.628):\nTotal lines: 137517, length: 8.0M\nDEBUG lines: 0(0%), length: 0.0B(0%)\nINFO lines: 101795(74%), length: 6.1M(76%)\nWARN lines: 10268(7.5%), length: 719.9K(8.8%)\nERROR lines: 25452(19%), length: 1.2M(15%)\nFATAL lines: 2(0.0015%), length: 259.0B(0.0031%)\n------------------------------------------------------------\nDomain Table:\nLOGTYPE- DOMAIN---- TAG----------------------------- MAX_FREQ-- TIME---------------- MAX_TP---- TIME---------------- LINES----- LENGTH---- DROPPED---\napp----- 0xf00----- -------------------------------- 924.00---- 11-15 16:04:25.594-- 111975.00- 11-15 16:04:25.594-- 3386------ 371.5K---- 0---------\napp----- 0x0------- -------------------------------- 285.00---- 11-15 16:04:34.877-- 44242.00-- 11-15 16:04:34.877-- 990------- 129.2K---- 0---------\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "统计信息说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MAX_FREQ：日志打印频率最高的每秒行数。\nTIME：    对应发生时间。\nMAX_TP：  日志打印频率最高的每秒字节数。\nLINES：   统计周期内的总行数。\nLENGTH：  统计周期内的总字节数。\nDROPPED： 统计周期内丢失的行数。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "清除统计信息",
      children: "清除统计信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -S\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -S\nStatistic info clear successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "进程超限开关",
      children: "进程超限开关"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -Q pidon/pidoff\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启进程超限管控："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -Q pidon\nSet flow control by process to enabled successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭进程超限管控："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -Q pidoff\nSet flow control by process to disabled successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "domain超限开关",
      children: "domain超限开关"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hilog -Q domainon/domainoff\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启domain超限管控："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -Q domainon\nSet flow control by domain to enabled successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭domain超限管控："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hilog -Q domainoff\nSet flow control by domain to disabled successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hilog超限机制介绍",
      children: "hilog超限机制介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "日志打印量过大时，会触发hilog超限管控机制。触发后，超出部分的日志会被丢弃，并且打印超限提示日志。debug应用默认关闭此机制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "超限机制介绍如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用日志",
      children: "应用日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进程维度管控，打印到LOG_APP buffer里面的应用日志适配了pid超限机制，当某进程打印的LOG_APP类型日志量在一秒内超过阈值时会触发管控，超限提示日志示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "04-19 17:02:34.219  5394  5394 W A00032/com.example.myapplication/LOGLIMIT: ==com.example.myapplication LOGS OVER PROC QUOTA, 3091 DROPPED==\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本条日志表示进程com.example.myapplication存在日志打印超限，在17:02:34.219时间点前，有3091行日志由于超限管控丢弃，未打印出来。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理方式"
        })
      }), "：可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%BF%9B%E7%A8%8B%E8%B6%85%E9%99%90%E5%BC%80%E5%85%B3",
        children: "进程超限开关"
      }), "，关闭对应管控机制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "系统日志",
      children: "系统日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "domainID维度管控，打印到LOG_CORE buffer里面的系统日志适配了domain超限机制，当某domainID打印的LOG_CORE类型日志量在一秒内超过阈值时触发管控，超限提示日志示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "04-19 17:02:34.219  5394  5394 W C02C02/system_test/LOGLIMIT: 108 line(s) dropped in a second!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本条日志表示domainID为02C02的日志存在日志打印超限，在17:02:34.219时间点前，有108行日志由于超限管控丢弃，未打印出来。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理方式"
        })
      }), "：可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#domain%E8%B6%85%E9%99%90%E5%BC%80%E5%85%B3",
        children: "domain超限开关"
      }), "，关闭对应管控机制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志丢失处理方法",
      children: "日志丢失处理方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前日志丢失场景都有相应的维测信息，可以在hilog日志里面搜索对应关键字查看日志具体丢失的原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以使用正则表达式来搜索包含这些关键字的日志行：LOGLIMIT|Slow reader missed|write socket failed。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LOGLIMIT是进程或domainID超限管控的丢失；Slow reader missed是全局的日志丢失；write socket failed是进程对应的日志丢失。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(784495)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当出现这些打印时，说明日志已经丢失，无法恢复找回。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果是在线运维场景出现，需要参考下方处理方式并且本地复现，然后查看完整日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loglimit",
      children: "LOGLIMIT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "含义"
        })
      }), "：日志打印超限，该进程或者domainID被管控。属于领域日志量超出hilog规格后的主动管控，需要领域对日志进行精简和整改。提示日志示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "04-19 17:02:34.219  5394  5394 W A00032/com.example.myapplication/LOGLIMIT: ==com.example.myapplication LOGS OVER PROC QUOTA, 3091 DROPPED==\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理方式"
        })
      }), "：可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hilog%E8%B6%85%E9%99%90%E6%9C%BA%E5%88%B6%E4%BB%8B%E7%BB%8D",
        children: "hilog超限机制介绍"
      }), "，关闭对应管控机制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "slow-reader-missed",
      children: "Slow reader missed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "含义"
        })
      }), "：打印时间点前后日志量太大，hilog buffer中的日志还未落盘已经被循环覆盖了。提示日志示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "04-19 17:02:34.219     0     0 I C00000/HiLog: ========Slow reader missed log lines: 137\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      }), "：以下任意一种情况，均有可能导致全局日志丢失。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日志级别设置为D。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关闭了超限管控。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "有模块在循环打印日志。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理方式"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过hilog -g命令查询当前buffer大小。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过hilog -G命令扩大hilog buffer大小。如下命令表示将buffer大小修改为16MB（当前允许的最大规格为16MB）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hilog -G 16M\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同时查看是否后台有领域频繁打印日志。若发现某个领域日志频繁打印，影响正常日志读取，可参考“write socket failed”的规避方式，通过命令关闭其领域的日志打印。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "write-socket-failed",
      children: "write socket failed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "含义"
        })
      }), "：日志写入socket失败，出现丢包问题。提示日志示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "04-19 17:02:34.219  5394  5394 W A00032/com.example.myapplication/HiLog: write socket failed, 8 line(s) dropped!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因"
        })
      }), "：以下任意一种情况，均有可能导致进程日志丢失。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日志级别设置为D。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "关闭了超限管控。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "有模块在循环打印日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "存在高负载问题，如果出现CPU高负载或者低内存问题，会导致socket服务端处理日志过慢，socket通道中日志堆积严重，也会导致客户端写入socket数据失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理方式"
        })
      }), "：关闭其他领域的日志打印，只打印本模块的日志。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭其他领域日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hilog -b X\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开本模块的日志打印："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "LOG_APP类型："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hilog -b I -D 0x3200（将03200 domain能够打印出来的日志级别设为INFO）\n\nhilog -b I -D 0x3201（将03201 domain能够打印出来的日志级别设为INFO）\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "LOG_CORE类型："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hilog -b I -D d003200（将03200 domain能够打印出来的日志级别设为INFO）\n\nhilog -b I -D d003201（将03201 domain能够打印出来的日志级别设为INFO）\n"
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
762480(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
784495(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
813978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
311384(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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