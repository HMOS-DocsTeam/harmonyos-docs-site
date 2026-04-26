"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["976966"], {
124691(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_attribute_arkts_custom_attribute_animation_arkts_custom_attribute_animation_md_181_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-attribute-arkts-custom-attribute-animation-arkts-custom-attribute-animation-md-181.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_attribute_arkts_custom_attribute_animation_arkts_custom_attribute_animation_md_181_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-custom-attribute-animation/arkts-custom-attribute-animation","title":"自定义属性动画","description":"属性动画是指当可动画属性的参数值发生变化时，在UI上产生的连续视觉效果。当参数值连续变化，且设置到可以引起UI发生变化的属性接口上时，即可实现属性动画。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-custom-attribute-animation/arkts-custom-attribute-animation.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-custom-attribute-animation","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-custom-attribute-animation/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-custom-attribute-animation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"自定义属性动画","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-custom-attribute-animation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"实现属性动画","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis/"},"next":{"title":"转场动画概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-transition-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-custom-attribute-animation/arkts-custom-attribute-animation.md


const frontMatter = {
	title: '自定义属性动画',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-custom-attribute-animation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义属性动画';

const assets = {

};



const toc = [{
  "value": "使用number数据类型和@AnimatableExtend装饰器改变Text组件宽度实现逐帧布局的效果",
  "id": "使用number数据类型和animatableextend装饰器改变text组件宽度实现逐帧布局的效果",
  "level": 2
}, {
  "value": "使用自定义数据类型和@AnimatableExtend装饰器改变图形形状",
  "id": "使用自定义数据类型和animatableextend装饰器改变图形形状",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义属性动画",
        children: "自定义属性动画"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "属性动画是指当可动画属性的参数值发生变化时，在UI上产生的连续视觉效果。当参数值连续变化，且设置到可以引起UI发生变化的属性接口上时，即可实现属性动画。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-animatable-extend",
        children: "@AnimatableExtend装饰器"
      }), "，用于自定义可动画属性接口。由于参数的数据类型必须具备一定程度的连续性，自定义可动画属性接口的参数类型仅支持number类型和实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-animatable-extend#animatablearithmetict%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
        children: "AnimatableArithmetic<T>接口"
      }), "的自定义类型。通过自定义可动画属性接口和可动画数据类型，在使用animateTo或animation执行动画时，通过逐帧回调函数修改不可动画属性接口的值，能够让不可动画属性接口实现动画效果。也可通过逐帧回调函数每帧修改可动画属性的值，实现逐帧布局的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用number数据类型和animatableextend装饰器改变text组件宽度实现逐帧布局的效果",
      children: "使用number数据类型和@AnimatableExtend装饰器改变Text组件宽度实现逐帧布局的效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 第一步：使用@AnimatableExtend装饰器，自定义可动画属性接口\n@AnimatableExtend(Text)\nfunction animatableWidth(width: number) {\n  .width(width) // 调用系统属性接口，逐帧回调函数每帧修改可动画属性的值，实现逐帧布局的效果。\n}\n\n@Entry\n@Component\nstruct AnimatablePropertyExample {\n  @State textWidth: number = 80; // 80: 初始文本宽度\n\n  build() {\n    Column() {\n      Text('AnimatableProperty')\n        .animatableWidth(this.textWidth) // 第二步：将自定义可动画属性接口设置到组件上\n        .animation({ duration: 2000, curve: Curve.Ease }) // 第三步:为自定义可动画属性接口绑定动画。\n      Button('Play')\n        .onClick(() => {\n          this.textWidth = this.textWidth == 80 ? 160 : 80; // 第四步：改变自定义可动画属性的参数，产生动画。\n        })\n    }\n    .width('100%')\n    .padding(10) // 10: 内边距\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(132524)/* ["default"] */.A) + "",
        width: "474",
        height: "217"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用自定义数据类型和animatableextend装饰器改变图形形状",
      children: "使用自定义数据类型和@AnimatableExtend装饰器改变图形形状"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "declare type Point = number[];\n\n// 定义可动画属性接口的参数类型，实现AnimatableArithmetic<T>接口中加法、减法、乘法和判断相等函数\nclass PointClass extends Array<number> {\n  constructor(value: Point) {\n    super(value[0], value[1]);\n  }\n\n  add(rhs: PointClass): PointClass {\n    let result: Point = new Array<number>() as Point;\n    for (let i = 0; i < 2; i++) { // 2: 二维坐标点\n      result.push(rhs[i] + this[i]);\n    }\n    return new PointClass(result);\n  }\n\n  subtract(rhs: PointClass): PointClass {\n    let result: Point = new Array<number>() as Point;\n    for (let i = 0; i < 2; i++) { // 2: 二维坐标点\n      result.push(this[i] - rhs[i]);\n    }\n    return new PointClass(result);\n  }\n\n  multiply(scale: number): PointClass {\n    let result: Point = new Array<number>() as Point;\n    for (let i = 0; i < 2; i++) { // 2: 二维坐标点\n      result.push(this[i] * scale);\n    }\n    return new PointClass(result);\n  }\n}\n\n// 定义可动画属性接口的参数类型，实现AnimatableArithmetic<T>接口中加法、减法、乘法和判断相等函数\n// 模板T支持嵌套实现AnimatableArithmetic<T>的类型\nclass PointVector extends Array<PointClass> implements AnimatableArithmetic<Array<Point>> {\n  constructor(initialValue: Array<Point>) {\n    super();\n    if (initialValue.length) {\n      initialValue.forEach((p: Point) => this.push(new PointClass(p)));\n    }\n  }\n\n  // implement the IAnimatableArithmetic interface\n  plus(rhs: PointVector): PointVector {\n    let result = new PointVector([]);\n    const len = Math.min(this.length, rhs.length);\n    for (let i = 0; i < len; i++) {\n      result.push(this[i].add(rhs[i]));\n    }\n    return result;\n  }\n\n  subtract(rhs: PointVector): PointVector {\n    let result = new PointVector([]);\n    const len = Math.min(this.length, rhs.length);\n    for (let i = 0; i < len; i++) {\n      result.push(this[i].subtract(rhs[i]));\n    }\n    return result;\n  }\n\n  multiply(scale: number): PointVector {\n    let result = new PointVector([]);\n    for (let i = 0; i < this.length; i++) {\n      result.push(this[i].multiply(scale));\n    }\n    return result;\n  }\n\n  equals(rhs: PointVector): boolean {\n    if (this.length !== rhs.length) {\n      return false;\n    }\n    for (let index = 0, size = this.length; index < size; ++index) {\n      if (this[index][0] !== rhs[index][0] || this[index][1] !== rhs[index][1]) {\n        return false;\n      }\n    }\n    return true;\n  }\n}\n\n// 自定义可动画属性接口\n@AnimatableExtend(Polyline)\nfunction animatablePoints(points: PointVector) {\n  .points(points);\n}\n\n@Entry\n@Component\nstruct AnimatedShape {\n  squareStartPointX: number = 75; // 75: 正方形起始点X坐标\n  squareStartPointY: number = 25; // 25: 正方形起始点Y坐标\n  squareWidth: number = 150; // 150: 正方形宽度\n  squareEndTranslateX: number = 50; // 50: 正方形结束位置X轴平移量\n  squareEndTranslateY: number = 50; // 50: 正方形结束位置Y轴平移量\n  @State pointVec1: PointVector = new PointVector([\n    [this.squareStartPointX, this.squareStartPointY],\n    [this.squareStartPointX + this.squareWidth, this.squareStartPointY],\n    [this.squareStartPointX + this.squareWidth, this.squareStartPointY + this.squareWidth],\n    [this.squareStartPointX, this.squareStartPointY + this.squareWidth]\n  ]);\n  @State pointVec2: PointVector = new PointVector([\n    [this.squareStartPointX + this.squareEndTranslateX, this.squareStartPointY + this.squareStartPointY],\n    [this.squareStartPointX + this.squareWidth + this.squareEndTranslateX,\n      this.squareStartPointY + this.squareStartPointY],\n    [this.squareStartPointX + this.squareWidth, this.squareStartPointY + this.squareWidth],\n    [this.squareStartPointX, this.squareStartPointY + this.squareWidth]\n  ]);\n  @State color: Color = Color.Green;\n  @State fontSize: number = 20.0; // 20.0: 字体大小\n  @State polyline1Vec: PointVector = this.pointVec1;\n  @State polyline2Vec: PointVector = this.pointVec2;\n\n  build() {\n    Row() {\n      Polyline()\n        .width(300) // 300: 折线宽度\n        .height(200) // 200: 折线高度\n        .backgroundColor('#0C000000') // 0C000000: 背景颜色（黑色带透明度）\n        .fill('#317AF7') // 317AF7: 填充颜色（蓝色）\n        .animatablePoints(this.polyline1Vec)\n        .animation({ duration: 2000, delay: 0, curve: Curve.Ease }) // 2000: 动画持续时间（毫秒），0: 动画延迟时间\n        .onClick(() => {\n          if (this.polyline1Vec.equals(this.pointVec1)) {\n            this.polyline1Vec = this.pointVec2;\n          } else {\n            this.polyline1Vec = this.pointVec1;\n          }\n        })\n    }\n    .width('100%').height('100%').justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(160076)/* ["default"] */.A) + "",
        width: "513",
        height: "538"
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
160076(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957982-86acc6ca2ea6d3833be115e5b862b5ea.gif");

},
132524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438027-967b9d22c4b81286933ad890ddcccecd.gif");

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