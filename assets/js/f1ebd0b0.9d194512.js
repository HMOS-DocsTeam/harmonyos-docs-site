"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["579512"], {
812510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hitracechain_hitracechain_intro_hitracechain_intro_md_f1e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hitracechain-hitracechain-intro-hitracechain-intro-md-f1e.json
var site_docs_system_debug_optimize_performance_analysis_kit_hitracechain_hitracechain_intro_hitracechain_intro_md_f1e_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-intro/hitracechain-intro","title":"HiTraceChain介绍","description":"简介","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-intro/hitracechain-intro.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-intro","slug":"/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-intro/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"HiTraceChain介绍","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracechain-intro","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查看HiTraceMeter日志","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-view/"},"next":{"title":"使用HiTraceChain打点（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-guidelines-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hitracechain/hitracechain-intro/hitracechain-intro.md


const frontMatter = {
	title: 'HiTraceChain介绍',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracechain-intro',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'HiTraceChain介绍';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "hitracechain介绍",
        children: "HiTraceChain介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiTraceChain是基于分布式跟踪调用链思想，在端侧业务流程（涉及跨线程、跨进程、跨设备）中的一种轻量级分布式跟踪的实现。HiTraceChain在业务流程中生成和传递唯一跟踪标识，在业务流程输出的各类信息中（包括HiTraceMeter打点、应用事件、hilog日志等）记录该跟踪标识。在调试、问题定位的过程中，开发者可以通过该唯一跟踪标识将本次业务流程端到端的各类信息快速关联起来。HiTraceChain为开发者提供业务流程调用链跟踪的维测接口，帮助开发者迅速获取指定业务流程调用链的运行日志，定位跨设备/跨进程/跨线程的故障问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HiTraceId"
        })
      }), "：HiTraceChain提供的唯一跟踪标识，用于跟踪业务流程的调用链。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "chainId"
        })
      }), "：跟踪链标识，属于HiTraceId的一部分，用于标识当前跟踪的业务流程。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "spanId"
        })
      }), "：分支标识，属于HiTraceId的一部分，用于标识业务流程在某个服务中的一个具体任务，可以为每个任务创建一个唯一的spanId，用于区分不同的任务。默认值为0，当调用接口创建spanId或自动传递机制传递HiTraceId时，会生成新的spanId。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "parentSpanId"
        })
      }), "：父分支标识，属于HiTraceId的一部分，用于标识当前任务的父任务，可以建立不同任务之间的层级关系，显示任务之间的从属关系。默认值为0，创建新的spanId时，先将当前spanId赋值给parentSpanId，再生成新的spanId。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "生成唯一跟踪标识"
            })
          }), "：启用HiTraceChain跟踪后，会在当前线程的TLS（Thread Local Storage，线程本地存储）生成一个全局唯一跟踪标识HiTraceId。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "获取HiTraceId"
            })
          }), "：Native层直接获取TLS中的HiTraceId；ArkTS层通过NAPI接口调用获取Native层TLS中的HiTraceId。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "传递HiTraceId"
            })
          }), "：随着业务流程的推进，开发者可取出当前线程TLS中的HiTraceId，在不同的线程（如thread1, thread2）、进程（如APP1, APP2）以及设备（如Device1, Device2）之间传递，并将HiTraceId设置到其他线程的TLS中，确保在同一个业务流程中，所有相关线程都能访问到这个唯一的跟踪标识。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "信息记录"
            })
          }), "：对于启用HiTraceChain的业务流程，其输出的各类信息中（包括HiTraceMeter打点、应用事件、hilog日志等）都会记录该跟踪标识，开发者可以通过HiTraceId将这些信息关联起来，从而实现端到端的调用链跟踪。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(647997)/* ["default"] */.A) + "",
            width: "1622",
            height: "711"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hitracechain/js-apis-hitracechain#hitraceflag",
        children: "HiTraceFlag"
      }), "以启用异步调用跟踪，HiTraceId可在HiTraceChain的自动传递机制中自动传递。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表列举了一些常见的支持与不支持HiTraceChain自动传递的机制，不支持HiTraceChain自动传递的机制无法传递HiTraceId到创建的异步任务、线程或进程中，会导致HiTraceChain调用链中断，需要开发者手动传递并设置HiTraceId，以实现完整的调用链跟踪。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "异步任务"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "跨线程"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "跨进程"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "跨设备"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支持HiTraceChain自动传递的机制"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-concurrency/async-concurrency-overview#asyncawait",
              children: "async/await"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-concurrency/async-concurrency-overview#promise",
              children: "Promise"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/system-debug-optimize/performance-analysis-kit/hiappevent/hiappevent-intro",
              children: "HiAppEvent"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-asynchronous-task",
              children: "napi_async_work"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-basicfun/ffrt-kit/ffrt-overview",
              children: "FFRT"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ipc-kit/ipc-rpc-overview",
              children: "IPC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ipc-kit/ipc-rpc-overview",
              children: "RPC"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不支持HiTraceChain自动传递的机制"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["宏任务及其异步任务（例如", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-arkts/js-apis-timer/js-apis-timer#settimeout",
              children: "setTimeout"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-arkts/js-apis-timer/js-apis-timer#setinterval",
              children: "setInterval"
            }), "等）"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction",
              children: "TaskPool"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
              children: "Worker"
            }), "  C++标准库std::thread、pthread_create、std::async等创建的线程"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/system-network/network-kit/network-kit-data-transmission/socket-connection",
              children: "Socket"
            }), "  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#ashmem8",
              children: "Ashmem"
            })]
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
647997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478499-77beaf1de64f700487ccb762ee6eccf6.png");

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