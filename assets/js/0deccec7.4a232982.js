"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["106854"], {
126614(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_generate_scan_generatearray_scan_generatearray_md_0de_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-generate-scan-generatearray-scan-generatearray-md-0de.json
var site_docs_scan_kit_guide_scan_generate_scan_generatearray_scan_generatearray_md_0de_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-generate/scan-generatearray/scan-generatearray","title":"通过字节数组生成码图","description":"基本概念","source":"@site/docs/scan-kit-guide/scan-generate/scan-generatearray/scan-generatearray.md","sourceDirName":"scan-kit-guide/scan-generate/scan-generatearray","slug":"/scan-kit-guide/scan-generate/scan-generatearray/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-generate/scan-generatearray/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"通过字节数组生成码图","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-generatearray","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过文本生成码图","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-generate/scan-barcodegenerate/"},"next":{"title":"如何添加“扫码直达”服务的快速入口","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-generate/scan-generatearray/scan-generatearray.md


const frontMatter = {
	title: '通过字节数组生成码图',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-generatearray',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '通过字节数组生成码图';

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
        id: "通过字节数组生成码图",
        children: "通过字节数组生成码图"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "码图生成能力支持将字节数组转换为自定义格式的码图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "码图生成能力支持将字节数组转换为自定义格式的码图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：调用码图生成能力，将字节数组转换成交通一卡通二维码使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "码图生成能力支持Phone、Tablet、Wearable、2in1、TV（从5.1.0(18)版本开始支持Wearable、从5.1.1(19)版本开始支持2in1、TV）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若Scan Kit识别某码图内容显示内容为乱码，则该码图的字节数组需要通过专门的解码器解析，例如地铁闸机。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(380059)/* ["default"] */.A) + "",
        width: "936",
        height: "504"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户向应用发起生成码图请求后，传入需要生成的码图信息，包括码图的类型、宽高等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用通过调用Scan Kit的createBarcode接口启动码图生成能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan Kit通过将字节数组转换为码图并返回给应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用向用户返回生成码图结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过字节数组生成码图，以Promise形式生成码图。具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-generatebarcode/scan-generatebarcode",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-generatebarcode/scan-generatebarcode#generatebarcodecreatebarcode-2",
              children: "createBarcode"
            }), "(content: ArrayBuffer, options: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scan-api/scan-arkts/scan-generatebarcode/scan-generatebarcode#createoptions",
              children: "CreateOptions"
            }), "): Promise<image.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
              children: "PixelMap"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码图生成接口，返回生成的码图，类型为image.PixelMap，可以使用Image组件渲染成图片。使用Promise异步回调。"
          })]
        })
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
            children: "// 导入码图生成需要的图片模块、错误码模块\nimport { scanCore, generateBarcode } from '@kit.ScanKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { buffer } from '@kit.ArkTS';\n"
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
                children: "const TAG: string = 'Create barcode';\n\n@Entry\n@Component\nstruct Index {\n  @State pixelMap: image.PixelMap | undefined = undefined\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      Button('generateBarcode Promise').onClick(() => {\n        this.pixelMap = undefined;\n        let content: string =\n          '0177C10DD10F7768600202312110000063458FD14112345678FFFFD381012610b746365409210201b66636540ad0200020000000000110e617003201000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006645fbec664358ECF657CB40693c92da';\n        let contentBuffer: ArrayBuffer = buffer.from(content, 'hex').buffer; // 将包含十六进制字符的字符串转换成ArrayBuffer\n        let options: generateBarcode.CreateOptions = {\n          scanType: scanCore.ScanType.QR_CODE,\n          height: 400,\n          width: 400\n        }\n        try {\n          // 码图生成接口，成功返回PixelMap格式图片\n          generateBarcode.createBarcode(contentBuffer, options).then((pixelMap: image.PixelMap) => {\n            this.pixelMap = pixelMap;\n            hilog.info(0x0001, TAG, 'Succeeded in creating barCode.');\n          }).catch((err: BusinessError) => {\n            hilog.error(0x0001, TAG, `Failed to createBarCode. Code: ${err.code}, message: ${err.message}`);\n          })\n        } catch (err) {\n          hilog.error(0x0001, TAG,\n            `Failed to createBarcode by Promise with options. Code: ${err.code}, message: ${err.message}`);\n        }\n      })\n      // 获取生成码图后显示\n      if (this.pixelMap) {\n        Image(this.pixelMap).width(300).height(300).objectFit(ImageFit.Contain)\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
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
380059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798966-83b179090a86e4c34d080cf29e414f44.png");

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