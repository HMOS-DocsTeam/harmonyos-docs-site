"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["565687"], {
156465(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_concurrency_multithread_concurrency_taskpool_vs_worker_taskpool_vs_worker_md_79d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-concurrency-multithread-concurrency-taskpool-vs-worker-taskpool-vs-worker-md-79d.json
var site_docs_arkts_arkts_concurrency_multithread_concurrency_taskpool_vs_worker_taskpool_vs_worker_md_79d_namespaceObject = JSON.parse('{"id":"arkts/arkts-concurrency/multithread-concurrency/taskpool-vs-worker/taskpool-vs-worker","title":"TaskPool和Worker的对比 (TaskPool和Worker)","description":"TaskPool和Worker的作用是为应用程序提供多线程运行环境，用于处理耗时计算任务或其他密集型任务，避免任务阻塞宿主线程，提高系统性能和资源利用率。","source":"@site/docs/arkts/arkts-concurrency/multithread-concurrency/taskpool-vs-worker/taskpool-vs-worker.md","sourceDirName":"arkts/arkts-concurrency/multithread-concurrency/taskpool-vs-worker","slug":"/arkts/arkts-concurrency/multithread-concurrency/taskpool-vs-worker/","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-concurrency/taskpool-vs-worker/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"TaskPool和Worker的对比 (TaskPool和Worker)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/taskpool-vs-worker","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Worker简介","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/multithread-concurrency/worker-introduction/"},"next":{"title":"ArkTS线程间通信概述","permalink":"/harmonyos-docs-site/arkts/arkts-concurrency/interthread-communication/interthread-communication-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-concurrency/multithread-concurrency/taskpool-vs-worker/taskpool-vs-worker.md


const frontMatter = {
	title: 'TaskPool和Worker的对比 (TaskPool和Worker)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/taskpool-vs-worker',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'TaskPool和Worker的对比 (TaskPool和Worker)';

const assets = {

};



const toc = [{
  "value": "实现特点对比",
  "id": "实现特点对比",
  "level": 2
}, {
  "value": "适用场景对比",
  "id": "适用场景对比",
  "level": 2
}, {
  "value": "建议使用Worker的场景",
  "id": "建议使用worker的场景",
  "level": 3
}, {
  "value": "建议使用TaskPool的场景",
  "id": "建议使用taskpool的场景",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
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
        id: "taskpool和worker的对比-taskpool和worker",
        children: "TaskPool和Worker的对比 (TaskPool和Worker)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TaskPool和Worker的作用是为应用程序提供多线程运行环境，用于处理耗时计算任务或其他密集型任务，避免任务阻塞宿主线程，提高系统性能和资源利用率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文将从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%9E%E7%8E%B0%E7%89%B9%E7%82%B9%E5%AF%B9%E6%AF%94",
        children: "实现特点"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF%E5%AF%B9%E6%AF%94",
        children: "适用场景"
      }), "两个方面比较TaskPool与Worker。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现特点对比",
      children: "实现特点对比"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " TaskPool和Worker的实现特点对比"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "实现"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TaskPool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worker"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "内存模型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程间隔离，内存不共享。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程间隔离，内存不共享。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "参数传递机制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采用标准的结构化克隆算法（Structured Clone）进行序列化、反序列化，完成参数传递。  支持ArrayBuffer转移、SharedArrayBuffer共享和Sendable引用传递。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "采用标准的结构化克隆算法（Structured Clone）进行序列化、反序列化，完成参数传递。  支持ArrayBuffer转移、SharedArrayBuffer共享和Sendable引用传递。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "参数传递"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接传递，无需封装。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "消息对象唯一参数，需要自己封装。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "方法调用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "直接传入并调用@Concurrent修饰的方法。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Worker线程中解析消息并调用对应方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "返回值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步调用后默认返回。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主动发送消息，需在onmessage中解析并赋值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "生命周期"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TaskPool自动管理其生命周期，无需关注任务负载。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者需自行管理Worker的数量和生命周期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "任务池个数上限"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动管理，无需配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同一进程下，最多支持同时开启64个Worker线程，实际数量由进程内存决定。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "任务执行时长上限"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3分钟（不包含Promise和async/await异步调用的耗时，例如网络下载、文件读写等I/O任务的耗时），长时任务无执行时长上限。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无限制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "设置任务的优先级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持配置任务优先级。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 18开始，支持配置Worker线程优先级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "执行任务的取消"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持取消已经发起的任务。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "线程复用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "任务延时执行"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "设置任务依赖关系"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "串行队列"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "任务组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "周期任务"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "异步队列"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景对比",
      children: "适用场景对比"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TaskPool和Worker均支持多线程并发能力。TaskPool的工作线程会绑定系统的调度优先级，并支持负载均衡（自动扩缩容），相比之下，Worker需要开发者自行创建和销毁，存在一定的创建和管理成本。因此，在大多数场景下，推荐优先使用TaskPool。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Worker适用于需要长时间占据线程，并由开发者主动管理线程生命周期的场景；TaskPool适用于执行相对独立任务的场景，任务在线程中执行时无需关注线程生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "建议使用worker的场景",
      children: "建议使用Worker的场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下场景中，任务通常需要长时间运行或依赖线程上下文，适合使用Worker："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "运行时间超过3分钟的任务"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（此处所说的3分钟不包括Promise和async/await异步调用的耗时，如网络下载、文件读写等I/O任务的耗时）："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如后台进行1小时的预测算法训练等CPU密集型任务，适合使用Worker。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["场景示例可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/multithread-develop-guide/resident-task/resident-task-guide",
            children: "常驻任务开发指导"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "有强关联的一系列同步任务"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如在需要创建并使用句柄的场景中，每次创建的句柄都不同，且必须持续保存该句柄，以确保后续操作正确执行，此类场景适合使用Worker。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["场景示例可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/sync-task-development#%E4%BD%BF%E7%94%A8worker%E5%A4%84%E7%90%86%E5%85%B3%E8%81%94%E7%9A%84%E5%90%8C%E6%AD%A5%E4%BB%BB%E5%8A%A1",
            children: "使用Worker处理关联的同步任务"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "建议使用taskpool的场景",
      children: "建议使用TaskPool的场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下场景中，任务通常相对独立，对调度、取消或管理能力有更高要求，适合使用TaskPool："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "需要设置任务优先级的任务"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在API version 18之前，Worker不支持设置调度优先级，需要使用TaskPool；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 18开始，Worker支持设置调度优先级，开发者可以根据使用场景和任务特性选择使用TaskPool或Worker。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["例如", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/multithread-develop-guide/time-consuming-task/cpu-intensive-task-development#%E4%BD%BF%E7%94%A8taskpool%E8%BF%9B%E8%A1%8C%E5%9B%BE%E5%83%8F%E7%9B%B4%E6%96%B9%E5%9B%BE%E5%A4%84%E7%90%86",
            children: "图像直方图绘制场景"
          }), "，后台计算的直方图数据会用于前台界面的显示，影响用户体验，且任务相对独立，推荐使用TaskPool。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "需要频繁取消的任务"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如图库大图浏览场景。为提升体验，系统会同时缓存当前图片左右各两张图片。当往一侧滑动跳到下一张图片时，需取消另一侧的缓存任务，此时适合使用TaskPool。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "大量或调度点分散的任务"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如大型应用中的多个模块包含多个耗时任务，不建议使用Worker进行负载管理，推荐使用TaskPool。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["场景示例可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/multithread-develop-guide/multithread-develop-case/batch-database-operations-guide",
            children: "批量数据写数据库场景"
          }), "。"]
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