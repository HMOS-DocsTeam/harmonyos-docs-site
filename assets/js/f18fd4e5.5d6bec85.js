"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["135513"], {
507272(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_share_kit_guide_gestures_share_gestures_share_open_gestures_share_open_md_f18_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-share-kit-guide-gestures-share-gestures-share-open-gestures-share-open-md-f18.json
var site_docs_share_kit_guide_gestures_share_gestures_share_open_gestures_share_open_md_f18_namespaceObject = JSON.parse('{"id":"share-kit-guide/gestures-share/gestures-share-open/gestures-share-open","title":"打开设备侧隔空传送开关","description":"使用隔空传送功能前，需要先打开隔空传送开关。","source":"@site/docs/share-kit-guide/gestures-share/gestures-share-open/gestures-share-open.md","sourceDirName":"share-kit-guide/gestures-share/gestures-share-open","slug":"/share-kit-guide/gestures-share/gestures-share-open/","permalink":"/harmonyos-docs-site/share-kit-guide/gestures-share/gestures-share-open/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"打开设备侧隔空传送开关","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gestures-share-open","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/share-kit-guide/gestures-share/gestures-share-overview/"},"next":{"title":"可信任设备间传输","permalink":"/harmonyos-docs-site/share-kit-guide/gestures-share/gestures-share-trust/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/share-kit-guide/gestures-share/gestures-share-open/gestures-share-open.md


const frontMatter = {
	title: '打开设备侧隔空传送开关',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gestures-share-open',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '打开设备侧隔空传送开关';

const assets = {

};



const toc = [{
  "value": "隔空传送与隔空截屏的联动",
  "id": "隔空传送与隔空截屏的联动",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "打开设备侧隔空传送开关",
        children: "打开设备侧隔空传送开关"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用隔空传送功能前，需要先打开隔空传送开关。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启路径：设置 > 系统 > 快捷启动和手势 > 隔空传送。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(533327)/* ["default"] */.A) + "",
        width: "320",
        height: "681"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "隔空传送与隔空截屏的联动",
      children: "隔空传送与隔空截屏的联动"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "隔空传送与隔空截屏使用相同的手势触发，开关是否开启影响如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "隔空传送开启"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "隔空传送关闭"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "隔空截屏开启：图库场景传输原图；其他场景传送截屏。  隔空截屏关闭：图库场景传送原图；其他场景无截屏，不传送。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "隔空截屏开启：仅截屏，不传送。  隔空截屏关闭：无截屏，不传送。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当隔空传送和隔空截屏开关同时开启，且当前界面已注册隔空传送事件时，用户抓取握拳会同时触发隔空传送和隔空截屏，此时隔空传送的卡片下方同步出现保存截屏的提示（首次默认不保存）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户可手动勾选“保存截屏至本机”，则传送的同时截屏图片会被保存至图库。系统会记录本次选择结果，并作为下次操作的默认值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(492283)/* ["default"] */.A) + "",
        width: "313",
        height: "667"
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
492283(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959194-e97efd3e1274105d88d5941e6c8cffd9.png");

},
533327(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439239-d65110566ccc9542e492d2eef7651550.png");

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