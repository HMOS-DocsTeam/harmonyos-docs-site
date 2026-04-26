"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["843938"], {
656173(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_faqs_cannkit_faqs_4_cannkit_faqs_4_md_1f3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-faqs-cannkit-faqs-4-cannkit-faqs-4-md-1f3.json
var site_docs_cann_kit_guide_cannkit_faqs_cannkit_faqs_4_cannkit_faqs_4_md_1f3_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-faqs/cannkit-faqs-4/cannkit-faqs-4","title":"如何处理OMG离线模型输出算子类型错误？","description":"Caffe网络中具有相同类型名但计算功能不同的层。比如DetectionOutput层，需要使用算子映射指明为FSRDetectionOutput、SSDDetectionOutput等检测算子类型，否则OMG生成离线模型会执行失败。为了避免出现错误，以下两种方案二选一即可。","source":"@site/docs/cann-kit-guide/cannkit-faqs/cannkit-faqs-4/cannkit-faqs-4.md","sourceDirName":"cann-kit-guide/cannkit-faqs/cannkit-faqs-4","slug":"/cann-kit-guide/cannkit-faqs/cannkit-faqs-4/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-faqs/cannkit-faqs-4/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"如何处理OMG离线模型输出算子类型错误？","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-faqs-4","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"推理函数支持的数据格式有哪些？","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-faqs/cannkit-faqs-3/"},"next":{"title":"算法在设计模型时，如何确认哪些算子在CANN上性能较优？","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-faqs/cannkit-faqs-5/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-faqs/cannkit-faqs-4/cannkit-faqs-4.md


const frontMatter = {
	title: '如何处理OMG离线模型输出算子类型错误？',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-faqs-4',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '如何处理OMG离线模型输出算子类型错误？';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "如何处理omg离线模型输出算子类型错误",
        children: "如何处理OMG离线模型输出算子类型错误？"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Caffe网络中具有相同类型名但计算功能不同的层。比如DetectionOutput层，需要使用算子映射指明为FSRDetectionOutput、SSDDetectionOutput等检测算子类型，否则OMG生成离线模型会执行失败。为了避免出现错误，以下两种方案二选一即可。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["方案1：可以在OMG命令中加入--op_name_map参数，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cann-kit-guide/cannkit-model-conversion/cannkit-offline-model-conversion/cannkit-overall-parameter",
            children: "OMG参数"
          }), "中op_name_map参数设置。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方案2：可以在原始网络proto模型文件中将输出算子类型指定为SSDDetectionOutput等算子类型，如下图所示。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图1"
            })
          }), " 输出算子类型修改前（左）和修改后（右）"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(615206)/* ["default"] */.A) + "",
            width: "867",
            height: "369"
          })
        }), "\n"]
      }), "\n"]
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
615206(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799644-e37cc57bcff4b9c1b6b60260faa2426e.png");

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