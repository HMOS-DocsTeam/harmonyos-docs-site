"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["572811"], {
630391(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_app_power_experience_standards_app_power_experience_standards_overview_app_power_experience_standards_overview_md_eaa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-app-power-experience-standards-app-power-experience-standards-overview-app-power-experience-standards-overview-md-eaa.json
var site_docs_app_power_experience_standards_app_power_experience_standards_overview_app_power_experience_standards_overview_md_eaa_namespaceObject = JSON.parse('{"id":"app-power-experience-standards/app-power-experience-standards-overview/app-power-experience-standards-overview","title":"概述","description":"背景及目的","source":"@site/docs/app-power-experience-standards/app-power-experience-standards-overview/app-power-experience-standards-overview.md","sourceDirName":"app-power-experience-standards/app-power-experience-standards-overview","slug":"/app-power-experience-standards/app-power-experience-standards-overview/","permalink":"/harmonyos-docs-site/app-power-experience-standards/app-power-experience-standards-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-power-experience-standards-overview","kit":"experience","last_updated":"2026-04-16"},"sidebar":"docs","previous":{"title":"CPU占用","permalink":"/harmonyos-docs-site/performance-experience-suggestions/performance-cpu-usage/"},"next":{"title":"后台任务使用","permalink":"/harmonyos-docs-site/app-power-experience-standards/standard-background-power/standard-background-task/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/app-power-experience-standards/app-power-experience-standards-overview/app-power-experience-standards-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-power-experience-standards-overview',
	kit: 'experience',
	last_updated: '2026-04-16'
};
const contentTitle = '概述';

const assets = {

};



const toc = [{
  "value": "背景及目的",
  "id": "背景及目的",
  "level": 2
}, {
  "value": "适用范围",
  "id": "适用范围",
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
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "背景及目的",
      children: "背景及目的"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本标准旨在提升应用的功耗热体验，规范应用全生命周期软硬件资源合理使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用范围",
      children: "适用范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本标准适用于应用和元服务的低功耗设计、开发及检测，包括如下两种场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["****前台场景：****当应用或元服务处于设备屏幕的顶层时，用户可以直接看到并进行操作，即为前台场景。", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/standard-foreground-power#ZH-CN_TOPIC_0000002121111368",
          children: "前台场景功耗规范"
        }), "提供了关于应用前台帧率、前台绘制渲染、应用前台资源使用的功耗规范。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["****后台场景：****当应用或元服务未处于设备屏幕的顶层时，用户无法直接看到或进行操作，即为后台场景。", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/standard-background-power#ZH-CN_TOPIC_0000002121111364",
          children: "后台场景功耗规范"
        }), "提供了关于后台任务、后台硬件资源、后台软件资源的使用规范。"]
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