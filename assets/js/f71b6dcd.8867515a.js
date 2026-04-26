"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["68589"], {
172901(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_fast_kit_guide_fast_introduction_fast_introduction_md_f71_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-fast-kit-guide-fast-introduction-fast-introduction-md-f71.json
var site_docs_system_basicfun_fast_kit_guide_fast_introduction_fast_introduction_md_f71_namespaceObject = JSON.parse('{"id":"system-basicfun/fast-kit-guide/fast-introduction/fast-introduction","title":"FAST Kit简介","description":"FAST Kit（算法加速服务）以理论计算机为基础、面向开发者提供算法加速能力。当前开放线段表与矩形划分求解器接口，支撑应用的开发体验和用户体验提升。","source":"@site/docs/system-basicfun/fast-kit-guide/fast-introduction/fast-introduction.md","sourceDirName":"system-basicfun/fast-kit-guide/fast-introduction","slug":"/system-basicfun/fast-kit-guide/fast-introduction/","permalink":"/harmonyos-docs-site/system-basicfun/fast-kit-guide/fast-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"FAST Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fast-introduction","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用接入快捷栏","permalink":"/harmonyos-docs-site/system-basicfun/status-bar-extension-kit-guide/desktop-quickbar-extension-guide/"},"next":{"title":"使用SegmentMap查询维护区间信息","permalink":"/harmonyos-docs-site/system-basicfun/fast-kit-guide/fast-segment-map/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/fast-kit-guide/fast-introduction/fast-introduction.md


const frontMatter = {
	title: 'FAST Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fast-introduction',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'FAST Kit简介';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的国家和地区",
  "id": "支持的国家和地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
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
        id: "fast-kit简介",
        children: "FAST Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FAST Kit（算法加速服务）以理论计算机为基础、面向开发者提供算法加速能力。当前开放线段表与矩形划分求解器接口，支撑应用的开发体验和用户体验提升。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前FAST Kit包括以下两个功能域："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["高阶数据结构（Advanced Data Structure）加速功能域旨在融合理论计算机科学中具有理论保证的高级数据结构与现代硬件特性，当前提供", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-basicfun/fast-kit-guide/fast-segment-map",
          children: "线段表数据结构"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["规划求解（Solver）加速功能域旨在将理论计算机科学与运筹学中的优化求解能力运用到鸿蒙生态中的各类场景，当前提供", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-basicfun/fast-kit-guide/fast-rect-partition",
          children: "矩形划分求解器"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FAST Kit基于理论计算机科学，通过理论算法优化，为应用的性能、负载与功耗优化提供算法加速能力支持，当前Kit提供“高阶数据结构-线段表”与“规划求解-矩形划分求解器”，具体如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "线段表：是一种用于高效处理区间段信息的数据结构，支持数据序列区间段的快速更新和快速查询。以下是一些典型使用场景："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "数据可视化：股票K线图中快速响应用户对于标记特定价格或时间区间的请求；甘特图/时间轴渲染中高效渲染大量任务的时间区间等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "资源监控与日志分析：在APP性能监控中记录卡顿或异常发生的时间区间，聚合分析高频问题时段；统计用户在特定页面停留的连续时间区间、分析行为模式等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "游戏开发：管理游戏中多个持续生效的技能或状态，检查是否重叠或冲突；将物体在轴上的投影作为区间，快速筛选可能碰撞的对象等。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "矩形划分求解器：用于解决矩形划分问题，其接收若干个彼此不相交的矩形作为输入，计算出覆盖相同区域的矩形划分方案，并使输出的矩形数量尽可能少。以下是一些典型使用场景："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "UI渲染与布局优化：多个相邻UI控件背景合并为更少的绘制区域，减少GPU绘制调用；合并虚拟列表中相邻项的渲染区域，减少DOM元素或View数量等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "游戏开发：合并相邻的地形或可通行区域，优化碰撞检测；合并相邻的光照影响区域，简化光照计算等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "文档与表格处理：表格应用中，自动合并相邻的相同格式单元格；用户选择的多个文本标注区域自动合并为连续区域等。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不透明配置（Opaque Configuration）：一种ABI稳定的配置抽象机制，库以不完整类型（Incomplete Type）前向声明配置对象，外部代码仅通过指向该对象的指针句柄进行传递与操作，而对象的大小、字段布局及解释规则完全由库内部定义，从而将实现细节与调用者彻底隔离，并保证后续版本可在不破坏二进制兼容性的前提下任意变更存储格式与语义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家和地区",
      children: "支持的国家和地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Phone、Tablet、PC/2in1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["模拟器与真机存在通用差异，详情请参见“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
        children: "模拟器与真机的差异"
      }), "”。"]
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