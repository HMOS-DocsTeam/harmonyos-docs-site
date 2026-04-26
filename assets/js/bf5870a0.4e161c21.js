"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["317219"], {
210436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_icon_type_ui_design_navigation_icon_type_md_bf5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-navigation-ui-design-navigation-icon-type-ui-design-navigation-icon-type-md-bf5.json
var site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_icon_type_ui_design_navigation_icon_type_md_bf5_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-icon-type/ui-design-navigation-icon-type","title":"图标类型设置","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-icon-type/ui-design-navigation-icon-type.md","sourceDirName":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-icon-type","slug":"/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-icon-type/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-icon-type/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"图标类型设置","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-icon-type","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"半模态样式","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-half-modal-style/"},"next":{"title":"设置应用内多窗","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-set-multi-window/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-icon-type/ui-design-navigation-icon-type.md


const frontMatter = {
	title: '图标类型设置',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-icon-type',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '图标类型设置';

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
        id: "图标类型设置",
        children: "图标类型设置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)版本开始，导航组件新增了对文本型与图片型图标类型的支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用开发者需要配置图片型图标，或者使用普通文字型图标、单字图标时，可通过设置titleBar图标内容配置中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation#hdsnavigationiconoptions",
        children: "type"
      }), "属性实现该功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["图片型图标(", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation#iconstylemode",
        children: "IconStyleMode.LARGE"
      }), ")：适用于需要展示完整图像的场景，例如应用的Logo、用户头像、宣传图或自定义图形按钮。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["普通文字型图标(", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation#textstylemode",
        children: "TextStyleMode.NORMAL"
      }), ")：常规的文本按钮，适用于功能选项、操作按钮等需要清晰表达文本含义的场景。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单字图标(", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation#textstylemode",
        children: "TextStyleMode.SINGLE_CHARACTER"
      }), ")：适用于需要节省空间的紧凑布局，常用于快速操作入口，建议仅在单个文字或字母的场景使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(549074)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1316",
        height: "243"
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
            children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { TextStyleMode, IconStyleMode, HdsNavigation, HdsNavigationAttribute, HdsNavigationTitleMode } from '@kit.UIDesignKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一级导航组件，通过配置titleBar中的menu上的type属性，实现文字型图标以及图片型图标大小设置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  build() {\n    HdsNavigation() { // 创建HdsNavDestination组件\n    }\n    .titleBar({\n      content: {\n        title: { mainTitle: '标题' },\n        subIcon: {\n          content: {\n            // 设置用户头像\n            icon: $r('app.media.contacts'), // contacts为自定义资源，开发者需替换本地资源\n            type: IconStyleMode.LARGE,\n            label: 'subIcon', // 无障碍播报内容\n            isEnabled: true,\n            action: () => {\n            },\n          }\n        },\n        menu: {\n          // 设置HdsNavigation菜单内容\n          value: [{\n            content: {\n              // 设置第一个菜单项内容，设置为普通文本按钮\n              label: '文本',\n              type: TextStyleMode.NORMAL,\n              isEnabled: true,\n              componentId: 'menu_1',\n              action: () => {\n              },\n            }\n          }, {\n            content: {\n              // 设置第二个菜单项内容，设置为单字按钮\n              label: '单',\n              type: TextStyleMode.SINGLE_CHARACTER,\n              isEnabled: true,\n              componentId: 'menu_2',\n              action: () => {\n              },\n            }\n          }, {\n            content: {\n              // 设置第三个菜单项内容，设置为图标按钮\n              label: 'largeIcon',\n              icon: $r('sys.symbol.AI_search'),\n              type: IconStyleMode.NORMAL,\n              isEnabled: true,\n              componentId: 'menu_3',\n              action: () => {\n              },\n            }\n          }],\n          maxCount: 3 // 最大菜单显示个数配置\n        },\n      }\n    })\n    .titleMode(HdsNavigationTitleMode.MINI)\n    .hideBackButton(true)\n  }\n}\n"
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
549074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478337-a4270ee5a9f69a8cbf03a747f7bf7d00.jpg");

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