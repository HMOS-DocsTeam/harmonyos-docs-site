"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["98681"], {
341048(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_headerfile_capi_image_source_native_h_capi_image_source_native_h_md_0cd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-headerfile-capi-image-source-native-h-capi-image-source-native-h-md-0cd.json
var site_docs_ref_image_api_image_c_image_headerfile_capi_image_source_native_h_capi_image_source_native_h_md_0cd_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h","title":"image_source_native.h","description":"概述","source":"@site/docs-ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h.md","sourceDirName":"image-api/image-c/image-headerfile/capi-image-source-native-h","slug":"/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"image_source_native.h","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-image-source-native-h"},"sidebar":"ref","previous":{"title":"image_receiver_native.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-receiver-native-h/capi-image-receiver-native-h"},"next":{"title":"picture_native.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h.md


const frontMatter = {
	title: 'image_source_native.h',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-image-source-native-h'
};
const contentTitle = 'image_source_native.h';

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
  "value": "IMAGE_DYNAMIC_RANGE",
  "id": "image_dynamic_range",
  "level": 3
}, {
  "value": "IMAGE_ALLOCATOR_TYPE",
  "id": "image_allocator_type",
  "level": 3
}, {
  "value": "Image_CropAndScaleStrategy",
  "id": "image_cropandscalestrategy",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_ImageSourceInfo_Create()",
  "id": "oh_imagesourceinfo_create",
  "level": 3
}, {
  "value": "OH_ImageSourceInfo_GetWidth()",
  "id": "oh_imagesourceinfo_getwidth",
  "level": 3
}, {
  "value": "OH_ImageSourceInfo_GetHeight()",
  "id": "oh_imagesourceinfo_getheight",
  "level": 3
}, {
  "value": "OH_ImageSourceInfo_GetDynamicRange()",
  "id": "oh_imagesourceinfo_getdynamicrange",
  "level": 3
}, {
  "value": "OH_ImageSourceInfo_GetMimeType()",
  "id": "oh_imagesourceinfo_getmimetype",
  "level": 3
}, {
  "value": "OH_ImageSourceInfo_Release()",
  "id": "oh_imagesourceinfo_release",
  "level": 3
}, {
  "value": "OH_DecodingOptions_Create()",
  "id": "oh_decodingoptions_create",
  "level": 3
}, {
  "value": "OH_DecodingOptions_GetPixelFormat()",
  "id": "oh_decodingoptions_getpixelformat",
  "level": 3
}, {
  "value": "OH_DecodingOptions_SetPixelFormat()",
  "id": "oh_decodingoptions_setpixelformat",
  "level": 3
}, {
  "value": "OH_DecodingOptions_GetIndex()",
  "id": "oh_decodingoptions_getindex",
  "level": 3
}, {
  "value": "OH_DecodingOptions_SetIndex()",
  "id": "oh_decodingoptions_setindex",
  "level": 3
}, {
  "value": "OH_DecodingOptions_GetRotate()",
  "id": "oh_decodingoptions_getrotate",
  "level": 3
}, {
  "value": "OH_DecodingOptions_SetRotate()",
  "id": "oh_decodingoptions_setrotate",
  "level": 3
}, {
  "value": "OH_DecodingOptions_GetDesiredSize()",
  "id": "oh_decodingoptions_getdesiredsize",
  "level": 3
}, {
  "value": "OH_DecodingOptions_SetDesiredSize()",
  "id": "oh_decodingoptions_setdesiredsize",
  "level": 3
}, {
  "value": "OH_DecodingOptions_GetDesiredRegion()",
  "id": "oh_decodingoptions_getdesiredregion",
  "level": 3
}, {
  "value": "OH_DecodingOptions_SetDesiredRegion()",
  "id": "oh_decodingoptions_setdesiredregion",
  "level": 3
}, {
  "value": "OH_DecodingOptions_GetDesiredDynamicRange()",
  "id": "oh_decodingoptions_getdesireddynamicrange",
  "level": 3
}, {
  "value": "OH_DecodingOptions_SetDesiredDynamicRange()",
  "id": "oh_decodingoptions_setdesireddynamicrange",
  "level": 3
}, {
  "value": "OH_DecodingOptions_GetDesiredColorSpace()",
  "id": "oh_decodingoptions_getdesiredcolorspace",
  "level": 3
}, {
  "value": "OH_DecodingOptions_SetDesiredColorSpace()",
  "id": "oh_decodingoptions_setdesiredcolorspace",
  "level": 3
}, {
  "value": "OH_DecodingOptions_SetCropAndScaleStrategy()",
  "id": "oh_decodingoptions_setcropandscalestrategy",
  "level": 3
}, {
  "value": "OH_DecodingOptions_GetCropAndScaleStrategy()",
  "id": "oh_decodingoptions_getcropandscalestrategy",
  "level": 3
}, {
  "value": "OH_DecodingOptions_GetCropRegion()",
  "id": "oh_decodingoptions_getcropregion",
  "level": 3
}, {
  "value": "OH_DecodingOptions_SetCropRegion()",
  "id": "oh_decodingoptions_setcropregion",
  "level": 3
}, {
  "value": "OH_DecodingOptions_Release()",
  "id": "oh_decodingoptions_release",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_CreateFromUri()",
  "id": "oh_imagesourcenative_createfromuri",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_CreateFromFd()",
  "id": "oh_imagesourcenative_createfromfd",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_CreateFromData()",
  "id": "oh_imagesourcenative_createfromdata",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_CreateFromDataWithUserBuffer()",
  "id": "oh_imagesourcenative_createfromdatawithuserbuffer",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_CreateFromRawFile()",
  "id": "oh_imagesourcenative_createfromrawfile",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_CreatePixelmap()",
  "id": "oh_imagesourcenative_createpixelmap",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_CreatePixelmapUsingAllocator()",
  "id": "oh_imagesourcenative_createpixelmapusingallocator",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_CreatePixelmapList()",
  "id": "oh_imagesourcenative_createpixelmaplist",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_CreatePicture()",
  "id": "oh_imagesourcenative_createpicture",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_CreatePictureAtIndex()",
  "id": "oh_imagesourcenative_createpictureatindex",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_GetDelayTimeList()",
  "id": "oh_imagesourcenative_getdelaytimelist",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_GetImageInfo()",
  "id": "oh_imagesourcenative_getimageinfo",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_GetImageProperty()",
  "id": "oh_imagesourcenative_getimageproperty",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_GetImagePropertyShort()",
  "id": "oh_imagesourcenative_getimagepropertyshort",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_GetImagePropertyLong()",
  "id": "oh_imagesourcenative_getimagepropertylong",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_GetImagePropertyDouble()",
  "id": "oh_imagesourcenative_getimagepropertydouble",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_GetImagePropertyArraySize()",
  "id": "oh_imagesourcenative_getimagepropertyarraysize",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_GetImagePropertyString()",
  "id": "oh_imagesourcenative_getimagepropertystring",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_GetImagePropertyIntArray()",
  "id": "oh_imagesourcenative_getimagepropertyintarray",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_GetImagePropertyDoubleArray()",
  "id": "oh_imagesourcenative_getimagepropertydoublearray",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_GetImagePropertyBlob()",
  "id": "oh_imagesourcenative_getimagepropertyblob",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_ModifyImagePropertyShort()",
  "id": "oh_imagesourcenative_modifyimagepropertyshort",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_ModifyImagePropertyLong()",
  "id": "oh_imagesourcenative_modifyimagepropertylong",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_ModifyImagePropertyDouble()",
  "id": "oh_imagesourcenative_modifyimagepropertydouble",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_ModifyImagePropertyIntArray()",
  "id": "oh_imagesourcenative_modifyimagepropertyintarray",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_ModifyImagePropertyDoubleArray()",
  "id": "oh_imagesourcenative_modifyimagepropertydoublearray",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_ModifyImagePropertyBlob()",
  "id": "oh_imagesourcenative_modifyimagepropertyblob",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_GetImagePropertyWithNull()",
  "id": "oh_imagesourcenative_getimagepropertywithnull",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_ModifyImageProperty()",
  "id": "oh_imagesourcenative_modifyimageproperty",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_GetFrameCount()",
  "id": "oh_imagesourcenative_getframecount",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_GetSupportedFormats()",
  "id": "oh_imagesourcenative_getsupportedformats",
  "level": 3
}, {
  "value": "OH_ImageSourceNative_Release()",
  "id": "oh_imagesourcenative_release",
  "level": 3
}, {
  "value": "OH_DecodingOptionsForPicture_Create()",
  "id": "oh_decodingoptionsforpicture_create",
  "level": 3
}, {
  "value": "OH_DecodingOptionsForPicture_GetDesiredAuxiliaryPictures()",
  "id": "oh_decodingoptionsforpicture_getdesiredauxiliarypictures",
  "level": 3
}, {
  "value": "OH_DecodingOptionsForPicture_SetDesiredAuxiliaryPictures()",
  "id": "oh_decodingoptionsforpicture_setdesiredauxiliarypictures",
  "level": 3
}, {
  "value": "OH_DecodingOptionsForPicture_Release()",
  "id": "oh_decodingoptionsforpicture_release",
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
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "image_source_nativeh",
        children: "image_source_native.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片解码API。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/image_framework/image/image_source_native.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libimage_source.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Image.ImageSource"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ImageSourceNative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ImageSourceNative是native层封装的ImageSource结构体，用于创建图片数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info/capi-image-nativemodule-imagesource-info",
              children: "OH_ImageSource_Info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ImageSource_Info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ImageSource_Info是native层封装的ImageSource信息结构体，OH_ImageSource_Info结构体不可直接操作，而是采用函数调用方式创建、释放结构体以及操作具体字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-decodingoptionsforpicture/pi-image-nativemodule-oh-decodingoptionsforpicture",
              children: "OH_DecodingOptionsForPicture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_DecodingOptionsForPicture"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Picture解码参数结构体。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptionsforpicture_create",
              children: "OH_DecodingOptionsForPicture_Create"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_DecodingOptions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_DecodingOptions是native层封装的解码选项参数结构体，用于设置解码选项参数，在创建Pixelmap时作为入参传入，详细信息见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_createpixelmap",
              children: "OH_ImageSourceNative_CreatePixelmap"
            }), "。"]
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
              href: "#image_dynamic_range",
              children: "IMAGE_DYNAMIC_RANGE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_DYNAMIC_RANGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码指定期望动态范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#image_allocator_type",
              children: "IMAGE_ALLOCATOR_TYPE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_ALLOCATOR_TYPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于分配PixelMap内存的分配器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#image_cropandscalestrategy",
              children: "Image_CropAndScaleStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image_CropAndScaleStrategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在同时指定desiredSize和desiredRegion时执行裁剪和缩放的策略。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_imagesourceinfo_create",
              children: "Image_ErrorCode OH_ImageSourceInfo_Create(OH_ImageSource_Info **info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_ImageSource_Info指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourceinfo_getwidth",
              children: "Image_ErrorCode OH_ImageSourceInfo_GetWidth(OH_ImageSource_Info *info, uint32_t *width)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图片的宽。对于没有width标签的SVG图片，返回默认值0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourceinfo_getheight",
              children: "Image_ErrorCode OH_ImageSourceInfo_GetHeight(OH_ImageSource_Info *info, uint32_t *height)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图片的高。对于没有height标签的SVG图片，返回默认值0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourceinfo_getdynamicrange",
              children: "Image_ErrorCode OH_ImageSourceInfo_GetDynamicRange(OH_ImageSource_Info *info, bool *isHdr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图片是否为高动态范围的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourceinfo_getmimetype",
              children: "Image_ErrorCode OH_ImageSourceInfo_GetMimeType(OH_ImageSource_Info *info, Image_MimeType *mimeType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图片源的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourceinfo_release",
              children: "Image_ErrorCode OH_ImageSourceInfo_Release(OH_ImageSource_Info *info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_ImageSource_Info指针。调用该接口之后，与OH_ImageSourceInfo结构体相关的属性均会被释放。因此在调用该接口前，请务必确认相关属性已不再被需要或对相关属性已完成深拷贝操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_create",
              children: "Image_ErrorCode OH_DecodingOptions_Create(OH_DecodingOptions **options)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_getpixelformat",
              children: "Image_ErrorCode OH_DecodingOptions_GetPixelFormat(OH_DecodingOptions *options, int32_t *pixelFormat)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取pixel格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_setpixelformat",
              children: "Image_ErrorCode OH_DecodingOptions_SetPixelFormat(OH_DecodingOptions *options, int32_t pixelFormat)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置pixel格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_getindex",
              children: "Image_ErrorCode OH_DecodingOptions_GetIndex(OH_DecodingOptions *options, uint32_t *index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取解码图片序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_setindex",
              children: "Image_ErrorCode OH_DecodingOptions_SetIndex(OH_DecodingOptions *options, uint32_t index)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置解码图片序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_getrotate",
              children: "Image_ErrorCode OH_DecodingOptions_GetRotate(OH_DecodingOptions *options, float *rotate)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取旋转角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_setrotate",
              children: "Image_ErrorCode OH_DecodingOptions_SetRotate(OH_DecodingOptions *options, float rotate)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置旋转角度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_getdesiredsize",
              children: "Image_ErrorCode OH_DecodingOptions_GetDesiredSize(OH_DecodingOptions *options, Image_Size *desiredSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取期望输出大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_setdesiredsize",
              children: "Image_ErrorCode OH_DecodingOptions_SetDesiredSize(OH_DecodingOptions *options, Image_Size *desiredSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置期望输出大小。desiredSize参数决定解码得到的PixelMap大小，且宽、高须为正整数。若与原尺寸比例不一致，则会进行拉伸/缩放到指定尺寸。默认为原始尺寸。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_getdesiredregion",
              children: "Image_ErrorCode OH_DecodingOptions_GetDesiredRegion(OH_DecodingOptions *options, Image_Region *desiredRegion)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取解码区域。  由于对应SetDesiredRegion接口无法满足区域解码诉求，从API version 19开始，推荐配套使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_getcropregion",
              children: "OH_DecodingOptions_GetCropRegion"
            }), "接口替代。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_setdesiredregion",
              children: "Image_ErrorCode OH_DecodingOptions_SetDesiredRegion(OH_DecodingOptions *options, Image_Region *desiredRegion)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置解码区域。  实际解码结果会按照原图解码，无区域解码效果。从API version 19开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_setcropregion",
              children: "OH_DecodingOptions_SetCropRegion"
            }), "替代。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_getdesireddynamicrange",
              children: "Image_ErrorCode OH_DecodingOptions_GetDesiredDynamicRange(OH_DecodingOptions *options, int32_t *desiredDynamicRange)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取解码时设置的期望动态范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_setdesireddynamicrange",
              children: "Image_ErrorCode OH_DecodingOptions_SetDesiredDynamicRange(OH_DecodingOptions *options, int32_t desiredDynamicRange)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置解码时的期望动态范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_getdesiredcolorspace",
              children: "Image_ErrorCode OH_DecodingOptions_GetDesiredColorSpace(OH_DecodingOptions *options, int32_t *colorSpace)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取解码参数中设置的色彩空间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_setdesiredcolorspace",
              children: "Image_ErrorCode OH_DecodingOptions_SetDesiredColorSpace(OH_DecodingOptions *options, int32_t colorSpace)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置解码期望得到的色彩空间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_setcropandscalestrategy",
              children: "Image_ErrorCode OH_DecodingOptions_SetCropAndScaleStrategy(OH_DecodingOptions *options, int32_t cropAndScaleStrategy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置解码选项的裁剪和缩放策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_getcropandscalestrategy",
              children: "Image_ErrorCode OH_DecodingOptions_GetCropAndScaleStrategy(OH_DecodingOptions *options, int32_t *cropAndScaleStrategy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取解码选项的裁剪和缩放策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_getcropregion",
              children: "Image_ErrorCode OH_DecodingOptions_GetCropRegion(OH_DecodingOptions *options, Image_Region *cropRegion)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取解码参数中的裁剪区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_setcropregion",
              children: "Image_ErrorCode OH_DecodingOptions_SetCropRegion(OH_DecodingOptions *options, Image_Region *cropRegion)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置解码参数中的裁剪区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptions_release",
              children: "Image_ErrorCode OH_DecodingOptions_Release(OH_DecodingOptions *options)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_createfromuri",
              children: "Image_ErrorCode OH_ImageSourceNative_CreateFromUri(char *uri, size_t uriSize, OH_ImageSourceNative **res)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过uri创建OH_ImageSourceNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_createfromfd",
              children: "Image_ErrorCode OH_ImageSourceNative_CreateFromFd(int32_t fd, OH_ImageSourceNative **res)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过fd创建OH_ImageSourceNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_createfromdata",
              children: "Image_ErrorCode OH_ImageSourceNative_CreateFromData(uint8_t *data, size_t dataSize, OH_ImageSourceNative **res)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过缓冲区数据创建OH_ImageSourceNative指针。  data数据应该是未解码的数据，不要传入类似于RGBA，YUV的像素buffer数据，如果想通过像素buffer数据创建pixelMap，可以调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_createpixelmap",
              children: "OH_PixelmapNative_CreatePixelmap"
            }), "这一类接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_createfromdatawithuserbuffer",
              children: "Image_ErrorCode OH_ImageSourceNative_CreateFromDataWithUserBuffer(uint8_t *data, size_t datalength, OH_ImageSourceNative **imageSource)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由数据缓存创建图片源。传入的数据缓存将在图片源对象中直接访问，在图片源对象的生命周期内，数据缓存需要保持可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_createfromrawfile",
              children: "Image_ErrorCode OH_ImageSourceNative_CreateFromRawFile(RawFileDescriptor *rawFile, OH_ImageSourceNative **res)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过图像资源文件的RawFileDescriptor创建OH_ImageSourceNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_createpixelmap",
              children: "Image_ErrorCode OH_ImageSourceNative_CreatePixelmap(OH_ImageSourceNative *source, OH_DecodingOptions *options, OH_PixelmapNative **pixelmap)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过图片解码参数创建OH_PixelmapNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_createpixelmapusingallocator",
              children: "Image_ErrorCode OH_ImageSourceNative_CreatePixelmapUsingAllocator(OH_ImageSourceNative *source, OH_DecodingOptions *options, IMAGE_ALLOCATOR_TYPE allocator, OH_PixelmapNative **pixelmap)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据解码参数创建一个PixelMap，PixelMap使用的内存类型可以通过allocatorType来指定。  默认情况下，系统会根据图像类型、图像大小、平台能力等选择内存类型。在处理通过此接口返回的PixelMap时，请始终考虑步幅（stride）的影响。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_createpixelmaplist",
              children: "Image_ErrorCode OH_ImageSourceNative_CreatePixelmapList(OH_ImageSourceNative *source, OH_DecodingOptions *options, OH_PixelmapNative *resVecPixMap[], size_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过图片解码参数创建OH_PixelmapNative数组。  注意，此接口会一次性解码全部帧，当帧数过多或单帧图像过大时，会占用较大内存，造成系统内存紧张，此种情况推荐使用Image组件显示动图，Image组件采用逐帧解码，占用内存比此接口少。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_createpicture",
              children: "Image_ErrorCode OH_ImageSourceNative_CreatePicture(OH_ImageSourceNative *source, OH_DecodingOptionsForPicture *options, OH_PictureNative **picture)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过图片解码创建OH_PictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_createpictureatindex",
              children: "Image_ErrorCode OH_ImageSourceNative_CreatePictureAtIndex(OH_ImageSourceNative *source, uint32_t index, OH_PictureNative **picture)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定序号的图片解码创建OH_PictureNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getdelaytimelist",
              children: "Image_ErrorCode OH_ImageSourceNative_GetDelayTimeList(OH_ImageSourceNative *source, int32_t *delayTimeList, size_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图像延迟时间数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getimageinfo",
              children: "Image_ErrorCode OH_ImageSourceNative_GetImageInfo(OH_ImageSourceNative *source, int32_t index, OH_ImageSource_Info *info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取指定序号的图片信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getimageproperty",
              children: "Image_ErrorCode OH_ImageSourceNative_GetImageProperty(OH_ImageSourceNative *source, Image_String *key, Image_String *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图片指定属性键的值。该接口获取到的value.data缺少字符串结束符'\\0'，请谨慎使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getimagepropertyshort",
              children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyShort(OH_ImageSourceNative *source, Image_String *key, uint16_t *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以短整型类型获取图像属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getimagepropertylong",
              children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyLong(OH_ImageSourceNative *source, Image_String *key, uint32_t *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以长整型类型获取图像属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getimagepropertydouble",
              children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyDouble(OH_ImageSourceNative *source, Image_String *key, double *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以浮点型类型获取图像属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getimagepropertyarraysize",
              children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyArraySize(OH_ImageSourceNative *source, Image_String *key, size_t *size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取数组类型属性的数组长度或字符串类型属性的字符串长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getimagepropertystring",
              children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyString(OH_ImageSourceNative *source, Image_String *key, char *value, size_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以字符串类型获取图像属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getimagepropertyintarray",
              children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyIntArray(OH_ImageSourceNative *source, Image_String *key, int32_t *value, size_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以整型数组类型获取图像属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getimagepropertydoublearray",
              children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyDoubleArray(OH_ImageSourceNative *source, Image_String *key, double *value, size_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以浮点型数组类型获取图像属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getimagepropertyblob",
              children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyBlob(OH_ImageSourceNative *source, Image_String *key, void *value, size_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以二进制对象类型获取图像属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_modifyimagepropertyshort",
              children: "Image_ErrorCode OH_ImageSourceNative_ModifyImagePropertyShort(OH_ImageSourceNative *source, Image_String *key, uint16_t value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改图像属性中短整型的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_modifyimagepropertylong",
              children: "Image_ErrorCode OH_ImageSourceNative_ModifyImagePropertyLong(OH_ImageSourceNative *source, Image_String *key, uint32_t value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改图像属性中长整型的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_modifyimagepropertydouble",
              children: "Image_ErrorCode OH_ImageSourceNative_ModifyImagePropertyDouble(OH_ImageSourceNative *source, Image_String *key, double value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改图像属性中浮点型的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_modifyimagepropertyintarray",
              children: "Image_ErrorCode OH_ImageSourceNative_ModifyImagePropertyIntArray(OH_ImageSourceNative *source, Image_String *key, int32_t *value, size_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改图像属性中整型数组型的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_modifyimagepropertydoublearray",
              children: "Image_ErrorCode OH_ImageSourceNative_ModifyImagePropertyDoubleArray(OH_ImageSourceNative *source, Image_String *key, double *value, size_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改图像属性中浮点型数组型的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_modifyimagepropertyblob",
              children: "Image_ErrorCode OH_ImageSourceNative_ModifyImagePropertyBlob(OH_ImageSourceNative *source, Image_String *key, void *value, size_t size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改图像属性中二进制对象的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getimagepropertywithnull",
              children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyWithNull(OH_ImageSourceNative *source, Image_String *key, Image_String *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图像属性值。输出的value.data以字符串结束符'\\0'结尾。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_modifyimageproperty",
              children: "Image_ErrorCode OH_ImageSourceNative_ModifyImageProperty(OH_ImageSourceNative *source, Image_String *key, Image_String *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过指定的键修改图片属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getframecount",
              children: "Image_ErrorCode OH_ImageSourceNative_GetFrameCount(OH_ImageSourceNative *source, uint32_t *frameCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图像帧数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getsupportedformats",
              children: "Image_ErrorCode OH_ImageSourceNative_GetSupportedFormats(Image_MimeType **supportedFormats, size_t *length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取支持解码的图片格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_release",
              children: "Image_ErrorCode OH_ImageSourceNative_Release(OH_ImageSourceNative *source)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_ImageSourceNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptionsforpicture_create",
              children: "Image_ErrorCode OH_DecodingOptionsForPicture_Create(OH_DecodingOptionsForPicture **options)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_DecodingOptionsForPicture指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptionsforpicture_getdesiredauxiliarypictures",
              children: "Image_ErrorCode OH_DecodingOptionsForPicture_GetDesiredAuxiliaryPictures(OH_DecodingOptionsForPicture *options, Image_AuxiliaryPictureType **desiredAuxiliaryPictures, size_t *length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取解码时设置的期望辅助图（期望解码出的picture包含的辅助图）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptionsforpicture_setdesiredauxiliarypictures",
              children: "Image_ErrorCode OH_DecodingOptionsForPicture_SetDesiredAuxiliaryPictures(OH_DecodingOptionsForPicture *options, Image_AuxiliaryPictureType *desiredAuxiliaryPictures, size_t length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置解码选项中的期望辅助图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_decodingoptionsforpicture_release",
              children: "Image_ErrorCode OH_DecodingOptionsForPicture_Release(OH_DecodingOptionsForPicture *options)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_DecodingOptionsForPicture指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image_dynamic_range",
      children: "IMAGE_DYNAMIC_RANGE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum IMAGE_DYNAMIC_RANGE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解码指定期望动态范围。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "IMAGE_DYNAMIC_RANGE_AUTO = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据图片自适应处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_DYNAMIC_RANGE_SDR = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标准动态范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_DYNAMIC_RANGE_HDR = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高动态范围。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image_allocator_type",
      children: "IMAGE_ALLOCATOR_TYPE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum IMAGE_ALLOCATOR_TYPE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于分配PixelMap内存的分配器类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "IMAGE_ALLOCATOR_TYPE_AUTO = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由系统决定使用DMA内存或共享内存来创建PixelMap。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_ALLOCATOR_TYPE_DMA = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用DMA内存来创建PixelMap。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_ALLOCATOR_TYPE_SHARE_MEMORY = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用共享内存来创建PixelMap。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image_cropandscalestrategy",
      children: "Image_CropAndScaleStrategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Image_CropAndScaleStrategy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在同时指定desiredSize和desiredRegion时执行裁剪和缩放的策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果在配置解码选项", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
        children: "OH_DecodingOptions"
      }), "时，未填入参数Image_CropAndScaleStrategy，并且同时设置了desiredRegion和desiredSize，由于系统对于不同图片格式采用的解码算法不同，最终解码效果将略有差异。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如原始图片大小200x200，传入desiredSize:{width: 150, height: 150}，desiredRegion:{x: 0, y: 0, width: 100, height: 100}，即预期解码原图左上角1/4区域，最终将pixelMap大小缩放至150x150返回。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于jpeg、webp图片（部分dng图片解码时会优先解码图片中的jpeg预览图，在此场景下也会被视为jpeg图片格式）会先进行下采样，例如按照7/8下采样，再基于175x175的图片大小进行区域裁剪，因此最终的区域内容稍大于原图的左上角1/4区域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于svg图片，由于是矢量图，可以任意缩放不损失清晰度，在解码时会根据desiredSize与原图Size的比例选择缩放比例，在基于缩放后的图片大小进行区域裁剪，因此最终返回的解码区域会有所差异。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对该场景，建议在解码选项同时设置了desiredRegion与desiredSize时，参数Image_CropAndScaleStrategy应传入CROP_FIRST参数保证效果一致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
            children: "IMAGE_CROP_AND_SCALE_STRATEGY_SCALE_FIRST = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先缩放，后裁剪。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_CROP_AND_SCALE_STRATEGY_CROP_FIRST = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "先裁剪，后缩放。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourceinfo_create",
      children: "OH_ImageSourceInfo_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceInfo_Create(OH_ImageSource_Info **info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OH_ImageSource_Info指针。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info/capi-image-nativemodule-imagesource-info",
              children: "OH_ImageSource_Info"
            }), " **info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImageSource_Info指针。"
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
      id: "oh_imagesourceinfo_getwidth",
      children: "OH_ImageSourceInfo_GetWidth()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceInfo_GetWidth(OH_ImageSource_Info *info, uint32_t *width)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取图片的宽。对于没有width标签的SVG图片，返回默认值0。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info/capi-image-nativemodule-imagesource-info",
              children: "OH_ImageSource_Info"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImageSource_Info指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的宽，单位：像素。"
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
      id: "oh_imagesourceinfo_getheight",
      children: "OH_ImageSourceInfo_GetHeight()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceInfo_GetHeight(OH_ImageSource_Info *info, uint32_t *height)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取图片的高。对于没有height标签的SVG图片，返回默认值0。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info/capi-image-nativemodule-imagesource-info",
              children: "OH_ImageSource_Info"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImageSource_Info指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的高，单位：像素"
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
      id: "oh_imagesourceinfo_getdynamicrange",
      children: "OH_ImageSourceInfo_GetDynamicRange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceInfo_GetDynamicRange(OH_ImageSource_Info *info, bool *isHdr)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取图片是否为高动态范围的信息。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info/capi-image-nativemodule-imagesource-info",
              children: "OH_ImageSource_Info"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImageSource_Info指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool *isHdr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否为高动态范围（HDR）的信息。true表示是高动态范围的信息，false表示不是高动态范围的信息。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数校验错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourceinfo_getmimetype",
      children: "OH_ImageSourceInfo_GetMimeType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceInfo_GetMimeType(OH_ImageSource_Info *info, Image_MimeType *mimeType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取图片源的MIME类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(880989)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string#%E6%88%90%E5%91%98%E5%8F%98%E9%87%8F",
          children: "mimeType结构体的成员变量"
        }), "data为char *类型指针，其指向info结构体内部持有的mimeType地址，释放info会导致该地址对应的内存也被释放。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者可以自行深拷贝一份mimeType.data，或者等mimeType使用完成后再释放info，以免出现乱码现象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mimeType.data没有以'\\0'结尾，需要配合mimeType.size一起使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info/capi-image-nativemodule-imagesource-info",
              children: "OH_ImageSource_Info"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ImageSource_Info指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_MimeType"
            }), " *mimeType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片源的MIME类型。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：参数错误，INFO或者MIME类型为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourceinfo_release",
      children: "OH_ImageSourceInfo_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceInfo_Release(OH_ImageSource_Info *info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放OH_ImageSource_Info指针。调用该接口之后，与OH_ImageSourceInfo结构体相关的属性均会被释放。因此在调用该接口前，请务必确认相关属性已不再被需要或对相关属性已完成深拷贝操作。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info/capi-image-nativemodule-imagesource-info",
              children: "OH_ImageSource_Info"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImageSource_Info指针。"
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
      id: "oh_decodingoptions_create",
      children: "OH_DecodingOptions_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_Create(OH_DecodingOptions **options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OH_DecodingOptions指针。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " **options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
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
      id: "oh_decodingoptions_getpixelformat",
      children: "OH_DecodingOptions_GetPixelFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_GetPixelFormat(OH_DecodingOptions *options, int32_t *pixelFormat)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取pixel格式。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *pixelFormat"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["pixel格式", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
              children: "PIXEL_FORMAT"
            }), "，默认值为RGBA_8888。"]
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
      id: "oh_decodingoptions_setpixelformat",
      children: "OH_DecodingOptions_SetPixelFormat()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_SetPixelFormat(OH_DecodingOptions *options,int32_t pixelFormat)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置pixel格式。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t pixelFormat"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["pixel格式", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#pixel_format",
              children: "PIXEL_FORMAT"
            }), "，默认值为RGBA_8888。"]
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
      id: "oh_decodingoptions_getindex",
      children: "OH_DecodingOptions_GetIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_GetIndex(OH_DecodingOptions *options, uint32_t *index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取解码图片序号。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码图片序号，默认值为0。"
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
      id: "oh_decodingoptions_setindex",
      children: "OH_DecodingOptions_SetIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_SetIndex(OH_DecodingOptions *options, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置解码图片序号。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码图片序号，默认值为0。"
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
      id: "oh_decodingoptions_getrotate",
      children: "OH_DecodingOptions_GetRotate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_GetRotate(OH_DecodingOptions *options, float *rotate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取旋转角度。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float *rotate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转角度，单位为deg，默认值为0。"
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
      id: "oh_decodingoptions_setrotate",
      children: "OH_DecodingOptions_SetRotate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_SetRotate(OH_DecodingOptions *options, float rotate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置旋转角度。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float rotate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转角度，单位为deg，默认值为0。"
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
      id: "oh_decodingoptions_getdesiredsize",
      children: "OH_DecodingOptions_GetDesiredSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_GetDesiredSize(OH_DecodingOptions *options, Image_Size *desiredSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取期望输出大小。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-size/capi-image-nativemodule-image-size",
              children: "Image_Size"
            }), " *desiredSize"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望输出大小，默认为原始图片尺寸。"
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
      id: "oh_decodingoptions_setdesiredsize",
      children: "OH_DecodingOptions_SetDesiredSize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_SetDesiredSize(OH_DecodingOptions *options, Image_Size *desiredSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置期望输出大小。desiredSize参数决定解码得到的PixelMap大小，且宽、高须为正整数。若与原尺寸比例不一致，则会进行拉伸/缩放到指定尺寸。默认为原始尺寸。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-size/capi-image-nativemodule-image-size",
              children: "Image_Size"
            }), " *desiredSize"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望输出大小，默认为原始图片尺寸。"
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
      id: "oh_decodingoptions_getdesiredregion",
      children: "OH_DecodingOptions_GetDesiredRegion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_GetDesiredRegion(OH_DecodingOptions *options, Image_Region *desiredRegion)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取解码区域。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于对应SetDesiredRegion接口无法满足区域解码诉求，从API version 19开始，推荐配套使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_decodingoptions_getcropregion",
        children: "OH_DecodingOptions_GetCropRegion"
      }), "接口替代。"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-region/capi-image-nativemodule-image-region",
              children: "Image_Region"
            }), " *desiredRegion"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码区域，默认为完整图片大小的区域。"
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
      id: "oh_decodingoptions_setdesiredregion",
      children: "OH_DecodingOptions_SetDesiredRegion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_SetDesiredRegion(OH_DecodingOptions *options, Image_Region *desiredRegion)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置解码区域。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["实际解码结果会按照原图解码，无区域解码效果。从API version 19开始，推荐使用接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_decodingoptions_setcropregion",
        children: "OH_DecodingOptions_SetCropRegion"
      }), "替代。"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-region/capi-image-nativemodule-image-region",
              children: "Image_Region"
            }), " *desiredRegion"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码区域，默认为完整图片大小的区域。"
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
      id: "oh_decodingoptions_getdesireddynamicrange",
      children: "OH_DecodingOptions_GetDesiredDynamicRange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_GetDesiredDynamicRange(OH_DecodingOptions *options, int32_t *desiredDynamicRange)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取解码时设置的期望动态范围。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *desiredDynamicRange"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["期望的动态范围值", (0,jsx_runtime.jsx)(_components.a, {
              href: "#image_dynamic_range",
              children: "IMAGE_DYNAMIC_RANGE"
            }), "，默认值为SDR。"]
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数校验错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_decodingoptions_setdesireddynamicrange",
      children: "OH_DecodingOptions_SetDesiredDynamicRange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_SetDesiredDynamicRange(OH_DecodingOptions *options, int32_t desiredDynamicRange)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置解码时的期望动态范围。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t desiredDynamicRange"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["期望的动态范围值", (0,jsx_runtime.jsx)(_components.a, {
              href: "#image_dynamic_range",
              children: "IMAGE_DYNAMIC_RANGE"
            }), "，默认值为SDR。"]
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数校验错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_decodingoptions_getdesiredcolorspace",
      children: "OH_DecodingOptions_GetDesiredColorSpace()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_GetDesiredColorSpace(OH_DecodingOptions *options, int32_t *colorSpace)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取解码参数中设置的色彩空间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *colorSpace"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["解码参数中设置的色彩空间，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-color-space-manager-h/capi-native-color-space-manager-h#colorspacename",
              children: "ColorSpaceName"
            }), "。"]
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：参数错误。options或colorSpace为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_decodingoptions_setdesiredcolorspace",
      children: "OH_DecodingOptions_SetDesiredColorSpace()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_SetDesiredColorSpace(OH_DecodingOptions *options, int32_t colorSpace)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置解码期望得到的色彩空间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t colorSpace"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["期望的色彩空间，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-native-color-space-manager-h/capi-native-color-space-manager-h#colorspacename",
              children: "ColorSpaceName"
            }), "。"]
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：参数错误。options为空，或者传入了不支持的colorSpace。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_decodingoptions_setcropandscalestrategy",
      children: "OH_DecodingOptions_SetCropAndScaleStrategy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_SetCropAndScaleStrategy(OH_DecodingOptions *options, int32_t cropAndScaleStrategy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置解码选项的裁剪和缩放策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t cropAndScaleStrategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在同时指定desiredSize和desiredRegion时执行裁剪和缩放的策略。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：options空指针或者cropAndScaleStrategy取值不在Image_CropAndScaleStrategy枚举值定义之中。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_decodingoptions_getcropandscalestrategy",
      children: "OH_DecodingOptions_GetCropAndScaleStrategy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_GetCropAndScaleStrategy(OH_DecodingOptions *options, int32_t *cropAndScaleStrategy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取解码选项的裁剪和缩放策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *cropAndScaleStrategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向在同时指定desiredSize和desiredRegion时执行裁剪和缩放策略的指针。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：options或者cropAndScaleStrategy为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_decodingoptions_getcropregion",
      children: "OH_DecodingOptions_GetCropRegion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_GetCropRegion(OH_DecodingOptions *options, Image_Region *cropRegion)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取解码参数中的裁剪区域。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向解码参数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-region/capi-image-nativemodule-image-region",
              children: "Image_Region"
            }), " *cropRegion"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向要裁剪的目标区域指针。"
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
            children: "IMAGE_SUCCESS：操作成功。  IMAGE_SOURCE_INVALID_PARAMETER：options或cropRegion为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_decodingoptions_setcropregion",
      children: "OH_DecodingOptions_SetCropRegion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_SetCropRegion(OH_DecodingOptions *options, Image_Region *cropRegion)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置解码参数中的裁剪区域。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向解码参数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-region/capi-image-nativemodule-image-region",
              children: "Image_Region"
            }), " *cropRegion"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向要裁剪的目标区域指针。"
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
            children: "IMAGE_SUCCESS：操作成功。  IMAGE_SOURCE_INVALID_PARAMETER：options或cropRegion为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_decodingoptions_release",
      children: "OH_DecodingOptions_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptions_Release(OH_DecodingOptions *options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放OH_DecodingOptions指针。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptions指针。"
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
      id: "oh_imagesourcenative_createfromuri",
      children: "OH_ImageSourceNative_CreateFromUri()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_CreateFromUri(char *uri, size_t uriSize, OH_ImageSourceNative **res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过uri创建OH_ImageSourceNative指针。"
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
            children: "char *uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向图像源URI的指针。只接受文件URI或Base64 URI。当前文件资源只支持绝对路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t uriSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URI长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " **res"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向c++本地层创建的OH_ImageSourceNative对象的指针。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_BAD_SOURCE：解码数据源异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_createfromfd",
      children: "OH_ImageSourceNative_CreateFromFd()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_CreateFromFd(int32_t fd, OH_ImageSourceNative **res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过fd创建OH_ImageSourceNative指针。"
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
            children: "int32_t fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件描述符fd。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " **res"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向c++本地层创建的OH_ImageSourceNative对象的指针。"
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
      id: "oh_imagesourcenative_createfromdata",
      children: "OH_ImageSourceNative_CreateFromData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_CreateFromData(uint8_t *data, size_t dataSize, OH_ImageSourceNative **res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过缓冲区数据创建OH_ImageSourceNative指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "data数据应该是未解码的数据，不要传入类似于RGBA，YUV的像素buffer数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果想通过像素buffer数据创建pixelMap，可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_createpixelmap",
        children: "OH_PixelmapNative_CreatePixelmap"
      }), "这一类接口。"]
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
            children: "uint8_t *data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像缓冲区数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t dataSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像缓冲区数据长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " **res"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向c++本地层创建的OH_ImageSourceNative对象的指针。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_BAD_SOURCE：解码数据源异常。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_createfromdatawithuserbuffer",
      children: "OH_ImageSourceNative_CreateFromDataWithUserBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_CreateFromDataWithUserBuffer(uint8_t *data, size_t datalength, OH_ImageSourceNative **imageSource)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由数据缓存创建图片源。传入的数据缓存将在图片源对象中直接访问，在图片源对象的生命周期内，数据缓存需要保持可用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "uint8_t *data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据缓存指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t datalength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据缓存长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " **imageSource"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片源的二级指针。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：data或imageSource是空指针，datalength为0。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_createfromrawfile",
      children: "OH_ImageSourceNative_CreateFromRawFile()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_CreateFromRawFile(RawFileDescriptor *rawFile, OH_ImageSourceNative **res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过图像资源文件的RawFileDescriptor创建OH_ImageSourceNative指针。"
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
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawfiledescriptor/capi-rawfile-rawfiledescriptor",
              children: "RawFileDescriptor"
            }), " *rawFile"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示raw文件的文件描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " **res"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向c++本地层创建的OH_ImageSourceNative对象的指针。"
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
      id: "oh_imagesourcenative_createpixelmap",
      children: "OH_ImageSourceNative_CreatePixelmap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_CreatePixelmap(OH_ImageSourceNative *source, OH_DecodingOptions *options, OH_PixelmapNative **pixelmap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过图片解码参数创建OH_PixelmapNative指针。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImageSourceNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), " **pixelmap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向c++本地层创建的OH_PixelmapNative对象的指针。"
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
      id: "oh_imagesourcenative_createpixelmapusingallocator",
      children: "OH_ImageSourceNative_CreatePixelmapUsingAllocator()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_CreatePixelmapUsingAllocator(OH_ImageSourceNative *source, OH_DecodingOptions *options, IMAGE_ALLOCATOR_TYPE allocator, OH_PixelmapNative **pixelmap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据解码参数创建一个PixelMap，PixelMap使用的内存类型可以通过allocatorType来指定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认情况下，系统会根据图像类型、图像大小、平台能力等选择内存类型。在处理通过此接口返回的PixelMap时，请始终考虑步幅（stride）的影响。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 15"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImageSourceNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#image_allocator_type",
              children: "IMAGE_ALLOCATOR_TYPE"
            }), " allocator"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示返回的PixelMap将使用哪种内存类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), " **pixelmap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向c++本地层创建的OH_PixelmapNative对象的指针。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_BAD_SOURCE：数据源异常。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持的MIME类型。  IMAGE_SOURCE_TOO_LARGE：图像过大。  IMAGE_SOURCE_UNSUPPORTED_ALLOCATOR_TYPE：不支持的分配器类型。例如，使用共享内存解码HDR图像，因为只有DMA支持HDR元数据。  IMAGE_SOURCE_UNSUPPORTED_OPTIONS：不支持的选项。例如，无法将图像转换为所需的像素格式。  IMAGE_DECODE_FAILED：解码失败。  IMAGE_SOURCE_ALLOC_FAILED：内存分配失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_createpixelmaplist",
      children: "OH_ImageSourceNative_CreatePixelmapList()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_CreatePixelmapList(OH_ImageSourceNative *source, OH_DecodingOptions *options, OH_PixelmapNative *resVecPixMap[], size_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过图片解码参数创建OH_PixelmapNative数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意，此接口会一次性解码全部帧，当帧数过多或单帧图像过大时，会占用较大内存，造成系统内存紧张，此种情况推荐使用Image组件显示动图，Image组件采用逐帧解码，占用内存比此接口少。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImageSourceNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-decodingoptions/capi-image-nativemodule-oh-decodingoptions",
              children: "OH_DecodingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), " *resVecPixMap[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向c++本地层创建的OH_PixelmapNative对象的指针数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数组长度。 用户可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getframecount",
              children: "OH_ImageSourceNative_GetFrameCount"
            }), "获取。"]
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_UNSUPPORTED_OPERATION：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_createpicture",
      children: "OH_ImageSourceNative_CreatePicture()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_CreatePicture(OH_ImageSourceNative *source, OH_DecodingOptionsForPicture *options, OH_PictureNative **picture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过图片解码创建OH_PictureNative指针。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImageSourceNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-decodingoptionsforpicture/pi-image-nativemodule-oh-decodingoptionsforpicture",
              children: "OH_DecodingOptionsForPicture"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), " **picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向c++本地层创建的OH_PictureNative对象的指针。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_DECODE_FAILED：解码失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_createpictureatindex",
      children: "OH_ImageSourceNative_CreatePictureAtIndex()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_CreatePictureAtIndex(OH_ImageSourceNative *source, uint32_t index, OH_PictureNative **picture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定序号的图片解码创建OH_PictureNative指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImageSourceNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码图片序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), " **picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向c++本地层创建的OH_PictureNative对象的指针。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_SOURCE：数据源异常。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持的MIME类型。  IMAGE_SOURCE_TOO_LARGE：图像过大。  IMAGE_SOURCE_UNSUPPORTED_OPTIONS：不支持的选项。例如，无效的图片序号。  IMAGE_DECODE_FAILED：解码失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_getdelaytimelist",
      children: "OH_ImageSourceNative_GetDelayTimeList()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_GetDelayTimeList(OH_ImageSourceNative *source, int32_t *delayTimeList, size_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取图像延迟时间数组。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImageSourceNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *delayTimeList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获得的延迟时间列表的指针。它不能是空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t size"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["delayTimeList的大小。用户可以从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_getframecount",
              children: "OH_ImageSourceNative_GetFrameCount"
            }), "获得大小。"]
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
      id: "oh_imagesourcenative_getimageinfo",
      children: "OH_ImageSourceNative_GetImageInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_GetImageInfo(OH_ImageSourceNative *source, int32_t index, OH_ImageSource_Info *info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定序号的图片信息。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImageSourceNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片序号。对GIF图片可传入[0,N-1],N表示GIF的帧数。对只有一帧数据的图片格式，可传入0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-imagesource-info/capi-image-nativemodule-imagesource-info",
              children: "OH_ImageSource_Info"
            }), " *info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取的图像源信息的OH_ImageSource_Info指针。"
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
      id: "oh_imagesourcenative_getimageproperty",
      children: "OH_ImageSourceNative_GetImageProperty()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_GetImageProperty(OH_ImageSourceNative *source, Image_String *key, Image_String *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取图片指定属性键的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口获取到的value.data缺少字符串结束符'\\0'，请谨慎使用。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["被操作的OH_ImageSourceNative指针。OH_ImageSourceNative使用完成后需要主动释放，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_release",
              children: "OH_ImageSourceNative_Release"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向属性的指针。key的取值范围请参考image_common.h的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#%E5%8F%98%E9%87%8F",
              children: "变量"
            }), "中定义的OHOS_IMAGE_PROPERTY_XXX系列常量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向获取的值的指针（输出参数）。调用本接口前，用户应将value->data置为空指针，并将value->size设为0。接口会为value->data自动分配所需内存，并对value->size赋值。完成对该内存的使用后，用户必须使用C标准库提供的free()函数释放value->data指向的内存，否则会出现内存泄漏。"
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
      id: "oh_imagesourcenative_getimagepropertyshort",
      children: "OH_ImageSourceNative_GetImagePropertyShort()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyShort(OH_ImageSourceNative *source, Image_String *key, uint16_t *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以短整型类型获取图像属性的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(264775)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["读取DNG格式图片时，该接口对部分key有特殊处理。以下字段的字符串取值请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#%E5%8F%98%E9%87%8F",
        children: "变量"
      }), "中定义的OHOS_IMAGE_PROPERTY_XXX系列常量的值："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NewSubfileType、ImageWidth、ImageLength、DefaultCropSize、Orientation、Compression、PhotometricInterpretation、PlanarConfiguration、RowsPerStrip、StripOffsets、StripByteCounts、SamplesPerPixel、BitsPerSample、YCbCrCoefficients、YCbCrSubSampling、YCbCrPositioning、ReferenceBlackWhite、XResolution、YResolution、ResolutionUnit字段：返回主图相关的字段值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ImageUniqueID字段：根据规范进行校验，不符合规范时会返回空字符串。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ExifVersion、FlashpixVersion、ColorSpace字段：当图片中不存在该标签时，返回错误码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNGVersion字段：当版本号小于1.0.0.0时，统一返回1.0.0.0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPSVersionID字段：当没有有效的GPS数据时，会清除GPS版本号并返回0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPSAltitudeRef字段：当未设置GPSAltitude时，会设置为0xFFFFFFFF。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISOSpeedRatings字段：当该标签值为0或65535时，会优先使用推荐曝光指数，若不存在则依次使用标准输出灵敏度、ISO速度、曝光指数。"
      }), "\n"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询属性的ImageSource。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询的属性的查询结果。输出参数。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为nullptr。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持查询当前mimetype的图像属性。  IMAGE_SOURCE_UNSUPPORTED_METADATA：指定的元数据不存在，或者不是短整型的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_getimagepropertylong",
      children: "OH_ImageSourceNative_GetImagePropertyLong()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyLong(OH_ImageSourceNative *source, Image_String *key, uint32_t *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以长整型类型获取图像属性的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(381392)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["读取DNG格式图片时，该接口对部分key有特殊处理。以下字段的字符串取值请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#%E5%8F%98%E9%87%8F",
        children: "变量"
      }), "中定义的OHOS_IMAGE_PROPERTY_XXX系列常量的值："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NewSubfileType、ImageWidth、ImageLength、DefaultCropSize、Orientation、Compression、PhotometricInterpretation、PlanarConfiguration、RowsPerStrip、StripOffsets、StripByteCounts、SamplesPerPixel、BitsPerSample、YCbCrCoefficients、YCbCrSubSampling、YCbCrPositioning、ReferenceBlackWhite、XResolution、YResolution、ResolutionUnit字段：返回主图相关的字段值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ImageUniqueID字段：根据规范进行校验，不符合规范时会返回空字符串。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ExifVersion、FlashpixVersion、ColorSpace字段：当图片中不存在该标签时，返回错误码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNGVersion字段：当版本号小于1.0.0.0时，统一返回1.0.0.0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPSVersionID字段：当没有有效的GPS数据时，会清除GPS版本号并返回0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPSAltitudeRef字段：当未设置GPSAltitude时，会设置为0xFFFFFFFF。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISOSpeedRatings字段：当该标签值为0或65535时，会优先使用推荐曝光指数，若不存在则依次使用标准输出灵敏度、ISO速度、曝光指数。"
      }), "\n"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询属性的ImageSource。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询属性的查询结果。输出参数。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为nullptr。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持查询当前mimetype的图像属性。  IMAGE_SOURCE_UNSUPPORTED_METADATA：指定的元数据不存在，或者不是长整型的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_getimagepropertydouble",
      children: "OH_ImageSourceNative_GetImagePropertyDouble()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyDouble(OH_ImageSourceNative *source, Image_String *key, double *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以浮点型类型获取图像属性的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(566170)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["读取DNG格式图片时，该接口对部分key有特殊处理。以下字段的字符串取值请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#%E5%8F%98%E9%87%8F",
        children: "变量"
      }), "中定义的OHOS_IMAGE_PROPERTY_XXX系列常量的值："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NewSubfileType、ImageWidth、ImageLength、DefaultCropSize、Orientation、Compression、PhotometricInterpretation、PlanarConfiguration、RowsPerStrip、StripOffsets、StripByteCounts、SamplesPerPixel、BitsPerSample、YCbCrCoefficients、YCbCrSubSampling、YCbCrPositioning、ReferenceBlackWhite、XResolution、YResolution、ResolutionUnit字段：返回主图相关的字段值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ImageUniqueID字段：根据规范进行校验，不符合规范时会返回空字符串。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ExifVersion、FlashpixVersion、ColorSpace字段：当图片中不存在该标签时，返回错误码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNGVersion字段：当版本号小于1.0.0.0时，统一返回1.0.0.0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPSVersionID字段：当没有有效的GPS数据时，会清除GPS版本号并返回0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPSAltitudeRef字段：当未设置GPSAltitude时，会设置为0xFFFFFFFF。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISOSpeedRatings字段：当该标签值为0或65535时，会优先使用推荐曝光指数，若不存在则依次使用标准输出灵敏度、ISO速度、曝光指数。"
      }), "\n"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询属性的ImageSource。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询属性的查询结果。输出参数。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为nullptr。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持查询当前mimetype的图像属性。  IMAGE_SOURCE_UNSUPPORTED_METADATA：指定的元数据不存在，或者不是浮点型的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_getimagepropertyarraysize",
      children: "OH_ImageSourceNative_GetImagePropertyArraySize()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyArraySize(OH_ImageSourceNative *source, Image_String *key, size_t *size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取数组类型属性的数组长度或字符串类型属性的字符串长度。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询属性的ImageSource。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组类型属性的数组长度，字符串类型属性的字符串长度。输出参数。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为nullptr。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持查询当前mimetype的图像属性。  IMAGE_SOURCE_UNSUPPORTED_METADATA：指定的元数据不存在，或者不是数组或字符串类型的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_getimagepropertystring",
      children: "OH_ImageSourceNative_GetImagePropertyString()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyString(OH_ImageSourceNative *source, Image_String *key, char *value, size_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串类型获取图像属性的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(996570)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["读取DNG格式图片时，该接口对部分key有特殊处理。以下字段的字符串取值请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#%E5%8F%98%E9%87%8F",
        children: "变量"
      }), "中定义的OHOS_IMAGE_PROPERTY_XXX系列常量的值："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NewSubfileType、ImageWidth、ImageLength、DefaultCropSize、Orientation、Compression、PhotometricInterpretation、PlanarConfiguration、RowsPerStrip、StripOffsets、StripByteCounts、SamplesPerPixel、BitsPerSample、YCbCrCoefficients、YCbCrSubSampling、YCbCrPositioning、ReferenceBlackWhite、XResolution、YResolution、ResolutionUnit字段：返回主图相关的字段值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ImageUniqueID字段：根据规范进行校验，不符合规范时会返回空字符串。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ExifVersion、FlashpixVersion、ColorSpace字段：当图片中不存在该标签时，返回错误码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNGVersion字段：当版本号小于1.0.0.0时，统一返回1.0.0.0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPSVersionID字段：当没有有效的GPS数据时，会清除GPS版本号并返回0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPSAltitudeRef字段：当未设置GPSAltitude时，会设置为0xFFFFFFFF。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISOSpeedRatings字段：当该标签值为0或65535时，会优先使用推荐曝光指数，若不存在则依次使用标准输出灵敏度、ISO速度、曝光指数。"
      }), "\n"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询属性的ImageSource。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询属性的查询结果。输出参数。调用者需要管理内存应用程序并释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串长度。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为nullptr。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持查询当前mimetype的图像属性。  IMAGE_SOURCE_UNSUPPORTED_METADATA：指定的元数据不存在，或者不是字符串类型的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_getimagepropertyintarray",
      children: "OH_ImageSourceNative_GetImagePropertyIntArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyIntArray(OH_ImageSourceNative *source, Image_String *key, int32_t *value, size_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以整型数组类型获取图像属性的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(354106)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["读取DNG格式图片时，该接口对部分key有特殊处理。以下字段的字符串取值请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#%E5%8F%98%E9%87%8F",
        children: "变量"
      }), "中定义的OHOS_IMAGE_PROPERTY_XXX系列常量的值："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NewSubfileType、ImageWidth、ImageLength、DefaultCropSize、Orientation、Compression、PhotometricInterpretation、PlanarConfiguration、RowsPerStrip、StripOffsets、StripByteCounts、SamplesPerPixel、BitsPerSample、YCbCrCoefficients、YCbCrSubSampling、YCbCrPositioning、ReferenceBlackWhite、XResolution、YResolution、ResolutionUnit字段：返回主图相关的字段值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ImageUniqueID字段：根据规范进行校验，不符合规范时会返回空字符串。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ExifVersion、FlashpixVersion、ColorSpace字段：当图片中不存在该标签时，返回错误码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNGVersion字段：当版本号小于1.0.0.0时，统一返回1.0.0.0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPSVersionID字段：当没有有效的GPS数据时，会清除GPS版本号并返回0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPSAltitudeRef字段：当未设置GPSAltitude时，会设置为0xFFFFFFFF。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISOSpeedRatings字段：当该标签值为0或65535时，会优先使用推荐曝光指数，若不存在则依次使用标准输出灵敏度、ISO速度、曝光指数。"
      }), "\n"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询属性的ImageSource。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询属性的查询结果。输出参数。调用者需要管理内存应用程序并释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串长度。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为nullptr。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持查询当前mimetype的图像属性。  IMAGE_SOURCE_UNSUPPORTED_METADATA：指定的元数据不存在，或者不是整型数组类型的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_getimagepropertydoublearray",
      children: "OH_ImageSourceNative_GetImagePropertyDoubleArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyDoubleArray(OH_ImageSourceNative *source, Image_String *key, double *value, size_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以浮点型数组类型获取图像属性的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(745386)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["读取DNG格式图片时，该接口对部分key有特殊处理。以下字段的字符串取值请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#%E5%8F%98%E9%87%8F",
        children: "变量"
      }), "中定义的OHOS_IMAGE_PROPERTY_XXX系列常量的值："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NewSubfileType、ImageWidth、ImageLength、DefaultCropSize、Orientation、Compression、PhotometricInterpretation、PlanarConfiguration、RowsPerStrip、StripOffsets、StripByteCounts、SamplesPerPixel、BitsPerSample、YCbCrCoefficients、YCbCrSubSampling、YCbCrPositioning、ReferenceBlackWhite、XResolution、YResolution、ResolutionUnit字段：返回主图相关的字段值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ImageUniqueID字段：根据规范进行校验，不符合规范时会返回空字符串。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ExifVersion、FlashpixVersion、ColorSpace字段：当图片中不存在该标签时，返回错误码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNGVersion字段：当版本号小于1.0.0.0时，统一返回1.0.0.0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPSVersionID字段：当没有有效的GPS数据时，会清除GPS版本号并返回0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPSAltitudeRef字段：当未设置GPSAltitude时，会设置为0xFFFFFFFF。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISOSpeedRatings字段：当该标签值为0或65535时，会优先使用推荐曝光指数，若不存在则依次使用标准输出灵敏度、ISO速度、曝光指数。"
      }), "\n"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询属性的ImageSource。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询属性的查询结果。输出参数。调用者需要管理内存应用程序并释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组长度。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为nullptr。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持查询当前mimetype的图像属性。  IMAGE_SOURCE_UNSUPPORTED_METADATA：指定的元数据不存在，或者不是浮点型数组类型的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_getimagepropertyblob",
      children: "OH_ImageSourceNative_GetImagePropertyBlob()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyBlob(OH_ImageSourceNative *source, Image_String *key, void *value, size_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以二进制对象类型获取图像属性的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(275857)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["读取DNG格式图片时，该接口对部分key有特殊处理。以下字段的字符串取值请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#%E5%8F%98%E9%87%8F",
        children: "变量"
      }), "中定义的OHOS_IMAGE_PROPERTY_XXX系列常量的值："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NewSubfileType、ImageWidth、ImageLength、DefaultCropSize、Orientation、Compression、PhotometricInterpretation、PlanarConfiguration、RowsPerStrip、StripOffsets、StripByteCounts、SamplesPerPixel、BitsPerSample、YCbCrCoefficients、YCbCrSubSampling、YCbCrPositioning、ReferenceBlackWhite、XResolution、YResolution、ResolutionUnit字段：返回主图相关的字段值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ImageUniqueID字段：根据规范进行校验，不符合规范时会返回空字符串。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ExifVersion、FlashpixVersion、ColorSpace字段：当图片中不存在该标签时，返回错误码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DNGVersion字段：当版本号小于1.0.0.0时，统一返回1.0.0.0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPSVersionID字段：当没有有效的GPS数据时，会清除GPS版本号并返回0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPSAltitudeRef字段：当未设置GPSAltitude时，会设置为0xFFFFFFFF。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ISOSpeedRatings字段：当该标签值为0或65535时，会优先使用推荐曝光指数，若不存在则依次使用标准输出灵敏度、ISO速度、曝光指数。"
      }), "\n"]
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询属性的ImageSource。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被查询属性的查询结果。输出参数。调用者需要管理内存应用程序并释放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组长度。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为nullptr。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持查询当前mimetype的图像属性。  IMAGE_SOURCE_UNSUPPORTED_METADATA：指定的元数据不存在，或者不是二进制对象类型的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_modifyimagepropertyshort",
      children: "OH_ImageSourceNative_ModifyImagePropertyShort()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_ModifyImagePropertyShort(OH_ImageSourceNative *source, Image_String *key, uint16_t value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改图像属性中短整型的值。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被修改属性的ImageSource。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被修改的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint16_t value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为属性设置的值。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为nullptr。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持查询当前mimetype的图像属性。  IMAGE_SOURCE_UNSUPPORTED_METADATA：指定的元数据不存在，或者不是短整型的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_modifyimagepropertylong",
      children: "OH_ImageSourceNative_ModifyImagePropertyLong()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_ModifyImagePropertyLong(OH_ImageSourceNative *source, Image_String *key, uint32_t value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改图像属性中长整型的值。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被修改属性的ImageSource。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被修改的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为属性设置的值。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为nullptr。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持查询当前mimetype的图像属性。  IMAGE_SOURCE_UNSUPPORTED_METADATA：指定的元数据不存在，或者不是长整型的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_modifyimagepropertydouble",
      children: "OH_ImageSourceNative_ModifyImagePropertyDouble()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_ModifyImagePropertyDouble(OH_ImageSourceNative *source, Image_String *key, double value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改图像属性中浮点型的值。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被修改属性的ImageSource。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被修改的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为属性设置的值。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为nullptr。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持查询当前mimetype的图像属性。  IMAGE_SOURCE_UNSUPPORTED_METADATA：指定的元数据不存在，或者不是浮点型的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_modifyimagepropertyintarray",
      children: "OH_ImageSourceNative_ModifyImagePropertyIntArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_ModifyImagePropertyIntArray(OH_ImageSourceNative *source, Image_String *key, int32_t *value, size_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改图像属性中整型数组型的值。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被修改属性的ImageSource。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被修改的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为属性设置的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组长度。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为nullptr。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持查询当前mimetype的图像属性。  IMAGE_SOURCE_UNSUPPORTED_METADATA：指定的元数据不存在，或者不是整型数组类型的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_modifyimagepropertydoublearray",
      children: "OH_ImageSourceNative_ModifyImagePropertyDoubleArray()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_ModifyImagePropertyDoubleArray(OH_ImageSourceNative *source, Image_String *key, double *value, size_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改图像属性中浮点型数组型的值。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被修改属性的ImageSource。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被修改的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为属性设置的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组长度。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为nullptr。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持查询当前mimetype的图像属性。  IMAGE_SOURCE_UNSUPPORTED_METADATA：指定的元数据不存在，或者不是浮点型数组类型的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_modifyimagepropertyblob",
      children: "OH_ImageSourceNative_ModifyImagePropertyBlob()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_ModifyImagePropertyBlob(OH_ImageSourceNative *source, Image_String *key, void *value, size_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改图像属性中二进制对象的值。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被修改属性的ImageSource。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被修改的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为属性设置的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组长度。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为nullptr。  IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE：不支持查询当前mimetype的图像属性。  IMAGE_SOURCE_UNSUPPORTED_METADATA：指定的元数据不存在，或者不是二进制对象类型的值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_getimagepropertywithnull",
      children: "OH_ImageSourceNative_GetImagePropertyWithNull()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_GetImagePropertyWithNull(OH_ImageSourceNative *source, Image_String *key, Image_String *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取图像属性值。输出的value.data以字符串结束符'\\0'结尾。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 19"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["被操作的OH_ImageSourceNative指针。OH_ImageSourceNative使用完成后需要主动释放，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_release",
              children: "OH_ImageSourceNative_Release"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向属性键的指针。key的取值范围请参考image_common.h的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#%E5%8F%98%E9%87%8F",
              children: "变量"
            }), "中定义的OHOS_IMAGE_PROPERTY_XXX系列常量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向属性值的指针（输出参数）。调用本接口前，用户应将value->data置为空指针，并将value->size设为0。接口会为value->data自动分配所需内存，并对value->size赋值。完成对该内存的使用后，用户必须使用C标准库提供的free()函数释放value->data指向的内存，否则可能导致内存泄漏。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_SOURCE_INVALID_PARAMETER：source、key或value为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_modifyimageproperty",
      children: "OH_ImageSourceNative_ModifyImageProperty()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_ModifyImageProperty(OH_ImageSourceNative *source, Image_String *key, Image_String *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过指定的键修改图片属性的值。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["被操作的OH_ImageSourceNative指针。OH_ImageSourceNative使用完成后需要主动释放，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesourcenative_release",
              children: "OH_ImageSourceNative_Release"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向属性键的指针。key的取值范围请参考image_common.h的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#%E5%8F%98%E9%87%8F",
              children: "变量"
            }), "中定义的OHOS_IMAGE_PROPERTY_XXX系列常量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要修改的属性值。"
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
      id: "oh_imagesourcenative_getframecount",
      children: "OH_ImageSourceNative_GetFrameCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_GetFrameCount(OH_ImageSourceNative *source, uint32_t *frameCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取图像帧数。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImageSourceNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *frameCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像帧数。"
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
      id: "oh_imagesourcenative_getsupportedformats",
      children: "OH_ImageSourceNative_GetSupportedFormats()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_GetSupportedFormats(Image_MimeType **supportedFormats, size_t *length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取支持解码的图片格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_MimeType"
            }), " **supportedFormats"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持解码的图片格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组长度。"
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
            children: "IMAGE_SUCCESS：操作成功。  IMAGE_SOURCE_INVALID_PARAMETER：参数异常，supportedFormats或length为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesourcenative_release",
      children: "OH_ImageSourceNative_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImageSourceNative_Release(OH_ImageSourceNative *source)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放OH_ImageSourceNative指针。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要释放的OH_ImageSourceNative指针。"
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
      id: "oh_decodingoptionsforpicture_create",
      children: "OH_DecodingOptionsForPicture_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptionsForPicture_Create(OH_DecodingOptionsForPicture **options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OH_DecodingOptionsForPicture指针。"
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
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-decodingoptionsforpicture/pi-image-nativemodule-oh-decodingoptionsforpicture",
              children: "OH_DecodingOptionsForPicture"
            }), " **options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptionsForPicture指针。"
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
      id: "oh_decodingoptionsforpicture_getdesiredauxiliarypictures",
      children: "OH_DecodingOptionsForPicture_GetDesiredAuxiliaryPictures()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptionsForPicture_GetDesiredAuxiliaryPictures(OH_DecodingOptionsForPicture *options, Image_AuxiliaryPictureType **desiredAuxiliaryPictures, size_t *length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取解码时设置的期望辅助图（期望解码出的picture包含的辅助图）。"
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
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-decodingoptionsforpicture/pi-image-nativemodule-oh-decodingoptionsforpicture",
              children: "OH_DecodingOptionsForPicture"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptionsForPicture指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h#image_auxiliarypicturetype",
              children: "Image_AuxiliaryPictureType"
            }), " **desiredAuxiliaryPictures"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码选项中的期望辅助图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望辅助图长度。"
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
      id: "oh_decodingoptionsforpicture_setdesiredauxiliarypictures",
      children: "OH_DecodingOptionsForPicture_SetDesiredAuxiliaryPictures()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptionsForPicture_SetDesiredAuxiliaryPictures(OH_DecodingOptionsForPicture *options, Image_AuxiliaryPictureType *desiredAuxiliaryPictures, size_t length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置解码选项中的期望辅助图。"
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
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-decodingoptionsforpicture/pi-image-nativemodule-oh-decodingoptionsforpicture",
              children: "OH_DecodingOptionsForPicture"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_DecodingOptionsForPicture指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-picture-native-h/capi-picture-native-h#image_auxiliarypicturetype",
              children: "Image_AuxiliaryPictureType"
            }), " *desiredAuxiliaryPictures"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将要设置的期望辅助图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望辅助图长度。"
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
      id: "oh_decodingoptionsforpicture_release",
      children: "OH_DecodingOptionsForPicture_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_DecodingOptionsForPicture_Release(OH_DecodingOptionsForPicture *options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放OH_DecodingOptionsForPicture指针。"
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
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-decodingoptionsforpicture/pi-image-nativemodule-oh-decodingoptionsforpicture",
              children: "OH_DecodingOptionsForPicture"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要释放的OH_DecodingOptionsForPicture指针。"
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
264775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
996570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
566170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
745386(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
880989(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
354106(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
275857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
381392(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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