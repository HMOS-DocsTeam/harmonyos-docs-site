"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["359493"], {
982716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_iap_kit_guide_iap_access_specifications_iap_access_specifications_md_0ed_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iap-kit-guide-iap-access-specifications-iap-access-specifications-md-0ed.json
var site_docs_iap_kit_guide_iap_access_specifications_iap_access_specifications_md_0ed_namespaceObject = JSON.parse('{"id":"iap-kit-guide/iap-access-specifications/iap-access-specifications","title":"IAP Kit接入规范","description":"为了确保用户获得良好的支付体验，IAP Kit制定了应用接入IAP Kit的设计规范，请开发者遵照执行，否则可能影响应用上架。具体要求如下：","source":"@site/docs/iap-kit-guide/iap-access-specifications/iap-access-specifications.md","sourceDirName":"iap-kit-guide/iap-access-specifications","slug":"/iap-kit-guide/iap-access-specifications/","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-access-specifications/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"IAP Kit接入规范","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-access-specifications","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"IAP Kit简介","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-introduction/"},"next":{"title":"使用入门","permalink":"/harmonyos-docs-site/iap-kit-guide/iap-dev-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/iap-kit-guide/iap-access-specifications/iap-access-specifications.md


const frontMatter = {
	title: 'IAP Kit接入规范',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-access-specifications',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'IAP Kit接入规范';

const assets = {

};



const toc = [{
  "value": "界面设计规范",
  "id": "界面设计规范",
  "level": 2
}, {
  "value": "接入限制",
  "id": "接入限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "iap-kit接入规范",
        children: "IAP Kit接入规范"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了确保用户获得良好的支付体验，IAP Kit制定了应用接入IAP Kit的设计规范，请开发者遵照执行，否则可能影响应用上架。具体要求如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "界面设计规范",
      children: "界面设计规范"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请不要在应用商品购买页展示支付方式栏目信息，包括支付方式logo、支付方式名称（如“华为支付”、“鸿蒙支付”、“应用内支付”等）等信息。建议采用购买、订阅等按钮确认用户购买或订阅意愿。用户点击按钮确认购买或订阅意愿后，应用直接拉起IAP Kit收银台完成购买流程。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建议应用在商品购买页拉起IAP Kit收银台时，展示加载动效，保证应用购买的流畅性，提升用户体验。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(439002)/* ["default"] */.A) + "",
        width: "800",
        height: "481"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入限制",
      children: "接入限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数字商品（虚拟商品）要求通过IAP Kit接入购买能力，不能独立对接支付宝、微信支付等三方支付，否则可能影响应用上架。"
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
439002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799272-e04b73edd82213e1a6776636c9043e98.png");

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