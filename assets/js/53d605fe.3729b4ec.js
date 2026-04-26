"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["260584"], {
206331(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_hds_tabs_ui_design_hds_tabs_icon_bleed_substyle_ui_design_hds_tabs_icon_bleed_substyle_md_53d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-hds-tabs-ui-design-hds-tabs-icon-bleed-substyle-ui-design-hds-tabs-icon-bleed-substyle-md-53d.json
var site_docs_ui_design_kit_guide_ui_design_hds_tabs_ui_design_hds_tabs_icon_bleed_substyle_ui_design_hds_tabs_icon_bleed_substyle_md_53d_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-icon-bleed-substyle/ui-design-hds-tabs-icon-bleed-substyle","title":"设置页签的图标出血样式","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-icon-bleed-substyle/ui-design-hds-tabs-icon-bleed-substyle.md","sourceDirName":"ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-icon-bleed-substyle","slug":"/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-icon-bleed-substyle/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-icon-bleed-substyle/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"设置页签的图标出血样式","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-hds-tabs-icon-bleed-substyle","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置页签栏的模糊样式","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-fuzzy-style/"},"next":{"title":"设置侧边栏半屏居中对齐样式","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-sidebar-alignment-substyle/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-icon-bleed-substyle/ui-design-hds-tabs-icon-bleed-substyle.md


const frontMatter = {
	title: '设置页签的图标出血样式',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-hds-tabs-icon-bleed-substyle',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置页签的图标出血样式';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束条件",
  "id": "约束条件",
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
        id: "设置页签的图标出血样式",
        children: "设置页签的图标出血样式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) Beta1版本开始，新增支持设置页签的图标出血样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdstabs/ui-design-hdstabs",
        children: "HdsTabs"
      }), "容器组件扩展支持出血图标样式。当应用开发者需要tabBar内的页签高度超出tabBar时，可以通过设置对应页签的属性，添加出血效果的自定义组件，图标超出容器部分最大高度为4vp。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(216434)/* ["default"] */.A) + "",
        width: "377",
        height: "111"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束条件",
      children: "约束条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依赖页签栏位于容器底部，barPosition设置为BarPosition.End，vertical设置为false。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从6.0.2(22)版本开始，无需手动导入HdsTabsAttribute。具体请参考HdsTabs的导入模块说明。\nimport { HdsTabs, HdsTabsAttribute } from '@kit.UIDesignKit';\nimport { bleedIconStyle } from '@hms.hds.HdsStyle';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Hds一级容器组件，设置HdsTabs组件的子组件TabContent的tabBar样式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  build() {\n    Stack() {\n      HdsTabs() {\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Yellow)\n        }\n        .tabBar(bleedIconStyle(() => {\n          this.tabBuilder()\n        }))\n        TabContent() {\n          Column().width('100%').height('100%').backgroundColor(Color.Blue)\n        }\n        .tabBar(this.tabBuilder())\n      }\n      .vertical(false)\n      .barPosition(BarPosition.End)\n    }\n  }\n\n  @Builder\n  tabBuilder() {\n    Column() {\n      Image($r('app.media.startIcon'))\n        .width(48)\n        .height(48)\n        .borderRadius(24)\n    }\n  }\n}\n"
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
216434(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798694-d3d66af06dc89fa9465b6d6bd55fb210.png");

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