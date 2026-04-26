"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["105015"], {
621445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_remote_communication_api_remote_communication_c_remote_communication_headerfile_rcp_8_h_rcp_8_h_md_8b0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-remote-communication-api-remote-communication-c-remote-communication-headerfile-rcp-8-h-rcp-8-h-md-8b0.json
var site_docs_ref_system_network_api_remote_communication_api_remote_communication_c_remote_communication_headerfile_rcp_8_h_rcp_8_h_md_8b0_namespaceObject = JSON.parse('{"id":"system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h","title":"rcp.h","description":"概述","source":"@site/docs-ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h.md","sourceDirName":"system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h","slug":"/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"rcp.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h","kit":"系统","last_updated":"2026-04-22","slug":"rcp_8h"},"sidebar":"ref","previous":{"title":"RemoteCommunication","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview"},"next":{"title":"Rcp_Buffer","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___buffer/x_rcp___buffer"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h.md


const frontMatter = {
	title: 'rcp.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'rcp_8h'
};
const contentTitle = 'rcp.h';

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
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "rcph",
        children: "rcp.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明用于访问远程通信的API。提供基本的函数，结构体和const定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <RemoteCommunicationKit/rcp.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " librcp_c.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.RemoteCommunication"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___buffer/x_rcp___buffer",
              children: "Rcp_Buffer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本存储结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___content_or_path_or_callback/x_rcp___content_or_path_or_callback",
              children: "Rcp_ContentOrPathOrCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_file_value/x_rcp___form_field_file_value",
              children: "Rcp_FormFieldFileValue"
            }), "中使用的简单表单数据字段值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_file_value/x_rcp___form_field_file_value",
              children: "Rcp_FormFieldFileValue"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表单字段文件值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_value/x_rcp___form_field_value",
              children: "Rcp_FormFieldValue"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["简单表单数据字段值，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_form",
              children: "Rcp_Form"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多部分表单域值，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), "中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_content/x_rcp___request_content",
              children: "Rcp_RequestContent"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_value/x_rcp___header_value",
              children: "Rcp_HeaderValue"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求或响应的标头映射的值类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_entry/x_rcp___header_entry",
              children: "Rcp_HeaderEntry"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求或响应的标头的所有键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___credential/x_rcp___credential",
              children: "Rcp_Credential"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器身份验证中使用的身份验证凭据，包括用户名和密码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___server_authentication/x_rcp___server_authentication",
              children: "Rcp_ServerAuthentication"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器身份验证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___urls/x_rcp___urls",
              children: "Rcp_Urls"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "url，用于确定主机是否正在使用代理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions",
              children: "Rcp_Exclusions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理配置中用于过滤不使用代理的urls。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___certificate_authority/x_rcp___certificate_authority",
              children: "Rcp_CertificateAuthority"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于验证远程服务器标识的证书颁发机构（CA）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___client_certificate/x_rcp___client_certificate",
              children: "Rcp_ClientCertificate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送到远程服务器的客户端证书，远程服务器将使用它来验证客户端的标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration",
              children: "Rcp_SecurityConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的安全配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___web_proxy/x_rcp___web_proxy",
              children: "Rcp_WebProxy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义代理配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___ip_and_port/x_rcp___ip_and_port",
              children: "Rcp_IpAndPort"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该接口用在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers",
              children: "Rcp_DnsServers"
            }), "中，表示一个DNS服务器的地址和端口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers",
              children: "Rcp_DnsServers"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DNS服务器。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_configuration/x_rcp___dns_configuration#dnsrules",
              children: "Rcp_DnsConfiguration.dnsRules"
            }), "中的类型之一。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___ip_address/x_rcp___ip_address",
              children: "Rcp_IpAddress"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定静态DNS规则使用的IP地址组。用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule_item/x_rcp___static_dns_rule_item",
              children: "Rcp_StaticDnsRuleItem"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule_item/x_rcp___static_dns_rule_item",
              children: "Rcp_StaticDnsRuleItem"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述单个静态DNS规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule/x_rcp___static_dns_rule",
              children: "Rcp_StaticDnsRule"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "静态DNS规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_rule/x_rcp___dns_rule",
              children: "Rcp_DnsRule"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS规则配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_data_receive_callback/x_rcp___on_data_receive_callback",
              children: "Rcp_OnDataReceiveCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["接收到数据时回调。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中的配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_progress_callback/x_rcp___on_progress_callback",
              children: "Rcp_OnProgressCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["收发时回调配置，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_header_receive_callback/x_rcp___on_header_receive_callback",
              children: "Rcp_OnHeaderReceiveCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中配置的接收到的header的回调配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_void_callback/x_rcp___on_void_callback",
              children: "Rcp_OnVoidCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中配置的数据结束或已取消事件的回调配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听不同HTTP事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___timeout/x_rcp___timeout",
              children: "Rcp_Timeout"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的超时配置"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_over_https/x_rcp___dns_over_https",
              children: "Rcp_DnsOverHttps"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS上的DNS配置如果设置，则首选由DOH dns服务器解析的地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___transfer_configuration/x_rcp___transfer_configuration",
              children: "Rcp_TransferConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传输配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___info_to_collect/x_rcp___info_to_collect",
              children: "Rcp_InfoToCollect"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要收集的请求处理事件。可以通过响应对象检查收集的事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___tracing_configuration/x_rcp___tracing_configuration",
              children: "Rcp_TracingConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求追踪配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___proxy_configuration/x_rcp___proxy_configuration",
              children: "Rcp_ProxyConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_configuration/x_rcp___dns_configuration",
              children: "Rcp_DnsConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS解析配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___configuration/x_rcp___configuration",
              children: "Rcp_Configuration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___transfer_range/x_rcp___transfer_range",
              children: "Rcp_TransferRange"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP传输范围。该设置将转换为HTTP Range标头。具有范围标头的HTTP请求要求服务器仅发送回HTTP响应的一部分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_cookie_entry/x_rcp___request_cookie_entry",
              children: "Rcp_RequestCookieEntry"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述请求的所有Cookie键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___debug_info/x_rcp___debug_info",
              children: "Rcp_DebugInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述存储在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), "中的调试信息的结构。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___cookie_attribute_entry/x_rcp___cookie_attribute_entry",
              children: "Rcp_CookieAttributeEntry"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie属性条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies",
              children: "Rcp_ResponseCookies"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___time_info/x_rcp___time_info",
              children: "Rcp_TimeInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应计时信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object",
              children: "Rcp_ResponseCallbackObject"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应回调结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络请求的响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor/x_rcp___interceptor",
              children: "Rcp_Interceptor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步拦截器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___sync_interceptor/x_rcp___sync_interceptor",
              children: "Rcp_SyncInterceptor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步拦截器"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor_array/x_rcp___interceptor_array",
              children: "Rcp_InterceptorArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步拦截器数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___sync_interceptor_array/x_rcp___sync_interceptor_array",
              children: "Rcp_SyncInterceptorArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步拦截器数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___session_listener/x_rcp___session_listener",
              children: "Rcp_SessionListener"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭或取消会话事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___connection_configuration/x_rcp___connection_configuration",
              children: "Rcp_ConnectionConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration",
              children: "Rcp_SessionConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_binary_receive_callback/x_rcp___on_binary_receive_callback",
              children: "Rcp_OnBinaryReceiveCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["接收到响应数据时的回调。支持二进制数据的接收。使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_setrequestonbinarydatarecvcallback",
              children: "HMS_Rcp_SetRequestOnBinaryDataRecvCallback"
            }), "给请求设置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_status_code_callback/x_rcp___on_status_code_callback",
              children: "Rcp_OnStatusCodeReceiveCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["接收到响应状态码时的回调。使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_setrequestonstatuscodereceivecallback",
              children: "HMS_Rcp_SetRequestOnStatusCodeReceiveCallback"
            }), "给请求设置。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_max_request_id_len",
              children: "RCP_MAX_REQUEST_ID_LEN"
            }), " 32"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求ID的最大长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_max_content_type_len",
              children: "RCP_MAX_CONTENT_TYPE_LEN"
            }), " 64"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内容类型最大长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_max_filename_len",
              children: "RCP_MAX_FILENAME_LEN"
            }), " 128"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件名最大长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_max_path_len",
              children: "RCP_MAX_PATH_LEN"
            }), " 128"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径的最大长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_method_get",
              children: "RCP_METHOD_GET"
            }), " \"GET\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP get方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_method_head",
              children: "RCP_METHOD_HEAD"
            }), " \"HEAD\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP head方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_method_options",
              children: "RCP_METHOD_OPTIONS"
            }), " \"OPTIONS\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP options方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_method_trace",
              children: "RCP_METHOD_TRACE"
            }), " \"TRACE\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP trace方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_method_delete",
              children: "RCP_METHOD_DELETE"
            }), " \"DELETE\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP delete方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_method_post",
              children: "RCP_METHOD_POST"
            }), " \"POST\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP post方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_method_put",
              children: "RCP_METHOD_PUT"
            }), " \"PUT\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP put方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_method_patch",
              children: "RCP_METHOD_PATCH"
            }), " \"PATCH\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP patch方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_ip_max_len",
              children: "RCP_IP_MAX_LEN"
            }), " 40"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP地址的最大长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_host_max_len",
              children: "RCP_HOST_MAX_LEN"
            }), " 256"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主机名的最大长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_formvaluetype",
              children: "Rcp_FormValueType"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_formvaluetype",
              children: "Rcp_FormValueType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表单值类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef int(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_getdatacallback",
              children: "Rcp_GetDataCallback"
            }), ") (char *out, uint32_t size)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过回调函数获取数据。当API需要将数据的下一部分发送到服务器时，将调用此回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_contentorpathorcallbacktype",
              children: "Rcp_ContentOrPathOrCallbackType"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_contentorpathorcallbacktype",
              children: "Rcp_ContentOrPathOrCallbackType"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调的内容、路径或类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___content_or_path_or_callback/x_rcp___content_or_path_or_callback",
              children: "Rcp_ContentOrPathOrCallback"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___buffer/x_rcp___buffer",
              children: "Rcp_Buffer"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_buffer",
              children: "Rcp_Buffer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本存储结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___content_or_path_or_callback/x_rcp___content_or_path_or_callback",
              children: "Rcp_ContentOrPathOrCallback"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_contentorpathorcallback",
              children: "Rcp_ContentOrPathOrCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_file_value/x_rcp___form_field_file_value",
              children: "Rcp_FormFieldFileValue"
            }), "中使用的简单表单数据字段值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartvaluetype",
              children: "Rcp_MultipartValueType"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartvaluetype",
              children: "Rcp_MultipartValueType"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多部分值类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_file_value/x_rcp___form_field_file_value",
              children: "Rcp_FormFieldFileValue"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_formfieldfilevalue",
              children: "Rcp_FormFieldFileValue"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表单字段文件值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_value/x_rcp___form_field_value",
              children: "Rcp_FormFieldValue"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_formfieldvalue",
              children: "Rcp_FormFieldValue"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["简单表单数据字段值，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_form",
              children: "Rcp_Form"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartformfieldvalue",
              children: "Rcp_MultipartFormFieldValue"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多部分表单域值，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), "中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_contenttype",
              children: "Rcp_ContentType"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_contenttype",
              children: "Rcp_ContentType"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内容类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_content/x_rcp___request_content",
              children: "Rcp_RequestContent"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_form",
              children: "Rcp_Form"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_form",
              children: "Rcp_Form"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "简单表单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartform",
              children: "Rcp_MultipartForm"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多部分表单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_content/x_rcp___request_content",
              children: "Rcp_RequestContent"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requestcontent",
              children: "Rcp_RequestContent"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_headers",
              children: "Rcp_Headers"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_headers",
              children: "Rcp_Headers"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求或响应的标头。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_value/x_rcp___header_value",
              children: "Rcp_HeaderValue"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_headervalue",
              children: "Rcp_HeaderValue"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求或响应的标头映射的值类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_entry/x_rcp___header_entry",
              children: "Rcp_HeaderEntry"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_headerentry",
              children: "Rcp_HeaderEntry"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求或响应的标头的所有键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_authenticationtype",
              children: "Rcp_AuthenticationType"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_authenticationtype",
              children: "Rcp_AuthenticationType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举类型。服务器的身份验证类型。如果未设置，请与服务器协商。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___credential/x_rcp___credential",
              children: "Rcp_Credential"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_credential",
              children: "Rcp_Credential"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器身份验证中使用的身份验证凭据，包括用户名和密码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___server_authentication/x_rcp___server_authentication",
              children: "Rcp_ServerAuthentication"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_serverauthentication",
              children: "Rcp_ServerAuthentication"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器身份验证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef bool(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_exclusionfunction",
              children: "Rcp_ExclusionFunction"
            }), ") (const char *url)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断host是否使用代理的函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___urls/x_rcp___urls",
              children: "Rcp_Urls"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_urls",
              children: "Rcp_Urls"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "url，用于确定主机是否正在使用代理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_exclusionsvaluetype",
              children: "Rcp_ExclusionsValueType"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_exclusionsvaluetype",
              children: "Rcp_ExclusionsValueType"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["代理排除中使用的数据类型. 用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions",
              children: "Rcp_Exclusions"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions",
              children: "Rcp_Exclusions"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_exclusions",
              children: "Rcp_Exclusions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理配置中用于过滤不使用代理的URLs。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_certtype",
              children: "Rcp_CertType"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_certtype",
              children: "Rcp_CertType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端证书类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___certificate_authority/x_rcp___certificate_authority",
              children: "Rcp_CertificateAuthority"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_certificateauthority",
              children: "Rcp_CertificateAuthority"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于验证远程服务器标识的证书颁发机构（CA）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___client_certificate/x_rcp___client_certificate",
              children: "Rcp_ClientCertificate"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_clientcertificate",
              children: "Rcp_ClientCertificate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送到远程服务器的客户端证书，远程服务器将使用它来验证客户端的标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_remotevalidationtype",
              children: "Rcp_RemoteValidationType"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_remotevalidationtype",
              children: "Rcp_RemoteValidationType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "远程验证类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration",
              children: "Rcp_SecurityConfiguration"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_securityconfiguration",
              children: "Rcp_SecurityConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的安全配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_proxytunnelmode",
              children: "Rcp_ProxyTunnelMode"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_proxytunnelmode",
              children: "Rcp_ProxyTunnelMode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于控制何时创建代理隧道。 隧道或隧道传输意味着向代理发送HTTP CONNECT请求，要求它连接到特定端口号上的远程主机，然后流量只是通过代理。“auto”表示为HTTPS创建隧道。“always”表示始终创建隧道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___web_proxy/x_rcp___web_proxy",
              children: "Rcp_WebProxy"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_webproxy",
              children: "Rcp_WebProxy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义代理配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___ip_and_port/x_rcp___ip_and_port",
              children: "Rcp_IpAndPort"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_ipandport",
              children: "Rcp_IpAndPort"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该接口用在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers",
              children: "Rcp_DnsServers"
            }), "中，表示一个DNS服务器的地址和端口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers",
              children: "Rcp_DnsServers"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_dnsservers",
              children: "Rcp_DnsServers"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DNS服务器。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_configuration/x_rcp___dns_configuration#dnsrules",
              children: "Rcp_DnsConfiguration.dnsRules"
            }), "中的类型之一。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___ip_address/x_rcp___ip_address",
              children: "Rcp_IpAddress"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_ipaddress",
              children: "Rcp_IpAddress"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定静态DNS规则使用的IP地址组。用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule_item/x_rcp___static_dns_rule_item",
              children: "Rcp_StaticDnsRuleItem"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule_item/x_rcp___static_dns_rule_item",
              children: "Rcp_StaticDnsRuleItem"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_staticdnsruleitem",
              children: "Rcp_StaticDnsRuleItem"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述单个静态DNS规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule/x_rcp___static_dns_rule",
              children: "Rcp_StaticDnsRule"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_staticdnsrule",
              children: "Rcp_StaticDnsRule"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "静态DNS规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___ip_address/x_rcp___ip_address",
              children: "Rcp_IpAddress"
            }), " *(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_dynamicdnsrulefunction",
              children: "Rcp_DynamicDnsRuleFunction"
            }), ") (const char *host, uint16_t port)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个可以根据主机名和端口直接返回IP地址的函数。用于动态DNS解析。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_dnsruletype",
              children: "Rcp_DnsRuleType"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_dnsruletype",
              children: "Rcp_DnsRuleType"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DNS规则类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_rule/x_rcp___dns_rule",
              children: "Rcp_DnsRule"
            }), "中使用的dns规则类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_rule/x_rcp___dns_rule",
              children: "Rcp_DnsRule"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_dnsrule",
              children: "Rcp_DnsRule"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS规则配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef size_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_ondatareceivecallbackfunc",
              children: "Rcp_OnDataReceiveCallbackFunc"
            }), ") (void *usrObject, const char *data)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到响应正文时调用的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef size_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_onbinaryreceivecallbackfunc",
              children: "Rcp_OnBinaryReceiveCallbackFunc"
            }), ") (void *usrObject, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___buffer/x_rcp___buffer",
              children: "Rcp_Buffer"
            }), " *buffer)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到响应正文时调用的回调函数（二进制数据）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void (* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_onstatuscodereceivecallbackfunc",
              children: "Rcp_OnStatusCodeReceiveCallbackFunc"
            }), ")(void *usrObject, uint32_t statusCode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到响应状态码时调用的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_onprogresscallbackfunc",
              children: "Rcp_OnProgressCallbackFunc"
            }), ") (void *usrObject, uint64_t totalSize, uint64_t transferredSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求/响应数据传输过程中调用的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_onheaderreceivecallbackfunc",
              children: "Rcp_OnHeaderReceiveCallbackFunc"
            }), ") (void *usrObject, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_headers",
              children: "Rcp_Headers"
            }), " *headers)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收到所有请求时调用的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_onvoidcallbackfunc",
              children: "Rcp_OnVoidCallbackFunc"
            }), ") (void *usrObject)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的DataEnd或Canceled事件回调的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_data_receive_callback/x_rcp___on_data_receive_callback",
              children: "Rcp_OnDataReceiveCallback"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_ondatareceivecallback",
              children: "Rcp_OnDataReceiveCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["接收到数据时回调。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中的配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_progress_callback/x_rcp___on_progress_callback",
              children: "Rcp_OnProgressCallback"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_onprogresscallback",
              children: "Rcp_OnProgressCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["收发时回调配置，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_header_receive_callback/x_rcp___on_header_receive_callback",
              children: "Rcp_OnHeaderReceiveCallback"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_onheaderreceivecallback",
              children: "Rcp_OnHeaderReceiveCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中配置的接收到的header的回调配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_void_callback/x_rcp___on_void_callback",
              children: "Rcp_OnVoidCallback"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_onvoidcallback",
              children: "Rcp_OnVoidCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中配置的数据结束或已取消事件的回调配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_eventshandler",
              children: "Rcp_EventsHandler"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听不同HTTP事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___timeout/x_rcp___timeout",
              children: "Rcp_Timeout"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_timeout",
              children: "Rcp_Timeout"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的超时配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_over_https/x_rcp___dns_over_https",
              children: "Rcp_DnsOverHttps"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_dnsoverhttps",
              children: "Rcp_DnsOverHttps"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS上的DNS配置如果设置，则首选由DOH dns服务器解析的地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_pathpreference",
              children: "Rcp_PathPreference"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_pathpreference",
              children: "Rcp_PathPreference"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求路径首选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___transfer_configuration/x_rcp___transfer_configuration",
              children: "Rcp_TransferConfiguration"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_transferconfiguration",
              children: "Rcp_TransferConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传输配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___info_to_collect/x_rcp___info_to_collect",
              children: "Rcp_InfoToCollect"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_infotocollect",
              children: "Rcp_InfoToCollect"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要收集的请求处理事件。可以通过响应对象检查收集的事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___tracing_configuration/x_rcp___tracing_configuration",
              children: "Rcp_TracingConfiguration"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_tracingconfiguration",
              children: "Rcp_TracingConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求追踪配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_proxytype",
              children: "Rcp_ProxyType"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_proxytype",
              children: "Rcp_ProxyType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理类型。用于区分不同的代理配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___proxy_configuration/x_rcp___proxy_configuration",
              children: "Rcp_ProxyConfiguration"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_proxyconfiguration",
              children: "Rcp_ProxyConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_configuration/x_rcp___dns_configuration",
              children: "Rcp_DnsConfiguration"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_dnsconfiguration",
              children: "Rcp_DnsConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS解析配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___configuration/x_rcp___configuration",
              children: "Rcp_Configuration"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_configuration",
              children: "Rcp_Configuration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___transfer_range/x_rcp___transfer_range",
              children: "Rcp_TransferRange"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_transferrange",
              children: "Rcp_TransferRange"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP传输范围。该设置将转换为HTTP Range标头。具有范围标头的HTTP请求要求服务器仅发送回HTTP响应的一部分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求Cookie。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_request",
              children: "Rcp_Request"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_cookie_entry/x_rcp___request_cookie_entry",
              children: "Rcp_RequestCookieEntry"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requestcookieentry",
              children: "Rcp_RequestCookieEntry"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述请求的所有Cookie键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_statuscode",
              children: "Rcp_StatusCode"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_statuscode",
              children: "Rcp_StatusCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求响应的状态码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_debugevent",
              children: "Rcp_DebugEvent"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_debugevent",
              children: "Rcp_DebugEvent"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述调试信息的事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___debug_info/x_rcp___debug_info",
              children: "Rcp_DebugInfo"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_debuginfo",
              children: "Rcp_DebugInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述存储在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), "中的调试信息的结构。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_cookieattributes",
              children: "Rcp_CookieAttributes"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_cookieattributes",
              children: "Rcp_CookieAttributes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), "中Cookie属性的类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___cookie_attribute_entry/x_rcp___cookie_attribute_entry",
              children: "Rcp_CookieAttributeEntry"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_cookieattributeentry",
              children: "Rcp_CookieAttributeEntry"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie属性条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies",
              children: "Rcp_ResponseCookies"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_responsecookies",
              children: "Rcp_ResponseCookies"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___time_info/x_rcp___time_info",
              children: "Rcp_TimeInfo"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_timeinfo",
              children: "Rcp_TimeInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应计时信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_response",
              children: "Rcp_Response"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络请求的响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_responsecallback",
              children: "Rcp_ResponseCallback"
            }), ") (void *usrCtx, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), " *response, uint32_t errCode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应回调函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object",
              children: "Rcp_ResponseCallbackObject"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_responsecallbackobject",
              children: "Rcp_ResponseCallbackObject"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应回调结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requesthandler",
              children: "Rcp_RequestHandler"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requesthandler",
              children: "Rcp_RequestHandler"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor/x_rcp___interceptor",
              children: "Rcp_Interceptor"
            }), "关联的异步处理器。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_syncrequesthandler",
              children: "Rcp_SyncRequestHandler"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_syncrequesthandler",
              children: "Rcp_SyncRequestHandler"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___sync_interceptor/x_rcp___sync_interceptor",
              children: "Rcp_SyncInterceptor"
            }), "关联的同步处理器。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor/x_rcp___interceptor",
              children: "Rcp_Interceptor"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_interceptor",
              children: "Rcp_Interceptor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步拦截器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___sync_interceptor/x_rcp___sync_interceptor",
              children: "Rcp_SyncInterceptor"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_syncinterceptor",
              children: "Rcp_SyncInterceptor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步拦截器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor_array/x_rcp___interceptor_array",
              children: "Rcp_InterceptorArray"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_interceptorarray",
              children: "Rcp_InterceptorArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步拦截器数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___sync_interceptor_array/x_rcp___sync_interceptor_array",
              children: "Rcp_SyncInterceptorArray"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_syncinterceptorarray",
              children: "Rcp_SyncInterceptorArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步拦截器数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_sessiontype",
              children: "Rcp_SessionType"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_sessiontype",
              children: "Rcp_SessionType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_session",
              children: "Rcp_Session"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_session",
              children: "Rcp_Session"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___session_listener/x_rcp___session_listener",
              children: "Rcp_SessionListener"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_sessionlistener",
              children: "Rcp_SessionListener"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭或取消会话事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___connection_configuration/x_rcp___connection_configuration",
              children: "Rcp_ConnectionConfiguration"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_connectionconfiguration",
              children: "Rcp_ConnectionConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration",
              children: "Rcp_SessionConfiguration"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_sessionconfiguration",
              children: "Rcp_SessionConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_binary_receive_callback/x_rcp___on_binary_receive_callback",
              children: "Rcp_OnBinaryReceiveCallback"
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_binary_receive_callback/x_rcp___on_binary_receive_callback",
              children: "Rcp_OnBinaryReceiveCallback"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应的二进制数据接收回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef size_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_onbinaryreceivecallbackfunc",
              children: "Rcp_OnBinaryReceiveCallbackFunc"
            }), ") (void *usrObject, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___buffer/x_rcp___buffer",
              children: "Rcp_Buffer"
            }), " *buffer)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二进制数据接收回调函数指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_formvaluetype",
              children: "Rcp_FormValueType"
            }), " {  RCP_FORM_VALUE_TYPE_INT32, RCP_FORM_VALUE_TYPE_INT64, RCP_FORM_VALUE_TYPE_BOOL, RCP_FORM_VALUE_TYPE_STRING,  RCP_FORM_VALUE_TYPE_DOUBLE  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表单值类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_contentorpathorcallbacktype",
              children: "Rcp_ContentOrPathOrCallbackType"
            }), " { RCP_FILE_VALUE_TYPE_CONTENT, RCP_FILE_VALUE_TYPE_PATH, RCP_FILE_VALUE_TYPE_CALLBACK}"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调的内容、路径或类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___content_or_path_or_callback/x_rcp___content_or_path_or_callback",
              children: "Rcp_ContentOrPathOrCallback"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartvaluetype",
              children: "Rcp_MultipartValueType"
            }), " { RCP_TYPE_FORM_FIELD_VALUE, RCP_TYPE_FORM_FIELD_FILE_VALUE }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多部分值类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_contenttype",
              children: "Rcp_ContentType"
            }), " { RCP_CONTENT_TYPE_STRING, RCP_CONTENT_TYPE_FORM, RCP_CONTENT_TYPE_MULTIPARTFORM, RCP_CONTENT_TYPE_GETCALLBACK }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内容类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_content/x_rcp___request_content",
              children: "Rcp_RequestContent"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_authenticationtype",
              children: "Rcp_AuthenticationType"
            }), " { RCP_AUTHENTICATION_AUTO, RCP_AUTHENTICATION_BASIC, RCP_AUTHENTICATION_NTLM, RCP_AUTHENTICATION_DIGEST }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举类型。服务器的身份验证类型。如果未设置，请与服务器协商。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_exclusionsvaluetype",
              children: "Rcp_ExclusionsValueType"
            }), " { RCP_EXCLUSION_USE_URL_ARRAY, RCP_EXCLUSION_USE_CALLBACK }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["代理排除中使用的数据类型. 用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions",
              children: "Rcp_Exclusions"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_certtype",
              children: "Rcp_CertType"
            }), " { RCP_CERT_PEM, RCP_CERT_DER, RCP_CERT_P12 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端证书类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_remotevalidationtype",
              children: "Rcp_RemoteValidationType"
            }), " { RCP_REMOTE_VALIDATION_SYSTEM, RCP_REMOTE_VALIDATION_SKIP, RCP_REMOTE_VALIDATION_CERTIFICATE_AUTHORITY }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "远程验证类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_proxytunnelmode",
              children: "Rcp_ProxyTunnelMode"
            }), " { RCP_PROXY_TUNNEL_AUTO, RCP_PROXY_TUNNEL_ALWAYS }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于控制何时创建代理隧道。 隧道或隧道传输意味着向代理发送HTTP CONNECT请求，要求它连接到特定端口号上的远程主机，然后流量只是通过代理。“auto”表示为HTTPS创建隧道。“always”表示始终创建隧道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_dnsruletype",
              children: "Rcp_DnsRuleType"
            }), " { RCP_DNS_RULE_DNS_SERVERS, RCP_DNS_RULE_STATIC, RCP_DNS_RULE_DYNAMIC }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DNS规则类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_rule/x_rcp___dns_rule",
              children: "Rcp_DnsRule"
            }), "中使用的dns规则类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_pathpreference",
              children: "Rcp_PathPreference"
            }), " { RCP_PATH_PREFERENCE_AUTO, RCP_PATH_PREFERENCE_WIFI, RCP_PATH_PREFERENCE_CELLULAR }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求路径首选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_proxytype",
              children: "Rcp_ProxyType"
            }), " { RCP_PROXY_SYSTEM, RCP_PROXY_CUSTOM, RCP_PROXY_NO_PROXY }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理类型。用于区分不同的代理配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_statuscode",
              children: "Rcp_StatusCode"
            }), " {  RCP_NONE = 0, RCP_OK = 200, RCP_CREATED, RCP_ACCEPTED,  RCP_NOT_AUTHORITATIVE, RCP_NO_CONTENT, RCP_RESET, RCP_PARTIAL,  RCP_MULTI_CHOICE = 300, RCP_MOVED_PERMANENTLY, RCP_MOVED_TEMPORARILY, RCP_SEE_OTHER,  RCP_NOT_MODIFIED, RCP_USE_PROXY, RCP_BAD_REQUEST = 400, RCP_UNAUTHORIZED,  RCP_PAYMENT_REQUIRED, RCP_FORBIDDEN, RCP_NOT_FOUND, RCP_BAD_METHOD,  RCP_NOT_ACCEPTABLE, RCP_PROXY_AUTH, RCP_CLIENT_TIMEOUT, RCP_CONFLICT,  RCP_GONE, RCP_LENGTH_REQUIRED, RCP_PRECON_FAILED, RCP_ENTITY_TOO_LARGE,  RCP_REQ_TOO_LONG, RCP_UNSUPPORTED_TYPE, RCP_INTERNAL_ERROR = 500, RCP_NOT_IMPLEMENTED,  RCP_BAD_GATEWAY, RCP_UNAVAILABLE, RCP_GATEWAY_TIMEOUT, RCP_VERSION  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求响应的状态码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_debugevent",
              children: "Rcp_DebugEvent"
            }), " {  RCP_DEBUG_EVENT_TEXT, RCP_DEBUG_EVENT_HEADER_IN, RCP_DEBUG_EVENT_HEADER_OUT, RCP_DEBUG_EVENT_DATA_IN,  RCP_DEBUG_EVENT_DATA_OUT, RCP_DEBUG_EVENT_SSL_DATA_IN, RCP_DEBUG_EVENT_SSL_DATA_OUT  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述调试信息的事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_sessiontype",
              children: "Rcp_SessionType"
            }), " { RCP_SESSION_TYPE_HTTP = 0, RCP_SESSION_TYPE_MAX = 100}"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_form",
              children: "Rcp_Form"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_createform",
              children: "HMS_Rcp_CreateForm"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个简单表单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_destroyform",
              children: "HMS_Rcp_DestroyForm"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_form",
              children: "Rcp_Form"
            }), " *form)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁一个简单表单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_setformvalue",
              children: "HMS_Rcp_SetFormValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_form",
              children: "Rcp_Form"
            }), " *form, const char *key, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_value/x_rcp___form_field_value",
              children: "Rcp_FormFieldValue"
            }), " *value)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置简单表单的键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_value/x_rcp___form_field_value",
              children: "Rcp_FormFieldValue"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_getformvalue",
              children: "HMS_Rcp_GetFormValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_form",
              children: "Rcp_Form"
            }), " *form, const char *key)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过键获取一个简单表单的对应值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_createmultipartform",
              children: "HMS_Rcp_CreateMultipartForm"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个多部分表单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_destroymultipartform",
              children: "HMS_Rcp_DestroyMultipartForm"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), " *multipartForm)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁一个多部分表单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_setmultipartformvalue",
              children: "HMS_Rcp_SetMultipartFormValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), " *multipartForm, const char *key, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            }), " *value)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置多部分表单的键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_getmultipartformvalue",
              children: "HMS_Rcp_GetMultipartFormValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), " *multipartForm, const char *key)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过键获取多部分表单的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_headers",
              children: "Rcp_Headers"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_createheaders",
              children: "HMS_Rcp_CreateHeaders"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为请求或响应创建标头。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_destroyheaders",
              children: "HMS_Rcp_DestroyHeaders"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_headers",
              children: "Rcp_Headers"
            }), " *headers)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁请求或响应的标头。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_setheadervalue",
              children: "HMS_Rcp_SetHeaderValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_headers",
              children: "Rcp_Headers"
            }), " *headers, const char *name, const char *value)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置请求或响应头的键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_value/x_rcp___header_value",
              children: "Rcp_HeaderValue"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_getheadervalue",
              children: "HMS_Rcp_GetHeaderValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_headers",
              children: "Rcp_Headers"
            }), " *headers, const char *name)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过键获取请求或响应头的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_entry/x_rcp___header_entry",
              children: "Rcp_HeaderEntry"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_getheaderentries",
              children: "HMS_Rcp_GetHeaderEntries"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_headers",
              children: "Rcp_Headers"
            }), " *headers)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取请求或响应头的所有键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_destroyheaderentries",
              children: "HMS_Rcp_DestroyHeaderEntries"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_entry/x_rcp___header_entry",
              children: "Rcp_HeaderEntry"
            }), " *headerEntry)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_getheaderentries",
              children: "HMS_Rcp_GetHeaderEntries"
            }), "中获取的所有键值对。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_createrequest",
              children: "HMS_Rcp_CreateRequest"
            }), " (const char *url)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_destroyrequest",
              children: "HMS_Rcp_DestroyRequest"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " *request)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_createrequestcookies",
              children: "HMS_Rcp_CreateRequestCookies"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建空的请求Cookie。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_destroyrequestcookies",
              children: "HMS_Rcp_DestroyRequestCookies"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), " *cookies)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁请求Cookie。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_setrequestcookievalue",
              children: "HMS_Rcp_SetRequestCookieValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), " *cookies, const char *name, const char *value)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置请求Cookie。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_getrequestcookievalue",
              children: "HMS_Rcp_GetRequestCookieValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), " *cookies, const char *name)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过名称获取请求Cookie的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_cookie_entry/x_rcp___request_cookie_entry",
              children: "Rcp_RequestCookieEntry"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_getrequestcookieentries",
              children: "HMS_Rcp_GetRequestCookieEntries"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), " *cookies)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取请求Cookie中的所有键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_destroyrequestcookieentries",
              children: "HMS_Rcp_DestroyRequestCookieEntries"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_cookie_entry/x_rcp___request_cookie_entry",
              children: "Rcp_RequestCookieEntry"
            }), " *cookieEntry)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_getrequestcookievalue",
              children: "HMS_Rcp_GetRequestCookieValue"
            }), "获取的所有与请求Cookie相关的键值对。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_getresponsecookieattrvalue",
              children: "HMS_Rcp_GetResponseCookieAttrValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_cookieattributes",
              children: "Rcp_CookieAttributes"
            }), " *cookieAttributes, const char *name)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过名称获取Cookie属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___cookie_attribute_entry/x_rcp___cookie_attribute_entry",
              children: "Rcp_CookieAttributeEntry"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_getresponsecookieattrentries",
              children: "HMS_Rcp_GetResponseCookieAttrEntries"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_cookieattributes",
              children: "Rcp_CookieAttributes"
            }), " *cookieAttributes)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_cookieattributes",
              children: "Rcp_CookieAttributes"
            }), "中获取所有响应Cookie属性。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_destroyresponsecookieattrentries",
              children: "HMS_Rcp_DestroyResponseCookieAttrEntries"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___cookie_attribute_entry/x_rcp___cookie_attribute_entry",
              children: "Rcp_CookieAttributeEntry"
            }), " *entries)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁响应Cookie属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_callnextrequesthandler",
              children: "HMS_Rcp_CallNextRequestHandler"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " *request, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_requesthandler",
              children: "Rcp_RequestHandler"
            }), " *next, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object",
              children: "Rcp_ResponseCallbackObject"
            }), " *responseCallback)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在拦截器", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor/x_rcp___interceptor",
              children: "Rcp_Interceptor"
            }), "的函数中可以调用下一个拦截器或defaultHandler。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_callnextsyncrequesthandler",
              children: "HMS_Rcp_CallNextSyncRequestHandler"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " *request, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_syncrequesthandler",
              children: "Rcp_SyncRequestHandler"
            }), " *next, uint32_t *errCode)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在拦截器", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___sync_interceptor/x_rcp___sync_interceptor",
              children: "Rcp_SyncInterceptor"
            }), "的函数中可以调用下一个拦截器或默认处理器。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_session",
              children: "Rcp_Session"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_createsession",
              children: "HMS_Rcp_CreateSession"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration",
              children: "Rcp_SessionConfiguration"
            }), " *configuration, uint32_t *errCode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_getsessionid",
              children: "HMS_Rcp_GetSessionId"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_session",
              children: "Rcp_Session"
            }), " *session)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取会话ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration",
              children: "Rcp_SessionConfiguration"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_getsessionconfiguration",
              children: "HMS_Rcp_GetSessionConfiguration"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_session",
              children: "Rcp_Session"
            }), " *session)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取会话配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_fetchsync",
              children: "HMS_Rcp_FetchSync"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_session",
              children: "Rcp_Session"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " *request, uint32_t *errCode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送同步请求并获取响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_fetch",
              children: "HMS_Rcp_Fetch"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_session",
              children: "Rcp_Session"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " *request, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object",
              children: "Rcp_ResponseCallbackObject"
            }), " *responseCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送异步请求并获取响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_cancelrequest",
              children: "HMS_Rcp_CancelRequest"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_session",
              children: "Rcp_Session"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " *request)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消一个请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_cancelsession",
              children: "HMS_Rcp_CancelSession"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_session",
              children: "Rcp_Session"
            }), " *session)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_closesession",
              children: "HMS_Rcp_CloseSession"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_session",
              children: "Rcp_Session"
            }), " **session)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_setrequestonbinarydatarecvcallback",
              children: "HMS_Rcp_SetRequestOnBinaryDataRecvCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " *request, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_binary_receive_callback/x_rcp___on_binary_receive_callback",
              children: "Rcp_OnBinaryReceiveCallback"
            }), " onBinaryReceiveCallback)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为请求设置流式接收二进制数据的回调函数。该回调函数与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_data_receive_callback/x_rcp___on_data_receive_callback",
              children: "Rcp_OnDataReceiveCallback"
            }), "功能一致，功能上可以包含字符数据和二进制数据。"]
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