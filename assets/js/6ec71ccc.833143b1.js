"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["319433"], {
324811(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_debugging_commands_hiprofiler_hiprofiler_md_6ec_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-debugging-commands-hiprofiler-hiprofiler-md-6ec.json
var site_docs_system_debug_optimize_debugging_commands_hiprofiler_hiprofiler_md_6ec_namespaceObject = JSON.parse('{"id":"system-debug-optimize/debugging-commands/hiprofiler/hiprofiler","title":"hiprofiler","description":"Hiprofiler简介","source":"@site/docs/system-debug-optimize/debugging-commands/hiprofiler/hiprofiler.md","sourceDirName":"system-debug-optimize/debugging-commands/hiprofiler","slug":"/system-debug-optimize/debugging-commands/hiprofiler/","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hiprofiler/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"hiprofiler","sidebar_position":20,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiprofiler","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"hiperf","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/hiperf/"},"next":{"title":"uinput","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/uinput/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/debugging-commands/hiprofiler/hiprofiler.md


const frontMatter = {
	title: 'hiprofiler',
	sidebar_position: 20,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiprofiler',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'hiprofiler';

const assets = {

};



const toc = [{
  "value": "Hiprofiler简介",
  "id": "hiprofiler简介",
  "level": 2
}, {
  "value": "环境要求",
  "id": "环境要求",
  "level": 2
}, {
  "value": "架构简介",
  "id": "架构简介",
  "level": 2
}, {
  "value": "命令行说明",
  "id": "命令行说明",
  "level": 2
}, {
  "value": "支持插件列表",
  "id": "支持插件列表",
  "level": 2
}, {
  "value": "使用调试证书签名的应用",
  "id": "使用调试证书签名的应用",
  "level": 2
}, {
  "value": "插件参数说明",
  "id": "插件参数说明",
  "level": 2
}, {
  "value": "native hook插件",
  "id": "native-hook插件",
  "level": 3
}, {
  "value": "restrace_tag参数介绍",
  "id": "restrace_tag参数介绍",
  "level": 3
}, {
  "value": "ftrace plugin插件",
  "id": "ftrace-plugin插件",
  "level": 3
}, {
  "value": "memory plugin插件",
  "id": "memory-plugin插件",
  "level": 3
}, {
  "value": "xpower plugin插件",
  "id": "xpower-plugin插件",
  "level": 3
}, {
  "value": "GPU plugin插件",
  "id": "gpu-plugin插件",
  "level": 3
}, {
  "value": "CPU plugin插件",
  "id": "cpu-plugin插件",
  "level": 3
}, {
  "value": "diskio plugin插件",
  "id": "diskio-plugin插件",
  "level": 3
}, {
  "value": "hidump plugin插件",
  "id": "hidump-plugin插件",
  "level": 3
}, {
  "value": "hisysevent plugin插件",
  "id": "hisysevent-plugin插件",
  "level": 3
}, {
  "value": "network plugin插件",
  "id": "network-plugin插件",
  "level": 3
}, {
  "value": "network profiler插件",
  "id": "network-profiler插件",
  "level": 3
}, {
  "value": "常用命令",
  "id": "常用命令",
  "level": 2
}, {
  "value": "堆内存分配调用栈数据采样记录",
  "id": "堆内存分配调用栈数据采样记录",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "调优出现异常",
  "id": "调优出现异常",
  "level": 3
}, {
  "value": "抓取到的trace文件为空",
  "id": "抓取到的trace文件为空",
  "level": 3
}, {
  "value": "调优数据疑似不准确",
  "id": "调优数据疑似不准确",
  "level": 3
}, {
  "value": "调优时目标进程卡顿",
  "id": "调优时目标进程卡顿",
  "level": 3
}, {
  "value": "调优时使用FP回栈异常",
  "id": "调优时使用fp回栈异常",
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
        id: "hiprofiler",
        children: "hiprofiler"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hiprofiler简介",
      children: "Hiprofiler简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiProfiler调优组件旨在为开发者提供一系列调优能力，可以用来帮助分析内存、性能等问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["整体架构包括PC端和设备端。主体部分是PC端的数据展示页面和设备端的性能调优服务。PC端和设备端服务采用C/S模型，PC端的调优数据在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-software-install",
        children: "DevEco Studio"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/developtools_smartperf_host/releases",
        children: "Smartperf"
      }), "网页中展示。设备端程序运行在系统环境中，包含多个部分，其中hiprofilerd进程负责与DevEco通信，作为调优服务。设备端还包括命令行工具hiprofiler_cmd和数据采集进程hiprofiler_plugins。调优服务控制数据采集进程获取调优数据，数据最终流向DevEco Studio，整个过程可抽象为生产者-消费者模型。目前已完成多个插件，包括nativehook、CPU、ftrace、GPU、hiperf、xpower和memory数据采集，实现了CPU、GPU、内存和能耗等多维度调优。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hiprofiler工具对标业界调优工具，并提供更多能力，比如", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8F%92%E4%BB%B6%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",
        children: "跨语言回栈、能耗数据获取、长时间堆内存抓栈功能"
      }), "等。"]
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
      id: "架构简介",
      children: "架构简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PC端通过DevEco或Smartperf调用hiprofiler_cmd命令行工具；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hiprofiler_cmd进程启动hiprofilerd调优服务和hiprofiler_plugins插件进程；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hiprofiler_plugins开启对应插件，将获取到的调优数据汇总至hiprofilerd进程；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hiprofilerd进程将调优数据以proto格式存储到文件，或者实时返回给PC端；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PC端解析数据，生成泳道，展示获取到的调优数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(963775)/* ["default"] */.A) + "",
        width: "341",
        height: "394"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令行说明",
      children: "命令行说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hiprofiler_cmd命令行工具可以调用不同插件并输入不同参数，以满足不同的调优需求。示范命令如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiprofiler_cmd \\\n  -c - \\\n  -o /data/local/tmp/hiprofiler_data.htrace \\\n  -t 30 \\\n  -s \\\n  -k \\\n  --nonblock \\\n<<CONFIG\n request_id: 1\n session_config {\n  buffers {\n   pages: 16384\n  }\n }\n plugin_configs {\n  plugin_name: \"ftrace-plugin\"\n  sample_interval: 1000\n  config_data {\n   hitrace_categories: \"binder\"\n   buffer_size_kb: 204800\n   flush_interval_ms: 1000\n   flush_threshold_kb: 4096\n   trace_period_ms: 200\n  }\n }\nCONFIG\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "-c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置该选项后，需要将配置文件放入/data/local/tmp目录下，将路径作为参数输入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-o"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义文件保存路径（需要以/data/local/tmp开头）。若不设置路径，则调优数据自动保存至/data/local/tmp/hiprofiler_data.htrace。重复调优会覆盖原来路径的文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "杀掉已存在的调优服务进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起调优服务进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置调优持续时间，单位：s。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--nonblock"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置hiprofiler_cmd通过非阻塞的方式运行。  执行命令后，hiprofiler_cmd转入后台运行，继续执行其他命令。  如果不设置该参数，hiprofiler_cmd会阻塞执行，直到该命令结束。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 23开始支持该参数。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入完hiprofiler_cmd参数后，需要输入插件配置信息，以<<CONFIG开头，CONFIG结尾。每个插件需要的配置不同，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%8F%92%E4%BB%B6%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",
        children: "插件参数说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是session config字段介绍："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buffers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享内存页的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "split_file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否拆分文件。true代表拆分文件；false代表不拆分文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "split_file_max_size_mb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置split_file为true的情况下，定义每个拆分文件的最大大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "plugin_configs字段介绍："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "plugin_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启插件的名字。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sample_interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "插件获取调优数据的间隔，单位：ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "config_data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "插件具体参数。每个插件需要的参数不同，参考各插件proto定义。  （代码路径：developtools/profiler/protos）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成的trace文件通过hdc file recv命令导到本地，然后上传到smartperf网站或者DevEco Studio进行解析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持插件列表",
      children: "支持插件列表"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "插件名字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "简介"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "规格说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#native-hook%E6%8F%92%E4%BB%B6",
              children: "native hook"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取堆内存分配的调用栈信息。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["采集的进程仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E4%BD%BF%E7%94%A8%E8%B0%83%E8%AF%95%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%90%8D%E7%9A%84%E5%BA%94%E7%94%A8",
              children: "使用调试证书签名的应用"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#ftrace-plugin%E6%8F%92%E4%BB%B6",
              children: "ftrace plugin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取内核打点的trace事件，以及hitrace打点的数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#cpu-plugin%E6%8F%92%E4%BB%B6",
              children: "cpu plugin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取进程CPU使用率信息，包括进程级和线程级的使用率。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#gpu-plugin%E6%8F%92%E4%BB%B6",
              children: "gpu plugin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取进程GPU使用率信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#xpower-plugin%E6%8F%92%E4%BB%B6",
              children: "xpower plugin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取进程能耗使用情况的数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#memory-plugin%E6%8F%92%E4%BB%B6",
              children: "memory plugin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取进程内存占用情况，主要是获取进程smaps节点的数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#diskio-plugin%E6%8F%92%E4%BB%B6",
              children: "diskio plugin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取进程磁盘空间占用情况。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#network-profiler%E6%8F%92%E4%BB%B6",
              children: "network profiler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过进程内打点，获取进程HTTP/HTTPS请求的详细信息。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["采集的进程仅支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E4%BD%BF%E7%94%A8%E8%B0%83%E8%AF%95%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%90%8D%E7%9A%84%E5%BA%94%E7%94%A8",
              children: "使用调试证书签名的应用"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#network-plugin%E6%8F%92%E4%BB%B6",
              children: "network plugin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取进程网络流量统计信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hisysevent-plugin%E6%8F%92%E4%BB%B6",
              children: "hisysevent plugin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过hisysevent命令，获取hisysevent的事件记录数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#hidump-plugin%E6%8F%92%E4%BB%B6",
              children: "hidump plugin"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过SP_daemon命令获取相关数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用调试证书签名的应用",
      children: "使用调试证书签名的应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(151101)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认命令指定的应用是否为可调试应用，可执行hdc shell \"bm dump -n bundlename | grep appProvisionType\"查询，预期返回信息为\"appProvisionType\": \"debug\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以包名com.example.myapplication为例，可执行如下命令查询："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell \"bm dump -n com.example.myapplication | grep appProvisionType\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果包名对应的应用是可调试应用，预期返回信息如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"appProvisionType\": \"debug\",\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["构建可调试应用需要使用调试证书进行签名，申请调试证书及签名可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugcert-0000001914263178",
        children: "申请调试证书"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "插件参数说明",
      children: "插件参数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "native-hook插件",
      children: "native hook插件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取堆内存分配的调用栈信息（通过malloc、mmap、calloc或realloc等基础库函数分配堆内存的调用栈），包括跨语言堆内存分配信息（如在ArkTS语言中调用napi分配native堆内存），还能展示内存泄漏未释放堆内存调用栈信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(440045)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/code-protect",
        children: "应用加密"
      }), "后只能回native栈，不能回JS栈。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数介绍"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "详细介绍"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fp_unwind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true表示使用fp回栈方式进行回栈；  false表示使用dwarf回栈方式进行回栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fp回栈是利用了x29寄存器保存的fp指针，函数的fp指针始终指向父函数（调用方）的fp指针，调优服务根据这一特点进行回栈，根据ip计算相对PC，然后查找maps对应区间来进行符号化。  由于现在编译期越来越优化，出现寄存器重用或者编译禁用fp，会导致fp方式回不出相应的栈；混合栈情况下，fp不会记录多重混合，于是便需要dwarf回栈方式做更精确的回栈。  dwarf回栈是根据pc寄存器在map表中查找对应的map信息，由于dwarf是逐级解析调用栈，所以其性能会比fp有劣化。  注意：fp回栈暂不支持调优非aarch64架构的设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "statistics_interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统计间隔，表示将一个统计周期内的栈进行汇总，单位：s。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为实现长时间轻量化采集，提供统计模式抓栈。如果更关注调优时的性能，只需要知道每个调用栈出现的次数和总大小，不需要知道每一次具体时间，可以使用统计模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "process_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要进行内存调优的进程名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "和/proc/节点下的进程名一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startup_mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否抓取进程启动阶段内存。默认不抓取启动阶段内存。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "记录进程孵化启动到调优结束这个期间内堆内存分配的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "js_stack_report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启跨语言回栈。  0：不抓取js栈。  1：开启抓取js栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为方舟环境提供跨语言回栈功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "malloc_free_matching_interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配间隔，单位：s，指在相应时间间隔内，将malloc和free进行匹配。匹配到的就不进行落盘。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在匹配间隔内，分配并释放了的调用栈不被记录，减少了抓栈服务进程的开销。此参数设置的值大于0时，需同步将statistics_interval参数设置为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offline_symbolization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启离线符号化。  true：使用离线符号化。  false：使用在线符号化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用离线符号化时，根据IP匹配符号的操作在网页端（smartperf）完成，优化了native daemon的性能，减少了调优时的进程卡顿。但离线符号化会将符号表写入trace文件，导致文件大小比在线符号化时更大。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sample_interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采样大小。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置此参数时开启采样模式。采样模式下对于malloc size小于采样大小进行概率性统计。调用栈分配内存大小越大，出现次数越高，被统计的几率越大。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "restrace_tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要抓取资源的类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参数可多次添加不同类型。当前支持类型见表", (0,jsx_runtime.jsx)(_components.a, {
              href: "#restrace_tag%E5%8F%82%E6%95%B0%E4%BB%8B%E7%BB%8D",
              children: "restrace_tag参数介绍"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "restrace_tag参数介绍",
      children: "restrace_tag参数介绍"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "资源类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "开始支持的版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_GPU_VK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vulkan类型的GPU内存分配栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_GPU_GLES_BUFFER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenGLES的buffer类型GPU内存分配栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_GPU_GLES_IMAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenGLES的image类型GPU内存分配栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_GPU_CL_BUFFER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenCL类型的buffer类型GPU内存分配栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_GPU_CL_IMAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenCL类型的image类型GPU内存分配栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_FD_OPEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用open时的句柄函数调用栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_FD_EPOLL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用epoll时的句柄函数调用栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_FD_EVENTFD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用eventfd时的句柄函数调用栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_FD_SOCKET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用socket/socketpair时的句柄函数调用栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_FD_PIPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用pipe时的句柄函数调用栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_FD_DUP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用dup时的句柄函数调用栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_FD_ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以上所有fd相关函数调用时的句柄函数调用栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_THREAD_PTHREAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程创建时的调用栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_THREAD_ALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以上线程相关操作时的调用栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_ARKTS_HEAP_MASK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arkts内存分配栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_JS_HEAP_MASK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "龙雀虚拟机JSVM内存跟踪"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_KMP_HEAP_MASK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kmp内存分配栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_SO_MASK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SO内存分配栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_ASHMEM_MASK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ashmem内存分配栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_RN_HEAP_MASK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rn内存分配栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_DMABUF_MASK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dmabuf内存分配栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_ARK_GLOBAL_HANDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ark全局句柄分配栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_VMA_ARKWEB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb PA分配器内存跟踪。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RES_ARK_LOCAL_HANDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ark本地句柄分配栈。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "结果分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启fp回栈+跨语言回栈（其中绿色部分为js栈）："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(484004)/* ["default"] */.A) + "",
        width: "1305",
        height: "356"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启dwarf回栈和跨语言回栈（可以展示出native -> js ->native的栈）："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(711921)/* ["default"] */.A) + "",
        width: "1561",
        height: "339"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启统计模式，在此模式下，栈数据会周期性展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(564906)/* ["default"] */.A) + "",
        width: "1671",
        height: "570"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启非统计模式，在此模式下，栈数据不会周期性展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(805157)/* ["default"] */.A) + "",
        width: "1733",
        height: "797"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ftrace-plugin插件",
      children: "ftrace plugin插件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数介绍"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "详细介绍"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ftrace_events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抓取的trace event。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "记录内核打点的trace event。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hitrace_categories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抓取的hitrace打点信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用hitrace能力，获取数据以proto格式写入文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hitrace_apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抓取的hitrace信息的进程。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置此参数时，只有对应进程的trace信息会被记录。添加此参数时， hitrace_categories不支持添加binder，否则会导致trace数据解析异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buffer_size_kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "buffer缓存大小，单位：kB。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hiprofiler_plugins进程读取内核事件所需要的缓存大小。推荐使用默认数值：204800。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flush_interval_ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采集数据频率，单位：ms。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "推荐使用默认数值：1000。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flush_threshold_kb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "刷新数据大小。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超过threshold刷新一次数据至文件。用smartperf默认数值即可。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parse_ksyms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否获取内核数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true：获取内核数据；false：不获取内核数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "trace_period_ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取内核数据的频率。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用smartperf默认数值即可。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "结果分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiprofiler_cmd \\\n  -c - \\\n  -o /data/local/tmp/hiprofiler_data.htrace \\\n  -t 10 \\\n  -s \\\n  -k \\\n<<CONFIG\nrequest_id: 1\nsession_config {\n  buffers {\n  pages: 16384\n  }\n}\nplugin_configs {\n  plugin_name: \"ftrace-plugin\"\n  sample_interval: 1000\n  config_data {\n  ftrace_events: \"binder/binder_transaction\"\n  ftrace_events: \"binder/binder_transaction_received\"\n  buffer_size_kb: 204800\n  flush_interval_ms: 1000\n  flush_threshold_kb: 4096\n  parse_ksyms: true\n  clock: \"boot\"\n  trace_period_ms: 200\n  debug_on: false\n  }\n}\nCONFIG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此命令读取的内核binder_transaction和binder_transaction_received数据，这两个字段同时使用，才能完整展示binder两端数据。执行命令后，通过hdc file recv /data/local/tmp/hiprofiler_data.htrace命令将文件导出到当前目录，然后用smartperf将该文件打开并解析。结果示例如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击binder transaction右边的箭头，可以跳转到binder对端的进程或线程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(878839)/* ["default"] */.A) + "",
        width: "588",
        height: "563"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory-plugin插件",
      children: "memory plugin插件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数介绍"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "详细介绍"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "report_sysmem_vmem_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否读取虚拟内存数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从/proc/vmstat节点读取内存数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "report_process_mem_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否获取进程详细内存数据，如rss_shmem，rss_file，vm_swap等。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从/proc/${pid}/stat节点读取内存数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "report_smaps_mem_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否获取进程smaps内存信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从/proc/${pid}/smaps节点获取进程smaps内存数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "report_gpu_mem_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否获取进程GPU使用情况。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取/proc/gpu_memory节点数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "parse_smaps_rollup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否从smaps_rollup节点读取smaps统计数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取/proc/{pid}/smaps_rollup节点的smaps统计数据，相比使用report_smaps_mem_info参数调优服务性能会更好（如CPU，内存使用优化）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存信息包含如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MemTotal：总内存大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MemFree：空闲内存大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Buffers：文件的缓冲大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cached：缓存的大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shmem：已被分配的共享内存大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slab：内核数据缓存大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SUnreclaim：不可回收的Slab大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SwapTotal：交换空间的总大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SwapFree：未被使用交换空间的大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mapped：设备和文件等映射的大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VmallocUsed：已被使用的虚拟内存大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PageTables：管理内存分页的索引表大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KernelStack：Kernel消耗的内存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Active： 在经常使用中的缓冲或高速缓冲存储器页面文件的大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inactive：在不经常使用中的缓冲或高速缓冲存储器页面文件的大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unevictable：不能被释放的内存页。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VmallocTotal：vmalloc虚拟内存总大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CmaTotal：总的连续可用内存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CmaFree：空闲的可用内存。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zram：Zram的使用大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ZramTotal：Zram的总大小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(311317)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Active和Inactive的区别在于内存空间中是否包含最近被使用过的数据。当物理内存不足，需要释放正在使用的内存空间时，会优先释放Inactive的内存空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "结果分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过hiprofiler_cmd 命令获取memory数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiprofiler_cmd \\\n  -c - \\\n  -o /data/local/tmp/hiprofiler_data.htrace \\\n  -t 30 \\\n  -s \\\n  -k \\\n<<CONFIG\nrequest_id: 1\nsession_config {\n  buffers {\n  pages: 16384\n  }\n}\nplugin_configs {\n  plugin_name: \"memory-plugin\"\n  sample_interval: 5000\n  config_data {\n  report_process_tree: true\n  report_sysmem_mem_info: true\n  sys_meminfo_counters: PMEM_MEM_TOTAL\n  sys_meminfo_counters: PMEM_MEM_FREE\n  sys_meminfo_counters: PMEM_BUFFERS\n  sys_meminfo_counters: PMEM_CACHED\n  sys_meminfo_counters: PMEM_SHMEM\n  sys_meminfo_counters: PMEM_SLAB\n  sys_meminfo_counters: PMEM_SWAP_TOTAL\n  sys_meminfo_counters: PMEM_SWAP_FREE\n  sys_meminfo_counters: PMEM_MAPPED\n  sys_meminfo_counters: PMEM_VMALLOC_USED\n  sys_meminfo_counters: PMEM_PAGE_TABLES\n  sys_meminfo_counters: PMEM_KERNEL_STACK\n  sys_meminfo_counters: PMEM_ACTIVE\n  sys_meminfo_counters: PMEM_INACTIVE\n  sys_meminfo_counters: PMEM_UNEVICTABLE\n  sys_meminfo_counters: PMEM_VMALLOC_TOTAL\n  sys_meminfo_counters: PMEM_SLAB_UNRECLAIMABLE\n  sys_meminfo_counters: PMEM_CMA_TOTAL\n  sys_meminfo_counters: PMEM_CMA_FREE\n  sys_meminfo_counters: PMEM_KERNEL_RECLAIMABLE\n  sys_meminfo_counters: PMEM_ACTIVE_PURG\n  sys_meminfo_counters: PMEM_INACTIVE_PURG\n  sys_meminfo_counters: PMEM_PINED_PURG\n  report_sysmem_vmem_info: true\n  report_process_mem_info: true\n  report_app_mem_info: false\n  report_app_mem_by_memory_service: false\n  report_purgeable_ashmem_info: true\n  report_dma_mem_info: true\n  report_gpu_mem_info: true\n  }\n}\nCONFIG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此命令读取系统的内存的基本统计信息。执行命令后，通过hdc file recv /data/local/tmp/hiprofiler_data.htrace命令将文件导出到当前目录，然后通过smartperf打开并解析。结果示例如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(809358)/* ["default"] */.A) + "",
        width: "1666",
        height: "561"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过DevEco Studio 的工具获得内存的数据："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(871000)/* ["default"] */.A) + "",
        width: "1448",
        height: "817"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过DevEco->profiler->Allocation工具，选择Memory泳道，可以使用profiler的memory plugin功能。上图展示了框选时间段的进程smaps内存信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xpower-plugin插件",
      children: "xpower plugin插件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数介绍"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "详细介绍"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundle_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要进行能耗调优的进程名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "和/proc/节点下的进程名一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "message_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XpowerMessageType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要获取能耗数据的类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据类型包括：REAL_BATTERY、APP_STATISTIC、APP_DETAIL、COMPONENT_TOP、ABNORMAL_EVENTS和THERMAL_REPORT。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "结果分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(402261)/* ["default"] */.A) + "",
        width: "1587",
        height: "335"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过DevEco->profiler->real time monitor工具，可以获取相关进程能耗数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gpu-plugin插件",
      children: "GPU plugin插件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取GPU使用率相关信息的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数介绍"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "详细介绍"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要进行调优的进程ID，与/proc/节点下的进程ID一致。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "report_gpu_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否展示指定进程的GPU使用率信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true: 展示指定进程的GPU数据，需要设置pid。false: 不展示指定进程的GPU数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cpu-plugin插件",
      children: "CPU plugin插件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取CPU使用率的相关信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数介绍"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "详细介绍"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要进行调优的进程ID。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "和/proc/节点下的进程ID一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "report_process_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否展示指定进程的CPU使用率信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true：展示指定进程的数据，需要设置pid参数；  false：不展示指定进程的数据，仅展示系统级CPU使用率数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skip_thread_cpu_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否跳过线程CPU使用率数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true：不展示每个线程CPU使用率的信息，开启此参数时可以降低调优服务的开销；  false：展示每个线程CPU使用率的信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CPU 基本信息包含如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start Time：采集时间的时间戳。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duration：前一次采集到本次采集的时间差。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TotalLoad%：总的CPU使用率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UserLoad%：CPU在用户态空间运行的使用率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SystemLoad%：CPU在内核空间运行的使用率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process：进程号。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "结果分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiprofiler_cmd \\\n  -c - \\\n  -o /data/local/tmp/hiprofiler_data.htrace \\\n  -t 30 \\\n  -s \\\n  -k \\\n<<CONFIG\nrequest_id: 1\nsession_config {\n  buffers {\n  pages: 16384\n  }\n}\nplugin_configs {\n  plugin_name: \"cpu-plugin\"\n  sample_interval: 1000\n  config_data {\n  report_process_info: true\n  }\n}\nCONFIG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此命令读取cpu的基本统计信息。执行命令后，通过hdc file recv /data/local/tmp/hiprofiler_data.htrace命令将文件导出到当前目录，然后通过smartperf打开并解析。结果示例如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(618034)/* ["default"] */.A) + "",
        width: "1670",
        height: "582"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "diskio-plugin插件",
      children: "diskio plugin插件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取整机磁盘I/O使用率的相关信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数介绍"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "详细介绍"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "report_io_stats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IoReportType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "磁盘I/O统计类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该类型为枚举类型，目前支持：IO_REPORT。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当设置成IO_REPORT时，会获得如下磁盘IO信息："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data Read：从磁盘读取到内存的总字节数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data Read/sec：每秒从磁盘读取到内存的字节数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data Write：从内存写入磁盘的总字节数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data Write/sec：每秒从内存写入磁盘的字节数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reads In：读入的字节数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reads In/sec：每秒读取的字节数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write Out：写入的字节数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write Out/sec：每秒写入的字节数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "结果分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiprofiler_cmd \\\n  -c - \\\n  -o /data/local/tmp/hiprofiler_data.htrace \\\n  -t 30 \\\n  -s \\\n  -k \\\n<<CONFIG\nrequest_id: 1\nsession_config {\n  buffers {\n  pages: 16384\n  }\n}\nplugin_configs {\n  plugin_name: \"diskio-plugin\"\n  sample_interval: 1000\n  config_data {\n  report_io_stats: IO_REPORT\n  }\n}\nCONFIG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此命令读取disk io的基本统计信息。执行命令后，通过hdc file recv /data/local/tmp/hiprofiler_data.htrace将文件导出到当前目录，然后通过smartperf打开并解析。结果示例如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(124727)/* ["default"] */.A) + "",
        width: "1621",
        height: "765"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hidump-plugin插件",
      children: "hidump plugin插件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取应用进程的fps帧率的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数介绍"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "详细介绍"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "report_fps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否报告帧率数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true：报告应用进程的帧率数据；  false：不报告帧率数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每1秒上报多少次帧率数据。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值为10，即每隔100毫秒上报一次帧率数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "结果分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该插件暂时不支持smartperf工具方式的trace数据解析，只支持DevEco Studio模式下的trace数据解析。如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(795633)/* ["default"] */.A) + "",
        width: "1865",
        height: "591"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hisysevent-plugin插件",
      children: "hisysevent plugin插件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取系统事件记录的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数介绍"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "详细介绍"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "msg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义的字符串。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该字符串作为保留字段，并未实际使用。使用时可传入空字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subscribe_domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅的domain。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该字段用来订阅具体的domain下的所有事件。如果为空串，则订阅所有domain下的所有事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subscribe_event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅的event。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该字段用来订阅具体的event。如果为空串，则订阅所有event。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "结果分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiprofiler_cmd \\\n  -c - \\\n  -o /data/local/tmp/hiprofiler_data.htrace \\\n  -t 30 \\\n  -s \\\n  -k \\\n<<CONFIG\nrequest_id: 1\nsession_config {\n  buffers {\n  pages: 16384\n  }\n}\nplugin_configs {\n  plugin_name: \"hisysevent-plugin\"\n  config_data {\n  msg: \"hisysevent-plugin\"\n  subscribe_domain: \"\"\n  subscribe_event: \"\"\n  }\n}\nCONFIG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此命令示例抓取所有hisystem event订阅事件信息。执行命令后，通过hdc file recv /data/local/tmp/hiprofiler_data.htrace将文件导出到当前目录，然后通过smartperf打开并解析。结果示例如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(149256)/* ["default"] */.A) + "",
        width: "1618",
        height: "693"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-plugin插件",
      children: "network plugin插件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取网络上行下载相关的数据。统计网络管理模块提供的网络流量、连接状态等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数介绍"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "详细介绍"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程ID。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定进程的网络数据。可以传入多个参数。参数缺省时，则抓取整机的网络数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startup_process_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动的进程名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果需要抓取指定进程启动的网络数据，则需要指定此参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "restart_process_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重启的进程名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果需要抓取指定进程重启的网络数据，则需要指定此参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(96911)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startup_process_name和restart_process_name不能同时为空。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络信息数据包含如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "StartTime：采集时间的时间戳。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duration：前一次采集到本次采集的时间差。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data Received：接收的网络数据总字节数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data Received/sec：每秒接收的网络数据字节数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data Send：发送的网络数据总字节数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data Send/sec：每秒发送的网络数据字节数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packets In：接收的网络总数据包数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packets In/sec：每秒接收的网络数据包数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packets Out：发送的网络总数据包数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packets Out/sec：每秒发送的网络数据包数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "结果分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiprofiler_cmd \\\n  -c - \\\n  -o /data/local/tmp/hiprofiler_data.htrace \\\n  -t 30 \\\n  -s \\\n  -k \\\n<<CONFIG\nrequest_id: 1\nsession_config {\n  buffers {\n  pages: 16384\n  }\n}\nplugin_configs {\n  plugin_name: \"network-plugin\"\n  sample_interval: 1000\n  config_data {\n  }\n}\nCONFIG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此命令示例抓取整机网络数据信息。执行命令后，通过hdc file recv /data/local/tmp/hiprofiler_data.htrace将文件导出到当前模板，然后通过smartperf打开并解析。结果示例如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(756607)/* ["default"] */.A) + "",
        width: "1623",
        height: "724"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-profiler插件",
      children: "network profiler插件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取进程的网络请求信息，会把每次HTTP请求当作一个数据点记录下来。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数介绍"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "详细介绍"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程ID。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定进程的网络数据。可以传入多个参数。参数缺省时，则抓取整机的网络数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startup_process_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动的进程名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果需要抓取指定进程启动的网络数据，则需要指定此参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "restart_process_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重启的进程名。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果需要抓取指定进程重启的网络数据，则需要指定此参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clock_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间时钟类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1：BOOTTIME，系统启动后单调递增时间（含NTP调整）。  2：REALTIME，可调整的系统实时时间。  3：REALTIME_COARSE，低精度实时时间。  4：MONOTONIC，无NTP调整的单调递增时间。  5：MONOTONIC_COARSE，低精度单调递增时间。  6：MONOTONIC_RAW，硬件原始单调递增时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "smb_pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享内存页数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hiprofiler_plugins进程和被调优进程建立的共享内存大小，建议值为16384个页大小，即：16384*4096=67108864字节（64M）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flush_interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "磁盘写入间隔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每flush_interval次网络请求触发一次磁盘写入，优化IO效率。  默认值为1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "阻塞模式开关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true：共享内存满时阻塞采集，可能影响性能。  false：共享内存满时丢弃超出部分的数据。  默认值为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "结果分析"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "smartperf工具暂时不支持该插件的trace数据解析，若需分析network数据，请使用DevEco Studio的Profiler工具下的NetWork功能。可参考："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-profiler-network",
        children: "网络诊断：NetWork分析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常用命令",
      children: "常用命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "堆内存分配调用栈数据采样记录",
      children: "堆内存分配调用栈数据采样记录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对com.example.insight_test_stage进程的堆内存分配操作进行抓栈，并开启fp回栈、离线符号化和统计模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiprofiler_cmd \\\n  -c - \\\n  -t 30 \\\n  -s \\\n  -k \\\n<<CONFIG\nrequest_id: 1\nsession_config {\n  buffers {\n  pages: 16384\n  }\n}\nplugin_configs {\n  plugin_name: \"nativehook\"\n  sample_interval: 5000\n  config_data {\n  save_file: false\n  smb_pages: 16384\n  max_stack_depth: 20\n  process_name: \"com.example.insight_test_stage\"\n  string_compressed: true\n  fp_unwind: true\n  blocked: true\n  callframe_compress: true\n  record_accurately: true\n  offline_symbolization: true\n  startup_mode: false\n  statistics_interval: 10\n  sample_interval: 256\n  js_stack_report: 1\n  max_js_stack_depth: 10\n  }\n}\nCONFIG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "采集的数据会被保存至/data/local/tmp/hiprofiler_data.htrace文件中，该文件包含了内存泄漏分析所需的函数调用信息、线程和动态库维度内存分配情况，以及调用栈次数和分配大小聚类信息。开启离线符号化，fp回栈，统计模式均可以提升调优服务处理数据速率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "抓取指定进程CPU使用率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对进程号为1234的进程采集CPU数据，采集时长为30s，采样周期为1000ms，调优数据传输的共享内存大小是16384个内存页，采集的数据会被保存至/data/local/tmp/hiprofiler_data.htrace文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiprofiler_cmd \\\n  -c - \\\n  -o /data/local/tmp/hiprofiler_data.htrace \\\n  -t 30 \\\n  -s \\\n  -k \\\n<<CONFIG\n request_id: 1\n session_config {\n  buffers {\n   pages: 16384\n  }\n }\n plugin_configs {\n  plugin_name: \"cpu-plugin\"\n  sample_interval: 1000\n  config_data {\n   pid: 1234\n   report_process_info: true\n  }\n }\nCONFIG\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["抓取指定进程的GPU图形内存调用栈（需要使用最新smartperf release版本解析文件，下载链接：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/developtools_smartperf_host/releases",
        children: "smartperf"
      }), ")。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiprofiler_cmd \\\n  -c - \\\n  -t 30 \\\n  -s \\\n  -k \\\n<<CONFIG\nrequest_id: 1\nsession_config {\n  buffers {\n  pages: 16384\n  }\n}\nplugin_configs {\n  plugin_name: \"nativehook\"\n  sample_interval: 5000\n  config_data {\n  save_file: false\n  smb_pages: 16384\n  max_stack_depth: 20\n  pid: 11237\n  string_compressed: true\n  fp_unwind: true\n  blocked: true\n  callframe_compress: true\n  record_accurately: true\n  offline_symbolization: true\n  startup_mode: false\n  statistics_interval: 10\n  malloc_disable: true\n  memtrace_enable: true\n  restrace_tag: \"RES_GPU_VK\"\n  restrace_tag: \"RES_GPU_GLES_BUFFER\"\n  restrace_tag: \"RES_GPU_GLES_IMAGE\"\n  restrace_tag: \"RES_GPU_CL_BUFFER\"\n  js_stack_report: 1\n  max_js_stack_depth: 10\n  }\n}\nCONFIG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "命令中使用了malloc_disable参数用于过滤nativeheap抓栈的数据；添加的restrace_tag参数中没有\"RES_GPU_CL_IMAGE\", 则不抓取OpenCL image类型的GPU内存分配栈。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始支持抓取指定进程创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-life-cycle#napi_ref",
        children: "napi_ref"
      }), "的调用栈，不会抓取创建弱引用的调用栈。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiprofiler_cmd \\\n  -c - \\\n  -t 30 \\\n  -s \\\n  -k \\\n<<CONFIG\nrequest_id: 1\nsession_config {\n  buffers {\n  pages: 16384\n  }\n}\nplugin_configs {\n  plugin_name: \"nativehook\"\n  sample_interval: 5000\n  config_data {\n  save_file: false\n  smb_pages: 16384\n  max_stack_depth: 20\n  pid: 11237\n  string_compressed: true\n  fp_unwind: true\n  blocked: true\n  callframe_compress: true\n  record_accurately: true\n  offline_symbolization: true\n  startup_mode: false\n  statistics_interval: 10\n  malloc_disable: true\n  memtrace_enable: true\n  restrace_tag: \"RES_ARK_GLOBAL_HANDLE\"\n  }\n}\nCONFIG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始支持LocalHandle对象内存录制功能。例如，可通过如下方式对com.example.insight_test_stage进程进行内存录制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ hiprofiler_cmd \\\n  -c - \\\n  -t 20 \\\n  -s \\\n  -k \\\n<<CONFIG\nrequest_id: 1\nsession_config {\n  buffers {\n  pages: 16384\n  }\n}\nplugin_configs {\n  plugin_name: \"nativehook\"\n  sample_interval: 5000\n  config_data {\n  save_file: false\n  smb_pages: 16384\n  max_stack_depth: 20\n  process_name: \"com.example.insight_test_stage\"\n  string_compressed: true\n  fp_unwind: true\n  blocked: true\n  callframe_compress: true\n  record_accurately: true\n  offline_symbolization: true\n  startup_mode: true\n  statistics_interval: 10\n  malloc_disable: true\n  memtrace_enable: true\n  restrace_tag: \"RES_ARK_LOCAL_HANDLE\"\n  }\n}\nCONFIG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LocalHandle对象内存录制功能要求被测应用在启动时替换加载维测库，才能正常采集LocalHandle内存信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用替换加载维测库方法："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.应用处于退出状态：下发LocalHandle对象内存录制命令，设置startup_mode参数为true，然后启动应用，应用启动后即可进行数据采集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.应用处于运行状态：下发LocalHandle对象内存录制命令，设置startup_mode参数为true，然后重启应用，应用重启后即可进行数据采集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(410943)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.应用加载维测库后，只要应用不退出，维测库持续生效。此后，可以通过非启动模式录制localhandle内存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.使用此种方式后，此次应用打开的时长会变长，此次运行的性能上也会有损失。但不影响下次的使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.此种方式抓取到的localhandle内存一定是泄漏的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["4.命令行方式获取的trace文件，可以通过DevEco Profiler", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-insight-session-snapshot/ide-snapshot-basic-operations#section6760173514388",
        children: "离线导入"
      }), "文件功能进行解析。导入的单个文件大小不超过1.5G。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调优出现异常",
      children: "调优出现异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hiprofiler_cmd命令时，显示Service not started。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(163935)/* ["default"] */.A) + "",
        width: "680",
        height: "216"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调优服务未能开启，说明正在使用DevEco Studio调优或者上次调优异常退出，需要执行hiprofiler_cmd -k之后再重新执行调优命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "抓取到的trace文件为空",
      children: "抓取到的trace文件为空"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "抓取到的trace文件是空的"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要检查生成文件的路径是否在/data/local/tmp/目录下。如果目标路径是/data/local/tmp下的一个文件夹，则尝试对文件夹执行chmod 777操作。如果是user版本使用nativehook或者network profiler插件抓取的应用不是", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BD%BF%E7%94%A8%E8%B0%83%E8%AF%95%E8%AF%81%E4%B9%A6%E7%AD%BE%E5%90%8D%E7%9A%84%E5%BA%94%E7%94%A8",
        children: "使用调试证书签名的应用"
      }), "，也抓不到数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调优数据疑似不准确",
      children: "调优数据疑似不准确"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hiprofiler抓取到的native heap和hidumper查看的native heap有差异。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hidumper抓取的是进程维度内存使用情况，hiprofiler抓取到的是进程用户态通过基础库函数（malloc，mmap，realloc等，operator new也是调用的malloc）分配堆内存的数据。两者之间会有差异，差异存在于线程的内存缓存，堆内存延迟释放，加载器使用内存等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调优时目标进程卡顿",
      children: "调优时目标进程卡顿"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hiprofiler_cmd命令抓取应用进程的内存trace，采用FP回栈或者dwarf回栈时，出现应用进程卡顿。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过hiprofiler_cmd命令中config参数配置来进行调整。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hiprofiler_cmd命令中config参数的调整方法如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "适当减小max_stack_depth和max_js_stack_depth参数的值，减少回栈深度，减少调用栈信息的采集。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "适当增大smb_pages参数的值，增大调优数据传输的共享内存大小。默认值为16384个页大小，即：16384*4096=67108864字节（64M）。可以调整到128M。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "适当增加sample_interval参数的值，增大采样线程栈的大小。默认值为256，可以调整到512。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调优时使用fp回栈异常",
      children: "调优时使用FP回栈异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hiprofiler_cmd命令抓取应用进程的内存trace，对应的共享库（SO）无法进行基于FP的栈回溯。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因&解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查对应的共享库编译时是否开启了-fomit-frame-pointer编译选项，需保证该选项保持关闭状态。"
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
311317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
618034(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438555-035e90b0b96fc3dfee4fcc3d93328941.png");

},
96911(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
402261(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798860-98e8d7b8f4d56f7dedf617244dddcbac.png");

},
163935(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958512-0e68838f6032fc59bb2a1db0cb402424.png");

},
484004(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438551-b6b026df561680684d8de0bf6e68c97b.png");

},
564906(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478507-703a9a5e94ebb174f86cc92686bac87e.png");

},
963775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798856-c9870de848b89114cc130bef262e5751.png");

},
871000(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478509-c35f303119264b6d747210280f08bd3a.png");

},
440045(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
410943(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
711921(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958506-f82ad8ed3049d3b68f493f4070b47fce.png");

},
795633(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478511-a11a5141819537c008902eec440f74f4.png");

},
124727(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958510-8f50dabd7ce8a9cedc3694d5a3bc0a5f.png");

},
151101(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
756607(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438557-fcdaeab305f9a9a80a9b8b34d32601f4.png");

},
809358(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958508-760552851a334211527706bf6635968a.png");

},
149256(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798862-2b437729bc90f380c780e631673cca5a.png");

},
878839(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438553-34ebde5d38fff75125994c617310ca38.png");

},
805157(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798858-2d504f74a6feb53deb0120bbd33a8ace.png");

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