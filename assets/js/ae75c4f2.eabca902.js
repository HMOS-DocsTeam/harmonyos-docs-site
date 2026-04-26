"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["164045"], {
605834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_fast_api_fast_c_fast_kit_total_fast_kit_files_fast_kit_fast_solver_rect_partition_8_h_fast_kit_fast_solver_rect_partition_8_h_md_ae7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-fast-api-fast-c-fast-kit-total-fast-kit-files-fast-kit-fast-solver-rect-partition-8-h-fast-kit-fast-solver-rect-partition-8-h-md-ae7.json
var site_docs_ref_system_basicfun_api_fast_api_fast_c_fast_kit_total_fast_kit_files_fast_kit_fast_solver_rect_partition_8_h_fast_kit_fast_solver_rect_partition_8_h_md_ae7_namespaceObject = JSON.parse('{"id":"system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-solver-rect-partition-8h/fast-kit-fast-solver-rect-partition-8h","title":"fast_solver_rect_partition.h","description":"概述","source":"@site/docs-ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-solver-rect-partition-8h/fast-kit-fast-solver-rect-partition-8h.md","sourceDirName":"system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-solver-rect-partition-8h","slug":"/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-solver-rect-partition-8h/fast-kit-fast-solver-rect-partition-8h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-solver-rect-partition-8h/fast-kit-fast-solver-rect-partition-8h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"fast_solver_rect_partition.h","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast-solver-rect-partition-8h","kit":"系统","last_updated":"2026-04-22","slug":"fast-kit-fast-solver-rect-partition-8h"},"sidebar":"ref","previous":{"title":"fast_common_def.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-common-def-8h/fast-kit-fast-common-def-8h"},"next":{"title":"FAST_Rect","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-struct/fast-kit--fast-rect/fast-kit--fast-rect"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-solver-rect-partition-8h/fast-kit-fast-solver-rect-partition-8h.md


const frontMatter = {
	title: 'fast_solver_rect_partition.h',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast-solver-rect-partition-8h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'fast-kit-fast-solver-rect-partition-8h'
};
const contentTitle = 'fast_solver_rect_partition.h';

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
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
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
        id: "fast_solver_rect_partitionh",
        children: "fast_solver_rect_partition.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "矩形划分求解器相关数据结构及函数定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <FASTKit/fast_solver_rect_partition.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libfast_solver.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.FAST.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.2(22)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast",
        children: "FAST"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-struct/fast-kit--fast-rect/fast-kit--fast-rect",
              children: "FAST_Rect"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义矩形的数据结构（坐标系说明：X轴从左到右递增，Y轴从上到下递增）。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
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
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-struct/fast-kit--fast-rect/fast-kit--fast-rect",
              children: "FAST_Rect"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_rect",
              children: "FAST_Rect"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义矩形的数据结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_rectpartitionconfig",
              children: "FAST_RectPartitionConfig"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_rectpartitionconfig",
              children: "FAST_RectPartitionConfig"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "矩形划分求解器的不透明配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["FAST_EXPORT ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1",
              children: "FAST_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_rectpartition_createconfig",
              children: "HMS_FAST_RectPartition_CreateConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_rectpartitionconfig",
              children: "FAST_RectPartitionConfig"
            }), " **config)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建矩形划分求解器的不透明配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FAST_EXPORT void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_rectpartition_destroyconfig",
              children: "HMS_FAST_RectPartition_DestroyConfig"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_rectpartitionconfig",
              children: "FAST_RectPartitionConfig"
            }), " *config)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁矩形划分求解器的不透明配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FAST_EXPORT ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1",
              children: "FAST_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_rectpartition_setalgo",
              children: "HMS_FAST_RectPartition_SetAlgo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_rectpartitionconfig",
              children: "FAST_RectPartitionConfig"
            }), " *config, const char *name)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置矩形划分求解器使用的算法。目前仅支持扫描线算法“SweepLineAlgo”，输出数量尽可能少（不保证最优性）的不相交矩形集合，复杂度为。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FAST_EXPORT ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_errorcode-1",
              children: "FAST_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#hms_fast_rectpartition_solve",
              children: "HMS_FAST_RectPartition_Solve"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-index/fast-kit-fast/fast-kit-fast#fast_rectpartitionconfig",
              children: "FAST_RectPartitionConfig"
            }), " *config, size_t size, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-struct/fast-kit--fast-rect/fast-kit--fast-rect",
              children: "FAST_Rect"
            }), " *origin, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-struct/fast-kit--fast-rect/fast-kit--fast-rect",
              children: "FAST_Rect"
            }), " *result, size_t *resultSize)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在指定不透明配置下解决矩形划分问题。函数接收若干个彼此不相交的矩形作为输入，计算出覆盖相同区域的矩形划分方案，并使输出的矩形数量尽可能少。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：  1. 输入须保证矩形两两不相交（即任意两个矩形满足： 或 或或 ），否则函数返回FAST_ERROR_CODE_ILLEGAL_INPUT。  2. 函数保证输出矩形的数量小于等于输入矩形的数量。"]
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