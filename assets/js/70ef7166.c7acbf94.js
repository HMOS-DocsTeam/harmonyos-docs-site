"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["655848"], {
959281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_remote_communication_api_remote_communication_c_remote_communication_overview_c_remote_communication_struct_x_rcp_session_configuration_x_rcp_session_configuration_md_70e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-remote-communication-api-remote-communication-c-remote-communication-overview-c-remote-communication-struct-x-rcp-session-configuration-x-rcp-session-configuration-md-70e.json
var site_docs_ref_system_network_api_remote_communication_api_remote_communication_c_remote_communication_overview_c_remote_communication_struct_x_rcp_session_configuration_x_rcp_session_configuration_md_70e_namespaceObject = JSON.parse('{"id":"system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration","title":"Rcp_SessionConfiguration","description":"概述","source":"@site/docs-ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration.md","sourceDirName":"system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___session_configuration","slug":"/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":39,"frontMatter":{"title":"Rcp_SessionConfiguration","sidebar_position":39,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___session_configuration","kit":"系统","last_updated":"2026-04-20","slug":"x_rcp___session_configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration.md


const frontMatter = {
	title: 'Rcp_SessionConfiguration',
	sidebar_position: 39,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___session_configuration',
	kit: '系统',
	last_updated: '2026-04-20',
	slug: 'x_rcp___session_configuration'
};
const contentTitle = 'Rcp_SessionConfiguration';

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
  "value": "baseUrl",
  "id": "baseurl",
  "level": 3
}, {
  "value": "connectionConfiguration",
  "id": "connectionconfiguration",
  "level": 3
}, {
  "value": "cookies",
  "id": "cookies",
  "level": 3
}, {
  "value": "headers",
  "id": "headers",
  "level": 3
}, {
  "value": "interceptors",
  "id": "interceptors",
  "level": 3
}, {
  "value": "requestConfiguration",
  "id": "requestconfiguration",
  "level": 3
}, {
  "value": "sessionListener",
  "id": "sessionlistener",
  "level": 3
}, {
  "value": "syncInterceptors",
  "id": "syncinterceptors",
  "level": 3
}, {
  "value": "type",
  "id": "type",
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
        id: "rcp_sessionconfiguration",
        children: "Rcp_SessionConfiguration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会话配置。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_sessiontype",
              children: "Rcp_SessionType"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "#type",
              children: "type"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___interceptor_array/x_rcp___interceptor_array",
              children: "Rcp_InterceptorArray"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "#interceptors",
              children: "interceptors"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义的异步拦截器数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___sync_interceptor_array/x_rcp___sync_interceptor_array",
              children: "Rcp_SyncInterceptorArray"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "#syncinterceptors",
              children: "syncInterceptors"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户定义的同步拦截器数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#baseurl",
              children: "baseUrl"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基本URL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_headers",
              children: "Rcp_Headers"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#headers",
              children: "headers"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求标头。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#cookies",
              children: "cookies"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的Cookie。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___session_listener/x_rcp___session_listener",
              children: "Rcp_SessionListener"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "#sessionlistener",
              children: "sessionListener"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，供session监听close()或cancel()事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___configuration/x_rcp___configuration",
              children: "Rcp_Configuration"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#requestconfiguration",
              children: "requestConfiguration"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认请求配置。这些选项可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request#configuration",
              children: "Request.configuration"
            }), "覆盖。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___connection_configuration/x_rcp___connection_configuration",
              children: "Rcp_ConnectionConfiguration"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "#connectionconfiguration",
              children: "connectionConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "baseurl",
      children: "baseUrl"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* Rcp_SessionConfiguration::baseUrl\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基本URL。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["举例， 如果请求的url为 '?name=value', 基本url是 “", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://example.com”"
      }), "，那么最后当请求被送往服务端时的最终url为 “", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://example.com?name=value”"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "connectionconfiguration",
      children: "connectionConfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_ConnectionConfiguration Rcp_SessionConfiguration::connectionConfiguration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "它用于指定此会话中允许的最大同时连接总数以及允许连接到单个主机的最大同时连接数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cookies",
      children: "cookies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_RequestCookies* Rcp_SessionConfiguration::cookies\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求的Cookie。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果调用了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_fetch",
        children: "HMS_Rcp_Fetch"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_fetchsync",
        children: "HMS_Rcp_FetchSync"
      }), "，在参数中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request",
        children: "Rcp_Request"
      }), "中没有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requestcookies",
        children: "Rcp_RequestCookies"
      }), "，则", (0,jsx_runtime.jsx)(_components.a, {
        href: "#cookies",
        children: "Rcp_SessionConfiguration.cookies"
      }), "将是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request#cookies",
        children: "Rcp_Request.cookies"
      }), "，如果两者都存在，则将它们合并。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "headers",
      children: "headers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_Headers* Rcp_SessionConfiguration::headers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求标头。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果调用了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_fetch",
        children: "HMS_Rcp_Fetch"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_fetchsync",
        children: "HMS_Rcp_FetchSync"
      }), "，并且", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request",
        children: "Rcp_Request"
      }), "中没有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_headers",
        children: "Rcp_Headers"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#headers",
        children: "Rcp_SessionConfiguration.headers"
      }), "将是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request#headers",
        children: "Rcp_Request.headers"
      }), "，如果两者都存在，则将它们合并。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interceptors",
      children: "interceptors"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_InterceptorArray Rcp_SessionConfiguration::interceptors\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户自定义的异步拦截器数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步拦截器将被制成拦截器链。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入: [A, B, C, D]， 处理逻辑将为 A->B->C->D->defaultHandler。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requestconfiguration",
      children: "requestConfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_Configuration* Rcp_SessionConfiguration::requestConfiguration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["默认请求配置。这些选项可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request#configuration",
        children: "Request.configuration"
      }), "覆盖。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sessionlistener",
      children: "sessionListener"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_SessionListener Rcp_SessionConfiguration::sessionListener\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调函数，供session监听close()或cancel()事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syncinterceptors",
      children: "syncInterceptors"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_SyncInterceptorArray Rcp_SessionConfiguration::syncInterceptors\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户定义的同步拦截器数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步拦截器会被做成拦截器链。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入: [A, B, C, D], 处理逻辑将为 A->B->C->D->defaultHandler。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type",
      children: "type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_SessionType Rcp_SessionConfiguration::type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会话类型。"
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