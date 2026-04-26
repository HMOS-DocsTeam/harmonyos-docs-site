"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["343969"], {
511693(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_promise_use_napi_about_promise_md_1a3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-promise-use-napi-about-promise-md-1a3.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_promise_use_napi_about_promise_md_1a3_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-promise/use-napi-about-promise","title":"使用Node-API接口处理异步操作","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-promise/use-napi-about-promise.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-promise","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-promise/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-promise/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"使用Node-API接口处理异步操作","sidebar_position":17,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-promise","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口进行primitive类相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-primitive/"},"next":{"title":"使用Node-API接口设置ArkTS对象的属性","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-promise/use-napi-about-promise.md


const frontMatter = {
	title: '使用Node-API接口处理异步操作',
	sidebar_position: 17,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-promise',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口处理异步操作';

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
  "value": "场景和功能介绍",
  "id": "场景和功能介绍",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "napi_is_promise",
  "id": "napi_is_promise",
  "level": 3
}, {
  "value": "napi_create_promise",
  "id": "napi_create_promise",
  "level": 3
}, {
  "value": "napi_resolve_deferred &amp; napi_reject_deferred",
  "id": "napi_resolve_deferred--napi_reject_deferred",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
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
        id: "使用node-api接口处理异步操作",
        children: "使用Node-API接口处理异步操作"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API接口处理异步操作。异步操作是指需要一定时间才能完成的操作，例如从网络下载数据或读取大型文件。与同步操作不同，异步操作不会阻塞主线程，而是会在后台执行。将异步操作完成后的事件放入任务队列，等待主线程空闲时执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Promise是ArkTS中用来处理异步操作的对象，Promise有pending（待定）、fulfilled（已兑现）和rejected（已拒绝）三种状态，Promise的初始状态是pending。resolve函数可以使其状态从pending变为fulfilled（已兑现），reject函数可以使其状态从pending变为rejected（已拒绝），一旦状态变为已兑现或已拒绝，将不能再更改。以下是一些基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "同步"
          })
        }), "：同步是指代码按顺序执行，一行代码执行完后继续执行下一行。如果某个操作耗时较长，整个程序会被阻塞。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "异步"
          })
        }), "：异步是指任务可以同时执行，不需要等待上一个任务结束。常见的异步操作有定时器、事件监听和网络请求等。异步任务不会阻塞后续任务的执行，而是通过回调函数或Promise对象来处理任务的结果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Promise"
          })
        }), "：Promise是一个ArkTS对象，用于处理异步操作。通过then、catch和finally方法添加自定义逻辑。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "deferred"
          })
        }), "：deferred是用来控制Promise状态的对象，通过它可以在未来的某个时刻将Promise的状态标记为已完成fulfilled（已兑现）或rejected（已拒绝）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "resolve"
          })
        }), "：此函数可以将Promise的状态从pending（待定）改为fulfilled（已兑现），向resolve中传入的参数可以在Promise对象的then方法中获取。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "reject"
          })
        }), "：此函数可以将Promise的状态从pending（待定）改为rejected（已拒绝），向reject中传入的参数可以在Promise对象的catch方法中获取。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这些基本概念非常重要，开发者需要通过适当的方法来处理异步操作，使用Promise链式调用多个异步操作，使代码清晰整洁，便于维护。Node-API提供的方法可以帮助开发者在C/C++应用中处理ArkTS中的异步操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下Node-API接口主要用于与ArkTS Promise对象进行交互。它们的使用场景如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查一个napi_value是否代表一个Promise对象时，可以使用这个函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_promise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要创建一个Promise对象时，可以使用这个函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_resolve_deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当你需要对promise关联的deferred对象进行resolve，将其从挂起状态转换为已兑现状态时，可以使用这个函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_reject_deferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当你需要对promise关联的deferred对象进行reject，将其从挂起状态转换为已拒绝状态时，可以使用这个函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node-API接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/use-napi-process",
        children: "使用Node-API实现跨语言交互开发流程"
      }), "，本文仅对接口对应C++及ArkTS相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_is_promise",
      children: "napi_is_promise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断给定的napi_value是否表示一个Promise对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_is_promise\nstatic napi_value IsPromise(napi_env env, napi_callback_info info)\n{\n    napi_value argv[1] = {nullptr};\n    size_t argc = 1;\n    napi_status status;\n    // 获取传入的参数\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    bool isPromise = false;\n    // 检查给定的入参是否为Promise对象，将结果保存在isPromise变量中\n    status = napi_is_promise(env, argv[0], &isPromise);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_is_promise failed\");\n        return nullptr;\n    }\n    napi_value result = nullptr;\n    // 将isPromise的值转换为napi_value中的类型返回\n    napi_get_boolean(env, isPromise, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const isPromise: <T>(value: T) => boolean; // napi_is_promise\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_is_promise\nlet value = Promise.resolve();\n// 传入的对象为Promise时，返回true，否则返回false\nhilog.info(0x0000, 'Node-API', 'napi_is_promise %{public}s', testNapi.isPromise(value));\nhilog.info(0x0000, 'Node-API', 'napi_is_promise string %{public}s', testNapi.isPromise(''));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_promise",
      children: "napi_create_promise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_create_promise用于创建一个Promise对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用该接口时应注意："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未处理异常时调用napi_create_promise会返回napi_pending_exception。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用napi_create_promise后未判断返回值是否为napi_ok，之后使用了无效的deferred和promise会导致应用崩溃。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_value NapiPromiseDemo(napi_env env, napi_callback_info info)\n{\n    napi_deferred deferred = nullptr;\n    napi_value promise = nullptr;\n    napi_status status = napi_ok;\n\n    napi_throw_error(env, \"500\", \"common error\");\n\n    status = napi_create_promise(env, &deferred, &promise); // 有异常返回napi_pending_exception，且deferred、promise都为nullptr\n    if (status == napi_ok) {\n        // do something\n    }\n\n    return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_resolve_deferred--napi_reject_deferred",
      children: "napi_resolve_deferred & napi_reject_deferred"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用napi_resolve_deferred对Promise关联的deferred对象进行解析，从挂起状态转换为已兑现状态，或从挂起状态转换为已拒绝状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为确保微任务正确执行，ArkTS运行时在使用Node-API方法兑现Promise时，会触发一次微任务执行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CPP部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_resolve_deferred & napi_reject_deferred\nstatic napi_value CreatePromise(napi_env env, napi_callback_info info)\n{\n    // deferred是与Promise对象关联的对象，用于控制Promise的状态 (resolve或reject)\n    napi_deferred deferred = nullptr;\n    napi_value promise = nullptr;\n    // 调用接口创建Promise对象\n    napi_status status = napi_create_promise(env, &deferred, &promise);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Create promise failed\");\n        return nullptr;\n    }\n    // 调用napi_is_promise判断napi_create_promise接口创建的是不是Promise对象\n    bool isPromise = false;\n    napi_value returnIsPromise = nullptr;\n    status = napi_is_promise(env, promise, &isPromise);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_is_promise failed\");\n        return nullptr;\n    }\n    // 将布尔值转为可以返回的napi_value\n    napi_get_boolean(env, isPromise, &returnIsPromise);\n    return returnIsPromise;\n}\n\nstatic napi_value ResolveRejectDeferred(napi_env env, napi_callback_info info)\n{\n    // 获得并解析参数\n    size_t argc = 3;\n    napi_value args[3] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 第一个参数为向resolve传入的信息，第二个参数为向reject传入的信息，第三个参数为Promise的状态\n    bool promiseStatus;\n    napi_status status = napi_get_value_bool(env, args[INT_ARG_2], &promiseStatus);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_get_value_bool failed\");\n        return nullptr;\n    }\n\n    // 创建Promise对象\n    napi_deferred deferred = nullptr;\n    napi_value promise = nullptr;\n    status = napi_create_promise(env, &deferred, &promise);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Create promise failed\");\n        return nullptr;\n    }\n    // 根据第三个参数设置resolve或reject\n    if (promiseStatus) {\n        napi_resolve_deferred(env, deferred, args[INT_ARG_0]);\n    } else {\n        napi_reject_deferred(env, deferred, args[INT_ARG_1]);\n    }\n    // 返回设置了resolve或reject的Promise对象\n    return promise;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createPromise: () => boolean | undefined; // napi_resolve_deferred & napi_reject_deferred\n\nexport const resolveRejectDeferred: (resolve: string, reject: string, status: boolean) => Promise<string> | undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_resolve_deferred & napi_reject_deferred\n// 创建promise如果创建成功返回true，创建失败返回false\nhilog.info(0x0000, 'Node-API', 'napi_create_promise %{public}s', testNapi.createPromise());\n// 调用resolveRejectDeferred函数设置resolve和reject的返回结果以及Promise状态\n// Promise状态为true时设置resolve，返回结果在then函数中获得\nlet promiseSuccess: Promise<string> =\n  testNapi.resolveRejectDeferred('success', 'fail', true) as Promise<string>;\npromiseSuccess.then((res) => {\n  hilog.info(0x0000, 'Node-API', 'get_resolve_deferred resolve %{public}s', res);\n  // ...\n}).catch((err: Error) => {\n  hilog.info(0x0000, 'Node-API', 'get_resolve_deferred reject %{public}s', err);\n  // ...\n})\n// Promise状态为false时设置reject，返回结果在catch函数中获得\nlet promiseFail: Promise<string> =\n  testNapi.resolveRejectDeferred('success', 'fail', false) as Promise<string>;\npromiseFail.then((res) => {\n  hilog.info(0x0000, 'Node-API', 'get_resolve_deferred resolve %{public}s', res);\n  // ...\n}).catch((err: Error) => {\n  hilog.info(0x0000, 'Node-API', 'get_resolve_deferred reject %{public}s', err);\n  // ...\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上代码如果要在native cpp中打印日志，需在CMakeLists.txt文件中添加以下配置信息（并添加头文件：#include \"hilog/log.h\"）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CMakeLists.txt\nadd_definitions( \"-DLOG_DOMAIN=0xd0d0\" )\nadd_definitions( \"-DLOG_TAG=\\\"testTag\\\"\" )\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
      })
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