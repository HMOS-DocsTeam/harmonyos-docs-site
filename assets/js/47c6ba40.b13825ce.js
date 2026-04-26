"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["65237"], {
844996(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_kit_network_kit_data_transmission_http_request_http_request_md_47c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-kit-network-kit-data-transmission-http-request-http-request-md-47c.json
var site_docs_system_network_network_kit_network_kit_data_transmission_http_request_http_request_md_47c_namespaceObject = JSON.parse('{"id":"system-network/network-kit/network-kit-data-transmission/http-request/http-request","title":"使用HTTP访问网络","description":"场景介绍","source":"@site/docs/system-network/network-kit/network-kit-data-transmission/http-request/http-request.md","sourceDirName":"system-network/network-kit/network-kit-data-transmission/http-request","slug":"/system-network/network-kit/network-kit-data-transmission/http-request/","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-data-transmission/http-request/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用HTTP访问网络","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/http-request","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Network Kit术语","permalink":"/harmonyos-docs-site/system-network/network-kit/network-terminology/"},"next":{"title":"使用WebSocket访问网络","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-data-transmission/websocket-connection/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-kit/network-kit-data-transmission/http-request/http-request.md


const frontMatter = {
	title: '使用HTTP访问网络',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/http-request',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '使用HTTP访问网络';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "发起HTTP数据请求",
  "id": "发起http数据请求",
  "level": 2
}, {
  "value": "发起HTTP流式传输请求",
  "id": "发起http流式传输请求",
  "level": 2
}, {
  "value": "通过HTTP发起WebDAV请求",
  "id": "通过http发起webdav请求",
  "level": 2
}, {
  "value": "配置证书校验",
  "id": "配置证书校验",
  "level": 2
}, {
  "value": "TLS客户端证书验证流程",
  "id": "tls客户端证书验证流程",
  "level": 3
}, {
  "value": "证书锁定",
  "id": "证书锁定",
  "level": 3
}, {
  "value": "配置不信任用户安装的CA证书",
  "id": "配置不信任用户安装的ca证书",
  "level": 3
}, {
  "value": "明文HTTP访问权限配置说明",
  "id": "明文http访问权限配置说明",
  "level": 3
}, {
  "value": "HTTP拦截器",
  "id": "http拦截器",
  "level": 2
}, {
  "value": "拦截点说明",
  "id": "拦截点说明",
  "level": 3
}, {
  "value": "HTTP拦截器开发步骤",
  "id": "http拦截器开发步骤",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用http访问网络",
        children: "使用HTTP访问网络"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用通过HTTP发起一个数据请求，支持常见的GET、POST、OPTIONS、HEAD、PUT、DELETE、TRACE、CONNECT方法。当前提供了2种HTTP请求方式，若请求发送或接收的数据量较少，可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#request",
        children: "HttpRequest.request"
      }), "，若是大文件的上传或者下载，且关注数据发送和接收进度，可使用HTTP请求流式传输", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#requestinstream10",
        children: "HttpRequest.requestInstream"
      }), "。从API version 22开始，若是需要在\"HTTP请求-响应\"生命周期中的关键节点插入自定义逻辑，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#http%E6%8B%A6%E6%88%AA%E5%99%A8",
        children: "HTTP拦截器"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(621926)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HTTP模块提供了标准的HTTP网络服务能力，Remote Communication Kit（远场通信服务）提供了场景化的网络服务能力，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/remote-communication-kit-guide/remote-communication-introduction",
        children: "Remote Communication Kit简介"
      }), "，应用可根据自己的需要选择使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前HTTP请求支持的场景如下，以下功能对应的选项可以在HTTP请求的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#httprequestoptions",
        children: "HttpRequestOptions"
      }), "中进行设置："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能分类"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "开始支持的版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置请求方式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持GET、POST、HEAD、PUT、DELETE、TRACE、CONNECT、OPTIONS方法，默认为GET。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置请求额外数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持发送请求时同步携带额外数据，默认无此字段。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置读取超时时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数设置的是从请求开始到请求结束的总时间，包括DNS解析、连接建立、传输等。单位为毫秒（ms），默认为60000ms。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置连接超时时间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该参数设置的是连接超时时间。单位为毫秒（ms），默认为60000ms。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HTTP请求头"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当请求方式为\"POST\" \"PUT\" \"DELETE\" 或者\"\"时，默认{'content-Type': 'application/json'}， 否则默认{'content-Type': 'application/x-www-form-urlencoded'}。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置响应数据类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以指定HTTP响应数据的类型，默认无此字段。如果设置了此参数，系统将优先返回指定的类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置请求并发优先级"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定HTTP/HTTPS请求并发优先级，值越大优先级越高，范围[1,1000]，默认为1。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否使用缓存"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以指定是否使用缓存，默认为true，请求时优先读取缓存。 缓存跟随当前进程生效。新缓存会替换旧缓存，设置为false表示不使用缓存。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置使用协议类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS的请求默认是HTTP/2，失败回退HTTP/1.1；HTTP直接用HTTP/1.1。用户可以指定为HTTP 1.1、HTTP 2、HTTP 3协议版本。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "代理设置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HTTP请求代理"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置HTTP代理，默认值为false，表示不使用代理，若设置为true，表示使用HTTP代理，且为系统默认代理，也可通过配置HttpProxy自定义网络代理。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "证书验证"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置CA证书路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果设置了此参数，系统将使用用户指定路径的CA证书（开发者需保证该路径下CA证书的可访问性），否则将使用系统预设CA证书。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "证书验证"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置支持传输客户端证书"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持传输客户端证书，包括证书路径、证书类型、证书密钥路径和密码信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置下载起始位置和结束位置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定客户端要获取的数据范围，通常在下载文件时配置该参数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置需要上传的数据字段表单列表"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置多部分表单数据，通常用于上传文件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS设置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置使用HTTPS协议的服务器进行DNS解析"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置使用HTTPS协议的服务器进行DNS解析。参数必须根据以下格式进行URL编码:'", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://host:port/path'"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS设置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指定的DNS服务器进行DNS解析"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置指定的DNS服务器进行DNS解析。可以设置多个DNS解析服务器，最多3个服务器。如果有3个以上，只取前3个。服务器必须是IPV4或者IPV6地址形式。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础功能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置响应消息的最大字节限制"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应消息的最大字节限制。以字节为单位，默认值为5*1024*1024，最大值为100*1024*1024。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "证书验证"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置动态设置证书锁定配置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态设置证书锁定配置，可以传入单个或多个证书PIN码。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "证书验证"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置解析目标域名时限定地址类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定在解析目标域名时的地址类型，可以设置为：跟随系统网络配置、强制仅使用IPV4地址或者强制仅使用IPV6地址。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "证书验证"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置跳过SSL证书校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以设置跳过SSL证书校验流程。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 18"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "证书验证"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置证书校验的版本和加密套件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义证书校验版本和加密套件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 18"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "证书验证"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置安全连接期间的服务器身份验证配置信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置安全连接期间的服务器身份验证配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API version 18"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "发起http数据请求",
      children: "发起HTTP数据请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(862473)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需在页面中使用UIAbilityContext提供的能力，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
        children: "获取UIAbility的上下文信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例代码见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/NetWork_Kit/NetWorkKit_Datatransmission/HTTP_case",
        children: "Http_case"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入HTTP一般数据请求所需模块"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { http } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建HttpRequest对象"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#httpcreatehttp",
            children: "createHttp()"
          }), "方法，创建HttpRequest对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n// 每一个httpRequest对应一个HTTP请求任务，不可复用。\nlet httpRequest = http.createHttp();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅HTTP响应头事件"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用该对象的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#onheadersreceive8",
            children: "on()"
          }), "方法，订阅HTTP响应头事件，此接口会比request请求先返回。可以根据业务需要订阅此消息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 用于订阅HTTP响应头，此接口会比request请求先返回。可以根据业务需要订阅此消息。\n// 从API 8开始，使用on('headersReceive', Callback)替代on('headerReceive', AsyncCallback)。\nhttpRequest.on('headersReceive', (header) => {\n hilog.info(0x0000, 'testTag', `header: ${JSON.stringify(header)}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发起HTTP请求，解析服务器响应事件"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用该对象的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#httprequest",
            children: "request()"
          }), "方法，传入HTTP请求的url地址和可选参数，发起网络请求，按照实际业务需要，解析返回结果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "httpRequest.request(\n  // 填写HTTP请求的URL地址，可以带参数也可以不带参数。URL地址需要开发者自定义。请求的参数可以在extraData中指定\n  'EXAMPLE_URL',\n  {\n    method: http.RequestMethod.POST, // 可选，默认为http.RequestMethod.GET，用于从服务器获取数据，而POST方法用于向服务器上传数据。\n    // 开发者根据自身业务需要添加header字段\n    header: {\n      'Content-Type': 'application/json'\n    },\n    // 当使用POST请求时此字段用于传递请求体内容，具体格式与服务端协商确定\n    extraData: 'data to send',\n    expectDataType: http.HttpDataType.STRING, // 可选，指定返回数据的类型\n    usingCache: true, // 可选，默认为true\n    priority: 1, // 可选，默认为1\n    connectTimeout: 60000, // 可选，默认为60000ms\n    readTimeout: 60000, // 可选，默认为60000ms\n    usingProtocol: http.HttpProtocol.HTTP1_1, // 可选，协议类型默认值由系统自动指定\n    usingProxy: false, // 可选，默认不使用网络代理，自API 10开始支持该属性\n    caPath:'/path/to/cacert.pem', // 可选，默认使用系统预制证书，自API 10开始支持该属性\n    clientCert: { // 可选，默认不使用客户端证书，自API 11开始支持该属性\n      certPath: '/path/to/client.pem', // 默认不使用客户端证书，自API 11开始支持该属性\n      keyPath: '/path/to/client.key', // 若证书包含Key信息，传入空字符串，自API 11开始支持该属性\n      certType: http.CertType.PEM, // 可选，默认使用PEM，自API 11开始支持该属性\n      keyPassword: 'passwordToKey' // 可选，输入key文件的密码，自API 11开始支持该属性\n    },\n    // 可选，仅当Header中，'content-Type'为'multipart/form-data'时生效,自API 11开始支持该属性\n    // 该属性用于支持向服务器上传二进制数据，根据上传的具体数据类型进行选择。\n    multiFormDataList: [\n      {\n        name: 'Part1', // 数据名，自API 11开始支持该属性\n        contentType: 'text/plain', // 数据类型，自API 11开始支持该属性，上传的数据类型为普通文本文件。\n        data: 'Example data', // 可选，数据内容，自API 11开始支持该属性\n        remoteFileName: 'example.txt' // 可选，自API 11开始支持该属性\n      }, {\n      name: 'Part2', // 数据名，自API 11开始支持该属性\n      contentType: 'text/plain', // 数据类型，自API 11开始支持该属性，上传的数据类型为普通文本文件。\n      // data/app/el2/100/base/com.example.myapplication/haps/entry/files/fileName.txt\n      filePath: `${context.filesDir}/fileName.txt`, // 可选，传入文件路径，自API 11开始支持该属性\n      remoteFileName: 'fileName.txt' // 可选，自API 11开始支持该属性\n      }, {\n        name: 'Part3', // 数据名，自API 11开始支持该属性。\n        contentType: 'image/png', // 数据类型，自API 11开始支持该属性，上传的数据类型为png格式的图片。\n        // data/app/el2/100/base/com.example.myapplication/haps/entry/files/fileName.png。\n        filePath: `${context.filesDir}/fileName.png`, // 可选，传入文件路径，自API 11开始支持该属性。\n        remoteFileName: 'fileName.png' // 可选，自API 11开始支持该属性。\n      }, {\n        name: 'Part4', // 数据名，自API 11开始支持该属性。\n        contentType: 'audio/mpeg', // 数据类型，自API 11开始支持该属性，上传的数据类型为mpeg格式的音频。\n        // data/app/el2/100/base/com.example.myapplication/haps/entry/files/fileName.mpeg。\n        filePath: `${context.filesDir}/fileName.mpeg`, // 可选，传入文件路径，自API 11开始支持该属性。\n        remoteFileName: 'fileName.mpeg' // 可选，自API 11开始支持该属性。\n      }, {\n        name: 'Part5', // 数据名，自API 11开始支持该属性。\n        contentType: 'video/mp4', // 数据类型，自API 11开始支持该属性，上传的数据类型为mp4格式的视频。\n        // data/app/el2/100/base/com.example.myapplication/haps/entry/files/fileName.mp4。\n        filePath: `${context.filesDir}/fileName.mp4`, // 可选，传入文件路径，自API 11开始支持该属性。\n        remoteFileName: 'fileName.mp4' // 可选，自API 11开始支持该属性。\n      }\n    ]\n  }, (err: BusinessError, data: http.HttpResponse) => {\n  if (!err) {\n    // ...\n    // data.result为HTTP响应内容，可根据业务需要进行解析。\n    hilog.info(0x0000, 'testTag', `Result: ${JSON.stringify(data.result)}`);\n    hilog.info(0x0000, 'testTag', `code: ${JSON.stringify(data.responseCode)}`);\n    // data.header为HTTP响应头，可根据业务需要进行解析。\n    hilog.info(0x0000, 'testTag', `header: ${JSON.stringify(data.header)}`);\n    hilog.info(0x0000, 'testTag', `cookies: ${JSON.stringify(data.cookies)}`);\n    // 当该请求使用完毕时，调用destroy方法主动销毁。\n    httpRequest.destroy();\n  } else {\n    // ...\n    hilog.error(0x0000, 'testTag', `error: ${JSON.stringify(err)}`);\n    // 取消订阅HTTP响应头事件\n    httpRequest.off('headersReceive');\n    // 当该请求使用完毕时，调用destroy方法主动销毁\n    httpRequest.destroy();\n  }\n}\n);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消订阅HTTP响应头事件"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用该对象的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#offheadersreceive8",
            children: "off()"
          }), "方法，取消订阅HTTP响应头事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 在不需要该回调信息时，需要取消订阅HTTP响应头事件，该方法调用的时机，可以参考步骤4中的示例代码。\nhttpRequest.off('headersReceive');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用destroy()方法销毁"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当该请求使用完毕时，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#destroy",
            children: "destroy()"
          }), "方法销毁。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 当该请求使用完毕时，调用destroy方法主动销毁，该方法调用的时机，可以参考步骤4中的示例代码。\nhttpRequest.destroy();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "发起http流式传输请求",
      children: "发起HTTP流式传输请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP流式传输是指在处理HTTP响应时，可以一次只处理响应内容的一小部分，而不是一次性将整个响应加载到内存，这对于处理大文件、实时数据流等场景非常有用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例代码见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/NetWork_Kit/NetWorkKit_Datatransmission/HTTP_case",
        children: "Http_case"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入HTTP流式传输所需模块"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { http } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建HTTP流式传输HttpRequest对象"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#httpcreatehttp",
            children: "createHttp()"
          }), "方法，创建HttpRequest对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 每一个httpRequest对应一个HTTP请求任务，不可复用。\nlet httpRequest = http.createHttp();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按需订阅HTTP流式响应事件"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "服务器响应的数据在dataReceive回调中返回，可通过订阅该信息获取服务器响应的数据，其他流式响应事件可按需进行订阅。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 用于订阅HTTP流式响应数据接收事件。\nlet res = new ArrayBuffer(0);\n// ...\n// 订阅HTTP流式响应数据接收事件\nhttpRequest.on('dataReceive', (data: ArrayBuffer) => {\n  const newRes = new ArrayBuffer(res.byteLength + data.byteLength);\n  const resView = new Uint8Array(newRes);\n  resView.set(new Uint8Array(res));\n  resView.set(new Uint8Array(data), res.byteLength);\n  res = newRes;\n  hilog.info(0x0000, 'testTag', `res length: ${res.byteLength}`);\n});\n\n// 用于订阅HTTP流式响应数据接收完毕事件。\nhttpRequest.on('dataEnd', () => {\n  hilog.info(0x0000, 'testTag', `No more data in response, data receive end`);\n});\n\n// 订阅HTTP流式响应数据接收进度事件，下载服务器的数据时，可以通过该回调获取数据下载进度。\nhttpRequest.on('dataReceiveProgress', (data: http.DataReceiveProgressInfo) => {\n  hilog.info(0x0000, 'testTag', 'dataReceiveProgress receiveSize:' + data.receiveSize + ', totalSize:' + data.totalSize);\n});\n\n// 订阅HTTP流式响应数据发送进度事件，向服务器上传数据时，可以通过该回调获取数据上传进度。\nhttpRequest.on('dataSendProgress', (data: http.DataSendProgressInfo) => {\n  hilog.info(0x0000, 'testTag', 'dataSendProgress receiveSize:' + data.sendSize + ', totalSize:' + data.totalSize);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发起HTTP流式请求，获取服务端数据"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let streamInfo: http.HttpRequestOptions = {\n  method: http.RequestMethod.POST, // 可选，默认为http.RequestMethod.GET，用于向服务器获取数据，而POST方法用于向服务器上传数据。\n  // 开发者根据自身业务需要添加header字段。\n  header: {\n    'Content-Type': 'application/json'\n  },\n  // 当使用POST请求时此字段用于传递请求体内容，具体格式与服务端协商确定。\n  extraData: 'data to send', // 请求体内容\n  expectDataType: http.HttpDataType.STRING, // 可选，指定返回数据的类型。\n  usingCache: true,  // 可选，默认为true。\n  priority: 1, // 可选，默认为1。\n  connectTimeout: 60000, // 可选，默认为60000ms。\n  readTimeout: 60000, // 可选，默认为60000ms。若传输的数据较大，需要较长的时间，建议增大该参数以保证数据传输正常终止。\n  usingProtocol: http.HttpProtocol.HTTP1_1 // 可选，协议类型默认值由系统自动指定。\n};\n\n// 填写HTTP请求的URL地址，可以带参数也可以不带参数。URL地址需要开发者自定义。请求的参数可以在extraData中指定。\nhttpRequest.requestInStream('EXAMPLE_URL', streamInfo)\n  .then((data: number) => {\n    // ...\n    hilog.info(0x0000, 'testTag', `requestInStream OK!`);\n    hilog.info(0x0000, 'testTag', `ResponseCode : ${JSON.stringify(data)}`);\n    // 取消订阅步骤3中订阅的事件，并调用destroy方法主动销毁。\n    this.destroyRequest(httpRequest);\n    // ...\n  }).catch((err: Error) => {\n    // ...\n    hilog.error(0x0000, 'testTag', `requestInStream ERROR : err = ${JSON.stringify(err)}`);\n    // 取消订阅步骤3中订阅的事件，并调用destroy方法主动销毁。\n    this.destroyRequest(httpRequest);\n  })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消步骤3中订阅HTTP流式响应事件，并调用destroy()方法销毁流式HTTP请求"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用该对象的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#offdatareceive10",
            children: "off()"
          }), "方法，取消订阅步骤3中的事件，并且当该请求使用完毕时，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#destroy",
            children: "destroy()"
          }), "方法销毁，该方法调用的时机，可以参考步骤4中的示例代码。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public destroyRequest(httpRequest: http.HttpRequest) {\n  // 取消订阅HTTP流式响应数据接收事件。\n  httpRequest.off('dataReceive');\n  // 取消订阅HTTP流式响应数据发送进度事件。\n  httpRequest.off('dataSendProgress');\n  // 取消订阅HTTP流式响应数据接收进度事件。\n  httpRequest.off('dataReceiveProgress');\n  // 取消订阅HTTP流式响应数据接收完毕事件。\n  httpRequest.off('dataEnd');\n  // 当该请求使用完毕时，调用destroy方法主动销毁。\n  httpRequest.destroy();\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过http发起webdav请求",
      children: "通过HTTP发起WebDAV请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，HTTP请求支持WebDAV协议的文件访问，WebDAV是基于HTTP协议的扩展，支持对远程服务器上的文件进行创建、读取、更新、删除、移动、复制(MKCOL、GET、PUT、DELETE、MOVE、COPY)等操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例代码见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/NetWork_Kit/NetWorkKit_Datatransmission/HTTP_case",
        children: "Http_case"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { http } from '@kit.NetworkKit';\nimport { ComponentId } from '../common/CommonConstant';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  proppatchXml = `example_proppatchXml`; // 修改资源Xml\n  lockXml: string = `example_lockXml`; // 加锁Xml\n  lockToken: string = '';\n\n  build() {\n    Column({ space: 5 }) {\n      Button($r('app.string.HTTP_WEBDAV_PUT'))\n        .id(ComponentId.HTTP_WEBDAV_PUT)\n        .onClick(async () => {\n          let httpRequest = http.createHttp();\n          let file = 'example';\n          httpRequest.request('EXAMPLE_URL' + 'example.txt',\n            {\n              expectDataType: http.HttpDataType.STRING,\n              extraData: file, // 上传文件内容\n              header: { 'Content-Type': 'text/plain; charset=utf-8', 'Content-Length': file.length.toString() },\n              customMethod: 'PUT' // WebDav协议PUT请求方式\n            },\n            (err: Error, data: http.HttpResponse) => {\n              if (!err) {\n                hilog.info(0x0000, 'testTag', 'Result:' + data.result);\n                hilog.info(0x0000, 'testTag', 'code:' + data.responseCode);\n                hilog.info(0x0000, 'testTag', 'header:' + JSON.stringify(data.header));\n                httpRequest.destroy();\n              } else {\n                hilog.error(0x0000, 'testTag', 'error:' + JSON.stringify(err));\n                httpRequest.destroy();\n              }\n            })\n        })\n\n      Button($r('app.string.HTTP_WEBDAV_GET'))\n        .id(ComponentId.HTTP_WEBDAV_GET)\n        .onClick(() => {\n          let httpRequest = http.createHttp();\n          httpRequest.request('EXAMPLE_URL' + 'example.txt',\n            {\n              expectDataType: http.HttpDataType.STRING,\n              customMethod: 'GET' // WebDav协议GET请求方式\n            },\n            (err: Error, data: http.HttpResponse) => {\n              if (!err) {\n                hilog.info(0x0000, 'testTag', 'Result:' + data.result.toString());\n                hilog.info(0x0000, 'testTag', 'code:' + data.responseCode);\n                hilog.info(0x0000, 'testTag', 'header:' + JSON.stringify(data.header));\n                httpRequest.destroy();\n              } else {\n                hilog.error(0x0000, 'testTag', 'error:' + JSON.stringify(err));\n                httpRequest.destroy();\n              }\n            })\n        })\n\n      Button($r('app.string.HTTP_WEBDAV_MKCOL'))\n        .id(ComponentId.HTTP_WEBDAV_MKCOL)\n        .onClick(() => {\n          let httpRequest = http.createHttp();\n          httpRequest.request('EXAMPLE_URL' + 'example/',\n            {\n              expectDataType: http.HttpDataType.STRING,\n              customMethod: 'MKCOL' // WebDav协议MKCOL请求方式\n            },\n            (err: Error, data: http.HttpResponse) => {\n              if (!err) {\n                hilog.info(0x0000, 'testTag', 'Result:' + data.result);\n                hilog.info(0x0000, 'testTag', 'code:' + data.responseCode);\n                hilog.info(0x0000, 'testTag', 'header:' + JSON.stringify(data.header));\n                httpRequest.destroy();\n              } else {\n                hilog.error(0x0000, 'testTag', 'error:' + JSON.stringify(err));\n                httpRequest.destroy();\n              }\n            })\n        })\n\n      Button($r('app.string.HTTP_WEBDAV_DELETE'))\n        .id(ComponentId.HTTP_WEBDAV_DELETE)\n        .onClick(() => {\n          let httpRequest = http.createHttp();\n          httpRequest.request('EXAMPLE_URL' + 'example/',\n            {\n              expectDataType: http.HttpDataType.STRING,\n              header: { 'Content-Type': 'text/xml' },\n              customMethod: 'DELETE' // WebDav协议DELETE请求方式\n            },\n            (err: Error, data: http.HttpResponse) => {\n              if (!err) {\n                hilog.info(0x0000, 'testTag', 'Result:' + data.result);\n                hilog.info(0x0000, 'testTag', 'code:' + data.responseCode);\n                hilog.info(0x0000, 'testTag', 'header:' + JSON.stringify(data.header));\n                httpRequest.destroy();\n              } else {\n                hilog.error(0x0000, 'testTag', 'error:' + JSON.stringify(err));\n                httpRequest.destroy();\n              }\n            })\n        })\n\n      Button($r('app.string.HTTP_WEBDAV_COPY'))\n        .id(ComponentId.HTTP_WEBDAV_COPY)\n        .onClick(() => {\n          let httpRequest = http.createHttp();\n          httpRequest.request('EXAMPLE_URL' + 'example.txt',\n            {\n              expectDataType: http.HttpDataType.STRING,\n              header: { 'Destination': 'EXAMPLE_URL' + 'new_example.txt' },\n              customMethod: 'COPY' // WebDav协议COPY请求方式\n            },\n            (err: Error, data: http.HttpResponse) => {\n              if (!err) {\n                hilog.info(0x0000, 'testTag', 'Result:' + data.result);\n                hilog.info(0x0000, 'testTag', 'code:' + data.responseCode);\n                hilog.info(0x0000, 'testTag', 'header:' + JSON.stringify(data.header));\n                httpRequest.destroy();\n              } else {\n                hilog.error(0x0000, 'testTag', 'error:' + JSON.stringify(err));\n                httpRequest.destroy();\n              }\n            })\n        })\n\n      Button($r('app.string.HTTP_WEBDAV_MOVE'))\n        .id(ComponentId.HTTP_WEBDAV_MOVE)\n        .onClick(() => {\n          let httpRequest = http.createHttp();\n          httpRequest.request('EXAMPLE_URL' + 'example.txt',\n            {\n              expectDataType: http.HttpDataType.STRING,\n              header: { 'Destination': 'EXAMPLE_URL' + 'reNameText.txt' },\n              customMethod: 'MOVE' // WebDav协议MOVE请求方式\n            },\n            (err: Error, data: http.HttpResponse) => {\n              if (!err) {\n                hilog.info(0x0000, 'testTag', 'Result:' + data.result);\n                hilog.info(0x0000, 'testTag', 'code:' + data.responseCode);\n                hilog.info(0x0000, 'testTag', 'header:' + JSON.stringify(data.header));\n                httpRequest.destroy();\n              } else {\n                hilog.error(0x0000, 'testTag', 'error:' + JSON.stringify(err));\n                httpRequest.destroy();\n              }\n            })\n        })\n\n      Button($r('app.string.HTTP_WEBDAV_PROPPATCH'))\n        .id(ComponentId.HTTP_WEBDAV_PROPPATCH)\n        .onClick(() => {\n          let httpRequest = http.createHttp();\n          httpRequest.request('EXAMPLE_URL' + 'example.txt',\n            {\n              extraData: this.proppatchXml,\n              expectDataType: http.HttpDataType.STRING,\n              header: { 'Content-Type': 'application/xml; charset=utf-8', 'Depth': 'infinity' },\n              customMethod: 'PROPPATCH' // WebDav协议PROPPATCH请求方式\n            },\n            (err: Error, data: http.HttpResponse) => {\n              if (!err) {\n                hilog.info(0x0000, 'testTag', 'Result:' + data.result);\n                hilog.info(0x0000, 'testTag', 'code:' + data.responseCode);\n                hilog.info(0x0000, 'testTag', 'header:' + JSON.stringify(data.header));\n                httpRequest.destroy();\n              } else {\n                hilog.error(0x0000, 'testTag', 'error:' + JSON.stringify(err));\n                httpRequest.destroy();\n              }\n            })\n        })\n\n      Button($r('app.string.HTTP_WEBDAV_PROPFIND'))\n        .id(ComponentId.HTTP_WEBDAV_PROPFIND)\n        .onClick(() => {\n          let httpRequest = http.createHttp();\n          httpRequest.request('EXAMPLE_URL' + 'example.txt',\n            {\n              expectDataType: http.HttpDataType.STRING,\n              header: {\n                'Content-Type': 'text/xml',\n                'Depth': '0'\n              },\n              customMethod: 'PROPFIND' // WebDav协议PROPFIND请求方式\n            },\n            (err: Error, data: http.HttpResponse) => {\n              if (!err) {\n                hilog.info(0x0000, 'testTag', 'Result:' + data.result);\n                hilog.info(0x0000, 'testTag', 'code:' + data.responseCode);\n                hilog.info(0x0000, 'testTag', 'header:' + JSON.stringify(data.header));\n                httpRequest.destroy();\n              } else {\n                hilog.error(0x0000, 'testTag', 'error:' + JSON.stringify(err));\n                httpRequest.destroy();\n              }\n            })\n        })\n\n      Button($r('app.string.HTTP_WEBDAV_LOCK'))\n        .id(ComponentId.HTTP_WEBDAV_LOCK)\n        .onClick(() => {\n          let httpRequest = http.createHttp();\n          httpRequest.request('EXAMPLE_URL' + 'example.txt',\n            {\n              extraData: this.lockXml,\n              expectDataType: http.HttpDataType.STRING,\n              header: {\n                'Content-Type': 'application/xml',\n                'Depth': '0',\n              },\n              customMethod: 'LOCK' // WebDav协议LOCK请求方式\n            },\n            (err: Error, data: http.HttpResponse) => {\n              if (!err) {\n                let lockTokenRegex = /<D:href>(urn:uuid:[a-fA-F0-9\\-]+)<\\/D:href>/;\n                let statusMatch: RegExpMatchArray | null = (data.result as string).match(lockTokenRegex);\n                if (statusMatch) {\n                  this.lockToken = statusMatch[1];\n                }\n                hilog.info(0x0000, 'testTag', 'Result:' + data.result);\n                hilog.info(0x0000, 'testTag', 'code:' + data.responseCode);\n                hilog.info(0x0000, 'testTag', 'header:' + JSON.stringify(data.header));\n                hilog.info(0x0000, 'testTag', 'lockToken:' + this.lockToken);\n                httpRequest.destroy();\n              } else {\n                hilog.error(0x0000, 'testTag', 'error:' + JSON.stringify(err));\n                httpRequest.destroy();\n              }\n            })\n        })\n\n      Button($r('app.string.HTTP_WEBDAV_UNLOCK'))\n        .id(ComponentId.HTTP_WEBDAV_UNLOCK)\n        .onClick(() => {\n          let httpRequest = http.createHttp();\n          httpRequest.request('EXAMPLE_URL' + 'example.txt',\n            {\n              header: {\n                'Content-Length': '0',\n                'Lock-Token': this.lockToken, // 加锁时返回密钥\n                'Depth': '0'\n              },\n              customMethod: 'UNLOCK' // WebDav协议UNLOCK请求方式\n            },\n            (err: Error, data: http.HttpResponse) => {\n              if (!err) {\n                hilog.info(0x0000, 'testTag', 'Result:' + data.result);\n                hilog.info(0x0000, 'testTag', 'code:' + data.responseCode);\n                hilog.info(0x0000, 'testTag', 'header:' + JSON.stringify(data.header));\n                httpRequest.destroy();\n              } else {\n                hilog.error(0x0000, 'testTag', 'error:' + JSON.stringify(err));\n                httpRequest.destroy();\n              }\n            })\n        })\n\n      Button($r('app.string.HTTP_WEBDAV_UNKNOWN'))\n        .id(ComponentId.HTTP_WEBDAV_UNKNOWN)\n        .onClick(() => {\n          let httpRequest = http.createHttp();\n          httpRequest.request('EXAMPLE_URL',\n            {\n              customMethod: 'UNKNOWN' // 非WebDav协议请求方式\n            },\n            (err: Error, data: http.HttpResponse) => {\n              if (!err) {\n                hilog.info(0x0000, 'testTag', 'Result:' + data.result);\n                hilog.info(0x0000, 'testTag', 'code:' + data.responseCode);\n                hilog.info(0x0000, 'testTag', 'header:' + JSON.stringify(data.header));\n                httpRequest.destroy();\n              } else {\n                hilog.error(0x0000, 'testTag', 'error:' + JSON.stringify(err));\n                httpRequest.destroy();\n              }\n            })\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置证书校验",
      children: "配置证书校验"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用使用HTTPS协议时，涉及证书相关配置。面向互联网用户提供服务的应用仅需信任系统预置的CA证书。当前HTTP模块已默认信任系统预置的CA证书，无需特别设置。如果应用需要锁定证书，只信任开发者特别指定的证书，或者需要跳过证书校验，可以参考以下说明进行配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tls客户端证书验证流程",
      children: "TLS客户端证书验证流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在TLS握手过程中，客户端验证服务端证书以确保连接可信。服务端证书通常包括域名证书和中间CA证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "证书链组成"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书链采用层级信任结构：服务端证书 ← 中间CA证书 ← 根CA证书。其中←表示签发与信任关系，证书链必须完整追溯到可信根证书。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "验证流程"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端接收证书链后执行三级验证："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "证书链完整性验证"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "从服务端证书开始逐级验证数字签名，确保每一级证书均由上一级有效签发，以形成完整的信任链条。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根证书可信性验证"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在证书存储库中查找根证书是否存在。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["存储库来源包括：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "系统预置证书。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "应用信任证书。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "本次请求指定的CA证书。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["可通过相关API(请参考下方：", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "配置参考"
              })
            }), ")指定应用级和请求级信任证书。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "证书内容有效性验证"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "证书有效期检查。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "域名匹配验证：主题备用名称(Subject Alternative Name, SAN)、通用名称(Common Name, CN)与访问域名一致。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "证书吊销状态检查：证书吊销列表(Certificate Revocation List, CRL)、在线证书状态协议(Online Certificate Status Protocol, OCSP)。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "验证结果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "验证成功：继续TLS握手建立安全连接。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "验证失败：终止连接并提示错误信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此流程确保只有持有有效且可信证书的服务端才能建立安全连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "配置参考"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["配置应用信任证书（具体配置方法可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-network-ca-security#section5454123841911",
          children: "网络连接安全配置"
        }), "）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["配置请求级CA证书：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#httprequestoptions",
              children: "httprequestoptions"
            }), "的caPath和caData字段配置HTTPS请求CA证书。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#websocketrequestoptions",
              children: "websocketrequestoptions"
            }), "的caPath字段配置WebSocket请求CA证书。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-socket/js-apis-socket#tlssecureoptions9",
              children: "tlssecureoptions"
            }), "的ca字段指定TLS请求CA证书。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["配置跳过证书校验：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["HTTPS：通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#remotevalidation18",
              children: "remoteValidation"
            }), " = 'skip' 配置。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["WebSocket：通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-websocket/js-apis-websocket#websocketrequestoptions",
              children: "websocketrequestoptions"
            }), "的skipServerCertVerification = false 配置。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["TLSSocket：通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-socket/js-apis-socket#tlsconnectoptions9",
              children: "tlsconnectoptions"
            }), "的skipRemoteValidation = false 配置。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "调试参考"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过API校验指定证书是否可信：可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-networksecurity/js-apis-networksecurity#networksecuritycertverification",
          children: "networkSecurity.certVerification"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过openssl命令校验域名服务器证书链是否被系统信任：hdc shell openssl s_client -connect 主机名:端口 -CApath /etc/security/certificates -brief。若出现Verification: OK说明证书链可信。将-trace -showcerts替换为-brief可以打印详细的TLS握手信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "证书锁定",
      children: "证书锁定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过预置应用级证书，或者预置证书公钥哈希值的方式来进行证书锁定，即只有开发者特别指定的证书才能正常建立HTTPS连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "两种方式都是在配置文件中配置的，配置文件在APP中的路径是：src/main/resources/base/profile/network_config.json。在该配置中，可以为预置的证书与网络服务器建立对应关系。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果不知道服务器域名的证书，可以通过以下方式访问该域名获取证书，注意把www.example.com改成想要获取域名证书的域名，", (0,jsx_runtime.jsx)(_components.code, {
        children: "www.example.com.pem"
      }), "改成想保存的证书文件名："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "openssl s_client -servername www.example.com -connect www.example.com:443 \\\n    < /dev/null | sed -n \"/-----BEGIN/,/-----END/p\" > www.example.com.pem\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果你的环境是Windows系统，需要注意："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将/dev/null替换成NUL。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "和Linux的OpenSSL表现可能不同，OpenSSL可能会等待用户输入才会退出，按Enter键即可。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果没有sed命令，将输出中从-----BEGIN CERTIFICATE-----到-----END CERTIFICATE-----之间的部分复制下来保存即可（复制部分包括这两行）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "预置应用级证书"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "直接把证书原文件预置在APP中。目前支持crt和pem格式的证书文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(370411)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前ohos.net.http和Image组件的证书锁定，会匹配证书链上所有证书的哈希值，如果服务器更新了任意一本证书，都会导致校验失败。如果服务器出现了更新证书的情况，APP版本应当随之更新并推荐消费者尽快升级APP版本，否则可能导致联网失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "预置证书公钥哈希值"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过在配置中指定域名证书公钥的哈希值，只允许使用公钥哈希值匹配的域名证书访问此域名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "域名证书的公钥哈希值可以用如下的命令计算。假设域名证书是通过上面的OpenSSL命令获得的，并保存在www.example.com.pem文件。#开头的行是注释，可以不用输入："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 从证书中提取出公钥\nopenssl x509 -in www.example.com.pem -pubkey -noout > www.example.com.pubkey.pem\n# 将pem格式的公钥转换成der格式\nopenssl asn1parse -noout -inform pem -in www.example.com.pubkey.pem -out www.example.com.pubkey.der\n# 计算公钥的SHA256并转换成base64编码\nopenssl dgst -sha256 -binary www.example.com.pubkey.der | openssl base64\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JSON配置文件示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["预置应用级证书的配置例子如下（具体配置路径可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-network-ca-security#section5454123841911",
        children: "网络连接安全配置"
      }), "）："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"network-security-config\": {\n    \"base-config\": {\n      \"trust-anchors\": [\n        {\n          \"certificates\": \"/etc/security/certificates\"\n        }\n      ]\n    },\n    \"domain-config\": [\n      {\n        \"domains\": [\n          {\n            \"include-subdomains\": true,\n            \"name\": \"example.com\"\n          }\n        ],\n        \"trust-anchors\": [\n          {\n            \"certificates\": \"/data/storage/el1/bundle/entry/resources/resfile\"\n          }\n        ]\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预置证书公钥哈希值的配置例子如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"network-security-config\": {\n    \"domain-config\": [\n      {\n        \"domains\": [\n          {\n            \"include-subdomains\": true,\n            \"name\": \"*.server.com\"\n          }\n        ],\n        \"pin-set\": {\n          \"expiration\": \"2024-11-08\",\n          \"pin\": [\n            {\n              \"digest-algorithm\": \"sha256\",\n              \"digest\": \"FEDCBA987654321\"\n            }\n          ]\n        }\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "证书锁定的配置例子如下:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"network-security-config\": {\n    \"domain-config\": [\n      {\n        \"domains\": [\n          {\n            \"include-subdomains\": true,\n            \"name\": \"*.server.com\"\n          }\n        ],\n        \"pin-set\": {\n          \"expiration\": \"2024-11-08\",\n          \"pin\": [\n            {\n              \"digest-algorithm\": \"sha256\",\n              \"digest\": \"FEDCBA987654321\"\n            }\n          ]\n        }\n      }\n    ]\n  },\n  \"trust-global-user-ca\": false,\n  \"trust-current-user-ca\": false,\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "各个字段含义:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "network-security-config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络安全配置。可包含0或者1个base-config，必须包含1个domain-config。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "base-config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示应用程序范围的安全配置。必须包含1个trust-anchors。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "domain-config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示每个域的安全配置。可以包含任意个item。item必须包含1个domains，可以包含0或者1个trust-anchors，可以包含0个或者1个pin-set。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "trust-anchors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "受信任的CA。可以包含任意个item。item必须包含1个certificates。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "certificates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA证书路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "域。可以包含任意个item。item必须包含1个name(string：指示域名)，可以包含0或者1个include-subdomains。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "include-subdomains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示规则是否适用于子域。true：指示规则适用于子域；false：指示规则不适用于子域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pin-set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书公钥哈希设置。必须包含1个pin，可以包含0或者1个expiration。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "expiration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示证书公钥哈希的过期时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "证书公钥哈希。可以包含任意个item。item必须包含1个digest-algorithm，item必须包含1个digest。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "digest-algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示用于生成哈希的摘要算法。目前只支持sha256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "digest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示公钥哈希。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置不信任用户安装的ca证书",
      children: "配置不信任用户安装的CA证书"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统默认信任系统预置的CA证书和用户安装的CA证书，可配置不信任用户安装的CA证书提升安全性。配置不信任用户安装的CA证书可以在src/main/resources/base/profile/network_config.json进行配置，更多网络连接安全相关的配置可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-network-ca-security#section5454123841911",
        children: "网络连接安全配置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"network-security-config\": {\n    ... ...\n  },\n  \"trust-global-user-ca\": false, // 配置是否信任企业MDM系统或设备管理员用户手动安装的CA证书，默认为true\n  \"trust-current-user-ca\" : false // 配置是否信任当前用户安装的CA证书，默认为true\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "明文http访问权限配置说明",
      children: "明文HTTP访问权限配置说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该配置用于控制HTTP请求是否允许以明文形式传输。以下为明文HTTP访问权限的配置示例（含应用、组件及域名级配置），以及各字段的详细含义说明。更多网络连接安全相关的配置可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-network-ca-security#section5454123841911",
        children: "网络连接安全配置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(685382)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置优先级规则：组件配置（component-config）> 域名配置（domain-config）> 基础配置（base-config），优先级高的配置会覆盖优先级低的规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/resources/base/profile/network_config.json\n{\n  \"network-security-config\": {\n    \"base-config\": {\n      \"cleartextTrafficPermitted\": true // 可选，自API version 20开始支持该属性。\n    },\n    \"domain-config\": [\n      {\n        \"domains\": [\n          {\n            \"include-subdomains\": true,\n            \"name\": \"example.com\"\n          }\n        ],\n        \"cleartextTrafficPermitted\": false // 可选，自API version 20开始支持该属性。\n      }\n    ],\n    \"component-config\": {\n        \"Request\": true // 可选，自API version 20开始支持配置该属性，默认值为true。配置为true表示支持禁止明文传输，false表示不支持禁止明文传输。\n        \"Network Kit\": true, // 可选，自API version 20开始支持配置该属性。\n        \"ArkWeb\": false // 可选，自API version 20开始支持配置该属性。\n        \"Media Kit\": false // 可选，自API version 23开始支持配置该属性。\n        \"Remote Communication Kit\": false // 可选，自API version 23开始支持配置该属性。\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "各个字段含义:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "base-config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示应用程序范围的明文配置。优先级最低。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cleartextTrafficPermitted18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "明文HTTP是否允许。true表示允许，false表示不允许，默认为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "domain-config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示每个域的明文配置。可以包含任意个item。每个item必须包含1个domains。若相同域存在规则冲突时，以匹配到的第一条为准。优先级次于component-config。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "include-subdomains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置为true时，name支持正则匹配。配置为false时，name不支持正则匹配。注意：每增加1000条域名配置，正则匹配的延迟将增加大约10至15毫秒。当域名配置数量超过10000条时，正则匹配会带来较高耗时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置主域名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "component-config20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示每个组件的明文配置。优先级最高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/data-file-processing-arkts/js-apis-request/js-apis-request",
              children: "Request"
            }), "从API version 18开始默认支持明文HTTP功能，不可配置。从API version 20开始支持配置开启或关闭明文HTTP功能 。true表示支持，false表示不支持，默认为true。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network Kit从API version 18开始默认支持明文HTTP功能，不可配置。从API version 20开始支持配置开启或关闭明文HTTP功能。true表示支持，false表示不支持，默认为true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb从API version 20开始支持配置开启或关闭明文HTTP功能。true表示支持，false表示不支持，默认为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Media Kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Media Kit从API version 23开始支持配置开启或关闭明文HTTP功能。true表示支持，false表示不支持，默认为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remote Communication Kit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote Communication Kit从API version 23开始支持配置开启或关闭明文HTTP功能。true表示支持，false表示不支持，默认为false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "http拦截器",
      children: "HTTP拦截器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，HTTP拦截器模块提供了一种强大且可定制的机制，允许开发者在\"HTTP请求-响应\"生命周期中的关键节点插入自定义逻辑。通过拦截器，开发者可以无需修改核心网络代码即可实现修改请求头/体、缓存策略、重定向处理、网络监控、响应预处理等全局功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拦截点说明",
      children: "拦截点说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "拦截点名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "位置说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "拦截点interceptorHandle接口的出参和入参"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "初始请求拦截点（INITIAL_REQUEST）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始请求组装完成后，这是第一个拦截点，适合用于添加全局参数、签名、加密请求体。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当出参为true时，此时入参中的request值为原始值，可以修改，response值为空值，修改无效。  当出参为false时，此时入参中的request值为原始值，修改无效，response值为空值，可以修改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "网络连接拦截点（CONNECT_NETWORK）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在网络连接建立之前，例如TCP/TLS连接。适合进行网络链路相关的操作，如记录网络连接开始时间。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当出参为true时，此时入参中的request值为原始值，可以修改，response值为空值，修改无效。  当出参为false时，此时入参中的request值为原始值，修改无效，response值为空值，可以修改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "缓存拦截点（CACHE_CHECKED）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存检查逻辑命中缓存之后，已确认存在可用缓存。适用于查看缓存值或者修改查询到的缓存结果。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当出参为true时，此时入参中的request值为原始值，修改无效，response值为原始值，修改无效。  当出参为false时，此时入参中的request值为原始值，修改无效，response值为原始值，可以修改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "重定向拦截点（REDIRECTION）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收到重定向响应并准备发送新请求之前。允许修改重定向的目标URL或请求信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当出参为true时，此时入参中的request值为原始值，可以修改URL，response值为原始值，修改无效。  当出参为false时，此时入参中的request值为原始值，修改无效，response值为原始值，可以修改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "最终响应拦截点（FINAL_RESPONSE）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获得最终响应之后。最后一个拦截点，适合对响应进行统一解密、解析、日志记录、错误处理。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当出参为true时，此时入参中的request值为原始值，修改无效，response值为原始值，修改无效。  当出参为false时，此时入参中的request值为原始值，修改无效，response值为原始值，可以修改。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "顺序执行"
        })
      }), "：拦截器严格按照INITIAL_REQUEST->CACHE_CHECKED->NETWORK_CONNECT->(REDIRECTION)->FINAL_RESPONSE的顺序被触发调用。（括号中表示如果请求涉及重定向，则会走重定向拦截器）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "重定向循环"
        })
      }), "：这是流程中最关键的一个循环。当REDIRECTION拦截器被触发后，流程会跳回到NETWORK_CONNECT阶段，重新开始一个新的“请求周期”，直到不再发生重定向为止。这确保了重定向后的新请求也能被所有必要的拦截器（如认证头添加、日志记录等）正确处理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "缓存拦截"
        })
      }), "：CACHE_CHECKED是一个决策点。如果缓存存在且有效，请求会在此处经过CACHE_CHECKED处理后，直接跳转到FINAL_RESPONSE阶段返回缓存数据，从而避免不必要的网络操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "http拦截器开发步骤",
      children: "HTTP拦截器开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入HTTP请求拦截器所需模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { http } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#httpcreatehttp",
            children: "createHttp()"
          }), "方法，创建HttpRequest对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建http请求\nlet httpRequest: http.HttpRequest = http.createHttp();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#httpinterceptorchain22",
            children: "HttpInterceptorChain()"
          }), "方法，创建拦截器链对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建拦截器链\nlet chain: http.HttpInterceptorChain = new http.HttpInterceptorChain();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建拦截器类实现http.HttpInterceptor接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class InitialHttpInterceptor implements http.HttpInterceptor {\n  interceptorType: http.InterceptorType = http.InterceptorType.INITIAL_REQUEST;\n  result: boolean = false;\n\n  constructor(interceptorType: http.InterceptorType, result: boolean) {\n    this.interceptorType = interceptorType;\n    this.result = result;\n  }\n\n  interceptorHandle(reqContext: http.HttpRequestContext, rspContext: http.HttpResponse): Promise<http.ChainContinue> {\n    // 命中拦截器后对请求报文与请求响应操作\n    hilog.info(0xFF00, 'httpNormalRequest', `INITIAL_REQUEST, Original req: ${JSON.stringify(reqContext)}`);\n    hilog.info(0xFF00, 'httpNormalRequest', `INITIAL_REQUEST, Original rsp: ${JSON.stringify(rspContext)}`);\n\n    reqContext.url = EXAMPLE_INITIAL_URL;\n    reqContext.header = { 'content-type': 'text/plain' };\n    reqContext.body = { 'context': 'INITIAL_REQUEST' };\n\n    rspContext.result = 'INITIAL_REQUEST';\n    rspContext.responseCode = 200;\n    rspContext.header =\n      'content-encoding:br \\r\\n content-type:text/html\\r\\ncharset=UTF-8,cxy_all:+5c4ea5d1638626cbb796a7db10e0d663\\r\\ndate:Tue';\n\n    hilog.info(0xFF00, 'httpNormalRequest', `INITIAL_REQUEST, Update req: ${JSON.stringify(reqContext)}`);\n    hilog.info(0xFF00, 'httpNormalRequest', `INITIAL_REQUEST, Update rsp: ${JSON.stringify(rspContext)}`);\n    return Promise.resolve(this.result);\n  }\n}\n\nclass NetworkHttpInterceptor implements http.HttpInterceptor {\n  interceptorType: http.InterceptorType = http.InterceptorType.INITIAL_REQUEST;\n  result: boolean = false;\n\n  constructor(interceptorType: http.InterceptorType, result: boolean) {\n    this.interceptorType = interceptorType;\n    this.result = result;\n  }\n\n  interceptorHandle(reqContext: http.HttpRequestContext, rspContext: http.HttpResponse): Promise<http.ChainContinue> {\n    // 命中拦截器后对请求报文与请求响应操作\n    hilog.info(0xFF00, 'httpNormalRequest', `NETWORK_CONNECT, Original req: ${JSON.stringify(reqContext)}`);\n    hilog.info(0xFF00, 'httpNormalRequest', `NETWORK_CONNECT, Original rsp: ${JSON.stringify(rspContext)}`);\n\n    reqContext.url = EXAMPLE_URL;\n    reqContext.header = { 'content-type': 'text/xml' };\n    reqContext.body = { 'context': 'NETWORK_CONNECT' };\n\n    rspContext.result = 'NETWORK_CONNECT';\n    rspContext.responseCode = 300;\n    rspContext.header =\n      'content-encoding:br \\r\\n content-type:text/html\\r\\ncharset=UTF-8,cxy_all:+5c4ea5d1638626cbb796a7db10e0d663\\r\\ndate:Tue';\n\n    hilog.info(0xFF00, 'httpNormalRequest', `NETWORK_CONNECT, Update req: ${JSON.stringify(reqContext)}`);\n    hilog.info(0xFF00, 'httpNormalRequest', `NETWORK_CONNECT, Update rsp: ${JSON.stringify(rspContext)}`);\n    return Promise.resolve(this.result);\n  }\n}\n\nclass FinalHttpInterceptor implements http.HttpInterceptor {\n  interceptorType: http.InterceptorType = http.InterceptorType.INITIAL_REQUEST;\n  result: boolean = false;\n\n  constructor(interceptorType: http.InterceptorType, result: boolean) {\n    this.interceptorType = interceptorType;\n    this.result = result;\n  }\n\n  interceptorHandle(reqContext: http.HttpRequestContext, rspContext: http.HttpResponse): Promise<http.ChainContinue> {\n    // 命中拦截器后对请求报文与请求响应操作\n    hilog.info(0xFF00, 'httpNormalRequest', `FINAL_RESPONSE, Original req: ${JSON.stringify(reqContext)}`);\n    hilog.info(0xFF00, 'httpNormalRequest', `FINAL_RESPONSE, Original rsp: ${JSON.stringify(rspContext)}`);\n\n    reqContext.url = EXAMPLE_Final_URL;\n    reqContext.header = { 'content-type': 'text/html' };\n    reqContext.body = { 'context': 'FINAL_RESPONSE' };\n\n    rspContext.result = 'FINAL_RESPONSE';\n    rspContext.responseCode = 200;\n    rspContext.header =\n      'content-encoding:br \\r\\n content-type:text/html\\r\\ncharset=UTF-8,cxy_all:+5c4ea5d1638626cbb796a7db10e0d663\\r\\ndate:Tue';\n\n    hilog.info(0xFF00, 'httpNormalRequest', `FINAL_RESPONSE, Update req: ${JSON.stringify(reqContext)}`);\n    hilog.info(0xFF00, 'httpNormalRequest', `FINAL_RESPONSE, Update rsp: ${JSON.stringify(rspContext)}`);\n    return Promise.resolve(this.result);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#addchain22",
            children: "addChain()"
          }), "方法，将需要的拦截器实例加入到拦截器链中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建所需要的拦截器对象,将拦截器对象加入拦截器链中\nchain.addChain([\n  new InitialHttpInterceptor(http.InterceptorType.INITIAL_REQUEST, true),\n  new NetworkHttpInterceptor(http.InterceptorType.NETWORK_CONNECT, true),\n  new FinalHttpInterceptor(http.InterceptorType.FINAL_RESPONSE, true)\n]);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#apply22",
            children: "apply()"
          }), "方法，将当前配置好的拦截器链附加到httpRequest中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 将当前配置好的拦截器链附加到httpRequest中\nchain.apply(httpRequest);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建请求可选项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建请求可选项\nlet options: http.HttpRequestOptions = {\n  method: http.RequestMethod.POST,\n  header: { 'content-type': 'text/html' } as Record<string, string>,\n  extraData: { 'context': 'BODY' } as Record<string, string>,\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用该对象的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#request-1",
            children: "request()"
          }), "方法，传入HTTP请求的URL地址和可选参数，发起网络请求，按照实际业务需要，解析服务器响应事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 发起请求\nhttpRequest.request(EXAMPLE_URL, options, (err: BusinessError, res: http.HttpResponse) => {\n  if (err) {\n    hilog.error(0xFF00, 'httpNormalRequest', `request fail, error code: ${err.code}, msg: ${err.message}`);\n    // ...\n  } else {\n    hilog.info(0xFF00, 'httpNormalRequest', `res:${JSON.stringify(res)}`);\n    // ...\n  }\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#destroy",
            children: "destroy()"
          }), "方法销毁http请求。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 销毁请求\nhttpRequest.destroy();\n"
          })
        }), "\n"]
      }), "\n"]
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
621926(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
370411(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
685382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
862473(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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