"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["583984"], {
795460(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_arkgraphics_2_d_introduction_arkgraphics_2_d_introduction_md_2a9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-arkgraphics-2-d-introduction-arkgraphics-2-d-introduction-md-2a9.json
var site_docs_arkgraphics_2_d_arkgraphics_2_d_introduction_arkgraphics_2_d_introduction_md_2a9_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/arkgraphics2d-introduction/arkgraphics2d-introduction","title":"ArkGraphics 2D简介","description":"ArkGraphics 2D（方舟2D图形服务 ）主要提供图形绘制与显示相关的能力。开发者可以基于一套统一的图形接口进行应用开发，使应用开发更简单、高效。","source":"@site/docs/arkgraphics-2d/arkgraphics2d-introduction/arkgraphics2d-introduction.md","sourceDirName":"arkgraphics-2d/arkgraphics2d-introduction","slug":"/arkgraphics-2d/arkgraphics2d-introduction/","permalink":"/harmonyos-docs-site/arkgraphics-2d/arkgraphics2d-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkGraphics 2D简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics2d-introduction","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"附录","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-appendix/"},"next":{"title":"可变帧率简介","permalink":"/harmonyos-docs-site/arkgraphics-2d/displaysync/displaysync-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/arkgraphics2d-introduction/arkgraphics2d-introduction.md


const frontMatter = {
	title: 'ArkGraphics 2D简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkgraphics2d-introduction',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkGraphics 2D简介';

const assets = {

};



const toc = [{
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "亮点特征",
  "id": "亮点特征",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkgraphics-2d简介",
        children: "ArkGraphics 2D简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGraphics 2D（方舟2D图形服务 ）主要提供图形绘制与显示相关的能力。开发者可以基于一套统一的图形接口进行应用开发，使应用开发更简单、高效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供图像处理的一些基本能力，包括对当前图像的亮度调节、模糊化、灰度调节、智能取色等。具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-effectkit/js-apis-effectkit",
          children: "@ohos.effectKit (图像效果)"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供管理抽象化色域对象的基础能力，包括色域的创建、色域基础属性的获取等。具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-colorspacemanager/js-apis-colorspacemanager",
          children: "@ohos.graphics.colorSpaceManager (色彩管理)"
        }), "与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-sendablecolorspacemanager/js-apis-sendablecolorspacemanager",
          children: "@ohos.graphics.sendableColorSpaceManager (可共享的色彩管理)"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供可针对不同形式的内容指定帧率的能力，可用于开发者自绘制内容。具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkgraphics-2d/displaysync/displaysync-overview",
          children: "可变帧率简介"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供高动态显示的相关能力，具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-hdrcapability/js-apis-hdrcapability",
          children: "@ohos.graphics.hdrCapability (HDR能力)"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供自绘制的相关能力，开发者可根据需要，自定义绘制实现UI效果，可自定义绘制基础形状、文本、图片等。具体可见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing/arkts-apis-graphics-drawing",
          children: "@ohos.graphics.drawing (绘制模块)"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["提供图形绘制与显示相关的Native能力，包括", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativewindow/capi-nativewindow",
          children: "NativeWindow"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-oh-nativebuffer/capi-oh-nativebuffer",
          children: "NativeBuffer"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-oh-nativeimage/capi-oh-nativeimage",
          children: "NativeImage"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativevsync/capi-nativevsync",
          children: "NativeVsync"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing",
          children: "Drawing"
        }), "等模块。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["图像效果处理：开发者可根据不同的UI效果需要，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-effectkit/js-apis-effectkit",
          children: "effectKit模块"
        }), "实现图像的效果处理，以提升用户浏览体验。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置图像色域：开发者可根据设计需求使用图像文件并设置色域信息，实现图像广色域效果的绘制和显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "定制帧率场景：支持开发者根据不同内容和需要，定制帧率进行绘制。比如不同游戏场景和界面时，设置不同的帧率，以提升用户体验流畅性并达到平衡功耗的效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自绘制场景：开发者可根据不同的UI效果和场景需要，使用Drawing等模块实现除ArkUI组件外的自定义组件或者自定义UI效果的绘制和显示。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点特征"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同个窗口支持多个帧率：支持为同个窗口的不同内容，比如动画或自绘制UI，定制不同的绘制帧率，不同内容之间独立运行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持帧率动态配置，兼顾体验与功耗：支持三方框架根据UI场景，动态请求绘制帧率，比如游戏、视频等业务，兼顾流畅体验与功耗体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持录制回放机制，提升交互体验：支持录制命令的缓存，可对绘制指令进行回放，以提升UI绘制的跟手性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持多种渲染后端：一次开发，支持多种渲染绘制后端，以降低多端适配成本，并满足应用的差异化需求。"
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