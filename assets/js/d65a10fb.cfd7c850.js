"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["61405"], {
958378(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_set_multi_window_ui_design_navigation_set_multi_window_md_d65_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-navigation-ui-design-navigation-set-multi-window-ui-design-navigation-set-multi-window-md-d65.json
var site_docs_ui_design_kit_guide_ui_design_navigation_ui_design_navigation_set_multi_window_ui_design_navigation_set_multi_window_md_d65_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-set-multi-window/ui-design-navigation-set-multi-window","title":"设置应用内多窗","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-set-multi-window/ui-design-navigation-set-multi-window.md","sourceDirName":"ui-design-kit-guide/ui-design-navigation/ui-design-navigation-set-multi-window","slug":"/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-set-multi-window/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-set-multi-window/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"设置应用内多窗","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-set-multi-window","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图标类型设置","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-icon-type/"},"next":{"title":"开发实例","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur-demo/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-set-multi-window/ui-design-navigation-set-multi-window.md


const frontMatter = {
	title: '设置应用内多窗',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-navigation-set-multi-window',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置应用内多窗';

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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "设置应用内多窗",
        children: "设置应用内多窗"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)版本开始，新增支持应用内多窗。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用开发者需要使用应用内多窗图标（分屏按钮）时，可通过配置titleBar中的menu的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdsnavigation/ui-design-hdsnavigation#hdsnavigationmenucontentoptions",
        children: "multiWindowEntryInAPPMenu"
      }), "属性实现该功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束条件",
      children: "约束条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "依赖全景多窗特性，只有当前设备及屏幕状态支持全景多窗，才支持设置此功能。目前支持全景多窗的设备形态有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "双折叠：展开态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三折叠：双屏态，三屏态的横屏态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "平板：横屏态。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于不支持的设备形态，该组件不可交互，不响应点击事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从6.0.2(22)版本开始，无需手动导入HdsNavigationAttribute。具体请参考HdsNavigation的导入模块说明。\nimport { HdsNavigation, HdsNavigationMenuContentOptions, HdsNavigationAttribute } from '@kit.UIDesignKit';\nimport { Want } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一级导航组件，通过配置titleBar中的menu上的multiWindowEntryInAPPMenu属性，实现应用内多窗图标设置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct MultiWindowEntryInAPPTest {\n  private want: Want = {\n    // 修改为当前应用的bundleName、moduleName、abilityName，启动应用内的UIAbility\n    bundleName: \"com.example.myapplication\",\n    moduleName: \"entry\",\n    abilityName: \"FuncAbility\",\n  }\n  @State menuContent: HdsNavigationMenuContentOptions = {\n    multiWindowEntryInAPPMenu: {\n      want: this.want,\n    },\n    maxCount: 3,\n    value: [\n      { content: { label: 'menu1', icon: $r('sys.symbol.search_things'), } },\n      { content: { label: 'menu2', icon: $r('sys.symbol.plus'), } }\n    ]\n  }\n\n  build() {\n    HdsNavigation() {\n      Stack() {\n        Text(\"Page1\")\n      }.alignContent(Alignment.Center)\n      .width(\"100%\")\n      .height(\"100%\")\n    }\n    .hideToolBar(false)\n    .navBarWidth('100%')\n    .titleBar({\n      content: {\n        title: {\n          mainTitle: \"Index\"\n        },\n        menu: this.menuContent\n      }\n    })\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(692467)/* ["default"] */.A) + "",
            width: "525",
            height: "571"
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
692467(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

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