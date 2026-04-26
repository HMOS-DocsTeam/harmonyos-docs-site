"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["828985"], {
968696(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_headerfile_capi_image_common_h_capi_image_common_h_md_8ba_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-headerfile-capi-image-common-h-capi-image-common-h-md-8ba.json
var site_docs_ref_image_api_image_c_image_headerfile_capi_image_common_h_capi_image_common_h_md_8ba_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h","title":"image_common.h","description":"概述","source":"@site/docs-ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h.md","sourceDirName":"image-api/image-c/image-headerfile/capi-image-common-h","slug":"/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"image_common.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-common-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-image-common-h"},"sidebar":"ref","previous":{"title":"ImageProcessing","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-module/capi-imageprocessing/capi-imageprocessing"},"next":{"title":"image_native.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-native-h/capi-image-native-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h.md


const frontMatter = {
	title: 'image_common.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-common-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-image-common-h'
};
const contentTitle = 'image_common.h';

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
  "value": "变量",
  "id": "变量",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "Image_ErrorCode",
  "id": "image_errorcode",
  "level": 3
}, {
  "value": "Image_MetadataType",
  "id": "image_metadatatype",
  "level": 3
}, {
  "value": "IMAGE_ALLOCATOR_MODE",
  "id": "image_allocator_mode",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_PictureMetadata_Create()",
  "id": "oh_picturemetadata_create",
  "level": 3
}, {
  "value": "OH_PictureMetadata_GetProperty()",
  "id": "oh_picturemetadata_getproperty",
  "level": 3
}, {
  "value": "OH_PictureMetadata_SetProperty()",
  "id": "oh_picturemetadata_setproperty",
  "level": 3
}, {
  "value": "OH_PictureMetadata_GetPropertyWithNull()",
  "id": "oh_picturemetadata_getpropertywithnull",
  "level": 3
}, {
  "value": "OH_PictureMetadata_Release()",
  "id": "oh_picturemetadata_release",
  "level": 3
}, {
  "value": "OH_PictureMetadata_Clone()",
  "id": "oh_picturemetadata_clone",
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
        id: "image_commonh",
        children: "image_common.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明图像接口使用的公共枚举和结构体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/image_framework/image/image_common.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libimage_common.so"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-size/capi-image-nativemodule-image-size",
              children: "Image_Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image_Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像大小结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-region/capi-image-nativemodule-image-region",
              children: "Image_Region"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image_Region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待解码的图像源区域结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-positionarea/capi-image-nativemodule-image-positionarea",
              children: "Image_PositionArea"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image_PositionArea"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要读取或写入的图像像素区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-scale/capi-image-nativemodule-image-scale",
              children: "Image_Scale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image_Scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图像缩放倍数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image_String/Image_MimeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturemetadata/capi-image-nativemodule-oh-picturemetadata",
              children: "OH_PictureMetadata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PictureMetadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明用于Picture的元数据。"
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
              href: "#image_errorcode",
              children: "Image_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image_ErrorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#image_metadatatype",
              children: "Image_MetadataType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image_MetadataType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义元数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#image_allocator_mode",
              children: "IMAGE_ALLOCATOR_MODE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_ALLOCATOR_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pixelmap内存分配类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_picturemetadata_create",
              children: "Image_ErrorCode OH_PictureMetadata_Create(Image_MetadataType metadataType, OH_PictureMetadata **metadata)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_PictureMetadata指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturemetadata_getproperty",
              children: "Image_ErrorCode OH_PictureMetadata_GetProperty(OH_PictureMetadata *metadata, Image_String *key, Image_String *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据key获取Metadata的单条属性。该接口获取到的value.data缺少字符串结束符'\\0'，请谨慎使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturemetadata_setproperty",
              children: "Image_ErrorCode OH_PictureMetadata_SetProperty(OH_PictureMetadata *metadata, Image_String *key, Image_String *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据key修改Metadata的单条属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturemetadata_getpropertywithnull",
              children: "Image_ErrorCode OH_PictureMetadata_GetPropertyWithNull(OH_PictureMetadata *metadata, Image_String *key, Image_String *value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图片元数据的属性值。输出的value.data以字符串结束符'\\0'结尾。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturemetadata_release",
              children: "Image_ErrorCode OH_PictureMetadata_Release(OH_PictureMetadata *metadata)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放OH_PictureMetadata指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_picturemetadata_clone",
              children: "Image_ErrorCode OH_PictureMetadata_Clone(OH_PictureMetadata *oldMetadata, OH_PictureMetadata **newMetadata)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拷贝元数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量",
      children: "变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "static const char * MIME_TYPE_BMP = \"image/bmp\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["bmp图片格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * MIME_TYPE_JPEG = \"image/jpeg\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["jpeg图片格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * MIME_TYPE_HEIC = \"image/heic\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["heic图片格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * MIME_TYPE_PNG = \"image/png\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["png图片格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * MIME_TYPE_WEBP = \"image/webp\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["webp图片格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * MIME_TYPE_GIF = \"image/gif\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["gif图片格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * MIME_TYPE_ICON = \"image/x-icon\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ico图片格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_BITS_PER_SAMPLE = \"BitsPerSample\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["每个像素比特数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_ORIENTATION = \"Orientation\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片方向。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_IMAGE_LENGTH = \"ImageLength\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_IMAGE_WIDTH = \"ImageWidth\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片宽度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_LATITUDE = \"GPSLatitude\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片纬度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_LONGITUDE = \"GPSLongitude\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片经度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_LATITUDE_REF = \"GPSLatitudeRef\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["纬度引用，例如N或S。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_LONGITUDE_REF = \"GPSLongitudeRef\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["经度引用，例如W或E。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_DATE_TIME_ORIGINAL = \"DateTimeOriginal\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拍摄时间，例如2022:09:06 15:48:00。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_EXPOSURE_TIME = \"ExposureTime\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["曝光时间，例如1/33 sec。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SCENE_TYPE = \"SceneType\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拍摄场景模式，例如人像、风光、运动、夜景等。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_ISO_SPEED_RATINGS = \"ISOSpeedRatings\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ISO感光度，例如400。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_F_NUMBER = \"FNumber\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["光圈值，例如f/1.8。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_COMPRESSED_BITS_PER_PIXEL = \"CompressedBitsPerPixel\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于压缩图像的压缩模式，单位为每像素位数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_COMPRESSION = \"Compression\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像压缩方案。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_PHOTOMETRIC_INTERPRETATION = \"PhotometricInterpretation\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["像素构成，例如RGB或YCbCr。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_STRIP_OFFSETS = \"StripOffsets\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["每个strip的字节偏移量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SAMPLES_PER_PIXEL = \"SamplesPerPixel\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["每个像素的分量数。由于该标准适用于RGB和YCbCr图像，因此该标签的值设置为3。在JPEG压缩数据中，使用JPEG标记代替该标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_ROWS_PER_STRIP = \"RowsPerStrip\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["每个strip的图像数据行数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_STRIP_BYTE_COUNTS = \"StripByteCounts\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["每个图像数据带的总字节数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_X_RESOLUTION = \"XResolution\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像宽度方向的分辨率。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_Y_RESOLUTION = \"YResolution\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像高度方向的分辨率。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_PLANAR_CONFIGURATION = \"PlanarConfiguration\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示像素组件的记录格式，chunky格式或是planar格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_RESOLUTION_UNIT = \"ResolutionUnit\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于测量XResolution和YResolution的单位。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_TRANSFER_FUNCTION = \"TransferFunction\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像的传递函数，通常用于颜色校正。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SOFTWARE = \"Software\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于生成图像的软件的名称和版本。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_ARTIST = \"Artist\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建图像的用户名称。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_WHITE_POINT = \"WhitePoint\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像的白点色度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_PRIMARY_CHROMATICITIES = \"PrimaryChromaticities\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像的主要颜色的色度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_YCBCR_COEFFICIENTS = \"YCbCrCoefficients\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从RGB到YCbCr图像数据的转换矩阵系数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_YCBCR_SUB_SAMPLING = \"YCbCrSubSampling\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["色度分量与亮度分量的采样比率。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_YCBCR_POSITIONING = \"YCbCrPositioning\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["色度分量相对于亮度分量的位置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_REFERENCE_BLACK_WHITE = \"ReferenceBlackWhite\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参考黑点值和参考白点值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_COPYRIGHT = \"Copyright\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像的版权信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_JPEG_INTERCHANGE_FORMAT = \"JPEGInterchangeFormat\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["JPEG压缩缩略图数据开始字节（SOI）的偏移。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_JPEG_INTERCHANGE_FORMAT_LENGTH = \"JPEGInterchangeFormatLength\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["JPEG压缩缩略图数据的字节数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_EXPOSURE_PROGRAM = \"ExposureProgram\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拍照时相机用来设置曝光的程序的类别。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SPECTRAL_SENSITIVITY = \"SpectralSensitivity\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示所用相机的每个通道的光谱灵敏度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_OECF = \"OECF\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示ISO 14524中规定的光电转换函数（OECF）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_EXIF_VERSION = \"ExifVersion\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持的Exif标准版本。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_DATE_TIME_DIGITIZED = \"DateTimeDigitized\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像作为数字数据存储的日期和时间，格式为YYYY:MM:DD HH:MM:SS。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_COMPONENTS_CONFIGURATION = \"ComponentsConfiguration\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["压缩数据的特定信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SHUTTER_SPEED_VALUE = \"ShutterSpeedValue\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["快门速度，以APEX（摄影曝光的加法系统）值表示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_BRIGHTNESS_VALUE = \"BrightnessValue\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像的亮度值，以APEX单位表示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_MAX_APERTURE_VALUE = \"MaxApertureValue\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["最小F数镜头。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SUBJECT_DISTANCE = \"SubjectDistance\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["测量单位为米的主体距离。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SUBJECT_AREA = \"SubjectArea\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该标签指示整个场景中主要主体的位置和区域。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_MAKER_NOTE = \"MakerNote\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Exif/DCF制造商使用的标签，用于记录任何所需信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SUBSEC_TIME = \"SubsecTime\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于为DateTime标签记录秒的分数的标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SUBSEC_TIME_ORIGINAL = \"SubsecTimeOriginal\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于为DateTimeOriginal标签记录秒的分数的标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SUBSEC_TIME_DIGITIZED = \"SubsecTimeDigitized\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于为DateTimeDigitized标签记录秒的分数的标签。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FLASHPIX_VERSION = \"FlashpixVersion\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该标签表示FPXR文件支持的Flashpix格式版本，增强了设备兼容性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_COLOR_SPACE = \"ColorSpace\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["色彩空间信息标签，通常记录为色彩空间指定符。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_RELATED_SOUND_FILE = \"RelatedSoundFile\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["与图像数据相关的音频文件的名称。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FLASH_ENERGY = \"FlashEnergy\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像捕获时的闪光能量，以BCPS表示。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SPATIAL_FREQUENCY_RESPONSE = \"SpatialFrequencyResponse\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相机或输入设备的空间频率表。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FOCAL_PLANE_X_RESOLUTION = \"FocalPlaneXResolution\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像宽度中每FocalPlaneResolutionUnit的像素。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FOCAL_PLANE_Y_RESOLUTION = \"FocalPlaneYResolution\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像高度中每FocalPlaneResolutionUnit的像素。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FOCAL_PLANE_RESOLUTION_UNIT = \"FocalPlaneResolutionUnit\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["测量FocalPlaneXResolution和FocalPlaneYResolution的单位。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SUBJECT_LOCATION = \"SubjectLocation\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["主要对象相对于左边缘的位置。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_EXPOSURE_INDEX = \"ExposureIndex\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["捕获时选定的曝光指数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SENSING_METHOD = \"SensingMethod\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相机上的图像传感器类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FILE_SOURCE = \"FileSource\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表明图像来源。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_CFA_PATTERN = \"CFAPattern\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像传感器的色彩滤光片（CFA）几何图案。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_CUSTOM_RENDERED = \"CustomRendered\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指示图像数据上的特殊处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_EXPOSURE_MODE = \"ExposureMode\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拍摄时设置的曝光模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_DIGITAL_ZOOM_RATIO = \"DigitalZoomRatio\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["捕获时的数字变焦比率。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SCENE_CAPTURE_TYPE = \"SceneCaptureType\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["捕获的场景类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GAIN_CONTROL = \"GainControl\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["整体图像增益调整的程度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_CONTRAST = \"Contrast\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相机应用的对比度处理方向。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SATURATION = \"Saturation\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相机应用的饱和度处理方向。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SHARPNESS = \"Sharpness\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相机应用的锐度处理方向。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_DEVICE_SETTING_DESCRIPTION = \"DeviceSettingDescription\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["特定相机模型的拍照条件信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SUBJECT_DISTANCE_RANGE = \"SubjectDistanceRange\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示主体到相机的距离范围。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_IMAGE_UNIQUE_ID = \"ImageUniqueID\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为每张图片唯一分配的标识符。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_VERSION_ID = \"GPSVersionID\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GPSInfoIFD的版本。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_ALTITUDE_REF = \"GPSAltitudeRef\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于GPS高度的参照高度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_ALTITUDE = \"GPSAltitude\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["基于GPSAltitudeRef的高度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_SATELLITES = \"GPSSatellites\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于测量的GPS卫星。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_STATUS = \"GPSStatus\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["录制图像时GPS接收器的状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_MEASURE_MODE = \"GPSMeasureMode\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GPS测量模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_DOP = \"GPSDOP\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GPS DOP（数据精度等级）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_SPEED_REF = \"GPSSpeedRef\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用来表示GPS接收器移动速度的单位。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_SPEED = \"GPSSpeed\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GPS接收器的移动速度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_TRACK_REF = \"GPSTrackRef\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GPS接收机移动方向的参照。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_TRACK = \"GPSTrack\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GPS接收机的移动方向。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_IMG_DIRECTION_REF = \"GPSImgDirectionRef\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像方向的参照。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_IMG_DIRECTION = \"GPSImgDirection\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["拍摄时图像的方向。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_MAP_DATUM = \"GPSMapDatum\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GPS接收器使用的大地测量数据。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_DEST_LATITUDE_REF = \"GPSDestLatitudeRef\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目的地点的纬度参照。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_DEST_LATITUDE = \"GPSDestLatitude\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目的地点的纬度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_DEST_LONGITUDE_REF = \"GPSDestLongitudeRef\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目的地点的经度参照。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_PROCESSING_METHOD = \"GPSProcessingMethod\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["记录定位方法名的字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_AREA_INFORMATION = \"GPSAreaInformation\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["记录GPS区域名的字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_DIFFERENTIAL = \"GPSDifferential\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此字段表示GPS数据是否应用了差分校正，对于精确的位置准确性至关重要。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_BODY_SERIAL_NUMBER = \"BodySerialNumber\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相机机身的序列号。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_CAMERA_OWNER_NAME = \"CameraOwnerName\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["相机所有者的姓名。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_COMPOSITE_IMAGE = \"CompositeImage\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示图像是否为合成图像。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_DNG_VERSION = \"DNGVersion\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DNG版本标签编码了符合DNG规范的四级版本号。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_DEST_LONGITUDE = \"GPSDestLongitude\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目的地点的经度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_DEST_BEARING_REF = \"GPSDestBearingRef\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向目的地点的方位参照。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_DEST_BEARING = \"GPSDestBearing\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目的地方位。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_DEST_DISTANCE_REF = \"GPSDestDistanceRef\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["目标点距离的测量单位。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_DEST_DISTANCE = \"GPSDestDistance\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["到目的地点的距离。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_DEFAULT_CROP_SIZE = \"DefaultCropSize\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DefaultCropSize指定了原始坐标中的最终图像大小，考虑了额外的边缘像素。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GAMMA = \"Gamma\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示系数伽马的值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_ISO_SPEED_LATITUDEYYY = \"ISOSpeedLatitudeyyy\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该标签指示摄像机或输入设备的ISO速度纬度yyy值，该值在ISO 12232中定义。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_ISO_SPEED_LATITUDEZZZ = \"ISOSpeedLatitudezzz\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该标签指示摄像机或输入设备的ISO速度纬度zzz值，该值在ISO 12232中定义。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_LENS_MAKE = \"LensMake\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["镜头的制造商。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_LENS_MODEL = \"LensModel\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["镜头的型号名称。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_LENS_SERIAL_NUMBER = \"LensSerialNumber\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["镜头的序列号。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_LENS_SPECIFICATION = \"LensSpecification\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用的镜头规格。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_NEW_SUBFILE_TYPE = \"NewSubfileType\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在Exif中，\"NewSubfileType\"字段用于标识子文件的数据类型，如全分辨率图像、缩略图或多帧图像的一部分。其值是位掩码，0代表全分辨率图像，1代表缩略图，2代表多帧图像的一部分。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_OFFSET_TIME = \"OffsetTime\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在Exif中，OffsetTime字段表示与UTC（协调世界时）的时间偏移，格式为±HH:MM，用于确定照片拍摄的本地时间。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_OFFSET_TIME_DIGITIZED = \"OffsetTimeDigitized\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此标签记录图像数字化时的UTC偏移量，有助于准确调整时间戳。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_OFFSET_TIME_ORIGINAL = \"OffsetTimeOriginal\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此标签记录原始图像创建时的UTC偏移量，对于时间敏感的应用至关重要。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SOURCE_EXPOSURE_TIMES_OF_COMPOSITE_IMAGE = \"SourceExposureTimesOfCompositeImage\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["合成图像的源图像曝光时间。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SOURCE_IMAGE_NUMBER_OF_COMPOSITE_IMAGE = \"SourceImageNumberOfCompositeImage\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于合成图像的源图像数量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SUBFILE_TYPE = \"SubfileType\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此标签指示此子文件中的数据类型。标签已弃用，请使用NewSubfileType替代。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GPS_H_POSITIONING_ERROR = \"GPSHPositioningError\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此标签指示水平定位误差，单位为米。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_PHOTOGRAPHIC_SENSITIVITY = \"PhotographicSensitivity\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["此标签指示拍摄图像时相机或输入设备的灵敏度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_BURST_NUMBER = \"HwMnoteBurstNumber\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["连拍次数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FACE_CONF = \"HwMnoteFaceConf\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["人脸置信度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FACE_LEYE_CENTER = \"HwMnoteFaceLeyeCenter\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["左眼中心。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FACE_MOUTH_CENTER = \"HwMnoteFaceMouthCenter\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["嘴中心。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FACE_POINTER = \"HwMnoteFacePointer\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["脸部指针。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FACE_RECT = \"HwMnoteFaceRect\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["脸部矩形。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FACE_REYE_CENTER = \"HwMnoteFaceReyeCenter\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["右眼中心。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FACE_SMILE_SCORE = \"HwMnoteFaceSmileScore\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FaceCount张人脸的笑脸分数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FACE_VERSION = \"HwMnoteFaceVersion\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["人脸算法版本信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FRONT_CAMERA = \"HwMnoteFrontCamera\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否是前置相机自拍。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SCENE_POINTER = \"HwMnoteScenePointer\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["场景指针。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_SCENE_VERSION = \"HwMnoteSceneVersion\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["场景算法版本信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_IS_XMAGE_SUPPORTED = \"HwMnoteIsXmageSupported\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否支持XMAGE。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_XMAGE_MODE = \"HwMnoteXmageMode\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XMAGE水印模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_XMAGE_LEFT = \"HwMnoteXmageLeft\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["水印区域X1坐标。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_XMAGE_TOP = \"HwMnoteXmageTop\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["水印区域Y1坐标。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_XMAGE_RIGHT = \"HwMnoteXmageRight\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["水印区域X2坐标  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_XMAGE_BOTTOM = \"HwMnoteXmageBottom\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["水印区域Y2坐标。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_CLOUD_ENHANCEMENT_MODE = \"HwMnoteCloudEnhancementMode\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["云增强模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_WIND_SNAPSHOT_MODE = \"HwMnoteWindSnapshotMode\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["运动快拍模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_GIF_LOOP_COUNT = \"GIFLoopCount\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GIF图片循环次数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_X_IN_ORIGINAL = \"XInOriginal\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["水印裁剪图左上角在原始图中的X坐标。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_Y_IN_ORIGINAL = \"YInOriginal\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["水印裁剪图左上角在原始图中的Y坐标。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FRAGMENT_WIDTH = \"FragmentImageWidth\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["水印裁剪图的宽。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * OHOS_IMAGE_PROPERTY_FRAGMENT_HEIGHT = \"FragmentImageHeight\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["水印裁剪图的高。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * IMAGE_PROPERTY_GIF_DELAY_TIME = \"GifDelayTime\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GIF图片的每帧播放时长（单位为毫秒）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static const char * IMAGE_PROPERTY_GIF_DISPOSAL_TYPE = \"GifDisposalType\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GIF图片每帧的帧过渡模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image_errorcode",
      children: "Image_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Image_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "IMAGE_SUCCESS = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_BAD_PARAMETER = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_UNSUPPORTED_MIME_TYPE = 7600101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_UNKNOWN_MIME_TYPE = 7600102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_TOO_LARGE = 7600103"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过大的数据或图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_GET_IMAGE_DATA_FAILED = 7600104"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取图像数据失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_DMA_NOT_EXIST = 7600173"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存不是DMA内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_DMA_OPERATION_FAILED = 7600174"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMA内存操作失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_UNSUPPORTED_OPERATION = 7600201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_UNSUPPORTED_METADATA = 7600202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的metadata。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_UNSUPPORTED_CONVERSION = 7600203"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的转换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_INVALID_REGION = 7600204"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_UNSUPPORTED_MEMORY_FORMAT = 7600205"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不支持的内存格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_INVALID_PARAMETER = 7600206"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["无效参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 19"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_UNSUPPORTED_DATA_FORMAT = 7600207"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不支持的数据格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_ALLOC_FAILED = 7600301"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "申请内存失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_COPY_FAILED = 7600302"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存拷贝失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_LOCK_UNLOCK_FAILED = 7600303"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内存加锁或解锁失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_INIT_FAILED = 7600304"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["初始化失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_CREATE_PIXELMAP_FAILED = 7600305"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建PixelMap失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_ALLOCATOR_MODE_UNSUPPORTED = 7600501"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不支持的内存分配器类型。例如，使用共享内存创建hdr图像。  DMA内存支持hdr元数据。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_UNKNOWN_ERROR = 7600901"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_BAD_SOURCE = 7700101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码数据源异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SOURCE_UNSUPPORTED_MIME_TYPE = 7700102"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图片解码中不支持的MIME类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SOURCE_TOO_LARGE = 7700103"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["图像过大。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SOURCE_UNSUPPORTED_ALLOCATOR_TYPE = 7700201"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不支持的分配器类型。例如，DMA支持HDR元数据，可以使用共享内存解码HDR图像。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SOURCE_UNSUPPORTED_METADATA = 7700202"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不支持的元数据类型。如不支持的属性名或属性值非法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SOURCE_UNSUPPORTED_OPTIONS = 7700203"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不支持的选项。例如，无法将图像转换为所需的像素格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SOURCE_INVALID_PARAMETER = 7700204"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ImageSource的无效参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 19"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_DECODE_FAILED = 7700301"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_SOURCE_ALLOC_FAILED = 7700302"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内存申请失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 15"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PACKER_INVALID_PARAMETER = 7800202"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ImagePacker的无效参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 19"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_ENCODE_FAILED = 7800301"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_RECEIVER_INVALID_PARAMETER = 7900201"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ImageReceiver的无效参数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image_metadatatype",
      children: "Image_MetadataType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Image_MetadataType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义元数据类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "EXIF_METADATA = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EXIF元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FRAGMENT_METADATA = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "水印裁剪图元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GIF_METADATA = 5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GIF图片元数据。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "image_allocator_mode",
      children: "IMAGE_ALLOCATOR_MODE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum IMAGE_ALLOCATOR_MODE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pixelmap内存分配类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
            children: "IMAGE_ALLOCATOR_MODE_AUTO = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统决定创建pixelmap时分配内存的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_ALLOCATOR_MODE_DMA = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分配DMA类型的内存Buffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_ALLOCATOR_MODE_SHARED_MEMORY = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用共享内存创建pixelmap。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_picturemetadata_create",
      children: "OH_PictureMetadata_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureMetadata_Create(Image_MetadataType metadataType, OH_PictureMetadata **metadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OH_PictureMetadata指针。"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-common-h/capi-image-common-h#image_metadatatype",
              children: "Image_MetadataType"
            }), " metadataType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturemetadata/capi-image-nativemodule-oh-picturemetadata",
              children: "OH_PictureMetadata"
            }), " **metadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PictureMetadata指针。"
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
      id: "oh_picturemetadata_getproperty",
      children: "OH_PictureMetadata_GetProperty()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureMetadata_GetProperty(OH_PictureMetadata *metadata, Image_String *key, Image_String *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据key获取Metadata的单条属性。该接口获取到的value.data缺少字符串结束符'\\0'，请谨慎使用。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturemetadata/capi-image-nativemodule-oh-picturemetadata",
              children: "OH_PictureMetadata"
            }), " *metadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PictureMetadata指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性的键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性的值。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_UNSUPPORTED_METADATA：不支持的元数据类型，或元数据类型与辅助图片类型不匹配。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_picturemetadata_setproperty",
      children: "OH_PictureMetadata_SetProperty()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureMetadata_SetProperty(OH_PictureMetadata *metadata, Image_String *key, Image_String *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据key修改Metadata的单条属性。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturemetadata/capi-image-nativemodule-oh-picturemetadata",
              children: "OH_PictureMetadata"
            }), " *metadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PictureMetadata指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性的键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性的值。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_BAD_PARAMETER：参数错误。  IMAGE_UNSUPPORTED_METADATA：不支持的元数据类型，或元数据类型与辅助图片类型不匹配。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_picturemetadata_getpropertywithnull",
      children: "OH_PictureMetadata_GetPropertyWithNull()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureMetadata_GetPropertyWithNull(OH_PictureMetadata *metadata, Image_String *key, Image_String *value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取图片元数据的属性值。输出的value.data以字符串结束符'\\0'结尾。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturemetadata/capi-image-nativemodule-oh-picturemetadata",
              children: "OH_PictureMetadata"
            }), " *metadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将被操作的PictureMetadata指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性键指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-image-string/capi-image-nativemodule-image-string",
              children: "Image_String"
            }), " *value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性值指针。"
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
            children: "IMAGE_SUCCESS：执行成功。  IMAGE_INVALID_PARAMETER：metadata、key或value为空。  IMAGE_UNSUPPORTED_METADATA：不支持的元数据类型，或元数据类型与辅助图片类型不匹配。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_picturemetadata_release",
      children: "OH_PictureMetadata_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureMetadata_Release(OH_PictureMetadata *metadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放OH_PictureMetadata指针。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturemetadata/capi-image-nativemodule-oh-picturemetadata",
              children: "OH_PictureMetadata"
            }), " *metadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PictureMetadata指针。"
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
      id: "oh_picturemetadata_clone",
      children: "OH_PictureMetadata_Clone()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image_ErrorCode OH_PictureMetadata_Clone(OH_PictureMetadata *oldMetadata, OH_PictureMetadata **newMetadata)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拷贝元数据。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturemetadata/capi-image-nativemodule-oh-picturemetadata",
              children: "OH_PictureMetadata"
            }), " *oldMetadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被操作的OH_PictureMetadata指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-picturemetadata/capi-image-nativemodule-oh-picturemetadata",
              children: "OH_PictureMetadata"
            }), " **newMetadata"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拷贝得到的OH_PictureMetadata指针。"
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