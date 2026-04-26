"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["135087"], {
705844(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_network_api_network_c_network_headerfile_capi_net_http_type_h_capi_net_http_type_h_md_900_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-network-api-network-c-network-headerfile-capi-net-http-type-h-capi-net-http-type-h-md-900.json
var site_docs_ref_system_network_api_network_api_network_c_network_headerfile_capi_net_http_type_h_capi_net_http_type_h_md_900_namespaceObject = JSON.parse('{"id":"system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h","title":"net_http_type.h","description":"概述","source":"@site/docs-ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h.md","sourceDirName":"system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h","slug":"/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"net_http_type.h","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-net-http-type-h"},"sidebar":"ref","previous":{"title":"net_http.h","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-h/capi-net-http-h"},"next":{"title":"NetConn_NetHandle","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-nethandle/capi-netconnection-netconn-nethandle"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/network-api/network-c/network-headerfile/capi-net-http-type-h/capi-net-http-type-h.md


const frontMatter = {
	title: 'net_http_type.h',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-net-http-type-h'
};
const contentTitle = 'net_http_type.h';

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
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "Http_ErrCode",
  "id": "http_errcode",
  "level": 3
}, {
  "value": "Http_ResponseCode",
  "id": "http_responsecode",
  "level": 3
}, {
  "value": "Http_AddressFamilyType",
  "id": "http_addressfamilytype",
  "level": 3
}, {
  "value": "Http_HttpProtocol",
  "id": "http_httpprotocol",
  "level": 3
}, {
  "value": "Http_CertType",
  "id": "http_certtype",
  "level": 3
}, {
  "value": "Http_ProxyType",
  "id": "http_proxytype",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "Http_ResponseCallback()",
  "id": "http_responsecallback",
  "level": 3
}, {
  "value": "Http_OnDataReceiveCallback()",
  "id": "http_ondatareceivecallback",
  "level": 3
}, {
  "value": "Http_OnProgressCallback()",
  "id": "http_onprogresscallback",
  "level": 3
}, {
  "value": "Http_OnHeaderReceiveCallback()",
  "id": "http_onheaderreceivecallback",
  "level": 3
}, {
  "value": "Http_OnVoidCallback()",
  "id": "http_onvoidcallback",
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
        id: "net_http_typeh",
        children: "net_http_type.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义HTTP请求模块的C接口需要的数据结构。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <network/netstack/net_http_type.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnet_http.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.NetStack"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-c/network-module/capi-netstack/capi-netstack",
        children: "netstack"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-buffer/capi-netstack-http-buffer",
              children: "Http_Buffer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_Buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP缓存结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-headervalue/capi-netstack-http-headervalue",
              children: "Http_HeaderValue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_HeaderValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求或者响应的标头映射的值类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-headerentry/capi-netstack-http-headerentry",
              children: "Http_HeaderEntry"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_HeaderEntry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求或者响应的标头的所有键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-clientcert/capi-netstack-http-clientcert",
              children: "Http_ClientCert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_ClientCert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送到服务端的客户端证书配置，服务端将通过客户端证书校验客户端身份。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-customproxy/capi-netstack-http-customproxy",
              children: "Http_CustomProxy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_CustomProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义代理配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-proxy/capi-netstack-http-proxy",
              children: "Http_Proxy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理配置结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-performancetiming/capi-netstack-http-performancetiming",
              children: "Http_PerformanceTiming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_PerformanceTiming"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP响应时间信息，会在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-response/capi-netstack-http-response#%E6%88%90%E5%91%98%E5%8F%98%E9%87%8F",
              children: "Http_Response.performanceTiming"
            }), "中收集。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-requestoptions/capi-netstack-http-requestoptions",
              children: "Http_RequestOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_RequestOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义HTTP请求配置的结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-response/capi-netstack-http-response",
              children: "Http_Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_Response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义HTTP响应的结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-request/capi-netstack-http-request",
              children: "Http_Request"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_Request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP请求结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-eventshandler/capi-netstack-http-eventshandler",
              children: "Http_EventsHandler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_EventsHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听不同HTTP事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-headers/capi-netstack-http-headers",
              children: "Http_Headers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_Headers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP请求或者是响应中的标头。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#http_errcode",
              children: "Http_ErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_ErrCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义HTTP请求的错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#http_responsecode",
              children: "Http_ResponseCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_ResponseCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义HTTP响应码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#http_addressfamilytype",
              children: "Http_AddressFamilyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_AddressFamilyType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义解析目标域名时限定的地址类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#http_httpprotocol",
              children: "Http_HttpProtocol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_HttpProtocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP协议版本号枚举定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#http_certtype",
              children: "Http_CertType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_CertType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书类型枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#http_proxytype",
              children: "Http_ProxyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_ProxyType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理配置类型枚举定义。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_HTTP_MAX_PATH_LEN 128"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP请求最长目录路径长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_HTTP_MAX_STR_LEN 256"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP请求最长字符串长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_HTTP_DNS_SERVER_NUM_MAX 3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP请求最多DNS服务器数量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NET_HTTP_METHOD_GET \"GET\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP请求GET方法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NET_HTTPMETHOD_HEAD \"HEAD\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP请求HEAD方法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NET_HTTPMETHOD_OPTIONS \"OPTIONS\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP请求OPTIONS方法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NET_HTTPMETHOD_TRACE \"TRACE\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP请求TRACE方法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NET_HTTPMETHOD_DELETE \"DELETE\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP请求DELETE方法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NET_HTTP_METHOD_POST \"POST\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP请求POST方法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NET_HTTP_METHOD_PUT \"PUT\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP请求PUT方法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NET_HTTP_METHOD_PATCH \"CONNECT\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP请求CONNECT方法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#http_responsecallback",
              children: "typedef void (*Http_ResponseCallback)(struct Http_Response *response, uint32_t errCode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_ResponseCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到HTTP响应的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#http_ondatareceivecallback",
              children: "typedef void (*Http_OnDataReceiveCallback)(const char *data, size_t length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_OnDataReceiveCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到数据的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#http_onprogresscallback",
              children: "typedef void (*Http_OnProgressCallback)(uint64_t totalSize, uint64_t transferredSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_OnProgressCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求/响应数据传输过程中调用的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#http_onheaderreceivecallback",
              children: "typedef void (*Http_OnHeaderReceiveCallback)(Http_Headers *headers)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_OnHeaderReceiveCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收到HTTP响应头的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#http_onvoidcallback",
              children: "typedef void (*Http_OnVoidCallback)(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Http_OnVoidCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的DataEnd或Cancel事件回调的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "http_errcode",
      children: "Http_ErrCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Http_ErrCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义HTTP请求的错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HTTP_RESULT_OK = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_PARAMETER_ERROR = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_PERMISSION_DENIED = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限校验失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_NETSTACK_E_BASE = 2300000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基础错误码偏移。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_UNSUPPORTED_PROTOCOL = (OH_HTTP_NETSTACK_E_BASE + 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的协议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_INVALID_URL = (OH_HTTP_NETSTACK_E_BASE + 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL格式错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_RESOLVE_PROXY_FAILED = (OH_HTTP_NETSTACK_E_BASE + 5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理服务器域名解析失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_RESOLVE_HOST_FAILED = (OH_HTTP_NETSTACK_E_BASE + 6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "域名解析失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_CONNECT_SERVER_FAILED = (OH_HTTP_NETSTACK_E_BASE + 7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法连接到服务器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_INVALID_SERVER_RESPONSE = (OH_HTTP_NETSTACK_E_BASE + 8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器返回非法数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_ACCESS_REMOTE_DENIED = (OH_HTTP_NETSTACK_E_BASE + 9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拒绝访问远程资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_HTTP2_FRAMING_ERROR = (OH_HTTP_NETSTACK_E_BASE + 16)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP2框架层出现错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_TRANSFER_PARTIAL_FILE = (OH_HTTP_NETSTACK_E_BASE + 18)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传输了部分文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_WRITE_DATA_FAILED = (OH_HTTP_NETSTACK_E_BASE + 23)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法将接收到的数据写入磁盘或应用程序。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_UPLOAD_FAILED = (OH_HTTP_NETSTACK_E_BASE + 25)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上传失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_OPEN_LOCAL_DATA_FAILED = (OH_HTTP_NETSTACK_E_BASE + 26)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法打开或读取文件或应用程序中的本地数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_OUT_OF_MEMORY = (OH_HTTP_NETSTACK_E_BASE + 27)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存不足。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_OPERATION_TIMEOUT = (OH_HTTP_NETSTACK_E_BASE + 28)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_TOO_MANY_REDIRECTIONS = (OH_HTTP_NETSTACK_E_BASE + 47)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重定向次数已达到允许的最大值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_SERVER_RETURNED_NOTHING = (OH_HTTP_NETSTACK_E_BASE + 52)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器没有返回任何内容（没有标头或数据）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_SEND_DATA_FAILED = (OH_HTTP_NETSTACK_E_BASE + 55)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送数据失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_RECEIVE_DATA_FAILED = (OH_HTTP_NETSTACK_E_BASE + 56)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收数据失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_SSL_CERTIFICATE_ERROR = (OH_HTTP_NETSTACK_E_BASE + 58)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "本地SSL证书错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_SSL_CIPHER_USED_ERROR = (OH_HTTP_NETSTACK_E_BASE + 59)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的加密套件不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_INVALID_SSL_PEER_CERT = (OH_HTTP_NETSTACK_E_BASE + 60)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL对等证书或SSH远程密钥无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_INVALID_ENCODING_FORMAT = (OH_HTTP_NETSTACK_E_BASE + 61)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP编码格式无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_FILE_TOO_LARGE = (OH_HTTP_NETSTACK_E_BASE + 63)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "超出最大文件大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_REMOTE_DISK_FULL = (OH_HTTP_NETSTACK_E_BASE + 70)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "远端磁盘满。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_REMOTE_FILE_EXISTS = (OH_HTTP_NETSTACK_E_BASE + 73)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "远端文件已存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_SSL_CA_NOT_EXIST = (OH_HTTP_NETSTACK_E_BASE + 77)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSL CA证书不存在或无法访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_REMOTE_FILE_NOT_FOUND = (OH_HTTP_NETSTACK_E_BASE + 78)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "远端文件未找到。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_AUTHENTICATION_ERROR = (OH_HTTP_NETSTACK_E_BASE + 94)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "身份验证错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_ACCESS_DOMAIN_NOT_ALLOWED = (OH_HTTP_NETSTACK_E_BASE + 998)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许访问该域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_UNKNOWN_ERROR = (OH_HTTP_NETSTACK_E_BASE + 999)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知错误。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "http_responsecode",
      children: "Http_ResponseCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Http_ResponseCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义HTTP响应码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HTTP_OK = 200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_CREATED = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功请求并创建新资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_ACCEPTED = 202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求已被接受但尚未完全处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_NON_AUTHORITATIVE_INFO = 203"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求成功。但是有未授权信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_NO_CONTENT = 204"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器处理成功，但未返回内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_RESET = 205"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重置内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_PARTIAL = 206"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器成功处理了部分GET请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_MULTI_CHOICE = 300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多种选择。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_MOVED_PERM = 301"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的资源已永久移动到新的URI，返回信息将包含新的URI。浏览器将自动重定向到新的URI。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_MOVED_TEMP = 302"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "临时重定向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_SEE_OTHER = 303"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看其他地址。请求的资源已移动到新的URL，客户端应使用GET方法访问该URL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_NOT_MODIFIED = 304"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的资源没有修改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_USE_PROXY = 305"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求资源需要使用代理访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_BAD_REQUEST = 400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器无法理解客户端请求的语法错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_UNAUTHORIZED = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求用户身份验证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_PAYMENT_REQUIRED = 402"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留以供将来使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_FORBIDDEN = 403"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器理解来自请求客户端的请求，但拒绝执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_NOT_FOUND = 404"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器无法根据客户端的请求找到资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_BAD_METHOD = 405"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端请求中的方法被禁止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_NOT_ACCEPTABLE = 406"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器无法根据客户端请求的内容特征完成请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_PROXY_AUTH = 407"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求验证代理人的身份。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_CLIENT_TIMEOUT = 408"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求耗时太长，超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_CONFLICT = 409"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器在完成客户端的PUT请求时可能返回此代码，因为服务器在处理请求时发生冲突。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_GONE = 410"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端请求的资源不再存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_LENGTH_REQUIRED = 411"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器无法处理客户端发送的不带Content Length的请求信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_PRECON_FAILED = 412"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向客户端请求信息的前提条件不正确。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_ENTITY_TOO_LARGE = 413"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求被拒绝，因为请求的实体太大，服务器无法处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_REQUEST_TOO_LONG = 414"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的URI超过了服务器能够解析的长度，服务器无法处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_UNSUPPORTED_TYPE = 415"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器无法处理请求的格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_RANGE_NOT_MET = 416"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的范围无法满足。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_INTERNAL_ERROR = 500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部服务器错误，无法完成请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_NOT_IMPLEMENTED = 501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器不支持请求的功能，无法完成请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_BAD_GATEWAY = 502"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "充当网关或代理的服务器从远程服务器收到无效请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_UNAVAILABLE = 503"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由于超载或系统维护，服务器暂时无法处理客户端请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_GATEWAY_TIMEOUT = 504"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "作为网关的服务器没有及时从远程服务器获取请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_VERSION = 505"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器请求的HTTP协议版本。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "http_addressfamilytype",
      children: "Http_AddressFamilyType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Http_AddressFamilyType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义解析目标域名时限定的地址类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HTTP_ADDRESS_FAMILY_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值，系统将自行选择目标域名的IPv4地址或IPv6地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP_ADDRESS_FAMILY_ONLY_V4 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统仅解析目标域名的IPv4地址，忽略IPv6地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP_ADDRESS_FAMILY_ONLY_V6 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统仅解析目标域名的IPv6地址，忽略IPv4地址。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "http_httpprotocol",
      children: "Http_HttpProtocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Http_HttpProtocol\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP协议版本号枚举定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HTTP_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "遵循curl的协议版本选择。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP1_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP1.1版本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP2版本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP3版本。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "http_certtype",
      children: "Http_CertType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Http_CertType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书类型枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_HTTP_PEM = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEM证书类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_DER = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DER证书类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_HTTP_P12 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P12证书类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "http_proxytype",
      children: "Http_ProxyType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Http_ProxyType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代理配置类型枚举定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HTTP_PROXY_NOT_USE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不使用代理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP_PROXY_SYSTEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用系统代理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP_PROXY_CUSTOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用用户自定义代理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "http_responsecallback",
      children: "Http_ResponseCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Http_ResponseCallback)(struct Http_Response *response, uint32_t errCode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接收到HTTP响应的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-response/capi-netstack-http-response",
              children: "struct Http_Response"
            }), " *response"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["HTTP响应结构体，指向Http_Response的指针，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-response/capi-netstack-http-response",
              children: "Http_Response"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t errCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "http_ondatareceivecallback",
      children: "Http_OnDataReceiveCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Http_OnDataReceiveCallback)(const char *data, size_t length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接收到数据的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应体的长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "http_onprogresscallback",
      children: "Http_OnProgressCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Http_OnProgressCallback)(uint64_t totalSize, uint64_t transferredSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求/响应数据传输过程中调用的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t totalSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据总大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint64_t transferredSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已传输的数据大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "http_onheaderreceivecallback",
      children: "Http_OnHeaderReceiveCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Http_OnHeaderReceiveCallback)(Http_Headers *headers)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收到HTTP响应头的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-headers/capi-netstack-http-headers",
              children: "Http_Headers"
            }), " *headers"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["接收到的请求头，指向Http_Headers的指针，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netstack-http-headers/capi-netstack-http-headers",
              children: "Http_Headers"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "http_onvoidcallback",
      children: "Http_OnVoidCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Http_OnVoidCallback)(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求的DataEnd或Cancel事件回调的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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