"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["404812"], {
298461(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_remote_communication_api_remote_communication_c_remote_communication_overview_c_remote_communication_struct_x_rcp_time_info_x_rcp_time_info_md_b59_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-remote-communication-api-remote-communication-c-remote-communication-overview-c-remote-communication-struct-x-rcp-time-info-x-rcp-time-info-md-b59.json
var site_docs_ref_system_network_api_remote_communication_api_remote_communication_c_remote_communication_overview_c_remote_communication_struct_x_rcp_time_info_x_rcp_time_info_md_b59_namespaceObject = JSON.parse('{"id":"system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___time_info/x_rcp___time_info","title":"Rcp_TimeInfo","description":"概述","source":"@site/docs-ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___time_info/x_rcp___time_info.md","sourceDirName":"system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___time_info","slug":"/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___time_info/x_rcp___time_info","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___time_info/x_rcp___time_info","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":45,"frontMatter":{"title":"Rcp_TimeInfo","sidebar_position":45,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___time_info","kit":"系统","last_updated":"2026-04-20","slug":"x_rcp___time_info"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___time_info/x_rcp___time_info.md


const frontMatter = {
	title: 'Rcp_TimeInfo',
	sidebar_position: 45,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___time_info',
	kit: '系统',
	last_updated: '2026-04-20',
	slug: 'x_rcp___time_info'
};
const contentTitle = 'Rcp_TimeInfo';

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
  "value": "connectTime",
  "id": "connecttime",
  "level": 3
}, {
  "value": "fileTime",
  "id": "filetime",
  "level": 3
}, {
  "value": "nameLookUpTime",
  "id": "namelookuptime",
  "level": 3
}, {
  "value": "preTransferTime",
  "id": "pretransfertime",
  "level": 3
}, {
  "value": "redirectTime",
  "id": "redirecttime",
  "level": 3
}, {
  "value": "startTransferTime",
  "id": "starttransfertime",
  "level": 3
}, {
  "value": "tlsHandshakeTime",
  "id": "tlshandshaketime",
  "level": 3
}, {
  "value": "totalTime",
  "id": "totaltime",
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
        id: "rcp_timeinfo",
        children: "Rcp_TimeInfo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应计时信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["它将在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response/x_rcp___response#timeinfo",
        children: "Rcp_Response.timeInfo"
      }), "中被收集，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___tracing_configuration/x_rcp___tracing_configuration#collecttimeinfo",
        children: "Rcp_TracingConfiguration.collectTimeInfo"
      }), "决定是否收集它。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview",
        children: "RemoteCommunication"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-headerfile/rcp_8h/rcp_8h",
        children: "rcp.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["double ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#totaltime",
              children: "totalTime"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP传输（包括名称解析、TCP连接等）的总时间（毫秒）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["double ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#namelookuptime",
              children: "nameLookUpTime"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从请求开始到完成远程主机名解析所用的时间（以毫秒为单位）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["double ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#connecttime",
              children: "connectTime"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从请求开始到建立与远程主机（或代理）的连接的时间（以毫秒为单位）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["double ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#pretransfertime",
              children: "preTransferTime"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从请求开始到准备就绪进行数据传输所花费的时间（以毫秒为单位）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["double ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#filetime",
              children: "fileTime"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从远程文件的上次修改时间开始的时间（以毫秒为单位）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["double ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#starttransfertime",
              children: "startTransferTime"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从开始到接收到第一个字节所花费的时间（以毫秒为单位）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["double ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#redirecttime",
              children: "redirectTime"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所有重定向步骤（包括名称查找、连接等）所用的时间（毫秒）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["double ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#tlshandshaketime",
              children: "tlsHandshakeTime"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从请求开始到建立与远程主机（或代理）的TLS握手的时间（以毫秒为单位）。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "connecttime",
      children: "connectTime"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "double Rcp_TimeInfo::connectTime\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从请求开始到建立与远程主机（或代理）的连接时间（以毫秒为单位）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filetime",
      children: "fileTime"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "double Rcp_TimeInfo::fileTime\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从远程文件的上次修改时间开始的时间（以毫秒为单位）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "namelookuptime",
      children: "nameLookUpTime"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "double Rcp_TimeInfo::nameLookUpTime\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从请求开始到完成远程主机名解析所用的时间（以毫秒为单位）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pretransfertime",
      children: "preTransferTime"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "double Rcp_TimeInfo::preTransferTime\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从请求开始到准备就绪进行数据传输所花费的时间（以毫秒为单位）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "redirecttime",
      children: "redirectTime"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "double Rcp_TimeInfo::redirectTime\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所有重定向步骤（包括名称查找、连接等）所用的时间（毫秒）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "starttransfertime",
      children: "startTransferTime"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "double Rcp_TimeInfo::startTransferTime\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从开始到接收到第一个字节所花费的时间（以毫秒为单位）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tlshandshaketime",
      children: "tlsHandshakeTime"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "double Rcp_TimeInfo::tlsHandshakeTime\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从请求开始到建立与远程主机（或代理）的TLS握手的时间（以毫秒为单位）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "totaltime",
      children: "totalTime"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "double Rcp_TimeInfo::totalTime\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP传输（包括名称解析、TCP连接等）的总时间（毫秒）。"
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