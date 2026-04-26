"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["22907"], {
464938(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_process_arkts_ui_widget_process_md_5e9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-process-arkts-ui-widget-process-md-5e9.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_process_arkts_ui_widget_process_md_5e9_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget-process/arkts-ui-widget-process","title":"ArkTS卡片进程模型","description":"本文主要介绍，卡片从创建到显示整个过程中各个进程的含义。具体请参考卡片进程模型。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget-process/arkts-ui-widget-process.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget-process","slug":"/form-kit/arkts-ui/arkts-ui-widget-process/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget-process/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"ArkTS卡片进程模型","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-process","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理ArkTS卡片生命周期","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget-lifecycle/"},"next":{"title":"ArkTS卡片界面开发概述","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget-process/arkts-ui-widget-process.md


const frontMatter = {
	title: 'ArkTS卡片进程模型',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-process',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS卡片进程模型';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
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
        id: "arkts卡片进程模型",
        children: "ArkTS卡片进程模型"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文主要介绍，卡片从创建到显示整个过程中各个进程的含义。具体请参考卡片进程模型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 卡片进程模型"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(427863)/* ["default"] */.A) + "",
        width: "566",
        height: "370"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片使用方进程：显示卡片的宿主进程，例如桌面进程。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片渲染服务进程：系统内统一加载渲染卡片UI的进程，所有卡片渲染在同一个进程内，不同的应用卡片通过虚拟机隔离。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["卡片管理服务进程：系统内统一卡片生命周期的系统", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-overview",
          children: "SA"
        }), "服务。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["卡片提供方进程：提供卡片的应用进程，包括应用自身UIAbility运行的主进程，以及卡片单独的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability",
          children: "FormExtensionAbility"
        }), "进程。两个进程之间内存隔离，但是共享相同的文件沙箱。"]
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
427863(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958290-3d805143eef4ea68829887d795a1e656.png");

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