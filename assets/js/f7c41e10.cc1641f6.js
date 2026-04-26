"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["921195"], {
604544(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hicollie_hicollie_settimer_guidelines_ndk_hicollie_settimer_guidelines_ndk_md_f7c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hicollie-hicollie-settimer-guidelines-ndk-hicollie-settimer-guidelines-ndk-md-f7c.json
var site_docs_system_debug_optimize_performance_analysis_kit_hicollie_hicollie_settimer_guidelines_ndk_hicollie_settimer_guidelines_ndk_md_f7c_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hicollie/hicollie-settimer-guidelines-ndk/hicollie-settimer-guidelines-ndk","title":"使用HiCollie监控函数执行时间超长问题（C/C++）","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-settimer-guidelines-ndk/hicollie-settimer-guidelines-ndk.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hicollie/hicollie-settimer-guidelines-ndk","slug":"/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-settimer-guidelines-ndk/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-settimer-guidelines-ndk/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用HiCollie监控函数执行时间超长问题（C/C++）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hicollie-settimer-guidelines-ndk","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用HiCollie检测业务线程卡死卡顿问题（C/C++）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-guidelines-ndk/"},"next":{"title":"错误管理开发指导","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/error-manager/errormanager-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-settimer-guidelines-ndk/hicollie-settimer-guidelines-ndk.md


const frontMatter = {
	title: '使用HiCollie监控函数执行时间超长问题（C/C++）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hicollie-settimer-guidelines-ndk',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '使用HiCollie监控函数执行时间超长问题（C/C++）';

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
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用hicollie监控函数执行时间超长问题cc",
        children: "使用HiCollie监控函数执行时间超长问题（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务执行超时指要监控的业务代码逻辑执行时长超过业务逻辑预期时间。本文面向开发者介绍HiCollie模块对外提供函数执行时间超长的检测能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HiCollie_SetTimer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册定时器，用于检测函数或代码块执行是否超过自定义时间。  结合OH_HiCollie_CancelTimer接口配套使用，应在调用耗时的函数之前使用。  说明：从API version 18开始，支持该接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HiCollie_CancelTimer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消定时器。  结合OH_HiCollie_SetTimer接口配套使用，执行函数或代码块后使用，OH_HiCollie_CancelTimer通过id将该任务取消；  若未在自定义时间内取消，则执行回调函数，在特定自定义超时动作下，生成故障日志。  说明：从API version 18开始，支持该接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API接口的具体使用说明（参数使用限制、具体取值范围等）请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-c/performance-analysis-headerfile/capi-hicollie-h/capi-hicollie-h",
          children: "HiCollie"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "函数执行时间超长故障日志以syswarning-开头，生成在“设备/data/log/warninglog/”路径下。文件名格式为“syswarning-应用包名-应用UID-秒级时间.log”。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下文将展示如何在应用内增加一个按钮，并单击该按钮以调用HiCollie Ndk接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建Native C++工程，目录结构如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "entry:\n  src:\n    main:\n      cpp:\n        types:\n          libentry:\n            - index.d.ts\n        - CMakeLists.txt\n        - napi_init.cpp\n      ets:\n        entryability:\n          - EntryAbility.ts\n        pages:\n          - Index.ets\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“CMakeLists.txt”文件，添加源文件及动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 依赖动态库libhilog_ndk.z.so（日志输出），libohhicollie.so（HiCollie对外检测接口）\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libohhicollie.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“napi_init.cpp”文件，导入依赖头文件、定义LOG_TAG与测试方法以及注册TestHiCollieTimerNdk为ArkTS接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引入头文件及定义LOG_TAG。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n// ...\n#include \"hilog/log.h\"\n\n#undef LOG_TAG\n#define LOG_TAG \"testTag\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <unistd.h>\n#include \"hicollie/hicollie.h\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造任务执行时间超时场景，并使用OH_HiCollie_SetTimer及OH_HiCollie_CancelTimer函数进行监控。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//定义回调函数\nvoid CallBack(void*)\n{\n    OH_LOG_INFO(LogType::LOG_APP, \"HiCollieTimerNdk CallBack\");  // 回调函数中打印日志\n}\n\nstatic napi_value TestHiCollieTimerNdk(napi_env env, napi_callback_info info)\n{\n    int id;\n    // 设置HiCollieTimer 参数（Timer任务名，超时时间，回调函数，回调函数参数，超时发生后行为）\n    HiCollie_SetTimerParam param = {\"testTimer\", 1, CallBack, nullptr, HiCollie_Flag::HICOLLIE_FLAG_LOG};\n    HiCollie_ErrorCode errorCode = OH_HiCollie_SetTimer(param, &id);  // 注册HiCollieTimer函数执行时长超时检测一次性任务\n    if (errorCode == HICOLLIE_SUCCESS) {  // HiCollieTimer任务注册成功\n        OH_LOG_INFO(LogType::LOG_APP, \"HiCollieTimer taskId: %{public}d\", id); // 打印任务id\n        sleep(2);  // 模拟执行耗时函数，在这里简单的将线程阻塞2s\n        OH_HiCollie_CancelTimer(id);  // 根据id取消已注册任务\n    }\n    return nullptr;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Init函数中的desc[]数组中将TestHiCollieTimerNdk注册为ArkTS接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 将TestHiCollieTimerNdk注册为ArkTS接口\n{ \"TestHiCollieTimerNdk\", nullptr, TestHiCollieTimerNdk, nullptr, nullptr, nullptr, napi_default, nullptr },\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“index.d.ts”文件，定义ArkTS接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const TestHiCollieTimerNdk: () => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“Index.ets”文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引入调用C接口的头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Index页面新增触发TestHiCollieTimerNdk方法的按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//添加点击事件，触发TestHiCollieTimerNdk方法。\nButton('TestHiCollieTimerNdk')\n  .type(ButtonType.Capsule)\n  .margin({\n    top: 20\n  })\n  .backgroundColor('#0D9FFB')\n  .width('80%')\n  .height('5%')\n  .onClick(() => {\n    testNapi.TestHiCollieTimerNdk();\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的运行按钮，运行应用工程。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在DevEco Studio的底部，切换到“Log->HiLog”窗口，设置日志的过滤条件为“testTag”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）点击“TestHiCollieTimerNdk”按钮执行程序，日志窗口打印任务id。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".../testTag ... HiCollieTimer taskId: x\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）等待2s后，执行回调函数，日志窗口打印。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".../testTag ... HiCollieTimerNdk CallBack\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取故障文件信息相关内容可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-hicollie-events/hiappevent-watcher-apphicollie-events-ndk",
            children: "订阅任务执行超时事件（C/C++）"
          }), " 订阅获取。"]
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