"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["446753"], {
303382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_generate_scan_barcodegenerate_scan_barcodegenerate_md_d33_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-generate-scan-barcodegenerate-scan-barcodegenerate-md-d33.json
var site_docs_scan_kit_guide_scan_generate_scan_barcodegenerate_scan_barcodegenerate_md_d33_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-generate/scan-barcodegenerate/scan-barcodegenerate","title":"通过文本生成码图","description":"基本概念","source":"@site/docs/scan-kit-guide/scan-generate/scan-barcodegenerate/scan-barcodegenerate.md","sourceDirName":"scan-kit-guide/scan-generate/scan-barcodegenerate","slug":"/scan-kit-guide/scan-generate/scan-barcodegenerate/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-generate/scan-barcodegenerate/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"通过文本生成码图","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-barcodegenerate","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"识别图像数据","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-imagerecognition/scan-decodeimage/"},"next":{"title":"通过字节数组生成码图","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-generate/scan-generatearray/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-generate/scan-barcodegenerate/scan-barcodegenerate.md


const frontMatter = {
	title: '通过文本生成码图',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-barcodegenerate',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '通过文本生成码图';

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
        id: "通过文本生成码图",
        children: "通过文本生成码图"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "码图生成能力支持将字符串转换为自定义格式的码图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "码图生成能力支持将字符串转换为自定义格式的码图，包含条形码、二维码生成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以将字符串转成联系人码图，手机克隆码图，例如将\"HUAWEI\"字符串生成码图使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "码图生成能力支持Phone、Tablet、Wearable、2in1、TV（从5.1.0(18)版本开始支持Wearable、从5.1.1(19)版本开始支持2in1、TV）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(879567)/* ["default"] */.A) + "",
        width: "931",
        height: "499"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户向应用发起生成码图请求后，输入需要生成的码图信息，包括码图的类型、宽高等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用通过调用Scan Kit的createBarcode接口启动码图生成能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan Kit通过将字符串转换为所需格式的码图并返回给应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用向用户返回生成码图结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口返回值有两种返回形式：Callback和Promise回调。下表中为码图生成能力的Callback和Promise形式接口，Callback和Promise只是返回值方式不一样，功能相同。具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-generatebarcode/scan-generatebarcode",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-generatebarcode/scan-generatebarcode#generatebarcodecreatebarcode",
              children: "createBarcode"
            }), "(content: string, options: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-generatebarcode/scan-generatebarcode#createoptions",
              children: "CreateOptions"
            }), "): Promise<image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码图生成接口，返回生成的码图，类型为image.PixelMap，可以使用Image组件渲染成图片。使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-generatebarcode/scan-generatebarcode#generatebarcodecreatebarcode-1",
              children: "createBarcode"
            }), "(content: string, options: CreateOptions, callback: AsyncCallback<image.PixelMap>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码图生成接口，返回生成的码图，类型为image.PixelMap，可以使用Image组件渲染成图片。使用callback异步回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "码图生成根据传参内容直接生成所需码图，需要传入固定参数和可选参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了方便开发者接入，我们提供了详细的样例工程供参考，推荐参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/scankit-samplecode-clientdemo-arkts",
        children: "示例工程"
      }), "接入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例为调用码图生成能力的createBarcode接口实现码图生成。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入码图生成接口模块，该模块提供了码图生成的参数和方法，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入码图生成需要的图片模块、错误码模块\nimport { scanCore, generateBarcode } from '@kit.ScanKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用码图生成能力的createBarcode接口实现码图生成。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过Promise方式回调，获取生成的码图。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "@Entry\n@Component\nstruct Index {\n  @State pixelMap: image.PixelMap | undefined = undefined\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Button('generateBarcode Promise').onClick(() => {\n        // 以QR码为例，码图生成参数\n        this.pixelMap = undefined;\n        let content: string = 'huawei';\n        let options: generateBarcode.CreateOptions = {\n          scanType: scanCore.ScanType.QR_CODE,\n          height: 400,\n          width: 400\n        }\n        try {\n          // 码图生成接口，成功返回PixelMap格式图片\n          generateBarcode.createBarcode(content, options).then((pixelMap: image.PixelMap) => {\n            this.pixelMap = pixelMap;\n          }).catch((err: BusinessError) => {\n            hilog.error(0x0001, '[generateBarcode]',\n              `Failed to get PixelMap by promise with options. Code: ${err.code}, message: ${err.message}`);\n          })\n        } catch (err) {\n          hilog.error(0x0001, '[generateBarcode]',\n            `Failed to createBarcode by promise with options. Code: ${err.code}, message: ${err.message}`);\n        }\n\n      })\n      // 获取生成码图后显示\n      if (this.pixelMap) {\n        Image(this.pixelMap).width(300).height(300).objectFit(ImageFit.Contain)\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过Callback方式回调，获取生成的码图。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "@Entry\n@Component\nstruct Index {\n  @State pixelMap: image.PixelMap | undefined = undefined\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Button('generateBarcode Callback').onClick(() => {\n        // 以QR码为例，码图生成参数\n        let content = 'huawei';\n        let options: generateBarcode.CreateOptions = {\n          scanType: scanCore.ScanType.QR_CODE,\n          height: 400,\n          width: 400\n        }\n        try {\n          // 码图生成接口，成功返回PixelMap格式图片\n          generateBarcode.createBarcode(content, options, (err: BusinessError, pixelMap: image.PixelMap) => {\n            if (err) {\n              hilog.error(0x0001, '[generateBarcode]',\n                `Failed to get PixelMap by callback with options. Code: ${err.code}, message: ${err.message}`);\n              return;\n            }\n            this.pixelMap = pixelMap;\n          })\n        } catch (err) {\n          hilog.error(0x0001, '[generateBarcode]',\n            `Failed to createBarcode by callback with options. Code: ${err.code}, message: ${err.message}`);\n        }\n      })\n      // 获取生成码图后显示\n      if (this.pixelMap) {\n        Image(this.pixelMap).width(300).height(300).objectFit(ImageFit.Contain)\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
              })
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
879567(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478615-f3d4d9f58336d35a0c24c63b58a4951c.png");

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