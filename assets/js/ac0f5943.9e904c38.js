"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["875677"], {
2565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_image_api_image_c_image_headerfile_capi_image_processing_h_capi_image_processing_h_md_ac0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-image-api-image-c-image-headerfile-capi-image-processing-h-capi-image-processing-h-md-ac0.json
var site_docs_ref_image_api_image_c_image_headerfile_capi_image_processing_h_capi_image_processing_h_md_ac0_namespaceObject = JSON.parse('{"id":"image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h","title":"image_processing.h","description":"概述","source":"@site/docs-ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h.md","sourceDirName":"image-api/image-c/image-headerfile/capi-image-processing-h","slug":"/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"image_processing.h","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-processing-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-image-processing-h"},"sidebar":"ref","previous":{"title":"image_effect_filter.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-effect-filter-h/capi-image-effect-filter-h"},"next":{"title":"image_processing_types.h","permalink":"/harmonyos-docs-site/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h.md


const frontMatter = {
	title: 'image_processing.h',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-processing-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-image-processing-h'
};
const contentTitle = 'image_processing.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_ImageProcessing_InitializeEnvironment()",
  "id": "oh_imageprocessing_initializeenvironment",
  "level": 3
}, {
  "value": "OH_ImageProcessing_DeinitializeEnvironment()",
  "id": "oh_imageprocessing_deinitializeenvironment",
  "level": 3
}, {
  "value": "OH_ImageProcessing_IsColorSpaceConversionSupported()",
  "id": "oh_imageprocessing_iscolorspaceconversionsupported",
  "level": 3
}, {
  "value": "OH_ImageProcessing_IsCompositionSupported()",
  "id": "oh_imageprocessing_iscompositionsupported",
  "level": 3
}, {
  "value": "OH_ImageProcessing_IsDecompositionSupported()",
  "id": "oh_imageprocessing_isdecompositionsupported",
  "level": 3
}, {
  "value": "OH_ImageProcessing_IsMetadataGenerationSupported()",
  "id": "oh_imageprocessing_ismetadatagenerationsupported",
  "level": 3
}, {
  "value": "OH_ImageProcessing_Create()",
  "id": "oh_imageprocessing_create",
  "level": 3
}, {
  "value": "OH_ImageProcessing_Destroy()",
  "id": "oh_imageprocessing_destroy",
  "level": 3
}, {
  "value": "OH_ImageProcessing_SetParameter()",
  "id": "oh_imageprocessing_setparameter",
  "level": 3
}, {
  "value": "OH_ImageProcessing_GetParameter()",
  "id": "oh_imageprocessing_getparameter",
  "level": 3
}, {
  "value": "OH_ImageProcessing_ConvertColorSpace()",
  "id": "oh_imageprocessing_convertcolorspace",
  "level": 3
}, {
  "value": "OH_ImageProcessing_Compose()",
  "id": "oh_imageprocessing_compose",
  "level": 3
}, {
  "value": "OH_ImageProcessing_Decompose()",
  "id": "oh_imageprocessing_decompose",
  "level": 3
}, {
  "value": "OH_ImageProcessing_GenerateMetadata()",
  "id": "oh_imageprocessing_generatemetadata",
  "level": 3
}, {
  "value": "OH_ImageProcessing_EnhanceDetail()",
  "id": "oh_imageprocessing_enhancedetail",
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
        id: "image_processingh",
        children: "image_processing.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明图片处理函数。提供图片处理能力，包括色彩空间转换，元数据生成及图片缩放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/video_processing_engine/image_processing.h>"]
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
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_imageprocessing_initializeenvironment",
              children: "ImageProcessing_ErrorCode OH_ImageProcessing_InitializeEnvironment(void)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["初始化图片处理模块的全局环境。  此函数为非必需函数。通常此函数在主进程启动时被调用，用于图片处理模块的全局环境初始化并可以减少", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_create",
              children: "OH_ImageProcessing_Create"
            }), "的耗时。调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_deinitializeenvironment",
              children: "OH_ImageProcessing_DeinitializeEnvironment"
            }), "进行全局环境反初始化。可用于检查设备GPU是否正常工作。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imageprocessing_deinitializeenvironment",
              children: "ImageProcessing_ErrorCode OH_ImageProcessing_DeinitializeEnvironment(void)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["反初始化图片处理模块的全局环境。  如果", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_initializeenvironment",
              children: "OH_ImageProcessing_InitializeEnvironment"
            }), "被调用，则此函数为必需函数。通常此函数在主进程准备退出时被调用，用于反初始化图片处理模块的全局环境（由", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_initializeenvironment",
              children: "OH_ImageProcessing_InitializeEnvironment"
            }), "接口初始化）。如果此时存在图片处理实例，则不应调用此函数。如果", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_initializeenvironment",
              children: "OH_ImageProcessing_InitializeEnvironment"
            }), "未被调用，则不应调用此函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imageprocessing_iscolorspaceconversionsupported",
              children: "bool OH_ImageProcessing_IsColorSpaceConversionSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo, const ImageProcessing_ColorSpaceInfo* destinationImageInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询是否支持当前图片色彩空间转换能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imageprocessing_iscompositionsupported",
              children: "bool OH_ImageProcessing_IsCompositionSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo, const ImageProcessing_ColorSpaceInfo* sourceGainmapInfo,const ImageProcessing_ColorSpaceInfo* destinationImageInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询是否支持HDR双层图片转换为HDR单层图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imageprocessing_isdecompositionsupported",
              children: "bool OH_ImageProcessing_IsDecompositionSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo, const ImageProcessing_ColorSpaceInfo* destinationImageInfo, const ImageProcessing_ColorSpaceInfo* destinationGainmapInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询是否支持HDR单层图片转换为HDR双层图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imageprocessing_ismetadatagenerationsupported",
              children: "bool OH_ImageProcessing_IsMetadataGenerationSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询是否支持图片元数据生成能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imageprocessing_create",
              children: "ImageProcessing_ErrorCode OH_ImageProcessing_Create(OH_ImageProcessing** imageProcessor, int32_t type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个图片处理模块实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imageprocessing_destroy",
              children: "ImageProcessing_ErrorCode OH_ImageProcessing_Destroy(OH_ImageProcessing* imageProcessor)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁当前图片处理模块实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imageprocessing_setparameter",
              children: "ImageProcessing_ErrorCode OH_ImageProcessing_SetParameter(OH_ImageProcessing* imageProcessor, const OH_AVFormat* parameter)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置图片处理模块参数。通过特定参数键添加参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imageprocessing_getparameter",
              children: "ImageProcessing_ErrorCode OH_ImageProcessing_GetParameter(OH_ImageProcessing* imageProcessor, OH_AVFormat* parameter)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取图片处理模块参数。通过特定参数键获取参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imageprocessing_convertcolorspace",
              children: "ImageProcessing_ErrorCode OH_ImageProcessing_ConvertColorSpace(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage, OH_PixelmapNative* destinationImage)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实现单层图片间转换。此函数包括HDR图片到SDR图片的色彩空间转换，SDR图片到HDR图片的色彩空间转换，SDR图片到SDR图片的色彩空间转换和HDR图片的色彩空间转换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imageprocessing_compose",
              children: "ImageProcessing_ErrorCode OH_ImageProcessing_Compose(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage, OH_PixelmapNative* sourceGainmap, OH_PixelmapNative* destinationImage)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实现HDR双层图片到HDR单层图片的转换。此函数通过输入图片与输入Gainmap生成输出图片。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imageprocessing_decompose",
              children: "ImageProcessing_ErrorCode OH_ImageProcessing_Decompose(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage, OH_PixelmapNative* destinationImage, OH_PixelmapNative* destinationGainmap)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实现HDR单层图片到HDR双层图片的转换。此函数通过输入图片生成输出图片和输出Gainmap。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imageprocessing_generatemetadata",
              children: "ImageProcessing_ErrorCode OH_ImageProcessing_GenerateMetadata(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成HDR图片元数据。此函数为HDR图片生成元数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_imageprocessing_enhancedetail",
              children: "ImageProcessing_ErrorCode OH_ImageProcessing_EnhanceDetail(OH_ImageProcessing* imageProcessor, OH_PixelmapNative* sourceImage, OH_PixelmapNative* destinationImage)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进行图片清晰度/细节增强。此函数根据输入图片和输出图片预设的尺寸，对源图片进行必要的缩放操作生成目标图片，并提供了多种缩放方法以平衡性能和图像质量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_initializeenvironment",
      children: "OH_ImageProcessing_InitializeEnvironment()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ImageProcessing_ErrorCode OH_ImageProcessing_InitializeEnvironment(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化图片处理模块的全局环境。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数为非必需函数。通常此函数在主进程启动时被调用，用于图片处理模块的全局环境初始化并可以减少", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_create",
        children: "OH_ImageProcessing_Create"
      }), "的耗时。调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_deinitializeenvironment",
        children: "OH_ImageProcessing_DeinitializeEnvironment"
      }), "进行全局环境反初始化。可用于检查设备GPU是否正常工作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h#imageprocessing_errorcode",
              children: "ImageProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果初始化成功，则返回IMAGE_PROCESSING_SUCCESS，否则返回IMAGE_PROCESSING_ERROR_INITIALIZE_FAILED。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_deinitializeenvironment",
      children: "OH_ImageProcessing_DeinitializeEnvironment()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ImageProcessing_ErrorCode OH_ImageProcessing_DeinitializeEnvironment(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "反初始化图片处理模块的全局环境。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_initializeenvironment",
        children: "OH_ImageProcessing_InitializeEnvironment"
      }), "被调用，则此函数为必需函数。通常此函数在主进程准备退出时被调用，用于反初始化图片处理模块的全局环境（由", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_initializeenvironment",
        children: "OH_ImageProcessing_InitializeEnvironment"
      }), "接口初始化）。如果此时存在图片处理实例，则不应调用此函数。如果", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_initializeenvironment",
        children: "OH_ImageProcessing_InitializeEnvironment"
      }), "未被调用，则不应调用此函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 13"]
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h#imageprocessing_errorcode",
              children: "ImageProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果反初始化成功，则返回IMAGE_PROCESSING_SUCCESS。  如果存在图片处理实例未被销毁或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-h/capi-image-processing-h#oh_imageprocessing_initializeenvironment",
              children: "OH_ImageProcessing_InitializeEnvironment"
            }), "接口未被调用，则返回IMAGE_PROCESSING_ERROR_OPERATION_NOT_PERMITTED。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_iscolorspaceconversionsupported",
      children: "OH_ImageProcessing_IsColorSpaceConversionSupported()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_ImageProcessing_IsColorSpaceConversionSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo,const ImageProcessing_ColorSpaceInfo* destinationImageInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询是否支持当前图片色彩空间转换能力。"
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/api-imageprocessing-imageprocessing-colorspaceinfo/api-imageprocessing-imageprocessing-colorspaceinfo",
              children: "ImageProcessing_ColorSpaceInfo"
            }), "* sourceImageInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输入图片色彩空间信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/api-imageprocessing-imageprocessing-colorspaceinfo/api-imageprocessing-imageprocessing-colorspaceinfo",
              children: "ImageProcessing_ColorSpaceInfo"
            }), "* destinationImageInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输出图片色彩空间信息的指针，"
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果支持当前色彩空间转换，返回true。  如果不支持当前色彩空间转换，返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_iscompositionsupported",
      children: "OH_ImageProcessing_IsCompositionSupported()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_ImageProcessing_IsCompositionSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo,const ImageProcessing_ColorSpaceInfo* sourceGainmapInfo,const ImageProcessing_ColorSpaceInfo* destinationImageInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询是否支持HDR双层图片转换为HDR单层图片。"
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/api-imageprocessing-imageprocessing-colorspaceinfo/api-imageprocessing-imageprocessing-colorspaceinfo",
              children: "ImageProcessing_ColorSpaceInfo"
            }), "* sourceImageInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输入图片色彩空间信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/api-imageprocessing-imageprocessing-colorspaceinfo/api-imageprocessing-imageprocessing-colorspaceinfo",
              children: "ImageProcessing_ColorSpaceInfo"
            }), "* sourceGainmapInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输入Gainmap色彩空间信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/api-imageprocessing-imageprocessing-colorspaceinfo/api-imageprocessing-imageprocessing-colorspaceinfo",
              children: "ImageProcessing_ColorSpaceInfo"
            }), "* destinationImageInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输出图片色彩空间信息的指针。"
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果支持HDR双层图片转换HDR单层图片能力，返回true。  如果不支持此能力，返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_isdecompositionsupported",
      children: "OH_ImageProcessing_IsDecompositionSupported()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_ImageProcessing_IsDecompositionSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo,const ImageProcessing_ColorSpaceInfo* destinationImageInfo,const ImageProcessing_ColorSpaceInfo* destinationGainmapInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询是否支持HDR单层图片转换为HDR双层图片。"
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/api-imageprocessing-imageprocessing-colorspaceinfo/api-imageprocessing-imageprocessing-colorspaceinfo",
              children: "ImageProcessing_ColorSpaceInfo"
            }), "* sourceImageInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输入图片色彩空间信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/api-imageprocessing-imageprocessing-colorspaceinfo/api-imageprocessing-imageprocessing-colorspaceinfo",
              children: "ImageProcessing_ColorSpaceInfo"
            }), "* destinationImageInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输出图片色彩空间信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/api-imageprocessing-imageprocessing-colorspaceinfo/api-imageprocessing-imageprocessing-colorspaceinfo",
              children: "ImageProcessing_ColorSpaceInfo"
            }), "* destinationGainmapInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输出Gainmap色彩空间信息的指针。"
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果支持HDR单层图片转换为HDR双层图片能力，返回true。  如果不支持此能力，返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_ismetadatagenerationsupported",
      children: "OH_ImageProcessing_IsMetadataGenerationSupported()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_ImageProcessing_IsMetadataGenerationSupported(const ImageProcessing_ColorSpaceInfo* sourceImageInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询是否支持图片元数据生成能力。"
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/api-imageprocessing-imageprocessing-colorspaceinfo/api-imageprocessing-imageprocessing-colorspaceinfo",
              children: "ImageProcessing_ColorSpaceInfo"
            }), "* sourceImageInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输入图片色彩空间信息的指针。"
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
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果支持图片元数据生成能力，返回true。  如果不支持此能力，返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_create",
      children: "OH_ImageProcessing_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ImageProcessing_ErrorCode OH_ImageProcessing_Create(OH_ImageProcessing** imageProcessor, int32_t type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个图片处理模块实例。"
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
              href: "/ref/image-api/image-c/image-struct/capi-imageprocessing-oh-imageprocessing/capi-imageprocessing-oh-imageprocessing",
              children: "OH_ImageProcessing"
            }), "** imageProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数。指针*imageProcessor指向一个新的图片处理对象。指针*imageProcessor在传递前必须是一个空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用IMAGE_PROCESSING_TYPE_XXX来指定图片处理类型。此实例的类型在创建后不能更改。"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h#imageprocessing_errorcode",
              children: "ImageProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果创建成功，则返回IMAGE_PROCESSING_SUCCESS。  当指定的图片处理类型不支持时，返回IMAGE_PROCESSING_ERROR_UNSUPPORTED_PROCESSING，例如如果不支持图片元数据生成能力，则返回不支持该处理类型。  当创建失败时，返回IMAGE_PROCESSING_ERROR_CREATE_FAILED。  当该实例为空或指向该实例的指针为空时，返回IMAGE_PROCESSING_ERROR_INVALID_INSTANCE。  当指定的图片处理类型无效时，返回IMAGE_PROCESSING_ERROR_INVALID_PARAMETER。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_destroy",
      children: "OH_ImageProcessing_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ImageProcessing_ErrorCode OH_ImageProcessing_Destroy(OH_ImageProcessing* imageProcessor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁当前图片处理模块实例。"
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
              href: "/ref/image-api/image-c/image-struct/capi-imageprocessing-oh-imageprocessing/capi-imageprocessing-oh-imageprocessing",
              children: "OH_ImageProcessing"
            }), "* imageProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向图片处理模块实例的指针。当实例被销毁时，建议该指针设置为空。"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h#imageprocessing_errorcode",
              children: "ImageProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果销毁成功，则返回IMAGE_PROCESSING_SUCCESS。  当该实例为空或该实例不是图片处理模块实例时，返回IMAGE_PROCESSING_ERROR_INVALID_INSTANCE。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_setparameter",
      children: "OH_ImageProcessing_SetParameter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ImageProcessing_ErrorCode OH_ImageProcessing_SetParameter(OH_ImageProcessing* imageProcessor,const OH_AVFormat* parameter)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置图片处理模块参数。通过特定参数键添加参数。"
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
              href: "/ref/image-api/image-c/image-struct/capi-imageprocessing-oh-imageprocessing/capi-imageprocessing-oh-imageprocessing",
              children: "OH_ImageProcessing"
            }), "* imageProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向图片处理模块实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), "* parameter"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图片处理参数。"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h#imageprocessing_errorcode",
              children: "ImageProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果设置参数成功，则返回IMAGE_PROCESSING_SUCCESS。  当该实例为空或该实例不是图片处理模块实例时，返回IMAGE_PROCESSING_ERROR_INVALID_INSTANCE。  当参数为空时，返回IMAGE_PROCESSING_ERROR_INVALID_PARAMETER。  当部分参数无效时，返回IMAGE_PROCESSING_ERROR_INVALID_VALUE，例如参数包含不支持的参数键或值。  当内存分配失败时，返回IMAGE_PROCESSING_ERROR_NO_MEMORY。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_getparameter",
      children: "OH_ImageProcessing_GetParameter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ImageProcessing_ErrorCode OH_ImageProcessing_GetParameter(OH_ImageProcessing* imageProcessor,OH_AVFormat* parameter)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取图片处理模块参数。通过特定参数键获取参数。"
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
              href: "/ref/image-api/image-c/image-struct/capi-imageprocessing-oh-imageprocessing/capi-imageprocessing-oh-imageprocessing",
              children: "OH_ImageProcessing"
            }), "* imageProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向图片处理模块实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), "* parameter"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该图片处理模块实例使用的参数。"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h#imageprocessing_errorcode",
              children: "ImageProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果获取参数成功，则返回IMAGE_PROCESSING_SUCCESS。  当该实例为空或该实例不是图片处理模块实例时，返回IMAGE_PROCESSING_ERROR_INVALID_INSTANCE。  当参数为空时，返回IMAGE_PROCESSING_ERROR_INVALID_PARAMETER。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_convertcolorspace",
      children: "OH_ImageProcessing_ConvertColorSpace()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ImageProcessing_ErrorCode OH_ImageProcessing_ConvertColorSpace(OH_ImageProcessing* imageProcessor,OH_PixelmapNative* sourceImage, OH_PixelmapNative* destinationImage)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现单层图片间转换。此函数包括HDR图片到SDR图片的色彩空间转换，SDR图片到HDR图片的色彩空间转换，SDR图片到SDR图片的色彩空间转换和HDR图片的色彩空间转换。"
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
              href: "/ref/image-api/image-c/image-struct/capi-imageprocessing-oh-imageprocessing/capi-imageprocessing-oh-imageprocessing",
              children: "OH_ImageProcessing"
            }), "* imageProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向图片处理模块实例的指针。该实例应该由IMAGE_PROCESSING_TYPE_COLOR_SPACE_CONVERSION类型创建。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "* sourceImage"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向输入图片的指针，指向的OH_PixelmapNative需为DMA内存，具体情况请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-allocator-type#%E5%86%85%E5%AD%98%E7%B1%BB%E5%9E%8B%E4%BB%8B%E7%BB%8D",
              children: "PixelMap的内存类型介绍"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "* destinationImage"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向输出图片的指针，指向的OH_PixelmapNative需为DMA内存，具体情况请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-allocator-type#%E5%86%85%E5%AD%98%E7%B1%BB%E5%9E%8B%E4%BB%8B%E7%BB%8D",
              children: "PixelMap的内存类型介绍"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h#imageprocessing_errorcode",
              children: "ImageProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果图片处理成功，则返回IMAGE_PROCESSING_SUCCESS。  当该实例为空或该实例不是图片处理模块实例时，返回IMAGE_PROCESSING_ERROR_INVALID_INSTANCE。  当图片为空时，返回IMAGE_PROCESSING_ERROR_INVALID_PARAMETER。  当图片的某些属性无效时，返回IMAGE_PROCESSING_ERROR_INVALID_VALUE，例如图片的色彩空间是不支持的。  当该图片处理不支持时，返回IMAGE_PROCESSING_ERROR_UNSUPPORTED_PROCESSING。  当该图片处理中返回错误时，返回IMAGE_PROCESSING_ERROR_PROCESS_FAILED。  当内存分配失败时，返回IMAGE_PROCESSING_ERROR_NO_MEMORY。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_compose",
      children: "OH_ImageProcessing_Compose()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ImageProcessing_ErrorCode OH_ImageProcessing_Compose(OH_ImageProcessing* imageProcessor,OH_PixelmapNative* sourceImage, OH_PixelmapNative* sourceGainmap, OH_PixelmapNative* destinationImage)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现HDR双层图片到HDR单层图片的转换。此函数通过输入图片与输入Gainmap生成输出图片。"
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
              href: "/ref/image-api/image-c/image-struct/capi-imageprocessing-oh-imageprocessing/capi-imageprocessing-oh-imageprocessing",
              children: "OH_ImageProcessing"
            }), "* imageProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向图片处理模块实例的指针。该实例应该由IMAGE_PROCESSING_TYPE_COMPOSITION类型创建。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "* sourceImage"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向输入图片的指针，指向的OH_PixelmapNative需为DMA内存，具体情况请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-allocator-type#%E5%86%85%E5%AD%98%E7%B1%BB%E5%9E%8B%E4%BB%8B%E7%BB%8D",
              children: "PixelMap的内存类型介绍"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "* sourceGainmap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向输入Gainmap的指针，指向的OH_PixelmapNative需为DMA内存，具体情况请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-allocator-type#%E5%86%85%E5%AD%98%E7%B1%BB%E5%9E%8B%E4%BB%8B%E7%BB%8D",
              children: "PixelMap的内存类型介绍"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "* destinationImage"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向输出图片的指针，指向的OH_PixelmapNative需为DMA内存，具体情况请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-allocator-type#%E5%86%85%E5%AD%98%E7%B1%BB%E5%9E%8B%E4%BB%8B%E7%BB%8D",
              children: "PixelMap的内存类型介绍"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h#imageprocessing_errorcode",
              children: "ImageProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果图片处理成功，则返回IMAGE_PROCESSING_SUCCESS。  当该实例为空或该实例不是图片处理模块实例时，返回IMAGE_PROCESSING_ERROR_INVALID_INSTANCE。  当图片为空时，返回IMAGE_PROCESSING_ERROR_INVALID_PARAMETER。  当图片的某些属性无效时，返回IMAGE_PROCESSING_ERROR_INVALID_VALUE，例如图片的色彩空间是不支持的。  当该图片处理不支持时，返回IMAGE_PROCESSING_ERROR_UNSUPPORTED_PROCESSING。  当该图片处理中返回错误时，返回IMAGE_PROCESSING_ERROR_PROCESS_FAILED。  当内存分配失败时，返回IMAGE_PROCESSING_ERROR_NO_MEMORY。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_decompose",
      children: "OH_ImageProcessing_Decompose()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ImageProcessing_ErrorCode OH_ImageProcessing_Decompose(OH_ImageProcessing* imageProcessor,OH_PixelmapNative* sourceImage, OH_PixelmapNative* destinationImage, OH_PixelmapNative* destinationGainmap)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现HDR单层图片到HDR双层图片的转换。此函数通过输入图片生成输出图片和输出Gainmap。"
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
              href: "/ref/image-api/image-c/image-struct/capi-imageprocessing-oh-imageprocessing/capi-imageprocessing-oh-imageprocessing",
              children: "OH_ImageProcessing"
            }), "* imageProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向图片处理模块实例的指针。该实例应该由IMAGE_PROCESSING_TYPE_DECOMPOSITION类型创建。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "* sourceImage"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向输入图片的指针，指向的OH_PixelmapNative需为DMA内存，具体情况请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-allocator-type#%E5%86%85%E5%AD%98%E7%B1%BB%E5%9E%8B%E4%BB%8B%E7%BB%8D",
              children: "PixelMap的内存类型介绍"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "* destinationImage"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向输出图片的指针，指向的OH_PixelmapNative需为DMA内存，具体情况请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-allocator-type#%E5%86%85%E5%AD%98%E7%B1%BB%E5%9E%8B%E4%BB%8B%E7%BB%8D",
              children: "PixelMap的内存类型介绍"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "* destinationGainmap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向输出Gainmap的指针，指向的OH_PixelmapNative需为DMA内存，具体情况请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-allocator-type#%E5%86%85%E5%AD%98%E7%B1%BB%E5%9E%8B%E4%BB%8B%E7%BB%8D",
              children: "PixelMap的内存类型介绍"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h#imageprocessing_errorcode",
              children: "ImageProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果图片处理成功，则返回IMAGE_PROCESSING_SUCCESS。  当该实例为空或该实例不是图片处理模块实例时，返回IMAGE_PROCESSING_ERROR_INVALID_INSTANCE。  当图片为空时，返回IMAGE_PROCESSING_ERROR_INVALID_PARAMETER。  当图片的某些属性无效时，返回IMAGE_PROCESSING_ERROR_INVALID_VALUE，例如图片的色彩空间是不支持的。  当该图片处理不支持时，返回IMAGE_PROCESSING_ERROR_UNSUPPORTED_PROCESSING。  当该图片处理中返回错误时，返回IMAGE_PROCESSING_ERROR_PROCESS_FAILED。  当内存分配失败时，返回IMAGE_PROCESSING_ERROR_NO_MEMORY。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_generatemetadata",
      children: "OH_ImageProcessing_GenerateMetadata()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ImageProcessing_ErrorCode OH_ImageProcessing_GenerateMetadata(OH_ImageProcessing* imageProcessor,OH_PixelmapNative* sourceImage)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生成HDR图片元数据。此函数为HDR图片生成元数据。"
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
              href: "/ref/image-api/image-c/image-struct/capi-imageprocessing-oh-imageprocessing/capi-imageprocessing-oh-imageprocessing",
              children: "OH_ImageProcessing"
            }), "* imageProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向图片处理模块实例的指针。该实例应该由IMAGE_PROCESSING_TYPE_METADATA_GENERATION类型创建。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "* sourceImage"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向输入图片的指针，指向的OH_PixelmapNative需为DMA内存，具体情况请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-allocator-type#%E5%86%85%E5%AD%98%E7%B1%BB%E5%9E%8B%E4%BB%8B%E7%BB%8D",
              children: "PixelMap的内存类型介绍"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h#imageprocessing_errorcode",
              children: "ImageProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果图片处理成功，则返回IMAGE_PROCESSING_SUCCESS。  当该实例为空或该实例不是图片处理模块实例时，返回IMAGE_PROCESSING_ERROR_INVALID_INSTANCE。  当图片为空时，返回IMAGE_PROCESSING_ERROR_INVALID_PARAMETER。  当图片的某些属性无效时，返回IMAGE_PROCESSING_ERROR_INVALID_VALUE，例如图片的色彩空间是不支持的。  当该图片处理不支持时，返回IMAGE_PROCESSING_ERROR_UNSUPPORTED_PROCESSING。  当该图片处理中返回错误时，返回IMAGE_PROCESSING_ERROR_PROCESS_FAILED。  当内存分配失败时，返回IMAGE_PROCESSING_ERROR_NO_MEMORY。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_imageprocessing_enhancedetail",
      children: "OH_ImageProcessing_EnhanceDetail()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ImageProcessing_ErrorCode OH_ImageProcessing_EnhanceDetail(OH_ImageProcessing* imageProcessor,OH_PixelmapNative* sourceImage, OH_PixelmapNative* destinationImage)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进行图片清晰度/细节增强。此函数根据输入图片和输出图片预设的尺寸，对源图片进行必要的缩放操作生成目标图片，并提供了多种缩放方法以平衡性能和图像质量。"
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
              href: "/ref/image-api/image-c/image-struct/capi-imageprocessing-oh-imageprocessing/capi-imageprocessing-oh-imageprocessing",
              children: "OH_ImageProcessing"
            }), "* imageProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向图片处理模块实例的指针。该实例应该由IMAGE_PROCESSING_TYPE_DETAIL_ENHANCER类型创建。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "* sourceImage"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向输入图片的指针，指向的OH_PixelmapNative需为DMA内存，具体情况请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-allocator-type#%E5%86%85%E5%AD%98%E7%B1%BB%E5%9E%8B%E4%BB%8B%E7%BB%8D",
              children: "PixelMap的内存类型介绍"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/image-api/image-c/image-struct/capi-image-nativemodule-oh-pixelmapnative/capi-image-nativemodule-oh-pixelmapnative",
              children: "OH_PixelmapNative"
            }), "* destinationImage"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向输出图片的指针，指向的OH_PixelmapNative需为DMA内存，具体情况请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-arkts-dev/image-decoding-arts/image-allocator-type#%E5%86%85%E5%AD%98%E7%B1%BB%E5%9E%8B%E4%BB%8B%E7%BB%8D",
              children: "PixelMap的内存类型介绍"
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
              href: "/ref/image-api/image-c/image-headerfile/capi-image-processing-types-h/capi-image-processing-types-h#imageprocessing_errorcode",
              children: "ImageProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果图片处理成功，则返回IMAGE_PROCESSING_SUCCESS。  当该实例为空或该实例不是图片处理模块实例时，返回IMAGE_PROCESSING_ERROR_INVALID_INSTANCE。  当图片为空时，返回IMAGE_PROCESSING_ERROR_INVALID_PARAMETER。  当图片的某些属性无效时，返回IMAGE_PROCESSING_ERROR_INVALID_VALUE，例如图片的色彩空间是不支持的。  当该图片处理不支持时，返回IMAGE_PROCESSING_ERROR_UNSUPPORTED_PROCESSING。  当该图片处理中返回错误时，返回IMAGE_PROCESSING_ERROR_PROCESS_FAILED。  当内存分配失败时，返回IMAGE_PROCESSING_ERROR_NO_MEMORY。"
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