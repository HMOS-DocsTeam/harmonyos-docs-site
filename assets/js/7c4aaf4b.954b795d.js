"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["947064"], {
174035(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_liveform_arkts_ui_liveform_overview_arkts_ui_liveform_overview_md_7c4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-liveform-arkts-ui-liveform-overview-arkts-ui-liveform-overview-md-7c4.json
var site_docs_form_kit_arkts_ui_arkts_ui_liveform_arkts_ui_liveform_overview_arkts_ui_liveform_overview_md_7c4_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-overview/arkts-ui-liveform-overview","title":"互动卡片概述","description":"从API version 20开始，支持互动卡片。互动卡片提供卡片动效能力，例如卡片破框动效，丰富信息提醒、浅层交互功能，显著提升用户体验。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-overview/arkts-ui-liveform-overview.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-overview","slug":"/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-overview/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"互动卡片概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-liveform-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"背板透明卡片开发指导","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-transparent-backplate-form/arkts-ui-transparent-backplate-form-development/"},"next":{"title":"趣味交互类型互动卡片开发指导","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-funinteraction-development/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-overview/arkts-ui-liveform-overview.md


const frontMatter = {
	title: '互动卡片概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-liveform-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '互动卡片概述';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "趣味交互类型",
  "id": "趣味交互类型",
  "level": 3
}, {
  "value": "场景动效类型",
  "id": "场景动效类型",
  "level": 3
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "互动卡片概述",
        children: "互动卡片概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持互动卡片。互动卡片提供卡片动效能力，例如卡片破框动效，丰富信息提醒、浅层交互功能，显著提升用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "互动卡片包含两种类型：趣味交互类型互动卡片和场景动效类型互动卡片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "趣味交互类型",
      children: "趣味交互类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["趣味交互类型互动卡片，提供卡片小游戏功能，当用户点击卡片时，开始体验对应卡片小游戏。当前仅支持基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-interact-card-0000002045917828",
        children: "快游戏"
      }), "开发。详细请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-funinteraction-development",
        children: "趣味交互类型互动卡片开发指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 趣味交互类型互动卡片样例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(677136)/* ["default"] */.A) + "",
        width: "330",
        height: "382"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景动效类型",
      children: "场景动效类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["场景动效类型互动卡片支持实现动态效果。以天气卡片为例，当天气变为雷雨天气时，卡片激活并触发互动卡片动效。动效结束后，卡片恢复原有显示效果。详细信息请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-overview",
        children: "场景动效类型互动卡片概述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "互动卡片作为卡片功能的增强，卡片自身业务不能强依赖互动卡片动效能力。"
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
677136(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438353-72641dd079d0b8dc01253c015229690e.gif");

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