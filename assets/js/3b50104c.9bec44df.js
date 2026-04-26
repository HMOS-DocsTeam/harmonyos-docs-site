"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["64912"], {
918391(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_multimodal_awareness_kit_multimodalawareness_kit_intro_multimodalawareness_kit_intro_md_3b5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-multimodal-awareness-kit-multimodalawareness-kit-intro-multimodalawareness-kit-intro-md-3b5.json
var site_docs_system_hardware_multimodal_awareness_kit_multimodalawareness_kit_intro_multimodalawareness_kit_intro_md_3b5_namespaceObject = JSON.parse('{"id":"system-hardware/multimodal-awareness-kit/multimodalawareness-kit-intro/multimodalawareness-kit-intro","title":"Multimodal Awareness Kit简介","description":"多模态融合感知是利用设备上的多种传感器数据，如加速度计和陀螺仪等，来识别活动、状态和姿态等信息，例如，判断设备是否处于静止状态。","source":"@site/docs/system-hardware/multimodal-awareness-kit/multimodalawareness-kit-intro/multimodalawareness-kit-intro.md","sourceDirName":"system-hardware/multimodal-awareness-kit/multimodalawareness-kit-intro","slug":"/system-hardware/multimodal-awareness-kit/multimodalawareness-kit-intro/","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/multimodalawareness-kit-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Multimodal Awareness Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multimodalawareness-kit-intro","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"扩展外设驱动开发术语","permalink":"/harmonyos-docs-site/system-hardware/driver-development-kit/terms/"},"next":{"title":"Stationary开发指导","permalink":"/harmonyos-docs-site/system-hardware/multimodal-awareness-kit/stationary-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/multimodal-awareness-kit/multimodalawareness-kit-intro/multimodalawareness-kit-intro.md


const frontMatter = {
	title: 'Multimodal Awareness Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multimodalawareness-kit-intro',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = 'Multimodal Awareness Kit简介';

const assets = {

};



const toc = [{
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
        id: "multimodal-awareness-kit简介",
        children: "Multimodal Awareness Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多模态融合感知是利用设备上的多种传感器数据，如加速度计和陀螺仪等，来识别活动、状态和姿态等信息，例如，判断设备是否处于静止状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多模态融合感知能力作为系统为应用提供的一种基础服务，需要应用在所使用的业务场景，向系统主动发起订阅服务，并在业务场景结束时，主动取消订阅服务，在此过程中系统会将实时的设备状态结果上报给应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用多模态融合感知，需要用户进行相关权限的申请。设备需要支持对应能力所需的传感器。"
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