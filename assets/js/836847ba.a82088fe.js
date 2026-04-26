"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["87915"], {
456367(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_background_task_kit_native_transient_task_native_transient_task_md_836_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-background-task-kit-native-transient-task-native-transient-task-md-836.json
var site_docs_background_task_kit_native_transient_task_native_transient_task_md_836_namespaceObject = JSON.parse('{"id":"background-task-kit/native-transient-task/native-transient-task","title":"短时任务(C/C++)","description":"场景介绍","source":"@site/docs/background-task-kit/native-transient-task/native-transient-task.md","sourceDirName":"background-task-kit/native-transient-task","slug":"/background-task-kit/native-transient-task/","permalink":"/harmonyos-docs-site/background-task-kit/native-transient-task/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"短时任务(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-transient-task","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"短时任务(ArkTS)","permalink":"/harmonyos-docs-site/background-task-kit/transient-task/"},"next":{"title":"长时任务(ArkTS)","permalink":"/harmonyos-docs-site/background-task-kit/continuous-task/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/background-task-kit/native-transient-task/native-transient-task.md


const frontMatter = {
	title: '短时任务(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-transient-task',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '短时任务(C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "在napi_init.cpp文件中封装接口并注册模块",
  "id": "在napi_initcpp文件中封装接口并注册模块",
  "level": 3
}, {
  "value": "在index.d.ts文件中声明函数",
  "id": "在indexdts文件中声明函数",
  "level": 3
}, {
  "value": "在index.ets文件中调用函数",
  "id": "在indexets文件中调用函数",
  "level": 3
}, {
  "value": "配置库依赖",
  "id": "配置库依赖",
  "level": 3
}, {
  "value": "测试步骤",
  "id": "测试步骤",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "短时任务cc",
        children: "短时任务(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用退至后台一小段时间后，应用进程会被挂起，无法执行对应的任务。如果应用在后台仍需要执行耗时不长的任务，如状态保存等，可以通过本文申请短时任务，扩展应用在后台的运行时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["申请短时任务的按钮，不可连续点击超过3次，否则会超出短时任务数量限制并报错。使用过程中更多的约束与限制请参考短时任务（ArkTS）的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/background-task-kit/transient-task#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
        children: "约束与限制"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["常用接口如下表所示，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/background-tasks-api/background-tasks-c/background-tasks-headerfile/capi-transient-task-api-h/capi-transient-task-api-h",
        children: "transient_task_api.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-c/background-tasks-headerfile/capi-transient-task-api-h/capi-transient-task-api-h#oh_backgroundtaskmanager_requestsuspenddelay",
              children: "int32_t OH_BackgroundTaskManager_RequestSuspendDelay(const char *reason, TransientTask_Callback callback, TransientTask_DelaySuspendInfo *info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请短时任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-c/background-tasks-headerfile/capi-transient-task-api-h/capi-transient-task-api-h#oh_backgroundtaskmanager_getremainingdelaytime",
              children: "int32_t OH_BackgroundTaskManager_GetRemainingDelayTime(int32_t requestId, int32_t *delayTime)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取对应短时任务的剩余时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-c/background-tasks-headerfile/capi-transient-task-api-h/capi-transient-task-api-h#oh_backgroundtaskmanager_cancelsuspenddelay",
              children: "int32_t OH_BackgroundTaskManager_CancelSuspendDelay(int32_t requestId)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消短时任务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/background-tasks-api/background-tasks-c/background-tasks-headerfile/capi-transient-task-api-h/capi-transient-task-api-h#oh_backgroundtaskmanager_gettransienttaskinfo",
              children: "int32_t OH_BackgroundTaskManager_GetTransientTaskInfo(TransientTask_TransientTaskInfo *transientTaskInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有短时任务信息，如当日剩余总配额等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在napi_initcpp文件中封装接口并注册模块",
      children: "在napi_init.cpp文件中封装接口并注册模块"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "封装函数"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"transient_task/transient_task_api.h\"\n\nTransientTask_DelaySuspendInfo delaySuspendInfo;\nconst int32_t TransientTask_TIMER = 3;\nstatic void Callback(void)\n{\n    // 短时任务即将结束，业务在这里取消短时任务\n    OH_BackgroundTaskManager_CancelSuspendDelay(delaySuspendInfo.requestId);\n}\n\n// 申请短时任务\nstatic napi_value RequestSuspendDelay(napi_env env, napi_callback_info info)\n{\n    napi_value result;\n    int32_t res = OH_BackgroundTaskManager_RequestSuspendDelay(\"test\", Callback, &delaySuspendInfo);\n    if (res == 0) {\n        napi_create_int32(env, delaySuspendInfo.requestId, &result);\n    } else {\n        napi_create_int32(env, -1, &result);\n    }\n    return result;\n}\n\n// 获取剩余时间\nstatic napi_value GetRemainingDelayTime(napi_env env, napi_callback_info info)\n{\n    napi_value result;\n    int32_t delayTime = 0;\n    int32_t res = OH_BackgroundTaskManager_GetRemainingDelayTime(delaySuspendInfo.requestId, &delayTime);\n    if (res == 0) {\n        napi_create_int32(env, delayTime, &result);\n    } else {\n        napi_create_int32(env, -1, &result);\n    }\n    return result;\n}\n\n// 取消短时任务\nstatic napi_value CancelSuspendDelay(napi_env env, napi_callback_info info)\n{\n    napi_value result;\n    int32_t res = OH_BackgroundTaskManager_CancelSuspendDelay(delaySuspendInfo.requestId);\n    napi_create_int32(env, res, &result);\n    return result;\n}\n\n// 获取所有短时任务信息\nTransientTask_TransientTaskInfo transientTaskInfo;\n\nstatic napi_value GetTransientTaskInfo(napi_env env, napi_callback_info info)\n{\n    napi_value result;\n    napi_create_object(env, &result);\n    int32_t res = OH_BackgroundTaskManager_GetTransientTaskInfo(&transientTaskInfo);\n    napi_value napiRemainingQuota = nullptr;\n    // 获取成功，格式化数据并返回给接口\n    if (res == 0) {\n        napi_create_int32(env, transientTaskInfo.remainingQuota, &napiRemainingQuota);\n        napi_set_named_property(env, result, \"remainingQuota\", napiRemainingQuota); // 格式化当日总配额\n\n        napi_value info {nullptr};\n        napi_create_array(env, &info);\n        uint32_t count = 0;\n        // 格式化所有已申请的短时任务信息\n        for (int index = 0; index < TransientTask_TIMER; index++) {\n            if (transientTaskInfo.transientTasks[index].requestId == 0) {\n                continue;\n            }\n            \n            napi_value napiWork = nullptr;\n            napi_create_object(env, &napiWork);\n\n            napi_value napiRequestId = nullptr;\n            napi_create_int32(env, transientTaskInfo.transientTasks[index].requestId, &napiRequestId);\n            napi_set_named_property(env, napiWork, \"requestId\", napiRequestId);\n\n            napi_value napiActualDelayTime = nullptr;\n            napi_create_int32(env, transientTaskInfo.transientTasks[index].actualDelayTime, &napiActualDelayTime);\n            napi_set_named_property(env, napiWork, \"actualDelayTime\", napiActualDelayTime);\n\n            napi_set_element(env, info, count, napiWork);\n            count++;\n        }\n        napi_set_named_property(env, result, \"transientTasks\", info);\n    } else {\n        napi_create_int32(env, 0, &napiRemainingQuota);\n        napi_set_named_property(env, result, \"remainingQuota\", napiRemainingQuota);\n        napi_value info {nullptr};\n        napi_create_array(env, &info);\n        napi_set_named_property(env, result, \"transientTasks\", info);\n    }\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册函数"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"RequestSuspendDelay\", nullptr, RequestSuspendDelay, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"GetRemainingDelayTime\", nullptr, GetRemainingDelayTime, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"CancelSuspendDelay\", nullptr, CancelSuspendDelay, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"GetTransientTaskInfo\", nullptr, GetTransientTaskInfo, nullptr, nullptr, nullptr, napi_default, nullptr },\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册模块"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在indexdts文件中声明函数",
      children: "在index.d.ts文件中声明函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import backgroundTaskManager from '@kit.BackgroundTasksKit';\n\nexport const RequestSuspendDelay: () => number;\nexport const GetRemainingDelayTime: () => number;\nexport const CancelSuspendDelay: () => number;\nexport const GetTransientTaskInfo: () => backgroundTaskManager.TransientTaskInfo;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在indexets文件中调用函数",
      children: "在index.ets文件中调用函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import testTransientTask from 'libentry.so';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '';\n  // ...\n\n  build() {\n    Row() {\n      Column() {\n        // ...\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        Button() {\n          Text(\"RequestSuspendDelay\").fontSize(20)\n        }\n        .id('request_suspend_delay')\n        .margin({ top: 10, bottom: 10 })\n        .width(250)\n        .height(40)\n        .backgroundColor('#0D9FFB')\n        .onClick(() => {\n          this.RequestSuspendDelay();\n        })\n\n        Button(){\n          Text('GetRemainingDelayTime').fontSize(20)\n        }\n        .id('get_remaining_delay_time')\n        .margin({ top: 10, bottom: 10 })\n        .width(250)\n        .height(40)\n        .backgroundColor('#0D9FFB')\n        .onClick(() => {\n          this.GetRemainingDelayTime();\n        })\n\n        Button(){\n          Text('CancelSuspendDelay').fontSize(20)\n        }\n        .id('cancel_suspend_delay')\n        .margin({ top: 10, bottom: 10 })\n        .width(250)\n        .height(40)\n        .backgroundColor('#0D9FFB')\n        .onClick(() => {\n          this.CancelSuspendDelay();\n        })\n\n        Button(){\n          Text('GetTransientTaskInfo').fontSize(20)\n        }\n        .id('get_transient_task_info')\n        .margin({ top: 10, bottom: 10 })\n        .width(250)\n        .height(40)\n        .backgroundColor('#0D9FFB')\n        .onClick(() => {\n          this.GetTransientTaskInfo();\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n\n  RequestSuspendDelay() {\n    let requestId = testTransientTask.RequestSuspendDelay();\n    // ...\n    console.info('The return requestId is ' + requestId);\n  }\n\n  GetRemainingDelayTime() {\n    let time = testTransientTask.GetRemainingDelayTime();\n    console.info('The time is ' + time);\n  }\n\n  CancelSuspendDelay() {\n    let ret = testTransientTask.CancelSuspendDelay();\n    console.info('The ret is ' + ret);\n  }\n\n  GetTransientTaskInfo() {\n    let ret = testTransientTask.GetTransientTaskInfo();\n    console.info('The ret is ' + JSON.stringify(ret));\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置库依赖",
      children: "配置库依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置CMakeLists.txt，本模块需要用到的共享库是libtransient_task.so，在工程自动生成的CMakeLists.txt中的target_link_libraries中添加此共享库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libace_napi.z.so libtransient_task.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "测试步骤",
      children: "测试步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "连接设备并运行程序。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击 申请短时任务 按钮，控制台会打印日志，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "The return requestId is 1\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击 获取剩余时间 按钮，控制台会打印日志，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "The return requestId is 18000\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击 取消短时任务 按钮，控制台会打印日志，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "The ret is 0\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击 获取所有短时任务信息 按钮，控制台会打印日志，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "The ret is {\"remainingQuota\":600000,\"transientTasks\":[]}\n"
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