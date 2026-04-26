"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["341055"], {
453995(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_debug_optimize_ui_development_faq_multi_thread_ui_build_faq_multi_thread_ui_build_faq_md_5d8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-debug-optimize-ui-development-faq-multi-thread-ui-build-faq-multi-thread-ui-build-faq-md-5d8.json
var site_docs_arkui_ui_debug_optimize_ui_development_faq_multi_thread_ui_build_faq_multi_thread_ui_build_faq_md_5d8_namespaceObject = JSON.parse('{"id":"arkui/ui-debug-optimize/ui-development-faq/multi-thread-ui-build-faq/multi-thread-ui-build-faq","title":"UI并行化常见问题","description":"如何获取和使用支持多线程调用的NDK接口","source":"@site/docs/arkui/ui-debug-optimize/ui-development-faq/multi-thread-ui-build-faq/multi-thread-ui-build-faq.md","sourceDirName":"arkui/ui-debug-optimize/ui-development-faq/multi-thread-ui-build-faq","slug":"/arkui/ui-debug-optimize/ui-development-faq/multi-thread-ui-build-faq/","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/multi-thread-ui-build-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"UI并行化常见问题","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-thread-ui-build-faq","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"命令式节点常见问题","permalink":"/harmonyos-docs-site/arkui/ui-debug-optimize/ui-development-faq/arkts-arkui-framenode-faq/"},"next":{"title":"窗口开发概述","permalink":"/harmonyos-docs-site/arkui/window-manager/window-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-debug-optimize/ui-development-faq/multi-thread-ui-build-faq/multi-thread-ui-build-faq.md


const frontMatter = {
	title: 'UI并行化常见问题',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-thread-ui-build-faq',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'UI并行化常见问题';

const assets = {

};



const toc = [{
  "value": "如何获取和使用支持多线程调用的NDK接口",
  "id": "如何获取和使用支持多线程调用的ndk接口",
  "level": 2
}, {
  "value": "调用多线程NDK接口返回ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD错误码",
  "id": "调用多线程ndk接口返回arkui_error_code_node_on_invalid_thread错误码",
  "level": 2
}, {
  "value": "如何保证多线程操作ArkUI组件时线程安全",
  "id": "如何保证多线程操作arkui组件时线程安全",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ui并行化常见问题",
        children: "UI并行化常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何获取和使用支持多线程调用的ndk接口",
      children: "如何获取和使用支持多线程调用的NDK接口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-h/capi-native-interface-h#arkui_nativeapivariantkind",
        children: "ArkUI_NativeAPIVariantKind"
      }), "中新增ARKUI_MULTI_THREAD_NATIVE_NODE枚举。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-h/capi-native-interface-h#oh_arkui_getmoduleinterface",
        children: "OH_ArkUI_GetModuleInterface"
      }), "接口，入参传入ARKUI_MULTI_THREAD_NATIVE_NODE，可以获取多线程NDK接口集合，完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-build-on-multi-thread#%E5%A4%9A%E7%BA%BF%E7%A8%8Bndk%E6%8E%A5%E5%8F%A3%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F",
        children: "多线程NDK接口使用方式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用多线程ndk接口返回arkui_error_code_node_on_invalid_thread错误码",
      children: "调用多线程NDK接口返回ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD错误码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用多线程NDK接口返回ARKUI_ERROR_CODE_NODE_ON_INVALID_THREAD错误码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["首先参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-build-on-multi-thread#%E5%A4%9A%E7%BA%BF%E7%A8%8Bndk%E6%8E%A5%E5%8F%A3%E9%9B%86%E5%90%88%E8%A7%84%E6%A0%BC",
        children: "多线程NDK接口集合规格"
      }), "，查看调用的接口是否支持多线程调用，之后按照如下步骤排查。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果接口只支持在UI线程调用，需要调整函数调用时机，在UI线程调用接口。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果接口支持多线程调用，报错原因是接口操作的节点处于Attached状态。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["确认节点是由多线程", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#createnode",
              children: "createNode"
            }), "接口创建的。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-use-ndk/ndk-build-on-multi-thread#%E5%A4%9A%E7%BA%BF%E7%A8%8Bndk%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8%E8%A7%84%E8%8C%83",
              children: "多线程NDK接口调用规范"
            }), "，将组件所在组件树中所有不可转换的Attached组件移除。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何保证多线程操作arkui组件时线程安全",
      children: "如何保证多线程操作ArkUI组件时线程安全"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用多线程NDK接口时，多个线程同时操作同一个组件或组件树，无法保证线程安全，需要开发者通过合理的架构设计避免出现上述情况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-build-on-multi-thread#%E5%A4%9A%E7%BA%BF%E7%A8%8Bndk%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8%E8%A7%84%E8%8C%83",
        children: "多线程NDK接口调用规范"
      }), "，按照文档中的约束使用多线程NDK接口来保证线程安全。"]
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