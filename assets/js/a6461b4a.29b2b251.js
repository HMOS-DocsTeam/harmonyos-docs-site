"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["161501"], {
589317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_faq_scan_faq_14_scan_faq_14_md_a64_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-faq-scan-faq-14-scan-faq-14-md-a64.json
var site_docs_scan_kit_guide_scan_faq_scan_faq_14_scan_faq_14_md_a64_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-faq/scan-faq-14/scan-faq-14","title":"如何主动通过手势缩放变焦比","description":"*问题现象*","source":"@site/docs/scan-kit-guide/scan-faq/scan-faq-14/scan-faq-14.md","sourceDirName":"scan-kit-guide/scan-faq/scan-faq-14","slug":"/scan-kit-guide/scan-faq/scan-faq-14/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-14/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"如何主动通过手势缩放变焦比","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-14","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"H5场景如何接入扫码","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-13/"},"next":{"title":"自定义界面扫码如何实现扫码框","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-15/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-faq/scan-faq-14/scan-faq-14.md


const frontMatter = {
	title: '如何主动通过手势缩放变焦比',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-14',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '如何主动通过手势缩放变焦比';

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
        id: "如何主动通过手势缩放变焦比",
        children: "如何主动通过手势缩放变焦比"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义界面扫码如何主动通过手势缩放相机流。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-combined-gestures",
        children: "组合手势"
      }), "接口设置变焦比setZoom(zoomValue : number): void。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考下面示例代码，在手势缩放过程和手势缩放结束的接口中都可以设置变焦比变化："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { customScan } from '@kit.ScanKit';\n\nconst TAG: string = '[Scan Sample]';\nconst MIN_ZOOM_RATIO: number = 1; // 例如：变焦比最小限制为1\nconst MAX_ZOOM_RATIO: number = 4; // 例如：变焦比最大限制为4\n\n@Entry\n@Component\nstruct Index {\n  private baseZoom: number = 1; // 当前的变焦比\n  private zoomRatio: number = 1; // 操作后的变焦比\n\n  build() {\n    Column() {\n      // 绑定手势\n    }.gesture(PinchGesture({ fingers: 2 })\n      .onActionStart(() => {\n        // 捏合手势开始\n        hilog.info(0x0001, TAG, 'Pinch start');\n        this.pinchGestureStart();\n      })\n      .onActionUpdate((event: GestureEvent) => {\n        if (event && event.scale) {\n          // 捏合手势更新\n          this.pinchGestureUpdate(event.scale);\n        }\n      })\n      .onActionEnd(() => {\n        // 捏合手势结束\n        hilog.info(0x0001, TAG, 'Pinch end');\n      })\n    )\n  }\n\n  /**\n   * 获取当前的变焦比。\n   * @returns {number} 当前的变焦比。\n   */\n  getZoom(): number {\n    let zoom = 1;\n    try {\n      zoom = customScan.getZoom();\n      hilog.info(0x0001, TAG, `getZoom end, zoom: ${zoom}`);\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to getZoom. Code: ${err.code}, message: ${err?.message}`);\n    }\n    return zoom;\n  }\n\n  /**\n   * 设置变焦比。\n   * @param {number} zoomRatio - 要设置的变焦比。\n   */\n  setZoom(zoomRatio: number): void {\n    try {\n      customScan.setZoom(zoomRatio);\n      hilog.info(0x0001, TAG, `setZoom end, zoomRatio: ${zoomRatio}`);\n    } catch (err) {\n      hilog.error(0x0001, TAG, `Failed to setZoom. Code: ${err.code}, message: ${err?.message}`);\n    }\n  }\n\n  /**\n   * 处理捏合手势的开始事件，记录初始变焦比。\n   */\n  pinchGestureStart(): void {\n    this.baseZoom = this.getZoom();\n    this.zoomRatio = this.baseZoom;\n    hilog.info(0x0001, TAG, `pinchGestureStart. baseZoom: ${this.baseZoom}`);\n  }\n\n  /**\n   * 处理捏合手势的更新事件，根据手势缩放比例更新当前变焦比。\n   * @param {number} scale - 当前捏合手势的缩放比例。\n   */\n  public pinchGestureUpdate(scale: number): void {\n    hilog.info(0x0001, TAG, `pinchGestureUpdate. scale: ${scale}`);\n    let tmpZoom: number = scale * this.baseZoom;\n    if (scale > 1) {\n      if (tmpZoom <= MAX_ZOOM_RATIO) {\n        this.updateZoom(tmpZoom);\n      }\n    } else {\n      if (tmpZoom < MIN_ZOOM_RATIO) {\n        tmpZoom = MIN_ZOOM_RATIO;\n      }\n      this.updateZoom(tmpZoom);\n    }\n  }\n\n  /**\n   * 更新当前变焦比，如果变化大于阈值0.01则进行设置。\n   * @param {number} tmpZoom - 临时计算的变焦比。\n   */\n  public updateZoom(tmpZoom: number): void {\n    if (Math.abs(tmpZoom - this.zoomRatio) > 0.01) {\n      hilog.info(0x0001, TAG, `updateZoom. tmpZoom: ${tmpZoom}`);\n      this.zoomRatio = tmpZoom;\n      this.setZoom(this.zoomRatio);\n    }\n  }\n}\n"
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