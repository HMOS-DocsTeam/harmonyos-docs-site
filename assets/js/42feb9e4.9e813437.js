"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["704079"], {
704742(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_snackbar_ui_design_snackbar_scheduled_notification_ui_design_snackbar_scheduled_notification_md_42f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-snackbar-ui-design-snackbar-scheduled-notification-ui-design-snackbar-scheduled-notification-md-42f.json
var site_docs_ui_design_kit_guide_ui_design_snackbar_ui_design_snackbar_scheduled_notification_ui_design_snackbar_scheduled_notification_md_42f_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-snackbar/ui-design-snackbar-scheduled-notification/ui-design-snackbar-scheduled-notification","title":"设置定时通知弹窗","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-snackbar/ui-design-snackbar-scheduled-notification/ui-design-snackbar-scheduled-notification.md","sourceDirName":"ui-design-kit-guide/ui-design-snackbar/ui-design-snackbar-scheduled-notification","slug":"/ui-design-kit-guide/ui-design-snackbar/ui-design-snackbar-scheduled-notification/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-snackbar/ui-design-snackbar-scheduled-notification/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"设置定时通知弹窗","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-snackbar-scheduled-notification","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置常驻通知弹窗","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-snackbar/ui-design-snackbar-resident-notification/"},"next":{"title":"设置有主按钮的组件","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-actionbar/ui-design-actionbar-main-buttons/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-snackbar/ui-design-snackbar-scheduled-notification/ui-design-snackbar-scheduled-notification.md


const frontMatter = {
	title: '设置定时通知弹窗',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-snackbar-scheduled-notification',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置定时通知弹窗';

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
        id: "设置定时通知弹窗",
        children: "设置定时通知弹窗"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) Beta1版本开始，新增支持设置定时通知弹窗。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdssnackbar/ui-design-hdssnackbar",
        children: "HdsSnackBar"
      }), "支持定时通知弹窗。当应用开发者需要定时通知提醒弹窗时，可以通过HdsSnackBar的show方法显示HdsSnackBar弹窗，设置duration是大于0的时间表示弹窗是定时消失的，默认定时时间是5000ms。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(62822)/* ["default"] */.A) + "",
        width: "315",
        height: "327"
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
            children: "import {\n  HdsSnackBar,\n  SnackBarIconOptions,\n  SnackBarMessageOptions,\n  SnackBarOperationOptions,\n  SnackBarStyleOptions,\n  SnackBarOperationType\n} from '@kit.UIDesignKit'\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建UIContext，创建HdsSnackBar对象hdsSnackBar，调用HdsSnackBar对象的show方法可以显示HdsSnackBar弹窗，入参是左侧图标icon、中间文本message、右侧操作区operation、样式style，其中右侧操作区设置类型是带有右箭头的文本按钮，其中style中设置duration是2000ms表示HdsSnackBar弹窗2秒后定时消失。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置arrowButtonId和nextFocusId两个属性，支持开发者自定义Tab键走焦能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct TestSnackBar02 {\n  uiContext: UIContext = this.getUIContext();\n  hdsSnackBar: HdsSnackBar = new HdsSnackBar(this.uiContext);\n  icon: SnackBarIconOptions = {\n    icon: $r('sys.symbol.checkmark_circle')\n  }\n  message: SnackBarMessageOptions = {\n    title: $r('sys.string.ohos_id_text_location_button_description_current_position'),\n    content: $r('sys.string.ohos_id_text_save_button_description_save')\n  }\n  operation: SnackBarOperationOptions = {\n    operationType: SnackBarOperationType.TEXT_WITH_ARROW,\n    content: $r('sys.string.ohos_id_text_save_button_description_save_image'),\n    arrowButtonId: 'snackBarArrowButton'\n  }\n  style: SnackBarStyleOptions = {\n    nextFocusId: 'button',\n    duration: 2000\n  }\n\n  build() {\n    Column() {\n      Blank()\n        .height(400)\n      Button('文字按钮和右箭头的SnackBar弹窗，2秒后定时消失')\n        .onClick(() => {\n          this.hdsSnackBar.show(this.icon, this.message, this.operation, this.style);\n        })\n        .id(\"button\")\n\n      Button('关注')\n        .nextFocus({\n          // 这里forward的id必须和SnackBarOperationOptions接口中传入的arrowButtonId相同\n          forward: 'snackBarArrowButton'\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xF1F3F5)\n  }\n}\n"
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
62822(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798698-b884f11ff40161519e48067d3cef03c5.gif");

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