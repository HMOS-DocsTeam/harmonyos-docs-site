"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["901550"], {
558448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_pdfview_implements_pdf_pdfview_search_pdf_pdfview_search_md_fbc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-pdfview-implements-pdf-pdfview-search-pdf-pdfview-search-md-fbc.json
var site_docs_pdf_kit_guide_pdf_pdfview_implements_pdf_pdfview_search_pdf_pdfview_search_md_fbc_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-search/pdf-pdfview-search","title":"搜索关键字","description":"预览PDF文档时，可以对页面的关键词（英文字符不区分大小写）进行搜索并高亮显示，同时使用setSearchIndex方法高亮显示指定的搜索结果。","source":"@site/docs/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-search/pdf-pdfview-search.md","sourceDirName":"pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-search","slug":"/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-search/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-search/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"搜索关键字","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-pdfview-search","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设置PDF文档预览效果","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-preview-method/"},"next":{"title":"高亮显示PDF文档","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-highlight/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-pdfview-implements/pdf-pdfview-search/pdf-pdfview-search.md


const frontMatter = {
	title: '搜索关键字',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-pdfview-search',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '搜索关键字';

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
        id: "搜索关键字",
        children: "搜索关键字"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["预览PDF文档时，可以对页面的关键词（英文字符不区分大小写）进行搜索并高亮显示，同时使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#setsearchindex",
        children: "setSearchIndex"
      }), "方法高亮显示指定的搜索结果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#getsearchindex",
        children: "getSearchIndex"
      }), "方法获取当前高亮的索引，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#clearsearch",
        children: "clearSearch"
      }), "方法清除所有搜索结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(269372)/* ["default"] */.A) + "",
        width: "525",
        height: "330"
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
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#searchkey",
              children: "searchKey"
            }), "(text: string, listener: Callback<number>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "搜索文本并返回匹配的总数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#clearsearch",
              children: "clearSearch"
            }), "(): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除搜索文本的高亮，等价于搜索空字符串 。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#setsearchindex",
              children: "setSearchIndex"
            }), "(index: number): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置搜索匹配结果的索引，页面会跳转到索引对应搜索结果处。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#getsearchindex",
              children: "getSearchIndex"
            }), "(): number"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前命中搜索关键字匹配结果的索引，执行搜索接口后默认命中索引为0。"
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
        children: "在按钮【searchKey】里，调用searchKey方法，搜索指定关键字。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上一个、下一个搜索按钮跳转到对应的结果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在按钮【getSearchIndex】里，调用getSearchIndex方法，获取当前的搜索结果索引。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在按钮【clearSearch】里，调用clearSearch方法，清除搜索结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pdfService, PdfView, pdfViewManager } from '@kit.PDFKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  private controller: pdfViewManager.PdfController = new pdfViewManager.PdfController();\n  private context = this.getUIContext().getHostContext() as Context;\n  private loadResult: pdfService.ParseResult = pdfService.ParseResult.PARSE_ERROR_FORMAT;\n  private searchIndex = 0;\n  private charCount = 0;\n\n  aboutToAppear(): void {\n    // 确保沙箱目录有input.pdf文档\n    let filePath = this.context.filesDir + '/input.pdf';\n    (async () => {\n      this.loadResult = await this.controller.loadDocument(filePath);\n    })()\n  }\n\n  build() {\n    Column() {\n      Scroll() {\n        Row() {\n          // 搜索关键字\n          Button('searchKey').onClick(async () => {\n            if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n              this.controller.searchKey('C++', (index: number) => {\n                this.charCount = index;\n                hilog.info(0x0000, 'PdfPage', 'searchKey %{public}s!', index + '');\n              })\n            }\n          })\n            .width(100)\n          // 上一个\n          Button('setSearchPrevIndex').onClick(async () => {\n            if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n              if(this.searchIndex > 0) {\n                this.controller.setSearchIndex(--this.searchIndex);\n              }\n            }\n          })\n            .width(200)\n          // 下一个\n          Button('setSearchNextIndex').onClick(async () => {\n            if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n              if(this.searchIndex < this.charCount) {\n                this.controller.setSearchIndex(++this.searchIndex);\n              }\n            }\n          })\n            .width(200)\n          // 获取当前页索引\n          Button('getSearchIndex').onClick(async () => {\n            if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n              let curSearchIndex = this.controller.getSearchIndex();\n              hilog.info(0x0000, 'PdfPage', 'curSearchIndex %{public}s!', curSearchIndex + '');\n            }\n          })\n            .width(150)\n          // 清除搜索文本的高亮\n          Button('clearSearch').onClick(async () => {\n            if (this.loadResult === pdfService.ParseResult.PARSE_SUCCESS) {\n              this.controller.clearSearch();\n            }\n          })\n            .width(150)\n        }\n      }\n      .scrollable(ScrollDirection.Horizontal)\n\n      PdfView({\n        controller: this.controller,\n        pageFit: pdfService.PageFit.FIT_WIDTH,\n        showScroll: true\n      })\n        .id('pdfview_app_view')\n        .layoutWeight(1);\n    }\n  }\n}\n"
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
269372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479105-521d00f4821267b79245ced03a243336.jpg");

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