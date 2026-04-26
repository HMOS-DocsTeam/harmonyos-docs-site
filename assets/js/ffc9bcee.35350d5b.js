"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["287693"], {
313532(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_camera_api_camera_c_camera_struct_capi_oh_camera_photooutput_callbacks_capi_oh_camera_photooutput_callbacks_md_ffc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-camera-api-camera-c-camera-struct-capi-oh-camera-photooutput-callbacks-capi-oh-camera-photooutput-callbacks-md-ffc.json
var site_docs_ref_camera_api_camera_c_camera_struct_capi_oh_camera_photooutput_callbacks_capi_oh_camera_photooutput_callbacks_md_ffc_namespaceObject = JSON.parse('{"id":"camera-api/camera-c/camera-struct/capi-oh-camera-photooutput-callbacks/capi-oh-camera-photooutput-callbacks","title":"PhotoOutput_Callbacks","description":"概述","source":"@site/docs-ref/camera-api/camera-c/camera-struct/capi-oh-camera-photooutput-callbacks/capi-oh-camera-photooutput-callbacks.md","sourceDirName":"camera-api/camera-c/camera-struct/capi-oh-camera-photooutput-callbacks","slug":"/camera-api/camera-c/camera-struct/capi-oh-camera-photooutput-callbacks/capi-oh-camera-photooutput-callbacks","permalink":"/harmonyos-docs-site/ref/camera-api/camera-c/camera-struct/capi-oh-camera-photooutput-callbacks/capi-oh-camera-photooutput-callbacks","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":33,"frontMatter":{"title":"PhotoOutput_Callbacks","sidebar_position":33,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-photooutput-callbacks","kit":"媒体","last_updated":"2026-04-22","slug":"capi-oh-camera-photooutput-callbacks"},"sidebar":"ref","previous":{"title":"OH_PhotoNative","permalink":"/harmonyos-docs-site/ref/camera-api/camera-c/camera-struct/capi-oh-camera-oh-photonative/capi-oh-camera-oh-photonative"},"next":{"title":"Camera_PhotoOutput","permalink":"/harmonyos-docs-site/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-photooutput/capi-oh-camera-camera-photooutput"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/camera-api/camera-c/camera-struct/capi-oh-camera-photooutput-callbacks/capi-oh-camera-photooutput-callbacks.md


const frontMatter = {
	title: 'PhotoOutput_Callbacks',
	sidebar_position: 33,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-photooutput-callbacks',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-oh-camera-photooutput-callbacks'
};
const contentTitle = 'PhotoOutput_Callbacks';

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
        id: "photooutput_callbacks",
        children: "PhotoOutput_Callbacks"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct PhotoOutput_Callbacks {...} PhotoOutput_Callbacks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拍照输出的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera",
        children: "OH_Camera"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h",
        children: "photo_output.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h#oh_photooutput_onframestart",
              children: "OH_PhotoOutput_OnFrameStart"
            }), " onFrameStart"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拍照输出帧启动事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h#oh_photooutput_onframeshutter",
              children: "OH_PhotoOutput_OnFrameShutter"
            }), " onFrameShutter"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拍照输出帧快门事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h#oh_photooutput_onframeend",
              children: "OH_PhotoOutput_OnFrameEnd"
            }), " onFrameEnd"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拍照输出帧结束事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h#oh_photooutput_onerror",
              children: "OH_PhotoOutput_OnError"
            }), " onError"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拍照输出错误事件。"
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