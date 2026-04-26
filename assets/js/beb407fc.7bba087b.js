"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["674321"], {
336681(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ar_engine_kit_guide_arengine_faq_arengine_faq_2_arengine_faq_2_md_beb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ar-engine-kit-guide-arengine-faq-arengine-faq-2-arengine-faq-2-md-beb.json
var site_docs_ar_engine_kit_guide_arengine_faq_arengine_faq_2_arengine_faq_2_md_beb_namespaceObject = JSON.parse('{"id":"ar-engine-kit-guide/arengine-faq/arengine-faq-2/arengine-faq-2","title":"摄像头被遮挡一段时间后再放开，输出的位姿有跳变","description":"现象描述","source":"@site/docs/ar-engine-kit-guide/arengine-faq/arengine-faq-2/arengine-faq-2.md","sourceDirName":"ar-engine-kit-guide/arengine-faq/arengine-faq-2","slug":"/ar-engine-kit-guide/arengine-faq/arengine-faq-2/","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-faq/arengine-faq-2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"摄像头被遮挡一段时间后再放开，输出的位姿有跳变","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-faq-2","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取检测平面的二维顶点数组时报错：“plane is nullptr!”，返回错误码：401","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-faq/arengine-faq-1/"},"next":{"title":"反光、光线暗或者弱纹理场景（输入图像颜色变化小）下无法识别平面","permalink":"/harmonyos-docs-site/ar-engine-kit-guide/arengine-faq/arengine-faq-3/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ar-engine-kit-guide/arengine-faq/arengine-faq-2/arengine-faq-2.md


const frontMatter = {
	title: '摄像头被遮挡一段时间后再放开，输出的位姿有跳变',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-faq-2',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '摄像头被遮挡一段时间后再放开，输出的位姿有跳变';

const assets = {

};



const toc = [{
  "value": "现象描述",
  "id": "现象描述",
  "level": 2
}, {
  "value": "可能原因",
  "id": "可能原因",
  "level": 2
}, {
  "value": "处理步骤",
  "id": "处理步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "摄像头被遮挡一段时间后再放开输出的位姿有跳变",
        children: "摄像头被遮挡一段时间后再放开，输出的位姿有跳变"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "现象描述",
      children: "现象描述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用运动跟踪能力时，摄像头被遮挡一段时间后再放开遮挡，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arpose_getposeraw",
        children: "HMS_AREngine_ARPose_GetPoseRaw"
      }), "函数获取的平移分量或旋转分量存在较大跳变。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "可能原因",
      children: "可能原因"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AR Engine通过摄像头采集数据感知当前设备在现实世界中的位姿，摄像头被遮挡后，AR Engine无法准确感知设备在现实世界的位姿变化，放开遮挡后，如果继续调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arsession_update",
        children: "HMS_AREngine_ARSession_Update"
      }), "，AR Engine会尝试基于遮挡前识别到的数据进行恢复，如果当前摄像头采集数据和遮挡前类似，就可能会导致错误匹配到旧的结果，从而产生数据跳变。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "处理步骤",
      children: "处理步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果开发者通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_gettrackingstate",
        children: "HMS_AREngine_ARCamera_GetTrackingState"
      }), "函数获取的状态为ARENGINE_TRACKING_STATE_PAUSED，可以通过函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_gettrackingstatereason",
        children: "HMS_AREngine_ARCamera_GetTrackingStateReason"
      }), "进一步获取暂停原因，如暂停原因是ARENGINE_TRACKING_STATE_REASON_INSUFFICIENT_FEATURES或ARENGINE_TRACKING_STATE_REASON_EXCESSIVE_MOTION，建议在您的应用中提示用户，并在恢复后（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_gettrackingstate",
        children: "HMS_AREngine_ARCamera_GetTrackingState"
      }), "获取的状态为：ARENGINE_TRACKING_STATE_TRACKING时）重新做session初始化，见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ar-engine-kit-guide/arengine-c-guide/arengine-c-arsession#%E5%88%9B%E5%BB%BAar%E4%BC%9A%E8%AF%9D",
        children: "创建AR会话"
      }), "。"]
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