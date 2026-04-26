"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["325638"], {
662301(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_process_page_content_web_createpdf_web_createpdf_md_01a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-process-page-content-web-createpdf-web-createpdf-md-01a.json
var site_docs_arkweb_web_process_page_content_web_createpdf_web_createpdf_md_01a_namespaceObject = JSON.parse('{"id":"arkweb/web-process-page-content/web-createpdf/web-createpdf","title":"使用Web组件保存前端页面为PDF","description":"从API version 14开始，支持使用Web组件的createPdf方法，为应用提供了保存前端页面为PDF的功能。","source":"@site/docs/arkweb/web-process-page-content/web-createpdf/web-createpdf.md","sourceDirName":"arkweb/web-process-page-content/web-createpdf","slug":"/arkweb/web-process-page-content/web-createpdf/","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-createpdf/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用Web组件保存前端页面为PDF","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-createpdf","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Web组件打印前端页面","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-print/"},"next":{"title":"使用Web组件的PDF文档预览能力","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-pdf-preview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-process-page-content/web-createpdf/web-createpdf.md


const frontMatter = {
	title: '使用Web组件保存前端页面为PDF',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-createpdf',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Web组件保存前端页面为PDF';

const assets = {

};



const toc = [{
  "value": "需要权限",
  "id": "需要权限",
  "level": 2
}, {
  "value": "callback方式保存PDF",
  "id": "callback方式保存pdf",
  "level": 2
}, {
  "value": "Promise方式保存PDF",
  "id": "promise方式保存pdf",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用web组件保存前端页面为pdf",
        children: "使用Web组件保存前端页面为PDF"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 14开始，支持使用Web组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#createpdf14",
        children: "createPdf"
      }), "方法，为应用提供了保存前端页面为PDF的功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#createpdf14",
        children: "createPdf"
      }), "生成实例后，调用pdfArrayBuffer方法获取二进制数据流，再使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs",
        children: "fileIo"
      }), "方法将二进制数据流保存为PDF文件。用户可以将前端页面内容保存为PDF以便分享或保存。例如，生成报告、发票等，方便用户保存和传输。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(862720)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-i/arkts-apis-webview-i#pdfconfiguration14",
        children: "pdfConfiguration"
      }), "的配置，可调整PDF每页大小、前端页面缩放比例等；推荐使用前端页面适配策略，通过CSS媒体查询（@media print）优化PDF排版。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "需要权限",
      children: "需要权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若涉及网络文档获取，需在module.json5中配置网络访问权限。具体添加方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
        children: "在配置文件中声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.INTERNET\"\n  }\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "callback方式保存pdf",
      children: "callback方式保存PDF"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过callback方式调用createPdf接口，获取到的result通过pdfArrayBuffer接口取得PDF二进制数据流，最后使用fileIo方法将二进制数据流保存为PDF文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileIo as fs } from '@kit.CoreFileKit';\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  controller: webview.WebviewController = new webview.WebviewController();\n  pdfConfig: webview.PdfConfiguration = {\n    width: 8.27,\n    height: 11.69,\n    marginTop: 0,\n    marginBottom: 0,\n    marginRight: 0,\n    marginLeft: 0,\n    shouldPrintBackground: true\n  };\n\n  build() {\n    Column() {\n      Button('SavePDF')\n        .onClick(() => {\n          // 触发PDF生成，需要确保页面渲染完成，可使用onPageEnd事件监听\n          this.controller.createPdf(\n            this.pdfConfig,\n            (error, result: webview.PdfData) => {\n              try {\n                // 获取到的result通过`pdfArrayBuffer`接口取得PDF二进制数据流，最后使用`fileIo`方法将二进制数据流保存为PDF文件\n                let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n                let filePath = context.filesDir + '/test.pdf';\n                let file = fs.openSync(filePath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n                fs.write(file.fd, result.pdfArrayBuffer().buffer).then((writeLen: number) => {\n                  console.info('createPDF write data to file succeed and size is:' + writeLen);\n                }).catch((err: BusinessError) => {\n                  console.error('createPDF write data to file failed with error message: ' + err.message +\n                      ', error code: ' + err.code);\n                }).finally(() => {\n                  // 关闭file\n                  fs.closeSync(file);\n                });\n              } catch (resError) {\n                console.error(\n                  `ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n              }\n            });\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "promise方式保存pdf",
      children: "Promise方式保存PDF"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过Promise方式调用createPdf接口，获取到的result通过pdfArrayBuffer接口取得PDF二进制数据流，最后使用fileIo方法将二进制数据流保存为PDF文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileIo as fs } from '@kit.CoreFileKit';\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  controller: webview.WebviewController = new webview.WebviewController();\n  pdfConfig: webview.PdfConfiguration = {\n    width: 8.27,\n    height: 11.69,\n    marginTop: 0,\n    marginBottom: 0,\n    marginRight: 0,\n    marginLeft: 0,\n    shouldPrintBackground: true\n  };\n\n  build() {\n    Column() {\n      Button('SavePDF')\n        .onClick(() => {\n          // 触发PDF生成，需要确保页面渲染完成，可使用onPageEnd事件监听\n          this.controller.createPdf(this.pdfConfig)\n            .then((result: webview.PdfData) => {\n              try {\n                // 获取到的result通过`pdfArrayBuffer`接口取得PDF二进制数据流，最后使用`fileIo`方法将二进制数据流保存为PDF文件\n                let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n                let filePath = context.filesDir + '/test.pdf';\n                let file = fs.openSync(filePath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n                fs.write(file.fd, result.pdfArrayBuffer().buffer).then((writeLen: number) => {\n                  console.info('createPDF write data to file succeed and size is:' + writeLen);\n                }).catch((err: BusinessError) => {\n                  console.error('createPDF write data to file failed with error message: ' + err.message +\n                      ', error code: ' + err.code);\n                }).finally(() => {\n                  // 关闭file\n                  fs.closeSync(file);\n                });\n              } catch (resError) {\n                console.error(\n                  `ErrorCode: ${(resError as BusinessError).code},  Message: ${(resError as BusinessError).message}`);\n              }\n            })\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
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
862720(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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