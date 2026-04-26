"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["124070"], {
469297(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_use_frontend_page_js_web_in_app_frontend_page_function_invoking_web_in_app_frontend_page_function_invoking_md_185_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-use-frontend-page-js-web-in-app-frontend-page-function-invoking-web-in-app-frontend-page-function-invoking-md-185.json
var site_docs_arkweb_web_use_frontend_page_js_web_in_app_frontend_page_function_invoking_web_in_app_frontend_page_function_invoking_md_185_namespaceObject = JSON.parse('{"id":"arkweb/web-use-frontend-page-js/web-in-app-frontend-page-function-invoking/web-in-app-frontend-page-function-invoking","title":"应用侧调用前端页面函数","description":"应用侧可以通过runJavaScript()和runJavaScriptExt()方法调用前端页面的JavaScript相关函数。","source":"@site/docs/arkweb/web-use-frontend-page-js/web-in-app-frontend-page-function-invoking/web-in-app-frontend-page-function-invoking.md","sourceDirName":"arkweb/web-use-frontend-page-js/web-in-app-frontend-page-function-invoking","slug":"/arkweb/web-use-frontend-page-js/web-in-app-frontend-page-function-invoking/","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/web-in-app-frontend-page-function-invoking/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用侧调用前端页面函数","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-in-app-frontend-page-function-invoking","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取网页内容高度","permalink":"/harmonyos-docs-site/arkweb/web-render-layout/web-getpage-height/"},"next":{"title":"前端页面调用应用侧函数","permalink":"/harmonyos-docs-site/arkweb/web-use-frontend-page-js/web-in-page-app-function-invoking/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-use-frontend-page-js/web-in-app-frontend-page-function-invoking/web-in-app-frontend-page-function-invoking.md


const frontMatter = {
	title: '应用侧调用前端页面函数',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-in-app-frontend-page-function-invoking',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用侧调用前端页面函数';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "应用侧调用前端页面函数",
        children: "应用侧调用前端页面函数"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用侧可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#runjavascript",
        children: "runJavaScript()"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#runjavascriptext10",
        children: "runJavaScriptExt()"
      }), "方法调用前端页面的JavaScript相关函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#runjavascript",
        children: "runJavaScript()"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#runjavascriptext10",
        children: "runJavaScriptExt()"
      }), "在参数类型上有以下差异：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#runjavascriptext10",
        children: "runJavaScriptExt()"
      }), "支持string和ArrayBuffer类型参数，而", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#runjavascript",
        children: "runJavaScript()"
      }), "仅支持string类型参数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，点击应用侧的“runJavaScript”按钮时，触发前端页面的htmlTest()方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前端页面代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n<body>\n<button type=\"button\" onclick=\"callArkTS()\">Click Me!</button>\n<h1 id=\"text\">这是一个测试信息，默认字体为黑色，调用runJavaScript方法后字体为黄色、调用runJavaScriptParam方法后字体为绿色、调用runJavaScriptCodePassed方法后字体为红色</h1>\n<script>\n    // 有参函数。\n    var param = \"param: JavaScript Hello World!\";\n    function htmlTestParam(param) {\n        document.getElementById('text').style.color = 'green';\n        console.info(param);\n    }\n    // 无参函数。\n    function htmlTest() {\n        document.getElementById('text').style.color = 'yellow';\n    }\n    // 点击“Click Me！”按钮，触发前端页面callArkTS()函数执行JavaScript传递的代码。\n    function callArkTS() {\n        changeColor();\n    }\n</script>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用侧代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  webviewController: webview.WebviewController = new webview.WebviewController();\n\n  aboutToAppear() {\n    // 配置Web开启调试模式\n    webview.WebviewController.setWebDebuggingAccess(true);\n  }\n\n  build() {\n    Column() {\n      Button('runJavaScriptParam')\n        .onClick(() => {\n          // 调用前端页面有参函数。\n          this.webviewController.runJavaScript('htmlTestParam(param)');\n        })\n      Button('runJavaScript')\n        .onClick(() => {\n          // 调用前端页面无参函数。\n          this.webviewController.runJavaScript('htmlTest()');\n        })\n      Button('runJavaScriptCodePassed')\n        .onClick(() => {\n          // 传递runJavaScript侧代码方法。\n          this.webviewController.runJavaScript(\n            `function changeColor(){document.getElementById('text').style.color = 'red'}`);\n        })\n      Web({ src: $rawfile('index.html'), controller: this.webviewController })\n    }\n  }\n}\n"
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