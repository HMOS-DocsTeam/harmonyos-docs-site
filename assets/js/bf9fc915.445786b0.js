"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["253169"], {
195452(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_featured_topics_cannkit_commissioning_tool_parameter_cannkit_example_of_the_precision_comparison_cannkit_example_of_the_precision_comparis_bf9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-featured-topics-cannkit-commissioning-tool-parameter-cannkit-example-of-the-precision-comparison-cannkit-example-of-the-precision-comparis-bf9.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_featured_topics_cannkit_commissioning_tool_parameter_cannkit_example_of_the_precision_comparison_cannkit_example_of_the_precision_comparis_bf9_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-precision-comparison/cannkit-example-of-the-precision-comparison","title":"精度比对结果输出样例","description":"","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-precision-comparison/cannkit-example-of-the-precision-comparison.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-precision-comparison","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-precision-comparison/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-precision-comparison/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"精度比对结果输出样例","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-example-of-the-precision-comparison","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"算子json配置文件样例","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-operator-json/"},"next":{"title":"同源算子调测样例","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-introduction-to-single-sourced/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-precision-comparison/cannkit-example-of-the-precision-comparison.md


const frontMatter = {
	title: '精度比对结果输出样例',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-example-of-the-precision-comparison',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '精度比对结果输出样例';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "精度比对结果输出样例",
        children: "精度比对结果输出样例"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "data_cmp mean is -1.41e-05 data_gd mean is -1.41e-05\nsplit_count:2359296.0; max_diff_hd:0.1;\n---------------------------------------------------------------------------------------\nLoop     ExpectOut       RealOut         FpDiff          RateDiff\n---------------------------------------------------------------------------------------\n00000001         0.0395813       0.0395813       0.0000000       0.0000000\n00000002         0.0160980       0.0160980       0.0000000       0.0000000\n00000003         -0.0443420      -0.0443420      0.0000000       0.0000000\n00000004         -0.0847778      -0.0847778      0.0000000       0.0000000\n00000005         -0.0066605      -0.0066605      0.0000000       0.0000000\n00000006         0.0880737       0.0880737       0.0000000       0.0000000\n00000007         0.0848389       0.0848389       0.0000000       0.0000000\n00000008         0.1083374       0.1083374       0.0000000       0.0000000\n00000009         0.0838623       0.0838623       0.0000000       0.0000000\n00000010         0.0887451       0.0887451       0.0000000       0.0000000\n00000011         0.0572205       0.0572205       0.0000000       0.0000000\n00000012         0.0741577       0.0741577       0.0000000       0.0000000\n00000013         -0.0762329      -0.0762329      0.0000000       0.0000000\n00000014         -0.0957642      -0.0957642      0.0000000       0.0000000\n00000015         0.0102234       0.0102234       0.0000000       0.0000000\n00000016         -0.0828857      -0.0828857      0.0000000       0.0000000\n00000017         -0.1006470      -0.1006470      0.0000000       0.0000000\n00000018         0.0156174       0.0156174       0.0000000       0.0000000\n00000019         0.0326233       0.0326233       0.0000000       0.0000000\n00000020         0.1054688       0.1054688       0.0000000       0.0000000\n00000021         0.0056496       0.0056496       0.0000000       0.0000000\n...             ...             ...             ...             ...\n---------------------------------------------------------------------------------------\nDiffThd          PctThd          PctRlt          Result\n---------------------------------------------------------------------------------------\n0.0050           99.50%          100.000000%     Pass\nSuccess Success Success Success Success\n"
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