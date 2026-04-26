"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["831138"], {
957761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_window_pipwindow_pip_faqs_pip_faqs_md_459_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-window-pipwindow-pip-faqs-pip-faqs-md-459.json
var site_docs_arkui_window_manager_window_pipwindow_pip_faqs_pip_faqs_md_459_namespaceObject = JSON.parse('{"id":"arkui/window-manager/window-pipwindow/pip-faqs/pip-faqs","title":"画中画常见问题","description":"画中画如何实现多个视频流播放","source":"@site/docs/arkui/window-manager/window-pipwindow/pip-faqs/pip-faqs.md","sourceDirName":"arkui/window-manager/window-pipwindow/pip-faqs","slug":"/arkui/window-manager/window-pipwindow/pip-faqs/","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pip-faqs/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"画中画常见问题","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pip-faqs","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用NDK接口实现画中画功能开发（C/C++）","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pipwindow-native/"},"next":{"title":"全局闪控球开发指导","permalink":"/harmonyos-docs-site/arkui/window-manager/floatingball-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/window-pipwindow/pip-faqs/pip-faqs.md


const frontMatter = {
	title: '画中画常见问题',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pip-faqs',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '画中画常见问题';

const assets = {

};



const toc = [{
  "value": "画中画如何实现多个视频流播放",
  "id": "画中画如何实现多个视频流播放",
  "level": 2
}, {
  "value": "画中画如何实现节点切换",
  "id": "画中画如何实现节点切换",
  "level": 2
}, {
  "value": "画中画如何解决拖动删除或点击关闭按钮关闭后，后台声音仍然存在的问题",
  "id": "画中画如何解决拖动删除或点击关闭按钮关闭后后台声音仍然存在的问题",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "画中画常见问题",
        children: "画中画常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "画中画如何实现多个视频流播放",
      children: "画中画如何实现多个视频流播放"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要实现多个视频流播放，可以通过自定义节点将视频流封装为NodeController，创建画中画时配置为自定义节点", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-pipwindow/js-apis-pipwindow#pipconfiguration",
        children: "customUIController"
      }), "，实现多个视频流播放 。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "画中画如何实现节点切换",
      children: "画中画如何实现节点切换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以使用画中画typeNode方案，typeNode方案支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-pipwindow/js-apis-pipwindow#updatecontentnode18",
        children: "updateContentNode"
      }), "方法更新画中画节点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "画中画如何解决拖动删除或点击关闭按钮关闭后后台声音仍然存在的问题",
      children: "画中画如何解决拖动删除或点击关闭按钮关闭后，后台声音仍然存在的问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于申请了长时任务的应用，画中画拖动删除或点击关闭后仅删除画中画窗口，并不会结束应用进程。开发者需要开启画中画生命周期监听，在STOPPED生命周期中主动关闭任务或进程。"
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