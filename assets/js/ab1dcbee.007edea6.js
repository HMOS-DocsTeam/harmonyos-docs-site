"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["752713"], {
396450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_basicfun_api_basic_services_api_basic_services_c_basic_services_headerfile_capi_oh_pasteboard_err_code_h_capi_oh_pasteboard_err_code_h_md_ab1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-basicfun-api-basic-services-api-basic-services-c-basic-services-headerfile-capi-oh-pasteboard-err-code-h-capi-oh-pasteboard-err-code-h-md-ab1.json
var site_docs_ref_system_basicfun_api_basic_services_api_basic_services_c_basic_services_headerfile_capi_oh_pasteboard_err_code_h_capi_oh_pasteboard_err_code_h_md_ab1_namespaceObject = JSON.parse('{"id":"system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h","title":"oh_pasteboard_err_code.h","description":"概述","source":"@site/docs-ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h.md","sourceDirName":"system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h","slug":"/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"oh_pasteboard_err_code.h","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-pasteboard-err-code-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-oh-pasteboard-err-code-h"},"sidebar":"ref","previous":{"title":"oh_pasteboard.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-h/capi-oh-pasteboard-h"},"next":{"title":"os_account.h","permalink":"/harmonyos-docs-site/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-os-account-h/capi-os-account-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-pasteboard-err-code-h/capi-oh-pasteboard-err-code-h.md


const frontMatter = {
	title: 'oh_pasteboard_err_code.h',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-pasteboard-err-code-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-oh-pasteboard-err-code-h'
};
const contentTitle = 'oh_pasteboard_err_code.h';

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
  "value": "PASTEBOARD_ErrCode",
  "id": "pasteboard_errcode",
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
        id: "oh_pasteboard_err_codeh",
        children: "oh_pasteboard_err_code.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明剪贴板框架错误码信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <database/pasteboard/oh_pasteboard_err_code.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libpasteboard.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.MiscServices.Pasteboard"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-module/capi-pasteboard/capi-pasteboard",
        children: "Pasteboard"
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
              href: "#pasteboard_errcode",
              children: "PASTEBOARD_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASTEBOARD_ErrCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pasteboard_errcode",
      children: "PASTEBOARD_ErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum PASTEBOARD_ErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "错误码信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ERR_OK = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PERMISSION_ERROR = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限校验失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INVALID_PARAMETER = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非法参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_DEVICE_NOT_SUPPORTED = 801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备能力不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_INNER_ERROR = 12900000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_BUSY = 12900003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统忙。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PASTEBOARD_COPY_FILE_ERROR = 12900007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件拷贝失败。  起始版本: 15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PASTEBOARD_PROGRESS_START_ERROR = 12900008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起进度显示失败。  起始版本: 15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PASTEBOARD_PROGRESS_ABNORMAL = 12900009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进度显示异常。  起始版本: 15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERR_PASTEBOARD_GET_DATA_FAILED = 12900010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取剪贴数据失败。  起始版本: 15"
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