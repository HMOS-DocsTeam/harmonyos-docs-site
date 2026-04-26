"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["147283"], {
889715(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_visual_effect_ui_design_visual_effect_background_color_ui_design_visual_effect_background_color_md_703_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-visual-effect-ui-design-visual-effect-background-color-ui-design-visual-effect-background-color-md-703.json
var site_docs_ui_design_kit_guide_ui_design_visual_effect_ui_design_visual_effect_background_color_ui_design_visual_effect_background_color_md_703_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-color/ui-design-visual-effect-background-color","title":"按压阴影","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-color/ui-design-visual-effect-background-color.md","sourceDirName":"ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-color","slug":"/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-color/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-color/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"按压阴影","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-visual-effect-background-color","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"点光源效果","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-point-light/"},"next":{"title":"双边边缘流光","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-double-edge-streamer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-color/ui-design-visual-effect-background-color.md


const frontMatter = {
	title: '按压阴影',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-visual-effect-background-color',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '按压阴影';

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
        id: "按压阴影",
        children: "按压阴影"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从6.0.0(20) Beta1版本开始，新增支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts/ui-design-hdseffect/ui-design-hdseffect#pressshadow",
        children: "按压阴影"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过按压阴影接口可以设置组件的背景色变化效果，一般常用于组件按压交互时的背景色变化场景。"
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
          children: "创建按压阴影效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct PressShadowExample {\n  @State button_blend_state: hdsEffect.PressShadowType = hdsEffect.PressShadowType.NONE;\n  @State button_gradient_state: hdsEffect.PressShadowType = hdsEffect.PressShadowType.NONE;\n\n  build() {\n    NavDestination() {\n      Column({ space: 50 }) {\n        Button(\"BLEND_WHITE\", { buttonStyle: ButtonStyleMode.EMPHASIZED, role: ButtonRole.ERROR, stateEffect: false })\n          .visualEffect(new hdsEffect.HdsEffectBuilder()\n            .pressShadow(this.button_blend_state)\n            .buildEffect())\n          .onTouch((event: TouchEvent) => {\n            if (event.type === TouchType.Down) {\n              this.button_blend_state =  hdsEffect.PressShadowType.BLEND_WHITE;\n            } else if (event.type === TouchType.Up || event.type === TouchType.Cancel) {\n              this.button_blend_state =  hdsEffect.PressShadowType.NONE;\n            }\n          })\n\n        Button(\"GRADIENT\", { buttonStyle: ButtonStyleMode.NORMAL, stateEffect: false })\n          .visualEffect(new hdsEffect.HdsEffectBuilder()\n            .pressShadow(this.button_gradient_state)\n            .buildEffect())\n          .onTouch((event: TouchEvent) => {\n            if (event.type === TouchType.Down) {\n              this.button_gradient_state =  hdsEffect.PressShadowType.BLEND_GRADIENT;\n            } else if (event.type === TouchType.Up || event.type === TouchType.Cancel) {\n              this.button_gradient_state =  hdsEffect.PressShadowType.NONE;\n            }\n          })\n      }\n      .height('70%')\n      .justifyContent(FlexAlign.Center)\n    }\n    .width('100%')\n    .height('100%')\n    .title('Button example')\n    .backgroundColor('#040404')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(727271)/* ["default"] */.A) + "",
            width: "236",
            height: "193"
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
727271(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438397-c668bf5b80bca9e4d6efe95ce152ca93.gif");

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