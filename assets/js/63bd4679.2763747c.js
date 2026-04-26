"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["35663"], {
694981(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_pdfview_implements_pdf_pdfview_switch_optimize_pdf_pdfview_switch_optimize_md_63b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-pdfview-implements-pdf-pdfview-switch-optimize-pdf-pdfview-switch-optimize-md-63b.json
var site_docs_pdf_kit_guide_pdf_pdfview_implements_pdf_pdfview_switch_optimize_pdf_pdfview_switch_optimize_md_63b_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-switch-optimize/pdf-pdfview-switch-optimize","title":"优化PDF文档切换体验","description":"场景介绍","source":"@site/docs/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-switch-optimize/pdf-pdfview-switch-optimize.md","sourceDirName":"pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-switch-optimize","slug":"/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-switch-optimize/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-switch-optimize/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"优化PDF文档切换体验","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-pdfview-switch-optimize","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"PDF缩略图转换为图片","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-page2img/"},"next":{"title":"PDF Kit可以移除具体页面的页眉页脚、水印、背景吗？","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-faq/pdf-faq-4/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-switch-optimize/pdf-pdfview-switch-optimize.md


const frontMatter = {
	title: '优化PDF文档切换体验',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-pdfview-switch-optimize',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '优化PDF文档切换体验';

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
        id: "优化pdf文档切换体验",
        children: "优化PDF文档切换体验"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用中进行多文档切换时，为了提供更加流畅和清晰的视觉体验，推荐结合状态管理来控制PdfView的渲染时机。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过引入加载状态，可以在文档加载过程中暂时隐藏预览组件并展示加载动画，待loadDocument异步加载完成且页面布局准备就绪后，再展示清晰的文档内容。这种方式能有效优化切换过程中的视觉跳变，提升交互质感。"
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
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#setpagefit",
              children: "setPageFit"
            }), "(pageFit: pdfService.PageFit): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置页面的适配模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "定义@State变量isLoading，用于标记文档的加载状态，并以此控制PdfView组件的挂载与显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将isLoading置为true，显示Loading界面；待异步加载成功后，再将isLoading置为false，展示PDF视图。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过调用loadDocument加载不同的文件路径，实现PDF文件的切换。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pdfService, pdfViewManager, PdfView } from '@kit.PDFKit'\nimport { fileIo } from '@kit.CoreFileKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@ohos.base';\n\nconst DOMAIN: number = 0x0000;\nconst TAG: string = 'SwitchDocumentDemo';\n\n@Entry\n@Component\nstruct Index {\n  private controller: pdfViewManager.PdfController = new pdfViewManager.PdfController();\n  private filePath1: string = '';\n  private filePath2: string = '';\n  private switchFlag: boolean = true; // true，加载pdf1；false，加载pdf2\n  @State isLoading: boolean = false;\n\n  private makeSureFileExist(filePath: string): void {\n    let fileName: string = filePath.split('/').pop() || '';\n    try {\n      let context = this.getUIContext().getHostContext() as Context;\n      let res = fileIo.accessSync(filePath);\n      if (!res) {\n        let content: Uint8Array = context.resourceManager.getRawFileContentSync(`rawfile/${fileName}`);\n        let fdSand =\n          fileIo.openSync(filePath, fileIo.OpenMode.WRITE_ONLY | fileIo.OpenMode.CREATE | fileIo.OpenMode.TRUNC);\n        fileIo.writeSync(fdSand.fd, content.buffer);\n        fileIo.closeSync(fdSand.fd);\n      }\n    } catch (e) {\n      let error: BusinessError = e as BusinessError;\n      hilog.error(DOMAIN, TAG, `Code: ${error.code}, message: ${error.message} `);\n    }\n  }\n\n  aboutToAppear(): void {\n    let context = this.getUIContext().getHostContext() as Context;\n    let dir: string = context.filesDir\n    // 确保沙箱目录内有pdf1.pdf、pdf2.pdf文档\n    this.filePath1 = dir + '/pdf1.pdf';\n    this.filePath2 = dir + '/pdf2.pdf';\n    this.makeSureFileExist(this.filePath1);\n    this.makeSureFileExist(this.filePath2);\n\n    (async () => {\n      let filePath: string = this.switchFlag ? this.filePath1 : this.filePath2;\n      this.isLoading = true;\n      let loadResult: pdfService.ParseResult = await this.controller.loadDocument(filePath);\n      this.isLoading = false;\n      if (loadResult !== pdfService.ParseResult.PARSE_SUCCESS) {\n        hilog.error(DOMAIN, TAG, 'Controller load PDF failed');\n        return;\n      }\n    })();\n  }\n\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      if (!this.isLoading) {\n        PdfView({\n          controller: this.controller,\n          pageFit: pdfService.PageFit.FIT_WIDTH,\n          showScroll: false\n        })\n          .width('100%')\n          .height('100%')\n      } else {\n        // 此处可自定义loading界面\n      }\n      Row() {\n        Button('SwitchDocument')\n          .onClick(async () => {\n            this.switchFlag = !this.switchFlag;\n            let filePath: string = this.switchFlag ? this.filePath1 : this.filePath2;\n            this.controller.releaseDocument();\n            this.isLoading = true;\n            let loadResult: pdfService.ParseResult = await this.controller.loadDocument(filePath);\n            this.isLoading = false;\n            if (loadResult !== pdfService.ParseResult.PARSE_SUCCESS) {\n              hilog.error(DOMAIN, TAG, 'Controller load PDF failed');\n              return;\n            }\n            this.controller.setPageFit(pdfService.PageFit.FIT_WIDTH);\n          })\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
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