"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["117648"], {
554437(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_power_detection_power_detection_md_50d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-power-detection-power-detection-md-50d.json
var site_docs_system_debug_optimize_performance_analysis_kit_power_detection_power_detection_md_50d_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/power-detection/power-detection","title":"功耗检测","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/power-detection/power-detection.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/power-detection","slug":"/system-debug-optimize/performance-analysis-kit/power-detection/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/power-detection/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"功耗检测","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/power-detection","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"App Killed（应用终止）检测","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/appkilled-guidelines/"},"next":{"title":"性能检测","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/perf-detection/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/power-detection/power-detection.md


const frontMatter = {
	title: '功耗检测',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/power-detection',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = '功耗检测';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "日志规格",
  "id": "日志规格",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "功耗检测",
        children: "功耗检测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "功耗检测主要提供CPU高负载检测，可以通过订阅相关事件实现检测。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如需了解如何使用HiAppEvent提供订阅CPU高负载事件，请参考以下文档。目前仅提供ArkTS接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/high-cpu-load-event/hiappevent-watcher-cpu-usage-high-arkts",
          children: "订阅CPU高负载事件（ArkTS）"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统会周期性及在特定条件（如前后台切换）下，采集三方应用在CPU上的运行时间，并每5分钟统计一次前5分钟的平均负载。若负载超过设定门限，将触发HiAppEvent预警事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用触发CPU高负载事件，其中负载是根据CPU核数归一化后的运行时间。例如：在5分钟内，应用进程在10核CPU上运行了5分钟，其平均负载为：5（CPU上运行时间） / 5（统计周期分钟）/ 10（核数） = 10%。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CPU高负载事件存在以下场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用在前台时触发CPU高负载事件：5分钟内平均负载大于30%。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用在后台时触发CPU高负载事件：5分钟内平均负载大于10%。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用线程高负载异常事件：单线程1分钟内平均负载大于70%。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前台CPU高负载异常：单应用默认一天只抓取1次调用栈，1次采样栈。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "后台CPU高负载异常：单应用默认一天只抓取1次调用栈，1次采样栈。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "线程CPU高负载异常：单应用默认一天只抓取1次采样栈。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相关配置可自定义，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/high-cpu-load-event/hiappevent-watcher-cpu-usage-high-event#section74181323554",
        children: "自定义参数"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志规格",
      children: "日志规格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在订阅事件开发步骤的最后一步中，获取到系统事件数据的处理日志后（详细流程见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/high-cpu-load-event/hiappevent-watcher-cpu-usage-high-arkts",
        children: "订阅CPU高负载事件（ArkTS）"
      }), "），可通过查找日志中“external_log”记录的故障日志文件路径，得到故障日志。例如："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HiAppEvent eventInfo={\"domain\":\"OS\",\"name\":\"CPU_USAGE_HIGH\",\"eventType\":1,\"params\":{\"begin_time\":1765959898079,\"bundle_name\":\"com.xpower.test\",\"bundle_version\":\"1.0.0\",\"end_time\":1765959958079,\"external_log\":[\"/data/storage/el2/log/hiappevent/CPU_USAGE_HIGH_1765959959260_0.log\"],\"fault_type\":3,\"foreground\":true,\"log_over_limit\":false,\"threads\":[{\"name\":\"WorkerThread\",\"tid\":29164,\"usage\":72}],\"time\":1765959959257,\"usage\":72}}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "external_log下记录故障日志的路径，在路径下可获取到故障日志。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用栈故障日志格式详见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines#%E4%B8%80%E8%88%AC%E6%95%85%E9%9A%9C%E5%9C%BA%E6%99%AF%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
        children: "一般故障场景日志规格"
      }), "中的“调用栈帧内容说明”。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["采样栈故障日志格式详见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines#%E6%97%A5%E5%BF%97%E8%A7%84%E6%A0%BC",
        children: "日志规格"
      }), "中的“采样栈规格”。"]
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