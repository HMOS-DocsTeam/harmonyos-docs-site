"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["982603"], {
334005(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_displaysync_displaysync_overview_displaysync_overview_md_367_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-displaysync-displaysync-overview-displaysync-overview-md-367.json
var site_docs_arkgraphics_2_d_displaysync_displaysync_overview_displaysync_overview_md_367_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/displaysync/displaysync-overview/displaysync-overview","title":"可变帧率简介","description":"随着设备屏幕的不断演进，当前主流设备采用LTPO屏幕，此类屏幕支持在多个档位之间切换屏幕帧率。","source":"@site/docs/arkgraphics-2d/displaysync/displaysync-overview/displaysync-overview.md","sourceDirName":"arkgraphics-2d/displaysync/displaysync-overview","slug":"/arkgraphics-2d/displaysync/displaysync-overview/","permalink":"/harmonyos-docs-site/arkgraphics-2d/displaysync/displaysync-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"可变帧率简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/displaysync-overview","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkGraphics 2D简介","permalink":"/harmonyos-docs-site/arkgraphics-2d/arkgraphics2d-introduction/"},"next":{"title":"请求动画绘制帧率","permalink":"/harmonyos-docs-site/arkgraphics-2d/displaysync/displaysync-animation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/displaysync/displaysync-overview/displaysync-overview.md


const frontMatter = {
	title: '可变帧率简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/displaysync-overview',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '可变帧率简介';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "可变帧率简介",
        children: "可变帧率简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随着设备屏幕的不断演进，当前主流设备采用LTPO屏幕，此类屏幕支持在多个档位之间切换屏幕帧率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于快速变化的内容，如射击游戏，交互动画等，显示帧率越高，画面越流畅，但是相对的功耗也会越高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "而低速变化的内容，如游戏大厅，时钟更新动画等，画面更新频率较低，使用相对低的显示帧率，用户也不会觉得卡顿，但是相对的功耗就比较低。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于显示内容的可变帧率能力，在具备LTPO屏幕的设备上，可以达到性能体验和功耗间的平衡。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS支持可变帧率能力，开发者通过使用可变帧率接口，进行相关业务开发，可以享受可变帧率特性带来的功耗收益。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可变帧率能力支持开发者自定义应用业务的帧率，其常见的使用场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过配置属性动画/显示动画的帧率属性参数，用于动画的绘制，具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkgraphics-2d/displaysync/displaysync-animation",
          children: "请求动画绘制帧率"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过申请一个独立的绘制帧率，用于UI的绘制，具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkgraphics-2d/displaysync/displaysync-ui",
          children: "请求UI绘制帧率"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过XComponent在Native侧申请独立的绘制帧率，用于游戏等自绘制内容的绘制，具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkgraphics-2d/displaysync/displaysync-xcomponent",
          children: "请求自绘制内容绘制帧率"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过NativeVsync在Native侧申请独立的绘制帧率，用于非UI线程的绘制，具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkgraphics-2d/displaysync/displaysoloist-native-guidelines",
          children: "NativeDisplaySoloist开发指导 (C/C++)"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可变帧率为应用开发中的动画组件、XComponent组件、UI绘制等提供一种基础帧率配置和能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过设置有效的期望绘制帧率后，系统会收集设置的请求帧率，进行决策和分发，在渲染管线上进行分频，尽量能够满足开发者的期望帧率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(49857)/* ["default"] */.A) + "",
        width: "6844",
        height: "3638"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如上图所示，应用层的多种UI（动画组件、UI绘制、XComponent自绘制及非UI线程绘制）可以通过相对应的可变帧率接口（expectedFrameRateRange、displaySync、OH_NativeXComponent_SetExpectedFrameRateRange及DisplaySoloist）接入到控帧系统。控帧系统收集UI设置的期望绘制帧率，参与到框架层的整机刷新率决策；服务端根据决策出的刷新率结果进行绘制帧率分发，逐级传递到应用层的各类UI。同时，硬件层也会根据整机刷新率的决策结果，完成硬件器件的刷新率切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者设置的期望帧率值不能代表最终实际效果，会受限于系统功耗性能约束和屏幕刷新率硬件能力限制。"
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
49857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438675-74c1725b0f7e1d07bf94f3a849aaa5bb.jpg");

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