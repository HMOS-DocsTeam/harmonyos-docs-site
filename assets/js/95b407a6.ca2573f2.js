"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["142150"], {
5761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_pdfservice_implements_pdf_doc_to_imgs_pdf_convert_img_pdf_convert_img_md_95b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-pdfservice-implements-pdf-doc-to-imgs-pdf-convert-img-pdf-convert-img-md-95b.json
var site_docs_pdf_kit_guide_pdf_pdfservice_implements_pdf_doc_to_imgs_pdf_convert_img_pdf_convert_img_md_95b_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-convert-img/pdf-convert-img","title":"转换整个PDF文档为图片","description":"场景介绍","source":"@site/docs/pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-convert-img/pdf-convert-img.md","sourceDirName":"pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-convert-img","slug":"/pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-convert-img/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-convert-img/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"转换整个PDF文档为图片","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-convert-img","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"转换指定页面或指定区域为图片","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-get-img/"},"next":{"title":"判断PDF文档是否加密及删除加密","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-isencrypt-removesecurity/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-convert-img/pdf-convert-img.md


const frontMatter = {
	title: '转换整个PDF文档为图片',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-convert-img',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '转换整个PDF文档为图片';

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
        id: "转换整个pdf文档为图片",
        children: "转换整个PDF文档为图片"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将整个PDF文档的页面转换为图片，每页为一张图片，并且所有图片存放在指定的同一个文件夹下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持的图片格式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#imageformat",
        children: "ImageFormat"
      }), "。"]
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
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#converttoimage",
              children: "convertToImage"
            }), "(path: string, format: ImageFormat, onProgress?: (progress: number) => number): boolean"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "转换PDF文档为图片。"
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
        children: "设置要输出图片的文件夹，调用convertToImage方法转化PDF文档所有页面为图片。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileIo as fs } from '@kit.CoreFileKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { pdfService } from '@kit.PDFKit';\n\n@Entry\n@Component\nstruct PdfPage {\n  private pdfDocument: pdfService.PdfDocument = new pdfService.PdfDocument();\n  private context = this.getUIContext().getHostContext() as Context;\n  private loadResult: pdfService.ParseResult = pdfService.ParseResult.PARSE_ERROR_FORMAT;\n\n  aboutToAppear(): void {\n    // 确保沙箱目录有input.pdf文档\n    let filePath = this.context.filesDir + '/input.pdf';\n    this.loadResult = this.pdfDocument.loadDocument(filePath);\n  }\n\n  build() {\n    Column() {\n      // 获取为图片并保存到应用沙箱\n      Button('convertToImage').onClick(async () => {\n        if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n          let outputPath = this.getUIContext().getHostContext()?.filesDir + '/output/';\n          fs.mkdir(outputPath);\n          // 将所有的页面转化为png图片，并存储在output文件夹里，确保output文件夹目录存在\n          let res = this.pdfDocument.convertToImage(outputPath, pdfService.ImageFormat.PNG);\n          hilog.info(0x0000, 'PdfPage', 'convertToImage %{public}s!', res ? 'success' : 'fail');\n        }\n      })\n    }\n  }\n}\n"
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