"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["687496"], {
120704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ar_engine_api_arengine_capi_arengine_header_struct_arengine_struct_arengine_struct_clipplanedistance_arengine_struct_clipplanedistance_md_05f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ar-engine-api-arengine-capi-arengine-header-struct-arengine-struct-arengine-struct-clipplanedistance-arengine-struct-clipplanedistance-md-05f.json
var site_docs_ref_ar_engine_api_arengine_capi_arengine_header_struct_arengine_struct_arengine_struct_clipplanedistance_arengine_struct_clipplanedistance_md_05f_namespaceObject = JSON.parse('{"id":"ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-clipplanedistance/arengine-struct-clipplanedistance","title":"AREngine_ClipPlaneDistance","description":"概述","source":"@site/docs-ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-clipplanedistance/arengine-struct-clipplanedistance.md","sourceDirName":"ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-clipplanedistance","slug":"/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-clipplanedistance/arengine-struct-clipplanedistance","permalink":"/harmonyos-docs-site/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-clipplanedistance/arengine-struct-clipplanedistance","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"AREngine_ClipPlaneDistance","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-struct-clipplanedistance","kit":"图形","last_updated":"2026-04-22","slug":"arengine-struct-clipplanedistance"},"sidebar":"ref","previous":{"title":"AREngine_ARAugmentedImageSource","permalink":"/harmonyos-docs-site/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-araugmentedimagesource/arengine-struct-araugmentedimagesource"},"next":{"title":"AREngine_ARSemanticDensePointData","permalink":"/harmonyos-docs-site/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-arsemanticdensepointdata/arengine-struct-arsemanticdensepointdata"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-struct/arengine-struct-clipplanedistance/arengine-struct-clipplanedistance.md


const frontMatter = {
	title: 'AREngine_ClipPlaneDistance',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-struct-clipplanedistance',
	kit: '图形',
	last_updated: '2026-04-22',
	slug: 'arengine-struct-clipplanedistance'
};
const contentTitle = 'AREngine_ClipPlaneDistance';

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
}, {
  "value": "结构体成员变量说明",
  "id": "结构体成员变量说明",
  "level": 2
}, {
  "value": "far",
  "id": "far",
  "level": 3
}, {
  "value": "near",
  "id": "near",
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
        id: "arengine_clipplanedistance",
        children: "AREngine_ClipPlaneDistance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "裁剪平面距离数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine#hms_arengine_arcamera_getprojectionmatrix",
        children: "HMS_AREngine_ARCamera_GetProjectionMatrix"
      }), "接口输入。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-modular/arengine-capi-arengine/arengine-capi-arengine",
        children: "AR Engine"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ar-engine-api/arengine-capi/arengine-header-struct/arengine-header/arengine-header-file/arengine-header-file",
        children: "ar_engine_core.h"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "成员变量",
      children: "成员变量"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#near",
              children: "near"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenGL近裁剪平面距离，以m为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["float ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#far",
              children: "far"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenGL远裁剪平面距离，以m为单位。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "结构体成员变量说明",
      children: "结构体成员变量说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "far",
      children: "far"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float AREngine_ClipPlaneDistance::far\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenGL远裁剪平面距离，以m为单位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "near",
      children: "near"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "float AREngine_ClipPlaneDistance::near\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenGL近裁剪平面距离，以m为单位。"
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