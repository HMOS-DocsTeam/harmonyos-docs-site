"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["475192"], {
273846(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_headerfile_capi_image_pixel_map_mdk_h_capi_image_pixel_map_mdk_h_md_74e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-headerfile-capi-image-pixel-map-mdk-h-capi-image-pixel-map-mdk-h-md-74e.json
var site_docs_ref_image_api_image_c_image_headerfile_capi_image_pixel_map_mdk_h_capi_image_pixel_map_mdk_h_md_74e_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-headerfile/capi-image-pixel-map-mdk-h/capi-image-pixel-map-mdk-h","title":"image_pixel_map_mdk.h","description":"概述","source":"@site/docs-ref/image-api/image-c/image-headerfile/capi-image-pixel-map-mdk-h/capi-image-pixel-map-mdk-h.md","sourceDirName":"image-api/image-c/image-headerfile/capi-image-pixel-map-mdk-h","slug":"/image-api/image-c/image-headerfile/capi-image-pixel-map-mdk-h/capi-image-pixel-map-mdk-h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-pixel-map-mdk-h/capi-image-pixel-map-mdk-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"image_pixel_map_mdk.h","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-pixel-map-mdk-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-image-pixel-map-mdk-h"},"sidebar":"ref","previous":{"title":"image_packer_mdk.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-packer-mdk-h/capi-image-packer-mdk-h"},"next":{"title":"image_pixel_map_napi.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-pixel-map-napi-h/capi-image-pixel-map-napi-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-headerfile/capi-image-pixel-map-mdk-h/capi-image-pixel-map-mdk-h.md


const frontMatter = {
	title: 'image_pixel_map_mdk.h',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-pixel-map-mdk-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-image-pixel-map-mdk-h'
};
const contentTitle = 'image_pixel_map_mdk.h';

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
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "PixelMap透明度类型",
  "id": "pixelmap透明度类型",
  "level": 3
}, {
  "value": "PixelMap编辑类型",
  "id": "pixelmap编辑类型",
  "level": 3
}, {
  "value": "OH_PixelMap_AntiAliasingLevel",
  "id": "oh_pixelmap_antialiasinglevel",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_PixelMap_CreatePixelMap()",
  "id": "oh_pixelmap_createpixelmap",
  "level": 3
}, {
  "value": "OH_PixelMap_CreatePixelMapWithStride()",
  "id": "oh_pixelmap_createpixelmapwithstride",
  "level": 3
}, {
  "value": "OH_PixelMap_CreateAlphaPixelMap()",
  "id": "oh_pixelmap_createalphapixelmap",
  "level": 3
}, {
  "value": "OH_PixelMap_InitNativePixelMap()",
  "id": "oh_pixelmap_initnativepixelmap",
  "level": 3
}, {
  "value": "OH_PixelMap_GetBytesNumberPerRow()",
  "id": "oh_pixelmap_getbytesnumberperrow",
  "level": 3
}, {
  "value": "OH_PixelMap_GetIsEditable()",
  "id": "oh_pixelmap_getiseditable",
  "level": 3
}, {
  "value": "OH_PixelMap_IsSupportAlpha()",
  "id": "oh_pixelmap_issupportalpha",
  "level": 3
}, {
  "value": "OH_PixelMap_SetAlphaAble()",
  "id": "oh_pixelmap_setalphaable",
  "level": 3
}, {
  "value": "OH_PixelMap_GetDensity()",
  "id": "oh_pixelmap_getdensity",
  "level": 3
}, {
  "value": "OH_PixelMap_SetDensity()",
  "id": "oh_pixelmap_setdensity",
  "level": 3
}, {
  "value": "OH_PixelMap_SetOpacity()",
  "id": "oh_pixelmap_setopacity",
  "level": 3
}, {
  "value": "OH_PixelMap_Scale()",
  "id": "oh_pixelmap_scale",
  "level": 3
}, {
  "value": "OH_PixelMap_ScaleWithAntiAliasing()",
  "id": "oh_pixelmap_scalewithantialiasing",
  "level": 3
}, {
  "value": "OH_PixelMap_Translate()",
  "id": "oh_pixelmap_translate",
  "level": 3
}, {
  "value": "OH_PixelMap_Rotate()",
  "id": "oh_pixelmap_rotate",
  "level": 3
}, {
  "value": "OH_PixelMap_Flip()",
  "id": "oh_pixelmap_flip",
  "level": 3
}, {
  "value": "OH_PixelMap_Crop()",
  "id": "oh_pixelmap_crop",
  "level": 3
}, {
  "value": "OH_PixelMap_GetImageInfo()",
  "id": "oh_pixelmap_getimageinfo",
  "level": 3
}, {
  "value": "OH_PixelMap_AccessPixels()",
  "id": "oh_pixelmap_accesspixels",
  "level": 3
}, {
  "value": "OH_PixelMap_UnAccessPixels()",
  "id": "oh_pixelmap_unaccesspixels",
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
        id: "image_pixel_map_mdkh",
        children: "image_pixel_map_mdk.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["声明可以锁定并访问pixelmap数据的方法，声明解锁的方法。推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h",
        children: "pixelmap_native.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/image_framework/image_pixel_map_mdk.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libpixelmap_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Image.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-module/capi-image/capi-image",
        children: "Image"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohospixelmapinfos/capi-image-ohospixelmapinfos",
              children: "OhosPixelMapInfos"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OhosPixelMapInfos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于定义PixelMap的相关信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap_"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义native层像素位图信息。表示native层PixelMap数据类型名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohospixelmapcreateops/capi-image-ohospixelmapcreateops",
              children: "OhosPixelMapCreateOps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于定义创建PixelMap设置选项的相关信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pixelmap%E9%80%8F%E6%98%8E%E5%BA%A6%E7%B1%BB%E5%9E%8B",
              children: "anonymous enum"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PixelMap透明度类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#pixelmap%E7%BC%96%E8%BE%91%E7%B1%BB%E5%9E%8B",
              children: "anonymous enum"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PixelMap编辑类型的枚举。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_antialiasinglevel",
              children: "OH_PixelMap_AntiAliasingLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PixelMap_AntiAliasingLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pixelmap缩放时采用的缩放算法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_pixelmap_createpixelmap",
              children: "int32_t OH_PixelMap_CreatePixelMap(napi_env env, OhosPixelMapCreateOps info, void* buf, size_t len, napi_value* res)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建PixelMap对象。当前只支持输入流为BGRA格式的流。  该接口传入的buf不支持stride。  该接口不支持DMA内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_createpixelmapwithstride",
              children: "int32_t OH_PixelMap_CreatePixelMapWithStride(napi_env env, OhosPixelMapCreateOps info, void* buf, size_t len, int32_t rowStride, napi_value* res)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建PixelMap对象。  当前只支持输入流为BGRA格式的流。pixelmap内存在RGBA格式下，默认为DMA内存（图片512*512以上）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_createalphapixelmap",
              children: "int32_t OH_PixelMap_CreateAlphaPixelMap(napi_env env, napi_value source, napi_value* alpha)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Alpha通道的信息，来生成一个仅包含Alpha通道信息的PixelMap对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_initnativepixelmap",
              children: "NativePixelMap* OH_PixelMap_InitNativePixelMap(napi_env env, napi_value source)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化NativePixelMap对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_getbytesnumberperrow",
              children: "int32_t OH_PixelMap_GetBytesNumberPerRow(const NativePixelMap* native, int32_t* num)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取PixelMap对象每行字节数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_getiseditable",
              children: "int32_t OH_PixelMap_GetIsEditable(const NativePixelMap* native, int32_t* editable)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取PixelMap对象是否可编辑的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_issupportalpha",
              children: "int32_t OH_PixelMap_IsSupportAlpha(const NativePixelMap* native, int32_t* alpha)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取PixelMap对象是否支持Alpha通道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_setalphaable",
              children: "int32_t OH_PixelMap_SetAlphaAble(const NativePixelMap* native, int32_t alpha)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置PixelMap对象的Alpha通道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_getdensity",
              children: "int32_t OH_PixelMap_GetDensity(const NativePixelMap* native, int32_t* density)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取PixelMap对象像素密度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_setdensity",
              children: "int32_t OH_PixelMap_SetDensity(const NativePixelMap* native, int32_t density)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置PixelMap对象像素密度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_setopacity",
              children: "int32_t OH_PixelMap_SetOpacity(const NativePixelMap* native, float opacity)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置PixelMap对象的透明度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_scale",
              children: "int32_t OH_PixelMap_Scale(const NativePixelMap* native, float x, float y)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置PixelMap对象的缩放。  从API version 12开始，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_scale",
              children: "OH_PixelmapNative_Scale"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_scalewithantialiasing",
              children: "int32_t OH_PixelMap_ScaleWithAntiAliasing(const NativePixelMap* native, float x, float y, OH_PixelMap_AntiAliasingLevel level)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据指定的缩放算法和输入的宽高对图片进行缩放。  从API version 12开始，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_scalewithantialiasing",
              children: "OH_PixelmapNative_ScaleWithAntiAliasing"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_translate",
              children: "int32_t OH_PixelMap_Translate(const NativePixelMap* native, float x, float y)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置PixelMap对象的偏移。  从API version 12开始，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_translate",
              children: "OH_PixelmapNative_Translate"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_rotate",
              children: "int32_t OH_PixelMap_Rotate(const NativePixelMap* native, float angle)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置PixelMap对象的旋转。  从API version 12开始，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_rotate",
              children: "OH_PixelmapNative_Rotate"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_flip",
              children: "int32_t OH_PixelMap_Flip(const NativePixelMap* native, int32_t x, int32_t y)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置PixelMap对象的翻转。  从API version 12开始，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_flip",
              children: "OH_PixelmapNative_Flip"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_crop",
              children: "int32_t OH_PixelMap_Crop(const NativePixelMap* native, int32_t x, int32_t y, int32_t width, int32_t height)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置PixelMap对象的裁剪。  从API version 12开始，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_crop",
              children: "OH_PixelmapNative_Crop"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_getimageinfo",
              children: "int32_t OH_PixelMap_GetImageInfo(const NativePixelMap* native, OhosPixelMapInfos *info)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取PixelMap对象图像信息。  从API version 12开始，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_getimageinfo",
              children: "OH_PixelmapNative_GetImageInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_accesspixels",
              children: "int32_t OH_PixelMap_AccessPixels(const NativePixelMap* native, void** addr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取native PixelMap对象数据的内存地址，并锁定该内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_unaccesspixels",
              children: "int32_t OH_PixelMap_UnAccessPixels(const NativePixelMap* native)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放native PixelMap对象数据的内存锁，用于匹配方法", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_accesspixels",
              children: "OH_PixelMap_AccessPixels"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pixelmap透明度类型",
      children: "PixelMap透明度类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum anonymous enum\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PixelMap 透明度类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_PIXEL_MAP_ALPHA_TYPE_UNKNOWN = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知的格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_PIXEL_MAP_ALPHA_TYPE_OPAQUE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不透明的格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_PIXEL_MAP_ALPHA_TYPE_PREMUL = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预乘的格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_PIXEL_MAP_ALPHA_TYPE_UNPREMUL = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预除的格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pixelmap编辑类型",
      children: "PixelMap编辑类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum anonymous enum\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PixelMap编辑类型的枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_PIXEL_MAP_READ_ONLY = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只读的格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OHOS_PIXEL_MAP_EDITABLE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可编辑的格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_antialiasinglevel",
      children: "OH_PixelMap_AntiAliasingLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_PixelMap_AntiAliasingLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pixelmap缩放时采用的缩放算法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PixelMap_AntiAliasing_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最近邻插值算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PixelMap_AntiAliasing_LOW = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "双线性插值算法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PixelMap_AntiAliasing_MEDIUM = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "双线性插值算法，同时开启Mipmap。缩小图片时建议使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PixelMap_AntiAliasing_HIGH = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三次插值算法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_createpixelmap",
      children: "OH_PixelMap_CreatePixelMap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_CreatePixelMap(napi_env env, OhosPixelMapCreateOps info,void* buf, size_t len, napi_value* res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建PixelMap对象。当前只支持输入流为BGRA格式的流。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口传入的buf不支持stride。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口不支持DMA内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_env env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi的环境指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohospixelmapcreateops/capi-image-ohospixelmapcreateops",
              children: "OhosPixelMapCreateOps"
            }), " info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PixelMap数据设置项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* buf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的buffer数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片大小信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value* res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用层的PixelMap对象的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_DECODE_HEAD_ABNORMAL：图像头解码失败。  IMAGE_RESULT_CREATE_DECODER_FAILED：创建解码器失败。  IMAGE_RESULT_CREATE_ENCODER_FAILED：创建编码器失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。  IMAGE_RESULT_DECODE_ABNORMAL：图像解码失败。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。  IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。  IMAGE_RESULT_INIT_ABNORMAL：图像初始化失败。  IMAGE_RESULT_CROP：裁剪失败。  IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_ENCODE_FAILED：图像添加像素位图失败。  IMAGE_RESULT_HW_DECODE_UNSUPPORT：图像不支持硬件解码。  IMAGE_RESULT_HW_DECODE_FAILED：硬件解码失败。  IMAGE_RESULT_INDEX_INVALID：ipc失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。  IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。  IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_createpixelmapwithstride",
      children: "OH_PixelMap_CreatePixelMapWithStride()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_CreatePixelMapWithStride(napi_env env, OhosPixelMapCreateOps info,void* buf, size_t len, int32_t rowStride, napi_value* res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建PixelMap对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前只支持输入流为BGRA格式的流。pixelmap内存在RGBA格式下，默认为DMA内存（图片512*512以上）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_env env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi的环境指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohospixelmapcreateops/capi-image-ohospixelmapcreateops",
              children: "OhosPixelMapCreateOps"
            }), " info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PixelMap数据设置项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* buf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的buffer数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t len"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片buffer大小信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t rowStride"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片跨距信息。跨距，图像每行占用的真实内存大小，单位为字节。跨距 = width * 单位像素字节数 + padding，padding为每行为内存对齐做的填充区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value* res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用层的PixelMap对象的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效或图像数据不支持。  IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_createalphapixelmap",
      children: "OH_PixelMap_CreateAlphaPixelMap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_CreateAlphaPixelMap(napi_env env, napi_value source, napi_value* alpha)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据Alpha通道的信息，来生成一个仅包含Alpha通道信息的PixelMap对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_env env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi的环境指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用层的PixelMap对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value* alpha"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alpha通道的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_DECODE_HEAD_ABNORMAL：图像头解码失败。  IMAGE_RESULT_CREATE_DECODER_FAILED：创建解码器失败。  IMAGE_RESULT_CREATE_ENCODER_FAILED：创建编码器失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。  IMAGE_RESULT_DECODE_ABNORMAL：图像解码失败。  IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。  IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。  IMAGE_RESULT_INIT_ABNORMAL：图像初始化失败。  IMAGE_RESULT_CROP：裁剪失败。  IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_ENCODE_FAILED：图像添加像素位图失败。  IMAGE_RESULT_HW_DECODE_UNSUPPORT：图像不支持硬件解码。  IMAGE_RESULT_HW_DECODE_FAILED：硬件解码失败。  IMAGE_RESULT_INDEX_INVALID：ipc失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。  IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。  IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_initnativepixelmap",
      children: "OH_PixelMap_InitNativePixelMap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NativePixelMap* OH_PixelMap_InitNativePixelMap(napi_env env, napi_value source)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化NativePixelMap对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_env env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "napi的环境指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用层的PixelMap对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功则返回NativePixelMap的指针；如果操作失败，则返回错误码。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_getbytesnumberperrow",
      children: "OH_PixelMap_GetBytesNumberPerRow()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_GetBytesNumberPerRow(const NativePixelMap* native, int32_t* num)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取PixelMap对象每行字节数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PixelMap对象的每行字节数指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_getiseditable",
      children: "OH_PixelMap_GetIsEditable()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_GetIsEditable(const NativePixelMap* native, int32_t* editable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取PixelMap对象是否可编辑的状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* editable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PixelMap对象是否可编辑的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_issupportalpha",
      children: "OH_PixelMap_IsSupportAlpha()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_IsSupportAlpha(const NativePixelMap* native, int32_t* alpha)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取PixelMap对象是否支持Alpha通道。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* alpha"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持Alpha的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_setalphaable",
      children: "OH_PixelMap_SetAlphaAble()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_SetAlphaAble(const NativePixelMap* native, int32_t alpha)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置PixelMap对象的Alpha通道。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t alpha"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alpha通道。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_getdensity",
      children: "OH_PixelMap_GetDensity()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_GetDensity(const NativePixelMap* native, int32_t* density)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取PixelMap对象像素密度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "像素密度指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_setdensity",
      children: "OH_PixelMap_SetDensity()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_SetDensity(const NativePixelMap* native, int32_t density)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置PixelMap对象像素密度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t density"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "像素密度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_setopacity",
      children: "OH_PixelMap_SetOpacity()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_SetOpacity(const NativePixelMap* native, float opacity)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置PixelMap对象的透明度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float opacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "透明度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_scale",
      children: "OH_PixelMap_Scale()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_Scale(const NativePixelMap* native, float x, float y)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置PixelMap对象的缩放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_scale",
        children: "OH_PixelmapNative_Scale"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "宽度的缩放比例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高度的缩放比例。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。  IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。  IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。  IMAGE_RESULT_INIT_ABNORMAL：图像初始化失败。  IMAGE_RESULT_CROP：裁剪失败。  IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。  IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。  IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_scalewithantialiasing",
      children: "OH_PixelMap_ScaleWithAntiAliasing()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_ScaleWithAntiAliasing(const NativePixelMap* native, float x, float y,OH_PixelMap_AntiAliasingLevel level)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的缩放算法和输入的宽高对图片进行缩放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_scalewithantialiasing",
        children: "OH_PixelmapNative_ScaleWithAntiAliasing"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "宽度的缩放比例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高度的缩放比例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_pixelmap_antialiasinglevel",
              children: "OH_PixelMap_AntiAliasingLevel"
            }), " level"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩放算法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。  IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。  IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_translate",
      children: "OH_PixelMap_Translate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_Translate(const NativePixelMap* native, float x, float y)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置PixelMap对象的偏移。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_translate",
        children: "OH_PixelmapNative_Translate"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水平偏移量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "垂直偏移量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。  IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。  IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。  IMAGE_RESULT_CROP：裁剪失败。  IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。  IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。  IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_rotate",
      children: "OH_PixelMap_Rotate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_Rotate(const NativePixelMap* native, float angle)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置PixelMap对象的旋转。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_rotate",
        children: "OH_PixelmapNative_Rotate"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float angle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转角度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。  IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。  IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。  IMAGE_RESULT_CROP：裁剪失败。  IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。  IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。  IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_flip",
      children: "OH_PixelMap_Flip()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_Flip(const NativePixelMap* native, int32_t x, int32_t y)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置PixelMap对象的翻转。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_flip",
        children: "OH_PixelmapNative_Flip"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据水平方向x轴进行图片翻转。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据垂直方向y轴进行图片翻转。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。  IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。  IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。  IMAGE_RESULT_CROP：裁剪失败。  IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。  IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。  IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_crop",
      children: "OH_PixelMap_Crop()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_Crop(const NativePixelMap* native, int32_t x, int32_t y, int32_t width, int32_t height)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置PixelMap对象的裁剪。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_crop",
        children: "OH_PixelmapNative_Crop"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标图片左上角的x坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标图片左上角的y坐标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪区域的宽度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "裁剪区域的高度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。  IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。  IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。  IMAGE_RESULT_CROP：裁剪失败。  IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。  IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。  IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_getimageinfo",
      children: "OH_PixelMap_GetImageInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_GetImageInfo(const NativePixelMap* native, OhosPixelMapInfos *info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取PixelMap对象图像信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_getimageinfo",
        children: "OH_PixelmapNative_GetImageInfo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohospixelmapinfos/capi-image-ohospixelmapinfos",
              children: "OhosPixelMapInfos"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像信息指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。  IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。  IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。  IMAGE_RESULT_CROP：裁剪失败。  IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。  IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。  IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_accesspixels",
      children: "OH_PixelMap_AccessPixels()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_AccessPixels(const NativePixelMap* native, void** addr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取native PixelMap对象数据的内存地址，并锁定该内存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void** addr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于指向的内存地址的双指针对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。  IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。  IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。  IMAGE_RESULT_CROP：裁剪失败。  IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。  IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。  IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_pixelmap_unaccesspixels",
      children: "OH_PixelMap_UnAccessPixels()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_PixelMap_UnAccessPixels(const NativePixelMap* native)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["释放native PixelMap对象数据的内存锁，用于匹配方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_pixelmap_accesspixels",
        children: "OH_PixelMap_AccessPixels"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativepixelmap-/capi-image-nativepixelmap-",
              children: "NativePixelMap"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NativePixelMap的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据失败。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia能力失败。  IMAGE_RESULT_DATA_ABNORMAL：图像输入数据失败。  IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存失败。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据错误。  IMAGE_RESULT_MALLOC_ABNORMAL：图像分配内存失败。  IMAGE_RESULT_DATA_UNSUPPORT：图像数据不支持。  IMAGE_RESULT_CROP：裁剪失败。  IMAGE_RESULT_UNKNOWN_FORMAT：图像格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_DATA_UNSUPPORT：属性无效。  IMAGE_RESULT_ALPHA_TYPE_ERROR：透明度类型错误。  IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配类型错误。"]
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