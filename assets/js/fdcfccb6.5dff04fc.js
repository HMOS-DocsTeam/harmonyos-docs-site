"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["611549"], {
937745(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_pdfservice_implements_pdf_add_bookmark_pdf_add_bookmark_md_fdc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-pdfservice-implements-pdf-add-bookmark-pdf-add-bookmark-md-fdc.json
var site_docs_pdf_kit_guide_pdf_pdfservice_implements_pdf_add_bookmark_pdf_add_bookmark_md_fdc_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-pdfservice-implements/pdf-add-bookmark/pdf-add-bookmark","title":"添加、删除书签","description":"PDF Kit支持添加和删除PDF文档书签。","source":"@site/docs/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-bookmark/pdf-add-bookmark.md","sourceDirName":"pdf-kit-guide/pdf-pdfservice-implements/pdf-add-bookmark","slug":"/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-bookmark/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-bookmark/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"添加、删除书签","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-add-bookmark","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"判断PDF文档是否加密及删除加密","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-isencrypt-removesecurity/"},"next":{"title":"添加、删除页眉页脚","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-headerfooter/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-bookmark/pdf-add-bookmark.md


const frontMatter = {
	title: '添加、删除书签',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-add-bookmark',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '添加、删除书签';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "添加删除书签",
        children: "添加、删除书签"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PDF Kit支持添加和删除PDF文档书签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加书签时，可设置标题、颜色，是否粗体、斜体、跳转信息等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(792474)/* ["default"] */.A) + "",
        width: "707",
        height: "253"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#createbookmark",
              children: "createBookmark"
            }), "(): Bookmark"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建PDF文档书签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#getrootbookmark",
              children: "getRootBookmark"
            }), "(): Bookmark"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取PDF文档第一个根书签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#insertbookmark",
              children: "insertBookmark"
            }), "(bookmark: Bookmark, parent: Bookmark, position: number): boolean"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "插入PDF文档书签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#setbookmarkinfo",
              children: "setBookmarkInfo"
            }), "(info: BookmarkInfo): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置书签信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#removebookmark",
              children: "removeBookmark"
            }), "(bookmark: Bookmark): boolean"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除PDF文档书签。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#setdestinfo",
              children: "setDestInfo"
            }), "(info: DestInfo): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置书签的跳转信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#getbookmarkinfo",
              children: "getBookmarkInfo"
            }), "(): BookmarkInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取书签信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加书签"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用loadDocument方法，加载PDF文档。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用createBookmark方法，创建书签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用setDestInfo方法，设置书签的跳转信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用getBookmarkInfo方法，获取书签信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用setBookmarkInfo方法，设置书签内容及样式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置保存文档沙箱路径并保存"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "删除书签"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用loadDocument方法，加载PDF文档。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用getRootBookmark方法，获取文档的第一个根书签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用removeBookmark方法，删除书签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置保存文档沙箱路径并保存"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pdfService } from '@kit.PDFKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct PdfPage {\n  private pdfDocument: pdfService.PdfDocument = new pdfService.PdfDocument();\n  private context = this.getUIContext().getHostContext() as Context;\n\n  build() {\n    Column() {\n      // 添加书签\n      Button('addBookmark').onClick(async () => {\n        // 确保沙箱目录有input.pdf文档\n        let filePath = this.context.filesDir + '/input.pdf';\n        this.pdfDocument.loadDocument(filePath);\n        // 创建书签\n        let mark1: pdfService.Bookmark = this.pdfDocument.createBookmark();\n        let mark2: pdfService.Bookmark = this.pdfDocument.createBookmark();\n        // 设置书签的跳转信息\n        let destInfo: pdfService.DestInfo = mark1.getDestInfo();\n        destInfo.fitMode = pdfService.FitMode.FIT_MODE_XYZ;\n        destInfo.pageIndex = 1;\n        destInfo.left = 20;\n        destInfo.top = 30;\n        destInfo.zoom = 1.5;\n        mark1.setDestInfo(destInfo);\n        // 设置书签内容及样式\n        let bookInfo: pdfService.BookmarkInfo = mark1.getBookmarkInfo();\n        bookInfo.title = '这里是跳到第一页的书签';\n        bookInfo.titleColor = 12;\n        bookInfo.isBold = true;\n        bookInfo.isItalic = true;\n        mark1.setBookmarkInfo(bookInfo);\n        // 把创建的书签插入到PDF页面\n        this.pdfDocument.insertBookmark(mark1, null, 1);\n        this.pdfDocument.insertBookmark(mark2, mark1, 1);\n        // 设置保存文档沙箱路径并保存\n        let outPdfPath = this.context.filesDir + '/testAddBookmark.pdf';\n        let result = this.pdfDocument.saveDocument(outPdfPath);\n        hilog.info(0x0000, 'PdfPage', 'saveAddBookmark %{public}s!', result ? 'success' : 'fail');\n      })\n      // 删除书签\n      Button('removeBookmark').onClick(async () => {\n        // 确保沙箱目录有testAddBookmark.pdf文档\n        this.pdfDocument.loadDocument(this.context.filesDir + '/testAddBookmark.pdf');\n        let bookmarks: pdfService.Bookmark = this.pdfDocument.getRootBookmark();\n        if (bookmarks.isRootBookmark()) {\n          let hasRemoveBookmark: boolean = this.pdfDocument.removeBookmark(bookmarks);\n          hilog.info(0x0000, 'PdfPage', 'removeBookmark %{public}s!', hasRemoveBookmark ? 'success' : 'fail');\n          let outPdfPath = this.context.filesDir + '/testRemoveBookmark.pdf';\n          let result = this.pdfDocument.saveDocument(outPdfPath);\n          hilog.info(0x0000, 'PdfPage', 'saveRemoveBookmark %{public}s!', result ? 'success' : 'fail');\n        }\n      })\n    }\n  }\n}\n"
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
792474(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959102-6366a7913a263ad19d39d9b533b8f513.png");

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