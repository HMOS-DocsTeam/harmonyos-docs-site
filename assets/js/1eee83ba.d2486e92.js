"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["304856"], {
289(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_app_test_ide_app_analyzer_appendix_ide_app_analyzer_rules_ide_render_node_limit_0430_ide_render_node_limit_0430_md_1ee_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-app-test-ide-app-analyzer-appendix-ide-app-analyzer-rules-ide-render-node-limit-0430-ide-render-node-limit-0430-md-1ee.json
var site_docs_ide_app_test_ide_app_analyzer_appendix_ide_app_analyzer_rules_ide_render_node_limit_0430_ide_render_node_limit_0430_md_1ee_namespaceObject = JSON.parse('{"id":"ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-render-node-limit-0430/ide-render-node-limit-0430","title":"节点数超过500过多","description":"如果使用DevEco Studio 6.0.1 Beta1以下版本，规则名称为：图形渲染服务处理节点数小于500。","source":"@site/docs/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-render-node-limit-0430/ide-render-node-limit-0430.md","sourceDirName":"ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-render-node-limit-0430","slug":"/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-render-node-limit-0430/","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-render-node-limit-0430/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"节点数超过500过多","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-render-node-limit-0430","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"后台CPU占用峰值","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-background-cpu-usage-0420/"},"next":{"title":"启动加载完成快","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-quick-completion-for-boot/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-render-node-limit-0430/ide-render-node-limit-0430.md


const frontMatter = {
	title: '节点数超过500过多',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-render-node-limit-0430',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '节点数超过500过多';

const assets = {

};



const toc = [{
  "value": "规则详情",
  "id": "规则详情",
  "level": 2
}, {
  "value": "检测逻辑",
  "id": "检测逻辑",
  "level": 2
}, {
  "value": "计算逻辑",
  "id": "计算逻辑",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "节点数超过500过多",
        children: "节点数超过500过多"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果使用DevEco Studio 6.0.1 Beta1以下版本，规则名称为：图形渲染服务处理节点数小于500。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则详情",
      children: "规则详情"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "后端Render Server在每帧数据里处理的节点数不应该超过500，否则会造成CPU使用过高，引发帧时延过高，从而导致丢帧。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "检测逻辑",
      children: "检测逻辑"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开滑动或者点击操作对应的trace。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "滑动场景查找滑动泳道："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "H:APP_LIST_FLING"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "H:APP_SWIPER_SCROLL"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "H:WEB_LIST_FLING"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "点击转场场景查找泳道："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "H:ABILITY_OR_PAGE_SWITCH"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "H:APP_TRANSITION_FROM_OTHER_APP"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "H:APP_TRANSITION_TO_OTHER_APP"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "H:APP_SWIPER_NO_ANIMATION_SWITCH"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "H:APP_TABS_NO_ANIMATION_SWITCH"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "H:APP_TABS_FLING"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以H:APP_LIST_FLING泳道为例，如下图："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在泳道时序范围内，每一个RenderFrame为一帧，找到这一帧所有的ProcessedNodes字段，提取节点数累加求和（每一帧可能对应多个ProcessedNodes，所以需要累加求和），即每帧渲染的节点数 = Σ ProcessedNodes。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(915689)/* ["default"] */.A) + "",
            width: "1443",
            height: "459"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "计算逻辑",
      children: "计算逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每帧渲染的节点数小于等于500。"
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
915689(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753748-c5b77b46dbaea3b1c675bdb80c165769.png");

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