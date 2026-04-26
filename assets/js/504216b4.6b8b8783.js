"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["990850"], {
918104(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_memory_management_and_synchronization_cannkit_tposition_cannkit_tposition_md_504_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascendc-operator-interface-cannkit-ascend-c-api-cannkit-basic-apis-cannkit-memory-management-and-synchronization-cannkit-tposition-cannkit-tposition-md-504.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascendc_operator_interface_cannkit_ascend_c_api_cannkit_basic_apis_cannkit_memory_management_and_synchronization_cannkit_tposition_cannkit_tposition_md_504_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tposition/cannkit-tposition","title":"TPosition","description":"AscendC管理不同层级的物理内存时，用一种抽象的逻辑位置（TPosition）来表达各级别的存储，代替了片上物理存储的概念，达到隐藏硬件架构的目的。主要的TPosition类型包括：VECIN、VECOUT、VECCALC、A1、A2、B1、B2、CO1、CO2，其中VECIN、VECCALC、VECOUT主要用于矢量编程，A1、A2、B1、B2、C1、C2、CO1、CO2用于矩阵编程。开发者可以参考了解TPosition的基础概念，通过通用约束表1了解TPosition和物理存储的映射关系。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tposition/cannkit-tposition.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tposition","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tposition/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tposition/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"TPosition","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tposition","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"PipeBarrier(ISASI)","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-nuclear-synchronization/cannkit-pipebarrier/"},"next":{"title":"GetBlockNum","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-system-variable-access/cannkit-getblocknum/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-basic-apis/cannkit-memory-management-and-synchronization/cannkit-tposition/cannkit-tposition.md


const frontMatter = {
	title: 'TPosition',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tposition',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = 'TPosition';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
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
        id: "tposition",
        children: "TPosition"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AscendC管理不同层级的物理内存时，用一种抽象的逻辑位置（TPosition）来表达各级别的存储，代替了片上物理存储的概念，达到隐藏硬件架构的目的。主要的TPosition类型包括：VECIN、VECOUT、VECCALC、A1、A2、B1、B2、CO1、CO2，其中VECIN、VECCALC、VECOUT主要用于矢量编程，A1、A2、B1、B2、C1、C2、CO1、CO2用于矩阵编程。开发者可以参考了解TPosition的基础概念，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-general-constraints",
        children: "通用约束"
      }), "表1了解TPosition和物理存储的映射关系。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TPosition定义如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum class TPosition : uint8_t {\n    GM,\n    A1,\n    A2,\n    B1,\n    B2,\n    C1,\n    C2,\n    CO1,\n    CO2,\n    VECIN,\n    VECOUT,\n    VECCALC,\n    LCM = VECCALC,\n    SPM,\n    SHM = SPM,\n    TSCM,\n    C2PIPE2GM,\n    C2PIPE2LOCAL,\n    MAX,\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TPosition枚举值的具体定义如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " TPosition枚举值含义说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "具体含义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global Memory，对应AI Core的外部存储。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VECIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于矢量计算，搬入数据的存放位置，在数据搬入Vector计算单元时使用此位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VECOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于矢量计算，搬出数据的存放位置，在将Vector计算单元结果搬出时使用此位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VECCALC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于矢量计算/矩阵计算，在计算需要临时变量时使用此位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于矩阵计算，存放整块A矩阵，可类比CPU多级缓存中的二级缓存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于矩阵计算，存放整块B矩阵，可类比CPU多级缓存中的二级缓存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于矩阵计算，存放整块Bias矩阵，可类比CPU多级缓存中的二级缓存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于矩阵计算，存放切分后的小块A矩阵，可类比CPU多级缓存中的一级缓存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于矩阵计算，存放切分后的小块B矩阵，可类比CPU多级缓存中的一级缓存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于矩阵计算，存放切分后的小块Bias矩阵，可类比CPU多级缓存中的一级缓存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于矩阵计算，存放小块结果C矩阵，可理解为Cube Out。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于矩阵计算，存放整块结果C矩阵，可理解为Cube Out。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当Unified Buffer内存有溢出风险时，用于Unified Buffer的数据暂存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TSCM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temp Swap Cache Memory, 用于临时把数据交换到额外空间，进行Matmul运算。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C2PIPE2GM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存放FIXPIPE量化参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C2PIPE2LOCAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预留参数。为后续的功能做保留，开发者暂时无需关注。"
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