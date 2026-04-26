"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["238040"], {
717248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_page_arkts_ui_widget_page_custom_drawing_arkts_ui_widget_page_custom_drawing_md_ba7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-arkts-ui-widget-page-arkts-ui-widget-page-custom-drawing-arkts-ui-widget-page-custom-drawing-md-ba7.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_page_arkts_ui_widget_page_custom_drawing_arkts_ui_widget_page_custom_drawing_md_ba7_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-custom-drawing/arkts-ui-widget-page-custom-drawing","title":"ArkTS卡片使用画布组件绘制自定义图形","description":"ArkTS卡片开放了自定义绘制的能力，在卡片上可以通过Canvas组件创建一块画布，然后通过CanvasRenderingContext2D对象在画布上进行自定义图形的绘制，如下示例代码实现了在画布的中心绘制了一个笑脸。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-custom-drawing/arkts-ui-widget-page-custom-drawing.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-custom-drawing","slug":"/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-custom-drawing/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-custom-drawing/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"ArkTS卡片使用画布组件绘制自定义图形","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-page-custom-drawing","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS卡片为组件添加动效","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-animation/"},"next":{"title":"ArkTS卡片使用自定义字体","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-load-custom-font/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-page/arkts-ui-widget-page-custom-drawing/arkts-ui-widget-page-custom-drawing.md


const frontMatter = {
	title: 'ArkTS卡片使用画布组件绘制自定义图形',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-page-custom-drawing',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS卡片使用画布组件绘制自定义图形';

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
        id: "arkts卡片使用画布组件绘制自定义图形",
        children: "ArkTS卡片使用画布组件绘制自定义图形"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS卡片开放了自定义绘制的能力，在卡片上可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas",
        children: "Canvas"
      }), "组件创建一块画布，然后通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
        children: "CanvasRenderingContext2D"
      }), "对象在画布上进行自定义图形的绘制，如下示例代码实现了在画布的中心绘制了一个笑脸。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// entry/src/main/ets/customcanvasdrawing/pages/CustomCanvasDrawingCard.ets\n@Entry\n@Component\nstruct CustomCanvasDrawingCard {\n  private canvasWidth: number = 0;\n  private canvasHeight: number = 0;\n  // 初始化CanvasRenderingContext2D和RenderingContextSettings\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n\n  build() {\n    Column() {\n      Row() {\n        Canvas(this.context)\n          .width('100%')\n          .height('100%')\n          .onReady(() => {\n            // 在onReady回调中获取画布的实际宽和高\n            this.canvasWidth = this.context.width;\n            this.canvasHeight = this.context.height;\n            // 绘制画布的背景\n            this.context.fillStyle = '#EEF0FF';\n            this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);\n            // 在画布的中心绘制一个圆\n            this.context.beginPath();\n            let radius = this.context.width / 3;\n            let circleX = this.context.width / 2;\n            let circleY = this.context.height / 2;\n            this.context.moveTo(circleX - radius, circleY);\n            this.context.arc(circleX, circleY, radius, 2 * Math.PI, 0, true);\n            this.context.closePath();\n            this.context.fillStyle = '#5A5FFF';\n            this.context.fill();\n            // 绘制笑脸的左眼\n            let leftR = radius / 13;\n            let leftX = circleX - (radius / 2.3);\n            let leftY = circleY - (radius / 4.5);\n            this.context.beginPath();\n            this.context.arc(leftX, leftY, leftR, 0, 2 * Math.PI, true);\n            this.context.closePath();\n            this.context.strokeStyle = '#FFFFFF';\n            this.context.lineWidth = 15;\n            this.context.stroke();\n            // 绘制笑脸的右眼\n            let rightR = radius / 13;\n            let rightX = circleX + (radius / 2.3);\n            let rightY = circleY - (radius / 4.5);\n            this.context.beginPath();\n            this.context.arc(rightX, rightY, rightR, 0, 2 * Math.PI, true);\n            this.context.closePath();\n            this.context.strokeStyle = '#FFFFFF';\n            this.context.lineWidth = 15;\n            this.context.stroke();\n            // 绘制笑脸的鼻子\n            let startX = circleX;\n            let startY = circleY - 20;\n            this.context.beginPath();\n            this.context.moveTo(startX, startY);\n            this.context.lineTo(startX - 8, startY + 40);\n            this.context.lineTo(startX + 8, startY + 40);\n            this.context.strokeStyle = '#FFFFFF';\n            this.context.lineWidth = 15;\n            this.context.lineCap = 'round';\n            this.context.lineJoin = 'round';\n            this.context.stroke();\n            // 绘制笑脸的嘴巴\n            let mouthR = radius / 2;\n            let mouthX = circleX;\n            let mouthY = circleY + 10;\n            this.context.beginPath();\n            this.context.arc(mouthX, mouthY, mouthR, Math.PI / 1.4, Math.PI / 3.4, true);\n            this.context.strokeStyle = '#FFFFFF';\n            this.context.lineWidth = 15;\n            this.context.stroke();\n            this.context.closePath();\n          })\n      }\n    }.height('100%').width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(649385)/* ["default"] */.A) + "",
        width: "432",
        height: "768"
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
649385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478293-81a7a6c59d15c67ec0350283866fe10d.jpeg");

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