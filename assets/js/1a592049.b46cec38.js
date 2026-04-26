"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["858857"], {
230780(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_display_manager_displaymanager_overview_displaymanager_overview_md_1a5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-display-manager-displaymanager-overview-displaymanager-overview-md-1a5.json
var site_docs_arkui_display_manager_displaymanager_overview_displaymanager_overview_md_1a5_namespaceObject = JSON.parse('{"id":"arkui/display-manager/displaymanager-overview/displaymanager-overview","title":"屏幕管理简介","description":"屏幕管理主要是针对设备的各种屏幕（包括物理屏、虚拟屏、折叠屏）进行管理，管理其各种属性信息，并当作广播者，将监听到的信息广播给各个需要屏幕信息的订阅服务。","source":"@site/docs/arkui/display-manager/displaymanager-overview/displaymanager-overview.md","sourceDirName":"arkui/display-manager/displaymanager-overview","slug":"/arkui/display-manager/displaymanager-overview/","permalink":"/harmonyos-docs-site/arkui/display-manager/displaymanager-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"屏幕管理简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/displaymanager-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"窗口开发常见问题","permalink":"/harmonyos-docs-site/arkui/window-manager/window-faqs/"},"next":{"title":"使用OH_DisplayManager实现屏幕基础信息查询和状态监听 (C/C++)","permalink":"/harmonyos-docs-site/arkui/display-manager/native-display-manager/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/display-manager/displaymanager-overview/displaymanager-overview.md


const frontMatter = {
	title: '屏幕管理简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/displaymanager-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '屏幕管理简介';

const assets = {

};



const toc = [{
  "value": "约束和限制",
  "id": "约束和限制",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "屏幕管理简介",
        children: "屏幕管理简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "屏幕管理主要是针对设备的各种屏幕（包括物理屏、虚拟屏、折叠屏）进行管理，管理其各种属性信息，并当作广播者，将监听到的信息广播给各个需要屏幕信息的订阅服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "屏幕管理主要包括以下几方面能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可获取屏幕当前的属性信息，包括屏幕分辨率、物理像素密度、屏幕尺寸等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可监听屏幕发生的各种事件变化，包括屏幕旋转变化、屏幕分辨率变化、屏幕刷新率变化、折叠状态变化等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "提供虚拟屏的创建和使用，此部分能力仅对系统应用开放。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对屏幕属性相关信息的查询和监听，可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/display-manager/native-display-manager",
        children: "使用OH_DisplayManager实现屏幕基础信息查询和状态监听 (C/C++)"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/display-manager/screenproperty-guideline",
        children: "使用Display实现屏幕属性查询及状态监听 (ArkTS)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需要在支持SystemCapability.Window.SessionManager能力的系统上使用Display和Screen接口，更详细的系统能力请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/syscap/syscap",
          children: "系统能力SystemCapability使用指南"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在多屏实现中，Screen接口仅支持系统应用使用，且部分接口需要申请ohos.permission.CAPTURE_SCREEN权限。"
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