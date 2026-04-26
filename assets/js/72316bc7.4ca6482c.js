"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["267639"], {
831063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_xengine_kit_guide_xengine_kit_subpass_shading_xengine_kit_subpass_shading_md_723_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-xengine-kit-guide-xengine-kit-subpass-shading-xengine-kit-subpass-shading-md-723.json
var site_docs_xengine_kit_guide_xengine_kit_subpass_shading_xengine_kit_subpass_shading_md_723_namespaceObject = JSON.parse('{"id":"xengine-kit-guide/xengine-kit-subpass-shading/xengine-kit-subpass-shading","title":"Subpass Shading","description":"随着游戏场景的复杂化，越来越多的光照效果被应用到游戏场景中，随之也带来大量的光照计算以及带宽消耗。目前通过Tile-Based Deferred Rendering（TBDR）和Forward+等方法可以解决大量光照的渲染时间消耗，但是大量带宽的占用问题还是没有解决，Subpass Shading能力主要减少计算过程中的读写从而减少带宽的占用。","source":"@site/docs/xengine-kit-guide/xengine-kit-subpass-shading/xengine-kit-subpass-shading.md","sourceDirName":"xengine-kit-guide/xengine-kit-subpass-shading","slug":"/xengine-kit-guide/xengine-kit-subpass-shading/","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-subpass-shading/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Subpass Shading","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-subpass-shading","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自适应VRS","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-adaptive-vrs/"},"next":{"title":"光线追踪反射","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-rt-reflection/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/xengine-kit-guide/xengine-kit-subpass-shading/xengine-kit-subpass-shading.md


const frontMatter = {
	title: 'Subpass Shading',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/xengine-kit-subpass-shading',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = 'Subpass Shading';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "subpass-shading",
        children: "Subpass Shading"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随着游戏场景的复杂化，越来越多的光照效果被应用到游戏场景中，随之也带来大量的光照计算以及带宽消耗。目前通过Tile-Based Deferred Rendering（TBDR）和Forward+等方法可以解决大量光照的渲染时间消耗，但是大量带宽的占用问题还是没有解决，Subpass Shading能力主要减少计算过程中的读写从而减少带宽的占用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图说明Subpass Shading节省渲染通道1和Compute Pass从Device memory上面的一次读写带宽。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Forward+读取过程"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(616631)/* ["default"] */.A) + "",
        width: "525",
        height: "274"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " Subpass Shading读取过程"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(999132)/* ["default"] */.A) + "",
        width: "525",
        height: "252"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的设备类型：Phone，从5.0.2(14)版本开始，新增支持Tablet、PC/2in1设备，从5.1.0(18)版本开始新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过Vulkan扩展接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://registry.khronos.org/vulkan/specs/latest/man/html/VK_HUAWEI_subpass_shading.html",
        children: "VK_HUAWEI_subpass_shading"
      }), "提供Subpass Shading API，该扩展支持在Subpass中使用Compute Shader，并在Compute Shader中使用SubpassLoad从Tile buffer中直接读取数据，可用于降低DDR带宽，适用于TBDR和Forward+管线。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Subpass Shading能力具体使用请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/xengine-samplecode-subpass-shading-demo-cpp",
        children: "Demo（GPU加速引擎-Subpass Shading）"
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
616631(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478739-5219ddd844b0de119c125a5ab6921b54.png");

},
999132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799090-3fdc4b4394d814fb730d302d8eb0f2bc.png");

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