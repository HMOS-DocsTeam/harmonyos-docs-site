"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["323155"], {
981391(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_actionbar_ui_design_actionbar_main_buttons_ui_design_actionbar_main_buttons_md_bef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-actionbar-ui-design-actionbar-main-buttons-ui-design-actionbar-main-buttons-md-bef.json
var site_docs_ui_design_kit_guide_ui_design_actionbar_ui_design_actionbar_main_buttons_ui_design_actionbar_main_buttons_md_bef_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-main-buttons/ui-design-actionbar-main-buttons","title":"设置有主按钮的组件","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-main-buttons/ui-design-actionbar-main-buttons.md","sourceDirName":"ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-main-buttons","slug":"/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-main-buttons/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-main-buttons/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"设置有主按钮的组件","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-actionbar-main-buttons","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置定时通知弹窗","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-snackbar/ui-design-snackbar-scheduled-notification/"},"next":{"title":"设置无主按钮的组件","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-without-master-button/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-main-buttons/ui-design-actionbar-main-buttons.md


const frontMatter = {
	title: '设置有主按钮的组件',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-actionbar-main-buttons',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置有主按钮的组件';

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
        id: "设置有主按钮的组件",
        children: "设置有主按钮的组件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) Beta1版本开始，新增支持设置有主按钮的组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsactionbar/ui-design-hdsactionbar",
        children: "HdsActionBar"
      }), "组件支持多个按钮的样式。当应用开发者需要多个按钮并且有主按钮，支持展开和收缩的动效时，可以通过设置主按钮配置样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(757846)/* ["default"] */.A) + "",
        width: "292",
        height: "145"
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
            children: "import { HdsActionBar, ActionBarButton, ActionBarStyle } from '@kit.UIDesignKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建左边的按钮数组startButtons，创建右边的按钮数组endButtons，创建主按钮primaryButton，设置isExpand初始值是true表示HdsActionBar的初始状态是展开状态，点击主按钮会收起，再次点击可以展开。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct TestActionBar {\n  @Local isExpand: boolean = true;\n\n  @Local isPrimaryIconChanged: boolean = false;\n\n  @Local primaryHoverTips: ResourceStr = '开始';\n\n  build() {\n    Column() {\n      HdsActionBar({\n        startButtons: [new ActionBarButton({\n          baseIcon: $r('sys.symbol.stopwatch_fill')\n        })],\n        endButtons: [new ActionBarButton({\n          baseIcon: $r('sys.symbol.mic_fill')\n        })],\n        primaryButton: new ActionBarButton({\n          baseIcon: $r('sys.symbol.plus'),\n          altIcon: $r('sys.symbol.play_fill'),\n          onClick: () => {\n            this.isExpand = !this.isExpand;\n            this.isPrimaryIconChanged = !this.isPrimaryIconChanged;\n            if (this.isPrimaryIconChanged) {\n              this.primaryHoverTips = '暂停';\n            } else {\n              this.primaryHoverTips = '开始';\n            }\n          },\n          hoverTips: this.primaryHoverTips\n        }),\n        actionBarStyle: new ActionBarStyle({\n          isPrimaryIconChanged: this.isPrimaryIconChanged\n        }),\n        isExpand: this.isExpand!!\n      })\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xF1F3F5)\n    .justifyContent(FlexAlign.Center)\n    .alignItems(HorizontalAlign.Center)\n  }\n}\n"
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
757846(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438393-add6066db0dbbd2d38da28142590fca6.gif");

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