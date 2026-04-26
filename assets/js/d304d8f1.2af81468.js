"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["38200"], {
882213(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_message_reminder_ui_design_navigation_message_reminder_md_d30_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-navigation-ui-design-navigation-message-reminder-ui-design-navigation-message-reminder-md-d30.json
var site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_message_reminder_ui_design_navigation_message_reminder_md_d30_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-message-reminder/ui-design-navigation-message-reminder","title":"设置信息提醒","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-message-reminder/ui-design-navigation-message-reminder.md","sourceDirName":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-message-reminder","slug":"/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-message-reminder/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-message-reminder/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"设置信息提醒","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-message-reminder","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置动态模糊样式","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur/"},"next":{"title":"设置自定义区域","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-customized-area/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-message-reminder/ui-design-navigation-message-reminder.md


const frontMatter = {
	title: '设置信息提醒',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-message-reminder',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置信息提醒';

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
        id: "设置信息提醒",
        children: "设置信息提醒"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.0(18)版本开始，导航组件新增支持菜单栏设置信息提醒能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用开发者需要在导航组件菜单项右上角附加消息提醒时，可以通过设置标题栏菜单中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation#hdsnavigationbadgeiconoptions",
        children: "badge"
      }), "属性，实现信息提醒能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(390726)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1440",
        height: "459"
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
            children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { HdsNavigation, HdsNavigationAttribute, HdsNavigationTitleMode } from '@kit.UIDesignKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一级导航组件，通过配置titleBar中menu的badge属性，设置信息提醒样式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  build() {\n    HdsNavigation() { // 创建HdsNavigation组件\n    }\n    .titleBar({\n      content: {\n        // HdsNavigation标题栏内容设置\n        menu: {\n          // HdsNavigation标题栏菜单区域内容设置\n          value: [{\n            content: {\n              // 第一个菜单项内容设置\n              label: 'menu1',\n              icon: $r('sys.symbol.AI_search'),\n              isEnabled: true,\n            },\n            badge: {\n              // 第一个菜单项信息提醒设置\n              count: 1,\n            }\n          }, {\n            content: {\n              // 设置第一个菜单项内容，设置为普通文本按钮\n              label: 'menu2',\n              icon: $r('sys.symbol.wifi'),\n              isEnabled: true,\n              componentId: 'menu_1',\n              action: () => {\n              },\n            },\n            badge: {\n              // 第二个菜单项信息提醒设置\n              value: '消息'\n            }\n          }]\n        },\n        title: { mainTitle: 'MainTitle' },\n      }\n    })\n    .titleMode(HdsNavigationTitleMode.MINI)\n    .hideBackButton(true)\n  }\n}\n"
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
390726(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958334-0a35fc5a08701a4bca7c5b05660ceb06.png");

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