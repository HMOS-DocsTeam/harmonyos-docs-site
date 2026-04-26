"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["788266"], {
579621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_scenarios_jsvm_debugger_cpuprofiler_heapsnapshot_jsvm_debugger_cpuprofiler_heapsnapshot_md_bb5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-scenarios-jsvm-debugger-cpuprofiler-heapsnapshot-jsvm-debugger-cpuprofiler-heapsnapshot-md-bb5.json
var site_docs_coding_jsvm_jsvm_scenarios_jsvm_debugger_cpuprofiler_heapsnapshot_jsvm_debugger_cpuprofiler_heapsnapshot_md_bb5_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-scenarios/jsvm-debugger-cpuprofiler-heapsnapshot/jsvm-debugger-cpuprofiler-heapsnapshot","title":"JSVM-API调试&定位","description":"JSVM，即标准JS引擎，是严格遵守ECMAScript规范的JavaScript代码执行引擎。详情参考：JSVM。","source":"@site/docs/coding/jsvm/jsvm-scenarios/jsvm-debugger-cpuprofiler-heapsnapshot/jsvm-debugger-cpuprofiler-heapsnapshot.md","sourceDirName":"coding/jsvm/jsvm-scenarios/jsvm-debugger-cpuprofiler-heapsnapshot","slug":"/coding/jsvm/jsvm-scenarios/jsvm-debugger-cpuprofiler-heapsnapshot/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-debugger-cpuprofiler-heapsnapshot/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"JSVM-API调试&定位","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-debugger-cpuprofiler-heapsnapshot","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口创建和获取数值","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-basic-data-types/"},"next":{"title":"使用JSVM-API接口进行Trace相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/use-jsvm-about-trace/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-scenarios/jsvm-debugger-cpuprofiler-heapsnapshot/jsvm-debugger-cpuprofiler-heapsnapshot.md


const frontMatter = {
	title: 'JSVM-API调试&定位',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-debugger-cpuprofiler-heapsnapshot',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'JSVM-API调试&定位';

const assets = {

};



const toc = [{
  "value": "调试能力使用方法",
  "id": "调试能力使用方法",
  "level": 2
}, {
  "value": "使用 OH_JSVM_OpenInspector",
  "id": "使用-oh_jsvm_openinspector",
  "level": 3
}, {
  "value": "使用 OH_JSVM_OpenInspectorWithName",
  "id": "使用-oh_jsvm_openinspectorwithname",
  "level": 3
}, {
  "value": "使用 Chrome inspect 页面进行调试",
  "id": "使用-chrome-inspect-页面进行调试",
  "level": 3
}, {
  "value": "使用 websocket 端口进行调试",
  "id": "使用-websocket-端口进行调试",
  "level": 3
}, {
  "value": "CPU Profiler及Heap Snapshot使用方法",
  "id": "cpu-profiler及heap-snapshot使用方法",
  "level": 2
}, {
  "value": "CPU Profiler接口使用方法",
  "id": "cpu-profiler接口使用方法",
  "level": 3
}, {
  "value": "Heap Snapshot接口使用方法",
  "id": "heap-snapshot接口使用方法",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "jsvm-api调试定位",
        children: "JSVM-API调试&定位"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSVM，即标准JS引擎，是严格遵守ECMAScript规范的JavaScript代码执行引擎。详情参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm",
        children: "JSVM"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于JSVM的JS代码调试调优能力包括：Debugger、CPU Profiler、Heap Snapshot、Heap Statistics。涉及以下接口："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口功能"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定环境的虚拟机实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetHeapStatistics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一组虚拟机堆的统计数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_StartCpuProfiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建并启动一个CPU profiler。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_StopCpuProfiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止CPU profiler并将结果输出到流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_TakeHeapSnapshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前堆快照并将其输出到流。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_OpenInspector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在指定的主机和端口上激活inspector，将用来调试JS代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_OpenInspectorWithName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于传入的 pid 和 name 激活 inspector。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CloseInspector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试关闭剩余的所有inspector连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_WaitForDebugger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等待主机与inspector建立socket连接，连接建立后程序将继续运行。执行Runtime.runIfWaitingForDebugger命令。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文将介绍调试方法、CPU Profiler使用方法和Heap Snapshot使用方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调试能力使用方法",
      children: "调试能力使用方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用-oh_jsvm_openinspector",
      children: "使用 OH_JSVM_OpenInspector"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用工程配置文件module.json中配置网络权限："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"requestPermissions\": [{\n  \"name\": \"ohos.permission.INTERNET\",\n  \"reason\": \"$string:app_name\",\n  \"usedScene\": {\n    \"abilities\": [\n      \"FromAbility\"\n    ],\n    \"when\": \"inuse\"\n  }\n}]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为避免debugger过程中的暂停被误报为无响应异常，可以开启DevEco Studio的Debug模式，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-debug-arkts-debug-V5",
            children: "debug启动调试"
          }), "（无需设置断点），或者可以在非主线程的其它线程中运行JSVM。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在非主线程的其他线程中运行JSVM示例代码\nstatic napi_value RunTest(napi_env env, napi_callback_info info)\n{\n    std::thread testJSVMThread(TestJSVM);\n    testJSVMThread.detach();\n    return  nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在执行JS代码之前，调用OH_JSVM_OpenInspector在指定的主机和端口上激活inspector，创建socket。例如OH_JSVM_OpenInspector(env, \"localhost\", 9225)，在端侧本机端口9225创建socket。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_JSVM_WaitForDebugger，等待建立socket连接。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查端侧端口是否打开成功。hdc shell \"netstat -anp | grep 9225\"。结果为9225端口状态为“LISTEN\"即可。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "转发端口。hdc fport tcp:9229 tcp:9225。转发开发者个人计算机侧端口9229到端侧端口9225。结果为\"Forwardport result:OK\"即可。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在chrome浏览器地址栏输入\"localhost:9229/json\"，回车。获取端口连接信息。拷贝\"devtoolsFrontendUrl\"字段url内容到地址栏，回车，进入DevTools源码页，将看到在应用中通过OH_JSVM_RunScript执行的JS源码，此时暂停在第一行JS源码处。(注：\"devtoolsFrontendUrl\"字段url只支持使用Chrome、Edge浏览器打开，不支持使用Firefox、Safari等浏览器打开。)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户可在源码页打断点，通过按钮发出各种调试命令控制JS代码执行，并查看变量。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_JSVM_CloseInspector关闭inspector，结束socket连接。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSVM-API接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "，本文仅对接口对应C++相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"ark_runtime/jsvm.h\"\n\n#include <string>\n\nusing namespace std;\n\n// 待调试的JS源码\nstatic string srcDebugger = R\"JS(\nconst concat = (...args) => args.reduce((a, b) => a + b);\nvar dialogue = concat('\"What ', 'is ', 'your ', 'name ', '?\"');\ndialogue = concat(dialogue, ' --', '\"My ', 'name ', 'is ', 'Bob ', '.\"');\n)JS\";\n\n// 开启debugger\nstatic void EnableInspector(JSVM_Env env) {\n    // 在指定的主机和端口上激活inspector，创建socket。\n    OH_JSVM_OpenInspector(env, \"localhost\", 9225);\n    // 等待建立socket连接。\n    OH_JSVM_WaitForDebugger(env, true);\n}\n\n// 关闭debugger\nstatic void CloseInspector(JSVM_Env env) {\n    // 关闭inspector，结束socket连接。\n    OH_JSVM_CloseInspector(env);\n}\n\nstatic void RunScript(JSVM_Env env) {\n    JSVM_HandleScope handleScope;\n    OH_JSVM_OpenHandleScope(env, &handleScope);\n\n    JSVM_Value jsSrc;\n    OH_JSVM_CreateStringUtf8(env, srcDebugger.c_str(), srcDebugger.size(), &jsSrc);\n\n    JSVM_Script script;\n    OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script);\n\n    JSVM_Value result;\n    OH_JSVM_RunScript(env, script, &result);\n\n    OH_JSVM_CloseHandleScope(env, handleScope);\n}\n\nvoid TestJSVM() {\n    JSVM_InitOptions initOptions{};\n    OH_JSVM_Init(&initOptions);\n\n    JSVM_VM vm;\n    OH_JSVM_CreateVM(nullptr, &vm);\n    JSVM_VMScope vmScope;\n    OH_JSVM_OpenVMScope(vm, &vmScope);\n\n    JSVM_Env env;\n    OH_JSVM_CreateEnv(vm, 0, nullptr, &env);\n    // 执行JS代码之前打开debugger。\n    EnableInspector(env);\n    JSVM_EnvScope envScope;\n    OH_JSVM_OpenEnvScope(env, &envScope);\n\n    // 执行JS代码。\n    RunScript(env);\n\n    OH_JSVM_CloseEnvScope(env, envScope);\n    // 执行JS代码之后关闭debugger。\n    CloseInspector(env);\n    OH_JSVM_DestroyEnv(env);\n    OH_JSVM_CloseVMScope(vm, vmScope);\n    OH_JSVM_DestroyVM(vm);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用-oh_jsvm_openinspectorwithname",
      children: "使用 OH_JSVM_OpenInspectorWithName"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用工程配置文件module.json中配置网络权限："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"requestPermissions\": [{\n  \"name\": \"ohos.permission.INTERNET\",\n  \"reason\": \"$string:app_name\",\n  \"usedScene\": {\n    \"abilities\": [\n      \"FromAbility\"\n    ],\n    \"when\": \"inuse\"\n  }\n}]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为避免debugger过程中的暂停被误报为无响应异常，可以", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-debug-arkts-debug-V5",
            children: "开启DevEco Studio的Debug模式"
          }), "（无需设置断点），或者可以在非主线程的其他线程中运行JSVM。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开 inspector 端口，连接 devtools 用于调试，其流程如下：在执行JS代码之前，调用OH_JSVM_OpenInspector在指定的主机和端口上激活inspector，创建socket。例如OH_JSVM_OpenInspectorWithName(env, 123, \"test\")，创建 tcp socket 及其对应的 unixdomain 端口。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_JSVM_WaitForDebugger，等待建立socket连接。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "检查端侧端口是否打开成功。hdc shell \"cat /proc/net/unix | grep jsvm\"。结果出现可用的 unix 端口即可，如：jsvm_devtools_remote_9229_123，其中 9229 为 tcp 端口号，123 为对应的 pid。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "转发端口。hdc fport tcp:9229 tcp:9229。转发开发者个人计算机侧端口9229到端侧端口9229。结果为\"Forwardport result:OK\"即可。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 chrome 浏览器地址栏输入 \"localhost:9229/json\"，回车。获取端口连接信息。打开Chrome开发者工具，拷贝\"devtoolsFrontendUrl\"字段url内容到地址栏，回车，进入DevTools源码页，将看到在应用中通过OH_JSVM_RunScript执行的JS源码，此时暂停在第一行JS源码处。(注：\"devtoolsFrontendUrl\"字段url只支持使用Chrome、Edge浏览器打开，不支持使用Firefox、Safari等浏览器打开。)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户可在源码页打断点，通过按钮发出各种调试命令控制JS代码执行，并查看变量。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_JSVM_CloseInspector关闭inspector，结束socket连接。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "代码示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对应的 enable inspector 替换为下面的即可"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 开启debugger\nstatic void EnableInspector(JSVM_Env env) {\n    // 在指定的主机和端口上激活inspector，创建socket。\n    OH_JSVM_OpenInspectorWithName(env, 123, \"test\");\n    // 等待建立socket连接。\n    OH_JSVM_WaitForDebugger(env, true);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用-chrome-inspect-页面进行调试",
      children: "使用 Chrome inspect 页面进行调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了使用上述打开\"devtoolsFrontendUrl\"字段url的方法调试代码之外，也可以直接通过Chrome浏览器的 chrome://inspect/#devices 页面进行调试。方法如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chrome浏览器中打开 chrome://inspect/#devices，勾选以下内容："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(608176)/* ["default"] */.A) + "",
            width: "621",
            height: "315"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行端口转发命令：hdc fport [开发者个人计算机侧端口号] [端侧端口号]"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如：hdc fport tcp:9227 tcp:9226"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击Port forwarding按钮，左侧输入开发者个人计算机侧端口，右侧输入端侧端口号，点击done。如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(987314)/* ["default"] */.A) + "",
            width: "457",
            height: "478"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击Configure按钮，输入开发者个人计算机侧的端口号，如localhost:9227。如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(302099)/* ["default"] */.A) + "",
            width: "364",
            height: "420"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "稍等片刻，会在target下出现调试的内容，点击inspect即可调试。如下图所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(659197)/* ["default"] */.A) + "",
            width: "593",
            height: "355"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用-websocket-端口进行调试",
      children: "使用 websocket 端口进行调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了使用上述打开 \"devtoolsFrontendUrl\" 字段url的方法通过网页端 chrome devtools 调试代码之外，如果读者了解如何使用 CDP 协议代替网页端 devtools 功能，也可以通过连接 inspector 提供的 websocket 端口进行调试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中连接 websocket 的方法为，根据前面提供的网页端调试步骤，在做完端口映射之后（如映射到 9229 端口），在 chrome 浏览器地址栏输入 \"localhost:9229/json\"，回车，获取\"webSocketDebuggerUrl\" 字段所对应的 url，然后使用标准的 websocket 客户端连接这个 url 即可发送 CDP 调试协议进行调试。需要注意的是，当前版本 inspector 提供的websocket 端口仅支持接收 Text Frame, Ping Frame 和 Connection Close Frame，所有其他类型的帧都会被视为错误帧而导致 websocket 连接中断。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CDP 协议可以参考 chrome 的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://chromedevtools.github.io/devtools-protocol/",
        children: "官方文档"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cpu-profiler及heap-snapshot使用方法",
      children: "CPU Profiler及Heap Snapshot使用方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cpu-profiler接口使用方法",
      children: "CPU Profiler接口使用方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在执行JS代码之前，调用OH_JSVM_StartCpuProfiler开始采样并返回JSVM_CpuProfiler。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在执行JS代码后，调用OH_JSVM_StopCpuProfiler，传入1中返回的JSVM_CpuProfiler，传入输出流回调及输出流指针。数据将会写入指定的输出流中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输出数据为JSON字符串。可存入.cpuprofile文件中。该文件类型可导入Chrome浏览器-DevTools-JavaScript Profiler工具中解析成性能分析视图。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "heap-snapshot接口使用方法",
      children: "Heap Snapshot接口使用方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为分析某段JS代码的堆对象创建情况，可在执行JS代码前后，分别调用一次OH_JSVM_TakeHeapSnapshot。传入输出流回调及输出流指针。数据将会写入指定的输出流中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "输出数据可存入.heapsnapshot文件中。该文件类型可导入Chrome浏览器-DevTools-Memory工具中解析成内存分析视图。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSVM-API接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "，本文仅对接口对应C++相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"ark_runtime/jsvm.h\"\n\n#include <fstream>\n#include <iostream>\n\nusing namespace std;\n\n// 待调优的JS代码。\nstatic string srcProf = R\"JS(\nfunction sleep(delay) {\n    var start = (new Date()).getTime();\n    while ((new Date()).getTime() - start < delay) {\n        continue;\n    }\n}\n\nfunction work3() {\n    sleep(300);\n}\n\nfunction work2() {\n    work3();\n    sleep(200);\n}\n\nfunction work1() {\n    work2();\n    sleep(100);\n}\n\nwork1();\n)JS\";\n\n// 数据输出流回调，用户自定义，处理返回的调优数据，此处以写入文件为例。\nstatic bool OutputStream(const char *data, int size, void *streamData) {\n    auto &os = *reinterpret_cast<ofstream *>(streamData);\n    if (data) {\n        os.write(data, size);\n    } else {\n        os.close();\n    }\n    return true;\n}\n\nstatic JSVM_CpuProfiler ProfilingBegin(JSVM_VM vm) {\n    // 文件输出流，保存调优数据，/data/storage/el2/base/files为沙箱路径。以包名为com.example.helloworld为例。\n    // 实际文件会保存到/data/app/el2/100/base/com.example.helloworld/files/heap-snapshot-begin.heapsnapshot。\n    ofstream heapSnapshot(\"/data/storage/el2/base/files/heap-snapshot-begin.heapsnapshot\",\n                          ios::out | ios::binary | ios::trunc);\n    // 执行JS前获取一次Heap Snapshot数据。\n    OH_JSVM_TakeHeapSnapshot(vm, OutputStream, &heapSnapshot);\n    JSVM_CpuProfiler cpuProfiler;\n    // 开启CPU Profiler。\n    OH_JSVM_StartCpuProfiler(vm, &cpuProfiler);\n    return cpuProfiler;\n}\n\n// 关闭调优数据采集工具\nstatic void ProfilingEnd(JSVM_VM vm, JSVM_CpuProfiler cpuProfiler) {\n    // 文件输出流，保存调优数据，/data/storage/el2/base/files为沙箱路径。以包名为com.example.helloworld为例。\n    // 实际文件会保存到/data/app/el2/100/base/com.example.helloworld/files/cpu-profile.cpuprofile。\n    ofstream cpuProfile(\"/data/storage/el2/base/files/cpu-profile.cpuprofile\",\n                        ios::out | ios::binary | ios::trunc);\n    // 关闭CPU Profiler，获取数据。\n    OH_JSVM_StopCpuProfiler(vm, cpuProfiler, OutputStream, &cpuProfile);\n    ofstream heapSnapshot(\"/data/storage/el2/base/files/heap-snapshot-end.heapsnapshot\",\n                              ios::out | ios::binary | ios::trunc);\n    // 执行JS后再获取一次Heap Snapshot数据，与执行前数据作对比，以分析内存问题或者进行内存调优。\n    OH_JSVM_TakeHeapSnapshot(vm, OutputStream, &heapSnapshot);\n}\n\nstatic JSVM_Value RunScriptWithStatistics(JSVM_Env env, JSVM_CallbackInfo info) {\n    JSVM_VM vm;\n    OH_JSVM_GetVM(env, &vm);\n\n    // 开始调优。\n    auto cpuProfiler = ProfilingBegin(vm);\n\n    JSVM_HandleScope handleScope;\n    OH_JSVM_OpenHandleScope(env, &handleScope);\n\n    JSVM_Value jsSrc;\n    OH_JSVM_CreateStringUtf8(env, srcProf.c_str(), srcProf.size(), &jsSrc);\n\n    JSVM_Script script;\n    OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script);\n\n    JSVM_Value result;\n    // 执行JS代码。\n    OH_JSVM_RunScript(env, script, &result);\n\n    OH_JSVM_CloseHandleScope(env, handleScope);\n\n    // 结束调优。\n    ProfilingEnd(vm, cpuProfiler);\n    return nullptr;\n}\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = RunScriptWithStatistics},\n};\nstatic JSVM_CallbackStruct *method = param;\n// runScriptWithStatistics方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"runScriptWithStatistics\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "样例测试JS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char *srcCallNative = R\"JS(runScriptWithStatistics();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "在对应鸿蒙设备内生成两个文件用于后续调优：\nheap-snapshot-end.heapsnapshot,\ncpu-profile.cpuprofile\n文件功能见上文接口使用方法介绍\n"
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
659197(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479377-45117befeecb01eb74ef497ae2cb9ac2.png");

},
302099(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959376-4938db3e88f1ee65a970b4d2cf1550a4.png");

},
987314(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439421-e313c3317c6291f9cedef455965d8bfa.png");

},
608176(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799726-a36b88248047e6d09acca5e8538ba412.png");

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