"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["555343"], {
748813(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_loading_browsing_web_resource_interception_request_mgmt_web_resource_interception_request_mgmt_md_bb3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-loading-browsing-web-resource-interception-request-mgmt-web-resource-interception-request-mgmt-md-bb3.json
var site_docs_arkweb_web_manage_loading_browsing_web_resource_interception_request_mgmt_web_resource_interception_request_mgmt_md_bb3_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-loading-browsing/web-resource-interception-request-mgmt/web-resource-interception-request-mgmt","title":"自定义页面请求响应","description":"Web组件支持在应用拦截到页面请求后自定义响应请求能力。开发者通过onInterceptRequest()接口来实现自定义资源请求响应。自定义请求能力可以用于开发者自定义Web页面响应、自定义文件资源响应等场景。","source":"@site/docs/arkweb/web-manage-loading-browsing/web-resource-interception-request-mgmt/web-resource-interception-request-mgmt.md","sourceDirName":"arkweb/web-manage-loading-browsing/web-resource-interception-request-mgmt","slug":"/arkweb/web-manage-loading-browsing/web-resource-interception-request-mgmt/","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-resource-interception-request-mgmt/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"自定义页面请求响应","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-resource-interception-request-mgmt","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拦截Web组件发起的网络请求","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-scheme-handler/"},"next":{"title":"加速Web页面的访问","permalink":"/harmonyos-docs-site/arkweb/web-manage-loading-browsing/web-predictor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-loading-browsing/web-resource-interception-request-mgmt/web-resource-interception-request-mgmt.md


const frontMatter = {
	title: '自定义页面请求响应',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-resource-interception-request-mgmt',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义页面请求响应';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
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
        id: "自定义页面请求响应",
        children: "自定义页面请求响应"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件支持在应用拦截到页面请求后自定义响应请求能力。开发者通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#oninterceptrequest9",
        children: "onInterceptRequest()"
      }), "接口来实现自定义资源请求响应。自定义请求能力可以用于开发者自定义Web页面响应、自定义文件资源响应等场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web网页上发起资源加载请求，应用层收到资源请求信息。应用层构造本地资源响应信息发送给Web内核。Web内核解析应用层响应信息，根据此响应信息进行页面资源加载。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在下面的示例中，Web组件通过拦截页面请求“", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://www.example.com/test.html”，在应用侧代码构建响应资源，实现自定义页面响应场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前端页面index1.html代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\">\n</head>\n<body>\n<!-- 页面资源请求 -->\n<a href=\"https://www.example.com/test.html\">intercept test!</a>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用侧代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  responseResource: WebResourceResponse = new WebResourceResponse();\n  // 开发者自定义响应数据\n  @State webData: string = '<!DOCTYPE html>\\n' +\n    '<html>\\n' +\n    '<head>\\n' +\n    '<title>intercept test</title>\\n' +\n    '</head>\\n' +\n    '<body>\\n' +\n    '<h1>intercept ok</h1>\\n' +\n    '</body>\\n' +\n    '</html>'\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index1.html'), controller: this.controller })\n        .onInterceptRequest((event) => {\n          if (event) {\n            console.info('url:' + event.request.getRequestUrl());\n            // 拦截页面请求\n            if (event.request.getRequestUrl() !== 'https://www.example.com/test.html') {\n              return null;\n            }\n          }\n          // 构造响应数据\n          this.responseResource.setResponseData(this.webData);\n          this.responseResource.setResponseEncoding('utf-8');\n          this.responseResource.setResponseMimeType('text/html');\n          this.responseResource.setResponseCode(200);\n          this.responseResource.setReasonMessage('OK');\n          return this.responseResource;\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "被拦截后的页面"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(334794)/* ["default"] */.A) + "",
            width: "369",
            height: "286"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为自定义的JavaScript请求响应生成CodeCache：自定义请求响应的资源类型如果是JavaScript脚本，可以在响应头中添加“ResponseDataID”字段，Web内核读取到该字段后会为该JS资源生成CodeCache，加速JS执行，并且ResponseData如果有更新时必须更新该字段。不添加“ResponseDataID”字段的情况下默认不生成CodeCache。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在下面的示例中，Web组件通过拦截页面请求“", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://www.example.com/test.js”，应用侧代码构建响应资源，在响应头中添加“ResponseDataID”字段，开启生成CodeCache的功能"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前端页面index2.html代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\">\n</head>\n<body>\n\n<div id=\"div-1\">this is a test div</div>\n<div id=\"div-2\">this is a test div</div>\n<div id=\"div-3\">this is a test div</div>\n<div id=\"div-4\">this is a test div</div>\n<div id=\"div-5\">this is a test div</div>\n<div id=\"div-6\">this is a test div</div>\n<div id=\"div-7\">this is a test div</div>\n<div id=\"div-8\">this is a test div</div>\n<div id=\"div-9\">this is a test div</div>\n<div id=\"div-10\">this is a test div</div>\n<div id=\"div-11\">this is a test div</div>\n\n<script src=\"https://www.example.com/test.js\"></script>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用侧代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  responseResource: WebResourceResponse = new WebResourceResponse();\n  // 开发者自定义响应数据（响应数据长度需大于等于1024才会生成codecache）\n  @State jsData: string = 'let text_msg = \"the modified content:version 0000000000001\";\\n' +\n    'let element1 = window.document.getElementById(\"div-1\");\\n' +\n    'let element2 = window.document.getElementById(\"div-2\");\\n' +\n    'let element3 = window.document.getElementById(\"div-3\");\\n' +\n    'let element4 = window.document.getElementById(\"div-4\");\\n' +\n    'let element5 = window.document.getElementById(\"div-5\");\\n' +\n    'let element6 = window.document.getElementById(\"div-6\");\\n' +\n    'let element7 = window.document.getElementById(\"div-7\");\\n' +\n    'let element8 = window.document.getElementById(\"div-8\");\\n' +\n    'let element9 = window.document.getElementById(\"div-9\");\\n' +\n    'let element10 = window.document.getElementById(\"div-10\");\\n' +\n    'let element11 = window.document.getElementById(\"div-11\");\\n' +\n    'element1.innerHTML = text_msg;\\n' +\n    'element2.innerHTML = text_msg;\\n' +\n    'element3.innerHTML = text_msg;\\n' +\n    'element4.innerHTML = text_msg;\\n' +\n    'element5.innerHTML = text_msg;\\n' +\n    'element6.innerHTML = text_msg;\\n' +\n    'element7.innerHTML = text_msg;\\n' +\n    'element8.innerHTML = text_msg;\\n' +\n    'element9.innerHTML = text_msg;\\n' +\n    'element10.innerHTML = text_msg;\\n' +\n    'element11.innerHTML = text_msg;\\n';\n  build() {\n    Column() {\n      Web({ src: $rawfile('index2.html'), controller: this.controller })\n        .onInterceptRequest((event) => {\n          // 拦截页面请求\n          if (event?.request.getRequestUrl() == 'https://www.example.com/test.js') {\n            // 构造响应数据\n            this.responseResource.setResponseHeader([\n              {\n                // 格式：不超过13位纯数字。js识别码，Js有更新时必须更新该字段\n                headerKey: 'ResponseDataID',\n                headerValue: '0000000000001'\n              }]);\n            this.responseResource.setResponseData(this.jsData);\n            this.responseResource.setResponseEncoding('utf-8');\n            this.responseResource.setResponseMimeType('application/javascript');\n            this.responseResource.setResponseCode(200);\n            this.responseResource.setReasonMessage('OK');\n            return this.responseResource;\n          }\n          return null;\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "被拦截后的页面"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(692728)/* ["default"] */.A) + "",
            width: "369",
            height: "243"
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
334794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478227-6c3457f1212b16ec36b18dd2e36b74fa.png");

},
692728(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798578-7f4621c3a6a0beadfe8d6b1b79d1cb35.png");

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