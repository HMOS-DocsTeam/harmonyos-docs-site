"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["189589"], {
931705(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_customscan_scan_customscan_md_7f7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-customscan-scan-customscan-md-7f7.json
var site_docs_scan_kit_guide_scan_customscan_scan_customscan_md_7f7_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-customscan/scan-customscan","title":"自定义界面扫码","description":"基本概念","source":"@site/docs/scan-kit-guide/scan-customscan/scan-customscan.md","sourceDirName":"scan-kit-guide/scan-customscan","slug":"/scan-kit-guide/scan-customscan/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-customscan/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"自定义界面扫码","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-customscan","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"默认界面扫码","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-scanbarcode/"},"next":{"title":"识别本地图片","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-imagerecognition/scan-detectbarcode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-customscan/scan-customscan.md


const frontMatter = {
	title: '自定义界面扫码',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-customscan',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义界面扫码';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
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
}, {
  "value": "模拟器开发",
  "id": "模拟器开发",
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
        id: "自定义界面扫码",
        children: "自定义界面扫码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义界面扫码能力提供了相机流控制接口，可根据自身需求自定义扫码界面，适用于对扫码界面有定制化需求的应用开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(971772)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过自定义界面扫码可以实现应用内的扫码功能，为了获得更好的应用体验，推荐同时", (0,jsx_runtime.jsx)(_components.a, {
        href: "/scan-kit-guide/scan-directservice",
        children: "接入“扫码直达”服务"
      }), "，应用可以同时支持系统扫码入口（控制中心扫一扫）和应用内扫码两种方式跳转到指定服务页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义界面扫码能力提供扫码相机流控制接口，支持相机流的初始化、开启、暂停、释放、重新扫码功能；支持闪光灯的状态获取、开启、关闭；支持变焦比的获取和设置；支持设置相机焦点和连续自动对焦；支持对条形码、二维码、MULTIFUNCTIONAL CODE进行扫码识别（具体类型参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-scancore/scan-scancore#scantype",
        children: "ScanType"
      }), "），并获得码类型、码值、码位置、相机预览流（YUV）等信息。该能力可用于单码和多码的扫描识别。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者集成自定义界面扫码能力可以自行定义扫码的界面样式，请按照业务流程完成扫码接口调用实现实时扫码功能。建议开发者基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/scankit-samplecode-clientdemo-arkts",
        children: "Sample Code"
      }), "做个性化修改。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扫码页面UX设计规范："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(746442)/* ["default"] */.A) + "",
        width: "1376",
        height: "764"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(910017)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YUV（相机预览流图像数据）适合于扫码和识物的综合识别场景，开发者需要自己控制相机流，普通扫码场景无需关注。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从6.1.0(23)版本开始，自定义界面扫码能力支持带后置相机的Wearable，可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedcameras",
          children: "cameraManager.getSupportedCameras"
        }), "接口查询是否带后置相机。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要请求相机的使用权限。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要开发者自行实现扫码的人机交互界面。例如：多码场景需要暂停相机流由用户选择一个码图进行识别。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(270510)/* ["default"] */.A) + "",
        width: "913",
        height: "1015"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "发起请求："
            })
          }), " 用户向开发者的应用发起扫码请求，应用拉起已定义好的扫码界面。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "申请授权："
            })
          }), " 应用需要向用户申请相机权限授权。若未同意授权，则无法使用此功能。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "启动自定义界面扫码："
            })
          }), " 在扫码前必须调用init接口初始化自定义界面扫码，加载资源。相机流初始化结束后，调用start接口开始扫码。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "自定义界面扫码相机操作："
            })
          }), " 可以配置自定义界面扫码相机操作参数，调整相应功能，包括闪光灯、变焦、焦距、暂停、重启扫码等。例如："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "根据当前码图位置，比如当前码图太远或太近时，调用getZoom获取变焦比，setZoom接口设置变焦比，调整焦距以便于用户扫码。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "根据当前扫码的光线条件或根据on('lightingFlash')监听闪光灯开启或关闭时机，通过getFlashLightStatus接口先获取闪光灯状态，再调用openFlashLight/closeFlashLight接口控制闪光灯开启或关闭，以便于用户进行扫码。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "调用setFocusPoint设置对焦位置，resetFocus恢复默认对焦模式，以便于用户进行扫码。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在应用处于前后台或其他特殊场景需要中断/重新进行扫码时，可调用stop或start接口来控制相机流达到暂停或重新扫码的目的。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "自定义界面扫码："
            })
          }), " Scan Kit API在扫码完成后会返回扫码结果。同时根据开发者的需要，Scan Kit API会返回每帧相机预览流数据。如需不重启相机并重新触发一次扫码，可以在start接口的Callback异步回调中，调用rescan接口。完成扫码后，需调用release接口进行释放扫码资源的操作。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "获取结果："
            })
          }), " 解析码值结果跳转应用服务页。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义界面扫码提供init、start、stop、release、getFlashLightStatus、openFlashLight、closeFlashLight、setZoom、getZoom、setFocusPoint、resetFocus、rescan、on('lightingFlash')、off('lightingFlash')接口，其中部分接口返回值有两种返回形式：Callback和Promise回调。Callback和Promise回调函数只是返回值方式不一样，功能相同。具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscaninit",
              children: "init"
            }), "(options?: scanBarcode.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#scanoptions",
              children: "ScanOptions"
            }), "): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化自定义界面扫码，加载资源。无返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstart",
              children: "start"
            }), "(viewControl: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#viewcontrol",
              children: "ViewControl"
            }), "): Promise<Array<scanBarcode.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#scanresult",
              children: "ScanResult"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动扫码相机流获取扫码结果。使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstop",
              children: "stop"
            }), "(): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "暂停扫码相机流。使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanrelease",
              children: "release"
            }), "(): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放扫码相机流。使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstart-1",
              children: "start"
            }), "(viewControl: ViewControl, callback: AsyncCallback<Array<scanBarcode.ScanResult>>, frameCallback?: AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#scanframe",
              children: "ScanFrame"
            }), ">): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动扫码相机流获取扫码结果以及YUV图像数据。使用callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscangetflashlightstatus",
              children: "getFlashLightStatus"
            }), "(): boolean"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取闪光灯状态。返回结果为布尔值，true为打开状态，false为关闭状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanopenflashlight",
              children: "openFlashLight"
            }), "(): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启闪光灯。无返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscancloseflashlight",
              children: "closeFlashLight"
            }), "(): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭闪光灯。无返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscansetzoom",
              children: "setZoom"
            }), "(zoomValue : number): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置变焦比。无返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscangetzoom",
              children: "getZoom"
            }), "(): number"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前的变焦比。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscansetfocuspoint",
              children: "setFocusPoint"
            }), "(point: scanBarcode.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#point",
              children: "Point"
            }), "): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置相机焦点。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanresetfocus",
              children: "resetFocus"
            }), "(): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置连续自动对焦模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanrescan",
              children: "rescan"
            }), "(): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发一次重新扫码。仅对start接口Callback异步回调有效，Promise异步回调无效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstop-1",
              children: "stop"
            }), "(callback: AsyncCallback<void>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "暂停扫码相机流。使用callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanrelease-1",
              children: "release"
            }), "(callback: AsyncCallback<void>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放扫码相机流。使用callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanonlightingflash",
              children: "on"
            }), "(type: 'lightingFlash', callback: AsyncCallback<boolean>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅闪光灯状态监听事件，当环境暗、亮状态变化时返回闪光灯开启或关闭时机。使用callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanofflightingflash",
              children: "off"
            }), "(type: 'lightingFlash', callback?: AsyncCallback<boolean>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注销闪光灯状态监听事件。使用callback异步回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义界面扫码接口支持自定义UI界面，识别相机流中的条形码，二维码以及MULTIFUNCTIONAL CODE，并返回码类型、码值、码位置（码图最小外接矩形左上角和右下角的坐标）、相机预览流（YUV）等信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了方便开发者接入，我们提供了详细的样例工程供参考，推荐参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/scankit-samplecode-clientdemo-arkts",
        children: "示例工程"
      }), "接入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例为调用自定义界面扫码接口拉起相机流并返回扫码结果和相机预览流（YUV）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在开发应用前，需要先申请相机相关权限，确保应用拥有访问相机的权限。在module.json5文件中配置相机权限，具体配置方式，请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "。"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "权限名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "授权方式"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.tbody, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ohos.permission.CAMERA"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "允许应用使用相机扫码。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "user_grant"
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissionsfromuser9-1",
            children: "requestPermissionsFromUser"
          }), "请求用户授权。具体申请方式及校验方式，请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
            children: "向用户申请授权"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入自定义界面扫码接口以及相关接口模块，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { scanCore, scanBarcode, customScan } from '@kit.ScanKit';\n// 导入功能涉及的权限申请、回调接口\nimport { display } from '@kit.ArkUI';\nimport { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { common, abilityAccessCtrl, PermissionRequestResult } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["遵循", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%B8%9A%E5%8A%A1%E6%B5%81%E7%A8%8B",
            children: "业务流程"
          }), "完成自定义界面扫码功能。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(356826)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在设置start接口的viewControl参数时，width和height与", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
                children: "XComponent"
              }), "的宽高值相同，start接口会根据XComponent的宽高比例从相机的分辨率选择最优分辨率，如果比例与相机的分辨率比例相差过大会影响预览流体验。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "当前支持的分辨率比例为16:9、4:3、1:1。竖屏场景下，XComponent的高度需要大于宽度，且高宽比在支持的分辨率比例中。横屏场景下，XComponent的宽度需要大于高度，且宽高比在支持的分辨率比例中。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["XComponent的宽高需根据使用场景计算适配。例如：在开发设备为折叠屏时，需按照折叠屏的展开态和折叠态分别计算XComponent的宽高，start接口会根据XComponent的宽高适配对应的相机分辨率。设备屏幕宽高可通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#displaygetdefaultdisplaysync9",
                children: "display.getDefaultDisplaySync"
              }), "方法获取（获取的为px单位，需要通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#px2vp12",
                children: "px2vp"
              }), "方法转为vp）。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过Promise方式回调，调用自定义界面扫码接口拉起相机流并返回扫码结果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "const TAG: string = '[customScanPage]';\n\n@Entry\n@Component\nstruct CustomScanPage {\n  @State userGrant: boolean = false // 是否已申请相机权限\n  @State surfaceId: string = '' // XComponent组件生成id\n  @State isShowBack: boolean = false // 是否已经返回扫码结果\n  @State isFlashLightEnable: boolean = false // 是否开启了闪光灯\n  @State isSensorLight: boolean = false // 记录当前环境亮暗状态\n  @State cameraHeight: number = 640 // 设置预览流高度，默认单位：vp\n  @State cameraWidth: number = 360 // 设置预览流宽度，默认单位：vp\n  @State offsetX: number = 0 // 设置预览流x轴方向偏移量，默认单位：vp\n  @State offsetY: number = 0 // 设置预览流y轴方向偏移量，默认单位：vp\n  @State zoomValue: number = 1 // 预览流缩放比例\n  @State setZoomValue: number = 1 // 已设置的预览流缩放比例\n  @State scaleValue: number = 1 // 屏幕缩放比\n  @State pinchValue: number = 1 // 双指缩放比例\n  @State displayHeight: number = 0 // 屏幕高度，单位vp\n  @State displayWidth: number = 0 // 屏幕宽度，单位vp\n  @State scanResult: Array<scanBarcode.ScanResult> = [] // 扫码结果\n  private mXComponentController: XComponentController = new XComponentController()\n\n  async onPageShow() {\n    // 自定义启动第一步，用户申请权限\n    await this.requestCameraPermission();\n    // 多码扫码识别，enableMultiMode: true 单码扫码识别enableMultiMode: false\n    let options: scanBarcode.ScanOptions = {\n      scanTypes: [scanCore.ScanType.ALL],\n      enableMultiMode: true,\n      enableAlbum: true\n    }\n    // 自定义启动第二步：设置预览流布局尺寸\n    this.setDisplay();\n    try {\n      // 自定义启动第三步，初始化接口\n      customScan.init(options);\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to init customScan. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  onPageHide() {\n    // 页面消失或隐藏时，停止并释放相机流\n    this.userGrant = false;\n    this.isFlashLightEnable = false;\n    this.isSensorLight = false;\n    try {\n      customScan.off('lightingFlash');\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to off lightingFlash. Code: ${err.code}, message: ${err.message}`);\n    }\n    this.customScanStop();\n    try {\n      // 自定义相机流释放接口\n      customScan.release().catch((err: BusinessError) => {\n        hilog.error(0x0001, TAG,\n          `Failed to release customScan by promise. Code: ${err.code}, message: ${err.message}`);\n      })\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to release customScan. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  // 用户申请权限\n  async reqPermissionsFromUser(): Promise<number[]> {\n    hilog.info(0x0001, TAG, 'reqPermissionsFromUser start');\n    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n    let atManager = abilityAccessCtrl.createAtManager();\n    try {\n      const grantStatus: PermissionRequestResult =\n        await atManager.requestPermissionsFromUser(context, ['ohos.permission.CAMERA']);\n      return grantStatus.authResults;\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to requestPermissionsFromUser. Code: ${err.code}, message: ${err.message}`);\n      return [];\n    }\n  }\n\n  // 用户申请相机权限\n  async requestCameraPermission() {\n    let grantStatus = await this.reqPermissionsFromUser();\n    for (let i = 0; i < grantStatus.length; i++) {\n      if (grantStatus[i] === 0) {\n        // 用户授权，可以继续访问目标操作\n        hilog.info(0x0001, TAG, 'Succeeded in getting permissions.');\n        this.userGrant = true;\n        break;\n      }\n    }\n  }\n\n  // 竖屏时获取屏幕尺寸，设置预览流全屏示例\n  setDisplay() {\n    try {\n      // 默认竖屏\n      let displayClass = display.getDefaultDisplaySync();\n      this.displayHeight = this.getUIContext().px2vp(displayClass.height);\n      this.displayWidth = this.getUIContext().px2vp(displayClass.width);\n      let maxLen: number = Math.max(this.displayWidth, this.displayHeight);\n      let minLen: number = Math.min(this.displayWidth, this.displayHeight);\n      const RATIO: number = 16 / 9;\n      this.cameraHeight = maxLen;\n      this.cameraWidth = maxLen / RATIO;\n      this.offsetX = (minLen - this.cameraWidth) / 2;\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to getDefaultDisplaySync. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  // toast显示扫码结果\n  showScanResult(data: scanBarcode.ScanResult) {\n    try {\n      // 使用toast显示出扫码结果\n      this.getUIContext().getPromptAction().showToast({\n        message: JSON.stringify(data),\n        duration: 5000\n      });\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to showToast. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  initCamera() {\n    this.isShowBack = false;\n    this.scanResult = [];\n    let viewControl: customScan.ViewControl = {\n      width: this.cameraWidth,\n      height: this.cameraHeight,\n      surfaceId: this.surfaceId\n    };\n    try {\n      // 自定义启动第四步，请求扫码接口，通过Promise方式回调\n      customScan.start(viewControl)\n        .then((data: Array<scanBarcode.ScanResult>) => {\n          hilog.info(0x0001, TAG, `result: ${JSON.stringify(data)}`);\n          if (data.length) {\n            // 解析码值结果跳转应用服务页\n            this.scanResult = data;\n            this.isShowBack = true;\n            // 获取到扫描结果后暂停相机流\n            this.customScanStop();\n          }\n        }).catch((err: BusinessError) => {\n        hilog.error(0x0001, TAG, `Failed to start customScan. Code: ${err.code}, message: ${err.message}`);\n      });\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to start customScan. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  customScanStop() {\n    try {\n      customScan.stop().catch((err: BusinessError) => {\n        hilog.error(0x0001, TAG, `Failed to stop customScan. Code: ${err.code}, message: ${err.message}`);\n      })\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to stop customScan. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  // 自定义扫码界面的顶部返回按钮和扫码提示\n  @Builder\n  TopTool() {\n    Column() {\n      Flex({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center }) {\n        Text('返回')\n          .onClick(() => {\n            this.getUIContext().getRouter().back();\n          })\n      }.padding({ left: 24, right: 24, top: 40 })\n\n\n      Column() {\n        Text('扫描二维码/条形码')\n        Text('对准二维码/条形码，即可自动扫描')\n      }.margin({ left: 24, right: 24, top: 24 })\n    }\n    .height(146)\n    .width('100%')\n  }\n\n  build() {\n    Stack() {\n      if (this.userGrant) {\n        Column() {\n          XComponent({\n            id: 'componentId',\n            type: XComponentType.SURFACE,\n            controller: this.mXComponentController\n          })\n            .onLoad(() => {\n              hilog.info(0x0001, TAG, 'Succeeded in loading, onLoad is called.');\n              // 获取XComponent组件的surfaceId\n              this.surfaceId = this.mXComponentController.getXComponentSurfaceId();\n              hilog.info(0x0001, TAG, `Succeeded in getting surfaceId: ${this.surfaceId}`);\n              this.initCamera();\n              // 闪光灯监听接口\n              customScan.on('lightingFlash', (err, isLightingFlash) => {\n                if (err) {\n                  hilog.error(0x0001, TAG,\n                    `Failed to on lightingFlash. Code: ${err.code}, message: ${err.message}`);\n                  return;\n                }\n                if (isLightingFlash) {\n                  this.isFlashLightEnable = true;\n                } else {\n                  try {\n                    if (!customScan.getFlashLightStatus()) {\n                      this.isFlashLightEnable = false;\n                    }\n                  } catch (err) {\n                    hilog.error(0x0001, TAG,\n                      `Failed to get flashLightStatus. Code: ${err.code}, message: ${err.message}`);\n                  }\n                }\n                this.isSensorLight = isLightingFlash;\n              });\n            })\n            .width(this.cameraWidth)\n            .height(this.cameraHeight)\n            .position({ x: this.offsetX, y: this.offsetY })\n        }\n        .height('100%')\n        .width('100%')\n      }\n\n\n      Column() {\n        this.TopTool()\n        Column() {\n        }\n        .layoutWeight(1)\n        .width('100%')\n\n\n        Column() {\n          Row() {\n            // 闪光灯按钮，启动相机流后才能使用\n            Button('FlashLight')\n              .onClick(() => {\n                let lightStatus: boolean = false;\n                try {\n                  lightStatus = customScan.getFlashLightStatus();\n                } catch (err) {\n                  hilog.error(0x0001, TAG,\n                    `Failed to get flashLightStatus. Code: ${err.code}, message: ${err.message}`);\n                }\n\n\n                // 根据当前闪光灯状态，选择打开或关闭闪光灯\n                if (lightStatus) {\n                  try {\n                    customScan.closeFlashLight();\n                    setTimeout(() => {\n                      this.isFlashLightEnable = this.isSensorLight;\n                    }, 200);\n                  } catch (err) {\n                    hilog.error(0x0001, TAG,\n                      `Failed to close flashLight. Code: ${err.code}, message: ${err.message}`);\n                  }\n                } else {\n                  try {\n                    customScan.openFlashLight();\n                  } catch (err) {\n                    hilog.error(0x0001, TAG,\n                      `Failed to open flashLight. Code: ${err.code}, message: ${err.message}`);\n                  }\n                }\n              })\n              .visibility((this.userGrant && this.isFlashLightEnable) ? Visibility.Visible : Visibility.None)\n\n\n            // 扫码成功后，点击按钮后重新扫码\n            Button('Scan')\n              .onClick(() => {\n                // 点击按钮重启相机流，重新扫码\n                this.initCamera();\n              })\n              .visibility(this.isShowBack ? Visibility.Visible : Visibility.None)\n          }\n\n\n          Row() {\n            // 预览流设置缩放比例\n            Button('缩放比例,当前比例:' + this.setZoomValue)\n              .onClick(() => {\n                // 设置相机缩放比例\n                if (!this.isShowBack) {\n                  if (!this.zoomValue || this.zoomValue === this.setZoomValue) {\n                    this.setZoomValue = this.customGetZoom();\n                  } else {\n                    this.zoomValue = this.zoomValue;\n                    this.customSetZoom(this.zoomValue);\n                    setTimeout(() => {\n                      if (!this.isShowBack) {\n                        this.setZoomValue = this.customGetZoom();\n                      }\n                    }, 1000);\n                  }\n                }\n              })\n          }\n          .margin({ top: 10, bottom: 10 })\n\n\n          Row() {\n            // 输入要设置的预览流缩放比例\n            TextInput({ placeholder: '输入缩放倍数' })\n              .type(InputType.Number)\n              .borderWidth(1)\n              .backgroundColor(Color.White)\n              .onChange(value => {\n                this.zoomValue = Number(value);\n              })\n          }\n        }\n        .width('50%')\n        .height(180)\n      }\n\n\n      // 单码、多码扫描后，显示码图蓝点位置。点击toast码图信息\n      ForEach(this.scanResult, (item: scanBarcode.ScanResult) => {\n        if (item.scanCodeRect) {\n          Image($rawfile('scan_selected2.svg')) // src/main/resources/rawfile/scan_selected2.svg\n            .width(40)\n            .height(40)\n            .markAnchor({ x: 20, y: 20 })\n            .position({\n              x: (item.scanCodeRect.left + item?.scanCodeRect?.right) / 2 + this.offsetX,\n              y: (item.scanCodeRect.top + item?.scanCodeRect?.bottom) / 2 + this.offsetY\n            })\n            .onClick(() => {\n              this.showScanResult(item);\n            })\n        }\n      }, (item: scanBarcode.ScanResult) => '' + item?.scanCodeRect?.left + item?.scanCodeRect?.right + 'px')\n    }\n    // 建议相机流设置为全屏\n    .width('100%')\n    .height('100%')\n    .onClick((event: ClickEvent) => {\n      // 是否已扫描到结果\n      if (this.isShowBack) {\n        return;\n      }\n      // 点击屏幕位置，获取点击位置(x,y)，设置相机焦点\n      let x1 = event.displayY / (this.displayHeight + 0.0);\n      let y1 = 1.0 - event.displayX / (this.displayWidth + 0.0);\n      try {\n        customScan.setFocusPoint({ x: x1, y: y1 });\n        hilog.info(0x0001, TAG, `Succeeded in setting focusPoint x1: ${x1}, y1: ${y1}`);\n      } catch (err) {\n        hilog.error(0x0001, TAG, `Failed to set focusPoint. Code: ${err.code}, message: ${err.message}`);\n      }\n      hilog.info(0x0001, TAG, `Succeeded in setting focusPoint x1: ${x1}, y1: ${y1}`);\n      // 设置连续自动对焦模式\n      setTimeout(() => {\n        try {\n          customScan.resetFocus();\n        } catch (err) {\n          hilog.error(0x0001, TAG, `Failed to reset focus. Code: ${err.code}, message: ${err.message}`);\n        }\n      }, 200);\n    }).gesture(PinchGesture({ fingers: 2 })\n      .onActionStart(() => {\n        hilog.info(0x0001, TAG, 'Pinch start');\n      })\n      .onActionUpdate((event: GestureEvent) => {\n        if (event) {\n          this.scaleValue = event.scale;\n        }\n      })\n      .onActionEnd(() => {\n        // 是否已扫描到结果\n        if (this.isShowBack) {\n          return;\n        }\n        // 获取双指缩放比例，设置变焦比\n        try {\n          let zoom = this.customGetZoom();\n          this.pinchValue = this.scaleValue * zoom;\n          this.customSetZoom(this.pinchValue);\n          hilog.info(0x0001, TAG, 'Pinch end');\n        } catch (err) {\n          hilog.error(0x0001, TAG, `Failed to set zoom. Code: ${err.code}, message: ${err.message}`);\n        }\n      }))\n  }\n\n  public customGetZoom(): number {\n    let zoom = 1;\n    try {\n      zoom = customScan.getZoom();\n      hilog.info(0x0001, TAG, `Succeeded in getting zoom, zoom: ${zoom}`);\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to get zoom. Code: ${err.code}, message: ${err?.message}`);\n    }\n    return zoom;\n  }\n\n  public customSetZoom(pinchValue: number): void {\n    try {\n      customScan.setZoom(pinchValue);\n      hilog.info(0x0001, TAG, `Succeeded in setting zoom.`);\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to set zoom. Code: ${err.code}, message: ${err?.message}`);\n    }\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过Callback方式回调，调用自定义界面扫码接口拉起相机流并返回扫码结果和相机预览流（YUV）。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "const TAG: string = '[customScanPage]';\n\n@Entry\n@Component\nstruct CustomScanPage {\n  @State userGrant: boolean = false // 是否已申请相机权限\n  @State surfaceId: string = '' // XComponent组件生成id\n  @State isShowBack: boolean = false // 是否已经返回扫码结果\n  @State isFlashLightEnable: boolean = false // 是否开启了闪光灯\n  @State isSensorLight: boolean = false // 记录当前环境亮暗状态\n  @State cameraHeight: number = 640 // 设置预览流高度，默认单位：vp\n  @State cameraWidth: number = 360 // 设置预览流宽度，默认单位：vp\n  @State offsetX: number = 0 // 设置预览流x轴方向偏移量，默认单位：vp\n  @State offsetY: number = 0 // 设置预览流y轴方向偏移量，默认单位：vp\n  @State zoomValue: number = 1 // 预览流缩放比例\n  @State setZoomValue: number = 1 // 已设置的预览流缩放比例\n  @State scaleValue: number = 1 // 屏幕缩放比\n  @State pinchValue: number = 1 // 双指缩放比例\n  @State displayHeight: number = 0 // 屏幕高度，单位vp\n  @State displayWidth: number = 0 // 屏幕宽度，单位vp\n  @State scanResult: Array<scanBarcode.ScanResult> = [] // 扫码结果\n  private mXComponentController: XComponentController = new XComponentController()\n  // 返回自定义扫描结果的回调\n  private callback: AsyncCallback<scanBarcode.ScanResult[]> =\n    (err: BusinessError, data: scanBarcode.ScanResult[]) => {\n      if (err && err.code) {\n        hilog.error(0x0001, TAG,\n          `Failed to get ScanResult by callback. Code: ${err.code}, message: ${err.message}`);\n        return;\n      }\n      // 解析码值结果跳转应用服务页\n      hilog.info(0x0001, TAG, `Succeeded in getting ScanResult by callback, result: ${JSON.stringify(data)}`);\n      if (data.length) {\n        // 解析码值结果跳转应用服务页\n        this.scanResult = data;\n        this.isShowBack = true;\n        // 获取到扫描结果后暂停相机流\n        this.customScanStop();\n      }\n    }\n  // 返回相机帧的回调\n  private frameCallback: AsyncCallback<customScan.ScanFrame> =\n    (err: BusinessError, frameResult: customScan.ScanFrame) => {\n      if (err) {\n        hilog.error(0x0001, TAG, `Failed to get ScanFrame by callback. Code: ${err.code}, message: ${err.message}`);\n        return;\n      }\n      // byteBuffer相机YUV图像数组\n      hilog.info(0x0001, TAG,\n        `Succeeded in getting ScanFrame.byteBuffer.byteLength: ${frameResult.byteBuffer.byteLength}`)\n      hilog.info(0x0001, TAG, `Succeeded in getting ScanFrame.width: ${frameResult.width}`)\n      hilog.info(0x0001, TAG, `Succeeded in getting ScanFrame.height: ${frameResult.height}`)\n    }\n\n  async onPageShow() {\n    // 自定义启动第一步，用户申请权限\n    await this.requestCameraPermission();\n    // 多码扫码识别，enableMultiMode: true 单码扫码识别enableMultiMode: false\n    let options: scanBarcode.ScanOptions = {\n      scanTypes: [scanCore.ScanType.ALL],\n      enableMultiMode: true,\n      enableAlbum: true\n    }\n    // 自定义启动第二步：设置预览流布局尺寸\n    this.setDisplay();\n    try {\n      // 自定义启动第三步，初始化接口\n      customScan.init(options);\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to init customScan. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  onPageHide() {\n    // 页面消失或隐藏时，停止并释放相机流\n    this.userGrant = false;\n    this.isFlashLightEnable = false;\n    this.isSensorLight = false;\n    try {\n      customScan.off('lightingFlash');\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to off lightingFlash. Code: ${err.code}, message: ${err.message}`);\n    }\n    this.customScanStop();\n    try {\n      // 自定义相机流释放接口\n      customScan.release().catch((err: BusinessError) => {\n        hilog.error(0x0001, TAG,\n          `Failed to release customScan by promise. Code: ${err.code}, message: ${err.message}`);\n      })\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to release customScan. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  // 用户申请权限\n  async reqPermissionsFromUser(): Promise<number[]> {\n    hilog.info(0x0001, TAG, 'reqPermissionsFromUser start');\n    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n    let atManager = abilityAccessCtrl.createAtManager();\n    try {\n      const grantStatus: PermissionRequestResult =\n        await atManager.requestPermissionsFromUser(context, ['ohos.permission.CAMERA']);\n      return grantStatus.authResults;\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to requestPermissionsFromUser. Code: ${err.code}, message: ${err.message}`);\n      return [];\n    }\n  }\n\n  // 用户申请相机权限\n  async requestCameraPermission() {\n    let grantStatus = await this.reqPermissionsFromUser();\n    for (let i = 0; i < grantStatus.length; i++) {\n      if (grantStatus[i] === 0) {\n        // 用户授权，可以继续访问目标操作\n        hilog.info(0x0001, TAG, 'Succeeded in getting permissions.');\n        this.userGrant = true;\n        break;\n      }\n    }\n  }\n\n  // 竖屏时获取屏幕尺寸，设置预览流全屏示例\n  setDisplay() {\n    try {\n      // 默认竖屏\n      let displayClass = display.getDefaultDisplaySync();\n      this.displayHeight = this.getUIContext().px2vp(displayClass.height);\n      this.displayWidth = this.getUIContext().px2vp(displayClass.width);\n      let maxLen: number = Math.max(this.displayWidth, this.displayHeight);\n      let minLen: number = Math.min(this.displayWidth, this.displayHeight);\n      const RATIO: number = 16 / 9;\n      this.cameraHeight = maxLen;\n      this.cameraWidth = maxLen / RATIO;\n      this.offsetX = (minLen - this.cameraWidth) / 2;\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to getDefaultDisplaySync. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  // toast显示扫码结果\n  showScanResult(data: scanBarcode.ScanResult) {\n    try {\n      // 使用toast显示出扫码结果\n      this.getUIContext().getPromptAction().showToast({\n        message: JSON.stringify(data),\n        duration: 5000\n      });\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to showToast. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  // 初始化相机流\n  initCamera() {\n    this.isShowBack = false;\n    this.scanResult = [];\n    let viewControl: customScan.ViewControl = {\n      width: this.cameraWidth,\n      height: this.cameraHeight,\n      surfaceId: this.surfaceId\n    };\n    try {\n      // 自定义启动第四步，请求扫码接口，通过callback方式回调\n      customScan.start(viewControl, this.callback, this.frameCallback);\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to start customScan. Code: ${err.code}, message: ${err.message}`);\n    }\n\n  }\n\n  // 暂停相机流\n  customScanStop() {\n    try {\n      customScan.stop().catch((err: BusinessError) => {\n        hilog.error(0x0001, TAG, `Failed to stop customScan. Code: ${err.code}, message: ${err.message}`);\n      })\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to stop customScan. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  // 自定义扫码界面的顶部返回按钮和扫码提示\n  @Builder\n  TopTool() {\n    Column() {\n      Flex({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center }) {\n        Text('返回')\n          .onClick(() => {\n            this.getUIContext().getRouter().back();\n          })\n      }.padding({ left: 24, right: 24, top: 40 })\n\n\n      Column() {\n        Text('扫描二维码/条形码')\n        Text('对准二维码/条形码，即可自动扫描')\n      }.margin({ left: 24, right: 24, top: 24 })\n    }\n    .height(146)\n    .width('100%')\n  }\n\n  build() {\n    Stack() {\n      if (this.userGrant) {\n        Column() {\n          XComponent({\n            id: 'componentId',\n            type: XComponentType.SURFACE,\n            controller: this.mXComponentController\n          })\n            .onLoad(() => {\n              hilog.info(0x0001, TAG, 'Succeeded in loading, onLoad is called.');\n              // 获取XComponent组件的surfaceId\n              this.surfaceId = this.mXComponentController.getXComponentSurfaceId();\n              hilog.info(0x0001, TAG, `Succeeded in getting surfaceId: ${this.surfaceId}`);\n              this.initCamera();\n              // 闪光灯监听接口\n              customScan.on('lightingFlash', (err, isLightingFlash) => {\n                if (err) {\n                  hilog.error(0x0001, TAG,\n                    `Failed to on lightingFlash. Code: ${err.code}, message: ${err.message}`);\n                  return;\n                }\n                if (isLightingFlash) {\n                  this.isFlashLightEnable = true;\n                } else {\n                  try {\n                    if (!customScan.getFlashLightStatus()) {\n                      this.isFlashLightEnable = false;\n                    }\n                  } catch (err) {\n                    hilog.error(0x0001, TAG,\n                      `Failed to get flashLightStatus. Code: ${err.code}, message: ${err.message}`);\n                  }\n                }\n                this.isSensorLight = isLightingFlash;\n              });\n            })\n            .width(this.cameraWidth)\n            .height(this.cameraHeight)\n            .position({ x: this.offsetX, y: this.offsetY })\n        }\n        .height('100%')\n        .width('100%')\n      }\n\n\n      Column() {\n        this.TopTool()\n        Column() {\n        }\n        .layoutWeight(1)\n        .width('100%')\n\n\n        Column() {\n          Row() {\n            // 闪光灯按钮，启动相机流后才能使用\n            Button('FlashLight')\n              .onClick(() => {\n                let lightStatus: boolean = false;\n                try {\n                  lightStatus = customScan.getFlashLightStatus();\n                } catch (err) {\n                  hilog.error(0x0001, TAG,\n                    `Failed to get flashLightStatus. Code: ${err.code}, message: ${err.message}`);\n                }\n\n\n                // 根据当前闪光灯状态，选择打开或关闭闪光灯\n                if (lightStatus) {\n                  try {\n                    customScan.closeFlashLight();\n                    setTimeout(() => {\n                      this.isFlashLightEnable = this.isSensorLight;\n                    }, 200);\n                  } catch (err) {\n                    hilog.error(0x0001, TAG,\n                      `Failed to close flashLight. Code: ${err.code}, message: ${err.message}`);\n                  }\n                } else {\n                  try {\n                    customScan.openFlashLight();\n                  } catch (err) {\n                    hilog.error(0x0001, TAG,\n                      `Failed to open flashLight. Code: ${err.code}, message: ${err.message}`);\n                  }\n                }\n              })\n              .visibility((this.userGrant && this.isFlashLightEnable) ? Visibility.Visible : Visibility.None)\n\n\n            // 扫码成功后，点击按钮后重新扫码\n            Button('Scan')\n              .onClick(() => {\n                // 点击按钮重启相机流，重新扫码\n                this.initCamera();\n              })\n              .visibility(this.isShowBack ? Visibility.Visible : Visibility.None)\n          }\n\n\n          Row() {\n            // 预览流设置缩放比例\n            Button('缩放比例,当前比例:' + this.setZoomValue)\n              .onClick(() => {\n                // 设置相机缩放比例\n                if (!this.isShowBack) {\n                  if (!this.zoomValue || this.zoomValue === this.setZoomValue) {\n                    this.setZoomValue = this.customGetZoom();\n                  } else {\n                    this.zoomValue = this.zoomValue;\n                    this.customSetZoom(this.zoomValue);\n                    setTimeout(() => {\n                      if (!this.isShowBack) {\n                        this.setZoomValue = this.customGetZoom();\n                      }\n                    }, 1000);\n                  }\n                }\n              })\n          }\n          .margin({ top: 10, bottom: 10 })\n\n\n          Row() {\n            // 输入要设置的预览流缩放比例\n            TextInput({ placeholder: '输入缩放倍数' })\n              .type(InputType.Number)\n              .borderWidth(1)\n              .backgroundColor(Color.White)\n              .onChange(value => {\n                this.zoomValue = Number(value);\n              })\n          }\n        }\n        .width('50%')\n        .height(180)\n      }\n\n\n      // 单码、多码扫描后，显示码图蓝点位置。点击toast码图信息\n      ForEach(this.scanResult, (item: scanBarcode.ScanResult) => {\n        if (item.scanCodeRect) {\n          Image($rawfile('scan_selected2.svg')) // src/main/resources/rawfile/scan_selected2.svg\n            .width(40)\n            .height(40)\n            .markAnchor({ x: 20, y: 20 })\n            .position({\n              x: (item.scanCodeRect.left + item?.scanCodeRect?.right) / 2 + this.offsetX,\n              y: (item.scanCodeRect.top + item?.scanCodeRect?.bottom) / 2 + this.offsetY\n            })\n            .onClick(() => {\n              this.showScanResult(item);\n            })\n        }\n      }, (item: scanBarcode.ScanResult) => '' + item?.scanCodeRect?.left + item?.scanCodeRect?.right + 'px')\n    }\n    // 建议相机流设置为全屏\n    .width('100%')\n    .height('100%')\n    .onClick((event: ClickEvent) => {\n      // 是否已扫描到结果\n      if (this.isShowBack) {\n        return;\n      }\n      // 点击屏幕位置，获取点击位置(x,y)，设置相机焦点\n      let x1 = event.displayY / (this.displayHeight + 0.0);\n      let y1 = 1.0 - event.displayX / (this.displayWidth + 0.0);\n      try {\n        customScan.setFocusPoint({ x: x1, y: y1 });\n        hilog.info(0x0001, TAG, `Succeeded in setting focusPoint x1: ${x1}, y1: ${y1}`);\n      } catch (err) {\n        hilog.error(0x0001, TAG, `Failed to set focusPoint. Code: ${err.code}, message: ${err.message}`);\n      }\n      hilog.info(0x0001, TAG, `Succeeded in setting focusPoint x1: ${x1}, y1: ${y1}`);\n      // 设置连续自动对焦模式\n      setTimeout(() => {\n        try {\n          customScan.resetFocus();\n        } catch (err) {\n          hilog.error(0x0001, TAG, `Failed to reset focus. Code: ${err.code}, message: ${err.message}`);\n        }\n      }, 200);\n    }).gesture(PinchGesture({ fingers: 2 })\n      .onActionStart(() => {\n        hilog.info(0x0001, TAG, 'Pinch start');\n      })\n      .onActionUpdate((event: GestureEvent) => {\n        if (event) {\n          this.scaleValue = event.scale;\n        }\n      })\n      .onActionEnd(() => {\n        // 是否已扫描到结果\n        if (this.isShowBack) {\n          return;\n        }\n        // 获取双指缩放比例，设置变焦比\n        try {\n          let zoom = this.customGetZoom();\n          this.pinchValue = this.scaleValue * zoom;\n          this.customSetZoom(this.pinchValue);\n          hilog.info(0x0001, TAG, 'Pinch end');\n        } catch (err) {\n          hilog.error(0x0001, TAG, `Failed to set zoom. Code: ${err.code}, message: ${err.message}`);\n        }\n      }))\n  }\n\n  public customGetZoom(): number {\n    let zoom = 1;\n    try {\n      zoom = customScan.getZoom();\n      hilog.info(0x0001, TAG, `Succeeded in getting zoom, zoom: ${zoom}`);\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to get zoom. Code: ${err.code}, message: ${err?.message}`);\n    }\n    return zoom;\n  }\n\n  public customSetZoom(pinchValue: number): void {\n    try {\n      customScan.setZoom(pinchValue);\n      hilog.info(0x0001, TAG, `Succeeded in setting zoom.`);\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to set zoom. Code: ${err.code}, message: ${err?.message}`);\n    }\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过scanCodeRect数据可确定码图中心点的位置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "以设备竖屏、充电口向下为例，使用说明如下。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["scanCodeRect的四个点坐标如下，可根据坐标点绘制码图外围矩形框\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "左上角(x, y)：(left, top)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "右上角(x, y)：(right, top)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "左下角(x, y)：(left, bottom)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "右下角(x, y)：(right, bottom)"
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["由于码图中心点坐标需和XComponent的坐标保持一致，如果XComponent的x轴和y轴存在偏移，则码图位置需做相应的偏移。例如：x轴偏移量为：offsetX；y轴偏移量为：offsetY，中心点坐标最终转换为：\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "x = (left + right) / 2 + offsetX"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "y = (top + bottom) / 2 + offsetY"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果设备涉及旋转，码图中心点位置需要根据屏幕旋转角度(", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#%E5%B1%9E%E6%80%A7",
                children: "Display.rotation"
              }), ")进行变换，以保证在各旋转角度下码图中心位置正确。推荐参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://gitcode.com/HarmonyOS_Samples/scankit-samplecode-clientdemo-arkts",
                children: "示例工程"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "例如：XComponent宽度为width，高度为height，x轴偏移量为offsetX，y轴偏移量为offsetY："
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["当", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#%E5%B1%9E%E6%80%A7",
                  children: "Display.rotation"
                }), " = 0时，中心点坐标为：\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "x = (left + right) / 2 + offsetX"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "y = (top + bottom) / 2 + offsetY"
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["当", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#%E5%B1%9E%E6%80%A7",
                  children: "Display.rotation"
                }), " = 1时，中心点坐标为：\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "x = width - (top + bottom) / 2 + offsetX"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "y = (left + right) / 2 + offsetY"
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["当", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#%E5%B1%9E%E6%80%A7",
                  children: "Display.rotation"
                }), " = 2时，中心点坐标为：\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "x = width - (left + right) / 2 + offsetX"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "y = height - (top + bottom) / 2 + offsetY"
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["当", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#%E5%B1%9E%E6%80%A7",
                  children: "Display.rotation"
                }), " = 3时，中心点坐标为：\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "x = (top + bottom) / 2 + offsetX"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "y = height - (left + right) / 2+ offsetY"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(163952)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从5.0.2(14)开始，由于屏幕Display对象rotation和orientation属性变更，设备旋转不同角度后码图的位置需要重新适配。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对于5.0.2(14)之前版本，可以使用Display对象中的rotation或者orientation属性处理设备旋转不同角度后的码图位置，且需要针对设备类型做特殊适配。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对于5.0.2(14)及之后版本，需要统一使用Display对象的rotation属性处理设备旋转不同角度后的码图位置，无需针对设备类型做特殊适配。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器开发",
      children: "模拟器开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["部分接口支持模拟器开发，模拟器使用指导请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-emulator",
        children: "使用模拟器运行应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从6.0.0(20)版本开始，模拟器支持部分自定义界面扫码接口开发（支持的接口包括", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscaninit",
          children: "init"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstart",
          children: "start"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstop",
          children: "stop"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanrelease",
          children: "release"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanrescan",
          children: "rescan"
        }), "），可实现自定义界面扫码能力的基本功能验证。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器自定义界面扫码能力仅支持1280*720分辨率，开发者传入其他分辨率会统一转换成1280*720。"
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
270510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798964-ab54ae7390ac23c7102ec98c56fa1670.png");

},
910017(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
356826(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
163952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
971772(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
746442(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478613-8cff4860371ece6a77ba83658e51cc65.png");

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