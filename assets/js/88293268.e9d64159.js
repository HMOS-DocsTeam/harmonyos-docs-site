"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["764922"], {
957627(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_js_code_cache_by_interception_check_ide_js_code_cache_by_interception_check_md_882_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-js-code-cache-by-interception-check-ide-js-code-cache-by-interception-check-md-882.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_js_code_cache_by_interception_check_ide_js_code_cache_by_interception_check_md_882_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-interception-check/ide-js-code-cache-by-interception-check","title":"@performance/js-code-cache-by-interception-check","description":"在资源拦截场景下，建议生成JavaScript字节码缓存，可以降低Web页面非首次的加载时间。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-interception-check/ide-js-code-cache-by-interception-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-interception-check","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-interception-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-interception-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":51,"frontMatter":{"title":"@performance/js-code-cache-by-interception-check","sidebar_position":51,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-js-code-cache-by-interception-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/init-list-component","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-init-list-component/"},"next":{"title":"@performance/js-code-cache-by-precompile-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-precompile-check/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-interception-check/ide-js-code-cache-by-interception-check.md


const frontMatter = {
	title: '@performance/js-code-cache-by-interception-check',
	sidebar_position: 51,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-js-code-cache-by-interception-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/js-code-cache-by-interception-check';

const assets = {

};



const toc = [{
  "value": "规则配置",
  "id": "规则配置",
  "level": 2
}, {
  "value": "选项",
  "id": "选项",
  "level": 2
}, {
  "value": "正例",
  "id": "正例",
  "level": 2
}, {
  "value": "反例",
  "id": "反例",
  "level": 2
}, {
  "value": "规则集",
  "id": "规则集",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "performancejs-code-cache-by-interception-check",
        children: "@performance/js-code-cache-by-interception-check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在资源拦截场景下，建议生成JavaScript字节码缓存，可以降低Web页面非首次的加载时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-web-develop-optimization#section1495115588211",
        children: "Web完成时延"
      }), "场景下，建议优先修改。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/js-code-cache-by-interception-check\": \"suggestion\",\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该规则无需配置额外选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { hiTraceMeter } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct JsCodeCacheByInterceptionCheckNoReport0 {\n  controller: webview.WebviewController = new webview.WebviewController();\n  responseResource: WebResourceResponse = new WebResourceResponse();\n  jsData: string = 'JavaScript Data';\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onControllerAttached(async () => {\n          for (const config of this.configs) {\n            const resourceMgr = this.getUIContext()?.getHostContext()?.resourceManager;\n            let content = resourceMgr?.getRawFileContentSync(config.localPath);\n            try {\n              this.controller.precompileJavaScript(config.url, content, config.options)\n                .then((errCode: number) => {\n                  console.log('precompile successfully!');\n                }).catch((errCode: number) => {\n                console.error('precompile failed.' + errCode);\n              })\n            } catch (err) {\n              console.error('precompile failed!.' + err.code + err.message);\n            }\n          }\n        })\n        .onInterceptRequest((event) => {\n          if (event?.request.getRequestUrl() === 'https://www.example.com/test.js') {\n            this.responseResource.setResponseHeader([\n              {\n                headerKey: 'ResponseDataID',\n                headerValue: '0000000000001'\n              }\n            ]);\n            this.responseResource.setResponseData(this.jsData);\n            this.responseResource.setResponseEncoding('utf-8');\n            this.responseResource.setResponseMimeType('application/javascript');\n            this.responseResource.setResponseCode(200);\n            this.responseResource.setReasonMessage('OK');\n            return this.responseResource;\n          }\n          return null;\n        })\n        .onPageBegin(() => {\n          hiTraceMeter.startTrace('getMessageData', 0);\n        })\n        .onPageEnd(() => {\n          hiTraceMeter.finishTrace('getMessageData', 0);\n        })\n    }\n  }\n\n  configs: Array<Config> = [\n    {\n      url: 'https://www.example.com/example.js',\n      localPath: 'example.js',\n      options: {\n        responseHeaders: [\n          { headerKey: 'E-Tag', headerValue: 'xxx' },\n          { headerKey: 'Last-Modified', headerValue: 'Web, 21 Mar 2024 10:38:41 GMT' }\n        ]\n      }\n    }\n  ]\n}\n\ninterface Config {\n  url: string,\n  localPath: string,\n  options: webview.CacheOptions\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拦截请求中未设置ResponseDataID或者自定义协议中isCodeCacheSupported设置为false，均不会生成字节码缓存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例1"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Example without a custom protocol and without setting ResponseDataID in the header\nimport { webview } from '@kit.ArkWeb';\nimport { hiTraceMeter } from '@kit.PerformanceAnalysisKit';\n@Entry\n@Component\nstruct JsCodeCacheByInterceptionCheckReport0 {\n  controller: webview.WebviewController = new webview.WebviewController();\n  responseResource: WebResourceResponse = new WebResourceResponse();\n  jsData: string = 'JavaScript Data';\n  build() {\n    Column() {\n      Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onPageBegin(() => {\n          hiTraceMeter.startTrace('getMessageData', 0);\n        })\n        // warning line\n        .onInterceptRequest(event => {\n          if (event?.request.getRequestUrl() === 'https://www.example.com/test.js') {\n            this.responseResource.setResponseData(this.jsData);\n            this.responseResource.setResponseEncoding('utf-8');\n            this.responseResource.setResponseMimeType('application/javascript');\n            this.responseResource.setResponseCode(200);\n            this.responseResource.setReasonMessage('OK');\n            return this.responseResource;\n          }\n          return null;\n        })\n        .onControllerAttached(async () => {\n          this.controller.precompileJavaScript('', 'content', null)\n            .then((errCode: number) => {\n              console.log('precompile successfully!' );\n            }).catch((errCode: number) => {\n            console.error('precompile failed.' + errCode);\n          })\n        })\n        .onPageEnd(() => {\n          hiTraceMeter.finishTrace('getMessageData', 0);\n        })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例2"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Example with a custom protocol and with isCodeCacheSupported set to false\nimport { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n@Entry\n@Component\nstruct JsCodeCacheByInterceptionCheckReport2 {\n  // warning line\n  scheme2: webview.WebCustomScheme = { schemeName: \"scheme2\", isSupportCORS: true, isSupportFetch: true, isCodeCacheSupported: false }\n  webController: webview.WebviewController = new webview.WebviewController();\n  jsData: string = 'JavaScript Data';\n  aboutToAppear(): void {\n    try {\n      webview.WebviewController.customizeSchemes([this.scheme2])\n    } catch (error) {\n      let e: BusinessError = error as BusinessError;\n      console.error(`ErrorCode: ${e.code},  Message: ${e.message}`);\n    }\n  }\n  build() {\n    Column() {\n      Web({\n        src: $rawfile('index2.html'),\n        controller: this.webController\n      })\n        .fileAccess(true)\n        .javaScriptAccess(true)\n        .width('100%')\n        .height('100%')\n        .onConsole((event) => {\n          console.log('ets onConsole:' + event?.message.getMessage());\n          return false\n        })\n        .onInterceptRequest((event) => {\n          if (event?.request.getRequestUrl() === 'scheme2://www.intercept.com/test-cc2.js') {\n            let responseResource = new WebResourceResponse();\n            responseResource.setResponseHeader([\n              {\n                headerKey: 'ResponseDataID',\n                headerValue: '0000000000002'\n              }]);\n            responseResource.setResponseData(this.jsData);\n            responseResource.setResponseEncoding('utf-8');\n            responseResource.setResponseMimeType('application/javascript');\n            responseResource.setResponseCode(200);\n            responseResource.setReasonMessage('OK');\n            return responseResource;\n          }\n          return null;\n        })\n        .onControllerAttached(async () => {\n          this.webController.precompileJavaScript('', 'content', null)\n            .then((errCode: number) => {\n              console.log('precompile successfully!' );\n            }).catch((errCode: number) => {\n            console.error('precompile failed.' + errCode);\n          })\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@performance/all\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code Linter代码检查规则的配置指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-check/ide-code-linter",
        children: "Code Linter代码检查"
      }), "。"]
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