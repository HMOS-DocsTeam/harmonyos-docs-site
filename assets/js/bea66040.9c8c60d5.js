"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["745196"], {
781017(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_video_decoding_video_decoding_md_bea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-video-decoding-video-decoding-md-bea.json
var site_docs_avcodec_kit_audio_video_codec_video_decoding_video_decoding_md_bea_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/video-decoding/video-decoding","title":"视频解码","description":"开发者可以调用本模块的Native API接口，完成视频解码，即将媒体数据解码成YUV文件或送显。","source":"@site/docs/avcodec-kit/audio-video-codec/video-decoding/video-decoding.md","sourceDirName":"avcodec-kit/audio-video-codec/video-decoding","slug":"/avcodec-kit/audio-video-codec/video-decoding/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-decoding/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"视频解码","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-decoding","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ROI视频编码","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-encoding-roi/"},"next":{"title":"视频解码同步模式","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/synchronous-video-decoding/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/video-decoding/video-decoding.md


const frontMatter = {
	title: '视频解码',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-decoding',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '视频解码';

const assets = {

};



const toc = [{
  "value": "限制约束",
  "id": "限制约束",
  "level": 2
}, {
  "value": "surface输出与buffer输出",
  "id": "surface输出与buffer输出",
  "level": 2
}, {
  "value": "状态机调用关系",
  "id": "状态机调用关系",
  "level": 2
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "在 CMake 脚本中链接动态库",
  "id": "在-cmake-脚本中链接动态库",
  "level": 3
}, {
  "value": "定义基础结构",
  "id": "定义基础结构",
  "level": 3
}, {
  "value": "Surface模式",
  "id": "surface模式",
  "level": 3
}, {
  "value": "Buffer模式",
  "id": "buffer模式",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
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
        id: "视频解码",
        children: "视频解码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用本模块的Native API接口，完成视频解码，即将媒体数据解码成YUV文件或送显。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/AVCodec",
        children: "示例工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持的解码能力请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/avcodec-support-formats#%E8%A7%86%E9%A2%91%E8%A7%A3%E7%A0%81",
        children: "AVCodec支持的格式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要对HDRVivid视频进行解码，需要配置MimeType为H265 (OH_AVCODEC_MIMETYPE_VIDEO_HEVC)，本功能从API version 11开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过视频解码，应用可以实现以下重点能力，包括："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "支持的能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用简述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "变分辨率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解码器支持输入码流分辨率发生变化，发生变化后会触发OH_VideoDecoder_RegisterCallback接口设置的回调函数OnStreamChanged()。具体可参考下文中：Surface模式步骤-3或Buffer模式步骤-3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "动态切换surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过调用OH_VideoDecoder_SetSurface接口配置，仅Surface模式支持。具体可参考下文中：Surface模式步骤-6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "低时延解码"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过调用OH_VideoDecoder_Configure接口配置，具体可参考下文中：Surface模式的步骤-5或Buffer模式步骤-5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制约束",
      children: "限制约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Flush，Reset，Stop之后，重新Start时，需要重新传PPS/SPS。具体示例请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#surface%E6%A8%A1%E5%BC%8F",
            children: "Surface模式"
          }), "“步骤-13：调用OH_VideoDecoder_Flush()”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Flush，Reset，Stop，Destroy在非回调线程中执行时，会等待所有回调执行完成后，将执行结果返回给开发者。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于硬件解码器资源有限，每个解码器在使用完毕后都必须调用OH_VideoDecoder_Destroy接口来销毁实例并释放资源。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "视频解码输入码流仅支持AnnexB格式，且支持的AnnexB格式支持多slice，要求同一帧的多个slice一次送入解码器。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在调用Flush，Reset，Stop的过程中，开发者不应对之前回调函数获取到的OH_AVBuffer继续进行操作。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["DRM解密能力在", (0,jsx_runtime.jsx)(_components.a, {
            href: "#surface%E6%A8%A1%E5%BC%8F",
            children: "Surface模式"
          }), "下既支持非安全视频通路，也支持安全视频通路，在", (0,jsx_runtime.jsx)(_components.a, {
            href: "#buffer%E6%A8%A1%E5%BC%8F",
            children: "Buffer模式"
          }), "下仅支持非安全视频通路。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Buffer模式和Surface模式使用方式一致的接口，所以只提供了Surface模式的示例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Buffer模式下，开发者通过输出回调函数OH_AVCodecOnNewOutputBuffer获取到OH_AVBuffer的指针实例后，必须通过调用OH_VideoDecoder_FreeOutputBuffer接口来通知系统该实例已被使用完毕。这样系统才能够将后续解码的数据写入到相应的位置。如果开发者在调用OH_AVBuffer_GetNativeBuffer接口时获取到OH_NativeBuffer指针实例，并且该实例的生命周期超过了当前的OH_AVBuffer指针实例，那么需要进行一次数据的拷贝操作。在这种情况下，开发者需要自行管理新生成的OH_NativeBuffer实例的生命周期，确保其正确使用和释放。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为确保系统服务的持续可用性，系统会实时检测应用对实例的占用行为，当检测到应用存在异常的实例占用行为，系统会自动介入并终止该应用实例。需要注意的是：持续的实例管理不当可能导致进程被终止，开发者可通过查询以下日志来确认应用实例是否被系统终止。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "日志匹配规则：HardwareDecoding.*kill\\s+进程名:进程pid"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HardwareDecoding process background, kill com.test:1887"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HardwareDecoding reachLimit and background, kill com.test:1887"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HardwareDecoding killPercentage, kill com.test:1887"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "surface输出与buffer输出",
      children: "surface输出与buffer输出"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "两者数据的输出方式不同。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "两者的适用场景不同："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "surface输出是指用OHNativeWindow来传递输出数据，可以与其他模块对接，例如XComponent。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "buffer输出是指经过解码的数据会以共享内存的方式输出。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在接口调用的过程中，两种方式的接口调用方式基本一致，但存在以下差异点："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在Surface模式下，可选择调用OH_VideoDecoder_FreeOutputBuffer接口丢弃输出帧（不送显）；在Buffer模式下，应用必须调用OH_VideoDecoder_FreeOutputBuffer接口释放数据。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Surface模式下，应用在解码器就绪前，必须调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_setsurface",
              children: "OH_VideoDecoder_SetSurface"
            }), "接口设置OHNativeWindow。启动后，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_renderoutputbuffer",
              children: "OH_VideoDecoder_RenderOutputBuffer"
            }), "接口显示并释放解码帧，或调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_renderoutputbufferattime",
              children: "OH_VideoDecoder_RenderOutputBufferAtTime"
            }), "接口在指定时间点显示并释放解码帧。如需实现音画同步或者控制显示速度，建议优先调用OH_VideoDecoder_RenderOutputBufferAtTime接口送显。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "输出回调传出的buffer，在Buffer模式下，可以获取共享内存的地址和数据信息；在Surface模式下，只能获取buffer的数据信息。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["两种模式的开发步骤详细说明请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#surface%E6%A8%A1%E5%BC%8F",
        children: "Surface模式"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#buffer%E6%A8%A1%E5%BC%8F",
        children: "Buffer模式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态机调用关系",
      children: "状态机调用关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下为状态机调用关系图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(138221)/* ["default"] */.A) + "",
        width: "4128",
        height: "2505"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "有两种方式可以使解码器进入Initialized状态："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "初始创建解码器实例时，解码器处于Initialized状态。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "任何状态下，调用OH_VideoDecoder_Reset接口，解码器将会移回Initialized状态。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Initialized状态下，调用OH_VideoDecoder_Configure接口配置解码器，配置成功后解码器进入Configured状态。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configured状态下，调用OH_VideoDecoder_Prepare接口进入Prepared状态。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prepared状态下，调用OH_VideoDecoder_Start接口使解码器进入Executing状态："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "处于Executing状态时，调用OH_VideoDecoder_Stop接口可以使解码器返回到Prepared状态。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在极少数情况下，解码器可能会遇到错误并进入Error状态。解码器的错误传递，可以通过队列操作返回无效值或者抛出异常："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Error状态下，可以调用解码器OH_VideoDecoder_Reset接口将解码器移到Initialized状态；或者调用OH_VideoDecoder_Destroy接口移动到最后的Released状态。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Executing状态具有三个子状态：Flushed、Running和End-of-Stream："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在调用了OH_VideoDecoder_Start接口之后，解码器立即进入Running子状态。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对于处于Executing状态的解码器，可以调用OH_VideoDecoder_Flush接口返回到Flushed子状态。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当待处理数据全部传递给解码器后，在input buffers队列中为最后一个入队的input buffer中添加", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avbuffer-info-h/capi-native-avbuffer-info-h#oh_avcodecbufferflags",
              children: "AVCODEC_BUFFER_FLAGS_EOS"
            }), "标记，遇到这个标记时，解码器会转换为End-of-Stream子状态。在此状态下，解码器不再接受新的输入，但是仍然会继续生成输出，直到输出到达尾帧。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用完解码器后，必须调用OH_VideoDecoder_Destroy接口销毁解码器实例，使解码器进入Released状态。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h",
        children: "native_avcodec_videodecoder.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下为视频解码调用关系图："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "虚线表示可选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实线表示必选。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(301145)/* ["default"] */.A) + "",
        width: "5097",
        height: "4425"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libnative_media_codecbase.so)\ntarget_link_libraries(sample PUBLIC libnative_media_core.so)\ntarget_link_libraries(sample PUBLIC libnative_media_vdec.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(442116)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述'sample'字样仅为示例，此处由开发者根据实际工程目录自定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义基础结构",
      children: "定义基础结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本部分示例代码按照C++17标准编写，仅作参考。开发者可以参考此部分，定义自己的buffer对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <condition_variable>\n#include <memory>\n#include <mutex>\n#include <queue>\n#include <shared_mutex>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解码器回调buffer的信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "struct CodecBufferInfo {\n    CodecBufferInfo(uint32_t index, OH_AVBuffer *buffer): index(index), buffer(buffer), isValid(true) {}\n    // 回调buffer。\n    OH_AVBuffer *buffer = nullptr;\n    // 回调buffer对应的index。\n    uint32_t index = 0;\n    // 判断当前buffer信息是否有效。\n    bool isValid = true;\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解码输入输出队列。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class CodecBufferQueue {\npublic:\n    // 将回调buffer的信息传入队列。\n    void Enqueue(const std::shared_ptr<CodecBufferInfo> bufferInfo)\n    {\n        std::unique_lock<std::mutex> lock(mutex_);\n        bufferQueue_.push(bufferInfo);\n        cond_.notify_all();\n    }\n\n    // 获取回调buffer的信息。\n    std::shared_ptr<CodecBufferInfo> Dequeue(int32_t timeoutMs = 1000)\n    {\n        std::unique_lock<std::mutex> lock(mutex_);\n        (void)cond_.wait_for(lock, std::chrono::milliseconds(timeoutMs), [this]() { return !bufferQueue_.empty(); });\n        if (bufferQueue_.empty()) {\n            return nullptr;\n        }\n        std::shared_ptr<CodecBufferInfo> bufferInfo = bufferQueue_.front();\n        bufferQueue_.pop();\n        return bufferInfo;\n    }\n\n    // 清空队列，之前的回调buffer设置为不可用。\n    void Flush()\n    {\n        std::unique_lock<std::mutex> lock(mutex_);\n        while (!bufferQueue_.empty()) {\n            std::shared_ptr<CodecBufferInfo> bufferInfo = bufferQueue_.front();\n            // Flush、Stop、Reset、Destroy操作之后，之前回调的buffer信息设置为无效。\n            bufferInfo->isValid = false;\n            bufferQueue_.pop();\n        }\n    }\n\nprivate:\n    std::mutex mutex_;\n    std::condition_variable cond_;\n    std::queue<std::shared_ptr<CodecBufferInfo>> bufferQueue_;\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全局变量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅作参考，可以根据实际情况将其封装到对象中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 视频帧宽度。\nint32_t width = 320;\n// 视频帧高度。\nint32_t height = 240;\n// 视频像素格式。\n OH_AVPixelFormat pixelFormat = AV_PIXEL_FORMAT_NV12;\n// 视频宽跨距。\nint32_t widthStride = 0;\n// 视频高跨距。\nint32_t heightStride = 0;\n// 解码器实例指针。\nOH_AVCodec *videoDec = nullptr;\n// 解码器同步锁。\nstd::shared_mutex codecMutex;\n// 解码器输入队列。\nCodecBufferQueue inQueue;\n// 解码器输出队列。\nCodecBufferQueue outQueue;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "surface模式",
      children: "Surface模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例代码，可以完成Surface模式下视频解码的全流程，实现异步模式的数据轮转。此处以输入H.264码流文件，解码送显输出为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/native_avcodec_videodecoder.h>\n#include <multimedia/player_framework/native_avcapability.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <multimedia/player_framework/native_avbuffer.h>\n#include <fstream>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建解码器实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以通过名称或媒体类型创建解码器。示例中的变量说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "videoDec：视频解码器实例的指针；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "capability：解码器能力查询实例的指针；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_AVC：AVC格式视频编解码器。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过codecname创建解码器，应用有特殊需求，比如选择支持某种分辨率规格的解码器，可先查询capability，再根据codec name创建解码器。\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, false);\n// 创建硬件解码器实例。\nOH_AVCapability *capability= OH_AVCodec_GetCapabilityByCategory(OH_AVCODEC_MIMETYPE_VIDEO_AVC, false, HARDWARE);\nconst char *name = OH_AVCapability_GetName(capability);\nOH_AVCodec *videoDec = OH_VideoDecoder_CreateByName(name);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过MIME TYPE创建解码器，只能创建系统推荐的特定编解码器。\n// 涉及创建多路编解码器时，优先创建硬件解码器实例，硬件资源不够时再创建软件解码器实例。\n// 软/硬解：创建H.264解码器实例。\nOH_AVCodec *videoDec = OH_VideoDecoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_AVC);\n// 软/硬解：创建H.265解码器实例。\nOH_AVCodec *videoDec = OH_VideoDecoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_HEVC);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_RegisterCallback()设置回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册回调函数指针集合OH_AVCodecCallback，包括："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["OH_AVCodecOnError 解码器运行错误，返回的错误码详情请参见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconerror",
              children: "OH_AVCodecOnError"
            }), "；"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnStreamChanged 码流信息变化，如码流宽、高变化；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnNeedInputBuffer 运行过程中需要新的输入数据，即解码器已准备好，可以输入数据；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnNewOutputBuffer 运行过程中产生了新的输出数据，即解码完成。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以通过处理该回调报告的信息，确保解码器正常运转。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["回调函数的具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/AVCodec",
            children: "示例工程"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 解码异常回调OH_AVCodecOnError实现。\nstatic void OnError(OH_AVCodec *codec, int32_t errorCode, void *userData)\n{\n    // 回调的错误码由开发者判断处理。\n    (void)codec;\n    (void)errorCode;\n    (void)userData;\n}\n\n// 解码数据流变化回调OH_AVCodecOnStreamChanged实现。\nstatic void OnStreamChanged(OH_AVCodec *codec, OH_AVFormat *format, void *userData)\n{\n    // 可通过format获取到变化后的视频宽、高等。\n    (void)codec;\n    (void)userData;\n    bool ret = OH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_PIC_WIDTH, &width) &&\n               OH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_PIC_HEIGHT, &height);\n    if (!ret) {\n        // 异常处理。\n    }\n}\n\n// 解码输入回调OH_AVCodecOnNeedInputBuffer实现。\nstatic void OnNeedInputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // 输入帧的数据buffer和对应的index送入inQueue队列。\n    (void)codec;\n    (void)userData;\n    inQueue.Enqueue(std::make_shared<CodecBufferInfo>(index, buffer));\n}\n\n// 解码输出回调OH_AVCodecOnNewOutputBuffer实现。\nstatic void OnNewOutputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // 完成帧的数据buffer和对应的index送入outQueue队列。\n    (void)codec;\n    (void)userData;\n    outQueue.Enqueue(std::make_shared<CodecBufferInfo>(index, buffer));\n}\n\n// 配置异步回调，调用 OH_VideoDecoder_RegisterCallback 接口。\nOH_AVCodecCallback cb = {&OnError, &OnStreamChanged, &OnNeedInputBuffer, &OnNewOutputBuffer};\n// 配置异步回调。\nOH_AVErrCode ret = OH_VideoDecoder_RegisterCallback(videoDec, cb, nullptr); // nullptr:开发者执行回调所依赖的数据userData为空。\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(947389)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在回调函数中，对数据队列进行操作时，需要注意多线程同步的问题。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "播放视频时，若视频码流的SPS中包含颜色信息，解码器会把这些信息（RangeFlag、ColorPrimary、MatrixCoefficient、TransferCharacteristic）通过OH_AVCodecOnStreamChanged接口中的OH_AVFormat返回。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "视频解码的Surface模式下，内部数据默认是走HEBC（High Efficiency Bandwidth Compression，高效带宽压缩），无法获取到widthStride和heightStride的值。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）OH_VideoDecoder_SetDecryptionConfig设置解密配置。在获取到DRM信息（参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/file-muxing-demuxing/audio-video-demuxer",
            children: "音视频解封装"
          }), "开发步骤第4步），完成DRM许可证申请后，通过此接口进行解密配置。此接口需在Prepare前调用。在Surface模式下，DRM解密能力既支持安全视频通路，也支持非安全视频通路。DRM相关接口详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm",
            children: "DRM API文档"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/drm_framework/native_mediakeysystem.h>\n#include <multimedia/drm_framework/native_mediakeysession.h>\n#include <multimedia/drm_framework/native_drm_err.h>\n#include <multimedia/drm_framework/native_drm_common.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 CMake 脚本中链接动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(sample PUBLIC libnative_drm.so)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据DRM码流要求的内容保护级别和硬件设备支持的内容保护级别创建对应的通路。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果DRM码流要求的内容保护级别是硬件级保护，则推荐使用安全视频通路，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 根据DRM信息创建指定的DRM系统, 以创建\"com.wiseplay.drm\"为例\nMediaKeySystem *system = nullptr;\nint32_t ret = OH_MediaKeySystem_Create(\"com.wiseplay.drm\", &system);\nif (system == nullptr) {\n    printf(\"create media key system failed\");\n    return;\n}\n\n// 创建解密会话，如果使用安全视频通路，应创建CONTENT_PROTECTION_LEVEL_HW_CRYPTO及其以上内容保护级别的MediaKeySession；\nMediaKeySession *session = nullptr;\nDRM_ContentProtectionLevel contentProtectionLevel = CONTENT_PROTECTION_LEVEL_HW_CRYPTO;\nret = OH_MediaKeySystem_CreateMediaKeySession(system, &contentProtectionLevel, &session);\nif (ret != DRM_OK) {\n    // 如创建失败，请查看DRM接口文档及日志信息\n    printf(\"create media key session failed.\");\n    return;\n}\nif (session == nullptr) {\n    printf(\"media key session is nullptr.\");\n    return;\n}\n\n// 获取许可证请求、设置许可证响应等\n\n// 设置解密配置, 即将解密会话、安全视频通路标志设置到解码器中\n// 如果DRM解决方案支持安全视频通路，在使用安全视频通路时，需将secureVideoPath设置为true，并在此之前须创建安全解码器\n// 即在步骤3使用OH_VideoDecoder_CreateByName函数、参数为解码器名称后拼接.secure（如“[CodecName].secure”）创建安全解码器\nbool secureVideoPath = true;\nret = OH_VideoDecoder_SetDecryptionConfig(videoDec, session, secureVideoPath);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果DRM码流要求的内容保护级别是软件级保护，则推荐使用非安全视频通路，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 根据DRM信息创建指定的DRM系统，以创建\"com.wiseplay.drm\"为例。\nMediaKeySystem *system = nullptr;\nint32_t ret = OH_MediaKeySystem_Create(\"com.wiseplay.drm\", &system);\nif (system == nullptr) {\n    printf(\"create media key system failed\");\n    return;\n}\n\n// 创建解密会话，如果使用安全视频通路，应创建CONTENT_PROTECTION_LEVEL_HW_CRYPTO及其以上内容保护级别的MediaKeySession；\n// 如果使用非安全视频通路，应创建CONTENT_PROTECTION_LEVEL_SW_CRYPTO及以上内容保护级别的MediaKeySession。\nMediaKeySession *session = nullptr;\nDRM_ContentProtectionLevel contentProtectionLevel = CONTENT_PROTECTION_LEVEL_SW_CRYPTO;\nret = OH_MediaKeySystem_CreateMediaKeySession(system, &contentProtectionLevel, &session);\nif (ret != DRM_ERR_OK) {\n    // 如创建失败，请查看DRM接口文档及日志信息。\n    printf(\"create media key session failed.\");\n    return;\n}\nif (session == nullptr) {\n    printf(\"media key session is nullptr.\");\n    return;\n}\n\n// 获取许可证请求、设置许可证响应等。\n\n// 设置解密配置，即将解密会话、安全视频通路标志设置到解码器中。\n// 如果DRM解决方案支持安全视频通路，在使用安全视频通路时，需将secureVideoPath设置为true，并在此之前须创建安全解码器。\n// 即在步骤2使用OH_VideoDecoder_CreateByName函数、参数为解码器名称后拼接.secure（如“[CodecName].secure”）创建安全解码器。\nbool secureVideoPath = false;\nret = OH_VideoDecoder_SetDecryptionConfig(videoDec, session, secureVideoPath);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_Configure()配置解码器。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详细可配置选项的说明请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase#%E5%AA%92%E4%BD%93%E6%95%B0%E6%8D%AE%E9%94%AE%E5%80%BC%E5%AF%B9",
            children: "视频专有键值对"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参数校验规则请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_configure",
            children: "OH_VideoDecoder_Configure() 参考文档"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参数取值范围可以通过能力查询接口获取，具体示例请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/obtain-supported-codecs",
            children: "获取支持的编解码能力"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目前支持的所有格式都必须配置以下选项：视频帧宽度、视频帧高度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto format = std::shared_ptr<OH_AVFormat>(OH_AVFormat_Create(), OH_AVFormat_Destroy);\nif (format == nullptr) {\n    // 异常处理。\n}\n// 写入format。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_WIDTH, width); // 必须配置。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_HEIGHT, height); // 必须配置。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_PIXEL_FORMAT, pixelFormat);\n// 可选，配置低时延解码。\n// 若平台支持，当使能OH_MD_KEY_VIDEO_ENABLE_LOW_LATENCY接口时，视频解码器将按照解码序输出帧。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_VIDEO_ENABLE_LOW_LATENCY, 1);\n// 配置解码器。\nOH_AVErrCode ret = OH_VideoDecoder_Configure(videoDec, format.get());\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置surface。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本例中的nativeWindow，有两种方式获取："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "6.1 如果解码后直接显示，则从XComponent组件获取。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <native_window/external_window.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 CMake 脚本中链接动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(sample PUBLIC libnative_window.so)\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["6.1.1 在ArkTS侧，通过xComponentController组件的getXComponentSurfaceId接口获取XComponent对应的surface的ID。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines",
            children: "自定义渲染 (XComponent)"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "6.1.2 在Native侧，调用OH_NativeWindow_CreateNativeWindowFromSurfaceId接口创建出NativeWindow实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OHNativeWindow* nativeWindow;\n// 基于步骤1.1中获取的surfaceId创建对应的nativeWindow实例。\nOH_NativeWindow_CreateNativeWindowFromSurfaceId(surfaceId, &nativeWindow);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["6.2 如果解码后接OpenGL后处理，则从NativeImage获取，获取方式请参考 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/native-surface/native-image-guidelines",
            children: "NativeImage"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Surface模式，开发者可以在解码过程中执行该步骤，即动态切换surface。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置surface。\n// 配置送显窗口参数。\nOH_AVErrCode ret = OH_VideoDecoder_SetSurface(videoDec, nativeWindow);  // nativeWindow通过以上两种方式获取。\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 配置视频与显示屏匹配模式（缓冲区按原比例缩放，使得缓冲区的较小边与窗口匹配，较长边超出窗口的部分被视为透明）。\nOH_NativeWindow_NativeWindowSetScalingModeV2(nativeWindow, OH_SCALING_MODE_SCALE_CROP_V2);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(907980)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "若应用对1号和2号解码器均通过调用OH_VideoDecoder_SetSurface接口绑定至同一个NativeWindow。在2号解码器处于Running状态时，1号解码器调用OH_VideoDecoder_Destroy接口后，会导致2号解码器的视频播放画面卡住。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以采用以下方案进行更改："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "等1号解码器完全释放后，再调用OH_VideoDecoder_Start接口启动2号解码器；"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["1号解码器用surface1，2号解码器先调用OH_ConsumerSurface_Create接口创建临时surface，等1号解码器释放后，再调用OH_VideoDecoder_SetSurface接口将2号解码器绑定至surface1上，详情请参见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/parallel-decoding-nativewindow",
              children: "创建视频解码器和NativeWindow初始化并行"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_Prepare()解码器就绪。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该接口将在解码器运行前进行一些数据的准备工作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVErrCode ret = OH_VideoDecoder_Prepare(videoDec);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_Start()启动解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 启动解码器，开始解码。\nOH_AVErrCode ret = OH_VideoDecoder_Start(videoDec);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）OH_VideoDecoder_SetParameter()动态配置解码器surface参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详细可配置选项的说明请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase#%E5%AA%92%E4%BD%93%E6%95%B0%E6%8D%AE%E9%94%AE%E5%80%BC%E5%AF%B9",
            children: "视频专有键值对"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto format = std::shared_ptr<OH_AVFormat>(OH_AVFormat_Create(), OH_AVFormat_Destroy);\nif (format == nullptr) {\n    // 异常处理。\n}\n// 配置显示旋转角度。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_ROTATION, 90);\nOH_AVErrCode ret = OH_VideoDecoder_SetParameter(videoDec, format.get());\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_AVCencInfo_SetAVBuffer()，设置cencInfo。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若当前播放的节目是DRM加密节目，应用自行实现媒体解封装功能而非使用系统", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/file-muxing-demuxing/audio-video-demuxer",
            children: "解封装"
          }), "功能时，需调用OH_AVCencInfo_SetAVBuffer()将cencInfo设置到AVBuffer，这样AVBuffer携带待解密的数据以及cencInfo，以实现AVBuffer中媒体数据的解密。当应用使用系统", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/file-muxing-demuxing/audio-video-demuxer",
            children: "解封装"
          }), "功能时，则无需调用此接口。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/native_cencinfo.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 CMake 脚本中链接动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(sample PUBLIC libnative_media_avcencinfo.so)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用示例："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "buffer：回调函数OnNeedInputBuffer传入的参数。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint32_t keyIdLen = DRM_KEY_ID_SIZE;\nuint8_t keyId[] = {\n    0xd4, 0xb2, 0x01, 0xe4, 0x61, 0xc8, 0x98, 0x96,\n    0xcf, 0x05, 0x22, 0x39, 0x8d, 0x09, 0xe6, 0x28};\nuint32_t ivLen = DRM_KEY_IV_SIZE;\nuint8_t iv[] = {\n    0xbf, 0x77, 0xed, 0x51, 0x81, 0xde, 0x36, 0x3e,\n    0x52, 0xf7, 0x20, 0x4f, 0x72, 0x14, 0xa3, 0x95};\nuint32_t encryptedBlockCount = 0;\nuint32_t skippedBlockCount = 0;\nuint32_t firstEncryptedOffset = 0;\nuint32_t subsampleCount = 1;\nDrmSubsample subsamples[1] = { {0x10, 0x16} };\n// 创建CencInfo实例。\nOH_AVCencInfo *cencInfo = OH_AVCencInfo_Create();\nif (cencInfo == nullptr) {\n    // 异常处理。\n}\n// 设置解密算法。\nOH_AVErrCode errNo = OH_AVCencInfo_SetAlgorithm(cencInfo, DRM_ALG_CENC_AES_CTR);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 设置KeyId和Iv。\nerrNo = OH_AVCencInfo_SetKeyIdAndIv(cencInfo, keyId, keyIdLen, iv, ivLen);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 设置Sample信息。\nerrNo = OH_AVCencInfo_SetSubsampleInfo(cencInfo, encryptedBlockCount, skippedBlockCount, firstEncryptedOffset,\n    subsampleCount, subsamples);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 设置模式：KeyId、Iv和SubSamples已被设置。\nerrNo = OH_AVCencInfo_SetMode(cencInfo, DRM_CENC_INFO_KEY_IV_SUBSAMPLES_SET);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 将CencInfo设置到AVBuffer中。\nerrNo = OH_AVCencInfo_SetAVBuffer(cencInfo, buffer);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 销毁CencInfo实例。\nerrNo = OH_AVCencInfo_Destroy(cencInfo);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_PushInputBuffer()写入解码码流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "送入输入队列进行解码，以下示例中："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["size、offset、pts、frameData：输入尺寸、偏移量、时间戳、帧数据等字段信息，获取方式可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/file-muxing-demuxing/audio-video-demuxer",
              children: "音视频解封装"
            }), "“步骤-9：开始解封装，循环获取sample”。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["flags：缓冲区标记的类别，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avbuffer-info-h/capi-native-avbuffer-info-h#oh_avcodecbufferflags",
              children: "OH_AVCodecBufferFlags"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "bufferInfo的成员变量："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["buffer：回调函数OnNeedInputBuffer传入的参数，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avbuffer-h/capi-native-avbuffer-h#oh_avbuffer_getaddr",
              children: "OH_AVBuffer_GetAddr"
            }), "接口获取输入码流虚拟地址。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "index：回调函数OnNeedInputBuffer传入的参数，与buffer唯一对应的标识。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "isValid：bufferInfo中存储的buffer实例是否有效。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::shared_ptr<CodecBufferInfo> bufferInfo = inQueue.Dequeue();\nstd::shared_lock<std::shared_mutex> lock(codecMutex);\nif (bufferInfo == nullptr || !bufferInfo->isValid) {\n    // 异常处理。\n}\n// 写入码流数据。\nuint8_t *addr = OH_AVBuffer_GetAddr(bufferInfo->buffer);\nif (addr == nullptr) {\n   // 异常处理。\n}\nint32_t capacity = OH_AVBuffer_GetCapacity(bufferInfo->buffer);\nif (size > capacity) {\n    // 异常处理。\n}\nmemcpy(addr, frameData, size);\n// 配置帧数据的输入尺寸、偏移量、时间戳等字段信息。\nOH_AVCodecBufferAttr info;\ninfo.size = size;\ninfo.offset = offset;\ninfo.pts = pts;\ninfo.flags = flags;\n// info信息写入buffer。\nOH_AVErrCode setBufferRet = OH_AVBuffer_SetBufferAttr(bufferInfo->buffer, &info);\nif (setBufferRet != AV_ERR_OK) {\n    // 异常处理。\n}\n// 送入解码输入队列进行解码。\nOH_AVErrCode pushInputRet = OH_VideoDecoder_PushInputBuffer(videoDec, bufferInfo->index);\nif (pushInputRet != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_RenderOutputBuffer()/OH_VideoDecoder_RenderOutputBufferAtTime()显示并释放解码帧，或调用OH_VideoDecoder_FreeOutputBuffer()释放解码帧。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下示例中，bufferInfo的成员变量："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "index：回调函数OnNewOutputBuffer传入的参数，与buffer唯一对应的标识；"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["buffer：回调函数OnNewOutputBuffer传入的参数，Surface模式开发者无法通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avbuffer-h/capi-native-avbuffer-h#oh_avbuffer_getaddr",
              children: "OH_AVBuffer_GetAddr"
            }), "接口获取图像虚拟地址；"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "isValid：bufferInfo中存储的buffer实例是否有效。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::shared_ptr<CodecBufferInfo> bufferInfo = outQueue.Dequeue();\nstd::shared_lock<std::shared_mutex> lock(codecMutex);\nif (bufferInfo == nullptr || !bufferInfo->isValid) {\n    // 异常处理。\n}\n// 获取解码后信息。\nOH_AVCodecBufferAttr info;\nOH_AVErrCode getBufferRet = OH_AVBuffer_GetBufferAttr(bufferInfo->buffer, &info);\nif (getBufferRet != AV_ERR_OK) {\n    // 异常处理。\n}\n// 值由开发者决定。\nbool isRender;\nbool isNeedRenderAtTime;\nOH_AVErrCode ret = AV_ERR_OK;\nif (isRender) {\n    // 显示并释放已完成处理的信息，index为对应buffer队列的下标。\n    if (isNeedRenderAtTime){\n        // 获取系统绝对时间，renderTimestamp由开发者结合业务指定显示时间。\n        int64_t renderTimestamp =\n            std::chrono::duration_cast<std::chrono::nanoseconds>(std::chrono::high_resolution_clock::now().time_since_epoch()).count();\n        ret = OH_VideoDecoder_RenderOutputBufferAtTime(videoDec, bufferInfo->index, renderTimestamp);\n    } else {\n        ret = OH_VideoDecoder_RenderOutputBuffer(videoDec, bufferInfo->index);\n    }\n\n} else {\n    // 释放已完成处理的信息。\n    ret = OH_VideoDecoder_FreeOutputBuffer(videoDec, bufferInfo->index);\n}\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(757274)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果要获取buffer的属性，如pixel_format、stride等可通过调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-external-window-h/capi-external-window-h#oh_nativewindow_nativewindowhandleopt",
              children: "OH_NativeWindow_NativeWindowHandleOpt"
            }), "接口获取。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["显示并释放解码帧时，推荐优先调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videodecoder-h/capi-native-avcodec-videodecoder-h#oh_videodecoder_renderoutputbufferattime",
              children: "OH_VideoDecoder_RenderOutputBufferAtTime"
            }), "接口。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_VideoDecoder_Flush()刷新解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_Flush接口后，解码器仍处于运行态，但会清除解码器中缓存的输入和输出数据及参数集如H.264格式的PPS/SPS。此时需要调用OH_VideoDecoder_Start接口重新开始解码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下示例中："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["xpsData、xpsSize：PPS/SPS信息，获取方式可以参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/file-muxing-demuxing/audio-video-demuxer",
              children: "音视频解封装"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::unique_lock<std::shared_mutex> lock(codecMutex);\n// 刷新解码器videoDec。\nOH_AVErrCode flushRet = OH_VideoDecoder_Flush(videoDec);\nif (flushRet != AV_ERR_OK) {\n    // 异常处理。\n}\ninQueue.Flush();\noutQueue.Flush();\n// 重新开始解码。\nOH_AVErrCode startRet = OH_VideoDecoder_Start(videoDec);\nif (startRet != AV_ERR_OK) {\n    // 异常处理。\n}\n\nstd::shared_ptr<CodecBufferInfo> bufferInfo = inQueue.Dequeue();\nif (bufferInfo == nullptr || !bufferInfo->isValid) {\n    // 异常处理。\n}\n// 重传PPS/SPS。\n// 配置帧数据PPS/SPS信息。\nuint8_t *addr = OH_AVBuffer_GetAddr(bufferInfo->buffer);\nif (addr == nullptr) {\n   // 异常处理\n}\nint32_t capacity = OH_AVBuffer_GetCapacity(bufferInfo->buffer);\nif (xpsSize > capacity) {\n    // 异常处理。\n}\nmemcpy(addr, xpsData, xpsSize);\nOH_AVCodecBufferAttr info;\ninfo.flags = AVCODEC_BUFFER_FLAG_CODEC_DATA;\n// info信息写入buffer。\nOH_AVErrCode setBufferRet = OH_AVBuffer_SetBufferAttr(bufferInfo->buffer, &info);\nif (setBufferRet != AV_ERR_OK) {\n    // 异常处理。\n}\n// 将帧数据推送到解码器中，index为对应buffer队列的下标。\nOH_AVErrCode pushInputRet = OH_VideoDecoder_PushInputBuffer(videoDec, bufferInfo->index);\nif (pushInputRet != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(939903)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Flush之后，重新调用OH_VideoDecoder_Start接口时，需要重新传PPS/SPS。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_VideoDecoder_Reset()重置解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_Reset接口后，解码器回到初始化的状态，需要调用OH_VideoDecoder_Configure接口、OH_VideoDecoder_SetSurface接口和OH_VideoDecoder_Prepare接口重新配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::unique_lock<std::shared_mutex> lock(codecMutex);\n// 重置解码器videoDec。\nOH_AVErrCode resetRet = OH_VideoDecoder_Reset(videoDec);\nif (resetRet != AV_ERR_OK) {\n    // 异常处理。\n}\ninQueue.Flush();\noutQueue.Flush();\n// 重新配置解码器参数。\nauto format = std::shared_ptr<OH_AVFormat>(OH_AVFormat_Create(), OH_AVFormat_Destroy);\nif (format == nullptr) {\n    // 异常处理。\n}\nOH_AVErrCode configRet = OH_VideoDecoder_Configure(videoDec, format.get());\nif (configRet != AV_ERR_OK) {\n    // 异常处理。\n}\n// Surface模式重新配置surface，而Buffer模式不需要配置surface。\nOH_AVErrCode setRet = OH_VideoDecoder_SetSurface(videoDec, nativeWindow);\nif (setRet != AV_ERR_OK) {\n    // 异常处理。\n}\n// 解码器重新就绪。\nOH_AVErrCode prepareRet = OH_VideoDecoder_Prepare(videoDec);\nif (prepareRet != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_VideoDecoder_Stop()停止解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_Stop()后，解码器保留了解码实例，释放输入输出buffer。开发者可以直接调用OH_VideoDecoder_Start接口继续解码，输入的第一个buffer需要携带参数集，从IDR帧开始送入。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::unique_lock<std::shared_mutex> lock(codecMutex);\n// 终止解码器videoDec。\nOH_AVErrCode ret = OH_VideoDecoder_Stop(videoDec);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\ninQueue.Flush();\noutQueue.Flush();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_Destroy()销毁解码器实例，释放资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(879731)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不能在回调函数中调用；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "执行该步骤之后，需要开发者将videoDec指向nullptr，防止野指针导致程序错误。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::unique_lock<std::shared_mutex> lock(codecMutex);\n// 释放nativeWindow实例。\nif(nativeWindow != nullptr){\n    OH_NativeWindow_DestroyNativeWindow(nativeWindow);\n    nativeWindow = nullptr;\n}\n// 调用OH_VideoDecoder_Destroy，注销解码器。\nOH_AVErrCode ret = AV_ERR_OK;\nif (videoDec != nullptr) {\n    OH_VideoDecoder_Destroy(videoDec);\n    videoDec = nullptr;\n}\ninQueue.Flush();\noutQueue.Flush();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buffer模式",
      children: "Buffer模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例代码，可以完成Buffer模式下视频解码的全流程，实现异步模式的数据轮转。此处以输入H.264码流文件，解码成YUV文件为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/native_avcodec_videodecoder.h>\n#include <multimedia/player_framework/native_avcapability.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <multimedia/player_framework/native_avbuffer.h>\n#include <native_buffer/native_buffer.h>\n#include <fstream>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建解码器实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "与Surface模式相同，此处不再赘述。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过codecname创建解码器，应用有特殊需求，比如选择支持某种分辨率规格的解码器，可先查询capability，再根据codec name创建解码器。\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, false);\nconst char *name = OH_AVCapability_GetName(capability);\nOH_AVCodec *videoDec = OH_VideoDecoder_CreateByName(name);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过MIME TYPE创建解码器，只能创建系统推荐的特定编解码器。\n// 涉及创建多路编解码器时，优先创建硬件解码器实例，硬件资源不够时再创建软件解码器实例。\n// 软/硬解：创建H.264解码器。\nOH_AVCodec *videoDec = OH_VideoDecoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_AVC);\n// 硬解：创建H.265解码器。\nOH_AVCodec *videoDec = OH_VideoDecoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_HEVC);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_RegisterCallback()设置回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册回调函数指针集合OH_AVCodecCallback，包括："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["OH_AVCodecOnError 解码器运行错误，返回的错误码详情请参见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconerror",
              children: "OH_AVCodecOnError"
            }), "；"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnStreamChanged 码流信息变化，如码流宽、高变化；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnNeedInputBuffer 运行过程中需要新的输入数据，即解码器已准备好，可以输入数据；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnNewOutputBuffer 运行过程中产生了新的输出数据，即解码完成。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以通过处理该回调报告的信息，确保解码器正常运转。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["回调函数的具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/AVCodec",
            children: "示例工程"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t cropTop = 0;\nint32_t cropBottom = 0;\nint32_t cropLeft = 0;\nint32_t cropRight = 0;\nbool isFirstFrame = true;\n// 解码异常回调OH_AVCodecOnError实现。\nstatic void OnError(OH_AVCodec *codec, int32_t errorCode, void *userData)\n{\n    // 回调的错误码由开发者判断处理。\n    (void)codec;\n    (void)errorCode;\n    (void)userData;\n}\n\n// 解码数据流变化回调OH_AVCodecOnStreamChanged实现。\nstatic void OnStreamChanged(OH_AVCodec *codec, OH_AVFormat *format, void *userData)\n{\n    // 可选，开发者需要获取视频宽、高、跨距等时可配置。\n    // 可通过format获取到变化后的视频宽、高、跨距等。\n    (void)codec;\n    (void)userData;\n    bool ret = OH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_PIC_WIDTH, &width) &&\n               OH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_PIC_HEIGHT, &height) &&\n               OH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_STRIDE, &widthStride) &&\n               OH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_SLICE_HEIGHT, &heightStride) &&\n               // 获取裁剪矩形信息可选。\n               OH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_CROP_TOP, &cropTop) &&\n               OH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_CROP_BOTTOM, &cropBottom) &&\n               OH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_CROP_LEFT, &cropLeft) &&\n               OH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_CROP_RIGHT, &cropRight);\n    if (!ret) {\n        // 异常处理。\n    }\n}\n\n// 解码输入回调OH_AVCodecOnNeedInputBuffer实现。\nstatic void OnNeedInputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // 输入帧的数据buffer和对应的index送入inQueue队列。\n    (void)codec;\n    (void)userData;\n    inQueue.Enqueue(std::make_shared<CodecBufferInfo>(index, buffer));\n}\n\n// 解码输出回调OH_AVCodecOnNewOutputBuffer实现。\nstatic void OnNewOutputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // 可选，开发者需要获取视频宽、高、跨距等时可配置。\n    // 获取视频宽、高、跨距。\n    if (isFirstFrame) {\n        auto format = std::shared_ptr<OH_AVFormat>(OH_VideoDecoder_GetOutputDescription(codec), OH_AVFormat_Destroy);\n        if (format == nullptr) {\n            // 异常处理。\n        }\n        bool ret = OH_AVFormat_GetIntValue(format.get(), OH_MD_KEY_VIDEO_PIC_WIDTH, &width) &&\n                   OH_AVFormat_GetIntValue(format.get(), OH_MD_KEY_VIDEO_PIC_HEIGHT, &height) &&\n                   OH_AVFormat_GetIntValue(format.get(), OH_MD_KEY_VIDEO_STRIDE, &widthStride) &&\n                   OH_AVFormat_GetIntValue(format.get(), OH_MD_KEY_VIDEO_SLICE_HEIGHT, &heightStride) &&\n                   // 获取裁剪矩形信息可选。\n                   OH_AVFormat_GetIntValue(format.get(), OH_MD_KEY_VIDEO_CROP_TOP, &cropTop) &&\n                   OH_AVFormat_GetIntValue(format.get(), OH_MD_KEY_VIDEO_CROP_BOTTOM, &cropBottom) &&\n                   OH_AVFormat_GetIntValue(format.get(), OH_MD_KEY_VIDEO_CROP_LEFT, &cropLeft) &&\n                   OH_AVFormat_GetIntValue(format.get(), OH_MD_KEY_VIDEO_CROP_RIGHT, &cropRight);\n        if (!ret) {\n            // 异常处理。\n        }\n        isFirstFrame = false;\n    }\n    // 完成帧的数据buffer和对应的index送入outQueue队列。\n    (void)userData;\n    outQueue.Enqueue(std::make_shared<CodecBufferInfo>(index, buffer));\n}\n// 配置异步回调，调用OH_VideoDecoder_RegisterCallback接口。\nOH_AVCodecCallback cb = {&OnError, &OnStreamChanged, &OnNeedInputBuffer, &OnNewOutputBuffer};\n// 配置异步回调。\nOH_AVErrCode ret = OH_VideoDecoder_RegisterCallback(videoDec, cb, nullptr); // nullptr:开发者执行回调所依赖的数据userData为空。\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(808792)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在回调函数中，对数据队列进行操作时，需要注意多线程同步的问题。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）OH_VideoDecoder_SetDecryptionConfig设置解密配置。在获取到DRM信息（参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/file-muxing-demuxing/audio-video-demuxer",
            children: "音视频解封装"
          }), "开发步骤第4步），完成DRM许可证申请后，通过此接口进行解密配置。此接口需在Prepare前调用。在Buffer模式下，DRM解密能力仅支持非安全视频通路。DRM相关接口详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-c/drm-module/capi-drm/capi-drm",
            children: "DRM API文档"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/drm_framework/native_mediakeysystem.h>\n#include <multimedia/drm_framework/native_mediakeysession.h>\n#include <multimedia/drm_framework/native_drm_err.h>\n#include <multimedia/drm_framework/native_drm_common.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在 CMake 脚本中链接动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(sample PUBLIC libnative_drm.so)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 根据DRM信息创建指定的DRM系统，以创建\"com.wiseplay.drm\"为例。\nMediaKeySystem *system = nullptr;\nint32_t ret = OH_MediaKeySystem_Create(\"com.wiseplay.drm\", &system);\nif (system == nullptr) {\n    printf(\"create media key system failed\");\n    return;\n}\n\n// 创建解密会话。\n// 使用非安全视频通路，应创建CONTENT_PROTECTION_LEVEL_SW_CRYPTO及以上内容保护级别的MediaKeySession。\nMediaKeySession *session = nullptr;\nDRM_ContentProtectionLevel contentProtectionLevel = CONTENT_PROTECTION_LEVEL_SW_CRYPTO;\nret = OH_MediaKeySystem_CreateMediaKeySession(system, &contentProtectionLevel, &session);\nif (ret != DRM_ERR_OK) {\n    // 如创建失败，请查看DRM接口文档及日志信息。\n    printf(\"create media key session failed.\");\n    return;\n}\nif (session == nullptr) {\n    printf(\"media key session is nullptr.\");\n    return;\n}\n// 获取许可证请求、设置许可证响应等。\n// 设置解密配置，即将解密会话、安全视频通路标志设置到解码器中。\nbool secureVideoPath = false;\nret = OH_VideoDecoder_SetDecryptionConfig(videoDec, session, secureVideoPath);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_Configure()配置解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "与Surface模式相同，此处不再赘述。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto format = std::shared_ptr<OH_AVFormat>(OH_AVFormat_Create(), OH_AVFormat_Destroy);\nif (format == nullptr) {\n    // 异常处理。\n}\n// 写入format。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_WIDTH, width); // 必须配置。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_HEIGHT, height); // 必须配置。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_PIXEL_FORMAT, pixelFormat);\n// 配置解码器。\nOH_AVErrCode ret = OH_VideoDecoder_Configure(videoDec, format.get());\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_Prepare()解码器就绪。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该接口将在解码器运行前进行一些数据的准备工作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVErrCode ret = OH_VideoDecoder_Prepare(videoDec);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_Start()启动解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::unique_ptr<std::ofstream> outputFile = std::make_unique<std::ofstream>();\nif (outputFile != nullptr) {\n    outputFile->open(\"/*yourpath*.yuv\", std::ios::out | std::ios::binary | std::ios::ate);\n}\n// 启动解码器，开始解码。\nOH_AVErrCode ret = OH_VideoDecoder_Start(videoDec);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）OH_VideoDecoder_SetParameter()动态配置解码器参数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详细可配置选项的说明请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase#%E5%AA%92%E4%BD%93%E6%95%B0%E6%8D%AE%E9%94%AE%E5%80%BC%E5%AF%B9",
            children: "视频专有键值对"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto format = std::shared_ptr<OH_AVFormat>(OH_AVFormat_Create(), OH_AVFormat_Destroy);\nif (format == nullptr) {\n    // 异常处理。\n}\n// 配置帧率。\nOH_AVFormat_SetDoubleValue(format.get(), OH_MD_KEY_FRAME_RATE, 30.0);\nOH_AVErrCode ret = OH_VideoDecoder_SetParameter(videoDec, format.get());\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_AVCencInfo_SetAVBuffer()，设置cencInfo。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "与Surface模式相同，此处不再赘述。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint32_t keyIdLen = DRM_KEY_ID_SIZE;\nuint8_t keyId[] = {\n    0xd4, 0xb2, 0x01, 0xe4, 0x61, 0xc8, 0x98, 0x96,\n    0xcf, 0x05, 0x22, 0x39, 0x8d, 0x09, 0xe6, 0x28};\nuint32_t ivLen = DRM_KEY_IV_SIZE;\nuint8_t iv[] = {\n    0xbf, 0x77, 0xed, 0x51, 0x81, 0xde, 0x36, 0x3e,\n    0x52, 0xf7, 0x20, 0x4f, 0x72, 0x14, 0xa3, 0x95};\nuint32_t encryptedBlockCount = 0;\nuint32_t skippedBlockCount = 0;\nuint32_t firstEncryptedOffset = 0;\nuint32_t subsampleCount = 1;\nDrmSubsample subsamples[1] = { {0x10, 0x16} };\n// 创建CencInfo实例。\nOH_AVCencInfo *cencInfo = OH_AVCencInfo_Create();\nif (cencInfo == nullptr) {\n    // 异常处理。\n}\n// 设置解密算法。\nOH_AVErrCode errNo = OH_AVCencInfo_SetAlgorithm(cencInfo, DRM_ALG_CENC_AES_CTR);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 设置KeyId和Iv。\nerrNo = OH_AVCencInfo_SetKeyIdAndIv(cencInfo, keyId, keyIdLen, iv, ivLen);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 设置Sample信息。\nerrNo = OH_AVCencInfo_SetSubsampleInfo(cencInfo, encryptedBlockCount, skippedBlockCount, firstEncryptedOffset,\n    subsampleCount, subsamples);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 设置模式：KeyId、Iv和SubSamples已被设置。\nerrNo = OH_AVCencInfo_SetMode(cencInfo, DRM_CENC_INFO_KEY_IV_SUBSAMPLES_SET);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 将CencInfo设置到AVBuffer中。\nerrNo = OH_AVCencInfo_SetAVBuffer(cencInfo, buffer);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n// 销毁CencInfo实例。\nerrNo = OH_AVCencInfo_Destroy(cencInfo);\nif (errNo != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_PushInputBuffer()写入解码码流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "与Surface模式相同，此处不再赘述。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::shared_ptr<CodecBufferInfo> bufferInfo = inQueue.Dequeue();\nstd::shared_lock<std::shared_mutex> lock(codecMutex);\nif (bufferInfo == nullptr || !bufferInfo->isValid) {\n    // 异常处理。\n}\n// 写入码流数据。\nuint8_t *addr = OH_AVBuffer_GetAddr(bufferInfo->buffer);\nif (addr == nullptr) {\n   // 异常处理。\n}\nint32_t capacity = OH_AVBuffer_GetCapacity(bufferInfo->buffer);\nif (size > capacity) {\n    // 异常处理。\n}\nmemcpy(addr, frameData, size);\n// 配置帧数据的输入尺寸、偏移量、时间戳等字段信息。\nOH_AVCodecBufferAttr info;\ninfo.size = size;\ninfo.offset = offset;\ninfo.pts = pts;\ninfo.flags = flags;\n// info信息写入buffer。\nOH_AVErrCode setBufferRet = OH_AVBuffer_SetBufferAttr(bufferInfo->buffer, &info);\nif (setBufferRet != AV_ERR_OK) {\n    // 异常处理。\n}\n// 送入解码输入队列进行解码，index为对应buffer队列的下标。\nOH_AVErrCode pushInputRet = OH_VideoDecoder_PushInputBuffer(videoDec, bufferInfo->index);\nif (pushInputRet != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_FreeOutputBuffer()释放解码帧。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下示例中，bufferInfo的成员变量："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "index：回调函数OnNewOutputBuffer传入的参数，与buffer唯一对应的标识；"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["buffer： 回调函数OnNewOutputBuffer传入的参数，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avbuffer-h/capi-native-avbuffer-h#oh_avbuffer_getaddr",
              children: "OH_AVBuffer_GetAddr"
            }), "接口获取图像虚拟地址；"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "isValid：bufferInfo中存储的buffer实例是否有效。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::shared_ptr<CodecBufferInfo> bufferInfo = outQueue.Dequeue();\nstd::shared_lock<std::shared_mutex> lock(codecMutex);\nif (bufferInfo == nullptr || !bufferInfo->isValid) {\n    // 异常处理。\n}\n// 获取解码后信息。\nOH_AVCodecBufferAttr info;\nOH_AVErrCode getBufferRet = OH_AVBuffer_GetBufferAttr(bufferInfo->buffer, &info);\nif (getBufferRet != AV_ERR_OK) {\n    // 异常处理。\n}\n// 将解码完成数据data写入到对应输出文件中。\nuint8_t *addr = OH_AVBuffer_GetAddr(bufferInfo->buffer);\nif (addr == nullptr) {\n   // 异常处理。\n}\nif (outputFile != nullptr && outputFile->is_open()) {\n    outputFile->write(reinterpret_cast<char *>(addr), info.size);\n}\n// Buffer模式，释放已完成写入的数据，index为对应buffer队列的下标。\nOH_AVErrCode freeOutputRet = OH_VideoDecoder_FreeOutputBuffer(videoDec, bufferInfo->index);\nif (freeOutputRet != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NV12/NV21图像如果需要依次将Y、U、V三个分量拷贝至另一块buffer中，以NV12图像为例，按行拷贝示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以NV12图像为例，width、height、wStride、hStride图像排布参考下图："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_MD_KEY_VIDEO_PIC_WIDTH表示width；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_MD_KEY_VIDEO_PIC_HEIGHT表示height；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_MD_KEY_VIDEO_STRIDE表示wStride；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_MD_KEY_VIDEO_SLICE_HEIGHT表示hStride。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(916443)/* ["default"] */.A) + "",
            width: "2723",
            height: "2022"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <string.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 源内存区域的宽、高，通过回调函数OnStreamChanged或接口OH_VideoDecoder_GetOutputDescription获取。\nstruct Rect\n{\n    int32_t width;\n    int32_t height;\n};\n\nstruct DstRect // 目标内存区域的宽跨距、高跨距，由开发者自行设置。\n{\n    int32_t wStride;\n    int32_t hStride;\n};\n// 源内存区域的宽跨距、高跨距，通过回调函数OnStreamChanged或接口OH_VideoDecoder_GetOutputDescription获取。\nstruct SrcRect\n{\n    int32_t wStride;\n    int32_t hStride;\n};\n\nRect rect = {320, 240};\nDstRect dstRect = {320, 240};\nSrcRect srcRect = {320, 256};\nuint8_t* dst = new uint8_t[dstRect.hStride * dstRect.wStride * 3 / 2]; // 目标内存区域的指针。\nuint8_t* src = new uint8_t[srcRect.hStride * srcRect.wStride * 3 / 2]; // 源内存区域的指针。\nuint8_t* dstTemp = dst;\nuint8_t* srcTemp = src;\nrect.height = ((rect.height + 1) / 2)  * 2 // 避免height为奇数；\nrect.width = ((rect.width + 1) / 2)  * 2 // 避免width为奇数；\n\n// Y 将Y区域的源数据复制到另一个区域的目标数据中。\nfor (int32_t i = 0; i < rect.height; ++i) {\n    // 将源数据的一行数据复制到目标数据的一行中。\n    memcpy(dstTemp, srcTemp, rect.width);\n    // 更新源数据和目标数据的指针，进行下一行的复制。每更新一次源数据和目标数据的指针都向下移动一个wStride。\n    dstTemp += dstRect.wStride;\n    srcTemp += srcRect.wStride;\n}\n// padding。\n// 更新源数据和目标数据的指针，指针都向下移动一个padding。\ndstTemp += (dstRect.hStride - rect.height) * dstRect.wStride;\nsrcTemp += (srcRect.hStride - rect.height) * srcRect.wStride;\nrect.height >>= 1;\n// UV 将UV区域的源数据复制到另一个区域的目标数据中。\nfor (int32_t i = 0; i < rect.height; ++i) {\n    memcpy(dstTemp, srcTemp, rect.width);\n    dstTemp += dstRect.wStride;\n    srcTemp += srcRect.wStride;\n}\n\ndelete[] dst;\ndst = nullptr;\ndelete[] src;\nsrc = nullptr;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "硬件解码在处理buffer数据时（释放数据前），输出回调开发者收到的AVbuffer是宽、高对齐后的图像数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一般需要获取数据的宽、高、跨距、像素格式来保证解码输出数据被正确的处理。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体实现请参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "#buffer%E6%A8%A1%E5%BC%8F",
            children: "Buffer模式"
          }), "的步骤3-调用OH_VideoDecoder_RegisterCallback()设置回调函数来获取数据的宽、高、跨距、像素格式。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["后续流程（包括刷新、重置、停止和销毁解码器）与Surface模式基本一致，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#surface%E6%A8%A1%E5%BC%8F",
        children: "Surface模式"
      }), "的步骤13-16。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/AVCodec",
          children: "基于AVCodec能力的视频编解码"
        })
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
939903(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
808792(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
442116(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
879731(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
757274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
138221(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958544-b62c7cbf2b38a572a0985c118835cbfc.png");

},
916443(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798902-45097cc1fee4786694ca512012b6b949.png");

},
301145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478551-bd6cc1ca97c83eca89691613c53f8102.png");

},
947389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
907980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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