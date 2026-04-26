"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["225432"], {
42454(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_js_code_cache_by_precompile_check_ide_js_code_cache_by_precompile_check_md_536_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-js-code-cache-by-precompile-check-ide-js-code-cache-by-precompile-check-md-536.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_js_code_cache_by_precompile_check_ide_js_code_cache_by_precompile_check_md_536_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-precompile-check/ide-js-code-cache-by-precompile-check","title":"@performance/js-code-cache-by-precompile-check","description":"建议通过预编译生成JavaScript字节码缓存，可以降低Web页面第一次和第二次的加载时间。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-precompile-check/ide-js-code-cache-by-precompile-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-precompile-check","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-precompile-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-precompile-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":52,"frontMatter":{"title":"@performance/js-code-cache-by-precompile-check","sidebar_position":52,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-js-code-cache-by-precompile-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/js-code-cache-by-interception-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-interception-check/"},"next":{"title":"@performance/lazyforeach-args-check（已下线）","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lazyforeach-args-check/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-precompile-check/ide-js-code-cache-by-precompile-check.md


const frontMatter = {
	title: '@performance/js-code-cache-by-precompile-check',
	sidebar_position: 52,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-js-code-cache-by-precompile-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/js-code-cache-by-precompile-check';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "performancejs-code-cache-by-precompile-check",
        children: "@performance/js-code-cache-by-precompile-check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议通过预编译生成JavaScript字节码缓存，可以降低Web页面第一次和第二次的加载时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-web-develop-optimization#section563844632917",
        children: "Web完成时延"
      }), "场景下，建议优先修改。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/js-code-cache-by-precompile-check\": \"suggestion\",\n  }\n}\n"
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
        children: "import { webview } from '@kit.ArkWeb';\ninterface Config {\n  url: string,\n  localPath: string,\n  options: webview.CacheOptions\n}\n@Entry\n@Component\nstruct JsCodeCacheByPrecompileCheckNoReport {\n  controller: webview.WebviewController = new webview.WebviewController();\n  configs: Array<Config> = [\n    {\n      url: 'https://www.example.com/example.js',\n      localPath: 'example.js',\n      options: {\n        responseHeaders: [\n          { headerKey: 'E-Tag', headerValue: 'xxx' },\n          { headerKey: 'Last-Modified', headerValue: 'Web, 21 Mar 2024 10:38:41 GMT' }\n        ]\n      }\n    }\n  ]\n  build() {\n    Column() {\n      Web({ src: 'https://www.example.com/a.html', controller: this.controller })\n        .onControllerAttached(async () => {\n          for (const config of this.configs) {\n            let content = getContext().resourceManager.getRawFileContentSync(config.localPath);\n            try {\n              this.controller.precompileJavaScript(config.url, content, config.options)\n                .then((errCode: number) => {\n                  console.log('precompile successfully!' );\n                }).catch((errCode: number) => {\n                console.error('precompile failed.' + errCode);\n              })\n            } catch (err) {\n              console.error('precompile failed!.' + err.code + err.message);\n            }\n          }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { webview } from '@kit.ArkWeb';\nimport { hiTraceMeter } from '@kit.PerformanceAnalysisKit';\n@Entry\n@Component\nstruct JsCodeCacheByPrecompileCheckReport {\n  controller: webview.WebviewController = new webview.WebviewController();\n  build() {\n    Column() {\n      Button('加载页面')\n        .onClick(() => {\n          hiTraceMeter.startTrace('unPrecompileJavaScript', 1);\n          this.controller.loadUrl('https://www.example.com/b.html');\n        })\n      // warning line\n      Web({ src: 'https://www.example.com/a.html', controller: this.controller })\n        .fileAccess(true)\n        .onPageBegin((event) => {\n          console.log(`load page begin: ${event?.url}`);\n        })\n        .onPageEnd((event) => {\n          hiTraceMeter.finishTrace('unPrecompileJavaScript', 1);\n          console.log(`load page end: ${event?.url}`);\n        })\n    }\n  }\n}\n"
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