"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["59718"], {
638527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_sidebar_ui_design_sidebar_enbed_mode_ui_design_sidebar_enbed_mode_md_b55_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-sidebar-ui-design-sidebar-enbed-mode-ui-design-sidebar-enbed-mode-md-b55.json
var site_docs_ui_design_kit_guide_ui_design_sidebar_ui_design_sidebar_enbed_mode_ui_design_sidebar_enbed_mode_md_b55_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-sidebar/ui-design-sidebar-enbed-mode/ui-design-sidebar-enbed-mode","title":"设置embed模式的侧边栏","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-sidebar/ui-design-sidebar-enbed-mode/ui-design-sidebar-enbed-mode.md","sourceDirName":"ui-design-kit-guide/ui-design-sidebar/ui-design-sidebar-enbed-mode","slug":"/ui-design-kit-guide/ui-design-sidebar/ui-design-sidebar-enbed-mode/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-sidebar/ui-design-sidebar-enbed-mode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"设置embed模式的侧边栏","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-sidebar-enbed-mode","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置overlay模式的侧边栏","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-sidebar/ui-design-sidebar-overlay-mode/"},"next":{"title":"侧边栏菜单样式","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-side-menu/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-sidebar/ui-design-sidebar-enbed-mode/ui-design-sidebar-enbed-mode.md


const frontMatter = {
	title: '设置embed模式的侧边栏',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-sidebar-enbed-mode',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置embed模式的侧边栏';

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
        id: "设置embed模式的侧边栏",
        children: "设置embed模式的侧边栏"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) Beta1版本开始，新增支持设置embed模式的侧边栏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdssidebar/ui-design-hdssidebar",
        children: "HdsSideBar"
      }), "提供可以显示和隐藏的侧边栏容器，通过子组件定义侧边栏和内容区，第一个子组件表示侧边栏，第二个子组件表示内容区，通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/grid-and-column-layout/ts-container-sidebarcontainer/ts-container-sidebarcontainer#sidebarcontainertype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "sideBarContainerType"
      }), "的值为SideBarContainerType.Embed，使得当前HdsSideBar为嵌入样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(742572)/* ["default"] */.A) + "",
        width: "525",
        height: "348"
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
            children: "import { HdsSideBar } from '@kit.UIDesignKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置图片。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将图片资源，放到entry/src/main/resources/base/media下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(326787)/* ["default"] */.A) + "",
            width: "479",
            height: "178"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建HdsSideBar侧边栏组件，设置展开模式为embed。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct Index {\n  @Local isSideBarContainerMask: boolean = true;\n  @Local blankHeight: number = 48;\n  @Local isAutoHide: boolean = false;\n  @Local isShowSidebar: boolean = true;\n  @Local triggerValueReplace: number = 0;\n  //左侧侧边栏区\n  @Builder\n  SideBarPanelBuilder() {\n    Column() {\n      Blank().height(this.blankHeight)\n      Text('HDSSideBar Menu 1')\n        .fontSize(14)\n      Text('HDSSideBar Menu 2')\n        .fontSize(14)\n    }\n    .width('100%')\n    .height('100%')\n  }\n  //右侧内容区\n  @Builder\n  ContentPanelBuilder() {\n    Column(){\n      Blank().height(this.blankHeight)\n      Image($r('app.media.view')) // view为自定义资源，开发者需替换本地资源\n        .width('80%')\n        .height('50%')\n        .margin({ top: 8 })\n        .padding({\n          right: '16vp',\n          left: '16vp',\n          bottom: '16vp',\n        })\n        .borderRadius(8)\n      Column() {\n        Text('HDSSideBar content text1')\n          .fontSize(14)\n        Text('HDSSideBar content text2')\n          .fontSize(14)\n      }\n      Button() {\n        SymbolGlyph(this.isShowSidebar ? $r('sys.symbol.open_sidebar') : $r('sys.symbol.close_sidebar'))\n          .fontWeight(FontWeight.Normal)\n          .fontSize($r('sys.float.ohos_id_text_size_headline7'))\n          .fontColor([$r('sys.color.ohos_id_color_titlebar_icon')])\n          .hitTestBehavior(HitTestMode.None)\n      }\n      .id('side_bar_button')\n      .backgroundColor($r('sys.color.ohos_id_color_button_normal'))\n      .height(24)\n      .width(24)\n      .animation({ curve: Curve.Sharp, duration: 100 })\n      .onClick(() => {\n        this.isShowSidebar = !this.isShowSidebar;\n      })\n    }\n  }\n  @BuilderParam contentBuilder: () => void = this.ContentPanelBuilder\n  @BuilderParam sideBarBuilder: () => void = this.SideBarPanelBuilder\n  @Builder\n  HDSSideBarBuilder() {\n    HdsSideBar({\n      sideBarPanelBuilder: (): void => {\n        this.sideBarBuilder()\n      },\n      contentPanelBuilder: (): void => {\n        this.contentBuilder()\n      },\n      autoHide: this.isAutoHide,\n      contentAreaMask: this.isSideBarContainerMask,\n      sideBarContainerType: SideBarContainerType.Embed,\n      isShowSideBar: this.isShowSidebar,\n      $isShowSideBar: (isShowSidebar: boolean) => {\n        this.isShowSidebar = !isShowSidebar\n      },\n    })\n  }\n  @Builder\n  build() {\n    Stack() {\n      this.HDSSideBarBuilder()\n    }\n  }\n}\n"
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
742572(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798690-f1f700248c89c5c371f1f82e5fe00742.png");

},
326787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438385-38e3669bc5b5b8c9e567e204bfcb8e2a.png");

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