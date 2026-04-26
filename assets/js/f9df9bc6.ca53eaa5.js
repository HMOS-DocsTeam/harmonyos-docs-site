"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["202549"], {
104907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_faq_scan_faq_17_scan_faq_17_md_f9d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-faq-scan-faq-17-scan-faq-17-md-f9d.json
var site_docs_scan_kit_guide_scan_faq_scan_faq_17_scan_faq_17_md_f9d_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-faq/scan-faq-17/scan-faq-17","title":"自定义界面扫码如何增加重试机制","description":"*问题现象*","source":"@site/docs/scan-kit-guide/scan-faq/scan-faq-17/scan-faq-17.md","sourceDirName":"scan-kit-guide/scan-faq/scan-faq-17","slug":"/scan-kit-guide/scan-faq/scan-faq-17/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-17/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"自定义界面扫码如何增加重试机制","sidebar_position":17,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-17","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"默认界面扫码/自定义界面扫码体验设计","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-16/"},"next":{"title":"自定义界面扫码同时调用本地图片识码时，应用概率性自动退出","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-18/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-faq/scan-faq-17/scan-faq-17.md


const frontMatter = {
	title: '自定义界面扫码如何增加重试机制',
	sidebar_position: 17,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-17',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义界面扫码如何增加重试机制';

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
        id: "自定义界面扫码如何增加重试机制",
        children: "自定义界面扫码如何增加重试机制"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用customScan.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscaninit",
        children: "init"
      }), "成功后，调用customScan.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstart-1",
        children: "start"
      }), "启动相机流时抛出1000500001内部错误。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以尝试增加扫码相机流重试机制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["先暂停并释放相机流（customScan.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstop",
        children: "stop"
      }), "、customScan.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanrelease",
        children: "release"
      }), "），再重启相机流（customScan.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscaninit",
        children: "init"
      }), "、customScan.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scan-api/scan-arkts/scan-customscan-api/scan-customscan-api#customscanstart-1",
        children: "start"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码（仅供参考）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { customScan, scanBarcode, scanCore } from '@kit.ScanKit';\nimport { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  @State viewControl: customScan.ViewControl = {\n    width: 1080,\n    height: 1080,\n    surfaceId: ''\n  };\n  private retryScanTimes = 0;\n  private options: scanBarcode.ScanOptions = {\n    scanTypes: [scanCore.ScanType.ALL],\n    enableMultiMode: true,\n    enableAlbum: true\n  };\n  private customScanCallbackScan: AsyncCallback<scanBarcode.ScanResult[]> =\n    (err: BusinessError, data: scanBarcode.ScanResult[]) => {\n      if (err && err.code !== 0) {\n        hilog.error(0x0001, '[Scan Sample]',\n          `An error is returned by customScan.start->CallbackScan. Code: ${err.code}`);\n        // start回调，出现1000500001内部错误时触发重启相机流\n        if (err.code === scanCore.ScanErrorCode.INTERNAL_ERROR) {\n          this.retryCamera(err);\n        }\n      } else {\n        hilog.info(0x0001, '[Scan Sample]', `customScan start callbackScan result size: ${data.length}`)\n      }\n      // 识码处理逻辑\n      // ...\n    }\n\n  // 重启相机流\n  retryCamera(err: BusinessError) {\n    if (this.retryScanTimes < 3 && err.code === scanCore.ScanErrorCode.INTERNAL_ERROR) {\n      this.retryScanTimes++;\n      let timeId = setTimeout(async () => {\n        hilog.info(0x0001, '[Scan Sample]',\n          `Retry camera start. Times: ${this.retryScanTimes}.`);\n        // 先暂停并释放相机流\n        await this.releaseCamera();\n        // 重启相机流\n        this.startCamera();\n        hilog.info(0x0001, '[Scan Sample]', 'Retry camera end.');\n        clearTimeout(timeId);\n      }, 100)\n    }\n  }\n\n  // 启动相机流\n  startCamera() {\n    try {\n      customScan.init(this.options);\n      hilog.info(0x0001, '[Scan Sample]', 'customScan->init end');\n      try {\n        customScan.start(this.viewControl, this.customScanCallbackScan);\n        hilog.info(0x0001, '[Scan Sample]', 'customScan->start end');\n      } catch (err) {\n        hilog.error(0x0001, '[Scan Sample]',\n          `Failed to customScan->start. Code: ${err.code}, message: ${err.message}`);\n      }\n    } catch (error) {\n      hilog.error(0x0001, '[Scan Sample]',\n        `Failed to customScan->init. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  // 暂停并释放相机流\n  async releaseCamera() {\n    try {\n      await customScan.stop();\n      hilog.info(0x0001, '[Scan Sample]', 'customScan->stop end');\n      try {\n        await customScan.release();\n        hilog.info(0x0001, '[Scan Sample]', 'customScan->release end');\n      } catch (err) {\n        hilog.error(0x0001, '[Scan Sample]',\n          `Failed to customScan->release. Code: ${err.code}, message: ${err.message}`);\n      }\n    } catch (err) {\n      hilog.error(0x0001, '[Scan Sample]',\n        `Failed to customScan->stop. Code: ${err.code}, message: ${err.message}`);\n    }\n  }\n\n  build() {\n  }\n}\n"
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