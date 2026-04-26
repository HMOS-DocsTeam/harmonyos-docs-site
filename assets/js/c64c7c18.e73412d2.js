"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["589635"], {
3557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_c_cpp_c_cpp_overview_c_cpp_overview_md_c64_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-c-cpp-c-cpp-overview-c-cpp-overview-md-c64.json
var site_docs_coding_c_cpp_c_cpp_overview_c_cpp_overview_md_c64_namespaceObject = JSON.parse('{"id":"coding/c-cpp/c-cpp-overview/c-cpp-overview","title":"C/C++标准库机制概述","description":"HarmonyOS NDK提供业界标准库libc标准库、c++标准库，本文用于介绍C/C++标准库在HarmonyOS中的机制，开发者了解这些机制有助于在NDK开发过程中避免相关问题。","source":"@site/docs/coding/c-cpp/c-cpp-overview/c-cpp-overview.md","sourceDirName":"coding/c-cpp/c-cpp-overview","slug":"/coding/c-cpp/c-cpp-overview/","permalink":"/harmonyos-docs-site/coding/c-cpp/c-cpp-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"C/C++标准库机制概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/c-cpp-overview","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"代码开发概述","permalink":"/harmonyos-docs-site/coding/develop-code-overview/"},"next":{"title":"fdsan使用指导","permalink":"/harmonyos-docs-site/coding/c-cpp/fdsan/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/c-cpp/c-cpp-overview/c-cpp-overview.md


const frontMatter = {
	title: 'C/C++标准库机制概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/c-cpp-overview',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'C/C++标准库机制概述';

const assets = {

};



const toc = [{
  "value": "C++兼容性",
  "id": "c兼容性",
  "level": 2
}, {
  "value": "musl libc动态链接器",
  "id": "musl-libc动态链接器",
  "level": 2
}, {
  "value": "动态库加载命名空间隔离",
  "id": "动态库加载命名空间隔离",
  "level": 3
}, {
  "value": "rpath机制",
  "id": "rpath机制",
  "level": 3
}, {
  "value": "支持dlclose",
  "id": "支持dlclose",
  "level": 3
}, {
  "value": "支持symbol-version机制",
  "id": "支持symbol-version机制",
  "level": 3
}, {
  "value": "网络接口select支持fd fortify检测",
  "id": "网络接口select支持fd-fortify检测",
  "level": 3
}, {
  "value": "全球化支持",
  "id": "全球化支持",
  "level": 3
}, {
  "value": "fdsan功能",
  "id": "fdsan功能",
  "level": 3
}, {
  "value": "信号使用",
  "id": "信号使用",
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
        id: "cc标准库机制概述",
        children: "C/C++标准库机制概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS NDK提供业界标准库", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/musl/musl",
        children: "libc标准库"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cpp/cpp",
        children: "c++标准库"
      }), "，本文用于介绍C/C++标准库在HarmonyOS中的机制，开发者了解这些机制有助于在NDK开发过程中避免相关问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c兼容性",
      children: "C++兼容性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在HarmonyOS系统中，系统库和应用Native库均使用C++标准库（参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cpp/cpp#libc%E7%89%88%E6%9C%AC",
        children: "libc++版本"
      }), "）。系统库依赖的C++标准库随镜像版本升级，应用Native库依赖的C++标准库随编译使用的SDK版本升级。由于两部分依赖的C++标准库会跨多个大版本，可能导致ABI兼容性问题。为解决此问题，HarmonyOS对系统库和应用Native库依赖的C++标准库进行了区分。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统库：使用libc++.so，随系统镜像发布。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用Native库：使用libc++_shared.so，随应用发布。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "两个库使用不同的C++命名空间。libc++.so使用__h，libc++_shared.so使用__n1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(770209)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统和应用的C++标准库不能混用。Native API接口只能是C接口，用于隔离C++运行环境。如果HAR包中的libc++_shared.so版本不同于应用，可能导致不兼容问题。解决方法是使用相同SDK版本更新HAR包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "已知C++兼容性问题："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用启动或dlopen时，hilog报错symbol not found, s=__emutls_get_address。原因是API9及之前版本的libc++_shared.so无此符号，而API11之后版本的libc++_shared.so有此符号。解决方法是更新应用或HAR包的SDK版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "musl-libc动态链接器",
      children: "musl libc动态链接器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动态库加载命名空间隔离",
      children: "动态库加载命名空间隔离"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态库加载命名空间（namespace，下面统称为ns）是动态链接器设计的一个概念（区别于C++语言中的命名空间），其设计的主要目的是为了在进程中做native库资源访问的管控，以达到安全隔离的目的。例如系统native库允许加载系统目录（/system/lib64;/vendor/lib64等）下的native库，但是普通应用native库仅允许加载普通应用native库和ndk库，而不允许直接加载系统native库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态链接器在加载编译依赖（DT_NEEDED）中指定的共享库或调用dlopen加载指定的共享库时，都需要关联到具体的 ns。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS中动态库加载namespace配置的情况"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "default ns：动态链接器启动时默认创建的ns，它可以搜索/system/lib{abi};/vendor/lib{abi}等系统目录路径下的so。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ndk ns：动态链接器启动时默认创建的ns，它可以搜索/system/lib{abi}/ndk目录下的so，主要是暴露了NDK接口的so。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "app ns: 应用启动时创建的ns，它的搜索路径一般是应用的安装路径(可能为沙箱路径)，即可加载应用的so。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前的命名空间机制主要限制了应用native库和系统native库之间的调用，规则如图所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "default ns和ndk ns可以互相访问全部so，不能访问app ns的so。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "app ns能访问ndk ns的全部so，不能访问default ns的so。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(814512)/* ["default"] */.A) + "",
        width: "462",
        height: "242"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rpath机制",
      children: "rpath机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rpath（run-time path）是在运行时指定共享库搜索路径的机制。该机制允许在可执行文件或共享库中嵌入一个用于在运行时指定库的搜索路径的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于命名空间隔离机制，应用仅允许加载对应安装目录的native库路径下（例如arm64平台上为libs/arm64）的应用native库，当应用程序涉及加载多个native库时，创建多个加载路径会导致无法加载新目录下的native库。这种情况可以通过rpath机制编译时指定搜索路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，应用安装目录lib/arm64下的libhello.so依赖新创建路径lib/arm64/module下的libworld.so，那么在应用的CMakeLists.txt里设置上rpath编译选项后编译，使用readelf查看libhello.so的rpath配置如图所示，$ORIGIN为libhello.so所在路径，运行时即可正常加载module目录下的libworld.so。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SET(CMAKE_BUILD_WITH_INSTALL_RPATH TRUE)\nSET(CMAKE_INSTALL_RPATH \"\\${ORIGIN}/module\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(428602)/* ["default"] */.A) + "",
        width: "582",
        height: "80"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持dlclose",
      children: "支持dlclose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持使用dlclose真正卸载动态库的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持symbol-version机制",
      children: "支持symbol-version机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["symbol-version是libc在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "动态链接-符号重定位"
        })
      }), "阶段的符号检索机制，支持不同版本的符号重定位，也可以帮助解决重复符号的问题。可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.gnu.org/software/gnulib/manual/html_node/LD-Version-Scripts.html",
        children: "LD Version Scripts (GNU Gnulib)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "网络接口select支持fd-fortify检测",
      children: "网络接口select支持fd fortify检测"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "宏定义FD_SET和FD_CLR增加了对fd有效值的检查。如果传入的fd不在区间[0, 1024)中，将触发abort crash。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "宏定义FD_ISSET增加了对fd有效值的检查，如果传入的fd不在区间[0, 1024)中会返回false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "全球化支持",
      children: "全球化支持"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自API12起，newlocale及setlocale接口支持将locale设置C、C.UTF-8、en_US、en_US.UTF-8、zh_CN及zh_CN.UTF-8。新增在zh_CN及zh_CN.UTF-8的locale设置下对strtod_l、wcstod_l和localeconv的支持。注意strtod_l及wcstod_l不支持对十六进制及十六进制小数的转换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fdsan功能",
      children: "fdsan功能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/c-cpp/fdsan",
        children: "fdsan使用指导"
      }), "可以帮助检测文件的重复关闭和关闭后使用问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "信号使用",
      children: "信号使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为避免与系统保留信号冲突，开发者在使用信号时需遵循以下规则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "信号编号 1～34：为系统内部保留信号，禁止使用；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "信号编号 35～45: 截止到目前 API 19，这些信号已被系统内部模块（如内存、DFX、运行时、系统服务等）占用，为避免与系统行为冲突并导致不可预期的问题，请勿使用该范围内的信号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SIGRTMIN和__libc_current_sigrtmin的值是35, 表示可供应用程序使用的实时信号起始编号(应用实际只能使用46及以上的信号)。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "鸿蒙内部信号使用统计如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "编号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "编号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGHUP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "控制终端挂起"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGXCPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超出 CPU 时间限制"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中断"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGXFSZ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件超出大小限制"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGQUIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘退出"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGVTALRM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "虚拟定时器"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGILL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法指令"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGPROF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "profiling 计时器到期"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGTRAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调试断点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGWINCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终端窗口大小变化"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGABRT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中止信号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O 可用通知"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGBUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "总线错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGPWR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电源故障"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGFPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算术异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGSYS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法系统调用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGKILL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制终止"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGTIMER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定时器定时信号"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGUSR1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义信号 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGCANCEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程取消信号"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGSEGV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效内存访问"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGSYNCCALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步调用信号"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGUSR2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义信号 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSL_SIGNAL_NATIVE_REMOTE (SIGRTMIN + 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统自留"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGPIPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "管道损坏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSL_SIGNAL_HOOK (SIGRTMIN + 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统自留"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGALRM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定时器信号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSL_SIGNAL_UNHOOK (SIGRTMIN + 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统自留"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGTERM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "程序终止请求"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSL_SIGNAL_NATIVE_LOCAL (SIGRTMIN + 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统自留"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGSTKFLT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "协处理器栈错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSL_SIGNAL_JSHEAP (SIGRTMIN + 4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统自留"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGCHLD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程退出/停止"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSL_SIGNAL_JSHEAP_PRIV (SIGRTMIN + 5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统自留"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGCONT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "继续执行"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSL_SIGNAL_SAMPLE_STACK (SIGRTMIN + 6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统自留"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGSTOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "强制停止"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSL_SIGNAL_LEAK_STACK (SIGRTMIN + 7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统自留"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGTSTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止在终端输入"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "43"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSL_SIGNAL_RECYCLE_JEMALLOC (SIGRTMIN + 8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统自留"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGTTIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后台读终端"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSL_SIGNAL_MEMCHECK (SIGRTMIN + 9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统自留"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGTTOU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后台写终端"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MUSL_SIGNAL_FDTRACK (SIGRTMIN + 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统自留"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGURG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "套接字有紧急数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
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
770209(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
428602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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yIjyU/G891KKh+e1eBRPFl5tGkHQIQE19ZIlJEOe6MB8JW/CvKeK0HzRwjudTkmS4LLJyclwOAwetBmG6evrQwi99tprCCGWZfv7+2/evAmNkd1u93q9qVQqN9Tn8PBwb2+vWjxVtWJTUlKCAw3GYjGHw6HRiyahYK+02JB1qFZsELH0Eooo+S2r0dnZiR1+3r59OxQKNTc3i6LIMAzLsmNjY1iHDQ0NDQ0NWnSo9lKKUBTWUiqVunLlisfj0el0GtsoNTEKKgriCQeDQeoyVCPPHjx48B//+Ifa6ddff316evqLL75ACGUymeeee+7FF1+8ceNGMplsaWkpLy8fHR2FK3/7299OT09/+umnCKGWlpbKyspnn332yy+//M9//vPiiy8+88wzEGx6x44dzz77LNigzGaz0Wi8cOECQmjfvn1NTU3//ve/v/rqq6amposXL5aWlr744otnzpxBCM3Pz1+7du3SpUtNTU13796FJIDH4/H7/d9///3FixdnZmaMRqPZbC44j/zd737ncDimp6e/+uqr6enp6enp0dHRu3fvouWiOTo6+umnn/7www9ut3txcfHrr78m3AvE27FjR3V1dTAYvHTp0qVLlyYmJiBDgvA+n8/tdt+6devLL7+sqqqy2WzffvstKIegQwJq6iVLSEBNQpZlzWYzvLX5+fkdO3bs27ePYZiZmRnCqeI0X7Twfr//n//85xdffMHz/I0bN37xi19UVFT87W9/y2Qy33777a9+9avnnnvuiy++ePfdd3fs2BEIBDKZDEj4k5/8pLOzs7Gxcd++fTt27MA3gh/waLheAIRi09jY2NDQ8P3338uyfPjw4eeff/7TTz+FUwQIBbuIYkPWoVqxQcTSSyiihLdMQHlBfX19c3Pz119//a9//eull15qamoSRREr/Je//GVdXR00DgQIL6UIRT148OCbb74xGAw//vhjdXX1X//618XFRUEQQPkERRHEKKio//3f/62urr5161bBuk8BVuYQCwr97t27ZVmempoyGo1wnOd5hmFGRkbwlWVlZa2trbIsQ1ipvXv3wnEcbgotD0AYhsFDwtnZWbARgV9z7M0dp8odHR88eFCWZbgXSKJlzQYig+QOwxFCZrM5mUzC6DUWi9XW1uKYWGr3AvFgDYAQYStXeEEQZFmGAR3LsqFQyGaz4RzUdEhATb1k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");

},
814512(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479367-63fceff3ec99ba3d57af44593d14555c.png");

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