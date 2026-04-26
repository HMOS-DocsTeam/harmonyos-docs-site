"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["986505"], {
2004(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_ffrt_kit_ffrt_example_cpp_ffrt_concurrency_job_partner_cpp_ffrt_concurrency_job_partner_cpp_md_d90_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-ffrt-kit-ffrt-example-cpp-ffrt-concurrency-job-partner-cpp-ffrt-concurrency-job-partner-cpp-md-d90.json
var site_docs_system_basicfun_ffrt_kit_ffrt_example_cpp_ffrt_concurrency_job_partner_cpp_ffrt_concurrency_job_partner_cpp_md_d90_namespaceObject = JSON.parse('{"id":"system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-job-partner-cpp/ffrt-concurrency-job-partner-cpp","title":"Function Flow Runtime任务伙伴(C++)","description":"概述","source":"@site/docs/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-job-partner-cpp/ffrt-concurrency-job-partner-cpp.md","sourceDirName":"system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-job-partner-cpp","slug":"/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-job-partner-cpp/","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-job-partner-cpp/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Function Flow Runtime任务伙伴(C++)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-concurrency-job-partner-cpp","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Function Flow Runtime图依赖并发(C++)","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-graph-cpp/"},"next":{"title":"Function Flow Runtime开发指导","permalink":"/harmonyos-docs-site/system-basicfun/ffrt-kit/ffrt-development-guideline/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/ffrt-kit/ffrt-example-cpp/ffrt-concurrency-job-partner-cpp/ffrt-concurrency-job-partner-cpp.md


const frontMatter = {
	title: 'Function Flow Runtime任务伙伴(C++)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ffrt-concurrency-job-partner-cpp',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Function Flow Runtime任务伙伴(C++)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "示例：某商城系统",
  "id": "示例某商城系统",
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
        id: "function-flow-runtime任务伙伴c",
        children: "Function Flow Runtime任务伙伴(C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，FFRT支持Job Partner功能。在实际业务中，可能会遇到某一个线程（比如UI绘制线程）耗时很长，难以充分利用CPU多核能力的情况。此时，将原有线程的大任务拆分为多个小任务交给其他线程去执行是解决该问题的有效方法。但是，在实践中，会遇到两个问题："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "问题1：小任务中的部分片段受限于某些原因，必须执行在指定的线程上（比如访问JS虚拟机中的变量）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "问题2：小任务会被拆分为多个小片段（可能由于问题1或者其他原因），单次执行时间可能在微秒级，而单次线程唤醒的开销在几十个微秒级，难以获得并发收益。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为解决以上问题，Job Partner并发范式应运而生。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(755811)/* ["default"] */.A) + "",
        width: "994",
        height: "351"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Job Partner并发范式中定义原先的线程为master线程，并支持动态管理partner线程（伙伴线程）。它有两个特性："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "特性1：针对问题1，支持partner线程在执行任务过程中暂停当前任务的执行，之后将任务发送到master线程执行，直到master线程执行完成之后在partner线程继续执行原有任务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "特性2：针对问题2，利用批量小任务的特征，动态将多个小任务合并为更大的FFRT任务，以均摊单个小任务的调度开销。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例某商城系统",
      children: "示例：某商城系统"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现一个商城系统的节点并行化创建，要求节点创建的部分代码片段必须在JS线程中运行，其他片段可以在任意线程执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是原有伪代码实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace market_system {\n    // 批量创建节点，在js线程上被调用\n    void create_nodes(std::array<Node>& nodes)\n    {\n        for (int i = 0; i < nodes.size(); i++) {\n            code1(); // 可以在任意线程上执行的代码片段\n            code2(); // 必须在js线程上执行的代码片段\n            code3(); // 可以在任意线程上执行的代码片段\n        }\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Job Partner并行化后的伪代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <array>\n#include <memory>\n#include \"ffrt/ffrt.h\" // 来自 OpenHarmony 第三方库 \"@ppd/ffrt\"\n\nnamespace market_system {\n    // 批量创建节点，在js线程上被调用\n    void create_nodes(std::array<Node>& nodes)\n    {\n        constexpr uint64_t stack_size = 16 * 1024;\n        auto stack = std::make_unique<std::array<char, stack_size>[]>(nodes.size()); // 创建job_num个执行栈\n        auto partner = ffrt::job_partner<>::get_partner_of_this_thread(); // 获得当前js线程的伙伴\n        for (int i = 0; i < nodes.size(); i++) {\n            partner->submit([&] { // 每个节点的创建提交给partner\n                code1(); // 可以在任意线程上执行的代码片段\n                ffrt::job_partner<>::submit_to_master([&] { // 遇到必须在master线程执行的任务时发给主线程并同步等待\n                    code2(); // 必须在js线程上执行的代码片段\n                });\n                code3(); // 可以在任意线程上执行的代码片段\n            }, &stack[i], stack_size);\n        }\n        partner->wait(); // 等待所有节点创建完成\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述样例中涉及的主要FFRT接口及其功能包括："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://gitcode.com/openharmony/resourceschedule_ffrt/blob/master/docs/ffrt-api-guideline-cpp.md#job_partner",
              children: "job_partner"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "细粒度任务伙伴接口。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(840292)/* ["default"] */.A) + "",
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "适用Job Partner并发范式的场景应该是粒度较小且不会长时间阻塞线程的大批量任务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果任务粒度较大（比如数百微秒以上），推荐使用FFRT更为通用的任务提交接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果任务不满足大批量的特征，使用Job Partner并发范式并不能显著降低调度开销。"
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
840292(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
755811(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478457-b62ddab17f85bb8563292ec51aaacd76.png");

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