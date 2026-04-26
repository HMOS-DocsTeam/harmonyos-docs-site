"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["742123"], {
856154(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_common_basic_c_common_basic_module_capi_jsvm_capi_jsvm_md_9f7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-common-basic-c-common-basic-module-capi-jsvm-capi-jsvm-md-9f7.json
var site_docs_ref_common_basic_c_common_basic_module_capi_jsvm_capi_jsvm_md_9f7_namespaceObject = JSON.parse('{"id":"common-basic-c/common-basic-module/capi-jsvm/capi-jsvm","title":"JSVM","description":"概述","source":"@site/docs-ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm.md","sourceDirName":"common-basic-c/common-basic-module/capi-jsvm","slug":"/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm","permalink":"/harmonyos-docs-site/ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"JSVM","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm","kit":"公共基础能力","last_updated":"2026-04-22","slug":"capi-jsvm"},"sidebar":"ref","previous":{"title":"memory","permalink":"/harmonyos-docs-site/ref/common-basic-c/common-basic-module/capi-memory/capi-memory"},"next":{"title":"syscap_ndk.h","permalink":"/harmonyos-docs-site/ref/common-basic-c/common-basic-headerfile/syscap__ndk_8h/syscap__ndk_8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/common-basic-c/common-basic-module/capi-jsvm/capi-jsvm.md


const frontMatter = {
	title: 'JSVM',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm',
	kit: '公共基础能力',
	last_updated: '2026-04-22',
	slug: 'capi-jsvm'
};
const contentTitle = 'JSVM';

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
        id: "jsvm",
        children: "JSVM"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供标准的JavaScript引擎能力。功能概述：标准JS引擎是严格遵守ECMAScript规范的JavaScript代码执行引擎。支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://ecma262.com/",
        children: "ECMAScript规范"
      }), "定义的标准库，提供完备的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/jsvm-introduction",
        children: "C++交互JS的native API"
      }), "。通过JIT编译加速代码执行，为应用提供安全、高效的JS执行能力。标准JS引擎的能力通过一套稳定的ABI，即JSVM-API提供。JSVM-API支持动态链接到不同版本的JS引擎库，从而为开发者屏蔽掉不同引擎接口的差异。JSVM-API提供引擎生命周期管理、JS context管理、JS代码执行、JS/C++互操作、执行环境快照、codecache等能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用平台：arm64平台。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用方法：链接SDK中的libjsvm.so，并在C++代码中包含ark_runtime/jsvm.h头文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
              href: "/ref/common-basic-c/common-basic-headerfile/capi-jsvm-h/capi-jsvm-h",
              children: "jsvm.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供JSVM-API接口定义。通过API接口为开发者提供独立、标准、完整的JavaScript引擎能力，包括管理引擎生命周期、编译运行JS代码、实现JS/C++跨语言调用、拍摄快照等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/common-basic-c/common-basic-headerfile/capi-jsvm-types-h/capi-jsvm-types-h",
              children: "jsvm_types.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供JSVM-API类型定义。通过API接口为开发者提供独立、标准、完整的JavaScript引擎能力，包括管理引擎生命周期、编译运行JS代码、实现JS/C++跨语言调用、拍摄快照等。"
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