"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["197014"], {
335311(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hitracemeter_hitracemeter_guidelines_ndk_hitracemeter_guidelines_ndk_md_a3a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hitracemeter-hitracemeter-guidelines-ndk-hitracemeter-guidelines-ndk-md-a3a.json
var site_docs_system_debug_optimize_performance_analysis_kit_hitracemeter_hitracemeter_guidelines_ndk_hitracemeter_guidelines_ndk_md_a3a_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-ndk/hitracemeter-guidelines-ndk","title":"使用HiTraceMeter跟踪性能（C/C++）","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-ndk/hitracemeter-guidelines-ndk.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-ndk","slug":"/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-ndk/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用HiTraceMeter跟踪性能（C/C++）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracemeter-guidelines-ndk","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用HiTraceMeter跟踪性能（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-arkts/"},"next":{"title":"查看HiTraceMeter日志","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-view/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-ndk/hitracemeter-guidelines-ndk.md


const frontMatter = {
	title: '使用HiTraceMeter跟踪性能（C/C++）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracemeter-guidelines-ndk',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '使用HiTraceMeter跟踪性能（C/C++）';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "接口分类",
  "id": "接口分类",
  "level": 3
}, {
  "value": "接口使用场景",
  "id": "接口使用场景",
  "level": 3
}, {
  "value": "参数解析",
  "id": "参数解析",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "步骤一：创建项目",
  "id": "步骤一创建项目",
  "level": 3
}, {
  "value": "步骤二：采集trace信息并查看",
  "id": "步骤二采集trace信息并查看",
  "level": 3
}, {
  "value": "步骤三：停止采集trace",
  "id": "步骤三停止采集trace",
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
        id: "使用hitracemeter跟踪性能cc",
        children: "使用HiTraceMeter跟踪性能（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiTraceMeter提供系统性能打点接口。开发者在关键代码位置调用这些API，能够有效跟踪进程轨迹，查看系统和应用性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["性能打点跟踪接口由HiTraceMeter模块提供，详细API请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-trace-h/capi-trace-h",
        children: "trace.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_StartTraceEx(HiTrace_Output_Level level, const char* name, const char* customArgs)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开启一个同步时间片跟踪事件，分级控制跟踪输出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 19开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_FinishTraceEx(HiTrace_Output_Level level)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结束一个同步时间片跟踪事件，分级控制跟踪输出。  level必须与流程开始的OH_HiTrace_StartTraceEx()对应参数值保持一致。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 19开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_StartAsyncTraceEx(HiTrace_Output_Level level, const char* name, int32_t taskId, const char* customCategory, const char* customArgs)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开启一个异步时间片跟踪事件，分级控制跟踪输出。  taskId是trace中用来表示关联的ID，如果有多个name相同的任务并行执行，则开发者每次调用OH_HiTrace_StartAsyncTraceEx()时，传入的taskId需不同；如果具有相同name的任务是串行执行的，则taskId可以相同。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 19开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_FinishAsyncTraceEx(HiTrace_Output_Level level, const char* name, int32_t taskId)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["结束一个异步时间片跟踪事件，分级控制跟踪输出。  level、name和taskId必须与流程开始的OH_HiTrace_StartAsyncTraceEx()对应参数值保持一致。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 19开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_HiTrace_CountTraceEx(HiTrace_Output_Level level, const char* name, int64_t count)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["整数跟踪事件，分级控制跟踪输出。  name、count两个参数分别用来标记一个跟踪的整数变量名及整数值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 19开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool OH_HiTrace_IsTraceEnabled(void)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["判断当前是否开启应用trace捕获。  使用hitrace命令行工具等方式开启采集时返回true，未开启采集或停止采集后返回false，此时调用HiTraceMeter性能跟踪打点接口无效。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 19开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_HiTrace_RegisterTraceListener(OH_HiTrace_TraceEventListener callback)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册应用trace捕获开关通知回调，使用callback异步回调。  注册成功后，立即执行一次回调函数，后续回调函数由应用trace捕获开关状态变化触发执行。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 22开始，支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t OH_HiTrace_UnregisterTraceListener(int32_t index);"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注销应用trace捕获开关通知回调。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从API version 22开始，支持该接口。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(923962)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-view#%E7%94%A8%E6%88%B7%E6%80%81trace%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E",
        children: "用户态trace格式"
      }), "使用竖线 | 作为分隔符，所以通过HiTraceMeter接口传递的字符串类型参数应避免包含该字符，以防止trace解析异常。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口分类",
      children: "接口分类"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HiTraceMeter打点接口主要分为三类：同步时间片跟踪接口、异步时间片跟踪接口和整数跟踪接口。HiTraceMeter接口实现均为同步，同步和异步针对的是被跟踪的业务。同步业务使用同步时间片跟踪接口，异步业务使用异步时间片跟踪接口。HiTraceMeter打点接口可与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-ndk",
        children: "HiTraceChain"
      }), "一起使用，进行跨设备、跨进程或跨线程的打点关联与分析。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口使用场景",
      children: "接口使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步时间片跟踪接口"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用于顺序执行的打点场景，需按序成对使用OH_HiTrace_StartTraceEx()接口和OH_HiTrace_FinishTraceEx()接口，否则会导致trace文件在smartperf等可视化工具上显示异常。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "异步时间片跟踪接口"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在异步操作执行前调用OH_HiTrace_StartAsyncTraceEx()接口进行开始打点，在异步操作完成后调用OH_HiTrace_FinishAsyncTraceEx()接口进行结束打点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解析trace时，通过name和taskId参数识别不同的异步跟踪。所以这两个接口必须按序成对使用，并传入相同的name和taskId。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不同的异步流程中应使用不同的name和taskId，但在异步跟踪流程不会同时发生的情况下，可以使用相同的name和taskId。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用错误会导致trace文件在smartperf等可视化工具上显示异常。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "整数跟踪接口"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用于跟踪整数变量。整数值变动时调用OH_HiTrace_CountTraceEx()接口，可在smartperf的泳道图中观察变动情况。由于从开始采集到首次打点存在时间差，这段时间的数值无法查看。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "参数解析",
      children: "参数解析"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "enum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跟踪输出级别，低于系统阈值的跟踪将不会被输出。  log版本阈值为HITRACE_LEVEL_INFO，nolog版本阈值为HITRACE_LEVEL_COMMERCIAL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要跟踪的任务名称或整数变量名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "taskId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用来表示关联的ID，如果有多个name相同的任务并行执行，则开发者每次调用OH_HiTrace_StartAsyncTraceEx()时，传入的taskId需不同。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整数变量的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "customCategory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义聚类名称，用于聚合同一类异步跟踪打点。  若不需要聚类，可传入一个空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "customArgs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const char*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义键值对，若有多组键值对，使用逗号进行分隔，例\"key1=value1,key2=value2\"。  若不需要该参数，可传入一个空字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void (*)(bool)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiTrace_RegisterTraceListener()返回的回调索引。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(731020)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-view#%E7%94%A8%E6%88%B7%E6%80%81trace%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E",
        children: "用户态trace"
      }), "总长度限制为512字符，超过部分将会被截断。建议name、customCategory和customArgs三个字段的总长度不超过420字符，以避免trace被截断。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下为一个使用HiTraceMeter打点接口的Native C++应用示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤一创建项目",
      children: "步骤一：创建项目"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio中新建工程，选择“Native C++”，工程的目录结构如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "├── entry\n│   ├── src\n│       ├── main\n│       │   ├── cpp\n│       │   │   ├── CMakeLists.txt\n│       │   │   ├── napi_init.cpp\n│       │   │   └── types\n│       │   │       └── libentry\n│       │   │           ├── Index.d.ts\n│       │   │           └── oh-package.json5\n│       │   ├── ets\n│       │   │   ├── entryability\n│       │   │   │   └── EntryAbility.ets\n│       │   │   ├── entrybackupability\n│       │   │   │   └── EntryBackupAbility.ets\n│       │   │   └── pages\n│       │   │       └── Index.ets\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“entry > src > main > cpp > CMakeLists.txt”文件中新增libhitrace_ndk.z.so和libhilog_ndk.z.so动态链接库，完整的文件内容如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nproject(HiTraceChainTest03)\n\nset(NATIVERENDER_ROOT_PATH &#36;{CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(&#36;{PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(&#36;{NATIVERENDER_ROOT_PATH}\n                    &#36;{NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED napi_init.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhitrace_ndk.z.so libhilog_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“entry > src > main > cpp > napi_init.cpp”文件，在Add函数中调用HiTraceMeter NDK_C接口进行性能打点跟踪，完整的示例代码如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstdio>\n#include <cstring>\n\n#include \"hilog/log.h\"\n#include \"hitrace/trace.h\"\n#include \"napi/native_api.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"traceTest\"\n\nstatic napi_value Add(napi_env env, napi_callback_info info)\n{\n    // 第一个异步跟踪任务开始\n    HiTrace_Output_Level level = HITRACE_LEVEL_COMMERCIAL;\n    constexpr int64_t taskIdOne = 1001;\n    OH_HiTrace_StartAsyncTraceEx(level, \"myTestAsyncTrace\", taskIdOne, \"categoryTest\", \"key=value\");\n    // 开始计数任务\n    int64_t traceCount = 0;\n    traceCount++;\n    OH_HiTrace_CountTraceEx(level, \"myTestCountTrace\", traceCount);\n    // 业务流程\n    OH_LOG_INFO(LogType::LOG_APP, \"myTraceTest running, taskId: 1001\");\n    // 第二个异步跟踪任务开始，同时第一个跟踪的同名任务还没结束，出现了并行执行，对应接口的taskId需要不同\n    constexpr int64_t taskIdTwo = 1002;\n    OH_HiTrace_StartAsyncTraceEx(level, \"myTestAsyncTrace\", taskIdTwo, \"categoryTest\", \"key=value\");\n    // 开始计数任务\n    traceCount++;\n    OH_HiTrace_CountTraceEx(level, \"myTestCountTrace\", traceCount);\n    // 业务流程\n    OH_LOG_INFO(LogType::LOG_APP, \"myTraceTest running, taskId: 1002\");\n\n    // 结束taskId为1001的异步跟踪任务\n    OH_HiTrace_FinishAsyncTraceEx(level, \"myTestAsyncTrace\", taskIdOne);\n    // 结束taskId为1002的异步跟踪任务\n    OH_HiTrace_FinishAsyncTraceEx(level, \"myTestAsyncTrace\", taskIdTwo);\n\n    // 开始同步跟踪任务\n    OH_HiTrace_StartTraceEx(level, \"myTestSyncTrace\", \"key=value\");\n    // 业务流程\n    OH_LOG_INFO(LogType::LOG_APP, \"myTraceTest running, synchronizing trace\");\n    // 结束同步跟踪任务\n    OH_HiTrace_FinishTraceEx(level);\n\n    // 若通过HiTraceMeter性能打点接口传递的参数的生成过程比较复杂，此时可以通过isTraceEnabled判断当前是否开启应用trace捕获，\n    // 在未开启应用trace捕获时，避免该部分性能损耗\n    constexpr int64_t taskIdThree = 1003;\n    constexpr int loopTime = 10;\n    if (OH_HiTrace_IsTraceEnabled()) {\n        char customArgs[128] = \"key0=value0\";\n        for (int index = 1; index < loopTime; index++) {\n            char buffer[16];\n            snprintf(buffer, sizeof(buffer), \",key%d=value%d\", index, index);\n            strncat(customArgs, buffer, sizeof(customArgs) - strlen(customArgs) - 1);\n        }\n        OH_HiTrace_StartAsyncTraceEx(level, \"myTestAsyncTrace\", taskIdThree, \"categoryTest\", customArgs);\n        OH_LOG_INFO(LogType::LOG_APP, \"myTraceTest running, taskId: 1003\");\n        OH_HiTrace_FinishAsyncTraceEx(level, \"myTestAsyncTrace\", taskIdThree);\n    } else {\n        OH_LOG_INFO(LogType::LOG_APP, \"myTraceTest running, trace is not enabled\");\n    }\n\n    size_t requireArgc = 2;\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    napi_valuetype valuetype0;\n    napi_typeof(env, args[0], &valuetype0);\n\n    napi_valuetype valuetype1;\n    napi_typeof(env, args[1], &valuetype1);\n\n    double value0;\n    napi_get_value_double(env, args[0], &value0);\n\n    double value1;\n    napi_get_value_double(env, args[1], &value1);\n\n    napi_value sum;\n    napi_create_double(env, value0 + value1, &sum);\n\n    return sum;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"add\", nullptr, Add, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤二采集trace信息并查看",
      children: "步骤二：采集trace信息并查看"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio Terminal窗口中执行如下命令，开启应用trace捕获。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PS D:\\xxx\\xxx> hdc shell\n$ hitrace --trace_begin app\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单击DevEco Studio界面上的运行按钮，启动应用。点击应用界面的“Hello World”文本，执行包含HiTraceMeter打点的业务逻辑。然后执行如下命令抓取trace数据，并使用“myTest”关键字过滤trace数据（示例打点接口传递的name字段前缀均为“myTest”）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hitrace --trace_dump | grep myTest\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "成功抓取的trace数据如下所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<...>-49837   (-------) [002] .... 349137.708093: tracing_mark_write: S|49837|H:myTestAsyncTrace|1001|M62|categoryTest|key=value\n<...>-49837   (-------) [002] .... 349137.708103: tracing_mark_write: C|49837|H:myTestCountTrace|1|M62\n<...>-49837   (-------) [002] .... 349137.708201: tracing_mark_write: S|49837|H:myTestAsyncTrace|1002|M62|categoryTest|key=value\n<...>-49837   (-------) [002] .... 349137.708209: tracing_mark_write: C|49837|H:myTestCountTrace|2|M62\n<...>-49837   (-------) [002] .... 349137.708239: tracing_mark_write: F|49837|H:myTestAsyncTrace|1001|M62\n<...>-49837   (-------) [002] .... 349137.708246: tracing_mark_write: F|49837|H:myTestAsyncTrace|1002|M62\n<...>-49837   (-------) [002] .... 349137.708252: tracing_mark_write: B|49837|H:myTestSyncTrace|M62|key=value\n<...>-49837   (-------) [002] .... 349137.708301: tracing_mark_write: S|49837|H:myTestAsyncTrace|1003|M62|categoryTest|key0=value0,key1=value1,key2=value2,key3=value3,key4=value4,key5=value5,key6=value6,key7=value7,key8=value8,key9=value9\n<...>-49837   (-------) [002] .... 349137.708323: tracing_mark_write: F|49837|H:myTestAsyncTrace|1003|M62\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤三停止采集trace",
      children: "步骤三：停止采集trace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行以下命令，结束应用trace捕获。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "$ hitrace --trace_finish\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "再次点击应用界面的“Hello World”文本，此时应用trace捕获已关闭，OH_HiTrace_IsTraceEnabled()接口返回false。在DevEco Studio Log窗口使用关键字“not enabled”进行过滤，会打印如下日志。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "myTraceTest running, trace is not enabled\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(552051)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "log版本在使用hitrace --trace_finish命令停止采集后会自动拉起快照模式，打开应用trace捕获，此时OH_HiTrace_IsTraceEnabled()接口返回true，不会打印上述日志。"
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
923962(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
731020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
552051(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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