"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["283451"], {
269937(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_visual_effect_ui_design_visual_effect_point_light_ui_design_visual_effect_point_light_md_7b9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-visual-effect-ui-design-visual-effect-point-light-ui-design-visual-effect-point-light-md-7b9.json
var site_docs_ui_design_kit_guide_ui_design_visual_effect_ui_design_visual_effect_point_light_ui_design_visual_effect_point_light_md_7b9_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-point-light/ui-design-visual-effect-point-light","title":"点光源效果","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-point-light/ui-design-visual-effect-point-light.md","sourceDirName":"ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-point-light","slug":"/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-point-light/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-point-light/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"点光源效果","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-visual-effect-point-light","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置列表卡片样式","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-list-item-card/ui-design-set-listitem-style/"},"next":{"title":"按压阴影","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-background-color/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-visual-effect/ui-design-visual-effect-point-light/ui-design-visual-effect-point-light.md


const frontMatter = {
	title: '点光源效果',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-visual-effect-point-light',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '点光源效果';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
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
        id: "点光源效果",
        children: "点光源效果"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从6.0.0(20) Beta1版本开始，新增支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts/ui-design-hdseffect/ui-design-hdseffect#pointlight",
        children: "点光源效果"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过点光源接口可以设置组件的发光效果以及被照亮的受光效果，使得组件交互体验更显沉浸。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单个组件最多同时受12个光源照亮。"
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
          children: "创建点光源发光效果。如果需要发光，配置sourceType属性；如果需要被照亮，配置illuminatedType属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下代码表示：当中间的Button点击时，产生点光源效果，重复点击触发不同点光源效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  @State bloomValue: number = 0;\n  @State index: number = 0;\n  @State illuminatedType: hdsEffect.PointLightIlluminatedType = hdsEffect.PointLightIlluminatedType.NONE;\n  @State button_gradient_state: hdsEffect.PressShadowType = hdsEffect.PressShadowType.NONE;\n  @State lightIntensity: number = 10;\n  @State types: hdsEffect.PointLightIlluminatedType[] =\n    [hdsEffect.PointLightIlluminatedType.NONE, hdsEffect.PointLightIlluminatedType.BORDER,\n      hdsEffect.PointLightIlluminatedType.CONTENT, hdsEffect.PointLightIlluminatedType.BORDER_CONTENT,\n      hdsEffect.PointLightIlluminatedType.DEFAULT_FEATHERING_BORDER];\n\n  build() {\n    Flex({\n      direction: FlexDirection.Column,\n      justifyContent: FlexAlign.Center,\n      alignItems: ItemAlign.Center,\n    }) {\n      // 纵向循环\n      ForEach(Array<number>(4).fill(0), (row: number) => {\n        Flex({\n          direction: FlexDirection.Row,\n          justifyContent: FlexAlign.Center,\n          alignItems: ItemAlign.Center,\n        }) {\n          // 横向循环\n          ForEach(Array<number>(4).fill(0), (col: number) => {\n            Flex()\n              .visualEffect(new hdsEffect.HdsEffectBuilder().pointLight({\n                illuminatedType: this.illuminatedType,\n              }).buildEffect())\n              .backgroundColor(0x808080)\n              .size({ width: 60, height: 60 })\n              .borderRadius(50)\n              .margin({ top: 20, right: 10, left: 10 }) // 添加间距\n          })\n        }\n        .width('100%') // 设置 Row 组件的宽度为 100%\n      })\n\n      Flex({\n        direction: FlexDirection.Row,\n        justifyContent: FlexAlign.Center, // 使用 SpaceBetween 来均匀分布间距\n        alignItems: ItemAlign.Center,\n      }) {\n        Flex()\n          .visualEffect(new hdsEffect.HdsEffectBuilder().pointLight({\n            illuminatedType: this.illuminatedType,\n          }).buildEffect())\n          .backgroundColor(0x808080)\n          .size({ width: 60, height: 60 })\n          .borderRadius(50)\n          .margin({ top: 20, right: 10, left: 10 })\n\n        Button('点击发光')\n          .size({ width: 140, height: 60 })\n          .backgroundColor(0x808080)\n          .fontColor(0xADD8E6)\n          .visualEffect(new hdsEffect.HdsEffectBuilder()\n            .pressShadow(this.button_gradient_state)\n            .pointLight({\n              options: {\n                color: Color.White,\n                intensity: this.lightIntensity,\n                height: 150\n              }\n            })\n            .pressShadow(this.button_gradient_state)\n            .buildEffect())\n          .onClick(() => {\n            if (this.index <= 3) {\n              this.index++;\n              this.illuminatedType = this.types[this.index];\n              this.button_gradient_state = hdsEffect.PressShadowType.BLEND_GRADIENT;\n            }\n            let message = 'NONE';\n            if (this.illuminatedType == 1) {\n              message = 'BORDER';\n            } else if (this.illuminatedType == 2) {\n              message = 'CONTENT';\n            } else if (this.illuminatedType == 3) {\n              message = 'BORDER_CONTENT';\n            } else {\n              message = 'DEFAULT_FEATHERING_BORDER';\n            }\n            this.getUIContext().getPromptAction().showToast({\n              message: message,\n              duration: 2000,\n              bottom: '80%'\n            });\n          })\n          .margin({ top: 20, right: 10, left: 10 })\n\n        Flex()\n          .visualEffect(new hdsEffect.HdsEffectBuilder().pointLight({\n            illuminatedType: this.illuminatedType,\n          }).buildEffect())\n          .backgroundColor(0x808080)\n          .size({ width: 60, height: 60 })\n          .borderRadius(50)\n          .margin({ top: 20, right: 10, left: 10 })\n      }\n      .width('100%') // 设置 Row 组件的宽度为 100%\n\n      ForEach(Array<number>(4).fill(0), (row: number) => {\n        Flex({\n          direction: FlexDirection.Row,\n          justifyContent: FlexAlign.Center,\n          alignItems: ItemAlign.Center,\n        }) {\n          // 横向循环\n          ForEach(Array<number>(4).fill(0), (col: number) => {\n            Flex()\n              .visualEffect(new hdsEffect.HdsEffectBuilder().pointLight({\n                illuminatedType: this.illuminatedType,\n              }).buildEffect())\n              .backgroundColor(0x808080)\n              .size({ width: 60, height: 60 })\n              .borderRadius(50)\n              .margin({ top: 20, right: 10, left: 10 })\n          })\n        }\n        .width('100%') // 设置 Row 组件的宽度为 100%\n      })\n    }\n    .backgroundColor(Color.Black)\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(665229)/* ["default"] */.A) + "",
            width: "876",
            height: "434"
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
665229(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798702-577cb6ee6f7139cfd89f2334a7be6b5c.png");

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