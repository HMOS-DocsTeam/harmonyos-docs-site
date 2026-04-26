"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["83028"], {
410358(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_security_api_device_security_api_devicesecurity_c_devicesecurity_capi_structs_devicesecurity_capi_structs_securityaudit_event_devicesecurity_capi_structs_securityaudit_event_md_ace_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-security-api-device-security-api-devicesecurity-c-devicesecurity-capi-structs-devicesecurity-capi-structs-securityaudit-event-devicesecurity-capi-structs-securityaudit-event-md-ace.json
var site_docs_ref_system_security_api_device_security_api_devicesecurity_c_devicesecurity_capi_structs_devicesecurity_capi_structs_securityaudit_event_devicesecurity_capi_structs_securityaudit_event_md_ace_namespaceObject = JSON.parse('{"id":"system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-event/devicesecurity-capi-structs-securityaudit-event","title":"SecurityAudit_Event","description":"概述","source":"@site/docs-ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-event/devicesecurity-capi-structs-securityaudit-event.md","sourceDirName":"system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-event","slug":"/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-event/devicesecurity-capi-structs-securityaudit-event","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-event/devicesecurity-capi-structs-securityaudit-event","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"SecurityAudit_Event","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityaudit-event","kit":"系统","last_updated":"2026-04-22","slug":"devicesecurity-capi-structs-securityaudit-event"},"sidebar":"ref","previous":{"title":"security_antivirus.h","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-files/devicesecurity-capi-security-antivirus-8h/devicesecurity-capi-security-antivirus-8h"},"next":{"title":"SecurityAudit_Filter","permalink":"/harmonyos-docs-site/ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-filter/devicesecurity-capi-structs-securityaudit-filter"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-security-api/device-security-api/devicesecurity-c/devicesecurity-capi-structs/devicesecurity-capi-structs-securityaudit-event/devicesecurity-capi-structs-securityaudit-event.md


const frontMatter = {
	title: 'SecurityAudit_Event',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityaudit-event',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'devicesecurity-capi-structs-securityaudit-event'
};
const contentTitle = 'SecurityAudit_Event';

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
  "value": "content",
  "id": "content",
  "level": 3
}, {
  "value": "eventId",
  "id": "eventid",
  "level": 3
}, {
  "value": "metadata",
  "id": "metadata",
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
        id: "securityaudit_event",
        children: "SecurityAudit_Event"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义审计事件信息。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["int64_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#eventid",
              children: "eventId"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "审计事件ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#metadata",
              children: "metadata"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "集成了事件版本号、事件接收时间、设备ID和用户ID的json字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#content",
              children: "content"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "事件内容。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "content",
      children: "content"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* SecurityAudit_Event::content\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "事件内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eventid",
      children: "eventId"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int64_t SecurityAudit_Event::eventId\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "审计事件ID。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metadata",
      children: "metadata"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* SecurityAudit_Event::metadata\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "集成了事件版本号、事件接收时间、设备ID和用户ID的json字符串。"
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