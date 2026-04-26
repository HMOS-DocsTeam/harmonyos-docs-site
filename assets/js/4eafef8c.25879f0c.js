"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["851422"], {
498403(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_ge_namespace_cannkit_ge_datatype_cannkit_ge_datatype_md_4ea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-basic-data-structure-and-apis-cannkit-ge-namespace-cannkit-ge-datatype-cannkit-ge-datatype-md-4ea.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_ge_namespace_cannkit_ge_datatype_cannkit_ge_datatype_md_4ea_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype/cannkit-ge-datatype","title":"DataType","description":"DataType枚举值定义如下。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype/cannkit-ge-datatype.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":41,"frontMatter":{"title":"DataType","sidebar_position":41,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ge::graphStatus","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-gegraphstatus/"},"next":{"title":"Format","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-format/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-datatype/cannkit-ge-datatype.md


const frontMatter = {
	title: 'DataType',
	sidebar_position: 41,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'DataType';

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
        id: "datatype",
        children: "DataType"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DataType枚举值定义如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum DataType {\n  DT_FLOAT = 0,            // float type\n  DT_FLOAT16 = 1,          // fp16 type\n  DT_INT8 = 2,             // int8 type\n  DT_INT32 = 3,            // int32 type\n  DT_UINT8 = 4,            // uint8 type\n                           // reserved\n  DT_INT16 = 6,            // int16 type\n  DT_UINT16 = 7,           // uint16 type\n  DT_UINT32 = 8,           // unsigned int32\n  DT_INT64 = 9,            // int64 type\n  DT_UINT64 = 10,          // unsigned int64\n  DT_DOUBLE = 11,          // double type\n  DT_BOOL = 12,            // bool type\n  DT_STRING = 13,          // string type\n  DT_DUAL_SUB_INT8 = 14,   // dual output int8 type\n  DT_DUAL_SUB_UINT8 = 15,  // dual output uint8 type\n  DT_COMPLEX64 = 16,       // complex64 type\n  DT_COMPLEX128 = 17,      // complex128 type\n  DT_QINT8 = 18,           // qint8 type\n  DT_QINT16 = 19,          // qint16 type\n  DT_QINT32 = 20,          // qint32 type\n  DT_QUINT8 = 21,          // quint8 type\n  DT_QUINT16 = 22,         // quint16 type\n  DT_RESOURCE = 23,        // resource type\n  DT_STRING_REF = 24,      // string ref type\n  DT_DUAL = 25,            // dual output type\n  DT_VARIANT = 26,         // dt_variant type\n  DT_BF16 = 27,            // bf16 type\n  DT_UNDEFINED = 28,       // Used to indicate a DataType field has not been set.\n  DT_INT4 = 29,            // int4 type\n  DT_UINT1 = 30,           // uint1 type\n  DT_INT2 = 31,            // int2 type\n  DT_UINT2 = 32,           // uint2 type\n  DT_COMPLEX32 = 33,       // complex32 type\n  DT_MAX                   // Mark the boundaries of data types\n};\n"
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