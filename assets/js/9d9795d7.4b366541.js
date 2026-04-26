"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["900434"], {
331300(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_debug_optimize_test_kit_test_kit_overview_test_kit_overview_md_9d9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-debug-optimize-test-kit-test-kit-overview-test-kit-overview-md-9d9.json
var site_docs_system_debug_optimize_test_kit_test_kit_overview_test_kit_overview_md_9d9_namespaceObject = JSON.parse('{"id":"system-debug-optimize/test-kit/test-kit-overview/test-kit-overview","title":"Test Kit简介","description":"Test Kit为开发者提供了自动化测试框架，框架提供单元、UI和性能测试能力，支持编写ArkTS语言的单元、UI和性能自动化测试脚本，并通过测试结果查看相应功能的实现效果。从API version 20开始，支持性能测试能力。","source":"@site/docs/system-debug-optimize/test-kit/test-kit-overview/test-kit-overview.md","sourceDirName":"system-debug-optimize/test-kit/test-kit-overview","slug":"/system-debug-optimize/test-kit/test-kit-overview/","permalink":"/harmonyos-docs-site/system-debug-optimize/test-kit/test-kit-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Test Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/test-kit-overview","kit":"system/debug-optimize","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Performance Analysis Kit术语","permalink":"/harmonyos-docs-site/system-debug-optimize/performance-analysis-kit/performance-analysis-kit-terminology/"},"next":{"title":"SDK命令行工具简介","permalink":"/harmonyos-docs-site/system-debug-optimize/debugging-commands/command-line-tools-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-debug-optimize/test-kit/test-kit-overview/test-kit-overview.md


const frontMatter = {
	title: 'Test Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/test-kit-overview',
	kit: 'system/debug-optimize',
	last_updated: '2026-04-22'
};
const contentTitle = 'Test Kit简介';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
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
        id: "test-kit简介",
        children: "Test Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test Kit为开发者提供了自动化测试框架，框架提供单元、UI和性能测试能力，支持编写ArkTS语言的单元、UI和性能自动化测试脚本，并通过测试结果查看相应功能的实现效果。从API version 20开始，支持性能测试能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["单元测试能力：提供自动化测试的基础接口和运行机制，具体使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ut/arkxtest-guidelines/unittest-guidelines",
          children: "单元测试框架使用指导"
        }), "，主要能力如下：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供自动化用例定义接口，包括测试套定义、测试用例定义。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供自动化用例断言接口，支持多种方式的断言能力，支持开发者在自动化脚本中灵活使用进行用例断言。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供预置动作/清理动作执行接口，且支持测试套层级和测试用例层级的执行方式。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供多种用例执行模式，包括筛选指定测试用例执行、随机执行、压力执行等。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UI测试能力：提供UI自动化测试能力，测试脚本需基于单元测试框架开发，具体使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ut/arkxtest-guidelines/uitest-guidelines",
          children: "UI测试框架使用指导"
        }), "，主要能力如下：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供控件查找接口，支持多种控件查找方式，如按照控件属性查找、按照控件相对位置查找等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供模拟UI操作接口，支持多种类型如点击、双击、滑动、双指捏合等操作，也支持模拟多种外设如鼠标、键盘的操作。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供模拟窗口操作接口，支持针对窗口进行模拟调整大小、移动等操作。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供shell命令方式模拟UI操作能力，支持如点击、双击、滑动等操作。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供监听系统弹框/toast能力，并可获取提示文本。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["性能测试能力：提供白盒性能自动化测试能力，测试脚本需基于单元测试框架开发，具体使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ut/arkxtest-guidelines/perftest-guideline",
          children: "白盒性能测试框架使用指导"
        }), "，主要能力如下：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供针对指定代码段执行过程的基础性能数据采集能力，包括执行耗时、执行CPU和内存占用数据等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供对应用场景化性能数据的采集，包括应用启动时延、页面切换时延、列表滑动帧率等。"
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