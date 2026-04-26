"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["121119"], {
95270(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_performance_use_jsvm_about_v_8_trace_use_jsvm_about_v_8_trace_md_42d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-performance-use-jsvm-about-v-8-trace-use-jsvm-about-v-8-trace-md-42d.json
var site_docs_coding_jsvm_jsvm_performance_use_jsvm_about_v_8_trace_use_jsvm_about_v_8_trace_md_42d_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-performance/use-jsvm-about-v8-trace/use-jsvm-about-v8-trace","title":"使用HiSmartPerf采集jsvm trace","description":"简介","source":"@site/docs/coding/jsvm/jsvm-performance/use-jsvm-about-v8-trace/use-jsvm-about-v8-trace.md","sourceDirName":"coding/jsvm/jsvm-performance/use-jsvm-about-v8-trace","slug":"/coding/jsvm/jsvm-performance/use-jsvm-about-v8-trace/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-performance/use-jsvm-about-v8-trace/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用HiSmartPerf采集jsvm trace","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-v8-trace","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"JSVM通用调优实践","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-usage-examples/jsvm-optimizations/"},"next":{"title":"Longque-JS-API使用指导","permalink":"/harmonyos-docs-site/coding/longque/use-longque-js-api/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-performance/use-jsvm-about-v8-trace/use-jsvm-about-v8-trace.md


const frontMatter = {
	title: '使用HiSmartPerf采集jsvm trace',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-v8-trace',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用HiSmartPerf采集jsvm trace';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "使用方法",
  "id": "使用方法",
  "level": 2
}, {
  "value": "默认状态",
  "id": "默认状态",
  "level": 3
}, {
  "value": "采集jsvm trace",
  "id": "采集jsvm-trace",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用hismartperf采集jsvm-trace",
        children: "使用HiSmartPerf采集jsvm trace"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "jsvm的trace是jsvm引擎提供的一种用于分析和调试JavaScript代码执行过程的工具。它可以记录并输出关于代码执行的详细信息，包括函数调用、执行时间、内存使用情况等，帮助开发者了解代码的性能、诊断潜在问题，进行优化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiSmartPerf目前已经对接了jsvm的compile、runtime、builtin、JS_Execution类别的trace点，可以在HiSmartPerf中直接看到这些类别event的相关信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用方法",
      children: "使用方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "默认状态",
      children: "默认状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "jsvm是否采集trace由运行时开关“web.debug.rcs”控制，默认状态下该开关为关闭状态。启动web场景，在hilog中可以观察到有“RCS is off”日志打印输出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "采集jsvm-trace",
      children: "采集jsvm trace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "要采集jsvm的trace，需要在启动web场景前，打开“web.debug.rcs”开关。在启动web场景前，执行以下命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell setenforce 0\nhdc shell param set web.debug.rcs true\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动web场景，可以看到hilog中有“RCS is on”的日志打印输出"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用hitrace工具抓取对应场景的trace，hitrace使用方法可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/hitrace",
            children: "hitrace"
          }), "使用指导文档。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用HiSmartPerf工具解析抓取到的trace，可以看到有“RCS_”前缀的trace点，即为jsvm对接到HiSmartPerf中的trace点。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "要查看compile、runtime、builtin、JS_Execution不同类别的trace数据，可使用以下关键字进行过滤："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "compile：RCS_v8.compile"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "runtime：RCS_V8.Runtime"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "builtin：RCS_v8.runtime_V8.Builtin"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "JS_Execution：RCS_JS_Execution"
          }), "\n"]
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