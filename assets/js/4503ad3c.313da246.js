"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["184097"], {
393729(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_c_media_recording_c_using_avscreencapture_for_buffer_avscreencapture_faqs_avscreencapture_faqs_md_450_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-c-media-recording-c-using-avscreencapture-for-buffer-avscreencapture-faqs-avscreencapture-faqs-md-450.json
var site_docs_media_kit_media_kit_dev_c_media_recording_c_using_avscreencapture_for_buffer_avscreencapture_faqs_avscreencapture_faqs_md_450_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-faqs/avscreencapture-faqs","title":"录屏常见问题","description":"录屏启动报错AV\\\\SCREEN\\\\CAPTURE\\\\ERR\\\\OPERATE\\\\NOT\\\\PERMIT","source":"@site/docs/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-faqs/avscreencapture-faqs.md","sourceDirName":"media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-faqs","slug":"/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-faqs/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-faqs/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"录屏常见问题","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avscreencapture-faqs","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AVScreenCapture录屏自定义场景","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-custom-scenarios/"},"next":{"title":"使用AVScreenCapture录屏写文件(C/C++)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-file/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-faqs/avscreencapture-faqs.md


const frontMatter = {
	title: '录屏常见问题',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avscreencapture-faqs',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '录屏常见问题';

const assets = {

};



const toc = [{
  "value": "录屏启动报错AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT",
  "id": "录屏启动报错av_screen_capture_err_operate_not_permit",
  "level": 2
}, {
  "value": "通话中无法启动录屏报错AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT",
  "id": "通话中无法启动录屏报错av_screen_capture_err_operate_not_permit",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "录屏常见问题",
        children: "录屏常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "录屏启动报错av_screen_capture_err_operate_not_permit",
      children: "录屏启动报错AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实例数量超出规格限制，当前规格为每种数据格式最多两个实例。建议释放多余实例后再使用新实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可能原因：录屏过程中，点击“不允许”、在通知栏停止录屏和通话打断录屏后，未释放资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["解决方法：在录屏过程中因为状态改变导致的录屏停止，需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_setstatecallback",
        children: "OH_AVScreenCapture_SetStateCallback()"
      }), "（状态回调）中，对录屏资源进行异步释放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "录屏会话限制策略："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "客户端应用数量上限4个，比如会议屏幕共享、会议投屏、后台听歌识曲、系统录屏同时存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单应用单模式（存为文件或存为码流）可创建实例上限2个，典型场景：在线上会议共享屏幕时，需要同步录制会议内容。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通话中无法启动录屏报错av_screen_capture_err_operate_not_permit",
      children: "通话中无法启动录屏报错AV_SCREEN_CAPTURE_ERR_OPERATE_NOT_PERMIT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，如需在通话中开启录屏，可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h#oh_avscreencapture_strategyforkeepcaptureduringcall",
        children: "OH_AVScreenCapture_StrategyForKeepCaptureDuringCall()"
      }), "设置“蜂窝通话时保持录屏”状态。"]
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