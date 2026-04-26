"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["437768"], {
584481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_headerfile_capi_image_source_mdk_h_capi_image_source_mdk_h_md_811_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-headerfile-capi-image-source-mdk-h-capi-image-source-mdk-h-md-811.json
var site_docs_ref_image_api_image_c_image_headerfile_capi_image_source_mdk_h_capi_image_source_mdk_h_md_811_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h","title":"image_source_mdk.h","description":"概述","source":"@site/docs-ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h.md","sourceDirName":"image-api/image-c/image-headerfile/capi-image-source-mdk-h","slug":"/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"image_source_mdk.h","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-image-source-mdk-h"},"sidebar":"ref","previous":{"title":"image_receiver_mdk.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-receiver-mdk-h/capi-image-receiver-mdk-h"},"next":{"title":"image_effect.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-effect-h/capi-image-effect-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h.md


const frontMatter = {
	title: 'image_source_mdk.h',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-image-source-mdk-h'
};
const contentTitle = 'image_source_mdk.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "变量",
  "id": "变量",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_ImageSource_Create()",
  "id": "oh_imagesource_create",
  "level": 3
}, {
  "value": "OH_ImageSource_CreateFromUri()",
  "id": "oh_imagesource_createfromuri",
  "level": 3
}, {
  "value": "OH_ImageSource_CreateFromFd()",
  "id": "oh_imagesource_createfromfd",
  "level": 3
}, {
  "value": "OH_ImageSource_CreateFromData()",
  "id": "oh_imagesource_createfromdata",
  "level": 3
}, {
  "value": "OH_ImageSource_CreateFromRawFile()",
  "id": "oh_imagesource_createfromrawfile",
  "level": 3
}, {
  "value": "OH_ImageSource_CreateIncremental()",
  "id": "oh_imagesource_createincremental",
  "level": 3
}, {
  "value": "OH_ImageSource_CreateIncrementalFromData()",
  "id": "oh_imagesource_createincrementalfromdata",
  "level": 3
}, {
  "value": "OH_ImageSource_GetSupportedFormats()",
  "id": "oh_imagesource_getsupportedformats",
  "level": 3
}, {
  "value": "OH_ImageSource_InitNative()",
  "id": "oh_imagesource_initnative",
  "level": 3
}, {
  "value": "OH_ImageSource_CreatePixelMap()",
  "id": "oh_imagesource_createpixelmap",
  "level": 3
}, {
  "value": "OH_ImageSource_CreatePixelMapList()",
  "id": "oh_imagesource_createpixelmaplist",
  "level": 3
}, {
  "value": "OH_ImageSource_GetDelayTime()",
  "id": "oh_imagesource_getdelaytime",
  "level": 3
}, {
  "value": "OH_ImageSource_GetFrameCount()",
  "id": "oh_imagesource_getframecount",
  "level": 3
}, {
  "value": "OH_ImageSource_GetImageInfo()",
  "id": "oh_imagesource_getimageinfo",
  "level": 3
}, {
  "value": "OH_ImageSource_GetImageProperty()",
  "id": "oh_imagesource_getimageproperty",
  "level": 3
}, {
  "value": "OH_ImageSource_ModifyImageProperty()",
  "id": "oh_imagesource_modifyimageproperty",
  "level": 3
}, {
  "value": "OH_ImageSource_UpdateData()",
  "id": "oh_imagesource_updatedata",
  "level": 3
}, {
  "value": "OH_ImageSource_Release()",
  "id": "oh_imagesource_release",
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
        id: "image_source_mdkh",
        children: "image_source_mdk.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明将ImageSource解码成像素位图的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libimage_source_ndk.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Image.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/image_framework/image_source_mdk.h>"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimageregion/capi-image-ohosimageregion",
              children: "OhosImageRegion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义图像源解码的范围选项。是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagedecodingops/capi-image-ohosimagedecodingops",
              children: "OhosImageDecodingOps"
            }), "的成员变量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagesourcenative-/capi-image-imagesourcenative-",
              children: "ImageSourceNative_"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageSourceNative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为图像源方法定义native层图像源对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
              children: "OhosImageSourceOps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义图像源选项信息。此选项给", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromuri",
              children: "OH_ImageSource_CreateFromUri"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromfd",
              children: "OH_ImageSource_CreateFromFd"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromdata",
              children: "OH_ImageSource_CreateFromData"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_createincremental",
              children: "OH_ImageSource_CreateIncremental"
            }), "接口使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagedecodingops/capi-image-ohosimagedecodingops",
              children: "OhosImageDecodingOps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义图像源解码选项。此选项给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_createpixelmap",
              children: "OH_ImageSource_CreatePixelMap"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_createpixelmaplist",
              children: "OH_ImageSource_CreatePixelMapList"
            }), "接口使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceinfo/capi-image-ohosimagesourceinfo",
              children: "OhosImageSourceInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义图像源信息，由", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageinfo",
              children: "OH_ImageSource_GetImageInfo"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesource/capi-image-ohosimagesource",
              children: "OhosImageSource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义图像源输入资源，每次仅接收一种类型。由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromuri",
              children: "OH_ImageSource_CreateFromUri"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromfd",
              children: "OH_ImageSource_CreateFromFd"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h#oh_imagesource_createfromdata",
              children: "OH_ImageSource_CreateFromData"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourcedelaytimelist/capi-image-ohosimagesourcedelaytimelist",
              children: "OhosImageSourceDelayTimeList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义图像源延迟时间列表。由", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getdelaytime",
              children: "OH_ImageSource_GetDelayTime"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourcesupportedformat/capi-image-ohosimagesourcesupportedformat",
              children: "OhosImageSourceSupportedFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义图像源支持的格式字符串。此选项给", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourcesupportedformatlist/capi-image-ohosimagesourcesupportedformatlist",
              children: "OhosImageSourceSupportedFormatList"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getsupportedformats",
              children: "OH_ImageSource_GetSupportedFormats"
            }), "接口使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourcesupportedformatlist/capi-image-ohosimagesourcesupportedformatlist",
              children: "OhosImageSourceSupportedFormatList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义图像源支持的格式字符串列表。由", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getsupportedformats",
              children: "OH_ImageSource_GetSupportedFormats"
            }), "获取。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceproperty/capi-image-ohosimagesourceproperty",
              children: "OhosImageSourceProperty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义图像源属性键值字符串。此选项给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceupdatedata/capi-image-ohosimagesourceupdatedata",
              children: "OhosImageSourceUpdateData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义图像源更新数据选项，由", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_updatedata",
              children: "OH_ImageSource_UpdateData"
            }), "获取。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_imagesource_create",
              children: "int32_t OH_ImageSource_Create(napi_env env, struct OhosImageSource* src, struct OhosImageSourceOps* ops, napi_value *res)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过给定的信息OhosImageSource和OhosImageSourceOps结构体，获取JavaScript native层API ImageSource对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_createfromuri",
              children: "int32_t OH_ImageSource_CreateFromUri(napi_env env, char* uri, size_t size, struct OhosImageSourceOps* ops, napi_value *res)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过给定的标识符URI和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
              children: "OhosImageSourceOps"
            }), "结构体，获取JavaScript native层API ImageSource对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_createfromfd",
              children: "int32_t OH_ImageSource_CreateFromFd(napi_env env, int32_t fd, struct OhosImageSourceOps* ops, napi_value *res)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过给定的文件描述符fd和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
              children: "OhosImageSourceOps"
            }), "结构体，获取JavaScript native层API ImageSource对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_createfromdata",
              children: "int32_t OH_ImageSource_CreateFromData(napi_env env, uint8_t* data, size_t dataSize, struct OhosImageSourceOps* ops, napi_value *res)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过给定的图像源缓冲区资源data和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
              children: "OhosImageSourceOps"
            }), "结构体，获取JavaScript native层API ImageSource对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_createfromrawfile",
              children: "int32_t OH_ImageSource_CreateFromRawFile(napi_env env, RawFileDescriptor rawFile, struct OhosImageSourceOps* ops, napi_value *res)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过给定的资源描述符", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawfiledescriptor/capi-rawfile-rawfiledescriptor",
              children: "RawFileDescriptor"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
              children: "OhosImageSourceOps"
            }), "结构体，获取JavaScript native层API ImageSource对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_createincremental",
              children: "int32_t OH_ImageSource_CreateIncremental(napi_env env, struct OhosImageSource* source, struct OhosImageSourceOps* ops, napi_value *res)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过给定的信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesource/capi-image-ohosimagesource",
              children: "OhosImageSource"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
              children: "OhosImageSourceOps"
            }), "结构，获取增量类型的JavaScript Native API ImageSource对象，图像数据应通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_updatedata",
              children: "OH_ImageSource_UpdateData"
            }), "更新。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_createincrementalfromdata",
              children: "int32_t OH_ImageSource_CreateIncrementalFromData(napi_env env, uint8_t* data, size_t dataSize, struct OhosImageSourceOps* ops, napi_value *res)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过给定的图像源缓冲区资源data和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
              children: "OhosImageSourceOps"
            }), "结构体，获取增量类型的JavaScript Native API ImageSource对象，图像数据应通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_updatedata",
              children: "OH_ImageSource_UpdateData"
            }), "更新。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getsupportedformats",
              children: "int32_t OH_ImageSource_GetSupportedFormats(struct OhosImageSourceSupportedFormatList* res)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有支持的解码格式元标记。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_initnative",
              children: "ImageSourceNative* OH_ImageSource_InitNative(napi_env env, napi_value source)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从输入JavaScript native层ImageSource对象中，转换成", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagesourcenative-/capi-image-imagesourcenative-",
              children: "ImageSourceNative"
            }), "值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_createpixelmap",
              children: "int32_t OH_ImageSource_CreatePixelMap(const ImageSourceNative* native, struct OhosImageDecodingOps* ops, napi_value *res)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过一个给定的选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagedecodingops/capi-image-ohosimagedecodingops",
              children: "OhosImageDecodingOps"
            }), "结构体，从ImageSource中解码JavaScript native层PixelMap对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_createpixelmaplist",
              children: "int32_t OH_ImageSource_CreatePixelMapList(const ImageSourceNative* native, struct OhosImageDecodingOps* ops, napi_value *res)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过一个给定的选项", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagedecodingops/capi-image-ohosimagedecodingops",
              children: "OhosImageDecodingOps"
            }), "结构体，从ImageSource中解码所有的JavaScript native层PixelMap对象列表。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getdelaytime",
              children: "int32_t OH_ImageSource_GetDelayTime(const ImageSourceNative* native, struct OhosImageSourceDelayTimeList* res)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ImageSource（如GIF图像源）获取延迟时间列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getframecount",
              children: "int32_t OH_ImageSource_GetFrameCount(const ImageSourceNative* native, uint32_t *res)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从ImageSource中获取帧计数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageinfo",
              children: "int32_t OH_ImageSource_GetImageInfo(const ImageSourceNative* native, int32_t index, struct OhosImageSourceInfo* info)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过索引从ImageSource获取图像源信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "int32_t OH_ImageSource_GetImageProperty(const ImageSourceNative* native, struct OhosImageSourceProperty* key, struct OhosImageSourceProperty* value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过关键字从ImageSource中获取图像源属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_updatedata",
              children: "int32_t OH_ImageSource_UpdateData(const ImageSourceNative* native, struct OhosImageSourceUpdateData* data)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为了增量类型的ImageSource更新源数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_release",
              children: "int32_t OH_ImageSource_Release(ImageSourceNative* native)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放native层图像源 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ImageSourceNative"
              })
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量",
      children: "变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "const char* OHOS_IMAGE_PROPERTY_BITS_PER_SAMPLE = \"BitsPerSample\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义每个样本比特的图像属性关键字。  此标签给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* OHOS_IMAGE_PROPERTY_ORIENTATION = \"Orientation\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义方向的图像属性关键字。  此标签给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* OHOS_IMAGE_PROPERTY_IMAGE_LENGTH = \"ImageLength\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义图像长度的图像属性关键字。  此标签给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* OHOS_IMAGE_PROPERTY_IMAGE_WIDTH = \"ImageWidth\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义图像宽度的图像属性关键字。  此标签给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* OHOS_IMAGE_PROPERTY_GPS_LATITUDE = \"GPSLatitude\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义GPS纬度的图像属性关键字。  此标签给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* OHOS_IMAGE_PROPERTY_GPS_LONGITUDE = \"GPSLongitude\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义GPS经度的图像属性关键字。  此标签给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* OHOS_IMAGE_PROPERTY_GPS_LATITUDE_REF = \"GPSLatitudeRef\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义GPS纬度参考的图像属性关键字。  此标签给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* OHOS_IMAGE_PROPERTY_GPS_LONGITUDE_REF = \"GPSLongitudeRef\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义GPS经度参考的图像属性关键字。  此标签给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* OHOS_IMAGE_PROPERTY_DATE_TIME_ORIGINAL = \"DateTimeOriginal\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义初始日期时间的图像属性关键字。  此标签给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* OHOS_IMAGE_PROPERTY_EXPOSURE_TIME = \"ExposureTime\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义曝光时间的图像属性关键字。  此标签给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* OHOS_IMAGE_PROPERTY_SCENE_TYPE = \"SceneType\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义场景类型的图像属性关键字。  此标签给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* OHOS_IMAGE_PROPERTY_ISO_SPEED_RATINGS = \"ISOSpeedRatings\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义ISO速度等级的图像属性关键字。  此标签给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* OHOS_IMAGE_PROPERTY_F_NUMBER = \"FNumber\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义FNumber的图像属性关键字。  此标签给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* OHOS_IMAGE_PROPERTY_COMPRESSED_BITS_PER_PIXEL = \"CompressedBitsPerPixel\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义每个像素的压缩比特的图像属性关键字。  此标签给", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_getimageproperty",
              children: "OH_ImageSource_GetImageProperty"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imagesource_modifyimageproperty",
              children: "OH_ImageSource_ModifyImageProperty"
            }), "接口使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 10"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_create",
      children: "OH_ImageSource_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_Create(napi_env env, struct OhosImageSource* src, struct OhosImageSourceOps* ops, napi_value *res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过给定的信息OhosImageSource和OhosImageSourceOps结构体，获取JavaScript native层API ImageSource对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_imagesource_createfromuri",
        children: "OH_ImageSource_CreateFromUri"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_imagesource_createfromfd",
        children: "OH_ImageSource_CreateFromFd"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_imagesource_createfromdata",
        children: "OH_ImageSource_CreateFromData"
      })]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_env env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明JNI环境的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "struct OhosImageSource* src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明创建一个图像源的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
              children: "OhosImageSourceOps"
            }), "* ops"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明创建一个图像源的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value *res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明JavaScript native层API ImageSource对象的指针。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_SOURCE_DATA_INCOMPLETE：图像源数据不完整。  IMAGE_RESULT_SOURCE_DATA：图像源数据错误。  IMAGE_RESULT_GET_DATA_ABNORMAL：图像获取数据错误。  IMAGE_RESULT_TOO_LARGE：图像数据太大。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_DECODE_HEAD_ABNORMAL：图像解码头错误。  IMAGE_RESULT_DECODE_EXIF_UNSUPPORT：图像解码EXIF不支持。  IMAGE_RESULT_PROPERTY_NOT_EXIST：图像属性不存在。  IMAGE_RESULT_FILE_DAMAGED：文件损坏。  IMAGE_RESULT_FILE_FD_ERROR：文件FD错误。  IMAGE_RESULT_STREAM_SIZE_ERROR：数据流错误。  IMAGE_RESULT_SEEK_FAILED：查找文件失败。  IMAGE_RESULT_PEEK_FAILED：速览文件失败。  IMAGE_RESULT_FREAD_FAILED：读取文件失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_createfromuri",
      children: "OH_ImageSource_CreateFromUri()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_CreateFromUri(napi_env env, char* uri, size_t size,struct OhosImageSourceOps* ops, napi_value *res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过给定的标识符URI和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
        children: "OhosImageSourceOps"
      }), "结构体，获取JavaScript native层API ImageSource对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "表明JNI环境的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char* uri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明图像源资源标识符，接受文件资源或者base64资源。当前文件资源只支持绝对路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明图像源资源URI的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
              children: "OhosImageSourceOps"
            }), "* ops"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明创建一个图像源的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value *res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明JavaScript native层API ImageSource对象的指针。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_createfromfd",
      children: "OH_ImageSource_CreateFromFd()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_CreateFromFd(napi_env env, int32_t fd,struct OhosImageSourceOps* ops, napi_value *res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过给定的文件描述符fd和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
        children: "OhosImageSourceOps"
      }), "结构体，获取JavaScript native层API ImageSource对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_env env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明JNI环境的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明图像源文件资源描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
              children: "OhosImageSourceOps"
            }), "* ops"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明创建一个图像源的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value *res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明JavaScript native层API ImageSource对象的指针。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_createfromdata",
      children: "OH_ImageSource_CreateFromData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_CreateFromData(napi_env env, uint8_t* data, size_t dataSize,struct OhosImageSourceOps* ops, napi_value *res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过给定的图像源缓冲区资源data和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
        children: "OhosImageSourceOps"
      }), "结构体，获取JavaScript native层API ImageSource对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "表明JNI环境的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t* data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明图像源缓冲区资源，接受格式化包缓冲区或者base64缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t dataSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明图像源缓冲区资源大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
              children: "OhosImageSourceOps"
            }), "* ops"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明创建一个图像源的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value *res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明JavaScript native层API ImageSource对象的指针。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_createfromrawfile",
      children: "OH_ImageSource_CreateFromRawFile()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_CreateFromRawFile(napi_env env, RawFileDescriptor rawFile,struct OhosImageSourceOps* ops, napi_value *res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过给定的资源描述符", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawfiledescriptor/capi-rawfile-rawfiledescriptor",
        children: "RawFileDescriptor"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
        children: "OhosImageSourceOps"
      }), "结构体，获取JavaScript native层API ImageSource对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_env env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明JNI环境的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/localization-api/localization-c/localization-struct/capi-rawfile-rawfiledescriptor/capi-rawfile-rawfiledescriptor",
              children: "RawFileDescriptor"
            }), " rawFile"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明图像源资源描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
              children: "OhosImageSourceOps"
            }), "* ops"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明创建一个图像源的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value *res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明JavaScript native层API ImageSource对象的指针。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_createincremental",
      children: "OH_ImageSource_CreateIncremental()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_CreateIncremental(napi_env env, struct OhosImageSource* source, struct OhosImageSourceOps* ops, napi_value *res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过给定的信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesource/capi-image-ohosimagesource",
        children: "OhosImageSource"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
        children: "OhosImageSourceOps"
      }), "结构，获取增量类型的JavaScript Native API ImageSource对象，图像数据应通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_imagesource_updatedata",
        children: "OH_ImageSource_UpdateData"
      }), "更新。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "废弃版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "替代接口："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_imagesource_createincrementalfromdata",
        children: "OH_ImageSource_CreateIncrementalFromData"
      })]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_env env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明JNI环境的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesource/capi-image-ohosimagesource",
              children: "OhosImageSource"
            }), "* source"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明创建一个图像源的信息，只接收缓冲区类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
              children: "OhosImageSourceOps"
            }), "* ops"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明创建一个图像源的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value *res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明JavaScript native层API ImageSource对象的指针。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_createincrementalfromdata",
      children: "OH_ImageSource_CreateIncrementalFromData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_CreateIncrementalFromData(napi_env env, uint8_t* data, size_t dataSize,struct OhosImageSourceOps* ops, napi_value *res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过给定的图像源缓冲区资源data和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
        children: "OhosImageSourceOps"
      }), "结构体，获取增量类型的JavaScript Native API ImageSource对象，图像数据应通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_imagesource_updatedata",
        children: "OH_ImageSource_UpdateData"
      }), "更新。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "表明JNI环境的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint8_t* data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明图像源缓冲区资源，接受格式化包缓冲区或者base64缓冲区。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size_t dataSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明图像源缓冲区资源大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceops/capi-image-ohosimagesourceops",
              children: "OhosImageSourceOps"
            }), "* ops"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明创建一个图像源的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value *res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明JavaScript native层API ImageSource对象的指针。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_getsupportedformats",
      children: "OH_ImageSource_GetSupportedFormats()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_GetSupportedFormats(struct OhosImageSourceSupportedFormatList* res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取所有支持的解码格式元标记。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "struct OhosImageSourceSupportedFormatList* res"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表明指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourcesupportedformatlist/capi-image-ohosimagesourcesupportedformatlist",
              children: "OhosImageSourceSupportedFormatList"
            }), "结构体的指针。该结构体包含supportedFormatList和size两个属性。  该接口需要调用两次才能正确获取支持的格式列表。  第一次调用需将res->supportedFormatList置空，res->size会获取支持的格式数量。  第二次调用前，需完成内存初始化，首先将res->supportedFormatList初始化为包含res->size个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourcesupportedformat/capi-image-ohosimagesourcesupportedformat",
              children: "OhosImageSourceSupportedFormat"
            }), "的列表，再为每个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourcesupportedformat/capi-image-ohosimagesourcesupportedformat",
              children: "OhosImageSourceSupportedFormat"
            }), "申请内存，确保其format属性有足够的空间获取图片格式信息。"]
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式不对。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_initnative",
      children: "OH_ImageSource_InitNative()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ImageSourceNative* OH_ImageSource_InitNative(napi_env env, napi_value source)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从输入JavaScript native层ImageSource对象中，转换成", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-imagesourcenative-/capi-image-imagesourcenative-",
        children: "ImageSourceNative"
      }), "值。"]
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
            children: "表明JNI环境的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明JavaScript native层API ImageSource对象的指针。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-imagesourcenative-/capi-image-imagesourcenative-",
              children: "ImageSourceNative"
            }), "*"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagesourcenative-/capi-image-imagesourcenative-",
              children: "ImageSourceNative"
            }), "指针；如果操作失败，返回空指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_imagesource_release",
        children: "OH_ImageSource_Release"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_createpixelmap",
      children: "OH_ImageSource_CreatePixelMap()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_CreatePixelMap(const ImageSourceNative* native,struct OhosImageDecodingOps* ops, napi_value *res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过一个给定的选项", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagedecodingops/capi-image-ohosimagedecodingops",
        children: "OhosImageDecodingOps"
      }), "结构体，从ImageSource中解码JavaScript native层PixelMap对象。"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-imagesourcenative-/capi-image-imagesourcenative-",
              children: "ImageSourceNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明native层ImageSourceNative值的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagedecodingops/capi-image-ohosimagedecodingops",
              children: "OhosImageDecodingOps"
            }), "* ops"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明为了解码图像源的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value *res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明JavaScript native层PixelMap对象的指针。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：获取图片数据异常。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_DECODE_HEAD_ABNORMAL：图像解码头错误。  IMAGE_RESULT_CREATE_DECODER_FAILED：创建解码器失败。  IMAGE_RESULT_CREATE_ENCODER_FAILED：创建编码器失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式不对。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia错误。  IMAGE_RESULT_DATA_ABNORMAL：输入图片数据错误。  IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存错误。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据异常。  IMAGE_RESULT_DECODE_ABNORMAL：图片解码异常。  IMAGE_RESULT_MALLOC_ABNORMAL：图像错误。  IMAGE_RESULT_DATA_UNSUPPORT：图片初始化错误。  IMAGE_RESULT_INIT_ABNORMAL：图片输入数据错误。  IMAGE_RESULT_CROP：裁剪错误。  IMAGE_RESULT_UNKNOWN_FORMAT：图片格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_ENCODE_FAILED：增加位图失败。  IMAGE_RESULT_HW_DECODE_UNSUPPORT：不支持图片硬解码。  IMAGE_RESULT_HW_DECODE_FAILED：硬解码失败。  IMAGE_RESULT_ERR_IPC：ipc失败。  IMAGE_RESULT_INDEX_INVALID：索引无效。  IMAGE_RESULT_ALPHA_TYPE_ERROR：硬解码失败。  IMAGE_RESULT_ALLOCATER_TYPE_ERROR：硬解码失败。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_createpixelmaplist",
      children: "OH_ImageSource_CreatePixelMapList()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_CreatePixelMapList(const ImageSourceNative* native,struct OhosImageDecodingOps* ops, napi_value *res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过一个给定的选项", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagedecodingops/capi-image-ohosimagedecodingops",
        children: "OhosImageDecodingOps"
      }), "结构体，从ImageSource中解码所有的JavaScript native层PixelMap对象列表。"]
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
              href: "/ref/image-api/image-c/image-struct/capi-image-imagesourcenative-/capi-image-imagesourcenative-",
              children: "ImageSourceNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明native层ImageSourceNative值的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagedecodingops/capi-image-ohosimagedecodingops",
              children: "OhosImageDecodingOps"
            }), "* ops"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明为了解码图像源的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_value *res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明JavaScript native层PixelMap列表对象的指针。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：获取图片数据异常。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_DECODE_HEAD_ABNORMAL：图像解码头错误。  IMAGE_RESULT_CREATE_DECODER_FAILED：创建解码器失败。  IMAGE_RESULT_CREATE_ENCODER_FAILED：创建编码器失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式不对。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia错误。  IMAGE_RESULT_DATA_ABNORMAL：输入图片数据错误。  IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存错误。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据异常。  IMAGE_RESULT_DECODE_ABNORMAL：图片解码异常。  IMAGE_RESULT_MALLOC_ABNORMAL：图像错误。  IMAGE_RESULT_DATA_UNSUPPORT：图片初始化错误。  IMAGE_RESULT_INIT_ABNORMAL：图片输入数据错误。  IMAGE_RESULT_CROP：裁剪错误。  IMAGE_RESULT_UNKNOWN_FORMAT：图片格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_ENCODE_FAILED：增加位图失败。  IMAGE_RESULT_HW_DECODE_UNSUPPORT：不支持图片硬解码。  IMAGE_RESULT_HW_DECODE_FAILED：硬解码失败。  IMAGE_RESULT_ERR_IPC：ipc失败。  IMAGE_RESULT_INDEX_INVALID：索引无效。  IMAGE_RESULT_ALPHA_TYPE_ERROR：硬解码失败。  IMAGE_RESULT_ALLOCATER_TYPE_ERROR：硬解码失败。  IMAGE_RESULT_DECODE_EXIF_UNSUPPORT：解码的EXIF不支持。  IMAGE_RESULT_PROPERTY_NOT_EXIST：图片属性不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_getdelaytime",
      children: "OH_ImageSource_GetDelayTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_GetDelayTime(const ImageSourceNative* native,struct OhosImageSourceDelayTimeList* res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ImageSource（如GIF图像源）获取延迟时间列表。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-imagesourcenative-/capi-image-imagesourcenative-",
              children: "ImageSourceNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明native层ImageSourceNative值的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourcedelaytimelist/capi-image-ohosimagesourcedelaytimelist",
              children: "OhosImageSourceDelayTimeList"
            }), "* res"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明延迟时间列表OhosImageSourceDelayTimeList的指针。  当输入的res中delayTimeList是空指针并且size是0时，将通过res的size中返回延迟时间列表大小为了获取延迟时间，需要比返回的delayTimeList大小值大的足够空间。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：获取图片数据异常。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_DECODE_HEAD_ABNORMAL：图像解码头错误。  IMAGE_RESULT_CREATE_DECODER_FAILED：创建解码器失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia错误。  IMAGE_RESULT_DATA_ABNORMAL：输入图片数据错误。  IMAGE_RESULT_DECODE_ABNORMAL：图片解码异常。  IMAGE_RESULT_DATA_UNSUPPORT：图片初始化错误。  IMAGE_RESULT_UNKNOWN_FORMAT：图片格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_INDEX_INVALID：索引无效。  IMAGE_RESULT_DECODE_EXIF_UNSUPPORT：解码的EXIF不支持。  IMAGE_RESULT_PROPERTY_NOT_EXIST：图片属性不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_getframecount",
      children: "OH_ImageSource_GetFrameCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_GetFrameCount(const ImageSourceNative* native, uint32_t *res)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ImageSource中获取帧计数。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-imagesourcenative-/capi-image-imagesourcenative-",
              children: "ImageSourceNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明native层ImageSourceNative值的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *res"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明帧计数的指针。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：获取图片数据异常。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_DECODE_HEAD_ABNORMAL：图像解码头错误。  IMAGE_RESULT_CREATE_DECODER_FAILED：创建解码器失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia错误。  IMAGE_RESULT_DATA_ABNORMAL：输入图片数据错误。  IMAGE_RESULT_DECODE_ABNORMAL：图片解码异常。  IMAGE_RESULT_DATA_UNSUPPORT：图片初始化错误。  IMAGE_RESULT_UNKNOWN_FORMAT：图片格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_INDEX_INVALID：索引无效。  IMAGE_RESULT_DECODE_EXIF_UNSUPPORT：解码的EXIF不支持。  IMAGE_RESULT_PROPERTY_NOT_EXIST：图片属性不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_getimageinfo",
      children: "OH_ImageSource_GetImageInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_GetImageInfo(const ImageSourceNative* native, int32_t index,struct OhosImageSourceInfo* info)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过索引从ImageSource获取图像源信息。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-imagesourcenative-/capi-image-imagesourcenative-",
              children: "ImageSourceNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明native层ImageSourceNative值的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明帧计数的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceinfo/capi-image-ohosimagesourceinfo",
              children: "OhosImageSourceInfo"
            }), "* info"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明图像源信息OhosImageSourceInfo的指针。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：获取图片数据异常。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_DECODE_HEAD_ABNORMAL：图像解码头错误。  IMAGE_RESULT_CREATE_DECODER_FAILED：创建解码器失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia错误。  IMAGE_RESULT_DATA_ABNORMAL：输入图片数据错误。  IMAGE_RESULT_DECODE_ABNORMAL：图片解码异常。  IMAGE_RESULT_DATA_UNSUPPORT：图片初始化错误。  IMAGE_RESULT_UNKNOWN_FORMAT：图片格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_INDEX_INVALID：索引无效。  IMAGE_RESULT_DECODE_EXIF_UNSUPPORT：解码的EXIF不支持。  IMAGE_RESULT_PROPERTY_NOT_EXIST：图片属性不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_getimageproperty",
      children: "OH_ImageSource_GetImageProperty()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_GetImageProperty(const ImageSourceNative* native, struct OhosImageSourceProperty* key, struct OhosImageSourceProperty* value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过关键字从ImageSource中获取图像源属性。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-imagesourcenative-/capi-image-imagesourcenative-",
              children: "ImageSourceNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明native层ImageSourceNative值的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceproperty/capi-image-ohosimagesourceproperty",
              children: "OhosImageSourceProperty"
            }), "* key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明属性关键字OhosImageSourceProperty的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceproperty/capi-image-ohosimagesourceproperty",
              children: "OhosImageSourceProperty"
            }), "* value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明作为结果的属性值OhosImageSourceProperty的指针。当输入的value中value是空指针并且size是0时，将通过value中的size返回属性值的大小。为了获取属性值，需要比value中的结果大小大的足够的空间。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：获取图片数据异常。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_DECODE_HEAD_ABNORMAL：图像解码头错误。  IMAGE_RESULT_CREATE_DECODER_FAILED：创建解码器失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia错误。  IMAGE_RESULT_DATA_ABNORMAL：输入图片数据错误。  IMAGE_RESULT_DECODE_ABNORMAL：图片解码异常。  IMAGE_RESULT_DATA_UNSUPPORT：图片初始化错误。  IMAGE_RESULT_UNKNOWN_FORMAT：图片格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_INDEX_INVALID：索引无效。  IMAGE_RESULT_DECODE_EXIF_UNSUPPORT：解码的EXIF不支持。  IMAGE_RESULT_PROPERTY_NOT_EXIST：图片属性不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_modifyimageproperty",
      children: "OH_ImageSource_ModifyImageProperty()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_ModifyImageProperty(const ImageSourceNative* native, struct OhosImageSourceProperty* key, struct OhosImageSourceProperty* value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过关键字为ImageSource修改图像源属性。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-imagesourcenative-/capi-image-imagesourcenative-",
              children: "ImageSourceNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明native层ImageSourceNative值的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceproperty/capi-image-ohosimagesourceproperty",
              children: "OhosImageSourceProperty"
            }), "* key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明属性关键字OhosImageSourceProperty的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceproperty/capi-image-ohosimagesourceproperty",
              children: "OhosImageSourceProperty"
            }), "* value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为了修改表明属性值OhosImageSourceProperty的指针。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：获取图片数据异常。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_DECODE_HEAD_ABNORMAL：图像解码头错误。  IMAGE_RESULT_CREATE_DECODER_FAILED：创建解码器失败。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：skia错误。  IMAGE_RESULT_DATA_ABNORMAL：输入图片数据错误。  IMAGE_RESULT_DECODE_ABNORMAL：图片解码异常。  IMAGE_RESULT_DATA_UNSUPPORT：图片初始化错误。  IMAGE_RESULT_UNKNOWN_FORMAT：图片格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_INDEX_INVALID：索引无效。  IMAGE_RESULT_DECODE_EXIF_UNSUPPORT：解码的EXIF不支持。  IMAGE_RESULT_PROPERTY_NOT_EXIST：图片属性不存在。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_updatedata",
      children: "OH_ImageSource_UpdateData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_UpdateData(const ImageSourceNative* native, struct OhosImageSourceUpdateData* data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了增量类型的ImageSource更新源数据。"
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
              href: "/ref/image-api/image-c/image-struct/capi-image-imagesourcenative-/capi-image-imagesourcenative-",
              children: "ImageSourceNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明native层ImageSourceNative值的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-ohosimagesourceupdatedata/capi-image-ohosimagesourceupdatedata",
              children: "OhosImageSourceUpdateData"
            }), "* data"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明更新数据信息OhosImageSourceUpdateData的指针。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：获取图片数据异常。  IMAGE_RESULT_DECODE_FAILED：解码失败。  IMAGE_RESULT_DECODE_HEAD_ABNORMAL：图像解码头错误。  IMAGE_RESULT_CREATE_DECODER_FAILED：创建解码器失败。  IMAGE_RESULT_CREATE_ENCODER_FAILED：创建编码器失败。  IMAGE_RESULT_CHECK_FORMAT_ERROR：检查格式不对。  IMAGE_RESULT_THIRDPART_SKIA_ERROR：Skia第三方库出错。  IMAGE_RESULT_DATA_ABNORMAL：输入图片数据错误。  IMAGE_RESULT_ERR_SHAMEM_NOT_EXIST：共享内存不存在。  IMAGE_RESULT_ERR_SHAMEM_DATA_ABNORMAL：共享内存数据异常。  IMAGE_RESULT_DECODE_ABNORMAL：图片解码异常。  IMAGE_RESULT_MALLOC_ABNORMAL：图像内存分配异常。  IMAGE_RESULT_DATA_UNSUPPORT：图片初始化错误。  IMAGE_RESULT_INIT_ABNORMAL：图片输入数据错误。  IMAGE_RESULT_CROP：裁剪失败。  IMAGE_RESULT_UNKNOWN_FORMAT：图片格式未知。  IMAGE_RESULT_PLUGIN_REGISTER_FAILED：注册插件失败。  IMAGE_RESULT_PLUGIN_CREATE_FAILED：创建插件失败。  IMAGE_RESULT_ENCODE_FAILED：增加位图失败。  IMAGE_RESULT_HW_DECODE_UNSUPPORT：不支持图片硬解码。  IMAGE_RESULT_HW_DECODE_FAILED：硬解码失败。  IMAGE_RESULT_ERR_IPC：IPC操作失败。  IMAGE_RESULT_INDEX_INVALID：索引无效。  IMAGE_RESULT_ALPHA_TYPE_ERROR：Alpha类型错误。  IMAGE_RESULT_ALLOCATER_TYPE_ERROR：内存分配器类型错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imagesource_release",
      children: "OH_ImageSource_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_ImageSource_Release(ImageSourceNative* native)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放native层图像源ImageSourceNative。"
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
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-imagesourcenative-/capi-image-imagesourcenative-",
              children: "ImageSourceNative"
            }), "* native"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表明native层ImageSourceNative值的指针。"
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
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-mdk-common-h/capi-image-mdk-common-h#irndkerrcode",
              children: "IRNdkErrCode"
            }), "：  OHOS_IMAGE_RESULT_SUCCESS：操作成功。  IMAGE_RESULT_BAD_PARAMETER：参数错误。  IMAGE_RESULT_JNI_ENV_ABNORMAL：JNI 环境异常。  IMAGE_RESULT_INVALID_PARAMETER：参数无效。  IMAGE_RESULT_GET_DATA_ABNORMAL：获取图片数据异常。  IMAGE_RESULT_DATA_ABNORMAL：输入图片数据错误。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_imagesource_create",
        children: "OH_ImageSource_Create"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_imagesource_createincremental",
        children: "OH_ImageSource_CreateIncremental"
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