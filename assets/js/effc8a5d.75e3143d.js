"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["737850"], {
670649(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_half_modal_style_ui_design_navigation_half_modal_style_md_eff_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-navigation-ui-design-navigation-half-modal-style-ui-design-navigation-half-modal-style-md-eff.json
var site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_half_modal_style_ui_design_navigation_half_modal_style_md_eff_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-half-modal-style/ui-design-navigation-half-modal-style","title":"半模态样式","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-half-modal-style/ui-design-navigation-half-modal-style.md","sourceDirName":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-half-modal-style","slug":"/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-half-modal-style/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-half-modal-style/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"半模态样式","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-half-modal-style","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"标题栏动态显隐","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-display-and-hiding/"},"next":{"title":"图标类型设置","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-icon-type/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-half-modal-style/ui-design-navigation-half-modal-style.md


const frontMatter = {
	title: '半模态样式',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-half-modal-style',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '半模态样式';

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
        id: "半模态样式",
        children: "半模态样式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)版本开始，导航组件新增支持半模态中的标题栏样式，并在该样式下支持标题栏模糊效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于半模态弹窗中使用导航组件场景。通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation#hdsnavigationtitlemode",
        children: "HdsNavigationTitleMode"
      }), "为MODAL可以实现标题栏半模态样式及动态模糊。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(7218)/* ["default"] */.A) + "",
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
            children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { IconStyleMode, HdsNavigationAttribute, HdsNavigation, HdsNavigationTitleMode } from '@kit.UIDesignKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一级导航组件，通过设置titleMode属性为HdsNavigationTitleMode.MODAL实现标题栏半模态样式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct SheetTransitionExample {\n  @State isShow: boolean = false;\n  scroller: Scroller = new Scroller();\n\n  @Builder\n  HdsNavigationBuilder() {\n    HdsNavigation() {\n      Scroll(this.scroller) {\n        Image($r('app.media.scenery2'))\n          .height('100%')\n      }\n      .clip(false) // 设置不对子组件超出当前组件范围外的区域进行裁剪，使内容区可以穿透到标题栏下方\n      .scrollBar(BarState.Off)\n      .edgeEffect(EdgeEffect.Spring, { alwaysEnabled: true })\n    }\n    .titleBar({\n      enableComponentSafeArea: true, // 将标题栏设置为组件级安全区，内容区可避让标题栏\n      content: {\n        title: {\n          mainTitle: '壁纸',\n        },\n      // 设置HdsNavigation关闭按钮，与半模态按钮规格一致\n      menu: {\n        value: [{\n          content: {\n            icon: $r('sys.symbol.xmark'),\n            type: IconStyleMode.SMALL,\n            action: () => {\n              this.isShow = false;\n            },\n          }\n        }]\n      },\n    },\n  })\n  .titleMode(HdsNavigationTitleMode.MODAL) // 设置导航标题栏模式为半模态\n  .bindToScrollable([this.scroller]) // 绑定导航组件和可滚动容器组件\n  }\n\n  build() {\n    Column({ space: 8 }) {\n      Button('open modal')\n        .onClick(() => {\n          this.isShow = true;\n        })\n        .fontSize(20)\n        .margin(10)\n        .bindSheet($$this.isShow, this.HdsNavigationBuilder(), {\n          detents: [SheetSize.MEDIUM, SheetSize.LARGE, 200],\n          showClose: false, // 关闭半模态关闭按钮，推荐使用HdsNavigation关闭按钮\n          enableFloatingDragBar: true,\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
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
7218(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958336-e79c258984048af59990430e8161dde1.gif");

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