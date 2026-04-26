"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["827380"], {
762440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_set_attributes_events_web_default_useragent_web_default_useragent_md_d2d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-set-attributes-events-web-default-useragent-web-default-useragent-md-d2d.json
var site_docs_arkweb_web_set_attributes_events_web_default_useragent_web_default_useragent_md_d2d_namespaceObject = JSON.parse('{"id":"arkweb/web-set-attributes-events/web-default-useragent/web-default-useragent","title":"User-Agent开发指导","description":"User-Agent（简称UA）是一个特殊的字符串，包含设备类型、操作系统及版本等关键信息。在Web开发中，这个字符串使服务器能够识别请求的来源设备及其特性，从而根据这些信息提供定制化的内容和服务。如果页面无法正确识别UA，可能会导致多种异常情况。例如，为移动设备优化的页面布局可能会在桌面设备上显示错乱，反之亦然。此外，某些特定的浏览器功能或CSS样式可能仅在特定的浏览器版本中受支持，如果页面无法根据UA字符串做出正确的判断，就可能导致渲染问题或逻辑错误。","source":"@site/docs/arkweb/web-set-attributes-events/web-default-useragent/web-default-useragent.md","sourceDirName":"arkweb/web-set-attributes-events/web-default-useragent","slug":"/arkweb/web-set-attributes-events/web-default-useragent/","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-default-useragent/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"User-Agent开发指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-default-useragent","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Web组件的生命周期","permalink":"/harmonyos-docs-site/arkweb/web-event-sequence/"},"next":{"title":"管理Cookie及数据存储","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-cookie-and-data-storage-mgmt/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-set-attributes-events/web-default-useragent/web-default-useragent.md


const frontMatter = {
	title: 'User-Agent开发指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-default-useragent',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'User-Agent开发指导';

const assets = {

};



const toc = [{
  "value": "默认User-Agent结构",
  "id": "默认user-agent结构",
  "level": 2
}, {
  "value": "自定义User-Agent结构",
  "id": "自定义user-agent结构",
  "level": 2
}, {
  "value": "相关User-Agent接口优先级",
  "id": "相关user-agent接口优先级",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "如何通过User-Agent来识别HarmonyOS操作系统中不同设备",
  "id": "如何通过user-agent来识别harmonyos操作系统中不同设备",
  "level": 3
}, {
  "value": "如何模拟HarmonyOS操作系统的User-Agent进行前端调试",
  "id": "如何模拟harmonyos操作系统的user-agent进行前端调试",
  "level": 3
}, {
  "value": "如何在HarmonyOS中自定义User-Agent以实现H5兼容性",
  "id": "如何在harmonyos中自定义user-agent以实现h5兼容性",
  "level": 3
}, {
  "value": "如何解决H5页面的UA兼容性问题",
  "id": "如何解决h5页面的ua兼容性问题",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "user-agent开发指导",
        children: "User-Agent开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "User-Agent（简称UA）是一个特殊的字符串，包含设备类型、操作系统及版本等关键信息。在Web开发中，这个字符串使服务器能够识别请求的来源设备及其特性，从而根据这些信息提供定制化的内容和服务。如果页面无法正确识别UA，可能会导致多种异常情况。例如，为移动设备优化的页面布局可能会在桌面设备上显示错乱，反之亦然。此外，某些特定的浏览器功能或CSS样式可能仅在特定的浏览器版本中受支持，如果页面无法根据UA字符串做出正确的判断，就可能导致渲染问题或逻辑错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "默认user-agent结构",
      children: "默认User-Agent结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "默认User-Agent定义"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Mozilla/5.0 ({DeviceType}; {OSName} {OSVersion}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{ChromeCompatibleVersion}.0.0.0 Safari/537.36  ArkWeb/{ArkWeb VersionCode} {DeviceCompat} {扩展区}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "举例说明"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Mozilla/5.0 (Phone; OpenHarmony 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36  ArkWeb/4.1.6.1 Mobile\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "字段说明"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "字段"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "含义"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DeviceType"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["当前的设备类型。  取值范围：  - Phone：", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/doc/design-guides/phone-0000001776694632",
                  children: "手机"
                }), "设备  - Tablet：", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/doc/design-guides/pad-0000001823654157",
                  children: "平板"
                }), "设备  - PC：", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://developer.huawei.com/consumer/cn/doc/design-guides/2in1-0000001777531700",
                  children: "2in1"
                }), "设备"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OSName"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["基础", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/glossary#section15569823194110",
                  children: "操作系统名称"
                }), "。  默认取值：OpenHarmony"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OSVersion"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "基础操作系统版本，两位数字，M.S。  例如HarmonyOS-6.1.0.31取值为6.1"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChromeCompatibleVersion"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["兼容Chrome主版本的版本号，从114版本开始演进。  对应取值参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/arkweb/web-component-overview#%E7%BA%A6%E6%9D%9F%E4%B8%8E%E9%99%90%E5%88%B6",
                  children: "约束与限制"
                }), "，例如HarmonyOS 6.0上默认的Chrome版本为132"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ArkWeb"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HarmonyOS版本Web内核名称。  默认取值：ArkWeb"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ArkWeb VersionCode"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ArkWeb版本号，格式a.b.c.d。  例如4.1.6.1"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DeviceCompat"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "前向兼容字段。  手机设备默认取值为Mobile  其他设备默认取值为空"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "扩展区"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "三方应用可以扩展的字段。  三方应用使用ArkWeb组件时，可以做UA扩展，例如加入APP相关信息标识。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(667885)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前默认User-Agent的ArkWeb字段前有两个空格。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当前通过User-Agent中是否含有\"Mobile\"字段来判断是否开启前端HTML页面中meta标签的viewport属性。当User-Agent中不含有\"Mobile\"字段时，meta标签中viewport属性默认关闭，此时可通过显性设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#metaviewport12",
          children: "metaViewport"
        }), "属性为true来覆盖关闭状态。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建议通过OpenHarmony关键字识别是否是HarmonyOS设备，同时可以通过DeviceType识别设备类型用于不同设备上的页面显示（ArkWeb关键字表示设备使用的web内核，OpenHarmony关键字表示设备使用的操作系统，因此推荐通过OpenHarmony关键字识别是否是HarmonyOS设备）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "{DistributionOSName}和{DistributionOSVersion}字段在API version 15之前的版本中未启用，从API version 15版本开始不在默认User-Agent中体现。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(505212)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了确保兼容性，部分浏览器可能会在用户代理（User-Agent）中增加非OpenHarmony的操作系统名称。针对用户代理中同时包含“OpenHarmony”和非OpenHarmony操作系统名称的场景，建议网页将OpenHarmony的处理逻辑放置在其他操作系统处理逻辑之前。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义user-agent结构",
      children: "自定义User-Agent结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在下面的示例中，通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#getuseragent",
        children: "getUserAgent()"
      }), "接口获取当前默认的用户代理（User-Agent）字符串。这一接口提供的默认User-Agent信息为开发者提供了基础，使开发者能够基于这个默认信息进行定制或扩展。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('getUserAgent')\n        .onClick(() => {\n          try {\n            let userAgent = this.controller.getUserAgent();\n            console.info(\"userAgent: \" + userAgent);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setcustomuseragent10",
        children: "setCustomUserAgent()"
      }), "接口设置自定义用户代理，但请注意，此操作会覆盖系统的用户代理。因此，我们建议将扩展字段追加在默认用户代理的末尾，比如三方应用程序的开发场景，可以在系统默认用户代理字符串的末尾追加特定的APP标识，这样既能保留原有用户代理信息，又能增加自定义的应用识别信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当Web组件src设置了url时，建议在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#oncontrollerattached10",
        children: "onControllerAttached"
      }), "回调事件中设置User-Agent，设置方式请参考示例。不建议将User-Agent设置在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onloadintercept10",
        children: "onLoadIntercept"
      }), "回调事件中，会概率性出现设置失败。若未在onControllerAttached回调事件中设置User-Agent，后续调用setCustomUserAgent方法时，可能会出现加载的页面与实际设置User-Agent不符的异常现象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Web组件src设置为空字符串时，建议先调用setCustomUserAgent方法设置User-Agent，再通过loadUrl加载具体页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  // 三方应用相关信息标识\n  @State customUserAgent: string = ' DemoApp';\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n      .onControllerAttached(() => {\n        console.info(\"onControllerAttached\");\n        try {\n          let userAgent = this.controller.getUserAgent() + this.customUserAgent;\n          this.controller.setCustomUserAgent(userAgent);\n        } catch (error) {\n          console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n        }\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setappcustomuseragent20",
        children: "setAppCustomUserAgent()"
      }), "接口设置应用级自定义用户代理，或者通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setuseragentforhosts20",
        children: "setUserAgentForHosts()"
      }), "对特定网站设置应用级自定义用户代理，覆盖系统的用户代理，应用内所有Web组件生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["建议在Web组件创建前先调用静态接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#getdefaultuseragent14",
        children: "getDefaultUserAgent"
      }), "获取默认的用户代理（User-Agent）字符串，然后调用setAppCustomUserAgent，setUserAgentForHosts方法设置User-Agent，再创建指定src的Web组件或通过loadUrl加载具体页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  aboutToAppear(): void {\n    try {\n      webview.WebviewController.initializeWebEngine();\n      let defaultUserAgent = webview.WebviewController.getDefaultUserAgent();\n      let appUA = defaultUserAgent + \" appUA\";\n      webview.WebviewController.setAppCustomUserAgent(appUA);\n      webview.WebviewController.setUserAgentForHosts(\n        appUA,\n        [\n          \"www.example.com\",\n          \"www.baidu.com\"\n        ]\n      );\n    } catch (error) {\n      console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n    }\n  }\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在下面的示例中，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#getcustomuseragent10",
        children: "getCustomUserAgent()"
      }), "接口获取自定义用户代理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  @State userAgent: string = '';\n\n  build() {\n    Column() {\n      Button('getCustomUserAgent')\n        .onClick(() => {\n          try {\n            this.userAgent = this.controller.getCustomUserAgent();\n            console.info(\"userAgent: \" + this.userAgent);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "相关user-agent接口优先级",
      children: "相关User-Agent接口优先级"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "优先级"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setCustomUserAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最高"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对调用的Web组件生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setUserAgentForHosts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低于setCustomUserAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应用中所有Web组件访问指定网站生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setAppCustomUserAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低于setUserAgentForHosts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应用中所有Web组件生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ArkWeb默认UA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最低"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对应用中所有Web组件生效，只读，通过getDefaultUserAgent获取。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何通过user-agent来识别harmonyos操作系统中不同设备",
      children: "如何通过User-Agent来识别HarmonyOS操作系统中不同设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS设备的识别主要通过User-Agent中的系统、系统版本和设备类型三个维度来判断。建议同时检查上述信息，以确保更准确的设备识别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统识别"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过User-Agent中的{OSName}字段识别HarmonyOS系统。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const isHarmonyOS = () => /OpenHarmony/i.test(navigator.userAgent);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统版本识别"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过User-Agent中的{OSName}和{OSVersion}字段识别HarmonyOS NEXT系统及系统版本。格式为：OpenHarmony + 版本号。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 检测是否是HarmonyOS NEXT系统\nconst matches = navigator.userAgent.match(/OpenHarmony (\\d+\\.?\\d*)/);\nmatches?.length && Number(matches[1]) >= 5;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备类型识别"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过deviceType字段来识别不同设备类型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 检测是否为手机设备\nconst isPhone = () => /Phone/i.test(navigator.userAgent);\n\n// 检测是否为平板设备\nconst isTablet = () => /Tablet/i.test(navigator.userAgent);\n\n// 检测是否为2in1设备\nconst is2in1 = () => /PC/i.test(navigator.userAgent);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何模拟harmonyos操作系统的user-agent进行前端调试",
      children: "如何模拟HarmonyOS操作系统的User-Agent进行前端调试"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Windows/Mac/Linux等操作系统中，可以通过Chrome/Edge/Firefox等浏览器DevTools提供的User-Agent复写能力，模拟HarmonyOS User-Agent。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何在harmonyos中自定义user-agent以实现h5兼容性",
      children: "如何在HarmonyOS中自定义User-Agent以实现H5兼容性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setcustomuseragent10",
        children: "setCustomUserAgent"
      }), "接口以支持User-Agent的自定义设置。为适配移动端H5页面通常依赖的UA标识检测（如Mobile、OpenHarmony等），并确保不覆盖系统默认UA信息，推荐按如下方式操作：首先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#getdefaultuseragent14",
        children: "getDefaultUserAgent"
      }), "接口获取系统默认User-Agent字符串，随后将H5兼容所需的自定义标识字段追加至该字符串末尾，最后调用setCustomUserAgent接口设置修改后的完整UA字符串。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何解决h5页面的ua兼容性问题",
      children: "如何解决H5页面的UA兼容性问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q：移动设备上网页呈现电脑版样式或电脑设备上网页呈现移动样式展示"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A：网站会针对不同UA展示不同样式页面。需要移动设备UA设置DeviceCompat为\"Mobile\"，DeviceType为\"Phone\"，PC设备UA设置DeviceCompat为\"\"，DeviceType为\"PC\"，平板设备UA设置DeviceCompat为\"\"，DeviceType则为\"Tablet\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q：部分网页打不开或显示“不支持的浏览器”"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A：网页未适配OpenHarmony UA，需要网页对\"OpenHarmony\"标识作兼容处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q：页面循环跳转"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A：应用端对存在跳转关系的两个页面设置了冲突的UA标识‌，导致服务端重定向逻辑陷入死循环。确保应用端在调用setUserAgentForHosts对关联网站设置兼容UA时保持逻辑一致， 避免因UA差异触发网页跳转逻辑循环。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Q：网页提供的下载链接与设备平台不匹配，如OpenHarmony设备上下载安装包为apk等"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A：UA 中的“兼容性字段”干扰了服务端识别。为了保障网页兼容性，部分浏览器可能会在用户代理（User-Agent）中增加非OpenHarmony的操作系统名称，如果服务端的解析逻辑顺序不当，可能会忽略掉真正的设备标识。针对这种场景，建议网页将OpenHarmony的处理逻辑放置在其他操作系统处理逻辑之前。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/harmonyos_samples/web-user-agent",
          children: "Web用户代理"
        })
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
667885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
505212(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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