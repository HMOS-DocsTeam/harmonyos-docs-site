"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["966565"], {
656093(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_struct_capi_image_nativemodule_oh_imagesourcenative_capi_image_nativemodule_oh_imagesourcenative_md_f69_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-struct-capi-image-nativemodule-oh-imagesourcenative-capi-image-nativemodule-oh-imagesourcenative-md-f69.json
var site_docs_ref_image_api_image_c_image_struct_capi_image_nativemodule_oh_imagesourcenative_capi_image_nativemodule_oh_imagesourcenative_md_f69_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative","title":"OH_ImageSourceNative","description":"概述","source":"@site/docs-ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative.md","sourceDirName":"image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative","slug":"/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"OH_ImageSourceNative","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-imagesourcenative","kit":"媒体","last_updated":"2026-04-22","slug":"capi-image-nativemodule-oh-imagesourcenative"},"sidebar":"ref","previous":{"title":"image_processing_types.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h"},"next":{"title":"OH_ImageSource_Info","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info/capi-image-nativemodule-imagesource-info"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative.md


const frontMatter = {
	title: 'OH_ImageSourceNative',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-imagesourcenative',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-image-nativemodule-oh-imagesourcenative'
};
const contentTitle = 'OH_ImageSourceNative';

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
        id: "oh_imagesourcenative",
        children: "OH_ImageSourceNative"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_ImageSourceNative\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_ImageSourceNative是native层封装的ImageSource结构体，用于创建图片数据。OH_ImageSourceNative结构体不可直接操作，而是采用函数调用方式创建、释放结构体以及操作具体字段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有多种方式创建OH_ImageSourceNative，具体如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_createfromuri",
              children: "OH_ImageSourceNative_CreateFromUri"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过uri创建OH_ImageSourceNative对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_createfromfd",
              children: "OH_ImageSourceNative_CreateFromFd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过fd创建OH_ImageSourceNative对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_createfromdata",
              children: "OH_ImageSourceNative_CreateFromData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过缓冲区数据创建OH_ImageSourceNative对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_createfromrawfile",
              children: "OH_ImageSourceNative_CreateFromRawFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过图像资源文件的RawFileDescriptor创建OH_ImageSourceNative对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_createpixelmap",
              children: "OH_ImageSourceNative_CreatePixelmap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过图片解码参数创建OH_PixelmapNative对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_createpixelmaplist",
              children: "OH_ImageSourceNative_CreatePixelmapList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过图片解码参数创建OH_PixelmapNative数组。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放OH_ImageSourceNative对象使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_release",
        children: "OH_ImageSourceNative_Release"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_ImageSourceNative结构体内容和操作方式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "int32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "delayTimeList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像延迟时间数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_getdelaytimelist",
              children: "OH_ImageSourceNative_GetDelayTimeList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图像延迟时间数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ImageSource_Info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageSource信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_getimageinfo",
              children: "OH_ImageSourceNative_GetImageInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定序号的图片信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image_String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置项"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_getimageproperty",
              children: "OH_ImageSourceNative_GetImageProperty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图片指定属性键的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image_String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置项"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_modifyimageproperty",
              children: "OH_ImageSourceNative_ModifyImageProperty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定的键修改图片属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "frameCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像帧数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_getframecount",
              children: "OH_ImageSourceNative_GetFrameCount"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图像帧数。"
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