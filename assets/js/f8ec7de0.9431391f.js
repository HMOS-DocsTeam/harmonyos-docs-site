"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["278228"], {
823040(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_faq_scan_faq_19_scan_faq_19_md_f8e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-faq-scan-faq-19-scan-faq-19-md-f8e.json
var site_docs_scan_kit_guide_scan_faq_scan_faq_19_scan_faq_19_md_f8e_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-faq/scan-faq-19/scan-faq-19","title":"如何将码图背景颜色设置成透明色","description":"*问题现象*","source":"@site/docs/scan-kit-guide/scan-faq/scan-faq-19/scan-faq-19.md","sourceDirName":"scan-kit-guide/scan-faq/scan-faq-19","slug":"/scan-kit-guide/scan-faq/scan-faq-19/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-19/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"如何将码图背景颜色设置成透明色","sidebar_position":19,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-19","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义界面扫码同时调用本地图片识码时，应用概率性自动退出","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-faq/scan-faq-18/"},"next":{"title":"个人数据处理说明","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-personal-data/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-faq/scan-faq-19/scan-faq-19.md


const frontMatter = {
	title: '如何将码图背景颜色设置成透明色',
	sidebar_position: 19,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-19',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '如何将码图背景颜色设置成透明色';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
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
        id: "如何将码图背景颜色设置成透明色",
        children: "如何将码图背景颜色设置成透明色"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前码图生成不支持设置背景颜色为透明色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过图片处理将码图的背景颜色转换为透明色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码（仅供参考）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { image } from '@kit.ImageKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n/**\n * 通过传入createBarcode生成的PixelMap对象及其背景色，获取透明背景色的PixelMap对象\n *\n * @param {image.PixelMap} originalPixelMap - createBarcode生成的PixelMap对象。\n * @param {number} backgroundColor - CreateOptions设置的十六进制背景色。\n * @returns {Promise<image.PixelMap | undefined>} 成功返回新的PixelMap对象，失败则返回undefined。\n */\nasync function convertBackgroundColorToTransparent(originalPixelMap: image.PixelMap,\n  backgroundColor: number): Promise<image.PixelMap | undefined> {\n  try {\n    // 获取图像信息\n    const imageInfo: image.ImageInfo = await originalPixelMap.getImageInfo();\n\n    // 创建缓冲区以存储像素数据\n    const buffer: ArrayBuffer = new ArrayBuffer(originalPixelMap.getPixelBytesNumber());\n\n    // 将像素数据读取到缓冲区\n    originalPixelMap.readPixelsToBufferSync(buffer);\n\n    // 初始化新像素图的选项\n    const options: image.InitializationOptions = {\n      editable: true,\n      srcPixelFormat: imageInfo.pixelFormat,\n      pixelFormat: imageInfo.pixelFormat,\n      size: imageInfo.size\n    };\n\n    // 创建新的可编辑PixelMap对象\n    let newPixelMap: image.PixelMap = image.createPixelMapSync(buffer, options);\n\n    // 定义码图图片数据区域\n    const area: image.PositionArea = {\n      pixels: new ArrayBuffer(imageInfo.size.height * imageInfo.size.width * 4), // 像素数据缓冲区\n      offset: 0, // 偏移量\n      stride: imageInfo.stride, // 间距\n      region: { size: { height: imageInfo.size.height, width: imageInfo.size.width }, x: 0, y: 0 } // 区域\n    };\n\n    // 将区域数据转换为 Uint8Array\n    let areaUint8Array: Uint8Array = new Uint8Array(area.pixels);\n    let originalPixelMapUint8Array: Uint8Array = new Uint8Array(buffer);\n\n    // 从backgroundColor中提取红、绿、蓝通道的值\n    const redBg: number = (backgroundColor >> 16) & 0xFF;\n    const greenBg: number = (backgroundColor >> 8) & 0xFF;\n    const blueBg: number = backgroundColor & 0xFF;\n\n    // 遍历像素\n    for (let i = 0; i < originalPixelMapUint8Array.length; i += 4) {\n      const red: number = originalPixelMapUint8Array[i];\n      const green: number = originalPixelMapUint8Array[i + 1];\n      const blue: number = originalPixelMapUint8Array[i + 2];\n\n      // 检查像素是否为背景色\n      if (red === redBg && green === greenBg && blue === blueBg) {\n        areaUint8Array[i] = blue;\n        areaUint8Array[i  + 1] = green;\n        areaUint8Array[i + 2] = red;\n        areaUint8Array[i + 3] = 0; // 设置透明色\n      } else {\n        areaUint8Array[i] = blue;\n        areaUint8Array[i  + 1] = green;\n        areaUint8Array[i + 2] = red;\n        areaUint8Array[i + 3] = originalPixelMapUint8Array[i + 3]; // 保留原透明度\n      }\n    }\n\n    // 写入新像素数据\n    await newPixelMap.writePixels(area);\n\n    // 返回新的PixelMap对象\n    return newPixelMap;\n  } catch (err) {\n    hilog.error(0x0001, 'CreateBarcode', `Failed to convertBackgroundColorToTransparent. Code: ${err.code}.`);\n    return undefined;\n  }\n}\n"
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