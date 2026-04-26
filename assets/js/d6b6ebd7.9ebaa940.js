"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["600240"], {
374642(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_effects_arkts_shadow_effect_arkts_shadow_effect_md_d6b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-effects-arkts-shadow-effect-arkts-shadow-effect-md-d6b.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_effects_arkts_shadow_effect_arkts_shadow_effect_md_d6b_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-shadow-effect/arkts-shadow-effect","title":"阴影","description":"阴影接口shadow可以为当前组件添加阴影效果，该接口支持两种类型参数，开发者可配置ShadowOptions自定义阴影效果。ShadowOptions模式下，当radius = 0或者color的透明度为0时，无阴影效果。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-shadow-effect/arkts-shadow-effect.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-shadow-effect","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-shadow-effect/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-shadow-effect/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"阴影","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-shadow-effect","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"模糊","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-blur-effect/"},"next":{"title":"色彩","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-color-effect/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-shadow-effect/arkts-shadow-effect.md


const frontMatter = {
	title: '阴影',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-shadow-effect',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '阴影';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "阴影",
        children: "阴影"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["阴影接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadow",
        children: "shadow"
      }), "可以为当前组件添加阴影效果，该接口支持两种类型参数，开发者可配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "ShadowOptions"
      }), "自定义阴影效果。ShadowOptions模式下，当radius = 0或者color的透明度为0时，无阴影效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ShadowOptionDemo {\n  build() {\n    Row() {\n      Column() {\n        Column() {\n          Text('shadowOption').fontSize(12)\n        }\n        .width(100)\n        .aspectRatio(1)\n        .margin(10)\n        .justifyContent(FlexAlign.Center)\n        .backgroundColor(Color.White)\n        .borderRadius(20)\n        .shadow({ radius: 10, color: Color.Gray })\n\n        Column() {\n          Text('shadowOption').fontSize(12)\n        }\n        .width(100)\n        .aspectRatio(1)\n        .margin(10)\n        .justifyContent(FlexAlign.Center)\n        .backgroundColor('#a8a888')\n        .borderRadius(20)\n        .shadow({\n          radius: 10,\n          color: Color.Gray,\n          offsetX: 20,\n          offsetY: 20\n        })\n      }\n      .width('100%')\n      .height('100%')\n      .justifyContent(FlexAlign.Center)\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(125189)/* ["default"] */.A) + "",
        width: "381",
        height: "386"
      })
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
125189(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798352-aceb179f306bdb61fc46d13e3f2ab9ca.png");

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