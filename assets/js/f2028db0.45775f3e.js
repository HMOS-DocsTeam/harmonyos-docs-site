"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["493124"], {
387585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_curve_arkts_traditional_curve_arkts_traditional_curve_md_f20_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-curve-arkts-traditional-curve-arkts-traditional-curve-md-f20.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_curve_arkts_traditional_curve_arkts_traditional_curve_md_f20_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-traditional-curve/arkts-traditional-curve","title":"传统曲线","description":"传统曲线基于数学公式，创造形状符合开发者预期的动画曲线。以三阶贝塞尔曲线为代表，通过调整曲线控制点，可以改变曲线形状，从而带来缓入、缓出等动画效果。对于同一条传统曲线，由于不具备物理含义，其形状不会因为用户行为发生任何改变，缺少物理动画的自然感和生动感。建议优先采用物理曲线创建动画，将传统曲线作为辅助用于极少数必要场景中。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-traditional-curve/arkts-traditional-curve.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-traditional-curve","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-traditional-curve/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-traditional-curve/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"传统曲线","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-traditional-curve","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"动画曲线概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-curve-overview/"},"next":{"title":"弹簧曲线","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-spring-curve/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-traditional-curve/arkts-traditional-curve.md


const frontMatter = {
	title: '传统曲线',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-traditional-curve',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '传统曲线';

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
        id: "传统曲线",
        children: "传统曲线"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传统曲线基于数学公式，创造形状符合开发者预期的动画曲线。以三阶贝塞尔曲线为代表，通过调整曲线控制点，可以改变曲线形状，从而带来缓入、缓出等动画效果。对于同一条传统曲线，由于不具备物理含义，其形状不会因为用户行为发生任何改变，缺少物理动画的自然感和生动感。建议优先采用物理曲线创建动画，将传统曲线作为辅助用于极少数必要场景中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI提供了贝塞尔曲线、阶梯曲线等传统曲线接口，开发者可参照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve",
        children: "插值计算"
      }), "进行查阅。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传统曲线的示例和效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class TraditionalCurve {\n  public title: string;\n  public curve: Curve;\n  public color: Color | string;\n\n  constructor(title: string, curve: Curve, color: Color | string = '') {\n    this.title = title;\n    this.curve = curve;\n    this.color = color;\n  }\n}\n\nconst traditionalCurves: TraditionalCurve[] = [\n  new TraditionalCurve(' Linear', Curve.Linear, '#317AF7'),\n  new TraditionalCurve(' Ease', Curve.Ease, '#D94838'),\n  new TraditionalCurve(' EaseIn', Curve.EaseIn, '#DB6B42'),\n  new TraditionalCurve(' EaseOut', Curve.EaseOut, '#5BA854'),\n  new TraditionalCurve(' EaseInOut', Curve.EaseInOut, '#317AF7'),\n  new TraditionalCurve(' FastOutSlowIn', Curve.FastOutSlowIn, '#D94838')\n]\n\n@Entry\n@Component\nstruct CurveDemo {\n  @State dRotate: number = 0; // 旋转角度\n\n  build() {\n    Column() {\n      // 曲线图例\n      Grid() {\n        ForEach(traditionalCurves, (item: TraditionalCurve) => {\n          GridItem() {\n            Column() {\n              Row()\n                .width(30)\n                .height(30)\n                .borderRadius(15)\n                .backgroundColor(item.color)\n              Text(item.title)\n                .fontSize(15)\n                .fontColor(0x909399)\n            }\n            .width('100%')\n          }\n        })\n      }\n      .columnsTemplate('1fr 1fr 1fr')\n      .rowsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .padding(10)\n      .width('100%')\n      .height(300)\n      .margin({ top: 50 })\n\n      Stack() {\n        // 摆动管道\n        Row()\n          .width(290)\n          .height(290)\n          .border({\n            width: 15,\n            color: 0xE6E8EB,\n            radius: 145\n          })\n\n        ForEach(traditionalCurves, (item: TraditionalCurve) => {\n          // 小球\n          Column() {\n            Row()\n              .width(30)\n              .height(30)\n              .borderRadius(15)\n              .backgroundColor(item.color)\n          }\n          .width(20)\n          .height(300)\n          .rotate({ angle: this.dRotate })\n          .animation({\n            duration: 2000,\n            iterations: -1,\n            curve: item.curve,\n            delay: 100\n          })\n        })\n      }\n      .width('100%')\n      .height(200)\n      .onClick(() => {\n        this.dRotate ? null : this.dRotate = 360;\n      })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(13011)/* ["default"] */.A) + "",
        width: "334",
        height: "624"
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
13011(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477997-aa607e0f8534f4ebfd15315186ee4a3b.gif");

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