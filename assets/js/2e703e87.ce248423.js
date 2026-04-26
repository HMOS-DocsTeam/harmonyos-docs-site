"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["23067"], {
16806(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_media_api_media_c_media_headerfile_capi_avrecorder_base_h_capi_avrecorder_base_h_md_2e7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-media-api-media-c-media-headerfile-capi-avrecorder-base-h-capi-avrecorder-base-h-md-2e7.json
var site_docs_ref_media_api_media_c_media_headerfile_capi_avrecorder_base_h_capi_avrecorder_base_h_md_2e7_namespaceObject = JSON.parse('{"id":"media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h","title":"avrecorder_base.h","description":"概述","source":"@site/docs-ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h.md","sourceDirName":"media-api/media-c/media-headerfile/capi-avrecorder-base-h","slug":"/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"avrecorder_base.h","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h","kit":"媒体","last_updated":"2026-04-22","slug":"capi-avrecorder-base-h"},"sidebar":"ref","previous":{"title":"avrecorder.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h"},"next":{"title":"avtranscoder.h","permalink":"/harmonyos-docs-site/ref/media-api/media-c/media-headerfile/capi-avtranscoder-h/capi-avtranscoder-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/media-api/media-c/media-headerfile/capi-avrecorder-base-h/capi-avrecorder-base-h.md


const frontMatter = {
	title: 'avrecorder_base.h',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-avrecorder-base-h'
};
const contentTitle = 'avrecorder_base.h';

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
  "value": "OH_AVRecorder_AudioSourceType",
  "id": "oh_avrecorder_audiosourcetype",
  "level": 3
}, {
  "value": "OH_AVRecorder_VideoSourceType",
  "id": "oh_avrecorder_videosourcetype",
  "level": 3
}, {
  "value": "OH_AVRecorder_CodecMimeType",
  "id": "oh_avrecorder_codecmimetype",
  "level": 3
}, {
  "value": "OH_AVRecorder_ContainerFormatType",
  "id": "oh_avrecorder_containerformattype",
  "level": 3
}, {
  "value": "OH_AVRecorder_State",
  "id": "oh_avrecorder_state",
  "level": 3
}, {
  "value": "OH_AVRecorder_StateChangeReason",
  "id": "oh_avrecorder_statechangereason",
  "level": 3
}, {
  "value": "OH_AVRecorder_FileGenerationMode",
  "id": "oh_avrecorder_filegenerationmode",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_AVRecorder_OnStateChange()",
  "id": "oh_avrecorder_onstatechange",
  "level": 3
}, {
  "value": "OH_AVRecorder_OnError()",
  "id": "oh_avrecorder_onerror",
  "level": 3
}, {
  "value": "OH_AVRecorder_OnUri()",
  "id": "oh_avrecorder_onuri",
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
        id: "avrecorder_baseh",
        children: "avrecorder_base.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义了媒体AVRecorder的结构体和枚举。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <multimedia/player_framework/avrecorder_base.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libavrecorder.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-avrecorder/capi-avrecorder",
        children: "AVRecorder"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-profile/capi-avrecorder-oh-avrecorder-profile",
              children: "OH_AVRecorder_Profile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_Profile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义音视频录制的详细参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder/capi-avrecorder-oh-avrecorder",
              children: "OH_AVRecorder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "初始化AVRecorder。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-location/capi-avrecorder-oh-avrecorder-location",
              children: "OH_AVRecorder_Location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_Location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供媒体资源的地理位置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-metadatatemplate/capi-avrecorder-oh-avrecorder-metadatatemplate",
              children: "OH_AVRecorder_MetadataTemplate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_MetadataTemplate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义元数据的基本模板。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-metadata/capi-avrecorder-oh-avrecorder-metadata",
              children: "OH_AVRecorder_Metadata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_Metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "元数据信息数据结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-config/capi-avrecorder-oh-avrecorder-config",
              children: "OH_AVRecorder_Config"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_Config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供媒体AVRecorder的配置定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-range/capi-avrecorder-oh-avrecorder-range",
              children: "OH_AVRecorder_Range"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_Range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示类型的范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-encoderinfo/capi-avrecorder-oh-avrecorder-encoderinfo",
              children: "OH_AVRecorder_EncoderInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_EncoderInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供编码器信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#oh_avrecorder_audiosourcetype",
              children: "OH_AVRecorder_AudioSourceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_AudioSourceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVRecorder的音频源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avrecorder_videosourcetype",
              children: "OH_AVRecorder_VideoSourceType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_VideoSourceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVRecorder的视频源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avrecorder_codecmimetype",
              children: "OH_AVRecorder_CodecMimeType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_CodecMimeType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码器MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avrecorder_containerformattype",
              children: "OH_AVRecorder_ContainerFormatType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_ContainerFormatType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "容器格式类型（容器格式类型的缩写是 CFT）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avrecorder_state",
              children: "OH_AVRecorder_State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVRecorder状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avrecorder_statechangereason",
              children: "OH_AVRecorder_StateChangeReason"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_StateChangeReason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVRecorder状态变化的原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avrecorder_filegenerationmode",
              children: "OH_AVRecorder_FileGenerationMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_FileGenerationMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建录制文件的模式。"
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
              href: "#oh_avrecorder_onstatechange",
              children: "typedef void (*OH_AVRecorder_OnStateChange)(OH_AVRecorder *recorder, OH_AVRecorder_State state, OH_AVRecorder_StateChangeReason reason, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_OnStateChange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当录制状态发生变化时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avrecorder_onerror",
              children: "typedef void (*OH_AVRecorder_OnError)(OH_AVRecorder *recorder, int32_t errorCode, const char *errorMsg, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_OnError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当录制过程中发生错误时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avrecorder_onuri",
              children: "typedef void (*OH_AVRecorder_OnUri)(OH_AVRecorder *recorder, OH_MediaAsset *asset, void *userData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder_OnUri"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当录制在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avrecorder_filegenerationmode",
              children: "OH_AVRecorder_FileGenerationMode"
            }), ".AVRECORDER_AUTO_CREATE_CAMERA_SCENE模式时调用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avrecorder_audiosourcetype",
      children: "OH_AVRecorder_AudioSourceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVRecorder_AudioSourceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVRecorder的音频源类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "AVRECORDER_DEFAULT = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认音频源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_MIC = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "麦克风音频源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_VOICE_RECOGNITION = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语音识别场景的音频源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_VOICE_COMMUNICATION = 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语音通话场景的音频源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_VOICE_MESSAGE = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "短语音消息的音频源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_CAMCORDER = 13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "相机录像的音频源。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avrecorder_videosourcetype",
      children: "OH_AVRecorder_VideoSourceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVRecorder_VideoSourceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVRecorder的视频源类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
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
            children: "AVRECORDER_SURFACE_YUV = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "原始数据Surface。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_SURFACE_ES = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES数据Surface。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avrecorder_codecmimetype",
      children: "OH_AVRecorder_CodecMimeType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVRecorder_CodecMimeType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编码器MIME类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "AVRECORDER_VIDEO_AVC = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H.264 编码器MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_AUDIO_AAC = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AAC 编码器MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_AUDIO_MP3 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mp3 编码器MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_AUDIO_G711MU = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G711-mulaw 编码器MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_VIDEO_MPEG4 = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4 编码器MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_VIDEO_HEVC = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H.265 编码器MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_AUDIO_AMR_NB = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMR_NB 编解码器MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_AUDIO_AMR_WB = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMR_WB 编解码器MIME类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avrecorder_containerformattype",
      children: "OH_AVRecorder_ContainerFormatType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVRecorder_ContainerFormatType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "容器格式类型（容器格式类型的缩写是 CFT）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "AVRECORDER_CFT_MPEG_4 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频容器格式类型mp4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_CFT_MPEG_4A = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频容器格式类型m4a。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_CFT_AMR = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频容器格式类型amr。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_CFT_MP3 = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频容器格式类型mp3。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_CFT_WAV = 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频容器格式类型wav。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_CFT_AAC = 11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频容器格式类型aac（带ADTS头）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 20"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avrecorder_state",
      children: "OH_AVRecorder_State"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVRecorder_State\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVRecorder状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 18"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "AVRECORDER_IDLE = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["空闲状态。此时可以调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h#oh_avrecorder_prepare",
              children: "OH_AVRecorder_Prepare"
            }), "方法设置录制参数，进入AVRECORDER_PREPARED状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_PREPARED = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["准备状态。参数设置完成，此时可以调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h#oh_avrecorder_start",
              children: "OH_AVRecorder_Start"
            }), "方法开始录制，进入AVRECORDER_STARTED状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_STARTED = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启动状态。正在录制，此时可以调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h#oh_avrecorder_pause",
              children: "OH_AVRecorder_Pause"
            }), "方法暂停录制，进入AVRECORDER_PAUSED状态。  也可以调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h#oh_avrecorder_stop",
              children: "OH_AVRecorder_Stop"
            }), "方法结束录制，进入AVRECORDER_STOPPED状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_PAUSED = 3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["暂停状态。此时可以调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h#oh_avrecorder_resume",
              children: "OH_AVRecorder_Resume"
            }), "方法继续录制，进入AVRECORDER_STARTED状态。  也可以调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h#oh_avrecorder_stop",
              children: "OH_AVRecorder_Stop"
            }), "方法结束录制，进入AVRECORDER_STOPPED状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_STOPPED = 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["停止状态。此时可以调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h#oh_avrecorder_prepare",
              children: "OH_AVRecorder_Prepare"
            }), "方法设置录制参数，重新进入AVRECORDER_PREPARED状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_RELEASED = 5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["释放状态。录制资源释放，此时不能再进行任何操作。在任何其他状态下，均可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h#oh_avrecorder_release",
              children: "OH_AVRecorder_Release"
            }), "方法进入AVRECORDER_RELEASED状态。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_ERROR = 6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误状态。当AVRecorder实例发生不可逆错误，会转换至当前状态。  切换至AVRECORDER_ERROR状态时会伴随", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avrecorder_onerror",
              children: "OH_AVRecorder_OnError"
            }), "事件，该事件会上报详细错误原因。  在AVRECORDER_ERROR状态时，用户需要调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h#oh_avrecorder_reset",
              children: "OH_AVRecorder_Reset"
            }), "方法重置AVRecorder实例，或者调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h#oh_avrecorder_release",
              children: "OH_AVRecorder_Release"
            }), "方法释放资源。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avrecorder_statechangereason",
      children: "OH_AVRecorder_StateChangeReason"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVRecorder_StateChangeReason\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AVRecorder状态变化的原因。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
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
            children: "AVRECORDER_USER = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户操作导致的状态变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_BACKGROUND = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "后台操作导致的状态变化。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avrecorder_filegenerationmode",
      children: "OH_AVRecorder_FileGenerationMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum OH_AVRecorder_FileGenerationMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建录制文件的模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
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
            children: "AVRECORDER_APP_CREATE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由应用自行在沙箱中创建媒体文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVRECORDER_AUTO_CREATE_CAMERA_SCENE = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由系统创建媒体文件，当前仅在相机录制场景下生效。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avrecorder_onstatechange",
      children: "OH_AVRecorder_OnStateChange()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVRecorder_OnStateChange)(OH_AVRecorder *recorder,OH_AVRecorder_State state, OH_AVRecorder_StateChangeReason reason, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当录制状态发生变化时调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder/capi-avrecorder-oh-avrecorder",
              children: "OH_AVRecorder"
            }), " *recorder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avrecorder_state",
              children: "OH_AVRecorder_State"
            }), " state"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示录制器状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_avrecorder_statechangereason",
              children: "OH_AVRecorder_StateChangeReason"
            }), " reason"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "录制器状态变化的原因。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户特定数据的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avrecorder_onerror",
      children: "OH_AVRecorder_OnError()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVRecorder_OnError)(OH_AVRecorder *recorder, int32_t errorCode, const char *errorMsg,void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当录制过程中发生错误时调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder/capi-avrecorder-oh-avrecorder",
              children: "OH_AVRecorder"
            }), " *recorder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t errorCode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误码，详细说明请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
              children: "OH_AVErrCode"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const char *errorMsg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "错误信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户特定数据的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_avrecorder_onuri",
      children: "OH_AVRecorder_OnUri()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*OH_AVRecorder_OnUri)(OH_AVRecorder *recorder, OH_MediaAsset *asset, void *userData)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当录制在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_avrecorder_filegenerationmode",
        children: "OH_AVRecorder_FileGenerationMode"
      }), ".AVRECORDER_AUTO_CREATE_CAMERA_SCENE模式下时调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.AVRecorder"]
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
              href: "/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder/capi-avrecorder-oh-avrecorder",
              children: "OH_AVRecorder"
            }), " *recorder"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVRecorder实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-library-api/media-library-c/media-library-struct/capi-mediaassetmanager-oh-mediaasset/capi-mediaassetmanager-oh-mediaasset",
              children: "OH_MediaAsset"
            }), " *asset"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MediaAsset实例的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void *userData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户特定数据的指针。"
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