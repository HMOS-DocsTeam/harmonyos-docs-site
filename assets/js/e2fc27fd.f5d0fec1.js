"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["920897"], {
777702(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_video_encoding_video_encoding_md_e2f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-video-encoding-video-encoding-md-e2f.json
var site_docs_avcodec_kit_audio_video_codec_video_encoding_video_encoding_md_e2f_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/video-encoding/video-encoding","title":"视频编码","description":"开发者可以调用本模块的Native API接口，完成视频编码，即将未压缩的视频数据压缩成视频码流。","source":"@site/docs/avcodec-kit/audio-video-codec/video-encoding/video-encoding.md","sourceDirName":"avcodec-kit/audio-video-codec/video-encoding","slug":"/avcodec-kit/audio-video-codec/video-encoding/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/video-encoding/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"视频编码","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-encoding","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"音频解码同步模式","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/synchronous-audio-decoding/"},"next":{"title":"视频编码同步模式","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/synchronous-video-encoding/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/video-encoding/video-encoding.md


const frontMatter = {
	title: '视频编码',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/video-encoding',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '视频编码';

const assets = {

};



const toc = [{
  "value": "限制约束",
  "id": "限制约束",
  "level": 2
}, {
  "value": "surface输入与buffer输入",
  "id": "surface输入与buffer输入",
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
        id: "视频编码",
        children: "视频编码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用本模块的Native API接口，完成视频编码，即将未压缩的视频数据压缩成视频码流。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/AVCodec",
        children: "示例工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持的编码能力请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/avcodec-support-formats#%E8%A7%86%E9%A2%91%E7%BC%96%E7%A0%81",
        children: "AVCodec支持的格式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要对HDRVivid视频进行编码，需要配置MimeType为H265 (OH_AVCODEC_MIMETYPE_VIDEO_HEVC)，本功能从API version 11开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "视频编码支持以下能力："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "运行时配置编码器参数，包括帧率、码率、QPMin/QPMax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过调用OH_VideoEncoder_SetParameter()配置， 具体可参考下文中：Surface模式的步骤-9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "随帧设置编码QPMin/QPMax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过调用OH_VideoEncoder_RegisterParameterCallback()注册随帧参数回调时配置，具体可参考下文中：Surface模式的步骤-4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "分层编码，LTR设置"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["具体可参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/avcodec-kit/audio-video-codec/video-encoding-temporal-scalability",
              children: "时域可分层视频编码"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "获取编码每帧平均量化参数（QPAverage）、平方误差（mseValue）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在配置回调函数OnNewOutputBuffer()时获取，具体可参考下文中：Surface模式的步骤-3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "变分辨率"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编码器支持输入图像分辨率发生变化。目前仅Surface模式支持且图像的宽、高不能超过OH_VideoEncoder_Configure接口配置的宽、高，具体可参考下文中：Surface模式的步骤-5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制约束",
      children: "限制约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Buffer模式不支持10bit的图像数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于硬件编码器资源有限，每个编码器在使用完毕后都必须调用OH_VideoEncoder_Destroy接口来销毁实例并释放资源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flush，Reset，Stop，Destroy在非回调线程中执行时，会等待所有回调执行完成后，将执行结果返回给开发者。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "一旦调用Flush，Reset，Stop接口，会触发系统回收OH_AVBuffer，开发者不应对之前回调函数获取到的OH_AVBuffer继续进行操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Buffer模式和Surface模式使用方式一致的接口，所以只提供了Surface模式的示例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在Buffer模式下，开发者通过输入回调函数OH_AVCodecOnNeedInputBuffer获取到OH_AVBuffer的指针实例后，必须通过调用OH_VideoEncoder_PushInputBuffer接口来通知系统该实例已被使用完毕。这样系统才能够将该实例里面的数据进行编码。如果开发者在调用OH_AVBuffer_GetNativeBuffer接口时获取到OH_NativeBuffer指针实例，并且该实例的生命周期超过了当前的OH_AVBuffer指针实例，那么需要进行一次数据的拷贝操作。在这种情况下，开发者需要自行管理新生成的OH_NativeBuffer实例的生命周期，确保其正确使用和释放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "为确保系统服务的持续可用性，当检测到应用存在异常实例占用行为时，系统将自动介入。开发者应注意：持续的实例管理不当可能导致进程被终止。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "surface输入与buffer输入",
      children: "surface输入与buffer输入"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "两者的数据来源不同。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "两者的适用场景不同："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "surface输入是指用OHNativeWindow来传递输入数据，可以与其他模块对接，例如相机模块。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "buffer输入是指有一块预先分配好的内存区域，开发者需要将原始数据拷贝进这块内存区域中。更适用于从文件中读取视频数据等场景。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在接口调用的过程中，两种方式的接口调用方式基本一致，但存在以下差异点："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Buffer模式下，开发者通过OH_VideoEncoder_PushInputBuffer接口输入数据；Surface模式下，开发者应在编码器就绪前调用OH_VideoEncoder_GetSurface接口，获取OHNativeWindow用于传递视频数据。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Buffer模式下，开发者通过OH_AVBuffer中的attr传入结束flag，编码器读取到尾帧后，停止编码；Surface模式下，需要调用OH_VideoEncoder_NotifyEndOfStream接口通知编码器输入流结束。"
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
        src: (__webpack_require__(961271)/* ["default"] */.A) + "",
        width: "4128",
        height: "2505"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "有两种方式可以使编码器进入Initialized状态："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "初始创建编码器实例时，编码器处于Initialized状态。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "任何状态下，调用OH_VideoEncoder_Reset接口，编码器将会移回Initialized状态。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Initialized状态下，调用OH_VideoEncoder_Configure接口配置编码器，配置成功后编码器进入Configured状态。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configured状态下，调用OH_VideoEncoder_Prepare()进入Prepared状态。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prepared状态下，调用OH_VideoEncoder_Start接口使编码器进入Executing状态："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "处于Executing状态时，调用OH_VideoEncoder_Stop接口可以使编码器返回到Prepared状态。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在极少数情况下，编码器可能会遇到错误并进入Error状态。编码器的错误传递，可以通过队列操作返回无效值或者抛出异常："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Error状态下，可以调用OH_VideoEncoder_Reset接口将编码器移到Initialized状态；或者调用OH_VideoEncoder_Destroy接口移动到最后的Released状态。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Executing 状态具有三个子状态：Flushed、Running和End-of-Stream："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在调用了OH_VideoEncoder_Start接口之后，编码器立即进入Running子状态。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对于处于Executing状态的编码器，可以调用OH_VideoEncoder_Flush接口返回到Flushed子状态。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当待处理数据全部传递给编码器后，可以在input buffers队列中为最后一个入队的input buffer中添加", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avbuffer-info-h/capi-native-avbuffer-info-h#oh_avcodecbufferflags",
              children: "AVCODEC_BUFFER_FLAGS_EOS"
            }), "标记，遇到这个标记时，编码器会转换为End-of-Stream子状态。在此状态下，编码器不再接受新的输入，但是仍然会继续生成输出，直到输出到达尾帧。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用完编码器后，必须调用OH_VideoEncoder_Destroy接口销毁编码器实例，使编码器进入Released状态。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h",
        children: "native_avcodec_videoencoder.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下为视频编码调用关系图："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "虚线表示可选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实线表示必选。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(862273)/* ["default"] */.A) + "",
        width: "4668",
        height: "3713"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libnative_media_codecbase.so)\ntarget_link_libraries(sample PUBLIC libnative_media_core.so)\ntarget_link_libraries(sample PUBLIC libnative_media_venc.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(958497)/* ["default"] */.A) + "",
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
          children: "编码器回调buffer的信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "struct CodecBufferInfo {\n    CodecBufferInfo(uint32_t index, OH_AVBuffer *buffer): index(index), buffer(buffer), isValid(true) {}\n    CodecBufferInfo(uint32_t index, OH_AVFormat *parameter): index(index), parameter(parameter), isValid(true) {}\n    // 回调buffer。\n    OH_AVBuffer *buffer = nullptr;\n    // Surface模式下，输入回调的随帧参数，需要注册随帧通路后使用。\n    OH_AVFormat *parameter = nullptr;\n    // 回调buffer对应的index。\n    uint32_t index = 0;\n    // 判断当前buffer信息是否有效。\n    bool isValid = true;\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编码输入输出队列。"
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
            children: "// 视频帧宽度。\nint32_t width = 320;\n// 视频帧高度。\nint32_t height = 240;\n// 视频像素格式。\n OH_AVPixelFormat pixelFormat = AV_PIXEL_FORMAT_NV12;\n// 视频宽跨距。\nint32_t widthStride = 0;\n// 视频高跨距。\nint32_t heightStride = 0;\n// 编码器实例指针。\nOH_AVCodec *videoEnc = nullptr;\n// 编码器同步锁。\nstd::shared_mutex codecMutex;\n// 编码器输入队列。\nCodecBufferQueue inQueue;\n// 编码器输出队列。\nCodecBufferQueue outQueue;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "surface模式",
      children: "Surface模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例代码，可以完成Surface模式下视频编码的全流程，实现异步模式的数据轮转。此处以输入surface数据，编码成H.264格式为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/native_avcodec_videoencoder.h>\n#include <multimedia/player_framework/native_avcapability.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <multimedia/player_framework/native_avbuffer.h>\n#include <fstream>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建编码器实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以通过名称或媒体类型创建编码器。示例中的变量说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "videoEnc：视频编码器实例的指针；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "capability：编解码器能力查询实例的指针；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_AVC：AVC格式视频编解码器。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建方式示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过codec name创建编码器，应用有特殊需求，比如选择支持某种分辨率规格的编码器，可先查询capability，再根据codec name创建编码器。\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\n// 创建硬件编码器实例。\nOH_AVCapability *capability= OH_AVCodec_GetCapabilityByCategory(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true, HARDWARE);\nconst char *codecName = OH_AVCapability_GetName(capability);\nOH_AVCodec *videoEnc = OH_VideoEncoder_CreateByName(codecName);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过MIME TYPE创建编码器。\nOH_AVCodec *videoEnc = OH_VideoEncoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_AVC);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_RegisterCallback()设置回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册回调函数指针集合OH_AVCodecCallback，包括："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["OH_AVCodecOnError 编码器运行错误，返回的错误码详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconerror",
              children: "OH_AVCodecOnError"
            }), "；"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnStreamChanged 码流信息变化，如格式变化等；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnNeedInputBuffer 输入回调无作用，开发者通过获取的surface输入数据；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnNewOutputBuffer 运行过程中产生了新的输出数据，即编码完成。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["回调函数的具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/AVCodec",
            children: "示例工程"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置OH_AVCodecOnError 回调函数，编码异常。\nstatic void OnError(OH_AVCodec *codec, int32_t errorCode, void *userData)\n{\n    // 回调的错误码由开发者判断处理。\n    (void)codec;\n    (void)errorCode;\n    (void)userData;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置OH_AVCodecOnStreamChanged 回调函数，编码数据流变化\nstatic void OnStreamChanged(OH_AVCodec *codec, OH_AVFormat *format, void *userData)\n{\n    (void)codec;\n    (void)format;\n    (void)userData;\n    // 可通过format获取到分辨率变化后的视频宽、高\n    OH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_PIC_WIDTH, &width);\n    OH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_PIC_HEIGHT, &height);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置 OH_AVCodecOnNeedInputBuffer 回调函数，编码输入帧送入数据队列。\nstatic void OnNeedInputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // Surface模式下，该回调函数无作用，开发者通过获取的surface输入数据。\n    (void)userData;\n    (void)index;\n    (void)buffer;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置 OH_AVCodecOnNewOutputBuffer 回调函数，编码完成帧送入输出队列。\nstatic void OnNewOutputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // 完成帧的数据buffer和对应的index送入outQueue队列。\n    (void)codec;\n    (void)userData;\n    outQueue.Enqueue(std::make_shared<CodecBufferInfo>(index, buffer));\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 配置异步回调，调用 OH_VideoEncoder_RegisterCallback()接口。\nOH_AVCodecCallback cb = {&OnError, &OnStreamChanged, &OnNeedInputBuffer, &OnNewOutputBuffer};\nOH_AVErrCode ret = OH_VideoEncoder_RegisterCallback(videoEnc, cb, nullptr); // nullptr:开发者执行回调所依赖的数据userData为空。\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(219807)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在回调函数中，对数据队列进行操作时，需要注意多线程同步的问题。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_VideoEncoder_RegisterParameterCallback()在Configure接口之前注册随帧通路回调。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详情请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-encoding-temporal-scalability",
            children: "时域可分层视频编码"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " // 4.1 编码输入参数回调OH_VideoEncoder_OnNeedInputParameter实现\n static void OnNeedInputParameter(OH_AVCodec *codec, uint32_t index, OH_AVFormat *parameter, void *userData)\n {\n     // 输入帧parameter对应的index，送入InParameterIndexQueue队列\n     // 输入帧的数据parameter送入InParameterQueue队列\n     // 数据处理\n     // 随帧参数写入\n     // 配置OH_MD_KEY_VIDEO_ENCODER_QP_MAX 的值应大于等于OH_MD_KEY_VIDEO_ENCODER_QP_MIN\n     OH_AVFormat_SetIntValue(parameter, OH_MD_KEY_VIDEO_ENCODER_QP_MAX, 30);\n     OH_AVFormat_SetIntValue(parameter, OH_MD_KEY_VIDEO_ENCODER_QP_MIN, 20);\n     inQueue.Enqueue(std::make_shared<CodecBufferInfo>(index, parameter));\n }\n\n // 4.2 注册随帧参数回调\n OH_VideoEncoder_OnNeedInputParameter inParaCb = OnNeedInputParameter;\n OH_VideoEncoder_RegisterParameterCallback(videoEnc, inParaCb, NULL); // NULL:用户特定数据userData为空\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Configure()配置编码器。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详细可配置选项的说明请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase#%E5%AA%92%E4%BD%93%E6%95%B0%E6%8D%AE%E9%94%AE%E5%80%BC%E5%AF%B9",
            children: "视频专有键值对"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参数校验规则请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-videoencoder-h/capi-native-avcodec-videoencoder-h#oh_videoencoder_configure",
            children: "OH_VideoEncoder_Configure()参考文档"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参数取值范围可以通过能力查询接口获取，具体示例请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/obtain-supported-codecs",
            children: "获取支持的编解码能力文档"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目前支持的所有格式都必须配置以下选项：视频帧宽度、视频帧高度、视频像素格式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 配置视频帧速率。\ndouble frameRate = 30.0;\n// 配置视频YUV值范围标志。\nint32_t rangeFlag = 0;\n// 配置视频原色。\nint32_t primary = static_cast<int32_t>(OH_ColorPrimary::COLOR_PRIMARY_BT709);\n// 配置传输特性。\nint32_t transfer = static_cast<int32_t>(OH_TransferCharacteristic::TRANSFER_CHARACTERISTIC_BT709);\n// 配置最大矩阵系数。\nint32_t matrix = static_cast<int32_t>(OH_MatrixCoefficient::MATRIX_COEFFICIENT_IDENTITY);\n// 配置编码Profile。\nint32_t profile = static_cast<int32_t>(OH_AVCProfile::AVC_PROFILE_HIGH);\n// 配置编码比特率模式。\nint32_t rateMode = static_cast<int32_t>(OH_BitrateMode::BITRATE_MODE_VBR);\n// 配置关键帧的间隔，单位为毫秒。\nint32_t iFrameInterval = 1000;\n// 配置质量稳定码率因子。\nint32_t sqrFactor = 30;\n// 配置最大比特率，单位为bps。\nint64_t maxBitRate = 20000000;\n// 配置比特率，单位为bps。\nint64_t bitRate = 5000000;\n// 配置编码质量。\nint64_t quality = 90;\n\nauto format = std::shared_ptr<OH_AVFormat>(OH_AVFormat_Create(), OH_AVFormat_Destroy);\nif (format == nullptr) {\n    // 异常处理。\n}\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_WIDTH, width); // 必须配置。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_HEIGHT, height); // 必须配置。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_PIXEL_FORMAT, pixelFormat); // 必须配置，\n\nOH_AVFormat_SetDoubleValue(format.get(), OH_MD_KEY_FRAME_RATE, frameRate);\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_RANGE_FLAG, rangeFlag);\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_COLOR_PRIMARIES, primary);\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_TRANSFER_CHARACTERISTICS, transfer);\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_MATRIX_COEFFICIENTS, matrix);\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_I_FRAME_INTERVAL, iFrameInterval);\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_PROFILE, profile);\n// 只有当OH_BitrateMode = BITRATE_MODE_CQ时，才需要配置OH_MD_KEY_QUALITY。\nif (rateMode == static_cast<int32_t>(OH_BitrateMode::BITRATE_MODE_CQ)) {\n    OH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_QUALITY, quality);\n} else if (rateMode == static_cast<int32_t>(OH_BitrateMode::BITRATE_MODE_SQR)) {\n    // 只有当OH_BitrateMode = BITRATE_MODE_SQR时，才需要配置OH_MD_KEY_MAX_BITRATE和OH_MD_KEY_SQR_FACTOR。\n    OH_AVFormat_SetLongValue(format.get(), OH_MD_KEY_MAX_BITRATE, maxBitRate);\n    OH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_SQR_FACTOR, sqrFactor);\n} else if (rateMode == static_cast<int32_t>(OH_BitrateMode::BITRATE_MODE_CBR) ||\n           rateMode == static_cast<int32_t>(OH_BitrateMode::BITRATE_MODE_VBR)){\n    OH_AVFormat_SetLongValue(format.get(), OH_MD_KEY_BITRATE, bitRate);\n}\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_VIDEO_ENCODE_BITRATE_MODE, rateMode);\nOH_AVErrCode ret = OH_VideoEncoder_Configure(videoEnc, format.get());\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(749409)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置非必须参数错误时，会返回AV_ERR_INVALID_VAL错误码。但OH_VideoEncoder_Configure()不会失败，而是使用默认值继续执行。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取surface。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取编码器Surface模式的OHNativeWindow输入，获取surface需要在调用OH_VideoEncoder_Prepare接口之前完成。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取需要输入的surface，以进行编码。\nOHNativeWindow *nativeWindow;\nOH_AVErrCode ret = OH_VideoEncoder_GetSurface(videoEnc, &nativeWindow);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 通过OHNativeWindow*变量类型，可通过生产者接口获取待填充数据地址。\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["OHNativeWindow*变量类型的使用方法请参考图形子系统 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativewindow/capi-nativewindow",
            children: "OHNativeWindow"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Prepare()编码器就绪。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该接口将在编码器运行前进行一些数据的准备工作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVErrCode ret = OH_VideoEncoder_Prepare(videoEnc);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Start()启动编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 配置待编码文件路径。\nstd::string_view outputFilePath = \"/*yourpath*.h264\";\nstd::unique_ptr<std::ofstream> outputFile = std::make_unique<std::ofstream>();\nif (outputFile != nullptr) {\n    outputFile->open(outputFilePath.data(), std::ios::out | std::ios::binary | std::ios::ate);\n}\n// 启动编码器，开始编码。\nOH_AVErrCode ret = OH_VideoEncoder_Start(videoEnc);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）OH_VideoEncoder_SetParameter()在运行过程中动态配置编码器参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVFormat *format = OH_AVFormat_Create();\n\n// 支持动态请求IDR帧\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_REQUEST_I_FRAME, true);\n// 支持动态重置比特率\nint64_t bitRate = 2000000;\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, bitRate);\n// 支持动态重置视频帧速率\ndouble frameRate = 60.0;\nOH_AVFormat_SetDoubleValue(format, OH_MD_KEY_FRAME_RATE, frameRate);\n// 支持动态设置QP值\n// 配置OH_MD_KEY_VIDEO_ENCODER_QP_MAX 的值应大于等于OH_MD_KEY_VIDEO_ENCODER_QP_MIN\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_ENCODER_QP_MAX, 30);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_ENCODER_QP_MIN, 20);\n\nint32_t ret = OH_VideoEncoder_SetParameter(videoEnc, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理\n}\nOH_AVFormat_Destroy(format);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "写入编码图像。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在之前的第6步中，开发者已经对OH_VideoEncoder_GetSurface接口返回的OHNativeWindow*类型变量进行配置。因为编码所需的数据，由配置的surface进行持续地输入，所以开发者无需对OnNeedInputBuffer回调函数进行处理，也无需使用OH_VideoEncoder_PushInputBuffer接口输入数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在变分辨率场景中，此规则也同样适用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_VideoEncoder_PushInputParameter()通知编码器随帧参数配置输入完成。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在之前的第4步中，开发者已经注册随帧通路回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下示例中："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "index：回调函数OnNeedInputParameter传入的参数，与buffer唯一对应的标识。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::shared_ptr<CodecBufferInfo> bufferInfo = inQueue.Dequeue();\nstd::shared_lock<std::shared_mutex> lock(codecMutex);\nif (bufferInfo == nullptr || !bufferInfo->isValid) {\n    // 异常处理。\n}\n// 值由开发者决定。\nint32_t isIFrame;\nOH_AVFormat_SetIntValue(bufferInfo->parameter, OH_MD_KEY_REQUEST_I_FRAME, isIFrame);\nOH_AVErrCode ret = OH_VideoEncoder_PushInputParameter(videoEnc, bufferInfo->index);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_NotifyEndOfStream()通知编码器结束。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Surface模式：通知视频编码器输入流已结束，只能使用此接口进行通知。\n// 不能像Buffer模式中将flag设为AVCODEC_BUFFER_FLAGS_EOS，再调用OH_VideoEncoder_PushInputBuffer接口通知编码器输入结束。\nOH_AVErrCode ret = OH_VideoEncoder_NotifyEndOfStream(videoEnc);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_FreeOutputBuffer()释放编码帧。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下示例中，bufferInfo的成员变量："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "index：回调函数OnNewOutputBuffer传入的参数，与buffer唯一对应的标识；"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["buffer：回调函数OnNewOutputBuffer传入的参数，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avbuffer-h/capi-native-avbuffer-h#oh_avbuffer_getaddr",
              children: "OH_AVBuffer_GetAddr"
            }), "接口得到共享内存地址的指针；"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "isValid：bufferInfo中存储的buffer实例是否有效。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::shared_ptr<CodecBufferInfo> bufferInfo = outQueue.Dequeue();\nstd::shared_lock<std::shared_mutex> lock(codecMutex);\nif (bufferInfo == nullptr || !bufferInfo->isValid) {\n    // 异常处理。\n}\nint32_t qpAverage = 20;\ndouble mseValue = 0.0;\nOH_AVFormat *format = OH_AVBuffer_GetParameter(bufferInfo->buffer);\nOH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_ENCODER_QP_AVERAGE, &qpAverage);\nOH_AVFormat_GetDoubleValue(format, OH_MD_KEY_VIDEO_ENCODER_MSE, &mseValue);\nOH_AVFormat_Destroy(format);\n// 获取编码后信息。\nOH_AVCodecBufferAttr info;\nint32_t ret = OH_AVBuffer_GetBufferAttr(bufferInfo->buffer, &info);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n// 将编码完成帧数据buffer写入到对应输出文件中。\noutputFile->write(reinterpret_cast<char *>(OH_AVBuffer_GetAddr(bufferInfo->buffer)), info.size);\n// 释放已完成写入的数据，index为对应输出队列下标\nret = OH_VideoEncoder_FreeOutputBuffer(videoEnc, bufferInfo->index);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_VideoEncoder_Flush()刷新编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Flush接口后，编码器仍处于运行态，但会清除编码器中缓存的输入和输出数据及参数集如H.264格式的PPS/SPS。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此时需要调用OH_VideoEncoder_Start接口重新开始编码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::unique_lock<std::shared_mutex> lock(codecMutex);\n// 刷新编码器videoEnc。\nOH_AVErrCode flushRet = OH_VideoEncoder_Flush(videoEnc);\nif (flushRet != AV_ERR_OK) {\n    // 异常处理。\n}\ninQueue.Flush();\noutQueue.Flush();\n// 重新开始编码。\nOH_AVErrCode startRet = OH_VideoEncoder_Start(videoEnc);\nif (startRet != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_VideoEncoder_Reset()重置编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Reset接口后，编码器将回到初始化的状态，需要调用OH_VideoEncoder_Configure接口和OH_VideoEncoder_Prepare接口重新配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::unique_lock<std::shared_mutex> lock(codecMutex);\n// 重置编码器videoEnc。\nOH_AVErrCode resetRet = OH_VideoEncoder_Reset(videoEnc);\nif (resetRet != AV_ERR_OK) {\n    // 异常处理。\n}\ninQueue.Flush();\noutQueue.Flush();\n// 重新配置编码器参数。\nauto format = std::shared_ptr<OH_AVFormat>(OH_AVFormat_Create(), OH_AVFormat_Destroy);\nif (format == nullptr) {\n    // 异常处理。\n}\nOH_AVErrCode configRet = OH_VideoEncoder_Configure(videoEnc, format.get());\nif (configRet != AV_ERR_OK) {\n    // 异常处理。\n}\n// 编码器重新就绪。\nOH_AVErrCode prepareRet = OH_VideoEncoder_Prepare(videoEnc);\nif (prepareRet != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）调用OH_VideoEncoder_Stop()停止编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Stop接口后，编码器保留了编码实例，释放输入输出buffer。开发者可以直接调用OH_VideoEncoder_Start接口继续编码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::unique_lock<std::shared_mutex> lock(codecMutex);\n// 终止编码器videoEnc。\nOH_AVErrCode ret = OH_VideoEncoder_Stop(videoEnc);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\ninQueue.Flush();\noutQueue.Flush();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Destroy()销毁编码器实例，释放资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(690480)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不能在回调函数中调用；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "执行该步骤之后，需要开发者将videoEnc指向nullptr，防止野指针导致程序错误。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::unique_lock<std::shared_mutex> lock(codecMutex);\n// 释放nativeWindow实例。\nif(nativeWindow != nullptr){\n    OH_NativeWindow_DestroyNativeWindow(nativeWindow);\n    nativeWindow = nullptr;\n}\n// 调用OH_VideoEncoder_Destroy，注销编码器。\nOH_AVErrCode ret = AV_ERR_OK;\nif (videoEnc != nullptr) {\n    OH_VideoEncoder_Destroy(videoEnc);\n    videoEnc = nullptr;\n}\ninQueue.Flush();\noutQueue.Flush();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buffer模式",
      children: "Buffer模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例代码，可以完成Buffer模式下视频编码的全流程，实现异步模式的数据轮转。此处以输入YUV文件，编码成H.264格式为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/native_avcodec_videoencoder.h>\n#include <multimedia/player_framework/native_avcapability.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <multimedia/player_framework/native_avbuffer.h>\n#include <fstream>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建编码器实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "与Surface模式相同，此处不再赘述。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过codec name创建编码器，应用有特殊需求，比如选择支持某种分辨率规格的编码器，可先查询capability，再根据codec name创建编码器。\nOH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true);\nconst char *codecName = OH_AVCapability_GetName(capability);\nOH_AVCodec *videoEnc = OH_VideoEncoder_CreateByName(codecName);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过MIME TYPE创建编码器。\nOH_AVCodec *videoEnc = OH_VideoEncoder_CreateByMime(OH_AVCODEC_MIMETYPE_VIDEO_AVC);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_RegisterCallback()设置回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册回调函数指针集合OH_AVCodecCallback，包括："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["OH_AVCodecOnError 编码器运行错误，返回的错误码详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconerror",
              children: "OH_AVCodecOnError"
            }), "；"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnStreamChanged 码流信息变化，如格式变化等；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnNeedInputBuffer 运行过程中需要新的输入数据，即编码器已准备好，可以输入YUV/RGB数据；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCodecOnNewOutputBuffer 运行过程中产生了新的输出数据，即编码完成。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以通过处理该回调报告的信息，确保编码器正常运转。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["回调函数的具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/AVCodec",
            children: "示例工程"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool isFirstFrame = true;\nint32_t qpAverage = 20;\ndouble mseValue = 0.0;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 编码异常回调OH_AVCodecOnError实现。\nstatic void OnError(OH_AVCodec *codec, int32_t errorCode, void *userData)\n{\n    // 回调的错误码由开发者判断处理。\n    (void)codec;\n    (void)errorCode;\n    (void)userData;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 编码数据流变化回调OH_AVCodecOnStreamChanged实现。\nstatic void OnStreamChanged(OH_AVCodec *codec, OH_AVFormat *format, void *userData)\n{\n    // Buffer模式下，该回调函数无作用。\n    (void)codec;\n    (void)format;\n    (void)userData;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 编码输入回调OH_AVCodecOnNeedInputBuffer实现。\nstatic void OnNeedInputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // 获取视频宽跨距、高跨距。\n    if (isFirstFrame) {\n        auto format = std::shared_ptr<OH_AVFormat>(OH_VideoEncoder_GetInputDescription(codec), OH_AVFormat_Destroy);\n        if (format == nullptr) {\n            // 异常处理。\n        }\n        bool ret = OH_AVFormat_GetIntValue(format.get(), OH_MD_KEY_VIDEO_STRIDE, &widthStride) &&\n                   OH_AVFormat_GetIntValue(format.get(), OH_MD_KEY_VIDEO_SLICE_HEIGHT, &heightStride);\n        if (!ret) {\n            // 异常处理。\n        }\n        isFirstFrame = false;\n    }\n    // 输入帧的数据buffer和对应的index送入inQueue队列。\n    (void)codec;\n    (void)userData;\n    inQueue.Enqueue(std::make_shared<CodecBufferInfo>(index, buffer));\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 编码输出回调OH_AVCodecOnNewOutputBuffer实现\nstatic void OnNewOutputBuffer(OH_AVCodec *codec, uint32_t index, OH_AVBuffer *buffer, void *userData)\n{\n    // 获取视频帧的平均量化参数，平方误差\n    OH_AVFormat *format = OH_AVBuffer_GetParameter(buffer);\n    OH_AVFormat_GetIntValue(format, OH_MD_KEY_VIDEO_ENCODER_QP_AVERAGE, &qpAverage);\n    OH_AVFormat_GetDoubleValue(format, OH_MD_KEY_VIDEO_ENCODER_MSE, &mseValue);\n    OH_AVFormat_Destroy(format);\n    // 完成帧的数据buffer和对应的index送入outQueue队列\n    (void)userData;\n    outQueue.Enqueue(std::make_shared<CodecBufferInfo>(index, buffer));\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 配置异步回调，调用OH_VideoEncoder_RegisterCallback接口。\nOH_AVCodecCallback cb = {&OnError, &OnStreamChanged, &OnNeedInputBuffer, &OnNewOutputBuffer};\nOH_AVErrCode ret = OH_VideoEncoder_RegisterCallback(videoEnc, cb, nullptr);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(322467)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在回调函数中，对数据队列进行操作时，需要注意多线程同步的问题。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Configure()配置编码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "与Surface模式相同，此处不再赘述。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto format = std::shared_ptr<OH_AVFormat>(OH_AVFormat_Create(), OH_AVFormat_Destroy);\nif (format == nullptr) {\n    // 异常处理。\n}\n// 写入format。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_WIDTH, width); // 必须配置。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_HEIGHT, height); // 必须配置。\nOH_AVFormat_SetIntValue(format.get(), OH_MD_KEY_PIXEL_FORMAT, pixelFormat); // 必须配置。\n// 配置编码器。\nOH_AVErrCode ret = OH_VideoEncoder_Configure(videoEnc, format.get());\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Prepare()编码器就绪。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该接口将在编码器运行前进行一些数据的准备工作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVErrCode ret = OH_VideoEncoder_Prepare(videoEnc);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_Start()启动编码器，进入运行态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动编码器后，回调函数将开始响应事件。所以，需要先配置输入文件、输出文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 配置待编码文件路径。\nstd::string_view inputFilePath = \"/*yourpath*.yuv\";\nstd::string_view outputFilePath = \"/*yourpath*.h264\";\nstd::unique_ptr<std::ifstream> inputFile = std::make_unique<std::ifstream>();\nstd::unique_ptr<std::ofstream> outputFile = std::make_unique<std::ofstream>();\nif (inputFile != nullptr) {\n    inputFile->open(inputFilePath.data(), std::ios::in | std::ios::binary);\n}\nif (outputFile != nullptr) {\n    outputFile->open(outputFilePath.data(), std::ios::out | std::ios::binary | std::ios::ate);\n}\n// 启动编码器，开始编码。\nOH_AVErrCode ret = OH_VideoEncoder_Start(videoEnc);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）在运行过程中动态配置编码器参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVFormat *format = OH_AVFormat_Create();\n\n// 支持动态请求IDR帧\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_REQUEST_I_FRAME, true);\n// 支持动态重置比特率\nint64_t bitRate = 2000000;\nOH_AVFormat_SetLongValue(format, OH_MD_KEY_BITRATE, bitRate);\n// 支持动态重置视频帧速率\ndouble frameRate = 60.0;\nOH_AVFormat_SetDoubleValue(format, OH_MD_KEY_FRAME_RATE, frameRate);\n\nint32_t ret = OH_VideoEncoder_SetParameter(videoEnc, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理\n}\nOH_AVFormat_Destroy(format);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_PushInputBuffer()写入编码图像。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "送入输入队列进行编码，以下示例中："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "widthStride: 获取到的buffer数据的宽跨距。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "heightStride：获取到的buffer数据的高跨距。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "bufferInfo的成员变量："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["buffer：回调函数OnNeedInputBuffer传入的参数，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avbuffer-h/capi-native-avbuffer-h#oh_avbuffer_getaddr",
              children: "OH_AVBuffer_GetAddr"
            }), "接口得到共享内存地址的指针；"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "index：回调函数OnNeedInputBuffer传入的参数，与buffer唯一对应的标识；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "isValid：bufferInfo中存储的buffer实例是否有效。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::shared_ptr<CodecBufferInfo> bufferInfo = inQueue.Dequeue();\nstd::shared_lock<std::shared_mutex> lock(codecMutex);\nif (bufferInfo == nullptr || !bufferInfo->isValid) {\n    // 异常处理。\n}\n// 写入图像数据。\nint32_t frameSize = 0;\nif (widthStride == width && heightStride == height) {\n    frameSize = width * height * 3 / 2; // NV12像素格式下，每帧数据大小的计算公式\n    int32_t capacity = OH_AVBuffer_GetCapacity(bufferInfo->buffer);\n    if (frameSize > capacity) {\n        // 异常处理。\n    }\n    // 处理文件流得到帧的长度，再将需要编码的数据写入到对应index的buffer中。\n    uint8_t *addr = OH_AVBuffer_GetAddr(bufferInfo->buffer);\n    if (addr == nullptr) {\n       // 异常处理。\n    }\n    if (inputFile != nullptr && inputFile->is_open()) {\n        inputFile->read(reinterpret_cast<char *>(addr), frameSize);\n    }\n} else {\n    // 如果跨距不等于宽，需要开发者按照跨距进行偏移，具体可参考以下示例。\n}\n// 配置buffer info信息。\nOH_AVCodecBufferAttr info;\ninfo.size = frameSize;\ninfo.offset = 0;\n// 注意此处和Surface模式不同，pts需要应用填充，可根据预期显示的时间进行计算写入，如：帧数 * 1000000 / frameRate。\ninfo.pts = 0;\n// 避免flags随机初始化为AVCODEC_BUFFER_FLAGS_EOS导致使用异常，flags需要赋值如0（普通帧标识）。\ninfo.flags = 0;\nOH_AVErrCode setBufferRet = OH_AVBuffer_SetBufferAttr(bufferInfo->buffer, &info);\nif (setBufferRet != AV_ERR_OK) {\n    // 异常处理。\n}\n// 配置buffer 随帧信息。\n// 值由开发者决定。\nint32_t isIFrame;\nauto parameter = std::shared_ptr<OH_AVFormat>(OH_AVBuffer_GetParameter(bufferInfo->buffer), OH_AVFormat_Destroy);\nif (parameter == nullptr) {\n    // 异常处理。\n}\nOH_AVFormat_SetIntValue(parameter.get(), OH_MD_KEY_REQUEST_I_FRAME, isIFrame);\nOH_AVErrCode parameterRet = OH_AVBuffer_SetParameter(bufferInfo->buffer, parameter.get());\nif (parameterRet != AV_ERR_OK) {\n    // 异常处理。\n}\n// 送入编码输入队列进行编码，index为对应输入队列的下标。\nOH_AVErrCode pushInputRet = OH_VideoEncoder_PushInputBuffer(videoEnc, bufferInfo->index);\nif (pushInputRet != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对跨距进行偏移，以NV12图像为例，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以NV12图像为例，width、height、wStride、hStride图像排布参考下图："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_MD_KEY_WIDTH表示width；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_MD_KEY_HEIGHT表示height；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_MD_KEY_VIDEO_STRIDE表示wStride；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_MD_KEY_VIDEO_SLICE_HEIGHT表示hStride。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(279047)/* ["default"] */.A) + "",
            width: "3035",
            height: "1946"
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
            children: "struct Rect   // 源内存区域的宽、高，由开发者自行设置。\n{\n    int32_t width;\n    int32_t height;\n};\n\nstruct DstRect // 目标内存区域的宽跨距、高跨距，通过接口OH_VideoEncoder_GetInputDescription获取。\n{\n    int32_t wStride;\n    int32_t hStride;\n};\n\nstruct SrcRect // 源内存区域的宽跨距、高跨距，由开发者自行设置。\n{\n    int32_t wStride;\n    int32_t hStride;\n};\n\nRect rect = {320, 240};\nDstRect dstRect = {320, 256};\nSrcRect srcRect = {320, 250};\nuint8_t* dst = new uint8_t[dstRect.hStride * dstRect.wStride * 3 / 2]; // 目标内存区域的指针。\nuint8_t* src = new uint8_t[srcRect.hStride * srcRect.wStride * 3 / 2]; // 源内存区域的指针。\nuint8_t* dstTemp = dst;\nuint8_t* srcTemp = src;\nrect.height = ((rect.height + 1) / 2)  * 2; // 避免height为奇数。\nrect.width = ((rect.width + 1) / 2)  * 2; // 避免width为奇数。\n\n// Y 将Y区域的源数据复制到另一个区域的目标数据中。\nfor (int32_t i = 0; i < rect.height; ++i) {\n    // 将源数据的一行数据复制到目标数据的一行中。\n    memcpy(dstTemp, srcTemp, rect.width);\n    // 更新源数据和目标数据的指针，进行下一行的复制。每更新一次源数据和目标数据的指针都向下移动一个wStride。\n    dstTemp += dstRect.wStride;\n    srcTemp += srcRect.wStride;\n}\n// padding。\n// 更新源数据和目标数据的指针，指针都向下移动一个padding。\ndstTemp += (dstRect.hStride - rect.height) * dstRect.wStride;\nsrcTemp += (srcRect.hStride - rect.height) * srcRect.wStride;\nrect.height >>= 1;\n// UV 将UV区域的源数据复制到另一个区域的目标数据中。\nfor (int32_t i = 0; i < rect.height; ++i) {\n    memcpy(dstTemp, srcTemp, rect.width);\n    dstTemp += dstRect.wStride;\n    srcTemp += srcRect.wStride;\n}\n\ndelete[] dst;\ndst = nullptr;\ndelete[] src;\nsrc = nullptr;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "硬件编码在处理buffer数据时（推送数据前），需要开发者拷贝宽、高对齐后的图像数据到输入回调的AVbuffer中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一般需要获取数据的宽、高、跨距、像素格式来保证编码输入数据被正确的处理。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体实现请参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "#buffer%E6%A8%A1%E5%BC%8F",
            children: "Buffer模式"
          }), "的步骤3-调用OH_VideoEncoder_RegisterCallback接口设置回调函数来获取数据的宽、高、跨距、像素格式。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通知编码器结束。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在编码过程中，当最后一帧数据被送入编码输入队列时，需要设置bufferInfo的flag标识为AVCODEC_BUFFER_FLAGS_EOS，通知编码器输入结束。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下示例中，bufferInfo的成员变量："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "index：回调函数OnNeedInputBuffer传入的参数，与buffer唯一对应的标识；"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["buffer：回调函数OnNeedInputBuffer传入的参数，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avbuffer-h/capi-native-avbuffer-h#oh_avbuffer_getaddr",
              children: "OH_AVBuffer_GetAddr"
            }), "接口得到共享内存地址的指针;"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "isValid：bufferInfo中存储的buffer实例是否有效。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::shared_ptr<CodecBufferInfo> bufferInfo = inQueue.Dequeue();\nstd::shared_lock<std::shared_mutex> lock(codecMutex);\nif (bufferInfo == nullptr || !bufferInfo->isValid) {\n    // 异常处理。\n}\n// 写入最后一帧图像数据，参考\"步骤-8. 写入编码图像\"。\n// 配置buffer info信息，设置AVCODEC_BUFFER_FLAGS_EOS标识。\nOH_AVCodecBufferAttr info;\ninfo.size = frameSize;\ninfo.offset = 0;\n// 注意此处和Surface模式不同，pts需要应用填充，可根据预期显示的时间进行计算写入，如：帧数 * 1000000 / frameRate。\ninfo.pts = 0;\ninfo.flags = AVCODEC_BUFFER_FLAGS_EOS;\nOH_AVErrCode setBufferRet = OH_AVBuffer_SetBufferAttr(bufferInfo->buffer, &info);\nif (setBufferRet != AV_ERR_OK) {\n    // 异常处理。\n}\nOH_AVErrCode pushInputRet = OH_VideoEncoder_PushInputBuffer(videoEnc, bufferInfo->index);\nif (pushInputRet != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoEncoder_FreeOutputBuffer()释放编码帧。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "与Surface模式相同，此处不再赘述。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::shared_ptr<CodecBufferInfo> bufferInfo = outQueue.Dequeue();\nstd::shared_lock<std::shared_mutex> lock(codecMutex);\nif (bufferInfo == nullptr || !bufferInfo->isValid) {\n    // 异常处理。\n}\n// 获取编码后信息。\nOH_AVCodecBufferAttr info;\nOH_AVErrCode getBufferRet = OH_AVBuffer_GetBufferAttr(bufferInfo->buffer, &info);\nif (getBufferRet != AV_ERR_OK) {\n    // 异常处理。\n}\n// 将编码完成帧数据buffer写入到对应输出文件中。\nuint8_t *addr = OH_AVBuffer_GetAddr(bufferInfo->buffer);\nif (addr == nullptr) {\n   // 异常处理。\n}\nif (outputFile != nullptr && outputFile->is_open()) {\n    outputFile->write(reinterpret_cast<char *>(addr), info.size);\n}\n// 释放已完成写入的数据，index为对应输出队列的下标。\nOH_AVErrCode freeOutputRet = OH_VideoEncoder_FreeOutputBuffer(videoEnc, bufferInfo->index);\nif (freeOutputRet != AV_ERR_OK) {\n    // 异常处理。\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["后续流程（包括刷新、重置、停止和销毁编码器）与Surface模式一致，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#surface%E6%A8%A1%E5%BC%8F",
        children: "Surface模式"
      }), "的步骤14-17。"]
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
322467(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
279047(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798896-c2a6d1a8033a7232dd56507e1b0ffe72.png");

},
958497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
219807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
690480(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
862273(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478545-4856a460d54d0fd810a94c6b46c7dd80.png");

},
749409(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
961271(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958544-b62c7cbf2b38a572a0985c118835cbfc.png");

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