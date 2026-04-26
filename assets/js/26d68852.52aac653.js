"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["888817"], {
945313(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_launch_faq_graphics_accelerate_launch_faq_4_graphics_accelerate_launch_faq_4_md_26d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-faq-graphics-accelerate-launch-faq-graphics-accelerate-launch-faq-4-graphics-accelerate-launch-faq-4-md-26d.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_launch_faq_graphics_accelerate_launch_faq_4_graphics_accelerate_launch_faq_4_md_26d_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-4/graphics-accelerate-launch-faq-4","title":"游戏调用UnityEngine.Application.Quit侧滑退出时出现黑屏现象，应该如何避免？","description":"需根据“退出后是否希望继续使用*秒级启动*能力”选择不同的退出策略：","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-4/graphics-accelerate-launch-faq-4.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-4","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-4/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-4/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"游戏调用UnityEngine.Application.Quit侧滑退出时出现黑屏现象，应该如何避免？","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-launch-faq-4","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"快速启动的游戏存在三方SDK功能异常，应该如何排查？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-3/"},"next":{"title":"日志中频繁打印BusinessError: The Worker instance is not running, maybe worker is terminated when PostMessage错误信息，应该如何排查？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-5/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-4/graphics-accelerate-launch-faq-4.md


const frontMatter = {
	title: '游戏调用UnityEngine.Application.Quit侧滑退出时出现黑屏现象，应该如何避免？',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-launch-faq-4',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '游戏调用UnityEngine.Application.Quit侧滑退出时出现黑屏现象，应该如何避免？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "游戏调用unityengineapplicationquit侧滑退出时出现黑屏现象应该如何避免",
        children: "游戏调用UnityEngine.Application.Quit侧滑退出时出现黑屏现象，应该如何避免？"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需根据“退出后是否希望继续使用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "秒级启动"
        })
      }), "能力”选择不同的退出策略："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "希望下次启动仍支持秒级启动"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在侧滑退出场景下，应调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#terminateself",
            children: "terminateSelf"
          }), "实现退出，确保进程状态可被系统正确保留，避免出现黑屏问题。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "不希望下次启动使用秒级启动"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在侧滑退出场景下，应调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext#applicationcontextkillallprocesses",
            children: "killAllProcesses"
          }), "实现强制退出，彻底清理进程，避免残留状态引发异常。"]
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