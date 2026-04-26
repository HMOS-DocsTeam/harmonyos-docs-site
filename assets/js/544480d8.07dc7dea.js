"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["909113"], {
227179(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_side_menu_ui_design_side_menu_md_544_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-side-menu-ui-design-side-menu-md-544.json
var site_docs_ui_design_kit_guide_ui_design_side_menu_ui_design_side_menu_md_544_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-side-menu/ui-design-side-menu","title":"侧边栏菜单样式","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-side-menu/ui-design-side-menu.md","sourceDirName":"ui-design-kit-guide/ui-design-side-menu","slug":"/ui-design-kit-guide/ui-design-side-menu/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-side-menu/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"侧边栏菜单样式","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-side-menu","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置embed模式的侧边栏","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-sidebar/ui-design-sidebar-enbed-mode/"},"next":{"title":"设置页签栏的分割线","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-split-line/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-side-menu/ui-design-side-menu.md


const frontMatter = {
	title: '侧边栏菜单样式',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-side-menu',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '侧边栏菜单样式';

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
        id: "侧边栏菜单样式",
        children: "侧边栏菜单样式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) Beta1版本开始，新增支持设置侧边栏菜单样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdssidemenu/ui-design-hdssidemenu",
        children: "HdsSideMenu"
      }), "提供一种菜单栏样式组件。设置侧边栏对应的一级菜单和二级菜单，并显示其新消息数量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(399091)/* ["default"] */.A) + "",
        width: "251",
        height: "533"
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
            children: "import { HdsSideMenu, HdsSideMenuMainItem, HdsSideMenuSubItem, HdsSideMenuBadgeParam, HdsSideBar } from '@kit.UIDesignKit';\nimport { SymbolGlyphModifier } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置对应的一级菜单和二级菜单，并显示其新消息数量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct Index {\n  @Local showControlButton: boolean = true;\n  @Local sideBarMask: boolean = false;\n  @Local autoHide: boolean = true;\n  @Local barStateTypeText: string = \"Select BarState\";\n  @Local widthIndex: number = 0;\n  @Local badgeNumber: HdsSideMenuBadgeParam = { count: 50 };\n  @Local useTheme: boolean = false;\n  @Local selectedIndex: number = 2;\n  @Local selectedTransparency: number = 0.6;\n  @Local str: string = \"短信\";\n  @Local isShowSidebar: boolean = true;\n  listOptionsDefault?: HdsSideMenuMainItem[] = [\n    new HdsSideMenuMainItem(\n      {\n        symbol: new SymbolGlyphModifier($r('sys.symbol.ohos_folder_badge_plus')).fontSize(14),\n        label: $r('sys.string.TextView_engr_phone'),\n      }),\n    new HdsSideMenuMainItem({\n      icon: $r('sys.symbol.person_wave_3'),\n      label: 'Tuesday',\n      hdsSideMenuSubItem: [\n        new HdsSideMenuSubItem({ label: this.str, badge: this.badgeNumber })],\n    }),\n    new HdsSideMenuMainItem({\n      symbol: new SymbolGlyphModifier($r('sys.symbol.person_crop_circle_fill_1')),\n      label: 'Wednesday',\n    }),\n  ]\n  @Builder\n  SideBarPanelBuilder() {\n    Column() {\n      HdsSideMenu({\n        items: this.listOptionsDefault,\n        selectedIndex: this.selectedIndex,\n        $selectedIndex: (selectedIndex: number) => {\n          this.selectedIndex = selectedIndex;\n        },\n      })\n    }\n    .height('100%')\n  }\n  //右侧内容区\n  @Builder\n  ContentPanelBuilder() {\n    Column() {\n      Column() {\n        Button() {\n          SymbolGlyph(this.isShowSidebar ? $r('sys.symbol.open_sidebar') : $r('sys.symbol.close_sidebar'))\n            .fontWeight(FontWeight.Normal)\n            .fontSize($r('sys.float.ohos_id_text_size_headline7'))\n            .fontColor([$r('sys.color.ohos_id_color_titlebar_icon')])\n            .hitTestBehavior(HitTestMode.None)\n        }\n        .backgroundColor($r('sys.color.ohos_id_color_button_normal'))\n        .height(24)\n        .width(24)\n        .animation({ curve: Curve.Sharp, duration: 100 })\n        .onClick(() => {\n          this.isShowSidebar = !this.isShowSidebar;\n        })\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n  @BuilderParam sideBarBuilder: () => void = this.SideBarPanelBuilder\n  @BuilderParam contentBuilder: () => void = this.ContentPanelBuilder\n  @Builder\n  build() {\n    Column() {\n      HdsSideBar({\n        sideBarPanelBuilder: (): void => {\n          this.sideBarBuilder()\n        },\n        contentPanelBuilder: (): void => {\n          this.contentBuilder()\n        },\n        isShowSideBar: this.isShowSidebar,\n        $isShowSideBar: (isShowSidebar: boolean) => {\n          this.isShowSidebar = !isShowSidebar\n        },\n      })\n    }\n  }\n}\n"
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
399091(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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