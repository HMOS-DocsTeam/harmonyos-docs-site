"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["557646"], {
108059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_pdf_kit_guide_pdf_pdfservice_implements_pdf_isencrypt_removesecurity_pdf_isencrypt_removesecurity_md_3dc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-pdf-kit-guide-pdf-pdfservice-implements-pdf-isencrypt-removesecurity-pdf-isencrypt-removesecurity-md-3dc.json
var site_docs_pdf_kit_guide_pdf_pdfservice_implements_pdf_isencrypt_removesecurity_pdf_isencrypt_removesecurity_md_3dc_namespaceObject = JSON.parse('{"id":"pdf-kit-guide/pdf-pdfservice-implements/pdf-isencrypt-removesecurity/pdf-isencrypt-removesecurity","title":"判断PDF文档是否加密及删除加密","description":"PDF Kit支持判断PDF文档是否加密及删除PDF加密锁。","source":"@site/docs/pdf-kit-guide/pdf-pdfservice-implements/pdf-isencrypt-removesecurity/pdf-isencrypt-removesecurity.md","sourceDirName":"pdf-kit-guide/pdf-pdfservice-implements/pdf-isencrypt-removesecurity","slug":"/pdf-kit-guide/pdf-pdfservice-implements/pdf-isencrypt-removesecurity/","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-isencrypt-removesecurity/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"判断PDF文档是否加密及删除加密","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-isencrypt-removesecurity","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"转换整个PDF文档为图片","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-doc-to-imgs/pdf-convert-img/"},"next":{"title":"添加、删除书签","permalink":"/harmonyos-docs-site/pdf-kit-guide/pdf-pdfservice-implements/pdf-add-bookmark/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/pdf-kit-guide/pdf-pdfservice-implements/pdf-isencrypt-removesecurity/pdf-isencrypt-removesecurity.md


const frontMatter = {
	title: '判断PDF文档是否加密及删除加密',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-isencrypt-removesecurity',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '判断PDF文档是否加密及删除加密';

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
        id: "判断pdf文档是否加密及删除加密",
        children: "判断PDF文档是否加密及删除加密"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PDF Kit支持判断PDF文档是否加密及删除PDF加密锁。"
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
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#isencrypted",
              children: "isEncrypted"
            }), "(path: string): boolean"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断当前文档是否已加密。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/pdf-api/pdf-arkts/pdf-arkts-pdfservice/pdf-arkts-pdfservice#removesecurity",
              children: "removeSecurity"
            }), "(): boolean"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除文档加密锁。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用isEncrypted方法，判断PDF文档是否加密。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果是加密PDF文档，调用removeSecurity方法移除PDF文档的加密锁。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pdfService } from '@kit.PDFKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct PdfPage {\n  private pdfDocument: pdfService.PdfDocument = new pdfService.PdfDocument();\n  private context = this.getUIContext().getHostContext() as Context;\n\n  build() {\n    Column() {\n      // 判断文档是否加密，并删除加密\n      Button('isEncryptedAndRemoveSecurity').onClick(async () => {\n        // 确保沙箱目录有input.pdf文档\n        let filePath = this.context.filesDir + '/input.pdf';\n        let isEncrypt = this.pdfDocument.isEncrypted(filePath);\n        if (isEncrypt) {\n          let hasRemoveEncrypt = this.pdfDocument.removeSecurity();\n          hilog.info(0x0000, 'PdfPage', 'isEncryptedAndRemoveSecurity %{public}s!',\n            hasRemoveEncrypt ? 'success' : 'fail');\n        }\n      })\n    }\n  }\n}\n"
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