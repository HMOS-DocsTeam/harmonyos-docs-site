"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["856638"], {
235723(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_fast_api_fast_c_fast_kit_total_fast_kit_struct_fast_kit_fast_rect_fast_kit_fast_rect_md_fd0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-fast-api-fast-c-fast-kit-total-fast-kit-struct-fast-kit-fast-rect-fast-kit-fast-rect-md-fd0.json
var site_docs_ref_system_basicfun_api_fast_api_fast_c_fast_kit_total_fast_kit_struct_fast_kit_fast_rect_fast_kit_fast_rect_md_fd0_namespaceObject = JSON.parse('{"id":"system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-struct/fast-kit--fast-rect/fast-kit--fast-rect","title":"FAST_Rect","description":"概述","source":"@site/docs-ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-struct/fast-kit--fast-rect/fast-kit--fast-rect.md","sourceDirName":"system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-struct/fast-kit--fast-rect","slug":"/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-struct/fast-kit--fast-rect/fast-kit--fast-rect","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-struct/fast-kit--fast-rect/fast-kit--fast-rect","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"FAST_Rect","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-rect","kit":"系统","last_updated":"2026-04-22","slug":"fast-kit--fast-rect"},"sidebar":"ref","previous":{"title":"fast_solver_rect_partition.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-solver-rect-partition-8h/fast-kit-fast-solver-rect-partition-8h"},"next":{"title":"FFRT","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/function-flow-runtime-api/function-flow-runtime-c/function-flow-runtime-module/capi-ffrt/capi-ffrt"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-struct/fast-kit--fast-rect/fast-kit--fast-rect.md


const frontMatter = {
	title: 'FAST_Rect',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-rect',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'fast-kit--fast-rect'
};
const contentTitle = 'FAST_Rect';

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
  "value": "成员变量",
  "id": "成员变量",
  "level": 3
}, {
  "value": "结构体成员变量说明",
  "id": "结构体成员变量说明",
  "level": 2
}, {
  "value": "bottom",
  "id": "bottom",
  "level": 3
}, {
  "value": "left",
  "id": "left",
  "level": 3
}, {
  "value": "right",
  "id": "right",
  "level": 3
}, {
  "value": "top",
  "id": "top",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "fast_rect",
        children: "FAST_Rect"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义矩形的数据结构（坐标系说明：X轴从左到右递增，Y轴从上到下递增）。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/fast-api/fast-c/fast-kit-total/fast-kit-files/fast-kit-fast-solver-rect-partition-8h/fast-kit-fast-solver-rect-partition-8h",
        children: "fast_solver_rect_partition.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
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
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#left",
              children: "left"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "横坐标左边界（）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#top",
              children: "top"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "纵坐标上边界（）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#right",
              children: "right"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "横坐标右边界（）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#bottom",
              children: "bottom"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "纵坐标下边界（）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bottom",
      children: "bottom"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t FAST_Rect::bottom\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "纵坐标下边界。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "left",
      children: "left"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t FAST_Rect::left\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "横坐标左边界。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "right",
      children: "right"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t FAST_Rect::right\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "横坐标右边界。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top",
      children: "top"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t FAST_Rect::top\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "纵坐标上边界。"
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