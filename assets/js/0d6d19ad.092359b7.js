"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["993833"], {
283599(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_library_api_media_library_c_media_library_struct_capi_mediaassetmanager_medialibrary_requestoptions_capi_mediaassetmanager_medialibrary_requestoptions_md_0d6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-library-api-media-library-c-media-library-struct-capi-mediaassetmanager-medialibrary-requestoptions-capi-mediaassetmanager-medialibrary-requestoptions-md-0d6.json
var site_docs_ref_media_library_api_media_library_c_media_library_struct_capi_mediaassetmanager_medialibrary_requestoptions_capi_mediaassetmanager_medialibrary_requestoptions_md_0d6_namespaceObject = JSON.parse('{"id":"media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-medialibrary-requestoptions/capi-mediaassetmanager-medialibrary-requestoptions","title":"MediaLibrary_RequestOptions","description":"概述","source":"@site/docs-ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-medialibrary-requestoptions/capi-mediaassetmanager-medialibrary-requestoptions.md","sourceDirName":"media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-medialibrary-requestoptions","slug":"/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-medialibrary-requestoptions/capi-mediaassetmanager-medialibrary-requestoptions","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-medialibrary-requestoptions/capi-mediaassetmanager-medialibrary-requestoptions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"MediaLibrary_RequestOptions","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestoptions","kit":"媒体","last_updated":"2026-04-22","slug":"capi-mediaassetmanager-medialibrary-requestoptions"},"sidebar":"ref","previous":{"title":"OH_MediaAsset","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaasset/capi-mediaassetmanager-oh-mediaasset"},"next":{"title":"媒体库错误码","permalink":"/harmonyos-docs-site/ref/media-library-api/media-library-errcode/errorcode-medialibrary/errorcode-medialibrary"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-medialibrary-requestoptions/capi-mediaassetmanager-medialibrary-requestoptions.md


const frontMatter = {
	title: 'MediaLibrary_RequestOptions',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mediaassetmanager-medialibrary-requestoptions',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-mediaassetmanager-medialibrary-requestoptions'
};
const contentTitle = 'MediaLibrary_RequestOptions';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "成员变量",
  "id": "成员变量",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
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
        id: "medialibrary_requestoptions",
        children: "MediaLibrary_RequestOptions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct MediaLibrary_RequestOptions {...} MediaLibrary_RequestOptions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求策略模式配置项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此结构体为媒体资源请求策略模式配置项。"
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
        href: "/ref/media-library-api/media-library-c/media-library-module/capi-mediaassetmanager/capi-mediaassetmanager",
        children: "MediaAssetManager"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h",
        children: "media_asset_base_capi.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-headerfile/capi-media-asset-base-capi-h/capi-media-asset-base-capi-h#medialibrary_deliverymode",
              children: "MediaLibrary_DeliveryMode"
            }), " deliveryMode"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求资源分发模式，可以指定对于该资源的请求策略。"
          })]
        })
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