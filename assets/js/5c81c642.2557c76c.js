"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["886300"], {
272300(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_data_type_definition_cannkit_binaryrepeatparams_cannkit_binaryrepeatparams_md_5c8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-data-type-definition-cannkit-binaryrepeatparams-cannkit-binaryrepeatparams-md-5c8.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_data_type_definition_cannkit_binaryrepeatparams_cannkit_binaryrepeatparams_md_5c8_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-binaryrepeatparams/cannkit-binaryrepeatparams","title":"BinaryRepeatParams","description":"BinaryRepeatParams为用于控制操作数地址步长的数据结构。结构体内包含操作数相邻迭代间相同datablock的地址步长，操作数同一迭代内不同datablock的地址步长等参数。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-binaryrepeatparams/cannkit-binaryrepeatparams.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-binaryrepeatparams","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-binaryrepeatparams/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-binaryrepeatparams/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"BinaryRepeatParams","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-binaryrepeatparams","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UnaryRepeatParams","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-unaryrepeatparams/"},"next":{"title":"ScalarGetCountOfValue","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-scalar-computation/cannkit-scalargetcountofvalue/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-data-type-definition/cannkit-binaryrepeatparams/cannkit-binaryrepeatparams.md


const frontMatter = {
	title: 'BinaryRepeatParams',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-binaryrepeatparams',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'BinaryRepeatParams';

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
        id: "binaryrepeatparams",
        children: "BinaryRepeatParams"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BinaryRepeatParams为用于控制操作数地址步长的数据结构。结构体内包含操作数相邻迭代间相同datablock的地址步长，操作数同一迭代内不同datablock的地址步长等参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "结构体具体定义为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const int32_t DEFAULT_BLK_NUM = 8;\nconst int32_t DEFAULT_BLK_STRIDE = 1;\nconst uint8_t DEFAULT_REPEAT_STRIDE = 8;\n \nstruct BinaryRepeatParams {\n    __aicore__ BinaryRepeatParams()\n    {\n        blockNumber = DEFAULT_BLK_NUM;\n        dstBlkStride = DEFAULT_BLK_STRIDE;\n        src0BlkStride = DEFAULT_BLK_STRIDE;\n        src1BlkStride = DEFAULT_BLK_STRIDE;\n        dstRepStride = DEFAULT_REPEAT_STRIDE;\n        src0RepStride = DEFAULT_REPEAT_STRIDE;\n        src1RepStride = DEFAULT_REPEAT_STRIDE;\n    }\n    __aicore__ BinaryRepeatParams(const uint8_t dstBlkStrideIn, const uint8_t src0BlkStrideIn,\n        const uint8_t src1BlkStrideIn, const uint8_t dstRepStrideIn, const uint8_t src0RepStrideIn,\n        const uint8_t src1RepStrideIn)\n    {\n        dstBlkStride = dstBlkStrideIn;\n        src0BlkStride = src0BlkStrideIn;\n        src1BlkStride = src1BlkStrideIn;\n        dstRepStride = dstRepStrideIn;\n        src0RepStride = src0RepStrideIn;\n        src1RepStride = src1RepStrideIn;\n    }\n    uint32_t blockNumber = 0;\n    uint8_t dstBlkStride = 0;\n    uint8_t src0BlkStride = 0;\n    uint8_t src1BlkStride = 0;\n    uint8_t dstRepStride = 0;\n    uint8_t src0RepStride = 0;\n    uint8_t src1RepStride = 0;\n    bool repeatStrideMode = false;\n    bool strideSizeMode = false;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，blockNumber，repeatStrideMode和strideSizeMode为保留参数，开发者无需关心，使用默认值即可。开发者需要自行定义dataBlockStride参数，包含dstBlkStride，src0BlkStride和src1BlkStride，以及repeatStride参数，包含dstRepStride，src0RepStride和src1RepStride。"
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