"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["862650"], {
694049(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_performance_analysis_kit_terminology_performance_analysis_kit_terminology_md_551_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-performance-analysis-kit-terminology-performance-analysis-kit-terminology-md-551.json
var site_docs_system_debug_optimize_performance_analysis_kit_performance_analysis_kit_terminology_performance_analysis_kit_terminology_md_551_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology/performance-analysis-kit-terminology","title":"Performance Analysis Kit术语","description":"通用","source":"@site/docs/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology/performance-analysis-kit-terminology.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology","slug":"/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"Performance Analysis Kit术语","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用恢复开发指导","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/error-manager/apprecovery-guidelines/"},"next":{"title":"Test Kit简介","permalink":"/harmonyos-docs-site/system-debug-optimize/test-kit/test-kit-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology/performance-analysis-kit-terminology.md


const frontMatter = {
	title: 'Performance Analysis Kit术语',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-terminology',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'Performance Analysis Kit术语';

const assets = {

};



const toc = [{
  "value": "通用",
  "id": "通用",
  "level": 2
}, {
  "value": "log版本",
  "id": "log版本",
  "level": 3
}, {
  "value": "nolog版本",
  "id": "nolog版本",
  "level": 3
}, {
  "value": "debug版本应用",
  "id": "debug版本应用",
  "level": 3
}, {
  "value": "release版本应用",
  "id": "release版本应用",
  "level": 3
}, {
  "value": "稳定性",
  "id": "稳定性",
  "level": 2
}, {
  "value": "AppFreeze",
  "id": "appfreeze",
  "level": 3
}, {
  "value": "ASan",
  "id": "asan",
  "level": 3
}, {
  "value": "CPP Crash",
  "id": "cpp-crash",
  "level": 3
}, {
  "value": "GWP-ASan",
  "id": "gwp-asan",
  "level": 3
}, {
  "value": "HWASan",
  "id": "hwasan",
  "level": 3
}, {
  "value": "JS Crash",
  "id": "js-crash",
  "level": 3
}, {
  "value": "TSan",
  "id": "tsan",
  "level": 3
}, {
  "value": "UBSan",
  "id": "ubsan",
  "level": 3
}, {
  "value": "调用栈",
  "id": "调用栈",
  "level": 3
}, {
  "value": "性能",
  "id": "性能",
  "level": 2
}, {
  "value": "丢帧",
  "id": "丢帧",
  "level": 3
}, {
  "value": "功耗",
  "id": "功耗",
  "level": 2
}, {
  "value": "HWC",
  "id": "hwc",
  "level": 3
}, {
  "value": "前台任务",
  "id": "前台任务",
  "level": 3
}, {
  "value": "后台任务",
  "id": "后台任务",
  "level": 3
}, {
  "value": "帧率",
  "id": "帧率",
  "level": 3
}, {
  "value": "LTPO",
  "id": "ltpo",
  "level": 3
}, {
  "value": "冗余绘制",
  "id": "冗余绘制",
  "level": 3
}, {
  "value": "不可见动效",
  "id": "不可见动效",
  "level": 3
}, {
  "value": "内存",
  "id": "内存",
  "level": 2
}, {
  "value": "VSS",
  "id": "vss",
  "level": 3
}, {
  "value": "PSS",
  "id": "pss",
  "level": 3
}, {
  "value": "RSS",
  "id": "rss",
  "level": 3
}, {
  "value": "脏页",
  "id": "脏页",
  "level": 3
}, {
  "value": "干净页",
  "id": "干净页",
  "level": 3
}, {
  "value": "匿名页",
  "id": "匿名页",
  "level": 3
}, {
  "value": "文件页",
  "id": "文件页",
  "level": 3
}, {
  "value": "NMD",
  "id": "nmd",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "performance-analysis-kit术语",
        children: "Performance Analysis Kit术语"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通用",
      children: "通用"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "log版本",
      children: "log版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Log版本是指在系统中开启了日志记录功能的系统版本。这种版本会记录系统运行时的各种信息，包括应用程序的运行情况、系统错误信息、调试信息等等。这些信息可以通过hdc工具或者第三方应用程序查看和分析，有助于开发者进行调试和优化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备中， 点击 “设置”->搜索关键字“关于本机”->“软件版本”进行查看，log版本会以“log”结尾。如：BRA-AL00 5.0.0.36(C00E15R4P92log)是log版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nolog版本",
      children: "nolog版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nolog版本是指在系统中关闭了日志记录功能的系统版本。这种版本不会记录系统运行时的信息，因此相对来说更加轻量级，运行速度也更快。但是，由于没有日志记录，开发者在调试和优化时会比较困难。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设备中， 点击 “设置”->搜索关键字“关于本机”->“软件版本”进行查看，nolog版本号末尾不带有“log”关键字。如：BRA-AL00 5.0.0.36(C00E15R4P92)是nolog版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debug版本应用",
      children: "debug版本应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section192461528194916",
        children: "debug模式"
      }), "构建的应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release版本应用",
      children: "release版本应用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section192461528194916",
        children: "release模式"
      }), "构建的应用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "稳定性",
      children: "稳定性"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "appfreeze",
      children: "AppFreeze"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在使用应用时，如果出现点击无反应或应用无响应等情况，并且持续时间超过一定限制，就会被定义为应用冻屏（AppFreeze），即应用无响应或卡死。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asan",
      children: "ASan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ASan（Address Sanitizer）为内存地址消毒器，用于检测非法地址访问。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cpp-crash",
      children: "CPP Crash"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进程C++代码未处理posix崩溃异常信号时导致的异常退出，其中异常信号包含如下："
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
            children: "非法指令。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程执行了非法、格式错误、未知或特权指令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGTRAP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "断点或陷阱异常。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异常或trap指令发生。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGABRT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程终止。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程异常终止，通常为进程自身调用标准函数库的abort()函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGBUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法内存访问。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程访问了对齐或者不存在的物理地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGFPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浮点异常。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程执行了错误的算术运算，如除数为0、浮点溢出、整数溢出等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGSEGV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效内存访问。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进程访问了无效内存引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGSTKFLT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "栈错误。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理器执行了错误的栈操作，如栈空时弹出、栈满时压入。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGSYS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误的系统调用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统调用时使用了错误或非法参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gwp-asan",
      children: "GWP-ASan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GWP-ASan是一种原生内存分配器功能，支持检测内存释放后使用和堆缓冲区溢出问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hwasan",
      children: "HWASan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HWASan（Hardware-Assisted Address Sanitizer）是Clang LLVM提供的一套内存错误检测系统，用来检测C/C++中常见的内存访问错误，相比ASan（Address Sanitizer），它在性能和内存开销上有不小提升。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "js-crash",
      children: "JS Crash"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用JS/ArkTS代码执行过程中发生的未捕获异常或错误，应用会因为无法继续正常运行而直接崩溃。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tsan",
      children: "TSan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TSan（Thread Sanitizer）是一个检测数据竞争的工具。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ubsan",
      children: "UBSan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UBSan（Undefined Behavior Sanitizer）可以检测代码中出现的未定义行为，帮助用户清除未定义行为引起运行时的错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调用栈",
      children: "调用栈"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["记录线程执行到当前现场（如崩溃、冻屏等）的函数调用顺序。具体说明请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines#%E4%B8%80%E8%88%AC%E6%95%85%E9%9A%9C%E5%9C%BA%E6%99%AF%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
        children: "调用栈帧内容说明"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines#%E4%B8%80%E8%88%AC%E6%95%85%E9%9A%9C%E5%9C%BA%E6%99%AF%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
        children: "JS混合栈帧内容说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "性能",
      children: "性能"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "丢帧",
      children: "丢帧"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "丢帧指在视频播放、游戏渲染或图像采集过程中，因系统性能不足、硬件限制或软件问题导致帧率低于预期，造成画面卡顿或数据丢失的现象。技术角度上讲丢帧是指单帧绘制时长超过1000ms/刷新率，导致设备不能按照刷新率绘帧的现象。丢帧与单帧绘制时长的关系主要体现在：单帧绘制时长超过显示设备的刷新周期（如16.7ms/帧）会导致丢帧。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功耗",
      children: "功耗"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hwc",
      children: "HWC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HWC（Hardware Composer）指专用硬件辅助系统，主要用于多图层叠加送显。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "前台任务",
      children: "前台任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前台任务指用户当前正在主动使用、界面可见并优先占用系统资源的应用或服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "后台任务",
      children: "后台任务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "后台任务指用户不直接操作界面的情况下，应用在后台执行的操作或服务，如下载、同步或播放音乐等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "帧率",
      children: "帧率"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "帧率为每秒显示或处理的图像帧数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ltpo",
      children: "LTPO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LTPO（Low Temperature Polycrystalline Oxide）中文译为“低温多晶氧化物”。这是OLED屏背板的一种驱动技术。LTPO屏支持1~120Hz的自适应刷新率，使应用在需要高刷新率的场景下提升流畅性，而在视频、静止等场景中使用低刷新率降低显示功耗，延长电池续航。通常用“LTPO”指代自适应刷新率技术。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "冗余绘制",
      children: "冗余绘制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "冗余绘制是指界面中存在被其他图层遮挡或多次重复渲染的图层，导致系统在同一像素上进行多次无效绘制，浪费GPU资源并可能引起卡顿。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不可见动效",
      children: "不可见动效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不可见动效指在界面中不直接呈现给用户，但用于增强交互反馈或状态过渡的动画效果，如页面切换时的滑动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "内存",
      children: "内存"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vss",
      children: "VSS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VSS（Virtual Set Size）指的是进程虚拟内存的大小，包括所有映射到该进程地址空间的内存区域，无论这些区域是否实际存在于物理内存中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pss",
      children: "PSS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PSS（Proportional Set Size）指的是进程实际占用的物理内存总量。计算方式为：将共享内存按使用该内存的进程数量进行分摊后，再将其与进程私有内存相加。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rss",
      children: "RSS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RSS（Resident Set Size）指的是进程中实际驻留在物理内存中的大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "脏页",
      children: "脏页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "脏页（Dirty Pages）指的是已经被修改过但还没有写回到磁盘上的缓存页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "干净页",
      children: "干净页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "干净页（Clean Pages）指的是未被修改过的或者已经从磁盘正确同步过来的页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "匿名页",
      children: "匿名页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匿名页（Anonymous Pages）指的是不对应任何具体文件的内存页，通常是堆栈或堆分配的结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件页",
      children: "文件页"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件页（File-backed Pages）指的是映射自具体文件的数据页，比如程序文本、共享库等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nmd",
      children: "NMD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NMD（Native Malloc Detail）指的是进程的jemalloc快照详细信息。"
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