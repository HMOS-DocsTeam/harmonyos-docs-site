"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["86326"], {
413428(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_event_sequence_web_event_sequence_md_e01_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-event-sequence-web-event-sequence-md-e01.json
var site_docs_arkweb_web_event_sequence_web_event_sequence_md_e01_namespaceObject = JSON.parse('{"id":"arkweb/web-event-sequence/web-event-sequence","title":"Web组件的生命周期","description":"概述","source":"@site/docs/arkweb/web-event-sequence/web-event-sequence.md","sourceDirName":"arkweb/web-event-sequence","slug":"/arkweb/web-event-sequence/","permalink":"/harmonyos-docs-site/arkweb/web-event-sequence/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Web组件的生命周期","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-event-sequence","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkWeb进程","permalink":"/harmonyos-docs-site/arkweb/web_component_process/"},"next":{"title":"User-Agent开发指导","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-default-useragent/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-event-sequence/web-event-sequence.md


const frontMatter = {
	title: 'Web组件的生命周期',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-event-sequence',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Web组件的生命周期';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "Web组件网页正常加载过程所涉及的状态说明",
  "id": "web组件网页正常加载过程所涉及的状态说明",
  "level": 2
}, {
  "value": "Web组件网页异常加载过程所涉及的状态说明",
  "id": "web组件网页异常加载过程所涉及的状态说明",
  "level": 2
}, {
  "value": "Web组件网页加载的性能指标",
  "id": "web组件网页加载的性能指标",
  "level": 2
}, {
  "value": "应用如何避免Web组件渲染子进程异常退出导致的页面卡死问题",
  "id": "应用如何避免web组件渲染子进程异常退出导致的页面卡死问题",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "web组件的生命周期",
        children: "Web组件的生命周期"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以使用Web组件加载本地或者在线网页。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件提供生命周期回调接口，用于感知状态变化和处理业务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件的状态主要包括：Controller绑定到Web组件、网页加载开始、网页加载进度、网页加载结束、页面即将可见。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web页面保活可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-offline-mode",
        children: "使用离线Web组件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义组件析构销毁时执行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttodisappear",
        children: "aboutToDisappear"
      }), "函数，Web组件会被销毁，Web组件与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller",
        children: "WebviewController"
      }), "解绑，js运行环境也会一并销毁。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Web组件网页正常加载过程中的回调事件"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(812500)/* ["default"] */.A) + "",
        width: "271",
        height: "628"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web组件网页正常加载过程所涉及的状态说明",
      children: "Web组件网页正常加载过程所涉及的状态说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoappear",
          children: "aboutToAppear"
        }), "函数：在创建自定义组件的新实例后，在执行其build函数前执行。建议在此设置WebDebug调试模式、自定义协议URL的权限、Cookie等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#oncontrollerattached10",
          children: "onControllerAttached"
        }), "事件：当Controller成功绑定到Web组件时触发该回调，且禁止在该事件回调前调用Web组件相关的接口，否则会抛出js-error异常。建议在此事件中注入JS对象、设置自定义用户代理，使用操作网页不相关的接口。但因为该回调调用时网页还未加载，因此无法在回调中使用有关操作网页的接口，例如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#zoomin",
          children: "zoomIn"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#zoomout",
          children: "zoomOut"
        }), "等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onloadintercept10",
          children: "onLoadIntercept"
        }), "事件：当Web组件加载url之前触发该回调，用于判断是否阻止此次访问。默认允许加载。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#oninterceptrequest9",
          children: "onInterceptRequest"
        }), "事件：当Web组件加载url之前触发该回调，用于拦截url并返回响应数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onpagebegin",
          children: "onPageBegin"
        }), "事件：网页开始加载时触发该回调，且只在主frame（表示一个用于展示HTML页面的元素）触发。如果是iframe或者frameset（用于包含frame的HTML标签）的内容加载时则不会触发此回调。多frame页面可能同时加载，主frame加载结束时子frame可能仍在加载。同一页面导航或失败的导航不会触发该回调。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onprogresschange",
          children: "onProgressChange"
        }), "事件：告知开发者当前页面加载的进度。多frame页面或者子frame可能还在继续加载而主frame已经加载结束，所以在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onpageend",
          children: "onPageEnd"
        }), "事件后仍可能收到该事件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onpageend",
          children: "onPageEnd"
        }), "事件：网页加载完成时触发该回调，且只在主frame触发。多frame页面有可能同时开始加载，即使主frame已经加载结束，子frame也有可能才开始或者继续加载中。同一页面导航或失败的导航不会触发该回调。建议在此回调中执行JavaScript脚本。注意，收到该回调不能保证下一帧反映DOM状态。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web组件网页异常加载过程所涉及的状态说明",
      children: "Web组件网页异常加载过程所涉及的状态说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onoverrideurlloading12",
            children: "onOverrideUrlLoading"
          }), "事件：当URL将要加载到当前Web中时，让宿主应用程序有机会获得控制权，回调函数返回true将导致当前Web中止加载URL，而返回false则会导致Web继续照常加载URL。onLoadIntercept接口和onOverrideUrlLoading接口行为不一致，触发时机也不同，所以在应用场景上存在一定区别。onLoadIntercept事件在LoadUrl和iframe加载时触发，但onOverrideUrlLoading事件在LoadUrl和特定iframe加载时不会触发。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onpagevisible9",
            children: "onPageVisible"
          }), "事件：Web回调事件。渲染流程中当HTTP响应的主体开始加载，新页面即将可见时触发该回调。此时文档加载还处于早期，因此链接的资源比如在线CSS、在线图片等可能尚不可用。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onrenderexited9",
            children: "onRenderExited"
          }), "事件：应用渲染进程异常退出时触发该回调，可以在此回调中进行系统资源的释放、数据的保存等操作。如果应用希望异常恢复，需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#loadurl",
            children: "loadUrl"
          }), "接口重新加载页面。详细用法参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%BA%94%E7%94%A8%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8Dweb%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%AD%90%E8%BF%9B%E7%A8%8B%E5%BC%82%E5%B8%B8%E9%80%80%E5%87%BA%E5%AF%BC%E8%87%B4%E7%9A%84%E9%A1%B5%E9%9D%A2%E5%8D%A1%E6%AD%BB%E9%97%AE%E9%A2%98",
            children: "应用如何避免Web组件渲染子进程异常退出导致的页面卡死问题"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-events-show-hide/ts-universal-events-show-hide#ondisappear",
            children: "onDisAppear"
          }), "事件：组件卸载消失时触发此回调。该事件在组件卸载时触发。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用侧代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  responseWeb: WebResourceResponse = new WebResourceResponse();\n  heads: Header[] = new Array();\n  @State webData: string = \"<!DOCTYPE html>\\n\" +\n    \"<html>\\n\" +\n    \"<head>\\n\" +\n    \"<title>intercept test</title>\\n\" +\n    \"</head>\\n\" +\n    \"<body>\\n\" +\n    \"<h1>intercept test</h1>\\n\" +\n    \"</body>\\n\" +\n    \"</html>\";\n\n  aboutToAppear(): void {\n    try {\n      webview.WebviewController.setWebDebuggingAccess(true);\n    } catch (error) {\n      console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n    }\n  }\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onControllerAttached(() => {\n          // 推荐在此loadUrl、设置自定义用户代理、注入JS对象等\n          console.info('onControllerAttached execute')\n        })\n        .onLoadIntercept((event) => {\n          if (event) {\n            console.info('onLoadIntercept url:' + event.data.getRequestUrl())\n            console.info('url:' + event.data.getRequestUrl())\n            console.info('isMainFrame:' + event.data.isMainFrame())\n            console.info('isRedirect:' + event.data.isRedirect())\n            console.info('isRequestGesture:' + event.data.isRequestGesture())\n          }\n          // 返回true表示阻止此次加载，否则允许此次加载\n          return false;\n        })\n        .onOverrideUrlLoading((webResourceRequest: WebResourceRequest) => {\n          if (webResourceRequest && webResourceRequest.getRequestUrl() == \"about:blank\") {\n            return true;\n          }\n          return false;\n        })\n        .onInterceptRequest((event) => {\n          if (event) {\n            console.info('url:' + event.request.getRequestUrl());\n          }\n          let head1: Header = {\n            headerKey: \"Connection\",\n            headerValue: \"keep-alive\"\n          }\n          let head2: Header = {\n            headerKey: \"Cache-Control\",\n            headerValue: \"no-cache\"\n          }\n          // 将新元素追加到数组的末尾，并返回数组的新长度。\n          let length = this.heads.push(head1);\n          length = this.heads.push(head2);\n          console.info('The response header result length is :' + length);\n          this.responseWeb.setResponseHeader(this.heads);\n          this.responseWeb.setResponseData(this.webData);\n          this.responseWeb.setResponseEncoding('utf-8');\n          this.responseWeb.setResponseMimeType('text/html');\n          this.responseWeb.setResponseCode(200);\n          this.responseWeb.setReasonMessage('OK');\n          // 返回响应数据则按照响应数据加载，无响应数据则返回null表示按照原来的方式加载\n          return this.responseWeb;\n        })\n        .onPageBegin((event) => {\n          if (event) {\n            console.info('onPageBegin url:' + event.url);\n          }\n        })\n        .onFirstContentfulPaint(event => {\n          if (event) {\n            console.info(\"onFirstContentfulPaint:\" + \"[navigationStartTick]:\" +\n            event.navigationStartTick + \", [firstContentfulPaintMs]:\" +\n            event.firstContentfulPaintMs);\n          }\n        })\n        .onProgressChange((event) => {\n          if (event) {\n            console.info('newProgress:' + event.newProgress);\n          }\n        })\n        .onPageEnd((event) => {\n          // 推荐在此事件中执行JavaScript脚本\n          if (event) {\n            console.info('onPageEnd url:' + event.url);\n          }\n        })\n        .onPageVisible((event) => {\n          console.info('onPageVisible url:' + event.url);\n        })\n        .onRenderExited((event) => {\n          if (event) {\n            console.info('onRenderExited reason:' + event.renderExitReason);\n          }\n        })\n        .onDisAppear(() => {\n          this.getUIContext().getPromptAction().showToast({\n            message: 'The web is hidden',\n            duration: 2000\n          })\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web组件网页加载的性能指标",
      children: "Web组件网页加载的性能指标"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页加载过程中需要关注一些重要的性能指标。例如，FCP(First Contentful Paint)首次内容绘制，FMP(First Meaningful Paint)首次有效绘制，LCP(Largest Contentful Paint)最大内容绘制等。Web组件提供了如下接口来通知开发者，接口仅支持在线非PDF网页，不支持本地网页和PDF网页。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onfirstcontentfulpaint10",
          children: "onFirstContentfulPaint"
        }), "事件：网页首次内容绘制的回调函数。首次绘制文本、图像、非空白", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas",
          children: "Canvas"
        }), "或SVG的时间点。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onfirstmeaningfulpaint12",
          children: "onFirstMeaningfulPaint"
        }), "事件：网页绘制页面主要内容的回调函数。首次绘制主要内容的时间点。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onlargestcontentfulpaint12",
          children: "onLargestContentfulPaint"
        }), "事件：网页绘制页面最大内容的回调函数。绘制可视区域内最大图片、文本块或视频的时间点。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用如何避免web组件渲染子进程异常退出导致的页面卡死问题",
      children: "应用如何避免Web组件渲染子进程异常退出导致的页面卡死问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb（方舟Web）是一个Web组件平台，旨在为应用程序提供展示Web页面内容的功能，并向开发者提供一系列的能力，如页面加载、交互和调试等功能。使用ArkWeb相关应用时，可能因各种原因（例如前端偶现异常导致ArkWeb渲染子进程崩溃，或是打开的应用较多，系统资源紧张导致后台ArkWeb渲染子进程被终止）而出现页面卡死的问题，这时需要重新打开页面或重启应用来解决。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在ArkWeb渲染子进程异常退出导致页面卡死后，应用可通过监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onrenderexited9",
        children: "onRenderExited"
      }), "事件来获取具体的退出原因", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#renderexitreason9",
        children: "RenderExitReason"
      }), "，并在异常回调中根据退出的具体原因，执行相应的异常处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发实践案例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  needReloadWhenVisible: boolean = false;  // Web组件不可见时render退出后阻止重新加载页面，在可见时重新加载页面。\n  webIsVisible: boolean = false;            // 判断Web组件是否可见。\n\n  // 此处是将子进程异常崩溃和其它异常原因做了区分，应用开发者可根据实际业务特点，细化对应异常的处理策略。\n  renderReloadMaxForCrashed: number = 5;    // 设置因为异常崩溃后重新加载的最大重试次数，应用可根据业务特点，自行设置试错上限。\n  renderReloadCountForCrashed: number = 0;  // 异常崩溃后重新加载的次数。\n  renderReloadMaxForOthers: number = 10;    // 设置因为其它异常原因退出的最大重试次数，应用可根据业务特点，自行设置试错上限。\n  renderReloadCountForOthers: number = 0;   // 其它异常原因退出后重新加载的次数。\n\n  // 创建Web组件。\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  // 指定加载的页面。\n  url: string = \"www.example.com\";\n  build() {\n    Column() {\n      Web({ src: this.url, controller: this.controller })\n        .onVisibleAreaChange([0, 1.0], (isVisible) => {\n          this.webIsVisible = isVisible;\n          if (isVisible && this.needReloadWhenVisible) { // Web组件可见时重新加载页面。\n            this.needReloadWhenVisible = false;\n            this.controller.loadUrl(this.url);\n          }\n        })\n        // 应用监听渲染子进程异常退出回调，并进行异常处理。\n        .onRenderExited((event) => {\n          if (!event) {\n            return;\n          }\n          if (event.renderExitReason == RenderExitReason.ProcessCrashed) {\n            if (this.renderReloadCountForCrashed >= this.renderReloadMaxForCrashed) {\n              // 设置重试次数上限保护，避免必现问题导致页面被循环加载。\n              return;\n            }\n            console.info('renderReloadCountForCrashed: ' + this.renderReloadCountForCrashed);\n            this.renderReloadCountForCrashed++;\n          } else {\n            if (this.renderReloadCountForOthers >= this.renderReloadMaxForOthers) {\n              // 设置重试次数上限保护, 避免必现问题导致页面被循环加载。\n              return;\n            }\n            console.info('renderReloadCountForOthers: ' + this.renderReloadCountForOthers);\n            this.renderReloadCountForOthers++;\n          }\n          if (this.webIsVisible) {\n            // Web组件可见则立即重新加载。\n            this.controller.loadUrl(this.url);\n            return;\n          }\n          // Web组件不可见时不立即重新加载。\n          this.needReloadWhenVisible = true;\n        })\n    }\n  }\n}\n"
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
812500(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478207-7d24aa8bc89d63bf097c9da513bd596f.png");

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