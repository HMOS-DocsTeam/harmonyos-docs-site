"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["892578"], {
652118(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkdata_api_arkdata_c_arkdata_struct_capi_rdb_oh_rdb_configv_2_capi_rdb_oh_rdb_configv_2_md_51c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkdata-api-arkdata-c-arkdata-struct-capi-rdb-oh-rdb-configv-2-capi-rdb-oh-rdb-configv-2-md-51c.json
var site_docs_ref_arkdata_api_arkdata_c_arkdata_struct_capi_rdb_oh_rdb_configv_2_capi_rdb_oh_rdb_configv_2_md_51c_namespaceObject = JSON.parse('{"id":"arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-configv2/capi-rdb-oh-rdb-configv2","title":"OH_Rdb_ConfigV2","description":"概述","source":"@site/docs-ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-configv2/capi-rdb-oh-rdb-configv2.md","sourceDirName":"arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-configv2","slug":"/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-configv2/capi-rdb-oh-rdb-configv2","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-configv2/capi-rdb-oh-rdb-configv2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":29,"frontMatter":{"title":"OH_Rdb_ConfigV2","sidebar_position":29,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-configv2","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-rdb-oh-rdb-configv2"},"sidebar":"ref","previous":{"title":"OH_Rdb_Transaction","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-transaction/capi-rdb-oh-rdb-transaction"},"next":{"title":"OH_UdmfData","permalink":"/harmonyos-docs-site/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-configv2/capi-rdb-oh-rdb-configv2.md


const frontMatter = {
	title: 'OH_Rdb_ConfigV2',
	sidebar_position: 29,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rdb-oh-rdb-configv2',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-rdb-oh-rdb-configv2'
};
const contentTitle = 'OH_Rdb_ConfigV2';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "oh_rdb_configv2",
        children: "OH_Rdb_ConfigV2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_Rdb_ConfigV2 OH_Rdb_ConfigV2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["管理关系数据库配置，与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-rdb-oh-rdb-config/capi-rdb-oh-rdb-config",
        children: "OH_Rdb_Config"
      }), "的区别是该结构体成员变量不对外暴露，使用一系列方法配置该结构体的属性，支持向量数据库。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 14"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-module/capi-rdb/capi-rdb",
        children: "RDB"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-relational-store-h/capi-relational-store-h",
        children: "relational_store.h"
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