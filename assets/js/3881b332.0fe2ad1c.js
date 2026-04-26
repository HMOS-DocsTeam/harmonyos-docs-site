"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["162358"], {
471685(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_debug_optimize_ui_performance_overview_ui_performance_overview_md_388_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-debug-optimize-ui-performance-overview-ui-performance-overview-md-388.json
var site_docs_arkui_ui_debug_optimize_ui_performance_overview_ui_performance_overview_md_388_namespaceObject = JSON.parse('{"id":"arkui/ui-debug-optimize/ui-performance-overview/ui-performance-overview","title":"UI高性能开发","description":"优化应用的性能对于提升用户体验至关重要。当发现性能问题后，一般可按照以下步骤进行分析：","source":"@site/docs/arkui/ui-debug-optimize/ui-performance-overview/ui-performance-overview.md","sourceDirName":"arkui/ui-debug-optimize/ui-performance-overview","slug":"/arkui/ui-debug-optimize/ui-performance-overview/","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-performance-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"UI高性能开发","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-performance-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UI调优","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-inspector-profiler/"},"next":{"title":"自定义节点常见问题","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/arkts-user-defined-node-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-debug-optimize/ui-performance-overview/ui-performance-overview.md


const frontMatter = {
	title: 'UI高性能开发',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-performance-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'UI高性能开发';

const assets = {

};



const toc = [{
  "value": "UI性能优化的核心思路",
  "id": "ui性能优化的核心思路",
  "level": 2
}, {
  "value": "工具驱动优化",
  "id": "工具驱动优化",
  "level": 3
}, {
  "value": "惰性加载优先",
  "id": "惰性加载优先",
  "level": 3
}, {
  "value": "布局计算简化",
  "id": "布局计算简化",
  "level": 3
}, {
  "value": "更新代替重建",
  "id": "更新代替重建",
  "level": 3
}, {
  "value": "状态精确控制",
  "id": "状态精确控制",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ui高性能开发",
        children: "UI高性能开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化应用的性能对于提升用户体验至关重要。当发现性能问题后，一般可按照以下步骤进行分析："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "复现问题：根据用户的反馈复现性能问题是分析的第一步，开发者可通过回访用户或在应用中增加自己的性能监测埋点来获得性能问题的发生场景和复现步骤。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "利用工具找到性能瓶颈点：问题复现后可使用DevEco Studio中提供的CPU Profiler工具获取问题发生过程中的Trace，可以方便的找到Trace中的耗时点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "确定解决方案：找到耗时点后可以根据Trace中的ArkTS CallStack信息或Review流程相关业务代码来找到瓶颈点相关的实现，根据下面的核心优化思路对问题代码进行优化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "验证解决效果：优化代码修改后，应重新复现问题场景体验效果，并使用CPU Profiler工具抓取Trace，确认修改符合预期，问题解决。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ui性能优化的核心思路",
      children: "UI性能优化的核心思路"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "工具驱动优化",
      children: "工具驱动优化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "性能优化的过程中使用数据而非直觉指导优化方向是提升优化效率的关键。当前DevEco Studio中提供了两个性能分析工具，可以进行UI的性能分析，帮助我们高效的进行性能问题定位："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CPU Profiler：用于在运行过程中抓取trace和调用栈对耗时点进行分析，使用方法可以参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-optimization-overview",
            children: "CPU Profiler的使用指导"
          }), "分析的思路可以参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-optimization-overview#section085643405116",
            children: "常用Trace的含义"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ArkUI Inspector：用于可视化的展示UI组件树，分析UI的布局层次和参数，使用方法可以参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-debug-app/ide-arkui-inspector",
            children: "ArkUI Inspector使用说明"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在分析性能问题的过程中，应当先通过CPU Profiler工具发现实际的性能瓶颈点，再针对性的进行优化。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "惰性加载优先",
      children: "惰性加载优先"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["推迟非可视区域的资源消耗可有效的加快应用启动和页面的切换速度。ArkUI提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "组件，便于应用实现数据的懒加载。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "布局计算简化",
      children: "布局计算简化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用开发中的UI布局是用户与应用程序交互的关键部分。不合理的布局越多，视图的创建、布局、渲染等流程所需的时间就越长。因此，减少嵌套层次或者使用高性能布局节点，可以减少丢帧卡顿。可以参考这些", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-component-nesting-optimization",
        children: "布局技巧"
      }), "来优化布局性能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "更新代替重建",
      children: "更新代替重建"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于会反复使用的组件，可将其缓存起来，用更新代替重建来提升性能。例如，在滚动容器的滑动过程中，一边的组件划出可视范围被释放，另一边的组件划入可视范围需要创建，反复的释放和创建相同的ListItem显然是冗余的。针对这一需要对特定组件进行缓存、复用的场景，ArkUI提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
        children: "组件复用能力"
      }), "，可以对自定义组件进行标记，在被标记的自定义组件释放时将其放入缓存池，在下次需要创建时从缓存池中拿出，用刷新代替创建。使用场景可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-component-reuse",
        children: "组件复用的基本原理和使用技巧"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "状态精确控制",
      children: "状态精确控制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview",
        children: "状态管理"
      }), "是ArkUI声明式的核心机制，它负责将数据与UI联系起来，在UI刷新的过程中会反复执行状态管理的相关逻辑，创建过多的状态变量会影响性能。开发者在使用的过程中应注意", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-faq",
        children: "状态管理常见问题"
      }), "。"]
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