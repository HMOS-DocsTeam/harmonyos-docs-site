"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["343480"], {
480132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_c_media_playback_c_using_ndk_lpp_for_playback_using_ndk_lpp_for_playback_md_799_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-c-media-playback-c-using-ndk-lpp-for-playback-using-ndk-lpp-for-playback-md-799.json
var site_docs_media_kit_media_kit_dev_c_media_playback_c_using_ndk_lpp_for_playback_using_ndk_lpp_for_playback_md_799_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--c/media-playback-c/using-ndk-lpp-for-playback/using-ndk-lpp-for-playback","title":"使用LPP播放器播放视频 (C/C++)","description":"从API version 20开始，使用LPP（low power player）播放器可以通过低功耗实现从媒体源到渲染的视频通路能力。本指南通过播放本地视频的示例，讲解如何使用LowPowerPlayer播放视频。","source":"@site/docs/media-kit/media-kit-dev--c/media-playback-c/using-ndk-lpp-for-playback/using-ndk-lpp-for-playback.md","sourceDirName":"media-kit/media-kit-dev--c/media-playback-c/using-ndk-lpp-for-playback","slug":"/media-kit/media-kit-dev--c/media-playback-c/using-ndk-lpp-for-playback/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-playback-c/using-ndk-lpp-for-playback/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"使用LPP播放器播放视频 (C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ndk-lpp-for-playback","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVPlayer播放视频(C/C++)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-playback-c/using-ndk-avplayer-for-video-playback/"},"next":{"title":"使用AVRecorder录制音频(C/C++)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/using-ndk-avrecorder-for-audio-recording/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--c/media-playback-c/using-ndk-lpp-for-playback/using-ndk-lpp-for-playback.md


const frontMatter = {
	title: '使用LPP播放器播放视频 (C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ndk-lpp-for-playback',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用LPP播放器播放视频 (C/C++)';

const assets = {

};



const toc = [{
  "value": "开发建议",
  "id": "开发建议",
  "level": 2
}, {
  "value": "开发步骤及注意事项",
  "id": "开发步骤及注意事项",
  "level": 2
}, {
  "value": "运行完整示例",
  "id": "运行完整示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "使用lpp播放器播放视频-cc",
        children: "使用LPP播放器播放视频 (C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，使用LPP（low power player）播放器可以通过低功耗实现从媒体源到渲染的视频通路能力。本指南通过播放本地视频的示例，讲解如何使用LowPowerPlayer播放视频。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(339105)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LowPowerPlayer播放器不支持纯视频和纯音频播放。纯音频低功耗播放请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-playback/power-saving-for-playback",
        children: "低功耗音频播放"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放流程包含：创建解封装器、创建播放器、设置回调监听函数、配置播放参数、播放控制（播放/暂停/继续/倍速/音量/停止/重置）、销毁播放器实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 播放状态变化示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(83866)/* ["default"] */.A) + "",
        width: "1199",
        height: "876"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播放流程包含：创建（created）、初始化（initialized）、就绪（ready）、解码（decoding）和渲染（rendering）五个阶段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用通过调用CreateByMime初始化创建解码器实例。完成解码器参数配置Configure，切换到initialized（已初始化）状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在初始化完成的状态下，完成解码器资源预加载（Prepare），视频进入准备就绪状态（ready）。然后启动解码流程（StartDecode），切换到解码（decoding）状态，触发首帧渲染（RenderFirstFrame）。最后启动渲染（StartRender）流程，切换到渲染（rendering）状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在渲染过程中，遇到暂停（Pause）会切换到paused状态，此时解码与渲染被临时挂起，资源未释放。当恢复渲染（Resume）时，视频将恢复并回到渲染（rendering）状态。当遇到停止（Stop）时，会切换到stopped状态，该状态代表解码器已停止工作，但实例仍存在。当渲染过程中流结束（EoS）时，会切换到eos状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在播放过程中，如果遇到错误（OnError），会出现异常，需要重置或进入释放阶段（released）销毁解码器实例，释放所有资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当播放处于ready/decoding/rendering/paused/stopped状态时，播放引擎此时处于工作状态会占用较多的系统资源。当暂停使用播放器时，可调用reset或destroy回收资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发建议",
      children: "开发建议"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前指导仅介绍如何实现媒体资源播放，在应用开发过程中可能会涉及后台播放、播放冲突等情况，请根据实际需要参考以下说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由于硬件差异，LPP播放器能力仅在部分手机上支持。从API version 21开始，建议通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-avsink-base-h/capi-lowpower-avsink-base-h#oh_lowpoweravsink_getcapability",
            children: "OH_LowPowerAVSink_GetCapability"
          }), "查询LPP播放器能力是否支持。如果不支持，使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/avcodec-kit-intro",
            children: "AVCodec"
          }), "能力实现播放。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当应用在播放过程中时，播放的媒体数据涉及音频，根据系统音频管理策略（参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-session/audio-playback-concurrency#%E5%A4%84%E7%90%86%E9%9F%B3%E9%A2%91%E7%84%A6%E7%82%B9%E5%8F%98%E5%8C%96",
            children: "处理音频焦点变化"
          }), "事件）可知这会被其他应用打断，建议通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosinkcallback_setinterruptlistener",
            children: "OH_LowPowerAudioSinkCallback_SetInterruptListener"
          }), "主动监听音频打断事件，根据其回调参数提示做出相应的处理，避免出现应用状态与预期效果不一致的问题。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当设备同时连接多个音频输出设备时，建议通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosinkcallback_setdevicechangelistener",
            children: "OH_LowPowerAudioSinkCallback_SetDeviceChangeListener"
          }), "主动监听音频输出设备改变事件，并做出相应处理。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当应用在执行过程中，可能出现系统内部异常。如网络异常、内存不足、媒体服务死亡不可用等，建议通过 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosinkcallback_seterrorlistener",
            children: "OH_LowPowerAudioSinkCallback_SetErrorListener"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosinkcallback_seterrorlistener",
            children: "OH_LowPowerVideoSinkCallback_SetErrorListener"
          }), "对应接口设置错误监听回调函数，根据不同错误类型和错误信息，做出相应处理，避免出现播放异常。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在播放过程中，播放器需要的数据要通过 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avdemuxer-h/capi-native-avdemuxer-h#oh_avdemuxer_readsamplebuffer",
            children: "OH_AVDemuxer_ReadSampleBuffer"
          }), "接口获取指定轨道的buffer，并通过 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-avsink-base-h/capi-lowpower-avsink-base-h#oh_avsamplesbuffer_appendonebuffer",
            children: "OH_AVSamplesBuffer_AppendOneBuffer"
          }), "进行多个buffer的封装，然后再通过 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosink_returnsamples",
            children: "OH_LowPowerAudioSink_ReturnSamples"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_returnsamples",
            children: "OH_LowPowerVideoSink_ReturnSamples"
          }), "通知播放器进行消费，当播放器需要数据时，会触发通过 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosinkcallback_setdataneededlistener",
            children: "OH_LowPowerAudioSinkCallback_SetDataNeededListener"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosinkcallback_setdataneededlistener",
            children: "OH_LowPowerVideoSinkCallback_SetDataNeededListener"
          }), "接口注册的回调函数。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要注意函数的调用时机。根据状态示意图和详细的接口文档进行合理调用。在程序执行完成后，调用OH_***_Create方法的同时必须调用对应的OH_***_Destroy方法，进行资源释放。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户在注册回调函数时，可在最后一个参数void *userData中来配置自定义数据，以便在回调函数中执行某些设置（如状态改变等）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其他回调函数："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosinkcallback_setpositionupdatelistener",
            children: "OH_LowPowerAudioSinkCallback_SetPositionUpdateListener"
          }), "：可获取播放进度。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosinkcallback_seteoslistener",
            children: "OH_LowPowerAudioSinkCallback_SetEosListener"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosinkcallback_seteoslistener",
            children: "OH_LowPowerVideoSinkCallback_SetEosListener"
          }), "：播放结束触发。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosinkcallback_setrenderstartlistener",
            children: "OH_LowPowerVideoSinkCallback_SetRenderStartListener"
          }), "：视频开始渲染。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_settargetstartframe",
            children: "OH_LowPowerVideoSink_SetTargetStartFrame"
          }), "：到达目标帧。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosinkcallback_setstreamchangedlistener",
            children: "OH_LowPowerVideoSinkCallback_SetStreamChangedListener"
          }), "：视频流切换。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosinkcallback_setfirstframedecodedlistener",
            children: "OH_LowPowerVideoSinkCallback_SetFirstFrameDecodedListener"
          }), "：首帧视频渲染完毕。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在CMake脚本中链接动态库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC liblowpower_avsink.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "头文件引入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"multimedia/player_framework/lowpower_audio_sink_base.h\"\n#include \"multimedia/player_framework/lowpower_audio_sink.h\"\n#include \"multimedia/player_framework/lowpower_video_sink.h\"\n#include \"multimedia/player_framework/lowpower_video_sink_base.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者使用系统日志能力时，需引入如下头文件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <hilog/log.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并需要在CMake脚本中链接如下动态库："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libhilog_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用该模块时，需要链接的库如下所示：解封装、基础解码、显示渲染等能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "set(BASE_LIBRARY\n    libnative_media_codecbase.so libnative_media_core.so libnative_media_vdec.so libnative_window.so\n    libnative_media_venc.so libnative_media_acodec.so libnative_media_avdemuxer.so libnative_media_avsource.so\n    libohaudio.so\n)\ntarget_link_libraries(sample PUBLIC ${BASE_LIBRARY})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者通过引入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-base-h/capi-lowpower-audio-sink-base-h",
        children: "lowpower_audio_sink_base.h"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h",
        children: "lowpower_audio_sink.h"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h",
        children: "lowpower_video_sink.h"
      }), "、 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-base-h/capi-lowpower-video-sink-base-h",
        children: "lowpower_video_sink_base.h"
      }), " 头文件，使用音视频播放相关API。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建播放器。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据实际情况，应用可使用自研解封装或可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avsource-h/capi-native-avsource-h#oh_avsource_createwithdatasource",
            children: "OH_AVSource_CreateWithDataSource()"
          }), "/", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avsource-h/capi-native-avsource-h#oh_avsource_createwithfd",
            children: "OH_AVSource_CreateWithFD()"
          }), "/", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avsource-h/capi-native-avsource-h#oh_avsource_createwithuri",
            children: "OH_AVSource_CreateWithURI()"
          }), "来创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-avsource-oh-avsource/capi-avsource-oh-avsource",
            children: "OH_AVSource"
          }), " ，通过OH_AVSource调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avdemuxer-h/capi-native-avdemuxer-h#oh_avdemuxer_createwithsource",
            children: "OH_AVDemuxer_CreateWithSource()"
          }), "，创建解封装器，获取视频的元信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "source_ = OH_AVSource_CreateWithFD(info.inputFd, info.inputFileOffset, info.inputFileSize);\ndemuxer_ = OH_AVDemuxer_CreateWithSource(source_);\nint32_t ret = GetTrackInfo(sourceFormat, info);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据视频元信息，调用 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosink_createbymime",
            children: "OH_LowPowerAudioSink_CreateByMime"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_createbymime",
            children: "OH_LowPowerVideoSink_CreateByMime"
          }), "来创建播放器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "lppVideoStreamer_ = OH_LowPowerVideoSink_CreateByMime(codecMime.c_str());\nlppAudioStreamer_ = OH_LowPowerAudioSink_CreateByMime(codecMime.c_str());\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置回调监听函数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosinkcallback_create",
            children: "OH_LowPowerAudioSinkCallback_Create"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosinkcallback_create",
            children: "OH_LowPowerVideoSinkCallback_Create"
          }), "创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-struct/api-lowpoweraudiosink-oh-lowpoweraudiosinkcallback/api-lowpoweraudiosink-oh-lowpoweraudiosinkcallback",
            children: "OH_LowPowerAudioSinkCallback"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-struct/api-lowpowervideosink-oh-lowpowervideosinkcallback/api-lowpowervideosink-oh-lowpowervideosinkcallback",
            children: "OH_LowPowerVideoSinkCallback"
          }), "的回调函数的整合，通过setListener函数向该结构体添加对应的回调函数，完成registerCallback的一次性注册。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "lppAudioStreamerCallback_ = OH_LowPowerAudioSinkCallback_Create();\nOH_LowPowerAudioSinkCallback_SetDataNeededListener(lppAudioStreamerCallback_, LppCallback::OnDataNeeded, lppUserData);\nOH_LowPowerAudioSinkCallback_SetPositionUpdateListener(lppAudioStreamerCallback_, LppCallback::OnPositionUpdated, lppUserData);\nret = OH_LowPowerAudioSink_RegisterCallback(lppAudioStreamer_, lppAudioStreamerCallback_);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置播放器。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据之前通过解封装获得的元信息，创建并配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-struct/capi-core-oh-avformat/capi-core-oh-avformat",
            children: "OH_AVFormat"
          }), "。通过configure接口 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosink_configure",
            children: "OH_LowPowerAudioSink_Configure"
          }), " / ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_configure",
            children: "OH_LowPowerVideoSink_Configure"
          }), "进行播放器的配置，详细参数可参考示例代码。视频流需要使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_setvideosurface",
            children: "OH_LowPowerVideoSink_SetVideoSurface"
          }), "接口来设置显示窗口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVFormat *format = OH_AVFormat_Create();\n \nOH_AVFormat_SetIntValue(format, OH_MD_KEY_WIDTH, sampleInfo.videoWidth);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_HEIGHT, sampleInfo.videoHeight);\nOH_AVFormat_SetDoubleValue(format, OH_MD_KEY_FRAME_RATE, sampleInfo.frameRate);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_PIXEL_FORMAT, sampleInfo.pixelFormat);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_ROTATION, sampleInfo.rotation);\n \nint ret = OH_LowPowerVideoSink_Configure(lppVideoStreamer_, format);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备播放。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["准备播放前，需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_setsyncaudiosink",
            children: "OH_LowPowerVideoSink_SetSyncAudioSink"
          }), "设置音画同步绑定。然后调用prepare方法，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosink_prepare",
            children: "OH_LowPowerAudioSink_Prepare"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_prepare",
            children: "OH_LowPowerVideoSink_Prepare"
          }), "进入'准备'阶段。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_LowPowerVideoSink_Prepare(lppVideoStreamer_);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开始播放。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosink_start",
            children: "OH_LowPowerAudioSink_Start"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_startrenderer",
            children: "OH_LowPowerVideoSink_StartRenderer"
          }), "开始渲染。视频流需要在渲染开始前调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_startdecoder",
            children: "OH_LowPowerVideoSink_StartDecoder"
          }), "开始解码或调用 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_renderfirstframe",
            children: "OH_LowPowerVideoSink_RenderFirstFrame"
          }), "开始解码并送显首帧'接口'进入解码。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_LowPowerVideoSink_StartDecoder(lppVideoStreamer_);\nOH_LowPowerVideoSink_StartRenderer(lppVideoStreamer_);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "播放控制（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["暂停：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosink_pause",
            children: "OH_LowPowerAudioSink_Pause"
          }), "或 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_pause",
            children: "OH_LowPowerVideoSink_Pause"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["恢复播放：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosink_resume",
            children: "OH_LowPowerAudioSink_Resume"
          }), "或 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_resume",
            children: "OH_LowPowerVideoSink_Resume"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["停止：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosink_stop",
            children: "OH_LowPowerAudioSink_Stop"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_stop",
            children: "OH_LowPowerVideoSink_Stop"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置声音：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosink_setvolume",
            children: "OH_LowPowerAudioSink_SetVolume"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置播放速度：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosink_setplaybackspeed",
            children: "OH_LowPowerAudioSink_SetPlaybackSpeed"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_setplaybackspeed",
            children: "OH_LowPowerVideoSink_SetPlaybackSpeed"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["清空缓存数据，可用于seek操作：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosink_flush",
            children: "OH_LowPowerAudioSink_Flush"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_flush",
            children: "OH_LowPowerVideoSink_Flush"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "更换资源（可选）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosink_reset",
            children: "OH_LowPowerAudioSink_Reset"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_reset",
            children: "OH_LowPowerVideoSink_Reset"
          }), "重置资源，允许更换资源，重新配置播放器。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "退出播放。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-audio-sink-h/capi-lowpower-audio-sink-h#oh_lowpoweraudiosink_destroy",
            children: "OH_LowPowerAudioSink_Destroy"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-lowpower-video-sink-h/capi-lowpower-video-sink-h#oh_lowpowervideosink_destroy",
            children: "OH_LowPowerVideoSink_Destroy"
          }), "销毁实例，AVPlayer进入'RELEASED'状态，退出播放。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行完整示例",
      children: "运行完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新建工程。下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/MediaKit/LowPowerAVSInk/lowPowerAVSinkSample",
            children: "示例工程"
          }), "，并将示例工程的以下资源复制到对应目录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "lpp_demo-sample/entry/src/main/\n├── cpp                                # Native层\n│   ├── capbilities                    # 能力接口和实现\n│   │   ├── include                    # 能力接口\n│   │   ├── demuxer.cpp                # 解封装实现\n│   │   ├── lpp_audio_streamer.cpp     # 低功耗音频流实现\n│   │   └── lpp_video_streamer.cpp     # 低功耗视频流实现\n│   ├── common                         # 公共模块\n│   │   ├── dfx                        # 日志\n│   │   ├── lpp_callback.cpp           # 低功耗音视频回调实现\n│   │   ├── lpp_callback.h             # 低功耗音视频回调接口\n│   │   └── sample_info.h              # 功能实现公共类\n│   ├── render                         # 送显模块接口和实现 * window player设置\n│   │   ├── include                    # 送显模块接口\n│   │   ├── egl_core.cpp               # 送显参数设置\n│   │   ├── plugin_manager.cpp         # 送显模块管理实现\n│   │   └── plugin_render.cpp          # 送显逻辑实现\n│   ├── sample                         # Native层\n│   │   ├── player                     # Native层播放接口和实现\n│   │   │   ├── Player.cpp             # Native层播放功能调用逻辑的实现\n│   │   │   ├── Player.h               # Native层播放功能调用逻辑的接口\n│   │   │   ├── PlayerNative.cpp       # Native层播放的入口\n│   │   │   └── PlayerNative.h         # Native层暴露上来的接口\n│   ├── types                          #\n│   │   └── libplayer                  # 播放模块暴露给UI层的接口\n│   └── CMakeLists.txt                 # 编译入口\n├── ets                                # UI层\n│   ├── common                         # 公共模块\n│   │   ├── utils                      # 共用的工具类\n│   │   │   ├── DateTimeUtils.ets      # 获取当前时间\n│   │   │   └── Logger.ts              # 日志工具\n│   |   └───CommonConstants.ets        # 参数常量\n│   ├── entryability                   # 应用的入口\n│   │   └── EntryAbility.ts            # 申请权限弹窗实现\n│   ├── pages                          # EntryAbility包含的页面\n│   │   └── Index.ets                  # 首页/播放页面\n├── resources                          # 用于存放应用所用到的资源文件\n│   ├── base                           # 该目录下的资源文件会被赋予唯一的ID\n│   │   ├── element                    # 用于存放字体和颜色\n│   │   ├── media                      # 用于存放图片\n│   │   └── profile                    # 应用入口首页\n│   ├── en_US                          # 设备语言是美式英文时，优先匹配此目录下资源\n│   └── zh_CN                          # 设备语言是简体中文时，优先匹配此目录下资源\n└── module.json5                       # 模块配置信息\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译新建工程并运行。"
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
83866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798950-cc59fa734d51f05f9caf3fb52a13db6c.png");

},
339105(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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