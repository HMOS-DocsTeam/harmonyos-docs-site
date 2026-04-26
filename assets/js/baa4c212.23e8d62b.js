"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["993350"], {
692183(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_imagerecognition_scan_detectbarcode_scan_detectbarcode_md_baa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-imagerecognition-scan-detectbarcode-scan-detectbarcode-md-baa.json
var site_docs_scan_kit_guide_scan_imagerecognition_scan_detectbarcode_scan_detectbarcode_md_baa_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-imagerecognition/scan-detectbarcode/scan-detectbarcode","title":"识别本地图片","description":"基本概念","source":"@site/docs/scan-kit-guide/scan-imagerecognition/scan-detectbarcode/scan-detectbarcode.md","sourceDirName":"scan-kit-guide/scan-imagerecognition/scan-detectbarcode","slug":"/scan-kit-guide/scan-imagerecognition/scan-detectbarcode/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-imagerecognition/scan-detectbarcode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"识别本地图片","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-detectbarcode","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义界面扫码","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-customscan/"},"next":{"title":"识别图像数据","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-imagerecognition/scan-decodeimage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-imagerecognition/scan-detectbarcode/scan-detectbarcode.md


const frontMatter = {
	title: '识别本地图片',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-detectbarcode',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '识别本地图片';

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
        id: "识别本地图片",
        children: "识别本地图片"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片识码能力支持对图库中的码图进行扫描识别，并获取信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片识码能力支持对图库中的条形码、二维码、MULTIFUNCTIONAL CODE进行识别，并获得码类型、码值、码位置等信息。该能力可用于一图单码和一图多码的识别，比如条形码、付款码等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(61289)/* ["default"] */.A) + "",
        width: "1723",
        height: "823"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户向开发者的应用发起图片识码请求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用通过调用Scan Kit的decode接口启动图片识码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan Kit通过回调返回图片识码结果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用向用户返回扫码结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口返回值有两种返回形式：Callback和Promise回调。下表中为启动图片识码Callback和Promise形式接口，Callback和Promise只是返回值方式不一样，功能相同。具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-imagedecode/scan-imagedecode",
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
              href: "/ref/scan-api/scan-arkts/scan-imagedecode/scan-imagedecode#detectbarcodedecode",
              children: "decode"
            }), "(inputImage: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-imagedecode/scan-imagedecode#inputimage",
              children: "InputImage"
            }), ", options?: scanBarcode.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#scanoptions",
              children: "ScanOptions"
            }), "): Promise<Array<scanBarcode.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#scanresult",
              children: "ScanResult"
            }), ">>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动图片识码，通过InputImage传入图片信息，通过ScanOptions进行识码参数设置（options为可选参数），使用Promise异步回调返回识码结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-imagedecode/scan-imagedecode#detectbarcodedecode-1",
              children: "decode"
            }), "(inputImage: InputImage, options: scanBarcode.ScanOptions, callback: AsyncCallback<Array<scanBarcode.ScanResult>>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动图片识码，通过InputImage传入图片信息，通过ScanOptions进行识码参数设置，使用Callback异步回调返回识码结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-imagedecode/scan-imagedecode#detectbarcodedecode-2",
              children: "decode"
            }), "(inputImage: InputImage, callback: AsyncCallback<Array<scanBarcode.ScanResult>>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动图片识码，通过InputImage传入图片信息，使用Callback异步回调返回识码结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片识码接口支持识别图库中的条形码，二维码以及MULTIFUNCTIONAL CODE，并返回图片中码类型，码值、码位置（码图最小外接矩形左上角和右下角的坐标）等信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了方便开发者接入，我们提供了详细的样例工程供参考，推荐参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/scankit-samplecode-clientdemo-arkts",
        children: "示例工程"
      }), "接入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例为调用图片识码的detectBarcode.decode接口获取码图信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入图片识码接口和相关接口模块，该接口提供了图片识码参数和方法，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入图片识码需要的日志和picker模块\nimport { scanCore, scanBarcode, detectBarcode } from '@kit.ScanKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用detectBarcode.decode接口解析码图。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过Promise回调函数得到扫码结果，InputImage对象中uri参数推荐通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/medialibrary-kit/photoaccesshelper-photoviewpicker",
                children: "picker"
              }), "方式获取。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "@Entry\n@Component\nstruct DetectPage {\n  build() {\n    Column() {\n      Button('Promise with options')\n        .backgroundColor('#0D9FFB')\n        .fontSize(20)\n        .fontColor($r('sys.color.comp_background_list_card'))\n        .fontWeight(FontWeight.Normal)\n        .align(Alignment.Center)\n        .type(ButtonType.Capsule)\n        .width('90%')\n        .height(40)\n        .margin({ top: 5, bottom: 5 })\n        .onClick(() => {\n          // 定义识码参数options\n          let options: scanBarcode.ScanOptions = {\n            scanTypes: [scanCore.ScanType.ALL],\n            enableMultiMode: true,\n          }\n          // 通过picker拉起图库的图片\n          let photoOption = new photoAccessHelper.PhotoSelectOptions();\n          photoOption.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;\n          photoOption.maxSelectNumber = 1;\n          let photoPicker = new photoAccessHelper.PhotoViewPicker();\n          photoPicker.select(photoOption).then((data) => {\n            // 定义识码参数inputImage，其中uri为picker选择图片\n            let inputImage: detectBarcode.InputImage = { uri: data.photoUris[0] };\n            try {\n              // 调用图片识码接口\n              detectBarcode.decode(inputImage, options).then((data: Array<scanBarcode.ScanResult>) => {\n                hilog.info(0x0001, '[Scan Sample]',\n                  `Succeeded in getting ScanResult by promise with options, result is ${JSON.stringify(data)}`);\n              }).catch((err: BusinessError) => {\n                hilog.error(0x0001, '[Scan Sample]',\n                  `Failed to get ScanResult by promise with options. Code: ${err.code}, message: ${err.message}`);\n              });\n            } catch (err) {\n              hilog.error(0x0001, '[Scan Sample]',\n                `Failed to detectBarcode. Code: ${err.code}, message: ${err.message}`);\n            }\n          }).catch((err: BusinessError) => {\n            hilog.error(0x0001, '[Scan Sample]',\n              `Failed to select a photo. Code: ${err.code}, message: ${err.message}`);\n          })\n        });\n    }\n    .width('100%')\n    .height('100%')\n    .alignItems(HorizontalAlign.Center)\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过Callback回调函数得到扫码结果，InputImage对象中uri参数推荐通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/medialibrary-kit/photoaccesshelper-photoviewpicker",
                children: "picker"
              }), "方式获取。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "@Entry\n@Component\nstruct DetectPage {\n  build() {\n    Column() {\n      Button('Callback with options')\n        .backgroundColor('#0D9FFB')\n        .fontSize(20)\n        .fontColor($r('sys.color.comp_background_list_card'))\n        .fontWeight(FontWeight.Normal)\n        .align(Alignment.Center)\n        .type(ButtonType.Capsule)\n        .width('90%')\n        .height(40)\n        .margin({ top: 5, bottom: 5 })\n        .onClick(() => {\n          // 定义识码参数options\n          let options: scanBarcode.ScanOptions = {\n            scanTypes: [scanCore.ScanType.ALL],\n            enableMultiMode: true,\n            enableAlbum: true\n          }\n          // 通过选择模式拉起photoPicker界面，用户可以选择一个图片\n          let photoOption = new photoAccessHelper.PhotoSelectOptions();\n          photoOption.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;\n          photoOption.maxSelectNumber = 1;\n          let photoPicker = new photoAccessHelper.PhotoViewPicker();\n          photoPicker.select(photoOption).then((data) => {\n            // 定义识码参数inputImage，其中uri为picker选择图片\n            let inputImage: detectBarcode.InputImage = { uri: data.photoUris[0] };\n            try {\n              // 调用图片识码接口\n              detectBarcode.decode(inputImage, options,\n                (err: BusinessError, data: Array<scanBarcode.ScanResult>) => {\n                  if (err && err.code) {\n                    hilog.error(0x0001, '[Scan Sample]',\n                      `Failed to get ScanResult by callback with options. Code: ${err.code}, message: ${err.message}`);\n                    return;\n                  }\n                  hilog.info(0x0001, '[Scan Sample]',\n                    `Succeeded in getting ScanResult by callback with options, result is ${JSON.stringify(data)}`);\n                });\n            } catch (err) {\n              hilog.error(0x0001, '[Scan Sample]',\n                `Failed to detectBarcode. Code: ${err.code}, message: ${err.message}`);\n            }\n          }).catch((err: BusinessError) => {\n            hilog.error(0x0001, '[Scan Sample]',\n              `Failed to select a photo. Code: ${err.code}, message: ${err.message}`);\n          })\n        });\n    }\n    .width('100%')\n    .height('100%')\n    .alignItems(HorizontalAlign.Center)\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器开发",
      children: "模拟器开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持模拟器开发，模拟器使用指导请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-emulator",
        children: "使用模拟器运行应用"
      }), "。"]
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
61289(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438659-38f6d8c032758024deb0f234256d59a2.png");

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