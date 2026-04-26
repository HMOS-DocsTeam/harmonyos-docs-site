"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["664406"], {
35885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_faq_scan_faq_15_scan_faq_15_md_d08_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-faq-scan-faq-15-scan-faq-15-md-d08.json
var site_docs_scan_kit_guide_scan_faq_scan_faq_15_scan_faq_15_md_d08_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-faq/scan-faq-15/scan-faq-15","title":"自定义界面扫码如何实现扫码框","description":"*问题现象*","source":"@site/docs/scan-kit-guide/scan-faq/scan-faq-15/scan-faq-15.md","sourceDirName":"scan-kit-guide/scan-faq/scan-faq-15","slug":"/scan-kit-guide/scan-faq/scan-faq-15/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-15/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"自定义界面扫码如何实现扫码框","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-15","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"如何主动通过手势缩放变焦比","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-14/"},"next":{"title":"默认界面扫码/自定义界面扫码体验设计","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-16/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-faq/scan-faq-15/scan-faq-15.md


const frontMatter = {
	title: '自定义界面扫码如何实现扫码框',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-15',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义界面扫码如何实现扫码框';

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
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义界面扫码如何实现扫码框",
        children: "自定义界面扫码如何实现扫码框"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扫码界面没有类似扫码框呈现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用ArkTS在实时扫码界面画出需要的扫码框。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据获得的码图位置信息确定码图是否在扫码框内（注意：需要将码图位置单位和扫码框位置单位保持一致，根据实际情况使用px或vp）。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当码图位置不在扫码框范围内时，在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstart-1",
          children: "customScan.start"
        }), "的callback回调中执行", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanrescan",
          children: "customScan.rescan"
        }), "接口，即可继续扫码。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码（仅供参考）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { customScan, scanBarcode } from '@kit.ScanKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 例如XComponent设置的宽高为cameraWidth = 1080px, cameraHeight = 1920px\nlet cameraWidth = 1080;\nlet cameraHeight = 1920;\n// 自定义扫码框在屏幕中间 scanBox 为800px*800px，则扫码框相对XComponent的坐标left: 140px, top: 560px, right: 940px, bottom: 1360px\nlet scanBoxWidth = 800;\nlet scanBoxHeight = 800;\nlet scanBox: scanBarcode.ScanCodeRect = {\n  left: (cameraWidth - scanBoxWidth) / 2,\n  top: (cameraHeight - scanBoxHeight) / 2,\n  right: (cameraWidth + scanBoxWidth) / 2,\n  bottom: (cameraHeight + scanBoxHeight) / 2\n}\n\n// 设置ViewControl参数\nlet viewControl: customScan.ViewControl = {\n  width: cameraWidth,\n  height: cameraHeight,\n  surfaceId: '123' // mock数据，实际需要从组件生成获取\n};\ntry {\n  customScan.start(viewControl, (err: BusinessError, data: Array<scanBarcode.ScanResult>) => {\n    if (err) {\n      // 扫码识别失败\n      return;\n    }\n    if (data && data.length > 0) {\n      for (let i = 0; i < data.length; i++) {\n        // 例如：scanCodeRect是{ left: 150px, top: 400px, right: 450px, bottom: 700px }\n        const scanCodeRect: scanBarcode.ScanCodeRect | undefined = data[i].scanCodeRect;\n        if (scanCodeRect) {\n          // 判断码图位置是否位于扫码框范围内\n          if (scanCodeRect.left >= scanBox.left && scanCodeRect.top >= scanBox.top &&\n            scanCodeRect.right <= scanBox.right &&\n            scanCodeRect.bottom <= scanBox.bottom) {\n            // 扫码成功，码图位置位于扫码框范围，根据业务需求处理扫码结果\n          } else {\n            // 码图位置不在扫码框范围，继续扫码\n            try {\n              customScan.rescan();\n              break;\n            } catch (err) {\n              hilog.error(0x0001, '[Scan Sample]', `Failed to rescan. Code: ${err.code}, message: ${err.message}`);\n            }\n          }\n        }\n      }\n    }\n  });\n} catch (err) {\n  hilog.error(0x0001, '[Scan Sample]', `Failed to start customScan. Code: ${err.code}, message: ${err.message}`);\n}\n"
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