"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["628940"], {
794926(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_pdfview_implements_pdf_pdfview_component_pdf_pdfview_component_md_259_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-pdfview-implements-pdf-pdfview-component-pdf-pdfview-component-md-259.json
var site_docs_pdf_kit_guide_pdf_pdfview_implements_pdf_pdfview_component_pdf_pdfview_component_md_259_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-component/pdf-pdfview-component","title":"预览PDF文档","description":"PDF Kit提供了丰富的PDF文档预览能力，比如：","source":"@site/docs/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-component/pdf-pdfview-component.md","sourceDirName":"pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-component","slug":"/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-component/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-component/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"预览PDF文档","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-pdfview-component","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"添加、删除背景","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-background/"},"next":{"title":"打开和保存PDF文档","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-open/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-component/pdf-pdfview-component.md


const frontMatter = {
	title: '预览PDF文档',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-pdfview-component',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '预览PDF文档';

const assets = {

};



const toc = [{
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "预览pdf文档",
        children: "预览PDF文档"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PDF Kit提供了丰富的PDF文档预览能力，比如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面跳转"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面缩放"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单双页显示"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面适配"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "滚动视图方式预览"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细说明及使用请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/pdf-api/pdf-arkts-conponent/pdf-arkts-pdfview-component/pdf-arkts-pdfview-component#pdfview",
        children: "PdfView"
      }), "组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导入相关模块。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "以下示例代码中以预览“input.pdf”文件名为例，此时需要确保在工程目录“src/main/resources/rawfile”里存在input.pdf文档，并且拷贝input.pdf文档到沙箱目录。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用loadDocument方法，加载PDF文档。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用PdfView预览组件，渲染显示。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pdfService, pdfViewManager, PdfView } from '@kit.PDFKit'\nimport { fileIo } from '@kit.CoreFileKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct Index {\n  private controller: pdfViewManager.PdfController = new pdfViewManager.PdfController();\n\n  aboutToAppear(): void {\n    let context = this.getUIContext().getHostContext() as Context;\n    let dir: string = context.filesDir\n    // 确保在工程目录src/main/resources/rawfile里存在input.pdf文档\n    let filePath: string = dir + '/input.pdf';\n    try {\n      let res = fileIo.accessSync(filePath);\n      if (!res) {\n        let content: Uint8Array = context.resourceManager.getRawFileContentSync('rawfile/input.pdf');\n        let fdSand =\n          fileIo.openSync(filePath, fileIo.OpenMode.WRITE_ONLY | fileIo.OpenMode.CREATE | fileIo.OpenMode.TRUNC);\n        fileIo.writeSync(fdSand.fd, content.buffer);\n        fileIo.closeSync(fdSand.fd);\n      }\n    } catch (e) {\n      let error: BusinessError = e as BusinessError;\n      hilog.error(0x0000, 'IndexPage', `Code: ${error.code}, message: ${error.message} `);\n    }\n    (async () => {\n      // 该监听方法只能在文档加载前调用一次\n      this.controller.registerPageCountChangedListener((pageCount: number) => {\n        hilog.info(0x0000, 'registerPageCountChanged-', pageCount.toString());\n      });\n      let loadResult1: pdfService.ParseResult = await this.controller.loadDocument(filePath);\n      // 注意：这里刚加载文档，请不要在这里立即设置PDF文档的预览方式\n    })()\n  }\n\n  build() {\n    Row() {\n      PdfView({\n        controller: this.controller,\n        pageFit: pdfService.PageFit.FIT_WIDTH,\n        showScroll: true\n      })\n        .id('pdfview_app_view')\n        .layoutWeight(1);\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
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