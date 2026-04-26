"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["534536"], {
984924(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_component_relocation_scenario_component_relocation_md_27b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-accessibility-kit-accessibility-approve-experience-improve-screen-reader-experience-scenario-component-relocation-scenario-component-relocation-md-27b.json
var site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_component_relocation_scenario_component_relocation_md_27b_namespaceObject = JSON.parse('{"id":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-component-relocation/scenario-component-relocation","title":"控件位置调整场景","description":"设计场景","source":"@site/docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-component-relocation/scenario-component-relocation.md","sourceDirName":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-component-relocation","slug":"/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-component-relocation/","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-component-relocation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"控件位置调整场景","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-component-relocation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"多语种场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-multilingual/"},"next":{"title":"重新设置新焦点位置的场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-focus-position-setting/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-component-relocation/scenario-component-relocation.md


const frontMatter = {
	title: '控件位置调整场景',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-component-relocation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '控件位置调整场景';

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
        id: "控件位置调整场景",
        children: "控件位置调整场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设计场景",
      children: "设计场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移动过程中需要实时播报即将移动到的位置，新位置的播报会打断老位置的播报，放置到确定位置后，需要再播报已经放置的位置信息，尽量保证视障用户耳朵听到的信息和我们通过眼睛看到的信息是一致的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，当前展示的网页书签被托起时，会播报”华为专区已托起”，移动的过程中，根据即将放置的位置播报“移动到华为手机服务|华为官网上面”。应用可调用主动播报的接口来进行主动播报。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(979180)/* ["default"] */.A) + "",
        width: "507",
        height: "310"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import accessibility from '@ohos.accessibility';\n\n@Entry\n@Component\nexport struct Rule_2_1_11 {\n  title: string = 'Rule 2.1.11';\n  eventInfo: accessibility.EventInfo = ({\n    type: 'announceForAccessibility',\n    bundleName: 'com.example.pagesrouter',\n    triggerAction: 'common',\n    textAnnouncedForAccessibility: '移动到华为手机服务|华为官网上面'\n  });\n\n  build() {\n    NavDestination() {\n      Column() {\n        Blank()\n        Button('button')\n          .accessibilityText('主动播报')\n          .align(Alignment.Center)\n          .fontSize(20)\n          .id('button1')\n          .onClick(() => {\n            accessibility.sendAccessibilityEvent(this.eventInfo).then(() => {\n              console.info(`Succeeded in send event, eventInfo is ${JSON.stringify(this.eventInfo)}`);\n            });\n          })\n        Blank()\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .title(this.title)\n  }\n}\n"
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
979180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797870-394212c6c6e5e785ca13ad543c19f2cf.png");

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