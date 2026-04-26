"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["88587"], {
216539(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_pdfservice_implements_pdf_doc_to_imgs_pdf_get_img_pdf_get_img_md_6a7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-pdfservice-implements-pdf-doc-to-imgs-pdf-get-img-pdf-get-img-md-6a7.json
var site_docs_pdf_kit_guide_pdf_pdfservice_implements_pdf_doc_to_imgs_pdf_get_img_pdf_get_img_md_6a7_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-get-img/pdf-get-img","title":"转换指定页面或指定区域为图片","description":"场景介绍","source":"@site/docs/pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-get-img/pdf-get-img.md","sourceDirName":"pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-get-img","slug":"/pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-get-img/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-get-img/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"转换指定页面或指定区域为图片","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-get-img","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"PDF页面文本、图片和批注","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-txt-img-annot/"},"next":{"title":"转换整个PDF文档为图片","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-convert-img/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-get-img/pdf-get-img.md


const frontMatter = {
	title: '转换指定页面或指定区域为图片',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-get-img',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '转换指定页面或指定区域为图片';

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
        id: "转换指定页面或指定区域为图片",
        children: "转换指定页面或指定区域为图片"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PDF文档页面转换为图片，或将页面的指定区域转换为图片时使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
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
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#getpagepixelmap",
              children: "getPagePixelMap"
            }), "(): image.PixelMap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前页的图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#getcustompagepixelmap",
              children: "getCustomPagePixelMap"
            }), "(matrix: PdfMatrix, isGray: boolean, drawAnnotations: boolean): image.PixelMap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定PdfPage区域的图片内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#getareapixelmap",
              children: "getAreaPixelMap"
            }), "(matrix: PdfMatrix, bitmapwidth: number, bitmapHeight: number, isGray: boolean, drawAnnotations: boolean): image.PixelMap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定PdfPage区域的图片内容，并指定图片的宽和高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#getareapixelmapwithoptions",
              children: "getAreaPixelMapWithOptions"
            }), "(matrix: PdfMatrix, bitmapwidth: number, bitmapHeight: number, options?: PixelOptions): image.PixelMap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定PdfPage区域的图片内容，并指定图片的宽和高等参数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用loadDocument方法加载PDF文档。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用getPage方法获取某个页面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用getPagePixelMap，getAreaPixelMapWithOptions或getCustomPagePixelMap方法获取当前页面或者页面区域，这时获取的是image.PixelMap图像类型。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将image.PixelMap图像类型转化为二进制图片文件并保存，参考以下方法pixelMap2Buffer。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { pdfService } from '@kit.PDFKit';\nimport { image } from '@kit.ImageKit';\nimport { fileIo as fs } from '@kit.CoreFileKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct PdfPage {\n  private pdfDocument: pdfService.PdfDocument = new pdfService.PdfDocument();\n  private context = this.getUIContext().getHostContext() as Context;\n  private loadResult: pdfService.ParseResult = pdfService.ParseResult.PARSE_ERROR_FORMAT;\n\n  aboutToAppear(): void {\n    // 确保沙箱目录有input.pdf文档\n    let filePath = this.context.filesDir + '/input.pdf';\n    this.loadResult = this.pdfDocument.loadDocument(filePath);\n  }\n\n  // 将 pixelMap 转成图片格式\n  pixelMap2Buffer(pixelMap: image.PixelMap): Promise<ArrayBuffer> {\n    return new Promise((resolve, reject) => {\n      /**\n       设置打包参数\n       format：图片打包格式\n       quality：JPEG 编码输出图片质量\n       bufferSize：图片大小\n       */\n      let packOpts: image.PackingOption = { format: 'image/jpeg', quality: 98 }\n      // 创建ImagePacker实例\n      const imagePackerApi = image.createImagePacker()\n      imagePackerApi.packToData(pixelMap, packOpts).then((buffer: ArrayBuffer) => {\n        resolve(buffer)\n      }).catch((err: BusinessError) => {\n        reject()\n      })\n    })\n  }\n\n  build() {\n    Column() {\n      // 获取为图片并保存到应用沙箱\n      Button('getPagePixelMap').onClick(async () => {\n        if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n          let page = this.pdfDocument.getPage(0)\n          let pixmap: image.PixelMap = page.getPagePixelMap();\n          if (!pixmap) {\n            return\n          }\n          const imgBuffer = await this.pixelMap2Buffer(pixmap)\n          try {\n            const file =\n              fs.openSync(this.context.filesDir + `/${Date.now()}.png`, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n            await fs.write(file.fd, imgBuffer)\n            // 关闭文档\n            await fs.close(file.fd)\n          } catch (e) {\n            let error: BusinessError = e as BusinessError;\n            hilog.error(0x0000, 'PdfPage', `Code: ${error.code}, message: ${error.message} `);\n          }\n        }\n      })\n      // 获取指定PdfPage区域的图片内容。\n      Button('getCustomPagePixelMap').onClick(async () => {\n        if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n          let page = this.pdfDocument.getPage(0);\n          let matrix = new pdfService.PdfMatrix();\n          matrix.x = 100;\n          matrix.y = 100;\n          matrix.width = 500;\n          matrix.height = 500;\n          matrix.rotate = 0;\n          let pixmap: image.PixelMap = page.getCustomPagePixelMap(matrix, false, false);\n          if (!pixmap) {\n            return;\n          }\n          const imgBuffer = await this.pixelMap2Buffer(pixmap);\n          try {\n            const file =\n              fs.openSync(this.context.filesDir + `/${Date.now()}.jpeg`, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n            await fs.write(file.fd, imgBuffer);\n            // 关闭文件\n            await fs.close(file.fd);\n          } catch (e) {\n            let error: BusinessError = e as BusinessError;\n            hilog.error(0x0000, 'PdfPage', `Code: ${error.code}, message: ${error.message} `);\n          }\n        }\n      })\n      // 获取指定PdfPage区域的图片内容\n      Button('getAreaPixelMap').onClick(async () => {\n        if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n          //获取对应的page\n          let page = this.pdfDocument.getPage(0);\n          let matrix = new pdfService.PdfMatrix();\n          //设置matrix来控制需要获取的区域\n          matrix.x = 100;\n          matrix.y = 100;\n          matrix.width = 500;\n          matrix.height = 500;\n          matrix.rotate = 0;\n          let pixmap: image.PixelMap = page.getAreaPixelMap(matrix, 400, 400, true, false);\n          if (!pixmap) {\n            return\n          }\n          const imgBuffer = await this.pixelMap2Buffer(pixmap)\n          try {\n            const file =\n              fs.openSync(this.context.filesDir + `/${Date.now()}.bmp`, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n            await fs.write(file.fd, imgBuffer)\n            // 关闭文件\n            await fs.close(file.fd);\n          } catch (e) {\n            let error: BusinessError = e as BusinessError;\n            hilog.error(0x0000, 'PdfPage', `Code: ${error.code}, message: ${error.message} `);\n          }\n        }\n      })\n      // 获取指定PdfPage区域的图片内容\n      Button('getAreaPixelMapWithOptions').onClick(async () => {\n        if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n          //获取对应page\n          let page = this.pdfDocument.getPage(0);\n          let matrix = new pdfService.PdfMatrix();\n          //设置matrix来控制需要获取的区域\n          matrix.x = 100;\n          matrix.y = 100;\n          matrix.width = 500;\n          matrix.height = 500;\n          matrix.rotate = 0;\n          //设置pixelmap是否黑白，背景是否透明等参数\n          let options = new pdfService.PixelOptions();\n          options.isGray = false;\n          options.drawAnnotations = true;\n          options.isTransparent = true;\n          let pixmap: image.PixelMap = page.getAreaPixelMapWithOptions(matrix, 400, 400, options);\n          if (!pixmap) {\n            return\n          }\n          const imgBuffer = await this.pixelMap2Buffer(pixmap)\n          try {\n            const file =\n              fs.openSync(this.context.filesDir + `/${Date.now()}.bmp`, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n            await fs.write(file.fd, imgBuffer)\n            // 关闭文件\n            await fs.close(file.fd);\n          } catch (e) {\n            let error: BusinessError = e as BusinessError;\n            hilog.error(0x0000, 'PdfPage', `Code: ${error.code}, message: ${error.message} `);\n          }\n        }\n      })\n    }\n  }\n}\n"
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