"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["722560"], {
865873(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_vector_calculation_binocular_more_c_3d5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-vector-computation-cannkit-vector-calculation-monocular-cannkit-vector-calculation-binocular-more-c-3d5.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_vector_computation_cannkit_vector_calculation_monocular_cannkit_vector_calculation_binocular_more_c_3d5_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-binocular-more/cannkit-vector-calculation-binocular-more","title":"更多样例","description":"样例模板","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-binocular-more/cannkit-vector-calculation-binocular-more.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-binocular-more","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-binocular-more/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-binocular-more/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"更多样例","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-binocular-more","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Relu","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-relu/"},"next":{"title":"Add","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-binocular/cannkit-add/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-vector-computation/cannkit-vector-calculation-monocular/cannkit-vector-calculation-binocular-more/cannkit-vector-calculation-binocular-more.md


const frontMatter = {
	title: '更多样例',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-vector-calculation-binocular-more',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '更多样例';

const assets = {

};



const toc = [{
  "value": "样例模板",
  "id": "样例模板",
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
        id: "更多样例",
        children: "更多样例"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样例模板",
      children: "样例模板"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了方便开发者快速运行具体指令中的参考样例，本章节提供单目指令的样例模板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以将以下样例模板作为代码框架，只需将具体指令中的样例片段拷贝替换下文代码段中的加粗内容即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"kernel_operator.h\"\n  \nclass KernelUnary {\npublic:\n    __aicore__ inline KernelUnary() {}\n    __aicore__ inline void Init(__gm__ uint8_t* srcGm, __gm__ uint8_t* dstGm)\n    {\n        srcGlobal.SetGlobalBuffer((__gm__ half*)srcGm);\n        dstGlobal.SetGlobalBuffer((__gm__ half*)dstGm);\n        pipe.InitBuffer(inQueueSrc, 1, 512 * sizeof(half));\n        pipe.InitBuffer(outQueueDst, 1, 512 * sizeof(half));\n    }\n    __aicore__ inline void Process()\n    {\n        CopyIn();\n        Compute();\n        CopyOut();\n    }\nprivate:\n    __aicore__ inline void CopyIn()\n    {\n        AscendC::LocalTensor<half> srcLocal = inQueueSrc.AllocTensor<half>();\n        AscendC::DataCopy(srcLocal, srcGlobal, 512);\n        inQueueSrc.EnQue(srcLocal);\n    }\n    __aicore__ inline void Compute()\n    {\n        AscendC::LocalTensor<half> srcLocal = inQueueSrc.DeQue<half>();\n        AscendC::LocalTensor<half> dstLocal = outQueueDst.AllocTensor<half>();\n  \n        AscendC::Sqrt(dstLocal, srcLocal, 512);\n  \n        outQueueDst.EnQue<half>(dstLocal);\n        inQueueSrc.FreeTensor(srcLocal);\n    }\n    __aicore__ inline void CopyOut()\n    {\n        AscendC::LocalTensor<half> dstLocal = outQueueDst.DeQue<half>();\n        AscendC::DataCopy(dstGlobal, dstLocal, 512);\n        outQueueDst.FreeTensor(dstLocal);\n    }\nprivate:\n    AscendC::TPipe pipe;\n    AscendC::TQue<AscendC::QuePosition::VECIN, 1> inQueueSrc;\n    AscendC::TQue<AscendC::QuePosition::VECOUT, 1> outQueueDst;\n    AscendC::GlobalTensor<half> srcGlobal, dstGlobal;\n};\nextern \"C\" __global__ __aicore__ void unary_simple_kernel(__gm__ uint8_t* srcGm, __gm__ uint8_t* dstGm)\n{\n    KernelUnary op;\n    op.Init(srcGm, dstGm);\n    op.Process();\n}\n"
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