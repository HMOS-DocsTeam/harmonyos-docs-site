"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["843430"], {
541815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hidebug_hidebug_guidelines_ndk_hidebug_guidelines_ndk_md_6c5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hidebug-hidebug-guidelines-ndk-hidebug-guidelines-ndk-md-6c5.json
var site_docs_system_debug_optimize_performance_analysis_kit_hidebug_hidebug_guidelines_ndk_hidebug_guidelines_ndk_md_6c5_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines-ndk/hidebug-guidelines-ndk","title":"HiDebug接口使用示例(C/C++)","description":"HiDebug C/C++接口功能独立，需要获取调试信息时直接调用。具体调用示例请参考下文。","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines-ndk/hidebug-guidelines-ndk.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines-ndk","slug":"/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines-ndk/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"HiDebug接口使用示例(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hidebug-guidelines-ndk","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HiDebug接口使用示例(ArkTS)","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines-arkts/"},"next":{"title":"使用HiCollie检测业务线程卡死卡顿问题（C/C++）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-guidelines-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines-ndk/hidebug-guidelines-ndk.md


const frontMatter = {
	title: 'HiDebug接口使用示例(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hidebug-guidelines-ndk',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'HiDebug接口使用示例(C/C++)';

const assets = {

};



const toc = [{
  "value": "通用开发示例",
  "id": "通用开发示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hidebug接口使用示例cc",
        children: "HiDebug接口使用示例(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiDebug C/C++接口功能独立，需要获取调试信息时直接调用。具体调用示例请参考下文。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通用开发示例",
      children: "通用开发示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下文展示如何在应用内使用HiDebug NDK接口以进行线程栈回溯，且获取进程内线程的CPU使用率："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤一：创建项目"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用DevEco Studio新建一个Native C++工程，并新增文件“test_backtrace.cpp”与“test_backtrace.h”，目录结构如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "entry:\n  src:\n    main:\n      cpp:\n        - types:\n          - libentry:\n            - index.d.ts\n        - CMakeLists.txt\n        - napi_init.cpp\n        - test_backtrace.cpp\n        - test_backtrace.h\n      ets:\n        pages:\n          - Index.ets\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“test_backtrace.h”文件，内容如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#ifndef MYAPPLICATION_TESTBACKTRACE_H\n#define MYAPPLICATION_TESTBACKTRACE_H\n\nvoid BacktraceCurrentThread();\n\n#endif // MYAPPLICATION_TESTBACKTRACE_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“test_backtrace.cpp”文件, 内容如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"test_backtrace.h\"\n#include <condition_variable>\n#include <csignal>\n#include <unistd.h>\n#include <sys/syscall.h>\n#include \"hidebug/hidebug.h\"\n#include \"hilog/log.h\"\n\n#define MAX_FRAME_SIZE 256 // 最大栈回溯深度，应根据业务场景调整该值。\n\nnamespace {\n    constexpr auto LOG_PRINT_DOMAIN = 0xFF00;\n}\n\nclass BackTraceObject { // 封装了抓栈过程中需要使用的资源，在使用过程中请注意线程安全和异步信号安全。\npublic:\n    static BackTraceObject& GetInstance();\n    BackTraceObject(const BackTraceObject&) = delete;\n    BackTraceObject& operator=(const BackTraceObject&) = delete;\n    BackTraceObject(BackTraceObject&&) = delete;\n    BackTraceObject& operator=(BackTraceObject&&) = delete;\n    bool Init(uint32_t size);\n    void Release();\n    int BackTraceFromFp(void* startFp, int size); // 该函数异步信号安全。\n    void SymbolicAddress(int index); // 该函数耗费性能，请避免频繁调用。\n    void PrintStackFrame(void* pc, const HiDebug_StackFrame& frame);\nprivate:\n    BackTraceObject() = default;\n    ~BackTraceObject() = default;\n    HiDebug_Backtrace_Object backtraceObject_ = nullptr;\n    void** pcs_ = nullptr;\n};\n\nBackTraceObject& BackTraceObject::GetInstance() // 单例模式，用于信号处理和请求抓栈线程的数据交互。注意该类非异步信号安全，业务逻辑应确保同一时刻仅单个线程访问。\n{\n    static BackTraceObject instance;\n    return instance;\n}\n\nbool BackTraceObject::Init(uint32_t size) // 初始化资源。\n{\n    backtraceObject_ = OH_HiDebug_CreateBacktraceObject();\n    if (backtraceObject_ == nullptr || size > MAX_FRAME_SIZE) {\n        return false;\n    }\n    pcs_ = new (std::nothrow) void* [size]{nullptr};\n    if (pcs_ == nullptr) {\n        return false;\n    }\n    return true;\n}\n\nvoid BackTraceObject::Release() // 释放资源。\n{\n    OH_HiDebug_DestroyBacktraceObject(backtraceObject_);\n    backtraceObject_ = nullptr;\n    delete[] pcs_;\n    pcs_ = nullptr;\n}\n\nint BackTraceObject::BackTraceFromFp(void* startFp, int size) // 栈回溯获取pc地址。\n{\n    if (size <= MAX_FRAME_SIZE) {\n        return OH_HiDebug_BacktraceFromFp(backtraceObject_, startFp, pcs_, size); // OH_HiDebug_BacktraceFromFp接口调用示例。\n    }\n    return 0;\n}\n\nvoid BackTraceObject::PrintStackFrame(void* pc, const HiDebug_StackFrame& frame) // 输出栈内容。\n{\n    if (frame.type == HIDEBUG_STACK_FRAME_TYPE_JS) { // 根据栈帧的类型，区分不同的栈帧输出方式。\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"testTag\",\n            \"js stack frame info for pc: %{public}p is \"\n            \"relativePc: %{public}p \"\n            \"line: %{public}d \"\n            \"column: %{public}d \"\n            \"mapName: %{public}s \"\n            \"functionName: %{public}s \"\n            \"url: %{public}s \"\n            \"packageName: %{public}s.\",\n            pc,\n            reinterpret_cast<void*>(frame.frame.js.relativePc),\n            frame.frame.js.line,\n            frame.frame.js.column,\n            frame.frame.js.mapName,\n            frame.frame.js.functionName,\n            frame.frame.js.url,\n            frame.frame.js.packageName);\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"testTag\",\n            \"native stack frame info for pc: %{public}p is \"\n            \"relativePc: %{public}p \"\n            \"funcOffset: %{public}p \"\n            \"mapName: %{public}s \"\n            \"functionName: %{public}s \"\n            \"buildId: %{public}s \"\n            \"reserved: %{public}s.\",\n            pc,\n            reinterpret_cast<void*>(frame.frame.native.relativePc),\n            reinterpret_cast<void*>(frame.frame.native.funcOffset),\n            frame.frame.native.mapName,\n            frame.frame.native.functionName,\n            frame.frame.native.buildId,\n            frame.frame.native.reserved);\n    }\n}\n\nvoid BackTraceObject::SymbolicAddress(int index)  // 栈解析接口。\n{\n    if (index < 0 || index >= MAX_FRAME_SIZE) {\n        return;\n    }\n    OH_HiDebug_SymbolicAddress(backtraceObject_, pcs_[index], this,\n        [] (void* pc, void* arg, const HiDebug_StackFrame* frame) {\n            reinterpret_cast<BackTraceObject*>(arg)->PrintStackFrame(pc, *frame);\n        }); // 调用OH_HiDebug_SymbolicAddress接口解析栈。\n}\n\nvoid BacktraceCurrentThread() // 该接口非线程安全，同一时刻只能由一个线程使用。\n{\n    if (!BackTraceObject::GetInstance().Init(MAX_FRAME_SIZE)) { // 注意：在调用栈回溯函数之前，需申请资源，且不可重复初始化。\n        BackTraceObject::GetInstance().Release();\n        OH_LOG_Print(LOG_APP, LOG_WARN, LOG_PRINT_DOMAIN, \"testTag\", \"failed init backtrace object.\");\n        return;\n    }\n    int pcSize = BackTraceObject::GetInstance().BackTraceFromFp(__builtin_frame_address(0), MAX_FRAME_SIZE);\n    for (int i = 0; i < pcSize; i++) {\n        BackTraceObject::GetInstance().SymbolicAddress(i); // 主线程获取pc后，对pc值进行栈解析。\n    }\n    BackTraceObject::GetInstance().Release(); // 栈回溯并且解析结束后，及时释放资源。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“CMakeLists.txt”文件，添加库依赖："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 新增动态库依赖libohhidebug.so和libhilog_ndk.z.so（日志输出）\nadd_library(entry SHARED napi_init.cpp test_backtrace.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libohhidebug.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件，导入依赖文件并定义测试方法："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <thread>\n#include \"hidebug/hidebug.h\"\n#include \"hilog/log.h\"\n#include \"test_backtrace.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n\n__attribute((noinline)) __attribute((optnone)) void TestNativeFrames(int i)\n{\n    if (i > 0) {\n        TestNativeFrames(i - 1);\n        return;\n    }\n    BacktraceCurrentThread();\n}\n\n__attribute((noinline)) __attribute((optnone)) napi_value TestBackTrace(napi_env env, napi_callback_info info)\n{\n    TestNativeFrames(1);\n    return nullptr;\n}\n\nnapi_value TestGetThreadCpuUsage(napi_env env, napi_callback_info info)\n{\n    HiDebug_ThreadCpuUsagePtr cpuUsage = OH_HiDebug_GetAppThreadCpuUsage();\n    while (cpuUsage != nullptr) {\n        OH_LOG_INFO(LogType::LOG_APP,\n            \"GetAppThreadCpuUsage: threadId %{public}d, cpuUsage: %{public}f\", cpuUsage->threadId, cpuUsage->cpuUsage);\n        cpuUsage = cpuUsage->next; // 获取下一个线程的cpu使用率对象指针。\n    }\n    OH_HiDebug_FreeThreadCpuUsage(&cpuUsage); // 释放内存，防止内存泄露。\n    return nullptr;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册“TestHiDebugNdk”为ArkTS接口并初始化主线程的信号处理函数："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_property_descriptor desc[] = {\n    { \"testGetThreadCpuUsage\", nullptr, TestGetThreadCpuUsage, nullptr, nullptr, nullptr, napi_default, nullptr },\n    { \"testBackTrace\", nullptr, TestBackTrace, nullptr, nullptr, nullptr, napi_default, nullptr },\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“index.d.ts”文件，声明ArkTS接口："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const testGetThreadCpuUsage: () => void;\nexport const testBackTrace: () => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“Index.ets”文件，添加触发接口调用的按钮，示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义测试方法："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function testBackTraceJsFrame(i : number) : void {\n  if (i > 0) {\n    return testBackTraceJsFrame(i-1);\n  }\n  return testNapi.testBackTrace();\n}\n\nfunction testBackTrace() : void {\n  testBackTraceJsFrame(3);\n}\n\nfunction testGetThreadCpuUsage() : void {\n  testNapi.testGetThreadCpuUsage();\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加按钮以触发接口调用："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Button('testGetThreadCpuUsage')\n  .type(ButtonType.Capsule)\n  .margin({\n    top: 20\n  })\n  .backgroundColor('#0D9FFB')\n  .width('60%')\n  .height('5%')\n  // 添加点击事件\n  .onClick(testGetThreadCpuUsage);\n\nButton('testHiDebugBackTrace')\n  .type(ButtonType.Capsule)\n  .margin({\n    top: 20\n  })\n  .backgroundColor('#0D9FFB')\n  .width('60%')\n  .height('5%')\n  // 添加点击事件\n  .onClick(testBackTrace);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤二：运行工程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的运行按钮，然后分别单击应用界面上的“testGetThreadCpuUsage”和“testHiDebugBackTrace”按钮。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio底部切换到“Log”窗口，设置日志过滤条件为“testTag”，即可查看相关日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "...\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19261, cpuUsage: 0.000104\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19381, cpuUsage: 0.000000\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19382, cpuUsage: 0.000040\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19383, cpuUsage: 0.000010\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19384, cpuUsage: 0.000001\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19386, cpuUsage: 0.000038\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19387, cpuUsage: 0.000000\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19388, cpuUsage: 0.000007\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19389, cpuUsage: 0.000004\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19390, cpuUsage: 0.000007\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19391, cpuUsage: 0.000006\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19393, cpuUsage: 0.000001\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19394, cpuUsage: 0.000004\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19397, cpuUsage: 0.000002\n10-22 15:46:05.933   19261-19261   A00000/com.sam...gtool/testTag  com.sampl...ebugtool  I     GetAppThreadCpuUsage: threadId 19401, cpuUsage: 0.000001\n...\n10-22 15:46:13.351   19261-19261   A0FF00/com.sam...gtool/testTag  com.sampl...ebugtool  I     native stack frame info for pc: ************ is relativePc: ****** funcOffset: 0x38 mapName: /data/storage/el1/bundle/libs/arm64/libentry.so functionName: TestNativeFrames(int) buildId: b6d3429f6e2e594b1c696e13049dae7e51694099 reserved: (null).\n10-22 15:46:13.351   19261-19261   A0FF00/com.sam...gtool/testTag  com.sampl...ebugtool  I     native stack frame info for pc: ************ is relativePc: ****** funcOffset: 0x30 mapName: /data/storage/el1/bundle/libs/arm64/libentry.so functionName: TestNativeFrames(int) buildId: b6d3429f6e2e594b1c696e13049dae7e51694099 reserved: (null).\n10-22 15:46:13.351   19261-19261   A0FF00/com.sam...gtool/testTag  com.sampl...ebugtool  I     native stack frame info for pc: ************ is relativePc: ****** funcOffset: 0x1c mapName: /data/storage/el1/bundle/libs/arm64/libentry.so functionName: TestBackTrace(napi_env__*, napi_callback_info__*) buildId: b6d3429f6e2e594b1c696e13049dae7e51694099 reserved: (null).\n...\n10-22 15:46:13.354   19261-19261   A0FF00/com.sam...gtool/testTag  com.sampl...ebugtool  I     js stack frame info for pc: ************ is relativePc: ****** line: 27 column: 21 mapName: /data/storage/el1/bundle/entry.hap functionName: testBackTraceJsFrame url: entry|entry|1.0.0|src/main/ets/pages/Index.ts packageName: .\n10-22 15:46:13.354   19261-19261   A0FF00/com.sam...gtool/testTag  com.sampl...ebugtool  I     js stack frame info for pc: ************ is relativePc: ****** line: 25 column: 16 mapName: /data/storage/el1/bundle/entry.hap functionName: testBackTraceJsFrame url: entry|entry|1.0.0|src/main/ets/pages/Index.ts packageName: .\n10-22 15:46:13.354   19261-19261   A0FF00/com.sam...gtool/testTag  com.sampl...ebugtool  I     js stack frame info for pc: ************ is relativePc: ****** line: 25 column: 16 mapName: /data/storage/el1/bundle/entry.hap functionName: testBackTraceJsFrame url: entry|entry|1.0.0|src/main/ets/pages/Index.ts packageName: .\n10-22 15:46:13.354   19261-19261   A0FF00/com.sam...gtool/testTag  com.sampl...ebugtool  I     js stack frame info for pc: ************ is relativePc: ****** line: 25 column: 16 mapName: /data/storage/el1/bundle/entry.hap functionName: testBackTraceJsFrame url: entry|entry|1.0.0|src/main/ets/pages/Index.ts packageName: ....\n...\n"
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