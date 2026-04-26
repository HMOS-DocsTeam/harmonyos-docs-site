"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["519746"], {
350805(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_transition_arkts_transition_overview_arkts_transition_overview_md_5a5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-transition-arkts-transition-overview-arkts-transition-overview-md-5a5.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_transition_arkts_transition_overview_arkts_transition_overview_md_5a5_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-transition-overview/arkts-transition-overview","title":"转场动画概述","description":"转场动画用于对即将出现或消失的组件施加动画效果，始终显示的组件应使用属性动画。转场动画旨在简化开发者对组件消失节点的管理，如果使用属性动画实现组件转场，开发者需在动画结束回调中手动删除组件节点。此外，动画结束前已删除的节点可能重新出现，因此需在回调中增加对节点状态的判断逻辑。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-transition-overview/arkts-transition-overview.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-transition-overview","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-transition-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-transition-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"转场动画概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-transition-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义属性动画","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-custom-attribute-animation/"},"next":{"title":"出现/消失转场","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-enter-exit-transition/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-transition-overview/arkts-transition-overview.md


const frontMatter = {
	title: '转场动画概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-transition-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '转场动画概述';

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
        id: "转场动画概述",
        children: "转场动画概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["转场动画用于对即将出现或消失的组件施加动画效果，始终显示的组件应使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-overview",
        children: "属性动画"
      }), "。转场动画旨在简化开发者对组件消失节点的管理，如果使用属性动画实现组件转场，开发者需在动画结束回调中手动删除组件节点。此外，动画结束前已删除的节点可能重新出现，因此需在回调中增加对节点状态的判断逻辑。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转场动画有如下几类："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-enter-exit-transition",
          children: "出现/消失转场"
        }), "：对新增、消失的控件实现动画效果，是通用的基础转场效果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-modal-transition",
          children: "模态转场"
        }), "：新的界面覆盖在旧的界面之上的动画，旧的界面不消失，新的界面出现，如弹框就是典型的模态转场动画。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-shared-element-transition",
          children: "共享元素转场 (一镜到底)"
        }), "：共享元素转场是一种界面切换时对相同或者相似的元素做的一种位置和大小匹配的过渡动画效果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-rotation-transition-animation",
          children: "旋转屏动画"
        }), "：旋转屏动画主要分为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-rotation-transition-animation#%E5%B8%83%E5%B1%80%E5%88%87%E6%8D%A2%E7%9A%84%E6%97%8B%E8%BD%AC%E5%B1%8F%E5%8A%A8%E7%94%BB",
          children: "布局切换的旋转屏动画"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-rotation-transition-animation#%E9%80%8F%E6%98%8E%E5%BA%A6%E5%8F%98%E5%8C%96%E7%9A%84%E6%97%8B%E8%BD%AC%E5%B1%8F%E5%8A%A8%E7%94%BB",
          children: "透明度变化的旋转屏动画"
        }), "，旨在实现屏幕显示方向变化时的自然过渡。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-page-transition-animation",
          children: "页面转场动画"
        }), "：页面的路由转场方式，可以通过在pageTransition函数中自定义页面入场和页面退场的转场动效。为了实现更好的转场效果，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-animation",
          children: "导航转场"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-modal-transition",
          children: "模态转场"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-animation",
          children: "导航转场"
        }), "：页面的路由转场方式，对应一个界面消失，另外一个界面出现的动画效果，如设置应用一级菜单切换到二级界面。"]
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