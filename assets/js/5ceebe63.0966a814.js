"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["150412"], {
81419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_remote_communication_api_remote_communication_c_remote_communication_overview_c_remote_communication_struct_x_rcp_response_x_rcp_response_md_5ce_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-remote-communication-api-remote-communication-c-remote-communication-overview-c-remote-communication-struct-x-rcp-response-x-rcp-response-md-5ce.json
var site_docs_ref_system_network_api_remote_communication_api_remote_communication_c_remote_communication_overview_c_remote_communication_struct_x_rcp_response_x_rcp_response_md_5ce_namespaceObject = JSON.parse('{"id":"system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response/x_rcp___response","title":"Rcp_Response","description":"概述","source":"@site/docs-ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response/x_rcp___response.md","sourceDirName":"system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response","slug":"/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response/x_rcp___response","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response/x_rcp___response","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":34,"frontMatter":{"title":"Rcp_Response","sidebar_position":34,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response","kit":"系统","last_updated":"2026-04-20","slug":"x_rcp___response"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response/x_rcp___response.md


const frontMatter = {
	title: 'Rcp_Response',
	sidebar_position: 34,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___response',
	kit: '系统',
	last_updated: '2026-04-20',
	slug: 'x_rcp___response'
};
const contentTitle = 'Rcp_Response';

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
  "value": "body",
  "id": "body",
  "level": 3
}, {
  "value": "cookies",
  "id": "cookies",
  "level": 3
}, {
  "value": "debugInfo",
  "id": "debuginfo",
  "level": 3
}, {
  "value": "destroyResponse",
  "id": "destroyresponse",
  "level": 3
}, {
  "value": "effectiveUrl",
  "id": "effectiveurl",
  "level": 3
}, {
  "value": "headers",
  "id": "headers",
  "level": 3
}, {
  "value": "request",
  "id": "request",
  "level": 3
}, {
  "value": "responseCallback",
  "id": "responsecallback",
  "level": 3
}, {
  "value": "responsePrivate",
  "id": "responseprivate",
  "level": 3
}, {
  "value": "statusCode",
  "id": "statuscode",
  "level": 3
}, {
  "value": "timeInfo",
  "id": "timeinfo",
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
        id: "rcp_response",
        children: "Rcp_Response"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络请求的响应。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#request",
              children: "request"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示生成响应的请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#effectiveurl",
              children: "effectiveUrl"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上次使用的有效URL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_statuscode",
              children: "Rcp_StatusCode"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "#statuscode",
              children: "statusCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应状态码。"
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
            children: "响应标头。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___buffer/x_rcp___buffer",
              children: "Rcp_Buffer"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "#body",
              children: "body"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应消息体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___debug_info/x_rcp___debug_info",
              children: "Rcp_DebugInfo"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#debuginfo",
              children: "debugInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求/响应处理调试信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___time_info/x_rcp___time_info",
              children: "Rcp_TimeInfo"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#timeinfo",
              children: "timeInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应时间信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies",
              children: "Rcp_ResponseCookies"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#cookies",
              children: "cookies"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookies。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object",
              children: "Rcp_ResponseCallbackObject"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#responsecallback",
              children: "responseCallback"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用的响应回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#destroyresponse",
              children: "destroyResponse"
            }), " )(struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), " *response)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于销毁响应的方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#responseprivate",
              children: "responsePrivate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可扩展字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "body",
      children: "body"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_Buffer Rcp_Response::body\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应消息体。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cookies",
      children: "cookies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_ResponseCookies* Rcp_Response::cookies\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应Cookies。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debuginfo",
      children: "debugInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_DebugInfo* Rcp_Response::debugInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求/响应处理调试信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["收集的事件取决于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___tracing_configuration/x_rcp___tracing_configuration",
        children: "Rcp_TracingConfiguration"
      }), "配置信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "destroyresponse",
      children: "destroyResponse"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void(* Rcp_Response::destroyResponse) (struct Rcp_Response *response)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于销毁响应的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "response"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指示要销毁的响应。它是一个指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "effectiveurl",
      children: "effectiveUrl"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char* Rcp_Response::effectiveUrl\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上次使用的有效URL。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果重定向，或设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration#baseurl",
        children: "Rcp_SessionConfiguration.baseUrl"
      }), "，则有效URL可能不等于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___request/x_rcp___request#url",
        children: "Rcp_Request.url"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "headers",
      children: "headers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_Headers* Rcp_Response::headers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应标头。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "request",
      children: "request"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const Rcp_Request* Rcp_Response::request\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示生成响应的请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "responsecallback",
      children: "responseCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const Rcp_ResponseCallbackObject* Rcp_Response::responseCallback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用的响应回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "responseprivate",
      children: "responsePrivate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void* Rcp_Response::responsePrivate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可扩展字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "statuscode",
      children: "statusCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_StatusCode Rcp_Response::statusCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应状态码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "timeinfo",
      children: "timeInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_TimeInfo* Rcp_Response::timeInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应时间信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["是否收集该信息取决于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-overview-c/remote-communication-struct/x_rcp___tracing_configuration/x_rcp___tracing_configuration#collecttimeinfo",
        children: "Rcp_TracingConfiguration.collectTimeInfo"
      }), "文件中的配置信息。"]
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