"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["31323"], {
805185(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_struct_capi_image_nativemodule_imagesource_info_capi_image_nativemodule_imagesource_info_md_61c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-struct-capi-image-nativemodule-imagesource-info-capi-image-nativemodule-imagesource-info-md-61c.json
var site_docs_ref_image_api_image_c_image_struct_capi_image_nativemodule_imagesource_info_capi_image_nativemodule_imagesource_info_md_61c_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info/capi-image-nativemodule-imagesource-info","title":"OH_ImageSource_Info","description":"概述","source":"@site/docs-ref/image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info/capi-image-nativemodule-imagesource-info.md","sourceDirName":"image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info","slug":"/image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info/capi-image-nativemodule-imagesource-info","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info/capi-image-nativemodule-imagesource-info","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"OH_ImageSource_Info","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-imagesource-info","kit":"媒体","last_updated":"2026-04-22","slug":"capi-image-nativemodule-imagesource-info"},"sidebar":"ref","previous":{"title":"OH_ImageSourceNative","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative"},"next":{"title":"OH_DecodingOptionsForPicture","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-decodingoptionsforpicture/pi-image-nativemodule-oh-decodingoptionsforpicture"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info/capi-image-nativemodule-imagesource-info.md


const frontMatter = {
	title: 'OH_ImageSource_Info',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-imagesource-info',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-image-nativemodule-imagesource-info'
};
const contentTitle = 'OH_ImageSource_Info';

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
        id: "oh_imagesource_info",
        children: "OH_ImageSource_Info"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_ImageSource_Info\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_ImageSource_Info是native层封装的ImageSource信息结构体，OH_ImageSource_Info结构体不可直接操作，而是采用函数调用方式创建、释放结构体以及操作具体字段。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建OH_ImageSource_Info对象使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourceinfo_create",
        children: "OH_ImageSourceInfo_Create"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放OH_ImageSource_Info对象使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourceinfo_release",
        children: "OH_ImageSourceInfo_Release"
      }), "函数。调用该接口之后，与OH_ImageSource_Info结构体相关的属性均会被释放。因此在调用该接口前，请务必确认相关属性已不再被需要或对相关属性已完成深拷贝操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_ImageSource_Info结构体内容和操作方式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字段描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "操作函数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "函数描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片宽度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourceinfo_getwidth",
              children: "OH_ImageSourceInfo_GetWidth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图片的宽。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片高度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourceinfo_getheight",
              children: "OH_ImageSourceInfo_GetHeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图片的高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "isHdr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否为高动态范围（HDR）的信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourceinfo_getdynamicrange",
              children: "OH_ImageSourceInfo_GetDynamicRange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图片是否为高动态范围的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_MimeType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mimeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片源的MIME类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourceinfo_getmimetype",
              children: "OH_ImageSourceInfo_GetMimetype"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图片的MimeType。"
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