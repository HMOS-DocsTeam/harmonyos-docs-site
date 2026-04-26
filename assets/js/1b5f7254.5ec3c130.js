"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["958064"], {
685783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascend_kirin_compatibility_cannkit_ascend_910_b_kirinx_90_cannkit_basic_api_cannkit_basic_datatype_cannkit_basic_datatype_md_1b5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascend-kirin-compatibility-cannkit-ascend-910-b-kirinx-90-cannkit-basic-api-cannkit-basic-datatype-cannkit-basic-datatype-md-1b5.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascend_kirin_compatibility_cannkit_ascend_910_b_kirinx_90_cannkit_basic_api_cannkit_basic_datatype_cannkit_basic_datatype_md_1b5_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-datatype/cannkit-basic-datatype","title":"数据类型","description":"KirinX90/Kirin9030除了API不支持bfloat16\\\\t，MrgSort、Mmad基础api（如不支持float等）、Cast基础API（如不支持s64）等部分API还存在其它数据类型差异，详见《Ascend C算子接口》。若开发者在Ascend910B/Ascend910C使用bfloat16\\\\t数据类型，在Kirin平台上需要替换成其它数据类型（比如half）。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-datatype/cannkit-basic-datatype.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-datatype","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-datatype/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-datatype/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"数据类型","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-basic-datatype","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"L2 Cache","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-l2cache/"},"next":{"title":"原子操作","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-atomic/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-datatype/cannkit-basic-datatype.md


const frontMatter = {
	title: '数据类型',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-basic-datatype',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '数据类型';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "数据类型",
        children: "数据类型"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["KirinX90/Kirin9030除了API不支持bfloat16_t，MrgSort、Mmad基础api（如不支持float等）、Cast基础API（如不支持s64）等部分API还存在其它数据类型差异，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-ascend-c-apis",
        children: "《Ascend C算子接口》"
      }), "。若开发者在Ascend910B/Ascend910C使用bfloat16_t数据类型，在Kirin平台上需要替换成其它数据类型（比如half）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 数据类型差异兼容说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ToBfloat16、ToFloat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持功能和bfloat16_t数据类型绑定的接口"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GatherMask、Cast、Duplicate、Brcb、Gather、Copy、DataCopy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持bfloat16_t数据类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sort32、MrgSort、Mmad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持float数据类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SetHF32Mode、SetHF32TransMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持HF32模式"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "InitConstValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持bfloat16_t、float、int32_t、uint32_t数据类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LoadData、Fixpipe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持bfloat16_t、float数据类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cast"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-ascend-c-apis",
              children: "《Ascend C算子接口》"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DataCopy: L1 Buffer->Bias Table"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["KirinX90/Kirin9030只支持fp16数据类型，且排布方式有差异，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-basic-api/cannkit-basic-datacopy",
              children: "数据搬运"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对数据类型有差异的情况，建议开发者采用如下编程方式，支撑同一份算子代码在不同芯片平台执行："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["方式1：将数据类型作为算子模板参数传入，参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.hiascend.com/document/detail/zh/canncommercial/83RC1/opdevg/Ascendcopdevg/atlas_ascendc_10_00025.html",
          children: "Tiling模板编程"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方式2：通过适当的NPU_ARCH 编译宏隔离，在算子Kernel中使用using关键字实现数据类型参数化编程。以基础API Mmad为例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    /* Step1: 参数化数据类型 */\n#if defined(__NPU_ARCH__) && (__NPU_ARCH__ == 2201)\n    using L0cDtype = float\n#endif\n#if defined(__NPU_ARCH__) && (__NPU_ARCH__ == 3003 || __NPU_ARCH__ == 3113)\n    using L0cDtype = half\n#endif\n    // ...\n    /* Step2： 各平台，归一化编程 */\n    // kernel 分配内存大小举例\n    tPipe->InitBuffer(l0cQue, tiling.dbL0c, tiling.baseM * tiling.baseN * sizeof(L0cDtype));\n    // ...\n    // kerenl mmad计算api举例\n    mmad<L0cDtype, L0aDtype, L0bDtype, BiasDtype>(dstLocal, fmLocal, filterLocal, biasLocal, mmadParams);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(596660)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["各产品对应的NPU_ARCH，请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-migration-guidance-overview",
          children: "概述"
        }), "中表1产品型号和__NPU_ARCH__的对应关系。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若数据类型差异影响算子输入和输出数据类型，建议采用方式1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若只是算子中间的计算数据类型有差异，建议采用方式2。"
      }), "\n"]
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
596660(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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