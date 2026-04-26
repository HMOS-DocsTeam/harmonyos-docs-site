"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["445496"], {
633789(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_performance_analysis_kit_overview_performance_analysis_kit_overview_md_f66_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-performance-analysis-kit-overview-performance-analysis-kit-overview-md-f66.json
var site_docs_system_debug_optimize_performance_analysis_kit_performance_analysis_kit_overview_performance_analysis_kit_overview_md_f66_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/performance-analysis-kit-overview/performance-analysis-kit-overview","title":"Performance Analysis Kit简介","description":"Performance Analysis Kit（性能分析服务）为开发者提供应用事件、日志、跟踪分析工具，可观测应用运行时状态，用于行为分析、故障分析、安全分析、统计分析，帮助开发者持续改进应用体验。","source":"@site/docs/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-overview/performance-analysis-kit-overview.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/performance-analysis-kit-overview","slug":"/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-overview/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Performance Analysis Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-overview","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"个人数据处理说明","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_personal_data/"},"next":{"title":"简介","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/fault-analysis/fault-detection-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-overview/performance-analysis-kit-overview.md


const frontMatter = {
	title: 'Performance Analysis Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/performance-analysis-kit-overview',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'Performance Analysis Kit简介';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "performance-analysis-kit简介",
        children: "Performance Analysis Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Performance Analysis Kit（性能分析服务）为开发者提供应用事件、日志、跟踪分析工具，可观测应用运行时状态，用于行为分析、故障分析、安全分析、统计分析，帮助开发者持续改进应用体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Performance Analysis Kit承载着HarmonyOS DFX子系统面向应用开发者提供的提升应用质量能力集合，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-quality-overview",
        children: "应用质量概览"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用调试：提供流水日志功能，帮助开发者记录和获取日志，以便进行问题分析。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "问题定位：提供各类场景的故障现场，包含可靠性、性能、功耗、分布式故障相关的日志、事件、跟踪。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "线上监控：提供应用构建线上观测所需的日志、事件、跟踪接口，方便开发者记录和分析应用的线上运行情况。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/fault-detection-overview",
          children: "故障检测"
        }), "，提供开发者检测应用稳定性故障的能力，包括崩溃检测、地址越界检测、应用冻屏检测、资源泄漏检测、任务超时检测等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/power-detection",
          children: "功耗检测"
        }), "，提供开发者检测应用功耗异常的能力，如CPU高负载检测。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/perf-detection",
          children: "性能检测"
        }), "，提供开发者检测应用性能异常的能力，如应用启动耗时检测、滑动丢帧检测等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hilog-dev/hilog-guidelines-arkts",
          children: "日志打印"
        }), "，提供开发者记录和获取流水日志的能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-intro",
          children: "事件订阅"
        }), "，提供开发者记录故障、行为、安全、统计事件的能力，并订阅系统事件，设置数据处理者以完成数据上传。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-intro",
          children: "性能跟踪"
        }), "与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-intro",
          children: "分布式调用链跟踪"
        }), "，提供开发者通过进行性能追踪和跨线程、跨进程的分布式跟踪能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hichecker/hichecker-guidelines-arkts",
          children: "检测模式"
        }), "，提供开发者检测应用线程耗时调用、元能力资源泄漏等问题的能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines",
          children: "系统调试信息获取"
        }), "，提供开发者获取应用和系统资源使用情况的能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hicollie/hicollie-guidelines-ndk",
          children: "业务线程超时检测"
        }), "，提供开发者检测业务线程任务执行超时并上报超时事件的能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/error-manager/errormanager-guidelines",
          children: "错误管理"
        }), "与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/error-manager/apprecovery-guidelines",
          children: "应用恢复"
        }), "，提供开发者捕获应用运行时异常能力，以及应用非预期退出后启动状态和数据的自恢复能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调试命令提供包含", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hdc",
          children: "hdc"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hilog",
          children: "hilog"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hidumper-tool/hidumper",
          children: "hidumper"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hitrace",
          children: "hitrace"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/debugging-commands/hiperf",
          children: "hiperf"
        }), "等工具用于调试系统和应用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "便捷地构建APM系统"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供接口（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines",
          children: "HiDebug"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-intro",
          children: "HiAppEvent"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hilog-dev/hilog-guidelines-arkts",
          children: "HiLog"
        }), "），可用于自建端侧APM（Application Performance Management，应用性能管理平台）SDK，与厂商自研APM对接。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["基于", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/event-subscription-overview#%E7%B3%BB%E7%BB%9F%E4%BA%8B%E4%BB%B6",
          children: "HiAppEvent系统事件"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/event-subscription-overview#%E5%BA%94%E7%94%A8%E4%BA%8B%E4%BB%B6",
          children: "HiAppEvent应用事件"
        }), "，订阅应用运行过程中所触发的事件（如崩溃、应用冻屏），快捷地记录、收集运维和运营所需的事件信息。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "强大的故障检测与异常处理机制"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供全方位的应用质量检测能力，涵盖", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/fault-detection-overview",
          children: "故障检测"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/perf-detection",
          children: "性能检测"
        }), "与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/power-detection",
          children: "功耗检测"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供精简、标准且完备的异常日志，支持精准记录异常传播路径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "全面的异常检测机制，实时感知异常，通知应用，自动拉起恢复。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "全面的基础维测能力"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "日志提供分级分类功能，支持多语言，隐私处理和流量控制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供完备的事件框架和事件打点、记录、上报机制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持追踪进程轨迹，进行程序性能分析。"
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