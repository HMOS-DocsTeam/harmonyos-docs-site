"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["133002"], {
9592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_module_capi_avscreencapture_capi_avscreencapture_md_ea6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-module-capi-avscreencapture-capi-avscreencapture-md-ea6.json
var site_docs_ref_media_api_media_c_media_module_capi_avscreencapture_capi_avscreencapture_md_ea6_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture","title":"AVScreenCapture","description":"概述","source":"@site/docs-ref/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture.md","sourceDirName":"media-api/media-c/media-module/capi-avscreencapture","slug":"/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"AVScreenCapture","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture","kit":"媒体","last_updated":"2026-04-22","slug":"capi-avscreencapture"},"sidebar":"ref","previous":{"title":"AVTranscoder","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-module/capi-avtranscoder/capi-avtranscoder"},"next":{"title":"AVSinkBase","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-module/capi-avsinkbase/capi-avsinkbase"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-module/capi-avscreencapture/capi-avscreencapture.md


const frontMatter = {
	title: 'AVScreenCapture',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-avscreencapture'
};
const contentTitle = 'AVScreenCapture';

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
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "avscreencapture",
        children: "AVScreenCapture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用本模块下的接口，应用可以完成屏幕录制的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可根据实际的开发需求，参考对应的开发指南及样例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-buffer/avscreencapture-c-basic-process",
          children: "使用AVScreenCapture录屏取码流"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/media-kit/media-kit-dev--c/media-recording-c/using-avscreencapture-for-file",
          children: "使用AVScreenCapture录屏写文件"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件汇总",
      children: "文件汇总"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-h/capi-native-avscreen-capture-h",
              children: "native_avscreen_capture.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明用于构造屏幕录制对象的API。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-base-h/capi-native-avscreen-capture-base-h",
              children: "native_avscreen_capture_base.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明用于运行屏幕录制通用的结构体、字符常量、枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-native-avscreen-capture-errors-h/capi-native-avscreen-capture-errors-h",
              children: "native_avscreen_capture_errors.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明用于运行屏幕录制过程中接口调用的错误码说明。"
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