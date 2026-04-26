"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["817706"], {
80847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_custom_asynchronous_operations_use_napi_about_custom_asynchronous_operations_md_466_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-custom-asynchronous-operations-use-napi-about-custom-asynchronous-operations-md-466.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_custom_asynchronous_operations_use_napi_about_custom_asynchronous_operations_md_466_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-custom-asynchronous-operations/use-napi-about-custom-asynchronous-operations","title":"使用Node-API进行自定义异步操作相关开发","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-custom-asynchronous-operations/use-napi-about-custom-asynchronous-operations.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-custom-asynchronous-operations","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-custom-asynchronous-operations/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-custom-asynchronous-operations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"使用Node-API进行自定义异步操作相关开发","sidebar_position":20,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-custom-asynchronous-operations","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口创建和获取string值","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string/"},"next":{"title":"使用Node-API接口进行异步任务开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-asynchronous-task/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-custom-asynchronous-operations/use-napi-about-custom-asynchronous-operations.md


const frontMatter = {
	title: '使用Node-API进行自定义异步操作相关开发',
	sidebar_position: 20,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-custom-asynchronous-operations',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API进行自定义异步操作相关开发';

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
  "value": "napi_async_init、napi_async_destroy",
  "id": "napi_async_initnapi_async_destroy",
  "level": 3
}, {
  "value": "napi_make_callback",
  "id": "napi_make_callback",
  "level": 3
}, {
  "value": "napi_open_callback_scope、napi_close_callback_scope",
  "id": "napi_open_callback_scopenapi_close_callback_scope",
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
        id: "使用node-api进行自定义异步操作相关开发",
        children: "使用Node-API进行自定义异步操作相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API的自定义异步操作功能，可以使ArkTS更灵活高效地处理那些可能阻塞事件循环的长时间运行任务，同时保持应用的响应性和性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node-API支持异步操作，这有助于处理IO密集型或计算密集型任务。这些任务通常需要非阻塞的执行方式，以避免阻塞主线程。以下是一些关于自定义异步操作的基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "异步模型："
          })
        }), " Node-API支持异步模型，提供了Promise和Callback两种方式来实现异步操作。Promise是一种基于未来值的编程模型，它允许开发者将异步操作的结果封装在一个对象中，并通过链式调用的方式处理异步操作的结果。Callback则是一种传统的异步编程方式，通过回调函数来处理异步操作的结果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "临时结果："
          })
        }), " 当原生方法（即Node-API代码）被调用时，它会立即返回一个临时结果给ArkTS调用者。这个临时结果通常是一个表示异步操作正在进行中的标志，或者是用于后续处理异步操作结果的句柄。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "回调或Promise："
          })
        }), " 当异步操作完成后，结果会通过回调函数或Promise对象返回给ArkTS调用者。这样，ArkTS代码就可以在异步操作完成后继续执行后续的逻辑。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这些Node-API接口可以在Node-API模块中执行异步操作、进行ArkTS回调以及管理相关资源的生命周期。通过使用这些函数，可以有效地与ArkTS环境进行交互，并实现复杂的异步操作。它们的使用场景如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_async_init、napi_async_destroy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建和销毁异步资源上下文环境。这些函数可以用于处理长时间运行的异步操作，例如文件I/O操作、网络请求等。在这些情况下，创建异步资源上下文环境，执行必要的异步任务，然后销毁资源以释放相关的资源和内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_make_callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于在异步资源上下文环境中执行ArkTS回调函数。在处理异步操作的结果后，将结果传递回ArkTS代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_open_callback_scope、napi_close_callback_scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建和关闭回调作用域。在异步操作期间执行ArkTS代码并管理其上下文。"
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
      id: "napi_async_initnapi_async_destroy",
      children: "napi_async_init、napi_async_destroy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在需要管理异步资源上下文环境的创建和销毁时，可以使用napi_async_init和napi_async_destroy来管理这些环境。需要注意的是，这些函数不支持与async_hook相关的能力，所以在使用时需要注意可能存在的一些限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_make_callback",
      children: "napi_make_callback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在编写Node-API模块时，异步操作完成后需调用ArkTS回调函数。可使用napi_async_init创建异步资源上下文，再使用napi_make_callback执行ArkTS回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_open_callback_scopenapi_close_callback_scope",
      children: "napi_open_callback_scope、napi_close_callback_scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在需要创建一个回调作用域来确保异步操作期间ArkTS环境仍然可用时，可以使用napi_open_callback_scope创建回调作用域，然后在异步操作完成后使用napi_close_callback_scope关闭该作用域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\nstatic constexpr int INT_ARG_2 = 2; // 入参索引\nstatic constexpr int INT_ARG_3 = 3; // 入参索引\n\nstatic napi_value AsynchronousWork(napi_env env, napi_callback_info info)\n{\n    // 接受四个参数\n    size_t argc = 4;\n    napi_value args[4] = {nullptr};\n    // 从回调信息中获取参数\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 提取参数中的资源、接收器对象和函数\n    napi_value resource = args[0];\n    napi_value recv = args[1];\n    napi_value func = args[INT_ARG_2];\n    napi_value argv[1] = {nullptr};\n    argv[0] = args[INT_ARG_3];\n    // 获取函数的类型\n    napi_valuetype funcType;\n    napi_typeof(env, func, &funcType);\n    // 创建一个资源名称为\"test\"的字符串\n    napi_value resourceName = nullptr;\n    napi_create_string_utf8(env, \"test\", NAPI_AUTO_LENGTH, &resourceName);\n    // 初始化异步上下文\n    napi_async_context context;\n    napi_status status = napi_async_init(env, resource, resourceName, &context);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_async_init fail\");\n        return nullptr;\n    }\n    // 打开回调作用域\n    napi_callback_scope scope = nullptr;\n    status = napi_open_callback_scope(env, resource, context, &scope);\n    if (status != napi_ok) {\n        napi_async_destroy(env, context);\n        napi_throw_error(env, nullptr, \"napi_open_callback_scope fail\");\n        return nullptr;\n    }\n    // 调用回调函数\n    napi_value result = nullptr;\n    if (funcType == napi_function) {\n        napi_make_callback(env, context, recv, func, 1, argv, &result);\n    } else {\n        napi_async_destroy(env, context);\n        napi_close_callback_scope(env, scope);\n        napi_throw_error(env, nullptr, \"Unexpected argument type\");\n        return nullptr;\n    }\n    // 关闭回调作用域\n    status = napi_close_callback_scope(env, scope);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_close_callback_scope fail\");\n        return nullptr;\n    }\n    // 销毁异步上下文\n    napi_async_destroy(env, context);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index.d.ts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const asynchronousWork: (object: Object, obj: Object, fun: Function, num: number) => number | undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\nimport { process } from '@kit.ArkTS';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  hilog.info(0x0000, 'testTag', 'Test Node-API asynchronousWork: %{public}d',\n    testNapi.asynchronousWork({}, process.ProcessManager, (num: number) => {\n      return num;\n    }, 123));\n  // ···\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API asynchronousWork error: %{public}s', error.message);\n  // ···\n}\n"
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