"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["941149"], {
545907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_vulkan_guide_vulkan_guides_vulkan_overview_vulkan_overview_md_468_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-vulkan-guide-vulkan-guides-vulkan-overview-vulkan-overview-md-468.json
var site_docs_ref_vulkan_guide_vulkan_guides_vulkan_overview_vulkan_overview_md_468_namespaceObject = JSON.parse('{"id":"vulkan-guide/vulkan-guides/vulkan-overview/vulkan-overview","title":"Vulkan开发概述","description":"Vulkan是一套用来做2D和3D渲染的图形应用程序接口，在HarmonyOS中，新增两组扩展VK\\\\OHOS\\\\surface和VK\\\\OHOS\\\\external\\\\_memory。","source":"@site/docs-ref/vulkan-guide/vulkan-guides/vulkan-overview/vulkan-overview.md","sourceDirName":"vulkan-guide/vulkan-guides/vulkan-overview","slug":"/vulkan-guide/vulkan-guides/vulkan-overview/vulkan-overview","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan-guides/vulkan-overview/vulkan-overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Vulkan开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vulkan-overview","kit":"标准库","last_updated":"2026-04-22","slug":"vulkan-overview"},"sidebar":"ref","previous":{"title":"zlib","permalink":"/harmonyos-docs-site/ref/zlib/zlib"},"next":{"title":"Vulkan Surface开发指导","permalink":"/harmonyos-docs-site/ref/vulkan-guide/vulkan-guides/vulkan-guidelines/vulkan-guidelines"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/vulkan-guide/vulkan-guides/vulkan-overview/vulkan-overview.md


const frontMatter = {
	title: 'Vulkan开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vulkan-overview',
	kit: '标准库',
	last_updated: '2026-04-22',
	slug: 'vulkan-overview'
};
const contentTitle = 'Vulkan开发概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "vulkan开发概述",
        children: "Vulkan开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vulkan是一套用来做2D和3D渲染的图形应用程序接口，在HarmonyOS中，新增两组扩展VK_OHOS_surface和VK_OHOS_external_memory。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中通过扩展VK_OHOS_surface相关的API创建出来的VkSurfaceKHR会对接到本机窗口（OHNativeWindow）模块，实现本机缓冲区（OHNativeBuffer）的轮转，用于屏幕显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "而扩展VK_OHOS_external_memory用于在GPU Vulkan环境下与HarmonyOS的OHNativeBuffer之间做零拷贝的内存共享，典型场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "相机/摄像头流水线：Camera产出OHNativeBuffer后直接在Vulkan中采样或作为渲染目标。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "视频解码器与渲染器零拷贝：解码器输出OHNativeBuffer，直接导入Vulkan做后处理或合成。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Surface/OHNativeWindow互操作：把OHNativeWindow/Surface的Buffer导入Vulkan，或把Vulkan的渲染结果导出成OHNativeBuffer供系统（例如RenderService）或其他客户端使用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多API互操作：与OpenGL/EGL、Vulkan共用同一OHNativeBuffer做跨API资源共享（零拷贝）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["后续更多Vulkan的用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.vulkan.org/",
        children: "Vulkan官方网站"
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