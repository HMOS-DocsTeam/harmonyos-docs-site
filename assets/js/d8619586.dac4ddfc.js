"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["743029"], {
361487(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_assetdownload_graphics_accelerate_assetdownload_service_graphics_accelerate_assetdownload_back_graphics_accelerate_assetdownload_back_self_graphics_accelerate_assetdownload_back_self_m_d86_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-assetdownload-graphics-accelerate-assetdownload-service-graphics-accelerate-assetdownload-back-graphics-accelerate-assetdownload-back-self-graphics-accelerate-assetdownload-back-self-m-d86.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_assetdownload_graphics_accelerate_assetdownload_service_graphics_accelerate_assetdownload_back_graphics_accelerate_assetdownload_back_self_graphics_accelerate_assetdownload_back_self_m_d86_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-self/graphics-accelerate-assetdownload-back-self","title":"extension协同下载","description":"从5.1.1(19)版本开始，新增extension协同下载。","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-self/graphics-accelerate-assetdownload-back-self.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-self","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-self/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-self/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"extension协同下载","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-back-self","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"extension系统托管下载","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-system/"},"next":{"title":"应用前台下载资源包","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-fore/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-self/graphics-accelerate-assetdownload-back-self.md


const frontMatter = {
	title: 'extension协同下载',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-back-self',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'extension协同下载';

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
        id: "extension协同下载",
        children: "extension协同下载"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.1(19)版本开始，新增extension协同下载。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用户在应用市场安装游戏后、或更新游戏后、设备满足闲时条件时，在游戏未启动状态下，若检测到该游戏有资源包需要更新，可使用", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用自身下载器"
        })
      }), "自动下载资源包。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(124109)/* ["default"] */.A) + "",
        width: "1266",
        height: "732"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户在应用市场安装游戏后、用户在应用市场更新游戏后、系统检测到用户设备符合闲时条件时，游戏资源加速服务开启资源包后台下载。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏资源加速服务从AppGallery Connect获取相关资源下载配置信息，例如下载类型、CDN类型、manifestUrl、域名白名单等。具体资源下载配置信息请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-release",
          children: "发布资源包下载任务"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏资源加速服务唤醒ExtensionAbility进程，并调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#ondownloadwithappcontrol",
          children: "onDownloadWithAppControl"
        }), "方法传入manifestUrl资源清单等信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏实现资源加速ExtensionAbility的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#ondownloadwithappcontrol",
          children: "onDownloadWithAppControl"
        }), "方法，调用应用自身下载器下载游戏资源包。若manifestUrl不为空，解析manifestUrl指向的资源清单文件，生成托管在华为CDN的资源下载任务列表；若manifestUrl为空，生成托管在三方CDN的资源下载任务列表。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用自身下载器查询是否有下载任务，若有下载任务，则异步下载资源并返回结果true给游戏资源加速服务。若没有下载任务，则返回结果false给游戏资源加速服务，游戏资源加速服务将关闭资源包后台下载。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若有下载任务，应用自身下载器下载资源包，并同步下载进度信息给游戏资源加速ExtensionAbility。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在资源加速ExtensionAbility中调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanagerreportdownloadprogress",
          children: "reportDownloadProgress"
        }), "方法，向游戏资源加速服务上报下载进度信息。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用自身下载器完成下载后，并同步下载完成信息给资源加速ExtensionAbility。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在资源加速ExtensionAbility中调用的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanagerreportdownloadprogress",
          children: "reportDownloadProgress"
        }), "方法，向游戏资源加速服务上报下载完成信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏资源加速服务接收到下载完成信息后，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#onextensionwillterminate",
          children: "onExtensionWillTerminate"
        }), "方法通知资源加速ExtensionAbility将关闭进程。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏资源加速服务关闭资源包后台下载。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明请详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#ondownloadwithappcontrol",
              children: "onDownloadWithAppControl"
            }), "(requestType: ContentRequestType, manifestUrl: string, assetAccelerationExtensionInfo: AssetAccelerationExtensionInfo): Promise<boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "安装应用、更新应用、设备闲时，执行该方法，触发extension协同下载，如果有资源包下载任务则返回true，否则返回false。使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanagerreportdownloadprogress",
              children: "reportDownloadProgress"
            }), "(progressInfo: AppDownloadProgress): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "上报应用自身下载器中的下载进度信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#onextensionwillterminate",
              children: "onExtensionWillTerminate"
            }), "(error?: BusinessError<void>): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在资源加速ExtensionAbility生命周期即将结束时、调度异常退出后，执行该方法，通知关闭资源包后台下载。建议在该方法中执行资源清理等操作。请避免耗时操作。使用Promise异步回调。"
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
          children: "在ets目录下新建extensionability文件夹及AssetAccelExtAbility.ets文件，导入assetDownloadManager模块、AssetAccelerationExtensionAbility模块及相关模块，同时新增AssetAccelExtAbility类继承AssetAccelerationExtensionAbility。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { deviceInfo } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\nimport { assetDownloadManager, AssetAccelerationExtensionAbility, AssetAccelerationExtensionInfo, ContentRequestType } from '@kit.GraphicsAccelerateKit';\n\nexport default class AssetAccelExtAbility extends AssetAccelerationExtensionAbility {\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-extensionability/graphics-accelerate-extensionability#ondownloadwithappcontrol",
            children: "onDownloadWithAppControl"
          }), "方法，调用应用自身下载器下载资源包。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(337673)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若接口需要使用common.Context类型的上下文，可以从this.context中获取类型为common.ExtensionContext的上下文对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async onDownloadWithAppControl(requestType: ContentRequestType, manifestUrl: string,\n  assetAccelerationExtensionInfo: AssetAccelerationExtensionInfo): Promise<boolean> {\n  const context = this.context as common.ExtensionContext; // 将当前上下文转换为ExtensionContext类型。\n  console.info('AssetAccelDemo', `application file directory = ${context.filesDir}`);\n  console.info('AssetAccelDemo', `onDownloadWithAppControl enter, requestType: ${requestType}, manifestUrl: ${manifestUrl}.`);\n  // 如果有下载任务，则调用应用自身下载器进行资源下载，并返回true，否则返回false。\n  // ...\n  let hasDownloadTask = true;\n  return hasDownloadTask;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用自身下载器下载过程中和下载完成后，会同步下载信息给资源加速ExtensionAbility。在资源加速ExtensionAbility中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanagerreportdownloadprogress",
            children: "reportDownloadProgress"
          }), "方法，向游戏资源加速服务上报下载进度信息和下载完成信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let progressInfo: assetDownloadManager.AppDownloadProgress = {\n    totalBytesWritten: 0,\n    totalExpectedBytes: 0,\n    totalFiles: 0,\n    successCount: 0,\n    failureCount: 0,\n    status:assetDownloadManager.AppDownloadStatus.IN_PROGRESS\n  }\n  // 判断当前HarmonyOS SDK版本是否为6.1.0(23)及以上版本\n  if (deviceInfo.sdkApiVersion >= 23) {\n    progressInfo.resourceType = assetDownloadManager.ResourceType.RELEASED\n  }\n  assetDownloadManager.reportDownloadProgress(progressInfo);\n  console.info('AssetAccelDemo', `Succeeded in reporting downloadProgress`);\n} catch (error) {\n  console.error('AssetAccelDemo', `Failed to report downloadProgress, errCode:${error.code}, errMessage:${error.message}`);\n}\n"
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
337673(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
124109(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438763-f7413842e20d4f7d7b59c6b7655f400e.png");

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