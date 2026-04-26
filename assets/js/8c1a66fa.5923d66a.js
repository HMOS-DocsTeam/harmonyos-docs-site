"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["216490"], {
912291(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_c_arkui_module_capi_oh_nativexcomponent_native_xcomponent_capi_oh_nativexcomponent_native_xcomponent_md_8c1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-c-arkui-module-capi-oh-nativexcomponent-native-xcomponent-capi-oh-nativexcomponent-native-xcomponent-md-8c1.json
var site_docs_ref_arkui_api_arkui_c_arkui_module_capi_oh_nativexcomponent_native_xcomponent_capi_oh_nativexcomponent_native_xcomponent_md_8c1_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent","title":"OH_NativeXComponent Native XComponent","description":"概述","source":"@site/docs-ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent.md","sourceDirName":"arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent","slug":"/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"OH_NativeXComponent Native XComponent","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-oh-nativexcomponent-native-xcomponent"},"sidebar":"ref","previous":{"title":"ArkUI_Accessibility","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-module/capi-arkui-accessibility/capi-arkui-accessibility"},"next":{"title":"ArkUI_EventModule","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-c/arkui-module/capi-arkui-eventmodule/capi-arkui-eventmodule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-c/arkui-module/capi-oh-nativexcomponent-native-xcomponent/capi-oh-nativexcomponent-native-xcomponent.md


const frontMatter = {
	title: 'OH_NativeXComponent Native XComponent',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-oh-nativexcomponent-native-xcomponent'
};
const contentTitle = 'OH_NativeXComponent Native XComponent';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "文件汇总",
  "id": "文件汇总",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "oh_nativexcomponent-native-xcomponent",
        children: "OH_NativeXComponent Native XComponent"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["描述ArkUI XComponent持有的Surface和触摸事件，该事件可用于EGL/OpenGLES和媒体数据输入，并显示在ArkUI XComponent上，具体使用请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines",
        children: "Native XComponent"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 8"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件汇总",
      children: "文件汇总"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h",
              children: "native_interface_xcomponent.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明用于访问Native XComponent的API。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-xcomponent-key-event-h/capi-native-xcomponent-key-event-h",
              children: "native_xcomponent_key_event.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明用于访问Native XComponent键盘事件所使用到的枚举类型。"
          })]
        })]
      })]
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