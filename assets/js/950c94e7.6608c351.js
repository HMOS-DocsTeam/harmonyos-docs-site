"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["10718"], {
793125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_pdfview_implements_pdf_pdfview_preview_method_pdf_pdfview_preview_method_md_950_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-pdfview-implements-pdf-pdfview-preview-method-pdf-pdfview-preview-method-md-950.json
var site_docs_pdf_kit_guide_pdf_pdfview_implements_pdf_pdfview_preview_method_pdf_pdfview_preview_method_md_950_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-preview-method/pdf-pdfview-preview-method","title":"设置PDF文档预览效果","description":"pdfViewManager为PDF文档提供了丰富的预览特性。","source":"@site/docs/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-preview-method/pdf-pdfview-preview-method.md","sourceDirName":"pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-preview-method","slug":"/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-preview-method/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-preview-method/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"设置PDF文档预览效果","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-pdfview-preview-method","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"打开和保存PDF文档","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-open/"},"next":{"title":"搜索关键字","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-search/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-preview-method/pdf-pdfview-preview-method.md


const frontMatter = {
	title: '设置PDF文档预览效果',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-pdfview-preview-method',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '设置PDF文档预览效果';

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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "设置pdf文档预览效果",
        children: "设置PDF文档预览效果"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pdfViewManager为PDF文档提供了丰富的预览特性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "单双页布局，是否连续滚动和页面适配方式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面跳转，如上一页，下一页，跳转到指定页。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面放大、缩小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), "：提供了双页预览布局，页面宽度适配和连续滚动的预览方式"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(481856)/* ["default"] */.A) + "",
        width: "525",
        height: "396"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#setpagelayout",
              children: "setPageLayout"
            }), "(columnCount: pdfService.PageLayout): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置页面布局模式。其中“columnCount”取值如下：  - 1：单页面  - 2：双页面"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#setpagecontinuous",
              children: "setPageContinuous"
            }), "(isContinuous: boolean): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置页面滚动是否连续排列。"
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
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#gotopage",
              children: "goToPage"
            }), "(pageIndex: number): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳转到指定页。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#setpagezoom",
              children: "setPageZoom"
            }), "(zoom: number): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置视图的缩放比例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "先加载PDF文档。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用PdfView预览组件，渲染显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在按钮【setPreviewMode】里，调用setPageLayout、setPageContinuous等方法，设置文档预览效果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在按钮【goTopage】里，调用goToPage方法，设置页面跳转。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在按钮【zoomPage2】里，调用setPageZoom方法，将页面放大2倍。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pdfService, PdfView, pdfViewManager } from '@kit.PDFKit';\n\n@Entry\n@Component\nstruct PdfPage {\n  private controller: pdfViewManager.PdfController = new pdfViewManager.PdfController();\n  private context = this.getUIContext().getHostContext() as Context;\n  private loadResult: pdfService.ParseResult = pdfService.ParseResult.PARSE_ERROR_FORMAT;\n\n  aboutToAppear(): void {\n    // 确保沙箱目录有input.pdf文档\n    let filePath = this.context.filesDir + '/input.pdf';\n    (async () => {\n      this.loadResult = await this.controller.loadDocument(filePath);\n      // 注意：这里刚加载文档，请不要在这里立即设置PDF文档的预览方法。\n    })()\n  }\n\n  build() {\n    Column() {\n      Row() {\n        // 设置预览方式\n        Button('setPreviewMode').onClick(() => {\n          if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n            // 单页布局\n            this.controller.setPageLayout(pdfService.PageLayout.LAYOUT_SINGLE);\n            // 是否连续滚动预览\n            this.controller.setPageContinuous(true);\n            // 适配页的预览方式\n            this.controller.setPageFit(pdfService.PageFit.FIT_PAGE);\n          }\n        })\n        // 跳转到第11页\n        Button('goTopage').onClick(() => {\n          if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n            this.controller.goToPage(10);\n          }\n        })\n        // 页面放大2倍\n        Button('zoomPage2').onClick(() => {\n          if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n            this.controller.setPageZoom(2);\n          }\n        })\n      }\n\n      PdfView({\n        controller: this.controller,\n        pageFit: pdfService.PageFit.FIT_WIDTH,\n        showScroll: true\n      })\n        .id('pdfview_app_view')\n        .layoutWeight(1);\n    }\n  }\n}\n"
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
481856(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959104-d162e27ad68c2bb3a9eeac61ce3ec3ef.jpg");

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