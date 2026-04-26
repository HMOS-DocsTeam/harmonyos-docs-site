"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["660516"], {
262020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_thread_model_stage_thread_model_stage_md_440_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-thread-model-stage-thread-model-stage-md-440.json
var site_docs_ability_kit_stage_model_development_thread_model_stage_thread_model_stage_md_440_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/thread-model-stage/thread-model-stage","title":"线程模型","description":"线程是操作系统进行运算调度的基本单位，是进程中的执行流，共享进程的资源。一个进程可以包含多个线程。","source":"@site/docs/ability-kit/stage-model-development/thread-model-stage/thread-model-stage.md","sourceDirName":"ability-kit/stage-model-development/thread-model-stage","slug":"/ability-kit/stage-model-development/thread-model-stage/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/thread-model-stage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"线程模型","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/thread-model-stage","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"进程模型","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/process-model-stage/"},"next":{"title":"Stage模型应用配置文件","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/config-file-stage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/thread-model-stage/thread-model-stage.md


const frontMatter = {
	title: '线程模型',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/thread-model-stage',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '线程模型';

const assets = {

};



const toc = [{
  "value": "线程类型",
  "id": "线程类型",
  "level": 2
}, {
  "value": "使用EventHub进行线程内通信",
  "id": "使用eventhub进行线程内通信",
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
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "线程模型",
        children: "线程模型"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["线程是操作系统进行运算调度的基本单位，是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/process-model-stage",
        children: "进程"
      }), "中的执行流，共享进程的资源。一个进程可以包含多个线程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "线程类型",
      children: "线程类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/ability-terminology#stage%E6%A8%A1%E5%9E%8B",
        children: "Stage模型"
      }), "下的线程主要有如下三类："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["主线程\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "执行UI绘制。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["管理主线程的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-runtime/arkts-runtime-overview",
              children: "ArkTS引擎"
            }), "实例，使多个UIAbility组件能够运行在其之上。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["管理其他线程的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-runtime/arkts-runtime-overview",
              children: "ArkTS引擎"
            }), "实例，例如使用TaskPool（任务池）创建任务或取消任务、启动和终止Worker线程。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "分发交互事件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "处理应用代码的回调，包括事件处理和生命周期管理。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "接收TaskPool以及Worker线程发送的消息。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool",
          children: "TaskPool线程"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "用于执行耗时操作，支持设置调度优先级、负载均衡等功能，推荐使用。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker",
          children: "Worker线程"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "用于执行耗时操作，支持线程间通信。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["TaskPool与Worker的运作机制、通信手段和使用方法可以参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-vs-worker",
                children: "TaskPool和Worker的对比"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(114773)/* ["default"] */.A) + "",
                width: "1024",
                height: "611"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(355641)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TaskPool自行管理线程数量，其生命周期由TaskPool统一管理。", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
          children: "Worker"
        }), "线程的生命周期由开发者自行维护。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["同一线程中存在多个组件，例如UIAbility组件和UI组件都存在于主线程中。在Stage模型中目前主要使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BD%BF%E7%94%A8eventhub%E8%BF%9B%E8%A1%8C%E7%BA%BF%E7%A8%8B%E5%86%85%E9%80%9A%E4%BF%A1",
          children: "EventHub"
        }), "进行数据通信。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["执行hdc shell命令，进入设备的shell命令行。在shell命令行中，执行ps -p <pid> -T命令，可以查看指定应用进程的线程信息。其中，<pid>为需要指定的应用进程的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/process-model-stage",
          children: "进程ID"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用eventhub进行线程内通信",
      children: "使用EventHub进行线程内通信"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-eventhub/js-apis-inner-application-eventhub",
        children: "EventHub"
      }), "提供了线程内发送和处理事件的能力，包括对事件订阅、取消订阅、触发事件等。以UIAbility组件与UI之间的数据同步为例，具体使用方法可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-data-sync-with-ui#%E4%BD%BF%E7%94%A8eventhub%E8%BF%9B%E8%A1%8C%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1",
        children: "UIAbility组件与UI的数据同步"
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
355641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
114773(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477511-25ddc8b8945a88bf8320848263760c9f.png");

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