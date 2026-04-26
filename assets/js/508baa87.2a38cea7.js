"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["84824"], {
887568(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkweb_api_arkweb_arkts_js_apis_webview_arkts_apis_webview_webdownloaditem_arkts_apis_webview_webdownloaditem_md_508_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkweb-api-arkweb-arkts-js-apis-webview-arkts-apis-webview-webdownloaditem-arkts-apis-webview-webdownloaditem-md-508.json
var site_docs_ref_arkweb_api_arkweb_arkts_js_apis_webview_arkts_apis_webview_webdownloaditem_arkts_apis_webview_webdownloaditem_md_508_namespaceObject = JSON.parse('{"id":"arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloaditem/arkts-apis-webview-webdownloaditem","title":"Class (WebDownloadItem)","description":"表示下载任务，您可以使用此对象来操作相应的下载任务。","source":"@site/docs-ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloaditem/arkts-apis-webview-webdownloaditem.md","sourceDirName":"arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloaditem","slug":"/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloaditem/arkts-apis-webview-webdownloaditem","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloaditem/arkts-apis-webview-webdownloaditem","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"Class (WebDownloadItem)","sidebar_position":19,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webdownloaditem","kit":"应用框架","last_updated":"2026-04-22","slug":"arkts-apis-webview-webdownloaditem"},"sidebar":"ref","previous":{"title":"Class (WebDownloadDelegate)","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloaddelegate/arkts-apis-webview-webdownloaddelegate"},"next":{"title":"Class (WebDownloadManager)","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloadmanager/arkts-apis-webview-webdownloadmanager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webdownloaditem/arkts-apis-webview-webdownloaditem.md


const frontMatter = {
	title: 'Class (WebDownloadItem)',
	sidebar_position: 19,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webdownloaditem',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'arkts-apis-webview-webdownloaditem'
};
const contentTitle = 'Class (WebDownloadItem)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "getGuid11+",
  "id": "getguid11",
  "level": 2
}, {
  "value": "getCurrentSpeed11+",
  "id": "getcurrentspeed11",
  "level": 2
}, {
  "value": "getPercentComplete11+",
  "id": "getpercentcomplete11",
  "level": 2
}, {
  "value": "getTotalBytes11+",
  "id": "gettotalbytes11",
  "level": 2
}, {
  "value": "getState11+",
  "id": "getstate11",
  "level": 2
}, {
  "value": "getLastErrorCode11+",
  "id": "getlasterrorcode11",
  "level": 2
}, {
  "value": "getMethod11+",
  "id": "getmethod11",
  "level": 2
}, {
  "value": "getMimeType11+",
  "id": "getmimetype11",
  "level": 2
}, {
  "value": "getUrl11+",
  "id": "geturl11",
  "level": 2
}, {
  "value": "getSuggestedFileName11+",
  "id": "getsuggestedfilename11",
  "level": 2
}, {
  "value": "getReceivedBytes11+",
  "id": "getreceivedbytes11",
  "level": 2
}, {
  "value": "getFullPath11+",
  "id": "getfullpath11",
  "level": 2
}, {
  "value": "serialize11+",
  "id": "serialize11",
  "level": 2
}, {
  "value": "deserialize11+",
  "id": "deserialize11",
  "level": 2
}, {
  "value": "start11+",
  "id": "start11",
  "level": 2
}, {
  "value": "cancel11+",
  "id": "cancel11",
  "level": 2
}, {
  "value": "pause11+",
  "id": "pause11",
  "level": 2
}, {
  "value": "resume11+",
  "id": "resume11",
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
        id: "class-webdownloaditem",
        children: "Class (WebDownloadItem)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示下载任务，您可以使用此对象来操作相应的下载任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(952889)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本Class首批接口从API version 11开始支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "示例效果请以真机运行为准。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在下载过程中，下载的进度会通过WebDownloadDelegate通知给使用者，使用者可以通过参数WebDownloadItem来操作下载任务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前WebDownloadItem支持的下载文件名最长长度为255字节。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getguid11",
      children: "getGuid11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getGuid(): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取下载任务的唯一ID。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载任务的唯一ID。"
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update guid: \" + webDownloadItem.getGuid());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getcurrentspeed11",
      children: "getCurrentSpeed11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getCurrentSpeed(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取下载的速度，单位：字节每秒。"
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
            children: "下载的速度（字节每秒）。"
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update current speed: \" + webDownloadItem.getCurrentSpeed());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getpercentcomplete11",
      children: "getPercentComplete11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPercentComplete(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取下载的进度，100代表下载完成。"
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
            children: "下载完成的进度，100代表下载完成，-1代表进度未知。"
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gettotalbytes11",
      children: "getTotalBytes11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getTotalBytes(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取待下载文件的总长度。"
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
            children: "待下载文件的总长度，-1代表总大小未知。单位：字节。"
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update total bytes: \" + webDownloadItem.getTotalBytes());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getstate11",
      children: "getState11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getState(): WebDownloadState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取下载的状态。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-e/arkts-apis-webview-e#webdownloadstate11",
              children: "WebDownloadState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载的状态。"
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update download state: \" + webDownloadItem.getState());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getlasterrorcode11",
      children: "getLastErrorCode11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getLastErrorCode(): WebDownloadErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取下载的错误码。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-e/arkts-apis-webview-e#webdownloaderrorcode11",
              children: "WebDownloadErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载发生错误的时候的错误码。"
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n              console.info(\"download error code: \" + webDownloadItem.getLastErrorCode());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getmethod11",
      children: "getMethod11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getMethod(): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取下载任务的请求方式。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载的请求方式。"
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download， method:\" + webDownloadItem.getMethod());\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getmimetype11",
      children: "getMimeType11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getMimeType(): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取下载的媒体类型（例如，一个声音文件可能被标记为 audio/ogg ，一个图像文件可能是 image/png）。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载的媒体类型（例如，一个声音文件可能被标记为 audio/ogg ，一个图像文件可能是 image/png）。"
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download， mime type:\" + webDownloadItem.getMimeType());\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "geturl11",
      children: "getUrl11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUrl(): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取下载的请求地址。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载的请求地址。"
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download, url:\" + webDownloadItem.getUrl());\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getsuggestedfilename11",
      children: "getSuggestedFileName11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSuggestedFileName(): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取下载的建议文件名。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载的建议文件名。"
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download, suggest name:\" + webDownloadItem.getSuggestedFileName());\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getreceivedbytes11",
      children: "getReceivedBytes11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getReceivedBytes(): number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取已经接收的字节数。"
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
            children: "已经接收的字节数。"
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n              console.info(\"download update received bytes: \" + webDownloadItem.getReceivedBytes());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getfullpath11",
      children: "getFullPath11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getFullPath(): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取下载文件在磁盘上的全路径。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载文件在磁盘上的全路径。"
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n              console.info(\"download finish full path: \" + webDownloadItem.getFullPath());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "serialize11",
      children: "serialize11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "serialize(): Uint8Array"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将失败的下载序列化到一个字节数组。"
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
            children: "Uint8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "失败的下载序列化后的字节数组。"
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n  failedData: Uint8Array = new Uint8Array();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n              // 序列化失败的下载到一个字节数组。\n              this.failedData = webDownloadItem.serialize();\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deserialize11",
      children: "deserialize11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static deserialize(serializedData: Uint8Array): WebDownloadItem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将序列化后的字节数组反序列化为一个WebDownloadItem对象。"
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
            children: "serializedData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uint8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "序列化后的下载。"
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
            children: "WebDownloadItem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从字节数组反序列化为一个WebDownloadItem对象。"
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
            children: "Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed."
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n  failedData: Uint8Array = new Uint8Array();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n              // 序列化失败的下载到一个字节数组。\n              this.failedData = webDownloadItem.serialize();\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('resumeDownload')\n        .onClick(() => {\n          try {\n            webview.WebDownloadManager.resumeDownload(webview.WebDownloadItem.deserialize(this.failedData));\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "start11",
      children: "start11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "start(downloadPath: string): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开始下载到指定目录，参数为下载文件的磁盘存储路径（包含文件名）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(273610)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口应在WebDownloadDelegate的onBeforeDownload回调中使用。若在WebDownloadDelegate的onBeforeDownload中未调用start('xxx')，则下载任务将保持在PENDING状态。处于PENDING状态的下载会将文件下载到临时目录，临时文件会在WebDownloadItem.start指定目标路径后被重命名为目标路径，未下载完成的部分会在WebDownloadItem.start指定目标路径后直接下载到目标路径。如果在调用WebDownloadItem.start之前不希望下载到临时文件路径，可以先通过WebDownloadItem.cancel取消当前下载任务，随后通过WebDownloadManager.resumeDownload恢复被取消的下载任务。"
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
            children: "downloadPath"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "下载文件的路径（包含文件名），路径长度与文件管理中长度一致，最长255字节。"
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
            children: "Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed."
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n  failedData: Uint8Array = new Uint8Array();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n              // 序列化失败的下载到一个字节数组。\n              this.failedData = webDownloadItem.serialize();\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('resumeDownload')\n        .onClick(() => {\n          try {\n            webview.WebDownloadManager.resumeDownload(webview.WebDownloadItem.deserialize(this.failedData));\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cancel11",
      children: "cancel11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cancel(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消一个正在下载的下载任务。"
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n  download: webview.WebDownloadItem = new webview.WebDownloadItem();\n  failedData: Uint8Array = new Uint8Array();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n              this.download = webDownloadItem;\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n              // 序列化失败的下载到一个字节数组。\n              this.failedData = webDownloadItem.serialize();\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('resumeDownload')\n        .onClick(() => {\n          try {\n            webview.WebDownloadManager.resumeDownload(webview.WebDownloadItem.deserialize(this.failedData));\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('cancel')\n        .onClick(() => {\n          try {\n            this.download.cancel();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pause11",
      children: "pause11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pause(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "暂停一个正在下载的下载任务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "17100019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The download task is not started yet."
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n  download: webview.WebDownloadItem = new webview.WebDownloadItem();\n  failedData: Uint8Array = new Uint8Array();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n              this.download = webDownloadItem;\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n              // 序列化失败的下载到一个字节数组。\n              this.failedData = webDownloadItem.serialize();\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('resumeDownload')\n        .onClick(() => {\n          try {\n            webview.WebDownloadManager.resumeDownload(webview.WebDownloadItem.deserialize(this.failedData));\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('cancel')\n        .onClick(() => {\n          try {\n            this.download.cancel();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('pause')\n        .onClick(() => {\n          try {\n            this.download.pause();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resume11",
      children: "resume11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resume(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "恢复一个暂停的下载任务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Web.Webview.Core"]
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
            children: "17100016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The download task is not paused."
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
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  delegate: webview.WebDownloadDelegate = new webview.WebDownloadDelegate();\n  download: webview.WebDownloadItem = new webview.WebDownloadItem();\n  failedData: Uint8Array = new Uint8Array();\n\n  build() {\n    Column() {\n      Button('setDownloadDelegate')\n        .onClick(() => {\n          try {\n            this.delegate.onBeforeDownload((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"will start a download.\");\n              // 传入一个下载路径，并开始下载。\n              webDownloadItem.start(\"/data/storage/el2/base/cache/web/\" + webDownloadItem.getSuggestedFileName());\n            })\n            this.delegate.onDownloadUpdated((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download update percent complete: \" + webDownloadItem.getPercentComplete());\n              this.download = webDownloadItem;\n            })\n            this.delegate.onDownloadFailed((webDownloadItem: webview.WebDownloadItem) => {\n              console.error(\"download failed guid: \" + webDownloadItem.getGuid());\n              // 序列化失败的下载到一个字节数组。\n              this.failedData = webDownloadItem.serialize();\n            })\n            this.delegate.onDownloadFinish((webDownloadItem: webview.WebDownloadItem) => {\n              console.info(\"download finish guid: \" + webDownloadItem.getGuid());\n            })\n            this.controller.setDownloadDelegate(this.delegate);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('startDownload')\n        .onClick(() => {\n          try {\n            this.controller.startDownload('https://www.example.com');\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('resumeDownload')\n        .onClick(() => {\n          try {\n            webview.WebDownloadManager.resumeDownload(webview.WebDownloadItem.deserialize(this.failedData));\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('cancel')\n        .onClick(() => {\n          try {\n            this.download.cancel();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('pause')\n        .onClick(() => {\n          try {\n            this.download.pause();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Button('resume')\n        .onClick(() => {\n          try {\n            this.download.resume();\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
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
952889(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
273610(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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