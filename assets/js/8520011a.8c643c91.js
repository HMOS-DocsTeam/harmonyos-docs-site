"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["377432"], {
456166(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_struct_capi_image_nativemodule_oh_decodingoptions_capi_image_nativemodule_oh_decodingoptions_md_852_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-struct-capi-image-nativemodule-oh-decodingoptions-capi-image-nativemodule-oh-decodingoptions-md-852.json
var site_docs_ref_image_api_image_c_image_struct_capi_image_nativemodule_oh_decodingoptions_capi_image_nativemodule_oh_decodingoptions_md_852_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions","title":"OH_DecodingOptions","description":"概述","source":"@site/docs-ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions.md","sourceDirName":"image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions","slug":"/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"OH_DecodingOptions","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-decodingoptions","kit":"媒体","last_updated":"2026-04-22","slug":"capi-image-nativemodule-oh-decodingoptions"},"sidebar":"ref","previous":{"title":"OH_DecodingOptionsForPicture","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-decodingoptionsforpicture/pi-image-nativemodule-oh-decodingoptionsforpicture"},"next":{"title":"OH_PixelmapNative","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions.md


const frontMatter = {
	title: 'OH_DecodingOptions',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-decodingoptions',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-image-nativemodule-oh-decodingoptions'
};
const contentTitle = 'OH_DecodingOptions';

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
        id: "oh_decodingoptions",
        children: "OH_DecodingOptions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct OH_DecodingOptions OH_DecodingOptions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OH_DecodingOptions是native层封装的解码选项参数结构体，用于设置解码选项参数，在创建Pixelmap时作为入参传入，详细信息见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_createpixelmap",
        children: "OH_ImageSourceNative_CreatePixelmap"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_DecodingOptions结构体不可直接操作，而是采用函数调用方式创建、释放结构体以及操作具体字段。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建OH_DecodingOptions对象使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_decodingoptions_create",
        children: "OH_DecodingOptions_Create"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放OH_DecodingOptions对象使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_decodingoptions_release",
        children: "OH_DecodingOptions_Release"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_DecodingOptions结构体内容和操作方式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段获取函数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段设置函数"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pixelFormat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "像素格式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGBA_8888"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_decodingoptions_getpixelformat",
              children: "OH_DecodingOptions_GetPixelFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_decodingoptions_setpixelformat",
              children: "OH_DecodingOptions_SetPixelFormat"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码图片序号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_decodingoptions_getindex",
              children: "OH_DecodingOptions_GetIndex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_decodingoptions_setindex",
              children: "OH_DecodingOptions_SetIndex"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rotate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转角度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单位为deg, 默认值为0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_decodingoptions_getrotate",
              children: "OH_DecodingOptions_GetRotate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_decodingoptions_setrotate",
              children: "OH_DecodingOptions_SetRotate"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image_Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "desiredSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望输出大小"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认为原始图片尺寸"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_decodingoptions_getdesiredsize",
              children: "OH_DecodingOptions_GetDesiredSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_decodingoptions_setdesiredsize",
              children: "OH_DecodingOptions_SetDesiredSize"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image_Region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "desiredRegion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码区域"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认为完整图片大小的区域"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_decodingoptions_getdesiredregion",
              children: "OH_DecodingOptions_GetDesiredRegion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_decodingoptions_setdesiredregion",
              children: "OH_DecodingOptions_SetDesiredRegion"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "desiredDynamicRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望动态范围"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_decodingoptions_getdesireddynamicrange",
              children: "OH_DecodingOptions_GetDesiredDynamicRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_decodingoptions_setdesireddynamicrange",
              children: "OH_DecodingOptions_SetDesiredDynamicRange"
            })
          })]
        })]
      })]
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
        href: "/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule",
        children: "Image_NativeModule"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "所在头文件："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h",
        children: "image_source_native.h"
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