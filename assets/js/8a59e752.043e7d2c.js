"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["281258"], {
968755(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascend_kirin_compatibility_cannkit_ascend_910_b_kirinx_90_cannkit_basic_api_cannkit_basic_matrix_computation_cannkit_basic_matrix_computation_md_8a5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascend-kirin-compatibility-cannkit-ascend-910-b-kirinx-90-cannkit-basic-api-cannkit-basic-matrix-computation-cannkit-basic-matrix-computation-md-8a5.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascend_kirin_compatibility_cannkit_ascend_910_b_kirinx_90_cannkit_basic_api_cannkit_basic_matrix_computation_cannkit_basic_matrix_computation_md_8a5_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-matrix-computation/cannkit-basic-matrix-computation","title":"矩阵计算","description":"KirinX90/Kirin9030处理器不支持结构化稀疏功能，并且Mmad左矩阵分形结构在Kirin9030有差异。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-matrix-computation/cannkit-basic-matrix-computation.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-matrix-computation","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-matrix-computation/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-matrix-computation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"矩阵计算","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-basic-matrix-computation","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"同步控制","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-sync/"},"next":{"title":"数据搬运","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-datacopy/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-matrix-computation/cannkit-basic-matrix-computation.md


const frontMatter = {
	title: '矩阵计算',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-basic-matrix-computation',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '矩阵计算';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "矩阵计算",
        children: "矩阵计算"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KirinX90/Kirin9030处理器不支持结构化稀疏功能，并且Mmad左矩阵分形结构在Kirin9030有差异。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 矩阵计算兼容说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "基础API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "兼容说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MmadWithSparse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持。不支持结构化稀疏功能，因此算子需要采用正常稠密的矩阵计算。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mmad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kirin9030芯片平台，L0A Buffer分形改变，从ZZ(Ascend910B/Ascend910C/KirinX90)转换为ZN格式。算子做LoadData时，需要做LoadData参数修改适配，详见下图。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mmad左矩阵分形格式变换修改适配方案："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(789875)/* ["default"] */.A) + "",
        width: "457",
        height: "373"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 示例代码\n__aicore__ inline void SplitA()\n{\n    int srcOffset = 0;\n    int dstOffset = 0;\n    AscendC::LocalTensor<half> a1Local = inQueueA1.DeQue<half>();\n    AscendC::LocalTensor<half> a2Local = inQueueA2.AllocTensor<half>();\n#if defined(__NPU_ARCH__) && (__NPU_ARCH__ == 2201 || __NPU_ARCH__ == 3003)\n    // Ascend910B、Ascend910C和KirinX90，LoadData时做Nz2Zz的分形转换\n    for (int i = 0; i < mBlocks; ++i) {\n        AscendC::LoadData2DParams loadDataParams;\n        // kBlocks表示列方向上有几个宽为16的half类型矩阵\n        loadDataParams.repeatTimes = kBlocks;\n        // mBlocks表示行方向上有几个高为16的half类型矩阵\n        loadDataParams.srcStride = mBlocks;\n        loadDataParams.ifTranspose = false;\n        AscendC::LoadData(a2Local[dstOffset], a1Local[srcOffset], loadDataParams);\n        srcOffset += 16 * 16;\n        dstOffset += k * 16;\n    }\n#endif\n#if defined(__NPU_ARCH__) && (__NPU_ARCH__ == 3113)\n    // Kirin9030,LoadData时不需要做Nz2Zz的分形转换，对应搬运参数需要修改\n    AscendC::LoadData2DParams loadDataParams;\n    loadDataParams.repeatTimes = m * k / 512; // 小z矩阵的个数\n    loadDataParams.srcStride = 1; // 小z矩阵之间的间隔\n    loadDataParams.dstGap = 0;\n    loadDataParams.ifTranspose = false;\n    AscendC::LoadData(a2Local, a1Local, loadDataParams);\n\n    inQueueA2.EnQue<half>(a2Local);\n    inQueueA1.FreeTensor(a1Local);\n#endif\n}\n"
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
789875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479293-893c995fbed4385a2753827a183a91e9.png");

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