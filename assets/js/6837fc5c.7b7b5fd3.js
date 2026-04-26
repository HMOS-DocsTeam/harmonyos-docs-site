"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["529503"], {
972794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_faq_scan_faq_10_scan_faq_10_md_683_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-faq-scan-faq-10-scan-faq-10-md-683.json
var site_docs_scan_kit_guide_scan_faq_scan_faq_10_scan_faq_10_md_683_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-faq/scan-faq-10/scan-faq-10","title":"自定义界面扫码如何连续扫码（customScan.rescan）","description":"*问题现象*","source":"@site/docs/scan-kit-guide/scan-faq/scan-faq-10/scan-faq-10.md","sourceDirName":"scan-kit-guide/scan-faq/scan-faq-10","slug":"/scan-kit-guide/scan-faq/scan-faq-10/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-10/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"自定义界面扫码如何连续扫码（customScan.rescan）","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-10","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义界面扫码黑屏现象","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-9/"},"next":{"title":"通过字节数组生成码图无法识别","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-11/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-faq/scan-faq-10/scan-faq-10.md


const frontMatter = {
	title: '自定义界面扫码如何连续扫码（customScan.rescan）',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-10',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义界面扫码如何连续扫码（customScan.rescan）';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "自定义界面扫码如何连续扫码customscanrescan",
        children: "自定义界面扫码如何连续扫码（customScan.rescan）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义界面扫码扫到码值后，如何连续扫码？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["customScan.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanrescan",
        children: "rescan"
      }), "可以重新触发一次扫码，必须在customScan.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstart-1",
        children: "start"
      }), "(viewControl, callback)方法Callback接口回调中有效，Promise方式无效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { customScan, scanBarcode } from '@kit.ScanKit';\n\n@Entry\n@Component\nstruct Index {\n  private callback: AsyncCallback<Array<scanBarcode.ScanResult>> =\n    (err: BusinessError, data: Array<scanBarcode.ScanResult>) => {\n      if (err) {\n        hilog.error(0x0001, '[Scan Sample]',\n          `Failed to get ScanResult by callback. Code: ${err.code}, message: ${err.message}`);\n        return;\n      }\n      hilog.info(0x0001, '[Scan Sample]',\n        `Succeeded in getting ScanResult by callback, result is ${JSON.stringify(data)}`);\n      try {\n        // 重新触发扫码：不需要重启相机并重新触发一次扫码，可以在start接口的Callback异步回调中，调用rescan接口。\n        customScan.rescan();\n      } catch (err) {\n        hilog.error(0x0001, '[Scan Sample]', `Failed to rescan. Code: ${err.code}, message: ${err.message}`);\n      }\n    }\n\n  build() {\n  }\n}\n"
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