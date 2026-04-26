"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["684278"], {
230269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_arkts_ide_debug_async_stack_traces_ide_debug_async_stack_traces_md_4d4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-arkts-ide-debug-async-stack-traces-ide-debug-async-stack-traces-md-4d4.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_arkts_ide_debug_async_stack_traces_ide_debug_async_stack_traces_md_4d4_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-async-stack-traces/ide-debug-async-stack-traces","title":"查看异步函数堆栈","description":"从DevEco Studio 5.1.1 Beta1版本开始，开发者可通过打开异步堆栈跟踪开关、设置异步调用链深度来跟踪异步函数调用的顺序。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-async-stack-traces/ide-debug-async-stack-traces.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-async-stack-traces","slug":"/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-async-stack-traces/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-async-stack-traces/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"查看异步函数堆栈","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-async-stack-traces","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"智能步入","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-smart-step-into/"},"next":{"title":"启动调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-enable/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-async-stack-traces/ide-debug-async-stack-traces.md


const frontMatter = {
	title: '查看异步函数堆栈',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-async-stack-traces',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '查看异步函数堆栈';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
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
        id: "查看异步函数堆栈",
        children: "查看异步函数堆栈"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 5.1.1 Beta1版本开始，开发者可通过打开异步堆栈跟踪开关、设置异步调用链深度来跟踪异步函数调用的顺序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(653643)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "异步堆栈跟踪开关为全局设置，开启后所有工程都生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修改异步堆栈跟踪开关或异步调用链深度后，需要重新启动调试或启动新的调试会话才会生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "setTimeout函数异步堆栈不生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "异步堆栈不展示变量列表。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File > Settings"
            })
          }), "（macOS为", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DevEco Studio > Preferences/Settings"
            })
          }), "） ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "> Build, Execution, Deployment > Debugger > Async Stack Traces"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["勾选", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Enable async stack traces"
              })
            }), "打开异步堆栈跟踪开关。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["设置异步调用链深度", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Async call chain depth"
              })
            }), "大于0，才能在调试堆栈时展示调用链对应层数。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(455000)/* ["default"] */.A) + "",
            width: "750",
            height: "121"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在异步调用链中设置断点，启动调试，命中断点后，堆栈列表将展示对应调用链层数。如果实际的调用链层数比设置的异步调用链深度小，则只展示实际调用链层数。每个异步调用链以", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Async call from"
            })
          }), "分隔，后面是调用函数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(734295)/* ["default"] */.A) + "",
            width: "998",
            height: "716"
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
734295(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833719-ef0a4a404ed5c0f51156aa239579ad1c.png");

},
653643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
455000(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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