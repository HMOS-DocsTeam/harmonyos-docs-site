"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["469991"], {
668143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_scenarios_jsvm_usage_examples_jsvm_optimizations_jsvm_optimizations_md_842_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-scenarios-jsvm-usage-examples-jsvm-optimizations-jsvm-optimizations-md-842.json
var site_docs_coding_jsvm_jsvm_scenarios_jsvm_usage_examples_jsvm_optimizations_jsvm_optimizations_md_842_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-scenarios/jsvm-usage-examples/jsvm-optimizations/jsvm-optimizations","title":"JSVM通用调优实践","description":"JSVM调用结构","source":"@site/docs/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/jsvm-optimizations/jsvm-optimizations.md","sourceDirName":"coding/jsvm/jsvm-scenarios/jsvm-usage-examples/jsvm-optimizations","slug":"/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/jsvm-optimizations/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/jsvm-optimizations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"JSVM通用调优实践","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-optimizations","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用code cache加速编译","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-about-code-cache/"},"next":{"title":"使用HiSmartPerf采集jsvm trace","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-performance/use-jsvm-about-v8-trace/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/jsvm-optimizations/jsvm-optimizations.md


const frontMatter = {
	title: 'JSVM通用调优实践',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-optimizations',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'JSVM通用调优实践';

const assets = {

};



const toc = [{
  "value": "JSVM调用结构",
  "id": "jsvm调用结构",
  "level": 2
}, {
  "value": "提升启动速度",
  "id": "提升启动速度",
  "level": 2
}, {
  "value": "减少 JS 引擎层的开销",
  "id": "减少-js-引擎层的开销",
  "level": 3
}, {
  "value": "在native层减少时间开销",
  "id": "在native层减少时间开销",
  "level": 3
}, {
  "value": "使用更高效的JSVM-API",
  "id": "使用更高效的jsvm-api",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "jsvm通用调优实践",
        children: "JSVM通用调优实践"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "jsvm调用结构",
      children: "JSVM调用结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "小程序使用JSVM执行JS代码的过程可以分为 Native，JSVM-API，JSVM 三层："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Native：小程序运行JS的逻辑层，使用JSVM提供的接口完成JS代码编译，运行，code cache生成等操作的逻辑排布和组合"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSVM-API：连接native和v8的接口兼容层，保持对不同版本JS引擎的兼容，提供JS引擎标准化的使用实践"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSVM：JS引擎层，负责JS代码实际的编译运行"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用JSVM的过程中，可能会因为多种原因产生不必要的开销，导致启动速度变慢。可以从以下三个层面进行分析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "提升启动速度",
      children: "提升启动速度"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于使用JSVM的应用启动场景，我们可以区分冷热启动用于分别进行不同的优化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首先是冷启动，是没有任何profile或者cache可以用于优化的场景，通常是首次启动；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "热启动则是已经充分预热，在多次启动之后获取了足量用于优化的cache的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "减少-js-引擎层的开销",
      children: "减少 JS 引擎层的开销"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "引擎层的开销很大程度上来源于编译。通过合理调整调用JSVM-API时传入的选项，可以降低主线程上JS引擎的编译开销。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下面的编译接口为例，其中eagerCompile这个参数的开关可以调控编译行为，通过在不同的启动场景打开这个选项可以实现优化效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/**\n * ...\n * @param eagerCompile: Whether to compile the script eagerly.\n * ...\n */\nJSVM_EXTERN JSVM_Status OH_JSVM_CompileScript(JSVM_Env env,\n                                              JSVM_Value script,\n                                              const uint8_t* cachedData,\n                                              size_t cacheDataLength,\n                                              bool eagerCompile, // 开启全量编译\n                                              bool* cacheRejected,\n                                              JSVM_Script* result);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["同时，code cache的生成和使用也会对编译产生影响，这部分可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/use-jsvm-about-code-cache",
        children: "使用code cache加速编译"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "热启动：生成足够多的code cache"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "热启动场景下，我们会在热启动前生成code cache以减少编译带来的开销。这个时候生成的code cache的覆盖率会影响code cache对热启动的优化效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有一个简单的策略可以生成足够的code cache：在生成code cache之前的那次编译中，打开eager compile选项。这样，V8会在编译时进行全量编译，确保生成的code cache是全量的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个方法会增加额外的编译时间开销，可能影响冷启动时间。后续将详细讨论native层的冷启动优化方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "冷启动：使用lazy compile代替eager compile"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在冷启动时，eager compile会增加不必要的编译时间。这其中主要的原因是没有拿到v8 lazy compile优化效果：v8会将不在必经路径上的函数推迟编译，在实际运行到的时候才进行编译，这样会减少一些不被运行到函数的编译，从而优化冷启动的时间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，在冷启动时，可以通过关闭eager compile选项来避免阻塞主线程，从而获得足够的冷启动优化效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在native层减少时间开销",
      children: "在native层减少时间开销"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "冷启动：减少code cache的影响"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上面在考虑减少v8层开销的时候，提到了为了热启动的性能可以开启eager compile进行编译，而为了冷启动性能却又需要关闭eager compile选项，看起来是矛盾的。为了解决这个矛盾，避免在冷热启动性能上的权衡，关键点是在code cache生成本身。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "首先，生成code cache需要进行前置编译，其次，生成code cache本身也会产生开销。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在native层，要解决冷启动与生成code cache之间的矛盾，可以另起一个线程用于生成code cache，这样可以避免生成code cache操作对冷启动的影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有两个方法可以参考（以下伪代码仅用于展示逻辑流程，不涉及实际的API调用）："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将生成code cache必需的前置编译也放到新增的线程上，这样编译选项可以分开使用：生成code cache打开eager compile，冷启动运行则关闭，这样做的缺点是可能进一步提高运行时的峰值资源占用，优点是code cache生成和运行可以完全解耦，不再需要考虑生成code cache的时间点。该流程的伪代码如下所示"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async_create_code_cache() {\n  compile_with_eager_compile();\n  create_code_cache();\n  save_code_cache();\n}\n\n\nif (has_code_cache) {\n  evaluate_script_with_code_cache();\n} else {\n  start_thread(async_create_code_cache());\n  evaluate_script_without_code_cache();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在启动过程中的所有路径运行完之后，再启动新线程生成code cache，这样不必使用eager compile也能获取足量的code cache，同时保证热启动性能不受影响，这样做的缺点是生成code cache的时间点受限，优点是峰值资源占用相对更少，且不必生成过量的code cache导致io变慢。这个流程可以用如下所示的伪代码来表示"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "async_create_code_cache() {\n  compile_with_out_eager_compile();\n  create_code_cache();\n  save_code_cache();\n}\n\n\nif (has_code_cache) {\n  evaluate_script_with_code_cache();\n} else {\n  evaluate_script_without_code_cache();\n}\n\n\nif (script_run_completed) {\n  start_thread(async_create_code_cache());\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用更高效的jsvm-api",
      children: "使用更高效的JSVM-API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在能达到相同效果时，使用更高效的JSVM-API是一种有效的性能优化方法，以下是一些具体的实践示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用IsXXX代替TypeOf"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "过去发现，针对仅需要判断对象类型的场景，存在一种相对低效的使用方法："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从OH_JSVM_TypeOf接口获取类型后，再判断是否与某个类型相同。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这种方法需要先查询object的类型，这种方法相对于直接使用is方法会更慢，因此我们新增了针对基础类型的IsXXX系列方法，用更高效的接口代替了相对低效的接口。下面的示例中使用到的JSVM-API可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-data-types-interfaces",
        children: "JSVM数据类型与接口说明"
      }), "，这里仅展示调用的步骤。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "低效用例"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool Test::IsFunction(JSVM_Env env, JSVM_Value jsvmValue) const {\n    // type judgment\n    JSVM_ValueType valueType;\n    OH_JSVM_TypeOf(*env, jsvmValue, &valueType);\n    return valueType == JSVM_FUNCTION;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "高效用例"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool Test::IsFunction(JSVM_Env env, JSVM_Value jsvmValue) const {\n    // type judgment\n    bool result = false;\n    OH_JSVM_IsFunction(*env, jsvmValue, &result); // 可直接判断是否为Function类型\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以某生态应用小程序场景为例，这个优化可以带来的性能收益端到端有150ms，总占比约5%。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "直接使用OH_JSVM_CreateReference，避免创建冗余的object"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "过去存在这样一种创建reference的路径："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个新的object->设置object的值->创建object的reference。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在已有值的情况下，直接创建值的引用即可。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面的示例中使用的JSVM-API可以参考 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-data-types-interfaces",
        children: "JSVM数据类型与接口说明"
      }), "，这里仅展示调用的步骤。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "低效用例"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// (1) open handle scope\nJSVM_HandleScope scope;\nOH_JSVM_OpenHandleScope(*env, &scope);\n// (2) get JSVM_Value\nJSVM_Value jsvmValue;\nOH_JSVM_GetNull(*env, &jsvmValue);\n// (3) create and store Reference for JSVM_Value\nJSVM_Value wrappingObject;\nOH_JSVM_CreateObject(*env, &wrappingObject);\nOH_JSVM_SetElement(*env, wrappingObject, 1, jsvmValue);\nOH_JSVM_CreateReference(*env, wrappingObject, 1, &result->p_member->jsvmRef);\n// (4) close handle scope\nOH_JSVM_CloseHandleScope(*env, scope);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "高效用例"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// (1) open handle scope\nJSVM_HandleScope scope;\nOH_JSVM_OpenHandleScope(*env, &scope);\n// (2) get JSVM_Value\nJSVM_Value jsvmValue;\nOH_JSVM_GetNull(*env, &jsvmValue);\n// (3) create and store Reference for JSVM_Value\nOH_JSVM_CreateReference(*env, jsvmValue, 1, &result->p_member->jsvmRef); // 可从任意对象类型直接创建Reference，代码更为简洁高效\n// (4) close handle scope\nOH_JSVM_CloseHandleScope(*env, scope);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同样以某生态应用小程序场景为例，这个改动减少了大量冗余的接口调用，最终带来的端到端时间收益有100+ms，约3%。"
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