"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["43266"], {
903143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_headerfile_capi_image_processing_types_h_capi_image_processing_types_h_md_402_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-headerfile-capi-image-processing-types-h-capi-image-processing-types-h-md-402.json
var site_docs_ref_image_api_image_c_image_headerfile_capi_image_processing_types_h_capi_image_processing_types_h_md_402_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h","title":"image_processing_types.h","description":"概述","source":"@site/docs-ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h.md","sourceDirName":"image-api/image-c/image-headerfile/capi-image-processing-types-h","slug":"/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"image_processing_types.h","sidebar_position":19,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-processing-types-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-image-processing-types-h"},"sidebar":"ref","previous":{"title":"image_processing.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h"},"next":{"title":"OH_ImageSourceNative","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-imagesourcenative/capi-image-nativemodule-oh-imagesourcenative"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h.md


const frontMatter = {
	title: 'image_processing_types.h',
	sidebar_position: 19,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-processing-types-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-image-processing-types-h'
};
const contentTitle = 'image_processing_types.h';

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
  "value": "变量",
  "id": "变量",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "ImageDetailEnhancer_QualityLevel",
  "id": "imagedetailenhancer_qualitylevel",
  "level": 3
}, {
  "value": "ImageProcessing_ErrorCode",
  "id": "imageprocessing_errorcode",
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
        id: "image_processing_typesh",
        children: "image_processing_types.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片处理的类型定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/video_processing_engine/image_processing_types.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libimage_processing.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.VideoProcessingEngine"]
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
        href: "/ref/image-api/image-c/image-module/capi-imageprocessing/capi-imageprocessing",
        children: "ImageProcessing"
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
              href: "/ref/image-api/image-c/image-struct/api-imageprocessing-imageprocessing-colorspaceinfo/api-imageprocessing-imageprocessing-colorspaceinfo",
              children: "ImageProcessing_ColorSpaceInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageProcessing_ColorSpaceInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "色彩空间信息，用于色彩空间转换能力查询。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-imageprocessing-oh-imageprocessing/capi-imageprocessing-oh-imageprocessing",
              children: "OH_ImageProcessing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ImageProcessing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["提供OH_ImageProcessing结构体声明。  定义了OH_ImageProcessing的空指针并调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_create",
              children: "OH_ImageProcessing_Create"
            }), "来创建图片处理实例。在创建实例之前，指针应为空。用户可以为不同的处理类型创建多个图片实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_PixelmapNative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供OH_PixelmapNative结构体声明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVFormat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供OH_AVFormat结构体声明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#imagedetailenhancer_qualitylevel",
              children: "ImageDetailEnhancer_QualityLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageDetailEnhancer_QualityLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "质量级别，用于细节增强能力。  键参数的值IMAGE_DETAIL_ENHANCER_PARAMETER_KEY_QUALITY_LEVEL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#imageprocessing_errorcode",
              children: "ImageProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ImageProcessing_ErrorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片处理接口错误码说明。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量",
      children: "变量"
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
            children: "const int32_t IMAGE_PROCESSING_TYPE_COLOR_SPACE_CONVERSION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于创建色彩空间转换的图片处理实例。  色彩空间转换包括单层HDR图片转换SDR图片，SDR图片之间的转换，以及SDR图片转换单层HDR图片，部分能力由厂商支持。使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_iscolorspaceconversionsupported",
              children: "OH_ImageProcessing_IsColorSpaceConversionSupported"
            }), "查询某种转换是否支持在单层图片之间进行。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参考："
              })
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_create",
              children: "OH_ImageProcessing_Create"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t IMAGE_PROCESSING_TYPE_COMPOSITION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于创建双层HDR图片转换单层HDR图片的图片处理实例。  包括从双层HDR图片转换为单层HDR图片的能力。部分能力由厂商支持。使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_iscompositionsupported",
              children: "OH_ImageProcessing_IsCompositionSupported"
            }), "查询是否支持从双层HDR图片到单层HDR图片的转换。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参考："
              })
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_create",
              children: "OH_ImageProcessing_Create"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t IMAGE_PROCESSING_TYPE_DECOMPOSITION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于创建单层HDR图片转换双层HDR图片的图片处理实例。  包括从单层HDR图片转换为双层HDR图片的能力。部分能力由厂商支持。使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_isdecompositionsupported",
              children: "OH_ImageProcessing_IsDecompositionSupported"
            }), "查询是否支持从单层HDR图片到双层HDR图片的转换。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参考："
              })
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_create",
              children: "OH_ImageProcessing_Create"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t IMAGE_PROCESSING_TYPE_METADATA_GENERATION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于创建元数据生成的图片处理实例。  生成单层HDR图片的HDR Vivid元数据。该能力由厂商支持。如果不支持该能力，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_create",
              children: "OH_ImageProcessing_Create"
            }), "将返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h#imageprocessing_errorcode",
              children: "IMAGE_PROCESSING_ERROR_UNSUPPORTED_PROCESSING"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参考："
              })
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_create",
              children: "OH_ImageProcessing_Create"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t IMAGE_PROCESSING_TYPE_DETAIL_ENHANCER"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于创建细节增强的图片处理实例。  按指定图像质量缩放或调整图片大小，或仅增强图像细节以在不更改分辨率的情况下渲染图片。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参考："
              })
            }), (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_create",
              children: "OH_ImageProcessing_Create"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * IMAGE_DETAIL_ENHANCER_PARAMETER_KEY_QUALITY_LEVEL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于设定图像细节增强的质量级别。  使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h#imagedetailenhancer_qualitylevel",
              children: "ImageDetailEnhancer_QualityLevel"
            }), "获取其值。使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_setparameter",
              children: "OH_ImageProcessing_SetParameter"
            }), "设置质量级别。使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_getparameter",
              children: "OH_ImageProcessing_GetParameter"
            }), "获取当前质量级别。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "imagedetailenhancer_qualitylevel",
      children: "ImageDetailEnhancer_QualityLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ImageDetailEnhancer_QualityLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "质量级别，用于细节增强能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "键参数的值IMAGE_DETAIL_ENHANCER_PARAMETER_KEY_QUALITY_LEVEL。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
            children: "IMAGE_DETAIL_ENHANCER_QUALITY_LEVEL_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无细节增强。  支持输入分辨率（px）：宽：[32, 3000]，高：[32, 3000]。  支持输出分辨率（px）：宽：[32, 3000]，高：[32, 3000]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_DETAIL_ENHANCER_QUALITY_LEVEL_LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "细节增强质量较低，但速度较快。默认级别。  支持输入分辨率（px）：宽：[32, 3000]，高：[32, 3000]。  支持输出分辨率（px）：宽：[32, 3000]，高：[32, 3000]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_DETAIL_ENHANCER_QUALITY_LEVEL_MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "细节增强质量中等，速度介于低级别与高级别之间。  支持输入分辨率（px）：宽：[32, 3000]，高：[32, 3000]。  支持输出分辨率（px）：宽：[32, 3000]，高：[32, 3000]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_DETAIL_ENHANCER_QUALITY_LEVEL_HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "细节增强质量较高，但速度较慢。  API version 13-22支持输入分辨率（px）：宽：[512, 2000]，高：[512, 2000]。  API version 13-22支持输出分辨率（px）：宽：[512, 2000]，高：[512, 2000]。  API version 23及以后支持输入分辨率（px）：宽：[180, 2000]，高：[180, 2000]。  API version 23及以后支持输出分辨率（px）：宽：[512, 2000]，高：[512, 2000]。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_setparameter",
        children: "OH_ImageProcessing_SetParameter"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_getparameter",
        children: "OH_ImageProcessing_GetParameter"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "imageprocessing_errorcode",
      children: "ImageProcessing_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum ImageProcessing_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片处理接口错误码说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "IMAGE_PROCESSING_SUCCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PROCESSING_ERROR_INVALID_PARAMETER = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入参数无效。  在以下错误条件下返回该错误码：  1. 输入或输出buffer无效，例如图片buffer为空。  2. 参数无效，例如参数为空。  3. 类型无效，例如在创建函数中传入的类型不存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PROCESSING_ERROR_UNKNOWN = 29200001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知错误，例如GPU计算失败或memcpy失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PROCESSING_ERROR_INITIALIZE_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全局环境初始化失败，例如GPU环境初始化失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PROCESSING_ERROR_CREATE_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建图片处理实例失败，例如实例数量超过上限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PROCESSING_ERROR_PROCESS_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理图片buffer失败，例如处理超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PROCESSING_ERROR_UNSUPPORTED_PROCESSING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前处理不支持，可以通过“OH_ImageProcessing_IsXXXSupported”接口查询是否支持该能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PROCESSING_ERROR_OPERATION_NOT_PERMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无权限操作，可能由于状态不正确导致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PROCESSING_ERROR_NO_MEMORY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存不足。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PROCESSING_ERROR_INVALID_INSTANCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无效的图片处理实例，可能由于实例为空导致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE_PROCESSING_ERROR_INVALID_VALUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入值无效。  在以下错误条件下返回该错误码：  1. 输入或输出图片buffer无效，例如图片buffer的宽度（高度）过大或颜色空间不正确。  2. 参数无效，例如参数不包括有效信息，例如细节增强的质量级别不正确。"
          })]
        })]
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