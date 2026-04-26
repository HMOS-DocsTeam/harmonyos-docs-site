"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["528278"], {
718866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_pdfservice_implements_pdf_open_document_pdf_open_document_md_282_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-pdfservice-implements-pdf-open-document-pdf-open-document-md-282.json
var site_docs_pdf_kit_guide_pdf_pdfservice_implements_pdf_open_document_pdf_open_document_md_282_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-pdfservice-implements/pdf-open-document/pdf-open-document","title":"打开和保存PDF文档","description":"对PDF文档添加内容、页眉页脚、水印、背景图片或书签等操作前，需要打开文档，并且在文档操作完成后，保存PDF文档。","source":"@site/docs/pdf-kit-guide/pdf-pdfservice-implements/pdf-open-document/pdf-open-document.md","sourceDirName":"pdf-kit-guide/pdf-pdfservice-implements/pdf-open-document","slug":"/pdf-kit-guide/pdf-pdfservice-implements/pdf-open-document/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-open-document/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"打开和保存PDF文档","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-open-document","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"PDF Kit简介","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-introduction/"},"next":{"title":"添加、删除PDF页","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-delete-page/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-pdfservice-implements/pdf-open-document/pdf-open-document.md


const frontMatter = {
	title: '打开和保存PDF文档',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-open-document',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '打开和保存PDF文档';

const assets = {

};



const toc = [{
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "打开和保存pdf文档",
        children: "打开和保存PDF文档"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对PDF文档", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-txt-img-annot",
        children: "添加内容"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-headerfooter",
        children: "页眉页脚"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-watermark",
        children: "水印"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-background",
        children: "背景图片"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-bookmark",
        children: "书签"
      }), "等操作前，需要打开文档，并且在文档操作完成后，保存PDF文档。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pdfService和PdfView都可实现打开和保存文档，使用场景上有如下区别："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要对PDF文档做相关的编辑和操作，建议使用pdfService的能力打开和保存文档。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要预览、搜索关键字、监听PDF文档回调和批注等操作，推荐使用PdfView打开。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#loaddocument",
              children: "loadDocument"
            }), "(path: string, password?: string, onProgress?: (progress: number) => number): ParseResult"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载指定文档路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#savedocument",
              children: "saveDocument"
            }), "(path: string, onProgress?: (progress: number) => number): boolean"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存文档。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用loadDocument方法，加载PDF文档。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在【Save As】和【Save】两个按钮中调用saveDocument方法，分别实现了另存为PDF文档和保存覆盖源PDF文档的两种方式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pdfService } from '@kit.PDFKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct PdfPage {\n  private pdfDocument: pdfService.PdfDocument = new pdfService.PdfDocument();\n  private context = this.getUIContext().getHostContext() as Context;\n  private filePath = '';\n  @State saveEnable: boolean = false;\n\n  aboutToAppear(): void {\n    this.filePath = this.context.filesDir + '/input.pdf';\n    try {\n      let res = fileIo.accessSync(this.filePath);\n      if(!res) {\n        // 确保在工程目录src/main/resources/rawfile里有input.pdf文档\n        let content: Uint8Array = this.context.resourceManager.getRawFileContentSync('rawfile/input.pdf');\n        let fdSand =\n          fileIo.openSync(this.filePath, fileIo.OpenMode.WRITE_ONLY | fileIo.OpenMode.CREATE | fileIo.OpenMode.TRUNC);\n        fileIo.writeSync(fdSand.fd, content.buffer);\n        fileIo.closeSync(fdSand.fd);\n      }\n      this.pdfDocument.loadDocument(this.filePath);\n    } catch (e) {\n      let error: BusinessError = e as BusinessError;\n      hilog.error(0x0000, 'PdfPage', `Failed to loadDocument. Code: ${error.code}, message: ${error.message} `);\n    }\n  }\n\n  build() {\n    Column() {\n      // 另存为一份PDF文档\n      Button('Save As').onClick(() => {\n        // 可以对PDF文档添加页眉页脚，水印，背景等一些内容，然后另存文档\n        let outPdfPath = this.context.filesDir + '/testSaveAsPdf.pdf';\n        let result = this.pdfDocument.saveDocument(outPdfPath);\n        this.saveEnable = true;\n        hilog.info(0x0000, 'PdfPage', 'saveAsPdf %{public}s!', result ? 'success' : 'fail');\n      })\n      // 保存覆盖源PDF文档\n      Button('Save').enabled(this.saveEnable).onClick(() => {\n        // 这里可以对PDF文档添加内容、页眉页脚、水印、背景等一些内容，然后保存文档\n        let tempDir = this.context.tempDir;\n        let tempFilePath = tempDir + `/temp${Math.random()}.pdf`;\n        try {\n          fileIo.copyFileSync(this.filePath, tempFilePath);\n        } catch (e) {\n          let error: BusinessError = e as BusinessError;\n          hilog.error(0x0000, 'PdfPage', `Failed to copyFileSync. Code: ${error.code}, message: ${error.message} `);\n        }\n        let pdfDocument: pdfService.PdfDocument = new pdfService.PdfDocument();\n        // 加载临时文档\n        let loadResult = pdfDocument.loadDocument(tempFilePath, '');\n        if (loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n          let result = pdfDocument.saveDocument(this.filePath);\n          hilog.info(0x0000, 'PdfPage', 'savePdf %{public}s!', result ? 'success' : 'fail');\n        }\n      })\n    }\n  }\n}\n"
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