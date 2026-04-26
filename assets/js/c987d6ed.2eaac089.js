"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["120722"], {
563020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_launch_faq_graphics_accelerate_launch_faq_5_graphics_accelerate_launch_faq_5_md_c98_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-faq-graphics-accelerate-launch-faq-graphics-accelerate-launch-faq-5-graphics-accelerate-launch-faq-5-md-c98.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_faq_graphics_accelerate_launch_faq_graphics_accelerate_launch_faq_5_graphics_accelerate_launch_faq_5_md_c98_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-5/graphics-accelerate-launch-faq-5","title":"日志中频繁打印BusinessError: The Worker instance is not running, maybe worker is terminated when PostMessage错误信息，应该如何排查？","description":"该错误通常是由于Worker线程崩溃或被终止导致。","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-5/graphics-accelerate-launch-faq-5.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-5","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-5/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-5/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"日志中频繁打印BusinessError: The Worker instance is not running, maybe worker is terminated when PostMessage错误信息，应该如何排查？","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-launch-faq-5","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"游戏调用UnityEngine.Application.Quit侧滑退出时出现黑屏现象，应该如何避免？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-4/"},"next":{"title":"游戏出现卡死后，应该如何避免下一次秒启后还是卡死场景？","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-6/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-5/graphics-accelerate-launch-faq-5.md


const frontMatter = {
	title: '日志中频繁打印BusinessError: The Worker instance is not running, maybe worker is terminated when PostMessage错误信息，应该如何排查？',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-launch-faq-5',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '日志中频繁打印BusinessError: The Worker instance is not running, maybe worker is terminated when PostMessage错误信息，应该如何排查？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "日志中频繁打印businesserror-the-worker-instance-is-not-running-maybe-worker-is-terminated-when-postmessage错误信息应该如何排查",
        children: "日志中频繁打印BusinessError: The Worker instance is not running, maybe worker is terminated when PostMessage错误信息，应该如何排查？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该错误通常是由于Worker线程崩溃或被终止导致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可在日志中进一步查找worker.onerror相关日志，确认Worker线程崩溃时的具体异常信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TuanjieMainWorker Error TypeError: undefined is not callable entry|entry|1.0.0|src/main/ets/workers/TuanjieMainWorkerHandler.ts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(979519)/* ["default"] */.A) + "",
        width: "807",
        height: "174"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据worker.onerror日志排查，确认是否同时存在以下情况："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在onDestroy生命周期中销毁三方SDK。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "三方SDK被销毁后，仍继续向Worker线程发送消息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Worker线程在处理消息过程中仍继续调用已销毁的三方SDK，且未进行异常处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在秒级启动场景下，如果用户重新启动游戏后又上滑移除游戏App，游戏进程不会主动销毁Worker线程和团结引擎。当上述三种情况同时发生时，可能导致Worker线程崩溃，并在日志中频繁打印如下错误信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BusinessError: The Worker instance is not running, maybe worker is terminated when PostMessage\n"
      })
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
979519(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799084-00ac9474eb440d500e43a02536995ebc.png");

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