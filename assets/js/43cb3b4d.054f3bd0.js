"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["247757"], {
338948(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_reader_kit_guide_reader_parser_reader_book_info_reader_book_info_md_43c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-reader-kit-guide-reader-parser-reader-book-info-reader-book-info-md-43c.json
var site_docs_reader_kit_guide_reader_parser_reader_book_info_reader_book_info_md_43c_namespaceObject = JSON.parse('{"id":"reader-kit-guide/reader-parser/reader-book-info/reader-book-info","title":"获取书籍信息","description":"在导入本地书籍到书架时，开发者需通过DocumentViewPicker先将书籍文件导入到应用沙箱目录，然后利用解析能力获取书籍信息，包括书封、书名及作者等，以完成书架内容的展示。","source":"@site/docs/reader-kit-guide/reader-parser/reader-book-info/reader-book-info.md","sourceDirName":"reader-kit-guide/reader-parser/reader-book-info","slug":"/reader-kit-guide/reader-parser/reader-book-info/","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-parser/reader-book-info/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"获取书籍信息","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-book-info","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Reader Kit简介","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-introduction/"},"next":{"title":"获取目录列表","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-parser/reader-catalog-list/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/reader-kit-guide/reader-parser/reader-book-info/reader-book-info.md


const frontMatter = {
	title: '获取书籍信息',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-book-info',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '获取书籍信息';

const assets = {

};



const toc = [{
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "获取书籍信息",
        children: "获取书籍信息"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在导入本地书籍到书架时，开发者需通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-picker/js-apis-file-picker#documentviewpicker",
        children: "DocumentViewPicker"
      }), "先将书籍文件导入到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/core-file-kit/app-file/app-sandbox-directory",
        children: "应用沙箱目录"
      }), "，然后利用解析能力获取书籍信息，包括书封、书名及作者等，以完成书架内容的展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(209590)/* ["default"] */.A) + "",
        width: "800",
        height: "643"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取书籍信息共涉及3个接口，具体API说明请参考下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/reader-api/reader-arkts/reader-book-parser/reader-book-parser#getdefaulthandler",
              children: "getDefaultHandler"
            }), "(path: string): Promise<BookParserHandler>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取书籍默认解析器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-book-parser/reader-book-parser#getbookinfo",
              children: "getBookInfo"
            }), "(): BookInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取书籍信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-book-parser/reader-book-parser#getresourcecontent",
              children: "getResourceContent"
            }), "(spineIndex: number, filePath: string): ArrayBuffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取书籍内容资源。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { bookParser } from '@kit.ReaderKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { image } from '@kit.ImageKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过提前导入到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/app-file/app-sandbox-directory",
            children: "应用沙箱目录"
          }), "中的书籍文件，初始化书籍解析器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private defaultHandler: bookParser.BookParserHandler | null = null;\n\naboutToAppear(): void {\n  this.init().then(() => {\n  });\n}\n\nprivate async init() {\n  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  let path: string = `${context.filesDir}/abc.epub`;\n  try {\n    this.defaultHandler = await bookParser.getDefaultHandler(path);\n  } catch (error) {\n    hilog.error(0x0000, \"testTAG\", `getDefaultHandler failed, Code: ${error.code}, message: ${error.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取书名、作者、书封信息并进行展示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State bookCover: PixelMap | null = null;\n@State bookTitle: string = '';\n@State author: string = '';\n\naboutToAppear(): void {\n  this.init().then(() => {\n    this.getBookInfo();\n  });\n}\n\nprivate async getBookInfo() {\n  try {\n    let bookInfo: bookParser.BookInfo | undefined = this.defaultHandler?.getBookInfo();\n    if (bookInfo) {\n      this.bookTitle = bookInfo.bookTitle || '';\n      this.author = bookInfo?.bookCreator || '';\n      // SpineIndex is not required for obtaining the book cover.\n      let buffer = this.defaultHandler?.getResourceContent(-1, bookInfo.bookCoverImage);\n      let imageSource: image.ImageSource = image.createImageSource(buffer);\n      this.bookCover = await imageSource.createPixelMap();\n      imageSource.release();\n    }\n    hilog.info(0x0000, 'testTAG', 'getBookInfo bookInfo is: ' + JSON.stringify(bookInfo));\n  } catch (error) {\n    hilog.error(0x0000, 'testTAG', `getBookInfo failed, Code: ${error.code}, message: ${error.message}`);\n  }\n}\n\nbuild() {\n  Column() {\n    Text('书名：' + this.bookTitle)\n      .fontSize(20)\n      .fontColor(\"#E6000000\")\n      .margin({ top: 50 })\n    Text('作者：' + this.author)\n      .fontSize(20)\n      .fontColor(\"#E6000000\")\n      .margin({ top: 10 })\n    Image(this.bookCover)\n      .width(200)\n      .aspectRatio(3 / 4)\n      .borderRadius(5)\n      .margin({ top: 10 })\n  }\n  .alignItems(HorizontalAlign.Start)\n  .margin({ left: 10, right: 10 })\n}\n"
          })
        }), "\n"]
      }), "\n"]
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
209590(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959142-7589fac3d3219254967e816326bb9919.png");

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