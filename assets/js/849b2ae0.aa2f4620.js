"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["406571"], {
248038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_visual_effect_ui_design_visual_effect_background_streamer_ui_design_visual_effect_background_streamer_md_849_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-visual-effect-ui-design-visual-effect-background-streamer-ui-design-visual-effect-background-streamer-md-849.json
var site_docs_ui_design_kit_guide_ui_design_visual_effect_ui_design_visual_effect_background_streamer_ui_design_visual_effect_background_streamer_md_849_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-streamer/ui-design-visual-effect-background-streamer","title":"背景流光","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-streamer/ui-design-visual-effect-background-streamer.md","sourceDirName":"ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-streamer","slug":"/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-streamer/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-streamer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"背景流光","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-visual-effect-background-streamer","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"双边边缘流光","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-double-edge-streamer/"},"next":{"title":"应用内多窗","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-multiwindowentryinapp/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-streamer/ui-design-visual-effect-background-streamer.md


const frontMatter = {
	title: '背景流光',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-visual-effect-background-streamer',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '背景流光';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "背景流光",
        children: "背景流光"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从6.0.0(20) Beta1版本开始，新增支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts/ui-design-hdseffect/ui-design-hdseffect#effecttype",
        children: "背景流光"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过背景流光接口可以设置组件的背景流动发光效果，并且可以设置背景色及渐变背景色，常用于全屏幕背景流光等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hdsEffect } from '@kit.UIDesignKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置背景流光效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct UVFlowLight {\n  @State controller: hdsEffect.ShaderEffectController = new hdsEffect.ShaderEffectController();\n\n  build() {\n    Stack() {\n    }\n    .visualEffect(new hdsEffect.HdsEffectBuilder()\n      .shaderEffect({\n        effectType: hdsEffect.EffectType.UV_BACKGROUND_FLOW_LIGHT,\n        animation: {\n          duration: 10000,\n          iterations: -1,\n          autoPlay: true,\n          onFinish: ()=> {\n            console.info('Succeeded in finishing');\n          }\n        },\n        controller: this.controller,\n      })\n      .buildEffect())\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(734108)/* ["default"] */.A) + "",
            width: "269",
            height: "527"
          })
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
734108(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

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