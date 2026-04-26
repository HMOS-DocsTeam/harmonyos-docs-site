"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["994789"], {
871980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_pdfview_implements_pdf_pdfview_page_2_img_pdf_pdfview_page_2_img_md_364_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-pdfview-implements-pdf-pdfview-page-2-img-pdf-pdfview-page-2-img-md-364.json
var site_docs_pdf_kit_guide_pdf_pdfview_implements_pdf_pdfview_page_2_img_pdf_pdfview_page_2_img_md_364_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-page2img/pdf-pdfview-page2img","title":"PDF缩略图转换为图片","description":"场景介绍","source":"@site/docs/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-page2img/pdf-pdfview-page2img.md","sourceDirName":"pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-page2img","slug":"/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-page2img/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-page2img/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"PDF缩略图转换为图片","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-pdfview-page2img","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"批注","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-annotation/"},"next":{"title":"优化PDF文档切换体验","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-switch-optimize/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-page2img/pdf-pdfview-page2img.md


const frontMatter = {
	title: 'PDF缩略图转换为图片',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-pdfview-page2img',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'PDF缩略图转换为图片';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "pdf缩略图转换为图片",
        children: "PDF缩略图转换为图片"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#getpagepixelmap",
        children: "getPagePixelMap"
      }), "方法，将指定PDF缩略图转化为图片。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
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
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#getpagepixelmap",
              children: "getPagePixelMap"
            }), "(pageIndex: number, isSync?: boolean): Promise<image.PixelMap>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取对应PDF页面的缩略图，使用Promise异步回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用loadDocument方法，加载PDF文档。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用getPagePixelMap方法，获取image.PixelMap对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将image.PixelMap转化为二进制图片文件并保存。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pdfService, pdfViewManager } from '@kit.PDFKit';\nimport { image } from '@kit.ImageKit';\nimport { fileIo as fs } from '@kit.CoreFileKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct PdfPage {\n  private controller: pdfViewManager.PdfController = new pdfViewManager.PdfController();\n  private context = this.getUIContext().getHostContext() as Context;\n  private loadResult: pdfService.ParseResult = pdfService.ParseResult.PARSE_ERROR_FORMAT;\n\n  aboutToAppear(): void {\n    // 确保沙箱目录有input.pdf文档\n    let filePath = this.context.filesDir + '/input.pdf';\n    (async () => {\n      this.loadResult = await this.controller.loadDocument(filePath);\n    })()\n  }\n\n  // 将 pixelMap 转成图片格式\n  pixelMap2Buffer(pixelMap: image.PixelMap): Promise<ArrayBuffer> {\n    return new Promise((resolve, reject) => {\n      /**\n       设置打包参数\n       format：图片打包格式\n       quality：JPEG 编码输出图片质量\n       */\n      let packOpts: image.PackingOption = { format: 'image/jpeg', quality: 98 }\n      // 创建ImagePacker实例\n      const imagePackerApi = image.createImagePacker()\n      imagePackerApi.packToData(pixelMap, packOpts).then((buffer: ArrayBuffer) => {\n        resolve(buffer)\n      }).catch((err: BusinessError) => {\n        reject()\n      })\n    })\n  }\n\n  build() {\n    Column() {\n      // 转换为图片并保存到应用沙箱\n      Button('getPagePixelMap').onClick(async () => {\n        if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n          let pixmap: image.PixelMap = await this.controller.getPagePixelMap(0, true);\n          if (!pixmap) {\n            return\n          }\n          const imgBuffer = await this.pixelMap2Buffer(pixmap)\n          try {\n            const file =\n              fs.openSync(this.context.filesDir + `/${Date.now()}.png`, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n            await fs.write(file.fd, imgBuffer);\n            // 关闭文件\n            await fs.close(file.fd)\n          } catch (e) {\n            let error: BusinessError = e as BusinessError;\n            hilog.error(0x0000, 'getPagePixelMap-', `Code: ${error.code}, message: ${error.message} `);\n          }\n        }\n      })\n    }\n  }\n}\n"
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