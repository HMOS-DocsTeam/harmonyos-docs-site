"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["714846"], {
139945(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_use_frontend_page_js_arkweb_ndk_jsbridge_arkweb_ndk_jsbridge_md_195_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-use-frontend-page-js-arkweb-ndk-jsbridge-arkweb-ndk-jsbridge-md-195.json
var site_docs_arkweb_web_use_frontend_page_js_arkweb_ndk_jsbridge_arkweb_ndk_jsbridge_md_195_namespaceObject = JSON.parse('{"id":"arkweb/web-use-frontend-page-js/arkweb-ndk-jsbridge/arkweb-ndk-jsbridge","title":"应用侧与前端页面的相互调用(C/C++)","description":"本指导适用于ArkWeb应用侧与前端网页通信场景，开发者可根据应用架构选择使用ArkWeb Native接口完成业务通信机制（以下简称Native JSBridge）。","source":"@site/docs/arkweb/web-use-frontend-page-js/arkweb-ndk-jsbridge/arkweb-ndk-jsbridge.md","sourceDirName":"arkweb/web-use-frontend-page-js/arkweb-ndk-jsbridge","slug":"/arkweb/web-use-frontend-page-js/arkweb-ndk-jsbridge/","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/arkweb-ndk-jsbridge/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"应用侧与前端页面的相互调用(C/C++)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkweb-ndk-jsbridge","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"建立应用侧与前端页面数据通道","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/web-app-page-data-channel/"},"next":{"title":"建立应用侧与前端页面数据通道(C/C++)","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/arkweb-ndk-page-data-channel/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-use-frontend-page-js/arkweb-ndk-jsbridge/arkweb-ndk-jsbridge.md


const frontMatter = {
	title: '应用侧与前端页面的相互调用(C/C++)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkweb-ndk-jsbridge',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用侧与前端页面的相互调用(C/C++)';

const assets = {

};



const toc = [{
  "value": "适用的应用架构",
  "id": "适用的应用架构",
  "level": 2
}, {
  "value": "使用Native接口实现JSBridge通信（推荐）",
  "id": "使用native接口实现jsbridge通信推荐",
  "level": 2
}, {
  "value": "接口替代关系",
  "id": "接口替代关系",
  "level": 3
}, {
  "value": "使用Native接口绑定ArkWeb",
  "id": "使用native接口绑定arkweb",
  "level": 3
}, {
  "value": "使用Native接口获取API结构体",
  "id": "使用native接口获取api结构体",
  "level": 3
}, {
  "value": "Native侧注册组件生命周期回调",
  "id": "native侧注册组件生命周期回调",
  "level": 3
}, {
  "value": "前端页面调用应用侧函数",
  "id": "前端页面调用应用侧函数",
  "level": 3
}, {
  "value": "应用侧调用前端页面函数",
  "id": "应用侧调用前端页面函数",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 3
}, {
  "value": "使用Native接口实现JSBridge通信",
  "id": "使用native接口实现jsbridge通信",
  "level": 2
}, {
  "value": "使用Native接口绑定ArkWeb",
  "id": "使用native接口绑定arkweb-1",
  "level": 3
}, {
  "value": "使用Native接口获取API结构体",
  "id": "使用native接口获取api结构体-1",
  "level": 3
}, {
  "value": "Native侧注册组件生命周期回调",
  "id": "native侧注册组件生命周期回调-1",
  "level": 3
}, {
  "value": "前端页面调用应用侧函数",
  "id": "前端页面调用应用侧函数-1",
  "level": 3
}, {
  "value": "应用侧调用前端页面函数",
  "id": "应用侧调用前端页面函数-1",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例-1",
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
    p: "p",
    pre: "pre",
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
        id: "应用侧与前端页面的相互调用cc",
        children: "应用侧与前端页面的相互调用(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本指导适用于ArkWeb应用侧与前端网页通信场景，开发者可根据应用架构选择使用ArkWeb Native接口完成业务通信机制（以下简称Native JSBridge）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对JSBridge进行性能优化可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-web-develop-optimization#section58781855115017",
        children: "JSBridge优化解决方案"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用的应用架构",
      children: "适用的应用架构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用使用ArkTS、C++语言混合开发，或本身应用架构较贴近于小程序架构，自带C++侧环境，推荐使用ArkWeb在Native侧提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi",
        children: "ArkWeb_ControllerAPI"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-componentapi/capi-web-arkweb-componentapi",
        children: "ArkWeb_ComponentAPI"
      }), "实现JSBridge功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(676790)/* ["default"] */.A) + "",
        width: "576",
        height: "409"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上图展示了具有普遍适用性的小程序的通用架构。在这一架构中，逻辑层依赖于应用程序自带的JavaScript运行时，该运行时在一个已有的C++环境中运行。通过Native接口，逻辑层能够直接在C++环境中与视图层（其中ArkWeb充当渲染器）进行通信，无需回退至ArkTS环境使用ArkTS JSBridge接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "左图是使用ArkTS JSBridge接口构建小程序的方案，如红框所示，应用需要先调用到ArkTS环境，再调用到C++环境。右图是使用Native JSBridge接口构建小程序的方案，不需要ArkTS环境和C++环境的切换，执行效率更高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(104616)/* ["default"] */.A) + "",
        width: "1214",
        height: "379"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native JSBridge方案解决了ArkTS环境的冗余切换，同时允许回调在非UI线程上运行，避免造成UI阻塞。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用native接口实现jsbridge通信推荐",
      children: "使用Native接口实现JSBridge通信（推荐）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原先，Native同步接口不支持返回值，其返回类型固定为void。然而，为满足业务扩展需求，自API version 18起，引入了替代接口，支持bool、string类型的返回值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["另外针对同步接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi#registerjavascriptproxyex",
        children: "registerJavaScriptProxyEx"
      }), "和异步接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi#registerasyncjavascriptproxyex",
        children: "registerAsyncJavaScriptProxyEx"
      }), "，新增了参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%89%8D%E7%AB%AF%E9%A1%B5%E9%9D%A2%E8%B0%83%E7%94%A8%E5%BA%94%E7%94%A8%E4%BE%A7%E5%87%BD%E6%95%B0",
        children: "permission"
      }), "字段，用于调用权限控制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口替代关系",
      children: "接口替代关系"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "不推荐的接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "替代接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_OnJavaScriptProxyCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_OnJavaScriptProxyCallbackWithResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy方法被执行的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_ProxyMethod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_ProxyMethodWithResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入的Proxy方法通用结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_ProxyObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb_ProxyObjectWithResult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入的Proxy对象通用结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "registerJavaScriptProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "registerJavaScriptProxyEx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入JavaScript对象到window对象中，并在window对象中调用该对象的同步方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "registerAsyncJavaScriptProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "registerAsyncJavaScriptProxyEx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注入JavaScript对象到window对象中，并在window对象中调用该对象的异步方法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用native接口绑定arkweb",
      children: "使用Native接口绑定ArkWeb"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkWeb组件声明在ArkTS侧，需要用户自定义一个标识webTag，并将webTag通过Node-API传至应用Native侧，后续ArkWeb Native接口使用，均需webTag作为对应组件的唯一标识。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 自定义webTag，在WebviewController创建时作为入参传入，建立controller与webTag的映射关系\nwebTag: string = 'ArkWeb1';\ncontroller: webview.WebviewController = new webview.WebviewController(this.webTag);\n// ...\n// 在aboutToAppear方法中，通过Node-API接口将webTag传入C++侧，C++侧使用webTag作为ArkWeb组件的唯一标识\naboutToAppear() {\n  console.info('aboutToAppear');\n  //初始化web Native Development Kit\n  testNapi.nativeWebInit(this.webTag);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "C++侧"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 解析存储webTag\nstatic napi_value NativeWebInit(napi_env env, napi_callback_info info)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"Native Development Kit NativeWebInit start\");\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(\n        LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\",\n        \"Native Development Kit NativeWebInit webTag:%{public}s\", webTagValue);\n\n    // 将webTag保存在实例对象中\n    jsbridge_object_ptr = std::make_shared<JSBridgeObject>(webTagValue);\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用native接口获取api结构体",
      children: "使用Native接口获取API结构体"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在ArkWeb Native侧，需要先获取API结构体，才能调用结构体里的Native API。ArkWeb Native侧API通过函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-interface-h/capi-arkweb-interface-h#oh_arkweb_getnativeapi",
        children: "OH_ArkWeb_GetNativeAPI"
      }), "获取，根据入参type不同，可分别获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi",
        children: "ArkWeb_ControllerAPI"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-componentapi/capi-web-arkweb-componentapi",
        children: "ArkWeb_ComponentAPI"
      }), "结构体。其中，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi",
        children: "ArkWeb_ControllerAPI"
      }), "对应ArkTS侧", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller",
        children: "web_webview.WebviewController API"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-componentapi/capi-web-arkweb-componentapi",
        children: "ArkWeb_ComponentAPI"
      }), "对应ArkTS侧", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
        children: "ArkWeb组件API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static ArkWeb_ControllerAPI *controller = nullptr;\nstatic ArkWeb_ComponentAPI *component = nullptr;\n// ...\ncontroller = reinterpret_cast<ArkWeb_ControllerAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_CONTROLLER));\ncomponent = reinterpret_cast<ArkWeb_ComponentAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_COMPONENT));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "native侧注册组件生命周期回调",
      children: "Native侧注册组件生命周期回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-componentapi/capi-web-arkweb-componentapi",
        children: "ArkWeb_ComponentAPI"
      }), "注册组件生命周期回调，调用接口前，建议通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h#%E5%AE%8F%E5%AE%9A%E4%B9%89",
        children: "ARKWEB_MEMBER_MISSING"
      }), "校验该函数结构体中是否存在对应函数指针，以避免SDK与设备ROM不匹配导致crash问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (!ARKWEB_MEMBER_MISSING(component, onControllerAttached)) {\n    component->onControllerAttached(\n        webTagValue, ValidCallback, static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n} else {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onControllerAttached func not exist\");\n}\n\nif (!ARKWEB_MEMBER_MISSING(component, onPageBegin)) {\n    component->onPageBegin(webTagValue, LoadStartCallback, static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n} else {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onPageBegin func not exist\");\n}\n\nif (!ARKWEB_MEMBER_MISSING(component, onPageEnd)) {\n    component->onPageEnd(webTagValue, LoadEndCallback, static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n} else {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onPageEnd func not exist\");\n}\n\nif (!ARKWEB_MEMBER_MISSING(component, onDestroy)) {\n    component->onDestroy(webTagValue, DestroyCallback, static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n} else {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onDestroy func not exist\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "前端页面调用应用侧函数",
      children: "前端页面调用应用侧函数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi#registerjavascriptproxyex",
        children: "registerJavaScriptProxyEx"
      }), "将应用侧函数注册至前端页面，注册后在下次加载或者重新加载后生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 注册对象\nOH_LOG_Print(\n    LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"Native Development Kit RegisterJavaScriptProxy begin\");\nArkWeb_ProxyMethodWithResult method1 = {\n    \"method1\", ProxyMethod1, static_cast<void *>(jsbridge_object_ptr->GetWeakPtr())};\nArkWeb_ProxyMethodWithResult method2 = {\n    \"method2\", ProxyMethod2, static_cast<void *>(jsbridge_object_ptr->GetWeakPtr())};\nArkWeb_ProxyMethodWithResult methodList[2] = {method1, method2};\n// 调用Native Development Kit接口注册对象\n// 如此注册的情况下，在H5页面就可以使用proxy.method1、proxy.method1调用此文件下的ProxyMethod1和ProxyMethod2方法了\nArkWeb_ProxyObjectWithResult proxyObject = {\"ndkProxy\", methodList, 2};\ncontroller->registerJavaScriptProxyEx(webTag, &proxyObject, \"\");\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数permission是一个JSON字符串，示例如下："
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"javascriptProxyPermission\": {\n    \"urlPermissionList\": [       // Object级权限，如果匹配，所有Method都授权\n      {\n        \"scheme\": \"resource\",    // 精确匹配，不能为空\n        \"host\": \"rawfile\",       // 精确匹配，不能为空\n        \"port\": \"\",              // 精确匹配，为空不检查\n        \"path\": \"\"               // 前缀匹配，为空不检查\n      },\n      {\n        \"scheme\": \"https\",       // 精确匹配，不能为空\n        \"host\": \"xxx.com\",       // 精确匹配，不能为空\n        \"port\": \"8080\",          // 精确匹配，为空不检查\n        \"path\": \"a/b/c\"          // 前缀匹配，为空不检查\n      }\n    ],\n    \"methodList\": [\n      {\n        \"methodName\": \"test\",\n        \"urlPermissionList\": [   // Method级权限\n          {\n            \"scheme\": \"https\",   // 精确匹配，不能为空\n            \"host\": \"xxx.com\",   // 精确匹配，不能为空\n            \"port\": \"\",          // 精确匹配，为空不检查\n            \"path\": \"\"           // 前缀匹配，为空不检查\n          },\n          {\n            \"scheme\": \"resource\",// 精确匹配，不能为空\n            \"host\": \"rawfile\",   // 精确匹配，不能为空\n            \"port\": \"\",          // 精确匹配，为空不检查\n            \"path\": \"\"           // 前缀匹配，为空不检查\n          }\n        ]\n      },\n      {\n        \"methodName\": \"test11\",\n        \"urlPermissionList\": [   // Method级权限\n          {\n            \"scheme\": \"q\",       // 精确匹配，不能为空\n            \"host\": \"r\",         // 精确匹配，不能为空\n            \"port\": \"\",          // 精确匹配，为空不检查\n            \"path\": \"t\"          // 前缀匹配，为空不检查\n          },\n          {\n            \"scheme\": \"u\",       // 精确匹配，不能为空\n            \"host\": \"v\",         // 精确匹配，不能为空\n            \"port\": \"\",          // 精确匹配，为空不检查\n            \"path\": \"\"           // 前缀匹配，为空不检查\n          }\n        ]\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用侧调用前端页面函数",
      children: "应用侧调用前端页面函数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi#runjavascript",
        children: "runJavaScript"
      }), "调用前端页面函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 构造runJS执行的结构体\nchar* jsCode = \"runJSRetStr()\";\nArkWeb_JavaScriptObject object = {(uint8_t *)jsCode, bufferSize, &JSBridgeObject::StaticRunJavaScriptCallback,\n                                     static_cast<void *>(jsbridge_object_ptr->GetWeakPtr())};\n// 调用前端页面runJSRetStr()函数\ncontroller->runJavaScript(webTagValue, &object);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前端页面代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- entry/src/main/resources/rawfile/runJS.html -->\n<!-- runJS.html -->\n<!DOCTYPE html>\n<html lang=\"en-gb\">\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>run javascript demo</title>\n</head>\n<body>\n<h1>run JavaScript Ext demo</h1>\n<p id=\"webDemo\"></p>\n<br>\n<button type=\"button\" style=\"height:30px;width:200px\" onclick=\"testNdkProxyObjMethod1()\">test ndk method1 ! </button>\n<br>\n<br>\n<button type=\"button\" style=\"height:30px;width:200px\" onclick=\"testNdkProxyObjMethod2()\">test ndk method2 ! </button>\n<br>\n\n</body>\n<script type=\"text/javascript\">\n\nfunction testNdkProxyObjMethod1() {\n      if (window.ndkProxy == undefined) {\n            document.getElementById(\"webDemo\").innerHTML = \"ndkProxy undefined\"\n            return \"objName undefined\"\n      }\n\n      if (window.ndkProxy.method1 == undefined) {\n            document.getElementById(\"webDemo\").innerHTML = \"ndkProxy method1 undefined\"\n            return \"objName  test undefined\"\n      }\n\n      let retStr = window.ndkProxy.method1(\"hello\", \"world\", [1.2, -3.4, 123.456], [\"Saab\", \"Volvo\", \"BMW\", undefined], 1.23456, 123789, true, false, 0,  undefined);\n      console.info(\"ndkProxy and method1 is ok, \" + retStr + \", type:\" + typeof(retStr));\n}\n\nfunction testNdkProxyObjMethod2() {\n      if (window.ndkProxy == undefined) {\n            document.getElementById(\"webDemo\").innerHTML = \"ndkProxy undefined\"\n            return \"objName undefined\"\n      }\n\n      if (window.ndkProxy.method2 == undefined) {\n            document.getElementById(\"webDemo\").innerHTML = \"ndkProxy method2 undefined\"\n            return \"objName  test undefined\"\n      }\n\n    var student = {\n            name:\"zhang\",\n            sex:\"man\",\n            age:25\n    };\n    var cars = [student, 456, false, 4.567];\n    let params = \"[\\\"{\\\\\\\"scope\\\\\\\"]\";\n\n    let retStr = window.ndkProxy.method2(\"hello\", \"world\", false, cars, params);\n    console.info(\"ndkProxy and method2 is ok, \" + retStr + \", type:\" + typeof(retStr));\n}\n\nfunction runJSRetStr(data) {\n    const d = new Date();\n    let time = d.getTime();\n    return JSON.stringify(time)\n}\n</script>\n</html>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/pages/Index.ets\nimport testNapi from 'libentry.so';\nimport { webview } from '@kit.ArkWeb';\n\nclass testObj {\n  constructor() {\n  }\n\n  test(): string {\n    console.info('ArkUI Web Component');\n    return \"ArkUI Web Component\";\n  }\n\n  toString(): void {\n    console.info('Web Component toString');\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  webTag: string = 'ArkWeb1';\n  controller: webview.WebviewController = new webview.WebviewController(this.webTag);\n  @State testObjtest: testObj = new testObj();\n\n  aboutToAppear() {\n    console.info(\"aboutToAppear\")\n    //初始化web ndk\n    testNapi.nativeWebInit(this.webTag);\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Button('runJS hello')\n          .fontSize(12)\n          .onClick(() => {\n            testNapi.runJavaScript(this.webTag, \"runJSRetStr(\\\"\" + \"hello\" + \"\\\")\");\n          })\n      }.height('20%')\n\n      Row() {\n        Web({ src: $rawfile('runJS.html'), controller: this.controller })\n          .javaScriptAccess(true)\n          .fileAccess(true)\n          .onControllerAttached(() => {\n            console.error(\"ndk onControllerAttached webId: \" + this.controller.getWebId());\n          })\n      }.height('80%')\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Node-API侧暴露ArkTS接口"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const nativeWebInit: (webName: string) => void;\nexport const runJavaScript: (webName: string, jsCode: string) => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Node-API侧编译配置entry/src/main/cpp/CMakeLists.txt"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.4.1)\nproject(NDKJSBridge)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED hello.cpp jsbridge_object.cpp)\n\nfind_library(\n    # Sets the name of the path variable.\n    hilog-lib\n    # Specifies the name of the NDK library that\n    # you want CMake to locate.\n    hilog_ndk.z\n)\n\ntarget_link_libraries(entry PUBLIC libace_napi.z.so ${hilog-lib} libohweb.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Node-API层代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/hello.cpp\n#include \"napi/native_api.h\"\n#include <bits/alltypes.h>\n#include <memory>\n#include <string>\n#include <sys/types.h>\n#include <thread>\n\n#include \"hilog/log.h\"\n#include \"web/arkweb_interface.h\"\n#include \"jsbridge_object.h\"\n\nconstexpr unsigned int LOG_PRINT_DOMAIN = 0xFF00;\nstd::shared_ptr<JSBridgeObject> jsbridge_object_ptr = nullptr;\nstatic ArkWeb_ControllerAPI *controller = nullptr;\nstatic ArkWeb_ComponentAPI *component = nullptr;\nArkWeb_JavaScriptValueAPI *javaScriptValueApi = nullptr;\n\n// 发送JS脚本到H5侧执行，该方法为执行结果的回调。\nstatic void RunJavaScriptCallback(const char *webTag, const char *result, void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk RunJavaScriptCallback webTag:%{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk RunJavaScriptCallback userData is nullptr\");\n        return;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        jsb_ptr->RunJavaScriptCallback(result);\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                     \"ndk RunJavaScriptCallback jsb_weak_ptr lock failed\");\n    }\n}\n\n// 示例代码 ，注册了1个对象，2个方法\nstatic ArkWeb_JavaScriptValuePtr ProxyMethod1(const char *webTag, const ArkWeb_JavaScriptBridgeData *dataArray, size_t arraySize, void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ProxyMethod1 webTag:%{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ProxyMethod1 userData is nullptr\");\n        return nullptr;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        jsb_ptr->ProxyMethod1(dataArray, arraySize);\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ProxyMethod1 jsb_weak_ptr lock failed\");\n    }\n\n    bool boolValue = true;\n    return javaScriptValueApi->createJavaScriptValue(ArkWeb_JavaScriptValueType::ARKWEB_JAVASCRIPT_BOOL, (void*)(&boolValue), 1);\n}\n\nstatic ArkWeb_JavaScriptValuePtr ProxyMethod2(const char *webTag, const ArkWeb_JavaScriptBridgeData *dataArray, size_t arraySize, void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ProxyMethod2 webTag:%{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ProxyMethod2 userData is nullptr\");\n        return nullptr;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n\n    std::string jsCode = \"runJSRetStr()\";\n    ArkWeb_JavaScriptObject object = {(uint8_t *)jsCode.c_str(), jsCode.size(),\n                                     &JSBridgeObject::StaticRunJavaScriptCallback,\n                                     static_cast<void *>(jsbridge_object_ptr->GetWeakPtr())};\n    controller->runJavaScript(webTag, &object);\n\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        jsb_ptr->ProxyMethod2(dataArray, arraySize);\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ProxyMethod2 jsb_weak_ptr lock failed\");\n    }\n\n    std::string str = \"this is a string\";\n    return javaScriptValueApi->createJavaScriptValue(ArkWeb_JavaScriptValueType::ARKWEB_JAVASCRIPT_STRING, (void*)str.c_str(), str.length() + 1);\n}\n\nvoid ValidCallback(const char *webTag, void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ValidCallback webTag: %{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ValidCallback userData is nullptr\");\n        return;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        jsb_ptr->SaySomething(\"ValidCallback\");\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ValidCallback jsb_weak_ptr lock failed\");\n    }\n\n    // 注册对象\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk registerJavaScriptProxyEx begin\");\n    ArkWeb_ProxyMethodWithResult method1 = {\"method1\", ProxyMethod1, static_cast<void *>(jsbridge_object_ptr->GetWeakPtr())};\n    ArkWeb_ProxyMethodWithResult method2 = {\"method2\", ProxyMethod2, static_cast<void *>(jsbridge_object_ptr->GetWeakPtr())};\n    ArkWeb_ProxyMethodWithResult methodList[2] = {method1, method2};\n    // 调用ndk接口注册对象\n    // 如此注册的情况下，在H5页面就可以使用proxy.method1、proxy.method2调用此文件下的ProxyMethod1和ProxyMethod2方法了\n    ArkWeb_ProxyObjectWithResult proxyObject = {\"ndkProxy\", methodList, 2};\n    controller->registerJavaScriptProxyEx(webTag, &proxyObject, \"\");\n\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk registerJavaScriptProxyEx end\");\n}\n\nvoid LoadStartCallback(const char *webTag, void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk LoadStartCallback webTag: %{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk LoadStartCallback userData is nullptr\");\n        return;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        jsb_ptr->SaySomething(\"LoadStartCallback\");\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk LoadStartCallback jsb_weak_ptr lock failed\");\n    }\n}\n\nvoid LoadEndCallback(const char *webTag, void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk LoadEndCallback webTag: %{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk LoadEndCallback userData is nullptr\");\n        return;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        jsb_ptr->SaySomething(\"LoadEndCallback\");\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk LoadEndCallback jsb_weak_ptr lock failed\");\n    }\n}\n\nvoid DestroyCallback(const char *webTag, void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk DestroyCallback webTag: %{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk DestroyCallback userData is nullptr\");\n        return;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        jsb_ptr->SaySomething(\"DestroyCallback\");\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk DestroyCallback jsb_weak_ptr lock failed\");\n    }\n}\n\nvoid SetComponentCallback(ArkWeb_ComponentAPI * component, const char* webTagValue) {\n    if (!ARKWEB_MEMBER_MISSING(component, onControllerAttached)) {\n        component->onControllerAttached(webTagValue, ValidCallback,\n                                        static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onControllerAttached func not exist\");\n    }\n\n    if (!ARKWEB_MEMBER_MISSING(component, onPageBegin)) {\n        component->onPageBegin(webTagValue, LoadStartCallback,\n                                        static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onPageBegin func not exist\");\n    }\n\n    if (!ARKWEB_MEMBER_MISSING(component, onPageEnd)) {\n        component->onPageEnd(webTagValue, LoadEndCallback,\n                                        static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onPageEnd func not exist\");\n    }\n\n    if (!ARKWEB_MEMBER_MISSING(component, onDestroy)) {\n        component->onDestroy(webTagValue, DestroyCallback,\n                                        static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onDestroy func not exist\");\n    }\n}\n\n// 解析存储webTag\nstatic napi_value NativeWebInit(napi_env env, napi_callback_info info) {\n  OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk NativeWebInit start\");\n  size_t argc = 1;\n  napi_value args[1] = {nullptr};\n  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n  // 获取第一个参数 webTag\n  size_t webTagSize = 0;\n  napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n  char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n  size_t webTagLength = 0;\n  napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n  OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk NativeWebInit webTag:%{public}s\", webTagValue);\n\n  jsbridge_object_ptr = std::make_shared<JSBridgeObject>(webTagValue);\n  if (jsbridge_object_ptr)\n      jsbridge_object_ptr->Init();\n\n  controller = reinterpret_cast<ArkWeb_ControllerAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_CONTROLLER));\n  if (controller)\n      OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"get ArkWeb_ControllerAPI success\");\n\n  component = reinterpret_cast<ArkWeb_ComponentAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_COMPONENT));\n  if (component)\n      OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"get ArkWeb_ComponentAPI success\");\n\n  javaScriptValueApi =\n      reinterpret_cast<ArkWeb_JavaScriptValueAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_JAVASCRIPT_VALUE));\n  if (javaScriptValueApi)\n      OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"get ArkWeb_JavaScriptValueAPI success\");\n  else\n      OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"get ArkWeb_JavaScriptValueAPI failed\");\n\n  SetComponentCallback(component, webTagValue);\n\n  OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk NativeWebInit end\");\n\n  delete[] webTagValue;\n\n  return nullptr;\n}\n\n// 发送JS脚本到H5侧执行\nstatic napi_value RunJavaScript(napi_env env, napi_callback_info info) {\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk OH_NativeArkWeb_RunJavaScript webTag:%{public}s\",\n                 webTagValue);\n\n    // 获取第二个参数 jsCode\n    size_t bufferSize = 0;\n    napi_get_value_string_utf8(env, args[1], nullptr, 0, &bufferSize);\n    char *jsCode = new (std::nothrow) char[bufferSize + 1];\n    size_t byteLength = 0;\n    napi_get_value_string_utf8(env, args[1], jsCode, bufferSize + 1, &byteLength);\n\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                 \"ndk OH_NativeArkWeb_RunJavaScript jsCode len:%{public}zu\", strlen(jsCode));\n\n    // 构造runJS执行的结构体\n    ArkWeb_JavaScriptObject object = {(uint8_t *)jsCode, bufferSize, &JSBridgeObject::StaticRunJavaScriptCallback,\n                                     static_cast<void *>(jsbridge_object_ptr->GetWeakPtr())};\n    controller->runJavaScript(webTagValue, &object);\n\n    delete[] webTagValue;\n\n    delete[] jsCode;\n\n    return nullptr;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports) {\n    napi_property_descriptor desc[] = {\n        {\"nativeWebInit\", nullptr, NativeWebInit, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"runJavaScript\", nullptr, RunJavaScript, nullptr, nullptr, nullptr, napi_default, nullptr},\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native侧业务代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/jsbridge_object.h\n#include \"web/arkweb_type.h\"\n#include <string>\n\nclass JSBridgeObject : public std::enable_shared_from_this<JSBridgeObject> {\npublic:\n    JSBridgeObject(const char* webTag);\n    ~JSBridgeObject() = default;\n    void Init();\n    std::weak_ptr<JSBridgeObject>* GetWeakPtr();\n    static void StaticRunJavaScriptCallback(const char *webTag, const ArkWeb_JavaScriptBridgeData *data, void *userData);\n    void RunJavaScriptCallback(const char *result);\n    void ProxyMethod1(const ArkWeb_JavaScriptBridgeData *dataArray, int32_t arraySize);\n    void ProxyMethod2(const ArkWeb_JavaScriptBridgeData *dataArray, int32_t arraySize);\n    void SaySomething(const char* say);\n\nprivate:\n    std::string webTag_;\n    std::weak_ptr<JSBridgeObject> weak_ptr_;\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/jsbridge_object.cpp\n#include \"jsbridge_object.h\"\n\n#include \"hilog/log.h\"\n\nconstexpr unsigned int LOG_PRINT_DOMAIN = 0xFF00;\n\nJSBridgeObject::JSBridgeObject(const char *webTag) : webTag_(webTag) {}\n\nvoid JSBridgeObject::Init() { weak_ptr_ = shared_from_this(); }\n\nstd::weak_ptr<JSBridgeObject> *JSBridgeObject::GetWeakPtr() { return &weak_ptr_; }\n\nvoid JSBridgeObject::StaticRunJavaScriptCallback(const char *webTag, const ArkWeb_JavaScriptBridgeData *data,\n                                                 void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                 \"JSBridgeObject StaticRunJavaScriptCallback webTag:%{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                     \"JSBridgeObject StaticRunJavaScriptCallback userData is nullptr\");\n        return;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        std::string result((char *)data->buffer, data->size);\n        jsb_ptr->RunJavaScriptCallback(result.c_str());\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                     \"JSBridgeObject StaticRunJavaScriptCallback jsb_weak_ptr lock failed\");\n    }\n}\n\nvoid JSBridgeObject::RunJavaScriptCallback(const char *result) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                 \"JSBridgeObject OH_NativeArkWeb_RunJavaScript result:%{public}s\", result);\n}\n\nvoid JSBridgeObject::ProxyMethod1(const ArkWeb_JavaScriptBridgeData *dataArray, int32_t arraySize) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"JSBridgeObject ProxyMethod1 argc:%{public}d\",\n                 arraySize);\n    for (int i = 0; i < arraySize; i++) {\n        std::string result((char *)dataArray[i].buffer, dataArray[i].size);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                     \"JSBridgeObject ProxyMethod1 argv[%{public}d]:%{public}s, size:%{public}d\", i, result.c_str(),\n                     dataArray[i].size);\n    }\n}\n\nvoid JSBridgeObject::ProxyMethod2(const ArkWeb_JavaScriptBridgeData *dataArray, int32_t arraySize) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"JSBridgeObject ProxyMethod2 argc:%{public}d\",\n                 arraySize);\n    for (int i = 0; i < arraySize; i++) {\n        std::string result((char *)dataArray[i].buffer, dataArray[i].size);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                     \"JSBridgeObject ProxyMethod2 argv[%{public}d]:%{public}s, size:%{public}d\", i, result.c_str(),\n                     dataArray[i].size);\n    }\n}\n\nvoid JSBridgeObject::SaySomething(const char *say) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"JSBridgeObject SaySomething argc:%{public}s\", say);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用native接口实现jsbridge通信",
      children: "使用Native接口实现JSBridge通信"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用native接口绑定arkweb-1",
      children: "使用Native接口绑定ArkWeb"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkWeb组件声明在ArkTS侧，需要用户自定义一个标识webTag，并将webTag通过Node-API传至应用Native侧，后续ArkWeb Native接口使用，均需webTag作为对应组件的唯一标识。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 自定义webTag，在WebviewController创建时作为入参传入，建立controller与webTag的映射关系\nwebTag: string = 'ArkWeb1';\ncontroller: webview.WebviewController = new webview.WebviewController(this.webTag);\n// ...\n// aboutToAppear中将webTag通过Node-API接口传入C++侧，作为C++侧ArkWeb组件的唯一标识\naboutToAppear() {\n  console.info(\"aboutToAppear\")\n  //初始化web ndk\n  testNapi.nativeWebInit(this.webTag);\n}\n// ...\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "C++侧"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 解析存储webTag\nstatic napi_value NativeWebInit(napi_env env, napi_callback_info info) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk NativeWebInit start\");\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk NativeWebInit webTag:%{public}s\", webTagValue);\n\n    // 将webTag保存在实例对象中\n    jsbridge_object_ptr = std::make_shared<JSBridgeObject>(webTagValue);\n    // ...\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用native接口获取api结构体-1",
      children: "使用Native接口获取API结构体"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkWeb Native侧需要先获取API结构体，才能调用结构体里的Native API。ArkWeb Native侧API通过函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-interface-h/capi-arkweb-interface-h#oh_arkweb_getnativeapi",
        children: "OH_ArkWeb_GetNativeAPI"
      }), "获取，根据入参type不同，可分别获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi",
        children: "ArkWeb_ControllerAPI"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-componentapi/capi-web-arkweb-componentapi",
        children: "ArkWeb_ComponentAPI"
      }), "函数指针结构体。其中，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi",
        children: "ArkWeb_ControllerAPI"
      }), "对应ArkTS侧", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller",
        children: "web_webview.WebviewController API"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-componentapi/capi-web-arkweb-componentapi",
        children: "ArkWeb_ComponentAPI"
      }), "对应ArkTS侧", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
        children: "ArkWeb组件API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static ArkWeb_ControllerAPI *controller = nullptr;\nstatic ArkWeb_ComponentAPI *component = nullptr;\n// ...\ncontroller = reinterpret_cast<ArkWeb_ControllerAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_CONTROLLER));\ncomponent = reinterpret_cast<ArkWeb_ComponentAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_COMPONENT));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "native侧注册组件生命周期回调-1",
      children: "Native侧注册组件生命周期回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-componentapi/capi-web-arkweb-componentapi",
        children: "ArkWeb_ComponentAPI"
      }), "注册组件生命周期回调，在调用接口前建议通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-type-h/capi-arkweb-type-h#%E5%AE%8F%E5%AE%9A%E4%B9%89",
        children: "ARKWEB_MEMBER_MISSING"
      }), "校验该函数结构体是否有对应函数指针，避免SDK与设备ROM不匹配导致crash问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (!ARKWEB_MEMBER_MISSING(component, onControllerAttached)) {\n    component->onControllerAttached(webTagValue, ValidCallback,\n                                    static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n} else {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onControllerAttached func not exist\");\n}\n\nif (!ARKWEB_MEMBER_MISSING(component, onPageBegin)) {\n    component->onPageBegin(webTagValue, LoadStartCallback,\n                                    static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n} else {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onPageBegin func not exist\");\n}\n\nif (!ARKWEB_MEMBER_MISSING(component, onPageEnd)) {\n    component->onPageEnd(webTagValue, LoadEndCallback,\n                                    static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n} else {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onPageEnd func not exist\");\n}\n\nif (!ARKWEB_MEMBER_MISSING(component, onDestroy)) {\n    component->onDestroy(webTagValue, DestroyCallback,\n                                    static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n} else {\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onDestroy func not exist\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "前端页面调用应用侧函数-1",
      children: "前端页面调用应用侧函数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi#registerjavascriptproxy",
        children: "registerJavaScriptProxy"
      }), "将应用侧函数注册至前端页面，注册后在下次加载或者重新加载后生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 注册对象\nOH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk RegisterJavaScriptProxy begin\");\nArkWeb_ProxyMethod method1 = {\"method1\", ProxyMethod1, static_cast<void *>(jsbridge_object_ptr->GetWeakPtr())};\nArkWeb_ProxyMethod method2 = {\"method2\", ProxyMethod2, static_cast<void *>(jsbridge_object_ptr->GetWeakPtr())};\nArkWeb_ProxyMethod methodList[2] = {method1, method2};\n// 调用ndk接口注册对象\n// 如此注册的情况下，在H5页面就可以使用proxy.method1、proxy.method2调用此文件下的ProxyMethod1和ProxyMethod2方法了\nArkWeb_ProxyObject proxyObject = {\"ndkProxy\", methodList, 2};\ncontroller->registerJavaScriptProxy(webTag, &proxyObject);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用侧调用前端页面函数-1",
      children: "应用侧调用前端页面函数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-controllerapi/capi-web-arkweb-controllerapi#runjavascript",
        children: "runJavaScript"
      }), "调用前端页面函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 构造runJS执行的结构体\nconst char* jsCode = \"runJSRetStr()\";\nArkWeb_JavaScriptObject object = {(uint8_t *)jsCode, bufferSize, &JSBridgeObject::StaticRunJavaScriptCallback,\n                                     static_cast<void *>(jsbridge_object_ptr->GetWeakPtr())};\n// 调用前端页面runJSRetStr()函数\ncontroller->runJavaScript(webTagValue, &object);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "完整示例-1",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前端页面代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- entry/src/main/resources/rawfile/runJS.html -->\n<!-- runJS.html -->\n<!DOCTYPE html>\n<html lang=\"en-gb\">\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>run javascript demo</title>\n</head>\n<body>\n<h1>run JavaScript Ext demo</h1>\n<p id=\"webDemo\"></p>\n<br>\n<button type=\"button\" style=\"height:30px;width:200px\" onclick=\"testNdkProxyObjMethod1()\">test ndk method1 ! </button>\n<br>\n<br>\n<button type=\"button\" style=\"height:30px;width:200px\" onclick=\"testNdkProxyObjMethod2()\">test ndk method2 ! </button>\n<br>\n\n</body>\n<script type=\"text/javascript\">\n\nfunction testNdkProxyObjMethod1() {\n      if (window.ndkProxy == undefined) {\n            document.getElementById(\"webDemo\").innerHTML = \"ndkProxy undefined\"\n            return \"objName undefined\"\n      }\n\n      if (window.ndkProxy.method1 == undefined) {\n            document.getElementById(\"webDemo\").innerHTML = \"ndkProxy method1 undefined\"\n            return \"objName  test undefined\"\n      }\n\n      window.ndkProxy.method1(\"hello\", \"world\", [1.2, -3.4, 123.456], [\"Saab\", \"Volvo\", \"BMW\", undefined], 1.23456, 123789, true, false, 0,  undefined);\n}\n\nfunction testNdkProxyObjMethod2() {\n      if (window.ndkProxy == undefined) {\n            document.getElementById(\"webDemo\").innerHTML = \"ndkProxy undefined\"\n            return \"objName undefined\"\n      }\n\n      if (window.ndkProxy.method2 == undefined) {\n            document.getElementById(\"webDemo\").innerHTML = \"ndkProxy method2 undefined\"\n            return \"objName  test undefined\"\n      }\n\n    var student = {\n            name:\"zhang\",\n            sex:\"man\",\n            age:25\n    };\n    var cars = [student, 456, false, 4.567];\n    let params = \"[\\\"{\\\\\\\"scope\\\\\\\"]\";\n\n    window.ndkProxy.method2(\"hello\", \"world\", false, cars, params);\n}\n\nfunction runJSRetStr(data) {\n    const d = new Date();\n    let time = d.getTime();\n    return JSON.stringify(time)\n}\n</script>\n</html>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/pages/Index.ets\nimport testNapi from 'libentry.so';\nimport { webview } from '@kit.ArkWeb';\n\nclass testObj {\n  constructor() {\n  }\n\n  test(): string {\n    console.info('ArkUI Web Component');\n    return \"ArkUI Web Component\";\n  }\n\n  toString(): void {\n    console.info('Web Component toString');\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  webTag: string = 'ArkWeb1';\n  controller: webview.WebviewController = new webview.WebviewController(this.webTag);\n  @State testObjtest: testObj = new testObj();\n\n  aboutToAppear() {\n    console.info(\"aboutToAppear\")\n    //初始化web ndk\n    testNapi.nativeWebInit(this.webTag);\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Button('runJS hello')\n          .fontSize(12)\n          .onClick(() => {\n            testNapi.runJavaScript(this.webTag, \"runJSRetStr(\\\"\" + \"hello\" + \"\\\")\");\n          })\n      }.height('20%')\n\n      Row() {\n        Web({ src: $rawfile('runJS.html'), controller: this.controller })\n          .javaScriptAccess(true)\n          .fileAccess(true)\n          .onControllerAttached(() => {\n            console.error(\"ndk onControllerAttached webId: \" + this.controller.getWebId());\n          })\n      }.height('80%')\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Node-API侧暴露ArkTS接口"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/types/libentry/index.d.ts\nexport const nativeWebInit: (webName: string) => void;\nexport const runJavaScript: (webName: string, jsCode: string) => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Node-API侧编译配置entry/src/main/cpp/CMakeLists.txt"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.4.1)\nproject(NDKJSBridge)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                    ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED hello.cpp jsbridge_object.cpp)\n\nfind_library(\n    # Sets the name of the path variable.\n    hilog-lib\n    # Specifies the name of the NDK library that\n    # you want CMake to locate.\n    hilog_ndk.z\n)\n\ntarget_link_libraries(entry PUBLIC libace_napi.z.so ${hilog-lib} libohweb.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Node-API层代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/hello.cpp\n#include \"napi/native_api.h\"\n#include <bits/alltypes.h>\n#include <memory>\n#include <string>\n#include <sys/types.h>\n#include <thread>\n\n#include \"hilog/log.h\"\n#include \"web/arkweb_interface.h\"\n#include \"jsbridge_object.h\"\n\nconstexpr unsigned int LOG_PRINT_DOMAIN = 0xFF00;\nstd::shared_ptr<JSBridgeObject> jsbridge_object_ptr = nullptr;\nstatic ArkWeb_ControllerAPI *controller = nullptr;\nstatic ArkWeb_ComponentAPI *component = nullptr;\n\n// 发送JS脚本到H5侧执行，该方法为执行结果的回调。\nstatic void RunJavaScriptCallback(const char *webTag, const char *result, void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk RunJavaScriptCallback webTag:%{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk RunJavaScriptCallback userData is nullptr\");\n        return;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        jsb_ptr->RunJavaScriptCallback(result);\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                     \"ndk RunJavaScriptCallback jsb_weak_ptr lock failed\");\n    }\n}\n\n// 示例代码 ，注册了1个对象，2个方法\nstatic void ProxyMethod1(const char *webTag, const ArkWeb_JavaScriptBridgeData *dataArray, size_t arraySize, void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ProxyMethod1 webTag:%{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ProxyMethod1 userData is nullptr\");\n        return;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        jsb_ptr->ProxyMethod1(dataArray, arraySize);\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ProxyMethod1 jsb_weak_ptr lock failed\");\n    }\n}\n\nstatic void ProxyMethod2(const char *webTag, const ArkWeb_JavaScriptBridgeData *dataArray, size_t arraySize, void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ProxyMethod2 webTag:%{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ProxyMethod2 userData is nullptr\");\n        return;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n\n    std::string jsCode = \"runJSRetStr()\";\n    ArkWeb_JavaScriptObject object = {(uint8_t *)jsCode.c_str(), jsCode.size(),\n                                     &JSBridgeObject::StaticRunJavaScriptCallback,\n                                     static_cast<void *>(jsbridge_object_ptr->GetWeakPtr())};\n    controller->runJavaScript(webTag, &object);\n\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        jsb_ptr->ProxyMethod2(dataArray, arraySize);\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ProxyMethod2 jsb_weak_ptr lock failed\");\n    }\n}\n\nvoid ValidCallback(const char *webTag, void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ValidCallback webTag: %{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ValidCallback userData is nullptr\");\n        return;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        jsb_ptr->SaySomething(\"ValidCallback\");\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk ValidCallback jsb_weak_ptr lock failed\");\n    }\n\n    // 注册对象\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk RegisterJavaScriptProxy begin\");\n    ArkWeb_ProxyMethod method1 = {\"method1\", ProxyMethod1, static_cast<void *>(jsbridge_object_ptr->GetWeakPtr())};\n    ArkWeb_ProxyMethod method2 = {\"method2\", ProxyMethod2, static_cast<void *>(jsbridge_object_ptr->GetWeakPtr())};\n    ArkWeb_ProxyMethod methodList[2] = {method1, method2};\n    // 调用ndk接口注册对象\n    // 如此注册的情况下，在H5页面就可以使用proxy.method1、proxy.method2调用此文件下的ProxyMethod1和ProxyMethod2方法了\n    ArkWeb_ProxyObject proxyObject = {\"ndkProxy\", methodList, 2};\n    controller->registerJavaScriptProxy(webTag, &proxyObject);\n\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk RegisterJavaScriptProxy end\");\n}\n\nvoid LoadStartCallback(const char *webTag, void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk LoadStartCallback webTag: %{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk LoadStartCallback userData is nullptr\");\n        return;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        jsb_ptr->SaySomething(\"LoadStartCallback\");\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk LoadStartCallback jsb_weak_ptr lock failed\");\n    }\n}\n\nvoid LoadEndCallback(const char *webTag, void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk LoadEndCallback webTag: %{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk LoadEndCallback userData is nullptr\");\n        return;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        jsb_ptr->SaySomething(\"LoadEndCallback\");\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk LoadEndCallback jsb_weak_ptr lock failed\");\n    }\n}\n\nvoid DestroyCallback(const char *webTag, void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk DestroyCallback webTag: %{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk DestroyCallback userData is nullptr\");\n        return;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        jsb_ptr->SaySomething(\"DestroyCallback\");\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk DestroyCallback jsb_weak_ptr lock failed\");\n    }\n}\n\nvoid SetComponentCallback(ArkWeb_ComponentAPI * component, const char* webTagValue) {\n    if (!ARKWEB_MEMBER_MISSING(component, onControllerAttached)) {\n        component->onControllerAttached(webTagValue, ValidCallback,\n                                        static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onControllerAttached func not exist\");\n    }\n\n    if (!ARKWEB_MEMBER_MISSING(component, onPageBegin)) {\n        component->onPageBegin(webTagValue, LoadStartCallback,\n                                        static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onPageBegin func not exist\");\n    }\n\n    if (!ARKWEB_MEMBER_MISSING(component, onPageEnd)) {\n        component->onPageEnd(webTagValue, LoadEndCallback,\n                                        static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onPageEnd func not exist\");\n    }\n\n    if (!ARKWEB_MEMBER_MISSING(component, onDestroy)) {\n        component->onDestroy(webTagValue, DestroyCallback,\n                                        static_cast<void *>(jsbridge_object_ptr->GetWeakPtr()));\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"component onDestroy func not exist\");\n    }\n}\n\n// 解析存储webTag\nstatic napi_value NativeWebInit(napi_env env, napi_callback_info info) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk NativeWebInit start\");\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk NativeWebInit webTag:%{public}s\", webTagValue);\n\n    // 将webTag保存在实例对象中\n    jsbridge_object_ptr = std::make_shared<JSBridgeObject>(webTagValue);\n    if (jsbridge_object_ptr)\n        jsbridge_object_ptr->Init();\n\n    controller = reinterpret_cast<ArkWeb_ControllerAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_CONTROLLER));\n    component = reinterpret_cast<ArkWeb_ComponentAPI *>(OH_ArkWeb_GetNativeAPI(ARKWEB_NATIVE_COMPONENT));\n    SetComponentCallback(component, webTagValue);\n\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk NativeWebInit end\");\n    delete[] webTagValue;\n    return nullptr;\n}\n\n// 发送JS脚本到H5侧执行\nstatic napi_value RunJavaScript(napi_env env, napi_callback_info info) {\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取第一个参数webTag\n    size_t webTagSize = 0;\n    napi_get_value_string_utf8(env, args[0], nullptr, 0, &webTagSize);\n    char *webTagValue = new (std::nothrow) char[webTagSize + 1];\n    size_t webTagLength = 0;\n    napi_get_value_string_utf8(env, args[0], webTagValue, webTagSize + 1, &webTagLength);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"ndk OH_NativeArkWeb_RunJavaScript webTag:%{public}s\",\n                 webTagValue);\n\n    // 获取第二个参数 jsCode\n    size_t bufferSize = 0;\n    napi_get_value_string_utf8(env, args[1], nullptr, 0, &bufferSize);\n    char *jsCode = new (std::nothrow) char[bufferSize + 1];\n    size_t byteLength = 0;\n    napi_get_value_string_utf8(env, args[1], jsCode, bufferSize + 1, &byteLength);\n\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                 \"ndk OH_NativeArkWeb_RunJavaScript jsCode len:%{public}zu\", strlen(jsCode));\n\n    // 构造runJS执行的结构体\n    ArkWeb_JavaScriptObject object = {(uint8_t *)jsCode, bufferSize, &JSBridgeObject::StaticRunJavaScriptCallback,\n                                     static_cast<void *>(jsbridge_object_ptr->GetWeakPtr())};\n    controller->runJavaScript(webTagValue, &object);\n    delete[] webTagValue;\n    delete[] jsCode;\n    return nullptr;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports) {\n    napi_property_descriptor desc[] = {\n        {\"nativeWebInit\", nullptr, NativeWebInit, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"runJavaScript\", nullptr, RunJavaScript, nullptr, nullptr, nullptr, napi_default, nullptr},\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void *)0),\n    .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Native侧业务代码"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/jsbridge_object.h\n#include \"web/arkweb_type.h\"\n#include <string>\n\nclass JSBridgeObject : public std::enable_shared_from_this<JSBridgeObject> {\npublic:\n    JSBridgeObject(const char* webTag);\n    ~JSBridgeObject() = default;\n    void Init();\n    std::weak_ptr<JSBridgeObject>* GetWeakPtr();\n    static void StaticRunJavaScriptCallback(const char *webTag, const ArkWeb_JavaScriptBridgeData *data, void *userData);\n    void RunJavaScriptCallback(const char *result);\n    void ProxyMethod1(const ArkWeb_JavaScriptBridgeData *dataArray, int32_t arraySize);\n    void ProxyMethod2(const ArkWeb_JavaScriptBridgeData *dataArray, int32_t arraySize);\n    void SaySomething(const char* say);\n\nprivate:\n    std::string webTag_;\n    std::weak_ptr<JSBridgeObject> weak_ptr_;\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/cpp/jsbridge_object.cpp\n#include \"jsbridge_object.h\"\n\n#include \"hilog/log.h\"\n\nconstexpr unsigned int LOG_PRINT_DOMAIN = 0xFF00;\n\nJSBridgeObject::JSBridgeObject(const char *webTag) : webTag_(webTag) {}\n\nvoid JSBridgeObject::Init() { weak_ptr_ = shared_from_this(); }\n\nstd::weak_ptr<JSBridgeObject> *JSBridgeObject::GetWeakPtr() { return &weak_ptr_; }\n\nvoid JSBridgeObject::StaticRunJavaScriptCallback(const char *webTag, const ArkWeb_JavaScriptBridgeData *data,\n                                                 void *userData) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                 \"JSBridgeObject StaticRunJavaScriptCallback webTag:%{public}s\", webTag);\n    if (!userData) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                     \"JSBridgeObject StaticRunJavaScriptCallback userData is nullptr\");\n        return;\n    }\n    std::weak_ptr<JSBridgeObject> jsb_weak_ptr = *static_cast<std::weak_ptr<JSBridgeObject> *>(userData);\n    if (auto jsb_ptr = jsb_weak_ptr.lock()) {\n        std::string result((char *)data->buffer, data->size);\n        jsb_ptr->RunJavaScriptCallback(result.c_str());\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                     \"JSBridgeObject StaticRunJavaScriptCallback jsb_weak_ptr lock failed\");\n    }\n}\n\nvoid JSBridgeObject::RunJavaScriptCallback(const char *result) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                 \"JSBridgeObject OH_NativeArkWeb_RunJavaScript result:%{public}s\", result);\n}\n\nvoid JSBridgeObject::ProxyMethod1(const ArkWeb_JavaScriptBridgeData *dataArray, int32_t arraySize) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"JSBridgeObject ProxyMethod1 argc:%{public}d\",\n                 arraySize);\n    for (int i = 0; i < arraySize; i++) {\n        std::string result((char *)dataArray[i].buffer, dataArray[i].size);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                     \"JSBridgeObject ProxyMethod1 argv[%{public}d]:%{public}s, size:%{public}d\", i, result.c_str(),\n                     dataArray[i].size);\n    }\n}\n\nvoid JSBridgeObject::ProxyMethod2(const ArkWeb_JavaScriptBridgeData *dataArray, int32_t arraySize) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"JSBridgeObject ProxyMethod2 argc:%{public}d\",\n                 arraySize);\n    for (int i = 0; i < arraySize; i++) {\n        std::string result((char *)dataArray[i].buffer, dataArray[i].size);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\",\n                     \"JSBridgeObject ProxyMethod2 argv[%{public}d]:%{public}s, size:%{public}d\", i, result.c_str(),\n                     dataArray[i].size);\n    }\n}\n\nvoid JSBridgeObject::SaySomething(const char *say) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"ArkWeb\", \"JSBridgeObject SaySomething argc:%{public}s\", say);\n}\n"
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
104616(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438259-9d4dc38ce8d58b9102256ab7c66041f0.png");

},
676790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798564-f7727f2c7145a2b387f7092c28bc7173.png");

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