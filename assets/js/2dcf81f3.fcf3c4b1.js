"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["224623"], {
566271(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_pdfview_implements_pdf_pdfview_open_pdf_pdfview_open_md_2dc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-pdfview-implements-pdf-pdfview-open-pdf-pdfview-open-md-2dc.json
var site_docs_pdf_kit_guide_pdf_pdfview_implements_pdf_pdfview_open_pdf_pdfview_open_md_2dc_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-open/pdf-pdfview-open","title":"打开和保存PDF文档","description":"场景介绍","source":"@site/docs/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-open/pdf-pdfview-open.md","sourceDirName":"pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-open","slug":"/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-open/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-open/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"打开和保存PDF文档","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-pdfview-open","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"预览PDF文档","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-component/"},"next":{"title":"设置PDF文档预览效果","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-preview-method/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-open/pdf-pdfview-open.md


const frontMatter = {
	title: '打开和保存PDF文档',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-pdfview-open',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '打开和保存PDF文档';

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
        id: "打开和保存pdf文档",
        children: "打开和保存PDF文档"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过加载本地路径的PDF文档，实现打开PDF文档的预览功能。当PDF文档做了批注等相关的信息时，可以使用保存功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["和pdfService的打开和保存能力相同，具体区别查看pdfService的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pdf-kit-guide/pdf-pdfservice-implements/pdf-open-document",
        children: "打开和保存PDF文档"
      }), "的场景介绍。"]
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
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#loaddocument",
              children: "loadDocument"
            }), "(path: string, password?: string, initPageIndex?: number, onProgress?: Callback<number>): Promise<pdfService.ParseResult>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载PDF文档。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#savedocument",
              children: "saveDocument"
            }), "(path: string, onProgress?: Callback<number>): Promise<number>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保存PDF文档，使用Promise异步回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在aboutToAppear函数里面加载PDF文档。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用PdfView预览组件，渲染显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在【savePdfDocument】按钮中调用saveDocument方法另存PDF文档。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pdfService, PdfView, pdfViewManager } from '@kit.PDFKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct PdfPage {\n  private controller: pdfViewManager.PdfController = new pdfViewManager.PdfController();\n  private context = this.getUIContext().getHostContext() as Context;\n  private loadResult: pdfService.ParseResult = pdfService.ParseResult.PARSE_ERROR_FORMAT;\n\n  aboutToAppear(): void {\n    // 确保沙箱目录有input.pdf文档\n    let filePath = this.context.filesDir + '/input.pdf';\n    (async () => {\n      this.loadResult = await this.controller.loadDocument(filePath);\n    })()\n  }\n\n  build() {\n    Column() {\n      // 保存Pdf文档\n      Button('savePdfDocument').onClick(async () => {\n        if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n          let savePath = this.context.filesDir + '/savePdfDocument.pdf';\n          let result = await this.controller.saveDocument(savePath);\n          hilog.info(0x0000, 'PdfPage', 'savePdfDocument %{public}s!', result ? 'success' : 'fail');\n        }\n      })\n      PdfView({\n        controller: this.controller,\n        pageFit: pdfService.PageFit.FIT_WIDTH,\n        showScroll: true\n      })\n        .id('pdfview_app_view')\n        .layoutWeight(1);\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
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