"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["651134"], {
257622(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_struct_capi_image_nativemodule_oh_pixelmapnative_capi_image_nativemodule_oh_pixelmapnative_md_d87_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-struct-capi-image-nativemodule-oh-pixelmapnative-capi-image-nativemodule-oh-pixelmapnative-md-d87.json
var site_docs_ref_image_api_image_c_image_struct_capi_image_nativemodule_oh_pixelmapnative_capi_image_nativemodule_oh_pixelmapnative_md_d87_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative","title":"OH_PixelmapNative","description":"概述","source":"@site/docs-ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative.md","sourceDirName":"image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative","slug":"/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"OH_PixelmapNative","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmapnative","kit":"媒体","last_updated":"2026-04-22","slug":"capi-image-nativemodule-oh-pixelmapnative"},"sidebar":"ref","previous":{"title":"OH_DecodingOptions","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions"},"next":{"title":"OH_NativeBuffer","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/ge-nativemodule-image-nativemodule-oh-nativebuffer/ge-nativemodule-image-nativemodule-oh-nativebuffer"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative.md


const frontMatter = {
	title: 'OH_PixelmapNative',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmapnative',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-image-nativemodule-oh-pixelmapnative'
};
const contentTitle = 'OH_PixelmapNative';

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
        id: "oh_pixelmapnative",
        children: "OH_PixelmapNative"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct OH_PixelmapNative\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_PixelmapNative结构体是native层封装的图像解码后无压缩的位图格式结构体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数创建OH_PixelmapNative使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_createpixelmap",
        children: "OH_PixelmapNative_CreatePixelmap"
      }), "函数，默认采用BGRA_8888格式处理数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放OH_PixelmapNative对象使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_release",
        children: "OH_PixelmapNative_Release"
      }), "函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_PixelmapNative结构体内容和操作方式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像像素数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_readpixels",
              children: "OH_PixelmapNative_ReadPixels"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取图像像素数据，结果写入ArrayBuffer里。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像像素数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_writepixels",
              children: "OH_PixelmapNative_WritePixels"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取缓冲区中的图片数据，结果写入PixelMap中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Pixelmap_ImageInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "imageInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像像素信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_getimageinfo",
              children: "OH_PixelmapNative_GetImageInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图像像素信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alphaRate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "透明度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_opacity",
              children: "OH_PixelmapNative_Opacity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过设置透明比率来让PixelMap达到对应的透明效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float, float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scaleX, scaleY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "scaleX沿X轴缩放比例、scaleY沿Y轴缩放比例"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_scale",
              children: "OH_PixelmapNative_Scale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据输入的宽高对图片进行缩放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float, float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x, y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x平移量、y平移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_translate",
              children: "OH_PixelmapNative_Translate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据输入的坐标对图片进行位置变换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "angle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转角度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_rotate",
              children: "OH_PixelmapNative_Rotate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据输入的角度对图片进行旋转。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool, bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shouldFlipHorizontally, shouldFlipVertically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否水平翻转图像、是否垂直翻转图像。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_flip",
              children: "OH_PixelmapNative_Flip"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据输入的条件对图片进行翻转。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image_Region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪区间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_crop",
              children: "OH_PixelmapNative_Crop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据输入的尺寸对图片进行裁剪。"
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
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h",
        children: "pixelmap_native.h"
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