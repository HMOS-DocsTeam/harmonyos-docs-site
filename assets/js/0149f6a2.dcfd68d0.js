"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["346623"], {
184369(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_disable_screen_reading_focus_scenario_disable_screen_reading_focus_md_014_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-accessibility-kit-accessibility-approve-experience-improve-screen-reader-experience-scenario-disable-screen-reading-focus-scenario-disable-screen-reading-focus-md-014.json
var site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_disable_screen_reading_focus_scenario_disable_screen_reading_focus_md_014_namespaceObject = JSON.parse('{"id":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-disable-screen-reading-focus/scenario-disable-screen-reading-focus","title":"禁用屏幕朗读焦点的场景","description":"设计场景","source":"@site/docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-disable-screen-reading-focus/scenario-disable-screen-reading-focus.md","sourceDirName":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-disable-screen-reading-focus","slug":"/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-disable-screen-reading-focus/","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-disable-screen-reading-focus/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"禁用屏幕朗读焦点的场景","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-disable-screen-reading-focus","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"标注屏幕朗读内容的场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-screen-reading/"},"next":{"title":"多维嵌套场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multidimensional-nesting/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-disable-screen-reading-focus/scenario-disable-screen-reading-focus.md


const frontMatter = {
	title: '禁用屏幕朗读焦点的场景',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-disable-screen-reading-focus',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '禁用屏幕朗读焦点的场景';

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
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "禁用屏幕朗读焦点的场景",
        children: "禁用屏幕朗读焦点的场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设计场景",
      children: "设计场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "装饰性的控件一般为分隔符、占位符和美化图标等，这类图形元素仅仅起到调整页面布局或装饰性效果，并不会向用户传达有效的信息或提供交互功能，删除后不影响指引用户体验。可以设置控件的无障碍组accessibilityGroup、无障碍重要性accessibilityLevel、组件可见性visibility等属性将其设置为无障碍不可聚焦，这样在屏幕朗读模式下控件就不会获取焦点和朗读。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过以下无障碍属性可以改变控件可聚焦属性："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "accessibilityGroup(true) 用于多个组件的组合，拼接所有子组件text文本并设置到无障碍组节点，除非子组件设置了accessibilityLevel为yes，否则子组件默认一定都不可聚焦。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "accessibilityLevel(\"no\")用于组件设置不可聚焦，忽略当前组件的文本属性和点击属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "accessibilityLevel(\"no-hide-descendants\")用于组件及其所有子组件设置不可聚焦，忽略当前组件及其所有子组件的文本属性和点击属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下代码同时显示“Broadcast”和“No broadcast”消息，但当ScreenReader处于“打开”状态时，message可被聚焦，但message1将不被聚焦。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct Rule_2_1_2 {\n  title: string = 'Rule 2.1.2'\n  @State message: string = 'Broadcast';\n  @State message1: string = 'No broadcast';\n\n  build() {\n    NavDestination() {\n      Column() {\n        Row() {\n          Text(this.message)\n            .fontSize(40)\n            .fontWeight(FontWeight.Bold)\n            .fontColor(Color.Blue)\n            .margin({\n              left: 40\n            })\n        }\n        .width('100%')\n        .height('50%')\n        Row() {\n          Text(this.message1)\n            .fontSize(40)\n            .fontWeight(FontWeight.Bold)\n            .fontColor(Color.Grey)\n            .margin({\n              left: 40\n            }).accessibilityLevel(\"no\") // use for component\n        }\n        //.accessibilityGroup(true)\n        //.accessibilityLevel(\"no-hide-descendants\") // use for container\n        // 可以使用这两行代替28行的accessibilityLevel(\"no\")\n        .width('100%')\n        .height('50%')\n      }\n      .height('100%')\n    }\n    .title(this.title)\n  }\n}\n"
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