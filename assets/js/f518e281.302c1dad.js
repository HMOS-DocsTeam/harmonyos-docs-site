"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["966256"], {
333543(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_pdfservice_implements_pdf_add_delete_page_pdf_add_delete_page_md_f51_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-pdfservice-implements-pdf-add-delete-page-pdf-add-delete-page-md-f51.json
var site_docs_pdf_kit_guide_pdf_pdfservice_implements_pdf_add_delete_page_pdf_add_delete_page_md_f51_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-pdfservice-implements/pdf-add-delete-page/pdf-add-delete-page","title":"添加、删除PDF页","description":"在PDF文档中添加或删除页面，包括：","source":"@site/docs/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-delete-page/pdf-add-delete-page.md","sourceDirName":"pdf-kit-guide/pdf-pdfservice-implements/pdf-add-delete-page","slug":"/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-delete-page/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-delete-page/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"添加、删除PDF页","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-add-delete-page","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"打开和保存PDF文档","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-open-document/"},"next":{"title":"PDF页面文本、图片和批注","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-txt-img-annot/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-delete-page/pdf-add-delete-page.md


const frontMatter = {
	title: '添加、删除PDF页',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-add-delete-page',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '添加、删除PDF页';

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
        id: "添加删除pdf页",
        children: "添加、删除PDF页"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在PDF文档中添加或删除页面，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "添加单个、多个空白页到PDF文档。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "删除PDF文档中单个、多个指定页。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将其他PDF文档页添加到本PDF文档。"
      }), "\n"]
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
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#insertblankpage",
              children: "insertBlankPage"
            }), "(index: number, width: number, height: number): PdfPage"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在指定位置插入空白PDF页。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#getpage",
              children: "getPage"
            }), "(index: number): PdfPage"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定页的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#insertpagefromdocument",
              children: "insertPageFromDocument"
            }), "(document: PdfDocument, fromIndex: number, pageCount: number, index: number): PdfPage"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将其他文档的页添加到当前文档。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#deletepage",
              children: "deletePage"
            }), "(index: number, count: number): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定的PDF页。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用loadDocument方法，加载PDF文档。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用getPage方法获取当前页，用于获取页面宽高。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用insertBlankPage和insertPageFromDocument方法实现如下功能。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "插入单个空白页。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "插入多个空白页。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "将input2.pdf文档的索引1、2、3页插入到input.pdf索引0的位置，并另存文档。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用deletePage方法删除单个或多个索引页。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pdfService } from '@kit.PDFKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct PdfPage {\n  private pdfDocument: pdfService.PdfDocument = new pdfService.PdfDocument();\n  private context = this.getUIContext().getHostContext() as Context;\n\n  aboutToAppear(): void {\n    // 确保沙箱目录有input.pdf文档\n    let filePath = this.context.filesDir + '/input.pdf';\n    this.pdfDocument.loadDocument(filePath);\n  }\n\n  build() {\n    Column() {\n      // 插入单个空白页\n      Button('insertBlankPage').onClick(async () => {\n        let page: pdfService.PdfPage = this.pdfDocument.getPage(0);\n        let page2: pdfService.PdfPage = this.pdfDocument.insertBlankPage(2, page.getWidth(), page.getHeight());\n        let outPdfPath = this.context.filesDir + '/testInsertBlankPage.pdf';\n        let result = this.pdfDocument.saveDocument(outPdfPath);\n        hilog.info(0x0000, 'PdfPage', 'insertBlankPage %{public}s!', result ? 'success' : 'fail');\n      })\n      // 插入多个空白页\n      Button('insertSomeBlankPage').onClick(async () => {\n        let page: pdfService.PdfPage = this.pdfDocument.getPage(0);\n        for (let i = 0; i < 3; i++) {\n          this.pdfDocument.insertBlankPage(2, page.getWidth(), page.getHeight());\n        }\n        let outPdfPath = this.context.filesDir + '/testInsertSomeBlankPage.pdf';\n        let result = this.pdfDocument.saveDocument(outPdfPath);\n        hilog.info(0x0000, 'PdfPage', 'insertSomeBlankPage %{public}s!', result ? 'success' : 'fail');\n      })\n      // 将input2.pdf文档的索引1,2,3页插入到input.pdf索引0的位置，并另存文档\n      Button('insertPageFromDocument').onClick(async () => {\n        let pdfDoc: pdfService.PdfDocument = new pdfService.PdfDocument();\n        // 确保该沙箱目录下有 input2.pdf文档\n        pdfDoc.loadDocument(this.context.filesDir + '/input2.pdf');\n        this.pdfDocument.insertPageFromDocument(pdfDoc, 1, 3, 0);\n        let outPdfPath = this.context.filesDir + '/testInsertPageFromDocument.pdf';\n        let result = this.pdfDocument.saveDocument(outPdfPath);\n        hilog.info(0x0000, 'PdfPage', 'insertPageFromDocument %{public}s!', result ? 'success' : 'fail');\n      })\n      // 删除单个或多个索引页\n      Button('deletePage').onClick(async () => {\n        this.pdfDocument.deletePage(2, 2);\n        let outPdfPath = this.context.filesDir + '/testDeletePage.pdf';\n        let result = this.pdfDocument.saveDocument(outPdfPath);\n        hilog.info(0x0000, 'PdfPage', 'deletePage %{public}s!', result ? 'success' : 'fail');\n      })\n    }\n  }\n}\n"
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