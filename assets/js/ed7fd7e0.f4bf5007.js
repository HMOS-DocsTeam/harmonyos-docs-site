"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["499968"], {
639039(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_debugging_profiling_debug_lldb_debug_lldb_md_ed7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-debugging-profiling-debug-lldb-debug-lldb-md-ed7.json
var site_docs_debugging_profiling_debug_lldb_debug_lldb_md_ed7_namespaceObject = JSON.parse('{"id":"debugging-profiling/debug-lldb/debug-lldb","title":"LLDB高性能调试器","description":"概述","source":"@site/docs/debugging-profiling/debug-lldb/debug-lldb.md","sourceDirName":"debugging-profiling/debug-lldb","slug":"/debugging-profiling/debug-lldb/","permalink":"/harmonyos-docs-site/debugging-profiling/debug-lldb/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"LLDB高性能调试器","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/debug-lldb","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"C/C++内存错误检测","permalink":"/harmonyos-docs-site/debugging-profiling/debug-asan/"},"next":{"title":"硬件兼容性简介","permalink":"/harmonyos-docs-site/hardware-compatibility/hw-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/debugging-profiling/debug-lldb/debug-lldb.md


const frontMatter = {
	title: 'LLDB高性能调试器',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/debug-lldb',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'LLDB高性能调试器';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "功能特点",
  "id": "功能特点",
  "level": 2
}, {
  "value": "工具获取路径",
  "id": "工具获取路径",
  "level": 2
}, {
  "value": "功能列表",
  "id": "功能列表",
  "level": 2
}, {
  "value": "环境准备",
  "id": "环境准备",
  "level": 2
}, {
  "value": "使用指导-本地调试",
  "id": "使用指导-本地调试",
  "level": 2
}, {
  "value": "使用LLDB工具启动并调试应用",
  "id": "使用lldb工具启动并调试应用",
  "level": 3
}, {
  "value": "使用LLDB工具调试已经启动的应用",
  "id": "使用lldb工具调试已经启动的应用",
  "level": 3
}, {
  "value": "使用指导-远程调试",
  "id": "使用指导-远程调试",
  "level": 2
}, {
  "value": "root镜像远程调试",
  "id": "root镜像远程调试",
  "level": 3
}, {
  "value": "user镜像远程调试",
  "id": "user镜像远程调试",
  "level": 3
}, {
  "value": "FAQ",
  "id": "faq",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "lldb高性能调试器",
        children: "LLDB高性能调试器"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLDB（Low Level Debugger）是新一代高性能调试器。具备断点设置、变量查看与修改、内存操作、线程控制、表达式计算、堆栈回溯等功能，并支持跨平台和插件扩展。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前HarmonyOS中的LLDB工具是在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/llvm/llvm-project/releases/tag/llvmorg-15.0.4",
        children: "llvm15.0.4"
      }), "基础上适配演进出来的，是DevEco Studio工具链中默认的调试器，支持调试C和C++应用程序。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细说明参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://lldb.llvm.org/",
        children: "LLDB官方文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能特点",
      children: "功能特点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLDB调试器具备以下功能特点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "强大的调试功能"
          })
        }), "：支持断点设置、变量查看与修改、内存操作、线程控制、表达式计算、堆栈回溯等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "跨平台支持"
          })
        }), "：适用于Windows、Linux x86_64、ohos和Mac平台。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "插件扩展性"
          })
        }), "：支持插件扩展，方便开发者根据需求进行定制。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "工具获取路径",
      children: "工具获取路径"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过安装DevEco Studio集成开发环境，可在其SDK组件中获取完整的LLDB调试套件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下是基于DevEco Studio的LLDB工具完整路径结构图（以windows为例）:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "DevEco_Studio_Home/\n└── sdk/\n    ├── default/\n    │   ├── HarmonyOS/\n    │   │   └── native/\n    │   │       └── llvm/\n    │   │           ├── bin/\n    │   │           │   └── lldb.exe                 # Windows客户端主程序\n    │   │           └── lib/\n    │   │               └── clang/\n    │   │                   └── current/\n    │   │                       └── bin/\n    │   │                           ├── aarch64-linux-ohos/\n    │   │                           │   └── lldb      # ARM64独立调试器\n    │   │                           └── arm-linux-ohos/\n    │   │                               └── lldb      # ARM32独立调试器\n    │   └── hms/\n    │       └── native/\n    │           └── lldb/\n    │               ├── aarch64-linux-ohos/\n    │               │   └── lldb-server              # ARM64调试服务端\n    │               ├── arm-linux-ohos/\n    │               │   └── lldb-server              # ARM32调试服务端\n    │               └── x86_64-linux-ohos/\n    │                   └── lldb-server              # x86_64模拟器调试服务端\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "lldb客户端 (Windows系统) 执行文件路径："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<DevEco_Studio_Home>\\sdk\\default\\HarmonyOS\\native\\llvm\\bin\\lldb.exe\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "静态化lldb"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表1"
            })
          }), " 静态化lldb工具目录"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "路径"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\\DevEco Studio\\sdk\\default\\HarmonyOS\\native\\llvm\\lib\\clang\\current\\bin\\aarch64-linux-ohos\\lldb"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适用于aarch64-linux-ohos架构的静态化lldb"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\\DevEco Studio\\sdk\\default\\HarmonyOS\\native\\llvm\\lib\\clang\\current\\bin\\arm-linux-ohos\\lldb"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适用于arm-linux-ohos架构的静态化lldb"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "lldb-server"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "表2"
            })
          }), " lldb-server工具目录"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "路径"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\\DevEco Studio\\sdk\\default\\hms\\native\\lldb\\aarch64-linux-ohos\\lldb-server"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适用于aarch64-linux-ohos架构的lldb-server"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\\DevEco Studio\\sdk\\default\\hms\\native\\lldb\\arm-linux-ohos\\lldb-server"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适用于arm-linux-ohos架构的lldb-server"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "\\DevEco Studio\\sdk\\default\\hms\\native\\lldb\\x86_64-linux-ohos\\lldb-server"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适用于x86_64-linux-ohos架构的lldb-server"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(501931)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "签名校验机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lldb-server在运行时会对自身进行数字签名验证，只有通过华为官方签名的lldb-server才能正常调试应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "中的lldb-server是经过闭源签名处理的特殊版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这种设计主要用于保护鸿蒙（HarmonyOS）调试权限，防止未授权的调试行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能列表",
      children: "功能列表"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此处列举LLDB调试器支持的部分功能，更多命令参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/third_party_llvm-project/blob/master/lldb/README_zh.md",
        children: "LLDB工具使用指导"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://lldb.llvm.org/use/map.ditamap",
        children: "LLDB官网手册"
      }), "。Windows、Linux x86_64和Mac平台的LLDB工具有些许差异，以实际应用为准。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "记录日志"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 记录完整调试会话到文件\n(lldb) log enable -F -T -p -f d:\\lldb.log lldb all\n(lldb) log enable -F -T -p -f d:\\lldbgdbremote.log gdb-remote all\n# 示例：过滤只记录断点事件\n(lldb) log enable -f /tmp/breakpoints.log lldb break\n# 查看当前日志配置\n(lldb) log list\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "断点管理"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 设置函数断点（支持模糊匹配）\n(lldb) breakpoint -f main.cpp -l 266\n# 设置条件断点（当x>100时触发）\n(lldb) breakpoint set -f main.cpp -l 20 -c '(x > 100)'\n# 列出所有断点\n(lldb) breakpoint list\n# 临时禁用断点\n(lldb) breakpoint disable 1\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "观察点管理"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 监控变量变化\n(lldb) watchpoint set variable global_var\n# 监控内存地址变化\n(lldb) watchpoint set expression -w write -- 0x7ffeefbff5d8\n# 查看观察点列表\n(lldb) watchpoint list\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "表达式处理"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 创建变量\n(lldb) print int $value1 = 7\n(lldb) expression int $value2 = 7\n# 打印变量值\n(lldb) print $value1\n(lldb) expression $value2\n# 变量运算\n(lldb) expression $value1 * 3\n# 格式化输出（16进制显示）\n(lldb) p/x 12345\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看变量"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 查看当前帧的已初始化的局部变量\n(lldb) frame variable\n# 查看全局变量和静态变量\n(lldb) frame variable -g\n# 查看寄存器\n(lldb) register read\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进程/线程管理"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 显示线程回溯（所有线程）\n(lldb) thread backtrace all\n# 单步跳过（Step over）\n(lldb) thread step-over (或next)\n# 跳出当前选定的帧（步出）\n(lldb) thread step-out (或finish)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "汇编处理"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 查看寄存器\n(lldb) register read\n# 更改pc寄存器\n(lldb) register write pc `$pc+8`\n# 查看当前堆栈帧的汇编指令\n(lldb) disassemble --frame (或 dis -f )\n# 查看main函数的汇编指令\n(lldb) disassemble -name main\n# 汇编单步执行程序，步过（不进入函数体）\n(lldb) nexti\n# 汇编单步执行程序，步入（进入函数体）\n(lldb) stepi\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "信号处理"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 捕获信号时打印回溯\n(lldb) process handle SIGSEGV -s true\n# 查看当前信号处理配置\n(lldb) process handle\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "attach进程"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 附加到PID（需调试权限）\n(lldb) process attach -p 1234\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["本地调试（", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "受限模式"
            })
          }), "）"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "HarmonyOS设备需获取root权限"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "无需DevEco Studio，直接设备端调试"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "选择静态化lldb路径（根据设备CPU架构选择，参考）并使用hdc传输到设备："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc file send \\DevEco Studio\\sdk\\default\\HarmonyOS\\native\\llvm\\lib\\clang\\current\\bin\\aarch64-linux-ohos\\lldb /data/local/tmp/debugserver\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "选择lldb server路径（根据设备CPU架构选择，参考）并使用hdc传输到设备："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hdc file send \\DevEco Studio\\sdk\\default\\hms\\native\\lldb\\aarch64-linux-ohos\\lldb-server /data/local/tmp/debugserver\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["远程调试（", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "主要调试方式"
            })
          }), "）"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "一键调试："
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["下载DevEco Studio，根据IDE的调试方法即可进行一键调试：", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/debugging-profiling/debug-performance-profiling-overview",
                  children: "通过DevEco Studio调试"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "支持Windows/Mac连接HarmonyOS设备或模拟器，支持调试Native C++应用。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "直接使用DevEco Studio的Debug功能即可，无需手动推送lldb或lldb-server。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "手动调试："
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "如需要手动进行远程调试（不通过DevEco Studio），如调试二进制等，则需要保证设备上有lldb-server，PC上有lldb。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "准备lldb-server，建议使用DevEco Studio推送。如手动推送，选择lldb-server路径（根据设备CPU架构选择，参考）并使用hdc传输到设备："
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "hdc file send \\DevEco Studio\\sdk\\default\\hms\\native\\lldb\\aarch64-linux-ohos\\lldb-server /data/local/tmp/debugserver\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["PC上准备lldb，如windows系统则使用", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "lldb.exe"
                    })
                  }), ", 稍后将使用lldb与OH设备上的lldb-server远程连接进行调试。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(722870)/* ["default"] */.A) + "",
                    width: "407",
                    height: "197"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设备状态与调试支持矩阵（分三种情况）："
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "设备状态"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "调试支持范围"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "lldb-server部署路径"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "root镜像+SELinux关闭"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "全类型C/C++应用及二进制"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "任意可执行目录"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "root镜像+SELinux开启"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "全类型C/C++应用及二进制"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "/data/local/tmp/debugserver"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "user镜像+SELinux开启"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "DevEco Studio编译签名debug版HAP包"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "自动部署"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(952219)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "root镜像：使用hdc shell id命令查询到“uid=0(root)”，或执行hdc shell进入交互命令环境，提示符为“#”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "user镜像：使用hdc shell id命令查询到“uid=2000(shell)”，或执行hdc shell进入交互命令环境，提示符为“$”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SELinux开启模式：使用hdc shell getenforce命令查询到“Enforcing”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SELinux关闭模式：使用hdc shell getenforce命令查询到“Permissive”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注意："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lldb-server建议通过DevEco Studio创建Native项目并点击Debug按钮自动推送，避免手动推送的版本兼容性和权限问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用指导-本地调试",
      children: "使用指导-本地调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用lldb工具启动并调试应用",
      children: "使用LLDB工具启动并调试应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以在HarmonyOS环境调试一个使用clang编译器生成的带有调试信息的可执行文件a.out为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "源文件：hello.cpp"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"hello world!\" <<endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<clang distribution>/bin/clang++ --target=aarch64-linux-ohos --sysroot=<sysroot distribution> -g hello.cpp -o a.out\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取到与LLDB同一版本的clang编译器生成的带有调试信息的可执行文件a.out。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "hdc shell"
            })
          }), "进入手机交互命令环境，进入lldb路径。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行LLDB工具，并指定要调试的文件为a.out。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "./lldb a.out\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在代码中main函数处设置断点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) b main\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行应用，使其停在断点处。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) run\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "继续运行应用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) continue\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "列出所有断点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) breakpoint list\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "显示当前帧的参数和局部变量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) frame variable\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按需执行调试命令进行后续调试操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "退出调试。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) quit\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用lldb工具调试已经启动的应用",
      children: "使用LLDB工具调试已经启动的应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处以在手机环境调试一个使用clang编译器生成的带有调试信息和用户输入的可执行文件a.out为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "源文件：hello.cpp"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int i = 0, j = 5, sum = 0;\n    cout << \"Please input a number of type int\" <<endl;\n    cin >> i;\n    cout << i;\n    sum = i + j;\n    cout << sum <<endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<clang distribution>/bin/clang++ --target=aarch64-linux-ohos --sysroot=<sysroot distribution> -g hello.cpp -o a.out\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "hdc shell"
            })
          }), "进入手机交互命令环境，进入lldb路径。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在终端窗口1启动应用。（窗口会返回一条信息“Please input a number of type int”）"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "./a.out\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在终端窗口2运行LLDB工具。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "./lldb\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "attach应用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) process attach --name a.out\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在hello.cpp的第10行设置断点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) breakpoint set --file hello.cpp --line 10\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在终端窗口1，输入一个int类型的数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "88\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在终端行窗口2继续运行应用，使应用停在断点处。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) continue\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按需执行调试命令进行后续调试操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "detach应用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) detach\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "退出调试。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) quit\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(292100)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤attach应用和设置断点可以调换顺序执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用指导-远程调试",
      children: "使用指导-远程调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(449121)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "远程调试是指使用lldb进行跨端调试。本章节主要针对开发者跨平台调试HarmonyOS设备的应用进行说明。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["基于DevEco Studio的远程调试参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-debug-native-enable-V5",
          children: "官方调试指导"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "远程调试时需要lldb-server和lldb配合使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Windows，Linux x86_64和Mac远程调试步骤一致。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root镜像远程调试",
      children: "root镜像远程调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(16933)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持调试的应用或二进制是aarch64-linux-ohos架构的native C++工程。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为了方便调试建议调试时关闭SELinux。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "源文件：hello.cpp"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"hello world!\" <<endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<clang distribution>/bin/clang++ --target=aarch64-linux-ohos --sysroot=<sysroot distribution> -g hello.cpp -o a.out\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开命令行窗口1，关闭SELinux。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell setenforce 0\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在命令行窗口1，将lldb-server和可执行文件a.out推送到设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc file send lldb-server hdc file send a.out /data/local/tmp/debugserver/debugserver\nhdc shell chmod 755\n/data/local/tmp/debugserver/lldb-server /data/local/tmp/debugserver/a.out\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行lldb-server。(8080为有效且当前未被占用的端口号，用户可自定义）"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell /data/local/tmp/debugserver/lldb-server p --server --listen \"*:8080\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开命令行窗口2，运行二进制文件lldb。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "./lldb\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在LLDB命令行窗口进行远端选择与连接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) platform select remote-ohos\n(lldb) platform connect connect://localhost:8080\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定要调试的设备上的二进制文件a.out。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) target create /data/local/tmp/debugserver/a.out\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在代码中main函数处设置断点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) b main\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动应用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) run\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看当前目标进程的源码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) source list\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按需执行调试命令进行后续调试操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "退出调试。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) quit\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user镜像远程调试",
      children: "user镜像远程调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(341159)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "user镜像SELinux默认开启，无法关闭。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建议基于DevEco Studio调试user镜像SELinux开启的HarmonyOS设备的hap包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lldb-server需推送至指定的目录/data/local/tmp/debugserver。如：/data/local/tmp/debugserver/lldb-server或/data/local/tmp/debugserver/com.example.myapplication/lldb-server。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lldb-server在aarch64-linux-ohos架构目录获取。详情参考表1 lldb-server工具目录"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此案例中的hap包为基于DevEco Studio创建的native C++默认工程编译的带debug信息的hap包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调试过程中需保持设备在非锁屏状态，锁屏不允许启动调试器调试。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开命令行窗口1，将lldb-server和hap包推送到设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell mkdir data/local/tmp/debugserver/com.example.myapplication\nhdc file send lldb-server data/local/tmp/debugserver/com.example.myapplication\nhdc shell chmod 755 data/local/tmp/debugserver/com.example.myapplication/lldb-server\nhdc shell mkdir data/local/tmp/d333e74fe3ab488aad622a7055fbf396\nhdc file send C:\\Users\\xxx\\DevEcoStudioProjects\\MyApplication\\entry\\build\\default\\outputs\\default\\entry-default-signed.hap data/local/tmp/d333e74fe3ab488aad622a7055fbf396\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "hap包安装运行，关闭appfreeze。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell bm install -p data/local/tmp/d333e74fe3ab488aad622a7055fbf396\nhdc shell aa start -a EntryAbility -b com.example.myapplication\nhdc shell aa attach -b com.example.myapplication\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行lldb-server。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell aa process -a EntryAbility -b com.example.myapplication -D \"/data/local/tmp/debugserver/com.example.myapplication/lldb-server platform --listen unix-abstract:///lldb-server/platform.sock\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开命令行窗口2，运行二进制文件lldb。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "./lldb\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在LLDB命令行窗口进行远端选择与连接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) platform select remote-ohos\n(lldb) platform connect unix-abstract-connect:///lldb-server/platform.sock\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加目标可执行文件搜索路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) settings append target.exec-search-paths \"C:\\Users\\xxx\\DevEcoStudioProjects\\MyApplication\\entry\\build\\default\\intermediates\\cmake\\default\\obj\\arm64-v8a\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在源代码第6行处设置断点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) breakpoint set --file \"C:/Users/xxx/DevEcoStudioProjects/MyApplication/entry/src/main/cpp/napi_init.cpp\" --line 6\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定要调试的设备上的hap包对应的应用pid。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) attach <pid>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击设备应用，使其继续响应，并停止在断点处。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "继续调试。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) continue\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "显示当前线程的堆栈回溯。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) bt\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按需执行调试命令进行后续调试操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "退出调试。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "(lldb) quit\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faq",
      children: "FAQ"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当在LLDB调试环境中执行run命令时，若控制台返回\"error: 'A' packet returned an error: 8\"或类似错误代码，此问题通常表明调试器无法创建调试进程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该异常现象主要由权限不足引发，建议通过以下步骤排查："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1）验证目标设备是否已开启调试授权；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "验证方式为设备上设置中的”开发者选项”，如果没有开启，开启后再尝试调试。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2）确认当前用户是否具有目标进程的调试权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "user用户只能调试应用，不能调试可执行文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行lldb-server，报错“Permission denied”。一般是lldb-server无可执行权限导致的，添加权限即可。"
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
341159(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
16933(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
952219(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
501931(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFZklEQVRo3u2af0zUZRzHX/66o+MOOU6DQ4FJgfyIH9MGGHKogMjCzSScOiwtI7J001mbra1MXEtNM1cB02xBg00TS1MMFIQyBKaAISDEOBAODAERkUOU/ji7PMGLsdpBPu/ttnvueZ7Pffe89nk+P/YdR8wnAwiNNm0dL85gdEqAEWCEBBgBRkiAEWAsJKmEDRGz/xVTywK9WBboBVLJmAUzcbQ8SPKKUGI1bvg4qbBTWNF0vXtY+y43tZOUW2oCeP+bC1DIJBRsTkdXrxNgRqrEpcHEatxQ2lhR3dzBzrUhw6/E0gpNxvFBnihkEvLLrg4JZfeKeQR7OT7S3oGcClLOlgkwiUuDWRfth9LGirScSnZlFXP4SrPJmu/WzmOWuz37T/zG9rwKk7n65jaT8eJnZwCg8ZvOwOFNJnNpOZV0dOsJ8HQwC+bx9hiphNQ1YTwfMMMIZVXSScNh1zWZLFXbyQE4fblp0NyDktmr0PhNp6Orl5qmTtym2aK0saKosgWAnt5+49p9R0vZkHbGOD6/baVZYI8NmPCZziwOcmWyXErK8Uu8/nU22Cig6ybxoX4krw8btCd9cyTpRBrHRwpqidn7w99x6oUAbGQSI+SrX8ajBJYcyDVea5/FLRAxxpxyyms5lO9KdXMHu7KK8ZvpQuqroaSeqeTG7T6D5+i6uNbZM2ivjUyCh4vdIxOEH0sbAJg2VS6yspHota9+AsDBWc2hhDDcnGwJalJzqlQLwLHzdYbrRipBrVYBoKvXPdKjViWd5FR5IxmFFYx1WTz4Oziryd8YhZuTLQXlTcQkZREf5Dko00peH2aIC2bS3+TVEej77xLganpdbZnrCXM9UcqldHTrBZh/kt9MF6On1DR2sig5B/R9I7Y3x0uNj+uUQb+vX+IPQJW2neyLDQKMOS0P8iYpYR6T5VLqdF1o9pykp/Om2Wr9CYn5x527+wR2MikAse6O7FgbQk1jJwv3nQKgvUdPYrivAGNOGRdr+LAjkPK6NjSfnoCum6QmRCGTTuLXatPrylFpDcDtvn6zNrta2ui6/33A3VBE9vXfRX/v3pjrAFjuKtP3se5gPjnVDaDvI9z3aRYHuTIAyB7yDHdHJQB37t4btvlgDzUA3jNUpMQEsjytgFut18cMGIs2MXPKa0Hfh4Ozmi/WaJgsl3K8sI7Mot8fyI0VRAcZqvlXIr1JXh0BQFFlC0q5dEi7cc89Q6jvdACa/ugmeo4r2xb4YG2vEh4z0qxs1cHThlRZew1/WwWV78egkEmo0rbjOFVOfLQPhRU64tN+oaxaO8ietb2Kl0I9UNpYkV2iZXX6Oa4kvsjGmFlYSycxfvw4Y0LwV1IgPOYhLQv0MoGi+TjT4EH2KnYs8idj00I8XOyo0razPCWXkO3HuFTXRpC3mrwt0QbvsVGYQMmICyFitjNdPX1sziyhWatj67eGRud8PyesJBOMxWtRZYvx0znK0miLeUzCfH8+ejkYW7nUBErue7HM83cyrjv6cy1vHCmmpcEQvH3f+YbUhCjiwj2Jj/bhlv4Om9LzADjzVqSx37XnyAXK73vUzqxiAFIvX+Vdjadp8TpKe2UT8Ir8wBJ/XKJrJ3bWUxRWthC197ixfvGd9iRzvNRkl2jZlXmBtzPO0n3DtPWSWVKLrrUHhXQSK9MKjHvrr98mJtCVz78vY8vhApM952qb6b7RjbfjFKobOmjv7iWvqtE47+WgouRKK4XaNupa2y3N5ew4i77wd79pOVThOVT8GJaspNA7Nqp7M7LwC39DQAFGDgX+D1AsH/yFBBgBRkiAEWCEBBghAUaAERJgBBih/1gTga3iGEad8v4EFTP/Ye4wQC4AAAAASUVORK5CYII=");

},
292100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
722870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
449121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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