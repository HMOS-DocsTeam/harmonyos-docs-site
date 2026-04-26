"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["839541"], {
515762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_model_conversion_cannkit_aipp_cannkit_aipp_overview_cannkit_aipp_overview_md_2a2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-model-conversion-cannkit-aipp-cannkit-aipp-overview-cannkit-aipp-overview-md-2a2.json
var site_docs_cann_kit_guide_cannkit_model_conversion_cannkit_aipp_cannkit_aipp_overview_cannkit_aipp_overview_md_2a2_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-overview/cannkit-aipp-overview","title":"概述","description":"AIPP(AI Pre-Process)是针对AI推理的输入数据进行预处理的模块。CANN模型推理一般需要标准化输入数据格式，而一般模型推理场景数据是一张图片，在格式上存在多样性，AIPP可实现不同格式图片数据到NPU标准输入数据格式的转换。对已训练好的模型，不用重新训练匹配推理计算平台需要的数据格式，而只通过AIPP参数配置或者在软件上调用AIPP接口即可完成适配。由于AIPP硬件专用，可以获得较好的推理性能收益，又可以称为“硬件图像预处理”。","source":"@site/docs/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-overview/cannkit-aipp-overview.md","sourceDirName":"cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-overview","slug":"/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-overview/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-aipp-overview","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"OMG参数","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-overall-parameter/"},"next":{"title":"AIPP参数","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-parameters/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-overview/cannkit-aipp-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-aipp-overview',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AIPP(AI Pre-Process)是针对AI推理的输入数据进行预处理的模块。CANN模型推理一般需要标准化输入数据格式，而一般模型推理场景数据是一张图片，在格式上存在多样性，AIPP可实现不同格式图片数据到NPU标准输入数据格式的转换。对已训练好的模型，不用重新训练匹配推理计算平台需要的数据格式，而只通过AIPP参数配置或者在软件上调用AIPP接口即可完成适配。由于AIPP硬件专用，可以获得较好的推理性能收益，又可以称为“硬件图像预处理”。"
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