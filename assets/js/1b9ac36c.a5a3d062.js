"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["748808"], {
108257(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkweb_api_arkweb_arkts_arkts_apis_web_webnativemessagingextensionmanager_arkts_apis_web_webnativemessagingextensionmanager_md_1b9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkweb-api-arkweb-arkts-arkts-apis-web-webnativemessagingextensionmanager-arkts-apis-web-webnativemessagingextensionmanager-md-1b9.json
var site_docs_ref_arkweb_api_arkweb_arkts_arkts_apis_web_webnativemessagingextensionmanager_arkts_apis_web_webnativemessagingextensionmanager_md_1b9_namespaceObject = JSON.parse('{"id":"arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionmanager/arkts-apis-web-webnativemessagingextensionmanager","title":"@ohos.web.webNativeMessagingExtensionManager (Web Native Messaging Extension Manager)","description":"webNativeMessagingExtensionManager模块提供基于Web标准的消息扩展管理能力。","source":"@site/docs-ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionmanager/arkts-apis-web-webnativemessagingextensionmanager.md","sourceDirName":"arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionmanager","slug":"/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionmanager/arkts-apis-web-webnativemessagingextensionmanager","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionmanager/arkts-apis-web-webnativemessagingextensionmanager","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"@ohos.web.webNativeMessagingExtensionManager (Web Native Messaging Extension Manager)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-web-webnativemessagingextensionmanager","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-web-webnativemessagingextensionmanager"},"sidebar":"ref","previous":{"title":"@ohos.web.WebNativeMessagingExtensionContext (Web Native Messaging Extension Context)","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensioncontext/arkts-apis-web-webnativemessagingextensioncontext"},"next":{"title":"组件描述","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkweb-api/arkweb-arkts/arkts-apis-web-webnativemessagingextensionmanager/arkts-apis-web-webnativemessagingextensionmanager.md


const frontMatter = {
	title: '@ohos.web.webNativeMessagingExtensionManager (Web Native Messaging Extension Manager)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-web-webnativemessagingextensionmanager',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-web-webnativemessagingextensionmanager'
};
const contentTitle = '@ohos.web.webNativeMessagingExtensionManager (Web Native Messaging Extension Manager)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "ConnectionNativeInfo",
  "id": "connectionnativeinfo",
  "level": 2
}, {
  "value": "NmErrorCode",
  "id": "nmerrorcode",
  "level": 2
}, {
  "value": "WebExtensionConnectionCallback",
  "id": "webextensionconnectioncallback",
  "level": 2
}, {
  "value": "onConnect",
  "id": "onconnect",
  "level": 3
}, {
  "value": "onDisconnect",
  "id": "ondisconnect",
  "level": 3
}, {
  "value": "onFailed",
  "id": "onfailed",
  "level": 3
}, {
  "value": "webNativeMessagingExtensionManager.connectNative",
  "id": "webnativemessagingextensionmanagerconnectnative",
  "level": 2
}, {
  "value": "webNativeMessagingExtensionManager.disconnectNative",
  "id": "webnativemessagingextensionmanagerdisconnectnative",
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
        id: "ohoswebwebnativemessagingextensionmanager-web-native-messaging-extension-manager",
        children: "@ohos.web.webNativeMessagingExtensionManager (Web Native Messaging Extension Manager)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "webNativeMessagingExtensionManager模块提供基于Web标准的消息扩展管理能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(669583)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 21开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块接口仅可在Stage模型下使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webNativeMessagingExtensionManager } from '@kit.ArkWeb';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connectionnativeinfo",
      children: "ConnectionNativeInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示Web原生消息连接的连接信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力:"
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束:"
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "connectionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web原生消息扩展应用的包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extensionOrigin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "浏览器扩展的源URL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extensionPid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web原生消息扩展的进程ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nmerrorcode",
      children: "NmErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Native Messaging的错误列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Web.Webview.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERMISSION_DENY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17100203"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied due to missing ohos.permission.WEB_NATIVE_MESSAGING."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WANT_CONTENT_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17100202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The want content is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INNER_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17100201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner error for native messaging."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "webextensionconnectioncallback",
      children: "WebExtensionConnectionCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onconnect",
      children: "onConnect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onConnect(connection: ConnectionNativeInfo): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建立连接时的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力:"
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束:"
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
            children: "connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#connectionnativeinfo",
              children: "ConnectionNativeInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { webNativeMessagingExtensionManager } from '@kit.ArkWeb';\nimport { common } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onForeground() {\n    try {\n        let context: common.UIAbilityContext = this.context; // 获取UIAbilityContext\n        let want:Want = {\n          bundleName: 'com.example.app',\n          abilityName: 'MyWebNativeMessageExtAbility',\n          parameters: {\n            'ohos.arkweb.messageReadPipe': { 'type': 'FD', 'value': 333 }, //假设此处为合法pipefd\n            'ohos.arkweb.messageWritePipe': { 'type': 'FD', 'value': 444 }, //假设此处为合法pipefd\n            'ohos.arkweb.extensionOrigin': 'chrome-extension://knldjmfmopnpolahpmmgbagdohdnhkik/' // 此处需要插件URI\n          },\n        };\n\n        let callback: webNativeMessagingExtensionManager.WebExtensionConnectionCallback = {\n            onConnect(connection) {\n                console.info('onConnect, connectionId:' + connection.connectionId);\n            },\n            onDisconnect(connection) {\n                console.info('onDisconnect');\n            },\n            onFailed(code, errMsg) {\n                console.info(`onFailed, code:${code} errMsg:${errMsg}`);\n            }\n        };\n\n        let connectionId = webNativeMessagingExtensionManager.connectNative(context, want, callback);\n    } catch (err) {\n      // 处理入参错误异常\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      console.error(`connectNative failed, code is ${code}, message is ${message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondisconnect",
      children: "onDisconnect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDisconnect(connection: ConnectionNativeInfo): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "断开连接时的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力:"
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束:"
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
            children: "connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#connectionnativeinfo",
              children: "ConnectionNativeInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { webNativeMessagingExtensionManager } from '@kit.ArkWeb';\nimport { common } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onForeground() {\n    try {\n        let context: common.UIAbilityContext = this.context; // 获取UIAbilityContext\n        let want:Want = {\n          bundleName: 'com.example.app',\n          abilityName: 'MyWebNativeMessageExtAbility',\n          parameters: {\n            'ohos.arkweb.messageReadPipe': { 'type': 'FD', 'value': 333 }, //假设此处为合法pipefd\n            'ohos.arkweb.messageWritePipe': { 'type': 'FD', 'value': 444 }, //假设此处为合法pipefd\n            'ohos.arkweb.extensionOrigin': 'chrome-extension://knldjmfmopnpolahpmmgbagdohdnhkik/' // 此处需要插件URI\n          },\n        };\n\n        let callback: webNativeMessagingExtensionManager.WebExtensionConnectionCallback = {\n            onConnect(connection) {\n                console.info('onConnect, connectionId:' + connection.connectionId);\n            },\n            onDisconnect(connection) {\n                console.info('onDisconnect');\n            },\n            onFailed(code, errMsg) {\n                console.info(`onFailed, code:${code} errMsg:${errMsg}`);\n            }\n        };\n\n        let connectionId = webNativeMessagingExtensionManager.connectNative(context, want, callback);\n    } catch (err) {\n      // 处理入参错误异常\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      console.error(`connectNative failed, code is ${code}, message is ${message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onfailed",
      children: "onFailed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onFailed(code: NmErrorCode, errMsg: string): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接失败时的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力:"
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束:"
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#nmerrorcode",
              children: "NmErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "errMsg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码对应信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { webNativeMessagingExtensionManager } from '@kit.ArkWeb';\nimport { common } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onForeground() {\n    try {\n        let context: common.UIAbilityContext = this.context; // 获取UIAbilityContext\n        let want:Want = {\n          bundleName: 'com.example.app',\n          abilityName: 'MyWebNativeMessageExtAbility',\n          parameters: {\n            'ohos.arkweb.messageReadPipe': { 'type': 'FD', 'value': 333 }, //假设此处为合法pipefd\n            'ohos.arkweb.messageWritePipe': { 'type': 'FD', 'value': 444 }, //假设此处为合法pipefd\n            'ohos.arkweb.extensionOrigin': 'chrome-extension://knldjmfmopnpolahpmmgbagdohdnhkik/' // 此处需要插件URI\n          },\n        };\n\n        let callback: webNativeMessagingExtensionManager.WebExtensionConnectionCallback = {\n            onConnect(connection) {\n                console.info('onConnect, connectionId:' + connection.connectionId);\n            },\n            onDisconnect(connection) {\n                console.info('onDisconnect');\n            },\n            onFailed(code, errMsg) {\n                console.info(`onFailed, code:${code} errMsg:${errMsg}`);\n            }\n        };\n\n        let connectionId = webNativeMessagingExtensionManager.connectNative(context, want, callback);\n    } catch (err) {\n      // 处理入参错误异常\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      console.error(`connectNative failed, code is ${code}, message is ${message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "webnativemessagingextensionmanagerconnectnative",
      children: "webNativeMessagingExtensionManager.connectNative"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "connectNative(context: UIAbilityContext, want: Want, callback: WebExtensionConnectionCallback): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将当前Ability连接到指定的Web原生消息扩展Ability。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.WEB_NATIVE_MESSAGING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力:"
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束:"
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "UIAbilityContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web原生消息扩展的上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "want"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动Ability的want信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#webextensionconnectioncallback",
              children: "WebExtensionConnectionCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebExtensionConnection状态的回调对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
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
            children: "连接标识ID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码:"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { webNativeMessagingExtensionManager } from '@kit.ArkWeb';\nimport { common } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onForeground() {\n    try {\n        let context: common.UIAbilityContext = this.context; // 获取UIAbilityContext\n        let want:Want = {\n          bundleName: 'com.example.app',\n          abilityName: 'MyWebNativeMessageExtAbility',\n          parameters: {\n            'ohos.arkweb.messageReadPipe': { 'type': 'FD', 'value': 333 }, //假设此处为合法pipefd\n            'ohos.arkweb.messageWritePipe': { 'type': 'FD', 'value': 444 }, //假设此处为合法pipefd\n            'ohos.arkweb.extensionOrigin': 'chrome-extension://knldjmfmopnpolahpmmgbagdohdnhkik/' // 此处需要插件URI\n          },\n        };\n\n        let callback: webNativeMessagingExtensionManager.WebExtensionConnectionCallback = {\n            onConnect(connection) {\n                console.info('onConnect, connectionId:' + connection.connectionId);\n            },\n            onDisconnect(connection) {\n                console.info('onDisconnect');\n            },\n            onFailed(code, errMsg) {\n                console.info(`onFailed, code:${code} errMsg:${errMsg}`);\n            }\n        };\n\n        let connectionId = webNativeMessagingExtensionManager.connectNative(context, want, callback);\n    } catch (err) {\n      // 处理入参错误异常\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      console.error(`connectNative failed, code is ${code}, message is ${message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "webnativemessagingextensionmanagerdisconnectnative",
      children: "webNativeMessagingExtensionManager.disconnectNative"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "disconnectNative(connectionId: number): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "断开指定Web原生消息扩展连接。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.WEB_NATIVE_MESSAGING"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力:"
        })
      }), " SystemCapability.Web.Webview.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束:"
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
            children: "connectionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["连接的标识ID，用于标识一次Web原生消息扩展连接，由", (0,jsx_runtime.jsx)(_components.a, {
              href: "#webnativemessagingextensionmanagerconnectnative",
              children: "connectNative"
            }), "方法返回。建立连接后需要通过disconnectNative释放。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值:"
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
            children: "无返回结果的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码:"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts-errcode/errorcode-ability/errorcode-ability",
        children: "元能力子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The context does not exist."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000050"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error. Possible causes: 1. Failed to connect to the system service; 2. The system service failed to communicate with dependency module."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例:"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { webNativeMessagingExtensionManager } from '@kit.ArkWeb';\n\nexport default class EntryAbility extends UIAbility {\n  async disconnect() {\n    try {\n        let connectionId = 1;\n        // 假设之前已连接并获得connectionId\n        await webNativeMessagingExtensionManager.disconnectNative(connectionId).then(() => {\n            console.info('disconnectNative success');\n        })\n    } catch (err) {\n      // 处理入参错误异常\n      let code = (err as BusinessError).code;\n      let message = (err as BusinessError).message;\n      console.error(`disconnectNative failed, code is ${code}, message is ${message}`);\n    }\n  }\n  onForeground() {\n    this.disconnect();\n  }\n}\n"
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
669583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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