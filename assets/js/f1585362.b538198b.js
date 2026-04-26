"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["348788"], {
775663(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_headerfile_capi_lowpower_video_sink_h_capi_lowpower_video_sink_h_md_f15_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-headerfile-capi-lowpower-video-sink-h-capi-lowpower-video-sink-h-md-f15.json
var site_docs_ref_media_api_media_c_media_headerfile_capi_lowpower_video_sink_h_capi_lowpower_video_sink_h_md_f15_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h","title":"lowpower_video_sink.h","description":"概述","source":"@site/docs-ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h.md","sourceDirName":"media-api/media-c/media-headerfile/capi-lowpower-video-sink-h","slug":"/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"lowpower_video_sink.h","sidebar_position":17,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-lowpower-video-sink-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-lowpower-video-sink-h"},"sidebar":"ref","previous":{"title":"lowpower_avsink_base.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-lowpower-avsink-base-h/capi-lowpower-avsink-base-h"},"next":{"title":"lowpower_video_sink_base.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h.md


const frontMatter = {
	title: 'lowpower_video_sink.h',
	sidebar_position: 17,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-lowpower-video-sink-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-lowpower-video-sink-h'
};
const contentTitle = 'lowpower_video_sink.h';

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
  "value": "OH_LowPowerVideoSink_CreateByMime()",
  "id": "oh_lowpowervideosink_createbymime",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_Configure()",
  "id": "oh_lowpowervideosink_configure",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_SetParameter()",
  "id": "oh_lowpowervideosink_setparameter",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_GetParameter()",
  "id": "oh_lowpowervideosink_getparameter",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_SetVideoSurface()",
  "id": "oh_lowpowervideosink_setvideosurface",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_Prepare()",
  "id": "oh_lowpowervideosink_prepare",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_StartDecoder()",
  "id": "oh_lowpowervideosink_startdecoder",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_RenderFirstFrame()",
  "id": "oh_lowpowervideosink_renderfirstframe",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_StartRenderer()",
  "id": "oh_lowpowervideosink_startrenderer",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_Pause()",
  "id": "oh_lowpowervideosink_pause",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_Resume()",
  "id": "oh_lowpowervideosink_resume",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_Flush()",
  "id": "oh_lowpowervideosink_flush",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_Stop()",
  "id": "oh_lowpowervideosink_stop",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_Reset()",
  "id": "oh_lowpowervideosink_reset",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_Destroy()",
  "id": "oh_lowpowervideosink_destroy",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_SetSyncAudioSink()",
  "id": "oh_lowpowervideosink_setsyncaudiosink",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_SetTargetStartFrame()",
  "id": "oh_lowpowervideosink_settargetstartframe",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_SetPlaybackSpeed()",
  "id": "oh_lowpowervideosink_setplaybackspeed",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_ReturnSamples()",
  "id": "oh_lowpowervideosink_returnsamples",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_GetLatestPts()",
  "id": "oh_lowpowervideosink_getlatestpts",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSink_RegisterCallback()",
  "id": "oh_lowpowervideosink_registercallback",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSinkCallback_Create()",
  "id": "oh_lowpowervideosinkcallback_create",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSinkCallback_Destroy()",
  "id": "oh_lowpowervideosinkcallback_destroy",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSinkCallback_SetDataNeededListener()",
  "id": "oh_lowpowervideosinkcallback_setdataneededlistener",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSinkCallback_SetErrorListener()",
  "id": "oh_lowpowervideosinkcallback_seterrorlistener",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSinkCallback_SetRenderStartListener()",
  "id": "oh_lowpowervideosinkcallback_setrenderstartlistener",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSinkCallback_SetStreamChangedListener()",
  "id": "oh_lowpowervideosinkcallback_setstreamchangedlistener",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSinkCallback_SetFirstFrameDecodedListener()",
  "id": "oh_lowpowervideosinkcallback_setfirstframedecodedlistener",
  "level": 3
}, {
  "value": "OH_LowPowerVideoSinkCallback_SetEosListener()",
  "id": "oh_lowpowervideosinkcallback_seteoslistener",
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
        id: "lowpower_video_sinkh",
        children: "lowpower_video_sink.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义LowPowerVideoSink接口。使用LowPowerVideoSink提供的Native API进行视频通路的低功耗播放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/player_framework/lowpower_video_sink.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " liblowpower_avsink.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.LowPowerAVSink"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-lowpowervideosink/capi-lowpowervideosink",
        children: "LowPowerVideoSink"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_lowpowervideosink_createbymime",
              children: "OH_LowPowerVideoSink* OH_LowPowerVideoSink_CreateByMime(const char* mime)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建低功耗LowPowerVideoSink。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_configure",
              children: "OH_AVErrCode OH_LowPowerVideoSink_Configure(OH_LowPowerVideoSink* sink, const OH_AVFormat* format)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置LowPowerVideoSink，需要在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_prepare",
              children: "OH_LowPowerVideoSink_Prepare"
            }), "前完成。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_setparameter",
              children: "OH_AVErrCode OH_LowPowerVideoSink_SetParameter(OH_LowPowerVideoSink* sink, const OH_AVFormat* format)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为LowPowerVideoSink设置参数，支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_prepare",
              children: "OH_LowPowerVideoSink_Prepare"
            }), "后动态设置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_getparameter",
              children: "OH_AVErrCode OH_LowPowerVideoSink_GetParameter(OH_LowPowerVideoSink* sink, OH_AVFormat* format)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取LowPowerVideoSink的相关参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_setvideosurface",
              children: "OH_AVErrCode OH_LowPowerVideoSink_SetVideoSurface(OH_LowPowerVideoSink* sink, const OHNativeWindow* surface)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为LowPowerVideoSink设置渲染画面窗口。 需要在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_prepare",
              children: "OH_LowPowerVideoSink_Prepare"
            }), "前完成。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_prepare",
              children: "OH_AVErrCode OH_LowPowerVideoSink_Prepare(OH_LowPowerVideoSink* sink)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开始LowPowerVideoSink准备，需要在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_setsyncaudiosink",
              children: "OH_LowPowerVideoSink_SetSyncAudioSink"
            }), "之后调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_startdecoder",
              children: "OH_AVErrCode OH_LowPowerVideoSink_StartDecoder(OH_LowPowerVideoSink* sink)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开始LowPowerVideoSink解码，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_prepare",
              children: "OH_LowPowerVideoSink_Prepare"
            }), "后或非播放中", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_settargetstartframe",
              children: "OH_LowPowerVideoSink_SetTargetStartFrame"
            }), "后调用。  启动成功后，LowPowerVideoSink将开始上报", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h#oh_lowpowervideosink_ondataneeded",
              children: "OH_LowPowerVideoSink_OnDataNeeded"
            }), "事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_renderfirstframe",
              children: "OH_AVErrCode OH_LowPowerVideoSink_RenderFirstFrame(OH_LowPowerVideoSink* sink)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["渲染LowPowerVideoSink解码出的第一帧，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_startdecoder",
              children: "OH_LowPowerVideoSink_StartDecoder"
            }), "之后调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_startrenderer",
              children: "OH_AVErrCode OH_LowPowerVideoSink_StartRenderer(OH_LowPowerVideoSink* sink)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开始LowPowerVideoSink渲染，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_startdecoder",
              children: "OH_LowPowerVideoSink_StartDecoder"
            }), "之后调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_pause",
              children: "OH_AVErrCode OH_LowPowerVideoSink_Pause(OH_LowPowerVideoSink* sink)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["暂停LowPowerVideoSink，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_startrenderer",
              children: "OH_LowPowerVideoSink_StartRenderer"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_resume",
              children: "OH_LowPowerVideoSink_Resume"
            }), "后调用。  暂停成功后，LowPowerVideoSink将暂停", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h#oh_lowpowervideosink_ondataneeded",
              children: "OH_LowPowerVideoSink_OnDataNeeded"
            }), "事件的上报。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_resume",
              children: "OH_AVErrCode OH_LowPowerVideoSink_Resume(OH_LowPowerVideoSink* sink)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["恢复LowPowerVideoSink，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_pause",
              children: "OH_LowPowerVideoSink_Pause"
            }), "后调用。  恢复成功后，LowPowerVideoSink将恢复", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h#oh_lowpowervideosink_ondataneeded",
              children: "OH_LowPowerVideoSink_OnDataNeeded"
            }), "事件的上报。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_flush",
              children: "OH_AVErrCode OH_LowPowerVideoSink_Flush(OH_LowPowerVideoSink* sink)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["清除LowPowerVideoSink中所有解码器和渲染缓存的输入输出数据。  此接口不建议在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_startrenderer",
              children: "OH_LowPowerVideoSink_StartRenderer"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_resume",
              children: "OH_LowPowerVideoSink_Resume"
            }), "之后调用。  需要注意的是，如果编解码器之前已输入数据，则需要重新输入编解码器数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_stop",
              children: "OH_AVErrCode OH_LowPowerVideoSink_Stop(OH_LowPowerVideoSink* sink)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止LowPowerVideoSink。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_reset",
              children: "OH_AVErrCode OH_LowPowerVideoSink_Reset(OH_LowPowerVideoSink* sink)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重置LowPowerVideoSink。  如果要重新使用该实例，需要调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_configure",
              children: "OH_LowPowerVideoSink_Configure"
            }), "完成配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_destroy",
              children: "OH_AVErrCode OH_LowPowerVideoSink_Destroy(OH_LowPowerVideoSink* sink)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清理解码器内部资源，销毁LowPowerVideoSink实例。不能重复销毁。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_setsyncaudiosink",
              children: "OH_AVErrCode OH_LowPowerVideoSink_SetSyncAudioSink(OH_LowPowerVideoSink* videoSink, OH_LowPowerAudioSink* audioSink)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LowPowerVideoSink设置用于音画同步的OH_LowPowerAudioSink。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_settargetstartframe",
              children: "OH_AVErrCode OH_LowPowerVideoSink_SetTargetStartFrame(OH_LowPowerVideoSink* sink, const int64_t framePts, OH_LowPowerVideoSink_OnTargetArrived onTargetArrived, const int64_t timeoutMs, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为LowPowerVideoSink设置目标渲染帧。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_setplaybackspeed",
              children: "OH_AVErrCode OH_LowPowerVideoSink_SetPlaybackSpeed(OH_LowPowerVideoSink* sink, const float speed)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为LowPowerVideoSink设置播放倍速。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_returnsamples",
              children: "OH_AVErrCode OH_LowPowerVideoSink_ReturnSamples(OH_LowPowerVideoSink* sink, OH_AVSamplesBuffer* samples)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "给LowPowerVideoSink输入buffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_getlatestpts",
              children: "OH_AVErrCode OH_LowPowerVideoSink_GetLatestPts(OH_LowPowerVideoSink *sink, int64_t *pts)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前播放的视频显示时间戳（pts）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosink_registercallback",
              children: "OH_AVErrCode OH_LowPowerVideoSink_RegisterCallback(OH_LowPowerVideoSink* sink, OH_LowPowerVideoSinkCallback* callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为LowPowerVideoSink注册回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosinkcallback_create",
              children: "OH_LowPowerVideoSinkCallback* OH_LowPowerVideoSinkCallback_Create(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建OH_LowPowerVideoSinkCallback。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosinkcallback_destroy",
              children: "OH_AVErrCode OH_LowPowerVideoSinkCallback_Destroy(OH_LowPowerVideoSinkCallback* callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁OH_LowPowerVideoSinkCallback对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosinkcallback_setdataneededlistener",
              children: "OH_AVErrCode OH_LowPowerVideoSinkCallback_SetDataNeededListener(OH_LowPowerVideoSinkCallback* callback, OH_LowPowerVideoSink_OnDataNeeded onDataNeeded, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为LowPowerVideoSinkCallback设置需要数据监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosinkcallback_seterrorlistener",
              children: "OH_AVErrCode OH_LowPowerVideoSinkCallback_SetErrorListener(OH_LowPowerVideoSinkCallback* callback, OH_LowPowerVideoSink_OnError onError, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为LowPowerVideoSinkCallback回调设置错误监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosinkcallback_setrenderstartlistener",
              children: "OH_AVErrCode OH_LowPowerVideoSinkCallback_SetRenderStartListener(OH_LowPowerVideoSinkCallback* callback, OH_LowPowerVideoSink_OnRenderStarted onRenderStarted, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为LowPowerVideoSinkCallback回调设置开始渲染监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosinkcallback_setstreamchangedlistener",
              children: "OH_AVErrCode OH_LowPowerVideoSinkCallback_SetStreamChangedListener(OH_LowPowerVideoSinkCallback* callback, OH_LowPowerVideoSink_OnStreamChanged onStreamChanged, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为LowPowerVideoSinkCallback回调设置流切换监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosinkcallback_setfirstframedecodedlistener",
              children: "OH_AVErrCode OH_LowPowerVideoSinkCallback_SetFirstFrameDecodedListener(OH_LowPowerVideoSinkCallback* callback, OH_LowPowerVideoSink_OnFirstFrameDecoded onFirstFrameDecoded, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为LowPowerVideoSinkCallback回调设置首帧准备完成监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_lowpowervideosinkcallback_seteoslistener",
              children: "OH_AVErrCode OH_LowPowerVideoSinkCallback_SetEosListener(OH_LowPowerVideoSinkCallback* callback, OH_LowPowerVideoSink_OnEos onEos, void* userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为LowPowerVideoSinkCallback回调设置播放结束监听。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_createbymime",
      children: "OH_LowPowerVideoSink_CreateByMime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_LowPowerVideoSink* OH_LowPowerVideoSink_CreateByMime(const char* mime)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建低功耗LowPowerVideoSink。"
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
            children: "const char* mime"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频解码器的MIME类型，取值范围请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "AVCODEC_MIME_TYPE"
            }), "。"]
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果创建成功返回指向OH_LowPowerVideoSink实例的指针，否则返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_configure",
      children: "OH_LowPowerVideoSink_Configure()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_Configure(OH_LowPowerVideoSink* sink, const OH_AVFormat* format)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["配置LowPowerVideoSink，需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_lowpowervideosink_prepare",
        children: "OH_LowPowerVideoSink_Prepare"
      }), "前完成。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), "* format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVFormat的指针，用于配置LowPowerVideoSink的参数。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_UNSUPPORT：不支持的格式。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_setparameter",
      children: "OH_LowPowerVideoSink_SetParameter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_SetParameter(OH_LowPowerVideoSink* sink, const OH_AVFormat* format)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为LowPowerVideoSink设置参数，支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_lowpowervideosink_prepare",
        children: "OH_LowPowerVideoSink_Prepare"
      }), "后动态设置。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), "* format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVFormat的指针，用于配置LowPowerVideoSink的参数。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_UNSUPPORT：不支持的格式。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_getparameter",
      children: "OH_LowPowerVideoSink_GetParameter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_GetParameter(OH_LowPowerVideoSink* sink, OH_AVFormat* format)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取LowPowerVideoSink的相关参数。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
              children: "OH_AVFormat"
            }), "* format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVFormat的指针，为LowPowerVideoSink设置的参数。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_setvideosurface",
      children: "OH_LowPowerVideoSink_SetVideoSurface()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_SetVideoSurface(OH_LowPowerVideoSink* sink, const OHNativeWindow* surface)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为LowPowerVideoSink设置渲染画面窗口。 需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_lowpowervideosink_prepare",
        children: "OH_LowPowerVideoSink_Prepare"
      }), "前完成。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-codecbase-nativewindow/capi-codecbase-nativewindow",
              children: "OHNativeWindow"
            }), "* surface"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OHNativeWindow实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_prepare",
      children: "OH_LowPowerVideoSink_Prepare()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_Prepare(OH_LowPowerVideoSink* sink)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开始LowPowerVideoSink准备，需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_lowpowervideosink_setsyncaudiosink",
        children: "OH_LowPowerVideoSink_SetSyncAudioSink"
      }), "之后调用。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_UNSUPPORT：不支持的格式。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_startdecoder",
      children: "OH_LowPowerVideoSink_StartDecoder()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_StartDecoder(OH_LowPowerVideoSink* sink)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开始LowPowerVideoSink解码，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_lowpowervideosink_prepare",
        children: "OH_LowPowerVideoSink_Prepare"
      }), "后或非播放中", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_lowpowervideosink_settargetstartframe",
        children: "OH_LowPowerVideoSink_SetTargetStartFrame"
      }), "后调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启动成功后，LowPowerVideoSink将开始上报", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h#oh_lowpowervideosink_ondataneeded",
        children: "OH_LowPowerVideoSink_OnDataNeeded"
      }), "事件。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_UNSUPPORT：不支持的格式。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_renderfirstframe",
      children: "OH_LowPowerVideoSink_RenderFirstFrame()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_RenderFirstFrame(OH_LowPowerVideoSink* sink)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["渲染LowPowerVideoSink解码出的第一帧，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_lowpowervideosink_startdecoder",
        children: "OH_LowPowerVideoSink_StartDecoder"
      }), "之后调用。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_startrenderer",
      children: "OH_LowPowerVideoSink_StartRenderer()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_StartRenderer(OH_LowPowerVideoSink* sink)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开始LowPowerVideoSink渲染，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_lowpowervideosink_startdecoder",
        children: "OH_LowPowerVideoSink_StartDecoder"
      }), "之后调用。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_UNSUPPORT：不支持的格式。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_pause",
      children: "OH_LowPowerVideoSink_Pause()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_Pause(OH_LowPowerVideoSink* sink)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["暂停LowPowerVideoSink，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_lowpowervideosink_startrenderer",
        children: "OH_LowPowerVideoSink_StartRenderer"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_lowpowervideosink_resume",
        children: "OH_LowPowerVideoSink_Resume"
      }), "后调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["暂停成功后，LowPowerVideoSink将暂停", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h#oh_lowpowervideosink_ondataneeded",
        children: "OH_LowPowerVideoSink_OnDataNeeded"
      }), "事件的上报。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_resume",
      children: "OH_LowPowerVideoSink_Resume()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_Resume(OH_LowPowerVideoSink* sink)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["恢复LowPowerVideoSink，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_lowpowervideosink_pause",
        children: "OH_LowPowerVideoSink_Pause"
      }), "后调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["恢复成功后，LowPowerVideoSink将恢复", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h#oh_lowpowervideosink_ondataneeded",
        children: "OH_LowPowerVideoSink_OnDataNeeded"
      }), "事件的上报。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_flush",
      children: "OH_LowPowerVideoSink_Flush()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_Flush(OH_LowPowerVideoSink* sink)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清除LowPowerVideoSink中所有解码器和渲染缓存的输入输出数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此接口不建议在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_lowpowervideosink_startrenderer",
        children: "OH_LowPowerVideoSink_StartRenderer"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_lowpowervideosink_resume",
        children: "OH_LowPowerVideoSink_Resume"
      }), "之后调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，如果编解码器之前已输入数据，则需要重新输入编解码器数据。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_stop",
      children: "OH_LowPowerVideoSink_Stop()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_Stop(OH_LowPowerVideoSink* sink)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止LowPowerVideoSink。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_reset",
      children: "OH_LowPowerVideoSink_Reset()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_Reset(OH_LowPowerVideoSink* sink)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重置LowPowerVideoSink。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果要重新使用该实例，需要调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_lowpowervideosink_configure",
        children: "OH_LowPowerVideoSink_Configure"
      }), "完成配置。"]
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_destroy",
      children: "OH_LowPowerVideoSink_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_Destroy(OH_LowPowerVideoSink* sink)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "清理解码器内部资源，销毁LowPowerVideoSink实例。不能重复销毁。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_setsyncaudiosink",
      children: "OH_LowPowerVideoSink_SetSyncAudioSink()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_SetSyncAudioSink(OH_LowPowerVideoSink* videoSink, OH_LowPowerAudioSink* audioSink)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LowPowerVideoSink设置用于音画同步的OH_LowPowerAudioSink。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* videoSink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-lowpoweraudiosink-oh-lowpoweraudiosink/capi-lowpoweraudiosink-oh-lowpoweraudiosink",
              children: "OH_LowPowerAudioSink"
            }), "* audioSink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerAudioSink实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_settargetstartframe",
      children: "OH_LowPowerVideoSink_SetTargetStartFrame()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_SetTargetStartFrame(OH_LowPowerVideoSink* sink, const int64_t framePts, OH_LowPowerVideoSink_OnTargetArrived onTargetArrived, const int64_t timeoutMs, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为LowPowerVideoSink设置目标渲染帧。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int64_t framePts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "渲染的目标视频帧的pts。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h#oh_lowpowervideosink_ontargetarrived",
              children: "OH_LowPowerVideoSink_OnTargetArrived"
            }), " onTargetArrived"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink_OnTargetArrived方法，当目标帧渲染时触发该方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int64_t timeoutMs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果等待第一帧的时间超过timeoutMs，则直接调用onTargetArrived。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户数据。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_setplaybackspeed",
      children: "OH_LowPowerVideoSink_SetPlaybackSpeed()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_SetPlaybackSpeed(OH_LowPowerVideoSink* sink, const float speed)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为LowPowerVideoSink设置播放倍速。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const float speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "播放速率的值。当前版本有效范围为[0.1，4.0]。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_returnsamples",
      children: "OH_LowPowerVideoSink_ReturnSamples()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_ReturnSamples(OH_LowPowerVideoSink* sink, OH_AVSamplesBuffer* samples)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "给LowPowerVideoSink输入buffer。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avsinkbase-oh-avsamplesbuffer/capi-avsinkbase-oh-avsamplesbuffer",
              children: "OH_AVSamplesBuffer"
            }), "* samples"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要送LowPowerVideoSink消费的OH_AVSamplesBuffer，支持聚包输入。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_getlatestpts",
      children: "OH_LowPowerVideoSink_GetLatestPts()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_GetLatestPts(OH_LowPowerVideoSink *sink, int64_t *pts)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前播放的视频显示时间戳（pts）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), " *sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *pts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前播放的pts。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosink_registercallback",
      children: "OH_LowPowerVideoSink_RegisterCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSink_RegisterCallback(OH_LowPowerVideoSink* sink, OH_LowPowerVideoSinkCallback* callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为LowPowerVideoSink注册回调。"
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
              href: "/ref/media-api/media-c/media-struct/capi-lowpowervideosink-oh-lowpowervideosink/capi-lowpowervideosink-oh-lowpowervideosink",
              children: "OH_LowPowerVideoSink"
            }), "* sink"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSink实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSinkCallback实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_SERVICE_DIED：媒体服务端已销毁。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosinkcallback_create",
      children: "OH_LowPowerVideoSinkCallback_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_LowPowerVideoSinkCallback* OH_LowPowerVideoSinkCallback_Create(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建OH_LowPowerVideoSinkCallback。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 20"]
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
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回指向OH_LowPowerVideoSinkCallback实例的指针。如果内存不足，则返回nullptr。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosinkcallback_destroy",
      children: "OH_LowPowerVideoSinkCallback_Destroy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSinkCallback_Destroy(OH_LowPowerVideoSinkCallback* callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁OH_LowPowerVideoSinkCallback对象。"
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
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSinkCallback实例的指针。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosinkcallback_setdataneededlistener",
      children: "OH_LowPowerVideoSinkCallback_SetDataNeededListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSinkCallback_SetDataNeededListener(OH_LowPowerVideoSinkCallback* callback, OH_LowPowerVideoSink_OnDataNeeded onDataNeeded, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为LowPowerVideoSinkCallback设置需要数据监听。"
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
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSinkCallback实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h#oh_lowpowervideosink_ondataneeded",
              children: "OH_LowPowerVideoSink_OnDataNeeded"
            }), " onDataNeeded"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink_OnDataNeeded方法，在DataNeeded事件触发时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户执行回调所依赖的数据。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosinkcallback_seterrorlistener",
      children: "OH_LowPowerVideoSinkCallback_SetErrorListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSinkCallback_SetErrorListener(OH_LowPowerVideoSinkCallback* callback, OH_LowPowerVideoSink_OnError onError, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为LowPowerVideoSinkCallback回调设置错误监听。"
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
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSinkCallback实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h#oh_lowpowervideosink_onerror",
              children: "OH_LowPowerVideoSink_OnError"
            }), " onError"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink_OnError方法，在Error事件触发时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户执行回调所依赖的数据。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosinkcallback_setrenderstartlistener",
      children: "OH_LowPowerVideoSinkCallback_SetRenderStartListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSinkCallback_SetRenderStartListener(OH_LowPowerVideoSinkCallback* callback, OH_LowPowerVideoSink_OnRenderStarted onRenderStarted, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为LowPowerVideoSinkCallback回调设置开始渲染监听。"
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
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSinkCallback实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h#oh_lowpowervideosink_onrenderstarted",
              children: "OH_LowPowerVideoSink_OnRenderStarted"
            }), " onRenderStarted"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink_OnRenderStarted方法，在RenderStarted事件触发时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户执行回调所依赖的数据。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosinkcallback_setstreamchangedlistener",
      children: "OH_LowPowerVideoSinkCallback_SetStreamChangedListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSinkCallback_SetStreamChangedListener(OH_LowPowerVideoSinkCallback* callback, OH_LowPowerVideoSink_OnStreamChanged onStreamChanged, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为LowPowerVideoSinkCallback回调设置流切换监听。"
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
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSinkCallback实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h#oh_lowpowervideosink_onstreamchanged",
              children: "OH_LowPowerVideoSink_OnStreamChanged"
            }), " onStreamChanged"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink_OnStreamChanged方法，在StreamChanged事件触发时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户执行回调所依赖的数据。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosinkcallback_setfirstframedecodedlistener",
      children: "OH_LowPowerVideoSinkCallback_SetFirstFrameDecodedListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSinkCallback_SetFirstFrameDecodedListener(OH_LowPowerVideoSinkCallback* callback, OH_LowPowerVideoSink_OnFirstFrameDecoded onFirstFrameDecoded, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为LowPowerVideoSinkCallback回调设置首帧准备完成监听。"
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
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSinkCallback实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h#oh_lowpowervideosink_onfirstframedecoded",
              children: "OH_LowPowerVideoSink_OnFirstFrameDecoded"
            }), " onFirstFrameDecoded"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink_OnFirstFrameReady方法，在FirstFrameReady事件触发时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户执行回调所依赖的数据。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_lowpowervideosinkcallback_seteoslistener",
      children: "OH_LowPowerVideoSinkCallback_SetEosListener()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_LowPowerVideoSinkCallback_SetEosListener(OH_LowPowerVideoSinkCallback* callback, OH_LowPowerVideoSink_OnEos onEos, void* userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为LowPowerVideoSinkCallback回调设置播放结束监听。"
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
              href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
              children: "OH_LowPowerVideoSinkCallback"
            }), "* callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_LowPowerVideoSinkCallback实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h#oh_lowpowervideosink_oneos",
              children: "OH_LowPowerVideoSink_OnEos"
            }), " onEos"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_LowPowerVideoSink_OnEos方法，在Eos事件触发时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户执行回调所依赖的数据。"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：执行成功。  AV_ERR_INVALID_VAL：参数为nullptr或参数非法。  AV_ERR_OPERATE_NOT_PERMIT：操作不支持。"
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