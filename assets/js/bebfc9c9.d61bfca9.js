"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["6473"], {
897711(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_pdfservice_implements_pdf_add_txt_img_annot_pdf_add_txt_img_annot_md_beb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-pdfservice-implements-pdf-add-txt-img-annot-pdf-add-txt-img-annot-md-beb.json
var site_docs_pdf_kit_guide_pdf_pdfservice_implements_pdf_add_txt_img_annot_pdf_add_txt_img_annot_md_beb_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-pdfservice-implements/pdf-add-txt-img-annot/pdf-add-txt-img-annot","title":"PDF页面文本、图片和批注","description":"支持编辑PDF页面内容，包括：","source":"@site/docs/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-txt-img-annot/pdf-add-txt-img-annot.md","sourceDirName":"pdf-kit-guide/pdf-pdfservice-implements/pdf-add-txt-img-annot","slug":"/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-txt-img-annot/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-txt-img-annot/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"PDF页面文本、图片和批注","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-add-txt-img-annot","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"添加、删除PDF页","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-delete-page/"},"next":{"title":"转换指定页面或指定区域为图片","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-get-img/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-txt-img-annot/pdf-add-txt-img-annot.md


const frontMatter = {
	title: 'PDF页面文本、图片和批注',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-add-txt-img-annot',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'PDF页面文本、图片和批注';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "添加文本和图片",
  "id": "添加文本和图片",
  "level": 2
}, {
  "value": "添加文本批注",
  "id": "添加文本批注",
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
        id: "pdf页面文本图片和批注",
        children: "PDF页面文本、图片和批注"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持编辑PDF页面内容，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加、删除文本。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加、删除图片。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加、修改、删除批注。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过索引指定PDF页面添加批注，并对批注在页面中的位置，字体、批注边框等设置，批注提供了多种风格样式，包括：文本批注", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#textannotationinfo",
            children: "TextAnnotationInfo"
          }), "、下划线批注", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#lineannotationinfo",
            children: "LineAnnotationInfo"
          }), "、高亮批注", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#highlightannotationinfo",
            children: "HighlightAnnotationInfo"
          }), "、删除线批注", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#strikethroughannotationinfo",
            children: "StrikethroughAnnotationInfo"
          }), "等共13种。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(877049)/* ["default"] */.A) + "",
        width: "525",
        height: "270"
      })
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
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#addtextobject",
              children: "addTextObject"
            }), "(text: string, x: number, y: number, style: TextStyle): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加文本内容，只可按行添加。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#addimageobject",
              children: "addImageObject"
            }), "(path: string, x: number, y: number, width: number, height: number): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在PDF文档的页面中添加图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#deletegraphicsobject",
              children: "deleteGraphicsObject"
            }), "(object: GraphicsObject): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定的GraphicsObject。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#addannotation",
              children: "addAnnotation"
            }), "(annotationInfo: PdfAnnotationInfo): PdfAnnotation"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前页添加批注。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加文本和图片",
      children: "添加文本和图片"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用loadDocument方法，加载PDF文档。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在【addText】按钮中调用addTextObject的方法插入文本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在【delText】按钮中调用deleteGraphicsObject方法来删除相应的页面文本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在【addImage】按钮中调用addImageObject的方法插入图片。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pdfService } from '@kit.PDFKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { Font } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct PdfPage {\n  private pdfDocument: pdfService.PdfDocument = new pdfService.PdfDocument();\n  private context = this.getUIContext().getHostContext() as Context;\n\n  aboutToAppear(): void {\n    // 确保resfile目录有input.pdf文档\n    let filePath = this.context.resourceDir + '/input.pdf';\n    this.pdfDocument.loadDocument(filePath);\n  }\n\n  build() {\n    Column() {\n      // 添加文本\n      Button('addText').onClick(async () => {\n        let page: pdfService.PdfPage = this.pdfDocument.getPage(0);\n        let str = 'This is add text object!';\n        let fontInfo = new pdfService.FontInfo();\n        // 确保字体路径存在\n        let font: Font = new Font()\n        fontInfo.fontPath = font.getFontByName('HarmonyOS Sans')?.path;\n        fontInfo.fontName = '';\n        let style: pdfService.TextStyle = { textColor: 0x000000, textSize: 30, fontInfo: fontInfo };\n        page.addTextObject(str, 10, 10, style);\n        let outPdfPath = this.context.filesDir + '/testAddText.pdf';\n        let result = this.pdfDocument.saveDocument(outPdfPath);\n        hilog.info(0x0000, 'PdfPage', 'addText %{public}s!', result ? 'success' : 'fail');\n      })\n      // 删除文本\n      Button('delText').onClick(async () => {\n        let page: pdfService.PdfPage = this.pdfDocument.getPage(0);\n        let graphicsObjects = page.getGraphicsObjects();\n        // 找到第一个要删除的文本\n        let index = graphicsObjects.findIndex(item => item.type === pdfService.GraphicsObjectType.OBJECT_TEXT);\n        if (index > -1) {\n          // 删除第一个文本\n          page.deleteGraphicsObject(graphicsObjects[index]);\n        }\n        let outPdfPath = this.context.filesDir + '/testDelText.pdf';\n        let result = this.pdfDocument.saveDocument(outPdfPath);\n        hilog.info(0x0000, 'PdfPage', 'delText %{public}s!', result ? 'success' : 'fail');\n      })\n      // 添加图片\n      Button('addImage').onClick(async () => {\n        let page: pdfService.PdfPage = this.pdfDocument.getPage(0);\n        // 插入图片，确保resfile目录有img.jpg图片\n        let imagePath = this.context.resourceDir + '/img.jpg';\n        page.addImageObject(imagePath, 100, 100, 100, 120);\n        let outPdfPath = this.context.filesDir + '/testAddImage.pdf';\n        let result = this.pdfDocument.saveDocument(outPdfPath);\n        hilog.info(0x0000, 'PdfPage', 'addImage %{public}s!', result ? 'success' : 'fail');\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加文本批注",
      children: "添加文本批注"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用loadDocument方法，加载PDF文档。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用getPage方法获取指定页。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实例化TextAnnotationInfo文本批注，并设置相关属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用addAnnotation或setAnnotation方法添加或修改批注。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用removeAnnotation方法删除批注。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pdfService } from '@kit.PDFKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct PdfPage {\n  private pdfDocument: pdfService.PdfDocument = new pdfService.PdfDocument();\n  private context = this.getUIContext().getHostContext() as Context;\n\n  build() {\n    Column() {\n      // 添加批注\n      Button('addTextAnnotation').onClick(async () => {\n        // 确保沙箱目录有input.pdf文档\n        let filePath = this.context.filesDir + '/input.pdf';\n        this.pdfDocument.loadDocument(filePath);\n        let page: pdfService.PdfPage = this.pdfDocument.getPage(0);\n        let aInfo = new pdfService.TextAnnotationInfo();\n        aInfo.iconName = 'Document';\n        aInfo.content = 'this is a content';\n        aInfo.subject = 'Annotation';\n        aInfo.title = 'this is a title';\n        aInfo.state = pdfService.TextAnnotationState.MARKED;\n        aInfo.x = 200;\n        aInfo.y = 200;\n        aInfo.color = 0xf9b1b1;\n        aInfo.flag = pdfService.AnnotationFlag.PRINTED;\n        let annotation: pdfService.PdfAnnotation = page.addAnnotation(aInfo);\n        let outPdfPath = this.context.filesDir + '/testAddTextAnnotation.pdf';\n        let result = this.pdfDocument.saveDocument(outPdfPath);\n        this.pdfDocument.releaseDocument();\n        hilog.info(0x0000, 'PdfPage', 'addTextAnnotation %{public}s!', result ? 'success' : 'fail');\n      })\n      // 修改批注\n      Button('setAnnotation').onClick(async () => {\n        let filePath = this.context.filesDir + '/testAddTextAnnotation.pdf';\n        let result = this.pdfDocument.loadDocument(filePath);\n        if (result === pdfService.ParseResult.PARSE_SUCCESS) {\n          let page: pdfService.PdfPage = this.pdfDocument.getPage(0);\n          let annotations = page.getAnnotations();\n          if (annotations.length > 0 && annotations[0].type === pdfService.AnnotationType.TEXT) {\n            let newAnno = annotations[0];\n            page.removeAnnotation(newAnno);\n            let annotation = page.addAnnotation(newAnno);\n            let newInfo = new pdfService.TextAnnotationInfo();\n            newInfo.title = \"new Title\";\n            newInfo.content = \"new Info\";\n            newInfo.state = pdfService.TextAnnotationState.MARKED;\n            newInfo.x = 100;\n            newInfo.y = 100;\n            page.setAnnotation(annotation, newInfo);\n            let outPdfPath = this.context.filesDir + '/testSetAnnotation.pdf';\n            let result = this.pdfDocument.saveDocument(outPdfPath);\n            this.pdfDocument.releaseDocument();\n            hilog.info(0x0000, 'PdfPage', 'setAnnotation %{public}s!', result ? 'success' : 'fail');\n          }\n        }\n      })\n      // 删除批注\n      Button('removeAnnotation').onClick(async () => {\n        let filePath = this.context.filesDir + '/testAddTextAnnotation.pdf';\n        let result = this.pdfDocument.loadDocument(filePath);\n        if (result === pdfService.ParseResult.PARSE_SUCCESS) {\n          let page: pdfService.PdfPage = this.pdfDocument.getPage(0);\n          let annotations = page.getAnnotations();\n          if (annotations.length > 0 && annotations[0].type === pdfService.AnnotationType.TEXT) {\n            page.removeAnnotation(annotations[0]);\n            let outPdfPath = this.context.filesDir + '/testRemoveAnnotation.pdf';\n            let result = this.pdfDocument.saveDocument(outPdfPath);\n            this.pdfDocument.releaseDocument();\n            hilog.info(0x0000, 'PdfPage', 'removeAnnotation %{public}s!', result ? 'success' : 'fail');\n          }\n        }\n      })\n    }\n  }\n}\n"
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
877049(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439147-1481f1463b8f7a081d3af3a31d0c5ef8.png");

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