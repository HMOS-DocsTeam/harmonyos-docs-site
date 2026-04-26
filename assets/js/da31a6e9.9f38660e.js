"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["461354"], {
517624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_avcodec_api_avcodec_c_avcodec_module_capi_codecbase_capi_codecbase_md_da3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-avcodec-api-avcodec-c-avcodec-module-capi-codecbase-capi-codecbase-md-da3.json
var site_docs_ref_avcodec_api_avcodec_c_avcodec_module_capi_codecbase_capi_codecbase_md_da3_namespaceObject = JSON.parse('{"id":"avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase","title":"CodecBase","description":"概述","source":"@site/docs-ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase.md","sourceDirName":"avcodec-api/avcodec-c/avcodec-module/capi-codecbase","slug":"/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"CodecBase","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-codecbase","kit":"媒体","last_updated":"2026-04-22","slug":"capi-codecbase"},"sidebar":"ref","previous":{"title":"AudioCodec","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-module/capi-audiocodec/capi-audiocodec"},"next":{"title":"Core","permalink":"/harmonyos-docs-site/ref/avcodec-api/avcodec-c/avcodec-module/capi-core/capi-core"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase.md


const frontMatter = {
	title: 'CodecBase',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-codecbase',
	kit: '媒体',
	last_updated: '2026-04-22',
	slug: 'capi-codecbase'
};
const contentTitle = 'CodecBase';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "文件汇总",
  "id": "文件汇总",
  "level": 2
}, {
  "value": "媒体编解码格式",
  "id": "媒体编解码格式",
  "level": 2
}, {
  "value": "媒体数据键值对",
  "id": "媒体数据键值对",
  "level": 2
}, {
  "value": "能力查询专有的键值对",
  "id": "能力查询专有的键值对",
  "level": 3
}, {
  "value": "音视频公共的键值对",
  "id": "音视频公共的键值对",
  "level": 3
}, {
  "value": "视频专有的键值对",
  "id": "视频专有的键值对",
  "level": 3
}, {
  "value": "音频专有的键值对",
  "id": "音频专有的键值对",
  "level": 3
}, {
  "value": "封装/解封装专有的键值对",
  "id": "封装解封装专有的键值对",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    del: "del",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "codecbase",
        children: "CodecBase"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CodecBase模块提供用于音视频封装、解封装、编解码基础功能的变量、属性以及函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Multimedia.Media.CodecBase"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 9"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件汇总",
      children: "文件汇总"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/avcodec-api/avcodec-c/avcodec-arkts-dep/avcodec-headerfile-arkts-dep/capi-avcodec-audio-channel-layout-h/capi-avcodec-audio-channel-layout-h",
              children: "avcodec_audio_channel_layout.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频编解码声道布局枚举的声明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h",
              children: "native_avcodec_base.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明用于音视频封装、解封装、编解码基础功能的Native API。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "媒体编解码格式",
      children: "媒体编解码格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于描述媒体编解码格式的名字如下表。类型是常量字符串。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_AVCODEC_MIMETYPE_AUDIO_AAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AAC音频编解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_FLAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FLAC音频编解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_OPUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OPUS音频编解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_G711MU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G711MU音频编解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_G711A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "G711A音频解码器的MIME类型。  从API version 20开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_RAW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAW音频码流的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_VORBIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VORBIS音频解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_MPEG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MP3音频编解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_VIVID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audio Vivid音频解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_AMR_NB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMR_NB音频解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_AMR_WB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AMR_WB音频解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_APE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "APE音频解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_ALAC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALAC（Apple Lossless Audio Codec）音频解码器的MIME类型。  从API version 22开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_AC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC3（Dolby Audio Coding 3）音频解码器的MIME类型。  从API version 22开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_EAC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EAC3（Enhanced AC-3）音频解码器的MIME类型。  从API version 22开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_WMAV1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WMA（Windows Media Audio）V1音频解码器的MIME类型。  从API version 22开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_WMAV2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WMA（Windows Media Audio）V2音频解码器的MIME类型。  从API version 22开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_WMAPRO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WMA（Windows Media Audio）Pro音频解码器的MIME类型。  从API version 22开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_GSM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GSM（Global System for Mobile Communications）音频解码器的MIME类型。  从API version 22开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_GSM_MS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GSM MS（Microsoft variant）音频解码器的MIME类型。  从API version 22开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_TWINVQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TWINVQ（Transform-domain Weighted Interleave Vector Quantization）音频解码器的MIME类型。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_ILBC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ILBC（Internet Low Bitrate Codec） 音频解码器的MIME类型。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_TRUEHD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TRUEHD（True High Definition）音频解码器的MIME类型。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_DVAUDIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DVAUDIO（Digital Video Audio）音频解码器的MIME类型。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_DTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTS（Digital Theater Systems）音频解码器的MIME类型。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_AUDIO_COOK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COOK（RealAudio Cook）音频解码器的MIME类型。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_VVC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VVC（H.266）视频编解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_HEVC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HEVC（H.265）视频编解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_AVC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVC（H.264）视频编解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_H263"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H.263视频编解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_VC1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VC-1视频编解码器的MIME类型。  从API version 22开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_MSVIDEO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MSVIDEO1（Microsoft Video 1）视频编解码器的MIME类型。  从API version 22开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_WMV3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WMV3视频编解码器的MIME类型。  从API version 22开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_MJPEG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MJPEG（Motion JPEG）视频编解码器的MIME类型。  从API version 22开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_MPEG4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG4视频编码的MIME类型，仅用于封装MPEG4视频码流使用。（API11废弃）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_MPEG4_PART2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频MPEG4 Part2编解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_MPEG2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频MPEG2编解码器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_AV1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AV1视频编解码器的MIME类型。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_VP9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VP9视频编解码器的MIME类型。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_VP8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VP8视频编解码器的MIME类型。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_RV30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RV30视频编解码器的MIME类型。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_RV40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RV40视频编解码器的MIME类型。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_WVC1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WVC1视频编解码器的MIME类型。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_DVVIDEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DVVIDEO（Digital Video）视频编解码器的MIME类型。支持DV NTSC、DV PAL与DVCPRO HD。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_RAWVIDEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAWVIDEO视频编解码器的MIME类型。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_MPEG1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MPEG1视频编解码器的MIME类型。  从API version 23开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_IMAGE_JPG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPG图片编码的MIME类型，仅用于封装JPG封面时使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_IMAGE_PNG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PNG图片编码的MIME类型，仅用于封装PNG封面时使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_IMAGE_BMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BMP图片编码的MIME类型，仅用于封装BMP封面时使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_SUBTITLE_WEBVTT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WEBVTT字幕解封装器的MIME类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCODEC_MIMETYPE_SUBTITLE_SRT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SRT字幕解封装器的MIME类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "媒体数据键值对",
      children: "媒体数据键值对"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于描述媒体数据的键值对查找表如下。键的类型是常量字符串，值的类型可以是int32_t/int64_t/float/double/char */uint8_t *。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用以下key的主要接口是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
        children: "OH_AVFormat"
      }), "，通过以下key可以进行参数配置或查询。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "能力查询专有的键值对",
      children: "能力查询专有的键值对"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_FEATURE_PROPERTY_KEY_VIDEO_ENCODER_MAX_LTR_FRAME_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在视频编码中获取长期参考帧（LTR）的最大个数的键，值类型为int32_t。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音视频公共的键值对",
      children: "音视频公共的键值对"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_MD_KEY_CODEC_CONFIG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编解码器特定数据的键，视频中表示传递SPS/PPS，音频中表示传递extraData，值类型为uint8_t*。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_MAX_INPUT_BUFFER_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大输入缓冲区个数的键，值类型为int32_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_MAX_OUTPUT_BUFFER_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大输出缓冲区个数的键，值类型int32_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BITRATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "比特率的键，值类型为int64_t。该键用于音视频编码场景。在视频编码场景下该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_PROFILE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["编码档次，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcprofile",
              children: "OH_AVCProfile"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_hevcprofile",
              children: "OH_HEVCProfile"
            }), "，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_aacprofile",
              children: "OH_AACProfile"
            }), "。该键是可选的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_MAX_INPUT_SIZE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置解码输入码流大小最大值的键，值类型为int32_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_ENABLE_SYNC_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能音视频编解码同步模式的键，值类型为int32_t，1表示使能，0表示不使能。该键是可选的配置项，默认不配置则表示不使能同步模式，在Configure阶段使用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "视频专有的键值对",
      children: "视频专有的键值对"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_ED_KEY_TIME_STAMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示surfacebuffer时间戳的键，值类型为int64_t。该键是可选的。（API14废弃）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_ED_KEY_EOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示surfacebuffer流结束符的键，值类型为int32_t。该键是可选的。（API14废弃）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_WIDTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频宽度的键，值类型为int32_t。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_HEIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频高度键，值类型为int32_t。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_PIXEL_FORMAT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频像素格式的键，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avpixelformat",
              children: "OH_AVPixelFormat"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_FRAME_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频帧率的键，值类型为double。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_RANGE_FLAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频YUV值域标志的键，值类型为int32_t，1表示full range，0表示limited range。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_COLOR_PRIMARIES"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频色域的键，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_colorprimary",
              children: "OH_ColorPrimary"
            }), "，遵循H.273标准Table2。该键是可选的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRANSFER_CHARACTERISTICS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频传递函数的键，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_transfercharacteristic",
              children: "OH_TransferCharacteristic"
            }), "，遵循H.273标准Table3。该键是可选的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_MATRIX_COEFFICIENTS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频矩阵系数的键，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_matrixcoefficient",
              children: "OH_MatrixCoefficient"
            }), "，遵循H.273标准Table4。该键是可选的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_STRIDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述视频帧宽跨距的键，值类型为int32_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_SLICE_HEIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述视频帧高跨距的键，值类型为int32_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_PIC_WIDTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述视频帧真实宽度的键，值类型为int32_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_PIC_HEIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述视频帧真实高度的键，值类型为int32_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENABLE_LOW_LATENCY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能低时延视频编解码的键，值类型为int32_t，1表示使能，0表示不使能。该键是可选的配置项，默认不配置则表示不使能，在Configure阶段使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODE_BITRATE_MODE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频编码码率模式，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_bitratemode",
              children: "OH_BitrateMode"
            }), "。该键是可选的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_QUALITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所需编码质量的键。值类型为int32_t，此键仅适用于配置在恒定质量模式下的编码器。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_REQUEST_I_FRAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求立即编码I帧的键。值类型为int32_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_I_FRAME_INTERVAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关键帧间隔的键，值类型为int32_t，单位为ms。该键是可选的且只用于视频编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_ENABLE_TEMPORAL_SCALABILITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能分层编码的键，值类型为int32_t，1表示使能，0表示不使能。该键是可选的且只用于视频编码，默认不配置则表示不使能，在Configure阶段使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_TEMPORAL_GOP_SIZE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述图片组基本层图片的间隔大小的键，值类型为int32_t，只在使能分层编码时生效。该键是可选的且只用于视频编码，在Configure阶段使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_TEMPORAL_GOP_REFERENCE_MODE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述图片组内参考模式的键，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_temporalgopreferencemode",
              children: "OH_TemporalGopReferenceMode"
            }), "，只在使能分层编码时生效。该键是可选的且只用于视频编码，在Configure阶段使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_LTR_FRAME_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述长期参考帧（LTR）个数的键，值类型为int32_t，必须在支持的值范围内使用。该键是可选的且只用于视频编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_PER_FRAME_MARK_LTR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标记当前帧为长期参考帧（LTR）的键，值类型为int32_t，1表示被标记为长期参考帧（LTR），0表示未被标记为长期参考帧（LTR）。该键是可选的且只用于视频编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_PER_FRAME_USE_LTR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述当前帧参考的长期参考帧（LTR）的POC号的键，值类型为int32_t。该键是可选的且只用于视频编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_PER_FRAME_IS_LTR"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当前", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avbuffer/capi-core-oh-avbuffer",
              children: "OH_AVBuffer"
            }), "中输出的码流对应的帧是否为长期参考帧（LTR）的键，值类型为int32_t，1表示是长期参考帧（LTR），0表示不是长期参考帧（LTR）。该键是可选的且只用于视频编码，默认值为0。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_PER_FRAME_POC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述帧的POC号的键，值类型为int32_t。该键是可选的且只用于视频编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_QP_MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述视频编码器允许的最大量化参数的键，值类型为int32_t。该键是可选的且只用于视频编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_QP_MIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述视频编码器允许的最小量化参数的键，值类型为int32_t。该键是可选的且只用于视频编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_QP_AVERAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述视频帧平均量化参数的键，值类型为int32_t。该键是可选的且只用于视频编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_MSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述视频帧平方误差的键，值类型为double。该键是可选的且只用于视频编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_REPEAT_PREVIOUS_FRAME_AFTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果在上一帧提交给编码器之后没有新的帧可用，则会以毫秒为单位重复提交最后一帧，值类型为int32_t。该键只用于视频编码Surface模式，在Configure阶段使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_REPEAT_PREVIOUS_MAX_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述编码器在没有新的帧可用的情况下，可以对之前的帧进行重复编码的最大次数，值类型为int32_t。该键仅在OH_MD_KEY_VIDEO_ENCODER_REPEAT_PREVIOUS_FRAME_AFTER可用时生效，在Configure阶段使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_DECODER_OUTPUT_COLOR_SPACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置视频解码器输出色彩空间的键，值类型为int32_t。 支持的值为OH_COLORSPACE_BT709_LIMIT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_ROTATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "surface旋转角度的键，旋转方向为顺时针。值类型为int32_t，值为{0, 90, 180, 270}，默认值为0。该键只在视频解码Surface模式下使用。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_SCALING_MODE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["视频缩放模式，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_scalingmode",
              children: "OH_ScalingMode"
            }), "。该键是可选的且只用于视频解码Surface模式。建议直接调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativewindowsetscalingmodev2",
              children: "OH_NativeWindow_NativeWindowSetScalingModeV2"
            }), "接口进行设置。（API14废弃）"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_CROP_TOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述裁剪矩形顶部坐标（y）值的键，值类型为int32_t。该键是可选的且只用于视频解码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_CROP_BOTTOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述裁剪矩形底部坐标（y）值的键，值类型为int32_t。该键是可选的且只用于视频解码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_CROP_LEFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述裁剪矩形左坐标（x）值的键，值类型为int32_t。该键是可选的且只用于视频解码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_CROP_RIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述裁剪矩形右坐标（x）值的键，值类型为int32_t。该键是可选的且只用于视频解码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_DECODER_OUTPUT_ENABLE_VRR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码器是否打开视频可变帧率功能的键，值类型为int32_t。该键是可选的且只用于视频解码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_SQR_FACTOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述SQR码控模式的质量参数，取值范围为[0, 51]（同编码量化参数QP），值越小，编码输出码率越大，质量越好，值类型为int32_t。该键值是可选的且只用于视频编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_MAX_BITRATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述SQR码控模式的最大码率，使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getencoderbitraterange",
              children: "OH_AVCapability_GetEncoderBitrateRange"
            }), "方法获取取值范围（同OH_MD_KEY_BITRATE），单位bps，值类型为int64_t。该键值是可选的且只用于视频编码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_ROI_PARAMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述ROI编码参数，包括ROI区域和deltaQp，值类型为char *。该键值是可选的且只用于视频编码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_ENABLE_PTS_BASED_RATECONTROL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能基于显示时间戳（PTS）的码控模式的键，值类型为int32_t，1表示使能，0表示不使能。该键值是可选的且只用于视频编码，默认值为0。如果使能，则必须在每个视频帧中携带PTS信息，并发送到编码器。在Configure阶段使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_ENABLE_B_FRAME"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使能双向预测帧（B帧）编码的键，值类型为int32_t：1表示使能，0表示不使能。该键是可选项，仅用于视频编码器，默认值为0。  如果使能，视频编码器将会使用B帧编码，编码后的视频在解码时解码顺序与显示顺序会不同。  对于不支持的设备，配置该键不会生效。  可通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_isfeaturesupported",
              children: "OH_AVCapability_IsFeatureSupported"
            }), "接口和枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapabilityfeature",
              children: "OH_AVCapabilityFeature"
            }), ".VIDEO_ENCODER_B_FRAME查询设备能力。  该键仅通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_configure",
              children: "OH_VideoEncoder_Configure"
            }), "使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_ENCODER_MAX_B_FRAMES"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述视频编码器支持的最大连续B帧数的键，值类型为int32_t。注意：该键目前仅用于查询编码器能力。  使用规范如下：  1. 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_isfeaturesupported",
              children: "OH_AVCapability_IsFeatureSupported"
            }), "接口和枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapabilityfeature",
              children: "OH_AVCapabilityFeature"
            }), ".VIDEO_ENCODER_B_FRAME查询特性支持情况。  2. 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapability_getfeatureproperties",
              children: "OH_AVCapability_GetFeatureProperties"
            }), "接口和枚举值", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapabilityfeature",
              children: "OH_AVCapabilityFeature"
            }), ".VIDEO_ENCODER_B_FRAME获取OH_AVFormat指针。  3. 通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avformat_getintvalue",
              children: "OH_AVFormat_GetIntValue"
            }), "接口和本键获取最大B帧数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_DECODER_BLANK_FRAME_ON_SHUTDOWN"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于指定视频解码器关闭时是否输出空白帧的键，值类型为int32_t，1表示使能，0表示不使能，默认值为0。配置非0值将按照配置1处理，表示使能。该键是可选的且仅用于视频解码Surface模式。  使能后，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_stop",
              children: "OH_VideoDecoder_Stop"
            }), "接口或者", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_destroy",
              children: "OH_VideoDecoder_Destroy"
            }), "接口时，视频解码器将输出空白帧（通常为黑色）。该机制可避免因解码器突然终止导致的显示残留。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_NATIVE_BUFFER_FORMAT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于查询视频编解码中native buffer像素格式的键，值类型为int32_t。  具体取值请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-buffer-common-h/capi-buffer-common-h#oh_nativebuffer_format",
              children: "OH_NativeBuffer_Format"
            }), "中定义的像素格式。该键主要用于以下两种场景：  1. 视频解码：调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_getoutputdescription",
              children: "OH_VideoDecoder_GetOutputDescription"
            }), "接口或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconstreamchanged",
              children: "OH_AVCodecOnStreamChanged"
            }), "，从返回的OH_AVFormat对象中获取当前输出格式。  2. 视频编码：调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_getinputdescription",
              children: "OH_VideoEncoder_GetInputDescription"
            }), "接口，从返回的OH_AVFormat对象中获取当前输入格式。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "音频专有的键值对",
      children: "音频专有的键值对"
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
            children: "OH_MD_KEY_AUDIO_SAMPLE_FORMAT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["音频原始格式的键，值类型为int32_t。请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_bitspersample",
              children: "OH_BitsPerSample"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_CHANNEL_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频通道计数键，值类型为int32_t。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_SAMPLE_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频采样率键，值类型为int32_t。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUDIO_COMPRESSION_LEVEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频编解码压缩水平的键，只在音频编码使用，值类型为int32_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CHANNEL_LAYOUT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["所需编码通道布局的键。值类型为int64_t，此键仅适用于编码器。请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-audio-channel-layout-h/capi-native-audio-channel-layout-h#oh_audiochannellayout",
              children: "OH_AudioChannelLayout"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BITS_PER_CODED_SAMPLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每个编码样本位数的键，值类型为int32_t。该键是可选的。  API version 20前，FLAC编码必须设置此参数，设置为1即可；未设置此参数配置FLAC编码器时，调用OH_AudioCodec_Configure会返回错误码AV_ERR_INVALID_VAL。该值无实际作用，不会影响编码结果。从API version 20开始，无需设置此参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_SBR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aac sbr模式的键，值类型为int32_t，aac编码器支持。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_COMPLIANCE_LEVEL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "flac兼容性等级的键，值类型为int32_t，仅在音频编码使用。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AAC_IS_ADTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aac格式的键，aac格式分为ADTS格式和LATM格式。值类型为int32_t，aac解码器支持。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_IDENTIFICATION_HEADER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vorbis标识头的键，值类型为uint8_t*，仅vorbis解码器支持。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_SETUP_HEADER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vorbis设置头的键，值类型为uint8_t*，仅vorbis解码器支持。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUDIO_OBJECT_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频对象数目的键，值类型为int32_t，只有Audio Vivid解码使用。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUDIO_VIVID_METADATA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audio Vivid元数据的键，值类型为uint8_t*，只有Audio Vivid解码使用。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BLOCK_ALIGN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "划分音频数据块大小的键，单位为字节，值类型为int32_t。该键从API version 22开始支持，仅WMAV1、WMAV2、WMA PRO解码时必须配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "封装解封装专有的键值对",
      children: "封装/解封装专有的键值对"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_MD_KEY_VIDEO_IS_HDR_VIVID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件中的视频轨是否为HDR Vivid的键，支持封装和解封装，值类型为int32_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_START_TIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件中第一帧起始位置开始时间的键，以微秒为单位，值类型为int64_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRACK_START_TIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轨道开始时间的键，以微秒为单位，值类型为int64_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRACK_TYPE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["轨道媒体类型的键，值类型为int32_t，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_mediatype",
              children: "OH_MediaType"
            }), "。该键是可选的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_DURATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件持续时间的键，值类型为int64_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TITLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件标题的键，值类型为char *。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_ARTIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "艺术家的键，值类型为char *。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_ALBUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "专辑的媒体文件的键，值类型为char *。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_ALBUM_ARTIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "专辑艺术家的键，值类型为char *。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_DATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件日期的键，值类型为char *，例如2024年。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_COMMENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件注释的键，值类型为char *。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_GENRE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件流派的键，值类型为char *。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_COPYRIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件版权的键，值类型为char *。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_LANGUAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件语言的键，值类型为char *。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_DESCRIPTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件描述的键，值类型为char *。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_LYRICS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件歌词的键，值类型为char *。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRACK_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件轨道数量的键，值类型为int32_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BUFFER_DURATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVBuffer中携带的音视频或字幕的sample对应的持续时间的键，以微秒为单位，值类型为int64_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_DECODING_TIMESTAMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AVBuffer中携带的音视频或字幕的sample对应的解码时间戳的键，以微秒为单位，值类型为int64_t。该键是可选的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CODEC_MIME"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["编解码器", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%AA%92%E4%BD%93%E7%BC%96%E8%A7%A3%E7%A0%81%E6%A0%BC%E5%BC%8F",
              children: "MIME"
            }), "类型的键，值类型为char *。该键是可选的。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_SAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "样本长宽比的键，值类型为double。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CREATION_TIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件创建时间的元数据，值类型为char *。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_REFERENCE_TRACK_IDS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件轨道间参考、被参考关系，值类型为int32_t*。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRACK_REFERENCE_TYPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件辅助轨类型，值类型为char *。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRACK_DESCRIPTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件辅助轨描述信息，值类型为char *。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BUFFER_SKIP_SAMPLES_INFO"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OH_AVBuffer中携带的键，仅解封装支持。在解封装输出音频的起始、末尾帧可能携带此键。  此键对应一个10字节的uint8_t[]类型的数组，记录的是音频文件元数据中解码后需跳过的音频采样点数。  具体结构如下：  1. 数组0", (0,jsx_runtime.jsx)(_components.del, {
              children: "3，这4个字节表示从当前帧第一个采样点开始往后跳过的采样点数，以小端序存储uint32_t值。  2. 数组4"
            }), "7，这4个字节表示从当前帧最后一个采样点开始往前跳过的采样点数（不大于1帧采样点数），以小端序存储uint32_t值。  3. 数组8~9，这2个字节表示保留位，默认输出为0。  该键从API version 23开始支持。"]
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