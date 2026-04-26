"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["23415"], {
454701(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_hdr_vivid_capability_hdrvivid_2_sdr_hdrvivid_2_sdr_md_8df_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-hdr-vivid-capability-hdrvivid-2-sdr-hdrvivid-2-sdr-md-8df.json
var site_docs_avcodec_kit_audio_video_codec_hdr_vivid_capability_hdrvivid_2_sdr_hdrvivid_2_sdr_md_8df_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/hdr-vivid-capability/hdrvivid2sdr/hdrvivid2sdr","title":"视频解码支持HDRVivid2SDR","description":"在视频分享或者编辑场景时，开发者有时需要将HDR Vivid视频转换为SDR视频，可以调用AVCodec能力实现该功能。","source":"@site/docs/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdrvivid2sdr/hdrvivid2sdr.md","sourceDirName":"avcodec-kit/audio-video-codec/hdr-vivid-capability/hdrvivid2sdr","slug":"/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdrvivid2sdr/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdrvivid2sdr/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"视频解码支持HDRVivid2SDR","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hdrvivid2sdr","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HDR Vivid视频录制","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-recorder/"},"next":{"title":"媒体数据封装","permalink":"/harmonyos-docs-site/avcodec-kit/file-muxing-demuxing/audio-video-muxer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdrvivid2sdr/hdrvivid2sdr.md


const frontMatter = {
	title: '视频解码支持HDRVivid2SDR',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hdrvivid2sdr',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '视频解码支持HDRVivid2SDR';

const assets = {

};



const toc = [{
  "value": "限制约束",
  "id": "限制约束",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "视频解码支持hdrvivid2sdr",
        children: "视频解码支持HDRVivid2SDR"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在视频分享或者编辑场景时，开发者有时需要将HDR Vivid视频转换为SDR视频，可以调用AVCodec能力实现该功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(817587)/* ["default"] */.A) + "",
        width: "525",
        height: "51"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制约束",
      children: "限制约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目前仅硬件解码器支持该能力。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["目前仅Surface模式支持该能力。Surface模式和Buffer模式输出差异可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/avcodec-kit/audio-video-codec/video-decoding",
          children: "视频解码"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["目前使能该能力时，不支持码流分辨率变化，会通过回调函数OH_AVCodecOnError()报告错误码", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
          children: "AV_ERR_UNSUPPORT"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在成功调用OH_VideoDecoder_Configure接口后，以及在启动OH_VideoDecoder_Start接口前，必须要先调用OH_VideoDecoder_Prepare接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用OH_VideoDecoder_Reset接口之后，解码器将回到初始状态，需要重新调用OH_VideoDecoder_Configure、OH_VideoDecoder_Prepare和OH_VideoDecoder_SetSurface接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过配置OH_MD_KEY_VIDEO_DECODER_OUTPUT_COLOR_SPACE，支持在解码后输出SDR图像，目前输入仅支持为HDR Vivid的码流，输出仅支持配置为OH_COLORSPACE_BT709_LIMIT。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libnative_media_avsource.so)\ntarget_link_libraries(sample PUBLIC libnative_media_vdec.so)\ntarget_link_libraries(sample PUBLIC libnative_media_core.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(634394)/* ["default"] */.A) + "",
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
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/native_avcodec_videodecoder.h>\n#include <multimedia/player_framework/native_avcapability.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <multimedia/player_framework/native_avbuffer.h>\n#include <fstream>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-player",
            children: "HDR Vivid视频播放"
          }), "，添加头文件和解析文件，查询文件是否为HDR Vivid视频。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果非HDR Vivid视频，则参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding",
            children: "视频解码"
          }), "进行解码处理，此处不再赘述。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果判断为HDR Vivid视频，则继续执行以下步骤。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(470792)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果输入源非HDR Vivid视频，会通过回调函数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avcodec-base-h/capi-native-avcodec-base-h#oh_avcodeconerror",
            children: "OH_AVCodecOnError()"
          }), "报告错误码", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h#oh_averrcode",
            children: "AV_ERR_VIDEO_UNSUPPORTED_COLOR_SPACE_CONVERSION"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建解码器实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询系统支持的解码器能力，根据查询结果基于name创建硬解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例中的变量说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "videoDec：视频解码器实例的指针。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "capability：解码器能力查询实例的指针。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "OH_AVCODEC_MIMETYPE_VIDEO_HEVC：HEVC格式视频编解码器。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//3.1 获取指定硬件的视频HEVC解码器能力实例。\nOH_AVCapability *capability = OH_AVCodec_GetCapabilityByCategory(OH_AVCODEC_MIMETYPE_VIDEO_HEVC, false, HARDWARE);\nif (capability == nullptr){\n // 异常处理。\n}\n// 3.2 获取HEVC硬件解码器名称。\nconst char *name = OH_AVCapability_GetName(capability);\n// 3.3 创建HEVC硬件解码实例。\nOH_AVCodec *videoDec = OH_VideoDecoder_CreateByName(name);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(51446)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于目前仅硬件解码器支持该能力，因此必须根据解码器name进行创建。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_RegisterCallback()设置回调函数。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体可参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-player#hdr-vivid%E8%A7%86%E9%A2%91%E8%A7%A3%E7%A0%81",
            children: "HDR Vivid视频播放-HDR Vivid视频解码"
          }), " 中的“步骤3：配置异步回调函数”"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_VideoDecoder_Configure()配置解码器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需配置项：视频帧宽度、视频帧高度、视频像素格式、指定输出为SDR。具体示例如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DEFAULT_WIDTH：320像素宽度；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DEFAULT_HEIGHT：240像素高度；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DEFAULT_PIXELFORMAT： 像素格式，因为示例需要保存的YUV文件像素格式是NV12，所以设置为 AV_PIXEL_FORMAT_NV12。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 视频帧宽度。\nint32_t width = 320;\n// 视频帧高度。\nint32_t height = 240;\n// 视频像素格式。\nconstexpr OH_AVPixelFormat DEFAULT_PIXELFORMAT = AV_PIXEL_FORMAT_NV12;\nOH_AVFormat *format = OH_AVFormat_Create();\n// 5.1 配置视频宽、高、像素格式。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_WIDTH, width);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_HEIGHT, height);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_PIXEL_FORMAT, DEFAULT_PIXELFORMAT);\n// 5.2 指定输出为SDR视频。\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_VIDEO_DECODER_OUTPUT_COLOR_SPACE, OH_COLORSPACE_BT709_LIMIT);\n// 5.3 配置解码器。\nint32_t ret = OH_VideoDecoder_Configure(videoDec, format);\nif (ret != AV_ERR_OK) {\n    // 异常处理。\n}\nOH_AVFormat_Destroy(format);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(796212)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过配置OH_MD_KEY_VIDEO_DECODER_OUTPUT_COLOR_SPACE，支持在解码后输出SDR图像，目前输入仅支持为HDR Vivid的码流，输出仅支持配置为OH_COLORSPACE_BT709_LIMIT。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["后续步骤具体可参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding#surface%E6%A8%A1%E5%BC%8F",
            children: "视频解码Surface模式"
          }), "。"]
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
51446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
634394(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
796212(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
817587(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
470792(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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