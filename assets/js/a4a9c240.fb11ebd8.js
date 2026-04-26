"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["885450"], {
596999(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkweb_api_arkweb_c_arkweb_struct_capi_web_arkweb_resourcerequest_capi_web_arkweb_resourcerequest_md_a4a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkweb-api-arkweb-c-arkweb-struct-capi-web-arkweb-resourcerequest-capi-web-arkweb-resourcerequest-md-a4a.json
var site_docs_ref_arkweb_api_arkweb_c_arkweb_struct_capi_web_arkweb_resourcerequest_capi_web_arkweb_resourcerequest_md_a4a_namespaceObject = JSON.parse('{"id":"arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-resourcerequest/capi-web-arkweb-resourcerequest","title":"ArkWeb_ResourceRequest_","description":"概述","source":"@site/docs-ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-resourcerequest/capi-web-arkweb-resourcerequest.md","sourceDirName":"arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-resourcerequest","slug":"/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-resourcerequest/capi-web-arkweb-resourcerequest","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-resourcerequest/capi-web-arkweb-resourcerequest","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"ArkWeb_ResourceRequest_","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-resourcerequest","kit":"应用框架","last_updated":"2026-04-22","slug":"capi-web-arkweb-resourcerequest"},"sidebar":"ref","previous":{"title":"ArkWeb_Response_","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-response/capi-web-arkweb-response"},"next":{"title":"ArkWeb_RequestHeaderList_","permalink":"/harmonyos-docs-site/ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-requestheaderlist/capi-web-arkweb-requestheaderlist"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkweb-api/arkweb-c/arkweb-struct/capi-web-arkweb-resourcerequest/capi-web-arkweb-resourcerequest.md


const frontMatter = {
	title: 'ArkWeb_ResourceRequest_',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-resourcerequest',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'capi-web-arkweb-resourcerequest'
};
const contentTitle = 'ArkWeb_ResourceRequest_';

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
        id: "arkweb_resourcerequest_",
        children: "ArkWeb_ResourceRequest_"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct ArkWeb_ResourceRequest_ ArkWeb_ResourceRequest\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对应内核的一个请求，可以通过OH_ArkWebResourceRequest_系列接口获取请求的URL、method、post data以及其他信息。如通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-scheme-handler-h/capi-arkweb-scheme-handler-h#oh_arkwebresourcerequest_geturl",
        children: "OH_ArkWebResourceRequest_GetUrl"
      }), "获取请求的URL。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-module/capi-web/capi-web",
        children: "Web"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-c/arkweb-headerfile/capi-arkweb-scheme-handler-h/capi-arkweb-scheme-handler-h",
        children: "arkweb_scheme_handler.h"
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