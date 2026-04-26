"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["481910"], {
560080(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_dynamic_display_and_hiding_ui_design_navigation_dynamic_display_and_hiding_md_b5b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-navigation-ui-design-navigation-dynamic-display-and-hiding-ui-design-navigation-dynamic-display-and-hiding-md-b5b.json
var site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_dynamic_display_and_hiding_ui_design_navigation_dynamic_display_and_hiding_md_b5b_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-display-and-hiding/ui-design-navigation-dynamic-display-and-hiding","title":"标题栏动态显隐","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-display-and-hiding/ui-design-navigation-dynamic-display-and-hiding.md","sourceDirName":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-display-and-hiding","slug":"/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-display-and-hiding/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-display-and-hiding/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"标题栏动态显隐","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-dynamic-display-and-hiding","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置自定义区域","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-customized-area/"},"next":{"title":"半模态样式","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-half-modal-style/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-display-and-hiding/ui-design-navigation-dynamic-display-and-hiding.md


const frontMatter = {
	title: '标题栏动态显隐',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-dynamic-display-and-hiding',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '标题栏动态显隐';

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
        id: "标题栏动态显隐",
        children: "标题栏动态显隐"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)版本开始，导航组件新增支持设置标题栏动态显隐功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于实现标题栏在特定条件下自动显示或隐藏的效果，适用于需要节省屏幕空间的应用界面。当应用开发者需要动态隐藏标题栏时，可通过使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation#dynamichidetitlebar",
        children: "dynamicHideTitleBar"
      }), "属性实现该功能。在设置动态隐藏标题栏的前提下，才可进一步设置隐藏状态栏。隐藏状态栏表现为状态栏内容区颜色为透明，状态栏区域无模糊。仅在隐藏标题栏区域后，执行隐藏状态栏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(880180)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "317",
        height: "664"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { HdsNavigation, BottomBuilderShowType, HideMode, HdsNavigationAttribute, HdsNavigationTitleMode } from '@kit.UIDesignKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一级导航组件，通过设置dynamicHideTitleBar属性，可隐藏状态栏、标题区域、BottomBuilder区域。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  scroller: Scroller = new Scroller();\n  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];\n\n  @Builder\n  bottomBuilder() {\n    Column() {\n      Search({ placeholder: 'Search' })\n        .height(40)\n        .placeholderColor($r('sys.color.font_primary'))\n        .margin({ left: 16, right: 16 })\n    }\n    .width('100%')\n  }\n\n  build() {\n    HdsNavigation() { // 创建HdsNavigation组件\n      List({ space: 12, initialIndex: 0, scroller: this.scroller }) {\n        ForEach(this.arr, (item: number) => {\n          ListItem() {\n            Column() {\n              Row({ space: 8 }) {\n                Button() {\n                  SymbolGlyph($r('sys.symbol.wifi'))\n                    .fontColor([$r('sys.color.icon_on_primary')])\n                    .fontSize(24)\n                }\n                .width(35)\n                .height(35)\n\n                Text('list_' + item)\n                  .width('100%')\n                  .height(72)\n                  .fontSize(16)\n                  .fontWeight(500)\n              }\n\n              Divider().margin({ left: 40 })\n            }\n          }\n          .height(56)\n        }, (item: number) => item.toString())\n      }\n      .margin({ left: 16, right: 16 })\n      .clip(false) // 设置不对子组件超出当前组件范围外的区域进行裁剪，使内容区可以穿透到标题栏下方\n      .cachedCount(3, true) // 设置列表中ListItem/ListItemGroup的预加载数量，列表穿透到标题栏下方不会消失\n      .scrollBar(BarState.Off)\n      .edgeEffect(EdgeEffect.Spring, { alwaysEnabled: true })\n    }\n    .titleBar({\n      content: {\n        title: { mainTitle: 'MainTitle' },\n        // 设置HdsNavigation BottomBuilder区域，包括设置高度，显示类型\n        bottomBuilder: {\n          builder: (): void => this.bottomBuilder(),\n          height: 56,\n          showType: BottomBuilderShowType.DIRECTLY_SHOW\n        }\n      },\n      enableComponentSafeArea: true, // 将标题栏设置为组件级安全区，内容区可避让标题栏\n    })\n    .bindToScrollable([this.scroller]) // 绑定导航组件和可滚动容器组件\n    .titleMode(HdsNavigationTitleMode.MINI)\n    .hideBackButton(true)\n    // 设置HdsNavigation标题栏动态显隐，包括设置标题区域，bottomBuilder区域，状态栏区域是否动态隐藏，隐藏模式以及开始隐藏时内容区的滚动距离。\n    .dynamicHideTitleBar({\n      hideTitleArea: true,\n      hideBottomBuilder: true,\n      hideStatusBar: false,\n      mode: HideMode.SCROLL_UP_TO,\n      hideOffset: 10\n    })\n  }\n}\n"
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
880180(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438381-6b0f2f8f14b769374593e130c3108a09.gif");

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