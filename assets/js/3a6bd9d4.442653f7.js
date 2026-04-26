"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["640767"], {
165898(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_headerfile_capi_picture_native_h_capi_picture_native_h_md_3a6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-headerfile-capi-picture-native-h-capi-picture-native-h-md-3a6.json
var site_docs_ref_image_api_image_c_image_headerfile_capi_picture_native_h_capi_picture_native_h_md_3a6_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h","title":"picture_native.h","description":"概述","source":"@site/docs-ref/image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h.md","sourceDirName":"image-api/image-c/image-headerfile/capi-picture-native-h","slug":"/image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"picture_native.h","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picture-native-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-picture-native-h"},"sidebar":"ref","previous":{"title":"image_source_native.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h"},"next":{"title":"pixelmap_native.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h.md


const frontMatter = {
	title: 'picture_native.h',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picture-native-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-picture-native-h'
};
const contentTitle = 'picture_native.h';

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
  "value": "Image_AuxiliaryPictureType",
  "id": "image_auxiliarypicturetype",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_ComposeOptions_Create()",
  "id": "oh_composeoptions_create",
  "level": 3
}, {
  "value": "OH_ComposeOptions_SetDesiredPixelFormat()",
  "id": "oh_composeoptions_setdesiredpixelformat",
  "level": 3
}, {
  "value": "OH_ComposeOptions_GetDesiredPixelFormat()",
  "id": "oh_composeoptions_getdesiredpixelformat",
  "level": 3
}, {
  "value": "OH_ComposeOptions_Release()",
  "id": "oh_composeoptions_release",
  "level": 3
}, {
  "value": "OH_PictureNative_CreatePicture()",
  "id": "oh_picturenative_createpicture",
  "level": 3
}, {
  "value": "OH_PictureNative_GetMainPixelmap()",
  "id": "oh_picturenative_getmainpixelmap",
  "level": 3
}, {
  "value": "OH_PictureNative_GetHdrComposedPixelmap()",
  "id": "oh_picturenative_gethdrcomposedpixelmap",
  "level": 3
}, {
  "value": "OH_PictureNative_GetHdrComposedPixelmapWithOptions()",
  "id": "oh_picturenative_gethdrcomposedpixelmapwithoptions",
  "level": 3
}, {
  "value": "OH_PictureNative_GetGainmapPixelmap()",
  "id": "oh_picturenative_getgainmappixelmap",
  "level": 3
}, {
  "value": "OH_PictureNative_SetAuxiliaryPicture()",
  "id": "oh_picturenative_setauxiliarypicture",
  "level": 3
}, {
  "value": "OH_PictureNative_GetAuxiliaryPicture()",
  "id": "oh_picturenative_getauxiliarypicture",
  "level": 3
}, {
  "value": "OH_PictureNative_GetMetadata()",
  "id": "oh_picturenative_getmetadata",
  "level": 3
}, {
  "value": "OH_PictureNative_SetMetadata()",
  "id": "oh_picturenative_setmetadata",
  "level": 3
}, {
  "value": "OH_PictureNative_Release()",
  "id": "oh_picturenative_release",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureNative_Create()",
  "id": "oh_auxiliarypicturenative_create",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureNative_WritePixels()",
  "id": "oh_auxiliarypicturenative_writepixels",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureNative_ReadPixels()",
  "id": "oh_auxiliarypicturenative_readpixels",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureNative_GetType()",
  "id": "oh_auxiliarypicturenative_gettype",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureNative_GetInfo()",
  "id": "oh_auxiliarypicturenative_getinfo",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureNative_SetInfo()",
  "id": "oh_auxiliarypicturenative_setinfo",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureNative_GetMetadata()",
  "id": "oh_auxiliarypicturenative_getmetadata",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureNative_SetMetadata()",
  "id": "oh_auxiliarypicturenative_setmetadata",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureNative_Release()",
  "id": "oh_auxiliarypicturenative_release",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureInfo_Create()",
  "id": "oh_auxiliarypictureinfo_create",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureInfo_GetType()",
  "id": "oh_auxiliarypictureinfo_gettype",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureInfo_SetType()",
  "id": "oh_auxiliarypictureinfo_settype",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureInfo_GetSize()",
  "id": "oh_auxiliarypictureinfo_getsize",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureInfo_SetSize()",
  "id": "oh_auxiliarypictureinfo_setsize",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureInfo_GetRowStride()",
  "id": "oh_auxiliarypictureinfo_getrowstride",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureInfo_SetRowStride()",
  "id": "oh_auxiliarypictureinfo_setrowstride",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureInfo_GetPixelFormat()",
  "id": "oh_auxiliarypictureinfo_getpixelformat",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureInfo_SetPixelFormat()",
  "id": "oh_auxiliarypictureinfo_setpixelformat",
  "level": 3
}, {
  "value": "OH_AuxiliaryPictureInfo_Release()",
  "id": "oh_auxiliarypictureinfo_release",
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
        id: "picture_nativeh",
        children: "picture_native.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供获取picture数据和信息的API。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/image_framework/image/picture_native.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libpicture.so"]
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
      }), " 13"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule",
        children: "Image_NativeModule"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PictureNative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Picture结构体类型，用于执行picture相关操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypicturenative/capi-image-nativemodule-oh-auxiliarypicturenative",
              children: "OH_AuxiliaryPictureNative"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AuxiliaryPictureNative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AuxiliaryPicture结构体类型，用于执行AuxiliaryPicture相关操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypictureinfo/capi-image-nativemodule-oh-auxiliarypictureinfo",
              children: "OH_AuxiliaryPictureInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AuxiliaryPictureInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AuxiliaryPictureInfo结构体类型，用于执行AuxiliaryPictureInfo相关操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-composeoptions/capi-image-nativemodule-oh-composeoptions",
              children: "OH_ComposeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ComposeOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ComposeOptions是native层封装的合成HDR选项参数结构体，用于设置合成选项参数。用于指定合成HDR所用的参数，例如目标像素格式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#image_auxiliarypicturetype",
              children: "Image_AuxiliaryPictureType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image_AuxiliaryPictureType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "辅助图类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_composeoptions_create",
              children: "Image_ErrorCode OH_ComposeOptions_Create(OH_ComposeOptions **options)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_ComposeOptions实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_composeoptions_setdesiredpixelformat",
              children: "Image_ErrorCode OH_ComposeOptions_SetDesiredPixelFormat(OH_ComposeOptions *options, PIXEL_FORMAT desiredPixelFormat)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OH_ComposeOptions中的目标像素格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_composeoptions_getdesiredpixelformat",
              children: "Image_ErrorCode OH_ComposeOptions_GetDesiredPixelFormat(OH_ComposeOptions *options, PIXEL_FORMAT *desiredPixelFormat)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_ComposeOptions中的像素格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_composeoptions_release",
              children: "Image_ErrorCode OH_ComposeOptions_Release(OH_ComposeOptions *options)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_ComposeOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturenative_createpicture",
              children: "Image_ErrorCode OH_PictureNative_CreatePicture(OH_PixelmapNative *mainPixelmap, OH_PictureNative **picture)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_PictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturenative_getmainpixelmap",
              children: "Image_ErrorCode OH_PictureNative_GetMainPixelmap(OH_PictureNative *picture, OH_PixelmapNative **mainPixelmap)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取主图的OH_PixelmapNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturenative_gethdrcomposedpixelmap",
              children: "Image_ErrorCode OH_PictureNative_GetHdrComposedPixelmap(OH_PictureNative *picture, OH_PixelmapNative **hdrPixelmap)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取hdr图的OH_PixelmapNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturenative_gethdrcomposedpixelmapwithoptions",
              children: "Image_ErrorCode OH_PictureNative_GetHdrComposedPixelmapWithOptions(OH_PictureNative *picture, OH_ComposeOptions *options, OH_PixelmapNative **hdrPixelmap)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过设置合成选项OH_ComposeOptions获取HDR图的OH_PixelmapNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturenative_getgainmappixelmap",
              children: "Image_ErrorCode OH_PictureNative_GetGainmapPixelmap(OH_PictureNative *picture, OH_PixelmapNative **gainmapPixelmap)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取增益图的OH_PixelmapNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturenative_setauxiliarypicture",
              children: "Image_ErrorCode OH_PictureNative_SetAuxiliaryPicture(OH_PictureNative *picture, Image_AuxiliaryPictureType type, OH_AuxiliaryPictureNative *auxiliaryPicture)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置辅助图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturenative_getauxiliarypicture",
              children: "Image_ErrorCode OH_PictureNative_GetAuxiliaryPicture(OH_PictureNative *picture, Image_AuxiliaryPictureType type, OH_AuxiliaryPictureNative **auxiliaryPicture)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据类型获取辅助图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturenative_getmetadata",
              children: "Image_ErrorCode OH_PictureNative_GetMetadata(OH_PictureNative *picture, Image_MetadataType metadataType, OH_PictureMetadata **metadata)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取主图的元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturenative_setmetadata",
              children: "Image_ErrorCode OH_PictureNative_SetMetadata(OH_PictureNative *picture, Image_MetadataType metadataType, OH_PictureMetadata *metadata)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置主图的元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturenative_release",
              children: "Image_ErrorCode OH_PictureNative_Release(OH_PictureNative *picture)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_PictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypicturenative_create",
              children: "Image_ErrorCode OH_AuxiliaryPictureNative_Create(uint8_t *data, size_t dataLength, Image_Size *size, Image_AuxiliaryPictureType type, OH_AuxiliaryPictureNative **auxiliaryPicture)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建OH_AuxiliaryPictureNative指针。该接口仅支持传入", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
              children: "像素格式"
            }), "为BGRA_8888的连续像素数据，会创建出RGBA_8888的辅助图。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypicturenative_writepixels",
              children: "Image_ErrorCode OH_AuxiliaryPictureNative_WritePixels(OH_AuxiliaryPictureNative *auxiliaryPicture, uint8_t *source, size_t bufferSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取缓冲区的图像像素数据，并将结果写入辅助图中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypicturenative_readpixels",
              children: "Image_ErrorCode OH_AuxiliaryPictureNative_ReadPixels(OH_AuxiliaryPictureNative *auxiliaryPicture, uint8_t *destination, size_t *bufferSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "读取辅助图的像素数据，结果写入缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypicturenative_gettype",
              children: "Image_ErrorCode OH_AuxiliaryPictureNative_GetType(OH_AuxiliaryPictureNative *auxiliaryPicture, Image_AuxiliaryPictureType *type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取辅助图类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypicturenative_getinfo",
              children: "Image_ErrorCode OH_AuxiliaryPictureNative_GetInfo(OH_AuxiliaryPictureNative *auxiliaryPicture, OH_AuxiliaryPictureInfo **info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取辅助图信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypicturenative_setinfo",
              children: "Image_ErrorCode OH_AuxiliaryPictureNative_SetInfo(OH_AuxiliaryPictureNative *auxiliaryPicture, OH_AuxiliaryPictureInfo *info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置辅助图信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypicturenative_getmetadata",
              children: "Image_ErrorCode OH_AuxiliaryPictureNative_GetMetadata(OH_AuxiliaryPictureNative *auxiliaryPicture, Image_MetadataType metadataType, OH_PictureMetadata **metadata)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取辅助图的元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypicturenative_setmetadata",
              children: "Image_ErrorCode OH_AuxiliaryPictureNative_SetMetadata(OH_AuxiliaryPictureNative *auxiliaryPicture, Image_MetadataType metadataType, OH_PictureMetadata *metadata)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置辅助图的元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypicturenative_release",
              children: "Image_ErrorCode OH_AuxiliaryPictureNative_Release(OH_AuxiliaryPictureNative *picture)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_AuxiliaryPictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypictureinfo_create",
              children: "Image_ErrorCode OH_AuxiliaryPictureInfo_Create(OH_AuxiliaryPictureInfo **info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个OH_AuxiliaryPictureInfo对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypictureinfo_gettype",
              children: "Image_ErrorCode OH_AuxiliaryPictureInfo_GetType(OH_AuxiliaryPictureInfo *info, Image_AuxiliaryPictureType *type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_AuxiliaryPictureInfo中的辅助图类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypictureinfo_settype",
              children: "Image_ErrorCode OH_AuxiliaryPictureInfo_SetType(OH_AuxiliaryPictureInfo *info, Image_AuxiliaryPictureType type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OH_AuxiliaryPictureInfo中的辅助图类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypictureinfo_getsize",
              children: "Image_ErrorCode OH_AuxiliaryPictureInfo_GetSize(OH_AuxiliaryPictureInfo *info, Image_Size *size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_AuxiliaryPictureInfo中的图片尺寸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypictureinfo_setsize",
              children: "Image_ErrorCode OH_AuxiliaryPictureInfo_SetSize(OH_AuxiliaryPictureInfo *info, Image_Size *size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OH_AuxiliaryPictureInfo中的图片尺寸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypictureinfo_getrowstride",
              children: "Image_ErrorCode OH_AuxiliaryPictureInfo_GetRowStride(OH_AuxiliaryPictureInfo *info, uint32_t *rowStride)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_AuxiliaryPictureInfo中的行跨距。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypictureinfo_setrowstride",
              children: "Image_ErrorCode OH_AuxiliaryPictureInfo_SetRowStride(OH_AuxiliaryPictureInfo *info, uint32_t rowStride)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OH_AuxiliaryPictureInfo中的行跨距。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypictureinfo_getpixelformat",
              children: "Image_ErrorCode OH_AuxiliaryPictureInfo_GetPixelFormat(OH_AuxiliaryPictureInfo *info, PIXEL_FORMAT *pixelFormat)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_AuxiliaryPictureInfo中的像素格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypictureinfo_setpixelformat",
              children: "Image_ErrorCode OH_AuxiliaryPictureInfo_SetPixelFormat(OH_AuxiliaryPictureInfo *info, PIXEL_FORMAT pixelFormat)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OH_AuxiliaryPictureInfo中的像素格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_auxiliarypictureinfo_release",
              children: "Image_ErrorCode OH_AuxiliaryPictureInfo_Release(OH_AuxiliaryPictureInfo *info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_AuxiliaryPictureInfo指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image_auxiliarypicturetype",
      children: "Image_AuxiliaryPictureType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Image_AuxiliaryPictureType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "辅助图类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "AUXILIARY_PICTURE_TYPE_GAINMAP = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增益图，代表了一种增强SDR图像以产生具有可变显示调整能力的HDR图像的机制。它是一组描述如何应用gainmap元数据的组合。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUXILIARY_PICTURE_TYPE_DEPTH_MAP = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "深度图，储存图像的深度数据，通过捕捉每个像素与摄像机之间的距离，提供场景的三维结构信息，通常用于3D重建和场景理解。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUXILIARY_PICTURE_TYPE_UNREFOCUS_MAP = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "人像未对焦的原图，提供了一种在人像拍摄中突出背景模糊效果的方式，能够帮助用户在后期处理中选择焦点区域，增加创作自由度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUXILIARY_PICTURE_TYPE_LINEAR_MAP = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线性图，用于提供额外的数据视角或补充信息，通常用于视觉效果的增强，它可以包含场景中光照、颜色或其他视觉元素的线性表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUXILIARY_PICTURE_TYPE_FRAGMENT_MAP = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水印裁剪图，表示在原图中被水印覆盖的区域，该图像用于修复或移除水印影响，恢复图像的完整性和可视性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_composeoptions_create",
      children: "OH_ComposeOptions_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ComposeOptions_Create(OH_ComposeOptions **options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OH_ComposeOptions实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-composeoptions/capi-image-nativemodule-oh-composeoptions",
              children: "OH_ComposeOptions"
            }), " **options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ComposeOptions指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_composeoptions_setdesiredpixelformat",
      children: "OH_ComposeOptions_SetDesiredPixelFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ComposeOptions_SetDesiredPixelFormat(OH_ComposeOptions *options, PIXEL_FORMAT desiredPixelFormat)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OH_ComposeOptions中的目标像素格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-composeoptions/capi-image-nativemodule-oh-composeoptions",
              children: "OH_ComposeOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ComposeOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
              children: "PIXEL_FORMAT"
            }), " desiredPixelFormat"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被设置的像素格式，支持RGBA_1010102、YCBCR_P010和YCRCB_P010格式。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误，例如options为nullptr或传入了不支持的desiredPixelFormat。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_composeoptions_getdesiredpixelformat",
      children: "OH_ComposeOptions_GetDesiredPixelFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ComposeOptions_GetDesiredPixelFormat(OH_ComposeOptions *options, PIXEL_FORMAT *desiredPixelFormat)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_ComposeOptions中的像素格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-composeoptions/capi-image-nativemodule-oh-composeoptions",
              children: "OH_ComposeOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ComposeOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
              children: "PIXEL_FORMAT"
            }), " *desiredPixelFormat"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "合成选项中的像素格式。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_composeoptions_release",
      children: "OH_ComposeOptions_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ComposeOptions_Release(OH_ComposeOptions *options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放OH_ComposeOptions指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-composeoptions/capi-image-nativemodule-oh-composeoptions",
              children: "OH_ComposeOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ComposeOptions指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_picturenative_createpicture",
      children: "OH_PictureNative_CreatePicture()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureNative_CreatePicture(OH_PixelmapNative *mainPixelmap, OH_PictureNative **picture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OH_PictureNative指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), " *mainPixelmap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主图的OH_PixelmapNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), " **picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被创建的OH_PictureNative指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_picturenative_getmainpixelmap",
      children: "OH_PictureNative_GetMainPixelmap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureNative_GetMainPixelmap(OH_PictureNative *picture, OH_PixelmapNative **mainPixelmap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取主图的OH_PixelmapNative指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), " *picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), " **mainPixelmap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取的OH_PixelmapNative指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_picturenative_gethdrcomposedpixelmap",
      children: "OH_PictureNative_GetHdrComposedPixelmap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureNative_GetHdrComposedPixelmap(OH_PictureNative *picture, OH_PixelmapNative **hdrPixelmap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取hdr图的OH_PixelmapNative指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), " *picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), " **hdrPixelmap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取的hdr图OH_PixelmapNative指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_UNSUPPORTED_OPERATION：操作不支持，例如picture对象中不包含增益图。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_picturenative_gethdrcomposedpixelmapwithoptions",
      children: "OH_PictureNative_GetHdrComposedPixelmapWithOptions()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureNative_GetHdrComposedPixelmapWithOptions(OH_PictureNative *picture, OH_ComposeOptions *options, OH_PixelmapNative **hdrPixelmap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置合成选项OH_ComposeOptions获取HDR图的OH_PixelmapNative指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 23"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), " *picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-composeoptions/capi-image-nativemodule-oh-composeoptions",
              children: "OH_ComposeOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "合成选项OH_ComposeOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), " **hdrPixelmap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取的HDR图OH_PixelmapNative指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_UNSUPPORTED_OPERATION：操作不支持，例如picture对象中不包含增益图。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_picturenative_getgainmappixelmap",
      children: "OH_PictureNative_GetGainmapPixelmap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureNative_GetGainmapPixelmap(OH_PictureNative *picture, OH_PixelmapNative **gainmapPixelmap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取增益图的OH_PixelmapNative指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), " *picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), " **gainmapPixelmap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取的增益图OH_PixelmapNative指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_picturenative_setauxiliarypicture",
      children: "OH_PictureNative_SetAuxiliaryPicture()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureNative_SetAuxiliaryPicture(OH_PictureNative *picture, Image_AuxiliaryPictureType type, OH_AuxiliaryPictureNative *auxiliaryPicture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置辅助图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), " *picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h#image_auxiliarypicturetype",
              children: "Image_AuxiliaryPictureType"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "辅助图的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypicturenative/capi-image-nativemodule-oh-auxiliarypicturenative",
              children: "OH_AuxiliaryPictureNative"
            }), " *auxiliaryPicture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置的OH_AuxiliaryPictureNative指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_picturenative_getauxiliarypicture",
      children: "OH_PictureNative_GetAuxiliaryPicture()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureNative_GetAuxiliaryPicture(OH_PictureNative *picture, Image_AuxiliaryPictureType type, OH_AuxiliaryPictureNative **auxiliaryPicture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据类型获取辅助图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), " *picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h#image_auxiliarypicturetype",
              children: "Image_AuxiliaryPictureType"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "辅助图类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypicturenative/capi-image-nativemodule-oh-auxiliarypicturenative",
              children: "OH_AuxiliaryPictureNative"
            }), " **auxiliaryPicture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取的OH_AuxiliaryPictureNative指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_picturenative_getmetadata",
      children: "OH_PictureNative_GetMetadata()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureNative_GetMetadata(OH_PictureNative *picture, Image_MetadataType metadataType, OH_PictureMetadata **metadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取主图的元数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), " *picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_metadatatype",
              children: "Image_MetadataType"
            }), " metadataType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturemetadata/capi-image-nativemodule-oh-picturemetadata",
              children: "OH_PictureMetadata"
            }), " **metadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主图的元数据。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_UNSUPPORTED_METADATA：不支持的元数据类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_picturenative_setmetadata",
      children: "OH_PictureNative_SetMetadata()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureNative_SetMetadata(OH_PictureNative *picture, Image_MetadataType metadataType, OH_PictureMetadata *metadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置主图的元数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), " *picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_metadatatype",
              children: "Image_MetadataType"
            }), " metadataType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturemetadata/capi-image-nativemodule-oh-picturemetadata",
              children: "OH_PictureMetadata"
            }), " *metadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将设置的元数据。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_UNSUPPORTED_METADATA：不支持的元数据类型。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_picturenative_release",
      children: "OH_PictureNative_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureNative_Release(OH_PictureNative *picture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放OH_PictureNative指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), " *picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PictureNative指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypicturenative_create",
      children: "OH_AuxiliaryPictureNative_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureNative_Create(uint8_t *data, size_t dataLength, Image_Size *size, Image_AuxiliaryPictureType type, OH_AuxiliaryPictureNative **auxiliaryPicture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建OH_AuxiliaryPictureNative指针。该接口仅支持传入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
        children: "像素格式"
      }), "为BGRA_8888的连续像素数据，会创建出RGBA_8888的辅助图。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "uint8_t *data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t dataLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像数据长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-size/capi-image-nativemodule-image-size",
              children: "Image_Size"
            }), " *size"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "辅助图尺寸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h#image_auxiliarypicturetype",
              children: "Image_AuxiliaryPictureType"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "辅助图类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypicturenative/capi-image-nativemodule-oh-auxiliarypicturenative",
              children: "OH_AuxiliaryPictureNative"
            }), " **auxiliaryPicture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被创建的OH_AuxiliaryPictureNative指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypicturenative_writepixels",
      children: "OH_AuxiliaryPictureNative_WritePixels()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureNative_WritePixels(OH_AuxiliaryPictureNative *auxiliaryPicture, uint8_t *source, size_t bufferSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "读取缓冲区的图像像素数据，并将结果写入辅助图中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypicturenative/capi-image-nativemodule-oh-auxiliarypicturenative",
              children: "OH_AuxiliaryPictureNative"
            }), " *auxiliaryPicture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_AuxiliaryPictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将被写入的图像像素数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像像素数据长度。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_ALLOC_FAILED：内存分配失败。  IMAGE_COPY_FAILED：内存拷贝失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypicturenative_readpixels",
      children: "OH_AuxiliaryPictureNative_ReadPixels()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureNative_ReadPixels(OH_AuxiliaryPictureNative *auxiliaryPicture, uint8_t *destination, size_t *bufferSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "读取辅助图的像素数据，结果写入缓冲区。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypicturenative/capi-image-nativemodule-oh-auxiliarypicturenative",
              children: "OH_AuxiliaryPictureNative"
            }), " *auxiliaryPicture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_AuxiliaryPictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *destination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区，获取的辅助图像素数据写入到该内存区域内。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *bufferSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓冲区大小。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_ALLOC_FAILED：内存分配失败。  IMAGE_COPY_FAILED：内存拷贝失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypicturenative_gettype",
      children: "OH_AuxiliaryPictureNative_GetType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureNative_GetType(OH_AuxiliaryPictureNative *auxiliaryPicture, Image_AuxiliaryPictureType *type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取辅助图类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypicturenative/capi-image-nativemodule-oh-auxiliarypicturenative",
              children: "OH_AuxiliaryPictureNative"
            }), " *auxiliaryPicture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_AuxiliaryPictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h#image_auxiliarypicturetype",
              children: "Image_AuxiliaryPictureType"
            }), " *type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "辅助图类型。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypicturenative_getinfo",
      children: "OH_AuxiliaryPictureNative_GetInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureNative_GetInfo(OH_AuxiliaryPictureNative *auxiliaryPicture, OH_AuxiliaryPictureInfo **info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取辅助图信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypicturenative/capi-image-nativemodule-oh-auxiliarypicturenative",
              children: "OH_AuxiliaryPictureNative"
            }), " *auxiliaryPicture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_AuxiliaryPictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypictureinfo/capi-image-nativemodule-oh-auxiliarypictureinfo",
              children: "OH_AuxiliaryPictureInfo"
            }), " **info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "辅助图信息。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypicturenative_setinfo",
      children: "OH_AuxiliaryPictureNative_SetInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureNative_SetInfo(OH_AuxiliaryPictureNative *auxiliaryPicture, OH_AuxiliaryPictureInfo *info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置辅助图信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypicturenative/capi-image-nativemodule-oh-auxiliarypicturenative",
              children: "OH_AuxiliaryPictureNative"
            }), " *auxiliaryPicture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将操作的OH_AuxiliaryPictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypictureinfo/capi-image-nativemodule-oh-auxiliarypictureinfo",
              children: "OH_AuxiliaryPictureInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的辅助图信息。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypicturenative_getmetadata",
      children: "OH_AuxiliaryPictureNative_GetMetadata()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureNative_GetMetadata(OH_AuxiliaryPictureNative *auxiliaryPicture, Image_MetadataType metadataType, OH_PictureMetadata **metadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取辅助图的元数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypicturenative/capi-image-nativemodule-oh-auxiliarypicturenative",
              children: "OH_AuxiliaryPictureNative"
            }), " *auxiliaryPicture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将操作的OH_AuxiliaryPictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_metadatatype",
              children: "Image_MetadataType"
            }), " metadataType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturemetadata/capi-image-nativemodule-oh-picturemetadata",
              children: "OH_PictureMetadata"
            }), " **metadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取的元数据。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_UNSUPPORTED_METADATA：不支持的元数据类型，或者元数据类型与辅助图片类型不匹配。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypicturenative_setmetadata",
      children: "OH_AuxiliaryPictureNative_SetMetadata()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureNative_SetMetadata(OH_AuxiliaryPictureNative *auxiliaryPicture, Image_MetadataType metadataType, OH_PictureMetadata *metadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置辅助图的元数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypicturenative/capi-image-nativemodule-oh-auxiliarypicturenative",
              children: "OH_AuxiliaryPictureNative"
            }), " *auxiliaryPicture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将操作的OH_AuxiliaryPictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_metadatatype",
              children: "Image_MetadataType"
            }), " metadataType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturemetadata/capi-image-nativemodule-oh-picturemetadata",
              children: "OH_PictureMetadata"
            }), " *metadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的元数据。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_UNSUPPORTED_METADATA：不支持的元数据类型，或者元数据类型与辅助图片类型不匹配。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypicturenative_release",
      children: "OH_AuxiliaryPictureNative_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureNative_Release(OH_AuxiliaryPictureNative *picture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放OH_AuxiliaryPictureNative指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypicturenative/capi-image-nativemodule-oh-auxiliarypicturenative",
              children: "OH_AuxiliaryPictureNative"
            }), " *picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将操作的OH_AuxiliaryPictureNative指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypictureinfo_create",
      children: "OH_AuxiliaryPictureInfo_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureInfo_Create(OH_AuxiliaryPictureInfo **info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个OH_AuxiliaryPictureInfo对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypictureinfo/capi-image-nativemodule-oh-auxiliarypictureinfo",
              children: "OH_AuxiliaryPictureInfo"
            }), " **info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将操作的OH_AuxiliaryPictureInfo指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypictureinfo_gettype",
      children: "OH_AuxiliaryPictureInfo_GetType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureInfo_GetType(OH_AuxiliaryPictureInfo *info, Image_AuxiliaryPictureType *type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_AuxiliaryPictureInfo中的辅助图类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypictureinfo/capi-image-nativemodule-oh-auxiliarypictureinfo",
              children: "OH_AuxiliaryPictureInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将操作的OH_AuxiliaryPictureInfo指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h#image_auxiliarypicturetype",
              children: "Image_AuxiliaryPictureType"
            }), " *type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取的辅助图类型。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypictureinfo_settype",
      children: "OH_AuxiliaryPictureInfo_SetType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureInfo_SetType(OH_AuxiliaryPictureInfo *info, Image_AuxiliaryPictureType type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OH_AuxiliaryPictureInfo中的辅助图类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypictureinfo/capi-image-nativemodule-oh-auxiliarypictureinfo",
              children: "OH_AuxiliaryPictureInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将操作的OH_AuxiliaryPictureInfo指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h#image_auxiliarypicturetype",
              children: "Image_AuxiliaryPictureType"
            }), " type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的辅助图类型。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypictureinfo_getsize",
      children: "OH_AuxiliaryPictureInfo_GetSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureInfo_GetSize(OH_AuxiliaryPictureInfo *info, Image_Size *size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_AuxiliaryPictureInfo中的图片尺寸。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypictureinfo/capi-image-nativemodule-oh-auxiliarypictureinfo",
              children: "OH_AuxiliaryPictureInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将操作的OH_AuxiliaryPictureInfo指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-size/capi-image-nativemodule-image-size",
              children: "Image_Size"
            }), " *size"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取的图片尺寸。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypictureinfo_setsize",
      children: "OH_AuxiliaryPictureInfo_SetSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureInfo_SetSize(OH_AuxiliaryPictureInfo *info, Image_Size *size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OH_AuxiliaryPictureInfo中的图片尺寸。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypictureinfo/capi-image-nativemodule-oh-auxiliarypictureinfo",
              children: "OH_AuxiliaryPictureInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将操作的OH_AuxiliaryPictureInfo指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-size/capi-image-nativemodule-image-size",
              children: "Image_Size"
            }), " *size"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的图片尺寸。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypictureinfo_getrowstride",
      children: "OH_AuxiliaryPictureInfo_GetRowStride()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureInfo_GetRowStride(OH_AuxiliaryPictureInfo *info, uint32_t *rowStride)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_AuxiliaryPictureInfo中的行跨距。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypictureinfo/capi-image-nativemodule-oh-auxiliarypictureinfo",
              children: "OH_AuxiliaryPictureInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将操作的OH_AuxiliaryPictureInfo指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *rowStride"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跨距，内存中每行像素所占的空间。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypictureinfo_setrowstride",
      children: "OH_AuxiliaryPictureInfo_SetRowStride()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureInfo_SetRowStride(OH_AuxiliaryPictureInfo *info, uint32_t rowStride)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OH_AuxiliaryPictureInfo中的行跨距。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypictureinfo/capi-image-nativemodule-oh-auxiliarypictureinfo",
              children: "OH_AuxiliaryPictureInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将操作的OH_AuxiliaryPictureInfo指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t rowStride"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跨距，内存中每行像素所占的空间。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypictureinfo_getpixelformat",
      children: "OH_AuxiliaryPictureInfo_GetPixelFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureInfo_GetPixelFormat(OH_AuxiliaryPictureInfo *info, PIXEL_FORMAT *pixelFormat)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_AuxiliaryPictureInfo中的像素格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypictureinfo/capi-image-nativemodule-oh-auxiliarypictureinfo",
              children: "OH_AuxiliaryPictureInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将操作的OH_AuxiliaryPictureInfo指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
              children: "PIXEL_FORMAT"
            }), " *pixelFormat"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取的像素格式。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypictureinfo_setpixelformat",
      children: "OH_AuxiliaryPictureInfo_SetPixelFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureInfo_SetPixelFormat(OH_AuxiliaryPictureInfo *info, PIXEL_FORMAT pixelFormat)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OH_AuxiliaryPictureInfo中的像素格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypictureinfo/capi-image-nativemodule-oh-auxiliarypictureinfo",
              children: "OH_AuxiliaryPictureInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将操作的OH_AuxiliaryPictureInfo指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
              children: "PIXEL_FORMAT"
            }), " pixelFormat"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的像素格式。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_auxiliarypictureinfo_release",
      children: "OH_AuxiliaryPictureInfo_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_AuxiliaryPictureInfo_Release(OH_AuxiliaryPictureInfo *info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放OH_AuxiliaryPictureInfo指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-auxiliarypictureinfo/capi-image-nativemodule-oh-auxiliarypictureinfo",
              children: "OH_AuxiliaryPictureInfo"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将操作的OH_AuxiliaryPictureInfo指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。"
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