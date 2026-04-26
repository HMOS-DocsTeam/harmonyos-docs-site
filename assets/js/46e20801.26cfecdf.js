"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["17294"], {
177477(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_file_muxing_demuxing_audio_video_muxer_audio_video_muxer_md_46e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-file-muxing-demuxing-audio-video-muxer-audio-video-muxer-md-46e.json
var site_docs_avcodec_kit_file_muxing_demuxing_audio_video_muxer_audio_video_muxer_md_46e_namespaceObject = JSON.parse('{"id":"avcodec-kit/file-muxing-demuxing/audio-video-muxer/audio-video-muxer","title":"媒体数据封装","description":"开发者可以调用本模块的Native API接口，完成音视频封装，即将音频、视频等编码后的媒体数据，按一定的格式存储到文件里。","source":"@site/docs/avcodec-kit/file-muxing-demuxing/audio-video-muxer/audio-video-muxer.md","sourceDirName":"avcodec-kit/file-muxing-demuxing/audio-video-muxer","slug":"/avcodec-kit/file-muxing-demuxing/audio-video-muxer/","permalink":"/harmonyos-docs-site/avcodec-kit/file-muxing-demuxing/audio-video-muxer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"媒体数据封装","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-video-muxer","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"视频解码支持HDRVivid2SDR","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdrvivid2sdr/"},"next":{"title":"媒体数据解析","permalink":"/harmonyos-docs-site/avcodec-kit/file-muxing-demuxing/audio-video-demuxer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/file-muxing-demuxing/audio-video-muxer/audio-video-muxer.md


const frontMatter = {
	title: '媒体数据封装',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-video-muxer',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '媒体数据封装';

const assets = {

};



const toc = [{
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "在 CMake 脚本中链接动态库",
  "id": "在-cmake-脚本中链接动态库",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "媒体数据封装",
        children: "媒体数据封装"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用本模块的Native API接口，完成音视频封装，即将音频、视频等编码后的媒体数据，按一定的格式存储到文件里。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持的封装能力请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/avcodec-support-formats#%E5%AA%92%E4%BD%93%E6%95%B0%E6%8D%AE%E5%B0%81%E8%A3%85",
        children: "AVCodec支持的格式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要对HDRVivid视频码流进行封装，需要配置MimeType为H265 (OH_AVCODEC_MIMETYPE_VIDEO_HEVC)，本功能从API version 11开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "适用场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "录像、录音"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "保存录像、录音文件时，需要先对音视频流进行编码，再封装为文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音视频编辑"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成编辑后的音视频，需要封装为文件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音视频转码"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "转码后，保存文件时需要封装。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avmuxer-h/capi-native-avmuxer-h",
        children: "native_avmuxer.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(504708)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果调用封装模块写本地文件，需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
        children: "向用户申请授权"
      }), "：ohos.permission.READ_MEDIA, ohos.permission.WRITE_MEDIA。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libnative_media_avmuxer.so)\ntarget_link_libraries(sample PUBLIC libnative_media_core.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例代码，完成音视频封装的全流程。以封装mp4格式的音视频文件为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不同的封装格式需要配置的key请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/avcodec-support-formats#%E5%AA%92%E4%BD%93%E6%95%B0%E6%8D%AE%E5%B0%81%E8%A3%85",
        children: "AVCodec支持的格式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/native_avmuxer.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <multimedia/player_framework/native_avbuffer.h>\n#include <fcntl.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AVMuxer_Create()创建封装器实例对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置封装格式为mp4。\nOH_AVOutputFormat format = AV_OUTPUT_FORMAT_MPEG_4;\n// 以读写方式创建fd。\nint32_t fd = open(\"test.mp4\", O_CREAT | O_RDWR | O_TRUNC, S_IRUSR | S_IWUSR);\nOH_AVMuxer *muxer = OH_AVMuxer_Create(fd, format);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_AVMuxer_SetRotation()设置旋转角度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 旋转角度，视频画面需要旋转的时候设置。\nOH_AVMuxer_SetRotation(muxer, 0);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加文件级数据。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["文件级数据已定义的key详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/avcodec-support-formats#%E5%AA%92%E4%BD%93%E6%95%B0%E6%8D%AE%E5%B0%81%E8%A3%85",
            children: "AVCodec支持的格式"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户自定义的key必须以\"com.openharmony.\"为开头。值类型可以为int32_t、float、string，从API20开始增加支持uint8_t*。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(266352)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "已定义的key必须在OH_AVMuxer_Start()前设置，用户自定义的key可以在OH_AVMuxer_Stop()前设置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVFormat *format = OH_AVFormat_Create(); // 用OH_AVFormat_Create创建format。\n\n// 设置已定义的key。\nOH_AVFormat_SetStringValue(format, OH_MD_KEY_CREATION_TIME, \"2024-12-28T00:00:00:000000Z\"); // 从API14开始支持设置创建时间（使用ISO 8601标准的时间格式且为UTC时间）。\nOH_AVFormat_SetStringValue(format, OH_MD_KEY_COMMENT, \"comment test\"); // 从API20开始支持设置评论。值类型为string。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_ENABLE_MOOV_FRONT, 1); // 从API20开始支持设置moov元数据是否前置。默认值为0，设置1代表前置。\n\n// 设置用户自定义key（需要com.openharmony.开头）。\nOH_AVFormat_SetIntValue(format, \"com.openharmony.testInt\", 1024); // 值类型为int32_t。\nOH_AVFormat_SetFloatValue(format, \"com.openharmony.testFloat\", 1.024); // 值类型为float。\nOH_AVFormat_SetStringValue(format, \"com.openharmony.testString\", \"string test\"); // 值类型为string，长度不超过256。\nuint8_t testData[] = {1, 2, 3};\nOH_AVFormat_SetBuffer(format, \"com.openharmony.testBuffer\", testData, sizeof(testData)); // 从API20开始支持值类型为uint8_t*。\n\nint ret = OH_AVMuxer_SetFormat(muxer, format); // 设置封装的format。\nif (ret != AV_ERR_OK) {\n   // 设置format失败，未找到有效待写入的key数据。\n}\nOH_AVFormat_Destroy(format); // 销毁。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加音频轨。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方法一：用OH_AVFormat_Create创建format"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int audioTrackId = -1;\nuint8_t *buffer = ...; // 编码config data，如果没有可以不传。\nsize_t size = ...;  // 编码config data的长度，根据实际情况配置。\nOH_AVFormat *formatAudio = OH_AVFormat_Create(); // 用OH_AVFormat_Create创建format，这里以封装44100Hz采样率、2声道的AAC-LC音频为例。\nOH_AVFormat_SetStringValue(formatAudio, OH_MD_KEY_CODEC_MIME, OH_AVCODEC_MIMETYPE_AUDIO_AAC); // 必填。\nOH_AVFormat_SetIntValue(formatAudio, OH_MD_KEY_AUD_SAMPLE_RATE, 44100); // 必填。\nOH_AVFormat_SetIntValue(formatAudio, OH_MD_KEY_AUD_CHANNEL_COUNT, 2); // 必填。\nOH_AVFormat_SetIntValue(formatAudio, OH_MD_KEY_PROFILE, AAC_PROFILE_LC); // 选填。\nOH_AVFormat_SetBuffer(formatAudio, OH_MD_KEY_CODEC_CONFIG, buffer, size); // 选填。\n\nint ret = OH_AVMuxer_AddTrack(muxer, &audioTrackId, formatAudio);\nif (ret != AV_ERR_OK || audioTrackId < 0) {\n    // 音频轨添加失败。\n}\nOH_AVFormat_Destroy(formatAudio); // 销毁。\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方法二：用OH_AVFormat_CreateAudioFormat创建format"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int audioTrackId = -1;\nuint8_t *buffer = ...; // 编码config data，如果没有可以不传。\nsize_t size = ...;  // 编码config data的长度，根据实际情况配置。\nOH_AVFormat *formatAudio = OH_AVFormat_CreateAudioFormat(OH_AVCODEC_MIMETYPE_AUDIO_AAC, 44100, 2);\nOH_AVFormat_SetIntValue(formatAudio, OH_MD_KEY_PROFILE, AAC_PROFILE_LC); // 选填。\nOH_AVFormat_SetBuffer(formatAudio, OH_MD_KEY_CODEC_CONFIG, buffer, size); // 选填。\n\nint ret = OH_AVMuxer_AddTrack(muxer, &audioTrackId, formatAudio);\nif (ret != AV_ERR_OK || audioTrackId < 0) {\n    // 音频轨添加失败。\n}\nOH_AVFormat_Destroy(formatAudio); // 销毁。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加视频轨。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(119274)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当开发者需要设置色彩信息时，必须保证OH_MD_KEY_COLOR_PRIMARIES、OH_MD_KEY_TRANSFER_CHARACTERISTICS、OH_MD_KEY_MATRIX_COEFFICIENTS三个key设置的值都在其各自的参数范围内，系统才会识别这是有效色彩信息数据。参数设置范围可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_colorprimary",
              children: "OH_ColorPrimary"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_transfercharacteristic",
              children: "OH_TransferCharacteristic"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_matrixcoefficient",
              children: "OH_MatrixCoefficient"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当开发者输入的色彩信息与视频码流的参数集中的色彩信息不一致时，系统以视频码流中的色彩信息为准。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方法一：用OH_AVFormat_Create创建format"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int videoTrackId = -1;\nuint8_t *buffer = ...; // 编码config data，如果没有可以不传。\nsize_t size = ...;  // 编码config data的长度，根据实际情况配置。\nOH_AVFormat *formatVideo = OH_AVFormat_Create();\nOH_AVFormat_SetStringValue(formatVideo, OH_MD_KEY_CODEC_MIME, OH_AVCODEC_MIMETYPE_VIDEO_AVC); // 必填。\nOH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_WIDTH, 1280); // 必填。\nOH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_HEIGHT, 720); // 必填。\nOH_AVFormat_SetBuffer(formatVideo, OH_MD_KEY_CODEC_CONFIG, buffer, size); // 选填。\nOH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_COLOR_PRIMARIES, OH_ColorPrimary::COLOR_PRIMARY_BT709); // 色彩信息，选填。\nOH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_TRANSFER_CHARACTERISTICS, OH_TransferCharacteristic::TRANSFER_CHARACTERISTIC_BT709); // 色彩信息，选填。\nOH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_MATRIX_COEFFICIENTS, OH_MatrixCoefficient::MATRIX_COEFFICIENT_BT709); // 色彩信息，选填。\nOH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_RANGE_FLAG, 1); // 色彩信息，选填。值为0代表limited range，值为1代表full range。\n\nint ret = OH_AVMuxer_AddTrack(muxer, &videoTrackId, formatVideo);\nif (ret != AV_ERR_OK || videoTrackId < 0) {\n    // 视频轨添加失败。\n}\nOH_AVFormat_Destroy(formatVideo); // 销毁。\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方法二：用OH_AVFormat_CreateVideoFormat创建format"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int videoTrackId = -1;\nuint8_t *buffer = ...; // 编码config data，如果没有可以不传。\nsize_t size = ...;  // 编码config data的长度，根据实际情况配置。\nOH_AVFormat *formatVideo = OH_AVFormat_CreateVideoFormat(OH_AVCODEC_MIMETYPE_VIDEO_AVC, 1280, 720);\nOH_AVFormat_SetBuffer(formatVideo, OH_MD_KEY_CODEC_CONFIG, buffer, size); // 选填。\nOH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_COLOR_PRIMARIES, OH_ColorPrimary::COLOR_PRIMARY_BT709); // 色彩信息，选填。\nOH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_TRANSFER_CHARACTERISTICS, OH_TransferCharacteristic::TRANSFER_CHARACTERISTIC_BT709); // 色彩信息，选填。\nOH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_MATRIX_COEFFICIENTS, OH_MatrixCoefficient::MATRIX_COEFFICIENT_BT709); // 色彩信息，选填。\nOH_AVFormat_SetIntValue(formatVideo, OH_MD_KEY_RANGE_FLAG, 1); // 色彩信息，选填。值为0代表limited range，值为1代表full range。\n\nint ret = OH_AVMuxer_AddTrack(muxer, &videoTrackId, formatVideo);\nif (ret != AV_ERR_OK || videoTrackId < 0) {\n    // 视频轨添加失败。\n}\nOH_AVFormat_Destroy(formatVideo); // 销毁。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加辅助轨。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(349860)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置OH_MD_KEY_TRACK_TYPE时，值为MEDIA_TYPE_AUXILIARY代表添加辅助轨。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置OH_MD_KEY_TRACK_REFERENCE_TYPE时，值必须为\"hint\"、\"cdsc\"、\"font\"、\"hind\"、\"vdep\"、\"vplx\"、\"subt\"、\"thmb\"、\"auxl\"、\"cdtg\"、\"shsc\"或\"aest\"其中一项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置OH_MD_KEY_TRACK_DESCRIPTION时，值必须为\"com.openharmony.\"开头且长度不超过256的字符串。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置OH_MD_KEY_REFERENCE_TRACK_IDS时，track id值必须大于等于0，且必须是已经存在的track id。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "添加音频辅助轨"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t audioAuxlTrackId = -1;\nstd::vector<int32_t> audioTrackIDsVector = {0}; // 根据实际情况设置被辅助音频轨的编号，可填写多个值。\nint32_t *audioAuxlTrackIDs = audioTrackIDsVector.data();\nOH_AVFormat *audioAuxlFormat = OH_AVFormat_Create();\nOH_AVFormat_SetStringValue(audioAuxlFormat, OH_MD_KEY_CODEC_MIME, OH_AVCODEC_MIMETYPE_AUDIO_AAC); // 必填。\nOH_AVFormat_SetIntValue(audioAuxlFormat, OH_MD_KEY_AUD_SAMPLE_RATE, 44100); // 必填。\nOH_AVFormat_SetIntValue(audioAuxlFormat, OH_MD_KEY_AUD_CHANNEL_COUNT, 2); // 必填。\nOH_AVFormat_SetIntValue(audioAuxlFormat, OH_MD_KEY_PROFILE, AAC_PROFILE_LC); // 选填。\nOH_AVFormat_SetIntValue(audioAuxlFormat, OH_MD_KEY_TRACK_TYPE, static_cast<int32_t>(OH_MediaType::MEDIA_TYPE_AUXILIARY)); // 必填。\nOH_AVFormat_SetStringValue(audioAuxlFormat, OH_MD_KEY_TRACK_REFERENCE_TYPE, \"auxl\"); // 必填。\nOH_AVFormat_SetStringValue(audioAuxlFormat, OH_MD_KEY_TRACK_DESCRIPTION, \"com.openharmony.audiomode.auxiliary\"); // 必填。\nOH_AVFormat_SetIntBuffer(audioAuxlFormat, OH_MD_KEY_REFERENCE_TRACK_IDS, audioAuxlTrackIDs, audioTrackIDsVector.size()); // 必填。\n\nint ret = OH_AVMuxer_AddTrack(muxer, &audioAuxlTrackId, audioAuxlFormat);\nif (ret != AV_ERR_OK || audioAuxlTrackId < 0) {\n    // 音频辅助轨添加失败。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "添加视频辅助轨"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t videoAuxlTrackId = -1;\nstd::vector<int32_t> videoTrackIDsVector = {0}; // 根据实际情况设置被辅助视频轨的编号，可填写多个值。\nint32_t *videoAuxlTrackIDs = videoTrackIDsVector.data();\nOH_AVFormat *videoAuxlFormat = OH_AVFormat_Create();\nOH_AVFormat_SetStringValue(videoAuxlFormat, OH_MD_KEY_CODEC_MIME, OH_AVCODEC_MIMETYPE_VIDEO_AVC); // 必填。\nOH_AVFormat_SetIntValue(videoAuxlFormat, OH_MD_KEY_WIDTH, 1280); // 必填。\nOH_AVFormat_SetIntValue(videoAuxlFormat, OH_MD_KEY_HEIGHT, 720); // 必填。\nOH_AVFormat_SetIntValue(videoAuxlFormat, OH_MD_KEY_TRACK_TYPE, static_cast<int32_t>(OH_MediaType::MEDIA_TYPE_AUXILIARY)); // 必填。\nOH_AVFormat_SetStringValue(videoAuxlFormat, OH_MD_KEY_TRACK_REFERENCE_TYPE, \"vdep\"); // 必填。\nOH_AVFormat_SetStringValue(videoAuxlFormat, OH_MD_KEY_TRACK_DESCRIPTION, \"com.openharmony.moviemode.depth\"); // 必填。\nOH_AVFormat_SetIntBuffer(videoAuxlFormat, OH_MD_KEY_REFERENCE_TRACK_IDS, videoAuxlTrackIDs, videoTrackIDsVector.size()); // 必填。\n\nint ret = OH_AVMuxer_AddTrack(muxer, &videoAuxlTrackId, videoAuxlFormat);\nif (ret != AV_ERR_OK || videoAuxlTrackId < 0) {\n    // 视频辅助轨添加失败。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加封面轨。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方法一：用OH_AVFormat_Create创建format"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int coverTrackId = -1;\nOH_AVFormat *formatCover = OH_AVFormat_Create();\nOH_AVFormat_SetStringValue(formatCover, OH_MD_KEY_CODEC_MIME, OH_AVCODEC_MIMETYPE_IMAGE_JPG);\nOH_AVFormat_SetIntValue(formatCover, OH_MD_KEY_WIDTH, 1280);\nOH_AVFormat_SetIntValue(formatCover, OH_MD_KEY_HEIGHT, 720);\n\nint ret = OH_AVMuxer_AddTrack(muxer, &coverTrackId, formatCover);\nif (ret != AV_ERR_OK || coverTrackId < 0) {\n    // 添加封面失败。\n}\nOH_AVFormat_Destroy(formatCover); // 销毁。\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方法二：用OH_AVFormat_CreateVideoFormat创建format"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int coverTrackId = -1;\nOH_AVFormat *formatCover = OH_AVFormat_CreateVideoFormat(OH_AVCODEC_MIMETYPE_IMAGE_JPG, 1280, 720);\n\nint ret = OH_AVMuxer_AddTrack(muxer, &coverTrackId, formatCover);\nif (ret != AV_ERR_OK || coverTrackId < 0) {\n    // 添加封面失败。\n}\nOH_AVFormat_Destroy(formatCover); // 销毁。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AVMuxer_Start()开始封装。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 调用start，写封装文件头。start后，不能设置媒体参数、不能添加音视频轨。\nif (OH_AVMuxer_Start(muxer) != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AVMuxer_WriteSampleBuffer()，写入封装数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "封装数据包括视频、音频、封面等数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// start后，才能开始写入数据。\nint size = ...;\nOH_AVBuffer *sample = OH_AVBuffer_Create(size); // 创建AVBuffer。\n// 通过OH_AVBuffer_GetAddr(sample)往sampleBuffer里写入数据参考OH_AVBuffer的使用方法。\n// 封装封面，必须一次写完一张图片。\n\n// 创建buffer info。\nOH_AVCodecBufferAttr info = {0};\ninfo.pts = ...; // 当前数据的开始播放的时间，单位微秒，相对时间。\ninfo.size = size; // 当前数据的长度。\ninfo.offset = 0; // 偏移，一般为0。\ninfo.flags |= AVCODEC_BUFFER_FLAGS_SYNC_FRAME; // 当前数据的标志。具体参考OH_AVCodecBufferFlags。\ninfo.flags |= AVCODEC_BUFFER_FLAGS_CODEC_DATA; // 当annex-b格式的avc包含codec config的标志。\nOH_AVBuffer_SetBufferAttr(sample, &info); // 设置buffer的属性。\nint trackId = audioTrackId; // 选择写的音视频轨。\n\nint ret = OH_AVMuxer_WriteSampleBuffer(muxer, trackId, sample);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AVMuxer_Stop()，停止封装。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 调用stop，写封装文件尾。stop后不能写入媒体数据。\nif (OH_AVMuxer_Stop(muxer) != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AVMuxer_Destroy()销毁实例，释放资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注意不能重复销毁，否则将会导致程序崩溃。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (OH_AVMuxer_Destroy(muxer) != AV_ERR_OK) {\n    // 异常处理。\n}\nmuxer = NULL;\nclose(fd); // 关闭文件描述符。\n"
          })
        }), "\n"]
      }), "\n"]
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
504708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
266352(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
119274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
349860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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