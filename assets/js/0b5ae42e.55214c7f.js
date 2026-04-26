"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["624380"], {
246001(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_fault_analysis_crash_detection_cppcrash_guidelines_cppcrash_guidelines_md_0b5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-fault-analysis-crash-detection-cppcrash-guidelines-cppcrash-guidelines-md-0b5.json
var site_docs_system_debug_optimize_performance_analysis_kit_fault_analysis_crash_detection_cppcrash_guidelines_cppcrash_guidelines_md_0b5_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines/cppcrash-guidelines","title":"Cpp Crash（进程崩溃）检测","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines/cppcrash-guidelines.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines","slug":"/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Cpp Crash（进程崩溃）检测","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cppcrash-guidelines","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"JS Crash（进程崩溃）检测","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines/"},"next":{"title":"AddrSanitizer（地址越界）检测","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/address-sanitizer-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines/cppcrash-guidelines.md


const frontMatter = {
	title: 'Cpp Crash（进程崩溃）检测',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cppcrash-guidelines',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'Cpp Crash（进程崩溃）检测';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "系统处理的崩溃信号",
  "id": "系统处理的崩溃信号",
  "level": 3
}, {
  "value": "SIGILL崩溃类型",
  "id": "sigill崩溃类型",
  "level": 3
}, {
  "value": "SIGTRAP崩溃类型",
  "id": "sigtrap崩溃类型",
  "level": 3
}, {
  "value": "SIGBUS崩溃类型",
  "id": "sigbus崩溃类型",
  "level": 3
}, {
  "value": "SIGFPE崩溃类型",
  "id": "sigfpe崩溃类型",
  "level": 3
}, {
  "value": "SIGSEGV崩溃类型",
  "id": "sigsegv崩溃类型",
  "level": 3
}, {
  "value": "信号产生原因分类",
  "id": "信号产生原因分类",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "日志获取",
  "id": "日志获取",
  "level": 2
}, {
  "value": "日志规格",
  "id": "日志规格",
  "level": 2
}, {
  "value": "一般故障场景日志规格",
  "id": "一般故障场景日志规格",
  "level": 3
}, {
  "value": "空指针解引用故障场景日志规格",
  "id": "空指针解引用故障场景日志规格",
  "level": 3
}, {
  "value": "栈溢出故障场景日志规格",
  "id": "栈溢出故障场景日志规格",
  "level": 3
}, {
  "value": "栈覆盖故障场景日志规格",
  "id": "栈覆盖故障场景日志规格",
  "level": 3
}, {
  "value": "异步线程栈跟踪故障场景日志规格",
  "id": "异步线程栈跟踪故障场景日志规格",
  "level": 3
}, {
  "value": "应用通过HiAppEvent设置崩溃日志配置参数场景日志规格",
  "id": "应用通过hiappevent设置崩溃日志配置参数场景日志规格",
  "level": 3
}, {
  "value": "有页面切换轨迹的故障场景日志规格",
  "id": "有页面切换轨迹的故障场景日志规格",
  "level": 3
}, {
  "value": "CppCrash聚类",
  "id": "cppcrash聚类",
  "level": 2
}, {
  "value": "聚类简介",
  "id": "聚类简介",
  "level": 3
}, {
  "value": "聚类信息范围",
  "id": "聚类信息范围",
  "level": 3
}, {
  "value": "提取聚类信息",
  "id": "提取聚类信息",
  "level": 3
}, {
  "value": "提取聚类特征",
  "id": "提取聚类特征",
  "level": 3
}, {
  "value": "生成聚类特征",
  "id": "生成聚类特征",
  "level": 3
}, {
  "value": "Cpp Crash常见问题",
  "id": "cpp-crash常见问题",
  "level": 2
}, {
  "value": "故障日志中调用栈出现中断",
  "id": "故障日志中调用栈出现中断",
  "level": 3
}, {
  "value": "内存问题引发的Crash故障",
  "id": "内存问题引发的crash故障",
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
        id: "cpp-crash进程崩溃检测",
        children: "Cpp Crash（进程崩溃）检测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["进程发生崩溃后，系统首先感知到崩溃，然后抓取崩溃相关的信息，最后生成崩溃日志并上报崩溃事件，为开发者提供详细的维测日志以辅助故障定位。本文分为基本概念、实现原理、约束与限制、日志获取、日志规格五个小节介绍系统提供的CppCrash检测方法。开发者如果想进一步了解如何分析CppCrash问题，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-app-crash-cpp-way",
        children: "CppCrash类问题分析方法"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "信号"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "信号是兼容POSIX的操作系统中进程间通讯的一种方式。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "信号处理函数"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义了进程在接收到信号之后进行一系列处理操作的函数，信号处理函数需要明确处理哪些信号。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "pc"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全称Program Counter（程序计数器），储存当前程序正在执行指令的地址。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "lr"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全称Link Register（链接寄存器），存储子程序的返回地址。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "sp"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全称Stack Pointer（堆栈指针寄存器），存储当前函数栈帧的栈顶地址。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "fp"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全称Frame Pointer（栈帧指针寄存器），存储当前函数栈帧的栈底地址。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "调用栈"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "记录每个线程从开始到执行当前现场（如崩溃现场）整个过程中函数调用顺序。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "寄存器"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CPU中高速存储单元用于存储计算机程序执行过程中所需的数据、指令地址或状态信息。本文中，寄存器信息是指崩溃时保存在高速存储单元中的数据、指令地址或状态信息。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统检测进程崩溃的流程如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "进程在运行时发生崩溃，会收到来自内核发送的崩溃信号，由进程在启动时注册的信号处理模块进行处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "进程接收到崩溃信号后，保存当前进程上下文，并fork出子进程执行ProcessDump二进制抓取崩溃信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ProcessDump进程将崩溃日志数据写入到临时目录下进行存储。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ProcessDump进程收集完崩溃日志后，上报给维测进程Hiview，并补充仅Hiview有权限获取的部分信息(如整机内存状态、应用页面切换轨迹)，然后将崩溃日志存储到“/data/log/faultlog/faultlogger”目录下并生成故障事件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "系统处理的崩溃信号",
      children: "系统处理的崩溃信号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统的进程崩溃检测能力主要基于POSIX信号机制，目前支持对以下崩溃信号的处理："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "信号值(signo)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "信号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解释"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "触发原因"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGILL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法指令"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程执行了非法、格式错误、未知或特权指令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGTRAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "断点或陷阱异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异常或trap指令发生。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGABRT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程终止"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程异常终止，通常为进程自身调用标准函数库的abort()函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGBUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法内存访问"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程访问了未对齐或者不存在的物理地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGFPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浮点异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程执行了错误的算术运算，如除数为0、浮点溢出、整数溢出等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGSEGV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效内存访问"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程访问了无效内存引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGSTKFLT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "栈错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理器执行了错误的栈操作，如栈空时弹出、栈满时压入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGSYS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误系统调用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统调用时使用了错误或非法参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上系统处理的崩溃信号，根据错误码（code）还有二级分类，二级分类如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sigill崩溃类型",
      children: "SIGILL崩溃类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SIGILL是一个在Unix和类Unix操作系统中的信号，它表示非法指令异常。SIGILL信号通常由以下几种类型的问题场景引起："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码（code）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "信号字符串"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解释"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "触发原因"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ILL_ILLOPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法操作码异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生在执行不被CPU支持的指令或者无效指令时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ILL_ILLOPN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法操作数异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生在指令使用了不正确的操作数，或者是操作数的类型不正确时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ILL_ILLADR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法地址异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生在程序尝试访问无效的内存地址时，或者是在尝试执行未对齐的内存访问时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ILL_ILLTRP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法陷阱异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生在程序尝试执行一个非法的陷阱指令时，或者是在尝试执行一个未定义的操作时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ILL_PRVOPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "特权操作码异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生在普通用户尝试执行特权指令时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ILL_PRVREG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "特权寄存器异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生在普通用户尝试访问特权寄存器时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ILL_COPROC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "协处理器异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生在程序尝试使用未定义的协处理器指令时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ILL_BADSTK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的堆栈异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生在程序尝试在无效的堆栈地址上执行操作时，或者是在堆栈溢出时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xacac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ILL_ILLPACCFI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指针校验异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生在程序校验指针失败时。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sigtrap崩溃类型",
      children: "SIGTRAP崩溃类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SIGTRAP信号通常用于调试和跟踪程序的执行。下面是SIGTRAP信号类别的问题场景介绍："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码（code）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "信号字符串"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解释"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "触发原因"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAP_BRKPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "软件断点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由软件断点引起的，当程序执行到设置的断点时会触发该信号。软件断点通常用于调试程序，可以在程序的关键位置设置断点，以便在调试时暂停程序的执行并检查变量值等信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAP_TRACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单步调试"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由单步执行引起的，当程序执行单个指令时会触发该信号。单步执行通常用于调试程序，可以逐步执行程序并检查每个指令的执行结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAP_BRANCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分支跟踪"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由分支指令引起的，当程序执行分支指令时会触发该信号。分支指令通常用于控制程序的执行流程，例如if语句和循环语句等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRAP_HWBKPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "硬件断点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由硬件断点引起的，当程序执行到设置的硬件断点时会触发该信号。硬件断点通常用于调试程序，可以在程序的关键位置设置断点，以便在调试时暂停程序的执行并检查变量值等信息。与软件断点不同的是，硬件断点是由CPU硬件实现的，因此可以在程序执行过程中实时检测断点是否被触发。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sigbus崩溃类型",
      children: "SIGBUS崩溃类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SIGBUS是一种由操作系统向进程发送的信号，通常表示内存访问错误。其中，不同的信号类别表示不同的错误场景："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码（code）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "信号字符串"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解释"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "触发原因"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUS_ADRALN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存地址对齐错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生在尝试访问未对齐的内存地址时，例如尝试访问一个4字节整数的非偶数地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUS_ADRERR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法内存地址错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生在尝试访问不属于进程地址空间的内存地址时，例如尝试访问一个空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUS_OBJERR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象访问错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生在尝试访问一个已经被删除或未初始化的对象时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUS_MCEERR_AR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需立即处理的硬件内存校验错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生在访问内存时检测到需要立即处理的硬件内存错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUS_MCEERR_AO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可等待或延迟处理的硬件内存校验错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发生在访问内存时检测到可等待或延迟处理的硬件内存错误。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sigfpe崩溃类型",
      children: "SIGFPE崩溃类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SIGFPE是一个信号，它表示浮点异常或算术异常。下面是这些SIGFPE信号类别的问题场景："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码（code）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "信号字符串"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解释"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "触发原因"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FPE_INTDIV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整数除法错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示整数除法中的除数为零的情况。当一个程序尝试进行整数除法，但除数为零时，会发出这个信号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FPE_INTOVF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整数溢出错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示整数溢出错误。当一个程序尝试进行整数运算，结果超出整数范围时，会发出这个信号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FPE_FLTDIV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浮点除法错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示浮点数除法中的除数为零的情况。当一个程序尝试进行浮点数除法，但除数为零时，会发出这个信号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FPE_FLTOVF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浮点上溢错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示浮点溢出错误。当一个程序尝试进行浮点数运算，结果超出浮点数上限范围时，会发出这个信号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FPE_FLTUND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浮点下溢错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示浮点下溢错误。当一个程序尝试进行浮点数运算，结果小于浮点数下限范围时，会发出这个信号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FPE_FLTRES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浮点结果未定义错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示浮点结果未定义错误。当一个程序尝试进行浮点数运算，结果未定义时，会发出这个信号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FPE_FLTINV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效浮点操作错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示无效浮点操作错误。当一个程序尝试进行无效的浮点数运算时，会发出这个信号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FPE_FLTSUB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浮点运算结果越界错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示浮点运算结果越界错误。当一个程序尝试进行浮点数运算，浮点数结果越界，会发出这个信号。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sigsegv崩溃类型",
      children: "SIGSEGV崩溃类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SIGSEGV是一种信号，它表示进程试图访问一个不属于它的内存地址，或者试图访问一个已被操作系统标记为不可访问的内存地址。SIGSEGV信号通常是由以下两种情况引起的："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码（code）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "信号字符串"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解释"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "触发原因"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEGV_MAPERR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不存在的内存地址"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程试图访问一个不存在的内存地址，或者试图访问一个没有映射到进程地址空间的内存地址。这种情况通常是由于程序中的指针错误或内存泄漏引起的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SEGV_ACCERR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可访问的内存地址"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程试图访问一个已被操作系统标记为不可访问的内存地址，例如向只读内存写入数据或执行没有执行权限的内存。这种情况通常是由于程序中的缓冲区溢出或者试图修改只读内存等错误引起的。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "信号产生原因分类",
      children: "信号产生原因分类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了以上根据信号值维度分类，还可以根据信号产生的原因维度分类。所有信号值都可以按照信号产生的原因分类，当前已有信号产生原因分类的code值如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码（code）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "信号字符串"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "解释"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "触发原因"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SI_USER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户空间信号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由用户空间的进程发送给进程的，通常是通过kill()系统调用发送的。例如，当用户在终端中按下Ctrl+C时，会发送一个SIGINT信号给前台进程组中的所有进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SI_KERNEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内核信号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由内核发送给进程的，通常是由内核检测到某些错误或异常情况时发出的。例如，当进程访问无效的内存地址或者执行非法指令时，内核会发送一个SIGSEGV信号给进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SI_QUEUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sigqueue()函数信号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由sigqueue()系统调用发送的，可以携带一个附加的整数值和一个指针。通常用于进程间高级通信，例如传递数据或者通知进程某个事件已经发生。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SI_TIMER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定时器信号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由定时器发送的，通常用于定时任务或者周期性任务的执行。例如，当一个定时器到期时，内核会向进程发送一个SIGALRM信号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SI_MESGQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "消息队列信号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由消息队列发送的，通常用于进程间通信。例如，当一个进程向一个消息队列发送消息时，内核会向接收进程发送一个MESGQ信号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SI_ASYNCIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步I/O信号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由异步I/O操作发送的，通常用于非阻塞I/O操作。例如，当一个文件描述符上的I/O操作完成时，内核会向进程发送一个ASYNCIO信号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SI_SIGIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步I/O信号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由同步I/O操作发送的，通常用于阻塞I/O操作。例如，当一个文件描述符上的I/O操作完成时，内核会向进程发送一个SIGIO信号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SI_TKILL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tkill()函数信号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由tkill()系统调用发送的，与kill()系统调用类似，但是可以指定发送信号的线程ID。通常用于多线程程序中，向指定线程发送信号。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不建议进程自己注册信号处理函数，进程崩溃后可能会延迟退出，当处理时间超过5s可能会导致进程无响应问题上报。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "“/data/log/faultlog/faultlogger”目录下同一进程/应用最多保存10份cppcrash日志，日志数量超限时会从最早生成该进程/应用的cppcrash日志开始删除直至数量不超限。建议开发者在开发调试阶段及时查看cppcrash日志，避免因cppcrash日志被删除而无法获取崩溃信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上述崩溃信号和35、38、42信号已经被系统注册信号处理函数，建议应用不要对这些信号注册信号处理函数，如果应用注册了可能会造成系统检测能力失效。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["异步线程栈跟踪维测功能默认仅在ARM 64位系统中开启。对于", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "API version 22"
          })
        }), "之前版本，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "三方和系统应用"
          })
        }), "通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/libuv/libuv",
          children: "libuv"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-module/capi-ffrt/capi-ffrt",
          children: "ffrt"
        }), "提交异步任务仅debug版本默认开启。对于", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "API version 22"
          })
        }), "及之后版本，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "三方应用"
          })
        }), "通过libuv提交异步任务debug和release版本均默认开启，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "三方和系统应用"
          })
        }), "通过ffrt提交异步任务仅debug版本默认开启。崩溃日志规格请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BC%82%E6%AD%A5%E7%BA%BF%E7%A8%8B%E6%A0%88%E8%B7%9F%E8%B8%AA%E6%95%85%E9%9A%9C%E5%9C%BA%E6%99%AF%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
          children: "异步线程栈跟踪故障场景日志规格"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志获取",
      children: "日志获取"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进程崩溃日志是故障日志中的一种，可通过以下方式获取："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式一：通过DevEco Studio获取日志"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio会收集设备“/data/log/faultlog/faultlogger/”路径下的进程崩溃故障日志到FaultLog下，根据进程名和故障类型分类显示。获取日志的方法参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-fault-log",
        children: "DevEco Studio使用指南-FaultLog"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式二：通过HiAppEvent接口订阅"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HiAppEvent给开发者提供了故障订阅接口，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-intro",
        children: "HiAppEvent介绍"
      }), "。参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-arkts",
        children: "订阅崩溃事件（ArkTS）"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events-ndk",
        children: "订阅崩溃事件（C/C++）"
      }), "完成崩溃事件订阅，并通过事件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events#%E4%BA%8B%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
        children: "external_log"
      }), "字段读取故障日志文件内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式三：通过hdc获取日志，需打开开发者选项"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发者选项打开的情况下，开发者可以通过“hdc file recv /data/log/faultlog/faultlogger D:\\”命令导出故障日志到本地，故障日志文件名格式为：cppcrash-进程名-进程UID-毫秒级时间.log。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志规格",
      children: "日志规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "故障日志的字段信息表如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "起始API版本"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "非必选说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "版本信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DeviceDebuggable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的系统版本是否可调试，和开发者选项无关"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fingerprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障特征，聚类同类问题的哈希值，不同日志该值相同表示为同一故障原因"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enabled app log configs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能的配置参数列表"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["仅用户配置时打印，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%BA%94%E7%94%A8%E9%80%9A%E8%BF%87hiappevent%E8%AE%BE%E7%BD%AE%E5%B4%A9%E6%BA%83%E6%97%A5%E5%BF%97%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0%E5%9C%BA%E6%99%AF%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
              children: "应用通过HiAppEvent设置崩溃日志配置参数场景日志规格"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Module name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模块名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ReleaseType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的版本类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["仅在应用进程提供，release表示应用为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section192461528194916",
              children: "release版本应用"
            }), "，debug表示应用为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section192461528194916",
              children: "debug版本应用"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CpuAbi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二进制接口类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅在应用进程提供。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用版本号(点分格式)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅在应用进程提供。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VersionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用版本号(整数格式)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅在应用进程提供。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IsSystemApp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用是否为系统应用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅在应用进程提供。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PreInstalled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否预制应用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅在应用进程提供。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foreground"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "前后台状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅在应用进程提供。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Page switch history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面切换轨迹"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果维测服务进程出现故障或未缓存切换轨迹，则不包含此字段，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86",
              children: "实现原理"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障发生时间戳"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiTraceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HiTraceChain唯一跟踪标识"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["仅故障线程开启HiTraceChain功能时提供，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-intro",
              children: "HiTraceChain介绍"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障进程名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process life time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障进程存活时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process Memory(kB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障进程内存占用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device Memory(kB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整机内存状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["依赖维测服务进程，若发生故障时维测服务进程停止或设备重启则无此字段，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86",
              children: "实现原理"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障原因"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LastFatalMessage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fatal消息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以下几种情况共用此字段：  解析到不可靠的栈帧地址时输出的提示信息；  因ABORT信号崩溃退出时保存最后一条FATAL级Hilog日志；  系统内部的维测信息；  应用通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines#%E6%B7%BB%E5%8A%A0%E7%BB%B4%E6%B5%8B%E4%BF%A1%E6%81%AF%E5%88%B0%E5%B4%A9%E6%BA%83%E6%97%A5%E5%BF%97%E4%B8%AD",
              children: "OH_HiDebug_SetCrashObj"
            }), "设置的字符串信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fault thread info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障线程信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SubmitterStacktrace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交者线程栈"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["异步线程栈跟踪维测功能默认仅在ARM 64位系统中开启。  对于", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "API version 22"
              })
            }), "之前版本，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "三方和系统应用"
              })
            }), "通过libuv和ffrt提交异步任务仅debug版本默认开启。  对于", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "API version 22"
              })
            }), "及之后版本，", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "三方应用"
              })
            }), "通过libuv提交异步任务debug和release版本均默认开启；", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "三方和系统应用"
              })
            }), "通过ffrt提交异步任务仅debug版本默认开启。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障现场寄存器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Other thread info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "其他线程信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory near registers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障现场寄存器附近内存值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FaultStack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障线程栈内存信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障时进程的内存空间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障时进程持有的文件句柄信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HiLog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障之前打印的流水日志，最多1000行"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[truncated]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "故障日志截断标志"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置故障日志截断大小并发生截断时。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(519337)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "API version 20"
        })
      }), "开始，故障现场寄存器中新增状态寄存器pstate和esr。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同的故障场景中日志规格略有不同，分以下七个场景的日志规格，示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%B8%80%E8%88%AC%E6%95%85%E9%9A%9C%E5%9C%BA%E6%99%AF%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
          children: "一般故障场景日志规格"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%A9%BA%E6%8C%87%E9%92%88%E8%A7%A3%E5%BC%95%E7%94%A8%E6%95%85%E9%9A%9C%E5%9C%BA%E6%99%AF%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
          children: "空指针解引用故障场景日志规格"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%A0%88%E6%BA%A2%E5%87%BA%E6%95%85%E9%9A%9C%E5%9C%BA%E6%99%AF%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
          children: "栈溢出故障场景日志规格"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%A0%88%E8%A6%86%E7%9B%96%E6%95%85%E9%9A%9C%E5%9C%BA%E6%99%AF%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
          children: "栈覆盖故障场景日志规格"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BC%82%E6%AD%A5%E7%BA%BF%E7%A8%8B%E6%A0%88%E8%B7%9F%E8%B8%AA%E6%95%85%E9%9A%9C%E5%9C%BA%E6%99%AF%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
          children: "异步线程栈跟踪故障场景日志规格"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BA%94%E7%94%A8%E9%80%9A%E8%BF%87hiappevent%E8%AE%BE%E7%BD%AE%E5%B4%A9%E6%BA%83%E6%97%A5%E5%BF%97%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0%E5%9C%BA%E6%99%AF%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
          children: "应用通过HiAppEvent设置崩溃日志配置参数场景日志规格"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%9C%89%E9%A1%B5%E9%9D%A2%E5%88%87%E6%8D%A2%E8%BD%A8%E8%BF%B9%E7%9A%84%E6%95%85%E9%9A%9C%E5%9C%BA%E6%99%AF%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
          children: "有页面切换轨迹的故障场景日志规格"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(594007)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下崩溃日志示例中\"<-\"右边的文字不是日志内容，是用来解释日志格式的说明文字。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "一般故障场景日志规格",
      children: "一般故障场景日志规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本节主要介绍崩溃日志的一般日志规格，其余节介绍特殊场景下日志规格，以下是一份DevEco Studio归档在FaultLog的进程崩溃日志的核心内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generated by HiviewDFX@HarmonyOS\n================================================================\nDevice info:HarmonyOS 3.2   <- 设备信息\nBuild info:HarmonyOS 5.1.0.101 <- 版本信息\nDeviceDebuggable:No <- 设备的系统版本是否可调试\nFingerprint:67bc4e29d8af56b6c0cbda154095949e83f3f1d6afe05bfc06c6cbb9f5591bb0 <- 标识故障特征\nModule name:com.example.myapplication <- 模块名\nReleaseType:debug <- 应用的版本类型\nCpuAbi:arm64-v8a <- 二进制接口类型\nVersion:1.0.0 <- 应用版本号(点分格式)\nVersionCode:1000000 <- 应用版本号(整数格式)\nIsSystemApp:No <- 应用是否为系统应用\nPreInstalled:No <- 是否预制应用\nForeground:Yes <- 前后台状态\nPage switch history: <- 页面切换轨迹\n  11:43:21.840 :enters foreground\n  11:43:17.317 :leaves foreground\n  11:42:46.780 :enters foreground\nTimestamp:2026-01-21 11:43:35.140 <- 故障发生时间戳\nPid:11941 <- 进程号\nUid:20020205 <- 用户ID\nHiTraceId:a92ab1c7eae68fa <- HiTraceChain唯一跟踪标识(非必选，故障线程无HiTraceId不打印)\nProcess name:com.example.myapplication <- 故障进程名\nProcess life time:50s <- 故障进程存活时间\nProcess Memory(kB): 185430(Rss) <- 故障进程内存占用\nDevice Memory(kB): Total 11688288, Free 2427804, Available 5592064 <- 整机内存状态（非必选）\nReason:Signal:SIGSEGV(SI_USER)@0x000000000000303e from:12350:0 <- 故障原因，详见信号值说明\nFault thread info:           <- 故障线程信息\nTid:11941, Name:.hiappeventtest  <- 故障线程号，线程名\n#00 pc 00000000001843f0 /system/lib/ld-musl-aarch64.so.1(epoll_wait+80)(6c643df40fcfff22745e25b37e2ca85b) <- 调用栈，调用顺序#06->#05->...->#00，最终在#00的函数中发生崩溃\n#01 pc 0000000000021b74 /system/lib64/chipset-sdk-sp/libeventhandler.z.so(OHOS::AppExecFwk::EpollIoWaiter::WaitFor(std::__h::unique_lock<std::__h::mutex>&, long, bool)+232)(ed7ae4e867a4ab26cb8c67afc737116c)\n#02 pc 00000000000273f8 /system/lib64/chipset-sdk-sp/libeventhandler.z.so(OHOS::AppExecFwk::EventQueue::WaitUntilLocked(std::__h::chrono::time_point<std::__h::chrono::steady_clock, std::__h::chrono::duration<long long, std::__h::ratio<1l, 1000000000l>>> const&, std::__h::unique_lock<std::__h::mutex>&, bool)+112)(ed7ae4e867a4ab26cb8c67afc737116c)\n#03 pc 000000000002c358 /system/lib64/chipset-sdk-sp/libeventhandler.z.so(OHOS::AppExecFwk::EventQueueBase::GetEvent()+168)(ed7ae4e867a4ab26cb8c67afc737116c)\n#04 pc 000000000001b148 /system/lib64/chipset-sdk-sp/libeventhandler.z.so(OHOS::AppExecFwk::(anonymous namespace)::EventRunnerImpl::Run()+808)(ed7ae4e867a4ab26cb8c67afc737116c)\n#05 pc 000000000001fa04 /system/lib64/chipset-sdk-sp/libeventhandler.z.so(OHOS::AppExecFwk::EventRunner::Run()+356)(ed7ae4e867a4ab26cb8c67afc737116c)\n#06 pc 00000000000f3a4c /system/lib64/platformsdk/libappkit_native.z.so(OHOS::AppExecFwk::MainThread::Start()+240)(e30f6c7f026034c7d6fa1692a05d3d69)\nRegisters:  <- 故障现场寄存器\nx0:fffffffffffffffc x1:0000007e5420ad60 x2:0000000000000008 x3:000000007fffffff\nx4:0000000000000000 x5:0000000000000008 x6:575f45524f464542 x7:474e49544941575f\nx8:0000000000000016 x9:0000000000000008 x10:0000007e5420ad60 x11:e18b0e5877a00005\nx12:000000003b9ac9ff x13:007070632e72656e x14:2f72656c646e6168 x15:8f94b1d6208ca9b4\nx16:0000005afeafe7d0 x17:0000005afb7f83a0 x18:000000000000000d x19:0000005b1b4dde10\nx20:0000005b0c5fcf20 x21:0000005b1b4ddda0 x22:7fffffafde60b8cc x23:0000005b1b4ddda0\nx24:0000007e5420af40 x25:0000000000000000 x26:0000000000000000 x27:00000055a511d354\nx28:0000005b1a937bc8 x29:0000007e5420ad20\nlr:0000005afeae1b78 sp:0000007e5420ad20 pc:0000005afb7f83f0\npstate:0000000020001000 esr:0000000000000000          <-  状态寄存器值（arm32架构为cpsr，aarch64架构为pstate和esr）\nOther thread info:      <- 其他线程信息\nTid:12006, Name:OS_IPC_0_120064 <- 线程号，线程名\n#00 pc 00000000001a4524 /system/lib/ld-musl-aarch64.so.1(ioctl+200)(6c643df40fcfff22745e25b37e2ca85b)\n#01 pc 0000000000012044 /system/lib64/platformsdk/libipc_common.z.so(OHOS::BinderConnector::WriteBinder(unsigned long, void*)+120)(036a4c254e8f85b2af1c2a4f4d540e45)\n#02 pc 0000000000070ae8 /system/lib64/platformsdk/libipc_single.z.so(OHOS::BinderInvoker::TransactWithDriver(bool)+284)(f9c345696cb6cee8d986e176f59f003d)\n#03 pc 0000000000070ed8 /system/lib64/platformsdk/libipc_single.z.so(OHOS::BinderInvoker::StartWorkLoop()+100)(f9c345696cb6cee8d986e176f59f003d)\nMemory near registers:  <-  故障现场寄存器的地址（地址必须在有效内存中）附近内存值，括号表示寄存器里的地址是在哪一段内存中\nx1([stack]):         <- 故障现场r1寄存器的地址附近内存值\n    0000007e5420ad50 0000000000000000\n    0000007e5420ad58 0000005afeaec828\n    0000007e5420ad60 0000000000000000\n    0000007e5420ad68 0000000000000000\n    ...\nx10([stack]):\n    0000007e5420ad50 0000000000000000\n    0000007e5420ad58 0000005afeaec828\n    0000007e5420ad60 0000000000000000\n    0000007e5420ad68 0000000000000000\n    0000007e5420ad70 0000000000000000\n    ...\nfp([stack]):\n    0000007e5420ad10 7fffffafde60b8cc\n    0000007e5420ad18 0000005b1b4ddda0\n    0000007e5420ad20 0000007e5420ae70\n    0000007e5420ad28 0000005afeae1b78\n    ...\nsp([stack]):\n    0000007e5420ad10 7fffffafde60b8cc\n    0000007e5420ad18 0000005b1b4ddda0\n    0000007e5420ad20 0000007e5420ae70\n    0000007e5420ad28 0000005afeae1b78\n    ...\nlr(/system/lib64/chipset-sdk-sp/libeventhandler.z.so):\n    0000005afeae1a80 2a1f03e0940067e8\n    0000005afeae1a88 b00000ef17ffff7c\n    0000005afeae1a90 ca1d01eff945a5ef\n    0000005afeae1a98 d503237fca1e01ef\n    ...\npc(/system/lib/ld-musl-aarch64.so.1):\n    0000005afb7f82f8 f9000bf3a9be7bfd\n    0000005afb7f8300 f0001bc8910003fd\n    0000005afb7f8308 aa0103eaaa0403e5\n    0000005afb7f8310 93407c4993407c01\n    ...\nFaultStack: <- 崩溃线程的栈地址空间\n    0000007e5420ac20 0000007e00000072\n    0000007e5420ac28 73615474736f5010\n    0000007e5420ac30 0000007e5420006b\n    0000007e5420ac38 ffffff80fffffff8\n    ...\nsp0:0000007e5420ad20 0000007e5420ae70 <- #00层栈帧顶部位置\n    0000007e5420ad28 0000005afeae1b78\n    ...\nsp1:0000007e5420ad40 0000007e5420aed0\n    0000007e5420ad48 815c005afeaec858\n    ...\nsp2:0000007e5420aee0 0000007e5420af50\n    0000007e5420aee8 7835005afeaec35c\n    ...\nsp3:0000007e5420af20 00000050219e3694\n    0000007e5420af28 0000000000000000\n    ...\n\nMaps: <- 故障时进程的内存空间\n55a511d000-55a5128000 r--p 00000000 /system/bin/appspawn\n55a5128000-55a513b000 r-xp 0000a000 /system/bin/appspawn\n55a513b000-55a513c000 r--p 0001c000 /system/bin/appspawn\n55a513c000-55a513e000 rw-p 0001c000 /system/bin/appspawn\n...\n5b0c3cf000-5b0c64f000 rw-p 00000000 [anon:native_heap:jemalloc]\n5b19605000-5b1d505000 rw-p 00000000 [anon:native_heap:jemalloc]\n5b20100000-5b20107000 r--p 00000000 /system/lib64/platformsdk/libhdc_register.z.so\n5b20107000-5b20110000 r-xp 00006000 /system/lib64/platformsdk/libhdc_register.z.so\n5b20110000-5b20112000 r--p 0000e000 /system/lib64/platformsdk/libhdc_register.z.so\n5b20112000-5b20113000 rw-p 0000f000 /system/lib64/platformsdk/libhdc_register.z.so\n7e53a0d000-7e5420c000 rw-p 00000000 [stack]\n7e55b92000-7e55b93000 rw-p 00000000 [anon:libark_tooling.so.bss]\nOpenFiles: <- 故障时进程持有文件句柄信息\n0->/dev/null native object of unknown type 0\n1->/dev/null native object of unknown type 0\n2->/dev/null native object of unknown type 0\n3->socket:[2671] native object of unknown type 218115328\n6->socket:[2793] native object of unknown type 0\n36->/dev/urandom native object of unknown type 0\n\nHiLog: <- 故障之前进程打印的流水日志\n01-21 11:43:35.140 11941 11941 I C02D11/DfxSignalHandler: DFX_SigchainHandler :: signo(11), si_code(0), pid(11941), tid(11941).\n01-21 11:43:35.140 11941 11941 I C02D11/DfxSignalHandler: DFX_SigchainHandler :: signo(11), pid(11941), processName(com.example.hiappeventtest), threadName(.hiappeventtest).\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HiTraceId说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HiTraceId：HiTraceChain提供的唯一跟踪标识，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-intro",
        children: "HiTraceChain介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "调用栈帧内容说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以三层调用栈为例，详细解释调用栈帧内容："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#00 pc 000e8400 /system/lib/ld-musl-arm.so.1(raise+176)(a40044d0acb68107cfc4adb5049c0725)\n#01 pc 00006e95 /data/crasher_cpp(DfxCrasher::RaiseSegmentFaultException()+92)(d6cead5be17c9bb7eee2a9b4df4b7626)\n#02 pc 00008909 /data/crasher_cpp(DfxCrasher::ParseAndDoCrash(char const*) const+612)(d6cead5be17c9bb7eee2a9b4df4b7626)\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "序号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "pc在文件内的偏移字节数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "pc属于内存段的文件名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "函数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "函数内偏移的字节数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BuildID"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "000e8400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/system/lib/ld-musl-arm.so.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "raise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "176"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a40044d0acb68107cfc4adb5049c0725"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00006e95"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/data/crasher_cpp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DfxCrasher::RaiseSegmentFaultException()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "92"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d6cead5be17c9bb7eee2a9b4df4b7626"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00008909"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/data/crasher_cpp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DfxCrasher::ParseAndDoCrash(char const*) const"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "612"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d6cead5be17c9bb7eee2a9b4df4b7626"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(993907)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件名也有可能是匿名内存映射，比如[heap]、[stack]等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "日志没有打印函数名可能是由于以下两种原因："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "二进制文件中没有保存该函数名信息。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "二进制文件中保存的函数名长度超过256字节。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["函数名是通过解析二进制符号表和", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://sourceware.org/gdb/current/onlinedocs/gdb.html/MiniDebugInfo.html",
            children: "MiniDebugInfo"
          }), "得来，", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "可能会随版本函数名变更、编译优化等原因而改变"
            })
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果没打印BuildID，可以通过readelf -n xxx.so确认二进制是否有BuildID。如果没有则尝试在编译选项里增加编译参数--enable-linker-build-id，同时注意编译选项中不要加编译参数--build-id=none。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JS混合栈帧内容说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ARM 64位系统支持抓取CPP和JS之间跨语言的调用栈，因此如果在函数调用链上有JS代码，崩溃日志还会打印如下格式的JS代码调用栈："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#00 at onPageShow (entry|har1|1.0.0|src/main/ets/pages/Index.ts:7:13)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细说明", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines#%E5%BC%82%E5%B8%B8%E4%BB%A3%E7%A0%81%E8%B0%83%E7%94%A8%E6%A0%88%E6%A0%BC%E5%BC%8F",
        children: "JS异常代码调用栈格式规范"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "空指针解引用故障场景日志规格",
      children: "空指针解引用故障场景日志规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "空指针解引用通常有以下两个常见的场景："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.形如SIGSEGV(SEGV_MAPERR)@0x00000000或cppcrash日志的Register中打印的r0，r1等传参寄存器的值为0，应首先考虑调用时是否传入了空指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.形如SIGSEGV(SEGV_MAPERR)@0x0000000c（小于一个内存页大小）或cppcrash日志Register中打印的r1等传参寄存器的值为一个很小的值时应考虑调用入参的结构体成员是否包含空指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该场景会在日志中打印出提示信息，表明故障很有可能是因为空指针解引用导致。以下是一份DevEco Studio归档在FaultLog的进程崩溃日志的核心内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generated by HiviewDFX@HarmonyOS\n================================================================\nDevice info:HarmonyOS 3.2   <- 设备信息\nBuild info:HarmonyOS 5.1.0.101 <- 版本信息\nDeviceDebuggable:No <- 设备的系统版本是否可调试\nFingerprint:125680eed3692695a944851a4e6e61500e9633c49224b68e02c0d6789a7e8c2a <- 标识故障特征\nModule name:crasher_cpp            <- 模块名\nTimestamp:2026-01-21 14:29:01.652  <- 故障发生时间戳\nPid:46314   <- 进程号\nUid:0         <- 用户ID\nHiTraceId:a92ab1722d9f297  <-HiTraceChain唯一跟踪标识(非必选，故障线程无HiTraceId不打印)\nProcess name:./crasher_cpp         <- 故障进程名\nProcess life time:1s               <- 故障进程存活时间\nProcess Memory(kB): 8286(Rss)     <- 故障进程内存占用\nDevice Memory(kB): Total 11688288, Free 2590168, Available 6153216 <- 整机内存状态（非必选）\nReason:Signal:SIGSEGV(SEGV_MAPERR)@0x0000000000000004  probably caused by NULL pointer dereference   <- 故障原因和空指针提示\nFault thread info:\nTid:46314, Name:crasher_cpp         <- 故障线程号，线程名\n#00 pc 000000000001092c /data/crasher_cpp(TestNullPointerDereferenceCrash0()+48)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n#01 pc 000000000000bd50 /data/crasher_cpp(DfxCrasher::ParseAndDoCrash(char const*) const+616)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n#02 pc 000000000000c530 /data/crasher_cpp(main+1160)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n#03 pc 00000000000af9b0 /system/lib/ld-musl-aarch64.so.1(libc_start_main_stage2+80)(6c643df40fcfff22745e25b37e2ca85b)\nRegisters:   <- 故障现场寄存器\nx0:0000005704762398 x1:0000007e60d9d8ac x2:0000000000000001 x3:0000005b2efaa268\nx4:00000057047620c1 x5:0000005b2f288ea9 x6:6e696f506c6c754e x7:6665726544726574\nx8:0000000000000004 x9:13a5bcd2d1efb552 x10:0000005b2efaa290 x11:503a3a65636e6572\nx12:626d654d746e6972 x13:3a65756c61567265 x14:000000000000000c x15:0000000000000000\nx16:0000005704773120 x17:0000005b2ef6cb94 x18:0000000000000000 x19:0000007e60d9d940\nx20:0000007e60d9d9a8 x21:0000007e60d9d909 x22:0000005704771c68 x23:000000570476fba8\nx24:000000570476fc40 x25:0000000000000d20 x26:0000000000000001 x27:0000005b2efa6000\nx28:0000005b2efaa838 x29:0000007e60d9d8f0\nlr:000000570476d920 sp:0000007e60d9d8f0 pc:000000570476d92c\npstate:0000000060001000 esr:0000000092000005          <-  状态寄存器值（arm32架构为cpsr，aarch64架构为pstate和esr）\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "栈溢出故障场景日志规格",
      children: "栈溢出故障场景日志规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下三种场景可能出现栈溢出："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "递归调用时未设置递归终止条件导致栈内存耗尽。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "局部变量占用过多栈内存导致栈内存耗尽。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在信号栈中使用超过系统限制的栈内存。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以递归调用时未设置递归终止条件导致栈内存耗尽为例，示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static void *DoStackOverflow(void * inputArg) __attribute__((optnone))\n{\n    int b[10] = {1};\n    if (b[0] == 0) {\n        return static_cast<void*>(b + 9); // 9: last element of array\n    }\n    DoStackOverflow(inputArg); // 多次递归调用，导致栈内存耗尽后在栈的范围外进行内存的读写，产生崩溃。\n    return static_cast<void*>(b + 9); // 9: last element of array\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该场景会在日志中打印出提示信息，表明故障很有可能是由于栈溢出导致。以下是一份DevEco Studio归档在FaultLog的进程崩溃日志的核心内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generated by HiviewDFX@HarmonyOS\n================================================================\nDevice info:HarmonyOS 3.2   <- 设备信息\nBuild info:HarmonyOS 5.1.0.101 <- 版本信息\nDeviceDebuggable:No <- 设备的系统版本是否可调试\nFingerprint:efeb9bc182c8eedd0cb5672809fcc02a2ceb65050589c1512ce30cd62469ed03  <- 标识故障特征\nModule name:crasher_cpp                <- 模块名\nTimestamp:2026-01-21 14:32:29.539      <- 故障发生时间戳\nPid:47049                            <- 进程号\nUid:0                                  <- 用户ID\nHiTraceId:a92ab1c7eae68fa  <- HiTraceChain唯一跟踪标识(非必选，故障线程无HiTraceId不打印)\nProcess name:./crasher_cpp             <- 故障进程名\nProcess life time:2s                  <- 故障进程存活时间\nProcess Memory(kB): 8306(Rss)     <- 故障进程内存占用\nDevice Memory(kB): Total 11688288, Free 2595812, Available 6161408 <- 整机内存状态（非必选）\nReason:Signal:SIGSEGV(SEGV_ACCERR)@0x0000005b517d3fd0  current thread stack low address = 0x0000005b517d4000, probably caused by stack-buffer-overflow    <- 故障原因和栈溢出提示\nFault thread info:\nTid:47050, Name:crasher_cpp\n#00 pc 000000000000a11c /data/crasher_cpp(DoStackOverflow(void*)+36)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n#01 pc 000000000000a15c /data/crasher_cpp(DoStackOverflow(void*)+100)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n#02 pc 000000000000a15c /data/crasher_cpp(DoStackOverflow(void*)+100)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n#03 pc 000000000000a15c /data/crasher_cpp(DoStackOverflow(void*)+100)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n#04 pc 000000000000a15c /data/crasher_cpp(DoStackOverflow(void*)+100)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n#05 pc 000000000000a15c /data/crasher_cpp(DoStackOverflow(void*)+100)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "栈覆盖故障场景日志规格",
      children: "栈覆盖故障场景日志规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栈覆盖故障场景是指业务代码运行时改写了原本保存函数调用信息的栈内存，导致无法成功回溯调用栈。系统在回栈失败后尽可能提供开发者信息以分析问题，该场景会在日志中打印信息提示从#xx开始尝试从线程栈内存里解析不可靠的调用栈。之所以说不可靠的调用栈，是因为调用栈可能不是一个完整的函数调用链路，从#xx层往下的调用栈是不可靠的，意味着从#xx层开始相邻两层栈之间可能不存在调用关系，需要开发者结合业务代码分析其中的调用链路，比如下例中正确的调用关系是#05->#04->#03->#01。以下是一份DevEco Studio归档在FaultLog的进程崩溃日志的核心内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generated by HiviewDFX@HarmonyOS\n================================================================\nDevice info:HarmonyOS 3.2   <- 设备信息\nBuild info:HarmonyOS 5.1.0.101 <- 版本信息\nDeviceDebuggable:No <- 设备的系统版本是否可调试\nFingerprint:494b19375266bbefaa667b860e9404317deae24200320b2b8afbe2781476167c    <- 标识故障特征\nModule name:crasher_cpp                   <- 模块名\nTimestamp:2026-01-21 14:42:02.675  <- 故障发生时间戳\nPid:49315                                 <- 进程号\nUid:0                                     <- 用户ID\nHiTraceId:a92ab1753aa4af0  <- HiTraceChain唯一跟踪标识(非必选，故障线程无HiTraceId不打印)\nProcess name:./crasher_cpp                <- 故障进程名\nProcess life time:1s                      <- 故障进程存活时间\nProcess Memory(kB): 8245(Rss)            <- 故障进程内存占用\nDevice Memory(kB): Total 11688288, Free 2570076, Available 6149120 <- 整机内存状态（非必选）\nReason:Signal:SIGILL(ILL_ILLOPN)@000000000000000000      <- 故障原因\nLastFatalMessage:Failed to unwind stack, try to get unreliable call stack from #01 by reparsing thread stack. <- #00和#01一般认为是可信的，从#02开始尝试从线程栈内存里解析不可靠的调用栈\nFault thread info:\nTid:49315, Name:crasher_cpp               <- 故障线程号，线程名\n#00 pc 00000000000096b0 /data/crasher_cpp(RecursiveHelperFunction(int, int, int)+160)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n#01 pc 0000000000009650 /data/crasher_cpp(RecursiveHelperFunction(int, int, int)+64)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n#02 pc 000000000000968c /data/crasher_cpp(RecursiveHelperFunction(int, int, int)+124)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n#03 pc 000000000000968c /data/crasher_cpp(RecursiveHelperFunction(int, int, int)+124)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n#04 pc 000000000000968c /data/crasher_cpp(RecursiveHelperFunction(int, int, int)+124)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n#05 pc 000000000000968c /data/crasher_cpp(RecursiveHelperFunction(int, int, int)+124)(16bde6cdd3f8bb6d20de4e68c210ee7c)\n...\nRegisters:\nx0:0000000000000000 x1:0000000000000000 x2:0000000000000000 x3:0000007f7264b180\nx4:0000007f7264b200 x5:0000000000000004 x6:3162343632376637 x7:3030316234363237\nx8:0000000000000100 x9:0000000000000000 x10:0000000000000078 x11:0000000000000000\nx12:0000007f7264ada8 x13:00000059ece0863d x14:0000000000000001 x15:0000000000000000\nx16:00000059ee950538 x17:00000059ecf2b880 x18:0000000000000000 x19:0000000000000000\nx20:0000000000000000 x21:0000007f7264b909 x22:00000056855f8b18 x23:00000056855f6ba8\nx24:00000056855f6c40 x25:0000000000000e70 x26:0000000000000001 x27:00000059ecfea000\nx28:00000059ecfee838 x29:0000000000000000\nlr:0000000000000000 sp:0000007f7264b120 pc:00000056855ed6b0\npstate:0000000060001000 esr:0000000000000000\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "异步线程栈跟踪故障场景日志规格",
      children: "异步线程栈跟踪故障场景日志规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当异步线程发生崩溃后，把提交该异步任务的线程栈也打印出来，帮助定位由于异步任务提交者造成的崩溃问题。崩溃线程的调用栈和其提交线程的调用栈通过SubmitterStacktrace字符串分隔。以下是一份DevEco Studio归档在FaultLog的进程崩溃日志的核心内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(930416)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步线程栈跟踪维测功能默认仅在ARM 64位系统中开启。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "API version 22"
        })
      }), "之前版本，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "三方和系统应用"
        })
      }), "通过libuv和ffrt提交异步任务仅debug版本默认开启。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "API version 22"
        })
      }), "及之后版本，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "三方应用"
        })
      }), "通过libuv提交异步任务debug和release版本均默认开启，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "三方和系统应用"
        })
      }), "通过ffrt提交异步任务仅debug版本默认开启。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generated by HiviewDFX@HarmonyOS\n================================================================\nDevice info:HarmonyOS 3.2        <- 设备信息\nBuild info:HarmonyOS 5.0.0.23    <- 版本信息\nDeviceDebuggable:No <- 设备的系统版本是否可调试\nFingerprint:8bc3343f50024204e258b8dce86f41f8fcc50c4d25d56b24e71fe26c0a23e321  <- 标识故障特征\nModule name:crasher_cpp                     <- 模块名\nTimestamp:2024-05-06 20:28:24.000           <- 故障发生时间戳\nPid:9838                                    <- 进程号\nUid:0                                       <- 用户ID\nHiTraceId:a92ab1c7eae68fa  <- HiTraceChain唯一跟踪标识(非必选，故障线程无HiTraceId不打印)\nProcess name:./crasher_cpp                  <- 故障进程名\nProcess life time:2s                        <- 故障进程存活时间\nProcess Memory(kB): 11902(Rss)            <- 故障进程内存占用\nDevice Memory(kB): Total 1935820, Free 516244, Available 1205608 <- 整机内存状态（非必选）\nReason:Signal:SIGSEGV(SI_TKILL)@0x000000000004750  from:18256:0  <- 故障原因\nFault thread info:\nTid:18257, Name:crasher_cpp                 <- 故障线程号，线程名\n#00 pc 00000000000054e6 /system/bin/ld-musl-aarch64.so.l(raise+228)(adfc673300571d2da1e47d1d12f48b44)  <- 调用栈\n#01 pc 00000000000054f9 /system/bin/crasher_cpp(CrashInSubThread(void*)+56)(adfc673300571d2da1e47d1d12f48b50)\n#02 pc 00000000000054f9 /system/bin/ld-musl-aarch64.so.l(start+236)(adfc673300571d2da1e47d1d12f48b44)\n========SubmitterStacktrace========       <- 任务异常时打印任务提交者调用栈\n#00 pc 00000000000094dc /system/bin/crasher_cpp(DfxCrasher::AsyncStacktrace()+36)(adfc673300571d2da1e47d1d12f48b50)\n#01 pc 0000000000009a58 /system/bin/crasher_cpp(DfxCrasher::ParseAndDoCrash(char const*) const+232)(adfc673300571d2da1e47d1d12f48b50)\n#02 pc 0000000000009b40 /system/bin/crasher_cpp(main+140)(adfc673300571d2da1e47d1d12f48b50)\n#03 pc 00000000000a4e1c /system/bin/ld-musl-aarch64.so.l(libc_start_main_stage2+68)(adfc673300571d2da1e47d1d12f48b44)\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用通过hiappevent设置崩溃日志配置参数场景日志规格",
      children: "应用通过HiAppEvent设置崩溃日志配置参数场景日志规格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统提供了通用的崩溃日志生成功能，但一些应用对崩溃日志打印内容有个性化的需求，因此从", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "API version 20"
        })
      }), "开始HiAppEvent的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events#%E5%B4%A9%E6%BA%83%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE",
        children: "setEventConfig"
      }), "接口支持设置崩溃日志配置参数。以下是一份DevEco Studio归档在FaultLog的32位系统崩溃日志的核心内容："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "...\nBuild info:HarmonyOS 5.0.0.23\n...\nEnabled app log configs:    <- 使能的配置参数列表，只打印不是默认值的配置参数\nExtend pc lr printing:true  <- extend_pc_lr_printing参数设置为true\nLog cut off size:102400B    <- 崩溃日志大小截断到100KB（仅通过HiAppEvent接口订阅获取的崩溃日志生效）\nSimplify maps printing:true <- simplify_vma_printing参数设置为true\nTimestamp:2026-01-08 11:25:46.000\n...\nRegisters: <- 故障现场寄存器\nx0:fffffffffffffffc x1:0000007e5420ad60 x2:0000000000000008 x3:000000007fffffff\nx4:0000000000000000 x5:0000000000000008 x6:575f45524f464542 x7:474e49544941575f\nx8:0000000000000016 x9:0000000000000008 x10:0000007e5420ad60 x11:e18b0e5877a00005\nx12:000000003b9ac9ff x13:007070632e72656e x14:2f72656c646e6168 x15:8f94b1d6208ca9b4\nx16:0000005afeafe7d0 x17:0000005afb7f83a0 x18:000000000000000d x19:0000005b1b4d4d50\nx20:0000005b0c5fcf20 x21:0000005b1b4d4ce0 x22:7fffa71517841b1d x23:0000005b1b4d4ce0\nx24:0000007e5420af40 x25:0000000000000000 x26:0000000000000000 x27:00000055a511d354\nx28:0000005b1a937bc8 x29:0000007e5420ad20\nlr:0000005afeae1b78 sp:0000007e5420ad20 pc:0000005afb7f83f0\npstate:0000000020001000 esr:0000000000000000\nMemory near registers:\n...\nlr(/system/lib64/chipset-sdk-sp/libeventhandler.z.so): <- lr寄存器地址附近的内存值\n    0000005afeae1a80 2a1f03e0940067e8 <- extend_pc_lr_printing设置为true时，向前打印内存值到此\n    ...\n    0000005afeae1b68 910083e19a89b103 <- extend_pc_lr_printing设置为false时，向前打印内存值到此\n    0000005afeae1b70 9400680b52800102\n    0000005afeae1b78 885ffe682a0003f7 <- lr寄存器地址（0000005afeae1b78）的内存值（885ffe682a0003f7）\n    ...\n    0000005afeae1c60 52801002d10243a1 <- extend_pc_lr_printing设置为false时，向后打印内存值到此\n    0000005afeae1c68 ad3c83a0ad3b83a0\n    0000005afeae1c70 ad3e83a0ad3d83a0\n    0000005afeae1c78 94006799b9400000 <- extend_pc_lr_printing设置为true时，向后打印内存值到此\npc(/system/lib/ld-musl-aarch64.so.1): <- pc寄存器地址附近的内存值\n    0000005afb7f82f8 f9000bf3a9be7bfd <- extend_pc_lr_printing设置为true时，向前打印内存值到此\n    ...\n    0000005afb7f83e0 aa1f03e4aa0403e3 <- extend_pc_lr_printing设置为false时，向前打印内存值到此\n    0000005afb7f83e8 d400000152800105\n    0000005afb7f83f0 eb00811fb25453e8 <- pc寄存器地址（0000005afb7f83f0）的内存值（eb00811fb25453e8）\n    ...\n    0000005afb7f84d8 aa0903e152800260 <- extend_pc_lr_printing设置为false时，向后打印内存值到此\n    0000005afb7f84e0 d63f0100f9439508\n    0000005afb7f84e8 a9be7bfd17ffffe6\n    0000005afb7f84f0 910003fdf9000bf3 <- extend_pc_lr_printing设置为true时，向后打印内存值到此\n...\nMaps:       <- simplify_vma_printing设置为true，打印Maps数量减少，只保留崩溃日志中出现的地址所属的Maps\n55a511d000-55a5128000 r--p 00000000 /system/bin/appspawn\n55a5128000-55a513b000 r-xp 0000a000 /system/bin/appspawn\n55a513b000-55a513c000 r--p 0001c000 /system/bin/appspawn\n55a513c000-55a513e000 rw-p 0001c000 /system/bin/appspawn\n... <- 继续打印崩溃日志中出现的地址所属的Maps，此处省略不展示\nOpenFiles:\n...\n[truncated]  <- 日志截断的标志符，如果有打印说明日志被截断了\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "有页面切换轨迹的故障场景日志规格",
      children: "有页面切换轨迹的故障场景日志规格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对包含页面切换的应用，自API 20起，维测进程会记录应用切换历史。应用发生故障后，生成的故障文件将包含页面切换历史轨迹。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "故障日志文件最多记录最新的10条历史轨迹。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "...\nForeground:Yes\nPage switch history:\n  14:08:30:327 /ets/pages/Index:JsError\n  14:08:28:986 /ets/pages/Index\n  14:08:07:606 :leaves foreground\n  14:08:06:246 /ets/pages/Index:AppFreeze\n  14:08:01:955 :enters foreground\nTimestamp:2025-08-20 14:08:30:327\nPid:10208\nUid:0\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单条记录的格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  14:08:30:327 /ets/pages/Index:JsError\n       ^             ^            ^\n    切换时间      页面URL       页面名\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(554415)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅在通过Navigation跳转到子页面时才会有页面名，页面名在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-cross-package#%E7%B3%BB%E7%BB%9F%E8%B7%AF%E7%94%B1%E8%A1%A8",
        children: "系统路由表"
      }), "中定义。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用发生前后台切换时，对应的页面URL为空，但是会将enters foreground、leaves foreground作为特殊的页面名进行填充。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enters foreground：应用进入前台运行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "leaves foreground：应用在后台运行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cppcrash聚类",
      children: "CppCrash聚类"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "聚类简介",
      children: "聚类简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用程序在不同版本或同一版本的不同时间产生的Cpp Crash可能为同一原因，但在Cpp crash故障日志中生成的大部分信息会随版本、时间等因素变化，无法快速确定是否为重复问题；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cpp Crash故障信息包含系统侧和应用侧的调用栈，不利于应用开发者快速排查应用侧的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，为避免重复分析多份故障信息，提高应用故障问题的分析效率，需要对Cpp Crash故障信息进行聚类；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时，聚类也能帮助开发者对不同原因问题进行分类统计。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "聚类信息范围",
      children: "聚类信息范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cpp Crash故障日志信息中的故障线程信息表示业务线程发生故障时代码调用信息，相同的故障线程调用栈信息必然表示相同的故障原因。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，将故障线程信息作为聚类范围是最为准确的，开发者可根据业务聚类的需求调整增加其他故障日志的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "故障线程信息在Cpp Crash故障日志中从“Fault thread info:”开始，到“Registers:”结束，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "...\nFault thread info:\nTid:10208, Name:crasher_cpp\n#00 pc 000e8400 /system/lib/ld-musl-arm.so.1(raise+176)(a40044d0acb68107cfc4adb5049c0725)\n#01 pc 00008cdc /data/storage/el1bundle/libs/arm64/libsample.so(8b74cdc906ea6b2eba95d891bc91c72a)\n#02 pc 0005ae00 /system/lib/platformsdk/libace_napi.z.so(panda::JSValueRef ArkNativeFunctionCallBack<true>(panda::JsiRuntimeCallInfo*)+272)(bc1c64aabbe5c7d4db2282a6137443e1)\n#03 pc 00de3efc /system/lib/module/arkcompiler/stub.an(RTStub_PushCallArgsAndDispatchNative+44)\n#04 pc 00448dd4 /system/lib/module/arkcompiler/stub.an(BCStub_HandleCallthis0Imm8V8StwCopy+372)\n#05 at triggerCrash (sample|sample|1.0.0|src/main/ets/pages/CppCrash.ts:49:25)\n#06 at onPageShow (sample|sample|1.0.0|src/main/ets/pages/Index.ts:381:36)\n#07 pc 001e5c8c /system/lib/platformsdk/libark_jsruntime.so(ce0b05d90b9fae02e7abf8e9f1e5a0f3)\n...\nRegisters:\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "提取聚类信息",
      children: "提取聚类信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "故障线程信息，除线程名和线程号外，主要为调用栈信息，可以通过正则匹配筛选堆栈内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于系统或应用的版本不同，调用栈中会存在一些易变的信息（如行号、字节偏移、BuildID），因此需要对信息做提取和过滤操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议对每一帧栈帧，执行以下操作："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Native栈帧标准化："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原始栈帧内容"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "标准化后栈帧内容"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#02 pc 0005ae00 /system/lib/platformsdk/libace_napi.z.so(panda::JSValueRef ArkNativeFunctionCallBack<true>(panda::JsiRuntimeCallInfo*)+272)(bc1c64aabbe5c7d4db2282a6137443e1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "/system/lib/platformsdk/libace_napi.z.so(panda::JSValueRef ArkNativeFunctionCallBack<true>(panda::JsiRuntimeCallInfo*)+272)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按以下步骤处理："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a. 去除行号；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "b. 去除PC偏移和BuildID；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "c. 保留文件路径（如 /system/lib/platformsdk/libace_napi.z.so）；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "d. 保留函数完整签名（如 panda::JSValueRef ArkNativeFunctionCallBack<true>(panda::JsiRuntimeCallInfo*)+272)，括号内的内容，含类名、函数名、参数，包括 const、参数类型等，若日志中已解析）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若Native栈帧存在仅有二进制文件名而没有函数名时，可选择保留PC的偏移值与文件路径："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原始栈帧内容"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "标准化后栈帧内容"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#01 pc 00008cdc /data/storage/el1bundle/libs/arm64/libsample.so(8b74cdc906ea6b2eba95d891bc91c72a)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "00008cdc /data/storage/el1bundle/libs/arm64/libsample.so"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JS栈帧标准化："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原始栈帧内容"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "标准化后栈帧内容"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#06 at onPageShow (sample"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sample"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按以下步骤处理："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a. 去除行号；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "b. 保留函数名（如 onPageShow）；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "c. 保留文件路径、代码行号和列号（如 src/main/ets/pages/Index.ts:381:36）；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "d. 保留模块名、依赖模块名、版本号信息（如sample|sample|1.0.0|）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "提取聚类特征",
      children: "提取聚类特征"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "经过标准化的栈帧可能仍然存在栈帧较多，不利于聚类后存储以及查询的情况，因此开发者需要根据业务情况制定聚类特征提取方法，将栈帧信息进一步简化为聚类特征。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为推荐的聚类特征提取方法："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 过滤基础库与异常栈帧"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "即栈帧包含如下字段之一："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libc.so\nlibc++.so\nld-musl-aarch64.so\nlibc_fdleak_debug.so\nunknown\nwatchdog\nkthread\nrdr_system_error\nlibart.so\n__switch_to\ndump_backtrace\nshow_stack\ndump_stack\npanic\nlibace_napi.z.so\nlibarkjs_runtime.z.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 过滤系统栈帧，筛选业务栈帧"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统库栈帧以“/system/lib”或“/system/lib64”为起始字符，系统栈帧格式示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/system/lib/platformsdk/libace_napi.z.so(panda::JSValueRef ArkNativeFunctionCallBack\\<true\\>(panda::JsiRuntimeCallInfo*)+272)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "业务栈帧以“at”为起始字符，或包含“/data”、“/data/storage”子串。业务栈帧格式示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS栈帧默认为业务栈帧："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onPageShow (sample|sample|1.0.0|src/main/ets/pages/Index.ts:381:36)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用的Native栈帧："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "00008cdc /data/storage/el1bundle/libs/arm64/libsample.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3. 筛选部分关键栈帧"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照栈帧的顺序提取少量信息作为聚类特征，例如仅保留第一帧、第二帧和最后一帧信息作为特征信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可根据业务需求制定相应的筛选条件，保证特征信息在同一故障问题上一致即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生成聚类特征",
      children: "生成聚类特征"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最终生成的聚类特征是一个包含少量标准化栈帧的业务调用栈序列。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "原始故障线程栈"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "最终聚类特征（调用顺序从上到下）"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#00 pc 000e8400 /system/lib/ld-musl-arm.so.1  (raise+176)(a40044d0acb68107cfc4adb5049c0725)  #01 pc 00008cdc /data/storage/el1bundle/libs/arm64/libsample.so  (8b74cdc906ea6b2eba95d891bc91c72a)  #02 pc 0005ae00 /system/lib/platformsdk/libace_napi.z.so  (panda::JSValueRef ArkNativeFunctionCallBack<true>(panda::JsiRuntimeCallInfo*)+272)(bc1c64aabbe5c7d4db2282a6137443e1)  #03 pc 00de3efc /system/lib/module/arkcompiler/stub.an(RTStub_PushCallArgsAndDispatchNative+44)  #04 pc 00448dd4 /system/lib/module/arkcompiler/stub.an(BCStub_HandleCallthis0Imm8V8StwCopy+372)  #05 at triggerCrash (sample"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sample"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过比对多份故障日志提取出的聚类特征，对Cpp Crash故障问题进行分类统计。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "也可以参考当前故障日志中的Fingerprint字段，对聚类特征内容进行哈希运算生成故障特征标识值，再根据故障特征标识值对Cpp Crash故障问题进行分类统计。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cpp-crash常见问题",
      children: "Cpp Crash常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "故障日志中调用栈出现中断",
      children: "故障日志中调用栈出现中断"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在HarmonyOS系统中，调用栈获取依赖回栈表（记录调用栈信息的表）和frame pointer（栈帧指针）两种机制，需要保证以下两个编译选项开启："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-funwind-tables"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该选项指示编译器在二进制中生成回栈表，用于异常处理和调用栈回溯。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-fno-omit-frame-pointer"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该选项指示编译器将栈帧指针存储在一个寄存器中，用于异常处理和调用栈回溯。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "编译选项开启方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以Cmake为例，在CMakeList.txt中添加set(CMAKE_CXX_FLAGS \"${CMAKE_CXX_FLAGS} -fno-omit-frame-pointer -funwind-tables\")。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内存问题引发的crash故障",
      children: "内存问题引发的Crash故障"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Crash日志如包含以下两种信息："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "故障信息中包含LastFatalMessage: This is an unexpected memory usage behavior。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "故障信息中未包含上述LastFatalMessage信息，但故障线程的调用栈栈顶为jemalloc调用ld-musl-aarch64.so.1(crash_brk+0)。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上两种日志信息表示发生了内存访问异常的问题，从而导致触发Crash，这种Crash的内存问题原因主要有两类："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Double Free：内存释放成功后，在释放内存写入特殊标记（6b），再次释放该内存时会检测到这些标记，导致触发Crash。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UAF(Use After Free)： 内存释放成功后再次读取或写入，由于内存释放后写入特殊标记(6b)，再次读取或写入会触发Crash，这种Crash日志中可以查找到6b字样。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "总之，内存问题触发的Crash日志可查找对应内存是否存在特殊标记（6b），来判断该内存地址是否已被jemalloc释放过。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当发现故障日志信息中，有以上现象时，可根据故障信息中内存内容来查找特殊标记（6b），找到对应的内存地址，结合代码分析定位并修复Double Free或UAF问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为一个Double Free案例，代码片段如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ...\n// 开启jemalloc cache, 确保触发内存标记写入\nmallopt(M_OHOS_CONFIG, M_TCACHE_PERFORMANCE_MODE);\nmallopt(M_OHOS_CONFIG, M_ENABLE_OPT_TCACHE);\nmallopt(M_SET_THREAD_CACHE, M_THREAD_CACHE_ENABLE);\nchar* test = (char*)malloc(4096);\n// 这里日志输出test地址值，方便查找crash日志中内存内容\nstd::cout << \"test addr: \" << std::hex << test << std::endl;\nfree(test);\nfree(test); // Double Free\n// ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看对应生成的Crash日志："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Generated by HiviewDFX@HarmonyOS\n================================================================\nDevice info:HUAWEI Mate 70\nBuild info:CLS-AL00 6.1.0.263(C00E1R4P3DEVDUlog)\nDeviceDebuggable:Yes\nFingerprint:27af54212714ee9cc5026e020716783795c2ae8434730476532415be04f0277d\nModule name:test_processdump\nTimestamp:2026-01-14 19:52:53.207\nPid:43588\nUid:0\nProcess name:./test_processdump\nProcess life time:1s\nProcess Memory(kB): 18497(Rss)\nDevice Memory(kB): Total 11688320, Free 704432, Available 6171648\nReason:Signal:SIGTRAP(TRAP_BRKPT)@0x0000005a6cabe068\nLastFatalMessage:This is an unexpected memory usage behavior.may double free   ----> 发生了内存问题触发的Crash。\nFault thread info:\nTid:43588, Name:test_processdum\n#00 pc 00000000000b3068 /system/lib/ld-musl-aarch64.so.1(cache_bin_dalloc_safety_checks+108)(f4bc554163a467382fbc9026ef320fb7)\n#01 pc 00000000000bfd38 /system/lib/ld-musl-aarch64.so.1(je_free+408)(f4bc554163a467382fbc9026ef320fb7)\n#02 pc 00000000000515c8 /data/test/test_processdump((anonymous namespace)::ProcessDumpTest_DfxProcessTest008_Test::TestBody()+260)(bcace1bb3be03ebd7b59c921eb0c9f42)\n#03 pc 00000000000ca924 /data/test/test_processdump(testing::internal::UnitTestImpl::RunAllTests()+6676)(bcace1bb3be03ebd7b59c921eb0c9f42)\n#04 pc 00000000000c8d44 /data/test/test_processdump(testing::UnitTest::Run()+120)(bcace1bb3be03ebd7b59c921eb0c9f42)\n#05 pc 00000000000b11bc /data/test/test_processdump(main+100)(bcace1bb3be03ebd7b59c921eb0c9f42)\n#06 pc 00000000000afe58 /system/lib/ld-musl-aarch64.so.1(libc_start_main_stage2+80)(f4bc554163a467382fbc9026ef320fb7)\nRegisters:\nx0:0000000000000000 x1:0000000000000000 x2:0000005a6cc1f1e0 x3:0000007f43f875a0\nx4:0000005a6cefdbf0 x5:0000007f43f87580 x6:0000007f43f87580 x7:3030306361326436\nx8:0000000000000000 x9:0000005a6f452fc4 x10:0000000000000000 x11:0000005a6f452f68\nx12:000000000000001f x13:0000007f43f875c8 x14:0000000000000000 x15:0000000000000000\nx16:0000005a6f451a38 x17:0000005a6cbfa3cc x18:0000000000000000 x19:0000005a6d2ac000\nx20:0000005a6cabdc50 x21:0000005a6d2a21d8 x22:0000005a6ce2a000 x23:0000005a6d2a2228\nx24:0000005a6f447778 x25:0000005a6d29ab00 x26:20c49ba5e353f7cf x27:0000000000000005\nx28:0000000000000001 x29:0000007f43f87610\nlr:0000005a6cabe094 sp:0000007f43f87610 pc:0000005a6cabe068\npstate:0000000040001000 esr:00000000f2000001\n...\nx19([anon:native_heap:jemalloc]):\n    0000005a6d2abff0 0000000000000000\n    0000005a6d2abff8 0000000000000000\n    0000005a6d2ac000 6b6b195687b5f541   ---->  内存地址位置的内容为6b6b195687b5f541,表明该地址已被释放过。\n    0000005a6d2ac008 0000000000000000\n    0000005a6d2ac010 0000000000000000\n    0000005a6d2ac018 0000000000000000\n    0000005a6d2ac020 0000000000000000\n    0000005a6d2ac028 0000000000000000\n    0000005a6d2ac030 0000000000000000\n    0000005a6d2ac038 0000000000000000\n    0000005a6d2ac040 0000000000000000\n    0000005a6d2ac048 0000000000000000\n    0000005a6d2ac050 0000000000000000\n    0000005a6d2ac058 0000000000000000\n    0000005a6d2ac060 0000000000000000\n    0000005a6d2ac068 0000000000000000\n    0000005a6d2ac070 0000000000000000\n    0000005a6d2ac078 0000000000000000\n    0000005a6d2ac080 0000000000000000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存地址5a6d2ac000被填填充了6b开头的字节内容，表明该地址为已被释放。查看程序运行时日志打印："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "test addr: 5a6d2ac000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "test指针的内存地址是5a6d2ac000，表明test指针发生了Double Free，找到对应代码修复指针重复释放问题。"
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
993907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
594007(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
519337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
930416(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
554415(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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