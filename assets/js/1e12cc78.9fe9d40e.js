"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["783172"], {
931617(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_hiperf_hiperf_md_1e1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-hiperf-hiperf-md-1e1.json
var site_docs_system_debug_optimize_debugging_commands_hiperf_hiperf_md_1e1_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/hiperf/hiperf","title":"hiperf","description":"hiperf是一款集成多种性能分析功能的命令行工具，可用于分析系统性能瓶颈、定位软件热点及优化代码效率，支持采集和统计程序运行时的性能数据。","source":"@site/docs/system-debug-optimize/debugging-commands/hiperf/hiperf.md","sourceDirName":"system-debug-optimize/debugging-commands/hiperf","slug":"/system-debug-optimize/debugging-commands/hiperf/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hiperf/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"hiperf","sidebar_position":19,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiperf","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"hitrace","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hitrace/"},"next":{"title":"hiprofiler","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hiprofiler/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/hiperf/hiperf.md


const frontMatter = {
	title: 'hiperf',
	sidebar_position: 19,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiperf',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'hiperf';

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
  "value": "性能数据采样记录",
  "id": "性能数据采样记录",
  "level": 3
}, {
  "value": "性能数据统计",
  "id": "性能数据统计",
  "level": 3
}, {
  "value": "list命令",
  "id": "list命令",
  "level": 2
}, {
  "value": "record命令",
  "id": "record命令",
  "level": 2
}, {
  "value": "stat命令",
  "id": "stat命令",
  "level": 2
}, {
  "value": "dump命令",
  "id": "dump命令",
  "level": 2
}, {
  "value": "report命令",
  "id": "report命令",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "hiperf采集没有debug证书签名的应用失败",
  "id": "hiperf采集没有debug证书签名的应用失败",
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
    keyname1: "keyname1",
    keys: "keys",
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
        id: "hiperf",
        children: "hiperf"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hiperf是一款集成多种性能分析功能的命令行工具，可用于分析系统性能瓶颈、定位软件热点及优化代码效率，支持采集和统计程序运行时的性能数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-software-install",
        children: "Deveco Studio"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/developtools_smartperf_host/releases",
        children: "SmartPerf"
      }), "使用hiperf采集函数的调用栈，获取调用栈上各层函数的执行时间，通过泳道图等方式查看调用链信息进而进行性能分析，具体使用方式参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-insight-session-time",
        children: "通过Deveco Studio使用hiperf介绍"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/developtools_smartperf_host/blob/master/smartperf_host/ide/src/doc/md/quickstart_hiperf.md",
        children: "通过SmartPerf使用hiperf介绍"
      }), "。若需要指定采集的事件、采样周期、采集时长、CPU核数等选项，可以单独使用 hiperf 命令行工具。采样数据 perf.data 文件可以使用SmartPerf工具打开并以可视化的火焰图进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档详细说明了hiperf命令行工具的使用方法，帮助开发者借助该工具进行详细的性能分析。"
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
        children: "确保设备已连接，然后执行hdc shell。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令行说明",
      children: "命令行说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hiperf --help可以列出hiperf所有的命令，包括dump、list、record、report、stat等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiperf --help\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "命令"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "命令说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--hilog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置该选项后，程序运行过程中产生的日志会被记录到hilog中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--logpath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置日志文件的保存路径，现支持用户将输出文件路径设定为\"/data/local/tmp/\"目录，并允许用户自定义文件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--logtag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启指定功能的日志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "记录debug级别的日志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--verbose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "记录verbose级别的日志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--much"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "记录much级别的日志。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--nodebug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭所有日志的记录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--mixlog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志输出到命令行界面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#dump%E5%91%BD%E4%BB%A4",
              children: "dump"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将性能数据文件（如perf.data）转换为内容可读的格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#list%E5%91%BD%E4%BB%A4",
              children: "list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示当前系统支持的性能事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#record%E5%91%BD%E4%BB%A4",
              children: "record"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收集性能数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#report%E5%91%BD%E4%BB%A4",
              children: "report"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将性能数据进行可视化转换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#stat%E5%91%BD%E4%BB%A4",
              children: "stat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统计性能数据。"
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
        children: "$ hiperf --help\nUsage: hiperf [options] command [args for command]\noptions:\n        --debug                 show debug log, usage format: --debug [command] [args]\n        --help                  show help\n        --hilog                 use hilog not file to record log\n        --logpath               log file name full path, usage format: --logpath [filepath] [command] [args]\n        --logtag                enable log level for HILOG_TAG, usage format: --logtag <tag>[:level][,<tag>[:level]] [command] [args]\n                                tag: Dump, Report, Record, Stat... level: D, V, M...\n                                example: hiperf --verbose --logtag Record:D [command] [args]\n        --mixlog                mix the log in output, usage format: --mixlog [command] [args]\n        --much                  show extremely much debug log, usage format: --much [command] [args]\n        --nodebug               disable debug log, usage format: --nodebug [command] [args]\n        --verbose               show debug log, usage format: --verbose [command] [args]\n        -h                      show help\ncommand:\n        dump:   Dump content of a perf data file, like perf.data\n        help:   Show more help information for hiperf\n        list:   List the supported event types.\n        record: Collect performance sample information\n        report: report sampling information from perf.data format file\n        stat:   Collect performance counter information\n\nSee 'hiperf help [command]' for more information on a specific command.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常用命令",
      children: "常用命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "性能数据采样记录",
      children: "性能数据采样记录"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对进程ID为1234的进程采样10秒，设置回栈方式为fp（栈指针），采样频率1000次/秒，事件类型为hw-cpu-cycles和hw-instructions，采样文件保存至/data/local/tmp/perf.data。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hiperf record -p 1234 -s fp -f 1000 -d 10 -e hw-cpu-cycles,hw-instructions -o /data/local/tmp/perf.data\nProfiling duration is 10.000 seconds.\nStart Profiling...\nTimeout exit (total 10335 ms)\nProcess and Saving data...\nHiperf is not running as root mode. Do not need load kernel syms\n[ hiperf record: Captured 3.014 MB perf data. ]\n[ Sample records: 1293, Non sample records: 855 ]\n[ Sample lost: 0, Non sample lost: 0 ]\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集的数据将保存为二进制格式的perf.data文件，包含性能分析所需的采样数据、进程信息、符号表及函数调用等内容。利用火焰图脚本可将采样数据转换为可视化火焰图，以此分析系统性能瓶颈、定位软件热点并优化代码效率。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对应用com.example.insight_test_stage进行采样，采样时长为10s，回栈方式设置为dwarf（调试信息表），采样周期为1000，事件类型为hw-cpu-cycles和hw-instructions，使用默认保存路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hiperf record --app com.example.insight_test_stage -d 10 -s dwarf --period 1000 -e hw-cpu-cycles,hw-instructions\nProfiling duration is 10.000 seconds.\nStart Profiling...\nTimeout exit (total 10000 ms)\nProcess and Saving data...\nHiperf is not running as root mode. Do not need load kernel syms\n[ hiperf record: Captured 0.296 MB perf data. ]\n[ Sample records: 0, Non sample records: 2640 ]\n[ Sample lost: 0, Non sample lost: 0 ]\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "采集的数据会被保存至默认路径/data/local/tmp/perf.data中。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "性能数据统计",
      children: "性能数据统计"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对进程ID为1745，1910的进程进行计数，计数时长为10s。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hiperf stat -d 10 -p 1745,1910\nProfiling duration is 10.000 seconds.\nStart Profiling...\nTimeout exit (total 10000 ms)\n                    count  name                           | comment                          | coverage\n                  148,450  hw-branch-instructions         | 26.404 M/sec                     | (100%)\n                  49,833  hw-branch-misses               | 33.568878 miss rate              | (100%)\n                8,986,523  hw-cpu-cycles                  | 1.598409 GHz                     | (100%)\n                1,283,596  hw-instructions                | 7.001053 cycles per instruction  | (100%)\n                      63  sw-context-switches            | 11.206 K/sec                     | (100%)\n                        0  sw-page-faults                 | 0.000 /sec                       | (100%)\n                5,622,169  sw-task-clock                  | 0.000562 cpus used               | (100%)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对进程ID为1745和1910的进程进行计数，计数时长为10秒，事件类型为hw-cpu-cycles、hw-instructions、sw-task-clock，指定打印信息的时间间隔为3000ms。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hiperf stat -d 10 -p 1745,1910 -e hw-cpu-cycles,hw-instructions,sw-task-clock -i 3000\nProfiling duration is 10.000 seconds.\nStart Profiling...\nReport at 3000 ms (6999 ms left):\n                    count  name                           | comment                          | coverage\n                2,534,675  hw-cpu-cycles                  | 1.717114 GHz                     | (100%)\n                  324,279  hw-instructions                | 7.816340 cycles per instruction  | (100%)\n                1,476,125  sw-task-clock                  | 0.000492 cpus used               | (100%)\nReport at 6000 ms (3999 ms left):\n                    count  name                           | comment                          | coverage\n                5,112,570  hw-cpu-cycles                  | 1.724259 GHz                     | (100%)\n                  648,303  hw-instructions                | 7.886081 cycles per instruction  | (100%)\n                2,965,083  sw-task-clock                  | 0.000494 cpus used               | (100%)\nReport at 9000 ms (999 ms left):\n                    count  name                           | comment                          | coverage\n                7,870,422  hw-cpu-cycles                  | 1.724897 GHz                     | (100%)\n                  994,407  hw-instructions                | 7.914689 cycles per instruction  | (100%)\n                4,562,835  sw-task-clock                  | 0.000507 cpus used               | (100%)\nTimeout exit (total 10000 ms)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对进程ID为1910的进程进行计数，计数时长为3s，事件类型为hw-cpu-cycles，hw-instructions，并打印详细的信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hiperf stat -d 3 -p 1910 -e hw-cpu-cycles,hw-instructions --verbose\nProfiling duration is 3.000 seconds.\nStart Profiling...\nTimeout exit (total 3000 ms)\nhw-cpu-cycles id:1342(c-1:p1910) timeEnabled:133583 timeRunning:133583 value:255740\nhw-cpu-cycles id:1343(c-1:p1988) timeEnabled:0 timeRunning:0 value:0\nhw-cpu-cycles id:1344(c-1:p1989) timeEnabled:0 timeRunning:0 value:0\nhw-cpu-cycles id:1345(c-1:p1990) timeEnabled:187833 timeRunning:187833 value:331425\n...\nhw-instructions id:1375(c-1:p1910) timeEnabled:133583 timeRunning:133583 value:36485\nhw-instructions id:1376(c-1:p1988) timeEnabled:0 timeRunning:0 value:0\nhw-instructions id:1377(c-1:p1989) timeEnabled:0 timeRunning:0 value:0\nhw-instructions id:1378(c-1:p1990) timeEnabled:187833 timeRunning:187833 value:47816\n...\n                    count  name                           | comment                          | coverage\n                  669,850  hw-cpu-cycles                  |                                  | (100%)\n                  94,903  hw-instructions                | 7.058259 cycles per instruction  | (100%)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "list命令",
      children: "list命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "展示当前系统支持的性能事件类型，事件类型可用于record和stat命令-e选项的参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件事件。  当前支持事件：  - hw-cpu-cycles  - hw-instructions  - hw-cache-references  - hw-cache-misses  - hw-branch-instructions  - hw-branch-misses  - hw-bus-cycles  - hw-stalled-cycles-frontend  - hw-stalled-cycles-backend"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "软件事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tracepoint事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件缓存事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "raw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原始性能监测单元（PMU）事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令行示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Usage: hiperf list [event type name]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询支持的硬件事件类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiperf list hw\nevent not support hw-ref-cpu-cycles\n\nSupported events for hardware:\n        hw-cpu-cycles\n        hw-instructions\n        hw-cache-references\n        hw-cache-misses\n        hw-branch-instructions\n        hw-branch-misses\n        hw-bus-cycles\n        hw-stalled-cycles-frontend\n        hw-stalled-cycles-backend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "record命令",
      children: "record命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "采集指定进程或指定应用的性能数据，包括CPU周期、指令数、函数调用等信息，并且将采样数据保存到指定的文件中（默认路径以设备上运行 hiperf record -h/--help 时显示的 -o 参数说明为准）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(942834)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["命令采集的进程应为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hiperf#hiperf%E9%87%87%E9%9B%86%E6%B2%A1%E6%9C%89debug%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%90%8D%E7%9A%84%E5%BA%94%E7%94%A8%E5%A4%B1%E8%B4%A5",
        children: "使用debug证书签名的应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "record命令参数说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置采集的CPU ID，只采集对应的CPU数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--cpu-limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置采集时CPU最大占比，取值范围：1 - 100，默认25。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集时长，单位为s。该参数不能和--control一起使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集频率，默认4000次/s。该参数不能和--period一起使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--period"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置采集事件周期，多少事件采集一次。该参数不能和-f一起使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集事件，支持对多种事件进行采集，多个事件之间以逗号隔开。可通过list命令获取当前支持的事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-g"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集事件群组，以逗号隔开。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--no-inherit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不采集子进程数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["采集进程ID，支持对多个进程进行采样，多个进程号之间以逗号隔开。采集的进程应为“", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiperf%E9%87%87%E9%9B%86%E6%B2%A1%E6%9C%89debug%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%90%8D%E7%9A%84%E5%BA%94%E7%94%A8%E5%A4%B1%E8%B4%A5",
              children: "使用调试证书签名的应用"
            }), "”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["采集线程ID，支持对多个线程进行采样，多个线程号之间以逗号隔开。采集的线程应为“", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiperf%E9%87%87%E9%9B%86%E6%B2%A1%E6%9C%89debug%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%90%8D%E7%9A%84%E5%BA%94%E7%94%A8%E5%A4%B1%E8%B4%A5",
              children: "使用调试证书签名的应用"
            }), "”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--exclude-tid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不采集线程ID，通过线程ID排除特定线程的采样。多个线程号之间以逗号隔开。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--exclude-thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不采集线程名，通过线程名排除特定线程的采样。多个线程名之间以逗号隔开。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--offcpu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪线程何时脱离CPU调度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-j"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分支堆栈采样，过滤器支持any、any_call、any_ret、ind_call、ind_jmp、cond、call。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s/--call-stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置回栈模式，可设置为fp(栈指针)、dwarf(调试信息表)两种模式中的一种。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--kernel-callchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集内核态堆栈，该参数必须和-s参数一起使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--callchain-useronly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅收集用户态堆栈。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--delay-unwind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回栈模式被设置为dwarf时，设置此选项后调用栈会在录制后展开。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--disable-unwind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回栈模式被设置为dwarf时，设置此选项后调用栈将不会在录制后展开。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--disable-callstack-expand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回栈模式被设置为dwarf时，设置此选项后会用缓存的线程栈来对调用栈进行合并。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--enable-debuginfo-symbolic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-s fp/dwarf被设置时，elf在.gnu_debugdata段的符号会被解析，默认不解析。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--clockid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置采集时钟类型，支持monotonic和monotonic_raw，部分事件支持boottime、realtime和clock_tai时钟类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--symbol-dir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "符号表文件路径，用于采集过程中进行符号化操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mmap页数量，取值范围：2 - 1024，默认1024。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--app"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["采集的应用程序名，以逗号隔开。应用程序必须是启动状态，应用程序未启动时会等待20s，20s内应用程序未启动，命令会自动结束。采集的应用应为“", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiperf%E9%87%87%E9%9B%86%E6%B2%A1%E6%9C%89debug%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%90%8D%E7%9A%84%E5%BA%94%E7%94%A8%E5%A4%B1%E8%B4%A5",
              children: "使用调试证书签名的应用"
            }), "”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--chkms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置查询的间隔时间，单位为ms。取值范围：1 - 200，默认10。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--data-limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出数据达到指定大小停止采集，默认无限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置输出文件路径，并允许用户自定义文件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-z"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以.gz的压缩文件形式输出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--restart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收集应用启动的性能指标信息，如果进程在30秒内未启动，采集操作将结束。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--verbose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出更详细的报告。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--control [command]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集操作启停控制参数。命令包括prepare/start/pause/resume/output/stop。该参数不能和-d一起使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--dedup_stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除记录中的重复堆栈。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--cmdline-size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置/sys/kernel/tracing/saved_cmdlines_size节点的值，单位byte，取值范围：512 - 4096。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集后回栈报告。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--backtrack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集之前一段时间的数据，该参数必须和--control prepare一起使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--backtrack-sec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集之前数据的时长，单位为秒。取值范围：5 - 30，默认10。该参数必须和--backtrack一起使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--dumpoptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示采集参数的详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pipe_input"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在设备开发中，该参数用于客户端进程调用hiperf时建立命令输入通道，开发者可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony/docs/blob/master/zh-cn/device-dev/subsystems/subsys-toolchain-hiperf.md",
              children: "hiperf_client接口"
            }), "使用该能力。在应用开发中，无需使用该参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--pipe_output"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在设备开发中，该参数用于客户端进程调用hiperf时建立响应输出通道，开发者可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony/docs/blob/master/zh-cn/device-dev/subsystems/subsys-toolchain-hiperf.md",
              children: "hiperf_client接口"
            }), "使用该能力。在应用开发中，无需使用该参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--append-smo-data"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开启此参数后增加打包的so中原始so的名称。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 23开始，支持该参数。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令行示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Usage: hiperf record [options] [command [command-args]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对指定的pid为267的进程采样10秒，并使用dwarf回栈。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiperf record -p 267 -d 10 -s dwarf\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stat命令",
      children: "stat命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听用户指定的目标程序，周期性打印性能计数器的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(383188)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["命令采集的进程应为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hiperf#hiperf%E9%87%87%E9%9B%86%E6%B2%A1%E6%9C%89debug%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%90%8D%E7%9A%84%E5%BA%94%E7%94%A8%E5%A4%B1%E8%B4%A5",
        children: "使用debug证书签名的应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "stat命令参数说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置采集的CPU ID，只采集对应的CPU数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集时长，单位为s。该参数不能和--control一起使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置打印stat信息的间隔时长，单位ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集事件，支持采集多种事件，多个事件之间以逗号隔开。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-g"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集事件群组，以逗号隔开。可通过list命令获取当前支持的事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--no-inherit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不采集子进程数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-p"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["采集进程ID，支持对多个进程进行采样，多个进程号之间以逗号隔开。采集的进程应为“", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiperf%E9%87%87%E9%9B%86%E6%B2%A1%E6%9C%89debug%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%90%8D%E7%9A%84%E5%BA%94%E7%94%A8%E5%A4%B1%E8%B4%A5",
              children: "使用调试证书签名的应用"
            }), "”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["采集线程ID，支持对多个线程进行采样，多个线程号之间以逗号隔开。采集的线程应为“", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiperf%E9%87%87%E9%9B%86%E6%B2%A1%E6%9C%89debug%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%90%8D%E7%9A%84%E5%BA%94%E7%94%A8%E5%A4%B1%E8%B4%A5",
              children: "使用调试证书签名的应用"
            }), "”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--app"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["采集的应用程序名，以逗号隔开。应用程序必须是启动状态，应用程序未启动时会等待20s，20s内应用程序未启动，命令会自动结束。采集的应用应为“", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hiperf%E9%87%87%E9%9B%86%E6%B2%A1%E6%9C%89debug%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%90%8D%E7%9A%84%E5%BA%94%E7%94%A8%E5%A4%B1%E8%B4%A5",
              children: "使用调试证书签名的应用"
            }), "”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--chkms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置查询的间隔时间，单位为毫秒，取值范围：1 - 200，默认10。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--per-core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个CPU核的打印计数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--per-thread"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个线程的打印计数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--restart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收集应用启动的性能指标信息，如果进程在30秒内未启动，记录将退出。该参数必须和--app一起使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--verbose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出详细的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--dumpoptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示当前列表里所有选项的详细信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--control [command]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["采集操作启停控制参数。命令包括prepare/start/stop。该参数不能和-d一起使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该参数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-o"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置输出文件路径，并允许用户自定义文件名称。  默认路径以设备上运行 hiperf stat -h/--help 时显示的 -o 参数说明为准。  该参数必须和--control prepare一起使用，不能和--control一起使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 20开始，支持该参数。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令行示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hiperf stat [options] [command [command-args]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用stat命令监听进程号为2349的进程在CPU 0上运行3秒的性能数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiperf stat -p 1745 -d 3 -c 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dump命令",
      children: "dump命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此命令用于将不同格式的性能数据文件（如perf.data）转换为内容易读的明文，便于开发和测试人员核对其中原始采样数据的正确性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "dump命令参数说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅输出数据头和属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅输出数据段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅输出附加功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--sympath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "符号表文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样文件的路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置输出文件路径，现支持用户将输出文件路径设定为\"/data/local/tmp/\"目录，并允许用户自定义文件名称。若未设置该参数，数据将会输出到命令行界面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--elf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将elf格式的文件转换成内容可读的明文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--proto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将proto格式的文件转换成内容可读的明文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--export"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将用户栈数据分割成多个文件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令行示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Usage: hiperf dump [option] \\<filename\\>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用dump命令将/data/local/tmp/perf.data文件读取出来，并输出到/data/local/tmp/perf.dump文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiperf dump -i /data/local/tmp/perf.data -o /data/local/tmp/perf.dump\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "report命令",
      children: "report命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此命令主要用于将采样数据（perf.data）转换为用户指定的格式（例如Json或者ProtoBuf)，并可以将属于相同进程、线程、函数的样本分组到同一样本条目中，根据样本条目的事件计数对样本条目进行排序，并以报告的形式进行展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "report命令参数说明"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-h/--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "帮助命令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--symbol-dir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "符号表文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--limit-percent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "筛选性能占比不低于指定百分比（取值范围 1 - 100）的性能数据，仅在报告中保留并展示符合该阈值条件的数据条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示回栈模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--call-stack-limit-percent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示指定比例的堆栈内容，取值范围：1 - 100。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源文件路径，默认perf.data。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置输出文件路径，现支持用户将输出文件路径设定为\"/data/local/tmp/\"目录，并允许用户自定义文件名称。若未设置该参数，数据将会输出到命令行界面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--proto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出protobuf格式数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--json"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出json格式数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--diff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示源文件与转换后文件的差别。不能与--proto、--json、-s参数一起使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--branch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据函数地址显示分支。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["--", (0,jsx_runtime.jsxs)(_components.keys, {
              children: [" ", (0,jsx_runtime.jsx)(_components.keyname1, {
                children: "[,keyname2][,...]"
              })]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选关键字：comms、pids、tids、dsos、funcs、from_dsos、from_funcs，例如： --comms hiperf。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--sort [key1],[key2],[...]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按关键字排序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--hide_count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "报告中不显示数值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--dumpoptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "展示当前列表里所有选项的详细信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命令行示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Usage: hiperf report [option] \\<filename\\>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从采样文件（perf.data）中提取对性能影响较大（占比≥1%）的关键数据，并以报告的形式进行展示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiperf report -i /data/local/tmp/perf.data --limit-percent 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hiperf采集没有debug证书签名的应用失败",
      children: "hiperf采集没有debug证书签名的应用失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅支持采集带有debug证书签名的应用，提示：only support debug application."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "造成原因"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用没有debug证书签名"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可采取的解决方法"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hiperf record/stat -p [pid]命令时，被采集的进程必须是使用debug证书签名的应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认命令指定的应用是否为可调试应用，可执行hdc shell \"bm dump -n bundlename | grep appProvisionType\"查询，预期返回信息为\"appProvisionType\": \"debug\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以包名com.example.myapplication为例，可执行如下命令查询："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell \"bm dump -n com.example.myapplication | grep appProvisionType\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如包名对应的应用是可调试应用，预期返回信息如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"appProvisionType\": \"debug\",\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["构建可调试应用需要使用debug证书进行签名，申请调试证书及签名可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugcert-0000001914263178",
        children: "申请调试证书"
      }), "。"]
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
383188(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
942834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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