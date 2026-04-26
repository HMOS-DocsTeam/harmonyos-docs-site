"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["165933"], {
908008(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_ffrt_kit_ffrt_concurrency_paradigm_ffrt_concurrency_paradigm_md_17c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-ffrt-kit-ffrt-concurrency-paradigm-ffrt-concurrency-paradigm-md-17c.json
var site_docs_system_basicfun_ffrt_kit_ffrt_concurrency_paradigm_ffrt_concurrency_paradigm_md_17c_namespaceObject = JSON.parse('{"id":"system-basicfun/ffrt-kit/ffrt-concurrency-paradigm/ffrt-concurrency-paradigm","title":"Function Flow Runtime并发范式","description":"为了应对实际业务中，任务执行顺序固定、灵活优先级调度以及复杂的任务依赖关系等场景，FFRT支持串行队列、并发队列和图依赖三种不同的并发范式。","source":"@site/docs/system-basicfun/ffrt-kit/ffrt-concurrency-paradigm/ffrt-concurrency-paradigm.md","sourceDirName":"system-basicfun/ffrt-kit/ffrt-concurrency-paradigm","slug":"/system-basicfun/ffrt-kit/ffrt-concurrency-paradigm/","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-concurrency-paradigm/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Function Flow Runtime并发范式","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-concurrency-paradigm","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Function Flow Runtime Kit概述","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-overview/"},"next":{"title":"Function Flow Runtime串行队列(C)","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-example-c/ffrt-concurrency-serial-queue-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/ffrt-kit/ffrt-concurrency-paradigm/ffrt-concurrency-paradigm.md


const frontMatter = {
	title: 'Function Flow Runtime并发范式',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-concurrency-paradigm',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Function Flow Runtime并发范式';

const assets = {

};



const toc = [{
  "value": "串行队列（Serial Queue）",
  "id": "串行队列serial-queue",
  "level": 2
}, {
  "value": "并发队列（Concurrent Queue）",
  "id": "并发队列concurrent-queue",
  "level": 2
}, {
  "value": "图依赖并发（Task Graph）",
  "id": "图依赖并发task-graph",
  "level": 2
}, {
  "value": "任务伙伴（Job Partner）",
  "id": "任务伙伴job-partner",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "function-flow-runtime并发范式",
        children: "Function Flow Runtime并发范式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了应对实际业务中，任务执行顺序固定、灵活优先级调度以及复杂的任务依赖关系等场景，FFRT支持串行队列、并发队列和图依赖三种不同的并发范式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "串行队列serial-queue",
      children: "串行队列（Serial Queue）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "串行队列并发范式常用于解决以下场景中的问题："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "顺序执行"
          })
        }), ": 某些任务需要按特定顺序执行，串行队列可以确保任务按添加的顺序逐一执行，避免了乱序执行带来的数据不一致性和错误。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "数据安全"
          })
        }), ": 在并发环境中访问和修改共享资源时，容易出现竞争条件。使用串行队列可以避免多个线程同时访问共享资源，确保数据的一致性和安全性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "任务协调"
          })
        }), ": 串行队列可以用来协调复杂任务的执行顺序，例如在进行多个依赖关系的任务时，确保前一个任务完成后再开始下一个任务。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "简化开发"
          })
        }), ": 相较于手动管理锁和同步机制，串行队列的使用更加简洁明了。开发者只需将任务添加到队列中，系统会自动处理任务的调度和执行顺序，减少了开发和调试的复杂性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "资源管理"
          })
        }), ": 在某些情况下，限制并发任务的数量可以避免资源争用和过载。串行队列可以控制并发任务的数量，优化系统资源的使用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(77705)/* ["default"] */.A) + "",
        width: "994",
        height: "115"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["串行队列并发范式开发样例可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/ffrt-kit/ffrt-example-c/ffrt-concurrency-serial-queue-c",
        children: "串行队列(C)"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-serial-queue-cpp",
        children: "串行队列(C++)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "并发队列concurrent-queue",
      children: "并发队列（Concurrent Queue）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并发队列并发范式常用于解决以下场景中的问题："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "提高并发度"
          })
        }), ": 并发队列允许多个任务同时执行，充分利用多核处理器的计算能力，显著提高系统的并发度和整体性能。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "资源高效利用"
          })
        }), ": 并发队列能将任务分配到可用的CPU核心上，优化资源的使用，减少任务的等待时间和资源争用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "任务调度灵活"
          })
        }), ": 并发队列允许任务按照不同的优先级（Priority）和QoS进行调度，确保关键任务能够及时执行，提高系统的响应速度。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "避免资源冲击"
          })
        }), ": 并发队列允许设置最大并发度，避免任务并发过多对系统资源造成的冲击，从而保证系统的稳定性和性能。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(752539)/* ["default"] */.A) + "",
        width: "994",
        height: "300"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["并发队列并发范式开发样例可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/ffrt-kit/ffrt-example-c/ffrt-concurrency-concurrent-queue-c",
        children: "并发队列(C)"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-concurrent-queue-cpp",
        children: "并发队列(C++)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "图依赖并发task-graph",
      children: "图依赖并发（Task Graph）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图依赖并发范式常用于解决以下场景中的问题："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "复杂任务依赖关系"
          })
        }), ": 在许多实际应用中，任务之间存在复杂的依赖关系。图依赖并发范式通过使用有向图来表示任务及其依赖关系，能够清晰地管理和调度这些任务。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "动态任务调度"
          })
        }), ": 当任务的依赖关系和执行顺序需要根据运行时的条件动态决定时，图依赖并发范式可以灵活地调整任务的调度，确保任务按正确的顺序执行。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "并行任务执行"
          })
        }), ": 图依赖并发范式允许多个不相互依赖的任务并行执行，从而最大化利用系统的计算资源，提高并发度和执行效率。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "结构化并发"
          })
        }), "：图依赖并发范式中可以通过明确的任务生命周期和依赖关系，确保并发任务的创建和完成在代码结构中清晰可见，减少并发编程的复杂性和错误。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(760981)/* ["default"] */.A) + "",
        width: "994",
        height: "196"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["图依赖并发范式开发样例可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/ffrt-kit/ffrt-example-c/ffrt-concurrency-graph-c",
        children: "图依赖并发(C)"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-graph-cpp",
        children: "图依赖并发(C++)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "任务伙伴job-partner",
      children: "任务伙伴（Job Partner）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，FFRT支持Job_Partner(任务伙伴)功能。任务伙伴任务并发范式常用于解决以下场景中的问题："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "多线程协作"
            })
          }), ": 在许多实际应用中，某些功能需要在特定环境进行运行，而其他功能可以在任何环境运行，这个时候需要多线程协作，部分功能在A线程运行，然后回到B线程，最后再回到A线程。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(957822)/* ["default"] */.A) + "",
            width: "994",
            height: "351"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "动态并发调度"
            })
          }), ": 有些场景并发任务数量动态变化，时多时少，所以可以通过动态调整worker数量来最大提升性能，降低调度开销。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(453019)/* ["default"] */.A) + "",
            width: "734",
            height: "328"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图中的参数如下所示："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "job_num 提交的任务数。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "partner_num worker数量。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "threshold 表示任务堆积到指定数量后才会启动worker。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ratio 表示任务数和worker数的比例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "max 表示最大worker数。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["协作并发范式开发样例可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-job-partner-cpp",
        children: "任务伙伴(C++)"
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
453019(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798808-778e40609dbbadfa1bfbdfa4532c7af5.png");

},
77705(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798806-87291db38a90af57eb5c632f308fd490.png");

},
760981(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958456-b8dc605d05b969b783ac9c967f4f0f10.png");

},
957822(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478457-b62ddab17f85bb8563292ec51aaacd76.png");

},
752539(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438501-e25e6287eec729c04e1529daa9233a53.png");

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