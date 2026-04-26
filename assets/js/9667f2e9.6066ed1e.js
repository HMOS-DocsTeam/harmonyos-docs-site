"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["89710"], {
193848(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_headerfile_capi_video_processing_types_h_capi_video_processing_types_h_md_966_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-headerfile-capi-video-processing-types-h-capi-video-processing-types-h-md-966.json
var site_docs_ref_media_api_media_c_media_headerfile_capi_video_processing_types_h_capi_video_processing_types_h_md_966_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h","title":"video_processing_types.h","description":"概述","source":"@site/docs-ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h.md","sourceDirName":"media-api/media-c/media-headerfile/capi-video-processing-types-h","slug":"/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"video_processing_types.h","sidebar_position":20,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-video-processing-types-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-video-processing-types-h"},"sidebar":"ref","previous":{"title":"video_processing.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h"},"next":{"title":"avmedia_base.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avmedia-base-h/capi-avmedia-base-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h.md


const frontMatter = {
	title: 'video_processing_types.h',
	sidebar_position: 20,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-video-processing-types-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-video-processing-types-h'
};
const contentTitle = 'video_processing_types.h';

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
  "value": "VideoDetailEnhancer_QualityLevel",
  "id": "videodetailenhancer_qualitylevel",
  "level": 3
}, {
  "value": "VideoMetadataGeneratorStyleControl",
  "id": "videometadatageneratorstylecontrol",
  "level": 3
}, {
  "value": "VideoProcessing_ErrorCode",
  "id": "videoprocessing_errorcode",
  "level": 3
}, {
  "value": "VideoProcessing_State",
  "id": "videoprocessing_state",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_VideoProcessingCallback_OnError()",
  "id": "oh_videoprocessingcallback_onerror",
  "level": 3
}, {
  "value": "OH_VideoProcessingCallback_OnState()",
  "id": "oh_videoprocessingcallback_onstate",
  "level": 3
}, {
  "value": "OH_VideoProcessingCallback_OnNewOutputBuffer()",
  "id": "oh_videoprocessingcallback_onnewoutputbuffer",
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
        id: "video_processing_typesh",
        children: "video_processing_types.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频处理类型定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/video_processing_engine/video_processing_types.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libvideo_processing.so"]
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
      }), " 12"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-videoprocessing/capi-videoprocessing",
        children: "VideoProcessing"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/media-api/media-c/media-struct/api-videoprocessing-videoprocessing-colorspaceinfo/api-videoprocessing-videoprocessing-colorspaceinfo",
              children: "VideoProcessing_ColorSpaceInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VideoProcessing_ColorSpaceInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频颜色空间信息数据结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing",
              children: "OH_VideoProcessing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VideoProcessing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义视频处理对象。  定义一个OH_VideoProcessing空指针，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_create",
              children: "OH_VideoProcessing_Create"
            }), "创建视频处理实例，该指针在创建实例之前必须为空。用户可以对不同的处理类型创建不同的视频处理实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-nativewindow/capi-videoprocessing-nativewindow",
              children: "NativeWindow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OHNativeWindow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义NativeWindow对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-avformat/capi-videoprocessing-oh-avformat",
              children: "OH_AVFormat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVFormat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义OH_AVFormat对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-videoprocessing-callback/capi-videoprocessing-videoprocessing-callback",
              children: "VideoProcessing_Callback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VideoProcessing_Callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频处理回调对象类型。  定义一个VideoProcessing_Callback空指针，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessingcallback_create",
              children: "OH_VideoProcessingCallback_Create"
            }), "来创建一个回调对象。创建之前该指针必须为空。通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_registercallback",
              children: "OH_VideoProcessing_RegisterCallback"
            }), "来向视频处理实例注册回调对象。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
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
              href: "#videodetailenhancer_qualitylevel",
              children: "VideoDetailEnhancer_QualityLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VideoDetailEnhancer_QualityLevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于细节增强的质量等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#videometadatageneratorstylecontrol",
              children: "VideoMetadataGeneratorStyleControl"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VideoMetadataGeneratorStyleControl"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频元数据生成的风格模式。参数的具体取值请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%8F%98%E9%87%8F",
              children: "VIDEO_METADATA_GENERATOR_STYLE_CONTROL"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VideoProcessing_ErrorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频处理错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#videoprocessing_state",
              children: "VideoProcessing_State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VideoProcessing_State"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频处理状态。  视频处理状态通过回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessingcallback_onstate",
              children: "OH_VideoProcessingCallback_OnState"
            }), "进行报告。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
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
              href: "#oh_videoprocessingcallback_onerror",
              children: "typedef void (*OH_VideoProcessingCallback_OnError)(OH_VideoProcessing* videoProcessor, VideoProcessing_ErrorCode error, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VideoProcessingCallback_OnError"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频处理过程中报告错误的回调函数指针。  错误码", (0,jsx_runtime.jsx)(_components.a, {
              href: "#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            }), "：VIDEO_PROCESSING_ERROR_UNSUPPORTED_PROCESSING，不支持的处理，比如不支持输入输出的颜色空间类型转换。  VIDEO_PROCESSING_ERROR_INVALID_VALUE，无效的视频属性，比如视频的颜色空间无效。  VIDEO_PROCESSING_ERROR_NO_MEMORY，内存不足。  VIDEO_PROCESSING_ERROR_PROCESS_FAILED，处理过程中出错。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessingcallback_onstate",
              children: "typedef void (*OH_VideoProcessingCallback_OnState)(OH_VideoProcessing* videoProcessor, VideoProcessing_State state, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VideoProcessingCallback_OnState"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["报告视频处理状态的回调函数指针。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_start",
              children: "OH_VideoProcessing_Start"
            }), "成功调用之后状态会变为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#videoprocessing_state",
              children: "VideoProcessing_State"
            }), ".VIDEO_PROCESSING_STATE_RUNNING。调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_stop",
              children: "OH_VideoProcessing_Stop"
            }), "，所有的缓存buffer处理完成后，状态会变为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#videoprocessing_state",
              children: "VideoProcessing_State"
            }), ".VIDEO_PROCESSING_STATE_STOPPED。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessingcallback_onnewoutputbuffer",
              children: "typedef void (*OH_VideoProcessingCallback_OnNewOutputBuffer)(OH_VideoProcessing* videoProcessor, uint32_t index, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_VideoProcessingCallback_OnNewOutputBuffer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["报告输出buffer已填充好数据的回调函数指针。  每个新输出buffer填充好数据之后该buffer的索引就会报告给用户。调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_renderoutputbuffer",
              children: "OH_VideoProcessing_RenderOutputBuffer"
            }), "根据索引来处理渲染并输出该buffer。如果未注册该函数，则输出buffer填充好数据后不会报告用户，而是直接进行处理渲染并输出。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量",
      children: "变量"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "const int32_t VIDEO_PROCESSING_TYPE_COLOR_SPACE_CONVERSION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示创建颜色空间转换视频处理实例。  调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_create",
              children: "OH_VideoProcessing_Create"
            }), "创建颜色空间转换视频处理实例，如果不支持该能力返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            }), ".VIDEO_PROCESSING_ERROR_UNSUPPORTED_PROCESSING。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t VIDEO_PROCESSING_TYPE_METADATA_GENERATION"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示创建元数据生成视频处理实例。  调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_create",
              children: "OH_VideoProcessing_Create"
            }), "创建元数据生成视频处理实例，如果不支持该能力返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            }), ".VIDEO_PROCESSING_ERROR_UNSUPPORTED_PROCESSING。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int32_t VIDEO_PROCESSING_TYPE_DETAIL_ENHANCER"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示创建细节增强视频处理实例。  调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_create",
              children: "OH_VideoProcessing_Create"
            }), "创建细节增强视频处理实例，如果不支持该能力返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            }), ".VIDEO_PROCESSING_ERROR_UNSUPPORTED_PROCESSING。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char* VIDEO_DETAIL_ENHANCER_PARAMETER_KEY_QUALITY_LEVEL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定视频细节增强的质量等级，参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#videodetailenhancer_qualitylevel",
              children: "VideoDetailEnhancer_QualityLevel"
            }), "查看具体取值。  调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_setparameter",
              children: "OH_VideoProcessing_SetParameter"
            }), "设置质量等级。  调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_getparameter",
              children: "OH_VideoProcessing_GetParameter"
            }), "获取当前质量等级。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 12"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char * VIDEO_METADATA_GENERATOR_STYLE_CONTROL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定视频元数据生成的风格模式。具体取值请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#videometadatageneratorstylecontrol",
              children: "VideoMetadataGeneratorStyleControl"
            }), "。调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_setintvalue",
              children: "OH_AVFormat_SetIntValue"
            }), "设置视频元数据生成的风格模式到AVFormat参数。调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_setparameter",
              children: "OH_VideoProcessing_SetParameter"
            }), "设置当前视频元数据生成的风格模式。调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_getparameter",
              children: "OH_VideoProcessing_GetParameter"
            }), "获取当前视频元数据生成的风格模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 22"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "videodetailenhancer_qualitylevel",
      children: "VideoDetailEnhancer_QualityLevel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum VideoDetailEnhancer_QualityLevel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于细节增强的质量等级。参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%8F%98%E9%87%8F",
        children: "VIDEO_DETAIL_ENHANCER_PARAMETER_KEY_QUALITY_LEVEL"
      }), "的具体取值，设置方法详见开发指南。"]
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
            children: "VIDEO_DETAIL_ENHANCER_QUALITY_LEVEL_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无细节增强。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_DETAIL_ENHANCER_QUALITY_LEVEL_LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "低质量等级细节增强，速度较快，默认设置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_DETAIL_ENHANCER_QUALITY_LEVEL_MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "中等质量等级细节增强，速度适中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_DETAIL_ENHANCER_QUALITY_LEVEL_HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高质量等级细节增强，速度相对较慢。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_setparameter",
        children: "OH_VideoProcessing_SetParameter"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_getparameter",
        children: "OH_VideoProcessing_GetParameter"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "videometadatageneratorstylecontrol",
      children: "VideoMetadataGeneratorStyleControl"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum VideoMetadataGeneratorStyleControl\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["视频元数据生成的风格模式。参数的具体取值请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%8F%98%E9%87%8F",
        children: "VIDEO_METADATA_GENERATOR_STYLE_CONTROL"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 22"]
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
            children: "VIDEO_METADATA_GENERATOR_CONTRAST_MODE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对比度优先模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_METADATA_GENERATOR_BRIGHT_MODE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "亮度优先模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参考："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_setparameter",
        children: "OH_VideoProcessing_SetParameter"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_getparameter",
        children: "OH_VideoProcessing_GetParameter"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_setintvalue",
        children: "OH_AVFormat_SetIntValue"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "videoprocessing_errorcode",
      children: "VideoProcessing_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum VideoProcessing_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频处理错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
            children: "VIDEO_PROCESSING_SUCCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_PROCESSING_ERROR_INVALID_PARAMETER = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入参数无效。以下情况都会返回该错误码：  1. 无效的输入或输出视频buffer，视频buffer为空。  2. 无效的参数，参数为空。  3. 无效的处理类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_PROCESSING_ERROR_UNKNOWN = 29210001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知错误，比如GPU计算失败或memcpy失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_PROCESSING_ERROR_INITIALIZE_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频处理全局环境初始化失败，比如初始化GPU环境失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_PROCESSING_ERROR_CREATE_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建视频处理实例失败，比如实例总数超出上限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_PROCESSING_ERROR_PROCESS_FAILED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "处理过程失败，比如处理时间超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_PROCESSING_ERROR_UNSUPPORTED_PROCESSING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的处理类型，可以调用OH_VideoProcessing_IsXXXSupported来检查是否支持这种处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许的操作，比如不满足调用接口所需的运行状态下调用该接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_PROCESSING_ERROR_NO_MEMORY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内存不足。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_PROCESSING_ERROR_INVALID_INSTANCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频处理实例无效，比如视频处理实例为空实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_PROCESSING_ERROR_INVALID_VALUE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入值无效，以下情况都会造成这种错误：  1. 视频buffer宽高太大或者颜色空间错误。  2. 参数包含无效的值，比如细节增强的质量等级错误。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "videoprocessing_state",
      children: "VideoProcessing_State"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum VideoProcessing_State\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["视频处理状态。视频处理状态通过回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_videoprocessingcallback_onstate",
        children: "OH_VideoProcessingCallback_OnState"
      }), "进行报告。"]
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
            children: "VIDEO_PROCESSING_STATE_RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频处理进行中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIDEO_PROCESSING_STATE_STOPPED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频处理已停止。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessingcallback_onerror",
      children: "OH_VideoProcessingCallback_OnError()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_VideoProcessingCallback_OnError)(OH_VideoProcessing* videoProcessor, VideoProcessing_ErrorCode error, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频处理过程中报告错误的回调函数指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#videoprocessing_errorcode",
        children: "VideoProcessing_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VIDEO_PROCESSING_ERROR_UNSUPPORTED_PROCESSING，不支持的处理，比如不支持输入输出的颜色空间类型转换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VIDEO_PROCESSING_ERROR_INVALID_VALUE，无效的视频属性，比如视频的颜色空间无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VIDEO_PROCESSING_ERROR_NO_MEMORY，内存不足。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VIDEO_PROCESSING_ERROR_PROCESS_FAILED，处理过程中出错。"
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing",
              children: "OH_VideoProcessing"
            }), "* videoProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频处理实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            }), " error"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "报告给用户的错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户的自定义数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessingcallback_onstate",
      children: "OH_VideoProcessingCallback_OnState()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_VideoProcessingCallback_OnState)(OH_VideoProcessing* videoProcessor, VideoProcessing_State state, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "报告视频处理状态的回调函数指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_start",
        children: "OH_VideoProcessing_Start"
      }), "成功调用之后状态会变为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#videoprocessing_state",
        children: "VideoProcessing_State"
      }), ".VIDEO_PROCESSING_STATE_RUNNING。调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_stop",
        children: "OH_VideoProcessing_Stop"
      }), "，所有的缓存buffer处理完成后，状态会变为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#videoprocessing_state",
        children: "VideoProcessing_State"
      }), ".VIDEO_PROCESSING_STATE_STOPPED。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing",
              children: "OH_VideoProcessing"
            }), "* videoProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频处理实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#videoprocessing_state",
              children: "VideoProcessing_State"
            }), " state"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频处理状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户的自定义数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessingcallback_onnewoutputbuffer",
      children: "OH_VideoProcessingCallback_OnNewOutputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_VideoProcessingCallback_OnNewOutputBuffer)(OH_VideoProcessing* videoProcessor, uint32_t index, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "报告输出buffer已填充好数据的回调函数指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["每个新输出buffer填充好数据之后该buffer的索引就会报告给用户。调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_renderoutputbuffer",
        children: "OH_VideoProcessing_RenderOutputBuffer"
      }), "根据索引来处理渲染并输出该buffer。如果未注册该函数，则输出buffer填充好数据后不会报告用户，而是直接进行处理渲染并输出。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing",
              children: "OH_VideoProcessing"
            }), "* videoProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频处理实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "新输出buffer的索引。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义的数据。"
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