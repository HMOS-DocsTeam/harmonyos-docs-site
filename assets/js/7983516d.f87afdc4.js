"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["739381"], {
86352(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_gert_namespace_cannkit_storageshape_cannkit_storageshape_introduction_cannkit_storageshape_introducti_798_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-basic-data-structure-and-apis-cannkit-gert-namespace-cannkit-storageshape-cannkit-storageshape-introduction-cannkit-storageshape-introducti-798.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_basic_data_structure_and_apis_cannkit_gert_namespace_cannkit_storageshape_cannkit_storageshape_introduction_cannkit_storageshape_introducti_798_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-storageshape/cannkit-storageshape-introduction/cannkit-storageshape-introduction","title":"简介","description":"该类描述了tensor的shape，包含两个信息：origin\\\\shape以及storage\\\\shape。其中，origin\\\\shape表示tensor的shape数学描述，storage\\\\shape表示origin\\\\_shape实际运行时的shape格式。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-storageshape/cannkit-storageshape-introduction/cannkit-storageshape-introduction.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-storageshape/cannkit-storageshape-introduction","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-storageshape/cannkit-storageshape-introduction/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-storageshape/cannkit-storageshape-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-storageshape-introduction","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"operator!=","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-storageformat/cannkit-storageformat-operatorb/"},"next":{"title":"构造函数","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-storageshape/cannkit-storageshape-constructor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-gert-namespace/cannkit-storageshape/cannkit-storageshape-introduction/cannkit-storageshape-introduction.md


const frontMatter = {
	title: '简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-storageshape-introduction',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '简介';

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
        id: "简介",
        children: "简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类描述了tensor的shape，包含两个信息：origin_shape以及storage_shape。其中，origin_shape表示tensor的shape数学描述，storage_shape表示origin_shape实际运行时的shape格式。"
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