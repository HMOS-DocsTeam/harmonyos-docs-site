"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["735916"], {
199400(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_mindspore_lite_api_mindspore_lite_c_mindspore_lite_headerfile_capi_format_h_capi_format_h_md_80f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-mindspore-lite-api-mindspore-lite-c-mindspore-lite-headerfile-capi-format-h-capi-format-h-md-80f.json
var site_docs_ref_mindspore_lite_api_mindspore_lite_c_mindspore_lite_headerfile_capi_format_h_capi_format_h_md_80f_namespaceObject = JSON.parse('{"id":"mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-format-h/capi-format-h","title":"format.h","description":"概述","source":"@site/docs-ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-format-h/capi-format-h.md","sourceDirName":"mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-format-h","slug":"/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-format-h/capi-format-h","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-format-h/capi-format-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"format.h","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-format-h","kit":"AI","last_updated":"2026-04-22","slug":"capi-format-h"},"sidebar":"ref","previous":{"title":"data_type.h","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-data-type-h/capi-data-type-h"},"next":{"title":"model.h","permalink":"/harmonyos-docs-site/ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-model-h/capi-model-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/mindspore-lite-api/mindspore-lite-c/mindspore-lite-headerfile/capi-format-h/capi-format-h.md


const frontMatter = {
	title: 'format.h',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-format-h',
	kit: 'AI',
	last_updated: '2026-04-22',
	slug: 'capi-format-h'
};
const contentTitle = 'format.h';

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
  "value": "OH_AI_Format",
  "id": "oh_ai_format",
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
        id: "formath",
        children: "format.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供张量数据的排列格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <mindspore/format.h>"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_ai_format",
              children: "OH_AI_Format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_Format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSTensor保存的数据支持的排列格式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_ai_format",
      children: "OH_AI_Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AI_Format\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MSTensor保存的数据支持的排列格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_AI_FORMAT_NCHW = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按批次N、通道C、高度H和宽度W的顺序存储张量数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_NHWC = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按批次N、高度H、宽度W和通道C的顺序存储张量数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_NHWC4 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按批次N、高度H、宽度W和通道C的顺序存储张量数据，其中C轴是4字节对齐格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_HWKC = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按高度H、宽度W、核数K和通道C的顺序存储张量数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_HWCK = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按高度H、宽度W、通道C和核数K的顺序存储张量数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_KCHW = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按核数K、通道C、高度H和宽度W的顺序存储张量数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_CKHW = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按通道C、核数K、高度H和宽度W的顺序存储张量数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_KHWC = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按核数K、高度H、宽度W和通道C的顺序存储张量数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_CHWK = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按通道C、高度H、宽度W和核数K的顺序存储张量数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_HW = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按高度H和宽度W的顺序存储张量数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_HW4 = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按高度H和宽度W的顺序存储张量数据，其中W轴是4字节对齐格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_NC = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按批次N和通道C的顺序存储张量数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_NC4 = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按批次N和通道C的顺序存储张量数据，其中C轴是4字节对齐格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_NC4HW4 = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按批次N、通道C、高度H和宽度W的顺序存储张量数据，其中C轴和W轴是4字节对齐格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_NCDHW = 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按批次N、通道C、深度D、高度H和宽度W的顺序存储张量数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_NWC = 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按批次N、宽度W和通道C的顺序存储张量数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AI_FORMAT_NCW = 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按批次N、通道C和宽度W的顺序存储张量数据。"
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