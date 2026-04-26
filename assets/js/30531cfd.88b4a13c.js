"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["516377"], {
821751(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_basic_concepts_cannkit_hardware_architecture_cannkit_computing_unit_cannkit_computing_unit_md_305_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-custom-operator-development-cannkit-basic-concepts-cannkit-hardware-architecture-cannkit-computing-unit-cannkit-computing-unit-md-305.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_custom_operator_development_cannkit_basic_concepts_cannkit_hardware_architecture_cannkit_computing_unit_cannkit_computing_unit_md_305_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-hardware-architecture/cannkit-computing-unit/cannkit-computing-unit","title":"计算单元","description":"计算单元是AI Core中提供强大算力的核心单元，包括三种基础*计算单元*：Cube（矩阵）计算单元、Vector（向量）计算单元和Scalar（标量）计算单元，完成AI Core中不同类型的数据计算。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-hardware-architecture/cannkit-computing-unit/cannkit-computing-unit.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-hardware-architecture/cannkit-computing-unit","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-hardware-architecture/cannkit-computing-unit/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-hardware-architecture/cannkit-computing-unit/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"计算单元","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-computing-unit","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基本架构","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-hardware-architecture/cannkit-basic-architecture/"},"next":{"title":"存储单元","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-hardware-architecture/cannkit-storage-unit/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-custom-operator-development/cannkit-basic-concepts/cannkit-hardware-architecture/cannkit-computing-unit/cannkit-computing-unit.md


const frontMatter = {
	title: '计算单元',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-computing-unit',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '计算单元';

const assets = {

};



const toc = [{
  "value": "Scalar",
  "id": "scalar",
  "level": 2
}, {
  "value": "Vector",
  "id": "vector",
  "level": 2
}, {
  "value": "Cube",
  "id": "cube",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "计算单元",
        children: "计算单元"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["计算单元是AI Core中提供强大算力的核心单元，包括三种基础", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "计算单元"
        })
      }), "：Cube（矩阵）计算单元、Vector（向量）计算单元和Scalar（标量）计算单元，完成AI Core中不同类型的数据计算。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scalar",
      children: "Scalar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scalar负责各类型的标量数据运算和程序的流程控制。功能上可以看做一个小CPU，完成整个程序的循环控制、分支判断、Cube/Vector等指令的地址和参数计算以及基本的算术运算，并且可以通过在事件同步模块中插入同步符的方式来控制AI Core中其他功能性单元的执行流水。相对于Host CPU，Scalar的计算能力较弱，重点用于发射指令，性能调优时尽量减少if/else及变量运算。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下图所示：Scalar通过标准的ALU(Arithmetic Logic Unit)执行标量运算指令。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Scalar对指令和数据的访问"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(31395)/* ["default"] */.A) + "",
        width: "401",
        height: "369"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ALU需要的代码段和数据段（栈空间）都来自于GM。ICache用于缓存代码段，缓存大小与硬件规格相关，比如为16K或32K，以2K为单位加载；DCache用于缓存数据段，大小也与硬件规格相关，比如为16K，以cacheline(64Byte)为单位加载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "考虑到核内访问效率最高，应尽量保证代码段和数据段被缓存在ICache和DCache，避免核外访问； 同时根据数据加载单位不同，编程时可以考虑单次加载数据大小，来提升加载效率。例如在DCache加载数据时，当数据内存首地址与cacheline(64Byte)对齐时，加载效率最高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vector",
      children: "Vector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vector负责执行向量运算。向量计算单元执行向量指令，类似于传统的单指令多数据(Single Instruction Multiple Data,SIMD)指令，每个向量指令可以完成多个操作数的同一类型运算。如下图所示，向量计算单元可以快速完成两个FP16类型的向量相加或者相乘。向量指令支持多次迭代执行，也支持对带有间隔的向量直接进行运算。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 向量运算"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(225103)/* ["default"] */.A) + "",
        width: "441",
        height: "217"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vector所有计算的源数据以及目标数据都要求存储在Unified Buffer中，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "并要求首地址和操作长度都满足32Byte"
        })
      }), "对齐。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cube",
      children: "Cube"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cube计算单元负责执行矩阵运算。Cube一次执行可以完成A矩阵(M*K)与B矩阵(K*N)的矩阵乘。如下图所示红色虚线框划出了Cube计算单元及其访问的存储单元，其中左矩阵A来源于L0A，右矩阵B来源于L0B，L0C存储矩阵乘的结果和中间结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 矩阵运算"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(600327)/* ["default"] */.A) + "",
        width: "528",
        height: "357"
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
600327(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799578-f546778c65313c3036a3aed87c6e9641.png");

},
225103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479227-03f464366ef57d4f0568dbe220d509d5.png");

},
31395(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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