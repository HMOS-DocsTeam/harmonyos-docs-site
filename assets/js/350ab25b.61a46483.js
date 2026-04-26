"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["798584"], {
772899(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_performance_analysis_kit_hitracemeter_hitracemeter_intro_hitracemeter_intro_md_350_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-performance-analysis-kit-hitracemeter-hitracemeter-intro-hitracemeter-intro-md-350.json
var site_docs_system_debug_optimize_performance_analysis_kit_hitracemeter_hitracemeter_intro_hitracemeter_intro_md_350_namespaceObject = JSON.parse('{"id":"system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-intro/hitracemeter-intro","title":"HiTraceMeter介绍","description":"本文介绍HiTraceMeter接口的使用方法。开发者可以在代码中调用HiTraceMeter接口进行trace打点，然后可使用hitrace命令行工具或者hidebug提供的trace采集接口，获取程序运行时产生的打点信息，了解程序运行的进程、线程、时间戳、CPU等信息，以帮助开发者进行问题分析和性能调优。","source":"@site/docs/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-intro/hitracemeter-intro.md","sourceDirName":"system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-intro","slug":"/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-intro/","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"HiTraceMeter介绍","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracemeter-intro","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用FaultLogExtensionAbility订阅事件","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hiappevent/fault-log-extension-app-events-arkts/"},"next":{"title":"使用HiTraceMeter跟踪性能（ArkTS）","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-intro/hitracemeter-intro.md


const frontMatter = {
	title: 'HiTraceMeter介绍',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hitracemeter-intro',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'HiTraceMeter介绍';

const assets = {

};



const toc = [{
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hitracemeter介绍",
        children: "HiTraceMeter介绍"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文介绍HiTraceMeter接口的使用方法。开发者可以在代码中调用HiTraceMeter接口进行trace打点，然后可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hitrace",
        children: "hitrace"
      }), "命令行工具或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines#%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8trace%E8%AE%B0%E5%BD%95%E4%BF%A1%E6%81%AF",
        children: "hidebug"
      }), "提供的trace采集接口，获取程序运行时产生的打点信息，了解程序运行的进程、线程、时间戳、CPU等信息，以帮助开发者进行问题分析和性能调优。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HiTraceMeter提供ArkTS和C/C++两种接口，按需选择。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-arkts",
          children: "使用HiTraceMeter跟踪性能（ArkTS）"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-ndk",
          children: "使用HiTraceMeter跟踪性能（C/C++）"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内核设置了一个缓冲区用于记录设备运行时产生的打点记录，并在sysfs中提供了trace_marker和trace节点："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "trace_marker节点为只写节点，程序将打点信息写入到trace_marker节点后，打点信息会被存储到内核的缓冲区。HiTraceMeter提供的接口封装了写操作，应用可以调用这些接口将打点数据写入内核节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "trace节点为只读节点，可从中读取系统当前缓冲区内的所有记录。hitrace命令行工具封装了对该节点的读取操作，开发者可使用命令将采集的打点信息显示在命令行或保存到设备文件中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用HiTraceMeter接口生成的打点信息格式可查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-view#%E7%94%A8%E6%88%B7%E6%80%81trace%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E",
        children: "用户态trace格式说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HiTraceMeter Tag"
        })
      }), "：跟踪数据使用类别，每个软件子系统对应一个tag。可以在hdc命令行中用“hitrace -l”命令查看所有的tag名及其简介。使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hitrace",
        children: "hitrace"
      }), "命令行工具采集跟踪数据时，需要指定tag，采集结果仅包含指定tag类别的跟踪数据。应用中调用HiTraceMeter打点使用的tag是app。"]
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