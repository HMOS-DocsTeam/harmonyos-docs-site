"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["999359"], {
248235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_ge_namespace_cannkit_tensortype_cannkit_tensortype_md_eca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-basic-data-structure-and-apis-cannkit-ge-namespace-cannkit-tensortype-cannkit-tensortype-md-eca.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_ge_namespace_cannkit_tensortype_cannkit_tensortype_md_eca_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensortype/cannkit-tensortype","title":"TensorType","description":"TensorType类用以定义输入或者输出支持的数据类型，TensorType提供以下接口指定支持的数据类型：","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensortype/cannkit-tensortype.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensortype","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensortype/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensortype/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"title":"TensorType","sidebar_position":22,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensortype","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Update","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensordesc/cannkit-update/"},"next":{"title":"构造函数和析构函数","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-ge-tensor/cannkit-tensor-construction-and-destructor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-tensortype/cannkit-tensortype.md


const frontMatter = {
	title: 'TensorType',
	sidebar_position: 22,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensortype',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'TensorType';

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
        id: "tensortype",
        children: "TensorType"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TensorType类用以定义输入或者输出支持的数据类型，TensorType提供以下接口指定支持的数据类型："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct TensorType {\n  explicit TensorType(DataType dt);\n \n  TensorType(const std::initializer_list<DataType> &initial_types);\n \n  static TensorType ALL() {\n    return TensorType{DT_BOOL,   DT_COMPLEX128, DT_COMPLEX64, DT_DOUBLE, DT_FLOAT,  DT_FLOAT16, DT_INT16,\n                      DT_INT32,  DT_INT64,      DT_INT8,      DT_QINT16, DT_QINT32, DT_QINT8,   DT_QUINT16,\n                      DT_QUINT8, DT_RESOURCE,   DT_STRING,    DT_UINT16, DT_UINT32, DT_UINT64,  DT_UINT8,\n                      DT_BF16, DT_COMPLEX32};\n  }\n \n  static TensorType QuantifiedType() { return TensorType{DT_QINT16, DT_QINT32, DT_QINT8, DT_QUINT16, DT_QUINT8}; }\n \n  static TensorType OrdinaryType() {\n    return TensorType{DT_BOOL,  DT_COMPLEX128, DT_COMPLEX64, DT_DOUBLE, DT_FLOAT,  DT_FLOAT16, DT_INT16,\n                      DT_INT32, DT_INT64,      DT_INT8,      DT_UINT16, DT_UINT32, DT_UINT64,  DT_UINT8,\n                      DT_BF16, DT_COMPLEX32};\n  }\n \n  static TensorType BasicType() {\n    return TensorType{DT_COMPLEX128, DT_COMPLEX64, DT_DOUBLE, DT_FLOAT,  DT_FLOAT16, DT_INT16,\n                      DT_INT32,      DT_INT64,     DT_INT8,   DT_QINT16, DT_QINT32,  DT_QINT8,\n                      DT_QUINT16,    DT_QUINT8,    DT_UINT16, DT_UINT32, DT_UINT64,  DT_UINT8,\n                      DT_BF16, DT_COMPLEX32};\n  }\n \n  static TensorType NumberType() {\n    return TensorType{DT_COMPLEX128, DT_COMPLEX64, DT_DOUBLE, DT_FLOAT,  DT_FLOAT16, DT_INT16,  DT_INT32,  DT_INT64,\n                      DT_INT8,       DT_QINT32,    DT_QINT8,  DT_QUINT8, DT_UINT16,  DT_UINT32, DT_UINT64, DT_UINT8,\n                      DT_BF16, DT_COMPLEX32};\n  }\n \n  static TensorType RealNumberType() {\n    return TensorType{DT_DOUBLE, DT_FLOAT,  DT_FLOAT16, DT_INT16,  DT_INT32, DT_INT64,\n                      DT_INT8,   DT_UINT16, DT_UINT32,  DT_UINT64, DT_UINT8, DT_BF16};\n  }\n \n  static TensorType ComplexDataType() { return TensorType{DT_COMPLEX128, DT_COMPLEX64, DT_COMPLEX32}; }\n \n  static TensorType IntegerDataType() {\n    return TensorType{DT_INT16, DT_INT32, DT_INT64, DT_INT8, DT_UINT16, DT_UINT32, DT_UINT64, DT_UINT8};\n  }\n \n  static TensorType SignedDataType() { return TensorType{DT_INT16, DT_INT32, DT_INT64, DT_INT8}; }\n \n  static TensorType UnsignedDataType() { return TensorType{DT_UINT16, DT_UINT32, DT_UINT64, DT_UINT8}; }\n \n  static TensorType FloatingDataType() { return TensorType{DT_DOUBLE, DT_FLOAT, DT_FLOAT16}; }\n \n  static TensorType IndexNumberType() { return TensorType{DT_INT32, DT_INT64}; }\n \n  static TensorType UnaryDataType() {\n    return TensorType{DT_COMPLEX128, DT_COMPLEX64, DT_DOUBLE, DT_FLOAT, DT_FLOAT16, DT_BF16, DT_COMPLEX32};\n  }\n \n  static TensorType FLOAT() { return TensorType{DT_FLOAT, DT_FLOAT16, DT_BF16}; }\n \n  std::shared_ptr<TensorTypeImpl> tensor_type_impl_;\n};\n"
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