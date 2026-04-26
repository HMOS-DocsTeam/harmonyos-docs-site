"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["977536"], {
120896(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_insight_description_ide_insight_description_md_ef4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-insight-description-ide-insight-description-md-ef4.json
var site_docs_ide_insight_description_ide_insight_description_md_ef4_namespaceObject = JSON.parse('{"id":"ide-insight-description/ide-insight-description","title":"性能调优工具简介","description":"应用或元服务运行期间可能出现响应速度慢、动画播放不流畅、列表拖动卡顿、应用崩溃或耗电量过高、发烫、交互延迟等现象，这些现象表明应用或元服务可能存在性能问题。造成性能问题的原因可能是业务逻辑、应用代码对系统API的误用、对ArkTS对象的不合理持有导致内存泄漏等，引起对系统资源不合理使用，包括对CPU、内存、网络、文件、GPU以及其他外设器件的冗余占用，进而引发性能问题。","source":"@site/docs/ide-insight-description/ide-insight-description.md","sourceDirName":"ide-insight-description","slug":"/ide-insight-description/","permalink":"/harmonyos-docs-site/ide-insight-description/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"性能调优工具简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-description","kit":"devtools/profiler","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"签名工具错误码","permalink":"/harmonyos-docs-site/ide-hvigor-faq/ide-hvigor-errorcode/hapsigntool-errorcode/"},"next":{"title":"界面布局","permalink":"/harmonyos-docs-site/ide-profiler/ide-profiler-layout/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-insight-description/ide-insight-description.md


const frontMatter = {
	title: '性能调优工具简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-description',
	kit: 'devtools/profiler',
	last_updated: '2026-04-24'
};
const contentTitle = '性能调优工具简介';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "性能调优工具简介",
        children: "性能调优工具简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用或元服务运行期间可能出现响应速度慢、动画播放不流畅、列表拖动卡顿、应用崩溃或耗电量过高、发烫、交互延迟等现象，这些现象表明应用或元服务可能存在性能问题。造成性能问题的原因可能是业务逻辑、应用代码对系统API的误用、对ArkTS对象的不合理持有导致内存泄漏等，引起对系统资源不合理使用，包括对CPU、内存、网络、文件、GPU以及其他外设器件的冗余占用，进而引发性能问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常，进行性能优化主要围绕关键点“降负载”来入手，这包括："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1）永久降负载。即将原本不合理的冗余处理进行彻底清理；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2）临时降负载。即避免在关键时间段内扎堆产生负载。可以考虑采用懒加载等延迟处理机制，错峰运行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在遇到这些问题时，首先需要对应用的运行情况以及设备的资源消耗进行监测，以初步确定可能存在的性能问题以及问题出现的位置，进而有针对性的降低负载。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["****", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-check/ide-code-linter",
        children: "CodeLinter"
      }), "****提供静态代码扫描能力，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-performance",
        children: "规则"
      }), "检查代码是否存在性能问题，帮助开发者分析和修改性能问题。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["****", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-app-test/ide-app-analyzer",
        children: "AppAnalyzer"
      }), "****提供性能根因诊断能力，通过智能收集trace日志、代码调用栈、故障事件等关键数据，提取关键特征，直接追溯性能问题根源并提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-zhenlv#section16554191716487",
        children: "页面滑动"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-click-to-complete-delay-analysis#section5352205892313",
        children: "页面转场"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-application-cold-start-optimization#section860412154015",
        children: "冷启动"
      }), "场景性能问题优化建议，开发者只需简单操作，就能迅速定位到问题根因，提升定位效率。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["****", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler",
        children: "DevEco Profiler"
      }), "****提供实时监控（Realtime Monitor）能力，提供全方位的设备资源监测，覆盖系统事件、异常报告、CPU占用、内存占用、实时帧率、GPU使用率、能耗以及网络流量消耗等多个维度的数据，自顶向下逐层展开分析，并可借助DevEco Profiler跳转到代码位置，结合代码进行白盒分析，明确不合理的负载出现位置，帮助识别性能瓶颈，定界问题所在，提高解决问题的效率。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化应用性能节点集中介绍DevEco Profiler工具，CodeLinter和AppAnalyzer请根据链接进行参考。"
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