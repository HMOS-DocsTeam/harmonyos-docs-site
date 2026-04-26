"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["295172"], {
671268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkweb_api_arkweb_arkts_js_apis_webview_arkts_apis_webview_webhttpbodystream_arkts_apis_webview_webhttpbodystream_md_898_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkweb-api-arkweb-arkts-js-apis-webview-arkts-apis-webview-webhttpbodystream-arkts-apis-webview-webhttpbodystream-md-898.json
var site_docs_ref_arkweb_api_arkweb_arkts_js_apis_webview_arkts_apis_webview_webhttpbodystream_arkts_apis_webview_webhttpbodystream_md_898_namespaceObject = JSON.parse('{"id":"arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webhttpbodystream/arkts-apis-webview-webhttpbodystream","title":"Class (WebHttpBodyStream)","description":"POST、PUT请求的数据体，支持BYTES、FILE、BLOB、CHUNKED类型的数据。注意本类中其他接口需要在initialize成功后才能调用。","source":"@site/docs-ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webhttpbodystream/arkts-apis-webview-webhttpbodystream.md","sourceDirName":"arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webhttpbodystream","slug":"/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webhttpbodystream/arkts-apis-webview-webhttpbodystream","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webhttpbodystream/arkts-apis-webview-webhttpbodystream","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"title":"Class (WebHttpBodyStream)","sidebar_position":21,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webhttpbodystream","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-webview-webhttpbodystream"},"sidebar":"ref","previous":{"title":"Class (WebDownloadManager)","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloadmanager/arkts-apis-webview-webdownloadmanager"},"next":{"title":"Class (WebMessageExt)","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webmessageext/arkts-apis-webview-webmessageext"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webhttpbodystream/arkts-apis-webview-webhttpbodystream.md


const frontMatter = {
	title: 'Class (WebHttpBodyStream)',
	sidebar_position: 21,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webhttpbodystream',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-webview-webhttpbodystream'
};
const contentTitle = 'Class (WebHttpBodyStream)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "initialize12+",
  "id": "initialize12",
  "level": 2
}, {
  "value": "read12+",
  "id": "read12",
  "level": 2
}, {
  "value": "getSize12+",
  "id": "getsize12",
  "level": 2
}, {
  "value": "getPosition12+",
  "id": "getposition12",
  "level": 2
}, {
  "value": "isChunked12+",
  "id": "ischunked12",
  "level": 2
}, {
  "value": "isEof12+",
  "id": "iseof12",
  "level": 2
}, {
  "value": "isInMemory12+",
  "id": "isinmemory12",
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
        id: "class-webhttpbodystream",
        children: "Class (WebHttpBodyStream)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["POST、PUT请求的数据体，支持BYTES、FILE、BLOB、CHUNKED类型的数据。注意本类中其他接口需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#initialize12",
        children: "initialize"
      }), "成功后才能调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(604100)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本Class首批接口从API version 12开始支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "示例效果请以真机运行为准。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initialize12",
      children: "initialize12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "initialize(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化WebHttpBodyStream。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise实例，用于获取WebHttpBodyStream是否初始化成功。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts-errcode/errorcode-webview/errorcode-webview",
        children: "Webview错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17100022"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to initialize the HTTP body stream."
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { buffer } from '@kit.ArkTS';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  schemeHandler: webview.WebSchemeHandler = new webview.WebSchemeHandler();\n  htmlData: string = \"<html><body bgcolor=\\\"white\\\">Source:<pre>source</pre></body></html>\";\n\n  build() {\n    Column() {\n      Button('postUrl')\n        .onClick(() => {\n          try {\n            let postData = buffer.from(this.htmlData);\n            this.controller.postUrl('https://www.example.com', postData.buffer);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'https://www.example.com', controller: this.controller })\n        .onControllerAttached(() => {\n          try {\n            this.schemeHandler.onRequestStart((request: webview.WebSchemeHandlerRequest, resourceHandler: webview.WebResourceHandler) => {\n              console.info(\"[schemeHandler] onRequestStart\");\n              try {\n                let stream = request.getHttpBodyStream();\n                if (stream) {\n                  stream.initialize().then(() => {\n                    if (!stream) {\n                      return;\n                    }\n                    console.info(\"[schemeHandler] onRequestStart postDataStream size:\" + stream.getSize());\n                    console.info(\"[schemeHandler] onRequestStart postDataStream position:\" + stream.getPosition());\n                    console.info(\"[schemeHandler] onRequestStart postDataStream isChunked:\" + stream.isChunked());\n                    console.info(\"[schemeHandler] onRequestStart postDataStream isEof:\" + stream.isEof());\n                    console.info(\"[schemeHandler] onRequestStart postDataStream isInMemory:\" + stream.isInMemory());\n                    stream.read(stream.getSize()).then((buffer) => {\n                      if (!stream) {\n                        return;\n                      }\n                      console.info(\"[schemeHandler] onRequestStart postDataStream readlength:\" + buffer.byteLength);\n                      console.info(\"[schemeHandler] onRequestStart postDataStream isEof:\" + stream.isEof());\n                      console.info(\"[schemeHandler] onRequestStart postDataStream position:\" + stream.getPosition());\n                    }).catch((error: BusinessError) => {\n                      console.error(`ErrorCode: ${error.code},  Message: ${error.message}`);\n                    })\n                  }).catch((error: BusinessError) => {\n                    console.error(`ErrorCode: ${error.code},  Message: ${error.message}`);\n                  })\n                } else {\n                  console.info(\"[schemeHandler] onRequestStart has no http body stream\");\n                }\n              } catch (error) {\n                console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n              }\n\n              return false;\n            })\n\n            this.schemeHandler.onRequestStop((request: webview.WebSchemeHandlerRequest) => {\n              console.info(\"[schemeHandler] onRequestStop\");\n            });\n\n            this.controller.setWebSchemeHandler('https', this.schemeHandler);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n        .javaScriptAccess(true)\n        .domStorageAccess(true)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "read12",
      children: "read12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "read(size: number): Promise<ArrayBuffer>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "读取WebHttpBodyStream中的数据。"
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
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取WebHttpBodyStream中的字节数。单位：字节。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<ArrayBuffer>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise实例，用于获取WebHttpBodyStream中读取的数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#initialize12",
        children: "initialize"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getsize12",
      children: "getSize12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSize(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取WebHttpBodyStream中的数据大小，分块传输时总是返回零。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取WebHttpBodyStream中的数据大小。单位：字节。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#initialize12",
        children: "initialize"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getposition12",
      children: "getPosition12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPosition(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "读取WebHttpBodyStream中当前的读取位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebHttpBodyStream中当前的读取位置。单位：字节。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#initialize12",
        children: "initialize"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ischunked12",
      children: "isChunked12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isChunked(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WebHttpBodyStream是否采用分块传输。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebHttpBodyStream是否采用分块传输，如果采用分块传输则返回true，否则返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#initialize12",
        children: "initialize"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "iseof12",
      children: "isEof12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isEof(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断WebHttpBodyStream中的所有数据是否都已被读取。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebHttpBodyStream中的所有数据是否都已被读取。  如果所有数据都已被读取，则返回true。对于分块传输类型的WebHttpBodyStream，在第一次读取尝试之前返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#initialize12",
        children: "initialize"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "isinmemory12",
      children: "isInMemory12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isInMemory(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断WebHttpBodyStream中的上传数据是否在内存中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebHttpBodyStream中的上传数据是否在内存中。  如果WebHttpBodyStream中的上传数据完全在内存中，并且所有读取请求都将同步成功，则返回true。对于分块传输类型的数据，预期返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#initialize12",
        children: "initialize"
      }), "。"]
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
604100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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