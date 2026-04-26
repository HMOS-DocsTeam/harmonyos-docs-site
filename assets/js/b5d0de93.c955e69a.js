"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["945538"], {
580800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_headerfile_capi_avtranscoder_h_capi_avtranscoder_h_md_b5d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-headerfile-capi-avtranscoder-h-capi-avtranscoder-h-md-b5d.json
var site_docs_ref_media_api_media_c_media_headerfile_capi_avtranscoder_h_capi_avtranscoder_h_md_b5d_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-headerfile/capi-avtranscoder-h/capi-avtranscoder-h","title":"avtranscoder.h","description":"概述","source":"@site/docs-ref/media-api/media-c/media-headerfile/capi-avtranscoder-h/capi-avtranscoder-h.md","sourceDirName":"media-api/media-c/media-headerfile/capi-avtranscoder-h","slug":"/media-api/media-c/media-headerfile/capi-avtranscoder-h/capi-avtranscoder-h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avtranscoder-h/capi-avtranscoder-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"avtranscoder.h","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avtranscoder-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-avtranscoder-h"},"sidebar":"ref","previous":{"title":"avrecorder_base.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h"},"next":{"title":"avtranscoder_base.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avtranscoder-base-h/capi-avtranscoder-base-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-headerfile/capi-avtranscoder-h/capi-avtranscoder-h.md


const frontMatter = {
	title: 'avtranscoder.h',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avtranscoder-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-avtranscoder-h'
};
const contentTitle = 'avtranscoder.h';

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
  "value": "OH_AVTranscoderConfig_Create()",
  "id": "oh_avtranscoderconfig_create",
  "level": 3
}, {
  "value": "OH_AVTranscoderConfig_Release()",
  "id": "oh_avtranscoderconfig_release",
  "level": 3
}, {
  "value": "OH_AVTranscoderConfig_SetSrcFD()",
  "id": "oh_avtranscoderconfig_setsrcfd",
  "level": 3
}, {
  "value": "OH_AVTranscoderConfig_SetDstFD()",
  "id": "oh_avtranscoderconfig_setdstfd",
  "level": 3
}, {
  "value": "OH_AVTranscoderConfig_SetDstVideoType()",
  "id": "oh_avtranscoderconfig_setdstvideotype",
  "level": 3
}, {
  "value": "OH_AVTranscoderConfig_SetDstAudioType()",
  "id": "oh_avtranscoderconfig_setdstaudiotype",
  "level": 3
}, {
  "value": "OH_AVTranscoderConfig_SetDstFileType()",
  "id": "oh_avtranscoderconfig_setdstfiletype",
  "level": 3
}, {
  "value": "OH_AVTranscoderConfig_SetDstAudioBitrate()",
  "id": "oh_avtranscoderconfig_setdstaudiobitrate",
  "level": 3
}, {
  "value": "OH_AVTranscoderConfig_SetDstVideoBitrate()",
  "id": "oh_avtranscoderconfig_setdstvideobitrate",
  "level": 3
}, {
  "value": "OH_AVTranscoderConfig_SetDstVideoResolution()",
  "id": "oh_avtranscoderconfig_setdstvideoresolution",
  "level": 3
}, {
  "value": "OH_AVTranscoderConfig_EnableBFrame()",
  "id": "oh_avtranscoderconfig_enablebframe",
  "level": 3
}, {
  "value": "OH_AVTranscoder_Create()",
  "id": "oh_avtranscoder_create",
  "level": 3
}, {
  "value": "OH_AVTranscoder_Prepare()",
  "id": "oh_avtranscoder_prepare",
  "level": 3
}, {
  "value": "OH_AVTranscoder_Start()",
  "id": "oh_avtranscoder_start",
  "level": 3
}, {
  "value": "OH_AVTranscoder_Pause()",
  "id": "oh_avtranscoder_pause",
  "level": 3
}, {
  "value": "OH_AVTranscoder_Resume()",
  "id": "oh_avtranscoder_resume",
  "level": 3
}, {
  "value": "OH_AVTranscoder_Cancel()",
  "id": "oh_avtranscoder_cancel",
  "level": 3
}, {
  "value": "OH_AVTranscoder_Release()",
  "id": "oh_avtranscoder_release",
  "level": 3
}, {
  "value": "OH_AVTranscoder_SetStateCallback()",
  "id": "oh_avtranscoder_setstatecallback",
  "level": 3
}, {
  "value": "OH_AVTranscoder_SetErrorCallback()",
  "id": "oh_avtranscoder_seterrorcallback",
  "level": 3
}, {
  "value": "OH_AVTranscoder_SetProgressUpdateCallback()",
  "id": "oh_avtranscoder_setprogressupdatecallback",
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
        id: "avtranscoderh",
        children: "avtranscoder.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义AVTranscoder接口。使用AVTranscoder提供的Native API将源视频文件转码为新视频文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/player_framework/avtranscoder.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libavtranscoder.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
        href: "/ref/media-api/media-c/media-module/capi-avtranscoder/capi-avtranscoder",
        children: "AVTranscoder"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关示例："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/AVPlayer/AVPlayerNDK",
        children: "AVPlayerNDKVideo"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_avtranscoderconfig_create",
              children: "OH_AVTranscoder_Config *OH_AVTranscoderConfig_Create()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建转码配置参数实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_release",
              children: "OH_AVErrCode OH_AVTranscoderConfig_Release(OH_AVTranscoder_Config* config)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放转码配置参数资源。  调用成功后，config实例会被释放并置为nullptr。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_setsrcfd",
              children: "OH_AVErrCode OH_AVTranscoderConfig_SetSrcFD(OH_AVTranscoder_Config *config, int32_t srcFd, int64_t srcOffset, int64_t length)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置转码源视频的文件描述符。  此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_prepare",
              children: "OH_AVTranscoder_Prepare"
            }), "之前调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_setdstfd",
              children: "OH_AVErrCode OH_AVTranscoderConfig_SetDstFD(OH_AVTranscoder_Config *config, int32_t dstFd)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置转码输出视频的文件描述符。  此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_prepare",
              children: "OH_AVTranscoder_Prepare"
            }), "之前调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_setdstvideotype",
              children: "OH_AVErrCode OH_AVTranscoderConfig_SetDstVideoType(OH_AVTranscoder_Config *config, const char *mimeType)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置用于转码的输出视频的编码格式。  当前仅支持AVC和HEVC。若源视频编码格式为HEVC，则默认设置为HEVC，否则默认设置为AVC。  此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_prepare",
              children: "OH_AVTranscoder_Prepare"
            }), "之前调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_setdstaudiotype",
              children: "OH_AVErrCode OH_AVTranscoderConfig_SetDstAudioType(OH_AVTranscoder_Config *config, const char *mimeType)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置用于转码的输出音频的编码格式。  当前仅支持AAC。若开发者不设置，则默认设置为AAC。  此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_prepare",
              children: "OH_AVTranscoder_Prepare"
            }), "之前调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_setdstfiletype",
              children: "OH_AVErrCode OH_AVTranscoderConfig_SetDstFileType(OH_AVTranscoder_Config *config, OH_AVOutputFormat mimeType)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置用于转码的输出视频文件的封装格式。  当前封装格式仅支持MP4。  此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_prepare",
              children: "OH_AVTranscoder_Prepare"
            }), "之前调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_setdstaudiobitrate",
              children: "OH_AVErrCode OH_AVTranscoderConfig_SetDstAudioBitrate(OH_AVTranscoder_Config *config, int32_t bitrate)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置用于转码的输出音频的码率。  此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_prepare",
              children: "OH_AVTranscoder_Prepare"
            }), "之前调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_setdstvideobitrate",
              children: "OH_AVErrCode OH_AVTranscoderConfig_SetDstVideoBitrate(OH_AVTranscoder_Config *config, int32_t bitrate)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置用于转码的输出视频的码率。  此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_prepare",
              children: "OH_AVTranscoder_Prepare"
            }), "之前调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_setdstvideoresolution",
              children: "OH_AVErrCode OH_AVTranscoderConfig_SetDstVideoResolution(OH_AVTranscoder_Config *config, int32_t width, int32_t height)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置用于转码的输出视频的分辨率，单位为像素（px），其中width为输出视频帧的宽，height为输出视频帧的高。  此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_prepare",
              children: "OH_AVTranscoder_Prepare"
            }), "之前调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_enablebframe",
              children: "OH_AVErrCode OH_AVTranscoderConfig_EnableBFrame(OH_AVTranscoder_Config *config, bool enabled)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["转码设置输出视频B帧编码。  B帧视频编码相关的约束和限制可以参考文档", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-encoding-b-frame#%E7%BA%A6%E6%9D%9F%E5%92%8C%E9%99%90%E5%88%B6",
              children: "B帧视频编码约束和限制"
            }), "。  如果当前不符合B帧视频编码的约束和限制，将忽略B帧，按不使能B帧进行编码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_create",
              children: "OH_AVTranscoder *OH_AVTranscoder_Create(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建转码实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_prepare",
              children: "OH_AVErrCode OH_AVTranscoder_Prepare(OH_AVTranscoder *transcoder, OH_AVTranscoder_Config *config)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["进行视频转码的参数设置，准备转码。  此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_start",
              children: "OH_AVTranscoder_Start"
            }), "之前调用，调用成功之后进入AVTRANSCODER_PREPARED状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_start",
              children: "OH_AVErrCode OH_AVTranscoder_Start(OH_AVTranscoder *transcoder)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["开始转码。  此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_prepare",
              children: "OH_AVTranscoder_Prepare"
            }), "成功调用之后调用，调用成功之后进入AVTRANSCODER_STARTED状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_pause",
              children: "OH_AVErrCode OH_AVTranscoder_Pause(OH_AVTranscoder *transcoder)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "暂停转码。  此函数必须在转码实例处于AVTRANSCODER_STARTED状态时调用，调用成功之后进入AVTRANSCODER_PAUSED状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_resume",
              children: "OH_AVErrCode OH_AVTranscoder_Resume(OH_AVTranscoder *transcoder)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "恢复转码。  此函数必须在转码实例处于AVTRANSCODER_PAUSED状态时调用，调用成功之后重新进入AVTRANSCODER_STARTED状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_cancel",
              children: "OH_AVErrCode OH_AVTranscoder_Cancel(OH_AVTranscoder *transcoder)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消转码。  此函数须在转码实例处于AVTRANSCODER_STARTED和AVTRANSCODER_PAUSED状态时调用，调用成功之后进入AVTRANSCODER_CANCELLED状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_release",
              children: "OH_AVErrCode OH_AVTranscoder_Release(OH_AVTranscoder *transcoder)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放转码实例资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_setstatecallback",
              children: "OH_AVErrCode OH_AVTranscoder_SetStateCallback(OH_AVTranscoder *transcoder, OH_AVTranscoder_OnStateChange callback, void *userData)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册触发转码状态修改事件的回调方法。  当触发状态修改事件时，通过注册的回调方法通知开发者。  开发者只能注册一个状态修改事件的回调方法，当开发者重复注册时，以最后一次注册的回调接口为准。  若开发者需监听转码状态修改，须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_prepare",
              children: "OH_AVTranscoder_Prepare"
            }), "之前注册转码状态回调。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_seterrorcallback",
              children: "OH_AVErrCode OH_AVTranscoder_SetErrorCallback(OH_AVTranscoder *transcoder, OH_AVTranscoder_OnError callback, void *userData)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册触发转码错误事件的回调方法。  当触发错误事件时，通过注册的回调方法通知开发者。  如果AVTranscoder上报error事件，开发者需要通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_release",
              children: "OH_AVTranscoder_Release"
            }), "操作退出转码操作。  开发者只能注册一个错误事件的回调方法，当开发者重复注册时，以最后一次注册的回调接口为准。  若开发者需监听转码错误事件，须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_prepare",
              children: "OH_AVTranscoder_Prepare"
            }), "之前注册转码错误事件。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_setprogressupdatecallback",
              children: "OH_AVErrCode OH_AVTranscoder_SetProgressUpdateCallback(OH_AVTranscoder *transcoder, OH_AVTranscoder_OnProgressUpdate callback, void *userData)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册触发转码进度更新事件的回调方法。  当触发转码进度更新事件时，通过注册的回调方法通知开发者。  开发者只能注册一个错误事件的回调方法，当开发者重复注册时，以最后一次注册的回调接口为准。  若开发者需监听转码处理进度，则须在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_prepare",
              children: "OH_AVTranscoder_Prepare"
            }), "之前注册该事件。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoderconfig_create",
      children: "OH_AVTranscoderConfig_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVTranscoder_Config *OH_AVTranscoderConfig_Create()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建转码配置参数实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder-config/capi-avtranscoder-oh-avtranscoder-config",
              children: "OH_AVTranscoder_Config"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果创建成功返回指向OH_AVTranscoder_Config实例的指针，否则返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoderconfig_release",
      children: "OH_AVTranscoderConfig_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoderConfig_Release(OH_AVTranscoder_Config* config)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放转码配置参数资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用成功后，config实例会被释放并置为nullptr。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder-config/capi-avtranscoder-oh-avtranscoder-config",
              children: "OH_AVTranscoder_Config"
            }), "* config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder_Config实例的指针。传入的config指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_create",
              children: "OH_AVTranscoderConfig_Create"
            }), "创建的实例。"]
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
            children: "AV_ERR_OK：释放成功。  AV_ERR_INVALID_VAL：config是空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoderconfig_setsrcfd",
      children: "OH_AVTranscoderConfig_SetSrcFD()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoderConfig_SetSrcFD(OH_AVTranscoder_Config *config, int32_t srcFd, int64_t srcOffset, int64_t length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置转码源视频的文件描述符。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avtranscoder_prepare",
        children: "OH_AVTranscoder_Prepare"
      }), "之前调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder-config/capi-avtranscoder-oh-avtranscoder-config",
              children: "OH_AVTranscoder_Config"
            }), " *config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder_Config实例的指针。传入的config指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_create",
              children: "OH_AVTranscoderConfig_Create"
            }), "创建的实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t srcFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源视频的文件描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t srcOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源视频在文件描述符中的偏移量，单位：字节/Byte。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源视频的长度，单位：字节/Byte。"
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
            children: "AV_ERR_OK：设置成功。  AV_ERR_INVALID_VAL：输入config为空指针，或者源视频文件相关参数错误。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoderconfig_setdstfd",
      children: "OH_AVTranscoderConfig_SetDstFD()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoderConfig_SetDstFD(OH_AVTranscoder_Config *config, int32_t dstFd)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置转码输出视频的文件描述符。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avtranscoder_prepare",
        children: "OH_AVTranscoder_Prepare"
      }), "之前调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder-config/capi-avtranscoder-oh-avtranscoder-config",
              children: "OH_AVTranscoder_Config"
            }), " *config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder_Config实例的指针。传入的config指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_create",
              children: "OH_AVTranscoderConfig_Create"
            }), "创建的实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t dstFd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出视频的文件描述符。"
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
            children: "AV_ERR_OK：设置成功。  AV_ERR_INVALID_VAL：输入config为空指针，或者输出视频文件描述符是无效的。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoderconfig_setdstvideotype",
      children: "OH_AVTranscoderConfig_SetDstVideoType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoderConfig_SetDstVideoType(OH_AVTranscoder_Config *config, const char *mimeType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置用于转码的输出视频的编码格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持AVC和HEVC。若源视频编码格式为HEVC，则默认设置为HEVC，否则默认设置为AVC。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avtranscoder_prepare",
        children: "OH_AVTranscoder_Prepare"
      }), "之前调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder-config/capi-avtranscoder-oh-avtranscoder-config",
              children: "OH_AVTranscoder_Config"
            }), " *config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder_Config实例的指针。传入的config指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_create",
              children: "OH_AVTranscoderConfig_Create"
            }), "创建的实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *mimeType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出视频的编码格式，详细请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "native_avcodec_base.h"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：设置成功。  AV_ERR_INVALID_VAL：输入的config为空指针，或者mimeType是不被允许的。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoderconfig_setdstaudiotype",
      children: "OH_AVTranscoderConfig_SetDstAudioType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoderConfig_SetDstAudioType(OH_AVTranscoder_Config *config, const char *mimeType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置用于转码的输出音频的编码格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持AAC。若开发者不设置，则默认设置为AAC。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avtranscoder_prepare",
        children: "OH_AVTranscoder_Prepare"
      }), "之前调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder-config/capi-avtranscoder-oh-avtranscoder-config",
              children: "OH_AVTranscoder_Config"
            }), " *config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder_Config实例的指针。传入的config指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_create",
              children: "OH_AVTranscoderConfig_Create"
            }), "创建的实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *mimeType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出音频的编码格式，详细请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "native_avcodec_base.h"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：设置成功。  AV_ERR_INVALID_VAL：输入的config为空指针，或者mimeType是不被允许的。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoderconfig_setdstfiletype",
      children: "OH_AVTranscoderConfig_SetDstFileType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoderConfig_SetDstFileType(OH_AVTranscoder_Config *config, OH_AVOutputFormat mimeType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置用于转码的输出视频文件的封装格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前封装格式仅支持MP4。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avtranscoder_prepare",
        children: "OH_AVTranscoder_Prepare"
      }), "之前调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder-config/capi-avtranscoder-oh-avtranscoder-config",
              children: "OH_AVTranscoder_Config"
            }), " *config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder_Config实例的指针。传入的config指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_create",
              children: "OH_AVTranscoderConfig_Create"
            }), "创建的实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avoutputformat",
              children: "OH_AVOutputFormat"
            }), " mimeType"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出视频的封装格式，详细请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#%E5%8F%98%E9%87%8F",
              children: "native_avcodec_base.h"
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV_ERR_OK：设置成功。  AV_ERR_INVALID_VAL：输入的config为空指针，或者mimeType是无效的。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoderconfig_setdstaudiobitrate",
      children: "OH_AVTranscoderConfig_SetDstAudioBitrate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoderConfig_SetDstAudioBitrate(OH_AVTranscoder_Config *config, int32_t bitrate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置用于转码的输出音频的码率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avtranscoder_prepare",
        children: "OH_AVTranscoder_Prepare"
      }), "之前调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder-config/capi-avtranscoder-oh-avtranscoder-config",
              children: "OH_AVTranscoder_Config"
            }), " *config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder_Config实例的指针。传入的config指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_create",
              children: "OH_AVTranscoderConfig_Create"
            }), "创建的实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t bitrate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出音频的码率，单位为比特率（bps）。支持范围[1-500000]，默认设置为48Kbps。"
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
            children: "AV_ERR_OK：设置成功。  AV_ERR_INVALID_VAL：输入的config为空指针，或者bitrate值是无效的。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoderconfig_setdstvideobitrate",
      children: "OH_AVTranscoderConfig_SetDstVideoBitrate()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoderConfig_SetDstVideoBitrate(OH_AVTranscoder_Config *config, int32_t bitrate)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置用于转码的输出视频的码率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avtranscoder_prepare",
        children: "OH_AVTranscoder_Prepare"
      }), "之前调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder-config/capi-avtranscoder-oh-avtranscoder-config",
              children: "OH_AVTranscoder_Config"
            }), " *config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder_Config实例的指针。传入的config指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_create",
              children: "OH_AVTranscoderConfig_Create"
            }), "创建的实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t bitrate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出视频的码率，单位为比特率（bps）。默认码率按输出视频的分辨率设置。  [240P,480P]默认码率值为1Mbps。  (480P,720P]默认码率值为2Mbps。  (240P,1080P]默认码率值为4Mbps。  1080P及以上默认码率值为8Mbps。"
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
            children: "AV_ERR_OK：设置成功。  AV_ERR_INVALID_VAL：输入的config为空指针，或者bitrate值是无效的。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoderconfig_setdstvideoresolution",
      children: "OH_AVTranscoderConfig_SetDstVideoResolution()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoderConfig_SetDstVideoResolution(OH_AVTranscoder_Config *config, int32_t width, int32_t height)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置用于转码的输出视频的分辨率，单位为像素（px），其中width为输出视频帧的宽，height为输出视频帧的高。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avtranscoder_prepare",
        children: "OH_AVTranscoder_Prepare"
      }), "之前调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder-config/capi-avtranscoder-oh-avtranscoder-config",
              children: "OH_AVTranscoder_Config"
            }), " *config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder_Config实例的指针。传入的config指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_create",
              children: "OH_AVTranscoderConfig_Create"
            }), "创建的实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出视频帧的宽，支持范围[240-3840]，默认设置为源视频帧的宽。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出视频帧的高，支持范围[240-2160]，默认设置为源视频帧的高。"
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
            children: "AV_ERR_OK：设置成功。  AV_ERR_INVALID_VAL：输入的config为空指针，或者width、height值是无效的。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoderconfig_enablebframe",
      children: "OH_AVTranscoderConfig_EnableBFrame()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoderConfig_EnableBFrame(OH_AVTranscoder_Config *config, bool enabled)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "转码设置输出视频B帧编码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["B帧视频编码相关的约束和限制可以参考文档", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/video-encoding-b-frame#%E7%BA%A6%E6%9D%9F%E5%92%8C%E9%99%90%E5%88%B6",
        children: "B帧视频编码约束和限制"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果当前不符合B帧视频编码的约束和限制，将忽略B帧，按不使能B帧进行编码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder-config/capi-avtranscoder-oh-avtranscoder-config",
              children: "OH_AVTranscoder_Config"
            }), " *config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder_Config实例的指针。传入的config指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_create",
              children: "OH_AVTranscoderConfig_Create"
            }), "创建的实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bool enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否使能B帧编码。true表示使能B帧编码，false表示不使能B帧编码，默认为false。"
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
            children: "AV_ERR_OK：设置成功。  AV_ERR_INVALID_VAL：输入的config为空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoder_create",
      children: "OH_AVTranscoder_Create()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVTranscoder *OH_AVTranscoder_Create(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建转码实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder/capi-avtranscoder-oh-avtranscoder",
              children: "OH_AVTranscoder"
            }), " *"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果创建成功返回指向OH_AVTranscoder实例的指针，否则返回空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoder_prepare",
      children: "OH_AVTranscoder_Prepare()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoder_Prepare(OH_AVTranscoder *transcoder, OH_AVTranscoder_Config *config)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进行视频转码的参数设置，准备转码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avtranscoder_start",
        children: "OH_AVTranscoder_Start"
      }), "之前调用，调用成功之后进入AVTRANSCODER_PREPARED状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder/capi-avtranscoder-oh-avtranscoder",
              children: "OH_AVTranscoder"
            }), " *transcoder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder实例的指针。传入的transcoder指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_create",
              children: "OH_AVTranscoder_Create"
            }), "创建的实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder-config/capi-avtranscoder-oh-avtranscoder-config",
              children: "OH_AVTranscoder_Config"
            }), " *config"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder_Config实例的指针。  传入的config指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoderconfig_create",
              children: "OH_AVTranscoderConfig_Create"
            }), "创建的实例。"]
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
            children: "AV_ERR_OK：成功设置视频转码的参数设置，进入AVTRANSCODER_PREPARED状态。  AV_ERR_INVALID_VAL：输入的transcoder是空指针，或者转码准备操作失败。  AV_ERR_OPERATE_NOT_PERMIT：当前状态不允许执行Prepare操作，或者是不支持的格式。  AV_ERR_IO：IO访问相关的错误。  AV_ERR_SERVICE_DIED：媒体服务已停止。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoder_start",
      children: "OH_AVTranscoder_Start()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoder_Start(OH_AVTranscoder *transcoder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开始转码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此函数必须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avtranscoder_prepare",
        children: "OH_AVTranscoder_Prepare"
      }), "成功调用之后调用，调用成功之后进入AVTRANSCODER_STARTED状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder/capi-avtranscoder-oh-avtranscoder",
              children: "OH_AVTranscoder"
            }), " *transcoder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder实例的指针。传入的transcoder指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_create",
              children: "OH_AVTranscoder_Create"
            }), "创建的实例。"]
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
            children: "AV_ERR_OK：成功开始转码，进入AVTRANSCODER_STARTED状态。  AV_ERR_INVALID_VAL：输入的transcoder是空指针，或者转码开始操作失败。  AV_ERR_OPERATE_NOT_PERMIT：当前状态不允许执行Start操作。  AV_ERR_IO：IO访问相关的错误。  AV_ERR_SERVICE_DIED：媒体服务已停止。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoder_pause",
      children: "OH_AVTranscoder_Pause()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoder_Pause(OH_AVTranscoder *transcoder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "暂停转码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此函数必须在转码实例处于AVTRANSCODER_STARTED状态时调用，调用成功之后进入AVTRANSCODER_PAUSED状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder/capi-avtranscoder-oh-avtranscoder",
              children: "OH_AVTranscoder"
            }), " *transcoder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder实例的指针。传入的transcoder指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_create",
              children: "OH_AVTranscoder_Create"
            }), "创建的实例。"]
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
            children: "AV_ERR_OK：成功暂停转码，进入AVTRANSCODER_PAUSED状态。  AV_ERR_INVALID_VAL：输入的transcoder是空指针，或者转码暂停操作失败。  AV_ERR_OPERATE_NOT_PERMIT：当前状态不允许执行Pause操作。  AV_ERR_IO：IO访问相关的错误。  AV_ERR_SERVICE_DIED：媒体服务已停止。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoder_resume",
      children: "OH_AVTranscoder_Resume()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoder_Resume(OH_AVTranscoder *transcoder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "恢复转码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此函数必须在转码实例处于AVTRANSCODER_PAUSED状态时调用，调用成功之后重新进入AVTRANSCODER_STARTED状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder/capi-avtranscoder-oh-avtranscoder",
              children: "OH_AVTranscoder"
            }), " *transcoder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder实例的指针。传入的transcoder指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_create",
              children: "OH_AVTranscoder_Create"
            }), "创建的实例。"]
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
            children: "AV_ERR_OK：成功恢复转码，进入AVTRANSCODER_STARTED状态。  AV_ERR_INVALID_VAL：输入的transcoder是空指针，或者转码恢复操作失败。  AV_ERR_OPERATE_NOT_PERMIT：当前状态不允许执行Resume操作。  AV_ERR_IO：IO访问相关的错误。  AV_ERR_SERVICE_DIED：媒体服务已停止。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoder_cancel",
      children: "OH_AVTranscoder_Cancel()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoder_Cancel(OH_AVTranscoder *transcoder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消转码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此函数须在转码实例处于AVTRANSCODER_STARTED和AVTRANSCODER_PAUSED状态时调用，调用成功之后进入AVTRANSCODER_CANCELLED状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder/capi-avtranscoder-oh-avtranscoder",
              children: "OH_AVTranscoder"
            }), " *transcoder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder实例的指针。传入的transcoder指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_create",
              children: "OH_AVTranscoder_Create"
            }), "创建的实例。"]
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
            children: "AV_ERR_OK：成功取消转码，进入AVTRANSCODER_CANCELLED状态。  AV_ERR_INVALID_VAL：输入的transcoder是空指针，或者转码取消操作失败。  AV_ERR_OPERATE_NOT_PERMIT：当前状态不允许执行Cancel操作。  AV_ERR_IO：IO访问相关的错误。  AV_ERR_SERVICE_DIED：媒体服务已停止。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoder_release",
      children: "OH_AVTranscoder_Release()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoder_Release(OH_AVTranscoder *transcoder)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "释放转码实例资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder/capi-avtranscoder-oh-avtranscoder",
              children: "OH_AVTranscoder"
            }), " *transcoder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向OH_AVTranscoder实例的指针。传入的transcoder指针必须为OH_AVTranscoder_Create创建的实例。"
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
            children: "AV_ERR_OK：成功释放转码实例资源。  AV_ERR_INVALID_VAL：输入的transcoder是空指针，或者转码释放资源操作失败。  AV_ERR_OPERATE_NOT_PERMIT：当前状态不允许执行Release操作。  AV_ERR_IO：IO访问相关的错误。  AV_ERR_SERVICE_DIED：媒体服务已停止。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoder_setstatecallback",
      children: "OH_AVTranscoder_SetStateCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoder_SetStateCallback(OH_AVTranscoder *transcoder, OH_AVTranscoder_OnStateChange callback, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册触发转码状态修改事件的回调方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当触发状态修改事件时，通过注册的回调方法通知开发者。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者只能注册一个状态修改事件的回调方法，当开发者重复注册时，以最后一次注册的回调接口为准。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若开发者需监听转码状态修改，须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avtranscoder_prepare",
        children: "OH_AVTranscoder_Prepare"
      }), "之前注册转码状态回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder/capi-avtranscoder-oh-avtranscoder",
              children: "OH_AVTranscoder"
            }), " *transcoder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder实例的指针。传入的transcoder指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_create",
              children: "OH_AVTranscoder_Create"
            }), "创建的实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avtranscoder-base-h/capi-avtranscoder-base-h#oh_avtranscoder_onstatechange",
              children: "OH_AVTranscoder_OnStateChange"
            }), " callback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["转码状态回调方法，详细说明请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avtranscoder-base-h/capi-avtranscoder-base-h#oh_avtranscoder_onstatechange",
              children: "OH_AVTranscoder_OnStateChange"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户特定数据的指针。"
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
            children: "AV_ERR_OK：注册成功。  AV_ERR_INVALID_VAL：输入的transcoder是空指针，或者callback是空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoder_seterrorcallback",
      children: "OH_AVTranscoder_SetErrorCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoder_SetErrorCallback(OH_AVTranscoder *transcoder, OH_AVTranscoder_OnError callback, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册触发转码错误事件的回调方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当触发错误事件时，通过注册的回调方法通知开发者。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果AVTranscoder上报error事件，开发者需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avtranscoder_release",
        children: "OH_AVTranscoder_Release"
      }), "操作退出转码操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者只能注册一个错误事件的回调方法，当开发者重复注册时，以最后一次注册的回调接口为准。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若开发者需监听转码错误事件，须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avtranscoder_prepare",
        children: "OH_AVTranscoder_Prepare"
      }), "之前注册转码错误事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder/capi-avtranscoder-oh-avtranscoder",
              children: "OH_AVTranscoder"
            }), " *transcoder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder实例的指针。传入的transcoder指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_create",
              children: "OH_AVTranscoder_Create"
            }), "创建的实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avtranscoder-base-h/capi-avtranscoder-base-h#oh_avtranscoder_onerror",
              children: "OH_AVTranscoder_OnError"
            }), " callback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["转码错误回调方法，详细说明请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avtranscoder-base-h/capi-avtranscoder-base-h#oh_avtranscoder_onerror",
              children: "OH_AVTranscoder_OnError"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户特定数据的指针。"
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
            children: "AV_ERR_OK：注册成功。  AV_ERR_INVALID_VAL：输入的transcoder是空指针，或者callback是空指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avtranscoder_setprogressupdatecallback",
      children: "OH_AVTranscoder_SetProgressUpdateCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode OH_AVTranscoder_SetProgressUpdateCallback(OH_AVTranscoder *transcoder, OH_AVTranscoder_OnProgressUpdate callback, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册触发转码进度更新事件的回调方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当触发转码进度更新事件时，通过注册的回调方法通知开发者。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者只能注册一个错误事件的回调方法，当开发者重复注册时，以最后一次注册的回调接口为准。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若开发者需监听转码处理进度，则须在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avtranscoder_prepare",
        children: "OH_AVTranscoder_Prepare"
      }), "之前注册该事件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVTranscoder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avtranscoder-oh-avtranscoder/capi-avtranscoder-oh-avtranscoder",
              children: "OH_AVTranscoder"
            }), " *transcoder"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向OH_AVTranscoder实例的指针。传入的transcoder指针必须为", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avtranscoder_create",
              children: "OH_AVTranscoder_Create"
            }), "创建的实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avtranscoder-base-h/capi-avtranscoder-base-h#oh_avtranscoder_onprogressupdate",
              children: "OH_AVTranscoder_OnProgressUpdate"
            }), " callback"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["转码进度更新回调方法，详细说明请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avtranscoder-base-h/capi-avtranscoder-base-h#oh_avtranscoder_onprogressupdate",
              children: "OH_AVTranscoder_OnProgressUpdate"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户特定数据的指针。"
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
            children: "AV_ERR_OK：注册成功。  AV_ERR_INVALID_VAL：输入的transcoder是空指针，或者callback是空指针。"
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