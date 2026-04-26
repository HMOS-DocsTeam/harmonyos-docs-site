"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["382870"], {
903457(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_log_and_fault_analysis_ide_setup_hilog_ide_setup_hilog_md_7e0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-log-and-fault-analysis-ide-setup-hilog-ide-setup-hilog-md-7e0.json
var site_docs_ide_log_and_fault_analysis_ide_setup_hilog_ide_setup_hilog_md_7e0_namespaceObject = JSON.parse('{"id":"ide-log-and-fault-analysis/ide-setup-hilog/ide-setup-hilog","title":"日志分析","description":"打印日志请查看使用HiLog打印日志。","source":"@site/docs/ide-log-and-fault-analysis/ide-setup-hilog/ide-setup-hilog.md","sourceDirName":"ide-log-and-fault-analysis/ide-setup-hilog","slug":"/ide-log-and-fault-analysis/ide-setup-hilog/","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-setup-hilog/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"日志分析","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-setup-hilog","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"hdc命令失败错误码","permalink":"/harmonyos-docs-site/ide-debug-app/ide-debug-errorcode/ide-debug-errorcode-00404/"},"next":{"title":"FaultLog","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-fault-log/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-log-and-fault-analysis/ide-setup-hilog/ide-setup-hilog.md


const frontMatter = {
	title: '日志分析',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-setup-hilog',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '日志分析';

const assets = {

};



const toc = [{
  "value": "过滤日志",
  "id": "过滤日志",
  "level": 2
}, {
  "value": "按关键字过滤日志",
  "id": "按关键字过滤日志",
  "level": 3
}, {
  "value": "使用默认提供的过滤配置",
  "id": "使用默认提供的过滤配置",
  "level": 3
}, {
  "value": "按日志级别过滤日志",
  "id": "按日志级别过滤日志",
  "level": 3
}, {
  "value": "按自定义过滤项过滤日志",
  "id": "按自定义过滤项过滤日志",
  "level": 3
}, {
  "value": "自定义日志显示格式",
  "id": "自定义日志显示格式",
  "level": 2
}, {
  "value": "超长日志自动换行",
  "id": "超长日志自动换行",
  "level": 2
}, {
  "value": "显示最新日志",
  "id": "显示最新日志",
  "level": 2
}, {
  "value": "导出日志信息",
  "id": "导出日志信息",
  "level": 2
}, {
  "value": "清除日志缓存",
  "id": "清除日志缓存",
  "level": 2
}, {
  "value": "设置HiLog窗口缓存",
  "id": "设置hilog窗口缓存",
  "level": 2
}, {
  "value": "设置设备端日志缓存",
  "id": "设置设备端日志缓存",
  "level": 2
}, {
  "value": "查看/导出设备离线日志",
  "id": "查看导出设备离线日志",
  "level": 2
}, {
  "value": "终止应用",
  "id": "终止应用",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "日志分析",
        children: "日志分析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(127956)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["打印日志请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hilog-dev/hilog-guidelines-arkts",
        children: "使用HiLog打印日志"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio提供了“Log > HiLog”窗口查看设备当前所有应用实时打印的日志信息。HiLog默认显示的日志为以下6个部分。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "时间戳"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程ID和线程ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志标签"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用包名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志级别"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "日志内容"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可通过设置包名、日志级别和搜索关键词来筛选日志信息，还可以使用自定义日志显示格式、日志导出、显示最新日志等功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiLog窗口左侧各个按钮的作用为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(487173)/* ["default"] */.A) + "",
        width: "15",
        height: "15"
      }), "：单击该按钮可以向上翻页，日志窗口取消自动滚动。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(484494)/* ["default"] */.A) + "",
        width: "15",
        height: "15"
      }), "：单击该按钮可以向下翻页，日志窗口取消自动滚动。如果翻页已到底部，日志窗口自动滚动。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(893448)/* ["default"] */.A) + "",
        width: "15",
        height: "15"
      }), "：当该按钮处于选中状态时，日志自动换行显示，否则日志按行显示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(96036)/* ["default"] */.A) + "",
        width: "15",
        height: "14"
      }), "：当该按钮处于选中状态时，日志自动滚动到窗口底部，否则停留在当前日志显示处。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(439588)/* ["default"] */.A) + "",
        width: "15",
        height: "15"
      }), "：单击该按钮可以重新开启日志接收，会重新加载设备缓存日志。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(275156)/* ["default"] */.A) + "",
        width: "15",
        height: "15"
      }), "：单击该按钮可以清空窗口日志和设备缓存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(714323)/* ["default"] */.A) + "",
        width: "17",
        height: "17"
      }), ": 单击该按钮可以对当前选择的设备屏幕进行截屏，并保存在本地。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(121286)/* ["default"] */.A) + "",
        width: "19",
        height: "15"
      }), ": 单击该按钮可以对当前选择的设备进行录屏，并保存在本地。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(464266)/* ["default"] */.A) + "",
        width: "15",
        height: "15"
      }), "：单击该按钮可以保存日志缓存到指定文件（在线日志）或保存离线日志文件（离线日志）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(395474)/* ["default"] */.A) + "",
        width: "14",
        height: "19"
      }), "：单击该按钮可以自动选择和切换已连接的设备。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(387273)/* ["default"] */.A) + "",
        width: "15",
        height: "15"
      }), "：单击该按钮可以切换日志视图以及自定义日志格式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(660394)/* ["default"] */.A) + "",
        width: "15",
        height: "15"
      }), "：单击该按钮可以关闭当前日志窗口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(753989)/* ["default"] */.A) + "",
        width: "15",
        height: "15"
      }), "：单击该按钮可以跳转到HiLog日志相关的在线帮助文档。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "过滤日志",
      children: "过滤日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "按关键字过滤日志",
      children: "按关键字过滤日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HiLog搜索框中输入希望过滤的信息，即可过滤显示所有包含此信息的日志。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(391639)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "36",
        height: "47"
      }), "按钮表示过滤是否区分大小写，", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(511725)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "38",
        height: "45"
      }), "按钮表示是否按照正则表达式匹配过滤。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(780717)/* ["default"] */.A) + "",
        width: "1450",
        height: "234"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Beta1版本开始，支持使用逻辑运算符&拼接多个关键字，精准搜索日志，&字符前后要有空格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(166046)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1876",
        height: "280"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用默认提供的过滤配置",
      children: "使用默认提供的过滤配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiLog提供多种默认的过滤模式，开发者不需要反复输入关键字过滤日志信息，只需要切换相应的过滤项，即可快速过滤所需的日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(106010)/* ["default"] */.A) + "",
        width: "1023",
        height: "220"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All logs of selected app：按照应用进程过滤日志。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User logs of selected app：按照应用进程过滤用户输出的日志。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当选择All logs of selected app或User logs of selected app时，进程过滤下拉框处于可选状态，可选择相应的选项过滤想查看的进程日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(685693)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于设备启动时，USB调试开关没有开启，部分系统应用没注册上，HiLog进程列表无法显示未注册上的系统应用，如需查看此部分的日志，可以", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section1264082914019",
        children: "按关键字过滤"
      }), "查看，或者保持USB调试开关打开的状态，重启设备。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(893085)/* ["default"] */.A) + "",
        width: "999",
        height: "234"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进程选择窗口可输入PID或应用名的关键字搜索要过滤的进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(784349)/* ["default"] */.A) + "",
        width: "995",
        height: "184"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "按日志级别过滤日志",
      children: "按日志级别过滤日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiLog提供日志级别过滤以过滤某一级别及以上的日志。日志级别分为Debug、Info、Warn、Error、Fatal五个级别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(748126)/* ["default"] */.A) + "",
        width: "993",
        height: "149"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如选择Warn级别，则过滤展示Warn级别与Warn级别以上的日志信息，即展示Warn、Error、Fatal3个级别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(51479)/* ["default"] */.A) + "",
        width: "1072",
        height: "267"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "按自定义过滤项过滤日志",
      children: "按自定义过滤项过滤日志"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除默认过滤项外，HiLog还提供配置自定义过滤项的途径以供开发者按照实际需求过滤日志，并保存此过滤配置以供重复使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Config custom filter"
        })
      }), "时将弹出自定义过滤配置窗口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(492126)/* ["default"] */.A) + "",
        width: "992",
        height: "170"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "先前介绍的过滤选项此处均可配置，同时增加了Package name和Set to all projects配置项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set to all projects：此配置当前工程及其他所有工程均可用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package name：按应用包名过滤日志。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(988666)/* ["default"] */.A) + "",
        width: "665",
        height: "251"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当配置完后将自动切换至此过滤配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(968632)/* ["default"] */.A) + "",
        width: "1449",
        height: "155"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "切换至此自定义配置时，日志级别过滤窗口和关键字过滤窗口将在此自定义配置过滤出的日志的基础上再进行过滤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义日志显示格式",
      children: "自定义日志显示格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过配置自定义格式，限制每条日志只显示用户关注的信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击左侧", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(457953)/* ["default"] */.A) + "",
        width: "15",
        height: "15"
      }), "图标，将弹出自定义格式窗口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard Views：默认显示所有信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compact Views：默认显示日志级别与日志信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modify Views：进入“Hilog Format”窗口后，可以按照需要自定义日志格式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(475008)/* ["default"] */.A) + "",
        width: "1455",
        height: "347"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“Hilog Format”中自定义日志格式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use as default view for new windows：新建的HiLog窗口以Standard模式显示还是以Compact模式显示，新建后开发者可再自行切换其显示模式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show timestamp：是否显示日期时间 。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Format：Datetime/Time 显示日期时间/只显示时间。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show process id：是否显示PID-TID 。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Include thread id：是否显示TID。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show domain/processname/tags：可以勾选以下三个选项决定是否显示domain、processname、tag。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show domains：是否显示domain。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show processnames：是否显示processname。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show tags：是否显示tag。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Total column width：domain/processname/tags列的最大宽度，超长信息将会缩略显示并以ToolTip形式显示以上勾选内容的完整信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show package names：是否显示应用包名。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Package column width：包名列的最大宽度，超长信息将会缩略显示并以ToolTip形式显示完整信息。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(257708)/* ["default"] */.A) + "",
        width: "1248",
        height: "585"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "超长日志自动换行",
      children: "超长日志自动换行"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当日志的消息过长时，日志窗口可能不能完整显示日志消息，需要拖动滚动条查看信息。此时开发者可以点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Soft-Wrap"
        })
      }), "按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(491777)/* ["default"] */.A) + "",
        width: "15",
        height: "15"
      }), "控制日志消息自动换行。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 未开启自动换行"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(857110)/* ["default"] */.A) + "",
        width: "1455",
        height: "191"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 开启自动换行"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(43914)/* ["default"] */.A) + "",
        width: "1435",
        height: "219"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "显示最新日志",
      children: "显示最新日志"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备输出的日志信息会实时刷新到HiLog窗口底部，用户可点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Scroll to End"
        })
      }), "按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(872994)/* ["default"] */.A) + "",
        width: "15",
        height: "14"
      }), "使HiLog一直显示底部的最新日志信息。当观察到需要的日志时，点击HiLog窗口，即可停止滚动，停留在当前行，以便查看日志信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(225038)/* ["default"] */.A) + "",
        width: "1920",
        height: "1032"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导出日志信息",
      children: "导出日志信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户可将经上述步骤过滤后的关键日志信息保存到本地，以便后续的进一步分析。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Export HiLog"
        })
      }), "按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(187086)/* ["default"] */.A) + "",
        width: "15",
        height: "15"
      }), "，在弹出的Export HiLog To窗口中选择保存路径。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(304575)/* ["default"] */.A) + "",
        width: "1369",
        height: "286"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "清除日志缓存",
      children: "清除日志缓存"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与日志相关的缓存有两个：设备端日志缓存、HiLog窗口缓存。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiLog显示日志信息的流程为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用输出日志信息至设备端日志缓存；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log组件将设备端日志缓存取出，保存在HiLog窗口缓存中；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HiLog窗口根据过滤条件，将HiLog窗口缓存中的消息显示窗口在界面中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear All"
        })
      }), "按钮", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(906995)/* ["default"] */.A) + "",
        width: "15",
        height: "15"
      }), "，将同时清除设备日志缓存和HiLog窗口日志缓存，以及当前已经打印的日志。HiLog窗口将显示执行清除操作后，新输出至设备端缓存的日志信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(840233)/* ["default"] */.A) + "",
        width: "1829",
        height: "503"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置hilog窗口缓存",
      children: "设置HiLog窗口缓存"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiLog窗口显示的日志信息保存在此窗口的缓存中，缓存的大小决定了当前窗口能显示的日志信息的最大数量，当日志超出缓存上限时，窗口中最早的日志将会被清除，新日志在窗口底部输出。开发者可以自行设置窗口的缓存大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击Settings > Buffer，进入缓存设置窗口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(179887)/* ["default"] */.A) + "",
        width: "1161",
        height: "116"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认缓存大小为4096K，变更缓存大小需重启HiLog窗口后生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(524816)/* ["default"] */.A) + "",
        width: "977",
        height: "679"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["重启HiLog窗口操作：先点击下方的", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(13897)/* ["default"] */.A) + "",
        width: "15",
        height: "16"
      }), "按钮，再点击上方的", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(674898)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "按钮中的Online Log即可。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(223613)/* ["default"] */.A) + "",
        width: "503",
        height: "463"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当日志量超出缓存时，顶部的旧日志不断被清除，因而顶部日志信息处于不停滚动的状态。此时若想查看此处的日志信息，可在日志滚动时，点击右键，勾选", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pause Output"
        })
      }), "暂停窗口打印，查看完后再取消勾选，重新开始打印日志。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(324538)/* ["default"] */.A) + "",
        width: "1282",
        height: "306"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置设备端日志缓存",
      children: "设置设备端日志缓存"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hdc shell hilog -g命令可查看当前设备端设置的日志缓存，默认为256K。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(171482)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1201",
        height: "112"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用hdc shell hilog -G命令可更改设备端日志缓存大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(223670)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1216",
        height: "111"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配合-t参数可单独设置某一类型的日志缓存大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(309997)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1282",
        height: "54"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "超出设备端缓存日志将被落盘于设备data/log/hilog路径下，开发者可在此目录下载历史hilog日志并查看。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看导出设备离线日志",
      children: "查看/导出设备离线日志"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio提供查看设备离线日志的功能，支持查看设备中/data/log/hilog路径中的日志，离线日志窗口中展示的是经过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hilog-tool",
        children: "解析"
      }), "和DevEco Studio格式化之后的日志。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击HiLog窗口左上角New，随后点击Offline Log即可打开离线日志窗口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(13445)/* ["default"] */.A) + "",
        width: "106",
        height: "75"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "离线日志窗口左边工具栏中的按钮、日志级别下拉框和搜索框和在线日志的功能一致，设备下拉框仅支持选择真机和模拟器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(587726)/* ["default"] */.A) + "",
        width: "1164",
        height: "186"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "离线日志支持通过时间筛选设备上的日志文件，默认时间范围为打开窗口时的前三十分钟，除显示格式外，也支持通过键入yyyyMMddHHmm后回车进行时间输入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(200210)/* ["default"] */.A) + "",
        width: "1166",
        height: "168"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在输入时间之后，日志文件下拉框会进行刷新，点击文件会从设备端下载并自动解析后输出到离线日志窗口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于最新的日志文件内容还在更新中，在达到设定的大小前，内容会不断增多。如果重新打开离线日志窗口或者修改时间，日志文件列表都会刷新，会从设备端重新下载最新的日志文件，解析的内容会更多。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(958997)/* ["default"] */.A) + "",
        width: "1876",
        height: "290"
      }), "离线日志窗口能输出的文本量可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section106741332995",
        children: "设置HiLog窗口缓存"
      }), "进行设置，设置较小可能无法显示选择文件的所有日志，推荐设置6M(6144K)。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置窗口的缓存大小可能无法展示完整的日志，可点击左侧工具栏的保存按钮导出离线日志，支持导出解析后未经DevEco Studio格式化的原始日志文件，导出的文件可以看到完整日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(793715)/* ["default"] */.A) + "",
        width: "1898",
        height: "431"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "终止应用",
      children: "终止应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio 6.0.0 Beta5版本开始，在日志窗口点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "右键 > Force Stop App"
        })
      }), "，可以终止该日志所属进程的应用，不支持系统应用和release签名的应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(869885)/* ["default"] */.A) + "",
        width: "1292",
        height: "459"
      })
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
200210(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753490-7947a719e3186b9a76f51e664233e245.png");

},
784349(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913530-3ac811bdb84f67a07581cf637c0f4d9d.png");

},
464266(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAATUlEQVQ4jWP89OnTfwYyARO5GhkYGBhYYIyamhqSNLa0tFDJZmQT8QFkF1Jk88BpxvAzKaE+iJzNwIA7utC9hFUzNoXYDKTI2YyU5CoAuO4VRXtGJG0AAAAASUVORK5CYII=");

},
484494(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAVElEQVQ4jWP89OnTfwYyARO5GoewZhYYY9++fQz79u0jSpOTkxODk5MTwmaYALEaGRjQnE3IAHR5DD/jMgCbONYAQ1eIy0AWDBEkDdjYyIBxBCZPAIBMG7chbYj5AAAAAElFTkSuQmCC");

},
857110(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833505-ea481e62d72bf2bbdc2ecec7b67d04dc.png");

},
304575(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753473-8f30964ccfa25f77ec3a33c06b59cd76.png");

},
869885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753484-f63a6887a9acccfda81a46479ad94379.png");

},
391639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
475008(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833469-3a020802d2b9f6bf19deaff420298e16.png");

},
524816(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833387-f5e3f6e2baa75551c6f425dd2a3271f4.png");

},
257708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753516-3098a3c8885919917086b266e4d5e9e1.png");

},
387273(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAF2SURBVDhPhZK7qsJAEIb/jfECIhYSCShaBBFiaWvjE6TTd7HV1ofwBazEzsZXsJGAdhKiCCKId1dnTuScXDx+sJCZye78cxH7/V7iHx6PB263G6SUUFUVsVjMiwBit9vJ9XrtmWFc18VsNsP5fEatVkO5XIYQArquQ7wuyl6v5/0aTbvdRjabxWAw4EeIbrcLsd1u5Xg8ZkcUh8MB+XyeJa9WK6TTac5sWRa+1vyKw7ZtXK9XVCoV5HI5vkz4Lp9OJywWC66zVCpxffF43IuGYdnD4ZANej2TyUDTNJZ4uVxYbhTUB/V+v3M339TrdRSLRczncyyXS88bptVq/YzKcRx2UHOovs1mww8YhoFkMsmxIIVCwV8zLcTxeGS5qVSKz7s5UXzsNmWfTqd49QSNRgPVatW3XQQvSb/f98xfSEWz2eRNGo1GXNJfOp0OFPogqcFDm0SZEokETyEYJ1g2ZQlCs55MJiyfFJim6RuboijfN+wzwBO45tlkqQkeoAAAAABJRU5ErkJggg==");

},
753989(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAFISURBVDhPnZI/y4JQFMYfhaCgQTArEhEaGgPB0aGWcPHT9WGCxqBFnYJaWqKpwaEastLy5RwN9LX7Du8PLpd77nk4f6Xr9Zrhn9TEWZYhjmPcbje83280Gg20222+f1MRk/PpdEIYhtjv97jf71BVFZZlYTweo9VqFZ45cnEzl8sF6/Ua2+2WRaPRCI/HA8vlkm2v16vwzKmIKerhcMBwOITruvA8D9PplFMOggBpmhaeORWxpmns7DgOut0ums0mDMNg8fl85n6UqYg7nQ5s24au65BlGc/nE5vNhhtomibbylRfJajW1WoF3/cxGAwwmUxqHReKd7sdR1UUBbPZDP1+H5IkFb85QvHxeOTu05h6vV4tZUK4YVRnkiQ8228LQggjLxYLzOdzRFFUWOoIxRSVotPWiRCmTTOl863WD8If6uxfQgD4Af9pkaMkpI/3AAAAAElFTkSuQmCC");

},
893448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAo0lEQVQ4EaWRIQ4EIQxF58QEhUNyAhIcF+AK3ACBHolFYrDdlOSzkxHLsCNIaeD9tr9H753+PQeDQoitg2LvYSjtxlF5F8L/9/ATw5RS5Jyj8zzndrYNk1JOgcdt11rJez9Wyh3w3Es4xjjbLKUMWGu9hhlkP7hKa41CCCO31n7hq2FYA8DrG+45598wqgDgaIyhlNIAlzNDAN3c49IwFrhDyD+z+O85QoZJxAAAAABJRU5ErkJggg==");

},
492126(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753496-af73adb1f590b3cad218c578db7c0d19.png");

},
166046(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753472-bc4b34f26b66adc0d83b1652ae0fd6e5.png");

},
106010(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913576-e945aa383e9d579ef28fb0336dec4f0b.png");

},
748126(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833475-e7bfd3b586807c8dc70525e5f7cf1717.png");

},
223613(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753512-b461cc04af522fc180361ac20d7846f9.png");

},
439588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABXUlEQVQ4jZWTTSiDARjHf++2vE2T1j5aTSTNx5qWj8MulsPULooLpZQdRHFxcrBysJSjSG6Uk7PSapdF4oCSr2lJqyltZjYyhDlsZHnfvP7Hp37////p6RGy2WyeP7RytM6AowdRLZbMVX+BAHvXh8xszxPLxP8PAySfUsztLhG62iJPoazws3YqlyZ4GeY0eUEql5Y1shvr8Tn70HwNzm6jLB+s8fL+orRMAU7l0t9gs7mJbpsHa4UFjargPbI5CYBapaa3wYuntgMBoQAHL8NFsJHx9iHJFFO5geGWAWoqq0qTTxIRALptXZKgy9oqeSoNwMPrIwAWnUkS9jn75XeuKNNx93zPzWOypBaA3+//BQUCAaB4Z4e5EYCNaEgyQU4qAG9dJ6Ja5DgRYXF/lVgmztvHmzLYoNUz2jZYNDhndmeBseCUMhjAbrQx7Z7AXe3CoNUrqi0o+So5fQKWXW+I9bAu1QAAAABJRU5ErkJggg==");

},
793715(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753590-26a2f91be66aca295339ac7220411a15.png");

},
872994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAAcElEQVQ4EaWRSw4AIQhDPTEH44BsndSkE0IANS5IRXjFzzCzuQsRmYjYN+JGlrcwi9RoUO2vySxSr+DYHPPKtLyzqq5HIugVNQxoj50ZENzCaPAGHvxhLLoAFMFjuDJO7+wfJ1vT7B2m062W/3xi9AH8OcTBUGm6tgAAAABJRU5ErkJggg==");

},
51479(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753550-d547565de221dc558c855f49eeaa7f26.png");

},
968632(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753486-a193e533b753a7100af1d227e8703d71.png");

},
714323(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAIAAAC0D9CtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAFPSURBVCiRzZK/q4JQGIbfbhd/kCCezcGtzb/AIUdpdXdz6E9ycrLdoUWapNlVhAgqHQSFLCEkIbzDia51f0B3ut90vo/znI/34QzqusaL9fYq8Efmvd80TTOfz0+n030iiqJlWTzP/8hEUbTf7/uT4/EYRdFkMukPB3VdV1UVBMH5fM6y7Hq9AmAYBkDbtgCGw6GiKKPRaDqdSpJ02xOGYRzH9A1CiGma4/EYwGaz8X3/cDjsdjsAHMeZpnlzcLlcKMAwjG3bABzHcRwHgG3bdGf/2oM3VVVZlvU8L03TNE09z2NZVlXVJ28PDCGkLEsag+Ypy5IQ8huT57ksy4Ig0FYQBFmW8zx/Yh5cJ0lSFMVsNlutVgB0XS+KIkmSb5h7yq7rXNc1DEPXdQDr9Xq5XHZddzf0yWiatt1uq6qichaLBb6UJEmaptHz4B//6w8FLZErfuJb1AAAAABJRU5ErkJggg==");

},
457953(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAF2SURBVDhPhZK7qsJAEIb/jfECIhYSCShaBBFiaWvjE6TTd7HV1ofwBazEzsZXsJGAdhKiCCKId1dnTuScXDx+sJCZye78cxH7/V7iHx6PB263G6SUUFUVsVjMiwBit9vJ9XrtmWFc18VsNsP5fEatVkO5XIYQArquQ7wuyl6v5/0aTbvdRjabxWAw4EeIbrcLsd1u5Xg8ZkcUh8MB+XyeJa9WK6TTac5sWRa+1vyKw7ZtXK9XVCoV5HI5vkz4Lp9OJywWC66zVCpxffF43IuGYdnD4ZANej2TyUDTNJZ4uVxYbhTUB/V+v3M339TrdRSLRczncyyXS88bptVq/YzKcRx2UHOovs1mww8YhoFkMsmxIIVCwV8zLcTxeGS5qVSKz7s5UXzsNmWfTqd49QSNRgPVatW3XQQvSb/f98xfSEWz2eRNGo1GXNJfOp0OFPogqcFDm0SZEokETyEYJ1g2ZQlCs55MJiyfFJim6RuboijfN+wzwBO45tlkqQkeoAAAAABJRU5ErkJggg==");

},
674898(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWklEQVQ4EeWQMQ4AIAgDfTE/4bN8ANOhhMHUgU2Hpgalwq2IyInWpBm9MsDdE1KfyAAzS+iXAMDizjfvYAviOOBEmpOc7lirCVjo/kAAwHbifT2eJQM+Uj4O2Iu4lAYBHrdcAAAAAElFTkSuQmCC");

},
121286(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAPCAYAAAAGRPQsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABxSURBVDhPY/j06dN/amHaGdbb2/s/Ly8PLwapQdaDjFEMw6YZGwapvXLlyv+Ghob/7e3tlBm2YcOG/wUFBXA+QcMuXrz4v7+/H0UMFyZoGEyMGENhauljGFW9iQ+THAH4MEgtwaRB1URLKR6shn36DwCfk44J95wmywAAAABJRU5ErkJggg==");

},
223670(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753530-7076ad5e19143a785728f5a47731b28b.png");

},
491777(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAo0lEQVQ4EaWRIQ4EIQxF58QEhUNyAhIcF+AK3ACBHolFYrDdlOSzkxHLsCNIaeD9tr9H753+PQeDQoitg2LvYSjtxlF5F8L/9/ATw5RS5Jyj8zzndrYNk1JOgcdt11rJez9Wyh3w3Es4xjjbLKUMWGu9hhlkP7hKa41CCCO31n7hq2FYA8DrG+45598wqgDgaIyhlNIAlzNDAN3c49IwFrhDyD+z+O85QoZJxAAAAABJRU5ErkJggg==");

},
906995(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAXklEQVQ4EWP49u3bf3IxAzaNeXl5/5ExNjUgMbhmZMX42MgGUUczsonEsuE2gzTgcy5IDt3QUc1oiQM9AGkXYAUFBTijq7S0FH9UnTp16j82A0Aar127hl8zup8I8QFf+dJi+iiJ+wAAAABJRU5ErkJggg==");

},
275156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAXklEQVQ4EWP49u3bf3IxAzaNeXl5/5ExNjUgMbhmZMX42MgGUUczsonEsuE2gzTgcy5IDt3QUc1oiQM9AGkXYAUFBTijq7S0FH9UnTp16j82A0Aar127hl8zup8I8QFf+dJi+iiJ+wAAAABJRU5ErkJggg==");

},
127956(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
225038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833451-027d56f18251f1bec23b367ace51351f.gif");

},
13897(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAAAiUlEQVQ4Ea1SyQkAIQy04nRhP3aVlx8bcJmFkayJILoPCZkjGdTUWuunJ50a4fuYa63LFBE3zKWUnnPuquoGAAMHjU36mjEVpIi4ATSSswnG5lmEPsLcZgKzeJWG+rGZgB3AqMDI2/qf2W5F5O3YsxF9hLnY1091/EkYxX4AYqwR526b4p16ZX4A+aZPliT7Ms4AAAAASUVORK5CYII=");

},
171482(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753546-471cf5da0678f78f7e752b49527be83a.png");

},
324538(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833489-0007a4e02978088efcd73bfeef185597.png");

},
685693(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
187086(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAATUlEQVQ4jWP89OnTfwYyARO5GhkYGBhYYIyamhqSNLa0tFDJZmQT8QFkF1Jk88BpxvAzKaE+iJzNwIA7utC9hFUzNoXYDKTI2YyU5CoAuO4VRXtGJG0AAAAASUVORK5CYII=");

},
43914(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753518-89c81b56a1a443db1a0528ebfa263088.png");

},
958997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753480-ee648c077271ddb7a75983344451f48c.png");

},
587726(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913582-45f11dc96ba486867378701854a228c3.png");

},
780717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913574-5b757d12f33bbacd2f1cf8d567980d83.png");

},
988666(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753522-65d9a0e129b3ed90941cfac1b2fea5eb.png");

},
179887(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833471-8f778066448b05ca1cda183887a275e7.png");

},
660394(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAsUlEQVQ4jZ2RsQ0EMQgE915yRAEuwl1RlSOX4i5chNOTiAj+M+sMOPgjXWaFhuu+7y9ezuctGMKqely22Qb33lFrhYg4UERQa0Xv3cOqijEG5pxorW0FIoLWGuacGGOsCxacUgIzI+e8FTzBnDOYGSklAMBlbdtlABtIRGvXwbYAQAg6Yf+Og+3Z1sERjuREEh2sqg4kIhCRKwhfVUoJ5TwLSinnV6nqCu3YzAk7gVH2Ay+LoWFDSYhuAAAAAElFTkSuQmCC");

},
13445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
840233(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833493-7d45176f0cb3cd90d8f9409aed095213.png");

},
395474(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAATCAYAAACgADyUAAAArUlEQVQ4je3TMQrEIBAF0D+LBK/gCSYXSGuRA+SwOUAKLT1B+kB6K5HAbJVA0Gwh7FZrNQP/oahDMUZBw3q1IABQZyEimOcZ+75Xg8YYTNMEIrrDdV0RQnjcYds2MDP6vr/DnDOUUrDWVqFzDjnn8qhaaxARxnGsQu89tNZX33w5f/gNeL1jSgkigmVZqkERQUqphF3X4TiOR3hmCsjMGIbh4ydn5qunn89jM3wDDFQ9a4LoMjUAAAAASUVORK5CYII=");

},
893085(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753494-e2b62a15a7e133466c2888d8279ae803.png");

},
511725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAtCAMAAAGCI9nJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJAUExURfLy8vPz8/T09O/v7+rq6ujo6Ofn5+vr6/Dw8PHx8ebm5tvb29XV1dTU1Nzc3OPj49LS0s/Pz87OztPT09bW1tDQ0NHR0d7e3u7u7vX19dLR0dDR0dbS0dvT0NzT0NfS0NPR0dTR0cfP0r3N07zN08bP0tTS0dnS0KPJ1nS/2m+/257H1tDQ0dnT0MvQ0cPO0tTR0JfG1k643ke334/E2NPS0cPP0snP0s/R0cbP0a7K1JXG16TJ1rrM05LF11W63VC53ovE2KjK1ZTG16jJ1bfM04PC2Vu73WC83XfB226/21S53lC43mu+23zB2mO93Fi63XvA2rLL1NXS0ZDE12a93E+43ku530u430q430i330u3306432G83IrD2LnM1NPS0MbO0qPI1nC+2ku43j214EC24Em432y+253I18PO09LS0drTz9fR0LfL1HzA2Tm04Dy24D224Ei433fA2rLM1dbR0drT0MnQ0a/K1IjD2GC73EG24ES330O331683YPD2arJ1bbM04LC2Ve63lm73lm73U+53ky43l273VK53nrA2pPF13C/25fG14HC2Va63XzB2ZrH14DC2bjM1NHR0MDO0q7L1b7N08zP0c3Q0cHP06/L1bvN08rQ0tbS0JjG11e63VG53pHF2NjT0KzK1X/C2qXJ1tjS0LPM1LDL1YXD2DCz4iex43TA293T0Cyz4iOw43HA28nQ0qnK1XjA2qDI1s3Q0s7R0c7Q0dnZ2eDg4OHh4ezs7O3t7QAAAEFxYjEAAADAdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AB5m9HMAAAAJcEhZcwAAFxEAABcRAcom8z8AAAJRSURBVDhPlVRLrqMwEOQEXrS8MEfwcraRLItlDsCaK7w1Gi7BCXKASFYkJDjeVLVtPu8p0ZuKgaZcLrftJk3r2tY1zogxjRC4x0Uak9ZVGgfCNFC0bWMQO9wHaRsrk2kbmVfelXc7sg2hY4LvvUEoRjYZcUe4wTULHJwJDGMieaZiBI4qXOYwNcqFxEgkxdgj9cYYGadeOYv8S+8dzxxtKwODvDOY7z7vTzCXC8iVoQfK2i9QTtc2pKmT1Vqkl/cOmd2mSbM8xm7BP6Ifu3Rw9tUn5ImMM2f5TMYmLo2oY3dkHZP8hnxy1wbuB95x55HKsR4wHSfUBj6v7QzMUaIDyhWlngpw6FIY9GnIVb95kqABdUp2fR99vBUd7hZeHns6ozNzgLVLD87rBpKzFrrZj3HuMU3VsSTSI5aNVs6m7kWWLju3LX6tZVO4bUtJ8HkcHATWbijrqlQdTl/sioMjVGdqf4E5V3vFu/Nwv/n9l+xzyzLnTL6Ox7llmdbFJ0AJGU6RxaOPN22XFabQ16Z2tVCOjgTgBPRNO9VNRVXCw118vzBaayGqWwnZTLjN89DF2A3LvOQiBA43qHiQoeuniFKLE6T8S1Kc3LIsyeCn59/nM/oBCRbUlSog2wZPH1ww9cvFbZdxgQEfwGOKf7CQwOJVFDcVJlm6+7LBYXiMQRIKsBrk3FCVmC/J/et154bAVjkmqygr5SiLaqeVhvyBvLrpsCIBVr6fD6Hmhrek6SKkmkJlC/JK91eFZrSe3PEnTjeU3mdoYZZv4S3Q2brW/QMJYuetgI7fvgAAAABJRU5ErkJggg==");

},
487173(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAARUlEQVQ4jWP89OnTfwYyARO5Ggex5n379jHs27cPpzwLsRqdnJyIsxldIy4XYGjGpRCbOBMhBfjkmXBJEGMA42gKIw0AAJ1nNReOEYucAAAAAElFTkSuQmCC");

},
96036(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAAcElEQVQ4EaWRSw4AIQhDPTEH44BsndSkE0IANS5IRXjFzzCzuQsRmYjYN+JGlrcwi9RoUO2vySxSr+DYHPPKtLyzqq5HIugVNQxoj50ZENzCaPAGHvxhLLoAFMFjuDJO7+wfJ1vT7B2m062W/3xi9AH8OcTBUGm6tgAAAABJRU5ErkJggg==");

},
309997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913464-99f48a30c3953f0dff3b64957ccc440e.png");

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