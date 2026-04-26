"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["638064"], {
279100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_data_type_definition_cannkit_unaryrepeatparams_cannkit_unaryrepeatparams_md_a96_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-data-type-definition-cannkit-unaryrepeatparams-cannkit-unaryrepeatparams-md-a96.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_data_type_definition_cannkit_unaryrepeatparams_cannkit_unaryrepeatparams_md_a96_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-unaryrepeatparams/cannkit-unaryrepeatparams","title":"UnaryRepeatParams","description":"UnaryRepeatParams为用于控制操作数地址步长的数据结构。结构体内包含操作数相邻迭代间相同datablock的地址步长，操作数同一迭代内不同datablock的地址步长等参数。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-unaryrepeatparams/cannkit-unaryrepeatparams.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-unaryrepeatparams","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-unaryrepeatparams/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-unaryrepeatparams/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"UnaryRepeatParams","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-unaryrepeatparams","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ShapeInfo","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-shapeinfo/"},"next":{"title":"BinaryRepeatParams","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-binaryrepeatparams/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-unaryrepeatparams/cannkit-unaryrepeatparams.md


const frontMatter = {
	title: 'UnaryRepeatParams',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-unaryrepeatparams',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'UnaryRepeatParams';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "unaryrepeatparams",
        children: "UnaryRepeatParams"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UnaryRepeatParams为用于控制操作数地址步长的数据结构。结构体内包含操作数相邻迭代间相同datablock的地址步长，操作数同一迭代内不同datablock的地址步长等参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结构体具体定义为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const int32_t DEFAULT_BLK_NUM = 8;\nconst int32_t DEFAULT_BLK_STRIDE = 1;\nconst uint8_t DEFAULT_REPEAT_STRIDE = 8;\n \nstruct UnaryRepeatParams {\n    __aicore__ UnaryRepeatParams()\n    {\n        blockNumber = DEFAULT_BLK_NUM;\n        dstBlkStride = DEFAULT_BLK_STRIDE;\n        srcBlkStride = DEFAULT_BLK_STRIDE;\n        dstRepStride = DEFAULT_REPEAT_STRIDE;\n        srcRepStride = DEFAULT_REPEAT_STRIDE;\n        halfBlock = false;\n    }\n    __aicore__ UnaryRepeatParams(const uint16_t dstBlkStrideIn, const uint16_t srcBlkStrideIn,\n        const uint8_t dstRepStrideIn, const uint8_t srcRepStrideIn)\n    {\n        dstBlkStride = dstBlkStrideIn;\n        srcBlkStride = srcBlkStrideIn;\n        dstRepStride = dstRepStrideIn;\n        srcRepStride = srcRepStrideIn;\n    }\n    __aicore__ UnaryRepeatParams(const uint16_t dstBlkStrideIn, const uint16_t srcBlkStrideIn,\n        const uint8_t dstRepStrideIn, const uint8_t srcRepStrideIn, const bool halfBlockIn)\n    {\n        dstBlkStride = dstBlkStrideIn;\n        srcBlkStride = srcBlkStrideIn;\n        dstRepStride = dstRepStrideIn;\n        srcRepStride = srcRepStrideIn;\n        halfBlock = halfBlockIn;\n    }\n    uint32_t blockNumber = 0;\n    uint16_t dstBlkStride = 0;\n    uint16_t srcBlkStride = 0;\n    uint8_t dstRepStride = 0;\n    uint8_t srcRepStride = 0;\n    bool repeatStrideMode = false;\n    bool strideSizeMode = false;\n    bool halfBlock = false;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，blockNumber，repeatStrideMode，strideSizeMode为保留参数，开发者无需关心，使用默认值即可。halfBlock表示CastDeq指令的结果写入对应UB的上半（halfBlock = true）还是下半（halfBlock = false）部分。开发者需要自行定义dataBlockStride参数，包含dstBlkStride，srcBlkStride，以及repeatStride参数，包含dstRepStride，srcRepStride。"
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