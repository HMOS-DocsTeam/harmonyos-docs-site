"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["887938"], {
987999(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_device_security_api_devicesecurity_c_devicesecurity_capi_structs_devicesecurity_capi_structs_securityaudit_filter_devicesecurity_capi_structs_securityaudit_filter_md_09a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-device-security-api-devicesecurity-c-devicesecurity-capi-structs-devicesecurity-capi-structs-securityaudit-filter-devicesecurity-capi-structs-securityaudit-filter-md-09a.json
var site_docs_ref_system_security_api_device_security_api_devicesecurity_c_devicesecurity_capi_structs_devicesecurity_capi_structs_securityaudit_filter_devicesecurity_capi_structs_securityaudit_filter_md_09a_namespaceObject = JSON.parse('{"id":"system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-filter/devicesecurity-capi-structs-securityaudit-filter","title":"SecurityAudit_Filter","description":"概述","source":"@site/docs-ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-filter/devicesecurity-capi-structs-securityaudit-filter.md","sourceDirName":"system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-filter","slug":"/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-filter/devicesecurity-capi-structs-securityaudit-filter","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-filter/devicesecurity-capi-structs-securityaudit-filter","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"SecurityAudit_Filter","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityaudit-filter","kit":"系统","last_updated":"2026-04-22","slug":"devicesecurity-capi-structs-securityaudit-filter"},"sidebar":"ref","previous":{"title":"SecurityAudit_Event","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-event/devicesecurity-capi-structs-securityaudit-event"},"next":{"title":"SecurityAntivirus_Antivirus","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityantivirus/devicesecurity-capi-structs-securityantivirus"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-filter/devicesecurity-capi-structs-securityaudit-filter.md


const frontMatter = {
	title: 'SecurityAudit_Filter',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityaudit-filter',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'devicesecurity-capi-structs-securityaudit-filter'
};
const contentTitle = 'SecurityAudit_Filter';

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
  "value": "isInclude",
  "id": "isinclude",
  "level": 3
}, {
  "value": "type",
  "id": "type",
  "level": 3
}, {
  "value": "value",
  "id": "value",
  "level": 3
}, {
  "value": "valueCount",
  "id": "valuecount",
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
        id: "securityaudit_filter",
        children: "SecurityAudit_Filter"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供过滤条件。"
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
        href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit",
        children: "SecurityAudit"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-audit-8h/devicesecurity-capi-security-audit-8h",
        children: "security_audit.h"
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
            children: ["bool ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#isinclude",
              children: "isInclude"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUE: 符合条件的事件被返回给客户端。 FALSE: 符合条件的事件不被返回给客户端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-index/devicesecurity-capi-securityaudit/devicesecurity-capi-securityaudit#securityaudit_filtertype",
              children: "SecurityAudit_FilterType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#type",
              children: "type"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过滤器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const char ** ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#value",
              children: "value"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件的过滤器的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint64_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#valuecount",
              children: "valueCount"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过滤器值的数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isinclude",
      children: "isInclude"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool SecurityAudit_Filter::isInclude\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TRUE: 符合条件的事件被返回给客户端。 FALSE: 符合条件的事件不被返回给客户端。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type",
      children: "type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityAudit_FilterType SecurityAudit_Filter::type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "过滤器类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "value",
      children: "value"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char** SecurityAudit_Filter::value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件的过滤器的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "valuecount",
      children: "valueCount"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint64_t SecurityAudit_Filter::valueCount\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "过滤器值的数量。"
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