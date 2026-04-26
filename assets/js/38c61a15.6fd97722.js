"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["750938"], {
740781(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_cann_api_hiai_foundation_c_cannkit_total_cannkit_files_cannkit_hiai_tensor_8_h_cannkit_hiai_tensor_8_h_md_38c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-cann-api-hiai-foundation-c-cannkit-total-cannkit-files-cannkit-hiai-tensor-8-h-cannkit-hiai-tensor-8-h-md-38c.json
var site_docs_ref_cann_api_hiai_foundation_c_cannkit_total_cannkit_files_cannkit_hiai_tensor_8_h_cannkit_hiai_tensor_8_h_md_38c_namespaceObject = JSON.parse('{"id":"cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-tensor-8h/cannkit-hiai-tensor-8h","title":"hiai_tensor.h","description":"概述","source":"@site/docs-ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-tensor-8h/cannkit-hiai-tensor-8h.md","sourceDirName":"cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-tensor-8h","slug":"/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-tensor-8h/cannkit-hiai-tensor-8h","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-tensor-8h/cannkit-hiai-tensor-8h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"hiai_tensor.h","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-hiai-tensor-8h","kit":"AI","last_updated":"2026-04-22","slug":"cannkit-hiai-tensor-8h"},"sidebar":"ref","previous":{"title":"hiai_single_op.h","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-single-op-8h/cannkit-hiai-single-op-8h"},"next":{"title":"HiAISingleOpDescriptor_ConvolutionParam","permalink":"/harmonyos-docs-site/ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-structs/cannkit-sopdesc-convparam/cannkit-sopdesc-convparam"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/cann-api/hiai-foundation-c/cannkit-total/cannkit-files/cannkit-hiai-tensor-8h/cannkit-hiai-tensor-8h.md


const frontMatter = {
	title: 'hiai_tensor.h',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-hiai-tensor-8h',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'cannkit-hiai-tensor-8h'
};
const contentTitle = 'hiai_tensor.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "hiai_tensorh",
        children: "hiai_tensor.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模型推理时使用的输入输出内存相关的辅助接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过以下接口，可以关联AippParam到tensor中，也可计算图片格式需要申请的tensor内存大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <CANNKit/hiai_tensor.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libhiai_foundation.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AI.HiAIFoundation"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit",
        children: "CANN"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["size_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaitensor_getsizewithimageformat",
              children: "HMS_HiAITensor_GetSizeWithImageFormat"
            }), " (NN_TensorDesc *desc, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_imageformat",
              children: "HiAI_ImageFormat"
            }), " format)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据NN_TensorDesc和HiAI_ImageFormat计算申请tensor的大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_NN_ReturnCode ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hms_hiaitensor_setaippparams",
              children: "HMS_HiAITensor_SetAippParams"
            }), " (NN_Tensor *tensor, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/cann-api/hiai-foundation-c/cannkit-index/cannkit/cannkit#hiai_aippparam",
              children: "HiAI_AippParam"
            }), " *aippParams[], size_t aippNum)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给NN_Tensor设置AippParams。"
          })]
        })]
      })]
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