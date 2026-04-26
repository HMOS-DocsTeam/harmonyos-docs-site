"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["691039"], {
793287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_featured_topics_cannkit_commissioning_tool_parameter_cannkit_introduction_to_single_sourced_cannkit_introduction_to_single_sourced_md_5a5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-featured-topics-cannkit-commissioning-tool-parameter-cannkit-introduction-to-single-sourced-cannkit-introduction-to-single-sourced-md-5a5.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_featured_topics_cannkit_commissioning_tool_parameter_cannkit_introduction_to_single_sourced_cannkit_introduction_to_single_sourced_md_5a5_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-introduction-to-single-sourced/cannkit-introduction-to-single-sourced","title":"同源算子调测样例","description":"同源算子指算子的输入和输出为同一地址，算子在计算完成后，把原有的输出结果直接覆盖在输入的地址上，同源算子调测时，需要在outputs中配置对应的算子输出，输出名称类型要和input保持一致。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-introduction-to-single-sourced/cannkit-introduction-to-single-sourced.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-introduction-to-single-sourced","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-introduction-to-single-sourced/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-introduction-to-single-sourced/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"同源算子调测样例","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-introduction-to-single-sourced","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"精度比对结果输出样例","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-example-of-the-precision-comparison/"},"next":{"title":"ascendebug调测工具参数说明","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-cli-parameters/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-featured-topics/cannkit-commissioning-tool-parameter/cannkit-introduction-to-single-sourced/cannkit-introduction-to-single-sourced.md


const frontMatter = {
	title: '同源算子调测样例',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-introduction-to-single-sourced',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '同源算子调测样例';

const assets = {

};



const toc = [{
  "value": "同源算子配置示例",
  "id": "同源算子配置示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "同源算子调测样例",
        children: "同源算子调测样例"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同源算子指算子的输入和输出为同一地址，算子在计算完成后，把原有的输出结果直接覆盖在输入的地址上，同源算子调测时，需要在outputs中配置对应的算子输出，输出名称类型要和input保持一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "同源算子配置示例",
      children: "同源算子配置示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensor类：定义的json数据的object中name shape dtype format在inputs和outputs里必须一致，但是data_file必须可区分，在调测过程中，这两个文件会同步到data的目录下，如果文件名相同，则会导致JSON文件被覆盖。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"op_type\": \"AbsCustom\",\n    \"data_script\": \"./add_golden.py\",\n    \"checkpoint_dump_path\": \"./debug_workspace/AddCustom/data/dump\",\n    \"gen_data\": true,\n    \"inputs\": [\n        {\n            \"name\": \"x\",\n            \"dtype\": \"float16\",\n            \"format\": \"ND\",\n            \"ignore\": false,\n            \"shape\": [32],\n            \"param_type\": \"required\",\n            \"data_file\": \"x.bin\"\n        }\n         \n    ],\n    \"outputs\": [\n        {\n            \"name\": \"x\",\n            \"dtype\": \"float16\",\n            \"format\": \"ND\",\n            \"ignore\": false,\n            \"shape\": [32],\n            \"param_type\": \"required\",\n            \"data_file\": \"ref_x.bin\"\n        }\n    ]\n     \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tensorlist类：list中的每个对象必须是同源且数量位置一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"op_type\": \"ForeachACosInplace\",\n    \"data_script\":\"ForeachACosInplace.py\",\n    \"gen_data\": true,\n    \"inputs\": [\n            [{\n                \"name\": \"inputs\",\n                \"dtype\": \"float32\",\n                \"format\": \"ND\",\n                \"param_type\": \"required\",\n                \"shape\": [\n                    10\n                ],\n                \"data_file\": \"x0.bin\"\n            },{\n                \"name\": \"inputs1\",\n                \"dtype\": \"float32\",\n                \"format\": \"ND\",\n                \"param_type\": \"required\",\n                \"shape\": [\n                    8,8\n                ],\n                \"data_file\": \"x1.bin\"\n            }]\n    ],\n    \"outputs\": [\n        [{\n            \"name\": \"inputs\",\n            \"dtype\": \"float32\",\n            \"format\": \"ND\",\n            \"param_type\": \"required\",\n            \"shape\": [\n                10\n            ],\n            \"data_file\": \"ref_x0.bin\"\n        },{\n            \"name\": \"inputs1\",\n            \"dtype\": \"float32\",\n            \"format\": \"ND\",\n            \"param_type\": \"required\",\n            \"shape\": [\n                8,8\n            ],\n            \"data_file\": \"ref_x1.bin\"\n        }\n      ]\n    ]\n}\n"
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