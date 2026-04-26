"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["830478"], {
910129(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_ffrt_kit_ffrt_example_cpp_ffrt_concurrency_serial_queue_cpp_ffrt_concurrency_serial_queue_cpp_md_a58_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-ffrt-kit-ffrt-example-cpp-ffrt-concurrency-serial-queue-cpp-ffrt-concurrency-serial-queue-cpp-md-a58.json
var site_docs_system_basicfun_ffrt_kit_ffrt_example_cpp_ffrt_concurrency_serial_queue_cpp_ffrt_concurrency_serial_queue_cpp_md_a58_namespaceObject = JSON.parse('{"id":"system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-serial-queue-cpp/ffrt-concurrency-serial-queue-cpp","title":"Function Flow Runtime串行队列(C++)","description":"概述","source":"@site/docs/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-serial-queue-cpp/ffrt-concurrency-serial-queue-cpp.md","sourceDirName":"system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-serial-queue-cpp","slug":"/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-serial-queue-cpp/","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-serial-queue-cpp/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Function Flow Runtime串行队列(C++)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-concurrency-serial-queue-cpp","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Function Flow Runtime图依赖并发(C)","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-example-c/ffrt-concurrency-graph-c/"},"next":{"title":"Function Flow Runtime并发队列(C++)","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-concurrent-queue-cpp/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-serial-queue-cpp/ffrt-concurrency-serial-queue-cpp.md


const frontMatter = {
	title: 'Function Flow Runtime串行队列(C++)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-concurrency-serial-queue-cpp',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Function Flow Runtime串行队列(C++)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "示例：异步日志系统",
  "id": "示例异步日志系统",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
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
        id: "function-flow-runtime串行队列c",
        children: "Function Flow Runtime串行队列(C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FFRT串行队列基于协程调度模型实现，提供高效的消息队列功能，支持异步通信、流量削峰、无锁化状态和资源管理以及架构解耦等多种业务场景。FFRT串行队列支持以下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "​队列创建销毁"
          })
        }), "​，支持创建和销毁队列，创建时可指定队列名称和优先级。每个队列功能上相当于一个单独的线程，队列中的任务相对于用户线程异步执行。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "任务延迟"
          })
        }), "​，支持在任务提交时设置延迟时间（delay），单位为微秒（us）。延迟任务将在uptime（提交时刻+延迟时间）后调度执行。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "​串行调度"
          })
        }), "​，同一队列中的任务按照uptime升序排列，严格串行执行。确保队列中上一个任务完成后，下一个任务才会开始执行。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "​任务取消"
          })
        }), "​，支持根据任务句柄取消未出队的任务。若任务已开始执行或执行完成，则无法取消。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "​任务等待"
          })
        }), "​，支持根据任务句柄等待任务完成。指定任务完成时，队列中所有uptime早于该任务的任务均已执行完成。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "任务优先级"
          })
        }), "​，支持在任务提交时设置单个任务的优先级。优先级仅在任务出队后相对于系统其他负载生效，不影响同一队列内任务的串行顺序。若未设置任务优先级，则默认继承队列的优先级。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例异步日志系统",
      children: "示例：异步日志系统"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "举例实现一个异步日志系统，主线程将日志任务提交到队列，后台线程从队列中取出任务并写入文件。这种方式既能保证日志的顺序性，又能避免文件写入操作阻塞主线程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "借助FFRT并行化框架API，开发者只需专注于业务逻辑的实现，无需关注异步线程管理、线程安全及调度效率等问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用例简化了异常处理和线程安全相关的一些逻辑，实现代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <chrono>\n#include <thread>\n#include \"hilog/log.h\"\n#include \"ffrt/ffrt.h\" // 来自 OpenHarmony 第三方库 \"@ppd/ffrt\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#undef LOG_TAG\n#define LOG_TAG \"SerialCppTag\"\n\nclass Logger {\npublic:\n    Logger()\n    {\n        // 创建队列\n        queue_ = std::make_unique<ffrt::queue>(\"loggerQueue\");\n        \n        logFile_ = stdout;\n        OH_LOG_INFO(LOG_APP, \"Log file opened\");\n    }\n\n    ~Logger()\n    {\n        // 销毁队列\n        queue_ = nullptr;\n        OH_LOG_INFO(LOG_APP, \"Log file closed\");\n    }\n\n    // 添加日志任务\n    void Log(const std::string& message)\n    {\n        queue_->submit([this, message] {\n            OH_LOG_INFO(LOG_APP, \"Writing message %{public}s\", message.c_str());\n        });\n    }\n\nprivate:\n    FILE *logFile_;\n    std::unique_ptr<ffrt::queue> queue_;\n};\n\nint SerialQueueCppExec()\n{\n    Logger logger;\n\n    // 主线程添加日志任务\n    logger.Log(\"Log message 1\");\n    logger.Log(\"Log message 2\");\n    logger.Log(\"Log message 3\");\n\n    // 模拟主线程继续执行其他任务\n    std::this_thread::sleep_for(std::chrono::seconds(1));\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述样例中涉及到主要的FFRT的接口包括："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["class ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony/resourceschedule_ffrt/blob/master/docs/ffrt-api-guideline-cpp.md#queue",
              children: "queue"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "队列类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony/resourceschedule_ffrt/blob/master/docs/ffrt-api-guideline-cpp.md#sleep_for",
              children: "sleep_for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "延迟一定时间。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(916346)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如何使用FFRT C++ API详见：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-basicfun/ffrt-kit/ffrt-development-guideline#using-ffrt-c-api-1",
          children: "FFRT C++接口三方库使用指导"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用FFRT C接口或C++接口时，都可以通过FFRT C++接口三方库简化头文件包含，即使用#include \"ffrt/ffrt.h\"头文件包含语句。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "避免提交超长任务"
          })
        }), " FFRT内置进程级队列任务超时检测机制。当串行任务执行时间超过预设阈值（默认30秒）时，系统将打印和上报异常日志，并触发预设的进程超时回调函数（如已配置）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "同步原语使用规范"
          })
        }), " 在提交给FFRT的任务闭包中，避免使用std::mutex、std::condition_variable和std::recursive_mutex，标准库同步原语会长时间占用FFRT Worker线程。请替换为FFRT提供的同步原语：ffrt::mutex、ffrt::condition_variable或ffrt::recursive_mutex，其用法与标准库相同。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "全局变量中的队列管理"
          })
        }), " 若在全局变量中管理串行队列，随业务进程销毁，测试程序中需注意生命周期解耦问题。在测试用例结束时，需显式释放串行队列，其他资源可随全局变量释放。原因是全局变量在主函数结束后析构，而串行队列的释放依赖于FFRT框架中的其他资源，此时这些资源可能已被销毁。"]
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
916346(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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