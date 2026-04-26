"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["545791"], {
690882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_scenarios_jsvm_usage_examples_use_jsvm_about_code_cache_use_jsvm_about_code_cache_md_81f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-scenarios-jsvm-usage-examples-use-jsvm-about-code-cache-use-jsvm-about-code-cache-md-81f.json
var site_docs_coding_jsvm_jsvm_scenarios_jsvm_usage_examples_use_jsvm_about_code_cache_use_jsvm_about_code_cache_md_81f_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-about-code-cache/use-jsvm-about-code-cache","title":"使用code cache加速编译","description":"code cache简介","source":"@site/docs/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-about-code-cache/use-jsvm-about-code-cache.md","sourceDirName":"coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-about-code-cache","slug":"/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-about-code-cache/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-about-code-cache/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用code cache加速编译","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-code-cache","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口创建多个引擎执行JS代码并销毁","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-runtime-task/"},"next":{"title":"JSVM通用调优实践","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/jsvm-optimizations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-about-code-cache/use-jsvm-about-code-cache.md


const frontMatter = {
	title: '使用code cache加速编译',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-code-cache',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用code cache加速编译';

const assets = {

};



const toc = [{
  "value": "场景示例",
  "id": "场景示例",
  "level": 2
}, {
  "value": "注意事项",
  "id": "注意事项",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "使用code-cache加速编译",
        children: "使用code cache加速编译"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "##code cache简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM提供了生成并使用code cache加速编译过程的方法，其获取和使用分为下面几个部分："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "首先使用compile系列接口编译得到JSVM_Script"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用OH_JSVM_CreateCodeCache接口，传递编译完成后生成的JSVM_Script"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将OH_JSVM_CreateCodeCache生成的code cache保存，等待下一次编译时，作为参数传入compile系列接口"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过上述流程，将会在使用code cache的那次编译中，极大减少编译时间，其原理为将编译完成的script序列化，然后使用code cache编译时就不再需要重新解析/编译已经被序列化的函数，只需要进行一次反序列化即可，这样编译就简化为了一次数据读取。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "##code cache校验规格说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "规格"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "规格说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "完整性校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "校验cache实际长度，是否与生成时一致"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "兼容性校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "校验生成cache的JSVM版本与编译选项是否与当前一致"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "一致性校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "校验生成cache的js源码，是否与当前输入源码长度一致"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的伪代码是一个典型的使用方法，其中第二次编译，如果cacheRejected为true，那么说明code cache被拒绝无法生效，运行时间会与无code cache时间相同；为false则这次运行将会极大加快。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其中使用到的JSVM-API可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-data-types-interfaces",
        children: "JSVM数据类型与接口说明"
      }), "，这里仅展示调用的步骤。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["外层跨语言交互的部分可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n#include <string>\n\nJSVM_Value UseCodeCache(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 编译参数准备\n    JSVM_Value jsSrc;\n    JSVM_Script script;\n    JSVM_Value result;\n    size_t length = 0;\n    const uint8_t* dataPtr = nullptr;\n    bool cacheRejected = true;\n    static std::string src = R\"JS(\n        a = 65536;\n        b = 32768;\n        c = a + b;\n    )JS\";\n\n    // 生成code cache\n    {\n        JSVM_HandleScope handleScope;\n        OH_JSVM_OpenHandleScope(env, &handleScope);\n\n        // 源码字符串转换为js字符串\n        OH_JSVM_CreateStringUtf8(env, src.c_str(), src.size(), &jsSrc);\n\n        // 编译js代码\n        OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script);\n\n        // 执行js代码\n        OH_JSVM_RunScript(env, script, &result);\n        int value = 0;\n        OH_JSVM_GetValueInt32(env, result, &value);\n        OH_LOG_INFO(LOG_APP, \"first run result: %{public}d\\n\", value);\n\n        if (dataPtr == nullptr) {\n            // 将js源码编译出的脚本保存到cache, 可以避免重复编译, 带来性能提升\n            OH_JSVM_CreateCodeCache(env, script, &dataPtr, &length);\n        }\n\n        OH_JSVM_CloseHandleScope(env, handleScope);\n    }\n\n    // 使用code cache\n    {\n        JSVM_HandleScope handleScope;\n        OH_JSVM_OpenHandleScope(env, &handleScope);\n\n        // 源码字符串转换为js字符串\n        OH_JSVM_CreateStringUtf8(env, src.c_str(), src.size(), &jsSrc);\n\n        // 使用code cache编译js代码\n        OH_JSVM_CompileScript(env, jsSrc, dataPtr, length, true, &cacheRejected, &script);\n\n        // 执行js代码\n        OH_JSVM_RunScript(env, script, &result);\n        int value = 0;\n        OH_JSVM_GetValueInt32(env, result, &value);\n        OH_LOG_INFO(LOG_APP, \"second run result: %{public}d\\n\", value);\n\n        OH_JSVM_CloseHandleScope(env, handleScope);\n    }\n    OH_LOG_INFO(LOG_APP, \"cache rejected: %{public}d\\n\", cacheRejected);\n    return result;\n}\n\n// Register a callback.\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = UseCodeCache}\n};\nstatic JSVM_CallbackStruct *method = param;\n// Register the C++ callback as a JSVM globalThis.UseCodeCache property for the JS to call.\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"UseCodeCache\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char* srcCallNative = R\"JS(globalThis.UseCodeCache())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "first run result: 98304\nsecond run result: 98304\ncache rejected: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码中使用了code cache进行编译：OH_JSVM_CompileScript(env, jsSrc, dataPtr, length, true, &cacheRejected, &script);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个接口的传入参数中包含cacheRejected，用于接收实际编译过程中code cache是否被拒绝的状态，具体包括多种情况："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-code cache校验失败"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-code cache校验成功"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "内存中存在编译缓存，code cache没有被校验"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于第一种情况，这个参数会被设置为true，而后两种情况都是false，因此需要注意即使reject为false，也不能说明code cache被接收了。"
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