"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["475012"], {
899105(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_headerfile_capi_video_processing_h_capi_video_processing_h_md_2bc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-headerfile-capi-video-processing-h-capi-video-processing-h-md-2bc.json
var site_docs_ref_media_api_media_c_media_headerfile_capi_video_processing_h_capi_video_processing_h_md_2bc_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h","title":"video_processing.h","description":"概述","source":"@site/docs-ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h.md","sourceDirName":"media-api/media-c/media-headerfile/capi-video-processing-h","slug":"/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"title":"video_processing.h","sidebar_position":19,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-video-processing-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-video-processing-h"},"sidebar":"ref","previous":{"title":"lowpower_video_sink_base.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h"},"next":{"title":"video_processing_types.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h.md


const frontMatter = {
	title: 'video_processing.h',
	sidebar_position: 19,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-video-processing-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-video-processing-h'
};
const contentTitle = 'video_processing.h';

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
  "value": "OH_VideoProcessing_InitializeEnvironment()",
  "id": "oh_videoprocessing_initializeenvironment",
  "level": 3
}, {
  "value": "OH_VideoProcessing_DeinitializeEnvironment()",
  "id": "oh_videoprocessing_deinitializeenvironment",
  "level": 3
}, {
  "value": "OH_VideoProcessing_IsColorSpaceConversionSupported()",
  "id": "oh_videoprocessing_iscolorspaceconversionsupported",
  "level": 3
}, {
  "value": "OH_VideoProcessing_IsMetadataGenerationSupported()",
  "id": "oh_videoprocessing_ismetadatagenerationsupported",
  "level": 3
}, {
  "value": "OH_VideoProcessing_Create()",
  "id": "oh_videoprocessing_create",
  "level": 3
}, {
  "value": "OH_VideoProcessing_Destroy()",
  "id": "oh_videoprocessing_destroy",
  "level": 3
}, {
  "value": "OH_VideoProcessing_RegisterCallback()",
  "id": "oh_videoprocessing_registercallback",
  "level": 3
}, {
  "value": "OH_VideoProcessing_SetSurface()",
  "id": "oh_videoprocessing_setsurface",
  "level": 3
}, {
  "value": "OH_VideoProcessing_GetSurface()",
  "id": "oh_videoprocessing_getsurface",
  "level": 3
}, {
  "value": "OH_VideoProcessing_SetParameter()",
  "id": "oh_videoprocessing_setparameter",
  "level": 3
}, {
  "value": "OH_VideoProcessing_GetParameter()",
  "id": "oh_videoprocessing_getparameter",
  "level": 3
}, {
  "value": "OH_VideoProcessing_Start()",
  "id": "oh_videoprocessing_start",
  "level": 3
}, {
  "value": "OH_VideoProcessing_Stop()",
  "id": "oh_videoprocessing_stop",
  "level": 3
}, {
  "value": "OH_VideoProcessing_RenderOutputBuffer()",
  "id": "oh_videoprocessing_renderoutputbuffer",
  "level": 3
}, {
  "value": "OH_VideoProcessingCallback_Create()",
  "id": "oh_videoprocessingcallback_create",
  "level": 3
}, {
  "value": "OH_VideoProcessingCallback_Destroy()",
  "id": "oh_videoprocessingcallback_destroy",
  "level": 3
}, {
  "value": "OH_VideoProcessingCallback_BindOnError()",
  "id": "oh_videoprocessingcallback_bindonerror",
  "level": 3
}, {
  "value": "OH_VideoProcessingCallback_BindOnState()",
  "id": "oh_videoprocessingcallback_bindonstate",
  "level": 3
}, {
  "value": "OH_VideoProcessingCallback_BindOnNewOutputBuffer()",
  "id": "oh_videoprocessingcallback_bindonnewoutputbuffer",
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
        id: "video_processingh",
        children: "video_processing.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明视频处理函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供视频处理能力，包括颜色空间转换、元数据生成和视频缩放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/video_processing_engine/video_processing.h>"]
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
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_videoprocessing_initializeenvironment",
              children: "VideoProcessing_ErrorCode OH_VideoProcessing_InitializeEnvironment(void)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["初始化视频处理全局环境。  该函数是可选的。  该函数只在主进程启动时被调用一次，用于初始化视频处理全局环境，这样可以减少", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_create",
              children: "OH_VideoProcessing_Create"
            }), "的时间。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_deinitializeenvironment",
              children: "VideoProcessing_ErrorCode OH_VideoProcessing_DeinitializeEnvironment(void)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放视频处理全局环境。  调用前，必须调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_initializeenvironment",
              children: "OH_VideoProcessing_InitializeEnvironment"
            }), "初始化。  通常在主进程即将退出时调用该函数来释放通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_initializeenvironment",
              children: "OH_VideoProcessing_InitializeEnvironment"
            }), "函数初始化的全局环境。  如果仍有视频处理的实例运行中，就不能调用该函数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_iscolorspaceconversionsupported",
              children: "bool OH_VideoProcessing_IsColorSpaceConversionSupported(const VideoProcessing_ColorSpaceInfo* sourceVideoInfo, const VideoProcessing_ColorSpaceInfo* destinationVideoInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询是否支持视频颜色空间转换。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_ismetadatagenerationsupported",
              children: "bool OH_VideoProcessing_IsMetadataGenerationSupported(const VideoProcessing_ColorSpaceInfo* sourceVideoInfo)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询是否支持视频元数据生成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_create",
              children: "VideoProcessing_ErrorCode OH_VideoProcessing_Create(OH_VideoProcessing** videoProcessor, int type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建视频处理实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_destroy",
              children: "VideoProcessing_ErrorCode OH_VideoProcessing_Destroy(OH_VideoProcessing* videoProcessor)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁视频处理实例。  销毁之前先停止实例，参阅", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_stop",
              children: "OH_VideoProcessing_Stop"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_registercallback",
              children: "VideoProcessing_ErrorCode OH_VideoProcessing_RegisterCallback(OH_VideoProcessing* videoProcessor,const VideoProcessing_Callback* callback, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册回调函数。  在开始视频处理之前注册回调函数，视频处理过程中无法注册回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_setsurface",
              children: "VideoProcessing_ErrorCode OH_VideoProcessing_SetSurface(OH_VideoProcessing* videoProcessor,const OHNativeWindow* window)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置视频处理输出surface。  在视频处理启动之前设置输出surface。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_getsurface",
              children: "VideoProcessing_ErrorCode OH_VideoProcessing_GetSurface(OH_VideoProcessing* videoProcessor, OHNativeWindow** window)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建surface。  在视频处理启动之前创建输入surface。调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_destroynativewindow",
              children: "OH_NativeWindow_DestroyNativeWindow"
            }), "销毁输入surface。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_setparameter",
              children: "VideoProcessing_ErrorCode OH_VideoProcessing_SetParameter(OH_VideoProcessing* videoProcessor, const OH_AVFormat* parameter)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置视频处理输出参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_getparameter",
              children: "VideoProcessing_ErrorCode OH_VideoProcessing_GetParameter(OH_VideoProcessing* videoProcessor, OH_AVFormat* parameter)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取视频处理参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_start",
              children: "VideoProcessing_ErrorCode OH_VideoProcessing_Start(OH_VideoProcessing* videoProcessor)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启动视频处理。  成功启动后，回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onstate",
              children: "OH_VideoProcessingCallback_OnState"
            }), "会报告", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_state",
              children: "VIDEO_PROCESSING_STATE_RUNNING"
            }), "状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_stop",
              children: "VideoProcessing_ErrorCode OH_VideoProcessing_Stop(OH_VideoProcessing* videoProcessor)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["停止视频处理。  成功停止后，回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onstate",
              children: "OH_VideoProcessingCallback_OnState"
            }), "会报告", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_state",
              children: "VIDEO_PROCESSING_STATE_STOPPED"
            }), "状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_renderoutputbuffer",
              children: "VideoProcessing_ErrorCode OH_VideoProcessing_RenderOutputBuffer(OH_VideoProcessing* videoProcessor, uint32_t index)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["渲染处理并输出buffer。  如果设置了回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onnewoutputbuffer",
              children: "OH_VideoProcessingCallback_OnNewOutputBuffer"
            }), "，当输出buffer准备好之后会通过回调函数把buffer的索引返回给用户。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessingcallback_create",
              children: "VideoProcessing_ErrorCode OH_VideoProcessingCallback_Create(VideoProcessing_Callback** callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建视频处理回调函数对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessingcallback_destroy",
              children: "VideoProcessing_ErrorCode OH_VideoProcessingCallback_Destroy(VideoProcessing_Callback* callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁回调对象。回调对象在注册之后就可以销毁。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessingcallback_bindonerror",
              children: "VideoProcessing_ErrorCode OH_VideoProcessingCallback_BindOnError(VideoProcessing_Callback* callback,OH_VideoProcessingCallback_OnError onError)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["绑定回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onerror",
              children: "OH_VideoProcessingCallback_OnError"
            }), "到回调对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessingcallback_bindonstate",
              children: "VideoProcessing_ErrorCode OH_VideoProcessingCallback_BindOnState(VideoProcessing_Callback* callback,OH_VideoProcessingCallback_OnState onState)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["绑定回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onstate",
              children: "OH_VideoProcessingCallback_OnState"
            }), "到回调对象。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessingcallback_bindonnewoutputbuffer",
              children: "VideoProcessing_ErrorCode OH_VideoProcessingCallback_BindOnNewOutputBuffer(VideoProcessing_Callback* callback,OH_VideoProcessingCallback_OnNewOutputBuffer onNewOutputBuffer)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["绑定回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onnewoutputbuffer",
              children: "OH_VideoProcessingCallback_OnNewOutputBuffer"
            }), "到回调对象。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessing_initializeenvironment",
      children: "OH_VideoProcessing_InitializeEnvironment()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessing_InitializeEnvironment(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化视频处理全局环境。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该函数是可选的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该函数只在主进程启动时被调用一次，用于初始化视频处理全局环境，这样可以减少", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_videoprocessing_create",
        children: "OH_VideoProcessing_Create"
      }), "的时间。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_videoprocessing_deinitializeenvironment",
        children: "OH_VideoProcessing_DeinitializeEnvironment"
      }), "释放视频处理全局环境。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["初始化后，必须释放视频处理全局环境，释放方式及时机详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_videoprocessing_deinitializeenvironment",
        children: "OH_VideoProcessing_DeinitializeEnvironment"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果初始化成功，返回VIDEO_PROCESSING_SUCCESS，否则返回VIDEO_PROCESSING_ERROR_INITIALIZE_FAILED。  如果失败，应用需要检查GPU是否正常工作。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessing_deinitializeenvironment",
      children: "OH_VideoProcessing_DeinitializeEnvironment()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessing_DeinitializeEnvironment(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放视频处理全局环境。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用前，必须调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_videoprocessing_initializeenvironment",
        children: "OH_VideoProcessing_InitializeEnvironment"
      }), "初始化。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常在主进程即将退出时调用该函数来释放通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_videoprocessing_initializeenvironment",
        children: "OH_VideoProcessing_InitializeEnvironment"
      }), "函数初始化的全局环境。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果仍有视频处理的实例运行中，就不能调用该函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 12"]
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果执行成功，返回VIDEO_PROCESSING_SUCCESS。  如果还有视频处理的实例没有销毁或者没有调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_videoprocessing_initializeenvironment",
              children: "OH_VideoProcessing_InitializeEnvironment"
            }), "，返回VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessing_iscolorspaceconversionsupported",
      children: "OH_VideoProcessing_IsColorSpaceConversionSupported()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_VideoProcessing_IsColorSpaceConversionSupported(const VideoProcessing_ColorSpaceInfo* sourceVideoInfo,const VideoProcessing_ColorSpaceInfo* destinationVideoInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询是否支持视频颜色空间转换。"
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/api-videoprocessing-videoprocessing-colorspaceinfo/api-videoprocessing-videoprocessing-colorspaceinfo",
              children: "VideoProcessing_ColorSpaceInfo"
            }), "* sourceVideoInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入视频颜色空间信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/api-videoprocessing-videoprocessing-colorspaceinfo/api-videoprocessing-videoprocessing-colorspaceinfo",
              children: "VideoProcessing_ColorSpaceInfo"
            }), "* destinationVideoInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出视频颜色空间信息。"
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
            children: "如果支持视频颜色空间转换返回true，否则返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessing_ismetadatagenerationsupported",
      children: "OH_VideoProcessing_IsMetadataGenerationSupported()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "bool OH_VideoProcessing_IsMetadataGenerationSupported(const VideoProcessing_ColorSpaceInfo* sourceVideoInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询是否支持视频元数据生成。"
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
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/api-videoprocessing-videoprocessing-colorspaceinfo/api-videoprocessing-videoprocessing-colorspaceinfo",
              children: "VideoProcessing_ColorSpaceInfo"
            }), "* sourceVideoInfo"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入视频颜色空间信息。"
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
            children: "如果支持视频元数据生成返回true，否则返回false。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessing_create",
      children: "OH_VideoProcessing_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessing_Create(OH_VideoProcessing** videoProcessor, int type)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建视频处理实例。"
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing",
              children: "OH_VideoProcessing"
            }), "** videoProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数。指向视频处理对象的指针的指针。输入前*videoProcessor必须是空指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用VIDEO_PROCESSING_TYPE_XXX来指定处理类型。实例的处理类型不能改变。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果视频处理实例创建成功，返回VIDEO_PROCESSING_SUCCESS。  如果处理类型不支持，返回VIDEO_PROCESSING_ERROR_UNSUPPORTED_PROCESSING，例如，不支持元数据生成。  如果创建视频处理实例失败，返回VIDEO_PROCESSING_ERROR_CREATE_FAILED。  如果实例为空或实例的指针非空，返回VIDEO_PROCESSING_ERROR_INVALID_INSTANCE。  如果处理类型无效，返回VIDEO_PROCESSING_ERROR_INVALID_PARAMETER。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessing_destroy",
      children: "OH_VideoProcessing_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessing_Destroy(OH_VideoProcessing* videoProcessor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁视频处理实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁之前先停止实例，参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_videoprocessing_stop",
        children: "OH_VideoProcessing_Stop"
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing",
              children: "OH_VideoProcessing"
            }), "* videoProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频处理实例的指针，建议在实例销毁之后将其设置为空指针。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果实例销毁成功，返回VIDEO_PROCESSING_SUCCESS。  如果实例为空或者不是一个视频处理实例，返回VIDEO_PROCESSING_ERROR_INVALID_INSTANCE。  如果实例仍在运行，返回VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessing_registercallback",
      children: "OH_VideoProcessing_RegisterCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessing_RegisterCallback(OH_VideoProcessing* videoProcessor,const VideoProcessing_Callback* callback, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开始视频处理之前注册回调函数，视频处理过程中无法注册回调函数。"
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
            children: "指向视频处理实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-videoprocessing-callback/capi-videoprocessing-videoprocessing-callback",
              children: "VideoProcessing_Callback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向用户特定数据的指针。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果回调函数注册成功，返回VIDEO_PROCESSING_SUCCESS。  如果实例为空或者不是一个视频处理实例，返回VIDEO_PROCESSING_ERROR_INVALID_INSTANCE。  如果回调函数指针为空，返回VIDEO_PROCESSING_ERROR_INVALID_PARAMETER。  如果实例仍在运行，返回VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessing_setsurface",
      children: "OH_VideoProcessing_SetSurface()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessing_SetSurface(OH_VideoProcessing* videoProcessor,const OHNativeWindow* window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置视频处理输出surface。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在视频处理启动之前设置输出surface。"
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing",
              children: "OH_VideoProcessing"
            }), "* videoProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频处理实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-nativewindow/capi-videoprocessing-nativewindow",
              children: "OHNativeWindow"
            }), "* window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输出surface的指针。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果输出surface设置成功，返回VIDEO_PROCESSING_SUCCESS。  如果实例为空或者不是一个视频处理实例，返回VIDEO_PROCESSING_ERROR_INVALID_INSTANCE。  如果window为空指针，返回VIDEO_PROCESSING_ERROR_INVALID_PARAMETER。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessing_getsurface",
      children: "OH_VideoProcessing_GetSurface()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessing_GetSurface(OH_VideoProcessing* videoProcessor, OHNativeWindow** window)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建surface。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在视频处理启动之前创建输入surface。调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_destroynativewindow",
        children: "OH_NativeWindow_DestroyNativeWindow"
      }), "销毁输入surface。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing",
              children: "OH_VideoProcessing"
            }), "* videoProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频处理实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-nativewindow/capi-videoprocessing-nativewindow",
              children: "OHNativeWindow"
            }), "** window"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向输入surface的指针。例如，此输入surface指针可以指向视频解码器输出surface。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果执行成功，返回VIDEO_PROCESSING_SUCCESS。  如果实例为空或者不是一个视频处理实例，返回VIDEO_PROCESSING_ERROR_INVALID_INSTANCE。  如果window为空指针或指向window的指针不为空，返回VIDEO_PROCESSING_ERROR_INVALID_PARAMETER。  如果创建surface失败，或者输入surface已经创建，或者视频处理实例还在运行，返回VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessing_setparameter",
      children: "OH_VideoProcessing_SetParameter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessing_SetParameter(OH_VideoProcessing* videoProcessor,const OH_AVFormat* parameter)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置视频处理输出参数。"
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing",
              children: "OH_VideoProcessing"
            }), "* videoProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频处理实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-avformat/capi-videoprocessing-oh-avformat",
              children: "OH_AVFormat"
            }), "* parameter"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频处理参数实例的指针。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果参数设置成功，返回VIDEO_PROCESSING_SUCCESS。  如果实例为空或者不是一个视频处理实例，返回VIDEO_PROCESSING_ERROR_INVALID_INSTANCE。  如果参数为空，返回VIDEO_PROCESSING_ERROR_INVALID_PARAMETER。  如果参数的某些属性无效，返回VIDEO_PROCESSING_ERROR_INVALID_VALUE，例如，包含不支持的参数值。  如果内存分配失败，返回VIDEO_PROCESSING_ERROR_NO_MEMORY。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessing_getparameter",
      children: "OH_VideoProcessing_GetParameter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessing_GetParameter(OH_VideoProcessing* videoProcessor, OH_AVFormat* parameter)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取视频处理参数。"
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing",
              children: "OH_VideoProcessing"
            }), "* videoProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频处理实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-avformat/capi-videoprocessing-oh-avformat",
              children: "OH_AVFormat"
            }), "* parameter"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频处理参数实例的指针。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果参数获取成功，返回VIDEO_PROCESSING_SUCCESS。  如果实例为空或者不是一个视频处理实例，返回VIDEO_PROCESSING_ERROR_INVALID_INSTANCE。  如果参数为空，返回VIDEO_PROCESSING_ERROR_INVALID_PARAMETER。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessing_start",
      children: "OH_VideoProcessing_Start()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessing_Start(OH_VideoProcessing* videoProcessor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动视频处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["成功启动后，回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onstate",
        children: "OH_VideoProcessingCallback_OnState"
      }), "会报告", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_state",
        children: "VideoProcessing_State"
      }), ".VIDEO_PROCESSING_STATE_RUNNING状态。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing",
              children: "OH_VideoProcessing"
            }), "* videoProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频处理实例的指针。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果执行成功，返回VIDEO_PROCESSING_SUCCESS。  如果实例为空或者不是一个视频处理实例，返回VIDEO_PROCESSING_ERROR_INVALID_INSTANCE。  如果没有设置输出surface，或者没有创建输入surface，或者实例已经运行，返回VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessing_stop",
      children: "OH_VideoProcessing_Stop()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessing_Stop(OH_VideoProcessing* videoProcessor)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止视频处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["成功停止后，回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onstate",
        children: "OH_VideoProcessingCallback_OnState"
      }), "会报告", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_state",
        children: "VideoProcessing_State"
      }), ".VIDEO_PROCESSING_STATE_STOPPED状态。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing",
              children: "OH_VideoProcessing"
            }), "* videoProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频处理实例的指针。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果执行成功，返回VIDEO_PROCESSING_SUCCESS。  如果实例为空或者不是一个视频处理实例，返回VIDEO_PROCESSING_ERROR_INVALID_INSTANCE。  如果实例已经停止，返回VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessing_renderoutputbuffer",
      children: "OH_VideoProcessing_RenderOutputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessing_RenderOutputBuffer(OH_VideoProcessing* videoProcessor, uint32_t index)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "渲染处理并输出buffer。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果设置了回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onnewoutputbuffer",
        children: "OH_VideoProcessingCallback_OnNewOutputBuffer"
      }), "，当输出buffer准备好之后会通过回调函数把buffer的索引返回给用户。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-oh-videoprocessing/capi-videoprocessing-oh-videoprocessing",
              children: "OH_VideoProcessing"
            }), "* videoProcessor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向视频处理实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出buffer的索引。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果执行成功，返回VIDEO_PROCESSING_SUCCESS。  如果实例为空或者不是一个视频处理实例，返回VIDEO_PROCESSING_ERROR_INVALID_INSTANCE。  如果索引值无效，输出VIDEO_PROCESSING_ERROR_INVALID_PARAMETER。  如果没有设置回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onnewoutputbuffer",
              children: "OH_VideoProcessingCallback_OnNewOutputBuffer"
            }), "或者实例已经停止运行，返回VIDEO_PROCESSING_ERROR_OPERATION_NOT_PERMITTED。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessingcallback_create",
      children: "OH_VideoProcessingCallback_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessingCallback_Create(VideoProcessing_Callback** callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建视频处理回调函数对象。"
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-videoprocessing-callback/capi-videoprocessing-videoprocessing-callback",
              children: "VideoProcessing_Callback"
            }), "** callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数。*callback是指向回调函数对象的指针。在创建回调函数对象之前*callback必须为空指针。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果回调函数对象创建成功，返回VIDEO_PROCESSING_SUCCESS。  如果callback为空或者callback不为空，返回VIDEO_PROCESSING_ERROR_INVALID_PARAMETER。  如果内存不足，返回VIDEO_PROCESSING_ERROR_NO_MEMORY。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessingcallback_destroy",
      children: "OH_VideoProcessingCallback_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessingCallback_Destroy(VideoProcessing_Callback* callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁回调对象。回调对象在注册之后就可以销毁。"
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-videoprocessing-callback/capi-videoprocessing-videoprocessing-callback",
              children: "VideoProcessing_Callback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向回调对象的指针，建议在回调对象销毁之后将其设置为空指针。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果回调对象销毁成功，返回VIDEO_PROCESSING_SUCCESS。  如果callback为空，返回VIDEO_PROCESSING_ERROR_INVALID_PARAMETER。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessingcallback_bindonerror",
      children: "OH_VideoProcessingCallback_BindOnError()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessingCallback_BindOnError(VideoProcessing_Callback* callback,OH_VideoProcessingCallback_OnError onError)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["绑定回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onerror",
        children: "OH_VideoProcessingCallback_OnError"
      }), "到回调对象。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-videoprocessing-callback/capi-videoprocessing-videoprocessing-callback",
              children: "VideoProcessing_Callback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向回调对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onerror",
              children: "OH_VideoProcessingCallback_OnError"
            }), " onError"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果函数绑定成功，返回VIDEO_PROCESSING_SUCCESS。  如果callback为空或者onError为空，返回VIDEO_PROCESSING_ERROR_INVALID_PARAMETER。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessingcallback_bindonstate",
      children: "OH_VideoProcessingCallback_BindOnState()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessingCallback_BindOnState(VideoProcessing_Callback* callback,OH_VideoProcessingCallback_OnState onState)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["绑定回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onstate",
        children: "OH_VideoProcessingCallback_OnState"
      }), "到回调对象。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-videoprocessing-callback/capi-videoprocessing-videoprocessing-callback",
              children: "VideoProcessing_Callback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向回调对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onstate",
              children: "OH_VideoProcessingCallback_OnState"
            }), " onState"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果函数绑定成功，返回VIDEO_PROCESSING_SUCCESS。  如果callback为空或者onState为空，返回VIDEO_PROCESSING_ERROR_INVALID_PARAMETER。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_videoprocessingcallback_bindonnewoutputbuffer",
      children: "OH_VideoProcessingCallback_BindOnNewOutputBuffer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VideoProcessing_ErrorCode OH_VideoProcessingCallback_BindOnNewOutputBuffer(VideoProcessing_Callback* callback,OH_VideoProcessingCallback_OnNewOutputBuffer onNewOutputBuffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["绑定回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onnewoutputbuffer",
        children: "OH_VideoProcessingCallback_OnNewOutputBuffer"
      }), "到回调对象。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-videoprocessing-videoprocessing-callback/capi-videoprocessing-videoprocessing-callback",
              children: "VideoProcessing_Callback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向回调对象的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#oh_videoprocessingcallback_onnewoutputbuffer",
              children: "OH_VideoProcessingCallback_OnNewOutputBuffer"
            }), " onNewOutputBuffer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。"
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
              href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-types-h/capi-video-processing-types-h#videoprocessing_errorcode",
              children: "VideoProcessing_ErrorCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果函数绑定成功，返回VIDEO_PROCESSING_SUCCESS。  如果callback为空，返回VIDEO_PROCESSING_ERROR_INVALID_PARAMETER。"
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