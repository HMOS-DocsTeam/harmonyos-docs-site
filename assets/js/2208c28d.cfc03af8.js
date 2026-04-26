"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["503773"], {
971399(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_network_api_network_c_network_headerfile_capi_net_connection_type_h_capi_net_connection_type_h_md_220_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-network-api-network-c-network-headerfile-capi-net-connection-type-h-capi-net-connection-type-h-md-220.json
var site_docs_ref_system_network_api_network_api_network_c_network_headerfile_capi_net_connection_type_h_capi_net_connection_type_h_md_220_namespaceObject = JSON.parse('{"id":"system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h","title":"net_connection_type.h","description":"概述","source":"@site/docs-ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h.md","sourceDirName":"system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h","slug":"/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"net_connection_type.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-net-connection-type-h"},"sidebar":"ref","previous":{"title":"net_connection.h","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-h/capi-net-connection-h"},"next":{"title":"net_ssl_c.h","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-c/network-headerfile/capi-net-ssl-c-h/capi-net-ssl-c-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/network-api/network-c/network-headerfile/capi-net-connection-type-h/capi-net-connection-type-h.md


const frontMatter = {
	title: 'net_connection_type.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-connection-type-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-net-connection-type-h'
};
const contentTitle = 'net_connection_type.h';

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
  "value": "NetConn_NetCap",
  "id": "netconn_netcap",
  "level": 3
}, {
  "value": "NetConn_NetBearerType",
  "id": "netconn_netbearertype",
  "level": 3
}, {
  "value": "NetConn_ErrorCode",
  "id": "netconn_errorcode",
  "level": 3
}, {
  "value": "NetConn_PacketsType",
  "id": "netconn_packetstype",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_NetConn_CustomDnsResolver()",
  "id": "oh_netconn_customdnsresolver",
  "level": 3
}, {
  "value": "OH_NetConn_AppHttpProxyChange()",
  "id": "oh_netconn_apphttpproxychange",
  "level": 3
}, {
  "value": "OH_NetConn_NetworkAvailable()",
  "id": "oh_netconn_networkavailable",
  "level": 3
}, {
  "value": "OH_NetConn_NetCapabilitiesChange()",
  "id": "oh_netconn_netcapabilitieschange",
  "level": 3
}, {
  "value": "OH_NetConn_NetConnectionPropertiesChange()",
  "id": "oh_netconn_netconnectionpropertieschange",
  "level": 3
}, {
  "value": "OH_NetConn_NetLost()",
  "id": "oh_netconn_netlost",
  "level": 3
}, {
  "value": "OH_NetConn_NetUnavailable()",
  "id": "oh_netconn_netunavailable",
  "level": 3
}, {
  "value": "OH_NetConn_NetBlockStatusChange()",
  "id": "oh_netconn_netblockstatuschange",
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
        id: "net_connection_typeh",
        children: "net_connection_type.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为网络管理数据网络连接模块提供C接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <network/netmanager/net_connection_type.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libnet_connection.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Communication.NetManager.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-c/network-module/capi-netconnection/capi-netconnection",
        children: "NetConnection"
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
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-nethandle/capi-netconnection-netconn-nethandle",
              children: "NetConn_NetHandle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_NetHandle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存放网络ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-netcapabilities/capi-netconnection-netconn-netcapabilities",
              children: "NetConn_NetCapabilities"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_NetCapabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络能力集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-netaddr/capi-netconnection-netconn-netaddr",
              children: "NetConn_NetAddr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_NetAddr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-route/capi-netconnection-netconn-route",
              children: "NetConn_Route"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_Route"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路由配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-httpproxy/capi-netconnection-netconn-httpproxy",
              children: "NetConn_HttpProxy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_HttpProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-connectionproperties/capi-netconnection-netconn-connectionproperties",
              children: "NetConn_ConnectionProperties"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_ConnectionProperties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络连接信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-nethandlelist/capi-netconnection-netconn-nethandlelist",
              children: "NetConn_NetHandleList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_NetHandleList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-netspecifier/capi-netconnection-netconn-netspecifier",
              children: "NetConn_NetSpecifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_NetSpecifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络的特征集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-netconncallback/capi-netconnection-netconn-netconncallback",
              children: "NetConn_NetConnCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_NetConnCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络状态监听回调集合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-proberesultinfo/capi-netconnection-netconn-proberesultinfo",
              children: "NetConn_ProbeResultInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_ProbeResultInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义探测结果信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-tracerouteoption/capi-netconnection-netconn-tracerouteoption",
              children: "NetConn_TraceRouteOption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_TraceRouteOption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义网络跟踪路由选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-tracerouteinfo/capi-netconnection-netconn-tracerouteinfo",
              children: "NetConn_TraceRouteInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_TraceRouteInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义跟踪路由信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#netconn_netcap",
              children: "NetConn_NetCap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_NetCap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络能力集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#netconn_netbearertype",
              children: "NetConn_NetBearerType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_NetBearerType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络载体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#netconn_errorcode",
              children: "NetConn_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_ErrorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络连接返回值错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#netconn_packetstype",
              children: "NetConn_PacketsType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NetConn_PacketsType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举跟踪路由的数据包类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_MAX_RTT_NUM 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-proberesultinfo/capi-netconnection-netconn-proberesultinfo",
              children: "NetConn_ProbeResultInfo"
            }), "的成员变量rtt数组的长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_MAX_NET_SIZE 32"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-nethandlelist/capi-netconnection-netconn-nethandlelist",
              children: "NetConn_NetHandleList"
            }), "的成员变量netHandles数组的长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_MAX_BEARER_TYPE_SIZE 32"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-netcapabilities/capi-netconnection-netconn-netcapabilities",
              children: "NetConn_NetCapabilities"
            }), "的成员变量bearerTypes数组的长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_MAX_CAP_SIZE 32"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-netcapabilities/capi-netconnection-netconn-netcapabilities",
              children: "NetConn_NetCapabilities"
            }), "的成员变量netCaps数组的长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_MAX_ADDR_SIZE 32"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-connectionproperties/capi-netconnection-netconn-connectionproperties",
              children: "NetConn_ConnectionProperties"
            }), "的成员变量netAddrList、dnsList数组的长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_MAX_ROUTE_SIZE 64"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-connectionproperties/capi-netconnection-netconn-connectionproperties",
              children: "NetConn_ConnectionProperties"
            }), "的成员变量routeList数组的长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_MAX_EXCLUSION_SIZE 256"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-httpproxy/capi-netconnection-netconn-httpproxy",
              children: "NetConn_HttpProxy"
            }), "的成员变量exclusionList数组的长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_MAX_STR_LEN 256"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-httpproxy/capi-netconnection-netconn-httpproxy",
              children: "NetConn_HttpProxy"
            }), "的成员变量host数组的长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_netconn_customdnsresolver",
              children: "typedef int (*OH_NetConn_CustomDnsResolver)(const char *host, const char *serv,const struct addrinfo *hint, struct addrinfo **res)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_CustomDnsResolver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向自定义DNS解析器的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_netconn_apphttpproxychange",
              children: "typedef void (*OH_NetConn_AppHttpProxyChange)(NetConn_HttpProxy *proxy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_AppHttpProxyChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用的http代理信息变化回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_netconn_networkavailable",
              children: "typedef void (*OH_NetConn_NetworkAvailable)(NetConn_NetHandle *netHandle)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_NetworkAvailable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络可用回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_netconn_netcapabilitieschange",
              children: "typedef void (*OH_NetConn_NetCapabilitiesChange)(NetConn_NetHandle *netHandle,NetConn_NetCapabilities *netCapabilities)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_NetCapabilitiesChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络能力集变更回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_netconn_netconnectionpropertieschange",
              children: "typedef void (*OH_NetConn_NetConnectionPropertiesChange)(NetConn_NetHandle *netHandle,NetConn_ConnectionProperties *connConnetionProperties)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_NetConnectionPropertiesChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络连接属性变更回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_netconn_netlost",
              children: "typedef void (*OH_NetConn_NetLost)(NetConn_NetHandle *netHandle)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_NetLost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络断开回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_netconn_netunavailable",
              children: "typedef void (*OH_NetConn_NetUnavailable)(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_NetUnavailable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络不可用回调，在指定的超时时间内网络未激活时触发该回调，如果未设置超时时间则不会触发该回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_netconn_netblockstatuschange",
              children: "typedef void (*OH_NetConn_NetBlockStatusChange)(NetConn_NetHandle *netHandle, bool blocked)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NetConn_NetBlockStatusChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络阻塞状态变更回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "netconn_netcap",
      children: "NetConn_NetCap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetConn_NetCap\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络能力集。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "NETCONN_NET_CAPABILITY_MMS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MMS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_NET_CAPABILITY_NOT_METERED = 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非计量网络"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_NET_CAPABILITY_INTERNET = 12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_NET_CAPABILITY_NOT_VPN = 15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非VPN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_NET_CAPABILITY_VALIDATED = 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已验证"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_NET_CAPABILITY_PORTAL = 17"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Portal  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_NET_CAPABILITY_CHECKING_CONNECTIVITY = 31"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检测连通性中。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "netconn_netbearertype",
      children: "NetConn_NetBearerType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetConn_NetBearerType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络载体类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "NETCONN_BEARER_CELLULAR = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蜂窝网络"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_BEARER_WIFI = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WIFI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_BEARER_BLUETOOTH = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["蓝牙  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_BEARER_ETHERNET = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethernet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_BEARER_VPN = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["VPN  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "netconn_errorcode",
      children: "NetConn_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetConn_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络连接返回值错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
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
            children: "NETCONN_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_PERMISSION_DENIED = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缺少权限"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_PARAMETER_ERROR = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数错误"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_OPERATION_FAILED = 2100002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无法连接到服务"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_INTERNAL_ERROR = 2100003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内部错误。1. 内存异常, 比如内存不足或内存拷贝失败。2. 空指针, 比如访问已释放内存的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "netconn_packetstype",
      children: "NetConn_PacketsType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum NetConn_PacketsType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举跟踪路由的数据包类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "NETCONN_PACKETS_ICMP = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "互联网控制消息协议。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETCONN_PACKETS_UDP = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户数据报协议。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_netconn_customdnsresolver",
      children: "OH_NetConn_CustomDnsResolver()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef int (*OH_NetConn_CustomDnsResolver)(const char *host, const char *serv,const struct addrinfo *hint, struct addrinfo **res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指向自定义DNS解析器的指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "const char *host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要查询的主机名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *serv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const struct addrinfo *hint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向addrinfo结构的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "struct addrinfo **res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存储DNS查询结果并以链表形式返回。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_netconn_apphttpproxychange",
      children: "OH_NetConn_AppHttpProxyChange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_NetConn_AppHttpProxyChange)(NetConn_HttpProxy *proxy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用的http代理信息变化回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-httpproxy/capi-netconnection-netconn-httpproxy",
              children: "NetConn_HttpProxy"
            }), " *proxy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "变化的代理配置信息,可能是空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_netconn_networkavailable",
      children: "OH_NetConn_NetworkAvailable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_NetConn_NetworkAvailable)(NetConn_NetHandle *netHandle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络可用回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-nethandle/capi-netconnection-netconn-nethandle",
              children: "NetConn_NetHandle"
            }), " *netHandle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络句柄。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_netconn_netcapabilitieschange",
      children: "OH_NetConn_NetCapabilitiesChange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_NetConn_NetCapabilitiesChange)(NetConn_NetHandle *netHandle,NetConn_NetCapabilities *netCapabilities)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络能力集变更回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-nethandle/capi-netconnection-netconn-nethandle",
              children: "NetConn_NetHandle"
            }), " *netHandle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-netcapabilities/capi-netconnection-netconn-netcapabilities",
              children: "NetConn_NetCapabilities"
            }), " *netCapabilities"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络能力集。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_netconn_netconnectionpropertieschange",
      children: "OH_NetConn_NetConnectionPropertiesChange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_NetConn_NetConnectionPropertiesChange)(NetConn_NetHandle *netHandle,NetConn_ConnectionProperties *connConnetionProperties)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络连接属性变更回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-nethandle/capi-netconnection-netconn-nethandle",
              children: "NetConn_NetHandle"
            }), " *netHandle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-connectionproperties/capi-netconnection-netconn-connectionproperties",
              children: "NetConn_ConnectionProperties"
            }), " *connConnetionProperties"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络连接属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_netconn_netlost",
      children: "OH_NetConn_NetLost()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_NetConn_NetLost)(NetConn_NetHandle *netHandle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络断开回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-nethandle/capi-netconnection-netconn-nethandle",
              children: "NetConn_NetHandle"
            }), " *netHandle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络句柄。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_netconn_netunavailable",
      children: "OH_NetConn_NetUnavailable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_NetConn_NetUnavailable)(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络不可用回调，在指定的超时时间内网络未激活时触发该回调，如果未设置超时时间则不会触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_netconn_netblockstatuschange",
      children: "OH_NetConn_NetBlockStatusChange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_NetConn_NetBlockStatusChange)(NetConn_NetHandle *netHandle, bool blocked)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络阻塞状态变更回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/system-network-api/network-api/network-c/network-struct/capi-netconnection-netconn-nethandle/capi-netconnection-netconn-nethandle",
              children: "NetConn_NetHandle"
            }), " *netHandle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络句柄。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool blocked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示网络是否将被阻塞的标志。true表示网络被阻塞，false表示网络未被阻塞。"
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