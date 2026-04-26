"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["873379"], {
224515(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_faq_scan_faq_8_scan_faq_8_md_3ae_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-faq-scan-faq-8-scan-faq-8-md-3ae.json
var site_docs_scan_kit_guide_scan_faq_scan_faq_8_scan_faq_8_md_3ae_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-faq/scan-faq-8/scan-faq-8","title":"自定义界面扫码预览画面出现拉伸","description":"*问题现象*","source":"@site/docs/scan-kit-guide/scan-faq/scan-faq-8/scan-faq-8.md","sourceDirName":"scan-kit-guide/scan-faq/scan-faq-8","slug":"/scan-kit-guide/scan-faq/scan-faq-8/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-8/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"自定义界面扫码预览画面出现拉伸","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-8","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"条形码识别坐标信息为空","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-7/"},"next":{"title":"自定义界面扫码黑屏现象","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-9/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-faq/scan-faq-8/scan-faq-8.md


const frontMatter = {
	title: '自定义界面扫码预览画面出现拉伸',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-8',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义界面扫码预览画面出现拉伸';

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
        id: "自定义界面扫码预览画面出现拉伸",
        children: "自定义界面扫码预览画面出现拉伸"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
        children: "XComponent"
      }), "的宽高比与自定义界面扫码接口中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#viewcontrol",
        children: "ViewControl"
      }), "的宽高比不一致，导致自定义界面扫码预览画面出现拉伸。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ViewControl的宽高比需要与XComponent的宽高比保持一致，会消除画面拉伸现象。当前支持的分辨率比例为16:9、4:3、1:1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：XComponent中width为1080(px)，height为1920(px)，则ViewControl宽度设置为1080，高度设置为1920。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { scanBarcode, customScan } from '@kit.ScanKit';\n\n@Entry\n@Component\nstruct CustomScanPage {\n  // 设置预览流高度，默认单位：px\n  @State cameraHeight: number = 1920;\n  // 设置预览流宽度，默认单位：px\n  @State cameraWidth: number = 1080;\n  private mXComponentController: XComponentController = new XComponentController();\n\n  build() {\n    Stack() {\n      XComponent({\n        id: 'componentId',\n        type: XComponentType.SURFACE,\n        controller: this.mXComponentController\n      })\n        .onLoad(() => {\n          hilog.info(0x0001, '[Scan Sample]', 'onLoad is called')\n          // 获取XComponent的surfaceId\n          let surfaceId: string = this.mXComponentController.getXComponentSurfaceId();\n          hilog.info(0x0001, 'viewControl', `onLoad surfaceId: ${surfaceId}`);\n          // 设置viewControl相应字段\n          let viewControl: customScan.ViewControl = {\n            width: this.cameraWidth,\n            height: this.cameraHeight,\n            surfaceId: surfaceId\n          };\n          try {\n            customScan.start(viewControl).then((scanResult: Array<scanBarcode.ScanResult>) => {\n              hilog.info(0x0001, '[Scan Sample]',\n                `Succeeded in getting ScanResult by promise, scanResult is ${JSON.stringify(scanResult)}`);\n            }).catch((err: BusinessError) => {\n              hilog.error(0x0001, '[Scan Sample]',\n                `Failed to get ScanResult by promise. Code: ${err.code}, message: ${err.message}`);\n            })\n          } catch (err) {\n            hilog.error(0x0001, '[Scan Sample]',\n              `Failed to start customScan. Code: ${err.code}, message: ${err.message}`);\n          }\n        })\n        .height(this.cameraHeight + 'px')\n        .width(this.cameraWidth + 'px')\n        .position({ x: 0, y: 0 })\n    }\n    .alignContent(Alignment.Bottom)\n    .height('100%')\n    .width('100%')\n    .position({ x: 0, y: 0 })\n  }\n}\n"
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