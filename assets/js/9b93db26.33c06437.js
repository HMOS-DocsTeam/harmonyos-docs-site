"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["673629"], {
743615(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_well_known_symbols_use_jsvm_about_well_known_symbols_md_9b9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-well-known-symbols-use-jsvm-about-well-known-symbols-md-9b9.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_well_known_symbols_use_jsvm_about_well_known_symbols_md_9b9_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-well-known-symbols/use-jsvm-about-well-known-symbols","title":"使用JSVM-API接口进行Well-known symbols相关开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-well-known-symbols/use-jsvm-about-well-known-symbols.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-well-known-symbols","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-well-known-symbols/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-well-known-symbols/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":28,"frontMatter":{"title":"使用JSVM-API接口进行Well-known symbols相关开发","sidebar_position":28,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-well-known-symbols","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API提供的proxy接口","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-proxy/"},"next":{"title":"使用JSVM-API接口进行Wrapper object相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-wrapper-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-well-known-symbols/use-jsvm-about-well-known-symbols.md


const frontMatter = {
	title: '使用JSVM-API接口进行Well-known symbols相关开发',
	sidebar_position: 28,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-well-known-symbols',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行Well-known symbols相关开发';

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
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "使用接口获取Well-known symbols（以OH_JSVM_GetSymbolToStringTag为例）",
  "id": "使用接口获取well-known-symbols以oh_jsvm_getsymboltostringtag为例",
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
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用jsvm-api接口进行well-known-symbols相关开发",
        children: "使用JSVM-API接口进行Well-known symbols相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API中Well-known symbols相关接口可以通过不同API直接获取对应的11个Well-known symbols。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JSVM-API中，Well-known symbols相关接口能够给用户提供快速获取对应的11个Well-known symbols的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetSymbolToStringTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等价于JS中的Symbol.toStringTag。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetSymbolToPrimitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等价于JS中的Symbol.toPrimitive。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetSymbolSplit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等价于JS中的Symbol.split。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetSymbolSearch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等价于JS中的Symbol.search。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetSymbolReplace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等价于JS中的Symbol.replace。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetSymbolMatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等价于JS中的Symbol.match。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetSymbolIsConcatSpreadable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等价于JS中的Symbol.isConcatSpreadable。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetSymbolHasInstance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等价于JS中的Symbol.hasInstance。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetSymbolUnscopables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等价于JS中的Symbol.unscopables。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetSymbolAsyncIterator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等价于JS中的Symbol.asyncIterator。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetSymbolIterator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "等价于JS中的Symbol.iterator。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "中的JSVM-API接口开发流程，本文仅展示接口对应的C++代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用接口获取well-known-symbols以oh_jsvm_getsymboltostringtag为例",
      children: "使用接口获取Well-known symbols（以OH_JSVM_GetSymbolToStringTag为例）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <string>\n\nstatic JSVM_Value WellKnownSymbols(JSVM_Env env, JSVM_CallbackInfo info) {\n    JSVM_VM vm;\n    OH_JSVM_GetVM(env, &vm);\n\n    JSVM_HandleScope handleScope;\n    OH_JSVM_OpenHandleScope(env, &handleScope);\n    std::string src = R\"JS(Symbol.toStringTag)JS\";\n    JSVM_Value jsSrc;\n    JSVM_Script script;\n    JSVM_Value result1;\n\n    OH_JSVM_CreateStringUtf8(env, src.c_str(), JSVM_AUTO_LENGTH, &jsSrc);\n    OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script);\n    OH_JSVM_RunScript(env, script, &result1);\n    JSVM_Value result2;\n    OH_JSVM_GetSymbolToStringTag(env, &result2);\n    bool is_equals = false;\n    OH_JSVM_StrictEquals(env, result1, result2, &is_equals);\n    OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_GetSymbolToStringTag result is correct : %{public}d\\n\", is_equals);\n    OH_JSVM_CloseHandleScope(env, handleScope);\n\n    return nullptr;\n}\n\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = WellKnownSymbols},\n};\n\nstatic JSVM_CallbackStruct *method = param;\n\n// wellKnownSymbols方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"wellKnownSymbols\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试JS\nconst char *srcCallNative = R\"JS(wellKnownSymbols();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_GetSymbolToStringTag result is correct : 1\n"
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