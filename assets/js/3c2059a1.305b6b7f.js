"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["473432"], {
486088(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_scanbarcode_scan_scanbarcode_md_3c2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-scanbarcode-scan-scanbarcode-md-3c2.json
var site_docs_scan_kit_guide_scan_scanbarcode_scan_scanbarcode_md_3c2_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-scanbarcode/scan-scanbarcode","title":"默认界面扫码","description":"基本概念","source":"@site/docs/scan-kit-guide/scan-scanbarcode/scan-scanbarcode.md","sourceDirName":"scan-kit-guide/scan-scanbarcode","slug":"/scan-kit-guide/scan-scanbarcode/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-scanbarcode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"默认界面扫码","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-scanbarcode","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入“扫码直达”服务","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-directservice/"},"next":{"title":"自定义界面扫码","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-customscan/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-scanbarcode/scan-scanbarcode.md


const frontMatter = {
	title: '默认界面扫码',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-scanbarcode',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '默认界面扫码';

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
        id: "默认界面扫码",
        children: "默认界面扫码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认界面扫码能力提供系统级体验一致的扫码界面，包含相机预览流，相册扫码入口，暗光环境闪光灯开启提示。Scan Kit默认界面扫码对系统相机权限进行了预授权且调用期间处于安全访问状态，无需开发者再次申请相机权限。适用于不同扫码场景的应用开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(91380)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过默认界面扫码可以实现应用内的扫码功能，为了获得更好的应用体验，推荐同时", (0,jsx_runtime.jsx)(_components.a, {
        href: "/scan-kit-guide/scan-directservice",
        children: "接入“扫码直达”服务"
      }), "，应用可以同时支持系统扫码入口（控制中心扫一扫）和应用内扫码两种方式跳转到指定服务页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["默认界面扫码能力提供了系统级体验一致的扫码界面以及相册扫码入口，支持单码和多码识别，支持多种识码类型，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-scancore/scan-scancore#scantype",
        children: "ScanType"
      }), "。无需使用三方库就可帮助开发者的应用快速处理各种扫码场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认界面扫码UX："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(145940)/* ["default"] */.A) + "",
        width: "1040",
        height: "662"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(179098)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "系统首次使用默认界面扫码功能时，会向用户弹出隐私横幅提醒。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户可以点击“进一步了解”查看安全访问相机说明，也可以关闭隐私横幅，关闭后重新打开应用的扫码界面将不再显示隐私横幅提醒，显示安全访问提示，3s后消失。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从6.1.0(23)版本开始，默认界面扫码的标题支持根据", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#scanoptions",
            children: "ScanOptions"
          }), "的scanTypes进行动态显示。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对于6.1.0(23)之前版本，标题统一显示为“扫描二维码/条形码”。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["对于6.1.0(23)及之后版本：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "scanTypes为ALL、FORMAT_UNKNOWN，或同时包含条形码和二维码类型，标题显示为“扫描二维码/条形码”。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "scanTypes未设置，标题显示为“扫描二维码/条形码”。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "scanTypes仅包含条形码类型，标题显示为“扫描条形码”。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "scanTypes仅包含二维码类型，标题显示为“扫描二维码”。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从6.1.0(23)版本开始，默认界面扫码的标题支持根据", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#scanoptions",
          children: "ScanOptions"
        }), "的scanTypes进行动态显示。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从6.1.0(23)版本开始，默认界面扫码能力支持带后置相机的Wearable，可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedcameras",
          children: "cameraManager.getSupportedCameras"
        }), "接口查询是否带后置相机。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从6.0.0(20)版本开始，默认界面扫码能力支持悬浮屏、分屏场景。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "相册扫码只支持单码识别。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持界面UX添加自定义设置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用默认界面扫码的主要业务流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(64326)/* ["default"] */.A) + "",
        width: "882",
        height: "564"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户向开发者的应用发起扫码请求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者的应用通过调用Scan Kit的startScanForResult接口启动扫码界面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统首次使用默认界面扫码功能时，会向用户弹出隐私横幅提醒。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户可以点击关闭隐私横幅，重新打开应用的扫码界面将不再显示隐私横幅提醒，显示安全访问提示，3s后消失。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan Kit通过Callback回调函数或Promise方式返回扫码结果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户进行多码扫描时，需点击选择其中一个码图获取扫码结果返回。单码扫描则可直接返回扫码结果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解析码值结果跳转应用服务页。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口返回值有两种返回形式：Callback和Promise回调。下表中为默认界面扫码Callback和Promise形式接口，Callback和Promise只是返回值方式不一样，功能相同。startScanForResult接口打开的是应用内呈现的扫码界面样式。具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api",
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
              href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#scanbarcodestartscanforresult",
              children: "startScanForResult"
            }), "(context: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-common/js-apis-app-ability-common#context",
              children: "common.Context"
            }), ", options?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#scanoptions",
              children: "ScanOptions"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#scanresult",
              children: "ScanResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动默认界面扫码，通过ScanOptions进行扫码参数设置，返回扫码结果。使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#scanbarcodestartscanforresult-2",
              children: "startScanForResult"
            }), "(context: common.Context, options: ScanOptions, callback: AsyncCallback<ScanResult>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动默认界面扫码，通过ScanOptions进行扫码参数设置，返回扫码结果。使用callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#scanbarcodestartscanforresult-1",
              children: "startScanForResult"
            }), "(context: common.Context, callback: AsyncCallback<ScanResult>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动默认界面扫码，返回扫码结果。使用callback异步回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(914635)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["startScanForResult接口需要在页面和组件的生命周期内调用。若需要设置扫码页面为全屏或沉浸式，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-layout-development/arkts-develop-apply-immersive-effects",
        children: "开发应用沉浸式效果"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scan Kit提供了默认界面扫码的能力，由扫码接口直接控制相机实现最优的相机放大控制、自适应的曝光调节、自适应对焦调节等操作，保障流畅的扫码体验，减少开发者的工作量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了方便开发者接入，我们提供了详细的样例工程供参考，推荐参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/scankit-samplecode-clientdemo-arkts",
        children: "示例工程"
      }), "接入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例为调用Scan Kit的startScanForResult接口跳转扫码页面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导入默认界面扫码模块，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/scan-api/scan-arkts/scan-scancore/scan-scancore",
            children: "scanCore"
          }), "提供扫码类型定义，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api",
            children: "scanBarcode"
          }), "提供拉起默认界面扫码的方法和参数，导入方法如下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { scanCore, scanBarcode } from '@kit.ScanKit';\n// 导入默认界面扫码需要的日志模块和错误码模块\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用startScanForResult方法拉起默认界面扫码。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过Promise方式得到扫码结果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "@Entry\n@Component\nstruct ScanBarCodePage {\n  build() {\n    Column() {\n      Row() {\n        Button(\"Promise with options\")\n          .backgroundColor('#0D9FFB')\n          .fontSize(20)\n          .fontColor($r('sys.color.comp_background_list_card'))\n          .fontWeight(FontWeight.Normal)\n          .align(Alignment.Center)\n          .type(ButtonType.Capsule)\n          .width('90%')\n          .height(40)\n          .margin({ top: 5, bottom: 5 })\n          .onClick(() => {\n            // 定义扫码参数options\n            let options: scanBarcode.ScanOptions = {\n              scanTypes: [scanCore.ScanType.ALL],\n              enableMultiMode: true,\n              enableAlbum: true\n            };\n            try {\n              // 可调用getHostContext接口获取当前页面关联的Context\n              scanBarcode.startScanForResult(this.getUIContext().getHostContext(), options)\n                .then((data: scanBarcode.ScanResult) => {\n                  // 解析码值结果跳转应用服务页\n                  hilog.info(0x0001, '[Scan CPSample]',\n                    `Succeeded in getting ScanResult by promise with options, result is ${JSON.stringify(data)}`);\n                })\n                .catch((err: BusinessError) => {\n                  hilog.error(0x0001, '[Scan CPSample]',\n                    `Failed to get ScanResult by promise with options. Code:${err.code}, message: ${err.message}`);\n                });\n            } catch (err) {\n              hilog.error(0x0001, '[Scan CPSample]',\n                `Failed to start the scanning service. Code:${err.code}, message: ${err.message}`);\n            }\n          })\n      }\n      .height('100%')\n    }\n    .width('100%')\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过Callback回调函数得到扫码结果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "@Entry\n@Component\nstruct ScanBarCodePage {\n  build() {\n    Column() {\n      Row() {\n        Button('Callback with options')\n          .backgroundColor('#0D9FFB')\n          .fontSize(20)\n          .fontColor($r('sys.color.comp_background_list_card'))\n          .fontWeight(FontWeight.Normal)\n          .align(Alignment.Center)\n          .type(ButtonType.Capsule)\n          .width('90%')\n          .height(40)\n          .margin({ top: 5, bottom: 5 })\n          .onClick(() => {\n            // 定义扫码参数options\n            let options: scanBarcode.ScanOptions = {\n              scanTypes: [scanCore.ScanType.ALL],\n              enableMultiMode: true,\n              enableAlbum: true\n            };\n            try {\n              // 可调用getHostContext接口获取当前页面关联的Context\n              scanBarcode.startScanForResult(this.getUIContext().getHostContext(), options,\n                (err: BusinessError, data: scanBarcode.ScanResult) => {\n                  if (err) {\n                    hilog.error(0x0001, '[Scan CPSample]',\n                      `Failed to get ScanResult by callback with options. Code: ${err.code}, message: ${err.message}`);\n                    return;\n                  }\n                  // 解析码值结果跳转应用服务页\n                  hilog.info(0x0001, '[Scan CPSample]',\n                    `Succeeded in getting ScanResult by callback with options, result is ${JSON.stringify(data)}`);\n                })\n            } catch (err) {\n              hilog.error(0x0001, '[Scan CPSample]',\n                `Failed to start the scanning service. Code:${err.code}, message: ${err.message}`);\n            }\n          })\n      }\n      .height('100%')\n    }\n    .width('100%')\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器开发",
      children: "模拟器开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从6.0.0(20)版本开始，模拟器支持默认界面扫码能力开发，模拟器使用指导请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-emulator",
        children: "使用模拟器运行应用"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模拟器中默认界面扫码的相机流存在镜像问题，且由于仅支持固定分辨率比例，画面会出现上下黑边。"
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
145940(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438657-8a2559c9418e6253376190a1c20e62bd.png");

},
64326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958612-8ce98f9ea44580630809ef68be518827.png");

},
914635(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
91380(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
179098(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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