"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["93762"], {
114834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_pdf_api_pdf_arkts_conponent_pdf_arkts_pdfview_component_pdf_arkts_pdfview_component_md_262_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-pdf-api-pdf-arkts-conponent-pdf-arkts-pdfview-component-pdf-arkts-pdfview-component-md-262.json
var site_docs_ref_pdf_api_pdf_arkts_conponent_pdf_arkts_pdfview_component_pdf_arkts_pdfview_component_md_262_namespaceObject = JSON.parse('{"id":"pdf-api/pdf-arkts-conponent/pdf-arkts-pdfview-component/pdf-arkts-pdfview-component","title":"PdfView（PDF预览组件）","description":"本模块提供PdfView组件，HarmonyOS应用通过集成该组件完成PDF文件的预览功能。","source":"@site/docs-ref/pdf-api/pdf-arkts-conponent/pdf-arkts-pdfview-component/pdf-arkts-pdfview-component.md","sourceDirName":"pdf-api/pdf-arkts-conponent/pdf-arkts-pdfview-component","slug":"/pdf-api/pdf-arkts-conponent/pdf-arkts-pdfview-component/pdf-arkts-pdfview-component","permalink":"/harmonyos-docs-site/ref/pdf-api/pdf-arkts-conponent/pdf-arkts-pdfview-component/pdf-arkts-pdfview-component","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"PdfView（PDF预览组件）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfview-component","kit":"应用服务","last_updated":"2026-04-22","slug":"pdf-arkts-pdfview-component"},"sidebar":"ref","previous":{"title":"pdfViewManager（PDF预览）","permalink":"/harmonyos-docs-site/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage"},"next":{"title":"filePreview（文件预览）","permalink":"/harmonyos-docs-site/ref/preview-api/preview-api-reference/preview-arkts/preview-arkts"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/pdf-api/pdf-arkts-conponent/pdf-arkts-pdfview-component/pdf-arkts-pdfview-component.md


const frontMatter = {
	title: 'PdfView（PDF预览组件）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfview-component',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'pdf-arkts-pdfview-component'
};
const contentTitle = 'PdfView（PDF预览组件）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "PdfView",
  "id": "pdfview",
  "level": 2
}, {
  "value": "build",
  "id": "build",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "pdfviewpdf预览组件",
        children: "PdfView（PDF预览组件）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供PdfView组件，HarmonyOS应用通过集成该组件完成PDF文件的预览功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pdfService, pdfViewManager, PdfView } from '@kit.PDFKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pdfview",
      children: "PdfView"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类是用来展示PDF文档预览的UI组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @Component"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.OfficeService.PDFService.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["pdfViewManager.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfviewmanage/pdf-arkts-pdfviewmanage#pdfcontroller",
              children: "PdfController"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PdfView组件控制器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pageLayout"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["pdfService.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#pagelayout",
              children: "PageLayout"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面布局显示模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isContinuous"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否连续预览，true：是，false：否。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "showScroll"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否显示滚动条，true：显示，false：隐藏。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pageFit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["pdfService.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#pagefit",
              children: "PageFit"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面适配模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build",
      children: "build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#pdfview",
        children: "PdfView"
      }), "对象的构造函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.OfficeService.PDFService.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pdfService, pdfViewManager, PdfView } from '@kit.PDFKit'\nimport { fileIo } from '@kit.CoreFileKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  private controller: pdfViewManager.PdfController = new pdfViewManager.PdfController();\n\n  aboutToAppear(): void {\n    let context = this.getUIContext().getHostContext() as Context;\n    let dir: string = context.filesDir\n    // 确保在工程目录src/main/resources/rawfile里存在input.pdf文档\n    let filePath: string = dir + '/input.pdf';\n    let res = fileIo.accessSync(filePath);\n    if (!res) {\n      let content: Uint8Array = context.resourceManager.getRawFileContentSync('rawfile/input.pdf');\n      let fdSand =\n        fileIo.openSync(filePath, fileIo.OpenMode.WRITE_ONLY | fileIo.OpenMode.CREATE | fileIo.OpenMode.TRUNC);\n      fileIo.writeSync(fdSand.fd, content.buffer);\n      fileIo.closeSync(fdSand.fd);\n    }\n    (async () => {\n      // 该监听方法只能在文档加载前调用一次\n      this.controller.registerPageCountChangedListener((pageCount: number) => {\n        hilog.info(0x0000, 'registerPageCountChanged-', pageCount.toString());\n      });\n      let loadResult1: pdfService.ParseResult = await this.controller.loadDocument(filePath);\n      // 注意：这里刚加载文档，请不要在这里立即设置PDF文档的预览方式\n    })()\n  }\n\n  build() {\n    Row() {\n      PdfView({\n        controller: this.controller,\n        pageFit: pdfService.PageFit.FIT_WIDTH,\n        showScroll: true\n      })\n        .id('pdfview_app_view')\n        .layoutWeight(1);\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
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