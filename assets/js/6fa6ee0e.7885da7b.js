"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["179034"], {
420892(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_model_conversion_cannkit_variable_data_type_cannkit_variable_data_type_md_6fa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-model-conversion-cannkit-variable-data-type-cannkit-variable-data-type-md-6fa.json
var site_docs_cann_kit_guide_cannkit_model_conversion_cannkit_variable_data_type_cannkit_variable_data_type_md_6fa_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-model-conversion/cannkit-variable-data_type/cannkit-variable-data_type","title":"可变data_type","description":"概述","source":"@site/docs/cann-kit-guide/cannkit-model-conversion/cannkit-variable-data_type/cannkit-variable-data_type.md","sourceDirName":"cann-kit-guide/cannkit-model-conversion/cannkit-variable-data_type","slug":"/cann-kit-guide/cannkit-model-conversion/cannkit-variable-data_type/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-variable-data_type/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"可变data_type","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-variable-data_type","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"模型转换AIPP配置文件说明","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-model-conversion/cannkit-aipp/cannkit-aipp-configuration-file/"},"next":{"title":"部署全流程","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-on-device-deployment/cannkit-whole-deployment-process/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-model-conversion/cannkit-variable-data_type/cannkit-variable-data_type.md


const frontMatter = {
	title: '可变data_type',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-variable-data_type',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '可变data_type';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "使用说明",
  "id": "使用说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "可变data_type",
        children: "可变data_type"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可变data_type是OMG工具支持的一个功能，用于模型输入输出数据类型多样性的场景，无需修改训练好的模型，在使用OMG工具进行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-overall-parameter",
        children: "模型转换"
      }), "时，通过指定输入、输出数据类型使得同一个模型适用于不同输入输出的场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行模型转换时，输入输出数据类型指定分别需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-overall-parameter",
        children: "OMG参数"
      }), "的input_type、output_type来实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./omg --model=./model.pb --framework=3 --output=./model --input_shape=\"inputs:1,512,512,1\" --out_nodes=\"outputs:0\" --input_type=\"inputs:FP16\" --output_type=\"outputs:UINT8\"\n"
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