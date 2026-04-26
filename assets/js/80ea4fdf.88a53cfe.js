"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["717682"], {
694009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_hds_tabs_ui_design_hds_tabs_split_line_ui_design_hds_tabs_split_line_md_80e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-hds-tabs-ui-design-hds-tabs-split-line-ui-design-hds-tabs-split-line-md-80e.json
var site_docs_ui_design_kit_guide_ui_design_hds_tabs_ui_design_hds_tabs_split_line_ui_design_hds_tabs_split_line_md_80e_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-split-line/ui-design-hds-tabs-split-line","title":"设置页签栏的分割线","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-split-line/ui-design-hds-tabs-split-line.md","sourceDirName":"ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-split-line","slug":"/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-split-line/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-split-line/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"设置页签栏的分割线","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-hds-tabs-split-line","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"侧边栏菜单样式","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-side-menu/"},"next":{"title":"设置页签栏的模糊样式","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-fuzzy-style/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-hds-tabs/ui-design-hds-tabs-split-line/ui-design-hds-tabs-split-line.md


const frontMatter = {
	title: '设置页签栏的分割线',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-hds-tabs-split-line',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置页签栏的分割线';

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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "设置页签栏的分割线",
        children: "设置页签栏的分割线"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20) Beta1版本开始，新增支持设置页签栏的分割线。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts-component/ui-design-hdstabs/ui-design-hdstabs",
        children: "HdsTabs"
      }), "容器组件扩展支持页签栏分割线常隐、常显和渐进显隐。当应用开发者需要分割线一直显示、一直隐藏或者内容区超过页签栏8vp后分割线完全消失时，可以通过设置HdsTabs组件的分割线的模式，同时也支持自定义分割线样式。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "常显"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "常隐"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "跟手"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束条件",
      children: "约束条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将页签栏置于容器的底部且支持模糊，即barPosition设置为BarPosition.End，vertical设置为false和barOverlap设置为true。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分割线模式设置为跟手滑动模式时，跟手滑动效果仅限支持滚动的通用接口的组件，其他类型组件由开发者自己实现。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跟手滑动效果依赖HdsTabs控制器绑定需要设置的list滑动控制器。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从6.0.2(22)版本开始，无需手动导入HdsTabsAttribute。具体请参考HdsTabs的导入模块说明。\nimport { HdsTabs, HdsTabsController, DividerMode, HdsTabsAttribute } from '@kit.UIDesignKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Hds一级容器组件，设置的Button可以切换分割线展示效果，分别是常显、常隐和跟手滑动效果。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "初始化list滑动控制器和HdsTabs控制器，将list滑动控制器绑定在HdsTabs控制器上，确保联动，否则跟手滑动没有渐变效果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "  private controller: HdsTabsController = new HdsTabsController();\n  listScroller0: ListScroller = new ListScroller();\n  listScroller1: ListScroller = new ListScroller();\n\n aboutToAppear(): void {\n    this.controller.bindScroller(0, this.listScroller0);\n    this.controller.bindScroller(1, this.listScroller1);\n  }\n\n  aboutToDisappear(): void {\n    this.controller.unbindScroller(this.listScroller0);\n    this.controller.unbindScroller(this.listScroller1);\n  }\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "设置页签栏置于容器的底部且支持模糊，否则跟手滑动没有渐变效果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: " .barOverlap(true)\n .barPosition(BarPosition.End)\n .vertical(false)\n .divider({\n   mode: DividerMode.FOLLOW_SCROLL,\n   style: {\n     color: Color.Black,\n     strokeWidth: 1,\n     startMargin: 0,\n     endMargin: 0\n   }\n })\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "跟手滑动效果仅限支持滚动的通用接口的组件，如List，Scroll等。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "HdsTabs({ controller: this.controller }) {\n        TabContent() {\n          List({ scroller: this.listScroller0 }) {} // listScroller是开发者设置的滑动控制器，list子组件可以自定义添加。\n        }\n        .tabBar({ icon: $r('app.media.startIcon'), text: '页签1' })\n        TabContent() {\n          List({ scroller: this.listScroller1 }) {}\n        }\n        .tabBar({ icon: $r('app.media.startIcon'), text: '页签2' })\n}\n"
              })
            }), "\n"]
          }), "\n"]
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