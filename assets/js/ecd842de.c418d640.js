"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["212657"], {
44657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_pen_api_pen_c_api_pen_headerfile_and_struct_pen_struct_pen_handwrite_struct_historicalpoint_pen_handwrite_struct_historicalpoint_md_ecd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-pen-api-pen-c-api-pen-headerfile-and-struct-pen-struct-pen-handwrite-struct-historicalpoint-pen-handwrite-struct-historicalpoint-md-ecd.json
var site_docs_ref_system_hardware_api_pen_api_pen_c_api_pen_headerfile_and_struct_pen_struct_pen_handwrite_struct_historicalpoint_pen_handwrite_struct_historicalpoint_md_ecd_namespaceObject = JSON.parse('{"id":"system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-handwrite-struct-historicalpoint/pen-handwrite-struct-historicalpoint","title":"HandWrite_HistoricalPoint","description":"概述","source":"@site/docs-ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-handwrite-struct-historicalpoint/pen-handwrite-struct-historicalpoint.md","sourceDirName":"system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-handwrite-struct-historicalpoint","slug":"/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-handwrite-struct-historicalpoint/pen-handwrite-struct-historicalpoint","permalink":"/harmonyos-docs-site/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-handwrite-struct-historicalpoint/pen-handwrite-struct-historicalpoint","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"HandWrite_HistoricalPoint","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-handwrite-struct-historicalpoint","kit":"系统","last_updated":"2026-04-22","slug":"pen-handwrite-struct-historicalpoint"},"sidebar":"ref","previous":{"title":"HMS_GCP_PickedColorInfo","permalink":"/harmonyos-docs-site/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-imagefeaturepicker-struct-colorinfo/pen-imagefeaturepicker-struct-colorinfo"},"next":{"title":"ArkTS API 错误码","permalink":"/harmonyos-docs-site/ref/system-hardware-api/pen-api/pen-error-code/pen-error-code"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-struct/pen-handwrite-struct-historicalpoint/pen-handwrite-struct-historicalpoint.md


const frontMatter = {
	title: 'HandWrite_HistoricalPoint',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-handwrite-struct-historicalpoint',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'pen-handwrite-struct-historicalpoint'
};
const contentTitle = 'HandWrite_HistoricalPoint';

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
  "value": "x",
  "id": "x",
  "level": 3
}, {
  "value": "y",
  "id": "y",
  "level": 3
}, {
  "value": "timeStamp",
  "id": "timestamp",
  "level": 3
}, {
  "value": "force",
  "id": "force",
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
        id: "handwrite_historicalpoint",
        children: "HandWrite_HistoricalPoint"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义历史触摸点信息的结构体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Stylus.HandWrite"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.0(20)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-module/pen-handwrite-c/pen-handwrite-c",
        children: "HandWrite"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/pen-api/pen-c-api/pen-headerfile-and-struct/pen-headerfile/pen-handwrite-headerfile-declare/pen-handwrite-headerfile-declare",
        children: "native_handwrite_api.h"
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
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#x",
              children: "x"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "历史触摸点的X坐标，相对于被触摸元素左边缘，单位：像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#y",
              children: "y"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "历史触摸点的Y坐标，相对于被触摸元素上边缘，单位：像素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["int64_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#timestamp",
              children: "timeStamp"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前历史触摸点的时间戳，单位：ns。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#force",
              children: "force"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前历史触摸点的压力值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "x",
      children: "x"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float HandWrite_HistoricalPoint::x\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "历史触摸点的X坐标，相对于被触摸元素左边缘。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "y",
      children: "y"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float HandWrite_HistoricalPoint::y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "历史触摸点的Y坐标，相对于被触摸元素上边缘。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "timestamp",
      children: "timeStamp"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int64_t HandWrite_HistoricalPoint::timeStamp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前历史触摸点的时间戳，单位为ns。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "force",
      children: "force"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float HandWrite_HistoricalPoint::force\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前历史触摸点的压力值。"
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