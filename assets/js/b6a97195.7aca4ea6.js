"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["7420"], {
752125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_use_frontend_page_js_web_app_page_data_channel_web_app_page_data_channel_md_b6a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-use-frontend-page-js-web-app-page-data-channel-web-app-page-data-channel-md-b6a.json
var site_docs_arkweb_web_use_frontend_page_js_web_app_page_data_channel_web_app_page_data_channel_md_b6a_namespaceObject = JSON.parse('{"id":"arkweb/web-use-frontend-page-js/web-app-page-data-channel/web-app-page-data-channel","title":"建立应用侧与前端页面数据通道","description":"前端页面和应用侧之间可以用createWebMessagePorts()接口创建消息端口来实现两端的通信。","source":"@site/docs/arkweb/web-use-frontend-page-js/web-app-page-data-channel/web-app-page-data-channel.md","sourceDirName":"arkweb/web-use-frontend-page-js/web-app-page-data-channel","slug":"/arkweb/web-use-frontend-page-js/web-app-page-data-channel/","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/web-app-page-data-channel/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"建立应用侧与前端页面数据通道","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-app-page-data-channel","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"前端页面调用应用侧函数","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/web-in-page-app-function-invoking/"},"next":{"title":"应用侧与前端页面的相互调用(C/C++)","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/arkweb-ndk-jsbridge/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-use-frontend-page-js/web-app-page-data-channel/web-app-page-data-channel.md


const frontMatter = {
	title: '建立应用侧与前端页面数据通道',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-app-page-data-channel',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '建立应用侧与前端页面数据通道';

const assets = {

};



const toc = [{
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "为什么H5向应用侧发送消息接收不到？",
  "id": "为什么h5向应用侧发送消息接收不到",
  "level": 3
}, {
  "value": "onControllerAttached与javaScriptOnDocumentStart的执行顺序是什么？",
  "id": "oncontrollerattached与javascriptondocumentstart的执行顺序是什么",
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
        id: "建立应用侧与前端页面数据通道",
        children: "建立应用侧与前端页面数据通道"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["前端页面和应用侧之间可以用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#createwebmessageports",
        children: "createWebMessagePorts()"
      }), "接口创建消息端口来实现两端的通信。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在下面的示例中，应用侧页面中通过createWebMessagePorts方法创建两个消息端口，再把其中一个端口通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#postmessage",
        children: "postMessage()"
      }), "接口发送到前端页面，便可以在前端页面和应用侧之间互相发送消息。端口使用完毕后或Webview对象销毁前通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webmessageport/arkts-apis-webview-webmessageport#close",
        children: "close"
      }), "接口关闭端口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用侧代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  ports: webview.WebMessagePort[] = [];\n  @State sendFromEts: string = 'Send this message from ets to HTML';\n  @State receivedFromHtml: string = 'Display received message send from HTML';\n\n  build() {\n    Column() {\n      // 展示接收到的来自HTML的内容\n      Text(this.receivedFromHtml);\n      // 输入框的内容发送到HTML\n      TextInput({ placeholder: 'Send this message from ets to HTML' })\n        .onChange((value: string) => {\n          this.sendFromEts = value;\n        })\n\n      // 该内容可以放在onPageEnd生命周期中调用。\n      Button('postMessage')\n        .onClick(() => {\n          try {\n            // 1、创建两个消息端口。\n            this.ports = this.controller.createWebMessagePorts();\n            if (this.ports && this.ports[0] && this.ports[1]) {\n              // 2、在应用侧的消息端口(如端口1)上注册回调事件。\n              this.ports[1].onMessageEvent((result: webview.WebMessage) => {\n                let msg = 'Got msg from HTML:';\n                if (typeof (result) === 'string') {\n                  console.info(`received string message from html5, string is: ${result}`);\n                  msg = msg + result;\n                } else if (typeof (result) === 'object') {\n                  if (result instanceof ArrayBuffer) {\n                    console.info(`received arraybuffer from html5, length is: ${result.byteLength}`);\n                    msg = msg + 'length is ' + result.byteLength;\n                  } else {\n                    console.info('not support');\n                  }\n                } else {\n                  console.info('not support');\n                }\n                this.receivedFromHtml = msg;\n              })\n              // 3、将另一个消息端口(如端口0)发送到HTML侧，由HTML侧保存并使用。\n              this.controller.postMessage('__init_port__', [this.ports[0]], '*');\n            } else {\n              console.error(`ports is null, Please initialize first`);\n            }\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n\n      // 4、使用应用侧的端口给另一个已经发送到html的端口发送消息。\n      Button('SendDataToHTML')\n        .onClick(() => {\n          try {\n            if (this.ports && this.ports[1]) {\n              this.ports[1].postMessageEvent(this.sendFromEts);\n            } else {\n              console.error(`ports is null, Please initialize first`);\n            }\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n\n      // 5、关闭端口。\n      Button('closePort')\n      .onClick(() => {\n        try {\n          if (this.ports && this.ports.length == 2) {\n            this.ports[0].close();\n            this.ports = [];\n          } else {\n            console.error(\"ports is null, not need close\");\n          }\n        } catch (error) {\n          console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n        }\n      })\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前端页面代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!--index.html-->\n<!DOCTYPE html>\n<html>\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>WebView Message Port Demo</title>\n</head>\n<body>\n    <h1>WebView Message Port Demo</h1>\n    <div>\n        <input type=\"button\" value=\"SendToEts\" onclick=\"PostMsgToEts(msgFromJS.value);\"/><br/>\n        <input id=\"msgFromJS\" type=\"text\" value=\"send this message from HTML to ets\"/><br/>\n    </div>\n    <p class=\"output\">display received message send from ets</p>\n</body>\n<script>\nvar h5Port;\nvar output = document.querySelector('.output');\nwindow.addEventListener('message', function (event) {\n    if (event.data === '__init_port__') {\n        if (event.ports[0] !== null) {\n            h5Port = event.ports[0]; // 1. 保存从应用侧发送过来的端口。\n            h5Port.onmessage = function (event) {\n              // 2. 接收ets侧发送过来的消息。\n              var msg = 'Got message from ets:';\n              var result = event.data;\n              if (typeof(result) === 'string') {\n                console.info(`received string message from ets, string is: ${result}`);\n                msg = msg + result;\n              } else if (typeof(result) === 'object') {\n                if (result instanceof ArrayBuffer) {\n                  console.info(`received arraybuffer from ets, length is: ${result.byteLength}`);\n                  msg = msg + 'length is ' + result.byteLength;\n                } else {\n                  console.info('not support');\n                }\n              } else {\n                console.info('not support');\n              }\n              output.innerHTML = msg;\n            }\n        }\n    }\n})\n\n// 3. 使用h5Port向应用侧发送消息。\nfunction PostMsgToEts(data) {\n    if (h5Port) {\n      h5Port.postMessage(data);\n    } else {\n      console.error('h5Port is null, Please initialize first');\n    }\n}\n</script>\n</html>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "为什么h5向应用侧发送消息接收不到",
      children: "为什么H5向应用侧发送消息接收不到？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查传递的数据类型是否正确，WebMessage支持的数据类型有string和ArrayBuffer。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果想要传递对象类型则需要将对象类型通过JSON.stringify方法转换为string类型再进行传递。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  function PostMsgToEts(data) {\n      if (h5Port) {\n        let obj = {name:'exampleName',id:10}\n        h5Port.postMessage(JSON.stringify(obj));\n      } else {\n        console.error('h5Port is null. Please initialize it first.');\n      }\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncontrollerattached与javascriptondocumentstart的执行顺序是什么",
      children: "onControllerAttached与javaScriptOnDocumentStart的执行顺序是什么？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#javascriptondocumentstart11",
        children: "javaScriptOnDocumentStart"
      }), "在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#oncontrollerattached10",
        children: "onControllerAttached"
      }), "之后执行。"]
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