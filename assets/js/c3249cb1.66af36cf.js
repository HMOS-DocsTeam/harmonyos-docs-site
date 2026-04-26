"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["390261"], {
52998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_ffrt_kit_ffrt_overview_ffrt_overview_md_c32_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-ffrt-kit-ffrt-overview-ffrt-overview-md-c32.json
var site_docs_system_basicfun_ffrt_kit_ffrt_overview_ffrt_overview_md_c32_namespaceObject = JSON.parse('{"id":"system-basicfun/ffrt-kit/ffrt-overview/ffrt-overview","title":"Function Flow Runtime Kit概述","description":"简介","source":"@site/docs/system-basicfun/ffrt-kit/ffrt-overview/ffrt-overview.md","sourceDirName":"system-basicfun/ffrt-kit/ffrt-overview","slug":"/system-basicfun/ffrt-kit/ffrt-overview/","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Function Flow Runtime Kit概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-overview","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用RectPartition求解矩形划分","permalink":"/harmonyos-docs-site/system-basicfun/fast-kit-guide/fast-rect-partition/"},"next":{"title":"Function Flow Runtime并发范式","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-concurrency-paradigm/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/ffrt-kit/ffrt-overview/ffrt-overview.md


const frontMatter = {
	title: 'Function Flow Runtime Kit概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-overview',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Function Flow Runtime Kit概述';

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
  "value": "两种编程模型对比",
  "id": "两种编程模型对比",
  "level": 3
}, {
  "value": "FFRT任务编程模型",
  "id": "ffrt任务编程模型",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "function-flow-runtime-kit概述",
        children: "Function Flow Runtime Kit概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT: Function Flow Runtime，一种并发编程框架，旨在简化并发编程和任务调度的复杂性。FFRT采用基于任务的调度方式，开发者只需关注任务及其依赖关系，而无需处理底层的线程和计算资源；同时，FFRT采用基于协程的任务执行方式，可以提高任务并行度、提升线程利用率并充分利用多核平台的计算资源，保证系统对所有资源的集约化管理，最终解决系统线程资源滥用问题，打造极致用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简要说明一下FFRT开发指南中出现或将会出现的一些基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "任务 (Task)"
          })
        }), ": 一种面向开发者的编程线索和面向运行时的执行对象，通常包含一组指令序列及其操作的数据上下文环境。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "任务依赖 (Task Dependency)"
          })
        }), ": 任务之间的依赖关系，决定了某个任务是否需要等待其他任务完成才能开始执行。通过任务依赖，开发者可以定义复杂的任务执行顺序。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "QoS (Quality of Service)"
          })
        }), ": QoS定义了任务的服务质量等级，用于指示任务的优先级和资源分配。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "原语 (Primitive)"
          })
        }), ": 并发编程中的基本操作或构造，用于实现同步和互斥，例如，互斥锁、条件变量等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Worker"
          })
        }), ": 执行任务的工作线程。每个Worker可以执行多个任务，通常由调度器负责管理和分配任务。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "调度 (Scheduling)"
          })
        }), ": 决定任务何时以及由哪个Worker执行的过程。调度器会根据任务的依赖关系和QoS等级等因素进行任务的调度。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "两种编程模型对比",
      children: "两种编程模型对比"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "对比项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "线程编程模型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "任务编程模型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "并行度挖掘方式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "程序员通过创建多线程并把任务分配到每个线程中执行来挖掘运行时的并行度。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "程序员（编译器工具或语言特性配合）静态编程时将应用分解成任务及其数据依赖关系，运行时调度器分配任务到工作线程执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "谁负责线程创建"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "程序员负责创建线程，线程编程模型无法约束线程的创建，滥用可能造成系统中大量线程。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFRT运行时负责工作线程池的创建和管理由调度器负责，程序员无法直接创建线程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "负载均衡"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "程序员静态编程时将任务映射到线程，映射不合理或任务执行时间不确定造成线程负载不均。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFRT运行时根据线程执行状态调度就绪任务到空闲线程执行，减轻了线程负载不均问题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "调度开销"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程调度由内核态调度器完成，调度开销大。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFRT运行时在用户态以协程方式调度执行，相比内核线程调度机制更为轻量，减小调度的开销。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "依赖表达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线程创建时即处于可执行状态，执行时与其他线程同步操作，增加线程切换。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFRT运行时根据任务创建时显式表达的输入依赖和输出依赖关系判断任务可执行状态，当输入依赖不满足时，任务不被调度执行。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ffrt任务编程模型",
      children: "FFRT任务编程模型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT编程模型允许开发者通过任务及其依赖关系描述的方式进行应用开发，其主要特性包括Task-Based、Queue-Enabled和Graph-Driven。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Task-Based特性"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Task-Based指在Function Flow编程模型中开发者以任务方式来组织应用程序表达，运行时以任务粒度执行调度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT编程模型中的任务包含以下主要特征："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "任务之间可以直接指定依赖关系，也可以使用通过数据对象表达依赖关系。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "任务可支持嵌套，即任务在执行过程中可生成新的任务下发给运行时，形成父子任务关系。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多任务支持同步，例如等待，锁，条件变量等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(816612)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任务颗粒度影响应用执行性能，颗粒度过小增加调度开销，颗粒度过大降低并行度。FFRT编程模型中任务的目标颗粒度最小为100us量级，开发者应注意合理控制任务颗粒度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Queue-Enabled特性"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Queue-Enabled指在Function Flow编程模型中开发者可以利用任务队列来约束任务的执行顺序和并发度。任务队列包括串行队列和并发队列，两者具有不同的使用场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "串行队列确保任务按照提交的顺序依次执行，适用于保持特定执行顺序的任务流。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "并发队列允许多个任务同时执行，提高并发性能，适用于并行计算和高效利用多核处理器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "并发队列也可以通过约束某个任务单元的整体并发度，确保系统资源得以合理分配，避免因过度并发导致的性能瓶颈或系统不稳定。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Queue-Enabled特性为开发者提供了灵活的任务调度方式，开发者可以根据具体需求选择合适的任务执行策略，从而优化应用程序的性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Graph-Driven特性"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graph-Driven指Function Flow编程模型中开发者可以通过构建任务依赖图，来管理任务之间的依赖关系，实现复杂任务流的高效调度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Function Flow编程模型支持两种方式构建任务依赖图："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "任务依赖（Task Dependence）"
          })
        }), "：通过直接描述任务之间依赖关系生成任务依赖图。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "数据依赖（Data Flow）"
          })
        }), "：任务之间通过数据的生产者和消费者关系来表达依赖。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以根据各自业务的特点选择合适的任务依赖图构建方式，从而简化业务模型并降低开发难度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification",
        children: "模拟器与真机的差异"
      }), "。"]
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
816612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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