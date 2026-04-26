"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["266082"], {
908919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_scenarios_use_jsvm_about_trace_use_jsvm_about_trace_md_3e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-scenarios-use-jsvm-about-trace-use-jsvm-about-trace-md-3e2.json
var site_docs_coding_jsvm_jsvm_scenarios_use_jsvm_about_trace_use_jsvm_about_trace_md_3e2_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-scenarios/use-jsvm-about-trace/use-jsvm-about-trace","title":"使用JSVM-API接口进行Trace相关开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-scenarios/use-jsvm-about-trace/use-jsvm-about-trace.md","sourceDirName":"coding/jsvm/jsvm-scenarios/use-jsvm-about-trace","slug":"/coding/jsvm/jsvm-scenarios/use-jsvm-about-trace/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/use-jsvm-about-trace/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用JSVM-API接口进行Trace相关开发","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-trace","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"JSVM-API调试&定位","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-debugger-cpuprofiler-heapsnapshot/"},"next":{"title":"JSVM-API 申请JIT权限指导","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-apply-jit-profile/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-scenarios/use-jsvm-about-trace/use-jsvm-about-trace.md


const frontMatter = {
	title: '使用JSVM-API接口进行Trace相关开发',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-trace',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行Trace相关开发';

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
  "value": "使用Trace接口进行数据采集",
  "id": "使用trace接口进行数据采集",
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
        id: "使用jsvm-api接口进行trace相关开发",
        children: "使用JSVM-API接口进行Trace相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API中trace相关接口用于在运行时采集并输出各种类型运行时信息。该能力可用于在JSVM模块中定位问题与性能分析。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API中的Trace相关接口能够通过指定一系列分类，采集这些分类所属的JSVM内部事件信息，并以JSON格式通过用户指定的回调函数输出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JSVM-API中，通过支持Trace相关能力，JSVM模块能够更紧密地与JavaScript环境集成，提高复杂问题定位和性能分析能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_TraceStart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以指定事件类型与事件数量限制，开始采集运行时信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_TraceStop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止采集信息，并以JSON格式在用户指定的回调函数中进行输出。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSVM-API接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "，本文仅对接口对应C++相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用trace接口进行数据采集",
      children: "使用Trace接口进行数据采集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <vector>\n#include <string>\n\nbool OutputStream(const char *data, int size, void *streamData) {\n    std::string value(data, size);\n    *(std::string *)streamData = std::string(data, size);\n    return true;\n}\n\n// OH_JSVM_TraceStart/OH_JSVM_TraceStop样例方法\nstatic JSVM_Value Trace(JSVM_Env env, JSVM_CallbackInfo info) {\n    // start trace with categories\n    std::vector<JSVM_TraceCategory> categories = {JSVM_TRACE_VM};\n    JSVM_CALL(OH_JSVM_TraceStart(categories.size(), categories.data(), \"trace test\", 0));\n\n    // run and trace\n    JSVM_Script script;\n    JSVM_Value jsSrc;\n    JSVM_Value result;\n    const char* trace_js = R\"JS(\n      function map(x, y) {\n        return {\"a\": x, \"b\": y};\n      }\n      for (var i = 0; i < 80000; ++i) {\n        var x = map(i, i);\n      }\n    )JS\";\n    JSVM_CALL(OH_JSVM_CreateStringUtf8(env, trace_js, JSVM_AUTO_LENGTH, &jsSrc));\n    JSVM_CALL(OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script));\n    JSVM_CALL(OH_JSVM_RunScript(env, script, &result));\n    \n    // stop trace and write file\n    std::string data;\n    JSVM_CALL(OH_JSVM_TraceStop(OutputStream, (void *)&data));\n\n    OH_LOG_INFO(LOG_APP, \"JSVM Trace success:%{public}s\", data.c_str());\n    return nullptr;\n}\n// Trace注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = Trace},\n};\nstatic JSVM_CallbackStruct *method = param;\n// Trace方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"trace\", nullptr, method, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(trace())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM Trace success:{\"trace test\":[{\"pid\":54485,\"tid\":54485,\"ts\":341364468711,\"tts\":139452,\"ph\":\"B\",\"cat\":\"devtools.timeline,v8\",\"name\":\"MinorGC\",\"dur\":0,\"tdur\":0,\"args\":{\"usedHeapSizeBefore\":1592824,\"type\":\"allocation failure\"}},{\"pid\":54485,\"tid\":54485,\"ts\":341364468727,\"tts\":139463,\"ph\":\"X\",\"cat\":\"v8\",\"name\":\"V8.GCScavenger\",\"dur\":203,\"tdur\":203,\"args\":{}},{\"pid\":54485,\"tid\":54485,\"ts\":341364468949,\"tts\":139684,\"ph\":\"E\",\"cat\":\"devtools.timeline,v8\",\"name\":\"MinorGC\",\"dur\":0,\"tdur\":0,\"args\":{\"usedHeapSizeAfter\":173472}},{\"pid\":54485,\"tid\":54485,\"ts\":341364471055,\"tts\":141792,\"ph\":\"B\",\"cat\":\"devtools.timeline,v8\",\"name\":\"MinorGC\",\"dur\":0,\"tdur\":0,\"args\":{\"usedHeapSizeBefore\":1208672,\"type\":\"allocation failure\"}},{\"pid\":54485,\"tid\":54485,\"ts\":341364471060,\"tts\":141796,\"ph\":\"X\",\"cat\":\"v8\",\"name\":\"V8.GCScavenger\",\"dur\":110,\"tdur\":110,\"args\":{}},{\"pid\":54485,\"tid\":54485,\"ts\":341364471182,\"tts\":141918,\"ph\":\"E\",\"cat\":\"devtools.timeline,v8\",\"name\":\"MinorGC\",\"dur\":0,\"tdur\":0,\"args\":{\"usedHeapSizeAfter\":173472}},{\"pid\":54485,\"tid\":54485,\"ts\":341364472901,\"tts\":143638,\"ph\":\"B\",\"cat\":\"devtools.timeline,v8\",\"name\":\"MinorGC\",\"dur\":0,\"tdur\":0,\"args\":{\"usedHeapSizeBefore\":1221944,\"type\":\"allocation failure\"}},{\"pid\":54485,\"tid\":54485,\"ts\":341364472905,\"tts\":143641,\"ph\":\"X\",\"cat\":\"v8\",\"name\":\"V8.GCScavenger\",\"dur\":26,\"tdur\":26,\"args\":{}},{\"pid\":54485,\"tid\":54485,\"ts\":341364472940,\"tts\":143675,\"ph\":\"E\",\"cat\":\"devtools.timeline,v8\",\"name\":\"MinorGC\",\"dur\":0,\"tdur\":0,\"args\":{\"usedHeapSizeAfter\":173472}},{\"pid\":54485,\"tid\":54485,\"ts\":341364474583,\"tts\":145319,\"ph\":\"B\",\"cat\":\"devtools.timeline,v8\",\"name\":\"MinorGC\",\"dur\":0,\"tdur\":0,\"args\":{\"usedHeapSizeBefore\":1221944,\"type\":\"allocation failure\"}},{\"pid\":54485,\"tid\":54485,\"ts\":341364474585,\"tts\":145321,\"ph\":\"X\",\"cat\":\"v8\",\"name\":\"V8.GCScavenger\",\"dur\":17,\"tdur\":16,\"args\":{}},{\"pid\":54485,\"tid\":54485,\"ts\":341364474608,\"tts\":145343,\"ph\":\"E\",\"cat\":\"devtools.timeline,v8\",\"name\":\"MinorGC\",\"dur\":0,\"tdur\":0,\"args\":{\"usedHeapSizeAfter\":173472}}]}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注：用户运行demo输出的结果不一定与给出参考结果相等，id的分配方式和用户环境相关"
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