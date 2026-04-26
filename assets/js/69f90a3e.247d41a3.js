"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["684055"], {
780607(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_loading_browsing_web_scheme_handler_web_scheme_handler_md_69f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-loading-browsing-web-scheme-handler-web-scheme-handler-md-69f.json
var site_docs_arkweb_web_manage_loading_browsing_web_scheme_handler_web_scheme_handler_md_69f_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-loading-browsing/web-scheme-handler/web-scheme-handler","title":"拦截Web组件发起的网络请求","description":"应用可以通过onInterceptRequest拦截Web组件发起的网络请求，也可以通过SchemeHandler来拦截Web组件发起的网络请求。SchemeHandler提供了ArkTS与NDK两套接口。","source":"@site/docs/arkweb/web-manage-loading-browsing/web-scheme-handler/web-scheme-handler.md","sourceDirName":"arkweb/web-manage-loading-browsing/web-scheme-handler","slug":"/arkweb/web-manage-loading-browsing/web-scheme-handler/","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-scheme-handler/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"拦截Web组件发起的网络请求","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-scheme-handler","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理页面跳转及浏览记录导航","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-redirection-and-browsing-history-mgmt/"},"next":{"title":"自定义页面请求响应","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-resource-interception-request-mgmt/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-loading-browsing/web-scheme-handler/web-scheme-handler.md


const frontMatter = {
	title: '拦截Web组件发起的网络请求',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-scheme-handler',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '拦截Web组件发起的网络请求';

const assets = {

};



const toc = [{
  "value": "网络请求拦截处理 (onInterceptRequest接口)",
  "id": "网络请求拦截处理-oninterceptrequest接口",
  "level": 2
}, {
  "value": "网络请求拦截处理 (SchemeHandler机制)",
  "id": "网络请求拦截处理-schemehandler机制",
  "level": 2
}, {
  "value": "为Web组件设置SchemeHandler",
  "id": "为web组件设置schemehandler",
  "level": 3
}, {
  "value": "设置自定义scheme需要遵循的规则",
  "id": "设置自定义scheme需要遵循的规则",
  "level": 3
}, {
  "value": "获取被拦截请求的信息",
  "id": "获取被拦截请求的信息",
  "level": 3
}, {
  "value": "拦截Web内核的请求，并为被拦截的请求提供自定义的响应信息",
  "id": "拦截web内核的请求并为被拦截的请求提供自定义的响应信息",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 2
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "拦截web组件发起的网络请求",
        children: "拦截Web组件发起的网络请求"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#oninterceptrequest9",
        children: "onInterceptRequest"
      }), "拦截Web组件发起的网络请求，也可以通过SchemeHandler来拦截Web组件发起的网络请求。SchemeHandler提供了ArkTS与NDK两套接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(58563)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "onInterceptRequest接口中无法获取Post Data，如果想要获取Post Data需使用SchemeHandler机制来进行拦截。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网络请求拦截处理-oninterceptrequest接口",
      children: "网络请求拦截处理 (onInterceptRequest接口)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过onInterceptRequest接口拦截Web组件发起的网络请求可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-manage-loading-browsing/web-resource-interception-request-mgmt",
        children: "自定义页面请求响应"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "网络请求拦截处理-schemehandler机制",
      children: "网络请求拦截处理 (SchemeHandler机制)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过SchemeHandler机制来拦截Web组件发起的网络请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "为web组件设置schemehandler",
      children: "为Web组件设置SchemeHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb支持通过SchemeHandler拦截Web组件或者ServiceWorker发出的HTTP(s)及自定义协议的请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Web内核发出相应scheme请求时，会触发为该scheme设置的SchemeHandler的回调。SchemeHandler包含请求开始与请求结束两个回调，应用需要在请求开始的回调中告知Web内核是否进行拦截，在请求结束后清理相关的资源，避免内存泄漏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求开始的回调："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NDK：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-scheme-handler-h/capi-arkweb-scheme-handler-h#arkweb_onrequeststart",
        children: "ArkWeb_OnRequestStart"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webschemehandler/arkts-apis-webview-webschemehandler#onrequeststart12",
        children: "onRequestStart"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求结束的回调："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NDK：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-scheme-handler-h/capi-arkweb-scheme-handler-h#arkweb_onrequeststop",
        children: "ArkWeb_OnRequestStop"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webschemehandler/arkts-apis-webview-webschemehandler#onrequeststop12",
        children: "onRequestStop"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(1447)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要在Web组件初始化之后设置SchemeHandler，否则会设置失败。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若想要拦截Web组件发出的第一个请求，可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#initializewebengine",
          children: "initializeWebEngine"
        }), "方法提前进行Web组件初始化，再设置SchemeHandler实现拦截。详细代码请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B",
          children: "完整示例"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在C++中，通过NDK接口为Web组件设置SchemeHandler："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  // 创建一个ArkWeb_SchemeHandler对象。\n  ArkWeb_SchemeHandler *schemeHandler;\n  OH_ArkWeb_CreateSchemeHandler(&schemeHandler);\n\n  // 为ArkWeb_SchemeHandler设置ArkWeb_OnRequestStart与ArkWeb_OnRequestStop回调。\n  OH_ArkWebSchemeHandler_SetOnRequestStart(schemeHandler, OnURLRequestStart);\n  OH_ArkWebSchemeHandler_SetOnRequestStop(schemeHandler, OnURLRequestStop);\n\n  // 拦截webTag为“scheme-handler”的Web组件发出的scheme为“https”的请求。\n  OH_ArkWeb_SetSchemeHandler(\"https\", \"scheme-handler\", schemeHandler);\n  OH_ArkWebServiceWorker_SetSchemeHandler(\"https\", schemeHandler);\n\n  // 拦截webTag为“scheme-handler”的Web组件发出的scheme为“custom”的请求。\n  OH_ArkWeb_SetSchemeHandler(\"custom\", \"scheme-handler\", schemeHandler);\n  OH_ArkWebServiceWorker_SetSchemeHandler(\"custom\", schemeHandler);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，为Web组件设置SchemeHandler："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  // 初始化WebView控制器和Scheme处理器。\n  controller: webview.WebviewController = new webview.WebviewController();\n  schemeHandler: webview.WebSchemeHandler = new webview.WebSchemeHandler();\n  // 为当前Web组件设置SchemeHandler。\n  this.controller.setWebSchemeHandler('https', this.schemeHandler);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置自定义scheme需要遵循的规则",
      children: "设置自定义scheme需要遵循的规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果要拦截自定义scheme的请求，需要在Web组件初始化之前将自定义scheme注册到Web内核，初始化后再注册会失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件的创建会触发Web内核的初始化。另外ArkWeb还提供了initializeWebEngine接口，用于单独进行Web初始化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在NDK中可以在ets侧先调用testNapi.registerCustomSchemes注册自定义协议，然后调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#initializewebengine",
        children: "initializeWebEngine"
      }), "初始化Web内核，示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 注册三方协议的配置。\n    testNapi.registerCustomSchemes();\n    // 初始化Web组件内核，该操作会初始化Browser进程以及创建BrowserContext。\n    webview.WebviewController.initializeWebEngine();\n    // 设置SchemeHandler。\n    testNapi.setSchemeHandler();\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "testNapi.registerCustomSchemes的C++实现："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 注册“custom“ scheme到Web组件，并指定该scheme需要遵循标准的scheme规则，允许该scheme发出跨域请求。\nOH_ArkWeb_RegisterCustomSchemes(\"custom\", ARKWEB_SCHEME_OPTION_STANDARD | ARKWEB_SCHEME_OPTION_CORS_ENABLED);\n// 注册“custom-local” scheme到Web组件，并指定该scheme需要遵循与“file” scheme一样的规则。\nOH_ArkWeb_RegisterCustomSchemes(\"custom-local\", ARKWEB_SCHEME_OPTION_LOCAL);\n// 注册“custom-csp-bypassing”到Web组件，并指定该scheme需要遵循标准的scheme规则，允许忽略CSP检查。\nOH_ArkWeb_RegisterCustomSchemes(\"custom-csp-bypassing\", ARKWEB_SCHEME_OPTION_CSP_BYPASSING | ARKWEB_SCHEME_OPTION_STANDARD);\n// 注册“custom-isolated”到Web组件，并指定该scheme的请求必须从相同scheme加载的网页中发起。\nOH_ArkWeb_RegisterCustomSchemes(\"custom-isolated\", ARKWEB_SCHEME_OPTION_DISPLAY_ISOLATED);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中可以通过customizeSchemes注册自定义协议，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  // xxx.ets\n  import { webview } from '@kit.ArkWeb';\n  import { BusinessError } from '@kit.BasicServicesKit';\n\n  @Entry\n  @Component\n  struct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  responseWeb: WebResourceResponse = new WebResourceResponse();\n  scheme1: webview.WebCustomScheme = { schemeName: \"name1\", isSupportCORS: true, isSupportFetch: true };\n  scheme2: webview.WebCustomScheme = { schemeName: \"name2\", isSupportCORS: true, isSupportFetch: true };\n  scheme3: webview.WebCustomScheme = { schemeName: \"name3\", isSupportCORS: true, isSupportFetch: true };\n\n  aboutToAppear(): void {\n      try {\n      webview.WebviewController.customizeSchemes([this.scheme1, this.scheme2, this.scheme3]);\n      } catch (error) {\n      console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n      }\n  }\n\n  build() {\n      Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n          .onInterceptRequest((event) => {\n          if (event) {\n              console.info('url:' + event.request.getRequestUrl());\n          }\n          return this.responseWeb;\n          })\n      }\n    }\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取被拦截请求的信息",
      children: "获取被拦截请求的信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在请求开始的回调中，应用可以获取请求的基本信息包括url、method、referrer、request headers、resource type、post data等。支持获取PUT/POST类请求的上传数据，数据类型支持BYTES、FILE、BLOB和CHUNKED。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在NDK中，获取被拦截请求的信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  char* url;\n  OH_ArkWebResourceRequest_GetUrl(resourceRequest_, &url);\n  OH_ArkWeb_ReleaseString(url);\n\n  char* method;\n  OH_ArkWebResourceRequest_GetMethod(resourceRequest_, &method);\n  OH_ArkWeb_ReleaseString(method);\n\n  int32_t resourceType = OH_ArkWebResourceRequest_GetResourceType(resourceRequest_);\n\n  char* frameUrl;\n  OH_ArkWebResourceRequest_GetFrameUrl(resourceRequest_, &frameUrl);\n  OH_ArkWeb_ReleaseString(frameUrl);\n\n  // 获取被拦截请求的上传数据。\n  OH_ArkWebResourceRequest_GetHttpBodyStream(resourceRequest(), &stream_);\n  // 设置读取上传数据的读回调。\n  OH_ArkWebHttpBodyStream_SetReadCallback(stream_, ReadCallback);\n  // 初始化ArkWeb_HttpBodyStream，其它OH_ArkWebHttpBodyStream*函数需要在初始化进行调用。\n  OH_ArkWebHttpBodyStream_Init(stream_, InitCallback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，获取被拦截请求的信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.schemeHandler.onRequestStart((request: webview.WebSchemeHandlerRequest, resourceHandler: webview.WebResourceHandler) => {\n  try {\n    console.info(\"[schemeHandler] onRequestStart url:\" + request.getRequestUrl());\n    console.info(\"[schemeHandler] onRequestStart method:\" + request.getRequestMethod());\n    console.info(\"[schemeHandler] onRequestStart referrer:\" + request.getReferrer());\n    console.info(\"[schemeHandler] onRequestStart isMainFrame:\" + request.isMainFrame());\n    console.info(\"[schemeHandler] onRequestStart hasGesture:\" + request.hasGesture());\n    console.info(\"[schemeHandler] onRequestStart header size:\" + request.getHeader().length);\n    console.info(\"[schemeHandler] onRequestStart resource type:\" + request.getRequestResourceType());\n    console.info(\"[schemeHandler] onRequestStart frame url:\" + request.getFrameUrl());\n    let header = request.getHeader();\n    for (let i = 0; i < header.length; i++) {\n      console.info(\"[schemeHandler] onRequestStart header:\" + header[i].headerKey + \" \" + header[i].headerValue);\n    }\n    let stream = request.getHttpBodyStream();\n    if (stream) {\n      console.info(\"[schemeHandler] onRequestStart has http body stream\");\n    } else {\n      console.info(\"[schemeHandler] onRequestStart has no http body stream\");\n    }\n  } catch (error) {\n    console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n  }\n  return true;\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拦截web内核的请求并为被拦截的请求提供自定义的响应信息",
      children: "拦截Web内核的请求，并为被拦截的请求提供自定义的响应信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络拦截支持在worker线程以流方式为被拦截的请求提供自定义的响应信息。也可用特定的网络错误码结束当前被拦截的请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "错误码定义："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NDK：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-net-error-list-h/capi-arkweb-net-error-list-h",
        children: "网络错误码(arkweb_net_error_list.h)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-neterrorlist/arkts-apis-neterrorlist",
        children: "网络错误码(@ohos.web.netErrorList.d.ts)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(533880)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArkWeb不支持自定义错误码，请使用ArkWeb提供的错误码来结束请求。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在NDK中，为被拦截的请求提供自定义的响应信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  // 为被拦截的请求创建一个响应头。\n  ArkWeb_Response *response;\n  OH_ArkWeb_CreateResponse(&response);\n\n  // 设置HTTP状态码为200。\n  OH_ArkWebResponse_SetStatus(response, 200);\n  // 设置响应头中的字符集，指明内容使用UTF-8编码。\n  OH_ArkWebResponse_SetCharset(response, \"UTF-8\");\n  // 设置响应头中的\"content-length\"，指明响应体的大小。\n  OH_ArkWebResponse_SetHeaderByName(response, \"content-length\", \"1024\", false);\n  // 将为被拦截的请求创建的响应头传递给Web组件。\n  OH_ArkWebResourceHandler_DidReceiveResponse(resourceHandler, response);\n\n  // 该函数可以调用多次，数据可以分多份来传递给Web组件。\n  OH_ArkWebResourceHandler_DidReceiveData(resourceHandler, buffer, bufLen);\n\n  // 读取响应体结束，当然如果希望该请求失败的话也可以通过调用OH_ArkWebResourceHandler_DidFailWithError(resourceHandler_, errorCode);\n  // 传递给Web组件一个错误码并结束该请求。\n  OH_ArkWebResourceHandler_DidFinish(resourceHandler);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS中，为被拦截的请求提供自定义的响应信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.schemeHandler.onRequestStart((request: webview.WebSchemeHandlerRequest, resourceHandler: webview.WebResourceHandler) => {\n let response = new webview.WebSchemeHandlerResponse();\n try {\n   // 设置网络错误代码为OK，表示请求成功。\n   response.setNetErrorCode(WebNetErrorList.NET_OK);\n\n   // 设置HTTP状态码为200，表示请求处理成功。\n   response.setStatus(200);\n\n   // 设置状态文本为\"OK\"，用于描述状态码。\n   response.setStatusText(\"OK\");\n\n   // 设置MIME类型为\"text/html\"，指明返回数据的类型为HTML文档。\n   response.setMimeType(\"text/html\");\n\n   // 设置编码方式为\"utf-8\"，指明内容使用UTF-8编码。\n   response.setEncoding(\"utf-8\");\n\n   // 设置自定义响应头\"header1\"的值为\"value1\"，false表示不覆盖已经存在的同名头部。\n   response.setHeaderByName(\"header1\", \"value1\", false);\n\n   // 调用didReceiveResponse将构造的响应头传递给被拦截的请求。\n   resourceHandler.didReceiveResponse(response);\n\n   // 调用didReceiveResponseBody将构造的响应体传递给被拦截的请求。\n   resourceHandler.didReceiveResponseBody(buf.buffer);\n\n   // 调用didFinish通知Web组件被拦截的请求已经完成。\n   resourceHandler.didFinish();\n } catch (error) {\n   console.error(`[schemeHandler] ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n }\n return true;\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当希望通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-scheme-handler-h/capi-arkweb-scheme-handler-h#oh_arkwebresourcehandler_didfailwitherror",
        children: "OH_ArkWebResourceHandler_DidFailWithError"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webresourcehandler/arkts-apis-webview-webresourcehandler#didfail12",
        children: "didFail(code: WebNetErrorList)"
      }), "结束当前请求时，需要在调用该接口之前通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-scheme-handler-h/capi-arkweb-scheme-handler-h#oh_arkwebresourcehandler_didreceiveresponse",
        children: "OH_ArkWebResourceHandler_DidReceiveResponse"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webresourcehandler/arkts-apis-webview-webresourcehandler#didreceiveresponse12",
        children: "didReceiveResponse"
      }), "返回给Web内核一个响应头，否则无法结束请求。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，可以直接通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-scheme-handler-h/capi-arkweb-scheme-handler-h#oh_arkwebresourcehandler_didfailwitherrorv2",
        children: "OH_ArkWebResourceHandler_DidFailWithErrorV2"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webresourcehandler/arkts-apis-webview-webresourcehandler#didfail20",
        children: "didFail(code: WebNetErrorList, completeIfNoResponse: boolean)"
      }), "结束网络请求，不再依赖必须通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-scheme-handler-h/capi-arkweb-scheme-handler-h#oh_arkwebresourcehandler_didreceiveresponse",
        children: "OH_ArkWebResourceHandler_DidReceiveResponse"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webresourcehandler/arkts-apis-webview-webresourcehandler#didreceiveresponse12",
        children: "didReceiveResponse"
      }), "返回给Web内核一个响应头。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NDK示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void OnRequestStart(){\n  // 直接返回网络错误码ARKWEB_ERR_CONNECTION_FAILED结束该请求。\n  OH_ArkWebResourceHandler_DidFailWithErrorV2(resourceHandler_, ARKWEB_ERR_CONNECTION_FAILED, true);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.schemeHandler.onRequestStart((request: webview.WebSchemeHandlerRequest, resourceHandler: webview.WebResourceHandler) => {\n  // 直接调用didFail(WebNetErrorList.ERR_CONNECTION_FAILED, true)，自动构造一个网络请求错误ERR_CONNECTION_FAILED。\n  resourceHandler.didFail(WebNetErrorList.ERR_CONNECTION_FAILED, true);\n  return true;\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/guide-snippets/tree/master/ArkWeb/ArkWebSchemeHandler",
        children: "拦截Web组件发起的网络请求"
      })
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
1447(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
58563(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
533880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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