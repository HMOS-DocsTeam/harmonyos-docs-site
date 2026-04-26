"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["63486"], {
741823(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_c_videoprocessing_guidelines_generate_super_resolution_video_generate_super_resolution_video_md_63d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-c-videoprocessing-guidelines-generate-super-resolution-video-generate-super-resolution-video-md-63d.json
var site_docs_media_kit_media_kit_dev_c_videoprocessing_guidelines_generate_super_resolution_video_generate_super_resolution_video_md_63d_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--c/videoprocessing-guidelines/generate-super-resolution-video/generate-super-resolution-video","title":"视频缩放","description":"本模块提供视频细节增强的C API接口，通过调用本模块的接口，可以实现视频流图像内容的清晰度增强及缩放功能，处理后的数据可以用于送显、播放和录制。","source":"@site/docs/media-kit/media-kit-dev--c/videoprocessing-guidelines/generate-super-resolution-video/generate-super-resolution-video.md","sourceDirName":"media-kit/media-kit-dev--c/videoprocessing-guidelines/generate-super-resolution-video","slug":"/media-kit/media-kit-dev--c/videoprocessing-guidelines/generate-super-resolution-video/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/videoprocessing-guidelines/generate-super-resolution-video/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"视频缩放","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/generate-super-resolution-video","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVTranscoder实现视频转码(C/C++)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-transcoder-c/using-ndk-avtranscoder-for-transcodering/"},"next":{"title":"视频动态元数据生成","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/videoprocessing-guidelines/generate-video-dynamic-metadata/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--c/videoprocessing-guidelines/generate-super-resolution-video/generate-super-resolution-video.md


const frontMatter = {
	title: '视频缩放',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/generate-super-resolution-video',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '视频缩放';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
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
        id: "视频缩放",
        children: "视频缩放"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供视频细节增强的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-videoprocessing/capi-videoprocessing",
        children: "C API接口"
      }), "，通过调用本模块的接口，可以实现视频流图像内容的清晰度增强及缩放功能，处理后的数据可以用于送显、播放和录制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "典型应用场景如：视频解码 > 视频细节增强 > XComponent显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为保证处理能够实时响应，建议只创建一个实例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前仅支持处理同时满足以下条件的视频："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "视频为SDR（Standard dynamic range）视频。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "视频的像素格式为NV12、NV21，输出格式与输入格式一致。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本模块提供4个档位的算法，处理效果逐渐变优，但性能也会逐渐下降。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "档位"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "输入分辨率要求（单位：像素）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "输出分辨率要求（单位：像素）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：(32,2000]  高：(32,2000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：(32,2000]  高：(32,2000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "仅适用于缩放场景，无清晰度增强效果。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "LOW"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：(32,2000]  高：(32,2000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：(32,2000]  高：(32,2000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "仅适用于缩放场景，等比缩放时无清晰度增强效果。  缩放时会对图像进行低质量的清晰度增强，处理速度较快。  该档位为默认设置。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MEDIUM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：(32,2000]  高：(32,2000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：(32,2000]  高：(32,2000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "仅适用于缩放场景，等比缩放时无清晰度增强效果。  缩放时会对图像进行中等质量的清晰度增强，处理速度适中。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HIGH"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[512,2000]  高：[512,2000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[512,2000]  高：[512,2000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适用于缩放及清晰度增强场景，等比缩放时能进行清晰度增强。  缩放时会对图像进行高质量的清晰度增强，处理速度相对较慢。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不允许在视频处理回调函数中，直接调用视频处理相关接口或其他耗时操作，请在应用自己的线程中调用。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/VideoProcessing",
        children: "示例工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libvideo_processing.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <ace/xcomponent/native_interface_xcomponent.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <multimedia/video_processing_engine/video_processing.h>\n#include <multimedia/video_processing_engine/video_processing_types.h>\n#include <native_window/external_window.h>\n#include <native_buffer/native_buffer.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）创建解码实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "细节增强模块的输入可以是来自系统解码的视频流，也可以由应用自行往window填充视频数据（例如：应用内部软解后直接将数据填充到window中）。若选择系统解码器对视频文件或视频流媒体进行处理，则可以创建解码实例来作为细节增强模块的输入。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建Demuxer（媒体多路分解器）解析音视频信息(详见代码示例)\nOH_AVSource* source_ = OH_AVSource_CreateWithFD(inputFd, inputFileOffset, inputFileSize);\nOH_AVDemuxer* demuxer_ = OH_AVDemuxer_CreateWithSource(source_);\nauto sourceFormat = std::shared_ptr<OH_AVFormat>(OH_AVSource_GetSourceFormat(source_), OH_AVFormat_Destroy);\n// 创建视频解码器\nOH_AVCodec * decoder_ = OH_VideoDecoder_CreateByMime(videoCodecMime.c_str());\n// 配置视频信息\nOH_AVFormat *format = OH_AVFormat_Create();\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_WIDTH, videoWidth);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_HEIGHT, videoHeight);\nOH_AVFormat_SetDoubleValue(format, OH_MD_KEY_FRAME_RATE, frameRate);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_PIXEL_FORMAT, pixelFormat);\nOH_AVFormat_SetIntValue(format, OH_MD_KEY_ROTATION, rotation);\nint ret = OH_VideoDecoder_Configure(decoder_, format);\nOH_AVFormat_Destroy(format);\n// 配置回调，维护视频解码器buffer队列（详见代码示例）\nOH_VideoDecoder_RegisterCallback(decoder_,\n        {SampleCallback::OnCodecError, SampleCallback::OnCodecFormatChange,\n         SampleCallback::OnNeedInputBuffer, SampleCallback::OnNewOutputBuffer}, videoDecContext_);\n// 准备视频解码器\nint ret = OH_VideoDecoder_Prepare(decoder_);\n// 创建解码上下文\nvideoDecContext_ = new CodecUserData;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）初始化环境。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一般在进程内第一次使用时调用，可提前完成部分耗时操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "VideoProcessing_ErrorCode ret = OH_VideoProcessing_InitializeEnvironment();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建细节增强模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用可以通过视频处理引擎模块类型来创建细节增强模块。示例中的变量说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "videoProcessor：细节增强模块实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "VIDEO_PROCESSING_TYPE_DETAIL_ENHANCER：细节增强类型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "预期返回值：VIDEO_PROCESSING_SUCCESS"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过指定视频处理引擎类型创建细节增强模块实例\nVideoProcessing_ErrorCode ret = OH_VideoProcessing_Create(&videoProcessor, VIDEO_PROCESSING_TYPE_DETAIL_ENHANCER);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置异步回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建回调实例\nret = OH_VideoProcessingCallback_Create(&callback);\n// 绑定回调函数\nOH_VideoProcessingCallback_BindOnError(callback, OnError);\nOH_VideoProcessingCallback_BindOnState(callback, OnState);\nOH_VideoProcessingCallback_BindOnNewOutputBuffer(callback, OnNewOutputBuffer);\n// 注册回调函数\nret = OH_VideoProcessing_RegisterCallback(videoProcessor, callback, this);\n// 回调函数声明（其中userData会传递注册回调时传入的用户数据，如：this指针）\nvoid OnError(OH_VideoProcessing* videoProcessor, VideoProcessing_ErrorCode error, void* userData);\nvoid OnState(OH_VideoProcessing* videoProcessor, VideoProcessing_State state, void* userData);\nvoid OnNewOutputBuffer(OH_VideoProcessing* videoProcessor, uint32_t index, void* userData);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）配置细节增强档位，当前有高中低三档及NONE可选，若不配置则默认档位为LOW档。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建format实例\nOH_AVFormat* parameter = OH_AVFormat_Create();\n// 指定档位\nOH_AVFormat_SetIntValue(parameter, VIDEO_DETAIL_ENHANCER_PARAMETER_KEY_QUALITY_LEVEL, VIDEO_DETAIL_ENHANCER_QUALITY_LEVEL_HIGH);\n// 配置参数\nOH_VideoProcessing_SetParameter(videoProcessor, parameter);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取Surface。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//配置算法的输入\nret = OH_VideoProcessing_GetSurface(videoProcessor, inputWindow);\n// 将解码器的输出与算法的输入进行绑定，解码器输出的window分辨率即为算法输入分辨率\nOH_VideoDecoder_SetSurface(decoder_,  inputWindow_);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置Surface（配置送显）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 配置算法的输出，配置的输出window的分辨率即为算法输出分辨率\nret = OH_VideoProcessing_SetSurface(videoProcessor, outWindow);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建解码器输入输出线程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::unique_ptr<std::thread> videoDecInputThread_ = std::make_unique<std::thread>(&Player::VideoDecInputThread, this);\nstd::unique_ptr<std::thread> videoDecOutputThread_ = std::make_unique<std::thread>(&Player::VideoDecOutputThread, this);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动细节增强处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 启动解码\nint ret = OH_VideoDecoder_Start(decoder_);\n// 启动细节增强处理\nret = OH_VideoProcessing_Start(videoProcessor);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-video-processing-h/capi-video-processing-h#oh_videoprocessing_stop",
            children: "OH_VideoProcessing_Stop()"
          }), "停止细节增强。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "VideoProcessing_ErrorCode ret = OH_VideoProcessing_Stop(videoProcessor);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放处理实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "VideoProcessing_ErrorCode ret = OH_VideoProcessing_Destroy(videoProcessor)；\nvideoProcessor = nullptr;\nVideoProcessing_ErrorCode ret = OH_VideoProcessingCallback_Destroy(callback);\ncallback = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放处理资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "VideoProcessing_ErrorCode ret = OH_VideoProcessing_DeinitializeEnvironment();\n"
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