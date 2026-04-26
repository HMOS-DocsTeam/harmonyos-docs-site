"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["603886"], {
603546(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkweb_api_arkweb_arkts_js_apis_webview_arkts_apis_webview_webmessageport_arkts_apis_webview_webmessageport_md_822_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkweb-api-arkweb-arkts-js-apis-webview-arkts-apis-webview-webmessageport-arkts-apis-webview-webmessageport-md-822.json
var site_docs_ref_arkweb_api_arkweb_arkts_js_apis_webview_arkts_apis_webview_webmessageport_arkts_apis_webview_webmessageport_md_822_namespaceObject = JSON.parse('{"id":"arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webmessageport/arkts-apis-webview-webmessageport","title":"Interface (WebMessagePort)","description":"通过WebMessagePort可以进行消息的发送以及接收，发送WebMessageType/WebMessage类型消息给HTML5侧。","source":"@site/docs-ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webmessageport/arkts-apis-webview-webmessageport.md","sourceDirName":"arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webmessageport","slug":"/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webmessageport/arkts-apis-webview-webmessageport","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webmessageport/arkts-apis-webview-webmessageport","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":32,"frontMatter":{"title":"Interface (WebMessagePort)","sidebar_position":32,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webmessageport","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-webview-webmessageport"},"sidebar":"ref","previous":{"title":"Interface (NativeMediaPlayerHandler)","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-nativemediaplayerhandler/arkts-apis-webview-nativemediaplayerhandler"},"next":{"title":"Interfaces (其他)","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-i/arkts-apis-webview-i"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webmessageport/arkts-apis-webview-webmessageport.md


const frontMatter = {
	title: 'Interface (WebMessagePort)',
	sidebar_position: 32,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webmessageport',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-webview-webmessageport'
};
const contentTitle = 'Interface (WebMessagePort)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "postMessageEvent",
  "id": "postmessageevent",
  "level": 2
}, {
  "value": "onMessageEvent",
  "id": "onmessageevent",
  "level": 2
}, {
  "value": "postMessageEventExt10+",
  "id": "postmessageeventext10",
  "level": 2
}, {
  "value": "onMessageEventExt10+",
  "id": "onmessageeventext10",
  "level": 2
}, {
  "value": "close",
  "id": "close",
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
        id: "interface-webmessageport",
        children: "Interface (WebMessagePort)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过WebMessagePort可以进行消息的发送以及接收，发送", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-e/arkts-apis-webview-e#webmessagetype10",
        children: "WebMessageType"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-t/arkts-apis-webview-t#webmessage",
        children: "WebMessage"
      }), "类型消息给HTML5侧。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(729848)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本Interface首批接口从API version 9开始支持。"
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
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isExtentionType10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建WebMessagePort时是否指定使用扩展增强接口，", (0,jsx_runtime.jsx)(_components.a, {
              href: "#postmessageeventext10",
              children: "postMessageEventExt"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#onmessageeventext10",
              children: "onMessageEventExt"
            }), "。  true表示使用扩展增强接口，false表示不使用扩展增强接口。  默认值：false。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "postmessageevent",
      children: "postMessageEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postMessageEvent(message: WebMessage): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["发送", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-t/arkts-apis-webview-t#webmessage",
        children: "WebMessage"
      }), "类型消息给HTML5侧，必须先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onmessageevent",
        children: "onMessageEvent"
      }), "，否则会发送失败。完整示例代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#postmessage",
        children: "postMessage"
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
            children: "message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-t/arkts-apis-webview-t#webmessage",
              children: "WebMessage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要发送的消息。"
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
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17100010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to post messages through the port."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  ports: webview.WebMessagePort[] = [];\n\n  build() {\n    Column() {\n      Button('postMessageEvent')\n        .onClick(() => {\n          try {\n            this.ports = this.controller.createWebMessagePorts();\n            this.controller.postMessage('__init_port__', [this.ports[0]], '*');\n            this.ports[1].postMessageEvent(\"post message from ets to html5\");\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onmessageevent",
      children: "onMessageEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onMessageEvent(callback: (result: WebMessage) => void): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在应用侧的消息端口上注册回调函数，接收HTML5侧发送过来的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-t/arkts-apis-webview-t#webmessage",
        children: "WebMessage"
      }), "类型消息。完整示例代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#postmessage",
        children: "postMessage"
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
            children: ["(result: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-t/arkts-apis-webview-t#webmessage",
              children: "WebMessage"
            }), ") => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到的消息。"
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
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17100006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to register a message event for the port."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  ports: webview.WebMessagePort[] = [];\n\n  build() {\n    Column() {\n      Button('onMessageEvent')\n        .onClick(() => {\n          try {\n            this.ports = this.controller.createWebMessagePorts();\n            this.ports[1].onMessageEvent((msg) => {\n              if (typeof (msg) == \"string\") {\n                console.info(\"received string message from html5, string is:\" + msg);\n              } else if (typeof (msg) == \"object\") {\n                if (msg instanceof ArrayBuffer) {\n                  console.info(\"received arraybuffer from html5, length is:\" + msg.byteLength);\n                } else {\n                  console.info(\"not support\");\n                }\n              } else {\n                console.info(\"not support\");\n              }\n            })\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "postmessageeventext10",
      children: "postMessageEventExt10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "postMessageEventExt(message: WebMessageExt): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["发送", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-e/arkts-apis-webview-e#webmessagetype10",
        children: "WebMessageType"
      }), "类型消息给HTML5侧，必须先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onmessageeventext10",
        children: "onMessageEventExt"
      }), "，否则会发送失败。完整示例代码参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onmessageeventext10",
        children: "onMessageEventExt"
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
            children: "message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webmessageext/arkts-apis-webview-webmessageext",
              children: "WebMessageExt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要发送的消息。"
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
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17100010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to post messages through the port."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onmessageeventext10",
      children: "onMessageEventExt10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onMessageEventExt(callback: (result: WebMessageExt) => void): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在应用侧的消息端口上注册回调函数，接收HTML5侧发送过来的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-e/arkts-apis-webview-e#webmessagetype10",
        children: "WebMessageType"
      }), "类型消息。"]
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
            children: ["(result: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webmessageext/arkts-apis-webview-webmessageext",
              children: "WebMessageExt"
            }), ") => void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到的消息。"
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
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17100006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to register a message event for the port."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass TestObj {\n  test(str: string): ArrayBuffer {\n    let buf = new ArrayBuffer(str.length);\n    let buff = new Uint8Array(buf);\n\n    for (let i = 0; i < str.length; i++) {\n      buff[i] = str.charCodeAt(i);\n    }\n    return buf;\n  }\n}\n\n// 应用与网页互发消息的示例：使用\"init_web_messageport\"的通道，通过端口0在应用侧接收网页发送的消息，通过端口1在网页侧接收应用发送的消息。\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  ports: webview.WebMessagePort[] = [];\n  nativePort: webview.WebMessagePort | null = null;\n  @State msg1: string = \"\";\n  @State msg2: string = \"\";\n  message: webview.WebMessageExt = new webview.WebMessageExt();\n  @State testObjtest: TestObj = new TestObj();\n\n  build() {\n    Column() {\n      Text(this.msg1).fontSize(16)\n      Text(this.msg2).fontSize(16)\n      Button('SendToH5 setString').margin({\n        right: 800,\n      })\n        .onClick(() => {\n          // 使用本侧端口发送消息给HTML5\n          try {\n            console.info(\"In ArkTS side send true start\");\n            if (this.nativePort) {\n              this.message.setType(1);\n              this.message.setString(\"helloFromEts\");\n              this.nativePort.postMessageEventExt(this.message);\n            }\n          }\n          catch (error) {\n            console.error(`In ArkTS side send message catch error, ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n        Button('SendToH5 setNumber').margin({\n          top: 10,\n          right: 800,\n        })\n        .onClick(() => {\n          // 使用本侧端口发送消息给HTML5\n          try {\n            console.info(\"In ArkTS side send true start\");\n            if (this.nativePort) {\n              this.message.setType(2);\n              this.message.setNumber(12345);\n              this.nativePort.postMessageEventExt(this.message);\n            }\n          }\n          catch (error) {\n            console.error(`In ArkTS side send message catch error, ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('SendToH5 setBoolean').margin({\n        top: -90,\n      })\n        .onClick(() => {\n          // 使用本侧端口发送消息给HTML5\n          try {\n            console.info(\"In ArkTS side send true start\");\n            if (this.nativePort) {\n              this.message.setType(3);\n              this.message.setBoolean(true);\n              this.nativePort.postMessageEventExt(this.message);\n            }\n          }\n          catch (error) {\n            console.error(`In ArkTS side send message catch error, ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('SendToH5 setArrayBuffer').margin({\n        top: 10,\n      })\n        .onClick(() => {\n          // 使用本侧端口发送消息给HTML5\n          try {\n            console.info(\"In ArkTS side send true start\");\n            if (this.nativePort) {\n              this.message.setType(4);\n              this.message.setArrayBuffer(this.testObjtest.test(\"Name=test&Password=test\"));\n              this.nativePort.postMessageEventExt(this.message);\n            }\n          }\n          catch (error) {\n            console.error(`In ArkTS side send message catch error, ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('SendToH5 setArray').margin({\n        top: -90,\n        left: 800,\n      })\n        .onClick(() => {\n          // 使用本侧端口发送消息给HTML5\n          try {\n            console.info(\"In ArkTS side send true start\");\n            if (this.nativePort) {\n              this.message.setType(5);\n              this.message.setArray([1, 2, 3]);\n              this.nativePort.postMessageEventExt(this.message);\n            }\n          }\n          catch (error) {\n            console.error(`In ArkTS side send message catch error, ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('SendToH5 setError').margin({\n        top: 10,\n        left: 800,\n      })\n        .onClick(() => {\n          // 使用本侧端口发送消息给HTML5\n          try {\n            console.info(\"In ArkTS side send true start\");\n            throw new ReferenceError(\"ReferenceError\");\n          }\n          catch (error) {\n            if (this.nativePort) {\n              this.message.setType(6);\n              this.message.setError(error);\n              this.nativePort.postMessageEventExt(this.message);\n            }\n            console.error(`In ArkTS side send message catch error, ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onPageEnd(() => {\n          console.info(\"In ArkTS side message onPageEnd init message channel\");\n          // 1. 创建消息端口\n          this.ports = this.controller.createWebMessagePorts(true);\n          // 2. 发送端口1到HTML5\n          this.controller.postMessage(\"init_web_messageport\", [this.ports[1]], \"*\");\n          // 3. 保存端口0到本地\n          this.nativePort = this.ports[0];\n          // 4. 设置回调函数\n          this.nativePort.onMessageEventExt((result) => {\n            console.info(\"In ArkTS side got message\");\n            try {\n              let type = result.getType();\n              console.info(\"In ArkTS side getType:\" + type);\n              switch (type) {\n                case webview.WebMessageType.STRING: {\n                  this.msg1 = \"result type:\" + typeof (result.getString());\n                  this.msg2 = \"result getString:\" + ((result.getString()));\n                  break;\n                }\n                case webview.WebMessageType.NUMBER: {\n                  this.msg1 = \"result type:\" + typeof (result.getNumber());\n                  this.msg2 = \"result getNumber:\" + ((result.getNumber()));\n                  break;\n                }\n                case webview.WebMessageType.BOOLEAN: {\n                  this.msg1 = \"result type:\" + typeof (result.getBoolean());\n                  this.msg2 = \"result getBoolean:\" + ((result.getBoolean()));\n                  break;\n                }\n                case webview.WebMessageType.ARRAY_BUFFER: {\n                  this.msg1 = \"result type:\" + typeof (result.getArrayBuffer());\n                  this.msg2 = \"result getArrayBuffer byteLength:\" + ((result.getArrayBuffer().byteLength));\n                  break;\n                }\n                case webview.WebMessageType.ARRAY: {\n                  this.msg1 = \"result type:\" + typeof (result.getArray());\n                  this.msg2 = \"result getArray:\" + result.getArray();\n                  break;\n                }\n                case webview.WebMessageType.ERROR: {\n                  this.msg1 = \"result type:\" + typeof (result.getError());\n                  this.msg2 = \"result getError:\" + result.getError();\n                  break;\n                }\n                default: {\n                  this.msg1 = \"default break, type:\" + type;\n                  break;\n                }\n              }\n            }\n            catch (error) {\n              console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n            }\n          });\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加载的html文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!--index.html-->\n<!DOCTYPE html>\n<html lang=\"en-gb\">\n<head>\n    <title>WebView MessagePort Demo</title>\n</head>\n\n<body>\n<h1>Html5 Send and Receive Message</h1>\n<h3 id=\"msg\">Receive string:</h3>\n<h3 id=\"msg2\">Receive arraybuffer:</h3>\n<div style=\"font-size: 10pt; text-align: center;\">\n    <input type=\"button\" value=\"Send String\" onclick=\"postStringToApp();\" /><br/>\n</div>\n</body>\n<script src=\"index.js\"></script>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "//index.js\nvar h5Port;\nwindow.addEventListener('message', function(event) {\n    if (event.data == 'init_web_messageport') {\n        if(event.ports[0] != null) {\n            h5Port = event.ports[0]; // 1. 保存从ets侧发送过来的端口\n            h5Port.onmessage = function(event) {\n                console.info(\"hwd In html got message\");\n                // 2. 接收ets侧发送过来的消息.\n                var result = event.data;\n                console.info(\"In html got message, typeof: \", typeof(result));\n                console.info(\"In html got message, result: \", (result));\n                if (typeof(result) == \"string\") {\n                    console.info(\"In html got message, String: \", result);\n                    document.getElementById(\"msg\").innerHTML  =  \"String:\" + result;\n                } else if (typeof(result) == \"number\") {\n                  console.info(\"In html side got message, number: \", result);\n                    document.getElementById(\"msg\").innerHTML = \"Number:\" + result;\n                } else if (typeof(result) == \"boolean\") {\n                    console.info(\"In html side got message, boolean: \", result);\n                    document.getElementById(\"msg\").innerHTML = \"Boolean:\" + result;\n                } else if (typeof(result) == \"object\") {\n                    if (result instanceof ArrayBuffer) {\n                        document.getElementById(\"msg2\").innerHTML  =  \"ArrayBuffer:\" + result.byteLength;\n                        console.info(\"In html got message, byteLength: \", result.byteLength);\n                    } else if (result instanceof Error) {\n                        console.info(\"In html error message, err:\" + (result));\n                        console.info(\"In html error message, typeof err:\" + typeof(result));\n                        document.getElementById(\"msg2\").innerHTML  =  \"Error:\" + result.name + \", msg:\" + result.message;\n                    } else if (result instanceof Array) {\n                        console.info(\"In html got message, Array\");\n                        console.info(\"In html got message, Array length:\" + result.length);\n                        console.info(\"In html got message, Array[0]:\" + (result[0]));\n                        console.info(\"In html got message, typeof Array[0]:\" + typeof(result[0]));\n                        document.getElementById(\"msg2\").innerHTML  =  \"Array len:\" + result.length + \", value:\" + result;\n                    } else {\n                        console.info(\"In html got message, not any instance of support type\");\n                        document.getElementById(\"msg\").innerHTML  = \"not any instance of support type\";\n                    }\n                } else {\n                    console.info(\"In html got message, not support type\");\n                    document.getElementById(\"msg\").innerHTML  = \"not support type\";\n                }\n            }\n            h5Port.onmessageerror = (event) => {\n                console.error(`hwd In html Error receiving message: ${event}`);\n            };\n        }\n    }\n})\n\n// 使用h5Port往ets侧发送String类型的消息.\nfunction postStringToApp() {\n    if (h5Port) {\n        console.info(\"In html send string message\");\n        h5Port.postMessage(\"hello\");\n        console.info(\"In html send string message end\");\n    } else {\n        console.error(\"In html h5port is null, please init first\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "close",
      children: "close"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "close(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不需要发送消息时关闭该消息端口。在使用close前，请先使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#createwebmessageports",
        children: "createWebMessagePorts"
      }), "创建消息端口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  msgPort: webview.WebMessagePort[] = [];\n\n  build() {\n    Column() {\n      // 先使用createWebMessagePorts创建端口。\n      Button('createWebMessagePorts')\n        .onClick(() => {\n          try {\n            this.msgPort = this.controller.createWebMessagePorts();\n            console.info(\"createWebMessagePorts size:\" + this.msgPort.length)\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('close')\n        .onClick(() => {\n          try {\n            if (this.msgPort && this.msgPort.length == 2) {\n              this.msgPort[1].close();\n              this.msgPort = [];\n            } else {\n              console.error(\"msgPort is null, Please initialize first\");\n            }\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
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
729848(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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