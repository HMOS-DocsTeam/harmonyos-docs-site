"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["942976"], {
924159(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_about_strong_reference_use_napi_about_strong_reference_md_2d6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-scenarios-use-napi-about-strong-reference-use-napi-about-strong-reference-md-2d6.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_scenarios_use_napi_about_strong_reference_use_napi_about_strong_reference_md_2d6_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-strong-reference/use-napi-about-strong-reference","title":"使用扩展的Node-API接口创建对ArkTS对象的强引用","description":"HarmonyOS提供的API优化了强引用的创建效率，保留了Node-API的强引用特性，相较于napi\\\\ref，napi\\\\strong\\\\_ref具有更快的创建效率。","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-strong-reference/use-napi-about-strong-reference.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-strong-reference","slug":"/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-strong-reference/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-strong-reference/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"使用扩展的Node-API接口创建对ArkTS对象的强引用","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-strong-reference","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用扩展的Node-API接口在当前线程中创建、切换和销毁上下文环境","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-context/"},"next":{"title":"使用扩展的Node-API接口创建和销毁临界区作用域及访问字符串内容","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-critical/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-about-strong-reference/use-napi-about-strong-reference.md


const frontMatter = {
	title: '使用扩展的Node-API接口创建对ArkTS对象的强引用',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-strong-reference',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用扩展的Node-API接口创建对ArkTS对象的强引用';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "强引用对象关联接口",
  "id": "强引用对象关联接口",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "使用扩展的node-api接口创建对arkts对象的强引用",
        children: "使用扩展的Node-API接口创建对ArkTS对象的强引用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS提供的API优化了强引用的创建效率，保留了Node-API的强引用特性，相较于napi_ref，napi_strong_ref具有更快的创建效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过napi_create_strong_reference接口创建指向ArkTS对象的强引用，并通过napi_get_strong_reference_value获取引用的ArkTS对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "强引用对象关联接口",
      children: "强引用对象关联接口"
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
            children: "napi_create_strong_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指向ArkTS对象的强引用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_strong_reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除强引用"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_strong_reference_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据强引用对象获取其关联的ArkTS对象值"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块注册"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// napi_init.cpp\n#include \"napi/native_api.h\"\n#include <vector>\n\n// napi_strong_ref 不支持跨线程使用。示例为单线程场景。请勿在业务代码中使用此方式声明。\nstatic napi_strong_ref g_strongRef {};\nstatic napi_value NAPI_Global_saveOrReplaceObject(napi_env env, napi_callback_info info)\n{\n   napi_value args[1]{};\n   size_t argc = 1;\n   napi_get_cb_info(env, info, &argc, args, /* thisVar */ nullptr, /* data */ nullptr);\n   if (argc < 1) {\n      return nullptr;\n   }\n\n   if (g_strongRef != nullptr) {\n      napi_delete_strong_reference(env, g_strongRef);\n      g_strongRef = nullptr;\n   }\n   napi_create_strong_reference(env, args[0], &g_strongRef);\n   return nullptr;\n}\n\nstatic napi_value NAPI_Global_releaseObject(napi_env env, [[maybe_unused]] napi_callback_info info)\n{\n   if (g_strongRef != nullptr) {\n      napi_delete_strong_reference(env, g_strongRef);\n      g_strongRef = nullptr;\n   }\n   return nullptr;\n}\n\nstatic napi_value NAPI_Global_queryObject(napi_env env, [[maybe_unused]] napi_callback_info info)\n{\n   napi_value result {};\n   napi_get_strong_reference_value(env, g_strongRef, &result);\n   return result;\n}\n\n// 模块注册\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n   std::vector<napi_property_descriptor> desc{\n      {\"saveOrReplaceObject\", nullptr, NAPI_Global_saveOrReplaceObject, nullptr, nullptr, nullptr, napi_default, nullptr},\n      {\"releaseObject\", nullptr, NAPI_Global_releaseObject, nullptr, nullptr, nullptr, napi_default, nullptr},\n      {\"queryObject\", nullptr, NAPI_Global_queryObject, nullptr, nullptr, nullptr, napi_default, nullptr},\n   };\n   napi_define_properties(env, exports, desc.size(), desc.data());\n   return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n   .nm_version = 1,\n   .nm_flags = 0,\n   .nm_filename = nullptr,\n   .nm_register_func = Init,\n   .nm_modname = \"entry\",\n   .nm_priv = ((void *)0),\n   .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n   napi_module_register(&demoModule);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口声明"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.d.ts\nexport const saveOrReplaceObject: <T>(val: T) => void;\nexport const queryObject: <T>() => T;\nexport const releaseObject: () => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS代码示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// index.ets\nimport testNapi from \"libentry.so\"\n\nconst makeTest = <T>(val: T) => {\n   testNapi.saveOrReplaceObject(val);\n   const result = testNapi.queryObject<T>();\n   testNapi.releaseObject();\n   if (val !== result) {\n      throw new Error(\"result not equals to input\");\n   }\n}\n\n// 预期以下调用无异常\nmakeTest(0);\nmakeTest(\"0\");\nmakeTest(true);\nmakeTest(BigInt(\"0\"));\nmakeTest([]);\nmakeTest(new Object());\nmakeTest(undefined);\nmakeTest(null);\n"
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