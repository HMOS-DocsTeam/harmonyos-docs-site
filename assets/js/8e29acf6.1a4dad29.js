"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["818834"], {
982877(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_launch_faq_graphics_accelerate_launch_faq_9_graphics_accelerate_launch_faq_9_md_8e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-faq-graphics-accelerate-launch-faq-graphics-accelerate-launch-faq-9-graphics-accelerate-launch-faq-9-md-8e2.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_launch_faq_graphics_accelerate_launch_faq_9_graphics_accelerate_launch_faq_9_md_8e2_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-9/graphics-accelerate-launch-faq-9","title":"游戏秒级启动场景中闪屏播放与游戏音频恢复不同步，应该如何解决？","description":"在游戏秒级启动场景中，进入前台后，系统会立即恢复引擎（resume），游戏内部音频也会被同时恢复，若此时ArkTS层仍在播放闪屏动画，则导致“画面仍在闪屏，声音提前播放”的不同步问题。","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-9/graphics-accelerate-launch-faq-9.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-9","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-9/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-9/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"游戏秒级启动场景中闪屏播放与游戏音频恢复不同步，应该如何解决？","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-launch-faq-9","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"游戏因未实现防沉迷提醒提审被拒，应该如何解决？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-8/"},"next":{"title":"游戏接入秒级启动后无法热更应该如何处理？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-10/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-9/graphics-accelerate-launch-faq-9.md


const frontMatter = {
	title: '游戏秒级启动场景中闪屏播放与游戏音频恢复不同步，应该如何解决？',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-launch-faq-9',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '游戏秒级启动场景中闪屏播放与游戏音频恢复不同步，应该如何解决？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "游戏秒级启动场景中闪屏播放与游戏音频恢复不同步应该如何解决",
        children: "游戏秒级启动场景中闪屏播放与游戏音频恢复不同步，应该如何解决？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在游戏秒级启动场景中，进入前台后，系统会立即恢复引擎（resume），游戏内部音频也会被同时恢复，若此时ArkTS层仍在播放闪屏动画，则导致“画面仍在闪屏，声音提前播放”的不同步问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为解决上述问题，我们提供两种可选方案："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方案一"
            })
          }), "：基于闪屏播放完成标识控制引擎恢复"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在游戏启动初期设置splashScreenFinishFlag=false，表示闪屏未结束，引擎不应恢复。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// TuanjiePlayerAbility.ets\nonCreate(): void {\n    globalThis.splashScreenFinishFlag = false;\n}\nprivate onResume(): void {\n    if (globalThis.splashScreenFinishFlag) {\n        unity.nativeOnResume();\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "闪屏动画播放完毕后："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "将splashScreenFinishFlag设置为true。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "主动调用引擎的resume()方法。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Splash.ets\nprivate splashScreenFinish() {\n    globalThis.splashScreenFinishFlag = true;\n    unity.nativeOnResume();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方案二"
            })
          }), "：引擎侧支持音频静音/取消静音能力"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在进入秒级启动恢复流程时，开发者在ArkTS层主动调用引擎静音接口，阻断闪屏阶段所有游戏内的音频输出。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "闪屏播放结束后，开发者再调用取消静音接口恢复引擎音频。"
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