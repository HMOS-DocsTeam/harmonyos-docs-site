"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["822356"], {
614545(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkweb_api_arkweb_c_arkweb_headerfile_capi_arkweb_type_h_capi_arkweb_type_h_md_6e5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkweb-api-arkweb-c-arkweb-headerfile-capi-arkweb-type-h-capi-arkweb-type-h-md-6e5.json
var site_docs_ref_arkweb_api_arkweb_c_arkweb_headerfile_capi_arkweb_type_h_capi_arkweb_type_h_md_6e5_namespaceObject = JSON.parse('{"id":"arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h","title":"arkweb_type.h","description":"概述","source":"@site/docs-ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h.md","sourceDirName":"arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h","slug":"/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"arkweb_type.h","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-arkweb-type-h"},"sidebar":"ref","previous":{"title":"arkweb_scheme_handler.h","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-scheme-handler-h/capi-arkweb-scheme-handler-h"},"next":{"title":"native_interface_arkweb.h","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-native-interface-arkweb-h/capi-native-interface-arkweb-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h.md


const frontMatter = {
	title: 'arkweb_type.h',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-arkweb-type-h'
};
const contentTitle = 'arkweb_type.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "ArkWeb_WebMessageType",
  "id": "arkweb_webmessagetype",
  "level": 3
}, {
  "value": "ArkWeb_JavaScriptValueType",
  "id": "arkweb_javascriptvaluetype",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "ArkWeb_OnJavaScriptCallback()",
  "id": "arkweb_onjavascriptcallback",
  "level": 3
}, {
  "value": "ArkWeb_OnJavaScriptProxyCallback()",
  "id": "arkweb_onjavascriptproxycallback",
  "level": 3
}, {
  "value": "ArkWeb_OnJavaScriptProxyCallbackWithResult()",
  "id": "arkweb_onjavascriptproxycallbackwithresult",
  "level": 3
}, {
  "value": "ArkWeb_OnComponentCallback()",
  "id": "arkweb_oncomponentcallback",
  "level": 3
}, {
  "value": "ArkWeb_OnScrollCallback()",
  "id": "arkweb_onscrollcallback",
  "level": 3
}, {
  "value": "ArkWeb_OnMessageEventHandler()",
  "id": "arkweb_onmessageeventhandler",
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
        id: "arkweb_typeh",
        children: "arkweb_type.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供ArkWeb在Native侧的公共类型定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <web/arkweb_type.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohweb.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-module/capi-web/capi-web",
        children: "Web"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptbridgedata/capi-web-arkweb-javascriptbridgedata",
              children: "ArkWeb_JavaScriptBridgeData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_JavaScriptBridgeData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义JavaScript Bridge数据的基础结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessage8h/capi-web-arkweb-webmessage8h",
              children: "ArkWeb_WebMessage*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_WebMessagePtr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post Message数据结构体指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptvalue8h/capi-web-arkweb-javascriptvalue8h",
              children: "ArkWeb_JavaScriptValue*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_JavaScriptValuePtr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript数据结构体指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageport8h/capi-web-arkweb-webmessageport8h",
              children: "ArkWeb_WebMessagePort*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_WebMessagePortPtr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post Message端口结构体指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptobject/capi-web-arkweb-javascriptobject",
              children: "ArkWeb_JavaScriptObject"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_JavaScriptObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入的JavaScript结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-proxymethod/capi-web-arkweb-proxymethod",
              children: "ArkWeb_ProxyMethod"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_ProxyMethod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入的Proxy方法通用结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-proxymethodwithresult/capi-web-arkweb-proxymethodwithresult",
              children: "ArkWeb_ProxyMethodWithResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_ProxyMethodWithResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入的Proxy方法通用结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-proxyobject/capi-web-arkweb-proxyobject",
              children: "ArkWeb_ProxyObject"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_ProxyObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入的Proxy对象通用结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-proxyobjectwithresult/capi-web-arkweb-proxyobjectwithresult",
              children: "ArkWeb_ProxyObjectWithResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_ProxyObjectWithResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入的Proxy对象通用结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi",
              children: "ArkWeb_ControllerAPI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_ControllerAPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller相关的Native API结构体。在调用接口前建议通过ARKWEB_MEMBER_MISSING校验该函数结构体是否有对应函数指针，避免SDK与设备ROM不匹配导致crash问题。Controller相关接口需在UI线程中调用OH_ArkWeb_GetNativeAPI方法获取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-componentapi/capi-web-arkweb-componentapi",
              children: "ArkWeb_ComponentAPI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_ComponentAPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component相关的Native API结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageportapi/capi-web-arkweb-webmessageportapi",
              children: "ArkWeb_WebMessagePortAPI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_WebMessagePortAPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post Message相关的Native API结构体。在调用接口前建议通过ARKWEB_MEMBER_MISSING校验该函数结构体是否有对应函数指针，避免SDK与设备ROM不匹配导致crash问题。WebMessagePort相关接口需在UI线程中调用OH_ArkWeb_GetNativeAPI方法获取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageapi/capi-web-arkweb-webmessageapi",
              children: "ArkWeb_WebMessageAPI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_WebMessageAPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post Message数据相关的Native API结构体。在调用接口前建议通过ARKWEB_MEMBER_MISSING校验该函数结构体是否有对应函数指针，避免SDK与设备ROM不匹配导致crash问题。WebMessage相关接口需在UI线程中调用OH_ArkWeb_GetNativeAPI方法获取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-cookiemanagerapi/capi-web-arkweb-cookiemanagerapi",
              children: "ArkWeb_CookieManagerAPI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_CookieManagerAPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义了ArkWeb的CookieManager接口。在调用接口之前，建议使用ARKWEB_MEMBER_MISSING检查函数结构体是否有对应的函数指针，避免SDK与设备ROM不匹配导致崩溃。CookieManager相关接口需在UI线程中调用OH_ArkWeb_GetNativeAPI方法获取。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptvalueapi/capi-web-arkweb-javascriptvalueapi",
              children: "ArkWeb_JavaScriptValueAPI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_JavaScriptValueAPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义了ArkWeb的JavaScriptValue接口。在调用接口之前，建议使用ARKWEB_MEMBER_MISSING检查函数结构体是否有对应的函数指针，避免SDK与设备ROM不匹配导致崩溃。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#arkweb_webmessagetype",
              children: "ArkWeb_WebMessageType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_WebMessageType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post Message数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkweb_javascriptvaluetype",
              children: "ArkWeb_JavaScriptValueType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_JavaScriptValueType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript数据类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
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
              href: "#arkweb_onjavascriptcallback",
              children: "typedef void (*ArkWeb_OnJavaScriptCallback)(const char* webTag, const ArkWeb_JavaScriptBridgeData* data, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_OnJavaScriptCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入的JavaScript执行完成的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkweb_onjavascriptproxycallback",
              children: "typedef void (*ArkWeb_OnJavaScriptProxyCallback)(const char* webTag, const ArkWeb_JavaScriptBridgeData* dataArray, size_t arraySize, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_OnJavaScriptProxyCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy方法被执行的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkweb_onjavascriptproxycallbackwithresult",
              children: "typedef ArkWeb_JavaScriptValuePtr (*ArkWeb_OnJavaScriptProxyCallbackWithResult)(const char* webTag, const ArkWeb_JavaScriptBridgeData* dataArray, size_t arraySize, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_OnJavaScriptProxyCallbackWithResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy方法被执行的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkweb_oncomponentcallback",
              children: "typedef void (*ArkWeb_OnComponentCallback)(const char* webTag, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_OnComponentCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件事件通知相关的通用回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkweb_onscrollcallback",
              children: "typedef void (*ArkWeb_OnScrollCallback)(const char* webTag, void* userData, double x, double y)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_OnScrollCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义Web组件滚动时的回调函数的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#arkweb_onmessageeventhandler",
              children: "typedef void (*ArkWeb_OnMessageEventHandler)(const char* webTag, const ArkWeb_WebMessagePortPtr port, const ArkWeb_WebMessagePtr message, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_OnMessageEventHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理HTML发送过来的Post Message数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ARKWEB_MEMBER_EXISTS(s, f) ((intptr_t) & ((s)->f) - (intptr_t)(s) + sizeof((s)->f) <= *reinterpret_cast<size_t*>(s))"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检查结构体中是否存在该成员变量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKWEB_MEMBER_MISSING(s, f) (!ARKWEB_MEMBER_EXISTS(s, f)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkweb_webmessagetype",
      children: "ArkWeb_WebMessageType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkWeb_WebMessageType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Post Message数据类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "ARKWEB_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKWEB_STRING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKWEB_BUFFER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字节流数据类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkweb_javascriptvaluetype",
      children: "ArkWeb_JavaScriptValueType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ArkWeb_JavaScriptValueType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JavaScript数据类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: "ARKWEB_JAVASCRIPT_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKWEB_JAVASCRIPT_STRING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKWEB_JAVASCRIPT_BOOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool数据类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkweb_onjavascriptcallback",
      children: "ArkWeb_OnJavaScriptCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*ArkWeb_OnJavaScriptCallback)(const char* webTag, const ArkWeb_JavaScriptBridgeData* data, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注入的JavaScript执行完成的回调。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptbridgedata/capi-web-arkweb-javascriptbridgedata",
              children: "ArkWeb_JavaScriptBridgeData"
            }), "* data"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScriptBridge数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkweb_onjavascriptproxycallback",
      children: "ArkWeb_OnJavaScriptProxyCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*ArkWeb_OnJavaScriptProxyCallback)(const char* webTag, const ArkWeb_JavaScriptBridgeData* dataArray, size_t arraySize, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Proxy方法被执行的回调。"
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
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptbridgedata/capi-web-arkweb-javascriptbridgedata",
              children: "ArkWeb_JavaScriptBridgeData"
            }), "* dataArray"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t arraySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkweb_onjavascriptproxycallbackwithresult",
      children: "ArkWeb_OnJavaScriptProxyCallbackWithResult()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef ArkWeb_JavaScriptValuePtr (*ArkWeb_OnJavaScriptProxyCallbackWithResult)(const char* webTag, const ArkWeb_JavaScriptBridgeData* dataArray, size_t arraySize, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Proxy方法被执行的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-javascriptbridgedata/capi-web-arkweb-javascriptbridgedata",
              children: "ArkWeb_JavaScriptBridgeData"
            }), "* dataArray"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t arraySize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkweb_oncomponentcallback",
      children: "ArkWeb_OnComponentCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*ArkWeb_OnComponentCallback)(const char* webTag, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件事件通知相关的通用回调。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkweb_onscrollcallback",
      children: "ArkWeb_OnScrollCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*ArkWeb_OnScrollCallback)(const char* webTag, void* userData, double x, double y)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义Web组件滚动时的回调函数的类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X轴滚动偏移。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y轴滚动偏移。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arkweb_onmessageeventhandler",
      children: "ArkWeb_OnMessageEventHandler()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*ArkWeb_OnMessageEventHandler)(const char* webTag, const ArkWeb_WebMessagePortPtr port, const ArkWeb_WebMessagePtr message, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理HTML发送过来的Post Message数据。"
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
            children: "const char* webTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessageport8h/capi-web-arkweb-webmessageport8h",
              children: "ArkWeb_WebMessagePortPtr"
            }), " port"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post Message端口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-webmessage8h/capi-web-arkweb-webmessage8h",
              children: "ArkWeb_WebMessagePtr"
            }), " message"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post Message数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义数据。"
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