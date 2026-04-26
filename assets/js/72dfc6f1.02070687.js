"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["819343"], {
308191(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_synchronous_audio_encoding_synchronous_audio_encoding_md_72d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-synchronous-audio-encoding-synchronous-audio-encoding-md-72d.json
var site_docs_avcodec_kit_audio_video_codec_synchronous_audio_encoding_synchronous_audio_encoding_md_72d_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/synchronous-audio-encoding/synchronous-audio-encoding","title":"音频编码同步模式","description":"从API version 20开始，支持音频编码同步模式。","source":"@site/docs/avcodec-kit/audio-video-codec/synchronous-audio-encoding/synchronous-audio-encoding.md","sourceDirName":"avcodec-kit/audio-video-codec/synchronous-audio-encoding","slug":"/avcodec-kit/audio-video-codec/synchronous-audio-encoding/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/synchronous-audio-encoding/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"音频编码同步模式","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/synchronous-audio-encoding","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"音频编码","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audio-encoding/"},"next":{"title":"音频解码","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audio-decoding/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/synchronous-audio-encoding/synchronous-audio-encoding.md


const frontMatter = {
	title: '音频编码同步模式',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/synchronous-audio-encoding',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '音频编码同步模式';

const assets = {

};



const toc = [{
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "在CMake脚本中链接动态库",
  "id": "在cmake脚本中链接动态库",
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
        id: "音频编码同步模式",
        children: "音频编码同步模式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持音频编码同步模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用本模块的Native API接口，完成音频编码，即将音频PCM编码压缩成不同的格式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/BasicFeature/Media/AVCodec",
        children: "示例工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口不限制PCM数据的来源。开发者可以调用麦克风录制获取，也可以导入编辑后的PCM数据。通过音频编码，输出对应格式的码流，最后封装为目标格式文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持的编码能力请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/avcodec-support-formats#%E9%9F%B3%E9%A2%91%E7%BC%96%E7%A0%81",
        children: "AVCodec支持的格式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "适用场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常推荐使用异步模式，异步模式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/audio-encoding",
        children: "音频编码"
      }), "。若需要主动请求buffer去编码PCM，则可以使用同步模式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频录制"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过录制传入PCM，然后编码成对应格式的码流，最后封装成所需格式的文件。具体封装方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/file-muxing-demuxing/audio-video-muxer",
            children: "媒体数据封装"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频编辑"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["编辑PCM后导出音频文件的场景，需要编码成对应音频格式，最后封装成所需格式的文件。具体封装方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/file-muxing-demuxing/audio-video-muxer",
            children: "媒体数据封装"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(135652)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AAC编码器默认采用的VBR可变码率模式，这可能导致与预期码率有偏差。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AAC编码器默认输出携带ADTS头部，帧数据的前7字节为ADTS头部。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-audiocodec-h/capi-native-avcodec-audiocodec-h",
        children: "AudioCodec"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例代码，完成音频编码的全流程，包括：创建编码器、设置编码参数（采样率/码率/声道数等）、开始/刷新/重置/销毁资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发过程中，开发者应按一定顺序调用方法，执行对应操作，否则系统可能会抛出异常或生成其他未定义的行为。具体顺序可参考下列开发步骤及对应说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "音频编解码同步模式调用关系图如下所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "虚线表示可选。音频编码不涉及解密，无需调用OH_AudioCodec_SetDecryptionConfig。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实线表示必选。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(755978)/* ["default"] */.A) + "",
        width: "1975",
        height: "1290"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在cmake脚本中链接动态库",
      children: "在CMake脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libnative_media_codecbase.so)\ntarget_link_libraries(sample PUBLIC libnative_media_core.so)\ntarget_link_libraries(sample PUBLIC libnative_media_acodec.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(958704)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述'sample'字样仅为示例，此处由开发者根据实际工程目录自定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件和命名空间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/native_avcodec_audiocodec.h>\n#include <multimedia/native_audio_channel_layout.h>\n#include <multimedia/player_framework/native_avcapability.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <multimedia/player_framework/native_avbuffer.h>\n\n// c++标准库命名空间。\nusing namespace std;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建编码器实例对象，OH_AVCodec *为编码器实例指针。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用可以通过媒体类型或编解码器名称创建编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方法一：通过Mimetype创建编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过Mimetype创建编码器，这里示例创建的是AAC编码器，第二个参数设置为true表示当前是编码。\nOH_AVCodec *audioEnc_ = OH_AudioCodec_CreateByMime(OH_AVCODEC_MIMETYPE_AUDIO_AAC, true);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方法二：通过codec name创建编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过codec name创建编码器。\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_AUDIO_AAC, true);\nconst char *name = OH_AVCapability_GetName(capability);\nOH_AVCodec *audioEnc_ = OH_AudioCodec_CreateByName(name);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Configure配置编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置选项key值说明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(803709)/* ["default"] */.A) + "",
            width: "1375",
            height: "241"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各音频编码类型参数范围说明："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(915741)/* ["default"] */.A) + "",
            width: "1990",
            height: "391"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，对44100Hz采样率、2声道立体声、SAMPLE_S16LE采样格式的PCM音频，以32000bps的码率进行AAC编码的调用流程如下："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   OH_AVErrCode ret;\n   // 配置音频采样率（必须）\n   constexpr uint32_t DEFAULT_SAMPLERATE = 44100;\n   // 配置音频码率（必须）\n   constexpr uint64_t DEFAULT_BITRATE = 32000;\n   // 配置音频声道数（必须）\n   constexpr uint32_t DEFAULT_CHANNEL_COUNT = 2;\n   // 配置音频位深（必须）\n   constexpr OH_BitsPerSample SAMPLE_FORMAT = OH_BitsPerSample::SAMPLE_S16LE;\n   // 配置AAC profile（可选，默认值：AAC_PROFILE_LC，其他可选值：AAC_PROFILE_HE、AAC_PROFILE_HE_V2）\n   constexpr int32_t AAC_PROFILE = OH_AACProfile::AAC_PROFILE_LC;\n   OH_AVFormat *format = OH_AVFormat_Create();\n   // 写入format\n   OH_AVFormat_SetIntValue(format,OH_MD_KEY_AUD_CHANNEL_COUNT, DEFAULT_CHANNEL_COUNT);\n   OH_AVFormat_SetIntValue(format,OH_MD_KEY_AUD_SAMPLE_RATE, DEFAULT_SAMPLERATE);\n   OH_AVFormat_SetLongValue(format,OH_MD_KEY_BITRATE, DEFAULT_BITRATE);\n   OH_AVFormat_SetIntValue(format, OH_MD_KEY_AUDIO_SAMPLE_FORMAT, SAMPLE_FORMAT);\n   OH_AVFormat_SetLongValue(format,OH_MD_KEY_CHANNEL_LAYOUT, CHANNEL_LAYOUT);\n   OH_AVFormat_SetIntValue(format, OH_MD_KEY_PROFILE, AAC_PROFILE);\n   OH_AVFormat_SetIntValue(format, OH_MD_KEY_ENABLE_SYNC_MODE, 1); // 同步模式配置。\n   // 配置编码器\n   ret = OH_AudioCodec_Configure(audioEnc_, format);\n   if (ret != AV_ERR_OK) {\n       // 异常处理\n   }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FLAC编码调用示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_AVErrCode ret;\n// 配置音频采样率（必须）。\nconstexpr uint32_t DEFAULT_SAMPLERATE = 44100;\n// 配置音频码率（必须）。\nconstexpr uint64_t DEFAULT_BITRATE = 261000;\n// 配置音频声道数（必须）。\nconstexpr uint32_t DEFAULT_CHANNEL_COUNT = 2;\n// 配置音频声道布局（必须）。\n// 值为CH_LAYOUT_MONO、CH_LAYOUT_STEREO、CH_LAYOUT_SURROUND、CH_LAYOUT_QUAD、CH_LAYOUT_5POINT0、CH_LAYOUT_5POINT1、CH_LAYOUT_6POINT1或CH_LAYOUT_7POINT1其中一项。\nconstexpr OH_AudioChannelLayout CHANNEL_LAYOUT = OH_AudioChannelLayout::CH_LAYOUT_STEREO;\n// 配置音频位深（必须） FLAC只有SAMPLE_S16LE和SAMPLE_S32LE。\nconstexpr OH_BitsPerSample SAMPLE_FORMAT = OH_BitsPerSample::SAMPLE_S32LE;\n// 配置音频compliance level（默认值0，取值范围[-2,2]）。\nconstexpr int32_t COMPLIANCE_LEVEL = 0;\n\nOH_AVFormat *format = OH_AVFormat_Create();\n// 写入format。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_CHANNEL_COUNT, DEFAULT_CHANNEL_COUNT);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUD_SAMPLE_RATE, DEFAULT_SAMPLERATE);\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, DEFAULT_BITRATE);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_AUDIO_SAMPLE_FORMAT, SAMPLE_FORMAT);\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_CHANNEL_LAYOUT, CHANNEL_LAYOUT);\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_COMPLIANCE_LEVEL, COMPLIANCE_LEVEL);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_ENABLE_SYNC_MODE, 1); // 同步模式配置。\n// 配置编码器。\nret = OH_AudioCodec_Configure(audioEnc_, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Prepare()，编码器就绪。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVErrCode ret = OH_AudioCodec_Prepare(audioEnc_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Start()启动编码器，进入运行态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <fstream>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ifstream inputFile_;\nofstream outFile_;\n\n// 根据实际使用情况填写输入文件路径。\nconst char* inputFilePath = \"/\";\n// 根据实际使用情况填写输出文件路径。\nconst char* outputFilePath = \"/\";\n// 打开待编码二进制文件路径（此处以输入为PCM文件为例）。\ninputFile_.open(inputFilePath, ios::in | ios::binary);\n// 配置编码文件输出路径（此处以输出为编码码流文件为例，并非可播放的音频文件，可播放的音频文件需要音频码流封装到容器内生成）。\noutFile_.open(outputFilePath, ios::out | ios::binary);\n// 开始编码。\nOH_AVErrCode ret = OH_AudioCodec_Start(audioEnc_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步模式调用，写入待编码的PCM，获取编码输出的音频帧。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码中，每次输入的采样点数SAMPLES_PER_FRAME取值方法如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AAC LC编码每帧包含1024个PCM样点，建议单次输入1024个样点的数据量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HE-AAC编码每帧包含2048个PCM样点，建议单次输入2048个样点的数据量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FLAC需要根据如下表格进行设置。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "采样率"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "样点数"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "8000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "576"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "16000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1152"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "22050"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2304"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "24000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2304"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "32000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2304"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "44100"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4608"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "48000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "4608"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "88200"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "8192"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "96000"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "8192"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单次编码输入的数据量（单位：字节）为：SAMPLES_PER_FRAME * 声道数 * 单个采样点的占用字节。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t SAMPLES_PER_FRAME = 1024;\n// AAC LC编码一帧包含1024采样点，2声道，输入数据为S16LE，16比特数据，占用2字节。\nint32_t inputFrameBytes = SAMPLES_PER_FRAME * 2 * 2;\nbool inputFinished = false;\nOH_AVErrCode ret;\nOH_AVCodecBufferAttr attr;\n\nfor (;;) {\n    uint32_t index = 0;\n    if (!inputFinished) {\n        ret = OH_AudioCodec_QueryInputBuffer(audioEnc_, &index, 20000); // 20000us\n        if (ret == AV_ERR_TRY_AGAIN_LATER) {\n            continue;\n        }\n        if (ret != AV_ERR_OK) {\n            // 异常处理。\n            break;\n        }\n        OH_AVBuffer *inputBuf = OH_AudioCodec_GetInputBuffer(audioEnc_, index);\n        if (inputBuf == nullptr) {\n            // 异常处理。\n            break;\n        }\n        memset(&attr, 0, sizeof(attr));\n        if (!inputFile_.eof()) {\n            inputFile_.read((char *)OH_AVBuffer_GetAddr(inputBuf), inputFrameBytes);\n            int32_t readSize = inputFile_.gcount();\n            attr.size = readSize;\n            attr.flags = readSize != 0 ? AVCODEC_BUFFER_FLAGS_NONE : AVCODEC_BUFFER_FLAGS_EOS;\n        } else {\n            inputFinished = true;\n            attr.size = 0;\n            attr.flags = AVCODEC_BUFFER_FLAGS_EOS;\n        }\n        if (OH_AVBuffer_SetBufferAttr(inputBuf, &attr) != AV_ERR_OK) {\n            // 异常处理。\n        }\n        if (OH_AudioCodec_PushInputBuffer(audioEnc_, index) != AV_ERR_OK) {\n            // 异常处理。\n        }\n    }\n    // 当输入的数据量可以编码出多帧数据时，需要多次调用获取输出缓冲区，才能取完编码后的数据。\n    ret = OH_AudioCodec_QueryOutputBuffer(audioEnc_, &index, 20000); // 20000us\n    if (ret == AV_ERR_TRY_AGAIN_LATER) {\n        // 超时，可能输入的数据不足以编码出一帧，或者超时时间设置过短。\n        continue;\n    }\n    if (ret != AV_ERR_OK) {\n        // 异常处理。\n        break;\n    }\n    OH_AVBuffer *outputBuf = OH_AudioCodec_GetOutputBuffer(audioEnc_, index);\n    if (outputBuf == nullptr) {\n        // 异常处理。\n        break;\n    }\n    if (OH_AVBuffer_GetBufferAttr(outputBuf, &attr) != AV_ERR_OK) {\n        // 异常处理。\n        break;\n    }\n    if (attr.flags & AVCODEC_BUFFER_FLAGS_EOS) {\n        // 输出结束。\n        break;\n    }\n    // 这里示例仅将数据写入文件记录。假如需要封装成音频文件，可参考媒体数据封装，调用OH_AVMuxer_WriteSampleBuffer封装数据。\n    outFile_.write(reinterpret_cast<char *>(OH_AVBuffer_GetAddr(outputBuf)), attr.size);\n    OH_AudioCodec_FreeOutputBuffer(audioEnc_, index);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在上方案例中，attr.flags表示缓冲区标记的类别。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结束时需要将flags标识为AVCODEC_BUFFER_FLAGS_EOS。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "枚举值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AVCODEC_BUFFER_FLAGS_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示为普通帧。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AVCODEC_BUFFER_FLAGS_EOS"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示缓冲区是流结束帧。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AVCODEC_BUFFER_FLAGS_CODEC_DATA"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示缓冲区包含编解码特定数据。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_AudioCodec_Reset()重置编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Reset()后，编码器回到初始化状态，重置前获取到的输入/输出buffer都无法继续使用，需先调用OH_AudioCodec_Configure()重新配置，再调用OH_AudioCodec_Start()重新开始编码。启动后重新获取输入/输出buffer。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 重置编码器。\nOH_AVErrCode ret = OH_AudioCodec_Reset(audioEnc_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 重新配置编码器参数。\nret = OH_AudioCodec_Configure(audioEnc_, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_AudioCodec_Stop()停止编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止后，可以通过调用OH_AudioCodec_Start()重新进入已启动状态（started）。停止前获取到的输入/输出buffer都无法继续使用，需要在启动后重新获取输入/输出buffer。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 停止编码器。\nOH_AVErrCode ret = OH_AudioCodec_Stop(audioEnc_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_AudioCodec_Destroy()销毁编码器实例，释放资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(639098)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "禁止重复销毁编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 调用OH_AudioCodec_Destroy，销毁编码器。\nOH_AVErrCode ret = OH_AudioCodec_Destroy(audioEnc_);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n} else {\n    audioEnc_ = NULL; // 不可重复destroy。\n}\n"
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
755978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478543-dcc3d5a58c7d3932562a4a73679c3f37.png");

},
915741(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958542-664cdab845e9c810ffd3501589bc39ba.png");

},
803709(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438587-7f224e335b6ace50cf394ac52298cff6.png");

},
958704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
135652(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
639098(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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