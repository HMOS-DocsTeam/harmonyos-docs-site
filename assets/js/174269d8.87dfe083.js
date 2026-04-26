"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["321435"], {
518138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_assetdownload_graphics_accelerate_assetdownload_service_graphics_accelerate_assetdownload_back_graphics_accelerate_assetdownload_back_system_graphics_accelerate_assetdownload_back_syst_174_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-assetdownload-graphics-accelerate-assetdownload-service-graphics-accelerate-assetdownload-back-graphics-accelerate-assetdownload-back-system-graphics-accelerate-assetdownload-back-syst-174.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_assetdownload_graphics_accelerate_assetdownload_service_graphics_accelerate_assetdownload_back_graphics_accelerate_assetdownload_back_system_graphics_accelerate_assetdownload_back_syst_174_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-system/graphics-accelerate-assetdownload-back-system","title":"extension系统托管下载","description":"用户在应用市场安装游戏后、或更新游戏后、设备满足闲时条件时，在游戏未启动状态下，若检测到该游戏有资源包需要更新，将使用*系统下载器*（游戏资源加速服务）自动下载资源包。","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-system/graphics-accelerate-assetdownload-back-system.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-system","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-system/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-system/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"extension系统托管下载","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-back-system","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发准备","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-prepare/"},"next":{"title":"extension协同下载","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-self/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-system/graphics-accelerate-assetdownload-back-system.md


const frontMatter = {
	title: 'extension系统托管下载',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-back-system',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'extension系统托管下载';

const assets = {

};



const toc = [{
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "extension系统托管下载",
        children: "extension系统托管下载"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用户在应用市场安装游戏后、或更新游戏后、设备满足闲时条件时，在游戏未启动状态下，若检测到该游戏有资源包需要更新，将使用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统下载器"
        })
      }), "（游戏资源加速服务）自动下载资源包。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(981046)/* ["default"] */.A) + "",
        width: "1160",
        height: "654"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在应用市场安装游戏后、用户在应用市场更新游戏后、系统检测到用户设备符合闲时条件时，游戏资源加速服务开启资源包后台下载。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏资源加速服务从AppGallery Connect获取相关资源下载配置信息，例如下载类型、CDN类型、 manifestUrl、域名白名单等。具体资源下载配置信息请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-release",
          children: "发布资源包下载任务"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏资源加速服务唤醒ExtensionAbility进程，并通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#ondownloadcontentrequest",
          children: "onDownloadContentRequest"
        }), "方法传入manifestUrl资源清单等信息，以获取下载任务的配置信息列表。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏实现资源加速ExtensionAbility的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#ondownloadcontentrequest",
          children: "onDownloadContentRequest"
        }), "方法，生成资源包下载任务列表。若manifestUrl不为空，解析manifestUrl指向的资源清单文件，生成托管在华为CDN的资源下载任务列表；若manifestUrl为空，生成托管在三方CDN的资源下载任务列表。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["资源加速ExtensionAbility向游戏资源加速服务返回不超过200条下载任务的配置信息列表", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadconfig",
          children: "AssetDownloadConfig"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏资源加速服务根据配置信息列表逐一从华为CDN或三方CDN下载资源包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏资源加速服务每完成一个下载任务，均会向资源加速ExtensionAbility通知当前任务的下载状态。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏实现资源加速ExtensionAbility的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#onbackgrounddownloadsucceeded",
          children: "onBackgroundDownloadSucceeded"
        }), "方法，接收“成功”状态的下载任务信息，并前往下载路径操作（例如转移、解压）资源文件。游戏实现资源加速ExtensionAbility的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#onbackgrounddownloadfailed",
          children: "onBackgroundDownloadFailed"
        }), "方法，接收“失败”状态的下载任务信息，并根据失败原因", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#downloadfault",
          children: "DownloadFault"
        }), "自行实现处理逻辑。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏资源加速服务完成所有下载任务后，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#onextensionwillterminate",
          children: "onExtensionWillTerminate"
        }), "方法通知资源加速ExtensionAbility。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏资源加速服务关闭资源包后台下载功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明请详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#ondownloadcontentrequest",
              children: "onDownloadContentRequest"
            }), "(requestType: ContentRequestType, manifestUrl: string, assetAccelerationExtensionInfo: AssetAccelerationExtensionInfo): Promise<assetDownloadManager.AssetDownloadConfig[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装应用、更新应用、设备闲时，执行该方法，获取资源包下载任务列表。返回任务量不超过200条。使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#onbackgrounddownloadsucceeded",
              children: "onBackgroundDownloadSucceeded"
            }), "(downloadTask: assetDownloadManager.AssetDownloadTask, filePath: string): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在系统后台下载任务成功时，执行该方法，通知资源加速ExtensionAbility下载成功。使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#onbackgrounddownloadfailed",
              children: "onBackgroundDownloadFailed"
            }), "(downloadTask: assetDownloadManager.AssetDownloadTask, fault: assetDownloadManager.DownloadFault): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在系统后台下载任务失败时，执行该方法，通知资源加速ExtensionAbility下载失败。使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#onextensionwillterminate",
              children: "onExtensionWillTerminate"
            }), "(error?: BusinessError<void>): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在资源加速ExtensionAbility生命周期即将结束时、调度异常退出后，执行该方法，通知关闭资源包后台下载功能。建议在该方法中执行资源清理等操作。请避免耗时操作。使用Promise异步回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在“src/main/module.json5”的extensionAbilities层级中添加资源加速ExtensionAbility信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"extensionAbilities\": [\n  {\n    \"name\": \"AssetAccelExtAbility\", // 游戏资源加速ExtensionAbility组件的名称。\n    \"srcEntry\": \"./ets/extensionability/AssetAccelExtAbility.ets\", // 游戏资源加速ExtensionAbility组件所对应的代码路径。\n    \"type\": \"assetAcceleration\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建extensionability文件夹及AssetAccelExtAbility.ets文件，导入assetDownloadManager模块、AssetAccelerationExtensionAbility模块及相关模块，同时新增AssetAccelExtAbility类继承AssetAccelerationExtensionAbility。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\nimport { assetDownloadManager, AssetAccelerationExtensionAbility, AssetAccelerationExtensionInfo, ContentRequestType } from '@kit.GraphicsAccelerateKit';\n\nexport default class AssetAccelExtAbility extends AssetAccelerationExtensionAbility {\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#ondownloadcontentrequest",
            children: "onDownloadContentRequest"
          }), "方法，收集资源包下载任务列表。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(246265)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若接口需要使用common.Context类型的上下文，可以从this.context中获取类型为common.ExtensionContext的上下文对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async onDownloadContentRequest(requestType: ContentRequestType, manifestUrl: string,\n  assetAccelerationExtensionInfo: AssetAccelerationExtensionInfo): Promise<assetDownloadManager.AssetDownloadConfig[]> {\n  const context = this.context as common.ExtensionContext; // 将当前上下文转换为ExtensionContext类型。\n  console.info('AssetAccelDemo', `application file directory = ${context.filesDir}`);\n  console.info('AssetAccelDemo', `onDownloadContentRequest enter, requestType: ${requestType}, manifestUrl: ${manifestUrl}.`);\n  // 1.根据manifestUrl获取下载资源包。2.manifestUrl不为空，获取华为CDN侧资源，为空则获取三方CDN侧资源。3.返回资源包下载任务列表。\n  let downloadConfigArr: Array<assetDownloadManager.AssetDownloadConfig> = [];\n  return downloadConfigArr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#onbackgrounddownloadsucceeded",
            children: "onBackgroundDownloadSucceeded"
          }), "方法，接收“成功”状态的下载任务，并前往下载路径操作（例如转移、解压）资源文件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async onBackgroundDownloadSucceeded(downloadTask: assetDownloadManager.AssetDownloadTask,\n  filePath: string): Promise<void> {\n  console.info('AssetAccelDemo', `onBackgroundDownloadSucceeded enter, taskId is ${downloadTask.taskId}, filePath = ${filePath}`);\n  // 添加已下载资源包转移等处理逻辑。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#onbackgrounddownloadfailed",
            children: "onBackgroundDownloadFailed"
          }), "方法，接收“失败”状态的下载任务，并根据失败原因", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#downloadfault",
            children: "DownloadFault"
          }), "自行实现处理逻辑。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async onBackgroundDownloadFailed(downloadTask: assetDownloadManager.AssetDownloadTask,\n  fault: assetDownloadManager.DownloadFault): Promise<void> {\n  console.info('AssetAccelDemo', `onBackgroundDownloadFailed enter, download url: ${downloadTask.config.url}, err: ${fault}`);\n  // 添加资源包下载失败处理逻辑。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#onextensionwillterminate",
            children: "onExtensionWillTerminate"
          }), "方法，接收游戏资源加速服务关闭资源包后台下载功能的通知。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async onExtensionWillTerminate(error?: BusinessError): Promise<void> {\n  // 避免进行耗时处理。\n  if (error) {\n    console.error('AssetAccelDemo', `onExtensionWillTerminate enter, TerminateReason：${error?.code}, msg: ${error?.message}.`);\n    // 添加异常终止处理逻辑。\n    return;\n  }\n  // 添加资源清理等处理逻辑。\n}\n"
          })
        }), "\n"]
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
246265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
981046(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799068-6261d1fdc5caab3227a2d8ba8ccdeeb8.png");

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