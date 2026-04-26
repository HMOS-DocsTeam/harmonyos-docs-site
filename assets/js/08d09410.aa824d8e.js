"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["421364"], {
347457(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_ge_namespace_cannkit_ge_format_cannkit_ge_format_md_08d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-basic-data-structure-and-apis-cannkit-ge-namespace-cannkit-ge-format-cannkit-ge-format-md-08d.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_ge_namespace_cannkit_ge_format_cannkit_ge_format_md_08d_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format/cannkit-ge-format","title":"Format","description":"上述Format枚举值对应的序号取值，从0开始，依次递增。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format/cannkit-ge-format.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":42,"frontMatter":{"title":"Format","sidebar_position":42,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"DataType","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype/"},"next":{"title":"BROADCAST_INFER","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-broadcast-infer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format/cannkit-ge-format.md


const frontMatter = {
	title: 'Format',
	sidebar_position: 42,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'Format';

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
        id: "format",
        children: "Format"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Format {\n  FORMAT_NCHW = 0,   // NCHW\n  FORMAT_NHWC,       // NHWC\n  FORMAT_ND,         // Nd Tensor\n  FORMAT_NC1HWC0,    // NC1HWC0\n  FORMAT_FRACTAL_Z,  // FRACTAL_Z\n  FORMAT_NC1C0HWPAD = 5,\n  FORMAT_NHWC1C0,\n  FORMAT_FSR_NCHW,\n  FORMAT_FRACTAL_DECONV,\n  FORMAT_C1HWNC0,\n  FORMAT_FRACTAL_DECONV_TRANSPOSE = 10,\n  FORMAT_FRACTAL_DECONV_SP_STRIDE_TRANS,\n  FORMAT_NC1HWC0_C04,    // NC1HWC0, C0 is 4\n  FORMAT_FRACTAL_Z_C04,  // FRACZ, C0 is 4\n  FORMAT_CHWN,\n  FORMAT_FRACTAL_DECONV_SP_STRIDE8_TRANS = 15,\n  FORMAT_HWCN,\n  FORMAT_NC1KHKWHWC0,  // KH,KW kernel h& kernel w maxpooling max output format\n  FORMAT_BN_WEIGHT,\n  FORMAT_FILTER_HWCK,  // filter input tensor format\n  FORMAT_HASHTABLE_LOOKUP_LOOKUPS = 20,\n  FORMAT_HASHTABLE_LOOKUP_KEYS,\n  FORMAT_HASHTABLE_LOOKUP_VALUE,\n  FORMAT_HASHTABLE_LOOKUP_OUTPUT,\n  FORMAT_HASHTABLE_LOOKUP_HITS,\n  FORMAT_C1HWNCoC0 = 25,\n  FORMAT_MD,\n  FORMAT_NDHWC,\n  FORMAT_FRACTAL_ZZ,\n  FORMAT_FRACTAL_NZ,\n  FORMAT_NCDHW = 30,\n  FORMAT_DHWCN,  // 3D filter input tensor format\n  FORMAT_NDC1HWC0,\n  FORMAT_FRACTAL_Z_3D,\n  FORMAT_CN,\n  FORMAT_NC = 35,\n  FORMAT_DHWNC,\n  FORMAT_FRACTAL_Z_3D_TRANSPOSE, // 3D filter(transpose) input tensor format\n  FORMAT_FRACTAL_ZN_LSTM,\n  FORMAT_FRACTAL_Z_G,\n  FORMAT_RESERVED = 40,\n  FORMAT_ALL,\n  FORMAT_NULL,\n  FORMAT_ND_RNN_BIAS,\n  FORMAT_FRACTAL_ZN_RNN,\n  FORMAT_NYUV = 45,\n  FORMAT_NYUV_A,\n  FORMAT_NCL,\n  FORMAT_FRACTAL_Z_WINO,\n  FORMAT_C1HWC0,\n  // Add new formats definition here\n  FORMAT_END,\n  // FORMAT_MAX defines the max value of Format.\n  // Any Format should not exceed the value of FORMAT_MAX.\n  // ** Attention ** : FORMAT_MAX stands for the SPEC of enum Format and almost SHOULD NOT be used in code.\n  // If you want to judge the range of Format, you can use FORMAT_END.\n  FORMAT_MAX = 0xff\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述Format枚举值对应的序号取值，从0开始，依次递增。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IR构图不支持输入以下FORMAT："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FORMAT_NC1HWC0\nFORMAT_FRACTAL_Z\nFORMAT_NC1C0HWPAD\nFORMAT_NHWC1C0\nFORMAT_FRACTAL_DECONV\nFORMAT_C1HWNC0\nFORMAT_FRACTAL_DECONV_TRANSPOSE\nFORMAT_FRACTAL_DECONV_SP_STRIDE_TRANS\nFORMAT_NC1HWC0_C04\nFORMAT_FRACTAL_Z_C04\nFORMAT_FRACTAL_DECONV_SP_STRIDE8_TRANS\nFORMAT_NC1KHKWHWC0\nFORMAT_C1HWNCoC0\nFORMAT_FRACTAL_ZZ\nFORMAT_FRACTAL_NZ\nFORMAT_NDC1HWC0\nFORMAT_FRACTAL_Z_3D\nFORMAT_FRACTAL_Z_3D_TRANSPOSE\nFORMAT_FRACTAL_ZN_LSTM\nFORMAT_FRACTAL_Z_G\nFORMAT_ND_RNN_BIAS\nFORMAT_FRACTAL_ZN_RNN\nFORMAT_NYUV\nFORMAT_NYUV_A\n"
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