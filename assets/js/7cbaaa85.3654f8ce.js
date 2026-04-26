"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["981614"], {
932539(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_debugging_web_white_screen_web_white_screen_md_7cb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-debugging-web-white-screen-web-white-screen-md-7cb.json
var site_docs_arkweb_web_debugging_web_white_screen_web_white_screen_md_7cb_namespaceObject = JSON.parse('{"id":"arkweb/web-debugging/web-white-screen/web-white-screen","title":"定位与解决Web白屏问题","description":"Web页面出现白屏的原因众多，本文列举了若干常见白屏问题的排查步骤，供开发者快速定位。","source":"@site/docs/arkweb/web-debugging/web-white-screen/web-white-screen.md","sourceDirName":"arkweb/web-debugging/web-white-screen","slug":"/arkweb/web-debugging/web-white-screen/","permalink":"/harmonyos-docs-site/arkweb/web-debugging/web-white-screen/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"定位与解决Web白屏问题","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-white-screen","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Crashpad收集Web组件崩溃信息","permalink":"/harmonyos-docs-site/arkweb/web-debugging/web-crashpad/"},"next":{"title":"使用Hypium实现ArkWeb自动化测试","permalink":"/harmonyos-docs-site/arkweb/web-debugging/web-hypium-autotests/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-debugging/web-white-screen/web-white-screen.md


const frontMatter = {
	title: '定位与解决Web白屏问题',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-white-screen',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '定位与解决Web白屏问题';

const assets = {

};



const toc = [{
  "value": "检查权限和网络状态",
  "id": "检查权限和网络状态",
  "level": 2
}, {
  "value": "使用DevTools工具进行页面内容验证",
  "id": "使用devtools工具进行页面内容验证",
  "level": 2
}, {
  "value": "复杂的布局与渲染模式导致白屏",
  "id": "复杂的布局与渲染模式导致白屏",
  "level": 2
}, {
  "value": "处理H5代码兼容性",
  "id": "处理h5代码兼容性",
  "level": 2
}, {
  "value": "监控内存与生命周期",
  "id": "监控内存与生命周期",
  "level": 2
}, {
  "value": "设备的WebView默认加载进程不一致导致加载H5页面白屏",
  "id": "设备的webview默认加载进程不一致导致加载h5页面白屏",
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
        id: "定位与解决web白屏问题",
        children: "定位与解决Web白屏问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web页面出现白屏的原因众多，本文列举了若干常见白屏问题的排查步骤，供开发者快速定位。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "首先排查权限和网络状态。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkweb/web-debugging/web-debugging-with-devtools",
          children: "使用DevTools工具调试前端页面"
        }), "定位具体报错类型（跨域、资源404、JS异常）。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在复杂布局场景中，排查渲染模式及组件约束条件的问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "处理H5代码兼容性问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从日志中排查生命周期和网络加载相关关键字。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["检查是否开启", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkweb/web-manage-cyber-security-privacy/web-secure-shield-mode",
          children: "坚盾守护模式"
        }), "，坚盾守护模式开启后相关限制见：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkweb/web-manage-cyber-security-privacy/web-secure-shield-mode#arkweb%E9%99%90%E5%88%B6%E7%9A%84html5%E7%89%B9%E6%80%A7",
          children: "ArkWeb限制的HTML5特性"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "检查权限和网络状态",
      children: "检查权限和网络状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用未开启联网或文件访问权限或者设备网络状态不佳，将导致Web组件加载失败或页面元素缺失，进而引起白屏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "验证设备的网络状态，包括是否已连接网络，设备自带的浏览器能否正常访问网页等（在线页面场景）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确保应用已添加网络权限：ohos.permission.INTERNET（在线页面必需）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"requestPermissions\":[\n  {\n    \"name\" : \"ohos.permission.INTERNET\"\n  }\n],\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启相关权限："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#domstorageaccess",
                  children: "domStorageAccess"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DOM Storage API权限，若不开启，无法使用localStorage存储数据，任何调用localStorage的代码都将失效，依赖本地存储的功能会异常。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#fileaccess",
                  children: "fileAccess"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "‌若不开启，文件读写功能完全被阻断，依赖文件的模块会崩溃。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#imageaccess",
                  children: "imageAccess"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "设置是否允许自动加载图片资源。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#onlineimageaccess",
                  children: "onlineImageAccess"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "设置是否允许从网络加载图片资源（通过HTTP和HTTPS访问的资源）。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#javascriptaccess",
                  children: "javaScriptAccess"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "设置是否允许执行JavaScript脚本。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .domStorageAccess(true)\n        .fileAccess(true)\n        .imageAccess(true)\n        .onlineImageAccess(true)\n        .javaScriptAccess(true)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["修改", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setcustomuseragent10",
            children: "UserAgent"
          }), "后再观察页面是否恢复正常。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  @State customUserAgent: string = ' DemoApp';\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onControllerAttached(() => {\n          console.info('onControllerAttached');\n          try {\n            let userAgent = this.controller.getUserAgent() + this.customUserAgent;\n            this.controller.setCustomUserAgent(userAgent);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用devtools工具进行页面内容验证",
      children: "使用DevTools工具进行页面内容验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在确保网络与权限配置无误后，若仍出现白屏，则应利用DevTools工具调试前端页面以及监听Web相关错误上报接口，来定位具体报错类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查阅控制台的错误信息，定位具体的资源加载失败问题。资源加载失败会导致页面元素缺失，布局紊乱，图片和动画效果失效等，严重时可能导致渲染进程崩溃，页面呈现空白。如图所示，依次排查："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（1）元素是否完整，html元素、结构是否正确。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（2）控制台是否有报错。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（3）网络里面是否有资源加载时间特别长等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(804036)/* ["default"] */.A) + "",
            width: "1513",
            height: "383"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["检查控制台，确认是否存在因MixedContent策略或CORS策略导致的异常，或JS错误等。可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkweb/web-manage-cyber-security-privacy/web-cross-origin",
            children: "解决Web组件本地资源跨域问题"
          }), "。为了提高安全性，ArkWeb内核禁止file协议和resource协议访问跨域请求。因此，在使用Web组件加载本地离线资源的时候，Web组件会拦截file协议和resource协议的跨域访问。Web组件无法访问本地跨域资源时，DevTools控制台会显示报错信息："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Access to script at 'xxx' from origin 'xxx' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes:   http, arkweb, data, chrome-extension, chrome, https, chrome-untrusted.\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "有如下两种解决方法："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方法一："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者应使用HTTP或HTTPS协议替代file或resource协议，确保Web组件能够成功访问跨域资源。替代的URL域名应为自定义构造，仅限于个人或组织使用，以防止与互联网上的实际域名冲突。此外，开发者需要利用Web组件的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#oninterceptrequest9",
            children: "onInterceptRequest"
          }), "方法，对本地资源进行拦截和相应替换。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下结合示例说明如何使用HTTP或HTTPS等协议解决本地资源跨域访问失败的问题。其中，index.html和js/script.js文件置于工程的rawfile目录下。当使用resource协议访问index.html时，js/script.js文件因跨域而被拦截，无法加载。在示例中，使用", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com/域名替换了原有的resource协议，同时利用onInterceptRequest接口替换资源，确保js/script.js文件可以成功加载，从而解决跨域拦截问题"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// main/ets/pages/Index.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  webviewController: webview.WebviewController = new webview.WebviewController();\n  // 构造域名和本地文件的映射表\n  schemeMap = new Map([\n    [\"https://www.example.com/index.html\", \"index.html\"],\n    [\"https://www.example.com/js/script.js\", \"js/script.js\"],\n  ])\n  // 构造本地文件和构造返回的格式mimeType\n  mimeTypeMap = new Map([\n    [\"index.html\", 'text/html'],\n    [\"js/script.js\", \"text/javascript\"]\n  ])\n\n  build() {\n    Row() {\n      Column() {\n        // 针对本地index.html,使用HTTP或HTTPS协议代替file协议或者resource协议，并且构造一个属于自己的域名。\n        // 本例中构造www.example.com为例。\n        Web({ src: \"https://www.example.com/index.html\", controller: this.webviewController })\n          .javaScriptAccess(true)\n          .fileAccess(true)\n          .domStorageAccess(true)\n          .geolocationAccess(true)\n          .width(\"100%\")\n          .height(\"100%\")\n          .onInterceptRequest((event) => {\n            if (!event) {\n              return;\n            }\n            // 此处匹配自己想要加载的本地离线资源，进行资源拦截替换，绕过跨域\n            if (this.schemeMap.has(event.request.getRequestUrl())) {\n              let rawfileName: string = this.schemeMap.get(event.request.getRequestUrl())!;\n              let mimeType = this.mimeTypeMap.get(rawfileName);\n              if (typeof mimeType === 'string') {\n                let response = new WebResourceResponse();\n                // 构造响应数据，如果本地文件在rawfile下，可以通过如下方式设置\n                response.setResponseData($rawfile(rawfileName));\n                response.setResponseEncoding('utf-8');\n                response.setResponseMimeType(mimeType);\n                response.setResponseCode(200);\n                response.setReasonMessage('OK');\n                response.setResponseIsReady(true);\n                return response;\n              }\n            }\n            return null;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- main/resources/rawfile/index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n</head>\n<body>\n  <script crossorigin src=\"./js/script.js\"></script>\n</body>\n</html>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// main/resources/rawfile/js/script.js\nconst body = document.body;\nconst element = document.createElement('div');\nelement.textContent = 'success';\nbody.appendChild(element);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方法二："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setpathallowinguniversalaccess12",
            children: "setPathAllowingUniversalAccess"
          }), "设置一个路径列表。当使用file协议访问该列表中的资源时，允许进行跨域访问本地文件。此外，一旦设置了路径列表，file协议将仅限于访问列表内的资源（此时，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#fileaccess",
            children: "fileAccess"
          }), "的行为将会被此接口行为覆盖）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "setPathAllowingUniversalAccess放开目录的跨域访问限制是一个高风险操作。基于最小权限原则，当前el1，el2放开的路径是固定的，路径列表中的路径应符合以下任一路径格式："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["应用文件目录通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#%E5%B1%9E%E6%80%A7",
                children: "Context.filesDir"
              }), "获取，其子目录示例如下："]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "/data/storage/el2/base/files/example"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "/data/storage/el2/base/haps/entry/files/example"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["应用资源目录通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#%E5%B1%9E%E6%80%A7",
                children: "Context.resourceDir"
              }), "获取，其子目录示例如下："]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "/data/storage/el1/bundle/entry/resources/resfile"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "/data/storage/el1/bundle/entry/resources/resfile/example"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["从API version 21开始，还包括了应用缓存目录通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#%E5%B1%9E%E6%80%A7",
                children: "Context.cacheDir"
              }), "获取，其子目录示例如下："]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "/data/storage/el2/base/cache"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "/data/storage/el2/base/haps/entry/cache/example"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "设置的目录路径中，不允许包含cache/web，否则会抛出异常码401。如果设置目录路径是cache，cache/web也不允许访问。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["从API version 21开始，还包括了应用临时目录通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#%E5%B1%9E%E6%80%A7",
                children: "Context.tempDir"
              }), "获取，其子目录示例如下："]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "/data/storage/el2/base/temp"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "/data/storage/el2/base/haps/entry/temp/example"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当路径列表中的任一路径不满足上述条件时，系统将抛出异常码401，并判定路径列表设置失败。如果路径列表设置为空，file协议的可访问范围将遵循", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#fileaccess",
            children: "fileAccess"
          }), "规则，具体示例如下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n\n  build() {\n    Row() {\n      Web({ src: '', controller: this.controller })\n        .onControllerAttached(() => {\n          try {\n            // 设置允许可以跨域访问的路径列表\n            this.controller.setPathAllowingUniversalAccess([\n              this.uiContext.getHostContext()!.resourceDir,\n              this.uiContext.getHostContext()!.filesDir + '/example'\n            ])\n            this.controller.loadUrl('file://' + this.uiContext.getHostContext()!.resourceDir + '/index.html')\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code}, Message: ${(error as BusinessError).message}`);\n          }\n        })\n        .javaScriptAccess(true)\n        .fileAccess(true)\n        .domStorageAccess(true)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HTML示例代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- main/resources/resfile/index.html -->\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\">\n    <title>Demo</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover\">\n    <script>\n        function getFile() {\n          var file = \"file:///data/storage/el1/bundle/entry/resources/resfile/js/script.js\";\n          // 使用file协议通过XMLHttpRequest跨域访问本地js文件。\n          var xmlHttpReq = new XMLHttpRequest();\n          xmlHttpReq.onreadystatechange = function(){\n          console.info(\"readyState:\" + xmlHttpReq.readyState);\n          console.info(\"status:\" + xmlHttpReq.status);\n          if(xmlHttpReq.readyState == 4){\n            if (xmlHttpReq.status == 200) {\n               // 如果ets侧正确设置路径列表，则此处能正常获取资源\n              const element = document.getElementById('text');\n              element.textContent = \"load \" + file + \" success\";\n            } else {\n                // 如果ets侧不设置路径列表，则此处会触发CORS跨域检查错误\n                const element = document.getElementById('text');\n                element.textContent = \"load \" + file + \" failed\";\n              }\n          }\n        }\n        xmlHttpReq.open(\"GET\", file);\n        xmlHttpReq.send(null);\n      }\n    </script>\n</head>\n\n<body>\n  <div class=\"page\">\n      <button id=\"example\" onclick=\"getFile()\">loadFile</button>\n  </div>\n<div id=\"text\"></div>\n</body>\n\n</html>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// main/resources/resfile/js/script.js\nconst body = document.body;\nconst element = document.createElement('div');\nelement.textContent = 'success';\nbody.appendChild(element);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["查看onErrorReceive、onHttpErrorReceive、onSslErrorEvent、onHttpAuthRequest、onClientAuthenticationRequest等错误上报接口是否有被调用。请根据返回的错误码，对照", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/arkts-apis-neterrorlist/arkts-apis-neterrorlist",
            children: "网络协议栈错误列表"
          }), "进行排查。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onerrorreceive",
                  children: "onErrorReceive"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "资源加载失败会上报该回调，比如访问内核不支持的scheme， 会报302(UNKNOWN_URL_SCHEME)。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onhttperrorreceive",
                  children: "onHttpErrorReceive"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "服务器返回HTTP错误码，这类问题一般需要跟服务器进行联调。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onhttpauthrequest9",
                  children: "onHttpAuthRequest"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "服务器返回407需要端侧提供用户名密码认证，如果不正确处理，可能会导致加载异常、白屏。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onclientauthenticationrequest9",
                  children: "onClientAuthenticationRequest"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "服务器向端侧请求证书，如果不正确处理，会导致页面加载异常。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onsslerrorevent12",
                  children: "onSslErrorEvent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "证书错误，需要应用根据证书错误信息进行排查，是证书配错了？还是过期了。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "复杂的布局与渲染模式导致白屏",
      children: "复杂的布局与渲染模式导致白屏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若页面使用了复杂布局或渲染模式，需注意其应用场景和约束条件，不当使用可能导致布局混乱或白屏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件提供了两种渲染模式，能够根据不同的容器大小进行适配，从而满足使用场景中对容器尺寸的需求，详情见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-render-layout/web-render-mode",
        children: "Web组件渲染模式"
      }), "。在使用过程中需要注意以下几点："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["异步渲染模式下（renderMode: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#rendermode12",
          children: "RenderMode"
        }), ".ASYNC_RENDER），Web组件的宽高不能超过7,680px（物理像素），超过会导致白屏。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件提供了自适应页面布局的能力，详情见 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-render-layout/web-fit-content",
        children: "Web组件大小自适应页面内容布局"
      }), "，使用时也需要注意以下约束条件："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置同步渲染模式：webSetting({renderingMode: WebRenderingMode.SYNCHRONOUS})。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "关闭滚动效果：webSetting({overScrollMode: OverScrollMode.NEVER})。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此模式下不支持动态调整组件高度，确保页面高度固定。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "避免在FIT_CONTENT模式下启用键盘避让属性RESIZE_CONTENT，以免导致布局失效。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "css样式height：<number> vh和Web组件大小自适应页面布局存在计算冲突，请检查height：<number> vh是否是由body节点而内的第一个高度css样式。如以下结构，id为2的dom节点高度将为0，导致白屏。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<body>\n  <div id = \"1\">\n    <div id = \"2\" style = \"height: 100vh\">子dom</div>\n    <div id = \"3\" style = \"height: 20px\">子dom</div>\n  </div>\n</body>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解决此白屏问题的参考方案如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "子dom使用具体高度样式撑开父元素。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "<body>\n  <div id = \"1\">\n    <div id = \"2\"><div style = \"height: 20px\"><div/></div>\n    <div id = \"3\" style = \"height: 20px\">子dom</div>\n  </div>\n</body>\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "父元素使用实际高度样式。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "<body>\n  <div id = \"1\">\n    <div id = \"2\" style = \"height: 20px\">子dom</div>\n    <div id = \"3\" style = \"height: 20px\">子dom</div>\n  </div>\n</body>\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "处理h5代码兼容性",
      children: "处理H5代码兼容性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "兼容性问题处理不当也会导致页面白屏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "特殊协议拦截。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若H5页面调用tel:、mailto:等协议导致白屏，需通过onInterceptRequest拦截并调用系统拨号能力："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".onInterceptRequest((event) => {\n    if (event.request.url.startsWith('tel:')) {\n        // 调用系统拨号能力\n        call.makeCall({ phoneNumber: '123456' });\n        return { responseCode: 404 }; // 阻止默认行为\n    }\n    return null;\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监控内存与生命周期",
      children: "监控内存与生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内存达到阈值会导致渲染进程被终止，从而引发白屏现象；同样，渲染进程创建失败或非正常销毁也会导致白屏。可从日志中排查原因。检查Web组件是否与WebController正确绑定，或是否因WebController提前释放导致白屏。关注日志中与Render进程相关的信息：是否存在内存泄漏使渲染内存不足。关键字“MEMORY_PRESSURE_LEVEL_CRITICAL”表明内存已达到阈值，此情形下Web可能遭遇黑屏、花屏或闪屏等异常状况，需排查是否存在内存泄漏问题。Render进程是否成功启动或异常退出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面列举一些日志中的关键字和对应的情况说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "日志关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "StartRenderProcess failed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渲染render进程启动失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MEMORY_PRESSURE_LEVEL_CRITICAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "整机内存压力达到阈值，继续使用可能造成黑屏、闪屏白屏等问题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "crashpad SandboxedHandler::HandlerCrash, received signo = xxx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渲染render进程crash，会造成白屏、Web组件卡死等问题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SharedContextState context lost via Skia OOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "共享内存不足，会导致应用闪退、花屏卡死等问题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CreateNativeViewGLSurfaceEGLOhos::normal surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建egl surface成功，如果没有该日志打印则会造成白屏问题。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INFO: request had no response within 5 seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "final url: ***, error_code xxx(net::ERR_XXX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主资源加载报错。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面说明一下Web组件网络加载过程中的关键日志，正常情况下一个Web组件的加载过程应该包含这些关键节点："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(12004)/* ["default"] */.A) + "",
        width: "1467",
        height: "477"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "日志关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NWebRenderMain start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程启动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RendererMain startup 、  render thread init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程初始化开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event_message: WillProcessNavigationResponse source_id xxx navigation_handle id: xxx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收到主资源的response。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event_message: commit navigation in main frame, routing_id: 4, url: ***"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commit到子进程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RenderFrameImpl::CommitNavigation、  event_message: page load start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子进程收到commit。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NWebHandlerDelegate::OnNavigationEntryCommitted、  event_message: Commit source_id xxx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主进程收到DidCommitNavigation。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event_message: load_timing_info error_code:0,..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主资源加载完成，以及各阶段耗时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event_message: MarkFirstContentfulPaint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标记解析到有可显示内容的元素。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NWebHandlerDelegate::OnPageVisible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第一帧展示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NWebHandlerDelegate::OnFirstContentfulPaint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第一帧有内容展示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event_message: content load finished"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面解析完成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event_message: page load finished、  NWebHandlerDelegate::OnLoadEnd、  NWebHandlerDelegate::MainFrame OnLoadEnd、  NWebHandlerDelegate::OnFirstMeaningfulPaint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面以及子资源加载完成。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设备的webview默认加载进程不一致导致加载h5页面白屏",
      children: "设备的WebView默认加载进程不一致导致加载H5页面白屏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用WebView加载H5在Phone上表现正常，但是在Table/PC/2in1上白屏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "原因："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Table/PC/2in1的WebView默认采用多进程加载，iframe默认使用子进程加载。主进程加载完成后，若子进程尚未加载完成，会导致白屏现象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方案："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setrenderprocessmode12",
        children: "setRenderProcessMode"
      }), "设置WebView渲染模式为单进程加载。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "webview.WebviewController.setRenderProcessMode(webview.RenderProcessMode.SINGLE);\n"
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
804036(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798606-f91927f4c079c123acc2c40660241c49.png");

},
12004(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438301-7df45ae9eb704e2df2973caf2d845068.png");

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