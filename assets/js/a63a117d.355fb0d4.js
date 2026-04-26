"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["246378"], {
437542(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_graphics_accelerate_kit_guide_graphics_accelerate_assetdownload_graphics_accelerate_assetdownload_service_graphics_accelerate_assetdownload_fore_graphics_accelerate_assetdownload_fore_md_a63_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-graphics-accelerate-kit-guide-graphics-accelerate-assetdownload-graphics-accelerate-assetdownload-service-graphics-accelerate-assetdownload-fore-graphics-accelerate-assetdownload-fore-md-a63.json
var site_docs_graphics_accelerate_kit_guide_graphics_accelerate_assetdownload_graphics_accelerate_assetdownload_service_graphics_accelerate_assetdownload_fore_graphics_accelerate_assetdownload_fore_md_a63_namespaceObject = JSON.parse('{"id":"graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-fore/graphics-accelerate-assetdownload-fore","title":"应用前台下载资源包","description":"启动游戏后，为游戏提供管理、创建资源包下载任务功能。","source":"@site/docs/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-fore/graphics-accelerate-assetdownload-fore.md","sourceDirName":"graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-fore","slug":"/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-fore/","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-fore/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"应用前台下载资源包","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-fore","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"extension协同下载","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back/graphics-accelerate-assetdownload-back-self/"},"next":{"title":"系统后台切应用前台接续下载资源包","permalink":"/harmonyos-docs-site/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-back-fore/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/graphics-accelerate-kit-guide/graphics-accelerate-assetdownload/graphics-accelerate-assetdownload-service/graphics-accelerate-assetdownload-fore/graphics-accelerate-assetdownload-fore.md


const frontMatter = {
	title: '应用前台下载资源包',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-fore',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '应用前台下载资源包';

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
        id: "应用前台下载资源包",
        children: "应用前台下载资源包"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动游戏后，为游戏提供管理、创建资源包下载任务功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(585652)/* ["default"] */.A) + "",
        width: "947",
        height: "631"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户打开游戏App。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanagerfetchmanifesturl",
          children: "fetchManifestUrl"
        }), "方法，从游戏资源加速服务获取manifestUrl资源清单。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏根据manifestUrl获取资源包下载任务列表。若manifestUrl不为空，游戏从华为CDN获取资源包下载任务列表，若manifestUrl为空，从三方CDN获取资源包下载任务列表。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏向资源加速服务订阅资源包下载进度/状态事件。游戏调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageronprogress",
          children: "on('progress')"
        }), "方法，监听资源包下载进度。游戏调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageronpause",
          children: "on('pause')"
        }), "方法，监听下载任务是否暂停。游戏调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageroncomplete",
          children: "on('complete')"
        }), "方法，监听资源是否成功下载。游戏调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageronfail",
          children: "on('fail')"
        }), "方法，监听下载任务是否失败。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageraddassetdownloadtask",
          children: "addAssetDownloadTask"
        }), "方法，新增manifestUrl清单上的资源包下载任务。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏资源加速服务根据下载任务逐一下载资源包。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏资源加速服务每完成一个下载任务，均会向游戏通知当前任务的下载进度和下载状态。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若游戏接收到", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageronprogress",
          children: "on('progress')"
        }), "方法返回的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#downloadcompletedinfo",
          children: "DownloadCompletedInfo"
        }), "，表示资源包下载成功，游戏可前往下载路径操作（例如转移、解压）资源文件。若游戏接收到", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageronfail",
          children: "on('fail')"
        }), "方法返回的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#downloadfailedinfo",
          children: "DownloadFailedInfo"
        }), "，表示下载任务失败，游戏可以根据", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#downloadfault",
          children: "DownloadFault"
        }), "自行实现处理逻辑。若游戏接收到", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageronpause",
          children: "on('pause')"
        }), "方法返回的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadtask",
          children: "AssetDownloadTask"
        }), "，表示下载任务已暂停，游戏可以携带taskId，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanagerresumeassetdownloadtask",
          children: "resumeAssetDownloadTask"
        }), "方法，恢复暂停中的下载任务。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏向资源加速服务取消订阅资源包下载进度/状态事件。游戏调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageroffprogress",
          children: "off('progress')"
        }), "方法，取消监听资源包下载进度。游戏调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageroffpause",
          children: "off('pause')"
        }), "方法，取消监听下载任务暂停事件。游戏调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageroffcomplete",
          children: "off('complete')"
        }), "方法，取消监听资源包下载成功事件。游戏调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanagerofffail",
          children: "off('fail')"
        }), "方法，取消监听资源包下载失败事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明请详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanagerfetchmanifesturl",
              children: "fetchManifestUrl"
            }), "(): Promise<string>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取资源包文件下载列表。使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageronprogress",
              children: "on"
            }), "(type: 'progress', callback: Callback<DownloadProgressInfo[]>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅资源包下载进度事件。使用callback形式返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageronpause",
              children: "on"
            }), "(type: 'pause', callback: Callback<AssetDownloadTask>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅资源包下载暂停事件。使用callback形式返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageroncomplete",
              children: "on"
            }), "(type: 'complete', callback: Callback<DownloadCompletedInfo>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅资源包下载成功事件。使用callback形式返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageronfail",
              children: "on"
            }), "(type: 'fail', callback: Callback<DownloadFailedInfo>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅资源包下载失败事件。使用callback形式返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageraddassetdownloadtask",
              children: "addAssetDownloadTask"
            }), "(context: common.BaseContext, downloadConfig: AssetDownloadConfig): Promise<string>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新增资源包下载任务。使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageroffprogress",
              children: "off"
            }), "(type: 'progress', callback?: Callback<DownloadProgressInfo[]>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅资源包下载进度事件。使用callback形式返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageroffpause",
              children: "off"
            }), "(type: 'pause', callback?: Callback<AssetDownloadTask>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅资源包下载暂停事件。使用callback形式返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageroffcomplete",
              children: "off"
            }), "(type: 'complete', callback?: Callback<DownloadCompletedInfo>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅资源包下载成功事件。使用callback形式返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanagerofffail",
              children: "off"
            }), "(type: 'fail', callback?: Callback<DownloadFailedInfo>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅资源包下载失败事件。使用callback形式返回结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入assetDownloadManager模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { assetDownloadManager } from '@kit.GraphicsAccelerateKit';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanagerfetchmanifesturl",
            children: "fetchManifestUrl"
          }), "方法，获取manifestUrl资源清单，并根据manifestUrl获取资源包下载任务列表。若manifestUrl不为空，则游戏从华为CDN获取资源包下载任务列表。若manifestUrl为空，则从三方CDN获取资源包下载任务列表。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async fetchManifestUrl() {\n  let manifestUrl : string = '';\n  try {\n    manifestUrl = await assetDownloadManager.fetchManifestUrl();\n    console.info('AssetAccelDemo', `Succeeded in fetching manifestUrl, manifestUrl = ${manifestUrl}`);\n  } catch (error) {\n    console.error('AssetAccelDemo', `Failed to fetch manifestUrl, errCode: ${error.code}, errMessage: ${error.message}`);\n    return;\n  }\n  // 根据获取到的manifestUrl不为空，获取华为CDN侧资源。若获取到的manifestUrl为空，则获取三方CDN侧资源。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageronprogress",
            children: "on('progress')"
          }), "方法，监听资源包下载进度。游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageronpause",
            children: "on('pause')"
          }), "方法，监听下载任务是否暂停。游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageroncomplete",
            children: "on('complete')"
          }), "方法，监听资源是否成功下载。游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageronfail",
            children: "on('fail')"
          }), "方法，监听下载任务是否失败。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "onProgressCallback: (progressArray: assetDownloadManager.DownloadProgressInfo[]) => void = (progressArray) => {\n  console.info('AssetAccelDemo', `onProgressCallback progressArray length: ${progressArray.length}`);\n  // 添加资源包下载进度处理逻辑。\n}\n\nonPauseCallback: (downloadTaskInfo: assetDownloadManager.AssetDownloadTask) => void = (downloadTaskInfo) => {\n  console.info('AssetAccelDemo', `task identifier = ${downloadTaskInfo.config.identifier} has paused.`);\n  // 添加资源包下载暂停处理逻辑。\n}\n\nonCompleteCallback: (completeInfo: assetDownloadManager.DownloadCompletedInfo) => void = async (completeInfo) => {\n  console.info('AssetAccelDemo', `task identifier = ${completeInfo.downloadTask.config.identifier} has completed.`);\n  // 添加资源包下载完成处理逻辑。\n}\n\nonFailedCallback: (failedInfo: assetDownloadManager.DownloadFailedInfo) => void = async (failedInfo) => {\n  console.info('AssetAccelDemo', `task identifier = ${failedInfo.downloadTask.config.identifier} has failed.`);\n  // 添加资源包下载失败处理逻辑。\n}\n\n// 订阅下载状态和下载进度事件。\ntry {\n　assetDownloadManager.on(\"progress\", this.onProgressCallback);\n　assetDownloadManager.on(\"pause\", this.onPauseCallback);\n　assetDownloadManager.on(\"complete\", this.onCompleteCallback);\n　assetDownloadManager.on(\"fail\", this.onFailedCallback);\n} catch (error) {\n  console.error('AssetAccelDemo', `Failed to do assetDownloadManager.on, errCode: ${error.code}, errMessage: ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageraddassetdownloadtask",
            children: "addAssetDownloadTask"
          }), "方法，新增资源包下载任务。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async addAssetDownloadTask() {\n  // 构造资源包下载配置信息。\n  let assetDownload: assetDownloadManager.AssetDownloadConfig = {\n    fileName: 'fileName', // 下载资源文件名。\n    url: 'url', // 下载资源url。\n    isEssential: false, // 是否是必要下载资源。\n    identifier: 'identifier', // 标识信息。\n    groupId: 'groupId' // 组ID，用于标识资源的版本信息。\n  }\n  try {\n    // 添加资源包下载任务。\n    // 根据实际代码上下文自行传入合适的context。\n    const taskId: string = await assetDownloadManager.addAssetDownloadTask(this.getUIContext().getHostContext() as common.Context, assetDownload);\n    console.info('AssetAccelDemo', `Succeeded in adding assetDownloadTask`);\n  } catch (error) {\n    console.error('AssetAccelDemo', `Failed to add assetDownloadTask, errCode:${error.code}, errMessage:${error.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageroffprogress",
            children: "off('progress')"
          }), "方法，取消监听资源包下载进度。游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageroffpause",
            children: "off('pause')"
          }), "方法，取消监听下载任务暂停事件。游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanageroffcomplete",
            children: "off('complete')"
          }), "方法，取消监听资源包下载成功事件。游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-assetdownloadmanager/graphics-accelerate-assetdownloadmanager#assetdownloadmanagerofffail",
            children: "off('fail')"
          }), "方法，取消监听资源包下载失败事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 取消订阅下载状态和下载进度事件。\ntry {\n　assetDownloadManager.off(\"progress\", this.onProgressCallback);\n　assetDownloadManager.off(\"pause\", this.onPauseCallback);\n　assetDownloadManager.off(\"complete\", this.onCompleteCallback);\n　assetDownloadManager.off(\"fail\", this.onFailedCallback);\n} catch (error) {\n  console.error('AssetAccelDemo', `Failed to do assetDownloadManager.off, errCode: ${error.code}, errMessage: ${error.message}`);\n}\n"
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
585652(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958718-3ee21c02e494b2a9952881a7445aed9c.png");

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