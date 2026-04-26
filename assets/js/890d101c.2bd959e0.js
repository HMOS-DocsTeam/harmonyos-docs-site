"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["488194"], {
339046(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_struct_capi_videoprocessing_oh_videoprocessing_capi_videoprocessing_oh_videoprocessing_md_890_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-struct-capi-videoprocessing-oh-videoprocessing-capi-videoprocessing-oh-videoprocessing-md-890.json
var site_docs_ref_media_api_media_c_media_struct_capi_videoprocessing_oh_videoprocessing_capi_videoprocessing_oh_videoprocessing_md_890_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing","title":"OH_VideoProcessing","description":"概述","source":"@site/docs-ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing.md","sourceDirName":"media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing","slug":"/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"title":"OH_VideoProcessing","sidebar_position":40,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-videoprocessing-oh-videoprocessing","kit":"媒体","last_updated":"2026-04-22","slug":"capi-videoprocessing-oh-videoprocessing"},"sidebar":"ref","previous":{"title":"VideoProcessing_ColorSpaceInfo","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-struct/api-videoprocessing-videoprocessing-colorspaceinfo/api-videoprocessing-videoprocessing-colorspaceinfo"},"next":{"title":"NativeWindow","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-struct/capi-videoprocessing-nativewindow/capi-videoprocessing-nativewindow"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing.md


const frontMatter = {
	title: 'OH_VideoProcessing',
	sidebar_position: 40,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-videoprocessing-oh-videoprocessing',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-videoprocessing-oh-videoprocessing'
};
const contentTitle = 'OH_VideoProcessing';

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
        id: "oh_videoprocessing",
        children: "OH_VideoProcessing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_VideoProcessing OH_VideoProcessing\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义视频处理对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义一个OH_VideoProcessing空指针，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_create",
        children: "OH_VideoProcessing_Create"
      }), "创建视频处理实例，该指针在创建实例之前必须为空。用户可以对不同的处理类型创建不同的视频处理实例。"]
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
        href: "/ref/media-api/media-c/media-module/capi-videoprocessing/capi-videoprocessing",
        children: "VideoProcessing"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h",
        children: "video_processing_types.h"
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