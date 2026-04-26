"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["884711"], {
263324(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_debug_optimize_ui_stability_arkts_stability_guide_arkts_stability_guide_md_ef3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-debug-optimize-ui-stability-arkts-stability-guide-arkts-stability-guide-md-ef3.json
var site_docs_arkui_ui_debug_optimize_ui_stability_arkts_stability_guide_arkts_stability_guide_md_ef3_namespaceObject = JSON.parse('{"id":"arkui/ui-debug-optimize/ui-stability/arkts-stability-guide/arkts-stability-guide","title":"UI稳定性故障分析概述","description":"本文档将简单介绍稳定性故障的概念与分类，并提供各类稳定性问题的参考帮助，用于指导应用开发者充分利用系统提供的调试能力和工具定位各类稳定性问题。","source":"@site/docs/arkui/ui-debug-optimize/ui-stability/arkts-stability-guide/arkts-stability-guide.md","sourceDirName":"arkui/ui-debug-optimize/ui-stability/arkts-stability-guide","slug":"/arkui/ui-debug-optimize/ui-stability/arkts-stability-guide/","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-stability/arkts-stability-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"UI稳定性故障分析概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-stability-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用WebGL绘制图形","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-webgl/webgl-2d-guidelines/"},"next":{"title":"UI相关应用崩溃常见问题","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-stability/arkts-stability-crash-issues/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-debug-optimize/ui-stability/arkts-stability-guide/arkts-stability-guide.md


const frontMatter = {
	title: 'UI稳定性故障分析概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-stability-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'UI稳定性故障分析概述';

const assets = {

};



const toc = [{
  "value": "应用崩溃",
  "id": "应用崩溃",
  "level": 2
}, {
  "value": "jscrash",
  "id": "jscrash",
  "level": 3
}, {
  "value": "cppcrash",
  "id": "cppcrash",
  "level": 3
}, {
  "value": "应用无响应",
  "id": "应用无响应",
  "level": 2
}, {
  "value": "应用资源泄漏",
  "id": "应用资源泄漏",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ui稳定性故障分析概述",
        children: "UI稳定性故障分析概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档将简单介绍稳定性故障的概念与分类，并提供各类稳定性问题的参考帮助，用于指导应用开发者充分利用系统提供的调试能力和工具定位各类稳定性问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用稳定性问题主要包括应用崩溃、应用无响应、应用资源泄漏等问题。性能问题不属于稳定性范畴，要了解性能相关内容可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-debug-optimize/ui-performance-overview",
        children: "UI性能优化概览"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用崩溃",
      children: "应用崩溃"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用崩溃有时也被称为应用闪退，指应用在运行过程中意外终止。应用异常退出的主要原因可以归纳为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "遇到未处理的JS异常，如TypeError、ReferenceError等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "遇到未处理的native异常，如SIGSEGV、SIGABRT等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "遇到系统资源限制被系统终止，如内存不足、文件句柄不足、线程句柄不足等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用UI无响应被系统终止。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档中提及的应用崩溃问题，默认指的是前两类，分别称为jscrash问题和cppcrash问题。而其他类型的崩溃问题，则分别称为应用资源泄漏问题和应用无响应问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jscrash",
      children: "jscrash"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["发生jscrash问题后，系统的FaultLogger模块会收集问题有关的各种故障信息，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines#%E6%97%A5%E5%BF%97%E8%8E%B7%E5%8F%96",
        children: "日志获取"
      }), "了解如何获取日志。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是一些关于jscrash问题的参考帮助："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines",
          children: "JS Crash（进程崩溃）检测"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cppcrash",
      children: "cppcrash"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["发生cppcrash问题后，系统的FaultLogger模块会收集问题有关的各种故障信息，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines#%E6%97%A5%E5%BF%97%E8%8E%B7%E5%8F%96",
        children: "日志获取"
      }), "了解如何获取日志。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是一些关于cppcrash问题的参考帮助："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines",
          children: "Cpp Crash（进程崩溃）检测"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/address-sanitizer-guidelines",
          children: "AddrSanitizer（地址越界）检测"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用无响应",
      children: "应用无响应"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用无响应问题也被称为AppFreeze问题，以下是一些关于AppFreeze问题的参考帮助："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/appfreeze-guidelines",
          children: "AppFreeze（应用冻屏）检测"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/fault-analysis/apptask-timeout-guidelines",
          children: "任务超时检测"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用资源泄漏",
      children: "应用资源泄漏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是一些关于应用资源泄漏问题的参考帮助："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events",
          children: "资源泄漏事件介绍"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-arkts",
          children: "订阅资源泄漏事件（ArkTS）"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events-ndk",
          children: "订阅资源泄漏事件（C/C++）"
        })
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