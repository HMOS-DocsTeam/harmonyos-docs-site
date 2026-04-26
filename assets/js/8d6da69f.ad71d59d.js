"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["11534"], {
423417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_multidimensional_nesting_scenario_multidimensional_nesting_md_8d6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-accessibility-kit-accessibility-approve-experience-improve-screen-reader-experience-scenario-multidimensional-nesting-scenario-multidimensional-nesting-md-8d6.json
var site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_multidimensional_nesting_scenario_multidimensional_nesting_md_8d6_namespaceObject = JSON.parse('{"id":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multidimensional-nesting/scenario-multidimensional-nesting","title":"多维嵌套场景","description":"设计场景","source":"@site/docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multidimensional-nesting/scenario-multidimensional-nesting.md","sourceDirName":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multidimensional-nesting","slug":"/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multidimensional-nesting/","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multidimensional-nesting/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"多维嵌套场景","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-multidimensional-nesting","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"禁用屏幕朗读焦点的场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-disable-screen-reading-focus/"},"next":{"title":"组合场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multicomponent/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multidimensional-nesting/scenario-multidimensional-nesting.md


const frontMatter = {
	title: '多维嵌套场景',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-multidimensional-nesting',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '多维嵌套场景';

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
        id: "多维嵌套场景",
        children: "多维嵌套场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设计场景",
      children: "设计场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用展示的是多维信息，还可能出现“嵌套组”的情况。在嵌套组中，应避免两个可获焦对象的功能或朗读内容产生重复。比如下图的天气卡片，时间和地点信息获取到焦点时，都是朗读的时间信息；不同焦点的重复朗读会额外增加用户的操作步骤，焦点控制杂乱，这些对同一个信息结构的完整描述应该统一标注在这几个子控件的父控件上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(924716)/* ["default"] */.A) + "",
        width: "295",
        height: "117"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct Rule_2_1_3 {\n  title: string = 'Rule 2.1.3'\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text('Incorrect behavior:') // 播报 \"Time Group 12:05 Beijing\" + \"12:05\" + \"Beijing\".\n          //继续下滑焦点可聚焦至子控件文本重复了两次。这是不正确的。\n          .width('100%')\n          .fontSize(12)\n          .fontColor(Color.Black)\n          .margin({bottom: 12})\n        Row(){\n          Text(\"12:05\") // time information\n            .fontSize(32)\n            .fontColor(Color.Red)\n            .fontWeight(FontWeight.Bold)\n            .textAlign(TextAlign.Center)\n            .margin({right: 20})\n\n          Text(\"Beijing\") // location information\n            .fontSize(20)\n            .fontColor(Color.Green)\n            .fontWeight(FontWeight.Bold)\n            .textAlign(TextAlign.Center)\n        }\n        .accessibilityText(\"Time Group\") // 时间信息、位置信息和此可访问性文本在获得焦点时被朗读。\n        // 带有时间信息的文本组件可聚焦并朗读\n        // 具有位置信息的文本组件可聚焦并朗读\n        .height(50)\n        .margin({bottom: 150})\n\n        Text('Correct behavior:') // 只朗读 \"07:05 Moscow\" ，不重复文本。是正确的。\n          .width('100%')\n          .fontSize(12)\n          .fontColor(Color.Black)\n          .margin({bottom: 12})\n        Row(){\n          Text(\"07:05\") // time information\n            .fontSize(32)\n            .fontColor(Color.Red)\n            .fontWeight(FontWeight.Bold)\n            .textAlign(TextAlign.Center)\n            .margin({right: 20})\n\n          Text(\"Moscow\") // location information\n            .fontSize(20)\n            .fontColor(Color.Green)\n            .fontWeight(FontWeight.Bold)\n            .textAlign(TextAlign.Center)\n        }\n        .height(50)\n        .accessibilityGroup(true) // 获取焦点时朗读时间和位置信息。\n        // 带有时间信息的文本组件无法聚焦和朗读\n        //具有位置信息的文本组件无法获得焦点并朗读\n      }\n      .alignItems(HorizontalAlign.Start)\n      .padding(10)\n    }\n    .title(this.title)\n  }\n}\n"
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
924716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797866-99ba7d3c4bde9f838654b70f9492593d.png");

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