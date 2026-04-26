"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["433461"], {
590365(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_glossary_arkts_state_management_glossary_md_1b1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-glossary-arkts-state-management-glossary-md-1b1.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_glossary_arkts_state_management_glossary_md_1b1_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-glossary/arkts-state-management-glossary","title":"状态管理术语","description":"A","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-glossary/arkts-state-management-glossary.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-glossary","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-glossary/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-glossary/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"状态管理术语","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-glossary","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"状态管理概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview/"},"next":{"title":"状态管理原理介绍","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-glossary/arkts-state-management-glossary.md


const frontMatter = {
	title: '状态管理术语',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-glossary',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '状态管理术语';

const assets = {

};



const toc = [{
  "value": "A",
  "id": "a",
  "level": 2
}, {
  "value": "属性级精准更新（Attribute-Level Updates）",
  "id": "属性级精准更新attribute-level-updates",
  "level": 3
}, {
  "value": "D",
  "id": "d",
  "level": 2
}, {
  "value": "数据源/同步源（Data Source）",
  "id": "数据源同步源data-source",
  "level": 3
}, {
  "value": "深度监听（Deep Monitor）",
  "id": "深度监听deep-monitor",
  "level": 3
}, {
  "value": "深度观察（Deep Observation）",
  "id": "深度观察deep-observation",
  "level": 3
}, {
  "value": "L",
  "id": "l",
  "level": 2
}, {
  "value": "本地初始化（Local Initialization）",
  "id": "本地初始化local-initialization",
  "level": 3
}, {
  "value": "M",
  "id": "m",
  "level": 2
}, {
  "value": "标脏（Mark Dirty）",
  "id": "标脏mark-dirty",
  "level": 3
}, {
  "value": "最小化更新（Minimum Updates）",
  "id": "最小化更新minimum-updates",
  "level": 3
}, {
  "value": "N",
  "id": "n",
  "level": 2
}, {
  "value": "命名参数机制（Named Parameter Mechanism）",
  "id": "命名参数机制named-parameter-mechanism",
  "level": 3
}, {
  "value": "O",
  "id": "o",
  "level": 2
}, {
  "value": "一层监听（One-Layer Monitor）",
  "id": "一层监听one-layer-monitor",
  "level": 3
}, {
  "value": "一层观察（One-Layer Observation）",
  "id": "一层观察one-layer-observation",
  "level": 3
}, {
  "value": "单向同步（One-Way Sync）",
  "id": "单向同步one-way-sync",
  "level": 3
}, {
  "value": "R",
  "id": "r",
  "level": 2
}, {
  "value": "引用传递（Reference Transmission）",
  "id": "引用传递reference-transmission",
  "level": 3
}, {
  "value": "常规变量（Regular Variables）",
  "id": "常规变量regular-variables",
  "level": 3
}, {
  "value": "渲染过程（Render Phase）",
  "id": "渲染过程render-phase",
  "level": 3
}, {
  "value": "S",
  "id": "s",
  "level": 2
}, {
  "value": "状态变量（State Variables）",
  "id": "状态变量state-variables",
  "level": 3
}, {
  "value": "T",
  "id": "t",
  "level": 2
}, {
  "value": "尾随闭包（Trailing Lambda）",
  "id": "尾随闭包trailing-lambda",
  "level": 3
}, {
  "value": "双向同步（Two-way Sync）",
  "id": "双向同步two-way-sync",
  "level": 3
}, {
  "value": "V",
  "id": "v",
  "level": 2
}, {
  "value": "值传递（Value Transmission）",
  "id": "值传递value-transmission",
  "level": 3
}, {
  "value": "视图（View）",
  "id": "视图view",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "状态管理术语",
        children: "状态管理术语"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "a",
      children: "A"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性级精准更新attribute-level-updates",
      children: "属性级精准更新（Attribute-Level Updates）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理框架使用类属性装饰器可以实现对类对象中属性的观测能力，当属性发生变化时，只刷新该属性绑定的组件，其他未发生变化的属性绑定的组件将不会被连带刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "d",
      children: "D"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据源同步源data-source",
      children: "数据源/同步源（Data Source）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态变量的原始来源，可以同步给不同的状态数据。通常为父组件传给子组件的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "深度监听deep-monitor",
      children: "深度监听（Deep Monitor）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Monitor装饰器用于监听数据的变化，深度监听会递归监听对象或数组的所有嵌套属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "深度观察deep-observation",
      children: "深度观察（Deep Observation）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "深度观察能力指的是UI能够递归观察到对象或数组的所有嵌套属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "l",
      children: "L"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "本地初始化local-initialization",
      children: "本地初始化（Local Initialization）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在变量声明的时候赋值，作为变量的默认值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "m",
      children: "M"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "标脏mark-dirty",
      children: "标脏（Mark Dirty）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当状态变量发生变化时，框架会将依赖于该变量的系统组件以及该变量所属的自定义组件标记为“脏”。在后续UI渲染的过程中，会将标脏的节点重新", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce#%E8%A7%A6%E5%8F%91%E6%9B%B4%E6%96%B0",
        children: "刷新"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "最小化更新minimum-updates",
      children: "最小化更新（Minimum Updates）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最小化更新是UI框架的一种优化策略，确保只更新实际发生变化的部分，即只刷新与发生变化的状态变量绑定的系统组件，避免不必要的渲染操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "n",
      children: "N"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命名参数机制named-parameter-mechanism",
      children: "命名参数机制（Named Parameter Mechanism）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "父组件通过指定参数传递给子组件的状态变量，为父子传递同步参数的主要手段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "o",
      children: "O"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "一层监听one-layer-monitor",
      children: "一层监听（One-Layer Monitor）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Watch装饰器用于监听数据的变化，一层监听只能监听对象或数组的第一层属性的变化，不会递归监听嵌套属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "一层观察one-layer-observation",
      children: "一层观察（One-Layer Observation）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UI能够观察到@State、@Prop等V1装饰器装饰的状态变量一层属性的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "单向同步one-way-sync",
      children: "单向同步（One-Way Sync）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据只能从一个方向流动，通常是从父组件到子组件。子组件可以接收父组件的数据，但不能直接修改父组件的数据源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "r",
      children: "R"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "引用传递reference-transmission",
      children: "引用传递（Reference Transmission）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在函数调用或变量赋值时，传递的是变量本身，包含", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce#%E6%94%B6%E9%9B%86%E4%BE%9D%E8%B5%96",
        children: "收集依赖"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce#%E8%A7%A6%E5%8F%91%E6%9B%B4%E6%96%B0",
        children: "触发更新"
      }), "的逻辑。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常规变量regular-variables",
      children: "常规变量（Regular Variables）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "没有被状态装饰器装饰的变量，通常应用于辅助计算。它的改变永远不会引起UI的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "渲染过程render-phase",
      children: "渲染过程（Render Phase）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["渲染过程是状态管理", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce#%E8%A7%A6%E5%8F%91%E6%9B%B4%E6%96%B0",
        children: "触发更新"
      }), "流程中的一个阶段，指组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%A0%87%E8%84%8Fmark-dirty",
        children: "标脏"
      }), "完成后，下一帧信号到来时刷新UI的这段流程。在此过程中，框架遍历脏自定义组件列表，调用系统生成的rerender方法，遍历脏系统组件，刷新组件并更新依赖。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "s",
      children: "S"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "状态变量state-variables",
      children: "状态变量（State Variables）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "被状态装饰器装饰的变量，状态变量值的改变会引起UI的渲染更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "t",
      children: "T"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "尾随闭包trailing-lambda",
      children: "尾随闭包（Trailing Lambda）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尾随闭包是ArkTS中的一种语法特性，当闭包作为函数的最后一个参数时，可以将该闭包表达式写在函数调用括号之后，以提高代码可读性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "双向同步two-way-sync",
      children: "双向同步（Two-way Sync）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据可以在两个方向上流动，父子组件可以相互修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v",
      children: "V"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "值传递value-transmission",
      children: "值传递（Value Transmission）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在函数调用或变量赋值时，传递的是变量的值，而非变量本身，不包含收集依赖和触发更新的逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "视图view",
      children: "视图（View）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视图指的是UI界面。"
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