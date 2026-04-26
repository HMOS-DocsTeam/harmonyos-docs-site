"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["42745"], {
560676(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_multicomponent_scenario_multicomponent_md_410_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-accessibility-kit-accessibility-approve-experience-improve-screen-reader-experience-scenario-multicomponent-scenario-multicomponent-md-410.json
var site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_multicomponent_scenario_multicomponent_md_410_namespaceObject = JSON.parse('{"id":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multicomponent/scenario-multicomponent","title":"组合场景","description":"设计场景","source":"@site/docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multicomponent/scenario-multicomponent.md","sourceDirName":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multicomponent","slug":"/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multicomponent/","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multicomponent/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"组合场景","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-multicomponent","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"多维嵌套场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multidimensional-nesting/"},"next":{"title":"按钮标注场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-button-annotation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multicomponent/scenario-multicomponent.md


const frontMatter = {
	title: '组合场景',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-multicomponent',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '组合场景';

const assets = {

};



const toc = [{
  "value": "设计场景",
  "id": "设计场景",
  "level": 2
}, {
  "value": "开发实例",
  "id": "开发实例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "组合场景",
        children: "组合场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设计场景",
      children: "设计场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在一些场景中，一个功能上完整的UI对象可能是由若干个更小的UI组件组合而成的。若每一个小的UI组件都可以获焦并朗读，则会造成信息冗余和效率降低。同时由于可聚焦的组件过多过细，也会影响触摸浏览时走焦的性能体验。在这种情况下，将它们在功能或语义上聚合成一个自然组并作为一个独立可获焦的UI元素来向视障用户表达内容更加合理，且更加高效。总体原则是：对于表示同一个对象信息的多个组件，需要进行组合标注，对外只暴露一个无障碍焦点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(584662)/* ["default"] */.A) + "",
        width: "361",
        height: "393"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下，可以将多个控件设置为一个组，通过对组设置朗读标签，达到整组播报的效果，组内的子控件设置不可获取焦点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct Rule_2_1_4 {\n  title: string = 'Rule 2.1.4'\n\n  build() {\n    NavDestination() {\n      Column() {\n\n        Row() {\n          //默认只有子组件才能获取焦点\n          //日期、天气、温度等信息在每个组件独立获取焦点时分别朗读\n          //在组合式组件规范里是不正确的。\n          Text(\"23 Dec 2023\") // 日期信息。组件可独立对焦和朗读\n            .fontSize(32)\n            .fontColor(Color.Red)\n            .fontWeight(FontWeight.Bold)\n            .textAlign(TextAlign.Center)\n            .margin({ right: 20 })\n\n          Column() // 天气信息。组件可独立对焦和朗读\n            .backgroundColor(Color.Blue)\n            .width(50)\n            .height(50)\n            .accessibilityText(\"Snow\") // 当该组件被屏幕阅读器选中时，该组件不包含文本信息，因此将读取此文本\n            .margin({ right: 20 })\n\n          Text(\"-1\") // 温度信息。组件可独立对焦和朗读\n            .fontSize(20)\n            .fontColor(Color.Green)\n            .fontWeight(FontWeight.Bold)\n            .textAlign(TextAlign.Center)\n        }\n        .height(50)\n        .margin({ bottom: 20 })\n\n        Row() {\n          //因为accessibilityGroup属性设置为true，子组件无法获取焦点。\n          //获取焦点时，日期、天气、温度信息一起朗读\n          //此时只有Row可以获取焦点，这是符合组合式组件规范的。\n          Text(\"24 Dec 2023\") //日期信息。组件无法聚焦，无法朗读，因为父组件的accessibilityGroup属性设置为true\n            .fontSize(32)\n            .fontColor(Color.Red)\n            .fontWeight(FontWeight.Bold)\n            .textAlign(TextAlign.Center)\n            .margin({ right: 20 })\n\n          Column() //天气信息组件无法聚焦，无法朗读，因为父组件的accessibilityGroup为true\n            .backgroundColor(Color.Yellow)\n            .width(50)\n            .height(50)\n            .accessibilityText(\"Sunny\") // 组件不包含文本信息，当组件被屏幕阅读器选中时，因此将读取此文本\n            .margin({ right: 20 })\n\n          Text(\"-7\") // //温度信息。组件无法聚焦，无法朗读因为父组件的accessibilityGroup为true\n            .fontSize(20)\n            .fontColor(Color.Green)\n            .fontWeight(FontWeight.Bold)\n            .textAlign(TextAlign.Center)\n        }\n        .height(50)\n        .margin({ bottom: 20 })\n        .accessibilityGroup(true) // 将accessibilityGroup属性设置为true\n      }\n      .alignItems(HorizontalAlign.Start)\n      .padding(10)\n    }\n    .title(this.title)\n  }\n}\n"
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
584662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437561-1b206ad527d2c8d21d3ab315b25a02ea.png");

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