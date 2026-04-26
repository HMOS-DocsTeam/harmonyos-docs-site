"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["82759"], {
194854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_hitrace_hitrace_md_4e4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-hitrace-hitrace-md-4e4.json
var site_docs_system_debug_optimize_debugging_commands_hitrace_hitrace_md_4e4_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/hitrace/hitrace","title":"hitrace","description":"hitrace命令行工具提供trace信息采集能力，支持采集系统提供的打点和开发者使用HitraceMeter接口在应用中设置的打点。该工具支持多种方式采集文本格式或二进制格式的trace信息，帮助开发者观测程序运行情况和定位故障问题。","source":"@site/docs/system-debug-optimize/debugging-commands/hitrace/hitrace.md","sourceDirName":"system-debug-optimize/debugging-commands/hitrace","slug":"/system-debug-optimize/debugging-commands/hitrace/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hitrace/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"hitrace","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitrace","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"PrivacyManagerService","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hidumper-tool/hidumper-privacymanagerservice/"},"next":{"title":"hiperf","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hiperf/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/hitrace/hitrace.md


const frontMatter = {
	title: 'hitrace',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitrace',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'hitrace';

const assets = {

};



const toc = [{
  "value": "环境要求",
  "id": "环境要求",
  "level": 2
}, {
  "value": "命令行说明",
  "id": "命令行说明",
  "level": 2
}, {
  "value": "常用命令",
  "id": "常用命令",
  "level": 2
}, {
  "value": "查看帮助信息",
  "id": "查看帮助信息",
  "level": 3
}, {
  "value": "查看hitrace包含的tag",
  "id": "查看hitrace包含的tag",
  "level": 3
}, {
  "value": "捕获指定时长文本格式trace",
  "id": "捕获指定时长文本格式trace",
  "level": 3
}, {
  "value": "捕获指定时长二进制格式trace",
  "id": "捕获指定时长二进制格式trace",
  "level": 3
}, {
  "value": "快照模式捕获文本格式trace",
  "id": "快照模式捕获文本格式trace",
  "level": 3
}, {
  "value": "快照模式捕获二进制格式trace",
  "id": "快照模式捕获二进制格式trace",
  "level": 3
}, {
  "value": "录制模式捕获trace",
  "id": "录制模式捕获trace",
  "level": 3
}, {
  "value": "捕获trace后进行压缩",
  "id": "捕获trace后进行压缩",
  "level": 3
}, {
  "value": "设置和查询trace输出级别阈值",
  "id": "设置和查询trace输出级别阈值",
  "level": 3
}, {
  "value": "trace文件名说明",
  "id": "trace文件名说明",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "执行hitrace命令后显示错误码1",
  "id": "执行hitrace命令后显示错误码1",
  "level": 3
}, {
  "value": "执行hitrace命令后报错“not support category on this device”",
  "id": "执行hitrace命令后报错not-support-category-on-this-device",
  "level": 3
}, {
  "value": "执行hitrace命令后显示错误码1004",
  "id": "执行hitrace命令后显示错误码1004",
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
        id: "hitrace",
        children: "hitrace"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["hitrace命令行工具提供trace信息采集能力，支持采集系统提供的打点和开发者使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-intro",
        children: "HitraceMeter接口"
      }), "在应用中设置的打点。该工具支持多种方式采集文本格式或二进制格式的trace信息，帮助开发者观测程序运行情况和定位故障问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["根据hdc命令行工具指导，完成", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hdc#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
          children: "hdc环境准备"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确保设备已正常连接，并执行hdc shell。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令行说明",
      children: "命令行说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看帮助。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-l/--list_categories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看tag列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--trace_begin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始捕获trace。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--trace_finish"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束捕获trace。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--trace_finish_nodump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "结束捕获trace，与--trace_finish的区别是不输出trace信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--trace_dump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导出trace信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能录制模式，允许长时间采集并落盘trace数据，必须和--trace_begin或--trace_finish一起使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--overwrite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置内核缓冲区满之后的行为，未设置此选项时默认丢弃最老数据，设置此选项后丢弃最新数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--file_size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文件大小（单位为KB），仅在采集二进制格式trace数据时有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-b N/--buffer_size N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置用于存储和读取trace的缓冲区大小（单位为KB）。最小值为512，最大值与设备当前可用内存有关。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t N/--time N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置hitrace采集时长，单位为s。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-o/--output filename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定目标文件的名称（导出trace格式为文本时默认为stdout，如需保存到文件，建议使用/data/local/tmp路径。导出trace格式为二进制时不支持此选项）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "压缩捕获的trace数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导出trace数据为文本格式（默认为文本格式）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--raw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导出trace数据为二进制格式（默认为文本格式）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--trace_clock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置向trace添加时间戳的时钟类型，可以是boot（默认）、global、mono、uptime或perf。不同设备支持的时钟类型不同，建议使用默认的boot进行采集，其时间为从本次开机起的时间戳，单位为s。每种时间类型的说明如下：  - boot：系统启动后的时间戳，休眠或系统挂起时也会计时。  - global：全局同步的时钟，可能有性能开销。  - mono：系统启动后的时间戳，休眠或系统挂起时不会计时。  - uptime：系统启动后的时间戳，类似于mono。  - perf：高性能计数器，适合性能分析。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--start_bgsrv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启快照模式trace捕获。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--dump_bgsrv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发快照模式trace输出到文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--stop_bgsrv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭快照模式trace捕获。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--trace_level"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置trace输出级别阈值，输出级别可以是Debug、Info、Critical、Commercial或其对应缩写D、I、C、M。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 19开始，支持该命令。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--get_level"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["查询trace输出级别阈值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该命令。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(61093)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["trace信息可以用两种不同的格式保存，分别为文本格式和二进制格式。文本格式的trace可以直接用文本编辑器查看，二进制格式的trace可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/developtools_smartperf_host",
        children: "Smartperf_Host"
      }), "工具进行可视化trace分析。工具下载链接：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/developtools_smartperf_host/releases",
        children: "developtools_smartperf_host官方发行版"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常用命令",
      children: "常用命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看帮助信息",
      children: "查看帮助信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hitrace -h\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace -h\n2025/05/28 15:19:52 hitrace enter, running_state is SHOW_HELP\nusage: hitrace [options] [categories...]\noptions include:\n  -b N                   Set the size of the buffer (KB) for storing and reading traces.\n                         The default buffer size is 18432 KB.\n  --buffer_size N        Like \"-b N\".\n  -l                     List available hitrace categories.\n  --list_categories      Like \"-l\".\n  -t N                   Set the hitrace running duration in seconds (5s by default), which depends on\n                         the time required for analysis.\n  --time N               Like \"-t N\".\n  --trace_clock clock    Sets the type of the clock for adding a timestamp to a trace, which can be\n                         boot (default), global, mono, uptime, or perf.\n  --trace_begin          Start capturing traces.\n  --trace_dump           Dump traces to a specified path (stdout by default).\n  --trace_finish         Stop capturing traces and dumps traces to a specified path (stdout by default).\n  --trace_finish_nodump  Stop capturing traces and not dumps traces.\n  --record               Enable or disable long-term trace collection tasks in conjunction with\n                         \"--trace_begin\" and \"--trace_finish\".\n  --overwrite            Set the action to take when the buffer is full. If this option is used,\n                         the latest traces are discarded; if this option is not used (default setting),\n                         the earliest traces are discarded.\n  -o filename            Specifies the name of the target file (stdout by default).\n  --output filename      Like \"-o filename\".\n  -z                     Compresses a captured trace.\n  --text                 Specify the output format of trace as text.\n  --raw                  Specify the output format of trace as raw trace, the default format is text.\n  --start_bgsrv          Enable trace_service in snapshot mode.\n  --dump_bgsrv           Trigger the dump trace task of the trace_service.\n  --stop_bgsrv           Disable trace_service in snapshot mode.\n  --file_size            Sets the size of the raw trace (KB). The default file size is 102400 KB.\n                         Only effective in raw trace mode\n  --trace_level level    Set the system parameter \"persist.hitrace.level.threshold\", which can control\n                         the level threshold of tracing. Valid values for \"level\" include\n                         D or Debug, I or Info, C or Critical, M or Commercial.\n  --get_level            Query the system parameter \"persist.hitrace.level.threshold\",\n                         which can control the level threshold of tracing.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看hitrace包含的tag",
      children: "查看hitrace包含的tag"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hitrace -l\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "各tag具体含义参考下面的tag名称与描述对照表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "tag名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，能力管理器服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accesscontrol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，访问控制模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accessibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，无障碍软件服务管理器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，ArkUI跨平台引擎开发框架。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，动画模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "app"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户态trace标签，应用模块。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-intro",
              children: "HiTraceMeter"
            }), "接口做的trace打点属于app tag。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，Ark模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "account"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，账户管理器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "binder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，binder通信内核信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bluetooth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，蓝牙通信。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，云子系统。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commercial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，nolog版本标签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commonlibrary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，通用库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dcamera"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，分布式相机。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "daudio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，分布式音频。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "devicemanager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，设备管理器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceauth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，设备认证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceprofile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，设备配置文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dhfwk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，分布式硬件框架。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dinput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，分布式输入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dlpcre"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，数据防泄露凭证服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，磁盘I/O。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "distributeddatamgr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，分布式数据管理器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dscreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，分布式屏幕。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dsched"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，分布式调度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dsoftbus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，分布式软总线。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "drm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，数字版权管理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "erofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，增强型只读文件系统。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ffrt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，FFRT任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filemanagement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，文件管理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "freq"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，CPU频率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gresource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，全局资源管理器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "graphic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，图形模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hdcd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，hdcd工具。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hdf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，硬件驱动框架。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "huks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，通用密钥库。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，CPU空闲信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "interconn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，互联子系统。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ipa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，热功耗分配器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "irq"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，IRQ事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "irqoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，IRQ禁用代码段追踪。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i2c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，I2C总线事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，CPU负载。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "membus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，内存总线利用率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，内存信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "memreclaim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，内核内存回收。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "misc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，misc模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mdfs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，移动分布式文件系统。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mmc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，嵌入式多媒体卡命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multimodalinput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，多模态输入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "musl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，musl模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "net"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，网络模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，通知模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nweb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，NWeb模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ohos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，系统通用标签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pagecache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，页缓存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，电源管理器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "preemptoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，抢占禁用代码段追踪。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，推送子系统。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "regulators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，电压电流调节器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rpc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，RPC与IPC通信。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "samgr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，服务能力管理组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sched"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，CPU调度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "schedlt"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内核态trace标签，轻量级CPU调度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 23开始，支持该标签。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，安全子系统。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sensors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，传感器模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，DMA同步。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "useriam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，用户身份与访问管理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ufs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，通用闪存存储命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，USB子系统。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "virse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，虚拟化服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "workq"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，内核worker队列。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，窗口管理器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zbinder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核态trace标签，zbinder事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zcamera"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，相机模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zimage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，图像模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zmedia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，媒体模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "zaudio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户态trace标签，音频模块。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace -l\n2025/05/27 16:24:38 hitrace enter, running_state is SHOW_LIST_CATEGORY\n            tagName:   description:\n             ability - Ability Manager\n       accesscontrol - Access Control Module\n       accessibility - Accessibility Manager\n             account - Account Manager\n......\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "捕获指定时长文本格式trace",
      children: "捕获指定时长文本格式trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不指定-o参数时，默认将捕获到的trace内容显示在命令行窗口。下面参数是指定采集10秒的数据，缓冲区大小为204800KB，采集的tag为app。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hitrace -t 10 -b 204800 app\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace -t 10 -b 204800 app\n2025/06/04 10:14:52 start capture, please wait 10s ...\n# tracer: nop\n#                                          _-----=> irqs-off\n#                                         / _----=> need-resched\n#                                        | / _---=> hardirq/softirq\n#                                        || / _--=> preempt-depth\n#                                        ||| /     delay\n#           TASK-PID       TGID    CPU#  ||||   TIMESTAMP  FUNCTION\n#              | |           |       |   ||||      |         |\n KstateRecvThrea-1132    (    952) [003] .... 589942.951387: tracing_mark_write: B|952|H:CheckMsgFromNetlink|I62\n KstateRecvThrea-1132    (    952) [003] .... 589942.951554: tracing_mark_write: B|952|H:OnKstateCallback, mask: 8, data: [PID 15461 KILLED][SIG 9]|I62\n KstateRecvThrea-1132    (    952) [003] .... 589942.951693: tracing_mark_write: E|952|I62\n KstateRecvThrea-1132    (    952) [003] .... 589942.951737: tracing_mark_write: E|952|I62\n state_change_ha-1139    (    952) [001] .... 589942.951909: tracing_mark_write: B|952|H:ProcessEvent, eventId: 6|I62\n state_change_ha-1139    (    952) [001] .... 589942.952510: tracing_mark_write: E|952|I62\n2025/06/04 10:15:02 TraceFinish done.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定-o参数时，可以将trace信息保存到指定目录，建议保存在/data/local/tmp路径下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hitrace -t 10 -b 204800 app -o /data/local/tmp/test.ftrace\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace -t 10 -b 204800 app -o /data/local/tmp/test.ftrace\n2025/06/04 10:19:47 start capture, please wait 10s ...\n2025/06/04 10:19:57 capture done, start to read trace.\n2025/06/04 10:19:57 trace read done, output: /data/local/tmp/test.ftrace\n2025/06/04 10:19:57 TraceFinish done.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "捕获指定时长二进制格式trace",
      children: "捕获指定时长二进制格式trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令带--raw参数时可捕获二进制格式trace，捕获二进制格式trace时不支持指定路径，固定保存在路径/data/log/hitrace下。采集结束后，采集结束后生成文件的绝对路径会显示在命令行窗口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hitrace -t 10 -b 204800 app --raw\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace -t 10 -b 204800 app --raw\n2025/06/04 10:21:16 hitrace enter, running_state is RECORDING_SHORT_RAW\n2025/06/04 10:21:16 args: tags:app bufferSize:204800 overwrite:1\n2025/06/04 10:21:16 start capture, please wait 10s ...\n2025/06/04 10:21:27 capture done, output files:\n    /data/log/hitrace/record_trace_20250604102116@590322-695861087.sys\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "快照模式捕获文本格式trace",
      children: "快照模式捕获文本格式trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "快照模式下，trace信息保存在内核缓冲区。当数据量超出缓冲区大小时，默认丢弃最早的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用以下命令开启快照模式，指定缓冲区大小为204800KB，采集的tag为app和graphic。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hitrace --trace_begin -b 204800 app graphic\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace --trace_begin -b 204800 app graphic\n2025/06/04 16:03:39 hitrace enter, running_state is RECORDING_LONG_BEGIN\n2025/06/04 16:03:39 args: tags:app,graphic bufferSize:204800 overwrite:1\n2025/06/04 16:03:39 OpenRecording done.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开启快照模式后，可以使用下面的命令将当前缓冲区内的数据导出。默认将trace信息显示到命令行窗口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hitrace --trace_dump\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace --trace_dump\n2025/06/04 16:07:57 start to read trace.\n# tracer: nop\n#                                          _-----=> irqs-off\n#                                         / _----=> need-resched\n#                                        | / _---=> hardirq/softirq\n#                                        || / _--=> preempt-depth\n#                                        ||| /     delay\n#           TASK-PID       TGID    CPU#  ||||   TIMESTAMP  FUNCTION\n#              | |           |       |   ||||      |         |\n KstateRecvThrea-1132    (    952) [002] .... 610865.463378: tracing_mark_write: B|952|H:CheckMsgFromNetlink|I62\n KstateRecvThrea-1132    (    952) [002] .... 610865.463503: tracing_mark_write: B|952|H:OnKstateCallback, mask: 8, data: [PID 14446 KILLED][SIG 9]|I62\n KstateRecvThrea-1132    (    952) [002] .... 610865.463626: tracing_mark_write: E|952|I62\n KstateRecvThrea-1132    (    952) [002] .... 610865.463654: tracing_mark_write: E|952|I62\n state_change_ha-1139    (    952) [001] .... 610865.463767: tracing_mark_write: B|952|H:ProcessEvent, eventId: 6|I62\n state_change_ha-1139    (    952) [001] .... 610865.463879: tracing_mark_write: E|952|I62\n state_change_ha-1139    (    952) [001] .... 610866.506055: tracing_mark_write: B|952|H:ProcessEvent, eventId: 0|I62\n state_change_ha-1139    (    952) [001] .... 610866.506297: tracing_mark_write: B|952|H:HandleStateTransition, 20020111_com.ohos.medialibrary.medialibrarydata_[6255]|I62\n state_change_ha-1139    (    952) [001] .... 610866.506782: tracing_mark_write: E|952|I62\n state_change_ha-1139    (    952) [001] .... 610866.506824: tracing_mark_write: E|952|I62\n state_change_ha-1139    (    952) [001] .... 610866.557458: tracing_mark_write: B|952|H:ProcessEvent, eventId: 0|I62\n state_change_ha-1139    (    952) [001] .... 610866.558060: tracing_mark_write: E|952|I62\n state_change_ha-1139    (    952) [001] .... 610866.558101: tracing_mark_write: E|952|I62\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导出时也可以使用-o命令保存到指定文件，建议保存到/data/local/tmp路径下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hitrace --trace_dump -o /data/local/tmp/test.ftrace\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace --trace_dump -o /data/local/tmp/test.ftrace\n2025/06/04 16:09:10 start to read trace.\n2025/06/04 16:09:10 trace read done, output: /data/local/tmp/test.ftrace\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要停止采集时，有如下三种命令："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止采集，并将当前缓冲区内的trace信息显示到命令行窗口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hitrace --trace_finish\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "使用样例"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hitrace --trace_finish\n2025/06/04 16:22:02 start to read trace.\n# tracer: nop\n#                                          _-----=> irqs-off\n#                                         / _----=> need-resched\n#                                        | / _---=> hardirq/softirq\n#                                        || / _--=> preempt-depth\n#                                        ||| /     delay\n#           TASK-PID       TGID    CPU#  ||||   TIMESTAMP  FUNCTION\n#              | |           |       |   ||||      |         |\nKstateRecvThrea-1132    (    952) [002] .... 610865.463378: tracing_mark_write: B|952|H:CheckMsgFromNetlink|I62\nKstateRecvThrea-1132    (    952) [002] .... 610865.463503: tracing_mark_write: B|952|H:OnKstateCallback, mask: 8, data: [PID 14446 KILLED][SIG 9]|I62\nKstateRecvThrea-1132    (    952) [002] .... 610865.463626: tracing_mark_write: E|952|I62\nKstateRecvThrea-1132    (    952) [002] .... 610865.463654: tracing_mark_write: E|952|I62\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止采集，并将当前缓冲区内的trace信息保存到指定文件。建议保存路径为/data/local/tmp。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hitrace --trace_finish -o /data/local/tmp/test.ftrace\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "使用样例"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hitrace --trace_finish -o /data/local/tmp/test.ftrace\n2025/06/04 16:24:52 start to read trace.\n2025/06/04 16:24:52 trace read done, output: /data/local/tmp/test.ftrace\n2025/06/04 16:24:52 Trace Closed.\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止采集，不输出trace信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hitrace --trace_finish_nodump\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "使用样例"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hitrace --trace_finish_nodump\n2025/06/04 16:26:11 hitrace enter, running_state is RECORDING_LONG_FINISH_NODUMP\n2025/06/04 16:26:11 end capture trace.\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "快照模式捕获二进制格式trace",
      children: "快照模式捕获二进制格式trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "快照模式下捕获二进制格式trace时不支持指定tag，默认采集以下tag。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"net\", \"dsched\", \"graphic\", \"multimodalinput\", \"dinput\", \"ark\", \"ace\", \"window\",\"zaudio\", \"daudio\", \"zmedia\", \"dcamera\", \"zcamera\", \"dhfwk\", \"app\", \"gresource\", \"ability\", \"power\", \"samgr\", \"ffrt\", \"nweb\", \"hdf\", \"virse\", \"workq\", \"ipa\", \"sched\", \"freq\", \"disk\", \"sync\", \"binder\", \"mmc\", \"membus\", \"load\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用下面的命令开启捕获二进制trace。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hitrace --start_bgsrv\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace --start_bgsrv\n2025/06/04 16:44:54 hitrace enter, running_state is SNAPSHOT_START\n2025/06/04 16:44:54 OpenSnapshot done.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用以下命令将当前缓冲区的trace信息导出到文件。二进制格式trace不支持指定路径导出或显示到命令行窗口，导出的文件路径会显示在命令行窗口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hitrace --dump_bgsrv\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace --dump_bgsrv\n2025/06/04 16:50:34 hitrace enter, running_state is SNAPSHOT_DUMP\n2025/06/04 16:50:35 DumpSnapshot done, output:\n    /data/log/hitrace/trace_20250604164454@613340-339960.sys\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在结束捕获时，可以使用下面的命令停止采集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hitrace --stop_bgsrv\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace --stop_bgsrv\n2025/06/04 16:52:51 hitrace enter, running_state is SNAPSHOT_STOP\n2025/06/04 16:52:52 CloseSnapshot done.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "录制模式捕获trace",
      children: "录制模式捕获trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录制模式下，系统会持续保存运行时生成的二进制格式trace，文件大小超过设定的值时会生成新文件。不支持指定保存路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用以下命令开启录制模式。缓冲区大小设定为204800KB，文件大小设为102400KB，采集的tag为app和graphic。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hitrace --trace_begin --record -b 204800 --file_size 102400 app graphic\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace --trace_begin --record -b 204800 --file_size 102400 app graphic\n2025/06/04 17:03:37 hitrace enter, running_state is RECORDING_LONG_BEGIN_RECORD\n2025/06/04 17:03:37 args: tags:app,graphic bufferSize:204800 overwrite:1 fileSize:102400\n2025/06/04 17:03:37 trace capturing.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "采集结束时，使用以下命令停止采集，命令行窗口会显示生成的文件的绝对路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hitrace --trace_finish --record\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace --trace_finish --record\n2025/06/04 17:06:14 hitrace enter, running_state is RECORDING_LONG_FINISH_RECORD\n2025/06/04 17:06:15 capture done, output files:\n    /data/log/hitrace/record_trace_20250604170337@614463-183970330.sys\n    /data/log/hitrace/record_trace_20250604170423@614508-554071886.sys\n    /data/log/hitrace/record_trace_20250604170552@614597-598551039.sys\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "捕获trace后进行压缩",
      children: "捕获trace后进行压缩"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hitrace -z -b 102400 -t 10 sched freq idle disk -o /data/local/tmp/test.ftrace\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace -z -b 102400 -t 10 sched freq idle disk -o /data/local/tmp/test.ftrace\n2024/11/14 12:00:18 start capture, please wait 10s ...\n2024/11/14 12:00:28 capture done, start to read trace.\n2024/11/14 12:00:29 trace read done, output: /data/local/tmp/test.ftrace\n2024/11/14 12:00:29 TraceFinish done.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置和查询trace输出级别阈值",
      children: "设置和查询trace输出级别阈值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打点级别优先级从高到低分别为 M（Commercial）、C（Critical）、I（Info）、D（Debug），低于trace输出级别阈值的打点将不会生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可使用带trace级别的打点接口（参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracemeter/js-apis-hitracemeter",
        children: "@ohos.hiTraceMeter"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-trace-h/capi-trace-h",
        children: "trace.h"
      }), "中的API version 19的trace打点接口），测试不同阈值下的trace输出是否符合预期。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置trace输出级别阈值\nhitrace --trace_level D/I/C/M\nhitrace --trace_level Debug/Info/Critical/Commercial\n// 查询trace输出级别阈值\nhitrace --get_level\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用样例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace --trace_level Info\n2025/08/16 10:34:23 hitrace enter, running_state is SET_TRACE_LEVEL\n2025/08/16 10:34:23 success to set trace level.\n$ hitrace --get_level\n2025/08/16 10:34:29 hitrace enter, running_state is GET_TRACE_LEVEL\n2025/08/16 10:34:29 the current trace level threshold is Info\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trace文件名说明",
      children: "trace文件名说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hitrace命令行工具采集二进制格式trace信息时，不支持指定文件路径。默认保存在/data/log/hitrace路径下，hitrace自动生成文件名并将绝对路径显示在命令行窗口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "快照模式下生成的trace文件名以trace开头，录制模式下生成的trace文件名以record开头，后面为本地时间和boot time（从开机时间开始的时间戳）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下面这个文件名为例：20250701215441说明这个文件生成的时间为2025年7月1日21时54分41秒，此时对应的boot time为6016.653165227。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace --dump_bgsrv\n2025/07/01 21:54:41 hitrace enter, running_state is SNAPSHOT_DUMP\n2025/07/01 21:54:42 DumpSnapshot done, output:\n    /data/log/hitrace/trace_20250701215441@6016-653165227.sys\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行hitrace命令后显示错误码1",
      children: "执行hitrace命令后显示错误码1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行hitrace命令后报错，错误码为1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace --dump_bgsrv\n2025/07/04 17:20:38 hitrace enter, running_state is SNAPSHOT_DUMP\n2025/07/04 17:20:38 error: DumpSnapshot failed, errorCode(1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "错误码1表示hiview进程状态异常，可以尝试重启手机后重新采集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行hitrace命令后报错not-support-category-on-this-device",
      children: "执行hitrace命令后报错“not support category on this device”"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行hitrace命令后报错，命令行窗口显示“not support category on this device”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace -t 10 aaa\n2025/07/04 17:24:21 error: aaa is not support category on this device.\n2025/07/04 17:24:21 error: parsing args failed, exit.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令中指定的tag不存在，建议使用“hitrace -l”命令查看支持的tag范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "执行hitrace命令后显示错误码1004",
      children: "执行hitrace命令后显示错误码1004"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行hitrace命令后报错，错误码为1004。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hitrace --dump_bgsrv\n2025/07/04 17:25:58 hitrace enter, running_state is SNAPSHOT_DUMP\n2025/07/04 17:25:58 error: DumpSnapshot failed, errorCode(1004)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1004表示写入文件错误，可能的原因包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "采集文本格式trace时，使用-o参数指定输出的文件路径不存在或无权限。建议将trace保存到/data/local/tmp路径下。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "磁盘空间已满时，不会生成新的trace文件，建议释放磁盘空间，确保空闲空间大于500MB，然后重新采集。"
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
61093(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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