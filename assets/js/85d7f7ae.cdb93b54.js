"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["900227"], {
576087(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_obtain_supported_codecs_obtain_supported_codecs_md_85d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-obtain-supported-codecs-obtain-supported-codecs-md-85d.json
var site_docs_avcodec_kit_audio_video_codec_obtain_supported_codecs_obtain_supported_codecs_md_85d_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/obtain-supported-codecs/obtain-supported-codecs","title":"获取支持的编解码能力","description":"因来源、编解码协议及设备能力的不同，导致不同设备上可用的编解码器及其能力存在差异。","source":"@site/docs/avcodec-kit/audio-video-codec/obtain-supported-codecs/obtain-supported-codecs.md","sourceDirName":"avcodec-kit/audio-video-codec/obtain-supported-codecs","slug":"/avcodec-kit/audio-video-codec/obtain-supported-codecs/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/obtain-supported-codecs/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"获取支持的编解码能力","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/obtain-supported-codecs","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AVCodec支持的格式","permalink":"/harmonyos-docs-site/avcodec-kit/avcodec-support-formats/"},"next":{"title":"音频编码","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audio-encoding/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/obtain-supported-codecs/obtain-supported-codecs.md


const frontMatter = {
	title: '获取支持的编解码能力',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/obtain-supported-codecs',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '获取支持的编解码能力';

const assets = {

};



const toc = [{
  "value": "通用开发指导",
  "id": "通用开发指导",
  "level": 2
}, {
  "value": "场景化开发",
  "id": "场景化开发",
  "level": 2
}, {
  "value": "创建指定名称的编解码器",
  "id": "创建指定名称的编解码器",
  "level": 3
}, {
  "value": "针对软硬件类别差异化配置编解码器参数",
  "id": "针对软硬件类别差异化配置编解码器参数",
  "level": 3
}, {
  "value": "创建多路编解码器",
  "id": "创建多路编解码器",
  "level": 3
}, {
  "value": "控制编码质量",
  "id": "控制编码质量",
  "level": 3
}, {
  "value": "查询编码器支持复杂度范围",
  "id": "查询编码器支持复杂度范围",
  "level": 3
}, {
  "value": "设置正确的音频编解码参数",
  "id": "设置正确的音频编解码参数",
  "level": 3
}, {
  "value": "查询编解码档次和级别支持情况",
  "id": "查询编解码档次和级别支持情况",
  "level": 3
}, {
  "value": "设置正确的视频宽高",
  "id": "设置正确的视频宽高",
  "level": 3
}, {
  "value": "设置正确的视频帧率",
  "id": "设置正确的视频帧率",
  "level": 3
}, {
  "value": "设置正确的视频像素格式信息",
  "id": "设置正确的视频像素格式信息",
  "level": 3
}, {
  "value": "查询编解码特性支持情况并获取特性属性信息",
  "id": "查询编解码特性支持情况并获取特性属性信息",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "获取支持的编解码能力",
        children: "获取支持的编解码能力"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因来源、编解码协议及设备能力的不同，导致不同设备上可用的编解码器及其能力存在差异。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为确保编解码行为符合预期，请通过音视频编解码能力接口查询系统支持的编解码器及其能力，选择符合开发需求的编解码器，并正确配置参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通用开发指导",
      children: "通用开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMake脚本中链接动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(sample PUBLIC libnative_media_codecbase.so)\ntarget_link_libraries(sample PUBLIC libnative_media_core.so)\ntarget_link_libraries(sample PUBLIC libnative_media_venc.so)\ntarget_link_libraries(sample PUBLIC libnative_media_vdec.so)\ntarget_link_libraries(sample PUBLIC libnative_media_acodec.so)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(664257)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上述'sample'字样仅为示例，此处由开发者根据实际工程目录自定义。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <algorithm>\n#include <multimedia/player_framework/native_avcapability.h>\n#include <multimedia/player_framework/native_avcodec_audiocodec.h>\n#include <multimedia/player_framework/native_avcodec_videoencoder.h>\n#include <multimedia/player_framework/native_avcodec_videodecoder.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获得音视频编解码能力实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持两种方式获取音视频编解码能力实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式一：通过OH_AVCodec_GetCapability获取系统推荐的音视频编解码器能力实例。推荐策略与OH_XXX_CreateByMime系列接口一致。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取系统推荐的音频AAC解码器能力实例。\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_AUDIO_AAC, false);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方式二：通过OH_AVCodec_GetCapabilityByCategory获取指定软硬件的编解码能力实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取指定硬件的视频AVC编码器能力实例。\nOH_AVCapability *capability = OH_AVCodec_GetCapabilityByCategory(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true, HARDWARE);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若获取能力实例成功，继续向下执行。实例无显性释放接口，使用完毕后系统会自动回收。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按需调用相应的查询接口。详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h",
            children: "native_avcapability.h"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景化开发",
      children: "场景化开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于开发过程中可能遇到的具体场景，此处将举例说明能力查询接口的使用方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建指定名称的编解码器",
      children: "创建指定名称的编解码器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果系统存在多个相同MIME类型的编解码器，使用OH_XXX_CreateByMime系列接口创建系统推荐的编解码器。如需创建其他编解码器，先获取名称，再通过OH_XXX_CreateByName系列接口创建指定名称的编解码器。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取能力实例对应编解码器的名称。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当H.264软件解码器和H.264硬件解码器同时存在时，创建H.264软件解码器的示例代码如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 1. 获取H.264软件解码器能力实例。\nOH_AVCapability *capability = OH_AVCodec_GetCapabilityByCategory(OH_AVCODEC_MIMETYPE_VIDEO_AVC, false, SOFTWARE);\nif (capability != nullptr) {\n   // 2. 获取H.264软件解码器名称。\n   const char *codecName = OH_AVCapability_GetName(capability);\n   // 3. 创建H.264软件解码器实例。\n   OH_AVCodec *videoDec = OH_VideoDecoder_CreateByName(codecName);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "针对软硬件类别差异化配置编解码器参数",
      children: "针对软硬件类别差异化配置编解码器参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是软件编解码器和硬件编解码器的定义。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "软件编解码器："
          })
        }), " 指在CPU上工作的编解码器，具有迭代灵活、兼容性好和扩展能力强等特点。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "硬件编解码器："
          })
        }), " 指在专有硬件上工作的编解码器，具有低功耗、高性能和减少CPU负载等特点。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在硬件编解码器充足且满足能力要求时，优先使用硬件编解码器；否则使用软件编解码器。开发者可根据编解码器类别配置不同的编解码参数。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_IsHardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确认能力实例对应的编解码器是否为硬件编解码器。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频编码的软硬件类别差异化配置帧率示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 1. 确认推荐的H.264编码器的软硬件类别。\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\nbool isHardware = OH_AVCapability_IsHardware(capability);\n// 2. 基于软硬件类别差异化配置。\nOH_AVCodec *videoEnc = OH_VideoEncoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_AVC);\nif (videoEnc == nullptr) {\n   // 异常处理。\n}\nOH_AVFormat *format = OH_AVFormat_CreateVideoFormat(OH_AVCODEC_MIMETYPE_VIDEO_AVC, 1920, 1080);\nif (format == nullptr) {\n   // 异常处理。\n}\ndouble frameRate = isHardware ? 60.0 : 30.0;\nif (!OH_AVFormat_SetDoubleValue(format, OH_MD_KEY_FRAME_RATE, frameRate)) {\n   // 异常处理。\n}\nif (OH_VideoEncoder_Configure(videoEnc, format) != AV_ERR_OK) {\n   // 异常处理。\n}\nOH_AVFormat_Destroy(format);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建多路编解码器",
      children: "创建多路编解码器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分业务场景涉及创建多路编解码器，基于系统内存、处理器和带宽等资源的限制，某一编解码器的实例数是有限的，不能无限制创建。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetMaxSupportedInstances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取能力实例对应编解码器的最大实例数。实际创建数还受系统内存、处理器和带宽等资源的约束。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优先创建硬件解码器实例，资源不足时创建软件解码器实例。示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "constexpr int32_t NEEDED_VDEC_NUM = 8;\n// 1. 创建硬件解码器实例。\nOH_AVCapability *capHW = OH_AVCodec_GetCapabilityByCategory(OH_AVCODEC_MIMETYPE_VIDEO_AVC, false, HARDWARE);\nif (capHW == nullptr) {\n   // 异常处理。\n}\nint32_t vDecNumHW = std::min(OH_AVCapability_GetMaxSupportedInstances(capHW), NEEDED_VDEC_NUM);\nint32_t createdVDecNum = 0;\nfor (int i = 0; i < vDecNumHW; i++) {\n   OH_AVCodec *videoDec = OH_VideoDecoder_CreateByName(OH_AVCapability_GetName(capHW));\n   if (videoDec != nullptr) {\n      // 维护在videoDecVector中。\n      createdVDecNum++;\n   }\n}\nif (createdVDecNum < NEEDED_VDEC_NUM) {\n   // 2. 不够时，创建软件解码器实例。\n   OH_AVCapability *capSW = OH_AVCodec_GetCapabilityByCategory(OH_AVCODEC_MIMETYPE_VIDEO_AVC, false, SOFTWARE);\n   if (capSW == nullptr) {\n      // 异常处理。\n   }\n   int32_t vDecNumSW = std::min(OH_AVCapability_GetMaxSupportedInstances(capSW), NEEDED_VDEC_NUM - createdVDecNum);\n   for (int i = 0; i < vDecNumSW; i++) {\n      OH_AVCodec *videoDec = OH_VideoDecoder_CreateByName(OH_AVCapability_GetName(capSW));\n      if (videoDec != nullptr) {\n         // 维护在videoDecVector中。\n         createdVDecNum++;\n      }\n   }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "控制编码质量",
      children: "控制编码质量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供四种码控模式供开发者选择：恒定码率（CBR）、动态码率（VBR）、恒定质量（CQ）及质量稳定（SQR）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CBR和VBR码控模式下，编码质量取决于码率参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CQ码控模式下，编码质量取决于质量参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQR码控模式下，编码质量由质量稳定码率因子和最大码率决定，且仅支持H.265（HEVC）编码。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_IsEncoderBitrateModeSupported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确认当前编码器是否支持给定的码控模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetEncoderBitrateRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前编码器支持的码率范围，适用于CBR、VBR和SQR码控模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetEncoderQualityRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前编码器支持的质量范围，适用于CQ码控模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CBR和VBR码控模式示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_BitrateMode bitrateMode = BITRATE_MODE_CBR;\nint32_t bitrate = 3000000;\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\n// 1. 确认待配置码控模式是否支持。\nbool isSupported = OH_AVCapability_IsEncoderBitrateModeSupported(capability, bitrateMode);\nif (!isSupported) {\n   // 异常处理。\n}\n// 2. 获取码率范围，判断待配置码率参数是否在范围内。\nOH_AVRange bitrateRange = {-1, -1};\nint32_t ret = OH_AVCapability_GetEncoderBitrateRange(capability, &bitrateRange);\nif (ret != AV_ERR_OK || bitrateRange.maxVal <= 0) {\n   // 异常处理。\n}\nif (bitrate > bitrateRange.maxVal || bitrate < bitrateRange.minVal) {\n   // 3.（可选）调整待配置码率参数。\n}\n// 4. 配置编码参数。\nOH_AVCodec *videoEnc = OH_VideoEncoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_AVC);\nif (videoEnc == nullptr) {\n   // 异常处理。\n}\nOH_AVFormat *format = OH_AVFormat_CreateVideoFormat(OH_AVCODEC_MIMETYPE_VIDEO_AVC, 1920, 1080);\nif (format == nullptr) {\n   // 异常处理。\n}\nif (!OH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_ENCODE_BITRATE_MODE, bitrateMode) ||\n   !OH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, static_cast<int64_t>(bitrate))) {\n   // 异常处理。\n}\nif (OH_VideoEncoder_Configure(videoEnc, format) != AV_ERR_OK) {\n   // 异常处理。\n}\nOH_AVFormat_Destroy(format);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CQ码控模式示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_BitrateMode bitrateMode = BITRATE_MODE_CQ;\nint32_t quality = 0;\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\n// 1. 确认待配置码控模式是否支持。\nbool isSupported = OH_AVCapability_IsEncoderBitrateModeSupported(capability, bitrateMode);\nif (!isSupported) {\n   // 异常处理。\n}\n// 2. 获取质量范围，判断待配置质量参数是否在范围内。\nOH_AVRange qualityRange = {-1, -1};\nint32_t ret = OH_AVCapability_GetEncoderQualityRange(capability, &qualityRange);\nif (ret != AV_ERR_OK || qualityRange.maxVal < 0) {\n   // 异常处理。\n}\nif (quality > qualityRange.maxVal || quality < qualityRange.minVal) {\n   // 3.（可选）调整待配置质量参数。\n}\n// 4. 配置编码参数。\nOH_AVCodec *videoEnc = OH_VideoEncoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_AVC);\nif (videoEnc == nullptr) {\n   // 异常处理。\n}\nOH_AVFormat *format = OH_AVFormat_CreateVideoFormat(OH_AVCODEC_MIMETYPE_VIDEO_AVC, 1920, 1080);\nif (format == nullptr) {\n   // 异常处理。\n}\nif (!OH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_ENCODE_BITRATE_MODE, bitrateMode) ||\n   !OH_AVFormat_SetIntValue(format, OH_MD_KEY_QUALITY, quality)) {\n   // 异常处理。\n}\nif (OH_VideoEncoder_Configure(videoEnc, format) != AV_ERR_OK) {\n   // 异常处理。\n}\nOH_AVFormat_Destroy(format);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQR码控模式示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_BitrateMode bitrateMode = BITRATE_MODE_SQR;\nint32_t sqrFactor = 30; // 质量稳定码率因子。\nint32_t maxBitrate = 20000000; // 最大码率。\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_HEVC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\n// 1. 确认待配置码控模式是否支持。\nbool isSupported = OH_AVCapability_IsEncoderBitrateModeSupported(capability, bitrateMode);\nif (!isSupported) {\n   // 异常处理。\n}\n// 2. 获取码率范围，判断待配置最大码率参数是否在范围内。\nOH_AVRange bitrateRange = {-1, -1};\n// 最大码率参数的取值范围同码率参数，故复用OH_AVCapability_GetEncoderBitrateRange获取取值范围。\nint32_t ret = OH_AVCapability_GetEncoderBitrateRange(capability, &bitrateRange);\nif (ret != AV_ERR_OK || bitrateRange.maxVal <= 0) {\n   // 异常处理。\n}\n\n// 质量稳定码率因子取值范围为[0, 51]（同编码量化参数QP）。\nif (sqrFactor > 51 || sqrFactor < 0) {\n   // 3.（可选）调整待配置质量稳定码率因子参数。\n}\n\nif (maxBitrate > bitrateRange.maxVal || maxBitrate < bitrateRange.minVal) {\n   // 4.（可选）调整待配置最大码率参数。\n}\n\n// 5. 配置编码参数。\nOH_AVCodec *videoEnc = OH_VideoEncoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_HEVC);\nif (videoEnc == nullptr) {\n   // 异常处理。\n}\nOH_AVFormat *format = OH_AVFormat_CreateVideoFormat(OH_AVCODEC_MIMETYPE_VIDEO_HEVC, 1920, 1080);\nif (format == nullptr) {\n   // 异常处理。\n}\nif (!OH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_ENCODE_BITRATE_MODE, bitrateMode) ||\n   !OH_AVFormat_SetIntValue(format, OH_MD_KEY_SQR_FACTOR, sqrFactor) ||\n   !OH_AVFormat_SetIntValue(format, OH_MD_KEY_MAX_BITRATE, maxBitrate)) {\n   // 异常处理。\n}\nif (OH_VideoEncoder_Configure(videoEnc, format) != AV_ERR_OK) {\n   // 异常处理。\n}\nOH_AVFormat_Destroy(format);\n\n// 6. 启动编码器，开始编码。\nret = OH_VideoEncoder_Prepare(videoEnc);\nif (ret != AV_ERR_OK) {\n   // 异常处理。\n}\nret = OH_VideoEncoder_Start(videoEnc);\nif (ret != AV_ERR_OK) {\n   // 异常处理。\n}\n\n// 7.（可选）OH_VideoEncoder_SetParameter()在运行过程中动态配置质量稳定码率因子参数和最大码率参数。\nOH_AVFormat *dynamicFormat = OH_AVFormat_Create();\n// SQR码控支持动态配置最大码率参数和质量稳定码率因子参数。\nsqrFactor = 25; // 更新质量稳定码率因子。\nmaxBitrate = 10000000; // 更新最大码率参数。\nOH_AVFormat_SetLongValue(dynamicFormat, OH_MD_KEY_MAX_BITRATE, maxBitrate);\nOH_AVFormat_SetIntValue(dynamicFormat, OH_MD_KEY_SQR_FACTOR, sqrFactor);\nret = OH_VideoEncoder_SetParameter(videoEnc, dynamicFormat);\nif (ret != AV_ERR_OK) {\n   // 异常处理。\n}\nOH_AVFormat_Destroy(dynamicFormat);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询编码器支持复杂度范围",
      children: "查询编码器支持复杂度范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复杂度等级决定了编码器使用的工具数量，但并非所有编码器都支持这一功能。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetEncoderComplexityRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前编码器支持的复杂度等级范围。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_AUDIO_AAC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\n// 确认支持的编码复杂度范围。\nOH_AVRange complexityRange = {-1, -1};\nint32_t ret = OH_AVCapability_GetEncoderComplexityRange(capability, &complexityRange);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置正确的音频编解码参数",
      children: "设置正确的音频编解码参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在音频编解码场景中，需要设置采样率和通道数。对于音频编码，还需要设置码率。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetAudioSupportedSampleRateRanges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前音频编解码器支持的采样率范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetAudioChannelCountRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前音频编解码器支持的通道数范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetEncoderBitrateRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前编码器支持的码率范围。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频编解码参数查询示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t sampleRate = 44100;\nint32_t channelCount = 2;\nint32_t bitrate = 261000;\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_AUDIO_AAC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\n// 1. 确认待配置采样率是否支持。\nOH_AVRange *sampleRateRanges = nullptr;\nuint32_t rangesNum = 0;\nint32_t ret = OH_AVCapability_GetAudioSupportedSampleRateRanges(capability, &sampleRateRanges, &rangesNum);\nif (ret != AV_ERR_OK || sampleRateRanges == nullptr || rangesNum == 0) {\n   // 异常处理。\n}\nbool isMatched = false;\nfor (uint32_t i = 0; i < rangesNum; i++) {\n   if (sampleRate >= sampleRateRanges[i].minVal && sampleRate <= sampleRateRanges[i].maxVal) {\n      isMatched = true;\n      break;\n   }\n}\nif (!isMatched) {\n   // 2.（可选）调整待配置采样率。\n}\n// 3. 获取通道数范围，判断待配置通道数参数是否在范围内。\nOH_AVRange channelRange = {-1, -1};\nret = OH_AVCapability_GetAudioChannelCountRange(capability, &channelRange);\nif (ret != AV_ERR_OK || channelRange.maxVal <= 0) {\n   // 异常处理。\n}\nif (channelCount > channelRange.maxVal || channelCount < channelRange.minVal ) {\n   // 4.（可选）调整待配置通道数。\n}\n// 5. 获取码率范围，判断待配置码率参数是否在范围内。\nOH_AVRange bitrateRange = {-1, -1};\nret = OH_AVCapability_GetEncoderBitrateRange(capability, &bitrateRange);\nif (ret != AV_ERR_OK || bitrateRange.maxVal <= 0) {\n   // 异常处理。\n}\nif (bitrate > bitrateRange.maxVal || bitrate < bitrateRange.minVal ) {\n   // 6.（可选）调整待配置码率值。\n}\n// 7. 配置编码参数。\nOH_AVCodec *audioEnc = OH_AudioCodec_CreateByMime(OH_AVCODEC_MIMETYPE_AUDIO_AAC, true);\nif (audioEnc == nullptr) {\n   // 异常处理。\n}\nOH_AVFormat *format = OH_AVFormat_Create();\nif (format == nullptr) {\n   // 异常处理。\n}\nif (!OH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_SAMPLE_RATE, sampleRate) ||\n   !OH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_CHANNEL_COUNT, channelCount) ||\n   !OH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, static_cast<int64_t>(bitrate))) {\n   // 异常处理。\n}\nif (OH_AudioCodec_Configure(audioEnc, format) != AV_ERR_OK) {\n   // 异常处理。\n}\nOH_AVFormat_Destroy(format);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询编解码档次和级别支持情况",
      children: "查询编解码档次和级别支持情况"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["编解码标准包含多种编码工具，适用于不同的编码场景。对于特定应用场景，编解码标准按档次确定所需编码工具的开启与关闭情况（例如，H.264有基本档次、主档次和高档次）。详情参见 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcprofile",
        children: "OH_AVCProfile"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["级别划分了编解码器所需的处理能力和存储空间。H.264有1到6.2的20个级别，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avclevel",
        children: "OH_AVCLevel"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetSupportedProfiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前编解码器支持的档次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetSupportedLevelsForProfile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前编解码器在给定档次的情况下支持的级别信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_AreProfileAndLevelSupported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确认当前编解码器是否支持特定的档次和级别组合。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "确认待配置的档次是否支持，并查询该档次下支持的级别，示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVCProfile profile = AVC_PROFILE_MAIN;\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\n// 1. 确认待配置档次是否支持。\nconst int32_t *profiles = nullptr;\nuint32_t profileNum = 0;\nint32_t ret = OH_AVCapability_GetSupportedProfiles(capability, &profiles, &profileNum);\nif (ret != AV_ERR_OK || profiles == nullptr || profileNum == 0) {\n   // 异常处理。\n}\nbool isMatched = false;\nfor (int i = 0; i < profileNum; i++) {\n   if (profiles[i] == profile) {\n      isMatched = true;\n      break;\n   }\n}\n// 2. 查询待配置档次能支持的级别范围。\nconst int32_t *levels = nullptr;\nuint32_t levelNum = 0;\nret = OH_AVCapability_GetSupportedLevelsForProfile(capability, profile, &levels, &levelNum);\nif (ret != AV_ERR_OK || levels == nullptr || levelNum == 0) {\n   // 异常处理。\n}\nOH_AVCLevel maxLevel = static_cast<OH_AVCLevel>(levels[0]);\nfor (int32_t i = 1; i < levelNum; i++) {\n   OH_AVCLevel tmp = static_cast<OH_AVCLevel>(levels[i]);\n   if (tmp > maxLevel) {\n      maxLevel = tmp;\n   }\n}\n// 3.（可选）基于支持的最大级别做业务逻辑区分。\nif (maxLevel >= AVC_LEVEL_51) {\n   // level5.1以上，宽、高可配置3840x2160。\n} else if (maxLevel >= AVC_LEVEL_4) {\n   // level4.0以上，宽、高可配1920x1080。\n} else if (maxLevel >= AVC_LEVEL_31) {\n   // level3.1以上，宽、高可配1280x720。\n} else {\n   // 报错，不做编码。\n}\n// 4. 配置档次参数。\nOH_AVCodec *videoEnc = OH_VideoEncoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_AVC);\nif (videoEnc == nullptr) {\n   // 异常处理。\n}\nOH_AVFormat *format = OH_AVFormat_CreateVideoFormat(OH_AVCODEC_MIMETYPE_VIDEO_AVC, 1920, 1080);\nif (format == nullptr) {\n   // 异常处理。\n}\nif (!OH_AVFormat_SetIntValue(format, OH_MD_KEY_PROFILE, profile)) {\n   // 异常处理。\n}\nif (OH_VideoEncoder_Configure(videoEnc, format) != AV_ERR_OK) {\n   // 异常处理。\n}\nOH_AVFormat_Destroy(format);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "已知需要的编码档次和级别组合，直接查询支持情况示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 1. 获取H.264编码器能力实例。\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\n// 2. 查询编码档次和级别是否支持。\nbool isSupported = OH_AVCapability_AreProfileAndLevelSupported(capability, AVC_PROFILE_MAIN, AVC_LEVEL_51);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置正确的视频宽高",
      children: "设置正确的视频宽高"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频编解码器对宽度和高度有对齐约束。例如，主流编解码器默认编解码像素格式为YUV420系列，UV分量在宽度和高度两个方向都会下采样为原始尺寸的一半，因此视频编解码的宽度和高度至少要按2对齐。其他因素也可能导致更严格的对齐约束。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频编解码的宽高不仅会受帧级编解码能力限制，同时也会受协议级别对帧级能力的限制。以H.264为例，AVC_LEVEL_51限定最大每帧宏块数目为36864个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据视频高度计算最大视频宽度的公式如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(303994)/* ["default"] */.A) + "",
        width: "781",
        height: "110"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MaxMBsPerFrameLevelLimits表示协议限定的编解码器最大每帧宏块数，MaxMBsPerFrameSubmit表示编解码器上报的最大每帧宏块数，实际能力取这两者的最小值。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetVideoWidthAlignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前视频编解码器的宽对齐。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetVideoHeightAlignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前视频编解码器的高对齐。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetVideoWidthRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前视频编解码器支持的宽的范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetVideoHeightRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前视频编解码器支持的高的范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetVideoWidthRangeForHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前视频编解码器在给定高情况下的宽的范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetVideoHeightRangeForWidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前视频编解码器在给定宽情况下的高的范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_IsVideoSizeSupported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "校验当前视频编解码器是否支持给定的宽高组合。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "校验视频高度和宽度是否支持，示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t width = 1920;\nint32_t height = 1080;\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\n// 1. 确认视频宽高是否支持。\nbool isSupported = OH_AVCapability_IsVideoSizeSupported(capability, width, height);\nif (!isSupported) {\n   // 2. (可选) 按已知视频高或已知视频宽查询详细限制，并调整。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果视频高度和视频宽度校验不支持或配置失败，可尝试以下方法确定正确的视频宽高范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "已知视频宽度，可以按照以下示例找到正确的尺寸配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t width = 1920;\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\n// 1. 确认视频宽符合宽对齐要求。\nint32_t widthAlignment = 0;\nint32_t ret = OH_AVCapability_GetVideoWidthAlignment(capability, &widthAlignment);\nif (ret != AV_ERR_OK || widthAlignment <= 0) {\n   // 异常处理。\n} else if (width % widthAlignment != 0) {\n   // 2. (可选) 对齐视频宽。\n   width = (width + widthAlignment - 1) / widthAlignment * widthAlignment;\n}\n// 3. 确认视频宽处在可支持宽范围内。\nOH_AVRange widthRange = {-1, -1};\nret = OH_AVCapability_GetVideoWidthRange(capability, &widthRange);\nif (ret != AV_ERR_OK || widthRange.maxVal <= 0) {\n   // 异常处理。\n} else if (width < widthRange.minVal || width > widthRange.maxVal) {\n   // 4. (可选) 调整视频宽。\n   width = std::min(std::max(width, widthRange.minVal), widthRange.maxVal);\n}\n// 5. 基于视频宽，获取可选视频高的范围。\nOH_AVRange heightRange = {-1, -1};\nret = OH_AVCapability_GetVideoHeightRangeForWidth(capability, width, &heightRange);\nif (ret != AV_ERR_OK || heightRange.maxVal <= 0) {\n   // 异常处理。\n}\n// 6. 从可选高度范围中挑选合适的高度配置。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "已知视频高度，可以按照以下示例找到正确的尺寸配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t height = 1080;\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\n// 1. 确认视频高符合高对齐要求。\nint32_t heightAlignment = 0;\nint32_t ret = OH_AVCapability_GetVideoHeightAlignment(capability, &heightAlignment);\nif (ret != AV_ERR_OK || heightAlignment <= 0) {\n   // 异常处理。\n} else if (height % heightAlignment != 0) {\n   // 2. (可选) 对齐视频高。\n   height = (height + heightAlignment - 1) / heightAlignment * heightAlignment;\n}\n// 3. 确认视频高处在可支持高范围内。\nOH_AVRange heightRange = {-1, -1};\nret = OH_AVCapability_GetVideoHeightRange(capability, &heightRange);\nif (ret != AV_ERR_OK || heightRange.maxVal <= 0) {\n   // 异常处理。\n} else if (height < heightRange.minVal || height > heightRange.maxVal) {\n   // 4. (可选) 调整视频高。\n   height = std::min(std::max(height, heightRange.minVal), heightRange.maxVal);\n}\n// 5. 基于视频高，获取可选视频宽的范围。\nOH_AVRange widthRange = {-1, -1};\nret = OH_AVCapability_GetVideoWidthRangeForHeight(capability, height, &widthRange);\nif (ret != AV_ERR_OK || widthRange.maxVal <= 0) {\n   // 异常处理。\n}\n// 6. 从可选宽度范围中挑选合适的宽度配置。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置正确的视频帧率",
      children: "设置正确的视频帧率"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频编解码的帧率受编解码器的每秒编解码能力和协议级别的每秒处理能力限制。例如，H.264的AVC_LEVEL_51限定最大每秒宏块数目为983040个。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据视频的宽度和高度，计算最大帧率的公式如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(244440)/* ["default"] */.A) + "",
        width: "797",
        height: "115"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MaxMBsPerSecondLevelLimits表示协议限定的编解码器最大每秒宏块数，MaxMBsPerSecondSubmit表示编解码器上报的最大每秒宏块数，实际能力取这两者的最小值。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetVideoFrameRateRange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前视频编解码器支持的帧率的范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetVideoFrameRateRangeForSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前视频编解码器在给定图像尺寸情况下的帧率的范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_AreVideoSizeAndFrameRateSupported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "校验视频编解码器是否支持视频大小和帧率的特定组合。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有帧率目标需求时，校验帧率是否在可选范围内。示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t frameRate = 120;\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\n// 1. 获取支持的帧率范围。\nOH_AVRange frameRateRange = {-1, -1};\nint32_t ret = OH_AVCapability_GetVideoFrameRateRange(capability, &frameRateRange);\nif (ret != AV_ERR_OK || frameRateRange.maxVal <= 0) {\n   // 异常处理。\n}\n// 2. 判断是否在可选帧率范围内。\nbool isSupported = frameRate >= frameRateRange.minVal && frameRate <= frameRateRange.maxVal;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据待配置的尺寸选择合适的帧率配置，示例代码如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "constexpr int32_t width = 1920;\nconstexpr int32_t height = 1080;\nint32_t frameRate = 120;\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\n// 1. 确认待配置尺寸是否能达到理想帧率。\nbool isSupported = OH_AVCapability_AreVideoSizeAndFrameRateSupported(capability, width, height, frameRate);\nif (!isSupported) {\n   // 2. 基于待配置视频尺寸，查询支持的帧率范围，并基于查询到的帧率调整待配置帧率。\n   OH_AVRange frameRateRange = {-1, -1};\n   int32_t ret = OH_AVCapability_GetVideoFrameRateRangeForSize(capability, width, height, &frameRateRange);\n   if (ret != AV_ERR_OK || frameRateRange.maxVal <= 0) {\n      // 异常处理。\n   }\n   frameRate = std::min(std::max(frameRate, frameRateRange.minVal), frameRateRange.maxVal);\n}\n\n// 3. 配置尺寸和帧率参数。\nOH_AVCodec *videoEnc = OH_VideoEncoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_AVC);\nif (videoEnc == nullptr) {\n   // 异常处理。\n}\nOH_AVFormat *format = OH_AVFormat_CreateVideoFormat(OH_AVCODEC_MIMETYPE_VIDEO_AVC, width, height);\nif (format == nullptr) {\n   // 异常处理。\n}\nif (!OH_AVFormat_SetDoubleValue(format, OH_MD_KEY_FRAME_RATE, static_cast<double>(frameRate))) {\n   // 异常处理。\n}\nif (OH_VideoEncoder_Configure(videoEnc, format) != AV_ERR_OK) {\n   // 异常处理。\n}\nOH_AVFormat_Destroy(format);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置正确的视频像素格式信息",
      children: "设置正确的视频像素格式信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["视频像素格式指示的编码输入图像或解码输出图像的像素排布方式，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h#oh_avpixelformat",
        children: "OH_AVPixelFormat"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetVideoSupportedPixelFormats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前视频编解码器支持的像素格式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "constexpr OH_AVPixelFormat DEFAULT_PIXELFORMAT = AV_PIXEL_FORMAT_NV12;\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\n// 1. 获取当前视频编解码器支持的像素格式。\nconst int32_t *pixFormats = nullptr;\nuint32_t pixFormatNum = 0;\nint32_t ret = OH_AVCapability_GetVideoSupportedPixelFormats(capability, &pixFormats, &pixFormatNum);\nif (ret != AV_ERR_OK || pixFormats == nullptr || pixFormatNum == 0) {\n   // 异常处理。\n}\n// 2. 校验是否支持对应像素格式。\nbool isMatched = false;\nfor (int i = 0; i < pixFormatNum; i++) {\n   if (pixFormats[i] == DEFAULT_PIXELFORMAT) {\n      isMatched = true;\n      break;\n   }\n}\nif (!isMatched) {\n   // 3. 替换其他像素格式输入或选择其他编解码器。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询编解码特性支持情况并获取特性属性信息",
      children: "查询编解码特性支持情况并获取特性属性信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["编解码特性是指在特定编解码场景中使用的可选特性，例如视频编码场景的时域可分级编码、 低时延编解码等。具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcapability-h/capi-native-avcapability-h#oh_avcapabilityfeature",
        children: "OH_AVCapabilityFeature"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_IsFeatureSupported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确认当前编解码器是否支持给定的特性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_AVCapability_GetFeatureProperties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前编解码器支持的指定特性的属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询H.264编码器是否支持长期参考帧特性，示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "constexpr int32_t NEEDED_LTR_NUM = 2;\nOH_AVFormat *format = OH_AVFormat_CreateVideoFormat(OH_AVCODEC_MIMETYPE_VIDEO_AVC, 1920, 1080);\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\nif (capability == nullptr) {\n   // 异常处理。\n}\n// 1. 查询是否支持长期参考帧特性。\nbool isSupported = OH_AVCapability_IsFeatureSupported(capability,VIDEO_ENCODER_LONG_TERM_REFERENCE);\nif (isSupported) {\n   // 2. 查询支持的长期参考帧个数。\n   OH_AVFormat *properties = OH_AVCapability_GetFeatureProperties(capability, VIDEO_ENCODER_LONG_TERM_REFERENCE);\n   if (properties == nullptr) {\n      // 异常处理。\n   }\n   int32_t maxLTRCount = -1;\n   bool ret = OH_AVFormat_GetIntValue(properties, OH_FEATURE_PROPERTY_KEY_VIDEO_ENCODER_MAX_LTR_FRAME_COUNT, &maxLTRCount);\n   if (ret && maxLTRCount >= NEEDED_LTR_NUM) {\n      if (!OH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_ENCODER_LTR_FRAME_COUNT, NEEDED_LTR_NUM)) {\n         // 异常处理。\n      }\n   }\n}\n// 3. 编码器创建和配置。\nOH_AVCodec *videoEnc = OH_VideoEncoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_AVC);\nif (OH_VideoEncoder_Configure(videoEnc, format) != AV_ERR_OK) {\n   // 异常处理。\n}\n"
      })
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
664257(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
244440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478541-35871d5cd05ddb16c9f3ed9ff6711cb3.png");

},
303994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958540-887484009b8783344796f8be08f6a175.png");

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