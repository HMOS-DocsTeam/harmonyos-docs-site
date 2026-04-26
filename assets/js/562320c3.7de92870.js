"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["29000"], {
971603(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_mindspore_lite_api_mindspore_lite_c_mindspore_lite_headerfile_capi_status_h_capi_status_h_md_562_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-mindspore-lite-api-mindspore-lite-c-mindspore-lite-headerfile-capi-status-h-capi-status-h-md-562.json
var site_docs_ref_mindspore_lite_api_mindspore_lite_c_mindspore_lite_headerfile_capi_status_h_capi_status_h_md_562_namespaceObject = JSON.parse('{"id":"mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h","title":"status.h","description":"概述","source":"@site/docs-ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h.md","sourceDirName":"mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h","slug":"/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"status.h","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-status-h","kit":"AI","last_updated":"2026-04-22","slug":"capi-status-h"},"sidebar":"ref","previous":{"title":"model.h","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h"},"next":{"title":"tensor.h","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-tensor-h/capi-tensor-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-status-h/capi-status-h.md


const frontMatter = {
	title: 'status.h',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-status-h',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'capi-status-h'
};
const contentTitle = 'status.h';

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
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "OH_AI_CompCode",
  "id": "oh_ai_compcode",
  "level": 3
}, {
  "value": "OH_AI_Status",
  "id": "oh_ai_status",
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
        id: "statush",
        children: "status.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供了MindSpore Lite运行时的状态码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <mindspore/status.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libmindspore_lite_ndk.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ai.MindSpore"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-module/capi-mindspore/capi-mindspore",
        children: "MindSpore"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_compcode",
              children: "OH_AI_CompCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MindSpore不同组件的代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_status",
              children: "OH_AI_Status"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_Status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MindSpore的状态码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_compcode",
      children: "OH_AI_CompCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AI_CompCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MindSpore不同组件的代码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_COMPCODE_CORE = 0x00000000u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MindSpore Core的代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_COMPCODE_MD = 0x10000000u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MindSpore MindData的代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_COMPCODE_ME = 0x20000000u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MindSpore MindExpression的代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_COMPCODE_MC = 0x30000000u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MindSpore的代码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_COMPCODE_LITE = 0xF0000000u"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MindSpore Lite的代码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_status",
      children: "OH_AI_Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AI_Status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MindSpore的状态码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_CORE_FAILED = OH_AI_COMPCODE_CORE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_ERROR = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_NULLPTR = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_PARAM_INVALID = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_NO_CHANGE = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_SUCCESS_EXIT = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -5)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_MEMORY_FAILED = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -6)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_NOT_SUPPORT = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -7)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_THREADPOOL_ERROR = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -8)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_UNINITIALIZED_OBJ = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -9)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_OUT_OF_TENSOR_RANGE = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -100)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_INPUT_TENSOR_ERROR = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -101)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_REENTRANT_ERROR = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -102)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_GRAPH_FILE_ERROR = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -200)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_NOT_FIND_OP = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -300)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_INVALID_OP_NAME = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -301)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_INVALID_OP_ATTR = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -302)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_OP_EXECUTE_FAILURE = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -303)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_FORMAT_ERROR = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -400)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_INFER_ERROR = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -500)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_INFER_INVALID = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -501)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_INPUT_PARAM_INVALID = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -600)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_AIPP_NOT_SUPPORTED = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -700)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_STATUS_LITE_AIPP_INFER_ERROR = OH_AI_COMPCODE_LITE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0x0FFFFFFF & -701)"
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