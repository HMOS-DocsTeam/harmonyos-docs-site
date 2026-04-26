"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["258171"], {
92240(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_headerfile_capi_image_packer_native_h_capi_image_packer_native_h_md_fe8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-headerfile-capi-image-packer-native-h-capi-image-packer-native-h-md-fe8.json
var site_docs_ref_image_api_image_c_image_headerfile_capi_image_packer_native_h_capi_image_packer_native_h_md_fe8_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h","title":"image_packer_native.h","description":"概述","source":"@site/docs-ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h.md","sourceDirName":"image-api/image-c/image-headerfile/capi-image-packer-native-h","slug":"/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"image_packer_native.h","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-image-packer-native-h"},"sidebar":"ref","previous":{"title":"image_native.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-native-h/capi-image-native-h"},"next":{"title":"image_receiver_native.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-receiver-native-h/capi-image-receiver-native-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h.md


const frontMatter = {
	title: 'image_packer_native.h',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-image-packer-native-h'
};
const contentTitle = 'image_packer_native.h';

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
  "value": "IMAGE_PACKER_DYNAMIC_RANGE",
  "id": "image_packer_dynamic_range",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_PackingOptions_Create()",
  "id": "oh_packingoptions_create",
  "level": 3
}, {
  "value": "OH_PackingOptions_GetMimeType()",
  "id": "oh_packingoptions_getmimetype",
  "level": 3
}, {
  "value": "OH_PackingOptions_GetMimeTypeWithNull()",
  "id": "oh_packingoptions_getmimetypewithnull",
  "level": 3
}, {
  "value": "OH_PackingOptions_SetMimeType()",
  "id": "oh_packingoptions_setmimetype",
  "level": 3
}, {
  "value": "OH_PackingOptions_GetQuality()",
  "id": "oh_packingoptions_getquality",
  "level": 3
}, {
  "value": "OH_PackingOptions_SetQuality()",
  "id": "oh_packingoptions_setquality",
  "level": 3
}, {
  "value": "OH_PackingOptions_GetNeedsPackProperties()",
  "id": "oh_packingoptions_getneedspackproperties",
  "level": 3
}, {
  "value": "OH_PackingOptions_SetNeedsPackProperties()",
  "id": "oh_packingoptions_setneedspackproperties",
  "level": 3
}, {
  "value": "OH_PackingOptions_GetDesiredDynamicRange()",
  "id": "oh_packingoptions_getdesireddynamicrange",
  "level": 3
}, {
  "value": "OH_PackingOptions_SetDesiredDynamicRange()",
  "id": "oh_packingoptions_setdesireddynamicrange",
  "level": 3
}, {
  "value": "OH_PackingOptions_Release()",
  "id": "oh_packingoptions_release",
  "level": 3
}, {
  "value": "OH_PackingOptionsForSequence_Create()",
  "id": "oh_packingoptionsforsequence_create",
  "level": 3
}, {
  "value": "OH_PackingOptionsForSequence_SetFrameCount()",
  "id": "oh_packingoptionsforsequence_setframecount",
  "level": 3
}, {
  "value": "OH_PackingOptionsForSequence_GetFrameCount()",
  "id": "oh_packingoptionsforsequence_getframecount",
  "level": 3
}, {
  "value": "OH_PackingOptionsForSequence_SetDelayTimeList()",
  "id": "oh_packingoptionsforsequence_setdelaytimelist",
  "level": 3
}, {
  "value": "OH_PackingOptionsForSequence_GetDelayTimeList()",
  "id": "oh_packingoptionsforsequence_getdelaytimelist",
  "level": 3
}, {
  "value": "OH_PackingOptionsForSequence_SetDisposalTypes()",
  "id": "oh_packingoptionsforsequence_setdisposaltypes",
  "level": 3
}, {
  "value": "OH_PackingOptionsForSequence_GetDisposalTypes()",
  "id": "oh_packingoptionsforsequence_getdisposaltypes",
  "level": 3
}, {
  "value": "OH_PackingOptionsForSequence_SetLoopCount()",
  "id": "oh_packingoptionsforsequence_setloopcount",
  "level": 3
}, {
  "value": "OH_PackingOptionsForSequence_GetLoopCount()",
  "id": "oh_packingoptionsforsequence_getloopcount",
  "level": 3
}, {
  "value": "OH_PackingOptionsForSequence_Release()",
  "id": "oh_packingoptionsforsequence_release",
  "level": 3
}, {
  "value": "OH_ImagePackerNative_Create()",
  "id": "oh_imagepackernative_create",
  "level": 3
}, {
  "value": "OH_ImagePackerNative_PackToDataFromImageSource()",
  "id": "oh_imagepackernative_packtodatafromimagesource",
  "level": 3
}, {
  "value": "OH_ImagePackerNative_PackToDataFromPixelmap()",
  "id": "oh_imagepackernative_packtodatafrompixelmap",
  "level": 3
}, {
  "value": "OH_ImagePackerNative_PackToDataFromPicture()",
  "id": "oh_imagepackernative_packtodatafrompicture",
  "level": 3
}, {
  "value": "OH_ImagePackerNative_PackToDataFromPixelmapSequence()",
  "id": "oh_imagepackernative_packtodatafrompixelmapsequence",
  "level": 3
}, {
  "value": "OH_ImagePackerNative_PackToFileFromImageSource()",
  "id": "oh_imagepackernative_packtofilefromimagesource",
  "level": 3
}, {
  "value": "OH_ImagePackerNative_PackToFileFromPixelmap()",
  "id": "oh_imagepackernative_packtofilefrompixelmap",
  "level": 3
}, {
  "value": "OH_ImagePackerNative_PackToFileFromPicture()",
  "id": "oh_imagepackernative_packtofilefrompicture",
  "level": 3
}, {
  "value": "OH_ImagePackerNative_PackToFileFromPixelmapSequence()",
  "id": "oh_imagepackernative_packtofilefrompixelmapsequence",
  "level": 3
}, {
  "value": "OH_ImagePackerNative_GetSupportedFormats()",
  "id": "oh_imagepackernative_getsupportedformats",
  "level": 3
}, {
  "value": "OH_ImagePackerNative_Release()",
  "id": "oh_imagepackernative_release",
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
        id: "image_packer_nativeh",
        children: "image_packer_native.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片编码API。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/image_framework/image/image_packer_native.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libimage_packer.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Image.ImagePacker"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative",
              children: "OH_ImagePackerNative"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ImagePackerNative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImagePacker结构体类型，用于执行ImagePacker相关操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PackingOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PackingOptions是native层封装的图像编码选项结构体，不可直接操作，而是采用函数调用方式创建、释放结构体以及操作具体字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PackingOptionsForSequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PackingOptionsForSequence是native层封装的图像序列编码选项结构体，不可直接操作，而是采用函数调用方式创建、释放结构体以及操作具体字段。"
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
              href: "#image_packer_dynamic_range",
              children: "IMAGE_PACKER_DYNAMIC_RANGE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PACKER_DYNAMIC_RANGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码指定动态范围。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_packingoptions_create",
              children: "Image_ErrorCode OH_PackingOptions_Create(OH_PackingOptions **options)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建PackingOptions结构体的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptions_getmimetype",
              children: "Image_ErrorCode OH_PackingOptions_GetMimeType(OH_PackingOptions *options, Image_MimeType *format)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取MIME类型。该接口获取到的value.data缺少字符串结束符'\\0'，请谨慎使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptions_getmimetypewithnull",
              children: "Image_ErrorCode OH_PackingOptions_GetMimeTypeWithNull(OH_PackingOptions *options, Image_MimeType *format)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取编解码参数中的MIME类型。输出的format.data以字符串结束符'\\0'结尾。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptions_setmimetype",
              children: "Image_ErrorCode OH_PackingOptions_SetMimeType(OH_PackingOptions *options, Image_MimeType *format)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptions_getquality",
              children: "Image_ErrorCode OH_PackingOptions_GetQuality(OH_PackingOptions *options, uint32_t *quality)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取编码质量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptions_setquality",
              children: "Image_ErrorCode OH_PackingOptions_SetQuality(OH_PackingOptions *options, uint32_t quality)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置编码质量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptions_getneedspackproperties",
              children: "Image_ErrorCode OH_PackingOptions_GetNeedsPackProperties(OH_PackingOptions *options, bool *needsPackProperties)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取OH_PackingOptions结构体的needsPackProperties参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptions_setneedspackproperties",
              children: "Image_ErrorCode OH_PackingOptions_SetNeedsPackProperties(OH_PackingOptions *options, bool needsPackProperties)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置OH_PackingOptions结构体的needsPackProperties参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptions_getdesireddynamicrange",
              children: "Image_ErrorCode OH_PackingOptions_GetDesiredDynamicRange(OH_PackingOptions options, int32_t desiredDynamicRange)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取编码时期望的图片动态范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptions_setdesireddynamicrange",
              children: "Image_ErrorCode OH_PackingOptions_SetDesiredDynamicRange(OH_PackingOptions *options, int32_t desiredDynamicRange)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置编码时期望的图片动态范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptions_release",
              children: "Image_ErrorCode OH_PackingOptions_Release(OH_PackingOptions *options)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_PackingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptionsforsequence_create",
              children: "Image_ErrorCode OH_PackingOptionsForSequence_Create(OH_PackingOptionsForSequence **options)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_PackingOptionsForSequence结构体的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptionsforsequence_setframecount",
              children: "Image_ErrorCode OH_PackingOptionsForSequence_SetFrameCount(OH_PackingOptionsForSequence *options, uint32_t frameCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置编码时指定的帧数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptionsforsequence_getframecount",
              children: "Image_ErrorCode OH_PackingOptionsForSequence_GetFrameCount(OH_PackingOptionsForSequence *options, uint32_t *frameCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取编码时指定的帧数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptionsforsequence_setdelaytimelist",
              children: "Image_ErrorCode OH_PackingOptionsForSequence_SetDelayTimeList(OH_PackingOptionsForSequence *options, int32_t *delayTimeList, size_t delayTimeListLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定编码时图片的延迟时间数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptionsforsequence_getdelaytimelist",
              children: "Image_ErrorCode OH_PackingOptionsForSequence_GetDelayTimeList(OH_PackingOptionsForSequence *options, int32_t *delayTimeList, size_t delayTimeListLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取编码时图片的延迟时间数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptionsforsequence_setdisposaltypes",
              children: "Image_ErrorCode OH_PackingOptionsForSequence_SetDisposalTypes(OH_PackingOptionsForSequence *options, uint32_t *disposalTypes, size_t disposalTypesLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定编码时图片的过渡帧模式数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptionsforsequence_getdisposaltypes",
              children: "Image_ErrorCode OH_PackingOptionsForSequence_GetDisposalTypes(OH_PackingOptionsForSequence *options, uint32_t *disposalTypes, size_t disposalTypesLength)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取编码时图片的过渡帧模式数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptionsforsequence_setloopcount",
              children: "Image_ErrorCode OH_PackingOptionsForSequence_SetLoopCount(OH_PackingOptionsForSequence *options, uint32_t loopCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定编码时图片循环播放次数，取值范围为[0，65535]，0表示无限循环；若无此字段，则表示不循环播放。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptionsforsequence_getloopcount",
              children: "Image_ErrorCode OH_PackingOptionsForSequence_GetLoopCount(OH_PackingOptionsForSequence *options, uint32_t *loopCount)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取编码时图片循环播放次数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_packingoptionsforsequence_release",
              children: "Image_ErrorCode OH_PackingOptionsForSequence_Release(OH_PackingOptionsForSequence *options)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_PackingOptionsForSequence指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagepackernative_create",
              children: "Image_ErrorCode OH_ImagePackerNative_Create(OH_ImagePackerNative **imagePacker)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_ImagePackerNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagepackernative_packtodatafromimagesource",
              children: "Image_ErrorCode OH_ImagePackerNative_PackToDataFromImageSource(OH_ImagePackerNative *imagePacker, OH_PackingOptions *options, OH_ImageSourceNative *imageSource, uint8_t *outData, size_t *size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将ImageSource编码为指定格式的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagepackernative_packtodatafrompixelmap",
              children: "Image_ErrorCode OH_ImagePackerNative_PackToDataFromPixelmap(OH_ImagePackerNative *imagePacker, OH_PackingOptions *options, OH_PixelmapNative *pixelmap, uint8_t *outData, size_t *size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将Pixelmap编码为指定格式的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagepackernative_packtodatafrompicture",
              children: "Image_ErrorCode OH_ImagePackerNative_PackToDataFromPicture(OH_ImagePackerNative *imagePacker, OH_PackingOptions *options, OH_PictureNative *picture, uint8_t *outData, size_t *size)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将Picture编码为指定格式的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagepackernative_packtodatafrompixelmapsequence",
              children: "Image_ErrorCode OH_ImagePackerNative_PackToDataFromPixelmapSequence(OH_ImagePackerNative *imagePacker, OH_PackingOptionsForSequence *options, OH_PixelmapNative **pixelmapSequence,size_t sequenceLength, uint8_t *outData, size_t *outDataSize)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将Pixelmap序列编码为数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagepackernative_packtofilefromimagesource",
              children: "Image_ErrorCode OH_ImagePackerNative_PackToFileFromImageSource(OH_ImagePackerNative *imagePacker, OH_PackingOptions *options, OH_ImageSourceNative *imageSource, int32_t fd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将一个ImageSource编码到文件中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagepackernative_packtofilefrompixelmap",
              children: "Image_ErrorCode OH_ImagePackerNative_PackToFileFromPixelmap(OH_ImagePackerNative *imagePacker, OH_PackingOptions *options, OH_PixelmapNative *pixelmap, int32_t fd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将一个Pixelmap编码到文件中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagepackernative_packtofilefrompicture",
              children: "Image_ErrorCode OH_ImagePackerNative_PackToFileFromPicture(OH_ImagePackerNative *imagePacker, OH_PackingOptions *options, OH_PictureNative *picture, int32_t fd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将一个Picture编码到文件中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagepackernative_packtofilefrompixelmapsequence",
              children: "Image_ErrorCode OH_ImagePackerNative_PackToFileFromPixelmapSequence(OH_ImagePackerNative *imagePacker, OH_PackingOptionsForSequence *options, OH_PixelmapNative **pixelmapSequence, size_t sequenceLength, int32_t fd)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将一个Pixelmap序列编码到文件中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagepackernative_getsupportedformats",
              children: "Image_ErrorCode OH_ImagePackerNative_GetSupportedFormats(Image_MimeType **supportedFormats, size_t *length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取支持编码的图片格式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagepackernative_release",
              children: "Image_ErrorCode OH_ImagePackerNative_Release(OH_ImagePackerNative *imagePacker)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_ImagePackerNative指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image_packer_dynamic_range",
      children: "IMAGE_PACKER_DYNAMIC_RANGE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum IMAGE_PACKER_DYNAMIC_RANGE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编码指定动态范围。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "IMAGE_PACKER_DYNAMIC_RANGE_AUTO = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码动态范围根据图像信息自适应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PACKER_DYNAMIC_RANGE_SDR = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码图片为标准动态范围。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_packingoptions_create",
      children: "OH_PackingOptions_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptions_Create(OH_PackingOptions **options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建PackingOptions结构体的指针。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " **options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于操作的PackingOptions指针。"
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
      id: "oh_packingoptions_getmimetype",
      children: "OH_PackingOptions_GetMimeType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptions_GetMimeType(OH_PackingOptions *options,Image_MimeType *format)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取MIME类型。该接口获取到的value.data缺少字符串结束符'\\0'，请谨慎使用。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PackingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_MimeType"
            }), " *format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像格式。可传入一个空指针和零大小，系统将分配内存，但必须在使用后释放内存。"
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
      id: "oh_packingoptions_getmimetypewithnull",
      children: "OH_PackingOptions_GetMimeTypeWithNull()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptions_GetMimeTypeWithNull(OH_PackingOptions *options,Image_MimeType *format)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取编解码参数中的MIME类型。输出的format.data以字符串结束符'\\0'结尾。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码参数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_MimeType"
            }), " *format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码参数中的 MIME 类型的指针。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_PACKER_INVALID_PARAMETER：options或format为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_packingoptions_setmimetype",
      children: "OH_PackingOptions_SetMimeType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptions_SetMimeType(OH_PackingOptions *options,Image_MimeType *format)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置MIME类型。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PackingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_MimeType"
            }), " *format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像格式。"
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
      id: "oh_packingoptions_getquality",
      children: "OH_PackingOptions_GetQuality()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptions_GetQuality(OH_PackingOptions *options,uint32_t *quality)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取编码质量。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PackingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码质量。"
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
      id: "oh_packingoptions_setquality",
      children: "OH_PackingOptions_SetQuality()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptions_SetQuality(OH_PackingOptions *options,uint32_t quality)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置编码质量。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PackingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码质量。"
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
      id: "oh_packingoptions_getneedspackproperties",
      children: "OH_PackingOptions_GetNeedsPackProperties()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " Image_ErrorCode OH_PackingOptions_GetNeedsPackProperties(OH_PackingOptions *options,bool *needsPackProperties)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取OH_PackingOptions结构体的needsPackProperties参数。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PackingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool *needsPackProperties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否需要编码图片属性信息（例如Exif）。true表示需要，false表示不需要。"
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
      id: "oh_packingoptions_setneedspackproperties",
      children: "OH_PackingOptions_SetNeedsPackProperties()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptions_SetNeedsPackProperties(OH_PackingOptions *options,bool needsPackProperties)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置OH_PackingOptions结构体的needsPackProperties参数。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PackingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool needsPackProperties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否需要编码图片属性信息（例如Exif）。true表示需要，false表示不需要。"
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
      id: "oh_packingoptions_getdesireddynamicrange",
      children: "OH_PackingOptions_GetDesiredDynamicRange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptions_GetDesiredDynamicRange(OH_PackingOptions *options, int32_t* desiredDynamicRange)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取编码时期望的图片动态范围。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PackingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t* desiredDynamicRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望的动态范围[IMAGE_PACKER_DYNAMIC_RANGE]#image_packer_dynamic_range)。"
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
      id: "oh_packingoptions_setdesireddynamicrange",
      children: "OH_PackingOptions_SetDesiredDynamicRange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptions_SetDesiredDynamicRange(OH_PackingOptions *options, int32_t desiredDynamicRange)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置编码时期望的图片动态范围。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PackingOptions指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t desiredDynamicRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "期望的动态范围[IMAGE_PACKER_DYNAMIC_RANGE]#image_packer_dynamic_range)。"
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
      id: "oh_packingoptions_release",
      children: "OH_PackingOptions_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptions_Release(OH_PackingOptions *options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放OH_PackingOptions指针。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PackingOptions指针。"
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
      id: "oh_packingoptionsforsequence_create",
      children: "OH_PackingOptionsForSequence_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptionsForSequence_Create(OH_PackingOptionsForSequence **options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OH_PackingOptionsForSequence结构体的指针。"
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
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            }), " **options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于操作的OH_PackingOptionsForSequence指针。"
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
      id: "oh_packingoptionsforsequence_setframecount",
      children: "OH_PackingOptionsForSequence_SetFrameCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptionsForSequence_SetFrameCount(OH_PackingOptionsForSequence *options,uint32_t frameCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置编码时指定的帧数。"
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
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于操作的OH_PackingOptionsForSequence指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t frameCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的帧数。"
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
      id: "oh_packingoptionsforsequence_getframecount",
      children: "OH_PackingOptionsForSequence_GetFrameCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptionsForSequence_GetFrameCount(OH_PackingOptionsForSequence *options,uint32_t *frameCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取编码时指定的帧数。"
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
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于操作的OH_PackingOptionsForSequence指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *frameCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片的帧数。"
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
      id: "oh_packingoptionsforsequence_setdelaytimelist",
      children: "OH_PackingOptionsForSequence_SetDelayTimeList()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptionsForSequence_SetDelayTimeList(OH_PackingOptionsForSequence *options,int32_t *delayTimeList, size_t delayTimeListLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设定编码时图片的延迟时间数组。"
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
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于操作的OH_PackingOptionsForSequence指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *delayTimeList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片延迟时间数组的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t delayTimeListLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片延迟时间数组的长度。"
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
      id: "oh_packingoptionsforsequence_getdelaytimelist",
      children: "OH_PackingOptionsForSequence_GetDelayTimeList()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptionsForSequence_GetDelayTimeList(OH_PackingOptionsForSequence *options,int32_t *delayTimeList, size_t delayTimeListLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取编码时图片的延迟时间数组。"
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
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于操作的OH_PackingOptionsForSequence指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t *delayTimeList"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片延迟时间数组的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t delayTimeListLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片延迟时间数组的长度。"
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
      id: "oh_packingoptionsforsequence_setdisposaltypes",
      children: "OH_PackingOptionsForSequence_SetDisposalTypes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptionsForSequence_SetDisposalTypes(OH_PackingOptionsForSequence *options,uint32_t *disposalTypes, size_t disposalTypesLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设定编码时图片的过渡帧模式数组。"
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
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于操作的OH_PackingOptionsForSequence指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *disposalTypes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片过渡帧模式数组的指针，图片帧过渡模式的参数，如果长度小于frameCount，不足的部分将使用disposalTypes中的最后一个值进行填充，可取值如下：  0：不需要任何操作。  1：保持图形不变。  2：恢复背景色。  3：恢复到之前的状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t disposalTypesLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片过渡帧模式数组的长度。"
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
      id: "oh_packingoptionsforsequence_getdisposaltypes",
      children: "OH_PackingOptionsForSequence_GetDisposalTypes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptionsForSequence_GetDisposalTypes(OH_PackingOptionsForSequence *options,uint32_t *disposalTypes, size_t disposalTypesLength)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取编码时图片的过渡帧模式数组。"
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
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于操作的OH_PackingOptionsForSequence指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *disposalTypes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片过渡帧模式数组的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t disposalTypesLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片过渡帧模式数组的长度。"
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
      id: "oh_packingoptionsforsequence_setloopcount",
      children: "OH_PackingOptionsForSequence_SetLoopCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptionsForSequence_SetLoopCount(OH_PackingOptionsForSequence *options, uint32_t loopCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设定编码时图片循环播放次数，取值范围为[0，65535]，0表示无限循环；若无此字段，则表示不循环播放。"
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
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于操作的OH_PackingOptionsForSequence指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t loopCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片循环播放次数。"
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
      id: "oh_packingoptionsforsequence_getloopcount",
      children: "OH_PackingOptionsForSequence_GetLoopCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptionsForSequence_GetLoopCount(OH_PackingOptionsForSequence *options, uint32_t *loopCount)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取编码时图片循环播放次数。"
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
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于操作的OH_PackingOptionsForSequence指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *loopCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片循环播放次数。"
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
      id: "oh_packingoptionsforsequence_release",
      children: "OH_PackingOptionsForSequence_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PackingOptionsForSequence_Release(OH_PackingOptionsForSequence *options)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放OH_PackingOptionsForSequence指针。"
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
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于操作的OH_PackingOptionsForSequence指针。"
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
      id: "oh_imagepackernative_create",
      children: "OH_ImagePackerNative_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImagePackerNative_Create(OH_ImagePackerNative **imagePacker)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OH_ImagePackerNative指针。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative",
              children: "OH_ImagePackerNative"
            }), " **imagePacker"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImagePackerNative指针。"
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
      id: "oh_imagepackernative_packtodatafromimagesource",
      children: "OH_ImagePackerNative_PackToDataFromImageSource()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImagePackerNative_PackToDataFromImageSource(OH_ImagePackerNative *imagePacker,OH_PackingOptions *options, OH_ImageSourceNative *imageSource, uint8_t *outData, size_t *size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将ImageSource编码为指定格式的数据。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative",
              children: "OH_ImagePackerNative"
            }), " *imagePacker"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImagePackerNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码选项参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *imageSource"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于编码的image source指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *outData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储打包图像输出数据的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储打包图像输出数据的缓冲区大小。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_DECODE_FAILED：解码失败。  IMAGE_ALLOC_FAILED：申请内存失败。  IMAGE_TOO_LARGE：数据或图片过大。  IMAGE_UNKNOWN_ERROR：未知错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagepackernative_packtodatafrompixelmap",
      children: "OH_ImagePackerNative_PackToDataFromPixelmap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImagePackerNative_PackToDataFromPixelmap(OH_ImagePackerNative *imagePacker,OH_PackingOptions *options, OH_PixelmapNative *pixelmap, uint8_t *outData, size_t *size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将Pixelmap编码为指定格式的数据。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative",
              children: "OH_ImagePackerNative"
            }), " *imagePacker"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImagePackerNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码选项参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), " *pixelmap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于编码的Pixelmap指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *outData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储打包图像输出数据的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储打包图像输出数据的缓冲区大小。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_DECODE_FAILED：解码失败。  IMAGE_ALLOC_FAILED：申请内存失败。  IMAGE_TOO_LARGE：数据或图片过大。  IMAGE_UNKNOWN_ERROR：未知错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagepackernative_packtodatafrompicture",
      children: "OH_ImagePackerNative_PackToDataFromPicture()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImagePackerNative_PackToDataFromPicture(OH_ImagePackerNative *imagePacker,OH_PackingOptions *options, OH_PictureNative *picture, uint8_t *outData, size_t *size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将Picture编码为指定格式的数据。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative",
              children: "OH_ImagePackerNative"
            }), " *imagePacker"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImagePackerNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码选项参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), " *picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于编码的Picture指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *outData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储打包图像输出数据的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储打包图像输出数据的缓冲区大小。"
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
      id: "oh_imagepackernative_packtodatafrompixelmapsequence",
      children: "OH_ImagePackerNative_PackToDataFromPixelmapSequence()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImagePackerNative_PackToDataFromPixelmapSequence(OH_ImagePackerNative *imagePacker,OH_PackingOptionsForSequence *options, OH_PixelmapNative **pixelmapSequence,size_t sequenceLength, uint8_t *outData, size_t *outDataSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将Pixelmap序列编码为数据。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative",
              children: "OH_ImagePackerNative"
            }), " *imagePacker"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImagePackerNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            }), " *options"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["编码选项参数 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), " **pixelmapSequence"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于编码的Pixelmap序列指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t sequenceLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于编码的Pixelmap序列长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t *outData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储编码后图像输出数据的缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t *outDataSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于存储编码后图像输出数据的缓冲区大小。"
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
      id: "oh_imagepackernative_packtofilefromimagesource",
      children: "OH_ImagePackerNative_PackToFileFromImageSource()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImagePackerNative_PackToFileFromImageSource(OH_ImagePackerNative *imagePacker,OH_PackingOptions *options, OH_ImageSourceNative *imageSource, int32_t fd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将一个ImageSource编码到文件中。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative",
              children: "OH_ImagePackerNative"
            }), " *imagePacker"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImagePackerNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码选项参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative",
              children: "OH_ImageSourceNative"
            }), " *imageSource"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于编码的image source指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可写的文件描述符。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_DECODE_FAILED：解码失败。  IMAGE_UNKNOWN_ERROR：未知错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagepackernative_packtofilefrompixelmap",
      children: "OH_ImagePackerNative_PackToFileFromPixelmap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImagePackerNative_PackToFileFromPixelmap(OH_ImagePackerNative *imagePacker,OH_PackingOptions *options, OH_PixelmapNative *pixelmap, int32_t fd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将一个Pixelmap编码到文件中。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative",
              children: "OH_ImagePackerNative"
            }), " *imagePacker"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImagePackerNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码选项参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), " *pixelmap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于编码的pixelmap指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可写的文件描述符。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_DECODE_FAILED：解码失败。  IMAGE_UNKNOWN_ERROR：未知错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagepackernative_packtofilefrompicture",
      children: "OH_ImagePackerNative_PackToFileFromPicture()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImagePackerNative_PackToFileFromPicture(OH_ImagePackerNative *imagePacker,OH_PackingOptions *options, OH_PictureNative *picture, int32_t fd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将一个Picture编码到文件中。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative",
              children: "OH_ImagePackerNative"
            }), " *imagePacker"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImagePackerNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-packingoptions/capi-image-nativemodule-oh-packingoptions",
              children: "OH_PackingOptions"
            }), " *options"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码选项参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturenative/capi-image-nativemodule-oh-picturenative",
              children: "OH_PictureNative"
            }), " *picture"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于编码的picture指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可写的文件描述符。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_DECODE_FAILED：解码失败。  IMAGE_UNKNOWN_ERROR：未知错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagepackernative_packtofilefrompixelmapsequence",
      children: "OH_ImagePackerNative_PackToFileFromPixelmapSequence()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImagePackerNative_PackToFileFromPixelmapSequence(OH_ImagePackerNative *imagePacker,OH_PackingOptionsForSequence *options, OH_PixelmapNative **pixelmapSequence, size_t sequenceLength, int32_t fd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将一个Pixelmap序列编码到文件中。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative",
              children: "OH_ImagePackerNative"
            }), " *imagePacker"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImagePackerNative指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            }), " *options"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["编码选项参数 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/pi-image-nativemodule-oh-packingoptionsforsequence/pi-image-nativemodule-oh-packingoptionsforsequence",
              children: "OH_PackingOptionsForSequence"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), " **pixelmapSequence"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于编码的Pixelmap序列指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t sequenceLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于编码的Pixelmap序列长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可写的文件描述符。"
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
      id: "oh_imagepackernative_getsupportedformats",
      children: "OH_ImagePackerNative_GetSupportedFormats()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImagePackerNative_GetSupportedFormats(Image_MimeType **supportedFormats, size_t *length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取支持编码的图片格式。"
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
            children: "支持编码的图片格式。"
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
            children: "IMAGE_SUCCESS：操作成功。  IMAGE_PACKER_INVALID_PARAMETER：参数异常，supportedFormats或length为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagepackernative_release",
      children: "OH_ImagePackerNative_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_ImagePackerNative_Release(OH_ImagePackerNative *imagePacker)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放OH_ImagePackerNative指针。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagepackernative/capi-image-nativemodule-oh-imagepackernative",
              children: "OH_ImagePackerNative"
            }), " *imagePacker"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_ImagePackerNative指针。"
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