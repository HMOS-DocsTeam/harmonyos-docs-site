"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["798812"], {
523521(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkweb_api_arkweb_comp_ts_basic_components_web_arkts_basic_components_web_events_arkts_basic_components_web_events_md_345_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkweb-api-arkweb-comp-ts-basic-components-web-arkts-basic-components-web-events-arkts-basic-components-web-events-md-345.json
var site_docs_ref_arkweb_api_arkweb_comp_ts_basic_components_web_arkts_basic_components_web_events_arkts_basic_components_web_events_md_345_namespaceObject = JSON.parse('{"id":"arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events","title":"事件","description":"通用事件仅支持onAppear、onDisAppear、onBlur、onFocus、onDragEnd、onDragEnter、onDragStart、onDragMove、onDragLeave、onDrop、onHover、onMouse、onKeyEvent、onTouch、onVisibleAreaChange。","source":"@site/docs-ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events.md","sourceDirName":"arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events","slug":"/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"事件","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-basic-components-web-events"},"sidebar":"ref","previous":{"title":"属性","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes"},"next":{"title":"Class (ClientAuthenticationHandler)","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-comp/ts-basic-components-web/s-basic-components-web-clientauthenticationhandler/s-basic-components-web-clientauthenticationhandler"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events.md


const frontMatter = {
	title: '事件',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-basic-components-web-events'
};
const contentTitle = '事件';

const assets = {

};



const toc = [{
  "value": "onAlert",
  "id": "onalert",
  "level": 2
}, {
  "value": "onBeforeUnload",
  "id": "onbeforeunload",
  "level": 2
}, {
  "value": "onConfirm",
  "id": "onconfirm",
  "level": 2
}, {
  "value": "onPrompt9+",
  "id": "onprompt9",
  "level": 2
}, {
  "value": "onConsole",
  "id": "onconsole",
  "level": 2
}, {
  "value": "onDownloadStart",
  "id": "ondownloadstart",
  "level": 2
}, {
  "value": "onErrorReceive",
  "id": "onerrorreceive",
  "level": 2
}, {
  "value": "onHttpErrorReceive",
  "id": "onhttperrorreceive",
  "level": 2
}, {
  "value": "onPageBegin",
  "id": "onpagebegin",
  "level": 2
}, {
  "value": "onPageEnd",
  "id": "onpageend",
  "level": 2
}, {
  "value": "onLoadStarted20+",
  "id": "onloadstarted20",
  "level": 2
}, {
  "value": "onLoadFinished20+",
  "id": "onloadfinished20",
  "level": 2
}, {
  "value": "onProgressChange",
  "id": "onprogresschange",
  "level": 2
}, {
  "value": "onTitleReceive",
  "id": "ontitlereceive",
  "level": 2
}, {
  "value": "onRefreshAccessedHistory",
  "id": "onrefreshaccessedhistory",
  "level": 2
}, {
  "value": "onRenderExited9+",
  "id": "onrenderexited9",
  "level": 2
}, {
  "value": "onRenderProcessNotResponding12+",
  "id": "onrenderprocessnotresponding12",
  "level": 2
}, {
  "value": "onRenderProcessResponding12+",
  "id": "onrenderprocessresponding12",
  "level": 2
}, {
  "value": "onShowFileSelector9+",
  "id": "onshowfileselector9",
  "level": 2
}, {
  "value": "onResourceLoad9+",
  "id": "onresourceload9",
  "level": 2
}, {
  "value": "onScaleChange9+",
  "id": "onscalechange9",
  "level": 2
}, {
  "value": "onInterceptRequest9+",
  "id": "oninterceptrequest9",
  "level": 2
}, {
  "value": "onHttpAuthRequest9+",
  "id": "onhttpauthrequest9",
  "level": 2
}, {
  "value": "onSslErrorEventReceive9+",
  "id": "onsslerroreventreceive9",
  "level": 2
}, {
  "value": "onSslErrorEvent12+",
  "id": "onsslerrorevent12",
  "level": 2
}, {
  "value": "onClientAuthenticationRequest9+",
  "id": "onclientauthenticationrequest9",
  "level": 2
}, {
  "value": "onVerifyPin22+",
  "id": "onverifypin22",
  "level": 2
}, {
  "value": "onPermissionRequest9+",
  "id": "onpermissionrequest9",
  "level": 2
}, {
  "value": "onContextMenuShow9+",
  "id": "oncontextmenushow9",
  "level": 2
}, {
  "value": "onContextMenuHide11+",
  "id": "oncontextmenuhide11",
  "level": 2
}, {
  "value": "onScroll9+",
  "id": "onscroll9",
  "level": 2
}, {
  "value": "onGeolocationShow",
  "id": "ongeolocationshow",
  "level": 2
}, {
  "value": "onGeolocationHide",
  "id": "ongeolocationhide",
  "level": 2
}, {
  "value": "onFullScreenEnter9+",
  "id": "onfullscreenenter9",
  "level": 2
}, {
  "value": "onFullScreenExit9+",
  "id": "onfullscreenexit9",
  "level": 2
}, {
  "value": "onWindowNew9+",
  "id": "onwindownew9",
  "level": 2
}, {
  "value": "onWindowNewExt23+",
  "id": "onwindownewext23",
  "level": 2
}, {
  "value": "onActivateContent20+",
  "id": "onactivatecontent20",
  "level": 2
}, {
  "value": "onWindowExit9+",
  "id": "onwindowexit9",
  "level": 2
}, {
  "value": "onSearchResultReceive9+",
  "id": "onsearchresultreceive9",
  "level": 2
}, {
  "value": "onDataResubmitted9+",
  "id": "ondataresubmitted9",
  "level": 2
}, {
  "value": "onPageVisible9+",
  "id": "onpagevisible9",
  "level": 2
}, {
  "value": "onInterceptKeyEvent9+",
  "id": "oninterceptkeyevent9",
  "level": 2
}, {
  "value": "onTouchIconUrlReceived9+",
  "id": "ontouchiconurlreceived9",
  "level": 2
}, {
  "value": "onFaviconReceived9+",
  "id": "onfaviconreceived9",
  "level": 2
}, {
  "value": "onAudioStateChanged10+",
  "id": "onaudiostatechanged10",
  "level": 2
}, {
  "value": "onFirstContentfulPaint10+",
  "id": "onfirstcontentfulpaint10",
  "level": 2
}, {
  "value": "onFirstMeaningfulPaint12+",
  "id": "onfirstmeaningfulpaint12",
  "level": 2
}, {
  "value": "onLargestContentfulPaint12+",
  "id": "onlargestcontentfulpaint12",
  "level": 2
}, {
  "value": "onLoadIntercept10+",
  "id": "onloadintercept10",
  "level": 2
}, {
  "value": "onRequestSelected",
  "id": "onrequestselected",
  "level": 2
}, {
  "value": "onScreenCaptureRequest10+",
  "id": "onscreencapturerequest10",
  "level": 2
}, {
  "value": "onOverScroll10+",
  "id": "onoverscroll10",
  "level": 2
}, {
  "value": "onControllerAttached10+",
  "id": "oncontrollerattached10",
  "level": 2
}, {
  "value": "onNavigationEntryCommitted11+",
  "id": "onnavigationentrycommitted11",
  "level": 2
}, {
  "value": "onSafeBrowsingCheckResult11+",
  "id": "onsafebrowsingcheckresult11",
  "level": 2
}, {
  "value": "onSafeBrowsingCheckFinish21+",
  "id": "onsafebrowsingcheckfinish21",
  "level": 2
}, {
  "value": "onNativeEmbedLifecycleChange11+",
  "id": "onnativeembedlifecyclechange11",
  "level": 2
}, {
  "value": "onNativeEmbedGestureEvent11+",
  "id": "onnativeembedgestureevent11",
  "level": 2
}, {
  "value": "onIntelligentTrackingPreventionResult12+",
  "id": "onintelligenttrackingpreventionresult12",
  "level": 2
}, {
  "value": "onOverrideUrlLoading12+",
  "id": "onoverrideurlloading12",
  "level": 2
}, {
  "value": "onViewportFitChanged12+",
  "id": "onviewportfitchanged12",
  "level": 2
}, {
  "value": "onInterceptKeyboardAttach12+",
  "id": "oninterceptkeyboardattach12",
  "level": 2
}, {
  "value": "onNativeEmbedVisibilityChange12+",
  "id": "onnativeembedvisibilitychange12",
  "level": 2
}, {
  "value": "onNativeEmbedMouseEvent20+",
  "id": "onnativeembedmouseevent20",
  "level": 2
}, {
  "value": "onNativeEmbedObjectParamChange21+",
  "id": "onnativeembedobjectparamchange21",
  "level": 2
}, {
  "value": "onOverrideErrorPage20+",
  "id": "onoverrideerrorpage20",
  "level": 2
}, {
  "value": "onSslErrorReceive(deprecated)",
  "id": "onsslerrorreceivedeprecated",
  "level": 2
}, {
  "value": "onFileSelectorShow(deprecated)",
  "id": "onfileselectorshowdeprecated",
  "level": 2
}, {
  "value": "onUrlLoadIntercept(deprecated)",
  "id": "onurlloadinterceptdeprecated",
  "level": 2
}, {
  "value": "onPdfLoadEvent20+",
  "id": "onpdfloadevent20",
  "level": 2
}, {
  "value": "onPdfScrollAtBottom20+",
  "id": "onpdfscrollatbottom20",
  "level": 2
}, {
  "value": "onDetectedBlankScreen22+",
  "id": "ondetectedblankscreen22",
  "level": 2
}, {
  "value": "onRenderExited(deprecated)",
  "id": "onrenderexiteddeprecated",
  "level": 2
}, {
  "value": "onCameraCaptureStateChange23+",
  "id": "oncameracapturestatechange23",
  "level": 2
}, {
  "value": "onMicrophoneCaptureStateChange23+",
  "id": "onmicrophonecapturestatechange23",
  "level": 2
}, {
  "value": "onTextSelectionChange23+",
  "id": "ontextselectionchange23",
  "level": 2
}, {
  "value": "onFirstScreenPaint23+",
  "id": "onfirstscreenpaint23",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    embed: "embed",
    form: "form",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    object: "object",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    title: "title",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "事件",
        children: "事件"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通用事件仅支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-events-show-hide/ts-universal-events-show-hide#onappear",
        children: "onAppear"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-events-show-hide/ts-universal-events-show-hide#ondisappear",
        children: "onDisAppear"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-focus-event/ts-universal-focus-event#onblur",
        children: "onBlur"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-focus-event/ts-universal-focus-event#onfocus",
        children: "onFocus"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragend10",
        children: "onDragEnd"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragenter",
        children: "onDragEnter"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragstart",
        children: "onDragStart"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragmove",
        children: "onDragMove"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragleave",
        children: "onDragLeave"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondrop",
        children: "onDrop"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-hover/ts-universal-events-hover#onhover",
        children: "onHover"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-mouse-key/ts-universal-mouse-key#onmouse",
        children: "onMouse"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-key/ts-universal-events-key#onkeyevent",
        children: "onKeyEvent"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#ontouch",
        children: "onTouch"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/component-change/ts-universal-component-visible-area-change-event/ts-universal-component-visible-area-change-event#onvisibleareachange",
        children: "onVisibleAreaChange"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(899794)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "示例效果请以真机运行为准。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onalert",
      children: "onAlert"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAlert(callback: Callback<OnAlertEvent, boolean>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["网页触发alert()告警弹窗时触发回调。若不调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-jsresult/arkts-basic-components-web-jsresult#handlecancel",
        children: "handleCancel"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-jsresult/arkts-basic-components-web-jsresult#handleconfirm",
        children: "handleConfirm"
      }), "接口，会造成render进程阻塞。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onalertevent12",
              children: "OnAlertEvent"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页触发alert()告警弹窗时触发。  返回值boolean。当回调返回true时，应用可以调用自定义弹窗能力（包括确认和取消），并且需要根据用户的确认或取消操作调用JsResult通知Web组件最终确认结果。当回调返回false时，弹窗的处理结果会被视为取消。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile(\"index.html\"), controller: this.controller })\n        .onAlert((event) => {\n          if (event) {\n            console.info(\"event.url:\" + event.url);\n            console.info(\"event.message:\" + event.message);\n            this.uiContext.showAlertDialog({\n              title: 'onAlert',\n              message: 'text',\n              primaryButton: {\n                value: 'ok',\n                action: () => {\n                  event.result.handleConfirm();\n                }\n              },\n              cancel: () => {\n                event.result.handleCancel();\n              }\n            })\n          }\n          return true;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index.html-->\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n<body>\n  <h1>WebView onAlert Demo</h1>\n  <button onclick=\"myFunction()\">Click here</button>\n  <script>\n    function myFunction() {\n      alert(\"Hello World\");\n    }\n  </script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onbeforeunload",
      children: "onBeforeUnload"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onBeforeUnload(callback: Callback<OnBeforeUnloadEvent, boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "即将完成页面刷新或关闭当前页面时触发此回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(521951)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果当前Web组件没有得到焦点，刷新或关闭当前页面时onBeforeUnload不会触发。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onbeforeunloadevent12",
              children: "OnBeforeUnloadEvent"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "即将完成页面刷新或关闭当前页面时触发。  返回值boolean。当回调返回true时，应用可以调用自定义弹窗能力（包括确认和取消），并且需要根据用户的确认或取消操作调用JsResult通知Web组件最终是否离开当前页面。当回调返回false时，函数中绘制的自定义弹窗无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile(\"index.html\"), controller: this.controller })\n        .onBeforeUnload((event) => {\n          if (event) {\n            console.info(\"event.url:\" + event.url);\n            console.info(\"event.message:\" + event.message);\n            console.info(\"event.isReload:\" + event?.isReload ?? 'false');\n            this.uiContext.showAlertDialog({\n              title: 'onBeforeUnload',\n              message: 'text',\n              primaryButton: {\n                value: 'cancel',\n                action: () => {\n                  event.result.handleCancel();\n                }\n              },\n              secondaryButton: {\n                value: 'ok',\n                action: () => {\n                  event.result.handleConfirm();\n                }\n              },\n              cancel: () => {\n                event.result.handleCancel();\n              }\n            })\n          }\n          return true;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index.html-->\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n<body onbeforeunload=\"return myFunction()\">\n  <h1>WebView onBeforeUnload Demo</h1>\n  <a href=\"https://www.example.com\">Click here</a>\n  <script>\n    function myFunction() {\n      return \"onBeforeUnload Event\";\n    }\n  </script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onconfirm",
      children: "onConfirm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onConfirm(callback: Callback<OnConfirmEvent, boolean>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["网页调用confirm()告警时触发此回调。若不调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-jsresult/arkts-basic-components-web-jsresult#handlecancel",
        children: "handleCancel"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-jsresult/arkts-basic-components-web-jsresult#handleconfirm",
        children: "handleConfirm"
      }), "接口，会造成render进程阻塞。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onconfirmevent12",
              children: "OnConfirmEvent"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页调用confirm()告警时触发。  返回值boolean。当回调返回true时，应用可以调用自定义弹窗能力（包括确认和取消），并且需要根据用户的确认或取消操作调用JsResult通知Web组件最终确认结果。当回调返回false时，弹窗的处理结果会被视为取消。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile(\"index.html\"), controller: this.controller })\n        .onConfirm((event) => {\n          if (event) {\n            console.info(\"event.url:\" + event.url);\n            console.info(\"event.message:\" + event.message);\n            this.uiContext.showAlertDialog({\n              title: 'onConfirm',\n              message: 'text',\n              primaryButton: {\n                value: 'cancel',\n                action: () => {\n                  event.result.handleCancel();\n                }\n              },\n              secondaryButton: {\n                value: 'ok',\n                action: () => {\n                  event.result.handleConfirm();\n                }\n              },\n              cancel: () => {\n                event.result.handleCancel();\n              }\n            })\n          }\n          return true;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index.html-->\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n\n<body>\n  <h1>WebView onConfirm Demo</h1>\n  <button onclick=\"myFunction()\">Click here</button>\n  <p id=\"demo\"></p>\n  <script>\n    function myFunction() {\n      let x;\n      let r = confirm(\"click button!\");\n      if (r == true) {\n        x = \"ok\";\n      } else {\n        x = \"cancel\";\n      }\n      document.getElementById(\"demo\").innerHTML = x;\n    }\n  </script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onprompt9",
      children: "onPrompt9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onPrompt(callback: Callback<OnPromptEvent, boolean>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["网页调用prompt()告警时触发此回调。若不调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-jsresult/arkts-basic-components-web-jsresult#handlecancel",
        children: "handleCancel"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-jsresult/arkts-basic-components-web-jsresult#handlepromptconfirm9",
        children: "handlePromptConfirm"
      }), "接口，会造成render进程阻塞。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onpromptevent12",
              children: "OnPromptEvent"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页调用prompt()告警时触发。  返回值boolean。当回调返回true时，应用可以调用自定义弹窗能力（包括确认、取消和输入），并且需要根据用户的确认或取消操作调用JsResult通知Web组件最终处理结果。当回调返回false时，弹窗的处理结果会被视为取消。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { CustomContentDialog } from '@kit.ArkUI';\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  @State message: string = 'Hello World';\n  @State title: string = 'Hello World';\n  @State result: JsResult | null = null;\n  promptResult: string = '';\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  dialogController: CustomDialogController = new CustomDialogController({\n    builder: CustomContentDialog({\n      primaryTitle: this.title,\n      contentBuilder: () => {\n        this.buildContent();\n      },\n      buttons: [\n        {\n          value: '取消',\n          buttonStyle: ButtonStyleMode.TEXTUAL,\n          action: () => {\n            console.info('Callback when the button is clicked');\n            this.result?.handleCancel()\n          }\n        },\n        {\n          value: '确认',\n          buttonStyle: ButtonStyleMode.TEXTUAL,\n          action: () => {\n            this.result?.handlePromptConfirm(this.promptResult);\n          }\n        }\n      ],\n    }),\n    onWillDismiss: () => {\n      this.result?.handleCancel();\n      this.dialogController.close();\n    }\n  });\n\n  // 自定义弹出框的内容区\n  @Builder\n  buildContent(): void {\n    Column() {\n      Text(this.message)\n      TextInput()\n        .onChange((value) => {\n          this.promptResult = value;\n        })\n        .defaultFocus(true)\n    }\n    .width('100%')\n  }\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.webviewController })\n        .onPrompt((event) => {\n          if (event) {\n            console.info(\"event.url:\" + event.url);\n            console.info(\"event.message:\" + event.message);\n            console.info(\"event.value:\" + event.value);\n            this.title = \"来自\" + event.url + \"的消息\";\n            this.message = event.message;\n            this.promptResult = event.value;\n            this.result = event.result;\n            this.dialogController.open();\n          }\n          return true;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index.html-->\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n\n<body>\n  <h1>WebView onPrompt Demo</h1>\n  <button onclick=\"myFunction()\">Click here</button>\n  <p id=\"demo\"></p>\n  <script>\n    function myFunction() {\n      let message = prompt(\"Message info\", \"Hello World\");\n      if (message != null && message != \"\") {\n        document.getElementById(\"demo\").innerHTML = message;\n      }\n    }\n  </script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onconsole",
      children: "onConsole"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onConsole(callback: Callback<OnConsoleEvent, boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知宿主应用JavaScript console消息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onconsoleevent12",
              children: "OnConsoleEvent"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页收到JavaScript控制台消息时触发。  返回值boolean。当返回true时，该条消息将不会再打印至hilog日志，返回false时仍会打印至hilog日志。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('onconsole message')\n        .onClick(() => {\n          this.controller.runJavaScript('myFunction()');\n        })\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onConsole((event) => {\n          if (event) {\n            console.info('getMessage:' + event.message.getMessage());\n            console.info('getSourceId:' + event.message.getSourceId());\n            console.info('getLineNumber:' + event.message.getLineNumber());\n            console.info('getMessageLevel:' + event.message.getMessageLevel());\n            console.info('getSource:' + event.message.getSource());\n          }\n          return false;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<body>\n<script>\n    function myFunction() {\n        console.info(\"onconsole printf\");\n    }\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ondownloadstart",
      children: "onDownloadStart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDownloadStart(callback: Callback<OnDownloadStartEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知主应用开始下载一个文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#ondownloadstartevent12",
              children: "OnDownloadStartEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始下载时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onDownloadStart((event) => {\n          if (event) {\n            console.info('url:' + event.url)\n            console.info('userAgent:' + event.userAgent)\n            console.info('contentDisposition:' + event.contentDisposition)\n            console.info('contentLength:' + event.contentLength)\n            console.info('mimetype:' + event.mimetype)\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onerrorreceive",
      children: "onErrorReceive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onErrorReceive(callback: Callback<OnErrorReceiveEvent>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["网页加载遇到错误时触发该回调。主资源与子资源出错都会回调该接口，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webresourcerequest/arkts-basic-components-web-webresourcerequest#ismainframe",
        children: "isMainFrame"
      }), "来判断是否是主资源报错。出于性能考虑，建议此回调中尽量执行简单逻辑。在无网络的情况下，触发此回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onerrorreceiveevent12",
              children: "OnErrorReceiveEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页收到 Web 资源加载错误时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onErrorReceive((event) => {\n          if (event) {\n            console.info('getErrorInfo:' + event.error.getErrorInfo());\n            console.info('getErrorCode:' + event.error.getErrorCode());\n            console.info('url:' + event.request.getRequestUrl());\n            console.info('isMainFrame:' + event.request.isMainFrame());\n            console.info('isRedirect:' + event.request.isRedirect());\n            console.info('isRequestGesture:' + event.request.isRequestGesture());\n            console.info('getRequestHeader_headerKey:' + event.request.getRequestHeader().toString());\n            let result = event.request.getRequestHeader();\n            console.info('The request header result size is ' + result.length);\n            for (let i of result) {\n              console.info('The request header key is : ' + i.headerKey + ', value is : ' + i.headerValue);\n            }\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onhttperrorreceive",
      children: "onHttpErrorReceive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onHttpErrorReceive(callback: Callback<OnHttpErrorReceiveEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页加载资源遇到的HTTP错误（响应码>=400）时触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onhttperrorreceiveevent12",
              children: "OnHttpErrorReceiveEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页收到加载资源返回HTTP错误码时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onHttpErrorReceive((event) => {\n          if (event) {\n            console.info('url:' + event.request.getRequestUrl());\n            console.info('isMainFrame:' + event.request.isMainFrame());\n            console.info('isRedirect:' + event.request.isRedirect());\n            console.info('isRequestGesture:' + event.request.isRequestGesture());\n            console.info('getResponseData:' + event.response.getResponseData());\n            console.info('getResponseEncoding:' + event.response.getResponseEncoding());\n            console.info('getResponseMimeType:' + event.response.getResponseMimeType());\n            console.info('getResponseCode:' + event.response.getResponseCode());\n            console.info('getReasonMessage:' + event.response.getReasonMessage());\n            let result = event.request.getRequestHeader();\n            console.info('The request header result size is ' + result.length);\n            for (let i of result) {\n              console.info('The request header key is : ' + i.headerKey + ' , value is : ' + i.headerValue);\n            }\n            let resph = event.response.getResponseHeader();\n            console.info('The response header result size is ' + resph.length);\n            for (let i of resph) {\n              console.info('The response header key is : ' + i.headerKey + ' , value is : ' + i.headerValue);\n            }\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onpagebegin",
      children: "onPageBegin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onPageBegin(callback: Callback<OnPageBeginEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页开始加载时触发该回调，且只在主frame触发，iframe或者frameset的内容加载时不会触发此回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onpagebeginevent12",
              children: "OnPageBeginEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页加载开始时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onPageBegin((event) => {\n          if (event) {\n            console.info('url:' + event.url);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onpageend",
      children: "onPageEnd"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onPageEnd(callback: Callback<OnPageEndEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页加载完成时触发该回调，且只在主frame触发，iframe或者frameset的内容加载时不会触发此回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onpageendevent12",
              children: "OnPageEndEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页加载结束时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onPageEnd((event) => {\n          if (event) {\n            console.info('url:' + event.url);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onloadstarted20",
      children: "onLoadStarted20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onLoadStarted(callback: Callback<OnLoadStartedEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知宿主应用页面开始加载。此方法在每次主frame加载时调用一次，因此对于包含iframes或frameset的页面，onLoadStarted仅针对主frame调用一次。这意味着当嵌入式frame的内容发生变化时，如点击iframe中的链接或Fragment跳转（即跳转到#fragment_id的导航）等，不会调用onLoadStarted。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(403641)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当弹出窗口的文档在加载之前被JavaScript修改时，它将模拟触发onLoadStarted，并将URL设置为空，因为显示当前正在加载的URL可能不安全。onPageBegin将不会被模拟。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onloadstartedevent20",
              children: "OnLoadStartedEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页加载开始时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onLoadStarted((event) => {\n          if (event) {\n            console.info('url:' + event.url);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onloadfinished20",
      children: "onLoadFinished20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onLoadFinished(callback: Callback<OnLoadFinishedEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知宿主应用页面已加载完成。此方法仅在主frame加载完成时被调用。对于片段跳转（即导航至#fragment_id），onLoadFinished同样会被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(196089)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "片段导航也会触发onLoadFinished，但onPageEnd不会被触发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果主框架在页面完全加载之前被自动重定向，onLoadFinished只会触发一次。onPageEnd会在每次主框架导航时触发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当弹出窗口的文档在加载之前被JavaScript修改时，它将模拟触发onLoadStarted，并将URL设置为空，因为显示当前正在加载的URL可能不安全。onPageBegin将不会被模拟。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onloadfinishedevent20",
              children: "OnLoadFinishedEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页加载结束时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onLoadFinished((event) => {\n          if (event) {\n            console.info('url:' + event.url);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onprogresschange",
      children: "onProgressChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onProgressChange(callback: Callback<OnProgressChangeEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页加载进度变化时触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onprogresschangeevent12",
              children: "OnProgressChangeEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面加载进度变化时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onProgressChange((event) => {\n          if (event) {\n            console.info('newProgress:' + event.newProgress);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontitlereceive",
      children: "onTitleReceive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onTitleReceive(callback: Callback<OnTitleReceiveEvent>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当页面文档标题", (0,jsx_runtime.jsx)(_components.title, {
        children: "元素发生变更时，触发回调。若当前页面未显示设置标题，ArkWeb将在加载完成前基于页面的URL生成标题并返回给应用。"
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#ontitlereceiveevent12",
              children: "OnTitleReceiveEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面文档标题发生变更时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onTitleReceive((event) => {\n          if (event) {\n            console.info('title:' + event.title);\n            console.info('isRealTitle:' + event.isRealTitle);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onrefreshaccessedhistory",
      children: "onRefreshAccessedHistory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onRefreshAccessedHistory(callback: Callback<OnRefreshAccessedHistoryEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导航完成时触发该回调，用于应用更新其访问的历史链接。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onrefreshaccessedhistoryevent12",
              children: "OnRefreshAccessedHistoryEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在导航完成时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onRefreshAccessedHistory((event) => {\n          if (event) {\n            console.info('url:' + event.url + ' isReload:' + event.isRefreshed);\n            console.info('isMainFrame:' + event.isMainFrame);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onrenderexited9",
      children: "onRenderExited9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onRenderExited(callback: Callback<OnRenderExitedEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用渲染进程异常退出时触发该回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多个Web组件可能共享单个渲染进程，每个受影响的Web组件都会触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用处理该回调时，可以调用绑定的webviewController相关接口来恢复页面。例如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#refresh",
        children: "refresh"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#loadurl",
        children: "loadUrl"
      }), "等。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件生命周期回调详情可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-event-sequence",
        children: "Web组件的生命周期"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onrenderexitedevent12",
              children: "OnRenderExitedEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渲染过程退出时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'chrome://crash/', controller: this.controller })\n        .onRenderExited((event) => {\n          if (event) {\n            console.info('reason:' + event.renderExitReason);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onrenderprocessnotresponding12",
      children: "onRenderProcessNotResponding12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onRenderProcessNotResponding(callback: OnRenderProcessNotRespondingCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "渲染进程无响应时触发该回调函数。如果Web组件无法处理输入事件，或者无法在合理的时间范围内导航到新的URL，则认为网页进程无响应，并将触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["只要网页进程一直无响应，此回调仍可能会持续触发，直到网页进程再次响应，此时", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onrenderprocessresponding12",
        children: "onRenderProcessResponding"
      }), "将会触发。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过WebviewController接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#terminaterenderprocess12",
        children: "terminateRenderProcess"
      }), "来终止关联的渲染进程，这可能会影响同一渲染进程的其他Web组件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onrenderprocessnotrespondingcallback12",
              children: "OnRenderProcessNotRespondingCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渲染进程无响应时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onRenderProcessNotResponding((data) => {\n          console.info(\"onRenderProcessNotResponding: [jsStack]= \" + data.jsStack +\n            \", [process]=\" + data.pid + \", [reason]=\" + data.reason);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onrenderprocessresponding12",
      children: "onRenderProcessResponding12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onRenderProcessResponding(callback: OnRenderProcessRespondingCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "渲染进程由无响应状态变回正常运行状态时触发该回调函数，该回调表明该网页并非真正卡死。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onrenderprocessrespondingcallback12",
              children: "OnRenderProcessRespondingCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渲染进程由无响应状态变回正常运行状态时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onRenderProcessResponding(() => {\n          console.info(\"onRenderProcessResponding again\");\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onshowfileselector9",
      children: "onShowFileSelector9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onShowFileSelector(callback: Callback<OnShowFileSelectorEvent, boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用此函数以处理具有“文件”输入类型的HTML表单。若不调用此函数或返回false，Web组件会提供默认的“选择文件”处理界面。若返回true，应用可以自定义“选择文件”的响应行为。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onshowfileselectorevent12",
              children: "OnShowFileSelectorEvent"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于通知Web组件文件选择的结果。  返回值boolean。当返回值为true时，用户可以调用系统提供的弹窗能力。当返回值为false时，函数中绘制的自定义弹窗无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拉起文件选择器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { picker } from '@kit.CoreFileKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController()\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onShowFileSelector((event) => {\n          console.info('MyFileUploader onShowFileSelector invoked')\n          const documentSelectOptions = new picker.DocumentSelectOptions();\n          let uri: string | null = null;\n          const documentViewPicker = new picker.DocumentViewPicker();\n          documentViewPicker.select(documentSelectOptions).then((documentSelectResult) => {\n            uri = documentSelectResult[0];\n            console.info('documentViewPicker.select to file succeed and uri is:' + uri);\n            if (event) {\n              event.result.handleFileList([uri]);\n            }\n          }).catch((err: BusinessError) => {\n            console.error(`Invoke documentViewPicker.select failed, code is ${err.code},  message is ${err.message}`);\n          })\n          return true;\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拉起图库选择器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { picker } from '@kit.CoreFileKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  async selectFile(result: FileSelectorResult): Promise<void> {\n    let photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();\n    let photoPicker = new photoAccessHelper.PhotoViewPicker();\n    // 过滤选择媒体文件类型为IMAGE_VIDEO\n    photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;\n    // 设置最大选择数量\n    photoSelectOptions.maxSelectNumber = 5;\n    let chooseFile: photoAccessHelper.PhotoSelectResult = await photoPicker.select(photoSelectOptions);\n    // 获取选择的文件列表\n    result.handleFileList(chooseFile.photoUris);\n  }\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onShowFileSelector((event) => {\n          if (event) {\n            this.selectFile(event.result);\n          }\n          return true;\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拉起相机选择器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { cameraPicker, camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\nasync function openCamera(callback: Callback<string>, uiContext: UIContext) {\n let mContext = uiContext.getHostContext() as common.Context;\n  try {\n    let pickerProfile: cameraPicker.PickerProfile = {\n      cameraPosition: camera.CameraPosition.CAMERA_POSITION_BACK\n    };\n    let pickerResult: cameraPicker.PickerResult = await cameraPicker.pick(mContext,\n      [cameraPicker.PickerMediaType.PHOTO, cameraPicker.PickerMediaType.VIDEO], pickerProfile);\n    callback(pickerResult.resultUri);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`the pick call failed. error code: ${err.code}`);\n  }\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onShowFileSelector((event) => {\n          openCamera((result) => {\n            if (event) {\n              console.info('Title is ' + event.fileSelector.getTitle());\n              console.info('Mode is ' + event.fileSelector.getMode());\n              console.info('Accept types are ' + event.fileSelector.getAcceptType());\n              console.info('Capture is ' + event.fileSelector.isCapture());\n              console.info('Mime types are ' + event.fileSelector.getMimeTypes());\n              event.result.handleFileList([result]);\n            }\n          }, this.getUIContext())\n          return true;\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的html文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n<body>\n  <form id=\"upload-form\" enctype=\"multipart/form-data\">\n    <input type=\"file\" id=\"upload\" name=\"upload\" accept=\"image/*, video/*\"/>\n    </form>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onresourceload9",
      children: "onResourceLoad9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onResourceLoad(callback: Callback<OnResourceLoadEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知Web组件所加载的资源文件url信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onresourceloadevent12",
              children: "OnResourceLoadEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载url时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onResourceLoad((event) => {\n          console.info('onResourceLoad: ' + event.url);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onscalechange9",
      children: "onScaleChange9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScaleChange(callback: Callback<OnScaleChangeEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当页面显示比例发生变化时，触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onscalechangeevent12",
              children: "OnScaleChangeEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当页面显示比例发生变化时，触发该回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onScaleChange((event) => {\n          console.info('onScaleChange changed from ' + event.oldScale + ' to ' + event.newScale);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oninterceptrequest9",
      children: "onInterceptRequest9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onInterceptRequest(callback: Callback<OnInterceptRequestEvent, WebResourceResponse>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当Web组件加载URL之前触发该回调，用于拦截URL并返回响应数据。onInterceptRequest可拦截所有跳转请求并返回响应数据，但无法访问POST请求体（Body）内容，且不支持分片缓冲（buffer）类型数据获取。此类场景需改用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webschemehandler/arkts-apis-webview-webschemehandler",
        children: "WebSchemeHandler"
      }), "实现，依据具体业务需求进行判断。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#oninterceptrequestevent12",
              children: "OnInterceptRequestEvent"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webresourceresponse/arkts-basic-components-web-webresourceresponse",
              children: "WebResourceResponse"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当Web组件加载url之前触发。  返回值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webresourceresponse/arkts-basic-components-web-webresourceresponse",
              children: "WebResourceResponse"
            }), "。返回响应数据则按照响应数据加载，无响应数据则返回null表示按照原来的方式加载。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  responseWeb: WebResourceResponse = new WebResourceResponse();\n  heads: Header[] = new Array();\n  webData: string = \"<!DOCTYPE html>\\n\" +\n    \"<html>\\n\" +\n    \"<head>\\n\" +\n    \"<title>intercept test</title>\\n\" +\n    \"</head>\\n\" +\n    \"<body>\\n\" +\n    \"<h1>intercept test</h1>\\n\" +\n    \"</body>\\n\" +\n    \"</html>\";\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onInterceptRequest((event) => {\n          if (event) {\n            console.info('url:' + event.request.getRequestUrl());\n          }\n          let head1: Header = {\n            headerKey: \"Connection\",\n            headerValue: \"keep-alive\"\n          }\n          let head2: Header = {\n            headerKey: \"Cache-Control\",\n            headerValue: \"no-cache\"\n          }\n          // 将新元素追加到数组的末尾，并返回数组的新长度。\n          let length = this.heads.push(head1);\n          length = this.heads.push(head2);\n          console.info('The response header result length is :' + length);\n          const promise: Promise<String> = new Promise((resolve: Function, reject: Function) => {\n            this.responseWeb.setResponseHeader(this.heads);\n            this.responseWeb.setResponseData(this.webData);\n            this.responseWeb.setResponseEncoding('utf-8');\n            this.responseWeb.setResponseMimeType('text/html');\n            this.responseWeb.setResponseCode(200);\n            this.responseWeb.setReasonMessage('OK');\n            resolve(\"success\");\n          })\n          promise.then(() => {\n            console.info(\"prepare response ready\");\n            this.responseWeb.setResponseIsReady(true);\n          })\n          this.responseWeb.setResponseIsReady(false);\n          return this.responseWeb;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onhttpauthrequest9",
      children: "onHttpAuthRequest9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onHttpAuthRequest(callback: Callback<OnHttpAuthRequestEvent, boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知收到http auth认证请求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onhttpauthrequestevent12",
              children: "OnHttpAuthRequestEvent"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当浏览器需要用户的凭据时触发。  返回值boolean。返回true表示http auth认证成功，返回false表示http auth认证失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n  httpAuth: boolean = false;\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onHttpAuthRequest((event) => {\n          if (event) {\n            this.uiContext.showAlertDialog({\n              title: 'onHttpAuthRequest',\n              message: 'text',\n              primaryButton: {\n                value: 'cancel',\n                action: () => {\n                  event.handler.cancel();\n                }\n              },\n              secondaryButton: {\n                value: 'ok',\n                action: () => {\n                  this.httpAuth = event.handler.isHttpAuthInfoSaved();\n                  if (this.httpAuth == false) {\n                    webview.WebDataBase.saveHttpAuthCredentials(\n                      event.host,\n                      event.realm,\n                      \"2222\",\n                      \"2222\"\n                    )\n                    event.handler.cancel();\n                  }\n                }\n              },\n              cancel: () => {\n                event.handler.cancel();\n              }\n            })\n          }\n          return true;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onsslerroreventreceive9",
      children: "onSslErrorEventReceive9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onSslErrorEventReceive(callback: Callback<OnSslErrorEventReceiveEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知用户加载资源时发生SSL错误，只支持主资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果需要支持子资源，请使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onsslerrorevent12",
        children: "OnSslErrorEvent"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(295038)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "主资源：浏览器加载网页的入口文件，通常是HTML文档。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "子资源：主资源中引用的依赖文件，由主资源解析过程中遇到特定标签时触发加载。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用程序需要调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-sslerrorhandler/arkts-basic-components-web-sslerrorhandler#handlecancel9",
          children: "handler.handleCancel()"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-sslerrorhandler/arkts-basic-components-web-sslerrorhandler#handleconfirm9",
          children: "handler.handleConfirm()"
        }), "处理该回调，如果没有处理该回调则默认取消资源加载。handleConfirm()或者handleCancel()的行为可能会被记录下来，以便为将来的SSL错误做出响应。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用程序可以用于显示自定义错误页面或静默记录问题。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onsslerroreventreceiveevent12",
              children: "OnSslErrorEventReceiveEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当网页收到SSL错误时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { cert } from '@kit.DeviceCertificateKit';\n\nfunction LogCertInfo(certChainData : Array<Uint8Array> | undefined) {\n  if (!(certChainData instanceof Array)) {\n    console.error('failed, cert chain data type is not array');\n    return;\n  }\n\n  for (let i = 0; i < certChainData.length; i++) {\n    let encodeBlobData: cert.EncodingBlob = {\n      data: certChainData[i],\n      encodingFormat: cert.EncodingFormat.FORMAT_DER\n    }\n    cert.createX509Cert(encodeBlobData, (error, x509Cert) => {\n      if (error) {\n        console.error('Index : ' + i + ',createX509Cert failed, errCode: ' + error.code + ', errMsg: ' + error.message);\n      } else {\n        console.info('createX509Cert success');\n        console.info(ParseX509CertInfo(x509Cert));\n      }\n    });\n  }\n  return;\n}\n\nfunction Uint8ArrayToString(dataArray: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < dataArray.length; i++) {\n    dataString += String.fromCharCode(dataArray[i]);\n  }\n  return dataString;\n}\n\nfunction ParseX509CertInfo(x509Cert: cert.X509Cert) {\n  let res: string = 'getCertificate success, '\n    + 'issuer name = '\n    + Uint8ArrayToString(x509Cert.getIssuerName().data) + ', subject name = '\n    + Uint8ArrayToString(x509Cert.getSubjectName().data) + ', valid start = '\n    + x509Cert.getNotBeforeTime()\n    + ', valid end = ' + x509Cert.getNotAfterTime();\n  return res;\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onSslErrorEventReceive((event) => {\n          LogCertInfo(event.certChainData);\n          this.uiContext.showAlertDialog({\n            title: 'onSslErrorEventReceive',\n            message: 'text',\n            primaryButton: {\n              value: 'confirm',\n              action: () => {\n                event.handler.handleConfirm();\n              }\n            },\n            secondaryButton: {\n              value: 'cancel',\n              action: () => {\n                event.handler.handleCancel();\n              }\n            },\n            cancel: () => {\n              event.handler.handleCancel();\n            }\n          })\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onsslerrorevent12",
      children: "onSslErrorEvent12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onSslErrorEvent(callback: OnSslErrorEventCallback)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通知用户加载资源（主资源+子资源）时发生SSL错误，如果只想处理主资源的SSL错误，请用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webresourcerequest/arkts-basic-components-web-webresourcerequest#ismainframe",
        children: "isMainFrame"
      }), "字段进行区分。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(374452)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "主资源：浏览器加载网页的入口文件，通常是HTML文档。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "子资源：主资源中引用的依赖文件，由主资源解析过程中遇到特定标签时触发加载。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onsslerroreventcallback12",
              children: "OnSslErrorEventCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知用户加载资源时发生SSL错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { cert } from '@kit.DeviceCertificateKit';\n\nfunction LogCertInfo(certChainData : Array<Uint8Array> | undefined) {\n  if (!(certChainData instanceof Array)) {\n    console.error('failed, cert chain data type is not array');\n    return;\n  }\n\n  for (let i = 0; i < certChainData.length; i++) {\n    let encodeBlobData: cert.EncodingBlob = {\n      data: certChainData[i],\n      encodingFormat: cert.EncodingFormat.FORMAT_DER\n    }\n    cert.createX509Cert(encodeBlobData, (error, x509Cert) => {\n      if (error) {\n        console.error('Index : ' + i + ',createX509Cert failed, errCode: ' + error.code + ', errMsg: ' + error.message);\n      } else {\n        console.info('createX509Cert success');\n        console.info(ParseX509CertInfo(x509Cert));\n      }\n    });\n  }\n  return;\n}\n\nfunction Uint8ArrayToString(dataArray: Uint8Array) {\n  let dataString = '';\n  for (let i = 0; i < dataArray.length; i++) {\n    dataString += String.fromCharCode(dataArray[i]);\n  }\n  return dataString;\n}\n\nfunction ParseX509CertInfo(x509Cert: cert.X509Cert) {\n  let res: string = 'getCertificate success, '\n    + 'issuer name = '\n    + Uint8ArrayToString(x509Cert.getIssuerName().data) + ', subject name = '\n    + Uint8ArrayToString(x509Cert.getSubjectName().data) + ', valid start = '\n    + x509Cert.getNotBeforeTime()\n    + ', valid end = ' + x509Cert.getNotAfterTime();\n  return res;\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onSslErrorEvent((event: SslErrorEvent) => {\n          console.info(\"onSslErrorEvent url: \" + event.url);\n          console.info(\"onSslErrorEvent error: \" + event.error);\n          console.info(\"onSslErrorEvent originalUrl: \" + event.originalUrl);\n          console.info(\"onSslErrorEvent referrer: \" + event.referrer);\n          console.info(\"onSslErrorEvent isFatalError: \" + event.isFatalError);\n          console.info(\"onSslErrorEvent isMainFrame: \" + event.isMainFrame);\n          LogCertInfo(event.certChainData);\n          this.uiContext.showAlertDialog({\n            title: 'onSslErrorEvent',\n            message: 'text',\n            primaryButton: {\n              value: 'confirm',\n              action: () => {\n                event.handler.handleConfirm();\n              }\n            },\n            secondaryButton: {\n              value: 'cancel',\n              action: () => {\n                // true表示停止加载页面，停留在当前页面，使用false表示继续加载页面，并展示错误页面\n                event.handler.handleCancel(true);\n              }\n            },\n            cancel: () => {\n              event.handler.handleCancel();\n            }\n          })\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onclientauthenticationrequest9",
      children: "onClientAuthenticationRequest9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onClientAuthenticationRequest(callback: Callback<OnClientAuthenticationEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知用户收到SSL客户端证书请求事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(540503)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Web组件有三种响应方式：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/s-basic-components-web-clientauthenticationhandler/s-basic-components-web-clientauthenticationhandler#confirm10",
          children: "ClientAuthenticationHandler.confirm"
        }), "（继续）、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/s-basic-components-web-clientauthenticationhandler/s-basic-components-web-clientauthenticationhandler#cancel9",
          children: "ClientAuthenticationHandler.cancel"
        }), "（取消）或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/s-basic-components-web-clientauthenticationhandler/s-basic-components-web-clientauthenticationhandler#ignore9",
          children: "ClientAuthenticationHandler.ignore"
        }), "（忽略）。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果调用ClientAuthenticationHandler.confirm或ClientAuthenticationHandler.cancel，ArkWeb会将认证结果存储在内存中（在应用程序的生命周期内），并且不会对相同的主机和端口再次调用onClientAuthenticationRequest()。如果调用onClientAuthenticationRequest.ignore，ArkWeb则不会存储该认证结果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需配置\"ohos.permission.ACCESS_CERT_MANAGER\"权限。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onclientauthenticationevent12",
              children: "OnClientAuthenticationEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要用户提供的SSL客户端证书时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安装私有凭证以实现双向认证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { common } from '@kit.AbilityKit';\nimport { certificateManager } from '@kit.DeviceCertificateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  controller: WebviewController = new webview.WebviewController();\n  uiContext : UIContext = this.getUIContext();\n  context : Context | undefined = this.uiContext.getHostContext() as common.UIAbilityContext;\n  uri: string = ''\n\n  aboutToAppear(): void {\n    webview.WebviewController.setRenderProcessMode(webview.RenderProcessMode.MULTIPLE)\n  }\n\n  build() {\n    Column() {\n      Button(\"installPrivateCertificate\").onClick(() => {\n        if (!this.context) {\n          return;\n        }\n\n        // 注：badssl.com-client.p12需要替换为实际使用的证书文件\n        let value: Uint8Array = this.context.resourceManager.getRawFileContentSync(\"badssl.com-client.p12\");\n        certificateManager.installPrivateCertificate(value, 'badssl.com', \"1\",\n          async (err: BusinessError, data: certificateManager.CMResult) => {\n            console.info(`installPrivateCertificate, uri==========${JSON.stringify(data.uri)}`)\n            if (!err && data.uri) {\n              this.uri = data.uri;\n            }\n          });\n      })\n      Button('加载需要客户端SSL证书的网站')\n        .onClick(() => {\n          this.controller.loadUrl(\"https://client.badssl.com\")\n        })\n      Web({\n        src: \"https://www.bing.com/\",\n        controller: this.controller,\n      }).domStorageAccess(true)\n        .fileAccess(true)\n        .onPageBegin(event => {\n          console.info(\"extensions onpagebegin url \" + event.url);\n        })\n        .onClientAuthenticationRequest((event) => {\n          console.info(\"onClientAuthenticationRequest \");\n          event.handler.confirm(this.uri);\n        })\n        .onSslErrorEventReceive(e => {\n          console.info(`onSslErrorEventReceive->${e.error.toString()}`);\n        })\n        .onErrorReceive((event) => {\n          if (event) {\n            this.getUIContext().getPromptAction().showToast({\n              message: `ErrorCode: ${event.error.getErrorCode()}, ErrorInfo: ${event.error.getErrorInfo()}`,\n              alignment: Alignment.Center\n            })\n            console.info('getErrorInfo:' + event.error.getErrorInfo());\n            console.info('getErrorCode:' + event.error.getErrorCode());\n            console.info('url:' + event.request.getRequestUrl());\n          }\n        })\n        .onTitleReceive(event  => {\n          console.info(\"title received \" + event.title);\n        })\n\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对接证书管理，实现双向认证功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造 GlobalContext 单例对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// GlobalContext.ets\nexport class GlobalContext {\n  private constructor() {}\n  private static instance: GlobalContext;\n  private _objects = new Map<string, Object>();\n\n  public static getContext(): GlobalContext {\n    if (!GlobalContext.instance) {\n      GlobalContext.instance = new GlobalContext();\n    }\n    return GlobalContext.instance;\n  }\n\n  getObject(value: string): Object | undefined {\n    return this._objects.get(value);\n  }\n\n  setObject(key: string, objectClass: Object): void {\n    this._objects.set(key, objectClass);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造 CertManagerService 对象以对接证书管理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// CertMgrService.ets\nimport { bundleManager, common, Want } from \"@kit.AbilityKit\";\nimport { BusinessError } from \"@kit.BasicServicesKit\";\nimport { GlobalContext } from './GlobalContext';\n\nexport default class CertManagerService {\n  private static sInstance: CertManagerService;\n  private authUri = \"\";\n  private appUid = \"\";\n\n  public static getInstance(): CertManagerService {\n    if (CertManagerService.sInstance == null) {\n      CertManagerService.sInstance = new CertManagerService();\n    }\n    return CertManagerService.sInstance;\n  }\n\n  async grantAppPm(): Promise<string> {\n    let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_DEFAULT | bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION;\n    // 注：com.example.myapplication需要写实际应用名称\n    try {\n      const data = await bundleManager.getBundleInfoForSelf(bundleFlags)\n        .catch((err: BusinessError) => {\n          console.error('getBundleInfoForSelf failed. Cause: %{public}s', err.message);\n          return null;\n        });\n      this.appUid = data?.appInfo?.uid?.toString() ?? '';\n      console.info('getBundleInfoForSelf successfully. Data: %{public}s', JSON.stringify(data));\n    } catch (err) {\n      let message = (err as BusinessError).message;\n      console.error('getBundleInfoForSelf failed: %{public}s', message);\n    }\n\n    // 注：需要在MainAbility.ts文件的onCreate函数里添加GlobalContext.getContext().setObject(\"AbilityContext\", this.context)\n    let abilityContext = GlobalContext.getContext().getObject(\"AbilityContext\") as common.UIAbilityContext;\n    await abilityContext.startAbilityForResult(\n      {\n        bundleName: \"com.ohos.certmanager\",\n        abilityName: \"MainAbility\",\n        uri: \"requestAuthorize\",\n        parameters: {\n          appUid: this.appUid, // 传入申请应用的appUid\n        }\n      } as Want)\n      .then((data: common.AbilityResult) => {\n        if (!data.resultCode && data.want) {\n          if (data.want.parameters) {\n            this.authUri = data.want.parameters.authUri as string; // 授权成功后获取返回的authUri\n          }\n        }\n      })\n    return this.authUri;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将当前Ability的上下文存储到GlobalContext中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// EntryAbility.ets\nimport { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { GlobalContext } from '../pages/GlobalContext';\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    try {\n      this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);\n      GlobalContext.getContext().setObject(\"AbilityContext\", this.context);\n    } catch (err) {\n      hilog.error(DOMAIN, 'testTag', 'Failed to set colorMode. Cause: %{public}s', JSON.stringify(err));\n    }\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onCreate');\n  }\n\n  onDestroy(): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));\n        return;\n      }\n      hilog.info(DOMAIN, 'testTag', 'Succeeded in loading the content.');\n    });\n  }\n\n  onWindowStageDestroy(): void {\n    // Main window is destroyed, release UI related resources\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');\n  }\n\n  onForeground(): void {\n    // Ability has brought to foreground\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onForeground');\n  }\n\n  onBackground(): void {\n    // Ability has back to background\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onBackground');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现双向认证功能。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport CertManagerService from './CertMgrService';\n\n@Entry\n@Component\nstruct Index {\n  controller: WebviewController = new webview.WebviewController();\n  certManager = CertManagerService.getInstance();\n\n  aboutToAppear(): void {\n    webview.WebviewController.setRenderProcessMode(webview.RenderProcessMode.MULTIPLE)\n  }\n\n  build() {\n    Column() {\n      Button('加载需要客户端SSL证书的网站')\n        .onClick(() => {\n          this.controller.loadUrl(\"https://client.badssl.com\")\n        })\n      Web({\n        src: \"https://www.bing.com/\",\n        controller: this.controller,\n      }).domStorageAccess(true)\n        .fileAccess(true)\n        .onPageBegin(event => {\n          console.info(\"extensions onpagebegin url \" + event.url);\n        })\n        .onClientAuthenticationRequest((event) => {\n          console.info(\"onClientAuthenticationRequest \");\n\n          this.certManager.grantAppPm().then(result => {\n            console.info(`grantAppPm, URI==========${result}`);\n            event.handler.confirm(result);\n          })\n        })\n        .onSslErrorEventReceive(e => {\n          console.info(`onSslErrorEventReceive->${e.error.toString()}`);\n        })\n        .onErrorReceive((event) => {\n          if (event) {\n            this.getUIContext().getPromptAction().showToast({\n              message: `ErrorCode: ${event.error.getErrorCode()}, ErrorInfo: ${event.error.getErrorInfo()}`,\n              alignment: Alignment.Center\n            })\n            console.info('getErrorInfo:' + event.error.getErrorInfo());\n            console.info('getErrorCode:' + event.error.getErrorCode());\n            console.info('url:' + event.request.getRequestUrl());\n          }\n        })\n        .onTitleReceive(event  => {\n          console.info(\"title received \" + event.title);\n        })\n\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onverifypin22",
      children: "onVerifyPin22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onVerifyPin(callback: OnVerifyPinCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知用户进行PIN码认证。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onverifypincallback22",
              children: "OnVerifyPinCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要用户进行PIN码认证时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { common } from '@kit.AbilityKit';\nimport { certificateManagerDialog } from '@kit.DeviceCertificateKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  controller: WebviewController = new webview.WebviewController();\n  uiContext : UIContext = this.getUIContext();\n  context : Context | undefined = this.uiContext.getHostContext() as common.UIAbilityContext;\n\n  aboutToAppear(): void {\n    webview.WebviewController.setRenderProcessMode(webview.RenderProcessMode.MULTIPLE)\n  }\n\n  build() {\n    Column() {\n      Button('加载需要客户端SSL证书的网站')\n        .onClick(() => {\n          this.controller.loadUrl(\"https://client.badssl.com\")\n        })\n      Web({\n        src: \"https://www.bing.com/\",\n        controller: this.controller,\n      }).domStorageAccess(true)\n        .fileAccess(true)\n        .onPageBegin(event => {\n          console.info(\"extensions onpagebegin url \" + event.url);\n        })\n        .onClientAuthenticationRequest((event) => {\n          // 收到客户端证书请求事件\n          console.info(`onClientAuthenticationRequest`);\n          try {\n            let certTypes: Array<certificateManagerDialog.CertificateType> = [\n              certificateManagerDialog.CertificateType.CREDENTIAL_UKEY\n            ];\n            // 调用证书管理，打开证书选择框\n            certificateManagerDialog.openAuthorizeDialog(this.context, { certTypes: certTypes })\n              .then((data: certificateManagerDialog.CertReference) => {\n                console.info(`openAuthorizeDialog request cred auth success`)\n                // 通知web选择的为ukey证书\n                event.handler.confirm(data.keyUri, CredentialType.CREDENTIAL_UKEY);\n              }).catch((err: BusinessError) => {\n              console.error(`openAuthorizeDialog request cred auth failed, err: ${JSON.stringify(err)}`);\n            })\n          } catch (e) {\n            console.error(`openAuthorizeDialog request cred auth failed, err: ${JSON.stringify(e)}`);\n          }\n        })\n        .onVerifyPin((event) => {\n          // 收到PIN码认证请求事件\n          console.info(`onVerifyPin`);\n          // 调用证书管理，打开PIN码输入框\n          certificateManagerDialog.openUkeyAuthDialog(this.context, {keyUri: event.identity})\n            .then(() => {\n              // 通知webPIN码认证成功\n              console.info(`onVerifyPin success`);\n              event.handler.confirm(PinVerifyResult.PIN_VERIFICATION_SUCCESS);\n            }).catch((err: BusinessError) => {\n            // 通知webPIN码认证失败\n            console.info(`onVerifyPin fail`);\n            event.handler.confirm(PinVerifyResult.PIN_VERIFICATION_FAILED);\n          })\n        })\n        .onSslErrorEventReceive(e => {\n          console.info(`onSslErrorEventReceive->${e.error.toString()}`);\n        })\n        .onErrorReceive((event) => {\n          if (event) {\n            this.getUIContext().getPromptAction().showToast({\n              message: `ErrorCode: ${event.error.getErrorCode()}, ErrorInfo: ${event.error.getErrorInfo()}`,\n              alignment: Alignment.Center\n            })\n            console.info('getErrorInfo:' + event.error.getErrorInfo());\n            console.info('getErrorCode:' + event.error.getErrorCode());\n            console.info('url:' + event.request.getRequestUrl());\n          }\n        })\n        .onTitleReceive(event  => {\n          console.info(\"title received \" + event.title);\n        })\n\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onpermissionrequest9",
      children: "onPermissionRequest9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onPermissionRequest(callback: Callback<OnPermissionRequestEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知收到获取权限请求，需配置\"ohos.permission.CAMERA\"、\"ohos.permission.MICROPHONE\"权限。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onpermissionrequestevent12",
              children: "OnPermissionRequestEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知收到获取权限请求触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { abilityAccessCtrl } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  aboutToAppear() {\n    // 配置Web开启调试模式\n    webview.WebviewController.setWebDebuggingAccess(true);\n    let atManager = abilityAccessCtrl.createAtManager();\n    atManager.requestPermissionsFromUser(this.uiContext.getHostContext(), ['ohos.permission.CAMERA', 'ohos.permission.MICROPHONE'])\n      .then((data) => {\n        console.info('data:' + JSON.stringify(data));\n        console.info('data permissions:' + data.permissions);\n        console.info('data authResults:' + data.authResults);\n      }).catch((error: BusinessError) => {\n      console.error(`Failed to request permissions from user. Code is ${error.code}, message is ${error.message}`);\n    })\n  }\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onPermissionRequest((event) => {\n          if (event) {\n            this.uiContext.showAlertDialog({\n              title: 'title',\n              message: 'text',\n              primaryButton: {\n                value: 'deny',\n                action: () => {\n                  event.request.deny();\n                }\n              },\n              secondaryButton: {\n                value: 'onConfirm',\n                action: () => {\n                  event.request.grant(event.request.getAccessibleResource());\n                }\n              },\n              cancel: () => {\n                event.request.deny();\n              }\n            })\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " <!-- index.html -->\n <!DOCTYPE html>\n <html>\n <head>\n   <meta charset=\"UTF-8\">\n </head>\n <body>\n <video id=\"video\" width=\"500px\" height=\"500px\" autoplay></video>\n <canvas id=\"canvas\" width=\"500px\" height=\"500px\"></canvas>\n <br>\n <input type=\"button\" title=\"HTML5摄像头\" value=\"开启摄像头\" onclick=\"getMedia()\"/>\n <script>\n   function getMedia()\n   {\n     let constraints = {\n       video: {width: 500, height: 500},\n       audio: true\n     };\n     // 获取video摄像头区域\n     let video = document.getElementById(\"video\");\n     // 返回的Promise对象\n     let promise = navigator.mediaDevices.getUserMedia(constraints);\n     // then()异步，调用MediaStream对象作为参数\n     promise.then(function (MediaStream) {\n       video.srcObject = MediaStream;\n       video.play();\n     }).catch(function(error) {\n       console.error(\"Error accessing media devices.\", error);\n     });\n   }\n </script>\n </body>\n </html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oncontextmenushow9",
      children: "onContextMenuShow9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onContextMenuShow(callback: Callback<OnContextMenuShowEvent, boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长按特定元素（例如图片，链接）或鼠标右键，弹出菜单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#oncontextmenushowevent12",
              children: "OnContextMenuShowEvent"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用时触发的回调，以允许自定义显示上下文菜单。  返回值boolean。返回true表示触发自定义菜单，返回false表示触发的自定义菜单无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { pasteboard } from '@kit.BasicServicesKit';\n\nconst TAG = 'ContextMenu';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  private result: WebContextMenuResult | undefined = undefined;\n  @State linkUrl: string = '';\n  @State offsetX: number = 0;\n  @State offsetY: number = 0;\n  @State showMenu: boolean = false;\n  uiContext: UIContext = this.getUIContext();\n\n  @Builder\n  // 构建自定义菜单及触发功能接口\n  MenuBuilder() {\n    // 以垂直列表形式显示的菜单。\n    Menu() {\n      // 展示菜单Menu中具体的item菜单项。\n      MenuItem({\n        content: '撤销',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          this.result?.undo();\n          this.showMenu = false;\n        })\n      MenuItem({\n        content: '重做',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          this.result?.redo();\n          this.showMenu = false;\n        })\n      MenuItem({\n        content: '粘贴为纯文本',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          this.result?.pasteAndMatchStyle();\n          this.showMenu = false;\n        })\n      MenuItem({\n        content: '复制图片',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          this.result?.copyImage();\n          this.showMenu = false;\n        })\n      MenuItem({\n        content: '剪切',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          this.result?.cut();\n          this.showMenu = false;\n        })\n      MenuItem({\n        content: '复制',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          this.result?.copy();\n          this.showMenu = false;\n        })\n      MenuItem({\n        content: '粘贴',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          this.result?.paste();\n          this.showMenu = false;\n        })\n      MenuItem({\n        content: '复制链接',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          let pasteData = pasteboard.createData('text/plain', this.linkUrl);\n          pasteboard.getSystemPasteboard().setData(pasteData, (error) => {\n            if (error) {\n              return;\n            }\n          })\n          this.showMenu = false;\n        })\n      MenuItem({\n        content: '全选',\n      })\n        .width(100)\n        .height(50)\n        .onClick(() => {\n          this.result?.selectAll();\n          this.showMenu = false;\n        })\n    }\n    .width(150)\n    .height(450)\n  }\n\n  build() {\n    Column() {\n      Web({ src: $rawfile(\"index.html\"), controller: this.controller })\n        // 触发自定义弹窗\n        .onContextMenuShow((event) => {\n          if (event) {\n            this.result = event.result\n            console.info(TAG + \"x coord = \" + event.param.x());\n            console.info(TAG + \"link url = \" + event.param.getLinkUrl());\n            this.linkUrl = event.param.getLinkUrl();\n          }\n          console.info(TAG, `x: ${this.offsetX}, y: ${this.offsetY}`);\n          this.showMenu = true;\n          this.offsetX = 0;\n          this.offsetY = Math.max(this.uiContext!.px2vp(event?.param.y() ?? 0) - 0, 0);\n          return true;\n        })\n        .bindPopup(this.showMenu,\n          {\n            builder: this.MenuBuilder(),\n            enableArrow: false,\n            placement: Placement.LeftTop,\n            offset: { x: this.offsetX, y: this.offsetY },\n            mask: false,\n            onStateChange: (e) => {\n              if (!e.isVisible) {\n                this.showMenu = false;\n                this.result!.closeContextMenu();\n              }\n            }\n          })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<body>\n  <h1>onContextMenuShow</h1>\n  <a href=\"http://www.example.com\" style=\"font-size:27px\">链接www.example.com</a>\n  <!-- rawfile下放任意一张图片命名为example.png -->\n  <div><img src=\"example.png\"></div>\n  <p>选中文字鼠标右键弹出菜单</p>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oncontextmenuhide11",
      children: "onContextMenuHide11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onContextMenuHide(callback: OnContextMenuHideCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长按特定元素（例如图片，链接）或鼠标右键，隐藏菜单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#oncontextmenuhidecallback11",
              children: "OnContextMenuHideCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单相关回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onContextMenuHide(() => {\n          console.info(\"onContextMenuHide callback\");\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onscroll9",
      children: "onScroll9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScroll(callback: Callback<OnScrollEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知网页全局滚动位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(615861)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知的是页面全局滚动位置，局部滚动位置的变化是无法触发此回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断页面是否是全局滚动，在滚动前后打印window.pageYOffset或者window.pageXOffset。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果是全局滚动，window.pageYOffset或者window.pageXOffset的值在滚动前后会有变化，反之没有变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onscrollevent12",
              children: "OnScrollEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当页面滚动到指定位置时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onScroll((event) => {\n          console.info(\"x = \" + event.xOffset);\n          console.info(\"y = \" + event.yOffset);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ongeolocationshow",
      children: "onGeolocationShow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onGeolocationShow(callback: Callback<OnGeolocationShowEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知用户收到地理位置信息获取请求，需配置\"ohos.permission.LOCATION\"、\"ohos.permission.APPROXIMATELY_LOCATION\"权限。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#ongeolocationshowevent12",
              children: "OnGeolocationShowEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，请求显示地理位置权限时触发，返回地理位置信息请求对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { abilityAccessCtrl, common } from '@kit.AbilityKit';\n\nlet atManager = abilityAccessCtrl.createAtManager();\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  // 组件的声明周期函数，创建组件实例后触发\n  aboutToAppear(): void {\n    let context : Context | undefined = this.uiContext.getHostContext() as common.UIAbilityContext;\n    if (!context) {\n      console.error(\"context is undefined\");\n      return;\n    }\n    // 向用户请求位置权限\n    atManager.requestPermissionsFromUser(context, [\"ohos.permission.LOCATION\", \"ohos.permission.APPROXIMATELY_LOCATION\"]).then((data) => {\n      console.info('data:' + JSON.stringify(data));\n      console.info('data permissions:' + data.permissions);\n      console.info('data authResults:' + data.authResults);\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to request permissions from user. Code is ${error.code}, message is ${error.message}`);\n    })\n  }\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .geolocationAccess(true)\n        .onGeolocationShow((event) => {\n          if (event) {\n            this.uiContext.showAlertDialog({\n              title: 'title',\n              message: 'text',\n              confirm: {\n                value: 'onConfirm',\n                action: () => {\n                  // invoke的第三个参数表示是否记住当前弹窗的选择状态，如果传入true，则下次不再弹出对话框\n                  event.geolocation.invoke(event.origin, true, false);\n                }\n              },\n              cancel: () => {\n                // invoke的第三个参数表示是否记住当前弹窗的选择状态，如果传入true，则下次不再弹出对话框\n                event.geolocation.invoke(event.origin, false, false);\n              }\n            })\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!DOCTYPE html>\n<html>\n<body>\n<p id=\"locationInfo\">位置信息</p>\n<button onclick=\"getLocation()\">获取位置</button>\n<script>\nvar locationInfo=document.getElementById(\"locationInfo\");\nfunction getLocation(){\n  if (navigator.geolocation) {\n    // 前端页面访问设备地理位置\n    navigator.geolocation.getCurrentPosition(showPosition);\n  }\n}\nfunction showPosition(position){\n  locationInfo.innerHTML=\"Latitude: \" + position.coords.latitude + \"<br />Longitude: \" + position.coords.longitude;\n}\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ongeolocationhide",
      children: "onGeolocationHide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onGeolocationHide(callback: () => void)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通知用户先前被调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ongeolocationshow",
        children: "onGeolocationShow"
      }), "时收到地理位置信息获取请求已被取消。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "地理位置信息获取请求已被取消的回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .geolocationAccess(true)\n        .onGeolocationHide(() => {\n          console.info(\"onGeolocationHide...\");\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onfullscreenenter9",
      children: "onFullScreenEnter9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onFullScreenEnter(callback: OnFullScreenEnterCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知开发者Web组件进入全屏模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onfullscreenentercallback12",
              children: "OnFullScreenEnterCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web组件进入全屏时的回调信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  handler: FullScreenExitHandler | null = null;\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onFullScreenEnter((event) => {\n          console.info(\"onFullScreenEnter videoWidth: \" + event.videoWidth +\n            \", videoHeight: \" + event.videoHeight);\n          // 应用可以通过 this.handler.exitFullScreen() 主动退出全屏。\n          this.handler = event.handler;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onfullscreenexit9",
      children: "onFullScreenExit9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onFullScreenExit(callback: () => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知开发者Web组件退出全屏模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "退出全屏模式时的回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  handler: FullScreenExitHandler | null = null;\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onFullScreenExit(() => {\n          console.info(\"onFullScreenExit...\")\n          if (this.handler) {\n            this.handler.exitFullScreen();\n          }\n        })\n        .onFullScreenEnter((event) => {\n          this.handler = event.handler;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onwindownew9",
      children: "onWindowNew9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWindowNew(callback: Callback<OnWindowNewEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使能multiWindowAccess情况下，通知用户新建窗口请求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若不调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-controllerhandler/arkts-basic-components-web-controllerhandler#setwebcontroller9",
        children: "setWebController"
      }), "接口，会造成render进程阻塞。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果没有创建新窗口，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-controllerhandler/arkts-basic-components-web-controllerhandler#setwebcontroller9",
        children: "setWebController"
      }), "接口时设置成null，通知Web没有创建新窗口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新窗口需避免直接覆盖在原Web组件上，且应与主页面以相同形式明确显示其URL（如地址栏）以防止用户混淆。若无法实现可信的URL可视化管理，则需考虑禁止创建新窗口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需注意：新窗口请求来源无法可靠追溯，可能由第三方iframe发起，应用需默认采取沙箱隔离、限制权限等防御性措施以确保安全。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onwindownewevent12",
              children: "OnWindowNewEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页要求用户创建窗口时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n// 在同一page页有两个Web组件。在WebComponent新开窗口时，会跳转到NewWebViewComp。\n@CustomDialog\nstruct NewWebViewComp {\n  controller?: CustomDialogController;\n  webviewController1: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: \"www.example.com\", controller: this.webviewController1 })\n        .javaScriptAccess(true)\n        .multiWindowAccess(false)\n        .onWindowExit(() => {\n          console.info(\"NewWebViewComp onWindowExit\");\n          if (this.controller) {\n            this.controller.close();\n          }\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  dialogController: CustomDialogController | null = null;\n\n  build() {\n    Column() {\n      Web({ src: $rawfile(\"window.html\"), controller: this.controller })\n        .javaScriptAccess(true)\n        // 需要使能multiWindowAccess\n        .multiWindowAccess(true)\n        .allowWindowOpenMethod(true)\n        .onWindowNew((event) => {\n          if (this.dialogController) {\n            this.dialogController.close();\n          }\n          let popController: webview.WebviewController = new webview.WebviewController();\n          this.dialogController = new CustomDialogController({\n            builder: NewWebViewComp({ webviewController1: popController })\n          })\n          this.dialogController.open();\n          // 将新窗口对应WebviewController返回给Web内核。\n          // 若不调用event.handler.setWebController接口，会造成render进程阻塞。\n          // 如果没有创建新窗口，调用event.handler.setWebController接口时设置成null，通知Web没有创建新窗口。\n          event.handler.setWebController(popController);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- window.html页面代码 -->\n<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n<body>\n<a href=\"#\" onclick=\"openNewWindow('https://www.example.com')\">打开新页面</a>\n<script type=\"text/javascript\">\n    function openNewWindow(url) {\n      window.open(url, 'example');\n      return false;\n    }\n</script>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onwindownewext23",
      children: "onWindowNewExt23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWindowNewExt(callback: Callback<OnWindowNewExtEvent>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在启用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#multiwindowaccess9",
        children: "multiWindowAccess"
      }), "的情况下，通知用户新建窗口请求。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(443611)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若不调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-controllerhandler/arkts-basic-components-web-controllerhandler#setwebcontroller9",
          children: "setWebController"
        }), "接口，会造成render进程阻塞。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若未创建新窗口，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-controllerhandler/arkts-basic-components-web-controllerhandler#setwebcontroller9",
          children: "setWebController"
        }), "接口并设置成null，通知Web未创建新窗口。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "新窗口需避免直接覆盖在原Web组件上，且应与主页面以相同形式明确显示其URL（如地址栏）以防止用户混淆。若无法确保URL的显示和验证机制可靠，则需考虑禁止创建新窗口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "新窗口请求来源无法可靠追溯，可能由第三方iframe发起，应用需默认采取沙箱隔离、限制权限等防御性措施以确保安全。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onwindownewextevent23",
              children: "OnWindowNewExtEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页要求用户创建窗口时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n// 在同一page页有两个Web组件。在WebComponent新开窗口时，会跳转到NewWebViewComp。\n@CustomDialog\nstruct NewWebViewComp {\ncontroller?: CustomDialogController;\nwebviewController1: webview.WebviewController = new webview.WebviewController();\n\nbuild() {\n  Column() {\n    Web({ src: \"www.example.com\", controller: this.webviewController1 })\n      .javaScriptAccess(true)\n      .multiWindowAccess(false)\n      .onWindowExit(() => {\n        console.info(\"NewWebViewComp onWindowExit\");\n        if (this.controller) {\n          this.controller.close();\n        }\n      })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct WebComponent {\ncontroller: webview.WebviewController = new webview.WebviewController();\ndialogController: CustomDialogController | null = null;\n\nbuild() {\n  Column() {\n    Web({ src: $rawfile(\"window.html\"), controller: this.controller })\n      .javaScriptAccess(true)\n      // 需要开启multiWindowAccess\n      .multiWindowAccess(true)\n      .allowWindowOpenMethod(true)\n      .onWindowNewExt((event) => {\n        // 以event.navigationPolicy请求的方式打开新窗口\n        console.info(\"navigationAction: \", event.navigationPolicy)\n        // 以event.windowFeatures中的大小及位置信息创建新窗口\n        console.info(\"windowFeatures: \", JSON.stringify(event.windowFeatures))\n        if (this.dialogController) {\n          this.dialogController.close();\n        }\n        let popController: webview.WebviewController = new webview.WebviewController();\n        this.dialogController = new CustomDialogController({\n          builder: NewWebViewComp({ webviewController1: popController })\n        })\n        this.dialogController.open();\n        // 将新窗口对应WebviewController返回给Web内核。\n        // 若不调用event.handler.setWebController接口，会造成render进程阻塞。\n        // 如果没有创建新窗口，在调用event.handler.setWebController接口时应设置成null，以通知Web没有创建新窗口。\n        event.handler.setWebController(popController);\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- window.html页面代码 -->\n  <!DOCTYPE html>\n  <html>\n  <head>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  </head>\n  <body>\n  <a href=\"#\" onclick=\"openNewWindow('https://www.example.com')\">打开新页面</a>\n  <script type=\"text/javascript\">\n      function openNewWindow(url) {\n        window.open(url, 'example', 'left=60,top=80,width=800,height=600');\n        return false;\n      }\n  </script>\n  </body>\n  </html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onactivatecontent20",
      children: "onActivateContent20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onActivateContent(callback: Callback<void>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当Web页面触发window.open(url, name)时，会根据name查找是否存在已绑定的Web实例。若存在，该实例将收到此回调以通知应用需将其展示至前端；若不存在，则通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwindownew9",
        children: "onWindowNew"
      }), "通知应用创建新Web实例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(971362)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过name绑定Web实例‌：需在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#onwindownew9",
          children: "onWindowNew"
        }), "回调中调用event.handler.setWebController方法，并传入新Web实例的controller，以完成绑定。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["name‌命名需符合正则表达式[a-zA-Z0-9_]+。当该name被用作", (0,jsx_runtime.jsxs)(_components.a, {
          children: ["或", (0,jsx_runtime.jsx)(_components.form, {
            children: "标签的target属性值时，已绑定的Web实例同样会触发此回调。"
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.a, {
        children: "\n"
      })]
    }), (0,jsx_runtime.jsxs)(_components.a, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "系统能力："
          })
        }), " SystemCapability.Web.Webview.Core"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "参数"
          })
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "参数名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "类型"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "必填"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "说明"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "callback"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Callback<void>"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "是"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "再次在原页面触发window.open后，在已打开的新页面触发该回调。"
            })]
          })
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "示例："
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n// 在同一page页有两个Web组件。在WebComponent新开窗口时，会跳转到NewWebViewComp。\n@CustomDialog\nstruct NewWebViewComp {\n  controller?: CustomDialogController;\n  webviewController1: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: \"https://www.example.com\", controller: this.webviewController1 })\n        .javaScriptAccess(true)\n        .multiWindowAccess(false)\n        .onWindowExit(() => {\n          if (this.controller) {\n            this.controller.close();\n          }\n        })\n        .onActivateContent(() => {\n          // 该Web需要展示到前面，建议应用在这里进行tab或window切换的动作展示此web\n          console.info(\"NewWebViewComp onActivateContent\")\n        })\n    }.height(\"50%\")\n  }\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  dialogController: CustomDialogController | null = null;\n\n  build() {\n    Column() {\n      Web({ src: $rawfile(\"window.html\"), controller: this.controller })\n        .javaScriptAccess(true)\n        .allowWindowOpenMethod(true)\n        // 需要使能multiWindowAccess\n        .multiWindowAccess(true)\n        .onWindowNew((event) => {\n          if (this.dialogController) {\n            this.dialogController.close()\n          }\n          let popController: webview.WebviewController = new webview.WebviewController();\n          this.dialogController = new CustomDialogController({\n            builder: NewWebViewComp({ webviewController1: popController }),\n            isModal: false\n          })\n          this.dialogController.open();\n          // 将新窗口对应WebviewController返回给Web内核。\n          // 若不调用event.handler.setWebController接口，会造成render进程阻塞。\n          event.handler.setWebController(popController);\n        })\n    }\n  }\n}\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "<!-- window.html页面代码 -->\n<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>ActivateContentEvent</title>\n</head>\n<body>\n<a href=\"#\" onclick=\"openNewWindow('https://www.example.com')\">打开新页面</a>\n<script type=\"text/javascript\">\n    function openNewWindow(url) {\n      window.open(url, 'example');\n      return false;\n    }\n</script>\n</body>\n</html>\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "onwindowexit9",
        children: "onWindowExit9+"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "onWindowExit(callback: () => void)"
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        children: "通知用户窗口关闭请求。和"
      }), (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwindownew9",
        children: "onWindowNew"
      }), "一样，从安全角度讲，应用应该确保用户可以知道他们交互的页面已关闭。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "窗口请求关闭的回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onWindowExit(() => {\n          console.info(\"onWindowExit...\");\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onsearchresultreceive9",
      children: "onSearchResultReceive9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onSearchResultReceive(callback: Callback<OnSearchResultReceiveEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "回调通知调用方网页页内查找的结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onsearchresultreceiveevent12",
              children: "OnSearchResultReceiveEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知调用方网页页内查找的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onSearchResultReceive(ret => {\n          if (ret) {\n            console.info(\"on search result receive:\" + \"[cur]\" + ret.activeMatchOrdinal +\n              \"[total]\" + ret.numberOfMatches + \"[isDone]\" + ret.isDoneCounting);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ondataresubmitted9",
      children: "onDataResubmitted9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDataResubmitted(callback: Callback<OnDataResubmittedEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置网页表单可以重新提交时触发的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#ondataresubmittedevent12",
              children: "OnDataResubmittedEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页表单可以重新提交时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      // 在网页中点击提交之后，点击refresh按钮可以重新提交时的触发函数。\n      Button('refresh')\n        .onClick(() => {\n          try {\n            this.controller.refresh();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onDataResubmitted((event) => {\n          console.info('onDataResubmitted');\n          event.handler.resend();\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " <!-- index.html -->\n <!DOCTYPE html>\n <html>\n <head>\n   <meta charset=\"utf-8\">\n </head>\n <body>\n   <form action=\"http://httpbin.org/post\" method=\"post\">\n     <input type=\"text\" name=\"username\">\n     <input type=\"submit\" name=\"提交\">\n   </form>\n </body>\n </html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onpagevisible9",
      children: "onPageVisible9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onPageVisible(callback: Callback<OnPageVisibleEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置旧页面不再呈现，新页面即将可见时触发的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onpagevisibleevent12",
              children: "OnPageVisibleEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旧页面不再呈现，新页面即将可见时触发的回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onPageVisible((event) => {\n          console.info('onPageVisible url:' + event.url);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oninterceptkeyevent9",
      children: "onInterceptKeyEvent9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onInterceptKeyEvent(callback: (event: KeyEvent) => boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置键盘事件的回调函数，该回调在被Webview使用前触发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(event:", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-key/ts-universal-events-key#keyevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "KeyEvent"
            }), ") => boolean"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发的KeyEvent事件。  返回值为boolean类型，true表示将该KeyEvent传入Webview内核，false表示不将该KeyEvent传入Webview内核。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onInterceptKeyEvent((event) => {\n          if (event.keyCode == 2017 || event.keyCode == 2018) {\n            console.info(`onInterceptKeyEvent get event.keyCode ${event.keyCode}`);\n            return true;\n          }\n          return false;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ontouchiconurlreceived9",
      children: "onTouchIconUrlReceived9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onTouchIconUrlReceived(callback: Callback<OnTouchIconUrlReceivedEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置接收到apple-touch-icon url地址时的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#ontouchiconurlreceivedevent12",
              children: "OnTouchIconUrlReceivedEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到的apple-touch-icon url地址时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.baidu.com', controller: this.controller })\n        .onTouchIconUrlReceived((event) => {\n          console.info('onTouchIconUrlReceived:' + JSON.stringify(event));\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onfaviconreceived9",
      children: "onFaviconReceived9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onFaviconReceived(callback: Callback<OnFaviconReceivedEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置应用为当前页面接收到新的favicon时的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onfaviconreceivedevent12",
              children: "OnFaviconReceivedEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前页面接收到新的favicon时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { image } from '@kit.ImageKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  @State icon: image.PixelMap | undefined = undefined;\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onFaviconReceived((event) => {\n          console.info('onFaviconReceived');\n          this.icon = event.favicon;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onaudiostatechanged10",
      children: "onAudioStateChanged10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAudioStateChanged(callback: Callback<OnAudioStateChangedEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置网页上的音频播放状态发生改变时的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onaudiostatechangedevent12",
              children: "OnAudioStateChangedEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页上的音频播放状态发生改变时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  @State playing: boolean = false;\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onAudioStateChanged(event => {\n          this.playing = event.playing;\n          console.info('onAudioStateChanged playing: ' + this.playing);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onfirstcontentfulpaint10",
      children: "onFirstContentfulPaint10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onFirstContentfulPaint(callback: Callback<OnFirstContentfulPaintEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置网页首次内容绘制回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onfirstcontentfulpaintevent12",
              children: "OnFirstContentfulPaintEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页首次内容绘制回调函数。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onFirstContentfulPaint(event => {\n          if (event) {\n            console.info(\"onFirstContentfulPaint:\" + \"[navigationStartTick]:\" +\n            event.navigationStartTick + \", [firstContentfulPaintMs]:\" +\n            event.firstContentfulPaintMs);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onfirstmeaningfulpaint12",
      children: "onFirstMeaningfulPaint12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["onFirstMeaningfulPaint(callback: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onfirstmeaningfulpaintcallback12",
        children: "OnFirstMeaningfulPaintCallback"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置网页绘制页面主要内容回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onfirstmeaningfulpaintcallback12",
              children: "OnFirstMeaningfulPaintCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页绘制页面主要内容度量信息的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onFirstMeaningfulPaint((details) => {\n          console.info(\"onFirstMeaningfulPaint: [navigationStartTime]= \" + details.navigationStartTime +\n            \", [firstMeaningfulPaintTime]=\" + details.firstMeaningfulPaintTime);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onlargestcontentfulpaint12",
      children: "onLargestContentfulPaint12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["onLargestContentfulPaint(callback: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onlargestcontentfulpaintcallback12",
        children: "OnLargestContentfulPaintCallback"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置网页绘制页面最大内容回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onlargestcontentfulpaintcallback12",
              children: "OnLargestContentfulPaintCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页绘制页面最大内容度量信息的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onLargestContentfulPaint((details) => {\n          console.info(\"onLargestContentfulPaint: [navigationStartTime]= \" + details.navigationStartTime +\n            \", [largestImagePaintTime]=\" + details.largestImagePaintTime +\n            \", [largestTextPaintTime]=\" + details.largestTextPaintTime +\n            \", [largestImageLoadStartTime]=\" + details.largestImageLoadStartTime +\n            \", [largestImageLoadEndTime]=\" + details.largestImageLoadEndTime +\n            \", [imageBPP]=\" + details.imageBPP);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onloadintercept10",
      children: "onLoadIntercept10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onLoadIntercept(callback: Callback<OnLoadInterceptEvent, boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Web组件加载url之前触发该回调，用于判断是否阻止此次访问。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onloadinterceptevent12",
              children: "OnLoadInterceptEvent"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "导航触发时的回调包括iframe导航，在回调中可以选择允许或者取消此次导航。  返回值为boolean类型。返回true表示取消此次导航，false表示允许此次导航。  返回undefined或null时为false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onLoadIntercept((event) => {\n          console.info('url:' + event.data.getRequestUrl());\n          console.info('isMainFrame:' + event.data.isMainFrame());\n          console.info('isRedirect:' + event.data.isRedirect());\n          console.info('isRequestGesture:' + event.data.isRequestGesture());\n          return true;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onrequestselected",
      children: "onRequestSelected"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onRequestSelected(callback: () => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Web组件获取焦点时触发回调。如果组件在未获焦状态下加载网页并成功获取焦点，将触发两次回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当网页获取焦点时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onRequestSelected(() => {\n          console.info('onRequestSelected');\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onscreencapturerequest10",
      children: "onScreenCaptureRequest10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onScreenCaptureRequest(callback: Callback<OnScreenCaptureRequestEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知收到屏幕捕获请求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onscreencapturerequestevent12",
              children: "OnScreenCaptureRequestEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知收到屏幕捕获请求。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onScreenCaptureRequest((event) => {\n          if (event) {\n            this.uiContext.showAlertDialog({\n              title: 'title: ' + event.handler.getOrigin(),\n              message: 'text',\n              primaryButton: {\n                value: 'deny',\n                action: () => {\n                  event.handler.deny();\n                }\n              },\n              secondaryButton: {\n                value: 'onConfirm',\n                action: () => {\n                  event.handler.grant({ captureMode: WebCaptureMode.HOME_SCREEN });\n                }\n              },\n              cancel: () => {\n                event.handler.deny();\n              }\n            })\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onoverscroll10",
      children: "onOverScroll10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onOverScroll(callback: Callback<OnOverScrollEvent>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口在网页过度滚动时触发，用于通知网页过度滚动的偏移量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onoverscrollevent12",
              children: "OnOverScrollEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页过度滚动时触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onOverScroll((event) => {\n          console.info(\"x = \" + event.xOffset);\n          console.info(\"y = \" + event.yOffset);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oncontrollerattached10",
      children: "onControllerAttached10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onControllerAttached(callback: () => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Controller成功绑定到Web组件时触发该回调，并且该Controller必须为WebviewController，且禁止在该事件回调前调用Web组件相关的接口，否则会抛出js-error异常。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["因该回调调用时网页还未加载，无法在回调中使用有关操作网页的接口，例如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#zoomin",
        children: "zoomIn"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#zoomout",
        children: "zoomOut"
      }), "等，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#loadurl",
        children: "loadUrl"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#getwebid",
        children: "getWebId"
      }), "等操作网页不相关的接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["组件生命周期详情可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-event-sequence",
        children: "Web组件的生命周期"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当ArkWeb控制器初始化成功时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在该回调中使用loadUrl加载网页"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: '', controller: this.controller })\n        .onControllerAttached(() => {\n          this.controller.loadUrl($rawfile(\"index.html\"));\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在该回调中使用getWebId"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile(\"index.html\"), controller: this.controller })\n        .onControllerAttached(() => {\n          try {\n            let id = this.controller.getWebId();\n            console.info(\"id: \" + id);\n          } catch (error) {\n            let code = (error as BusinessError).code;\n            let message = (error as BusinessError).message;\n            console.error(`ErrorCode: ${code},  Message: ${message}`);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n    <body>\n        <p>Hello World</p>\n    </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onnavigationentrycommitted11",
      children: "onNavigationEntryCommitted11+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["onNavigationEntryCommitted(callback: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onnavigationentrycommittedcallback11",
        children: "OnNavigationEntryCommittedCallback"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当网页跳转提交时触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onnavigationentrycommittedcallback11",
              children: "OnNavigationEntryCommittedCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页跳转提交时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onNavigationEntryCommitted((details) => {\n          console.info(\"onNavigationEntryCommitted: [isMainFrame]= \" + details.isMainFrame +\n            \", [isSameDocument]=\" + details.isSameDocument +\n            \", [didReplaceEntry]=\" + details.didReplaceEntry +\n            \", [navigationType]=\" + details.navigationType +\n            \", [url]=\" + details.url);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onsafebrowsingcheckresult11",
      children: "onSafeBrowsingCheckResult11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onSafeBrowsingCheckResult(callback: OnSafeBrowsingCheckResultCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收到网站安全风险检查结果时触发的回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(58836)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要使用release包，debug包不生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开启未成年模式，设置网页内容拦截，触发回调。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onsafebrowsingcheckresultcallback11",
              children: "OnSafeBrowsingCheckResultCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收到网站安全风险检查结果时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onSafeBrowsingCheckResult((callback) => {\n          let json: ThreatType = JSON.parse(JSON.stringify(callback)).threatType;\n          console.info(\"onSafeBrowsingCheckResult: [threatType]= \" + json);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onsafebrowsingcheckfinish21",
      children: "onSafeBrowsingCheckFinish21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onSafeBrowsingCheckFinish(callback: OnSafeBrowsingCheckResultCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网站安全风险检查结束时触发的回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(97038)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要使用release包，debug包不生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开启未成年模式，设置网页内容拦截，触发回调。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onsafebrowsingcheckresultcallback11",
              children: "OnSafeBrowsingCheckResultCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收到网站安全风险检查结果时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onSafeBrowsingCheckFinish((callback) => {\n          let json: ThreatType = JSON.parse(JSON.stringify(callback)).threatType;\n          console.info(\"onSafeBrowsingCheckFinish: [threatType]= \" + json);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onnativeembedlifecyclechange11",
      children: "onNativeEmbedLifecycleChange11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onNativeEmbedLifecycleChange(callback: (event: NativeEmbedDataInfo) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当同层标签生命周期变化时触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(event: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#nativeembeddatainfo11",
              children: "NativeEmbedDataInfo"
            }), ") => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同层标签生命周期变化时触发该回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\n\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { webview } from '@kit.ArkWeb';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n    // API12新增：开启同层渲染BFCache开关\n    let features = new webview.BackForwardCacheSupportedFeatures();\n    features.nativeEmbed = true;\n    features.mediaTakeOver = true;\n    webview.WebviewController.enableBackForwardCache(features);\n    webview.WebviewController.initializeWebEngine();\n  }\n\n  onDestroy(): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n\n    windowStage.loadContent('pages/Index', (err) => {\n      if (err.code) {\n        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content.');\n    });\n  }\n\n  onWindowStageDestroy(): void {\n    // Main window is destroyed, release UI related resources\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');\n  }\n\n  onForeground(): void {\n    // Ability has brought to foreground\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');\n  }\n\n  onBackground(): void {\n    // Ability has back to background\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  @State embedStatus: string = '';\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      // 默认行为：点击按钮跳转页面，关闭index页面，使同层标签销毁。\n      // API12新增：使能同层渲染所在的页面支持BFCache后，点击按钮跳转页面，关闭index页面，使同层标签进入BFCache。\n      Button('Destroy')\n      .onClick(() => {\n        try {\n          this.controller.loadUrl(\"www.example.com\");\n        } catch (error) {\n          console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n        }\n      })\n\n      // API12新增：使能同层渲染所在的页面支持BFCache后，点击按钮返回页面，使同层标签离开BFCache。\n      Button('backward')\n      .onClick(() => {\n        try {\n          this.controller.backward();\n        } catch (error) {\n          console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n        }\n      })\n\n      // API12新增：使能同层渲染所在的页面支持BFCache后，点击按钮前进页面，使同层标签进入BFCache。\n      Button('forward')\n      .onClick(() => {\n        try {\n          this.controller.forward();\n        } catch (error) {\n          console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n        }\n      })\n\n\n      // API12新增同层标签进入离开BFCache状态：非http与https协议加载的网页，Web内核不支持进入BFCache;\n      // 因此如果要测试ENTER_BFCACHE/LEAVE_BFCACHE状态，需要将index.html放到Web服务器上，使用http或者https协议加载，如：\n      // Web({ src: \"http://xxxx/index.html\", controller: this.controller })\n      Web({ src: $rawfile(\"index.html\"), controller: this.controller })\n        .enableNativeEmbedMode(true)\n        .onNativeEmbedLifecycleChange((event) => {\n          // 当加载页面中有同层标签会触发Create。\n          if (event.status == NativeEmbedStatus.CREATE) {\n            this.embedStatus = 'Create';\n          }\n          // 当页面中同层标签移动或者缩放时会触发Update。\n          if (event.status == NativeEmbedStatus.UPDATE) {\n            this.embedStatus = 'Update';\n          }\n          // 退出页面时会触发Destroy。\n          if (event.status == NativeEmbedStatus.DESTROY) {\n            this.embedStatus = 'Destroy';\n          }\n          // 同层标签所在的页面进入BFCache时，会触发Enter BFCache。\n          if (event.status == NativeEmbedStatus.ENTER_BFCACHE) {\n            this.embedStatus = 'Enter BFCache';\n          }\n          // 同层标签所在的页面离开BFCache时，会触发Leave BFCache。\n          if (event.status == NativeEmbedStatus.LEAVE_BFCACHE) {\n            this.embedStatus = 'Leave BFCache';\n          }\n          console.info(\"status = \" + this.embedStatus);\n          console.info(\"surfaceId = \" + event.surfaceId);\n          console.info(\"embedId = \" + event.embedId);\n          if (event.info) {\n            console.info(\"id = \" + event.info.id);\n            console.info(\"type = \" + event.info.type);\n            console.info(\"src = \" + event.info.src);\n            console.info(\"width = \" + event.info.width);\n            console.info(\"height = \" + event.info.height);\n            console.info(\"url = \" + event.info.url);\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index.html-->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>同层渲染测试html</title>\n    <meta name=\"viewport\">\n</head>\n<body>\n<div>\n    <div id=\"bodyId\">\n        <embed id=\"nativeButton\" type = \"native/button\" width=\"800\" height=\"800\" src=\"test? params1=1\" style = \"background-color:red\"/>\n    </div>\n</div>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onnativeembedgestureevent11",
      children: "onNativeEmbedGestureEvent11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onNativeEmbedGestureEvent(callback: (event: NativeEmbedTouchInfo) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当手指触摸到同层标签时触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(event: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#nativeembedtouchinfo11",
              children: "NativeEmbedTouchInfo"
            }), ") => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手指触摸到同层标签时触发该回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { NodeController, BuilderNode, NodeRenderType, FrameNode, UIContext } from \"@kit.ArkUI\";\n\ndeclare class Params {\n  text: string;\n  width: number;\n  height: number;\n}\n\ndeclare class NodeControllerParams {\n  surfaceId: string;\n  renderType: NodeRenderType;\n  width: number;\n  height: number;\n}\n\nclass MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[Params]> | undefined | null;\n  private surfaceId_: string = \"\";\n  private renderType_: NodeRenderType = NodeRenderType.RENDER_TYPE_DISPLAY;\n  private width_: number = 0;\n  private height_: number = 0;\n\n  setRenderOption(params: NodeControllerParams) {\n    this.surfaceId_ = params.surfaceId;\n    this.renderType_ = params.renderType;\n    this.width_ = params.width;\n    this.height_ = params.height;\n  }\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new BuilderNode(uiContext, { surfaceId: this.surfaceId_, type: this.renderType_ });\n    this.rootNode.build(wrapBuilder(ButtonBuilder), { text: \"myButton\", width: this.width_, height: this.height_ });\n    return this.rootNode.getFrameNode();\n  }\n\n  postEvent(event: TouchEvent | undefined): boolean {\n    return this.rootNode?.postTouchEvent(event) as boolean;\n  }\n}\n\n@Component\nstruct ButtonComponent {\n  @Prop params: Params;\n  @State bkColor: Color = Color.Red;\n\n  build() {\n    Column() {\n      Button(this.params.text)\n        .height(50)\n        .width(200)\n        .border({ width: 2, color: Color.Red })\n        .backgroundColor(this.bkColor)\n\n    }\n    .width(this.params.width)\n    .height(this.params.height)\n  }\n}\n\n@Builder\nfunction ButtonBuilder(params: Params) {\n  ButtonComponent({ params: params })\n    .backgroundColor(Color.Green)\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  @State eventType: string = '';\n  controller: webview.WebviewController = new webview.WebviewController();\n  private nodeController: MyNodeController = new MyNodeController();\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Column() {\n      Stack() {\n        NodeContainer(this.nodeController)\n        Web({ src: $rawfile(\"index.html\"), controller: this.controller })\n          .enableNativeEmbedMode(true)\n          .onNativeEmbedLifecycleChange((embed) => {\n            if (embed.status == NativeEmbedStatus.CREATE) {\n              this.nodeController.setRenderOption({\n                surfaceId: embed.surfaceId as string,\n                renderType: NodeRenderType.RENDER_TYPE_TEXTURE,\n                width: this.uiContext!.px2vp(embed.info?.width),\n                height: this.uiContext!.px2vp(embed.info?.height)\n              });\n              this.nodeController.rebuild();\n            }\n          })\n          .onNativeEmbedGestureEvent((event) => {\n            if (event && event.touchEvent) {\n              if (event.touchEvent.type == TouchType.Down) {\n                this.eventType = 'Down'\n              }\n              if (event.touchEvent.type == TouchType.Up) {\n                this.eventType = 'Up'\n              }\n              if (event.touchEvent.type == TouchType.Move) {\n                this.eventType = 'Move'\n              }\n              if (event.touchEvent.type == TouchType.Cancel) {\n                this.eventType = 'Cancel'\n              }\n              let ret = this.nodeController.postEvent(event.touchEvent)\n              if (event.result) {\n                event.result.setGestureEventResult(ret, true);\n              }\n              console.info(\"embedId = \" + event.embedId);\n              console.info(\"touchType = \" + this.eventType);\n              console.info(\"x = \" + event.touchEvent.touches[0].x);\n              console.info(\"y = \" + event.touchEvent.touches[0].y);\n              console.info(\"Component globalPos:(\" + event.touchEvent.target.area.globalPosition.x + \",\" + event.touchEvent.target.area.globalPosition.y + \")\");\n              console.info(\"width = \" + event.touchEvent.target.area.width);\n              console.info(\"height = \" + event.touchEvent.target.area.height);\n            }\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index.html-->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>同层渲染测试html</title>\n    <meta name=\"viewport\">\n</head>\n<body>\n<div>\n    <div id=\"bodyId\">\n       <embed id=\"nativeButton\" type = \"native/button\" width=\"800\" height=\"800\" src=\"test?params1=1\" style = \"background-color:red\"/>\n    </div>\n</div>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onintelligenttrackingpreventionresult12",
      children: "onIntelligentTrackingPreventionResult12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onIntelligentTrackingPreventionResult(callback: OnIntelligentTrackingPreventionCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "智能防跟踪功能使能时，当追踪者cookie被拦截时触发该回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(817776)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要使用release包，debug包不生效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onintelligenttrackingpreventioncallback12",
              children: "OnIntelligentTrackingPreventionCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "智能防跟踪功能使能时，当追踪者cookie被拦截时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      // 需要打开智能防跟踪功能，才会触发onIntelligentTrackingPreventionResult回调\n      Button('enableIntelligentTrackingPrevention')\n        .onClick(() => {\n          try {\n            this.controller.enableIntelligentTrackingPrevention(true);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code}, Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onIntelligentTrackingPreventionResult((details) => {\n          console.info(\"onIntelligentTrackingPreventionResult: [websiteHost]= \" + details.host +\n            \", [trackerHost]=\" + details.trackerHost);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onoverrideurlloading12",
      children: "onOverrideUrlLoading12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onOverrideUrlLoading(callback: OnOverrideUrlLoadingCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当URL将要加载到当前Web中时触发该回调，让宿主应用程序有机会获得控制权，判断是否阻止Web加载URL。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(4115)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "POST请求不会触发该回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "iframe加载HTTP(s)协议或about:blank时不会触发该回调，而加载非HTTP(s)协议的跳转会触发；调用loadUrl(url: string)主动触发的跳转不会触发该回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不要在回调中使用相同的URL调用loadUrl(url: string)方法，然后返回true。 这样会不必要地中止当前加载，并用相同的URL发起一次新的加载。 要继续加载当前请求URL的正确做法是直接返回false，而不是调用loadUrl(url: string)。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onoverrideurlloadingcallback12",
              children: "OnOverrideUrlLoadingCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "onOverrideUrlLoading的回调。  返回值boolean。返回true表示中止加载URL，返回false表示继续在Web中加载URL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile(\"index.html\"), controller: this.controller })\n        .onOverrideUrlLoading((webResourceRequest: WebResourceRequest) => {\n          if (webResourceRequest && webResourceRequest.getRequestUrl() == \"about:blank\") {\n            return true;\n          }\n          return false;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index.html-->\n<!DOCTYPE html>\n<html>\n<head>\n  <title>测试网页</title>\n</head>\n<body>\n  <h1>onOverrideUrlLoading Demo</h1>\n  <a href=\"about:blank\">Click here</a>// 访问about:blank。\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onviewportfitchanged12",
      children: "onViewportFitChanged12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onViewportFitChanged(callback: OnViewportFitChangedCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页meta中viewport-fit配置项更改时触发该回调，应用可在此回调中自适应布局视口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onviewportfitchangedcallback12",
              children: "OnViewportFitChangedCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网页meta中viewport-fit配置项更改时触发的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onViewportFitChanged((data) => {\n          let jsonData = JSON.stringify(data);\n          let viewportFit: ViewportFit = JSON.parse(jsonData).viewportFit;\n          if (viewportFit === ViewportFit.COVER) {\n            // index.html网页支持沉浸式布局，可调用expandSafeArea调整web控件布局视口覆盖避让区域(状态栏或导航条)。\n          } else if (viewportFit === ViewportFit.CONTAINS) {\n            // index.html网页不支持沉浸式布局，可调用expandSafeArea调整web控件布局视口为安全区域。\n          } else {\n            // 默认值，可不作处理。\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"width=device-width,viewport-fit=cover\">\n  </head>\n  <body>\n    <div style=\"position: absolute; bottom: 0; margin-bottom: env(safe-area-inset-bottom)\"></div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oninterceptkeyboardattach12",
      children: "onInterceptKeyboardAttach12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onInterceptKeyboardAttach(callback: WebKeyboardCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网页中可编辑元素（如input标签）拉起软键盘之前会回调该接口，应用可以使用该接口拦截系统软键盘的弹出，配置应用定制的软键盘（应用根据该接口可以决定使用系统默认软键盘/定制enter键的系统软键盘/全部由应用自定义的软键盘）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#webkeyboardcallback12",
              children: "WebKeyboardCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拦截网页拉起软键盘回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { inputMethodEngine } from '@kit.IMEKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  webKeyboardController: WebKeyboardController = new WebKeyboardController()\n  inputAttributeMap: Map<string, number> = new Map([\n      ['UNSPECIFIED', inputMethodEngine.ENTER_KEY_TYPE_UNSPECIFIED],\n      ['GO', inputMethodEngine.ENTER_KEY_TYPE_GO],\n      ['SEARCH', inputMethodEngine.ENTER_KEY_TYPE_SEARCH],\n      ['SEND', inputMethodEngine.ENTER_KEY_TYPE_SEND],\n      ['NEXT', inputMethodEngine.ENTER_KEY_TYPE_NEXT],\n      ['DONE', inputMethodEngine.ENTER_KEY_TYPE_DONE],\n      ['PREVIOUS', inputMethodEngine.ENTER_KEY_TYPE_PREVIOUS]\n    ])\n\n    /**\n     * 自定义键盘组件Builder\n     */\n    @Builder\n    customKeyboardBuilder() {\n        // 这里实现自定义键盘组件，对接WebKeyboardController实现输入、删除、关闭等操作。\n      Row() {\n        Text(\"完成\")\n          .fontSize(20)\n          .fontColor(Color.Blue)\n          .onClick(() => {\n            this.webKeyboardController.close();\n          })\n        // 插入字符。\n        Button(\"insertText\").onClick(() => {\n          this.webKeyboardController.insertText('insert ');\n        }).margin({\n          bottom: 200,\n        })\n        // 从后往前删除length参数指定长度的字符。\n        Button(\"deleteForward\").onClick(() => {\n          this.webKeyboardController.deleteForward(1);\n        }).margin({\n          bottom: 200,\n        })\n        // 从前往后删除length参数指定长度的字符。\n        Button(\"deleteBackward\").onClick(() => {\n          this.webKeyboardController.deleteBackward(1);\n        }).margin({\n          left: -220,\n        })\n        // 插入功能按键。\n        Button(\"sendFunctionKey\").onClick(() => {\n          this.webKeyboardController.sendFunctionKey(6);\n        })\n      }\n    }\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n      .onInterceptKeyboardAttach((KeyboardCallbackInfo) => {\n        // option初始化，默认使用系统默认键盘\n        let option: WebKeyboardOptions = {\n          useSystemKeyboard: true,\n        };\n        if (!KeyboardCallbackInfo) {\n          return option;\n        }\n\n        // 保存WebKeyboardController，使用自定义键盘时候，需要使用该handler控制输入、删除、软键盘关闭等行为\n        this.webKeyboardController = KeyboardCallbackInfo.controller\n        let attributes: Record<string, string> = KeyboardCallbackInfo.attributes\n        // 遍历attributes\n        let attributeKeys = Object.keys(attributes)\n        for (let i = 0; i < attributeKeys.length; i++) {\n          console.info('WebCustomKeyboard key = ' + attributeKeys[i] + ', value = ' + attributes[attributeKeys[i]])\n        }\n\n        if (attributes) {\n          if (attributes['data-keyboard'] == 'customKeyboard') {\n            // 根据html可编辑元素的属性，判断使用不同的软键盘，例如这里如果属性包含有data-keyboard，且值为customKeyboard，则使用自定义键盘\n            console.info('WebCustomKeyboard use custom keyboard')\n            option.useSystemKeyboard = false;\n            // 设置自定义键盘builder\n            option.customKeyboard = () => {\n              this.customKeyboardBuilder()\n            }\n            return option;\n          }\n\n          if (attributes['keyboard-return'] != undefined) {\n            // 根据html可编辑元素的属性，判断使用不同的软键盘，例如这里如果属性包含有keyboard-return，使用系统键盘，并且指定系统软键盘enterKey类型\n            option.useSystemKeyboard = true;\n            let enterKeyType: number | undefined = this.inputAttributeMap.get(attributes['keyboard-return'])\n            if (enterKeyType != undefined) {\n              option.enterKeyType = enterKeyType\n            }\n            return option;\n          }\n        }\n\n        return option;\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n  <!DOCTYPE html>\n  <html>\n\n  <head>\n      <meta charset=\"utf-8\">\n      <meta name=\"viewport\" content=\"width=device-width,minimum-scale=1.0,maximum-scale=1.0\">\n  </head>\n\n  <body>\n\n  <p style=\"font-size:12px\">input标签，原有默认行为：</p>\n  <input type=\"text\" style=\"width: 300px; height: 20px\"><br>\n  <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n  <p style=\"font-size:12px\">input标签，系统键盘自定义enterKeyType属性 enter key UNSPECIFIED：</p>\n  <input type=\"text\" keyboard-return=\"UNSPECIFIED\" style=\"width: 300px; height: 20px\"><br>\n  <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n  <p style=\"font-size:12px\">input标签，系统键盘自定义enterKeyType属性 enter key GO：</p>\n  <input type=\"text\" keyboard-return=\"GO\" style=\"width: 300px; height: 20px\"><br>\n  <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n  <p style=\"font-size:12px\">input标签，系统键盘自定义enterKeyType属性 enter key SEARCH：</p>\n  <input type=\"text\" keyboard-return=\"SEARCH\" style=\"width: 300px; height: 20px\"><br>\n  <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n  <p style=\"font-size:12px\">input标签，系统键盘自定义enterKeyType属性 enter key SEND：</p>\n  <input type=\"text\" keyboard-return=\"SEND\" style=\"width: 300px; height: 20px\"><br>\n  <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n  <p style=\"font-size:12px\">input标签，系统键盘自定义enterKeyType属性 enter key NEXT：</p>\n  <input type=\"text\" keyboard-return=\"NEXT\" style=\"width: 300px; height: 20px\"><br>\n  <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n  <p style=\"font-size:12px\">input标签，系统键盘自定义enterKeyType属性 enter key DONE：</p>\n  <input type=\"text\" keyboard-return=\"DONE\" style=\"width: 300px; height: 20px\"><br>\n  <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n  <p style=\"font-size:12px\">input标签，系统键盘自定义enterKeyType属性 enter key PREVIOUS：</p>\n  <input type=\"text\" keyboard-return=\"PREVIOUS\" style=\"width: 300px; height: 20px\"><br>\n  <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n  <p style=\"font-size:12px\">input标签，应用自定义键盘：</p>\n  <input type=\"text\" data-keyboard=\"customKeyboard\" style=\"width: 300px; height: 20px\"><br>\n\n  </body>\n\n  </html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onnativeembedvisibilitychange12",
      children: "onNativeEmbedVisibilityChange12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onNativeEmbedVisibilityChange(callback: OnNativeEmbedVisibilityChangeCallback)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当网页中同层标签（例如", (0,jsx_runtime.jsx)(_components.embed, {}), "标签或", (0,jsx_runtime.jsxs)(_components.object, {
        children: ["标签）在视口内的可见性发生变化时，将触发该回调。同层标签默认不可见，若在页面首次加载时已可见，则会上报；若不可见，则不会上报。同层标签全部不可见才视为不可见，部分可见或全部可见则视为可见。若要获取因同层标签CSS属性（包括visibility、display以及尺寸变化）导致的可见状态变化，需配置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#nativeembedoptions16",
          children: "nativeEmbedOptions"
        }), "，并将", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#embedoptions16",
          children: "EmbedOptions"
        }), "中的supportCssDisplayChange参数设为true。", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onnativeembedvisibilitychangecallback12",
                  children: "OnNativeEmbedVisibilityChangeCallback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "同层标签可见性变化时触发该回调。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { NodeController, BuilderNode, NodeRenderType, FrameNode, UIContext } from \"@kit.ArkUI\";\n\ndeclare class Params {\n  text: string;\n  width: number;\n  height: number;\n}\n\ndeclare class NodeControllerParams {\n  surfaceId: string;\n  renderType: NodeRenderType;\n  width: number;\n  height: number;\n}\n\nclass MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[Params]> | undefined | null;\n  private surfaceId_: string = \"\";\n  private renderType_: NodeRenderType = NodeRenderType.RENDER_TYPE_DISPLAY;\n  private width_: number = 0;\n  private height_: number = 0;\n\n  setRenderOption(params: NodeControllerParams) {\n    this.surfaceId_ = params.surfaceId;\n    this.renderType_ = params.renderType;\n    this.width_ = params.width;\n    this.height_ = params.height;\n  }\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new BuilderNode(uiContext, { surfaceId: this.surfaceId_, type: this.renderType_ });\n    this.rootNode.build(wrapBuilder(ButtonBuilder), { text: \"myButton\", width: this.width_, height: this.height_ });\n    return this.rootNode.getFrameNode();\n  }\n\n  postEvent(event: TouchEvent | undefined): boolean {\n    return this.rootNode?.postTouchEvent(event) as boolean;\n  }\n}\n\n@Component\nstruct ButtonComponent {\n  @Prop params: Params;\n  @State bkColor: Color = Color.Red;\n\n  build() {\n    Column() {\n      Button(this.params.text)\n        .height(50)\n        .width(200)\n        .border({ width: 2, color: Color.Red })\n        .backgroundColor(this.bkColor)\n\n    }\n    .width(this.params.width)\n    .height(this.params.height)\n  }\n}\n\n@Builder\nfunction ButtonBuilder(params: Params) {\n  ButtonComponent({ params: params })\n    .backgroundColor(Color.Green)\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  @State embedVisibility: string = '';\n  controller: webview.WebviewController = new webview.WebviewController();\n  private nodeController: MyNodeController = new MyNodeController();\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Column() {\n      Stack() {\n        NodeContainer(this.nodeController)\n        Web({ src: $rawfile(\"index.html\"), controller: this.controller })\n          .enableNativeEmbedMode(true)\n          .onNativeEmbedLifecycleChange((embed) => {\n            if (embed.status == NativeEmbedStatus.CREATE) {\n              this.nodeController.setRenderOption({\n                surfaceId: embed.surfaceId as string,\n                renderType: NodeRenderType.RENDER_TYPE_TEXTURE,\n                width: this.uiContext!.px2vp(embed.info?.width),\n                height: this.uiContext!.px2vp(embed.info?.height)\n              });\n              this.nodeController.rebuild();\n            }\n          })\n          .onNativeEmbedVisibilityChange((embed) => {\n            if (embed.visibility) {\n              this.embedVisibility = 'Visible';\n            } else {\n              this.embedVisibility = 'Hidden';\n            }\n            console.info(\"embedId = \" + embed.embedId);\n            console.info(\"visibility = \" + embed.visibility);\n          })\n      }\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的html文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>同层渲染测试html</title>\n    <meta name=\"viewport\">\n</head>\n<body>\n<div>\n    <div id=\"bodyId\">\n        <embed id=\"nativeButton\" type = \"native/button\" width=\"800\" height=\"800\" src=\"test?params1=1\" style = \"background-color:red\"/>\n    </div>\n</div>\n</body>\n</html>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "onnativeembedmouseevent20",
          children: "onNativeEmbedMouseEvent20+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onNativeEmbedMouseEvent(callback: MouseInfoCallback)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在同层标签上执行以下行为时触发该回调："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用鼠标左键、中键、右键进行点击或长按。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用触摸板进行对应鼠标左键、中键、右键点击长按的操作。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#mouseinfocallback20",
                  children: "MouseInfoCallback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当鼠标/触摸板点击到同层标签时触发该回调。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { NodeController, BuilderNode, NodeRenderType, FrameNode, UIContext } from \"@kit.ArkUI\";\n\ndeclare class Params {\n  text: string;\n  width: number;\n  height: number;\n}\n\ndeclare class NodeControllerParams {\n  surfaceId: string;\n  renderType: NodeRenderType;\n  width: number;\n  height: number;\n}\n\nclass MyNodeController extends NodeController {\n  private rootNode: BuilderNode<[Params]> | undefined | null;\n  private surfaceId_: string = \"\";\n  private renderType_: NodeRenderType = NodeRenderType.RENDER_TYPE_DISPLAY;\n  private width_: number = 0;\n  private height_: number = 0;\n\n  setRenderOption(params: NodeControllerParams) {\n    this.surfaceId_ = params.surfaceId;\n    this.renderType_ = params.renderType;\n    this.width_ = params.width;\n    this.height_ = params.height;\n  }\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.rootNode = new BuilderNode(uiContext, { surfaceId: this.surfaceId_, type: this.renderType_ });\n    this.rootNode.build(wrapBuilder(ButtonBuilder), { text: \"myButton\", width: this.width_, height: this.height_ });\n    return this.rootNode.getFrameNode();\n  }\n\n  postInputEvent(event: TouchEvent | MouseEvent | undefined): boolean {\n    return this.rootNode?.postInputEvent(event) as boolean;\n  }\n}\n\n@Component\nstruct ButtonComponent {\n  @Prop params: Params;\n  @State bkColor: Color = Color.Red;\n\n  build() {\n    Column() {\n      Button(this.params.text)\n        .height(50)\n        .width(200)\n        .border({ width: 2, color: Color.Red })\n        .backgroundColor(this.bkColor)\n\n    }\n    .width(this.params.width)\n    .height(this.params.height)\n  }\n}\n\n@Builder\nfunction ButtonBuilder(params: Params) {\n  ButtonComponent({ params: params })\n    .backgroundColor(Color.Green)\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  @State mouseAction: string = '';\n  @State mouseButton: string = '';\n  controller: webview.WebviewController = new webview.WebviewController();\n  private nodeController: MyNodeController = new MyNodeController();\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Column() {\n      Stack() {\n        NodeContainer(this.nodeController)\n        Web({ src: $rawfile(\"index.html\"), controller: this.controller })\n          .enableNativeEmbedMode(true)\n          .onNativeEmbedLifecycleChange((embed) => {\n            if (embed.status == NativeEmbedStatus.CREATE) {\n              this.nodeController.setRenderOption({\n                surfaceId: embed.surfaceId as string,\n                renderType: NodeRenderType.RENDER_TYPE_TEXTURE,\n                width: this.uiContext!.px2vp(embed.info?.width),\n                height: this.uiContext!.px2vp(embed.info?.height)\n              });\n              this.nodeController.rebuild();\n            }\n          })\n          .onNativeEmbedMouseEvent((event) => {\n            if (event && event.mouseEvent) {\n              let ret = this.nodeController.postInputEvent(event.mouseEvent)\n              if (event.result) {\n                event.result.setMouseEventResult(ret, true);\n              }\n            }\n          })\n      }\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的html文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!--index.html-->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>同层渲染测试</title>\n    <meta name=\"viewport\">\n</head>\n<body>\n<div>\n    <div id=\"bodyId\">\n        <embed id=\"nativeButton\" type =\"native/button\" width=\"800\" height=\"800\" style=\"background-color:red\"/>\n    </div>\n</div>\n</body>\n</html>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "onnativeembedobjectparamchange21",
          children: "onNativeEmbedObjectParamChange21+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onNativeEmbedObjectParamChange(callback: OnNativeEmbedObjectParamChangeCallback)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当同层渲染object标签内嵌param元素变化时触发此回调。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onnativeembedobjectparamchangecallback21",
                  children: "OnNativeEmbedObjectParamChangeCallback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "增加、修改或删除同层渲染object标签内嵌param元素时触发此回调。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  // xxx.ets\n  import { webview } from '@kit.ArkWeb';\n  import { NodeController, BuilderNode, NodeRenderType, FrameNode, UIContext } from '@kit.ArkUI';\n\n  declare class Params {\n    text: string;\n    width: number;\n    height: number;\n  }\n\n  declare class NodeControllerParams {\n    surfaceId: string;\n    renderType: NodeRenderType;\n    width: number;\n    height: number;\n  }\n\n  class MyNodeController extends NodeController {\n    private rootNode: BuilderNode<[Params]> | undefined | null;\n    private surfaceId_: string = \"\";\n    private renderType_: NodeRenderType = NodeRenderType.RENDER_TYPE_DISPLAY;\n    private width_: number = 0;\n    private height_: number = 0;\n\n    setRenderOption(params: NodeControllerParams) {\n      this.surfaceId_ = params.surfaceId;\n      this.renderType_ = params.renderType;\n      this.width_ = params.width;\n      this.height_ = params.height;\n    }\n\n    makeNode(uiContext: UIContext): FrameNode | null {\n      this.rootNode = new BuilderNode(uiContext, { surfaceId: this.surfaceId_, type: this.renderType_ });\n      this.rootNode.build(wrapBuilder(ButtonBuilder), { text: \"myButton\", width: this.width_, height: this.height_ });\n      return this.rootNode.getFrameNode();\n    }\n\n    postInputEvent(event: TouchEvent | MouseEvent | undefined): boolean {\n      return this.rootNode?.postInputEvent(event) as boolean;\n    }\n  }\n\n  @Component\n  struct ButtonComponent {\n    @Prop params: Params;\n    @State bkColor: Color = Color.Red;\n\n    build() {\n      Column() {\n        Button(this.params.text)\n          .height(50)\n          .width(200)\n          .border({ width: 2, color: Color.Red })\n          .backgroundColor(this.bkColor)\n\n      }\n      .width(this.params.width)\n      .height(this.params.height)\n    }\n  }\n\n  @Builder\n  function ButtonBuilder(params: Params) {\n    ButtonComponent({ params: params })\n      .backgroundColor(Color.Green)\n  }\n\n  @Entry\n  @Component\n  struct WebComponent {\n    controller: webview.WebviewController = new webview.WebviewController();\n    private nodeController: MyNodeController = new MyNodeController();\n    uiContext: UIContext = this.getUIContext();\n\n    build() {\n      Column() {\n        Stack() {\n          NodeContainer(this.nodeController)\n          Web({ src: $rawfile('index.html'), controller: this.controller })\n            .enableNativeEmbedMode(true)\n            .registerNativeEmbedRule(\"object\", \"native\")\n            .onNativeEmbedLifecycleChange((embed) => {\n              if (embed.status == NativeEmbedStatus.CREATE) {\n                this.nodeController.setRenderOption({\n                  surfaceId: embed.surfaceId as string,\n                  renderType: NodeRenderType.RENDER_TYPE_TEXTURE,\n                  width: this.uiContext!.px2vp(embed.info?.width),\n                  height: this.uiContext!.px2vp(embed.info?.height)\n                });\n                this.nodeController.rebuild();\n              }\n            })\n            .onNativeEmbedObjectParamChange((event) => {\n              console.info(\"embed id: \" + event.embedId);\n              let paramItems = event.paramItems;\n              if (paramItems) {\n                for (let i = 0; i < paramItems.length; ++i) {\n                  console.info(\"param info: \" + JSON.stringify(paramItems[i]));\n                }\n              }\n            })\n        }\n      }\n    }\n  }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的html文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!--index.html-->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>同层渲染测试</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n<body>\n<div>\n    <div id=\"bodyId\">\n        <object id=\"nativeButton\" type =\"native/button\" width=\"300\" height=\"300\" style=\"background-color:red\">\n          <param id=\"param-1\" name=\"name-1\" value=\"value1\"/>\n        </object>\n    </div>\n</div>\n</body>\n</html>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "onoverrideerrorpage20",
          children: "onOverrideErrorPage20+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onOverrideErrorPage(callback: OnOverrideErrorPageCallback)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "网页加载遇到错误时触发，只有主资源出错才会回调该接口，可以使用该接口自定义错误展示页。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(527588)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该功能需通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#seterrorpageenabled20",
            children: "setErrorPageEnabled"
          }), "接口启用默认错误页后，才会生效。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webresourceerror/arkts-basic-components-web-webresourceerror#geterrorcode",
            children: "errorPageEvent.error.getErrorCode()"
          }), "获取的错误码大于0代表http协议错误，小于0代表网络错误。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onoverrideerrorpagecallback20",
                  children: "OnOverrideErrorPageCallback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "网页加载遇到错误时触发。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  build() {\n    Column() {\n      Web({ src: \"www.error-test.com\", controller: this.controller })\n       .onControllerAttached(() => {\n            this.controller.setErrorPageEnabled(true);\n            if (!this.controller.getErrorPageEnabled()) {\n                this.controller.setErrorPageEnabled(true);\n            }\n        })\n        .onOverrideErrorPage(event => {\n              let htmlStr = \"<html><h1>error occur : \";\n              htmlStr += event.error.getErrorCode();\n              htmlStr += \"</h1></html>\";\n              return htmlStr;\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "onsslerrorreceivedeprecated",
          children: "onSslErrorReceive(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onSslErrorReceive(callback: (event?: { handler: Function, error: object }) => void)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通知用户加载资源时发生SSL错误。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(828121)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 8开始支持，从API version 9开始废弃。建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#onsslerroreventreceive9",
            children: "onSslErrorEventReceive9+"
          }), "替代。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "(event?: { handler: Function, error: object }) => void"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当网页检测到SSL错误时触发的回调。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "onfileselectorshowdeprecated",
          children: "onFileSelectorShow(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onFileSelectorShow(callback: (event?: { callback: Function, fileSelector: object }) => void)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用此函数以处理具有“文件”输入类型的HTML表单，以响应用户按下的“选择文件”按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(249646)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 8开始支持，从API version 9开始废弃。建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#onshowfileselector9",
            children: "onShowFileSelector9+"
          }), "替代。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "(event?: { callback: Function, fileSelector: object }) => void"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当触发文件选择器时需要执行的回调。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "onurlloadinterceptdeprecated",
          children: "onUrlLoadIntercept(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onUrlLoadIntercept(callback: (event?: { data:string | WebResourceRequest }) => boolean)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当Web组件加载url之前触发该回调，用于判断是否阻止此次访问。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(983876)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["API version 8开始支持，从API version 10开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#onloadintercept10",
            children: "onLoadIntercept10+"
          }), "代替。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "(event?: { data:string"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-webresourcerequest/arkts-basic-components-web-webresourcerequest",
                  children: "WebResourceRequest"
                }), " }) => boolean"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onUrlLoadIntercept((event) => {\n          if (event) {\n            console.info('onUrlLoadIntercept ' + event.data.toString());\n          }\n          return true\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "onpdfloadevent20",
          children: "onPdfLoadEvent20+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onPdfLoadEvent(callback: Callback<OnPdfLoadEvent>)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通知用户PDF页面加载状态，包括成功或失败。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onpdfloadevent20",
                  children: "OnPdfLoadEvent"
                }), ">"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当PDF加载成功或失败时，会触发回调，通知用户PDF页面加载状态。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      // 使用时需将'https://www.example.com/xxx.pdf'替换为真实可访问的地址\n      Web({ src: 'https://www.example.com/xxx.pdf', controller: this.controller })\n        .onPdfLoadEvent((eventInfo: OnPdfLoadEvent) => {\n          console.info(`Load event callback called. url: ${eventInfo.url}, result: ${eventInfo.result}.`)\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "onpdfscrollatbottom20",
          children: "onPdfScrollAtBottom20+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onPdfScrollAtBottom(callback: Callback<OnPdfScrollEvent>)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通知用户PDF页面已滚动到底。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onpdfscrollevent20",
                  children: "OnPdfScrollEvent"
                }), ">"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当PDF滚动到垂直方向底部时，会触发回调，通知用户PDF页面已滚动到底。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      // 使用时需将'https://www.example.com/xxx.pdf'替换为真实可访问的地址\n      Web({ src: 'https://www.example.com/xxx.pdf', controller: this.controller })\n        .onPdfScrollAtBottom((eventInfo: OnPdfScrollEvent) => {\n          console.info(`Scroll at bottom callback called. url: ${eventInfo.url}.`)\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "ondetectedblankscreen22",
          children: "onDetectedBlankScreen22+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onDetectedBlankScreen(callback: OnDetectBlankScreenCallback)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Web组件检测到白屏时触发此回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(736392)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["需配合", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#blankscreendetectionconfig22",
              children: "blankScreenDetectionConfig"
            }), "使用。否则，默认关闭白屏检测功能，不会返回检测到白屏时的回调函数。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#ondetectblankscreencallback22",
                  children: "OnDetectBlankScreenCallback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Web组件检测到白屏时的回调函数。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// onDetectedBlankScreen.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .blankScreenDetectionConfig({\n          enable: true,\n          detectionTiming: [2, 4, 6, 8],\n          contentfulNodesCountThreshold: 4,\n          detectionMethods:[BlankScreenDetectionMethod.DETECTION_CONTENTFUL_NODES_SEVENTEEN]\n        })\n        .onDetectedBlankScreen((event: BlankScreenDetectionEventInfo)=>{\n          console.info(`Found blank screen on ${event.url}.`);\n          console.info(`The blank screen reason is ${event.blankScreenReason}.`);\n          console.info(`The blank screen detail is ${event.blankScreenDetails?.detectedContentfulNodesCount}.`);\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "onrenderexiteddeprecated",
          children: "onRenderExited(deprecated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onRenderExited(callback: (event?: { detail: object }) => boolean)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用渲染进程因错误或崩溃退出时触发回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多个Web组件可能共享单个渲染进程，每个受影响的Web组件都会触发该回调。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用处理该回调时，可以调用绑定的WebViewController接口来恢复页面。例如", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#refresh",
            children: "refresh"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#loadurl",
            children: "loadUrl"
          }), "等。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详情可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkweb/web-event-sequence",
            children: "Web组件的生命周期"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(475127)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 8开始支持，从API version 9开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#onrenderexited9",
            children: "onRenderExited9+"
          }), "代替。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "(event?: { detail: object }) => boolean"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "渲染过程退出时触发。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "oncameracapturestatechange23",
          children: "onCameraCaptureStateChange23+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onCameraCaptureStateChange(callback: OnCameraCaptureStateChangeCallback)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通知用户当前网页的摄像头状态，摄像头有三个状态，无状态（None），捕获中（Active），暂停中（Paused）。使用callback异步回调。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以通过startCamera，stopCamera，closeCamera这三个接口来切换摄像头的状态。这三个接口分别对应开启，暂停，停止摄像头功能。示例使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#startcamera12",
            children: "startCamera"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(35930)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前网页正在使用摄像头时，返回在捕获中状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前网页暂停使用摄像头时，返回暂停中状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前网页完全没有使用摄像头时，返回无状态。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#oncameracapturestatechangecallback23",
                  children: "OnCameraCaptureStateChangeCallback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "回调函数。当摄像头捕获状态改变时触发该回调，返回原来的状态和改变后的状态。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { abilityAccessCtrl, PermissionRequestResult, common } from '@kit.AbilityKit';\n\nlet atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  aboutToAppear(): void {\n    let context: Context | undefined = this.uiContext.getHostContext() as common.UIAbilityContext;\n    atManager.requestPermissionsFromUser(context, ['ohos.permission.CAMERA'], (err: BusinessError, data: PermissionRequestResult) => {\n      console.info('data:' + JSON.stringify(data));\n      console.info('data permissions:' + data.permissions);\n      console.info('data authResults:' + data.authResults);\n    })\n  }\n\n  build() {\n    Column() {\n      Button(\"startCamera\").onClick(() => {\n        try {\n          this.controller.startCamera();\n        } catch (error) {\n          console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n        }\n      })\n      Button(\"stopCamera\").onClick(() => {\n        try {\n          this.controller.stopCamera();\n        } catch (error) {\n          console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n        }\n      })\n      Button(\"closeCamera\").onClick(() => {\n        try {\n          this.controller.closeCamera();\n        } catch (error) {\n          console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n        }\n      })\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onPermissionRequest((event) => {\n          if (event) {\n            this.uiContext.showAlertDialog({\n              title: 'title',\n              message: 'text',\n              primaryButton: {\n                value: 'deny',\n                action: () => {\n                  event.request.deny();\n                }\n              },\n              secondaryButton: {\n                value: 'onConfirm',\n                action: () => {\n                  event.request.grant(event.request.getAccessibleResource());\n                }\n              },\n              cancel: () => {\n                event.request.deny();\n              }\n            })\n          }\n        })\n       .onCameraCaptureStateChange((event: CameraCaptureStateChangeInfo) => {\n          console.info(\"CameraCapture from \", event.originalState, \" to \", event.newState);\n       })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的html文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n <head>\n   <meta charset=\"UTF-8\">\n </head>\n <body>\n   <video id=\"video\" width=\"400px\" height=\"400px\" autoplay=\"autoplay\">\n   </video>\n   <input type=\"button\" title=\"HTML5摄像头\" value=\"开启摄像头\" onclick=\"getMedia()\" />\n   <script>\n     function getMedia() {\n       let constraints = {\n         video: {\n           width: 500,\n           height: 500\n         },\n         audio: true\n       }\n       let video = document.getElementById(\"video\");\n       let promise = navigator.mediaDevices.getUserMedia(constraints);\n       promise.then(function(MediaStream) {\n         video.srcObject = MediaStream;\n         video.play();\n       })\n     }\n   </script>\n </body>\n</html>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "onmicrophonecapturestatechange23",
          children: "onMicrophoneCaptureStateChange23+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onMicrophoneCaptureStateChange(callback: OnMicrophoneCaptureStateChangeCallback)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通知用户当前网页中麦克风状态，麦克风有三个状态，未工作（None），捕获中（Active），暂停中（Paused）。使用callback异步回调。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以通过resumeMicrophone，pauseMicrophone，stopMicrophone这三个接口来切换麦克风的状态。这三个接口功能分别对应解除暂停，暂停，停止麦克风。示例使用场景详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#resumemicrophone23",
            children: "网页中麦克风的使用"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(514046)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前网页正在使用麦克风时，返回捕获中状态；当前网页暂停使用麦克风时，返回暂停中状态；当前网页完全没有使用麦克风时，返回未工作状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前麦克风处于捕获中状态时，设置暂停使用，当前麦克风变为暂停中状态。可通过ArkWeb设置麦克风开始使用状态进行恢复捕捉。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前麦克风处于捕获中状态时，设置停止使用，当前麦克风停止捕捉，麦克风变为未工作状态。除非重新前端开始捕捉，否则无法恢复。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前麦克风处于暂停中状态时，设置开始使用，当前麦克风继续捕捉，变为捕获中状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前麦克风处于暂停中状态时，设置停止使用，当前麦克风停止捕捉，变为未工作状态。除非重新前端开始捕捉，否则无法恢复。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前麦克风处于未工作状态时，设置开始使用以及暂停使用，麦克风状态均不发生变化。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onmicrophonecapturestatechangecallback23",
                  children: "OnMicrophoneCaptureStateChangeCallback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "回调函数。当麦克风捕获状态改变时触发该回调，返回原来的状态和改变后的状态。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { abilityAccessCtrl, PermissionRequestResult, common } from '@kit.AbilityKit';\n\nlet atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  aboutToAppear(): void {\n    let context: Context | undefined = this.uiContext.getHostContext() as common.UIAbilityContext;\n    atManager.requestPermissionsFromUser(context, ['ohos.permission.MICROPHONE'], (err: BusinessError, data: PermissionRequestResult) => {\n      console.info('data:' + JSON.stringify(data));\n      console.info('data permissions:' + data.permissions);\n      console.info('data authResults:' + data.authResults);\n    })\n  }\n\n  build() {\n    Column() {\n      Button(\"resumeMicrophone\").onClick(() => {\n        try {\n          this.controller.resumeMicrophone();\n        } catch (error) {\n          console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n        }\n      })\n      Button(\"pauseMicrophone\").onClick(() => {\n        try {\n          this.controller.pauseMicrophone();\n        } catch (error) {\n          console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n        }\n      })\n      Button(\"stopMicrophone\").onClick(() => {\n        try {\n          this.controller.stopMicrophone();\n        } catch (error) {\n          console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n        }\n      })\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onPermissionRequest((event) => {\n          if (event) {\n            this.uiContext.showAlertDialog({\n              title: 'title',\n              message: 'text',\n              primaryButton: {\n                value: 'deny',\n                action: () => {\n                  event.request.deny();\n                }\n              },\n              secondaryButton: {\n                value: 'onConfirm',\n                action: () => {\n                  event.request.grant(event.request.getAccessibleResource());\n                }\n              },\n              cancel: () => {\n                event.request.deny();\n              }\n            })\n          }\n        })\n        .onMicrophoneCaptureStateChange((event: MicrophoneCaptureStateChangeInfo) => {\n          console.info(\"MicrophoneCapture from \", event.originalState, \" to \", event.newState);\n      })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的html文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n <head>\n   <meta charset=\"UTF-8\">\n </head>\n <body>\n   <video id=\"video\" width=\"400px\" height=\"400px\" autoplay=\"autoplay\">\n   </video>\n   <input type=\"button\" title=\"HTML5麦克风\" value=\"开启麦克风\" onclick=\"getMedia()\" />\n   <script>\n     function getMedia() {\n       let constraints = {\n         video: {\n           width: 500,\n           height: 500\n         },\n         audio: true\n       }\n       let video = document.getElementById(\"video\");\n       let promise = navigator.mediaDevices.getUserMedia(constraints);\n       promise.then(function(MediaStream) {\n         video.srcObject = MediaStream;\n         video.play();\n       })\n     }\n   </script>\n </body>\n</html>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "ontextselectionchange23",
          children: "onTextSelectionChange23+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onTextSelectionChange(callback: TextSelectionChangeCallback)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置Web组件选区文本改变时的回调函数，使用callback异步回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(683497)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "支持手势选中、鼠标选中以及JS选中选区。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用上述方式选中内容结束后触发回调。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用同样方式选中和上一次相同内容时，不触发回调；使用不同方式选中和上一次相同内容时，依然触发。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#textselectionchangecallback23",
                  children: "TextSelectionChangeCallback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "回调函数，所选区域文本内容改变时触发。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// onTextSelectionChange.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onTextSelectionChange((selectionText: string) => {\n          console.info(`Selected text is ${selectionText}.`);\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加载的html文件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>示例页面</title>\n</head>\n<body>\n    示例文本\n</body>\n</html>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "onfirstscreenpaint23",
          children: "onFirstScreenPaint23+"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "onFirstScreenPaint(callback: OnFirstScreenPaintCallback)"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "网页首屏渲染结束时触发此回调，使用callback异步回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(728338)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "首屏渲染（First Screen Paint，FSP），记录了视口内图片、文本或视频元素完成渲染所需的时间，是衡量页面首次加载到渲染完成的核心性能指标。当一定时间内视口内没有可见元素超出历史绘制区域时，将视口内元素绘制的历史最大的时刻视为首屏渲染完成时刻。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "接口在首屏绘制完成后，需要等待一定时间没有新的渲染信息需要处理后，才会上报回调。接口回调时刻和首屏渲染完成时刻不同。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "渲染未完成时，若用户输入或滚动页面，将会立即上报回调函数。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "该接口适用于在即时加载场景下获取首屏渲染时间，在预加载或预渲染场景下使用无法达到预期。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力："
            })
          }), " SystemCapability.Web.Webview.Core"]
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
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-t/arkts-basic-components-web-t#onfirstscreenpaintcallback23",
                  children: "OnFirstScreenPaintCallback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "回调函数，设置Web组件的检测到首屏渲染。"
              })]
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// onFirstScreenPaint.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onFirstScreenPaint((event: FirstScreenPaint)=>{\n          console.info(`Found first screen paint on ${event.url}.`);\n          console.info(`The navigation start time is ${event.navigationStartTime}.`);\n          console.info(`The first screen paint time is ${event.firstScreenPaintTime}.`);\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
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
295038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
97038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
683497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
35930(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
58836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
615861(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
899794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
971362(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
521951(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
475127(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
196089(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
728338(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
374452(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
443611(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
527588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
514046(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
828121(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
817776(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
736392(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
540503(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
4115(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
983876(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
403641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
249646(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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