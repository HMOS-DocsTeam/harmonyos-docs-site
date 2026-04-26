"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["593929"], {
12583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_imagerecognition_scan_decodeimage_scan_decodeimage_md_e2f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-imagerecognition-scan-decodeimage-scan-decodeimage-md-e2f.json
var site_docs_scan_kit_guide_scan_imagerecognition_scan_decodeimage_scan_decodeimage_md_e2f_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-imagerecognition/scan-decodeimage/scan-decodeimage","title":"识别图像数据","description":"基本概念","source":"@site/docs/scan-kit-guide/scan-imagerecognition/scan-decodeimage/scan-decodeimage.md","sourceDirName":"scan-kit-guide/scan-imagerecognition/scan-decodeimage","slug":"/scan-kit-guide/scan-imagerecognition/scan-decodeimage/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-imagerecognition/scan-decodeimage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"识别图像数据","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-decodeimage","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"识别本地图片","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-imagerecognition/scan-detectbarcode/"},"next":{"title":"通过文本生成码图","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-generate/scan-barcodegenerate/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-imagerecognition/scan-decodeimage/scan-decodeimage.md


const frontMatter = {
	title: '识别图像数据',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-decodeimage',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '识别图像数据';

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
        id: "识别图像数据",
        children: "识别图像数据"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像数据识码能力支持对相机预览流数据中的码图进行扫描识别，并获取信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像数据识码能力支持对相机预览流数据中的条形码、二维码、MULTIFUNCTIONAL CODE进行识别，并获得码类型、码值、码位置、相机变焦比等信息。该能力可用于一图单码和一图多码的识别，比如条形码、付款码等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(827788)/* ["default"] */.A) + "",
        width: "888",
        height: "507"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户向应用发起识码请求。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/camera-kit/camera-overview",
          children: "Camera Kit"
        }), "启动相机，获取预览流数据。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用通过调用Scan Kit的decodeImage接口识别码图。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan Kit通过回调返回识别结果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用向用户返回扫码结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["识别图像数据中的码图，以Promise形式返回识别结果。具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-imagedecode/scan-imagedecode",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-imagedecode/scan-imagedecode#detectbarcodedecodeimage",
              children: "decodeImage"
            }), "(image: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-imagedecode/scan-imagedecode#byteimage",
              children: "ByteImage"
            }), ", options?: scanBarcode.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-scanbarcode-api/scan-scanbarcode-api#scanoptions",
              children: "ScanOptions"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-imagedecode/scan-imagedecode#detectresult",
              children: "DetectResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动图像识码，通过传入ByteImage类型的图像数据信息，使用Promise异步回调返回识码结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像数据识码能力支持对相机预览流数据中的条形码、二维码、MULTIFUNCTIONAL CODE进行识别，并返回码类型、码值、码位置（码图最小外接矩形左上角和右下角的坐标，QR码支持返回四个点坐标）、相机变焦比等信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了方便开发者接入，我们提供了详细的样例工程供参考，推荐参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/scankit-samplecode-clientdemo-arkts",
        children: "示例工程"
      }), "接入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例为调用detectBarcode.decodeImage接口获取码图信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入图像识码接口和相关接口模块，该模块提供了图像识码参数和方法，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { detectBarcode, scanBarcode, scanCore } from '@kit.ScanKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { camera } from '@kit.CameraKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用Camera Kit启动相机能力，实现双路预览功能，具体实现详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-dual-channel-preview",
            children: "双路预览"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过ImageReceiver实时获取预览图像数据，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-dual-channel-preview",
            children: "双路预览"
          }), "，调用detectBarcode.decodeImage接口解析图像数据。请在识别完成后再释放图像数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从ImageReceiver获取imgComponent: image.Component，预览流设置的宽高: width, height\nfunction decodeImageBuffer(imgComponent: image.Component, width: number, height: number) {\n  let byteImg: detectBarcode.ByteImage = {\n    byteBuffer: imgComponent.byteBuffer,\n    // 相机预览流数据旋转90°\n    width: height,\n    height: width,\n    format: detectBarcode.ImageFormat.NV21\n  };\n  let options: scanBarcode.ScanOptions = {\n    scanTypes: [scanCore.ScanType.ALL],\n    enableMultiMode: true,\n    enableAlbum: false\n  };\n  try {\n    detectBarcode.decodeImage(byteImg, options).then((data: detectBarcode.DetectResult) => {\n      hilog.info(0x0001, '[Scan Sample]',\n        `Succeeded in getting DetectResult by promise with options, result is ${JSON.stringify(data)}`);\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0001, '[Scan Sample]',\n        `Failed to get DetectResult by promise with options. Code: ${err.code}, message: ${err.message}`);\n    })\n  } catch (err) {\n    hilog.error(0x0001, '[Scan Sample]', `Failed to detectBarcode. Code: ${err.code}, message: ${err.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["detectBarcode.", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/scan-api/scan-arkts/scan-imagedecode/scan-imagedecode#detectresult",
            children: "DetectResult"
          }), "中返回的cornerPoints可参考以下说明使用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "因为屏幕自然方向和摄像头传感器方向不同，所以cornerPoints四个点的坐标需按屏幕自然方向对应的坐标系转换。四个点的对应转换逻辑如下（假设创建的相机预览流宽高为1080 * 1920）。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "右下角(x, y)：(1080 - cornerPoints[0].y, cornerPoints[0].x）"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "左下角(x, y)：(1080 - cornerPoints[1].y, cornerPoints[1].x）"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "左上角(x, y)：(1080 - cornerPoints[2].y, cornerPoints[2].x）"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "右上角(x, y)：(1080 - cornerPoints[3].y, cornerPoints[3].x）"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "当创建的相机预览流宽高和实际预览组件XComponent的宽高不一致时，cornerPoints四个点的坐标需按缩放比例转换。例如相机预览流宽高为1080 * 1920，XComponent的宽高为width * height，则坐标缩放比例ratio为：width / 1080, 最终转换后的坐标为(x * ratio, y * ratio)。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器开发",
      children: "模拟器开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "暂不支持模拟器开发，调用接口会返回错误信息“Emulator is not supported.”"
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
827788(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958614-8bf1d2735450a65e62beccf690a4df25.png");

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