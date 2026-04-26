"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["406766"], {
355711(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_process_page_content_web_print_web_print_md_1a6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-process-page-content-web-print-web-print-md-1a6.json
var site_docs_arkweb_web_process_page_content_web_print_web_print_md_1a6_namespaceObject = JSON.parse('{"id":"arkweb/web-process-page-content/web-print/web-print","title":"使用Web组件打印前端页面","description":"Web组件打印html页面时可通过W3C标准协议接口和应用接口两种方式实现。","source":"@site/docs/arkweb/web-process-page-content/web-print/web-print.md","sourceDirName":"arkweb/web-process-page-content/web-print","slug":"/arkweb/web-process-page-content/web-print/","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-print/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用Web组件打印前端页面","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-print","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Web组件支持视频沉浸式全屏播放","permalink":"/harmonyos-docs-site/arkweb/web-use-multimedia/web_full_screen/"},"next":{"title":"使用Web组件保存前端页面为PDF","permalink":"/harmonyos-docs-site/arkweb/web-process-page-content/web-createpdf/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-process-page-content/web-print/web-print.md


const frontMatter = {
	title: '使用Web组件打印前端页面',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-print',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Web组件打印前端页面';

const assets = {

};



const toc = [{
  "value": "使用W3C标准协议接口拉起打印",
  "id": "使用w3c标准协议接口拉起打印",
  "level": 2
}, {
  "value": "通过调用应用侧接口拉起打印",
  "id": "通过调用应用侧接口拉起打印",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用web组件打印前端页面",
        children: "使用Web组件打印前端页面"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件打印html页面时可通过W3C标准协议接口和应用接口两种方式实现。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用打印功能前，请在module.json5中配置相关权限，添加方法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#%E5%9C%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E%E6%9D%83%E9%99%90",
        children: "在配置文件中声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\":[\n    {\n      \"name\" : \"ohos.permission.PRINT\"\n    }\n  ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用w3c标准协议接口拉起打印",
      children: "使用W3C标准协议接口拉起打印"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过创建打印适配器，拉起打印应用，并对当前Web页面内容进行渲染，渲染后生成的PDF文件信息通过文件描述符（fd）传递给打印框架。W3C标准协议接口window.print()方法用于打印当前页面或弹出打印对话框。该方法没有任何参数，只需要在JavaScript中调用即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可通过前端css样式控制是否打印，例如@media print。再通过web加载该html页面的方式运行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "print.html页面代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例一："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset=\"utf-8\">\n    <title>printTest</title>\n    <style>\n        @media print {\n            h1 {\n                display: none;\n            }\n        }\n    </style>\n</head>\n\n<body>\n    <div>\n        <h1><b>\n                <p style=\"text-align: center;\">This is a test page for printing</p>\n            </b>\n            <hr color=\"#00cc00\" width=\"95%\">\n        </h1>\n        <button class=\"Button Button--outline\" onclick=\"window.print();\">Print</button>\n        <p> content content content </p>\n        <div id=\"printableTable\">\n            <table>\n                <thead>\n                    <tr>\n                        <td>Thing</td>\n                        <td>Chairs</td>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>1</td>\n                        <td>blue</td>\n                    </tr>\n                    <tr>\n                        <td>2</td>\n                        <td>green</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <p> content content content </p>\n        <p> content content content </p>\n    </div>\n</body>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例二（iframe嵌套页面的方式）："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>iframe嵌套页面打印</title>\n</head>\n<body>\n    <button id=\"printIframe\">打印iframe嵌套页面</button>\n    <iframe id=\"contentIframe\" hidden></iframe>\n\n    <script>\n        document.getElementById(\"printIframe\").addEventListener(\"click\", () => {\n            var ctIframe = document.getElementById(\"contentIframe\");\n            if(!ctIframe.contentWindow || !ctIframe.contentWindow.document) {\n              console.error(\"iframe页面初始化失败\");\n              return;\n            }\n            var ctIframeDoc = ctIframe.contentWindow.document;\n            ctIframeDoc.write(\"嵌套页面\");\n            ctIframeDoc.close();\n            ctIframe.contentWindow.print();\n        });\n    </script>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用侧代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct Index {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Row() {\n      Column() {\n        Web({ src: $rawfile('print.html'), controller: this.controller })\n          .javaScriptAccess(true)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过调用应用侧接口拉起打印",
      children: "通过调用应用侧接口拉起打印"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用侧通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#createwebprintdocumentadapter11",
        children: "createWebPrintDocumentAdapter"
      }), "创建打印适配器，通过将适配器传入打印的print接口调起打印。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError, print } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('createWebPrintDocumentAdapter')\n        .onClick(() => {\n          try {\n            let webPrintDocadapter = this.controller.createWebPrintDocumentAdapter('example.pdf');\n            print.print('example_job_id', webPrintDocadapter, null, this.getUIContext().getHostContext());\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller });\n    }\n  }\n}\n"
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