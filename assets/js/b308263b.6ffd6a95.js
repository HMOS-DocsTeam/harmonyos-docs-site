"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["22938"], {
101587(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_address_sanitizer_events_hiappevent_watcher_address_sanitizer_events_arkts_hiappevent_watcher_address_sanitizer_events_arkts_md_b30_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hiappevent-event-subscription-system-events-address-sanitizer-events-hiappevent-watcher-address-sanitizer-events-arkts-hiappevent-watcher-address-sanitizer-events-arkts-md-b30.json
var site_docs_system_debug_optimize_performance_analysis_kit_hiappevent_event_subscription_system_events_address_sanitizer_events_hiappevent_watcher_address_sanitizer_events_arkts_hiappevent_watcher_address_sanitizer_events_arkts_md_b30_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/address-sanitizer-events/hiappevent-watcher-address-sanitizer-events-arkts/hiappevent-watcher-address-sanitizer-events-arkts","title":"订阅地址越界事件（ArkTS）","description":"接口说明","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/address-sanitizer-events/hiappevent-watcher-address-sanitizer-events-arkts/hiappevent-watcher-address-sanitizer-events-arkts.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/address-sanitizer-events/hiappevent-watcher-address-sanitizer-events-arkts","slug":"/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/address-sanitizer-events/hiappevent-watcher-address-sanitizer-events-arkts/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/address-sanitizer-events/hiappevent-watcher-address-sanitizer-events-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"订阅地址越界事件（ArkTS）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-address-sanitizer-events-arkts","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"地址越界事件介绍","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/address-sanitizer-events/hiappevent-watcher-address-sanitizer-events/"},"next":{"title":"订阅地址越界事件（C/C++）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/address-sanitizer-events/hiappevent-watcher-address-sanitizer-events-ndk/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/address-sanitizer-events/hiappevent-watcher-address-sanitizer-events-arkts/hiappevent-watcher-address-sanitizer-events-arkts.md


const frontMatter = {
	title: '订阅地址越界事件（ArkTS）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-address-sanitizer-events-arkts',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅地址越界事件（ArkTS）';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "步骤一：新建工程",
  "id": "步骤一新建工程",
  "level": 3
}, {
  "value": "步骤二：订阅地址越界事件",
  "id": "步骤二订阅地址越界事件",
  "level": 3
}, {
  "value": "步骤三：构造地址越界错误",
  "id": "步骤三构造地址越界错误",
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
        id: "订阅地址越界事件arkts",
        children: "订阅地址越界事件（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API接口的具体使用说明（参数使用限制、具体取值范围等）请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent",
        children: "@ohos.hiviewdfx.hiAppEvent"
      }), "。"]
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
            children: "addWatcher(watcher: Watcher): AppEventPackageHolder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加应用事件观察者，以添加对应用事件的订阅。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "removeWatcher(watcher: Watcher): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除应用事件观察者，以移除对应用事件的订阅。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以实现对写数组越界场景生成的地址越界事件订阅为例，说明开发步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤一新建工程",
      children: "步骤一：新建工程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建Native C++工程，目录结构如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "entry:\n  src:\n    main:\n      cpp:\n        - types:\n            libentry:\n              - index.d.ts\n        - CMakeLists.txt\n        - napi_init.cpp\n      ets:\n        - entryability:\n            - EntryAbility.ets\n        - pages:\n            - Index.ets\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > entryability > EntryAbility.ets”文件，导入依赖模块："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hiAppEvent, hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤二订阅地址越界事件",
      children: "步骤二：订阅地址越界事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > entryability > EntryAbility.ets”文件，在onCreate函数中添加系统事件的订阅，示例代码如下"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hiAppEvent.addWatcher({\n  // 开发者可以自定义观察者名称，系统会使用名称来标识不同的观察者\n  name: \"watcher\",\n  // 开发者可以订阅感兴趣的系统事件，此处是订阅了地址越界事件\n  appEventFilters: [\n    {\n      domain: hiAppEvent.domain.OS,\n      names: [hiAppEvent.event.ADDRESS_SANITIZER]\n    }\n  ],\n  // 开发者可以自行实现订阅系统事件回调函数，以便对订阅获取到的事件数据进行自定义处理\n  onReceive: (domain: string, appEventGroups: Array<hiAppEvent.AppEventGroup>) => {\n    hilog.info(0x0000, 'testTag', `HiAppEvent onReceive: domain=${domain}`);\n    for (const eventGroup of appEventGroups) {\n      // 开发者可以根据事件集合中的事件名称区分不同的系统事件\n      hilog.info(0x0000, 'testTag', `HiAppEvent eventName=${eventGroup.name}`);\n      for (const eventInfo of eventGroup.appEventInfos) {\n        // 开发者可以对事件集合中的事件数据进行自定义处理，此处是将事件数据打印在日志中\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.domain=${eventInfo.domain}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.name=${eventInfo.name}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.eventType=${eventInfo.eventType}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.time=${eventInfo.params['time']}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.bundle_version=${eventInfo.params['bundle_version']}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.bundle_name=${eventInfo.params['bundle_name']}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.pid=${eventInfo.params['pid']}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.uid=${eventInfo.params['uid']}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.type=${eventInfo.params['type']}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.external_log=${JSON.stringify(eventInfo.params['external_log'])}`);\n        hilog.info(0x0000, 'testTag', `HiAppEvent eventInfo.log_over_limit=${eventInfo.params['log_over_limit']}`);\n      }\n    }\n  }\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "步骤三构造地址越界错误",
      children: "步骤三：构造地址越界错误"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“entry > src > main > cpp > napi_init.cpp”文件，该文件实现地址越界场景，并提供NAPI接口给应用层代码调用，完整示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n\nstatic napi_value Test(napi_env env, napi_callback_info info)\n{\n    int a[10];\n    // 构造数组越界写入\n    a[10] = 1;\n    return {};\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"test\", nullptr, Test, nullptr, nullptr, nullptr, napi_default, nullptr }\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 }\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑“entry > src > main > cpp > types > libentry > index.d.ts”文件，完整示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const test: () => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑工程中的“entry > src > main > ets > pages > Index.ets”文件，新增按钮触发地址越界事件："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        Button(\"address-sanitizer\").onClick(() => {\n          testNapi.test();\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击DevEco Studio界面中的“entry”，点击“Edit Configurations”，点击“Diagnostics”，勾选“Address Sanitizer”，保存设置。点击DevEco Studio界面中的运行按钮，运行应用工程，然后在应用界面中点击按钮“address-sanitizer”，触发一次地址越界事件。应用崩溃后重新进入应用，可以在Log窗口看到对系统事件数据的处理日志："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "HiAppEvent onReceive: domain=OS\nHiAppEvent eventName=ADDRESS_SANITIZER\nHiAppEvent eventInfo.domain=OS\nHiAppEvent eventInfo.name=ADDRESS_SANITIZER\nHiAppEvent eventInfo.eventType=1\nHiAppEvent eventInfo.time=1713161197957\nHiAppEvent eventInfo.bundle_version=1.0.0\nHiAppEvent eventInfo.bundle_name=com.example.myapplication\nHiAppEvent eventInfo.pid=12889\nHiAppEvent eventInfo.uid=20020140\nHiAppEvent eventInfo.type=stack-buffer-overflow\nHiAppEvent eventInfo.external_log=[\"/data/storage/el2/log/hiappevent/ADDRESS_SANITIZER_1713161197960_12889.log\"]\nHiAppEvent eventInfo.log_over_limit=false\n"
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